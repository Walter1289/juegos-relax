(()=>{var Tf=0,Hh=1,wf=2;var Ia=1,Tl=2,br=3,ns=0,cn=1,An=2,mi=0,is=1,Ui=2,Vh=3,Gh=4,Af=5;var ws=100,Cf=101,Rf=102,If=103,Pf=104,Lf=200,Df=201,Uf=202,Nf=203,Wh=204,Xh=205,Ff=206,Of=207,Bf=208,zf=209,kf=210,Hf=211,Vf=212,Gf=213,Wf=214,zo=0,ko=1,Ho=2,or=3,Vo=4,Go=5,Wo=6,Xo=7,wl=0,Xf=1,qf=2,Qn=0,qh=1,Yh=2,Zh=3,Jh=4,$h=5,Kh=6,jh=7;var Qh=300,ss=301,As=302,Al=303,Cl=304,Pa=306,Ki=1e3,oi=1001,qo=1002,Jt=1003,Yf=1004;var La=1005;var ln=1006,Rl=1007;var rs=1008;var Cn=1009,eu=1010,tu=1011,Mr=1012,Il=1013,ei=1014,Hn=1015,ti=1016,Pl=1017,Ll=1018,Sr=1020,nu=35902,iu=35899,su=1021,ru=1022,Vn=1023,ci=1026,as=1027,Er=1028,Dl=1029,os=1030,Ul=1031;var Nl=1033,Da=33776,Ua=33777,Na=33778,Fa=33779,Fl=35840,Ol=35841,Bl=35842,zl=35843,kl=36196,Hl=37492,Vl=37496,Gl=37488,Wl=37489,Oa=37490,Xl=37491,ql=37808,Yl=37809,Zl=37810,Jl=37811,$l=37812,Kl=37813,jl=37814,Ql=37815,ec=37816,tc=37817,nc=37818,ic=37819,sc=37820,rc=37821,ac=36492,oc=36494,lc=36495,cc=36283,hc=36284,Ba=36285,uc=36286;var Kr=2300,Yo=2301,Oo=2302,Ah=2303,Ch=2400,Rh=2401,Ih=2402;var Zf=3200;var za=0,Jf=1,Ni="",xn="srgb",jr="srgb-linear",Qr="linear",Mt="srgb";var Bo=7680;var $f=519,Kf=512,jf=513,Qf=514,dc=515,ep=516,tp=517,fc=518,np=519,au=35044;var ou="300 es",jn=2e3,lr=2001;function J0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function $0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ea(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ip(){let i=ea("canvas");return i.style.display="block",i}var zd={},cr=null;function ta(...i){let e="THREE."+i.shift();cr?cr("log",e,...i):console.log(e,...i)}function sp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ge(...i){i=sp(i);let e="THREE."+i.shift();if(cr)cr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function qe(...i){i=sp(i);let e="THREE."+i.shift();if(cr)cr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function xs(...i){let e=i.join(" ");e in zd||(zd[e]=!0,Ge(...i))}function rp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var ap={[zo]:ko,[Ho]:Wo,[Vo]:Xo,[or]:Go,[ko]:zo,[Wo]:Ho,[Xo]:Vo,[Go]:or},hi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Qc=Math.PI/180,Zo=180/Math.PI;function Ai(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function ht(i,e,t){return Math.max(e,Math.min(t,i))}function K0(i,e){return(i%e+e)%e}function eh(i,e,t){return(1-t)*i+t*e}function ai(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function At(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var fu=class fu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};fu.prototype.isVector2=!0;var oe=fu,Ln=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],p=r[a+1],g=r[a+2],M=r[a+3];if(u!==M||l!==d||c!==p||h!==g){let m=l*d+c*p+h*g+u*M;m<0&&(d=-d,p=-p,g=-g,M=-M,m=-m);let f=1-o;if(m<.9995){let x=Math.acos(m),b=Math.sin(x);f=Math.sin(f*x)/b,o=Math.sin(o*x)/b,l=l*f+d*o,c=c*f+p*o,h=h*f+g*o,u=u*f+M*o}else{l=l*f+d*o,c=c*f+p*o,h=h*f+g*o,u=u*f+M*o;let x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-o*p,e[t+2]=c*g+h*p+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},pu=class pu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return th.copy(this).projectOnVector(e),this.sub(th)}reflect(e){return this.sub(th.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};pu.prototype.isVector3=!0;var P=pu,th=new P,kd=new Ln,mu=class mu{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],M=s[0],m=s[3],f=s[6],x=s[1],b=s[4],_=s[7],S=s[2],T=s[5],R=s[8];return r[0]=a*M+o*x+l*S,r[3]=a*m+o*b+l*T,r[6]=a*f+o*_+l*R,r[1]=c*M+h*x+u*S,r[4]=c*m+h*b+u*T,r[7]=c*f+h*_+u*R,r[2]=d*M+p*x+g*S,r[5]=d*m+p*b+g*T,r[8]=d*f+p*_+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=t*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return e[0]=u*M,e[1]=(s*c-h*n)*M,e[2]=(o*n-s*a)*M,e[3]=d*M,e[4]=(h*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=p*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return xs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nh.makeScale(e,t)),this}rotate(e){return xs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nh.makeRotation(-e)),this}translate(e,t){return xs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};mu.prototype.isMatrix3=!0;var Ke=mu,nh=new Ke,Hd=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vd=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function j0(){let i={enabled:!0,workingColorSpace:jr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Mt&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Mt&&(s.r=ar(s.r),s.g=ar(s.g),s.b=ar(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ni?Qr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return xs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return xs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[jr]:{primaries:e,whitePoint:n,transfer:Qr,toXYZ:Hd,fromXYZ:Vd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:e,whitePoint:n,transfer:Mt,toXYZ:Hd,fromXYZ:Vd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}}),i}var ut=j0();function Ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ar(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Vs,Jo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vs===void 0&&(Vs=ea("canvas")),Vs.width=e.width,Vs.height=e.height;let s=Vs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Vs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=ea("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ci(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ci(t[n]/255)*255):t[n]=Ci(t[n]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Q0=0,hr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=Ai(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ih(s[a].image)):r.push(ih(s[a]))}else r=ih(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ih(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Jo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}var eg=0,sh=new P,_n=class i extends hi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=oi,s=oi,r=ln,a=rs,o=Vn,l=Cn,c=i.DEFAULT_ANISOTROPY,h=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=Ai(),this.name="",this.source=new hr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(sh).x}get height(){return this.source.getSize(sh).y}get depth(){return this.source.getSize(sh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ki:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case qo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ki:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case qo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Qh;_n.DEFAULT_ANISOTROPY=1;var gu=class gu{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],M=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,_=(p+1)/2,S=(f+1)/2,T=(h+d)/4,R=(u+M)/4,y=(g+m)/4;return b>_&&b>S?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=T/n,r=R/n):_>S?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=y/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=R/r,s=y/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(u-M)*(u-M)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-M)/x,this.z=(d-h)/x,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gu.prototype.isVector4=!0;var Ut=gu,$o=class extends hi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new _n(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new hr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},En=class extends $o{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},na=class extends _n{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ko=class extends _n{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var El=class El{constructor(e,t,n,s,r,a,o,l,c,h,u,d,p,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,p,g,M,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,p,g,M,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new El().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Gs.setFromMatrixColumn(e,0).length(),r=1/Gs.setFromMatrixColumn(e,1).length(),a=1/Gs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,p=a*u,g=o*h,M=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-M*c,t[9]=-o*l,t[2]=M-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,g=c*h,M=c*u;t[0]=d+M*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=M+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,g=c*h,M=c*u;t[0]=d-M*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=M-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,g=o*h,M=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+M,t[1]=l*u,t[5]=M*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,g=o*l,M=o*c;t[0]=l*h,t[4]=M-d*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-M*u}else if(e.order==="XZY"){let d=a*l,p=a*c,g=o*l,M=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+M,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=M*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tg,e,ng)}lookAt(e,t,n){let s=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),qi.crossVectors(n,In),qi.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),qi.crossVectors(n,In)),qi.normalize(),oo.crossVectors(In,qi),s[0]=qi.x,s[4]=oo.x,s[8]=In.x,s[1]=qi.y,s[5]=oo.y,s[9]=In.y,s[2]=qi.z,s[6]=oo.z,s[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],M=n[6],m=n[10],f=n[14],x=n[3],b=n[7],_=n[11],S=n[15],T=s[0],R=s[4],y=s[8],w=s[12],I=s[1],D=s[5],N=s[9],k=s[13],A=s[2],L=s[6],B=s[10],z=s[14],K=s[3],V=s[7],Y=s[11],j=s[15];return r[0]=a*T+o*I+l*A+c*K,r[4]=a*R+o*D+l*L+c*V,r[8]=a*y+o*N+l*B+c*Y,r[12]=a*w+o*k+l*z+c*j,r[1]=h*T+u*I+d*A+p*K,r[5]=h*R+u*D+d*L+p*V,r[9]=h*y+u*N+d*B+p*Y,r[13]=h*w+u*k+d*z+p*j,r[2]=g*T+M*I+m*A+f*K,r[6]=g*R+M*D+m*L+f*V,r[10]=g*y+M*N+m*B+f*Y,r[14]=g*w+M*k+m*z+f*j,r[3]=x*T+b*I+_*A+S*K,r[7]=x*R+b*D+_*L+S*V,r[11]=x*y+b*N+_*B+S*Y,r[15]=x*w+b*k+_*z+S*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],M=e[7],m=e[11],f=e[15],x=l*p-c*d,b=o*p-c*u,_=o*d-l*u,S=a*p-c*h,T=a*d-l*h,R=a*u-o*h;return t*(M*x-m*b+f*_)-n*(g*x-m*S+f*T)+s*(g*b-M*S+f*R)-r*(g*_-M*T+m*R)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],M=e[13],m=e[14],f=e[15],x=t*o-n*a,b=t*l-s*a,_=t*c-r*a,S=n*l-s*o,T=n*c-r*o,R=s*c-r*l,y=h*M-u*g,w=h*m-d*g,I=h*f-p*g,D=u*m-d*M,N=u*f-p*M,k=d*f-p*m,A=x*k-b*N+_*D+S*I-T*w+R*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/A;return e[0]=(o*k-l*N+c*D)*L,e[1]=(s*N-n*k-r*D)*L,e[2]=(M*R-m*T+f*S)*L,e[3]=(d*T-u*R-p*S)*L,e[4]=(l*I-a*k-c*w)*L,e[5]=(t*k-s*I+r*w)*L,e[6]=(m*_-g*R-f*b)*L,e[7]=(h*R-d*_+p*b)*L,e[8]=(a*N-o*I+c*y)*L,e[9]=(n*I-t*N-r*y)*L,e[10]=(g*T-M*_+f*x)*L,e[11]=(u*_-h*T-p*x)*L,e[12]=(o*w-a*D-l*y)*L,e[13]=(t*D-n*w+s*y)*L,e[14]=(M*b-g*S-m*x)*L,e[15]=(h*S-u*b+d*x)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,M=a*h,m=a*u,f=o*u,x=l*c,b=l*h,_=l*u,S=n.x,T=n.y,R=n.z;return s[0]=(1-(M+f))*S,s[1]=(p+_)*S,s[2]=(g-b)*S,s[3]=0,s[4]=(p-_)*T,s[5]=(1-(d+f))*T,s[6]=(m+x)*T,s[7]=0,s[8]=(g+b)*R,s[9]=(m-x)*R,s[10]=(1-(d+M))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Gs.set(s[0],s[1],s[2]).length(),o=Gs.set(s[4],s[5],s[6]).length(),l=Gs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Zn.copy(this);let c=1/a,h=1/o,u=1/l;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=h,Zn.elements[5]*=h,Zn.elements[6]*=h,Zn.elements[8]*=u,Zn.elements[9]*=u,Zn.elements[10]*=u,t.setFromRotationMatrix(Zn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=jn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s),g,M;if(l)g=r/(a-r),M=a*r/(a-r);else if(o===jn)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===lr)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=jn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s),g,M;if(l)g=1/(a-r),M=a/(a-r);else if(o===jn)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===lr)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};El.prototype.isMatrix4=!0;var ft=El,Gs=new P,Zn=new ft,tg=new P(0,0,0),ng=new P(1,1,1),qi=new P,oo=new P,In=new P,Gd=new ft,Wd=new Ln,Ri=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wd.setFromEuler(this),this.setFromQuaternion(Wd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ri.DEFAULT_ORDER="XYZ";var ur=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ig=0,Xd=new P,Ws=new Ln,bi=new ft,lo=new P,Br=new P,sg=new P,rg=new Ln,qd=new P(1,0,0),Yd=new P(0,1,0),Zd=new P(0,0,1),Jd={type:"added"},ag={type:"removed"},Xs={type:"childadded",child:null},rh={type:"childremoved",child:null},jt=class i extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new Ri,n=new Ln,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new Ke}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.premultiply(Ws),this}rotateX(e){return this.rotateOnAxis(qd,e)}rotateY(e){return this.rotateOnAxis(Yd,e)}rotateZ(e){return this.rotateOnAxis(Zd,e)}translateOnAxis(e,t){return Xd.copy(e).applyQuaternion(this.quaternion),this.position.add(Xd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qd,e)}translateY(e){return this.translateOnAxis(Yd,e)}translateZ(e){return this.translateOnAxis(Zd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?lo.copy(e):lo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Br,lo,this.up):bi.lookAt(lo,Br,this.up),this.quaternion.setFromRotationMatrix(bi),s&&(bi.extractRotation(s.matrixWorld),Ws.setFromRotationMatrix(bi),this.quaternion.premultiply(Ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jd),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ag),rh.child=e,this.dispatchEvent(rh),rh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jd),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,e,sg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,rg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};jt.DEFAULT_UP=new P(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ae=class extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},og={type:"move"},dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let M of e.hand.values()){let m=t.getJointPose(M,n),f=this._getHandJoint(c,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(og)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ae;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},op={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},co={h:0,s:0,l:0};function ah(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Oe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ut.workingColorSpace){if(e=K0(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ah(a,r,e+1/3),this.g=ah(a,r,e),this.b=ah(a,r,e-1/3)}return ut.colorSpaceToWorking(this,s),this}setStyle(e,t=xn){function n(r){r!==void 0&&parseFloat(r)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xn){let n=op[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return ut.workingToColorSpace(dn.copy(this),e),Math.round(ht(dn.r*255,0,255))*65536+Math.round(ht(dn.g*255,0,255))*256+Math.round(ht(dn.b*255,0,255))}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(dn.copy(this),t);let n=dn.r,s=dn.g,r=dn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=xn){ut.workingToColorSpace(dn.copy(this),e);let t=dn.r,n=dn.g,s=dn.b;return e!==xn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+t,Yi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yi),e.getHSL(co);let n=eh(Yi.h,co.h,t),s=eh(Yi.s,co.s,t),r=eh(Yi.l,co.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new Oe;Oe.NAMES=op;var ia=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Oe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},sa=class extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Jn=new P,Mi=new P,oh=new P,Si=new P,qs=new P,Ys=new P,$d=new P,lh=new P,ch=new P,hh=new P,uh=new Ut,dh=new Ut,fh=new Ut,wi=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Jn.subVectors(e,t),s.cross(Jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Jn.subVectors(s,t),Mi.subVectors(n,t),oh.subVectors(e,t);let a=Jn.dot(Jn),o=Jn.dot(Mi),l=Jn.dot(oh),c=Mi.dot(Mi),h=Mi.dot(oh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Si.x),l.addScaledVector(a,Si.y),l.addScaledVector(o,Si.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return uh.setScalar(0),dh.setScalar(0),fh.setScalar(0),uh.fromBufferAttribute(e,t),dh.fromBufferAttribute(e,n),fh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(uh,r.x),a.addScaledVector(dh,r.y),a.addScaledVector(fh,r.z),a}static isFrontFacing(e,t,n,s){return Jn.subVectors(n,t),Mi.subVectors(e,t),Jn.cross(Mi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Jn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;qs.subVectors(s,n),Ys.subVectors(r,n),lh.subVectors(e,n);let l=qs.dot(lh),c=Ys.dot(lh);if(l<=0&&c<=0)return t.copy(n);ch.subVectors(e,s);let h=qs.dot(ch),u=Ys.dot(ch);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(qs,a);hh.subVectors(e,r);let p=qs.dot(hh),g=Ys.dot(hh);if(g>=0&&p<=g)return t.copy(r);let M=p*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ys,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return $d.subVectors(r,s),o=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector($d,o);let f=1/(m+M+d);return a=M*f,o=d*f,t.copy(n).addScaledVector(qs,a).addScaledVector(Ys,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ui=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$n):$n.fromBufferAttribute(r,a),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ho.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ho.copy(n.boundingBox)),ho.applyMatrix4(e.matrixWorld),this.union(ho)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zr),uo.subVectors(this.max,zr),Zs.subVectors(e.a,zr),Js.subVectors(e.b,zr),$s.subVectors(e.c,zr),Zi.subVectors(Js,Zs),Ji.subVectors($s,Js),fs.subVectors(Zs,$s);let t=[0,-Zi.z,Zi.y,0,-Ji.z,Ji.y,0,-fs.z,fs.y,Zi.z,0,-Zi.x,Ji.z,0,-Ji.x,fs.z,0,-fs.x,-Zi.y,Zi.x,0,-Ji.y,Ji.x,0,-fs.y,fs.x,0];return!ph(t,Zs,Js,$s,uo)||(t=[1,0,0,0,1,0,0,0,1],!ph(t,Zs,Js,$s,uo))?!1:(fo.crossVectors(Zi,Ji),t=[fo.x,fo.y,fo.z],ph(t,Zs,Js,$s,uo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ei=[new P,new P,new P,new P,new P,new P,new P,new P],$n=new P,ho=new ui,Zs=new P,Js=new P,$s=new P,Zi=new P,Ji=new P,fs=new P,zr=new P,uo=new P,fo=new P,ps=new P;function ph(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ps.fromArray(i,r);let o=s.x*Math.abs(ps.x)+s.y*Math.abs(ps.y)+s.z*Math.abs(ps.z),l=e.dot(ps),c=t.dot(ps),h=n.dot(ps);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Zt=new P,po=new oe,lg=0,Gt=class extends hi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=au,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)po.fromBufferAttribute(this,t),po.applyMatrix3(e),this.setXY(t,po.x,po.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),s=At(s,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ra=class extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var aa=class extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var st=class extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},cg=new ui,kr=new P,mh=new P,di=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):cg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kr.subVectors(e,this.center);let t=kr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(kr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kr.copy(e.center).add(mh)),this.expandByPoint(kr.copy(e.center).sub(mh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},hg=0,zn=new ft,gh=new jt,Ks=new P,Pn=new ui,Hr=new ui,sn=new P,Et=class i extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hg++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(J0(e)?aa:ra)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,n){return zn.makeTranslation(e,t,n),this.applyMatrix4(zn),this}scale(e,t,n){return zn.makeScale(e,t,n),this.applyMatrix4(zn),this}lookAt(e){return gh.lookAt(e),gh.updateMatrix(),this.applyMatrix4(gh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new st(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Hr.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(Pn.min,Hr.min),Pn.expandByPoint(sn),sn.addVectors(Pn.max,Hr.max),Pn.expandByPoint(sn)):(Pn.expandByPoint(Hr.min),Pn.expandByPoint(Hr.max))}Pn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)sn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(sn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)sn.fromBufferAttribute(o,c),l&&(Ks.fromBufferAttribute(e,c),sn.add(Ks)),s=Math.max(s,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Gt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new P,l[y]=new P;let c=new P,h=new P,u=new P,d=new oe,p=new oe,g=new oe,M=new P,m=new P;function f(y,w,I){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,I),d.fromBufferAttribute(r,y),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,I),h.sub(c),u.sub(c),p.sub(d),g.sub(d);let D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(D),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(D),o[y].add(M),o[w].add(M),o[I].add(M),l[y].add(m),l[w].add(m),l[I].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let y=0,w=x.length;y<w;++y){let I=x[y],D=I.start,N=I.count;for(let k=D,A=D+N;k<A;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let b=new P,_=new P,S=new P,T=new P;function R(y){S.fromBufferAttribute(s,y),T.copy(S);let w=o[y];b.copy(w),b.sub(S.multiplyScalar(S.dot(w))).normalize(),_.crossVectors(T,w);let D=_.dot(l[y])<0?-1:1;a.setXYZW(y,b.x,b.y,b.z,D)}for(let y=0,w=x.length;y<w;++y){let I=x[y],D=I.start,N=I.count;for(let k=D,A=D+N;k<A;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),M=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Gt(d,h,u)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},jo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=au,this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},gn=new P,oa=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ai(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ai(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ai(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ai(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),s=At(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),s=At(s,this.array),r=At(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ta("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ta("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},xh=new P,ug=new P,dg=new Ke,Kn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=xh.subVectors(n,t).cross(ug.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(xh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||dg.getNormalMatrix(e),s=this.coplanarPoint(xh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},fg=0,Tn=class extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=is,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wh,this.blendDst=Xh,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$f,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bo,this.stencilZFail=Bo,this.stencilZPass=Bo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Kn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new oe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},fr=class extends Tn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},js,Vr=new P,Qs=new P,er=new P,tr=new oe,Gr=new oe,lp=new ft,mo=new P,Wr=new P,go=new P,Kd=new oe,_h=new oe,jd=new oe,la=class extends jt{constructor(e=new fr){if(super(),this.isSprite=!0,this.type="Sprite",js===void 0){js=new Et;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new jo(t,5);js.setIndex([0,1,2,0,2,3]),js.setAttribute("position",new oa(n,3,0,!1)),js.setAttribute("uv",new oa(n,2,3,!1))}this.geometry=js,this.material=e,this.center=new oe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&qe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qs.setFromMatrixScale(this.matrixWorld),lp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),er.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qs.multiplyScalar(-er.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;xo(mo.set(-.5,-.5,0),er,a,Qs,s,r),xo(Wr.set(.5,-.5,0),er,a,Qs,s,r),xo(go.set(.5,.5,0),er,a,Qs,s,r),Kd.set(0,0),_h.set(1,0),jd.set(1,1);let o=e.ray.intersectTriangle(mo,Wr,go,!1,Vr);if(o===null&&(xo(Wr.set(-.5,.5,0),er,a,Qs,s,r),_h.set(0,1),o=e.ray.intersectTriangle(mo,go,Wr,!1,Vr),o===null))return;let l=e.ray.origin.distanceTo(Vr);l<e.near||l>e.far||t.push({distance:l,point:Vr.clone(),uv:wi.getInterpolation(Vr,mo,Wr,go,Kd,_h,jd,new oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function xo(i,e,t,n,s,r){tr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Gr.x=r*tr.x-s*tr.y,Gr.y=s*tr.x+r*tr.y):Gr.copy(tr),i.copy(e),i.x+=Gr.x,i.y+=Gr.y,i.applyMatrix4(lp)}var Ti=new P,yh=new P,_o=new P,yo=new P,_s=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){yh.copy(e).add(t).multiplyScalar(.5),_o.copy(t).sub(e).normalize(),yo.copy(this.origin).sub(yh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(_o),o=yo.dot(this.direction),l=-yo.dot(_o),c=yo.lengthSq(),h=Math.abs(1-a*a),u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let M=1/h;u*=M,d*=M,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(yh).addScaledVector(_o,d),p}intersectSphere(e,t){if(e.radius<0)return null;Ti.subVectors(e.center,this.origin);let n=Ti.dot(this.direction),s=Ti.dot(Ti)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,p=e.z-a.z,g=t.x-a.x,M=t.y-a.y,m=t.z-a.z,f=n.x-a.x,x=n.y-a.y,b=n.z-a.z,_=Math.abs(l),S=Math.abs(c),T=Math.abs(h),R,y,w,I,D,N,k,A,L,B,z,K;if(_>=S&&_>=T?(w=l,N=u,L=g,K=f,l>=0?(R=c,y=h,I=d,D=p,k=M,A=m,B=x,z=b):(R=h,y=c,I=p,D=d,k=m,A=M,B=b,z=x)):S>=T?(w=c,N=d,L=M,K=x,c>=0?(R=h,y=l,I=p,D=u,k=m,A=g,B=b,z=f):(R=l,y=h,I=u,D=p,k=g,A=m,B=f,z=b)):(w=h,N=p,L=m,K=b,h>=0?(R=l,y=c,I=u,D=d,k=g,A=M,B=f,z=x):(R=c,y=l,I=d,D=u,k=M,A=g,B=x,z=f)),w===0)return null;let V=R/w,Y=y/w,j=1/w,Pe=I-V*N,Ce=D-Y*N,_t=k-V*L,ot=A-Y*L,pt=B-V*K,$=z-Y*K,te=pt*ot-$*_t,Se=Pe*$-Ce*pt,Ye=_t*Ce-ot*Pe;if(s){if(te<0||Se<0||Ye<0)return null}else if((te<0||Se<0||Ye<0)&&(te>0||Se>0||Ye>0))return null;let Re=te+Se+Ye;if(Re===0)return null;let Je=j*(te*N+Se*L+Ye*K);return(Re>0?Je<0:Je>0)?null:this.at(Je/Re,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},at=class extends Tn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Qd=new ft,ms=new _s,vo=new di,ef=new P,bo=new P,Mo=new P,So=new P,vh=new P,Eo=new P,tf=new P,To=new P,ge=class extends jt{constructor(e=new Et,t=new at){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Eo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(vh.fromBufferAttribute(u,e),a?Eo.addScaledVector(vh,h):Eo.addScaledVector(vh.sub(t),h))}t.add(Eo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(r),ms.copy(e.ray).recast(e.near),!(vo.containsPoint(ms.origin)===!1&&(ms.intersectSphere(vo,ef)===null||ms.origin.distanceToSquared(ef)>(e.far-e.near)**2))&&(Qd.copy(r).invert(),ms.copy(e.ray).applyMatrix4(Qd),!(n.boundingBox!==null&&ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ms)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=d.length;g<M;g++){let m=d[g],f=a[m.materialIndex],x=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=x,S=b;_<S;_+=3){let T=o.getX(_),R=o.getX(_+1),y=o.getX(_+2);s=wo(this,f,e,n,c,h,u,T,R,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=g,f=M;m<f;m+=3){let x=o.getX(m),b=o.getX(m+1),_=o.getX(m+2);s=wo(this,a,e,n,c,h,u,x,b,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=d.length;g<M;g++){let m=d[g],f=a[m.materialIndex],x=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=x,S=b;_<S;_+=3){let T=_,R=_+1,y=_+2;s=wo(this,f,e,n,c,h,u,T,R,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=g,f=M;m<f;m+=3){let x=m,b=m+1,_=m+2;s=wo(this,a,e,n,c,h,u,x,b,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function pg(i,e,t,n,s,r,a,o){let l;if(e.side===cn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ns,o),l===null)return null;To.copy(o),To.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(To);return c<t.near||c>t.far?null:{distance:c,point:To.clone(),object:i}}function wo(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,bo),i.getVertexPosition(l,Mo),i.getVertexPosition(c,So);let h=pg(i,e,t,n,bo,Mo,So,tf);if(h){let u=new P;wi.getBarycoord(tf,bo,Mo,So,u),s&&(h.uv=wi.getInterpolatedAttribute(s,o,l,c,u,new oe)),r&&(h.uv1=wi.getInterpolatedAttribute(r,o,l,c,u,new oe)),a&&(h.normal=wi.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new P,materialIndex:0};wi.getNormal(bo,Mo,So,d.normal),h.face=d,h.barycoord=u}return h}var ys=class extends _n{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Jt,h=Jt,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ca=class extends Gt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},nr=new ft,nf=new ft,Ao=[],sf=new ui,mg=new ft,Xr=new ge,qr=new di,vs=class extends ge{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ca(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,mg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,nr),sf.copy(e.boundingBox).applyMatrix4(nr),this.boundingBox.union(sf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new di),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,nr),qr.copy(e.boundingSphere).applyMatrix4(nr),this.boundingSphere.union(qr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Xr.geometry=this.geometry,Xr.material=this.material,Xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qr.copy(this.boundingSphere),qr.applyMatrix4(n),e.ray.intersectsSphere(qr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,nr),nf.multiplyMatrices(n,nr),Xr.matrixWorld=nf,Xr.raycast(e,Ao);for(let a=0,o=Ao.length;a<o;a++){let l=Ao[a];l.instanceId=r,l.object=this,t.push(l)}Ao.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ca(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ys(new Float32Array(s*this.count),s,this.count,Er,Hn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},gs=new di,gg=new oe(.5,.5),Co=new P,pr=class{constructor(e=new Kn,t=new Kn,n=new Kn,s=new Kn,r=new Kn,a=new Kn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],g=r[8],M=r[9],m=r[10],f=r[11],x=r[12],b=r[13],_=r[14],S=r[15];if(s[0].setComponents(c-a,p-h,f-g,S-x).normalize(),s[1].setComponents(c+a,p+h,f+g,S+x).normalize(),s[2].setComponents(c+o,p+u,f+M,S+b).normalize(),s[3].setComponents(c-o,p-u,f-M,S-b).normalize(),n)s[4].setComponents(l,d,m,_).normalize(),s[5].setComponents(c-l,p-d,f-m,S-_).normalize();else if(s[4].setComponents(c-l,p-d,f-m,S-_).normalize(),t===jn)s[5].setComponents(c+l,p+d,f+m,S+_).normalize();else if(t===lr)s[5].setComponents(l,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(e){gs.center.set(0,0,0);let t=gg.distanceTo(e.center);return gs.radius=.7071067811865476+t,gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Co.x=s.normal.x>0?e.max.x:e.min.x,Co.y=s.normal.y>0?e.max.y:e.min.y,Co.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Co)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var mr=class extends Tn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Qo=new P,el=new P,rf=new ft,Yr=new _s,Ro=new di,bh=new P,af=new P,tl=class extends jt{constructor(e=new Et,t=new mr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Qo.fromBufferAttribute(t,s-1),el.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Qo.distanceTo(el);e.setAttribute("lineDistance",new st(n,1))}else Ge("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(s),Ro.radius+=r,e.ray.intersectsSphere(Ro)===!1)return;rf.copy(s).invert(),Yr.copy(e.ray).applyMatrix4(rf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let M=p,m=g-1;M<m;M+=c){let f=h.getX(M),x=h.getX(M+1),b=Io(this,e,Yr,l,f,x,M);b&&t.push(b)}if(this.isLineLoop){let M=h.getX(g-1),m=h.getX(p),f=Io(this,e,Yr,l,M,m,g-1);f&&t.push(f)}}else{let p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let M=p,m=g-1;M<m;M+=c){let f=Io(this,e,Yr,l,M,M+1,M);f&&t.push(f)}if(this.isLineLoop){let M=Io(this,e,Yr,l,g-1,p,g-1);M&&t.push(M)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Io(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Qo.fromBufferAttribute(o,s),el.fromBufferAttribute(o,r),t.distanceSqToSegment(Qo,el,bh,af)>n)return;bh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(bh);if(!(c<e.near||c>e.far))return{distance:c,point:af.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var of=new P,lf=new P,ha=class extends tl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)of.fromBufferAttribute(t,s),lf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+of.distanceTo(lf);e.setAttribute("lineDistance",new st(n,1))}else Ge("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var fi=class extends Tn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},cf=new ft,Ph=new _s,Po=new di,Lo=new P,Ii=class extends jt{constructor(e=new Et,t=new fi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(s),Po.radius+=r,e.ray.intersectsSphere(Po)===!1)return;cf.copy(s).invert(),Ph.copy(e.ray).applyMatrix4(cf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,M=p;g<M;g++){let m=c.getX(g);Lo.fromBufferAttribute(u,m),hf(Lo,m,l,s,e,t,this)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,M=p;g<M;g++)Lo.fromBufferAttribute(u,g),hf(Lo,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function hf(i,e,t,n,s,r,a){let o=Ph.distanceSqToPoint(i);if(o<t){let l=new P;Ph.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ua=class extends _n{constructor(e=[],t=ss,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Pi=class extends _n{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ji=class extends _n{constructor(e,t,n=ei,s,r,a,o=Jt,l=Jt,c,h=ci,u=1){if(h!==ci&&h!==as)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},nl=class extends ji{constructor(e,t=ei,n=ss,s,r,a=Jt,o=Jt,l,c=ci){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},da=class extends _n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},rn=class i extends Et{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(u,2));function g(M,m,f,x,b,_,S,T,R,y,w){let I=_/R,D=S/y,N=_/2,k=S/2,A=T/2,L=R+1,B=y+1,z=0,K=0,V=new P;for(let Y=0;Y<B;Y++){let j=Y*D-k;for(let Pe=0;Pe<L;Pe++){let Ce=Pe*I-N;V[M]=Ce*x,V[m]=j*b,V[f]=A,c.push(V.x,V.y,V.z),V[M]=0,V[m]=0,V[f]=T>0?1:-1,h.push(V.x,V.y,V.z),u.push(Pe/R),u.push(1-Y/y),z+=1}}for(let Y=0;Y<y;Y++)for(let j=0;j<R;j++){let Pe=d+j+L*Y,Ce=d+j+L*(Y+1),_t=d+(j+1)+L*(Y+1),ot=d+(j+1)+L*Y;l.push(Pe,Ce,ot),l.push(Ce,_t,ot),K+=6}o.addGroup(p,K,w),p+=K,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},fa=class i extends Et{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,p=2*u+d,g=n*2+r,M=s+1,m=new P,f=new P;for(let x=0;x<=g;x++){let b=0,_=0,S=0,T=0;if(x<=n){let w=x/n,I=w*Math.PI/2;_=-h-e*Math.cos(I),S=e*Math.sin(I),T=-e*Math.cos(I),b=w*u}else if(x<=n+r){let w=(x-n)/r;_=-h+w*t,S=e,T=0,b=u+w*d}else{let w=(x-n-r)/n,I=w*Math.PI/2;_=h+e*Math.sin(I),S=e*Math.cos(I),T=e*Math.sin(I),b=u+d+w*u}let R=Math.max(0,Math.min(1,b/p)),y=0;x===0?y=.5/s:x===g&&(y=-.5/s);for(let w=0;w<=s;w++){let I=w/s,D=I*Math.PI*2,N=Math.sin(D),k=Math.cos(D);f.x=-S*k,f.y=_,f.z=S*N,o.push(f.x,f.y,f.z),m.set(-S*k,T,S*N),m.normalize(),l.push(m.x,m.y,m.z),c.push(I+y,R)}if(x>0){let w=(x-1)*M;for(let I=0;I<s;I++){let D=w+I,N=w+I+1,k=x*M+I,A=x*M+I+1;a.push(D,N,k),a.push(N,A,k)}}}this.setIndex(a),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(l,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},pi=class i extends Et{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new P,h=new oe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(o,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},zt=class i extends Et{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,M=[],m=n/2,f=0;x(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new st(u,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(p,2));function x(){let _=new P,S=new P,T=0,R=(t-e)/n;for(let y=0;y<=r;y++){let w=[],I=y/r,D=I*(t-e)+e;for(let N=0;N<=s;N++){let k=N/s,A=k*l+o,L=Math.sin(A),B=Math.cos(A);S.x=D*L,S.y=-I*n+m,S.z=D*B,u.push(S.x,S.y,S.z),_.set(L,R,B).normalize(),d.push(_.x,_.y,_.z),p.push(k,1-I),w.push(g++)}M.push(w)}for(let y=0;y<s;y++)for(let w=0;w<r;w++){let I=M[w][y],D=M[w+1][y],N=M[w+1][y+1],k=M[w][y+1];(e>0||w!==0)&&(h.push(I,D,k),T+=3),(t>0||w!==r-1)&&(h.push(D,N,k),T+=3)}c.addGroup(f,T,0),f+=T}function b(_){let S=g,T=new oe,R=new P,y=0,w=_===!0?e:t,I=_===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,m*I,0),d.push(0,I,0),p.push(.5,.5),g++;let D=g;for(let N=0;N<=s;N++){let A=N/s*l+o,L=Math.cos(A),B=Math.sin(A);R.x=w*B,R.y=m*I,R.z=w*L,u.push(R.x,R.y,R.z),d.push(0,I,0),T.x=L*.5+.5,T.y=B*.5*I+.5,p.push(T.x,T.y),g++}for(let N=0;N<s;N++){let k=S+N,A=D+N;_===!0?h.push(A,A+1,k):h.push(A+1,A,k),y+=3}c.addGroup(f,y,_===!0?1:2),f+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Qt=class i extends zt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},pa=class i extends Et{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new st(r,3)),this.setAttribute("normal",new st(r.slice(),3)),this.setAttribute("uv",new st(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let b=new P,_=new P,S=new P;for(let T=0;T<t.length;T+=3)p(t[T+0],b),p(t[T+1],_),p(t[T+2],S),l(b,_,S,x)}function l(x,b,_,S){let T=S+1,R=[];for(let y=0;y<=T;y++){R[y]=[];let w=x.clone().lerp(_,y/T),I=b.clone().lerp(_,y/T),D=T-y;for(let N=0;N<=D;N++)N===0&&y===T?R[y][N]=w:R[y][N]=w.clone().lerp(I,N/D)}for(let y=0;y<T;y++)for(let w=0;w<2*(T-y)-1;w++){let I=Math.floor(w/2);w%2===0?(d(R[y][I+1]),d(R[y+1][I]),d(R[y][I])):(d(R[y][I+1]),d(R[y+1][I+1]),d(R[y+1][I]))}}function c(x){let b=new P;for(let _=0;_<r.length;_+=3)b.x=r[_+0],b.y=r[_+1],b.z=r[_+2],b.normalize().multiplyScalar(x),r[_+0]=b.x,r[_+1]=b.y,r[_+2]=b.z}function h(){let x=new P;for(let b=0;b<r.length;b+=3){x.x=r[b+0],x.y=r[b+1],x.z=r[b+2];let _=m(x)/2/Math.PI+.5,S=f(x)/Math.PI+.5;a.push(_,1-S)}g(),u()}function u(){for(let x=0;x<a.length;x+=6){let b=a[x+0],_=a[x+2],S=a[x+4],T=Math.max(b,_,S),R=Math.min(b,_,S);T>.9&&R<.1&&(b<.2&&(a[x+0]+=1),_<.2&&(a[x+2]+=1),S<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function p(x,b){let _=x*3;b.x=e[_+0],b.y=e[_+1],b.z=e[_+2]}function g(){let x=new P,b=new P,_=new P,S=new P,T=new oe,R=new oe,y=new oe;for(let w=0,I=0;w<r.length;w+=9,I+=6){x.set(r[w+0],r[w+1],r[w+2]),b.set(r[w+3],r[w+4],r[w+5]),_.set(r[w+6],r[w+7],r[w+8]),T.set(a[I+0],a[I+1]),R.set(a[I+2],a[I+3]),y.set(a[I+4],a[I+5]),S.copy(x).add(b).add(_).divideScalar(3);let D=m(S);M(T,I+0,x,D),M(R,I+2,b,D),M(y,I+4,_,D)}}function M(x,b,_,S){S<0&&x.x===1&&(a[b]=x.x-1),_.x===0&&_.z===0&&(a[b]=S/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function f(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ge("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new oe:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,s=[],r=[],a=[],o=new P,l=new ft;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ht(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(ht(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},gr=class extends Dn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new oe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},il=class extends gr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function lu(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var uf=new P,df=new P,Mh=new lu,Sh=new lu,Eh=new lu,sl=class extends Dn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(df.subVectors(s[0],s[1]).add(s[0]),c=df);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(uf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=uf),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),M=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),Mh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,M,m),Sh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,M,m),Eh.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,M,m)}else this.curveType==="catmullrom"&&(Mh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Sh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Eh.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Mh.calc(l),Sh.calc(l),Eh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ff(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function xg(i,e){let t=1-i;return t*t*e}function _g(i,e){return 2*(1-i)*i*e}function yg(i,e){return i*i*e}function Jr(i,e,t,n){return xg(i,e)+_g(i,t)+yg(i,n)}function vg(i,e){let t=1-i;return t*t*t*e}function bg(i,e){let t=1-i;return 3*t*t*i*e}function Mg(i,e){return 3*(1-i)*i*i*e}function Sg(i,e){return i*i*i*e}function $r(i,e,t,n,s){return vg(i,e)+bg(i,t)+Mg(i,n)+Sg(i,s)}var ma=class extends Dn{constructor(e=new oe,t=new oe,n=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set($r(e,s.x,r.x,a.x,o.x),$r(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},rl=class extends Dn{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set($r(e,s.x,r.x,a.x,o.x),$r(e,s.y,r.y,a.y,o.y),$r(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ga=class extends Dn{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},al=class extends Dn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xa=class extends Dn{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Jr(e,s.x,r.x,a.x),Jr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ol=class extends Dn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Jr(e,s.x,r.x,a.x),Jr(e,s.y,r.y,a.y),Jr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_a=class extends Dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(ff(o,l.x,c.x,h.x,u.x),ff(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new oe().fromArray(s))}return this}},Lh=Object.freeze({__proto__:null,ArcCurve:il,CatmullRomCurve3:sl,CubicBezierCurve:ma,CubicBezierCurve3:rl,EllipseCurve:gr,LineCurve:ga,LineCurve3:al,QuadraticBezierCurve:xa,QuadraticBezierCurve3:ol,SplineCurve:_a}),ll=class extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Lh[s.type]().fromJSON(s))}return this}},ya=class extends ll{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ga(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new xa(this.currentPoint.clone(),new oe(e,t),new oe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new ma(this.currentPoint.clone(),new oe(e,t),new oe(n,s),new oe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new _a(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new gr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Li=class extends ya{constructor(e){super(e),this.uuid=Ai(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ya().fromJSON(s))}return this}};function Eg(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=cp(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Rg(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,u=l;for(let d=t;d<s;d+=t){let p=i[d],g=i[d+1];p<o&&(o=p),g<l&&(l=g),p>h&&(h=p),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return va(r,a,t,o,l,c,0),a}function cp(i,e,t,n,s){let r;if(s===kg(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=pf(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=pf(a/n|0,i[a],i[a+1],r);return r&&xr(r,r.next)&&(Ma(r),r=r.next),r}function bs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(xr(t,t.next)||kt(t.prev,t,t.next)===0)){if(Ma(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function va(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Ug(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?wg(i,n,s,r):Tg(i)){e.push(l.i,i.i,c.i),Ma(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Ag(bs(i),e),va(i,e,t,n,s,r,2)):a===2&&Cg(i,e,t,n,s,r):va(bs(i),e,t,n,s,r,1);break}}}function Tg(i){let e=i.prev,t=i,n=i.next;if(kt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),p=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&Zr(s,o,r,l,a,c,g.x,g.y)&&kt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function wg(i,e,t,n){let s=i.prev,r=i,a=i.next;if(kt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,p=Math.min(o,l,c),g=Math.min(h,u,d),M=Math.max(o,l,c),m=Math.max(h,u,d),f=Dh(p,g,e,t,n),x=Dh(M,m,e,t,n),b=i.prevZ,_=i.nextZ;for(;b&&b.z>=f&&_&&_.z<=x;){if(b.x>=p&&b.x<=M&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Zr(o,h,l,u,c,d,b.x,b.y)&&kt(b.prev,b,b.next)>=0||(b=b.prevZ,_.x>=p&&_.x<=M&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&Zr(o,h,l,u,c,d,_.x,_.y)&&kt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;b&&b.z>=f;){if(b.x>=p&&b.x<=M&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Zr(o,h,l,u,c,d,b.x,b.y)&&kt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;_&&_.z<=x;){if(_.x>=p&&_.x<=M&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&Zr(o,h,l,u,c,d,_.x,_.y)&&kt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Ag(i,e){let t=i;do{let n=t.prev,s=t.next.next;!xr(n,s)&&up(n,t,t.next,s)&&ba(n,s)&&ba(s,n)&&(e.push(n.i,t.i,s.i),Ma(t),Ma(t.next),t=i=s),t=t.next}while(t!==i);return bs(t)}function Cg(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Og(a,o)){let l=dp(a,o);a=bs(a,a.next),l=bs(l,l.next),va(a,e,t,n,s,r,0),va(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Rg(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=cp(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Fg(c))}s.sort(Ig);for(let r=0;r<s.length;r++)t=Pg(s[r],t);return t}function Ig(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Pg(i,e){let t=Lg(i,e);if(!t)return e;let n=dp(t,i);return bs(n,n.next),bs(t,t.next)}function Lg(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(xr(i,t))return t;do{if(xr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&hp(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);ba(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Dg(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function Dg(i,e){return kt(i.prev,i,e.prev)<0&&kt(e.next,i,i.next)<0}function Ug(i,e,t,n){let s=i;do s.z===0&&(s.z=Dh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ng(s)}function Ng(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Dh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Fg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function hp(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Zr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&hp(i,e,t,n,s,r,a,o)}function Og(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Bg(i,e)&&(ba(i,e)&&ba(e,i)&&zg(i,e)&&(kt(i.prev,i,e.prev)||kt(i,e.prev,e))||xr(i,e)&&kt(i.prev,i,i.next)>0&&kt(e.prev,e,e.next)>0)}function kt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function xr(i,e){return i.x===e.x&&i.y===e.y}function up(i,e,t,n){let s=Uo(kt(i,e,t)),r=Uo(kt(i,e,n)),a=Uo(kt(t,n,i)),o=Uo(kt(t,n,e));return!!(s!==r&&a!==o||s===0&&Do(i,t,e)||r===0&&Do(i,n,e)||a===0&&Do(t,i,n)||o===0&&Do(t,e,n))}function Do(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Uo(i){return i>0?1:i<0?-1:0}function Bg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&up(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ba(i,e){return kt(i.prev,i,i.next)<0?kt(i,e,i.next)>=0&&kt(i,i.prev,e)>=0:kt(i,e,i.prev)<0||kt(i,i.next,e)<0}function zg(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function dp(i,e){let t=Uh(i.i,i.x,i.y),n=Uh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function pf(i,e,t,n){let s=Uh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ma(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Uh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function kg(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Nh=class{static triangulate(e,t,n=2){return Eg(e,t,n)}},li=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];mf(e),gf(n,e);let a=e.length;t.forEach(mf);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,gf(n,t[l]);let o=Nh.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function mf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function gf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Sa=class i extends Et{constructor(e=new Li([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new st(s,3)),this.setAttribute("uv",new st(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:Hg,b,_=!1,S,T,R,y;if(f){b=f.getSpacedPoints(h),_=!0,d=!1;let ne=f.isCatmullRomCurve3?f.closed:!1;S=f.computeFrenetFrames(h,ne),T=new P,R=new P,y=new P}d||(m=0,p=0,g=0,M=0);let w=o.extractPoints(c),I=w.shape,D=w.holes;if(!li.isClockWise(I)){I=I.reverse();for(let ne=0,ae=D.length;ne<ae;ne++){let le=D[ne];li.isClockWise(le)&&(D[ne]=le.reverse())}}function k(ne){let le=10000000000000001e-36,he=ne[0];for(let me=1;me<=ne.length;me++){let We=me%ne.length,He=ne[We],$e=He.x-he.x,je=He.y-he.y,U=$e*$e+je*je,yt=Math.max(Math.abs(He.x),Math.abs(He.y),Math.abs(he.x),Math.abs(he.y)),lt=le*yt*yt;if(U<=lt){ne.splice(We,1),me--;continue}he=He}}k(I),D.forEach(k);let A=D.length,L=I;for(let ne=0;ne<A;ne++){let ae=D[ne];I=I.concat(ae)}function B(ne,ae,le){return ae||qe("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(ae,le)}let z=I.length;function K(ne,ae,le){let he,me,We,He=ne.x-ae.x,$e=ne.y-ae.y,je=le.x-ne.x,U=le.y-ne.y,yt=He*He+$e*$e,lt=He*U-$e*je;if(Math.abs(lt)>Number.EPSILON){let C=Math.sqrt(yt),v=Math.sqrt(je*je+U*U),H=ae.x-$e/C,X=ae.y+He/C,Z=le.x-U/v,de=le.y+je/v,pe=((Z-H)*U-(de-X)*je)/(He*U-$e*je);he=H+He*pe-ne.x,me=X+$e*pe-ne.y;let J=he*he+me*me;if(J<=2)return new oe(he,me);We=Math.sqrt(J/2)}else{let C=!1;He>Number.EPSILON?je>Number.EPSILON&&(C=!0):He<-Number.EPSILON?je<-Number.EPSILON&&(C=!0):Math.sign($e)===Math.sign(U)&&(C=!0),C?(he=-$e,me=He,We=Math.sqrt(yt)):(he=He,me=$e,We=Math.sqrt(yt/2))}return new oe(he/We,me/We)}let V=[];for(let ne=0,ae=L.length,le=ae-1,he=ne+1;ne<ae;ne++,le++,he++)le===ae&&(le=0),he===ae&&(he=0),V[ne]=K(L[ne],L[le],L[he]);let Y=[],j,Pe=V.concat();for(let ne=0,ae=A;ne<ae;ne++){let le=D[ne];j=[];for(let he=0,me=le.length,We=me-1,He=he+1;he<me;he++,We++,He++)We===me&&(We=0),He===me&&(He=0),j[he]=K(le[he],le[We],le[He]);Y.push(j),Pe=Pe.concat(j)}let Ce;if(m===0)Ce=li.triangulateShape(L,D);else{let ne=[],ae=[];for(let le=0;le<m;le++){let he=le/m,me=p*Math.cos(he*Math.PI/2),We=g*Math.sin(he*Math.PI/2)+M;for(let He=0,$e=L.length;He<$e;He++){let je=B(L[He],V[He],We);Se(je.x,je.y,-me),he===0&&ne.push(je)}for(let He=0,$e=A;He<$e;He++){let je=D[He];j=Y[He];let U=[];for(let yt=0,lt=je.length;yt<lt;yt++){let C=B(je[yt],j[yt],We);Se(C.x,C.y,-me),he===0&&U.push(C)}he===0&&ae.push(U)}}Ce=li.triangulateShape(ne,ae)}let _t=Ce.length,ot=g+M;for(let ne=0;ne<z;ne++){let ae=d?B(I[ne],Pe[ne],ot):I[ne];_?(R.copy(S.normals[0]).multiplyScalar(ae.x),T.copy(S.binormals[0]).multiplyScalar(ae.y),y.copy(b[0]).add(R).add(T),Se(y.x,y.y,y.z)):Se(ae.x,ae.y,0)}for(let ne=1;ne<=h;ne++)for(let ae=0;ae<z;ae++){let le=d?B(I[ae],Pe[ae],ot):I[ae];_?(R.copy(S.normals[ne]).multiplyScalar(le.x),T.copy(S.binormals[ne]).multiplyScalar(le.y),y.copy(b[ne]).add(R).add(T),Se(y.x,y.y,y.z)):Se(le.x,le.y,u/h*ne)}for(let ne=m-1;ne>=0;ne--){let ae=ne/m,le=p*Math.cos(ae*Math.PI/2),he=g*Math.sin(ae*Math.PI/2)+M;for(let me=0,We=L.length;me<We;me++){let He=B(L[me],V[me],he);Se(He.x,He.y,u+le)}for(let me=0,We=D.length;me<We;me++){let He=D[me];j=Y[me];for(let $e=0,je=He.length;$e<je;$e++){let U=B(He[$e],j[$e],he);_?Se(U.x,U.y+b[h-1].y,b[h-1].x+le):Se(U.x,U.y,u+le)}}}pt(),$();function pt(){let ne=s.length/3;if(d){let ae=0,le=z*ae;for(let he=0;he<_t;he++){let me=Ce[he];Ye(me[2]+le,me[1]+le,me[0]+le)}ae=h+m*2,le=z*ae;for(let he=0;he<_t;he++){let me=Ce[he];Ye(me[0]+le,me[1]+le,me[2]+le)}}else{for(let ae=0;ae<_t;ae++){let le=Ce[ae];Ye(le[2],le[1],le[0])}for(let ae=0;ae<_t;ae++){let le=Ce[ae];Ye(le[0]+z*h,le[1]+z*h,le[2]+z*h)}}n.addGroup(ne,s.length/3-ne,0)}function $(){let ne=s.length/3,ae=0;te(L,ae),ae+=L.length;for(let le=0,he=D.length;le<he;le++){let me=D[le];te(me,ae),ae+=me.length}n.addGroup(ne,s.length/3-ne,1)}function te(ne,ae){let le=ne.length;for(;--le>=0;){let he=le,me=le-1;me<0&&(me=ne.length-1);for(let We=0,He=h+m*2;We<He;We++){let $e=z*We,je=z*(We+1),U=ae+he+$e,yt=ae+me+$e,lt=ae+me+je,C=ae+he+je;Re(U,yt,lt,C)}}}function Se(ne,ae,le){l.push(ne),l.push(ae),l.push(le)}function Ye(ne,ae,le){Je(ne),Je(ae),Je(le);let he=s.length/3,me=x.generateTopUV(n,s,he-3,he-2,he-1);St(me[0]),St(me[1]),St(me[2])}function Re(ne,ae,le,he){Je(ne),Je(ae),Je(he),Je(ae),Je(le),Je(he);let me=s.length/3,We=x.generateSideWallUV(n,s,me-6,me-3,me-2,me-1);St(We[0]),St(We[1]),St(We[3]),St(We[1]),St(We[2]),St(We[3])}function Je(ne){s.push(l[ne*3+0]),s.push(l[ne*3+1]),s.push(l[ne*3+2])}function St(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Vg(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Lh[s.type]().fromJSON(s)),new i(n,e.options)}},Hg={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new oe(r,a),new oe(o,l),new oe(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],p=e[s*3+1],g=e[s*3+2],M=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new oe(a,1-l),new oe(c,1-u),new oe(d,1-g),new oe(M,1-f)]:[new oe(o,1-l),new oe(h,1-u),new oe(p,1-g),new oe(m,1-f)]}};function Vg(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var wn=class i extends pa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Ea=class i extends pa{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ms=class i extends Et{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,p=[],g=[],M=[],m=[];for(let f=0;f<h;f++){let x=f*d-a;for(let b=0;b<c;b++){let _=b*u-r;g.push(_,-x,0),M.push(0,0,1),m.push(b/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){let b=x+c*f,_=x+c*(f+1),S=x+1+c*(f+1),T=x+1+c*f;p.push(b,_,T),p.push(_,S,T)}this.setIndex(p),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(M,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ta=class i extends Et{constructor(e=new Li([new oe(0,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new st(s,3)),this.setAttribute("normal",new st(r,3)),this.setAttribute("uv",new st(a,2));function c(h){let u=s.length/3,d=h.extractPoints(t),p=d.shape,g=d.holes;li.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let x=g[m];li.isClockWise(x)===!0&&(g[m]=x.reverse())}let M=li.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let x=g[m];p=p.concat(x)}for(let m=0,f=p.length;m<f;m++){let x=p[m];s.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let m=0,f=M.length;m<f;m++){let x=M[m],b=x[0]+u,_=x[1]+u,S=x[2]+u;n.push(b,_,S),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Gg(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function Gg(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Wt=class i extends Et{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new P,d=new P,p=[],g=[],M=[],m=[];for(let f=0;f<=n;f++){let x=[],b=f/n,_=a+b*o,S=e*Math.cos(_),T=Math.sqrt(e*e-S*S),R=0;f===0&&a===0?R=.5/t:f===n&&l===Math.PI&&(R=-.5/t);for(let y=0;y<=t;y++){let w=y/t,I=s+w*r;u.x=-T*Math.cos(I),u.y=S,u.z=T*Math.sin(I),g.push(u.x,u.y,u.z),d.copy(u).normalize(),M.push(d.x,d.y,d.z),m.push(w+R,1-b),x.push(c++)}h.push(x)}for(let f=0;f<n;f++)for(let x=0;x<t;x++){let b=h[f][x+1],_=h[f][x],S=h[f+1][x],T=h[f+1][x+1];(f!==0||a>0)&&p.push(b,_,T),(f!==n-1||l<Math.PI)&&p.push(_,S,T)}this.setIndex(p),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(M,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var kn=class i extends Et{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new P,p=new P,g=new P;for(let M=0;M<=n;M++){let m=a+M/n*o;for(let f=0;f<=s;f++){let x=f/s*r;p.x=(e+t*Math.cos(m))*Math.cos(x),p.y=(e+t*Math.cos(m))*Math.sin(x),p.z=t*Math.sin(m),c.push(p.x,p.y,p.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),g.subVectors(p,d).normalize(),h.push(g.x,g.y,g.z),u.push(f/s),u.push(M/n)}}for(let M=1;M<=n;M++)for(let m=1;m<=s;m++){let f=(s+1)*M+m-1,x=(s+1)*(M-1)+m-1,b=(s+1)*(M-1)+m,_=(s+1)*M+m;l.push(f,x,_),l.push(x,b,_)}this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Cs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(xf(s))s.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(xf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function fn(i){let e={};for(let t=0;t<i.length;t++){let n=Cs(i[t]);for(let s in n)e[s]=n[s]}return e}function xf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Wg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function cu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var fp={clone:Cs,merge:fn},Xg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yn=class extends Tn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xg,this.fragmentShader=qg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=Wg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Oe().setHex(s.value);break;case"v2":this.uniforms[n].value=new oe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ut().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ke().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ft().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},cl=class extends yn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ss=class extends Tn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Oe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=za,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Es=class extends Tn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=za,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=wl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},hl=class extends Tn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ul=class extends Tn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ir(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Th(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Qi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},dl=class extends Qi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ch,endingEnd:Ch}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Rh:r=e,o=2*t-n;break;case Ih:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Rh:a=e,l=2*n-t;break;case Ih:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),M=g*g,m=M*g,f=-d*m+2*d*M-d*g,x=(1+d)*m+(-1.5-2*d)*M+(-.5+d)*g+1,b=(-1-p)*m+(1.5+p)*M+.5*g,_=p*m-p*M;for(let S=0;S!==o;++S)r[S]=f*a[h+S]+x*a[c+S]+b*a[l+S]+_*a[u+S];return r}},fl=class extends Qi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},pl=class extends Qi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ml=class extends Qi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(s-t),M=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*M+a[l+m]*g;return r}let d=o*2,p=e-1;for(let g=0;g!==o;++g){let M=a[c+g],m=a[l+g],f=p*d+g*2,x=u[f],b=u[f+1],_=e*d+g*2,S=h[_],T=h[_+1],R=Zg(n,t,x,S,s);r[g]=pp(R,M,b,T,m)}return r}};function pp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Yg(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Zg(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=pp(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Yg(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Un=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ir(t,this.TimeBufferType),this.values=ir(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ir(e.times,Array),values:ir(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Th(e.settings)&&(n.settings={inTangents:ir(e.settings.inTangents,Array),outTangents:ir(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new pl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new dl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ml(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Kr:t=this.InterpolantFactoryMethodDiscrete;break;case Yo:t=this.InterpolantFactoryMethodLinear;break;case Oo:t=this.InterpolantFactoryMethodSmooth;break;case Ah:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ge("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Kr;case this.InterpolantFactoryMethodLinear:return Yo;case this.InterpolantFactoryMethodSmooth:return Oo;case this.InterpolantFactoryMethodBezier:return Ah}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Th(this.settings)&&(_f(this.settings.inTangents,e),_f(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(qe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){qe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){qe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&$0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){qe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Oo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let M=t[u+g];if(M!==t[d+g]||M!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Th(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function _f(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Un.prototype.ValueTypeName="";Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=Yo;var es=class extends Un{constructor(e,t,n){super(e,t,n)}};es.prototype.ValueTypeName="bool";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=Kr;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var gl=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}};gl.prototype.ValueTypeName="color";var xl=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}};xl.prototype.ValueTypeName="number";var _l=class extends Qi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Ln.slerpFlat(r,0,a,c-o,a,c,l);return r}},wa=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new _l(this.times,this.values,this.getValueSize(),e)}};wa.prototype.ValueTypeName="quaternion";wa.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends Un{constructor(e,t,n){super(e,t,n)}};ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Kr;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var yl=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}};yl.prototype.ValueTypeName="vector";var vl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},mp=new vl,bl=class{constructor(e){this.manager=e!==void 0?e:mp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};bl.DEFAULT_MATERIAL_NAME="__DEFAULT";var _r=class extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Aa=class extends _r{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},wh=new ft,yf=new P,vf=new P,Ca=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pr,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;yf.setFromMatrixPosition(e.matrixWorld),t.position.copy(yf),vf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){wh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(wh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===lr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(wh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},No=new P,Fo=new Ln,ri=new P,Ra=class extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(No,Fo,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(No,Fo,ri.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(No,Fo,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(No,Fo,ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},$i=new P,bf=new oe,Mf=new oe,on=class extends Ra{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Zo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Qc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zo*2*Math.atan(Math.tan(Qc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,t){return this.getViewBounds(e,bf,Mf),t.subVectors(Mf,bf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Qc*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Fh=class extends Ca{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0}},Di=class extends _r{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Fh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},yr=class extends Ra{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Oh=class extends Ca{constructor(){super(new yr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vr=class extends _r{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new Oh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var sr=-90,rr=1,Ml=class extends jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new on(sr,rr,e,t);s.layers=this.layers,this.add(s);let r=new on(sr,rr,e,t);r.layers=this.layers,this.add(r);let a=new on(sr,rr,e,t);a.layers=this.layers,this.add(a);let o=new on(sr,rr,e,t);o.layers=this.layers,this.add(o);let l=new on(sr,rr,e,t);l.layers=this.layers,this.add(l);let c=new on(sr,rr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Sl=class extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var hu="\\[\\]\\.:\\/",Jg=new RegExp("["+hu+"]","g"),uu="[^"+hu+"]",$g="[^"+hu.replace("\\.","")+"]",Kg=/((?:WC+[\/:])*)/.source.replace("WC",uu),jg=/(WCOD+)?/.source.replace("WCOD",$g),Qg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uu),ex=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uu),tx=new RegExp("^"+Kg+jg+Qg+ex+"$"),nx=["material","materials","bones","map"],Bh=class{constructor(e,t,n){let s=n||Bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Bt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Jg,"")}static parseTrackName(e){let t=tx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);nx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ge("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;qe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bt.Composite=Bh;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zM=new Float32Array(1);var Sf=new ft,Ts=class{constructor(e,t,n=0,s=1/0){this.ray=new _s(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ur,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Sf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sf),this}intersectObject(e,t=!0,n=[]){return zh(e,this,n,t),n.sort(Ef),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)zh(e[s],this,n,t);return n.sort(Ef),n}};function Ef(i,e){return i.distance-e.distance}function zh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)zh(r[a],e,t,!0)}}var xu=class xu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};xu.prototype.isMatrix2=!0;var kh=xu;function du(i,e,t,n){let s=ix(n);switch(t){case su:return i*e;case Er:return i*e/s.components*s.byteLength;case Dl:return i*e/s.components*s.byteLength;case os:return i*e*2/s.components*s.byteLength;case Ul:return i*e*2/s.components*s.byteLength;case ru:return i*e*3/s.components*s.byteLength;case Vn:return i*e*4/s.components*s.byteLength;case Nl:return i*e*4/s.components*s.byteLength;case Da:case Ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Na:case Fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ol:case zl:return Math.max(i,16)*Math.max(e,8)/4;case Fl:case Bl:return Math.max(i,8)*Math.max(e,8)/2;case kl:case Hl:case Gl:case Wl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Vl:case Oa:case Xl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ql:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case $l:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case jl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ec:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case tc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case nc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ic:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case sc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case rc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ac:case oc:case lc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case cc:case hc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ba:case uc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ix(i){switch(i){case Cn:case eu:return{byteLength:1,components:1};case Mr:case tu:case ti:return{byteLength:2,components:1};case Pl:case Ll:return{byteLength:2,components:4};case ei:case Il:case Hn:return{byteLength:4,components:1};case nu:case iu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Op(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function rx(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],M=u[p];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++d,u[d]=M)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let M=u[p];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ax=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ox=`#ifdef USE_ALPHAHASH
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
#endif`,lx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ux=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dx=`#ifdef USE_AOMAP
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
#endif`,fx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,px=`#ifdef USE_BATCHING
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
#endif`,mx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_x=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yx=`#ifdef USE_IRIDESCENCE
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
#endif`,vx=`#ifdef USE_BUMPMAP
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
#endif`,bx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ax=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Rx=`#define PI 3.141592653589793
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
} // validated`,Ix=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Px=`vec3 transformedNormal = objectNormal;
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
#endif`,Lx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ux=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ox=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bx=`#ifdef USE_ENVMAP
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
#endif`,zx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,kx=`#ifdef USE_ENVMAP
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
#endif`,Hx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vx=`#ifdef USE_ENVMAP
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
#endif`,Gx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yx=`#ifdef USE_GRADIENTMAP
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
}`,Zx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,jx=`#ifdef USE_ENVMAP
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
#endif`,Qx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,t_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,n_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,i_=`PhysicalMaterial material;
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
#endif`,s_=`uniform sampler2D dfgLUT;
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
}`,r_=`
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
#endif`,a_=`#if defined( RE_IndirectDiffuse )
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
#endif`,o_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,l_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,c_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,f_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,g_=`#if defined( USE_POINTS_UV )
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
#endif`,x_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,__=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,v_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,b_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M_=`#ifdef USE_MORPHTARGETS
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
#endif`,S_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,T_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,w_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,R_=`#ifdef USE_NORMALMAP
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
#endif`,I_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,D_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,U_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,N_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,F_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,z_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,k_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,V_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,X_=`float getShadowMask() {
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
}`,q_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y_=`#ifdef USE_SKINNING
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
#endif`,Z_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,J_=`#ifdef USE_SKINNING
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
#endif`,$_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,K_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,j_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ey=`#ifdef USE_TRANSMISSION
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
#endif`,ty=`#ifdef USE_TRANSMISSION
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
#endif`,ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ry=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ay=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oy=`uniform sampler2D t2D;
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
}`,ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dy=`#include <common>
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
}`,fy=`#if DEPTH_PACKING == 3200
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
}`,py=`#define DISTANCE
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
}`,my=`#define DISTANCE
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
}`,gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_y=`uniform float scale;
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
}`,yy=`uniform vec3 diffuse;
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
}`,vy=`#include <common>
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
}`,by=`uniform vec3 diffuse;
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
}`,My=`#define LAMBERT
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
}`,Sy=`#define LAMBERT
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
}`,Ey=`#define MATCAP
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
}`,Ty=`#define MATCAP
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
}`,wy=`#define NORMAL
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
}`,Ay=`#define NORMAL
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
}`,Cy=`#define PHONG
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
}`,Ry=`#define PHONG
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
}`,Iy=`#define STANDARD
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
}`,Py=`#define STANDARD
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
}`,Ly=`#define TOON
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
}`,Dy=`#define TOON
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
}`,Uy=`uniform float size;
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
}`,Ny=`uniform vec3 diffuse;
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
}`,Fy=`#include <common>
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
}`,Oy=`uniform vec3 color;
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
}`,By=`uniform float rotation;
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
}`,zy=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:ax,alphahash_pars_fragment:ox,alphamap_fragment:lx,alphamap_pars_fragment:cx,alphatest_fragment:hx,alphatest_pars_fragment:ux,aomap_fragment:dx,aomap_pars_fragment:fx,batching_pars_vertex:px,batching_vertex:mx,begin_vertex:gx,beginnormal_vertex:xx,bsdfs:_x,iridescence_fragment:yx,bumpmap_pars_fragment:vx,clipping_planes_fragment:bx,clipping_planes_pars_fragment:Mx,clipping_planes_pars_vertex:Sx,clipping_planes_vertex:Ex,color_fragment:Tx,color_pars_fragment:wx,color_pars_vertex:Ax,color_vertex:Cx,common:Rx,cube_uv_reflection_fragment:Ix,defaultnormal_vertex:Px,displacementmap_pars_vertex:Lx,displacementmap_vertex:Dx,emissivemap_fragment:Ux,emissivemap_pars_fragment:Nx,colorspace_fragment:Fx,colorspace_pars_fragment:Ox,envmap_fragment:Bx,envmap_common_pars_fragment:zx,envmap_pars_fragment:kx,envmap_pars_vertex:Hx,envmap_physical_pars_fragment:jx,envmap_vertex:Vx,fog_vertex:Gx,fog_pars_vertex:Wx,fog_fragment:Xx,fog_pars_fragment:qx,gradientmap_pars_fragment:Yx,lightmap_pars_fragment:Zx,lights_lambert_fragment:Jx,lights_lambert_pars_fragment:$x,lights_pars_begin:Kx,lights_toon_fragment:Qx,lights_toon_pars_fragment:e_,lights_phong_fragment:t_,lights_phong_pars_fragment:n_,lights_physical_fragment:i_,lights_physical_pars_fragment:s_,lights_fragment_begin:r_,lights_fragment_maps:a_,lights_fragment_end:o_,lightprobes_pars_fragment:l_,logdepthbuf_fragment:c_,logdepthbuf_pars_fragment:h_,logdepthbuf_pars_vertex:u_,logdepthbuf_vertex:d_,map_fragment:f_,map_pars_fragment:p_,map_particle_fragment:m_,map_particle_pars_fragment:g_,metalnessmap_fragment:x_,metalnessmap_pars_fragment:__,morphinstance_vertex:y_,morphcolor_vertex:v_,morphnormal_vertex:b_,morphtarget_pars_vertex:M_,morphtarget_vertex:S_,normal_fragment_begin:E_,normal_fragment_maps:T_,normal_pars_fragment:w_,normal_pars_vertex:A_,normal_vertex:C_,normalmap_pars_fragment:R_,clearcoat_normal_fragment_begin:I_,clearcoat_normal_fragment_maps:P_,clearcoat_pars_fragment:L_,iridescence_pars_fragment:D_,opaque_fragment:U_,packing:N_,premultiplied_alpha_fragment:F_,project_vertex:O_,dithering_fragment:B_,dithering_pars_fragment:z_,roughnessmap_fragment:k_,roughnessmap_pars_fragment:H_,shadowmap_pars_fragment:V_,shadowmap_pars_vertex:G_,shadowmap_vertex:W_,shadowmask_pars_fragment:X_,skinbase_vertex:q_,skinning_pars_vertex:Y_,skinning_vertex:Z_,skinnormal_vertex:J_,specularmap_fragment:$_,specularmap_pars_fragment:K_,tonemapping_fragment:j_,tonemapping_pars_fragment:Q_,transmission_fragment:ey,transmission_pars_fragment:ty,uv_pars_fragment:ny,uv_pars_vertex:iy,uv_vertex:sy,worldpos_vertex:ry,background_vert:ay,background_frag:oy,backgroundCube_vert:ly,backgroundCube_frag:cy,cube_vert:hy,cube_frag:uy,depth_vert:dy,depth_frag:fy,distance_vert:py,distance_frag:my,equirect_vert:gy,equirect_frag:xy,linedashed_vert:_y,linedashed_frag:yy,meshbasic_vert:vy,meshbasic_frag:by,meshlambert_vert:My,meshlambert_frag:Sy,meshmatcap_vert:Ey,meshmatcap_frag:Ty,meshnormal_vert:wy,meshnormal_frag:Ay,meshphong_vert:Cy,meshphong_frag:Ry,meshphysical_vert:Iy,meshphysical_frag:Py,meshtoon_vert:Ly,meshtoon_frag:Dy,points_vert:Uy,points_frag:Ny,shadow_vert:Fy,shadow_frag:Oy,sprite_vert:By,sprite_frag:zy},Me={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},xi={basic:{uniforms:fn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:fn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Oe(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:fn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:fn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:fn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Oe(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:fn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:fn([Me.points,Me.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:fn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:fn([Me.common,Me.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:fn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:fn([Me.sprite,Me.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:fn([Me.common,Me.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:fn([Me.lights,Me.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};xi.physical={uniforms:fn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var pc={r:0,b:0,g:0},ky=new ft,Bp=new Ke;Bp.set(-1,0,0,0,1,0,0,0,1);function Hy(i,e,t,n,s,r){let a=new Oe(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function p(x){let b=x.isScene===!0?x.background:null;if(b&&b.isTexture){let _=x.backgroundBlurriness>0;b=e.get(b,_)}return b}function g(x){let b=!1,_=p(x);_===null?m(a,o):_&&_.isColor&&(m(_,1),b=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(x,b){let _=p(b);_&&(_.isCubeTexture||_.mapping===Pa)?(c===void 0&&(c=new ge(new rn(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Cs(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ky.makeRotationFromEuler(b.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Bp),c.material.toneMapped=ut.getTransfer(_.colorSpace)!==Mt,(h!==_||u!==_.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,d=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new ge(new Ms(2,2),new yn({name:"BackgroundMaterial",uniforms:Cs(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ut.getTransfer(_.colorSpace)!==Mt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,d=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,b){x.getRGB(pc,cu(i)),t.buffers.color.setClear(pc.r,pc.g,pc.b,b,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,b=1){a.set(x),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(a,o)},render:g,addToRenderList:M,dispose:f}}function Vy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(D,N,k,A,L){let B=!1,z=u(D,A,k,N);r!==z&&(r=z,c(r.object)),B=p(D,A,k,L),B&&g(D,A,k,L),L!==null&&e.update(L,i.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,_(D,N,k,A),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function u(D,N,k,A){let L=A.wireframe===!0,B=n[N.id];B===void 0&&(B={},n[N.id]=B);let z=D.isInstancedMesh===!0?D.id:0,K=B[z];K===void 0&&(K={},B[z]=K);let V=K[k.id];V===void 0&&(V={},K[k.id]=V);let Y=V[L];return Y===void 0&&(Y=d(l()),V[L]=Y),Y}function d(D){let N=[],k=[],A=[];for(let L=0;L<t;L++)N[L]=0,k[L]=0,A[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:k,attributeDivisors:A,object:D,attributes:{},index:null}}function p(D,N,k,A){let L=r.attributes,B=N.attributes,z=0,K=k.getAttributes();for(let V in K)if(K[V].location>=0){let j=L[V],Pe=B[V];if(Pe===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(Pe=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(Pe=D.instanceColor)),j===void 0||j.attribute!==Pe||Pe&&j.data!==Pe.data)return!0;z++}return r.attributesNum!==z||r.index!==A}function g(D,N,k,A){let L={},B=N.attributes,z=0,K=k.getAttributes();for(let V in K)if(K[V].location>=0){let j=B[V];j===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(j=D.instanceColor));let Pe={};Pe.attribute=j,j&&j.data&&(Pe.data=j.data),L[V]=Pe,z++}r.attributes=L,r.attributesNum=z,r.index=A}function M(){let D=r.newAttributes;for(let N=0,k=D.length;N<k;N++)D[N]=0}function m(D){f(D,0)}function f(D,N){let k=r.newAttributes,A=r.enabledAttributes,L=r.attributeDivisors;k[D]=1,A[D]===0&&(i.enableVertexAttribArray(D),A[D]=1),L[D]!==N&&(i.vertexAttribDivisor(D,N),L[D]=N)}function x(){let D=r.newAttributes,N=r.enabledAttributes;for(let k=0,A=N.length;k<A;k++)N[k]!==D[k]&&(i.disableVertexAttribArray(k),N[k]=0)}function b(D,N,k,A,L,B,z){z===!0?i.vertexAttribIPointer(D,N,k,L,B):i.vertexAttribPointer(D,N,k,A,L,B)}function _(D,N,k,A){M();let L=A.attributes,B=k.getAttributes(),z=N.defaultAttributeValues;for(let K in B){let V=B[K];if(V.location>=0){let Y=L[K];if(Y===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(Y=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(Y=D.instanceColor)),Y!==void 0){let j=Y.normalized,Pe=Y.itemSize,Ce=e.get(Y);if(Ce===void 0)continue;let _t=Ce.buffer,ot=Ce.type,pt=Ce.bytesPerElement,$=ot===i.INT||ot===i.UNSIGNED_INT||Y.gpuType===Il;if(Y.isInterleavedBufferAttribute){let te=Y.data,Se=te.stride,Ye=Y.offset;if(te.isInstancedInterleavedBuffer){for(let Re=0;Re<V.locationSize;Re++)f(V.location+Re,te.meshPerAttribute);D.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Re=0;Re<V.locationSize;Re++)m(V.location+Re);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let Re=0;Re<V.locationSize;Re++)b(V.location+Re,Pe/V.locationSize,ot,j,Se*pt,(Ye+Pe/V.locationSize*Re)*pt,$)}else{if(Y.isInstancedBufferAttribute){for(let te=0;te<V.locationSize;te++)f(V.location+te,Y.meshPerAttribute);D.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let te=0;te<V.locationSize;te++)m(V.location+te);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let te=0;te<V.locationSize;te++)b(V.location+te,Pe/V.locationSize,ot,j,Pe*pt,Pe/V.locationSize*te*pt,$)}}else if(z!==void 0){let j=z[K];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(V.location,j);break;case 3:i.vertexAttrib3fv(V.location,j);break;case 4:i.vertexAttrib4fv(V.location,j);break;default:i.vertexAttrib1fv(V.location,j)}}}}x()}function S(){w();for(let D in n){let N=n[D];for(let k in N){let A=N[k];for(let L in A){let B=A[L];for(let z in B)h(B[z].object),delete B[z];delete A[L]}}delete n[D]}}function T(D){if(n[D.id]===void 0)return;let N=n[D.id];for(let k in N){let A=N[k];for(let L in A){let B=A[L];for(let z in B)h(B[z].object),delete B[z];delete A[L]}}delete n[D.id]}function R(D){for(let N in n){let k=n[N];for(let A in k){let L=k[A];if(L[D.id]===void 0)continue;let B=L[D.id];for(let z in B)h(B[z].object),delete B[z];delete L[D.id]}}}function y(D){for(let N in n){let k=n[N],A=D.isInstancedMesh===!0?D.id:0,L=k[A];if(L!==void 0){for(let B in L){let z=L[B];for(let K in z)h(z[K].object),delete z[K];delete L[B]}delete k[A],Object.keys(k).length===0&&delete n[N]}}}function w(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:I,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:m,disableUnusedAttributes:x}}function Gy(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let p=0;p<h;p++)d+=c[p];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Wy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Vn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let y=R===ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Cn&&R!==Hn&&!y&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ge("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:x,maxVaryings:b,maxFragmentUniforms:_,maxSamples:S,samples:T}}function Xy(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Kn,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,M=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let x=r?0:n,b=x*4,_=f.clippingState||null;l.value=_,_=h(g,d,b,p);for(let S=0;S!==b;++S)_[S]=t[S];f.clippingState=_,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){let M=u!==null?u.length:0,m=null;if(M!==0){if(m=l.value,g!==!0||m===null){let f=p+M*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,_=p;b!==M;++b,_+=4)a.copy(u[b]).applyMatrix4(x,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}var wr=4,qy=6,Yy=20,Zy=256,ka=new yr,gp=new Oe,_u=null,yu=0,vu=0,bu=!1,Jy=new P,Rs=new P,gc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Jy}=r;_u=this._renderer.getRenderTarget(),yu=this._renderer.getActiveCubeFace(),vu=this._renderer.getActiveMipmapLevel(),bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_u,yu,vu),this._renderer.xr.enabled=bu,e.scissorTest=!1,Tr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ss||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_u=this._renderer.getRenderTarget(),yu=this._renderer.getActiveCubeFace(),vu=this._renderer.getActiveMipmapLevel(),bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:ti,format:Vn,colorSpace:jr,depthBuffer:!1},s=xp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=$y(r)),this._blurMaterial=jy(r,e,t),this._ggxMaterial=Ky(r,e,t)}return s}_compileMaterial(e){let t=new ge(new Et,e);this._renderer.compile(t,ka)}_sceneToCubeUV(e,t,n,s,r){let l=new on(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(gp),u.toneMapping=Qn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ge(new rn,new at({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,m=M.material,f=!1,x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,f=!0):(m.color.copy(gp),f=!0);for(let b=0;b<6;b++){let _=b%3;_===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):_===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));let S=this._cubeSize;Tr(s,_*S,b>2?S:0,S,S),u.setRenderTarget(s),f&&u.render(M,l),u.render(e,l)}u.toneMapping=p,u.autoClear=d,e.background=x}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ss||e.mapping===As;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_p());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Tr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ka)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,p=u*d,{_lodMax:g}=this,M=this._sizeLods[n],m=3*M*(n>g-wr?n-g+wr:0),f=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,Tr(r,m,f,3*M,2*M),s.setRenderTarget(r),s.render(o,ka),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Tr(e,m,f,3*M,2*M),s.setRenderTarget(e),s.render(o,ka)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-wr?s-this._lodMax+wr:0),d=4*(this._cubeSize-h);Tr(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(l,ka)}};function $y(i){let e=[],t=[],n=i,s=i-wr+1+qy;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,p=3,g=new Float32Array(p*d*u),M=new Float32Array(p*d*u);for(let f=0;f<u;f++){let x=f%3*2/3-1,b=f>2?0:-1,_=[x,b,0,x+2/3,b,0,x+2/3,b+1,0,x,b,0,x+2/3,b+1,0,x,b+1,0];g.set(_,p*d*f);for(let S=0;S<d;S++){let T=h[S*2]*2-1,R=h[S*2+1]*2-1;f===0?Rs.set(1,R,T):f===1?Rs.set(-T,1,-R):f===2?Rs.set(-T,R,1):f===3?Rs.set(-1,R,-T):f===4?Rs.set(-T,-1,R):Rs.set(T,R,-1),Rs.toArray(M,(f*d+S)*p)}}let m=new Et;m.setAttribute("position",new Gt(g,p)),m.setAttribute("outputDirection",new Gt(M,p)),t.push(new ge(m,null)),n>wr&&n--}return{lodMeshes:t,sizeLods:e}}function xp(i,e,t){let n=new En(i,e,t);return n.texture.mapping=Pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Tr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ky(i,e,t){return new yn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Zy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yc(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function jy(i,e,t){return new yn({name:"SphericalGaussianBlur",defines:{SAMPLES:Yy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:yc(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function _p(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yc(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function yp(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function yc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var xc=class extends En{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ua(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new rn(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:Cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:mi});r.uniforms.tEquirect.value=t;let a=new ge(s,r),o=t.minFilter;return t.minFilter===rs&&(t.minFilter=ln),new Ml(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function Qy(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,p=!1){return d==null?null:p?a(d):r(d)}function r(d){if(d&&d.isTexture){let p=d.mapping;if(p===Al||p===Cl)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let M=new xc(g.height);return M.fromEquirectangularTexture(i,d),e.set(d,M),d.addEventListener("dispose",c),o(M.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let p=d.mapping,g=p===Al||p===Cl,M=p===ss||p===As;if(g||M){let m=t.get(d),f=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new gc(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let x=d.image;return g&&x&&x.height>0||M&&x&&l(x)?(n===null&&(n=new gc(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,p){return p===Al?d.mapping=ss:p===Cl&&(d.mapping=As),d}function l(d){let p=0,g=6;for(let M=0;M<g;M++)d[M]!==void 0&&p++;return p===g}function c(d){let p=d.target;p.removeEventListener("dispose",c);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(d){let p=d.target;p.removeEventListener("dispose",h);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function ev(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&xs("WebGLRenderer: "+n+" extension not supported."),s}}}function tv(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)e.update(d[p],i.ARRAY_BUFFER)}function c(u){let d=[],p=u.index,g=u.attributes.position,M=0;if(g===void 0)return;if(p!==null){let x=p.array;M=p.version;for(let b=0,_=x.length;b<_;b+=3){let S=x[b+0],T=x[b+1],R=x[b+2];d.push(S,T,T,R,R,S)}}else{let x=g.array;M=g.version;for(let b=0,_=x.length/3-1;b<_;b+=3){let S=b+0,T=b+1,R=b+2;d.push(S,T,T,R,R,S)}}let m=new(g.count>=65535?aa:ra)(d,1);m.version=M;let f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function nv(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,p){p!==0&&(i.drawElementsInstanced(n,d,r,u*a,p),t.update(d,n,p))}function h(u,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,p);let M=0;for(let m=0;m<p;m++)M+=d[m];t.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function iv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:qe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function sv(i,e,t){let n=new WeakMap,s=new Ut;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let w=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],b=0;p===!0&&(b=1),g===!0&&(b=2),M===!0&&(b=3);let _=o.attributes.position.count*b,S=1;_>e.maxTextureSize&&(S=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let T=new Float32Array(_*S*4*u),R=new na(T,_,S,u);R.type=Hn,R.needsUpdate=!0;let y=b*4;for(let I=0;I<u;I++){let D=m[I],N=f[I],k=x[I],A=_*S*4*I;for(let L=0;L<D.count;L++){let B=L*y;p===!0&&(s.fromBufferAttribute(D,L),T[A+B+0]=s.x,T[A+B+1]=s.y,T[A+B+2]=s.z,T[A+B+3]=0),g===!0&&(s.fromBufferAttribute(N,L),T[A+B+4]=s.x,T[A+B+5]=s.y,T[A+B+6]=s.z,T[A+B+7]=0),M===!0&&(s.fromBufferAttribute(k,L),T[A+B+8]=s.x,T[A+B+9]=s.y,T[A+B+10]=s.z,T[A+B+11]=k.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new oe(_,S)},n.set(o,d),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function rv(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var av={[qh]:"LINEAR_TONE_MAPPING",[Yh]:"REINHARD_TONE_MAPPING",[Zh]:"CINEON_TONE_MAPPING",[Jh]:"ACES_FILMIC_TONE_MAPPING",[Kh]:"AGX_TONE_MAPPING",[jh]:"NEUTRAL_TONE_MAPPING",[$h]:"CUSTOM_TONE_MAPPING"};function ov(i,e,t,n,s,r){let a=new En(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Et;c.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new st([0,2,0,0,2,0],2));let h=new cl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new ge(c,h),d=new yr(-1,1,1,-1,0,1),p=null,g=null,M=!1,m,f=null,x=[],b=!1;this.setSize=function(_,S){a.setSize(_,S),o!==null&&o.setSize(_,S),l!==null&&l.setSize(_,S);for(let T=0;T<x.length;T++){let R=x[T];R.setSize&&R.setSize(_,S)}},this.setEffects=function(_){x=_,b=x.length>0&&x[0].isRenderPass===!0;let S=a.width,T=a.height;x.length>0&&o===null&&(o=new En(S,T,{type:ti,depthBuffer:!1,stencilBuffer:!1}),l=new En(S,T,{type:ti,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<x.length;R++){let y=x[R];y.setSize&&y.setSize(S,T)}},this.begin=function(_,S){if(M||_.toneMapping===Qn&&x.length===0)return!1;if(f=S,S!==null){let T=S.width,R=S.height;(a.width!==T||a.height!==R)&&this.setSize(T,R)}return b===!1&&_.setRenderTarget(a),m=_.toneMapping,_.toneMapping=Qn,!0},this.hasRenderPass=function(){return b},this.end=function(_,S){_.toneMapping=m,M=!0;let T=a,R=o;for(let y=0;y<x.length;y++){let w=x[y];w.enabled!==!1&&(w.render(_,R,T,S),w.needsSwap!==!1&&(T=R,R=R===o?l:o))}if(p!==_.outputColorSpace||g!==_.toneMapping){p=_.outputColorSpace,g=_.toneMapping,h.defines={},ut.getTransfer(p)===Mt&&(h.defines.SRGB_TRANSFER="");let y=av[g];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,_.setRenderTarget(f),_.render(u,d),f=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var zp=new _n,Eu=new ji(1,1),kp=new na,Hp=new Ko,Vp=new ua,vp=[],bp=[],Mp=new Float32Array(16),Sp=new Float32Array(9),Ep=new Float32Array(4);function Cr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=vp[s];if(r===void 0&&(r=new Float32Array(s),vp[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function en(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function tn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function vc(i,e){let t=bp[e];t===void 0&&(t=new Int32Array(e),bp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function lv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function cv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2fv(this.addr,e),tn(t,e)}}function hv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;i.uniform3fv(this.addr,e),tn(t,e)}}function uv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4fv(this.addr,e),tn(t,e)}}function dv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Ep.set(n),i.uniformMatrix2fv(this.addr,!1,Ep),tn(t,n)}}function fv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Sp.set(n),i.uniformMatrix3fv(this.addr,!1,Sp),tn(t,n)}}function pv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Mp.set(n),i.uniformMatrix4fv(this.addr,!1,Mp),tn(t,n)}}function mv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function gv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2iv(this.addr,e),tn(t,e)}}function xv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3iv(this.addr,e),tn(t,e)}}function _v(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4iv(this.addr,e),tn(t,e)}}function yv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function vv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2uiv(this.addr,e),tn(t,e)}}function bv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3uiv(this.addr,e),tn(t,e)}}function Mv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4uiv(this.addr,e),tn(t,e)}}function Sv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Eu.compareFunction=t.isReversedDepthBuffer()?fc:dc,r=Eu):r=zp,t.setTexture2D(e||r,s)}function Ev(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Hp,s)}function Tv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Vp,s)}function wv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||kp,s)}function Av(i){switch(i){case 5126:return lv;case 35664:return cv;case 35665:return hv;case 35666:return uv;case 35674:return dv;case 35675:return fv;case 35676:return pv;case 5124:case 35670:return mv;case 35667:case 35671:return gv;case 35668:case 35672:return xv;case 35669:case 35673:return _v;case 5125:return yv;case 36294:return vv;case 36295:return bv;case 36296:return Mv;case 35678:case 36198:case 36298:case 36306:case 35682:return Sv;case 35679:case 36299:case 36307:return Ev;case 35680:case 36300:case 36308:case 36293:return Tv;case 36289:case 36303:case 36311:case 36292:return wv}}function Cv(i,e){i.uniform1fv(this.addr,e)}function Rv(i,e){let t=Cr(e,this.size,2);i.uniform2fv(this.addr,t)}function Iv(i,e){let t=Cr(e,this.size,3);i.uniform3fv(this.addr,t)}function Pv(i,e){let t=Cr(e,this.size,4);i.uniform4fv(this.addr,t)}function Lv(i,e){let t=Cr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Dv(i,e){let t=Cr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Uv(i,e){let t=Cr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Nv(i,e){i.uniform1iv(this.addr,e)}function Fv(i,e){i.uniform2iv(this.addr,e)}function Ov(i,e){i.uniform3iv(this.addr,e)}function Bv(i,e){i.uniform4iv(this.addr,e)}function zv(i,e){i.uniform1uiv(this.addr,e)}function kv(i,e){i.uniform2uiv(this.addr,e)}function Hv(i,e){i.uniform3uiv(this.addr,e)}function Vv(i,e){i.uniform4uiv(this.addr,e)}function Gv(i,e,t){let n=this.cache,s=e.length,r=vc(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Eu:a=zp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Wv(i,e,t){let n=this.cache,s=e.length,r=vc(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Hp,r[a])}function Xv(i,e,t){let n=this.cache,s=e.length,r=vc(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Vp,r[a])}function qv(i,e,t){let n=this.cache,s=e.length,r=vc(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||kp,r[a])}function Yv(i){switch(i){case 5126:return Cv;case 35664:return Rv;case 35665:return Iv;case 35666:return Pv;case 35674:return Lv;case 35675:return Dv;case 35676:return Uv;case 5124:case 35670:return Nv;case 35667:case 35671:return Fv;case 35668:case 35672:return Ov;case 35669:case 35673:return Bv;case 5125:return zv;case 36294:return kv;case 36295:return Hv;case 36296:return Vv;case 35678:case 36198:case 36298:case 36306:case 35682:return Gv;case 35679:case 36299:case 36307:return Wv;case 35680:case 36300:case 36308:case 36293:return Xv;case 36289:case 36303:case 36311:case 36292:return qv}}var Tu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Av(t.type)}},wu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Yv(t.type)}},Au=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Mu=/(\w+)(\])?(\[|\.)?/g;function Tp(i,e){i.seq.push(e),i.map[e.id]=e}function Zv(i,e,t){let n=i.name,s=n.length;for(Mu.lastIndex=0;;){let r=Mu.exec(n),a=Mu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Tp(t,c===void 0?new Tu(o,i,e):new wu(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Au(o),Tp(t,u)),t=u}}}var Ar=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Zv(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function wp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Jv=37297,$v=0;function Kv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Ap=new Ke;function jv(i){ut._getMatrix(Ap,ut.workingColorSpace,i);let e=`mat3( ${Ap.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(i)){case Qr:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Cp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Kv(i.getShaderSource(e),o)}else return r}function Qv(i,e){let t=jv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var eb={[qh]:"Linear",[Yh]:"Reinhard",[Zh]:"Cineon",[Jh]:"ACESFilmic",[Kh]:"AgX",[jh]:"Neutral",[$h]:"Custom"};function tb(i,e){let t=eb[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var mc=new P;function nb(){ut.getLuminanceCoefficients(mc);let i=mc.x.toFixed(4),e=mc.y.toFixed(4),t=mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ib(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Va).join(`
`)}function sb(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function rb(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Va(i){return i!==""}function Rp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ip(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ab=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cu(i){return i.replace(ab,lb)}var ob=new Map;function lb(i,e){let t=nt[e];if(t===void 0){let n=ob.get(e);if(n!==void 0)t=nt[n],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Cu(t)}var cb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pp(i){return i.replace(cb,hb)}function hb(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var ub={[Ia]:"SHADOWMAP_TYPE_PCF",[br]:"SHADOWMAP_TYPE_VSM"};function db(i){return ub[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var fb={[ss]:"ENVMAP_TYPE_CUBE",[As]:"ENVMAP_TYPE_CUBE",[Pa]:"ENVMAP_TYPE_CUBE_UV"};function pb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":fb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var mb={[As]:"ENVMAP_MODE_REFRACTION"};function gb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":mb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var xb={[wl]:"ENVMAP_BLENDING_MULTIPLY",[Xf]:"ENVMAP_BLENDING_MIX",[qf]:"ENVMAP_BLENDING_ADD"};function _b(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":xb[i.combine]||"ENVMAP_BLENDING_NONE"}function yb(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function vb(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=db(t),c=pb(t),h=gb(t),u=_b(t),d=yb(t),p=ib(t),g=sb(r),M=s.createProgram(),m,f,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Va).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Va).join(`
`),f.length>0&&(f+=`
`)):(m=[Lp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Va).join(`
`),f=[Lp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?nt.tonemapping_pars_fragment:"",t.toneMapping!==Qn?tb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,Qv("linearToOutputTexel",t.outputColorSpace),nb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Va).join(`
`)),a=Cu(a),a=Rp(a,t),a=Ip(a,t),o=Cu(o),o=Rp(o,t),o=Ip(o,t),a=Pp(a),o=Pp(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===ou?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ou?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let b=x+m+a,_=x+f+o,S=wp(s,s.VERTEX_SHADER,b),T=wp(s,s.FRAGMENT_SHADER,_);s.attachShader(M,S),s.attachShader(M,T),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function R(D){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(M)||"",k=s.getShaderInfoLog(S)||"",A=s.getShaderInfoLog(T)||"",L=N.trim(),B=k.trim(),z=A.trim(),K=!0,V=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,S,T);else{let Y=Cp(s,S,"vertex"),j=Cp(s,T,"fragment");qe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+L+`
`+Y+`
`+j)}else L!==""?Ge("WebGLProgram: Program Info Log:",L):(B===""||z==="")&&(V=!1);V&&(D.diagnostics={runnable:K,programLog:L,vertexShader:{log:B,prefix:m},fragmentShader:{log:z,prefix:f}})}s.deleteShader(S),s.deleteShader(T),y=new Ar(s,M),w=rb(s,M)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(M,Jv)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$v++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=S,this.fragmentShader=T,this}var bb=0,Ru=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Iu(e),t.set(e,n)),n}},Iu=class{constructor(e){this.id=bb++,this.code=e,this.usedTimes=0}};function Mb(i){return i===os||i===Oa||i===Ba}function Sb(i,e,t,n,s,r){let a=new ur,o=new Ru,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function M(y,w,I,D,N,k){let A=D.fog,L=N.geometry,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,z=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,K=e.get(y.envMap||B,z),V=K&&K.mapping===Pa?K.image.height:null,Y=p[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&Ge("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let j=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Pe=j!==void 0?j.length:0,Ce=0;L.morphAttributes.position!==void 0&&(Ce=1),L.morphAttributes.normal!==void 0&&(Ce=2),L.morphAttributes.color!==void 0&&(Ce=3);let _t,ot,pt,$;if(Y){let Lt=xi[Y];_t=Lt.vertexShader,ot=Lt.fragmentShader}else{_t=y.vertexShader,ot=y.fragmentShader;let Lt=o.getVertexShaderStage(y),vt=o.getFragmentShaderStage(y);o.update(y,Lt,vt),pt=Lt.id,$=vt.id}let te=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),Ye=N.isInstancedMesh===!0,Re=N.isBatchedMesh===!0,Je=!!y.map,St=!!y.matcap,ne=!!K,ae=!!y.aoMap,le=!!y.lightMap,he=!!y.bumpMap&&y.wireframe===!1,me=!!y.normalMap,We=!!y.displacementMap,He=!!y.emissiveMap,$e=!!y.metalnessMap,je=!!y.roughnessMap,U=y.anisotropy>0,yt=y.clearcoat>0,lt=y.dispersion>0,C=y.retroreflectivity>0,v=y.iridescence>0,H=y.sheen>0,X=y.transmission>0,Z=U&&!!y.anisotropyMap,de=yt&&!!y.clearcoatMap,pe=yt&&!!y.clearcoatNormalMap,J=yt&&!!y.clearcoatRoughnessMap,ee=v&&!!y.iridescenceMap,xe=v&&!!y.iridescenceThicknessMap,Be=H&&!!y.sheenColorMap,be=H&&!!y.sheenRoughnessMap,_e=!!y.specularMap,ze=!!y.specularColorMap,Xe=!!y.specularIntensityMap,tt=X&&!!y.transmissionMap,O=X&&!!y.thicknessMap,ye=!!y.gradientMap,Q=!!y.alphaMap,ve=y.alphaTest>0,we=!!y.alphaHash,re=!!y.extensions,ke=Qn;y.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ke=i.toneMapping);let Ne={shaderID:Y,shaderType:y.type,shaderName:y.name,vertexShader:_t,fragmentShader:ot,defines:y.defines,customVertexShaderID:pt,customFragmentShaderID:$,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Re,batchingColor:Re&&N._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&N.instanceColor!==null,instancingMorph:Ye&&N.morphTexture!==null,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:ut.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Je,matcap:St,envMap:ne,envMapMode:ne&&K.mapping,envMapCubeUVHeight:V,aoMap:ae,lightMap:le,bumpMap:he,normalMap:me,displacementMap:We,emissiveMap:He,normalMapObjectSpace:me&&y.normalMapType===Jf,normalMapTangentSpace:me&&y.normalMapType===za,packedNormalMap:me&&y.normalMapType===za&&Mb(y.normalMap.format),metalnessMap:$e,roughnessMap:je,anisotropy:U,anisotropyMap:Z,clearcoat:yt,clearcoatMap:de,clearcoatNormalMap:pe,clearcoatRoughnessMap:J,dispersion:lt,retroreflection:C,iridescence:v,iridescenceMap:ee,iridescenceThicknessMap:xe,sheen:H,sheenColorMap:Be,sheenRoughnessMap:be,specularMap:_e,specularColorMap:ze,specularIntensityMap:Xe,transmission:X,transmissionMap:tt,thicknessMap:O,gradientMap:ye,opaque:y.transparent===!1&&y.blending===is&&y.alphaToCoverage===!1,alphaMap:Q,alphaTest:ve,alphaHash:we,combine:y.combine,mapUv:Je&&g(y.map.channel),aoMapUv:ae&&g(y.aoMap.channel),lightMapUv:le&&g(y.lightMap.channel),bumpMapUv:he&&g(y.bumpMap.channel),normalMapUv:me&&g(y.normalMap.channel),displacementMapUv:We&&g(y.displacementMap.channel),emissiveMapUv:He&&g(y.emissiveMap.channel),metalnessMapUv:$e&&g(y.metalnessMap.channel),roughnessMapUv:je&&g(y.roughnessMap.channel),anisotropyMapUv:Z&&g(y.anisotropyMap.channel),clearcoatMapUv:de&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:pe&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:be&&g(y.sheenRoughnessMap.channel),specularMapUv:_e&&g(y.specularMap.channel),specularColorMapUv:ze&&g(y.specularColorMap.channel),specularIntensityMapUv:Xe&&g(y.specularIntensityMap.channel),transmissionMapUv:tt&&g(y.transmissionMap.channel),thicknessMapUv:O&&g(y.thicknessMap.channel),alphaMapUv:Q&&g(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(me||U),vertexNormals:!!L.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!L.attributes.uv&&(Je||Q),fog:!!A,useFog:y.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||L.attributes.normal===void 0&&me===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Se,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:Ce,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:ke,decodeVideoTexture:Je&&y.map.isVideoTexture===!0&&ut.getTransfer(y.map.colorSpace)===Mt,decodeVideoTextureEmissive:He&&y.emissiveMap.isVideoTexture===!0&&ut.getTransfer(y.emissiveMap.colorSpace)===Mt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===An,flipSided:y.side===cn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:re&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&y.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function m(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let I in y.defines)w.push(I),w.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(f(w,y),x(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function f(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numSunLights),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numSunLightShadows),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function x(y,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function b(y){let w=p[y.type],I;if(w){let D=xi[w];I=fp.clone(D.uniforms)}else I=y.uniforms;return I}function _(y,w){let I=h.get(w);return I!==void 0?++I.usedTimes:(I=new vb(i,w,y,s),c.push(I),h.set(w,I)),I}function S(y){if(--y.usedTimes===0){let w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function T(y){o.remove(y)}function R(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:b,acquireProgram:_,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:R}}function Eb(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Tb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Dp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Up(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,g,M,m,f){let x=i[e];return x===void 0?(x={id:d.id,object:d,geometry:p,material:g,materialVariant:a(d),groupOrder:M,renderOrder:d.renderOrder,z:m,group:f},i[e]=x):(x.id=d.id,x.object=d,x.geometry=p,x.material=g,x.materialVariant=a(d),x.groupOrder=M,x.renderOrder=d.renderOrder,x.z=m,x.group=f),e++,x}function l(d,p,g,M,m,f,x){x.reversedDepth===!0&&(m=-m);let b=o(d,p,g,M,m,f);g.transmission>0?n.push(b):g.transparent===!0?s.push(b):t.push(b)}function c(d,p,g,M,m,f){let x=o(d,p,g,M,m,f);g.transmission>0?n.unshift(x):g.transparent===!0?s.unshift(x):t.unshift(x)}function h(d,p){t.length>1&&t.sort(d||Tb),n.length>1&&n.sort(p||Dp),s.length>1&&s.sort(p||Dp)}function u(){for(let d=e,p=i.length;d<p;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function wb(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Up,i.set(n,[a])):s>=r.length?(a=new Up,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ab(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new Oe};break;case"SpotLight":t={position:new P,direction:new P,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function Cb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Rb=0;function Ib(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Pb(i){let e=new Ab,t=Cb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new ft,a=new ft;function o(c){let h=0,u=0,d=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let p=0,g=0,M=0,m=0,f=0,x=0,b=0,_=0,S=0,T=0,R=0,y=0,w=0,I=0;c.sort(Ib);for(let N=0,k=c.length;N<k;N++){let A=c[N],L=A.color,B=A.intensity,z=A.distance,K=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===os?K=A.shadow.map.texture:K=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)h+=L.r*B,u+=L.g*B,d+=L.b*B;else if(A.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(A.sh.coefficients[V],B);I++}else if(A.isSunLight){let V=e.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let Y=A.shadow,j=t.get(A);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[g]=j,n.sunShadowMap[g]=K;let Pe=Y.getViewportCount();for(let Ce=0;Ce<Pe;Ce++)n.sunShadowMatrix[M+Ce]=Y.getMatrix(Ce),n.sunShadowCascade[M+Ce]=Y._cascadeData[Ce];M+=Pe,g++}n.sun[p]=V,p++}else if(A.isDirectionalLight){let V=e.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let Y=A.shadow,j=t.get(A);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=K,n.directionalShadowMatrix[m]=A.shadow.matrix,S++}n.directional[m]=V,m++}else if(A.isSpotLight){let V=e.get(A);V.position.setFromMatrixPosition(A.matrixWorld),V.color.copy(L).multiplyScalar(B),V.distance=z,V.coneCos=Math.cos(A.angle),V.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),V.decay=A.decay,n.spot[x]=V;let Y=A.shadow;if(A.map&&(n.spotLightMap[y]=A.map,y++,Y.updateMatrices(A),A.castShadow&&w++),n.spotLightMatrix[x]=Y.matrix,A.castShadow){let j=t.get(A);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,n.spotShadow[x]=j,n.spotShadowMap[x]=K,R++}x++}else if(A.isRectAreaLight){let V=e.get(A);V.color.copy(L).multiplyScalar(B),V.halfWidth.set(A.width*.5,0,0),V.halfHeight.set(0,A.height*.5,0),n.rectArea[b]=V,b++}else if(A.isPointLight){let V=e.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity),V.distance=A.distance,V.decay=A.decay,A.castShadow){let Y=A.shadow,j=t.get(A);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,j.shadowCameraNear=Y.camera.near,j.shadowCameraFar=Y.camera.far,n.pointShadow[f]=j,n.pointShadowMap[f]=K,n.pointShadowMatrix[f]=A.shadow.matrix,T++}n.point[f]=V,f++}else if(A.isHemisphereLight){let V=e.get(A);V.skyColor.copy(A.color).multiplyScalar(B),V.groundColor.copy(A.groundColor).multiplyScalar(B),n.hemi[_]=V,_++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let D=n.hash;(D.sunLength!==p||D.directionalLength!==m||D.pointLength!==f||D.spotLength!==x||D.rectAreaLength!==b||D.hemiLength!==_||D.numSunShadows!==g||D.numDirectionalShadows!==S||D.numPointShadows!==T||D.numSpotShadows!==R||D.numSpotMaps!==y||D.numLightProbes!==I)&&(n.sun.length=p,n.directional.length=m,n.spot.length=x,n.rectArea.length=b,n.point.length=f,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+y-w,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=I,D.sunLength=p,D.directionalLength=m,D.pointLength=f,D.spotLength=x,D.rectAreaLength=b,D.hemiLength=_,D.numSunShadows=g,D.numDirectionalShadows=S,D.numPointShadows=T,D.numSpotShadows=R,D.numSpotMaps=y,D.numLightProbes=I,n.version=Rb++)}function l(c,h){let u=0,d=0,p=0,g=0,M=0,m=0,f=h.matrixWorldInverse;for(let x=0,b=c.length;x<b;x++){let _=c[x];if(_.isSunLight){let S=n.sun[u];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(f),u++}else if(_.isDirectionalLight){let S=n.directional[d];S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),d++}else if(_.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),g++}else if(_.isRectAreaLight){let S=n.rectArea[M];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(f),a.identity(),r.copy(_.matrixWorld),r.premultiply(f),a.extractRotation(r),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),M++}else if(_.isPointLight){let S=n.point[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(f),p++}else if(_.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:n}}function Np(i){let e=new Pb(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Lb(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Np(i),e.set(s,[o])):r>=a.length?(o=new Np(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Db=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ub=`uniform sampler2D shadow_pass;
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
}`,Nb=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Fb=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Fp=new ft,Ha=new P,Su=new P;function Ob(i,e,t){let n=new pr,s=new oe,r=new oe,a=new Ut,o=new hl,l=new ul,c={},h=t.maxTextureSize,u={[ns]:cn,[cn]:ns,[An]:An},d=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:Db,fragmentShader:Ub}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Et;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new ge(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ia;let f=this.type;this.render=function(T,R,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Tl&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ia);let w=i.getRenderTarget(),I=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),N=i.state;N.setBlending(mi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let k=f!==this.type;k&&R.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(L=>L.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,L=T.length;A<L;A++){let B=T[A],z=B.shadow;if(z===void 0){Ge("WebGLShadowMap:",B,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let K=z.getFrameExtents();s.multiply(K),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,z.mapSize.y=r.y));let V=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=V,z.map===null||k===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===br){if(B.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new En(s.x,s.y,{format:os,type:ti,minFilter:ln,magFilter:ln,generateMipmaps:!1}),z.map.texture.name=B.name+".shadowMap",z.map.depthTexture=new ji(s.x,s.y,Hn),z.map.depthTexture.name=B.name+".shadowMapDepth",z.map.depthTexture.format=ci,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Jt,z.map.depthTexture.magFilter=Jt}else B.isPointLight?(z.map=new xc(s.x),z.map.depthTexture=new nl(s.x,ei)):(z.map=new En(s.x,s.y),z.map.depthTexture=new ji(s.x,s.y,ei)),z.map.depthTexture.name=B.name+".shadowMap",z.map.depthTexture.format=ci,this.type===Ia?(z.map.depthTexture.compareFunction=V?fc:dc,z.map.depthTexture.minFilter=ln,z.map.depthTexture.magFilter=ln):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Jt,z.map.depthTexture.magFilter=Jt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let Y=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();B.isPointLight!==!0&&z.updateMatrices(B,y);for(let j=0;j<Y;j++){let Pe=z.getCamera(j);if(B.isPointLight){let Ce=z.camera,_t=z.matrix,ot=B.distance||Ce.far;ot!==Ce.far&&(Ce.far=ot,Ce.updateProjectionMatrix()),Ha.setFromMatrixPosition(B.matrixWorld),Ce.position.copy(Ha),Su.copy(Ce.position),Su.add(Nb[j]),Ce.up.copy(Fb[j]),Ce.lookAt(Su),Ce.updateMatrixWorld(),_t.makeTranslation(-Ha.x,-Ha.y,-Ha.z),Fp.multiplyMatrices(Ce.projectionMatrix,Ce.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Fp,Ce.coordinateSystem,Ce.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,j),i.clear();else{j===0&&(i.setRenderTarget(z.map),i.clear());let Ce=z.getViewport(j);a.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),N.viewport(a)}n=z.getFrustum(j),_(R,y,Pe,B,this.type)}z.isPointLightShadow!==!0&&this.type===br&&x(z,y),z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(w,I,D)};function x(T,R){let y=e.update(M);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new En(s.x,s.y,{format:os,type:ti}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,y,d,M,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,y,p,M,null)}function b(T,R,y,w){let I=null,D=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)I=D;else if(I=y.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let N=I.uuid,k=R.uuid,A=c[N];A===void 0&&(A={},c[N]=A);let L=A[k];L===void 0&&(L=I.clone(),A[k]=L,R.addEventListener("dispose",S)),I=L}if(I.visible=R.visible,I.wireframe=R.wireframe,w===br?I.side=R.shadowSide!==null?R.shadowSide:R.side:I.side=R.shadowSide!==null?R.shadowSide:u[R.side],I.alphaMap=R.alphaMap,I.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,I.map=R.map,I.clipShadows=R.clipShadows,I.clippingPlanes=R.clippingPlanes,I.clipIntersection=R.clipIntersection,I.displacementMap=R.displacementMap,I.displacementScale=R.displacementScale,I.displacementBias=R.displacementBias,I.wireframeLinewidth=R.wireframeLinewidth,I.linewidth=R.linewidth,y.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let N=i.properties.get(I);N.light=y}return I}function _(T,R,y,w,I){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===br)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);let k=e.update(T),A=T.material;if(Array.isArray(A)){let L=k.groups;for(let B=0,z=L.length;B<z;B++){let K=L[B],V=A[K.materialIndex];if(V&&V.visible){let Y=b(T,V,w,I);T.onBeforeShadow(i,T,R,y,k,Y,K),i.renderBufferDirect(y,null,k,Y,T,K),T.onAfterShadow(i,T,R,y,k,Y,K)}}}else if(A.visible){let L=b(T,A,w,I);T.onBeforeShadow(i,T,R,y,k,L,null),i.renderBufferDirect(y,null,k,L,T,null),T.onAfterShadow(i,T,R,y,k,L,null)}}let N=T.children;for(let k=0,A=N.length;k<A;k++)_(N[k],R,y,w,I)}function S(T){T.target.removeEventListener("dispose",S);for(let y in c){let w=c[y],I=T.target.uuid;I in w&&(w[I].dispose(),delete w[I])}}}function Bb(i,e){function t(){let O=!1,ye=new Ut,Q=null,ve=new Ut(0,0,0,0);return{setMask:function(we){Q!==we&&!O&&(i.colorMask(we,we,we,we),Q=we)},setLocked:function(we){O=we},setClear:function(we,re,ke,Ne,Lt){Lt===!0&&(we*=Ne,re*=Ne,ke*=Ne),ye.set(we,re,ke,Ne),ve.equals(ye)===!1&&(i.clearColor(we,re,ke,Ne),ve.copy(ye))},reset:function(){O=!1,Q=null,ve.set(-1,0,0,0)}}}function n(){let O=!1,ye=!1,Q=null,ve=null,we=null;return{setReversed:function(re){if(ye!==re){let ke=e.get("EXT_clip_control");re?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),ye=re;let Ne=we;we=null,this.setClear(Ne)}},getReversed:function(){return ye},setTest:function(re){re?te(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(re){Q!==re&&!O&&(i.depthMask(re),Q=re)},setFunc:function(re){if(ye&&(re=ap[re]),ve!==re){switch(re){case zo:i.depthFunc(i.NEVER);break;case ko:i.depthFunc(i.ALWAYS);break;case Ho:i.depthFunc(i.LESS);break;case or:i.depthFunc(i.LEQUAL);break;case Vo:i.depthFunc(i.EQUAL);break;case Go:i.depthFunc(i.GEQUAL);break;case Wo:i.depthFunc(i.GREATER);break;case Xo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=re}},setLocked:function(re){O=re},setClear:function(re){we!==re&&(we=re,ye&&(re=1-re),i.clearDepth(re))},reset:function(){O=!1,Q=null,ve=null,we=null,ye=!1}}}function s(){let O=!1,ye=null,Q=null,ve=null,we=null,re=null,ke=null,Ne=null,Lt=null;return{setTest:function(vt){O||(vt?te(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(vt){ye!==vt&&!O&&(i.stencilMask(vt),ye=vt)},setFunc:function(vt,Yn,ii){(Q!==vt||ve!==Yn||we!==ii)&&(i.stencilFunc(vt,Yn,ii),Q=vt,ve=Yn,we=ii)},setOp:function(vt,Yn,ii){(re!==vt||ke!==Yn||Ne!==ii)&&(i.stencilOp(vt,Yn,ii),re=vt,ke=Yn,Ne=ii)},setLocked:function(vt){O=vt},setClear:function(vt){Lt!==vt&&(i.clearStencil(vt),Lt=vt)},reset:function(){O=!1,ye=null,Q=null,ve=null,we=null,re=null,ke=null,Ne=null,Lt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d={},p=new WeakMap,g=[],M=null,m=!1,f=null,x=null,b=null,_=null,S=null,T=null,R=null,y=new Oe(0,0,0),w=0,I=!1,D=null,N=null,k=null,A=null,L=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,K=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),z=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),z=K>=2);let Y=null,j={},Pe=i.getParameter(i.SCISSOR_BOX),Ce=i.getParameter(i.VIEWPORT),_t=new Ut().fromArray(Pe),ot=new Ut().fromArray(Ce);function pt(O,ye,Q,ve){let we=new Uint8Array(4),re=i.createTexture();i.bindTexture(O,re),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<Q;ke++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(ye+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return re}let $={};$[i.TEXTURE_2D]=pt(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=pt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=pt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=pt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(i.DEPTH_TEST),a.setFunc(or),he(!1),me(Hh),te(i.CULL_FACE),ae(mi);function te(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function Se(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Ye(O,ye){return d[O]!==ye?(i.bindFramebuffer(O,ye),d[O]=ye,O===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ye),O===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function Re(O,ye){let Q=g,ve=!1;if(O){Q=p.get(ye),Q===void 0&&(Q=[],p.set(ye,Q));let we=O.textures;if(Q.length!==we.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let re=0,ke=we.length;re<ke;re++)Q[re]=i.COLOR_ATTACHMENT0+re;Q.length=we.length,ve=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ve=!0);ve&&i.drawBuffers(Q)}function Je(O){return M!==O?(i.useProgram(O),M=O,!0):!1}let St={[ws]:i.FUNC_ADD,[Cf]:i.FUNC_SUBTRACT,[Rf]:i.FUNC_REVERSE_SUBTRACT};St[If]=i.MIN,St[Pf]=i.MAX;let ne={[Lf]:i.ZERO,[Df]:i.ONE,[Uf]:i.SRC_COLOR,[Wh]:i.SRC_ALPHA,[kf]:i.SRC_ALPHA_SATURATE,[Bf]:i.DST_COLOR,[Ff]:i.DST_ALPHA,[Nf]:i.ONE_MINUS_SRC_COLOR,[Xh]:i.ONE_MINUS_SRC_ALPHA,[zf]:i.ONE_MINUS_DST_COLOR,[Of]:i.ONE_MINUS_DST_ALPHA,[Hf]:i.CONSTANT_COLOR,[Vf]:i.ONE_MINUS_CONSTANT_COLOR,[Gf]:i.CONSTANT_ALPHA,[Wf]:i.ONE_MINUS_CONSTANT_ALPHA};function ae(O,ye,Q,ve,we,re,ke,Ne,Lt,vt){if(O===mi){m===!0&&(Se(i.BLEND),m=!1);return}if(m===!1&&(te(i.BLEND),m=!0),O!==Af){if(O!==f||vt!==I){if((x!==ws||S!==ws)&&(i.blendEquation(i.FUNC_ADD),x=ws,S=ws),vt)switch(O){case is:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ui:i.blendFunc(i.ONE,i.ONE);break;case Vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qe("WebGLState: Invalid blending: ",O);break}else switch(O){case is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Vh:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gh:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",O);break}b=null,_=null,T=null,R=null,y.set(0,0,0),w=0,f=O,I=vt}return}we=we||ye,re=re||Q,ke=ke||ve,(ye!==x||we!==S)&&(i.blendEquationSeparate(St[ye],St[we]),x=ye,S=we),(Q!==b||ve!==_||re!==T||ke!==R)&&(i.blendFuncSeparate(ne[Q],ne[ve],ne[re],ne[ke]),b=Q,_=ve,T=re,R=ke),(Ne.equals(y)===!1||Lt!==w)&&(i.blendColor(Ne.r,Ne.g,Ne.b,Lt),y.copy(Ne),w=Lt),f=O,I=!1}function le(O,ye){O.side===An?Se(i.CULL_FACE):te(i.CULL_FACE);let Q=O.side===cn;ye&&(Q=!Q),he(Q),O.blending===is&&O.transparent===!1?ae(mi):ae(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let ve=O.stencilWrite;o.setTest(ve),ve&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),He(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function he(O){D!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),D=O)}function me(O){O!==Tf?(te(i.CULL_FACE),O!==N&&(O===Hh?i.cullFace(i.BACK):O===wf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),N=O}function We(O){O!==k&&(z&&i.lineWidth(O),k=O)}function He(O,ye,Q){O?(te(i.POLYGON_OFFSET_FILL),(A!==ye||L!==Q)&&(A=ye,L=Q,a.getReversed()&&(ye=-ye),i.polygonOffset(ye,Q))):Se(i.POLYGON_OFFSET_FILL)}function $e(O){O?te(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function je(O){O===void 0&&(O=i.TEXTURE0+B-1),Y!==O&&(i.activeTexture(O),Y=O)}function U(O,ye,Q){Q===void 0&&(Y===null?Q=i.TEXTURE0+B-1:Q=Y);let ve=j[Q];ve===void 0&&(ve={type:void 0,texture:void 0},j[Q]=ve),(ve.type!==O||ve.texture!==ye)&&(Y!==Q&&(i.activeTexture(Q),Y=Q),i.bindTexture(O,ye||$[O]),ve.type=O,ve.texture=ye)}function yt(){let O=j[Y];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function lt(){try{i.compressedTexImage2D(...arguments)}catch(O){qe("WebGLState:",O)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(O){qe("WebGLState:",O)}}function v(){try{i.texSubImage2D(...arguments)}catch(O){qe("WebGLState:",O)}}function H(){try{i.texSubImage3D(...arguments)}catch(O){qe("WebGLState:",O)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(O){qe("WebGLState:",O)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(O){qe("WebGLState:",O)}}function de(){try{i.texStorage2D(...arguments)}catch(O){qe("WebGLState:",O)}}function pe(){try{i.texStorage3D(...arguments)}catch(O){qe("WebGLState:",O)}}function J(){try{i.texImage2D(...arguments)}catch(O){qe("WebGLState:",O)}}function ee(){try{i.texImage3D(...arguments)}catch(O){qe("WebGLState:",O)}}function xe(O){return u[O]!==void 0?u[O]:i.getParameter(O)}function Be(O,ye){u[O]!==ye&&(i.pixelStorei(O,ye),u[O]=ye)}function be(O){_t.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),_t.copy(O))}function _e(O){ot.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ot.copy(O))}function ze(O,ye){let Q=c.get(ye);Q===void 0&&(Q=new WeakMap,c.set(ye,Q));let ve=Q.get(O);ve===void 0&&(ve=i.getUniformBlockIndex(ye,O.name),Q.set(O,ve))}function Xe(O,ye){let ve=c.get(ye).get(O);l.get(ye)!==ve&&(i.uniformBlockBinding(ye,ve,O.__bindingPointIndex),l.set(ye,ve))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},Y=null,j={},d={},p=new WeakMap,g=[],M=null,m=!1,f=null,x=null,b=null,_=null,S=null,T=null,R=null,y=new Oe(0,0,0),w=0,I=!1,D=null,N=null,k=null,A=null,L=null,_t.set(0,0,i.canvas.width,i.canvas.height),ot.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:te,disable:Se,bindFramebuffer:Ye,drawBuffers:Re,useProgram:Je,setBlending:ae,setMaterial:le,setFlipSided:he,setCullFace:me,setLineWidth:We,setPolygonOffset:He,setScissorTest:$e,activeTexture:je,bindTexture:U,unbindTexture:yt,compressedTexImage2D:lt,compressedTexImage3D:C,texImage2D:J,texImage3D:ee,pixelStorei:Be,getParameter:xe,updateUBOMapping:ze,uniformBlockBinding:Xe,texStorage2D:de,texStorage3D:pe,texSubImage2D:v,texSubImage3D:H,compressedTexSubImage2D:X,compressedTexSubImage3D:Z,scissor:be,viewport:_e,reset:tt}}function zb(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,h=new WeakMap,u=new Set,d,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(C,v){return g?new OffscreenCanvas(C,v):ea("canvas")}function m(C,v,H){let X=1,Z=lt(C);if((Z.width>H||Z.height>H)&&(X=H/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){let de=Math.floor(X*Z.width),pe=Math.floor(X*Z.height);d===void 0&&(d=M(de,pe));let J=v?M(de,pe):d;return J.width=de,J.height=pe,J.getContext("2d").drawImage(C,0,0,de,pe),Ge("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+de+"x"+pe+")."),J}else return"data"in C&&Ge("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function f(C){return C.generateMipmaps}function x(C){i.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(C,v,H,X,Z,de=!1){if(C!==null){if(i[C]!==void 0)return i[C];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let pe;X&&(pe=e.get("EXT_texture_norm16"),pe||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=v;if(v===i.RED&&(H===i.FLOAT&&(J=i.R32F),H===i.HALF_FLOAT&&(J=i.R16F),H===i.UNSIGNED_BYTE&&(J=i.R8),H===i.UNSIGNED_SHORT&&pe&&(J=pe.R16_EXT),H===i.SHORT&&pe&&(J=pe.R16_SNORM_EXT)),v===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.R8UI),H===i.UNSIGNED_SHORT&&(J=i.R16UI),H===i.UNSIGNED_INT&&(J=i.R32UI),H===i.BYTE&&(J=i.R8I),H===i.SHORT&&(J=i.R16I),H===i.INT&&(J=i.R32I)),v===i.RG&&(H===i.FLOAT&&(J=i.RG32F),H===i.HALF_FLOAT&&(J=i.RG16F),H===i.UNSIGNED_BYTE&&(J=i.RG8),H===i.UNSIGNED_SHORT&&pe&&(J=pe.RG16_EXT),H===i.SHORT&&pe&&(J=pe.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RG8UI),H===i.UNSIGNED_SHORT&&(J=i.RG16UI),H===i.UNSIGNED_INT&&(J=i.RG32UI),H===i.BYTE&&(J=i.RG8I),H===i.SHORT&&(J=i.RG16I),H===i.INT&&(J=i.RG32I)),v===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RGB8UI),H===i.UNSIGNED_SHORT&&(J=i.RGB16UI),H===i.UNSIGNED_INT&&(J=i.RGB32UI),H===i.BYTE&&(J=i.RGB8I),H===i.SHORT&&(J=i.RGB16I),H===i.INT&&(J=i.RGB32I)),v===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),H===i.UNSIGNED_INT&&(J=i.RGBA32UI),H===i.BYTE&&(J=i.RGBA8I),H===i.SHORT&&(J=i.RGBA16I),H===i.INT&&(J=i.RGBA32I)),v===i.RGB&&(H===i.UNSIGNED_SHORT&&pe&&(J=pe.RGB16_EXT),H===i.SHORT&&pe&&(J=pe.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),v===i.RGBA){let ee=de?Qr:ut.getTransfer(Z);H===i.FLOAT&&(J=i.RGBA32F),H===i.HALF_FLOAT&&(J=i.RGBA16F),H===i.UNSIGNED_BYTE&&(J=ee===Mt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&pe&&(J=pe.RGBA16_EXT),H===i.SHORT&&pe&&(J=pe.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function S(C,v){let H;return C?v===null||v===ei||v===Sr?H=i.DEPTH24_STENCIL8:v===Hn?H=i.DEPTH32F_STENCIL8:v===Mr&&(H=i.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ei||v===Sr?H=i.DEPTH_COMPONENT24:v===Hn?H=i.DEPTH_COMPONENT32F:v===Mr&&(H=i.DEPTH_COMPONENT16),H}function T(C,v){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==Jt&&C.minFilter!==ln?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function R(C){let v=C.target;v.removeEventListener("dispose",R),w(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&u.delete(v)}function y(C){let v=C.target;v.removeEventListener("dispose",y),D(v)}function w(C){let v=n.get(C);if(v.__webglInit===void 0)return;let H=C.source,X=p.get(H);if(X){let Z=X[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&I(C),Object.keys(X).length===0&&p.delete(H)}n.remove(C)}function I(C){let v=n.get(C);i.deleteTexture(v.__webglTexture);let H=C.source,X=p.get(H);delete X[v.__cacheKey],a.memory.textures--}function D(C){let v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let Z=0;Z<v.__webglFramebuffer[X].length;Z++)i.deleteFramebuffer(v.__webglFramebuffer[X][Z]);else i.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)i.deleteFramebuffer(v.__webglFramebuffer[X]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let H=C.textures;for(let X=0,Z=H.length;X<Z;X++){let de=n.get(H[X]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),a.memory.textures--),n.remove(H[X])}n.remove(C)}let N=0;function k(){N=0}function A(){return N}function L(C){N=C}function B(){let C=N;return C>=s.maxTextures&&Ge("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,C}function z(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function K(C,v){let H=n.get(C);if(C.isVideoTexture&&U(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){let X=C.image;if(X===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(H,C,v);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+v)}function V(C,v){let H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){Se(H,C,v);return}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+v)}function Y(C,v){let H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){Se(H,C,v);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+v)}function j(C,v){let H=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&H.__version!==C.version){Ye(H,C,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+v)}let Pe={[Ki]:i.REPEAT,[oi]:i.CLAMP_TO_EDGE,[qo]:i.MIRRORED_REPEAT},Ce={[Jt]:i.NEAREST,[Yf]:i.NEAREST_MIPMAP_NEAREST,[La]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[Rl]:i.LINEAR_MIPMAP_NEAREST,[rs]:i.LINEAR_MIPMAP_LINEAR},_t={[Kf]:i.NEVER,[np]:i.ALWAYS,[jf]:i.LESS,[dc]:i.LEQUAL,[Qf]:i.EQUAL,[fc]:i.GEQUAL,[ep]:i.GREATER,[tp]:i.NOTEQUAL};function ot(C,v){if(v.type===Hn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===ln||v.magFilter===Rl||v.magFilter===La||v.magFilter===rs||v.minFilter===ln||v.minFilter===Rl||v.minFilter===La||v.minFilter===rs)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Pe[v.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Pe[v.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Pe[v.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Ce[v.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Ce[v.minFilter]),v.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,_t[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Jt||v.minFilter!==La&&v.minFilter!==rs||v.type===Hn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function pt(C,v){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",R));let X=v.source,Z=p.get(X);Z===void 0&&(Z={},p.set(X,Z));let de=z(v);if(de!==C.__cacheKey){Z[de]===void 0&&(Z[de]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),Z[de].usedTimes++;let pe=Z[C.__cacheKey];pe!==void 0&&(Z[C.__cacheKey].usedTimes--,pe.usedTimes===0&&I(v)),C.__cacheKey=de,C.__webglTexture=Z[de].texture}return H}function $(C,v,H){return Math.floor(Math.floor(C/H)/v)}function te(C,v,H,X){let de=C.updateRanges;if(de.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,H,X,v.data);else{de.sort((Be,be)=>Be.start-be.start);let pe=0;for(let Be=1;Be<de.length;Be++){let be=de[pe],_e=de[Be],ze=be.start+be.count,Xe=$(_e.start,v.width,4),tt=$(be.start,v.width,4);_e.start<=ze+1&&Xe===tt&&$(_e.start+_e.count-1,v.width,4)===Xe?be.count=Math.max(be.count,_e.start+_e.count-be.start):(++pe,de[pe]=_e)}de.length=pe+1;let J=t.getParameter(i.UNPACK_ROW_LENGTH),ee=t.getParameter(i.UNPACK_SKIP_PIXELS),xe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Be=0,be=de.length;Be<be;Be++){let _e=de[Be],ze=Math.floor(_e.start/4),Xe=Math.ceil(_e.count/4),tt=ze%v.width,O=Math.floor(ze/v.width),ye=Xe,Q=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),t.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,tt,O,ye,Q,H,X,v.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,xe)}}function Se(C,v,H){let X=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=i.TEXTURE_3D);let Z=pt(C,v),de=v.source;t.bindTexture(X,C.__webglTexture,i.TEXTURE0+H);let pe=n.get(de);if(de.version!==pe.__version||Z===!0){if(t.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap!="undefined"&&v.image instanceof ImageBitmap)===!1){let Q=ut.getPrimaries(ut.workingColorSpace),ve=v.colorSpace===Ni?null:ut.getPrimaries(v.colorSpace),we=v.colorSpace===Ni||Q===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let ee=m(v.image,!1,s.maxTextureSize);ee=yt(v,ee);let xe=r.convert(v.format,v.colorSpace),Be=r.convert(v.type),be=_(v.internalFormat,xe,Be,v.normalized,v.colorSpace,v.isVideoTexture);ot(X,v);let _e,ze=v.mipmaps,Xe=v.isVideoTexture!==!0,tt=pe.__version===void 0||Z===!0,O=de.dataReady,ye=T(v,ee);if(v.isDepthTexture)be=S(v.format===as,v.type),tt&&(Xe?t.texStorage2D(i.TEXTURE_2D,1,be,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,be,ee.width,ee.height,0,xe,Be,null));else if(v.isDataTexture)if(ze.length>0){Xe&&tt&&t.texStorage2D(i.TEXTURE_2D,ye,be,ze[0].width,ze[0].height);for(let Q=0,ve=ze.length;Q<ve;Q++)_e=ze[Q],Xe?O&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,_e.width,_e.height,xe,Be,_e.data):t.texImage2D(i.TEXTURE_2D,Q,be,_e.width,_e.height,0,xe,Be,_e.data);v.generateMipmaps=!1}else Xe?(tt&&t.texStorage2D(i.TEXTURE_2D,ye,be,ee.width,ee.height),O&&te(v,ee,xe,Be)):t.texImage2D(i.TEXTURE_2D,0,be,ee.width,ee.height,0,xe,Be,ee.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Xe&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,be,ze[0].width,ze[0].height,ee.depth);for(let Q=0,ve=ze.length;Q<ve;Q++)if(_e=ze[Q],v.format!==Vn)if(xe!==null)if(Xe){if(O)if(v.layerUpdates.size>0){let we=du(_e.width,_e.height,v.format,v.type);for(let re of v.layerUpdates){let ke=_e.data.subarray(re*we/_e.data.BYTES_PER_ELEMENT,(re+1)*we/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,re,_e.width,_e.height,1,xe,ke)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,_e.width,_e.height,ee.depth,xe,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,be,_e.width,_e.height,ee.depth,0,_e.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,_e.width,_e.height,ee.depth,xe,Be,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,be,_e.width,_e.height,ee.depth,0,xe,Be,_e.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Xe&&tt&&t.texStorage2D(i.TEXTURE_2D,ye,be,ze[0].width,ze[0].height);for(let Q=0,ve=ze.length;Q<ve;Q++)_e=ze[Q],v.format!==Vn?xe!==null?Xe?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,_e.width,_e.height,xe,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,be,_e.width,_e.height,0,_e.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?O&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,_e.width,_e.height,xe,Be,_e.data):t.texImage2D(i.TEXTURE_2D,Q,be,_e.width,_e.height,0,xe,Be,_e.data)}else if(v.isDataArrayTexture)if(Xe){if(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,be,ee.width,ee.height,ee.depth),O)if(v.layerUpdates.size>0){let Q=du(ee.width,ee.height,v.format,v.type);for(let ve of v.layerUpdates){let we=ee.data.subarray(ve*Q/ee.data.BYTES_PER_ELEMENT,(ve+1)*Q/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ve,ee.width,ee.height,1,xe,Be,we)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,xe,Be,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,be,ee.width,ee.height,ee.depth,0,xe,Be,ee.data);else if(v.isData3DTexture)Xe?(tt&&t.texStorage3D(i.TEXTURE_3D,ye,be,ee.width,ee.height,ee.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,xe,Be,ee.data)):t.texImage3D(i.TEXTURE_3D,0,be,ee.width,ee.height,ee.depth,0,xe,Be,ee.data);else if(v.isFramebufferTexture){if(tt)if(Xe)t.texStorage2D(i.TEXTURE_2D,ye,be,ee.width,ee.height);else{let Q=ee.width,ve=ee.height;for(let we=0;we<ye;we++)t.texImage2D(i.TEXTURE_2D,we,be,Q,ve,0,xe,Be,null),Q>>=1,ve>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),ee.parentNode!==Q){Q.appendChild(ee),u.add(v),Q.onpaint=ve=>{let we=ve.changedElements;for(let re of u)we.includes(re.image)&&(re.needsUpdate=!0)},Q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ee);else{let we=i.RGBA,re=i.RGBA,ke=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,we,re,ke,ee)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ze.length>0){if(Xe&&tt){let Q=lt(ze[0]);t.texStorage2D(i.TEXTURE_2D,ye,be,Q.width,Q.height)}for(let Q=0,ve=ze.length;Q<ve;Q++)_e=ze[Q],Xe?O&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,xe,Be,_e):t.texImage2D(i.TEXTURE_2D,Q,be,xe,Be,_e);v.generateMipmaps=!1}else if(Xe){if(tt){let Q=lt(ee);t.texStorage2D(i.TEXTURE_2D,ye,be,Q.width,Q.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,Be,ee)}else t.texImage2D(i.TEXTURE_2D,0,be,xe,Be,ee);f(v)&&x(X),pe.__version=de.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Ye(C,v,H){if(v.image.length!==6)return;let X=pt(C,v),Z=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+H);let de=n.get(Z);if(Z.version!==de.__version||X===!0){t.activeTexture(i.TEXTURE0+H);let pe=ut.getPrimaries(ut.workingColorSpace),J=v.colorSpace===Ni?null:ut.getPrimaries(v.colorSpace),ee=v.colorSpace===Ni||pe===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let xe=v.isCompressedTexture||v.image[0].isCompressedTexture,Be=v.image[0]&&v.image[0].isDataTexture,be=[];for(let re=0;re<6;re++)!xe&&!Be?be[re]=m(v.image[re],!0,s.maxCubemapSize):be[re]=Be?v.image[re].image:v.image[re],be[re]=yt(v,be[re]);let _e=be[0],ze=r.convert(v.format,v.colorSpace),Xe=r.convert(v.type),tt=_(v.internalFormat,ze,Xe,v.normalized,v.colorSpace),O=v.isVideoTexture!==!0,ye=de.__version===void 0||X===!0,Q=Z.dataReady,ve=T(v,_e);ot(i.TEXTURE_CUBE_MAP,v);let we;if(xe){O&&ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,tt,_e.width,_e.height);for(let re=0;re<6;re++){we=be[re].mipmaps;for(let ke=0;ke<we.length;ke++){let Ne=we[ke];v.format!==Vn?ze!==null?O?Q&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ke,0,0,Ne.width,Ne.height,ze,Ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ke,tt,Ne.width,Ne.height,0,Ne.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ke,0,0,Ne.width,Ne.height,ze,Xe,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ke,tt,Ne.width,Ne.height,0,ze,Xe,Ne.data)}}}else{if(we=v.mipmaps,O&&ye){we.length>0&&ve++;let re=lt(be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,tt,re.width,re.height)}for(let re=0;re<6;re++)if(Be){O?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,be[re].width,be[re].height,ze,Xe,be[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,tt,be[re].width,be[re].height,0,ze,Xe,be[re].data);for(let ke=0;ke<we.length;ke++){let Lt=we[ke].image[re].image;O?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ke+1,0,0,Lt.width,Lt.height,ze,Xe,Lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ke+1,tt,Lt.width,Lt.height,0,ze,Xe,Lt.data)}}else{O?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ze,Xe,be[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,tt,ze,Xe,be[re]);for(let ke=0;ke<we.length;ke++){let Ne=we[ke];O?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ke+1,0,0,ze,Xe,Ne.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ke+1,tt,ze,Xe,Ne.image[re])}}}f(v)&&x(i.TEXTURE_CUBE_MAP),de.__version=Z.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Re(C,v,H,X,Z,de){let pe=r.convert(H.format,H.colorSpace),J=r.convert(H.type),ee=_(H.internalFormat,pe,J,H.normalized,H.colorSpace),xe=n.get(v),Be=n.get(H);if(Be.__renderTarget=v,!xe.__hasExternalTextures){let be=Math.max(1,v.width>>de),_e=Math.max(1,v.height>>de);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,de,ee,be,_e,v.depth,0,pe,J,null):t.texImage2D(Z,de,ee,be,_e,0,pe,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),je(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,Z,Be.__webglTexture,0,$e(v)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,Z,Be.__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(C,v,H){if(i.bindRenderbuffer(i.RENDERBUFFER,C),v.depthBuffer){let X=v.depthTexture,Z=X&&X.isDepthTexture?X.type:null,de=S(v.stencilBuffer,Z),pe=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;je(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$e(v),de,v.width,v.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,$e(v),de,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,de,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,C)}else{let X=v.textures;for(let Z=0;Z<X.length;Z++){let de=X[Z],pe=r.convert(de.format,de.colorSpace),J=r.convert(de.type),ee=_(de.internalFormat,pe,J,de.normalized,de.colorSpace);je(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$e(v),ee,v.width,v.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,$e(v),ee,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ee,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function St(C,v,H){let X=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(v.depthTexture);if(Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,v.depthTexture.addEventListener("dispose",R)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),ot(i.TEXTURE_CUBE_MAP,v.depthTexture);let xe=r.convert(v.depthTexture.format),Be=r.convert(v.depthTexture.type),be;v.depthTexture.format===ci?be=i.DEPTH_COMPONENT24:v.depthTexture.format===as&&(be=i.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,be,v.width,v.height,0,xe,Be,null)}}else K(v.depthTexture,0);let de=Z.__webglTexture,pe=$e(v),J=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,ee=v.depthTexture.format===as?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===ci)je(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,J,de,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,ee,J,de,0);else if(v.depthTexture.format===as)je(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,J,de,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,ee,J,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(C){let v=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let X=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){let Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=X}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(H)for(let X=0;X<6;X++)St(v.__webglFramebuffer[X],C,X);else{let X=C.texture.mipmaps;X&&X.length>0?St(v.__webglFramebuffer[0],C,0):St(v.__webglFramebuffer,C,0)}else if(H){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=i.createRenderbuffer(),Je(v.__webglDepthbuffer[X],C,!1);else{let Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=v.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,de)}}else{let X=C.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Je(v.__webglDepthbuffer,C,!1);else{let Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,de)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(C,v,H){let X=n.get(C);v!==void 0&&Re(X.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&ne(C)}function le(C){let v=C.texture,H=n.get(C),X=n.get(v);C.addEventListener("dispose",y);let Z=C.textures,de=C.isWebGLCubeRenderTarget===!0,pe=Z.length>1;if(pe||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=v.version,a.memory.textures++),de){H.__webglFramebuffer=[];for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[J]=[];for(let ee=0;ee<v.mipmaps.length;ee++)H.__webglFramebuffer[J][ee]=i.createFramebuffer()}else H.__webglFramebuffer[J]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let J=0;J<v.mipmaps.length;J++)H.__webglFramebuffer[J]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(pe)for(let J=0,ee=Z.length;J<ee;J++){let xe=n.get(Z[J]);xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&je(C)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){let ee=Z[J];H.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[J]);let xe=r.convert(ee.format,ee.colorSpace),Be=r.convert(ee.type),be=_(ee.internalFormat,xe,Be,ee.normalized,ee.colorSpace,C.isXRRenderTarget===!0),_e=$e(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,be,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,H.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Je(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),ot(i.TEXTURE_CUBE_MAP,v);for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0)for(let ee=0;ee<v.mipmaps.length;ee++)Re(H.__webglFramebuffer[J][ee],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ee);else Re(H.__webglFramebuffer[J],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);f(v)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let J=0,ee=Z.length;J<ee;J++){let xe=Z[J],Be=n.get(xe),be=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(be=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,Be.__webglTexture),ot(be,xe),Re(H.__webglFramebuffer,C,xe,i.COLOR_ATTACHMENT0+J,be,0),f(xe)&&x(be)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,X.__webglTexture),ot(J,v),v.mipmaps&&v.mipmaps.length>0)for(let ee=0;ee<v.mipmaps.length;ee++)Re(H.__webglFramebuffer[ee],C,v,i.COLOR_ATTACHMENT0,J,ee);else Re(H.__webglFramebuffer,C,v,i.COLOR_ATTACHMENT0,J,0);f(v)&&x(J),t.unbindTexture()}C.depthBuffer&&ne(C)}function he(C){let v=C.textures;for(let H=0,X=v.length;H<X;H++){let Z=v[H];if(f(Z)){let de=b(C),pe=n.get(Z).__webglTexture;t.bindTexture(de,pe),x(de),t.unbindTexture()}}}let me=[],We=[];function He(C){if(C.samples>0){if(je(C)===!1){let v=C.textures,H=C.width,X=C.height,Z=i.COLOR_BUFFER_BIT,de=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(C),J=v.length>1;if(J)for(let xe=0;xe<v.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);let ee=C.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let xe=0;xe<v.length;xe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[xe]);let Be=n.get(v[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Be,0)}i.blitFramebuffer(0,0,H,X,0,0,H,X,Z,i.NEAREST),l===!0&&(me.length=0,We.length=0,me.push(i.COLOR_ATTACHMENT0+xe),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(me.push(de),We.push(de),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,We)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,me))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let xe=0;xe<v.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,pe.__webglColorRenderbuffer[xe]);let Be=n.get(v[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,Be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let v=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function $e(C){return Math.min(s.maxSamples,C.samples)}function je(C){let v=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function U(C){let v=a.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function yt(C,v){let H=C.colorSpace,X=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==jr&&H!==Ni&&(ut.getTransfer(H)===Mt?(X!==Vn||Z!==Cn)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",H)),v}function lt(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=L,this.setTexture2D=K,this.setTexture2DArray=V,this.setTexture3D=Y,this.setTextureCube=j,this.rebindTextures=ae,this.setupRenderTarget=le,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function kb(i,e){function t(n,s=Ni){let r,a=ut.getTransfer(s);if(n===Cn)return i.UNSIGNED_BYTE;if(n===Pl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ll)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===iu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===eu)return i.BYTE;if(n===tu)return i.SHORT;if(n===Mr)return i.UNSIGNED_SHORT;if(n===Il)return i.INT;if(n===ei)return i.UNSIGNED_INT;if(n===Hn)return i.FLOAT;if(n===ti)return i.HALF_FLOAT;if(n===su)return i.ALPHA;if(n===ru)return i.RGB;if(n===Vn)return i.RGBA;if(n===ci)return i.DEPTH_COMPONENT;if(n===as)return i.DEPTH_STENCIL;if(n===Er)return i.RED;if(n===Dl)return i.RED_INTEGER;if(n===os)return i.RG;if(n===Ul)return i.RG_INTEGER;if(n===Nl)return i.RGBA_INTEGER;if(n===Da||n===Ua||n===Na||n===Fa)if(a===Mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fl||n===Ol||n===Bl||n===zl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kl||n===Hl||n===Vl||n===Gl||n===Wl||n===Oa||n===Xl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===kl||n===Hl)return a===Mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Gl)return r.COMPRESSED_R11_EAC;if(n===Wl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Oa)return r.COMPRESSED_RG11_EAC;if(n===Xl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ql||n===Yl||n===Zl||n===Jl||n===$l||n===Kl||n===jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ql)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$l)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ql)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ec)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ic)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ac||n===oc||n===lc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ac)return a===Mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cc||n===hc||n===Ba||n===uc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===cc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===hc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Sr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Hb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vb=`
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

}`,Pu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new da(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new yn({vertexShader:Hb,fragmentShader:Vb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ge(new Ms(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lu=class extends hi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,M=typeof XRWebGLBinding!="undefined",m=new Pu,f={},x=t.getContextAttributes(),b=null,_=null,S=[],T=[],R=new oe,y=null,w=null,I=new on;I.viewport=new Ut;let D=new on;D.viewport=new Ut;let N=[I,D],k=new Sl,A=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let te=S[$];return te===void 0&&(te=new dr,S[$]=te),te.getTargetRaySpace()},this.getControllerGrip=function($){let te=S[$];return te===void 0&&(te=new dr,S[$]=te),te.getGripSpace()},this.getHand=function($){let te=S[$];return te===void 0&&(te=new dr,S[$]=te),te.getHandSpace()};function B($){let te=T.indexOf($.inputSource);if(te===-1)return;let Se=S[te];Se!==void 0&&(Se.update($.inputSource,$.frame,c||a),Se.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",K);for(let $=0;$<S.length;$++){let te=T[$];te!==null&&(T[$]=null,S[$].disconnect(te))}A=null,L=null,m.reset();for(let $ in f)delete f[$];if(e.setRenderTarget(b),p=null,d=null,u=null,s=null,_=null,pt.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(R.width,R.height,!1),w!==null){let $=w.camera;$.fov=w.fov,$.zoom=w.zoom,$.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",z),s.addEventListener("inputsourceschange",K),x.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Ye=null,Re=null;x.depth&&(Re=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=x.stencil?as:ci,Ye=x.stencil?Sr:ei);let Je={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Je),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new En(d.textureWidth,d.textureHeight,{format:Vn,type:Cn,depthTexture:new ji(d.textureWidth,d.textureHeight,Ye,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Se={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new En(p.framebufferWidth,p.framebufferHeight,{format:Vn,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),pt.setContext(s),pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K($){for(let te=0;te<$.removed.length;te++){let Se=$.removed[te],Ye=T.indexOf(Se);Ye>=0&&(T[Ye]=null,S[Ye].disconnect(Se))}for(let te=0;te<$.added.length;te++){let Se=$.added[te],Ye=T.indexOf(Se);if(Ye===-1){for(let Je=0;Je<S.length;Je++)if(Je>=T.length){T.push(Se),Ye=Je;break}else if(T[Je]===null){T[Je]=Se,Ye=Je;break}if(Ye===-1)break}let Re=S[Ye];Re&&Re.connect(Se)}}let V=new P,Y=new P;function j($,te,Se){V.setFromMatrixPosition(te.matrixWorld),Y.setFromMatrixPosition(Se.matrixWorld);let Ye=V.distanceTo(Y),Re=te.projectionMatrix.elements,Je=Se.projectionMatrix.elements,St=Re[14]/(Re[10]-1),ne=Re[14]/(Re[10]+1),ae=(Re[9]+1)/Re[5],le=(Re[9]-1)/Re[5],he=(Re[8]-1)/Re[0],me=(Je[8]+1)/Je[0],We=St*he,He=St*me,$e=Ye/(-he+me),je=$e*-he;if(te.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(je),$.translateZ($e),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Re[10]===-1)$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let U=St+$e,yt=ne+$e,lt=We-je,C=He+(Ye-je),v=ae*ne/yt*U,H=le*ne/yt*U;$.projectionMatrix.makePerspective(lt,C,v,H,U,yt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Pe($,te){te===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(te.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let te=$.near,Se=$.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(Se=m.depthFar)),k.near=D.near=I.near=te,k.far=D.far=I.far=Se,(A!==k.near||L!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),A=k.near,L=k.far),k.layers.mask=$.layers.mask|6,I.layers.mask=k.layers.mask&-5,D.layers.mask=k.layers.mask&-3;let Ye=$.parent,Re=k.cameras;Pe(k,Ye);for(let Je=0;Je<Re.length;Je++)Pe(Re[Je],Ye);Re.length===2?j(k,I,D):k.projectionMatrix.copy(I.projectionMatrix),w===null&&$.isPerspectiveCamera&&(w={camera:$,fov:$.fov,zoom:$.zoom}),Ce($,k,Ye)};function Ce($,te,Se){Se===null?$.matrix.copy(te.matrixWorld):($.matrix.copy(Se.matrixWorld),$.matrix.invert(),$.matrix.multiply(te.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Zo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function($){return f[$]};let _t=null;function ot($,te){if(h=te.getViewerPose(c||a),g=te,h!==null){let Se=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let Ye=!1;Se.length!==k.cameras.length&&(k.cameras.length=0,Ye=!0);for(let ne=0;ne<Se.length;ne++){let ae=Se[ne],le=null;if(p!==null)le=p.getViewport(ae);else{let me=u.getViewSubImage(d,ae);le=me.viewport,ne===0&&(e.setRenderTargetTextures(_,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(_))}let he=N[ne];he===void 0&&(he=new on,he.layers.enable(ne),he.viewport=new Ut,N[ne]=he),he.matrix.fromArray(ae.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(ae.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(le.x,le.y,le.width,le.height),ne===0&&(k.matrix.copy(he.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ye===!0&&k.cameras.push(he)}let Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){u=n.getBinding();let ne=u.getDepthInformation(Se[0]);ne&&ne.isValid&&ne.texture&&m.init(ne,s.renderState)}if(Re&&Re.includes("camera-access")&&M){e.state.unbindTexture(),u=n.getBinding();for(let ne=0;ne<Se.length;ne++){let ae=Se[ne].camera;if(ae){let le=f[ae];le||(le=new da,f[ae]=le);let he=u.getCameraImage(ae);le.sourceTexture=he}}}}for(let Se=0;Se<S.length;Se++){let Ye=T[Se],Re=S[Se];Ye!==null&&Re!==void 0&&Re.update(Ye,te,c||a)}_t&&_t($,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}let pt=new Op;pt.setAnimationLoop(ot),this.setAnimationLoop=function($){_t=$},this.dispose=function(){}}},Gb=new ft,Gp=new Ke;Gp.set(-1,0,0,0,1,0,0,0,1);function Wb(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,cu(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,x,b,_){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),M(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,x,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===cn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===cn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let x=e.get(f),b=x.envMap,_=x.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(Gb.makeRotationFromEuler(_)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Gp),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===cn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){let x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Xb(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,S){let T=S.program;n.uniformBlockBinding(_,T)}function c(_,S){let T=s[_.id];T===void 0&&(m(_),T=h(_),s[_.id]=T,_.addEventListener("dispose",x));let R=S.program;n.updateUBOMapping(_,R);let y=e.render.frame;r[_.id]!==y&&(d(_),r[_.id]=y)}function h(_){let S=u();_.__bindingPointIndex=S;let T=i.createBuffer(),R=_.__size,y=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,R,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,T),T}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let S=s[_.id],T=_.uniforms,R=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let y=0,w=T.length;y<w;y++){let I=T[y];if(Array.isArray(I))for(let D=0,N=I.length;D<N;D++)p(I[D],y,D,R);else p(I,y,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,S,T,R){if(M(_,S,T,R)===!0){let y=_.__offset,w=_.value;if(Array.isArray(w)){let I=0;for(let D=0;D<w.length;D++){let N=w[D],k=f(N);g(N,_.__data,I),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(I+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,_.__data)}}function g(_,S,T){typeof _=="number"||typeof _=="boolean"?S[0]=_:_.isMatrix3?(S[0]=_.elements[0],S[1]=_.elements[1],S[2]=_.elements[2],S[3]=0,S[4]=_.elements[3],S[5]=_.elements[4],S[6]=_.elements[5],S[7]=0,S[8]=_.elements[6],S[9]=_.elements[7],S[10]=_.elements[8],S[11]=0):ArrayBuffer.isView(_)?S.set(new _.constructor(_.buffer,_.byteOffset,S.length)):_.toArray(S,T)}function M(_,S,T,R){let y=_.value,w=S+"_"+T;if(R[w]===void 0)return typeof y=="number"||typeof y=="boolean"?R[w]=y:ArrayBuffer.isView(y)?R[w]=y.slice():R[w]=y.clone(),!0;{let I=R[w];if(typeof y=="number"||typeof y=="boolean"){if(I!==y)return R[w]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(I.equals(y)===!1)return I.copy(y),!0}}return!1}function m(_){let S=_.uniforms,T=0,R=16;for(let w=0,I=S.length;w<I;w++){let D=Array.isArray(S[w])?S[w]:[S[w]];for(let N=0,k=D.length;N<k;N++){let A=D[N],L=Array.isArray(A.value)?A.value:[A.value];for(let B=0,z=L.length;B<z;B++){let K=L[B],V=f(K),Y=T%R,j=Y%V.boundary,Pe=Y+j;T+=j,Pe!==0&&R-Pe<V.storage&&(T+=R-Pe),A.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=T,T+=V.storage}}}let y=T%R;return y>0&&(T+=R-y),_.__size=T,_.__cache={},this}function f(_){let S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(S.boundary=16,S.storage=_.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",_),S}function x(_){let S=_.target;S.removeEventListener("dispose",x);let T=a.indexOf(S.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function b(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:b}}var qb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),gi=null;function Yb(){return gi===null&&(gi=new ys(qb,16,16,os,ti),gi.name="DFG_LUT",gi.minFilter=ln,gi.magFilter=ln,gi.wrapS=oi,gi.wrapT=oi,gi.generateMipmaps=!1,gi.needsUpdate=!0),gi}var _c=class{constructor(e={}){let{canvas:t=ip(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Cn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let M=p,m=new Set([Nl,Ul,Dl]),f=new Set([Cn,ei,Mr,Sr,Pl,Ll]),x=new Uint32Array(4),b=new Int32Array(4),_=new P,S=null,T=null,R=[],y=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,D=!1,N=null,k=null,A=null,L=null;this._outputColorSpace=xn;let B=0,z=0,K=null,V=-1,Y=null,j=new Ut,Pe=new Ut,Ce=null,_t=new Oe(0),ot=0,pt=t.width,$=t.height,te=1,Se=null,Ye=null,Re=new Ut(0,0,pt,$),Je=new Ut(0,0,pt,$),St=!1,ne=new pr,ae=!1,le=!1,he=new ft,me=new P,We=new Ut,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$e=!1;function je(){return K===null?te:1}let U=n;function yt(E,F){return t.getContext(E,F)}let lt,C,v,H,X,Z,de,pe,J,ee,xe,Be,be,_e,ze,Xe,tt,O,ye,Q,ve,we,re;try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Lt,!1),t.addEventListener("webglcontextrestored",vt,!1),t.addEventListener("webglcontextcreationerror",Yn,!1),U===null){let F="webgl2";if(U=yt(F,E),U===null)throw yt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ke()}catch(E){throw t.removeEventListener("webglcontextlost",Lt,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",Yn,!1),qe("WebGLRenderer: "+E.message),E}function ke(){lt=new ev(U),lt.init(),ve=new kb(U,lt),C=new Wy(U,lt,e,ve),v=new Bb(U,lt),C.reversedDepthBuffer&&d&&v.buffers.depth.setReversed(!0),k=U.createFramebuffer(),A=U.createFramebuffer(),L=U.createFramebuffer(),H=new iv(U),X=new Eb,Z=new zb(U,lt,v,X,C,ve,H),de=new Qy(I),pe=new rx(U),we=new Vy(U,pe),J=new tv(U,pe,H,we),ee=new rv(U,J,pe,we,H),O=new sv(U,C,Z),ze=new Xy(X),xe=new Sb(I,de,lt,C,we,ze),Be=new Wb(I,X),be=new wb,_e=new Lb(lt),tt=new Hy(I,de,v,ee,g,l),Xe=new Ob(I,ee,C),re=new Xb(U,H,C,v),ye=new Gy(U,lt,H),Q=new nv(U,lt,H),H.programs=xe.programs,I.capabilities=C,I.extensions=lt,I.properties=X,I.renderLists=be,I.shadowMap=Xe,I.state=v,I.info=H}M!==Cn&&(w=new ov(M,t.width,t.height,o,s,r));let Ne=new Lu(I,U);this.xr=Ne,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let E=lt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=lt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(E){E!==void 0&&(te=E,this.setSize(pt,$,!1))},this.getSize=function(E){return E.set(pt,$)},this.setSize=function(E,F,q=!0){if(Ne.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}pt=E,$=F,t.width=Math.floor(E*te),t.height=Math.floor(F*te),q===!0&&(t.style.width=E+"px",t.style.height=F+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(pt*te,$*te).floor()},this.setDrawingBufferSize=function(E,F,q){pt=E,$=F,te=q,t.width=Math.floor(E*q),t.height=Math.floor(F*q),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(M===Cn){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(j)},this.getViewport=function(E){return E.copy(Re)},this.setViewport=function(E,F,q,G){E.isVector4?Re.set(E.x,E.y,E.z,E.w):Re.set(E,F,q,G),v.viewport(j.copy(Re).multiplyScalar(te).round())},this.getScissor=function(E){return E.copy(Je)},this.setScissor=function(E,F,q,G){E.isVector4?Je.set(E.x,E.y,E.z,E.w):Je.set(E,F,q,G),v.scissor(Pe.copy(Je).multiplyScalar(te).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(E){v.setScissorTest(St=E)},this.setOpaqueSort=function(E){Se=E},this.setTransparentSort=function(E){Ye=E},this.getClearColor=function(E){return E.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,q=!0){let G=0;if(E){let W=!1;if(K!==null){let Te=K.texture.format;W=m.has(Te)}if(W){let Te=K.texture.type,Le=f.has(Te),Ee=tt.getClearColor(),De=tt.getClearAlpha(),Fe=Ee.r,rt=Ee.g,ct=Ee.b;Le?(x[0]=Fe,x[1]=rt,x[2]=ct,x[3]=De,U.clearBufferuiv(U.COLOR,0,x)):(b[0]=Fe,b[1]=rt,b[2]=ct,b[3]=De,U.clearBufferiv(U.COLOR,0,b))}else G|=U.COLOR_BUFFER_BIT}F&&(G|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),N=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Lt,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",Yn,!1),tt.dispose(),be.dispose(),_e.dispose(),X.dispose(),de.dispose(),ee.dispose(),we.dispose(),re.dispose(),xe.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",Id),Ne.removeEventListener("sessionend",Pd),ds.stop()};function Lt(E){E.preventDefault(),ta("WebGLRenderer: Context Lost."),D=!0}function vt(){ta("WebGLRenderer: Context Restored."),D=!1;let E=H.autoReset,F=Xe.enabled,q=Xe.autoUpdate,G=Xe.needsUpdate,W=Xe.type;ke(),H.autoReset=E,Xe.enabled=F,Xe.autoUpdate=q,Xe.needsUpdate=G,Xe.type=W}function Yn(E){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ii(E){let F=E.target;F.removeEventListener("dispose",ii),V0(F)}function V0(E){G0(E),X.remove(E)}function G0(E){let F=X.get(E).programs;F!==void 0&&(F.forEach(function(q){xe.releaseProgram(q)}),E.isShaderMaterial&&xe.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,q,G,W,Te){F===null&&(F=He);let Le=W.isMesh&&W.matrixWorld.determinantAffine()<0,Ee=q0(E,F,q,G,W);v.setMaterial(G,Le);let De=q.index,Fe=1;if(G.wireframe===!0){if(De=J.getWireframeAttribute(q),De===void 0)return;Fe=2}let rt=q.drawRange,ct=q.attributes.position,Ue=rt.start*Fe,bt=(rt.start+rt.count)*Fe;Te!==null&&(Ue=Math.max(Ue,Te.start*Fe),bt=Math.min(bt,(Te.start+Te.count)*Fe)),De!==null?(Ue=Math.max(Ue,0),bt=Math.min(bt,De.count)):ct!=null&&(Ue=Math.max(Ue,0),bt=Math.min(bt,ct.count));let Yt=bt-Ue;if(Yt<0||Yt===1/0)return;we.setup(W,G,Ee,q,De);let Ot,Ct=ye;if(De!==null&&(Ot=pe.get(De),Ct=Q,Ct.setIndex(Ot)),W.isMesh)G.wireframe===!0?(v.setLineWidth(G.wireframeLinewidth*je()),Ct.setMode(U.LINES)):Ct.setMode(U.TRIANGLES);else if(W.isLine){let hn=G.linewidth;hn===void 0&&(hn=1),v.setLineWidth(hn*je()),W.isLineSegments?Ct.setMode(U.LINES):W.isLineLoop?Ct.setMode(U.LINE_LOOP):Ct.setMode(U.LINE_STRIP)}else W.isPoints?Ct.setMode(U.POINTS):W.isSprite&&Ct.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(lt.get("WEBGL_multi_draw"))Ct.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let hn=W._multiDrawStarts,Ie=W._multiDrawCounts,mn=W._multiDrawCount,mt=De?pe.get(De).bytesPerElement:1,Bn=X.get(G).currentProgram.getUniforms();for(let si=0;si<mn;si++)Bn.setValue(U,"_gl_DrawID",si),Ct.render(hn[si]/mt,Ie[si])}else if(W.isInstancedMesh)Ct.renderInstances(Ue,Yt,W.count);else if(q.isInstancedBufferGeometry){let hn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ie=Math.min(q.instanceCount,hn);Ct.renderInstances(Ue,Yt,Ie)}else Ct.render(Ue,Yt)};function Rd(E,F,q,G){N!==null&&E.isNodeMaterial&&N.setObject(G,E),ae===!0&&ze.setState(E,q,!1),E.transparent===!0&&E.side===An&&E.forceSinglePass===!1?(E.side=cn,E.needsUpdate=!0,ao(E,F,G),E.side=ns,E.needsUpdate=!0,ao(E,F,G),E.side=An):ao(E,F,G)}this.compile=function(E,F,q=null){q===null&&(q=E),N!==null&&N.renderStart(E,F,q),T=_e.get(q),T.init(F),y.push(T),q.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),E!==q&&E.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),T.setupLights(),N!==null&&N.updateLights(T.state.lightsArray),le=this.localClippingEnabled,ae=ze.init(this.clippingPlanes,le),ae===!0&&ze.setGlobalState(this.clippingPlanes,F),N!==null&&Xe.render(T.state.shadowsArray,q,F);let G=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Te=W.material;if(Te)if(Array.isArray(Te))for(let Le=0;Le<Te.length;Le++){let Ee=Te[Le];Rd(Ee,q,F,W),G.add(Ee)}else Rd(Te,q,F,W),G.add(Te)}),T=y.pop(),N!==null&&N.renderEnd(),G},this.compileAsync=function(E,F,q=null){let G=this.compile(E,F,q);return new Promise(W=>{function Te(){if(G.forEach(function(Le){let De=X.get(Le).currentProgram;(De===void 0||De.isReady())&&G.delete(Le)}),G.size===0){W(E);return}setTimeout(Te,10)}lt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Kc=null;function W0(E){Kc&&Kc(E)}function Id(){ds.stop()}function Pd(){ds.start()}let ds=new Op;ds.setAnimationLoop(W0),typeof self!="undefined"&&ds.setContext(self),this.setAnimationLoop=function(E){Kc=E,Ne.setAnimationLoop(E),E===null?ds.stop():ds.start()},Ne.addEventListener("sessionstart",Id),Ne.addEventListener("sessionend",Pd),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;N!==null&&N.renderStart(E,F);let q=Ne.enabled===!0&&Ne.isPresenting===!0,G=w!==null&&(K===null||q)&&w.begin(I,K);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(F),F=Ne.getCamera()),E.isScene===!0&&E.onBeforeRender(I,E,F,K),T=_e.get(E,y.length),T.init(F),T.state.textureUnits=Z.getTextureUnits(),y.push(T),he.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ne.setFromProjectionMatrix(he,jn,F.reversedDepth),le=this.localClippingEnabled,ae=ze.init(this.clippingPlanes,le),S=be.get(E,R.length),S.init(),R.push(S),Ne.enabled===!0&&Ne.isPresenting===!0){let Le=I.xr.getDepthSensingMesh();Le!==null&&jc(Le,F,-1/0,I.sortObjects)}jc(E,F,0,I.sortObjects),S.finish(),N!==null&&N.updateLights(T.state.lightsArray),I.sortObjects===!0&&S.sort(Se,Ye),$e=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,$e&&tt.addToRenderList(S,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ae===!0&&ze.beginShadows();let W=T.state.shadowsArray;if(Xe.render(W,E,F),ae===!0&&ze.endShadows(),(G&&w.hasRenderPass())===!1){let Le=S.opaque,Ee=S.transmissive;if(T.setupLights(),F.isArrayCamera){let De=F.cameras;if(Ee.length>0)for(let Fe=0,rt=De.length;Fe<rt;Fe++){let ct=De[Fe];Dd(Le,Ee,E,ct)}$e&&tt.render(E);for(let Fe=0,rt=De.length;Fe<rt;Fe++){let ct=De[Fe];Ld(S,E,ct,ct.viewport)}}else Ee.length>0&&Dd(Le,Ee,E,F),$e&&tt.render(E),Ld(S,E,F)}K!==null&&z===0&&(Z.updateMultisampleRenderTarget(K),Z.updateRenderTargetMipmap(K)),G&&w.end(I),E.isScene===!0&&E.onAfterRender(I,E,F),we.resetDefaultState(),V=-1,Y=null,y.pop(),y.length>0?(T=y[y.length-1],Z.setTextureUnits(T.state.textureUnits),ae===!0&&ze.setGlobalState(I.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?S=R[R.length-1]:S=null,N!==null&&N.renderEnd()};function jc(E,F,q,G){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(ne)){G&&We.setFromMatrixPosition(E.matrixWorld).applyMatrix4(he);let Le=ee.update(E),Ee=E.material;Ee.visible&&S.push(E,Le,Ee,q,We.z,null,F)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(ne))){let Le=ee.update(E),Ee=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),We.copy(E.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),We.copy(Le.boundingSphere.center)),We.applyMatrix4(E.matrixWorld).applyMatrix4(he)),Array.isArray(Ee)){let De=Le.groups;for(let Fe=0,rt=De.length;Fe<rt;Fe++){let ct=De[Fe],Ue=Ee[ct.materialIndex];Ue&&Ue.visible&&S.push(E,Le,Ue,q,We.z,ct,F)}}else Ee.visible&&S.push(E,Le,Ee,q,We.z,null,F)}}let Te=E.children;for(let Le=0,Ee=Te.length;Le<Ee;Le++)jc(Te[Le],F,q,G)}function Ld(E,F,q,G){let{opaque:W,transmissive:Te,transparent:Le}=E;T.setupLightsView(q),ae===!0&&ze.setGlobalState(I.clippingPlanes,q),G&&v.viewport(j.copy(G)),W.length>0&&ro(W,F,q),Te.length>0&&ro(Te,F,q),Le.length>0&&ro(Le,F,q),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Dd(E,F,q,G){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){let Ue=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new En(1,1,{generateMipmaps:!0,type:Ue?ti:Cn,minFilter:rs,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ut.workingColorSpace})}let Te=T.state.transmissionRenderTarget[G.id],Le=G.viewport||j;Te.setSize(Le.z*I.transmissionResolutionScale,Le.w*I.transmissionResolutionScale);let Ee=I.getRenderTarget(),De=I.getActiveCubeFace(),Fe=I.getActiveMipmapLevel();I.setRenderTarget(Te),I.getClearColor(_t),ot=I.getClearAlpha(),ot<1&&I.setClearColor(16777215,.5),I.clear(),$e&&tt.render(q);let rt=I.toneMapping;I.toneMapping=Qn;let ct=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),ae===!0&&ze.setGlobalState(I.clippingPlanes,G),ro(E,q,G),Z.updateMultisampleRenderTarget(Te),Z.updateRenderTargetMipmap(Te),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let bt=0,Yt=F.length;bt<Yt;bt++){let Ot=F[bt],{object:Ct,geometry:hn,material:Ie,group:mn}=Ot;if(Ie.side===An&&Ct.layers.test(G.layers)){let mt=Ie.side;Ie.side=cn,Ie.needsUpdate=!0,Ud(Ct,q,G,hn,Ie,mn),Ie.side=mt,Ie.needsUpdate=!0,Ue=!0}}Ue===!0&&(Z.updateMultisampleRenderTarget(Te),Z.updateRenderTargetMipmap(Te))}I.setRenderTarget(Ee,De,Fe),I.setClearColor(_t,ot),ct!==void 0&&(G.viewport=ct),I.toneMapping=rt}function ro(E,F,q){let G=F.isScene===!0?F.overrideMaterial:null;for(let W=0,Te=E.length;W<Te;W++){let Le=E[W],{object:Ee,geometry:De,group:Fe}=Le,rt=Le.material;rt.allowOverride===!0&&G!==null&&(rt=G),Ee.layers.test(q.layers)&&Ud(Ee,F,q,De,rt,Fe)}}function Ud(E,F,q,G,W,Te){N!==null&&W.isNodeMaterial&&N.setObject(E,W),E.onBeforeRender(I,F,q,G,W,Te),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(I,F,q,G,E,Te),W.transparent===!0&&W.side===An&&W.forceSinglePass===!1?(W.side=cn,W.needsUpdate=!0,I.renderBufferDirect(q,F,G,W,E,Te),W.side=ns,W.needsUpdate=!0,I.renderBufferDirect(q,F,G,W,E,Te),W.side=An):I.renderBufferDirect(q,F,G,W,E,Te),E.onAfterRender(I,F,q,G,W,Te)}function ao(E,F,q){F.isScene!==!0&&(F=He);let G=X.get(E),W=T.state.lights,Te=T.state.shadowsArray,Le=W.state.version,Ee=xe.getParameters(E,W.state,Te,F,q,T.state.lightProbeGridArray),De=xe.getProgramCacheKey(Ee),Fe=G.programs;G.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,G.fog=F.fog;let rt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;G.envMap=de.get(E.envMap||G.environment,rt),G.envMapRotation=G.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Fe===void 0&&(E.addEventListener("dispose",ii),Fe=new Map,G.programs=Fe);let ct=Fe.get(De);if(ct!==void 0){if(G.currentProgram===ct&&G.lightsStateVersion===Le)return Fd(E,Ee),ct}else Ee.uniforms=xe.getUniforms(E),N!==null&&E.isNodeMaterial&&N.build(E,q,Ee),E.onBeforeCompile(Ee,I),ct=xe.acquireProgram(Ee,De),Fe.set(De,ct),G.uniforms=Ee.uniforms;let Ue=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ue.clippingPlanes=ze.uniform),Fd(E,Ee),G.needsLights=Z0(E),G.lightsStateVersion=Le,G.needsLights&&(Ue.ambientLightColor.value=W.state.ambient,Ue.lightProbe.value=W.state.probe,Ue.sunLights.value=W.state.sun,Ue.sunLightShadows.value=W.state.sunShadow,Ue.directionalLights.value=W.state.directional,Ue.directionalLightShadows.value=W.state.directionalShadow,Ue.spotLights.value=W.state.spot,Ue.spotLightShadows.value=W.state.spotShadow,Ue.rectAreaLights.value=W.state.rectArea,Ue.ltc_1.value=W.state.rectAreaLTC1,Ue.ltc_2.value=W.state.rectAreaLTC2,Ue.pointLights.value=W.state.point,Ue.pointLightShadows.value=W.state.pointShadow,Ue.hemisphereLights.value=W.state.hemi,Ue.sunShadowMatrix.value=W.state.sunShadowMatrix,Ue.sunShadowCascade.value=W.state.sunShadowCascade,Ue.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ue.spotLightMatrix.value=W.state.spotLightMatrix,Ue.spotLightMap.value=W.state.spotLightMap,Ue.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=T.state.lightProbeGridArray.length>0,G.currentProgram=ct,G.uniformsList=null,ct}function Nd(E){if(E.uniformsList===null){let F=E.currentProgram.getUniforms();E.uniformsList=Ar.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Fd(E,F){let q=X.get(E);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function X0(E,F){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;_.setFromMatrixPosition(F.matrixWorld);for(let q=0,G=E.length;q<G;q++){let W=E[q];if(W.texture!==null&&W.boundingBox.containsPoint(_))return W}return null}function q0(E,F,q,G,W){F.isScene!==!0&&(F=He),Z.resetTextureUnits();let Te=F.fog,Le=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?F.environment:null,Ee=K===null?I.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ut.workingColorSpace,De=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Fe=de.get(G.envMap||Le,De),rt=G.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ct=!!q.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ue=!!q.morphAttributes.position,bt=!!q.morphAttributes.normal,Yt=!!q.morphAttributes.color,Ot=Qn;G.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ot=I.toneMapping);let Ct=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,hn=Ct!==void 0?Ct.length:0,Ie=X.get(G),mn=T.state.lights;if(ae===!0&&(le===!0||E!==Y)){let Dt=E===Y&&G.id===V;ze.setState(G,E,Dt)}let mt=!1;G.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==mn.state.version||Ie.outputColorSpace!==Ee||W.isBatchedMesh&&Ie.batching===!1||!W.isBatchedMesh&&Ie.batching===!0||W.isBatchedMesh&&Ie.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ie.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ie.instancing===!1||!W.isInstancedMesh&&Ie.instancing===!0||W.isSkinnedMesh&&Ie.skinning===!1||!W.isSkinnedMesh&&Ie.skinning===!0||W.isInstancedMesh&&Ie.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ie.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ie.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ie.instancingMorph===!1&&W.morphTexture!==null||Ie.envMap!==Fe||G.fog===!0&&Ie.fog!==Te||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ze.numPlanes||Ie.numIntersection!==ze.numIntersection)||Ie.vertexAlphas!==rt||Ie.vertexTangents!==ct||Ie.morphTargets!==Ue||Ie.morphNormals!==bt||Ie.morphColors!==Yt||Ie.toneMapping!==Ot||Ie.morphTargetsCount!==hn||!!Ie.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,Ie.__version=G.version);let Bn=Ie.currentProgram;mt===!0&&(Bn=ao(G,F,W),N&&G.isNodeMaterial&&N.onUpdateProgram(G,Bn,Ie));let si=!1,Gi=!1,ks=!1,wt=Bn.getUniforms(),Xt=Ie.uniforms;if(v.useProgram(Bn.program)&&(si=!0,Gi=!0,ks=!0),G.id!==V&&(V=G.id,Gi=!0),Ie.needsLights){let Dt=X0(T.state.lightProbeGridArray,W);Ie.lightProbeGrid!==Dt&&(Ie.lightProbeGrid=Dt,Gi=!0)}if(si||Y!==E){v.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),wt.setValue(U,"projectionMatrix",E.projectionMatrix),wt.setValue(U,"viewMatrix",E.matrixWorldInverse);let Xi=wt.map.cameraPosition;Xi!==void 0&&Xi.setValue(U,me.setFromMatrixPosition(E.matrixWorld)),C.logarithmicDepthBuffer&&wt.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&wt.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),Y!==E&&(Y=E,Gi=!0,ks=!0)}if(Ie.needsLights&&(mn.state.sunShadowMap.length>0&&wt.setValue(U,"sunShadowMap",mn.state.sunShadowMap,Z),mn.state.directionalShadowMap.length>0&&wt.setValue(U,"directionalShadowMap",mn.state.directionalShadowMap,Z),mn.state.spotShadowMap.length>0&&wt.setValue(U,"spotShadowMap",mn.state.spotShadowMap,Z),mn.state.pointShadowMap.length>0&&wt.setValue(U,"pointShadowMap",mn.state.pointShadowMap,Z)),W.isSkinnedMesh){wt.setOptional(U,W,"bindMatrix"),wt.setOptional(U,W,"bindMatrixInverse");let Dt=W.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),wt.setValue(U,"boneTexture",Dt.boneTexture,Z))}W.isBatchedMesh&&(wt.setOptional(U,W,"batchingTexture"),wt.setValue(U,"batchingTexture",W._matricesTexture,Z),wt.setOptional(U,W,"batchingIdTexture"),wt.setValue(U,"batchingIdTexture",W._indirectTexture,Z),wt.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&wt.setValue(U,"batchingColorTexture",W._colorsTexture,Z));let Wi=q.morphAttributes;if((Wi.position!==void 0||Wi.normal!==void 0||Wi.color!==void 0)&&O.update(W,q,Bn),(Gi||Ie.receiveShadow!==W.receiveShadow)&&(Ie.receiveShadow=W.receiveShadow,wt.setValue(U,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&F.environment!==null&&(Xt.envMapIntensity.value=F.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=Yb()),Gi){if(wt.setValue(U,"toneMappingExposure",I.toneMappingExposure),Ie.needsLights&&Y0(Xt,ks),Te&&G.fog===!0&&Be.refreshFogUniforms(Xt,Te),Be.refreshMaterialUniforms(Xt,G,te,$,T.state.transmissionRenderTarget[E.id]),Ie.needsLights&&Ie.lightProbeGrid){let Dt=Ie.lightProbeGrid;Xt.probesSH.value=Dt.texture,Xt.probesMin.value.copy(Dt.boundingBox.min),Xt.probesMax.value.copy(Dt.boundingBox.max),Xt.probesResolution.value.copy(Dt.resolution)}Ar.upload(U,Nd(Ie),Xt,Z)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ar.upload(U,Nd(Ie),Xt,Z),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&wt.setValue(U,"center",W.center),wt.setValue(U,"modelViewMatrix",W.modelViewMatrix),wt.setValue(U,"normalMatrix",W.normalMatrix),wt.setValue(U,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let Dt=G.uniformsGroups;for(let Xi=0,Hs=Dt.length;Xi<Hs;Xi++){let Bd=Dt[Xi];re.update(Bd,Bn),re.bind(Bd,Bn)}}return Bn}function Y0(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.sunLights.needsUpdate=F,E.sunLightShadows.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Z0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(E,F,q){let G=X.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),X.get(E.texture).__webglTexture=F,X.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:q,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){let q=X.get(E);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,q=0){K=E,B=F,z=q;let G=null,W=!1,Te=!1;if(E){let Ee=X.get(E);if(Ee.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(U.FRAMEBUFFER,Ee.__webglFramebuffer),j.copy(E.viewport),Pe.copy(E.scissor),Ce=E.scissorTest,v.viewport(j),v.scissor(Pe),v.setScissorTest(Ce),V=-1;return}else if(Ee.__webglFramebuffer===void 0)Z.setupRenderTarget(E);else if(Ee.__hasExternalTextures)Z.rebindTextures(E,X.get(E.texture).__webglTexture,X.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let rt=E.depthTexture;if(Ee.__boundDepthTexture!==rt){if(rt!==null&&X.has(rt)&&(E.width!==rt.image.width||E.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(E)}}let De=E.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Te=!0);let Fe=X.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Fe[F])?G=Fe[F][q]:G=Fe[F],W=!0):E.samples>0&&Z.useMultisampledRTT(E)===!1?G=X.get(E).__webglMultisampledFramebuffer:Array.isArray(Fe)?G=Fe[q]:G=Fe,j.copy(E.viewport),Pe.copy(E.scissor),Ce=E.scissorTest}else j.copy(Re).multiplyScalar(te).floor(),Pe.copy(Je).multiplyScalar(te).floor(),Ce=St;if(q!==0&&(G=k),v.bindFramebuffer(U.FRAMEBUFFER,G)&&v.drawBuffers(E,G),v.viewport(j),v.scissor(Pe),v.setScissorTest(Ce),W){let Ee=X.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ee.__webglTexture,q)}else if(Te){let Ee=F;for(let De=0;De<E.textures.length;De++){let Fe=X.get(E.textures[De]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+De,Fe.__webglTexture,q,Ee)}}else if(E!==null&&q!==0){let Ee=X.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ee.__webglTexture,q)}V=-1};function Od(E){let F=X.get(E);return(F.__readFormat!==E.format||F.__readType!==E.type)&&(F.__readFormat=E.format,F.__readType=E.type,F.__formatReadable=C.textureFormatReadable(E.format),F.__typeReadable=C.textureTypeReadable(E.type)),F}this.readRenderTargetPixels=function(E,F,q,G,W,Te,Le,Ee=0){if(!(E&&E.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Le!==void 0&&(De=De[Le]),De){v.bindFramebuffer(U.FRAMEBUFFER,De);try{let Fe=E.textures[Ee],rt=Fe.format,ct=Fe.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ee);let Ue=Od(Fe);if(Ue.__formatReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ue.__typeReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-G&&q>=0&&q<=E.height-W&&U.readPixels(F,q,G,W,ve.convert(rt),ve.convert(ct),Te)}finally{let Fe=K!==null?X.get(K).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(E,F,q,G,W,Te,Le,Ee=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Le!==void 0&&(De=De[Le]),De)if(F>=0&&F<=E.width-G&&q>=0&&q<=E.height-W){v.bindFramebuffer(U.FRAMEBUFFER,De);let Fe=E.textures[Ee],rt=Fe.format,ct=Fe.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ee);let Ue=Od(Fe);if(Ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let bt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,bt),U.bufferData(U.PIXEL_PACK_BUFFER,Te.byteLength,U.STREAM_READ),U.readPixels(F,q,G,W,ve.convert(rt),ve.convert(ct),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Yt=K!==null?X.get(K).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,Yt);let Ot=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await rp(U,Ot,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,bt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Te),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(bt),U.deleteSync(Ot),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,q=0){let G=Math.pow(2,-q),W=Math.floor(E.image.width*G),Te=Math.floor(E.image.height*G),Le=F!==null?F.x:0,Ee=F!==null?F.y:0;Z.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,Le,Ee,W,Te),v.unbindTexture()},this.copyTextureToTexture=function(E,F,q=null,G=null,W=0,Te=0){let Le,Ee,De,Fe,rt,ct,Ue,bt,Yt,Ot=E.isCompressedTexture?E.mipmaps[Te]:E.image;if(q!==null)Le=q.max.x-q.min.x,Ee=q.max.y-q.min.y,De=q.isBox3?q.max.z-q.min.z:1,Fe=q.min.x,rt=q.min.y,ct=q.isBox3?q.min.z:0;else{let Xt=Math.pow(2,-W);Le=Math.floor(Ot.width*Xt),Ee=Math.floor(Ot.height*Xt),E.isDataArrayTexture?De=Ot.depth:E.isData3DTexture?De=Math.floor(Ot.depth*Xt):De=1,Fe=0,rt=0,ct=0}G!==null?(Ue=G.x,bt=G.y,Yt=G.z):(Ue=0,bt=0,Yt=0);let Ct=ve.convert(F.format),hn=ve.convert(F.type),Ie;F.isData3DTexture?(Z.setTexture3D(F,0),Ie=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Z.setTexture2DArray(F,0),Ie=U.TEXTURE_2D_ARRAY):(Z.setTexture2D(F,0),Ie=U.TEXTURE_2D),v.activeTexture(U.TEXTURE0),v.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),v.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),v.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);let mn=v.getParameter(U.UNPACK_ROW_LENGTH),mt=v.getParameter(U.UNPACK_IMAGE_HEIGHT),Bn=v.getParameter(U.UNPACK_SKIP_PIXELS),si=v.getParameter(U.UNPACK_SKIP_ROWS),Gi=v.getParameter(U.UNPACK_SKIP_IMAGES);v.pixelStorei(U.UNPACK_ROW_LENGTH,Ot.width),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ot.height),v.pixelStorei(U.UNPACK_SKIP_PIXELS,Fe),v.pixelStorei(U.UNPACK_SKIP_ROWS,rt),v.pixelStorei(U.UNPACK_SKIP_IMAGES,ct);let ks=E.isDataArrayTexture||E.isData3DTexture,wt=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){let Xt=X.get(E),Wi=X.get(F),Dt=X.get(Xt.__renderTarget),Xi=X.get(Wi.__renderTarget);v.bindFramebuffer(U.READ_FRAMEBUFFER,Dt.__webglFramebuffer),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,Xi.__webglFramebuffer);for(let Hs=0;Hs<De;Hs++)ks&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,X.get(E).__webglTexture,W,ct+Hs),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,X.get(F).__webglTexture,Te,Yt+Hs)),U.blitFramebuffer(Fe,rt,Le,Ee,Ue,bt,Le,Ee,U.DEPTH_BUFFER_BIT,U.NEAREST);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||X.has(E)){let Xt=X.get(E),Wi=X.get(F);v.bindFramebuffer(U.READ_FRAMEBUFFER,A),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,L);for(let Dt=0;Dt<De;Dt++)ks?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Xt.__webglTexture,W,ct+Dt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Xt.__webglTexture,W),wt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Wi.__webglTexture,Te,Yt+Dt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Wi.__webglTexture,Te),W!==0?U.blitFramebuffer(Fe,rt,Le,Ee,Ue,bt,Le,Ee,U.COLOR_BUFFER_BIT,U.NEAREST):wt?U.copyTexSubImage3D(Ie,Te,Ue,bt,Yt+Dt,Fe,rt,Le,Ee):U.copyTexSubImage2D(Ie,Te,Ue,bt,Fe,rt,Le,Ee);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else wt?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Ie,Te,Ue,bt,Yt,Le,Ee,De,Ct,hn,Ot.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(Ie,Te,Ue,bt,Yt,Le,Ee,De,Ct,Ot.data):U.texSubImage3D(Ie,Te,Ue,bt,Yt,Le,Ee,De,Ct,hn,Ot):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Te,Ue,bt,Le,Ee,Ct,hn,Ot.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Te,Ue,bt,Ot.width,Ot.height,Ct,Ot.data):U.texSubImage2D(U.TEXTURE_2D,Te,Ue,bt,Le,Ee,Ct,hn,Ot);v.pixelStorei(U.UNPACK_ROW_LENGTH,mn),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,mt),v.pixelStorei(U.UNPACK_SKIP_PIXELS,Bn),v.pixelStorei(U.UNPACK_SKIP_ROWS,si),v.pixelStorei(U.UNPACK_SKIP_IMAGES,Gi),Te===0&&F.generateMipmaps&&U.generateMipmap(Ie),v.unbindTexture()},this.initRenderTarget=function(E){X.get(E).__webglFramebuffer===void 0&&Z.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Z.setTextureCube(E,0):E.isData3DTexture?Z.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Z.setTexture2DArray(E,0):Z.setTexture2D(E,0),v.unbindTexture()},this.resetState=function(){B=0,z=0,K=null,v.reset(),we.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}};var Is={sunDir:{value:new P(0,1,0)},sunCol:{value:new P(1,.85,.6)},misc:{value:new Ut(0,.08,0,0)}},Du="gl_FragColor.rgb+=(fract(52.9829189*fract(dot(gl_FragCoord.xy,vec2(.06711056,.00583715))))-.5)/255.;",bc=nt;bc.fog_pars_vertex=`#ifdef USE_FOG
varying float vFogDepth;varying vec3 vFogWP;
#endif`;bc.fog_vertex=`#ifdef USE_FOG
vFogDepth=-mvPosition.z;vFogWP=transpose(mat3(viewMatrix))*mvPosition.xyz;
#endif`;bc.fog_pars_fragment=`#ifdef USE_FOG
uniform vec3 fogColor;varying float vFogDepth;varying vec3 vFogWP;uniform vec3 fogSunDir;uniform vec3 fogSunCol;uniform vec4 fogMisc;
#ifdef FOG_EXP2
uniform float fogDensity;
#else
uniform float fogNear;uniform float fogFar;
#endif
#endif`;bc.fog_fragment=`#ifdef USE_FOG
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
${Du}
#endif`;var Wp=i=>{i.uniforms.fogSunDir=Is.sunDir,i.uniforms.fogSunCol=Is.sunCol,i.uniforms.fogMisc=Is.misc};Object.defineProperty(Tn.prototype,"onBeforeCompile",{configurable:!0,get(){return this._obc||Wp},set(i){let e=(t,n)=>{Wp(t),i(t,n)};e.toString=()=>i.toString()+"/*fogfx*/",this._obc=e}});(function(){if(window.PZ)return;let i=window.PZ={on:!1,ctx:()=>null,started:()=>!0},e=document.createElement("style");e.textContent="#pz{position:fixed;inset:0;z-index:30;display:grid;place-items:center;background:rgba(24,26,56,.64);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);color:#fbf1e0;font-family:system-ui,-apple-system,sans-serif;text-align:center;padding:20px}#pz[hidden]{display:none}#pz .c{display:flex;flex-direction:column;gap:12px;align-items:center}#pz h2{margin:0;font:600 1.7rem system-ui}#pz p{margin:0;color:#cbc8e8;line-height:1.5}#pz button{background:#ffc77a;color:#3b2a1a;border:0;border-radius:99px;padding:13px 32px;font:700 1rem system-ui;cursor:pointer}",document.head.appendChild(e);let t=document.createElement("div");t.id="pz",t.hidden=!0,t.innerHTML='<div class="c"><h2>En pausa</h2><p>Respira con calma.<br>Todo seguir\xE1 aqu\xED cuando vuelvas.</p><button type="button" id="pzGo">Continuar</button></div>';let n=()=>document.body.appendChild(t);document.body?n():addEventListener("DOMContentLoaded",n),i.set=function(s){if(s=!!s,s!==i.on&&!(s&&!i.started())){i.on=s,t.hidden=!s;try{let r=i.ctx();r&&(s?r.suspend():r.resume())}catch{}if(document.querySelectorAll("[data-pz]").forEach(r=>r.textContent=s?"Continuar":"Pausa"),s)try{document.activeElement&&document.activeElement.blur()}catch{}}},i.toggle=()=>i.set(!i.on),i.more=function(s,r,a){if(r=r.filter(Boolean),!s||!r.length)return;let o=document.createElement("style");o.textContent="#pzMore{position:fixed;z-index:25;display:flex;flex-direction:column;gap:6px;padding:8px;min-width:150px;background:rgba(43,45,82,.97);border:1px solid rgba(255,255,255,.22);border-radius:14px;box-shadow:0 10px 30px rgba(0,0,0,.4)}#pzMore[hidden]{display:none}#pzMore button{display:block;width:100%;text-align:left;background:rgba(255,255,255,.08);color:#fbf1e0;border:1px solid rgba(255,255,255,.18);border-radius:10px;padding:9px 12px;font:600 .88rem system-ui,sans-serif;cursor:pointer}",document.head.appendChild(o);let l=document.createElement("button");l.type="button",l.textContent=a||"M\xE1s",l.className=r[0].className||"",l.id="pzMoreB";let c=document.createElement("div");return c.id="pzMore",c.hidden=!0,r.forEach(h=>{h.removeAttribute("style"),c.appendChild(h)}),s.appendChild(l),document.body.appendChild(c),l.onclick=h=>{if(h.stopPropagation(),c.hidden=!c.hidden,!c.hidden){let u=l.getBoundingClientRect();c.style.top=u.bottom+6+"px",c.style.right=Math.max(8,innerWidth-u.right)+"px"}},document.addEventListener("click",h=>{!c.hidden&&!c.contains(h.target)&&h.target!==l&&(c.hidden=!0)}),addEventListener("resize",()=>{c.hidden=!0}),l},t.querySelector("#pzGo").onclick=()=>i.set(!1),document.addEventListener("keydown",s=>{s.code==="Escape"&&!document.body.classList.contains("photo")&&!document.querySelector(".xm")&&i.toggle()}),document.addEventListener("visibilitychange",()=>{document.hidden&&i.started()&&!i.on&&i.set(!0)}),document.addEventListener("click",s=>{s.target.closest&&s.target.closest("[data-pz]")&&i.toggle()})})();(function(){if(window.UX)return;let i=["es","en","ja"],e={es:"Espa\xF1ol",en:"English",ja:"\u65E5\u672C\u8A9E"},t={get(f,x){try{let b=localStorage.getItem(f);return b===null?x:b}catch{return x}},set(f,x){try{localStorage.setItem(f,x)}catch{}}},n=t.get("rio3d-lang","es");i.includes(n)||(n="es");let s=n==="en"?1:2,r=new Map,a=[],o=window.UX={lang:n,onLang:null,add(f){f.forEach(x=>r.set(x[0],x))},rx(f){f.forEach(x=>a.push(x))},tr(f){if(n==="es"||typeof f!="string")return f;let x=f.trim();if(!x)return f;let b=r.get(x);if(b)return f.replace(x,b[s]);for(let[_,S]of a){let T=x.match(_);if(T)return f.replace(x,S(T,n==="en"?1:2,o.tr))}return f},init(){if(n==="es")return;document.documentElement.lang=n;let f=x=>{if(x.nodeType===3){let S=o.tr(x.nodeValue);S!==x.nodeValue&&(x.nodeValue=S);return}if(x.nodeType!==1||x.tagName==="SCRIPT"||x.tagName==="STYLE")return;let b=x.getAttribute&&x.getAttribute("aria-label");if(b){let S=o.tr(b);S!==b&&x.setAttribute("aria-label",S)}let _=x.getAttribute&&x.getAttribute("title");if(_){let S=o.tr(_);S!==_&&x.setAttribute("title",S)}x.childNodes.forEach(f)};f(document.body),new MutationObserver(x=>{for(let b of x)b.type==="characterData"?f(b.target):b.addedNodes.forEach(f)}).observe(document.body,{childList:!0,subtree:!0,characterData:!0})},hap(f){if(t.get("rio3d-hap","1")!=="0")try{if(navigator.vibrate){navigator.vibrate(f);return}if(!o._sw){let x=document.createElement("label");x.style.cssText="position:fixed;left:-99px;top:0;opacity:0;pointer-events:none";let b=document.createElement("input");b.type="checkbox",b.setAttribute("switch",""),x.appendChild(b),document.body.appendChild(x),o._sw=x}o._sw.click()}catch{}},subsOn:()=>t.get("rio3d-subs","0")==="1",cap(f,x){if(!o.subsOn())return;let b=performance.now(),_=o._cl||(o._cl={});if(_[f]&&b-_[f]<(x||9e3))return;_[f]=b;let S=document.getElementById("uxcap");S||(S=document.createElement("div"),S.id="uxcap",S.setAttribute("aria-live","polite"),S.style.cssText="position:fixed;left:50%;top:max(58px,calc(env(safe-area-inset-top) + 50px));transform:translateX(-50%);background:rgba(20,22,48,.84);color:#fbf1e0;padding:6px 14px;border-radius:8px;font:600 .86rem system-ui,sans-serif;opacity:0;transition:opacity .4s;z-index:20;pointer-events:none;max-width:86%;text-align:center",document.body.appendChild(S)),S.textContent="["+o.tr(f)+"]",S.style.opacity=1,clearTimeout(o._ct),o._ct=setTimeout(()=>S.style.opacity=0,2600)},btns(f,x){x=x||{};let b=(z,K)=>{let V=document.createElement("button");return V.type="button",V.id=z,V.className=f||"",V.onclick=K,V},_=[],S=b("uxLang",()=>{let z=i[(i.indexOf(n)+1)%3];t.set("rio3d-lang",z);try{o.onLang&&o.onLang()}catch{}location.reload()});S.textContent=(n==="en"?"Language: ":n==="ja"?"\u8A00\u8A9E: ":"Idioma: ")+e[n],_.push(S);let T=b("uxSubs",()=>{t.set("rio3d-subs",o.subsOn()?"0":"1"),T.textContent=o.subsOn()?"Subt\xEDtulos: s\xED":"Subt\xEDtulos: no"});T.textContent=o.subsOn()?"Subt\xEDtulos: s\xED":"Subt\xEDtulos: no",_.push(T);let R=b("uxHap",()=>{let z=t.get("rio3d-hap","1")==="1";t.set("rio3d-hap",z?"0":"1"),R.textContent=z?"Vibraci\xF3n: no":"Vibraci\xF3n: s\xED",z||o.hap(15)});if(R.textContent=t.get("rio3d-hap","1")==="1"?"Vibraci\xF3n: s\xED":"Vibraci\xF3n: no",_.push(R),x.hand){let z={0:"Una mano: no",r:"Una mano: derecha",l:"Una mano: izquierda"},K=["0","r","l"],V=Pe=>{document.body.classList.remove("hand-r","hand-l"),Pe!=="0"&&document.body.classList.add("hand-"+Pe)},Y=t.get("rio3d-hand","0");z[Y]||(Y="0"),V(Y);let j=b("uxHand",()=>{Y=K[(K.indexOf(Y)+1)%3],t.set("rio3d-hand",Y),V(Y),j.textContent=z[Y]});j.textContent=z[Y],_.push(j)}let y=b("uxVol",()=>{let z=["1",".7",".4"],K=z.indexOf(String(o.api.vol()).replace("0.","."));o.api.setVol(z[(K+1)%3]),y.textContent=w()}),w=()=>l("Volumen de este juego: ","Volume (this game): ","\u3053\u306E\u30B2\u30FC\u30E0\u306E\u97F3\u91CF: ")+Math.round(o.api.vol()*100)+" %";y.textContent=w(),_.push(y);let I=b("uxSoft",()=>{o.api.setSoft(!o.api.soft()),I.textContent=D()}),D=()=>o.api.soft()?l("Tono suave: s\xED","Soft tone: on","\u3084\u308F\u3089\u304B\u3044\u97F3: \u30AA\u30F3"):l("Tono suave: no","Soft tone: off","\u3084\u308F\u3089\u304B\u3044\u97F3: \u30AA\u30D5");I.textContent=D(),_.push(I);let N=b("uxSleep",()=>{let z=[0,15,30,45];o.api.sleep(z[(z.indexOf(o.api.sleepMin())+1)%4]),N.textContent=k()}),k=()=>o.api.sleepMin()?l("Dormir: ","Sleep: ","\u304A\u3084\u3059\u307F: ")+o.api.sleepMin()+" min":l("Dormir: no","Sleep: off","\u304A\u3084\u3059\u307F: \u30AA\u30D5");if(N.textContent=k(),o._sb=()=>{N.textContent=k()},_.push(N),x.wear){let z=b("uxWear",()=>{t.set("ux-wear",t.get("ux-wear","0")==="1"?"0":"1"),z.textContent=K()}),K=()=>t.get("ux-wear","0")==="1"?l("Desgaste por ausencia: s\xED","Wear while away: on","\u4E0D\u5728\u4E2D\u306E\u6C5A\u308C: \u30AA\u30F3"):l("Desgaste por ausencia: no","Wear while away: off","\u4E0D\u5728\u4E2D\u306E\u6C5A\u308C: \u30AA\u30D5");z.textContent=K(),_.push(z)}let A=b("uxCalm",()=>{o.setCalm(!o.calm()),A.textContent=L()}),L=()=>o.calm()?l("Menos movimiento y destellos: s\xED","Less motion and flashes: on","\u52D5\u304D\u3068\u5149\u3092\u63A7\u3048\u308B: \u30AA\u30F3"):l("Menos movimiento y destellos: no","Less motion and flashes: off","\u52D5\u304D\u3068\u5149\u3092\u63A7\u3048\u308B: \u30AA\u30D5");A.textContent=L(),_.push(A);let B=b("uxAbout",()=>o.about());return B.textContent=l("Acerca de","About","\u3053\u306E\u30B2\u30FC\u30E0\u306B\u3064\u3044\u3066"),_.push(B),_},ask(f,x){let b=document.createElement("div");b.style.cssText="position:fixed;inset:0;z-index:60;display:grid;place-items:center;background:rgba(20,22,48,.6);font:15px/1.4 system-ui,sans-serif";let _=document.createElement("div");_.style.cssText="background:#2b2d52;color:#fbf1e0;border:1px solid rgba(255,255,255,.2);border-radius:16px;padding:20px 22px;max-width:min(86vw,360px);text-align:center";let S=document.createElement("p");S.style.margin="0 0 14px",S.textContent=o.tr(f),_.appendChild(S);let T=(R,y)=>{let w=document.createElement("button");return w.type="button",w.textContent=R,w.style.cssText="margin:0 6px;padding:8px 16px;border-radius:10px;border:1px solid rgba(255,255,255,.3);background:rgba(255,255,255,.1);color:inherit;font:inherit;cursor:pointer",w.onclick=()=>{b.remove(),y&&y()},w};_.appendChild(T(l("Cancelar","Cancel","\u30AD\u30E3\u30F3\u30BB\u30EB"))),_.appendChild(T(l("S\xED, reiniciar","Yes, restart","\u306F\u3044\u3001\u6700\u521D\u304B\u3089"),x)),b.appendChild(_),document.body.appendChild(b)}},l=(f,x,b)=>n==="en"?x:n==="ja"?b:f,c=(()=>{let f=location.pathname.match(/\/(cabana3d|rio3d|cabana|rio)(\/|$)/);return f?f[1]:/caba/i.test(document.title)?"cabana":"rio"})(),h="ux-vol-"+c,u={vol:t.get(h,t.get("ux-vol","1")),soft:t.get("ux-soft","0")==="1",k:1,nodes:[],end:0,min:0,ov:null};o.quiet=!1;let d=()=>{for(let f of u.nodes)try{let x=f.c.currentTime;f.lp.frequency.setTargetAtTime(u.soft?2800:22e3,x,.1),f.g.gain.setTargetAtTime(+u.vol*u.k,x,.1)}catch{}};o.out=(f,x)=>{let b=f.createBiquadFilter();b.type="lowpass",b.frequency.value=u.soft?2800:22e3,b.Q.value=.5;let _=f.createGain();return _.gain.value=+u.vol*u.k,x.connect(b),b.connect(_),_.connect(f.destination),u.nodes.push({c:f,lp:b,g:_}),_},o.pinkSrc=(f,x)=>{let b=f._pink;if(!b){let T=f.sampleRate,R=Math.floor(T*12),y=Math.floor(T*1.5),w=R+y,I=new Float32Array(w),D=0,N=0,k=0,A=0,L=0,B=0,z=0;for(let V=0;V<w;V++){let Y=Math.random()*2-1;D=.99886*D+Y*.0555179,N=.99332*N+Y*.0750759,k=.969*k+Y*.153852,A=.8665*A+Y*.3104856,L=.55*L+Y*.5329522,B=-.7616*B-Y*.016898,I[V]=(D+N+k+A+L+B+z+Y*.5362)*.2215*.5,z=Y*.115926}b=f.createBuffer(1,R,T);let K=b.getChannelData(0);for(let V=0;V<R;V++)K[V]=I[V];for(let V=0;V<y;V++){let Y=V/y*Math.PI/2;K[V]=I[V]*Math.sin(Y)+I[R+V]*Math.cos(Y)}f._pink=b}let _=f.createBufferSource();_.buffer=b,_.loop=!0;let S=f.createGain();return S.gain.value=x||1,_.connect(S),S.start=(T,R)=>_.start(T||0,R||0),S.stop=T=>_.stop(T),S},o.api={soft:()=>u.soft,setSoft(f){u.soft=!!f,t.set("ux-soft",f?"1":"0"),d()},vol:()=>+u.vol,setVol(f){u.vol=String(f),t.set(h,u.vol),d()},sleepMin:()=>u.min,sleep(f){u.min=f,u.end=f?Date.now()+f*6e4:0,u.k=1,o.quiet=!1,u.ov&&(u.ov.style.opacity=0),d()}},setInterval(()=>{if(!u.end)return;let f=(u.end-Date.now())/1e3;if(!u.ov){let x=document.createElement("div");x.style.cssText="position:fixed;inset:0;z-index:29;pointer-events:none;background:#1a0d00;opacity:0;transition:opacity 1.2s",document.body.appendChild(x),u.ov=x}if(f<=0){u.end=0,u.min=0,u.k=0,d(),u.ov.style.opacity=.6;try{window.PZ&&PZ.set(!0)}catch{}setTimeout(()=>{u.k=1,o.quiet=!1,d(),u.ov.style.opacity=0,o._sb&&o._sb()},1500);return}f<300&&(o.quiet=!0,u.k=Math.pow(f/300,2),u.ov.style.opacity=(1-f/300)*.6,d())},1e3);{let f=0,x=1200;setInterval(()=>{if(!(document.hidden||window.PZ&&(PZ.on||!PZ.started()))&&(f+=5,f>=x)){x+=1800;let b=document.getElementById("uxrest");b||(b=document.createElement("div"),b.id="uxrest",b.setAttribute("aria-live","polite"),b.style.cssText="position:fixed;left:50%;bottom:max(70px,calc(env(safe-area-inset-bottom) + 60px));transform:translateX(-50%);max-width:min(88vw,420px);text-align:center;background:rgba(20,22,48,.88);color:#fbf1e0;padding:10px 16px;border-radius:14px;font:14px/1.4 system-ui,sans-serif;z-index:28;pointer-events:none;transition:opacity .8s;opacity:0",document.body.appendChild(b)),b.textContent=l("Buen momento para soltar los hombros y tomar un poco de agua.","A good moment to relax your shoulders and have some water.","\u80A9\u306E\u529B\u3092\u629C\u3044\u3066\u3001\u6C34\u3092\u4E00\u53E3\u98F2\u3080\u306E\u306B\u3088\u3044\u9803\u5408\u3044\u3067\u3059\u3002"),b.style.opacity=1,clearTimeout(o._rt),o._rt=setTimeout(()=>b.style.opacity=0,7e3)}},5e3)}o.add([["Pausa","Pause","\u4E00\u6642\u505C\u6B62"],["Continuar","Resume","\u518D\u958B"],["M\xE1s","More","\u305D\u306E\u4ED6"],["Respirar","Breathe","\u547C\u5438"],["Sonido: s\xED","Sound: on","\u97F3: \u30AA\u30F3"],["Sonido: no","Sound: off","\u97F3: \u30AA\u30D5"],["Reiniciar","Restart","\u6700\u521D\u304B\u3089"],["En pausa","Paused","\u4E00\u6642\u505C\u6B62\u4E2D"],["Respira con calma.","Breathe calmly.","\u3086\u3063\u304F\u308A\u547C\u5438\u3057\u307E\u3057\u3087\u3046\u3002"],["Todo seguir\xE1 aqu\xED cuando vuelvas.","Everything will be here when you return.","\u623B\u3063\u3066\u304F\u308B\u307E\u3067\u3001\u3059\u3079\u3066\u305D\u306E\u307E\u307E\u3067\u3059\u3002"],["Subt\xEDtulos: s\xED","Captions: on","\u5B57\u5E55: \u30AA\u30F3"],["Subt\xEDtulos: no","Captions: off","\u5B57\u5E55: \u30AA\u30D5"],["Vibraci\xF3n: s\xED","Vibration: on","\u632F\u52D5: \u30AA\u30F3"],["Vibraci\xF3n: no","Vibration: off","\u632F\u52D5: \u30AA\u30D5"],["Una mano: no","One hand: off","\u7247\u624B: \u30AA\u30D5"],["Una mano: derecha","One hand: right","\u7247\u624B: \u53F3"],["Una mano: izquierda","One hand: left","\u7247\u624B: \u5DE6"],["Flauta shakuhachi","Shakuhachi flute","\u5C3A\u516B"],["Campanillas","Wind chimes","\u9234\u306E\u97F3"],["Koto","Koto","\u7434"],["Campana de templo","Temple bell","\u5BFA\u306E\u9418"],["Tambor lejano","Distant drum","\u9060\u304F\u306E\u592A\u9F13"],["Cuac de pato","Duck quack","\u30AB\u30E2\u306E\u9CF4\u304D\u58F0"],["Aleteo de garza","Heron wingbeats","\u30B5\u30AE\u306E\u7FBD\u3070\u305F\u304D"],["Golpe suave de la canoa","Soft knock on the canoe","\u30AB\u30CC\u30FC\u304C\u8EFD\u304F\u3076\u3064\u304B\u308B\u97F3"],["Salpicadura","Splash","\u6C34\u3057\u3076\u304D"],["Fuegos artificiales","Fireworks","\u82B1\u706B"],["Nota de linterna","Lantern note","\u30E9\u30F3\u30BF\u30F3\u306E\u97F3"],["Cascada cercana","Waterfall nearby","\u8FD1\u304F\u306E\u6EDD\u306E\u97F3"],["Lluvia suave","Soft rain","\u3084\u3055\u3057\u3044\u96E8\u97F3"],["Viento","Wind","\u98A8"],["Grillos","Crickets","\u30B3\u30AA\u30ED\u30AE"],["Fregado","Scrubbing","\u3053\u3059\u308B\u97F3"],["Madera que cruje","Creaking wood","\u304D\u3057\u3080\u6728\u306E\u97F3"],["Estrella fugaz","Shooting star","\u6D41\u308C\u661F"]]),o.add([["\u2190 Men\xFA","\u2190 Menu","\u2190 \u30E1\u30CB\u30E5\u30FC"],["\xBFC\xF3mo llegas hoy?","How are you arriving today?","\u4ECA\u65E5\u306F\u3069\u3093\u306A\u6C17\u5206\u3067\u3059\u304B\uFF1F"],["Tranquilo","Calm","\u304A\u3060\u3084\u304B"],["Cansado","Tired","\u3064\u304B\u308C\u305F"],["Inquieto","Restless","\u305D\u308F\u305D\u308F"],["Con ganas de pensar","In a thoughtful mood","\u8003\u3048\u3054\u3068\u3092\u3057\u305F\u3044"],["Es opcional. Solo ajusto el sonido o te ofrezco respirar.","Optional. I only adjust the sound or offer you a breath.","\u4EFB\u610F\u3067\u3059\u3002\u97F3\u306E\u8ABF\u6574\u3084\u6DF1\u547C\u5438\u306E\u63D0\u6848\u3060\u3051\u3092\u3057\u307E\u3059\u3002"],["Baj\xE9 el sonido y suavic\xE9 los agudos. Cuando quieras, cambia esto en \xABM\xE1s\xBB.","I lowered the sound and softened the highs. Change it any time in \u201CMore\u201D.","\u97F3\u3092\u5C0F\u3055\u304F\u3001\u9AD8\u97F3\u3092\u3084\u308F\u3089\u3052\u307E\u3057\u305F\u3002\u300C\u305D\u306E\u4ED6\u300D\u3067\u3044\u3064\u3067\u3082\u5909\u3048\u3089\u308C\u307E\u3059\u3002"],["Un minuto para respirar","One minute to breathe","1\u5206\u3060\u3051\u6DF1\u547C\u5438"],["Inhala","Breathe in","\u5438\u3063\u3066"],["Exhala","Breathe out","\u5410\u3044\u3066"],["Saltar","Skip","\u30B9\u30AD\u30C3\u30D7"],["Gracias por respirar. Entremos con calma.","Thank you for breathing. Let us go in gently.","\u6DF1\u547C\u5438\u3042\u308A\u304C\u3068\u3046\u3002\u3086\u3063\u304F\u308A\u5165\u308A\u307E\u3057\u3087\u3046\u3002"],["Sin prisa. Aqu\xED no hay nada que ganar ni perder.","No hurry. There is nothing to win or lose here.","\u6025\u304C\u306A\u304F\u3066\u5927\u4E08\u592B\u3002\u52DD\u3061\u3082\u8CA0\u3051\u3082\u3042\u308A\u307E\u305B\u3093\u3002"]]);function g(f){let x=document.createElement("div");x.style.cssText="position:fixed;inset:0;z-index:70;display:grid;place-items:center;align-content:center;gap:18px;background:rgba(20,22,48,.92);color:#fbf1e0;font:600 1.1rem system-ui;text-align:center";let b=document.createElement("div");b.style.cssText="width:110px;height:110px;border-radius:50%;background:radial-gradient(circle,#ffe9b8,#ffb86b 70%);box-shadow:0 0 50px rgba(255,200,120,.45);transform:scale(.55);transition:transform 4s ease-in-out";let _=document.createElement("div"),S=document.createElement("div");S.textContent=l("Un minuto para respirar","One minute to breathe","1\u5206\u3060\u3051\u6DF1\u547C\u5438"),S.style.cssText="font-weight:400;opacity:.75;font-size:.9rem";let T=document.createElement("button");T.type="button",T.textContent=l("Saltar","Skip","\u30B9\u30AD\u30C3\u30D7"),T.style.cssText="min-height:44px;padding:8px 18px;border-radius:99px;border:1px solid #5a609a;background:#363a66;color:#fbf1e0;font:inherit;font-size:.9rem;cursor:pointer",x.append(S,b,_,T),document.body.appendChild(x);let R=0,y=!0,w,I=N=>{y&&(y=!1,clearTimeout(w),x.remove(),f&&f(N))};T.onclick=()=>I(!1);let D=()=>{if(y){if(R>=5)return I(!0);R++,_.textContent=l("Inhala","Breathe in","\u5438\u3063\u3066"),b.style.transition="transform 4s ease-in-out",b.style.transform="scale(1)",o.hap(8),w=setTimeout(()=>{y&&(_.textContent=l("Exhala","Breathe out","\u5410\u3044\u3066"),b.style.transition="transform 6s ease-in-out",b.style.transform="scale(.55)",w=setTimeout(D,6e3))},4e3)}};D()}o.calm=()=>{let f=t.get("ux-calm",null);if(f==="1")return!0;if(f==="0")return!1;try{return!!(window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches)}catch{return!1}},o.setCalm=f=>{t.set("ux-calm",f?"1":"0")},o.about=()=>{let f=document.getElementById("uxAboutOv");if(f){f.remove();return}let x=document.createElement("div");x.id="uxAboutOv",x.setAttribute("role","dialog"),x.setAttribute("aria-modal","true"),x.style.cssText="position:fixed;inset:0;z-index:90;display:grid;place-items:center;background:rgba(14,16,36,.88);padding:12px";let b=document.createElement("div");b.style.cssText="background:#363a66;color:#fbf1e0;border:1px solid #5a609a;border-radius:16px;padding:18px 20px;max-width:min(92vw,440px);max-height:84vh;overflow:auto;font:15px/1.5 system-ui,sans-serif";let _=document.createElement("h2");_.style.cssText="margin:0 0 6px;font:600 1.2rem system-ui",_.textContent="Tomoshibi";let S=document.createElement("div");S.style.cssText="margin:0 0 10px;opacity:.7;font-size:.85em",S.textContent=l("\u3068\u3082\u3057\u3073 \xB7 Luz de l\xE1mpara \xB7 Juegos Sin Prisa","\u3068\u3082\u3057\u3073 \xB7 Lamplight \xB7 No-Rush Games","\u3068\u3082\u3057\u3073 \xB7 \u306E\u3093\u3073\u308A\u904A\u3079\u308B\u30B2\u30FC\u30E0");let T=document.createElement("p");T.style.cssText="margin:0 0 10px;opacity:.85",T.textContent=l("Juegos tranquilos, sin puntaje ni tiempo. Nada que ganar ni perder.","Calm games with no score and no timer. Nothing to win or lose.","\u30B9\u30B3\u30A2\u3082\u6642\u9593\u3082\u306A\u3044\u3001\u304A\u3060\u3084\u304B\u306A\u30B2\u30FC\u30E0\u3002\u52DD\u3061\u8CA0\u3051\u306F\u3042\u308A\u307E\u305B\u3093\u3002");let R=document.createElement("p");R.style.cssText="margin:0 0 10px;opacity:.85;font-size:.9em",R.textContent=l("Es un juego de descanso: no es un producto m\xE9dico ni de terapia y no sustituye la ayuda de un profesional.","This is a game for rest: it is not a medical or therapy product and does not replace professional help.","\u3053\u308C\u306F\u4F11\u606F\u306E\u305F\u3081\u306E\u30B2\u30FC\u30E0\u3067\u3059\u3002\u533B\u7642\u3084\u30BB\u30E9\u30D4\u30FC\u306E\u88FD\u54C1\u3067\u306F\u306A\u304F\u3001\u5C02\u9580\u5BB6\u306E\u52A9\u3051\u306E\u4EE3\u308F\u308A\u306B\u306F\u306A\u308A\u307E\u305B\u3093\u3002");let y=document.createElement("div");y.style.cssText="display:flex;flex-wrap:wrap;gap:8px;margin:6px 0 12px",[["privacidad.html",l("Privacidad","Privacy","\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC")],["datos.html",l("Mis datos","My data","\u30C7\u30FC\u30BF")],["creditos.html",l("Cr\xE9ditos y licencias","Credits and licenses","\u30AF\u30EC\u30B8\u30C3\u30C8\u3068\u30E9\u30A4\u30BB\u30F3\u30B9")]].forEach(I=>{let D=document.createElement("a");D.href="../"+I[0],D.textContent=I[1],D.style.cssText="color:#ffc77a;min-height:44px;display:inline-flex;align-items:center;padding:0 6px",y.appendChild(D)});let w=document.createElement("button");w.type="button",w.textContent=l("Cerrar","Close","\u9589\u3058\u308B"),w.style.cssText="min-height:44px;padding:8px 18px;border-radius:99px;border:1px solid #5a609a;background:#2b2d52;color:#fbf1e0;font:inherit;cursor:pointer",w.onclick=()=>x.remove(),b.append(_,S,T,R,y,w),x.appendChild(b),x.onclick=I=>{I.target===x&&x.remove()},document.body.appendChild(x);try{w.focus()}catch{}},o.say=f=>{let x=document.getElementById("uxsay");x||(x=document.createElement("div"),x.id="uxsay",x.setAttribute("role","status"),x.setAttribute("aria-live","polite"),x.style.cssText="position:fixed;left:50%;bottom:max(90px,calc(env(safe-area-inset-bottom) + 80px));transform:translateX(-50%);max-width:min(88vw,420px);background:rgba(20,22,48,.9);color:#fbf1e0;padding:10px 16px;border-radius:14px;font:500 .85rem/1.35 system-ui;text-align:center;z-index:65;pointer-events:none;transition:opacity .5s;opacity:0",document.body.appendChild(x)),x.textContent=f,x.style.opacity=1,clearTimeout(o._st),o._st=setTimeout(()=>x.style.opacity=0,4200)},o.breathe=g,o.mood=()=>M();function M(){let f=document.getElementById("go");if(!f||document.getElementById("uxmood"))return;let x=document.createElement("div");x.id="uxmood",x.style.cssText="display:flex;flex-direction:column;align-items:center;gap:8px;margin:0 0 14px";let b=document.createElement("div");b.textContent=l("\xBFC\xF3mo llegas hoy?","How are you arriving today?","\u4ECA\u65E5\u306F\u3069\u3093\u306A\u6C17\u5206\u3067\u3059\u304B\uFF1F"),b.style.cssText="font:600 .95rem system-ui;opacity:.9";let _=document.createElement("div");_.style.cssText="display:flex;flex-wrap:wrap;gap:8px;justify-content:center";let S=document.createElement("div");S.textContent=l("Es opcional. Solo ajusto el sonido o te ofrezco respirar. Es un juego de descanso, no sustituye ayuda profesional.","Optional. I only adjust the sound or offer a breath. This is a game for rest, not a substitute for professional help.","\u4EFB\u610F\u3067\u3059\u3002\u97F3\u306E\u8ABF\u6574\u3084\u6DF1\u547C\u5438\u306E\u63D0\u6848\u3060\u3051\u3092\u3057\u307E\u3059\u3002\u4F11\u606F\u306E\u305F\u3081\u306E\u30B2\u30FC\u30E0\u3067\u3001\u5C02\u9580\u5BB6\u306E\u52A9\u3051\u306E\u4EE3\u308F\u308A\u306B\u306F\u306A\u308A\u307E\u305B\u3093\u3002"),S.style.cssText="font:400 .72rem system-ui;opacity:.6";let T=null,R={};[["calm","Tranquilo","Calm","\u304A\u3060\u3084\u304B"],["tired","Cansado","Tired","\u3064\u304B\u308C\u305F"],["rest","Inquieto","Restless","\u305D\u308F\u305D\u308F"],["think","Con ganas de pensar","In a thoughtful mood","\u8003\u3048\u3054\u3068\u3092\u3057\u305F\u3044"]].forEach(([y,w,I,D])=>{let N=document.createElement("button");N.type="button",N.textContent=l(w,I,D),N.style.cssText="min-height:44px;padding:8px 14px;border-radius:99px;border:1px solid #5a609a;background:rgba(54,58,102,.7);color:#fbf1e0;font:500 .85rem system-ui;cursor:pointer",N.onclick=()=>{T=T===y?null:y;for(let k in R)R[k].style.borderColor=k===T?"#ffc77a":"#5a609a",R[k].style.background=k===T?"rgba(255,199,122,.22)":"rgba(54,58,102,.7)";o.hap(6)},R[y]=N,_.appendChild(N)}),x.append(b,_,S),f.parentNode.insertBefore(x,f),f.addEventListener("click",()=>{t.set("ux-mood",T||""),T==="tired"&&(o.api.setSoft(!0),+o.api.vol()>.7&&o.api.setVol(".7"),setTimeout(()=>{try{o.say(l("Baj\xE9 el sonido y suavic\xE9 los agudos. Cuando quieras, cambia esto en \xABM\xE1s\xBB.","I lowered the sound and softened the highs. Change it any time in \u201CMore\u201D.","\u97F3\u3092\u5C0F\u3055\u304F\u3001\u9AD8\u97F3\u3092\u3084\u308F\u3089\u3052\u307E\u3057\u305F\u3002\u300C\u305D\u306E\u4ED6\u300D\u3067\u3044\u3064\u3067\u3082\u5909\u3048\u3089\u308C\u307E\u3059\u3002"))}catch{}},900)),T==="rest"&&setTimeout(()=>g(),600),T==="think"&&setTimeout(()=>{try{o.say(l("Sin prisa. Aqu\xED no hay nada que ganar ni perder.","No hurry. There is nothing to win or lose here.","\u6025\u304C\u306A\u304F\u3066\u5927\u4E08\u592B\u3002\u52DD\u3061\u3082\u8CA0\u3051\u3082\u3042\u308A\u307E\u305B\u3093\u3002"))}catch{}},900)},!0)}let m=o.init;o.init=function(){m.apply(this,arguments);try{M()}catch{}}})();var Zb=[0,2,3,7,8],Uu=(i,e,t)=>Math.min(t,Math.max(e,i)),vn=(i,e)=>{try{window.UX&&UX.cap(i,e)}catch{}},ls=(i,e)=>73.42*Math.pow(2,(Zb[i%5]+12*(e+Math.floor(i/5)))/12),Qe={ctx:null,on:!0,init(){if(this.ctx)return;let i=this.ctx=new(window.AudioContext||window.webkitAudioContext);this.m=i.createGain(),this.m.gain.value=.8,window.UX?UX.out(i,this.m):this.m.connect(i.destination);let e=i.sampleRate*2.6,t=i.createBuffer(2,e,i.sampleRate);for(let A=0;A<2;A++){let L=t.getChannelData(A);for(let B=0;B<e;B++)L[B]=(Math.random()*2-1)*Math.pow(1-B/e,2.4)}this.rv=i.createConvolver(),this.rv.buffer=t;let n=i.createGain();n.gain.value=.7,this.rv.connect(n),n.connect(this.m);let s=i.createBuffer(1,i.sampleRate*3,i.sampleRate),r=s.getChannelData(0);for(let A=0;A<r.length;A++)r[A]=Math.random()*2-1;this.nb=s;let a=A=>{if(A&&window.UX&&UX.pinkSrc){let B=UX.pinkSrc(i,A);return B.start(0,Math.random()*6),B}let L=i.createBufferSource();return L.buffer=s,L.loop=!0,L.start(0,Math.random()*2),L},o=a(.81),l=i.createBiquadFilter();l.type="bandpass",l.frequency.value=520,l.Q.value=.5,this.wg=i.createGain(),this.wg.gain.value=.03,o.connect(l),l.connect(this.wg),this.wg.connect(this.m);let c=a(1.46),h=i.createBiquadFilter();h.type="bandpass",h.frequency.value=2200,h.Q.value=1.2,this.wg2=i.createGain(),this.wg2.gain.value=.008,c.connect(h),h.connect(this.wg2),this.wg2.connect(this.m);let u=a(.9),d=i.createBiquadFilter();d.type="lowpass",d.frequency.value=240,d.Q.value=.4;let p=a(1.2),g=i.createBiquadFilter();g.type="bandpass",g.frequency.value=680,g.Q.value=.7,this.cityG=i.createGain(),this.cityG.gain.value=.026,u.connect(d),d.connect(this.cityG);let M=i.createGain();M.gain.value=.3,p.connect(g),g.connect(M),M.connect(this.cityG),this.cityG.connect(this.m);let m=i.createOscillator(),f=i.createGain();m.frequency.value=.045,f.gain.value=.005,m.connect(f),f.connect(this.cityG.gain),m.start(),this.dg=i.createGain(),this.dg.gain.value=.07,this.dg.connect(this.m),this.dg.connect(this.rv),[1,1.5,2].forEach((A,L)=>{let B=i.createOscillator();B.type="sine",B.frequency.value=73.42*A*(L===2?1.003:1);let z=i.createGain();z.gain.value=L===1?.5:.7,B.connect(z),z.connect(this.dg),B.start()});let x=i.createOscillator(),b=i.createGain();x.frequency.value=.07,b.gain.value=.02,x.connect(b),b.connect(this.dg.gain),x.start();let _=a(1.6),S=i.createBiquadFilter();S.type="bandpass",S.frequency.value=2600,S.Q.value=.8,this.sg=i.createGain(),this.sg.gain.value=0,_.connect(S),S.connect(this.sg),this.sg.connect(this.m),this.sf=S;let T=a(2.69),R=i.createBiquadFilter();R.type="highpass",R.frequency.value=1800,this.rg=i.createGain(),this.rg.gain.value=0,T.connect(R),R.connect(this.rg),this.rg.connect(this.m);let y=a(.71),w=i.createBiquadFilter();w.type="bandpass",w.frequency.value=420,w.Q.value=.6,this.wdg=i.createGain(),this.wdg.gain.value=.012;let I=i.createOscillator(),D=i.createGain();I.frequency.value=.09,D.gain.value=.009,I.connect(D),D.connect(this.wdg.gain),I.start();let N=i.createOscillator(),k=i.createGain();N.frequency.value=.023,k.gain.value=180,N.connect(k),k.connect(w.frequency),N.start(),y.connect(w),w.connect(this.wdg),this.wdg.connect(this.m),this.nextFlute=i.currentTime+6,this.nextKey=i.currentTime+4,this.initPad()},initPad(){let i=this.ctx,e=i.createBiquadFilter();e.type="lowpass",e.frequency.value=500,e.Q.value=.4;let t=i.createGain();t.gain.value=0,e.connect(t),t.connect(this.m);let n=i.createGain();n.gain.value=.5,t.connect(n),n.connect(this.rv);let s=[];for(let r=0;r<4;r++){let a=i.createOscillator(),o=i.createOscillator(),l=i.createGain(),c=i.createGain(),h=i.createOscillator(),u=i.createGain();a.type="sine",o.type="triangle",o.detune.value=r%2?7:-7,l.gain.value=.5,c.gain.value=.18,h.frequency.value=.04+r*.017,u.gain.value=.25,h.connect(u),u.connect(l.gain),a.connect(l),o.connect(c),l.connect(e),c.connect(e),a.start(),o.start(),h.start(),s.push([a,o])}this.pad={f:e,pg:t,vs:s,ch:0},this.mood={prog:0,night:1},this.padChord(!0),this.nextChord=i.currentTime+15,this.padFilter()},setMood(i,e){this.mood={prog:Uu(i,0,1),night:e==null?1:e},this.pad&&this.ctx&&this.padFilter()},padFilter(){let i=this.mood,e=this.ctx.currentTime,t=i.prog*(1-.35*i.night);this.pad.f.frequency.setTargetAtTime(640+t*1300,e,2.5),this.pad.pg.gain.setTargetAtTime(.078*(1+.15*(1-i.night)),e,2)},padChord(i){let e=this.ctx,t=this.pad,n=e.currentTime,s=146.83,r=this.mood.prog,a=[[-12,-5,0,7],[-12,-4,3,7],[-12,0,7,12],[-12,-5,3,7]],o=[[-12,0,7,15],[-4,3,7,12],[0,7,12,15],[-4,0,7,15]],l=[[0,7,14,19],[0,7,12,15],[-4,3,7,12],[0,7,12,19]],c=r<.5?o:l;t.ch=(t.ch+1+(Math.random()<.3?1:0))%c.length;let h=c[t.ch];t.vs.forEach(([u,d],p)=>{let g=s*Math.pow(2,h[p]/12);u.frequency.setTargetAtTime(g,n,i?.01:3.2),d.frequency.setTargetAtTime(g*1.002,n,i?.01:3.2)}),this.padFilter()},scrub(i){this.ctx&&(i>.2&&this.on&&vn("Fregado"),this.sg.gain.setTargetAtTime(Math.min(.12,i*.12),this.ctx.currentTime,.05),this.sf.frequency.setTargetAtTime(1800+i*1800,this.ctx.currentTime,.1))},rain(i){this.ctx&&i&&this.on&&vn("Lluvia en el techo",4e4),this.ctx&&this.rg.gain.setTargetAtTime(i?.035:0,this.ctx.currentTime,1.2)},chime(i,e){if(!this.ctx||!this.on)return;vn("Campanita",2500);let t=this.ctx.currentTime;[0,2,4].forEach((n,s)=>this.pluck(ls((e||0)+n+5,2),t+s*.15,.09,i))},breathTone(i,e){let t=this.ctx;if(!t||t.state!=="running"||!this.on)return;let n=t.currentTime;[[1,.05],[1.5,.022]].forEach(([s,r])=>{let a=t.createOscillator(),o=t.createGain();a.type="sine",a.frequency.setValueAtTime((i?196:262)*s,n),a.frequency.linearRampToValueAtTime((i?262:196)*s,n+e),i?(o.gain.setValueAtTime(0,n),o.gain.linearRampToValueAtTime(r,n+e)):(o.gain.setValueAtTime(r,n),o.gain.linearRampToValueAtTime(0,n+e)),a.connect(o),o.connect(this.m),a.start(n),a.stop(n+e+.1)})},resume(){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()},setOn(i){this.on=i,this.m&&this.m.gain.setTargetAtTime(i?.8:0,this.ctx.currentTime,.2)},update(i,e,t){let n=1-e;if(!this.ctx)return;let s=this.ctx.currentTime;if(s>this.nextChord&&(this.nextChord=s+14+Math.random()*3,this.on&&this.padChord()),this.nextAmb||(this.nextAmb=s+6),this.on&&s>this.nextAmb){this.nextAmb=s+18+Math.random()*10;let r=["Viento","Ciudad a lo lejos","Murmullo de agua"][this.ambI=((this.ambI||0)+1)%3];vn(r,3e4)}this.wg.gain.setTargetAtTime(.028+Math.min(i,7)*.007,s,.3),this.wg2.gain.setTargetAtTime(.006+Math.min(i,7)*.0016,s,.3),this.nextFrog||(this.nextFrog=s+4),this.on&&s>this.nextFrog&&(this.nextFrog=s+2.5+Math.random()*(n?9:5),this.frog(Math.random()*1.6-.8,n)),this.nextBell||(this.nextBell=s+14),this.on&&s>this.nextBell&&(this.nextBell=s+30+Math.random()*35,this.bell()),s>this.nextFlute&&(this.nextFlute=s+16+Math.random()*16,this.phrase()),this.on&&this.cityStep(s)},key(i,e,t,n,s){let r=this.ctx,a=t,[o]=this.pan(s||0),l=ls(i,e);[[1,1,2.8],[2,.16,1.6],[3.01,.05,.9]].forEach(([c,h,u])=>{let d=r.createOscillator(),p=r.createGain();d.type=c===1?"triangle":"sine",d.frequency.value=l*c,p.gain.setValueAtTime(0,a),p.gain.linearRampToValueAtTime(n*h,a+.03),p.gain.exponentialRampToValueAtTime(1e-4,a+u),d.connect(p),p.connect(o),p.connect(this.rv),d.start(a),d.stop(a+u+.1)})},motif(){let i=this.ctx.currentTime+.1,e=2+(Math.random()*3|0),t=this.kd==null?5+(Math.random()*5|0):this.kd,n=i;for(let s=0;s<e;s++)t=Uu(t+(Math.random()*5|0)-2,3,11),this.key(t,1+(t>=10?0:1),n,.05,Math.random()*.8-.4),n+=.55+Math.random()*.7;this.kd=t},cityStep(i){this.nCar||(this.nCar=i+7,this.nTrain=i+40,this.nDog=i+55,this.nTram=i+30,this.nCrk=i+2),i>this.nextKey&&(this.nextKey=i+4.5+Math.random()*6,this.motif()),i>this.nCar&&(this.nCar=i+9+Math.random()*14,this.car()),i>this.nTrain&&(this.nTrain=i+75+Math.random()*60,this.train()),i>this.nDog&&(this.nDog=i+45+Math.random()*60,this.dog()),i>this.nTram&&(this.nTram=i+60+Math.random()*60,this.tram());let e=Uu((this.mood.prog-.2)/.5,0,1);e>0&&i>this.nCrk&&(this.nCrk=i+.12+Math.random()*(1.1-.6*e),this.crackle(e))},car(){let i=this.ctx,e=i.currentTime+.05,t=4+Math.random()*3,n=Math.random()<.5?-1:1;vn("Autos a lo lejos",2e4);let s=i.createBufferSource();s.buffer=this.nb,s.loop=!0;let r=i.createBiquadFilter();r.type="bandpass",r.Q.value=1.1,r.frequency.setValueAtTime(380,e),r.frequency.linearRampToValueAtTime(950,e+t*.45),r.frequency.linearRampToValueAtTime(340,e+t);let a=i.createGain(),o=.03*(.6+Math.random()*.6);a.gain.setValueAtTime(0,e),a.gain.linearRampToValueAtTime(o,e+t*.45),a.gain.linearRampToValueAtTime(0,e+t);let l=i.createStereoPanner();l.pan.setValueAtTime(-n*.9,e),l.pan.linearRampToValueAtTime(n*.9,e+t),s.connect(r),r.connect(a),a.connect(l),l.connect(this.m),a.connect(this.rv),s.start(e,Math.random()*2),s.stop(e+t+.1)},train(){let i=this.ctx,e=i.currentTime+.1,t=12,n=Math.random()<.5?-1:1,s=34;vn("Tren a lo lejos",6e4);let r=i.createStereoPanner();r.pan.setValueAtTime(-n*.85,e),r.pan.linearRampToValueAtTime(n*.85,e+t),r.connect(this.m),[261.6,311.1].forEach(a=>{let o=i.createOscillator(),l=i.createGain(),c=i.createBiquadFilter();o.type="triangle",o.frequency.value=a,c.type="lowpass",c.frequency.value=900,l.gain.setValueAtTime(0,e),l.gain.linearRampToValueAtTime(.018,e+.25),l.gain.setTargetAtTime(0,e+1.3,.35),o.connect(c),c.connect(l),l.connect(r),l.connect(this.rv),o.start(e),o.stop(e+3.2)});for(let a=0;a<s;a++){let o=a/s,l=.035*Math.pow(Math.sin(Math.PI*(.04+.92*o)),1.4);[0,.1].forEach((c,h)=>{let u=e+.6+a*.3+c,d=i.createBufferSource();d.buffer=this.nb;let p=i.createBiquadFilter();p.type="bandpass",p.frequency.value=h?650:900,p.Q.value=.9;let g=i.createGain();g.gain.setValueAtTime(0,u),g.gain.linearRampToValueAtTime(l*(h?.7:1),u+.004),g.gain.exponentialRampToValueAtTime(1e-4,u+.07),d.connect(p),p.connect(g),g.connect(r),d.start(u,Math.random()*2),d.stop(u+.1)})}{let a=i.createBufferSource();a.buffer=this.nb,a.loop=!0;let o=i.createBiquadFilter();o.type="lowpass",o.frequency.value=170;let l=i.createGain();l.gain.setValueAtTime(0,e),l.gain.linearRampToValueAtTime(.05,e+t*.5),l.gain.linearRampToValueAtTime(0,e+t),a.connect(o),o.connect(l),l.connect(r),a.start(e,Math.random()*2),a.stop(e+t+.1)}},dog(){let i=this.ctx,e=i.currentTime+.1,[t]=this.pan(Math.random()*1.4-.7),n=2+(Math.random()*2|0);vn("Perro a lo lejos",4e4);for(let s=0;s<n;s++){let r=e+s*(.42+Math.random()*.12),a=i.createOscillator(),o=i.createBiquadFilter(),l=i.createBiquadFilter(),c=i.createGain();a.type="sawtooth",a.frequency.setValueAtTime(330,r),a.frequency.exponentialRampToValueAtTime(210,r+.14),o.type="bandpass",o.frequency.value=800,o.Q.value=2.4,l.type="lowpass",l.frequency.value=1500,c.gain.setValueAtTime(0,r),c.gain.linearRampToValueAtTime(.02,r+.015),c.gain.exponentialRampToValueAtTime(1e-4,r+.17),a.connect(o),o.connect(l),l.connect(c),c.connect(t),c.connect(this.rv),a.start(r),a.stop(r+.2)}},tram(){let i=this.ctx,e=i.currentTime+.1,[t]=this.pan(Math.random()*1.2-.6);vn("Tranv\xEDa a lo lejos",6e4),[0,.34].forEach(n=>[[1760,1,1.1],[2637,.3,.6]].forEach(([s,r,a])=>{let o=i.createOscillator(),l=i.createGain(),c=e+n;o.type="sine",o.frequency.value=s,l.gain.setValueAtTime(0,c),l.gain.linearRampToValueAtTime(.012*r,c+.004),l.gain.exponentialRampToValueAtTime(1e-4,c+a),o.connect(l),l.connect(t),l.connect(this.rv),o.start(c),o.stop(c+a+.1)}))},crackle(i){let e=this.ctx,t=e.currentTime,[n]=this.pan(-.35+Math.random()*.2);i>.3&&vn("Crepitar del fuego",3e4);let s=1+(Math.random()*3|0);for(let r=0;r<s;r++){let a=t+Math.random()*.2,o=e.createBufferSource();o.buffer=this.nb;let l=e.createBiquadFilter();l.type="bandpass",l.frequency.value=1400+Math.random()*3200,l.Q.value=1.4;let c=e.createGain(),h=(.01+Math.random()*.03)*i;c.gain.setValueAtTime(0,a),c.gain.linearRampToValueAtTime(h,a+.002),c.gain.exponentialRampToValueAtTime(1e-4,a+.02+Math.random()*.05),o.connect(l),l.connect(c),c.connect(n),o.start(a,Math.random()*2),o.stop(a+.12)}},pan(i){let e=this.ctx.createStereoPanner();e.pan.value=Math.max(-1,Math.min(1,i)),e.connect(this.m);let t=this.ctx.createGain();return t.gain.value=.55,t.connect(this.rv),[e]},pluck(i,e,t,n){let s=this.ctx,r=e,[a]=this.pan(n||0);[[1,1],[2.76,.28],[5.4,.1]].forEach(([o,l],c)=>{let h=s.createOscillator();h.type="sine",h.frequency.value=i*o;let u=s.createGain();u.gain.setValueAtTime(0,r),u.gain.linearRampToValueAtTime(t*l,r+.008),u.gain.exponentialRampToValueAtTime(1e-4,r+2.6/(1+c*.6)),h.connect(u),u.connect(a),u.connect(this.rv),h.start(r),h.stop(r+3)})},lantern(i){if(!this.ctx||!this.on)return;let e=this.ctx.currentTime;vn("Nota de linterna");let t=Math.floor(Math.random()*5);this.pluck(ls(t+5,2),e,.1,i),this.pluck(ls(t+7,2),e+.16,.07,i)},flute(i,e,t,n,s){let r=this.ctx,a=ls(i,e),o=t,l=r.createOscillator();l.type="sine",l.frequency.value=a;let c=r.createOscillator(),h=r.createGain();c.frequency.value=4.6,h.gain.value=a*.007,c.connect(h),h.connect(l.frequency);let u=r.createBufferSource();u.buffer=this.nb,u.loop=!0;let d=r.createBiquadFilter();d.type="bandpass",d.frequency.value=a*2,d.Q.value=4;let p=r.createGain();p.gain.value=s*.5;let g=r.createGain();g.gain.setValueAtTime(0,o),g.gain.linearRampToValueAtTime(s,o+.35),g.gain.setTargetAtTime(0,o+n,.5),l.connect(g),u.connect(d),d.connect(p),p.connect(g),g.connect(this.m),g.connect(this.rv),l.start(o),c.start(o),u.start(o),l.stop(o+n+2.5),c.stop(o+n+2.5),u.stop(o+n+2.5)},phrase(){if(!this.on)return;vn("Flauta shakuhachi");let e=this.ctx.currentTime+.2;[[0,2,2.6],[2,2,1.8],[1,2,1.6],[4,1,3.4]].slice(0,2+Math.floor(Math.random()*3)).forEach(([n,s,r])=>{this.flute(n,s+1,e,r,.05),e+=r*.9})},frog(i,e){vn("Croar de ranas",14e3);let t=this.ctx,n=t.currentTime+.05,[s]=this.pan(i),r=Math.random()<.4,a=r?210+Math.random()*40:340+Math.random()*80,o=1+(Math.random()*3|0);for(let l=0;l<o;l++){let c=n+l*(r?.26:.17),h=t.createOscillator(),u=t.createGain(),d=t.createBiquadFilter();h.type="triangle",h.frequency.setValueAtTime(a,c),h.frequency.exponentialRampToValueAtTime(a*1.35,c+.06),h.frequency.exponentialRampToValueAtTime(a*.85,c+.14),d.type="bandpass",d.frequency.value=a*2,d.Q.value=2,u.gain.setValueAtTime(0,c),u.gain.linearRampToValueAtTime((e?.012:.02)*(r?1.2:.8),c+.03),u.gain.exponentialRampToValueAtTime(1e-4,c+.16),h.connect(d),d.connect(u),u.connect(s),u.connect(this.rv),h.start(c),h.stop(c+.2)}},bell(){vn("Campana de templo");let i=this.ctx,e=i.currentTime+.1,[t]=this.pan(Math.random()*1.2-.6),n=ls(Math.floor(Math.random()*3),0)*2;[[1,1,7],[2.01,.35,5],[2.76,.28,4],[4.07,.12,2.5],[5.4,.08,2]].forEach(([s,r,a])=>{let o=i.createOscillator(),l=i.createGain();o.type="sine",o.frequency.value=n*s,l.gain.setValueAtTime(0,e),l.gain.linearRampToValueAtTime(.022*r,e+.01),l.gain.exponentialRampToValueAtTime(1e-4,e+a),o.connect(l),l.connect(t),l.connect(this.rv),o.start(e),o.stop(e+a+.1)})},paddle(i){if(!this.ctx||!this.on)return;let e=this.ctx,t=e.currentTime,[n]=this.pan(i*.7),s=e.createBufferSource();s.buffer=this.nb;let r=e.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(1400,t),r.frequency.exponentialRampToValueAtTime(300,t+.5);let a=e.createGain();a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(.09,t+.05),a.gain.exponentialRampToValueAtTime(1e-4,t+.6),s.connect(r),r.connect(a),a.connect(n),s.start(t,Math.random()*2),s.stop(t+.7)},plop(i){if(!this.ctx||!this.on)return;let e=this.ctx,t=e.currentTime,n=e.createOscillator(),s=e.createGain(),r=e.createStereoPanner?e.createStereoPanner():null;n.type="sine",n.frequency.setValueAtTime(520,t),n.frequency.exponentialRampToValueAtTime(190,t+.12),s.gain.setValueAtTime(1e-4,t),s.gain.linearRampToValueAtTime(.05,t+.01),s.gain.exponentialRampToValueAtTime(1e-4,t+.22),n.connect(s),r?(r.pan.value=Math.max(-1,Math.min(1,i||0)),s.connect(r),r.connect(this.m)):s.connect(this.m),n.start(t),n.stop(t+.25)},meow(){if(!this.ctx||!this.on)return;vn("Maullido suave",4e3);let i=this.ctx,e=i.currentTime,t=i.createOscillator(),n=i.createBiquadFilter(),s=i.createGain();t.type="triangle",t.frequency.setValueAtTime(520,e),t.frequency.linearRampToValueAtTime(820,e+.14),t.frequency.linearRampToValueAtTime(480,e+.42),n.type="bandpass",n.frequency.value=1500,n.Q.value=1.2,s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(.035,e+.07),s.gain.exponentialRampToValueAtTime(1e-4,e+.5),t.connect(n),n.connect(s),s.connect(this.m),s.connect(this.rv),t.start(e),t.stop(e+.55)},creak(){if(!this.ctx||!this.on)return;vn("Madera que cruje",4e3);let i=this.ctx,e=i.currentTime,t=i.createOscillator(),n=i.createBiquadFilter(),s=i.createGain();t.type="sawtooth",t.frequency.setValueAtTime(95,e),t.frequency.exponentialRampToValueAtTime(150,e+.18),t.frequency.exponentialRampToValueAtTime(70,e+.4),n.type="lowpass",n.frequency.value=420,s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(.03,e+.06),s.gain.exponentialRampToValueAtTime(1e-4,e+.45),t.connect(n),n.connect(s),s.connect(this.m),t.start(e),t.stop(e+.5)},sparkle(){if(!this.ctx||!this.on)return;let i=this.ctx.currentTime;this.pluck(ls(4,4),i,.035,.4),this.pluck(ls(7,4),i+.12,.025,.4)},bump(){if(!this.ctx||!this.on)return;let i=this.ctx,e=i.currentTime,t=i.createOscillator(),n=i.createGain();t.type="sine",t.frequency.setValueAtTime(110,e),t.frequency.exponentialRampToValueAtTime(48,e+.35),n.gain.setValueAtTime(.18,e),n.gain.exponentialRampToValueAtTime(1e-4,e+.45),t.connect(n),n.connect(this.m),t.start(e),t.stop(e+.5)}};function Jb(i){let e=i>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Xp={},qp={wood:.7,woodV:.7,stone:.55,shingle:.6,rock:.22,grass:.12,bark:.9,sand:.2,leaf:.25,needle:.3,cloth:1.2,straw:1,plank:.8};function $b(i){let t=document.createElement("canvas");t.width=t.height=256;let n=t.getContext("2d"),s=Jb(i.length*97+i.charCodeAt(0)),r=(o,l)=>`rgba(${o},${o},${o},${l})`;if(n.fillStyle="#e9e4de",n.fillRect(0,0,256,256),i==="wood"||i==="woodV"){let o=i==="woodV";for(let l=0;l<150;l++){let c=s()*256,h=40+s()*160,u=s()*256,d=.6+s()*1.8;n.strokeStyle=s()>.5?"rgba(95,70,55,"+(.05+s()*.12)+")":"rgba(255,248,238,"+(.05+s()*.1)+")",n.lineWidth=d,n.beginPath(),o?(n.moveTo(c,u),n.bezierCurveTo(c+4,u+h*.3,c-4,u+h*.7,c+2,u+h)):(n.moveTo(u,c),n.bezierCurveTo(u+h*.3,c+4,u+h*.7,c-4,u+h,c+2)),n.stroke()}for(let l=0;l<3;l++){let c=s()*256,h=s()*256;n.strokeStyle="rgba(80,55,40,.22)",n.lineWidth=1.2;for(let u=1;u<4;u++)n.beginPath(),n.ellipse(c,h,u*3.5,u*2.2,o?1.57:0,0,7),n.stroke()}n.strokeStyle="rgba(70,50,40,.18)",n.lineWidth=2,n.beginPath(),o?(n.moveTo(0,0),n.lineTo(0,256)):(n.moveTo(0,0),n.lineTo(256,0)),n.stroke()}else if(i==="stone"){n.fillStyle="#8b86a0",n.fillRect(0,0,256,256);let o=4;for(let l=0;l<o;l++){let c=-(s()*40),h=256/o;for(;c<256;){let u=38+s()*50,d=190+s()*55|0;n.fillStyle=`rgb(${d},${d-3},${d+8})`,n.beginPath(),n.roundRect?n.roundRect(c+3,l*h+3,u-6,h-6,10):n.rect(c+3,l*h+3,u-6,h-6),n.fill(),n.fillStyle="rgba(255,255,255,.18)",n.fillRect(c+9,l*h+7,u-24,3);for(let p=0;p<14;p++)n.fillStyle=r(120,.08),n.fillRect(c+6+s()*(u-12),l*h+6+s()*(h-12),2,2);c+=u}}}else if(i==="shingle"){n.fillStyle="#b8aea6",n.fillRect(0,0,256,256);let o=6,l=256/o;for(let c=0;c<o;c++){let h=c%2*22;for(let u=-22;u<278;u+=44){let d=196+s()*50|0;n.fillStyle=`rgb(${d},${d-6},${d-8})`,n.beginPath(),n.moveTo(u+h+2,c*l),n.lineTo(u+h+42,c*l),n.lineTo(u+h+42,c*l+l*.55),n.quadraticCurveTo(u+h+22,c*l+l*1.15,u+h+2,c*l+l*.55),n.closePath(),n.fill(),n.strokeStyle="rgba(60,40,40,.28)",n.lineWidth=1.5,n.stroke(),n.fillStyle="rgba(255,255,255,.2)",n.fillRect(u+h+8,c*l+3,26,3)}}}else if(i==="rock"){n.fillStyle="#d4d0dc",n.fillRect(0,0,256,256);for(let o=0;o<60;o++){let l=s()*256,c=s()*256,h=10+s()*40,u=170+s()*70|0;n.fillStyle=`rgba(${u},${u-4},${u+10},.35)`,n.beginPath(),n.ellipse(l,c,h,h*.6,s()*3,0,7),n.fill()}for(let o=0;o<30;o++){n.strokeStyle="rgba(50,45,80,"+(.12+s()*.2)+")",n.lineWidth=1+s()*2,n.beginPath();let l=s()*256,c=s()*256;n.moveTo(l,c);for(let h=0;h<4;h++)l+=s()*40-20,c+=s()*30,n.lineTo(l,c);n.stroke()}}else if(i==="grass"){n.fillStyle="#e8efe0",n.fillRect(0,0,256,256);for(let o=0;o<900;o++){let l=s()*256,c=s()*256,h=s()>.5?"rgba(120,170,110,":"rgba(255,255,220,";n.strokeStyle=h+(.08+s()*.2)+")",n.lineWidth=1,n.beginPath(),n.moveTo(l,c),n.lineTo(l+s()*4-2,c-3-s()*7),n.stroke()}for(let o=0;o<20;o++)n.fillStyle="rgba(255,255,255,.3)",n.beginPath(),n.arc(s()*256,s()*256,1.5+s()*1.5,0,7),n.fill()}else if(i==="bark"){n.fillStyle="#d9cfc6",n.fillRect(0,0,256,256);for(let o=0;o<70;o++){let l=s()*256;n.strokeStyle="rgba(60,45,40,"+(.12+s()*.25)+")",n.lineWidth=1+s()*3,n.beginPath(),n.moveTo(l,0),n.bezierCurveTo(l+8,256*.3,l-8,256*.6,l+3,256),n.stroke()}}else if(i==="leaf"){n.fillStyle="#ecebe4",n.fillRect(0,0,256,256);for(let o=0;o<640;o++){let l=s()*256,c=s()*256,h=3.5+s()*8,u=s()>.45?215+s()*40|0:120+s()*60|0;for(let d of[-256,0,256])for(let p of[-256,0,256])l+d<-30||l+d>286||c+p<-30||c+p>286||(n.fillStyle=`rgba(${u},${u},${u-6},${.35+s()*.4})`,n.beginPath(),n.ellipse(l+d,c+p,h,h*.62,s()*3.14,0,7),n.fill())}for(let o=0;o<260;o++){let l=s()*256,c=s()*256;n.fillStyle="rgba(70,80,60,.3)",n.beginPath(),n.ellipse(l,c+5,5,2.4,0,0,7),n.fill(),n.fillStyle="rgba(255,255,235,.5)",n.beginPath(),n.ellipse(l-1,c-2,3.6,1.5,-.5,0,7),n.fill()}}else if(i==="cloth"){n.fillStyle="#e6e6e8",n.fillRect(0,0,256,256);for(let o=0;o<256;o+=4)n.fillStyle="rgba(90,95,110,"+(.07+s()*.06)+")",n.fillRect(o,0,1.6,256),n.fillStyle="rgba(255,255,255,"+(.1+s()*.08)+")",n.fillRect(0,o,256,1.6);for(let o=0;o<9;o++){let l=s()*256,c=s()*256;n.strokeStyle="rgba(60,65,85,.2)",n.lineWidth=2.5,n.beginPath(),n.moveTo(l,c),n.bezierCurveTo(l+20,c+30,l-18,c+60,l+6,c+95),n.stroke(),n.strokeStyle="rgba(255,255,255,.22)",n.lineWidth=2,n.beginPath(),n.moveTo(l+4,c),n.bezierCurveTo(l+24,c+30,l-14,c+60,l+10,c+95),n.stroke()}for(let o=0;o<5;o++)n.fillStyle="rgba(70,75,95,.25)",n.fillRect(s()*256,s()*256,10+s()*10,1.5)}else if(i==="straw"){n.fillStyle="#e8e0cc",n.fillRect(0,0,256,256);for(let o=-256;o<256*2;o+=7)n.strokeStyle="rgba(120,90,40,"+(.18+s()*.2)+")",n.lineWidth=2,n.beginPath(),n.moveTo(o,0),n.lineTo(o+256,256),n.stroke(),n.strokeStyle="rgba(255,250,225,"+(.25+s()*.2)+")",n.beginPath(),n.moveTo(o+3,0),n.lineTo(o+3-256,256),n.stroke();for(let o=0;o<256;o+=7)n.strokeStyle="rgba(110,80,35,.22)",n.lineWidth=1.5,n.beginPath(),n.moveTo(o,0),n.lineTo(o,256),n.stroke()}else if(i==="plank"){n.fillStyle="#e9e0d6",n.fillRect(0,0,256,256);let o=5,l=256/o;for(let c=0;c<o;c++){let h=c*l;n.fillStyle="rgba("+(200+s()*40|0)+","+(190+s()*30|0)+",175,.45)",n.fillRect(0,h,256,l);for(let u=0;u<22;u++){let d=h+3+s()*(l-6);n.strokeStyle=s()>.5?"rgba(95,70,55,"+(.1+s()*.14)+")":"rgba(255,248,238,.18)",n.lineWidth=.8+s()*1.5,n.beginPath(),n.moveTo(s()*60,d),n.bezierCurveTo(80,d+3,160,d-3,256,d+1),n.stroke()}n.fillStyle="rgba(60,42,32,.55)",n.fillRect(0,h,256,2.5);for(let u of[18,238])n.fillStyle="rgba(50,40,36,.55)",n.beginPath(),n.arc(u,h+l/2,2.2,0,7),n.fill()}}else if(i==="needle"){n.fillStyle="#d7dbd2",n.fillRect(0,0,256,256);for(let o=0;o<8;o++){let l=o*256/8;for(let c=-10;c<266;c+=14){let h=c+o%2*7+s()*3,u=18+s()*10,d=s()>.5?235:130+s()*50|0;n.strokeStyle=`rgba(${d},${d},${d-10},${.45+s()*.4})`,n.lineWidth=2+s()*2,n.lineCap="round",n.beginPath(),n.moveTo(h,l),n.lineTo(h+s()*8-4,l+u),n.stroke()}n.strokeStyle="rgba(50,70,50,.3)",n.lineWidth=3,n.beginPath(),n.moveTo(0,l+256/8-2),n.lineTo(256,l+256/8-2),n.stroke()}}let a=new Pi(t);return a.wrapS=a.wrapT=Ki,a.colorSpace=xn,a.anisotropy=8,a}var Nu=i=>Xp[i]||(Xp[i]=$b(i)),Fu=(()=>{let i=new Uint8Array([104,138,172,206,236,255]),e=new ys(i,6,1,Er);return e.minFilter=e.magFilter=Jt,e.generateMipmaps=!1,e.needsUpdate=!0,e})();function Yp(i,e,t,n,s){let r=i.attributes.uv,a=[[n,t],[n,t],[e,n],[e,n],[e,t],[e,t]];for(let o=0;o<6;o++)for(let l=0;l<4;l++){let c=o*4+l;r.setXY(c,r.getX(c)*a[o][0]*s,r.getY(c)*a[o][1]*s)}r.needsUpdate=!0}function Zp(i,e,t){let n=Object.assign({color:i,gradientMap:Fu},t||{});e&&(n.map=Nu(e));let s=new Ss(n);return s.userData.kind=e||null,s}function Jp(){let i=document.createElement("div");i.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:4;background:radial-gradient(ellipse at 50% 45%,rgba(0,0,0,0) 55%,rgba(24,20,56,.5) 100%)",document.body.appendChild(i)}var xt=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),Ou=(i,e,t)=>i+(e-i)*t,gt=i=>document.getElementById(i);function $t(i){let e=i>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var ce=4.2,Ga=(i,e)=>{i._t!==e&&(i._t=e,i.textContent=e)},Mc=(i,e,t)=>{let n=document.createElement("canvas");return n.width=i,n.height=e,t(n.getContext("2d"),i,e),new Pi(n)},Nt,Ps;function $p(){Nt=Mc(128,128,i=>{let e=i.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.5)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,128,128)}),Ps=Mc(128,128,i=>{for(let e=0;e<9;e++){let t=40+Math.random()*48,n=44+Math.random()*40,s=18+Math.random()*18,r=i.createRadialGradient(t,n,0,t,n,s);r.addColorStop(0,"rgba(255,255,255,.5)"),r.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=r,i.fillRect(0,0,128,128)}})}var Rt=(i,e,t,n,s)=>{let r=new la(new fr({map:i,color:e,transparent:!0,opacity:n==null?1:n,depthWrite:!1,blending:s?Ui:is}));return r.scale.set(t,t,1),r};var it={started:!1,rainOn:!1,T:0},Ht={},Sc=[],Gn=gt("c"),Nn=new _c({canvas:Gn,antialias:!0,powerPreference:"high-performance"});Nn.setPixelRatio(Math.min(devicePixelRatio||1,1.5));Nn.shadowMap.enabled=!0;Nn.shadowMap.type=Tl;Nn.shadowMap.autoUpdate=!1;Nn.shadowMap.needsUpdate=!0;var Ve=new sa;Ve.fog=new ia(new Oe("#e3a9a0"),40,240);var pn=new on(50,1,.1,900);function Ec(){let i=innerWidth,e=innerHeight;Nn.setSize(i,e,!1),Nn.shadowMap.needsUpdate=!0,pn.aspect=i/e,pn.fov=i/e<1.15?66:50,pn.updateProjectionMatrix()}addEventListener("resize",Ec);Ec();var jp=[["Piso","Floor","\u5E8A"],["Escalera","Stairs","\u968E\u6BB5"],["Barandal laqueado","Lacquered railing","\u6F06\u306E\u624B\u3059\u308A"],["Tejado","Tiled roof","\u74E6\u5C4B\u6839"],["Lucernario","Skylight","\u5929\u7A93"],["Shoji","Shoji screen","\u969C\u5B50"],["Librero","Bookshelf","\u672C\u68DA"],["Fut\xF3n","Futon","\u5E03\u56E3"],["Farol de papel","Paper lantern","\u7D19\u306E\u884C\u706F"],["Farolillos","Paper lanterns","\u63D0\u706F"],["Pergamino","Hanging scroll","\u639B\u3051\u8EF8"],["Bons\xE1is","Bonsai","\u76C6\u683D"],["Nichos de piedra","Stone niches","\u77F3\u306E\u304F\u307C\u307F"]],Kb=[["Cepillo ancho","Wide brush","\u5E45\u5E83\u30D6\u30E9\u30B7"],["Limpias con un cepillo m\xE1s grande","You clean with a bigger brush","\u5927\u304D\u306A\u30D6\u30E9\u30B7\u3067\u6383\u9664\u3067\u304D\u307E\u3059"],["Mochila de herramientas","Tool backpack","\u9053\u5177\u30EA\u30E5\u30C3\u30AF"],["Ganas 10% m\xE1s de tablas al limpiar","You earn 10% more planks when cleaning","\u6383\u9664\u3067\u5F97\u3089\u308C\u308B\u677F\u304C10%\u5897\u3048\u307E\u3059"],["Farol de mano","Hand lantern","\u624B\u6301\u3061\u30E9\u30F3\u30BF\u30F3"],["Ilumina el \xE1rea mientras limpias","Lights up the area while you clean","\u6383\u9664\u4E2D\u306B\u5468\u308A\u3092\u7167\u3089\u3057\u307E\u3059"],["Cubeta de lluvia","Rain bucket","\u96E8\u306E\u30D0\u30B1\u30C4"],["Suena lluvia suave sobre el techo","Soft rain plays on the roof","\u5C4B\u6839\u306B\u3084\u3055\u3057\u3044\u96E8\u97F3\u304C\u97FF\u304D\u307E\u3059"],["Brasero de carb\xF3n","Charcoal brazier","\u706B\u9262"],["Calor guardado para la noche","Warmth stored for the night","\u591C\u306E\u305F\u3081\u306B\u84C4\u3048\u305F\u306C\u304F\u3082\u308A"],["Papel washi","Washi paper","\u548C\u7D19"],["Entra la luz del atardecer","Sunset light comes in","\u5915\u66AE\u308C\u306E\u5149\u304C\u5DEE\u3057\u8FBC\u307F\u307E\u3059"],["Novela de monta\xF1a","Mountain novel","\u5C71\u306E\u5C0F\u8AAC"],["Un libro para las noches","A book for the evenings","\u591C\u306E\u305F\u3081\u306E\u4E00\u518A"],["Manta tejida","Woven blanket","\u624B\u7DE8\u307F\u306E\u30D6\u30E9\u30F3\u30B1\u30C3\u30C8"],["Para las noches fr\xEDas","For cold nights","\u5BD2\u3044\u591C\u306E\u305F\u3081\u306B"],["Mecha de aceite","Oil wick","\u6CB9\u306E\u706F\u82AF"],["Una luz amplia sobre la cama","A broad light over the bed","\u30D9\u30C3\u30C9\u3092\u5E83\u304F\u7167\u3089\u3059\u5149"],["Farolillos de colores","Colored lanterns","\u8272\u3068\u308A\u3069\u308A\u306E\u63D0\u706F"],["Las luces se vuelven de colores","The lights turn colorful","\u30E9\u30A4\u30C8\u304C\u8272\u3068\u308A\u3069\u308A\u306B\u306A\u308A\u307E\u3059"],["Pincel de tinta sumi-e","Sumi-e ink brush","\u58A8\u7D75\u306E\u7B46"],["Un recuerdo de la monta\xF1a","A memory of the mountain","\u5C71\u306E\u601D\u3044\u51FA"],["Semillas de lavanda","Lavender seeds","\u30E9\u30D9\u30F3\u30C0\u30FC\u306E\u7A2E"],["Huele a campo","Smells like the countryside","\u91CE\u539F\u306E\u9999\u308A\u304C\u3057\u307E\u3059"],["Luci\xE9rnagas en frasco","Fireflies in a jar","\u74F6\u306E\u4E2D\u306E\u30DB\u30BF\u30EB"],["M\xE1s luci\xE9rnagas afuera","More fireflies outside","\u5916\u306B\u3082\u3063\u3068\u30DB\u30BF\u30EB\u304C\u98DB\u3073\u307E\u3059"]],Qp=[["el piso","the floor","\u5E8A"],["la terraza y la escalera","the terrace and the stairs","\u30C6\u30E9\u30B9\u3068\u968E\u6BB5"],["el interior","the interior","\u5BA4\u5185"],["el techo y los nichos","the roof and the niches","\u5C4B\u6839\u3068\u58C1\u306E\u304F\u307C\u307F"]];UX.add(jp);UX.add(Kb);UX.add(Qp);UX.add([["Caba\xF1a 3D","Cabin 3D","\u30AD\u30E3\u30D3\u30F3 3D"],["prototipo","prototype","\u30D7\u30ED\u30C8\u30BF\u30A4\u30D7"],["Caba\xF1a 3D \xB7 prototipo","Cabin 3D \xB7 prototype","\u30AD\u30E3\u30D3\u30F3 3D \xB7 \u30D7\u30ED\u30C8\u30BF\u30A4\u30D7"],["Una caba\xF1a de madera y piedra en lo alto de un acantilado, de noche. L\xEDmpiala y rep\xE1rala poco a poco, sin prisa.","A cabin of wood and stone high on a cliff, at night. Clean and repair it little by little, with no rush.","\u5D16\u306E\u4E0A\u306B\u305F\u305F\u305A\u3080\u3001\u6728\u3068\u77F3\u306E\u5C0F\u3055\u306A\u5C0F\u5C4B\u3002\u591C\u306E\u9759\u3051\u3055\u306E\u4E2D\u3001\u6025\u304C\u305A\u5C11\u3057\u305A\u3064\u6383\u9664\u3057\u3066\u76F4\u3057\u3066\u3044\u304D\u307E\u3057\u3087\u3046\u3002"],["Arrastra sobre la suciedad para fregarla y ganar tablas.","Drag over the grime to scrub it and earn planks.","\u6C5A\u308C\u306E\u4E0A\u3092\u306A\u305E\u3063\u3066\u3053\u3059\u308A\u3001\u677F\u3092\u96C6\u3081\u307E\u3057\u3087\u3046\u3002"],["Toca un objeto limpio (o su bot\xF3n de abajo) para repararlo.","Tap a clean object (or its button below) to repair it.","\u304D\u308C\u3044\u306B\u306A\u3063\u305F\u3082\u306E\u3092\u30BF\u30C3\u30D7\uFF08\u307E\u305F\u306F\u4E0B\u306E\u30DC\u30BF\u30F3\uFF09\u3067\u4FEE\u7406\u3057\u307E\u3059\u3002"],["Arrastra el fondo para girar; pellizca o usa la rueda para acercar.","Drag the background to rotate; pinch or use the wheel to zoom.","\u80CC\u666F\u3092\u30C9\u30E9\u30C3\u30B0\u3067\u56DE\u8EE2\u3001\u30D4\u30F3\u30C1\u3084\u30DB\u30A4\u30FC\u30EB\u3067\u30BA\u30FC\u30E0\u3057\u307E\u3059\u3002"],["Mejor con auriculares. Tu avance se guarda en este dispositivo.","Best with headphones. Your progress is saved on this device.","\u30D8\u30C3\u30C9\u30DB\u30F3\u63A8\u5968\u3002\u9032\u307F\u5177\u5408\u306F\u3053\u306E\u7AEF\u672B\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002"],["Entrar a la caba\xF1a","Enter the cabin","\u5C0F\u5C4B\u306B\u5165\u308B"],["\u2190 Men\xFA","\u2190 Menu","\u2190 \u30E1\u30CB\u30E5\u30FC"],["Arrastra sobre la suciedad para limpiar \xB7 arrastra el fondo para girar \xB7 pellizca para acercar","Drag over the grime to clean \xB7 drag the background to rotate \xB7 pinch to zoom","\u6C5A\u308C\u3092\u306A\u305E\u3063\u3066\u6383\u9664 \xB7 \u80CC\u666F\u3092\u30C9\u30E9\u30C3\u30B0\u3067\u56DE\u8EE2 \xB7 \u30D4\u30F3\u30C1\u3067\u30BA\u30FC\u30E0"],["Inhala","Inhale","\u5438\u3063\u3066"],["Gracias por respirar","Thank you for breathing","\u547C\u5438\u3057\u3066\u304F\u308C\u3066\u3042\u308A\u304C\u3068\u3046"],["Sost\xE9n","Hold","\u6B62\u3081\u3066"],["Exhala","Exhale","\u5410\u3044\u3066"],["Acercar","Zoom in","\u30BA\u30FC\u30E0\u30A4\u30F3"],["Alejar","Zoom out","\u30BA\u30FC\u30E0\u30A2\u30A6\u30C8"],["Centrar vista","Center view","\u8996\u70B9\u3092\u623B\u3059"],["Esencial","Essential","\u5FC5\u9808"],["Funcional","Functional","\u6A5F\u80FD"],["Decoraci\xF3n","Decoration","\u98FE\u308A"],["Colecci\xF3n","Collection","\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3"],["Vac\xEDa. Cada reparaci\xF3n te da un objeto.","Empty. Every repair gives you an item.","\u7A7A\u3063\u307D\u3002\u4FEE\u7406\u3059\u308B\u305F\u3073\u306B\u30A2\u30A4\u30C6\u30E0\u304C\u3082\u3089\u3048\u307E\u3059\u3002"],["Reparado","Repaired","\u4FEE\u7406\u6E08\u307F"],["Tu caba\xF1a est\xE1 lista. Buen trabajo.","Your cabin is ready. Nice work.","\u5C0F\u5C4B\u304C\u5B8C\u6210\u3057\u307E\u3057\u305F\u3002\u3088\u304F\u3067\u304D\u307E\u3057\u305F\u3002"],["Limpia m\xE1s esa zona antes de repararla","Clean that area more before repairing it","\u4FEE\u7406\u3059\u308B\u524D\u306B\u3001\u3082\u3046\u5C11\u3057\u305D\u306E\u5834\u6240\u3092\u6383\u9664\u3057\u307E\u3057\u3087\u3046"],["Ronronea\u2026","Purring\u2026","\u30B4\u30ED\u30B4\u30ED\u2026"],["Caba\xF1a reiniciada","Cabin reset","\u5C0F\u5C4B\u3092\u30EA\u30BB\u30C3\u30C8\u3057\u307E\u3057\u305F"],["Llevas un buen rato aqu\xED: respira hondo y estira un poco los hombros.","You have been here a while: take a deep breath and stretch your shoulders a little.","\u3057\u3070\u3089\u304F\u904A\u3093\u3067\u3044\u307E\u3059\u306D\u3002\u6DF1\u547C\u5438\u3057\u3066\u3001\u80A9\u3092\u8EFD\u304F\u4F38\u3070\u3057\u307E\u3057\u3087\u3046\u3002"],["\xBFReiniciar la caba\xF1a desde cero?","Restart the cabin from scratch?","\u5C0F\u5C4B\u3092\u6700\u521D\u304B\u3089\u3084\u308A\u76F4\u3057\u307E\u3059\u304B\uFF1F"],["Los farolillos suben al cielo","Lanterns drift up into the sky","\u30E9\u30F3\u30BF\u30F3\u304C\u591C\u7A7A\u3078\u6607\u3063\u3066\u3044\u304D\u307E\u3059"],["Ciudad a lo lejos","Distant city","\u9060\u304F\u306E\u8857"],["Autos a lo lejos","Cars far away","\u9060\u304F\u306E\u8ECA"],["Tren a lo lejos","Distant train","\u9060\u304F\u306E\u96FB\u8ECA"],["Perro a lo lejos","Distant dog","\u9060\u304F\u306E\u72AC"],["Tranv\xEDa a lo lejos","Distant tram","\u9060\u304F\u306E\u8DEF\u9762\u96FB\u8ECA"],["Crepitar del fuego","Crackling fire","\u85AA\u306E\u306F\u305C\u308B\u97F3"],["Campanita","Little bell","\u5C0F\u3055\u306A\u9234"],["Lluvia en el techo","Rain on the roof","\u5C4B\u6839\u306E\u96E8\u97F3"],["Croar de ranas","Frogs croaking","\u30AB\u30A8\u30EB\u306E\u9CF4\u304D\u58F0"],["Murmullo de agua","Water murmur","\u6C34\u306E\u305B\u305B\u3089\u304E"],["Maullido suave","Soft meow","\u3084\u3055\u3057\u3044\u9CF4\u304D\u58F0"]]);var Bu=(i,e)=>{let t=jb.get(i);return t?t[e]:i},jb=new Map(jp.concat(Qp).map(i=>[i[0].toLowerCase(),[i[0],i[1].toLowerCase(),i[2]]])),Kp=(i,e)=>i.split(", ").map(t=>Bu(t,e)).join(e===1?", ":"\u3001");UX.rx([[/^Tablas: (\d+)$/,(i,e)=>e===1?"Planks: "+i[1]:"\u677F: "+i[1]],[/^Necesita: (.+)$/,(i,e)=>(e===1?"Needs: ":"\u5FC5\u8981: ")+Kp(i[1],e)],[/^Limpia la zona · (\d+)%$/,(i,e)=>(e===1?"Clean the area \xB7 ":"\u30A8\u30EA\u30A2\u3092\u6383\u9664 \xB7 ")+i[1]+"%"],[/^Faltan (\d+) tablas$/,(i,e)=>e===1?i[1]+" more planks needed":"\u3042\u3068\u677F"+i[1]+"\u679A"],[/^Listo · (\d+) tablas$/,(i,e)=>e===1?"Ready \xB7 "+i[1]+" planks":"\u6E96\u5099OK \xB7 \u677F"+i[1]+"\u679A"],[/^Faltan (\d+) tablas\. Sigue limpiando\.$/,(i,e)=>e===1?i[1]+" more planks needed. Keep cleaning.":"\u3042\u3068\u677F"+i[1]+"\u679A\u3002\u6383\u9664\u3092\u7D9A\u3051\u307E\u3057\u3087\u3046\u3002"],[/^Primero repara: (.+)$/,(i,e)=>(e===1?"Repair first: ":"\u5148\u306B\u4FEE\u7406: ")+Kp(i[1],e)],[/^(.+) reparado\. Ganaste: (.+)$/,(i,e,t)=>e===1?t(i[1])+" repaired. You got: "+t(i[2]):t(i[1])+"\u3092\u4FEE\u7406\u3057\u307E\u3057\u305F\u3002\u7372\u5F97: "+t(i[2])],[/^(.+) ya está reparado$/,(i,e,t)=>e===1?t(i[1])+" is already repaired":t(i[1])+"\u306F\u3082\u3046\u4FEE\u7406\u6E08\u307F\u3067\u3059"],[/^Siguiente: (repara|limpia) (.+?)( \(toca su botón\))?$/,(i,e)=>{let t=i[1]==="repara",n=Bu(i[2],e);return e===1?"Next: "+(t?"repair":"clean")+" the "+n+(i[3]?" (tap its button)":""):"\u6B21: "+n+"\u3092"+(t?"\u4FEE\u7406":"\u6383\u9664")+(i[3]?"\uFF08\u30DC\u30BF\u30F3\u3092\u30BF\u30C3\u30D7\uFF09":"")}],[/^Mientras no estabas, la humedad volvió a ensuciar (.+)$/,(i,e)=>{let t=Bu(i[1],e);return e===1?"While you were away, damp dirtied "+t+" again.":"\u7559\u5B88\u306E\u3042\u3044\u3060\u306B\u6E7F\u6C17\u3067\u3001"+t+"\u304C\u307E\u305F\u6C5A\u308C\u3066\u3057\u307E\u3044\u307E\u3057\u305F\u3002"}]]);try{document.title=UX.tr(document.title)}catch{}var em=["Esencial","Funcional","Decoraci\xF3n"],Kt=[{id:"piso",tier:0,name:"Piso",cost:10,focus:[1.5,ce,1],reward:["Cepillo ancho","Limpias con un cepillo m\xE1s grande"]},{id:"escalera",tier:0,name:"Escalera",cost:14,needs:["piso"],focus:[12,1,2.8],reward:["Mochila de herramientas","Ganas 10% m\xE1s de tablas al limpiar"]},{id:"barandal",tier:0,name:"Barandal laqueado",cost:14,needs:["piso"],focus:[2.5,ce+.6,3.9],reward:["Farol de mano","Ilumina el \xE1rea mientras limpias"]},{id:"techo",tier:0,name:"Tejado",cost:24,needs:["piso"],focus:[1.5,8.2,.5],reward:["Cubeta de lluvia","Suena lluvia suave sobre el techo"]},{id:"panel",tier:1,name:"Lucernario",cost:20,needs:["techo"],focus:[4.4,8.4,.9],reward:["Brasero de carb\xF3n","Calor guardado para la noche"]},{id:"ventana",tier:1,name:"Shoji",cost:16,needs:["techo"],focus:[2.4,6.1,-2.8],reward:["Papel washi","Entra la luz del atardecer"]},{id:"librero",tier:1,name:"Librero",cost:14,needs:["piso"],focus:[-1.4,5.6,-2.5],reward:["Novela de monta\xF1a","Un libro para las noches"]},{id:"cama",tier:1,name:"Fut\xF3n",cost:14,needs:["techo"],focus:[4.5,5,-1.6],reward:["Manta tejida","Para las noches fr\xEDas"]},{id:"lampara",tier:2,name:"Farol de papel",cost:10,needs:["panel"],focus:[1.5,7,-1],reward:["Mecha de aceite","Una luz amplia sobre la cama"]},{id:"luces",tier:2,name:"Farolillos",cost:14,needs:["panel","barandal"],focus:[1.5,7,2.5],reward:["Farolillos de colores","Las luces se vuelven de colores"]},{id:"cuadro",tier:2,name:"Pergamino",cost:10,needs:["librero"],focus:[.55,6.4,-2.8],reward:["Pincel de tinta sumi-e","Un recuerdo de la monta\xF1a"]},{id:"plantas",tier:2,name:"Bons\xE1is",cost:8,needs:["barandal"],focus:[6.9,ce+.6,3],reward:["Semillas de lavanda","Huele a campo"]},{id:"nichos",tier:2,name:"Nichos de piedra",cost:12,needs:["lampara"],focus:[-9.8,1,5.5],reward:["Luci\xE9rnagas en frasco","M\xE1s luci\xE9rnagas afuera"]}];var zu=new Map,tm=new Map,Wa=(i,e)=>i.forEach(t=>tm.set(t.toLowerCase(),e));Wa(["#dcae92","#c89479","#d4a98c","#c49a7d","#d2a58a"],"wood");Wa(["#b0806a","#d9b995","#a1918c","#dcbc98","#d4b290","#e0c19e","#a8978c","#9d8c82","#b0a095","#ecc9ae","#f1d3bb","#e0c2a2","#b3a398","#8f6f66","#9a7a70","#8e7f7a","#f2d6c0","#e7c9ae"],"woodV");Wa(["#a9a4c6","#8f8ab0","#aaa5c8","#9a95bb","#b4afd2","#8e89b0"],"stone");Wa(["#e7a293","#9b8b88"],"shingle");Wa(["#9fb9a0"],"grass");var Qb={"#dcae92":"#cfa578","#c89479":"#b98b5f","#d4a98c":"#c79a6e","#c49a7d":"#b2865a","#d2a58a":"#c29868","#b0806a":"#5a3d2e","#8f6f66":"#4b342a","#9a7a70":"#573d31","#d9b995":"#dcc194","#dcbc98":"#dcc194","#d4b290":"#d3b784","#e0c19e":"#e2c99d","#e0c2a2":"#dcc194","#ecc9ae":"#8e3d2e","#f1d3bb":"#a14a38","#e7c9ae":"#d9bf92","#f2d6c0":"#e6d3ae","#f6c3b4":"#707c96","#e7a293":"#4f596f","#9b8b88":"#3e4659","#a9a4c6":"#aaa59d","#8f8ab0":"#8c877f","#aaa5c8":"#b1aca3","#9a95bb":"#9b968d","#b4afd2":"#bdb8ae","#8e89b0":"#837e76","#e6a091":"#2f4a74","#7fc3bd":"#9a6a3c","#d9a9cb":"#6a7f58","#a6cf92":"#c9a14a","#a1918c":"#8d7f74"},Ze=(i,e)=>{let t=i+(e?JSON.stringify(e):"");return zu.has(t)||zu.set(t,Zp(Qb[String(i).toLowerCase()]||i,tm.get(String(i).toLowerCase()),Object.assign({flatShading:!0},e||{}))),zu.get(t)};function ue(i,e,t,n,s,r,a,o,l){let c=typeof n=="string"?Ze(n,l):n,h=new rn(i,e,t),u=c.userData&&c.userData.kind;u&&Yp(h,i,e,t,qp[u]);let d=new ge(h,c);return d.position.set(s,r,a),o&&o.add(d),d}var eM=["#8cbb78","#7faa70","#9a92b6"],ku;function tM(i,e,t,n,s,r){r=r||{},ku||(ku=new wn(1,0));let a=new ge(ku,Ze(r.c||eM[Math.random()*3|0]));return a.position.set(e,t,n),a.rotation.x=r.rx||0,a.userData={item:i.id,base:r.wall?[s,s,s*.3]:[s,s*.28,s],s:1},a.scale.set(...a.userData.base),i.g.add(a),i.blobs.push(a),a}function bn(i,e,t,n,s,r,a){let o=$t(t);for(let l=0;l<e;l++){let c=n(o);tM(i,c[0],c[1],c[2],s+o()*(r-s),a)}}function Fi(i){let e=i.userData.s,t=i.userData.base;i.scale.set(t[0]*e,t[1]*e,t[2]*e),i.visible=e>.04}var Hu="cabana3d-v1",Xa=.55,nM=200,ie={repaired:{},spent:0,best:0,done:!1,decor:{},own:{},mem:0,notes:[],vis:{},ltr:{},cnt:{}},Vu=i=>Kt.find(e=>e.id===i),iM=()=>nM*(ie.repaired.escalera?1.1:1),Ls=()=>Math.floor(ie.best*iM())-ie.spent,Ds=()=>Kt.filter(i=>ie.repaired[i.id]).length,Tc=i=>Vu(i).name.toLowerCase(),cs=i=>(i.needs||[]).filter(e=>!ie.repaired[e]);function Rr(){Kt.forEach(i=>{let e=Ht[i.id],t=!!ie.repaired[i.id];e.b.visible=!t,e.f.visible=t}),it.rainOn=!!ie.repaired.techo,Qe.rain(it.rainOn),Nn.shadowMap.needsUpdate=!0}function Fn(){try{let i={};Object.values(Ht).forEach(e=>i[e.id]=e.blobs.map(t=>+t.userData.s.toFixed(2))),localStorage.setItem(Hu,JSON.stringify({r:ie.repaired,s:ie.spent,b:ie.best,d:ie.done,t:Date.now(),bl:i,dc:ie.decor,ow:ie.own,me:ie.mem,nt:ie.notes,vv:ie.vis,lt:ie.ltr,ct:ie.cnt}))}catch{}}var sM=[[["piso"],2,10,"el piso"],[["escalera","barandal","plantas","luces"],10,26,"la terraza y la escalera"],[["librero","cama","ventana","cuadro","lampara"],26,50,"el interior"],[["techo","panel","nichos"],50,80,"el techo y los nichos"]];function nm(i){let e=null;try{e=JSON.parse(localStorage.getItem(Hu)||"null")}catch{}if(!e)return;ie.repaired=e.r||{},ie.spent=e.s||0,ie.best=e.b||0,ie.done=!!e.d,ie.decor=e.dc||{},ie.own=e.ow||{},ie.mem=e.me||0,ie.notes=e.nt||[],ie.vis=e.vv||{},ie.ltr=e.lt||{},ie.cnt=e.ct||{},Object.values(Ht).forEach(r=>{let a=(e.bl||{})[r.id];a&&r.blobs.forEach((o,l)=>{a[l]!=null&&(o.userData.s=a[l])})});let t=(()=>{try{return localStorage.getItem("ux-wear")==="1"}catch{return!1}})(),n=e.t&&t?(Date.now()-e.t)/36e5:0,s=null;sM.forEach(([r,a,o,l])=>{let c=xt((n-a)/(o-a));c>0&&(r.forEach(h=>Ht[h].blobs.forEach(u=>{u.userData.s=Math.max(u.userData.s,c*.9)})),s=l)}),Object.values(Ht).forEach(r=>r.blobs.forEach(Fi)),s&&setTimeout(()=>i("Mientras no estabas, la humedad volvi\xF3 a ensuciar "+s),1500)}function im(){try{localStorage.removeItem(Hu)}catch{}ie.repaired={},ie.spent=0,ie.best=0,ie.done=!1,ie.decor={},ie.own={},ie.mem=0,ie.notes=[],ie.vis={},ie.ltr={},ie.cnt={};try{window.__habReset&&window.__habReset()}catch{}Object.values(Ht).forEach(i=>i.blobs.forEach(e=>{e.userData.s=1,Fi(e)})),Rr()}var It={porchL:[],bulbs:[],nichoGlow:[],lampL:null,lampGlow:null,winL:null,handL:null},Mn={lamp:0,lant:0,str:0,nich:0,moon:0,smoke:0,rain:0};function sm(){let i=new Aa(15124172,8020056,1.1);Ve.add(i);let e=new vr(16760972,1.2);e.position.set(-12,18,16),e.target.position.set(4,4,0),Ve.add(e,e.target),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),Object.assign(e.shadow.camera,{left:-20,right:22,top:16,bottom:-14,near:1,far:70}),e.shadow.bias=-6e-4,e.shadow.normalBias=.04,e.shadow.radius=3;let t=new vr(16765616,.3);t.position.set(14,6,14),Ve.add(t)}function rm(){It.lampL=new Di(16763018,0,14,1.4),It.lampL.position.set(1.5,7.2,-.6),Ve.add(It.lampL),It.lampGlow=Rt(Nt,16763018,4.5,0,!0),It.lampGlow.position.set(1.5,7.15,-1),Ve.add(It.lampGlow)}function am(){It.handL=new Di(16766880,0,9,1.6),Ve.add(It.handL)}function om(){It.winL=new Di(16767400,0,9,1.5),It.winL.position.set(2.4,6.2,-1.6),Ve.add(It.winL)}function lm(i){let e=it.T,t=ie.repaired,n={lamp:t.lampara&&t.panel?1:0,lant:t.techo?1:0,str:t.luces?1:0,nich:t.nichos?1:0,moon:t.ventana?1:0,smoke:t.techo?1:0,rain:t.techo?1:0};for(let r in Mn)Mn[r]+=(n[r]-Mn[r])*Math.min(1,i*1.6);let s=.93+.05*Math.sin(e*9)+.03*Math.sin(e*23);It.lampL.intensity=2.6*Mn.lamp*s,It.lampGlow.material.opacity=.55*Mn.lamp*s,It.porchL.forEach((r,a)=>{r.L.intensity=1.6*Mn.lant*(s+.02*a),r.gl.material.opacity=.7*Mn.lant*s,r.body.material.emissiveIntensity=Mn.lant}),It.bulbs.forEach((r,a)=>{r.material.opacity=Mn.str*(.55+.15*Math.sin(e*2+a))}),It.nichoGlow.forEach((r,a)=>{r.material.opacity=.7*Mn.nich*(.8+.2*Math.sin(e*1.6+a*2))}),It.winL.intensity=1.2*Mn.moon}var cm=[],hm=[],um=[],qa=i=>12+16*Math.sin(i*.021+.6)+8*Math.sin(i*.047),Gu=-13.6;function wc(i,e,t,n,s){let r=$t(n),a=new Li;a.moveTo(-340,-60);for(let l=-340;l<=340;l+=16)a.lineTo(l,t*(.45+.55*Math.abs(Math.sin(l*.011+n)+.5*Math.sin(l*.027+n*2)))/1.5+r()*t*.08);a.lineTo(340,-60);let o=new ge(new Ta(a),new at({color:e,fog:!0}));o.position.set(0,s,i),Ve.add(o)}var Ac=new P(140,100,-420);function rM(){let i=new ge(new Wt(600,24,16),new yn({side:cn,depthWrite:!1,fog:!1,uniforms:{top:{value:new Oe("#3a3f7c")},mid:{value:new Oe("#c9799d")},hor:{value:new Oe("#fbb67a")},sd:{value:Ac.clone().normalize()}},vertexShader:"varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vP;uniform vec3 top,mid,hor;uniform vec3 sd;void main(){vec3 d=normalize(vP);float h=clamp(d.y,0.,1.);vec3 c=mix(hor,mid,smoothstep(0.,.22,h));c=mix(c,top,smoothstep(.16,.85,h));float s=max(dot(d,sd),0.);c+=vec3(1.,.62,.32)*pow(s,6.)*.55+vec3(1.,.85,.6)*pow(s,40.)*.5;c=mix(c,vec3(.25,.22,.42),smoothstep(0.,-.4,d.y)*.7);gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
`+Du+"}"}));i.renderOrder=-10,Ve.add(i);{let n=new Float32Array(480);for(let r=0;r<160;r++){let a=Math.random()*6.283,o=Math.random()*.5+.42,l=Math.sqrt(1-o*o);n.set([Math.cos(a)*l*560,o*560,Math.sin(a)*l*560-0],r*3)}let s=new Et;s.setAttribute("position",new Gt(n,3)),Ve.add(new Ii(s,new fi({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:.5,fog:!1,depthWrite:!1})))}let e=Rt(Nt,16761466,260,.85,!0);e.material.fog=!1,e.position.copy(Ac),Ve.add(e);let t=new ge(new pi(15,32),new at({color:16773320,fog:!1}));t.position.copy(Ac).multiplyScalar(.998),t.lookAt(0,0,0),Ve.add(t)}function aM(){wc(-190,"#a38aa8",70,1,-24),wc(-150,"#9a82a6",60,6,-24),wc(-110,"#8f7ca4",46,5,-24),wc(-78,"#82749f",34,9,-22);let i=new ge(new pi(260,32).rotateX(-Math.PI/2),Ze("#86906f"));i.position.y=-14,Ve.add(i);let e=["#6d8466","#7a936f","#5f7a5d","#86a077"];{let n=new vs(new Qt(1.9,7.5,6).translate(0,3.8,0),Ze("#ffffff"),900),s=new ft,r=new Ln,a=new P,o=new P,l=new Oe,c=$t(77),h=0;for(let u=0;u<4e3&&h<900;u++){let d=c()*6.283,p=14+Math.sqrt(c())*150,g=Math.cos(d)*p+2,M=Math.sin(d)*p-12;if(g>-16&&g<17&&M>-10&&M<9||Math.abs(g-qa(M))<10+Math.max(0,-M)*.16+6)continue;let m=.7+c()*1.1;o.set(g,-14+Math.max(0,-M-30)*.05,M),a.set(m,m*(.8+c()*.8),m),s.compose(o,r,a),n.setMatrixAt(h,s),n.setColorAt(h,l.set(e[c()*4|0])),h++}n.count=h,Ve.add(n)}for(let t=0;t<7;t++){let n=Rt(Ps,15978450,60+t*8,.26);n.position.set(-70+t*30,-9+t*1.6,-10-t*6),n.scale.set(70+t*8,18,1),Ve.add(n),cm.push(n)}{let t=$t(31);for(let n=0;n<14;n++){let s=n%2?1:-1,r=-18-t()*85,a=-12+t()*9,o=70+t()*70,l=Rt(Ps,n%3?15780048:16309456,60,.1+t()*.12);l.position.set(-140+t()*280,a,r),l.scale.set(o,10+t()*12,1),l.userData.v=s*(.3+t()*.5),l.userData.ph=t()*6,l.userData.o=l.material.opacity,Ve.add(l),um.push(l)}}for(let t=0;t<6;t++){let n=Rt(Ps,16172212,90,.38);n.position.set(-160+t*70,60+t*37%30,-200-t%3*30),n.scale.set(150,40,1),Ve.add(n),hm.push(n)}}var dm=[];function oM(){{let e=[],t=[],n=[],s=[],r=new Oe,a=new Oe("#5d8f8c"),o=new Oe("#ffd3a0"),l=new Oe("#d8949e");for(let g=0;g<=90;g++){let M=34-g*3,m=8+g*.16,f=qa(M);for(let x=0;x<5;x++){let b=x/4,_=f+(b-.5)*2*m;e.push(_,Gu,M);let S=1-Math.abs(b-.5)*2;r.copy(a).lerp(l,Math.min(1,S*1.4)).lerp(o,Math.max(0,S-.45)*(g<40?.7:.5)),t.push(r.r,r.g,r.b),s.push(b,g*.35)}}for(let g=0;g<90;g++)for(let M=0;M<4;M++){let m=g*5+M;n.push(m,m+5,m+1,m+1,m+5,m+6)}let c=new Et;c.setAttribute("position",new st(e,3)),c.setAttribute("color",new st(t,3)),c.setAttribute("uv",new st(s,2)),c.setIndex(n),Ve.add(new ge(c,new at({vertexColors:!0,fog:!1})));let h=document.createElement("canvas");h.width=64,h.height=256;let u=h.getContext("2d");for(let g=0;g<40;g++){let M=Math.random()*64,m=Math.random()*256;u.fillStyle="rgba(255,236,210,"+(.08+Math.random()*.12)+")",u.fillRect(M,m,2+Math.random()*10,1.5)}let d=new Pi(h);d.wrapS=d.wrapT=Ki,d.repeat.set(1,3);let p=new ge(c,new at({map:d,transparent:!0,depthWrite:!1,fog:!0}));p.position.y=.03,Ve.add(p),Wu=d}{let i=$t(52),e=70,t=new vs(new zt(.25,.4,3.2,5).translate(0,1.6,0),Ze("#5a3d33"),e),n=new vs(new wn(1,1),Ze("#ffffff"),e*3),s=new ft,r=new Ln,a=new P,o=new P,l=new Oe,c=["#f3bccb","#eea9bd","#f8d0da","#e99fb4"],h=0,u=0;for(let d=0;d<500&&h<e;d++){let p=30-i()*230,g=i()<.5?-1:1,M=11+i()*28,m=qa(p)+g*(M+Math.max(0,-p)*.12);if(m>-22&&m<26&&p>-14&&p<16)continue;let f=1+i()*1.1,x=Gu+.2;o.set(m,x,p),a.setScalar(f),s.compose(o,r,a),t.setMatrixAt(h,s);for(let b=0;b<3;b++)o.set(m+(i()-.5)*1.8*f,x+3.8*f+(b?i()*.9:0),p+(i()-.5)*1.8*f),a.set(2.3*f*(1-b*.18),1.7*f,2.3*f*(1-b*.18)),s.compose(o,r,a),n.setMatrixAt(u,s),n.setColorAt(u,l.set(i()<.18?"#8aa874":c[i()*4|0])),u++;h++}t.count=h,n.count=u,Ve.add(t,n)}{let i=new Ae,e=new at({color:15785176,fog:!0}),t=new at({color:7303055,fog:!0}),n=new at({color:10392230,fog:!0}),s=(o,l,c,h,u,d,p)=>{let g=new ge(new rn(o,l,c),h);return g.position.set(u,d,p),i.add(g),g};s(34,7,26,n,0,3.5,0);let r=7,a=24;for(let o=0;o<4;o++){s(a,5,a*.75,e,0,r+2.5,0);let l=new ge(new Qt(a*.78,3.2,4),t);l.rotation.y=Math.PI/4,l.position.y=r+6.4,l.scale.z=.75,i.add(l),r+=5.2,a-=4.5}i.position.set(-70,-8,-210),i.scale.setScalar(1.3),Ve.add(i)}for(let i=0;i<4;i++){let e=new Ae,t=new ge(new fa(.35,2.6,3,6),Ze("#5a3d2e"));t.rotation.x=Math.PI/2,t.scale.set(1,1,.6),e.add(t);let n=Rt(Nt,16758896,3.2,.9,!0);n.position.set(0,1,-1.2),e.add(n);let s=new ge(new Wt(.2,8,6),new at({color:16767392}));s.position.set(0,.8,-1.2),e.add(s),e.userData={u:.1+i*.22,sp:.0035+i*6e-4},Ve.add(e),dm.push(e)}}var Wu=null;function lM(){let i=new rn(10,26,12,12,16,12),e=i.attributes.position,t=$t(3),n=new Float32Array(e.count*3),s=new Oe,r=new Oe("#d0aa8c"),a=new Oe("#6d5a62"),o=(h,u,d)=>Math.sin(h*1.3+u*.7)*.35+Math.sin(d*1.7+u*1.1)*.3+Math.sin(h*3.1+d*2.3+u*.4)*.15;for(let h=0;h<e.count;h++){let u=e.getX(h),d=e.getY(h),p=e.getZ(h);if(d<13-.01){let m=o(u,d,p)*1.6+(t()-.5)*.25,f=p>5.9,x=Math.abs(u)>4.9;e.setX(h,u+(x?m:m*.3)*(Math.abs(u)<4.9?.3:1)),e.setZ(h,p+(f?m*.35:m*.6))}let g=xt((d+13)/26);s.copy(a).lerp(r,g);let M=(t()-.5)*.06;n[h*3]=s.r+M,n[h*3+1]=s.g+M,n[h*3+2]=s.b+M}i.setAttribute("color",new Gt(n,3)),i.computeVertexNormals();let l=i.attributes.uv;for(let h=0;h<l.count;h++)l.setXY(h,l.getX(h)*3.2,l.getY(h)*3.2);let c=new ge(i,new Ss({vertexColors:!0,flatShading:!0,map:Nu("rock"),gradientMap:Fu}));c.position.set(-9,-9,-1),c.receiveShadow=!0,c.castShadow=!0,Ve.add(c);{let h=new ge(new rn(10.4,.5,12.4),Ze("#8fa57c"));h.position.set(-9,3.95,-1),Ve.add(h)}{let h=$t(11);for(let u=0;u<7;u++){let d=-13+h()*8,p=-5+h()*8,g=.8+h()*.7,M=new ge(new Qt(.8*g,3.2*g,6),Ze(["#5f7a5d","#6c8a63","#557050"][u%3]));M.position.set(d,4.2+1.6*g,p),Ve.add(M)}}{let h=new Ae;h.position.set(-12.2,4.2,1.8),Ve.add(h);let u=new ge(new zt(.22,.38,3,6),Ze("#5a3d33"));u.position.y=1.5,u.rotation.z=.08,h.add(u),[[0,3.6,0,1.7],[1.2,3.2,.4,1.3],[-1.1,3.3,-.3,1.2],[.2,4.4,.2,1.1]].forEach(([d,p,g,M],m)=>{let f=new ge(new wn(M,1),Ze(["#f3bccb","#eea9bd","#f8d0da","#e99fb4"][m]));f.position.set(d,p,g),h.add(f)})}{let h=$t(5);for(let u=0;u<8;u++){let d=1+h()*2,p=new ge(new wn(d,0),Ze("#7b6a70"));p.position.set(-14+h()*12,-13,6+h()*3),p.rotation.set(h()*3,h()*3,0),Ve.add(p)}}}function fm(){rM(),aM(),oM(),lM()}var cM=Ac.clone().normalize();function pm(i){{let e=it.T;Is.sunDir.value.copy(cM),Is.sunCol.value.set(1,.72,.5),Is.misc.value.set(.55,.05,.5,e),um.forEach(t=>{t.position.x+=i*t.userData.v,t.position.x>160&&(t.position.x=-160),t.position.x<-160&&(t.position.x=160),t.material.opacity=t.userData.o*(.8+.2*Math.sin(e*.12+t.userData.ph))})}dm.forEach(e=>{let t=e.userData;t.u+=t.sp*i,t.u>1&&(t.u-=1);let n=30-t.u*240,s=qa(n)+Math.sin(it.T*.3+t.u*20)*1.2;e.position.set(s,Gu+.1+Math.sin(it.T*.9+t.u*9)*.04,n);let r=n-1,a=qa(r);e.rotation.y=Math.atan2(-(a-s),-(r-n))+Math.PI,e.scale.setScalar(1+t.u*0)}),Wu&&(Wu.offset.y=it.T*.004%1),cm.forEach((e,t)=>{e.position.x+=i*(.5+t*.08),e.position.x>110&&(e.position.x=-110)}),hm.forEach((e,t)=>{e.position.x+=i*(.4+t*.05),e.position.x>260&&(e.position.x=-260)})}var mm=[],Xu=260,gm=new Float32Array(Xu*6),xm=[],qu=60,Cc=new Float32Array(qu*3),_m=[],Rc,Ic,Ir,Pc,Ya;function ym(){for(let i=0;i<12;i++){let e=Rt(Ps,15328506,2,0);e.userData.ph=i/12,Ve.add(e),mm.push(e)}Rc=new Et;for(let i=0;i<Xu;i++)xm.push([Math.random()*30-12,Math.random()*18,Math.random()*18-8]);Rc.setAttribute("position",new Gt(gm,3)),Ir=new ha(Rc,new mr({color:13621503,transparent:!0,opacity:0,fog:!0})),Ir.frustumCulled=!1,Ve.add(Ir),Ic=new Et;for(let i=0;i<qu;i++)_m.push([Math.random()*30-14,Math.random()*9+1,Math.random()*14-6,Math.random()*6.28]);Ic.setAttribute("position",new Gt(Cc,3)),Pc=new fi({color:16773792,size:.4,map:Nt,transparent:!0,opacity:0,blending:Ui,depthWrite:!1}),Ya=new Ii(Ic,Pc),Ya.frustumCulled=!1,Ve.add(Ya)}function vm(i,e,t){let n=it.T;if(mm.forEach((s,r)=>{let a=(n*.07+s.userData.ph)%1;s.position.set(4.4+a*3.2+Math.sin(n*.6+r)*.3,9.4+a*5.5,-.2+Math.sin(n*.4+r*2)*.2);let o=1+a*4.2;s.scale.set(o,o,1),s.material.opacity=.38*(1-a)*Math.min(1,a*8)*Mn.smoke}),Ir.material.opacity=.28*Mn.rain,Ir.visible=Mn.rain>.02,Ir.visible){for(let s=0;s<Xu;s++){let r=xm[s];r[1]-=15*i,r[1]<-2&&(r[1]=17+Math.random()*3,r[0]=Math.random()*34-14,r[2]=Math.random()*20-9),gm.set([r[0],r[1],r[2],r[0]-.12,r[1]+.7,r[2]],s*6)}Rc.attributes.position.needsUpdate=!0}if(Pc.opacity=xt(e*.9+(t?.3:0)-.1,0,.9),Ya.visible=Pc.opacity>.02,Ya.visible){for(let s=0;s<qu;s++){let r=_m[s],a=n*.4+r[3];Cc[s*3]=r[0]+Math.sin(a*2+s)*1.5,Cc[s*3+1]=r[1]+Math.sin(a*3+s)*.5,Cc[s*3+2]=r[2]+Math.cos(a*1.7+s)*1.5}Ic.attributes.position.needsUpdate=!0}}var Lc=[],hM=0;function bm(){for(let i=0;i<40;i++){let e=Rt(Nt,16777215,.4,0,!0);e.visible=!1,Ve.add(e),Lc.push({s:e,life:0,vx:0,vy:0,vz:0})}}function Yu(i,e,t,n,s,r,a){for(let o=0;o<n;o++){let l=Lc[hM++%Lc.length];l.s.position.set(i,e,t),l.s.material.color.set(s),l.s.visible=!0,l.life=1,l.vx=(Math.random()-.5)*r,l.vy=Math.random()*r*.6+(a||.5),l.vz=(Math.random()-.5)*r,l.s.scale.setScalar(.25+Math.random()*.3)}}var Us=i=>Yu(i[0],i[1],i[2]+.5,22,16771504,5,2);function Mm(i){Lc.forEach(e=>{if(e.s.visible){if(e.life-=i*.9,e.life<=0){e.s.visible=!1;return}e.s.position.x+=e.vx*i,e.s.position.y+=e.vy*i,e.s.position.z+=e.vz*i,e.vy-=2.2*i,e.s.material.opacity=e.life*.9}})}var Sm="#dcae92";var Em="#d9b995",Wn="#b0806a",_i="#a1918c",Tm="#a9a4c6",wm="#e7a293";var et,Am=()=>(et=new Ae,et),Oi=i=>(Sc.push(i),i),Pr=i=>9.4-(i+1)*(2.2/3.4),Bi=Math.atan(2.2/3.4),Sn=i=>{let e=new Ae,t=new Ae,n=new Ae;return e.userData.itemId=i,e.add(t,n),et.add(e),Ht[i]={id:i,g:e,b:t,f:n,blobs:[]}},Dc={paint:null};function Cm(){Am(),Ve.add(et),ue(12.4,.28,.22,Wn,2,ce-.35,3.9,et),ue(12.4,.28,.22,Wn,2,ce-.35,-2.9,et);for(let e=0;e<8;e++)ue(.2,.26,7.2,"#8f6f66",-3.8+e*1.65,ce-.35,.5,et);[[-3.6,3.7],[-3.6,-2.7],[1,3.7],[1,-2.7],[4.8,3.7],[4.8,-2.7],[7.7,3.7],[7.7,-2.7]].forEach(([e,t])=>Oi(ue(.38,18.4,.38,"#9a7a70",e,ce-9.5,t,et)));for(let e of[1,4.8]){let t=ue(.15,.15,6.6,"#8f6f66",e,ce-5,.5,et);t.rotation.x=0}let i=(e,t,n,s,r)=>{let a=Math.hypot(n-e,s-t),o=ue(a,.16,.16,"#8f6f66",(e+n)/2,(t+s)/2,r,et);o.rotation.z=Math.atan2(s-t,n-e)};i(-3.6,ce-4,1,ce-.5,3.7),i(1,ce-.5,4.8,ce-4,3.7),i(4.8,ce-4,7.7,ce-.5,3.7),i(1,ce-4,4.8,ce-.5,3.7),i(4.8,ce-.5,7.7,ce-4,3.7),ue(12,.1,6.8,"#4a4470",2,ce-.6,.5,et),Oi(ue(8.2,3.9,.2,"#eadfc2",1.5,ce+1.95,-2.95,et)),[-2.55,1.35,3.5,5.55].forEach(e=>ue(.22,3.9,.12,Wn,e,ce+1.95,-2.8,et)),[ce+.95,ce+3.05,ce+3.82].forEach(e=>ue(8.2,.18,.12,Wn,1.5,e,-2.8,et)),Oi(ue(8.1,.9,.1,Tm,1.5,ce+.45,-2.8,et));for(let e=0;e<8;e++)ue(.04,.9,.02,"#8f8ab0",-2.1+e*1,ce+.45,-2.74,et);{let e=new Li;[[3,0],[-1,0],[-1,3.9],[1,5.2],[3,3.9]].forEach(([t,n],s)=>s?e.lineTo(t,n):e.moveTo(t,n));for(let t of[-2.6,5.4]){let n=new Sa(e,{depth:.2,bevelEnabled:!1});n.rotateY(Math.PI/2);let s=new ge(n,Ze(Sm));s.position.set(t,ce,0),et.add(s),Oi(s)}}Oi(ue(8.4,.8,.22,Wn,1.5,7.8,1,et)),[-2.5,5.5].forEach(e=>Oi(ue(.3,3.5,.3,Wn,e,ce+1.75,1,et)));{let e=new ge(new zt(.3,.3,10.6,10),Ze("#3e4659"));e.rotation.z=Math.PI/2,e.position.set(1.5,9.62,-1),et.add(e),[-1,1].forEach(t=>{let n=new ge(new Qt(.42,.95,6),Ze("#3e4659"));n.position.set(1.5+t*5.4,9.95,-1),n.rotation.z=-t*.35,et.add(n);let s=new ge(new Wt(.22,8,6),Ze("#c9a14a"));s.position.set(1.5+t*5.55,10.5,-1),et.add(s)})}ue(9.9,.18,.3,Wn,1.5,9.5,-1,et),ue(9.9,.2,.22,Wn,1.5,7.2,2.45,et),ue(9.9,.2,.22,Wn,1.5,7.2,-4.45,et),ue(.2,.2,6.8,Wn,-3.3,7.15,-1,et),ue(.2,.2,6.8,Wn,6.3,7.15,-1,et),[-2.6,5.6].forEach(e=>{let t=new Ae;t.position.set(e,6.5,2.1),et.add(t),ue(.03,.5,.03,"#6a5058",0,.5,0,t);let n=new ge(new Wt(.26,12,10),Ze("#f3e2c2",{emissive:"#ff9a4a",emissiveIntensity:0}));n.scale.set(1,1.25,1),t.add(n),[.3,-.3].forEach(a=>ue(.24,.06,.24,"#2f2a2a",0,a,0,t)),[-.12,0,.12].forEach(a=>{let o=new ge(new kn(.255*Math.sqrt(1-Math.pow(a/.33,2)),.008,4,16),Ze("#8e3d2e"));o.rotation.x=Math.PI/2,o.position.y=a,t.add(o)});let s=Rt(Nt,16761466,3.2,0,!0);t.add(s);let r=new Di(16761466,0,11,1.5);t.add(r),It.porchL.push({body:n,gl:s,L:r})}),[[-3.2,"#e6a091","#f5c9d9"],[-2.4,"#7fc3bd","#f8e5a0"],[-1.6,"#d9a9cb","#ffffff"],[-.8,"#a6cf92","#f5c9d9"]].forEach(([e,t,n])=>{ue(.5,.4,.5,t,e,ce+.2,3.3,et);let s=new ge(new wn(.34,0),Ze("#79b08a"));s.position.set(e,ce+.55,3.3),et.add(s),[[.1,.8],[-.12,.72],[.05,.95]].forEach(([r,a])=>{let o=new ge(new wn(.1,0),Ze(n));o.position.set(e+r,ce+a,3.35),et.add(o)})});{let e=new Ae;e.position.set(7.3,ce,-.2),et.add(e);let t="#aaa59d",n=(d,p,g,M,m=8)=>{let f=new ge(new zt(d,p,g,m),Ze(t));return f.position.y=M,e.add(f),f};n(.5,.55,.2,.1),n(.18,.22,1.1,.75),n(.5,.42,.16,1.38);let s=new ge(new rn(.5,.5,.5),Ze("#ffe6b0",{emissive:"#ff9a4a",emissiveIntensity:0}));s.position.y=1.7,e.add(s);let r=new ge(new Qt(.62,.42,4),Ze(t));r.rotation.y=Math.PI/4,r.position.y=2.17,e.add(r);let a=new ge(new Wt(.12,8,6),Ze(t));a.position.y=2.45,e.add(a);let o=Rt(Nt,16761466,3,0,!0);o.position.y=1.7,e.add(o),It.porchL.push({body:s,gl:o,L:{intensity:0}}),Oi(e.children[1]);let l=new Ae;l.position.set(6.4,ce,-2.2),et.add(l);let c=new ge(new zt(.5,.42,.4,10),Ze("#b1aca3"));c.position.y=.2,l.add(c);let h=new ge(new pi(.42,10).rotateX(-Math.PI/2),new at({color:8366256}));h.position.y=.38,l.add(h);let u=new ge(new zt(.05,.05,.9,6),Ze("#7aa05f"));u.rotation.z=1.2,u.position.set(.35,.75,0),l.add(u)}{let t=ce,n=15.1,s=ce-5.9,r=Math.hypot(n-8.2,s-t),a=Math.atan2(s-t,n-8.2);[2.15,3.45].forEach(o=>{let l=ue(r,.22,.14,"#8f6f66",(8.2+n)/2,(t+s)/2-.3,o,et);l.rotation.z=a,Oi(l)}),ue(2,.2,2.2,Em,15.7,ce-6.1,2.8,et),[[15.1,2],[16.4,3.6]].forEach(([o,l])=>ue(.3,12,.3,"#9a7a70",o,ce-12,l,et))}{let e=new Ae;e.position.set(16.6,ce-6.2,2.8),et.add(e);let t="#a8392b";[-1.7,1.7].forEach(r=>{let a=new ge(new zt(.18,.22,4.4,8),Ze(t));a.position.set(0,2.2,r),e.add(a)});let n=new ge(new rn(.5,.3,4.6),Ze("#2f2a2e"));n.position.set(0,4.5,0),e.add(n);let s=new ge(new rn(.3,.24,3.7),Ze(t));s.position.set(0,3.8,0),e.add(s)}{let e=Rt(Nt,16761466,3,.55,!0);e.position.set(16.5,ce-5.2,3.5),et.add(e),ue(.08,1.1,.08,"#6a5058",16.5,ce-5.7,3.5,et)}}function Rm(){{let i=Sn("piso"),e=$t(21);for(let t=0;t<24;t++){let n=-3.76+t*.5;if(ue(.46,.14,7,["#dcbc98","#d4b290","#e0c19e"][t%3],n,ce-.07,.5,i.f),e()>.27){let s=7*(.55+.45*e()),r=ue(.46,.14,s,["#a8978c","#9d8c82","#b0a095"][t%3],n,ce-.07+(e()-.5)*.1,.5+(7-s)*(e()>.5?.5:-.5),i.b);r.rotation.y=(e()-.5)*.06,r.rotation.z=(e()-.5)*.05}}for(let t=0;t<4;t++)for(let n=0;n<5;n++){let s=-1.35+t*1.9,r=-2.25+n*.95;ue(1.9,.05,.95,"#56633f",s,ce+.03,r,i.f),ue(1.78,.06,.83,"#d2c58e",s,ce+.035,r,i.f)}bn(i,14,31,t=>[-3.5+t()*11,ce+.04,-1+t()*4.6],.35,.75)}{let i=Sn("barandal"),e=$t(5);for(let t=0;t<11;t++){let n=-3.8+t*1.2;if(ue(.13,1.05,.13,"#ecc9ae",n,ce+.52,3.9,i.f),![2,5,8].includes(t)){let s=ue(.13,1.05,.13,_i,n,ce+.52,3.9,i.b);s.rotation.z=(e()-.5)*.34}}ue(12,.12,.15,"#f1d3bb",2.2,ce+1.06,3.9,i.f),ue(12,.1,.12,"#f1d3bb",2.2,ce+.55,3.9,i.f),[[-2.9,1.6],[2.6,2.4],[6.4,2.8]].forEach(([t,n])=>{let s=ue(n,.12,.14,_i,t,ce+1.02+(e()-.5)*.06,3.9,i.b);s.rotation.z=(e()-.5)*.1}),[[-1.3,2.1],[4.3,1.6]].forEach(([t,n])=>ue(n,.1,.12,_i,t,ce+.5,3.9,i.b)),bn(i,6,41,t=>[-3.5+t()*11,ce+1.1,3.9],.28,.5)}{let i=Sn("escalera"),e=$t(9),t=Math.atan2(-5.9,6.9);for(let n=0;n<9;n++){let s=8.9+n*.72,r=ce-.28-n*.63;if(ue(.8,.12,1.5,"#e0c2a2",s,r,2.8,i.f),![2,5].includes(n)){let a=ue(.8,.12,1.5,n%2?_i:"#b3a398",s,r+(e()-.5)*.06,2.8,i.b);a.rotation.z=(e()-.5)*.28,a.rotation.x=(e()-.5)*.1}}for(let n=0;n<9;n+=2)ue(.09,1,.09,"#f1d3bb",8.9+n*.72,ce+.22-n*.63,3.62,i.f);{let n=ue(Math.hypot(6.9,5.9),.1,.1,"#f1d3bb",12.1,ce-2.7,3.62,i.f);n.rotation.z=t}[1,5].forEach(n=>ue(.09,.7,.09,_i,8.9+n*.72,ce+.05-n*.63,3.62,i.b)),bn(i,8,51,n=>{let s=n()*8;return[8.9+s*.72,ce-.2-s*.63,2.8+(n()-.5)*1.1]},.3,.5)}{let i=Sn("techo"),e=$t(33),t=(r,a)=>{let o=new Ae;return[[.7,Bi],[-2.7,-Bi]].forEach(([l,c])=>{let h=ue(9.8,.24,4.1,r,1.5,8.3,l,o);h.rotation.x=c+(a&&l>0,0),h.position.z=l}),o},n=t(wm),s=t("#9b8b88");i.f.add(n),i.b.add(s);for(let r=0;r<11;r++){let a=(r+.5)/11,o=2.3-a*3.3,l=Pr(o)+.13,c=ue(9.8,.04,.07,"#f6c3b4",1.5,l,o,i.f);c.rotation.x=Bi;let h=ue(9.8,.04,.07,"#7e706e",1.5,l,o,i.b);h.rotation.x=Bi}[[.5,1.3,1,.7],[3.6,.4,1.2,.8],[-1.8,1.6,.9,.6],[5.6,1.2,.8,.7]].forEach(([r,a,o,l])=>{let c=ue(o,.03,l,"#2d2848",r,Pr(a)+.14,a,i.b);c.rotation.x=Bi}),bn(i,14,61,r=>{let a=-.9+r()*3.1;return[-3+r()*9,Pr(a)+.2,a]},.35,.7,{rx:Bi})}{let i=Sn("panel"),e=t=>{let n=new Ae;if(n.position.set(4.4,Pr(.9)+.28,.9),n.rotation.x=Bi,!t)ue(2.3,.9,1.5,"#4b342a",0,.45,0,n),ue(2,.62,.05,Ze("#f6ecd4",{emissive:"#ffcf8a",emissiveIntensity:.55}),0,.5,.78,n),[-.5,0,.5].forEach(s=>ue(.05,.62,.07,"#4b342a",s,.5,.8,n)),ue(2,.05,.07,"#4b342a",0,.5,.8,n),ue(2.7,.13,1.95,"#4f596f",0,1,0,n),ue(2.4,.1,1.7,"#4f596f",0,1.12,0,n),ue(2.7,.06,.1,"#c9a14a",0,.93,1,n);else{ue(2,.1,1.3,"#2d2848",0,.02,0,n);let s=ue(1.7,.07,.3,"#8d7f74",-.2,.18,.2,n);s.rotation.z=.4;let r=ue(1.2,.07,.3,"#8d7f74",.4,.14,-.2,n);r.rotation.z=-.5,r.rotation.y=.4}return n};i.f.add(e(!1)),i.b.add(e(!0)),bn(i,3,71,t=>[3.3+t()*2.2,Pr(.9)+.4,.5+t()*.8],.3,.5,{rx:Bi})}Dc.paint=Mc(200,340,(i,e,t)=>{let n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"#f4e3c4"),n.addColorStop(.55,"#f2c9a4"),n.addColorStop(1,"#e8b49a"),i.fillStyle=n,i.fillRect(0,0,e,t),i.fillStyle="#d9473a",i.beginPath(),i.arc(140,70,26,0,7),i.fill(),i.fillStyle="rgba(120,110,150,.55)",i.beginPath(),i.moveTo(0,200),i.lineTo(60,130),i.lineTo(110,185),i.lineTo(170,120),i.lineTo(e,190),i.lineTo(e,230),i.lineTo(0,230),i.fill(),i.fillStyle="rgba(70,70,100,.8)",i.beginPath(),i.moveTo(0,260),i.lineTo(50,210),i.lineTo(120,260),i.lineTo(e,230),i.lineTo(e,t),i.lineTo(0,t),i.fill(),i.strokeStyle="#2c2a2e",i.lineWidth=5,i.beginPath(),i.moveTo(40,t),i.bezierCurveTo(30,280,60,250,50,210),i.stroke(),i.fillStyle="#2c2a2e";for(let s=0;s<4;s++)i.beginPath(),i.ellipse(48+s*12,205+s*8,28-s*3,7,0,0,7),i.fill();i.fillStyle="#b8362b",i.fillRect(150,285,22,22)});{let i=Sn("ventana"),e=-2.84,t=2.4,n=ce+1.95;[[0,.9],[0,-.9]].forEach(([r,a])=>0);let s=(r,a)=>{ue(1.9,.12,.14,r,t,n+.9,e,a),ue(1.9,.12,.14,r,t,n-.9,e,a),ue(.12,1.9,.14,r,t-.9,n,e,a),ue(.12,1.9,.14,r,t+.9,n,e,a)};s("#f2d6c0",i.f),s(_i,i.b),ue(1.7,1.7,.05,Ze("#f6ecd4",{emissive:"#ffd9a8",emissiveIntensity:.6}),t,n,e+.02,i.f),[-.57,0,.57].forEach(r=>ue(.05,1.7,.07,"#4b342a",t+r,n,e+.06,i.f)),[-.57,0,.57].forEach(r=>ue(1.7,.05,.07,"#4b342a",t,n+r,e+.06,i.f)),ue(.07,1.9,.09,"#4b342a",t,n,e+.08,i.f),ue(1.7,1.7,.05,"#2b2644",t,n,e+.02,i.b),[[.8,.04,.5],[.04,.7,-.3],[.5,.04,-.6]].forEach(([r,a,o])=>{let l=ue(r,a,.02,"#e9e6f5",t+o*.3,n+o*.3,e+.06,i.b);l.rotation.z=o*2}),bn(i,3,81,r=>[t-.7+r()*1.4,n+.95,e+.1],.25,.4,{wall:!1})}}function Im(){{let i=Sn("librero"),e=-1.4,t=-2.55,n=["#c97d68","#6498b9","#cfb67c","#82ab84","#b0769c","#dad2bc"],s=r=>{let a=new Ae;a.position.set(e,ce,t);let o=r?_i:"#d4a98c";ue(.1,2.7,.6,o,-.8,1.35,0,a),ue(.1,2.7,.6,o,.8,1.35,0,a),ue(1.7,2.7,.05,r?"#8e7f7a":"#c49a7d",0,1.35,-.28,a),(r?[0,.9,1.8]:[0,.68,1.36,2.04,2.7]).forEach(h=>ue(1.7,.08,.6,o,0,h+.04,0,a));let c=$t(r?4:8);if(r){for(let h=0;h<6;h++){let u=ue(.14,.5,.38,n[h],-.6+h*.18,.34+(h>3?.9:0),0,a);u.rotation.z=(c()-.5)*.9}for(let h=0;h<5;h++){let u=ue(.14,.38,.28,n[h],-.5+c()*1.4,.1,.7+c()*.4,a);u.rotation.z=1.4+c()*.4,u.rotation.y=c()*3}}else for(let h=0;h<4;h++){let u=-.7;for(;u<.6;){let d=.1+c()*.12;ue(d,.45+c()*.12,.38,n[c()*6|0],u+d/2,.68*h+.3,0,a),u+=d+.01}}return r&&(a.rotation.z=.1),a};i.f.add(s(!1)),i.b.add(s(!0)),bn(i,4,91,r=>[e-.7+r()*1.4,ce+2.76,t+(r()-.5)*.3],.25,.4)}{let i=Sn("cama"),e=4.5,t=-1.6,n=s=>{let r=new Ae;if(r.position.set(e,ce,t),ue(2,.16,2.8,s?"#a9a2b4":"#f0e6cf",0,.14,0,r),s){let a=ue(1.5,.12,1.2,"#8d86a0",.2,.26,.3,r);a.rotation.y=.3;let o=ue(.9,.1,.3,"#bdb6c9",.2,.24,-1.05,r);o.rotation.y=.2}else{ue(1.9,.15,1.95,"#2f4a74",0,.29,.33,r),[-.55,.15,.85].forEach(o=>ue(1.92,.16,.1,"#f0e6cf",0,.3,.33+o,r));let a=new ge(new zt(.14,.14,.9,8),Ze("#d9c08a"));a.rotation.z=Math.PI/2,a.position.set(0,.34,-1.05),r.add(a)}return r};i.f.add(n(!1)),i.b.add(n(!0)),bn(i,4,101,s=>[e-.8+s()*1.6,ce+.4,t-1.1+s()*2.2],.3,.5)}rm();{let i=Sn("lampara"),e=1.5,t=-1,n=s=>{let r=new Ae;r.position.set(e,7.15,t),ue(.03,s?.7:1.7,.03,"#6a5058",0,s?.9:1.35,0,r);let a=new ge(new Wt(.46,14,10),new Es({color:s?"#9a919c":"#f8ebd0",side:An,emissive:s?"#000":"#ffcf8a",emissiveIntensity:s?0:.6,flatShading:!0}));if(a.position.y=.1,a.scale.set(1,.85,1),r.add(a),[.4,-.18].forEach(o=>{let l=new ge(new zt(.2,.2,.06,10),Ze("#2f2a2a"));l.position.y=o,r.add(l)}),s)r.rotation.z=.35;else{let o=new ge(new Wt(.14,10,8),new at({color:16773320}));o.position.y=-.02,r.add(o)}return r};i.f.add(n(!1)),i.b.add(n(!0)),bn(i,1,111,s=>[e,7.45,t],.25,.3)}{let i=Sn("luces"),e=$t(13),t=[16751202,16773328,15229002,16767392];for(let n=0;n<3;n++){let s=-3+n*3.1,r=s+3.1;for(let a=0;a<=4;a++){let o=a/4,l=Ou(s,r,o),c=7-.35*Math.sin(Math.PI*o),h=2.55,u=t[(n*5+a)%4],d=new ge(new Wt(.15,10,8),new at({color:u}));d.scale.set(1,1.25,1),d.position.set(l,c-.16,h),i.f.add(d);let p=Rt(Nt,u,1.5,0,!0);if(p.position.copy(d.position),Ve.add(p),It.bulbs.push(p),!(n===1&&a>0&&a<4)){let g=new ge(new Wt(.1,8,6),Ze("#8d8398"));g.position.set(l,c-.1,h),g.rotation.set(e(),e(),0),i.b.add(g)}if(a<4){let g=Ou(s,r,(a+1)/4),M=7-.35*Math.sin(Math.PI*(a+1)/4),m=ue(Math.hypot(g-l,M-c),.02,.02,"#6b4a35",(l+g)/2,(c+M)/2,h,i.f);if(m.rotation.z=Math.atan2(M-c,g-l),n!==1){let f=ue(Math.hypot(g-l,M-c),.02,.02,"#6a6076",(l+g)/2,(c+M)/2,h,i.b);f.rotation.z=m.rotation.z}}}}bn(i,2,121,n=>[-2+n()*7,7.3,2.4],.2,.3)}{let i=Sn("cuadro"),e=.55,t=ce+2.2,n=-2.7,s=r=>{let a=new Ae;a.position.set(e,t,n),r&&(a.rotation.z=.28),ue(.86,1.65,.04,r?_i:"#2f4a6b",0,0,0,a);let o=new ge(new Ms(.62,1.18),r?new Es({color:"#bcb5c8"}):new at({map:Dc.paint}));if(o.position.set(0,-.04,.03),a.add(o),[.84,-.84].forEach(l=>{let c=new ge(new zt(.045,.045,1,8),Ze("#5a3d2e"));c.rotation.z=Math.PI/2,c.position.set(0,l,.03),a.add(c)}),r){let l=ue(.7,.02,.02,"#eee9f7",0,0,.05,a);l.rotation.z=.8}return a};i.f.add(s(!1)),i.b.add(s(!0)),bn(i,1,131,r=>[e,t+.9,n+.1],.22,.3)}{let i=Sn("plantas"),e=$t(7);[[6.5,"#2f4a74",0],[7.3,"#9a6a3c",1]].forEach(([t,n,s])=>{ue(.62,.22,.5,n,t,ce+.11,3,i.f),ue(.62,.22,.5,"#a89b92",t,ce+.11,3,i.b);let r=new ge(new zt(.05,.09,.7,6),Ze("#5a3d33"));r.position.set(t,ce+.55,3),r.rotation.z=.25,i.f.add(r),(s?["#f3bccb","#eea9bd","#f8d0da","#e99fb4","#f3bccb"]:["#4f7a58","#5f8f66","#44704f"]).forEach((o,l)=>{let c=new ge(new wn(s?.2:.26,0),Ze(o));c.position.set(t+(l-1)*.18+(e()-.5)*.1,ce+.85+l%2*.14,3+(e()-.5)*.25),s||c.scale.set(1.5,.55,1.2),i.f.add(c)});for(let o=0;o<3;o++){let l=ue(.03,.45,.03,"#8a7a62",t+(e()-.5)*.4,ce+.55,3+(e()-.5)*.3,i.b);l.rotation.z=(e()-.5)*.8}}),bn(i,2,141,t=>[6.5+t()*.9,ce+.5,3],.25,.35)}{let i=Sn("nichos"),e=$t(17);[[-10.9,2.4],[-8.5,-.2],[-11.1,-2.7]].forEach(([t,n])=>{let s=(c,h,u,d,p)=>{let g=new ge(new zt(c,c,h,6),typeof u=="string"?Ze(u):u);return g.rotation.x=Math.PI/2,g.rotation.y=Math.PI/6,g.position.set(t,n,d),p.add(g),g};s(.95,.7,"#c89479",5.2,et),s(.78,.3,Ze("#383254"),5.55,i.b),s(.78,.3,new at({color:16769190}),5.55,i.f);let r=new ge(new Wt(.3,10,8),new Es({color:16774096,emissive:16766602,emissiveIntensity:.9,transparent:!0,opacity:.9}));r.position.set(t,n-.25,5.6),i.f.add(r);let a=Rt(Nt,16764806,3.2,0,!0);a.position.set(t,n,5.9),Ve.add(a),It.nichoGlow.push(a);let o=ue(.9,.02,.02,"#cfcbe0",t,n+.2,5.6,i.b);o.rotation.z=.5;let l=ue(.9,.02,.02,"#cfcbe0",t,n-.1,5.6,i.b);l.rotation.z=-.4}),bn(i,3,151,t=>[-11+t()*3,3.7,5.2],.3,.4)}}var fe={th:.3,ph:.15,r:16,tx:2.2,ty:5.6,tz:.5,tth:.3,tph:.15,tr:16,gx:2.2,gy:5.6,gz:.5,focusT:0},Lr=[2.2,5.6,.5],uM=()=>{fe.gx=xt(fe.gx,-4,9),fe.gy=xt(fe.gy,3,9),fe.gz=xt(fe.gz,-3,4)};function Ur(){fe.gx=Lr[0],fe.gy=Lr[1],fe.gz=Lr[2],fe.tr=16,fe.tth=.3,fe.tph=.15,fe.focusT=0}var Dr=i=>{fe.tr=xt(fe.tr*i,9,34)};function Za(i,e){let t=fe.r*.0016,n=Math.sin(fe.th),s=Math.cos(fe.th);fe.gx+=-i*s*t,fe.gz+=i*n*t,fe.gy+=e*t,fe.focusT=0,uM()}function Zu(i){fe.gx=i.focus[0],fe.gy=i.focus[1],fe.gz=i.focus[2],fe.tr=Math.min(fe.tr,14),fe.focusT=4.5}function Pm(){let i=document.createElement("div");i.id="camctl",i.style.cssText="position:fixed;right:max(10px,env(safe-area-inset-right));top:64px;z-index:6;display:flex;flex-direction:column;gap:8px",[["+","Acercar",()=>Dr(.8)],["\u2212","Alejar",()=>Dr(1.25)],["\u2302","Centrar vista",Ur]].forEach(([e,t,n])=>{let s=document.createElement("button");s.textContent=e,s.title=s.ariaLabel=t,s.style.cssText="width:44px;height:44px;border-radius:50%;border:1px solid var(--line);background:var(--panel);color:var(--ink);font:600 1.2rem system-ui;cursor:pointer;touch-action:manipulation",s.onclick=r=>{r.stopPropagation(),n()},i.appendChild(s)}),document.body.appendChild(i)}function Lm(){addEventListener("keydown",i=>{if(!it.started)return;let e=i.key;e==="+"||e==="="?Dr(.85):e==="-"||e==="_"?Dr(1.18):e==="r"||e==="R"||e==="0"?Ur():e==="ArrowLeft"?fe.tth=xt(fe.tth-.08,-.95,.95):e==="ArrowRight"?fe.tth=xt(fe.tth+.08,-.95,.95):e==="ArrowUp"?fe.tph=xt(fe.tph+.03,.03,.42):e==="ArrowDown"&&(fe.tph=xt(fe.tph-.03,.03,.42))})}function Dm(i,e){let t=it.T;fe.focusT>0&&(fe.focusT-=i,fe.focusT<=0&&(fe.gx=Lr[0],fe.gy=Lr[1],fe.gz=Lr[2],fe.tr=Math.max(fe.tr,16)));let n=1-Math.pow(.004,i);fe.th+=(fe.tth-fe.th)*n,fe.ph+=(fe.tph-fe.ph)*n,fe.r+=(fe.tr-fe.r)*n,fe.tx+=(fe.gx-fe.tx)*n*.6,fe.ty+=(fe.gy-fe.ty)*n*.6,fe.tz+=(fe.gz-fe.tz)*n*.6,e&&(fe.tth+=Math.sin(t*.12)*3e-4);let s=fe.th,r=fe.ph;pn.position.set(fe.tx+fe.r*Math.sin(s)*Math.cos(r),fe.ty+fe.r*Math.sin(r),fe.tz+fe.r*Math.cos(s)*Math.cos(r)),pn.lookAt(fe.tx,fe.ty,fe.tz)}var $u=i=>{let e=Ht[i].blobs;return e.length?1-e.reduce((t,n)=>t+n.userData.s,0)/e.length:1},Ns={all:0,items:{}};function Uc(){let i=0;Kt.forEach(e=>{let t=$u(e.id);Ns.items[e.id]=t,i+=t}),Ns.all=i/Kt.length,ie.best=Math.max(ie.best,Ns.all)}var hs=()=>.55*Math.min(1,Ns.all/.96)+.45*Ds()/Kt.length;function Ja(i){if(ie.repaired[i.id])return{k:"done",t:"Reparado"};if(cs(i).length)return{k:"locked",t:"Necesita: "+cs(i).map(Tc).join(", ")};let e=Ns.items[i.id]||0;return e<Xa?{k:"locked",t:"Limpia la zona \xB7 "+Math.round(e/Xa*100)+"%"}:Ls()<i.cost?{k:"locked",t:"Faltan "+(i.cost-Ls())+" tablas"}:{k:"ready",t:"Listo \xB7 "+i.cost+" tablas"}}var Ku=i=>{for(;i;){if(!i.visible)return!1;i=i.parent}return!0},Um=i=>Ht[i]&&Ht[i].blobs.some(e=>e.visible),Fs=()=>xt(928/fe.r,34,90),Ju=new P;function $a(i,e,t){let n=Gn.getBoundingClientRect(),s=[],r=1e9;return Object.values(Ht).forEach(a=>{Ku(a.g)&&a.blobs.forEach(o=>{if(!o.visible)return;o.getWorldPosition(Ju);let l=Ju.distanceTo(pn.position),c=Ju.clone().project(pn);if(c.z>1)return;let h=(c.x+1)/2*n.width+n.left,u=(1-c.y)/2*n.height+n.top,d=Math.hypot(h-i,u-e);d<t&&(s.push({m:o,d:l,dd:d,it:a}),l<r&&(r=l))})}),s.filter(a=>a.d<r+5)}var Nm=0;function Pt(i){let e=gt("toast");e.textContent=i,e.classList.add("show"),clearTimeout(Nm),Nm=setTimeout(()=>e.classList.remove("show"),3200)}var Fm={},Nr=document.createElement("div");Nr.className="grp";function Om(i){em.forEach((e,t)=>{let n=document.createElement("div");n.className="grp";let s=document.createElement("span");s.className="lab",s.textContent=e,n.appendChild(s),Kt.filter(r=>r.tier===t).forEach(r=>{let a=document.createElement("button");a.type="button",a.className="chip",a.innerHTML="<b></b><small></small>",a.firstChild.textContent=r.name,a.onclick=()=>i(r),n.appendChild(a),Fm[r.id]=a}),gt("chips").appendChild(n)}),gt("chips").appendChild(Nr)}function Ka(){Nr.textContent="";let i=document.createElement("span");i.className="lab",i.textContent="Colecci\xF3n",Nr.appendChild(i);let e=Kt.filter(t=>ie.repaired[t.id]);if(!e.length){let t=document.createElement("span");t.className="loot",t.textContent="Vac\xEDa. Cada reparaci\xF3n te da un objeto.",Nr.appendChild(t)}e.forEach(t=>{let n=document.createElement("span");n.className="loot on",n.textContent=t.reward[0],n.title=t.reward[1],Nr.appendChild(n)})}function zi(){Uc();let i=hs();gt("fill").style.width=(i*100).toFixed(1)+"%",Ga(gt("pct"),Math.round(i*100)+"%"),Ga(gt("mats"),"Tablas: "+Math.max(0,Ls())),Kt.forEach(e=>{let t=Ja(e),n=Fm[e.id],s="chip "+t.k;n.className!==s&&(n.className=s),Ga(n.lastChild,t.t)})}var yi,ju=null;function Bm(i){yi=document.createElement("button"),yi.style.cssText="position:fixed;top:104px;left:50%;transform:translateX(-50%);z-index:6;background:var(--panel);border:1px solid var(--line);color:var(--ink);padding:7px 14px;border-radius:99px;font:inherit;font-size:.82rem;cursor:pointer;max-width:80%;opacity:0;transition:opacity .5s;pointer-events:none",yi.id="nextb",document.body.appendChild(yi),yi.onclick=()=>{ju&&i(ju)}}function zm(){let i=Kt.find(t=>!ie.repaired[t.id]&&!cs(t).length);if(ju=i||null,!i||!it.started){yi.style.opacity=0,yi.style.pointerEvents="none";return}let e=Ja(i);Ga(yi,"Siguiente: "+(e.k==="ready"?"repara ":"limpia ")+i.name.toLowerCase()+(e.k==="ready"?" (toca su bot\xF3n)":"")),yi.style.opacity=.92,yi.style.pointerEvents="auto"}var Fr=!1,Qu=0;function km(i,e){e=e||0;let t=["Inhala","Sost\xE9n","Exhala"],n=[4e3,1e3,6e3],s=gt("bcircle");if(Fr){if(e>=15){gt("btxt").textContent="Gracias por respirar",s.style.transform="scale(.7)",Qu=setTimeout(()=>{Fr=!1,gt("breath").hidden=!0},2800);return}gt("btxt").textContent=t[i];try{i===0&&Qe.breathTone(!0,5),i===2&&Qe.breathTone(!1,6)}catch{}s.style.transition="transform "+n[i]/1e3+"s ease-in-out",s.style.transform=i===0?"scale(1.5)":i===2?"scale(.7)":s.style.transform,Qu=setTimeout(()=>km((i+1)%3,e+1),n[i])}}function Hm(i){PZ.more(gt("top"),[gt("brt"),gt("snd"),gt("rst")].concat(UX.btns("",{hand:!0,wear:!0}))),gt("snd").onclick=()=>{Qe.on=!Qe.on,Qe.ctx&&Qe.setOn(Qe.on),gt("snd").textContent="Sonido: "+(Qe.on?"s\xED":"no")},gt("rst").onclick=i,gt("brt").onclick=()=>{Fr=!Fr,gt("breath").hidden=!Fr,clearTimeout(Qu),Fr&&(gt("bcircle").style.transform="scale(.7)",km(0))}}function Vm(){let i=gt("panel"),e=()=>document.documentElement.style.setProperty("--ph",i.offsetHeight+"px");e(),addEventListener("resize",e);try{new ResizeObserver(e).observe(i)}catch{}}var nn,vi,Nc=0;function Gm(){nn=new Ae;{let i=Ze("#e8d6c0"),e=new ge(new Wt(.42,12,10),i);e.scale.set(1.3,.7,.9),e.position.y=.25,nn.add(e);let t=new ge(new Wt(.26,10,8),i);t.position.set(.5,.3,.05),nn.add(t),[[.58,.54],[.42,.54]].forEach(([s,r],a)=>{let o=new ge(new Qt(.08,.16,4),i);o.position.set(s,r,.05+(a?-.1:.1)),nn.add(o)});let n=new ge(new kn(.3,.06,6,12,4),Ze("#d9b995"));n.position.set(-.35,.12,.2),n.rotation.x=1.5,nn.add(n)}nn.position.set(4.3,ce+.05,2.6),nn.rotation.y=-.5,nn.userData.itemId="gato",nn.visible=!1,Ve.add(nn),vi=Rt(Nt,16752560,.5,0,!0),vi.visible=!1,Ve.add(vi)}function Wm(){vi.position.set(nn.position.x+.4,nn.position.y+1,nn.position.z),vi.visible=!0,Nc=1.6,Qe.meow(),Qe.chime(.2,2),Pt("Ronronea\u2026"),UX.hap(25)}function Xm(i,e){nn.visible=Object.keys(ie.repaired).length>0,vi.visible&&(Nc-=i,vi.position.y+=i*.6,vi.material.opacity=xt(Nc,0,1),vi.scale.setScalar(.7+.2*Math.sin(e*8)),Nc<=0&&(vi.visible=!1)),nn.scale.y=1+.03*Math.sin(e*1.6)}var qt={on:!1,t:0,dur:1.25,p:new P,d:new P,next:0},qm=9,Bc=[],Ft={on:!1,shown:!1,armT:1/0,t:0,len:46,nextB:0,lan:[]},dM=12,Fc=new Float32Array(120),Ym=[],Oc,ed,us;function Zm(){qt.next=30+Math.random()*40;for(let i=0;i<qm;i++){let e=Rt(Nt,i?13623551:16777215,Math.max(1.6,5.2-i*.45),0,!0);e.material.fog=!1,e.visible=!1,Ve.add(e),Bc.push(e)}Oc=new Et;for(let i=0;i<40;i++)Ym.push([-4+Math.random()*13,ce+.6+Math.random()*3,2+Math.random()*3,Math.random()*6.28]);Oc.setAttribute("position",new Gt(Fc,3)),ed=new fi({color:16771496,size:.5,map:Nt,transparent:!0,opacity:0,blending:Ui,depthWrite:!1}),us=new Ii(Oc,ed),us.frustumCulled=!1,us.visible=!1,Ve.add(us);for(let i=0;i<dM;i++){let e=new Ae,t=new at({color:i%3?16758891:16229304,transparent:!0,opacity:0});e.add(new ge(new zt(.2,.15,.34,8),t));let n=Rt(Nt,16761466,2.2,0,!0);e.add(n),e.visible=!1,Ve.add(e),Ft.lan.push({g:e,bm:t,gl:n,x0:-3+Math.random()*10,z0:3.2+Math.random()*1.6,del:i*1.1+Math.random()*.8,sp:.8+Math.random()*.5,ph:Math.random()*6.28})}}function td(){if(qt.on)return;let i=Math.random()<.5?-1:1;qt.p.set(-110*i+(Math.random()-.5)*60,95+Math.random()*70,-340),qt.d.set(i*150,-52-Math.random()*20,0),qt.on=!0,qt.t=0,Bc.forEach(e=>e.visible=!0),UX.cap("Estrella fugaz",25e3),Qe.sparkle()}function Jm(i){if(!qt.on)return;qt.t+=i;let e=Math.sin(Math.PI*xt(qt.t/qt.dur));Bc.forEach((t,n)=>{let s=qt.t-n*.03;t.position.copy(qt.p).addScaledVector(qt.d,s),t.material.opacity=e*(1-n/qm)*.95}),qt.t>=qt.dur&&(qt.on=!1,Bc.forEach(t=>t.visible=!1))}function nd(){Ft.on||Ft.shown||(Ft.shown=!0,Ft.on=!0,Ft.t=0,Ft.nextB=.3,us.visible=!0,Pt("Los farolillos suben al cielo"),UX.hap([20,80,20,80,40]))}function $m(i){if(!Ft.on)return;Ft.t+=i;let e=Ft.t;ed.opacity=.85*xt(e/4)*xt((Ft.len-e)/8);for(let t=0;t<40;t++){let n=Ym[t],s=it.T*.35+n[3];Fc[t*3]=n[0]+Math.sin(s*2+t)*1.6,Fc[t*3+1]=n[1]+Math.sin(s*1.3+t)*.8+e*.04,Fc[t*3+2]=n[2]+Math.cos(s*1.7+t)*1.4}Oc.attributes.position.needsUpdate=!0,Ft.lan.forEach(t=>{let n=e-t.del;if(n<0){t.g.visible=!1;return}t.g.visible=!0;let s=ce+1.2+n*t.sp+n*n*.012;t.g.position.set(t.x0+Math.sin(n*.5+t.ph)*1.2+n*.12,s,t.z0+Math.cos(n*.4+t.ph)*.6-n*.1);let r=xt(n/2)*xt((ce+24-s)/8);t.bm.opacity=r*.9,t.gl.material.opacity=r*.75*(.85+.15*Math.sin(it.T*3+t.ph)),r<=0&&n>3&&(t.g.visible=!1)}),e>Ft.nextB&&e<34&&(Ft.nextB=e+2.2+Math.random()*2,Qe.chime(Math.random()*1.6-.8,Math.random()*5|0),Math.random()<.5&&Qe.lantern(Math.random()-.5)),e>Ft.len&&(Ft.on=!1,us.visible=!1,Ft.lan.forEach(t=>t.g.visible=!1))}function fM(){!ie.done&&hs()>=.995&&(ie.done=!0,Pt("Tu caba\xF1a est\xE1 lista. Buen trabajo."),UX.hap([20,80,20,80,40]),Fn())}function ja(i){if(ie.repaired[i.id]){Pt(i.name+" ya est\xE1 reparado");return}if(Ja(i).k!=="ready"){cs(i).length?Pt("Primero repara: "+cs(i).map(Tc).join(", ")):(Ns.items[i.id]||0)<Xa?Pt("Limpia m\xE1s esa zona antes de repararla"):Pt("Faltan "+(i.cost-Ls())+" tablas. Sigue limpiando.");return}ie.spent+=i.cost,ie.repaired[i.id]=!0,Ht[i.id].blobs.forEach(t=>{t.userData.s=Math.min(t.userData.s,0)}),Ht[i.id].blobs.forEach(Fi),Rr(),Us(i.focus),Qe.chime((i.focus[0]-1.5)/12,Kt.indexOf(i)%5),Qe.creak(),UX.hap([12,60,12]),Ds()===Kt.length&&(Ft.armT=it.T+2.5),Pt(i.name+" reparado. Ganaste: "+i.reward[0]),zi(),Ka(),fM(),Fn()}function Km(){UX.ask("\xBFReiniciar la caba\xF1a desde cero?",()=>{im(),zi(),Ka(),Pt("Caba\xF1a reiniciada")})}var zc=[["helecho","suelo","Helecho en maceta",2],["lavanda","suelo","Lavanda",2],["farolpapel","suelo","Farol de papel",3],["tetera","suelo","Tetera humeante",3],["banquito","suelo","Banquito con manta",4],["libros","suelo","Libros con vela",4],["campanilla","colgante","Campanilla de viento",3],["atrapa","colgante","Atrapasue\xF1os",3],["estrellas","colgante","M\xF3vil de estrellas",4],["farolillos","colgante","Farolillos de papel",3],["reloj","pared","Reloj de pared",3],["guitarra","pared","Guitarra",4],["estantito","pared","Estantito con frascos",3],["mapa","pared","Mapa de la monta\xF1a",2],["mojon","roca","Moj\xF3n de piedras",2],["farolpiedra","roca","Farol de piedra",3],["floresroca","roca","Flores de roca",2],["farolpuente","colgante","Linterna del puente",0,0],["petalos","pared","Rama de sakura",0,3],["campanatemplo","colgante","Campana del templo",0,5],["frasco","suelo","Frasco de agua de cascada",0,6],["lotocuenco","suelo","Cuenco de loto",0,9]].map(([i,e,t,n,s])=>({id:i,kind:e,name:t,cost:n,gate:s})),id={gato:{name:"Un gato",gift:"banquito",notes:["Este gato no es de nadie, pero se sienta justo donde Mara dejaba su silla.","Ronronea cuando la l\xE1mpara est\xE1 encendida. Dicen que Mara hac\xEDa lo mismo."]},zorro:{name:"Un zorro",gift:"mojon",notes:["Un zorro curioso olfatea tus escalones. Alguien le dejaba pan aqu\xED cada tarde.","Deja una piedra pulida junto a la puerta. Parece un regalo."]},buho:{name:"Un b\xFAho",gift:"reloj",notes:["El b\xFAho vigila el barandal. Mara lo llamaba \xABel capataz\xBB.","Ulula suave. Del otro lado de la monta\xF1a, otro le responde."]},mariposa:{name:"Una mariposa lunar",gift:"lavanda",notes:["Una mariposa lunar descansa en tu caba\xF1a. Solo vuelan de noche, como los mapas de Mara.","Sus alas dibujan l\xEDneas parecidas a un mapa de la monta\xF1a."]}};function sd(i){let e=[["Habitar","Settle in","\u66AE\u3089\u3059"],["Volver a reparar","Back to repairs","\u4FEE\u7406\u306B\u3082\u3069\u308B"],["Recuerdos","Keepsakes","\u601D\u3044\u51FA"],["Preparar t\xE9","Make tea","\u304A\u8336\u3092\u3044\u308C\u308B"],["Regar plantas","Water plants","\u690D\u7269\u306B\u6C34\u3092\u3084\u308B"],["Diario de la caba\xF1a","Cabin journal","\u5C0F\u5C4B\u306E\u65E5\u8A18"],["Toca un c\xEDrculo de la caba\xF1a para decorar ese lugar.","Tap a circle in the cabin to decorate that spot.","\u5C0F\u5C4B\u306E\u4E38\u3092\u30BF\u30C3\u30D7\u3057\u3066\u3001\u305D\u306E\u5834\u6240\u3092\u98FE\u308A\u307E\u3057\u3087\u3046\u3002"],["Quitar","Remove","\u306F\u305A\u3059"],["Colocar","Place","\u7F6E\u304F"],["Comprar con recuerdos","Buy with keepsakes","\u601D\u3044\u51FA\u3067\u8CB7\u3046"],["Cerrar","Close","\u9589\u3058\u308B"],["A\xFAn vac\xEDo. Los visitantes dejan notas sobre quien vivi\xF3 aqu\xED.","Still empty. Visitors leave notes about whoever lived here.","\u307E\u3060\u7A7A\u3063\u307D\u3067\u3059\u3002\u8A2A\u308C\u305F\u751F\u304D\u7269\u304C\u3001\u3053\u3053\u306B\u4F4F\u3093\u3067\u3044\u305F\u4EBA\u306E\u8A71\u3092\u6B8B\u3057\u3066\u304F\u308C\u307E\u3059\u3002"],["Porche","Porch","\u30DD\u30FC\u30C1"],["Junto a la ventana","By the window","\u7A93\u306E\u305D\u3070"],["Porche, junto al barandal","Porch, by the railing","\u30DD\u30FC\u30C1\u306E\u624B\u3059\u308A\u306E\u305D\u3070"],["Alero","Eaves","\u8ED2\u4E0B"],["Pared","Wall","\u58C1"],["Mirador de roca","Rock lookout","\u5CA9\u306E\u5C55\u671B\u53F0"],["Helecho en maceta","Potted fern","\u9262\u690D\u3048\u306E\u30B7\u30C0"],["Lavanda","Lavender","\u30E9\u30D9\u30F3\u30C0\u30FC"],["Farol de papel","Paper lantern","\u7D19\u3061\u3087\u3046\u3061\u3093"],["Tetera humeante","Steaming teapot","\u6E6F\u6C17\u306E\u7ACB\u3064\u6025\u9808"],["Banquito con manta","Stool with blanket","\u30D6\u30E9\u30F3\u30B1\u30C3\u30C8\u306E\u30B9\u30C4\u30FC\u30EB"],["Libros con vela","Books with a candle","\u308D\u3046\u305D\u304F\u3068\u672C"],["Campanilla de viento","Wind chime","\u98A8\u9234"],["Atrapasue\xF1os","Dreamcatcher","\u30C9\u30EA\u30FC\u30E0\u30AD\u30E3\u30C3\u30C1\u30E3\u30FC"],["M\xF3vil de estrellas","Star mobile","\u661F\u306E\u30E2\u30D3\u30FC\u30EB"],["Farolillos de papel","Paper lanterns","\u7D19\u306E\u30E9\u30F3\u30BF\u30F3"],["Reloj de pared","Wall clock","\u58C1\u639B\u3051\u6642\u8A08"],["Guitarra","Guitar","\u30AE\u30BF\u30FC"],["Estantito con frascos","Little shelf with jars","\u74F6\u3092\u4E26\u3079\u305F\u5C0F\u3055\u306A\u68DA"],["Mapa de la monta\xF1a","Mountain map","\u5C71\u306E\u5730\u56F3"],["Linterna del puente","Bridge lantern","\u6A4B\u306E\u30E9\u30F3\u30BF\u30F3"],["Rama de sakura","Sakura branch","\u685C\u306E\u679D"],["Campana del templo","Temple bell","\u5BFA\u306E\u9418"],["Frasco de agua de cascada","Waterfall water jar","\u6EDD\u306E\u6C34\u306E\u74F6"],["Cuenco de loto","Lotus bowl","\u84EE\u306E\u9262"],["Del r\xEDo","From the river","\u5DDD\u304B\u3089"],["Moj\xF3n de piedras","Stone cairn","\u77F3\u7A4D\u307F"],["Farol de piedra","Stone lantern","\u77F3\u706F\u7C60"],["Flores de roca","Rock flowers","\u5CA9\u306E\u82B1"],["Llega un visitante","A visitor arrives","\u8A2A\u554F\u8005\u304C\u6765\u307E\u3057\u305F"],["Campanilla de viento","Wind chime","\u98A8\u9234"],["Tetera","Teapot","\u6025\u9808"],["Preparas t\xE9. El vapor sube despacio. Qu\xE9 calma.","You make tea. The steam rises slowly. How calming.","\u304A\u8336\u3092\u3044\u308C\u307E\u3059\u3002\u6E6F\u6C17\u304C\u3086\u3063\u304F\u308A\u6607\u308A\u307E\u3059\u3002\u843D\u3061\u7740\u304D\u307E\u3059\u306D\u3002"],["Primero repara las plantas","Repair the plants first","\u5148\u306B\u690D\u7269\u3092\u76F4\u3057\u307E\u3057\u3087\u3046"],["Riegas las plantas. Huelen a campo.","You water the plants. They smell like the countryside.","\u690D\u7269\u306B\u6C34\u3092\u3084\u308A\u307E\u3059\u3002\u91CE\u539F\u306E\u9999\u308A\u304C\u3057\u307E\u3059\u3002"],["Te dej\xF3: ","He left you: ","\u8D08\u308A\u7269: "],["La caba\xF1a ya se puede habitar: toca \xABHabitar\xBB","The cabin is ready to live in: tap \u201CSettle in\u201D","\u5C0F\u5C4B\u306B\u66AE\u3089\u305B\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002\u300C\u66AE\u3089\u3059\u300D\u3092\u30BF\u30C3\u30D7"],["Este gato no es de nadie, pero se sienta justo donde Mara dejaba su silla.","This cat belongs to no one, but sits right where Mara used to leave her chair.","\u3053\u306E\u732B\u306F\u8AB0\u306E\u3082\u306E\u3067\u3082\u3042\u308A\u307E\u305B\u3093\u304C\u3001\u30DE\u30E9\u304C\u6905\u5B50\u3092\u7F6E\u3044\u3066\u3044\u305F\u5834\u6240\u306B\u3061\u3087\u3053\u3093\u3068\u5EA7\u308A\u307E\u3059\u3002"],["Ronronea cuando la l\xE1mpara est\xE1 encendida. Dicen que Mara hac\xEDa lo mismo.","It purrs when the lamp is on. They say Mara did the same.","\u30E9\u30F3\u30D7\u304C\u3068\u3082\u308B\u3068\u5589\u3092\u9CF4\u3089\u3057\u307E\u3059\u3002\u30DE\u30E9\u3082\u305D\u3046\u3060\u3063\u305F\u305D\u3046\u3067\u3059\u3002"],["Un zorro curioso olfatea tus escalones. Alguien le dejaba pan aqu\xED cada tarde.","A curious fox sniffs at your steps. Someone used to leave it bread here every evening.","\u597D\u5947\u5FC3\u65FA\u76DB\u306A\u30AD\u30C4\u30CD\u304C\u968E\u6BB5\u306E\u306B\u304A\u3044\u3092\u304B\u304E\u307E\u3059\u3002\u6BCE\u5915\u3001\u8AB0\u304B\u304C\u3053\u3053\u306B\u30D1\u30F3\u3092\u7F6E\u3044\u3066\u3044\u307E\u3057\u305F\u3002"],["Deja una piedra pulida junto a la puerta. Parece un regalo.","It leaves a polished stone by the door. It looks like a gift.","\u6238\u53E3\u306B\u307F\u304C\u304B\u308C\u305F\u77F3\u3092\u7F6E\u3044\u3066\u3044\u304D\u307E\u3057\u305F\u3002\u8D08\u308A\u7269\u306E\u3088\u3046\u3067\u3059\u3002"],["El b\xFAho vigila el barandal. Mara lo llamaba \xABel capataz\xBB.","The owl watches over the railing. Mara called him \u201Cthe foreman\u201D.","\u30D5\u30AF\u30ED\u30A6\u304C\u624B\u3059\u308A\u3092\u898B\u5F35\u3063\u3066\u3044\u307E\u3059\u3002\u30DE\u30E9\u306F\u300C\u73FE\u5834\u76E3\u7763\u300D\u3068\u547C\u3093\u3067\u3044\u307E\u3057\u305F\u3002"],["Ulula suave. Del otro lado de la monta\xF1a, otro le responde.","It hoots softly. From the far side of the mountain, another answers.","\u3084\u3055\u3057\u304F\u9CF4\u304F\u3068\u3001\u5C71\u306E\u5411\u3053\u3046\u304B\u3089\u3082\u3046\u4E00\u7FBD\u304C\u7B54\u3048\u307E\u3059\u3002"],["Una mariposa lunar descansa en tu caba\xF1a. Solo vuelan de noche, como los mapas de Mara.","A luna moth rests in your cabin. They only fly at night, like Mara\u2019s maps.","\u30AA\u30CA\u30AC\u30DF\u30BA\u30A2\u30AA\u304C\u5C0F\u5C4B\u3067\u4F11\u3093\u3067\u3044\u307E\u3059\u3002\u591C\u306B\u3057\u304B\u98DB\u3070\u306A\u3044\u3001\u30DE\u30E9\u306E\u5730\u56F3\u306E\u3088\u3046\u306A\u86FE\u3067\u3059\u3002"],["Sus alas dibujan l\xEDneas parecidas a un mapa de la monta\xF1a.","Its wings trace lines like a map of the mountain.","\u305D\u306E\u7FBD\u306E\u6A21\u69D8\u306F\u3001\u5C71\u306E\u5730\u56F3\u306E\u3088\u3046\u3067\u3059\u3002"],["Te faltan ","You are short by ","\u8DB3\u308A\u307E\u305B\u3093: "],["Un visitante deja una nota: ","A visitor leaves a note: ","\u8A2A\u554F\u8005\u304C\u30E1\u30E2\u3092\u6B8B\u3057\u307E\u3057\u305F: "]];i.add(e),i.rx([[/^(.+) · (\d+)$/,(t,n,s)=>s(t[1])+" \xB7 "+t[2]],[/^Recuerdos: (\d+)$/,(t,n)=>(n===1?"Keepsakes: ":"\u601D\u3044\u51FA: ")+t[1]],[/^(.+) · (\d+) s$/,(t,n,s)=>s(t[1])+" \xB7 "+t[2]+" s"],[/^(.+) colocado$/,(t,n,s)=>n===1?s(t[1])+" placed":s(t[1])+"\u3092\u7F6E\u304D\u307E\u3057\u305F"],[/^Te faltan (\d+) recuerdos\. Prepara té o espera visitas\.$/,(t,n)=>n===1?"You need "+t[1]+" more keepsakes. Make tea or wait for visitors.":"\u601D\u3044\u51FA\u304C\u3042\u3068"+t[1]+"\u500B\u5FC5\u8981\u3067\u3059\u3002\u304A\u8336\u3092\u3044\u308C\u308B\u304B\u3001\u8A2A\u554F\u8005\u3092\u5F85\u3061\u307E\u3057\u3087\u3046\u3002"],[/^(.+) · Te dejó: (.+)$/,(t,n,s)=>s(t[1])+" \xB7 "+(n===1?"He left you: ":"\u8D08\u308A\u7269: ")+s(t[2])]])}var jm="zen-sand";var Qm=[[170,150,34],[300,235,24],[470,120,30]];function e0(i){i.add([["Jard\xEDn zen","Zen garden","\u7985\u306E\u5EAD"],["Rastrillar la arena con calma","Rake the sand slowly","\u7802\u3092\u3086\u3063\u304F\u308A\u304B\u304D\u5206\u3051\u308B"],["Olas alrededor de las piedras","Ripples around the stones","\u77F3\u306E\u307E\u308F\u308A\u306B\u6CE2\u7D0B"],["Alisar","Smooth","\u306A\u3089\u3059"],["Cerrar","Close","\u9589\u3058\u308B"],["Se abri\xF3 el jard\xEDn zen: ya le\xEDste todas las cartas de Mara","The zen garden is open: you have read all of Mara\u2019s letters","\u7985\u306E\u5EAD\u304C\u958B\u304D\u307E\u3057\u305F\u3002\u30DE\u30E9\u306E\u624B\u7D19\u3092\u3059\u3079\u3066\u8AAD\u307F\u307E\u3057\u305F"],["Arrastra el dedo sobre la arena. No hay prisa ni forma correcta.","Drag your finger over the sand. No rush, no right way.","\u7802\u306E\u4E0A\u3092\u6307\u3067\u306A\u305E\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u6025\u3050\u5FC5\u8981\u3082\u3001\u6B63\u3057\u3044\u5F62\u3082\u3042\u308A\u307E\u305B\u3093\u3002"],["Un momento de calma te dej\xF3 un recuerdo","A calm moment left you a keepsake","\u9759\u304B\u306A\u3072\u3068\u3068\u304D\u304C\u601D\u3044\u51FA\u3092\u3072\u3068\u3064\u6B8B\u3057\u307E\u3057\u305F"],["Mara dej\xF3 escrito: \xABel jard\xEDn no se termina, se acompa\xF1a\xBB","Mara wrote: \u201Ca garden is never finished, only kept company\u201D","\u30DE\u30E9\u306F\u3053\u3046\u66F8\u304D\u307E\u3057\u305F\u3002\u300C\u5EAD\u306F\u5B8C\u6210\u3055\u305B\u308B\u3082\u306E\u3067\u306F\u306A\u304F\u3001\u5BC4\u308A\u305D\u3046\u3082\u306E\u300D"]])}var rd=(i,e)=>{let t=i.ltr||{};for(let n=0;n<(e||11);n++)if(!t[n])return!1;return!0};function t0(i){let e=i.tr||(A=>A),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;z-index:80;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;background:rgba(14,16,36,.94);color:#fbf1e0;font:500 .9rem system-ui;padding:12px";let n=document.createElement("div");n.textContent=e("Jard\xEDn zen"),n.style.cssText="font:600 1.15rem system-ui";let s=document.createElement("canvas");s.width=640,s.height=380,s.style.cssText="position:relative;inset:auto;display:block;height:auto;z-index:auto;width:min(94vw,640px);max-height:58vh;aspect-ratio:640/380;border-radius:18px;border:1px solid #5a609a;touch-action:none;box-shadow:0 10px 40px rgba(0,0,0,.45);cursor:crosshair";let r=document.createElement("div");r.textContent=e("Arrastra el dedo sobre la arena. No hay prisa ni forma correcta."),r.style.cssText="opacity:.7;font-size:.8rem;text-align:center;max-width:90vw";let a=document.createElement("div");a.style.cssText="display:flex;gap:8px;flex-wrap:wrap;justify-content:center";let o=(A,L)=>{let B=document.createElement("button");return B.type="button",B.textContent=e(A),B.style.cssText="min-height:44px;padding:8px 16px;border-radius:99px;border:1px solid #5a609a;background:#363a66;color:#fbf1e0;font:inherit;cursor:pointer",B.onclick=L,a.appendChild(B),B};t.append(n,s,r,a),document.body.appendChild(t);let l=s.getContext("2d"),c=document.createElement("canvas");c.width=640,c.height=380;let h=c.getContext("2d"),u=()=>{h.fillStyle="#d9c9a3",h.fillRect(0,0,640,380);for(let A=0;A<2400;A++)h.fillStyle="rgba("+(A%2?"120,100,70":"255,245,215")+",.07)",h.fillRect(Math.random()*640,Math.random()*380,1.4,1.4)};u();let d=!1;try{let A=localStorage.getItem(jm);if(A){let L=new Image;L.onload=()=>{h.drawImage(L,0,0),f()},L.src=A}}catch{}let p=()=>{if(d){d=!1;try{localStorage.setItem(jm,c.toDataURL("image/png"))}catch{}}},g=(A,L,B)=>{l.fillStyle="rgba(0,0,0,.22)",l.beginPath(),l.ellipse(A+5,L+B*.7,B*1.05,B*.45,0,0,7),l.fill();let z=l.createRadialGradient(A-B*.35,L-B*.4,B*.1,A,L,B*1.1);z.addColorStop(0,"#9d9aa6"),z.addColorStop(1,"#4f4d5a"),l.fillStyle=z,l.beginPath(),l.ellipse(A,L,B,B*.78,0,0,7),l.fill(),l.fillStyle="rgba(110,150,100,.5)",l.beginPath(),l.ellipse(A-B*.2,L-B*.5,B*.4,B*.14,0,0,7),l.fill()},M=(A,L)=>{l.fillStyle="#6b4d3a",l.fillRect(A-4,L-34,8,34),l.fillStyle="#8b6a50",l.fillRect(A-28,L-6,56,10);for(let[B,z,K]of[[-14,-42,15],[10,-52,18],[22,-34,12]])l.fillStyle="#5d9a6c",l.beginPath(),l.arc(A+B,L+z,K,0,7),l.fill(),l.fillStyle="rgba(255,255,255,.12)",l.beginPath(),l.arc(A+B-4,L+z-5,K*.5,0,7),l.fill()},m=(A,L)=>{let B="#8a8896";l.fillStyle=B,l.fillRect(A-14,L-8,28,8),l.fillRect(A-5,L-34,10,28),l.fillRect(A-17,L-42,34,8),l.fillRect(A-11,L-62,22,20),l.fillStyle="rgba(255,225,160,.95)",l.fillRect(A-6,L-57,12,11),l.fillStyle=B,l.beginPath(),l.moveTo(A-19,L-62),l.lineTo(A,L-78),l.lineTo(A+19,L-62),l.fill();let z=l.createRadialGradient(A,L-52,2,A,L-52,60);z.addColorStop(0,"rgba(255,200,120,.35)"),z.addColorStop(1,"rgba(255,200,120,0)"),l.fillStyle=z,l.fillRect(A-60,L-112,120,120)};function f(){l.drawImage(c,0,0);for(let[L,B,z]of Qm)g(L,B,z);M(560,330),m(70,340);let A=l.createRadialGradient(640/2,380/2,380*.35,640/2,380/2,380*.9);A.addColorStop(0,"rgba(20,20,40,0)"),A.addColorStop(1,"rgba(20,20,40,.35)"),l.fillStyle=A,l.fillRect(0,0,640,380)}f();let x=null,b=null,_=null,S=()=>{try{if(x=i.ctx&&i.ctx(),!x||b)return;let A=x.createBiquadFilter();if(A.type="bandpass",A.frequency.value=1100,A.Q.value=.6,b=x.createGain(),b.gain.value=0,_=window.UX&&UX.pinkSrc?UX.pinkSrc(x,1):null,!_)return;_.connect(A),A.connect(b),window.UX?UX.out(x,b):b.connect(x.destination),_.start(0)}catch{b=null}},T=A=>{try{b&&x&&b.gain.setTargetAtTime(A,x.currentTime,.05)}catch{}},R=null,y=0,w=0,I=0,D=0,N=A=>{let L=s.getBoundingClientRect();return[(A.clientX-L.left)/L.width*640,(A.clientY-L.top)/L.height*380]};s.addEventListener("pointerdown",A=>{s.setPointerCapture(A.pointerId),R=N(A),S(),T(.012)}),s.addEventListener("pointermove",A=>{if(!R)return;let L=N(A),B=L[0]-R[0],z=L[1]-R[1],K=Math.hypot(B,z);if(K<2)return;let V=-z/K,Y=B/K;for(let j=-2;j<=2;j++){let Pe=V*j*8,Ce=Y*j*8;h.lineCap="round",h.lineWidth=3.2,h.strokeStyle="rgba(95,78,52,.34)",h.beginPath(),h.moveTo(R[0]+Pe+1,R[1]+Ce+1),h.lineTo(L[0]+Pe+1,L[1]+Ce+1),h.stroke(),h.lineWidth=2,h.strokeStyle="rgba(255,248,225,.5)",h.beginPath(),h.moveTo(R[0]+Pe-1,R[1]+Ce-1),h.lineTo(L[0]+Pe-1,L[1]+Ce-1),h.stroke()}if(R=L,y+=K,d=!0,f(),T(Math.min(.03,.006+K*.0012)),y>1100&&w<3){y=0,w++;try{i.addMem&&i.addMem(1),i.say&&i.say(e("Un momento de calma te dej\xF3 un recuerdo"))}catch{}}});let k=()=>{R=null,T(0),p()};s.addEventListener("pointerup",k),s.addEventListener("pointercancel",k),o("Olas alrededor de las piedras",()=>{for(let[A,L,B]of Qm)for(let z=B+14;z<B+112;z+=11)h.lineWidth=3,h.strokeStyle="rgba(95,78,52,.32)",h.beginPath(),h.ellipse(A+1,L+1,z,z*.8,0,0,7),h.stroke(),h.lineWidth=1.8,h.strokeStyle="rgba(255,248,225,.5)",h.beginPath(),h.ellipse(A-1,L-1,z,z*.8,0,0,7),h.stroke();d=!0,f(),p();try{i.chime&&i.chime()}catch{}}),o("Alisar",()=>{u(),d=!0,f(),p()}),o("Cerrar",()=>{k();try{_&&_.stop&&_.stop(),b&&b.disconnect()}catch{}t.remove()}),t.onclick=A=>{A.target===t&&a.lastChild.click()}}var pM="rio-day",ad=[["Hoy no tienes que llegar a ning\xFAn sitio.","You do not have to get anywhere today.","\u4ECA\u65E5\u306F\u3069\u3053\u304B\u3078\u7740\u304B\u306A\u304F\u3066\u5927\u4E08\u592B\u3002"],["El agua tambi\xE9n descansa mientras avanza.","Water also rests while it moves.","\u6C34\u306F\u6D41\u308C\u306A\u304C\u3089\u3082\u4F11\u3093\u3067\u3044\u307E\u3059\u3002"],["Respira hondo. Lo dem\xE1s puede esperar a ma\xF1ana.","Breathe deep. The rest can wait until tomorrow.","\u6DF1\u547C\u5438\u3092\u3002\u3042\u3068\u306F\u660E\u65E5\u3067\u3044\u3044\u3002"],["Algo peque\xF1o hecho con calma ya es suficiente.","One small thing done calmly is enough.","\u5C0F\u3055\u306A\u3053\u3068\u3092\u3086\u3063\u304F\u308A\u3002\u305D\u308C\u3067\u5341\u5206\u3067\u3059\u3002"],["Las nubes no se apuran y aun as\xED llegan.","Clouds never hurry and still they arrive.","\u96F2\u306F\u6025\u304C\u306A\u3044\u306E\u306B\u3001\u3061\u3083\u3093\u3068\u7740\u304D\u307E\u3059\u3002"],["Mara dejar\xEDa una nota: \xABmira hacia arriba un momento\xBB.","Mara would leave a note: \u201Clook up for a moment\u201D.","\u30DE\u30E9\u306A\u3089\u30E1\u30E2\u3092\u6B8B\u3059\u3067\u3057\u3087\u3046\u3002\u300C\u5C11\u3057\u7A7A\u3092\u898B\u4E0A\u3052\u3066\u300D\u3002"],["No hace falta entenderlo todo esta noche.","You do not need to understand everything tonight.","\u4ECA\u591C\u3001\u3059\u3079\u3066\u3092\u5206\u304B\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002"],["Una taza caliente y un r\xEDo quieto: buen plan.","A warm cup and a quiet river: a good plan.","\u6E29\u304B\u3044\u304A\u8336\u3068\u9759\u304B\u306A\u5DDD\u3002\u3044\u3044\u8A08\u753B\u3067\u3059\u3002"],["Lo que pesa hoy flota un poco m\xE1s ligero en el agua.","What weighs on you today floats lighter on the water.","\u4ECA\u65E5\u306E\u91CD\u3055\u3082\u3001\u6C34\u306E\u4E0A\u3067\u306F\u5C11\u3057\u8EFD\u304F\u306A\u308A\u307E\u3059\u3002"],["Est\xE1 bien ir despacio. As\xED se ven m\xE1s cosas.","It is fine to go slowly. You see more that way.","\u3086\u3063\u304F\u308A\u3067\u5927\u4E08\u592B\u3002\u305D\u306E\u307B\u3046\u304C\u591A\u304F\u304C\u898B\u3048\u307E\u3059\u3002"],["Cada farolillo es un \xABgracias\xBB que nadie pidi\xF3.","Every lantern is a \u201Cthank you\u201D nobody asked for.","\u3061\u3087\u3046\u3061\u3093\u306F\u3072\u3068\u3064\u305A\u3064\u3001\u983C\u307E\u308C\u306A\u3044\u300C\u3042\u308A\u304C\u3068\u3046\u300D\u3002"],["El r\xEDo no compara tu ritmo con el de nadie.","The river does not compare your pace with anyone\u2019s.","\u5DDD\u306F\u3042\u306A\u305F\u306E\u901F\u3055\u3092\u8AB0\u3068\u3082\u6BD4\u3079\u307E\u305B\u3093\u3002"],["Escucha un rato: siempre hay algo suave sonando.","Listen a while: something gentle is always playing.","\u3057\u3070\u3089\u304F\u8033\u3092\u3059\u307E\u305B\u3066\u3002\u3044\u3064\u3082\u3084\u3055\u3057\u3044\u97F3\u304C\u3057\u3066\u3044\u307E\u3059\u3002"],["Hoy cuenta aunque solo hayas flotado un poco.","Today counts even if you only floated a little.","\u5C11\u3057\u6D6E\u304B\u3093\u3060\u3060\u3051\u3067\u3082\u3001\u4ECA\u65E5\u306F\u3061\u3083\u3093\u3068\u4E00\u65E5\u3067\u3059\u3002"]];var n0=()=>{try{return JSON.parse(localStorage.getItem(pM)||"{}")||{}}catch{return{}}};var kc=()=>n0().n||0,i0=()=>n0().log||[];var s0=i=>{i.cnt=i.cnt||{};let e=Math.max(0,kc()-(i.cnt.dl||0));return e&&(i.cnt.dl=kc()),e};function r0(i){i.add(ad.map(e=>[e[0],e[1],e[2]])),i.add([["Farolillos del d\xEDa","Lanterns of the day","\u4ECA\u65E5\u306E\u3061\u3087\u3046\u3061\u3093"],["Hoy ya recogiste el farolillo. Ma\xF1ana habr\xE1 otro.","You already picked up today\u2019s lantern. There will be another tomorrow.","\u4ECA\u65E5\u306E\u3061\u3087\u3046\u3061\u3093\u306F\u3082\u3046\u62FE\u3044\u307E\u3057\u305F\u3002\u660E\u65E5\u307E\u305F\u6D41\u308C\u3066\u304D\u307E\u3059\u3002"],["A\xFAn no recoges ninguno","You have not picked up any yet","\u307E\u3060\u62FE\u3063\u3066\u3044\u307E\u305B\u3093"]])}var mM="rio-album",eo=[["koi","Carpa koi","Koi carp","\u9326\u9BC9","Se acercan despacio y nadan junto a la canoa, como si te conocieran.","They drift close and swim beside the canoe as if they knew you.","\u3086\u3063\u304F\u308A\u8FD1\u3065\u3044\u3066\u3001\u30AB\u30CC\u30FC\u306E\u305D\u3070\u3092\u6CF3\u304E\u307E\u3059\u3002\u307E\u308B\u3067\u77E5\u308A\u5408\u3044\u306E\u3088\u3046\u306B\u3002"],["pato","Pato del r\xEDo","River duck","\u5DDD\u306E\u30AB\u30E2","Decide acompa\xF1arte un rato y luego sigue su camino.","Chooses to keep you company for a while, then goes its own way.","\u3057\u3070\u3089\u304F\u5BC4\u308A\u305D\u3063\u3066\u304F\u308C\u3066\u3001\u3084\u304C\u3066\u81EA\u5206\u306E\u9053\u3078\u3002"],["garza","Garza blanca","White heron","\u30B7\u30E9\u30B5\u30AE","Pesca sin prisa. Alza el vuelo solo cuando pasas muy cerca.","Fishes without hurry. Takes flight only when you pass very close.","\u6025\u304C\u305A\u9B5A\u3092\u5F85\u3061\u307E\u3059\u3002\u3068\u3066\u3082\u8FD1\u304F\u3092\u901A\u308B\u3068\u98DB\u3073\u7ACB\u3061\u307E\u3059\u3002"],["libelula","Lib\xE9lula","Dragonfly","\u30C8\u30F3\u30DC","Se posa un instante en la proa y se va, ligera como un pensamiento.","Lands on the bow for an instant and leaves, light as a thought.","\u8239\u9996\u306B\u305D\u3063\u3068\u6B62\u307E\u3063\u3066\u3001\u8003\u3048\u3054\u3068\u306E\u3088\u3046\u306B\u8EFD\u304F\u53BB\u308A\u307E\u3059\u3002"],["loto","Flor de loto","Lotus flower","\u84EE\u306E\u82B1","Abre al anochecer en los estanques tranquilos.","Opens at dusk in the quiet ponds.","\u9759\u304B\u306A\u6C60\u3067\u5915\u66AE\u308C\u306B\u958B\u304D\u307E\u3059\u3002"],["festival","Festival de linternas","Lantern festival","\u3061\u3087\u3046\u3061\u3093\u796D\u308A","La aldea enciende farolillos para quien llega de noche.","The village lights lanterns for whoever arrives at night.","\u591C\u306B\u7740\u3044\u305F\u4EBA\u306E\u305F\u3081\u306B\u3001\u6751\u304C\u3061\u3087\u3046\u3061\u3093\u3092\u3068\u3082\u3057\u307E\u3059\u3002"]],Qa=null,a0=()=>{if(Qa)return Qa;try{Qa=JSON.parse(localStorage.getItem(mM)||"{}")||{}}catch{Qa={}}return Qa};function o0(i){try{r0(i)}catch{}i.add(eo.map(e=>[e[1],e[2],e[3]])),i.add(eo.map(e=>[e[4],e[5],e[6]])),i.add([["Cuaderno del r\xEDo","River notebook","\u5DDD\u306E\u30CE\u30FC\u30C8"],["A\xFAn no lo has visto","You have not seen this yet","\u307E\u3060\u898B\u3066\u3044\u307E\u305B\u3093"],["Nueva anotaci\xF3n en el cuaderno del r\xEDo","New entry in the river notebook","\u5DDD\u306E\u30CE\u30FC\u30C8\u306B\u65B0\u3057\u3044\u8A18\u9332"],["Se llena solo, a su ritmo. No hay prisa.","It fills by itself, at its own pace. No rush.","\u3086\u3063\u304F\u308A\u3001\u3072\u3068\u308A\u3067\u306B\u57CB\u307E\u3063\u3066\u3044\u304D\u307E\u3059\u3002"],["Cerrar","Close","\u9589\u3058\u308B"],["Anotado: ","Noted: ","\u8A18\u9332: "],["anotaciones","entries","\u4EF6"]])}var Hc=()=>Object.keys(a0()).length;function l0(i){i.cnt=i.cnt||{};let e=Math.max(0,Hc()-(i.cnt.alb||0));return e&&(i.cnt.alb=Hc()),e}function c0(i){i=i||(window.UX?UX.tr:(o=>o));let e=a0(),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;z-index:80;display:grid;place-items:center;background:rgba(14,16,36,.88);padding:12px";let n=document.createElement("div");n.style.cssText="background:#363a66;color:#fbf1e0;border:1px solid #5a609a;border-radius:16px;padding:18px 20px;max-width:min(92vw,460px);max-height:82vh;overflow:auto;font:15px/1.45 system-ui";let s=document.createElement("h2");s.style.cssText="margin:0 0 4px;font:600 1.15rem system-ui",s.textContent=i("Cuaderno del r\xEDo");let r=document.createElement("div");r.style.cssText="opacity:.65;font-size:.8rem;margin-bottom:12px",r.textContent=i("Se llena solo, a su ritmo. No hay prisa."),n.append(s,r),eo.forEach(o=>{let l=!!e[o[0]],c=document.createElement("div");c.style.cssText="margin:0 0 12px;padding:10px 12px;border-radius:12px;background:"+(l?"rgba(255,233,184,.10)":"rgba(255,255,255,.04)")+";"+(l?"":"opacity:.55");let h=document.createElement("div");h.style.cssText="font-weight:600",h.textContent=(l?"\u2726 ":"\xB7 ")+(l?i(o[1]):"?");let u=document.createElement("div");u.style.cssText="font-size:.88em;opacity:.85",u.textContent=i(l?o[4]:"A\xFAn no lo has visto"),c.append(h,u),n.appendChild(c)});{let o=document.createElement("div");o.style.cssText="font-weight:600;margin:14px 0 6px",o.textContent=i("Farolillos del d\xEDa")+" \xB7 "+kc(),n.appendChild(o);let l=i0().slice().reverse();if(!l.length){let c=document.createElement("div");c.style.cssText="opacity:.55;font-size:.88em;margin-bottom:12px",c.textContent=i("A\xFAn no recoges ninguno"),n.appendChild(c)}l.forEach(c=>{let h=document.createElement("div");h.style.cssText="margin:0 0 8px;padding:8px 12px;border-radius:12px;background:rgba(255,233,184,.08);font-size:.88em",h.textContent="\u{1F3EE} "+i(ad[c[1]][0]),n.appendChild(h)})}let a=document.createElement("button");a.type="button",a.textContent=i("Cerrar"),a.style.cssText="min-height:44px;padding:8px 18px;border-radius:99px;border:1px solid #5a609a;background:#2b2d52;color:#fbf1e0;font:inherit;cursor:pointer",a.onclick=()=>t.remove(),n.appendChild(a),t.appendChild(n),t.onclick=o=>{o.target===t&&t.remove()},document.body.appendChild(t)}var gM="rio-still";var xM=()=>{try{return JSON.parse(localStorage.getItem(gM)||"{}")||{}}catch{return{}}},h0=()=>xM().n||0,u0=i=>{i.cnt=i.cnt||{};let e=Math.max(0,h0()-(i.cnt.st||0));return e&&(i.cnt.st=h0()),e};var _M="rio-found-types",dd=[["Puente de madera","Dej\xE9 la caba\xF1a al amanecer. El primer puente cruje igual que mi escalera: me dio confianza.","I left the cabin at dawn. The first bridge creaks just like my stairs, and that made me brave.","\u591C\u660E\u3051\u306B\u5C0F\u5C4B\u3092\u51FA\u307E\u3057\u305F\u3002\u6700\u521D\u306E\u6A4B\u306F\u79C1\u306E\u968E\u6BB5\u3068\u540C\u3058\u3088\u3046\u306B\u304D\u3057\u3093\u3067\u3001\u52C7\u6C17\u3092\u304F\u308C\u307E\u3057\u305F\u3002"],["Torii sobre el agua","Pas\xE9 bajo un portal que flota. Ped\xED un deseo en voz baja: que la caba\xF1a nunca se quede sola.","I drifted under a gate that floats. I whispered a wish: that the cabin is never left alone.","\u6C34\u306B\u6D6E\u304B\u3076\u9580\u3092\u304F\u3050\u308A\u3001\u5C0F\u3055\u306A\u58F0\u3067\u9858\u3044\u307E\u3057\u305F\u3002\u5C0F\u5C4B\u304C\u3072\u3068\u308A\u307C\u3063\u3061\u306B\u306A\u308A\u307E\u305B\u3093\u3088\u3046\u306B\u3002"],["Aldea de farolillos","Una aldea entera enciende farolillos para recibir a quien llega. Por primera vez no me sent\xED de paso.","A whole village lights lanterns for whoever arrives. For once I did not feel like I was just passing through.","\u6751\u3058\u3085\u3046\u304C\u3001\u8A2A\u308C\u308B\u4EBA\u306E\u305F\u3081\u306B\u63D0\u706F\u3092\u3068\u3082\u3057\u307E\u3059\u3002\u521D\u3081\u3066\u300C\u901A\u308A\u3059\u304C\u308A\u300D\u3068\u611F\u3058\u307E\u305B\u3093\u3067\u3057\u305F\u3002"],["Jard\xEDn de sakura","Los cerezos sueltan p\xE9talos como si el aire tuviera memoria. Guard\xE9 uno para ti, entre las p\xE1ginas del mapa.","The cherry trees let go of petals as if the air had a memory. I saved one for you between the map pages.","\u685C\u306F\u3001\u7A7A\u6C17\u304C\u8A18\u61B6\u3092\u6301\u3063\u3066\u3044\u308B\u304B\u306E\u3088\u3046\u306B\u82B1\u3073\u3089\u3092\u6563\u3089\u3057\u307E\u3059\u3002\u5730\u56F3\u306E\u9593\u306B\u4E00\u679A\u3001\u3042\u306A\u305F\u306E\u305F\u3081\u306B\u631F\u307F\u307E\u3057\u305F\u3002"],["Ca\xF1averal de las garzas","Las garzas pescan sin prisa. Aprend\xED de ellas que esperar tambi\xE9n es avanzar.","The herons fish without hurry. They taught me that waiting is also a way of moving forward.","\u30B5\u30AE\u306F\u6025\u304C\u305A\u9B5A\u3092\u5F85\u3061\u307E\u3059\u3002\u5F85\u3064\u3053\u3068\u3082\u524D\u306B\u9032\u3080\u3053\u3068\u3060\u3068\u6559\u308F\u308A\u307E\u3057\u305F\u3002"],["Templo de la campana","La campana suena una vez y el r\xEDo entero se acomoda. Quise que la oyeras desde tu balc\xF3n.","The bell rings once and the whole river settles. I wanted you to hear it from your balcony.","\u9418\u304C\u3072\u3068\u3064\u9CF4\u308B\u3068\u3001\u5DDD\u305C\u3093\u305F\u3044\u304C\u9759\u307E\u308A\u307E\u3059\u3002\u3042\u306A\u305F\u306E\u30D0\u30EB\u30B3\u30CB\u30FC\u304B\u3089\u3082\u805E\u3053\u3048\u305F\u3089\u3044\u3044\u306E\u306B\u3002"],["Cascadita de musgo","Una cascada peque\xF1ita, verde de tan callada. Me qued\xE9 una tarde entera y no extra\xF1\xE9 nada.","A tiny waterfall, green with quiet. I stayed a whole afternoon and missed nothing.","\u9759\u3051\u3055\u3067\u7DD1\u306B\u67D3\u307E\u3063\u305F\u5C0F\u3055\u306A\u6EDD\u3002\u5348\u5F8C\u3044\u3063\u3071\u3044\u904E\u3054\u3057\u3066\u3001\u4F55\u3082\u604B\u3057\u304F\u306A\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002"],["Casa de t\xE9","Me sirvieron t\xE9 sin preguntar nada. Dej\xE9 encima de la mesa tu receta, por si quieres hacerla en la caba\xF1a.","They served me tea without asking a thing. I left your recipe on the table, in case you want to make it at the cabin.","\u4F55\u3082\u805E\u304B\u305A\u306B\u304A\u8336\u3092\u51FA\u3057\u3066\u304F\u308C\u307E\u3057\u305F\u3002\u5C0F\u5C4B\u3067\u3082\u4F5C\u308C\u308B\u3088\u3046\u3001\u30EC\u30B7\u30D4\u3092\u673A\u306B\u6B8B\u3057\u307E\u3057\u305F\u3002"],["Bosque de bamb\xFA","El bamb\xFA canta cuando sopla el viento. Pens\xE9 en tu campanilla y sonre\xED sola.","The bamboo sings when the wind blows. I thought of your wind chime and smiled to myself.","\u98A8\u304C\u5439\u304F\u3068\u7AF9\u304C\u6B4C\u3044\u307E\u3059\u3002\u3042\u306A\u305F\u306E\u98A8\u9234\u3092\u601D\u3044\u51FA\u3057\u3066\u3001\u3072\u3068\u308A\u3067\u5FAE\u7B11\u307F\u307E\u3057\u305F\u3002"],["Estanque de lotos","Un estanque de lotos que se abre de noche. Todo lo que empieza despacio merece su tiempo.","A lotus pond that opens at night. Everything that begins slowly deserves its time.","\u591C\u306B\u958B\u304F\u84EE\u306E\u6C60\u3002\u3086\u3063\u304F\u308A\u59CB\u307E\u308B\u3082\u306E\u306B\u306F\u3001\u305D\u308C\u3060\u3051\u306E\u6642\u9593\u304C\u5FC5\u8981\u3067\u3059\u3002"],["Castillo de la Garza Blanca","Llegu\xE9. El castillo brilla igual que las luces de tu terraza. No hac\xEDa falta llegar tan lejos para entenderlo: mi casa siempre fue la caba\xF1a. Cu\xEDdala a tu gusto; ya es tuya.","I made it. The castle glows just like the lights on your deck. I did not need to come this far to understand it: my home was always the cabin. Keep it your way; it is yours now.","\u305F\u3069\u308A\u7740\u304D\u307E\u3057\u305F\u3002\u57CE\u306F\u3001\u3042\u306A\u305F\u306E\u30C6\u30E9\u30B9\u306E\u706F\u308A\u3068\u540C\u3058\u3088\u3046\u306B\u8F1D\u3044\u3066\u3044\u307E\u3059\u3002\u3053\u3053\u307E\u3067\u6765\u306A\u304F\u3066\u3082\u5206\u304B\u3063\u305F\u306F\u305A\u3067\u3059\u3002\u79C1\u306E\u5BB6\u306F\u3044\u3064\u3082\u5C0F\u5C4B\u3067\u3057\u305F\u3002\u597D\u304D\u306A\u3088\u3046\u306B\u5B88\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u3082\u3046\u3042\u306A\u305F\u306E\u3082\u306E\u3067\u3059\u3002"]],yM=dd.map(i=>i[0]),m0=dd.map(i=>i[1]),Wc=()=>{let i=new Set;for(let e of["rio3d-found",_M])try{JSON.parse(localStorage.getItem(e)||"[]").forEach(t=>i.add(t))}catch{}return i};function fd(i){o0(i),S0(i),vM(i),e0(i),i.add(dd.map(e=>[e[1],e[2],e[3]])),i.add([["Puente de madera","Wooden bridge","\u6728\u306E\u6A4B"],["Torii sobre el agua","Torii over the water","\u6C34\u4E0A\u306E\u9CE5\u5C45"],["Aldea de farolillos","Lantern village","\u3061\u3087\u3046\u3061\u3093\u306E\u6751"],["Jard\xEDn de sakura","Sakura garden","\u685C\u306E\u5EAD"],["Ca\xF1averal de las garzas","Heron reedbed","\u30B5\u30AE\u306E\u8466\u539F"],["Templo de la campana","Bell temple","\u9418\u306E\u5BFA"],["Cascadita de musgo","Mossy waterfall","\u82D4\u306E\u5C0F\u3055\u306A\u6EDD"],["Casa de t\xE9","Tea house","\u8336\u5C4B"],["Bosque de bamb\xFA","Bamboo forest","\u7AF9\u6797"],["Estanque de lotos","Lotus pond","\u84EE\u306E\u6C60"],["Castillo de la Garza Blanca","White Heron Castle","\u767D\u9DFA\u57CE"],["Cartas de Mara","Mara\u2019s letters","\u30DE\u30E9\u306E\u624B\u7D19"],["Carta sin abrir","Unopened letter","\u672A\u958B\u5C01\u306E\u624B\u7D19"],["Desc\xFAbrelo en el r\xEDo para leerla","Discover it on the river to read it","\u5DDD\u3067\u898B\u3064\u3051\u308B\u3068\u8AAD\u3081\u307E\u3059"],["Abrir carta","Open letter","\u624B\u7D19\u3092\u958B\u304F"],["Notas de visitantes","Visitor notes","\u8A2A\u554F\u8005\u306E\u30E1\u30E2"],["Mara te dej\xF3 una carta","Mara left you a letter","\u30DE\u30E9\u304C\u624B\u7D19\u3092\u6B8B\u3057\u307E\u3057\u305F"],["Carta de Mara","Letter from Mara","\u30DE\u30E9\u306E\u624B\u7D19"],["Una carta nueva te espera en el diario","A new letter waits in the diary","\u65E5\u8A18\u306B\u65B0\u3057\u3044\u624B\u7D19\u304C\u5C4A\u3044\u3066\u3044\u307E\u3059"]]),i.rx([[/^Carta sin abrir · (.+)$/,(e,t,n)=>n("Carta sin abrir")+" \xB7 "+n(e[1])]])}var od=i=>Object.values(i.decor||{}).filter(Boolean).length,d0=i=>Object.keys(i.own||{}).length,ld=i=>(i.notes||[]).length,f0=i=>i.cnt||{},pd=[[i=>!!(i.repaired&&i.repaired.techo),"Termina de reparar el techo","Finish repairing the roof","\u5C4B\u6839\u306E\u4FEE\u7406\u3092\u304A\u308F\u3089\u305B\u308B"],[i=>d0(i)>=1,"Coloca tu primer objeto","Place your first object","\u6700\u521D\u306E\u98FE\u308A\u3092\u7F6E\u304F"],[i=>ld(i)>=1,"Recibe a tu primer visitante","Welcome your first visitor","\u6700\u521D\u306E\u8A2A\u554F\u8005\u3092\u8FCE\u3048\u308B"],[i=>(f0(i).te||0)>=1,"Prepara un t\xE9","Make a cup of tea","\u304A\u8336\u3092\u3044\u308C\u308B"],[i=>od(i)>=2,"Decora dos lugares de la caba\xF1a","Decorate two spots in the cabin","\u5C0F\u5C4B\u306E2\u304B\u6240\u3092\u98FE\u308B"],[i=>(f0(i).rg||0)>=1,"Riega las plantas","Water the plants","\u690D\u7269\u306B\u6C34\u3092\u3084\u308B"],[i=>ld(i)>=3,"Escucha las historias de tres visitas","Hear the stories of three visits","3\u56DE\u306E\u8A2A\u554F\u8005\u306E\u8A71\u3092\u805E\u304F"],[i=>od(i)>=4,"Decora cuatro lugares","Decorate four spots","4\u304B\u6240\u3092\u98FE\u308B"],[i=>d0(i)>=5,"Re\xFAne cinco objetos","Gather five objects","\u98FE\u308A\u30925\u3064\u96C6\u3081\u308B"],[i=>ld(i)>=6,"Lee seis notas de los visitantes","Read six visitor notes","\u8A2A\u554F\u8005\u306E\u30E1\u30E2\u30926\u3064\u8AAD\u3080"],[i=>od(i)>=6,"Deja decorados todos los lugares","Leave every spot decorated","\u3059\u3079\u3066\u306E\u5834\u6240\u3092\u98FE\u308B"]],cd=(i,e)=>!!(i.ltr||{})[e]||Wc().has(e)&&pd[e][0](i);function vM(i){i.add(pd.map(e=>[e[1],e[2],e[3]])),i.add([["Desc\xFAbrelo en el r\xEDo","Discover it on the river","\u5DDD\u3067\u898B\u3064\u3051\u307E\u3057\u3087\u3046"],["Pista","Hint","\u30D2\u30F3\u30C8"],["Se abri\xF3 una carta nueva en el diario","A new letter opened in the diary","\u65E5\u8A18\u306B\u65B0\u3057\u3044\u624B\u7D19\u304C\u958B\u304D\u307E\u3057\u305F"]])}function g0(i,e,t,n,s){let r=Wc(),a=to(),o=xd();e.ltr=e.ltr||{};let l=0,c=0,h=document.createElement("h3");h.style.cssText="margin:12px 0 8px;font:600 .95rem system-ui",h.textContent=t("Cartas de Mara"),i.appendChild(h),m0.forEach((M,m)=>{let f=document.createElement("p");f.style.margin="0 0 10px";let x=b=>{let _=document.createElement("span");_.textContent=b,f.appendChild(_)};if(x("\u2709 "),cd(e,m)){if(e.ltr[m]||(e.ltr[m]=1,l++),x(t(M)),f.style.color="#ffe9b8",a[m]&&ud(m)){let b=document.createElement("div");b.style.cssText="margin:6px 0 0 14px;font-size:.88em;color:#cfe8ff";let _=document.createElement("span");_.textContent="\u2726 ";let S=document.createElement("span");S.textContent=t(ud(m)[3]),b.append(_,S),f.appendChild(b),e.ltr[m]<2&&(e.ltr[m]=2,l++)}if(o[m]&&hd(m)){let b=document.createElement("div");b.style.cssText="margin:6px 0 0 14px;font-size:.88em;color:#e8d3ff";let _=document.createElement("span");_.textContent="\u21A9 ";let S=document.createElement("span");S.textContent=t(hd(m)[3]),b.append(_,S),f.appendChild(b),c++}}else{x(t("Carta sin abrir")),x(" \xB7 "),x(t(yM[m])),f.style.opacity=".6";let b=document.createElement("div");b.style.cssText="margin:4px 0 0 14px;font-size:.82em;color:#cfd6ff";let _=document.createElement("span");_.textContent="\u2727 ";let S=document.createElement("span");S.textContent=t(r.has(m)?pd[m][1]:"Desc\xFAbrelo en el r\xEDo"),b.append(_,S),f.appendChild(b)}i.appendChild(f)});let u=l0(e)+0,d=s0(e)+u0(e);(u||d)&&(n(2*u+d),s());let p=document.createElement("button");p.type="button",p.textContent=t("Cuaderno del r\xEDo")+" \xB7 "+Hc()+"/"+eo.length,p.style.cssText="min-height:44px;margin:4px 8px 4px 0;padding:8px 14px;border-radius:99px;border:1px solid #5a609a;background:#2b2d52;color:#fbf1e0;font:inherit;cursor:pointer",p.onclick=()=>c0(t),i.appendChild(p),e.cnt=e.cnt||{};let g=Math.max(0,c-(e.cnt.tv||0));return g&&(e.cnt.tv=c,n(2*g),s()),l&&(n(3*l),s()),l}var md=i=>{let e=Wc(),t=to(),n=0;for(let s=0;s<m0.length;s++)!(i.ltr||{})[s]&&cd(i,s)&&n++;return Object.keys(t).forEach(s=>{e.has(+s)&&((i.ltr||{})[s]||0)<2&&n++}),Object.keys(xd()).filter(r=>cd(i,+r)).length>((i.cnt||{}).tv||0)&&n++,n},bM=["Primavera","Verano","Oto\xF1o","Invierno"],x0="rio3d-season",p0=["auto","0","1","2","3"],Gc=()=>{try{return localStorage.getItem(x0)||"auto"}catch{return"auto"}},_0=()=>{let i=Gc();if(i!=="auto")return+i;let e=new Date().getMonth();return e>=2&&e<=4?0:e>=5&&e<=7?1:e>=8&&e<=10?2:3},y0=()=>{let i=p0[(p0.indexOf(Gc())+1)%5];try{localStorage.setItem(x0,i)}catch{}return i},v0=()=>"Estaci\xF3n: "+(Gc()==="auto"?"Auto":bM[+Gc()]),b0=[[255,182,200],[255,222,140],[232,140,70],[240,246,255]];function gd(i){i.add([["Estaci\xF3n: Auto","Season: Auto","\u5B63\u7BC0: \u304A\u307E\u304B\u305B"],["Estaci\xF3n: Primavera","Season: Spring","\u5B63\u7BC0: \u6625"],["Estaci\xF3n: Verano","Season: Summer","\u5B63\u7BC0: \u590F"],["Estaci\xF3n: Oto\xF1o","Season: Autumn","\u5B63\u7BC0: \u79CB"],["Estaci\xF3n: Invierno","Season: Winter","\u5B63\u7BC0: \u51AC"]])}var Vc=-1;function M0(i,e,t){let n=md(i);if(Vc<0){Vc=n;return}n>Vc&&e(t("Se abri\xF3 una carta nueva en el diario")),Vc=n}var MM="rio-tasks",_d=[["Dejar una linterna en el barandal","Leave a lantern on the railing","\u624B\u3059\u308A\u306B\u30E9\u30F3\u30BF\u30F3\u3092\u7F6E\u304F","Dej\xE9 una linterna en el barandal. Si cruzas de noche, ah\xED estar\xE1 esper\xE1ndote.","I left a lantern on the railing. If you cross at night, it will be waiting for you.","\u624B\u3059\u308A\u306B\u30E9\u30F3\u30BF\u30F3\u3092\u7F6E\u304D\u307E\u3057\u305F\u3002\u591C\u306B\u6E21\u308B\u306A\u3089\u3001\u305D\u3053\u3067\u5F85\u3063\u3066\u3044\u307E\u3059\u3002"],["Pedir un deseo bajo el portal","Make a wish under the gate","\u9CE5\u5C45\u306E\u4E0B\u3067\u9858\u3044\u3054\u3068\u3092\u3059\u308B","Ped\xED otro deseo bajo el portal. Este no es m\xEDo: es para quien lea esto.","I made another wish under the gate. This one is not mine: it is for whoever reads this.","\u9CE5\u5C45\u306E\u4E0B\u3067\u3082\u3046\u3072\u3068\u3064\u9858\u3044\u307E\u3057\u305F\u3002\u79C1\u306E\u3067\u306F\u306A\u304F\u3001\u3053\u308C\u3092\u8AAD\u3080\u3042\u306A\u305F\u306E\u305F\u3081\u306B\u3002"],["Encender un farolillo","Light a lantern","\u3061\u3087\u3046\u3061\u3093\u3092\u3068\u3082\u3059","Encend\xED un farolillo en la aldea. Dicen que dura hasta que alguien lo recuerda.","I lit a lantern in the village. They say it burns until someone remembers it.","\u6751\u3067\u3061\u3087\u3046\u3061\u3093\u3092\u3068\u3082\u3057\u307E\u3057\u305F\u3002\u8AB0\u304B\u304C\u601D\u3044\u51FA\u3059\u3042\u3044\u3060\u3001\u6D88\u3048\u306A\u3044\u305D\u3046\u3067\u3059\u3002"],["Guardar un p\xE9talo de sakura","Keep a sakura petal","\u685C\u306E\u82B1\u3073\u3089\u3092\u3057\u307E\u3046","Guard\xE9 otro p\xE9talo. Ya tengo suficientes para forrar una carta entera.","I kept another petal. I now have enough to line a whole letter.","\u3082\u3046\u4E00\u679A\u3001\u82B1\u3073\u3089\u3092\u3057\u307E\u3044\u307E\u3057\u305F\u3002\u624B\u7D19\u3092\u4E00\u901A\u3046\u3081\u3089\u308C\u308B\u307B\u3069\u306B\u306A\u308A\u307E\u3057\u305F\u3002"],["Quedarse quieto con las garzas","Stay still with the herons","\u30B5\u30AE\u3068\u9759\u304B\u306B\u5F85\u3064","Me qued\xE9 quieta con las garzas hasta que me olvidaron. Fue el mejor halago.","I stayed still with the herons until they forgot I was there. Best compliment ever.","\u30B5\u30AE\u306E\u305D\u3070\u3067\u3058\u3063\u3068\u3057\u3066\u3001\u79C1\u306E\u5B58\u5728\u3092\u5FD8\u308C\u3089\u308C\u308B\u307E\u3067\u5F85\u3061\u307E\u3057\u305F\u3002\u6700\u9AD8\u306E\u307B\u3081\u8A00\u8449\u3067\u3059\u3002"],["Tocar la campana","Ring the bell","\u9418\u3092\u9CF4\u3089\u3059","Toqu\xE9 la campana una vez m\xE1s. Si la oyes desde el balc\xF3n, es m\xEDa.","I rang the bell once more. If you hear it from your balcony, it is mine.","\u3082\u3046\u4E00\u5EA6\u9418\u3092\u9CF4\u3089\u3057\u307E\u3057\u305F\u3002\u30D0\u30EB\u30B3\u30CB\u30FC\u3067\u805E\u3053\u3048\u305F\u3089\u3001\u305D\u308C\u306F\u79C1\u3067\u3059\u3002"],["Llenar un frasco con agua de la cascada","Fill a jar with waterfall water","\u6EDD\u306E\u6C34\u3092\u74F6\u306B\u304F\u3080","Llen\xE9 un frasco con agua de la cascada. Ponlo en el estantito: huele a tarde larga.","I filled a jar with waterfall water. Put it on the little shelf: it smells like a long afternoon.","\u6EDD\u306E\u6C34\u3092\u74F6\u306B\u304F\u307F\u307E\u3057\u305F\u3002\u5C0F\u3055\u306A\u68DA\u306B\u7F6E\u3044\u3066\u304F\u3060\u3055\u3044\u3002\u9577\u3044\u5348\u5F8C\u306E\u9999\u308A\u304C\u3057\u307E\u3059\u3002"],["Compartir una taza de t\xE9","Share a cup of tea","\u304A\u8336\u3092\u308F\u304B\u3061\u3042\u3046","Compart\xED una taza de t\xE9. Pens\xE9 en la tuya, en la caba\xF1a, humeando.","I shared a cup of tea. I thought of yours, steaming at the cabin.","\u304A\u8336\u3092\u308F\u304B\u3061\u3042\u3044\u307E\u3057\u305F\u3002\u5C0F\u5C4B\u3067\u6E6F\u6C17\u3092\u7ACB\u3066\u308B\u3042\u306A\u305F\u306E\u4E00\u676F\u3092\u601D\u3044\u307E\u3057\u305F\u3002"],["Escuchar el bamb\xFA","Listen to the bamboo","\u7AF9\u306E\u97F3\u306B\u8033\u3092\u3059\u307E\u3059","Escuch\xE9 el bamb\xFA un buen rato. Suena a campanilla de viento sin due\xF1o.","I listened to the bamboo a good while. It sounds like a wind chime with no owner.","\u7AF9\u306E\u97F3\u3092\u3057\u3070\u3089\u304F\u805E\u304D\u307E\u3057\u305F\u3002\u6301\u3061\u4E3B\u306E\u3044\u306A\u3044\u98A8\u9234\u306E\u3088\u3046\u3067\u3059\u3002"],["Dejar una flor en el estanque","Leave a flower on the pond","\u6C60\u306B\u82B1\u3092\u6D6E\u304B\u3079\u308B","Dej\xE9 una flor en el estanque. Flota hacia donde t\xFA ya est\xE1s.","I left a flower on the pond. It floats toward wherever you already are.","\u6C60\u306B\u82B1\u3092\u6D6E\u304B\u3079\u307E\u3057\u305F\u3002\u3042\u306A\u305F\u304C\u3044\u308B\u65B9\u3078\u6D41\u308C\u3066\u3044\u304D\u307E\u3059\u3002"],["Encender los fuegos para Mara","Light the fireworks for Mara","\u30DE\u30E9\u306E\u305F\u3081\u306B\u82B1\u706B\u3092\u3042\u3052\u308B","Esta noche los fuegos del castillo son para ti. Gracias por seguirme hasta aqu\xED.","Tonight the castle fireworks are for you. Thank you for following me all the way here.","\u4ECA\u591C\u306E\u57CE\u306E\u82B1\u706B\u306F\u3042\u306A\u305F\u306E\u305F\u3081\u306B\u3002\u3053\u3053\u307E\u3067\u3064\u3044\u3066\u304D\u3066\u304F\u308C\u3066\u3042\u308A\u304C\u3068\u3046\u3002"]],yd=[["Escuchar el crujido del puente","Listen to the bridge creak","\u6A4B\u306E\u304D\u3057\u3080\u97F3\u3092\u805E\u304F","Volv\xED al puente: cruji\xF3 con tu mismo ritmo al cruzar. Ya no suena a madera, suena a casa.","I came back to the bridge: it creaked in your same rhythm. It no longer sounds like wood; it sounds like home.","\u6A4B\u306B\u623B\u308B\u3068\u3001\u3042\u306A\u305F\u3068\u540C\u3058\u6B69\u5E45\u3067\u304D\u3057\u307F\u307E\u3057\u305F\u3002\u3082\u3046\u6728\u306E\u97F3\u3067\u306F\u306A\u304F\u3001\u5BB6\u306E\u97F3\u3067\u3059\u3002"],["Mirar el reflejo del portal","Watch the gate\u2019s reflection","\u9CE5\u5C45\u306E\u6620\u308A\u3092\u773A\u3081\u308B","Esta vez mir\xE9 el reflejo en lugar del portal. Se ve igual de bien, pero m\xE1s tranquilo.","This time I looked at the reflection instead of the gate. It looks just as good, only calmer.","\u4ECA\u56DE\u306F\u9CE5\u5C45\u3067\u306F\u306A\u304F\u6C34\u9762\u306E\u6620\u308A\u3092\u898B\u307E\u3057\u305F\u3002\u540C\u3058\u304F\u3089\u3044\u304D\u308C\u3044\u3067\u3001\u3082\u3063\u3068\u9759\u304B\u3067\u3059\u3002"],["Saludar a quien pasa en la aldea","Greet someone passing in the village","\u6751\u3067\u3059\u308C\u3061\u304C\u3046\u4EBA\u306B\u3042\u3044\u3055\u3064\u3059\u308B","Una se\xF1ora de la aldea me salud\xF3 como si fuera vecina. Le dije que ten\xEDa una caba\xF1a lejos, y sonri\xF3.","A woman in the village greeted me like a neighbor. I told her I had a cabin far away, and she smiled.","\u6751\u306E\u5973\u6027\u304C\u96A3\u4EBA\u306E\u3088\u3046\u306B\u3042\u3044\u3055\u3064\u3057\u3066\u304F\u308C\u307E\u3057\u305F\u3002\u9060\u304F\u306B\u5C0F\u5C4B\u304C\u3042\u308B\u3068\u8A71\u3059\u3068\u3001\u7B11\u3063\u3066\u304F\u308C\u307E\u3057\u305F\u3002"],["Atrapar un p\xE9talo en el aire","Catch a petal in the air","\u821E\u3046\u82B1\u3073\u3089\u3092\u3064\u304B\u3080","Atrap\xE9 un p\xE9talo en el aire sin intentarlo. Dicen que da suerte; te lo mando de regalo.","I caught a petal in mid-air without trying. They say it brings luck; I am sending it to you.","\u4F55\u6C17\u306A\u304F\u7A7A\u4E2D\u3067\u82B1\u3073\u3089\u3092\u3064\u304B\u307F\u307E\u3057\u305F\u3002\u5E78\u904B\u306E\u3057\u308B\u3057\u3060\u305D\u3046\u3067\u3059\u3002\u3042\u306A\u305F\u306B\u8D08\u308A\u307E\u3059\u3002"],["Contar las garzas en silencio","Count the herons in silence","\u9759\u304B\u306B\u30B5\u30AE\u3092\u6570\u3048\u308B","Cont\xE9 las garzas sin mover un dedo: siempre salen una m\xE1s de las que cre\xEDa.","I counted the herons without moving a finger: there is always one more than I thought.","\u6307\u4E00\u672C\u52D5\u304B\u3055\u305A\u30B5\u30AE\u3092\u6570\u3048\u307E\u3057\u305F\u3002\u601D\u3063\u305F\u3088\u308A\u3001\u3044\u3064\u3082\u3072\u3068\u3064\u591A\u3044\u306E\u3067\u3059\u3002"],["Escuchar c\xF3mo se apaga el eco de la campana","Listen to the bell\u2019s echo fade","\u9418\u306E\u4F59\u97FB\u304C\u6D88\u3048\u308B\u306E\u3092\u805E\u304F","Esper\xE9 a que el eco se apagara del todo. Dura m\xE1s de lo que uno imagina, y es lo mejor de la campana.","I waited for the echo to fade completely. It lasts longer than you think, and it is the best part of the bell.","\u4F59\u97FB\u304C\u5B8C\u5168\u306B\u6D88\u3048\u308B\u307E\u3067\u5F85\u3061\u307E\u3057\u305F\u3002\u601D\u3046\u3088\u308A\u9577\u304F\u3001\u305D\u308C\u304C\u9418\u306E\u3044\u3061\u3070\u3093\u597D\u304D\u306A\u3068\u3053\u308D\u3067\u3059\u3002"],["Mojar los dedos en la cascada","Dip your fingers in the waterfall","\u6EDD\u306B\u6307\u3092\u3072\u305F\u3059","Moj\xE9 los dedos en la cascada: estaba fr\xEDa y clara. Te mando un poco de ese fr\xEDo para el verano.","I dipped my fingers in the waterfall: cold and clear. I am sending you a little of that chill for summer.","\u6EDD\u306B\u6307\u3092\u3072\u305F\u3057\u307E\u3057\u305F\u3002\u51B7\u305F\u304F\u3066\u6F84\u3093\u3067\u3044\u307E\u3059\u3002\u590F\u306E\u305F\u3081\u306B\u3001\u5C11\u3057\u305D\u306E\u51B7\u305F\u3055\u3092\u9001\u308A\u307E\u3059\u3002"],["Mirar c\xF3mo suben el vapor y la tarde","Watch the steam and the afternoon rise","\u6E6F\u6C17\u3068\u5915\u65B9\u304C\u7ACB\u3061\u306E\u307C\u308B\u306E\u3092\u898B\u308B","El vapor del t\xE9 sub\xEDa despacio y la tarde con \xE9l. Anot\xE9 la hora: no se me va a olvidar.","The tea steam rose slowly and the afternoon with it. I wrote down the time: I will not forget it.","\u304A\u8336\u306E\u6E6F\u6C17\u304C\u3086\u3063\u304F\u308A\u6607\u308A\u3001\u5915\u65B9\u3082\u3044\u3063\u3057\u3087\u306B\u6607\u308A\u307E\u3057\u305F\u3002\u6642\u523B\u3092\u66F8\u304D\u3068\u3081\u305F\u306E\u3067\u3001\u5FD8\u308C\u307E\u305B\u3093\u3002"],["Dejar que el viento mueva el bamb\xFA","Let the wind move the bamboo","\u98A8\u304C\u7AF9\u3092\u3086\u3089\u3059\u306E\u306B\u307E\u304B\u305B\u308B","No hice nada y el bamb\xFA hizo todo. Aprend\xED que a veces ayudar es apartarse.","I did nothing and the bamboo did everything. I learned that sometimes helping means stepping aside.","\u4F55\u3082\u3057\u306A\u3044\u3068\u3001\u7AF9\u304C\u3059\u3079\u3066\u3092\u3084\u3063\u3066\u304F\u308C\u307E\u3057\u305F\u3002\u3068\u304D\u306B\u306F\u8EAB\u3092\u5F15\u304F\u3053\u3068\u304C\u52A9\u3051\u306B\u306A\u308B\u3068\u77E5\u308A\u307E\u3057\u305F\u3002"],["Ver c\xF3mo se cierra un loto","Watch a lotus close","\u84EE\u304C\u9589\u3058\u308B\u306E\u3092\u898B\u308B","Vi cerrarse un loto al amanecer. No es un final: es el mismo descanso que el tuyo.","I watched a lotus close at dawn. It is not an ending: it is the same rest you take.","\u591C\u660E\u3051\u306B\u84EE\u304C\u9589\u3058\u308B\u306E\u3092\u898B\u307E\u3057\u305F\u3002\u7D42\u308F\u308A\u3067\u306F\u306A\u304F\u3001\u3042\u306A\u305F\u306E\u4F11\u307F\u3068\u540C\u3058\u4F11\u307F\u3067\u3059\u3002"],["Mirar el castillo desde el agua","Look at the castle from the water","\u6C34\u306E\u4E0A\u304B\u3089\u57CE\u3092\u773A\u3081\u308B","Mir\xE9 el castillo desde el agua, como la primera vez. Sigue pareci\xE9ndose a las luces de tu terraza.","I looked at the castle from the water, like the first time. It still looks like the lights of your terrace.","\u6700\u521D\u306E\u3068\u304D\u306E\u3088\u3046\u306B\u3001\u6C34\u306E\u4E0A\u304B\u3089\u57CE\u3092\u773A\u3081\u307E\u3057\u305F\u3002\u3084\u306F\u308A\u3042\u306A\u305F\u306E\u30C6\u30E9\u30B9\u306E\u706F\u308A\u306B\u4F3C\u3066\u3044\u307E\u3059\u3002"]],hd=i=>yd[i]||null,SM="rio-tasks2";var EM=()=>{try{let i=JSON.parse(localStorage.getItem(SM)||"{}")||{};return i.d=i.d||{},i}catch{return{d:{}}}},xd=()=>EM().d;var ud=i=>_d[i]||null,TM=()=>{try{return JSON.parse(localStorage.getItem(MM)||"{}")}catch{return{}}},to=TM;function S0(i){i.add(_d.map(e=>[e[0],e[1],e[2]])),i.add(_d.map(e=>[e[3],e[4],e[5]])),i.add(yd.map(e=>[e[0],e[1],e[2]])),i.add(yd.map(e=>[e[3],e[4],e[5]])),i.add([["Carta de vuelta","Letter back","\u8FD4\u4E8B\u306E\u624B\u7D19"],["Hoy ya diste dos vueltas. Ma\xF1ana, m\xE1s.","You have already done two returns today. More tomorrow.","\u4ECA\u65E5\u306F\u3082\u3046\u4E8C\u56DE\u3075\u308A\u8FD4\u308A\u307E\u3057\u305F\u3002\u7D9A\u304D\u306F\u660E\u65E5\u3002"]]),i.add([["Mant\xE9n pulsado para hacerlo","Press and hold to do it","\u9577\u62BC\u3057\u3067\u5B9F\u884C"],["Hecho. Un recuerdo m\xE1s para la caba\xF1a.","Done. One more keepsake for the cabin.","\u3067\u304D\u307E\u3057\u305F\u3002\u5C0F\u5C4B\u306B\u601D\u3044\u51FA\u304C\u3072\u3068\u3064\u5897\u3048\u307E\u3057\u305F\u3002"],["Encargo de Mara","Mara\u2019s errand","\u30DE\u30E9\u306E\u304A\u9858\u3044"],["En el margen","In the margin","\u4F59\u767D\u306B"]])}var Or=[{id:"porcheI",kind:"suelo",p:[-3.6,ce,2.1],n:"Porche"},{id:"interior",kind:"suelo",p:[.9,ce,-1.7],n:"Junto a la ventana"},{id:"porcheD",kind:"suelo",p:[6,ce,2.2],n:"Porche, junto al barandal"},{id:"alero",kind:"colgante",p:[-2.4,6.3,3.35],n:"Alero"},{id:"pared",kind:"pared",p:[4.6,6.3,-2.7],n:"Pared"},{id:"roca",kind:"roca",p:[-7.4,ce-1.3,2.6],n:"Mirador de roca"}],wM=i=>Or.find(e=>e.id===i),Rn=(i,e,t)=>new ge(i,Ze(e,t)),AM=(i,e)=>new ge(i,new at({color:e})),dt=(i,e,t,n,s,r,a,o,l)=>{let c=Rn(new zt(i,e,t,l||8),n);return c.position.set(s,r,a),o&&o.add(c),c},Tt=(i,e,t,n,s,r,a,o,l)=>{let c=Rn(new Wt(i,10,8),e);return c.position.set(t,n,s),c.scale.set(r||1,a||1,o||1),l&&l.add(c),c},Vt=(i,e,t,n,s,r,a,o)=>{let l=Rn(new rn(i,e,t),n);return l.position.set(s,r,a),o&&o.add(l),l},ki=(i,e,t,n,s,r,a)=>{let o=Rt(Nt,e,t,a||.5,!0);return o.position.set(n,s,r),o.userData.gl=a||.5,i.add(o),o},zs={helecho(){let i=new Ae;dt(.34,.26,.45,"#b06c52",0,.22,0,i);for(let e=0;e<8;e++){let t=e/8*6.283,n=Rn(new Qt(.12,.8,4),"#6fae78");n.position.set(Math.cos(t)*.22,.8,Math.sin(t)*.22),n.rotation.set(Math.sin(t)*.7,0,-Math.cos(t)*.7),i.add(n)}return i.userData.anim=e=>{i.rotation.y=Math.sin(e*.4)*.05},i},lavanda(){let i=new Ae;dt(.28,.22,.4,"#7d6a8f",0,.2,0,i);for(let e=0;e<7;e++){let t=e/7*6.283,n=Math.cos(t)*.14,s=Math.sin(t)*.14;dt(.012,.012,.7,"#6a9a6e",n,.7,s,i,4);for(let r=0;r<3;r++)Tt(.05,r%2?"#b79ae0":"#9e7fd0",n,.95+r*.1,s,1,1.4,1,i)}return i.userData.anim=e=>{i.rotation.z=Math.sin(e*.9)*.02},i},farolpapel(){let i=new Ae;dt(.03,.03,1.05,"#5a4132",0,.52,0,i);let e=Tt(.28,"#ffe2aa",0,1.35,0,1,1.35,1,i);return e.material=new at({color:16769706}),dt(.2,.2,.07,"#5a4132",0,1.78,0,i),ki(i,16760954,3.4,0,1.35,0,.55),i},tetera(){let i=new Ae;Vt(1,.08,.7,"#7b5742",0,.7,0,i);for(let n of[-1,1])for(let s of[-1,1])dt(.04,.05,.7,"#6a4a38",n*.42,.35,s*.26,i,5);Tt(.26,"#4f6f8a",0,.98,0,1.1,.9,1,i),dt(.1,.1,.08,"#3f5a72",0,1.2,0,i);let e=dt(.04,.06,.3,"#4f6f8a",.32,1.04,0,i,5);e.rotation.z=-.9;let t=[];for(let n=0;n<4;n++){let s=Rt(Nt,15657206,.5,0,!1);s.userData.ph=n/4,i.add(s),t.push(s)}return i.userData.anim=n=>{t.forEach(s=>{let r=(n*.3+s.userData.ph)%1;s.position.set(.38+Math.sin(n*2+s.userData.ph*6)*.08*r,1.1+r*1.1,0),s.material.opacity=.4*(1-r),s.scale.setScalar(.35+r*.6)})},i},banquito(){let i=new Ae;Vt(.9,.14,.7,"#8b6a50",0,.62,0,i);for(let e of[-1,1])for(let t of[-1,1])dt(.04,.05,.62,"#6b4d3a",e*.35,.31,t*.25,i,5);return Vt(.78,.2,.6,"#c0746e",0,.79,0,i),i},libros(){let i=new Ae;Vt(.95,.2,.65,"#b0769c",0,.1,0,i),Vt(.85,.18,.6,"#6498b9",0,.29,0,i),Vt(.8,.17,.55,"#cfb67c",-.03,.47,0,i),dt(.07,.07,.3,"#f0e6cf",.18,.7,0,i,6);let e=Tt(.06,"#ffd27a",.18,.92,0,1,1.6,1,i);e.material=new at({color:16765562});let t=ki(i,16757850,2.2,.18,.94,0,.5);return i.userData.anim=n=>{e.scale.y=1.6+Math.sin(n*11)*.15,t.material.opacity=.5+Math.sin(n*9)*.06},i},campanilla(){let i=new Ae;Vt(.8,.1,.12,"#7b5742",0,0,0,i);let e=[];for(let t=-2;t<=2;t++){let n=new Ae;n.position.set(t*.17,-.05,0);let s=.55+(t+2)%2*.25;dt(.008,.008,s,"#eadfc4",0,-s/2,0,n,3),dt(.04,.05,.3,"#e0cd8a",0,-s-.12,0,n,6),i.add(n),e.push([n,t])}return i.userData.anim=t=>{e.forEach(([n,s])=>{n.rotation.z=Math.sin(t*1.6+s*.8)*.14,n.rotation.x=Math.sin(t*1.3+s)*.08})},i},atrapa(){let i=new Ae,e=new Ae;i.add(e);let t=Rn(new kn(.4,.04,6,18),"#d8c19a");t.position.y=-.55,e.add(t);let n=Rn(new kn(.2,.012,4,14),"#f0e6d2");return n.position.y=-.55,e.add(n),[[-.2,"#c97d68"],[0,"#6498b9"],[.2,"#cfb67c"]].forEach(([s,r])=>{dt(.008,.008,.4,"#e8dcc0",s,-1.15,0,e,3),Vt(.07,.34,.02,r,s,-1.45,0,e)}),dt(.01,.01,.35,"#e8dcc0",0,-.17,0,e,3),i.userData.anim=s=>{e.rotation.z=Math.sin(s*.9)*.06},i},estrellas(){let i=new Ae;return[[-.45,-.5,0],[.4,-.8,1],[0,-1.2,2]].forEach(([e,t,n])=>{let s=AM(new Ea(.2),16771488);s.scale.set(1,1,.4),s.position.set(e,t,0),dt(.006,.006,-t*.9,"#eadfc4",e,t/2+.1,0,i,3),i.add(s),i.userData["s"+n]=s,ki(i,16769162,1.3,e,t,0,.35)}),i.userData.anim=e=>{for(let t=0;t<3;t++)i.userData["s"+t].rotation.y=e*.8+t},i},farolillos(){let i=new Ae;[[-.55,14706010],[0,15770191],[.55,14706010]].forEach(([t,n],s)=>{dt(.008,.008,.35,"#4a3a32",t,-.17,0,i,3);let r=Tt(.18,n,t,-.55,0,1,1.35,1,i);r.material=new at({color:n}),ki(i,16751204,1.5,t,-.55,0,.4)});let e=Vt(1.4,.02,.02,"#3a2e28",0,0,0,i);return i.userData.anim=t=>{i.rotation.z=Math.sin(t*1.2)*.03},i},reloj(){let i=new Ae,e=Rn(new zt(.42,.42,.08,20),"#6b4d3a");e.rotation.x=Math.PI/2,i.add(e);let t=Rn(new zt(.35,.35,.02,20),"#f1e6cc");t.rotation.x=Math.PI/2,t.position.z=.05,i.add(t);let n=Vt(.03,.3,.015,"#3d2e26",0,.15,.075,null),s=Vt(.04,.2,.015,"#3d2e26",0,.1,.07,null),r=new Ae,a=new Ae;return r.position.z=0,a.position.z=0,r.add(n),a.add(s),i.add(r,a),i.userData.anim=o=>{let l=new Date;r.rotation.z=-l.getMinutes()/60*6.283,a.rotation.z=-(l.getHours()%12+l.getMinutes()/60)/12*6.283},i},guitarra(){let i=new Ae,e=new Ae;e.rotation.z=.35,i.add(e),Tt(.34,"#b9793f",0,-.35,0,1,1.15,.3,e),Tt(.24,"#b9793f",0,.05,0,1,1.1,.3,e);let t=dt(.1,.1,.05,"#4a3326",0,-.25,.1,e);return t.rotation.x=Math.PI/2,Vt(.1,1.05,.06,"#6b4d3a",0,.65,0,e),Vt(.14,.2,.06,"#4a3326",0,1.25,0,e),i},estantito(){let i=new Ae;Vt(1.3,.1,.35,"#7b5742",0,0,.1,i),dt(.12,.12,.35,"#bee1eb",-.4,.22,.1,i,8).material=new at({color:12509675,transparent:!0,opacity:.6}),dt(.1,.1,.28,"#e6c896",-.1,.19,.1,i,8);for(let e=0;e<3;e++){let t=Tt(.025,16773792,-.4+(e-1)*.04,.2+e*.03,.1,1,1,1,i);t.material=new at({color:16773792})}dt(.08,.06,.12,"#9a5b44",.4,.11,.1,i);for(let e=0;e<4;e++){let t=Rn(new Qt(.05,.3,4),"#6fae78");t.position.set(.4+(e-1.5)*.05,.34,.1),t.rotation.z=(e-1.5)*.25,i.add(t)}return ki(i,16771222,1.8,-.4,.25,.2,.3),i},mapa(){let i=new Ae;Vt(.9,.7,.03,"#e6d3a6",0,0,0,i),Vt(.94,.06,.05,"#6b4d3a",0,.38,0,i),Vt(.94,.06,.05,"#6b4d3a",0,-.38,0,i);let e=[[-.3,-.2],[-.12,.08],[0,-.05],[.14,.2],[.32,-.2]];for(let t=0;t<4;t++){let n=e[t],s=e[t+1],r=Math.hypot(s[0]-n[0],s[1]-n[1]),a=Vt(r,.015,.01,"#8d6b44",(n[0]+s[0])/2,(n[1]+s[1])/2,.02,i);a.rotation.z=Math.atan2(s[1]-n[1],s[0]-n[0])}return Tt(.04,"#c0463a",.1,-.26,.03,1,1,.5,i),i},mojon(){let i=new Ae;return[[0,.55,.2,"#7d7b86"],[.38,.42,.17,"#8d8b97"],[.7,.3,.14,"#9a98a4"],[.95,.2,.11,"#a8a6b2"]].forEach(([e,t,n,s])=>Tt(t,s,0,e+.1,0,1,.5,1,i)),i},farolpiedra(){let i=new Ae,e="#8a8896";dt(.4,.45,.18,e,0,.09,0,i,6),dt(.1,.12,.9,e,0,.6,0,i,6),dt(.35,.3,.14,e,0,1.1,0,i,6),Vt(.5,.5,.5,e,0,1.4,0,i),Vt(.26,.3,.52,"#ffe1a0",0,1.4,0,i).material=new at({color:16769440}),Vt(.52,.3,.26,"#ffe1a0",0,1.4,0,i).material=new at({color:16769440});let t=Rn(new Qt(.5,.4,4),e);return t.position.y=1.85,t.rotation.y=Math.PI/4,i.add(t),ki(i,16760430,3.4,0,1.4,0,.5),i},floresroca(){let i=new Ae,e=[];for(let t=-4;t<=4;t++){let n=new Ae;n.position.set(t*.17,0,Math.sin(t)*.15);let s=.4+Math.abs(t%3)*.18;dt(.012,.012,s,"#6a9a6e",0,s/2,0,n,3),Tt(.07,["#f2b6c8","#fff0a0","#a6c8ff"][(t+4)%3],0,s,0,1,1,1,n),i.add(n),e.push([n,t])}return i.userData.anim=t=>{e.forEach(([n,s])=>{n.rotation.z=Math.sin(t*1.1+s*.7)*.06})},i}};zs.farolpuente=function(){let i=new Ae,e=new Ae;i.add(e),dt(.012,.012,.4,"#4a3a32",0,-.2,0,e,3),dt(.16,.16,.05,"#5a4132",0,-.45,0,e);let t=Tt(.2,16766614,0,-.72,0,1,1.4,1,e);return t.material=new at({color:16766614}),dt(.16,.16,.05,"#5a4132",0,-1.05,0,e),ki(e,16758891,2.6,0,-.72,0,.5),i.userData.anim=n=>{e.rotation.z=Math.sin(n*1.1)*.06},i};zs.petalos=function(){let i=new Ae,e=Vt(1.1,.07,.07,"#6b4d3a",0,0,0,i);e.rotation.z=.4;let t=[];for(let n=0;n<7;n++){let s=-.45+n*.15,r=-.18+n*.13+(n%2?.1:-.05),a=Tt(.09,n%2?"#f6b9cb":"#f9d2de",s,r,.05,1,1,.7,i);t.push([a,n])}return i};zs.campanatemplo=function(){let i=new Ae,e=new Ae;return i.add(e),dt(.012,.012,.35,"#4a3a32",0,-.17,0,e,3),Vt(.2,.1,.2,"#6b4d3a",0,-.4,0,e),dt(.2,.34,.6,"#b98a3f",0,-.78,0,e,10),dt(.35,.35,.04,"#8a6228",0,-1.1,0,e,10),Tt(.06,"#6b4d3a",0,-1.1,0,1,1,1,e),i.userData.anim=t=>{e.rotation.z=Math.sin(t*.9)*.08},i};zs.frasco=function(){let i=new Ae,e=dt(.22,.22,.55,"#bee1eb",0,.28,0,i,10);e.material=new at({color:12509675,transparent:!0,opacity:.5});let t=dt(.19,.19,.34,"#6eb8e8",0,.2,0,i,10);return t.material=new at({color:7256296,transparent:!0,opacity:.75}),dt(.12,.12,.1,"#8b6a50",0,.62,0,i,8),ki(i,10542335,1.6,0,.3,0,.3),i};zs.lotocuenco=function(){let i=new Ae,e=dt(.34,.2,.22,"#5f7f8f",0,.12,0,i,12),t=dt(.3,.3,.02,"#78bed7",0,.22,0,i,12);t.material=new at({color:7913175});let n=[];for(let s=-2;s<=2;s++){let r=Tt(.1,s%2?"#f6b9cb":"#f9d2de",s*.09,.38+(2-Math.abs(s))*.03,0,.8,1.5,.8,i);r.rotation.z=-s*.25,n.push(r)}return Tt(.05,"#f2d27a",0,.3,0,1,1,1,i),i.userData.anim=s=>{i.rotation.y=Math.sin(s*.3)*.1},i};var CM={gato(){let i=new Ae;Tt(.4,"#3a3548",0,.3,0,1.3,.75,.9,i),Tt(.25,"#3a3548",.5,.52,0,1,1,1,i);for(let t of[-.12,.12]){let n=Rn(new Qt(.07,.16,4),"#3a3548");n.position.set(.5,.78,t),i.add(n);let s=Tt(.03,"#ffe27a",.72,.55,t*.8,1,1,1,i);s.material=new at({color:16769658})}let e=Rn(new kn(.3,.06,6,12,4),"#3a3548");return e.position.set(-.42,.18,.2),e.rotation.x=1.5,i.add(e),i.userData.anim=t=>{e.rotation.z=Math.sin(t*2)*.3},i},zorro(){let i=new Ae;Tt(.45,"#c7703a",0,.45,0,1.5,.8,.8,i),Tt(.28,"#c7703a",.75,.75,0,1.2,.9,.9,i),Tt(.12,"#fff2e0",1,.7,0,1.2,.7,1,i);for(let t of[-.14,.14]){let n=Rn(new Qt(.09,.25,4),"#c7703a");n.position.set(.72,1.02,t),i.add(n)}let e=Tt(.3,"#c7703a",-.75,.5,0,2,.8,.8,i);return Tt(.14,"#fff2e0",-1.1,.55,0,1,1,1,i),i.userData.anim=t=>{e.rotation.z=Math.sin(t*1.5)*.15},i},buho(){let i=new Ae;Tt(.34,"#8a7560",0,.5,0,1,1.4,1,i),Tt(.22,"#e8dcc4",0,.46,.14,1,1.3,.6,i);for(let e of[-.14,.14]){let t=Tt(.1,"#fff1b0",e,.78,.22,1,1,.6,i),n=Tt(.04,"#2a2030",e,.78,.3,1,1,1,i),s=Rn(new Qt(.06,.18,4),"#8a7560");s.position.set(e*1.5,1.05,0),i.add(s)}return i},mariposa(){let i=new Ae,e=[];for(let t of[-1,1]){let n=new Ae,s=new ge(new pi(.3,8),new at({color:8382624,side:An,transparent:!0,opacity:.9}));s.position.x=t*.28,n.add(s),i.add(n),e.push([n,t])}return Tt(.05,"#3a3a50",0,0,0,1,1,1,i),ki(i,12512200,1.6,0,0,0,.35),i.userData.anim=t=>{let n=Math.sin(t*14)*.9;e.forEach(([s,r])=>{s.rotation.y=r*n})},i}},se={on:!1,root:null,markers:{},models:{},vis:null,vcur:null,vnext:25,sel:null,rit:{te:0,riego:0},mem:0},RM=i=>zc.find(e=>e.id===i),Bs=()=>!!ie.repaired.techo,E0=(i,e,t)=>{try{let n=new Ts(new P(i,30,e),new P(0,-1,0),0,60);n.camera=pn;let s=n.intersectObjects(Ve.children,!0).filter(r=>r.object.isMesh&&!r.object.userData.hab&&r.object.visible);return s.length?s[0].point.y:t}catch{return t}};function bd(){let i=[];return se.root&&(se.on&&Object.values(se.markers).forEach(e=>i.push(e)),se.vcur&&i.push(se.vcur.g)),i}var qc=()=>{for(let i of Or){let e=ie.decor[i.id],t=se.models[i.id];if(t&&t.id!==e&&(se.root.remove(t.g),delete se.models[i.id]),e&&!se.models[i.id]){let n=zs[e]();n.userData.hab=!0,n.traverse(r=>{r.userData.hab=!0});let s=no(i);n.position.set(s[0],s[1],s[2]),se.root.add(n),se.models[i.id]={id:e,g:n}}}},no=i=>(i.kind==="roca"&&!i._y&&(i._y=E0(i.p[0],i.p[2],i.p[1])),i.kind==="roca"?[i.p[0],i._y,i.p[2]]:i.p);function T0(){se.root=new Ae,se.root.userData.hab=!0,Ve.add(se.root);for(let i of Or){let e=new Ae,t=new ge(new kn(.62,.05,6,28),new at({color:16771512,transparent:!0,opacity:.7,depthTest:!1}));t.rotation.x=Math.PI/2,t.renderOrder=9,e.add(t);let n=new ge(new Wt(.95,8,6),new at({visible:!1}));e.add(n),e.userData.itemId="slot:"+i.id,e.userData.hab=!0,t.userData.hab=!0,n.userData.hab=!0,e.visible=!1;let s=no(i),r=i.kind==="colgante"?-.9:i.kind==="pared"?0:.9;e.position.set(s[0],s[1]+r,s[2]),i.kind==="pared"&&(t.rotation.x=0),se.root.add(e),se.markers[i.id]=e}NM(),qc(),ni(),window.__habd={H:se,SLOTS:Or,place:P0,spawn:w0,state:ie,DM:zc,show:i=>{se.on=i,I0()}}}var IM={gato:[2.6,ce+1.12,3.45,.2],zorro:[-5.6,0,.9,.6],buho:[6.7,ce+1.35,3.75,0],mariposa:[3.4,ce+2.4,3.4,0]};function w0(i){if(se.vcur)return;let e=Object.keys(id),t=i||e[Math.random()*e.length|0];if(t===se.vlast&&!i)return;se.vlast=t;let n=CM[t]();n.userData.itemId="visitante",n.userData.hab=!0,n.traverse(r=>{r.userData.hab=!0,r.userData.itemId||(r.userData.itemId="visitante")});let s=IM[t].slice();t==="zorro"&&(s[1]=E0(s[0],s[2],ce-1.3)),n.position.set(s[0],s[1],s[2]),n.rotation.y=s[3],n.scale.setScalar(.01),se.root.add(n),se.vcur={k:t,g:n,t:0,life:50,done:!1,base:s};try{Qe.chime((s[0]-1.5)/12,2)}catch{}UX.cap("Llega un visitante",3e4)}function PM(){let i=se.vcur;if(!i||i.done)return;let e=id[i.k],t=ie.vis[i.k]||0;ie.vis[i.k]=t+1,i.done=!0,i.t=Math.max(i.t,i.life-3.5);let n=e.notes[t%e.notes.length];ie.notes.includes(n)||ie.notes.push(n),io(2);let s=n;t===0&&e.gift&&!ie.own[e.gift]&&(ie.own[e.gift]=!0,s+=" \xB7 Te dej\xF3: "+RM(e.gift).name),Pt(s),Us([i.g.position.x,i.g.position.y+.5,i.g.position.z]),UX.hap([10,50,10]);try{Qe.chime((i.g.position.x-1.5)/12,3)}catch{}ni(),Fn()}var io=i=>{ie.mem=(ie.mem||0)+i,ni()},A0=90;function LM(){if(se.rit.te>0)return;se.rit.te=A0,se.teaT=7,ie.cnt=ie.cnt||{},ie.cnt.te=(ie.cnt.te||0)+1,io(1),Pt("Preparas t\xE9. El vapor sube despacio. Qu\xE9 calma.");try{Qe.chime(-.4,1)}catch{}UX.hap([8,40,8]),UX.cap("Tetera",2e4),se.tea||(se.tea=zs.tetera(),se.tea.userData.hab=!0,se.tea.traverse(e=>e.userData.hab=!0),se.root.add(se.tea));let i=no(Or[0]);se.tea.position.set(i[0],i[1],i[2]),se.tea.visible=!0,Fn()}function DM(){if(!(se.rit.riego>0)){if(!ie.repaired.plantas){Pt("Primero repara las plantas");return}se.rit.riego=A0,ie.cnt=ie.cnt||{},ie.cnt.rg=(ie.cnt.rg||0)+1,io(1),Us([6.9,ce+1.2,3]),Us([-2.4,ce+1.2,3.3]),Pt("Riegas las plantas. Huelen a campo."),UX.hap([8,40,8]),Fn()}}var Xc=[];function UM(i,e){if(!it.started||!Bs()){Xc.forEach(r=>r.visible=!1);return}let t=_0(),n=b0[t];if(!Xc.length)for(let r=0;r<46;r++){let a=Rt(Nt,16777215,.32+Math.random()*.22,0,!1);a.userData.p={x:Math.random()*24-9,y:Math.random()*14,z:Math.random()*14-5,ph:Math.random()*6.3},a.userData.hab=!0,se.root.add(a),Xc.push(a)}let s=n[0]<<16|n[1]<<8|n[2];for(let r of Xc){let a=r.userData.p,o=t===1?.5:t===3?.9:t===2?1.3:1.1;a.y+=(t===1?o:-o)*i,a.x+=Math.sin(e*.6+a.ph)*.5*i+.25*i,a.y<-1&&(a.y=14),a.y>14&&(a.y=-1),a.x>15&&(a.x=-9),r.position.set(a.x,a.y+ce-1,a.z),r.visible=!0,r.material.color.setHex(s),r.material.opacity=t===1?.4+.25*Math.sin(e*2+a.ph):.75}}var vd=14;function C0(i,e){if(!se.root)return;se.rit.te=Math.max(0,se.rit.te-i),se.rit.riego=Math.max(0,se.rit.riego-i),se.teaT>0&&(se.teaT-=i,se.teaT<=0&&se.tea&&(se.tea.visible=!1),se.tea&&!se.models.porcheI&&(se.tea.visible=se.teaT>0));let t=1;for(let n in se.models){let s=se.models[n].g;s.userData.anim&&s.userData.anim(e),s.traverse(r=>{r.isSprite&&r.userData.gl!=null&&r.material&&(r.material.opacity=r.userData.gl*(.85+.15*Math.sin(e*3+s.id)))})}if(se.tea&&se.tea.visible&&se.tea.userData.anim(e),se.vcur){let n=se.vcur;n.t+=i;let s=Math.max(.01,Math.min(1,n.t/1.5,(n.life-n.t)/1.5));n.g.scale.setScalar(s*s*(3-2*s)*(n.k==="mariposa"?1.7:1.1)),n.g.userData.anim&&n.g.userData.anim(e),n.k==="mariposa"&&n.g.position.set(n.base[0]+Math.sin(e*.6)*1.6,n.base[1]+Math.sin(e*.9)*.5,n.base[2]+Math.cos(e*.5)*.8),n.t>=n.life&&(se.root.remove(n.g),se.vcur=null)}if(it.started&&Bs()&&!se.vcur&&(se.vnext-=i,se.vnext<=0&&(se.vnext=80+Math.random()*70,w0())),vd-=i,vd<=0&&(vd=24+Math.random()*20,Object.values(ie.decor).includes("campanilla"))){UX.cap("Campanilla de viento",2e4);try{Qe.chime(.5,4)}catch{}}if(se.on){let n=.65+.3*Math.sin(e*2.6);for(let s in se.markers){let r=se.markers[s];r.children[0].material.opacity=se.sel===s.replace("slot:","")?1:n}}if(UM(i,e),se.btn){let n=Bs();se.btn.hidden===n&&(se.btn.hidden=!n)}}function R0(i){return i==="visitante"?(PM(),!0):typeof i=="string"&&i.startsWith("slot:")?(se.sel=i.slice(5),ni(),!0):!1}function Os(i,e,t,n){let s=document.createElement("button");return s.type="button",s.className="chip "+(t||""),s.style.cssText="min-width:0;align-self:center;white-space:nowrap;flex-direction:row",s.textContent=i,n&&(s.disabled=!0),s.onclick=e,s}function NM(){let i=gt("top");se.btn=document.createElement("button"),se.btn.id="habBtn",se.btn.type="button",se.btn.textContent="Habitar",se.btn.hidden=!0,gt("mats").after(se.btn),se.btn.onclick=()=>{se.on=!se.on,se.sel=null,I0()},se.panel=document.createElement("div"),se.panel.id="hab",se.panel.style.cssText="display:none;gap:14px;align-items:flex-start;min-width:max-content",gt("panel").appendChild(se.panel),setTimeout(()=>{Bs()&&md(ie)>0&&Pt("Una carta nueva te espera en el diario")},4e3),setInterval(()=>{Bs()&&!document.hidden&&M0(ie,Pt,t=>t)},2500);let e=Bs();setInterval(()=>{let t=Bs();t!==e&&(e=t,t&&Pt("La caba\xF1a ya se puede habitar: toca \xABHabitar\xBB")),se.on&&(se.rit.te>0||se.rit.riego>0)&&ni()},1e3)}function I0(){if(se.on)for(let i of Or){let e=se.markers[i.id],t=no(i),n=i.kind==="colgante"?-.9:i.kind==="pared"?0:.9;e.position.set(t[0],t[1]+n,t[2])}gt("chips").style.display=se.on?"none":"",se.btn.textContent=se.on?"Volver a reparar":"Habitar";for(let i in se.markers)se.markers[i].visible=se.on;ni()}function ni(){if(!se.panel)return;if(!se.on){se.panel.style.display="none";return}se.panel.style.display="flex",se.panel.textContent="";let i=document.createElement("div");i.className="grp";let e=document.createElement("span");e.className="lab",e.textContent="Recuerdos: "+(ie.mem||0),i.appendChild(e);let t=(r,a,o)=>i.appendChild(Os(o>0?r+" \xB7 "+Math.ceil(o)+" s":r,a,"",o>0));t("Preparar t\xE9",LM,se.rit.te),t("Regar plantas",DM,se.rit.riego),i.appendChild(Os("Diario de la caba\xF1a",FM,"")),rd(ie)&&i.appendChild(Os("Jard\xEDn zen",()=>t0({tr:r=>r,ctx:()=>Qe.ctx,addMem:io,say:Pt,chime:()=>{try{Qe.chime(0,2)}catch{}}}),"ready")),i.appendChild(Os(v0(),()=>{y0(),ni()},"")),se.panel.appendChild(i);let n=se.sel&&wM(se.sel),s=document.createElement("div");if(s.className="grp",n){let r=document.createElement("span");r.className="lab",r.textContent=n.n,s.appendChild(r),ie.decor[n.id]&&s.appendChild(Os("Quitar",()=>{delete ie.decor[n.id],qc(),ni(),Fn()},"")),zc.filter(a=>a.kind===n.kind&&ie.decor[n.id]!==a.id&&(a.gate==null||to()[a.gate])).forEach(a=>{let o=!!ie.own[a.id]||a.gate!=null;s.appendChild(Os(o?a.name:a.name+" \xB7 "+a.cost,()=>P0(n,a),o?"done":(ie.mem||0)>=a.cost?"ready":"locked"))})}else{let r=document.createElement("span");r.className="loot",r.style.alignSelf="center",r.textContent="Toca un c\xEDrculo de la caba\xF1a para decorar ese lugar.",s.appendChild(r)}se.panel.appendChild(s)}function P0(i,e){if(!ie.own[e.id]){if((ie.mem||0)<e.cost){Pt("Te faltan "+(e.cost-(ie.mem||0))+" recuerdos. Prepara t\xE9 o espera visitas.");return}ie.mem-=e.cost,ie.own[e.id]=!0}for(let n of Object.keys(ie.decor))ie.decor[n]===e.id&&delete ie.decor[n];ie.decor[i.id]=e.id,qc();let t=no(i);Us([t[0],t[1]+1,t[2]]);try{Qe.chime((t[0]-1.5)/12,2)}catch{}UX.hap([10,40,10]),Pt(e.name+" colocado"),ni(),Fn()}function FM(){let i=document.createElement("div");i.style.cssText="position:fixed;inset:0;z-index:50;display:grid;place-items:center;background:rgba(20,22,48,.6)";let e=document.createElement("div");e.style.cssText="background:#363a66;color:#fbf1e0;border:1px solid #5a609a;border-radius:16px;padding:18px 20px;max-width:min(88vw,420px);max-height:70vh;overflow:auto;font:15px/1.45 system-ui";let t=document.createElement("h2");if(t.style.cssText="margin:0 0 10px;font:600 1.1rem system-ui",t.textContent="Diario de la caba\xF1a",e.appendChild(t),!ie.notes.length){let s=document.createElement("p");s.textContent="A\xFAn vac\xEDo. Los visitantes dejan notas sobre quien vivi\xF3 aqu\xED.",e.appendChild(s)}ie.notes.forEach(s=>{let r=document.createElement("p");r.style.margin="0 0 10px",r.textContent="\xB7 "+s,e.appendChild(r)}),g0(e,ie,s=>s,io,Fn),ie.cnt=ie.cnt||{},rd(ie)&&!ie.cnt.zen&&(ie.cnt.zen=1,Fn(),setTimeout(()=>{Pt("Se abri\xF3 el jard\xEDn zen: ya le\xEDste todas las cartas de Mara"),ni()},600));let n=Os("Cerrar",()=>i.remove(),"");e.appendChild(n),i.appendChild(e),i.onclick=s=>{s.target===i&&i.remove()},document.body.appendChild(i)}var L0=()=>{se.root&&(qc(),ni())};var Md=new Ts,D0=new oe,OM=()=>Object.values(Ht).map(i=>i.g).concat([nn],bd());function Yc(i){let e=Gn.getBoundingClientRect();D0.set((i.clientX-e.left)/e.width*2-1,-((i.clientY-e.top)/e.height)*2+1),Md.setFromCamera(D0,pn);{let n=bd();if(n.length){let s=Md.intersectObjects(n,!0);for(let r of s){let a=r.object;for(;a&&!a.userData.itemId;)a=a.parent;if(a&&String(a.userData.itemId).startsWith("slot:"))return{id:a.userData.itemId,point:r.point}}}}let t=Md.intersectObjects(OM().concat(Sc),!0);for(let n of t){if(!Ku(n.object))continue;let s=n.object;for(;s&&!s.userData.itemId;)s=s.parent;return s?{id:s.userData.itemId,point:n.point}:{id:null,point:n.point}}return{id:null}}var Sd=0,Ed=[0,0],BM=(i,e)=>$a(i,e,Fs()*.8).length>0,Hi=new Map,Xn=null,On=null,Td=0,so=0,U0=0,Vi=null,N0=0,F0=0,qn;function O0(){qn=document.createElement("div"),qn.style.cssText="position:fixed;pointer-events:none;z-index:4;width:70px;height:70px;margin:-35px 0 0 -35px;border-radius:50%;border:2px solid rgba(255,255,255,.55);box-shadow:0 0 14px rgba(255,255,255,.25);opacity:0;transition:opacity .2s",document.body.appendChild(qn)}var B0=()=>!Xn;function z0(){Gn.addEventListener("pointerdown",e=>{if(!it.started)return;if(Gn.setPointerCapture(e.pointerId),Hi.set(e.pointerId,{x:e.clientX,y:e.clientY}),Qe.resume(),Hi.size===2){Xn="pinch";let[r,a]=[...Hi.values()];Td=Math.hypot(r.x-a.x,r.y-a.y);return}let t=Yc(e);On={x:e.clientX,y:e.clientY,t:performance.now(),moved:0,id:t.id};let n=performance.now();n-Sd<320&&Math.hypot(e.clientX-Ed[0],e.clientY-Ed[1])<30?(Ur(),Sd=0):(Sd=n,Ed=[e.clientX,e.clientY]);let s=BM(e.clientX,e.clientY);e.button===2||e.shiftKey?Xn="pan":Xn=s||t.id&&Um(t.id)?"scrub":"orbit",e.pointerType==="mouse"&&e.button===1&&(Xn="pan")}),Gn.addEventListener("contextmenu",e=>e.preventDefault()),Gn.addEventListener("pointermove",e=>{Xn==="scrub"&&it.started&&(qn.style.opacity=1,qn.style.width=qn.style.height=Fs()*1.6+"px",qn.style.margin=-Fs()*.8+"px 0 0 "+-Fs()*.8+"px",qn.style.left=e.clientX+"px",qn.style.top=e.clientY+"px");let t=Hi.get(e.pointerId);if(!t)return;let n=e.clientX-t.x,s=e.clientY-t.y;if(t.x=e.clientX,t.y=e.clientY,Xn==="pinch"&&Hi.size===2){let[r,a]=[...Hi.values()],o=Math.hypot(r.x-a.x,r.y-a.y);fe.tr=xt(fe.tr*Td/o,9,34),Td=o,Za(n/2,s/2);return}if(qn.style.left=e.clientX+"px",qn.style.top=e.clientY+"px",!!On){if(On.moved+=Math.hypot(n,s),Xn==="pan"){Za(n,s);return}if(Xn==="orbit")fe.tth=xt(fe.tth-n*.006,-.95,.95),fe.tph=xt(fe.tph+s*.004,.03,.42);else if(Xn==="scrub"){let r=Math.hypot(n,s),a=$a(e.clientX,e.clientY,Fs());if(a.length){let o=xt(r/16,0,1)*.08;a.forEach(c=>{c.m.userData.s=Math.max(0,c.m.userData.s-o*(1-.4*c.dd/Fs())),Fi(c.m)}),Vi=Yc(e).point||a[0].m.getWorldPosition(new P),U0=xt(r/20,0,1),so=performance.now(),!On.hapd&&so-F0>1200&&(On.hapd=!0,F0=so,UX.hap(6)),Math.random()<.5&&Yu(Vi.x,Vi.y+.1,Vi.z+.1,1,16777215,1.2,1.2),Qe.scrub(U0),clearTimeout(N0),N0=setTimeout(()=>{zi(),Fn()},700)}else Qe.scrub(0)}}});let i=e=>{if(Hi.has(e.pointerId)){if(Hi.delete(e.pointerId),Qe.scrub(0),Vi=null,qn.style.opacity=0,On&&On.moved<8&&performance.now()-On.t<450&&On.id&&Xn!=="pinch"){R0(On.id)||On.id==="gato"&&Wm();let t=Vu(On.id);t&&ja(t)}Hi.size===0&&(On=null,Xn=null)}};Gn.addEventListener("pointerup",i),Gn.addEventListener("pointercancel",i),Gn.addEventListener("wheel",e=>{it.started&&(e.preventDefault(),fe.tr=xt(fe.tr*(1+e.deltaY*.001),9,34))},{passive:!1})}function k0(i){let e=Vi&&ie.repaired.barandal&&performance.now()-so<400;e&&It.handL.position.set(Vi.x,Vi.y+1.2,Vi.z+1.2),It.handL.intensity+=((e?2.4:0)-It.handL.intensity)*Math.min(1,i*6),performance.now()-so>200&&Qe.scrub(0)}sm();$p();fm();ym();Cm();Rm();Im();et.traverse(i=>{i.isMesh&&!i.userData.item&&(i.castShadow=!0,i.receiveShadow=!0)});Object.values(Ht).forEach(i=>i.blobs.forEach(e=>{e.castShadow=!1}));Jp();Object.values(Ht).forEach(i=>i.blobs.forEach(Fi));Om(i=>{Zu(i),ja(i)});bm();nm(Pt);Rr();zi();Ka();Pm();O0();Bm(Zu);Gm();am();z0();PZ.ctx=()=>Qe.ctx;PZ.started=()=>it.started;Hm(Km);gt("go").onclick=()=>{try{Qe.init(),Qe.resume(),Qe.rain(it.rainOn),Qe.setMood(hs(),1)}catch{}gt("start").hidden=!0,it.started=!0,Ds()===Kt.length&&(Ft.armT=it.T+3),setTimeout(()=>{gt("hint").style.opacity=0},12e3)};Lm();Zm();om();sd(UX);fd(UX);gd(UX);T0();window.__habReset=L0;var wd=performance.now(),Ad=0,Zc=0,Cd=0,Jc=0,$c=Math.min(devicePixelRatio||1,1.5);function H0(i){if(requestAnimationFrame(H0),PZ.on){wd=i;return}let e=Math.min(.05,(i-wd)/1e3);if(wd=i,it.T+=e,Zc+=e,Cd++,Zc>3){let t=Zc/Cd;Zc=0,Cd=0,Jc=t>.027?Jc+1:0,Jc>=2&&$c>1&&(Jc=0,$c=Math.max(1,$c-.25),Nn.setPixelRatio($c),Ec())}it.started&&(qt.next-=e,qt.next<=0&&(qt.next=50+Math.random()*80,td()),Jm(e),!Ft.on&&!Ft.shown&&it.T>Ft.armT&&Ds()===Kt.length&&nd(),$m(e)),Dm(e,B0()),lm(e),k0(e),vm(e,hs(),!!ie.repaired.nichos),pm(e),Mm(e),Xm(e,it.T),C0(e,it.T),Ad-=e,Ad<=0&&(Ad=.5,zi(),zm(),Qe.setMood(hs(),1)),Qe.update(-3,1,it.T),Nn.render(Ve,pn)}Vm();UX.init();requestAnimationFrame(H0);window.__cab={A:Qe,R:Nn,scene:Ve,shoot:td,celebrar:()=>{Ft.shown=!1,nd()},star:qt,fest:Ft,fl2:us,get T(){return it.T},cat:nn,dirtyNear:$a,resetCam:Ur,panBy:Za,zoomBy:Dr,state:ie,IT:Ht,ITEMS:Kt,C:fe,attempt:ja,measure:Uc,cleanOf:$u,applyVisuals:Rr,updateUI:zi,pick:Yc,cam:pn,toast:Pt,get started(){return it.started}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
