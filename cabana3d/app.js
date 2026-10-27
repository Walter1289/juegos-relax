(()=>{var Lf=0,qh=1,Df=2;var Na=1,Il=2,Sr=3,is=0,un=1,mn=2,yi=0,ss=1,Ui=2,Yh=3,Zh=4,Nf=5;var ws=100,Uf=101,Ff=102,Of=103,Bf=104,zf=200,kf=201,Hf=202,Gf=203,Jh=204,$h=205,Vf=206,Wf=207,Xf=208,qf=209,Yf=210,Zf=211,Jf=212,$f=213,jf=214,Wo=0,Xo=1,qo=2,lr=3,Yo=4,Zo=5,Jo=6,$o=7,Pl=0,Kf=1,Qf=2,ii=0,jh=1,Kh=2,Qh=3,eu=4,tu=5,nu=6,iu=7;var su=300,rs=301,As=302,Ll=303,Dl=304,Ua=306,Ki=1e3,ui=1001,jo=1002,Kt=1003,ep=1004;var Fa=1005;var hn=1006,Nl=1007;var as=1008;var Cn=1009,ru=1010,au=1011,Er=1012,Ul=1013,si=1014,Vn=1015,ri=1016,Fl=1017,Ol=1018,Tr=1020,ou=35902,lu=35899,cu=1021,hu=1022,Wn=1023,fi=1026,os=1027,wr=1028,Bl=1029,ls=1030,zl=1031;var kl=1033,Oa=33776,Ba=33777,za=33778,ka=33779,Hl=35840,Gl=35841,Vl=35842,Wl=35843,Xl=36196,ql=37492,Yl=37496,Zl=37488,Jl=37489,Ha=37490,$l=37491,jl=37808,Kl=37809,Ql=37810,ec=37811,tc=37812,nc=37813,ic=37814,sc=37815,rc=37816,ac=37817,oc=37818,lc=37819,cc=37820,hc=37821,uc=36492,dc=36494,fc=36495,pc=36283,mc=36284,Ga=36285,gc=36286;var ta=2300,Ko=2301,Go=2302,Lh=2303,Dh=2400,Nh=2401,Uh=2402;var tp=3200;var Va=0,np=1,Fi="",nn="srgb",na="srgb-linear",ia="linear",wt="srgb";var Vo=7680;var ip=519,sp=512,rp=513,ap=514,xc=515,op=516,lp=517,yc=518,cp=519,uu=35044;var du="300 es",ei=2e3,cr=2001;function mg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function gg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function sa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hp(){let i=sa("canvas");return i.style.display="block",i}var qd={},hr=null;function ra(...i){let e="THREE."+i.shift();hr?hr("log",e,...i):console.log(e,...i)}function up(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function We(...i){i=up(i);let e="THREE."+i.shift();if(hr)hr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ye(...i){i=up(i);let e="THREE."+i.shift();if(hr)hr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ys(...i){let e=i.join(" ");e in qd||(qd[e]=!0,We(...i))}function dp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var fp={[Wo]:Xo,[qo]:Jo,[Yo]:$o,[lr]:Zo,[Xo]:Wo,[Jo]:qo,[$o]:Yo,[Zo]:lr},pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var sh=Math.PI/180,Qo=180/Math.PI;function Ii(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function ut(i,e,t){return Math.max(e,Math.min(t,i))}function xg(i,e){return(i%e+e)%e}function rh(i,e,t){return(1-t)*i+t*e}function hi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var yu=class yu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};yu.prototype.isVector2=!0;var he=yu,Dn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],p=r[a+1],g=r[a+2],M=r[a+3];if(d!==M||l!==u||c!==p||h!==g){let m=l*u+c*p+h*g+d*M;m<0&&(u=-u,p=-p,g=-g,M=-M,m=-m);let f=1-o;if(m<.9995){let y=Math.acos(m),v=Math.sin(y);f=Math.sin(f*y)/v,o=Math.sin(o*y)/v,l=l*f+u*o,c=c*f+p*o,h=h*f+g*o,d=d*f+M*o}else{l=l*f+u*o,c=c*f+p*o,h=h*f+g*o,d=d*f+M*o;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*p-c*u,e[t+1]=l*g+h*u+c*d-o*p,e[t+2]=c*g+h*p+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},_u=class _u{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ah.copy(this).projectOnVector(e),this.sub(ah)}reflect(e){return this.sub(ah.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_u.prototype.isVector3=!0;var D=_u,ah=new D,Yd=new Dn,vu=class vu{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],M=s[0],m=s[3],f=s[6],y=s[1],v=s[4],x=s[7],S=s[2],E=s[5],A=s[8];return r[0]=a*M+o*y+l*S,r[3]=a*m+o*v+l*E,r[6]=a*f+o*x+l*A,r[1]=c*M+h*y+d*S,r[4]=c*m+h*v+d*E,r[7]=c*f+h*x+d*A,r[2]=u*M+p*y+g*S,r[5]=u*m+p*v+g*E,r[8]=u*f+p*x+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,p=c*r-a*l,g=t*d+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return e[0]=d*M,e[1]=(s*c-h*n)*M,e[2]=(o*n-s*a)*M,e[3]=u*M,e[4]=(h*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=p*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ys("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(oh.makeScale(e,t)),this}rotate(e){return ys("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(oh.makeRotation(-e)),this}translate(e,t){return ys("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(oh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};vu.prototype.isMatrix3=!0;var Qe=vu,oh=new Qe,Zd=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jd=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yg(){let i={enabled:!0,workingColorSpace:na,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===wt&&(s.r=Pi(s.r),s.g=Pi(s.g),s.b=Pi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===wt&&(s.r=or(s.r),s.g=or(s.g),s.b=or(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fi?ia:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ys("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ys("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[na]:{primaries:e,whitePoint:n,transfer:ia,toXYZ:Zd,fromXYZ:Jd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:e,whitePoint:n,transfer:wt,toXYZ:Zd,fromXYZ:Jd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),i}var dt=yg();function Pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function or(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Vs,el=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vs===void 0&&(Vs=sa("canvas")),Vs.width=e.width,Vs.height=e.height;let s=Vs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Vs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=sa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Pi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pi(t[n]/255)*255):t[n]=Pi(t[n]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},_g=0,ur=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=Ii(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(lh(s[a].image)):r.push(lh(s[a]))}else r=lh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function lh(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?el.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}var vg=0,ch=new D,vn=class i extends pi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ui,s=ui,r=hn,a=as,o=Wn,l=Cn,c=i.DEFAULT_ANISOTROPY,h=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=Ii(),this.name="",this.source=new ur(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ch).x}get height(){return this.source.getSize(ch).y}get depth(){return this.source.getSize(ch).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==su)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ki:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ki:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=su;vn.DEFAULT_ANISOTROPY=1;var bu=class bu{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],M=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,x=(p+1)/2,S=(f+1)/2,E=(h+u)/4,A=(d+M)/4,_=(g+m)/4;return v>x&&v>S?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=E/n,r=A/n):x>S?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=E/s,r=_/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=A/r,s=_/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(d-M)*(d-M)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-M)/y,this.z=(u-h)/y,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bu.prototype.isVector4=!0;var kt=bu,tl=class extends pi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new vn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ur(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},wn=class extends tl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},aa=class extends vn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var nl=class extends vn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Cl=class Cl{constructor(e,t,n,s,r,a,o,l,c,h,d,u,p,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,d,u,p,g,M,m)}set(e,t,n,s,r,a,o,l,c,h,d,u,p,g,M,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Cl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ws.setFromMatrixColumn(e,0).length(),r=1/Ws.setFromMatrixColumn(e,1).length(),a=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,p=a*d,g=o*h,M=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=u-M*c,t[9]=-o*l,t[2]=M-u*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,p=l*d,g=c*h,M=c*d;t[0]=u+M*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=M+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,p=l*d,g=c*h,M=c*d;t[0]=u-M*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=M-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,p=a*d,g=o*h,M=o*d;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+M,t[1]=l*d,t[5]=M*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,p=a*c,g=o*l,M=o*c;t[0]=l*h,t[4]=M-u*d,t[8]=g*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+g,t[10]=u-M*d}else if(e.order==="XZY"){let u=a*l,p=a*c,g=o*l,M=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+M,t[5]=a*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=M*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bg,e,Mg)}lookAt(e,t,n){let s=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Yi.crossVectors(n,Pn),Yi.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Yi.crossVectors(n,Pn)),Yi.normalize(),fo.crossVectors(Pn,Yi),s[0]=Yi.x,s[4]=fo.x,s[8]=Pn.x,s[1]=Yi.y,s[5]=fo.y,s[9]=Pn.y,s[2]=Yi.z,s[6]=fo.z,s[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],M=n[6],m=n[10],f=n[14],y=n[3],v=n[7],x=n[11],S=n[15],E=s[0],A=s[4],_=s[8],w=s[12],C=s[1],P=s[5],N=s[9],B=s[13],R=s[2],L=s[6],O=s[10],k=s[14],j=s[3],G=s[7],Y=s[11],K=s[15];return r[0]=a*E+o*C+l*R+c*j,r[4]=a*A+o*P+l*L+c*G,r[8]=a*_+o*N+l*O+c*Y,r[12]=a*w+o*B+l*k+c*K,r[1]=h*E+d*C+u*R+p*j,r[5]=h*A+d*P+u*L+p*G,r[9]=h*_+d*N+u*O+p*Y,r[13]=h*w+d*B+u*k+p*K,r[2]=g*E+M*C+m*R+f*j,r[6]=g*A+M*P+m*L+f*G,r[10]=g*_+M*N+m*O+f*Y,r[14]=g*w+M*B+m*k+f*K,r[3]=y*E+v*C+x*R+S*j,r[7]=y*A+v*P+x*L+S*G,r[11]=y*_+v*N+x*O+S*Y,r[15]=y*w+v*B+x*k+S*K,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],M=e[7],m=e[11],f=e[15],y=l*p-c*u,v=o*p-c*d,x=o*u-l*d,S=a*p-c*h,E=a*u-l*h,A=a*d-o*h;return t*(M*y-m*v+f*x)-n*(g*y-m*S+f*E)+s*(g*v-M*S+f*A)-r*(g*x-M*E+m*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],M=e[13],m=e[14],f=e[15],y=t*o-n*a,v=t*l-s*a,x=t*c-r*a,S=n*l-s*o,E=n*c-r*o,A=s*c-r*l,_=h*M-d*g,w=h*m-u*g,C=h*f-p*g,P=d*m-u*M,N=d*f-p*M,B=u*f-p*m,R=y*B-v*N+x*P+S*C-E*w+A*_;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/R;return e[0]=(o*B-l*N+c*P)*L,e[1]=(s*N-n*B-r*P)*L,e[2]=(M*A-m*E+f*S)*L,e[3]=(u*E-d*A-p*S)*L,e[4]=(l*C-a*B-c*w)*L,e[5]=(t*B-s*C+r*w)*L,e[6]=(m*x-g*A-f*v)*L,e[7]=(h*A-u*x+p*v)*L,e[8]=(a*N-o*C+c*_)*L,e[9]=(n*C-t*N-r*_)*L,e[10]=(g*E-M*x+f*y)*L,e[11]=(d*x-h*E-p*y)*L,e[12]=(o*w-a*P-l*_)*L,e[13]=(t*P-n*w+s*_)*L,e[14]=(M*v-g*S-m*y)*L,e[15]=(h*S-d*v+u*y)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,p=r*h,g=r*d,M=a*h,m=a*d,f=o*d,y=l*c,v=l*h,x=l*d,S=n.x,E=n.y,A=n.z;return s[0]=(1-(M+f))*S,s[1]=(p+x)*S,s[2]=(g-v)*S,s[3]=0,s[4]=(p-x)*E,s[5]=(1-(u+f))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(g+v)*A,s[9]=(m-y)*A,s[10]=(1-(u+M))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ws.set(s[0],s[1],s[2]).length(),o=Ws.set(s[4],s[5],s[6]).length(),l=Ws.set(s[8],s[9],s[10]).length();r<0&&(a=-a),$n.copy(this);let c=1/a,h=1/o,d=1/l;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=h,$n.elements[5]*=h,$n.elements[6]*=h,$n.elements[8]*=d,$n.elements[9]*=d,$n.elements[10]*=d,t.setFromRotationMatrix($n),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=ei,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),p=(n+s)/(n-s),g,M;if(l)g=r/(a-r),M=a*r/(a-r);else if(o===ei)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===cr)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ei,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),p=-(n+s)/(n-s),g,M;if(l)g=1/(a-r),M=a/(a-r);else if(o===ei)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===cr)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Cl.prototype.isMatrix4=!0;var pt=Cl,Ws=new D,$n=new pt,bg=new D(0,0,0),Mg=new D(1,1,1),Yi=new D,fo=new D,Pn=new D,$d=new pt,jd=new Dn,ti=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $d.makeRotationFromQuaternion(e),this.setFromRotationMatrix($d,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jd.setFromEuler(this),this.setFromQuaternion(jd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ti.DEFAULT_ORDER="XYZ";var dr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Sg=0,Kd=new D,Xs=new Dn,Ei=new pt,po=new D,Gr=new D,Eg=new D,Tg=new Dn,Qd=new D(1,0,0),ef=new D(0,1,0),tf=new D(0,0,1),nf={type:"added"},wg={type:"removed"},qs={type:"childadded",child:null},hh={type:"childremoved",child:null},sn=class i extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new ti,n=new Dn,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new Qe}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(Qd,e)}rotateY(e){return this.rotateOnAxis(ef,e)}rotateZ(e){return this.rotateOnAxis(tf,e)}translateOnAxis(e,t){return Kd.copy(e).applyQuaternion(this.quaternion),this.position.add(Kd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qd,e)}translateY(e){return this.translateOnAxis(ef,e)}translateZ(e){return this.translateOnAxis(tf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?po.copy(e):po.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Gr,po,this.up):Ei.lookAt(po,Gr,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),Xs.setFromRotationMatrix(Ei),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nf),qs.child=e,this.dispatchEvent(qs),qs.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wg),hh.child=e,this.dispatchEvent(hh),hh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nf),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,e,Eg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,Tg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};sn.DEFAULT_UP=new D(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xe=class extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ag={type:"move"},fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let M of e.hand.values()){let m=t.getJointPose(M,n),f=this._getHandJoint(c,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ag)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new xe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},pp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},mo={h:0,s:0,l:0};function uh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=dt.workingColorSpace){if(e=xg(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=uh(a,r,e+1/3),this.g=uh(a,r,e),this.b=uh(a,r,e-1/3)}return dt.colorSpaceToWorking(this,s),this}setStyle(e,t=nn){function n(r){r!==void 0&&parseFloat(r)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){let n=pp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return dt.workingToColorSpace(pn.copy(this),e),Math.round(ut(pn.r*255,0,255))*65536+Math.round(ut(pn.g*255,0,255))*256+Math.round(ut(pn.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(pn.copy(this),t);let n=pn.r,s=pn.g,r=pn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=nn){dt.workingToColorSpace(pn.copy(this),e);let t=pn.r,n=pn.g,s=pn.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+t,Zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zi),e.getHSL(mo);let n=rh(Zi.h,mo.h,t),s=rh(Zi.s,mo.s,t),r=rh(Zi.l,mo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new Be;Be.NAMES=pp;var oa=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},la=class extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},jn=new D,Ti=new D,dh=new D,wi=new D,Ys=new D,Zs=new D,sf=new D,fh=new D,ph=new D,mh=new D,gh=new kt,xh=new kt,yh=new kt,Ci=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),jn.subVectors(e,t),s.cross(jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){jn.subVectors(s,t),Ti.subVectors(n,t),dh.subVectors(e,t);let a=jn.dot(jn),o=jn.dot(Ti),l=jn.dot(dh),c=Ti.dot(Ti),h=Ti.dot(dh),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wi.x),l.addScaledVector(a,wi.y),l.addScaledVector(o,wi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return gh.setScalar(0),xh.setScalar(0),yh.setScalar(0),gh.fromBufferAttribute(e,t),xh.fromBufferAttribute(e,n),yh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(gh,r.x),a.addScaledVector(xh,r.y),a.addScaledVector(yh,r.z),a}static isFrontFacing(e,t,n,s){return jn.subVectors(n,t),Ti.subVectors(e,t),jn.cross(Ti).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),jn.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ys.subVectors(s,n),Zs.subVectors(r,n),fh.subVectors(e,n);let l=Ys.dot(fh),c=Zs.dot(fh);if(l<=0&&c<=0)return t.copy(n);ph.subVectors(e,s);let h=Ys.dot(ph),d=Zs.dot(ph);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ys,a);mh.subVectors(e,r);let p=Ys.dot(mh),g=Zs.dot(mh);if(g>=0&&p<=g)return t.copy(r);let M=p*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Zs,o);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return sf.subVectors(r,s),o=(d-h)/(d-h+(p-g)),t.copy(s).addScaledVector(sf,o);let f=1/(m+M+u);return a=M*f,o=u*f,t.copy(n).addScaledVector(Ys,a).addScaledVector(Zs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mi=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Kn):Kn.fromBufferAttribute(r,a),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),go.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),go.copy(n.boundingBox)),go.applyMatrix4(e.matrixWorld),this.union(go)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vr),xo.subVectors(this.max,Vr),Js.subVectors(e.a,Vr),$s.subVectors(e.b,Vr),js.subVectors(e.c,Vr),Ji.subVectors($s,Js),$i.subVectors(js,$s),ps.subVectors(Js,js);let t=[0,-Ji.z,Ji.y,0,-$i.z,$i.y,0,-ps.z,ps.y,Ji.z,0,-Ji.x,$i.z,0,-$i.x,ps.z,0,-ps.x,-Ji.y,Ji.x,0,-$i.y,$i.x,0,-ps.y,ps.x,0];return!_h(t,Js,$s,js,xo)||(t=[1,0,0,0,1,0,0,0,1],!_h(t,Js,$s,js,xo))?!1:(yo.crossVectors(Ji,$i),t=[yo.x,yo.y,yo.z],_h(t,Js,$s,js,xo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ai=[new D,new D,new D,new D,new D,new D,new D,new D],Kn=new D,go=new mi,Js=new D,$s=new D,js=new D,Ji=new D,$i=new D,ps=new D,Vr=new D,xo=new D,yo=new D,ms=new D;function _h(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ms.fromArray(i,r);let o=s.x*Math.abs(ms.x)+s.y*Math.abs(ms.y)+s.z*Math.abs(ms.z),l=e.dot(ms),c=t.dot(ms),h=n.dot(ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var jt=new D,_o=new he,Rg=0,Yt=class extends pi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=uu,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_o.fromBufferAttribute(this,t),_o.applyMatrix3(e),this.setXY(t,_o.x,_o.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ca=class extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ha=class extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var tt=class extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Cg=new mi,Wr=new D,vh=new D,gi=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Cg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wr.subVectors(e,this.center);let t=Wr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Wr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wr.copy(e.center).add(vh)),this.expandByPoint(Wr.copy(e.center).sub(vh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ig=0,Hn=new pt,bh=new sn,Ks=new D,Ln=new mi,Xr=new mi,ln=new D,At=class i extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mg(e)?ha:ca)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,n){return Hn.makeTranslation(e,t,n),this.applyMatrix4(Hn),this}scale(e,t,n){return Hn.makeScale(e,t,n),this.applyMatrix4(Hn),this}lookAt(e){return bh.lookAt(e),bh.updateMatrix(),this.applyMatrix4(bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new tt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Xr.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(Ln.min,Xr.min),Ln.expandByPoint(ln),ln.addVectors(Ln.max,Xr.max),Ln.expandByPoint(ln)):(Ln.expandByPoint(Xr.min),Ln.expandByPoint(Xr.max))}Ln.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)ln.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ln));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ln.fromBufferAttribute(o,c),l&&(Ks.fromBufferAttribute(e,c),ln.add(Ks)),s=Math.max(s,n.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Yt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new D,l[_]=new D;let c=new D,h=new D,d=new D,u=new he,p=new he,g=new he,M=new D,m=new D;function f(_,w,C){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,C),u.fromBufferAttribute(r,_),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,C),h.sub(c),d.sub(c),p.sub(u),g.sub(u);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),o[_].add(M),o[w].add(M),o[C].add(M),l[_].add(m),l[w].add(m),l[C].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let _=0,w=y.length;_<w;++_){let C=y[_],P=C.start,N=C.count;for(let B=P,R=P+N;B<R;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let v=new D,x=new D,S=new D,E=new D;function A(_){S.fromBufferAttribute(s,_),E.copy(S);let w=o[_];v.copy(w),v.sub(S.multiplyScalar(S.dot(w))).normalize(),x.crossVectors(E,w);let P=x.dot(l[_])<0?-1:1;a.setXYZW(_,v.x,v.y,v.z,P)}for(let _=0,w=y.length;_<w;++_){let C=y[_],P=C.start,N=C.count;for(let B=P,R=P+N;B<R;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,d=new D;if(e)for(let u=0,p=e.count;u<p;u+=3){let g=e.getX(u+0),M=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),p=0,g=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new Yt(u,h,d)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=e(u,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},il=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=uu,this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},_n=new D,ua=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=hi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array),r=Lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ra("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ra("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Mh=new D,Pg=new D,Lg=new Qe,Qn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Mh.subVectors(n,t).cross(Pg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Mh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Lg.getNormalMatrix(e),s=this.coplanarPoint(Mh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Dg=0,An=class extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=ss,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jh,this.blendDst=$h,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ip,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vo,this.stencilZFail=Vo,this.stencilZPass=Vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Qn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new he().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new he().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},pr=class extends An{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qs,qr=new D,er=new D,tr=new D,nr=new he,Yr=new he,mp=new pt,vo=new D,Zr=new D,bo=new D,rf=new he,Sh=new he,af=new he,da=class extends sn{constructor(e=new pr){if(super(),this.isSprite=!0,this.type="Sprite",Qs===void 0){Qs=new At;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new il(t,5);Qs.setIndex([0,1,2,0,2,3]),Qs.setAttribute("position",new ua(n,3,0,!1)),Qs.setAttribute("uv",new ua(n,2,3,!1))}this.geometry=Qs,this.material=e,this.center=new he(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ye('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),er.setFromMatrixScale(this.matrixWorld),mp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),tr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&er.multiplyScalar(-tr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Mo(vo.set(-.5,-.5,0),tr,a,er,s,r),Mo(Zr.set(.5,-.5,0),tr,a,er,s,r),Mo(bo.set(.5,.5,0),tr,a,er,s,r),rf.set(0,0),Sh.set(1,0),af.set(1,1);let o=e.ray.intersectTriangle(vo,Zr,bo,!1,qr);if(o===null&&(Mo(Zr.set(-.5,.5,0),tr,a,er,s,r),Sh.set(0,1),o=e.ray.intersectTriangle(vo,bo,Zr,!1,qr),o===null))return;let l=e.ray.origin.distanceTo(qr);l<e.near||l>e.far||t.push({distance:l,point:qr.clone(),uv:Ci.getInterpolation(qr,vo,Zr,bo,rf,Sh,af,new he),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Mo(i,e,t,n,s,r){nr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Yr.x=r*nr.x-s*nr.y,Yr.y=s*nr.x+r*nr.y):Yr.copy(nr),i.copy(e),i.x+=Yr.x,i.y+=Yr.y,i.applyMatrix4(mp)}var Ri=new D,Eh=new D,So=new D,Eo=new D,_s=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,t),Ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Eh.copy(e).add(t).multiplyScalar(.5),So.copy(t).sub(e).normalize(),Eo.copy(this.origin).sub(Eh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(So),o=Eo.dot(this.direction),l=-Eo.dot(So),c=Eo.lengthSq(),h=Math.abs(1-a*a),d,u,p,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let M=1/h;d*=M,u*=M,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Eh).addScaledVector(So,u),p}intersectSphere(e,t){if(e.radius<0)return null;Ri.subVectors(e.center,this.origin);let n=Ri.dot(this.direction),s=Ri.dot(Ri)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,p=e.z-a.z,g=t.x-a.x,M=t.y-a.y,m=t.z-a.z,f=n.x-a.x,y=n.y-a.y,v=n.z-a.z,x=Math.abs(l),S=Math.abs(c),E=Math.abs(h),A,_,w,C,P,N,B,R,L,O,k,j;if(x>=S&&x>=E?(w=l,N=d,L=g,j=f,l>=0?(A=c,_=h,C=u,P=p,B=M,R=m,O=y,k=v):(A=h,_=c,C=p,P=u,B=m,R=M,O=v,k=y)):S>=E?(w=c,N=u,L=M,j=y,c>=0?(A=h,_=l,C=p,P=d,B=m,R=g,O=v,k=f):(A=l,_=h,C=d,P=p,B=g,R=m,O=f,k=v)):(w=h,N=p,L=m,j=v,h>=0?(A=l,_=c,C=d,P=u,B=g,R=M,O=f,k=y):(A=c,_=l,C=u,P=d,B=M,R=g,O=y,k=f)),w===0)return null;let G=A/w,Y=_/w,K=1/w,Le=C-G*N,Ce=P-Y*N,vt=B-G*L,lt=R-Y*L,mt=O-G*j,$=k-Y*j,te=mt*lt-$*vt,Ee=Le*$-Ce*mt,Ze=vt*Ce-lt*Le;if(s){if(te<0||Ee<0||Ze<0)return null}else if((te<0||Ee<0||Ze<0)&&(te>0||Ee>0||Ze>0))return null;let Ie=te+Ee+Ze;if(Ie===0)return null;let Je=K*(te*N+Ee*L+Ze*j);return(Ie>0?Je<0:Je>0)?null:this.at(Je/Ie,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},je=class extends An{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=Pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},of=new pt,gs=new _s,To=new gi,lf=new D,wo=new D,Ao=new D,Ro=new D,Th=new D,Co=new D,cf=new D,Io=new D,oe=class extends sn{constructor(e=new At,t=new je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Co.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Th.fromBufferAttribute(d,e),a?Co.addScaledVector(Th,h):Co.addScaledVector(Th.sub(t),h))}t.add(Co)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(r),gs.copy(e.ray).recast(e.near),!(To.containsPoint(gs.origin)===!1&&(gs.intersectSphere(To,lf)===null||gs.origin.distanceToSquared(lf)>(e.far-e.near)**2))&&(of.copy(r).invert(),gs.copy(e.ray).applyMatrix4(of),!(n.boundingBox!==null&&gs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){let m=u[g],f=a[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,S=v;x<S;x+=3){let E=o.getX(x),A=o.getX(x+1),_=o.getX(x+2);s=Po(this,f,e,n,c,h,d,E,A,_),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=g,f=M;m<f;m+=3){let y=o.getX(m),v=o.getX(m+1),x=o.getX(m+2);s=Po(this,a,e,n,c,h,d,y,v,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){let m=u[g],f=a[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,S=v;x<S;x+=3){let E=x,A=x+1,_=x+2;s=Po(this,f,e,n,c,h,d,E,A,_),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=g,f=M;m<f;m+=3){let y=m,v=m+1,x=m+2;s=Po(this,a,e,n,c,h,d,y,v,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Ng(i,e,t,n,s,r,a,o){let l;if(e.side===un?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===is,o),l===null)return null;Io.copy(o),Io.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Io);return c<t.near||c>t.far?null:{distance:c,point:Io.clone(),object:i}}function Po(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,wo),i.getVertexPosition(l,Ao),i.getVertexPosition(c,Ro);let h=Ng(i,e,t,n,wo,Ao,Ro,cf);if(h){let d=new D;Ci.getBarycoord(cf,wo,Ao,Ro,d),s&&(h.uv=Ci.getInterpolatedAttribute(s,o,l,c,d,new he)),r&&(h.uv1=Ci.getInterpolatedAttribute(r,o,l,c,d,new he)),a&&(h.normal=Ci.getInterpolatedAttribute(a,o,l,c,d,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new D,materialIndex:0};Ci.getNormal(wo,Ao,Ro,u.normal),h.face=u,h.barycoord=d}return h}var vs=class extends vn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Kt,h=Kt,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fa=class extends Yt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ir=new pt,hf=new pt,Lo=[],uf=new mi,Ug=new pt,Jr=new oe,$r=new gi,bs=class extends oe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ug)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ir),uf.copy(e.boundingBox).applyMatrix4(ir),this.boundingBox.union(uf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ir),$r.copy(e.boundingSphere).applyMatrix4(ir),this.boundingSphere.union($r)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Jr.geometry=this.geometry,Jr.material=this.material,Jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$r.copy(this.boundingSphere),$r.applyMatrix4(n),e.ray.intersectsSphere($r)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ir),hf.multiplyMatrices(n,ir),Jr.matrixWorld=hf,Jr.raycast(e,Lo);for(let a=0,o=Lo.length;a<o;a++){let l=Lo[a];l.instanceId=r,l.object=this,t.push(l)}Lo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new fa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vs(new Float32Array(s*this.count),s,this.count,wr,Vn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},xs=new gi,Fg=new he(.5,.5),Do=new D,mr=class{constructor(e=new Qn,t=new Qn,n=new Qn,s=new Qn,r=new Qn,a=new Qn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ei,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],p=r[7],g=r[8],M=r[9],m=r[10],f=r[11],y=r[12],v=r[13],x=r[14],S=r[15];if(s[0].setComponents(c-a,p-h,f-g,S-y).normalize(),s[1].setComponents(c+a,p+h,f+g,S+y).normalize(),s[2].setComponents(c+o,p+d,f+M,S+v).normalize(),s[3].setComponents(c-o,p-d,f-M,S-v).normalize(),n)s[4].setComponents(l,u,m,x).normalize(),s[5].setComponents(c-l,p-u,f-m,S-x).normalize();else if(s[4].setComponents(c-l,p-u,f-m,S-x).normalize(),t===ei)s[5].setComponents(c+l,p+u,f+m,S+x).normalize();else if(t===cr)s[5].setComponents(l,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(e){xs.center.set(0,0,0);let t=Fg.distanceTo(e.center);return xs.radius=.7071067811865476+t,xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Do.x=s.normal.x>0?e.max.x:e.min.x,Do.y=s.normal.y>0?e.max.y:e.min.y,Do.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Do)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var gr=class extends An{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},sl=new D,rl=new D,df=new pt,jr=new _s,No=new gi,wh=new D,ff=new D,al=class extends sn{constructor(e=new At,t=new gr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)sl.fromBufferAttribute(t,s-1),rl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=sl.distanceTo(rl);e.setAttribute("lineDistance",new tt(n,1))}else We("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(s),No.radius+=r,e.ray.intersectsSphere(No)===!1)return;df.copy(s).invert(),jr.copy(e.ray).applyMatrix4(df);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let M=p,m=g-1;M<m;M+=c){let f=h.getX(M),y=h.getX(M+1),v=Uo(this,e,jr,l,f,y,M);v&&t.push(v)}if(this.isLineLoop){let M=h.getX(g-1),m=h.getX(p),f=Uo(this,e,jr,l,M,m,g-1);f&&t.push(f)}}else{let p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let M=p,m=g-1;M<m;M+=c){let f=Uo(this,e,jr,l,M,M+1,M);f&&t.push(f)}if(this.isLineLoop){let M=Uo(this,e,jr,l,g-1,p,g-1);M&&t.push(M)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Uo(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(sl.fromBufferAttribute(o,s),rl.fromBufferAttribute(o,r),t.distanceSqToSegment(sl,rl,wh,ff)>n)return;wh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(wh);if(!(c<e.near||c>e.far))return{distance:c,point:ff.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var pf=new D,mf=new D,pa=class extends al{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)pf.fromBufferAttribute(t,s),mf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+pf.distanceTo(mf);e.setAttribute("lineDistance",new tt(n,1))}else We("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var xi=class extends An{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},gf=new pt,Fh=new _s,Fo=new gi,Oo=new D,Li=class extends sn{constructor(e=new At,t=new xi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fo.copy(n.boundingSphere),Fo.applyMatrix4(s),Fo.radius+=r,e.ray.intersectsSphere(Fo)===!1)return;gf.copy(s).invert(),Fh.copy(e.ray).applyMatrix4(gf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=u,M=p;g<M;g++){let m=c.getX(g);Oo.fromBufferAttribute(d,m),xf(Oo,m,l,s,e,t,this)}}else{let u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let g=u,M=p;g<M;g++)Oo.fromBufferAttribute(d,g),xf(Oo,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function xf(i,e,t,n,s,r,a){let o=Fh.distanceSqToPoint(i);if(o<t){let l=new D;Fh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ma=class extends vn{constructor(e=[],t=rs,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Nn=class extends vn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Qi=class extends vn{constructor(e,t,n=si,s,r,a,o=Kt,l=Kt,c,h=fi,d=1){if(h!==fi&&h!==os)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ur(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ol=class extends Qi{constructor(e,t=si,n=rs,s,r,a=Kt,o=Kt,l,c=fi){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ga=class extends vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},bt=class i extends At{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(d,2));function g(M,m,f,y,v,x,S,E,A,_,w){let C=x/A,P=S/_,N=x/2,B=S/2,R=E/2,L=A+1,O=_+1,k=0,j=0,G=new D;for(let Y=0;Y<O;Y++){let K=Y*P-B;for(let Le=0;Le<L;Le++){let Ce=Le*C-N;G[M]=Ce*y,G[m]=K*v,G[f]=R,c.push(G.x,G.y,G.z),G[M]=0,G[m]=0,G[f]=E>0?1:-1,h.push(G.x,G.y,G.z),d.push(Le/A),d.push(1-Y/_),k+=1}}for(let Y=0;Y<_;Y++)for(let K=0;K<A;K++){let Le=u+K+L*Y,Ce=u+K+L*(Y+1),vt=u+(K+1)+L*(Y+1),lt=u+(K+1)+L*Y;l.push(Le,Ce,lt),l.push(Ce,vt,lt),j+=6}o.addGroup(p,j,w),p+=j,u+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},xa=class i extends At{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,d=Math.PI/2*e,u=t,p=2*d+u,g=n*2+r,M=s+1,m=new D,f=new D;for(let y=0;y<=g;y++){let v=0,x=0,S=0,E=0;if(y<=n){let w=y/n,C=w*Math.PI/2;x=-h-e*Math.cos(C),S=e*Math.sin(C),E=-e*Math.cos(C),v=w*d}else if(y<=n+r){let w=(y-n)/r;x=-h+w*t,S=e,E=0,v=d+w*u}else{let w=(y-n-r)/n,C=w*Math.PI/2;x=h+e*Math.sin(C),S=e*Math.cos(C),E=e*Math.sin(C),v=d+u+w*d}let A=Math.max(0,Math.min(1,v/p)),_=0;y===0?_=.5/s:y===g&&(_=-.5/s);for(let w=0;w<=s;w++){let C=w/s,P=C*Math.PI*2,N=Math.sin(P),B=Math.cos(P);f.x=-S*B,f.y=x,f.z=S*N,o.push(f.x,f.y,f.z),m.set(-S*B,E,S*N),m.normalize(),l.push(m.x,m.y,m.z),c.push(C+_,A)}if(y>0){let w=(y-1)*M;for(let C=0;C<s;C++){let P=w+C,N=w+C+1,B=y*M+C,R=y*M+C+1;a.push(P,N,B),a.push(N,R,B)}}}this.setIndex(a),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Gn=class i extends At{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new D,h=new he;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let p=n+d/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(o,3)),this.setAttribute("uv",new tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},rt=class i extends At{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],p=[],g=0,M=[],m=n/2,f=0;y(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new tt(d,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(p,2));function y(){let x=new D,S=new D,E=0,A=(t-e)/n;for(let _=0;_<=r;_++){let w=[],C=_/r,P=C*(t-e)+e;for(let N=0;N<=s;N++){let B=N/s,R=B*l+o,L=Math.sin(R),O=Math.cos(R);S.x=P*L,S.y=-C*n+m,S.z=P*O,d.push(S.x,S.y,S.z),x.set(L,A,O).normalize(),u.push(x.x,x.y,x.z),p.push(B,1-C),w.push(g++)}M.push(w)}for(let _=0;_<s;_++)for(let w=0;w<r;w++){let C=M[w][_],P=M[w+1][_],N=M[w+1][_+1],B=M[w][_+1];(e>0||w!==0)&&(h.push(C,P,B),E+=3),(t>0||w!==r-1)&&(h.push(P,N,B),E+=3)}c.addGroup(f,E,0),f+=E}function v(x){let S=g,E=new he,A=new D,_=0,w=x===!0?e:t,C=x===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,m*C,0),u.push(0,C,0),p.push(.5,.5),g++;let P=g;for(let N=0;N<=s;N++){let R=N/s*l+o,L=Math.cos(R),O=Math.sin(R);A.x=w*O,A.y=m*C,A.z=w*L,d.push(A.x,A.y,A.z),u.push(0,C,0),E.x=L*.5+.5,E.y=O*.5*C+.5,p.push(E.x,E.y),g++}for(let N=0;N<s;N++){let B=S+N,R=P+N;x===!0?h.push(R,R+1,B):h.push(R+1,R,B),_+=3}c.addGroup(f,_,x===!0?1:2),f+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Dt=class i extends rt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ya=class i extends At{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new tt(r,3)),this.setAttribute("normal",new tt(r.slice(),3)),this.setAttribute("uv",new tt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let v=new D,x=new D,S=new D;for(let E=0;E<t.length;E+=3)p(t[E+0],v),p(t[E+1],x),p(t[E+2],S),l(v,x,S,y)}function l(y,v,x,S){let E=S+1,A=[];for(let _=0;_<=E;_++){A[_]=[];let w=y.clone().lerp(x,_/E),C=v.clone().lerp(x,_/E),P=E-_;for(let N=0;N<=P;N++)N===0&&_===E?A[_][N]=w:A[_][N]=w.clone().lerp(C,N/P)}for(let _=0;_<E;_++)for(let w=0;w<2*(E-_)-1;w++){let C=Math.floor(w/2);w%2===0?(u(A[_][C+1]),u(A[_+1][C]),u(A[_][C])):(u(A[_][C+1]),u(A[_+1][C+1]),u(A[_+1][C]))}}function c(y){let v=new D;for(let x=0;x<r.length;x+=3)v.x=r[x+0],v.y=r[x+1],v.z=r[x+2],v.normalize().multiplyScalar(y),r[x+0]=v.x,r[x+1]=v.y,r[x+2]=v.z}function h(){let y=new D;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];let x=m(y)/2/Math.PI+.5,S=f(y)/Math.PI+.5;a.push(x,1-S)}g(),d()}function d(){for(let y=0;y<a.length;y+=6){let v=a[y+0],x=a[y+2],S=a[y+4],E=Math.max(v,x,S),A=Math.min(v,x,S);E>.9&&A<.1&&(v<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),S<.2&&(a[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function p(y,v){let x=y*3;v.x=e[x+0],v.y=e[x+1],v.z=e[x+2]}function g(){let y=new D,v=new D,x=new D,S=new D,E=new he,A=new he,_=new he;for(let w=0,C=0;w<r.length;w+=9,C+=6){y.set(r[w+0],r[w+1],r[w+2]),v.set(r[w+3],r[w+4],r[w+5]),x.set(r[w+6],r[w+7],r[w+8]),E.set(a[C+0],a[C+1]),A.set(a[C+2],a[C+3]),_.set(a[C+4],a[C+5]),S.copy(y).add(v).add(x).divideScalar(3);let P=m(S);M(E,C+0,y,P),M(A,C+2,v,P),M(_,C+4,x,P)}}function M(y,v,x,S){S<0&&y.x===1&&(a[v]=y.x-1),x.x===0&&x.z===0&&(a[v]=S/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){We("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,p=(a-h)/u;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new he:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,s=[],r=[],a=[],o=new D,l=new pt;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ut(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(ut(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},xr=class extends Un{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new he){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ll=class extends xr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function fu(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,p*=h,s(a,o,u,p)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var yf=new D,_f=new D,Ah=new fu,Rh=new fu,Ch=new fu,cl=class extends Un{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(_f.subVectors(s[0],s[1]).add(s[0]),c=_f);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(yf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=yf),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),p),M=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),Ah.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,M,m),Rh.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,M,m),Ch.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,M,m)}else this.curveType==="catmullrom"&&(Ah.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Rh.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Ch.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Ah.calc(l),Rh.calc(l),Ch.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function vf(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Og(i,e){let t=1-i;return t*t*e}function Bg(i,e){return 2*(1-i)*i*e}function zg(i,e){return i*i*e}function Qr(i,e,t,n){return Og(i,e)+Bg(i,t)+zg(i,n)}function kg(i,e){let t=1-i;return t*t*t*e}function Hg(i,e){let t=1-i;return 3*t*t*i*e}function Gg(i,e){return 3*(1-i)*i*i*e}function Vg(i,e){return i*i*i*e}function ea(i,e,t,n,s){return kg(i,e)+Hg(i,t)+Gg(i,n)+Vg(i,s)}var _a=class extends Un{constructor(e=new he,t=new he,n=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new he){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ea(e,s.x,r.x,a.x,o.x),ea(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},hl=class extends Un{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ea(e,s.x,r.x,a.x,o.x),ea(e,s.y,r.y,a.y,o.y),ea(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},va=class extends Un{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ul=class extends Un{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ba=class extends Un{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Qr(e,s.x,r.x,a.x),Qr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},dl=class extends Un{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Qr(e,s.x,r.x,a.x),Qr(e,s.y,r.y,a.y),Qr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ma=class extends Un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(vf(o,l.x,c.x,h.x,d.x),vf(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new he().fromArray(s))}return this}},Oh=Object.freeze({__proto__:null,ArcCurve:ll,CatmullRomCurve3:cl,CubicBezierCurve:_a,CubicBezierCurve3:hl,EllipseCurve:xr,LineCurve:va,LineCurve3:ul,QuadraticBezierCurve:ba,QuadraticBezierCurve3:dl,SplineCurve:Ma}),fl=class extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Oh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Oh[s.type]().fromJSON(s))}return this}},Sa=class extends fl{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new va(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ba(this.currentPoint.clone(),new he(e,t),new he(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new _a(this.currentPoint.clone(),new he(e,t),new he(n,s),new he(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ma(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new xr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Di=class extends Sa{constructor(e){super(e),this.uuid=Ii(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Sa().fromJSON(s))}return this}};function Wg(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=gp(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Jg(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,d=l;for(let u=t;u<s;u+=t){let p=i[u],g=i[u+1];p<o&&(o=p),g<l&&(l=g),p>h&&(h=p),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Ea(r,a,t,o,l,c,0),a}function gp(i,e,t,n,s){let r;if(s===ax(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=bf(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=bf(a/n|0,i[a],i[a+1],r);return r&&yr(r,r.next)&&(wa(r),r=r.next),r}function Ms(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(yr(t,t.next)||Wt(t.prev,t,t.next)===0)){if(wa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ea(i,e,t,n,s,r,a){if(!i)return;!a&&r&&ex(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?qg(i,n,s,r):Xg(i)){e.push(l.i,i.i,c.i),wa(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Yg(Ms(i),e),Ea(i,e,t,n,s,r,2)):a===2&&Zg(i,e,t,n,s,r):Ea(Ms(i),e,t,n,s,r,1);break}}}function Xg(i){let e=i.prev,t=i,n=i.next;if(Wt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),p=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=p&&Kr(s,o,r,l,a,c,g.x,g.y)&&Wt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function qg(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Wt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,p=Math.min(o,l,c),g=Math.min(h,d,u),M=Math.max(o,l,c),m=Math.max(h,d,u),f=Bh(p,g,e,t,n),y=Bh(M,m,e,t,n),v=i.prevZ,x=i.nextZ;for(;v&&v.z>=f&&x&&x.z<=y;){if(v.x>=p&&v.x<=M&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Kr(o,h,l,d,c,u,v.x,v.y)&&Wt(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=p&&x.x<=M&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&Kr(o,h,l,d,c,u,x.x,x.y)&&Wt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=f;){if(v.x>=p&&v.x<=M&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Kr(o,h,l,d,c,u,v.x,v.y)&&Wt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=y;){if(x.x>=p&&x.x<=M&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&Kr(o,h,l,d,c,u,x.x,x.y)&&Wt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Yg(i,e){let t=i;do{let n=t.prev,s=t.next.next;!yr(n,s)&&yp(n,t,t.next,s)&&Ta(n,s)&&Ta(s,n)&&(e.push(n.i,t.i,s.i),wa(t),wa(t.next),t=i=s),t=t.next}while(t!==i);return Ms(t)}function Zg(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ix(a,o)){let l=_p(a,o);a=Ms(a,a.next),l=Ms(l,l.next),Ea(a,e,t,n,s,r,0),Ea(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Jg(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=gp(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(nx(c))}s.sort($g);for(let r=0;r<s.length;r++)t=jg(s[r],t);return t}function $g(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function jg(i,e){let t=Kg(i,e);if(!t)return e;let n=_p(t,i);return Ms(n,n.next),Ms(t,t.next)}function Kg(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(yr(i,t))return t;do{if(yr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&xp(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);Ta(t,i)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&Qg(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function Qg(i,e){return Wt(i.prev,i,e.prev)<0&&Wt(e.next,i,i.next)<0}function ex(i,e,t,n){let s=i;do s.z===0&&(s.z=Bh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,tx(s)}function tx(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Bh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function nx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function xp(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Kr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&xp(i,e,t,n,s,r,a,o)}function ix(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!sx(i,e)&&(Ta(i,e)&&Ta(e,i)&&rx(i,e)&&(Wt(i.prev,i,e.prev)||Wt(i,e.prev,e))||yr(i,e)&&Wt(i.prev,i,i.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function yr(i,e){return i.x===e.x&&i.y===e.y}function yp(i,e,t,n){let s=zo(Wt(i,e,t)),r=zo(Wt(i,e,n)),a=zo(Wt(t,n,i)),o=zo(Wt(t,n,e));return!!(s!==r&&a!==o||s===0&&Bo(i,t,e)||r===0&&Bo(i,n,e)||a===0&&Bo(t,i,n)||o===0&&Bo(t,e,n))}function Bo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function zo(i){return i>0?1:i<0?-1:0}function sx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&yp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ta(i,e){return Wt(i.prev,i,i.next)<0?Wt(i,e,i.next)>=0&&Wt(i,i.prev,e)>=0:Wt(i,e,i.prev)<0||Wt(i,i.next,e)<0}function rx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function _p(i,e){let t=zh(i.i,i.x,i.y),n=zh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function bf(i,e,t,n){let s=zh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function wa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function zh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ax(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var kh=class{static triangulate(e,t,n=2){return Wg(e,t,n)}},di=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Mf(e),Sf(n,e);let a=e.length;t.forEach(Mf);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Sf(n,t[l]);let o=kh.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Mf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Sf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Aa=class i extends At{constructor(e=new Di([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new tt(s,3)),this.setAttribute("uv",new tt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:ox,v,x=!1,S,E,A,_;if(f){v=f.getSpacedPoints(h),x=!0,u=!1;let ne=f.isCatmullRomCurve3?f.closed:!1;S=f.computeFrenetFrames(h,ne),E=new D,A=new D,_=new D}u||(m=0,p=0,g=0,M=0);let w=o.extractPoints(c),C=w.shape,P=w.holes;if(!di.isClockWise(C)){C=C.reverse();for(let ne=0,le=P.length;ne<le;ne++){let ue=P[ne];di.isClockWise(ue)&&(P[ne]=ue.reverse())}}function B(ne){let ue=10000000000000001e-36,de=ne[0];for(let ge=1;ge<=ne.length;ge++){let Xe=ge%ne.length,Ve=ne[Xe],$e=Ve.x-de.x,et=Ve.y-de.y,U=$e*$e+et*et,St=Math.max(Math.abs(Ve.x),Math.abs(Ve.y),Math.abs(de.x),Math.abs(de.y)),ct=ue*St*St;if(U<=ct){ne.splice(Xe,1),ge--;continue}de=Ve}}B(C),P.forEach(B);let R=P.length,L=C;for(let ne=0;ne<R;ne++){let le=P[ne];C=C.concat(le)}function O(ne,le,ue){return le||Ye("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(le,ue)}let k=C.length;function j(ne,le,ue){let de,ge,Xe,Ve=ne.x-le.x,$e=ne.y-le.y,et=ue.x-ne.x,U=ue.y-ne.y,St=Ve*Ve+$e*$e,ct=Ve*U-$e*et;if(Math.abs(ct)>Number.EPSILON){let I=Math.sqrt(St),b=Math.sqrt(et*et+U*U),H=le.x-$e/I,X=le.y+Ve/I,Z=ue.x-U/b,fe=ue.y+et/b,me=((Z-H)*U-(fe-X)*et)/(Ve*U-$e*et);de=H+Ve*me-ne.x,ge=X+$e*me-ne.y;let J=de*de+ge*ge;if(J<=2)return new he(de,ge);Xe=Math.sqrt(J/2)}else{let I=!1;Ve>Number.EPSILON?et>Number.EPSILON&&(I=!0):Ve<-Number.EPSILON?et<-Number.EPSILON&&(I=!0):Math.sign($e)===Math.sign(U)&&(I=!0),I?(de=-$e,ge=Ve,Xe=Math.sqrt(St)):(de=Ve,ge=$e,Xe=Math.sqrt(St/2))}return new he(de/Xe,ge/Xe)}let G=[];for(let ne=0,le=L.length,ue=le-1,de=ne+1;ne<le;ne++,ue++,de++)ue===le&&(ue=0),de===le&&(de=0),G[ne]=j(L[ne],L[ue],L[de]);let Y=[],K,Le=G.concat();for(let ne=0,le=R;ne<le;ne++){let ue=P[ne];K=[];for(let de=0,ge=ue.length,Xe=ge-1,Ve=de+1;de<ge;de++,Xe++,Ve++)Xe===ge&&(Xe=0),Ve===ge&&(Ve=0),K[de]=j(ue[de],ue[Xe],ue[Ve]);Y.push(K),Le=Le.concat(K)}let Ce;if(m===0)Ce=di.triangulateShape(L,P);else{let ne=[],le=[];for(let ue=0;ue<m;ue++){let de=ue/m,ge=p*Math.cos(de*Math.PI/2),Xe=g*Math.sin(de*Math.PI/2)+M;for(let Ve=0,$e=L.length;Ve<$e;Ve++){let et=O(L[Ve],G[Ve],Xe);Ee(et.x,et.y,-ge),de===0&&ne.push(et)}for(let Ve=0,$e=R;Ve<$e;Ve++){let et=P[Ve];K=Y[Ve];let U=[];for(let St=0,ct=et.length;St<ct;St++){let I=O(et[St],K[St],Xe);Ee(I.x,I.y,-ge),de===0&&U.push(I)}de===0&&le.push(U)}}Ce=di.triangulateShape(ne,le)}let vt=Ce.length,lt=g+M;for(let ne=0;ne<k;ne++){let le=u?O(C[ne],Le[ne],lt):C[ne];x?(A.copy(S.normals[0]).multiplyScalar(le.x),E.copy(S.binormals[0]).multiplyScalar(le.y),_.copy(v[0]).add(A).add(E),Ee(_.x,_.y,_.z)):Ee(le.x,le.y,0)}for(let ne=1;ne<=h;ne++)for(let le=0;le<k;le++){let ue=u?O(C[le],Le[le],lt):C[le];x?(A.copy(S.normals[ne]).multiplyScalar(ue.x),E.copy(S.binormals[ne]).multiplyScalar(ue.y),_.copy(v[ne]).add(A).add(E),Ee(_.x,_.y,_.z)):Ee(ue.x,ue.y,d/h*ne)}for(let ne=m-1;ne>=0;ne--){let le=ne/m,ue=p*Math.cos(le*Math.PI/2),de=g*Math.sin(le*Math.PI/2)+M;for(let ge=0,Xe=L.length;ge<Xe;ge++){let Ve=O(L[ge],G[ge],de);Ee(Ve.x,Ve.y,d+ue)}for(let ge=0,Xe=P.length;ge<Xe;ge++){let Ve=P[ge];K=Y[ge];for(let $e=0,et=Ve.length;$e<et;$e++){let U=O(Ve[$e],K[$e],de);x?Ee(U.x,U.y+v[h-1].y,v[h-1].x+ue):Ee(U.x,U.y,d+ue)}}}mt(),$();function mt(){let ne=s.length/3;if(u){let le=0,ue=k*le;for(let de=0;de<vt;de++){let ge=Ce[de];Ze(ge[2]+ue,ge[1]+ue,ge[0]+ue)}le=h+m*2,ue=k*le;for(let de=0;de<vt;de++){let ge=Ce[de];Ze(ge[0]+ue,ge[1]+ue,ge[2]+ue)}}else{for(let le=0;le<vt;le++){let ue=Ce[le];Ze(ue[2],ue[1],ue[0])}for(let le=0;le<vt;le++){let ue=Ce[le];Ze(ue[0]+k*h,ue[1]+k*h,ue[2]+k*h)}}n.addGroup(ne,s.length/3-ne,0)}function $(){let ne=s.length/3,le=0;te(L,le),le+=L.length;for(let ue=0,de=P.length;ue<de;ue++){let ge=P[ue];te(ge,le),le+=ge.length}n.addGroup(ne,s.length/3-ne,1)}function te(ne,le){let ue=ne.length;for(;--ue>=0;){let de=ue,ge=ue-1;ge<0&&(ge=ne.length-1);for(let Xe=0,Ve=h+m*2;Xe<Ve;Xe++){let $e=k*Xe,et=k*(Xe+1),U=le+de+$e,St=le+ge+$e,ct=le+ge+et,I=le+de+et;Ie(U,St,ct,I)}}}function Ee(ne,le,ue){l.push(ne),l.push(le),l.push(ue)}function Ze(ne,le,ue){Je(ne),Je(le),Je(ue);let de=s.length/3,ge=y.generateTopUV(n,s,de-3,de-2,de-1);Rt(ge[0]),Rt(ge[1]),Rt(ge[2])}function Ie(ne,le,ue,de){Je(ne),Je(le),Je(de),Je(le),Je(ue),Je(de);let ge=s.length/3,Xe=y.generateSideWallUV(n,s,ge-6,ge-3,ge-2,ge-1);Rt(Xe[0]),Rt(Xe[1]),Rt(Xe[3]),Rt(Xe[1]),Rt(Xe[2]),Rt(Xe[3])}function Je(ne){s.push(l[ne*3+0]),s.push(l[ne*3+1]),s.push(l[ne*3+2])}function Rt(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return lx(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Oh[s.type]().fromJSON(s)),new i(n,e.options)}},ox={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new he(r,a),new he(o,l),new he(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],p=e[s*3+1],g=e[s*3+2],M=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new he(a,1-l),new he(c,1-d),new he(u,1-g),new he(M,1-f)]:[new he(o,1-l),new he(h,1-d),new he(p,1-g),new he(m,1-f)]}};function lx(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ft=class i extends ya{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Ra=class i extends ya{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ni=class i extends At{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,p=[],g=[],M=[],m=[];for(let f=0;f<h;f++){let y=f*u-a;for(let v=0;v<c;v++){let x=v*d-r;g.push(x,-y,0),M.push(0,0,1),m.push(v/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){let v=y+c*f,x=y+c*(f+1),S=y+1+c*(f+1),E=y+1+c*f;p.push(v,x,E),p.push(x,S,E)}this.setIndex(p),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(M,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},_r=class i extends At{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=e,u=(t-e)/s,p=new D,g=new he;for(let M=0;M<=s;M++){for(let m=0;m<=n;m++){let f=r+m/n*a;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let M=0;M<s;M++){let m=M*(n+1);for(let f=0;f<n;f++){let y=f+m,v=y,x=y+n+1,S=y+n+2,E=y+1;o.push(v,x,E),o.push(x,S,E)}}this.setIndex(o),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ca=class i extends At{constructor(e=new Di([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new tt(s,3)),this.setAttribute("normal",new tt(r,3)),this.setAttribute("uv",new tt(a,2));function c(h){let d=s.length/3,u=h.extractPoints(t),p=u.shape,g=u.holes;di.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let y=g[m];di.isClockWise(y)===!0&&(g[m]=y.reverse())}let M=di.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let y=g[m];p=p.concat(y)}for(let m=0,f=p.length;m<f;m++){let y=p[m];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,f=M.length;m<f;m++){let y=M[m],v=y[0]+d,x=y[1]+d,S=y[2]+d;n.push(v,x,S),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return cx(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function cx(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Nt=class i extends At{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new D,u=new D,p=[],g=[],M=[],m=[];for(let f=0;f<=n;f++){let y=[],v=f/n,x=a+v*o,S=e*Math.cos(x),E=Math.sqrt(e*e-S*S),A=0;f===0&&a===0?A=.5/t:f===n&&l===Math.PI&&(A=-.5/t);for(let _=0;_<=t;_++){let w=_/t,C=s+w*r;d.x=-E*Math.cos(C),d.y=S,d.z=E*Math.sin(C),g.push(d.x,d.y,d.z),u.copy(d).normalize(),M.push(u.x,u.y,u.z),m.push(w+A,1-v),y.push(c++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<t;y++){let v=h[f][y+1],x=h[f][y],S=h[f+1][y],E=h[f+1][y+1];(f!==0||a>0)&&p.push(v,x,E),(f!==n-1||l<Math.PI)&&p.push(x,S,E)}this.setIndex(p),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(M,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Rn=class i extends At{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new D,p=new D,g=new D;for(let M=0;M<=n;M++){let m=a+M/n*o;for(let f=0;f<=s;f++){let y=f/s*r;p.x=(e+t*Math.cos(m))*Math.cos(y),p.y=(e+t*Math.cos(m))*Math.sin(y),p.z=t*Math.sin(m),c.push(p.x,p.y,p.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),g.subVectors(p,u).normalize(),h.push(g.x,g.y,g.z),d.push(f/s),d.push(M/n)}}for(let M=1;M<=n;M++)for(let m=1;m<=s;m++){let f=(s+1)*M+m-1,y=(s+1)*(M-1)+m-1,v=(s+1)*(M-1)+m,x=(s+1)*M+m;l.push(f,y,x),l.push(y,v,x)}this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Rs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Ef(s))s.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Ef(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function gn(i){let e={};for(let t=0;t<i.length;t++){let n=Rs(i[t]);for(let s in n)e[s]=n[s]}return e}function Ef(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function hx(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function pu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var vp={clone:Rs,merge:gn},ux=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bn=class extends An{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ux,this.fragmentShader=dx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=hx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Be().setHex(s.value);break;case"v2":this.uniforms[n].value=new he().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new kt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Qe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new pt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},pl=class extends bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ss=class extends An{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Be(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Va,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Es=class extends An{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Va,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=Pl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ml=class extends An{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},gl=class extends An{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function sr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ih(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var es=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},xl=class extends es{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dh,endingEnd:Dh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Nh:r=e,o=2*t-n;break;case Uh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nh:a=e,l=2*n-t;break;case Uh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),M=g*g,m=M*g,f=-u*m+2*u*M-u*g,y=(1+u)*m+(-1.5-2*u)*M+(-.5+u)*g+1,v=(-1-p)*m+(1.5+p)*M+.5*g,x=p*m-p*M;for(let S=0;S!==o;++S)r[S]=f*a[h+S]+y*a[c+S]+v*a[l+S]+x*a[d+S];return r}},yl=class extends es{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},_l=class extends es{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},vl=class extends es{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-t)/(s-t),M=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*M+a[l+m]*g;return r}let u=o*2,p=e-1;for(let g=0;g!==o;++g){let M=a[c+g],m=a[l+g],f=p*u+g*2,y=d[f],v=d[f+1],x=e*u+g*2,S=h[x],E=h[x+1],A=px(n,t,y,S,s);r[g]=bp(A,M,v,E,m)}return r}};function bp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function fx(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function px(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=bp(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=fx(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Fn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=sr(t,this.TimeBufferType),this.values=sr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:sr(e.times,Array),values:sr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Ih(e.settings)&&(n.settings={inTangents:sr(e.settings.inTangents,Array),outTangents:sr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _l(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new vl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ta:t=this.InterpolantFactoryMethodDiscrete;break;case Ko:t=this.InterpolantFactoryMethodLinear;break;case Go:t=this.InterpolantFactoryMethodSmooth;break;case Lh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return We("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ta;case this.InterpolantFactoryMethodLinear:return Ko;case this.InterpolantFactoryMethodSmooth:return Go;case this.InterpolantFactoryMethodBezier:return Lh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Ih(this.settings)&&(Tf(this.settings.inTangents,e),Tf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ye("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ye("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ye("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ye("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&gg(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ye("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Go,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*n,u=d-n,p=d+n;for(let g=0;g!==n;++g){let M=t[d+g];if(M!==t[u+g]||M!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let p=0;p!==n;++p)t[u+p]=t[d+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ih(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Tf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Fn.prototype.ValueTypeName="";Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=Ko;var ts=class extends Fn{constructor(e,t,n){super(e,t,n)}};ts.prototype.ValueTypeName="bool";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=ta;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var bl=class extends Fn{constructor(e,t,n,s){super(e,t,n,s)}};bl.prototype.ValueTypeName="color";var Ml=class extends Fn{constructor(e,t,n,s){super(e,t,n,s)}};Ml.prototype.ValueTypeName="number";var Sl=class extends es{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Dn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ia=class extends Fn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Sl(this.times,this.values,this.getValueSize(),e)}};Ia.prototype.ValueTypeName="quaternion";Ia.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends Fn{constructor(e,t,n){super(e,t,n)}};ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=ta;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var El=class extends Fn{constructor(e,t,n,s){super(e,t,n,s)}};El.prototype.ValueTypeName="vector";var Tl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Mp=new Tl,wl=class{constructor(e){this.manager=e!==void 0?e:Mp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};wl.DEFAULT_MATERIAL_NAME="__DEFAULT";var vr=class extends sn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Pa=class extends vr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ph=new pt,wf=new D,Af=new D,La=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mr,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;wf.setFromMatrixPosition(e.matrixWorld),t.position.copy(wf),Af.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Af),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Ph.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ph,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===cr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ph)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ko=new D,Ho=new Dn,ci=new D,Da=class extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ko,Ho,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ko,Ho,ci.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ko,Ho,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ko,Ho,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ji=new D,Rf=new he,Cf=new he,cn=class extends Da{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Qo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(sh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qo*2*Math.atan(Math.tan(sh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,t){return this.getViewBounds(e,Rf,Cf),t.subVectors(Cf,Rf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(sh*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Hh=class extends La{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0}},Ni=class extends vr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Hh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},br=class extends Da{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Gh=class extends La{constructor(){super(new br(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Mr=class extends vr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new Gh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var rr=-90,ar=1,Al=class extends sn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new cn(rr,ar,e,t);s.layers=this.layers,this.add(s);let r=new cn(rr,ar,e,t);r.layers=this.layers,this.add(r);let a=new cn(rr,ar,e,t);a.layers=this.layers,this.add(a);let o=new cn(rr,ar,e,t);o.layers=this.layers,this.add(o);let l=new cn(rr,ar,e,t);l.layers=this.layers,this.add(l);let c=new cn(rr,ar,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Rl=class extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var mu="\\[\\]\\.:\\/",mx=new RegExp("["+mu+"]","g"),gu="[^"+mu+"]",gx="[^"+mu.replace("\\.","")+"]",xx=/((?:WC+[\/:])*)/.source.replace("WC",gu),yx=/(WCOD+)?/.source.replace("WCOD",gx),_x=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gu),vx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gu),bx=new RegExp("^"+xx+yx+_x+vx+"$"),Mx=["material","materials","bones","map"],Vh=class{constructor(e,t,n){let s=n||Vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Vt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(mx,"")}static parseTrackName(e){let t=bx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Mx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){We("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ye("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Vt.Composite=Vh;Vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Vt.prototype.GetterByBindingType=[Vt.prototype._getValue_direct,Vt.prototype._getValue_array,Vt.prototype._getValue_arrayElement,Vt.prototype._getValue_toArray];Vt.prototype.SetterByBindingTypeAndVersioning=[[Vt.prototype._setValue_direct,Vt.prototype._setValue_direct_setNeedsUpdate,Vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_array,Vt.prototype._setValue_array_setNeedsUpdate,Vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_arrayElement,Vt.prototype._setValue_arrayElement_setNeedsUpdate,Vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_fromArray,Vt.prototype._setValue_fromArray_setNeedsUpdate,Vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var uM=new Float32Array(1);var If=new pt,Ts=class{constructor(e,t,n=0,s=1/0){this.ray=new _s(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new dr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ye("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return If.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(If),this}intersectObject(e,t=!0,n=[]){return Wh(e,this,n,t),n.sort(Pf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Wh(e[s],this,n,t);return n.sort(Pf),n}};function Pf(i,e){return i.distance-e.distance}function Wh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Wh(r[a],e,t,!0)}}var Mu=class Mu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Mu.prototype.isMatrix2=!0;var Xh=Mu;function xu(i,e,t,n){let s=Sx(n);switch(t){case cu:return i*e;case wr:return i*e/s.components*s.byteLength;case Bl:return i*e/s.components*s.byteLength;case ls:return i*e*2/s.components*s.byteLength;case zl:return i*e*2/s.components*s.byteLength;case hu:return i*e*3/s.components*s.byteLength;case Wn:return i*e*4/s.components*s.byteLength;case kl:return i*e*4/s.components*s.byteLength;case Oa:case Ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case za:case ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gl:case Wl:return Math.max(i,16)*Math.max(e,8)/4;case Hl:case Vl:return Math.max(i,8)*Math.max(e,8)/2;case Xl:case ql:case Zl:case Jl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Yl:case Ha:case $l:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ec:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case tc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case nc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ic:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case sc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case rc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ac:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case oc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case lc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case cc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case hc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case uc:case dc:case fc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case pc:case mc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ga:case gc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sx(i){switch(i){case Cn:case ru:return{byteLength:1,components:1};case Er:case au:case ri:return{byteLength:2,components:1};case Fl:case Ol:return{byteLength:2,components:4};case si:case Ul:case Vn:return{byteLength:4,components:1};case ou:case lu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Wp(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Tx(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){let g=d[u],M=d[p];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++u,d[u]=M)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){let M=d[p];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var wx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ax=`#ifdef USE_ALPHAHASH
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
#endif`,Rx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ix=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Px=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lx=`#ifdef USE_AOMAP
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
#endif`,Dx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nx=`#ifdef USE_BATCHING
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
#endif`,Ux=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ox=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zx=`#ifdef USE_IRIDESCENCE
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
#endif`,kx=`#ifdef USE_BUMPMAP
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
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Jx=`#define PI 3.141592653589793
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
} // validated`,$x=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jx=`vec3 transformedNormal = objectNormal;
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
#endif`,Kx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ey=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ty=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ny="gl_FragColor = linearToOutputTexel( gl_FragColor );",iy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sy=`#ifdef USE_ENVMAP
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
#endif`,ry=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ay=`#ifdef USE_ENVMAP
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
#endif`,oy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ly=`#ifdef USE_ENVMAP
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
#endif`,cy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fy=`#ifdef USE_GRADIENTMAP
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
}`,py=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,my=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,yy=`#ifdef USE_ENVMAP
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
#endif`,_y=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,by=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,My=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sy=`PhysicalMaterial material;
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
#endif`,Ey=`uniform sampler2D dfgLUT;
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
}`,Ty=`
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
#endif`,wy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ay=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ry=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Cy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Iy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Py=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ly=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ny=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fy=`#if defined( USE_POINTS_UV )
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
#endif`,Oy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,By=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ky=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gy=`#ifdef USE_MORPHTARGETS
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
#endif`,Vy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Jy=`#ifdef USE_NORMALMAP
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
#endif`,$y=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ky=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,n_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,s_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,r_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,u_=`float getShadowMask() {
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
}`,d_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f_=`#ifdef USE_SKINNING
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
#endif`,p_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m_=`#ifdef USE_SKINNING
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
#endif`,g_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,x_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,y_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,__=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,v_=`#ifdef USE_TRANSMISSION
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
#endif`,b_=`#ifdef USE_TRANSMISSION
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
#endif`,M_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,w_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,A_=`uniform sampler2D t2D;
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
}`,R_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,I_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L_=`#include <common>
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
}`,D_=`#if DEPTH_PACKING == 3200
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
}`,N_=`#define DISTANCE
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
}`,U_=`#define DISTANCE
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
}`,F_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,O_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B_=`uniform float scale;
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
}`,z_=`uniform vec3 diffuse;
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
}`,k_=`#include <common>
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
}`,H_=`uniform vec3 diffuse;
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
}`,G_=`#define LAMBERT
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
}`,V_=`#define LAMBERT
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
}`,W_=`#define MATCAP
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
}`,X_=`#define MATCAP
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
}`,q_=`#define NORMAL
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
}`,Y_=`#define NORMAL
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
}`,Z_=`#define PHONG
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
}`,J_=`#define PHONG
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
}`,$_=`#define STANDARD
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
}`,j_=`#define STANDARD
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
}`,K_=`#define TOON
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
}`,Q_=`#define TOON
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
}`,ev=`uniform float size;
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
}`,tv=`uniform vec3 diffuse;
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
}`,nv=`#include <common>
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
}`,iv=`uniform vec3 color;
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
}`,sv=`uniform float rotation;
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
}`,rv=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:wx,alphahash_pars_fragment:Ax,alphamap_fragment:Rx,alphamap_pars_fragment:Cx,alphatest_fragment:Ix,alphatest_pars_fragment:Px,aomap_fragment:Lx,aomap_pars_fragment:Dx,batching_pars_vertex:Nx,batching_vertex:Ux,begin_vertex:Fx,beginnormal_vertex:Ox,bsdfs:Bx,iridescence_fragment:zx,bumpmap_pars_fragment:kx,clipping_planes_fragment:Hx,clipping_planes_pars_fragment:Gx,clipping_planes_pars_vertex:Vx,clipping_planes_vertex:Wx,color_fragment:Xx,color_pars_fragment:qx,color_pars_vertex:Yx,color_vertex:Zx,common:Jx,cube_uv_reflection_fragment:$x,defaultnormal_vertex:jx,displacementmap_pars_vertex:Kx,displacementmap_vertex:Qx,emissivemap_fragment:ey,emissivemap_pars_fragment:ty,colorspace_fragment:ny,colorspace_pars_fragment:iy,envmap_fragment:sy,envmap_common_pars_fragment:ry,envmap_pars_fragment:ay,envmap_pars_vertex:oy,envmap_physical_pars_fragment:yy,envmap_vertex:ly,fog_vertex:cy,fog_pars_vertex:hy,fog_fragment:uy,fog_pars_fragment:dy,gradientmap_pars_fragment:fy,lightmap_pars_fragment:py,lights_lambert_fragment:my,lights_lambert_pars_fragment:gy,lights_pars_begin:xy,lights_toon_fragment:_y,lights_toon_pars_fragment:vy,lights_phong_fragment:by,lights_phong_pars_fragment:My,lights_physical_fragment:Sy,lights_physical_pars_fragment:Ey,lights_fragment_begin:Ty,lights_fragment_maps:wy,lights_fragment_end:Ay,lightprobes_pars_fragment:Ry,logdepthbuf_fragment:Cy,logdepthbuf_pars_fragment:Iy,logdepthbuf_pars_vertex:Py,logdepthbuf_vertex:Ly,map_fragment:Dy,map_pars_fragment:Ny,map_particle_fragment:Uy,map_particle_pars_fragment:Fy,metalnessmap_fragment:Oy,metalnessmap_pars_fragment:By,morphinstance_vertex:zy,morphcolor_vertex:ky,morphnormal_vertex:Hy,morphtarget_pars_vertex:Gy,morphtarget_vertex:Vy,normal_fragment_begin:Wy,normal_fragment_maps:Xy,normal_pars_fragment:qy,normal_pars_vertex:Yy,normal_vertex:Zy,normalmap_pars_fragment:Jy,clearcoat_normal_fragment_begin:$y,clearcoat_normal_fragment_maps:jy,clearcoat_pars_fragment:Ky,iridescence_pars_fragment:Qy,opaque_fragment:e_,packing:t_,premultiplied_alpha_fragment:n_,project_vertex:i_,dithering_fragment:s_,dithering_pars_fragment:r_,roughnessmap_fragment:a_,roughnessmap_pars_fragment:o_,shadowmap_pars_fragment:l_,shadowmap_pars_vertex:c_,shadowmap_vertex:h_,shadowmask_pars_fragment:u_,skinbase_vertex:d_,skinning_pars_vertex:f_,skinning_vertex:p_,skinnormal_vertex:m_,specularmap_fragment:g_,specularmap_pars_fragment:x_,tonemapping_fragment:y_,tonemapping_pars_fragment:__,transmission_fragment:v_,transmission_pars_fragment:b_,uv_pars_fragment:M_,uv_pars_vertex:S_,uv_vertex:E_,worldpos_vertex:T_,background_vert:w_,background_frag:A_,backgroundCube_vert:R_,backgroundCube_frag:C_,cube_vert:I_,cube_frag:P_,depth_vert:L_,depth_frag:D_,distance_vert:N_,distance_frag:U_,equirect_vert:F_,equirect_frag:O_,linedashed_vert:B_,linedashed_frag:z_,meshbasic_vert:k_,meshbasic_frag:H_,meshlambert_vert:G_,meshlambert_frag:V_,meshmatcap_vert:W_,meshmatcap_frag:X_,meshnormal_vert:q_,meshnormal_frag:Y_,meshphong_vert:Z_,meshphong_frag:J_,meshphysical_vert:$_,meshphysical_frag:j_,meshtoon_vert:K_,meshtoon_frag:Q_,points_vert:ev,points_frag:tv,shadow_vert:nv,shadow_frag:iv,sprite_vert:sv,sprite_frag:rv},Se={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},vi={basic:{uniforms:gn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:gn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:gn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:gn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:gn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Be(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:gn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:gn([Se.points,Se.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:gn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:gn([Se.common,Se.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:gn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:gn([Se.sprite,Se.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:gn([Se.common,Se.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:gn([Se.lights,Se.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};vi.physical={uniforms:gn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};var _c={r:0,b:0,g:0},av=new pt,Xp=new Qe;Xp.set(-1,0,0,0,1,0,0,0,1);function ov(i,e,t,n,s,r){let a=new Be(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function p(y){let v=y.isScene===!0?y.background:null;if(v&&v.isTexture){let x=y.backgroundBlurriness>0;v=e.get(v,x)}return v}function g(y){let v=!1,x=p(y);x===null?m(a,o):x&&x.isColor&&(m(x,1),v=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(y,v){let x=p(v);x&&(x.isCubeTexture||x.mapping===Ua)?(c===void 0&&(c=new oe(new bt(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:Rs(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(av.makeRotationFromEuler(v.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Xp),c.material.toneMapped=dt.getTransfer(x.colorSpace)!==wt,(h!==x||d!==x.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new oe(new ni(2,2),new bn({name:"BackgroundMaterial",uniforms:Rs(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=dt.getTransfer(x.colorSpace)!==wt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,v){y.getRGB(_c,pu(i)),t.buffers.color.setClear(_c.r,_c.g,_c.b,v,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),o=v,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:g,addToRenderList:M,dispose:f}}function lv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(P,N,B,R,L){let O=!1,k=d(P,R,B,N);r!==k&&(r=k,c(r.object)),O=p(P,R,B,L),O&&g(P,R,B,L),L!==null&&e.update(L,i.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,x(P,N,B,R),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function d(P,N,B,R){let L=R.wireframe===!0,O=n[N.id];O===void 0&&(O={},n[N.id]=O);let k=P.isInstancedMesh===!0?P.id:0,j=O[k];j===void 0&&(j={},O[k]=j);let G=j[B.id];G===void 0&&(G={},j[B.id]=G);let Y=G[L];return Y===void 0&&(Y=u(l()),G[L]=Y),Y}function u(P){let N=[],B=[],R=[];for(let L=0;L<t;L++)N[L]=0,B[L]=0,R[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:R,object:P,attributes:{},index:null}}function p(P,N,B,R){let L=r.attributes,O=N.attributes,k=0,j=B.getAttributes();for(let G in j)if(j[G].location>=0){let K=L[G],Le=O[G];if(Le===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(Le=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(Le=P.instanceColor)),K===void 0||K.attribute!==Le||Le&&K.data!==Le.data)return!0;k++}return r.attributesNum!==k||r.index!==R}function g(P,N,B,R){let L={},O=N.attributes,k=0,j=B.getAttributes();for(let G in j)if(j[G].location>=0){let K=O[G];K===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(K=P.instanceColor));let Le={};Le.attribute=K,K&&K.data&&(Le.data=K.data),L[G]=Le,k++}r.attributes=L,r.attributesNum=k,r.index=R}function M(){let P=r.newAttributes;for(let N=0,B=P.length;N<B;N++)P[N]=0}function m(P){f(P,0)}function f(P,N){let B=r.newAttributes,R=r.enabledAttributes,L=r.attributeDivisors;B[P]=1,R[P]===0&&(i.enableVertexAttribArray(P),R[P]=1),L[P]!==N&&(i.vertexAttribDivisor(P,N),L[P]=N)}function y(){let P=r.newAttributes,N=r.enabledAttributes;for(let B=0,R=N.length;B<R;B++)N[B]!==P[B]&&(i.disableVertexAttribArray(B),N[B]=0)}function v(P,N,B,R,L,O,k){k===!0?i.vertexAttribIPointer(P,N,B,L,O):i.vertexAttribPointer(P,N,B,R,L,O)}function x(P,N,B,R){M();let L=R.attributes,O=B.getAttributes(),k=N.defaultAttributeValues;for(let j in O){let G=O[j];if(G.location>=0){let Y=L[j];if(Y===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor)),Y!==void 0){let K=Y.normalized,Le=Y.itemSize,Ce=e.get(Y);if(Ce===void 0)continue;let vt=Ce.buffer,lt=Ce.type,mt=Ce.bytesPerElement,$=lt===i.INT||lt===i.UNSIGNED_INT||Y.gpuType===Ul;if(Y.isInterleavedBufferAttribute){let te=Y.data,Ee=te.stride,Ze=Y.offset;if(te.isInstancedInterleavedBuffer){for(let Ie=0;Ie<G.locationSize;Ie++)f(G.location+Ie,te.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ie=0;Ie<G.locationSize;Ie++)m(G.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let Ie=0;Ie<G.locationSize;Ie++)v(G.location+Ie,Le/G.locationSize,lt,K,Ee*mt,(Ze+Le/G.locationSize*Ie)*mt,$)}else{if(Y.isInstancedBufferAttribute){for(let te=0;te<G.locationSize;te++)f(G.location+te,Y.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let te=0;te<G.locationSize;te++)m(G.location+te);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let te=0;te<G.locationSize;te++)v(G.location+te,Le/G.locationSize,lt,K,Le*mt,Le/G.locationSize*te*mt,$)}}else if(k!==void 0){let K=k[j];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(G.location,K);break;case 3:i.vertexAttrib3fv(G.location,K);break;case 4:i.vertexAttrib4fv(G.location,K);break;default:i.vertexAttrib1fv(G.location,K)}}}}y()}function S(){w();for(let P in n){let N=n[P];for(let B in N){let R=N[B];for(let L in R){let O=R[L];for(let k in O)h(O[k].object),delete O[k];delete R[L]}}delete n[P]}}function E(P){if(n[P.id]===void 0)return;let N=n[P.id];for(let B in N){let R=N[B];for(let L in R){let O=R[L];for(let k in O)h(O[k].object),delete O[k];delete R[L]}}delete n[P.id]}function A(P){for(let N in n){let B=n[N];for(let R in B){let L=B[R];if(L[P.id]===void 0)continue;let O=L[P.id];for(let k in O)h(O[k].object),delete O[k];delete L[P.id]}}}function _(P){for(let N in n){let B=n[N],R=P.isInstancedMesh===!0?P.id:0,L=B[R];if(L!==void 0){for(let O in L){let k=L[O];for(let j in k)h(k[j].object),delete k[j];delete L[O]}delete B[R],Object.keys(B).length===0&&delete n[N]}}}function w(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:M,enableAttribute:m,disableUnusedAttributes:y}}function cv(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function hv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Wn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let _=A===ri&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Cn&&A!==Vn&&!_&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(We("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:x,maxSamples:S,samples:E}}function uv(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Qn,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,v=y*4,x=f.clippingState||null;l.value=x,x=h(g,u,v,p);for(let S=0;S!==v;++S)x[S]=t[S];f.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,p,g){let M=d!==null?d.length:0,m=null;if(M!==0){if(m=l.value,g!==!0||m===null){let f=p+M*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,x=p;v!==M;++v,x+=4)a.copy(d[v]).applyMatrix4(y,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}var Rr=4,dv=6,fv=20,pv=256,Wa=new br,Sp=new Be,Su=null,Eu=0,Tu=0,wu=!1,mv=new D,Cs=new D,bc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=mv}=r;Su=this._renderer.getRenderTarget(),Eu=this._renderer.getActiveCubeFace(),Tu=this._renderer.getActiveMipmapLevel(),wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Su,Eu,Tu),this._renderer.xr.enabled=wu,e.scissorTest=!1,Ar(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rs||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Su=this._renderer.getRenderTarget(),Eu=this._renderer.getActiveCubeFace(),Tu=this._renderer.getActiveMipmapLevel(),wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:ri,format:Wn,colorSpace:na,depthBuffer:!1},s=Ep(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ep(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=gv(r)),this._blurMaterial=yv(r,e,t),this._ggxMaterial=xv(r,e,t)}return s}_compileMaterial(e){let t=new oe(new At,e);this._renderer.compile(t,Wa)}_sceneToCubeUV(e,t,n,s,r){let l=new cn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(Sp),d.toneMapping=ii,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new oe(new bt,new je({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,m=M.material,f=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,f=!0):(m.color.copy(Sp),f=!0);for(let v=0;v<6;v++){let x=v%3;x===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[v],r.y,r.z)):x===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[v]));let S=this._cubeSize;Ar(s,x*S,v>2?S:0,S,S),d.setRenderTarget(s),f&&d.render(M,l),d.render(e,l)}d.toneMapping=p,d.autoClear=u,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===rs||e.mapping===As;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ar(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Wa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,p=d*u,{_lodMax:g}=this,M=this._sizeLods[n],m=3*M*(n>g-Rr?n-g+Rr:0),f=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,Ar(r,m,f,3*M,2*M),s.setRenderTarget(r),s.render(o,Wa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Ar(e,m,f,3*M,2*M),s.setRenderTarget(e),s.render(o,Wa)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Rr?s-this._lodMax+Rr:0),u=4*(this._cubeSize-h);Ar(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(l,Wa)}};function gv(i){let e=[],t=[],n=i,s=i-Rr+1+dv;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,p=3,g=new Float32Array(p*u*d),M=new Float32Array(p*u*d);for(let f=0;f<d;f++){let y=f%3*2/3-1,v=f>2?0:-1,x=[y,v,0,y+2/3,v,0,y+2/3,v+1,0,y,v,0,y+2/3,v+1,0,y,v+1,0];g.set(x,p*u*f);for(let S=0;S<u;S++){let E=h[S*2]*2-1,A=h[S*2+1]*2-1;f===0?Cs.set(1,A,E):f===1?Cs.set(-E,1,-A):f===2?Cs.set(-E,A,1):f===3?Cs.set(-1,A,-E):f===4?Cs.set(-E,-1,A):Cs.set(E,A,-1),Cs.toArray(M,(f*u+S)*p)}}let m=new At;m.setAttribute("position",new Yt(g,p)),m.setAttribute("outputDirection",new Yt(M,p)),t.push(new oe(m,null)),n>Rr&&n--}return{lodMeshes:t,sizeLods:e}}function Ep(i,e,t){let n=new wn(i,e,t);return n.texture.mapping=Ua,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ar(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function xv(i,e,t){return new bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:pv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function yv(i,e,t){return new bn({name:"SphericalGaussianBlur",defines:{SAMPLES:fv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Tp(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function wp(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Ec(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Mc=class extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ma(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new bt(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:yi});r.uniforms.tEquirect.value=t;let a=new oe(s,r),o=t.minFilter;return t.minFilter===as&&(t.minFilter=hn),new Al(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function _v(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===Ll||p===Dl)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let M=new Mc(g.height);return M.fromEquirectangularTexture(i,u),e.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let p=u.mapping,g=p===Ll||p===Dl,M=p===rs||p===As;if(g||M){let m=t.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new bc(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let y=u.image;return g&&y&&y.height>0||M&&y&&l(y)?(n===null&&(n=new bc(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,p){return p===Ll?u.mapping=rs:p===Dl&&(u.mapping=As),u}function l(u){let p=0,g=6;for(let M=0;M<g;M++)u[M]!==void 0&&p++;return p===g}function c(u){let p=u.target;p.removeEventListener("dispose",c);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function vv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ys("WebGLRenderer: "+n+" extension not supported."),s}}}function bv(i,e,t,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let p=r.get(u);p&&(e.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let p in u)e.update(u[p],i.ARRAY_BUFFER)}function c(d){let u=[],p=d.index,g=d.attributes.position,M=0;if(g===void 0)return;if(p!==null){let y=p.array;M=p.version;for(let v=0,x=y.length;v<x;v+=3){let S=y[v+0],E=y[v+1],A=y[v+2];u.push(S,E,E,A,A,S)}}else{let y=g.array;M=g.version;for(let v=0,x=y.length/3-1;v<x;v+=3){let S=v+0,E=v+1,A=v+2;u.push(S,E,E,A,A,S)}}let m=new(g.count>=65535?ha:ca)(u,1);m.version=M;let f=r.get(d);f&&e.remove(f),r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Mv(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),t.update(u,n,1)}function c(d,u,p){p!==0&&(i.drawElementsInstanced(n,u,r,d*a,p),t.update(u,n,p))}function h(d,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,p);let M=0;for(let m=0;m<p;m++)M+=u[m];t.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Sv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ye("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ev(i,e,t){let n=new WeakMap,s=new kt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let w=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],v=0;p===!0&&(v=1),g===!0&&(v=2),M===!0&&(v=3);let x=o.attributes.position.count*v,S=1;x>e.maxTextureSize&&(S=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let E=new Float32Array(x*S*4*d),A=new aa(E,x,S,d);A.type=Vn,A.needsUpdate=!0;let _=v*4;for(let C=0;C<d;C++){let P=m[C],N=f[C],B=y[C],R=x*S*4*C;for(let L=0;L<P.count;L++){let O=L*_;p===!0&&(s.fromBufferAttribute(P,L),E[R+O+0]=s.x,E[R+O+1]=s.y,E[R+O+2]=s.z,E[R+O+3]=0),g===!0&&(s.fromBufferAttribute(N,L),E[R+O+4]=s.x,E[R+O+5]=s.y,E[R+O+6]=s.z,E[R+O+7]=0),M===!0&&(s.fromBufferAttribute(B,L),E[R+O+8]=s.x,E[R+O+9]=s.y,E[R+O+10]=s.z,E[R+O+11]=B.itemSize===4?s.w:1)}}u={count:d,texture:A,size:new he(x,S)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Tv(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var wv={[jh]:"LINEAR_TONE_MAPPING",[Kh]:"REINHARD_TONE_MAPPING",[Qh]:"CINEON_TONE_MAPPING",[eu]:"ACES_FILMIC_TONE_MAPPING",[nu]:"AGX_TONE_MAPPING",[iu]:"NEUTRAL_TONE_MAPPING",[tu]:"CUSTOM_TONE_MAPPING"};function Av(i,e,t,n,s,r){let a=new wn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new At;c.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new tt([0,2,0,0,2,0],2));let h=new pl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new oe(c,h),u=new br(-1,1,1,-1,0,1),p=null,g=null,M=!1,m,f=null,y=[],v=!1;this.setSize=function(x,S){a.setSize(x,S),o!==null&&o.setSize(x,S),l!==null&&l.setSize(x,S);for(let E=0;E<y.length;E++){let A=y[E];A.setSize&&A.setSize(x,S)}},this.setEffects=function(x){y=x,v=y.length>0&&y[0].isRenderPass===!0;let S=a.width,E=a.height;y.length>0&&o===null&&(o=new wn(S,E,{type:ri,depthBuffer:!1,stencilBuffer:!1}),l=new wn(S,E,{type:ri,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<y.length;A++){let _=y[A];_.setSize&&_.setSize(S,E)}},this.begin=function(x,S){if(M||x.toneMapping===ii&&y.length===0)return!1;if(f=S,S!==null){let E=S.width,A=S.height;(a.width!==E||a.height!==A)&&this.setSize(E,A)}return v===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=ii,!0},this.hasRenderPass=function(){return v},this.end=function(x,S){x.toneMapping=m,M=!0;let E=a,A=o;for(let _=0;_<y.length;_++){let w=y[_];w.enabled!==!1&&(w.render(x,A,E,S),w.needsSwap!==!1&&(E=A,A=A===o?l:o))}if(p!==x.outputColorSpace||g!==x.toneMapping){p=x.outputColorSpace,g=x.toneMapping,h.defines={},dt.getTransfer(p)===wt&&(h.defines.SRGB_TRANSFER="");let _=wv[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,x.setRenderTarget(f),x.render(d,u),f=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var qp=new vn,Cu=new Qi(1,1),Yp=new aa,Zp=new nl,Jp=new ma,Ap=[],Rp=[],Cp=new Float32Array(16),Ip=new Float32Array(9),Pp=new Float32Array(4);function Ir(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Ap[s];if(r===void 0&&(r=new Float32Array(s),Ap[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function rn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function an(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Tc(i,e){let t=Rp[e];t===void 0&&(t=new Int32Array(e),Rp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Rv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Cv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2fv(this.addr,e),an(t,e)}}function Iv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;i.uniform3fv(this.addr,e),an(t,e)}}function Pv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4fv(this.addr,e),an(t,e)}}function Lv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(rn(t,n))return;Pp.set(n),i.uniformMatrix2fv(this.addr,!1,Pp),an(t,n)}}function Dv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(rn(t,n))return;Ip.set(n),i.uniformMatrix3fv(this.addr,!1,Ip),an(t,n)}}function Nv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(rn(t,n))return;Cp.set(n),i.uniformMatrix4fv(this.addr,!1,Cp),an(t,n)}}function Uv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Fv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2iv(this.addr,e),an(t,e)}}function Ov(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;i.uniform3iv(this.addr,e),an(t,e)}}function Bv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4iv(this.addr,e),an(t,e)}}function zv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function kv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2uiv(this.addr,e),an(t,e)}}function Hv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;i.uniform3uiv(this.addr,e),an(t,e)}}function Gv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4uiv(this.addr,e),an(t,e)}}function Vv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Cu.compareFunction=t.isReversedDepthBuffer()?yc:xc,r=Cu):r=qp,t.setTexture2D(e||r,s)}function Wv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Zp,s)}function Xv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Jp,s)}function qv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Yp,s)}function Yv(i){switch(i){case 5126:return Rv;case 35664:return Cv;case 35665:return Iv;case 35666:return Pv;case 35674:return Lv;case 35675:return Dv;case 35676:return Nv;case 5124:case 35670:return Uv;case 35667:case 35671:return Fv;case 35668:case 35672:return Ov;case 35669:case 35673:return Bv;case 5125:return zv;case 36294:return kv;case 36295:return Hv;case 36296:return Gv;case 35678:case 36198:case 36298:case 36306:case 35682:return Vv;case 35679:case 36299:case 36307:return Wv;case 35680:case 36300:case 36308:case 36293:return Xv;case 36289:case 36303:case 36311:case 36292:return qv}}function Zv(i,e){i.uniform1fv(this.addr,e)}function Jv(i,e){let t=Ir(e,this.size,2);i.uniform2fv(this.addr,t)}function $v(i,e){let t=Ir(e,this.size,3);i.uniform3fv(this.addr,t)}function jv(i,e){let t=Ir(e,this.size,4);i.uniform4fv(this.addr,t)}function Kv(i,e){let t=Ir(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Qv(i,e){let t=Ir(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function eb(i,e){let t=Ir(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function tb(i,e){i.uniform1iv(this.addr,e)}function nb(i,e){i.uniform2iv(this.addr,e)}function ib(i,e){i.uniform3iv(this.addr,e)}function sb(i,e){i.uniform4iv(this.addr,e)}function rb(i,e){i.uniform1uiv(this.addr,e)}function ab(i,e){i.uniform2uiv(this.addr,e)}function ob(i,e){i.uniform3uiv(this.addr,e)}function lb(i,e){i.uniform4uiv(this.addr,e)}function cb(i,e,t){let n=this.cache,s=e.length,r=Tc(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Cu:a=qp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function hb(i,e,t){let n=this.cache,s=e.length,r=Tc(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Zp,r[a])}function ub(i,e,t){let n=this.cache,s=e.length,r=Tc(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Jp,r[a])}function db(i,e,t){let n=this.cache,s=e.length,r=Tc(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Yp,r[a])}function fb(i){switch(i){case 5126:return Zv;case 35664:return Jv;case 35665:return $v;case 35666:return jv;case 35674:return Kv;case 35675:return Qv;case 35676:return eb;case 5124:case 35670:return tb;case 35667:case 35671:return nb;case 35668:case 35672:return ib;case 35669:case 35673:return sb;case 5125:return rb;case 36294:return ab;case 36295:return ob;case 36296:return lb;case 35678:case 36198:case 36298:case 36306:case 35682:return cb;case 35679:case 36299:case 36307:return hb;case 35680:case 36300:case 36308:case 36293:return ub;case 36289:case 36303:case 36311:case 36292:return db}}var Iu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Yv(t.type)}},Pu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fb(t.type)}},Lu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Au=/(\w+)(\])?(\[|\.)?/g;function Lp(i,e){i.seq.push(e),i.map[e.id]=e}function pb(i,e,t){let n=i.name,s=n.length;for(Au.lastIndex=0;;){let r=Au.exec(n),a=Au.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Lp(t,c===void 0?new Iu(o,i,e):new Pu(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Lu(o),Lp(t,d)),t=d}}}var Cr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);pb(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Dp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var mb=37297,gb=0;function xb(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Np=new Qe;function yb(i){dt._getMatrix(Np,dt.workingColorSpace,i);let e=`mat3( ${Np.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case ia:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Up(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+xb(i.getShaderSource(e),o)}else return r}function _b(i,e){let t=yb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var vb={[jh]:"Linear",[Kh]:"Reinhard",[Qh]:"Cineon",[eu]:"ACESFilmic",[nu]:"AgX",[iu]:"Neutral",[tu]:"Custom"};function bb(i,e){let t=vb[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var vc=new D;function Mb(){dt.getLuminanceCoefficients(vc);let i=vc.x.toFixed(4),e=vc.y.toFixed(4),t=vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qa).join(`
`)}function Eb(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Tb(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function qa(i){return i!==""}function Fp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Op(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var wb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Du(i){return i.replace(wb,Rb)}var Ab=new Map;function Rb(i,e){let t=at[e];if(t===void 0){let n=Ab.get(e);if(n!==void 0)t=at[n],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Du(t)}var Cb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bp(i){return i.replace(Cb,Ib)}function Ib(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Pb={[Na]:"SHADOWMAP_TYPE_PCF",[Sr]:"SHADOWMAP_TYPE_VSM"};function Lb(i){return Pb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Db={[rs]:"ENVMAP_TYPE_CUBE",[As]:"ENVMAP_TYPE_CUBE",[Ua]:"ENVMAP_TYPE_CUBE_UV"};function Nb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Db[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ub={[As]:"ENVMAP_MODE_REFRACTION"};function Fb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ub[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ob={[Pl]:"ENVMAP_BLENDING_MULTIPLY",[Kf]:"ENVMAP_BLENDING_MIX",[Qf]:"ENVMAP_BLENDING_ADD"};function Bb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ob[i.combine]||"ENVMAP_BLENDING_NONE"}function zb(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function kb(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Lb(t),c=Nb(t),h=Fb(t),d=Bb(t),u=zb(t),p=Sb(t),g=Eb(r),M=s.createProgram(),m,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qa).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qa).join(`
`),f.length>0&&(f+=`
`)):(m=[zp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qa).join(`
`),f=[zp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?at.tonemapping_pars_fragment:"",t.toneMapping!==ii?bb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,_b("linearToOutputTexel",t.outputColorSpace),Mb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qa).join(`
`)),a=Du(a),a=Fp(a,t),a=Op(a,t),o=Du(o),o=Fp(o,t),o=Op(o,t),a=Bp(a),o=Bp(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===du?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let v=y+m+a,x=y+f+o,S=Dp(s,s.VERTEX_SHADER,v),E=Dp(s,s.FRAGMENT_SHADER,x);s.attachShader(M,S),s.attachShader(M,E),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function A(P){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(M)||"",B=s.getShaderInfoLog(S)||"",R=s.getShaderInfoLog(E)||"",L=N.trim(),O=B.trim(),k=R.trim(),j=!0,G=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,S,E);else{let Y=Up(s,S,"vertex"),K=Up(s,E,"fragment");Ye("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+Y+`
`+K)}else L!==""?We("WebGLProgram: Program Info Log:",L):(O===""||k==="")&&(G=!1);G&&(P.diagnostics={runnable:j,programLog:L,vertexShader:{log:O,prefix:m},fragmentShader:{log:k,prefix:f}})}s.deleteShader(S),s.deleteShader(E),_=new Cr(s,M),w=Tb(s,M)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(M,mb)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gb++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=S,this.fragmentShader=E,this}var Hb=0,Nu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Uu(e),t.set(e,n)),n}},Uu=class{constructor(e){this.id=Hb++,this.code=e,this.usedTimes=0}};function Gb(i){return i===ls||i===Ha||i===Ga}function Vb(i,e,t,n,s,r){let a=new dr,o=new Nu,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function M(_,w,C,P,N,B){let R=P.fog,L=N.geometry,O=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,j=e.get(_.envMap||O,k),G=j&&j.mapping===Ua?j.image.height:null,Y=p[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&We("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let K=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Le=K!==void 0?K.length:0,Ce=0;L.morphAttributes.position!==void 0&&(Ce=1),L.morphAttributes.normal!==void 0&&(Ce=2),L.morphAttributes.color!==void 0&&(Ce=3);let vt,lt,mt,$;if(Y){let Bt=vi[Y];vt=Bt.vertexShader,lt=Bt.fragmentShader}else{vt=_.vertexShader,lt=_.fragmentShader;let Bt=o.getVertexShaderStage(_),Et=o.getFragmentShaderStage(_);o.update(_,Bt,Et),mt=Bt.id,$=Et.id}let te=i.getRenderTarget(),Ee=i.state.buffers.depth.getReversed(),Ze=N.isInstancedMesh===!0,Ie=N.isBatchedMesh===!0,Je=!!_.map,Rt=!!_.matcap,ne=!!j,le=!!_.aoMap,ue=!!_.lightMap,de=!!_.bumpMap&&_.wireframe===!1,ge=!!_.normalMap,Xe=!!_.displacementMap,Ve=!!_.emissiveMap,$e=!!_.metalnessMap,et=!!_.roughnessMap,U=_.anisotropy>0,St=_.clearcoat>0,ct=_.dispersion>0,I=_.retroreflectivity>0,b=_.iridescence>0,H=_.sheen>0,X=_.transmission>0,Z=U&&!!_.anisotropyMap,fe=St&&!!_.clearcoatMap,me=St&&!!_.clearcoatNormalMap,J=St&&!!_.clearcoatRoughnessMap,ee=b&&!!_.iridescenceMap,ye=b&&!!_.iridescenceThicknessMap,ze=H&&!!_.sheenColorMap,Me=H&&!!_.sheenRoughnessMap,_e=!!_.specularMap,ke=!!_.specularColorMap,qe=!!_.specularIntensityMap,st=X&&!!_.transmissionMap,z=X&&!!_.thicknessMap,ve=!!_.gradientMap,Q=!!_.alphaMap,be=_.alphaTest>0,Re=!!_.alphaHash,ae=!!_.extensions,He=ii;_.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(He=i.toneMapping);let Fe={shaderID:Y,shaderType:_.type,shaderName:_.name,vertexShader:vt,fragmentShader:lt,defines:_.defines,customVertexShaderID:mt,customFragmentShaderID:$,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:Ie,batchingColor:Ie&&N._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&N.instanceColor!==null,instancingMorph:Ze&&N.morphTexture!==null,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Je,matcap:Rt,envMap:ne,envMapMode:ne&&j.mapping,envMapCubeUVHeight:G,aoMap:le,lightMap:ue,bumpMap:de,normalMap:ge,displacementMap:Xe,emissiveMap:Ve,normalMapObjectSpace:ge&&_.normalMapType===np,normalMapTangentSpace:ge&&_.normalMapType===Va,packedNormalMap:ge&&_.normalMapType===Va&&Gb(_.normalMap.format),metalnessMap:$e,roughnessMap:et,anisotropy:U,anisotropyMap:Z,clearcoat:St,clearcoatMap:fe,clearcoatNormalMap:me,clearcoatRoughnessMap:J,dispersion:ct,retroreflection:I,iridescence:b,iridescenceMap:ee,iridescenceThicknessMap:ye,sheen:H,sheenColorMap:ze,sheenRoughnessMap:Me,specularMap:_e,specularColorMap:ke,specularIntensityMap:qe,transmission:X,transmissionMap:st,thicknessMap:z,gradientMap:ve,opaque:_.transparent===!1&&_.blending===ss&&_.alphaToCoverage===!1,alphaMap:Q,alphaTest:be,alphaHash:Re,combine:_.combine,mapUv:Je&&g(_.map.channel),aoMapUv:le&&g(_.aoMap.channel),lightMapUv:ue&&g(_.lightMap.channel),bumpMapUv:de&&g(_.bumpMap.channel),normalMapUv:ge&&g(_.normalMap.channel),displacementMapUv:Xe&&g(_.displacementMap.channel),emissiveMapUv:Ve&&g(_.emissiveMap.channel),metalnessMapUv:$e&&g(_.metalnessMap.channel),roughnessMapUv:et&&g(_.roughnessMap.channel),anisotropyMapUv:Z&&g(_.anisotropyMap.channel),clearcoatMapUv:fe&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:me&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(_.sheenRoughnessMap.channel),specularMapUv:_e&&g(_.specularMap.channel),specularColorMapUv:ke&&g(_.specularColorMap.channel),specularIntensityMapUv:qe&&g(_.specularIntensityMap.channel),transmissionMapUv:st&&g(_.transmissionMap.channel),thicknessMapUv:z&&g(_.thicknessMap.channel),alphaMapUv:Q&&g(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ge||U),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!L.attributes.uv&&(Je||Q),fog:!!R,useFog:_.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&ge===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ee,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:Ce,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:He,decodeVideoTexture:Je&&_.map.isVideoTexture===!0&&dt.getTransfer(_.map.colorSpace)===wt,decodeVideoTextureEmissive:Ve&&_.emissiveMap.isVideoTexture===!0&&dt.getTransfer(_.emissiveMap.colorSpace)===wt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===mn,flipSided:_.side===un,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ae&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&_.extensions.multiDraw===!0||Ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Fe.vertexUv1s=l.has(1),Fe.vertexUv2s=l.has(2),Fe.vertexUv3s=l.has(3),l.clear(),Fe}function m(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)w.push(C),w.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(f(w,_),y(w,_),w.push(i.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function f(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function y(_,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function v(_){let w=p[_.type],C;if(w){let P=vi[w];C=vp.clone(P.uniforms)}else C=_.uniforms;return C}function x(_,w){let C=h.get(w);return C!==void 0?++C.usedTimes:(C=new kb(i,w,_,s),c.push(C),h.set(w,C)),C}function S(_){if(--_.usedTimes===0){let w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function A(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:v,acquireProgram:x,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:A}}function Wb(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Xb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function kp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Hp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,g,M,m,f){let y=i[e];return y===void 0?(y={id:u.id,object:u,geometry:p,material:g,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:f},i[e]=y):(y.id=u.id,y.object=u,y.geometry=p,y.material=g,y.materialVariant=a(u),y.groupOrder=M,y.renderOrder=u.renderOrder,y.z=m,y.group=f),e++,y}function l(u,p,g,M,m,f,y){y.reversedDepth===!0&&(m=-m);let v=o(u,p,g,M,m,f);g.transmission>0?n.push(v):g.transparent===!0?s.push(v):t.push(v)}function c(u,p,g,M,m,f){let y=o(u,p,g,M,m,f);g.transmission>0?n.unshift(y):g.transparent===!0?s.unshift(y):t.unshift(y)}function h(u,p){t.length>1&&t.sort(u||Xb),n.length>1&&n.sort(p||kp),s.length>1&&s.sort(p||kp)}function d(){for(let u=e,p=i.length;u<p;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function qb(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Hp,i.set(n,[a])):s>=r.length?(a=new Hp,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Yb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new Be};break;case"SpotLight":t={position:new D,direction:new D,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Zb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Jb=0;function $b(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function jb(i){let e=new Yb,t=Zb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new pt,a=new pt;function o(c){let h=0,d=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let p=0,g=0,M=0,m=0,f=0,y=0,v=0,x=0,S=0,E=0,A=0,_=0,w=0,C=0;c.sort($b);for(let N=0,B=c.length;N<B;N++){let R=c[N],L=R.color,O=R.intensity,k=R.distance,j=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===ls?j=R.shadow.map.texture:j=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=L.r*O,d+=L.g*O,u+=L.b*O;else if(R.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(R.sh.coefficients[G],O);C++}else if(R.isSunLight){let G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Y=R.shadow,K=t.get(R);K.shadowIntensity=Y.intensity,K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[g]=K,n.sunShadowMap[g]=j;let Le=Y.getViewportCount();for(let Ce=0;Ce<Le;Ce++)n.sunShadowMatrix[M+Ce]=Y.getMatrix(Ce),n.sunShadowCascade[M+Ce]=Y._cascadeData[Ce];M+=Le,g++}n.sun[p]=G,p++}else if(R.isDirectionalLight){let G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Y=R.shadow,K=t.get(R);K.shadowIntensity=Y.intensity,K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize=Y.mapSize,n.directionalShadow[m]=K,n.directionalShadowMap[m]=j,n.directionalShadowMatrix[m]=R.shadow.matrix,S++}n.directional[m]=G,m++}else if(R.isSpotLight){let G=e.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(L).multiplyScalar(O),G.distance=k,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,n.spot[y]=G;let Y=R.shadow;if(R.map&&(n.spotLightMap[_]=R.map,_++,Y.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[y]=Y.matrix,R.castShadow){let K=t.get(R);K.shadowIntensity=Y.intensity,K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize=Y.mapSize,n.spotShadow[y]=K,n.spotShadowMap[y]=j,A++}y++}else if(R.isRectAreaLight){let G=e.get(R);G.color.copy(L).multiplyScalar(O),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),n.rectArea[v]=G,v++}else if(R.isPointLight){let G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){let Y=R.shadow,K=t.get(R);K.shadowIntensity=Y.intensity,K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize=Y.mapSize,K.shadowCameraNear=Y.camera.near,K.shadowCameraFar=Y.camera.far,n.pointShadow[f]=K,n.pointShadowMap[f]=j,n.pointShadowMatrix[f]=R.shadow.matrix,E++}n.point[f]=G,f++}else if(R.isHemisphereLight){let G=e.get(R);G.skyColor.copy(R.color).multiplyScalar(O),G.groundColor.copy(R.groundColor).multiplyScalar(O),n.hemi[x]=G,x++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let P=n.hash;(P.sunLength!==p||P.directionalLength!==m||P.pointLength!==f||P.spotLength!==y||P.rectAreaLength!==v||P.hemiLength!==x||P.numSunShadows!==g||P.numDirectionalShadows!==S||P.numPointShadows!==E||P.numSpotShadows!==A||P.numSpotMaps!==_||P.numLightProbes!==C)&&(n.sun.length=p,n.directional.length=m,n.spot.length=y,n.rectArea.length=v,n.point.length=f,n.hemi.length=x,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+_-w,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,P.sunLength=p,P.directionalLength=m,P.pointLength=f,P.spotLength=y,P.rectAreaLength=v,P.hemiLength=x,P.numSunShadows=g,P.numDirectionalShadows=S,P.numPointShadows=E,P.numSpotShadows=A,P.numSpotMaps=_,P.numLightProbes=C,n.version=Jb++)}function l(c,h){let d=0,u=0,p=0,g=0,M=0,m=0,f=h.matrixWorldInverse;for(let y=0,v=c.length;y<v;y++){let x=c[y];if(x.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(f),d++}else if(x.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),u++}else if(x.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),g++}else if(x.isRectAreaLight){let S=n.rectArea[M];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(f),a.identity(),r.copy(x.matrixWorld),r.premultiply(f),a.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),M++}else if(x.isPointLight){let S=n.point[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(f),p++}else if(x.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:n}}function Gp(i){let e=new jb(i),t=[],n=[],s=[];function r(u){d.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Kb(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Gp(i),e.set(s,[o])):r>=a.length?(o=new Gp(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Qb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e1=`uniform sampler2D shadow_pass;
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
}`,t1=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],n1=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Vp=new pt,Xa=new D,Ru=new D;function i1(i,e,t){let n=new mr,s=new he,r=new he,a=new kt,o=new ml,l=new gl,c={},h=t.maxTextureSize,d={[is]:un,[un]:is,[mn]:mn},u=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:Qb,fragmentShader:e1}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new At;g.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new oe(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Na;let f=this.type;this.render=function(E,A,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Il&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Na);let w=i.getRenderTarget(),C=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),N=i.state;N.setBlending(yi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let B=f!==this.type;B&&A.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(L=>L.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,L=E.length;R<L;R++){let O=E[R],k=O.shadow;if(k===void 0){We("WebGLShadowMap:",O,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let j=k.getFrameExtents();s.multiply(j),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,k.mapSize.y=r.y));let G=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=G,k.map===null||B===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Sr){if(O.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new wn(s.x,s.y,{format:ls,type:ri,minFilter:hn,magFilter:hn,generateMipmaps:!1}),k.map.texture.name=O.name+".shadowMap",k.map.depthTexture=new Qi(s.x,s.y,Vn),k.map.depthTexture.name=O.name+".shadowMapDepth",k.map.depthTexture.format=fi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Kt,k.map.depthTexture.magFilter=Kt}else O.isPointLight?(k.map=new Mc(s.x),k.map.depthTexture=new ol(s.x,si)):(k.map=new wn(s.x,s.y),k.map.depthTexture=new Qi(s.x,s.y,si)),k.map.depthTexture.name=O.name+".shadowMap",k.map.depthTexture.format=fi,this.type===Na?(k.map.depthTexture.compareFunction=G?yc:xc,k.map.depthTexture.minFilter=hn,k.map.depthTexture.magFilter=hn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Kt,k.map.depthTexture.magFilter=Kt);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);let Y=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();O.isPointLight!==!0&&k.updateMatrices(O,_);for(let K=0;K<Y;K++){let Le=k.getCamera(K);if(O.isPointLight){let Ce=k.camera,vt=k.matrix,lt=O.distance||Ce.far;lt!==Ce.far&&(Ce.far=lt,Ce.updateProjectionMatrix()),Xa.setFromMatrixPosition(O.matrixWorld),Ce.position.copy(Xa),Ru.copy(Ce.position),Ru.add(t1[K]),Ce.up.copy(n1[K]),Ce.lookAt(Ru),Ce.updateMatrixWorld(),vt.makeTranslation(-Xa.x,-Xa.y,-Xa.z),Vp.multiplyMatrices(Ce.projectionMatrix,Ce.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Vp,Ce.coordinateSystem,Ce.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,K),i.clear();else{K===0&&(i.setRenderTarget(k.map),i.clear());let Ce=k.getViewport(K);a.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),N.viewport(a)}n=k.getFrustum(K),x(A,_,Le,O,this.type)}k.isPointLightShadow!==!0&&this.type===Sr&&y(k,_),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(w,C,P)};function y(E,A){let _=e.update(M);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null?E.mapPass=new wn(s.x,s.y,{format:ls,type:ri}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,_,u,M,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value.set(E.map.width,E.map.height),p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,_,p,M,null)}function v(E,A,_,w){let C=null,P=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)C=P;else if(C=_.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let N=C.uuid,B=A.uuid,R=c[N];R===void 0&&(R={},c[N]=R);let L=R[B];L===void 0&&(L=C.clone(),R[B]=L,A.addEventListener("dispose",S)),C=L}if(C.visible=A.visible,C.wireframe=A.wireframe,w===Sr?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:d[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let N=i.properties.get(C);N.light=_}return C}function x(E,A,_,w,C){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===Sr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);let B=e.update(E),R=E.material;if(Array.isArray(R)){let L=B.groups;for(let O=0,k=L.length;O<k;O++){let j=L[O],G=R[j.materialIndex];if(G&&G.visible){let Y=v(E,G,w,C);E.onBeforeShadow(i,E,A,_,B,Y,j),i.renderBufferDirect(_,null,B,Y,E,j),E.onAfterShadow(i,E,A,_,B,Y,j)}}}else if(R.visible){let L=v(E,R,w,C);E.onBeforeShadow(i,E,A,_,B,L,null),i.renderBufferDirect(_,null,B,L,E,null),E.onAfterShadow(i,E,A,_,B,L,null)}}let N=E.children;for(let B=0,R=N.length;B<R;B++)x(N[B],A,_,w,C)}function S(E){E.target.removeEventListener("dispose",S);for(let _ in c){let w=c[_],C=E.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function s1(i,e){function t(){let z=!1,ve=new kt,Q=null,be=new kt(0,0,0,0);return{setMask:function(Re){Q!==Re&&!z&&(i.colorMask(Re,Re,Re,Re),Q=Re)},setLocked:function(Re){z=Re},setClear:function(Re,ae,He,Fe,Bt){Bt===!0&&(Re*=Fe,ae*=Fe,He*=Fe),ve.set(Re,ae,He,Fe),be.equals(ve)===!1&&(i.clearColor(Re,ae,He,Fe),be.copy(ve))},reset:function(){z=!1,Q=null,be.set(-1,0,0,0)}}}function n(){let z=!1,ve=!1,Q=null,be=null,Re=null;return{setReversed:function(ae){if(ve!==ae){let He=e.get("EXT_clip_control");ae?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),ve=ae;let Fe=Re;Re=null,this.setClear(Fe)}},getReversed:function(){return ve},setTest:function(ae){ae?te(i.DEPTH_TEST):Ee(i.DEPTH_TEST)},setMask:function(ae){Q!==ae&&!z&&(i.depthMask(ae),Q=ae)},setFunc:function(ae){if(ve&&(ae=fp[ae]),be!==ae){switch(ae){case Wo:i.depthFunc(i.NEVER);break;case Xo:i.depthFunc(i.ALWAYS);break;case qo:i.depthFunc(i.LESS);break;case lr:i.depthFunc(i.LEQUAL);break;case Yo:i.depthFunc(i.EQUAL);break;case Zo:i.depthFunc(i.GEQUAL);break;case Jo:i.depthFunc(i.GREATER);break;case $o:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}be=ae}},setLocked:function(ae){z=ae},setClear:function(ae){Re!==ae&&(Re=ae,ve&&(ae=1-ae),i.clearDepth(ae))},reset:function(){z=!1,Q=null,be=null,Re=null,ve=!1}}}function s(){let z=!1,ve=null,Q=null,be=null,Re=null,ae=null,He=null,Fe=null,Bt=null;return{setTest:function(Et){z||(Et?te(i.STENCIL_TEST):Ee(i.STENCIL_TEST))},setMask:function(Et){ve!==Et&&!z&&(i.stencilMask(Et),ve=Et)},setFunc:function(Et,Jn,oi){(Q!==Et||be!==Jn||Re!==oi)&&(i.stencilFunc(Et,Jn,oi),Q=Et,be=Jn,Re=oi)},setOp:function(Et,Jn,oi){(ae!==Et||He!==Jn||Fe!==oi)&&(i.stencilOp(Et,Jn,oi),ae=Et,He=Jn,Fe=oi)},setLocked:function(Et){z=Et},setClear:function(Et){Bt!==Et&&(i.clearStencil(Et),Bt=Et)},reset:function(){z=!1,ve=null,Q=null,be=null,Re=null,ae=null,He=null,Fe=null,Bt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},p=new WeakMap,g=[],M=null,m=!1,f=null,y=null,v=null,x=null,S=null,E=null,A=null,_=new Be(0,0,0),w=0,C=!1,P=null,N=null,B=null,R=null,L=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,j=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(G)[1]),k=j>=1):G.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),k=j>=2);let Y=null,K={},Le=i.getParameter(i.SCISSOR_BOX),Ce=i.getParameter(i.VIEWPORT),vt=new kt().fromArray(Le),lt=new kt().fromArray(Ce);function mt(z,ve,Q,be){let Re=new Uint8Array(4),ae=i.createTexture();i.bindTexture(z,ae),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let He=0;He<Q;He++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,be,0,i.RGBA,i.UNSIGNED_BYTE,Re):i.texImage2D(ve+He,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Re);return ae}let $={};$[i.TEXTURE_2D]=mt(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=mt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=mt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=mt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(i.DEPTH_TEST),a.setFunc(lr),de(!1),ge(qh),te(i.CULL_FACE),le(yi);function te(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function Ee(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function Ze(z,ve){return u[z]!==ve?(i.bindFramebuffer(z,ve),u[z]=ve,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ve),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function Ie(z,ve){let Q=g,be=!1;if(z){Q=p.get(ve),Q===void 0&&(Q=[],p.set(ve,Q));let Re=z.textures;if(Q.length!==Re.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,He=Re.length;ae<He;ae++)Q[ae]=i.COLOR_ATTACHMENT0+ae;Q.length=Re.length,be=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,be=!0);be&&i.drawBuffers(Q)}function Je(z){return M!==z?(i.useProgram(z),M=z,!0):!1}let Rt={[ws]:i.FUNC_ADD,[Uf]:i.FUNC_SUBTRACT,[Ff]:i.FUNC_REVERSE_SUBTRACT};Rt[Of]=i.MIN,Rt[Bf]=i.MAX;let ne={[zf]:i.ZERO,[kf]:i.ONE,[Hf]:i.SRC_COLOR,[Jh]:i.SRC_ALPHA,[Yf]:i.SRC_ALPHA_SATURATE,[Xf]:i.DST_COLOR,[Vf]:i.DST_ALPHA,[Gf]:i.ONE_MINUS_SRC_COLOR,[$h]:i.ONE_MINUS_SRC_ALPHA,[qf]:i.ONE_MINUS_DST_COLOR,[Wf]:i.ONE_MINUS_DST_ALPHA,[Zf]:i.CONSTANT_COLOR,[Jf]:i.ONE_MINUS_CONSTANT_COLOR,[$f]:i.CONSTANT_ALPHA,[jf]:i.ONE_MINUS_CONSTANT_ALPHA};function le(z,ve,Q,be,Re,ae,He,Fe,Bt,Et){if(z===yi){m===!0&&(Ee(i.BLEND),m=!1);return}if(m===!1&&(te(i.BLEND),m=!0),z!==Nf){if(z!==f||Et!==C){if((y!==ws||S!==ws)&&(i.blendEquation(i.FUNC_ADD),y=ws,S=ws),Et)switch(z){case ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ui:i.blendFunc(i.ONE,i.ONE);break;case Yh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ye("WebGLState: Invalid blending: ",z);break}else switch(z){case ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Yh:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zh:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",z);break}v=null,x=null,E=null,A=null,_.set(0,0,0),w=0,f=z,C=Et}return}Re=Re||ve,ae=ae||Q,He=He||be,(ve!==y||Re!==S)&&(i.blendEquationSeparate(Rt[ve],Rt[Re]),y=ve,S=Re),(Q!==v||be!==x||ae!==E||He!==A)&&(i.blendFuncSeparate(ne[Q],ne[be],ne[ae],ne[He]),v=Q,x=be,E=ae,A=He),(Fe.equals(_)===!1||Bt!==w)&&(i.blendColor(Fe.r,Fe.g,Fe.b,Bt),_.copy(Fe),w=Bt),f=z,C=!1}function ue(z,ve){z.side===mn?Ee(i.CULL_FACE):te(i.CULL_FACE);let Q=z.side===un;ve&&(Q=!Q),de(Q),z.blending===ss&&z.transparent===!1?le(yi):le(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);let be=z.stencilWrite;o.setTest(be),be&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ve(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):Ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function de(z){P!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),P=z)}function ge(z){z!==Lf?(te(i.CULL_FACE),z!==N&&(z===qh?i.cullFace(i.BACK):z===Df?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ee(i.CULL_FACE),N=z}function Xe(z){z!==B&&(k&&i.lineWidth(z),B=z)}function Ve(z,ve,Q){z?(te(i.POLYGON_OFFSET_FILL),(R!==ve||L!==Q)&&(R=ve,L=Q,a.getReversed()&&(ve=-ve),i.polygonOffset(ve,Q))):Ee(i.POLYGON_OFFSET_FILL)}function $e(z){z?te(i.SCISSOR_TEST):Ee(i.SCISSOR_TEST)}function et(z){z===void 0&&(z=i.TEXTURE0+O-1),Y!==z&&(i.activeTexture(z),Y=z)}function U(z,ve,Q){Q===void 0&&(Y===null?Q=i.TEXTURE0+O-1:Q=Y);let be=K[Q];be===void 0&&(be={type:void 0,texture:void 0},K[Q]=be),(be.type!==z||be.texture!==ve)&&(Y!==Q&&(i.activeTexture(Q),Y=Q),i.bindTexture(z,ve||$[z]),be.type=z,be.texture=ve)}function St(){let z=K[Y];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ct(){try{i.compressedTexImage2D(...arguments)}catch(z){Ye("WebGLState:",z)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(z){Ye("WebGLState:",z)}}function b(){try{i.texSubImage2D(...arguments)}catch(z){Ye("WebGLState:",z)}}function H(){try{i.texSubImage3D(...arguments)}catch(z){Ye("WebGLState:",z)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(z){Ye("WebGLState:",z)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(z){Ye("WebGLState:",z)}}function fe(){try{i.texStorage2D(...arguments)}catch(z){Ye("WebGLState:",z)}}function me(){try{i.texStorage3D(...arguments)}catch(z){Ye("WebGLState:",z)}}function J(){try{i.texImage2D(...arguments)}catch(z){Ye("WebGLState:",z)}}function ee(){try{i.texImage3D(...arguments)}catch(z){Ye("WebGLState:",z)}}function ye(z){return d[z]!==void 0?d[z]:i.getParameter(z)}function ze(z,ve){d[z]!==ve&&(i.pixelStorei(z,ve),d[z]=ve)}function Me(z){vt.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),vt.copy(z))}function _e(z){lt.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),lt.copy(z))}function ke(z,ve){let Q=c.get(ve);Q===void 0&&(Q=new WeakMap,c.set(ve,Q));let be=Q.get(z);be===void 0&&(be=i.getUniformBlockIndex(ve,z.name),Q.set(z,be))}function qe(z,ve){let be=c.get(ve).get(z);l.get(ve)!==be&&(i.uniformBlockBinding(ve,be,z.__bindingPointIndex),l.set(ve,be))}function st(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},Y=null,K={},u={},p=new WeakMap,g=[],M=null,m=!1,f=null,y=null,v=null,x=null,S=null,E=null,A=null,_=new Be(0,0,0),w=0,C=!1,P=null,N=null,B=null,R=null,L=null,vt.set(0,0,i.canvas.width,i.canvas.height),lt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:te,disable:Ee,bindFramebuffer:Ze,drawBuffers:Ie,useProgram:Je,setBlending:le,setMaterial:ue,setFlipSided:de,setCullFace:ge,setLineWidth:Xe,setPolygonOffset:Ve,setScissorTest:$e,activeTexture:et,bindTexture:U,unbindTexture:St,compressedTexImage2D:ct,compressedTexImage3D:I,texImage2D:J,texImage3D:ee,pixelStorei:ze,getParameter:ye,updateUBOMapping:ke,uniformBlockBinding:qe,texStorage2D:fe,texStorage3D:me,texSubImage2D:b,texSubImage3D:H,compressedTexSubImage2D:X,compressedTexSubImage3D:Z,scissor:Me,viewport:_e,reset:st}}function r1(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,h=new WeakMap,d=new Set,u,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(I,b){return g?new OffscreenCanvas(I,b):sa("canvas")}function m(I,b,H){let X=1,Z=ct(I);if((Z.width>H||Z.height>H)&&(X=H/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&I instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&I instanceof ImageBitmap||typeof VideoFrame!="undefined"&&I instanceof VideoFrame){let fe=Math.floor(X*Z.width),me=Math.floor(X*Z.height);u===void 0&&(u=M(fe,me));let J=b?M(fe,me):u;return J.width=fe,J.height=me,J.getContext("2d").drawImage(I,0,0,fe,me),We("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+fe+"x"+me+")."),J}else return"data"in I&&We("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),I;return I}function f(I){return I.generateMipmaps}function y(I){i.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(I,b,H,X,Z,fe=!1){if(I!==null){if(i[I]!==void 0)return i[I];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let me;X&&(me=e.get("EXT_texture_norm16"),me||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=b;if(b===i.RED&&(H===i.FLOAT&&(J=i.R32F),H===i.HALF_FLOAT&&(J=i.R16F),H===i.UNSIGNED_BYTE&&(J=i.R8),H===i.UNSIGNED_SHORT&&me&&(J=me.R16_EXT),H===i.SHORT&&me&&(J=me.R16_SNORM_EXT)),b===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.R8UI),H===i.UNSIGNED_SHORT&&(J=i.R16UI),H===i.UNSIGNED_INT&&(J=i.R32UI),H===i.BYTE&&(J=i.R8I),H===i.SHORT&&(J=i.R16I),H===i.INT&&(J=i.R32I)),b===i.RG&&(H===i.FLOAT&&(J=i.RG32F),H===i.HALF_FLOAT&&(J=i.RG16F),H===i.UNSIGNED_BYTE&&(J=i.RG8),H===i.UNSIGNED_SHORT&&me&&(J=me.RG16_EXT),H===i.SHORT&&me&&(J=me.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RG8UI),H===i.UNSIGNED_SHORT&&(J=i.RG16UI),H===i.UNSIGNED_INT&&(J=i.RG32UI),H===i.BYTE&&(J=i.RG8I),H===i.SHORT&&(J=i.RG16I),H===i.INT&&(J=i.RG32I)),b===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RGB8UI),H===i.UNSIGNED_SHORT&&(J=i.RGB16UI),H===i.UNSIGNED_INT&&(J=i.RGB32UI),H===i.BYTE&&(J=i.RGB8I),H===i.SHORT&&(J=i.RGB16I),H===i.INT&&(J=i.RGB32I)),b===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),H===i.UNSIGNED_INT&&(J=i.RGBA32UI),H===i.BYTE&&(J=i.RGBA8I),H===i.SHORT&&(J=i.RGBA16I),H===i.INT&&(J=i.RGBA32I)),b===i.RGB&&(H===i.UNSIGNED_SHORT&&me&&(J=me.RGB16_EXT),H===i.SHORT&&me&&(J=me.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),b===i.RGBA){let ee=fe?ia:dt.getTransfer(Z);H===i.FLOAT&&(J=i.RGBA32F),H===i.HALF_FLOAT&&(J=i.RGBA16F),H===i.UNSIGNED_BYTE&&(J=ee===wt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&me&&(J=me.RGBA16_EXT),H===i.SHORT&&me&&(J=me.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function S(I,b){let H;return I?b===null||b===si||b===Tr?H=i.DEPTH24_STENCIL8:b===Vn?H=i.DEPTH32F_STENCIL8:b===Er&&(H=i.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===si||b===Tr?H=i.DEPTH_COMPONENT24:b===Vn?H=i.DEPTH_COMPONENT32F:b===Er&&(H=i.DEPTH_COMPONENT16),H}function E(I,b){return f(I)===!0||I.isFramebufferTexture&&I.minFilter!==Kt&&I.minFilter!==hn?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function A(I){let b=I.target;b.removeEventListener("dispose",A),w(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&d.delete(b)}function _(I){let b=I.target;b.removeEventListener("dispose",_),P(b)}function w(I){let b=n.get(I);if(b.__webglInit===void 0)return;let H=I.source,X=p.get(H);if(X){let Z=X[b.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&C(I),Object.keys(X).length===0&&p.delete(H)}n.remove(I)}function C(I){let b=n.get(I);i.deleteTexture(b.__webglTexture);let H=I.source,X=p.get(H);delete X[b.__cacheKey],a.memory.textures--}function P(I){let b=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(b.__webglFramebuffer[X]))for(let Z=0;Z<b.__webglFramebuffer[X].length;Z++)i.deleteFramebuffer(b.__webglFramebuffer[X][Z]);else i.deleteFramebuffer(b.__webglFramebuffer[X]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[X])}else{if(Array.isArray(b.__webglFramebuffer))for(let X=0;X<b.__webglFramebuffer.length;X++)i.deleteFramebuffer(b.__webglFramebuffer[X]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let X=0;X<b.__webglColorRenderbuffer.length;X++)b.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[X]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let H=I.textures;for(let X=0,Z=H.length;X<Z;X++){let fe=n.get(H[X]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),a.memory.textures--),n.remove(H[X])}n.remove(I)}let N=0;function B(){N=0}function R(){return N}function L(I){N=I}function O(){let I=N;return I>=s.maxTextures&&We("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,I}function k(I){let b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function j(I,b){let H=n.get(I);if(I.isVideoTexture&&U(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&H.__version!==I.version){let X=I.image;if(X===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(H,I,b);return}}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+b)}function G(I,b){let H=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){Ee(H,I,b);return}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+b)}function Y(I,b){let H=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){Ee(H,I,b);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+b)}function K(I,b){let H=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&H.__version!==I.version){Ze(H,I,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+b)}let Le={[Ki]:i.REPEAT,[ui]:i.CLAMP_TO_EDGE,[jo]:i.MIRRORED_REPEAT},Ce={[Kt]:i.NEAREST,[ep]:i.NEAREST_MIPMAP_NEAREST,[Fa]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[Nl]:i.LINEAR_MIPMAP_NEAREST,[as]:i.LINEAR_MIPMAP_LINEAR},vt={[sp]:i.NEVER,[cp]:i.ALWAYS,[rp]:i.LESS,[xc]:i.LEQUAL,[ap]:i.EQUAL,[yc]:i.GEQUAL,[op]:i.GREATER,[lp]:i.NOTEQUAL};function lt(I,b){if(b.type===Vn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===hn||b.magFilter===Nl||b.magFilter===Fa||b.magFilter===as||b.minFilter===hn||b.minFilter===Nl||b.minFilter===Fa||b.minFilter===as)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,Le[b.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,Le[b.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,Le[b.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,Ce[b.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,Ce[b.minFilter]),b.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,vt[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Kt||b.minFilter!==Fa&&b.minFilter!==as||b.type===Vn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function mt(I,b){let H=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",A));let X=b.source,Z=p.get(X);Z===void 0&&(Z={},p.set(X,Z));let fe=k(b);if(fe!==I.__cacheKey){Z[fe]===void 0&&(Z[fe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),Z[fe].usedTimes++;let me=Z[I.__cacheKey];me!==void 0&&(Z[I.__cacheKey].usedTimes--,me.usedTimes===0&&C(b)),I.__cacheKey=fe,I.__webglTexture=Z[fe].texture}return H}function $(I,b,H){return Math.floor(Math.floor(I/H)/b)}function te(I,b,H,X){let fe=I.updateRanges;if(fe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,H,X,b.data);else{fe.sort((ze,Me)=>ze.start-Me.start);let me=0;for(let ze=1;ze<fe.length;ze++){let Me=fe[me],_e=fe[ze],ke=Me.start+Me.count,qe=$(_e.start,b.width,4),st=$(Me.start,b.width,4);_e.start<=ke+1&&qe===st&&$(_e.start+_e.count-1,b.width,4)===qe?Me.count=Math.max(Me.count,_e.start+_e.count-Me.start):(++me,fe[me]=_e)}fe.length=me+1;let J=t.getParameter(i.UNPACK_ROW_LENGTH),ee=t.getParameter(i.UNPACK_SKIP_PIXELS),ye=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let ze=0,Me=fe.length;ze<Me;ze++){let _e=fe[ze],ke=Math.floor(_e.start/4),qe=Math.ceil(_e.count/4),st=ke%b.width,z=Math.floor(ke/b.width),ve=qe,Q=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,st),t.pixelStorei(i.UNPACK_SKIP_ROWS,z),t.texSubImage2D(i.TEXTURE_2D,0,st,z,ve,Q,H,X,b.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,ye)}}function Ee(I,b,H){let X=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(X=i.TEXTURE_3D);let Z=mt(I,b),fe=b.source;t.bindTexture(X,I.__webglTexture,i.TEXTURE0+H);let me=n.get(fe);if(fe.version!==me.__version||Z===!0){if(t.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap!="undefined"&&b.image instanceof ImageBitmap)===!1){let Q=dt.getPrimaries(dt.workingColorSpace),be=b.colorSpace===Fi?null:dt.getPrimaries(b.colorSpace),Re=b.colorSpace===Fi||Q===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let ee=m(b.image,!1,s.maxTextureSize);ee=St(b,ee);let ye=r.convert(b.format,b.colorSpace),ze=r.convert(b.type),Me=x(b.internalFormat,ye,ze,b.normalized,b.colorSpace,b.isVideoTexture);lt(X,b);let _e,ke=b.mipmaps,qe=b.isVideoTexture!==!0,st=me.__version===void 0||Z===!0,z=fe.dataReady,ve=E(b,ee);if(b.isDepthTexture)Me=S(b.format===os,b.type),st&&(qe?t.texStorage2D(i.TEXTURE_2D,1,Me,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,Me,ee.width,ee.height,0,ye,ze,null));else if(b.isDataTexture)if(ke.length>0){qe&&st&&t.texStorage2D(i.TEXTURE_2D,ve,Me,ke[0].width,ke[0].height);for(let Q=0,be=ke.length;Q<be;Q++)_e=ke[Q],qe?z&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,_e.width,_e.height,ye,ze,_e.data):t.texImage2D(i.TEXTURE_2D,Q,Me,_e.width,_e.height,0,ye,ze,_e.data);b.generateMipmaps=!1}else qe?(st&&t.texStorage2D(i.TEXTURE_2D,ve,Me,ee.width,ee.height),z&&te(b,ee,ye,ze)):t.texImage2D(i.TEXTURE_2D,0,Me,ee.width,ee.height,0,ye,ze,ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){qe&&st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Me,ke[0].width,ke[0].height,ee.depth);for(let Q=0,be=ke.length;Q<be;Q++)if(_e=ke[Q],b.format!==Wn)if(ye!==null)if(qe){if(z)if(b.layerUpdates.size>0){let Re=xu(_e.width,_e.height,b.format,b.type);for(let ae of b.layerUpdates){let He=_e.data.subarray(ae*Re/_e.data.BYTES_PER_ELEMENT,(ae+1)*Re/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,ae,_e.width,_e.height,1,ye,He)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,_e.width,_e.height,ee.depth,ye,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Me,_e.width,_e.height,ee.depth,0,_e.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,_e.width,_e.height,ee.depth,ye,ze,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,Me,_e.width,_e.height,ee.depth,0,ye,ze,_e.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{qe&&st&&t.texStorage2D(i.TEXTURE_2D,ve,Me,ke[0].width,ke[0].height);for(let Q=0,be=ke.length;Q<be;Q++)_e=ke[Q],b.format!==Wn?ye!==null?qe?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,_e.width,_e.height,ye,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,Me,_e.width,_e.height,0,_e.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?z&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,_e.width,_e.height,ye,ze,_e.data):t.texImage2D(i.TEXTURE_2D,Q,Me,_e.width,_e.height,0,ye,ze,_e.data)}else if(b.isDataArrayTexture)if(qe){if(st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Me,ee.width,ee.height,ee.depth),z)if(b.layerUpdates.size>0){let Q=xu(ee.width,ee.height,b.format,b.type);for(let be of b.layerUpdates){let Re=ee.data.subarray(be*Q/ee.data.BYTES_PER_ELEMENT,(be+1)*Q/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,be,ee.width,ee.height,1,ye,ze,Re)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ye,ze,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,ee.width,ee.height,ee.depth,0,ye,ze,ee.data);else if(b.isData3DTexture)qe?(st&&t.texStorage3D(i.TEXTURE_3D,ve,Me,ee.width,ee.height,ee.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ye,ze,ee.data)):t.texImage3D(i.TEXTURE_3D,0,Me,ee.width,ee.height,ee.depth,0,ye,ze,ee.data);else if(b.isFramebufferTexture){if(st)if(qe)t.texStorage2D(i.TEXTURE_2D,ve,Me,ee.width,ee.height);else{let Q=ee.width,be=ee.height;for(let Re=0;Re<ve;Re++)t.texImage2D(i.TEXTURE_2D,Re,Me,Q,be,0,ye,ze,null),Q>>=1,be>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),ee.parentNode!==Q){Q.appendChild(ee),d.add(b),Q.onpaint=be=>{let Re=be.changedElements;for(let ae of d)Re.includes(ae.image)&&(ae.needsUpdate=!0)},Q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ee);else{let Re=i.RGBA,ae=i.RGBA,He=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Re,ae,He,ee)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ke.length>0){if(qe&&st){let Q=ct(ke[0]);t.texStorage2D(i.TEXTURE_2D,ve,Me,Q.width,Q.height)}for(let Q=0,be=ke.length;Q<be;Q++)_e=ke[Q],qe?z&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ye,ze,_e):t.texImage2D(i.TEXTURE_2D,Q,Me,ye,ze,_e);b.generateMipmaps=!1}else if(qe){if(st){let Q=ct(ee);t.texStorage2D(i.TEXTURE_2D,ve,Me,Q.width,Q.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,ze,ee)}else t.texImage2D(i.TEXTURE_2D,0,Me,ye,ze,ee);f(b)&&y(X),me.__version=fe.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function Ze(I,b,H){if(b.image.length!==6)return;let X=mt(I,b),Z=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+H);let fe=n.get(Z);if(Z.version!==fe.__version||X===!0){t.activeTexture(i.TEXTURE0+H);let me=dt.getPrimaries(dt.workingColorSpace),J=b.colorSpace===Fi?null:dt.getPrimaries(b.colorSpace),ee=b.colorSpace===Fi||me===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let ye=b.isCompressedTexture||b.image[0].isCompressedTexture,ze=b.image[0]&&b.image[0].isDataTexture,Me=[];for(let ae=0;ae<6;ae++)!ye&&!ze?Me[ae]=m(b.image[ae],!0,s.maxCubemapSize):Me[ae]=ze?b.image[ae].image:b.image[ae],Me[ae]=St(b,Me[ae]);let _e=Me[0],ke=r.convert(b.format,b.colorSpace),qe=r.convert(b.type),st=x(b.internalFormat,ke,qe,b.normalized,b.colorSpace),z=b.isVideoTexture!==!0,ve=fe.__version===void 0||X===!0,Q=Z.dataReady,be=E(b,_e);lt(i.TEXTURE_CUBE_MAP,b);let Re;if(ye){z&&ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,st,_e.width,_e.height);for(let ae=0;ae<6;ae++){Re=Me[ae].mipmaps;for(let He=0;He<Re.length;He++){let Fe=Re[He];b.format!==Wn?ke!==null?z?Q&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,He,0,0,Fe.width,Fe.height,ke,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,He,st,Fe.width,Fe.height,0,Fe.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,He,0,0,Fe.width,Fe.height,ke,qe,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,He,st,Fe.width,Fe.height,0,ke,qe,Fe.data)}}}else{if(Re=b.mipmaps,z&&ve){Re.length>0&&be++;let ae=ct(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,be,st,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(ze){z?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Me[ae].width,Me[ae].height,ke,qe,Me[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,st,Me[ae].width,Me[ae].height,0,ke,qe,Me[ae].data);for(let He=0;He<Re.length;He++){let Bt=Re[He].image[ae].image;z?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,He+1,0,0,Bt.width,Bt.height,ke,qe,Bt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,He+1,st,Bt.width,Bt.height,0,ke,qe,Bt.data)}}else{z?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ke,qe,Me[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,st,ke,qe,Me[ae]);for(let He=0;He<Re.length;He++){let Fe=Re[He];z?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,He+1,0,0,ke,qe,Fe.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,He+1,st,ke,qe,Fe.image[ae])}}}f(b)&&y(i.TEXTURE_CUBE_MAP),fe.__version=Z.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function Ie(I,b,H,X,Z,fe){let me=r.convert(H.format,H.colorSpace),J=r.convert(H.type),ee=x(H.internalFormat,me,J,H.normalized,H.colorSpace),ye=n.get(b),ze=n.get(H);if(ze.__renderTarget=b,!ye.__hasExternalTextures){let Me=Math.max(1,b.width>>fe),_e=Math.max(1,b.height>>fe);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,fe,ee,Me,_e,b.depth,0,me,J,null):t.texImage2D(Z,fe,ee,Me,_e,0,me,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),et(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,Z,ze.__webglTexture,0,$e(b)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,Z,ze.__webglTexture,fe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(I,b,H){if(i.bindRenderbuffer(i.RENDERBUFFER,I),b.depthBuffer){let X=b.depthTexture,Z=X&&X.isDepthTexture?X.type:null,fe=S(b.stencilBuffer,Z),me=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;et(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$e(b),fe,b.width,b.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,$e(b),fe,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,fe,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,I)}else{let X=b.textures;for(let Z=0;Z<X.length;Z++){let fe=X[Z],me=r.convert(fe.format,fe.colorSpace),J=r.convert(fe.type),ee=x(fe.internalFormat,me,J,fe.normalized,fe.colorSpace);et(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$e(b),ee,b.width,b.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,$e(b),ee,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ee,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Rt(I,b,H){let X=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(b.depthTexture);if(Z.__renderTarget=b,(!Z.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),X){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,b.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),lt(i.TEXTURE_CUBE_MAP,b.depthTexture);let ye=r.convert(b.depthTexture.format),ze=r.convert(b.depthTexture.type),Me;b.depthTexture.format===fi?Me=i.DEPTH_COMPONENT24:b.depthTexture.format===os&&(Me=i.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Me,b.width,b.height,0,ye,ze,null)}}else j(b.depthTexture,0);let fe=Z.__webglTexture,me=$e(b),J=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,ee=b.depthTexture.format===os?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===fi)et(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,J,fe,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,ee,J,fe,0);else if(b.depthTexture.format===os)et(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,J,fe,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,ee,J,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(I){let b=n.get(I),H=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){let X=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),X){let Z=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),b.__depthDisposeCallback=Z}b.__boundDepthTexture=X}if(I.depthTexture&&!b.__autoAllocateDepthBuffer)if(H)for(let X=0;X<6;X++)Rt(b.__webglFramebuffer[X],I,X);else{let X=I.texture.mipmaps;X&&X.length>0?Rt(b.__webglFramebuffer[0],I,0):Rt(b.__webglFramebuffer,I,0)}else if(H){b.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[X]),b.__webglDepthbuffer[X]===void 0)b.__webglDepthbuffer[X]=i.createRenderbuffer(),Je(b.__webglDepthbuffer[X],I,!1);else{let Z=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=b.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,fe)}}else{let X=I.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Je(b.__webglDepthbuffer,I,!1);else{let Z=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,fe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(I,b,H){let X=n.get(I);b!==void 0&&Ie(X.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&ne(I)}function ue(I){let b=I.texture,H=n.get(I),X=n.get(b);I.addEventListener("dispose",_);let Z=I.textures,fe=I.isWebGLCubeRenderTarget===!0,me=Z.length>1;if(me||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=b.version,a.memory.textures++),fe){H.__webglFramebuffer=[];for(let J=0;J<6;J++)if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[J]=[];for(let ee=0;ee<b.mipmaps.length;ee++)H.__webglFramebuffer[J][ee]=i.createFramebuffer()}else H.__webglFramebuffer[J]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let J=0;J<b.mipmaps.length;J++)H.__webglFramebuffer[J]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(me)for(let J=0,ee=Z.length;J<ee;J++){let ye=n.get(Z[J]);ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&et(I)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){let ee=Z[J];H.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[J]);let ye=r.convert(ee.format,ee.colorSpace),ze=r.convert(ee.type),Me=x(ee.internalFormat,ye,ze,ee.normalized,ee.colorSpace,I.isXRRenderTarget===!0),_e=$e(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,Me,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,H.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Je(H.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(fe){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),lt(i.TEXTURE_CUBE_MAP,b);for(let J=0;J<6;J++)if(b.mipmaps&&b.mipmaps.length>0)for(let ee=0;ee<b.mipmaps.length;ee++)Ie(H.__webglFramebuffer[J][ee],I,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ee);else Ie(H.__webglFramebuffer[J],I,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);f(b)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let J=0,ee=Z.length;J<ee;J++){let ye=Z[J],ze=n.get(ye),Me=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Me=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,ze.__webglTexture),lt(Me,ye),Ie(H.__webglFramebuffer,I,ye,i.COLOR_ATTACHMENT0+J,Me,0),f(ye)&&y(Me)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(J=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,X.__webglTexture),lt(J,b),b.mipmaps&&b.mipmaps.length>0)for(let ee=0;ee<b.mipmaps.length;ee++)Ie(H.__webglFramebuffer[ee],I,b,i.COLOR_ATTACHMENT0,J,ee);else Ie(H.__webglFramebuffer,I,b,i.COLOR_ATTACHMENT0,J,0);f(b)&&y(J),t.unbindTexture()}I.depthBuffer&&ne(I)}function de(I){let b=I.textures;for(let H=0,X=b.length;H<X;H++){let Z=b[H];if(f(Z)){let fe=v(I),me=n.get(Z).__webglTexture;t.bindTexture(fe,me),y(fe),t.unbindTexture()}}}let ge=[],Xe=[];function Ve(I){if(I.samples>0){if(et(I)===!1){let b=I.textures,H=I.width,X=I.height,Z=i.COLOR_BUFFER_BIT,fe=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=n.get(I),J=b.length>1;if(J)for(let ye=0;ye<b.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);let ee=I.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let ye=0;ye<b.length;ye++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,me.__webglColorRenderbuffer[ye]);let ze=n.get(b[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ze,0)}i.blitFramebuffer(0,0,H,X,0,0,H,X,Z,i.NEAREST),l===!0&&(ge.length=0,Xe.length=0,ge.push(i.COLOR_ATTACHMENT0+ye),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(ge.push(fe),Xe.push(fe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Xe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let ye=0;ye<b.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,me.__webglColorRenderbuffer[ye]);let ze=n.get(b[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let b=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function $e(I){return Math.min(s.maxSamples,I.samples)}function et(I){let b=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function U(I){let b=a.render.frame;h.get(I)!==b&&(h.set(I,b),I.update())}function St(I,b){let H=I.colorSpace,X=I.format,Z=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||H!==na&&H!==Fi&&(dt.getTransfer(H)===wt?(X!==Wn||Z!==Cn)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",H)),b}function ct(I){return typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame!="undefined"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=B,this.getTextureUnits=R,this.setTextureUnits=L,this.setTexture2D=j,this.setTexture2DArray=G,this.setTexture3D=Y,this.setTextureCube=K,this.rebindTextures=le,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=et,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function a1(i,e){function t(n,s=Fi){let r,a=dt.getTransfer(s);if(n===Cn)return i.UNSIGNED_BYTE;if(n===Fl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ol)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ou)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===lu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ru)return i.BYTE;if(n===au)return i.SHORT;if(n===Er)return i.UNSIGNED_SHORT;if(n===Ul)return i.INT;if(n===si)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===ri)return i.HALF_FLOAT;if(n===cu)return i.ALPHA;if(n===hu)return i.RGB;if(n===Wn)return i.RGBA;if(n===fi)return i.DEPTH_COMPONENT;if(n===os)return i.DEPTH_STENCIL;if(n===wr)return i.RED;if(n===Bl)return i.RED_INTEGER;if(n===ls)return i.RG;if(n===zl)return i.RG_INTEGER;if(n===kl)return i.RGBA_INTEGER;if(n===Oa||n===Ba||n===za||n===ka)if(a===wt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ka)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Hl||n===Gl||n===Vl||n===Wl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Hl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Gl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xl||n===ql||n===Yl||n===Zl||n===Jl||n===Ha||n===$l)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xl||n===ql)return a===wt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Zl)return r.COMPRESSED_R11_EAC;if(n===Jl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ha)return r.COMPRESSED_RG11_EAC;if(n===$l)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===jl||n===Kl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===ac||n===oc||n===lc||n===cc||n===hc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===jl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Kl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ql)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ec)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tc)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nc)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ic)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sc)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rc)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ac)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oc)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lc)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cc)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hc)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===uc||n===dc||n===fc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===uc)return a===wt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pc||n===mc||n===Ga||n===gc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===pc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===mc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ga)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var o1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l1=`
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

}`,Fu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ga(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new bn({vertexShader:o1,fragmentShader:l1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new oe(new ni(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ou=class extends pi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null,M=typeof XRWebGLBinding!="undefined",m=new Fu,f={},y=t.getContextAttributes(),v=null,x=null,S=[],E=[],A=new he,_=null,w=null,C=new cn;C.viewport=new kt;let P=new cn;P.viewport=new kt;let N=[C,P],B=new Rl,R=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let te=S[$];return te===void 0&&(te=new fr,S[$]=te),te.getTargetRaySpace()},this.getControllerGrip=function($){let te=S[$];return te===void 0&&(te=new fr,S[$]=te),te.getGripSpace()},this.getHand=function($){let te=S[$];return te===void 0&&(te=new fr,S[$]=te),te.getHandSpace()};function O($){let te=E.indexOf($.inputSource);if(te===-1)return;let Ee=S[te];Ee!==void 0&&(Ee.update($.inputSource,$.frame,c||a),Ee.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",j);for(let $=0;$<S.length;$++){let te=E[$];te!==null&&(E[$]=null,S[$].disconnect(te))}R=null,L=null,m.reset();for(let $ in f)delete f[$];if(e.setRenderTarget(v),p=null,u=null,d=null,s=null,x=null,mt.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(A.width,A.height,!1),w!==null){let $=w.camera;$.fov=w.fov,$.zoom=w.zoom,$.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",k),s.addEventListener("inputsourceschange",j),y.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(A),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Ze=null,Ie=null;y.depth&&(Ie=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=y.stencil?os:fi,Ze=y.stencil?Tr:si);let Je={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Je),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new wn(u.textureWidth,u.textureHeight,{format:Wn,type:Cn,depthTexture:new Qi(u.textureWidth,u.textureHeight,Ze,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Ee={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new wn(p.framebufferWidth,p.framebufferHeight,{format:Wn,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),mt.setContext(s),mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j($){for(let te=0;te<$.removed.length;te++){let Ee=$.removed[te],Ze=E.indexOf(Ee);Ze>=0&&(E[Ze]=null,S[Ze].disconnect(Ee))}for(let te=0;te<$.added.length;te++){let Ee=$.added[te],Ze=E.indexOf(Ee);if(Ze===-1){for(let Je=0;Je<S.length;Je++)if(Je>=E.length){E.push(Ee),Ze=Je;break}else if(E[Je]===null){E[Je]=Ee,Ze=Je;break}if(Ze===-1)break}let Ie=S[Ze];Ie&&Ie.connect(Ee)}}let G=new D,Y=new D;function K($,te,Ee){G.setFromMatrixPosition(te.matrixWorld),Y.setFromMatrixPosition(Ee.matrixWorld);let Ze=G.distanceTo(Y),Ie=te.projectionMatrix.elements,Je=Ee.projectionMatrix.elements,Rt=Ie[14]/(Ie[10]-1),ne=Ie[14]/(Ie[10]+1),le=(Ie[9]+1)/Ie[5],ue=(Ie[9]-1)/Ie[5],de=(Ie[8]-1)/Ie[0],ge=(Je[8]+1)/Je[0],Xe=Rt*de,Ve=Rt*ge,$e=Ze/(-de+ge),et=$e*-de;if(te.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(et),$.translateZ($e),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ie[10]===-1)$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let U=Rt+$e,St=ne+$e,ct=Xe-et,I=Ve+(Ze-et),b=le*ne/St*U,H=ue*ne/St*U;$.projectionMatrix.makePerspective(ct,I,b,H,U,St),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Le($,te){te===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(te.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let te=$.near,Ee=$.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(Ee=m.depthFar)),B.near=P.near=C.near=te,B.far=P.far=C.far=Ee,(R!==B.near||L!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),R=B.near,L=B.far),B.layers.mask=$.layers.mask|6,C.layers.mask=B.layers.mask&-5,P.layers.mask=B.layers.mask&-3;let Ze=$.parent,Ie=B.cameras;Le(B,Ze);for(let Je=0;Je<Ie.length;Je++)Le(Ie[Je],Ze);Ie.length===2?K(B,C,P):B.projectionMatrix.copy(C.projectionMatrix),w===null&&$.isPerspectiveCamera&&(w={camera:$,fov:$.fov,zoom:$.zoom}),Ce($,B,Ze)};function Ce($,te,Ee){Ee===null?$.matrix.copy(te.matrixWorld):($.matrix.copy(Ee.matrixWorld),$.matrix.invert(),$.matrix.multiply(te.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Qo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function($){return f[$]};let vt=null;function lt($,te){if(h=te.getViewerPose(c||a),g=te,h!==null){let Ee=h.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let Ze=!1;Ee.length!==B.cameras.length&&(B.cameras.length=0,Ze=!0);for(let ne=0;ne<Ee.length;ne++){let le=Ee[ne],ue=null;if(p!==null)ue=p.getViewport(le);else{let ge=d.getViewSubImage(u,le);ue=ge.viewport,ne===0&&(e.setRenderTargetTextures(x,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(x))}let de=N[ne];de===void 0&&(de=new cn,de.layers.enable(ne),de.viewport=new kt,N[ne]=de),de.matrix.fromArray(le.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(le.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(ue.x,ue.y,ue.width,ue.height),ne===0&&(B.matrix.copy(de.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ze===!0&&B.cameras.push(de)}let Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=n.getBinding();let ne=d.getDepthInformation(Ee[0]);ne&&ne.isValid&&ne.texture&&m.init(ne,s.renderState)}if(Ie&&Ie.includes("camera-access")&&M){e.state.unbindTexture(),d=n.getBinding();for(let ne=0;ne<Ee.length;ne++){let le=Ee[ne].camera;if(le){let ue=f[le];ue||(ue=new ga,f[le]=ue);let de=d.getCameraImage(le);ue.sourceTexture=de}}}}for(let Ee=0;Ee<S.length;Ee++){let Ze=E[Ee],Ie=S[Ee];Ze!==null&&Ie!==void 0&&Ie.update(Ze,te,c||a)}vt&&vt($,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}let mt=new Wp;mt.setAnimationLoop(lt),this.setAnimationLoop=function($){vt=$},this.dispose=function(){}}},c1=new pt,$p=new Qe;$p.set(-1,0,0,0,1,0,0,0,1);function h1(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,pu(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,y,v,x){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),M(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===un&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===un&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let y=e.get(f),v=y.envMap,x=y.envMapRotation;v&&(m.envMap.value=v,m.envMapRotation.value.setFromMatrix4(c1.makeRotationFromEuler(x)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply($p),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===un&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){let y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function u1(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){let E=S.program;n.uniformBlockBinding(x,E)}function c(x,S){let E=s[x.id];E===void 0&&(m(x),E=h(x),s[x.id]=E,x.addEventListener("dispose",y));let A=S.program;n.updateUBOMapping(x,A);let _=e.render.frame;r[x.id]!==_&&(u(x),r[x.id]=_)}function h(x){let S=d();x.__bindingPointIndex=S;let E=i.createBuffer(),A=x.__size,_=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,A,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,E),E}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let S=s[x.id],E=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let _=0,w=E.length;_<w;_++){let C=E[_];if(Array.isArray(C))for(let P=0,N=C.length;P<N;P++)p(C[P],_,P,A);else p(C,_,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,S,E,A){if(M(x,S,E,A)===!0){let _=x.__offset,w=x.value;if(Array.isArray(w)){let C=0;for(let P=0;P<w.length;P++){let N=w[P],B=f(N);g(N,x.__data,C),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(C+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,x.__data)}}function g(x,S,E){typeof x=="number"||typeof x=="boolean"?S[0]=x:x.isMatrix3?(S[0]=x.elements[0],S[1]=x.elements[1],S[2]=x.elements[2],S[3]=0,S[4]=x.elements[3],S[5]=x.elements[4],S[6]=x.elements[5],S[7]=0,S[8]=x.elements[6],S[9]=x.elements[7],S[10]=x.elements[8],S[11]=0):ArrayBuffer.isView(x)?S.set(new x.constructor(x.buffer,x.byteOffset,S.length)):x.toArray(S,E)}function M(x,S,E,A){let _=x.value,w=S+"_"+E;if(A[w]===void 0)return typeof _=="number"||typeof _=="boolean"?A[w]=_:ArrayBuffer.isView(_)?A[w]=_.slice():A[w]=_.clone(),!0;{let C=A[w];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return A[w]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function m(x){let S=x.uniforms,E=0,A=16;for(let w=0,C=S.length;w<C;w++){let P=Array.isArray(S[w])?S[w]:[S[w]];for(let N=0,B=P.length;N<B;N++){let R=P[N],L=Array.isArray(R.value)?R.value:[R.value];for(let O=0,k=L.length;O<k;O++){let j=L[O],G=f(j),Y=E%A,K=Y%G.boundary,Le=Y+K;E+=K,Le!==0&&A-Le<G.storage&&(E+=A-Le),R.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=E,E+=G.storage}}}let _=E%A;return _>0&&(E+=A-_),x.__size=E,x.__cache={},this}function f(x){let S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):We("WebGLRenderer: Unsupported uniform value type.",x),S}function y(x){let S=x.target;S.removeEventListener("dispose",y);let E=a.indexOf(S.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function v(){for(let x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:v}}var d1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),_i=null;function f1(){return _i===null&&(_i=new vs(d1,16,16,ls,ri),_i.name="DFG_LUT",_i.minFilter=hn,_i.magFilter=hn,_i.wrapS=ui,_i.wrapT=ui,_i.generateMipmaps=!1,_i.needsUpdate=!0),_i}var Sc=class{constructor(e={}){let{canvas:t=hp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Cn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let M=p,m=new Set([kl,zl,Bl]),f=new Set([Cn,si,Er,Tr,Fl,Ol]),y=new Uint32Array(4),v=new Int32Array(4),x=new D,S=null,E=null,A=[],_=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,P=!1,N=null,B=null,R=null,L=null;this._outputColorSpace=nn;let O=0,k=0,j=null,G=-1,Y=null,K=new kt,Le=new kt,Ce=null,vt=new Be(0),lt=0,mt=t.width,$=t.height,te=1,Ee=null,Ze=null,Ie=new kt(0,0,mt,$),Je=new kt(0,0,mt,$),Rt=!1,ne=new mr,le=!1,ue=!1,de=new pt,ge=new D,Xe=new kt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$e=!1;function et(){return j===null?te:1}let U=n;function St(T,F){return t.getContext(T,F)}let ct,I,b,H,X,Z,fe,me,J,ee,ye,ze,Me,_e,ke,qe,st,z,ve,Q,be,Re,ae;try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Bt,!1),t.addEventListener("webglcontextrestored",Et,!1),t.addEventListener("webglcontextcreationerror",Jn,!1),U===null){let F="webgl2";if(U=St(F,T),U===null)throw St(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}He()}catch(T){throw t.removeEventListener("webglcontextlost",Bt,!1),t.removeEventListener("webglcontextrestored",Et,!1),t.removeEventListener("webglcontextcreationerror",Jn,!1),Ye("WebGLRenderer: "+T.message),T}function He(){ct=new vv(U),ct.init(),be=new a1(U,ct),I=new hv(U,ct,e,be),b=new s1(U,ct),I.reversedDepthBuffer&&u&&b.buffers.depth.setReversed(!0),B=U.createFramebuffer(),R=U.createFramebuffer(),L=U.createFramebuffer(),H=new Sv(U),X=new Wb,Z=new r1(U,ct,b,X,I,be,H),fe=new _v(C),me=new Tx(U),Re=new lv(U,me),J=new bv(U,me,H,Re),ee=new Tv(U,J,me,Re,H),z=new Ev(U,I,Z),ke=new uv(X),ye=new Vb(C,fe,ct,I,Re,ke),ze=new h1(C,X),Me=new qb,_e=new Kb(ct),st=new ov(C,fe,b,ee,g,l),qe=new i1(C,ee,I),ae=new u1(U,H,I,b),ve=new cv(U,ct,H),Q=new Mv(U,ct,H),H.programs=ye.programs,C.capabilities=I,C.extensions=ct,C.properties=X,C.renderLists=Me,C.shadowMap=qe,C.state=b,C.info=H}M!==Cn&&(w=new Av(M,t.width,t.height,o,s,r));let Fe=new Ou(C,U);this.xr=Fe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let T=ct.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ct.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(T){T!==void 0&&(te=T,this.setSize(mt,$,!1))},this.getSize=function(T){return T.set(mt,$)},this.setSize=function(T,F,q=!0){if(Fe.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}mt=T,$=F,t.width=Math.floor(T*te),t.height=Math.floor(F*te),q===!0&&(t.style.width=T+"px",t.style.height=F+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(mt*te,$*te).floor()},this.setDrawingBufferSize=function(T,F,q){mt=T,$=F,te=q,t.width=Math.floor(T*q),t.height=Math.floor(F*q),this.setViewport(0,0,T,F)},this.setEffects=function(T){if(M===Cn){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let F=0;F<T.length;F++)if(T[F].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(K)},this.getViewport=function(T){return T.copy(Ie)},this.setViewport=function(T,F,q,V){T.isVector4?Ie.set(T.x,T.y,T.z,T.w):Ie.set(T,F,q,V),b.viewport(K.copy(Ie).multiplyScalar(te).round())},this.getScissor=function(T){return T.copy(Je)},this.setScissor=function(T,F,q,V){T.isVector4?Je.set(T.x,T.y,T.z,T.w):Je.set(T,F,q,V),b.scissor(Le.copy(Je).multiplyScalar(te).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(T){b.setScissorTest(Rt=T)},this.setOpaqueSort=function(T){Ee=T},this.setTransparentSort=function(T){Ze=T},this.getClearColor=function(T){return T.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,q=!0){let V=0;if(T){let W=!1;if(j!==null){let Ae=j.texture.format;W=m.has(Ae)}if(W){let Ae=j.texture.type,De=f.has(Ae),Te=st.getClearColor(),Ne=st.getClearAlpha(),Oe=Te.r,ot=Te.g,ht=Te.b;De?(y[0]=Oe,y[1]=ot,y[2]=ht,y[3]=Ne,U.clearBufferuiv(U.COLOR,0,y)):(v[0]=Oe,v[1]=ot,v[2]=ht,v[3]=Ne,U.clearBufferiv(U.COLOR,0,v))}else V|=U.COLOR_BUFFER_BIT}F&&(V|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),N=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Bt,!1),t.removeEventListener("webglcontextrestored",Et,!1),t.removeEventListener("webglcontextcreationerror",Jn,!1),st.dispose(),Me.dispose(),_e.dispose(),X.dispose(),fe.dispose(),ee.dispose(),Re.dispose(),ae.dispose(),ye.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",Od),Fe.removeEventListener("sessionend",Bd),fs.stop()};function Bt(T){T.preventDefault(),ra("WebGLRenderer: Context Lost."),P=!0}function Et(){ra("WebGLRenderer: Context Restored."),P=!1;let T=H.autoReset,F=qe.enabled,q=qe.autoUpdate,V=qe.needsUpdate,W=qe.type;He(),H.autoReset=T,qe.enabled=F,qe.autoUpdate=q,qe.needsUpdate=V,qe.type=W}function Jn(T){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function oi(T){let F=T.target;F.removeEventListener("dispose",oi),lg(F)}function lg(T){cg(T),X.remove(T)}function cg(T){let F=X.get(T).programs;F!==void 0&&(F.forEach(function(q){ye.releaseProgram(q)}),T.isShaderMaterial&&ye.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,q,V,W,Ae){F===null&&(F=Ve);let De=W.isMesh&&W.matrixWorld.determinantAffine()<0,Te=dg(T,F,q,V,W);b.setMaterial(V,De);let Ne=q.index,Oe=1;if(V.wireframe===!0){if(Ne=J.getWireframeAttribute(q),Ne===void 0)return;Oe=2}let ot=q.drawRange,ht=q.attributes.position,Ue=ot.start*Oe,Tt=(ot.start+ot.count)*Oe;Ae!==null&&(Ue=Math.max(Ue,Ae.start*Oe),Tt=Math.min(Tt,(Ae.start+Ae.count)*Oe)),Ne!==null?(Ue=Math.max(Ue,0),Tt=Math.min(Tt,Ne.count)):ht!=null&&(Ue=Math.max(Ue,0),Tt=Math.min(Tt,ht.count));let $t=Tt-Ue;if($t<0||$t===1/0)return;Re.setup(W,V,Te,q,Ne);let Gt,Ut=ve;if(Ne!==null&&(Gt=me.get(Ne),Ut=Q,Ut.setIndex(Gt)),W.isMesh)V.wireframe===!0?(b.setLineWidth(V.wireframeLinewidth*et()),Ut.setMode(U.LINES)):Ut.setMode(U.TRIANGLES);else if(W.isLine){let dn=V.linewidth;dn===void 0&&(dn=1),b.setLineWidth(dn*et()),W.isLineSegments?Ut.setMode(U.LINES):W.isLineLoop?Ut.setMode(U.LINE_LOOP):Ut.setMode(U.LINE_STRIP)}else W.isPoints?Ut.setMode(U.POINTS):W.isSprite&&Ut.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(ct.get("WEBGL_multi_draw"))Ut.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let dn=W._multiDrawStarts,Pe=W._multiDrawCounts,yn=W._multiDrawCount,gt=Ne?me.get(Ne).bytesPerElement:1,kn=X.get(V).currentProgram.getUniforms();for(let li=0;li<yn;li++)kn.setValue(U,"_gl_DrawID",li),Ut.render(dn[li]/gt,Pe[li])}else if(W.isInstancedMesh)Ut.renderInstances(Ue,$t,W.count);else if(q.isInstancedBufferGeometry){let dn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Pe=Math.min(q.instanceCount,dn);Ut.renderInstances(Ue,$t,Pe)}else Ut.render(Ue,$t)};function Fd(T,F,q,V){N!==null&&T.isNodeMaterial&&N.setObject(V,T),le===!0&&ke.setState(T,q,!1),T.transparent===!0&&T.side===mn&&T.forceSinglePass===!1?(T.side=un,T.needsUpdate=!0,uo(T,F,V),T.side=is,T.needsUpdate=!0,uo(T,F,V),T.side=mn):uo(T,F,V)}this.compile=function(T,F,q=null){q===null&&(q=T),N!==null&&N.renderStart(T,F,q),E=_e.get(q),E.init(F),_.push(E),q.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),T!==q&&T.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),E.setupLights(),N!==null&&N.updateLights(E.state.lightsArray),ue=this.localClippingEnabled,le=ke.init(this.clippingPlanes,ue),le===!0&&ke.setGlobalState(this.clippingPlanes,F),N!==null&&qe.render(E.state.shadowsArray,q,F);let V=new Set;return T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Ae=W.material;if(Ae)if(Array.isArray(Ae))for(let De=0;De<Ae.length;De++){let Te=Ae[De];Fd(Te,q,F,W),V.add(Te)}else Fd(Ae,q,F,W),V.add(Ae)}),E=_.pop(),N!==null&&N.renderEnd(),V},this.compileAsync=function(T,F,q=null){let V=this.compile(T,F,q);return new Promise(W=>{function Ae(){if(V.forEach(function(De){let Ne=X.get(De).currentProgram;(Ne===void 0||Ne.isReady())&&V.delete(De)}),V.size===0){W(T);return}setTimeout(Ae,10)}ct.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let nh=null;function hg(T){nh&&nh(T)}function Od(){fs.stop()}function Bd(){fs.start()}let fs=new Wp;fs.setAnimationLoop(hg),typeof self!="undefined"&&fs.setContext(self),this.setAnimationLoop=function(T){nh=T,Fe.setAnimationLoop(T),T===null?fs.stop():fs.start()},Fe.addEventListener("sessionstart",Od),Fe.addEventListener("sessionend",Bd),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;N!==null&&N.renderStart(T,F);let q=Fe.enabled===!0&&Fe.isPresenting===!0,V=w!==null&&(j===null||q)&&w.begin(C,j);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(F),F=Fe.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,F,j),E=_e.get(T,_.length),E.init(F),E.state.textureUnits=Z.getTextureUnits(),_.push(E),de.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ne.setFromProjectionMatrix(de,ei,F.reversedDepth),ue=this.localClippingEnabled,le=ke.init(this.clippingPlanes,ue),S=Me.get(T,A.length),S.init(),A.push(S),Fe.enabled===!0&&Fe.isPresenting===!0){let De=C.xr.getDepthSensingMesh();De!==null&&ih(De,F,-1/0,C.sortObjects)}ih(T,F,0,C.sortObjects),S.finish(),N!==null&&N.updateLights(E.state.lightsArray),C.sortObjects===!0&&S.sort(Ee,Ze),$e=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,$e&&st.addToRenderList(S,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),le===!0&&ke.beginShadows();let W=E.state.shadowsArray;if(qe.render(W,T,F),le===!0&&ke.endShadows(),(V&&w.hasRenderPass())===!1){let De=S.opaque,Te=S.transmissive;if(E.setupLights(),F.isArrayCamera){let Ne=F.cameras;if(Te.length>0)for(let Oe=0,ot=Ne.length;Oe<ot;Oe++){let ht=Ne[Oe];kd(De,Te,T,ht)}$e&&st.render(T);for(let Oe=0,ot=Ne.length;Oe<ot;Oe++){let ht=Ne[Oe];zd(S,T,ht,ht.viewport)}}else Te.length>0&&kd(De,Te,T,F),$e&&st.render(T),zd(S,T,F)}j!==null&&k===0&&(Z.updateMultisampleRenderTarget(j),Z.updateRenderTargetMipmap(j)),V&&w.end(C),T.isScene===!0&&T.onAfterRender(C,T,F),Re.resetDefaultState(),G=-1,Y=null,_.pop(),_.length>0?(E=_[_.length-1],Z.setTextureUnits(E.state.textureUnits),le===!0&&ke.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,N!==null&&N.renderEnd()};function ih(T,F,q,V){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLightProbeGrid)E.pushLightProbeGrid(T);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(ne)){V&&Xe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(de);let De=ee.update(T),Te=T.material;Te.visible&&S.push(T,De,Te,q,Xe.z,null,F)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(ne))){let De=ee.update(T),Te=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Xe.copy(T.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Xe.copy(De.boundingSphere.center)),Xe.applyMatrix4(T.matrixWorld).applyMatrix4(de)),Array.isArray(Te)){let Ne=De.groups;for(let Oe=0,ot=Ne.length;Oe<ot;Oe++){let ht=Ne[Oe],Ue=Te[ht.materialIndex];Ue&&Ue.visible&&S.push(T,De,Ue,q,Xe.z,ht,F)}}else Te.visible&&S.push(T,De,Te,q,Xe.z,null,F)}}let Ae=T.children;for(let De=0,Te=Ae.length;De<Te;De++)ih(Ae[De],F,q,V)}function zd(T,F,q,V){let{opaque:W,transmissive:Ae,transparent:De}=T;E.setupLightsView(q),le===!0&&ke.setGlobalState(C.clippingPlanes,q),V&&b.viewport(K.copy(V)),W.length>0&&ho(W,F,q),Ae.length>0&&ho(Ae,F,q),De.length>0&&ho(De,F,q),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function kd(T,F,q,V){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){let Ue=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new wn(1,1,{generateMipmaps:!0,type:Ue?ri:Cn,minFilter:as,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let Ae=E.state.transmissionRenderTarget[V.id],De=V.viewport||K;Ae.setSize(De.z*C.transmissionResolutionScale,De.w*C.transmissionResolutionScale);let Te=C.getRenderTarget(),Ne=C.getActiveCubeFace(),Oe=C.getActiveMipmapLevel();C.setRenderTarget(Ae),C.getClearColor(vt),lt=C.getClearAlpha(),lt<1&&C.setClearColor(16777215,.5),C.clear(),$e&&st.render(q);let ot=C.toneMapping;C.toneMapping=ii;let ht=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),le===!0&&ke.setGlobalState(C.clippingPlanes,V),ho(T,q,V),Z.updateMultisampleRenderTarget(Ae),Z.updateRenderTargetMipmap(Ae),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Tt=0,$t=F.length;Tt<$t;Tt++){let Gt=F[Tt],{object:Ut,geometry:dn,material:Pe,group:yn}=Gt;if(Pe.side===mn&&Ut.layers.test(V.layers)){let gt=Pe.side;Pe.side=un,Pe.needsUpdate=!0,Hd(Ut,q,V,dn,Pe,yn),Pe.side=gt,Pe.needsUpdate=!0,Ue=!0}}Ue===!0&&(Z.updateMultisampleRenderTarget(Ae),Z.updateRenderTargetMipmap(Ae))}C.setRenderTarget(Te,Ne,Oe),C.setClearColor(vt,lt),ht!==void 0&&(V.viewport=ht),C.toneMapping=ot}function ho(T,F,q){let V=F.isScene===!0?F.overrideMaterial:null;for(let W=0,Ae=T.length;W<Ae;W++){let De=T[W],{object:Te,geometry:Ne,group:Oe}=De,ot=De.material;ot.allowOverride===!0&&V!==null&&(ot=V),Te.layers.test(q.layers)&&Hd(Te,F,q,Ne,ot,Oe)}}function Hd(T,F,q,V,W,Ae){N!==null&&W.isNodeMaterial&&N.setObject(T,W),T.onBeforeRender(C,F,q,V,W,Ae),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(C,F,q,V,T,Ae),W.transparent===!0&&W.side===mn&&W.forceSinglePass===!1?(W.side=un,W.needsUpdate=!0,C.renderBufferDirect(q,F,V,W,T,Ae),W.side=is,W.needsUpdate=!0,C.renderBufferDirect(q,F,V,W,T,Ae),W.side=mn):C.renderBufferDirect(q,F,V,W,T,Ae),T.onAfterRender(C,F,q,V,W,Ae)}function uo(T,F,q){F.isScene!==!0&&(F=Ve);let V=X.get(T),W=E.state.lights,Ae=E.state.shadowsArray,De=W.state.version,Te=ye.getParameters(T,W.state,Ae,F,q,E.state.lightProbeGridArray),Ne=ye.getProgramCacheKey(Te),Oe=V.programs;V.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;let ot=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;V.envMap=fe.get(T.envMap||V.environment,ot),V.envMapRotation=V.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Oe===void 0&&(T.addEventListener("dispose",oi),Oe=new Map,V.programs=Oe);let ht=Oe.get(Ne);if(ht!==void 0){if(V.currentProgram===ht&&V.lightsStateVersion===De)return Vd(T,Te),ht}else Te.uniforms=ye.getUniforms(T),N!==null&&T.isNodeMaterial&&N.build(T,q,Te),T.onBeforeCompile(Te,C),ht=ye.acquireProgram(Te,Ne),Oe.set(Ne,ht),V.uniforms=Te.uniforms;let Ue=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ue.clippingPlanes=ke.uniform),Vd(T,Te),V.needsLights=pg(T),V.lightsStateVersion=De,V.needsLights&&(Ue.ambientLightColor.value=W.state.ambient,Ue.lightProbe.value=W.state.probe,Ue.sunLights.value=W.state.sun,Ue.sunLightShadows.value=W.state.sunShadow,Ue.directionalLights.value=W.state.directional,Ue.directionalLightShadows.value=W.state.directionalShadow,Ue.spotLights.value=W.state.spot,Ue.spotLightShadows.value=W.state.spotShadow,Ue.rectAreaLights.value=W.state.rectArea,Ue.ltc_1.value=W.state.rectAreaLTC1,Ue.ltc_2.value=W.state.rectAreaLTC2,Ue.pointLights.value=W.state.point,Ue.pointLightShadows.value=W.state.pointShadow,Ue.hemisphereLights.value=W.state.hemi,Ue.sunShadowMatrix.value=W.state.sunShadowMatrix,Ue.sunShadowCascade.value=W.state.sunShadowCascade,Ue.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ue.spotLightMatrix.value=W.state.spotLightMatrix,Ue.spotLightMap.value=W.state.spotLightMap,Ue.pointShadowMatrix.value=W.state.pointShadowMatrix),V.lightProbeGrid=E.state.lightProbeGridArray.length>0,V.currentProgram=ht,V.uniformsList=null,ht}function Gd(T){if(T.uniformsList===null){let F=T.currentProgram.getUniforms();T.uniformsList=Cr.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function Vd(T,F){let q=X.get(T);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function ug(T,F){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;x.setFromMatrixPosition(F.matrixWorld);for(let q=0,V=T.length;q<V;q++){let W=T[q];if(W.texture!==null&&W.boundingBox.containsPoint(x))return W}return null}function dg(T,F,q,V,W){F.isScene!==!0&&(F=Ve),Z.resetTextureUnits();let Ae=F.fog,De=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,Te=j===null?C.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:dt.workingColorSpace,Ne=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Oe=fe.get(V.envMap||De,Ne),ot=V.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ht=!!q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ue=!!q.morphAttributes.position,Tt=!!q.morphAttributes.normal,$t=!!q.morphAttributes.color,Gt=ii;V.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Gt=C.toneMapping);let Ut=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,dn=Ut!==void 0?Ut.length:0,Pe=X.get(V),yn=E.state.lights;if(le===!0&&(ue===!0||T!==Y)){let zt=T===Y&&V.id===G;ke.setState(V,T,zt)}let gt=!1;V.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==yn.state.version||Pe.outputColorSpace!==Te||W.isBatchedMesh&&Pe.batching===!1||!W.isBatchedMesh&&Pe.batching===!0||W.isBatchedMesh&&Pe.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Pe.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Pe.instancing===!1||!W.isInstancedMesh&&Pe.instancing===!0||W.isSkinnedMesh&&Pe.skinning===!1||!W.isSkinnedMesh&&Pe.skinning===!0||W.isInstancedMesh&&Pe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Pe.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Pe.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Pe.instancingMorph===!1&&W.morphTexture!==null||Pe.envMap!==Oe||V.fog===!0&&Pe.fog!==Ae||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ke.numPlanes||Pe.numIntersection!==ke.numIntersection)||Pe.vertexAlphas!==ot||Pe.vertexTangents!==ht||Pe.morphTargets!==Ue||Pe.morphNormals!==Tt||Pe.morphColors!==$t||Pe.toneMapping!==Gt||Pe.morphTargetsCount!==dn||!!Pe.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(gt=!0):(gt=!0,Pe.__version=V.version);let kn=Pe.currentProgram;gt===!0&&(kn=uo(V,F,W),N&&V.isNodeMaterial&&N.onUpdateProgram(V,kn,Pe));let li=!1,Wi=!1,Hs=!1,Pt=kn.getUniforms(),Zt=Pe.uniforms;if(b.useProgram(kn.program)&&(li=!0,Wi=!0,Hs=!0),V.id!==G&&(G=V.id,Wi=!0),Pe.needsLights){let zt=ug(E.state.lightProbeGridArray,W);Pe.lightProbeGrid!==zt&&(Pe.lightProbeGrid=zt,Wi=!0)}if(li||Y!==T){b.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Pt.setValue(U,"projectionMatrix",T.projectionMatrix),Pt.setValue(U,"viewMatrix",T.matrixWorldInverse);let qi=Pt.map.cameraPosition;qi!==void 0&&qi.setValue(U,ge.setFromMatrixPosition(T.matrixWorld)),I.logarithmicDepthBuffer&&Pt.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Pt.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),Y!==T&&(Y=T,Wi=!0,Hs=!0)}if(Pe.needsLights&&(yn.state.sunShadowMap.length>0&&Pt.setValue(U,"sunShadowMap",yn.state.sunShadowMap,Z),yn.state.directionalShadowMap.length>0&&Pt.setValue(U,"directionalShadowMap",yn.state.directionalShadowMap,Z),yn.state.spotShadowMap.length>0&&Pt.setValue(U,"spotShadowMap",yn.state.spotShadowMap,Z),yn.state.pointShadowMap.length>0&&Pt.setValue(U,"pointShadowMap",yn.state.pointShadowMap,Z)),W.isSkinnedMesh){Pt.setOptional(U,W,"bindMatrix"),Pt.setOptional(U,W,"bindMatrixInverse");let zt=W.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),Pt.setValue(U,"boneTexture",zt.boneTexture,Z))}W.isBatchedMesh&&(Pt.setOptional(U,W,"batchingTexture"),Pt.setValue(U,"batchingTexture",W._matricesTexture,Z),Pt.setOptional(U,W,"batchingIdTexture"),Pt.setValue(U,"batchingIdTexture",W._indirectTexture,Z),Pt.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&Pt.setValue(U,"batchingColorTexture",W._colorsTexture,Z));let Xi=q.morphAttributes;if((Xi.position!==void 0||Xi.normal!==void 0||Xi.color!==void 0)&&z.update(W,q,kn),(Wi||Pe.receiveShadow!==W.receiveShadow)&&(Pe.receiveShadow=W.receiveShadow,Pt.setValue(U,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(Zt.envMapIntensity.value=F.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=f1()),Wi){if(Pt.setValue(U,"toneMappingExposure",C.toneMappingExposure),Pe.needsLights&&fg(Zt,Hs),Ae&&V.fog===!0&&ze.refreshFogUniforms(Zt,Ae),ze.refreshMaterialUniforms(Zt,V,te,$,E.state.transmissionRenderTarget[T.id]),Pe.needsLights&&Pe.lightProbeGrid){let zt=Pe.lightProbeGrid;Zt.probesSH.value=zt.texture,Zt.probesMin.value.copy(zt.boundingBox.min),Zt.probesMax.value.copy(zt.boundingBox.max),Zt.probesResolution.value.copy(zt.resolution)}Cr.upload(U,Gd(Pe),Zt,Z)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Cr.upload(U,Gd(Pe),Zt,Z),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Pt.setValue(U,"center",W.center),Pt.setValue(U,"modelViewMatrix",W.modelViewMatrix),Pt.setValue(U,"normalMatrix",W.normalMatrix),Pt.setValue(U,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){let zt=V.uniformsGroups;for(let qi=0,Gs=zt.length;qi<Gs;qi++){let Xd=zt[qi];ae.update(Xd,kn),ae.bind(Xd,kn)}}return kn}function fg(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.sunLights.needsUpdate=F,T.sunLightShadows.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function pg(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(T,F,q){let V=X.get(T);V.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),X.get(T.texture).__webglTexture=F,X.get(T.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:q,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){let q=X.get(T);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,q=0){j=T,O=F,k=q;let V=null,W=!1,Ae=!1;if(T){let Te=X.get(T);if(Te.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(U.FRAMEBUFFER,Te.__webglFramebuffer),K.copy(T.viewport),Le.copy(T.scissor),Ce=T.scissorTest,b.viewport(K),b.scissor(Le),b.setScissorTest(Ce),G=-1;return}else if(Te.__webglFramebuffer===void 0)Z.setupRenderTarget(T);else if(Te.__hasExternalTextures)Z.rebindTextures(T,X.get(T.texture).__webglTexture,X.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let ot=T.depthTexture;if(Te.__boundDepthTexture!==ot){if(ot!==null&&X.has(ot)&&(T.width!==ot.image.width||T.height!==ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(T)}}let Ne=T.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Ae=!0);let Oe=X.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Oe[F])?V=Oe[F][q]:V=Oe[F],W=!0):T.samples>0&&Z.useMultisampledRTT(T)===!1?V=X.get(T).__webglMultisampledFramebuffer:Array.isArray(Oe)?V=Oe[q]:V=Oe,K.copy(T.viewport),Le.copy(T.scissor),Ce=T.scissorTest}else K.copy(Ie).multiplyScalar(te).floor(),Le.copy(Je).multiplyScalar(te).floor(),Ce=Rt;if(q!==0&&(V=B),b.bindFramebuffer(U.FRAMEBUFFER,V)&&b.drawBuffers(T,V),b.viewport(K),b.scissor(Le),b.setScissorTest(Ce),W){let Te=X.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,Te.__webglTexture,q)}else if(Ae){let Te=F;for(let Ne=0;Ne<T.textures.length;Ne++){let Oe=X.get(T.textures[Ne]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ne,Oe.__webglTexture,q,Te)}}else if(T!==null&&q!==0){let Te=X.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Te.__webglTexture,q)}G=-1};function Wd(T){let F=X.get(T);return(F.__readFormat!==T.format||F.__readType!==T.type)&&(F.__readFormat=T.format,F.__readType=T.type,F.__formatReadable=I.textureFormatReadable(T.format),F.__typeReadable=I.textureTypeReadable(T.type)),F}this.readRenderTargetPixels=function(T,F,q,V,W,Ae,De,Te=0){if(!(T&&T.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=X.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&De!==void 0&&(Ne=Ne[De]),Ne){b.bindFramebuffer(U.FRAMEBUFFER,Ne);try{let Oe=T.textures[Te],ot=Oe.format,ht=Oe.type;T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Te);let Ue=Wd(Oe);if(Ue.__formatReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ue.__typeReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-V&&q>=0&&q<=T.height-W&&U.readPixels(F,q,V,W,be.convert(ot),be.convert(ht),Ae)}finally{let Oe=j!==null?X.get(j).__webglFramebuffer:null;b.bindFramebuffer(U.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(T,F,q,V,W,Ae,De,Te=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=X.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&De!==void 0&&(Ne=Ne[De]),Ne)if(F>=0&&F<=T.width-V&&q>=0&&q<=T.height-W){b.bindFramebuffer(U.FRAMEBUFFER,Ne);let Oe=T.textures[Te],ot=Oe.format,ht=Oe.type;T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Te);let Ue=Wd(Oe);if(Ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Tt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Tt),U.bufferData(U.PIXEL_PACK_BUFFER,Ae.byteLength,U.STREAM_READ),U.readPixels(F,q,V,W,be.convert(ot),be.convert(ht),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let $t=j!==null?X.get(j).__webglFramebuffer:null;b.bindFramebuffer(U.FRAMEBUFFER,$t);let Gt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await dp(U,Gt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Tt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Ae),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Tt),U.deleteSync(Gt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,q=0){let V=Math.pow(2,-q),W=Math.floor(T.image.width*V),Ae=Math.floor(T.image.height*V),De=F!==null?F.x:0,Te=F!==null?F.y:0;Z.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,De,Te,W,Ae),b.unbindTexture()},this.copyTextureToTexture=function(T,F,q=null,V=null,W=0,Ae=0){let De,Te,Ne,Oe,ot,ht,Ue,Tt,$t,Gt=T.isCompressedTexture?T.mipmaps[Ae]:T.image;if(q!==null)De=q.max.x-q.min.x,Te=q.max.y-q.min.y,Ne=q.isBox3?q.max.z-q.min.z:1,Oe=q.min.x,ot=q.min.y,ht=q.isBox3?q.min.z:0;else{let Zt=Math.pow(2,-W);De=Math.floor(Gt.width*Zt),Te=Math.floor(Gt.height*Zt),T.isDataArrayTexture?Ne=Gt.depth:T.isData3DTexture?Ne=Math.floor(Gt.depth*Zt):Ne=1,Oe=0,ot=0,ht=0}V!==null?(Ue=V.x,Tt=V.y,$t=V.z):(Ue=0,Tt=0,$t=0);let Ut=be.convert(F.format),dn=be.convert(F.type),Pe;F.isData3DTexture?(Z.setTexture3D(F,0),Pe=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Z.setTexture2DArray(F,0),Pe=U.TEXTURE_2D_ARRAY):(Z.setTexture2D(F,0),Pe=U.TEXTURE_2D),b.activeTexture(U.TEXTURE0),b.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),b.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),b.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);let yn=b.getParameter(U.UNPACK_ROW_LENGTH),gt=b.getParameter(U.UNPACK_IMAGE_HEIGHT),kn=b.getParameter(U.UNPACK_SKIP_PIXELS),li=b.getParameter(U.UNPACK_SKIP_ROWS),Wi=b.getParameter(U.UNPACK_SKIP_IMAGES);b.pixelStorei(U.UNPACK_ROW_LENGTH,Gt.width),b.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Gt.height),b.pixelStorei(U.UNPACK_SKIP_PIXELS,Oe),b.pixelStorei(U.UNPACK_SKIP_ROWS,ot),b.pixelStorei(U.UNPACK_SKIP_IMAGES,ht);let Hs=T.isDataArrayTexture||T.isData3DTexture,Pt=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){let Zt=X.get(T),Xi=X.get(F),zt=X.get(Zt.__renderTarget),qi=X.get(Xi.__renderTarget);b.bindFramebuffer(U.READ_FRAMEBUFFER,zt.__webglFramebuffer),b.bindFramebuffer(U.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let Gs=0;Gs<Ne;Gs++)Hs&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,X.get(T).__webglTexture,W,ht+Gs),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,X.get(F).__webglTexture,Ae,$t+Gs)),U.blitFramebuffer(Oe,ot,De,Te,Ue,Tt,De,Te,U.DEPTH_BUFFER_BIT,U.NEAREST);b.bindFramebuffer(U.READ_FRAMEBUFFER,null),b.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(W!==0||T.isRenderTargetTexture||X.has(T)){let Zt=X.get(T),Xi=X.get(F);b.bindFramebuffer(U.READ_FRAMEBUFFER,R),b.bindFramebuffer(U.DRAW_FRAMEBUFFER,L);for(let zt=0;zt<Ne;zt++)Hs?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Zt.__webglTexture,W,ht+zt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Zt.__webglTexture,W),Pt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Xi.__webglTexture,Ae,$t+zt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Xi.__webglTexture,Ae),W!==0?U.blitFramebuffer(Oe,ot,De,Te,Ue,Tt,De,Te,U.COLOR_BUFFER_BIT,U.NEAREST):Pt?U.copyTexSubImage3D(Pe,Ae,Ue,Tt,$t+zt,Oe,ot,De,Te):U.copyTexSubImage2D(Pe,Ae,Ue,Tt,Oe,ot,De,Te);b.bindFramebuffer(U.READ_FRAMEBUFFER,null),b.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Pt?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(Pe,Ae,Ue,Tt,$t,De,Te,Ne,Ut,dn,Gt.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(Pe,Ae,Ue,Tt,$t,De,Te,Ne,Ut,Gt.data):U.texSubImage3D(Pe,Ae,Ue,Tt,$t,De,Te,Ne,Ut,dn,Gt):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Ae,Ue,Tt,De,Te,Ut,dn,Gt.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Ae,Ue,Tt,Gt.width,Gt.height,Ut,Gt.data):U.texSubImage2D(U.TEXTURE_2D,Ae,Ue,Tt,De,Te,Ut,dn,Gt);b.pixelStorei(U.UNPACK_ROW_LENGTH,yn),b.pixelStorei(U.UNPACK_IMAGE_HEIGHT,gt),b.pixelStorei(U.UNPACK_SKIP_PIXELS,kn),b.pixelStorei(U.UNPACK_SKIP_ROWS,li),b.pixelStorei(U.UNPACK_SKIP_IMAGES,Wi),Ae===0&&F.generateMipmaps&&U.generateMipmap(Pe),b.unbindTexture()},this.initRenderTarget=function(T){X.get(T).__webglFramebuffer===void 0&&Z.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Z.setTextureCube(T,0):T.isData3DTexture?Z.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Z.setTexture2DArray(T,0):Z.setTexture2D(T,0),b.unbindTexture()},this.resetState=function(){O=0,k=0,j=null,b.reset(),Re.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var Is={sunDir:{value:new D(0,1,0)},sunCol:{value:new D(1,.85,.6)},misc:{value:new kt(0,.08,0,0)}},Bu="gl_FragColor.rgb+=(fract(52.9829189*fract(dot(gl_FragCoord.xy,vec2(.06711056,.00583715))))-.5)/255.;",wc=at;wc.fog_pars_vertex=`#ifdef USE_FOG
varying float vFogDepth;varying vec3 vFogWP;
#endif`;wc.fog_vertex=`#ifdef USE_FOG
vFogDepth=-mvPosition.z;vFogWP=transpose(mat3(viewMatrix))*mvPosition.xyz;
#endif`;wc.fog_pars_fragment=`#ifdef USE_FOG
uniform vec3 fogColor;varying float vFogDepth;varying vec3 vFogWP;uniform vec3 fogSunDir;uniform vec3 fogSunCol;uniform vec4 fogMisc;
#ifdef FOG_EXP2
uniform float fogDensity;
#else
uniform float fogNear;uniform float fogFar;
#endif
#endif`;wc.fog_fragment=`#ifdef USE_FOG
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
${Bu}
#endif`;var jp=i=>{i.uniforms.fogSunDir=Is.sunDir,i.uniforms.fogSunCol=Is.sunCol,i.uniforms.fogMisc=Is.misc};Object.defineProperty(An.prototype,"onBeforeCompile",{configurable:!0,get(){return this._obc||jp},set(i){let e=(t,n)=>{jp(t),i(t,n)};e.toString=()=>i.toString()+"/*fogfx*/",this._obc=e}});(function(){if(window.PZ)return;let i=window.PZ={on:!1,ctx:()=>null,started:()=>!0},e=document.createElement("style");e.textContent="#pz{position:fixed;inset:0;z-index:30;display:grid;place-items:center;background:rgba(24,26,56,.64);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);color:#fbf1e0;font-family:system-ui,-apple-system,sans-serif;text-align:center;padding:20px}#pz[hidden]{display:none}#pz .c{display:flex;flex-direction:column;gap:12px;align-items:center}#pz h2{margin:0;font:600 1.7rem system-ui}#pz p{margin:0;color:#cbc8e8;line-height:1.5}#pz button{background:#ffc77a;color:#3b2a1a;border:0;border-radius:99px;padding:13px 32px;font:700 1rem system-ui;cursor:pointer}",document.head.appendChild(e);let t=document.createElement("div");t.id="pz",t.hidden=!0,t.innerHTML='<div class="c"><h2>En pausa</h2><p>Respira con calma.<br>Todo seguir\xE1 aqu\xED cuando vuelvas.</p><button type="button" id="pzGo">Continuar</button></div>';let n=()=>document.body.appendChild(t);document.body?n():addEventListener("DOMContentLoaded",n),i.set=function(s){if(s=!!s,s!==i.on&&!(s&&!i.started())){i.on=s,t.hidden=!s;try{let r=i.ctx();r&&(s?r.suspend():r.resume())}catch{}if(document.querySelectorAll("[data-pz]").forEach(r=>r.textContent=s?"Continuar":"Pausa"),s)try{document.activeElement&&document.activeElement.blur()}catch{}}},i.toggle=()=>i.set(!i.on),i.more=function(s,r,a){if(r=r.filter(Boolean),!s||!r.length)return;let o=document.createElement("style");o.textContent="#pzMore{position:fixed;z-index:25;display:flex;flex-direction:column;gap:6px;padding:8px;min-width:150px;background:rgba(43,45,82,.97);border:1px solid rgba(255,255,255,.22);border-radius:14px;box-shadow:0 10px 30px rgba(0,0,0,.4)}#pzMore[hidden]{display:none}#pzMore button{display:block;width:100%;text-align:left;background:rgba(255,255,255,.08);color:#fbf1e0;border:1px solid rgba(255,255,255,.18);border-radius:10px;padding:9px 12px;font:600 .88rem system-ui,sans-serif;cursor:pointer}",document.head.appendChild(o);let l=document.createElement("button");l.type="button",l.textContent=a||"M\xE1s",l.className=r[0].className||"",l.id="pzMoreB";let c=document.createElement("div");return c.id="pzMore",c.hidden=!0,r.forEach(h=>{h.removeAttribute("style"),c.appendChild(h)}),s.appendChild(l),document.body.appendChild(c),l.onclick=h=>{if(h.stopPropagation(),c.hidden=!c.hidden,!c.hidden){let d=l.getBoundingClientRect();c.style.top=d.bottom+6+"px",c.style.right=Math.max(8,innerWidth-d.right)+"px"}},document.addEventListener("click",h=>{!c.hidden&&!c.contains(h.target)&&h.target!==l&&(c.hidden=!0)}),addEventListener("resize",()=>{c.hidden=!0}),l},t.querySelector("#pzGo").onclick=()=>i.set(!1),document.addEventListener("keydown",s=>{s.code==="Escape"&&!document.body.classList.contains("photo")&&!document.querySelector(".xm")&&i.toggle()}),document.addEventListener("visibilitychange",()=>{document.hidden&&i.started()&&!i.on&&i.set(!0)}),document.addEventListener("click",s=>{s.target.closest&&s.target.closest("[data-pz]")&&i.toggle()})})();(function(){if(window.UX)return;let i=["es","en","ja"],e={es:"Espa\xF1ol",en:"English",ja:"\u65E5\u672C\u8A9E"},t={get(f,y){try{let v=localStorage.getItem(f);return v===null?y:v}catch{return y}},set(f,y){try{localStorage.setItem(f,y)}catch{}}},n=t.get("rio3d-lang","es");i.includes(n)||(n="es");let s=n==="en"?1:2,r=new Map,a=[],o=window.UX={lang:n,onLang:null,add(f){f.forEach(y=>r.set(y[0],y))},rx(f){f.forEach(y=>a.push(y))},tr(f){if(n==="es"||typeof f!="string")return f;let y=f.trim();if(!y)return f;let v=r.get(y);if(v)return f.replace(y,v[s]);for(let[x,S]of a){let E=y.match(x);if(E)return f.replace(y,S(E,n==="en"?1:2,o.tr))}return f},init(){if(n==="es")return;document.documentElement.lang=n;let f=y=>{if(y.nodeType===3){let S=o.tr(y.nodeValue);S!==y.nodeValue&&(y.nodeValue=S);return}if(y.nodeType!==1||y.tagName==="SCRIPT"||y.tagName==="STYLE")return;let v=y.getAttribute&&y.getAttribute("aria-label");if(v){let S=o.tr(v);S!==v&&y.setAttribute("aria-label",S)}let x=y.getAttribute&&y.getAttribute("title");if(x){let S=o.tr(x);S!==x&&y.setAttribute("title",S)}y.childNodes.forEach(f)};f(document.body),new MutationObserver(y=>{for(let v of y)v.type==="characterData"?f(v.target):v.addedNodes.forEach(f)}).observe(document.body,{childList:!0,subtree:!0,characterData:!0})},hap(f){if(t.get("rio3d-hap","1")!=="0")try{if(navigator.vibrate){navigator.vibrate(f);return}if(!o._sw){let y=document.createElement("label");y.style.cssText="position:fixed;left:-99px;top:0;opacity:0;pointer-events:none";let v=document.createElement("input");v.type="checkbox",v.setAttribute("switch",""),y.appendChild(v),document.body.appendChild(y),o._sw=y}o._sw.click()}catch{}},subsOn:()=>t.get("rio3d-subs","0")==="1",cap(f,y){if(!o.subsOn())return;let v=performance.now(),x=o._cl||(o._cl={});if(x[f]&&v-x[f]<(y||9e3))return;x[f]=v;let S=document.getElementById("uxcap");S||(S=document.createElement("div"),S.id="uxcap",S.setAttribute("aria-live","polite"),S.style.cssText="position:fixed;left:50%;top:max(58px,calc(env(safe-area-inset-top) + 50px));transform:translateX(-50%);background:rgba(20,22,48,.84);color:#fbf1e0;padding:6px 14px;border-radius:8px;font:600 .86rem system-ui,sans-serif;opacity:0;transition:opacity .4s;z-index:20;pointer-events:none;max-width:86%;text-align:center",document.body.appendChild(S)),S.textContent="["+o.tr(f)+"]",S.style.opacity=1,clearTimeout(o._ct),o._ct=setTimeout(()=>S.style.opacity=0,2600)},btns(f,y){y=y||{};let v=(k,j)=>{let G=document.createElement("button");return G.type="button",G.id=k,G.className=f||"",G.onclick=j,G},x=[],S=v("uxLang",()=>{let k=i[(i.indexOf(n)+1)%3];t.set("rio3d-lang",k);try{o.onLang&&o.onLang()}catch{}location.reload()});S.textContent=(n==="en"?"Language: ":n==="ja"?"\u8A00\u8A9E: ":"Idioma: ")+e[n],x.push(S);let E=v("uxSubs",()=>{t.set("rio3d-subs",o.subsOn()?"0":"1"),E.textContent=o.subsOn()?"Subt\xEDtulos: s\xED":"Subt\xEDtulos: no"});E.textContent=o.subsOn()?"Subt\xEDtulos: s\xED":"Subt\xEDtulos: no",x.push(E);let A=v("uxHap",()=>{let k=t.get("rio3d-hap","1")==="1";t.set("rio3d-hap",k?"0":"1"),A.textContent=k?"Vibraci\xF3n: no":"Vibraci\xF3n: s\xED",k||o.hap(15)});if(A.textContent=t.get("rio3d-hap","1")==="1"?"Vibraci\xF3n: s\xED":"Vibraci\xF3n: no",x.push(A),y.hand){let k={0:"Una mano: no",r:"Una mano: derecha",l:"Una mano: izquierda"},j=["0","r","l"],G=Le=>{document.body.classList.remove("hand-r","hand-l"),Le!=="0"&&document.body.classList.add("hand-"+Le)},Y=t.get("rio3d-hand","0");k[Y]||(Y="0"),G(Y);let K=v("uxHand",()=>{Y=j[(j.indexOf(Y)+1)%3],t.set("rio3d-hand",Y),G(Y),K.textContent=k[Y]});K.textContent=k[Y],x.push(K)}let _=v("uxVol",()=>{let k=["1",".7",".4"],j=k.indexOf(String(o.api.vol()).replace("0.","."));o.api.setVol(k[(j+1)%3]),_.textContent=w()}),w=()=>l("Volumen de este juego: ","Volume (this game): ","\u3053\u306E\u30B2\u30FC\u30E0\u306E\u97F3\u91CF: ")+Math.round(o.api.vol()*100)+" %";_.textContent=w(),x.push(_);let C=v("uxSoft",()=>{o.api.setSoft(!o.api.soft()),C.textContent=P()}),P=()=>o.api.soft()?l("Tono suave: s\xED","Soft tone: on","\u3084\u308F\u3089\u304B\u3044\u97F3: \u30AA\u30F3"):l("Tono suave: no","Soft tone: off","\u3084\u308F\u3089\u304B\u3044\u97F3: \u30AA\u30D5");C.textContent=P(),x.push(C);let N=v("uxSleep",()=>{let k=[0,15,30,45];o.api.sleep(k[(k.indexOf(o.api.sleepMin())+1)%4]),N.textContent=B()}),B=()=>o.api.sleepMin()?l("Dormir: ","Sleep: ","\u304A\u3084\u3059\u307F: ")+o.api.sleepMin()+" min":l("Dormir: no","Sleep: off","\u304A\u3084\u3059\u307F: \u30AA\u30D5");if(N.textContent=B(),o._sb=()=>{N.textContent=B()},x.push(N),y.wear){let k=v("uxWear",()=>{t.set("ux-wear",t.get("ux-wear","0")==="1"?"0":"1"),k.textContent=j()}),j=()=>t.get("ux-wear","0")==="1"?l("Desgaste por ausencia: s\xED","Wear while away: on","\u4E0D\u5728\u4E2D\u306E\u6C5A\u308C: \u30AA\u30F3"):l("Desgaste por ausencia: no","Wear while away: off","\u4E0D\u5728\u4E2D\u306E\u6C5A\u308C: \u30AA\u30D5");k.textContent=j(),x.push(k)}let R=v("uxCalm",()=>{o.setCalm(!o.calm()),R.textContent=L()}),L=()=>o.calm()?l("Menos movimiento y destellos: s\xED","Less motion and flashes: on","\u52D5\u304D\u3068\u5149\u3092\u63A7\u3048\u308B: \u30AA\u30F3"):l("Menos movimiento y destellos: no","Less motion and flashes: off","\u52D5\u304D\u3068\u5149\u3092\u63A7\u3048\u308B: \u30AA\u30D5");R.textContent=L(),x.push(R);let O=v("uxAbout",()=>o.about());return O.textContent=l("Acerca de","About","\u3053\u306E\u30B2\u30FC\u30E0\u306B\u3064\u3044\u3066"),x.push(O),x},ask(f,y){let v=document.createElement("div");v.style.cssText="position:fixed;inset:0;z-index:60;display:grid;place-items:center;background:rgba(20,22,48,.6);font:15px/1.4 system-ui,sans-serif";let x=document.createElement("div");x.style.cssText="background:#2b2d52;color:#fbf1e0;border:1px solid rgba(255,255,255,.2);border-radius:16px;padding:20px 22px;max-width:min(86vw,360px);text-align:center";let S=document.createElement("p");S.style.margin="0 0 14px",S.textContent=o.tr(f),x.appendChild(S);let E=(A,_)=>{let w=document.createElement("button");return w.type="button",w.textContent=A,w.style.cssText="margin:0 6px;padding:8px 16px;border-radius:10px;border:1px solid rgba(255,255,255,.3);background:rgba(255,255,255,.1);color:inherit;font:inherit;cursor:pointer",w.onclick=()=>{v.remove(),_&&_()},w};x.appendChild(E(l("Cancelar","Cancel","\u30AD\u30E3\u30F3\u30BB\u30EB"))),x.appendChild(E(l("S\xED, reiniciar","Yes, restart","\u306F\u3044\u3001\u6700\u521D\u304B\u3089"),y)),v.appendChild(x),document.body.appendChild(v)}},l=(f,y,v)=>n==="en"?y:n==="ja"?v:f,c=(()=>{let f=location.pathname.match(/\/(cabana3d|rio3d|cabana|rio)(\/|$)/);return f?f[1]:/caba/i.test(document.title)?"cabana":"rio"})(),h="ux-vol-"+c,d={vol:t.get(h,t.get("ux-vol","1")),soft:t.get("ux-soft","0")==="1",k:1,nodes:[],end:0,min:0,ov:null};o.quiet=!1;let u=()=>{for(let f of d.nodes)try{let y=f.c.currentTime;f.lp.frequency.setTargetAtTime(d.soft?2800:22e3,y,.1),f.g.gain.setTargetAtTime(+d.vol*d.k,y,.1)}catch{}};o.out=(f,y)=>{let v=f.createBiquadFilter();v.type="lowpass",v.frequency.value=d.soft?2800:22e3,v.Q.value=.5;let x=f.createGain();return x.gain.value=+d.vol*d.k,y.connect(v),v.connect(x),x.connect(f.destination),d.nodes.push({c:f,lp:v,g:x}),x},o.pinkSrc=(f,y)=>{let v=f._pink;if(!v){let E=f.sampleRate,A=Math.floor(E*12),_=Math.floor(E*1.5),w=A+_,C=new Float32Array(w),P=0,N=0,B=0,R=0,L=0,O=0,k=0;for(let G=0;G<w;G++){let Y=Math.random()*2-1;P=.99886*P+Y*.0555179,N=.99332*N+Y*.0750759,B=.969*B+Y*.153852,R=.8665*R+Y*.3104856,L=.55*L+Y*.5329522,O=-.7616*O-Y*.016898,C[G]=(P+N+B+R+L+O+k+Y*.5362)*.2215*.5,k=Y*.115926}v=f.createBuffer(1,A,E);let j=v.getChannelData(0);for(let G=0;G<A;G++)j[G]=C[G];for(let G=0;G<_;G++){let Y=G/_*Math.PI/2;j[G]=C[G]*Math.sin(Y)+C[A+G]*Math.cos(Y)}f._pink=v}let x=f.createBufferSource();x.buffer=v,x.loop=!0;let S=f.createGain();return S.gain.value=y||1,x.connect(S),S.start=(E,A)=>x.start(E||0,A||0),S.stop=E=>x.stop(E),S},o.api={soft:()=>d.soft,setSoft(f){d.soft=!!f,t.set("ux-soft",f?"1":"0"),u()},vol:()=>+d.vol,setVol(f){d.vol=String(f),t.set(h,d.vol),u()},sleepMin:()=>d.min,sleep(f){d.min=f,d.end=f?Date.now()+f*6e4:0,d.k=1,o.quiet=!1,d.ov&&(d.ov.style.opacity=0),u()}},setInterval(()=>{if(!d.end)return;let f=(d.end-Date.now())/1e3;if(!d.ov){let y=document.createElement("div");y.style.cssText="position:fixed;inset:0;z-index:29;pointer-events:none;background:#1a0d00;opacity:0;transition:opacity 1.2s",document.body.appendChild(y),d.ov=y}if(f<=0){d.end=0,d.min=0,d.k=0,u(),d.ov.style.opacity=.6;try{window.PZ&&PZ.set(!0)}catch{}setTimeout(()=>{d.k=1,o.quiet=!1,u(),d.ov.style.opacity=0,o._sb&&o._sb()},1500);return}f<300&&(o.quiet=!0,d.k=Math.pow(f/300,2),d.ov.style.opacity=(1-f/300)*.6,u())},1e3);{let f=0,y=1200;setInterval(()=>{if(!(document.hidden||window.PZ&&(PZ.on||!PZ.started()))&&(f+=5,f>=y)){y+=1800;let v=document.getElementById("uxrest");v||(v=document.createElement("div"),v.id="uxrest",v.setAttribute("aria-live","polite"),v.style.cssText="position:fixed;left:50%;bottom:max(70px,calc(env(safe-area-inset-bottom) + 60px));transform:translateX(-50%);max-width:min(88vw,420px);text-align:center;background:rgba(20,22,48,.88);color:#fbf1e0;padding:10px 16px;border-radius:14px;font:14px/1.4 system-ui,sans-serif;z-index:28;pointer-events:none;transition:opacity .8s;opacity:0",document.body.appendChild(v)),v.textContent=l("Buen momento para soltar los hombros y tomar un poco de agua.","A good moment to relax your shoulders and have some water.","\u80A9\u306E\u529B\u3092\u629C\u3044\u3066\u3001\u6C34\u3092\u4E00\u53E3\u98F2\u3080\u306E\u306B\u3088\u3044\u9803\u5408\u3044\u3067\u3059\u3002"),v.style.opacity=1,clearTimeout(o._rt),o._rt=setTimeout(()=>v.style.opacity=0,7e3)}},5e3)}o.add([["Pausa","Pause","\u4E00\u6642\u505C\u6B62"],["Continuar","Resume","\u518D\u958B"],["M\xE1s","More","\u305D\u306E\u4ED6"],["Respirar","Breathe","\u547C\u5438"],["Sonido: s\xED","Sound: on","\u97F3: \u30AA\u30F3"],["Sonido: no","Sound: off","\u97F3: \u30AA\u30D5"],["Reiniciar","Restart","\u6700\u521D\u304B\u3089"],["En pausa","Paused","\u4E00\u6642\u505C\u6B62\u4E2D"],["Respira con calma.","Breathe calmly.","\u3086\u3063\u304F\u308A\u547C\u5438\u3057\u307E\u3057\u3087\u3046\u3002"],["Todo seguir\xE1 aqu\xED cuando vuelvas.","Everything will be here when you return.","\u623B\u3063\u3066\u304F\u308B\u307E\u3067\u3001\u3059\u3079\u3066\u305D\u306E\u307E\u307E\u3067\u3059\u3002"],["Subt\xEDtulos: s\xED","Captions: on","\u5B57\u5E55: \u30AA\u30F3"],["Subt\xEDtulos: no","Captions: off","\u5B57\u5E55: \u30AA\u30D5"],["Vibraci\xF3n: s\xED","Vibration: on","\u632F\u52D5: \u30AA\u30F3"],["Vibraci\xF3n: no","Vibration: off","\u632F\u52D5: \u30AA\u30D5"],["Una mano: no","One hand: off","\u7247\u624B: \u30AA\u30D5"],["Una mano: derecha","One hand: right","\u7247\u624B: \u53F3"],["Una mano: izquierda","One hand: left","\u7247\u624B: \u5DE6"],["Flauta shakuhachi","Shakuhachi flute","\u5C3A\u516B"],["Campanillas","Wind chimes","\u9234\u306E\u97F3"],["Koto","Koto","\u7434"],["Campana de templo","Temple bell","\u5BFA\u306E\u9418"],["Tambor lejano","Distant drum","\u9060\u304F\u306E\u592A\u9F13"],["Cuac de pato","Duck quack","\u30AB\u30E2\u306E\u9CF4\u304D\u58F0"],["Aleteo de garza","Heron wingbeats","\u30B5\u30AE\u306E\u7FBD\u3070\u305F\u304D"],["Golpe suave de la canoa","Soft knock on the canoe","\u30AB\u30CC\u30FC\u304C\u8EFD\u304F\u3076\u3064\u304B\u308B\u97F3"],["Salpicadura","Splash","\u6C34\u3057\u3076\u304D"],["Fuegos artificiales","Fireworks","\u82B1\u706B"],["Nota de linterna","Lantern note","\u30E9\u30F3\u30BF\u30F3\u306E\u97F3"],["Cascada cercana","Waterfall nearby","\u8FD1\u304F\u306E\u6EDD\u306E\u97F3"],["Lluvia suave","Soft rain","\u3084\u3055\u3057\u3044\u96E8\u97F3"],["Viento","Wind","\u98A8"],["Grillos","Crickets","\u30B3\u30AA\u30ED\u30AE"],["Fregado","Scrubbing","\u3053\u3059\u308B\u97F3"],["Madera que cruje","Creaking wood","\u304D\u3057\u3080\u6728\u306E\u97F3"],["Estrella fugaz","Shooting star","\u6D41\u308C\u661F"]]),o.add([["\u2190 Men\xFA","\u2190 Menu","\u2190 \u30E1\u30CB\u30E5\u30FC"],["\xBFC\xF3mo llegas hoy?","How are you arriving today?","\u4ECA\u65E5\u306F\u3069\u3093\u306A\u6C17\u5206\u3067\u3059\u304B\uFF1F"],["Tranquilo","Calm","\u304A\u3060\u3084\u304B"],["Cansado","Tired","\u3064\u304B\u308C\u305F"],["Inquieto","Restless","\u305D\u308F\u305D\u308F"],["Con ganas de pensar","In a thoughtful mood","\u8003\u3048\u3054\u3068\u3092\u3057\u305F\u3044"],["Es opcional. Solo ajusto el sonido o te ofrezco respirar.","Optional. I only adjust the sound or offer you a breath.","\u4EFB\u610F\u3067\u3059\u3002\u97F3\u306E\u8ABF\u6574\u3084\u6DF1\u547C\u5438\u306E\u63D0\u6848\u3060\u3051\u3092\u3057\u307E\u3059\u3002"],["Baj\xE9 el sonido y suavic\xE9 los agudos. Cuando quieras, cambia esto en \xABM\xE1s\xBB.","I lowered the sound and softened the highs. Change it any time in \u201CMore\u201D.","\u97F3\u3092\u5C0F\u3055\u304F\u3001\u9AD8\u97F3\u3092\u3084\u308F\u3089\u3052\u307E\u3057\u305F\u3002\u300C\u305D\u306E\u4ED6\u300D\u3067\u3044\u3064\u3067\u3082\u5909\u3048\u3089\u308C\u307E\u3059\u3002"],["Un minuto para respirar","One minute to breathe","1\u5206\u3060\u3051\u6DF1\u547C\u5438"],["Inhala","Breathe in","\u5438\u3063\u3066"],["Exhala","Breathe out","\u5410\u3044\u3066"],["Saltar","Skip","\u30B9\u30AD\u30C3\u30D7"],["Gracias por respirar. Entremos con calma.","Thank you for breathing. Let us go in gently.","\u6DF1\u547C\u5438\u3042\u308A\u304C\u3068\u3046\u3002\u3086\u3063\u304F\u308A\u5165\u308A\u307E\u3057\u3087\u3046\u3002"],["Sin prisa. Aqu\xED no hay nada que ganar ni perder.","No hurry. There is nothing to win or lose here.","\u6025\u304C\u306A\u304F\u3066\u5927\u4E08\u592B\u3002\u52DD\u3061\u3082\u8CA0\u3051\u3082\u3042\u308A\u307E\u305B\u3093\u3002"]]);function g(f){let y=document.createElement("div");y.style.cssText="position:fixed;inset:0;z-index:70;display:grid;place-items:center;align-content:center;gap:18px;background:rgba(20,22,48,.92);color:#fbf1e0;font:600 1.1rem system-ui;text-align:center";let v=document.createElement("div");v.style.cssText="width:110px;height:110px;border-radius:50%;background:radial-gradient(circle,#ffe9b8,#ffb86b 70%);box-shadow:0 0 50px rgba(255,200,120,.45);transform:scale(.55);transition:transform 4s ease-in-out";let x=document.createElement("div"),S=document.createElement("div");S.textContent=l("Un minuto para respirar","One minute to breathe","1\u5206\u3060\u3051\u6DF1\u547C\u5438"),S.style.cssText="font-weight:400;opacity:.75;font-size:.9rem";let E=document.createElement("button");E.type="button",E.textContent=l("Saltar","Skip","\u30B9\u30AD\u30C3\u30D7"),E.style.cssText="min-height:44px;padding:8px 18px;border-radius:99px;border:1px solid #5a609a;background:#363a66;color:#fbf1e0;font:inherit;font-size:.9rem;cursor:pointer",y.append(S,v,x,E),document.body.appendChild(y);let A=0,_=!0,w,C=N=>{_&&(_=!1,clearTimeout(w),y.remove(),f&&f(N))};E.onclick=()=>C(!1);let P=()=>{if(_){if(A>=5)return C(!0);A++,x.textContent=l("Inhala","Breathe in","\u5438\u3063\u3066"),v.style.transition="transform 4s ease-in-out",v.style.transform="scale(1)",o.hap(8),w=setTimeout(()=>{_&&(x.textContent=l("Exhala","Breathe out","\u5410\u3044\u3066"),v.style.transition="transform 6s ease-in-out",v.style.transform="scale(.55)",w=setTimeout(P,6e3))},4e3)}};P()}o.calm=()=>{let f=t.get("ux-calm",null);if(f==="1")return!0;if(f==="0")return!1;try{return!!(window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches)}catch{return!1}},o.setCalm=f=>{t.set("ux-calm",f?"1":"0")},o.about=()=>{let f=document.getElementById("uxAboutOv");if(f){f.remove();return}let y=document.createElement("div");y.id="uxAboutOv",y.setAttribute("role","dialog"),y.setAttribute("aria-modal","true"),y.style.cssText="position:fixed;inset:0;z-index:90;display:grid;place-items:center;background:rgba(14,16,36,.88);padding:12px";let v=document.createElement("div");v.style.cssText="background:#363a66;color:#fbf1e0;border:1px solid #5a609a;border-radius:16px;padding:18px 20px;max-width:min(92vw,440px);max-height:84vh;overflow:auto;font:15px/1.5 system-ui,sans-serif";let x=document.createElement("h2");x.style.cssText="margin:0 0 6px;font:600 1.2rem system-ui",x.textContent="Tomoshibi";let S=document.createElement("div");S.style.cssText="margin:0 0 10px;opacity:.7;font-size:.85em",S.textContent=l("\u3068\u3082\u3057\u3073 \xB7 Luz de l\xE1mpara \xB7 Juegos Sin Prisa","\u3068\u3082\u3057\u3073 \xB7 Lamplight \xB7 No-Rush Games","\u3068\u3082\u3057\u3073 \xB7 \u306E\u3093\u3073\u308A\u904A\u3079\u308B\u30B2\u30FC\u30E0");let E=document.createElement("p");E.style.cssText="margin:0 0 10px;opacity:.85",E.textContent=l("Juegos tranquilos, sin puntaje ni tiempo. Nada que ganar ni perder.","Calm games with no score and no timer. Nothing to win or lose.","\u30B9\u30B3\u30A2\u3082\u6642\u9593\u3082\u306A\u3044\u3001\u304A\u3060\u3084\u304B\u306A\u30B2\u30FC\u30E0\u3002\u52DD\u3061\u8CA0\u3051\u306F\u3042\u308A\u307E\u305B\u3093\u3002");let A=document.createElement("p");A.style.cssText="margin:0 0 10px;opacity:.85;font-size:.9em",A.textContent=l("Es un juego de descanso: no es un producto m\xE9dico ni de terapia y no sustituye la ayuda de un profesional.","This is a game for rest: it is not a medical or therapy product and does not replace professional help.","\u3053\u308C\u306F\u4F11\u606F\u306E\u305F\u3081\u306E\u30B2\u30FC\u30E0\u3067\u3059\u3002\u533B\u7642\u3084\u30BB\u30E9\u30D4\u30FC\u306E\u88FD\u54C1\u3067\u306F\u306A\u304F\u3001\u5C02\u9580\u5BB6\u306E\u52A9\u3051\u306E\u4EE3\u308F\u308A\u306B\u306F\u306A\u308A\u307E\u305B\u3093\u3002");let _=document.createElement("div");_.style.cssText="display:flex;flex-wrap:wrap;gap:8px;margin:6px 0 12px",[["privacidad.html",l("Privacidad","Privacy","\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC")],["datos.html",l("Mis datos","My data","\u30C7\u30FC\u30BF")],["creditos.html",l("Cr\xE9ditos y licencias","Credits and licenses","\u30AF\u30EC\u30B8\u30C3\u30C8\u3068\u30E9\u30A4\u30BB\u30F3\u30B9")]].forEach(C=>{let P=document.createElement("a");P.href="../"+C[0],P.textContent=C[1],P.style.cssText="color:#ffc77a;min-height:44px;display:inline-flex;align-items:center;padding:0 6px",_.appendChild(P)});let w=document.createElement("button");w.type="button",w.textContent=l("Cerrar","Close","\u9589\u3058\u308B"),w.style.cssText="min-height:44px;padding:8px 18px;border-radius:99px;border:1px solid #5a609a;background:#2b2d52;color:#fbf1e0;font:inherit;cursor:pointer",w.onclick=()=>y.remove(),v.append(x,S,E,A,_,w),y.appendChild(v),y.onclick=C=>{C.target===y&&y.remove()},document.body.appendChild(y);try{w.focus()}catch{}},o.say=f=>{let y=document.getElementById("uxsay");y||(y=document.createElement("div"),y.id="uxsay",y.setAttribute("role","status"),y.setAttribute("aria-live","polite"),y.style.cssText="position:fixed;left:50%;bottom:max(90px,calc(env(safe-area-inset-bottom) + 80px));transform:translateX(-50%);max-width:min(88vw,420px);background:rgba(20,22,48,.9);color:#fbf1e0;padding:10px 16px;border-radius:14px;font:500 .85rem/1.35 system-ui;text-align:center;z-index:65;pointer-events:none;transition:opacity .5s;opacity:0",document.body.appendChild(y)),y.textContent=f,y.style.opacity=1,clearTimeout(o._st),o._st=setTimeout(()=>y.style.opacity=0,4200)},o.breathe=g,o.mood=()=>M();function M(){let f=document.getElementById("go");if(!f||document.getElementById("uxmood"))return;let y=document.createElement("div");y.id="uxmood",y.style.cssText="display:flex;flex-direction:column;align-items:center;gap:8px;margin:0 0 14px";let v=document.createElement("div");v.textContent=l("\xBFC\xF3mo llegas hoy?","How are you arriving today?","\u4ECA\u65E5\u306F\u3069\u3093\u306A\u6C17\u5206\u3067\u3059\u304B\uFF1F"),v.style.cssText="font:600 .95rem system-ui;opacity:.9";let x=document.createElement("div");x.style.cssText="display:flex;flex-wrap:wrap;gap:8px;justify-content:center";let S=document.createElement("div");S.textContent=l("Es opcional. Solo ajusto el sonido o te ofrezco respirar. Es un juego de descanso, no sustituye ayuda profesional.","Optional. I only adjust the sound or offer a breath. This is a game for rest, not a substitute for professional help.","\u4EFB\u610F\u3067\u3059\u3002\u97F3\u306E\u8ABF\u6574\u3084\u6DF1\u547C\u5438\u306E\u63D0\u6848\u3060\u3051\u3092\u3057\u307E\u3059\u3002\u4F11\u606F\u306E\u305F\u3081\u306E\u30B2\u30FC\u30E0\u3067\u3001\u5C02\u9580\u5BB6\u306E\u52A9\u3051\u306E\u4EE3\u308F\u308A\u306B\u306F\u306A\u308A\u307E\u305B\u3093\u3002"),S.style.cssText="font:400 .72rem system-ui;opacity:.6";let E=null,A={};[["calm","Tranquilo","Calm","\u304A\u3060\u3084\u304B"],["tired","Cansado","Tired","\u3064\u304B\u308C\u305F"],["rest","Inquieto","Restless","\u305D\u308F\u305D\u308F"],["think","Con ganas de pensar","In a thoughtful mood","\u8003\u3048\u3054\u3068\u3092\u3057\u305F\u3044"]].forEach(([_,w,C,P])=>{let N=document.createElement("button");N.type="button",N.textContent=l(w,C,P),N.style.cssText="min-height:44px;padding:8px 14px;border-radius:99px;border:1px solid #5a609a;background:rgba(54,58,102,.7);color:#fbf1e0;font:500 .85rem system-ui;cursor:pointer",N.onclick=()=>{E=E===_?null:_;for(let B in A)A[B].style.borderColor=B===E?"#ffc77a":"#5a609a",A[B].style.background=B===E?"rgba(255,199,122,.22)":"rgba(54,58,102,.7)";o.hap(6)},A[_]=N,x.appendChild(N)}),y.append(v,x,S),f.parentNode.insertBefore(y,f),f.addEventListener("click",()=>{t.set("ux-mood",E||""),E==="tired"&&(o.api.setSoft(!0),+o.api.vol()>.7&&o.api.setVol(".7"),setTimeout(()=>{try{o.say(l("Baj\xE9 el sonido y suavic\xE9 los agudos. Cuando quieras, cambia esto en \xABM\xE1s\xBB.","I lowered the sound and softened the highs. Change it any time in \u201CMore\u201D.","\u97F3\u3092\u5C0F\u3055\u304F\u3001\u9AD8\u97F3\u3092\u3084\u308F\u3089\u3052\u307E\u3057\u305F\u3002\u300C\u305D\u306E\u4ED6\u300D\u3067\u3044\u3064\u3067\u3082\u5909\u3048\u3089\u308C\u307E\u3059\u3002"))}catch{}},900)),E==="rest"&&setTimeout(()=>g(),600),E==="think"&&setTimeout(()=>{try{o.say(l("Sin prisa. Aqu\xED no hay nada que ganar ni perder.","No hurry. There is nothing to win or lose here.","\u6025\u304C\u306A\u304F\u3066\u5927\u4E08\u592B\u3002\u52DD\u3061\u3082\u8CA0\u3051\u3082\u3042\u308A\u307E\u305B\u3093\u3002"))}catch{}},900)},!0)}let m=o.init;o.init=function(){m.apply(this,arguments);try{M()}catch{}}})();var p1=[0,2,3,7,8],zu=(i,e,t)=>Math.min(t,Math.max(e,i)),Mn=(i,e)=>{try{window.UX&&UX.cap(i,e)}catch{}},cs=(i,e)=>73.42*Math.pow(2,(p1[i%5]+12*(e+Math.floor(i/5)))/12),nt={ctx:null,on:!0,init(){if(this.ctx)return;let i=this.ctx=new(window.AudioContext||window.webkitAudioContext);this.m=i.createGain(),this.m.gain.value=.8,window.UX?UX.out(i,this.m):this.m.connect(i.destination);let e=i.sampleRate*2.6,t=i.createBuffer(2,e,i.sampleRate);for(let R=0;R<2;R++){let L=t.getChannelData(R);for(let O=0;O<e;O++)L[O]=(Math.random()*2-1)*Math.pow(1-O/e,2.4)}this.rv=i.createConvolver(),this.rv.buffer=t;let n=i.createGain();n.gain.value=.7,this.rv.connect(n),n.connect(this.m);let s=i.createBuffer(1,i.sampleRate*3,i.sampleRate),r=s.getChannelData(0);for(let R=0;R<r.length;R++)r[R]=Math.random()*2-1;this.nb=s;let a=R=>{if(R&&window.UX&&UX.pinkSrc){let O=UX.pinkSrc(i,R);return O.start(0,Math.random()*6),O}let L=i.createBufferSource();return L.buffer=s,L.loop=!0,L.start(0,Math.random()*2),L},o=a(.81),l=i.createBiquadFilter();l.type="bandpass",l.frequency.value=520,l.Q.value=.5,this.wg=i.createGain(),this.wg.gain.value=.03,o.connect(l),l.connect(this.wg),this.wg.connect(this.m);let c=a(1.46),h=i.createBiquadFilter();h.type="bandpass",h.frequency.value=2200,h.Q.value=1.2,this.wg2=i.createGain(),this.wg2.gain.value=.008,c.connect(h),h.connect(this.wg2),this.wg2.connect(this.m);let d=a(.9),u=i.createBiquadFilter();u.type="lowpass",u.frequency.value=240,u.Q.value=.4;let p=a(1.2),g=i.createBiquadFilter();g.type="bandpass",g.frequency.value=680,g.Q.value=.7,this.cityG=i.createGain(),this.cityG.gain.value=.026,d.connect(u),u.connect(this.cityG);let M=i.createGain();M.gain.value=.3,p.connect(g),g.connect(M),M.connect(this.cityG),this.cityG.connect(this.m);let m=i.createOscillator(),f=i.createGain();m.frequency.value=.045,f.gain.value=.005,m.connect(f),f.connect(this.cityG.gain),m.start(),this.dg=i.createGain(),this.dg.gain.value=.07,this.dg.connect(this.m),this.dg.connect(this.rv),[1,1.5,2].forEach((R,L)=>{let O=i.createOscillator();O.type="sine",O.frequency.value=73.42*R*(L===2?1.003:1);let k=i.createGain();k.gain.value=L===1?.5:.7,O.connect(k),k.connect(this.dg),O.start()});let y=i.createOscillator(),v=i.createGain();y.frequency.value=.07,v.gain.value=.02,y.connect(v),v.connect(this.dg.gain),y.start();let x=a(1.6),S=i.createBiquadFilter();S.type="bandpass",S.frequency.value=2600,S.Q.value=.8,this.sg=i.createGain(),this.sg.gain.value=0,x.connect(S),S.connect(this.sg),this.sg.connect(this.m),this.sf=S;let E=a(2.69),A=i.createBiquadFilter();A.type="highpass",A.frequency.value=1800,this.rg=i.createGain(),this.rg.gain.value=0,E.connect(A),A.connect(this.rg),this.rg.connect(this.m);let _=a(.71),w=i.createBiquadFilter();w.type="bandpass",w.frequency.value=420,w.Q.value=.6,this.wdg=i.createGain(),this.wdg.gain.value=.012;let C=i.createOscillator(),P=i.createGain();C.frequency.value=.09,P.gain.value=.009,C.connect(P),P.connect(this.wdg.gain),C.start();let N=i.createOscillator(),B=i.createGain();N.frequency.value=.023,B.gain.value=180,N.connect(B),B.connect(w.frequency),N.start(),_.connect(w),w.connect(this.wdg),this.wdg.connect(this.m),this.nextFlute=i.currentTime+6,this.nextKey=i.currentTime+4,this.initPad()},initPad(){let i=this.ctx,e=i.createBiquadFilter();e.type="lowpass",e.frequency.value=500,e.Q.value=.4;let t=i.createGain();t.gain.value=0,e.connect(t),t.connect(this.m);let n=i.createGain();n.gain.value=.5,t.connect(n),n.connect(this.rv);let s=[];for(let r=0;r<4;r++){let a=i.createOscillator(),o=i.createOscillator(),l=i.createGain(),c=i.createGain(),h=i.createOscillator(),d=i.createGain();a.type="sine",o.type="triangle",o.detune.value=r%2?7:-7,l.gain.value=.5,c.gain.value=.18,h.frequency.value=.04+r*.017,d.gain.value=.25,h.connect(d),d.connect(l.gain),a.connect(l),o.connect(c),l.connect(e),c.connect(e),a.start(),o.start(),h.start(),s.push([a,o])}this.pad={f:e,pg:t,vs:s,ch:0},this.mood={prog:0,night:1},this.padChord(!0),this.nextChord=i.currentTime+15,this.padFilter()},setMood(i,e){this.mood={prog:zu(i,0,1),night:e==null?1:e},this.pad&&this.ctx&&this.padFilter()},padFilter(){let i=this.mood,e=this.ctx.currentTime,t=i.prog*(1-.35*i.night);this.pad.f.frequency.setTargetAtTime(640+t*1300,e,2.5),this.pad.pg.gain.setTargetAtTime(.078*(1+.15*(1-i.night)),e,2)},padChord(i){let e=this.ctx,t=this.pad,n=e.currentTime,s=146.83,r=this.mood.prog,a=[[-12,-5,0,7],[-12,-4,3,7],[-12,0,7,12],[-12,-5,3,7]],o=[[-12,0,7,15],[-4,3,7,12],[0,7,12,15],[-4,0,7,15]],l=[[0,7,14,19],[0,7,12,15],[-4,3,7,12],[0,7,12,19]],c=r<.5?o:l;t.ch=(t.ch+1+(Math.random()<.3?1:0))%c.length;let h=c[t.ch];t.vs.forEach(([d,u],p)=>{let g=s*Math.pow(2,h[p]/12);d.frequency.setTargetAtTime(g,n,i?.01:3.2),u.frequency.setTargetAtTime(g*1.002,n,i?.01:3.2)}),this.padFilter()},scrub(i){this.ctx&&(i>.2&&this.on&&Mn("Fregado"),this.sg.gain.setTargetAtTime(Math.min(.12,i*.12),this.ctx.currentTime,.05),this.sf.frequency.setTargetAtTime(1800+i*1800,this.ctx.currentTime,.1))},rain(i){this.ctx&&i&&this.on&&Mn("Lluvia en el techo",4e4),this.ctx&&this.rg.gain.setTargetAtTime(i?.035:0,this.ctx.currentTime,1.2)},chime(i,e){if(!this.ctx||!this.on)return;Mn("Campanita",2500);let t=this.ctx.currentTime;[0,2,4].forEach((n,s)=>this.pluck(cs((e||0)+n+5,2),t+s*.15,.09,i))},breathTone(i,e){let t=this.ctx;if(!t||t.state!=="running"||!this.on)return;let n=t.currentTime;[[1,.05],[1.5,.022]].forEach(([s,r])=>{let a=t.createOscillator(),o=t.createGain();a.type="sine",a.frequency.setValueAtTime((i?196:262)*s,n),a.frequency.linearRampToValueAtTime((i?262:196)*s,n+e),i?(o.gain.setValueAtTime(0,n),o.gain.linearRampToValueAtTime(r,n+e)):(o.gain.setValueAtTime(r,n),o.gain.linearRampToValueAtTime(0,n+e)),a.connect(o),o.connect(this.m),a.start(n),a.stop(n+e+.1)})},resume(){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()},setOn(i){this.on=i,this.m&&this.m.gain.setTargetAtTime(i?.8:0,this.ctx.currentTime,.2)},update(i,e,t){let n=1-e;if(!this.ctx)return;let s=this.ctx.currentTime;if(s>this.nextChord&&(this.nextChord=s+14+Math.random()*3,this.on&&this.padChord()),this.nextAmb||(this.nextAmb=s+6),this.on&&s>this.nextAmb){this.nextAmb=s+18+Math.random()*10;let r=["Viento","Ciudad a lo lejos","Murmullo de agua"][this.ambI=((this.ambI||0)+1)%3];Mn(r,3e4)}this.wg.gain.setTargetAtTime(.028+Math.min(i,7)*.007,s,.3),this.wg2.gain.setTargetAtTime(.006+Math.min(i,7)*.0016,s,.3),this.nextFrog||(this.nextFrog=s+4),this.on&&s>this.nextFrog&&(this.nextFrog=s+2.5+Math.random()*(n?9:5),this.frog(Math.random()*1.6-.8,n)),this.nextBell||(this.nextBell=s+14),this.on&&s>this.nextBell&&(this.nextBell=s+30+Math.random()*35,this.bell()),s>this.nextFlute&&(this.nextFlute=s+16+Math.random()*16,this.phrase()),this.on&&this.cityStep(s)},key(i,e,t,n,s){let r=this.ctx,a=t,[o]=this.pan(s||0),l=cs(i,e);[[1,1,2.8],[2,.16,1.6],[3.01,.05,.9]].forEach(([c,h,d])=>{let u=r.createOscillator(),p=r.createGain();u.type=c===1?"triangle":"sine",u.frequency.value=l*c,p.gain.setValueAtTime(0,a),p.gain.linearRampToValueAtTime(n*h,a+.03),p.gain.exponentialRampToValueAtTime(1e-4,a+d),u.connect(p),p.connect(o),p.connect(this.rv),u.start(a),u.stop(a+d+.1)})},motif(){let i=this.ctx.currentTime+.1,e=2+(Math.random()*3|0),t=this.kd==null?5+(Math.random()*5|0):this.kd,n=i;for(let s=0;s<e;s++)t=zu(t+(Math.random()*5|0)-2,3,11),this.key(t,1+(t>=10?0:1),n,.05,Math.random()*.8-.4),n+=.55+Math.random()*.7;this.kd=t},cityStep(i){this.nCar||(this.nCar=i+7,this.nTrain=i+40,this.nDog=i+55,this.nTram=i+30,this.nCrk=i+2),i>this.nextKey&&(this.nextKey=i+4.5+Math.random()*6,this.motif()),i>this.nCar&&(this.nCar=i+9+Math.random()*14,this.car()),i>this.nTrain&&(this.nTrain=i+75+Math.random()*60,this.train()),i>this.nDog&&(this.nDog=i+45+Math.random()*60,this.dog()),i>this.nTram&&(this.nTram=i+60+Math.random()*60,this.tram());let e=zu((this.mood.prog-.2)/.5,0,1);e>0&&i>this.nCrk&&(this.nCrk=i+.12+Math.random()*(1.1-.6*e),this.crackle(e))},car(){let i=this.ctx,e=i.currentTime+.05,t=4+Math.random()*3,n=Math.random()<.5?-1:1;Mn("Autos a lo lejos",2e4);let s=i.createBufferSource();s.buffer=this.nb,s.loop=!0;let r=i.createBiquadFilter();r.type="bandpass",r.Q.value=1.1,r.frequency.setValueAtTime(380,e),r.frequency.linearRampToValueAtTime(950,e+t*.45),r.frequency.linearRampToValueAtTime(340,e+t);let a=i.createGain(),o=.03*(.6+Math.random()*.6);a.gain.setValueAtTime(0,e),a.gain.linearRampToValueAtTime(o,e+t*.45),a.gain.linearRampToValueAtTime(0,e+t);let l=i.createStereoPanner();l.pan.setValueAtTime(-n*.9,e),l.pan.linearRampToValueAtTime(n*.9,e+t),s.connect(r),r.connect(a),a.connect(l),l.connect(this.m),a.connect(this.rv),s.start(e,Math.random()*2),s.stop(e+t+.1)},train(){let i=this.ctx,e=i.currentTime+.1,t=12,n=Math.random()<.5?-1:1,s=34;Mn("Tren a lo lejos",6e4);let r=i.createStereoPanner();r.pan.setValueAtTime(-n*.85,e),r.pan.linearRampToValueAtTime(n*.85,e+t),r.connect(this.m),[261.6,311.1].forEach(a=>{let o=i.createOscillator(),l=i.createGain(),c=i.createBiquadFilter();o.type="triangle",o.frequency.value=a,c.type="lowpass",c.frequency.value=900,l.gain.setValueAtTime(0,e),l.gain.linearRampToValueAtTime(.018,e+.25),l.gain.setTargetAtTime(0,e+1.3,.35),o.connect(c),c.connect(l),l.connect(r),l.connect(this.rv),o.start(e),o.stop(e+3.2)});for(let a=0;a<s;a++){let o=a/s,l=.035*Math.pow(Math.sin(Math.PI*(.04+.92*o)),1.4);[0,.1].forEach((c,h)=>{let d=e+.6+a*.3+c,u=i.createBufferSource();u.buffer=this.nb;let p=i.createBiquadFilter();p.type="bandpass",p.frequency.value=h?650:900,p.Q.value=.9;let g=i.createGain();g.gain.setValueAtTime(0,d),g.gain.linearRampToValueAtTime(l*(h?.7:1),d+.004),g.gain.exponentialRampToValueAtTime(1e-4,d+.07),u.connect(p),p.connect(g),g.connect(r),u.start(d,Math.random()*2),u.stop(d+.1)})}{let a=i.createBufferSource();a.buffer=this.nb,a.loop=!0;let o=i.createBiquadFilter();o.type="lowpass",o.frequency.value=170;let l=i.createGain();l.gain.setValueAtTime(0,e),l.gain.linearRampToValueAtTime(.05,e+t*.5),l.gain.linearRampToValueAtTime(0,e+t),a.connect(o),o.connect(l),l.connect(r),a.start(e,Math.random()*2),a.stop(e+t+.1)}},dog(){let i=this.ctx,e=i.currentTime+.1,[t]=this.pan(Math.random()*1.4-.7),n=2+(Math.random()*2|0);Mn("Perro a lo lejos",4e4);for(let s=0;s<n;s++){let r=e+s*(.42+Math.random()*.12),a=i.createOscillator(),o=i.createBiquadFilter(),l=i.createBiquadFilter(),c=i.createGain();a.type="sawtooth",a.frequency.setValueAtTime(330,r),a.frequency.exponentialRampToValueAtTime(210,r+.14),o.type="bandpass",o.frequency.value=800,o.Q.value=2.4,l.type="lowpass",l.frequency.value=1500,c.gain.setValueAtTime(0,r),c.gain.linearRampToValueAtTime(.02,r+.015),c.gain.exponentialRampToValueAtTime(1e-4,r+.17),a.connect(o),o.connect(l),l.connect(c),c.connect(t),c.connect(this.rv),a.start(r),a.stop(r+.2)}},tram(){let i=this.ctx,e=i.currentTime+.1,[t]=this.pan(Math.random()*1.2-.6);Mn("Tranv\xEDa a lo lejos",6e4),[0,.34].forEach(n=>[[1760,1,1.1],[2637,.3,.6]].forEach(([s,r,a])=>{let o=i.createOscillator(),l=i.createGain(),c=e+n;o.type="sine",o.frequency.value=s,l.gain.setValueAtTime(0,c),l.gain.linearRampToValueAtTime(.012*r,c+.004),l.gain.exponentialRampToValueAtTime(1e-4,c+a),o.connect(l),l.connect(t),l.connect(this.rv),o.start(c),o.stop(c+a+.1)}))},crackle(i){let e=this.ctx,t=e.currentTime,[n]=this.pan(-.35+Math.random()*.2);i>.3&&Mn("Crepitar del fuego",3e4);let s=1+(Math.random()*3|0);for(let r=0;r<s;r++){let a=t+Math.random()*.2,o=e.createBufferSource();o.buffer=this.nb;let l=e.createBiquadFilter();l.type="bandpass",l.frequency.value=1400+Math.random()*3200,l.Q.value=1.4;let c=e.createGain(),h=(.01+Math.random()*.03)*i;c.gain.setValueAtTime(0,a),c.gain.linearRampToValueAtTime(h,a+.002),c.gain.exponentialRampToValueAtTime(1e-4,a+.02+Math.random()*.05),o.connect(l),l.connect(c),c.connect(n),o.start(a,Math.random()*2),o.stop(a+.12)}},pan(i){let e=this.ctx.createStereoPanner();e.pan.value=Math.max(-1,Math.min(1,i)),e.connect(this.m);let t=this.ctx.createGain();return t.gain.value=.55,t.connect(this.rv),[e]},pluck(i,e,t,n){let s=this.ctx,r=e,[a]=this.pan(n||0);[[1,1],[2.76,.28],[5.4,.1]].forEach(([o,l],c)=>{let h=s.createOscillator();h.type="sine",h.frequency.value=i*o;let d=s.createGain();d.gain.setValueAtTime(0,r),d.gain.linearRampToValueAtTime(t*l,r+.008),d.gain.exponentialRampToValueAtTime(1e-4,r+2.6/(1+c*.6)),h.connect(d),d.connect(a),d.connect(this.rv),h.start(r),h.stop(r+3)})},lantern(i){if(!this.ctx||!this.on)return;let e=this.ctx.currentTime;Mn("Nota de linterna");let t=Math.floor(Math.random()*5);this.pluck(cs(t+5,2),e,.1,i),this.pluck(cs(t+7,2),e+.16,.07,i)},flute(i,e,t,n,s){let r=this.ctx,a=cs(i,e),o=t,l=r.createOscillator();l.type="sine",l.frequency.value=a;let c=r.createOscillator(),h=r.createGain();c.frequency.value=4.6,h.gain.value=a*.007,c.connect(h),h.connect(l.frequency);let d=r.createBufferSource();d.buffer=this.nb,d.loop=!0;let u=r.createBiquadFilter();u.type="bandpass",u.frequency.value=a*2,u.Q.value=4;let p=r.createGain();p.gain.value=s*.5;let g=r.createGain();g.gain.setValueAtTime(0,o),g.gain.linearRampToValueAtTime(s,o+.35),g.gain.setTargetAtTime(0,o+n,.5),l.connect(g),d.connect(u),u.connect(p),p.connect(g),g.connect(this.m),g.connect(this.rv),l.start(o),c.start(o),d.start(o),l.stop(o+n+2.5),c.stop(o+n+2.5),d.stop(o+n+2.5)},phrase(){if(!this.on)return;Mn("Flauta shakuhachi");let e=this.ctx.currentTime+.2;[[0,2,2.6],[2,2,1.8],[1,2,1.6],[4,1,3.4]].slice(0,2+Math.floor(Math.random()*3)).forEach(([n,s,r])=>{this.flute(n,s+1,e,r,.05),e+=r*.9})},frog(i,e){Mn("Croar de ranas",14e3);let t=this.ctx,n=t.currentTime+.05,[s]=this.pan(i),r=Math.random()<.4,a=r?210+Math.random()*40:340+Math.random()*80,o=1+(Math.random()*3|0);for(let l=0;l<o;l++){let c=n+l*(r?.26:.17),h=t.createOscillator(),d=t.createGain(),u=t.createBiquadFilter();h.type="triangle",h.frequency.setValueAtTime(a,c),h.frequency.exponentialRampToValueAtTime(a*1.35,c+.06),h.frequency.exponentialRampToValueAtTime(a*.85,c+.14),u.type="bandpass",u.frequency.value=a*2,u.Q.value=2,d.gain.setValueAtTime(0,c),d.gain.linearRampToValueAtTime((e?.012:.02)*(r?1.2:.8),c+.03),d.gain.exponentialRampToValueAtTime(1e-4,c+.16),h.connect(u),u.connect(d),d.connect(s),d.connect(this.rv),h.start(c),h.stop(c+.2)}},bell(){Mn("Campana de templo");let i=this.ctx,e=i.currentTime+.1,[t]=this.pan(Math.random()*1.2-.6),n=cs(Math.floor(Math.random()*3),0)*2;[[1,1,7],[2.01,.35,5],[2.76,.28,4],[4.07,.12,2.5],[5.4,.08,2]].forEach(([s,r,a])=>{let o=i.createOscillator(),l=i.createGain();o.type="sine",o.frequency.value=n*s,l.gain.setValueAtTime(0,e),l.gain.linearRampToValueAtTime(.022*r,e+.01),l.gain.exponentialRampToValueAtTime(1e-4,e+a),o.connect(l),l.connect(t),l.connect(this.rv),o.start(e),o.stop(e+a+.1)})},paddle(i){if(!this.ctx||!this.on)return;let e=this.ctx,t=e.currentTime,[n]=this.pan(i*.7),s=e.createBufferSource();s.buffer=this.nb;let r=e.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(1400,t),r.frequency.exponentialRampToValueAtTime(300,t+.5);let a=e.createGain();a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(.09,t+.05),a.gain.exponentialRampToValueAtTime(1e-4,t+.6),s.connect(r),r.connect(a),a.connect(n),s.start(t,Math.random()*2),s.stop(t+.7)},plop(i){if(!this.ctx||!this.on)return;let e=this.ctx,t=e.currentTime,n=e.createOscillator(),s=e.createGain(),r=e.createStereoPanner?e.createStereoPanner():null;n.type="sine",n.frequency.setValueAtTime(520,t),n.frequency.exponentialRampToValueAtTime(190,t+.12),s.gain.setValueAtTime(1e-4,t),s.gain.linearRampToValueAtTime(.05,t+.01),s.gain.exponentialRampToValueAtTime(1e-4,t+.22),n.connect(s),r?(r.pan.value=Math.max(-1,Math.min(1,i||0)),s.connect(r),r.connect(this.m)):s.connect(this.m),n.start(t),n.stop(t+.25)},meow(){if(!this.ctx||!this.on)return;Mn("Maullido suave",4e3);let i=this.ctx,e=i.currentTime,t=i.createOscillator(),n=i.createBiquadFilter(),s=i.createGain();t.type="triangle",t.frequency.setValueAtTime(520,e),t.frequency.linearRampToValueAtTime(820,e+.14),t.frequency.linearRampToValueAtTime(480,e+.42),n.type="bandpass",n.frequency.value=1500,n.Q.value=1.2,s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(.035,e+.07),s.gain.exponentialRampToValueAtTime(1e-4,e+.5),t.connect(n),n.connect(s),s.connect(this.m),s.connect(this.rv),t.start(e),t.stop(e+.55)},creak(){if(!this.ctx||!this.on)return;Mn("Madera que cruje",4e3);let i=this.ctx,e=i.currentTime,t=i.createOscillator(),n=i.createBiquadFilter(),s=i.createGain();t.type="sawtooth",t.frequency.setValueAtTime(95,e),t.frequency.exponentialRampToValueAtTime(150,e+.18),t.frequency.exponentialRampToValueAtTime(70,e+.4),n.type="lowpass",n.frequency.value=420,s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(.03,e+.06),s.gain.exponentialRampToValueAtTime(1e-4,e+.45),t.connect(n),n.connect(s),s.connect(this.m),t.start(e),t.stop(e+.5)},sparkle(){if(!this.ctx||!this.on)return;let i=this.ctx.currentTime;this.pluck(cs(4,4),i,.035,.4),this.pluck(cs(7,4),i+.12,.025,.4)},bump(){if(!this.ctx||!this.on)return;let i=this.ctx,e=i.currentTime,t=i.createOscillator(),n=i.createGain();t.type="sine",t.frequency.setValueAtTime(110,e),t.frequency.exponentialRampToValueAtTime(48,e+.35),n.gain.setValueAtTime(.18,e),n.gain.exponentialRampToValueAtTime(1e-4,e+.45),t.connect(n),n.connect(this.m),t.start(e),t.stop(e+.5)}};function m1(i){let e=i>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Kp={},Qp={wood:.7,woodV:.7,stone:.55,shingle:.6,rock:.22,grass:.12,bark:.9,sand:.2,leaf:.25,needle:.3,cloth:1.2,straw:1,plank:.8};function g1(i){let t=document.createElement("canvas");t.width=t.height=256;let n=t.getContext("2d"),s=m1(i.length*97+i.charCodeAt(0)),r=(o,l)=>`rgba(${o},${o},${o},${l})`;if(n.fillStyle="#e9e4de",n.fillRect(0,0,256,256),i==="wood"||i==="woodV"){let o=i==="woodV";for(let l=0;l<150;l++){let c=s()*256,h=40+s()*160,d=s()*256,u=.6+s()*1.8;n.strokeStyle=s()>.5?"rgba(95,70,55,"+(.05+s()*.12)+")":"rgba(255,248,238,"+(.05+s()*.1)+")",n.lineWidth=u,n.beginPath(),o?(n.moveTo(c,d),n.bezierCurveTo(c+4,d+h*.3,c-4,d+h*.7,c+2,d+h)):(n.moveTo(d,c),n.bezierCurveTo(d+h*.3,c+4,d+h*.7,c-4,d+h,c+2)),n.stroke()}for(let l=0;l<3;l++){let c=s()*256,h=s()*256;n.strokeStyle="rgba(80,55,40,.22)",n.lineWidth=1.2;for(let d=1;d<4;d++)n.beginPath(),n.ellipse(c,h,d*3.5,d*2.2,o?1.57:0,0,7),n.stroke()}n.strokeStyle="rgba(70,50,40,.18)",n.lineWidth=2,n.beginPath(),o?(n.moveTo(0,0),n.lineTo(0,256)):(n.moveTo(0,0),n.lineTo(256,0)),n.stroke()}else if(i==="stone"){n.fillStyle="#8b86a0",n.fillRect(0,0,256,256);let o=4;for(let l=0;l<o;l++){let c=-(s()*40),h=256/o;for(;c<256;){let d=38+s()*50,u=190+s()*55|0;n.fillStyle=`rgb(${u},${u-3},${u+8})`,n.beginPath(),n.roundRect?n.roundRect(c+3,l*h+3,d-6,h-6,10):n.rect(c+3,l*h+3,d-6,h-6),n.fill(),n.fillStyle="rgba(255,255,255,.18)",n.fillRect(c+9,l*h+7,d-24,3);for(let p=0;p<14;p++)n.fillStyle=r(120,.08),n.fillRect(c+6+s()*(d-12),l*h+6+s()*(h-12),2,2);c+=d}}}else if(i==="shingle"){n.fillStyle="#b8aea6",n.fillRect(0,0,256,256);let o=6,l=256/o;for(let c=0;c<o;c++){let h=c%2*22;for(let d=-22;d<278;d+=44){let u=196+s()*50|0;n.fillStyle=`rgb(${u},${u-6},${u-8})`,n.beginPath(),n.moveTo(d+h+2,c*l),n.lineTo(d+h+42,c*l),n.lineTo(d+h+42,c*l+l*.55),n.quadraticCurveTo(d+h+22,c*l+l*1.15,d+h+2,c*l+l*.55),n.closePath(),n.fill(),n.strokeStyle="rgba(60,40,40,.28)",n.lineWidth=1.5,n.stroke(),n.fillStyle="rgba(255,255,255,.2)",n.fillRect(d+h+8,c*l+3,26,3)}}}else if(i==="rock"){n.fillStyle="#d4d0dc",n.fillRect(0,0,256,256);for(let o=0;o<60;o++){let l=s()*256,c=s()*256,h=10+s()*40,d=170+s()*70|0;n.fillStyle=`rgba(${d},${d-4},${d+10},.35)`,n.beginPath(),n.ellipse(l,c,h,h*.6,s()*3,0,7),n.fill()}for(let o=0;o<30;o++){n.strokeStyle="rgba(50,45,80,"+(.12+s()*.2)+")",n.lineWidth=1+s()*2,n.beginPath();let l=s()*256,c=s()*256;n.moveTo(l,c);for(let h=0;h<4;h++)l+=s()*40-20,c+=s()*30,n.lineTo(l,c);n.stroke()}}else if(i==="grass"){n.fillStyle="#e8efe0",n.fillRect(0,0,256,256);for(let o=0;o<900;o++){let l=s()*256,c=s()*256,h=s()>.5?"rgba(120,170,110,":"rgba(255,255,220,";n.strokeStyle=h+(.08+s()*.2)+")",n.lineWidth=1,n.beginPath(),n.moveTo(l,c),n.lineTo(l+s()*4-2,c-3-s()*7),n.stroke()}for(let o=0;o<20;o++)n.fillStyle="rgba(255,255,255,.3)",n.beginPath(),n.arc(s()*256,s()*256,1.5+s()*1.5,0,7),n.fill()}else if(i==="bark"){n.fillStyle="#d9cfc6",n.fillRect(0,0,256,256);for(let o=0;o<70;o++){let l=s()*256;n.strokeStyle="rgba(60,45,40,"+(.12+s()*.25)+")",n.lineWidth=1+s()*3,n.beginPath(),n.moveTo(l,0),n.bezierCurveTo(l+8,256*.3,l-8,256*.6,l+3,256),n.stroke()}}else if(i==="leaf"){n.fillStyle="#ecebe4",n.fillRect(0,0,256,256);for(let o=0;o<640;o++){let l=s()*256,c=s()*256,h=3.5+s()*8,d=s()>.45?215+s()*40|0:120+s()*60|0;for(let u of[-256,0,256])for(let p of[-256,0,256])l+u<-30||l+u>286||c+p<-30||c+p>286||(n.fillStyle=`rgba(${d},${d},${d-6},${.35+s()*.4})`,n.beginPath(),n.ellipse(l+u,c+p,h,h*.62,s()*3.14,0,7),n.fill())}for(let o=0;o<260;o++){let l=s()*256,c=s()*256;n.fillStyle="rgba(70,80,60,.3)",n.beginPath(),n.ellipse(l,c+5,5,2.4,0,0,7),n.fill(),n.fillStyle="rgba(255,255,235,.5)",n.beginPath(),n.ellipse(l-1,c-2,3.6,1.5,-.5,0,7),n.fill()}}else if(i==="cloth"){n.fillStyle="#e6e6e8",n.fillRect(0,0,256,256);for(let o=0;o<256;o+=4)n.fillStyle="rgba(90,95,110,"+(.07+s()*.06)+")",n.fillRect(o,0,1.6,256),n.fillStyle="rgba(255,255,255,"+(.1+s()*.08)+")",n.fillRect(0,o,256,1.6);for(let o=0;o<9;o++){let l=s()*256,c=s()*256;n.strokeStyle="rgba(60,65,85,.2)",n.lineWidth=2.5,n.beginPath(),n.moveTo(l,c),n.bezierCurveTo(l+20,c+30,l-18,c+60,l+6,c+95),n.stroke(),n.strokeStyle="rgba(255,255,255,.22)",n.lineWidth=2,n.beginPath(),n.moveTo(l+4,c),n.bezierCurveTo(l+24,c+30,l-14,c+60,l+10,c+95),n.stroke()}for(let o=0;o<5;o++)n.fillStyle="rgba(70,75,95,.25)",n.fillRect(s()*256,s()*256,10+s()*10,1.5)}else if(i==="straw"){n.fillStyle="#e8e0cc",n.fillRect(0,0,256,256);for(let o=-256;o<256*2;o+=7)n.strokeStyle="rgba(120,90,40,"+(.18+s()*.2)+")",n.lineWidth=2,n.beginPath(),n.moveTo(o,0),n.lineTo(o+256,256),n.stroke(),n.strokeStyle="rgba(255,250,225,"+(.25+s()*.2)+")",n.beginPath(),n.moveTo(o+3,0),n.lineTo(o+3-256,256),n.stroke();for(let o=0;o<256;o+=7)n.strokeStyle="rgba(110,80,35,.22)",n.lineWidth=1.5,n.beginPath(),n.moveTo(o,0),n.lineTo(o,256),n.stroke()}else if(i==="plank"){n.fillStyle="#e9e0d6",n.fillRect(0,0,256,256);let o=5,l=256/o;for(let c=0;c<o;c++){let h=c*l;n.fillStyle="rgba("+(200+s()*40|0)+","+(190+s()*30|0)+",175,.45)",n.fillRect(0,h,256,l);for(let d=0;d<22;d++){let u=h+3+s()*(l-6);n.strokeStyle=s()>.5?"rgba(95,70,55,"+(.1+s()*.14)+")":"rgba(255,248,238,.18)",n.lineWidth=.8+s()*1.5,n.beginPath(),n.moveTo(s()*60,u),n.bezierCurveTo(80,u+3,160,u-3,256,u+1),n.stroke()}n.fillStyle="rgba(60,42,32,.55)",n.fillRect(0,h,256,2.5);for(let d of[18,238])n.fillStyle="rgba(50,40,36,.55)",n.beginPath(),n.arc(d,h+l/2,2.2,0,7),n.fill()}}else if(i==="needle"){n.fillStyle="#d7dbd2",n.fillRect(0,0,256,256);for(let o=0;o<8;o++){let l=o*256/8;for(let c=-10;c<266;c+=14){let h=c+o%2*7+s()*3,d=18+s()*10,u=s()>.5?235:130+s()*50|0;n.strokeStyle=`rgba(${u},${u},${u-10},${.45+s()*.4})`,n.lineWidth=2+s()*2,n.lineCap="round",n.beginPath(),n.moveTo(h,l),n.lineTo(h+s()*8-4,l+d),n.stroke()}n.strokeStyle="rgba(50,70,50,.3)",n.lineWidth=3,n.beginPath(),n.moveTo(0,l+256/8-2),n.lineTo(256,l+256/8-2),n.stroke()}}let a=new Nn(t);return a.wrapS=a.wrapT=Ki,a.colorSpace=nn,a.anisotropy=8,a}var ku=i=>Kp[i]||(Kp[i]=g1(i)),Hu=(()=>{let i=new Uint8Array([104,138,172,206,236,255]),e=new vs(i,6,1,wr);return e.minFilter=e.magFilter=Kt,e.generateMipmaps=!1,e.needsUpdate=!0,e})();function em(i,e,t,n,s){let r=i.attributes.uv,a=[[n,t],[n,t],[e,n],[e,n],[e,t],[e,t]];for(let o=0;o<6;o++)for(let l=0;l<4;l++){let c=o*4+l;r.setXY(c,r.getX(c)*a[o][0]*s,r.getY(c)*a[o][1]*s)}r.needsUpdate=!0}function tm(i,e,t){let n=Object.assign({color:i,gradientMap:Hu},t||{});e&&(n.map=ku(e));let s=new Ss(n);return s.userData.kind=e||null,s}function nm(){let i=document.createElement("div");i.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:4;background:radial-gradient(ellipse at 50% 45%,rgba(0,0,0,0) 55%,rgba(24,20,56,.5) 100%)",document.body.appendChild(i)}var yt=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),Gu=(i,e,t)=>i+(e-i)*t,xt=i=>document.getElementById(i);function en(i){let e=i>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var ce=4.2,Ya=(i,e)=>{i._t!==e&&(i._t=e,i.textContent=e)},Ac=(i,e,t)=>{let n=document.createElement("canvas");return n.width=i,n.height=e,t(n.getContext("2d"),i,e),new Nn(n)},Mt,Ps;function im(){Mt=Ac(128,128,i=>{let e=i.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.5)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,128,128)}),Ps=Ac(128,128,i=>{for(let e=0;e<9;e++){let t=40+Math.random()*48,n=44+Math.random()*40,s=18+Math.random()*18,r=i.createRadialGradient(t,n,0,t,n,s);r.addColorStop(0,"rgba(255,255,255,.5)"),r.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=r,i.fillRect(0,0,128,128)}})}var _t=(i,e,t,n,s)=>{let r=new da(new pr({map:i,color:e,transparent:!0,opacity:n==null?1:n,depthWrite:!1,blending:s?Ui:ss}));return r.scale.set(t,t,1),r};var it={started:!1,rainOn:!1,T:0},Xt={},Rc=[],Xn=xt("c"),On=new Sc({canvas:Xn,antialias:!0,powerPreference:"high-performance"});On.setPixelRatio(Math.min(devicePixelRatio||1,1.5));On.shadowMap.enabled=!0;On.shadowMap.type=Il;On.shadowMap.autoUpdate=!1;On.shadowMap.needsUpdate=!0;var Ge=new la;Ge.fog=new oa(new Be("#e3a9a0"),40,240);var xn=new cn(50,1,.1,900);function Cc(){let i=innerWidth,e=innerHeight;On.setSize(i,e,!1),On.shadowMap.needsUpdate=!0,xn.aspect=i/e,xn.fov=i/e<1.15?66:50,xn.updateProjectionMatrix()}addEventListener("resize",Cc);Cc();var rm=[["Piso","Floor","\u5E8A"],["Escalera","Stairs","\u968E\u6BB5"],["Barandal laqueado","Lacquered railing","\u6F06\u306E\u624B\u3059\u308A"],["Tejado","Tiled roof","\u74E6\u5C4B\u6839"],["Lucernario","Skylight","\u5929\u7A93"],["Shoji","Shoji screen","\u969C\u5B50"],["Librero","Bookshelf","\u672C\u68DA"],["Fut\xF3n","Futon","\u5E03\u56E3"],["Farol de papel","Paper lantern","\u7D19\u306E\u884C\u706F"],["Farolillos","Paper lanterns","\u63D0\u706F"],["Pergamino","Hanging scroll","\u639B\u3051\u8EF8"],["Bons\xE1is","Bonsai","\u76C6\u683D"],["Nichos de piedra","Stone niches","\u77F3\u306E\u304F\u307C\u307F"]],x1=[["Cepillo ancho","Wide brush","\u5E45\u5E83\u30D6\u30E9\u30B7"],["Limpias con un cepillo m\xE1s grande","You clean with a bigger brush","\u5927\u304D\u306A\u30D6\u30E9\u30B7\u3067\u6383\u9664\u3067\u304D\u307E\u3059"],["Mochila de herramientas","Tool backpack","\u9053\u5177\u30EA\u30E5\u30C3\u30AF"],["Ganas 10% m\xE1s de tablas al limpiar","You earn 10% more planks when cleaning","\u6383\u9664\u3067\u5F97\u3089\u308C\u308B\u677F\u304C10%\u5897\u3048\u307E\u3059"],["Farol de mano","Hand lantern","\u624B\u6301\u3061\u30E9\u30F3\u30BF\u30F3"],["Ilumina el \xE1rea mientras limpias","Lights up the area while you clean","\u6383\u9664\u4E2D\u306B\u5468\u308A\u3092\u7167\u3089\u3057\u307E\u3059"],["Cubeta de lluvia","Rain bucket","\u96E8\u306E\u30D0\u30B1\u30C4"],["Suena lluvia suave sobre el techo","Soft rain plays on the roof","\u5C4B\u6839\u306B\u3084\u3055\u3057\u3044\u96E8\u97F3\u304C\u97FF\u304D\u307E\u3059"],["Brasero de carb\xF3n","Charcoal brazier","\u706B\u9262"],["Calor guardado para la noche","Warmth stored for the night","\u591C\u306E\u305F\u3081\u306B\u84C4\u3048\u305F\u306C\u304F\u3082\u308A"],["Papel washi","Washi paper","\u548C\u7D19"],["Entra la luz del atardecer","Sunset light comes in","\u5915\u66AE\u308C\u306E\u5149\u304C\u5DEE\u3057\u8FBC\u307F\u307E\u3059"],["Novela de monta\xF1a","Mountain novel","\u5C71\u306E\u5C0F\u8AAC"],["Un libro para las noches","A book for the evenings","\u591C\u306E\u305F\u3081\u306E\u4E00\u518A"],["Manta tejida","Woven blanket","\u624B\u7DE8\u307F\u306E\u30D6\u30E9\u30F3\u30B1\u30C3\u30C8"],["Para las noches fr\xEDas","For cold nights","\u5BD2\u3044\u591C\u306E\u305F\u3081\u306B"],["Mecha de aceite","Oil wick","\u6CB9\u306E\u706F\u82AF"],["Una luz amplia sobre la cama","A broad light over the bed","\u30D9\u30C3\u30C9\u3092\u5E83\u304F\u7167\u3089\u3059\u5149"],["Farolillos de colores","Colored lanterns","\u8272\u3068\u308A\u3069\u308A\u306E\u63D0\u706F"],["Las luces se vuelven de colores","The lights turn colorful","\u30E9\u30A4\u30C8\u304C\u8272\u3068\u308A\u3069\u308A\u306B\u306A\u308A\u307E\u3059"],["Pincel de tinta sumi-e","Sumi-e ink brush","\u58A8\u7D75\u306E\u7B46"],["Un recuerdo de la monta\xF1a","A memory of the mountain","\u5C71\u306E\u601D\u3044\u51FA"],["Semillas de lavanda","Lavender seeds","\u30E9\u30D9\u30F3\u30C0\u30FC\u306E\u7A2E"],["Huele a campo","Smells like the countryside","\u91CE\u539F\u306E\u9999\u308A\u304C\u3057\u307E\u3059"],["Luci\xE9rnagas en frasco","Fireflies in a jar","\u74F6\u306E\u4E2D\u306E\u30DB\u30BF\u30EB"],["M\xE1s luci\xE9rnagas afuera","More fireflies outside","\u5916\u306B\u3082\u3063\u3068\u30DB\u30BF\u30EB\u304C\u98DB\u3073\u307E\u3059"]],am=[["el piso","the floor","\u5E8A"],["la terraza y la escalera","the terrace and the stairs","\u30C6\u30E9\u30B9\u3068\u968E\u6BB5"],["el interior","the interior","\u5BA4\u5185"],["el techo y los nichos","the roof and the niches","\u5C4B\u6839\u3068\u58C1\u306E\u304F\u307C\u307F"]];UX.add(rm);UX.add(x1);UX.add(am);UX.add([["Caba\xF1a 3D","Cabin 3D","\u30AD\u30E3\u30D3\u30F3 3D"],["prototipo","prototype","\u30D7\u30ED\u30C8\u30BF\u30A4\u30D7"],["Caba\xF1a 3D \xB7 prototipo","Cabin 3D \xB7 prototype","\u30AD\u30E3\u30D3\u30F3 3D \xB7 \u30D7\u30ED\u30C8\u30BF\u30A4\u30D7"],["Una caba\xF1a de madera y piedra en lo alto de un acantilado, de noche. L\xEDmpiala y rep\xE1rala poco a poco, sin prisa.","A cabin of wood and stone high on a cliff, at night. Clean and repair it little by little, with no rush.","\u5D16\u306E\u4E0A\u306B\u305F\u305F\u305A\u3080\u3001\u6728\u3068\u77F3\u306E\u5C0F\u3055\u306A\u5C0F\u5C4B\u3002\u591C\u306E\u9759\u3051\u3055\u306E\u4E2D\u3001\u6025\u304C\u305A\u5C11\u3057\u305A\u3064\u6383\u9664\u3057\u3066\u76F4\u3057\u3066\u3044\u304D\u307E\u3057\u3087\u3046\u3002"],["Arrastra sobre la suciedad para fregarla y ganar tablas.","Drag over the grime to scrub it and earn planks.","\u6C5A\u308C\u306E\u4E0A\u3092\u306A\u305E\u3063\u3066\u3053\u3059\u308A\u3001\u677F\u3092\u96C6\u3081\u307E\u3057\u3087\u3046\u3002"],["Toca un objeto limpio (o su bot\xF3n de abajo) para repararlo.","Tap a clean object (or its button below) to repair it.","\u304D\u308C\u3044\u306B\u306A\u3063\u305F\u3082\u306E\u3092\u30BF\u30C3\u30D7\uFF08\u307E\u305F\u306F\u4E0B\u306E\u30DC\u30BF\u30F3\uFF09\u3067\u4FEE\u7406\u3057\u307E\u3059\u3002"],["Arrastra el fondo para girar; pellizca o usa la rueda para acercar.","Drag the background to rotate; pinch or use the wheel to zoom.","\u80CC\u666F\u3092\u30C9\u30E9\u30C3\u30B0\u3067\u56DE\u8EE2\u3001\u30D4\u30F3\u30C1\u3084\u30DB\u30A4\u30FC\u30EB\u3067\u30BA\u30FC\u30E0\u3057\u307E\u3059\u3002"],["Mejor con auriculares. Tu avance se guarda en este dispositivo.","Best with headphones. Your progress is saved on this device.","\u30D8\u30C3\u30C9\u30DB\u30F3\u63A8\u5968\u3002\u9032\u307F\u5177\u5408\u306F\u3053\u306E\u7AEF\u672B\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002"],["Entrar a la caba\xF1a","Enter the cabin","\u5C0F\u5C4B\u306B\u5165\u308B"],["\u2190 Men\xFA","\u2190 Menu","\u2190 \u30E1\u30CB\u30E5\u30FC"],["Arrastra sobre la suciedad para limpiar \xB7 arrastra el fondo para girar \xB7 pellizca para acercar","Drag over the grime to clean \xB7 drag the background to rotate \xB7 pinch to zoom","\u6C5A\u308C\u3092\u306A\u305E\u3063\u3066\u6383\u9664 \xB7 \u80CC\u666F\u3092\u30C9\u30E9\u30C3\u30B0\u3067\u56DE\u8EE2 \xB7 \u30D4\u30F3\u30C1\u3067\u30BA\u30FC\u30E0"],["Inhala","Inhale","\u5438\u3063\u3066"],["Gracias por respirar","Thank you for breathing","\u547C\u5438\u3057\u3066\u304F\u308C\u3066\u3042\u308A\u304C\u3068\u3046"],["Sost\xE9n","Hold","\u6B62\u3081\u3066"],["Exhala","Exhale","\u5410\u3044\u3066"],["Acercar","Zoom in","\u30BA\u30FC\u30E0\u30A4\u30F3"],["Alejar","Zoom out","\u30BA\u30FC\u30E0\u30A2\u30A6\u30C8"],["Centrar vista","Center view","\u8996\u70B9\u3092\u623B\u3059"],["Esencial","Essential","\u5FC5\u9808"],["Funcional","Functional","\u6A5F\u80FD"],["Decoraci\xF3n","Decoration","\u98FE\u308A"],["Colecci\xF3n","Collection","\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3"],["Vac\xEDa. Cada reparaci\xF3n te da un objeto.","Empty. Every repair gives you an item.","\u7A7A\u3063\u307D\u3002\u4FEE\u7406\u3059\u308B\u305F\u3073\u306B\u30A2\u30A4\u30C6\u30E0\u304C\u3082\u3089\u3048\u307E\u3059\u3002"],["Reparado","Repaired","\u4FEE\u7406\u6E08\u307F"],["Tu caba\xF1a est\xE1 lista. Buen trabajo.","Your cabin is ready. Nice work.","\u5C0F\u5C4B\u304C\u5B8C\u6210\u3057\u307E\u3057\u305F\u3002\u3088\u304F\u3067\u304D\u307E\u3057\u305F\u3002"],["Limpia m\xE1s esa zona antes de repararla","Clean that area more before repairing it","\u4FEE\u7406\u3059\u308B\u524D\u306B\u3001\u3082\u3046\u5C11\u3057\u305D\u306E\u5834\u6240\u3092\u6383\u9664\u3057\u307E\u3057\u3087\u3046"],["Ronronea\u2026","Purring\u2026","\u30B4\u30ED\u30B4\u30ED\u2026"],["Caba\xF1a reiniciada","Cabin reset","\u5C0F\u5C4B\u3092\u30EA\u30BB\u30C3\u30C8\u3057\u307E\u3057\u305F"],["Llevas un buen rato aqu\xED: respira hondo y estira un poco los hombros.","You have been here a while: take a deep breath and stretch your shoulders a little.","\u3057\u3070\u3089\u304F\u904A\u3093\u3067\u3044\u307E\u3059\u306D\u3002\u6DF1\u547C\u5438\u3057\u3066\u3001\u80A9\u3092\u8EFD\u304F\u4F38\u3070\u3057\u307E\u3057\u3087\u3046\u3002"],["\xBFReiniciar la caba\xF1a desde cero?","Restart the cabin from scratch?","\u5C0F\u5C4B\u3092\u6700\u521D\u304B\u3089\u3084\u308A\u76F4\u3057\u307E\u3059\u304B\uFF1F"],["Los farolillos suben al cielo","Lanterns drift up into the sky","\u30E9\u30F3\u30BF\u30F3\u304C\u591C\u7A7A\u3078\u6607\u3063\u3066\u3044\u304D\u307E\u3059"],["Ciudad a lo lejos","Distant city","\u9060\u304F\u306E\u8857"],["Autos a lo lejos","Cars far away","\u9060\u304F\u306E\u8ECA"],["Tren a lo lejos","Distant train","\u9060\u304F\u306E\u96FB\u8ECA"],["Perro a lo lejos","Distant dog","\u9060\u304F\u306E\u72AC"],["Tranv\xEDa a lo lejos","Distant tram","\u9060\u304F\u306E\u8DEF\u9762\u96FB\u8ECA"],["Crepitar del fuego","Crackling fire","\u85AA\u306E\u306F\u305C\u308B\u97F3"],["Campanita","Little bell","\u5C0F\u3055\u306A\u9234"],["Lluvia en el techo","Rain on the roof","\u5C4B\u6839\u306E\u96E8\u97F3"],["Croar de ranas","Frogs croaking","\u30AB\u30A8\u30EB\u306E\u9CF4\u304D\u58F0"],["Murmullo de agua","Water murmur","\u6C34\u306E\u305B\u305B\u3089\u304E"],["Maullido suave","Soft meow","\u3084\u3055\u3057\u3044\u9CF4\u304D\u58F0"]]);var Vu=(i,e)=>{let t=y1.get(i);return t?t[e]:i},y1=new Map(rm.concat(am).map(i=>[i[0].toLowerCase(),[i[0],i[1].toLowerCase(),i[2]]])),sm=(i,e)=>i.split(", ").map(t=>Vu(t,e)).join(e===1?", ":"\u3001");UX.rx([[/^Tablas: (\d+)$/,(i,e)=>e===1?"Planks: "+i[1]:"\u677F: "+i[1]],[/^Necesita: (.+)$/,(i,e)=>(e===1?"Needs: ":"\u5FC5\u8981: ")+sm(i[1],e)],[/^Limpia la zona · (\d+)%$/,(i,e)=>(e===1?"Clean the area \xB7 ":"\u30A8\u30EA\u30A2\u3092\u6383\u9664 \xB7 ")+i[1]+"%"],[/^Faltan (\d+) tablas$/,(i,e)=>e===1?i[1]+" more planks needed":"\u3042\u3068\u677F"+i[1]+"\u679A"],[/^Listo · (\d+) tablas$/,(i,e)=>e===1?"Ready \xB7 "+i[1]+" planks":"\u6E96\u5099OK \xB7 \u677F"+i[1]+"\u679A"],[/^Faltan (\d+) tablas\. Sigue limpiando\.$/,(i,e)=>e===1?i[1]+" more planks needed. Keep cleaning.":"\u3042\u3068\u677F"+i[1]+"\u679A\u3002\u6383\u9664\u3092\u7D9A\u3051\u307E\u3057\u3087\u3046\u3002"],[/^Primero repara: (.+)$/,(i,e)=>(e===1?"Repair first: ":"\u5148\u306B\u4FEE\u7406: ")+sm(i[1],e)],[/^(.+) reparado\. Ganaste: (.+)$/,(i,e,t)=>e===1?t(i[1])+" repaired. You got: "+t(i[2]):t(i[1])+"\u3092\u4FEE\u7406\u3057\u307E\u3057\u305F\u3002\u7372\u5F97: "+t(i[2])],[/^(.+) ya está reparado$/,(i,e,t)=>e===1?t(i[1])+" is already repaired":t(i[1])+"\u306F\u3082\u3046\u4FEE\u7406\u6E08\u307F\u3067\u3059"],[/^Siguiente: (repara|limpia) (.+?)( \(toca su botón\))?$/,(i,e)=>{let t=i[1]==="repara",n=Vu(i[2],e);return e===1?"Next: "+(t?"repair":"clean")+" the "+n+(i[3]?" (tap its button)":""):"\u6B21: "+n+"\u3092"+(t?"\u4FEE\u7406":"\u6383\u9664")+(i[3]?"\uFF08\u30DC\u30BF\u30F3\u3092\u30BF\u30C3\u30D7\uFF09":"")}],[/^Mientras no estabas, la humedad volvió a ensuciar (.+)$/,(i,e)=>{let t=Vu(i[1],e);return e===1?"While you were away, damp dirtied "+t+" again.":"\u7559\u5B88\u306E\u3042\u3044\u3060\u306B\u6E7F\u6C17\u3067\u3001"+t+"\u304C\u307E\u305F\u6C5A\u308C\u3066\u3057\u307E\u3044\u307E\u3057\u305F\u3002"}]]);try{document.title=UX.tr(document.title)}catch{}var om=["Esencial","Funcional","Decoraci\xF3n"],tn=[{id:"piso",tier:0,name:"Piso",cost:10,focus:[1.5,ce,1],reward:["Cepillo ancho","Limpias con un cepillo m\xE1s grande"]},{id:"escalera",tier:0,name:"Escalera",cost:14,needs:["piso"],focus:[12,1,2.8],reward:["Mochila de herramientas","Ganas 10% m\xE1s de tablas al limpiar"]},{id:"barandal",tier:0,name:"Barandal laqueado",cost:14,needs:["piso"],focus:[2.5,ce+.6,3.9],reward:["Farol de mano","Ilumina el \xE1rea mientras limpias"]},{id:"techo",tier:0,name:"Tejado",cost:24,needs:["piso"],focus:[1.5,8.2,.5],reward:["Cubeta de lluvia","Suena lluvia suave sobre el techo"]},{id:"panel",tier:1,name:"Lucernario",cost:20,needs:["techo"],focus:[4.4,8.4,.9],reward:["Brasero de carb\xF3n","Calor guardado para la noche"]},{id:"ventana",tier:1,name:"Shoji",cost:16,needs:["techo"],focus:[2.4,6.1,-2.8],reward:["Papel washi","Entra la luz del atardecer"]},{id:"librero",tier:1,name:"Librero",cost:14,needs:["piso"],focus:[-1.4,5.6,-2.5],reward:["Novela de monta\xF1a","Un libro para las noches"]},{id:"cama",tier:1,name:"Fut\xF3n",cost:14,needs:["techo"],focus:[4.5,5,-1.6],reward:["Manta tejida","Para las noches fr\xEDas"]},{id:"lampara",tier:2,name:"Farol de papel",cost:10,needs:["panel"],focus:[1.5,7,-1],reward:["Mecha de aceite","Una luz amplia sobre la cama"]},{id:"luces",tier:2,name:"Farolillos",cost:14,needs:["panel","barandal"],focus:[1.5,7,2.5],reward:["Farolillos de colores","Las luces se vuelven de colores"]},{id:"cuadro",tier:2,name:"Pergamino",cost:10,needs:["librero"],focus:[.55,6.4,-2.8],reward:["Pincel de tinta sumi-e","Un recuerdo de la monta\xF1a"]},{id:"plantas",tier:2,name:"Bons\xE1is",cost:8,needs:["barandal"],focus:[6.9,ce+.6,3],reward:["Semillas de lavanda","Huele a campo"]},{id:"nichos",tier:2,name:"Nichos de piedra",cost:12,needs:["lampara"],focus:[-9.8,1,5.5],reward:["Luci\xE9rnagas en frasco","M\xE1s luci\xE9rnagas afuera"]}];var Wu=new Map,lm=new Map,Za=(i,e)=>i.forEach(t=>lm.set(t.toLowerCase(),e));Za(["#dcae92","#c89479","#d4a98c","#c49a7d","#d2a58a"],"wood");Za(["#b0806a","#d9b995","#a1918c","#dcbc98","#d4b290","#e0c19e","#a8978c","#9d8c82","#b0a095","#ecc9ae","#f1d3bb","#e0c2a2","#b3a398","#8f6f66","#9a7a70","#8e7f7a","#f2d6c0","#e7c9ae"],"woodV");Za(["#a9a4c6","#8f8ab0","#aaa5c8","#9a95bb","#b4afd2","#8e89b0"],"stone");Za(["#e7a293","#9b8b88"],"shingle");Za(["#9fb9a0"],"grass");var _1={"#dcae92":"#cfa578","#c89479":"#b98b5f","#d4a98c":"#c79a6e","#c49a7d":"#b2865a","#d2a58a":"#c29868","#b0806a":"#5a3d2e","#8f6f66":"#4b342a","#9a7a70":"#573d31","#d9b995":"#dcc194","#dcbc98":"#dcc194","#d4b290":"#d3b784","#e0c19e":"#e2c99d","#e0c2a2":"#dcc194","#ecc9ae":"#8e3d2e","#f1d3bb":"#a14a38","#e7c9ae":"#d9bf92","#f2d6c0":"#e6d3ae","#f6c3b4":"#707c96","#e7a293":"#4f596f","#9b8b88":"#3e4659","#a9a4c6":"#aaa59d","#8f8ab0":"#8c877f","#aaa5c8":"#b1aca3","#9a95bb":"#9b968d","#b4afd2":"#bdb8ae","#8e89b0":"#837e76","#e6a091":"#2f4a74","#7fc3bd":"#9a6a3c","#d9a9cb":"#6a7f58","#a6cf92":"#c9a14a","#a1918c":"#8d7f74"},we=(i,e)=>{let t=i+(e?JSON.stringify(e):"");return Wu.has(t)||Wu.set(t,tm(_1[String(i).toLowerCase()]||i,lm.get(String(i).toLowerCase()),Object.assign({flatShading:!0},e||{}))),Wu.get(t)};function re(i,e,t,n,s,r,a,o,l){let c=typeof n=="string"?we(n,l):n,h=new bt(i,e,t),d=c.userData&&c.userData.kind;d&&em(h,i,e,t,Qp[d]);let u=new oe(h,c);return u.position.set(s,r,a),o&&o.add(u),u}var v1=["#8cbb78","#7faa70","#9a92b6"],Xu;function b1(i,e,t,n,s,r){r=r||{},Xu||(Xu=new Ft(1,0));let a=new oe(Xu,we(r.c||v1[Math.random()*3|0]));return a.position.set(e,t,n),a.rotation.x=r.rx||0,a.userData={item:i.id,base:r.wall?[s,s,s*.3]:[s,s*.28,s],s:1},a.scale.set(...a.userData.base),i.g.add(a),i.blobs.push(a),a}function Sn(i,e,t,n,s,r,a){let o=en(t);for(let l=0;l<e;l++){let c=n(o);b1(i,c[0],c[1],c[2],s+o()*(r-s),a)}}function Oi(i){let e=i.userData.s,t=i.userData.base;i.scale.set(t[0]*e,t[1]*e,t[2]*e),i.visible=e>.04}var qu="cabana3d-v1",Ja=.55,M1=200,ie={repaired:{},spent:0,best:0,done:!1,decor:{},own:{},mem:0,notes:[],vis:{},ltr:{},cnt:{}},Yu=i=>tn.find(e=>e.id===i),S1=()=>M1*(ie.repaired.escalera?1.1:1),Ls=()=>Math.floor(ie.best*S1())-ie.spent,Ds=()=>tn.filter(i=>ie.repaired[i.id]).length,Ic=i=>Yu(i).name.toLowerCase(),hs=i=>(i.needs||[]).filter(e=>!ie.repaired[e]);function Pr(){tn.forEach(i=>{let e=Xt[i.id],t=!!ie.repaired[i.id];e.b.visible=!t,e.f.visible=t}),it.rainOn=!!ie.repaired.techo,nt.rain(it.rainOn),On.shadowMap.needsUpdate=!0}function Bn(){try{let i={};Object.values(Xt).forEach(e=>i[e.id]=e.blobs.map(t=>+t.userData.s.toFixed(2))),localStorage.setItem(qu,JSON.stringify({r:ie.repaired,s:ie.spent,b:ie.best,d:ie.done,t:Date.now(),bl:i,dc:ie.decor,ow:ie.own,me:ie.mem,nt:ie.notes,vv:ie.vis,lt:ie.ltr,ct:ie.cnt}))}catch{}}var E1=[[["piso"],2,10,"el piso"],[["escalera","barandal","plantas","luces"],10,26,"la terraza y la escalera"],[["librero","cama","ventana","cuadro","lampara"],26,50,"el interior"],[["techo","panel","nichos"],50,80,"el techo y los nichos"]];function cm(i){let e=null;try{e=JSON.parse(localStorage.getItem(qu)||"null")}catch{}if(!e)return;ie.repaired=e.r||{},ie.spent=e.s||0,ie.best=e.b||0,ie.done=!!e.d,ie.decor=e.dc||{},ie.own=e.ow||{},ie.mem=e.me||0,ie.notes=e.nt||[],ie.vis=e.vv||{},ie.ltr=e.lt||{},ie.cnt=e.ct||{},Object.values(Xt).forEach(r=>{let a=(e.bl||{})[r.id];a&&r.blobs.forEach((o,l)=>{a[l]!=null&&(o.userData.s=a[l])})});let t=(()=>{try{return localStorage.getItem("ux-wear")==="1"}catch{return!1}})(),n=e.t&&t?(Date.now()-e.t)/36e5:0,s=null;E1.forEach(([r,a,o,l])=>{let c=yt((n-a)/(o-a));c>0&&(r.forEach(h=>Xt[h].blobs.forEach(d=>{d.userData.s=Math.max(d.userData.s,c*.9)})),s=l)}),Object.values(Xt).forEach(r=>r.blobs.forEach(Oi)),s&&setTimeout(()=>i("Mientras no estabas, la humedad volvi\xF3 a ensuciar "+s),1500)}function hm(){try{localStorage.removeItem(qu)}catch{}ie.repaired={},ie.spent=0,ie.best=0,ie.done=!1,ie.decor={},ie.own={},ie.mem=0,ie.notes=[],ie.vis={},ie.ltr={},ie.cnt={};try{window.__habReset&&window.__habReset()}catch{}Object.values(Xt).forEach(i=>i.blobs.forEach(e=>{e.userData.s=1,Oi(e)})),Pr()}var Ot={porchL:[],bulbs:[],nichoGlow:[],lampL:null,lampGlow:null,winL:null,handL:null},En={lamp:0,lant:0,str:0,nich:0,moon:0,smoke:0,rain:0};function um(){let i=new Pa(15124172,8020056,1.1);Ge.add(i);let e=new Mr(16760972,1.2);e.position.set(-12,18,16),e.target.position.set(4,4,0),Ge.add(e,e.target),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),Object.assign(e.shadow.camera,{left:-20,right:22,top:16,bottom:-14,near:1,far:70}),e.shadow.bias=-6e-4,e.shadow.normalBias=.04,e.shadow.radius=3;let t=new Mr(16765616,.3);t.position.set(14,6,14),Ge.add(t)}function dm(){Ot.lampL=new Ni(16763018,0,14,1.4),Ot.lampL.position.set(1.5,7.2,-.6),Ge.add(Ot.lampL),Ot.lampGlow=_t(Mt,16763018,4.5,0,!0),Ot.lampGlow.position.set(1.5,7.15,-1),Ge.add(Ot.lampGlow)}function fm(){Ot.handL=new Ni(16766880,0,9,1.6),Ge.add(Ot.handL)}function pm(){Ot.winL=new Ni(16767400,0,9,1.5),Ot.winL.position.set(2.4,6.2,-1.6),Ge.add(Ot.winL)}function mm(i){let e=it.T,t=ie.repaired,n={lamp:t.lampara&&t.panel?1:0,lant:t.techo?1:0,str:t.luces?1:0,nich:t.nichos?1:0,moon:t.ventana?1:0,smoke:t.techo?1:0,rain:t.techo?1:0};for(let r in En)En[r]+=(n[r]-En[r])*Math.min(1,i*1.6);let s=.93+.05*Math.sin(e*9)+.03*Math.sin(e*23);Ot.lampL.intensity=2.6*En.lamp*s,Ot.lampGlow.material.opacity=.55*En.lamp*s,Ot.porchL.forEach((r,a)=>{r.L.intensity=1.6*En.lant*(s+.02*a),r.gl.material.opacity=.7*En.lant*s,r.body.material.emissiveIntensity=En.lant}),Ot.bulbs.forEach((r,a)=>{r.material.opacity=En.str*(.55+.15*Math.sin(e*2+a))}),Ot.nichoGlow.forEach((r,a)=>{r.material.opacity=.7*En.nich*(.8+.2*Math.sin(e*1.6+a*2))}),Ot.winL.intensity=1.2*En.moon}var T1=["es","en","ja"],gm="es";try{let i=localStorage.getItem("rio3d-lang");gm=T1.includes(i)?i:"es"}catch{}var Lr=()=>gm;var w1=[["\u2190 Men\xFA","\u2190 Menu","\u2190 \u30E1\u30CB\u30E5\u30FC"],["Linternas","Lanterns","\u30E9\u30F3\u30BF\u30F3"],["m \xB7 Lugares","m \xB7 Places","m \xB7 \u5834\u6240"],["Vista 1\xAA","View 1st","\u4E00\u4EBA\u79F0"],["Vista 3\xAA","View 3rd","\u4E09\u4EBA\u79F0"],["M\xE1s","More","\u305D\u306E\u4ED6"],["Pausa","Pause","\u4E00\u6642\u505C\u6B62"],["Continuar","Resume","\u518D\u958B"],["Foto","Photo","\u5199\u771F"],["Diario","Journal","\u65E5\u8A18"],["Ajustes","Settings","\u8A2D\u5B9A"],["Reiniciar","Restart","\u6700\u521D\u304B\u3089"],["Sonido: s\xED","Sound: on","\u97F3: \u30AA\u30F3"],["Sonido: no","Sound: off","\u97F3: \u30AA\u30D5"],["Amanecer","Dawn","\u591C\u660E\u3051"],["D\xEDa","Day","\u663C"],["Atardecer","Dusk","\u5915\u66AE\u308C"],["Noche","Night","\u591C"],["Madrugada","Predawn","\u660E\u3051\u65B9"],["La corriente te lleva \xB7 mant\xE9n presionado y desliza a los lados para dirigir","The current carries you \xB7 press and slide sideways to steer","\u6D41\u308C\u306B\u8EAB\u3092\u307E\u304B\u305B\u3066 \xB7 \u9577\u62BC\u3057\u3057\u305F\u307E\u307E\u5DE6\u53F3\u306B\u30B9\u30E9\u30A4\u30C9\u3057\u3066\u64CD\u4F5C"],["Navega por un r\xEDo de niebla, en primera o tercera persona. Sin prisa y sin puntaje: la corriente te lleva y t\xFA solo diriges la canoa.","Drift down a misty river in first or third person. No rush, no score: the current carries you and you just steer the canoe.","\u9727\u306E\u5DDD\u3092\u4E00\u4EBA\u79F0\u307E\u305F\u306F\u4E09\u4EBA\u79F0\u3067\u9032\u307F\u307E\u3059\u3002\u6025\u3050\u5FC5\u8981\u3082\u5F97\u70B9\u3082\u3042\u308A\u307E\u305B\u3093\u3002\u6D41\u308C\u304C\u904B\u3093\u3067\u304F\u308C\u308B\u306E\u3067\u3001\u30AB\u30CC\u30FC\u306E\u5411\u304D\u3060\u3051\u64CD\u4F5C\u3057\u3066\u304F\u3060\u3055\u3044\u3002"],["Dirigir:","Steer:","\u64CD\u4F5C:"],["mant\xE9n presionado y mueve el dedo o el rat\xF3n a los lados (o usa las flechas A / D).","press and move your finger or mouse sideways (or use the A / D arrow keys).","\u9577\u62BC\u3057\u3057\u305F\u307E\u307E\u6307\u3084\u30DE\u30A6\u30B9\u3092\u5DE6\u53F3\u306B\u52D5\u304B\u3057\u307E\u3059\uFF08A / D \u30AD\u30FC\u3082\u4F7F\u3048\u307E\u3059\uFF09\u3002"],["Mejor con auriculares: el sonido es espacial.","Best with headphones: the sound is spatial.","\u30D8\u30C3\u30C9\u30DB\u30F3\u63A8\u5968\uFF1A\u7ACB\u4F53\u97F3\u97FF\u3067\u3059\u3002"],["Entrar al r\xEDo","Enter the river","\u5DDD\u306B\u5165\u308B"],["Empezar desde el principio","Start from the beginning","\u6700\u521D\u304B\u3089\u59CB\u3081\u308B"],["Tono suave","Soft tone","\u3084\u308F\u3089\u304B\u3044\u97F3"],["Suaviza los sonidos agudos","Softens high-pitched sounds","\u9AD8\u3044\u97F3\u3092\u3084\u308F\u3089\u3052\u307E\u3059"],["Dormir","Sleep","\u304A\u3084\u3059\u307F"],["Baja el sonido y la luz poco a poco","Gradually lowers sound and light","\u97F3\u3068\u660E\u304B\u308A\u3092\u5C11\u3057\u305A\u3064\u4E0B\u3052\u307E\u3059"],["Castillo de la Garza Blanca","White Heron Castle","\u767D\u9DFA\u57CE"],["Rugido del drag\xF3n","Dragon roar","\u7ADC\u306E\u5486\u54EE"],["El drag\xF3n anuncia el Castillo de la Garza Blanca","The dragon heralds White Heron Castle","\u7ADC\u304C\u767D\u9DFA\u57CE\u306E\u5230\u6765\u3092\u544A\u3052\u307E\u3059"],["Puente de madera","Wooden bridge","\u6728\u306E\u6A4B"],["Torii sobre el agua","Torii over the water","\u6C34\u4E0A\u306E\u9CE5\u5C45"],["Aldea de farolillos","Lantern village","\u3061\u3087\u3046\u3061\u3093\u306E\u6751"],["Jard\xEDn de sakura","Sakura garden","\u685C\u306E\u5EAD"],["Ca\xF1averal de las garzas","Heron reedbed","\u30B5\u30AE\u306E\u8466\u539F"],["Templo de la campana","Bell temple","\u9418\u306E\u5BFA"],["Cascadita de musgo","Mossy waterfall","\u82D4\u306E\u5C0F\u3055\u306A\u6EDD"],["Casa de t\xE9","Tea house","\u8336\u5C4B"],["Bosque de bamb\xFA","Bamboo forest","\u7AF9\u6797"],["Estanque de lotos","Lotus pond","\u84EE\u306E\u6C60"],["Jard\xEDn de hortensias","Hydrangea garden","\u3042\u3058\u3055\u3044\u306E\u5EAD"],["Jard\xEDn de arces","Maple garden","\u3082\u307F\u3058\u306E\u5EAD"],["Jard\xEDn de ciruelos","Plum garden","\u6885\u306E\u5EAD"],["Primavera","Spring","\u6625"],["Verano","Summer","\u590F"],["Oto\xF1o","Autumn","\u79CB"],["Invierno","Winter","\u51AC"],["Cada linterna es una nota. Sigue el r\xEDo a tu ritmo.","Every lantern is a note. Follow the river at your own pace.","\u30E9\u30F3\u30BF\u30F3\u306F\u3072\u3068\u3064\u3072\u3068\u3064\u304C\u97F3\u3067\u3059\u3002\u81EA\u5206\u306E\u30DA\u30FC\u30B9\u3067\u5DDD\u3092\u9032\u307F\u307E\u3057\u3087\u3046\u3002"],["De vuelta al inicio del r\xEDo","Back at the start of the river","\u5DDD\u306E\u59CB\u307E\u308A\u306B\u623B\u308A\u307E\u3057\u305F"],["Empieza una llovizna suave","A soft drizzle begins","\u3084\u3055\u3057\u3044\u9727\u96E8\u304C\u964D\u308A\u306F\u3058\u3081\u307E\u3057\u305F"],["Las garzas alzan el vuelo a tu paso","Herons take flight as you pass","\u901A\u308A\u904E\u304E\u308B\u3068\u30B5\u30AE\u304C\u98DB\u3073\u7ACB\u3061\u307E\u3059"],["Llevas un buen rato en el r\xEDo: respira hondo y estira un poco los hombros.","You have been on the river a while: breathe deeply and stretch your shoulders.","\u3057\u3070\u3089\u304F\u5DDD\u306B\u3044\u307E\u3059\u306D\u3002\u6DF1\u547C\u5438\u3057\u3066\u3001\u80A9\u3092\u5C11\u3057\u306E\u3070\u3057\u307E\u3057\u3087\u3046\u3002"],["Los peces se acercan a nadar contigo","Fish swim up to keep you company","\u9B5A\u304C\u5BC4\u3063\u3066\u304D\u3066\u4E00\u7DD2\u306B\u6CF3\u304E\u307E\u3059"],["Un pato decide acompa\xF1arte","A duck decides to join you","\u30AB\u30E2\u304C\u3064\u3044\u3066\u304D\u307E\u3059"],["Una lib\xE9lula se pos\xF3 en la proa de tu canoa","A dragonfly landed on the bow of your canoe","\u30C8\u30F3\u30DC\u304C\u30AB\u30CC\u30FC\u306E\u8239\u9996\u306B\u3068\u307E\u308A\u307E\u3057\u305F"],["Festival de linternas: la aldea celebra esta noche","Lantern festival: the village celebrates tonight","\u30E9\u30F3\u30BF\u30F3\u796D\u308A\uFF1A\u4ECA\u591C\u3001\u6751\u304C\u304A\u795D\u3044\u3057\u3066\u3044\u307E\u3059"],["Arrastra para mirar \xB7 pellizca para acercar","Drag to look \xB7 pinch to zoom","\u30C9\u30E9\u30C3\u30B0\u3067\u898B\u56DE\u3059 \xB7 \u30D4\u30F3\u30C1\u3067\u62E1\u5927"],["A\xFAn por descubrir","Yet to discover","\u672A\u767A\u898B"],["Sigue r\xEDo abajo","Keep going downstream","\u5DDD\u3092\u4E0B\u308A\u307E\u3057\u3087\u3046"],["Vuelve a pasar para fotografiarlo","Pass by again to photograph it","\u3082\u3046\u4E00\u5EA6\u901A\u3063\u3066\u64AE\u5F71\u3057\u307E\u3057\u3087\u3046"],["Las luces sobre el agua son linternas: pasa cerca para recogerlas","The lights on the water are lanterns: pass close to collect them","\u6C34\u9762\u306E\u5149\u306F\u30E9\u30F3\u30BF\u30F3\u3067\u3059\u3002\u8FD1\u3065\u304F\u3068\u96C6\u3081\u3089\u308C\u307E\u3059"],["Mant\xE9n presionado y desliza a los lados para dirigir la canoa","Press and slide sideways to steer the canoe","\u9577\u62BC\u3057\u3057\u305F\u307E\u307E\u5DE6\u53F3\u306B\u30B9\u30E9\u30A4\u30C9\u3057\u3066\u30AB\u30CC\u30FC\u3092\u64CD\u4F5C\u3057\u307E\u3059"],["Con Foto puedes guardar un momento; con Diario ves tus lugares","Use Photo to keep a moment; use Journal to see your places","\u300C\u5199\u771F\u300D\u3067\u77AC\u9593\u3092\u6B8B\u3057\u3001\u300C\u65E5\u8A18\u300D\u3067\u8A2A\u308C\u305F\u5834\u6240\u3092\u898B\u3089\u308C\u307E\u3059"],["Tu linterna se queda aqu\xED. Vuelve otro d\xEDa y la encontrar\xE1s encendida.","Your lantern stays here. Come back another day and you will find it lit.","\u30E9\u30F3\u30BF\u30F3\u306F\u3053\u3053\u306B\u6B8B\u308A\u307E\u3059\u3002\u307E\u305F\u6765\u308C\u3070\u706F\u3063\u305F\u307E\u307E\u3067\u3059\u3002"],["Salir de foto","Exit photo","\u64AE\u5F71\u3092\u7D42\u4E86"],["Sin filtro","No filter","\u30D5\u30A3\u30EB\u30BF\u30FC\u306A\u3057"],["Natural","Natural","\u30CA\u30C1\u30E5\u30E9\u30EB"],["C\xE1lido","Warm","\u6696\u8272"],["Bruma","Mist","\u9727"],["Tinta","Ink","\u6C34\u58A8"],["Noche azul","Blue night","\u9752\u3044\u591C"],["Hora","Time","\u6642\u523B"],["Zoom","Zoom","\u30BA\u30FC\u30E0"],["Vista","View","\u8996\u70B9"],["Marco","Frame","\u30D5\u30EC\u30FC\u30E0"],["Cerrar","Close","\u9589\u3058\u308B"],["Diario del r\xEDo","River journal","\u5DDD\u306E\u65E5\u8A18"],["\xBFVolver al inicio del r\xEDo?","Go back to the start of the river?","\u5DDD\u306E\u59CB\u307E\u308A\u306B\u623B\u308A\u307E\u3059\u304B\uFF1F"],["Regresas al puente de madera. Conservas tu diario, tus fotos y las linternas que soltaste.","You return to the wooden bridge. You keep your journal, your photos and the lanterns you released.","\u6728\u306E\u6A4B\u306B\u623B\u308A\u307E\u3059\u3002\u65E5\u8A18\u3001\u5199\u771F\u3001\u6D41\u3057\u305F\u30E9\u30F3\u30BF\u30F3\u306F\u305D\u306E\u307E\u307E\u6B8B\u308A\u307E\u3059\u3002"],["Cancelar","Cancel","\u30AD\u30E3\u30F3\u30BB\u30EB"],["Reiniciar recorrido","Restart the trip","\u6700\u521D\u304B\u3089\u3084\u308A\u76F4\u3059"],["Calidad","Quality","\u753B\u8CEA"],["Autom\xE1tica","Automatic","\u81EA\u52D5"],["Alta","High","\u9AD8"],["Media","Medium","\u4E2D"],["Baja (m\xE1s fluida)","Low (smoother)","\u4F4E\uFF08\u306A\u3081\u3089\u304B\uFF09"],["Volumen","Volume","\u97F3\u91CF"],["Estaci\xF3n","Season","\u5B63\u7BC0"],["Cambiarla recarga el r\xEDo","Changing it reloads the river","\u5909\u66F4\u3059\u308B\u3068\u5DDD\u3092\u8AAD\u307F\u8FBC\u307F\u76F4\u3057\u307E\u3059"],["Seg\xFAn la fecha","By date","\u65E5\u4ED8\u306B\u5408\u308F\u305B\u308B"],["Fija","Fixed","\u56FA\u5B9A"],["Idioma","Language","\u8A00\u8A9E"],["Subt\xEDtulos de ambiente","Ambient captions","\u74B0\u5883\u97F3\u306E\u5B57\u5E55"],["Describe los sonidos con texto","Describes sounds as text","\u97F3\u3092\u6587\u5B57\u3067\u8868\u793A\u3057\u307E\u3059"],["Vibraci\xF3n suave","Gentle vibration","\u3084\u3055\u3057\u3044\u632F\u52D5"],["Si tu dispositivo la permite","If your device supports it","\u5BFE\u5FDC\u3057\u3066\u3044\u308B\u7AEF\u672B\u306E\u307F"],["Modo una mano","One-hand mode","\u7247\u624B\u30E2\u30FC\u30C9"],["Botones al alcance del pulgar","Buttons within thumb reach","\u89AA\u6307\u304C\u5C4A\u304F\u4F4D\u7F6E\u306B\u30DC\u30BF\u30F3\u3092\u914D\u7F6E"],["No","Off","\u30AA\u30D5"],["S\xED","On","\u30AA\u30F3"],["Derecha","Right","\u53F3"],["Izquierda","Left","\u5DE6"],["Flauta shakuhachi","Shakuhachi flute","\u5C3A\u516B"],["Campanillas","Wind chimes","\u9234\u306E\u97F3"],["Koto","Koto","\u7434"],["Campana de templo","Temple bell","\u5BFA\u306E\u9418"],["Tambor lejano","Distant drum","\u9060\u304F\u306E\u592A\u9F13"],["Cuac de pato","Duck quack","\u30AB\u30E2\u306E\u9CF4\u304D\u58F0"],["Aleteo de garza","Heron wingbeats","\u30B5\u30AE\u306E\u7FBD\u3070\u305F\u304D"],["Golpe suave de la canoa","Soft knock on the canoe","\u30AB\u30CC\u30FC\u304C\u8EFD\u304F\u3076\u3064\u304B\u308B\u97F3"],["Salpicadura","Splash","\u6C34\u3057\u3076\u304D"],["Fuegos artificiales","Fireworks","\u82B1\u706B"],["Nota de linterna","Lantern note","\u30E9\u30F3\u30BF\u30F3\u306E\u97F3"],["Cascada cercana","Waterfall nearby","\u8FD1\u304F\u306E\u6EDD\u306E\u97F3"],["Lluvia suave","Soft rain","\u3084\u3055\u3057\u3044\u96E8\u97F3"],["Menos movimiento y destellos","Less motion and flashes","\u52D5\u304D\u3068\u5149\u3092\u63A7\u3048\u308B"],["Sin c\xE1maras largas, destellos ni balanceo fuerte","No long camera moves, flashes or strong sway","\u9577\u3044\u30AB\u30E1\u30E9\u79FB\u52D5\u30FB\u5149\u30FB\u5F37\u3044\u63FA\u308C\u3092\u306A\u304F\u3057\u307E\u3059"],["Acerca de","About","\u3053\u306E\u30B2\u30FC\u30E0\u306B\u3064\u3044\u3066"],["Privacidad, datos y cr\xE9ditos","Privacy, data and credits","\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30FB\u30C7\u30FC\u30BF\u30FB\u30AF\u30EC\u30B8\u30C3\u30C8"],["Abrir","Open","\u958B\u304F"],["Botones de direcci\xF3n","Steering buttons","\u64CD\u4F5C\u30DC\u30BF\u30F3"],["Alternativa a arrastrar","An alternative to dragging","\u30C9\u30E9\u30C3\u30B0\u306E\u4EE3\u308F\u308A"],["Girar a la izquierda","Turn left","\u5DE6\u3078\u66F2\u304C\u308B"],["Girar a la derecha","Turn right","\u53F3\u3078\u66F2\u304C\u308B"],["Remar","Paddle","\u3053\u3050"],["Direcci\xF3n","Steering","\u64CD\u4F5C"]],PT=new Map(w1.map(i=>[i[0],i]));var xm={es:["Cuando","el r\xEDo","te entregue","su luz,","la caba\xF1a","recordar\xE1","tu","nombre."],en:["When","the river","hands you","its light,","the cabin","will remember","your","name."],ja:["\u5DDD\u304C","\u706F\u3092","\u6388\u3051\u308B","\u3068\u304D\u3001","\u5C0F\u5C4B\u306F","\u3042\u306A\u305F\u306E","\u540D\u3092","\u601D\u3044\u51FA\u3059\u3002"]},A1=()=>xm[Lr()]||xm.es,$a=()=>{try{return Math.max(0,+localStorage.getItem("rio3d-lant")||0)}catch{return 0}},R1=()=>Math.min(8,Math.floor($a()/4)),C1=()=>Lr()==="ja"?"":" ";function ym(i=R1()){let e=A1(),t=C1(),n=[];for(let s=0;s<8;s+=2)n.push((s<i?e[s]:"\xB7\xB7\xB7")+t+(s+1<i?e[s+1]:"\xB7\xB7\xB7"));return n}var _m=()=>Math.min(8,Math.ceil($a()/4)),vm=()=>{try{return+localStorage.getItem("tomo-ofrenda")||0}catch{return 0}},bm=i=>{try{localStorage.setItem("tomo-ofrenda",String(i))}catch{}},Ns=()=>$a()>=32,Mm=()=>{try{return localStorage.getItem("tomo-secreto")==="1"}catch{return!1}},Sm=()=>{try{localStorage.setItem("tomo-secreto","1")}catch{}};var Em=()=>{try{return JSON.parse(localStorage.getItem("rio3d-found")||"[]")}catch{return[]}};var Zu=-8.8,Ju=.3,Tm=5,Dr=null,I1=[];function wm(){if(!Ns())return;let i=new Set(Em()),e=new xe;e.position.set(Zu,ce,Ju),Ge.add(e);let t=(u,p,g,M,m)=>{let f=new oe(u,p);return f.position.set(g,M,m),f};e.add(t(new rt(4.5,4.6,.34,40),we("#7d7a86"),0,.1,0));let n=new oe(new Rn(4.45,.2,8,48),we("#a9a4b0"));n.rotation.x=Math.PI/2,n.position.y=.3,e.add(n);let s=new oe(new _r(3.25,4.3,40),we("#7fa06a"));s.rotation.x=-Math.PI/2,s.position.y=.29,e.add(s);let r=document.createElement("canvas");r.width=256,r.height=32;{let u=r.getContext("2d"),p=u.createLinearGradient(0,0,256,0);p.addColorStop(0,"#bfe3ea"),p.addColorStop(.5,"#9ccbd8"),p.addColorStop(1,"#bfe3ea"),u.fillStyle=p,u.fillRect(0,0,256,32),u.fillStyle="rgba(255,255,255,.35)";for(let g=0;g<30;g++)u.fillRect(Math.random()*256,Math.random()*32,10+Math.random()*30,1)}let a=new Nn(r);a.colorSpace=nn;let o=new oe(new _r(1.8,3.3,48,1),new je({map:a,transparent:!0,opacity:.92}));o.rotation.x=-Math.PI/2,o.position.y=.31,e.add(o),e.add(t(new rt(1.75,1.9,.5,32),we("#7fa06a"),0,.4,0));let l=(u,p)=>p?u:"#8d8b94",c=(u,p,g,M,m,f=1.1)=>{let y=_t(Mt,p,f,.5,!0);y.position.set(g,M,m),u.add(y)};{let u=i.has(10),p=new xe;p.position.y=.65,e.add(p),[[1.05,.42,0],[.78,.4,.42],[.55,.36,.8]].forEach(([g,M,m],f)=>{p.add(t(new bt(g,M,g),we(l("#efe6d2",u)),0,m+M/2,0)),p.add(t(new Dt(g*.82,.26,4),we(l("#4f4a58",u)),0,m+M+.1,0)).rotation.y=Math.PI/4,p.children[p.children.length-1].rotation.y=Math.PI/4}),u&&c(p,16767392,0,.7,.2,1.6)}[0,1,2,3,4,5,6,7,8,9].forEach((u,p)=>{let g=i.has(u),M=-Math.PI/2+p/10*Math.PI*2,m=u===9?2.5:u===0?2.55:3.75,f=Math.cos(M)*m,y=Math.sin(M)*m,v=new xe;v.position.set(f,u===9||u===0?.31:.3,y),v.rotation.y=-M-Math.PI/2,e.add(v);let x=S=>we(l(S,g));if(u===0){v.position.set(Math.cos(M)*2.55,.34,Math.sin(M)*2.55),v.rotation.y=-M;for(let S=-5;S<=5;S++){let E=S/5,A=t(new bt(.26,.07,.55),x("#b0876c"),E*1,.16*(1-E*E),0);A.rotation.z=-E*.5,v.add(A)}[-1,1].forEach(S=>v.add(t(new bt(2.1,.05,.05),x("#b5473a"),0,.28,S*.27)))}else if(u===1)[-.3,.3].forEach(S=>v.add(t(new rt(.035,.04,.62,6),x("#c23f33"),S,.31,0))),v.add(t(new bt(.9,.07,.12),x("#2c2a2e"),0,.66,0)),v.add(t(new bt(.7,.05,.08),x("#c23f33"),0,.55,0));else if(u===2)[[-.28,.1],[.2,-.12],[.05,.28]].forEach(([S,E],A)=>{v.add(t(new bt(.3,.2,.28),x("#e8d3b6"),S,.1,E)),v.add(t(new Dt(.28,.18,4),x("#8f6a5f"),S,.29,E)).rotation.y=Math.PI/4,g&&c(v,16761466,S,.12,E+.16,.4)});else if(u===3)v.add(t(new rt(.03,.05,.4,5),x("#5a3d33"),0,.2,0)),v.add(t(new Ft(.3,1),x("#f3bccb"),0,.55,0)),v.add(t(new Ft(.2,0),x("#eea9bd"),.18,.45,.08));else if(u===4)v.position.y=.31,v.add(t(new Nt(.13,8,6),x("#f6f3ee"),0,.2,0)),v.children[v.children.length-1].scale.set(1,.8,1.5),v.add(t(new rt(.015,.02,.3,5),x("#f6f3ee"),0,.4,.05)),v.add(t(new Dt(.02,.1,4),x("#e3a24a"),0,.5,.12)).rotation.x=Math.PI/2;else if(u===5){let S=0;[[.5,.22],[.4,.2],[.3,.18]].forEach(([E,A],_)=>{v.add(t(new bt(E,A,E),x("#efe3cd"),0,S+A/2,0)),v.add(t(new Dt(E*.85,.14,4),x("#4c4a5a"),0,S+A+.05,0)).rotation.y=Math.PI/4,S+=A+.1}),g&&c(v,16762746,0,.4,0,.9)}else if(u===6){[[0,.15,0,.3],[.12,.4,0,.22],[-.1,.55,0,.16]].forEach(([E,A,_,w])=>v.add(t(new Ft(w,0),x("#7a8a7e"),E,A,_)));let S=t(new ni(.14,.5),new je({color:g?14676986:10132130,transparent:!0,opacity:.85,side:mn}),0,.35,.26);v.add(S)}else if(u===7)v.add(t(new bt(.5,.28,.4),x("#e8d3b6"),0,.2,0)),v.add(t(new Dt(.42,.22,4),x("#8f6a5f"),0,.45,0)).rotation.y=Math.PI/4,v.add(t(new Dt(.16,.07,10),x("#c23f33"),.38,.38,.14)),v.add(t(new rt(.008,.008,.32,4),x("#b0876c"),.38,.22,.14)),g&&c(v,16762746,0,.25,.24,.6);else if(u===8)for(let S=0;S<6;S++){let E=.5+S%3*.15;v.add(t(new rt(.02,.026,E,5),x(S%2?"#8fb06a":"#7fa05f"),(S-2.5)*.08,E/2,S%2*.1))}else u===9&&([[0,0],[.28,.12],[-.2,.2]].forEach(([S,E])=>{v.add(t(new rt(.14,.14,.02,10),x("#7fbf8a"),S,.03,E))}),v.add(t(new Ft(.07,0),x("#f5a4bd"),.28,.1,.12)));g&&u!==2&&u!==5&&u!==7&&c(v,16767392,0,.4,0,.9)}),Dr=new xe,e.add(Dr);for(let u=0;u<5;u++){let p=u/5*Math.PI*2,g=new xe;g.position.set(Math.cos(p)*2.45,.36,Math.sin(p)*2.45),g.rotation.y=-p,Dr.add(g),g.add(t(new bt(.3,.06,.1),we("#6b4a36"),0,0,0)),g.add(t(new Nt(.07,6,5),new je({color:16767392}),0,.12,0));let M=_t(Mt,16761466,.7,.6,!0);M.position.y=.14,g.add(M)}I1.push(Dr);let d=new oe(new rt(.12,.16,.9,6),we("#a9a4b0"));d.position.set(3.2,.75,-4.3),e.add(d),c(e,16761466,3.2,1.3,-4.3,1.6)}var Am=i=>{Dr&&(Dr.rotation.y=-i*.1)};var Rm=[],Cm=[],Im=[],ja=i=>12+16*Math.sin(i*.021+.6)+8*Math.sin(i*.047),$u=-13.6;function Pc(i,e,t,n,s){let r=en(n),a=new Di;a.moveTo(-340,-60);for(let l=-340;l<=340;l+=16)a.lineTo(l,t*(.45+.55*Math.abs(Math.sin(l*.011+n)+.5*Math.sin(l*.027+n*2)))/1.5+r()*t*.08);a.lineTo(340,-60);let o=new oe(new Ca(a),new je({color:e,fog:!0}));o.position.set(0,s,i),Ge.add(o)}var Lc=new D(140,100,-420);function P1(){let i=new oe(new Nt(600,24,16),new bn({side:un,depthWrite:!1,fog:!1,uniforms:{top:{value:new Be("#3a3f7c")},mid:{value:new Be("#c9799d")},hor:{value:new Be("#fbb67a")},sd:{value:Lc.clone().normalize()}},vertexShader:"varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vP;uniform vec3 top,mid,hor;uniform vec3 sd;void main(){vec3 d=normalize(vP);float h=clamp(d.y,0.,1.);vec3 c=mix(hor,mid,smoothstep(0.,.22,h));c=mix(c,top,smoothstep(.16,.85,h));float s=max(dot(d,sd),0.);c+=vec3(1.,.62,.32)*pow(s,6.)*.55+vec3(1.,.85,.6)*pow(s,40.)*.5;c=mix(c,vec3(.25,.22,.42),smoothstep(0.,-.4,d.y)*.7);gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
`+Bu+"}"}));i.renderOrder=-10,Ge.add(i);{let n=new Float32Array(480);for(let r=0;r<160;r++){let a=Math.random()*6.283,o=Math.random()*.5+.42,l=Math.sqrt(1-o*o);n.set([Math.cos(a)*l*560,o*560,Math.sin(a)*l*560-0],r*3)}let s=new At;s.setAttribute("position",new Yt(n,3)),Ge.add(new Li(s,new xi({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:.5,fog:!1,depthWrite:!1})))}let e=_t(Mt,16761466,260,.85,!0);e.material.fog=!1,e.position.copy(Lc),Ge.add(e);let t=new oe(new Gn(15,32),new je({color:16773320,fog:!1}));t.position.copy(Lc).multiplyScalar(.998),t.lookAt(0,0,0),Ge.add(t)}function L1(){Pc(-190,"#a38aa8",70,1,-24),Pc(-150,"#9a82a6",60,6,-24),Pc(-110,"#8f7ca4",46,5,-24),Pc(-78,"#82749f",34,9,-22);let i=new oe(new Gn(260,32).rotateX(-Math.PI/2),we("#86906f"));i.position.y=-14,Ge.add(i);let e=["#6d8466","#7a936f","#5f7a5d","#86a077"];{let t=new pt,n=new Dn,s=new D,r=new D,a=new Be,o=en(77),l=(x,S)=>{let E=new bs(x,we("#ffffff"),S);return E.count=0,Ge.add(E),E},c=(x,S,E,A,_,w,C,P,N=0)=>{let B=x.count++;n.setFromEuler(new ti(0,N,0)),r.set(S,E,A),s.set(_,w,C),t.compose(r,n,s),x.setMatrixAt(B,t),x.setColorAt(B,a.set(P))},h=l(new Dt(1.15,10,7).translate(0,5,0),260),d=l(new Dt(1.9,7.5,6).translate(0,3.8,0),300),u=l(new rt(.18,.3,3.2,5).translate(0,1.6,0),260),p=l(new Ft(1,1),700),g=l(new rt(.07,.09,8,5).translate(0,4,0),220),M=l(new Ft(.9,0),260),m=l(new Ft(1,1),240),f=l(new Dt(.35,1.3,4).translate(0,.65,0),420),y={sugi:["#4f6b52","#5c7a5a","#476048"],pine:["#6d8466","#7a936f","#5f7a5d","#86a077"],matsu:["#4f7254","#5b8160","#44654a"],maple:["#d9573a","#e8793a","#c9432f","#f0a042"],gink:["#f0c44a","#e8b53a","#f6d46a"],bam:["#8fb06a","#9cc17a","#7fa05f"],bl:["#a6c47a","#94b56a"],bush:["#5f8a60","#6e9a68","#e58aa8","#d9708f","#f3a9c0"],gr:["#9bb070","#b3b87a","#86a068"]},v=x=>x[o()*x.length|0];for(let x=0;x<9e3;x++){let S=o()*6.283,E=14+Math.sqrt(o())*150,A=Math.cos(S)*E+2,_=Math.sin(S)*E-12;if(A>-16&&A<17&&_>-10&&_<9||Math.abs(A-ja(_))<10+Math.max(0,-_)*.16+6)continue;let w=-14+Math.max(0,-_-30)*.05,C=o();if(C<.2&&h.count<260){let P=.8+o()*.8;c(h,A,w,_,P*.8,P*(.9+o()*.7),P*.8,v(y.sugi))}else if(C<.38&&d.count<300){let P=.7+o()*1.1;c(d,A,w,_,P,P*(.8+o()*.8),P,v(y.pine))}else if(C<.5&&u.count<260&&p.count<690){let P=.9+o()*.8;c(u,A,w,_,P,P,P,"#4b342a");let N=(o()-.5)*1.2;[[0,3.6,0,2.2,.7],[N*1.3,4.5,.7,1.7,.6],[-N,5.3,-.5,1.3,.5]].forEach(([B,R,L,O,k])=>c(p,A+B*P,w+R*P,_+L*P,O*P,k*P,O*P*.9,v(y.matsu)))}else if(C<.64&&u.count<260&&p.count<695){let P=.9+o()*.9;c(u,A,w,_,P,P,P,"#5a3d33");let N=v(y.maple);[[0,4.2,0,1.9],[1.1,3.6,.5,1.4],[-1,3.7,-.4,1.3]].forEach(([B,R,L,O],k)=>c(p,A+B*P,w+R*P,_+L*P,O*P,O*P*.85,O*P,k?v(y.maple):N))}else if(C<.7&&u.count<260&&p.count<695){let P=.9+o()*.8;c(u,A,w,_,P,P*1.1,P,"#6b5040"),[[0,4.8,0,1.4,2.2],[.5,6.3,.2,1,1.7]].forEach(([N,B,R,L,O])=>c(p,A+N*P,w+B*P,_+R*P,L*P,O*P,L*P,v(y.gink)))}else if(C<.82&&g.count<200){let P=6+(o()*8|0);for(let N=0;N<P&&g.count<220;N++){let B=A+(o()-.5)*5,R=_+(o()-.5)*5,L=.8+o()*.7;c(g,B,w,R,1,L,1,v(y.bam)),M.count<258&&c(M,B,w+7.6*L,R,1.1,.45,1.1,v(y.bl))}}else if(C<.92&&m.count<240){let P=.7+o()*1.1;c(m,A,w+.4,_,P*1.3,P*.75,P*1.3,v(y.bush))}else if(f.count<420)for(let P=0;P<3;P++)c(f,A+(o()-.5)*1.2,w,_+(o()-.5)*1.2,.8+o()*.6,.8+o()*1.1,.8+o()*.6,v(y.gr),o()*6)}[h,d,u,p,g,M,m,f].forEach(x=>{x.instanceMatrix.needsUpdate=!0,x.instanceColor&&(x.instanceColor.needsUpdate=!0)})}for(let t=0;t<7;t++){let n=_t(Ps,15978450,60+t*8,.26);n.position.set(-70+t*30,-9+t*1.6,-10-t*6),n.scale.set(70+t*8,18,1),Ge.add(n),Rm.push(n)}{let t=en(31);for(let n=0;n<14;n++){let s=n%2?1:-1,r=-18-t()*85,a=-12+t()*9,o=70+t()*70,l=_t(Ps,n%3?15780048:16309456,60,.1+t()*.12);l.position.set(-140+t()*280,a,r),l.scale.set(o,10+t()*12,1),l.userData.v=s*(.3+t()*.5),l.userData.ph=t()*6,l.userData.o=l.material.opacity,Ge.add(l),Im.push(l)}}for(let t=0;t<6;t++){let n=_t(Ps,16172212,90,.38);n.position.set(-160+t*70,60+t*37%30,-200-t%3*30),n.scale.set(150,40,1),Ge.add(n),Cm.push(n)}}var Pm=[];function D1(){{let e=[],t=[],n=[],s=[],r=new Be,a=new Be("#5d8f8c"),o=new Be("#ffd3a0"),l=new Be("#d8949e");for(let g=0;g<=90;g++){let M=34-g*3,m=8+g*.16,f=ja(M);for(let y=0;y<5;y++){let v=y/4,x=f+(v-.5)*2*m;e.push(x,$u,M);let S=1-Math.abs(v-.5)*2;r.copy(a).lerp(l,Math.min(1,S*1.4)).lerp(o,Math.max(0,S-.45)*(g<40?.7:.5)),t.push(r.r,r.g,r.b),s.push(v,g*.35)}}for(let g=0;g<90;g++)for(let M=0;M<4;M++){let m=g*5+M;n.push(m,m+5,m+1,m+1,m+5,m+6)}let c=new At;c.setAttribute("position",new tt(e,3)),c.setAttribute("color",new tt(t,3)),c.setAttribute("uv",new tt(s,2)),c.setIndex(n),Ge.add(new oe(c,new je({vertexColors:!0,fog:!1})));let h=document.createElement("canvas");h.width=64,h.height=256;let d=h.getContext("2d");for(let g=0;g<40;g++){let M=Math.random()*64,m=Math.random()*256;d.fillStyle="rgba(255,236,210,"+(.08+Math.random()*.12)+")",d.fillRect(M,m,2+Math.random()*10,1.5)}let u=new Nn(h);u.wrapS=u.wrapT=Ki,u.repeat.set(1,3);let p=new oe(c,new je({map:u,transparent:!0,depthWrite:!1,fog:!0}));p.position.y=.03,Ge.add(p),ju=u}{let i=en(52),e=70,t=new bs(new rt(.25,.4,3.2,5).translate(0,1.6,0),we("#5a3d33"),e),n=new bs(new Ft(1,1),we("#ffffff"),e*3),s=new pt,r=new Dn,a=new D,o=new D,l=new Be,c=["#f3bccb","#eea9bd","#f8d0da","#e99fb4"],h=0,d=0;for(let u=0;u<500&&h<e;u++){let p=30-i()*230,g=i()<.5?-1:1,M=11+i()*28,m=ja(p)+g*(M+Math.max(0,-p)*.12);if(m>-22&&m<26&&p>-14&&p<16)continue;let f=1+i()*1.1,y=$u+.2;o.set(m,y,p),a.setScalar(f),s.compose(o,r,a),t.setMatrixAt(h,s);for(let v=0;v<3;v++)o.set(m+(i()-.5)*1.8*f,y+3.8*f+(v?i()*.9:0),p+(i()-.5)*1.8*f),a.set(2.3*f*(1-v*.18),1.7*f,2.3*f*(1-v*.18)),s.compose(o,r,a),n.setMatrixAt(d,s),n.setColorAt(d,l.set(i()<.18?"#8aa874":c[i()*4|0])),d++;h++}t.count=h,n.count=d,Ge.add(t,n)}{let i=new xe,e=new je({color:15785176,fog:!0}),t=new je({color:7303055,fog:!0}),n=new je({color:10392230,fog:!0}),s=(o,l,c,h,d,u,p)=>{let g=new oe(new bt(o,l,c),h);return g.position.set(d,u,p),i.add(g),g};s(34,7,26,n,0,3.5,0);let r=7,a=24;for(let o=0;o<4;o++){s(a,5,a*.75,e,0,r+2.5,0);let l=new oe(new Dt(a*.78,3.2,4),t);l.rotation.y=Math.PI/4,l.position.y=r+6.4,l.scale.z=.75,i.add(l),r+=5.2,a-=4.5}i.position.set(-70,-8,-210),i.scale.setScalar(1.3),Ge.add(i)}for(let i=0;i<4;i++){let e=new xe,t=new oe(new xa(.35,2.6,3,6),we("#5a3d2e"));t.rotation.x=Math.PI/2,t.scale.set(1,1,.6),e.add(t);let n=_t(Mt,16758896,3.2,.9,!0);n.position.set(0,1,-1.2),e.add(n);let s=new oe(new Nt(.2,8,6),new je({color:16767392}));s.position.set(0,.8,-1.2),e.add(s),e.userData={u:.1+i*.22,sp:.0035+i*6e-4},Ge.add(e),Pm.push(e)}}var ju=null;function N1(){let i=new bt(10,26,12,12,16,12),e=i.attributes.position,t=en(3),n=new Float32Array(e.count*3),s=new Be,r=new Be("#d0aa8c"),a=new Be("#6d5a62"),o=(h,d,u)=>Math.sin(h*1.3+d*.7)*.35+Math.sin(u*1.7+d*1.1)*.3+Math.sin(h*3.1+u*2.3+d*.4)*.15;for(let h=0;h<e.count;h++){let d=e.getX(h),u=e.getY(h),p=e.getZ(h);if(u<13-.01){let m=o(d,u,p)*1.6+(t()-.5)*.25,f=p>5.9,y=Math.abs(d)>4.9;e.setX(h,d+(y?m:m*.3)*(Math.abs(d)<4.9?.3:1)),e.setZ(h,p+(f?m*.35:m*.6))}let g=yt((u+13)/26);s.copy(a).lerp(r,g);let M=(t()-.5)*.06;n[h*3]=s.r+M,n[h*3+1]=s.g+M,n[h*3+2]=s.b+M}i.setAttribute("color",new Yt(n,3)),i.computeVertexNormals();let l=i.attributes.uv;for(let h=0;h<l.count;h++)l.setXY(h,l.getX(h)*3.2,l.getY(h)*3.2);let c=new oe(i,new Ss({vertexColors:!0,flatShading:!0,map:ku("rock"),gradientMap:Hu}));c.position.set(-9,-9,-1),c.receiveShadow=!0,c.castShadow=!0,Ge.add(c);{let h=new oe(new bt(10.4,.5,12.4),we("#8fa57c"));h.position.set(-9,3.95,-1),Ge.add(h)}{let h=en(11),d=new xe;Ge.add(d);let u=(g,M,m)=>{let f=new oe(new rt(.15*m,.28*m,2.6*m,6),we("#4b342a"));f.position.set(g,4.2+1.3*m,M),f.rotation.z=.2,d.add(f),[[0,2.9,0,1.5,.5],[.7,2.2,.3,1.1,.4],[-.8,1.7,-.2,.9,.35]].forEach(([y,v,x,S,E],A)=>{let _=new oe(new Ft(1,1),we(["#4f7254","#5b8160","#44654a"][A]));_.position.set(g+y*m,4.2+v*m,M+x*m),_.scale.set(S*m*1.2,E*m*1.3,S*m),d.add(_)})};u(-6.6,-3.6,1.2),u(-12.4,-1.2,.9);let p=(g,M,m)=>{let f=new oe(new rt(.12*m,.24*m,2.2*m,6),we("#5a3d33"));f.position.set(g,4.2+1.1*m,M),d.add(f),[[0,2.6,0,1.2],[.6,2.2,.3,.9],[-.5,2.3,-.3,.8]].forEach(([y,v,x,S],E)=>{let A=new oe(new Ft(S*m,1),we(["#d9573a","#e8793a","#c9432f"][E]));A.position.set(g+y*m,4.2+v*m,M+x*m),d.add(A)})};p(-7.6,3.4,1),p(-4.4,-4.2,.8);for(let g=0;g<14;g++){let M=-13.2+g%5*.45+h()*.3,m=-4.6+(g/5|0)*.5+h()*.3,f=4.5+h()*2.5,y=new oe(new rt(.06,.08,f,5),we(["#8fb06a","#9cc17a","#7fa05f"][g%3]));y.position.set(M,4.2+f/2,m),d.add(y);let v=new oe(new Ft(.6,0),we("#a6c47a"));v.scale.set(1,.5,1),v.position.set(M,4.2+f,m),d.add(v)}for(let g=0;g<26;g++){let M=-13.6+h()*9,m=-5+h()*9,f=new oe(new Dt(.22,.9+h()*.6,4),we(["#9bb070","#b3b87a","#86a068"][g%3]));f.position.set(M,4.2+.5,m),f.rotation.z=(h()-.5)*.5,d.add(f)}for(let g=0;g<6;g++){let M=new oe(new Ft(.45+h()*.5,0),we(["#7e7a74","#8a8a7c","#6f7d68"][g%3]));M.position.set(-13+h()*8.5,4.3,-5+h()*9),M.scale.y=.6,d.add(M)}for(let g=0;g<7;g++){let M=new oe(new Ft(.5+h()*.3,1),we(["#e58aa8","#d9708f","#f3a9c0","#6e9a68"][g%4]));M.position.set(-13.5+h()*9,4.5,-4.5+h()*9),M.scale.y=.7,d.add(M)}Ns()&&d.children.filter(g=>Math.hypot(g.position.x-Zu,g.position.z-Ju)<Tm).forEach(g=>d.remove(g))}if(!Ns()){let h=new xe;h.position.set(-12.2,4.2,1.8),Ge.add(h);let d=new oe(new rt(.22,.38,3,6),we("#5a3d33"));d.position.y=1.5,d.rotation.z=.08,h.add(d),[[0,3.6,0,1.7],[1.2,3.2,.4,1.3],[-1.1,3.3,-.3,1.2],[.2,4.4,.2,1.1]].forEach(([u,p,g,M],m)=>{let f=new oe(new Ft(M,1),we(["#f3bccb","#eea9bd","#f8d0da","#e99fb4"][m]));f.position.set(u,p,g),h.add(f)})}{let h=en(5);for(let d=0;d<8;d++){let u=1+h()*2,p=new oe(new Ft(u,0),we("#7b6a70"));p.position.set(-14+h()*12,-13,6+h()*3),p.rotation.set(h()*3,h()*3,0),Ge.add(p)}}}function Lm(){P1(),L1(),D1(),N1()}var U1=Lc.clone().normalize();function Dm(i){{let e=it.T;Is.sunDir.value.copy(U1),Is.sunCol.value.set(1,.72,.5),Is.misc.value.set(.55,.05,.5,e),Im.forEach(t=>{t.position.x+=i*t.userData.v,t.position.x>160&&(t.position.x=-160),t.position.x<-160&&(t.position.x=160),t.material.opacity=t.userData.o*(.8+.2*Math.sin(e*.12+t.userData.ph))})}Pm.forEach(e=>{let t=e.userData;t.u+=t.sp*i,t.u>1&&(t.u-=1);let n=30-t.u*240,s=ja(n)+Math.sin(it.T*.3+t.u*20)*1.2;e.position.set(s,$u+.1+Math.sin(it.T*.9+t.u*9)*.04,n);let r=n-1,a=ja(r);e.rotation.y=Math.atan2(-(a-s),-(r-n))+Math.PI,e.scale.setScalar(1+t.u*0)}),ju&&(ju.offset.y=it.T*.004%1),Rm.forEach((e,t)=>{e.position.x+=i*(.5+t*.08),e.position.x>110&&(e.position.x=-110)}),Cm.forEach((e,t)=>{e.position.x+=i*(.4+t*.05),e.position.x>260&&(e.position.x=-260)})}var Nm=[],Ku=260,Um=new Float32Array(Ku*6),Fm=[],Qu=60,Dc=new Float32Array(Qu*3),Om=[],Nc,Uc,Nr,Fc,Ka;function Bm(){for(let i=0;i<12;i++){let e=_t(Ps,15328506,2,0);e.userData.ph=i/12,Ge.add(e),Nm.push(e)}Nc=new At;for(let i=0;i<Ku;i++)Fm.push([Math.random()*30-12,Math.random()*18,Math.random()*18-8]);Nc.setAttribute("position",new Yt(Um,3)),Nr=new pa(Nc,new gr({color:13621503,transparent:!0,opacity:0,fog:!0})),Nr.frustumCulled=!1,Ge.add(Nr),Uc=new At;for(let i=0;i<Qu;i++)Om.push([Math.random()*30-14,Math.random()*9+1,Math.random()*14-6,Math.random()*6.28]);Uc.setAttribute("position",new Yt(Dc,3)),Fc=new xi({color:16773792,size:.4,map:Mt,transparent:!0,opacity:0,blending:Ui,depthWrite:!1}),Ka=new Li(Uc,Fc),Ka.frustumCulled=!1,Ge.add(Ka)}function zm(i,e,t){let n=it.T;if(Nm.forEach((s,r)=>{let a=(n*.07+s.userData.ph)%1;s.position.set(4.4+a*3.2+Math.sin(n*.6+r)*.3,9.4+a*5.5,-.2+Math.sin(n*.4+r*2)*.2);let o=1+a*4.2;s.scale.set(o,o,1),s.material.opacity=.38*(1-a)*Math.min(1,a*8)*En.smoke}),Nr.material.opacity=.28*En.rain,Nr.visible=En.rain>.02,Nr.visible){for(let s=0;s<Ku;s++){let r=Fm[s];r[1]-=15*i,r[1]<-2&&(r[1]=17+Math.random()*3,r[0]=Math.random()*34-14,r[2]=Math.random()*20-9),Um.set([r[0],r[1],r[2],r[0]-.12,r[1]+.7,r[2]],s*6)}Nc.attributes.position.needsUpdate=!0}if(Fc.opacity=yt(e*.9+(t?.3:0)-.1,0,.9),Ka.visible=Fc.opacity>.02,Ka.visible){for(let s=0;s<Qu;s++){let r=Om[s],a=n*.4+r[3];Dc[s*3]=r[0]+Math.sin(a*2+s)*1.5,Dc[s*3+1]=r[1]+Math.sin(a*3+s)*.5,Dc[s*3+2]=r[2]+Math.cos(a*1.7+s)*1.5}Uc.attributes.position.needsUpdate=!0}}var Oc=[],F1=0;function km(){for(let i=0;i<40;i++){let e=_t(Mt,16777215,.4,0,!0);e.visible=!1,Ge.add(e),Oc.push({s:e,life:0,vx:0,vy:0,vz:0})}}function ed(i,e,t,n,s,r,a){for(let o=0;o<n;o++){let l=Oc[F1++%Oc.length];l.s.position.set(i,e,t),l.s.material.color.set(s),l.s.visible=!0,l.life=1,l.vx=(Math.random()-.5)*r,l.vy=Math.random()*r*.6+(a||.5),l.vz=(Math.random()-.5)*r,l.s.scale.setScalar(.25+Math.random()*.3)}}var Us=i=>ed(i[0],i[1],i[2]+.5,22,16771504,5,2);function Hm(i){Oc.forEach(e=>{if(e.s.visible){if(e.life-=i*.9,e.life<=0){e.s.visible=!1;return}e.s.position.x+=e.vx*i,e.s.position.y+=e.vy*i,e.s.position.z+=e.vz*i,e.vy-=2.2*i,e.s.material.opacity=e.life*.9}})}var Gm="#dcae92";var Vm="#d9b995",qn="#b0806a",bi="#a1918c",Wm="#a9a4c6",Xm="#e7a293";var Ke,qm=()=>(Ke=new xe,Ke),Bi=i=>(Rc.push(i),i),Ur=i=>9.4-(i+1)*(2.2/3.4),zi=Math.atan(2.2/3.4),Tn=i=>{let e=new xe,t=new xe,n=new xe;return e.userData.itemId=i,e.add(t,n),Ke.add(e),Xt[i]={id:i,g:e,b:t,f:n,blobs:[]}},Bc={paint:null};function Ym(){qm(),Ge.add(Ke),re(12.4,.28,.22,qn,2,ce-.35,3.9,Ke),re(12.4,.28,.22,qn,2,ce-.35,-2.9,Ke);for(let e=0;e<8;e++)re(.2,.26,7.2,"#8f6f66",-3.8+e*1.65,ce-.35,.5,Ke);[[-3.6,3.7],[-3.6,-2.7],[1,3.7],[1,-2.7],[4.8,3.7],[4.8,-2.7],[7.7,3.7],[7.7,-2.7]].forEach(([e,t])=>Bi(re(.38,18.4,.38,"#9a7a70",e,ce-9.5,t,Ke)));for(let e of[1,4.8]){let t=re(.15,.15,6.6,"#8f6f66",e,ce-5,.5,Ke);t.rotation.x=0}let i=(e,t,n,s,r)=>{let a=Math.hypot(n-e,s-t),o=re(a,.16,.16,"#8f6f66",(e+n)/2,(t+s)/2,r,Ke);o.rotation.z=Math.atan2(s-t,n-e)};i(-3.6,ce-4,1,ce-.5,3.7),i(1,ce-.5,4.8,ce-4,3.7),i(4.8,ce-4,7.7,ce-.5,3.7),i(1,ce-4,4.8,ce-.5,3.7),i(4.8,ce-.5,7.7,ce-4,3.7),re(12,.1,6.8,"#4a4470",2,ce-.6,.5,Ke),Bi(re(8.2,3.9,.2,"#eadfc2",1.5,ce+1.95,-2.95,Ke)),[-2.55,1.35,3.5,5.55].forEach(e=>re(.22,3.9,.12,qn,e,ce+1.95,-2.8,Ke)),[ce+.95,ce+3.05,ce+3.82].forEach(e=>re(8.2,.18,.12,qn,1.5,e,-2.8,Ke)),Bi(re(8.1,.9,.1,Wm,1.5,ce+.45,-2.8,Ke));for(let e=0;e<8;e++)re(.04,.9,.02,"#8f8ab0",-2.1+e*1,ce+.45,-2.74,Ke);{let e=new Di;[[3,0],[-1,0],[-1,3.9],[1,5.2],[3,3.9]].forEach(([t,n],s)=>s?e.lineTo(t,n):e.moveTo(t,n));for(let t of[-2.6,5.4]){let n=new Aa(e,{depth:.2,bevelEnabled:!1});n.rotateY(Math.PI/2);let s=new oe(n,we(Gm));s.position.set(t,ce,0),Ke.add(s),Bi(s)}}Bi(re(8.4,.8,.22,qn,1.5,7.8,1,Ke)),[-2.5,5.5].forEach(e=>Bi(re(.3,3.5,.3,qn,e,ce+1.75,1,Ke)));{let e=new oe(new rt(.3,.3,10.6,10),we("#3e4659"));e.rotation.z=Math.PI/2,e.position.set(1.5,9.62,-1),Ke.add(e),[-1,1].forEach(t=>{let n=new oe(new Dt(.42,.95,6),we("#3e4659"));n.position.set(1.5+t*5.4,9.95,-1),n.rotation.z=-t*.35,Ke.add(n);let s=new oe(new Nt(.22,8,6),we("#c9a14a"));s.position.set(1.5+t*5.55,10.5,-1),Ke.add(s)})}re(9.9,.18,.3,qn,1.5,9.5,-1,Ke),re(9.9,.2,.22,qn,1.5,7.2,2.45,Ke),re(9.9,.2,.22,qn,1.5,7.2,-4.45,Ke),re(.2,.2,6.8,qn,-3.3,7.15,-1,Ke),re(.2,.2,6.8,qn,6.3,7.15,-1,Ke),[-2.6,5.6].forEach(e=>{let t=new xe;t.position.set(e,6.5,2.1),Ke.add(t),re(.03,.5,.03,"#6a5058",0,.5,0,t);let n=new oe(new Nt(.26,12,10),we("#f3e2c2",{emissive:"#ff9a4a",emissiveIntensity:0}));n.scale.set(1,1.25,1),t.add(n),[.3,-.3].forEach(a=>re(.24,.06,.24,"#2f2a2a",0,a,0,t)),[-.12,0,.12].forEach(a=>{let o=new oe(new Rn(.255*Math.sqrt(1-Math.pow(a/.33,2)),.008,4,16),we("#8e3d2e"));o.rotation.x=Math.PI/2,o.position.y=a,t.add(o)});let s=_t(Mt,16761466,3.2,0,!0);t.add(s);let r=new Ni(16761466,0,11,1.5);t.add(r),Ot.porchL.push({body:n,gl:s,L:r})}),[[-3.2,"#e6a091","#f5c9d9"],[-2.4,"#7fc3bd","#f8e5a0"],[-1.6,"#d9a9cb","#ffffff"],[-.8,"#a6cf92","#f5c9d9"]].forEach(([e,t,n])=>{re(.5,.4,.5,t,e,ce+.2,3.3,Ke);let s=new oe(new Ft(.34,0),we("#79b08a"));s.position.set(e,ce+.55,3.3),Ke.add(s),[[.1,.8],[-.12,.72],[.05,.95]].forEach(([r,a])=>{let o=new oe(new Ft(.1,0),we(n));o.position.set(e+r,ce+a,3.35),Ke.add(o)})});{let e=new xe;e.position.set(7.3,ce,-.2),Ke.add(e);let t="#aaa59d",n=(u,p,g,M,m=8)=>{let f=new oe(new rt(u,p,g,m),we(t));return f.position.y=M,e.add(f),f};n(.5,.55,.2,.1),n(.18,.22,1.1,.75),n(.5,.42,.16,1.38);let s=new oe(new bt(.5,.5,.5),we("#ffe6b0",{emissive:"#ff9a4a",emissiveIntensity:0}));s.position.y=1.7,e.add(s);let r=new oe(new Dt(.62,.42,4),we(t));r.rotation.y=Math.PI/4,r.position.y=2.17,e.add(r);let a=new oe(new Nt(.12,8,6),we(t));a.position.y=2.45,e.add(a);let o=_t(Mt,16761466,3,0,!0);o.position.y=1.7,e.add(o),Ot.porchL.push({body:s,gl:o,L:{intensity:0}}),Bi(e.children[1]);let l=new xe;l.position.set(6.4,ce,-2.2),Ke.add(l);let c=new oe(new rt(.5,.42,.4,10),we("#b1aca3"));c.position.y=.2,l.add(c);let h=new oe(new Gn(.42,10).rotateX(-Math.PI/2),new je({color:8366256}));h.position.y=.38,l.add(h);let d=new oe(new rt(.05,.05,.9,6),we("#7aa05f"));d.rotation.z=1.2,d.position.set(.35,.75,0),l.add(d)}{let t=ce,n=15.1,s=ce-5.9,r=Math.hypot(n-8.2,s-t),a=Math.atan2(s-t,n-8.2);[2.15,3.45].forEach(o=>{let l=re(r,.22,.14,"#8f6f66",(8.2+n)/2,(t+s)/2-.3,o,Ke);l.rotation.z=a,Bi(l)}),re(2,.2,2.2,Vm,15.7,ce-6.1,2.8,Ke),[[15.1,2],[16.4,3.6]].forEach(([o,l])=>re(.3,12,.3,"#9a7a70",o,ce-12,l,Ke))}{let e=new xe;e.position.set(16.6,ce-6.2,2.8),Ke.add(e);let t="#a8392b";[-1.7,1.7].forEach(r=>{let a=new oe(new rt(.18,.22,4.4,8),we(t));a.position.set(0,2.2,r),e.add(a)});let n=new oe(new bt(.5,.3,4.6),we("#2f2a2e"));n.position.set(0,4.5,0),e.add(n);let s=new oe(new bt(.3,.24,3.7),we(t));s.position.set(0,3.8,0),e.add(s)}{let e=ym(),t=document.createElement("canvas");t.width=512,t.height=320;let n=t.getContext("2d");n.fillStyle="#6b4a36",n.fillRect(0,0,512,320);for(let h=0;h<46;h++)n.fillStyle="rgba(40,22,14,"+(.05+Math.random()*.08)+")",n.fillRect(0,Math.random()*320,512,1+Math.random()*2);n.strokeStyle="#3b261b",n.lineWidth=10,n.strokeRect(5,5,502,310),n.textAlign="center",n.font='italic 600 40px "Noto Serif JP","Georgia",serif',e.forEach((h,d)=>{n.fillStyle=h.includes("\xB7\xB7\xB7")?"#b8996a":"#f6e3b4",n.fillText(h,256,86+d*58)});let s=new Nn(t);s.colorSpace=nn,s.anisotropy=8;let r=new xe;r.position.set(15.7,ce-6.2,5.1),r.rotation.y=.18,Ke.add(r),[-.95,.95].forEach(h=>{let d=new oe(new bt(.16,1.9,.16),we("#4b342a"));d.position.set(h,.95,0),r.add(d)});let a=new oe(new bt(2.4,1.5,.1),we("#6b4a36"));a.position.set(0,1.45,0),r.add(a);let o=new oe(new ni(2.3,1.44),new je({map:s}));o.position.set(0,1.45,.056),r.add(o);let l=new oe(new bt(2.7,.1,.5),we("#3b2a24"));l.position.set(0,2.28,0),l.rotation.x=.1,r.add(l);let c=_t(Mt,16761466,2.2,.35,!0);c.position.set(0,1.6,.6),r.add(c)}{let e=_m(),t=8.2,n=ce,s=15.1,r=ce-5.9;for(let a=0;a<8;a++){let o=(a+.7)/8.6,l=t+(s-t)*o,c=n+(r-n)*o,h=a<e;re(.08,.7,.08,"#4b342a",l,c+.1,3.75,Ke);let d=new oe(new Nt(.2,8,6),new je({color:h?16767392:6969938}));if(d.scale.y=1.25,d.position.set(l,c+.62,3.75),Ke.add(d),h){let u=_t(Mt,16761466,1.8,.5,!0);u.position.set(l,c+.62,3.75),Ke.add(u)}}}{let e=_t(Mt,16761466,3,.55,!0);e.position.set(16.5,ce-5.2,3.5),Ke.add(e),re(.08,1.1,.08,"#6a5058",16.5,ce-5.7,3.5,Ke)}}function Zm(i){let e=ce+.07,t=(s,r,a,o,l,c,h,d=10)=>{let u=new oe(new rt(s,r,a,d),we(o));return u.position.set(l,c,h),i.add(u),u},n=(s,r,a,o,l,c=1,h=1,d=1)=>{let u=new oe(new Nt(s,10,8),we(r));return u.scale.set(c,h,d),u.position.set(a,o,l),i.add(u),u};re(1.35,.16,.55,"#4b342a",.55,e+.08,-2.5,i),re(1.2,.04,.5,"#e8dcc0",.55,e+.18,-2.5,i),t(.09,.14,.34,"#2f4a74",.3,e+.37,-2.5),t(.06,.09,.06,"#e8dcc0",.3,e+.57,-2.5);{let s=re(.03,.7,.03,"#5a3d33",.32,e+.9,-2.5,i);s.rotation.z=-.35;let r=re(.03,.45,.03,"#5a3d33",.2,e+.78,-2.5,i);r.rotation.z=.5,[[.18,1.18],[.05,1.02],[.4,1.12],[.12,.88],[.28,1]].forEach(([a,o],l)=>n(.075,["#f3bccb","#eea9bd","#f8d0da"][l%3],.3+a*.6,e+o,-2.5+(l%2?.04:-.04)))}t(.1,.1,.14,"#c9a14a",1.05,e+.25,-2.5);{let a=e+.42;re(1.7,.07,1.05,"#5a3d2e",1.5,a,-.2,i),re(1.55,.03,.9,"#8e5a3a",1.5,a+.05,-.2,i),[[-.75,-.45],[.75,-.45],[-.75,.45],[.75,.45]].forEach(([o,l])=>re(.09,.4,.09,"#4b342a",1.5+o,e+.2,-.2+l,i)),re(.55,.025,.36,"#2f2a2a",1.5-.15,a+.075,-.2,i),n(.13,"#9a6a3c",1.5-.2,a+.19,-.2,1,.85,1),t(.03,.03,.14,"#9a6a3c",1.5-.04,a+.18,-.2,6).rotation.z=-.9,n(.05,"#9a6a3c",1.5-.2,a+.33,-.2),[.12,.34].forEach(o=>t(.05,.04,.06,"#e8dcc0",1.5+o-.1,a+.1,-.2+.2,8)),t(.1,.1,.03,"#d9c08a",1.5+.55,a+.08,-.2-.15,10),[[1.5,-1.15,"#8e3d2e"],[1.5,.8,"#2f4a74"],[2.85,-.2,"#c9a14a"]].forEach(([o,l,c],h)=>{re(.78,.1,.78,c,o,e+.06,l,i),re(.5,.02,.5,"#f0e6cf",o,e+.12,l,i)})}{t(.3,.27,.34,"#2f4a74",0,e+.17,.95,12),t(.24,.24,.03,"#33302f",0,e+.33,.95,12);let s=new oe(new Gn(.2,12).rotateX(-Math.PI/2),new je({color:16742970}));s.position.set(0,e+.355,.95),i.add(s),n(.14,"#33302f",0,e+.5,.95,1.15,.85,1.15),t(.035,.03,.18,"#33302f",.17,e+.52,.95,6).rotation.z=-.8}re(.6,1.15,1.1,"#7a4a34",-2.05,e+.57,.65,i),[.25,.57,.9].forEach(s=>{re(.03,.3,1,"#5a3524",-1.74,e+s,.65,i),[-.2,.2].forEach(r=>re(.04,.06,.1,"#c9a14a",-1.72,e+s,.65+r,i))}),re(.36,.06,.36,"#4b342a",3.05,e+.03,-2.3,i),re(.3,.5,.3,we("#f6ecd4",{emissive:"#ffcf8a",emissiveIntensity:.5}),3.05,e+.34,-2.3),re(.4,.05,.4,"#4b342a",3.05,e+.62,-2.3,i)}function Jm(){{let i=Tn("piso"),e=en(21);for(let t=0;t<24;t++){let n=-3.76+t*.5;if(re(.46,.14,7,["#dcbc98","#d4b290","#e0c19e"][t%3],n,ce-.07,.5,i.f),e()>.27){let s=7*(.55+.45*e()),r=re(.46,.14,s,["#a8978c","#9d8c82","#b0a095"][t%3],n,ce-.07+(e()-.5)*.1,.5+(7-s)*(e()>.5?.5:-.5),i.b);r.rotation.y=(e()-.5)*.06,r.rotation.z=(e()-.5)*.05}}for(let t=0;t<4;t++)for(let n=0;n<5;n++){let s=-1.35+t*1.9,r=-2.25+n*.95;re(1.9,.05,.95,"#56633f",s,ce+.03,r,i.f),re(1.78,.06,.83,"#d2c58e",s,ce+.035,r,i.f)}Zm(i.f),Sn(i,14,31,t=>[-3.5+t()*11,ce+.04,-1+t()*4.6],.35,.75)}{let i=Tn("barandal"),e=en(5);for(let t=0;t<11;t++){let n=-3.8+t*1.2;if(re(.13,1.05,.13,"#ecc9ae",n,ce+.52,3.9,i.f),![2,5,8].includes(t)){let s=re(.13,1.05,.13,bi,n,ce+.52,3.9,i.b);s.rotation.z=(e()-.5)*.34}}re(12,.12,.15,"#f1d3bb",2.2,ce+1.06,3.9,i.f),re(12,.1,.12,"#f1d3bb",2.2,ce+.55,3.9,i.f),[[-2.9,1.6],[2.6,2.4],[6.4,2.8]].forEach(([t,n])=>{let s=re(n,.12,.14,bi,t,ce+1.02+(e()-.5)*.06,3.9,i.b);s.rotation.z=(e()-.5)*.1}),[[-1.3,2.1],[4.3,1.6]].forEach(([t,n])=>re(n,.1,.12,bi,t,ce+.5,3.9,i.b)),Sn(i,6,41,t=>[-3.5+t()*11,ce+1.1,3.9],.28,.5)}{let i=Tn("escalera"),e=en(9),t=Math.atan2(-5.9,6.9);for(let n=0;n<9;n++){let s=8.9+n*.72,r=ce-.28-n*.63;if(re(.8,.12,1.5,"#e0c2a2",s,r,2.8,i.f),![2,5].includes(n)){let a=re(.8,.12,1.5,n%2?bi:"#b3a398",s,r+(e()-.5)*.06,2.8,i.b);a.rotation.z=(e()-.5)*.28,a.rotation.x=(e()-.5)*.1}}for(let n=0;n<9;n+=2)re(.09,1,.09,"#f1d3bb",8.9+n*.72,ce+.22-n*.63,3.62,i.f);{let n=re(Math.hypot(6.9,5.9),.1,.1,"#f1d3bb",12.1,ce-2.7,3.62,i.f);n.rotation.z=t}[1,5].forEach(n=>re(.09,.7,.09,bi,8.9+n*.72,ce+.05-n*.63,3.62,i.b)),Sn(i,8,51,n=>{let s=n()*8;return[8.9+s*.72,ce-.2-s*.63,2.8+(n()-.5)*1.1]},.3,.5)}{let i=Tn("techo"),e=en(33),t=(r,a)=>{let o=new xe;return[[.7,zi],[-2.7,-zi]].forEach(([l,c])=>{let h=re(9.8,.24,4.1,r,1.5,8.3,l,o);h.rotation.x=c+(a&&l>0,0),h.position.z=l}),o},n=t(Xm),s=t("#9b8b88");i.f.add(n),i.b.add(s);for(let r=0;r<11;r++){let a=(r+.5)/11,o=2.3-a*3.3,l=Ur(o)+.13,c=re(9.8,.04,.07,"#f6c3b4",1.5,l,o,i.f);c.rotation.x=zi;let h=re(9.8,.04,.07,"#7e706e",1.5,l,o,i.b);h.rotation.x=zi}[[.5,1.3,1,.7],[3.6,.4,1.2,.8],[-1.8,1.6,.9,.6],[5.6,1.2,.8,.7]].forEach(([r,a,o,l])=>{let c=re(o,.03,l,"#2d2848",r,Ur(a)+.14,a,i.b);c.rotation.x=zi}),Sn(i,14,61,r=>{let a=-.9+r()*3.1;return[-3+r()*9,Ur(a)+.2,a]},.35,.7,{rx:zi})}{let i=Tn("panel"),e=t=>{let n=new xe;if(n.position.set(4.4,Ur(.9)+.28,.9),n.rotation.x=zi,!t)re(2.3,.9,1.5,"#4b342a",0,.45,0,n),re(2,.62,.05,we("#f6ecd4",{emissive:"#ffcf8a",emissiveIntensity:.55}),0,.5,.78,n),[-.5,0,.5].forEach(s=>re(.05,.62,.07,"#4b342a",s,.5,.8,n)),re(2,.05,.07,"#4b342a",0,.5,.8,n),re(2.7,.13,1.95,"#4f596f",0,1,0,n),re(2.4,.1,1.7,"#4f596f",0,1.12,0,n),re(2.7,.06,.1,"#c9a14a",0,.93,1,n);else{re(2,.1,1.3,"#2d2848",0,.02,0,n);let s=re(1.7,.07,.3,"#8d7f74",-.2,.18,.2,n);s.rotation.z=.4;let r=re(1.2,.07,.3,"#8d7f74",.4,.14,-.2,n);r.rotation.z=-.5,r.rotation.y=.4}return n};i.f.add(e(!1)),i.b.add(e(!0)),Sn(i,3,71,t=>[3.3+t()*2.2,Ur(.9)+.4,.5+t()*.8],.3,.5,{rx:zi})}Bc.paint=Ac(200,340,(i,e,t)=>{let n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"#f4e3c4"),n.addColorStop(.55,"#f2c9a4"),n.addColorStop(1,"#e8b49a"),i.fillStyle=n,i.fillRect(0,0,e,t),i.fillStyle="#d9473a",i.beginPath(),i.arc(140,70,26,0,7),i.fill(),i.fillStyle="rgba(120,110,150,.55)",i.beginPath(),i.moveTo(0,200),i.lineTo(60,130),i.lineTo(110,185),i.lineTo(170,120),i.lineTo(e,190),i.lineTo(e,230),i.lineTo(0,230),i.fill(),i.fillStyle="rgba(70,70,100,.8)",i.beginPath(),i.moveTo(0,260),i.lineTo(50,210),i.lineTo(120,260),i.lineTo(e,230),i.lineTo(e,t),i.lineTo(0,t),i.fill(),i.strokeStyle="#2c2a2e",i.lineWidth=5,i.beginPath(),i.moveTo(40,t),i.bezierCurveTo(30,280,60,250,50,210),i.stroke(),i.fillStyle="#2c2a2e";for(let s=0;s<4;s++)i.beginPath(),i.ellipse(48+s*12,205+s*8,28-s*3,7,0,0,7),i.fill();i.fillStyle="#b8362b",i.fillRect(150,285,22,22)});{let i=Tn("ventana"),e=-2.84,t=2.4,n=ce+1.95;[[0,.9],[0,-.9]].forEach(([r,a])=>0);let s=(r,a)=>{re(1.9,.12,.14,r,t,n+.9,e,a),re(1.9,.12,.14,r,t,n-.9,e,a),re(.12,1.9,.14,r,t-.9,n,e,a),re(.12,1.9,.14,r,t+.9,n,e,a)};s("#f2d6c0",i.f),s(bi,i.b),re(1.7,1.7,.05,we("#f6ecd4",{emissive:"#ffd9a8",emissiveIntensity:.6}),t,n,e+.02,i.f),[-.57,0,.57].forEach(r=>re(.05,1.7,.07,"#4b342a",t+r,n,e+.06,i.f)),[-.57,0,.57].forEach(r=>re(1.7,.05,.07,"#4b342a",t,n+r,e+.06,i.f)),re(.07,1.9,.09,"#4b342a",t,n,e+.08,i.f),re(1.7,1.7,.05,"#2b2644",t,n,e+.02,i.b),[[.8,.04,.5],[.04,.7,-.3],[.5,.04,-.6]].forEach(([r,a,o])=>{let l=re(r,a,.02,"#e9e6f5",t+o*.3,n+o*.3,e+.06,i.b);l.rotation.z=o*2}),Sn(i,3,81,r=>[t-.7+r()*1.4,n+.95,e+.1],.25,.4,{wall:!1})}}function $m(){{let i=Tn("librero"),e=-1.4,t=-2.55,n=["#c97d68","#6498b9","#cfb67c","#82ab84","#b0769c","#dad2bc"],s=r=>{let a=new xe;a.position.set(e,ce,t);let o=r?bi:"#d4a98c";re(.1,2.7,.6,o,-.8,1.35,0,a),re(.1,2.7,.6,o,.8,1.35,0,a),re(1.7,2.7,.05,r?"#8e7f7a":"#c49a7d",0,1.35,-.28,a),(r?[0,.9,1.8]:[0,.68,1.36,2.04,2.7]).forEach(h=>re(1.7,.08,.6,o,0,h+.04,0,a));let c=en(r?4:8);if(r){for(let h=0;h<6;h++){let d=re(.14,.5,.38,n[h],-.6+h*.18,.34+(h>3?.9:0),0,a);d.rotation.z=(c()-.5)*.9}for(let h=0;h<5;h++){let d=re(.14,.38,.28,n[h],-.5+c()*1.4,.1,.7+c()*.4,a);d.rotation.z=1.4+c()*.4,d.rotation.y=c()*3}}else for(let h=0;h<4;h++){let d=-.7;for(;d<.6;){let u=.1+c()*.12;re(u,.45+c()*.12,.38,n[c()*6|0],d+u/2,.68*h+.3,0,a),d+=u+.01}}return r&&(a.rotation.z=.1),a};i.f.add(s(!1)),i.b.add(s(!0)),Sn(i,4,91,r=>[e-.7+r()*1.4,ce+2.76,t+(r()-.5)*.3],.25,.4)}{let i=Tn("cama"),e=4.5,t=-1.6,n=s=>{let r=new xe;if(r.position.set(e,ce,t),re(2,.16,2.8,s?"#a9a2b4":"#f0e6cf",0,.14,0,r),s){let a=re(1.5,.12,1.2,"#8d86a0",.2,.26,.3,r);a.rotation.y=.3;let o=re(.9,.1,.3,"#bdb6c9",.2,.24,-1.05,r);o.rotation.y=.2}else{re(1.9,.15,1.95,"#2f4a74",0,.29,.33,r),[-.55,.15,.85].forEach(o=>re(1.92,.16,.1,"#f0e6cf",0,.3,.33+o,r));let a=new oe(new rt(.14,.14,.9,8),we("#d9c08a"));a.rotation.z=Math.PI/2,a.position.set(0,.34,-1.05),r.add(a)}return r};i.f.add(n(!1)),i.b.add(n(!0)),Sn(i,4,101,s=>[e-.8+s()*1.6,ce+.4,t-1.1+s()*2.2],.3,.5)}dm();{let i=Tn("lampara"),e=1.5,t=-1,n=s=>{let r=new xe;r.position.set(e,7.15,t),re(.03,s?.7:1.7,.03,"#6a5058",0,s?.9:1.35,0,r);let a=new oe(new Nt(.46,14,10),new Es({color:s?"#9a919c":"#f8ebd0",side:mn,emissive:s?"#000":"#ffcf8a",emissiveIntensity:s?0:.6,flatShading:!0}));if(a.position.y=.1,a.scale.set(1,.85,1),r.add(a),[.4,-.18].forEach(o=>{let l=new oe(new rt(.2,.2,.06,10),we("#2f2a2a"));l.position.y=o,r.add(l)}),s)r.rotation.z=.35;else{let o=new oe(new Nt(.14,10,8),new je({color:16773320}));o.position.y=-.02,r.add(o)}return r};i.f.add(n(!1)),i.b.add(n(!0)),Sn(i,1,111,s=>[e,7.45,t],.25,.3)}{let i=Tn("luces"),e=en(13),t=[16751202,16773328,15229002,16767392];for(let n=0;n<3;n++){let s=-3+n*3.1,r=s+3.1;for(let a=0;a<=4;a++){let o=a/4,l=Gu(s,r,o),c=7-.35*Math.sin(Math.PI*o),h=2.55,d=t[(n*5+a)%4],u=new oe(new Nt(.15,10,8),new je({color:d}));u.scale.set(1,1.25,1),u.position.set(l,c-.16,h),i.f.add(u);let p=_t(Mt,d,1.5,0,!0);if(p.position.copy(u.position),Ge.add(p),Ot.bulbs.push(p),!(n===1&&a>0&&a<4)){let g=new oe(new Nt(.1,8,6),we("#8d8398"));g.position.set(l,c-.1,h),g.rotation.set(e(),e(),0),i.b.add(g)}if(a<4){let g=Gu(s,r,(a+1)/4),M=7-.35*Math.sin(Math.PI*(a+1)/4),m=re(Math.hypot(g-l,M-c),.02,.02,"#6b4a35",(l+g)/2,(c+M)/2,h,i.f);if(m.rotation.z=Math.atan2(M-c,g-l),n!==1){let f=re(Math.hypot(g-l,M-c),.02,.02,"#6a6076",(l+g)/2,(c+M)/2,h,i.b);f.rotation.z=m.rotation.z}}}}Sn(i,2,121,n=>[-2+n()*7,7.3,2.4],.2,.3)}{let i=Tn("cuadro"),e=.55,t=ce+2.2,n=-2.7,s=r=>{let a=new xe;a.position.set(e,t,n),r&&(a.rotation.z=.28),re(.86,1.65,.04,r?bi:"#2f4a6b",0,0,0,a);let o=new oe(new ni(.62,1.18),r?new Es({color:"#bcb5c8"}):new je({map:Bc.paint}));if(o.position.set(0,-.04,.03),a.add(o),[.84,-.84].forEach(l=>{let c=new oe(new rt(.045,.045,1,8),we("#5a3d2e"));c.rotation.z=Math.PI/2,c.position.set(0,l,.03),a.add(c)}),r){let l=re(.7,.02,.02,"#eee9f7",0,0,.05,a);l.rotation.z=.8}return a};i.f.add(s(!1)),i.b.add(s(!0)),Sn(i,1,131,r=>[e,t+.9,n+.1],.22,.3)}{let i=Tn("plantas"),e=en(7);[[6.5,"#2f4a74",0],[7.3,"#9a6a3c",1]].forEach(([t,n,s])=>{re(.62,.22,.5,n,t,ce+.11,3,i.f),re(.62,.22,.5,"#a89b92",t,ce+.11,3,i.b);let r=new oe(new rt(.05,.09,.7,6),we("#5a3d33"));r.position.set(t,ce+.55,3),r.rotation.z=.25,i.f.add(r),(s?["#f3bccb","#eea9bd","#f8d0da","#e99fb4","#f3bccb"]:["#4f7a58","#5f8f66","#44704f"]).forEach((o,l)=>{let c=new oe(new Ft(s?.2:.26,0),we(o));c.position.set(t+(l-1)*.18+(e()-.5)*.1,ce+.85+l%2*.14,3+(e()-.5)*.25),s||c.scale.set(1.5,.55,1.2),i.f.add(c)});for(let o=0;o<3;o++){let l=re(.03,.45,.03,"#8a7a62",t+(e()-.5)*.4,ce+.55,3+(e()-.5)*.3,i.b);l.rotation.z=(e()-.5)*.8}}),Sn(i,2,141,t=>[6.5+t()*.9,ce+.5,3],.25,.35)}{let i=Tn("nichos"),e=en(17);[[-10.9,2.4],[-8.5,-.2],[-11.1,-2.7]].forEach(([t,n])=>{let s=(c,h,d,u,p)=>{let g=new oe(new rt(c,c,h,6),typeof d=="string"?we(d):d);return g.rotation.x=Math.PI/2,g.rotation.y=Math.PI/6,g.position.set(t,n,u),p.add(g),g};s(.95,.7,"#c89479",5.2,Ke),s(.78,.3,we("#383254"),5.55,i.b),s(.78,.3,new je({color:16769190}),5.55,i.f);let r=new oe(new Nt(.3,10,8),new Es({color:16774096,emissive:16766602,emissiveIntensity:.9,transparent:!0,opacity:.9}));r.position.set(t,n-.25,5.6),i.f.add(r);let a=_t(Mt,16764806,3.2,0,!0);a.position.set(t,n,5.9),Ge.add(a),Ot.nichoGlow.push(a);let o=re(.9,.02,.02,"#cfcbe0",t,n+.2,5.6,i.b);o.rotation.z=.5;let l=re(.9,.02,.02,"#cfcbe0",t,n-.1,5.6,i.b);l.rotation.z=-.4}),Sn(i,3,151,t=>[-11+t()*3,3.7,5.2],.3,.4)}}var pe={th:.3,ph:.15,r:16,tx:2.2,ty:5.6,tz:.5,tth:.3,tph:.15,tr:16,gx:2.2,gy:5.6,gz:.5,focusT:0},Fr=[2.2,5.6,.5],O1=()=>{pe.gx=yt(pe.gx,-4,9),pe.gy=yt(pe.gy,3,9),pe.gz=yt(pe.gz,-3,4)};function Br(){pe.gx=Fr[0],pe.gy=Fr[1],pe.gz=Fr[2],pe.tr=16,pe.tth=.3,pe.tph=.15,pe.focusT=0}var Or=i=>{pe.tr=yt(pe.tr*i,9,34)};function Qa(i,e){let t=pe.r*.0016,n=Math.sin(pe.th),s=Math.cos(pe.th);pe.gx+=-i*s*t,pe.gz+=i*n*t,pe.gy+=e*t,pe.focusT=0,O1()}function td(i){pe.gx=i.focus[0],pe.gy=i.focus[1],pe.gz=i.focus[2],pe.tr=Math.min(pe.tr,14),pe.focusT=4.5}function jm(){let i=document.createElement("div");i.id="camctl",i.style.cssText="position:fixed;right:max(10px,env(safe-area-inset-right));top:64px;z-index:6;display:flex;flex-direction:column;gap:8px",[["+","Acercar",()=>Or(.8)],["\u2212","Alejar",()=>Or(1.25)],["\u2302","Centrar vista",Br]].forEach(([e,t,n])=>{let s=document.createElement("button");s.textContent=e,s.title=s.ariaLabel=t,s.style.cssText="width:44px;height:44px;border-radius:50%;border:1px solid var(--line);background:var(--panel);color:var(--ink);font:600 1.2rem system-ui;cursor:pointer;touch-action:manipulation",s.onclick=r=>{r.stopPropagation(),n()},i.appendChild(s)}),document.body.appendChild(i)}function Km(){addEventListener("keydown",i=>{if(!it.started)return;let e=i.key;e==="+"||e==="="?Or(.85):e==="-"||e==="_"?Or(1.18):e==="r"||e==="R"||e==="0"?Br():e==="ArrowLeft"?pe.tth=yt(pe.tth-.08,-.95,.95):e==="ArrowRight"?pe.tth=yt(pe.tth+.08,-.95,.95):e==="ArrowUp"?pe.tph=yt(pe.tph+.03,.03,.42):e==="ArrowDown"&&(pe.tph=yt(pe.tph-.03,.03,.42))})}function Qm(i,e){let t=it.T;pe.focusT>0&&(pe.focusT-=i,pe.focusT<=0&&(pe.gx=Fr[0],pe.gy=Fr[1],pe.gz=Fr[2],pe.tr=Math.max(pe.tr,16)));let n=1-Math.pow(.004,i);pe.th+=(pe.tth-pe.th)*n,pe.ph+=(pe.tph-pe.ph)*n,pe.r+=(pe.tr-pe.r)*n,pe.tx+=(pe.gx-pe.tx)*n*.6,pe.ty+=(pe.gy-pe.ty)*n*.6,pe.tz+=(pe.gz-pe.tz)*n*.6,e&&(pe.tth+=Math.sin(t*.12)*3e-4);let s=pe.th,r=pe.ph;xn.position.set(pe.tx+pe.r*Math.sin(s)*Math.cos(r),pe.ty+pe.r*Math.sin(r),pe.tz+pe.r*Math.cos(s)*Math.cos(r)),xn.lookAt(pe.tx,pe.ty,pe.tz)}var id=i=>{let e=Xt[i].blobs;return e.length?1-e.reduce((t,n)=>t+n.userData.s,0)/e.length:1},Fs={all:0,items:{}};function zc(){let i=0;tn.forEach(e=>{let t=id(e.id);Fs.items[e.id]=t,i+=t}),Fs.all=i/tn.length,ie.best=Math.max(ie.best,Fs.all)}var us=()=>.55*Math.min(1,Fs.all/.96)+.45*Ds()/tn.length;function eo(i){if(ie.repaired[i.id])return{k:"done",t:"Reparado"};if(hs(i).length)return{k:"locked",t:"Necesita: "+hs(i).map(Ic).join(", ")};let e=Fs.items[i.id]||0;return e<Ja?{k:"locked",t:"Limpia la zona \xB7 "+Math.round(e/Ja*100)+"%"}:Ls()<i.cost?{k:"locked",t:"Faltan "+(i.cost-Ls())+" tablas"}:{k:"ready",t:"Listo \xB7 "+i.cost+" tablas"}}var sd=i=>{for(;i;){if(!i.visible)return!1;i=i.parent}return!0},e0=i=>Xt[i]&&Xt[i].blobs.some(e=>e.visible),Os=()=>yt(928/pe.r,34,90),nd=new D;function to(i,e,t){let n=Xn.getBoundingClientRect(),s=[],r=1e9;return Object.values(Xt).forEach(a=>{sd(a.g)&&a.blobs.forEach(o=>{if(!o.visible)return;o.getWorldPosition(nd);let l=nd.distanceTo(xn.position),c=nd.clone().project(xn);if(c.z>1)return;let h=(c.x+1)/2*n.width+n.left,d=(1-c.y)/2*n.height+n.top,u=Math.hypot(h-i,d-e);u<t&&(s.push({m:o,d:l,dd:u,it:a}),l<r&&(r=l))})}),s.filter(a=>a.d<r+5)}var t0=0;function Ct(i){let e=xt("toast");e.textContent=i,e.classList.add("show"),clearTimeout(t0),t0=setTimeout(()=>e.classList.remove("show"),3200)}var n0={},zr=document.createElement("div");zr.className="grp";function i0(i){om.forEach((e,t)=>{let n=document.createElement("div");n.className="grp";let s=document.createElement("span");s.className="lab",s.textContent=e,n.appendChild(s),tn.filter(r=>r.tier===t).forEach(r=>{let a=document.createElement("button");a.type="button",a.className="chip",a.innerHTML="<b></b><small></small>",a.firstChild.textContent=r.name,a.onclick=()=>i(r),n.appendChild(a),n0[r.id]=a}),xt("chips").appendChild(n)}),xt("chips").appendChild(zr)}function no(){zr.textContent="";let i=document.createElement("span");i.className="lab",i.textContent="Colecci\xF3n",zr.appendChild(i);let e=tn.filter(t=>ie.repaired[t.id]);if(!e.length){let t=document.createElement("span");t.className="loot",t.textContent="Vac\xEDa. Cada reparaci\xF3n te da un objeto.",zr.appendChild(t)}e.forEach(t=>{let n=document.createElement("span");n.className="loot on",n.textContent=t.reward[0],n.title=t.reward[1],zr.appendChild(n)})}function ki(){zc();let i=us();xt("fill").style.width=(i*100).toFixed(1)+"%",Ya(xt("pct"),Math.round(i*100)+"%"),Ya(xt("mats"),"Tablas: "+Math.max(0,Ls())),tn.forEach(e=>{let t=eo(e),n=n0[e.id],s="chip "+t.k;n.className!==s&&(n.className=s),Ya(n.lastChild,t.t)})}var Mi,rd=null;function s0(i){Mi=document.createElement("button"),Mi.style.cssText="position:fixed;top:104px;left:50%;transform:translateX(-50%);z-index:6;background:var(--panel);border:1px solid var(--line);color:var(--ink);padding:7px 14px;border-radius:99px;font:inherit;font-size:.82rem;cursor:pointer;max-width:80%;opacity:0;transition:opacity .5s;pointer-events:none",Mi.id="nextb",document.body.appendChild(Mi),Mi.onclick=()=>{rd&&i(rd)}}function r0(){let i=tn.find(t=>!ie.repaired[t.id]&&!hs(t).length);if(rd=i||null,!i||!it.started){Mi.style.opacity=0,Mi.style.pointerEvents="none";return}let e=eo(i);Ya(Mi,"Siguiente: "+(e.k==="ready"?"repara ":"limpia ")+i.name.toLowerCase()+(e.k==="ready"?" (toca su bot\xF3n)":"")),Mi.style.opacity=.92,Mi.style.pointerEvents="auto"}var kr=!1,ad=0;function a0(i,e){e=e||0;let t=["Inhala","Sost\xE9n","Exhala"],n=[4e3,1e3,6e3],s=xt("bcircle");if(kr){if(e>=15){xt("btxt").textContent="Gracias por respirar",s.style.transform="scale(.7)",ad=setTimeout(()=>{kr=!1,xt("breath").hidden=!0},2800);return}xt("btxt").textContent=t[i];try{i===0&&nt.breathTone(!0,5),i===2&&nt.breathTone(!1,6)}catch{}s.style.transition="transform "+n[i]/1e3+"s ease-in-out",s.style.transform=i===0?"scale(1.5)":i===2?"scale(.7)":s.style.transform,ad=setTimeout(()=>a0((i+1)%3,e+1),n[i])}}function o0(i){PZ.more(xt("top"),[xt("brt"),xt("snd"),xt("rst")].concat(UX.btns("",{hand:!0,wear:!0}))),xt("snd").onclick=()=>{nt.on=!nt.on,nt.ctx&&nt.setOn(nt.on),xt("snd").textContent="Sonido: "+(nt.on?"s\xED":"no")},xt("rst").onclick=i,xt("brt").onclick=()=>{kr=!kr,xt("breath").hidden=!kr,clearTimeout(ad),kr&&(xt("bcircle").style.transform="scale(.7)",a0(0))}}function l0(){let i=xt("panel"),e=()=>document.documentElement.style.setProperty("--ph",i.offsetHeight+"px");e(),addEventListener("resize",e);try{new ResizeObserver(e).observe(i)}catch{}}var on,Si,kc=0;function c0(){on=new xe;{let i=we("#e8d6c0"),e=new oe(new Nt(.42,12,10),i);e.scale.set(1.3,.7,.9),e.position.y=.25,on.add(e);let t=new oe(new Nt(.26,10,8),i);t.position.set(.5,.3,.05),on.add(t),[[.58,.54],[.42,.54]].forEach(([s,r],a)=>{let o=new oe(new Dt(.08,.16,4),i);o.position.set(s,r,.05+(a?-.1:.1)),on.add(o)});let n=new oe(new Rn(.3,.06,6,12,4),we("#d9b995"));n.position.set(-.35,.12,.2),n.rotation.x=1.5,on.add(n)}on.position.set(4.3,ce+.05,2.6),on.rotation.y=-.5,on.userData.itemId="gato",on.visible=!1,Ge.add(on),Si=_t(Mt,16752560,.5,0,!0),Si.visible=!1,Ge.add(Si)}function h0(){Si.position.set(on.position.x+.4,on.position.y+1,on.position.z),Si.visible=!0,kc=1.6,nt.meow(),nt.chime(.2,2),Ct("Ronronea\u2026"),UX.hap(25)}function u0(i,e){on.visible=Object.keys(ie.repaired).length>0,Si.visible&&(kc-=i,Si.position.y+=i*.6,Si.material.opacity=yt(kc,0,1),Si.scale.setScalar(.7+.2*Math.sin(e*8)),kc<=0&&(Si.visible=!1)),on.scale.y=1+.03*Math.sin(e*1.6)}var Jt={on:!1,t:0,dur:1.25,p:new D,d:new D,next:0},d0=9,Vc=[],Ht={on:!1,shown:!1,armT:1/0,t:0,len:46,nextB:0,lan:[]},B1=12,Hc=new Float32Array(120),f0=[],Gc,od,ds;function p0(){Jt.next=30+Math.random()*40;for(let i=0;i<d0;i++){let e=_t(Mt,i?13623551:16777215,Math.max(1.6,5.2-i*.45),0,!0);e.material.fog=!1,e.visible=!1,Ge.add(e),Vc.push(e)}Gc=new At;for(let i=0;i<40;i++)f0.push([-4+Math.random()*13,ce+.6+Math.random()*3,2+Math.random()*3,Math.random()*6.28]);Gc.setAttribute("position",new Yt(Hc,3)),od=new xi({color:16771496,size:.5,map:Mt,transparent:!0,opacity:0,blending:Ui,depthWrite:!1}),ds=new Li(Gc,od),ds.frustumCulled=!1,ds.visible=!1,Ge.add(ds);for(let i=0;i<B1;i++){let e=new xe,t=new je({color:i%3?16758891:16229304,transparent:!0,opacity:0});e.add(new oe(new rt(.2,.15,.34,8),t));let n=_t(Mt,16761466,2.2,0,!0);e.add(n),e.visible=!1,Ge.add(e),Ht.lan.push({g:e,bm:t,gl:n,x0:-3+Math.random()*10,z0:3.2+Math.random()*1.6,del:i*1.1+Math.random()*.8,sp:.8+Math.random()*.5,ph:Math.random()*6.28})}}function ld(){if(Jt.on)return;let i=Math.random()<.5?-1:1;Jt.p.set(-110*i+(Math.random()-.5)*60,95+Math.random()*70,-340),Jt.d.set(i*150,-52-Math.random()*20,0),Jt.on=!0,Jt.t=0,Vc.forEach(e=>e.visible=!0),UX.cap("Estrella fugaz",25e3),nt.sparkle()}function m0(i){if(!Jt.on)return;Jt.t+=i;let e=Math.sin(Math.PI*yt(Jt.t/Jt.dur));Vc.forEach((t,n)=>{let s=Jt.t-n*.03;t.position.copy(Jt.p).addScaledVector(Jt.d,s),t.material.opacity=e*(1-n/d0)*.95}),Jt.t>=Jt.dur&&(Jt.on=!1,Vc.forEach(t=>t.visible=!1))}function cd(){Ht.on||Ht.shown||(Ht.shown=!0,Ht.on=!0,Ht.t=0,Ht.nextB=.3,ds.visible=!0,Ct("Los farolillos suben al cielo"),UX.hap([20,80,20,80,40]))}function g0(i){if(!Ht.on)return;Ht.t+=i;let e=Ht.t;od.opacity=.85*yt(e/4)*yt((Ht.len-e)/8);for(let t=0;t<40;t++){let n=f0[t],s=it.T*.35+n[3];Hc[t*3]=n[0]+Math.sin(s*2+t)*1.6,Hc[t*3+1]=n[1]+Math.sin(s*1.3+t)*.8+e*.04,Hc[t*3+2]=n[2]+Math.cos(s*1.7+t)*1.4}Gc.attributes.position.needsUpdate=!0,Ht.lan.forEach(t=>{let n=e-t.del;if(n<0){t.g.visible=!1;return}t.g.visible=!0;let s=ce+1.2+n*t.sp+n*n*.012;t.g.position.set(t.x0+Math.sin(n*.5+t.ph)*1.2+n*.12,s,t.z0+Math.cos(n*.4+t.ph)*.6-n*.1);let r=yt(n/2)*yt((ce+24-s)/8);t.bm.opacity=r*.9,t.gl.material.opacity=r*.75*(.85+.15*Math.sin(it.T*3+t.ph)),r<=0&&n>3&&(t.g.visible=!1)}),e>Ht.nextB&&e<34&&(Ht.nextB=e+2.2+Math.random()*2,nt.chime(Math.random()*1.6-.8,Math.random()*5|0),Math.random()<.5&&nt.lantern(Math.random()-.5)),e>Ht.len&&(Ht.on=!1,ds.visible=!1,Ht.lan.forEach(t=>t.g.visible=!1))}function z1(){!ie.done&&us()>=.995&&(ie.done=!0,Ct("Tu caba\xF1a est\xE1 lista. Buen trabajo."),UX.hap([20,80,20,80,40]),Bn())}function io(i){if(ie.repaired[i.id]){Ct(i.name+" ya est\xE1 reparado");return}if(eo(i).k!=="ready"){hs(i).length?Ct("Primero repara: "+hs(i).map(Ic).join(", ")):(Fs.items[i.id]||0)<Ja?Ct("Limpia m\xE1s esa zona antes de repararla"):Ct("Faltan "+(i.cost-Ls())+" tablas. Sigue limpiando.");return}ie.spent+=i.cost,ie.repaired[i.id]=!0,Xt[i.id].blobs.forEach(t=>{t.userData.s=Math.min(t.userData.s,0)}),Xt[i.id].blobs.forEach(Oi),Pr(),Us(i.focus),nt.chime((i.focus[0]-1.5)/12,tn.indexOf(i)%5),nt.creak(),UX.hap([12,60,12]),Ds()===tn.length&&(Ht.armT=it.T+2.5),Ct(i.name+" reparado. Ganaste: "+i.reward[0]),ki(),no(),z1(),Bn()}function x0(){UX.ask("\xBFReiniciar la caba\xF1a desde cero?",()=>{hm(),ki(),no(),Ct("Caba\xF1a reiniciada")})}var Wc=[["helecho","suelo","Helecho en maceta",2],["lavanda","suelo","Lavanda",2],["farolpapel","suelo","Farol de papel",3],["tetera","suelo","Tetera humeante",3],["banquito","suelo","Banquito con manta",4],["libros","suelo","Libros con vela",4],["campanilla","colgante","Campanilla de viento",3],["atrapa","colgante","Atrapasue\xF1os",3],["estrellas","colgante","M\xF3vil de estrellas",4],["farolillos","colgante","Farolillos de papel",3],["reloj","pared","Reloj de pared",3],["guitarra","pared","Guitarra",4],["estantito","pared","Estantito con frascos",3],["mapa","pared","Mapa de la monta\xF1a",2],["mojon","roca","Moj\xF3n de piedras",2],["farolpiedra","roca","Farol de piedra",3],["floresroca","roca","Flores de roca",2],["farolpuente","colgante","Linterna del puente",0,0],["petalos","pared","Rama de sakura",0,3],["campanatemplo","colgante","Campana del templo",0,5],["frasco","suelo","Frasco de agua de cascada",0,6],["lotocuenco","suelo","Cuenco de loto",0,9]].map(([i,e,t,n,s])=>({id:i,kind:e,name:t,cost:n,gate:s})),hd={gato:{name:"Un gato",gift:"banquito",notes:["Este gato no es de nadie, pero se sienta justo donde Mara dejaba su silla.","Ronronea cuando la l\xE1mpara est\xE1 encendida. Dicen que Mara hac\xEDa lo mismo."]},zorro:{name:"Un zorro",gift:"mojon",notes:["Un zorro curioso olfatea tus escalones. Alguien le dejaba pan aqu\xED cada tarde.","Deja una piedra pulida junto a la puerta. Parece un regalo."]},buho:{name:"Un b\xFAho",gift:"reloj",notes:["El b\xFAho vigila el barandal. Mara lo llamaba \xABel capataz\xBB.","Ulula suave. Del otro lado de la monta\xF1a, otro le responde."]},mariposa:{name:"Una mariposa lunar",gift:"lavanda",notes:["Una mariposa lunar descansa en tu caba\xF1a. Solo vuelan de noche, como los mapas de Mara.","Sus alas dibujan l\xEDneas parecidas a un mapa de la monta\xF1a."]}};function ud(i){let e=[["Habitar","Settle in","\u66AE\u3089\u3059"],["Volver a reparar","Back to repairs","\u4FEE\u7406\u306B\u3082\u3069\u308B"],["Recuerdos","Keepsakes","\u601D\u3044\u51FA"],["Preparar t\xE9","Make tea","\u304A\u8336\u3092\u3044\u308C\u308B"],["Regar plantas","Water plants","\u690D\u7269\u306B\u6C34\u3092\u3084\u308B"],["Diario de la caba\xF1a","Cabin journal","\u5C0F\u5C4B\u306E\u65E5\u8A18"],["Toca un c\xEDrculo de la caba\xF1a para decorar ese lugar.","Tap a circle in the cabin to decorate that spot.","\u5C0F\u5C4B\u306E\u4E38\u3092\u30BF\u30C3\u30D7\u3057\u3066\u3001\u305D\u306E\u5834\u6240\u3092\u98FE\u308A\u307E\u3057\u3087\u3046\u3002"],["Quitar","Remove","\u306F\u305A\u3059"],["Colocar","Place","\u7F6E\u304F"],["Comprar con recuerdos","Buy with keepsakes","\u601D\u3044\u51FA\u3067\u8CB7\u3046"],["Cerrar","Close","\u9589\u3058\u308B"],["A\xFAn vac\xEDo. Los visitantes dejan notas sobre quien vivi\xF3 aqu\xED.","Still empty. Visitors leave notes about whoever lived here.","\u307E\u3060\u7A7A\u3063\u307D\u3067\u3059\u3002\u8A2A\u308C\u305F\u751F\u304D\u7269\u304C\u3001\u3053\u3053\u306B\u4F4F\u3093\u3067\u3044\u305F\u4EBA\u306E\u8A71\u3092\u6B8B\u3057\u3066\u304F\u308C\u307E\u3059\u3002"],["Porche","Porch","\u30DD\u30FC\u30C1"],["Junto a la ventana","By the window","\u7A93\u306E\u305D\u3070"],["Porche, junto al barandal","Porch, by the railing","\u30DD\u30FC\u30C1\u306E\u624B\u3059\u308A\u306E\u305D\u3070"],["Alero","Eaves","\u8ED2\u4E0B"],["Pared","Wall","\u58C1"],["Mirador de roca","Rock lookout","\u5CA9\u306E\u5C55\u671B\u53F0"],["Helecho en maceta","Potted fern","\u9262\u690D\u3048\u306E\u30B7\u30C0"],["Lavanda","Lavender","\u30E9\u30D9\u30F3\u30C0\u30FC"],["Farol de papel","Paper lantern","\u7D19\u3061\u3087\u3046\u3061\u3093"],["Tetera humeante","Steaming teapot","\u6E6F\u6C17\u306E\u7ACB\u3064\u6025\u9808"],["Banquito con manta","Stool with blanket","\u30D6\u30E9\u30F3\u30B1\u30C3\u30C8\u306E\u30B9\u30C4\u30FC\u30EB"],["Libros con vela","Books with a candle","\u308D\u3046\u305D\u304F\u3068\u672C"],["Campanilla de viento","Wind chime","\u98A8\u9234"],["Atrapasue\xF1os","Dreamcatcher","\u30C9\u30EA\u30FC\u30E0\u30AD\u30E3\u30C3\u30C1\u30E3\u30FC"],["M\xF3vil de estrellas","Star mobile","\u661F\u306E\u30E2\u30D3\u30FC\u30EB"],["Farolillos de papel","Paper lanterns","\u7D19\u306E\u30E9\u30F3\u30BF\u30F3"],["Reloj de pared","Wall clock","\u58C1\u639B\u3051\u6642\u8A08"],["Guitarra","Guitar","\u30AE\u30BF\u30FC"],["Estantito con frascos","Little shelf with jars","\u74F6\u3092\u4E26\u3079\u305F\u5C0F\u3055\u306A\u68DA"],["Mapa de la monta\xF1a","Mountain map","\u5C71\u306E\u5730\u56F3"],["Linterna del puente","Bridge lantern","\u6A4B\u306E\u30E9\u30F3\u30BF\u30F3"],["Rama de sakura","Sakura branch","\u685C\u306E\u679D"],["Campana del templo","Temple bell","\u5BFA\u306E\u9418"],["Frasco de agua de cascada","Waterfall water jar","\u6EDD\u306E\u6C34\u306E\u74F6"],["Cuenco de loto","Lotus bowl","\u84EE\u306E\u9262"],["Del r\xEDo","From the river","\u5DDD\u304B\u3089"],["Moj\xF3n de piedras","Stone cairn","\u77F3\u7A4D\u307F"],["Farol de piedra","Stone lantern","\u77F3\u706F\u7C60"],["Flores de roca","Rock flowers","\u5CA9\u306E\u82B1"],["Llega un visitante","A visitor arrives","\u8A2A\u554F\u8005\u304C\u6765\u307E\u3057\u305F"],["Campanilla de viento","Wind chime","\u98A8\u9234"],["Tetera","Teapot","\u6025\u9808"],["Preparas t\xE9. El vapor sube despacio. Qu\xE9 calma.","You make tea. The steam rises slowly. How calming.","\u304A\u8336\u3092\u3044\u308C\u307E\u3059\u3002\u6E6F\u6C17\u304C\u3086\u3063\u304F\u308A\u6607\u308A\u307E\u3059\u3002\u843D\u3061\u7740\u304D\u307E\u3059\u306D\u3002"],["Primero repara las plantas","Repair the plants first","\u5148\u306B\u690D\u7269\u3092\u76F4\u3057\u307E\u3057\u3087\u3046"],["Riegas las plantas. Huelen a campo.","You water the plants. They smell like the countryside.","\u690D\u7269\u306B\u6C34\u3092\u3084\u308A\u307E\u3059\u3002\u91CE\u539F\u306E\u9999\u308A\u304C\u3057\u307E\u3059\u3002"],["Te dej\xF3: ","He left you: ","\u8D08\u308A\u7269: "],["La caba\xF1a ya se puede habitar: toca \xABHabitar\xBB","The cabin is ready to live in: tap \u201CSettle in\u201D","\u5C0F\u5C4B\u306B\u66AE\u3089\u305B\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002\u300C\u66AE\u3089\u3059\u300D\u3092\u30BF\u30C3\u30D7"],["Este gato no es de nadie, pero se sienta justo donde Mara dejaba su silla.","This cat belongs to no one, but sits right where Mara used to leave her chair.","\u3053\u306E\u732B\u306F\u8AB0\u306E\u3082\u306E\u3067\u3082\u3042\u308A\u307E\u305B\u3093\u304C\u3001\u30DE\u30E9\u304C\u6905\u5B50\u3092\u7F6E\u3044\u3066\u3044\u305F\u5834\u6240\u306B\u3061\u3087\u3053\u3093\u3068\u5EA7\u308A\u307E\u3059\u3002"],["Ronronea cuando la l\xE1mpara est\xE1 encendida. Dicen que Mara hac\xEDa lo mismo.","It purrs when the lamp is on. They say Mara did the same.","\u30E9\u30F3\u30D7\u304C\u3068\u3082\u308B\u3068\u5589\u3092\u9CF4\u3089\u3057\u307E\u3059\u3002\u30DE\u30E9\u3082\u305D\u3046\u3060\u3063\u305F\u305D\u3046\u3067\u3059\u3002"],["Un zorro curioso olfatea tus escalones. Alguien le dejaba pan aqu\xED cada tarde.","A curious fox sniffs at your steps. Someone used to leave it bread here every evening.","\u597D\u5947\u5FC3\u65FA\u76DB\u306A\u30AD\u30C4\u30CD\u304C\u968E\u6BB5\u306E\u306B\u304A\u3044\u3092\u304B\u304E\u307E\u3059\u3002\u6BCE\u5915\u3001\u8AB0\u304B\u304C\u3053\u3053\u306B\u30D1\u30F3\u3092\u7F6E\u3044\u3066\u3044\u307E\u3057\u305F\u3002"],["Deja una piedra pulida junto a la puerta. Parece un regalo.","It leaves a polished stone by the door. It looks like a gift.","\u6238\u53E3\u306B\u307F\u304C\u304B\u308C\u305F\u77F3\u3092\u7F6E\u3044\u3066\u3044\u304D\u307E\u3057\u305F\u3002\u8D08\u308A\u7269\u306E\u3088\u3046\u3067\u3059\u3002"],["El b\xFAho vigila el barandal. Mara lo llamaba \xABel capataz\xBB.","The owl watches over the railing. Mara called him \u201Cthe foreman\u201D.","\u30D5\u30AF\u30ED\u30A6\u304C\u624B\u3059\u308A\u3092\u898B\u5F35\u3063\u3066\u3044\u307E\u3059\u3002\u30DE\u30E9\u306F\u300C\u73FE\u5834\u76E3\u7763\u300D\u3068\u547C\u3093\u3067\u3044\u307E\u3057\u305F\u3002"],["Ulula suave. Del otro lado de la monta\xF1a, otro le responde.","It hoots softly. From the far side of the mountain, another answers.","\u3084\u3055\u3057\u304F\u9CF4\u304F\u3068\u3001\u5C71\u306E\u5411\u3053\u3046\u304B\u3089\u3082\u3046\u4E00\u7FBD\u304C\u7B54\u3048\u307E\u3059\u3002"],["Una mariposa lunar descansa en tu caba\xF1a. Solo vuelan de noche, como los mapas de Mara.","A luna moth rests in your cabin. They only fly at night, like Mara\u2019s maps.","\u30AA\u30CA\u30AC\u30DF\u30BA\u30A2\u30AA\u304C\u5C0F\u5C4B\u3067\u4F11\u3093\u3067\u3044\u307E\u3059\u3002\u591C\u306B\u3057\u304B\u98DB\u3070\u306A\u3044\u3001\u30DE\u30E9\u306E\u5730\u56F3\u306E\u3088\u3046\u306A\u86FE\u3067\u3059\u3002"],["Sus alas dibujan l\xEDneas parecidas a un mapa de la monta\xF1a.","Its wings trace lines like a map of the mountain.","\u305D\u306E\u7FBD\u306E\u6A21\u69D8\u306F\u3001\u5C71\u306E\u5730\u56F3\u306E\u3088\u3046\u3067\u3059\u3002"],["Te faltan ","You are short by ","\u8DB3\u308A\u307E\u305B\u3093: "],["Un visitante deja una nota: ","A visitor leaves a note: ","\u8A2A\u554F\u8005\u304C\u30E1\u30E2\u3092\u6B8B\u3057\u307E\u3057\u305F: "]];i.add(e),i.rx([[/^(.+) · (\d+)$/,(t,n,s)=>s(t[1])+" \xB7 "+t[2]],[/^Recuerdos: (\d+)$/,(t,n)=>(n===1?"Keepsakes: ":"\u601D\u3044\u51FA: ")+t[1]],[/^(.+) · (\d+) s$/,(t,n,s)=>s(t[1])+" \xB7 "+t[2]+" s"],[/^(.+) colocado$/,(t,n,s)=>n===1?s(t[1])+" placed":s(t[1])+"\u3092\u7F6E\u304D\u307E\u3057\u305F"],[/^Te faltan (\d+) recuerdos\. Prepara té o espera visitas\.$/,(t,n)=>n===1?"You need "+t[1]+" more keepsakes. Make tea or wait for visitors.":"\u601D\u3044\u51FA\u304C\u3042\u3068"+t[1]+"\u500B\u5FC5\u8981\u3067\u3059\u3002\u304A\u8336\u3092\u3044\u308C\u308B\u304B\u3001\u8A2A\u554F\u8005\u3092\u5F85\u3061\u307E\u3057\u3087\u3046\u3002"],[/^(.+) · Te dejó: (.+)$/,(t,n,s)=>s(t[1])+" \xB7 "+(n===1?"He left you: ":"\u8D08\u308A\u7269: ")+s(t[2])]])}var y0="zen-sand";var _0=[[170,150,34],[300,235,24],[470,120,30]];function v0(i){i.add([["Jard\xEDn zen","Zen garden","\u7985\u306E\u5EAD"],["Rastrillar la arena con calma","Rake the sand slowly","\u7802\u3092\u3086\u3063\u304F\u308A\u304B\u304D\u5206\u3051\u308B"],["Olas alrededor de las piedras","Ripples around the stones","\u77F3\u306E\u307E\u308F\u308A\u306B\u6CE2\u7D0B"],["Alisar","Smooth","\u306A\u3089\u3059"],["Cerrar","Close","\u9589\u3058\u308B"],["Se abri\xF3 el jard\xEDn zen: ya le\xEDste todas las cartas de Mara","The zen garden is open: you have read all of Mara\u2019s letters","\u7985\u306E\u5EAD\u304C\u958B\u304D\u307E\u3057\u305F\u3002\u30DE\u30E9\u306E\u624B\u7D19\u3092\u3059\u3079\u3066\u8AAD\u307F\u307E\u3057\u305F"],["Arrastra el dedo sobre la arena. No hay prisa ni forma correcta.","Drag your finger over the sand. No rush, no right way.","\u7802\u306E\u4E0A\u3092\u6307\u3067\u306A\u305E\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u6025\u3050\u5FC5\u8981\u3082\u3001\u6B63\u3057\u3044\u5F62\u3082\u3042\u308A\u307E\u305B\u3093\u3002"],["Un momento de calma te dej\xF3 un recuerdo","A calm moment left you a keepsake","\u9759\u304B\u306A\u3072\u3068\u3068\u304D\u304C\u601D\u3044\u51FA\u3092\u3072\u3068\u3064\u6B8B\u3057\u307E\u3057\u305F"],["Mara dej\xF3 escrito: \xABel jard\xEDn no se termina, se acompa\xF1a\xBB","Mara wrote: \u201Ca garden is never finished, only kept company\u201D","\u30DE\u30E9\u306F\u3053\u3046\u66F8\u304D\u307E\u3057\u305F\u3002\u300C\u5EAD\u306F\u5B8C\u6210\u3055\u305B\u308B\u3082\u306E\u3067\u306F\u306A\u304F\u3001\u5BC4\u308A\u305D\u3046\u3082\u306E\u300D"]])}var dd=(i,e)=>{let t=i.ltr||{};for(let n=0;n<(e||11);n++)if(!t[n])return!1;return!0};function b0(i){let e=i.tr||(R=>R),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;z-index:80;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;background:rgba(14,16,36,.94);color:#fbf1e0;font:500 .9rem system-ui;padding:12px";let n=document.createElement("div");n.textContent=e("Jard\xEDn zen"),n.style.cssText="font:600 1.15rem system-ui";let s=document.createElement("canvas");s.width=640,s.height=380,s.style.cssText="position:relative;inset:auto;display:block;height:auto;z-index:auto;width:min(94vw,640px);max-height:58vh;aspect-ratio:640/380;border-radius:18px;border:1px solid #5a609a;touch-action:none;box-shadow:0 10px 40px rgba(0,0,0,.45);cursor:crosshair";let r=document.createElement("div");r.textContent=e("Arrastra el dedo sobre la arena. No hay prisa ni forma correcta."),r.style.cssText="opacity:.7;font-size:.8rem;text-align:center;max-width:90vw";let a=document.createElement("div");a.style.cssText="display:flex;gap:8px;flex-wrap:wrap;justify-content:center";let o=(R,L)=>{let O=document.createElement("button");return O.type="button",O.textContent=e(R),O.style.cssText="min-height:44px;padding:8px 16px;border-radius:99px;border:1px solid #5a609a;background:#363a66;color:#fbf1e0;font:inherit;cursor:pointer",O.onclick=L,a.appendChild(O),O};t.append(n,s,r,a),document.body.appendChild(t);let l=s.getContext("2d"),c=document.createElement("canvas");c.width=640,c.height=380;let h=c.getContext("2d"),d=()=>{h.fillStyle="#d9c9a3",h.fillRect(0,0,640,380);for(let R=0;R<2400;R++)h.fillStyle="rgba("+(R%2?"120,100,70":"255,245,215")+",.07)",h.fillRect(Math.random()*640,Math.random()*380,1.4,1.4)};d();let u=!1;try{let R=localStorage.getItem(y0);if(R){let L=new Image;L.onload=()=>{h.drawImage(L,0,0),f()},L.src=R}}catch{}let p=()=>{if(u){u=!1;try{localStorage.setItem(y0,c.toDataURL("image/png"))}catch{}}},g=(R,L,O)=>{l.fillStyle="rgba(0,0,0,.22)",l.beginPath(),l.ellipse(R+5,L+O*.7,O*1.05,O*.45,0,0,7),l.fill();let k=l.createRadialGradient(R-O*.35,L-O*.4,O*.1,R,L,O*1.1);k.addColorStop(0,"#9d9aa6"),k.addColorStop(1,"#4f4d5a"),l.fillStyle=k,l.beginPath(),l.ellipse(R,L,O,O*.78,0,0,7),l.fill(),l.fillStyle="rgba(110,150,100,.5)",l.beginPath(),l.ellipse(R-O*.2,L-O*.5,O*.4,O*.14,0,0,7),l.fill()},M=(R,L)=>{l.fillStyle="#6b4d3a",l.fillRect(R-4,L-34,8,34),l.fillStyle="#8b6a50",l.fillRect(R-28,L-6,56,10);for(let[O,k,j]of[[-14,-42,15],[10,-52,18],[22,-34,12]])l.fillStyle="#5d9a6c",l.beginPath(),l.arc(R+O,L+k,j,0,7),l.fill(),l.fillStyle="rgba(255,255,255,.12)",l.beginPath(),l.arc(R+O-4,L+k-5,j*.5,0,7),l.fill()},m=(R,L)=>{let O="#8a8896";l.fillStyle=O,l.fillRect(R-14,L-8,28,8),l.fillRect(R-5,L-34,10,28),l.fillRect(R-17,L-42,34,8),l.fillRect(R-11,L-62,22,20),l.fillStyle="rgba(255,225,160,.95)",l.fillRect(R-6,L-57,12,11),l.fillStyle=O,l.beginPath(),l.moveTo(R-19,L-62),l.lineTo(R,L-78),l.lineTo(R+19,L-62),l.fill();let k=l.createRadialGradient(R,L-52,2,R,L-52,60);k.addColorStop(0,"rgba(255,200,120,.35)"),k.addColorStop(1,"rgba(255,200,120,0)"),l.fillStyle=k,l.fillRect(R-60,L-112,120,120)};function f(){l.drawImage(c,0,0);for(let[L,O,k]of _0)g(L,O,k);M(560,330),m(70,340);let R=l.createRadialGradient(640/2,380/2,380*.35,640/2,380/2,380*.9);R.addColorStop(0,"rgba(20,20,40,0)"),R.addColorStop(1,"rgba(20,20,40,.35)"),l.fillStyle=R,l.fillRect(0,0,640,380)}f();let y=null,v=null,x=null,S=()=>{try{if(y=i.ctx&&i.ctx(),!y||v)return;let R=y.createBiquadFilter();if(R.type="bandpass",R.frequency.value=1100,R.Q.value=.6,v=y.createGain(),v.gain.value=0,x=window.UX&&UX.pinkSrc?UX.pinkSrc(y,1):null,!x)return;x.connect(R),R.connect(v),window.UX?UX.out(y,v):v.connect(y.destination),x.start(0)}catch{v=null}},E=R=>{try{v&&y&&v.gain.setTargetAtTime(R,y.currentTime,.05)}catch{}},A=null,_=0,w=0,C=0,P=0,N=R=>{let L=s.getBoundingClientRect();return[(R.clientX-L.left)/L.width*640,(R.clientY-L.top)/L.height*380]};s.addEventListener("pointerdown",R=>{s.setPointerCapture(R.pointerId),A=N(R),S(),E(.012)}),s.addEventListener("pointermove",R=>{if(!A)return;let L=N(R),O=L[0]-A[0],k=L[1]-A[1],j=Math.hypot(O,k);if(j<2)return;let G=-k/j,Y=O/j;for(let K=-2;K<=2;K++){let Le=G*K*8,Ce=Y*K*8;h.lineCap="round",h.lineWidth=3.2,h.strokeStyle="rgba(95,78,52,.34)",h.beginPath(),h.moveTo(A[0]+Le+1,A[1]+Ce+1),h.lineTo(L[0]+Le+1,L[1]+Ce+1),h.stroke(),h.lineWidth=2,h.strokeStyle="rgba(255,248,225,.5)",h.beginPath(),h.moveTo(A[0]+Le-1,A[1]+Ce-1),h.lineTo(L[0]+Le-1,L[1]+Ce-1),h.stroke()}if(A=L,_+=j,u=!0,f(),E(Math.min(.03,.006+j*.0012)),_>1100&&w<3){_=0,w++;try{i.addMem&&i.addMem(1),i.say&&i.say(e("Un momento de calma te dej\xF3 un recuerdo"))}catch{}}});let B=()=>{A=null,E(0),p()};s.addEventListener("pointerup",B),s.addEventListener("pointercancel",B),o("Olas alrededor de las piedras",()=>{for(let[R,L,O]of _0)for(let k=O+14;k<O+112;k+=11)h.lineWidth=3,h.strokeStyle="rgba(95,78,52,.32)",h.beginPath(),h.ellipse(R+1,L+1,k,k*.8,0,0,7),h.stroke(),h.lineWidth=1.8,h.strokeStyle="rgba(255,248,225,.5)",h.beginPath(),h.ellipse(R-1,L-1,k,k*.8,0,0,7),h.stroke();u=!0,f(),p();try{i.chime&&i.chime()}catch{}}),o("Alisar",()=>{d(),u=!0,f(),p()}),o("Cerrar",()=>{B();try{x&&x.stop&&x.stop(),v&&v.disconnect()}catch{}t.remove()}),t.onclick=R=>{R.target===t&&a.lastChild.click()}}var k1="rio-day",fd=[["Hoy no tienes que llegar a ning\xFAn sitio.","You do not have to get anywhere today.","\u4ECA\u65E5\u306F\u3069\u3053\u304B\u3078\u7740\u304B\u306A\u304F\u3066\u5927\u4E08\u592B\u3002"],["El agua tambi\xE9n descansa mientras avanza.","Water also rests while it moves.","\u6C34\u306F\u6D41\u308C\u306A\u304C\u3089\u3082\u4F11\u3093\u3067\u3044\u307E\u3059\u3002"],["Respira hondo. Lo dem\xE1s puede esperar a ma\xF1ana.","Breathe deep. The rest can wait until tomorrow.","\u6DF1\u547C\u5438\u3092\u3002\u3042\u3068\u306F\u660E\u65E5\u3067\u3044\u3044\u3002"],["Algo peque\xF1o hecho con calma ya es suficiente.","One small thing done calmly is enough.","\u5C0F\u3055\u306A\u3053\u3068\u3092\u3086\u3063\u304F\u308A\u3002\u305D\u308C\u3067\u5341\u5206\u3067\u3059\u3002"],["Las nubes no se apuran y aun as\xED llegan.","Clouds never hurry and still they arrive.","\u96F2\u306F\u6025\u304C\u306A\u3044\u306E\u306B\u3001\u3061\u3083\u3093\u3068\u7740\u304D\u307E\u3059\u3002"],["Mara dejar\xEDa una nota: \xABmira hacia arriba un momento\xBB.","Mara would leave a note: \u201Clook up for a moment\u201D.","\u30DE\u30E9\u306A\u3089\u30E1\u30E2\u3092\u6B8B\u3059\u3067\u3057\u3087\u3046\u3002\u300C\u5C11\u3057\u7A7A\u3092\u898B\u4E0A\u3052\u3066\u300D\u3002"],["No hace falta entenderlo todo esta noche.","You do not need to understand everything tonight.","\u4ECA\u591C\u3001\u3059\u3079\u3066\u3092\u5206\u304B\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002"],["Una taza caliente y un r\xEDo quieto: buen plan.","A warm cup and a quiet river: a good plan.","\u6E29\u304B\u3044\u304A\u8336\u3068\u9759\u304B\u306A\u5DDD\u3002\u3044\u3044\u8A08\u753B\u3067\u3059\u3002"],["Lo que pesa hoy flota un poco m\xE1s ligero en el agua.","What weighs on you today floats lighter on the water.","\u4ECA\u65E5\u306E\u91CD\u3055\u3082\u3001\u6C34\u306E\u4E0A\u3067\u306F\u5C11\u3057\u8EFD\u304F\u306A\u308A\u307E\u3059\u3002"],["Est\xE1 bien ir despacio. As\xED se ven m\xE1s cosas.","It is fine to go slowly. You see more that way.","\u3086\u3063\u304F\u308A\u3067\u5927\u4E08\u592B\u3002\u305D\u306E\u307B\u3046\u304C\u591A\u304F\u304C\u898B\u3048\u307E\u3059\u3002"],["Cada farolillo es un \xABgracias\xBB que nadie pidi\xF3.","Every lantern is a \u201Cthank you\u201D nobody asked for.","\u3061\u3087\u3046\u3061\u3093\u306F\u3072\u3068\u3064\u305A\u3064\u3001\u983C\u307E\u308C\u306A\u3044\u300C\u3042\u308A\u304C\u3068\u3046\u300D\u3002"],["El r\xEDo no compara tu ritmo con el de nadie.","The river does not compare your pace with anyone\u2019s.","\u5DDD\u306F\u3042\u306A\u305F\u306E\u901F\u3055\u3092\u8AB0\u3068\u3082\u6BD4\u3079\u307E\u305B\u3093\u3002"],["Escucha un rato: siempre hay algo suave sonando.","Listen a while: something gentle is always playing.","\u3057\u3070\u3089\u304F\u8033\u3092\u3059\u307E\u305B\u3066\u3002\u3044\u3064\u3082\u3084\u3055\u3057\u3044\u97F3\u304C\u3057\u3066\u3044\u307E\u3059\u3002"],["Hoy cuenta aunque solo hayas flotado un poco.","Today counts even if you only floated a little.","\u5C11\u3057\u6D6E\u304B\u3093\u3060\u3060\u3051\u3067\u3082\u3001\u4ECA\u65E5\u306F\u3061\u3083\u3093\u3068\u4E00\u65E5\u3067\u3059\u3002"]];var M0=()=>{try{return JSON.parse(localStorage.getItem(k1)||"{}")||{}}catch{return{}}};var Xc=()=>M0().n||0,S0=()=>M0().log||[];var E0=i=>{i.cnt=i.cnt||{};let e=Math.max(0,Xc()-(i.cnt.dl||0));return e&&(i.cnt.dl=Xc()),e};function T0(i){i.add(fd.map(e=>[e[0],e[1],e[2]])),i.add([["Farolillos del d\xEDa","Lanterns of the day","\u4ECA\u65E5\u306E\u3061\u3087\u3046\u3061\u3093"],["Hoy ya recogiste el farolillo. Ma\xF1ana habr\xE1 otro.","You already picked up today\u2019s lantern. There will be another tomorrow.","\u4ECA\u65E5\u306E\u3061\u3087\u3046\u3061\u3093\u306F\u3082\u3046\u62FE\u3044\u307E\u3057\u305F\u3002\u660E\u65E5\u307E\u305F\u6D41\u308C\u3066\u304D\u307E\u3059\u3002"],["A\xFAn no recoges ninguno","You have not picked up any yet","\u307E\u3060\u62FE\u3063\u3066\u3044\u307E\u305B\u3093"]])}var H1="rio-album",ro=[["koi","Carpa koi","Koi carp","\u9326\u9BC9","Se acercan despacio y nadan junto a la canoa, como si te conocieran.","They drift close and swim beside the canoe as if they knew you.","\u3086\u3063\u304F\u308A\u8FD1\u3065\u3044\u3066\u3001\u30AB\u30CC\u30FC\u306E\u305D\u3070\u3092\u6CF3\u304E\u307E\u3059\u3002\u307E\u308B\u3067\u77E5\u308A\u5408\u3044\u306E\u3088\u3046\u306B\u3002"],["pato","Pato del r\xEDo","River duck","\u5DDD\u306E\u30AB\u30E2","Decide acompa\xF1arte un rato y luego sigue su camino.","Chooses to keep you company for a while, then goes its own way.","\u3057\u3070\u3089\u304F\u5BC4\u308A\u305D\u3063\u3066\u304F\u308C\u3066\u3001\u3084\u304C\u3066\u81EA\u5206\u306E\u9053\u3078\u3002"],["garza","Garza blanca","White heron","\u30B7\u30E9\u30B5\u30AE","Pesca sin prisa. Alza el vuelo solo cuando pasas muy cerca.","Fishes without hurry. Takes flight only when you pass very close.","\u6025\u304C\u305A\u9B5A\u3092\u5F85\u3061\u307E\u3059\u3002\u3068\u3066\u3082\u8FD1\u304F\u3092\u901A\u308B\u3068\u98DB\u3073\u7ACB\u3061\u307E\u3059\u3002"],["libelula","Lib\xE9lula","Dragonfly","\u30C8\u30F3\u30DC","Se posa un instante en la proa y se va, ligera como un pensamiento.","Lands on the bow for an instant and leaves, light as a thought.","\u8239\u9996\u306B\u305D\u3063\u3068\u6B62\u307E\u3063\u3066\u3001\u8003\u3048\u3054\u3068\u306E\u3088\u3046\u306B\u8EFD\u304F\u53BB\u308A\u307E\u3059\u3002"],["loto","Flor de loto","Lotus flower","\u84EE\u306E\u82B1","Abre al anochecer en los estanques tranquilos.","Opens at dusk in the quiet ponds.","\u9759\u304B\u306A\u6C60\u3067\u5915\u66AE\u308C\u306B\u958B\u304D\u307E\u3059\u3002"],["festival","Festival de linternas","Lantern festival","\u3061\u3087\u3046\u3061\u3093\u796D\u308A","La aldea enciende farolillos para quien llega de noche.","The village lights lanterns for whoever arrives at night.","\u591C\u306B\u7740\u3044\u305F\u4EBA\u306E\u305F\u3081\u306B\u3001\u6751\u304C\u3061\u3087\u3046\u3061\u3093\u3092\u3068\u3082\u3057\u307E\u3059\u3002"]],so=null,w0=()=>{if(so)return so;try{so=JSON.parse(localStorage.getItem(H1)||"{}")||{}}catch{so={}}return so};function A0(i){try{T0(i)}catch{}i.add(ro.map(e=>[e[1],e[2],e[3]])),i.add(ro.map(e=>[e[4],e[5],e[6]])),i.add([["Cuaderno del r\xEDo","River notebook","\u5DDD\u306E\u30CE\u30FC\u30C8"],["A\xFAn no lo has visto","You have not seen this yet","\u307E\u3060\u898B\u3066\u3044\u307E\u305B\u3093"],["Nueva anotaci\xF3n en el cuaderno del r\xEDo","New entry in the river notebook","\u5DDD\u306E\u30CE\u30FC\u30C8\u306B\u65B0\u3057\u3044\u8A18\u9332"],["Se llena solo, a su ritmo. No hay prisa.","It fills by itself, at its own pace. No rush.","\u3086\u3063\u304F\u308A\u3001\u3072\u3068\u308A\u3067\u306B\u57CB\u307E\u3063\u3066\u3044\u304D\u307E\u3059\u3002"],["Cerrar","Close","\u9589\u3058\u308B"],["Anotado: ","Noted: ","\u8A18\u9332: "],["anotaciones","entries","\u4EF6"]])}var qc=()=>Object.keys(w0()).length;function R0(i){i.cnt=i.cnt||{};let e=Math.max(0,qc()-(i.cnt.alb||0));return e&&(i.cnt.alb=qc()),e}function C0(i){i=i||(window.UX?UX.tr:(o=>o));let e=w0(),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;z-index:80;display:grid;place-items:center;background:rgba(14,16,36,.88);padding:12px";let n=document.createElement("div");n.style.cssText="background:#363a66;color:#fbf1e0;border:1px solid #5a609a;border-radius:16px;padding:18px 20px;max-width:min(92vw,460px);max-height:82vh;overflow:auto;font:15px/1.45 system-ui";let s=document.createElement("h2");s.style.cssText="margin:0 0 4px;font:600 1.15rem system-ui",s.textContent=i("Cuaderno del r\xEDo");let r=document.createElement("div");r.style.cssText="opacity:.65;font-size:.8rem;margin-bottom:12px",r.textContent=i("Se llena solo, a su ritmo. No hay prisa."),n.append(s,r),ro.forEach(o=>{let l=!!e[o[0]],c=document.createElement("div");c.style.cssText="margin:0 0 12px;padding:10px 12px;border-radius:12px;background:"+(l?"rgba(255,233,184,.10)":"rgba(255,255,255,.04)")+";"+(l?"":"opacity:.55");let h=document.createElement("div");h.style.cssText="font-weight:600",h.textContent=(l?"\u2726 ":"\xB7 ")+(l?i(o[1]):"?");let d=document.createElement("div");d.style.cssText="font-size:.88em;opacity:.85",d.textContent=i(l?o[4]:"A\xFAn no lo has visto"),c.append(h,d),n.appendChild(c)});{let o=document.createElement("div");o.style.cssText="font-weight:600;margin:14px 0 6px",o.textContent=i("Farolillos del d\xEDa")+" \xB7 "+Xc(),n.appendChild(o);let l=S0().slice().reverse();if(!l.length){let c=document.createElement("div");c.style.cssText="opacity:.55;font-size:.88em;margin-bottom:12px",c.textContent=i("A\xFAn no recoges ninguno"),n.appendChild(c)}l.forEach(c=>{let h=document.createElement("div");h.style.cssText="margin:0 0 8px;padding:8px 12px;border-radius:12px;background:rgba(255,233,184,.08);font-size:.88em",h.textContent="\u{1F3EE} "+i(fd[c[1]][0]),n.appendChild(h)})}let a=document.createElement("button");a.type="button",a.textContent=i("Cerrar"),a.style.cssText="min-height:44px;padding:8px 18px;border-radius:99px;border:1px solid #5a609a;background:#2b2d52;color:#fbf1e0;font:inherit;cursor:pointer",a.onclick=()=>t.remove(),n.appendChild(a),t.appendChild(n),t.onclick=o=>{o.target===t&&t.remove()},document.body.appendChild(t)}var G1="rio-still";var V1=()=>{try{return JSON.parse(localStorage.getItem(G1)||"{}")||{}}catch{return{}}},I0=()=>V1().n||0,P0=i=>{i.cnt=i.cnt||{};let e=Math.max(0,I0()-(i.cnt.st||0));return e&&(i.cnt.st=I0()),e};var W1="rio-found-types",_d=[["Puente de madera","Dej\xE9 la caba\xF1a al amanecer. El primer puente cruje igual que mi escalera: me dio confianza.","I left the cabin at dawn. The first bridge creaks just like my stairs, and that made me brave.","\u591C\u660E\u3051\u306B\u5C0F\u5C4B\u3092\u51FA\u307E\u3057\u305F\u3002\u6700\u521D\u306E\u6A4B\u306F\u79C1\u306E\u968E\u6BB5\u3068\u540C\u3058\u3088\u3046\u306B\u304D\u3057\u3093\u3067\u3001\u52C7\u6C17\u3092\u304F\u308C\u307E\u3057\u305F\u3002"],["Torii sobre el agua","Pas\xE9 bajo un portal que flota. Ped\xED un deseo en voz baja: que la caba\xF1a nunca se quede sola.","I drifted under a gate that floats. I whispered a wish: that the cabin is never left alone.","\u6C34\u306B\u6D6E\u304B\u3076\u9580\u3092\u304F\u3050\u308A\u3001\u5C0F\u3055\u306A\u58F0\u3067\u9858\u3044\u307E\u3057\u305F\u3002\u5C0F\u5C4B\u304C\u3072\u3068\u308A\u307C\u3063\u3061\u306B\u306A\u308A\u307E\u305B\u3093\u3088\u3046\u306B\u3002"],["Aldea de farolillos","Una aldea entera enciende farolillos para recibir a quien llega. Por primera vez no me sent\xED de paso.","A whole village lights lanterns for whoever arrives. For once I did not feel like I was just passing through.","\u6751\u3058\u3085\u3046\u304C\u3001\u8A2A\u308C\u308B\u4EBA\u306E\u305F\u3081\u306B\u63D0\u706F\u3092\u3068\u3082\u3057\u307E\u3059\u3002\u521D\u3081\u3066\u300C\u901A\u308A\u3059\u304C\u308A\u300D\u3068\u611F\u3058\u307E\u305B\u3093\u3067\u3057\u305F\u3002"],["Jard\xEDn de sakura","Los cerezos sueltan p\xE9talos como si el aire tuviera memoria. Guard\xE9 uno para ti, entre las p\xE1ginas del mapa.","The cherry trees let go of petals as if the air had a memory. I saved one for you between the map pages.","\u685C\u306F\u3001\u7A7A\u6C17\u304C\u8A18\u61B6\u3092\u6301\u3063\u3066\u3044\u308B\u304B\u306E\u3088\u3046\u306B\u82B1\u3073\u3089\u3092\u6563\u3089\u3057\u307E\u3059\u3002\u5730\u56F3\u306E\u9593\u306B\u4E00\u679A\u3001\u3042\u306A\u305F\u306E\u305F\u3081\u306B\u631F\u307F\u307E\u3057\u305F\u3002"],["Ca\xF1averal de las garzas","Las garzas pescan sin prisa. Aprend\xED de ellas que esperar tambi\xE9n es avanzar.","The herons fish without hurry. They taught me that waiting is also a way of moving forward.","\u30B5\u30AE\u306F\u6025\u304C\u305A\u9B5A\u3092\u5F85\u3061\u307E\u3059\u3002\u5F85\u3064\u3053\u3068\u3082\u524D\u306B\u9032\u3080\u3053\u3068\u3060\u3068\u6559\u308F\u308A\u307E\u3057\u305F\u3002"],["Templo de la campana","La campana suena una vez y el r\xEDo entero se acomoda. Quise que la oyeras desde tu balc\xF3n.","The bell rings once and the whole river settles. I wanted you to hear it from your balcony.","\u9418\u304C\u3072\u3068\u3064\u9CF4\u308B\u3068\u3001\u5DDD\u305C\u3093\u305F\u3044\u304C\u9759\u307E\u308A\u307E\u3059\u3002\u3042\u306A\u305F\u306E\u30D0\u30EB\u30B3\u30CB\u30FC\u304B\u3089\u3082\u805E\u3053\u3048\u305F\u3089\u3044\u3044\u306E\u306B\u3002"],["Cascadita de musgo","Una cascada peque\xF1ita, verde de tan callada. Me qued\xE9 una tarde entera y no extra\xF1\xE9 nada.","A tiny waterfall, green with quiet. I stayed a whole afternoon and missed nothing.","\u9759\u3051\u3055\u3067\u7DD1\u306B\u67D3\u307E\u3063\u305F\u5C0F\u3055\u306A\u6EDD\u3002\u5348\u5F8C\u3044\u3063\u3071\u3044\u904E\u3054\u3057\u3066\u3001\u4F55\u3082\u604B\u3057\u304F\u306A\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002"],["Casa de t\xE9","Me sirvieron t\xE9 sin preguntar nada. Dej\xE9 encima de la mesa tu receta, por si quieres hacerla en la caba\xF1a.","They served me tea without asking a thing. I left your recipe on the table, in case you want to make it at the cabin.","\u4F55\u3082\u805E\u304B\u305A\u306B\u304A\u8336\u3092\u51FA\u3057\u3066\u304F\u308C\u307E\u3057\u305F\u3002\u5C0F\u5C4B\u3067\u3082\u4F5C\u308C\u308B\u3088\u3046\u3001\u30EC\u30B7\u30D4\u3092\u673A\u306B\u6B8B\u3057\u307E\u3057\u305F\u3002"],["Bosque de bamb\xFA","El bamb\xFA canta cuando sopla el viento. Pens\xE9 en tu campanilla y sonre\xED sola.","The bamboo sings when the wind blows. I thought of your wind chime and smiled to myself.","\u98A8\u304C\u5439\u304F\u3068\u7AF9\u304C\u6B4C\u3044\u307E\u3059\u3002\u3042\u306A\u305F\u306E\u98A8\u9234\u3092\u601D\u3044\u51FA\u3057\u3066\u3001\u3072\u3068\u308A\u3067\u5FAE\u7B11\u307F\u307E\u3057\u305F\u3002"],["Estanque de lotos","Un estanque de lotos que se abre de noche. Todo lo que empieza despacio merece su tiempo.","A lotus pond that opens at night. Everything that begins slowly deserves its time.","\u591C\u306B\u958B\u304F\u84EE\u306E\u6C60\u3002\u3086\u3063\u304F\u308A\u59CB\u307E\u308B\u3082\u306E\u306B\u306F\u3001\u305D\u308C\u3060\u3051\u306E\u6642\u9593\u304C\u5FC5\u8981\u3067\u3059\u3002"],["Castillo de la Garza Blanca","Llegu\xE9. El castillo brilla igual que las luces de tu terraza. No hac\xEDa falta llegar tan lejos para entenderlo: mi casa siempre fue la caba\xF1a. Cu\xEDdala a tu gusto; ya es tuya.","I made it. The castle glows just like the lights on your deck. I did not need to come this far to understand it: my home was always the cabin. Keep it your way; it is yours now.","\u305F\u3069\u308A\u7740\u304D\u307E\u3057\u305F\u3002\u57CE\u306F\u3001\u3042\u306A\u305F\u306E\u30C6\u30E9\u30B9\u306E\u706F\u308A\u3068\u540C\u3058\u3088\u3046\u306B\u8F1D\u3044\u3066\u3044\u307E\u3059\u3002\u3053\u3053\u307E\u3067\u6765\u306A\u304F\u3066\u3082\u5206\u304B\u3063\u305F\u306F\u305A\u3067\u3059\u3002\u79C1\u306E\u5BB6\u306F\u3044\u3064\u3082\u5C0F\u5C4B\u3067\u3057\u305F\u3002\u597D\u304D\u306A\u3088\u3046\u306B\u5B88\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u3082\u3046\u3042\u306A\u305F\u306E\u3082\u306E\u3067\u3059\u3002"]],X1=_d.map(i=>i[0]),U0=_d.map(i=>i[1]),Jc=()=>{let i=new Set;for(let e of["rio3d-found",W1])try{JSON.parse(localStorage.getItem(e)||"[]").forEach(t=>i.add(t))}catch{}return i};function vd(i){A0(i),V0(i),q1(i),v0(i),i.add(_d.map(e=>[e[1],e[2],e[3]])),i.add([["Puente de madera","Wooden bridge","\u6728\u306E\u6A4B"],["Torii sobre el agua","Torii over the water","\u6C34\u4E0A\u306E\u9CE5\u5C45"],["Aldea de farolillos","Lantern village","\u3061\u3087\u3046\u3061\u3093\u306E\u6751"],["Jard\xEDn de sakura","Sakura garden","\u685C\u306E\u5EAD"],["Ca\xF1averal de las garzas","Heron reedbed","\u30B5\u30AE\u306E\u8466\u539F"],["Templo de la campana","Bell temple","\u9418\u306E\u5BFA"],["Cascadita de musgo","Mossy waterfall","\u82D4\u306E\u5C0F\u3055\u306A\u6EDD"],["Casa de t\xE9","Tea house","\u8336\u5C4B"],["Bosque de bamb\xFA","Bamboo forest","\u7AF9\u6797"],["Estanque de lotos","Lotus pond","\u84EE\u306E\u6C60"],["Castillo de la Garza Blanca","White Heron Castle","\u767D\u9DFA\u57CE"],["Cartas de Mara","Mara\u2019s letters","\u30DE\u30E9\u306E\u624B\u7D19"],["Carta sin abrir","Unopened letter","\u672A\u958B\u5C01\u306E\u624B\u7D19"],["Desc\xFAbrelo en el r\xEDo para leerla","Discover it on the river to read it","\u5DDD\u3067\u898B\u3064\u3051\u308B\u3068\u8AAD\u3081\u307E\u3059"],["Abrir carta","Open letter","\u624B\u7D19\u3092\u958B\u304F"],["Notas de visitantes","Visitor notes","\u8A2A\u554F\u8005\u306E\u30E1\u30E2"],["Mara te dej\xF3 una carta","Mara left you a letter","\u30DE\u30E9\u304C\u624B\u7D19\u3092\u6B8B\u3057\u307E\u3057\u305F"],["Carta de Mara","Letter from Mara","\u30DE\u30E9\u306E\u624B\u7D19"],["Una carta nueva te espera en el diario","A new letter waits in the diary","\u65E5\u8A18\u306B\u65B0\u3057\u3044\u624B\u7D19\u304C\u5C4A\u3044\u3066\u3044\u307E\u3059"]]),i.rx([[/^Carta sin abrir · (.+)$/,(e,t,n)=>n("Carta sin abrir")+" \xB7 "+n(e[1])]])}var pd=i=>Object.values(i.decor||{}).filter(Boolean).length,L0=i=>Object.keys(i.own||{}).length,md=i=>(i.notes||[]).length,D0=i=>i.cnt||{},bd=[[i=>!!(i.repaired&&i.repaired.techo),"Termina de reparar el techo","Finish repairing the roof","\u5C4B\u6839\u306E\u4FEE\u7406\u3092\u304A\u308F\u3089\u305B\u308B"],[i=>L0(i)>=1,"Coloca tu primer objeto","Place your first object","\u6700\u521D\u306E\u98FE\u308A\u3092\u7F6E\u304F"],[i=>md(i)>=1,"Recibe a tu primer visitante","Welcome your first visitor","\u6700\u521D\u306E\u8A2A\u554F\u8005\u3092\u8FCE\u3048\u308B"],[i=>(D0(i).te||0)>=1,"Prepara un t\xE9","Make a cup of tea","\u304A\u8336\u3092\u3044\u308C\u308B"],[i=>pd(i)>=2,"Decora dos lugares de la caba\xF1a","Decorate two spots in the cabin","\u5C0F\u5C4B\u306E2\u304B\u6240\u3092\u98FE\u308B"],[i=>(D0(i).rg||0)>=1,"Riega las plantas","Water the plants","\u690D\u7269\u306B\u6C34\u3092\u3084\u308B"],[i=>md(i)>=3,"Escucha las historias de tres visitas","Hear the stories of three visits","3\u56DE\u306E\u8A2A\u554F\u8005\u306E\u8A71\u3092\u805E\u304F"],[i=>pd(i)>=4,"Decora cuatro lugares","Decorate four spots","4\u304B\u6240\u3092\u98FE\u308B"],[i=>L0(i)>=5,"Re\xFAne cinco objetos","Gather five objects","\u98FE\u308A\u30925\u3064\u96C6\u3081\u308B"],[i=>md(i)>=6,"Lee seis notas de los visitantes","Read six visitor notes","\u8A2A\u554F\u8005\u306E\u30E1\u30E2\u30926\u3064\u8AAD\u3080"],[i=>pd(i)>=6,"Deja decorados todos los lugares","Leave every spot decorated","\u3059\u3079\u3066\u306E\u5834\u6240\u3092\u98FE\u308B"]],gd=(i,e)=>!!(i.ltr||{})[e]||Jc().has(e)&&bd[e][0](i);function q1(i){i.add(bd.map(e=>[e[1],e[2],e[3]])),i.add([["Desc\xFAbrelo en el r\xEDo","Discover it on the river","\u5DDD\u3067\u898B\u3064\u3051\u307E\u3057\u3087\u3046"],["Pista","Hint","\u30D2\u30F3\u30C8"],["Se abri\xF3 una carta nueva en el diario","A new letter opened in the diary","\u65E5\u8A18\u306B\u65B0\u3057\u3044\u624B\u7D19\u304C\u958B\u304D\u307E\u3057\u305F"]])}function F0(i,e,t,n,s){let r=Jc(),a=ao(),o=Ed();e.ltr=e.ltr||{};let l=0,c=0,h=document.createElement("h3");h.style.cssText="margin:12px 0 8px;font:600 .95rem system-ui",h.textContent=t("Cartas de Mara"),i.appendChild(h),U0.forEach((M,m)=>{let f=document.createElement("p");f.style.margin="0 0 10px";let y=v=>{let x=document.createElement("span");x.textContent=v,f.appendChild(x)};if(y("\u2709 "),gd(e,m)){if(e.ltr[m]||(e.ltr[m]=1,l++),y(t(M)),f.style.color="#ffe9b8",a[m]&&yd(m)){let v=document.createElement("div");v.style.cssText="margin:6px 0 0 14px;font-size:.88em;color:#cfe8ff";let x=document.createElement("span");x.textContent="\u2726 ";let S=document.createElement("span");S.textContent=t(yd(m)[3]),v.append(x,S),f.appendChild(v),e.ltr[m]<2&&(e.ltr[m]=2,l++)}if(o[m]&&xd(m)){let v=document.createElement("div");v.style.cssText="margin:6px 0 0 14px;font-size:.88em;color:#e8d3ff";let x=document.createElement("span");x.textContent="\u21A9 ";let S=document.createElement("span");S.textContent=t(xd(m)[3]),v.append(x,S),f.appendChild(v),c++}}else{y(t("Carta sin abrir")),y(" \xB7 "),y(t(X1[m])),f.style.opacity=".6";let v=document.createElement("div");v.style.cssText="margin:4px 0 0 14px;font-size:.82em;color:#cfd6ff";let x=document.createElement("span");x.textContent="\u2727 ";let S=document.createElement("span");S.textContent=t(r.has(m)?bd[m][1]:"Desc\xFAbrelo en el r\xEDo"),v.append(x,S),f.appendChild(v)}i.appendChild(f)});let d=R0(e)+0,u=E0(e)+P0(e);(d||u)&&(n(2*d+u),s());let p=document.createElement("button");p.type="button",p.textContent=t("Cuaderno del r\xEDo")+" \xB7 "+qc()+"/"+ro.length,p.style.cssText="min-height:44px;margin:4px 8px 4px 0;padding:8px 14px;border-radius:99px;border:1px solid #5a609a;background:#2b2d52;color:#fbf1e0;font:inherit;cursor:pointer",p.onclick=()=>C0(t),i.appendChild(p),e.cnt=e.cnt||{};let g=Math.max(0,c-(e.cnt.tv||0));return g&&(e.cnt.tv=c,n(2*g),s()),l&&(n(3*l),s()),l}var Md=i=>{let e=Jc(),t=ao(),n=0;for(let s=0;s<U0.length;s++)!(i.ltr||{})[s]&&gd(i,s)&&n++;return Object.keys(t).forEach(s=>{e.has(+s)&&((i.ltr||{})[s]||0)<2&&n++}),Object.keys(Ed()).filter(r=>gd(i,+r)).length>((i.cnt||{}).tv||0)&&n++,n},Y1=["Primavera","Verano","Oto\xF1o","Invierno"],O0="rio3d-season",N0=["auto","0","1","2","3"],Zc=()=>{try{return localStorage.getItem(O0)||"auto"}catch{return"auto"}},B0=()=>{let i=Zc();if(i!=="auto")return+i;let e=new Date().getMonth();return e>=2&&e<=4?0:e>=5&&e<=7?1:e>=8&&e<=10?2:3},z0=()=>{let i=N0[(N0.indexOf(Zc())+1)%5];try{localStorage.setItem(O0,i)}catch{}return i},k0=()=>"Estaci\xF3n: "+(Zc()==="auto"?"Auto":Y1[+Zc()]),H0=[[255,182,200],[255,222,140],[232,140,70],[240,246,255]];function Sd(i){i.add([["Estaci\xF3n: Auto","Season: Auto","\u5B63\u7BC0: \u304A\u307E\u304B\u305B"],["Estaci\xF3n: Primavera","Season: Spring","\u5B63\u7BC0: \u6625"],["Estaci\xF3n: Verano","Season: Summer","\u5B63\u7BC0: \u590F"],["Estaci\xF3n: Oto\xF1o","Season: Autumn","\u5B63\u7BC0: \u79CB"],["Estaci\xF3n: Invierno","Season: Winter","\u5B63\u7BC0: \u51AC"]])}var Yc=-1;function G0(i,e,t){let n=Md(i);if(Yc<0){Yc=n;return}n>Yc&&e(t("Se abri\xF3 una carta nueva en el diario")),Yc=n}var Z1="rio-tasks",Td=[["Dejar una linterna en el barandal","Leave a lantern on the railing","\u624B\u3059\u308A\u306B\u30E9\u30F3\u30BF\u30F3\u3092\u7F6E\u304F","Dej\xE9 una linterna en el barandal. Si cruzas de noche, ah\xED estar\xE1 esper\xE1ndote.","I left a lantern on the railing. If you cross at night, it will be waiting for you.","\u624B\u3059\u308A\u306B\u30E9\u30F3\u30BF\u30F3\u3092\u7F6E\u304D\u307E\u3057\u305F\u3002\u591C\u306B\u6E21\u308B\u306A\u3089\u3001\u305D\u3053\u3067\u5F85\u3063\u3066\u3044\u307E\u3059\u3002"],["Pedir un deseo bajo el portal","Make a wish under the gate","\u9CE5\u5C45\u306E\u4E0B\u3067\u9858\u3044\u3054\u3068\u3092\u3059\u308B","Ped\xED otro deseo bajo el portal. Este no es m\xEDo: es para quien lea esto.","I made another wish under the gate. This one is not mine: it is for whoever reads this.","\u9CE5\u5C45\u306E\u4E0B\u3067\u3082\u3046\u3072\u3068\u3064\u9858\u3044\u307E\u3057\u305F\u3002\u79C1\u306E\u3067\u306F\u306A\u304F\u3001\u3053\u308C\u3092\u8AAD\u3080\u3042\u306A\u305F\u306E\u305F\u3081\u306B\u3002"],["Encender un farolillo","Light a lantern","\u3061\u3087\u3046\u3061\u3093\u3092\u3068\u3082\u3059","Encend\xED un farolillo en la aldea. Dicen que dura hasta que alguien lo recuerda.","I lit a lantern in the village. They say it burns until someone remembers it.","\u6751\u3067\u3061\u3087\u3046\u3061\u3093\u3092\u3068\u3082\u3057\u307E\u3057\u305F\u3002\u8AB0\u304B\u304C\u601D\u3044\u51FA\u3059\u3042\u3044\u3060\u3001\u6D88\u3048\u306A\u3044\u305D\u3046\u3067\u3059\u3002"],["Guardar un p\xE9talo de sakura","Keep a sakura petal","\u685C\u306E\u82B1\u3073\u3089\u3092\u3057\u307E\u3046","Guard\xE9 otro p\xE9talo. Ya tengo suficientes para forrar una carta entera.","I kept another petal. I now have enough to line a whole letter.","\u3082\u3046\u4E00\u679A\u3001\u82B1\u3073\u3089\u3092\u3057\u307E\u3044\u307E\u3057\u305F\u3002\u624B\u7D19\u3092\u4E00\u901A\u3046\u3081\u3089\u308C\u308B\u307B\u3069\u306B\u306A\u308A\u307E\u3057\u305F\u3002"],["Quedarse quieto con las garzas","Stay still with the herons","\u30B5\u30AE\u3068\u9759\u304B\u306B\u5F85\u3064","Me qued\xE9 quieta con las garzas hasta que me olvidaron. Fue el mejor halago.","I stayed still with the herons until they forgot I was there. Best compliment ever.","\u30B5\u30AE\u306E\u305D\u3070\u3067\u3058\u3063\u3068\u3057\u3066\u3001\u79C1\u306E\u5B58\u5728\u3092\u5FD8\u308C\u3089\u308C\u308B\u307E\u3067\u5F85\u3061\u307E\u3057\u305F\u3002\u6700\u9AD8\u306E\u307B\u3081\u8A00\u8449\u3067\u3059\u3002"],["Tocar la campana","Ring the bell","\u9418\u3092\u9CF4\u3089\u3059","Toqu\xE9 la campana una vez m\xE1s. Si la oyes desde el balc\xF3n, es m\xEDa.","I rang the bell once more. If you hear it from your balcony, it is mine.","\u3082\u3046\u4E00\u5EA6\u9418\u3092\u9CF4\u3089\u3057\u307E\u3057\u305F\u3002\u30D0\u30EB\u30B3\u30CB\u30FC\u3067\u805E\u3053\u3048\u305F\u3089\u3001\u305D\u308C\u306F\u79C1\u3067\u3059\u3002"],["Llenar un frasco con agua de la cascada","Fill a jar with waterfall water","\u6EDD\u306E\u6C34\u3092\u74F6\u306B\u304F\u3080","Llen\xE9 un frasco con agua de la cascada. Ponlo en el estantito: huele a tarde larga.","I filled a jar with waterfall water. Put it on the little shelf: it smells like a long afternoon.","\u6EDD\u306E\u6C34\u3092\u74F6\u306B\u304F\u307F\u307E\u3057\u305F\u3002\u5C0F\u3055\u306A\u68DA\u306B\u7F6E\u3044\u3066\u304F\u3060\u3055\u3044\u3002\u9577\u3044\u5348\u5F8C\u306E\u9999\u308A\u304C\u3057\u307E\u3059\u3002"],["Compartir una taza de t\xE9","Share a cup of tea","\u304A\u8336\u3092\u308F\u304B\u3061\u3042\u3046","Compart\xED una taza de t\xE9. Pens\xE9 en la tuya, en la caba\xF1a, humeando.","I shared a cup of tea. I thought of yours, steaming at the cabin.","\u304A\u8336\u3092\u308F\u304B\u3061\u3042\u3044\u307E\u3057\u305F\u3002\u5C0F\u5C4B\u3067\u6E6F\u6C17\u3092\u7ACB\u3066\u308B\u3042\u306A\u305F\u306E\u4E00\u676F\u3092\u601D\u3044\u307E\u3057\u305F\u3002"],["Escuchar el bamb\xFA","Listen to the bamboo","\u7AF9\u306E\u97F3\u306B\u8033\u3092\u3059\u307E\u3059","Escuch\xE9 el bamb\xFA un buen rato. Suena a campanilla de viento sin due\xF1o.","I listened to the bamboo a good while. It sounds like a wind chime with no owner.","\u7AF9\u306E\u97F3\u3092\u3057\u3070\u3089\u304F\u805E\u304D\u307E\u3057\u305F\u3002\u6301\u3061\u4E3B\u306E\u3044\u306A\u3044\u98A8\u9234\u306E\u3088\u3046\u3067\u3059\u3002"],["Dejar una flor en el estanque","Leave a flower on the pond","\u6C60\u306B\u82B1\u3092\u6D6E\u304B\u3079\u308B","Dej\xE9 una flor en el estanque. Flota hacia donde t\xFA ya est\xE1s.","I left a flower on the pond. It floats toward wherever you already are.","\u6C60\u306B\u82B1\u3092\u6D6E\u304B\u3079\u307E\u3057\u305F\u3002\u3042\u306A\u305F\u304C\u3044\u308B\u65B9\u3078\u6D41\u308C\u3066\u3044\u304D\u307E\u3059\u3002"],["Encender los fuegos para Mara","Light the fireworks for Mara","\u30DE\u30E9\u306E\u305F\u3081\u306B\u82B1\u706B\u3092\u3042\u3052\u308B","Esta noche los fuegos del castillo son para ti. Gracias por seguirme hasta aqu\xED.","Tonight the castle fireworks are for you. Thank you for following me all the way here.","\u4ECA\u591C\u306E\u57CE\u306E\u82B1\u706B\u306F\u3042\u306A\u305F\u306E\u305F\u3081\u306B\u3002\u3053\u3053\u307E\u3067\u3064\u3044\u3066\u304D\u3066\u304F\u308C\u3066\u3042\u308A\u304C\u3068\u3046\u3002"]],wd=[["Escuchar el crujido del puente","Listen to the bridge creak","\u6A4B\u306E\u304D\u3057\u3080\u97F3\u3092\u805E\u304F","Volv\xED al puente: cruji\xF3 con tu mismo ritmo al cruzar. Ya no suena a madera, suena a casa.","I came back to the bridge: it creaked in your same rhythm. It no longer sounds like wood; it sounds like home.","\u6A4B\u306B\u623B\u308B\u3068\u3001\u3042\u306A\u305F\u3068\u540C\u3058\u6B69\u5E45\u3067\u304D\u3057\u307F\u307E\u3057\u305F\u3002\u3082\u3046\u6728\u306E\u97F3\u3067\u306F\u306A\u304F\u3001\u5BB6\u306E\u97F3\u3067\u3059\u3002"],["Mirar el reflejo del portal","Watch the gate\u2019s reflection","\u9CE5\u5C45\u306E\u6620\u308A\u3092\u773A\u3081\u308B","Esta vez mir\xE9 el reflejo en lugar del portal. Se ve igual de bien, pero m\xE1s tranquilo.","This time I looked at the reflection instead of the gate. It looks just as good, only calmer.","\u4ECA\u56DE\u306F\u9CE5\u5C45\u3067\u306F\u306A\u304F\u6C34\u9762\u306E\u6620\u308A\u3092\u898B\u307E\u3057\u305F\u3002\u540C\u3058\u304F\u3089\u3044\u304D\u308C\u3044\u3067\u3001\u3082\u3063\u3068\u9759\u304B\u3067\u3059\u3002"],["Saludar a quien pasa en la aldea","Greet someone passing in the village","\u6751\u3067\u3059\u308C\u3061\u304C\u3046\u4EBA\u306B\u3042\u3044\u3055\u3064\u3059\u308B","Una se\xF1ora de la aldea me salud\xF3 como si fuera vecina. Le dije que ten\xEDa una caba\xF1a lejos, y sonri\xF3.","A woman in the village greeted me like a neighbor. I told her I had a cabin far away, and she smiled.","\u6751\u306E\u5973\u6027\u304C\u96A3\u4EBA\u306E\u3088\u3046\u306B\u3042\u3044\u3055\u3064\u3057\u3066\u304F\u308C\u307E\u3057\u305F\u3002\u9060\u304F\u306B\u5C0F\u5C4B\u304C\u3042\u308B\u3068\u8A71\u3059\u3068\u3001\u7B11\u3063\u3066\u304F\u308C\u307E\u3057\u305F\u3002"],["Atrapar un p\xE9talo en el aire","Catch a petal in the air","\u821E\u3046\u82B1\u3073\u3089\u3092\u3064\u304B\u3080","Atrap\xE9 un p\xE9talo en el aire sin intentarlo. Dicen que da suerte; te lo mando de regalo.","I caught a petal in mid-air without trying. They say it brings luck; I am sending it to you.","\u4F55\u6C17\u306A\u304F\u7A7A\u4E2D\u3067\u82B1\u3073\u3089\u3092\u3064\u304B\u307F\u307E\u3057\u305F\u3002\u5E78\u904B\u306E\u3057\u308B\u3057\u3060\u305D\u3046\u3067\u3059\u3002\u3042\u306A\u305F\u306B\u8D08\u308A\u307E\u3059\u3002"],["Contar las garzas en silencio","Count the herons in silence","\u9759\u304B\u306B\u30B5\u30AE\u3092\u6570\u3048\u308B","Cont\xE9 las garzas sin mover un dedo: siempre salen una m\xE1s de las que cre\xEDa.","I counted the herons without moving a finger: there is always one more than I thought.","\u6307\u4E00\u672C\u52D5\u304B\u3055\u305A\u30B5\u30AE\u3092\u6570\u3048\u307E\u3057\u305F\u3002\u601D\u3063\u305F\u3088\u308A\u3001\u3044\u3064\u3082\u3072\u3068\u3064\u591A\u3044\u306E\u3067\u3059\u3002"],["Escuchar c\xF3mo se apaga el eco de la campana","Listen to the bell\u2019s echo fade","\u9418\u306E\u4F59\u97FB\u304C\u6D88\u3048\u308B\u306E\u3092\u805E\u304F","Esper\xE9 a que el eco se apagara del todo. Dura m\xE1s de lo que uno imagina, y es lo mejor de la campana.","I waited for the echo to fade completely. It lasts longer than you think, and it is the best part of the bell.","\u4F59\u97FB\u304C\u5B8C\u5168\u306B\u6D88\u3048\u308B\u307E\u3067\u5F85\u3061\u307E\u3057\u305F\u3002\u601D\u3046\u3088\u308A\u9577\u304F\u3001\u305D\u308C\u304C\u9418\u306E\u3044\u3061\u3070\u3093\u597D\u304D\u306A\u3068\u3053\u308D\u3067\u3059\u3002"],["Mojar los dedos en la cascada","Dip your fingers in the waterfall","\u6EDD\u306B\u6307\u3092\u3072\u305F\u3059","Moj\xE9 los dedos en la cascada: estaba fr\xEDa y clara. Te mando un poco de ese fr\xEDo para el verano.","I dipped my fingers in the waterfall: cold and clear. I am sending you a little of that chill for summer.","\u6EDD\u306B\u6307\u3092\u3072\u305F\u3057\u307E\u3057\u305F\u3002\u51B7\u305F\u304F\u3066\u6F84\u3093\u3067\u3044\u307E\u3059\u3002\u590F\u306E\u305F\u3081\u306B\u3001\u5C11\u3057\u305D\u306E\u51B7\u305F\u3055\u3092\u9001\u308A\u307E\u3059\u3002"],["Mirar c\xF3mo suben el vapor y la tarde","Watch the steam and the afternoon rise","\u6E6F\u6C17\u3068\u5915\u65B9\u304C\u7ACB\u3061\u306E\u307C\u308B\u306E\u3092\u898B\u308B","El vapor del t\xE9 sub\xEDa despacio y la tarde con \xE9l. Anot\xE9 la hora: no se me va a olvidar.","The tea steam rose slowly and the afternoon with it. I wrote down the time: I will not forget it.","\u304A\u8336\u306E\u6E6F\u6C17\u304C\u3086\u3063\u304F\u308A\u6607\u308A\u3001\u5915\u65B9\u3082\u3044\u3063\u3057\u3087\u306B\u6607\u308A\u307E\u3057\u305F\u3002\u6642\u523B\u3092\u66F8\u304D\u3068\u3081\u305F\u306E\u3067\u3001\u5FD8\u308C\u307E\u305B\u3093\u3002"],["Dejar que el viento mueva el bamb\xFA","Let the wind move the bamboo","\u98A8\u304C\u7AF9\u3092\u3086\u3089\u3059\u306E\u306B\u307E\u304B\u305B\u308B","No hice nada y el bamb\xFA hizo todo. Aprend\xED que a veces ayudar es apartarse.","I did nothing and the bamboo did everything. I learned that sometimes helping means stepping aside.","\u4F55\u3082\u3057\u306A\u3044\u3068\u3001\u7AF9\u304C\u3059\u3079\u3066\u3092\u3084\u3063\u3066\u304F\u308C\u307E\u3057\u305F\u3002\u3068\u304D\u306B\u306F\u8EAB\u3092\u5F15\u304F\u3053\u3068\u304C\u52A9\u3051\u306B\u306A\u308B\u3068\u77E5\u308A\u307E\u3057\u305F\u3002"],["Ver c\xF3mo se cierra un loto","Watch a lotus close","\u84EE\u304C\u9589\u3058\u308B\u306E\u3092\u898B\u308B","Vi cerrarse un loto al amanecer. No es un final: es el mismo descanso que el tuyo.","I watched a lotus close at dawn. It is not an ending: it is the same rest you take.","\u591C\u660E\u3051\u306B\u84EE\u304C\u9589\u3058\u308B\u306E\u3092\u898B\u307E\u3057\u305F\u3002\u7D42\u308F\u308A\u3067\u306F\u306A\u304F\u3001\u3042\u306A\u305F\u306E\u4F11\u307F\u3068\u540C\u3058\u4F11\u307F\u3067\u3059\u3002"],["Mirar el castillo desde el agua","Look at the castle from the water","\u6C34\u306E\u4E0A\u304B\u3089\u57CE\u3092\u773A\u3081\u308B","Mir\xE9 el castillo desde el agua, como la primera vez. Sigue pareci\xE9ndose a las luces de tu terraza.","I looked at the castle from the water, like the first time. It still looks like the lights of your terrace.","\u6700\u521D\u306E\u3068\u304D\u306E\u3088\u3046\u306B\u3001\u6C34\u306E\u4E0A\u304B\u3089\u57CE\u3092\u773A\u3081\u307E\u3057\u305F\u3002\u3084\u306F\u308A\u3042\u306A\u305F\u306E\u30C6\u30E9\u30B9\u306E\u706F\u308A\u306B\u4F3C\u3066\u3044\u307E\u3059\u3002"]],xd=i=>wd[i]||null,J1="rio-tasks2";var $1=()=>{try{let i=JSON.parse(localStorage.getItem(J1)||"{}")||{};return i.d=i.d||{},i}catch{return{d:{}}}},Ed=()=>$1().d;var yd=i=>Td[i]||null,j1=()=>{try{return JSON.parse(localStorage.getItem(Z1)||"{}")}catch{return{}}},ao=j1;function V0(i){i.add(Td.map(e=>[e[0],e[1],e[2]])),i.add(Td.map(e=>[e[3],e[4],e[5]])),i.add(wd.map(e=>[e[0],e[1],e[2]])),i.add(wd.map(e=>[e[3],e[4],e[5]])),i.add([["Carta de vuelta","Letter back","\u8FD4\u4E8B\u306E\u624B\u7D19"],["Hoy ya diste dos vueltas. Ma\xF1ana, m\xE1s.","You have already done two returns today. More tomorrow.","\u4ECA\u65E5\u306F\u3082\u3046\u4E8C\u56DE\u3075\u308A\u8FD4\u308A\u307E\u3057\u305F\u3002\u7D9A\u304D\u306F\u660E\u65E5\u3002"]]),i.add([["Mant\xE9n pulsado para hacerlo","Press and hold to do it","\u9577\u62BC\u3057\u3067\u5B9F\u884C"],["Hecho. Un recuerdo m\xE1s para la caba\xF1a.","Done. One more keepsake for the cabin.","\u3067\u304D\u307E\u3057\u305F\u3002\u5C0F\u5C4B\u306B\u601D\u3044\u51FA\u304C\u3072\u3068\u3064\u5897\u3048\u307E\u3057\u305F\u3002"],["Encargo de Mara","Mara\u2019s errand","\u30DE\u30E9\u306E\u304A\u9858\u3044"],["En el margen","In the margin","\u4F59\u767D\u306B"]])}var Hr=[{id:"porcheI",kind:"suelo",p:[-3.6,ce,2.1],n:"Porche"},{id:"interior",kind:"suelo",p:[.9,ce,-1.7],n:"Junto a la ventana"},{id:"porcheD",kind:"suelo",p:[6,ce,2.2],n:"Porche, junto al barandal"},{id:"alero",kind:"colgante",p:[-2.4,6.3,3.35],n:"Alero"},{id:"pared",kind:"pared",p:[4.6,6.3,-2.7],n:"Pared"},{id:"roca",kind:"roca",p:[-7.4,ce-1.3,2.6],n:"Mirador de roca"}],K1=i=>Hr.find(e=>e.id===i),In=(i,e,t)=>new oe(i,we(e,t)),Q1=(i,e)=>new oe(i,new je({color:e})),ft=(i,e,t,n,s,r,a,o,l)=>{let c=In(new rt(i,e,t,l||8),n);return c.position.set(s,r,a),o&&o.add(c),c},It=(i,e,t,n,s,r,a,o,l)=>{let c=In(new Nt(i,10,8),e);return c.position.set(t,n,s),c.scale.set(r||1,a||1,o||1),l&&l.add(c),c},qt=(i,e,t,n,s,r,a,o)=>{let l=In(new bt(i,e,t),n);return l.position.set(s,r,a),o&&o.add(l),l},Hi=(i,e,t,n,s,r,a)=>{let o=_t(Mt,e,t,a||.5,!0);return o.position.set(n,s,r),o.userData.gl=a||.5,i.add(o),o},ks={helecho(){let i=new xe;ft(.34,.26,.45,"#b06c52",0,.22,0,i);for(let e=0;e<8;e++){let t=e/8*6.283,n=In(new Dt(.12,.8,4),"#6fae78");n.position.set(Math.cos(t)*.22,.8,Math.sin(t)*.22),n.rotation.set(Math.sin(t)*.7,0,-Math.cos(t)*.7),i.add(n)}return i.userData.anim=e=>{i.rotation.y=Math.sin(e*.4)*.05},i},lavanda(){let i=new xe;ft(.28,.22,.4,"#7d6a8f",0,.2,0,i);for(let e=0;e<7;e++){let t=e/7*6.283,n=Math.cos(t)*.14,s=Math.sin(t)*.14;ft(.012,.012,.7,"#6a9a6e",n,.7,s,i,4);for(let r=0;r<3;r++)It(.05,r%2?"#b79ae0":"#9e7fd0",n,.95+r*.1,s,1,1.4,1,i)}return i.userData.anim=e=>{i.rotation.z=Math.sin(e*.9)*.02},i},farolpapel(){let i=new xe;ft(.03,.03,1.05,"#5a4132",0,.52,0,i);let e=It(.28,"#ffe2aa",0,1.35,0,1,1.35,1,i);return e.material=new je({color:16769706}),ft(.2,.2,.07,"#5a4132",0,1.78,0,i),Hi(i,16760954,3.4,0,1.35,0,.55),i},tetera(){let i=new xe;qt(1,.08,.7,"#7b5742",0,.7,0,i);for(let n of[-1,1])for(let s of[-1,1])ft(.04,.05,.7,"#6a4a38",n*.42,.35,s*.26,i,5);It(.26,"#4f6f8a",0,.98,0,1.1,.9,1,i),ft(.1,.1,.08,"#3f5a72",0,1.2,0,i);let e=ft(.04,.06,.3,"#4f6f8a",.32,1.04,0,i,5);e.rotation.z=-.9;let t=[];for(let n=0;n<4;n++){let s=_t(Mt,15657206,.5,0,!1);s.userData.ph=n/4,i.add(s),t.push(s)}return i.userData.anim=n=>{t.forEach(s=>{let r=(n*.3+s.userData.ph)%1;s.position.set(.38+Math.sin(n*2+s.userData.ph*6)*.08*r,1.1+r*1.1,0),s.material.opacity=.4*(1-r),s.scale.setScalar(.35+r*.6)})},i},banquito(){let i=new xe;qt(.9,.14,.7,"#8b6a50",0,.62,0,i);for(let e of[-1,1])for(let t of[-1,1])ft(.04,.05,.62,"#6b4d3a",e*.35,.31,t*.25,i,5);return qt(.78,.2,.6,"#c0746e",0,.79,0,i),i},libros(){let i=new xe;qt(.95,.2,.65,"#b0769c",0,.1,0,i),qt(.85,.18,.6,"#6498b9",0,.29,0,i),qt(.8,.17,.55,"#cfb67c",-.03,.47,0,i),ft(.07,.07,.3,"#f0e6cf",.18,.7,0,i,6);let e=It(.06,"#ffd27a",.18,.92,0,1,1.6,1,i);e.material=new je({color:16765562});let t=Hi(i,16757850,2.2,.18,.94,0,.5);return i.userData.anim=n=>{e.scale.y=1.6+Math.sin(n*11)*.15,t.material.opacity=.5+Math.sin(n*9)*.06},i},campanilla(){let i=new xe;qt(.8,.1,.12,"#7b5742",0,0,0,i);let e=[];for(let t=-2;t<=2;t++){let n=new xe;n.position.set(t*.17,-.05,0);let s=.55+(t+2)%2*.25;ft(.008,.008,s,"#eadfc4",0,-s/2,0,n,3),ft(.04,.05,.3,"#e0cd8a",0,-s-.12,0,n,6),i.add(n),e.push([n,t])}return i.userData.anim=t=>{e.forEach(([n,s])=>{n.rotation.z=Math.sin(t*1.6+s*.8)*.14,n.rotation.x=Math.sin(t*1.3+s)*.08})},i},atrapa(){let i=new xe,e=new xe;i.add(e);let t=In(new Rn(.4,.04,6,18),"#d8c19a");t.position.y=-.55,e.add(t);let n=In(new Rn(.2,.012,4,14),"#f0e6d2");return n.position.y=-.55,e.add(n),[[-.2,"#c97d68"],[0,"#6498b9"],[.2,"#cfb67c"]].forEach(([s,r])=>{ft(.008,.008,.4,"#e8dcc0",s,-1.15,0,e,3),qt(.07,.34,.02,r,s,-1.45,0,e)}),ft(.01,.01,.35,"#e8dcc0",0,-.17,0,e,3),i.userData.anim=s=>{e.rotation.z=Math.sin(s*.9)*.06},i},estrellas(){let i=new xe;return[[-.45,-.5,0],[.4,-.8,1],[0,-1.2,2]].forEach(([e,t,n])=>{let s=Q1(new Ra(.2),16771488);s.scale.set(1,1,.4),s.position.set(e,t,0),ft(.006,.006,-t*.9,"#eadfc4",e,t/2+.1,0,i,3),i.add(s),i.userData["s"+n]=s,Hi(i,16769162,1.3,e,t,0,.35)}),i.userData.anim=e=>{for(let t=0;t<3;t++)i.userData["s"+t].rotation.y=e*.8+t},i},farolillos(){let i=new xe;[[-.55,14706010],[0,15770191],[.55,14706010]].forEach(([t,n],s)=>{ft(.008,.008,.35,"#4a3a32",t,-.17,0,i,3);let r=It(.18,n,t,-.55,0,1,1.35,1,i);r.material=new je({color:n}),Hi(i,16751204,1.5,t,-.55,0,.4)});let e=qt(1.4,.02,.02,"#3a2e28",0,0,0,i);return i.userData.anim=t=>{i.rotation.z=Math.sin(t*1.2)*.03},i},reloj(){let i=new xe,e=In(new rt(.42,.42,.08,20),"#6b4d3a");e.rotation.x=Math.PI/2,i.add(e);let t=In(new rt(.35,.35,.02,20),"#f1e6cc");t.rotation.x=Math.PI/2,t.position.z=.05,i.add(t);let n=qt(.03,.3,.015,"#3d2e26",0,.15,.075,null),s=qt(.04,.2,.015,"#3d2e26",0,.1,.07,null),r=new xe,a=new xe;return r.position.z=0,a.position.z=0,r.add(n),a.add(s),i.add(r,a),i.userData.anim=o=>{let l=new Date;r.rotation.z=-l.getMinutes()/60*6.283,a.rotation.z=-(l.getHours()%12+l.getMinutes()/60)/12*6.283},i},guitarra(){let i=new xe,e=new xe;e.rotation.z=.35,i.add(e),It(.34,"#b9793f",0,-.35,0,1,1.15,.3,e),It(.24,"#b9793f",0,.05,0,1,1.1,.3,e);let t=ft(.1,.1,.05,"#4a3326",0,-.25,.1,e);return t.rotation.x=Math.PI/2,qt(.1,1.05,.06,"#6b4d3a",0,.65,0,e),qt(.14,.2,.06,"#4a3326",0,1.25,0,e),i},estantito(){let i=new xe;qt(1.3,.1,.35,"#7b5742",0,0,.1,i),ft(.12,.12,.35,"#bee1eb",-.4,.22,.1,i,8).material=new je({color:12509675,transparent:!0,opacity:.6}),ft(.1,.1,.28,"#e6c896",-.1,.19,.1,i,8);for(let e=0;e<3;e++){let t=It(.025,16773792,-.4+(e-1)*.04,.2+e*.03,.1,1,1,1,i);t.material=new je({color:16773792})}ft(.08,.06,.12,"#9a5b44",.4,.11,.1,i);for(let e=0;e<4;e++){let t=In(new Dt(.05,.3,4),"#6fae78");t.position.set(.4+(e-1.5)*.05,.34,.1),t.rotation.z=(e-1.5)*.25,i.add(t)}return Hi(i,16771222,1.8,-.4,.25,.2,.3),i},mapa(){let i=new xe;qt(.9,.7,.03,"#e6d3a6",0,0,0,i),qt(.94,.06,.05,"#6b4d3a",0,.38,0,i),qt(.94,.06,.05,"#6b4d3a",0,-.38,0,i);let e=[[-.3,-.2],[-.12,.08],[0,-.05],[.14,.2],[.32,-.2]];for(let t=0;t<4;t++){let n=e[t],s=e[t+1],r=Math.hypot(s[0]-n[0],s[1]-n[1]),a=qt(r,.015,.01,"#8d6b44",(n[0]+s[0])/2,(n[1]+s[1])/2,.02,i);a.rotation.z=Math.atan2(s[1]-n[1],s[0]-n[0])}return It(.04,"#c0463a",.1,-.26,.03,1,1,.5,i),i},mojon(){let i=new xe;return[[0,.55,.2,"#7d7b86"],[.38,.42,.17,"#8d8b97"],[.7,.3,.14,"#9a98a4"],[.95,.2,.11,"#a8a6b2"]].forEach(([e,t,n,s])=>It(t,s,0,e+.1,0,1,.5,1,i)),i},farolpiedra(){let i=new xe,e="#8a8896";ft(.4,.45,.18,e,0,.09,0,i,6),ft(.1,.12,.9,e,0,.6,0,i,6),ft(.35,.3,.14,e,0,1.1,0,i,6),qt(.5,.5,.5,e,0,1.4,0,i),qt(.26,.3,.52,"#ffe1a0",0,1.4,0,i).material=new je({color:16769440}),qt(.52,.3,.26,"#ffe1a0",0,1.4,0,i).material=new je({color:16769440});let t=In(new Dt(.5,.4,4),e);return t.position.y=1.85,t.rotation.y=Math.PI/4,i.add(t),Hi(i,16760430,3.4,0,1.4,0,.5),i},floresroca(){let i=new xe,e=[];for(let t=-4;t<=4;t++){let n=new xe;n.position.set(t*.17,0,Math.sin(t)*.15);let s=.4+Math.abs(t%3)*.18;ft(.012,.012,s,"#6a9a6e",0,s/2,0,n,3),It(.07,["#f2b6c8","#fff0a0","#a6c8ff"][(t+4)%3],0,s,0,1,1,1,n),i.add(n),e.push([n,t])}return i.userData.anim=t=>{e.forEach(([n,s])=>{n.rotation.z=Math.sin(t*1.1+s*.7)*.06})},i}};ks.farolpuente=function(){let i=new xe,e=new xe;i.add(e),ft(.012,.012,.4,"#4a3a32",0,-.2,0,e,3),ft(.16,.16,.05,"#5a4132",0,-.45,0,e);let t=It(.2,16766614,0,-.72,0,1,1.4,1,e);return t.material=new je({color:16766614}),ft(.16,.16,.05,"#5a4132",0,-1.05,0,e),Hi(e,16758891,2.6,0,-.72,0,.5),i.userData.anim=n=>{e.rotation.z=Math.sin(n*1.1)*.06},i};ks.petalos=function(){let i=new xe,e=qt(1.1,.07,.07,"#6b4d3a",0,0,0,i);e.rotation.z=.4;let t=[];for(let n=0;n<7;n++){let s=-.45+n*.15,r=-.18+n*.13+(n%2?.1:-.05),a=It(.09,n%2?"#f6b9cb":"#f9d2de",s,r,.05,1,1,.7,i);t.push([a,n])}return i};ks.campanatemplo=function(){let i=new xe,e=new xe;return i.add(e),ft(.012,.012,.35,"#4a3a32",0,-.17,0,e,3),qt(.2,.1,.2,"#6b4d3a",0,-.4,0,e),ft(.2,.34,.6,"#b98a3f",0,-.78,0,e,10),ft(.35,.35,.04,"#8a6228",0,-1.1,0,e,10),It(.06,"#6b4d3a",0,-1.1,0,1,1,1,e),i.userData.anim=t=>{e.rotation.z=Math.sin(t*.9)*.08},i};ks.frasco=function(){let i=new xe,e=ft(.22,.22,.55,"#bee1eb",0,.28,0,i,10);e.material=new je({color:12509675,transparent:!0,opacity:.5});let t=ft(.19,.19,.34,"#6eb8e8",0,.2,0,i,10);return t.material=new je({color:7256296,transparent:!0,opacity:.75}),ft(.12,.12,.1,"#8b6a50",0,.62,0,i,8),Hi(i,10542335,1.6,0,.3,0,.3),i};ks.lotocuenco=function(){let i=new xe,e=ft(.34,.2,.22,"#5f7f8f",0,.12,0,i,12),t=ft(.3,.3,.02,"#78bed7",0,.22,0,i,12);t.material=new je({color:7913175});let n=[];for(let s=-2;s<=2;s++){let r=It(.1,s%2?"#f6b9cb":"#f9d2de",s*.09,.38+(2-Math.abs(s))*.03,0,.8,1.5,.8,i);r.rotation.z=-s*.25,n.push(r)}return It(.05,"#f2d27a",0,.3,0,1,1,1,i),i.userData.anim=s=>{i.rotation.y=Math.sin(s*.3)*.1},i};var eM={gato(){let i=new xe;It(.4,"#3a3548",0,.3,0,1.3,.75,.9,i),It(.25,"#3a3548",.5,.52,0,1,1,1,i);for(let t of[-.12,.12]){let n=In(new Dt(.07,.16,4),"#3a3548");n.position.set(.5,.78,t),i.add(n);let s=It(.03,"#ffe27a",.72,.55,t*.8,1,1,1,i);s.material=new je({color:16769658})}let e=In(new Rn(.3,.06,6,12,4),"#3a3548");return e.position.set(-.42,.18,.2),e.rotation.x=1.5,i.add(e),i.userData.anim=t=>{e.rotation.z=Math.sin(t*2)*.3},i},zorro(){let i=new xe;It(.45,"#c7703a",0,.45,0,1.5,.8,.8,i),It(.28,"#c7703a",.75,.75,0,1.2,.9,.9,i),It(.12,"#fff2e0",1,.7,0,1.2,.7,1,i);for(let t of[-.14,.14]){let n=In(new Dt(.09,.25,4),"#c7703a");n.position.set(.72,1.02,t),i.add(n)}let e=It(.3,"#c7703a",-.75,.5,0,2,.8,.8,i);return It(.14,"#fff2e0",-1.1,.55,0,1,1,1,i),i.userData.anim=t=>{e.rotation.z=Math.sin(t*1.5)*.15},i},buho(){let i=new xe;It(.34,"#8a7560",0,.5,0,1,1.4,1,i),It(.22,"#e8dcc4",0,.46,.14,1,1.3,.6,i);for(let e of[-.14,.14]){let t=It(.1,"#fff1b0",e,.78,.22,1,1,.6,i),n=It(.04,"#2a2030",e,.78,.3,1,1,1,i),s=In(new Dt(.06,.18,4),"#8a7560");s.position.set(e*1.5,1.05,0),i.add(s)}return i},mariposa(){let i=new xe,e=[];for(let t of[-1,1]){let n=new xe,s=new oe(new Gn(.3,8),new je({color:8382624,side:mn,transparent:!0,opacity:.9}));s.position.x=t*.28,n.add(s),i.add(n),e.push([n,t])}return It(.05,"#3a3a50",0,0,0,1,1,1,i),Hi(i,12512200,1.6,0,0,0,.35),i.userData.anim=t=>{let n=Math.sin(t*14)*.9;e.forEach(([s,r])=>{s.rotation.y=r*n})},i}},se={on:!1,root:null,markers:{},models:{},vis:null,vcur:null,vnext:25,sel:null,rit:{te:0,riego:0},mem:0},tM=i=>Wc.find(e=>e.id===i),zs=()=>!!ie.repaired.techo,W0=(i,e,t)=>{try{let n=new Ts(new D(i,30,e),new D(0,-1,0),0,60);n.camera=xn;let s=n.intersectObjects(Ge.children,!0).filter(r=>r.object.isMesh&&!r.object.userData.hab&&r.object.visible);return s.length?s[0].point.y:t}catch{return t}};function Rd(){let i=[];return se.root&&(se.on&&Object.values(se.markers).forEach(e=>i.push(e)),se.vcur&&i.push(se.vcur.g)),i}var jc=()=>{for(let i of Hr){let e=ie.decor[i.id],t=se.models[i.id];if(t&&t.id!==e&&(se.root.remove(t.g),delete se.models[i.id]),e&&!se.models[i.id]){let n=ks[e]();n.userData.hab=!0,n.traverse(r=>{r.userData.hab=!0});let s=oo(i);n.position.set(s[0],s[1],s[2]),se.root.add(n),se.models[i.id]={id:e,g:n}}}},oo=i=>(i.kind==="roca"&&!i._y&&(i._y=W0(i.p[0],i.p[2],i.p[1])),i.kind==="roca"?[i.p[0],i._y,i.p[2]]:i.p);function X0(){se.root=new xe,se.root.userData.hab=!0,Ge.add(se.root);for(let i of Hr){let e=new xe,t=new oe(new Rn(.62,.05,6,28),new je({color:16771512,transparent:!0,opacity:.7,depthTest:!1}));t.rotation.x=Math.PI/2,t.renderOrder=9,e.add(t);let n=new oe(new Nt(.95,8,6),new je({visible:!1}));e.add(n),e.userData.itemId="slot:"+i.id,e.userData.hab=!0,t.userData.hab=!0,n.userData.hab=!0,e.visible=!1;let s=oo(i),r=i.kind==="colgante"?-.9:i.kind==="pared"?0:.9;e.position.set(s[0],s[1]+r,s[2]),i.kind==="pared"&&(t.rotation.x=0),se.root.add(e),se.markers[i.id]=e}oM(),jc(),ai(),window.__habd={H:se,SLOTS:Hr,place:j0,spawn:q0,state:ie,DM:Wc,show:i=>{se.on=i,$0()}}}var nM={gato:[2.6,ce+1.12,3.45,.2],zorro:[-5.6,0,.9,.6],buho:[6.7,ce+1.35,3.75,0],mariposa:[3.4,ce+2.4,3.4,0]};function q0(i){if(se.vcur)return;let e=Object.keys(hd),t=i||e[Math.random()*e.length|0];if(t===se.vlast&&!i)return;se.vlast=t;let n=eM[t]();n.userData.itemId="visitante",n.userData.hab=!0,n.traverse(r=>{r.userData.hab=!0,r.userData.itemId||(r.userData.itemId="visitante")});let s=nM[t].slice();t==="zorro"&&(s[1]=W0(s[0],s[2],ce-1.3)),n.position.set(s[0],s[1],s[2]),n.rotation.y=s[3],n.scale.setScalar(.01),se.root.add(n),se.vcur={k:t,g:n,t:0,life:50,done:!1,base:s};try{nt.chime((s[0]-1.5)/12,2)}catch{}UX.cap("Llega un visitante",3e4)}function iM(){let i=se.vcur;if(!i||i.done)return;let e=hd[i.k],t=ie.vis[i.k]||0;ie.vis[i.k]=t+1,i.done=!0,i.t=Math.max(i.t,i.life-3.5);let n=e.notes[t%e.notes.length];ie.notes.includes(n)||ie.notes.push(n),lo(2);let s=n;t===0&&e.gift&&!ie.own[e.gift]&&(ie.own[e.gift]=!0,s+=" \xB7 Te dej\xF3: "+tM(e.gift).name),Ct(s),Us([i.g.position.x,i.g.position.y+.5,i.g.position.z]),UX.hap([10,50,10]);try{nt.chime((i.g.position.x-1.5)/12,3)}catch{}ai(),Bn()}var lo=i=>{ie.mem=(ie.mem||0)+i,ai()},Y0=90;function sM(){if(se.rit.te>0)return;se.rit.te=Y0,se.teaT=7,ie.cnt=ie.cnt||{},ie.cnt.te=(ie.cnt.te||0)+1,lo(1),Ct("Preparas t\xE9. El vapor sube despacio. Qu\xE9 calma.");try{nt.chime(-.4,1)}catch{}UX.hap([8,40,8]),UX.cap("Tetera",2e4),se.tea||(se.tea=ks.tetera(),se.tea.userData.hab=!0,se.tea.traverse(e=>e.userData.hab=!0),se.root.add(se.tea));let i=oo(Hr[0]);se.tea.position.set(i[0],i[1],i[2]),se.tea.visible=!0,Bn()}function rM(){if(!(se.rit.riego>0)){if(!ie.repaired.plantas){Ct("Primero repara las plantas");return}se.rit.riego=Y0,ie.cnt=ie.cnt||{},ie.cnt.rg=(ie.cnt.rg||0)+1,lo(1),Us([6.9,ce+1.2,3]),Us([-2.4,ce+1.2,3.3]),Ct("Riegas las plantas. Huelen a campo."),UX.hap([8,40,8]),Bn()}}var $c=[];function aM(i,e){if(!it.started||!zs()){$c.forEach(r=>r.visible=!1);return}let t=B0(),n=H0[t];if(!$c.length)for(let r=0;r<46;r++){let a=_t(Mt,16777215,.32+Math.random()*.22,0,!1);a.userData.p={x:Math.random()*24-9,y:Math.random()*14,z:Math.random()*14-5,ph:Math.random()*6.3},a.userData.hab=!0,se.root.add(a),$c.push(a)}let s=n[0]<<16|n[1]<<8|n[2];for(let r of $c){let a=r.userData.p,o=t===1?.5:t===3?.9:t===2?1.3:1.1;a.y+=(t===1?o:-o)*i,a.x+=Math.sin(e*.6+a.ph)*.5*i+.25*i,a.y<-1&&(a.y=14),a.y>14&&(a.y=-1),a.x>15&&(a.x=-9),r.position.set(a.x,a.y+ce-1,a.z),r.visible=!0,r.material.color.setHex(s),r.material.opacity=t===1?.4+.25*Math.sin(e*2+a.ph):.75}}var Ad=14;function Z0(i,e){if(!se.root)return;se.rit.te=Math.max(0,se.rit.te-i),se.rit.riego=Math.max(0,se.rit.riego-i),se.teaT>0&&(se.teaT-=i,se.teaT<=0&&se.tea&&(se.tea.visible=!1),se.tea&&!se.models.porcheI&&(se.tea.visible=se.teaT>0));let t=1;for(let n in se.models){let s=se.models[n].g;s.userData.anim&&s.userData.anim(e),s.traverse(r=>{r.isSprite&&r.userData.gl!=null&&r.material&&(r.material.opacity=r.userData.gl*(.85+.15*Math.sin(e*3+s.id)))})}if(se.tea&&se.tea.visible&&se.tea.userData.anim(e),se.vcur){let n=se.vcur;n.t+=i;let s=Math.max(.01,Math.min(1,n.t/1.5,(n.life-n.t)/1.5));n.g.scale.setScalar(s*s*(3-2*s)*(n.k==="mariposa"?1.7:1.1)),n.g.userData.anim&&n.g.userData.anim(e),n.k==="mariposa"&&n.g.position.set(n.base[0]+Math.sin(e*.6)*1.6,n.base[1]+Math.sin(e*.9)*.5,n.base[2]+Math.cos(e*.5)*.8),n.t>=n.life&&(se.root.remove(n.g),se.vcur=null)}if(it.started&&zs()&&!se.vcur&&(se.vnext-=i,se.vnext<=0&&(se.vnext=80+Math.random()*70,q0())),Ad-=i,Ad<=0&&(Ad=24+Math.random()*20,Object.values(ie.decor).includes("campanilla"))){UX.cap("Campanilla de viento",2e4);try{nt.chime(.5,4)}catch{}}if(se.on){let n=.65+.3*Math.sin(e*2.6);for(let s in se.markers){let r=se.markers[s];r.children[0].material.opacity=se.sel===s.replace("slot:","")?1:n}}if(aM(i,e),se.btn){let n=zs();se.btn.hidden===n&&(se.btn.hidden=!n)}}function J0(i){return i==="visitante"?(iM(),!0):typeof i=="string"&&i.startsWith("slot:")?(se.sel=i.slice(5),ai(),!0):!1}function Bs(i,e,t,n){let s=document.createElement("button");return s.type="button",s.className="chip "+(t||""),s.style.cssText="min-width:0;align-self:center;white-space:nowrap;flex-direction:row",s.textContent=i,n&&(s.disabled=!0),s.onclick=e,s}function oM(){let i=xt("top");se.btn=document.createElement("button"),se.btn.id="habBtn",se.btn.type="button",se.btn.textContent="Habitar",se.btn.hidden=!0,xt("mats").after(se.btn),se.btn.onclick=()=>{se.on=!se.on,se.sel=null,$0()},se.panel=document.createElement("div"),se.panel.id="hab",se.panel.style.cssText="display:none;gap:14px;align-items:flex-start;min-width:max-content",xt("panel").appendChild(se.panel),setTimeout(()=>{zs()&&Md(ie)>0&&Ct("Una carta nueva te espera en el diario")},4e3),setInterval(()=>{zs()&&!document.hidden&&G0(ie,Ct,t=>t)},2500);let e=zs();setInterval(()=>{let t=zs();t!==e&&(e=t,t&&Ct("La caba\xF1a ya se puede habitar: toca \xABHabitar\xBB")),se.on&&(se.rit.te>0||se.rit.riego>0)&&ai()},1e3)}function $0(){if(se.on)for(let i of Hr){let e=se.markers[i.id],t=oo(i),n=i.kind==="colgante"?-.9:i.kind==="pared"?0:.9;e.position.set(t[0],t[1]+n,t[2])}xt("chips").style.display=se.on?"none":"",se.btn.textContent=se.on?"Volver a reparar":"Habitar";for(let i in se.markers)se.markers[i].visible=se.on;ai()}function ai(){if(!se.panel)return;if(!se.on){se.panel.style.display="none";return}se.panel.style.display="flex",se.panel.textContent="";let i=document.createElement("div");i.className="grp";let e=document.createElement("span");e.className="lab",e.textContent="Recuerdos: "+(ie.mem||0),i.appendChild(e);let t=(r,a,o)=>i.appendChild(Bs(o>0?r+" \xB7 "+Math.ceil(o)+" s":r,a,"",o>0));t("Preparar t\xE9",sM,se.rit.te),t("Regar plantas",rM,se.rit.riego),i.appendChild(Bs("Diario de la caba\xF1a",lM,"")),dd(ie)&&i.appendChild(Bs("Jard\xEDn zen",()=>b0({tr:r=>r,ctx:()=>nt.ctx,addMem:lo,say:Ct,chime:()=>{try{nt.chime(0,2)}catch{}}}),"ready")),i.appendChild(Bs(k0(),()=>{z0(),ai()},"")),se.panel.appendChild(i);let n=se.sel&&K1(se.sel),s=document.createElement("div");if(s.className="grp",n){let r=document.createElement("span");r.className="lab",r.textContent=n.n,s.appendChild(r),ie.decor[n.id]&&s.appendChild(Bs("Quitar",()=>{delete ie.decor[n.id],jc(),ai(),Bn()},"")),Wc.filter(a=>a.kind===n.kind&&ie.decor[n.id]!==a.id&&(a.gate==null||ao()[a.gate])).forEach(a=>{let o=!!ie.own[a.id]||a.gate!=null;s.appendChild(Bs(o?a.name:a.name+" \xB7 "+a.cost,()=>j0(n,a),o?"done":(ie.mem||0)>=a.cost?"ready":"locked"))})}else{let r=document.createElement("span");r.className="loot",r.style.alignSelf="center",r.textContent="Toca un c\xEDrculo de la caba\xF1a para decorar ese lugar.",s.appendChild(r)}se.panel.appendChild(s)}function j0(i,e){if(!ie.own[e.id]){if((ie.mem||0)<e.cost){Ct("Te faltan "+(e.cost-(ie.mem||0))+" recuerdos. Prepara t\xE9 o espera visitas.");return}ie.mem-=e.cost,ie.own[e.id]=!0}for(let n of Object.keys(ie.decor))ie.decor[n]===e.id&&delete ie.decor[n];ie.decor[i.id]=e.id,jc();let t=oo(i);Us([t[0],t[1]+1,t[2]]);try{nt.chime((t[0]-1.5)/12,2)}catch{}UX.hap([10,40,10]),Ct(e.name+" colocado"),ai(),Bn()}function lM(){let i=document.createElement("div");i.style.cssText="position:fixed;inset:0;z-index:50;display:grid;place-items:center;background:rgba(20,22,48,.6)";let e=document.createElement("div");e.style.cssText="background:#363a66;color:#fbf1e0;border:1px solid #5a609a;border-radius:16px;padding:18px 20px;max-width:min(88vw,420px);max-height:70vh;overflow:auto;font:15px/1.45 system-ui";let t=document.createElement("h2");if(t.style.cssText="margin:0 0 10px;font:600 1.1rem system-ui",t.textContent="Diario de la caba\xF1a",e.appendChild(t),!ie.notes.length){let s=document.createElement("p");s.textContent="A\xFAn vac\xEDo. Los visitantes dejan notas sobre quien vivi\xF3 aqu\xED.",e.appendChild(s)}ie.notes.forEach(s=>{let r=document.createElement("p");r.style.margin="0 0 10px",r.textContent="\xB7 "+s,e.appendChild(r)}),F0(e,ie,s=>s,lo,Bn),ie.cnt=ie.cnt||{},dd(ie)&&!ie.cnt.zen&&(ie.cnt.zen=1,Bn(),setTimeout(()=>{Ct("Se abri\xF3 el jard\xEDn zen: ya le\xEDste todas las cartas de Mara"),ai()},600));let n=Bs("Cerrar",()=>i.remove(),"");e.appendChild(n),i.appendChild(e),i.onclick=s=>{s.target===i&&i.remove()},document.body.appendChild(i)}var K0=()=>{se.root&&(jc(),ai())};var Cd=new Ts,Q0=new he,cM=()=>Object.values(Xt).map(i=>i.g).concat([on],Rd());function Kc(i){let e=Xn.getBoundingClientRect();Q0.set((i.clientX-e.left)/e.width*2-1,-((i.clientY-e.top)/e.height)*2+1),Cd.setFromCamera(Q0,xn);{let n=Rd();if(n.length){let s=Cd.intersectObjects(n,!0);for(let r of s){let a=r.object;for(;a&&!a.userData.itemId;)a=a.parent;if(a&&String(a.userData.itemId).startsWith("slot:"))return{id:a.userData.itemId,point:r.point}}}}let t=Cd.intersectObjects(cM().concat(Rc),!0);for(let n of t){if(!sd(n.object))continue;let s=n.object;for(;s&&!s.userData.itemId;)s=s.parent;return s?{id:s.userData.itemId,point:n.point}:{id:null,point:n.point}}return{id:null}}var Id=0,Pd=[0,0],hM=(i,e)=>to(i,e,Os()*.8).length>0,Gi=new Map,Yn=null,zn=null,Ld=0,co=0,eg=0,Vi=null,tg=0,ng=0,Zn;function ig(){Zn=document.createElement("div"),Zn.style.cssText="position:fixed;pointer-events:none;z-index:4;width:70px;height:70px;margin:-35px 0 0 -35px;border-radius:50%;border:2px solid rgba(255,255,255,.55);box-shadow:0 0 14px rgba(255,255,255,.25);opacity:0;transition:opacity .2s",document.body.appendChild(Zn)}var sg=()=>!Yn;function rg(){Xn.addEventListener("pointerdown",e=>{if(!it.started)return;if(Xn.setPointerCapture(e.pointerId),Gi.set(e.pointerId,{x:e.clientX,y:e.clientY}),nt.resume(),Gi.size===2){Yn="pinch";let[r,a]=[...Gi.values()];Ld=Math.hypot(r.x-a.x,r.y-a.y);return}let t=Kc(e);zn={x:e.clientX,y:e.clientY,t:performance.now(),moved:0,id:t.id};let n=performance.now();n-Id<320&&Math.hypot(e.clientX-Pd[0],e.clientY-Pd[1])<30?(Br(),Id=0):(Id=n,Pd=[e.clientX,e.clientY]);let s=hM(e.clientX,e.clientY);e.button===2||e.shiftKey?Yn="pan":Yn=s||t.id&&e0(t.id)?"scrub":"orbit",e.pointerType==="mouse"&&e.button===1&&(Yn="pan")}),Xn.addEventListener("contextmenu",e=>e.preventDefault()),Xn.addEventListener("pointermove",e=>{Yn==="scrub"&&it.started&&(Zn.style.opacity=1,Zn.style.width=Zn.style.height=Os()*1.6+"px",Zn.style.margin=-Os()*.8+"px 0 0 "+-Os()*.8+"px",Zn.style.left=e.clientX+"px",Zn.style.top=e.clientY+"px");let t=Gi.get(e.pointerId);if(!t)return;let n=e.clientX-t.x,s=e.clientY-t.y;if(t.x=e.clientX,t.y=e.clientY,Yn==="pinch"&&Gi.size===2){let[r,a]=[...Gi.values()],o=Math.hypot(r.x-a.x,r.y-a.y);pe.tr=yt(pe.tr*Ld/o,9,34),Ld=o,Qa(n/2,s/2);return}if(Zn.style.left=e.clientX+"px",Zn.style.top=e.clientY+"px",!!zn){if(zn.moved+=Math.hypot(n,s),Yn==="pan"){Qa(n,s);return}if(Yn==="orbit")pe.tth=yt(pe.tth-n*.006,-.95,.95),pe.tph=yt(pe.tph+s*.004,.03,.42);else if(Yn==="scrub"){let r=Math.hypot(n,s),a=to(e.clientX,e.clientY,Os());if(a.length){let o=yt(r/16,0,1)*.08;a.forEach(c=>{c.m.userData.s=Math.max(0,c.m.userData.s-o*(1-.4*c.dd/Os())),Oi(c.m)}),Vi=Kc(e).point||a[0].m.getWorldPosition(new D),eg=yt(r/20,0,1),co=performance.now(),!zn.hapd&&co-ng>1200&&(zn.hapd=!0,ng=co,UX.hap(6)),Math.random()<.5&&ed(Vi.x,Vi.y+.1,Vi.z+.1,1,16777215,1.2,1.2),nt.scrub(eg),clearTimeout(tg),tg=setTimeout(()=>{ki(),Bn()},700)}else nt.scrub(0)}}});let i=e=>{if(Gi.has(e.pointerId)){if(Gi.delete(e.pointerId),nt.scrub(0),Vi=null,Zn.style.opacity=0,zn&&zn.moved<8&&performance.now()-zn.t<450&&zn.id&&Yn!=="pinch"){J0(zn.id)||zn.id==="gato"&&h0();let t=Yu(zn.id);t&&io(t)}Gi.size===0&&(zn=null,Yn=null)}};Xn.addEventListener("pointerup",i),Xn.addEventListener("pointercancel",i),Xn.addEventListener("wheel",e=>{it.started&&(e.preventDefault(),pe.tr=yt(pe.tr*(1+e.deltaY*.001),9,34))},{passive:!1})}function ag(i){let e=Vi&&ie.repaired.barandal&&performance.now()-co<400;e&&Ot.handL.position.set(Vi.x,Vi.y+1.2,Vi.z+1.2),Ot.handL.intensity+=((e?2.4:0)-Ot.handL.intensity)*Math.min(1,i*6),performance.now()-co>200&&nt.scrub(0)}um();im();Lm();Bm();Ym();wm();Jm();$m();Ke.traverse(i=>{i.isMesh&&!i.userData.item&&(i.castShadow=!0,i.receiveShadow=!0)});Object.values(Xt).forEach(i=>i.blobs.forEach(e=>{e.castShadow=!1}));nm();Object.values(Xt).forEach(i=>i.blobs.forEach(Oi));i0(i=>{td(i),io(i)});km();cm(Ct);Pr();ki();no();jm();ig();s0(td);c0();fm();rg();PZ.ctx=()=>nt.ctx;PZ.started=()=>it.started;o0(x0);xt("go").onclick=()=>{try{nt.init(),nt.resume(),nt.rain(it.rainOn),nt.setMood(us(),1)}catch{}xt("start").hidden=!0,it.started=!0;{let i=$a(),e=vm();if(i>e){bm(i);let t=i-e;setTimeout(()=>Ct({es:"La caba\xF1a recibi\xF3 "+t+(t>1?" luces":" luz")+" del r\xEDo",en:"The cabin received "+t+(t>1?" lights":" light")+" from the river",ja:"\u5C0F\u5C4B\u306F\u5DDD\u304B\u3089"+t+"\u3064\u306E\u706F\u3092\u53D7\u3051\u53D6\u308A\u307E\u3057\u305F"}[Lr()]||""),1800)}}Ns()&&!Mm()&&(Sm(),setTimeout(()=>Ct({es:"El cartel se complet\xF3: algo despert\xF3 en el jard\xEDn del acantilado",en:"The sign is complete: something woke in the cliff garden",ja:"\u770B\u677F\u304C\u5B8C\u6210\u3057\u307E\u3057\u305F\uFF1A\u5D16\u306E\u5EAD\u3067\u4F55\u304B\u304C\u76EE\u899A\u3081\u307E\u3057\u305F"}[Lr()]||""),4800)),Ds()===tn.length&&(Ht.armT=it.T+3),setTimeout(()=>{xt("hint").style.opacity=0},12e3)};Km();p0();pm();ud(UX);vd(UX);Sd(UX);X0();window.__habReset=K0;var Dd=performance.now(),Nd=0,Qc=0,Ud=0,eh=0,th=Math.min(devicePixelRatio||1,1.5);function og(i){if(requestAnimationFrame(og),PZ.on){Dd=i;return}let e=Math.min(.05,(i-Dd)/1e3);if(Dd=i,it.T+=e,Qc+=e,Ud++,Qc>3){let t=Qc/Ud;Qc=0,Ud=0,eh=t>.027?eh+1:0,eh>=2&&th>1&&(eh=0,th=Math.max(1,th-.25),On.setPixelRatio(th),Cc())}it.started&&(Jt.next-=e,Jt.next<=0&&(Jt.next=50+Math.random()*80,ld()),m0(e),!Ht.on&&!Ht.shown&&it.T>Ht.armT&&Ds()===tn.length&&cd(),g0(e)),Qm(e,sg()),mm(e),ag(e),zm(e,us(),!!ie.repaired.nichos),Dm(e),Am(it.T),Hm(e),u0(e,it.T),Z0(e,it.T),Nd-=e,Nd<=0&&(Nd=.5,ki(),r0(),nt.setMood(us(),1)),nt.update(-3,1,it.T),On.render(Ge,xn)}l0();UX.init();requestAnimationFrame(og);window.__cab={A:nt,R:On,scene:Ge,shoot:ld,celebrar:()=>{Ht.shown=!1,cd()},star:Jt,fest:Ht,fl2:ds,get T(){return it.T},cat:on,dirtyNear:to,resetCam:Br,panBy:Qa,zoomBy:Or,state:ie,IT:Xt,ITEMS:tn,C:pe,attempt:io,measure:zc,cleanOf:id,applyVisuals:Pr,updateUI:ki,pick:Kc,cam:xn,toast:Ct,get started(){return it.started}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
