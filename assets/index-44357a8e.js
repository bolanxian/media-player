function jo(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Qe={},pr=[],Zt=()=>{},yf=()=>!1,Af=/^on[^a-z]/,Ba=e=>Af.test(e),Wo=e=>e.startsWith("onUpdate:"),at=Object.assign,Ho=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},gf=Object.prototype.hasOwnProperty,Me=(e,t)=>gf.call(e,t),ge=Array.isArray,fr=e=>Ia(e)==="[object Map]",Dd=e=>Ia(e)==="[object Set]",Ce=e=>typeof e=="function",nt=e=>typeof e=="string",Qo=e=>typeof e=="symbol",Ye=e=>e!==null&&typeof e=="object",Nd=e=>Ye(e)&&Ce(e.then)&&Ce(e.catch),zd=Object.prototype.toString,Ia=e=>zd.call(e),bf=e=>Ia(e).slice(8,-1),Fd=e=>Ia(e)==="[object Object]",Yo=e=>nt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ea=jo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Sa=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},vf=/-(\w)/g,dn=Sa(e=>e.replace(vf,(t,n)=>n?n.toUpperCase():"")),wf=/\B([A-Z])/g,Jn=Sa(e=>e.replace(wf,"-$1").toLowerCase()),Ta=Sa(e=>e.charAt(0).toUpperCase()+e.slice(1)),eo=Sa(e=>e?`on${Ta(e)}`:""),yi=(e,t)=>!Object.is(e,t),to=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},pa=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},xf=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Ef=e=>{const t=nt(e)?Number(e):NaN;return isNaN(t)?e:t};let es;const wo=()=>es||(es=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ge(e){if(ge(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=nt(r)?If(r):Ge(r);if(i)for(const a in i)t[a]=i[a]}return t}else{if(nt(e))return e;if(Ye(e))return e}}const Cf=/;(?![^(]*\))/g,kf=/:([^]+)/,Bf=new RegExp("\\/\\*.*?\\*\\/","gs");function If(e){const t={};return e.replace(Bf,"").split(Cf).forEach(n=>{if(n){const r=n.split(kf);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ce(e){let t="";if(nt(e))t=e;else if(ge(e))for(let n=0;n<e.length;n++){const r=ce(e[n]);r&&(t+=r+" ")}else if(Ye(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Sf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Tf=jo(Sf);function Rd(e){return!!e||e===""}const Bt=e=>nt(e)?e:e==null?"":ge(e)||Ye(e)&&(e.toString===zd||!Ce(e.toString))?JSON.stringify(e,Pd,2):String(e),Pd=(e,t)=>t&&t.__v_isRef?Pd(e,t.value):fr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Dd(t)?{[`Set(${t.size})`]:[...t.values()]}:Ye(t)&&!ge(t)&&!Fd(t)?String(t):t;let jt;class _f{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=jt,!t&&jt&&(this.index=(jt.scopes||(jt.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=jt;try{return jt=this,t()}finally{jt=n}}}on(){jt=this}off(){jt=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Lf(e,t=jt){t&&t.active&&t.effects.push(e)}function Of(){return jt}const Ko=e=>{const t=new Set(e);return t.w=0,t.n=0,t},qd=e=>(e.w&zn)>0,$d=e=>(e.n&zn)>0,Mf=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=zn},Df=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];qd(i)&&!$d(i)?i.delete(e):t[n++]=i,i.w&=~zn,i.n&=~zn}t.length=n}},xo=new WeakMap;let ii=0,zn=1;const Eo=30;let Ht;const Kn=Symbol(""),Co=Symbol("");class Xo{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Lf(this,r)}run(){if(!this.active)return this.fn();let t=Ht,n=Mn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ht,Ht=this,Mn=!0,zn=1<<++ii,ii<=Eo?Mf(this):ts(this),this.fn()}finally{ii<=Eo&&Df(this),zn=1<<--ii,Ht=this.parent,Mn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ht===this?this.deferStop=!0:this.active&&(ts(this),this.onStop&&this.onStop(),this.active=!1)}}function ts(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Mn=!0;const Vd=[];function kr(){Vd.push(Mn),Mn=!1}function Br(){const e=Vd.pop();Mn=e===void 0?!0:e}function _t(e,t,n){if(Mn&&Ht){let r=xo.get(e);r||xo.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=Ko()),Ud(i)}}function Ud(e,t){let n=!1;ii<=Eo?$d(e)||(e.n|=zn,n=!qd(e)):n=!e.has(Ht),n&&(e.add(Ht),Ht.deps.push(e))}function bn(e,t,n,r,i,a){const o=xo.get(e);if(!o)return;let u=[];if(t==="clear")u=[...o.values()];else if(n==="length"&&ge(e)){const y=Number(r);o.forEach((p,m)=>{(m==="length"||m>=y)&&u.push(p)})}else switch(n!==void 0&&u.push(o.get(n)),t){case"add":ge(e)?Yo(n)&&u.push(o.get("length")):(u.push(o.get(Kn)),fr(e)&&u.push(o.get(Co)));break;case"delete":ge(e)||(u.push(o.get(Kn)),fr(e)&&u.push(o.get(Co)));break;case"set":fr(e)&&u.push(o.get(Kn));break}if(u.length===1)u[0]&&ko(u[0]);else{const y=[];for(const p of u)p&&y.push(...p);ko(Ko(y))}}function ko(e,t){const n=ge(e)?e:[...e];for(const r of n)r.computed&&ns(r);for(const r of n)r.computed||ns(r)}function ns(e,t){(e!==Ht||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Nf=jo("__proto__,__v_isRef,__isVue"),jd=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Qo)),zf=Zo(),Ff=Zo(!1,!0),Rf=Zo(!0),rs=Pf();function Pf(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=De(this);for(let a=0,o=this.length;a<o;a++)_t(r,"get",a+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(De)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){kr();const r=De(this)[t].apply(this,n);return Br(),r}}),e}function qf(e){const t=De(this);return _t(t,"has",e),t.hasOwnProperty(e)}function Zo(e=!1,t=!1){return function(r,i,a){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&a===(e?t?nh:Kd:t?Yd:Qd).get(r))return r;const o=ge(r);if(!e){if(o&&Me(rs,i))return Reflect.get(rs,i,a);if(i==="hasOwnProperty")return qf}const u=Reflect.get(r,i,a);return(Qo(i)?jd.has(i):Nf(i))||(e||_t(r,"get",i),t)?u:bt(u)?o&&Yo(i)?u:u.value:Ye(u)?e?Xd(u):el(u):u}}const $f=Wd(),Vf=Wd(!0);function Wd(e=!1){return function(n,r,i,a){let o=n[r];if(br(o)&&bt(o)&&!bt(i))return!1;if(!e&&(!fa(i)&&!br(i)&&(o=De(o),i=De(i)),!ge(n)&&bt(o)&&!bt(i)))return o.value=i,!0;const u=ge(n)&&Yo(r)?Number(r)<n.length:Me(n,r),y=Reflect.set(n,r,i,a);return n===De(a)&&(u?yi(i,o)&&bn(n,"set",r,i):bn(n,"add",r,i)),y}}function Uf(e,t){const n=Me(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&bn(e,"delete",t,void 0),r}function jf(e,t){const n=Reflect.has(e,t);return(!Qo(t)||!jd.has(t))&&_t(e,"has",t),n}function Wf(e){return _t(e,"iterate",ge(e)?"length":Kn),Reflect.ownKeys(e)}const Hd={get:zf,set:$f,deleteProperty:Uf,has:jf,ownKeys:Wf},Hf={get:Rf,set(e,t){return!0},deleteProperty(e,t){return!0}},Qf=at({},Hd,{get:Ff,set:Vf}),Go=e=>e,_a=e=>Reflect.getPrototypeOf(e);function Pi(e,t,n=!1,r=!1){e=e.__v_raw;const i=De(e),a=De(t);n||(t!==a&&_t(i,"get",t),_t(i,"get",a));const{has:o}=_a(i),u=r?Go:n?rl:Ai;if(o.call(i,t))return u(e.get(t));if(o.call(i,a))return u(e.get(a));e!==i&&e.get(t)}function qi(e,t=!1){const n=this.__v_raw,r=De(n),i=De(e);return t||(e!==i&&_t(r,"has",e),_t(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function $i(e,t=!1){return e=e.__v_raw,!t&&_t(De(e),"iterate",Kn),Reflect.get(e,"size",e)}function is(e){e=De(e);const t=De(this);return _a(t).has.call(t,e)||(t.add(e),bn(t,"add",e,e)),this}function as(e,t){t=De(t);const n=De(this),{has:r,get:i}=_a(n);let a=r.call(n,e);a||(e=De(e),a=r.call(n,e));const o=i.call(n,e);return n.set(e,t),a?yi(t,o)&&bn(n,"set",e,t):bn(n,"add",e,t),this}function os(e){const t=De(this),{has:n,get:r}=_a(t);let i=n.call(t,e);i||(e=De(e),i=n.call(t,e)),r&&r.call(t,e);const a=t.delete(e);return i&&bn(t,"delete",e,void 0),a}function ls(){const e=De(this),t=e.size!==0,n=e.clear();return t&&bn(e,"clear",void 0,void 0),n}function Vi(e,t){return function(r,i){const a=this,o=a.__v_raw,u=De(o),y=t?Go:e?rl:Ai;return!e&&_t(u,"iterate",Kn),o.forEach((p,m)=>r.call(i,y(p),y(m),a))}}function Ui(e,t,n){return function(...r){const i=this.__v_raw,a=De(i),o=fr(a),u=e==="entries"||e===Symbol.iterator&&o,y=e==="keys"&&o,p=i[e](...r),m=n?Go:t?rl:Ai;return!t&&_t(a,"iterate",y?Co:Kn),{next(){const{value:v,done:h}=p.next();return h?{value:v,done:h}:{value:u?[m(v[0]),m(v[1])]:m(v),done:h}},[Symbol.iterator](){return this}}}}function kn(e){return function(...t){return e==="delete"?!1:this}}function Yf(){const e={get(a){return Pi(this,a)},get size(){return $i(this)},has:qi,add:is,set:as,delete:os,clear:ls,forEach:Vi(!1,!1)},t={get(a){return Pi(this,a,!1,!0)},get size(){return $i(this)},has:qi,add:is,set:as,delete:os,clear:ls,forEach:Vi(!1,!0)},n={get(a){return Pi(this,a,!0)},get size(){return $i(this,!0)},has(a){return qi.call(this,a,!0)},add:kn("add"),set:kn("set"),delete:kn("delete"),clear:kn("clear"),forEach:Vi(!0,!1)},r={get(a){return Pi(this,a,!0,!0)},get size(){return $i(this,!0)},has(a){return qi.call(this,a,!0)},add:kn("add"),set:kn("set"),delete:kn("delete"),clear:kn("clear"),forEach:Vi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=Ui(a,!1,!1),n[a]=Ui(a,!0,!1),t[a]=Ui(a,!1,!0),r[a]=Ui(a,!0,!0)}),[e,n,t,r]}const[Kf,Xf,Zf,Gf]=Yf();function Jo(e,t){const n=t?e?Gf:Zf:e?Xf:Kf;return(r,i,a)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(Me(n,i)&&i in r?n:r,i,a)}const Jf={get:Jo(!1,!1)},eh={get:Jo(!1,!0)},th={get:Jo(!0,!1)},Qd=new WeakMap,Yd=new WeakMap,Kd=new WeakMap,nh=new WeakMap;function rh(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ih(e){return e.__v_skip||!Object.isExtensible(e)?0:rh(bf(e))}function el(e){return br(e)?e:nl(e,!1,Hd,Jf,Qd)}function tl(e){return nl(e,!1,Qf,eh,Yd)}function Xd(e){return nl(e,!0,Hf,th,Kd)}function nl(e,t,n,r,i){if(!Ye(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=i.get(e);if(a)return a;const o=ih(e);if(o===0)return e;const u=new Proxy(e,o===2?r:n);return i.set(e,u),u}function hr(e){return br(e)?hr(e.__v_raw):!!(e&&e.__v_isReactive)}function br(e){return!!(e&&e.__v_isReadonly)}function fa(e){return!!(e&&e.__v_isShallow)}function Zd(e){return hr(e)||br(e)}function De(e){const t=e&&e.__v_raw;return t?De(t):e}function Gd(e){return pa(e,"__v_skip",!0),e}const Ai=e=>Ye(e)?el(e):e,rl=e=>Ye(e)?Xd(e):e;function Jd(e){Mn&&Ht&&(e=De(e),Ud(e.dep||(e.dep=Ko())))}function ec(e,t){e=De(e);const n=e.dep;n&&ko(n)}function bt(e){return!!(e&&e.__v_isRef===!0)}function vr(e){return ah(e,!0)}function ah(e,t){return bt(e)?e:new oh(e,t)}class oh{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:De(t),this._value=n?t:Ai(t)}get value(){return Jd(this),this._value}set value(t){const n=this.__v_isShallow||fa(t)||br(t);t=n?t:De(t),yi(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Ai(t),ec(this))}}function lh(e){return bt(e)?e.value:e}const sh={get:(e,t,n)=>lh(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return bt(i)&&!bt(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function tc(e){return hr(e)?e:new Proxy(e,sh)}class dh{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Xo(t,()=>{this._dirty||(this._dirty=!0,ec(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=De(this);return Jd(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function ch(e,t,n=!1){let r,i;const a=Ce(e);return a?(r=e,i=Zt):(r=e.get,i=e.set),new dh(r,i,a||!i,n)}function Dn(e,t,n,r){let i;try{i=r?e(...r):e()}catch(a){La(a,t,n)}return i}function $t(e,t,n,r){if(Ce(e)){const a=Dn(e,t,n,r);return a&&Nd(a)&&a.catch(o=>{La(o,t,n)}),a}const i=[];for(let a=0;a<e.length;a++)i.push($t(e[a],t,n,r));return i}function La(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let a=t.parent;const o=t.proxy,u=n;for(;a;){const p=a.ec;if(p){for(let m=0;m<p.length;m++)if(p[m](e,o,u)===!1)return}a=a.parent}const y=t.appContext.config.errorHandler;if(y){Dn(y,null,10,[e,o,u]);return}}uh(e,n,i,r)}function uh(e,t,n,r=!0){console.error(e)}let gi=!1,Bo=!1;const gt=[];let an=0;const mr=[];let yn=null,jn=0;const nc=Promise.resolve();let il=null;function si(e){const t=il||nc;return e?t.then(this?e.bind(this):e):t}function ph(e){let t=an+1,n=gt.length;for(;t<n;){const r=t+n>>>1;bi(gt[r])<e?t=r+1:n=r}return t}function al(e){(!gt.length||!gt.includes(e,gi&&e.allowRecurse?an+1:an))&&(e.id==null?gt.push(e):gt.splice(ph(e.id),0,e),rc())}function rc(){!gi&&!Bo&&(Bo=!0,il=nc.then(ac))}function fh(e){const t=gt.indexOf(e);t>an&&gt.splice(t,1)}function hh(e){ge(e)?mr.push(...e):(!yn||!yn.includes(e,e.allowRecurse?jn+1:jn))&&mr.push(e),rc()}function ss(e,t=gi?an+1:0){for(;t<gt.length;t++){const n=gt[t];n&&n.pre&&(gt.splice(t,1),t--,n())}}function ic(e){if(mr.length){const t=[...new Set(mr)];if(mr.length=0,yn){yn.push(...t);return}for(yn=t,yn.sort((n,r)=>bi(n)-bi(r)),jn=0;jn<yn.length;jn++)yn[jn]();yn=null,jn=0}}const bi=e=>e.id==null?1/0:e.id,mh=(e,t)=>{const n=bi(e)-bi(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ac(e){Bo=!1,gi=!0,gt.sort(mh);const t=Zt;try{for(an=0;an<gt.length;an++){const n=gt[an];n&&n.active!==!1&&Dn(n,null,14)}}finally{an=0,gt.length=0,ic(),gi=!1,il=null,(gt.length||mr.length)&&ac()}}function yh(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Qe;let i=n;const a=t.startsWith("update:"),o=a&&t.slice(7);if(o&&o in r){const m=`${o==="modelValue"?"model":o}Modifiers`,{number:v,trim:h}=r[m]||Qe;h&&(i=n.map(E=>nt(E)?E.trim():E)),v&&(i=n.map(xf))}let u,y=r[u=eo(t)]||r[u=eo(dn(t))];!y&&a&&(y=r[u=eo(Jn(t))]),y&&$t(y,e,6,i);const p=r[u+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[u])return;e.emitted[u]=!0,$t(p,e,6,i)}}function oc(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const a=e.emits;let o={},u=!1;if(!Ce(e)){const y=p=>{const m=oc(p,t,!0);m&&(u=!0,at(o,m))};!n&&t.mixins.length&&t.mixins.forEach(y),e.extends&&y(e.extends),e.mixins&&e.mixins.forEach(y)}return!a&&!u?(Ye(e)&&r.set(e,null),null):(ge(a)?a.forEach(y=>o[y]=null):at(o,a),Ye(e)&&r.set(e,o),o)}function Oa(e,t){return!e||!Ba(t)?!1:(t=t.slice(2).replace(/Once$/,""),Me(e,t[0].toLowerCase()+t.slice(1))||Me(e,Jn(t))||Me(e,t))}let mt=null,lc=null;function ha(e){const t=mt;return mt=e,lc=e&&e.type.__scopeId||null,t}function Fe(e,t=mt,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&ws(-1);const a=ha(t);let o;try{o=e(...i)}finally{ha(a),r._d&&ws(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function no(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:a,propsOptions:[o],slots:u,attrs:y,emit:p,render:m,renderCache:v,data:h,setupState:E,ctx:k,inheritAttrs:b}=e;let I,D;const _=ha(e);try{if(n.shapeFlag&4){const T=i||r;I=rn(m.call(T,T,v,a,E,h,k)),D=y}else{const T=t;I=rn(T.length>1?T(a,{attrs:y,slots:u,emit:p}):T(a,null)),D=t.props?y:Ah(y)}}catch(T){pi.length=0,La(T,e,1),I=R(Vt)}let F=I;if(D&&b!==!1){const T=Object.keys(D),{shapeFlag:Q}=F;T.length&&Q&7&&(o&&T.some(Wo)&&(D=gh(D,o)),F=Fn(F,D))}return n.dirs&&(F=Fn(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),I=F,ha(_),I}const Ah=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ba(n))&&((t||(t={}))[n]=e[n]);return t},gh=(e,t)=>{const n={};for(const r in e)(!Wo(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function bh(e,t,n){const{props:r,children:i,component:a}=e,{props:o,children:u,patchFlag:y}=t,p=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&y>=0){if(y&1024)return!0;if(y&16)return r?ds(r,o,p):!!o;if(y&8){const m=t.dynamicProps;for(let v=0;v<m.length;v++){const h=m[v];if(o[h]!==r[h]&&!Oa(p,h))return!0}}}else return(i||u)&&(!u||!u.$stable)?!0:r===o?!1:r?o?ds(r,o,p):!0:!!o;return!1}function ds(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const a=r[i];if(t[a]!==e[a]&&!Oa(n,a))return!0}return!1}function vh({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const wh=e=>e.__isSuspense;function xh(e,t){t&&t.pendingBranch?ge(e)?t.effects.push(...e):t.effects.push(e):hh(e)}const ji={};function ta(e,t,n){return sc(e,t,n)}function sc(e,t,{immediate:n,deep:r,flush:i,onTrack:a,onTrigger:o}=Qe){var u;const y=Of()===((u=ft)==null?void 0:u.scope)?ft:null;let p,m=!1,v=!1;if(bt(e)?(p=()=>e.value,m=fa(e)):hr(e)?(p=()=>e,r=!0):ge(e)?(v=!0,m=e.some(T=>hr(T)||fa(T)),p=()=>e.map(T=>{if(bt(T))return T.value;if(hr(T))return Yn(T);if(Ce(T))return Dn(T,y,2)})):Ce(e)?t?p=()=>Dn(e,y,2):p=()=>{if(!(y&&y.isUnmounted))return h&&h(),$t(e,y,3,[E])}:p=Zt,t&&r){const T=p;p=()=>Yn(T())}let h,E=T=>{h=_.onStop=()=>{Dn(T,y,4)}},k;if(Ei)if(E=Zt,t?n&&$t(t,y,3,[p(),v?[]:void 0,E]):p(),i==="sync"){const T=Am();k=T.__watcherHandles||(T.__watcherHandles=[])}else return Zt;let b=v?new Array(e.length).fill(ji):ji;const I=()=>{if(_.active)if(t){const T=_.run();(r||m||(v?T.some((Q,M)=>yi(Q,b[M])):yi(T,b)))&&(h&&h(),$t(t,y,3,[T,b===ji?void 0:v&&b[0]===ji?[]:b,E]),b=T)}else _.run()};I.allowRecurse=!!t;let D;i==="sync"?D=I:i==="post"?D=()=>Tt(I,y&&y.suspense):(I.pre=!0,y&&(I.id=y.uid),D=()=>al(I));const _=new Xo(p,D);t?n?I():b=_.run():i==="post"?Tt(_.run.bind(_),y&&y.suspense):_.run();const F=()=>{_.stop(),y&&y.scope&&Ho(y.scope.effects,_)};return k&&k.push(F),F}function Eh(e,t,n){const r=this.proxy,i=nt(e)?e.includes(".")?dc(r,e):()=>r[e]:e.bind(r,r);let a;Ce(t)?a=t:(a=t.handler,n=t);const o=ft;wr(this);const u=sc(i,a.bind(r),n);return o?wr(o):Xn(),u}function dc(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Yn(e,t){if(!Ye(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),bt(e))Yn(e.value,t);else if(ge(e))for(let n=0;n<e.length;n++)Yn(e[n],t);else if(Dd(e)||fr(e))e.forEach(n=>{Yn(n,t)});else if(Fd(e))for(const n in e)Yn(e[n],t);return e}function Qt(e,t){const n=mt;if(n===null)return e;const r=Ra(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let a=0;a<t.length;a++){let[o,u,y,p=Qe]=t[a];o&&(Ce(o)&&(o={mounted:o,updated:o}),o.deep&&Yn(u),i.push({dir:o,instance:r,value:u,oldValue:void 0,arg:y,modifiers:p}))}return e}function Pn(e,t,n,r){const i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){const u=i[o];a&&(u.oldValue=a[o].value);let y=u.dir[r];y&&(kr(),$t(y,n,8,[e.el,u,e,t]),Br())}}function cc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return hc(()=>{e.isMounted=!0}),yc(()=>{e.isUnmounting=!0}),e}const zt=[Function,Array],uc={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:zt,onEnter:zt,onAfterEnter:zt,onEnterCancelled:zt,onBeforeLeave:zt,onLeave:zt,onAfterLeave:zt,onLeaveCancelled:zt,onBeforeAppear:zt,onAppear:zt,onAfterAppear:zt,onAppearCancelled:zt},Ch={name:"BaseTransition",props:uc,setup(e,{slots:t}){const n=ot(),r=cc();let i;return()=>{const a=t.default&&ol(t.default(),!0);if(!a||!a.length)return;let o=a[0];if(a.length>1){for(const b of a)if(b.type!==Vt){o=b;break}}const u=De(e),{mode:y}=u;if(r.isLeaving)return ro(o);const p=cs(o);if(!p)return ro(o);const m=vi(p,u,r,n);wi(p,m);const v=n.subTree,h=v&&cs(v);let E=!1;const{getTransitionKey:k}=p.type;if(k){const b=k();i===void 0?i=b:b!==i&&(i=b,E=!0)}if(h&&h.type!==Vt&&(!Wn(p,h)||E)){const b=vi(h,u,r,n);if(wi(h,b),y==="out-in")return r.isLeaving=!0,b.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},ro(o);y==="in-out"&&p.type!==Vt&&(b.delayLeave=(I,D,_)=>{const F=pc(r,h);F[String(h.key)]=h,I._leaveCb=()=>{D(),I._leaveCb=void 0,delete m.delayedLeave},m.delayedLeave=_})}return o}}},kh=Ch;function pc(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function vi(e,t,n,r){const{appear:i,mode:a,persisted:o=!1,onBeforeEnter:u,onEnter:y,onAfterEnter:p,onEnterCancelled:m,onBeforeLeave:v,onLeave:h,onAfterLeave:E,onLeaveCancelled:k,onBeforeAppear:b,onAppear:I,onAfterAppear:D,onAppearCancelled:_}=t,F=String(e.key),T=pc(n,e),Q=($,W)=>{$&&$t($,r,9,W)},M=($,W)=>{const z=W[1];Q($,W),ge($)?$.every(Te=>Te.length<=1)&&z():$.length<=1&&z()},j={mode:a,persisted:o,beforeEnter($){let W=u;if(!n.isMounted)if(i)W=b||u;else return;$._leaveCb&&$._leaveCb(!0);const z=T[F];z&&Wn(e,z)&&z.el._leaveCb&&z.el._leaveCb(),Q(W,[$])},enter($){let W=y,z=p,Te=m;if(!n.isMounted)if(i)W=I||y,z=D||p,Te=_||m;else return;let le=!1;const J=$._enterCb=X=>{le||(le=!0,X?Q(Te,[$]):Q(z,[$]),j.delayedLeave&&j.delayedLeave(),$._enterCb=void 0)};W?M(W,[$,J]):J()},leave($,W){const z=String(e.key);if($._enterCb&&$._enterCb(!0),n.isUnmounting)return W();Q(v,[$]);let Te=!1;const le=$._leaveCb=J=>{Te||(Te=!0,W(),J?Q(k,[$]):Q(E,[$]),$._leaveCb=void 0,T[z]===e&&delete T[z])};T[z]=e,h?M(h,[$,le]):le()},clone($){return vi($,t,n,r)}};return j}function ro(e){if(Ma(e))return e=Fn(e),e.children=null,e}function cs(e){return Ma(e)?e.children?e.children[0]:void 0:e}function wi(e,t){e.shapeFlag&6&&e.component?wi(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ol(e,t=!1,n){let r=[],i=0;for(let a=0;a<e.length;a++){let o=e[a];const u=n==null?o.key:String(n)+String(o.key!=null?o.key:a);o.type===pt?(o.patchFlag&128&&i++,r=r.concat(ol(o.children,t,u))):(t||o.type!==Vt)&&r.push(u!=null?Fn(o,{key:u}):o)}if(i>1)for(let a=0;a<r.length;a++)r[a].patchFlag=-2;return r}function Ir(e,t){return Ce(e)?(()=>at({name:e.name},t,{setup:e}))():e}const di=e=>!!e.type.__asyncLoader,Ma=e=>e.type.__isKeepAlive;function Bh(e,t){fc(e,"a",t)}function Ih(e,t){fc(e,"da",t)}function fc(e,t,n=ft){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Da(t,r,n),n){let i=n.parent;for(;i&&i.parent;)Ma(i.parent.vnode)&&Sh(r,t,n,i),i=i.parent}}function Sh(e,t,n,r){const i=Da(t,e,r,!0);Ac(()=>{Ho(r[t],i)},n)}function Da(e,t,n=ft,r=!1){if(n){const i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;kr(),wr(n);const u=$t(t,n,e,o);return Xn(),Br(),u});return r?i.unshift(a):i.push(a),a}}const wn=e=>(t,n=ft)=>(!Ei||e==="sp")&&Da(e,(...r)=>t(...r),n),Th=wn("bm"),hc=wn("m"),_h=wn("bu"),mc=wn("u"),yc=wn("bum"),Ac=wn("um"),Lh=wn("sp"),Oh=wn("rtg"),Mh=wn("rtc");function Dh(e,t=ft){Da("ec",e,t)}const ll="components";function qt(e,t){return bc(ll,e,!0,t)||e}const gc=Symbol.for("v-ndc");function Nh(e){return nt(e)?bc(ll,e,!1)||e:e||gc}function bc(e,t,n=!0,r=!1){const i=mt||ft;if(i){const a=i.type;if(e===ll){const u=fm(a,!1);if(u&&(u===t||u===dn(t)||u===Ta(dn(t))))return a}const o=us(i[e]||a[e],t)||us(i.appContext[e],t);return!o&&r?a:o}}function us(e,t){return e&&(e[t]||e[dn(t)]||e[Ta(dn(t))])}function zh(e,t,n,r){let i;const a=n&&n[r];if(ge(e)||nt(e)){i=new Array(e.length);for(let o=0,u=e.length;o<u;o++)i[o]=t(e[o],o,void 0,a&&a[o])}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,a&&a[o])}else if(Ye(e))if(e[Symbol.iterator])i=Array.from(e,(o,u)=>t(o,u,void 0,a&&a[u]));else{const o=Object.keys(e);i=new Array(o.length);for(let u=0,y=o.length;u<y;u++){const p=o[u];i[u]=t(e[p],p,u,a&&a[u])}}else i=[];return n&&(n[r]=i),i}function Se(e,t,n={},r,i){if(mt.isCE||mt.parent&&di(mt.parent)&&mt.parent.isCE)return t!=="default"&&(n.name=t),R("slot",n,r&&r());let a=e[t];a&&a._c&&(a._d=!1),Y();const o=a&&vc(a(n)),u=st(pt,{key:n.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&e._===1?64:-2);return!i&&u.scopeId&&(u.slotScopeIds=[u.scopeId+"-s"]),a&&a._c&&(a._d=!0),u}function vc(e){return e.some(t=>Aa(t)?!(t.type===Vt||t.type===pt&&!vc(t.children)):!0)?e:null}const Io=e=>e?Lc(e)?Ra(e)||e.proxy:Io(e.parent):null,ci=at(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Io(e.parent),$root:e=>Io(e.root),$emit:e=>e.emit,$options:e=>sl(e),$forceUpdate:e=>e.f||(e.f=()=>al(e.update)),$nextTick:e=>e.n||(e.n=si.bind(e.proxy)),$watch:e=>Eh.bind(e)}),io=(e,t)=>e!==Qe&&!e.__isScriptSetup&&Me(e,t),Fh={get({_:e},t){const{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:u,appContext:y}=e;let p;if(t[0]!=="$"){const E=o[t];if(E!==void 0)switch(E){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else{if(io(r,t))return o[t]=1,r[t];if(i!==Qe&&Me(i,t))return o[t]=2,i[t];if((p=e.propsOptions[0])&&Me(p,t))return o[t]=3,a[t];if(n!==Qe&&Me(n,t))return o[t]=4,n[t];So&&(o[t]=0)}}const m=ci[t];let v,h;if(m)return t==="$attrs"&&_t(e,"get",t),m(e);if((v=u.__cssModules)&&(v=v[t]))return v;if(n!==Qe&&Me(n,t))return o[t]=4,n[t];if(h=y.config.globalProperties,Me(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:a}=e;return io(i,t)?(i[t]=n,!0):r!==Qe&&Me(r,t)?(r[t]=n,!0):Me(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:a}},o){let u;return!!n[o]||e!==Qe&&Me(e,o)||io(t,o)||(u=a[0])&&Me(u,o)||Me(r,o)||Me(ci,o)||Me(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Me(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ps(e){return ge(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let So=!0;function Rh(e){const t=sl(e),n=e.proxy,r=e.ctx;So=!1,t.beforeCreate&&fs(t.beforeCreate,e,"bc");const{data:i,computed:a,methods:o,watch:u,provide:y,inject:p,created:m,beforeMount:v,mounted:h,beforeUpdate:E,updated:k,activated:b,deactivated:I,beforeDestroy:D,beforeUnmount:_,destroyed:F,unmounted:T,render:Q,renderTracked:M,renderTriggered:j,errorCaptured:$,serverPrefetch:W,expose:z,inheritAttrs:Te,components:le,directives:J,filters:X}=t;if(p&&Ph(p,r,null),o)for(const H in o){const ae=o[H];Ce(ae)&&(r[H]=ae.bind(n))}if(i){const H=i.call(n,n);Ye(H)&&(e.data=el(H))}if(So=!0,a)for(const H in a){const ae=a[H],V=Ce(ae)?ae.bind(n,n):Ce(ae.get)?ae.get.bind(n,n):Zt,Le=!Ce(ae)&&Ce(ae.set)?ae.set.bind(n):Zt,Oe=mm({get:V,set:Le});Object.defineProperty(r,H,{enumerable:!0,configurable:!0,get:()=>Oe.value,set:_e=>Oe.value=_e})}if(u)for(const H in u)wc(u[H],r,n,H);if(y){const H=Ce(y)?y.call(n):y;Reflect.ownKeys(H).forEach(ae=>{Wh(ae,H[ae])})}m&&fs(m,e,"c");function ue(H,ae){ge(ae)?ae.forEach(V=>H(V.bind(n))):ae&&H(ae.bind(n))}if(ue(Th,v),ue(hc,h),ue(_h,E),ue(mc,k),ue(Bh,b),ue(Ih,I),ue(Dh,$),ue(Mh,M),ue(Oh,j),ue(yc,_),ue(Ac,T),ue(Lh,W),ge(z))if(z.length){const H=e.exposed||(e.exposed={});z.forEach(ae=>{Object.defineProperty(H,ae,{get:()=>n[ae],set:V=>n[ae]=V})})}else e.exposed||(e.exposed={});Q&&e.render===Zt&&(e.render=Q),Te!=null&&(e.inheritAttrs=Te),le&&(e.components=le),J&&(e.directives=J)}function Ph(e,t,n=Zt){ge(e)&&(e=To(e));for(const r in e){const i=e[r];let a;Ye(i)?"default"in i?a=na(i.from||r,i.default,!0):a=na(i.from||r):a=na(i),bt(a)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):t[r]=a}}function fs(e,t,n){$t(ge(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function wc(e,t,n,r){const i=r.includes(".")?dc(n,r):()=>n[r];if(nt(e)){const a=t[e];Ce(a)&&ta(i,a)}else if(Ce(e))ta(i,e.bind(n));else if(Ye(e))if(ge(e))e.forEach(a=>wc(a,t,n,r));else{const a=Ce(e.handler)?e.handler.bind(n):t[e.handler];Ce(a)&&ta(i,a,e)}}function sl(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,u=a.get(t);let y;return u?y=u:!i.length&&!n&&!r?y=t:(y={},i.length&&i.forEach(p=>ma(y,p,o,!0)),ma(y,t,o)),Ye(t)&&a.set(t,y),y}function ma(e,t,n,r=!1){const{mixins:i,extends:a}=t;a&&ma(e,a,n,!0),i&&i.forEach(o=>ma(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const u=qh[o]||n&&n[o];e[o]=u?u(e[o],t[o]):t[o]}return e}const qh={data:hs,props:ms,emits:ms,methods:ai,computed:ai,beforeCreate:Ct,created:Ct,beforeMount:Ct,mounted:Ct,beforeUpdate:Ct,updated:Ct,beforeDestroy:Ct,beforeUnmount:Ct,destroyed:Ct,unmounted:Ct,activated:Ct,deactivated:Ct,errorCaptured:Ct,serverPrefetch:Ct,components:ai,directives:ai,watch:Vh,provide:hs,inject:$h};function hs(e,t){return t?e?function(){return at(Ce(e)?e.call(this,this):e,Ce(t)?t.call(this,this):t)}:t:e}function $h(e,t){return ai(To(e),To(t))}function To(e){if(ge(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ct(e,t){return e?[...new Set([].concat(e,t))]:t}function ai(e,t){return e?at(Object.create(null),e,t):t}function ms(e,t){return e?ge(e)&&ge(t)?[...new Set([...e,...t])]:at(Object.create(null),ps(e),ps(t??{})):t}function Vh(e,t){if(!e)return t;if(!t)return e;const n=at(Object.create(null),e);for(const r in t)n[r]=Ct(e[r],t[r]);return n}function xc(){return{app:null,config:{isNativeTag:yf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Uh=0;function jh(e,t){return function(r,i=null){Ce(r)||(r=at({},r)),i!=null&&!Ye(i)&&(i=null);const a=xc(),o=new Set;let u=!1;const y=a.app={_uid:Uh++,_component:r,_props:i,_container:null,_context:a,_instance:null,version:gm,get config(){return a.config},set config(p){},use(p,...m){return o.has(p)||(p&&Ce(p.install)?(o.add(p),p.install(y,...m)):Ce(p)&&(o.add(p),p(y,...m))),y},mixin(p){return a.mixins.includes(p)||a.mixins.push(p),y},component(p,m){return m?(a.components[p]=m,y):a.components[p]},directive(p,m){return m?(a.directives[p]=m,y):a.directives[p]},mount(p,m,v){if(!u){const h=R(r,i);return h.appContext=a,m&&t?t(h,p):e(h,p,v),u=!0,y._container=p,p.__vue_app__=y,Ra(h.component)||h.component.proxy}},unmount(){u&&(e(null,y._container),delete y._container.__vue_app__)},provide(p,m){return a.provides[p]=m,y},runWithContext(p){ya=y;try{return p()}finally{ya=null}}};return y}}let ya=null;function Wh(e,t){if(ft){let n=ft.provides;const r=ft.parent&&ft.parent.provides;r===n&&(n=ft.provides=Object.create(r)),n[e]=t}}function na(e,t,n=!1){const r=ft||mt;if(r||ya){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ya._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&Ce(t)?t.call(r&&r.proxy):t}}function Hh(e,t,n,r=!1){const i={},a={};pa(a,za,1),e.propsDefaults=Object.create(null),Ec(e,t,i,a);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:tl(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function Qh(e,t,n,r){const{props:i,attrs:a,vnode:{patchFlag:o}}=e,u=De(i),[y]=e.propsOptions;let p=!1;if((r||o>0)&&!(o&16)){if(o&8){const m=e.vnode.dynamicProps;for(let v=0;v<m.length;v++){let h=m[v];if(Oa(e.emitsOptions,h))continue;const E=t[h];if(y)if(Me(a,h))E!==a[h]&&(a[h]=E,p=!0);else{const k=dn(h);i[k]=_o(y,u,k,E,e,!1)}else E!==a[h]&&(a[h]=E,p=!0)}}}else{Ec(e,t,i,a)&&(p=!0);let m;for(const v in u)(!t||!Me(t,v)&&((m=Jn(v))===v||!Me(t,m)))&&(y?n&&(n[v]!==void 0||n[m]!==void 0)&&(i[v]=_o(y,u,v,void 0,e,!0)):delete i[v]);if(a!==u)for(const v in a)(!t||!Me(t,v))&&(delete a[v],p=!0)}p&&bn(e,"set","$attrs")}function Ec(e,t,n,r){const[i,a]=e.propsOptions;let o=!1,u;if(t)for(let y in t){if(ea(y))continue;const p=t[y];let m;i&&Me(i,m=dn(y))?!a||!a.includes(m)?n[m]=p:(u||(u={}))[m]=p:Oa(e.emitsOptions,y)||(!(y in r)||p!==r[y])&&(r[y]=p,o=!0)}if(a){const y=De(n),p=u||Qe;for(let m=0;m<a.length;m++){const v=a[m];n[v]=_o(i,y,v,p[v],e,!Me(p,v))}}return o}function _o(e,t,n,r,i,a){const o=e[n];if(o!=null){const u=Me(o,"default");if(u&&r===void 0){const y=o.default;if(o.type!==Function&&!o.skipFactory&&Ce(y)){const{propsDefaults:p}=i;n in p?r=p[n]:(wr(i),r=p[n]=y.call(null,t),Xn())}else r=y}o[0]&&(a&&!u?r=!1:o[1]&&(r===""||r===Jn(n))&&(r=!0))}return r}function Cc(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const a=e.props,o={},u=[];let y=!1;if(!Ce(e)){const m=v=>{y=!0;const[h,E]=Cc(v,t,!0);at(o,h),E&&u.push(...E)};!n&&t.mixins.length&&t.mixins.forEach(m),e.extends&&m(e.extends),e.mixins&&e.mixins.forEach(m)}if(!a&&!y)return Ye(e)&&r.set(e,pr),pr;if(ge(a))for(let m=0;m<a.length;m++){const v=dn(a[m]);ys(v)&&(o[v]=Qe)}else if(a)for(const m in a){const v=dn(m);if(ys(v)){const h=a[m],E=o[v]=ge(h)||Ce(h)?{type:h}:at({},h);if(E){const k=bs(Boolean,E.type),b=bs(String,E.type);E[0]=k>-1,E[1]=b<0||k<b,(k>-1||Me(E,"default"))&&u.push(v)}}}const p=[o,u];return Ye(e)&&r.set(e,p),p}function ys(e){return e[0]!=="$"}function As(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function gs(e,t){return As(e)===As(t)}function bs(e,t){return ge(t)?t.findIndex(n=>gs(n,e)):Ce(t)&&gs(t,e)?0:-1}const kc=e=>e[0]==="_"||e==="$stable",dl=e=>ge(e)?e.map(rn):[rn(e)],Yh=(e,t,n)=>{if(t._n)return t;const r=Fe((...i)=>dl(t(...i)),n);return r._c=!1,r},Bc=(e,t,n)=>{const r=e._ctx;for(const i in e){if(kc(i))continue;const a=e[i];if(Ce(a))t[i]=Yh(i,a,r);else if(a!=null){const o=dl(a);t[i]=()=>o}}},Ic=(e,t)=>{const n=dl(t);e.slots.default=()=>n},Kh=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=De(t),pa(t,"_",n)):Bc(t,e.slots={})}else e.slots={},t&&Ic(e,t);pa(e.slots,za,1)},Xh=(e,t,n)=>{const{vnode:r,slots:i}=e;let a=!0,o=Qe;if(r.shapeFlag&32){const u=t._;u?n&&u===1?a=!1:(at(i,t),!n&&u===1&&delete i._):(a=!t.$stable,Bc(t,i)),o=t}else t&&(Ic(e,t),o={default:1});if(a)for(const u in i)!kc(u)&&!(u in o)&&delete i[u]};function Lo(e,t,n,r,i=!1){if(ge(e)){e.forEach((h,E)=>Lo(h,t&&(ge(t)?t[E]:t),n,r,i));return}if(di(r)&&!i)return;const a=r.shapeFlag&4?Ra(r.component)||r.component.proxy:r.el,o=i?null:a,{i:u,r:y}=e,p=t&&t.r,m=u.refs===Qe?u.refs={}:u.refs,v=u.setupState;if(p!=null&&p!==y&&(nt(p)?(m[p]=null,Me(v,p)&&(v[p]=null)):bt(p)&&(p.value=null)),Ce(y))Dn(y,u,12,[o,m]);else{const h=nt(y),E=bt(y);if(h||E){const k=()=>{if(e.f){const b=h?Me(v,y)?v[y]:m[y]:y.value;i?ge(b)&&Ho(b,a):ge(b)?b.includes(a)||b.push(a):h?(m[y]=[a],Me(v,y)&&(v[y]=m[y])):(y.value=[a],e.k&&(m[e.k]=y.value))}else h?(m[y]=o,Me(v,y)&&(v[y]=o)):E&&(y.value=o,e.k&&(m[e.k]=o))};o?(k.id=-1,Tt(k,n)):k()}}}const Tt=xh;function Zh(e){return Gh(e)}function Gh(e,t){const n=wo();n.__VUE__=!0;const{insert:r,remove:i,patchProp:a,createElement:o,createText:u,createComment:y,setText:p,setElementText:m,parentNode:v,nextSibling:h,setScopeId:E=Zt,insertStaticContent:k}=e,b=(C,B,O,P=null,q=null,Z=null,oe=!1,K=null,ne=!!B.dynamicChildren)=>{if(C===B)return;C&&!Wn(C,B)&&(P=wt(C),_e(C,q,Z,!0),C=null),B.patchFlag===-2&&(ne=!1,B.dynamicChildren=null);const{type:U,ref:me,shapeFlag:pe}=B;switch(U){case Na:I(C,B,O,P);break;case Vt:D(C,B,O,P);break;case ao:C==null&&_(B,O,P,oe);break;case pt:le(C,B,O,P,q,Z,oe,K,ne);break;default:pe&1?Q(C,B,O,P,q,Z,oe,K,ne):pe&6?J(C,B,O,P,q,Z,oe,K,ne):(pe&64||pe&128)&&U.process(C,B,O,P,q,Z,oe,K,ne,$e)}me!=null&&q&&Lo(me,C&&C.ref,Z,B||C,!B)},I=(C,B,O,P)=>{if(C==null)r(B.el=u(B.children),O,P);else{const q=B.el=C.el;B.children!==C.children&&p(q,B.children)}},D=(C,B,O,P)=>{C==null?r(B.el=y(B.children||""),O,P):B.el=C.el},_=(C,B,O,P)=>{[C.el,C.anchor]=k(C.children,B,O,P,C.el,C.anchor)},F=({el:C,anchor:B},O,P)=>{let q;for(;C&&C!==B;)q=h(C),r(C,O,P),C=q;r(B,O,P)},T=({el:C,anchor:B})=>{let O;for(;C&&C!==B;)O=h(C),i(C),C=O;i(B)},Q=(C,B,O,P,q,Z,oe,K,ne)=>{oe=oe||B.type==="svg",C==null?M(B,O,P,q,Z,oe,K,ne):W(C,B,q,Z,oe,K,ne)},M=(C,B,O,P,q,Z,oe,K)=>{let ne,U;const{type:me,props:pe,shapeFlag:ye,transition:be,dirs:ke}=C;if(ne=C.el=o(C.type,Z,pe&&pe.is,pe),ye&8?m(ne,C.children):ye&16&&$(C.children,ne,null,P,q,Z&&me!=="foreignObject",oe,K),ke&&Pn(C,null,P,"created"),j(ne,C,C.scopeId,oe,P),pe){for(const ze in pe)ze!=="value"&&!ea(ze)&&a(ne,ze,null,pe[ze],Z,C.children,P,q,He);"value"in pe&&a(ne,"value",null,pe.value),(U=pe.onVnodeBeforeMount)&&en(U,P,C)}ke&&Pn(C,null,P,"beforeMount");const Re=(!q||q&&!q.pendingBranch)&&be&&!be.persisted;Re&&be.beforeEnter(ne),r(ne,B,O),((U=pe&&pe.onVnodeMounted)||Re||ke)&&Tt(()=>{U&&en(U,P,C),Re&&be.enter(ne),ke&&Pn(C,null,P,"mounted")},q)},j=(C,B,O,P,q)=>{if(O&&E(C,O),P)for(let Z=0;Z<P.length;Z++)E(C,P[Z]);if(q){let Z=q.subTree;if(B===Z){const oe=q.vnode;j(C,oe,oe.scopeId,oe.slotScopeIds,q.parent)}}},$=(C,B,O,P,q,Z,oe,K,ne=0)=>{for(let U=ne;U<C.length;U++){const me=C[U]=K?Ln(C[U]):rn(C[U]);b(null,me,B,O,P,q,Z,oe,K)}},W=(C,B,O,P,q,Z,oe)=>{const K=B.el=C.el;let{patchFlag:ne,dynamicChildren:U,dirs:me}=B;ne|=C.patchFlag&16;const pe=C.props||Qe,ye=B.props||Qe;let be;O&&qn(O,!1),(be=ye.onVnodeBeforeUpdate)&&en(be,O,B,C),me&&Pn(B,C,O,"beforeUpdate"),O&&qn(O,!0);const ke=q&&B.type!=="foreignObject";if(U?z(C.dynamicChildren,U,K,O,P,ke,Z):oe||ae(C,B,K,null,O,P,ke,Z,!1),ne>0){if(ne&16)Te(K,B,pe,ye,O,P,q);else if(ne&2&&pe.class!==ye.class&&a(K,"class",null,ye.class,q),ne&4&&a(K,"style",pe.style,ye.style,q),ne&8){const Re=B.dynamicProps;for(let ze=0;ze<Re.length;ze++){const Ke=Re[ze],Lt=pe[Ke],un=ye[Ke];(un!==Lt||Ke==="value")&&a(K,Ke,Lt,un,q,C.children,O,P,He)}}ne&1&&C.children!==B.children&&m(K,B.children)}else!oe&&U==null&&Te(K,B,pe,ye,O,P,q);((be=ye.onVnodeUpdated)||me)&&Tt(()=>{be&&en(be,O,B,C),me&&Pn(B,C,O,"updated")},P)},z=(C,B,O,P,q,Z,oe)=>{for(let K=0;K<B.length;K++){const ne=C[K],U=B[K],me=ne.el&&(ne.type===pt||!Wn(ne,U)||ne.shapeFlag&70)?v(ne.el):O;b(ne,U,me,null,P,q,Z,oe,!0)}},Te=(C,B,O,P,q,Z,oe)=>{if(O!==P){if(O!==Qe)for(const K in O)!ea(K)&&!(K in P)&&a(C,K,O[K],null,oe,B.children,q,Z,He);for(const K in P){if(ea(K))continue;const ne=P[K],U=O[K];ne!==U&&K!=="value"&&a(C,K,U,ne,oe,B.children,q,Z,He)}"value"in P&&a(C,"value",O.value,P.value)}},le=(C,B,O,P,q,Z,oe,K,ne)=>{const U=B.el=C?C.el:u(""),me=B.anchor=C?C.anchor:u("");let{patchFlag:pe,dynamicChildren:ye,slotScopeIds:be}=B;be&&(K=K?K.concat(be):be),C==null?(r(U,O,P),r(me,O,P),$(B.children,O,me,q,Z,oe,K,ne)):pe>0&&pe&64&&ye&&C.dynamicChildren?(z(C.dynamicChildren,ye,O,q,Z,oe,K),(B.key!=null||q&&B===q.subTree)&&cl(C,B,!0)):ae(C,B,O,me,q,Z,oe,K,ne)},J=(C,B,O,P,q,Z,oe,K,ne)=>{B.slotScopeIds=K,C==null?B.shapeFlag&512?q.ctx.activate(B,O,P,oe,ne):X(B,O,P,q,Z,oe,ne):te(C,B,ne)},X=(C,B,O,P,q,Z,oe)=>{const K=C.component=sm(C,P,q);if(Ma(C)&&(K.ctx.renderer=$e),dm(K),K.asyncDep){if(q&&q.registerDep(K,ue),!C.el){const ne=K.subTree=R(Vt);D(null,ne,B,O)}return}ue(K,C,B,O,q,Z,oe)},te=(C,B,O)=>{const P=B.component=C.component;if(bh(C,B,O))if(P.asyncDep&&!P.asyncResolved){H(P,B,O);return}else P.next=B,fh(P.update),P.update();else B.el=C.el,P.vnode=B},ue=(C,B,O,P,q,Z,oe)=>{const K=()=>{if(C.isMounted){let{next:me,bu:pe,u:ye,parent:be,vnode:ke}=C,Re=me,ze;qn(C,!1),me?(me.el=ke.el,H(C,me,oe)):me=ke,pe&&to(pe),(ze=me.props&&me.props.onVnodeBeforeUpdate)&&en(ze,be,me,ke),qn(C,!0);const Ke=no(C),Lt=C.subTree;C.subTree=Ke,b(Lt,Ke,v(Lt.el),wt(Lt),C,q,Z),me.el=Ke.el,Re===null&&vh(C,Ke.el),ye&&Tt(ye,q),(ze=me.props&&me.props.onVnodeUpdated)&&Tt(()=>en(ze,be,me,ke),q)}else{let me;const{el:pe,props:ye}=B,{bm:be,m:ke,parent:Re}=C,ze=di(B);if(qn(C,!1),be&&to(be),!ze&&(me=ye&&ye.onVnodeBeforeMount)&&en(me,Re,B),qn(C,!0),pe&&cn){const Ke=()=>{C.subTree=no(C),cn(pe,C.subTree,C,q,null)};ze?B.type.__asyncLoader().then(()=>!C.isUnmounted&&Ke()):Ke()}else{const Ke=C.subTree=no(C);b(null,Ke,O,P,C,q,Z),B.el=Ke.el}if(ke&&Tt(ke,q),!ze&&(me=ye&&ye.onVnodeMounted)){const Ke=B;Tt(()=>en(me,Re,Ke),q)}(B.shapeFlag&256||Re&&di(Re.vnode)&&Re.vnode.shapeFlag&256)&&C.a&&Tt(C.a,q),C.isMounted=!0,B=O=P=null}},ne=C.effect=new Xo(K,()=>al(U),C.scope),U=C.update=()=>ne.run();U.id=C.uid,qn(C,!0),U()},H=(C,B,O)=>{B.component=C;const P=C.vnode.props;C.vnode=B,C.next=null,Qh(C,B.props,P,O),Xh(C,B.children,O),kr(),ss(),Br()},ae=(C,B,O,P,q,Z,oe,K,ne=!1)=>{const U=C&&C.children,me=C?C.shapeFlag:0,pe=B.children,{patchFlag:ye,shapeFlag:be}=B;if(ye>0){if(ye&128){Le(U,pe,O,P,q,Z,oe,K,ne);return}else if(ye&256){V(U,pe,O,P,q,Z,oe,K,ne);return}}be&8?(me&16&&He(U,q,Z),pe!==U&&m(O,pe)):me&16?be&16?Le(U,pe,O,P,q,Z,oe,K,ne):He(U,q,Z,!0):(me&8&&m(O,""),be&16&&$(pe,O,P,q,Z,oe,K,ne))},V=(C,B,O,P,q,Z,oe,K,ne)=>{C=C||pr,B=B||pr;const U=C.length,me=B.length,pe=Math.min(U,me);let ye;for(ye=0;ye<pe;ye++){const be=B[ye]=ne?Ln(B[ye]):rn(B[ye]);b(C[ye],be,O,null,q,Z,oe,K,ne)}U>me?He(C,q,Z,!0,!1,pe):$(B,O,P,q,Z,oe,K,ne,pe)},Le=(C,B,O,P,q,Z,oe,K,ne)=>{let U=0;const me=B.length;let pe=C.length-1,ye=me-1;for(;U<=pe&&U<=ye;){const be=C[U],ke=B[U]=ne?Ln(B[U]):rn(B[U]);if(Wn(be,ke))b(be,ke,O,null,q,Z,oe,K,ne);else break;U++}for(;U<=pe&&U<=ye;){const be=C[pe],ke=B[ye]=ne?Ln(B[ye]):rn(B[ye]);if(Wn(be,ke))b(be,ke,O,null,q,Z,oe,K,ne);else break;pe--,ye--}if(U>pe){if(U<=ye){const be=ye+1,ke=be<me?B[be].el:P;for(;U<=ye;)b(null,B[U]=ne?Ln(B[U]):rn(B[U]),O,ke,q,Z,oe,K,ne),U++}}else if(U>ye)for(;U<=pe;)_e(C[U],q,Z,!0),U++;else{const be=U,ke=U,Re=new Map;for(U=ke;U<=ye;U++){const At=B[U]=ne?Ln(B[U]):rn(B[U]);At.key!=null&&Re.set(At.key,U)}let ze,Ke=0;const Lt=ye-ke+1;let un=!1,N=0;const Nt=new Array(Lt);for(U=0;U<Lt;U++)Nt[U]=0;for(U=be;U<=pe;U++){const At=C[U];if(Ke>=Lt){_e(At,q,Z,!0);continue}let Be;if(At.key!=null)Be=Re.get(At.key);else for(ze=ke;ze<=ye;ze++)if(Nt[ze-ke]===0&&Wn(At,B[ze])){Be=ze;break}Be===void 0?_e(At,q,Z,!0):(Nt[Be-ke]=U+1,Be>=N?N=Be:un=!0,b(At,B[Be],O,null,q,Z,oe,K,ne),Ke++)}const Tr=un?Jh(Nt):pr;for(ze=Tr.length-1,U=Lt-1;U>=0;U--){const At=ke+U,Be=B[At],_i=At+1<me?B[At+1].el:P;Nt[U]===0?b(null,Be,O,_i,q,Z,oe,K,ne):un&&(ze<0||U!==Tr[ze]?Oe(Be,O,_i,2):ze--)}}},Oe=(C,B,O,P,q=null)=>{const{el:Z,type:oe,transition:K,children:ne,shapeFlag:U}=C;if(U&6){Oe(C.component.subTree,B,O,P);return}if(U&128){C.suspense.move(B,O,P);return}if(U&64){oe.move(C,B,O,$e);return}if(oe===pt){r(Z,B,O);for(let pe=0;pe<ne.length;pe++)Oe(ne[pe],B,O,P);r(C.anchor,B,O);return}if(oe===ao){F(C,B,O);return}if(P!==2&&U&1&&K)if(P===0)K.beforeEnter(Z),r(Z,B,O),Tt(()=>K.enter(Z),q);else{const{leave:pe,delayLeave:ye,afterLeave:be}=K,ke=()=>r(Z,B,O),Re=()=>{pe(Z,()=>{ke(),be&&be()})};ye?ye(Z,ke,Re):Re()}else r(Z,B,O)},_e=(C,B,O,P=!1,q=!1)=>{const{type:Z,props:oe,ref:K,children:ne,dynamicChildren:U,shapeFlag:me,patchFlag:pe,dirs:ye}=C;if(K!=null&&Lo(K,null,O,C,!0),me&256){B.ctx.deactivate(C);return}const be=me&1&&ye,ke=!di(C);let Re;if(ke&&(Re=oe&&oe.onVnodeBeforeUnmount)&&en(Re,B,C),me&6)vt(C.component,O,P);else{if(me&128){C.suspense.unmount(O,P);return}be&&Pn(C,null,B,"beforeUnmount"),me&64?C.type.remove(C,B,O,q,$e,P):U&&(Z!==pt||pe>0&&pe&64)?He(U,B,O,!1,!0):(Z===pt&&pe&384||!q&&me&16)&&He(ne,B,O),P&&et(C)}(ke&&(Re=oe&&oe.onVnodeUnmounted)||be)&&Tt(()=>{Re&&en(Re,B,C),be&&Pn(C,null,B,"unmounted")},O)},et=C=>{const{type:B,el:O,anchor:P,transition:q}=C;if(B===pt){It(O,P);return}if(B===ao){T(C);return}const Z=()=>{i(O),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(C.shapeFlag&1&&q&&!q.persisted){const{leave:oe,delayLeave:K}=q,ne=()=>oe(O,Z);K?K(C.el,Z,ne):ne()}else Z()},It=(C,B)=>{let O;for(;C!==B;)O=h(C),i(C),C=O;i(B)},vt=(C,B,O)=>{const{bum:P,scope:q,update:Z,subTree:oe,um:K}=C;P&&to(P),q.stop(),Z&&(Z.active=!1,_e(oe,C,B,O)),K&&Tt(K,B),Tt(()=>{C.isUnmounted=!0},B),B&&B.pendingBranch&&!B.isUnmounted&&C.asyncDep&&!C.asyncResolved&&C.suspenseId===B.pendingId&&(B.deps--,B.deps===0&&B.resolve())},He=(C,B,O,P=!1,q=!1,Z=0)=>{for(let oe=Z;oe<C.length;oe++)_e(C[oe],B,O,P,q)},wt=C=>C.shapeFlag&6?wt(C.component.subTree):C.shapeFlag&128?C.suspense.next():h(C.anchor||C.el),yt=(C,B,O)=>{C==null?B._vnode&&_e(B._vnode,null,null,!0):b(B._vnode||null,C,B,null,null,null,O),ss(),ic(),B._vnode=C},$e={p:b,um:_e,m:Oe,r:et,mt:X,mc:$,pc:ae,pbc:z,n:wt,o:e};let xt,cn;return t&&([xt,cn]=t($e)),{render:yt,hydrate:xt,createApp:jh(yt,xt)}}function qn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function cl(e,t,n=!1){const r=e.children,i=t.children;if(ge(r)&&ge(i))for(let a=0;a<r.length;a++){const o=r[a];let u=i[a];u.shapeFlag&1&&!u.dynamicChildren&&((u.patchFlag<=0||u.patchFlag===32)&&(u=i[a]=Ln(i[a]),u.el=o.el),n||cl(o,u)),u.type===Na&&(u.el=o.el)}}function Jh(e){const t=e.slice(),n=[0];let r,i,a,o,u;const y=e.length;for(r=0;r<y;r++){const p=e[r];if(p!==0){if(i=n[n.length-1],e[i]<p){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)u=a+o>>1,e[n[u]]<p?a=u+1:o=u;p<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}const em=e=>e.__isTeleport,ui=e=>e&&(e.disabled||e.disabled===""),vs=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Oo=(e,t)=>{const n=e&&e.to;return nt(n)?t?t(n):null:n},tm={__isTeleport:!0,process(e,t,n,r,i,a,o,u,y,p){const{mc:m,pc:v,pbc:h,o:{insert:E,querySelector:k,createText:b,createComment:I}}=p,D=ui(t.props);let{shapeFlag:_,children:F,dynamicChildren:T}=t;if(e==null){const Q=t.el=b(""),M=t.anchor=b("");E(Q,n,r),E(M,n,r);const j=t.target=Oo(t.props,k),$=t.targetAnchor=b("");j&&(E($,j),o=o||vs(j));const W=(z,Te)=>{_&16&&m(F,z,Te,i,a,o,u,y)};D?W(n,M):j&&W(j,$)}else{t.el=e.el;const Q=t.anchor=e.anchor,M=t.target=e.target,j=t.targetAnchor=e.targetAnchor,$=ui(e.props),W=$?n:M,z=$?Q:j;if(o=o||vs(M),T?(h(e.dynamicChildren,T,W,i,a,o,u),cl(e,t,!0)):y||v(e,t,W,z,i,a,o,u,!1),D)$||Wi(t,n,Q,p,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const Te=t.target=Oo(t.props,k);Te&&Wi(t,Te,null,p,0)}else $&&Wi(t,M,j,p,1)}Sc(t)},remove(e,t,n,r,{um:i,o:{remove:a}},o){const{shapeFlag:u,children:y,anchor:p,targetAnchor:m,target:v,props:h}=e;if(v&&a(m),(o||!ui(h))&&(a(p),u&16))for(let E=0;E<y.length;E++){const k=y[E];i(k,t,n,!0,!!k.dynamicChildren)}},move:Wi,hydrate:nm};function Wi(e,t,n,{o:{insert:r},m:i},a=2){a===0&&r(e.targetAnchor,t,n);const{el:o,anchor:u,shapeFlag:y,children:p,props:m}=e,v=a===2;if(v&&r(o,t,n),(!v||ui(m))&&y&16)for(let h=0;h<p.length;h++)i(p[h],t,n,2);v&&r(u,t,n)}function nm(e,t,n,r,i,a,{o:{nextSibling:o,parentNode:u,querySelector:y}},p){const m=t.target=Oo(t.props,y);if(m){const v=m._lpa||m.firstChild;if(t.shapeFlag&16)if(ui(t.props))t.anchor=p(o(e),t,u(e),n,r,i,a),t.targetAnchor=v;else{t.anchor=o(e);let h=v;for(;h;)if(h=o(h),h&&h.nodeType===8&&h.data==="teleport anchor"){t.targetAnchor=h,m._lpa=t.targetAnchor&&o(t.targetAnchor);break}p(v,t,m,n,r,i,a)}Sc(t)}return t.anchor&&o(t.anchor)}const ul=tm;function Sc(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const pt=Symbol.for("v-fgt"),Na=Symbol.for("v-txt"),Vt=Symbol.for("v-cmt"),ao=Symbol.for("v-stc"),pi=[];let Yt=null;function Y(e=!1){pi.push(Yt=e?null:[])}function rm(){pi.pop(),Yt=pi[pi.length-1]||null}let xi=1;function ws(e){xi+=e}function Tc(e){return e.dynamicChildren=xi>0?Yt||pr:null,rm(),xi>0&&Yt&&Yt.push(e),e}function de(e,t,n,r,i,a){return Tc(fe(e,t,n,r,i,a,!0))}function st(e,t,n,r,i){return Tc(R(e,t,n,r,i,!0))}function Aa(e){return e?e.__v_isVNode===!0:!1}function Wn(e,t){return e.type===t.type&&e.key===t.key}const za="__vInternal",_c=({key:e})=>e??null,ra=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?nt(e)||bt(e)||Ce(e)?{i:mt,r:e,k:t,f:!!n}:e:null);function fe(e,t=null,n=null,r=0,i=null,a=e===pt?0:1,o=!1,u=!1){const y={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&_c(t),ref:t&&ra(t),scopeId:lc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:mt};return u?(pl(y,n),a&128&&e.normalize(y)):n&&(y.shapeFlag|=nt(n)?8:16),xi>0&&!o&&Yt&&(y.patchFlag>0||a&6)&&y.patchFlag!==32&&Yt.push(y),y}const R=im;function im(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===gc)&&(e=Vt),Aa(e)){const u=Fn(e,t,!0);return n&&pl(u,n),xi>0&&!a&&Yt&&(u.shapeFlag&6?Yt[Yt.indexOf(e)]=u:Yt.push(u)),u.patchFlag|=-2,u}if(hm(e)&&(e=e.__vccOpts),t){t=am(t);let{class:u,style:y}=t;u&&!nt(u)&&(t.class=ce(u)),Ye(y)&&(Zd(y)&&!ge(y)&&(y=at({},y)),t.style=Ge(y))}const o=nt(e)?1:wh(e)?128:em(e)?64:Ye(e)?4:Ce(e)?2:0;return fe(e,t,n,r,i,o,a,!0)}function am(e){return e?Zd(e)||za in e?at({},e):e:null}function Fn(e,t,n=!1){const{props:r,ref:i,patchFlag:a,children:o}=e,u=t?Fa(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&_c(u),ref:t&&t.ref?n&&i?ge(i)?i.concat(ra(t)):[i,ra(t)]:ra(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==pt?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Fn(e.ssContent),ssFallback:e.ssFallback&&Fn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Nn(e=" ",t=0){return R(Na,null,e,t)}function Ee(e="",t=!1){return t?(Y(),st(Vt,null,e)):R(Vt,null,e)}function rn(e){return e==null||typeof e=="boolean"?R(Vt):ge(e)?R(pt,null,e.slice()):typeof e=="object"?Ln(e):R(Na,null,String(e))}function Ln(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Fn(e)}function pl(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(ge(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),pl(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(za in t)?t._ctx=mt:i===3&&mt&&(mt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Ce(t)?(t={default:t,_ctx:mt},n=32):(t=String(t),r&64?(n=16,t=[Nn(t)]):n=8);e.children=t,e.shapeFlag|=n}function Fa(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=ce([t.class,r.class]));else if(i==="style")t.style=Ge([t.style,r.style]);else if(Ba(i)){const a=t[i],o=r[i];o&&a!==o&&!(ge(a)&&a.includes(o))&&(t[i]=a?[].concat(a,o):o)}else i!==""&&(t[i]=r[i])}return t}function en(e,t,n,r=null){$t(e,t,7,[n,r])}const om=xc();let lm=0;function sm(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||om,a={uid:lm++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new _f(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cc(r,i),emitsOptions:oc(r,i),emit:null,emitted:null,propsDefaults:Qe,inheritAttrs:r.inheritAttrs,ctx:Qe,data:Qe,props:Qe,attrs:Qe,slots:Qe,refs:Qe,setupState:Qe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=yh.bind(null,a),e.ce&&e.ce(a),a}let ft=null;const ot=()=>ft||mt;let fl,ar,xs="__VUE_INSTANCE_SETTERS__";(ar=wo()[xs])||(ar=wo()[xs]=[]),ar.push(e=>ft=e),fl=e=>{ar.length>1?ar.forEach(t=>t(e)):ar[0](e)};const wr=e=>{fl(e),e.scope.on()},Xn=()=>{ft&&ft.scope.off(),fl(null)};function Lc(e){return e.vnode.shapeFlag&4}let Ei=!1;function dm(e,t=!1){Ei=t;const{props:n,children:r}=e.vnode,i=Lc(e);Hh(e,n,i,t),Kh(e,r);const a=i?cm(e,t):void 0;return Ei=!1,a}function cm(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Gd(new Proxy(e.ctx,Fh));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?pm(e):null;wr(e),kr();const a=Dn(r,e,0,[e.props,i]);if(Br(),Xn(),Nd(a)){if(a.then(Xn,Xn),t)return a.then(o=>{Es(e,o,t)}).catch(o=>{La(o,e,0)});e.asyncDep=a}else Es(e,a,t)}else Oc(e,t)}function Es(e,t,n){Ce(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ye(t)&&(e.setupState=tc(t)),Oc(e,n)}let Cs;function Oc(e,t,n){const r=e.type;if(!e.render){if(!t&&Cs&&!r.render){const i=r.template||sl(e).template;if(i){const{isCustomElement:a,compilerOptions:o}=e.appContext.config,{delimiters:u,compilerOptions:y}=r,p=at(at({isCustomElement:a,delimiters:u},o),y);r.render=Cs(i,p)}}e.render=r.render||Zt}wr(e),kr(),Rh(e),Br(),Xn()}function um(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return _t(e,"get","$attrs"),t[n]}}))}function pm(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return um(e)},slots:e.slots,emit:e.emit,expose:t}}function Ra(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(tc(Gd(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ci)return ci[n](e)},has(t,n){return n in t||n in ci}}))}function fm(e,t=!0){return Ce(e)?e.displayName||e.name:e.name||t&&e.__name}function hm(e){return Ce(e)&&"__vccOpts"in e}const mm=(e,t)=>ch(e,t,Ei);function je(e,t,n){const r=arguments.length;return r===2?Ye(t)&&!ge(t)?Aa(t)?R(e,null,[t]):R(e,t):R(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Aa(n)&&(n=[n]),R(e,t,n))}const ym=Symbol.for("v-scx"),Am=()=>na(ym),gm="3.3.2",bm="http://www.w3.org/2000/svg",Hn=typeof document<"u"?document:null,ks=Hn&&Hn.createElement("template"),wm={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?Hn.createElementNS(bm,e):Hn.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>Hn.createTextNode(e),createComment:e=>Hn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Hn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,a){const o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{ks.innerHTML=r?`<svg>${e}</svg>`:e;const u=ks.content;if(r){const y=u.firstChild;for(;y.firstChild;)u.appendChild(y.firstChild);u.removeChild(y)}t.insertBefore(u,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function xm(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Em(e,t,n){const r=e.style,i=nt(n);if(n&&!i){if(t&&!nt(t))for(const a in t)n[a]==null&&Mo(r,a,"");for(const a in n)Mo(r,a,n[a])}else{const a=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=a)}}const Bs=/\s*!important$/;function Mo(e,t,n){if(ge(n))n.forEach(r=>Mo(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Cm(e,t);Bs.test(n)?e.setProperty(Jn(r),n.replace(Bs,""),"important"):e[r]=n}}const Is=["Webkit","Moz","ms"],oo={};function Cm(e,t){const n=oo[t];if(n)return n;let r=dn(t);if(r!=="filter"&&r in e)return oo[t]=r;r=Ta(r);for(let i=0;i<Is.length;i++){const a=Is[i]+r;if(a in e)return oo[t]=a}return t}const Ss="http://www.w3.org/1999/xlink";function km(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ss,t.slice(6,t.length)):e.setAttributeNS(Ss,t,n);else{const a=Tf(t);n==null||a&&!Rd(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function Bm(e,t,n,r,i,a,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,i,a),e[t]=n??"";return}const u=e.tagName;if(t==="value"&&u!=="PROGRESS"&&!u.includes("-")){e._value=n;const p=u==="OPTION"?e.getAttribute("value"):e.value,m=n??"";p!==m&&(e.value=m),n==null&&e.removeAttribute(t);return}let y=!1;if(n===""||n==null){const p=typeof e[t];p==="boolean"?n=Rd(n):n==null&&p==="string"?(n="",y=!0):p==="number"&&(n=0,y=!0)}try{e[t]=n}catch{}y&&e.removeAttribute(t)}function Im(e,t,n,r){e.addEventListener(t,n,r)}function Sm(e,t,n,r){e.removeEventListener(t,n,r)}function Tm(e,t,n,r,i=null){const a=e._vei||(e._vei={}),o=a[t];if(r&&o)o.value=r;else{const[u,y]=_m(t);if(r){const p=a[t]=Mm(r,i);Im(e,u,p,y)}else o&&(Sm(e,u,o,y),a[t]=void 0)}}const Ts=/(?:Once|Passive|Capture)$/;function _m(e){let t;if(Ts.test(e)){t={};let r;for(;r=e.match(Ts);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Jn(e.slice(2)),t]}let lo=0;const Lm=Promise.resolve(),Om=()=>lo||(Lm.then(()=>lo=0),lo=Date.now());function Mm(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;$t(Dm(r,n.value),t,5,[r])};return n.value=e,n.attached=Om(),n}function Dm(e,t){if(ge(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const _s=/^on[a-z]/,Nm=(e,t,n,r,i=!1,a,o,u,y)=>{t==="class"?xm(e,r,i):t==="style"?Em(e,n,r):Ba(t)?Wo(t)||Tm(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):zm(e,t,r,i))?Bm(e,t,r,a,o,u,y):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),km(e,t,r,i))};function zm(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&_s.test(t)&&Ce(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||_s.test(t)&&nt(n)?!1:t in e}const Bn="transition",Jr="animation",Gt=(e,{slots:t})=>je(kh,Dc(e),t);Gt.displayName="Transition";const Mc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Fm=Gt.props=at({},uc,Mc),$n=(e,t=[])=>{ge(e)?e.forEach(n=>n(...t)):e&&e(...t)},Ls=e=>e?ge(e)?e.some(t=>t.length>1):e.length>1:!1;function Dc(e){const t={};for(const le in e)le in Mc||(t[le]=e[le]);if(e.css===!1)return t;const{name:n="v",type:r,duration:i,enterFromClass:a=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:u=`${n}-enter-to`,appearFromClass:y=a,appearActiveClass:p=o,appearToClass:m=u,leaveFromClass:v=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:E=`${n}-leave-to`}=e,k=Rm(i),b=k&&k[0],I=k&&k[1],{onBeforeEnter:D,onEnter:_,onEnterCancelled:F,onLeave:T,onLeaveCancelled:Q,onBeforeAppear:M=D,onAppear:j=_,onAppearCancelled:$=F}=t,W=(le,J,X)=>{_n(le,J?m:u),_n(le,J?p:o),X&&X()},z=(le,J)=>{le._isLeaving=!1,_n(le,v),_n(le,E),_n(le,h),J&&J()},Te=le=>(J,X)=>{const te=le?j:_,ue=()=>W(J,le,X);$n(te,[J,ue]),Os(()=>{_n(J,le?y:a),mn(J,le?m:u),Ls(te)||Ms(J,r,b,ue)})};return at(t,{onBeforeEnter(le){$n(D,[le]),mn(le,a),mn(le,o)},onBeforeAppear(le){$n(M,[le]),mn(le,y),mn(le,p)},onEnter:Te(!1),onAppear:Te(!0),onLeave(le,J){le._isLeaving=!0;const X=()=>z(le,J);mn(le,v),zc(),mn(le,h),Os(()=>{le._isLeaving&&(_n(le,v),mn(le,E),Ls(T)||Ms(le,r,I,X))}),$n(T,[le,X])},onEnterCancelled(le){W(le,!1),$n(F,[le])},onAppearCancelled(le){W(le,!0),$n($,[le])},onLeaveCancelled(le){z(le),$n(Q,[le])}})}function Rm(e){if(e==null)return null;if(Ye(e))return[so(e.enter),so(e.leave)];{const t=so(e);return[t,t]}}function so(e){return Ef(e)}function mn(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function _n(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Os(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Pm=0;function Ms(e,t,n,r){const i=e._endId=++Pm,a=()=>{i===e._endId&&r()};if(n)return setTimeout(a,n);const{type:o,timeout:u,propCount:y}=Nc(e,t);if(!o)return r();const p=o+"end";let m=0;const v=()=>{e.removeEventListener(p,h),a()},h=E=>{E.target===e&&++m>=y&&v()};setTimeout(()=>{m<y&&v()},u+1),e.addEventListener(p,h)}function Nc(e,t){const n=window.getComputedStyle(e),r=k=>(n[k]||"").split(", "),i=r(`${Bn}Delay`),a=r(`${Bn}Duration`),o=Ds(i,a),u=r(`${Jr}Delay`),y=r(`${Jr}Duration`),p=Ds(u,y);let m=null,v=0,h=0;t===Bn?o>0&&(m=Bn,v=o,h=a.length):t===Jr?p>0&&(m=Jr,v=p,h=y.length):(v=Math.max(o,p),m=v>0?o>p?Bn:Jr:null,h=m?m===Bn?a.length:y.length:0);const E=m===Bn&&/\b(transform|all)(,|$)/.test(r(`${Bn}Property`).toString());return{type:m,timeout:v,propCount:h,hasTransform:E}}function Ds(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Ns(n)+Ns(e[r])))}function Ns(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function zc(){return document.body.offsetHeight}const Fc=new WeakMap,Rc=new WeakMap,Pc={name:"TransitionGroup",props:at({},Fm,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=ot(),r=cc();let i,a;return mc(()=>{if(!i.length)return;const o=e.moveClass||`${e.name||"v"}-move`;if(!Wm(i[0].el,n.vnode.el,o))return;i.forEach(Vm),i.forEach(Um);const u=i.filter(jm);zc(),u.forEach(y=>{const p=y.el,m=p.style;mn(p,o),m.transform=m.webkitTransform=m.transitionDuration="";const v=p._moveCb=h=>{h&&h.target!==p||(!h||/transform$/.test(h.propertyName))&&(p.removeEventListener("transitionend",v),p._moveCb=null,_n(p,o))};p.addEventListener("transitionend",v)})}),()=>{const o=De(e),u=Dc(o);let y=o.tag||pt;i=a,a=t.default?ol(t.default()):[];for(let p=0;p<a.length;p++){const m=a[p];m.key!=null&&wi(m,vi(m,u,r,n))}if(i)for(let p=0;p<i.length;p++){const m=i[p];wi(m,vi(m,u,r,n)),Fc.set(m,m.el.getBoundingClientRect())}return R(y,null,a)}}},qm=e=>delete e.mode;Pc.props;const $m=Pc;function Vm(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function Um(e){Rc.set(e,e.el.getBoundingClientRect())}function jm(e){const t=Fc.get(e),n=Rc.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const a=e.el.style;return a.transform=a.webkitTransform=`translate(${r}px,${i}px)`,a.transitionDuration="0s",e}}function Wm(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach(o=>{o.split(/\s+/).forEach(u=>u&&r.classList.remove(u))}),n.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const i=t.nodeType===1?t:t.parentNode;i.appendChild(r);const{hasTransform:a}=Nc(r);return i.removeChild(r),a}const Hm=["ctrl","shift","alt","meta"],Qm={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Hm.some(n=>e[`${n}Key`]&&!t.includes(n))},ht=(e,t)=>(n,...r)=>{for(let i=0;i<t.length;i++){const a=Qm[t[i]];if(a&&a(n,t))return}return e(n,...r)},Ym={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Do=(e,t)=>n=>{if(!("key"in n))return;const r=Jn(n.key);if(t.some(i=>i===r||Ym[i]===r))return e(n)},Kt={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):ei(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),ei(e,!0),r.enter(e)):r.leave(e,()=>{ei(e,!1)}):ei(e,t))},beforeUnmount(e,{value:t}){ei(e,t)}};function ei(e,t){e.style.display=t?e._vod:"none"}const Km=at({patchProp:Nm},wm);let zs;function Xm(){return zs||(zs=Zh(Km))}const Sr=(...e)=>{const t=Xm().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=Zm(r);if(!i)return;const a=t._component;!Ce(a)&&!a.render&&!a.template&&(a.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function Zm(e){return nt(e)?document.querySelector(e):e}const qe=typeof window<"u",An=function(){return qe&&document.addEventListener?function(e,t,n,r=!1){e&&t&&n&&e.addEventListener(t,n,r)}:function(e,t,n){e&&t&&n&&e.attachEvent("on"+t,n)}}(),gn=function(){return qe&&document.removeEventListener?function(e,t,n,r=!1){e&&t&&e.removeEventListener(t,n,r)}:function(e,t,n){e&&t&&e.detachEvent("on"+t,n)}}(),dt=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},Fs="ivu-icon",Gm={name:"Icon",props:{type:{type:String,default:""},size:[Number,String],color:String,custom:{type:String,default:""}},computed:{classes(){return[`${Fs}`,{[`${Fs}-${this.type}`]:this.type!=="",[`${this.custom}`]:this.custom!==""}]},styles(){let e={};return this.size&&(e["font-size"]=`${this.size}px`),this.color&&(e.color=this.color),e}}};function Jm(e,t,n,r,i,a){return Y(),de("i",{class:ce(a.classes),style:Ge(a.styles)},null,6)}const sn=dt(Gm,[["render",Jm]]);function Ze(e,t){for(let n=0;n<t.length;n++)if(e===t[n])return!0;return!1}let co;function ey(e){if(qe&&(e||co===void 0)){const t=document.createElement("div");t.style.width="100%",t.style.height="200px";const n=document.createElement("div"),r=n.style;r.position="absolute",r.top=0,r.left=0,r.pointerEvents="none",r.visibility="hidden",r.width="200px",r.height="150px",r.overflow="hidden",n.appendChild(t),document.body.appendChild(n);const i=t.offsetWidth;n.style.overflow="scroll";let a=t.offsetWidth;i===a&&(a=n.clientWidth),document.body.removeChild(n),co=i-a}return co}function ty(e){return{"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regExp","[object Undefined]":"undefined","[object Null]":"null","[object Object]":"object"}[Object.prototype.toString.call(e)]}function ga(e){const t=ty(e);let n;if(t==="array")n=[];else if(t==="object")n={};else return e;if(t==="array")for(let r=0;r<e.length;r++)n.push(ga(e[r]));else if(t==="object")for(let r in e)n[r]=ga(e[r]);return n}function Rs(e,t,n){typeof t=="string"?n=[t]:n=t;let r=e.$parent,i=r.$options.name;for(;r&&(!i||n.indexOf(i)<0);)r=r.$parent,r&&(i=r.$options.name);return r}function ny(){if(!qe)return;const e=t=>({media:t,matches:!1,on(){},off(){}});window.matchMedia=window.matchMedia||e}async function ry(e,t="unnamed"){if(!qe)return Promise.reject();try{const r=await(await fetch(e)).blob();if(!r)return Promise.reject();const i=URL.createObjectURL(r),a=document.createElement("a");return a.setAttribute("href",i),a.setAttribute("download",t),a.click(),URL.revokeObjectURL(i),Promise.resolve()}catch(n){return Promise.reject(n)}}function qc(e=32){const t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",n=t.length;let r="";for(let i=0;i<e;i++)r+=t.charAt(Math.floor(Math.random()*n));return r}const hl={props:{to:{type:[Object,String]},replace:{type:Boolean,default:!1},target:{type:String,validator(e){return Ze(e,["_blank","_self","_parent","_top"])},default:"_self"},append:{type:Boolean,required:!1,default:!1}},computed:{linkUrl(){if(typeof this.to!=="string")return null;if(this.to.includes("//"))return this.to;const t=this.$router;if(t){const n=this.$route,r=t.resolve(this.to,n,this.append);return r?r.href:this.to}return this.to}},methods:{handleOpenTo(){if(!qe)return;const e=this.$router;let t=this.to;if(e){const n=this.$route,r=e.resolve(this.to,n,this.append);t=r?r.href:this.to}typeof this.to!="string"&&window.open(t)},handleClick(e=!1){const t=this.$router;qe&&(e?this.handleOpenTo():t?typeof this.to=="string"&&this.to.includes("//")?window.location.href=this.to:this.replace?this.$router.replace(this.to,()=>{}):this.$router.push(this.to,()=>{}):window.location.href=this.to)},handleCheckClick(e,t=!1){if(this.to){if(this.target==="_blank")return this.handleOpenTo(),!1;e.preventDefault(),this.handleClick(t)}}}};var On=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $c(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}let Ii=0,ia=0;function Pa(){Ii++}function iy(){ia++}function ay(e){qe&&typeof window.viewuiplus<"u"&&("langs"in viewuiplus||(viewuiplus.langs={}),viewuiplus.langs[e.i.locale]=e)}const Vc={i:{locale:"zh-CN",select:{placeholder:"请选择",noMatch:"无匹配数据",loading:"加载中"},table:{noDataText:"暂无数据",noFilteredDataText:"暂无筛选结果",confirmFilter:"筛选",resetFilter:"重置",clearFilter:"全部",sumText:"合计"},datepicker:{selectDate:"选择日期",selectTime:"选择时间",startTime:"开始时间",endTime:"结束时间",clear:"清空",ok:"确定",datePanelLabel:"[yyyy年] [m月]",month:"月",month1:"1 月",month2:"2 月",month3:"3 月",month4:"4 月",month5:"5 月",month6:"6 月",month7:"7 月",month8:"8 月",month9:"9 月",month10:"10 月",month11:"11 月",month12:"12 月",year:"年",weekStartDay:"0",weeks:{sun:"日",mon:"一",tue:"二",wed:"三",thu:"四",fri:"五",sat:"六"},months:{m1:"1月",m2:"2月",m3:"3月",m4:"4月",m5:"5月",m6:"6月",m7:"7月",m8:"8月",m9:"9月",m10:"10月",m11:"11月",m12:"12月"}},transfer:{titles:{source:"源列表",target:"目的列表"},filterPlaceholder:"请输入搜索内容",notFoundText:"列表为空"},modal:{okText:"确定",cancelText:"取消"},poptip:{okText:"确定",cancelText:"取消"},page:{prev:"上一页",next:"下一页",total:"共",item:"条",items:"条",prev5:"向前 5 页",next5:"向后 5 页",page:"条/页",goto:"跳至",p:"页"},rate:{star:"星",stars:"星"},time:{before:"前",after:"后",just:"刚刚",seconds:"秒",minutes:"分钟",hours:"小时",days:"天"},tree:{emptyText:"暂无数据"},image:{zoomIn:"放大",zoomOut:"缩小",rotateLeft:"左旋转",rotateRight:"右旋转",fail:"失败",preview:"预览"}}};ay(Vc);const oy=/(%|)\{([0-9a-zA-Z_]+)\}/g;function ly(){function e(n,r){return Object.prototype.hasOwnProperty.call(n,r)}function t(n,...r){return r.length===1&&typeof r[0]=="object"&&(r=r[0]),(!r||!r.hasOwnProperty)&&(r={}),n===void 0?"":n.replace(oy,(i,a,o,u)=>{let y;return n[u-1]==="{"&&n[u+i.length]==="}"?o:(y=e(r,o)?r[o]:null,y??"")})}return t}const sy=ly();let dy=Vc,cy=function(){if(Reflect.has(this,"$t"))return this.$t(...arguments)};const uy=function(e,t){let n=cy.apply(this,arguments);if(n!=null)return n;const r=e.split(".");let i=dy;for(let a=0,o=r.length;a<o;a++){const u=r[a];if(n=i[u],a===o-1)return sy(n,t);if(!n)return"";i=n}return""},ml={methods:{t(...e){return uy.apply(this,e)}}},py={data(){return{globalConfig:{}}},created(){const e=ot();this.globalConfig=e.appContext.config.globalProperties.$VIEWUI}},Si={inject:{FormInstance:{default:""},FormItemInstance:{default:null}},computed:{itemDisabled(){let e=this.disabled;return!e&&this.FormInstance&&(e=this.FormInstance.disabled),e?!0:null}},methods:{handleFormItemChange(e,t){this.FormItemInstance&&(e==="blur"?this.FormItemInstance.formBlur(t):e==="change"&&this.FormItemInstance.formChange(t))}}},fy=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important
`,hy=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];let uo={},tn;function my(e,t=!1){if(!qe)return;const n=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(t&&uo[n])return uo[n];const r=window.getComputedStyle(e),i=r.getPropertyValue("box-sizing")||r.getPropertyValue("-moz-box-sizing")||r.getPropertyValue("-webkit-box-sizing"),a=parseFloat(r.getPropertyValue("padding-bottom"))+parseFloat(r.getPropertyValue("padding-top")),o=parseFloat(r.getPropertyValue("border-bottom-width"))+parseFloat(r.getPropertyValue("border-top-width")),y={sizingStyle:hy.map(p=>`${p}:${r.getPropertyValue(p)}`).join(";"),paddingSize:a,borderSize:o,boxSizing:i};return t&&n&&(uo[n]=y),y}function yy(e,t=null,n=null,r=!1){qe&&!tn&&(tn=document.createElement("textarea"),document.body.appendChild(tn)),e.getAttribute("wrap")?tn.setAttribute("wrap",e.getAttribute("wrap")):tn.removeAttribute("wrap");let{paddingSize:i,borderSize:a,boxSizing:o,sizingStyle:u}=my(e,r);tn.setAttribute("style",`${u};${fy}`),tn.value=e.value||e.placeholder||"";let y=Number.MIN_SAFE_INTEGER,p=Number.MAX_SAFE_INTEGER,m=tn.scrollHeight,v;if(o==="border-box"?m=m+a:o==="content-box"&&(m=m-i),t!==null||n!==null){tn.value=" ";let h=tn.scrollHeight-i;t!==null&&(y=h*t,o==="border-box"&&(y=y+i+a),m=Math.max(y,m)),n!==null&&(p=h*n,o==="border-box"&&(p=p+i+a),v=m>p?"":"hidden",m=Math.min(p,m))}return n||(v="hidden"),{height:`${m}px`,minHeight:`${y}px`,maxHeight:`${p}px`,overflowY:v}}const lt="ivu-input",Ay={name:"Input",mixins:[Si],emits:["on-enter","on-search","on-keydown","on-keypress","on-keyup","on-click","on-focus","on-blur","on-change","on-input-change","on-clear","update:modelValue"],props:{type:{validator(e){return Ze(e,["text","textarea","password","url","email","date","number","tel"])},default:"text"},modelValue:{type:[String,Number],default:""},size:{validator(e){return Ze(e,["small","large","default"])},default(){const e=ot().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.size===""?"default":e.$VIEWUI.size}},placeholder:{type:String,default:""},maxlength:{type:[String,Number]},disabled:{type:Boolean,default:!1},icon:String,autosize:{type:[Boolean,Object],default:!1},rows:{type:Number,default:2},readonly:{type:Boolean,default:!1},name:{type:String},number:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},spellcheck:{type:Boolean,default:!1},autocomplete:{type:String,default:"off"},clearable:{type:Boolean,default:!1},elementId:{type:String},wrap:{validator(e){return Ze(e,["hard","soft"])},default:"soft"},prefix:{type:String,default:""},suffix:{type:String,default:""},search:{type:Boolean,default:!1},enterButton:{type:[Boolean,String],default:!1},showWordLimit:{type:Boolean,default:!1},password:{type:Boolean,default:!1},border:{type:Boolean,default:!0}},data(){return{currentValue:this.modelValue,prefixCls:lt,slotReady:!1,textareaStyles:{},isOnComposition:!1,showPassword:!1,clearableIconOffset:0}},computed:{currentType(){let e=this.type;return e==="password"&&this.password&&this.showPassword&&(e="text"),e},prepend(){let e=!1;return this.type!=="textarea"&&(e=this.$slots.prepend!==void 0),e},append(){let e=!1;return this.type!=="textarea"&&(e=this.$slots.append!==void 0),e},showPrefix(){let e=!1;return this.type!=="textarea"&&(e=this.prefix!==""||this.$slots.prefix!==void 0),e},showSuffix(){let e=!1;return this.type!=="textarea"&&(e=this.suffix!==""||this.$slots.suffix!==void 0),e},wrapClasses(){return[`${lt}-wrapper`,{[`${lt}-wrapper-${this.size}`]:!!this.size,[`${lt}-type-${this.type}`]:this.type,[`${lt}-group`]:this.prepend||this.append||this.search&&this.enterButton,[`${lt}-group-${this.size}`]:(this.prepend||this.append||this.search&&this.enterButton)&&!!this.size,[`${lt}-group-with-prepend`]:this.prepend,[`${lt}-group-with-append`]:this.append||this.search&&this.enterButton,[`${lt}-hide-icon`]:this.append,[`${lt}-with-search`]:this.search&&this.enterButton,[`${lt}-wrapper-disabled`]:this.itemDisabled}]},inputClasses(){return[`${lt}`,{[`${lt}-${this.size}`]:!!this.size,[`${lt}-disabled`]:this.itemDisabled,[`${lt}-no-border`]:!this.border,[`${lt}-with-prefix`]:this.showPrefix,[`${lt}-with-suffix`]:this.showSuffix||this.search&&this.enterButton===!1}]},textareaClasses(){return[`${lt}`,{[`${lt}-disabled`]:this.itemDisabled,[`${lt}-no-border`]:!this.border}]},upperLimit(){return this.maxlength},textLength(){return typeof this.modelValue=="number"?String(this.modelValue).length:(this.modelValue||"").length},clearableStyles(){const e={};let t=this.clearableIconOffset;return t&&(e.transform=`translateX(-${t}px)`),e}},methods:{handleEnter(e){this.$emit("on-enter",e),this.search&&this.$emit("on-search",this.currentValue)},handleKeydown(e){this.$emit("on-keydown",e)},handleKeypress(e){this.$emit("on-keypress",e)},handleKeyup(e){this.$emit("on-keyup",e)},handleIconClick(e){this.$emit("on-click",e)},handleFocus(e){this.$emit("on-focus",e)},handleBlur(e){this.$emit("on-blur",e),Rs(this,["DatePicker","TimePicker","Cascader","Search"])||this.handleFormItemChange("blur",this.currentValue)},handleComposition(e){e.type==="compositionstart"&&(this.isOnComposition=!0),e.type==="compositionend"&&(this.isOnComposition=!1,this.handleInput(e))},handleInput(e){if(this.isOnComposition)return;let t=e.target.value;this.number&&t!==""&&(t=Number.isNaN(Number(t))?t:Number(t)),this.$emit("update:modelValue",t),this.setCurrentValue(t),this.$emit("on-change",e)},handleChange(e){this.$emit("on-input-change",e)},setCurrentValue(e){e!==this.currentValue&&(si(()=>{this.resizeTextarea()}),this.currentValue=e,Rs(this,["DatePicker","TimePicker","Cascader","Search"])||this.handleFormItemChange("change",e))},resizeTextarea(){const e=this.autosize;if(!e||this.type!=="textarea")return!1;const t=e.minRows,n=e.maxRows;this.textareaStyles=yy(this.$refs.textarea,t,n)},focus(e){const t=this.type==="textarea"?this.$refs.textarea:this.$refs.input;t.focus(e);const{cursor:n}=e||{};if(n){const r=t.value.length;switch(n){case"start":t.setSelectionRange(0,0);break;case"end":t.setSelectionRange(r,r);break;default:t.setSelectionRange(0,r)}}},blur(){this.type==="textarea"?this.$refs.textarea.blur():this.$refs.input.blur()},handleClear(){const e={target:{value:""}};this.$emit("update:modelValue",""),this.setCurrentValue(""),this.$emit("on-change",e),this.$emit("on-clear")},handleSearch(){if(this.itemDisabled)return!1;this.$refs.input.focus(),this.$emit("on-search",this.currentValue)},handleToggleShowPassword(){if(this.itemDisabled)return!1;this.showPassword=!this.showPassword,this.focus();const e=this.currentValue.length;setTimeout(()=>{this.$refs.input.setSelectionRange(e,e)},0)},handleCalcIconOffset(){const e=this.$el.querySelectorAll(".ivu-input-group-append")[0];e?this.clearableIconOffset=e.offsetWidth:this.clearableIconOffset=0}},watch:{modelValue(e){this.setCurrentValue(e)},type(){si(this.handleCalcIconOffset)}},mounted(){this.slotReady=!0,this.resizeTextarea(),this.handleCalcIconOffset()},updated(){si(this.handleCalcIconOffset)}},gy={key:4,class:"ivu-input-suffix"},by={key:5,class:"ivu-input-word-count"},vy={key:0,class:"ivu-icon ivu-icon-ios-eye-outline"},wy={key:1,class:"ivu-icon ivu-icon-ios-eye-off-outline"},xy=["id","autocomplete","spellcheck","type","placeholder","disabled","maxlength","readonly","name","value","number","autofocus"],Ey={key:0,class:"ivu-icon ivu-icon-ios-search"},Cy={key:9,class:"ivu-input-prefix"},ky=["id","wrap","autocomplete","spellcheck","placeholder","disabled","rows","maxlength","readonly","name","value","autofocus"],By={key:0,class:"ivu-input-word-count"};function Iy(e,t,n,r,i,a){return Y(),de("div",{class:ce(a.wrapClasses)},[n.type!=="textarea"?(Y(),de(pt,{key:0},[a.prepend?Qt((Y(),de("div",{key:0,class:ce([i.prefixCls+"-group-prepend"])},[Se(e.$slots,"prepend")],2)),[[Kt,i.slotReady]]):Ee("",!0),n.clearable&&i.currentValue&&!e.itemDisabled?(Y(),de("i",{key:1,class:ce(["ivu-icon",["ivu-icon-ios-close-circle",i.prefixCls+"-icon",i.prefixCls+"-icon-clear",i.prefixCls+"-icon-normal"]]),onClick:t[0]||(t[0]=(...o)=>a.handleClear&&a.handleClear(...o)),style:Ge(a.clearableStyles)},null,6)):n.icon?(Y(),de("i",{key:2,class:ce(["ivu-icon",["ivu-icon-"+n.icon,i.prefixCls+"-icon",i.prefixCls+"-icon-normal"]]),onClick:t[1]||(t[1]=(...o)=>a.handleIconClick&&a.handleIconClick(...o))},null,2)):n.search&&n.enterButton===!1?(Y(),de("i",{key:3,class:ce(["ivu-icon ivu-icon-ios-search",[i.prefixCls+"-icon",i.prefixCls+"-icon-normal",i.prefixCls+"-search-icon"]]),onClick:t[2]||(t[2]=(...o)=>a.handleSearch&&a.handleSearch(...o))},null,2)):a.showSuffix?(Y(),de("span",gy,[Se(e.$slots,"suffix",{},()=>[n.suffix?(Y(),de("i",{key:0,class:ce(["ivu-icon",["ivu-icon-"+n.suffix]])},null,2)):Ee("",!0)])])):n.showWordLimit?(Y(),de("span",by,Bt(a.textLength)+"/"+Bt(a.upperLimit),1)):n.password?(Y(),de("span",{key:6,class:"ivu-input-suffix",onClick:t[3]||(t[3]=(...o)=>a.handleToggleShowPassword&&a.handleToggleShowPassword(...o))},[i.showPassword?(Y(),de("i",vy)):(Y(),de("i",wy))])):Ee("",!0),R(Gt,{name:"fade"},{default:Fe(()=>[n.icon?Ee("",!0):(Y(),de("i",{key:0,class:ce(["ivu-icon ivu-icon-ios-loading ivu-load-loop",[i.prefixCls+"-icon",i.prefixCls+"-icon-validate"]])},null,2))]),_:1}),fe("input",{id:n.elementId,autocomplete:n.autocomplete,spellcheck:n.spellcheck,ref:"input",type:a.currentType,class:ce(a.inputClasses),placeholder:n.placeholder,disabled:e.itemDisabled,maxlength:n.maxlength,readonly:n.readonly,name:n.name,value:i.currentValue,number:n.number,autofocus:n.autofocus,onKeyup:[t[4]||(t[4]=Do((...o)=>a.handleEnter&&a.handleEnter(...o),["enter"])),t[5]||(t[5]=(...o)=>a.handleKeyup&&a.handleKeyup(...o))],onKeypress:t[6]||(t[6]=(...o)=>a.handleKeypress&&a.handleKeypress(...o)),onKeydown:t[7]||(t[7]=(...o)=>a.handleKeydown&&a.handleKeydown(...o)),onFocus:t[8]||(t[8]=(...o)=>a.handleFocus&&a.handleFocus(...o)),onBlur:t[9]||(t[9]=(...o)=>a.handleBlur&&a.handleBlur(...o)),onCompositionstart:t[10]||(t[10]=(...o)=>a.handleComposition&&a.handleComposition(...o)),onCompositionupdate:t[11]||(t[11]=(...o)=>a.handleComposition&&a.handleComposition(...o)),onCompositionend:t[12]||(t[12]=(...o)=>a.handleComposition&&a.handleComposition(...o)),onInput:t[13]||(t[13]=(...o)=>a.handleInput&&a.handleInput(...o)),onChange:t[14]||(t[14]=(...o)=>a.handleChange&&a.handleChange(...o))},null,42,xy),a.append?Qt((Y(),de("div",{key:7,class:ce([i.prefixCls+"-group-append"])},[Se(e.$slots,"append")],2)),[[Kt,i.slotReady]]):n.search&&n.enterButton?(Y(),de("div",{key:8,class:ce([i.prefixCls+"-group-append",i.prefixCls+"-search"]),onClick:t[15]||(t[15]=(...o)=>a.handleSearch&&a.handleSearch(...o))},[n.enterButton===!0?(Y(),de("i",Ey)):(Y(),de(pt,{key:1},[Nn(Bt(n.enterButton),1)],64))],2)):a.showPrefix?(Y(),de("span",Cy,[Se(e.$slots,"prefix",{},()=>[n.prefix?(Y(),de("i",{key:0,class:ce(["ivu-icon",["ivu-icon-"+n.prefix]])},null,2)):Ee("",!0)])])):Ee("",!0)],64)):(Y(),de(pt,{key:1},[fe("textarea",{id:n.elementId,wrap:n.wrap,autocomplete:n.autocomplete,spellcheck:n.spellcheck,ref:"textarea",class:ce(a.textareaClasses),style:Ge(i.textareaStyles),placeholder:n.placeholder,disabled:e.itemDisabled,rows:n.rows,maxlength:n.maxlength,readonly:n.readonly,name:n.name,value:i.currentValue,autofocus:n.autofocus,onKeyup:[t[16]||(t[16]=Do((...o)=>a.handleEnter&&a.handleEnter(...o),["enter"])),t[17]||(t[17]=(...o)=>a.handleKeyup&&a.handleKeyup(...o))],onKeypress:t[18]||(t[18]=(...o)=>a.handleKeypress&&a.handleKeypress(...o)),onKeydown:t[19]||(t[19]=(...o)=>a.handleKeydown&&a.handleKeydown(...o)),onFocus:t[20]||(t[20]=(...o)=>a.handleFocus&&a.handleFocus(...o)),onBlur:t[21]||(t[21]=(...o)=>a.handleBlur&&a.handleBlur(...o)),onCompositionstart:t[22]||(t[22]=(...o)=>a.handleComposition&&a.handleComposition(...o)),onCompositionupdate:t[23]||(t[23]=(...o)=>a.handleComposition&&a.handleComposition(...o)),onCompositionend:t[24]||(t[24]=(...o)=>a.handleComposition&&a.handleComposition(...o)),onInput:t[25]||(t[25]=(...o)=>a.handleInput&&a.handleInput(...o))},`
            `,46,ky),n.showWordLimit?(Y(),de("span",By,Bt(a.textLength)+"/"+Bt(a.upperLimit),1)):Ee("",!0)],64))],2)}const Uc=dt(Ay,[["render",Iy]]),In="ivu-btn",kt={name:"Button",mixins:[hl,Si],components:{Icon:sn},emits:["click"],props:{type:{validator(e){return Ze(e,["default","primary","dashed","text","info","success","warning","error"])},default:"default"},shape:{validator(e){return Ze(e,["circle","circle-outline"])}},size:{validator(e){return Ze(e,["small","large","default"])},default(){const e=ot().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.size===""?"default":e.$VIEWUI.size}},loading:Boolean,disabled:Boolean,htmlType:{default:"button",validator(e){return Ze(e,["button","submit","reset"])}},icon:{type:String,default:""},customIcon:{type:String,default:""},long:{type:Boolean,default:!1},ghost:{type:Boolean,default:!1}},computed:{showSlot(){return!!this.$slots.default},classes(){return[`${In}`,`${In}-${this.type}`,{[`${In}-long`]:this.long,[`${In}-${this.shape}`]:!!this.shape,[`${In}-${this.size}`]:this.size!=="default",[`${In}-loading`]:this.loading!=null&&this.loading,[`${In}-icon-only`]:!this.showSlot&&(!!this.icon||!!this.customIcon||this.loading),[`${In}-ghost`]:this.ghost}]},isHrefPattern(){const{to:e}=this;return!!e},tagName(){const{isHrefPattern:e}=this;return e?"a":"button"},tagProps(){const{isHrefPattern:e}=this;if(e){const{linkUrl:t,target:n}=this;return{href:t,target:n}}else{const{htmlType:t}=this;return{type:t}}}},methods:{handleClickLink(e){this.$emit("click",e);const t=e.ctrlKey||e.metaKey;this.handleCheckClick(e,t)}},render(){let e;this.tagName==="button"?e="button":this.tagName==="a"&&(e="a");let t=[];return this.loading&&t.push(je(sn,{class:"ivu-load-loop",type:"ios-loading"})),(this.icon||this.customIcon)&&!this.loading&&t.push(je(sn,{type:this.icon,custom:this.customIcon})),this.$slots.default&&t.push(je("span",{ref:"slot"},this.$slots.default())),je(e,{class:this.classes,disabled:this.itemDisabled,onClick:this.handleClickLink,...this.tagProps},t)}},Hi="ivu-btn-group",Sy={name:"ButtonGroup",props:{size:{validator(e){return Ze(e,["small","large","default"])},default(){const e=ot().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.size===""?"default":e.$VIEWUI.size}},shape:{validator(e){return Ze(e,["circle","circle-outline"])}},vertical:{type:Boolean,default:!1}},computed:{classes(){return[`${Hi}`,{[`${Hi}-${this.size}`]:!!this.size,[`${Hi}-${this.shape}`]:!!this.shape,[`${Hi}-vertical`]:this.vertical}]}}};function Ty(e,t,n,r,i,a){return Y(),de("div",{class:ce(a.classes)},[Se(e.$slots,"default")],2)}const ba=dt(Sy,[["render",Ty]]),ti="ivu-radio-group";let _y=0;const Ly=Date.now(),Oy=()=>`ivuRadioGroup_${Ly}_${_y++}`,My={name:"RadioGroup",mixins:[Si],emits:["update:modelValue","on-change"],provide(){return{RadioGroupInstance:this}},props:{modelValue:{type:[String,Number],default:""},size:{validator(e){return Ze(e,["small","large","default"])},default(){const e=ot().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.size===""?"default":e.$VIEWUI.size}},type:{validator(e){return Ze(e,["button"])}},vertical:{type:Boolean,default:!1},name:{type:String,default:Oy},buttonStyle:{validator(e){return Ze(e,["default","solid"])},default:"default"}},data(){return{currentValue:this.modelValue,children:[]}},computed:{classes(){return[`${ti}`,{[`${ti}-${this.size}`]:!!this.size,[`ivu-radio-${this.size}`]:!!this.size,[`${ti}-${this.type}`]:!!this.type,[`${ti}-button-${this.buttonStyle}`]:this.type==="button"&&this.buttonStyle!=="default",[`${ti}-vertical`]:this.vertical}]}},methods:{change(e){this.currentValue=e.value,this.$emit("update:modelValue",e.value),this.$emit("on-change",e.value),this.handleFormItemChange("change",e.value)}},watch:{modelValue(){this.currentValue!==this.modelValue&&(this.currentValue=this.modelValue)}}},Dy=["name"];function Ny(e,t,n,r,i,a){return Y(),de("div",{class:ce(a.classes),name:n.name},[Se(e.$slots,"default")],10,Dy)}const Ps=dt(My,[["render",Ny]]),Ot="ivu-radio",zy={name:"Radio",mixins:[Si],emits:["update:modelValue","on-change"],inject:{RadioGroupInstance:{default:null}},props:{modelValue:{type:[String,Number,Boolean],default:!1},trueValue:{type:[String,Number,Boolean],default:!0},falseValue:{type:[String,Number,Boolean],default:!1},label:{type:[String,Number]},disabled:{type:Boolean,default:!1},size:{validator(e){return Ze(e,["small","large","default"])},default(){const e=ot().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.size===""?"default":e.$VIEWUI.size}},name:{type:String},border:{type:Boolean,default:!1}},data(){return{groupName:this.name,parent:this.RadioGroupInstance,focusWrapper:!1,focusInner:!1}},computed:{wrapClasses(){return[`${Ot}-wrapper`,{[`${Ot}-group-item`]:this.group,[`${Ot}-wrapper-checked`]:this.currentValue,[`${Ot}-wrapper-disabled`]:this.itemDisabled,[`${Ot}-${this.size}`]:!!this.size,[`${Ot}-focus`]:this.focusWrapper,[`${Ot}-border`]:this.border}]},radioClasses(){return[`${Ot}`,{[`${Ot}-checked`]:this.currentValue,[`${Ot}-disabled`]:this.itemDisabled}]},innerClasses(){return[`${Ot}-inner`,{[`${Ot}-focus`]:this.focusInner}]},inputClasses(){return`${Ot}-input`},currentValue(){return this.RadioGroupInstance?this.RadioGroupInstance.currentValue===this.label:this.modelValue===this.trueValue},group(){return!!this.RadioGroupInstance}},mounted(){this.parent&&(this.name&&this.name!==this.parent.name?console.warn&&console.warn("[View UI] Name does not match Radio Group name."):this.groupName=this.parent.name)},methods:{change(e){if(this.itemDisabled)return!1;const n=e.target.checked?this.trueValue:this.falseValue;this.$emit("update:modelValue",n),this.group?this.label!==void 0&&this.parent.change({value:this.label,checked:this.modelValue}):(this.$emit("on-change",n),this.handleFormItemChange("change",n))},onBlur(){this.focusWrapper=!1,this.focusInner=!1},onFocus(){this.group&&this.parent.type==="button"?this.focusWrapper=!0:this.focusInner=!0}},watch:{modelValue(e){if(!(e===this.trueValue||e===this.falseValue))throw"Value should be trueValue or falseValue."}}},Fy=["disabled","checked","name"];function Ry(e,t,n,r,i,a){return Y(),de("label",{class:ce(a.wrapClasses)},[fe("span",{class:ce(a.radioClasses)},[fe("span",{class:ce(a.innerClasses)},null,2),fe("input",{type:"radio",class:ce(a.inputClasses),disabled:e.itemDisabled,checked:a.currentValue,name:i.groupName,onChange:t[0]||(t[0]=(...o)=>a.change&&a.change(...o)),onFocus:t[1]||(t[1]=(...o)=>a.onFocus&&a.onFocus(...o)),onBlur:t[2]||(t[2]=(...o)=>a.onBlur&&a.onBlur(...o))},null,42,Fy)],2),Se(e.$slots,"default",{},()=>[Nn(Bt(n.label),1)])],2)}const qs=dt(zy,[["render",Ry]]);var Py={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(On,function(){var n=1e3,r=6e4,i=36e5,a="millisecond",o="second",u="minute",y="hour",p="day",m="week",v="month",h="quarter",E="year",k="date",b="Invalid Date",I=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,D=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,_={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(J){var X=["th","st","nd","rd"],te=J%100;return"["+J+(X[(te-20)%10]||X[te]||X[0])+"]"}},F=function(J,X,te){var ue=String(J);return!ue||ue.length>=X?J:""+Array(X+1-ue.length).join(te)+J},T={s:F,z:function(J){var X=-J.utcOffset(),te=Math.abs(X),ue=Math.floor(te/60),H=te%60;return(X<=0?"+":"-")+F(ue,2,"0")+":"+F(H,2,"0")},m:function J(X,te){if(X.date()<te.date())return-J(te,X);var ue=12*(te.year()-X.year())+(te.month()-X.month()),H=X.clone().add(ue,v),ae=te-H<0,V=X.clone().add(ue+(ae?-1:1),v);return+(-(ue+(te-H)/(ae?H-V:V-H))||0)},a:function(J){return J<0?Math.ceil(J)||0:Math.floor(J)},p:function(J){return{M:v,y:E,w:m,d:p,D:k,h:y,m:u,s:o,ms:a,Q:h}[J]||String(J||"").toLowerCase().replace(/s$/,"")},u:function(J){return J===void 0}},Q="en",M={};M[Q]=_;var j=function(J){return J instanceof Te},$=function J(X,te,ue){var H;if(!X)return Q;if(typeof X=="string"){var ae=X.toLowerCase();M[ae]&&(H=ae),te&&(M[ae]=te,H=ae);var V=X.split("-");if(!H&&V.length>1)return J(V[0])}else{var Le=X.name;M[Le]=X,H=Le}return!ue&&H&&(Q=H),H||!ue&&Q},W=function(J,X){if(j(J))return J.clone();var te=typeof X=="object"?X:{};return te.date=J,te.args=arguments,new Te(te)},z=T;z.l=$,z.i=j,z.w=function(J,X){return W(J,{locale:X.$L,utc:X.$u,x:X.$x,$offset:X.$offset})};var Te=function(){function J(te){this.$L=$(te.locale,null,!0),this.parse(te)}var X=J.prototype;return X.parse=function(te){this.$d=function(ue){var H=ue.date,ae=ue.utc;if(H===null)return new Date(NaN);if(z.u(H))return new Date;if(H instanceof Date)return new Date(H);if(typeof H=="string"&&!/Z$/i.test(H)){var V=H.match(I);if(V){var Le=V[2]-1||0,Oe=(V[7]||"0").substring(0,3);return ae?new Date(Date.UTC(V[1],Le,V[3]||1,V[4]||0,V[5]||0,V[6]||0,Oe)):new Date(V[1],Le,V[3]||1,V[4]||0,V[5]||0,V[6]||0,Oe)}}return new Date(H)}(te),this.$x=te.x||{},this.init()},X.init=function(){var te=this.$d;this.$y=te.getFullYear(),this.$M=te.getMonth(),this.$D=te.getDate(),this.$W=te.getDay(),this.$H=te.getHours(),this.$m=te.getMinutes(),this.$s=te.getSeconds(),this.$ms=te.getMilliseconds()},X.$utils=function(){return z},X.isValid=function(){return this.$d.toString()!==b},X.isSame=function(te,ue){var H=W(te);return this.startOf(ue)<=H&&H<=this.endOf(ue)},X.isAfter=function(te,ue){return W(te)<this.startOf(ue)},X.isBefore=function(te,ue){return this.endOf(ue)<W(te)},X.$g=function(te,ue,H){return z.u(te)?this[ue]:this.set(H,te)},X.unix=function(){return Math.floor(this.valueOf()/1e3)},X.valueOf=function(){return this.$d.getTime()},X.startOf=function(te,ue){var H=this,ae=!!z.u(ue)||ue,V=z.p(te),Le=function(yt,$e){var xt=z.w(H.$u?Date.UTC(H.$y,$e,yt):new Date(H.$y,$e,yt),H);return ae?xt:xt.endOf(p)},Oe=function(yt,$e){return z.w(H.toDate()[yt].apply(H.toDate("s"),(ae?[0,0,0,0]:[23,59,59,999]).slice($e)),H)},_e=this.$W,et=this.$M,It=this.$D,vt="set"+(this.$u?"UTC":"");switch(V){case E:return ae?Le(1,0):Le(31,11);case v:return ae?Le(1,et):Le(0,et+1);case m:var He=this.$locale().weekStart||0,wt=(_e<He?_e+7:_e)-He;return Le(ae?It-wt:It+(6-wt),et);case p:case k:return Oe(vt+"Hours",0);case y:return Oe(vt+"Minutes",1);case u:return Oe(vt+"Seconds",2);case o:return Oe(vt+"Milliseconds",3);default:return this.clone()}},X.endOf=function(te){return this.startOf(te,!1)},X.$set=function(te,ue){var H,ae=z.p(te),V="set"+(this.$u?"UTC":""),Le=(H={},H[p]=V+"Date",H[k]=V+"Date",H[v]=V+"Month",H[E]=V+"FullYear",H[y]=V+"Hours",H[u]=V+"Minutes",H[o]=V+"Seconds",H[a]=V+"Milliseconds",H)[ae],Oe=ae===p?this.$D+(ue-this.$W):ue;if(ae===v||ae===E){var _e=this.clone().set(k,1);_e.$d[Le](Oe),_e.init(),this.$d=_e.set(k,Math.min(this.$D,_e.daysInMonth())).$d}else Le&&this.$d[Le](Oe);return this.init(),this},X.set=function(te,ue){return this.clone().$set(te,ue)},X.get=function(te){return this[z.p(te)]()},X.add=function(te,ue){var H,ae=this;te=Number(te);var V=z.p(ue),Le=function(et){var It=W(ae);return z.w(It.date(It.date()+Math.round(et*te)),ae)};if(V===v)return this.set(v,this.$M+te);if(V===E)return this.set(E,this.$y+te);if(V===p)return Le(1);if(V===m)return Le(7);var Oe=(H={},H[u]=r,H[y]=i,H[o]=n,H)[V]||1,_e=this.$d.getTime()+te*Oe;return z.w(_e,this)},X.subtract=function(te,ue){return this.add(-1*te,ue)},X.format=function(te){var ue=this,H=this.$locale();if(!this.isValid())return H.invalidDate||b;var ae=te||"YYYY-MM-DDTHH:mm:ssZ",V=z.z(this),Le=this.$H,Oe=this.$m,_e=this.$M,et=H.weekdays,It=H.months,vt=function($e,xt,cn,C){return $e&&($e[xt]||$e(ue,ae))||cn[xt].slice(0,C)},He=function($e){return z.s(Le%12||12,$e,"0")},wt=H.meridiem||function($e,xt,cn){var C=$e<12?"AM":"PM";return cn?C.toLowerCase():C},yt={YY:String(this.$y).slice(-2),YYYY:this.$y,M:_e+1,MM:z.s(_e+1,2,"0"),MMM:vt(H.monthsShort,_e,It,3),MMMM:vt(It,_e),D:this.$D,DD:z.s(this.$D,2,"0"),d:String(this.$W),dd:vt(H.weekdaysMin,this.$W,et,2),ddd:vt(H.weekdaysShort,this.$W,et,3),dddd:et[this.$W],H:String(Le),HH:z.s(Le,2,"0"),h:He(1),hh:He(2),a:wt(Le,Oe,!0),A:wt(Le,Oe,!1),m:String(Oe),mm:z.s(Oe,2,"0"),s:String(this.$s),ss:z.s(this.$s,2,"0"),SSS:z.s(this.$ms,3,"0"),Z:V};return ae.replace(D,function($e,xt){return xt||yt[$e]||V.replace(":","")})},X.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},X.diff=function(te,ue,H){var ae,V=z.p(ue),Le=W(te),Oe=(Le.utcOffset()-this.utcOffset())*r,_e=this-Le,et=z.m(this,Le);return et=(ae={},ae[E]=et/12,ae[v]=et,ae[h]=et/3,ae[m]=(_e-Oe)/6048e5,ae[p]=(_e-Oe)/864e5,ae[y]=_e/i,ae[u]=_e/r,ae[o]=_e/n,ae)[V]||_e,H?et:z.a(et)},X.daysInMonth=function(){return this.endOf(v).$D},X.$locale=function(){return M[this.$L]},X.locale=function(te,ue){if(!te)return this.$L;var H=this.clone(),ae=$(te,ue,!0);return ae&&(H.$L=ae),H},X.clone=function(){return z.w(this.$d,this)},X.toDate=function(){return new Date(this.valueOf())},X.toJSON=function(){return this.isValid()?this.toISOString():null},X.toISOString=function(){return this.$d.toISOString()},X.toString=function(){return this.$d.toUTCString()},J}(),le=Te.prototype;return W.prototype=le,[["$ms",a],["$s",o],["$m",u],["$H",y],["$W",p],["$M",v],["$y",E],["$D",k]].forEach(function(J){le[J[1]]=function(X){return this.$g(X,J[0],J[1])}}),W.extend=function(J,X){return J.$i||(J(X,Te,W),J.$i=!0),W},W.locale=$,W.isDayjs=j,W.unix=function(J){return W(1e3*J)},W.en=M[Q],W.Ls=M,W.p={},W})})(Py);const fn="ivu-col";function qy(e){return typeof e=="number"?`${e} ${e} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?`0 0 ${e}`:e}const $y={name:"iCol",inject:["RowInstance"],props:{span:[Number,String],order:[Number,String],offset:[Number,String],push:[Number,String],pull:[Number,String],className:String,xs:[Number,Object],sm:[Number,Object],md:[Number,Object],lg:[Number,Object],xl:[Number,Object],xxl:[Number,Object],flex:{type:[Number,String],default:""}},computed:{gutter(){return this.RowInstance.gutter},classes(){let e=[`${fn}`,{[`${fn}-span-${this.span}`]:this.span,[`${fn}-order-${this.order}`]:this.order,[`${fn}-offset-${this.offset}`]:this.offset,[`${fn}-push-${this.push}`]:this.push,[`${fn}-pull-${this.pull}`]:this.pull,[`${this.className}`]:!!this.className}];return["xs","sm","md","lg","xl","xxl"].forEach(t=>{if(typeof this[t]=="number")e.push(`${fn}-span-${t}-${this[t]}`);else if(typeof this[t]=="object"){let n=this[t];Object.keys(n).forEach(r=>{e.push(r!=="span"?`${fn}-${t}-${r}-${n[r]}`:`${fn}-span-${t}-${n[r]}`)})}}),e},styles(){let e={};return this.gutter!==0&&(e={paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}),this.flex&&(e.flex=qy(this.flex)),e}}};function Vy(e,t,n,r,i,a){return Y(),de("div",{class:ce(a.classes),style:Ge(a.styles)},[Se(e.$slots,"default")],6)}const No=dt($y,[["render",Vy]]),Vn="ivu-row",Uy={name:"Row",provide(){return{RowInstance:this}},props:{type:{validator(e){return Ze(e,["flex"])}},align:{validator(e){return Ze(e,["top","middle","bottom"])}},justify:{validator(e){return Ze(e,["start","end","center","space-around","space-between"])}},gutter:{type:Number,default:0},className:String,wrap:{type:Boolean,default:!0}},computed:{classes(){return[`${Vn}`,{[`${Vn}-${this.type}`]:!!this.type,[`${Vn}-${this.type}-${this.align}`]:!!this.align&&this.type,[`${Vn}-${this.type}-${this.justify}`]:!!this.justify&&this.type,[`${Vn}-${this.align}`]:!!this.align,[`${Vn}-${this.justify}`]:!!this.justify,[`${this.className}`]:!!this.className,[`${Vn}-no-wrap`]:!this.wrap}]},styles(){let e={};return this.gutter!==0&&(e={marginLeft:this.gutter/-2+"px",marginRight:this.gutter/-2+"px"}),e}}};function jy(e,t,n,r,i,a){return Y(),de("div",{class:ce(a.classes),style:Ge(a.styles)},[Se(e.$slots,"default")],6)}const jc=dt(Uy,[["render",jy]]),Un="ivu-card",$s=16,Wy={name:"Card",mixins:[hl],components:{Icon:sn},props:{bordered:{type:Boolean,default:!0},disHover:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1},padding:{type:Number,default:$s},title:{type:String},icon:{type:String}},data(){return{showHead:!0,showExtra:!0}},computed:{classes(){return[`${Un}`,{[`${Un}-bordered`]:this.bordered&&!this.shadow,[`${Un}-dis-hover`]:this.disHover||this.shadow,[`${Un}-shadow`]:this.shadow}]},headClasses(){return`${Un}-head`},extraClasses(){return`${Un}-extra`},bodyClasses(){return`${Un}-body`},bodyStyles(){return this.padding!==$s?{padding:`${this.padding}px`}:""},isHrefPattern(){const{to:e}=this;return!!e},tagName(){const{isHrefPattern:e}=this;return e?"a":"div"},tagProps(){const{isHrefPattern:e}=this;if(e){const{linkUrl:t,target:n}=this;return{href:t,target:n}}else return{}}},methods:{handleClickLink(e){if(!this.isHrefPattern)return;const t=e.ctrlKey||e.metaKey;this.handleCheckClick(e,t)}},mounted(){this.showHead=this.title||this.$slots.title!==void 0,this.showExtra=this.$slots.extra!==void 0}},Hy={key:0};function Qy(e,t,n,r,i,a){const o=qt("Icon");return Y(),st(Nh(a.tagName),Fa({class:a.classes},a.tagProps,{onClick:a.handleClickLink}),{default:Fe(()=>[i.showHead?(Y(),de("div",{key:0,class:ce(a.headClasses)},[Se(e.$slots,"title",{},()=>[n.title?(Y(),de("p",Hy,[n.icon?(Y(),st(o,{key:0,type:n.icon},null,8,["type"])):Ee("",!0),fe("span",null,Bt(n.title),1)])):Ee("",!0)])],2)):Ee("",!0),i.showExtra?(Y(),de("div",{key:1,class:ce(a.extraClasses)},[Se(e.$slots,"extra")],2)):Ee("",!0),fe("div",{class:ce(a.bodyClasses),style:Ge(a.bodyStyles)},[Se(e.$slots,"default")],6)]),_:3},16,["class","onClick"])}const zo=dt(Wy,[["render",Qy]]),Yy={name:"CellItem",props:{title:{type:String,default:""},label:{type:String,default:""},extra:{type:String,default:""}}},Ky={class:"ivu-cell-item"},Xy={class:"ivu-cell-icon"},Zy={class:"ivu-cell-main"},Gy={class:"ivu-cell-title"},Jy={class:"ivu-cell-label"},eA={class:"ivu-cell-footer"},tA={class:"ivu-cell-extra"};function nA(e,t,n,r,i,a){return Y(),de("div",Ky,[fe("div",Xy,[Se(e.$slots,"icon")]),fe("div",Zy,[fe("div",Gy,[Se(e.$slots,"default",{},()=>[Nn(Bt(n.title),1)])]),fe("div",Jy,[Se(e.$slots,"label",{},()=>[Nn(Bt(n.label),1)])])]),fe("div",eA,[fe("span",tA,[Se(e.$slots,"extra",{},()=>[Nn(Bt(n.extra),1)])])])])}const rA=dt(Yy,[["render",nA]]),ni="ivu-cell",iA={name:"Cell",inject:["CellGroupInstance"],mixins:[hl,py],components:{CellItem:rA,Icon:sn},props:{name:{type:[String,Number]},title:{type:String,default:""},label:{type:String,default:""},extra:{type:String,default:""},disabled:{type:Boolean,default:!1},selected:{type:Boolean,default:!1}},data(){return{prefixCls:ni}},computed:{classes(){return[`${ni}`,{[`${ni}-disabled`]:this.disabled,[`${ni}-selected`]:this.selected,[`${ni}-with-link`]:this.to}]},arrowType(){const e=this.globalConfig;let t="ios-arrow-forward";return e&&(e.cell.customArrow?t="":e.cell.arrow&&(t=e.cell.arrow)),t},customArrowType(){const e=this.globalConfig;let t="";return e&&e.cell.customArrow&&(t=e.cell.customArrow),t},arrowSize(){const e=this.globalConfig;let t="";return e&&e.cell.arrowSize&&(t=e.cell.arrowSize),t}},methods:{handleClickItem(e,t){this.CellGroupInstance.handleClick(this.name),this.handleCheckClick(e,t)}}},aA=["href","target"],oA={key:2,class:"ivu-cell-arrow"};function lA(e,t,n,r,i,a){const o=qt("CellItem"),u=qt("Icon");return Y(),de("div",{class:ce(a.classes)},[e.to?(Y(),de("a",{key:0,href:e.linkUrl,target:e.target,class:"ivu-cell-link",onClick:[t[0]||(t[0]=ht(y=>a.handleClickItem(y,!1),["exact"])),t[1]||(t[1]=ht(y=>a.handleClickItem(y,!0),["ctrl"])),t[2]||(t[2]=ht(y=>a.handleClickItem(y,!0),["meta"]))]},[R(o,{title:n.title,label:n.label,extra:n.extra},{icon:Fe(()=>[Se(e.$slots,"icon")]),default:Fe(()=>[Se(e.$slots,"default")]),extra:Fe(()=>[Se(e.$slots,"extra")]),label:Fe(()=>[Se(e.$slots,"label")]),_:3},8,["title","label","extra"])],8,aA)):(Y(),de("div",{key:1,class:"ivu-cell-link",onClick:t[3]||(t[3]=(...y)=>a.handleClickItem&&a.handleClickItem(...y))},[R(o,{title:n.title,label:n.label,extra:n.extra},{icon:Fe(()=>[Se(e.$slots,"icon")]),default:Fe(()=>[Se(e.$slots,"default")]),extra:Fe(()=>[Se(e.$slots,"extra")]),label:Fe(()=>[Se(e.$slots,"label")]),_:3},8,["title","label","extra"])])),e.to?(Y(),de("div",oA,[Se(e.$slots,"arrow",{},()=>[R(u,{type:a.arrowType,custom:a.customArrowType,size:a.arrowSize},null,8,["type","custom","size"])])])):Ee("",!0)],2)}const Rt=dt(iA,[["render",lA]]),sA={name:"CellGroup",emits:["on-click"],provide(){return{CellGroupInstance:this}},methods:{handleClick(e){this.$emit("on-click",e)}}},dA={class:"ivu-cell-group"};function cA(e,t,n,r,i,a){return Y(),de("div",dA,[Se(e.$slots,"default")])}const va=dt(sA,[["render",cA]]);var uA={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};pA(uA);function pA(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}const fA={name:"RenderCell",props:{render:Function},render(){return this.render(je)}},hA={components:{RenderCell:fA},props:{prefixCls:{type:String,default:""},duration:{type:Number,default:1.5},type:{type:String},content:{type:String,default:""},withIcon:Boolean,render:{type:Function},hasTitle:Boolean,styles:{type:Object,default:function(){return{right:"50%"}}},closable:{type:Boolean,default:!1},className:{type:String},name:{type:String,required:!0},onClose:{type:Function},transitionName:{type:String},background:{type:Boolean,default:!1},msgType:{type:String}},data(){return{withDesc:!1}},computed:{baseClass(){return`${this.prefixCls}-notice`},renderFunc(){return this.render||function(){}},classes(){return[this.baseClass,{[`${this.className}`]:!!this.className,[`${this.baseClass}-closable`]:this.closable,[`${this.baseClass}-with-desc`]:this.withDesc,[`${this.baseClass}-with-background`]:this.background}]},contentClasses(){return[`${this.baseClass}-content`,this.render!==void 0?`${this.baseClass}-content-with-render`:""]},messageContentClasses(){return[`${this.baseClass}-content`,{[`${this.baseClass}-content-${this.msgType}`]:this.msgType,[`${this.baseClass}-content-background`]:this.background}]},contentWithIcon(){return[this.withIcon?`${this.prefixCls}-content-with-icon`:"",!this.hasTitle&&this.withIcon?`${this.prefixCls}-content-with-render-notitle`:""]},messageClasses(){return[`${this.baseClass}-content`,this.render!==void 0?`${this.baseClass}-content-with-render`:""]}},methods:{clearCloseTimer(){this.closeTimer&&(clearTimeout(this.closeTimer),this.closeTimer=null)},close(){this.clearCloseTimer(),this.onClose(),this.$parent.$parent.close(this.name)},handleEnter(e){this.type==="message"&&(e.style.height=e.scrollHeight+"px")},handleLeave(e){this.type==="message"&&qe&&document.getElementsByClassName("ivu-message-notice").length!==1&&(e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0)}},mounted(){if(this.handleEnter(this.$el),this.clearCloseTimer(),this.duration!==0&&(this.closeTimer=setTimeout(()=>{this.close()},this.duration*1e3)),this.prefixCls==="ivu-notice"){let e=this.$refs.content.querySelectorAll(`.${this.prefixCls}-desc`)[0];this.withDesc=this.render?!0:e?e.innerHTML!=="":!1}},beforeUnmount(){this.handleLeave(this.$el),this.clearCloseTimer()}},mA=["innerHTML"],yA=fe("i",{class:"ivu-icon ivu-icon-ios-close"},null,-1),AA=[yA],gA=["innerHTML"],bA=fe("i",{class:"ivu-icon ivu-icon-ios-close"},null,-1),vA=[bA];function wA(e,t,n,r,i,a){const o=qt("render-cell");return Y(),de("div",{class:ce(a.classes),style:Ge(n.styles)},[n.type==="notice"?(Y(),de(pt,{key:0},[fe("div",{class:ce(a.contentClasses),ref:"content",innerHTML:n.content},null,10,mA),fe("div",{class:ce(a.contentWithIcon)},[R(o,{render:a.renderFunc},null,8,["render"])],2),n.closable?(Y(),de("a",{key:0,class:ce([a.baseClass+"-close"]),onClick:t[0]||(t[0]=(...u)=>a.close&&a.close(...u))},AA,2)):Ee("",!0)],64)):Ee("",!0),n.type==="message"?(Y(),de("div",{key:1,class:ce(a.messageContentClasses),ref:"content"},[fe("div",{class:ce([a.baseClass+"-content-text"]),innerHTML:n.content},null,10,gA),fe("div",{class:ce([a.baseClass+"-content-text"])},[R(o,{render:a.renderFunc},null,8,["render"])],2),n.closable?(Y(),de("a",{key:0,class:ce([a.baseClass+"-close"]),onClick:t[1]||(t[1]=(...u)=>a.close&&a.close(...u))},vA,2)):Ee("",!0)],2)):Ee("",!0)],6)}const xA=dt(hA,[["render",wA]]),EA="ivu-notification";let CA=0;const kA=Date.now();function BA(){return"ivuNotification_"+kA+"_"+CA++}const IA={components:{Notice:xA},props:{prefixCls:{type:String,default:EA},styles:{type:Object,default:function(){return{top:"65px",left:"50%"}}},content:{type:String},className:{type:String},transitionName:{type:String}},data(){return{notices:[],tIndex:this.handleGetIndex()}},computed:{classes(){return[`${this.prefixCls}`,{[`${this.className}`]:!!this.className}]},wrapStyles(){let e=Object.assign({},this.styles);return e["z-index"]=1010+this.tIndex,e}},methods:{add(e){const t=e.name||BA();let n=Object.assign({styles:{right:"50%"},content:"",duration:1.5,closable:!1,name:t},e);this.notices.push(n),this.tIndex=this.handleGetIndex()},close(e){const t=this.notices;for(let n=0;n<t.length;n++)if(t[n].name===e){this.notices.splice(n,1);break}},closeAll(){this.notices=[]},handleGetIndex(){return Pa(),Ii}}};function SA(e,t,n,r,i,a){const o=qt("Notice");return Y(),de("div",{class:ce(a.classes),style:Ge(a.wrapStyles)},[R($m,{name:n.transitionName,appear:""},{default:Fe(()=>[(Y(!0),de(pt,null,zh(i.notices,u=>(Y(),st(o,{key:u.name,"prefix-cls":n.prefixCls,styles:u.styles,type:u.type,content:u.content,duration:u.duration,render:u.render,"has-title":u.hasTitle,withIcon:u.withIcon,closable:u.closable,name:u.name,"transition-name":u.transitionName,background:u.background,"msg-type":u.msgType,"on-close":u.onClose},null,8,["prefix-cls","styles","type","content","duration","render","has-title","withIcon","closable","name","transition-name","background","msg-type","on-close"]))),128))]),_:1},8,["name"])],6)}const Fo=dt(IA,[["render",SA]]);Fo.newInstance=e=>{if(!qe)return;const t=e||{};let n=null;const r=Sr({render(){return je(Fo,Object.assign({ref:"notification"},t))},created(){n=ot()}}),i=document.createElement("div");document.body.appendChild(i),r.mount(i);const a=n.refs.notification;return{notice(o){a.add(o)},remove(o){a.close(o)},component:a,destroy(o){a.closeAll(),qe&&setTimeout(function(){document.body.removeChild(document.getElementsByClassName(o)[0])},500)}}};const Ro="ivu-message",Vs="ivu-icon",Us="ivu_message_key_",yr={top:24,duration:1.5,background:!1};let aa,js=1;const TA={info:"ios-information-circle",success:"ios-checkmark-circle",warning:"ios-alert",error:"ios-close-circle",loading:"ios-loading"},Wc="move-up";function Hc(){return aa=aa||Fo.newInstance({prefixCls:Ro,styles:{top:`${yr.top}px`},transitionName:Wc}),aa}function _A(e="",t=yr.duration,n,r=function(){},i=!1,a=function(){},o=yr.background){const u=TA[n],y=n==="loading"?" ivu-load-loop":"";let p=Hc();return p.notice({name:`${Us}${js}`,duration:t,styles:{},transitionName:Wc,content:`
            <div class="${Ro}-custom-content ${Ro}-${n}">
                <i class="${Vs} ${Vs}-${u} ${y}"></i>
                <span>${e}</span>
            </div>
        `,render:a,onClose:r,closable:i,type:"message",msgType:n,background:o}),function(){let m=js++;return function(){p.remove(`${Us}${m}`)}}()}const on={name:"Message",info(e){return this.message("info",e)},success(e){return this.message("success",e)},warning(e){return this.message("warning",e)},error(e){return this.message("error",e)},loading(e){return this.message("loading",e)},message(e,t){return typeof t=="string"&&(t={content:t}),_A(t.content,t.duration,e,t.onClose,t.closable,t.render,t.background)},config(e){(e.top||e.top===0)&&(yr.top=e.top),(e.duration||e.duration===0)&&(yr.duration=e.duration),e.background&&(yr.background=e.background)},destroy(){let e=Hc();aa=null,e.destroy("ivu-message")}};function LA(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var wa={exports:{}};wa.exports;(function(e,t){(function(n,r){e.exports=r(LA,t,e)})(On,function(n,r,i){var a=function(o,u,y,p,m,v){function h(T){var Q,M,j,$,W,z,Te=T<0;if(T=Math.abs(T).toFixed(b.decimals),T+="",Q=T.split("."),M=Q[0],j=Q.length>1?b.options.decimal+Q[1]:"",b.options.useGrouping){for($="",W=0,z=M.length;W<z;++W)W!==0&&W%3===0&&($=b.options.separator+$),$=M[z-W-1]+$;M=$}return b.options.numerals.length&&(M=M.replace(/[0-9]/g,function(le){return b.options.numerals[+le]}),j=j.replace(/[0-9]/g,function(le){return b.options.numerals[+le]})),(Te?"-":"")+b.options.prefix+M+j+b.options.suffix}function E(T,Q,M,j){return M*(-Math.pow(2,-10*T/j)+1)*1024/1023+Q}function k(T){return typeof T=="number"&&!isNaN(T)}var b=this;if(b.version=function(){return"1.9.3"},b.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:E,formattingFn:h,prefix:"",suffix:"",numerals:[]},v&&typeof v=="object")for(var I in b.options)v.hasOwnProperty(I)&&v[I]!==null&&(b.options[I]=v[I]);b.options.separator===""?b.options.useGrouping=!1:b.options.separator=""+b.options.separator;for(var D=0,_=["webkit","moz","ms","o"],F=0;F<_.length&&!window.requestAnimationFrame;++F)window.requestAnimationFrame=window[_[F]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[_[F]+"CancelAnimationFrame"]||window[_[F]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(T,Q){var M=new Date().getTime(),j=Math.max(0,16-(M-D)),$=window.setTimeout(function(){T(M+j)},j);return D=M+j,$}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(T){clearTimeout(T)}),b.initialize=function(){return!!b.initialized||(b.error="",b.d=typeof o=="string"?document.getElementById(o):o,b.d?(b.startVal=Number(u),b.endVal=Number(y),k(b.startVal)&&k(b.endVal)?(b.decimals=Math.max(0,p||0),b.dec=Math.pow(10,b.decimals),b.duration=1e3*Number(m)||2e3,b.countDown=b.startVal>b.endVal,b.frameVal=b.startVal,b.initialized=!0,!0):(b.error="[CountUp] startVal ("+u+") or endVal ("+y+") is not a number",!1)):(b.error="[CountUp] target is null or undefined",!1))},b.printValue=function(T){var Q=b.options.formattingFn(T);b.d.tagName==="INPUT"?this.d.value=Q:b.d.tagName==="text"||b.d.tagName==="tspan"?this.d.textContent=Q:this.d.innerHTML=Q},b.count=function(T){b.startTime||(b.startTime=T),b.timestamp=T;var Q=T-b.startTime;b.remaining=b.duration-Q,b.options.useEasing?b.countDown?b.frameVal=b.startVal-b.options.easingFn(Q,0,b.startVal-b.endVal,b.duration):b.frameVal=b.options.easingFn(Q,b.startVal,b.endVal-b.startVal,b.duration):b.countDown?b.frameVal=b.startVal-(b.startVal-b.endVal)*(Q/b.duration):b.frameVal=b.startVal+(b.endVal-b.startVal)*(Q/b.duration),b.countDown?b.frameVal=b.frameVal<b.endVal?b.endVal:b.frameVal:b.frameVal=b.frameVal>b.endVal?b.endVal:b.frameVal,b.frameVal=Math.round(b.frameVal*b.dec)/b.dec,b.printValue(b.frameVal),Q<b.duration?b.rAF=requestAnimationFrame(b.count):b.callback&&b.callback()},b.start=function(T){b.initialize()&&(b.callback=T,b.rAF=requestAnimationFrame(b.count))},b.pauseResume=function(){b.paused?(b.paused=!1,delete b.startTime,b.duration=b.remaining,b.startVal=b.frameVal,requestAnimationFrame(b.count)):(b.paused=!0,cancelAnimationFrame(b.rAF))},b.reset=function(){b.paused=!1,delete b.startTime,b.initialized=!1,b.initialize()&&(cancelAnimationFrame(b.rAF),b.printValue(b.startVal))},b.update=function(T){if(b.initialize()){if(T=Number(T),!k(T))return void(b.error="[CountUp] update() - new endVal is not a number: "+T);b.error="",T!==b.frameVal&&(cancelAnimationFrame(b.rAF),b.paused=!1,delete b.startTime,b.startVal=b.frameVal,b.endVal=T,b.countDown=b.startVal>b.endVal,b.rAF=requestAnimationFrame(b.count))}},b.initialize()&&b.printValue(b.startVal)};return a})})(wa,wa.exports);wa.exports;function Qc(e,t){for(var n=[],r=0,i=e.length;r<i;r++)n.push(e[r].substr(0,t));return n}var OA=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],MA=["January","February","March","April","May","June","July","August","September","October","November","December"];Qc(MA,3);Qc(OA,3);var DA={weekPlaceholder:"",columnNames:{en:{0:"w",1:"monday",2:"tuesday",3:"wednesday",4:"thursday",5:"friday",6:"saturday",7:"sunday"},sv:{0:"v",1:"måndag",2:"tisdag",3:"onsdag",4:"torsdag",5:"fredag",6:"lördag",7:"söndag"},pt:{0:"s",1:"segunda",2:"terça",3:"quarta",4:"quinta",5:"sexta",6:"sábado",7:"domingo"}},monthNames:{en:["January","February","March","April","May","June","July","August","September","October","November","December"],sv:["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"],pt:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]},classes:{dayLabel:"day-of-week",weekLabel:"week-number",prevMonth:"inactive",nextMonth:"inactive",monthDay:"day-in-month"}},nn=DA;function NA(e){return e==null?!1:e.constructor===Array||e.constructor===Object}function Yc(e,t){for(var n in e)t[n]?NA(e[n])&&Yc(e[n],t[n]):t[n]=e[n]}function zA(e,t){var n=[nn.classes[e.type]];return e.class?e.class=(typeof e.class=="string"?[e.class]:e.class).concat(n):e.class=n,e.type.indexOf("Label")>0&&(e.index==0&&nn.weekPlaceholder?e.desc=nn.weekPlaceholder:e.index<8?e.desc=nn.columnNames[t][e.index]:e.index%8==0&&(e.desc=e.week)),e.date&&(e.monthName=nn.monthNames[t][e.date.getMonth()]),this.monthName||(this.monthName=nn.monthNames[t][this.month]),this.labels||(this.labels={monthNames:nn.monthNames[t],columnNames:nn.columnNames[t],classes:nn.classes}),e}zA.setLabels=function(e){Yc(e,nn)};const Sn="ivu-divider",FA={name:"Divider",props:{type:{type:String,default:"horizontal",validator(e){return Ze(e,["horizontal","vertical"])}},orientation:{type:String,default:"center",validator(e){return Ze(e,["left","right","center"])}},dashed:{type:Boolean,default:!1},size:{validator(e){return Ze(e,["small","default"])},default:"default"},plain:{type:Boolean,default:!1}},computed:{hasSlot(){return!!this.$slots.default},classes(){return[`${Sn}`,`${Sn}-${this.type}`,`${Sn}-${this.size}`,{[`${Sn}-with-text`]:this.hasSlot&&this.orientation==="center",[`${Sn}-with-text-${this.orientation}`]:this.hasSlot,[`${Sn}-dashed`]:!!this.dashed,[`${Sn}-plain`]:this.plain}]},slotClasses(){return[`${Sn}-inner-text`]}}};function RA(e,t,n,r,i,a){return Y(),de("div",{class:ce(a.classes)},[a.hasSlot?(Y(),de("span",{key:0,class:ce(a.slotClasses)},[Se(e.$slots,"default")],2)):Ee("",!0)],2)}const Ws=dt(FA,[["render",RA]]),yl={props:{lockScroll:{type:Boolean,default:!0}},methods:{checkScrollBar(){if(!qe)return;let e=window.innerWidth;if(!e){const t=document.documentElement.getBoundingClientRect();e=t.right-Math.abs(t.left)}this.bodyIsOverflowing=document.body.clientWidth<e,this.bodyIsOverflowing&&(this.scrollBarWidth=ey())},checkMaskInVisible(){let e=qe?document.getElementsByClassName("ivu-modal-mask")||[]:[];return Array.from(e).every(t=>t.style.display==="none"||t.classList.contains("fade-leave-to"))},setScrollBar(){qe&&this.bodyIsOverflowing&&this.scrollBarWidth!==void 0&&(document.body.style.paddingRight=`${this.scrollBarWidth}px`)},resetScrollBar(){qe&&(document.body.style.paddingRight="")},addScrollEffect(){this.lockScroll&&(this.checkScrollBar(),this.setScrollBar(),qe&&(document.body.style.overflow="hidden"))},removeScrollEffect(){this.lockScroll&&qe&&this.checkMaskInVisible()&&(document.body.style.overflow="",this.resetScrollBar())}}},Et="ivu-drawer",PA={name:"Drawer",mixins:[yl],components:{Icon:sn},emits:["on-close","on-resize-width","on-visible-change","update:modelValue","on-drag"],provide(){return{DrawerInstance:this}},props:{modelValue:{type:Boolean,default:!1},title:{type:String},width:{type:[Number,String],default:256},height:{type:[Number,String],default:256},closable:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},mask:{type:Boolean,default:!0},maskStyle:{type:Object},styles:{type:Object},scrollable:{type:Boolean,default:!1},placement:{validator(e){return Ze(e,["left","right","top","bottom"])},default:"right"},zIndex:{type:Number,default:1e3},transfer:{type:Boolean,default(){const e=ot().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.transfer===""?!0:e.$VIEWUI.transfer}},className:{type:String},inner:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},beforeClose:Function},data(){return{prefixCls:Et,visible:this.modelValue,wrapShow:!1,showHead:!0,canMove:!1,dragWidth:this.width,dragHeight:this.height,wrapperWidth:this.width,wrapperHeight:this.height,wrapperLeft:0,minWidth:256,minHeight:256,id:qc(6),tableList:[],sliderList:[]}},computed:{wrapClasses(){return[`${Et}-wrap`,{[`${Et}-hidden`]:!this.wrapShow,[`${this.className}`]:!!this.className,[`${Et}-no-mask`]:!this.mask,[`${Et}-wrap-inner`]:this.inner,[`${Et}-wrap-dragging`]:this.canMove}]},mainStyles(){let e={};if(this.placement==="left"||this.placement==="right"){const t=parseInt(this.dragWidth),n={width:t<=100?`${t}%`:`${t}px`};Object.assign(e,n)}else{const t=parseInt(this.dragHeight),n={height:t<=100?`${t}%`:`${t}px`};Object.assign(e,n)}return e},contentClasses(){return[`${Et}-content`,{[`${Et}-content-no-mask`]:!this.mask}]},classes(){return[`${Et}`,`${Et}-${this.placement}`,{[`${Et}-no-header`]:!this.showHead,[`${Et}-inner`]:this.inner}]},maskClasses(){return[`${Et}-mask`,{[`${Et}-mask-inner`]:this.inner}]},transitionName(){return this.placement==="left"||this.placement==="right"?`move-${this.placement}`:this.placement==="top"?"move-up":"move-down"}},methods:{close(){if(!this.beforeClose)return this.handleClose();const e=this.beforeClose();e&&e.then?e.then(()=>{this.handleClose()}):this.handleClose()},handleClose(){this.visible=!1,this.$emit("update:modelValue",!1),this.$emit("on-close")},handleMask(){this.maskClosable&&this.mask&&this.close()},handleWrapClick(e){const t=e.target.getAttribute("class");t&&t.indexOf(`${Et}-wrap`)>-1&&this.handleMask()},handleMousemove(e){if(!this.canMove||!this.draggable)return;this.handleSetWrapperWidth();const t=e.pageX-this.wrapperLeft;let n=this.placement==="right"?this.wrapperWidth-t:t;n=Math.max(n,parseFloat(this.minWidth)),e.atMin=n===parseFloat(this.minWidth),n<=100&&(n=n/this.wrapperWidth*100),this.dragWidth=n,this.$emit("on-resize-width",parseInt(this.dragWidth)),this.$emit("on-drag","dragging",parseInt(this.dragWidth))},handleSetWrapperWidth(){const{width:e,left:t}=this.$refs.drawer.getBoundingClientRect();this.wrapperWidth=e,this.wrapperLeft=t},handleMouseup(){this.draggable&&(this.canMove=!1,this.$emit("on-drag","end"))},handleTriggerMousedown(){this.canMove=!0,window.getSelection().removeAllRanges(),this.$emit("on-drag","start")},addDrawer(){const e=this.$root;e.drawerList||(e.drawerList=[]),e.drawerList.push({id:this.id,drawer:this})},removeDrawer(){const e=this.$root;if(!e.drawerList)return;const t=e.drawerList.findIndex(n=>n.id===this.id);e.drawerList.splice(t,1)}},mounted(){this.visible&&(this.wrapShow=!0);let e=!0;this.$slots.header===void 0&&!this.title&&(e=!1),this.showHead=e,this.addDrawer(),An(document,"mousemove",this.handleMousemove),An(document,"mouseup",this.handleMouseup),this.handleSetWrapperWidth()},beforeUnmount(){this.removeDrawer(),gn(document,"mousemove",this.handleMousemove),gn(document,"mouseup",this.handleMouseup),this.removeScrollEffect()},watch:{modelValue(e){this.visible=e},visible(e){e===!1?this.timer=setTimeout(()=>{this.wrapShow=!1,this.$root.drawerList.map(i=>i.drawer).filter(i=>i.id!==this.id).some(i=>i.visible&&!i.scrollable)||this.removeScrollEffect()},300):(this.timer&&clearTimeout(this.timer),this.wrapShow=!0,this.scrollable||this.addScrollEffect()),this.tableList.forEach(t=>{t.table.handleOnVisibleChange(e)}),this.sliderList.forEach(t=>{t.slider.handleOnVisibleChange(e)}),this.$emit("on-visible-change",e)},scrollable(e){e?this.removeScrollEffect():this.addScrollEffect()},title(e){this.$slots.header===void 0&&(this.showHead=!!e)},width(e){this.dragWidth=e},height(e){this.dragHeight=e}}},qA={ref:"drawer"},$A=fe("div",{class:"ivu-drawer-drag-move-trigger"},[fe("div",{class:"ivu-drawer-drag-move-trigger-point"},[fe("i"),fe("i"),fe("i"),fe("i"),fe("i")])],-1);function VA(e,t,n,r,i,a){const o=qt("Icon");return Y(),st(ul,{to:"body",disabled:!n.transfer},[fe("div",qA,[R(Gt,{name:"fade"},{default:Fe(()=>[n.mask?Qt((Y(),de("div",{key:0,class:ce(a.maskClasses),style:Ge(n.maskStyle),onClick:t[0]||(t[0]=(...u)=>a.handleMask&&a.handleMask(...u))},null,6)),[[Kt,i.visible]]):Ee("",!0)]),_:1}),fe("div",{class:ce(a.wrapClasses),onClick:t[3]||(t[3]=(...u)=>a.handleWrapClick&&a.handleWrapClick(...u))},[R(Gt,{name:a.transitionName},{default:Fe(()=>[Qt(fe("div",{class:ce(a.classes),style:Ge(a.mainStyles)},[fe("div",{class:ce(a.contentClasses),ref:"content"},[n.closable?(Y(),de("a",{key:0,class:"ivu-drawer-close",onClick:t[1]||(t[1]=(...u)=>a.close&&a.close(...u))},[Se(e.$slots,"close",{},()=>[R(o,{type:"ios-close"})])])):Ee("",!0),i.showHead?(Y(),de("div",{key:1,class:ce([i.prefixCls+"-header"])},[Se(e.$slots,"header",{},()=>[fe("div",{class:ce([i.prefixCls+"-header-inner"])},Bt(n.title),3)])],2)):Ee("",!0),fe("div",{class:ce([i.prefixCls+"-body"]),style:Ge(n.styles)},[Se(e.$slots,"default")],6)],2),n.draggable&&(n.placement==="left"||n.placement==="right")?(Y(),de("div",{key:0,class:ce(["ivu-drawer-drag","ivu-drawer-drag-"+n.placement]),onMousedown:t[2]||(t[2]=(...u)=>a.handleTriggerMousedown&&a.handleTriggerMousedown(...u))},[Se(e.$slots,"trigger",{},()=>[$A])],34)):Ee("",!0)],6),[[Kt,i.visible]])]),_:3},8,["name"])],2)],512)],8,["disabled"])}const UA=dt(PA,[["render",VA]]);var Kc={exports:{}},jA=Kc.exports={};jA.forEach=function(e,t){for(var n=0;n<e.length;n++){var r=t(e[n]);if(r)return r}};var Xc=Kc.exports,Zc={};Zc.isIE=function(e){function t(){var r=navigator.userAgent.toLowerCase();return r.indexOf("msie")!==-1||r.indexOf("trident")!==-1||r.indexOf(" edge/")!==-1}if(!t())return!1;if(!e)return!0;var n=function(){var r,i=3,a=document.createElement("div"),o=a.getElementsByTagName("i");do a.innerHTML="<!--[if gt IE "+ ++i+"]><i></i><![endif]-->";while(o[0]);return i>4?i:r}();return e===n};Zc.isLegacyOpera=function(){return!!window.opera};var WA={};WA.getOption=HA;function HA(e,t,n){var r=e[t];return r==null&&n!==void 0?n:r}Xc.forEach;Xc.forEach;var Gc="Expected a function",Hs=0/0,QA="[object Symbol]",YA=/^\s+|\s+$/g,KA=/^[-+]0x[0-9a-f]+$/i,XA=/^0b[01]+$/i,ZA=/^0o[0-7]+$/i,GA=parseInt,JA=typeof On=="object"&&On&&On.Object===Object&&On,e0=typeof self=="object"&&self&&self.Object===Object&&self,t0=JA||e0||Function("return this")(),n0=Object.prototype,r0=n0.toString,i0=Math.max,a0=Math.min,po=function(){return t0.Date.now()};function o0(e,t,n){var r,i,a,o,u,y,p=0,m=!1,v=!1,h=!0;if(typeof e!="function")throw new TypeError(Gc);t=Qs(t)||0,xa(n)&&(m=!!n.leading,v="maxWait"in n,a=v?i0(Qs(n.maxWait)||0,t):a,h="trailing"in n?!!n.trailing:h);function E(M){var j=r,$=i;return r=i=void 0,p=M,o=e.apply($,j),o}function k(M){return p=M,u=setTimeout(D,t),m?E(M):o}function b(M){var j=M-y,$=M-p,W=t-j;return v?a0(W,a-$):W}function I(M){var j=M-y,$=M-p;return y===void 0||j>=t||j<0||v&&$>=a}function D(){var M=po();if(I(M))return _(M);u=setTimeout(D,b(M))}function _(M){return u=void 0,h&&r?E(M):(r=i=void 0,o)}function F(){u!==void 0&&clearTimeout(u),p=0,r=y=i=u=void 0}function T(){return u===void 0?o:_(po())}function Q(){var M=po(),j=I(M);if(r=arguments,i=this,y=M,j){if(u===void 0)return k(y);if(v)return u=setTimeout(D,t),E(y)}return u===void 0&&(u=setTimeout(D,t)),o}return Q.cancel=F,Q.flush=T,Q}function l0(e,t,n){var r=!0,i=!0;if(typeof e!="function")throw new TypeError(Gc);return xa(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),o0(e,t,{leading:r,maxWait:t,trailing:i})}function xa(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function s0(e){return!!e&&typeof e=="object"}function d0(e){return typeof e=="symbol"||s0(e)&&r0.call(e)==QA}function Qs(e){if(typeof e=="number")return e;if(d0(e))return Hs;if(xa(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=xa(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(YA,"");var n=XA.test(e);return n||ZA.test(e)?GA(e.slice(2),n?2:8):KA.test(e)?Hs:+e}var c0=l0;const u0=$c(c0),Ae={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent(e){const{keyCode:t}=e;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=Ae.F1&&t<=Ae.F12)return!1;switch(t){case Ae.ALT:case Ae.CAPS_LOCK:case Ae.CONTEXT_MENU:case Ae.CTRL:case Ae.DOWN:case Ae.END:case Ae.ESC:case Ae.HOME:case Ae.INSERT:case Ae.LEFT:case Ae.MAC_FF_META:case Ae.META:case Ae.NUMLOCK:case Ae.NUM_CENTER:case Ae.PAGE_DOWN:case Ae.PAGE_UP:case Ae.PAUSE:case Ae.PRINT_SCREEN:case Ae.RIGHT:case Ae.SHIFT:case Ae.UP:case Ae.WIN_KEY:case Ae.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey(e){if(e>=Ae.ZERO&&e<=Ae.NINE||e>=Ae.NUM_ZERO&&e<=Ae.NUM_MULTIPLY||e>=Ae.A&&e<=Ae.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&e===0)return!0;switch(e){case Ae.SPACE:case Ae.QUESTION_MARK:case Ae.NUM_PLUS:case Ae.NUM_MINUS:case Ae.NUM_PERIOD:case Ae.NUM_DIVISION:case Ae.SEMICOLON:case Ae.DASH:case Ae.EQUALS:case Ae.COMMA:case Ae.PERIOD:case Ae.SLASH:case Ae.APOSTROPHE:case Ae.SINGLE_QUOTE:case Ae.OPEN_SQUARE_BRACKET:case Ae.BACKSLASH:case Ae.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}},Tn="ivu-spin",p0={name:"Spin",mixins:[yl],props:{size:{validator(e){return Ze(e,["small","large","default"])},default(){const e=ot().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.size===""?"default":e.$VIEWUI.size}},fix:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},show:{type:Boolean,default:!0}},data(){return{showText:!1,visible:!1}},computed:{classes(){return[`${Tn}`,{[`${Tn}-${this.size}`]:!!this.size,[`${Tn}-fix`]:this.fix,[`${Tn}-show-text`]:this.showText,[`${Tn}-fullscreen`]:this.fullscreen}]},mainClasses(){return`${Tn}-main`},dotClasses(){return`${Tn}-dot`},textClasses(){return`${Tn}-text`},fullscreenVisible(){return this.fullscreen?this.visible:!0}},watch:{visible(e){e?this.addScrollEffect():this.removeScrollEffect()}},mounted(){this.showText=!!this.$slots.default&&this.$slots.default().some(e=>e.children&&e.children.length)}};function f0(e,t,n,r,i,a){return Y(),st(Gt,{name:"fade"},{default:Fe(()=>[a.fullscreenVisible&&n.show?(Y(),de("div",{key:0,class:ce(a.classes)},[fe("div",{class:ce(a.mainClasses)},[fe("span",{class:ce(a.dotClasses)},null,2),fe("div",{class:ce(a.textClasses)},[Se(e.$slots,"default")],2)],2)],2)):Ee("",!0)]),_:3})}const Zn=dt(p0,[["render",f0]]),h0={name:"ImagePreview",mixins:[ml],components:{Icon:sn,Spin:Zn,Row:jc,Col:No},inheritAttrs:!1,emits:["update:modelValue","on-close","on-switch"],props:{modelValue:{type:Boolean,default:!1},transfer:{type:Boolean,default(){const e=ot().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.transfer===""?!1:e.$VIEWUI.transfer}},maskClosable:{type:Boolean,default:!0},previewList:{type:Array,default(){return[]}},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},toolbar:{type:Array,default(){const e=ot().appContext.config.globalProperties;return!e.$VIEWUI||!e.$VIEWUI.image||e.$VIEWUI.image.toolbar===""?["zoomIn","zoomOut","original","rotateLeft","rotateRight","download"]:e.$VIEWUI.image.toolbar}}},data(){return{currentIndex:0,scale:1,degree:0,translate:{x:0,y:0},startX:0,startY:0,transition:!0,original:!1,prevOverflow:"",status:"loading",zIndex:1e3,maskIndex:this.getMaskIndex(),downloading:!1}},computed:{imgClasses(){return["ivu-image-preview-image",{["ivu-image-preview-grabbing"]:!this.transition,["ivu-image-preview-hidden"]:this.status==="failed",["ivu-image-preview-transition"]:this.transition,["ivu-image-preview-limit"]:!this.original}]},imageStyle(){let e=this.translate.x/this.scale,t=this.translate.y/this.scale;const n=this.degree%360;return[90,-270].includes(n)&&([e,t]=[t,-e]),[180,-180].includes(n)&&([e,t]=[-e,-t]),[270,-90].includes(n)&&([e,t]=[-t,e]),{transform:`
                        scale(${this.scale})
                        rotate(${this.degree}deg)
                        translate(${e}px, ${t}px)
                    `}},maskStyle(){return{zIndex:this.maskIndex+this.zIndex}},leftClasses(){return["ivu-image-preview-arrow-left",{["ivu-image-preview-arrow-disabled"]:this.hasLeftSwitchEnd}]},rightClasses(){return["ivu-image-preview-arrow-right",{["ivu-image-preview-arrow-disabled"]:this.hasRightSwitchEnd}]},hasRightSwitchEnd(){const{currentIndex:e,infinite:t,previewList:n}=this,r=n.length;return t?!1:e>=r-1},hasLeftSwitchEnd(){const{currentIndex:e,infinite:t}=this;return t?!1:e===0},currentSrc(){return this.previewList[this.currentIndex]},failLang(){return this.t("i.image.fail")}},methods:{resetStyle(){this.scale=1,this.degree=0,this.translate.x=0,this.translate.y=0},handleClose(){this.$emit("update:modelValue",!1),this.$emit("on-close")},handleClickMask(){this.maskClosable&&this.handleClose()},handleSwitch(e){e?this.currentIndex+1===this.previewList.length?this.infinite&&(this.resetStyle(),this.currentIndex=0):(this.resetStyle(),this.currentIndex+=1):this.currentIndex===0?this.infinite&&(this.resetStyle(),this.currentIndex=this.previewList.length-1):(this.resetStyle(),this.currentIndex-=1),this.$emit("on-switch",{currentIndex:this.currentIndex})},handleOperation(e){e==="zoomIn"&&this.scale<6&&(this.scale+=.25),e==="zoomOut"&&this.scale>.25&&(this.scale-=.25),e==="rotateLeft"&&(this.degree-=90),e==="rotateRight"&&(this.degree+=90),e==="original"&&(this.original=!this.original,this.transition=!1,this.resetStyle(),setTimeout(()=>{this.transition=!0},0)),e==="download"&&(this.downloading=!0,ry(this.previewList[this.currentIndex]).then(()=>{this.downloading=!1}).catch(()=>{this.downloading=!1}))},handleKeydown(e){if(!this.modelValue)return;const{keyCode:t}=e;t===Ae.LEFT&&this.handleSwitch(!1),t===Ae.RIGHT&&this.handleSwitch(!0),t===Ae.UP&&this.handleOperation("zoomIn"),t===Ae.DOWN&&this.handleOperation("zoomOut"),t===Ae.SPACE&&(e.preventDefault(),this.original=!this.original)},handleKeyup(e){if(!this.modelValue)return;const{keyCode:t}=e;t===Ae.ESC&&this.handleClose()},handleWheel(e){if(!this.modelValue)return;const{deltaY:t}=e;this.handleOperation(t<0?"zoomIn":"zoomOut")},handleMousedown(e){const{pageX:t,pageY:n,which:r}=e;r===1&&(this.startX=t,this.startY=n,this.transition=!1,An(document,"mousemove",this.handleMousemove),An(document,"mouseup",this.handleMouseup))},handleMousemove:u0(function(e){e.stopPropagation();const{pageX:t,pageY:n}=e;this.translate.x+=t-this.startX,this.translate.y+=n-this.startY,this.startX=t,this.startY=n}),handleMouseup(){this.transition=!0,gn(document,"mousemove",this.handleMousemove),gn(document,"mouseup",this.handleMouseup)},getBodyOverflow(){return qe?document.body.style.overflow:""},setBodyOverflow(e){qe&&(document.body.style.overflow=e)},handleImageLoad(){this.status="loaded"},handleImageError(){this.status="failed"},getMaskIndex(){return Pa(),Ii}},watch:{modelValue(e){e?(this.currentIndex=this.initialIndex,this.resetStyle(),this.original=!1,this.prevOverflow=this.getBodyOverflow(),this.setBodyOverflow("hidden"),this.maskIndex=this.getMaskIndex()):this.setBodyOverflow(this.prevOverflow)},currentIndex(){this.status="loading"}},mounted(){An(document,"keydown",this.handleKeydown),An(document,"keyup",this.handleKeyup),An(document,"wheel",this.handleWheel)},beforeUnmount(){gn(document,"keydown",this.handleKeydown),gn(document,"keyup",this.handleKeyup),gn(document,"wheel",this.handleWheel)}},m0={key:1,class:"ivu-image-preview-fail"},y0=["src"],A0=fe("path",{d:"M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z","p-id":"7198",fill:"#ffffff"},null,-1),g0=fe("path",{d:"M921 867L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z","p-id":"7199",fill:"#ffffff"},null,-1),b0=[A0,g0],v0=fe("path",{d:"M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z","p-id":"7413",fill:"#ffffff"},null,-1),w0=fe("path",{d:"M921 867L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z","p-id":"7414",fill:"#ffffff"},null,-1),x0=[v0,w0],E0=fe("path",{d:"M358.058667 128H156.970667A28.970667 28.970667 0 0 0 128 157.013333v202.837334c0 7.978667 6.528 14.506667 14.506667 14.506666h43.434666a14.506667 14.506667 0 0 0 14.506667-14.506666V200.448h157.610667a14.506667 14.506667 0 0 0 14.506666-14.506667V142.506667a14.506667 14.506667 0 0 0-14.506666-14.506667zM881.493333 649.642667h-43.434666a14.506667 14.506667 0 0 0-14.506667 14.506666v159.402667h-157.610667a14.506667 14.506667 0 0 0-14.506666 14.506667v43.434666c0 7.978667 6.570667 14.506667 14.506666 14.506667h201.088c16 0 28.970667-12.928 28.970667-29.013333v-202.837334a14.506667 14.506667 0 0 0-14.506667-14.506666zM358.058667 823.552H200.448v-159.402667a14.506667 14.506667 0 0 0-14.506667-14.506666H142.506667a14.506667 14.506667 0 0 0-14.506667 14.506666v202.88c0 16 12.970667 28.970667 29.013333 28.970667h201.045334a14.506667 14.506667 0 0 0 14.506666-14.506667v-43.434666a14.506667 14.506667 0 0 0-14.506666-14.506667zM866.986667 128h-201.088a14.506667 14.506667 0 0 0-14.506667 14.506667v43.434666c0 7.978667 6.570667 14.506667 14.506667 14.506667h157.610666v159.402667c0 7.978667 6.528 14.506667 14.506667 14.506666h43.434667a14.506667 14.506667 0 0 0 14.506666-14.506666V156.970667A28.928 28.928 0 0 0 866.986667 128z","p-id":"26673",fill:"#ffffff"},null,-1),C0=[E0],k0=fe("path",{d:"M864 128H160c-19.2 0-32 12.8-32 32v704c0 19.2 12.8 32 32 32h704c19.2 0 32-12.8 32-32V160c0-19.2-12.8-32-32-32z m-32 704H192V192h640v640z","p-id":"1977",fill:"#ffffff"},null,-1),B0=fe("path",{d:"M320 384v288c0 19.2 12.8 32 32 32s32-12.8 32-32V352c0-19.2-12.8-32-32-32h-32c-19.2 0-32 12.8-32 32s12.8 32 32 32zM640 384v288c0 19.2 12.8 32 32 32s32-12.8 32-32V352c0-19.2-12.8-32-32-32h-32c-19.2 0-32 12.8-32 32s12.8 32 32 32z","p-id":"1978",fill:"#ffffff"},null,-1),I0=fe("path",{d:"M512 384m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z","p-id":"1979",fill:"#ffffff"},null,-1),S0=fe("path",{d:"M512 640m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z","p-id":"1980",fill:"#ffffff"},null,-1),T0=[k0,B0,I0,S0],_0=fe("path",{d:"M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32z m-44 402H188V494h440v326z m191.3-491.5c-78.8-100.7-196-153.6-314.6-154.2l-0.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7 0.4 12.6-6.1v-63.9c12.9 0.1 25.9 0.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8 11 40.7 14 82.7 8.9 124.8-0.7 5.4-1.4 10.8-2.4 16.1h74.9c14.8-103.6-11.3-213-81-302.3z","p-id":"13309",fill:"#ffffff"},null,-1),L0=[_0],O0=fe("path",{d:"M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-0.4-12.6 6.1l-0.2 64c-118.6 0.5-235.8 53.4-314.6 154.2-69.6 89.2-95.7 198.6-81.1 302.4h74.9c-0.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8zM880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32z m-44 402H396V494h440v326z","p-id":"13522",fill:"#ffffff"},null,-1),M0=[O0],D0=fe("path",{d:"M505.7 621c3.2 4.1 9.4 4.1 12.6 0l112-141.7c4.1-5.2 0.4-12.9-6.3-12.9h-72.1V120c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v346.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8z","p-id":"8826",fill:"#ffffff"},null,-1),N0=fe("path",{d:"M903 516h-64c-4.4 0-8 3.6-8 8v300c0 4.4-3.6 8-8 8H199c-4.4 0-8-3.6-8-8V524c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v372c0 8.8 7.2 16 16 16h768c8.8 0 16-7.2 16-16V524c0-4.4-3.6-8-8-8z","p-id":"8827",fill:"#ffffff"},null,-1),z0=[D0,N0],F0={class:"ivu-image-preview-operations-item ivu-image-preview-operations-wait ivu-anim-loop",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"7816",width:"200",height:"200"},R0=fe("path",{d:"M512 64c247.2 0 448 200.8 448 448h-64c0-212-172-384-384-384V64z m0 832c-212 0-384-172-384-384H64c0 247.2 200.8 448 448 448v-64z","p-id":"7817",fill:"#ffffff"},null,-1),P0=[R0];function q0(e,t,n,r,i,a){const o=qt("Spin"),u=qt("Col"),y=qt("Row"),p=qt("Icon");return Y(),st(ul,{to:"body",disabled:!n.transfer},[R(Gt,{name:"fade"},{default:Fe(()=>[n.modelValue?(Y(),de("div",{key:0,class:"ivu-image-preview-mask",style:Ge(a.maskStyle)},null,4)):Ee("",!0)]),_:1}),R(Gt,{name:"fade"},{default:Fe(()=>[n.modelValue?(Y(),de("div",{key:0,class:"ivu-image-preview-wrap",style:Ge(a.maskStyle)},[fe("div",Fa({class:"ivu-image-preview"},e.$attrs,{onClick:t[14]||(t[14]=ht((...m)=>a.handleClickMask&&a.handleClickMask(...m),["stop"]))}),[i.status==="loading"?(Y(),st(o,{key:0,size:"large",class:"ivu-image-preview-loading"})):i.status==="failed"?(Y(),de("div",m0,[fe("span",null,Bt(a.failLang),1)])):Ee("",!0),(Y(),de("img",{class:ce(a.imgClasses),style:Ge(a.imageStyle),src:a.currentSrc,key:i.currentIndex.toString(),onClick:t[0]||(t[0]=ht(()=>{},["stop"])),onMousedown:t[1]||(t[1]=ht((...m)=>a.handleMousedown&&a.handleMousedown(...m),["stop","prevent"])),onLoad:t[2]||(t[2]=(...m)=>a.handleImageLoad&&a.handleImageLoad(...m)),onError:t[3]||(t[3]=(...m)=>a.handleImageError&&a.handleImageError(...m))},null,46,y0)),n.toolbar&&n.toolbar.length>0?(Y(),st(y,{key:2,"class-name":"ivu-image-preview-operations",wrap:!1,onClick:t[11]||(t[11]=ht(()=>{},["stop"]))},{default:Fe(()=>[n.toolbar.indexOf("zoomIn")>-1?(Y(),st(u,{key:0,flex:"1",order:n.toolbar.indexOf("zoomIn")+1},{default:Fe(()=>[(Y(),de("svg",{class:"ivu-image-preview-operations-item",onClick:t[4]||(t[4]=ht(m=>a.handleOperation("zoomIn"),["stop"])),viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"7197",width:"200",height:"200"},b0))]),_:1},8,["order"])):Ee("",!0),n.toolbar.indexOf("zoomOut")>-1?(Y(),st(u,{key:1,flex:"1",order:n.toolbar.indexOf("zoomOut")+1},{default:Fe(()=>[(Y(),de("svg",{class:"ivu-image-preview-operations-item",onClick:t[5]||(t[5]=ht(m=>a.handleOperation("zoomOut"),["stop"])),viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"7412",width:"200",height:"200"},x0))]),_:1},8,["order"])):Ee("",!0),n.toolbar.indexOf("original")>-1?(Y(),st(u,{key:2,flex:"1",order:n.toolbar.indexOf("original")+1},{default:Fe(()=>[Qt((Y(),de("svg",{class:"ivu-image-preview-operations-item",onClick:t[6]||(t[6]=ht(m=>a.handleOperation("original"),["stop"])),viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"26672",width:"200",height:"200"},C0,512)),[[Kt,!this.original]]),Qt((Y(),de("svg",{class:"ivu-image-preview-operations-item",onClick:t[7]||(t[7]=ht(m=>a.handleOperation("original"),["stop"])),viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1976",width:"200",height:"200"},T0,512)),[[Kt,this.original]])]),_:1},8,["order"])):Ee("",!0),n.toolbar.indexOf("rotateLeft")>-1?(Y(),st(u,{key:3,flex:"1",order:n.toolbar.indexOf("rotateLeft")+1},{default:Fe(()=>[(Y(),de("svg",{class:"ivu-image-preview-operations-item",onClick:t[8]||(t[8]=ht(m=>a.handleOperation("rotateLeft"),["stop"])),viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"13308",width:"200",height:"200"},L0))]),_:1},8,["order"])):Ee("",!0),n.toolbar.indexOf("rotateRight")>-1?(Y(),st(u,{key:4,flex:"1",order:n.toolbar.indexOf("rotateRight")+1},{default:Fe(()=>[(Y(),de("svg",{class:"ivu-image-preview-operations-item",onClick:t[9]||(t[9]=ht(m=>a.handleOperation("rotateRight"),["stop"])),viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"13521",width:"200",height:"200"},M0))]),_:1},8,["order"])):Ee("",!0),n.toolbar.indexOf("download")>-1?(Y(),st(u,{key:5,flex:"1",order:n.toolbar.indexOf("download")+1},{default:Fe(()=>[Qt((Y(),de("svg",{class:"ivu-image-preview-operations-item",onClick:t[10]||(t[10]=ht(m=>a.handleOperation("download"),["stop"])),viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"8825",width:"200",height:"200"},z0,512)),[[Kt,!i.downloading]]),Qt((Y(),de("svg",F0,P0,512)),[[Kt,i.downloading]])]),_:1},8,["order"])):Ee("",!0)]),_:1})):Ee("",!0),n.previewList.length>1?(Y(),st(p,{key:3,class:ce(a.leftClasses),type:"ios-arrow-back",onClick:t[12]||(t[12]=ht(m=>a.handleSwitch(!1),["stop"]))},null,8,["class"])):Ee("",!0),n.previewList.length>1?(Y(),st(p,{key:4,class:ce(a.rightClasses),type:"ios-arrow-forward",onClick:t[13]||(t[13]=ht(m=>a.handleSwitch(!0),["stop"]))},null,8,["class"])):Ee("",!0),R(p,{class:"ivu-image-preview-arrow-close",type:"md-close",onClick:ht(a.handleClose,["stop"])},null,8,["onClick"])],16)],4)):Ee("",!0)]),_:1})],8,["disabled"])}const Ea=dt(h0,[["render",q0]]);Ea.newInstance=e=>{if(!qe)return;const t=e||{};let n=null;const r=Sr({data(){return Object.assign({},t,{visible:!1,previewList:[],initialIndex:0,toolbar:["zoomIn","zoomOut","original","rotateLeft","rotateRight","download"],infinite:!0,maskClosable:!0,transfer:!0})},render(){return je(Ea,Object.assign({},t,{ref:"imagePreview",modelValue:this.visible,previewList:this.previewList,initialIndex:this.initialIndex,toolbar:this.toolbar,infinite:this.infinite,maskClosable:this.maskClosable,transfer:this.transfer,"onOn-close":this.close}))},methods:{close(){this.visible=!1,setTimeout(()=>{this.destroy(),this.onRemove()},300)},destroy(){r.unmount(),document.body.removeChild(i)},onRemove(){}},created(){n=ot()}}),i=document.createElement("div");document.body.appendChild(i),r.mount(i);const a=n.refs.imagePreview;return{show(o){Object.keys(o).forEach(u=>{a.$parent[u]=o[u]}),a.$parent.visible=!0},component:a}};let oa;function $0(){return oa=oa||Ea.newInstance(),oa}Ea.show=function(e={}){const t=$0();e.onRemove=function(){oa=null},t.show(e)};function Jc(){return Pa(),Ii}let Ys=Jc();Zn.newInstance=e=>{if(!qe)return;const t=e||{};let n=null;const r=Sr({data(){return Object.assign({},t,{})},render(){let o="";return this.render?o=je(Zn,{fix:!0,fullscreen:!0,ref:"spin"},[this.render(je)]):o=je(Zn,{size:"large",fix:!0,fullscreen:!0,ref:"spin"}),je("div",{class:"ivu-spin-fullscreen ivu-spin-fullscreen-wrapper",style:{"z-index":2010+Ys}},[o])},created(){n=ot()}}),i=document.createElement("div");document.body.appendChild(i),r.mount(i);const a=n.refs.spin;return{show(){a.visible=!0,Ys=Jc()},remove(o){a.visible=!1,setTimeout(function(){r.unmount(),document.body.removeChild(i),o()},500)},component:a}};let fi;function eu(e=void 0){return fi=fi||Zn.newInstance({render:e}),fi}function V0(e){const t="render"in e?e.render:void 0;eu(t).show(e)}Zn.show=function(e={}){return V0(e)};Zn.hide=function(){if(!fi)return!1;eu().remove(()=>{fi=null})};const Qi="ivu-loading-bar",U0={name:"LoadingBar",props:{color:{type:String,default:"primary"},failedColor:{type:String,default:"error"},height:{type:Number,default:2}},data(){return{percent:0,status:"success",show:!1}},computed:{classes(){return`${Qi}`},innerClasses(){return[`${Qi}-inner`,{[`${Qi}-inner-color-primary`]:this.color==="primary"&&this.status==="success",[`${Qi}-inner-failed-color-error`]:this.failedColor==="error"&&this.status==="error"}]},outerStyles(){return{height:`${this.height}px`}},styles(){let e={width:`${this.percent}%`,height:`${this.height}px`};return this.color!=="primary"&&this.status==="success"&&(e.backgroundColor=this.color),this.failedColor!=="error"&&this.status==="error"&&(e.backgroundColor=this.failedColor),e}}};function j0(e,t,n,r,i,a){return Y(),st(Gt,{name:"fade"},{default:Fe(()=>[Qt(fe("div",{class:ce(a.classes),style:Ge(a.outerStyles)},[fe("div",{class:ce(a.innerClasses),style:Ge(a.styles)},null,6)],6),[[Kt,i.show]])]),_:1})}const Ks=dt(U0,[["render",j0]]);Ks.newInstance=e=>{if(!qe)return;const t=e||{};let n=null;const r=Sr({data(){return t},render(){return je(Ks,Object.assign({ref:"loadingBar"},t))},created(){n=ot()}}),i=document.createElement("div");document.body.appendChild(i),r.mount(i);const a=n.refs.loadingBar;return{update(o){"percent"in o&&(a.percent=o.percent),o.status&&(a.status=o.status),"show"in o&&(a.show=o.show)},component:a,destroy(){r.unmount(),document.body.removeChild(i)}}};const St="ivu-modal",Xs={x:null,y:null,dragX:null,dragY:null,dragging:!1,rect:null},W0={inheritAttrs:!1,name:"Modal",mixins:[ml,yl],components:{Icon:sn,iButton:kt},emits:["on-cancel","on-ok","on-hidden","on-visible-change","update:modelValue"],provide(){return{ModalInstance:this}},props:{modelValue:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},maskClosable:{type:Boolean,default(){const e=ot().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.modal.maskClosable===""?!0:e.$VIEWUI.modal.maskClosable}},title:{type:String},width:{type:[Number,String],default:520},okText:{type:String},cancelText:{type:String},loading:{type:Boolean,default:!1},styles:{type:Object,default(){return{}}},className:{type:String},footerHide:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},transitionNames:{type:Array,default(){return["ease","fade"]}},transfer:{type:Boolean,default(){const e=ot().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.transfer===""?!0:e.$VIEWUI.transfer}},fullscreen:{type:Boolean,default:!1},mask:{type:Boolean,default:!0},draggable:{type:Boolean,default:!1},sticky:{type:Boolean,default:!1},stickyDistance:{type:Number,default:10},resetDragPosition:{type:Boolean,default:!1},zIndex:{type:Number,default:1e3},beforeClose:Function,render:Function},data(){return{prefixCls:St,wrapShow:!1,showHead:!0,buttonLoading:!1,visible:this.modelValue,dragData:ga(Xs),modalIndex:this.handleGetModalIndex(),isMouseTriggerIn:!1,id:qc(6),tableList:[],sliderList:[]}},computed:{wrapClasses(){return[`${St}-wrap`,{[`${St}-hidden`]:!this.wrapShow,[`${this.className}`]:!!this.className,[`${St}-no-mask`]:!this.showMask}]},wrapStyles(){return{zIndex:this.modalIndex+this.zIndex}},maskClasses(){return`${St}-mask`},classes(){return[`${St}`,{[`${St}-fullscreen`]:this.fullscreen,[`${St}-fullscreen-no-header`]:this.fullscreen&&!this.showHead,[`${St}-fullscreen-no-footer`]:this.fullscreen&&this.footerHide}]},contentClasses(){return[`${St}-content`,{[`${St}-content-no-mask`]:!this.showMask,[`${St}-content-drag`]:this.draggable&&!this.fullscreen,[`${St}-content-dragging`]:this.draggable&&this.dragData.dragging}]},mainStyles(){let e={};const t=parseInt(this.width),n=this.dragData.x!==null?{top:0}:{width:t<=100?`${t}%`:`${t}px`},r=this.styles?this.styles:{};return Object.assign(e,n,r),e},contentStyles(){let e={};if(this.draggable&&!this.fullscreen){const t=this.styles.top?parseFloat(this.styles.top):0,n=this.styles.left?parseFloat(this.styles.left):0;this.dragData.x!==null&&(e.left=`${this.dragData.x-n}px`),this.dragData.y!==null&&(e.top=`${this.dragData.y}px`),this.dragData.y!==null&&(e.top=`${this.dragData.y-t}px`);const r=parseInt(this.width),i={width:r<=100?`${r}%`:`${r}px`};Object.assign(e,i)}return e},localeOkText(){return this.okText===void 0?this.t("i.modal.okText"):this.okText},localeCancelText(){return this.cancelText===void 0?this.t("i.modal.cancelText"):this.cancelText},showMask(){return this.mask}},methods:{close(){if(!this.beforeClose)return this.handleClose();const e=this.beforeClose();e&&e.then?e.then(()=>{this.handleClose()}):this.handleClose()},handleClose(){this.visible=!1,this.$emit("update:modelValue",!1),this.$emit("on-cancel")},handleMask(){this.maskClosable&&this.showMask&&this.close()},handleWrapClick(e){if(this.isMouseTriggerIn){this.isMouseTriggerIn=!1;return}const t=e.target.getAttribute("class");t&&t.indexOf(`${St}-wrap`)>-1&&this.handleMask()},handleMousedown(){this.isMouseTriggerIn=!0},cancel(){this.close()},ok(){this.loading?this.buttonLoading=!0:(this.visible=!1,this.$emit("update:modelValue",!1)),this.$emit("on-ok")},EscClose(e){if(this.visible&&this.closable&&e.keyCode===27){const n=this.$root.modalList.map(r=>r.modal).filter(r=>r.$data.visible&&r.$props.closable).sort((r,i)=>r.$data.modalIndex<i.$data.modalIndex?1:-1)[0];setTimeout(()=>{n.close()},0)}},animationFinish(){this.$emit("on-hidden")},handleMoveStart(e){if(!this.draggable||this.fullscreen)return!1;const n=this.$refs.content.getBoundingClientRect();this.dragData.rect=n,this.dragData.x=n.x||n.left,this.dragData.y=n.y||n.top;const r={x:e.clientX,y:e.clientY};this.dragData.dragX=r.x,this.dragData.dragY=r.y,this.dragData.dragging=!0,An(window,"mousemove",this.handleMoveMove),An(window,"mouseup",this.handleMoveEnd)},handleMoveMove(e){if(!this.dragData.dragging||this.fullscreen)return!1;const t={x:e.clientX,y:e.clientY},n={x:t.x-this.dragData.dragX,y:t.y-this.dragData.dragY};if(qe&&this.sticky){const r=document.documentElement.clientWidth,i=document.documentElement.clientHeight;this.dragData.x+n.x<=this.stickyDistance&&n.x<0?this.dragData.x=0:this.dragData.x+this.dragData.rect.width-r>-this.stickyDistance&&n.x>0?this.dragData.x=r-this.dragData.rect.width:this.dragData.x+=n.x,this.dragData.y+n.y<=this.stickyDistance&&n.y<0?this.dragData.y=0:this.dragData.y+this.dragData.rect.height-i>-this.stickyDistance&&n.y>0?this.dragData.y=i-this.dragData.rect.height:this.dragData.y+=n.y}else this.dragData.x+=n.x,this.dragData.y+=n.y;this.dragData.dragX=t.x,this.dragData.dragY=t.y},handleMoveEnd(){this.dragData.dragging=!1,gn(window,"mousemove",this.handleMoveMove),gn(window,"mouseup",this.handleMoveEnd)},handleGetModalIndex(){return Pa(),Ii},handleClickModal(){if(this.draggable){if(ia!==this.lastVisibleIndex){this.lastVisibleIndex=ia;return}this.modalIndex=this.handleGetModalIndex()}},addModal(){const e=this.$root;e.modalList||(e.modalList=[]),e.modalList.push({id:this.id,modal:this})},removeModal(){const e=this.$root;if(!e.modalList)return;const t=e.modalList.findIndex(n=>n.id===this.id);e.modalList.splice(t,1)}},watch:{modelValue(e){this.visible=e},visible(e){e===!1?(this.buttonLoading=!1,this.timer=setTimeout(()=>{this.wrapShow=!1,this.removeScrollEffect()},300)):(this.lastVisible!==e&&(this.modalIndex=this.handleGetModalIndex(),iy()),this.timer&&clearTimeout(this.timer),this.wrapShow=!0,this.scrollable||this.addScrollEffect()),this.tableList.forEach(t=>{t.table.handleOnVisibleChange(e)}),this.sliderList.forEach(t=>{t.slider.handleOnVisibleChange(e)}),this.$emit("on-visible-change",e),this.lastVisible=e,this.lastVisibleIndex=ia,e&&this.resetDragPosition&&(this.dragData=ga(Xs))},loading(e){e||(this.buttonLoading=!1)},scrollable(e){e?this.removeScrollEffect():this.addScrollEffect()},title(e){this.$slots.header===void 0&&(this.showHead=!!e)}},mounted(){this.visible&&(this.wrapShow=!0);let e=!0;this.$slots.header===void 0&&!this.title&&(e=!1),this.showHead=e,this.addModal(),qe&&document.addEventListener("keydown",this.EscClose)},beforeUnmount(){this.removeModal(),qe&&document.removeEventListener("keydown",this.EscClose),this.removeScrollEffect()}};function H0(e,t,n,r,i,a){const o=qt("Icon"),u=qt("i-button");return Y(),st(ul,{to:"body",disabled:!n.transfer},[R(Gt,{name:n.transitionNames[1]},{default:Fe(()=>[a.showMask?Qt((Y(),de("div",{key:0,class:ce(a.maskClasses),style:Ge(a.wrapStyles),onClick:t[0]||(t[0]=(...y)=>a.handleMask&&a.handleMask(...y))},null,6)),[[Kt,i.visible]]):Ee("",!0)]),_:1},8,["name"]),fe("div",{class:ce(a.wrapClasses),style:Ge(a.wrapStyles),onClick:t[5]||(t[5]=(...y)=>a.handleWrapClick&&a.handleWrapClick(...y))},[R(Gt,{name:n.transitionNames[0],onAfterLeave:a.animationFinish},{default:Fe(()=>[Qt(fe("div",Fa(e.$attrs,{class:a.classes,style:a.mainStyles,onMousedown:t[4]||(t[4]=(...y)=>a.handleMousedown&&a.handleMousedown(...y))}),[fe("div",{class:ce(a.contentClasses),ref:"content",style:Ge(a.contentStyles),onClick:t[3]||(t[3]=(...y)=>a.handleClickModal&&a.handleClickModal(...y))},[n.closable?(Y(),de("a",{key:0,class:ce([i.prefixCls+"-close"]),onClick:t[1]||(t[1]=(...y)=>a.close&&a.close(...y))},[Se(e.$slots,"close",{},()=>[R(o,{type:"ios-close"})])],2)):Ee("",!0),i.showHead?(Y(),de("div",{key:1,class:ce([i.prefixCls+"-header"]),onMousedown:t[2]||(t[2]=(...y)=>a.handleMoveStart&&a.handleMoveStart(...y))},[Se(e.$slots,"header",{},()=>[fe("div",{class:ce([i.prefixCls+"-header-inner"])},Bt(n.title),3)])],34)):Ee("",!0),fe("div",{class:ce([i.prefixCls+"-body"])},[Se(e.$slots,"default")],2),n.footerHide?Ee("",!0):(Y(),de("div",{key:2,class:ce([i.prefixCls+"-footer"])},[Se(e.$slots,"footer",{},()=>[R(u,{type:"text",onClick:a.cancel},{default:Fe(()=>[Nn(Bt(a.localeCancelText),1)]),_:1},8,["onClick"]),R(u,{type:"primary",loading:i.buttonLoading,onClick:a.ok},{default:Fe(()=>[Nn(Bt(a.localeOkText),1)]),_:1},8,["loading","onClick"])])],2))],6)],16),[[Kt,i.visible]])]),_:3},8,["name","onAfterLeave"])],6)],8,["disabled"])}const Dt=dt(W0,[["render",H0]]),hn="ivu-modal-confirm";Dt.newInstance=e=>{if(!qe)return;const t=e||{},n=document.createElement("div");document.body.appendChild(n);let r=null;const i=Sr({mixins:[ml],data(){return Object.assign({},t,{visible:!1,width:416,title:"",body:"",iconType:"",iconName:"",okText:void 0,cancelText:void 0,showCancel:!1,loading:!1,buttonLoading:!1,scrollable:!1,closable:!1,closing:!1})},render(){let o=[];this.showCancel&&o.push(je(kt,{type:"text",onClick:this.cancel},()=>this.localeCancelText)),o.push(je(kt,{type:"primary",loading:this.buttonLoading,onClick:this.ok},()=>this.localeOkText));let u;this.render?u=je("div",{class:`${hn}-body ${hn}-body-render`},[this.render(je)]):u=je("div",{class:`${hn}-body`},[je("div",{innerHTML:this.body})]);let y;return this.title&&(y=je("div",{class:`${hn}-head`},[je("div",{class:this.iconTypeCls},[je("i",{class:this.iconNameCls})]),je("div",{class:`${hn}-head-title`,innerHTML:this.title})])),je(Dt,Object.assign({},t,{width:this.width,scrollable:this.scrollable,closable:this.closable,ref:"modal"},{modelValue:this.visible,"onUpdate:modelValue":p=>this.visible=p,"onOn-cancel":this.cancel}),()=>je("div",{class:hn},[y,u,je("div",{class:`${hn}-footer`},o)]))},computed:{iconTypeCls(){return[`${hn}-head-icon`,`${hn}-head-icon-${this.iconType}`]},iconNameCls(){return["ivu-icon",`ivu-icon-${this.iconName}`]},localeOkText(){return this.okText?this.okText:this.t("i.modal.okText")},localeCancelText(){return this.cancelText?this.cancelText:this.t("i.modal.cancelText")}},methods:{cancel(){this.closing||(this.$refs.modal.visible=!1,this.buttonLoading=!1,this.onCancel(),this.remove())},ok(){this.closing||(this.loading?this.buttonLoading=!0:(this.$refs.modal.visible=!1,this.remove()),this.onOk())},remove(){this.closing=!0,setTimeout(()=>{this.closing=!1,this.destroy()},300)},destroy(){i.unmount(),document.body.removeChild(n),this.onRemove()},onOk(){},onCancel(){},onRemove(){}},created(){r=ot()}});i.mount(n);const a=r.refs.modal;return{show(o){switch(a.$parent.showCancel=o.showCancel,a.$parent.iconType=o.icon,o.icon){case"info":a.$parent.iconName="ios-information-circle";break;case"success":a.$parent.iconName="ios-checkmark-circle";break;case"warning":a.$parent.iconName="ios-alert";break;case"error":a.$parent.iconName="ios-close-circle";break;case"confirm":a.$parent.iconName="ios-help-circle";break}"width"in o&&(a.$parent.width=o.width),"closable"in o&&(a.$parent.closable=o.closable),"title"in o&&(a.$parent.title=o.title),"content"in o&&(a.$parent.body=o.content),"okText"in o&&(a.$parent.okText=o.okText),"cancelText"in o&&(a.$parent.cancelText=o.cancelText),"onCancel"in o&&(a.$parent.onCancel=o.onCancel),"onOk"in o&&(a.$parent.onOk=o.onOk),"loading"in o&&(a.$parent.loading=o.loading),"scrollable"in o&&(a.$parent.scrollable=o.scrollable),a.$parent.onRemove=o.onRemove,a.visible=!0},remove(){a.visible=!1,a.$parent.buttonLoading=!1,a.$parent.remove()},component:a}};let hi;function tu(e=void 0,t=!0){return hi=hi||Dt.newInstance({closable:!1,maskClosable:!1,footerHide:!0,render:e,lockScroll:t}),hi}function Ti(e){const t="render"in e?e.render:void 0,n="lockScroll"in e?e.lockScroll:!0;let r=tu(t,n);e.onRemove=function(){hi=null},r.show(e)}Dt.info=function(e={}){return e.icon="info",e.showCancel=!1,Ti(e)};Dt.success=function(e={}){return e.icon="success",e.showCancel=!1,Ti(e)};Dt.warning=function(e={}){return e.icon="warning",e.showCancel=!1,Ti(e)};Dt.error=function(e={}){return e.icon="error",e.showCancel=!1,Ti(e)};Dt.confirm=function(e={}){return e.icon="confirm",e.showCancel=!0,Ti(e)};Dt.remove=function(){if(!hi)return!1;tu().remove()};var Q0={exports:{}};/*! @preserve
 * numeral.js
 * version : 2.0.6
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */(function(e){(function(t,n){e.exports?e.exports=n():t.numeral=n()})(On,function(){var t,n,r="2.0.6",i={},a={},o={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},u={currentLocale:o.currentLocale,zeroFormat:o.zeroFormat,nullFormat:o.nullFormat,defaultFormat:o.defaultFormat,scalePercentBy100:o.scalePercentBy100};function y(p,m){this._input=p,this._value=m}return t=function(p){var m,v,h,E;if(t.isNumeral(p))m=p.value();else if(p===0||typeof p>"u")m=0;else if(p===null||n.isNaN(p))m=null;else if(typeof p=="string")if(u.zeroFormat&&p===u.zeroFormat)m=0;else if(u.nullFormat&&p===u.nullFormat||!p.replace(/[^0-9]+/g,"").length)m=null;else{for(v in i)if(E=typeof i[v].regexps.unformat=="function"?i[v].regexps.unformat():i[v].regexps.unformat,E&&p.match(E)){h=i[v].unformat;break}h=h||t._.stringToNumber,m=h(p)}else m=Number(p)||null;return new y(p,m)},t.version=r,t.isNumeral=function(p){return p instanceof y},t._=n={numberToFormat:function(p,m,v){var h=a[t.options.currentLocale],E=!1,k=!1,b=0,I="",D=1e12,_=1e9,F=1e6,T=1e3,Q="",M=!1,j,$,W,z,Te,le,J;if(p=p||0,$=Math.abs(p),t._.includes(m,"(")?(E=!0,m=m.replace(/[\(|\)]/g,"")):(t._.includes(m,"+")||t._.includes(m,"-"))&&(Te=t._.includes(m,"+")?m.indexOf("+"):p<0?m.indexOf("-"):-1,m=m.replace(/[\+|\-]/g,"")),t._.includes(m,"a")&&(j=m.match(/a(k|m|b|t)?/),j=j?j[1]:!1,t._.includes(m," a")&&(I=" "),m=m.replace(new RegExp(I+"a[kmbt]?"),""),$>=D&&!j||j==="t"?(I+=h.abbreviations.trillion,p=p/D):$<D&&$>=_&&!j||j==="b"?(I+=h.abbreviations.billion,p=p/_):$<_&&$>=F&&!j||j==="m"?(I+=h.abbreviations.million,p=p/F):($<F&&$>=T&&!j||j==="k")&&(I+=h.abbreviations.thousand,p=p/T)),t._.includes(m,"[.]")&&(k=!0,m=m.replace("[.]",".")),W=p.toString().split(".")[0],z=m.split(".")[1],le=m.indexOf(","),b=(m.split(".")[0].split(",")[0].match(/0/g)||[]).length,z?(t._.includes(z,"[")?(z=z.replace("]",""),z=z.split("["),Q=t._.toFixed(p,z[0].length+z[1].length,v,z[1].length)):Q=t._.toFixed(p,z.length,v),W=Q.split(".")[0],t._.includes(Q,".")?Q=h.delimiters.decimal+Q.split(".")[1]:Q="",k&&Number(Q.slice(1))===0&&(Q="")):W=t._.toFixed(p,0,v),I&&!j&&Number(W)>=1e3&&I!==h.abbreviations.trillion)switch(W=String(Number(W)/1e3),I){case h.abbreviations.thousand:I=h.abbreviations.million;break;case h.abbreviations.million:I=h.abbreviations.billion;break;case h.abbreviations.billion:I=h.abbreviations.trillion;break}if(t._.includes(W,"-")&&(W=W.slice(1),M=!0),W.length<b)for(var X=b-W.length;X>0;X--)W="0"+W;return le>-1&&(W=W.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+h.delimiters.thousands)),m.indexOf(".")===0&&(W=""),J=W+Q+(I||""),E?J=(E&&M?"(":"")+J+(E&&M?")":""):Te>=0?J=Te===0?(M?"-":"+")+J:J+(M?"-":"+"):M&&(J="-"+J),J},stringToNumber:function(p){var m=a[u.currentLocale],v=p,h={thousand:3,million:6,billion:9,trillion:12},E,k,b;if(u.zeroFormat&&p===u.zeroFormat)k=0;else if(u.nullFormat&&p===u.nullFormat||!p.replace(/[^0-9]+/g,"").length)k=null;else{k=1,m.delimiters.decimal!=="."&&(p=p.replace(/\./g,"").replace(m.delimiters.decimal,"."));for(E in h)if(b=new RegExp("[^a-zA-Z]"+m.abbreviations[E]+"(?:\\)|(\\"+m.currency.symbol+")?(?:\\))?)?$"),v.match(b)){k*=Math.pow(10,h[E]);break}k*=(p.split("-").length+Math.min(p.split("(").length-1,p.split(")").length-1))%2?1:-1,p=p.replace(/[^0-9\.]+/g,""),k*=Number(p)}return k},isNaN:function(p){return typeof p=="number"&&isNaN(p)},includes:function(p,m){return p.indexOf(m)!==-1},insert:function(p,m,v){return p.slice(0,v)+m+p.slice(v)},reduce:function(p,m){if(this===null)throw new TypeError("Array.prototype.reduce called on null or undefined");if(typeof m!="function")throw new TypeError(m+" is not a function");var v=Object(p),h=v.length>>>0,E=0,k;if(arguments.length===3)k=arguments[2];else{for(;E<h&&!(E in v);)E++;if(E>=h)throw new TypeError("Reduce of empty array with no initial value");k=v[E++]}for(;E<h;E++)E in v&&(k=m(k,v[E],E,v));return k},multiplier:function(p){var m=p.toString().split(".");return m.length<2?1:Math.pow(10,m[1].length)},correctionFactor:function(){var p=Array.prototype.slice.call(arguments);return p.reduce(function(m,v){var h=n.multiplier(v);return m>h?m:h},1)},toFixed:function(p,m,v,h){var E=p.toString().split("."),k=m-(h||0),b,I,D,_;return E.length===2?b=Math.min(Math.max(E[1].length,k),m):b=k,D=Math.pow(10,b),_=(v(p+"e+"+b)/D).toFixed(b),h>m-b&&(I=new RegExp("\\.?0{1,"+(h-(m-b))+"}$"),_=_.replace(I,"")),_}},t.options=u,t.formats=i,t.locales=a,t.locale=function(p){return p&&(u.currentLocale=p.toLowerCase()),u.currentLocale},t.localeData=function(p){if(!p)return a[u.currentLocale];if(p=p.toLowerCase(),!a[p])throw new Error("Unknown locale : "+p);return a[p]},t.reset=function(){for(var p in o)u[p]=o[p]},t.zeroFormat=function(p){u.zeroFormat=typeof p=="string"?p:null},t.nullFormat=function(p){u.nullFormat=typeof p=="string"?p:null},t.defaultFormat=function(p){u.defaultFormat=typeof p=="string"?p:"0.0"},t.register=function(p,m,v){if(m=m.toLowerCase(),this[p+"s"][m])throw new TypeError(m+" "+p+" already registered.");return this[p+"s"][m]=v,v},t.validate=function(p,m){var v,h,E,k,b,I,D,_;if(typeof p!="string"&&(p+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",p)),p=p.trim(),p.match(/^\d+$/))return!0;if(p==="")return!1;try{D=t.localeData(m)}catch{D=t.localeData(t.locale())}return E=D.currency.symbol,b=D.abbreviations,v=D.delimiters.decimal,D.delimiters.thousands==="."?h="\\.":h=D.delimiters.thousands,_=p.match(/^[^\d]+/),_!==null&&(p=p.substr(1),_[0]!==E)||(_=p.match(/[^\d]+$/),_!==null&&(p=p.slice(0,-1),_[0]!==b.thousand&&_[0]!==b.million&&_[0]!==b.billion&&_[0]!==b.trillion))?!1:(I=new RegExp(h+"{2}"),p.match(/[^\d.,]/g)?!1:(k=p.split(v),k.length>2?!1:k.length<2?!!k[0].match(/^\d+.*\d$/)&&!k[0].match(I):k[0].length===1?!!k[0].match(/^\d+$/)&&!k[0].match(I)&&!!k[1].match(/^\d+$/):!!k[0].match(/^\d+.*\d$/)&&!k[0].match(I)&&!!k[1].match(/^\d+$/)))},t.fn=y.prototype={clone:function(){return t(this)},format:function(p,m){var v=this._value,h=p||u.defaultFormat,E,k,b;if(m=m||Math.round,v===0&&u.zeroFormat!==null)k=u.zeroFormat;else if(v===null&&u.nullFormat!==null)k=u.nullFormat;else{for(E in i)if(h.match(i[E].regexps.format)){b=i[E].format;break}b=b||t._.numberToFormat,k=b(v,h,m)}return k},value:function(){return this._value},input:function(){return this._input},set:function(p){return this._value=Number(p),this},add:function(p){var m=n.correctionFactor.call(null,this._value,p);function v(h,E,k,b){return h+Math.round(m*E)}return this._value=n.reduce([this._value,p],v,0)/m,this},subtract:function(p){var m=n.correctionFactor.call(null,this._value,p);function v(h,E,k,b){return h-Math.round(m*E)}return this._value=n.reduce([p],v,Math.round(this._value*m))/m,this},multiply:function(p){function m(v,h,E,k){var b=n.correctionFactor(v,h);return Math.round(v*b)*Math.round(h*b)/Math.round(b*b)}return this._value=n.reduce([this._value,p],m,1),this},divide:function(p){function m(v,h,E,k){var b=n.correctionFactor(v,h);return Math.round(v*b)/Math.round(h*b)}return this._value=n.reduce([this._value,p],m),this},difference:function(p){return Math.abs(t(this._value).subtract(p).value())}},t.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(p){var m=p%10;return~~(p%100/10)===1?"th":m===1?"st":m===2?"nd":m===3?"rd":"th"},currency:{symbol:"$"}}),function(){t.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(p,m,v){var h=t._.includes(m," BPS")?" ":"",E;return p=p*1e4,m=m.replace(/\s?BPS/,""),E=t._.numberToFormat(p,m,v),t._.includes(E,")")?(E=E.split(""),E.splice(-1,0,h+"BPS"),E=E.join("")):E=E+h+"BPS",E},unformat:function(p){return+(t._.stringToNumber(p)*1e-4).toFixed(15)}})}(),function(){var p={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]},m={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},v=p.suffixes.concat(m.suffixes.filter(function(E){return p.suffixes.indexOf(E)<0})),h=v.join("|");h="("+h.replace("B","B(?!PS)")+")",t.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(h)},format:function(E,k,b){var I,D=t._.includes(k,"ib")?m:p,_=t._.includes(k," b")||t._.includes(k," ib")?" ":"",F,T,Q;for(k=k.replace(/\s?i?b/,""),F=0;F<=D.suffixes.length;F++)if(T=Math.pow(D.base,F),Q=Math.pow(D.base,F+1),E===null||E===0||E>=T&&E<Q){_+=D.suffixes[F],T>0&&(E=E/T);break}return I=t._.numberToFormat(E,k,b),I+_},unformat:function(E){var k=t._.stringToNumber(E),b,I;if(k){for(b=p.suffixes.length-1;b>=0;b--){if(t._.includes(E,p.suffixes[b])){I=Math.pow(p.base,b);break}if(t._.includes(E,m.suffixes[b])){I=Math.pow(m.base,b);break}}k*=I||1}return k}})}(),function(){t.register("format","currency",{regexps:{format:/(\$)/},format:function(p,m,v){var h=t.locales[t.options.currentLocale],E={before:m.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:m.match(/([\+|\-|\)|\s|\$]*)$/)[0]},k,b,I;for(m=m.replace(/\s?\$\s?/,""),k=t._.numberToFormat(p,m,v),p>=0?(E.before=E.before.replace(/[\-\(]/,""),E.after=E.after.replace(/[\-\)]/,"")):p<0&&!t._.includes(E.before,"-")&&!t._.includes(E.before,"(")&&(E.before="-"+E.before),I=0;I<E.before.length;I++)switch(b=E.before[I],b){case"$":k=t._.insert(k,h.currency.symbol,I);break;case" ":k=t._.insert(k," ",I+h.currency.symbol.length-1);break}for(I=E.after.length-1;I>=0;I--)switch(b=E.after[I],b){case"$":k=I===E.after.length-1?k+h.currency.symbol:t._.insert(k,h.currency.symbol,-(E.after.length-(1+I)));break;case" ":k=I===E.after.length-1?k+" ":t._.insert(k," ",-(E.after.length-(1+I)+h.currency.symbol.length-1));break}return k}})}(),function(){t.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(p,m,v){var h,E=typeof p=="number"&&!t._.isNaN(p)?p.toExponential():"0e+0",k=E.split("e");return m=m.replace(/e[\+|\-]{1}0/,""),h=t._.numberToFormat(Number(k[0]),m,v),h+"e"+k[1]},unformat:function(p){var m=t._.includes(p,"e+")?p.split("e+"):p.split("e-"),v=Number(m[0]),h=Number(m[1]);h=t._.includes(p,"e-")?h*=-1:h;function E(k,b,I,D){var _=t._.correctionFactor(k,b),F=k*_*(b*_)/(_*_);return F}return t._.reduce([v,Math.pow(10,h)],E,1)}})}(),function(){t.register("format","ordinal",{regexps:{format:/(o)/},format:function(p,m,v){var h=t.locales[t.options.currentLocale],E,k=t._.includes(m," o")?" ":"";return m=m.replace(/\s?o/,""),k+=h.ordinal(p),E=t._.numberToFormat(p,m,v),E+k}})}(),function(){t.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(p,m,v){var h=t._.includes(m," %")?" ":"",E;return t.options.scalePercentBy100&&(p=p*100),m=m.replace(/\s?\%/,""),E=t._.numberToFormat(p,m,v),t._.includes(E,")")?(E=E.split(""),E.splice(-1,0,h+"%"),E=E.join("")):E=E+h+"%",E},unformat:function(p){var m=t._.stringToNumber(p);return t.options.scalePercentBy100?m*.01:m}})}(),function(){t.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(p,m,v){var h=Math.floor(p/60/60),E=Math.floor((p-h*60*60)/60),k=Math.round(p-h*60*60-E*60);return h+":"+(E<10?"0"+E:E)+":"+(k<10?"0"+k:k)},unformat:function(p){var m=p.split(":"),v=0;return m.length===3?(v=v+Number(m[0])*60*60,v=v+Number(m[1])*60,v=v+Number(m[2])):m.length===2&&(v=v+Number(m[0])*60,v=v+Number(m[1])),Number(v)}})}(),t})})(Q0);ny();const or="ivu-switch",Y0={name:"iSwitch",mixins:[Si],emits:["update:modelValue","on-change"],props:{modelValue:{type:[String,Number,Boolean],default:!1},trueValue:{type:[String,Number,Boolean],default:!0},falseValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:!1},size:{validator(e){return Ze(e,["large","small","default"])},default(){const e=ot().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.size===""?"default":e.$VIEWUI.size}},name:{type:String},loading:{type:Boolean,default:!1},trueColor:{type:String},falseColor:{type:String},beforeChange:Function},data(){return{currentValue:this.modelValue}},computed:{wrapClasses(){return[`${or}`,{[`${or}-checked`]:this.currentValue===this.trueValue,[`${or}-disabled`]:this.itemDisabled,[`${or}-${this.size}`]:!!this.size,[`${or}-loading`]:this.loading}]},wrapStyles(){let e={};return this.trueColor&&this.currentValue===this.trueValue?(e["border-color"]=this.trueColor,e["background-color"]=this.trueColor):this.falseColor&&this.currentValue===this.falseValue&&(e["border-color"]=this.falseColor,e["background-color"]=this.falseColor),e},innerClasses(){return`${or}-inner`}},methods:{handleToggle(){const e=this.currentValue===this.trueValue?this.falseValue:this.trueValue;this.currentValue=e,this.$emit("update:modelValue",e),this.$emit("on-change",e),this.handleFormItemChange("change",e)},toggle(e){if(e.preventDefault(),this.itemDisabled||this.loading)return!1;if(!this.beforeChange)return this.handleToggle();const t=this.beforeChange();t&&t.then?t.then(()=>{this.handleToggle()}):this.handleToggle()}},watch:{modelValue(e){if(e!==this.trueValue&&e!==this.falseValue&&e!==null)throw"Value should be trueValue or falseValue.";this.currentValue=e}}},K0=["name","value"];function X0(e,t,n,r,i,a){return Y(),de("span",{tabindex:"0",class:ce(a.wrapClasses),style:Ge(a.wrapStyles),onClick:t[0]||(t[0]=(...o)=>a.toggle&&a.toggle(...o)),onKeydown:t[1]||(t[1]=Do((...o)=>a.toggle&&a.toggle(...o),["space"]))},[fe("input",{type:"hidden",name:n.name,value:i.currentValue},null,8,K0),fe("span",{class:ce(a.innerClasses)},[i.currentValue===n.trueValue?Se(e.$slots,"open",{key:0}):Ee("",!0),i.currentValue===n.falseValue?Se(e.$slots,"close",{key:1}):Ee("",!0)],2)],38)}const Z0=dt(Y0,[["render",X0]]);/*!
 * Viewer.js v1.11.3
 * https://fengyuanchen.github.io/viewerjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2023-03-05T07:01:17.741Z
 */function Zs(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Al(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zs(Object(n),!0).forEach(function(r){eg(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zs(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Po(e){"@babel/helpers - typeof";return Po=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Po(e)}function G0(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Gs(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,nu(r.key),r)}}function J0(e,t,n){return t&&Gs(e.prototype,t),n&&Gs(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function eg(e,t,n){return t=nu(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function tg(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function nu(e){var t=tg(e,"string");return typeof t=="symbol"?t:String(t)}var Js={backdrop:!0,button:!0,navbar:!0,title:!0,toolbar:!0,className:"",container:"body",filter:null,fullscreen:!0,inheritedAttributes:["crossOrigin","decoding","isMap","loading","referrerPolicy","sizes","srcset","useMap"],initialCoverage:.9,initialViewIndex:0,inline:!1,interval:5e3,keyboard:!0,focus:!0,loading:!0,loop:!0,minWidth:200,minHeight:100,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,slideOnTouch:!0,toggleOnDblclick:!0,tooltip:!0,transition:!0,zIndex:2015,zIndexInline:0,zoomRatio:.1,minZoomRatio:.01,maxZoomRatio:100,url:"src",ready:null,show:null,shown:null,hide:null,hidden:null,view:null,viewed:null,move:null,moved:null,rotate:null,rotated:null,scale:null,scaled:null,zoom:null,zoomed:null,play:null,stop:null},ng='<div class="viewer-container" tabindex="-1" touch-action="none"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><div class="viewer-toolbar"></div><div class="viewer-navbar"><ul class="viewer-list" role="navigation"></ul></div></div><div class="viewer-tooltip" role="alert" aria-hidden="true"></div><div class="viewer-button" data-viewer-action="mix" role="button"></div><div class="viewer-player"></div></div>',qa=typeof window<"u"&&typeof window.document<"u",vn=qa?window:{},Ar=qa&&vn.document.documentElement?"ontouchstart"in vn.document.documentElement:!1,gl=qa?"PointerEvent"in vn:!1,Ie="viewer",la="move",ru="switch",oi="zoom",Yi="".concat(Ie,"-active"),rg="".concat(Ie,"-close"),sa="".concat(Ie,"-fade"),qo="".concat(Ie,"-fixed"),ig="".concat(Ie,"-fullscreen"),ed="".concat(Ie,"-fullscreen-exit"),Qn="".concat(Ie,"-hide"),ag="".concat(Ie,"-hide-md-down"),og="".concat(Ie,"-hide-sm-down"),lg="".concat(Ie,"-hide-xs-down"),Ft="".concat(Ie,"-in"),mi="".concat(Ie,"-invisible"),gr="".concat(Ie,"-loading"),sg="".concat(Ie,"-move"),td="".concat(Ie,"-open"),lr="".concat(Ie,"-show"),tt="".concat(Ie,"-transition"),xr="click",$o="dblclick",nd="dragstart",rd="focusin",id="keydown",Pt="load",Gn="error",dg=Ar?"touchend touchcancel":"mouseup",cg=Ar?"touchmove":"mousemove",ug=Ar?"touchstart":"mousedown",ad=gl?"pointerdown":ug,od=gl?"pointermove":cg,ld=gl?"pointerup pointercancel":dg,sd="resize",Wt="transitionend",dd="wheel",cd="ready",ud="show",pd="shown",fd="hide",hd="hidden",md="view",Ci="viewed",yd="move",Ad="moved",gd="rotate",bd="rotated",vd="scale",wd="scaled",xd="zoom",Ed="zoomed",Cd="play",kd="stop",Ca="".concat(Ie,"Action"),bl=/\s\s*/,Ki=["zoom-in","zoom-out","one-to-one","reset","prev","play","next","rotate-left","rotate-right","flip-horizontal","flip-vertical"];function ki(e){return typeof e=="string"}var pg=Number.isNaN||vn.isNaN;function Xe(e){return typeof e=="number"&&!pg(e)}function dr(e){return typeof e>"u"}function Er(e){return Po(e)==="object"&&e!==null}var fg=Object.prototype.hasOwnProperty;function cr(e){if(!Er(e))return!1;try{var t=e.constructor,n=t.prototype;return t&&n&&fg.call(n,"isPrototypeOf")}catch{return!1}}function Ve(e){return typeof e=="function"}function We(e,t){if(e&&Ve(t))if(Array.isArray(e)||Xe(e.length)){var n=e.length,r;for(r=0;r<n&&t.call(e,e[r],r,e)!==!1;r+=1);}else Er(e)&&Object.keys(e).forEach(function(i){t.call(e,e[i],i,e)});return e}var Mt=Object.assign||function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return Er(t)&&r.length>0&&r.forEach(function(a){Er(a)&&Object.keys(a).forEach(function(o){t[o]=a[o]})}),t},hg=/^(?:width|height|left|top|marginLeft|marginTop)$/;function Xt(e,t){var n=e.style;We(t,function(r,i){hg.test(i)&&Xe(r)&&(r+="px"),n[i]=r})}function mg(e){return ki(e)?e.replace(/&(?!amp;|quot;|#39;|lt;|gt;)/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):e}function sr(e,t){return!e||!t?!1:e.classList?e.classList.contains(t):e.className.indexOf(t)>-1}function we(e,t){if(!(!e||!t)){if(Xe(e.length)){We(e,function(r){we(r,t)});return}if(e.classList){e.classList.add(t);return}var n=e.className.trim();n?n.indexOf(t)<0&&(e.className="".concat(n," ").concat(t)):e.className=t}}function Ne(e,t){if(!(!e||!t)){if(Xe(e.length)){We(e,function(n){Ne(n,t)});return}if(e.classList){e.classList.remove(t);return}e.className.indexOf(t)>=0&&(e.className=e.className.replace(t,""))}}function Bi(e,t,n){if(t){if(Xe(e.length)){We(e,function(r){Bi(r,t,n)});return}n?we(e,t):Ne(e,t)}}var yg=/([a-z\d])([A-Z])/g;function vl(e){return e.replace(yg,"$1-$2").toLowerCase()}function ur(e,t){return Er(e[t])?e[t]:e.dataset?e.dataset[t]:e.getAttribute("data-".concat(vl(t)))}function Vo(e,t,n){Er(n)?e[t]=n:e.dataset?e.dataset[t]=n:e.setAttribute("data-".concat(vl(t)),n)}var iu=function(){var e=!1;if(qa){var t=!1,n=function(){},r=Object.defineProperty({},"once",{get:function(){return e=!0,t},set:function(a){t=a}});vn.addEventListener("test",n,r),vn.removeEventListener("test",n,r)}return e}();function Ue(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},i=n;t.trim().split(bl).forEach(function(a){if(!iu){var o=e.listeners;o&&o[a]&&o[a][n]&&(i=o[a][n],delete o[a][n],Object.keys(o[a]).length===0&&delete o[a],Object.keys(o).length===0&&delete e.listeners)}e.removeEventListener(a,i,r)})}function xe(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},i=n;t.trim().split(bl).forEach(function(a){if(r.once&&!iu){var o=e.listeners,u=o===void 0?{}:o;i=function(){delete u[a][n],e.removeEventListener(a,i,r);for(var p=arguments.length,m=new Array(p),v=0;v<p;v++)m[v]=arguments[v];n.apply(e,m)},u[a]||(u[a]={}),u[a][n]&&e.removeEventListener(a,u[a][n],r),u[a][n]=i,e.listeners=u}e.addEventListener(a,i,r)})}function it(e,t,n,r){var i;return Ve(Event)&&Ve(CustomEvent)?i=new CustomEvent(t,Al({bubbles:!0,cancelable:!0,detail:n},r)):(i=document.createEvent("CustomEvent"),i.initCustomEvent(t,!0,!0,n)),e.dispatchEvent(i)}function Ag(e){var t=e.getBoundingClientRect();return{left:t.left+(window.pageXOffset-document.documentElement.clientLeft),top:t.top+(window.pageYOffset-document.documentElement.clientTop)}}function da(e){var t=e.rotate,n=e.scaleX,r=e.scaleY,i=e.translateX,a=e.translateY,o=[];Xe(i)&&i!==0&&o.push("translateX(".concat(i,"px)")),Xe(a)&&a!==0&&o.push("translateY(".concat(a,"px)")),Xe(t)&&t!==0&&o.push("rotate(".concat(t,"deg)")),Xe(n)&&n!==1&&o.push("scaleX(".concat(n,")")),Xe(r)&&r!==1&&o.push("scaleY(".concat(r,")"));var u=o.length?o.join(" "):"none";return{WebkitTransform:u,msTransform:u,transform:u}}function gg(e){return ki(e)?decodeURIComponent(e.replace(/^.*\//,"").replace(/[?&#].*$/,"")):""}var fo=vn.navigator&&/(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(vn.navigator.userAgent);function au(e,t,n){var r=document.createElement("img");if(e.naturalWidth&&!fo)return n(e.naturalWidth,e.naturalHeight),r;var i=document.body||document.documentElement;return r.onload=function(){n(r.width,r.height),fo||i.removeChild(r)},We(t.inheritedAttributes,function(a){var o=e.getAttribute(a);o!==null&&r.setAttribute(a,o)}),r.src=e.src,fo||(r.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",i.appendChild(r)),r}function Xi(e){switch(e){case 2:return lg;case 3:return og;case 4:return ag;default:return""}}function bg(e){var t=Al({},e),n=[];return We(e,function(r,i){delete t[i],We(t,function(a){var o=Math.abs(r.startX-a.startX),u=Math.abs(r.startY-a.startY),y=Math.abs(r.endX-a.endX),p=Math.abs(r.endY-a.endY),m=Math.sqrt(o*o+u*u),v=Math.sqrt(y*y+p*p),h=(v-m)/m;n.push(h)})}),n.sort(function(r,i){return Math.abs(r)<Math.abs(i)}),n[0]}function Zi(e,t){var n=e.pageX,r=e.pageY,i={endX:n,endY:r};return t?i:Al({timeStamp:Date.now(),startX:n,startY:r},i)}function vg(e){var t=0,n=0,r=0;return We(e,function(i){var a=i.startX,o=i.startY;t+=a,n+=o,r+=1}),t/=r,n/=r,{pageX:t,pageY:n}}var wg={render:function(){this.initContainer(),this.initViewer(),this.initList(),this.renderViewer()},initBody:function(){var t=this.element.ownerDocument,n=t.body||t.documentElement;this.body=n,this.scrollbarWidth=window.innerWidth-t.documentElement.clientWidth,this.initialBodyPaddingRight=n.style.paddingRight,this.initialBodyComputedPaddingRight=window.getComputedStyle(n).paddingRight},initContainer:function(){this.containerData={width:window.innerWidth,height:window.innerHeight}},initViewer:function(){var t=this.options,n=this.parent,r;t.inline&&(r={width:Math.max(n.offsetWidth,t.minWidth),height:Math.max(n.offsetHeight,t.minHeight)},this.parentData=r),(this.fulled||!r)&&(r=this.containerData),this.viewerData=Mt({},r)},renderViewer:function(){this.options.inline&&!this.fulled&&Xt(this.viewer,this.viewerData)},initList:function(){var t=this,n=this.element,r=this.options,i=this.list,a=[];i.innerHTML="",We(this.images,function(o,u){var y=o.src,p=o.alt||gg(y),m=t.getImageURL(o);if(y||m){var v=document.createElement("li"),h=document.createElement("img");We(r.inheritedAttributes,function(E){var k=o.getAttribute(E);k!==null&&h.setAttribute(E,k)}),r.navbar&&(h.src=y||m),h.alt=p,h.setAttribute("data-original-url",m||y),v.setAttribute("data-index",u),v.setAttribute("data-viewer-action","view"),v.setAttribute("role","button"),r.keyboard&&v.setAttribute("tabindex",0),v.appendChild(h),i.appendChild(v),a.push(v)}}),this.items=a,We(a,function(o){var u=o.firstElementChild,y,p;Vo(u,"filled",!0),r.loading&&we(o,gr),xe(u,Pt,y=function(v){Ue(u,Gn,p),r.loading&&Ne(o,gr),t.loadImage(v)},{once:!0}),xe(u,Gn,p=function(){Ue(u,Pt,y),r.loading&&Ne(o,gr)},{once:!0})}),r.transition&&xe(n,Ci,function(){we(i,tt)},{once:!0})},renderList:function(){var t=this.index,n=this.items[t];if(n){var r=n.nextElementSibling,i=parseInt(window.getComputedStyle(r||n).marginLeft,10),a=n.offsetWidth,o=a+i;Xt(this.list,Mt({width:o*this.length-i},da({translateX:(this.viewerData.width-a)/2-o*t})))}},resetList:function(){var t=this.list;t.innerHTML="",Ne(t,tt),Xt(t,da({translateX:0}))},initImage:function(t){var n=this,r=this.options,i=this.image,a=this.viewerData,o=this.footer.offsetHeight,u=a.width,y=Math.max(a.height-o,o),p=this.imageData||{},m;this.imageInitializing={abort:function(){m.onload=null}},m=au(i,r,function(v,h){var E=v/h,k=Math.max(0,Math.min(1,r.initialCoverage)),b=u,I=y;n.imageInitializing=!1,y*E>u?I=u/E:b=y*E,k=Xe(k)?k:.9,b=Math.min(b*k,v),I=Math.min(I*k,h);var D=(u-b)/2,_=(y-I)/2,F={left:D,top:_,x:D,y:_,width:b,height:I,oldRatio:1,ratio:b/v,aspectRatio:E,naturalWidth:v,naturalHeight:h},T=Mt({},F);r.rotatable&&(F.rotate=p.rotate||0,T.rotate=0),r.scalable&&(F.scaleX=p.scaleX||1,F.scaleY=p.scaleY||1,T.scaleX=1,T.scaleY=1),n.imageData=F,n.initialImageData=T,t&&t()})},renderImage:function(t){var n=this,r=this.image,i=this.imageData;if(Xt(r,Mt({width:i.width,height:i.height,marginLeft:i.x,marginTop:i.y},da(i))),t)if((this.viewing||this.moving||this.rotating||this.scaling||this.zooming)&&this.options.transition&&sr(r,tt)){var a=function(){n.imageRendering=!1,t()};this.imageRendering={abort:function(){Ue(r,Wt,a)}},xe(r,Wt,a,{once:!0})}else t()},resetImage:function(){if(this.viewing||this.viewed){var t=this.image;this.viewing&&this.viewing.abort(),t.parentNode.removeChild(t),this.image=null}}},xg={bind:function(){var t=this.options,n=this.viewer,r=this.canvas,i=this.element.ownerDocument;xe(n,xr,this.onClick=this.click.bind(this)),xe(n,nd,this.onDragStart=this.dragstart.bind(this)),xe(r,ad,this.onPointerDown=this.pointerdown.bind(this)),xe(i,od,this.onPointerMove=this.pointermove.bind(this)),xe(i,ld,this.onPointerUp=this.pointerup.bind(this)),xe(i,id,this.onKeyDown=this.keydown.bind(this)),xe(window,sd,this.onResize=this.resize.bind(this)),t.zoomable&&t.zoomOnWheel&&xe(n,dd,this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),t.toggleOnDblclick&&xe(r,$o,this.onDblclick=this.dblclick.bind(this))},unbind:function(){var t=this.options,n=this.viewer,r=this.canvas,i=this.element.ownerDocument;Ue(n,xr,this.onClick),Ue(n,nd,this.onDragStart),Ue(r,ad,this.onPointerDown),Ue(i,od,this.onPointerMove),Ue(i,ld,this.onPointerUp),Ue(i,id,this.onKeyDown),Ue(window,sd,this.onResize),t.zoomable&&t.zoomOnWheel&&Ue(n,dd,this.onWheel,{passive:!1,capture:!0}),t.toggleOnDblclick&&Ue(r,$o,this.onDblclick)}},Eg={click:function(t){var n=this.options,r=this.imageData,i=t.target,a=ur(i,Ca);switch(!a&&i.localName==="img"&&i.parentElement.localName==="li"&&(i=i.parentElement,a=ur(i,Ca)),Ar&&t.isTrusted&&i===this.canvas&&clearTimeout(this.clickCanvasTimeout),a){case"mix":this.played?this.stop():n.inline?this.fulled?this.exit():this.full():this.hide();break;case"hide":this.pointerMoved||this.hide();break;case"view":this.view(ur(i,"index"));break;case"zoom-in":this.zoom(.1,!0);break;case"zoom-out":this.zoom(-.1,!0);break;case"one-to-one":this.toggle();break;case"reset":this.reset();break;case"prev":this.prev(n.loop);break;case"play":this.play(n.fullscreen);break;case"next":this.next(n.loop);break;case"rotate-left":this.rotate(-90);break;case"rotate-right":this.rotate(90);break;case"flip-horizontal":this.scaleX(-r.scaleX||-1);break;case"flip-vertical":this.scaleY(-r.scaleY||-1);break;default:this.played&&this.stop()}},dblclick:function(t){t.preventDefault(),this.viewed&&t.target===this.image&&(Ar&&t.isTrusted&&clearTimeout(this.doubleClickImageTimeout),this.toggle(t.isTrusted?t:t.detail&&t.detail.originalEvent))},load:function(){var t=this;this.timeout&&(clearTimeout(this.timeout),this.timeout=!1);var n=this.element,r=this.options,i=this.image,a=this.index,o=this.viewerData;Ne(i,mi),r.loading&&Ne(this.canvas,gr),i.style.cssText="height:0;"+"margin-left:".concat(o.width/2,"px;")+"margin-top:".concat(o.height/2,"px;")+"max-width:none!important;position:relative;width:0;",this.initImage(function(){Bi(i,sg,r.movable),Bi(i,tt,r.transition),t.renderImage(function(){t.viewed=!0,t.viewing=!1,Ve(r.viewed)&&xe(n,Ci,r.viewed,{once:!0}),it(n,Ci,{originalImage:t.images[a],index:a,image:i},{cancelable:!1})})})},loadImage:function(t){var n=t.target,r=n.parentNode,i=r.offsetWidth||30,a=r.offsetHeight||50,o=!!ur(n,"filled");au(n,this.options,function(u,y){var p=u/y,m=i,v=a;a*p>i?o?m=a*p:v=i/p:o?v=i/p:m=a*p,Xt(n,Mt({width:m,height:v},da({translateX:(i-m)/2,translateY:(a-v)/2})))})},keydown:function(t){var n=this.options;if(n.keyboard){var r=t.keyCode||t.which||t.charCode;switch(r){case 13:this.viewer.contains(t.target)&&this.click(t);break}if(this.fulled)switch(r){case 27:this.played?this.stop():n.inline?this.fulled&&this.exit():this.hide();break;case 32:this.played&&this.stop();break;case 37:this.played&&this.playing?this.playing.prev():this.prev(n.loop);break;case 38:t.preventDefault(),this.zoom(n.zoomRatio,!0);break;case 39:this.played&&this.playing?this.playing.next():this.next(n.loop);break;case 40:t.preventDefault(),this.zoom(-n.zoomRatio,!0);break;case 48:case 49:t.ctrlKey&&(t.preventDefault(),this.toggle());break}}},dragstart:function(t){t.target.localName==="img"&&t.preventDefault()},pointerdown:function(t){var n=this.options,r=this.pointers,i=t.buttons,a=t.button;if(this.pointerMoved=!1,!(!this.viewed||this.showing||this.viewing||this.hiding||(t.type==="mousedown"||t.type==="pointerdown"&&t.pointerType==="mouse")&&(Xe(i)&&i!==1||Xe(a)&&a!==0||t.ctrlKey))){t.preventDefault(),t.changedTouches?We(t.changedTouches,function(u){r[u.identifier]=Zi(u)}):r[t.pointerId||0]=Zi(t);var o=n.movable?la:!1;n.zoomOnTouch&&n.zoomable&&Object.keys(r).length>1?o=oi:n.slideOnTouch&&(t.pointerType==="touch"||t.type==="touchstart")&&this.isSwitchable()&&(o=ru),n.transition&&(o===la||o===oi)&&Ne(this.image,tt),this.action=o}},pointermove:function(t){var n=this.pointers,r=this.action;!this.viewed||!r||(t.preventDefault(),t.changedTouches?We(t.changedTouches,function(i){Mt(n[i.identifier]||{},Zi(i,!0))}):Mt(n[t.pointerId||0]||{},Zi(t,!0)),this.change(t))},pointerup:function(t){var n=this,r=this.options,i=this.action,a=this.pointers,o;t.changedTouches?We(t.changedTouches,function(u){o=a[u.identifier],delete a[u.identifier]}):(o=a[t.pointerId||0],delete a[t.pointerId||0]),i&&(t.preventDefault(),r.transition&&(i===la||i===oi)&&we(this.image,tt),this.action=!1,Ar&&i!==oi&&o&&Date.now()-o.timeStamp<500&&(clearTimeout(this.clickCanvasTimeout),clearTimeout(this.doubleClickImageTimeout),r.toggleOnDblclick&&this.viewed&&t.target===this.image?this.imageClicked?(this.imageClicked=!1,this.doubleClickImageTimeout=setTimeout(function(){it(n.image,$o,{originalEvent:t})},50)):(this.imageClicked=!0,this.doubleClickImageTimeout=setTimeout(function(){n.imageClicked=!1},500)):(this.imageClicked=!1,r.backdrop&&r.backdrop!=="static"&&t.target===this.canvas&&(this.clickCanvasTimeout=setTimeout(function(){it(n.canvas,xr,{originalEvent:t})},50)))))},resize:function(){var t=this;if(!(!this.isShown||this.hiding)&&(this.fulled&&(this.close(),this.initBody(),this.open()),this.initContainer(),this.initViewer(),this.renderViewer(),this.renderList(),this.viewed&&this.initImage(function(){t.renderImage()}),this.played)){if(this.options.fullscreen&&this.fulled&&!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement)){this.stop();return}We(this.player.getElementsByTagName("img"),function(n){xe(n,Pt,t.loadImage.bind(t),{once:!0}),it(n,Pt)})}},wheel:function(t){var n=this;if(this.viewed&&(t.preventDefault(),!this.wheeling)){this.wheeling=!0,setTimeout(function(){n.wheeling=!1},50);var r=Number(this.options.zoomRatio)||.1,i=1;t.deltaY?i=t.deltaY>0?1:-1:t.wheelDelta?i=-t.wheelDelta/120:t.detail&&(i=t.detail>0?1:-1),this.zoom(-i*r,!0,null,t)}}},Cg={show:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=this.element,r=this.options;if(r.inline||this.showing||this.isShown||this.showing)return this;if(!this.ready)return this.build(),this.ready&&this.show(t),this;if(Ve(r.show)&&xe(n,ud,r.show,{once:!0}),it(n,ud)===!1||!this.ready)return this;this.hiding&&this.transitioning.abort(),this.showing=!0,this.open();var i=this.viewer;if(Ne(i,Qn),i.setAttribute("role","dialog"),i.setAttribute("aria-labelledby",this.title.id),i.setAttribute("aria-modal",!0),i.removeAttribute("aria-hidden"),r.transition&&!t){var a=this.shown.bind(this);this.transitioning={abort:function(){Ue(i,Wt,a),Ne(i,Ft)}},we(i,tt),i.initialOffsetWidth=i.offsetWidth,xe(i,Wt,a,{once:!0}),we(i,Ft)}else we(i,Ft),this.shown();return this},hide:function(){var t=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,r=this.element,i=this.options;if(i.inline||this.hiding||!(this.isShown||this.showing))return this;if(Ve(i.hide)&&xe(r,fd,i.hide,{once:!0}),it(r,fd)===!1)return this;this.showing&&this.transitioning.abort(),this.hiding=!0,this.played?this.stop():this.viewing&&this.viewing.abort();var a=this.viewer,o=this.image,u=function(){Ne(a,Ft),t.hidden()};if(i.transition&&!n){var y=function m(v){v&&v.target===a&&(Ue(a,Wt,m),t.hidden())},p=function(){sr(a,tt)?(xe(a,Wt,y),Ne(a,Ft)):u()};this.transitioning={abort:function(){t.viewed&&sr(o,tt)?Ue(o,Wt,p):sr(a,tt)&&Ue(a,Wt,y)}},this.viewed&&sr(o,tt)?(xe(o,Wt,p,{once:!0}),this.zoomTo(0,!1,null,null,!0)):p()}else u();return this},view:function(){var t=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.initialViewIndex;if(n=Number(n)||0,this.hiding||this.played||n<0||n>=this.length||this.viewed&&n===this.index)return this;if(!this.isShown)return this.index=n,this.show();this.viewing&&this.viewing.abort();var r=this.element,i=this.options,a=this.title,o=this.canvas,u=this.items[n],y=u.querySelector("img"),p=ur(y,"originalUrl"),m=y.getAttribute("alt"),v=document.createElement("img");if(We(i.inheritedAttributes,function(I){var D=y.getAttribute(I);D!==null&&v.setAttribute(I,D)}),v.src=p,v.alt=m,Ve(i.view)&&xe(r,md,i.view,{once:!0}),it(r,md,{originalImage:this.images[n],index:n,image:v})===!1||!this.isShown||this.hiding||this.played)return this;var h=this.items[this.index];h&&(Ne(h,Yi),h.removeAttribute("aria-selected")),we(u,Yi),u.setAttribute("aria-selected",!0),i.focus&&u.focus(),this.image=v,this.viewed=!1,this.index=n,this.imageData={},we(v,mi),i.loading&&we(o,gr),o.innerHTML="",o.appendChild(v),this.renderList(),a.innerHTML="";var E=function(){var D=t.imageData,_=Array.isArray(i.title)?i.title[1]:i.title;a.innerHTML=mg(Ve(_)?_.call(t,v,D):"".concat(m," (").concat(D.naturalWidth," × ").concat(D.naturalHeight,")"))},k,b;return xe(r,Ci,E,{once:!0}),this.viewing={abort:function(){Ue(r,Ci,E),v.complete?t.imageRendering?t.imageRendering.abort():t.imageInitializing&&t.imageInitializing.abort():(v.src="",Ue(v,Pt,k),t.timeout&&clearTimeout(t.timeout))}},v.complete?this.load():(xe(v,Pt,k=function(){Ue(v,Gn,b),t.load()},{once:!0}),xe(v,Gn,b=function(){Ue(v,Pt,k),t.timeout&&(clearTimeout(t.timeout),t.timeout=!1),Ne(v,mi),i.loading&&Ne(t.canvas,gr)},{once:!0}),this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(function(){Ne(v,mi),t.timeout=!1},1e3)),this},prev:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=this.index-1;return n<0&&(n=t?this.length-1:0),this.view(n),this},next:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=this.length-1,r=this.index+1;return r>n&&(r=t?0:n),this.view(r),this},move:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,r=this.imageData;return this.moveTo(dr(t)?t:r.x+Number(t),dr(n)?n:r.y+Number(n)),this},moveTo:function(t){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,a=this.element,o=this.options,u=this.imageData;if(t=Number(t),r=Number(r),this.viewed&&!this.played&&o.movable){var y=u.x,p=u.y,m=!1;if(Xe(t)?m=!0:t=y,Xe(r)?m=!0:r=p,m){if(Ve(o.move)&&xe(a,yd,o.move,{once:!0}),it(a,yd,{x:t,y:r,oldX:y,oldY:p,originalEvent:i})===!1)return this;u.x=t,u.y=r,u.left=t,u.top=r,this.moving=!0,this.renderImage(function(){n.moving=!1,Ve(o.moved)&&xe(a,Ad,o.moved,{once:!0}),it(a,Ad,{x:t,y:r,oldX:y,oldY:p,originalEvent:i},{cancelable:!1})})}}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t)),this},rotateTo:function(t){var n=this,r=this.element,i=this.options,a=this.imageData;if(t=Number(t),Xe(t)&&this.viewed&&!this.played&&i.rotatable){var o=a.rotate;if(Ve(i.rotate)&&xe(r,gd,i.rotate,{once:!0}),it(r,gd,{degree:t,oldDegree:o})===!1)return this;a.rotate=t,this.rotating=!0,this.renderImage(function(){n.rotating=!1,Ve(i.rotated)&&xe(r,bd,i.rotated,{once:!0}),it(r,bd,{degree:t,oldDegree:o},{cancelable:!1})})}return this},scaleX:function(t){return this.scale(t,this.imageData.scaleY),this},scaleY:function(t){return this.scale(this.imageData.scaleX,t),this},scale:function(t){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,i=this.element,a=this.options,o=this.imageData;if(t=Number(t),r=Number(r),this.viewed&&!this.played&&a.scalable){var u=o.scaleX,y=o.scaleY,p=!1;if(Xe(t)?p=!0:t=u,Xe(r)?p=!0:r=y,p){if(Ve(a.scale)&&xe(i,vd,a.scale,{once:!0}),it(i,vd,{scaleX:t,scaleY:r,oldScaleX:u,oldScaleY:y})===!1)return this;o.scaleX=t,o.scaleY=r,this.scaling=!0,this.renderImage(function(){n.scaling=!1,Ve(a.scaled)&&xe(i,wd,a.scaled,{once:!0}),it(i,wd,{scaleX:t,scaleY:r,oldScaleX:u,oldScaleY:y},{cancelable:!1})})}}return this},zoom:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,a=this.imageData;return t=Number(t),t<0?t=1/(1-t):t=1+t,this.zoomTo(a.width*t/a.naturalWidth,n,r,i),this},zoomTo:function(t){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1,u=this.element,y=this.options,p=this.pointers,m=this.imageData,v=m.x,h=m.y,E=m.width,k=m.height,b=m.naturalWidth,I=m.naturalHeight;if(t=Math.max(0,t),Xe(t)&&this.viewed&&!this.played&&(o||y.zoomable)){if(!o){var D=Math.max(.01,y.minZoomRatio),_=Math.min(100,y.maxZoomRatio);t=Math.min(Math.max(t,D),_)}if(a)switch(a.type){case"wheel":y.zoomRatio>=.055&&t>.95&&t<1.05&&(t=1);break;case"pointermove":case"touchmove":case"mousemove":t>.99&&t<1.01&&(t=1);break}var F=b*t,T=I*t,Q=F-E,M=T-k,j=m.ratio;if(Ve(y.zoom)&&xe(u,xd,y.zoom,{once:!0}),it(u,xd,{ratio:t,oldRatio:j,originalEvent:a})===!1)return this;if(this.zooming=!0,a){var $=Ag(this.viewer),W=p&&Object.keys(p).length>0?vg(p):{pageX:a.pageX,pageY:a.pageY};m.x-=Q*((W.pageX-$.left-v)/E),m.y-=M*((W.pageY-$.top-h)/k)}else cr(i)&&Xe(i.x)&&Xe(i.y)?(m.x-=Q*((i.x-v)/E),m.y-=M*((i.y-h)/k)):(m.x-=Q/2,m.y-=M/2);m.left=m.x,m.top=m.y,m.width=F,m.height=T,m.oldRatio=j,m.ratio=t,this.renderImage(function(){n.zooming=!1,Ve(y.zoomed)&&xe(u,Ed,y.zoomed,{once:!0}),it(u,Ed,{ratio:t,oldRatio:j,originalEvent:a},{cancelable:!1})}),r&&this.tooltip()}return this},play:function(){var t=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(!this.isShown||this.played)return this;var r=this.element,i=this.options;if(Ve(i.play)&&xe(r,Cd,i.play,{once:!0}),it(r,Cd)===!1)return this;var a=this.player,o=this.loadImage.bind(this),u=[],y=0,p=0;if(this.played=!0,this.onLoadWhenPlay=o,n&&this.requestFullscreen(n),we(a,lr),We(this.items,function(h,E){var k=h.querySelector("img"),b=document.createElement("img");b.src=ur(k,"originalUrl"),b.alt=k.getAttribute("alt"),b.referrerPolicy=k.referrerPolicy,y+=1,we(b,sa),Bi(b,tt,i.transition),sr(h,Yi)&&(we(b,Ft),p=E),u.push(b),xe(b,Pt,o,{once:!0}),a.appendChild(b)}),Xe(i.interval)&&i.interval>0){var m=function h(){clearTimeout(t.playing.timeout),Ne(u[p],Ft),p-=1,p=p>=0?p:y-1,we(u[p],Ft),t.playing.timeout=setTimeout(h,i.interval)},v=function h(){clearTimeout(t.playing.timeout),Ne(u[p],Ft),p+=1,p=p<y?p:0,we(u[p],Ft),t.playing.timeout=setTimeout(h,i.interval)};y>1&&(this.playing={prev:m,next:v,timeout:setTimeout(v,i.interval)})}return this},stop:function(){var t=this;if(!this.played)return this;var n=this.element,r=this.options;if(Ve(r.stop)&&xe(n,kd,r.stop,{once:!0}),it(n,kd)===!1)return this;var i=this.player;return clearTimeout(this.playing.timeout),this.playing=!1,this.played=!1,We(i.getElementsByTagName("img"),function(a){Ue(a,Pt,t.onLoadWhenPlay)}),Ne(i,lr),i.innerHTML="",this.exitFullscreen(),this},full:function(){var t=this,n=this.options,r=this.viewer,i=this.image,a=this.list;return!this.isShown||this.played||this.fulled||!n.inline?this:(this.fulled=!0,this.open(),we(this.button,ed),n.transition&&(Ne(a,tt),this.viewed&&Ne(i,tt)),we(r,qo),r.setAttribute("role","dialog"),r.setAttribute("aria-labelledby",this.title.id),r.setAttribute("aria-modal",!0),r.removeAttribute("style"),Xt(r,{zIndex:n.zIndex}),n.focus&&this.enforceFocus(),this.initContainer(),this.viewerData=Mt({},this.containerData),this.renderList(),this.viewed&&this.initImage(function(){t.renderImage(function(){n.transition&&setTimeout(function(){we(i,tt),we(a,tt)},0)})}),this)},exit:function(){var t=this,n=this.options,r=this.viewer,i=this.image,a=this.list;return!this.isShown||this.played||!this.fulled||!n.inline?this:(this.fulled=!1,this.close(),Ne(this.button,ed),n.transition&&(Ne(a,tt),this.viewed&&Ne(i,tt)),n.focus&&this.clearEnforceFocus(),r.removeAttribute("role"),r.removeAttribute("aria-labelledby"),r.removeAttribute("aria-modal"),Ne(r,qo),Xt(r,{zIndex:n.zIndexInline}),this.viewerData=Mt({},this.parentData),this.renderViewer(),this.renderList(),this.viewed&&this.initImage(function(){t.renderImage(function(){n.transition&&setTimeout(function(){we(i,tt),we(a,tt)},0)})}),this)},tooltip:function(){var t=this,n=this.options,r=this.tooltipBox,i=this.imageData;return!this.viewed||this.played||!n.tooltip?this:(r.textContent="".concat(Math.round(i.ratio*100),"%"),this.tooltipping?clearTimeout(this.tooltipping):n.transition?(this.fading&&it(r,Wt),we(r,lr),we(r,sa),we(r,tt),r.removeAttribute("aria-hidden"),r.initialOffsetWidth=r.offsetWidth,we(r,Ft)):(we(r,lr),r.removeAttribute("aria-hidden")),this.tooltipping=setTimeout(function(){n.transition?(xe(r,Wt,function(){Ne(r,lr),Ne(r,sa),Ne(r,tt),r.setAttribute("aria-hidden",!0),t.fading=!1},{once:!0}),Ne(r,Ft),t.fading=!0):(Ne(r,lr),r.setAttribute("aria-hidden",!0)),t.tooltipping=!1},1e3),this)},toggle:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return this.imageData.ratio===1?this.zoomTo(this.imageData.oldRatio,!0,null,t):this.zoomTo(1,!0,null,t),this},reset:function(){return this.viewed&&!this.played&&(this.imageData=Mt({},this.initialImageData),this.renderImage()),this},update:function(){var t=this,n=this.element,r=this.options,i=this.isImg;if(i&&!n.parentNode)return this.destroy();var a=[];if(We(i?[n]:n.querySelectorAll("img"),function(p){Ve(r.filter)?r.filter.call(t,p)&&a.push(p):t.getImageURL(p)&&a.push(p)}),!a.length)return this;if(this.images=a,this.length=a.length,this.ready){var o=[];if(We(this.items,function(p,m){var v=p.querySelector("img"),h=a[m];h&&v?(h.src!==v.src||h.alt!==v.alt)&&o.push(m):o.push(m)}),Xt(this.list,{width:"auto"}),this.initList(),this.isShown)if(this.length){if(this.viewed){var u=o.indexOf(this.index);if(u>=0)this.viewed=!1,this.view(Math.max(Math.min(this.index-u,this.length-1),0));else{var y=this.items[this.index];we(y,Yi),y.setAttribute("aria-selected",!0)}}}else this.image=null,this.viewed=!1,this.index=0,this.imageData={},this.canvas.innerHTML="",this.title.innerHTML=""}else this.build();return this},destroy:function(){var t=this.element,n=this.options;return t[Ie]?(this.destroyed=!0,this.ready?(this.played&&this.stop(),n.inline?(this.fulled&&this.exit(),this.unbind()):this.isShown?(this.viewing&&(this.imageRendering?this.imageRendering.abort():this.imageInitializing&&this.imageInitializing.abort()),this.hiding&&this.transitioning.abort(),this.hidden()):this.showing&&(this.transitioning.abort(),this.hidden()),this.ready=!1,this.viewer.parentNode.removeChild(this.viewer)):n.inline&&(this.delaying?this.delaying.abort():this.initializing&&this.initializing.abort()),n.inline||Ue(t,xr,this.onStart),t[Ie]=void 0,this):this}},kg={getImageURL:function(t){var n=this.options.url;return ki(n)?n=t.getAttribute(n):Ve(n)?n=n.call(this,t):n="",n},enforceFocus:function(){var t=this;this.clearEnforceFocus(),xe(document,rd,this.onFocusin=function(n){var r=t.viewer,i=n.target;if(!(i===document||i===r||r.contains(i))){for(;i;){if(i.getAttribute("tabindex")!==null||i.getAttribute("aria-modal")==="true")return;i=i.parentElement}r.focus()}})},clearEnforceFocus:function(){this.onFocusin&&(Ue(document,rd,this.onFocusin),this.onFocusin=null)},open:function(){var t=this.body;we(t,td),this.scrollbarWidth>0&&(t.style.paddingRight="".concat(this.scrollbarWidth+(parseFloat(this.initialBodyComputedPaddingRight)||0),"px"))},close:function(){var t=this.body;Ne(t,td),this.scrollbarWidth>0&&(t.style.paddingRight=this.initialBodyPaddingRight)},shown:function(){var t=this.element,n=this.options,r=this.viewer;this.fulled=!0,this.isShown=!0,this.render(),this.bind(),this.showing=!1,n.focus&&(r.focus(),this.enforceFocus()),Ve(n.shown)&&xe(t,pd,n.shown,{once:!0}),it(t,pd)!==!1&&this.ready&&this.isShown&&!this.hiding&&this.view(this.index)},hidden:function(){var t=this.element,n=this.options,r=this.viewer;n.fucus&&this.clearEnforceFocus(),this.fulled=!1,this.viewed=!1,this.isShown=!1,this.close(),this.unbind(),we(r,Qn),r.removeAttribute("role"),r.removeAttribute("aria-labelledby"),r.removeAttribute("aria-modal"),r.setAttribute("aria-hidden",!0),this.resetList(),this.resetImage(),this.hiding=!1,this.destroyed||(Ve(n.hidden)&&xe(t,hd,n.hidden,{once:!0}),it(t,hd,null,{cancelable:!1}))},requestFullscreen:function(t){var n=this.element.ownerDocument;if(this.fulled&&!(n.fullscreenElement||n.webkitFullscreenElement||n.mozFullScreenElement||n.msFullscreenElement)){var r=n.documentElement;r.requestFullscreen?cr(t)?r.requestFullscreen(t):r.requestFullscreen():r.webkitRequestFullscreen?r.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):r.mozRequestFullScreen?r.mozRequestFullScreen():r.msRequestFullscreen&&r.msRequestFullscreen()}},exitFullscreen:function(){var t=this.element.ownerDocument;this.fulled&&(t.fullscreenElement||t.webkitFullscreenElement||t.mozFullScreenElement||t.msFullscreenElement)&&(t.exitFullscreen?t.exitFullscreen():t.webkitExitFullscreen?t.webkitExitFullscreen():t.mozCancelFullScreen?t.mozCancelFullScreen():t.msExitFullscreen&&t.msExitFullscreen())},change:function(t){var n=this.options,r=this.pointers,i=r[Object.keys(r)[0]];if(i){var a=i.endX-i.startX,o=i.endY-i.startY;switch(this.action){case la:(a!==0||o!==0)&&(this.pointerMoved=!0,this.move(a,o,t));break;case oi:this.zoom(bg(r),!1,null,t);break;case ru:{this.action="switched";var u=Math.abs(a);u>1&&u>Math.abs(o)&&(this.pointers={},a>1?this.prev(n.loop):a<-1&&this.next(n.loop));break}}We(r,function(y){y.startX=y.endX,y.startY=y.endY})}},isSwitchable:function(){var t=this.imageData,n=this.viewerData;return this.length>1&&t.x>=0&&t.y>=0&&t.width<=n.width&&t.height<=n.height}},Bg=vn.Viewer,Ig=function(e){return function(){return e+=1,e}}(-1),ou=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(G0(this,e),!t||t.nodeType!==1)throw new Error("The first argument is required and must be an element.");this.element=t,this.options=Mt({},Js,cr(n)&&n),this.action=!1,this.fading=!1,this.fulled=!1,this.hiding=!1,this.imageClicked=!1,this.imageData={},this.index=this.options.initialViewIndex,this.isImg=!1,this.isShown=!1,this.length=0,this.moving=!1,this.played=!1,this.playing=!1,this.pointers={},this.ready=!1,this.rotating=!1,this.scaling=!1,this.showing=!1,this.timeout=!1,this.tooltipping=!1,this.viewed=!1,this.viewing=!1,this.wheeling=!1,this.zooming=!1,this.pointerMoved=!1,this.id=Ig(),this.init()}return J0(e,[{key:"init",value:function(){var n=this,r=this.element,i=this.options;if(!r[Ie]){r[Ie]=this,i.focus&&!i.keyboard&&(i.focus=!1);var a=r.localName==="img",o=[];if(We(a?[r]:r.querySelectorAll("img"),function(p){Ve(i.filter)?i.filter.call(n,p)&&o.push(p):n.getImageURL(p)&&o.push(p)}),this.isImg=a,this.length=o.length,this.images=o,this.initBody(),dr(document.createElement(Ie).style.transition)&&(i.transition=!1),i.inline){var u=0,y=function(){if(u+=1,u===n.length){var m;n.initializing=!1,n.delaying={abort:function(){clearTimeout(m)}},m=setTimeout(function(){n.delaying=!1,n.build()},0)}};this.initializing={abort:function(){We(o,function(m){m.complete||(Ue(m,Pt,y),Ue(m,Gn,y))})}},We(o,function(p){if(p.complete)y();else{var m,v;xe(p,Pt,m=function(){Ue(p,Gn,v),y()},{once:!0}),xe(p,Gn,v=function(){Ue(p,Pt,m),y()},{once:!0})}})}else xe(r,xr,this.onStart=function(p){var m=p.target;m.localName==="img"&&(!Ve(i.filter)||i.filter.call(n,m))&&n.view(n.images.indexOf(m))})}}},{key:"build",value:function(){if(!this.ready){var n=this.element,r=this.options,i=n.parentNode,a=document.createElement("div");a.innerHTML=ng;var o=a.querySelector(".".concat(Ie,"-container")),u=o.querySelector(".".concat(Ie,"-title")),y=o.querySelector(".".concat(Ie,"-toolbar")),p=o.querySelector(".".concat(Ie,"-navbar")),m=o.querySelector(".".concat(Ie,"-button")),v=o.querySelector(".".concat(Ie,"-canvas"));if(this.parent=i,this.viewer=o,this.title=u,this.toolbar=y,this.navbar=p,this.button=m,this.canvas=v,this.footer=o.querySelector(".".concat(Ie,"-footer")),this.tooltipBox=o.querySelector(".".concat(Ie,"-tooltip")),this.player=o.querySelector(".".concat(Ie,"-player")),this.list=o.querySelector(".".concat(Ie,"-list")),o.id="".concat(Ie).concat(this.id),u.id="".concat(Ie,"Title").concat(this.id),we(u,r.title?Xi(Array.isArray(r.title)?r.title[0]:r.title):Qn),we(p,r.navbar?Xi(r.navbar):Qn),Bi(m,Qn,!r.button),r.keyboard&&m.setAttribute("tabindex",0),r.backdrop&&(we(o,"".concat(Ie,"-backdrop")),!r.inline&&r.backdrop!=="static"&&Vo(v,Ca,"hide")),ki(r.className)&&r.className&&r.className.split(bl).forEach(function(F){we(o,F)}),r.toolbar){var h=document.createElement("ul"),E=cr(r.toolbar),k=Ki.slice(0,3),b=Ki.slice(7,9),I=Ki.slice(9);E||we(y,Xi(r.toolbar)),We(E?r.toolbar:Ki,function(F,T){var Q=E&&cr(F),M=E?vl(T):F,j=Q&&!dr(F.show)?F.show:F;if(!(!j||!r.zoomable&&k.indexOf(M)!==-1||!r.rotatable&&b.indexOf(M)!==-1||!r.scalable&&I.indexOf(M)!==-1)){var $=Q&&!dr(F.size)?F.size:F,W=Q&&!dr(F.click)?F.click:F,z=document.createElement("li");r.keyboard&&z.setAttribute("tabindex",0),z.setAttribute("role","button"),we(z,"".concat(Ie,"-").concat(M)),Ve(W)||Vo(z,Ca,M),Xe(j)&&we(z,Xi(j)),["small","large"].indexOf($)!==-1?we(z,"".concat(Ie,"-").concat($)):M==="play"&&we(z,"".concat(Ie,"-large")),Ve(W)&&xe(z,xr,W),h.appendChild(z)}}),y.appendChild(h)}else we(y,Qn);if(!r.rotatable){var D=y.querySelectorAll('li[class*="rotate"]');we(D,mi),We(D,function(F){y.appendChild(F)})}if(r.inline)we(m,ig),Xt(o,{zIndex:r.zIndexInline}),window.getComputedStyle(i).position==="static"&&Xt(i,{position:"relative"}),i.insertBefore(o,n.nextSibling);else{we(m,rg),we(o,qo),we(o,sa),we(o,Qn),Xt(o,{zIndex:r.zIndex});var _=r.container;ki(_)&&(_=n.ownerDocument.querySelector(_)),_||(_=this.body),_.appendChild(o)}if(r.inline&&(this.render(),this.bind(),this.isShown=!0),this.ready=!0,Ve(r.ready)&&xe(n,cd,r.ready,{once:!0}),it(n,cd)===!1){this.ready=!1;return}this.ready&&r.inline&&this.view(this.index)}}}],[{key:"noConflict",value:function(){return window.Viewer=Bg,e}},{key:"setDefaults",value:function(n){Mt(Js,cr(n)&&n)}}]),e}();Mt(ou.prototype,wg,xg,Eg,Cg,kg);/*!
 * hash-wasm (https://www.npmjs.com/package/hash-wasm)
 * (c) Dani Biro
 * @license MIT
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function ca(e,t,n,r){function i(a){return a instanceof n?a:new n(function(o){o(a)})}return new(n||(n=Promise))(function(a,o){function u(m){try{p(r.next(m))}catch(v){o(v)}}function y(m){try{p(r.throw(m))}catch(v){o(v)}}function p(m){m.done?a(m.value):i(m.value).then(u,y)}p((r=r.apply(e,t||[])).next())})}class Je{constructor(){this.mutex=Promise.resolve()}lock(){let t=()=>{};return this.mutex=this.mutex.then(()=>new Promise(t)),new Promise(n=>{t=n})}dispatch(t){return ca(this,void 0,void 0,function*(){const n=yield this.lock();try{return yield Promise.resolve(t())}finally{n()}})}}var ho;function Sg(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global}const Uo=Sg(),mo=(ho=Uo.Buffer)!==null&&ho!==void 0?ho:null,Tg=Uo.TextEncoder?new Uo.TextEncoder:null;function lu(e,t){return(e&15)+(e>>6|e>>3&8)<<4|(t&15)+(t>>6|t>>3&8)}function _g(e,t){const n=t.length>>1;for(let r=0;r<n;r++){const i=r<<1;e[r]=lu(t.charCodeAt(i),t.charCodeAt(i+1))}}function Lg(e,t){if(e.length!==t.length*2)return!1;for(let n=0;n<t.length;n++){const r=n<<1;if(t[n]!==lu(e.charCodeAt(r),e.charCodeAt(r+1)))return!1}return!0}const Bd="a".charCodeAt(0)-10,Id="0".charCodeAt(0);function Sd(e,t,n){let r=0;for(let i=0;i<n;i++){let a=t[i]>>>4;e[r++]=a>9?a+Bd:a+Id,a=t[i]&15,e[r++]=a>9?a+Bd:a+Id}return String.fromCharCode.apply(null,e)}const Td=mo!==null?e=>{if(typeof e=="string"){const t=mo.from(e,"utf8");return new Uint8Array(t.buffer,t.byteOffset,t.length)}if(mo.isBuffer(e))return new Uint8Array(e.buffer,e.byteOffset,e.length);if(ArrayBuffer.isView(e))return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);throw new Error("Invalid data type!")}:e=>{if(typeof e=="string")return Tg.encode(e);if(ArrayBuffer.isView(e))return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);throw new Error("Invalid data type!")},_d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",li=new Uint8Array(256);for(let e=0;e<_d.length;e++)li[_d.charCodeAt(e)]=e;function Og(e){let t=Math.floor(e.length*.75);const n=e.length;return e[n-1]==="="&&(t-=1,e[n-2]==="="&&(t-=1)),t}function Mg(e){const t=Og(e),n=e.length,r=new Uint8Array(t);let i=0;for(let a=0;a<n;a+=4){const o=li[e.charCodeAt(a)],u=li[e.charCodeAt(a+1)],y=li[e.charCodeAt(a+2)],p=li[e.charCodeAt(a+3)];r[i]=o<<2|u>>4,i+=1,r[i]=(u&15)<<4|y>>2,i+=1,r[i]=(y&3)<<6|p&63,i+=1}return r}const Gi=16*1024,ri=4,Dg=new Je,yo=new Map;function Ng(e,t){return ca(this,void 0,void 0,function*(){let n=null,r=null,i=!1;if(typeof WebAssembly>"u")throw new Error("WebAssembly is not supported in this environment!");const a=(M,j=0)=>{r.set(M,j)},o=()=>r,u=()=>n.exports,y=M=>{n.exports.Hash_SetMemorySize(M);const j=n.exports.Hash_GetBuffer(),$=n.exports.memory.buffer;r=new Uint8Array($,j,M)},p=()=>new DataView(n.exports.memory.buffer).getUint32(n.exports.STATE_SIZE,!0),m=Dg.dispatch(()=>ca(this,void 0,void 0,function*(){if(!yo.has(e.name)){const j=Mg(e.data),$=WebAssembly.compile(j);yo.set(e.name,$)}const M=yield yo.get(e.name);n=yield WebAssembly.instantiate(M,{})})),v=()=>ca(this,void 0,void 0,function*(){n||(yield m);const M=n.exports.Hash_GetBuffer(),j=n.exports.memory.buffer;r=new Uint8Array(j,M,Gi)}),h=(M=null)=>{i=!0,n.exports.Hash_Init(M)},E=M=>{let j=0;for(;j<M.length;){const $=M.subarray(j,j+Gi);j+=$.length,r.set($),n.exports.Hash_Update($.length)}},k=M=>{if(!i)throw new Error("update() called before init()");const j=Td(M);E(j)},b=new Uint8Array(t*2),I=(M,j=null)=>{if(!i)throw new Error("digest() called before init()");return i=!1,n.exports.Hash_Final(j),M==="binary"?r.slice(0,t):Sd(b,r,t)},D=()=>{if(!i)throw new Error("save() can only be called after init() and before digest()");const M=n.exports.Hash_GetState(),j=p(),$=n.exports.memory.buffer,W=new Uint8Array($,M,j),z=new Uint8Array(ri+j);return _g(z,e.hash),z.set(W,ri),z},_=M=>{if(!(M instanceof Uint8Array))throw new Error("load() expects an Uint8Array generated by save()");const j=n.exports.Hash_GetState(),$=p(),W=ri+$,z=n.exports.memory.buffer;if(M.length!==W)throw new Error(`Bad state length (expected ${W} bytes, got ${M.length})`);if(!Lg(e.hash,M.subarray(0,ri)))throw new Error("This state was written by an incompatible hash implementation");const Te=M.subarray(ri);new Uint8Array(z,j,$).set(Te),i=!0},F=M=>typeof M=="string"?M.length<Gi/4:M.byteLength<Gi;let T=F;switch(e.name){case"argon2":case"scrypt":T=()=>!0;break;case"blake2b":case"blake2s":T=(M,j)=>j<=512&&F(M);break;case"blake3":T=(M,j)=>j===0&&F(M);break;case"xxhash64":case"xxhash3":case"xxhash128":T=()=>!1;break}const Q=(M,j=null,$=null)=>{if(!T(M,j))return h(j),k(M),I("hex",$);const W=Td(M);return r.set(W),n.exports.Hash_Calculate(W.length,j,$),Sd(b,r,t)};return yield v(),{getMemory:o,writeMemory:a,getExports:u,setMemorySize:y,init:h,update:k,digest:I,save:D,load:_,calculate:Q,hashLength:t}})}new Je;new Je;new Je;new Je;new Je;new Je;new Je;var zg="md5",Fg="AGFzbQEAAAABEgRgAAF/YAAAYAF/AGACf38BfwMIBwABAgMBAAIEBQFwAQEBBQQBAQICBg4CfwFBoIoFC38AQYAICwdwCAZtZW1vcnkCAA5IYXNoX0dldEJ1ZmZlcgAACUhhc2hfSW5pdAABC0hhc2hfVXBkYXRlAAIKSGFzaF9GaW5hbAAEDUhhc2hfR2V0U3RhdGUABQ5IYXNoX0NhbGN1bGF0ZQAGClNUQVRFX1NJWkUDAQqzFgcFAEGACQstAEEAQv6568XpjpWZEDcCkIkBQQBCgcaUupbx6uZvNwKIiQFBAEIANwKAiQEL6AIBA39BAEEAKAKAiQEiASAAakH/////AXEiAjYCgIkBQQAoAoSJASEDAkAgAiABTw0AQQAgA0EBaiIDNgKEiQELQQAgAyAAQR12ajYChIkBAkACQAJAAkACQAJAIAFBP3EiAw0AQYAJIQIMAQtBwAAgA2siAiAASw0BIANBGGohA0EAIQEDQCADIAFqQYCJAWogAUGACWotAAA6AAAgAyABQQFqIgFqQdgARw0AC0GYiQFBwAAQAxogACACayEAIAJBgAlqIQILIABBwABPDQEgACEDDAILIABFDQJBACEBIANBmIkBakEALQCACToAACAAQQFGDQIgA0GZiQFqIQMgAEF/aiECA0AgAyABaiABQYEJai0AADoAACACIAFBAWoiAUcNAAwDCwsgAEE/cSEDIAIgAEFAcRADIQILIANFDQBBACEBA0AgAUGYiQFqIAIgAWotAAA6AAAgAyABQQFqIgFHDQALCwu0EAEZf0EAKAKUiQEhAkEAKAKQiQEhA0EAKAKMiQEhBEEAKAKIiQEhBQNAIABBCGooAgAiBiAAQRhqKAIAIgcgAEEoaigCACIIIABBOGooAgAiCSAAQTxqKAIAIgogAEEMaigCACILIABBHGooAgAiDCAAQSxqKAIAIg0gDCALIAogDSAJIAggByADIAZqIAIgAEEEaigCACIOaiAFIAQgAiADc3EgAnNqIAAoAgAiD2pB+Miqu31qQQd3IARqIhAgBCADc3EgA3NqQdbunsZ+akEMdyAQaiIRIBAgBHNxIARzakHb4YGhAmpBEXcgEWoiEmogAEEUaigCACITIBFqIABBEGooAgAiFCAQaiAEIAtqIBIgESAQc3EgEHNqQe6d9418akEWdyASaiIQIBIgEXNxIBFzakGvn/Crf2pBB3cgEGoiESAQIBJzcSASc2pBqoyfvARqQQx3IBFqIhIgESAQc3EgEHNqQZOMwcF6akERdyASaiIVaiAAQSRqKAIAIhYgEmogAEEgaigCACIXIBFqIAwgEGogFSASIBFzcSARc2pBgaqaampBFncgFWoiECAVIBJzcSASc2pB2LGCzAZqQQd3IBBqIhEgECAVc3EgFXNqQa/vk9p4akEMdyARaiISIBEgEHNxIBBzakGxt31qQRF3IBJqIhVqIABBNGooAgAiGCASaiAAQTBqKAIAIhkgEWogDSAQaiAVIBIgEXNxIBFzakG+r/PKeGpBFncgFWoiECAVIBJzcSASc2pBoqLA3AZqQQd3IBBqIhEgECAVc3EgFXNqQZPj4WxqQQx3IBFqIhUgESAQc3EgEHNqQY6H5bN6akERdyAVaiISaiAHIBVqIA4gEWogCiAQaiASIBUgEXNxIBFzakGhkNDNBGpBFncgEmoiECAScyAVcSASc2pB4sr4sH9qQQV3IBBqIhEgEHMgEnEgEHNqQcDmgoJ8akEJdyARaiISIBFzIBBxIBFzakHRtPmyAmpBDncgEmoiFWogCCASaiATIBFqIA8gEGogFSAScyARcSASc2pBqo/bzX5qQRR3IBVqIhAgFXMgEnEgFXNqQd2gvLF9akEFdyAQaiIRIBBzIBVxIBBzakHTqJASakEJdyARaiISIBFzIBBxIBFzakGBzYfFfWpBDncgEmoiFWogCSASaiAWIBFqIBQgEGogFSAScyARcSASc2pByPfPvn5qQRR3IBVqIhAgFXMgEnEgFXNqQeabh48CakEFdyAQaiIRIBBzIBVxIBBzakHWj9yZfGpBCXcgEWoiEiARcyAQcSARc2pBh5vUpn9qQQ53IBJqIhVqIAYgEmogGCARaiAXIBBqIBUgEnMgEXEgEnNqQe2p6KoEakEUdyAVaiIQIBVzIBJxIBVzakGF0o/PempBBXcgEGoiESAQcyAVcSAQc2pB+Me+Z2pBCXcgEWoiEiARcyAQcSARc2pB2YW8uwZqQQ53IBJqIhVqIBcgEmogEyARaiAZIBBqIBUgEnMgEXEgEnNqQYqZqel4akEUdyAVaiIQIBVzIhUgEnNqQcLyaGpBBHcgEGoiESAVc2pBge3Hu3hqQQt3IBFqIhIgEXMiGiAQc2pBosL17AZqQRB3IBJqIhVqIBQgEmogDiARaiAJIBBqIBUgGnNqQYzwlG9qQRd3IBVqIhAgFXMiFSASc2pBxNT7pXpqQQR3IBBqIhEgFXNqQamf+94EakELdyARaiISIBFzIgkgEHNqQeCW7bV/akEQdyASaiIVaiAPIBJqIBggEWogCCAQaiAVIAlzakHw+P71e2pBF3cgFWoiECAVcyIVIBJzakHG/e3EAmpBBHcgEGoiESAVc2pB+s+E1X5qQQt3IBFqIhIgEXMiCCAQc2pBheG8p31qQRB3IBJqIhVqIBkgEmogFiARaiAHIBBqIBUgCHNqQYW6oCRqQRd3IBVqIhEgFXMiECASc2pBuaDTzn1qQQR3IBFqIhIgEHNqQeWz7rZ+akELdyASaiIVIBJzIgcgEXNqQfj5if0BakEQdyAVaiIQaiAMIBVqIA8gEmogBiARaiAQIAdzakHlrLGlfGpBF3cgEGoiESAVQX9zciAQc2pBxMSkoX9qQQZ3IBFqIhIgEEF/c3IgEXNqQZf/q5kEakEKdyASaiIQIBFBf3NyIBJzakGnx9DcempBD3cgEGoiFWogCyAQaiAZIBJqIBMgEWogFSASQX9zciAQc2pBucDOZGpBFXcgFWoiESAQQX9zciAVc2pBw7PtqgZqQQZ3IBFqIhAgFUF/c3IgEXNqQZKZs/h4akEKdyAQaiISIBFBf3NyIBBzakH96L9/akEPdyASaiIVaiAKIBJqIBcgEGogDiARaiAVIBBBf3NyIBJzakHRu5GseGpBFXcgFWoiECASQX9zciAVc2pBz/yh/QZqQQZ3IBBqIhEgFUF/c3IgEHNqQeDNs3FqQQp3IBFqIhIgEEF/c3IgEXNqQZSGhZh6akEPdyASaiIVaiANIBJqIBQgEWogGCAQaiAVIBFBf3NyIBJzakGho6DwBGpBFXcgFWoiECASQX9zciAVc2pBgv3Nun9qQQZ3IBBqIhEgFUF/c3IgEHNqQbXk6+l7akEKdyARaiISIBBBf3NyIBFzakG7pd/WAmpBD3cgEmoiFSAEaiAWIBBqIBUgEUF/c3IgEnNqQZGnm9x+akEVd2ohBCAVIANqIQMgEiACaiECIBEgBWohBSAAQcAAaiEAIAFBQGoiAQ0AC0EAIAI2ApSJAUEAIAM2ApCJAUEAIAQ2AoyJAUEAIAU2AoiJASAAC6ECAQN/QQAoAoCJASIAQT9xIgFBmIkBakGAAToAAAJAAkACQCABQT9zIgJBB0sNAAJAIAJFDQAgAUGZiQFqIQADQCAAQQA6AAAgAEEBaiEAIAJBf2oiAg0ACwtBwAAhAkGYiQFBwAAQAxpBACEADAELIAJBCEYNASABQQFqIQALIABBj4kBaiEBA0AgASACakEAOgAAIAJBd2ohACACQX9qIQIgAEEASg0AC0EAKAKAiQEhAAtBACAAQRV2OgDTiQFBACAAQQ12OgDSiQFBACAAQQV2OgDRiQFBACAAQQN0IgI6ANCJAUEAIAI2AoCJAUEAQQAoAoSJATYC1IkBQZiJAUHAABADGkEAQQApAoiJATcDgAlBAEEAKQKQiQE3A4gJCwYAQYCJAQszAEEAQv6568XpjpWZEDcCkIkBQQBCgcaUupbx6uZvNwKIiQFBAEIANwKAiQEgABACEAQLCwsBAEGACAsEmAAAAA==",Rg="9b0fac7d",Pg={name:zg,data:Fg,hash:Rg};new Je;function qg(){return Ng(Pg,16).then(e=>{e.init();const t={init:()=>(e.init(),t),update:n=>(e.update(n),t),digest:n=>e.digest(n),save:()=>e.save(),load:n=>(e.load(n),t),blockSize:64,digestSize:16};return t})}new Je;new Je;new Je;new Je;new Je;new Je;new Je;new Je;new Je;new Je;new Je;new Je;new Je;new Je;let Ld,Od;class $g extends TransformStream{static{Ld=class{static{Od=(t,n)=>{t.#t=n}}#n;#e=null;#t=null;constructor(t){this.#n=t}async start(t){this.#e=await this.#n}transform(t,n){this.#e.update(t),n.enqueue(t)}flush(t){this.#t.#r=this.#e.digest("hex")}}}#r=null;get result(){return this.#r}constructor(t){const n=new Ld(t);super(n),Od(n,this)}}const Vg=()=>new $g(qg());let su="api.dandanplay.net",du=`https://${su}/`;const Ug=[su,"cas.dandanplay.net"],jg=Object.freeze({tvseries:"TV动画",tvspecial:"TV特别",ova:"OVA",movie:"电影",musicvideo:"MV",web:"Web",other:"其他",jpmovie:"日本电影",jpdrama:"日本电视剧",unknown:"未知"});let ua,wl;const Wg=e=>{ua=e},Hg=e=>{wl=e},{toString:Qg}=Object.prototype,Yg=new Set(["[object Object]","[object Array]"]),Kg=e=>Yg.has(Qg.call(e)),cu=async(e,t,n={})=>{e=new URL(e,du).href,t!=null&&(n.method??="POST",Kg(t)?(n.headers=new Headers(n.headers),n.headers.set("content-type","application/json"),n.body=JSON.stringify(t)):n.body=t),n.credentials??="omit";const r=new Request(e,n);r.headers.has("accept")||r.headers.set("accept","application/json");const i=await wl(r),{status:a}=i;if(!(a>=200&&a<300))throw new TypeError(`Request failed with status code ${a}`);let o;const u=i.headers.get("content-type"),y="application/json";if((u===y||u?.startsWith(y))&&(o=await i.json(),o.errorMessage))throw new TypeError("DandanPlay API Error: "+o.errorMessage,{cause:o});return{request:r,response:i,data:o}};async function Xg(e,t){let n=t?.size??0,r="00000000000000000000000000000000";if(t!=null)try{const a=Vg();await t.slice(0,16*1024*1024).stream().pipeThrough(a).pipeTo(new WritableStream),r=a.result}catch(a){console.warn("MD5 Error: ",a)}return(await cu("api/v2/match",{fileName:e,fileHash:r,fileSize:n,matchMode:"hashAndFileName"})).data}const uu=(e,t=!0)=>`${du}api/v2/comment/${e}${t?"?withRelated=true":""}`;async function Zg(e,t=!0){const n=uu(e,t);return(await cu(n)).data.comments}const Gg=`
!(function (root, factory) {
  if (typeof GM_xmlhttpRequest == 'function' && typeof unsafeWindow != 'undefined') {
    try { if (GM_fetch != null) { return } } catch (e) { return }
    GM_fetch = factory()(GM_xmlhttpRequest)
  } else {
    typeof define == 'function' && define.amd ? define(factory) :
      typeof exports == 'object' && typeof module == 'object' ? module.exports = factory() :
        (root.createGM_fetch = factory())
  }
})(this, function () {
  'use strict';
  const nextTick = queueMicrotask
  const { apply } = Reflect
  const { getOwnPropertyDescriptor: getProp, getOwnPropertyDescriptors: getProps } = Object
  const { fromEntries, defineProperties: defProps } = Object
  const { bind: _bind, call: _call } = Function.prototype
  const { addEventListener: _on } = EventTarget.prototype
  const signalProto = AbortSignal.prototype, { throwIfAborted: _throwIf } = signalProto

  const on = apply(_bind, _call, [_on]), _options = { once: true }
  const getAborted = apply(_bind, _call, [getProp(signalProto, 'aborted').get])
  const getReason = apply(_bind, _call, [getProp(signalProto, 'reason').get])
  const throwIfAborted = _throwIf != null ? apply(_bind, _call, [_throwIf]) : (signal) => {
    if (getAborted(signal)) { throw getReason(signal) }
  }

  const onAbort = (signal, fn) => {
    if (typeof fn != 'function') { throw new TypeError('onAbort: Argument 2 is not callable.') }
    const cb = () => { let err; try { err = getReason(signal) } catch (e) { err = e } fn(err) }
    getAborted(signal) ? nextTick(cb) : on(signal, 'abort', cb, _options)
  }

  const handleError = (resp, signal) => {
    const { error } = resp
    if (typeof error === 'string') {
      if (error === 'aborted') {
        signal != null && throwIfAborted(signal)
        throw new DOMException('The operation was aborted. ', 'AbortError')
      }
      throw new TypeError(\`GM_xmlhttpRequest Error: \${error}\`, { cause: resp })
    }
    const { statusText } = resp
    if (typeof statusText === 'string' && statusText.length > 0) {
      throw new TypeError(\`GM_xmlhttpRequest Error: \${statusText}\`, { cause: resp })
    }
    throw new TypeError('NetworkError when attempting to fetch resource.', { cause: resp })
  }
  const parseHeaders = (responseHeaders) => {
    const headers = new Headers(), errors = []
    let count = 0
    for (let line of String(responseHeaders).split(/\\r?\\n/)) {
      line = line.trim()
      if (!line) { continue }
      const index = line.indexOf(':')
      let key = line, value = ''
      if (index >= 0) {
        key = line.slice(0, index).trim()
        value = line.slice(index + 1)
      }
      try {
        headers.append(key, value)
        count++
      } catch (e) {
        errors[errors.length] = e
      }
    }
    if (count < 1 && errors.length > 0) { throw new AggregateError(errors, 'Parse Headers Error') }
    return headers
  }
  return (GM_xmlhttpRequest) => {
    const responseType = GM_xmlhttpRequest.RESPONSE_TYPE_STREAM ?? 'blob'
    const readyState = responseType === 'stream' ? 2 : 4
    if (readyState !== 2) {
      console.warn('GM_xmlhttpRequest not support stream')
    }
    const GM_fetch = async (request, init) => {
      if (!(request instanceof Request && init == null)) {
        request = new Request(request, init)
      }
      init = null
      const { method, url, signal } = request
      throwIfAborted(signal)
      let data, resp
      if (!(method === 'GET' || method === 'HEAD')) {
        data = await request.blob()
      }
      try {
        resp = await new Promise((ok, onerror) => {
          const { abort } = GM_xmlhttpRequest({
            method, url, data,
            headers: fromEntries(request.headers),
            anonymous: request.credentials !== 'include',
            responseType: method === 'HEAD' ? 'blob' : responseType,
            onreadystatechange(resp) {
              if (resp.readyState === readyState) { ok(resp) }
            },
            onerror, onabort: onerror
          })
          onAbort(signal, (reason) => { abort(reason) })
        })
      } catch (resp) {
        if (resp instanceof Error) { throw resp }
        handleError(resp, signal)
      }
      return new Response(resp.response, {
        url: resp.finalUrl,
        status: resp.status,
        statusText: resp.statusText,
        headers: parseHeaders(resp.responseHeaders ?? '')
      })
    }
    GM_fetch.responseType = responseType
    const props = getProps(GM_xmlhttpRequest)
    defProps(GM_fetch, props)
    return GM_fetch
  }
});
`,{trunc:Ao,pow:Jg,min:eb}=Math,pu=["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],go=Array.from(pu,(e,t)=>Jg(1024,t)),bo=e=>{let t=1,n=go.length;for(;t<n&&e>go[t];)t++;return t--,(e/go[t]).toFixed(eb(2,t>>1))+" "+pu[t]},tb=(e,t=":")=>{e=Ao(e);let n=[Ao(e/3600),Ao(e/60)%60,e%60],r;for(n[0]===0&&n.shift(),r=0;r<n.length;r++)n[r]=String(n[r]).padStart(2,"0");return n.join(t)},nb=typeof OffscreenCanvas=="function"?(e,t="image/png",n)=>{const r=new OffscreenCanvas(e.videoWidth,e.videoHeight);return r.getContext("2d").drawImage(e,0,0,r.width,r.height),r.convertToBlob({type:t,quality:n})}:(e,t="image/png",n)=>new Promise(r=>{const i=document.createElement("canvas");({videoWidth:i.width,videoHeight:i.height}=e),i.getContext("2d").drawImage(e,0,0,i.width,i.height),i.toBlob(r,t,n)}),rb=(e,t="")=>{const n=document.createElement("a");n.href=e,n.download=t,n.click()},{apply:ln}=Reflect,{addEventListener:Cr,removeEventListener:ka}=EventTarget.prototype,ib=(e,t,n=!1)=>new Promise((r,i)=>{const a=y=>{y.type===t?r(y):i(y),ln(ka,e,o),ln(ka,e,u)},o=[t,a,n],u=["error",a,n];ln(Cr,e,o),ln(Cr,e,u)}),ab=e=>new Promise(t=>{if(document.readyState==="complete")return t();const n=window,r=!1,i=u=>{t(u.type===e?u:null),ln(ka,n,a),ln(ka,n,o)},a=[e,i,r],o=["load",i,r];ln(Cr,n,a),ln(Cr,n,o)}),Md=()=>{};class ob{#r;#n=new Map;#e=new Map;#t=new Map;#i=t=>{const{target:n}=t;if(n!=null){const a=n.tagName;if(a==="INPUT"||a==="TEXTAREA"||n.isContentEditable)return}const{key:r}=t,i=this.#e.get(r);if(i!=null){const a=this.#n;t.repeat||a.set(r,-1);const o=(a.get(r)??-1)+1;a.set(r,o),t.preventDefault(),t.stopPropagation(),i(t,o);return}};#a=t=>{const{key:n}=t,r=this.#n,i=r.get(n);if(r.delete(n),i==null)return;const a=this.#t.get(n);a!=null&&(t.preventDefault(),t.stopPropagation(),a(t,i))};constructor(t=document,n){this.#r=t;const r={capture:!0,signal:n};ln(Cr,t,["keydown",this.#i,r]),ln(Cr,t,["keyup",this.#a,r])}set(t,n,r){n==null&&r==null?(this.#e.delete(t),this.#t.delete(t)):(this.#e.set(t,n??Md),this.#t.set(t,r??Md))}}const lb=()=>{const{href:e,hostname:t}=new URL(location.pathname,location.href);return`// ==UserScript==
// @name dispatch-GM_fetch
// @namespace ${e}
// @version 0.1
// @description dispatch GM_fetch and GM_xmlhttpRequest
// @author ${t}
// @match  ${e}
// @run-at document-start
// @grant GM_xmlhttpRequest
// @grant GM_fetch
${Ug.map(n=>`// @connect ${n}`).join(`
`)}
// @connect *
// ==/UserScript==
'use strict';
${Gg}
var GM_fetch
const { Reflect: { apply }, dispatchEvent: _emit } = unsafeWindow
const e = new CustomEvent('external:tampermonkey:grant', { detail: { GM_xmlhttpRequest, GM_fetch } })
unsafeWindow.addEventListener('load', () => { apply(_emit, unsafeWindow, [e]) }, { once: !0, capture: !0 })
`},{isArray:sb}=Array,db=Ir({emits:{dragover:null,drop:null},methods:{handle(e){this.$emit(e.type,e)}},beforeMount(){document.addEventListener("dragover",this.handle),document.addEventListener("drop",this.handle)},beforeUnmount(){document.removeEventListener("dragover",this.handle),document.removeEventListener("drop",this.handle)},render(){return Ee("global")}}),cb=Ir({name:"DropFile",emits:{change(e){return sb(e)}},props:{accept:{type:String,default:""},global:{type:Boolean,default:!1},reason:{type:String,default:""},multiple:{type:Boolean,default:!0},paste:{type:Boolean,default:!1}},setup(e,t){return{textarea:vr(null),file:vr(null)}},methods:{handleClick(e){e.target!==this.file&&(this.file.click(),e.preventDefault()),e.stopPropagation()},handleChange(e){const t=this.file.files;t?.length>0&&this.$emit("change",Array.from(t))},handleDragover(e){e.preventDefault(),e.stopPropagation()},handleDrop(e){const{target:t}=e;if(this.global&&!this.$el.contains(t)&&e.type!=="paste"){const r=t.tagName;if(r==="INPUT"||r==="TEXTAREA"||t.isContentEditable)return}e.preventDefault(),e.stopPropagation();const n=(e.dataTransfer??e.clipboardData).files;n.length>0&&this.$emit("change",Array.from(n))}},render(){const e=this,t=e.$slots.default;return R("div",{class:"ivu-upload ivu-upload-drag",onDragover:e.handleDragover,onDrop:e.handleDrop,onClick:e.handleClick},[e.global?R(db,{onDragover:e.handleDragover,onDrop:e.handleDrop}):null,R("input",{ref:"file",type:"file",accept:e.accept,multiple:e.multiple,onChange:e.handleChange}),R("textarea",{ref:"textarea",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",border:"0 none",resize:"none",cursor:"pointer",opacity:"0"},onCopy:e.handleDragover,onPaste:e.handleDrop}),t!=null?t():[R("div",{class:"ivu-card-head",style:"text-align: left"},[R("p",null,[R(sn,{type:"ios-folder-open",size:20}),`单击或拖动${e.reason}文件到此${e.global?"页面":"处"}`])]),R("div",{class:"ivu-card-body"},e.$slots.body?.())]])}}),ub=Ir({name:"PlayList",emits:["play"],props:{list:{type:Array,required:!0},name:{type:String,default:"播放列表"}},data(){return{isDrawerOpen:!1,index:0}},watch:{list(e,t){e!==t&&this.reset()}},computed:{title(){const{name:e,index:t,list:n}=this;return`${e}[${n.length===0?"0/0":`${t+1}/${n.length}`}]`}},methods:{set(e){this.isDrawerOpen=!1,this.index=e,this.current()},reset(){this.index=0,this.current()},prev(){--this.index<0&&(this.index=(this.list.length||1)-1),this.current()},current(){const e=this.list[this.index];e!=null&&this.$emit("play",e)},next(){++this.index>=this.list.length&&(this.index=0),this.current()},delete(e){const t=this,n=t.index;t.list.splice(e,1),n>=t.list.length?t.prev():n===e&&t.current()},openDrawer(){this.isDrawerOpen=!0},setDrawer(e){this.isDrawerOpen=e}},render(e,t){const n=this,{title:r}=n;return R(Rt,{title:r},t[64]??={extra:()=>[R(ba,null,t[66]??=()=>[R(kt,{onClick:n.openDrawer},()=>"详细信息"),R(kt,{onClick:n.prev},()=>"上一个"),R(kt,{onClick:n.next},()=>"下一个")]),R(UA,{title:r,width:384,modelValue:n.isDrawerOpen,"onUpdate:modelValue":n.setDrawer},t[75]??=()=>[R(va,{onOnClick:n.set,style:"padding: 0px"},t[78]??=()=>Array.from(n.list,(i,a)=>R(Rt,{title:i.name,name:a,selected:n.index===a},{extra:()=>R(kt,{onClick(o){o.stopPropagation(),n.delete(a)}},()=>R(sn,{type:"md-close"}))})))])]})}});var fu={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(self,()=>(()=>{var n={916:(o,u,y)=>{var p=y(471);o.exports=function(m){var v,h="",E=(m=m||{}).video,k=m.options,b=p.$escape,I=m.tran,D=m.icons,_=m.index,F=p.$each;return m.$value,m.$index,h+=`<div class="dplayer-mask"></div>
<div class="dplayer-video-wrap">
    `,v=y(568)(E),h+=v,h+=`
    `,k.logo&&(h+=`
    <div class="dplayer-logo">
        <img src="`,h+=b(k.logo),h+=`">
    </div>
    `),h+=`
    <div class="dplayer-danmaku"`,k.danmaku&&k.danmaku.bottom&&(h+=' style="margin-bottom:',h+=b(k.danmaku.bottom),h+='"'),h+=`>
        <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>
    </div>
    <div class="dplayer-subtitle"></div>
    <div class="dplayer-bezel">
        <span class="dplayer-bezel-icon"></span>
        `,k.danmaku&&(h+=`
        <span class="dplayer-danloading">`,h+=b(I("danmaku-loading")),h+=`</span>
        `),h+=`
        <span class="diplayer-loading-icon">`,h+=D.loading,h+=`</span>
    </div>
</div>
<div class="dplayer-controller-mask"></div>
<div class="dplayer-controller">
    <div class="dplayer-icons dplayer-comment-box">
        <button class="dplayer-icon dplayer-comment-setting-icon" data-balloon="`,h+=b(I("setting")),h+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,h+=D.pallette,h+=`</span>
        </button>
        <div class="dplayer-comment-setting-box">
            <div class="dplayer-comment-setting-color">
                <div class="dplayer-comment-setting-title">`,h+=b(I("set-danmaku-color")),h+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=b(_),h+=`" value="#fff" checked>
                    <span style="background: #fff;"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=b(_),h+=`" value="#e54256">
                    <span style="background: #e54256"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=b(_),h+=`" value="#ffe133">
                    <span style="background: #ffe133"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=b(_),h+=`" value="#64DD17">
                    <span style="background: #64DD17"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=b(_),h+=`" value="#39ccff">
                    <span style="background: #39ccff"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=b(_),h+=`" value="#D500F9">
                    <span style="background: #D500F9"></span>
                </label>
            </div>
            <div class="dplayer-comment-setting-type">
                <div class="dplayer-comment-setting-title">`,h+=b(I("set-danmaku-type")),h+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,h+=b(_),h+=`" value="1">
                    <span>`,h+=b(I("top")),h+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,h+=b(_),h+=`" value="0" checked>
                    <span>`,h+=b(I("rolling")),h+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,h+=b(_),h+=`" value="2">
                    <span>`,h+=b(I("bottom")),h+=`</span>
                </label>
            </div>
        </div>
        <input class="dplayer-comment-input" type="text" placeholder="`,h+=b(I("input-danmaku-enter")),h+=`" maxlength="30">
        <button class="dplayer-icon dplayer-send-icon" data-balloon="`,h+=b(I("send")),h+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,h+=D.send,h+=`</span>
        </button>
    </div>
    <div class="dplayer-icons dplayer-icons-left">
        <button class="dplayer-icon dplayer-play-icon">
            <span class="dplayer-icon-content">`,h+=D.play,h+=`</span>
        </button>
        <div class="dplayer-volume">
            <button class="dplayer-icon dplayer-volume-icon">
                <span class="dplayer-icon-content">`,h+=D.volumeDown,h+=`</span>
            </button>
            <div class="dplayer-volume-bar-wrap" data-balloon-pos="up">
                <div class="dplayer-volume-bar">
                    <div class="dplayer-volume-bar-inner" style="background: `,h+=b(k.theme),h+=`;">
                        <span class="dplayer-thumb" style="background: `,h+=b(k.theme),h+=`"></span>
                    </div>
                </div>
            </div>
        </div>
        <span class="dplayer-time">
            <span class="dplayer-ptime">0:00</span> /
            <span class="dplayer-dtime">0:00</span>
        </span>
        `,k.live&&(h+=`
        <span class="dplayer-live-badge"><span class="dplayer-live-dot" style="background: `,h+=b(k.theme),h+=';"></span>',h+=b(I("live")),h+=`</span>
        `),h+=`
    </div>
    <div class="dplayer-icons dplayer-icons-right">
        `,k.video.quality&&(h+=`
        <div class="dplayer-quality">
            <button class="dplayer-icon dplayer-quality-icon">`,h+=b(k.video.quality[k.video.defaultQuality].name),h+=`</button>
            <div class="dplayer-quality-mask">
                <div class="dplayer-quality-list">
                `,F(k.video.quality,function(T,Q){h+=`
                    <div class="dplayer-quality-item" data-index="`,h+=b(Q),h+='">',h+=b(T.name),h+=`</div>
                `}),h+=`
                </div>
            </div>
        </div>
        `),h+=`
        `,k.screenshot&&(h+=`
        <div class="dplayer-icon dplayer-camera-icon" data-balloon="`,h+=b(I("screenshot")),h+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,h+=D.camera,h+=`</span>
        </div>
        `),h+=`
        `,k.airplay&&(h+=`
        <div class="dplayer-icon dplayer-airplay-icon" data-balloon="`,h+=b(I("airplay")),h+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,h+=D.airplay,h+=`</span>
        </div>
        `),h+=`
        `,k.chromecast&&(h+=`
        <div class="dplayer-icon dplayer-chromecast-icon" data-balloon="`,h+=b(I("chromecast")),h+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,h+=D.chromecast,h+=`</span>
        </div>
        `),h+=`
        <div class="dplayer-comment">
            <button class="dplayer-icon dplayer-comment-icon" data-balloon="`,h+=b(I("send-danmaku")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=D.comment,h+=`</span>
            </button>
        </div>
        `,k.subtitle&&(h+=`
        `,typeof k.subtitle.url=="string"?(h+=`
        <div class="dplayer-subtitle-btn">
            <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="`,h+=b(I("hide-subs")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=D.subtitle,h+=`</span>
            </button>
        </div>
        `):(h+=`
        <div class="dplayer-subtitles">
            <button class="dplayer-icon dplayer-subtitles-icon" data-balloon="`,h+=b(I("subtitle")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=D.subtitle,h+=`</span>
            </button>
            <div class="dplayer-subtitles-box">
                <div class="dplayer-subtitles-panel">
                    `,F(k.subtitle.url,function(T,Q){h+=`
                        <div class="dplayer-subtitles-item" data-subtitle="`,h+=b(T.url),h+=`">
                            <!-- if lang, show tran(lang). if lang and name, show name + (tran(lang)). if name, show name. off option use lang for translation. -->
                            <span class="dplayer-label">`,h+=b(T.lang?T.name?T.name+" ("+I(T.lang)+")":I(T.lang):T.name),h+=`</span>
                        </div>
                    `}),h+=`
                </div>
            </div>
        </div>
        `),h+=`
        `),h+=`
        <div class="dplayer-setting">
            <button class="dplayer-icon dplayer-setting-icon" data-balloon="`,h+=b(I("setting")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=D.setting,h+=`</span>
            </button>
            <div class="dplayer-setting-box">
                <div class="dplayer-setting-origin-panel">
                    <div class="dplayer-setting-item dplayer-setting-speed">
                        <span class="dplayer-label">`,h+=b(I("speed")),h+=`</span>
                        <div class="dplayer-toggle">`,h+=D.right,h+=`</div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-loop">
                        <span class="dplayer-label">`,h+=b(I("loop")),h+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">
                            <label for="dplayer-toggle"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-showdan">
                        <span class="dplayer-label">`,h+=b(I("show-danmaku")),h+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">
                            <label for="dplayer-toggle-dan"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danunlimit">
                        <span class="dplayer-label">`,h+=b(I("unlimited-danmaku")),h+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-danunlimit-setting-input" type="checkbox" name="dplayer-toggle-danunlimit">
                            <label for="dplayer-toggle-danunlimit"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danmaku">
                        <span class="dplayer-label">`,h+=b(I("opacity-danmaku")),h+=`</span>
                        <div class="dplayer-danmaku-bar-wrap">
                            <div class="dplayer-danmaku-bar">
                                <div class="dplayer-danmaku-bar-inner">
                                    <span class="dplayer-thumb"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dplayer-setting-speed-panel">
                    `,F(k.playbackSpeed,function(T,Q){h+=`
                        <div class="dplayer-setting-speed-item" data-speed="`,h+=b(T),h+=`">
                            <span class="dplayer-label">`,h+=b(T===1?I("normal"):T),h+=`</span>
                        </div>
                    `}),h+=`
                </div>
            </div>
        </div>
        <div class="dplayer-full">
            <button class="dplayer-icon dplayer-full-in-icon" data-balloon="`,h+=b(I("web-fullscreen")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=D.fullWeb,h+=`</span>
            </button>
            <button class="dplayer-icon dplayer-full-icon" data-balloon="`,h+=b(I("fullscreen")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=D.full,h+=`</span>
            </button>
        </div>
    </div>
    <div class="dplayer-bar-wrap">
        <div class="dplayer-bar-time hidden">00:00</div>
        <div class="dplayer-bar-preview"></div>
        <div class="dplayer-bar">
            <div class="dplayer-loaded" style="width: 0;"></div>
            <div class="dplayer-played" style="width: 0; background: `,h+=b(k.theme),h+=`">
                <span class="dplayer-thumb" style="background: `,h+=b(k.theme),h+=`"></span>
            </div>
        </div>
    </div>
</div>
<div class="dplayer-info-panel dplayer-info-panel-hide">
    <div class="dplayer-info-panel-close">[x]</div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-version">
        <span class="dplayer-info-panel-item-title">Player version</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-fps">
        <span class="dplayer-info-panel-item-title">Player FPS</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-type">
        <span class="dplayer-info-panel-item-title">Video type</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-url">
        <span class="dplayer-info-panel-item-title">Video url</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-resolution">
        <span class="dplayer-info-panel-item-title">Video resolution</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-duration">
        <span class="dplayer-info-panel-item-title">Video duration</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    `,k.danmaku&&(h+=`
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-id">
        <span class="dplayer-info-panel-item-title">Danmaku id</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-api">
        <span class="dplayer-info-panel-item-title">Danmaku api</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-amount">
        <span class="dplayer-info-panel-item-title">Danmaku amount</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    `),h+=`
</div>
<div class="dplayer-menu">
    `,F(k.contextmenu,function(T,Q){h+=`
        <div class="dplayer-menu-item">
            <a`,T.link&&(h+=' target="_blank"'),h+=' href="',h+=b(T.link||"javascript:void(0);"),h+='">',T.key&&(h+=" ",h+=b(I(T.key))),T.text&&(h+=" ",h+=b(T.text)),h+=`</a>
        </div>
    `}),h+=`
</div>
<div class="dplayer-notice-list"></div>
<button class="dplayer-mobile-play">
    `,h+=D.play,h+=`
</button>`}},568:(o,u,y)=>{var p=y(471);o.exports=function(m){var v="",h=(m=m||{}).enableSubtitle,E=m.subtitle,k=m.current,b=m.airplay,I=m.pic,D=p.$escape,_=m.screenshot,F=m.preload,T=m.url;return h=E&&E.type==="webvtt",v+=`
<video
    class="dplayer-video `,k&&(v+="dplayer-video-current"),v+=`"
    webkit-playsinline
    `,b&&(v+=' x-webkit-airplay="allow" '),v+=`
    playsinline
    `,I&&(v+='poster="',v+=D(I),v+='"'),v+=`
    `,(_||h)&&(v+='crossorigin="anonymous"'),v+=`
    `,F&&(v+='preload="',v+=D(F),v+='"'),v+=`
    `,b?v+=`
    nosrc
    `:T&&(v+=`
    src="`,v+=D(T),v+=`"
    `),v+=`
    >
    `,b&&(v+=`
    <source src="`,v+=D(T),v+=`">
    `),v+=`
    `,h&&(v+=`
    <track class="dplayer-subtrack" kind="metadata" default src="`,v+=D(typeof E.url=="string"?E.url:E.url[E.index].url),v+=`"></track>
    `),v+`
</video>`}},49:(o,u,y)=>{y.d(u,{Z:()=>E});var p=y(415),m=y.n(p),v=y(352),h=y.n(v)()(m());h.push([o.id,`:root {
  --balloon-border-radius: 2px;
  --balloon-color: rgba(16, 16, 16, 0.95);
  --balloon-text-color: #fff;
  --balloon-font-size: 12px;
  --balloon-move: 4px; }

button[aria-label][data-balloon-pos] {
  overflow: visible; }

[aria-label][data-balloon-pos] {
  position: relative;
  cursor: pointer; }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: 12px;
    font-size: var(--balloon-font-size);
    background: rgba(16, 16, 16, 0.95);
    background: var(--balloon-color);
    border-radius: 2px;
    color: #fff;
    color: var(--balloon-text-color);
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    padding: .5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10; }
  [aria-label][data-balloon-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: rgba(16, 16, 16, 0.95);
    border-top-color: var(--balloon-color);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: "";
    position: absolute;
    z-index: 10; }
  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none; }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre; }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word; }
  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {
    left: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {
    left: 5px; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {
    right: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {
    right: 5px; }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, 4px);
    transform: translate(0, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    margin-bottom: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {
    left: 50%;
    transform: translate(-50%, 4px);
    transform: translate(-50%, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    top: 100%;
    transform: translate(0, calc(4px * -1));
    transform: translate(0, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    margin-top: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: rgba(16, 16, 16, 0.95);
    border-bottom-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {
    left: 50%;
    transform: translate(-50%, calc(4px * -1));
    transform: translate(-50%, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    right: 100%;
    top: 50%;
    transform: translate(4px, -50%);
    transform: translate(var(--balloon-move), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {
    margin-right: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: rgba(16, 16, 16, 0.95);
    border-left-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(4px * -1), -50%);
    transform: translate(calc(var(--balloon-move) * -1), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {
    margin-left: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: rgba(16, 16, 16, 0.95);
    border-right-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal; }
  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {
    width: 80px; }
  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {
    width: 150px; }
  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {
    width: 260px; }
  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
    width: 380px; }
    @media screen and (max-width: 768px) {
      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
        width: 90vw; } }
  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {
    width: 100%; }
`,"",{version:3,sources:["webpack://./node_modules/.pnpm/balloon-css@1.2.0/node_modules/balloon-css/balloon.css"],names:[],mappings:"AAAA;EACE,4BAA4B;EAC5B,uCAAuC;EACvC,0BAA0B;EAC1B,yBAAyB;EACzB,mBAAmB,EAAE;;AAEvB;EACE,iBAAiB,EAAE;;AAErB;EACE,kBAAkB;EAClB,eAAe,EAAE;EACjB;IACE,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,cAAc;IACd,wIAAwI;IACxI,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,eAAmC;IAAnC,mCAAmC;IACnC,kCAAgC;IAAhC,gCAAgC;IAChC,kBAAkB;IAClB,WAAgC;IAAhC,gCAAgC;IAChC,2CAA2C;IAC3C,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,WAAW,EAAE;EACf;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,wCAAsC;IAAtC,sCAAsC;IACtC,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,WAAW;IACX,kBAAkB;IAClB,WAAW,EAAE;EACf;IACE,UAAU;IACV,oBAAoB,EAAE;EACxB;IACE,qJAAqJ,EAAE;EACzJ;IACE,gBAAgB,EAAE;EACpB;IACE,qBAAqB;IACrB,sBAAsB,EAAE;EAC1B;IACE,gBAAgB,EAAE;EACpB;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,OAAO,EAAE;EACX;IACE,SAAS,EAAE;EACb;IACE,QAAQ,EAAE;EACZ;IACE,UAAU,EAAE;EACd;IACE,0BAA0B,EAAE;EAC9B;IACE,0BAA0B,EAAE;EAC9B;IACE,YAAY;IACZ,qBAAqB;IACrB,4BAA4C;IAA5C,4CAA4C,EAAE;EAChD;IACE,mBAAmB,EAAE;EACvB;IACE,SAAS;IACT,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,SAAS;IACT,uCAAuD;IAAvD,uDAAuD,EAAE;EAC3D;IACE,gBAAgB,EAAE;EACpB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,2CAAyC;IAAzC,yCAAyC,EAAE;EAC7C;IACE,SAAS;IACT,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,WAAW;IACX,QAAQ;IACR,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,kBAAkB,EAAE;EACtB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,yCAAuC;IAAvC,uCAAuC,EAAE;EAC3C;IACE,UAAU;IACV,QAAQ;IACR,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,iBAAiB,EAAE;EACrB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,0CAAwC;IAAxC,wCAAwC,EAAE;EAC5C;IACE,mBAAmB,EAAE;EACvB;IACE,WAAW,EAAE;EACf;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;IACd;MACE;QACE,WAAW,EAAE,EAAE;EACrB;IACE,WAAW,EAAE",sourcesContent:[`:root {
  --balloon-border-radius: 2px;
  --balloon-color: rgba(16, 16, 16, 0.95);
  --balloon-text-color: #fff;
  --balloon-font-size: 12px;
  --balloon-move: 4px; }

button[aria-label][data-balloon-pos] {
  overflow: visible; }

[aria-label][data-balloon-pos] {
  position: relative;
  cursor: pointer; }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: var(--balloon-font-size);
    background: var(--balloon-color);
    border-radius: 2px;
    color: var(--balloon-text-color);
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    padding: .5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10; }
  [aria-label][data-balloon-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: var(--balloon-color);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: "";
    position: absolute;
    z-index: 10; }
  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none; }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre; }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word; }
  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {
    left: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {
    left: 5px; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {
    right: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {
    right: 5px; }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    margin-bottom: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {
    left: 50%;
    transform: translate(-50%, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    top: 100%;
    transform: translate(0, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    margin-top: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {
    left: 50%;
    transform: translate(-50%, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    right: 100%;
    top: 50%;
    transform: translate(var(--balloon-move), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {
    margin-right: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(var(--balloon-move) * -1), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {
    margin-left: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal; }
  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {
    width: 80px; }
  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {
    width: 150px; }
  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {
    width: 260px; }
  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
    width: 380px; }
    @media screen and (max-width: 768px) {
      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
        width: 90vw; } }
  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {
    width: 100%; }
`],sourceRoot:""}]);const E=h},685:(o,u,y)=>{y.d(u,{Z:()=>F});var p=y(415),m=y.n(p),v=y(352),h=y.n(v),E=y(49),k=y(80),b=y.n(k),I=new URL(y(831),y.b),D=h()(m());D.i(E.Z);var _=b()(I);D.push([o.id,`@keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
.dplayer {
  position: relative;
  overflow: hidden;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  line-height: 1;
}
.dplayer * {
  box-sizing: content-box;
}
.dplayer svg {
  width: 100%;
  height: 100%;
}
.dplayer svg path,
.dplayer svg circle {
  fill: #fff;
}
.dplayer:-webkit-full-screen {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  transform: translate(0, 0);
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-danmaku {
  display: none;
}
.dplayer.dplayer-live .dplayer-time {
  display: none;
}
.dplayer.dplayer-live .dplayer-bar-wrap {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-speed {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-loop {
  display: none;
}
.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {
  display: none;
}
.dplayer.dplayer-arrow .dplayer-danmaku {
  font-size: 18px;
}
.dplayer.dplayer-arrow .dplayer-icon {
  margin: 0 -3px;
}
.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {
  animation-play-state: running;
}
@media (min-width: 900px) {
  .dplayer.dplayer-playing .dplayer-controller-mask {
    opacity: 0;
  }
  .dplayer.dplayer-playing .dplayer-controller {
    opacity: 0;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller-mask {
    opacity: 1;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller {
    opacity: 1;
  }
}
.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {
  display: block;
}
.dplayer.dplayer-loading .dplayer-danmaku,
.dplayer.dplayer-paused .dplayer-danmaku,
.dplayer.dplayer-loading .dplayer-danmaku-move,
.dplayer.dplayer-paused .dplayer-danmaku-move {
  animation-play-state: paused;
}
.dplayer.dplayer-hide-controller {
  cursor: none;
}
.dplayer.dplayer-hide-controller .dplayer-controller-mask {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-hide-controller .dplayer-controller {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-show-controller .dplayer-controller-mask {
  opacity: 1;
}
.dplayer.dplayer-show-controller .dplayer-controller {
  opacity: 1;
}
.dplayer.dplayer-fulled {
  width: 100% !important;
  height: 100% !important;
}
.dplayer.dplayer-fulled {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: static;
  display: inline-block;
}
.dplayer.dplayer-mobile .dplayer-bar-time {
  display: none;
}
.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-mobile-play {
  display: block;
}
.dplayer-web-fullscreen-fix {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
[data-balloon]:before {
  display: none;
}
[data-balloon]:after {
  padding: 0.3em 0.7em;
  background: rgba(17, 17, 17, 0.7);
}
[data-balloon][data-balloon-pos="up"]:after {
  margin-bottom: 0;
}
.dplayer-bezel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -26px 0 0 -26px;
  height: 52px;
  width: 52px;
  padding: 12px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {
  animation: bezel-hide 0.5s linear;
}
@keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
.dplayer-bezel .dplayer-danloading {
  position: absolute;
  top: 50%;
  margin-top: -7px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-bezel .diplayer-loading-icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  height: 36px;
  width: 36px;
  pointer-events: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {
  display: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {
  animation: diplayer-loading-dot-fade 0.8s ease infinite;
  opacity: 0;
  transform-origin: 4px 4px;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {
  animation-delay: 0.1s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {
  animation-delay: 0.2s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {
  animation-delay: 0.3s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {
  animation-delay: 0.4s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {
  animation-delay: 0.5s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {
  animation-delay: 0.6s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {
  animation-delay: 0.7s;
}
@keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
.dplayer-controller-mask {
  background: url(`+_+`) repeat-x bottom;
  height: 98px;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.dplayer-controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  padding: 0 20px;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  transition: all 0.3s ease;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons {
  display: none;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap {
  padding: 5px 0;
  cursor: pointer;
  position: absolute;
  bottom: 33px;
  width: calc(100% - 40px);
  height: 3px;
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {
  display: block;
  width: 8px;
  transform: translateX(-4px);
  top: 4px;
  height: 40%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {
  z-index: 12;
  position: absolute;
  top: 5px;
  width: 6px;
  height: 20%;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  transform: translateX(-3px);
  transition: all 0.2s ease-in-out;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {
  display: none;
  position: absolute;
  left: 50%;
  top: -24px;
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {
  position: absolute;
  background: #fff;
  pointer-events: none;
  display: none;
  background-size: 16000px 100%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {
  position: absolute;
  left: 0px;
  top: -20px;
  border-radius: 4px;
  padding: 5px 7px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  word-wrap: normal;
  word-break: normal;
  z-index: 2;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar {
  position: relative;
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  height: 3px;
  transition: all 0.5s ease;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 3px;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons {
  height: 38px;
  position: absolute;
  bottom: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box {
  display: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  height: 38px;
  bottom: 0;
  left: 20px;
  right: 20px;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {
  position: absolute;
  background: rgba(28, 28, 28, 0.9);
  bottom: 41px;
  left: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 10px 16px;
  font-size: 14px;
  width: 204px;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {
  font-size: 13px;
  color: #fff;
  line-height: 30px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {
  margin-bottom: 6px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {
  border-radius: 4px 0 0 4px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {
  border-radius: 0 4px 4px 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {
  width: 33%;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  margin-right: -1px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {
  background: #E4E4E6;
  color: #1c1c1c;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {
  font-size: 0;
  padding: 6px;
  display: inline-block;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {
  outline: none;
  border: none;
  padding: 8px 31px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  background: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-moz-placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right {
  right: 20px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {
  padding: 8px;
}
.dplayer-controller .dplayer-icons .dplayer-time,
.dplayer-controller .dplayer-icons .dplayer-live-badge {
  line-height: 38px;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
  font-size: 13px;
  cursor: default;
}
.dplayer-controller .dplayer-icons .dplayer-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: 4%;
  margin-right: 5px;
  content: '';
  border-radius: 6px;
}
.dplayer-controller .dplayer-icons .dplayer-icon {
  width: 40px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {
  opacity: 1;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {
  color: #fff;
  width: auto;
  line-height: 22px;
  font-size: 14px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {
  padding: 10px 9px 9px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {
  padding-top: 8.5px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {
  width: 43px;
}
.dplayer-controller .dplayer-icons .dplayer-volume {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {
  display: inline-block;
  margin: 0 10px 0 -5px;
  vertical-align: middle;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {
  position: relative;
  top: 17px;
  width: 0;
  height: 3px;
  background: #aaa;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: -moz-fit-content;
  width: fit-content;
  max-width: 240px;
  min-width: 120px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: 150px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {
  width: 70px;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
  padding: 5px 0;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {
  padding: 0 10px;
  display: inline;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {
  position: relative;
  top: 8.5px;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  background: #aaa;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #aaa;
}
.dplayer-controller .dplayer-icons .dplayer-full {
  display: inline-block;
  height: 100%;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: absolute;
  top: -30px;
  z-index: 1;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-quality {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {
  display: none;
  position: absolute;
  bottom: 38px;
  left: -18px;
  width: 80px;
  padding-bottom: 12px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {
  display: none;
  font-size: 12px;
  width: 80px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 25px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-comment {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-label {
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}
.dplayer-controller .dplayer-icons .dplayer-toggle {
  width: 32px;
  height: 20px;
  text-align: center;
  font-size: 0;
  vertical-align: middle;
  position: absolute;
  top: 5px;
  right: 10px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input {
  max-height: 0;
  max-width: 0;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label {
  display: inline-block;
  position: relative;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  border-radius: 15px;
  background: #fff;
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 18px;
  width: 18px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {
  border-color: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {
  width: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {
  left: 12px;
}
.dplayer-mobile-play {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 0;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dplayer-danmaku {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
}
.dplayer-danmaku .dplayer-danmaku-item {
  display: inline-block;
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.dplayer-danmaku .dplayer-danmaku-item--demo {
  position: absolute;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-right {
  position: absolute;
  right: 0;
  transform: translateX(100%);
}
.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
  will-change: transform;
  animation-name: 'danmaku';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
.dplayer-danmaku .dplayer-danmaku-top,
.dplayer-danmaku .dplayer-danmaku-bottom {
  position: absolute;
  width: 100%;
  text-align: center;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,
.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {
  will-change: visibility;
  animation-name: 'danmaku-center';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
.dplayer-logo {
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 20px;
  max-width: 50px;
  max-height: 50px;
}
.dplayer-logo img {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
.dplayer-menu {
  position: absolute;
  width: 170px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.85);
  padding: 5px 0;
  overflow: hidden;
  z-index: 3;
  display: none;
}
.dplayer-menu.dplayer-menu-show {
  display: block;
}
.dplayer-menu .dplayer-menu-item {
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-menu .dplayer-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-menu .dplayer-menu-item a {
  padding: 0 10px;
  line-height: 30px;
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-menu .dplayer-menu-item a:hover {
  text-decoration: none;
}
.dplayer-notice-list {
  position: absolute;
  bottom: 60px;
  left: 20px;
}
.dplayer-notice-list .dplayer-notice {
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: table;
  pointer-events: none;
  animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  animation: removeNotice 0.3s ease 1 forwards;
}
@keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
.dplayer-subtitle {
  position: absolute;
  bottom: 40px;
  width: 90%;
  left: 5%;
  text-align: center;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.dplayer-subtitle.dplayer-subtitle-hide {
  display: none;
}
.dplayer-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;
}
.dplayer-mask.dplayer-mask-show {
  display: block;
}
.dplayer-video-wrap {
  position: relative;
  background: #000;
  font-size: 0;
  width: 100%;
  height: 100%;
}
.dplayer-video-wrap .dplayer-video {
  width: 100%;
  height: 100%;
  display: none;
}
.dplayer-video-wrap .dplayer-video-current {
  display: block;
}
.dplayer-video-wrap .dplayer-video-prepare {
  display: none;
}
.dplayer-info-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 400px;
  background: rgba(28, 28, 28, 0.8);
  padding: 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
.dplayer-info-panel-hide {
  display: none;
}
.dplayer-info-panel .dplayer-info-panel-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item > span {
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-info-panel .dplayer-info-panel-item-title {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item-data {
  width: 260px;
}
`,"",{version:3,sources:["webpack://./src/css/global.less","webpack://./src/css/index.less","webpack://./src/css/player.less","webpack://./src/css/balloon.less","webpack://./src/css/bezel.less","webpack://./src/css/notice.less","webpack://./src/css/controller.less","webpack://./src/css/danmaku.less","webpack://./src/css/logo.less","webpack://./src/css/menu.less","webpack://./src/css/subtitle.less","webpack://./src/css/video.less","webpack://./src/css/info-panel.less"],names:[],mappings:"AAAA;EACI;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;;IAEI,uCAAA;ECEN;AACF;ACzJA;EACI,kBAAA;EACA,gBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,cAAA;AD2JJ;AC/JA;EAOQ,uBAAA;AD2JR;AClKA;EAWQ,WAAA;EACA,YAAA;AD0JR;ACtKA;;EAgBY,UAAA;AD0JZ;ACtJI;EACI,WAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,UAAA;EACA,0BAAA;ADwJR;ACpJI;;;EAKY,aAAA;ADoJhB;ACzJI;EAUQ,aAAA;ADkJZ;AC5JI;EAcQ,aAAA;ADiJZ;AC7II;EAEQ,aAAA;AD8IZ;AChJI;EAKQ,aAAA;AD8IZ;ACnJI;EAQQ,aAAA;AD8IZ;ACtJI;EAWQ,aAAA;AD8IZ;AC3IQ;EAEQ,aAAA;AD4IhB;ACvII;EAEQ,eAAA;ADwIZ;AC1II;EAKQ,cAAA;ADwIZ;ACpII;EAEQ,6BAAA;ADqIZ;AClIQ;EAAA;IAEQ,UAAA;EDoId;ECtIM;IAKQ,UAAA;EDoId;ECjIU;IAEQ,UAAA;EDkIlB;ECpIU;IAKQ,UAAA;EDkIlB;AACF;AC7HI;EAEQ,cAAA;AD8HZ;AC1HI;;;;EAIQ,4BAAA;AD4HZ;ACxHI;EACI,YAAA;AD0HR;AC3HI;EAIQ,UAAA;EACA,2BAAA;AD0HZ;AC/HI;EAQQ,UAAA;EACA,2BAAA;AD0HZ;ACvHI;EAEQ,UAAA;ADwHZ;AC1HI;EAKQ,UAAA;ADwHZ;ACrHI;EAKI,sBAAA;EACA,uBAAA;ADuHR;AC7HI;EACI,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;ADyHR;ACrHI;;;;;EAOY,aAAA;ADqHhB;AC5HI;EAUY,gBAAA;EACA,qBAAA;ADqHhB;AChII;EAgBQ,aAAA;ADmHZ;AChHQ;EAEQ,aAAA;ADiHhB;ACtII;EA0BQ,cAAA;AD+GZ;ACzGA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;AD2GJ;AElSA;EACI,aAAA;AFoSJ;AEjSA;EACI,oBAAA;EACA,iCAAA;AFmSJ;AEhSA;EACI,gBAAA;AFkSJ;AG9SA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;EACA,oBAAA;AHgTJ;AGxTA;EAUQ,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AHiTR;AGhTQ;EACI,iCAAA;AHkTZ;AGhTQ;EACI;IACI,UAAA;IACA,mBAAA;EHkTd;EGhTU;IACI,UAAA;IACA,mBAAA;EHkTd;AACF;AGnVA;EAqCQ,kBAAA;EACA,QAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,0CAAA;AHiTR;AG7VA;EA+CQ,aAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,oBAAA;AHiTR;AGvWA;EAwDY,aAAA;AHkTZ;AG1WA;EA2DY,uDAAA;EACA,UAAA;EACA,yBAAA;AHkTZ;AI/WC;EDgEmB,qBAAA;AHkTpB;AIlXC;EDgEmB,qBAAA;AHqTpB;AIrXC;EDgEmB,qBAAA;AHwTpB;AIxXC;EDgEmB,qBAAA;AH2TpB;AI3XC;EDgEmB,qBAAA;AH8TpB;AI9XC;EDgEmB,qBAAA;AHiUpB;AIjYC;EDgEmB,qBAAA;AHoUpB;AGhUQ;EACI;IACI,YAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,4BAAA;EHkUd;AACF;AKlZA;EACI,mEAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,yBAAA;ALoZJ;AKjZA;EACI,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,yBAAA;ALmZJ;AKlZI;EAEQ,aAAA;ALmZZ;AKrZI;EAKQ,cAAA;ALmZZ;AKjaA;EAkBQ,cAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,wBAAA;EACA,WAAA;ALkZR;AKjZQ;EAEQ,mBAAA;ALkZhB;AKpZQ;EAKQ,cAAA;EACA,UAAA;EACA,2BAAA;EACA,QAAA;EACA,WAAA;ALkZhB;AKnbA;EAqCY,WAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,2BAAA;EACA,gCAAA;ALiZZ;AKhZY;EAEQ,cAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AKxcA;EA2DgB,aAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,2BAAA;ALgZhB;AKrdA;EAyEY,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,aAAA;EACA,6BAAA;AL+YZ;AK5dA;EAgFY,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,oBAAA;AL+YZ;AKneA;EA0FY,kBAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;EACA,oCAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AL4YZ;AK7ZY;EACI,UAAA;AL+ZhB;AKvfA;EA2GY,kBAAA;EACA,WAAA;EACA,WAAA;EACA,oCAAA;EACA,eAAA;AL+YZ;AK9fA;EAiHgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,oCAAA;EACA,WAAA;EACA,yBAAA;EACA,kBAAA;ALgZhB;AKxgBA;EA2HgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;ALgZhB;AKhhBA;EAkIoB,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALiZpB;AK7hBA;EAkJQ,YAAA;EACA,kBAAA;EACA,SAAA;AL8YR;AK7YQ;EACI,aAAA;EACA,kBAAA;EACA,gCAAA;EACA,UAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;AL+YZ;AKxZQ;EAWQ,YAAA;ALgZhB;AK3ZQ;EAcQ,kBAAA;EACA,OAAA;EACA,MAAA;ALgZhB;AKhaQ;EAmBQ,kBAAA;EACA,QAAA;EACA,MAAA;ALgZhB;AKraQ;EAwBQ,kBAAA;EACA,iCAAA;EACA,YAAA;EACA,OAAA;EACA,uCAAA;EACA,kBAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;EACA,gCAAA;EACA,mBAAA;ALgZhB;AK/YgB;EACI,mBAAA;ALiZpB;AKrbQ;EAuCY,aAAA;ALiZpB;AKxbQ;EA0CY,eAAA;ALiZpB;AK3bQ;EA6CY,eAAA;EACA,WAAA;EACA,iBAAA;ALiZpB;AKhcQ;EAkDY,YAAA;ALiZpB;AKncQ;EAoDgB,kBAAA;ALkZxB;AK/YwB;EAEQ,0BAAA;ALgZhC;AK7YwB;EAEQ,0BAAA;AL8YhC;AK5cQ;EAmEgB,UAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;EACA,eAAA;EACA,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,eAAA;AL4YxB;AKzdQ;EAgFgB,mBAAA;EACA,cAAA;AL4YxB;AK7dQ;EAqFY,YAAA;AL2YpB;AKheQ;EAuFgB,YAAA;EACA,YAAA;EACA,qBAAA;AL4YxB;AKreQ;EA4FgB,WAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;AL4YxB;AK3YwB;EACI,0CAAA;AL6Y5B;AKhfQ;EAyGQ,aAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,YAAA;EACA,sBAAA;EACA,WAAA;EACA,WAAA;AL0YhB;AKzYgB;EACI,WAAA;EACA,YAAA;AL2YpB;AK7YgB;EACI,WAAA;EACA,YAAA;AL2YpB;AKzYgB;EACI,aAAA;AL2YpB;AKvYQ;EAEQ,YAAA;ALwYhB;AKrYQ;EACI,WAAA;ALuYZ;AKxYQ;EAGQ,YAAA;ALwYhB;AKpqBA;;EAiSY,iBAAA;EACA,WAAA;EACA,uCAAA;EACA,sBAAA;EACA,eAAA;EACA,eAAA;ALuYZ;AK7qBA;EAySY,qBAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,kBAAA;ALuYZ;AKtrBA;EAkTY,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EACA,sBAAA;EACA,qBAAA;ALuYZ;AKjsBA;EA4TgB,gCAAA;EACA,YAAA;ALwYhB;AKtYY;EAEQ,UAAA;ALuYpB;AKpYY;EACI,WAAA;EACA,WAAA;EACA,iBAAA;EACA,eAAA;ALsYhB;AKpYY;EACI,qBAAA;ALsYhB;AKpYY;EACI,kBAAA;ALsYhB;AKpYY;EACI,WAAA;ALsYhB;AKvtBA;EAqVY,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,YAAA;ALqYZ;AKpYY;EAEQ,WAAA;ALqYpB;AKvYY;EAKQ,mBAAA;ALqYpB;AKlYY;EAEQ,WAAA;ALmYpB;AKrYY;EAKQ,mBAAA;ALmYpB;AKzuBA;EA0WgB,qBAAA;EACA,qBAAA;EACA,sBAAA;EACA,YAAA;ALkYhB;AK/uBA;EA+WoB,kBAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;ALmYpB;AKvvBA;EAsXwB,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;ALoYxB;AK/vBA;EA6X4B,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALqY5B;AK5wBA;EA8YY,qBAAA;EACA,YAAA;ALiYZ;AKhxBA;EAkZY,qBAAA;EACA,YAAA;ALiYZ;AKpxBA;EAqZgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;EAAA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,cAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,cAAA;ALmYpB;AKjYgB;EACI,mBAAA;ALmYpB;AKzyBA;EA0agB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALkYhB;AKjYgB;EACI,0CAAA;ALmYpB;AKnzBA;EAqbY,qBAAA;EACA,YAAA;ALiYZ;AKvzBA;EAwbgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,aAAA;ALmYpB;AKlYoB;EACI,cAAA;ALoYxB;AKjYgB;EACI,mBAAA;ALmYpB;AKjYgB;EACI,WAAA;EACA,kBAAA;ALmYpB;AKjYgB;EAEQ,aAAA;ALkYxB;AKpYgB;EAKQ,cAAA;ALkYxB;AKv1BA;;EA2dgB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALgYhB;AK/XgB;;EACI,0CAAA;ALkYpB;AKn2BA;EAqegB,cAAA;ALiYhB;AKt2BA;EAueoB,eAAA;EACA,eAAA;ALkYpB;AKhYgB;EAEQ,aAAA;ALiYxB;AKnYgB;EAKQ,qBAAA;ALiYxB;AK9XgB;EAEQ,aAAA;AL+XxB;AKjYgB;EAKQ,qBAAA;AL+XxB;AKt3BA;EA2foB,eAAA;EACA,sBAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;AL8XpB;AK93BA;EAkgBwB,kBAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;AL+XxB;AKt4BA;EAygB4B,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;ALgY5B;AK/4BA;EAihBgC,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,gBAAA;ALiYhC;AK55BA;EAmiBY,qBAAA;EACA,YAAA;EACA,kBAAA;AL4XZ;AK3XY;EAEQ,cAAA;AL4XpB;AKp6BA;EA4iBgB,kBAAA;EACA,UAAA;EACA,UAAA;EACA,aAAA;AL2XhB;AK16BA;EAmjBY,kBAAA;EACA,qBAAA;EACA,YAAA;EACA,UAAA;AL0XZ;AKzXY;EAEQ,cAAA;AL0XpB;AK5XY;EAKQ,cAAA;AL0XpB;AKt7BA;EAgkBgB,aAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,oBAAA;ALyXhB;AK97BA;EAwkBgB,aAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;ALyXhB;AK18BA;EAolBgB,YAAA;EACA,sBAAA;EACA,eAAA;EACA,iBAAA;ALyXhB;AKxXgB;EACI,0CAAA;AL0XpB;AKn9BA;EA8lBY,qBAAA;EACA,YAAA;ALwXZ;AKv9BA;EAkmBY,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,mBAAA;ALwXZ;AK99BA;EAymBY,WAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;ALwXZ;AKx+BA;EAknBgB,aAAA;EACA,YAAA;EACA,aAAA;ALyXhB;AK7+BA;EAunBgB,qBAAA;EACA,kBAAA;EACA,iCAAA;EACA,yBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,sBAAA;EACA,eAAA;EACA,4BAAA;ALyXhB;AKz/BA;EAmoBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,mBAAA;EACA,4BAAA;ALyXhB;AKpgCA;EA8oBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,OAAA;EACA,MAAA;EACA,mBAAA;EACA,gBAAA;EACA,4BAAA;EACA,wCAAA;EACA,YAAA;EACA,WAAA;ALyXhB;AKjhCA;EA2pBgB,sCAAA;ALyXhB;AKphCA;EA8pBgB,WAAA;EACA,oCAAA;ALyXhB;AKxhCA;EAkqBgB,UAAA;ALyXhB;AKnXA;EACI,aAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EAEA,SAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;ALoXJ;AMpjCA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;ANsjCJ;AM7jCA;EASQ,qBAAA;EACA,oBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,eAAA;EACA,mBAAA;EACA,iDAAA;ANujCR;AMtjCQ;EACI,kBAAA;EACA,kBAAA;ANwjCZ;AMzkCA;EAqBQ,kBAAA;EACA,QAAA;EACA,2BAAA;ANujCR;AMtjCQ;EACI,sBAAA;EACA,yBAAA;EACA,iCAAA;EACA,4BAAA;ANwjCZ;AMrjCI;EACI;IACI,2BAAA;ENujCV;AACF;AMzlCA;;EAsCQ,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;ANujCR;AMtjCQ;;EACI,uBAAA;EACA,gCAAA;EACA,iCAAA;EACA,4BAAA;ANyjCZ;AMtjCI;EACI;IACI,mBAAA;ENwjCV;EMtjCM;IACI,mBAAA;ENwjCV;AACF;AO/mCA;EACI,oBAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,gBAAA;APinCJ;AOvnCA;EAQQ,eAAA;EACA,gBAAA;EACA,gBAAA;APknCR;AQ5nCA;EACI,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,kCAAA;EACA,cAAA;EACA,gBAAA;EACA,UAAA;EACA,aAAA;AR8nCJ;AQ7nCI;EACI,cAAA;AR+nCR;AQzoCA;EAaQ,YAAA;EACA,sBAAA;EACA,eAAA;AR+nCR;AQ9nCQ;EACI,0CAAA;ARgoCZ;AQjpCA;EAqBY,eAAA;EACA,iBAAA;EACA,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,WAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AR+nCZ;AQ9nCY;EACI,qBAAA;ARgoChB;AIjqCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;AJmqCJ;AItqCA;EAMQ,kBAAA;EACA,iCAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,cAAA;EACA,oBAAA;EACA,0CAAA;AJmqCR;AIhrCA;EAiBQ,4CAAA;AJkqCR;AI9pCA;EACI;IACI,UAAA;IACA,YAAA;IACA,aAAA;EJgqCN;EI9pCE;IACI,iBAAA;IACA,eAAA;IACA,eAAA;EJgqCN;AACF;AI7pCA;EACI;IACI,iBAAA;IACA,eAAA;IACA,eAAA;EJ+pCN;EI7pCE;IACI,eAAA;EJ+pCN;EI7pCE;IACI,YAAA;IACA,iBAAA;EJ+pCN;EI7pCE;IACI,UAAA;IACA,aAAA;IACA,YAAA;EJ+pCN;AACF;ASltCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;EACA,QAAA;EACA,kBAAA;EACA,WAAA;EACA,iDAAA;EACA,eAAA;ATotCJ;ASntCI;EACI,aAAA;ATqtCR;AU/tCA;EACI,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,UAAA;EACA,aAAA;AViuCJ;AUhuCI;EACI,cAAA;AVkuCR;AU9tCA;EACI,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AVguCJ;AUruCA;EAOQ,WAAA;EACA,YAAA;EACA,aAAA;AViuCR;AU1uCA;EAYQ,cAAA;AViuCR;AU7uCA;EAeQ,aAAA;AViuCR;AW7vCA;EACI,kBAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;EACA,iCAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AX+vCJ;AW7vCI;EACI,aAAA;AX+vCR;AW3wCA;EAgBQ,eAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;AX8vCR;AW1vCQ;EACI,qBAAA;EACA,sBAAA;EACA,iBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AX4vCZ;AWzxCA;EAkCQ,YAAA;EACA,iBAAA;EACA,kBAAA;AX0vCR;AW9xCA;EAwCQ,YAAA;AXyvCR",sourcesContent:[`@keyframes my-face {
    2% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    4% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    6% {
        transform: translate(0, 1.5px) rotate(-1.5deg);
    }
    8% {
        transform: translate(0, -1.5px) rotate(-1.5deg);
    }
    10% {
        transform: translate(0, 2.5px) rotate(1.5deg);
    }
    12% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    14% {
        transform: translate(0, -1.5px) rotate(1.5deg);
    }
    16% {
        transform: translate(0, -0.5px) rotate(-1.5deg);
    }
    18% {
        transform: translate(0, 0.5px) rotate(-1.5deg);
    }
    20% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    22% {
        transform: translate(0, 0.5px) rotate(-1.5deg);
    }
    24% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    26% {
        transform: translate(0, 0.5px) rotate(0.5deg);
    }
    28% {
        transform: translate(0, 0.5px) rotate(1.5deg);
    }
    30% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    32% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    34% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    36% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    38% {
        transform: translate(0, 1.5px) rotate(-1.5deg);
    }
    40% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    42% {
        transform: translate(0, 2.5px) rotate(-1.5deg);
    }
    44% {
        transform: translate(0, 1.5px) rotate(0.5deg);
    }
    46% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    48% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    50% {
        transform: translate(0, 0.5px) rotate(0.5deg);
    }
    52% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    54% {
        transform: translate(0, -1.5px) rotate(1.5deg);
    }
    56% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    58% {
        transform: translate(0, 0.5px) rotate(2.5deg);
    }
    60% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    62% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    64% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    66% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    68% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    70% {
        transform: translate(0, 1.5px) rotate(0.5deg);
    }
    72% {
        transform: translate(0, 2.5px) rotate(1.5deg);
    }
    74% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    76% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    78% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    80% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    82% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    84% {
        transform: translate(0, 1.5px) rotate(2.5deg);
    }
    86% {
        transform: translate(0, -1.5px) rotate(-1.5deg);
    }
    88% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    90% {
        transform: translate(0, 2.5px) rotate(-0.5deg);
    }
    92% {
        transform: translate(0, 0.5px) rotate(-0.5deg);
    }
    94% {
        transform: translate(0, 2.5px) rotate(0.5deg);
    }
    96% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    98% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    0%,
    100% {
        transform: translate(0, 0) rotate(0deg);
    }
}`,`@import '../../node_modules/balloon-css/balloon.css';
@keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
.dplayer {
  position: relative;
  overflow: hidden;
  user-select: none;
  line-height: 1;
}
.dplayer * {
  box-sizing: content-box;
}
.dplayer svg {
  width: 100%;
  height: 100%;
}
.dplayer svg path,
.dplayer svg circle {
  fill: #fff;
}
.dplayer:-webkit-full-screen {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  transform: translate(0, 0);
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-danmaku {
  display: none;
}
.dplayer.dplayer-live .dplayer-time {
  display: none;
}
.dplayer.dplayer-live .dplayer-bar-wrap {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-speed {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-loop {
  display: none;
}
.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {
  display: none;
}
.dplayer.dplayer-arrow .dplayer-danmaku {
  font-size: 18px;
}
.dplayer.dplayer-arrow .dplayer-icon {
  margin: 0 -3px;
}
.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {
  animation-play-state: running;
}
@media (min-width: 900px) {
  .dplayer.dplayer-playing .dplayer-controller-mask {
    opacity: 0;
  }
  .dplayer.dplayer-playing .dplayer-controller {
    opacity: 0;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller-mask {
    opacity: 1;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller {
    opacity: 1;
  }
}
.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {
  display: block;
}
.dplayer.dplayer-loading .dplayer-danmaku,
.dplayer.dplayer-paused .dplayer-danmaku,
.dplayer.dplayer-loading .dplayer-danmaku-move,
.dplayer.dplayer-paused .dplayer-danmaku-move {
  animation-play-state: paused;
}
.dplayer.dplayer-hide-controller {
  cursor: none;
}
.dplayer.dplayer-hide-controller .dplayer-controller-mask {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-hide-controller .dplayer-controller {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-show-controller .dplayer-controller-mask {
  opacity: 1;
}
.dplayer.dplayer-show-controller .dplayer-controller {
  opacity: 1;
}
.dplayer.dplayer-fulled {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  width: 100% !important;
  height: 100% !important;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: static;
  display: inline-block;
}
.dplayer.dplayer-mobile .dplayer-bar-time {
  display: none;
}
.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-mobile-play {
  display: block;
}
.dplayer-web-fullscreen-fix {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
[data-balloon]:before {
  display: none;
}
[data-balloon]:after {
  padding: 0.3em 0.7em;
  background: rgba(17, 17, 17, 0.7);
}
[data-balloon][data-balloon-pos="up"]:after {
  margin-bottom: 0;
}
.dplayer-bezel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -26px 0 0 -26px;
  height: 52px;
  width: 52px;
  padding: 12px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {
  animation: bezel-hide 0.5s linear;
}
@keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
.dplayer-bezel .dplayer-danloading {
  position: absolute;
  top: 50%;
  margin-top: -7px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-bezel .diplayer-loading-icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  height: 36px;
  width: 36px;
  pointer-events: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {
  display: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {
  animation: diplayer-loading-dot-fade 0.8s ease infinite;
  opacity: 0;
  transform-origin: 4px 4px;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {
  animation-delay: 0.1s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {
  animation-delay: 0.2s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {
  animation-delay: 0.3s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {
  animation-delay: 0.4s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {
  animation-delay: 0.5s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {
  animation-delay: 0.6s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {
  animation-delay: 0.7s;
}
@keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
.dplayer-controller-mask {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;
  height: 98px;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.dplayer-controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  padding: 0 20px;
  user-select: none;
  transition: all 0.3s ease;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons {
  display: none;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap {
  padding: 5px 0;
  cursor: pointer;
  position: absolute;
  bottom: 33px;
  width: calc(100% - 40px);
  height: 3px;
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {
  display: block;
  width: 8px;
  transform: translateX(-4px);
  top: 4px;
  height: 40%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {
  z-index: 12;
  position: absolute;
  top: 5px;
  width: 6px;
  height: 20%;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  transform: translateX(-3px);
  transition: all 0.2s ease-in-out;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {
  display: none;
  position: absolute;
  left: 50%;
  top: -24px;
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {
  position: absolute;
  background: #fff;
  pointer-events: none;
  display: none;
  background-size: 16000px 100%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {
  position: absolute;
  left: 0px;
  top: -20px;
  border-radius: 4px;
  padding: 5px 7px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  word-wrap: normal;
  word-break: normal;
  z-index: 2;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar {
  position: relative;
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  height: 3px;
  transition: all 0.5s ease;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 3px;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons {
  height: 38px;
  position: absolute;
  bottom: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box {
  display: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  height: 38px;
  bottom: 0;
  left: 20px;
  right: 20px;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {
  position: absolute;
  background: rgba(28, 28, 28, 0.9);
  bottom: 41px;
  left: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 10px 16px;
  font-size: 14px;
  width: 204px;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {
  font-size: 13px;
  color: #fff;
  line-height: 30px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {
  margin-bottom: 6px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {
  border-radius: 4px 0 0 4px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {
  border-radius: 0 4px 4px 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {
  width: 33%;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  margin-right: -1px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {
  background: #E4E4E6;
  color: #1c1c1c;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {
  font-size: 0;
  padding: 6px;
  display: inline-block;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {
  outline: none;
  border: none;
  padding: 8px 31px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  background: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right {
  right: 20px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {
  padding: 8px;
}
.dplayer-controller .dplayer-icons .dplayer-time,
.dplayer-controller .dplayer-icons .dplayer-live-badge {
  line-height: 38px;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
  font-size: 13px;
  cursor: default;
}
.dplayer-controller .dplayer-icons .dplayer-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: 4%;
  margin-right: 5px;
  content: '';
  border-radius: 6px;
}
.dplayer-controller .dplayer-icons .dplayer-icon {
  width: 40px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {
  opacity: 1;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {
  color: #fff;
  width: auto;
  line-height: 22px;
  font-size: 14px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {
  padding: 10px 9px 9px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {
  padding-top: 8.5px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {
  width: 43px;
}
.dplayer-controller .dplayer-icons .dplayer-volume {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {
  display: inline-block;
  margin: 0 10px 0 -5px;
  vertical-align: middle;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {
  position: relative;
  top: 17px;
  width: 0;
  height: 3px;
  background: #aaa;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: fit-content;
  max-width: 240px;
  min-width: 120px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: 150px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {
  width: 70px;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
  padding: 5px 0;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {
  padding: 0 10px;
  display: inline;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {
  position: relative;
  top: 8.5px;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  background: #aaa;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #aaa;
}
.dplayer-controller .dplayer-icons .dplayer-full {
  display: inline-block;
  height: 100%;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: absolute;
  top: -30px;
  z-index: 1;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-quality {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {
  display: none;
  position: absolute;
  bottom: 38px;
  left: -18px;
  width: 80px;
  padding-bottom: 12px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {
  display: none;
  font-size: 12px;
  width: 80px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 25px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-comment {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-label {
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}
.dplayer-controller .dplayer-icons .dplayer-toggle {
  width: 32px;
  height: 20px;
  text-align: center;
  font-size: 0;
  vertical-align: middle;
  position: absolute;
  top: 5px;
  right: 10px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input {
  max-height: 0;
  max-width: 0;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label {
  display: inline-block;
  position: relative;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  border-radius: 15px;
  background: #fff;
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 18px;
  width: 18px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {
  border-color: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {
  width: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {
  left: 12px;
}
.dplayer-mobile-play {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 0;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dplayer-danmaku {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
}
.dplayer-danmaku .dplayer-danmaku-item {
  display: inline-block;
  pointer-events: none;
  user-select: none;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.dplayer-danmaku .dplayer-danmaku-item--demo {
  position: absolute;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-right {
  position: absolute;
  right: 0;
  transform: translateX(100%);
}
.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
  will-change: transform;
  animation-name: 'danmaku';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
.dplayer-danmaku .dplayer-danmaku-top,
.dplayer-danmaku .dplayer-danmaku-bottom {
  position: absolute;
  width: 100%;
  text-align: center;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,
.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {
  will-change: visibility;
  animation-name: 'danmaku-center';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
.dplayer-logo {
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 20px;
  max-width: 50px;
  max-height: 50px;
}
.dplayer-logo img {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
.dplayer-menu {
  position: absolute;
  width: 170px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.85);
  padding: 5px 0;
  overflow: hidden;
  z-index: 3;
  display: none;
}
.dplayer-menu.dplayer-menu-show {
  display: block;
}
.dplayer-menu .dplayer-menu-item {
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-menu .dplayer-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-menu .dplayer-menu-item a {
  padding: 0 10px;
  line-height: 30px;
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-menu .dplayer-menu-item a:hover {
  text-decoration: none;
}
.dplayer-notice-list {
  position: absolute;
  bottom: 60px;
  left: 20px;
}
.dplayer-notice-list .dplayer-notice {
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: table;
  pointer-events: none;
  animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  animation: removeNotice 0.3s ease 1 forwards;
}
@keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
.dplayer-subtitle {
  position: absolute;
  bottom: 40px;
  width: 90%;
  left: 5%;
  text-align: center;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.dplayer-subtitle.dplayer-subtitle-hide {
  display: none;
}
.dplayer-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;
}
.dplayer-mask.dplayer-mask-show {
  display: block;
}
.dplayer-video-wrap {
  position: relative;
  background: #000;
  font-size: 0;
  width: 100%;
  height: 100%;
}
.dplayer-video-wrap .dplayer-video {
  width: 100%;
  height: 100%;
  display: none;
}
.dplayer-video-wrap .dplayer-video-current {
  display: block;
}
.dplayer-video-wrap .dplayer-video-prepare {
  display: none;
}
.dplayer-info-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 400px;
  background: rgba(28, 28, 28, 0.8);
  padding: 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
.dplayer-info-panel-hide {
  display: none;
}
.dplayer-info-panel .dplayer-info-panel-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item > span {
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-info-panel .dplayer-info-panel-item-title {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item-data {
  width: 260px;
}
`,`.dplayer {
    position: relative;
    overflow: hidden;
    user-select: none;
    line-height: 1;

    * {
        box-sizing: content-box;
    }

    svg {
        width: 100%;
        height: 100%;

        path,
        circle {
            fill: #fff;
        }
    }

    &:-webkit-full-screen {
        width: 100%;
        height: 100%;
        background: #000;
        position: fixed;
        z-index: 100000;
        left: 0;
        top: 0;
        margin: 0;
        padding: 0;
        transform: translate(0, 0);
        
    }

    &.dplayer-no-danmaku {
        .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
            .dplayer-setting-showdan,
            .dplayer-setting-danmaku,
            .dplayer-setting-danunlimit {
                display: none;
            }
        }

        .dplayer-controller .dplayer-icons .dplayer-comment {
            display: none;
        }

        .dplayer-danmaku {
            display: none;
        }
    }

    &.dplayer-live {
        .dplayer-time {
            display: none;
        }
        .dplayer-bar-wrap {
            display: none;
        }
        .dplayer-setting-speed {
            display: none;
        }
        .dplayer-setting-loop {
            display: none;
        }

        &.dplayer-no-danmaku {
            .dplayer-setting {
                display: none;
            }
        }
    }

    &.dplayer-arrow {
        .dplayer-danmaku {
            font-size: 18px;
        }
        .dplayer-icon {
            margin: 0 -3px;
        }
    }

    &.dplayer-playing {
        .dplayer-danmaku .dplayer-danmaku-move {
            animation-play-state: running;
        }

        @media (min-width: 900px) {
            .dplayer-controller-mask {
                opacity: 0;
            }
            .dplayer-controller {
                opacity: 0;
            }

            &:hover {
                .dplayer-controller-mask {
                    opacity: 1;
                }
                .dplayer-controller {
                    opacity: 1;
                }
            }
        }
    }

    &.dplayer-loading {
        .dplayer-bezel .diplayer-loading-icon {
            display: block;
        }
    }

    &.dplayer-loading,
    &.dplayer-paused {
        .dplayer-danmaku,
        .dplayer-danmaku-move {
            animation-play-state: paused;
        }
    }

    &.dplayer-hide-controller {
        cursor: none;

        .dplayer-controller-mask {
            opacity: 0;
            transform: translateY(100%);
        }
        .dplayer-controller {
            opacity: 0;
            transform: translateY(100%);
        }
    }
    &.dplayer-show-controller {
        .dplayer-controller-mask {
            opacity: 1;
        }
        .dplayer-controller {
            opacity: 1;
        }
    }
    &.dplayer-fulled {
        position: fixed;
        z-index: 100000;
        left: 0;
        top: 0;
        width: 100% !important;
        height: 100% !important;
    }
    &.dplayer-mobile {
        .dplayer-controller .dplayer-icons {
            .dplayer-volume,
            .dplayer-camera-icon,
            .dplayer-airplay-icon,
            .dplayer-chromecast-icon,
            .dplayer-play-icon {
                display: none;
            }
            .dplayer-full .dplayer-full-in-icon {
                position: static;
                display: inline-block;
            }
        }

        .dplayer-bar-time {
            display: none;
        }

        &.dplayer-hide-controller {
            .dplayer-mobile-play {
                display: none;
            }
        }

        .dplayer-mobile-play {
            display: block;
        }
    }
}

// To hide scroll bar, apply this class to <body>
.dplayer-web-fullscreen-fix {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
}
`,`@import '../../node_modules/balloon-css/balloon.css';

[data-balloon]:before {
    display: none;
}

[data-balloon]:after {
    padding: 0.3em 0.7em;
    background: rgba(17, 17, 17, 0.7);
}

[data-balloon][data-balloon-pos="up"]:after {
    margin-bottom: 0;
}`,`.dplayer-bezel {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 22px;
    color: #fff;
    pointer-events: none;
    .dplayer-bezel-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -26px 0 0 -26px;
        height: 52px;
        width: 52px;
        padding: 12px;
        box-sizing: border-box;
        background: rgba(0, 0, 0, .5);
        border-radius: 50%;
        opacity: 0;
        pointer-events: none;
        &.dplayer-bezel-transition {
            animation: bezel-hide .5s linear;
        }
        @keyframes bezel-hide {
            from {
                opacity: 1;
                transform: scale(1);
            }
            to {
                opacity: 0;
                transform: scale(2);
            }
        }
    }
    .dplayer-danloading {
        position: absolute;
        top: 50%;
        margin-top: -7px;
        width: 100%;
        text-align: center;
        font-size: 14px;
        line-height: 14px;
        animation: my-face 5s infinite ease-in-out;
    }
    .diplayer-loading-icon {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -18px 0 0 -18px;
        height: 36px;
        width: 36px;
        pointer-events: none;
        .diplayer-loading-hide {
            display: none;
        }
        .diplayer-loading-dot {
            animation: diplayer-loading-dot-fade .8s ease infinite;
            opacity: 0;
            transform-origin: 4px 4px;
            each(range(7), {
                &.diplayer-loading-dot-@{value} {
                    animation-delay: (@value * 0.1s);
                }
            });
        }
        @keyframes diplayer-loading-dot-fade {
            0% {
                opacity: .7;
                transform: scale(1.2, 1.2)
            }
            50% {
                opacity: .25;
                transform: scale(.9, .9)
            }
            to {
                opacity: .25;
                transform: scale(.85, .85)
            }
        }
    }
}`,`.dplayer-notice-list{
    position: absolute;
    bottom: 60px;
    left: 20px;

    .dplayer-notice {
        border-radius: 2px;
        background: rgba(28, 28, 28, 0.9);
        transition: all .3s ease-in-out;
        overflow: hidden;
        color: #fff;
        display: table;
        pointer-events: none;
        animation: showNotice .3s ease 1 forwards;
    }

    .remove-notice{
        animation: removeNotice .3s ease 1 forwards;
    }
}

@keyframes showNotice {
    from {
        padding: 0;
        font-size: 0;
        margin-top: 0;
    }
    to {
        padding: 7px 20px;
        font-size: 14px;
        margin-top: 5px;
    }
}

@keyframes removeNotice {
    0%{
        padding: 7px 20px;
        font-size: 14px;
        margin-top: 5px;
    }
    20%{
        font-size: 12px;
    }
    21%{
        font-size: 0;
        padding: 7px 10px;
    }
    100%{
        padding: 0;
        margin-top: 0;
        font-size: 0;
    }
}
`,`.dplayer-controller-mask {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;
    height: 98px;
    width: 100%;
    position: absolute;
    bottom: 0;
    transition: all 0.3s ease;
}

.dplayer-controller {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 41px;
    padding: 0 20px;
    user-select: none;
    transition: all 0.3s ease;
    &.dplayer-controller-comment {
        .dplayer-icons {
            display: none;
        }
        .dplayer-icons.dplayer-comment-box {
            display: block;
        }
    }
    .dplayer-bar-wrap {
        padding: 5px 0;
        cursor: pointer;
        position: absolute;
        bottom: 33px;
        width: calc(100% - 40px);
        height: 3px;
        &:hover {
            .dplayer-bar .dplayer-played .dplayer-thumb {
                transform: scale(1);
            }
            .dplayer-highlight {
                display: block;
                width: 8px;
                transform: translateX(-4px);
                top: 4px;
                height: 40%;
            }
        }
        .dplayer-highlight {
            z-index: 12;
            position: absolute;
            top: 5px;
            width: 6px;
            height: 20%;
            border-radius: 6px;
            background-color: #fff;
            text-align: center;
            transform: translateX(-3px);
            transition: all .2s ease-in-out;
            &:hover {
                .dplayer-highlight-text {
                    display: block;
                }
                &~.dplayer-bar-preview {
                    opacity: 0;
                }
                &~.dplayer-bar-time {
                    opacity: 0;
                }
            }
            .dplayer-highlight-text {
                display: none;
                position: absolute;
                left: 50%;
                top: -24px;
                padding: 5px 8px;
                background-color: rgba(0, 0, 0, .62);
                color: #fff;
                border-radius: 4px;
                font-size: 12px;
                white-space: nowrap;
                transform: translateX(-50%);
            }
        }
        .dplayer-bar-preview {
            position: absolute;
            background: #fff;
            pointer-events: none;
            display: none;
            background-size: 16000px 100%;
        }
        .dplayer-bar-preview-canvas {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
        }
        .dplayer-bar-time {
            &.hidden {
                opacity: 0;
            }
            position: absolute;
            left: 0px;
            top: -20px;
            border-radius: 4px;
            padding: 5px 7px;
            background-color: rgba(0, 0, 0, 0.62);
            color: #fff;
            font-size: 12px;
            text-align: center;
            opacity: 1;
            transition: opacity .1s ease-in-out;
            word-wrap: normal;
            word-break: normal;
            z-index: 2;
            pointer-events: none;
        }
        .dplayer-bar {
            position: relative;
            height: 3px;
            width: 100%;
            background: rgba(255, 255, 255, .2);
            cursor: pointer;
            .dplayer-loaded {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                background: rgba(255, 255, 255, .4);
                height: 3px;
                transition: all 0.5s ease;
                will-change: width;
            }
            .dplayer-played {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                height: 3px;
                will-change: width;
                .dplayer-thumb {
                    position: absolute;
                    top: 0;
                    right: 5px;
                    margin-top: -4px;
                    margin-right: -10px;
                    height: 11px;
                    width: 11px;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all .3s ease-in-out;
                    transform: scale(0);
                }
            }
        }
    }
    .dplayer-icons {
        height: 38px;
        position: absolute;
        bottom: 0;
        &.dplayer-comment-box {
            display: none;
            position: absolute;
            transition: all .3s ease-in-out;
            z-index: 2;
            height: 38px;
            bottom: 0;
            left: 20px;
            right: 20px;
            color: #fff;
            .dplayer-icon {
                padding: 7px;
            }
            .dplayer-comment-setting-icon {
                position: absolute;
                left: 0;
                top: 0;
            }
            .dplayer-send-icon {
                position: absolute;
                right: 0;
                top: 0;
            }
            .dplayer-comment-setting-box {
                position: absolute;
                background: rgba(28, 28, 28, 0.9);
                bottom: 41px;
                left: 0;
                box-shadow: 0 0 25px rgba(0, 0, 0, .3);
                border-radius: 4px;
                padding: 10px 10px 16px;
                font-size: 14px;
                width: 204px;
                transition: all .3s ease-in-out;
                transform: scale(0);
                &.dplayer-comment-setting-open {
                    transform: scale(1);
                }
                input[type=radio] {
                    display: none;
                }
                label {
                    cursor: pointer;
                }
                .dplayer-comment-setting-title {
                    font-size: 13px;
                    color: #fff;
                    line-height: 30px;
                }
                .dplayer-comment-setting-type {
                    font-size: 0;
                    .dplayer-comment-setting-title {
                        margin-bottom: 6px;
                    }
                    label {
                        &:nth-child(2) {
                            span {
                                border-radius: 4px 0 0 4px;
                            }
                        }
                        &:nth-child(4) {
                            span {
                                border-radius: 0 4px 4px 0;
                            }
                        }
                    }
                    span {
                        width: 33%;
                        padding: 4px 6px;
                        line-height: 16px;
                        display: inline-block;
                        font-size: 12px;
                        color: #fff;
                        border: 1px solid #fff;
                        margin-right: -1px;
                        box-sizing: border-box;
                        text-align: center;
                        cursor: pointer;
                    }
                    input:checked+span {
                        background: #E4E4E6;
                        color: #1c1c1c;
                    }
                }
                .dplayer-comment-setting-color {
                    font-size: 0;
                    label {
                        font-size: 0;
                        padding: 6px;
                        display: inline-block;
                    }
                    span {
                        width: 22px;
                        height: 22px;
                        display: inline-block;
                        border-radius: 50%;
                        box-sizing: border-box;
                        cursor: pointer;
                        &:hover {
                            animation: my-face 5s infinite ease-in-out;
                        }
                    }
                }
            }
            .dplayer-comment-input {
                outline: none;
                border: none;
                padding: 8px 31px;
                font-size: 14px;
                line-height: 18px;
                text-align: center;
                border-radius: 4px;
                background: none;
                margin: 0;
                height: 100%;
                box-sizing: border-box;
                width: 100%;
                color: #fff;
                &::placeholder {
                    color: #fff;
                    opacity: 0.8;
                }
                &::-ms-clear {
                    display: none;
                }
            }
        }
        &.dplayer-icons-left {
            .dplayer-icon {
                padding: 7px;
            }
        }
        &.dplayer-icons-right {
            right: 20px;
            .dplayer-icon {
                padding: 8px;
            }
        }
        .dplayer-time,
        .dplayer-live-badge {
            line-height: 38px;
            color: #eee;
            text-shadow: 0 0 2px rgba(0, 0, 0, .5);
            vertical-align: middle;
            font-size: 13px;
            cursor: default;
        }
        .dplayer-live-dot {
            display: inline-block;
            width: 6px;
            height: 6px;
            vertical-align: 4%;
            margin-right: 5px;
            content: '';
            border-radius: 6px;
        }
        .dplayer-icon {
            width: 40px;
            height: 100%;
            border: none;
            background-color: transparent;
            outline: none;
            cursor: pointer;
            vertical-align: middle;
            box-sizing: border-box;
            display: inline-block;
            .dplayer-icon-content {
                transition: all .2s ease-in-out;
                opacity: .8;
            }
            &:hover {
                .dplayer-icon-content {
                    opacity: 1;
                }
            }
            &.dplayer-quality-icon {
                color: #fff;
                width: auto;
                line-height: 22px;
                font-size: 14px;
            }
            &.dplayer-comment-icon {
                padding: 10px 9px 9px;
            }
            &.dplayer-setting-icon {
                padding-top: 8.5px;
            }
            &.dplayer-volume-icon {
                width: 43px;
            }
        }
        .dplayer-volume {
            position: relative;
            display: inline-block;
            cursor: pointer;
            height: 100%;
            &:hover {
                .dplayer-volume-bar-wrap .dplayer-volume-bar {
                    width: 45px;
                }
                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
                    transform: scale(1);
                }
            }
            &.dplayer-volume-active {
                .dplayer-volume-bar-wrap .dplayer-volume-bar {
                    width: 45px;
                }
                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
                    transform: scale(1);
                }
            }
            .dplayer-volume-bar-wrap {
                display: inline-block;
                margin: 0 10px 0 -5px;
                vertical-align: middle;
                height: 100%;
                .dplayer-volume-bar {
                    position: relative;
                    top: 17px;
                    width: 0;
                    height: 3px;
                    background: #aaa;
                    transition: all 0.3s ease-in-out;
                    .dplayer-volume-bar-inner {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        height: 100%;
                        transition: all 0.1s ease;
                        will-change: width;
                        .dplayer-thumb {
                            position: absolute;
                            top: 0;
                            right: 5px;
                            margin-top: -4px;
                            margin-right: -10px;
                            height: 11px;
                            width: 11px;
                            border-radius: 50%;
                            cursor: pointer;
                            transition: all .3s ease-in-out;
                            transform: scale(0);
                        }
                    }
                }
            }
        }
        .dplayer-subtitle-btn {
            display: inline-block;
            height: 100%;
        }
        .dplayer-subtitles {
            display: inline-block;
            height: 100%;
            .dplayer-subtitles-box {
                position: absolute;
                right: 0;
                bottom: 50px;
                transform: scale(0);
                width: fit-content;
                max-width: 240px;
                min-width: 120px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 7px 0;
                transition: all .3s ease-in-out;
                overflow: auto;
                z-index: 2;
                &.dplayer-subtitles-panel {
                    display: block;
                }
                &.dplayer-subtitles-box-open {
                    transform: scale(1);
                }
            }
            .dplayer-subtitles-item {
                height: 30px;
                padding: 5px 10px;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
        }
        .dplayer-setting {
            display: inline-block;
            height: 100%;
            .dplayer-setting-box {
                position: absolute;
                right: 0;
                bottom: 50px;
                transform: scale(0);
                width: 150px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 7px 0;
                transition: all .3s ease-in-out;
                overflow: hidden;
                z-index: 2;
                &>div {
                    display: none;
                    &.dplayer-setting-origin-panel {
                        display: block;
                    }
                }
                &.dplayer-setting-box-open {
                    transform: scale(1);
                }
                &.dplayer-setting-box-narrow {
                    width: 70px;
                    text-align: center;
                }
                &.dplayer-setting-box-speed {
                    .dplayer-setting-origin-panel {
                        display: none;
                    }
                    .dplayer-setting-speed-panel {
                        display: block;
                    }
                }
            }
            .dplayer-setting-item,
            .dplayer-setting-speed-item {
                height: 30px;
                padding: 5px 10px;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
            .dplayer-setting-danmaku {
                padding: 5px 0;
                .dplayer-label {
                    padding: 0 10px;
                    display: inline;
                }
                &:hover {
                    .dplayer-label {
                        display: none;
                    }
                    .dplayer-danmaku-bar-wrap {
                        display: inline-block;
                    }
                }
                &.dplayer-setting-danmaku-active {
                    .dplayer-label {
                        display: none;
                    }
                    .dplayer-danmaku-bar-wrap {
                        display: inline-block;
                    }
                }
                .dplayer-danmaku-bar-wrap {
                    padding: 0 10px;
                    box-sizing: border-box;
                    display: none;
                    vertical-align: middle;
                    height: 100%;
                    width: 100%;
                    .dplayer-danmaku-bar {
                        position: relative;
                        top: 8.5px;
                        width: 100%;
                        height: 3px;
                        background: #fff;
                        transition: all 0.3s ease-in-out;
                        .dplayer-danmaku-bar-inner {
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            height: 100%;
                            transition: all 0.1s ease;
                            background: #aaa;
                            will-change: width;
                            .dplayer-thumb {
                                position: absolute;
                                top: 0;
                                right: 5px;
                                margin-top: -4px;
                                margin-right: -10px;
                                height: 11px;
                                width: 11px;
                                border-radius: 50%;
                                cursor: pointer;
                                transition: all .3s ease-in-out;
                                background: #aaa;
                            }
                        }
                    }
                }
            }
        }
        .dplayer-full {
            display: inline-block;
            height: 100%;
            position: relative;
            &:hover {
                .dplayer-full-in-icon {
                    display: block;
                }
            }
            .dplayer-full-in-icon {
                position: absolute;
                top: -30px;
                z-index: 1;
                display: none;
            }
        }
        .dplayer-quality {
            position: relative;
            display: inline-block;
            height: 100%;
            z-index: 2;
            &:hover {
                .dplayer-quality-list {
                    display: block;
                }
                .dplayer-quality-mask {
                    display: block;
                }
            }
            .dplayer-quality-mask {
                display: none;
                position: absolute;
                bottom: 38px;
                left: -18px;
                width: 80px;
                padding-bottom: 12px;
            }
            .dplayer-quality-list {
                display: none;
                font-size: 12px;
                width: 80px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 5px 0;
                transition: all .3s ease-in-out;
                overflow: hidden;
                color: #fff;
                text-align: center;
            }
            .dplayer-quality-item {
                height: 25px;
                box-sizing: border-box;
                cursor: pointer;
                line-height: 25px;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
        }
        .dplayer-comment {
            display: inline-block;
            height: 100%;
        }
        .dplayer-label {
            color: #eee;
            font-size: 13px;
            display: inline-block;
            vertical-align: middle;
            white-space: nowrap;
        }
        .dplayer-toggle {
            width: 32px;
            height: 20px;
            text-align: center;
            font-size: 0;
            vertical-align: middle;
            position: absolute;
            top: 5px;
            right: 10px;
            input {
                max-height: 0;
                max-width: 0;
                display: none;
            }
            input+label {
                display: inline-block;
                position: relative;
                box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;
                border: 1px solid rgb(223, 223, 223);
                height: 20px;
                width: 32px;
                border-radius: 10px;
                box-sizing: border-box;
                cursor: pointer;
                transition: .2s ease-in-out;
            }
            input+label:before {
                content: "";
                position: absolute;
                display: block;
                height: 18px;
                width: 18px;
                top: 0;
                left: 0;
                border-radius: 15px;
                transition: .2s ease-in-out;
            }
            input+label:after {
                content: "";
                position: absolute;
                display: block;
                left: 0;
                top: 0;
                border-radius: 15px;
                background: #fff;
                transition: .2s ease-in-out;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
                height: 18px;
                width: 18px;
            }
            input:checked+label {
                border-color: rgba(255, 255, 255, 0.5);
            }
            input:checked+label:before {
                width: 30px;
                background: rgba(255, 255, 255, 0.5);
            }
            input:checked+label:after {
                left: 12px;
            }
        }
    }
}

.dplayer-mobile-play {
    display: none;
    width: 50px;
    height: 50px;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    opacity: 0.8;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}`,`.dplayer-danmaku {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 22px;
    color: #fff;
    .dplayer-danmaku-item {
        display: inline-block;
        pointer-events: none;
        user-select: none;
        cursor: default;
        white-space: nowrap;
        text-shadow: .5px .5px .5px rgba(0, 0, 0, .5);
        &--demo {
            position: absolute;
            visibility: hidden;
        }
    }
    .dplayer-danmaku-right {
        position: absolute;
        right: 0;
        transform: translateX(100%);
        &.dplayer-danmaku-move {
            will-change: transform;
            animation-name: 'danmaku';
            animation-timing-function: linear;
            animation-play-state: paused;
        }
    }
    @keyframes danmaku {
        from {
            transform: translateX(100%);
        }
    }
    .dplayer-danmaku-top,
    .dplayer-danmaku-bottom {
        position: absolute;
        width: 100%;
        text-align: center;
        visibility: hidden;
        &.dplayer-danmaku-move {
            will-change: visibility;
            animation-name: 'danmaku-center';
            animation-timing-function: linear;
            animation-play-state: paused;
        }
    }
    @keyframes danmaku-center {
        from {
            visibility: visible;
        }
        to {
            visibility: visible;
        }
    }
}`,`.dplayer-logo {
    pointer-events: none;
    position: absolute;
    left: 20px;
    top: 20px;
    max-width: 50px;
    max-height: 50px;
    img {
        max-width: 100%;
        max-height: 100%;
        background: none;
    }
}`,`.dplayer-menu {
    position: absolute;
    width: 170px;
    border-radius: 2px;
    background: rgba(28, 28, 28, 0.85);
    padding: 5px 0;
    overflow: hidden;
    z-index: 3;
    display: none;
    &.dplayer-menu-show {
        display: block;
    }
    .dplayer-menu-item {
        height: 30px;
        box-sizing: border-box;
        cursor: pointer;
        &:hover {
            background-color: rgba(255, 255, 255, .1);
        }
        a {
            display: inline-block;
            padding: 0 10px;
            line-height: 30px;
            color: #eee;
            font-size: 13px;
            display: inline-block;
            vertical-align: middle;
            width: 100%;
            box-sizing: border-box;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            &:hover {
                text-decoration: none;
            }
        }
    }
}`,`.dplayer-subtitle {
    position: absolute;
    bottom: 40px;
    width: 90%;
    left: 5%;
    text-align: center;
    color: #fff;
    text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
    font-size: 20px;
    &.dplayer-subtitle-hide {
        display: none;
    }
}`,`.dplayer-mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    display: none;
    &.dplayer-mask-show {
        display: block;
    }
}

.dplayer-video-wrap {
    position: relative;
    background: #000;
    font-size: 0;
    width: 100%;
    height: 100%;
    .dplayer-video {
        width: 100%;
        height: 100%;
        display: none;
    }
    .dplayer-video-current {
        display: block;
    }
    .dplayer-video-prepare {
        display: none;
    }
}`,`.dplayer-info-panel {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 400px;
    background: rgba(28, 28, 28, 0.8);
    padding: 10px;
    color: #fff;
    font-size: 12px;
    border-radius: 2px;

    &-hide {
        display: none;
    }

    .dplayer-info-panel-close {
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 10px;
    }

    .dplayer-info-panel-item {
        & > span {
            display: inline-block;
            vertical-align: middle;
            line-height: 15px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }

    .dplayer-info-panel-item-title {
        width: 100px;
        text-align: right;
        margin-right: 10px;
    }
    
    .dplayer-info-panel-item-data {
        width: 260px;
    }
}`],sourceRoot:""}]);const F=D},856:o=>{var u=[];function y(v){for(var h=-1,E=0;E<u.length;E++)if(u[E].identifier===v){h=E;break}return h}function p(v,h){for(var E={},k=[],b=0;b<v.length;b++){var I=v[b],D=h.base?I[0]+h.base:I[0],_=E[D]||0,F="".concat(D," ").concat(_);E[D]=_+1;var T=y(F),Q={css:I[1],media:I[2],sourceMap:I[3],supports:I[4],layer:I[5]};if(T!==-1)u[T].references++,u[T].updater(Q);else{var M=m(Q,h);h.byIndex=b,u.splice(b,0,{identifier:F,updater:M,references:1})}k.push(F)}return k}function m(v,h){var E=h.domAPI(h);return E.update(v),function(k){if(k){if(k.css===v.css&&k.media===v.media&&k.sourceMap===v.sourceMap&&k.supports===v.supports&&k.layer===v.layer)return;E.update(v=k)}else E.remove()}}o.exports=function(v,h){var E=p(v=v||[],h=h||{});return function(k){k=k||[];for(var b=0;b<E.length;b++){var I=y(E[b]);u[I].references--}for(var D=p(k,h),_=0;_<E.length;_++){var F=y(E[_]);u[F].references===0&&(u[F].updater(),u.splice(F,1))}E=D}}},370:o=>{var u={};o.exports=function(y,p){var m=function(v){if(u[v]===void 0){var h=document.querySelector(v);if(window.HTMLIFrameElement&&h instanceof window.HTMLIFrameElement)try{h=h.contentDocument.head}catch{h=null}u[v]=h}return u[v]}(y);if(!m)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");m.appendChild(p)}},278:o=>{o.exports=function(u){var y=document.createElement("style");return u.setAttributes(y,u.attributes),u.insert(y,u.options),y}},458:(o,u,y)=>{o.exports=function(p){var m=y.nc;m&&p.setAttribute("nonce",m)}},470:o=>{o.exports=function(u){var y=u.insertStyleElement(u);return{update:function(p){(function(m,v,h){var E="";h.supports&&(E+="@supports (".concat(h.supports,") {")),h.media&&(E+="@media ".concat(h.media," {"));var k=h.layer!==void 0;k&&(E+="@layer".concat(h.layer.length>0?" ".concat(h.layer):""," {")),E+=h.css,k&&(E+="}"),h.media&&(E+="}"),h.supports&&(E+="}");var b=h.sourceMap;b&&typeof btoa<"u"&&(E+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(b))))," */")),v.styleTagTransform(E,m,v.options)})(y,u,p)},remove:function(){(function(p){if(p.parentNode===null)return!1;p.parentNode.removeChild(p)})(y)}}}},488:o=>{o.exports=function(u,y){if(y.styleSheet)y.styleSheet.cssText=u;else{for(;y.firstChild;)y.removeChild(y.firstChild);y.appendChild(document.createTextNode(u))}}},251:o=>{o.exports='<svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg"><path d="M288 90v96c0 20-16 36-36 36h-10c-16 0-16-24 0-24h10c7 0 12-5 12-12V90c0-7-5-12-12-12H36c-7 0-12 5-12 12v96c0 7 5 12 12 12h10c16 0 16 24 0 24H36c-20 0-36-16-36-36V90c0-20 16-36 36-36h216c20 0 36 16 36 36zm-120 62l48 68c14 20 1 38-20 38H92c-21 0-34-18-20-38l48-68c13-18 35-18 48 0z"></path></svg>'},113:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"></path></svg>'},193:o=>{o.exports='<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="chromecast" class="svg-inline--fa fa-chromecast fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M447.8,64H64c-23.6,0-42.7,19.1-42.7,42.7v63.9H64v-63.9h383.8v298.6H298.6V448H448c23.6,0,42.7-19.1,42.7-42.7V106.7 C490.7,83.1,471.4,64,447.8,64z M21.3,383.6L21.3,383.6l0,63.9h63.9C85.2,412.2,56.6,383.6,21.3,383.6L21.3,383.6z M21.3,298.6V341 c58.9,0,106.6,48.1,106.6,107h42.7C170.7,365.6,103.7,298.7,21.3,298.6z M213.4,448h42.7c-0.5-129.5-105.3-234.3-234.8-234.6l0,42.4 C127.3,255.6,213.3,342,213.4,448z"></path></svg>'},338:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"></path></svg>'},807:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"></path></svg>'},300:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"></path></svg>'},574:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"></path></svg>'},182:o=>{o.exports='<svg version="1.1" viewBox="0 0 22 22"><svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg>'},965:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z"></path></svg>'},74:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>'},730:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>'},428:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>'},254:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"></path></svg>'},934:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 28"><path d="M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"></path></svg>'},410:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>'},644:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>'},324:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>'},437:o=>{o.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z"></path></svg>'},897:(o,u,y)=>{var p=typeof self<"u"?self:typeof window<"u"?window:y.g!==void 0?y.g:{},m=Object.create(p),v=/["&'<>]/;function h(E){return typeof E!="string"&&(E=E==null?"":typeof E=="function"?h(E.call(E)):JSON.stringify(E)),E}m.$escape=function(E){return function(k){var b=""+k,I=v.exec(b);if(!I)return k;var D="",_=void 0,F=void 0,T=void 0;for(_=I.index,F=0;_<b.length;_++){switch(b.charCodeAt(_)){case 34:T="&#34;";break;case 38:T="&#38;";break;case 39:T="&#39;";break;case 60:T="&#60;";break;case 62:T="&#62;";break;default:continue}F!==_&&(D+=b.substring(F,_)),F=_+1,D+=T}return F!==_?D+b.substring(F,_):D}(h(E))},m.$each=function(E,k){if(Array.isArray(E))for(var b=0,I=E.length;b<I;b++)k(E[b],b);else for(var D in E)k(E[D],D)},o.exports=m},471:(o,u,y)=>{o.exports=y(897)},352:o=>{o.exports=function(u){var y=[];return y.toString=function(){return this.map(function(p){var m="",v=p[5]!==void 0;return p[4]&&(m+="@supports (".concat(p[4],") {")),p[2]&&(m+="@media ".concat(p[2]," {")),v&&(m+="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {")),m+=u(p),v&&(m+="}"),p[2]&&(m+="}"),p[4]&&(m+="}"),m}).join("")},y.i=function(p,m,v,h,E){typeof p=="string"&&(p=[[null,p,void 0]]);var k={};if(v)for(var b=0;b<this.length;b++){var I=this[b][0];I!=null&&(k[I]=!0)}for(var D=0;D<p.length;D++){var _=[].concat(p[D]);v&&k[_[0]]||(E!==void 0&&(_[5]===void 0||(_[1]="@layer".concat(_[5].length>0?" ".concat(_[5]):""," {").concat(_[1],"}")),_[5]=E),m&&(_[2]&&(_[1]="@media ".concat(_[2]," {").concat(_[1],"}")),_[2]=m),h&&(_[4]?(_[1]="@supports (".concat(_[4],") {").concat(_[1],"}"),_[4]=h):_[4]="".concat(h)),y.push(_))}},y}},80:o=>{o.exports=function(u,y){return y||(y={}),u&&(u=String(u.__esModule?u.default:u),/^['"].*['"]$/.test(u)&&(u=u.slice(1,-1)),y.hash&&(u+=y.hash),/["'() \t\n]|(%20)/.test(u)||y.needQuotes?'"'.concat(u.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):u)}},415:o=>{o.exports=function(u){var y=u[1],p=u[3];if(!p)return y;if(typeof btoa=="function"){var m=btoa(unescape(encodeURIComponent(JSON.stringify(p)))),v="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(m),h="/*# ".concat(v," */");return[y].concat([h]).join(`
`)}return[y].join(`
`)}},937:o=>{function u(y){return u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},u(y)}o.exports=(typeof self>"u"?"undefined":u(self))=="object"?self.FormData:window.FormData},831:o=>{o.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg=="}},r={};function i(o){var u=r[o];if(u!==void 0)return u.exports;var y=r[o]={id:o,exports:{}};return n[o](y,y.exports,i),y.exports}i.m=n,i.n=o=>{var u=o&&o.__esModule?()=>o.default:()=>o;return i.d(u,{a:u}),u},i.d=(o,u)=>{for(var y in u)i.o(u,y)&&!i.o(o,y)&&Object.defineProperty(o,y,{enumerable:!0,get:u[y]})},i.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),i.o=(o,u)=>Object.prototype.hasOwnProperty.call(o,u),i.b=document.baseURI||self.location.href,i.nc=void 0;var a={};return(()=>{i.d(a,{default:()=>mf});var o=i(856),u=i.n(o),y=i(470),p=i.n(y),m=i(370),v=i.n(m),h=i(458),E=i.n(h),k=i(278),b=i.n(k),I=i(488),D=i.n(I),_=i(685),F={};F.styleTagTransform=D(),F.setAttributes=E(),F.insert=v().bind(null,"head"),F.domAPI=p(),F.insertStyleElement=b(),u()(_.Z,F),_.Z&&_.Z.locals&&_.Z.locals;function T(s){return T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},T(s)}function Q(s,d){this.name="AggregateError",this.errors=s,this.message=d||""}Q.prototype=Error.prototype;function M(s){return M=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},M(s)}var j=setTimeout;function $(s){return!!(s&&s.length!==void 0)}function W(){}function z(s){if(!(this instanceof z))throw new TypeError("Promises must be constructed via new");if(typeof s!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],ue(s,this)}function Te(s,d){for(;s._state===3;)s=s._value;s._state!==0?(s._handled=!0,z._immediateFn(function(){var A=s._state===1?d.onFulfilled:d.onRejected;if(A!==null){var l;try{l=A(s._value)}catch(c){return void J(d.promise,c)}le(d.promise,l)}else(s._state===1?le:J)(d.promise,s._value)})):s._deferreds.push(d)}function le(s,d){try{if(d===s)throw new TypeError("A promise cannot be resolved with itself.");if(d&&(M(d)==="object"||typeof d=="function")){var A=d.then;if(d instanceof z)return s._state=3,s._value=d,void X(s);if(typeof A=="function")return void ue((l=A,c=d,function(){l.apply(c,arguments)}),s)}s._state=1,s._value=d,X(s)}catch(f){J(s,f)}var l,c}function J(s,d){s._state=2,s._value=d,X(s)}function X(s){s._state===2&&s._deferreds.length===0&&z._immediateFn(function(){s._handled||z._unhandledRejectionFn(s._value)});for(var d=0,A=s._deferreds.length;d<A;d++)Te(s,s._deferreds[d]);s._deferreds=null}function te(s,d,A){this.onFulfilled=typeof s=="function"?s:null,this.onRejected=typeof d=="function"?d:null,this.promise=A}function ue(s,d){var A=!1;try{s(function(l){A||(A=!0,le(d,l))},function(l){A||(A=!0,J(d,l))})}catch(l){if(A)return;A=!0,J(d,l)}}z.prototype.catch=function(s){return this.then(null,s)},z.prototype.then=function(s,d){var A=new this.constructor(W);return Te(this,new te(s,d,A)),A},z.prototype.finally=function(s){var d=this.constructor;return this.then(function(A){return d.resolve(s()).then(function(){return A})},function(A){return d.resolve(s()).then(function(){return d.reject(A)})})},z.all=function(s){return new z(function(d,A){if(!$(s))return A(new TypeError("Promise.all accepts an array"));var l=Array.prototype.slice.call(s);if(l.length===0)return d([]);var c=l.length;function f(w,x){try{if(x&&(M(x)==="object"||typeof x=="function")){var S=x.then;if(typeof S=="function")return void S.call(x,function(L){f(w,L)},A)}l[w]=x,--c==0&&d(l)}catch(L){A(L)}}for(var g=0;g<l.length;g++)f(g,l[g])})},z.any=function(s){var d=this;return new d(function(A,l){if(!s||s.length===void 0)return l(new TypeError("Promise.any accepts an array"));var c=Array.prototype.slice.call(s);if(c.length===0)return l();for(var f=[],g=0;g<c.length;g++)try{d.resolve(c[g]).then(A).catch(function(w){f.push(w),f.length===c.length&&l(new Q(f,"All promises were rejected"))})}catch(w){l(w)}})},z.allSettled=function(s){return new this(function(d,A){if(!s||s.length===void 0)return A(new TypeError(T(s)+" "+s+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var l=Array.prototype.slice.call(s);if(l.length===0)return d([]);var c=l.length;function f(w,x){if(x&&(T(x)==="object"||typeof x=="function")){var S=x.then;if(typeof S=="function")return void S.call(x,function(L){f(w,L)},function(L){l[w]={status:"rejected",reason:L},--c==0&&d(l)})}l[w]={status:"fulfilled",value:x},--c==0&&d(l)}for(var g=0;g<l.length;g++)f(g,l[g])})},z.resolve=function(s){return s&&M(s)==="object"&&s.constructor===z?s:new z(function(d){d(s)})},z.reject=function(s){return new z(function(d,A){A(s)})},z.race=function(s){return new z(function(d,A){if(!$(s))return A(new TypeError("Promise.race accepts an array"));for(var l=0,c=s.length;l<c;l++)z.resolve(s[l]).then(d,A)})},z._immediateFn=typeof setImmediate=="function"&&function(s){setImmediate(s)}||function(s){j(s,0)},z._unhandledRejectionFn=function(s){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",s)};const H=z;var ae=/mobile/i.test(window.navigator.userAgent);const V={secondToTime:function(s){if((s=s||0)===0||s===1/0||s.toString()==="NaN")return"00:00";var d=Math.floor(s/3600),A=Math.floor((s-3600*d)/60),l=Math.floor(s-3600*d-60*A);return(d>0?[d,A,l]:[A,l]).map(function(c){return c<10?"0"+c:""+c}).join(":")},getElementViewLeft:function(s){var d=s.offsetLeft,A=s.offsetParent,l=document.body.scrollLeft+document.documentElement.scrollLeft;if(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)for(;A!==null&&A!==s;)d+=A.offsetLeft,A=A.offsetParent;else for(;A!==null;)d+=A.offsetLeft,A=A.offsetParent;return d-l},getBoundingClientRectViewLeft:function(s){var d=window.scrollY||window.pageYOffset||document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0);if(s.getBoundingClientRect){if(typeof this.getBoundingClientRectViewLeft.offset!="number"){var A=document.createElement("div");A.style.cssText="position:absolute;top:0;left:0;",document.body.appendChild(A),this.getBoundingClientRectViewLeft.offset=-A.getBoundingClientRect().top-d,document.body.removeChild(A),A=null}var l=s.getBoundingClientRect(),c=this.getBoundingClientRectViewLeft.offset;return l.left+c}return this.getElementViewLeft(s)},getScrollPosition:function(){return{left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}},setScrollPosition:function(s){var d=s.left,A=d===void 0?0:d,l=s.top,c=l===void 0?0:l;this.isFirefox?(document.documentElement.scrollLeft=A,document.documentElement.scrollTop=c):window.scrollTo(A,c)},isMobile:ae,isFirefox:/firefox/i.test(window.navigator.userAgent),isChrome:/chrome/i.test(window.navigator.userAgent),isSafari:/safari/i.test(window.navigator.userAgent),storage:{set:function(s,d){localStorage.setItem(s,d)},get:function(s){return localStorage.getItem(s)}},nameMap:{dragStart:ae?"touchstart":"mousedown",dragMove:ae?"touchmove":"mousemove",dragEnd:ae?"touchend":"mouseup"},color2Number:function(s){return s[0]==="#"&&(s=s.substr(1)),s.length===3&&(s="".concat(s[0]).concat(s[0]).concat(s[1]).concat(s[1]).concat(s[2]).concat(s[2])),parseInt(s,16)+0&16777215},number2Color:function(s){return"#"+("00000"+s.toString(16)).slice(-6)},number2Type:function(s){switch(s){case 0:default:return"right";case 1:return"top";case 2:return"bottom"}}};function Le(s,d){return function(){return s.apply(d,arguments)}}function Oe(s){return Oe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},Oe(s)}var _e,et=Object.prototype.toString,It=Object.getPrototypeOf,vt=(_e=Object.create(null),function(s){var d=et.call(s);return _e[d]||(_e[d]=d.slice(8,-1).toLowerCase())}),He=function(s){return s=s.toLowerCase(),function(d){return vt(d)===s}},wt=function(s){return function(d){return Oe(d)===s}},yt=Array.isArray,$e=wt("undefined"),xt=He("ArrayBuffer"),cn=wt("string"),C=wt("function"),B=wt("number"),O=function(s){return s!==null&&Oe(s)==="object"},P=function(s){if(vt(s)!=="object")return!1;var d=It(s);return!(d!==null&&d!==Object.prototype&&Object.getPrototypeOf(d)!==null||Symbol.toStringTag in s||Symbol.iterator in s)},q=He("Date"),Z=He("File"),oe=He("Blob"),K=He("FileList"),ne=He("URLSearchParams");function U(s,d){var A,l,c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},f=c.allOwnKeys,g=f!==void 0&&f;if(s!=null)if(Oe(s)!=="object"&&(s=[s]),yt(s))for(A=0,l=s.length;A<l;A++)d.call(null,s[A],A,s);else{var w,x=g?Object.getOwnPropertyNames(s):Object.keys(s),S=x.length;for(A=0;A<S;A++)w=x[A],d.call(null,s[w],w,s)}}function me(s,d){d=d.toLowerCase();for(var A,l=Object.keys(s),c=l.length;c-- >0;)if(d===(A=l[c]).toLowerCase())return A;return null}var pe,ye,be=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:On,ke=function(s){return!$e(s)&&s!==be},Re=(pe=typeof Uint8Array<"u"&&It(Uint8Array),function(s){return pe&&s instanceof pe}),ze=He("HTMLFormElement"),Ke=(ye=Object.prototype.hasOwnProperty,function(s,d){return ye.call(s,d)}),Lt=He("RegExp"),un=function(s,d){var A=Object.getOwnPropertyDescriptors(s),l={};U(A,function(c,f){d(c,f,s)!==!1&&(l[f]=c)}),Object.defineProperties(s,l)};const N={isArray:yt,isArrayBuffer:xt,isBuffer:function(s){return s!==null&&!$e(s)&&s.constructor!==null&&!$e(s.constructor)&&C(s.constructor.isBuffer)&&s.constructor.isBuffer(s)},isFormData:function(s){var d="[object FormData]";return s&&(typeof FormData=="function"&&s instanceof FormData||et.call(s)===d||C(s.toString)&&s.toString()===d)},isArrayBufferView:function(s){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(s):s&&s.buffer&&xt(s.buffer)},isString:cn,isNumber:B,isBoolean:function(s){return s===!0||s===!1},isObject:O,isPlainObject:P,isUndefined:$e,isDate:q,isFile:Z,isBlob:oe,isRegExp:Lt,isFunction:C,isStream:function(s){return O(s)&&C(s.pipe)},isURLSearchParams:ne,isTypedArray:Re,isFileList:K,forEach:U,merge:function s(){for(var d=ke(this)&&this||{},A=d.caseless,l={},c=function(w,x){var S=A&&me(l,x)||x;P(l[S])&&P(w)?l[S]=s(l[S],w):P(w)?l[S]=s({},w):yt(w)?l[S]=w.slice():l[S]=w},f=0,g=arguments.length;f<g;f++)arguments[f]&&U(arguments[f],c);return l},extend:function(s,d,A){var l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},c=l.allOwnKeys;return U(d,function(f,g){A&&C(f)?s[g]=Le(f,A):s[g]=f},{allOwnKeys:c}),s},trim:function(s){return s.trim?s.trim():s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},stripBOM:function(s){return s.charCodeAt(0)===65279&&(s=s.slice(1)),s},inherits:function(s,d,A,l){s.prototype=Object.create(d.prototype,l),s.prototype.constructor=s,Object.defineProperty(s,"super",{value:d.prototype}),A&&Object.assign(s.prototype,A)},toFlatObject:function(s,d,A,l){var c,f,g,w={};if(d=d||{},s==null)return d;do{for(f=(c=Object.getOwnPropertyNames(s)).length;f-- >0;)g=c[f],l&&!l(g,s,d)||w[g]||(d[g]=s[g],w[g]=!0);s=A!==!1&&It(s)}while(s&&(!A||A(s,d))&&s!==Object.prototype);return d},kindOf:vt,kindOfTest:He,endsWith:function(s,d,A){s=String(s),(A===void 0||A>s.length)&&(A=s.length),A-=d.length;var l=s.indexOf(d,A);return l!==-1&&l===A},toArray:function(s){if(!s)return null;if(yt(s))return s;var d=s.length;if(!B(d))return null;for(var A=new Array(d);d-- >0;)A[d]=s[d];return A},forEachEntry:function(s,d){for(var A,l=(s&&s[Symbol.iterator]).call(s);(A=l.next())&&!A.done;){var c=A.value;d.call(s,c[0],c[1])}},matchAll:function(s,d){for(var A,l=[];(A=s.exec(d))!==null;)l.push(A);return l},isHTMLForm:ze,hasOwnProperty:Ke,hasOwnProp:Ke,reduceDescriptors:un,freezeMethods:function(s){un(s,function(d,A){if(C(s)&&["arguments","caller","callee"].indexOf(A)!==-1)return!1;var l=s[A];C(l)&&(d.enumerable=!1,"writable"in d?d.writable=!1:d.set||(d.set=function(){throw Error("Can not rewrite read-only method '"+A+"'")}))})},toObjectSet:function(s,d){var A={},l=function(c){c.forEach(function(f){A[f]=!0})};return yt(s)?l(s):l(String(s).split(d)),A},toCamelCase:function(s){return s.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(d,A,l){return A.toUpperCase()+l})},noop:function(){},toFiniteNumber:function(s,d){return s=+s,Number.isFinite(s)?s:d},findKey:me,global:be,isContextDefined:ke,toJSONObject:function(s){var d=new Array(10);return function A(l,c){if(O(l)){if(d.indexOf(l)>=0)return;if(!("toJSON"in l)){d[c]=l;var f=yt(l)?[]:{};return U(l,function(g,w){var x=A(g,c+1);!$e(x)&&(f[w]=x)}),d[c]=void 0,f}}return l}(s,0)}};function Nt(s,d,A,l,c){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=s,this.name="AxiosError",d&&(this.code=d),A&&(this.config=A),l&&(this.request=l),c&&(this.response=c)}N.inherits(Nt,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:N.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Tr=Nt.prototype,At={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(function(s){At[s]={value:s}}),Object.defineProperties(Nt,At),Object.defineProperty(Tr,"isAxiosError",{value:!0}),Nt.from=function(s,d,A,l,c,f){var g=Object.create(Tr);return N.toFlatObject(s,g,function(w){return w!==Error.prototype},function(w){return w!=="isAxiosError"}),Nt.call(g,s.message,d,A,l,c),g.cause=s,g.name=s.name,f&&Object.assign(g,f),g};const Be=Nt,_i=i(937);function $a(s){return $a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},$a(s)}function Va(s){return N.isPlainObject(s)||N.isArray(s)}function xl(s){return N.endsWith(s,"[]")?s.slice(0,-2):s}function El(s,d,A){return s?s.concat(d).map(function(l,c){return l=xl(l),!A&&c?"["+l+"]":l}).join(A?".":""):d}var hu=N.toFlatObject(N,{},null,function(s){return/^is[A-Z]/.test(s)});const Li=function(s,d,A){if(!N.isObject(s))throw new TypeError("target must be an object");d=d||new(_i||FormData);var l,c=(A=N.toFlatObject(A,{metaTokens:!0,dots:!1,indexes:!1},!1,function(se,ie){return!N.isUndefined(ie[se])})).metaTokens,f=A.visitor||L,g=A.dots,w=A.indexes,x=(A.Blob||typeof Blob<"u"&&Blob)&&(l=d)&&N.isFunction(l.append)&&l[Symbol.toStringTag]==="FormData"&&l[Symbol.iterator];if(!N.isFunction(f))throw new TypeError("visitor must be a function");function S(se){if(se===null)return"";if(N.isDate(se))return se.toISOString();if(!x&&N.isBlob(se))throw new Be("Blob is not supported. Use a Buffer instead.");return N.isArrayBuffer(se)||N.isTypedArray(se)?x&&typeof Blob=="function"?new Blob([se]):Buffer.from(se):se}function L(se,ie,ee){var he=se;if(se&&!ee&&$a(se)==="object"){if(N.endsWith(ie,"{}"))ie=c?ie:ie.slice(0,-2),se=JSON.stringify(se);else if(N.isArray(se)&&function(ve){return N.isArray(ve)&&!ve.some(Va)}(se)||N.isFileList(se)||N.endsWith(ie,"[]")&&(he=N.toArray(se)))return ie=xl(ie),he.forEach(function(ve,ut){!N.isUndefined(ve)&&ve!==null&&d.append(w===!0?El([ie],ut,g):w===null?ie:ie+"[]",S(ve))}),!1}return!!Va(se)||(d.append(El(ee,ie,g),S(se)),!1)}var G=[],re=Object.assign(hu,{defaultVisitor:L,convertValue:S,isVisitable:Va});if(!N.isObject(s))throw new TypeError("data must be an object");return function se(ie,ee){if(!N.isUndefined(ie)){if(G.indexOf(ie)!==-1)throw Error("Circular reference detected in "+ee.join("."));G.push(ie),N.forEach(ie,function(he,ve){(!(N.isUndefined(he)||he===null)&&f.call(d,he,N.isString(ve)?ve.trim():ve,ee,re))===!0&&se(he,ee?ee.concat(ve):[ve])}),G.pop()}}(s),d};function Cl(s){var d={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(s).replace(/[!'()~]|%20|%00/g,function(A){return d[A]})}function kl(s,d){this._pairs=[],s&&Li(s,this,d)}var Bl=kl.prototype;Bl.append=function(s,d){this._pairs.push([s,d])},Bl.toString=function(s){var d=s?function(A){return s.call(this,A,Cl)}:Cl;return this._pairs.map(function(A){return d(A[0])+"="+d(A[1])},"").join("&")};const Il=kl;function mu(s){return encodeURIComponent(s).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Sl(s,d,A){if(!d)return s;var l,c=A&&A.encode||mu,f=A&&A.serialize;if(l=f?f(d,A):N.isURLSearchParams(d)?d.toString():new Il(d,A).toString(c)){var g=s.indexOf("#");g!==-1&&(s=s.slice(0,g)),s+=(s.indexOf("?")===-1?"?":"&")+l}return s}function _r(s){return _r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},_r(s)}function yu(s,d){for(var A=0;A<d.length;A++){var l=d[A];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(s,(c=function(f,g){if(_r(f)!=="object"||f===null)return f;var w=f[Symbol.toPrimitive];if(w!==void 0){var x=w.call(f,"string");if(_r(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(f)}(l.key),_r(c)==="symbol"?c:String(c)),l)}var c}var Au=function(){function s(){(function(l,c){if(!(l instanceof c))throw new TypeError("Cannot call a class as a function")})(this,s),this.handlers=[]}var d,A;return d=s,A=[{key:"use",value:function(l,c,f){return this.handlers.push({fulfilled:l,rejected:c,synchronous:!!f&&f.synchronous,runWhen:f?f.runWhen:null}),this.handlers.length-1}},{key:"eject",value:function(l){this.handlers[l]&&(this.handlers[l]=null)}},{key:"clear",value:function(){this.handlers&&(this.handlers=[])}},{key:"forEach",value:function(l){N.forEach(this.handlers,function(c){c!==null&&l(c)})}}],A&&yu(d.prototype,A),Object.defineProperty(d,"prototype",{writable:!1}),s}();const Tl=Au,_l={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},gu=typeof URLSearchParams<"u"?URLSearchParams:Il,bu=FormData;var Ua,vu=(typeof navigator>"u"||(Ua=navigator.product)!=="ReactNative"&&Ua!=="NativeScript"&&Ua!=="NS")&&typeof window<"u"&&typeof document<"u",wu=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function";const Jt={isBrowser:!0,classes:{URLSearchParams:gu,FormData:bu,Blob},isStandardBrowserEnv:vu,isStandardBrowserWebWorkerEnv:wu,protocols:["http","https","file","blob","url","data"]},Ll=function(s){function d(l,c,f,g){var w=l[g++],x=Number.isFinite(+w),S=g>=l.length;return w=!w&&N.isArray(f)?f.length:w,S?(N.hasOwnProp(f,w)?f[w]=[f[w],c]:f[w]=c,!x):(f[w]&&N.isObject(f[w])||(f[w]=[]),d(l,c,f[w],g)&&N.isArray(f[w])&&(f[w]=function(L){var G,re,se={},ie=Object.keys(L),ee=ie.length;for(G=0;G<ee;G++)se[re=ie[G]]=L[re];return se}(f[w])),!x)}if(N.isFormData(s)&&N.isFunction(s.entries)){var A={};return N.forEachEntry(s,function(l,c){d(function(f){return N.matchAll(/\w+|\[(\w*)]/g,f).map(function(g){return g[0]==="[]"?"":g[1]||g[0]})}(l),c,A,0)}),A}return null};var xu={"Content-Type":void 0},Oi={transitional:_l,adapter:["xhr","http"],transformRequest:[function(s,d){var A,l=d.getContentType()||"",c=l.indexOf("application/json")>-1,f=N.isObject(s);if(f&&N.isHTMLForm(s)&&(s=new FormData(s)),N.isFormData(s))return c&&c?JSON.stringify(Ll(s)):s;if(N.isArrayBuffer(s)||N.isBuffer(s)||N.isStream(s)||N.isFile(s)||N.isBlob(s))return s;if(N.isArrayBufferView(s))return s.buffer;if(N.isURLSearchParams(s))return d.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),s.toString();if(f){if(l.indexOf("application/x-www-form-urlencoded")>-1)return function(w,x){return Li(w,new Jt.classes.URLSearchParams,Object.assign({visitor:function(S,L,G,re){return Jt.isNode&&N.isBuffer(S)?(this.append(L,S.toString("base64")),!1):re.defaultVisitor.apply(this,arguments)}},x))}(s,this.formSerializer).toString();if((A=N.isFileList(s))||l.indexOf("multipart/form-data")>-1){var g=this.env&&this.env.FormData;return Li(A?{"files[]":s}:s,g&&new g,this.formSerializer)}}return f||c?(d.setContentType("application/json",!1),function(w,x,S){if(N.isString(w))try{return(0,JSON.parse)(w),N.trim(w)}catch(L){if(L.name!=="SyntaxError")throw L}return(0,JSON.stringify)(w)}(s)):s}],transformResponse:[function(s){var d=this.transitional||Oi.transitional,A=d&&d.forcedJSONParsing,l=this.responseType==="json";if(s&&N.isString(s)&&(A&&!this.responseType||l)){var c=!(d&&d.silentJSONParsing)&&l;try{return JSON.parse(s)}catch(f){if(c)throw f.name==="SyntaxError"?Be.from(f,Be.ERR_BAD_RESPONSE,this,null,this.response):f}}return s}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Jt.classes.FormData,Blob:Jt.classes.Blob},validateStatus:function(s){return s>=200&&s<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};N.forEach(["delete","get","head"],function(s){Oi.headers[s]={}}),N.forEach(["post","put","patch"],function(s){Oi.headers[s]=N.merge(xu)});const ja=Oi;var Eu=N.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);function Lr(s){return Lr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},Lr(s)}function Ol(s,d){(d==null||d>s.length)&&(d=s.length);for(var A=0,l=new Array(d);A<d;A++)l[A]=s[A];return l}function Ml(s,d){for(var A=0;A<d.length;A++){var l=d[A];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(s,(c=function(f,g){if(Lr(f)!=="object"||f===null)return f;var w=f[Symbol.toPrimitive];if(w!==void 0){var x=w.call(f,"string");if(Lr(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(f)}(l.key),Lr(c)==="symbol"?c:String(c)),l)}var c}var Dl=Symbol("internals");function Or(s){return s&&String(s).trim().toLowerCase()}function Mi(s){return s===!1||s==null?s:N.isArray(s)?s.map(Mi):String(s)}function Nl(s,d,A,l){return N.isFunction(l)?l.call(this,d,A):N.isString(d)?N.isString(l)?d.indexOf(l)!==-1:N.isRegExp(l)?l.test(d):void 0:void 0}var Di=function(s,d){function A(g){(function(w,x){if(!(w instanceof x))throw new TypeError("Cannot call a class as a function")})(this,A),g&&this.set(g)}var l,c,f;return l=A,c=[{key:"set",value:function(g,w,x){var S=this;function L(ve,ut,rt){var Pe=Or(ut);if(!Pe)throw new Error("header name must be a non-empty string");var Cn=N.findKey(S,Pe);(!Cn||S[Cn]===void 0||rt===!0||rt===void 0&&S[Cn]!==!1)&&(S[Cn||ut]=Mi(ve))}var G,re,se,ie,ee,he=function(ve,ut){return N.forEach(ve,function(rt,Pe){return L(rt,Pe,ut)})};return N.isPlainObject(g)||g instanceof this.constructor?he(g,w):N.isString(g)&&(g=g.trim())&&!/^[-_a-zA-Z]+$/.test(g.trim())?he((ee={},(G=g)&&G.split(`
`).forEach(function(ve){ie=ve.indexOf(":"),re=ve.substring(0,ie).trim().toLowerCase(),se=ve.substring(ie+1).trim(),!re||ee[re]&&Eu[re]||(re==="set-cookie"?ee[re]?ee[re].push(se):ee[re]=[se]:ee[re]=ee[re]?ee[re]+", "+se:se)}),ee),w):g!=null&&L(w,g,x),this}},{key:"get",value:function(g,w){if(g=Or(g)){var x=N.findKey(this,g);if(x){var S=this[x];if(!w)return S;if(w===!0)return function(L){for(var G,re=Object.create(null),se=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;G=se.exec(L);)re[G[1]]=G[2];return re}(S);if(N.isFunction(w))return w.call(this,S,x);if(N.isRegExp(w))return w.exec(S);throw new TypeError("parser must be boolean|regexp|function")}}}},{key:"has",value:function(g,w){if(g=Or(g)){var x=N.findKey(this,g);return!(!x||w&&!Nl(0,this[x],x,w))}return!1}},{key:"delete",value:function(g,w){var x=this,S=!1;function L(G){if(G=Or(G)){var re=N.findKey(x,G);!re||w&&!Nl(0,x[re],re,w)||(delete x[re],S=!0)}}return N.isArray(g)?g.forEach(L):L(g),S}},{key:"clear",value:function(){return Object.keys(this).forEach(this.delete.bind(this))}},{key:"normalize",value:function(g){var w=this,x={};return N.forEach(this,function(S,L){var G=N.findKey(x,L);if(G)return w[G]=Mi(S),void delete w[L];var re=g?function(se){return se.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,function(ie,ee,he){return ee.toUpperCase()+he})}(L):String(L).trim();re!==L&&delete w[L],w[re]=Mi(S),x[re]=!0}),this}},{key:"concat",value:function(){for(var g,w=arguments.length,x=new Array(w),S=0;S<w;S++)x[S]=arguments[S];return(g=this.constructor).concat.apply(g,[this].concat(x))}},{key:"toJSON",value:function(g){var w=Object.create(null);return N.forEach(this,function(x,S){x!=null&&x!==!1&&(w[S]=g&&N.isArray(x)?x.join(", "):x)}),w}},{key:Symbol.iterator,value:function(){return Object.entries(this.toJSON())[Symbol.iterator]()}},{key:"toString",value:function(){return Object.entries(this.toJSON()).map(function(g){var w,x,S=(x=2,function(L){if(Array.isArray(L))return L}(w=g)||function(L,G){var re=L==null?null:typeof Symbol<"u"&&L[Symbol.iterator]||L["@@iterator"];if(re!=null){var se,ie,ee,he,ve=[],ut=!0,rt=!1;try{if(ee=(re=re.call(L)).next,G===0){if(Object(re)!==re)return;ut=!1}else for(;!(ut=(se=ee.call(re)).done)&&(ve.push(se.value),ve.length!==G);ut=!0);}catch(Pe){rt=!0,ie=Pe}finally{try{if(!ut&&re.return!=null&&(he=re.return(),Object(he)!==he))return}finally{if(rt)throw ie}}return ve}}(w,x)||function(L,G){if(L){if(typeof L=="string")return Ol(L,G);var re=Object.prototype.toString.call(L).slice(8,-1);return re==="Object"&&L.constructor&&(re=L.constructor.name),re==="Map"||re==="Set"?Array.from(L):re==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(re)?Ol(L,G):void 0}}(w,x)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}());return S[0]+": "+S[1]}).join(`
`)}},{key:Symbol.toStringTag,get:function(){return"AxiosHeaders"}}],f=[{key:"from",value:function(g){return g instanceof this?g:new this(g)}},{key:"concat",value:function(g){for(var w=new this(g),x=arguments.length,S=new Array(x>1?x-1:0),L=1;L<x;L++)S[L-1]=arguments[L];return S.forEach(function(G){return w.set(G)}),w}},{key:"accessor",value:function(g){var w=(this[Dl]=this[Dl]={accessors:{}}).accessors,x=this.prototype;function S(L){var G=Or(L);w[G]||(function(re,se){var ie=N.toCamelCase(" "+se);["get","set","has"].forEach(function(ee){Object.defineProperty(re,ee+ie,{value:function(he,ve,ut){return this[ee].call(this,se,he,ve,ut)},configurable:!0})})}(x,L),w[G]=!0)}return N.isArray(g)?g.forEach(S):S(g),this}}],c&&Ml(l.prototype,c),f&&Ml(l,f),Object.defineProperty(l,"prototype",{writable:!1}),A}();Di.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),N.freezeMethods(Di.prototype),N.freezeMethods(Di);const pn=Di;function Wa(s,d){var A=this||ja,l=d||A,c=pn.from(l.headers),f=l.data;return N.forEach(s,function(g){f=g.call(A,f,c.normalize(),d?d.status:void 0)}),c.normalize(),f}function zl(s){return!(!s||!s.__CANCEL__)}function Fl(s,d,A){Be.call(this,s??"canceled",Be.ERR_CANCELED,d,A),this.name="CanceledError"}N.inherits(Fl,Be,{__CANCEL__:!0});const Ni=Fl,Cu=Jt.isStandardBrowserEnv?{write:function(s,d,A,l,c,f){var g=[];g.push(s+"="+encodeURIComponent(d)),N.isNumber(A)&&g.push("expires="+new Date(A).toGMTString()),N.isString(l)&&g.push("path="+l),N.isString(c)&&g.push("domain="+c),f===!0&&g.push("secure"),document.cookie=g.join("; ")},read:function(s){var d=document.cookie.match(new RegExp("(^|;\\s*)("+s+")=([^;]*)"));return d?decodeURIComponent(d[3]):null},remove:function(s){this.write(s,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Rl(s,d){return s&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(d)?function(A,l){return l?A.replace(/\/+$/,"")+"/"+l.replace(/^\/+/,""):A}(s,d):d}const ku=Jt.isStandardBrowserEnv?function(){var s,d=/(msie|trident)/i.test(navigator.userAgent),A=document.createElement("a");function l(c){var f=c;return d&&(A.setAttribute("href",f),f=A.href),A.setAttribute("href",f),{href:A.href,protocol:A.protocol?A.protocol.replace(/:$/,""):"",host:A.host,search:A.search?A.search.replace(/^\?/,""):"",hash:A.hash?A.hash.replace(/^#/,""):"",hostname:A.hostname,port:A.port,pathname:A.pathname.charAt(0)==="/"?A.pathname:"/"+A.pathname}}return s=l(window.location.href),function(c){var f=N.isString(c)?l(c):c;return f.protocol===s.protocol&&f.host===s.host}}():function(){return!0};function Pl(s,d){var A=0,l=function(c,f){c=c||10;var g,w=new Array(c),x=new Array(c),S=0,L=0;return f=f!==void 0?f:1e3,function(G){var re=Date.now(),se=x[L];g||(g=re),w[S]=G,x[S]=re;for(var ie=L,ee=0;ie!==S;)ee+=w[ie++],ie%=c;if((S=(S+1)%c)===L&&(L=(L+1)%c),!(re-g<f)){var he=se&&re-se;return he?Math.round(1e3*ee/he):void 0}}}(50,250);return function(c){var f=c.loaded,g=c.lengthComputable?c.total:void 0,w=f-A,x=l(w);A=f;var S={loaded:f,total:g,progress:g?f/g:void 0,bytes:w,rate:x||void 0,estimated:x&&g&&f<=g?(g-f)/x:void 0,event:c};S[d?"download":"upload"]=!0,s(S)}}var Ha={http:null,xhr:typeof XMLHttpRequest<"u"&&function(s){return new Promise(function(d,A){var l,c=s.data,f=pn.from(s.headers).normalize(),g=s.responseType;function w(){s.cancelToken&&s.cancelToken.unsubscribe(l),s.signal&&s.signal.removeEventListener("abort",l)}N.isFormData(c)&&(Jt.isStandardBrowserEnv||Jt.isStandardBrowserWebWorkerEnv)&&f.setContentType(!1);var x=new XMLHttpRequest;if(s.auth){var S=s.auth.username||"",L=s.auth.password?unescape(encodeURIComponent(s.auth.password)):"";f.set("Authorization","Basic "+btoa(S+":"+L))}var G=Rl(s.baseURL,s.url);function re(){if(x){var he=pn.from("getAllResponseHeaders"in x&&x.getAllResponseHeaders());(function(ve,ut,rt){var Pe=rt.config.validateStatus;rt.status&&Pe&&!Pe(rt.status)?ut(new Be("Request failed with status code "+rt.status,[Be.ERR_BAD_REQUEST,Be.ERR_BAD_RESPONSE][Math.floor(rt.status/100)-4],rt.config,rt.request,rt)):ve(rt)})(function(ve){d(ve),w()},function(ve){A(ve),w()},{data:g&&g!=="text"&&g!=="json"?x.response:x.responseText,status:x.status,statusText:x.statusText,headers:he,config:s,request:x}),x=null}}if(x.open(s.method.toUpperCase(),Sl(G,s.params,s.paramsSerializer),!0),x.timeout=s.timeout,"onloadend"in x?x.onloadend=re:x.onreadystatechange=function(){x&&x.readyState===4&&(x.status!==0||x.responseURL&&x.responseURL.indexOf("file:")===0)&&setTimeout(re)},x.onabort=function(){x&&(A(new Be("Request aborted",Be.ECONNABORTED,s,x)),x=null)},x.onerror=function(){A(new Be("Network Error",Be.ERR_NETWORK,s,x)),x=null},x.ontimeout=function(){var he=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded",ve=s.transitional||_l;s.timeoutErrorMessage&&(he=s.timeoutErrorMessage),A(new Be(he,ve.clarifyTimeoutError?Be.ETIMEDOUT:Be.ECONNABORTED,s,x)),x=null},Jt.isStandardBrowserEnv){var se=(s.withCredentials||ku(G))&&s.xsrfCookieName&&Cu.read(s.xsrfCookieName);se&&f.set(s.xsrfHeaderName,se)}c===void 0&&f.setContentType(null),"setRequestHeader"in x&&N.forEach(f.toJSON(),function(he,ve){x.setRequestHeader(ve,he)}),N.isUndefined(s.withCredentials)||(x.withCredentials=!!s.withCredentials),g&&g!=="json"&&(x.responseType=s.responseType),typeof s.onDownloadProgress=="function"&&x.addEventListener("progress",Pl(s.onDownloadProgress,!0)),typeof s.onUploadProgress=="function"&&x.upload&&x.upload.addEventListener("progress",Pl(s.onUploadProgress)),(s.cancelToken||s.signal)&&(l=function(he){x&&(A(!he||he.type?new Ni(null,s,x):he),x.abort(),x=null)},s.cancelToken&&s.cancelToken.subscribe(l),s.signal&&(s.signal.aborted?l():s.signal.addEventListener("abort",l)));var ie,ee=(ie=/^([-+\w]{1,25})(:?\/\/|:)/.exec(G))&&ie[1]||"";ee&&Jt.protocols.indexOf(ee)===-1?A(new Be("Unsupported protocol "+ee+":",Be.ERR_BAD_REQUEST,s)):x.send(c||null)})}};N.forEach(Ha,function(s,d){if(s){try{Object.defineProperty(s,"name",{value:d})}catch{}Object.defineProperty(s,"adapterName",{value:d})}});function Qa(s){if(s.cancelToken&&s.cancelToken.throwIfRequested(),s.signal&&s.signal.aborted)throw new Ni(null,s)}function ql(s){return Qa(s),s.headers=pn.from(s.headers),s.data=Wa.call(s,s.transformRequest),["post","put","patch"].indexOf(s.method)!==-1&&s.headers.setContentType("application/x-www-form-urlencoded",!1),function(d){for(var A,l,c=(d=N.isArray(d)?d:[d]).length,f=0;f<c&&(A=d[f],!(l=N.isString(A)?Ha[A.toLowerCase()]:A));f++);if(!l)throw l===!1?new Be("Adapter ".concat(A," is not supported by the environment"),"ERR_NOT_SUPPORT"):new Error(N.hasOwnProp(Ha,A)?"Adapter '".concat(A,"' is not available in the build"):"Unknown adapter '".concat(A,"'"));if(!N.isFunction(l))throw new TypeError("adapter is not a function");return l}(s.adapter||ja.adapter)(s).then(function(d){return Qa(s),d.data=Wa.call(s,s.transformResponse,d),d.headers=pn.from(d.headers),d},function(d){return zl(d)||(Qa(s),d&&d.response&&(d.response.data=Wa.call(s,s.transformResponse,d.response),d.response.headers=pn.from(d.response.headers))),Promise.reject(d)})}var $l=function(s){return s instanceof pn?s.toJSON():s};function er(s,d){d=d||{};var A={};function l(S,L,G){return N.isPlainObject(S)&&N.isPlainObject(L)?N.merge.call({caseless:G},S,L):N.isPlainObject(L)?N.merge({},L):N.isArray(L)?L.slice():L}function c(S,L,G){return N.isUndefined(L)?N.isUndefined(S)?void 0:l(void 0,S,G):l(S,L,G)}function f(S,L){if(!N.isUndefined(L))return l(void 0,L)}function g(S,L){return N.isUndefined(L)?N.isUndefined(S)?void 0:l(void 0,S):l(void 0,L)}function w(S,L,G){return G in d?l(S,L):G in s?l(void 0,S):void 0}var x={url:f,method:f,data:f,baseURL:g,transformRequest:g,transformResponse:g,paramsSerializer:g,timeout:g,timeoutMessage:g,withCredentials:g,adapter:g,responseType:g,xsrfCookieName:g,xsrfHeaderName:g,onUploadProgress:g,onDownloadProgress:g,decompress:g,maxContentLength:g,maxBodyLength:g,beforeRedirect:g,transport:g,httpAgent:g,httpsAgent:g,cancelToken:g,socketPath:g,responseEncoding:g,validateStatus:w,headers:function(S,L){return c($l(S),$l(L),!0)}};return N.forEach(Object.keys(s).concat(Object.keys(d)),function(S){var L=x[S]||c,G=L(s[S],d[S],S);N.isUndefined(G)&&L!==w||(A[S]=G)}),A}function zi(s){return zi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},zi(s)}var Ya={};["object","boolean","number","function","string","symbol"].forEach(function(s,d){Ya[s]=function(A){return zi(A)===s||"a"+(d<1?"n ":" ")+s}});var Vl={};Ya.transitional=function(s,d,A){function l(c,f){return"[Axios v1.2.3] Transitional option '"+c+"'"+f+(A?". "+A:"")}return function(c,f,g){if(s===!1)throw new Be(l(f," has been removed"+(d?" in "+d:"")),Be.ERR_DEPRECATED);return d&&!Vl[f]&&(Vl[f]=!0,console.warn(l(f," has been deprecated since v"+d+" and will be removed in the near future"))),!s||s(c,f,g)}};const Ka={assertOptions:function(s,d,A){if(zi(s)!=="object")throw new Be("options must be an object",Be.ERR_BAD_OPTION_VALUE);for(var l=Object.keys(s),c=l.length;c-- >0;){var f=l[c],g=d[f];if(g){var w=s[f],x=w===void 0||g(w,f,s);if(x!==!0)throw new Be("option "+f+" must be "+x,Be.ERR_BAD_OPTION_VALUE)}else if(A!==!0)throw new Be("Unknown option "+f,Be.ERR_BAD_OPTION)}},validators:Ya};function Mr(s){return Mr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},Mr(s)}function Bu(s,d){for(var A=0;A<d.length;A++){var l=d[A];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(s,(c=function(f,g){if(Mr(f)!=="object"||f===null)return f;var w=f[Symbol.toPrimitive];if(w!==void 0){var x=w.call(f,"string");if(Mr(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(f)}(l.key),Mr(c)==="symbol"?c:String(c)),l)}var c}var xn=Ka.validators,Fi=function(){function s(l){(function(c,f){if(!(c instanceof f))throw new TypeError("Cannot call a class as a function")})(this,s),this.defaults=l,this.interceptors={request:new Tl,response:new Tl}}var d,A;return d=s,(A=[{key:"request",value:function(l,c){typeof l=="string"?(c=c||{}).url=l:c=l||{};var f,g=c=er(this.defaults,c),w=g.transitional,x=g.paramsSerializer,S=g.headers;w!==void 0&&Ka.assertOptions(w,{silentJSONParsing:xn.transitional(xn.boolean),forcedJSONParsing:xn.transitional(xn.boolean),clarifyTimeoutError:xn.transitional(xn.boolean)},!1),x!==void 0&&Ka.assertOptions(x,{encode:xn.function,serialize:xn.function},!0),c.method=(c.method||this.defaults.method||"get").toLowerCase(),(f=S&&N.merge(S.common,S[c.method]))&&N.forEach(["delete","get","head","post","put","patch","common"],function(Pe){delete S[Pe]}),c.headers=pn.concat(f,S);var L=[],G=!0;this.interceptors.request.forEach(function(Pe){typeof Pe.runWhen=="function"&&Pe.runWhen(c)===!1||(G=G&&Pe.synchronous,L.unshift(Pe.fulfilled,Pe.rejected))});var re,se=[];this.interceptors.response.forEach(function(Pe){se.push(Pe.fulfilled,Pe.rejected)});var ie,ee=0;if(!G){var he=[ql.bind(this),void 0];for(he.unshift.apply(he,L),he.push.apply(he,se),ie=he.length,re=Promise.resolve(c);ee<ie;)re=re.then(he[ee++],he[ee++]);return re}ie=L.length;var ve=c;for(ee=0;ee<ie;){var ut=L[ee++],rt=L[ee++];try{ve=ut(ve)}catch(Pe){rt.call(this,Pe);break}}try{re=ql.call(this,ve)}catch(Pe){return Promise.reject(Pe)}for(ee=0,ie=se.length;ee<ie;)re=re.then(se[ee++],se[ee++]);return re}},{key:"getUri",value:function(l){return Sl(Rl((l=er(this.defaults,l)).baseURL,l.url),l.params,l.paramsSerializer)}}])&&Bu(d.prototype,A),Object.defineProperty(d,"prototype",{writable:!1}),s}();N.forEach(["delete","get","head","options"],function(s){Fi.prototype[s]=function(d,A){return this.request(er(A||{},{method:s,url:d,data:(A||{}).data}))}}),N.forEach(["post","put","patch"],function(s){function d(A){return function(l,c,f){return this.request(er(f||{},{method:s,headers:A?{"Content-Type":"multipart/form-data"}:{},url:l,data:c}))}}Fi.prototype[s]=d(),Fi.prototype[s+"Form"]=d(!0)});const Ri=Fi;function Dr(s){return Dr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},Dr(s)}function Ul(s,d){for(var A=0;A<d.length;A++){var l=d[A];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(s,(c=function(f,g){if(Dr(f)!=="object"||f===null)return f;var w=f[Symbol.toPrimitive];if(w!==void 0){var x=w.call(f,"string");if(Dr(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(f)}(l.key),Dr(c)==="symbol"?c:String(c)),l)}var c}var Iu=function(){function s(c){if(function(w,x){if(!(w instanceof x))throw new TypeError("Cannot call a class as a function")}(this,s),typeof c!="function")throw new TypeError("executor must be a function.");var f;this.promise=new Promise(function(w){f=w});var g=this;this.promise.then(function(w){if(g._listeners){for(var x=g._listeners.length;x-- >0;)g._listeners[x](w);g._listeners=null}}),this.promise.then=function(w){var x,S=new Promise(function(L){g.subscribe(L),x=L}).then(w);return S.cancel=function(){g.unsubscribe(x)},S},c(function(w,x,S){g.reason||(g.reason=new Ni(w,x,S),f(g.reason))})}var d,A,l;return d=s,A=[{key:"throwIfRequested",value:function(){if(this.reason)throw this.reason}},{key:"subscribe",value:function(c){this.reason?c(this.reason):this._listeners?this._listeners.push(c):this._listeners=[c]}},{key:"unsubscribe",value:function(c){if(this._listeners){var f=this._listeners.indexOf(c);f!==-1&&this._listeners.splice(f,1)}}}],l=[{key:"source",value:function(){var c;return{token:new s(function(f){c=f}),cancel:c}}}],A&&Ul(d.prototype,A),l&&Ul(d,l),Object.defineProperty(d,"prototype",{writable:!1}),s}();const Su=Iu;function jl(s,d){(d==null||d>s.length)&&(d=s.length);for(var A=0,l=new Array(d);A<d;A++)l[A]=s[A];return l}var Xa={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Xa).forEach(function(s){var d,A,l=(A=2,function(g){if(Array.isArray(g))return g}(d=s)||function(g,w){var x=g==null?null:typeof Symbol<"u"&&g[Symbol.iterator]||g["@@iterator"];if(x!=null){var S,L,G,re,se=[],ie=!0,ee=!1;try{if(G=(x=x.call(g)).next,w===0){if(Object(x)!==x)return;ie=!1}else for(;!(ie=(S=G.call(x)).done)&&(se.push(S.value),se.length!==w);ie=!0);}catch(he){ee=!0,L=he}finally{try{if(!ie&&x.return!=null&&(re=x.return(),Object(re)!==re))return}finally{if(ee)throw L}}return se}}(d,A)||function(g,w){if(g){if(typeof g=="string")return jl(g,w);var x=Object.prototype.toString.call(g).slice(8,-1);return x==="Object"&&g.constructor&&(x=g.constructor.name),x==="Map"||x==="Set"?Array.from(g):x==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x)?jl(g,w):void 0}}(d,A)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),c=l[0],f=l[1];Xa[f]=c});const Tu=Xa;var ct=function s(d){var A=new Ri(d),l=Le(Ri.prototype.request,A);return N.extend(l,Ri.prototype,A,{allOwnKeys:!0}),N.extend(l,A,null,{allOwnKeys:!0}),l.create=function(c){return s(er(d,c))},l}(ja);ct.Axios=Ri,ct.CanceledError=Ni,ct.CancelToken=Su,ct.isCancel=zl,ct.VERSION="1.2.3",ct.toFormData=Li,ct.AxiosError=Be,ct.Cancel=ct.CanceledError,ct.all=function(s){return Promise.all(s)},ct.spread=function(s){return function(d){return s.apply(null,d)}},ct.isAxiosError=function(s){return N.isObject(s)&&s.isAxiosError===!0},ct.mergeConfig=er,ct.AxiosHeaders=pn,ct.formToJSON=function(s){return Ll(N.isHTMLForm(s)?new FormData(s):s)},ct.HttpStatusCode=Tu,ct.default=ct;const Wl=ct,_u={send:function(s){Wl.post(s.url,s.data).then(function(d){var A=d.data;A&&A.code===0?s.success&&s.success(A):s.error&&s.error(A&&A.msg)}).catch(function(d){console.error(d),s.error&&s.error()})},read:function(s){Wl.get(s.url).then(function(d){var A=d.data;A&&A.code===0?s.success&&s.success(A.data.map(function(l){return{time:l[0],type:l[1],color:l[2],author:l[3],text:l[4]}})):s.error&&s.error(A&&A.msg)}).catch(function(d){console.error(d),s.error&&s.error()})}};function Za(s){return Za=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},Za(s)}function Lu(s){var d=this;this.lang=s,this.fallbackLang=this.lang.includes("-")?this.lang.split("-")[0]:this.lang,this.tran=function(A){return A=A.toLowerCase(),tr[d.lang]&&tr[d.lang][A]?tr[d.lang][A]:tr[d.fallbackLang]&&tr[d.fallbackLang][A]?tr[d.fallbackLang][A]:Ga[A]?Ga[A]:A}}var Ga={"danmaku-loading":"Danmaku is loading",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Input danmaku, hit Enter","about-author":"About author","dplayer-feedback":"DPlayer feedback","about-dplayer":"About DPlayer",loop:"Loop",speed:"Speed","opacity-danmaku":"Opacity for danmaku",normal:"Normal","please-input-danmaku":"Please input danmaku content!","set-danmaku-color":"Set danmaku color","set-danmaku-type":"Set danmaku type","show-danmaku":"Show danmaku","video-failed":"Video load failed","danmaku-failed":"Danmaku load failed","danmaku-send-failed":"Danmaku send failed","switching-quality":"Switching to %q quality","switched-quality":"Switched to %q quality",ff:"FF %s s",rew:"REW %s s","unlimited-danmaku":"Unlimited danmaku","send-danmaku":"Send danmaku",setting:"Setting",fullscreen:"Full screen","web-fullscreen":"Web full screen",send:"Send",screenshot:"Screenshot",airplay:"AirPlay",chromecast:"ChromeCast",subtitle:"Subtitle",off:"Off","show-subs":"Show subtitle","hide-subs":"Hide subtitle",volume:"Volume",live:"Live","video-info":"Video info"},tr={en:Ga,"zh-cn":{"danmaku-loading":"弹幕加载中",top:"顶部",bottom:"底部",rolling:"滚动","input-danmaku-enter":"输入弹幕，回车发送","about-author":"关于作者","dplayer-feedback":"播放器意见反馈","about-dplayer":"关于 DPlayer 播放器",loop:"洗脑循环",speed:"速度","opacity-danmaku":"弹幕透明度",normal:"正常","please-input-danmaku":"要输入弹幕内容啊喂！","set-danmaku-color":"设置弹幕颜色","set-danmaku-type":"设置弹幕类型","show-danmaku":"显示弹幕","video-failed":"视频加载失败","danmaku-failed":"弹幕加载失败","danmaku-send-failed":"弹幕发送失败","switching-quality":"正在切换至 %q 画质","switched-quality":"已经切换至 %q 画质",ff:"快进 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"海量弹幕","send-danmaku":"发送弹幕",setting:"设置",fullscreen:"全屏","web-fullscreen":"页面全屏",send:"发送",screenshot:"截图",airplay:"无线投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"关闭","show-subs":"显示字幕","hide-subs":"隐藏字幕",volume:"音量",live:"直播","video-info":"视频统计信息"},"zh-tw":{"danmaku-loading":"彈幕載入中",top:"頂部",bottom:"底部",rolling:"滾動","input-danmaku-enter":"輸入彈幕，Enter 發送","about-author":"關於作者","dplayer-feedback":"播放器意見回饋","about-dplayer":"關於 DPlayer 播放器",loop:"循環播放",speed:"速度","opacity-danmaku":"彈幕透明度",normal:"正常","please-input-danmaku":"請輸入彈幕內容啊！","set-danmaku-color":"設定彈幕顏色","set-danmaku-type":"設定彈幕類型","show-danmaku":"顯示彈幕","video-failed":"影片載入失敗","danmaku-failed":"彈幕載入失敗","danmaku-send-failed":"彈幕發送失敗","switching-quality":"正在切換至 %q 畫質","switched-quality":"已經切換至 %q 畫質",ff:"快進 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"巨量彈幕","send-danmaku":"發送彈幕",setting:"設定",fullscreen:"全螢幕","web-fullscreen":"頁面全螢幕",send:"發送",screenshot:"截圖",airplay:"無線投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"關閉","show-subs":"顯示字幕","hide-subs":"隱藏字幕",volume:"音量",live:"直播","video-info":"影片統計訊息"},"ko-kr":{"danmaku-loading":"Danmaku를 불러오는 중입니다.",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Danmaku를 입력하고 Enter를 누르세요.","about-author":"만든이","dplayer-feedback":"피드백 보내기","about-dplayer":"DPlayer 정보",loop:"반복",speed:"배속","opacity-danmaku":"Danmaku 불투명도",normal:"표준","please-input-danmaku":"Danmaku를 입력하세요!","set-danmaku-color":"Danmaku 색상","set-danmaku-type":"Danmaku 설정","show-danmaku":"Danmaku 표시","video-failed":"비디오를 불러오지 못했습니다.","danmaku-failed":"Danmaku를 불러오지 못했습니다.","danmaku-send-failed":"Danmaku 전송에 실패했습니다.","Switching to":"","Switched to":"","switching-quality":"전환 %q 화질","switched-quality":"전환 됨 %q 화질",ff:"앞으로 %s 초",rew:"뒤로 %s 초","unlimited-danmaku":"끝없는 Danmaku","send-danmaku":"Danmaku 보내기",setting:"설정",fullscreen:"전체 화면","web-fullscreen":"웹 내 전체화면",send:"보내기",screenshot:"화면 캡쳐",airplay:"에어플레이",chromecast:"ChromeCast",subtitle:"부제",off:"끄다","show-subs":"자막 보이기","hide-subs":"자막 숨기기",Volume:"볼륨",live:"생방송","video-info":"비디오 정보"},de:{"danmaku-loading":"Danmaku lädt...",top:"Oben",bottom:"Unten",rolling:"Rollend","input-danmaku-enter":"Drücke Enter nach dem Einfügen vom Danmaku","about-author":"Über den Autor","dplayer-feedback":"DPlayer Feedback","about-dplayer":"Über DPlayer",loop:"Wiederholen",speed:"Geschwindigkeit","opacity-danmaku":"Transparenz für Danmaku",normal:"Normal","please-input-danmaku":"Bitte Danmaku Inhalt eingeben!","set-danmaku-color":"Danmaku Farbe festlegen","set-danmaku-type":"Danmaku Typ festlegen","show-danmaku":"Zeige Danmaku","video-failed":"Das Video konnte nicht geladen werden","danmaku-failed":"Danmaku konnte nicht geladen werden","danmaku-send-failed":"Das senden von Danmaku ist fehgeschlagen","switching-quality":"Wechsle zur %q Qualität","switched-quality":"Zur %q Qualität gewechselt",ff:"%s s Vorwärts",rew:"%s s Zurück","unlimited-danmaku":"Unlimitiertes Danmaku","send-danmaku":"Sende Danmaku",setting:"Einstellungen",fullscreen:"Vollbild","web-fullscreen":"Browser Vollbild",send:"Senden",screenshot:"Screenshot",airplay:"AirPlay","show-subs":"Zeige Untertitel",chromecast:"ChromeCast",subtitle:"Untertitel",off:"Schließung","hide-subs":"Verstecke Untertitel",volume:"Lautstärke",live:"Live","video-info":"Video Info"}},Ou=i(730),Mu=i.n(Ou),Du=i(74),Nu=i.n(Du),zu=i(437),Fu=i.n(zu),Ru=i(644),Pu=i.n(Ru),qu=i(324),$u=i.n(qu),Vu=i(574),Uu=i.n(Vu),ju=i(300),Wu=i.n(ju),Hu=i(934),Qu=i.n(Hu),Yu=i(428),Ku=i.n(Yu),Xu=i(807),Zu=i.n(Xu),Gu=i(338),Ju=i.n(Gu),ep=i(254),tp=i.n(ep),np=i(965),rp=i.n(np),ip=i(113),ap=i.n(ip),op=i(251),lp=i.n(op),sp=i(410),dp=i.n(sp),cp=i(182),up=i.n(cp),pp=i(193),fp=i.n(pp);const Ut={play:Mu(),pause:Nu(),volumeUp:Fu(),volumeDown:Pu(),volumeOff:$u(),full:Uu(),fullWeb:Wu(),setting:Qu(),right:Ku(),comment:Zu(),commentOff:Ju(),send:tp(),pallette:rp(),camera:ap(),subtitle:dp(),loading:up(),airplay:lp(),chromecast:fp()};var hp=i(916),mp=i.n(hp);function Nr(s){return Nr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},Nr(s)}function Hl(s,d){for(var A=0;A<d.length;A++){var l=d[A];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(s,(c=function(f,g){if(Nr(f)!=="object"||f===null)return f;var w=f[Symbol.toPrimitive];if(w!==void 0){var x=w.call(f,"string");if(Nr(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(f)}(l.key),Nr(c)==="symbol"?c:String(c)),l)}var c}var yp=function(){function s(c){(function(f,g){if(!(f instanceof g))throw new TypeError("Cannot call a class as a function")})(this,s),this.container=c.container,this.options=c.options,this.index=c.index,this.tran=c.tran,this.init()}var d,A,l;return d=s,l=[{key:"NewNotice",value:function(c,f,g){var w=document.createElement("div");return w.classList.add("dplayer-notice"),w.style.opacity=f,w.innerText=c,g&&(w.id="dplayer-notice-".concat(g)),w}}],(A=[{key:"init",value:function(){this.container.innerHTML=mp()({options:this.options,index:this.index,tran:this.tran,icons:Ut,mobile:V.isMobile,video:{current:!0,pic:this.options.video.pic,screenshot:this.options.screenshot,airplay:!(!V.isSafari||V.isChrome)&&this.options.airplay,chromecast:this.options.chromecast,preload:this.options.preload,url:this.options.video.url,subtitle:this.options.subtitle}}),this.volumeBar=this.container.querySelector(".dplayer-volume-bar-inner"),this.volumeBarWrap=this.container.querySelector(".dplayer-volume-bar"),this.volumeBarWrapWrap=this.container.querySelector(".dplayer-volume-bar-wrap"),this.volumeButton=this.container.querySelector(".dplayer-volume"),this.volumeButtonIcon=this.container.querySelector(".dplayer-volume-icon"),this.volumeIcon=this.container.querySelector(".dplayer-volume-icon .dplayer-icon-content"),this.playedBar=this.container.querySelector(".dplayer-played"),this.loadedBar=this.container.querySelector(".dplayer-loaded"),this.playedBarWrap=this.container.querySelector(".dplayer-bar-wrap"),this.playedBarTime=this.container.querySelector(".dplayer-bar-time"),this.danmaku=this.container.querySelector(".dplayer-danmaku"),this.danmakuLoading=this.container.querySelector(".dplayer-danloading"),this.video=this.container.querySelector(".dplayer-video-current"),this.bezel=this.container.querySelector(".dplayer-bezel-icon"),this.playButton=this.container.querySelector(".dplayer-play-icon"),this.mobilePlayButton=this.container.querySelector(".dplayer-mobile-play"),this.videoWrap=this.container.querySelector(".dplayer-video-wrap"),this.controllerMask=this.container.querySelector(".dplayer-controller-mask"),this.ptime=this.container.querySelector(".dplayer-ptime"),this.settingButton=this.container.querySelector(".dplayer-setting-icon"),this.settingBox=this.container.querySelector(".dplayer-setting-box"),this.mask=this.container.querySelector(".dplayer-mask"),this.loop=this.container.querySelector(".dplayer-setting-loop"),this.loopToggle=this.container.querySelector(".dplayer-setting-loop .dplayer-toggle-setting-input"),this.showDanmaku=this.container.querySelector(".dplayer-setting-showdan"),this.showDanmakuToggle=this.container.querySelector(".dplayer-showdan-setting-input"),this.unlimitDanmaku=this.container.querySelector(".dplayer-setting-danunlimit"),this.unlimitDanmakuToggle=this.container.querySelector(".dplayer-danunlimit-setting-input"),this.speed=this.container.querySelector(".dplayer-setting-speed"),this.speedItem=this.container.querySelectorAll(".dplayer-setting-speed-item"),this.danmakuOpacityBar=this.container.querySelector(".dplayer-danmaku-bar-inner"),this.danmakuOpacityBarWrap=this.container.querySelector(".dplayer-danmaku-bar"),this.danmakuOpacityBarWrapWrap=this.container.querySelector(".dplayer-danmaku-bar-wrap"),this.danmakuOpacityBox=this.container.querySelector(".dplayer-setting-danmaku"),this.dtime=this.container.querySelector(".dplayer-dtime"),this.controller=this.container.querySelector(".dplayer-controller"),this.commentInput=this.container.querySelector(".dplayer-comment-input"),this.commentButton=this.container.querySelector(".dplayer-comment-icon"),this.commentSettingBox=this.container.querySelector(".dplayer-comment-setting-box"),this.commentSettingButton=this.container.querySelector(".dplayer-comment-setting-icon"),this.commentSettingFill=this.container.querySelector(".dplayer-comment-setting-icon path"),this.commentSendButton=this.container.querySelector(".dplayer-send-icon"),this.commentSendFill=this.container.querySelector(".dplayer-send-icon path"),this.commentColorSettingBox=this.container.querySelector(".dplayer-comment-setting-color"),this.browserFullButton=this.container.querySelector(".dplayer-full-icon"),this.webFullButton=this.container.querySelector(".dplayer-full-in-icon"),this.menu=this.container.querySelector(".dplayer-menu"),this.menuItem=this.container.querySelectorAll(".dplayer-menu-item"),this.qualityList=this.container.querySelector(".dplayer-quality-list"),this.camareButton=this.container.querySelector(".dplayer-camera-icon"),this.airplayButton=this.container.querySelector(".dplayer-airplay-icon"),this.chromecastButton=this.container.querySelector(".dplayer-chromecast-icon"),this.subtitleButton=this.container.querySelector(".dplayer-subtitle-icon"),this.subtitleButtonInner=this.container.querySelector(".dplayer-subtitle-icon .dplayer-icon-content"),this.subtitlesButton=this.container.querySelector(".dplayer-subtitles-icon"),this.subtitlesBox=this.container.querySelector(".dplayer-subtitles-box"),this.subtitlesItem=this.container.querySelectorAll(".dplayer-subtitles-item"),this.subtitle=this.container.querySelector(".dplayer-subtitle"),this.subtrack=this.container.querySelector(".dplayer-subtrack"),this.qualityButton=this.container.querySelector(".dplayer-quality-icon"),this.barPreview=this.container.querySelector(".dplayer-bar-preview"),this.barWrap=this.container.querySelector(".dplayer-bar-wrap"),this.noticeList=this.container.querySelector(".dplayer-notice-list"),this.infoPanel=this.container.querySelector(".dplayer-info-panel"),this.infoPanelClose=this.container.querySelector(".dplayer-info-panel-close"),this.infoVersion=this.container.querySelector(".dplayer-info-panel-item-version .dplayer-info-panel-item-data"),this.infoFPS=this.container.querySelector(".dplayer-info-panel-item-fps .dplayer-info-panel-item-data"),this.infoType=this.container.querySelector(".dplayer-info-panel-item-type .dplayer-info-panel-item-data"),this.infoUrl=this.container.querySelector(".dplayer-info-panel-item-url .dplayer-info-panel-item-data"),this.infoResolution=this.container.querySelector(".dplayer-info-panel-item-resolution .dplayer-info-panel-item-data"),this.infoDuration=this.container.querySelector(".dplayer-info-panel-item-duration .dplayer-info-panel-item-data"),this.infoDanmakuId=this.container.querySelector(".dplayer-info-panel-item-danmaku-id .dplayer-info-panel-item-data"),this.infoDanmakuApi=this.container.querySelector(".dplayer-info-panel-item-danmaku-api .dplayer-info-panel-item-data"),this.infoDanmakuAmount=this.container.querySelector(".dplayer-info-panel-item-danmaku-amount .dplayer-info-panel-item-data")}}])&&Hl(d.prototype,A),l&&Hl(d,l),Object.defineProperty(d,"prototype",{writable:!1}),s}();const Ql=yp;function nr(s){return nr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},nr(s)}function Ap(s,d){for(var A=0;A<d.length;A++){var l=d[A];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(s,(c=function(f,g){if(nr(f)!=="object"||f===null)return f;var w=f[Symbol.toPrimitive];if(w!==void 0){var x=w.call(f,"string");if(nr(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(f)}(l.key),nr(c)==="symbol"?c:String(c)),l)}var c}var gp=function(){function s(l){(function(c,f){if(!(c instanceof f))throw new TypeError("Cannot call a class as a function")})(this,s),this.options=l,this.player=this.options.player,this.container=this.options.container,this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.dan=[],this.showing=!0,this._opacity=this.options.opacity,this.events=this.options.events,this.unlimited=this.options.unlimited,this._measure(""),this.load()}var d,A;return d=s,A=[{key:"load",value:function(){var l,c=this;l=this.options.api.maximum?"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id,"&max=").concat(this.options.api.maximum):"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id);var f=(this.options.api.addition||[]).slice(0);f.push(l),this.events&&this.events.trigger("danmaku_load_start",f),this._readAllEndpoints(f,function(g){c.dan=[].concat.apply([],g).sort(function(w,x){return w.time-x.time}),window.requestAnimationFrame(function(){c.frame()}),c.options.callback(),c.events&&c.events.trigger("danmaku_load_end")})}},{key:"reload",value:function(l){this.options.api=l,this.dan=[],this.clear(),this.load()}},{key:"_readAllEndpoints",value:function(l,c){for(var f=this,g=[],w=0,x=function(L){f.options.apiBackend.read({url:l[L],success:function(G){g[L]=G,++w===l.length&&c(g)},error:function(G){f.options.error(G||f.options.tran("danmaku-failed")),g[L]=[],++w===l.length&&c(g)}})},S=0;S<l.length;++S)x(S)}},{key:"send",value:function(l,c){var f=this,g={token:this.options.api.token,id:this.options.api.id,author:this.options.api.user,time:this.options.time(),text:l.text,color:l.color,type:l.type};this.options.apiBackend.send({url:this.options.api.address+"v3/",data:g,success:c,error:function(x){f.options.error(x||f.options.tran("danmaku-failed"))}}),this.dan.splice(this.danIndex,0,g),this.danIndex++;var w={text:this.htmlEncode(g.text),color:g.color,type:g.type,border:"2px solid ".concat(this.options.borderColor)};this.draw(w),this.events&&this.events.trigger("danmaku_send",g)}},{key:"frame",value:function(){var l=this;if(this.dan.length&&!this.paused&&this.showing){for(var c=this.dan[this.danIndex],f=[];c&&this.options.time()>parseFloat(c.time);)f.push(c),c=this.dan[++this.danIndex];this.draw(f)}window.requestAnimationFrame(function(){l.frame()})}},{key:"opacity",value:function(l){if(l!==void 0){for(var c=this.container.getElementsByClassName("dplayer-danmaku-item"),f=0;f<c.length;f++)c[f].style.opacity=l;this._opacity=l,this.events&&this.events.trigger("danmaku_opacity",this._opacity)}return this._opacity}},{key:"draw",value:function(l){var c=this;if(this.showing){var f=this.options.height,g=this.container.offsetWidth,w=this.container.offsetHeight,x=parseInt(w/f),S=function(ee){var he=ee.offsetWidth||parseInt(ee.style.width),ve=ee.getBoundingClientRect().right||c.container.getBoundingClientRect().right+he;return c.container.getBoundingClientRect().right-ve},L=function(ee){return(g+ee)/5},G=function(ee,he,ve){for(var ut=g/L(ve),rt=function(Rn){var ir=c.danTunnel[he][Rn+""];if(!ir||!ir.length)return c.danTunnel[he][Rn+""]=[ee],ee.addEventListener("animationend",function(){c.danTunnel[he][Rn+""].splice(0,1)}),{v:Rn%x};if(he!=="right")return"continue";for(var Gr=0;Gr<ir.length;Gr++){var Jl=S(ir[Gr])-10;if(Jl<=g-ut*L(parseInt(ir[Gr].style.width))||Jl<=0)break;if(Gr===ir.length-1)return c.danTunnel[he][Rn+""].push(ee),ee.addEventListener("animationend",function(){c.danTunnel[he][Rn+""].splice(0,1)}),{v:Rn%x}}},Pe=0;c.unlimited||Pe<x;Pe++){var Cn=rt(Pe);if(Cn!=="continue"&&nr(Cn)==="object")return Cn.v}return-1};Object.prototype.toString.call(l)!=="[object Array]"&&(l=[l]);for(var re=document.createDocumentFragment(),se=function(){l[ie].type=V.number2Type(l[ie].type),l[ie].color||(l[ie].color=16777215);var ee=document.createElement("div");ee.classList.add("dplayer-danmaku-item"),ee.classList.add("dplayer-danmaku-".concat(l[ie].type)),l[ie].border?ee.innerHTML='<span style="border:'.concat(l[ie].border,'">').concat(l[ie].text,"</span>"):ee.innerHTML=l[ie].text,ee.style.opacity=c._opacity,ee.style.color=V.number2Color(l[ie].color),ee.addEventListener("animationend",function(){c.container.removeChild(ee)});var he,ve=c._measure(l[ie].text);switch(l[ie].type){case"right":(he=G(ee,l[ie].type,ve))>=0&&(ee.style.width=ve+1+"px",ee.style.top=f*he+"px",ee.style.transform="translateX(-".concat(g,"px)"));break;case"top":(he=G(ee,l[ie].type))>=0&&(ee.style.top=f*he+"px");break;case"bottom":(he=G(ee,l[ie].type))>=0&&(ee.style.bottom=f*he+"px");break;default:console.error("Can't handled danmaku type: ".concat(l[ie].type))}he>=0&&(ee.classList.add("dplayer-danmaku-move"),ee.style.animationDuration=c._danAnimation(l[ie].type),re.appendChild(ee))},ie=0;ie<l.length;ie++)se();return this.container.appendChild(re),re}}},{key:"play",value:function(){this.paused=!1}},{key:"pause",value:function(){this.paused=!0}},{key:"_measure",value:function(l){if(!this.context){var c=getComputedStyle(this.container.getElementsByClassName("dplayer-danmaku-item")[0],null);this.context=document.createElement("canvas").getContext("2d"),this.context.font=c.getPropertyValue("font")}return this.context.measureText(l).width}},{key:"seek",value:function(){this.clear();for(var l=0;l<this.dan.length;l++){if(this.dan[l].time>=this.options.time()){this.danIndex=l;break}this.danIndex=this.dan.length}}},{key:"clear",value:function(){this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.options.container.innerHTML="",this.events&&this.events.trigger("danmaku_clear")}},{key:"htmlEncode",value:function(l){return l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2f;")}},{key:"resize",value:function(){for(var l=this.container.offsetWidth,c=this.container.getElementsByClassName("dplayer-danmaku-item"),f=0;f<c.length;f++)c[f].style.transform="translateX(-".concat(l,"px)")}},{key:"hide",value:function(){this.showing=!1,this.pause(),this.clear(),this.events&&this.events.trigger("danmaku_hide")}},{key:"show",value:function(){this.seek(),this.showing=!0,this.play(),this.events&&this.events.trigger("danmaku_show")}},{key:"unlimit",value:function(l){this.unlimited=l}},{key:"speed",value:function(l){this.options.api.speedRate=l}},{key:"_danAnimation",value:function(l){var c=this.options.api.speedRate||1,f=!!this.player.fullScreen.isFullScreen();return{top:"".concat((f?6:4)/c,"s"),right:"".concat((f?8:5)/c,"s"),bottom:"".concat((f?6:4)/c,"s")}[l]}}],A&&Ap(d.prototype,A),Object.defineProperty(d,"prototype",{writable:!1}),s}();const bp=gp;function zr(s){return zr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},zr(s)}function vp(s,d){for(var A=0;A<d.length;A++){var l=d[A];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(s,(c=function(f,g){if(zr(f)!=="object"||f===null)return f;var w=f[Symbol.toPrimitive];if(w!==void 0){var x=w.call(f,"string");if(zr(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(f)}(l.key),zr(c)==="symbol"?c:String(c)),l)}var c}const wp=function(){function s(){(function(l,c){if(!(l instanceof c))throw new TypeError("Cannot call a class as a function")})(this,s),this.events={},this.videoEvents=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","mozaudioavailable","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],this.playerEvents=["screenshot","thumbnails_show","thumbnails_hide","danmaku_show","danmaku_hide","danmaku_clear","danmaku_loaded","danmaku_send","danmaku_opacity","contextmenu_show","contextmenu_hide","notice_show","notice_hide","quality_start","quality_end","destroy","resize","fullscreen","fullscreen_cancel","webfullscreen","webfullscreen_cancel","subtitle_show","subtitle_hide","subtitle_change"]}var d,A;return d=s,(A=[{key:"on",value:function(l,c){this.type(l)&&typeof c=="function"&&(this.events[l]||(this.events[l]=[]),this.events[l].push(c))}},{key:"trigger",value:function(l,c){if(this.events[l]&&this.events[l].length)for(var f=0;f<this.events[l].length;f++)this.events[l][f](c)}},{key:"type",value:function(l){return this.playerEvents.indexOf(l)!==-1?"player":this.videoEvents.indexOf(l)!==-1?"video":(console.error("Unknown event name: ".concat(l)),null)}}])&&vp(d.prototype,A),Object.defineProperty(d,"prototype",{writable:!1}),s}();function Fr(s){return Fr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},Fr(s)}function xp(s,d){for(var A=0;A<d.length;A++){var l=d[A];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(s,(c=function(f,g){if(Fr(f)!=="object"||f===null)return f;var w=f[Symbol.toPrimitive];if(w!==void 0){var x=w.call(f,"string");if(Fr(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(f)}(l.key),Fr(c)==="symbol"?c:String(c)),l)}var c}var Ep=function(){function s(l){var c=this;(function(f,g){if(!(f instanceof g))throw new TypeError("Cannot call a class as a function")})(this,s),this.player=l,this.lastScrollPosition={left:0,top:0},this.player.events.on("webfullscreen",function(){c.player.resize()}),this.player.events.on("webfullscreen_cancel",function(){c.player.resize(),V.setScrollPosition(c.lastScrollPosition)}),this.fullscreenchange=function(){c.player.resize(),c.isFullScreen("browser")?c.player.events.trigger("fullscreen"):(V.setScrollPosition(c.lastScrollPosition),c.player.events.trigger("fullscreen_cancel"))},this.docfullscreenchange=function(){var f=document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;f&&f!==c.player.container||(c.player.resize(),f?c.player.events.trigger("fullscreen"):(V.setScrollPosition(c.lastScrollPosition),c.player.events.trigger("fullscreen_cancel")))},/Firefox/.test(navigator.userAgent)?(document.addEventListener("mozfullscreenchange",this.docfullscreenchange),document.addEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.addEventListener("fullscreenchange",this.fullscreenchange),this.player.container.addEventListener("webkitfullscreenchange",this.fullscreenchange),document.addEventListener("msfullscreenchange",this.docfullscreenchange),document.addEventListener("MSFullscreenChange",this.docfullscreenchange))}var d,A;return d=s,A=[{key:"isFullScreen",value:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(l){case"browser":return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;case"web":return this.player.container.classList.contains("dplayer-fulled")}}},{key:"request",value:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser",c=l==="browser"?"web":"browser",f=this.isFullScreen(c);switch(f||(this.lastScrollPosition=V.getScrollPosition()),l){case"browser":this.player.container.requestFullscreen?this.player.container.requestFullscreen():this.player.container.mozRequestFullScreen?this.player.container.mozRequestFullScreen():this.player.container.webkitRequestFullscreen?this.player.container.webkitRequestFullscreen():this.player.video.webkitEnterFullscreen?this.player.video.webkitEnterFullscreen():this.player.video.webkitEnterFullScreen?this.player.video.webkitEnterFullScreen():this.player.container.msRequestFullscreen&&this.player.container.msRequestFullscreen();break;case"web":this.player.container.classList.add("dplayer-fulled"),document.body.classList.add("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen")}f&&this.cancel(c)}},{key:"cancel",value:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(l){case"browser":document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.webkitCancelFullscreen?document.webkitCancelFullscreen():document.msCancelFullScreen?document.msCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen();break;case"web":this.player.container.classList.remove("dplayer-fulled"),document.body.classList.remove("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen_cancel")}}},{key:"toggle",value:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";this.isFullScreen(l)?this.cancel(l):this.request(l)}},{key:"destroy",value:function(){/Firefox/.test(navigator.userAgent)?(document.removeEventListener("mozfullscreenchange",this.docfullscreenchange),document.removeEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.removeEventListener("fullscreenchange",this.fullscreenchange),this.player.container.removeEventListener("webkitfullscreenchange",this.fullscreenchange),document.removeEventListener("msfullscreenchange",this.docfullscreenchange),document.removeEventListener("MSFullscreenChange",this.docfullscreenchange))}}],A&&xp(d.prototype,A),Object.defineProperty(d,"prototype",{writable:!1}),s}();const Cp=Ep;function Rr(s){return Rr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},Rr(s)}function kp(s,d){for(var A=0;A<d.length;A++){var l=d[A];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(s,(c=function(f,g){if(Rr(f)!=="object"||f===null)return f;var w=f[Symbol.toPrimitive];if(w!==void 0){var x=w.call(f,"string");if(Rr(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(f)}(l.key),Rr(c)==="symbol"?c:String(c)),l)}var c}var Bp=function(){function s(l){(function(c,f){if(!(c instanceof f))throw new TypeError("Cannot call a class as a function")})(this,s),this.storageName={opacity:"dplayer-danmaku-opacity",volume:"dplayer-volume",unlimited:"dplayer-danmaku-unlimited",danmaku:"dplayer-danmaku-show",subtitle:"dplayer-subtitle-show"},this.default={opacity:.7,volume:l.options.hasOwnProperty("volume")?l.options.volume:.7,unlimited:(l.options.danmaku&&l.options.danmaku.unlimited?1:0)||0,danmaku:1,subtitle:1},this.data={},this.init()}var d,A;return d=s,(A=[{key:"init",value:function(){for(var l in this.storageName){var c=this.storageName[l];this.data[l]=parseFloat(V.storage.get(c)||this.default[l])}}},{key:"get",value:function(l){return this.data[l]}},{key:"set",value:function(l,c){this.data[l]=c,V.storage.set(this.storageName[l],c)}}])&&kp(d.prototype,A),Object.defineProperty(d,"prototype",{writable:!1}),s}();const Ip=Bp;function Pr(s){return Pr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},Pr(s)}function Sp(s,d){for(var A=0;A<d.length;A++){var l=d[A];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(s,(c=function(f,g){if(Pr(f)!=="object"||f===null)return f;var w=f[Symbol.toPrimitive];if(w!==void 0){var x=w.call(f,"string");if(Pr(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(f)}(l.key),Pr(c)==="symbol"?c:String(c)),l)}var c}var Tp=function(){function s(l,c,f,g){(function(w,x){if(!(w instanceof x))throw new TypeError("Cannot call a class as a function")})(this,s),this.container=l,this.video=c,this.options=f,this.events=g,this.init()}var d,A;return d=s,A=[{key:"init",value:function(){var l=this;if(this.container.style.fontSize=this.options.fontSize,this.container.style.bottom=this.options.bottom,this.container.style.color=this.options.color,this.video.textTracks&&this.video.textTracks[0]){var c=this.video.textTracks[0];c.oncuechange=function(){var f=c.activeCues[c.activeCues.length-1];if(l.container.innerHTML="",f){var g=document.createElement("div");g.appendChild(f.getCueAsHTML());var w=g.innerHTML.split(/\r?\n/).map(function(x){return"<p>".concat(x,"</p>")}).join("");l.container.innerHTML=w}l.events.trigger("subtitle_change")}}}},{key:"show",value:function(){this.container.classList.remove("dplayer-subtitle-hide"),this.events.trigger("subtitle_show")}},{key:"hide",value:function(){this.container.classList.add("dplayer-subtitle-hide"),this.events.trigger("subtitle_hide")}},{key:"toggle",value:function(){this.container.classList.contains("dplayer-subtitle-hide")?this.show():this.hide()}}],A&&Sp(d.prototype,A),Object.defineProperty(d,"prototype",{writable:!1}),s}();const _p=Tp;function qr(s){return qr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},qr(s)}function Lp(s,d){for(var A=0;A<d.length;A++){var l=d[A];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(s,(c=function(f,g){if(qr(f)!=="object"||f===null)return f;var w=f[Symbol.toPrimitive];if(w!==void 0){var x=w.call(f,"string");if(qr(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(f)}(l.key),qr(c)==="symbol"?c:String(c)),l)}var c}var Op=function(){function s(l){var c=this;(function(x,S){if(!(x instanceof S))throw new TypeError("Cannot call a class as a function")})(this,s),this.player=l,this.player.template.mask.addEventListener("click",function(){c.hide()}),this.player.template.subtitlesButton.addEventListener("click",function(){c.adaptiveHeight(),c.show()});for(var f=this.player.template.subtitlesItem.length-1,g=function(x){c.player.template.subtitlesItem[x].addEventListener("click",function(){c.hide(),c.player.options.subtitle.index!==x&&(c.player.template.subtitle.innerHTML="<p></p>",c.player.template.subtrack.src=c.player.template.subtitlesItem[x].dataset.subtitle,c.player.options.subtitle.index=x,c.player.template.subtitle.classList.contains("dplayer-subtitle-hide")&&c.subContainerShow())})},w=0;w<f;w++)g(w);this.player.template.subtitlesItem[f].addEventListener("click",function(){c.hide(),c.player.options.subtitle.index!==f&&(c.player.template.subtitle.innerHTML="<p></p>",c.player.template.subtrack.src="",c.player.options.subtitle.index=f,c.subContainerHide())})}var d,A;return d=s,(A=[{key:"subContainerShow",value:function(){this.player.template.subtitle.classList.remove("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_show")}},{key:"subContainerHide",value:function(){this.player.template.subtitle.classList.add("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_hide")}},{key:"hide",value:function(){this.player.template.subtitlesBox.classList.remove("dplayer-subtitles-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.subtitlesBox.classList.add("dplayer-subtitles-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}},{key:"adaptiveHeight",value:function(){var l=30*this.player.template.subtitlesItem.length+14,c=.8*this.player.template.videoWrap.offsetHeight;l>=c-50?(this.player.template.subtitlesBox.style.bottom="8px",this.player.template.subtitlesBox.style["max-height"]=c-8+"px"):(this.player.template.subtitlesBox.style.bottom="50px",this.player.template.subtitlesBox.style["max-height"]=c-50+"px")}}])&&Lp(d.prototype,A),Object.defineProperty(d,"prototype",{writable:!1}),s}();const Mp=Op;function $r(s){return $r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},$r(s)}function Dp(s,d){for(var A=0;A<d.length;A++){var l=d[A];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(s,(c=function(f,g){if($r(f)!=="object"||f===null)return f;var w=f[Symbol.toPrimitive];if(w!==void 0){var x=w.call(f,"string");if($r(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(f)}(l.key),$r(c)==="symbol"?c:String(c)),l)}var c}var Np=function(){function s(l){(function(c,f){if(!(c instanceof f))throw new TypeError("Cannot call a class as a function")})(this,s),this.elements={},this.elements.volume=l.volumeBar,this.elements.played=l.playedBar,this.elements.loaded=l.loadedBar,this.elements.danmaku=l.danmakuOpacityBar}var d,A;return d=s,(A=[{key:"set",value:function(l,c,f){c=Math.max(c,0),c=Math.min(c,1),this.elements[l].style[f]=100*c+"%"}},{key:"get",value:function(l){return parseFloat(this.elements[l].style.width)/100}}])&&Dp(d.prototype,A),Object.defineProperty(d,"prototype",{writable:!1}),s}();const zp=Np;function Vr(s){return Vr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},Vr(s)}function Fp(s,d){for(var A=0;A<d.length;A++){var l=d[A];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(s,(c=function(f,g){if(Vr(f)!=="object"||f===null)return f;var w=f[Symbol.toPrimitive];if(w!==void 0){var x=w.call(f,"string");if(Vr(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(f)}(l.key),Vr(c)==="symbol"?c:String(c)),l)}var c}var Rp=function(){function s(l){(function(c,f){if(!(c instanceof f))throw new TypeError("Cannot call a class as a function")})(this,s),this.player=l,window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(c){window.setTimeout(c,1e3/60)},this.types=["loading","info","fps"],this.init()}var d,A;return d=s,(A=[{key:"init",value:function(){var l=this;this.types.map(function(c){return c!=="fps"&&l["init".concat(c,"Checker")](),c})}},{key:"initloadingChecker",value:function(){var l=this,c=0,f=0,g=!1;this.loadingChecker=setInterval(function(){l.enableloadingChecker&&(f=l.player.video.currentTime,g||f!==c||l.player.video.paused||(l.player.container.classList.add("dplayer-loading"),g=!0),g&&f>c&&!l.player.video.paused&&(l.player.container.classList.remove("dplayer-loading"),g=!1),c=f)},100)}},{key:"initfpsChecker",value:function(){var l=this;window.requestAnimationFrame(function(){if(l.enablefpsChecker)if(l.initfpsChecker(),l.fpsStart){l.fpsIndex++;var c=new Date;c-l.fpsStart>1e3&&(l.player.infoPanel.fps(l.fpsIndex/(c-l.fpsStart)*1e3),l.fpsStart=new Date,l.fpsIndex=0)}else l.fpsStart=new Date,l.fpsIndex=0;else l.fpsStart=0,l.fpsIndex=0})}},{key:"initinfoChecker",value:function(){var l=this;this.infoChecker=setInterval(function(){l.enableinfoChecker&&l.player.infoPanel.update()},1e3)}},{key:"enable",value:function(l){this["enable".concat(l,"Checker")]=!0,l==="fps"&&this.initfpsChecker()}},{key:"disable",value:function(l){this["enable".concat(l,"Checker")]=!1}},{key:"destroy",value:function(){var l=this;this.types.map(function(c){return l["enable".concat(c,"Checker")]=!1,l["".concat(c,"Checker")]&&clearInterval(l["".concat(c,"Checker")]),c})}}])&&Fp(d.prototype,A),Object.defineProperty(d,"prototype",{writable:!1}),s}();const Pp=Rp;function Ur(s){return Ur=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},Ur(s)}function qp(s,d){for(var A=0;A<d.length;A++){var l=d[A];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(s,(c=function(f,g){if(Ur(f)!=="object"||f===null)return f;var w=f[Symbol.toPrimitive];if(w!==void 0){var x=w.call(f,"string");if(Ur(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(f)}(l.key),Ur(c)==="symbol"?c:String(c)),l)}var c}const $p=function(){function s(l){var c=this;(function(f,g){if(!(f instanceof g))throw new TypeError("Cannot call a class as a function")})(this,s),this.container=l,this.container.addEventListener("animationend",function(){c.container.classList.remove("dplayer-bezel-transition")})}var d,A;return d=s,(A=[{key:"switch",value:function(l){this.container.innerHTML=l,this.container.classList.add("dplayer-bezel-transition")}}])&&qp(d.prototype,A),Object.defineProperty(d,"prototype",{writable:!1}),s}();function jr(s){return jr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},jr(s)}function Vp(s,d){for(var A=0;A<d.length;A++){var l=d[A];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(s,(c=function(f,g){if(jr(f)!=="object"||f===null)return f;var w=f[Symbol.toPrimitive];if(w!==void 0){var x=w.call(f,"string");if(jr(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(f)}(l.key),jr(c)==="symbol"?c:String(c)),l)}var c}var Up=function(){function s(l){(function(c,f){if(!(c instanceof f))throw new TypeError("Cannot call a class as a function")})(this,s),this.container=l.container,this.barWidth=l.barWidth,this.container.style.backgroundImage="url('".concat(l.url,"')"),this.events=l.events}var d,A;return d=s,(A=[{key:"resize",value:function(l,c,f){this.container.style.width="".concat(l,"px"),this.container.style.height="".concat(c,"px"),this.container.style.top="".concat(2-c,"px"),this.barWidth=f}},{key:"show",value:function(){this.container.style.display="block",this.events&&this.events.trigger("thumbnails_show")}},{key:"move",value:function(l){this.container.style.backgroundPosition="-".concat(160*(Math.ceil(l/this.barWidth*100)-1),"px 0"),this.container.style.left="".concat(Math.min(Math.max(l-this.container.offsetWidth/2,-10),this.barWidth-150),"px")}},{key:"hide",value:function(){this.container.style.display="none",this.events&&this.events.trigger("thumbnails_hide")}}])&&Vp(d.prototype,A),Object.defineProperty(d,"prototype",{writable:!1}),s}();const jp=Up;function Wr(s){return Wr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},Wr(s)}function Wp(s,d){for(var A=0;A<d.length;A++){var l=d[A];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(s,(c=function(f,g){if(Wr(f)!=="object"||f===null)return f;var w=f[Symbol.toPrimitive];if(w!==void 0){var x=w.call(f,"string");if(Wr(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(f)}(l.key),Wr(c)==="symbol"?c:String(c)),l)}var c}var En,Yl=!0,Ja=!1,Hp=function(){function s(l){(function(c,f){if(!(c instanceof f))throw new TypeError("Cannot call a class as a function")})(this,s),this.player=l,this.autoHideTimer=0,V.isMobile||(this.setAutoHideHandler=this.setAutoHide.bind(this),this.player.container.addEventListener("mousemove",this.setAutoHideHandler),this.player.container.addEventListener("click",this.setAutoHideHandler),this.player.on("play",this.setAutoHideHandler),this.player.on("pause",this.setAutoHideHandler)),this.initPlayButton(),this.initThumbnails(),this.initPlayedBar(),this.initFullButton(),this.initQualityButton(),this.initScreenshotButton(),this.player.options.subtitle&&typeof this.player.options.subtitle.url=="string"&&this.initSubtitleButton(),this.initHighlights(),this.initAirplayButton(),this.initChromecastButton(),V.isMobile||this.initVolumeButton()}var d,A;return d=s,(A=[{key:"initPlayButton",value:function(){var l=this;this.player.template.playButton.addEventListener("click",function(){l.player.toggle()}),this.player.template.mobilePlayButton.addEventListener("click",function(){l.player.toggle()}),V.isMobile?(this.player.template.videoWrap.addEventListener("click",function(){l.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){l.toggle()})):this.player.options.preventClickToggle||(this.player.template.videoWrap.addEventListener("click",function(){l.player.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){l.player.toggle()}))}},{key:"initHighlights",value:function(){var l=this;this.player.on("durationchange",function(){if(l.player.video.duration!==1&&l.player.video.duration!==1/0&&l.player.options.highlight){var c=l.player.template.playedBarWrap.querySelectorAll(".dplayer-highlight");[].slice.call(c,0).forEach(function(w){l.player.template.playedBarWrap.removeChild(w)});for(var f=0;f<l.player.options.highlight.length;f++)if(l.player.options.highlight[f].text&&l.player.options.highlight[f].time){var g=document.createElement("div");g.classList.add("dplayer-highlight"),g.style.left=l.player.options.highlight[f].time/l.player.video.duration*100+"%",g.innerHTML='<span class="dplayer-highlight-text">'+l.player.options.highlight[f].text+"</span>",l.player.template.playedBarWrap.insertBefore(g,l.player.template.playedBarTime)}}})}},{key:"initThumbnails",value:function(){var l=this;this.player.options.video.thumbnails&&(this.thumbnails=new jp({container:this.player.template.barPreview,barWidth:this.player.template.barWrap.offsetWidth,url:this.player.options.video.thumbnails,events:this.player.events}),this.player.on("loadedmetadata",function(){l.thumbnails.resize(160,l.player.video.videoHeight/l.player.video.videoWidth*160,l.player.template.barWrap.offsetWidth)}))}},{key:"initPlayedBar",value:function(){var l=this,c=function(g){var w=((g.clientX||g.changedTouches[0].clientX)-V.getBoundingClientRectViewLeft(l.player.template.playedBarWrap))/l.player.template.playedBarWrap.clientWidth;w=Math.max(w,0),w=Math.min(w,1),l.player.bar.set("played",w,"width"),l.player.template.ptime.innerHTML=V.secondToTime(w*l.player.video.duration)},f=function g(w){document.removeEventListener(V.nameMap.dragEnd,g),document.removeEventListener(V.nameMap.dragMove,c);var x=((w.clientX||w.changedTouches[0].clientX)-V.getBoundingClientRectViewLeft(l.player.template.playedBarWrap))/l.player.template.playedBarWrap.clientWidth;x=Math.max(x,0),x=Math.min(x,1),l.player.bar.set("played",x,"width"),l.player.seek(l.player.bar.get("played")*l.player.video.duration),l.player.timer.enable("progress")};this.player.template.playedBarWrap.addEventListener(V.nameMap.dragStart,function(){l.player.timer.disable("progress"),document.addEventListener(V.nameMap.dragMove,c),document.addEventListener(V.nameMap.dragEnd,f)}),this.player.template.playedBarWrap.addEventListener(V.nameMap.dragMove,function(g){if(l.player.video.duration){var w=l.player.template.playedBarWrap.getBoundingClientRect().left,x=(g.clientX||g.changedTouches[0].clientX)-w;if(x<0||x>l.player.template.playedBarWrap.offsetWidth)return;var S=l.player.video.duration*(x/l.player.template.playedBarWrap.offsetWidth);V.isMobile&&l.thumbnails&&l.thumbnails.show(),l.thumbnails&&l.thumbnails.move(x),l.player.template.playedBarTime.style.left="".concat(x-(S>=3600?25:20),"px"),l.player.template.playedBarTime.innerText=V.secondToTime(S),l.player.template.playedBarTime.classList.remove("hidden")}}),this.player.template.playedBarWrap.addEventListener(V.nameMap.dragEnd,function(){V.isMobile&&l.thumbnails&&l.thumbnails.hide()}),V.isMobile||(this.player.template.playedBarWrap.addEventListener("mouseenter",function(){l.player.video.duration&&(l.thumbnails&&l.thumbnails.show(),l.player.template.playedBarTime.classList.remove("hidden"))}),this.player.template.playedBarWrap.addEventListener("mouseleave",function(){l.player.video.duration&&(l.thumbnails&&l.thumbnails.hide(),l.player.template.playedBarTime.classList.add("hidden"))}))}},{key:"initFullButton",value:function(){var l=this;this.player.template.browserFullButton.addEventListener("click",function(){l.player.fullScreen.toggle("browser")}),this.player.template.webFullButton.addEventListener("click",function(){l.player.fullScreen.toggle("web")})}},{key:"initVolumeButton",value:function(){var l=this,c=function(g){var w=g||window.event,x=((w.clientX||w.changedTouches[0].clientX)-V.getBoundingClientRectViewLeft(l.player.template.volumeBarWrap)-5.5)/35;l.player.volume(x)},f=function g(){document.removeEventListener(V.nameMap.dragEnd,g),document.removeEventListener(V.nameMap.dragMove,c),l.player.template.volumeButton.classList.remove("dplayer-volume-active")};this.player.template.volumeBarWrapWrap.addEventListener("click",function(g){var w=g||window.event,x=((w.clientX||w.changedTouches[0].clientX)-V.getBoundingClientRectViewLeft(l.player.template.volumeBarWrap)-5.5)/35;l.player.volume(x)}),this.player.template.volumeBarWrapWrap.addEventListener(V.nameMap.dragStart,function(){document.addEventListener(V.nameMap.dragMove,c),document.addEventListener(V.nameMap.dragEnd,f),l.player.template.volumeButton.classList.add("dplayer-volume-active")}),this.player.template.volumeButtonIcon.addEventListener("click",function(){l.player.video.muted?(l.player.video.muted=!1,l.player.switchVolumeIcon(),l.player.bar.set("volume",l.player.volume(),"width")):(l.player.video.muted=!0,l.player.template.volumeIcon.innerHTML=Ut.volumeOff,l.player.bar.set("volume",0,"width"))})}},{key:"initQualityButton",value:function(){var l=this;this.player.options.video.quality&&this.player.template.qualityList.addEventListener("click",function(c){c.target.classList.contains("dplayer-quality-item")&&l.player.switchQuality(c.target.dataset.index)})}},{key:"initScreenshotButton",value:function(){var l=this;this.player.options.screenshot&&this.player.template.camareButton.addEventListener("click",function(){var c,f=document.createElement("canvas");f.width=l.player.video.videoWidth,f.height=l.player.video.videoHeight,f.getContext("2d").drawImage(l.player.video,0,0,f.width,f.height),f.toBlob(function(g){c=URL.createObjectURL(g);var w=document.createElement("a");w.href=c,w.download="DPlayer.png",w.style.display="none",document.body.appendChild(w),w.click(),document.body.removeChild(w),URL.revokeObjectURL(c),l.player.events.trigger("screenshot",c)})})}},{key:"initAirplayButton",value:function(){this.player.options.airplay&&(window.WebKitPlaybackTargetAvailabilityEvent?this.player.video.addEventListener("webkitplaybacktargetavailabilitychanged",function(l){l.availability==="available"?this.template.airplayButton.disable=!1:this.template.airplayButton.disable=!0,this.template.airplayButton.addEventListener("click",function(){this.video.webkitShowPlaybackTargetPicker()}.bind(this))}.bind(this.player)):this.player.template.airplayButton.style.display="none")}},{key:"initChromecast",value:function(){var l=window.document.createElement("script");l.setAttribute("type","text/javascript"),l.setAttribute("src","https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"),window.document.body.appendChild(l),window.__onGCastApiAvailable=function(c){if(c){var f=new(En=window.chrome.cast).SessionRequest(En.media.DEFAULT_MEDIA_RECEIVER_APP_ID),g=new En.ApiConfig(f,function(){},function(w){w===En.ReceiverAvailability.AVAILABLE&&console.log("chromecast: ",w)});En.initialize(g,function(){})}}}},{key:"initChromecastButton",value:function(){var l=this;if(this.player.options.chromecast){Yl&&(Yl=!1,this.initChromecast());var c=function(g,w){l.currentMedia=w},f=function(g){console.error("Error launching media",g)};this.player.template.chromecastButton.addEventListener("click",function(){Ja?(Ja=!1,l.currentMedia.stop(),l.session.stop(),l.initChromecast()):(Ja=!0,En.requestSession(function(g){var w,x,S;l.session=g,w=l.player.options.video.url,x=new En.media.MediaInfo(w),S=new En.media.LoadRequest(x),l.session?l.session.loadMedia(S,c.bind(l,"loadMedia"),f).play():window.open(w)},function(g){g.code==="cancel"?l.session=void 0:console.error("Error selecting a cast device",g)}))})}}},{key:"initSubtitleButton",value:function(){var l=this;this.player.events.on("subtitle_show",function(){l.player.template.subtitleButton.dataset.balloon=l.player.tran("hide-subs"),l.player.template.subtitleButtonInner.style.opacity="",l.player.user.set("subtitle",1)}),this.player.events.on("subtitle_hide",function(){l.player.template.subtitleButton.dataset.balloon=l.player.tran("show-subs"),l.player.template.subtitleButtonInner.style.opacity="0.4",l.player.user.set("subtitle",0)}),this.player.template.subtitleButton.addEventListener("click",function(){l.player.subtitle.toggle()})}},{key:"setAutoHide",value:function(){var l=this;this.show(),clearTimeout(this.autoHideTimer),this.autoHideTimer=setTimeout(function(){!l.player.video.played.length||l.player.paused||l.disableAutoHide||l.hide()},3e3)}},{key:"show",value:function(){this.player.container.classList.remove("dplayer-hide-controller")}},{key:"hide",value:function(){this.player.container.classList.add("dplayer-hide-controller"),this.player.setting.hide(),this.player.comment&&this.player.comment.hide()}},{key:"isShow",value:function(){return!this.player.container.classList.contains("dplayer-hide-controller")}},{key:"toggle",value:function(){this.isShow()?this.hide():this.show()}},{key:"destroy",value:function(){V.isMobile||(this.player.container.removeEventListener("mousemove",this.setAutoHideHandler),this.player.container.removeEventListener("click",this.setAutoHideHandler)),clearTimeout(this.autoHideTimer)}}])&&Wp(d.prototype,A),Object.defineProperty(d,"prototype",{writable:!1}),s}();const Qp=Hp;function Hr(s){return Hr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},Hr(s)}function Yp(s,d){for(var A=0;A<d.length;A++){var l=d[A];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(s,(c=function(f,g){if(Hr(f)!=="object"||f===null)return f;var w=f[Symbol.toPrimitive];if(w!==void 0){var x=w.call(f,"string");if(Hr(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(f)}(l.key),Hr(c)==="symbol"?c:String(c)),l)}var c}var Kp=function(){function s(l){var c=this;(function(S,L){if(!(S instanceof L))throw new TypeError("Cannot call a class as a function")})(this,s),this.player=l,this.player.template.mask.addEventListener("click",function(){c.hide()}),this.player.template.settingButton.addEventListener("click",function(){c.show()}),this.loop=this.player.options.loop,this.player.template.loopToggle.checked=this.loop,this.player.template.loop.addEventListener("click",function(){c.player.template.loopToggle.checked=!c.player.template.loopToggle.checked,c.player.template.loopToggle.checked?c.loop=!0:c.loop=!1,c.hide()}),this.showDanmaku=this.player.user.get("danmaku"),this.showDanmaku||this.player.danmaku&&this.player.danmaku.hide(),this.player.template.showDanmakuToggle.checked=this.showDanmaku,this.player.template.showDanmaku.addEventListener("click",function(){c.player.template.showDanmakuToggle.checked=!c.player.template.showDanmakuToggle.checked,c.player.template.showDanmakuToggle.checked?(c.showDanmaku=!0,c.player.danmaku.show()):(c.showDanmaku=!1,c.player.danmaku.hide()),c.player.user.set("danmaku",c.showDanmaku?1:0),c.hide()}),this.unlimitDanmaku=this.player.user.get("unlimited"),this.player.template.unlimitDanmakuToggle.checked=this.unlimitDanmaku,this.player.template.unlimitDanmaku.addEventListener("click",function(){c.player.template.unlimitDanmakuToggle.checked=!c.player.template.unlimitDanmakuToggle.checked,c.player.template.unlimitDanmakuToggle.checked?(c.unlimitDanmaku=!0,c.player.danmaku.unlimit(!0)):(c.unlimitDanmaku=!1,c.player.danmaku.unlimit(!1)),c.player.user.set("unlimited",c.unlimitDanmaku?1:0),c.hide()}),this.player.template.speed.addEventListener("click",function(){c.player.template.settingBox.classList.add("dplayer-setting-box-narrow"),c.player.template.settingBox.classList.add("dplayer-setting-box-speed")});for(var f=function(S){c.player.template.speedItem[S].addEventListener("click",function(){c.player.speed(c.player.template.speedItem[S].dataset.speed),c.hide()})},g=0;g<this.player.template.speedItem.length;g++)f(g);if(this.player.danmaku){this.player.on("danmaku_opacity",function(S){c.player.bar.set("danmaku",S,"width"),c.player.user.set("opacity",S)}),this.player.danmaku.opacity(this.player.user.get("opacity"));var w=function(S){var L=S||window.event,G=((L.clientX||L.changedTouches[0].clientX)-V.getBoundingClientRectViewLeft(c.player.template.danmakuOpacityBarWrap))/130;G=Math.max(G,0),G=Math.min(G,1),c.player.danmaku.opacity(G)},x=function S(){document.removeEventListener(V.nameMap.dragEnd,S),document.removeEventListener(V.nameMap.dragMove,w),c.player.template.danmakuOpacityBox.classList.remove("dplayer-setting-danmaku-active")};this.player.template.danmakuOpacityBarWrapWrap.addEventListener("click",function(S){var L=S||window.event,G=((L.clientX||L.changedTouches[0].clientX)-V.getBoundingClientRectViewLeft(c.player.template.danmakuOpacityBarWrap))/130;G=Math.max(G,0),G=Math.min(G,1),c.player.danmaku.opacity(G)}),this.player.template.danmakuOpacityBarWrapWrap.addEventListener(V.nameMap.dragStart,function(){document.addEventListener(V.nameMap.dragMove,w),document.addEventListener(V.nameMap.dragEnd,x),c.player.template.danmakuOpacityBox.classList.add("dplayer-setting-danmaku-active")})}}var d,A;return d=s,(A=[{key:"hide",value:function(){var l=this;this.player.template.settingBox.classList.remove("dplayer-setting-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),setTimeout(function(){l.player.template.settingBox.classList.remove("dplayer-setting-box-narrow"),l.player.template.settingBox.classList.remove("dplayer-setting-box-speed")},300),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.settingBox.classList.add("dplayer-setting-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}}])&&Yp(d.prototype,A),Object.defineProperty(d,"prototype",{writable:!1}),s}();const Xp=Kp;function Qr(s){return Qr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},Qr(s)}function Zp(s,d){for(var A=0;A<d.length;A++){var l=d[A];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(s,(c=function(f,g){if(Qr(f)!=="object"||f===null)return f;var w=f[Symbol.toPrimitive];if(w!==void 0){var x=w.call(f,"string");if(Qr(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(f)}(l.key),Qr(c)==="symbol"?c:String(c)),l)}var c}var Gp=function(){function s(l){var c=this;(function(f,g){if(!(f instanceof g))throw new TypeError("Cannot call a class as a function")})(this,s),this.player=l,this.player.template.mask.addEventListener("click",function(){c.hide()}),this.player.template.commentButton.addEventListener("click",function(){c.show()}),this.player.template.commentSettingButton.addEventListener("click",function(){c.toggleSetting()}),this.player.template.commentColorSettingBox.addEventListener("click",function(){if(c.player.template.commentColorSettingBox.querySelector("input:checked+span")){var f=c.player.template.commentColorSettingBox.querySelector("input:checked").value;c.player.template.commentSettingFill.style.fill=f,c.player.template.commentInput.style.color=f,c.player.template.commentSendFill.style.fill=f}}),this.player.template.commentInput.addEventListener("click",function(){c.hideSetting()}),this.player.template.commentInput.addEventListener("keydown",function(f){(f||window.event).keyCode===13&&c.send()}),this.player.template.commentSendButton.addEventListener("click",function(){c.send()})}var d,A;return d=s,(A=[{key:"show",value:function(){this.player.controller.disableAutoHide=!0,this.player.template.controller.classList.add("dplayer-controller-comment"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.container.classList.add("dplayer-show-controller"),this.player.template.commentInput.focus()}},{key:"hide",value:function(){this.player.template.controller.classList.remove("dplayer-controller-comment"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.container.classList.remove("dplayer-show-controller"),this.player.controller.disableAutoHide=!1,this.hideSetting()}},{key:"showSetting",value:function(){this.player.template.commentSettingBox.classList.add("dplayer-comment-setting-open")}},{key:"hideSetting",value:function(){this.player.template.commentSettingBox.classList.remove("dplayer-comment-setting-open")}},{key:"toggleSetting",value:function(){this.player.template.commentSettingBox.classList.contains("dplayer-comment-setting-open")?this.hideSetting():this.showSetting()}},{key:"send",value:function(){var l=this;this.player.template.commentInput.blur(),this.player.template.commentInput.value.replace(/^\s+|\s+$/g,"")?this.player.danmaku.send({text:this.player.template.commentInput.value,color:V.color2Number(this.player.container.querySelector(".dplayer-comment-setting-color input:checked").value),type:parseInt(this.player.container.querySelector(".dplayer-comment-setting-type input:checked").value)},function(){l.player.template.commentInput.value="",l.hide()}):this.player.notice(this.player.tran("please-input-danmaku"))}}])&&Zp(d.prototype,A),Object.defineProperty(d,"prototype",{writable:!1}),s}();const Jp=Gp;function Yr(s){return Yr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},Yr(s)}function ef(s,d){for(var A=0;A<d.length;A++){var l=d[A];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(s,(c=function(f,g){if(Yr(f)!=="object"||f===null)return f;var w=f[Symbol.toPrimitive];if(w!==void 0){var x=w.call(f,"string");if(Yr(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(f)}(l.key),Yr(c)==="symbol"?c:String(c)),l)}var c}var tf=function(){function s(l){(function(c,f){if(!(c instanceof f))throw new TypeError("Cannot call a class as a function")})(this,s),this.player=l,this.doHotKeyHandler=this.doHotKey.bind(this),this.cancelFullScreenHandler=this.cancelFullScreen.bind(this),this.player.options.hotkey&&document.addEventListener("keydown",this.doHotKeyHandler),document.addEventListener("keydown",this.cancelFullScreenHandler)}var d,A;return d=s,(A=[{key:"doHotKey",value:function(l){if(this.player.focus){var c=document.activeElement.tagName.toUpperCase(),f=document.activeElement.getAttribute("contenteditable");if(c!=="INPUT"&&c!=="TEXTAREA"&&f!==""&&f!=="true"){var g,w=l||window.event;switch(w.keyCode){case 32:w.preventDefault(),this.player.toggle();break;case 37:if(w.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime-5),this.player.controller.setAutoHide();break;case 39:if(w.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime+5),this.player.controller.setAutoHide();break;case 38:w.preventDefault(),g=this.player.volume()+.1,this.player.volume(g);break;case 40:w.preventDefault(),g=this.player.volume()-.1,this.player.volume(g)}}}}},{key:"cancelFullScreen",value:function(l){(l||window.event).keyCode===27&&this.player.fullScreen.isFullScreen("web")&&this.player.fullScreen.cancel("web")}},{key:"destroy",value:function(){this.player.options.hotkey&&document.removeEventListener("keydown",this.doHotKeyHandler),document.removeEventListener("keydown",this.cancelFullScreenHandler)}}])&&ef(d.prototype,A),Object.defineProperty(d,"prototype",{writable:!1}),s}();const nf=tf;function Kr(s){return Kr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},Kr(s)}function rf(s,d){for(var A=0;A<d.length;A++){var l=d[A];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(s,(c=function(f,g){if(Kr(f)!=="object"||f===null)return f;var w=f[Symbol.toPrimitive];if(w!==void 0){var x=w.call(f,"string");if(Kr(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(f)}(l.key),Kr(c)==="symbol"?c:String(c)),l)}var c}var af=function(){function s(l){var c=this;(function(f,g){if(!(f instanceof g))throw new TypeError("Cannot call a class as a function")})(this,s),this.player=l,this.shown=!1,Array.prototype.slice.call(this.player.template.menuItem).forEach(function(f,g){c.player.options.contextmenu[g].click&&f.addEventListener("click",function(){c.player.options.contextmenu[g].click(c.player),c.hide()})}),this.contextmenuHandler=function(f){if(c.shown)c.hide();else{var g=f||window.event;g.preventDefault();var w=c.player.container.getBoundingClientRect();c.show(g.clientX-w.left,g.clientY-w.top),c.player.template.mask.addEventListener("click",function(){c.hide()})}},this.player.container.addEventListener("contextmenu",this.contextmenuHandler)}var d,A;return d=s,(A=[{key:"show",value:function(l,c){this.player.template.menu.classList.add("dplayer-menu-show");var f=this.player.container.getBoundingClientRect();l+this.player.template.menu.offsetWidth>=f.width?(this.player.template.menu.style.right=f.width-l+"px",this.player.template.menu.style.left="initial"):(this.player.template.menu.style.left=l+"px",this.player.template.menu.style.right="initial"),c+this.player.template.menu.offsetHeight>=f.height?(this.player.template.menu.style.bottom=f.height-c+"px",this.player.template.menu.style.top="initial"):(this.player.template.menu.style.top=c+"px",this.player.template.menu.style.bottom="initial"),this.player.template.mask.classList.add("dplayer-mask-show"),this.shown=!0,this.player.events.trigger("contextmenu_show")}},{key:"hide",value:function(){this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.template.menu.classList.remove("dplayer-menu-show"),this.shown=!1,this.player.events.trigger("contextmenu_hide")}},{key:"destroy",value:function(){this.player.container.removeEventListener("contextmenu",this.contextmenuHandler)}}])&&rf(d.prototype,A),Object.defineProperty(d,"prototype",{writable:!1}),s}();const of=af;function Xr(s){return Xr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},Xr(s)}function lf(s,d){for(var A=0;A<d.length;A++){var l=d[A];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(s,(c=function(f,g){if(Xr(f)!=="object"||f===null)return f;var w=f[Symbol.toPrimitive];if(w!==void 0){var x=w.call(f,"string");if(Xr(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(f)}(l.key),Xr(c)==="symbol"?c:String(c)),l)}var c}var sf=function(){function s(l){var c=this;(function(f,g){if(!(f instanceof g))throw new TypeError("Cannot call a class as a function")})(this,s),this.container=l.template.infoPanel,this.template=l.template,this.video=l.video,this.player=l,this.template.infoPanelClose.addEventListener("click",function(){c.hide()})}var d,A;return d=s,(A=[{key:"show",value:function(){this.beginTime=Date.now(),this.update(),this.player.timer.enable("info"),this.player.timer.enable("fps"),this.container.classList.remove("dplayer-info-panel-hide")}},{key:"hide",value:function(){this.player.timer.disable("info"),this.player.timer.disable("fps"),this.container.classList.add("dplayer-info-panel-hide")}},{key:"triggle",value:function(){this.container.classList.contains("dplayer-info-panel-hide")?this.show():this.hide()}},{key:"update",value:function(){this.template.infoVersion.innerHTML="v".concat("1.27.1"," ").concat("v1.27.0-12-g4f61091"),this.template.infoType.innerHTML=this.player.type,this.template.infoUrl.innerHTML=this.player.options.video.url,this.template.infoResolution.innerHTML="".concat(this.player.video.videoWidth," x ").concat(this.player.video.videoHeight),this.template.infoDuration.innerHTML=this.player.video.duration,this.player.options.danmaku&&(this.template.infoDanmakuId.innerHTML=this.player.options.danmaku.id,this.template.infoDanmakuApi.innerHTML=this.player.options.danmaku.api,this.template.infoDanmakuAmount.innerHTML=this.player.danmaku.dan.length)}},{key:"fps",value:function(l){this.template.infoFPS.innerHTML="".concat(l.toFixed(1))}}])&&lf(d.prototype,A),Object.defineProperty(d,"prototype",{writable:!1}),s}();const df=sf;var cf=i(568),uf=i.n(cf);function Zr(s){return Zr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},Zr(s)}function Kl(s,d){var A=Object.keys(s);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(s);d&&(l=l.filter(function(c){return Object.getOwnPropertyDescriptor(s,c).enumerable})),A.push.apply(A,l)}return A}function pf(s,d,A){return(d=Zl(d))in s?Object.defineProperty(s,d,{value:A,enumerable:!0,configurable:!0,writable:!0}):s[d]=A,s}function Xl(s,d){for(var A=0;A<d.length;A++){var l=d[A];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(s,Zl(l.key),l)}}function Zl(s){var d=function(A,l){if(Zr(A)!=="object"||A===null)return A;var c=A[Symbol.toPrimitive];if(c!==void 0){var f=c.call(A,"string");if(Zr(f)!=="object")return f;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(A)}(s);return Zr(d)==="symbol"?d:String(d)}var Gl=0,rr=[],ff=function(){function s(c){var f=this;(function(g,w){if(!(g instanceof w))throw new TypeError("Cannot call a class as a function")})(this,s),this.options=function(g){var w={container:g.element||document.getElementsByClassName("dplayer")[0],live:!1,autoplay:!1,theme:"#b7daff",loop:!1,lang:(navigator.language||navigator.browserLanguage).toLowerCase(),screenshot:!1,airplay:!0,chromecast:!1,hotkey:!0,preload:"metadata",volume:.7,playbackSpeed:[.5,.75,1,1.25,1.5,2],apiBackend:_u,video:{},contextmenu:[],mutex:!0,pluginOptions:{hls:{},flv:{},dash:{},webtorrent:{}},preventClickToggle:!1};for(var x in w)w.hasOwnProperty(x)&&!g.hasOwnProperty(x)&&(g[x]=w[x]);return g.video&&!g.video.type&&(g.video.type="auto"),Za(g.danmaku)==="object"&&g.danmaku&&!g.danmaku.user&&(g.danmaku.user="DIYgod"),g.subtitle&&(!g.subtitle.type&&(g.subtitle.type="webvtt"),!g.subtitle.fontSize&&(g.subtitle.fontSize="20px"),!g.subtitle.bottom&&(g.subtitle.bottom="40px"),!g.subtitle.color&&(g.subtitle.color="#fff")),g.video.quality&&(g.video.url=g.video.quality[g.video.defaultQuality].url),g.lang&&(g.lang=g.lang.toLowerCase()),g.contextmenu=g.contextmenu.concat([{key:"video-info",click:function(S){S.infoPanel.triggle()}},{key:"about-author",link:"https://diygod.me"},{text:"DPlayer v".concat("1.27.1"),link:"https://github.com/MoePlayer/DPlayer"}]),g}(function(g){for(var w=1;w<arguments.length;w++){var x=arguments[w]!=null?arguments[w]:{};w%2?Kl(Object(x),!0).forEach(function(S){pf(g,S,x[S])}):Object.getOwnPropertyDescriptors?Object.defineProperties(g,Object.getOwnPropertyDescriptors(x)):Kl(Object(x)).forEach(function(S){Object.defineProperty(g,S,Object.getOwnPropertyDescriptor(x,S))})}return g}({preload:c.video.type==="webtorrent"?"none":"metadata"},c)),this.options.video.quality&&(this.qualityIndex=this.options.video.defaultQuality,this.quality=this.options.video.quality[this.options.video.defaultQuality]),this.tran=new Lu(this.options.lang).tran,this.events=new wp,this.user=new Ip(this),this.container=this.options.container,this.noticeList={},this.container.classList.add("dplayer"),this.options.danmaku||this.container.classList.add("dplayer-no-danmaku"),this.options.live?this.container.classList.add("dplayer-live"):this.container.classList.remove("dplayer-live"),V.isMobile&&this.container.classList.add("dplayer-mobile"),this.arrow=this.container.offsetWidth<=500,this.arrow&&this.container.classList.add("dplayer-arrow"),this.options.subtitle&&Array.isArray(this.options.subtitle.url)&&(this.options.subtitle.url.push({subtitle:"",lang:"off"}),this.options.subtitle.defaultSubtitle&&(typeof this.options.subtitle.defaultSubtitle=="string"?this.options.subtitle.index=this.options.subtitle.url.findIndex(function(g){return g.lang===f.options.subtitle.defaultSubtitle||g.name===f.options.subtitle.defaultSubtitle}):typeof this.options.subtitle.defaultSubtitle=="number"&&(this.options.subtitle.index=this.options.subtitle.defaultSubtitle)),(this.options.subtitle.index===-1||!this.options.subtitle.index||this.options.subtitle.index>this.options.subtitle.url.length-1)&&(this.options.subtitle.index=this.options.subtitle.url.findIndex(function(g){return g.lang===f.options.lang})),this.options.subtitle.index===-1&&(this.options.subtitle.index=this.options.subtitle.url.length-1)),this.template=new Ql({container:this.container,options:this.options,index:Gl,tran:this.tran}),this.video=this.template.video,this.bar=new zp(this.template),this.bezel=new $p(this.template.bezel),this.fullScreen=new Cp(this),this.controller=new Qp(this),this.options.danmaku&&(this.danmaku=new bp({player:this,container:this.template.danmaku,opacity:this.user.get("opacity"),callback:function(){setTimeout(function(){f.template.danmakuLoading.style.display="none",f.options.autoplay&&f.play()},0)},error:function(g){f.notice(g)},apiBackend:this.options.apiBackend,borderColor:this.options.theme,height:this.arrow?24:30,time:function(){return f.video.currentTime},unlimited:this.user.get("unlimited"),api:{id:this.options.danmaku.id,address:this.options.danmaku.api,token:this.options.danmaku.token,maximum:this.options.danmaku.maximum,addition:this.options.danmaku.addition,user:this.options.danmaku.user,speedRate:this.options.danmaku.speedRate},events:this.events,tran:function(g){return f.tran(g)}}),this.comment=new Jp(this)),this.setting=new Xp(this),this.plugins={},this.docClickFun=function(){f.focus=!1},this.containerClickFun=function(){f.focus=!0},document.addEventListener("click",this.docClickFun,!0),this.container.addEventListener("click",this.containerClickFun,!0),this.paused=!0,this.timer=new Pp(this),this.hotkey=new nf(this),this.contextmenu=new of(this),this.initVideo(this.video,this.quality&&this.quality.type||this.options.video.type),this.infoPanel=new df(this),!this.danmaku&&this.options.autoplay&&this.play(),Gl++,rr.push(this)}var d,A,l;return d=s,A=[{key:"seek",value:function(c){c=Math.max(c,0),this.video.duration&&(c=Math.min(c,this.video.duration)),this.video.currentTime<c?this.notice("".concat(this.tran("ff").replace("%s",(c-this.video.currentTime).toFixed(0)))):this.video.currentTime>c&&this.notice("".concat(this.tran("rew").replace("%s",(this.video.currentTime-c).toFixed(0)))),this.video.currentTime=c,this.danmaku&&this.danmaku.seek(),this.bar.set("played",c/this.video.duration,"width"),this.template.ptime.innerHTML=V.secondToTime(c)}},{key:"play",value:function(c){var f=this;if(this.paused=!1,this.video.paused&&!V.isMobile&&this.bezel.switch(Ut.play),this.template.playButton.innerHTML=Ut.pause,this.template.mobilePlayButton.innerHTML=Ut.pause,c||H.resolve(this.video.play()).catch(function(){f.pause()}).then(function(){}),this.timer.enable("loading"),this.container.classList.remove("dplayer-paused"),this.container.classList.add("dplayer-playing"),this.danmaku&&this.danmaku.play(),this.options.mutex)for(var g=0;g<rr.length;g++)this!==rr[g]&&rr[g].pause()}},{key:"pause",value:function(c){this.paused=!0,this.container.classList.remove("dplayer-loading"),this.video.paused||V.isMobile||this.bezel.switch(Ut.pause),this.template.playButton.innerHTML=Ut.play,this.template.mobilePlayButton.innerHTML=Ut.play,c||this.video.pause(),this.timer.disable("loading"),this.container.classList.remove("dplayer-playing"),this.container.classList.add("dplayer-paused"),this.danmaku&&this.danmaku.pause()}},{key:"switchVolumeIcon",value:function(){this.volume()>=.95?this.template.volumeIcon.innerHTML=Ut.volumeUp:this.volume()>0?this.template.volumeIcon.innerHTML=Ut.volumeDown:this.template.volumeIcon.innerHTML=Ut.volumeOff}},{key:"volume",value:function(c,f,g){if(c=parseFloat(c),!isNaN(c)){c=Math.max(c,0),c=Math.min(c,1),this.bar.set("volume",c,"width");var w="".concat((100*c).toFixed(0),"%");this.template.volumeBarWrapWrap.dataset.balloon=w,f||this.user.set("volume",c),g||this.notice("".concat(this.tran("volume")," ").concat((100*c).toFixed(0),"%"),void 0,void 0,"volume"),this.video.volume=c,this.video.muted&&(this.video.muted=!1),this.switchVolumeIcon()}return this.video.volume}},{key:"toggle",value:function(){this.video.paused?this.play():this.pause()}},{key:"on",value:function(c,f){this.events.on(c,f)}},{key:"switchVideo",value:function(c,f){this.pause(),this.video.poster=c.pic?c.pic:"",this.video.src=c.url,this.initMSE(this.video,c.type||"auto"),f&&(this.template.danmakuLoading.style.display="block",this.bar.set("played",0,"width"),this.bar.set("loaded",0,"width"),this.template.ptime.innerHTML="00:00",this.template.danmaku.innerHTML="",this.danmaku&&this.danmaku.reload({id:f.id,address:f.api,token:f.token,maximum:f.maximum,addition:f.addition,user:f.user}))}},{key:"initMSE",value:function(c,f){var g=this;if(this.type=f,this.options.video.customType&&this.options.video.customType[f])Object.prototype.toString.call(this.options.video.customType[f])==="[object Function]"?this.options.video.customType[f](this.video,this):console.error("Illegal customType: ".concat(f));else switch(this.type==="auto"&&(/m3u8(#|\?|$)/i.exec(c.src)?this.type="hls":/.flv(#|\?|$)/i.exec(c.src)?this.type="flv":/.mpd(#|\?|$)/i.exec(c.src)?this.type="dash":this.type="normal"),this.type==="hls"&&(c.canPlayType("application/x-mpegURL")||c.canPlayType("application/vnd.apple.mpegURL"))&&(this.type="normal"),this.type){case"hls":if(window.Hls)if(window.Hls.isSupported()){var w=this.options.pluginOptions.hls,x=new window.Hls(w);this.plugins.hls=x,x.loadSource(c.src),x.attachMedia(c),this.events.on("destroy",function(){x.destroy(),delete g.plugins.hls})}else this.notice("Error: Hls is not supported.");else this.notice("Error: Can't find Hls.");break;case"flv":if(window.flvjs)if(window.flvjs.isSupported()){var S=window.flvjs.createPlayer(Object.assign(this.options.pluginOptions.flv.mediaDataSource||{},{type:"flv",url:c.src}),this.options.pluginOptions.flv.config);this.plugins.flvjs=S,S.attachMediaElement(c),S.load(),this.events.on("destroy",function(){S.unload(),S.detachMediaElement(),S.destroy(),delete g.plugins.flvjs})}else this.notice("Error: flvjs is not supported.");else this.notice("Error: Can't find flvjs.");break;case"dash":if(window.dashjs){var L=window.dashjs.MediaPlayer().create().initialize(c,c.src,!1),G=this.options.pluginOptions.dash;L.updateSettings(G),this.plugins.dash=L,this.events.on("destroy",function(){window.dashjs.MediaPlayer().reset(),delete g.plugins.dash})}else this.notice("Error: Can't find dashjs.");break;case"webtorrent":if(window.WebTorrent)if(window.WebTorrent.WEBRTC_SUPPORT){this.container.classList.add("dplayer-loading");var re=this.options.pluginOptions.webtorrent,se=new window.WebTorrent(re);this.plugins.webtorrent=se;var ie=c.src;c.src="",c.preload="metadata",c.addEventListener("durationchange",function(){return g.container.classList.remove("dplayer-loading")},{once:!0}),se.add(ie,function(ee){ee.files.find(function(he){return he.name.endsWith(".mp4")}).renderTo(g.video,{autoplay:g.options.autoplay,controls:!1})}),this.events.on("destroy",function(){se.remove(ie),se.destroy(),delete g.plugins.webtorrent})}else this.notice("Error: Webtorrent is not supported.");else this.notice("Error: Can't find Webtorrent.")}}},{key:"initVideo",value:function(c,f){var g=this;this.initMSE(c,f),this.on("durationchange",function(){c.duration!==1&&c.duration!==1/0&&(g.template.dtime.innerHTML=V.secondToTime(c.duration))}),this.on("progress",function(){var S=c.buffered.length?c.buffered.end(c.buffered.length-1)/c.duration:0;g.bar.set("loaded",S,"width")}),this.on("error",function(){g.video.error&&g.tran&&g.notice&&g.type!=="webtorrent"&&g.notice(g.tran("video-failed"))}),this.on("ended",function(){g.bar.set("played",1,"width"),g.setting.loop?(g.seek(0),g.play()):g.pause(),g.danmaku&&(g.danmaku.danIndex=0)}),this.on("play",function(){g.paused&&g.play(!0)}),this.on("pause",function(){g.paused||g.pause(!0)}),this.on("timeupdate",function(){g.bar.set("played",g.video.currentTime/g.video.duration,"width");var S=V.secondToTime(g.video.currentTime);g.template.ptime.innerHTML!==S&&(g.template.ptime.innerHTML=S)});for(var w=function(S){c.addEventListener(g.events.videoEvents[S],function(L){g.events.trigger(g.events.videoEvents[S],L)})},x=0;x<this.events.videoEvents.length;x++)w(x);this.volume(this.user.get("volume"),!0,!0),this.options.subtitle&&(this.subtitle=new _p(this.template.subtitle,this.video,this.options.subtitle,this.events),Array.isArray(this.options.subtitle.url)&&(this.subtitles=new Mp(this)),this.user.get("subtitle")||this.subtitle.hide())}},{key:"switchQuality",value:function(c){var f=this;if(c=typeof c=="string"?parseInt(c):c,this.qualityIndex!==c&&!this.switchingQuality){this.prevIndex=this.qualityIndex,this.qualityIndex=c,this.switchingQuality=!0,this.quality=this.options.video.quality[c],this.template.qualityButton.innerHTML=this.quality.name;var g=this.video.paused;this.video.pause();var w=uf()({current:!1,pic:null,screenshot:this.options.screenshot,preload:"auto",url:this.quality.url,subtitle:this.options.subtitle}),x=new DOMParser().parseFromString(w,"text/html").body.firstChild;this.template.videoWrap.insertBefore(x,this.template.videoWrap.getElementsByTagName("div")[0]),this.prevVideo=this.video,this.video=x,this.initVideo(this.video,this.quality.type||this.options.video.type),this.seek(this.prevVideo.currentTime),this.notice("".concat(this.tran("switching-quality").replace("%q",this.quality.name)),-1,void 0,"switch-quality"),this.events.trigger("quality_start",this.quality),this.on("canplay",function(){if(f.prevVideo){if(f.video.currentTime!==f.prevVideo.currentTime)return void f.seek(f.prevVideo.currentTime);f.template.videoWrap.removeChild(f.prevVideo),f.video.classList.add("dplayer-video-current"),g||f.video.play(),f.prevVideo=null,f.notice("".concat(f.tran("switched-quality").replace("%q",f.quality.name)),void 0,void 0,"switch-quality"),f.switchingQuality=!1,f.events.trigger("quality_end")}}),this.on("error",function(){f.video.error&&f.prevVideo&&(f.template.videoWrap.removeChild(f.video),f.video=f.prevVideo,g||f.video.play(),f.qualityIndex=f.prevIndex,f.quality=f.options.video.quality[f.qualityIndex],f.noticeTime=setTimeout(function(){f.template.notice.style.opacity=0,f.events.trigger("notice_hide")},3e3),f.prevVideo=null,f.switchingQuality=!1)})}}},{key:"notice",value:function(c){var f,g,w,x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2e3,S=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.8,L=arguments.length>3?arguments[3]:void 0;if(L&&((f=document.getElementById("dplayer-notice-".concat(L)))&&(f.innerHTML=c),this.noticeList[L]&&(clearTimeout(this.noticeList[L]),this.noticeList[L]=null)),!f){var G=Ql.NewNotice(c,S,L);this.template.noticeList.appendChild(G),f=G}this.events.trigger("notice_show",f),x>0&&(this.noticeList[L]=setTimeout((g=f,w=this,function(){g.addEventListener("animationend",function(){w.template.noticeList.removeChild(g)}),g.classList.add("remove-notice"),w.events.trigger("notice_hide"),w.noticeList[L]=null}),x))}},{key:"resize",value:function(){this.danmaku&&this.danmaku.resize(),this.controller.thumbnails&&this.controller.thumbnails.resize(160,this.video.videoHeight/this.video.videoWidth*160,this.template.barWrap.offsetWidth),this.events.trigger("resize")}},{key:"speed",value:function(c){this.video.playbackRate=c}},{key:"destroy",value:function(){rr.splice(rr.indexOf(this),1),this.pause(),document.removeEventListener("click",this.docClickFun,!0),this.container.removeEventListener("click",this.containerClickFun,!0),this.fullScreen.destroy(),this.hotkey.destroy(),this.contextmenu.destroy(),this.controller.destroy(),this.timer.destroy(),this.video.src="",this.container.innerHTML="",this.events.trigger("destroy")}}],l=[{key:"version",get:function(){return"1.27.1"}}],A&&Xl(d.prototype,A),l&&Xl(d,l),Object.defineProperty(d,"prototype",{writable:!1}),s}();const hf=ff;console.log(`
`.concat(" %c DPlayer v","1.27.1"," ").concat("v1.27.0-12-g4f61091"," %c https://dplayer.diygod.dev ",`
`,`
`),"color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;");const mf=hf})(),a.default})())})(fu);var pb=fu.exports;const fb=$c(pb),hb=Ir({props:{width:{type:Number,default:()=>960},height:{type:Number,default:()=>540}},setup(e,t){return{player:vr(null)}},computed:{video(){return this.player?.video??null}},methods:{setVideo(e){this.video.src=e},readDanmaku(e){const{danmaku:t}=this.player;t.dan=e.sort((n,r)=>n.time-r.time),t.seek()},seekDanmaku(){this.player.danmaku.seek()},play(){this.player.play()},pause(){this.player.pause()},playpause(){this.player.toggle()},volume(e){return this.player.volume(e)},relativeVolume(e){return this.player.volume(this.video.volume+e)},relativeSeek(e){this.player.seek(this.video.currentTime+e)},speed(e){const{player:t,video:n}=this;e=+e,n.playbackRate=e,t.notice(`倍速播放中 (${e})`,e===1?1:0,void 0,"speed")}},mounted(){const e=this,{container:t}=e.$refs,n=e.player=new fb({container:t,volume:1,hotkey:!1,screenshot:!1,video:{},danmaku:{api:"api/",id:"0"},apiBackend:{send(r){r.error()},read(r){r.success([])}}});e.video.volume=1,e.video.crossOrigin=null,n.danmaku.opacity(.35)},beforeUnmount(){this.player.destroy(),this.player=null},render(){const e=this,{width:t,height:n}=e;return R("div",{class:"player-container player-force-show-controls player-hide-layers",style:{"--dplayer-width":t===0?"100%":t+"px","--dplayer-height":n+"px"}},[R("div",{ref:"container",class:"dplayer"})])}}),{isArray:vo}=Array;function*mb(e,t=0){const n={__proto__:null,1:"right",5:"top",4:"bottom"};for(const r of e){let i=r.p.split(",");yield{time:+i[0]+t,type:n[parseInt(i[1])]??0,color:parseInt(i[2]),author:i[3],text:r.m}}}function*yb(e,t){const n=/^\[([^\[\]]+)\]/;for(const r of e){const i=String(r.author).match(n);t(i?.[1],r)&&(yield r)}}function*Ab(e,t=3.5){const{trunc:n}=Math,r=[];for(const i of e){const a=n(i.time);(r[a]??=[]).push(i)}for(const i of r)if(i!=null)if(i.length<t)yield*i;else{let a=0,o=n(i.length/t)||1;for(;a<i.length;a+=o)yield i[a]}}const gb=e=>{let t=e.title||(e.file?.name??"").replace(/\.[^.]+$/,"");const n=tl({name:t,list:e.list,index:e.index,loading:!1}),r=async()=>{try{n.loading=!0;const o=await Xg(n.name,e.file);vo(o.matches)&&(e.list=n.list=o.matches),n.index=o.isMatched?0:-1}catch(o){throw on.error(o.message),o}finally{n.loading=!1}};let i,a;Dt.confirm({title:"将视频关联到弹幕库",width:600,loading:!0,closable:!0,render(){return R(zo,{padding:0,"dis-hover":!0},{title:()=>R(Uc,{modelValue:n.name,"onUpdate:modelValue"(o){n.name=o}},{append:()=>R(kt,{type:"primary",loading:n.loading,onClick:r},()=>"获取")}),default:()=>R("div",{class:"ivu-scroll-wrapper",style:"touch-action: none; height: 60vh"},[R("div",{class:"ivu-scroll-container",style:"height: 100%"},[R("div",{class:"ivu-scroll-content"},[R(va,{onOnClick(o){n.index=o}},()=>[R(Rt,{name:-2,selected:n.index===-2},{default:()=>R("div",{class:"ivu-input-wrapper ivu-input-wrapper-default ivu-input-type",style:"width: 300px"},[R("input",{ref(o){i=o},type:"text",class:"ivu-input ivu-input-default",placeholder:"手动载入弹幕",onPaste(o){n.index=-2}})]),extra:()=>R("div",{class:"ivu-input-wrapper ivu-input-wrapper-default ivu-input-type",style:"width: 100px"},[R("input",{ref(o){a=o},type:"text",class:"ivu-input ivu-input-default",placeholder:"offset"})])}),Array.from(n.list,(o,u)=>R(Rt,{name:u,title:`[${jg[o.type]??o.type}]${o.animeTitle}`,label:o.episodeTitle,selected:u===n.index},{extra:()=>R("a",{href:uu(o.episodeId),target:"_blank"},["详细"])}))])])])])})},async onOk(){try{const{index:o}=n;let u;if(o===-2){const y=JSON.parse(i.value);vo(y)?u=y:vo(y.comments)&&(u=y.comments)}else if(o>=0){const y=n.list[o];y!=null&&(u=await Zg(y.episodeId))}if(u==null){on.warning("未选中");return}e.index=o,e.loadDanmaku(u,+a.value||0)}catch(o){throw on.error("弹幕加载失败"),o}finally{Dt.remove()}}})},bb=Ir({name:"ddplay-api",props:{file:{type:Blob},title:{type:String,default:""}},setup(e){const t=ot(),n=t.proxy;ta(()=>[e.file,e.title],(i,a)=>{n.list=[],n.index=-1,n.$emit("danmaku",n.danmaku=[]),r.value=""});const r=vr("");return{list:[],index:-1,danmaku:[],platforms:r}},methods:{loadDanmaku(e,t=0){const n=this,r={"!":0};let i=mb(e,t);i=yb(i,(u,y)=>(u??="!",u==="Gamer"&&(u="#"+u),r[u]=+(r[u]??0)+1,u[0]!=="#")),i=Ab(i);const a=Array.from(i),o=Object.entries(r).sort((u,y)=>y[1]-u[1]).map(([u,y])=>`${u}[${y}]`).join(",");n.platforms=`(${o})`,n.$emit("danmaku",n.danmaku=a),on.success(`加载了 ${a.length} 条弹幕 ${n.platforms}`)},handleMatch(){if(typeof wl!="function"){on.error("缺少 GM_xmlhttpRequest");return}this.title||this.file!=null||on.warning("未选择文件"),gb(this)}},render(e,t){const n=this;return R(Rt,{title:`弹弹Play API[${n.danmaku.length}] ${n.platforms}`},t[225]??={extra:()=>R(ba,null,t[226]??=()=>[R(kt,{onClick:n.handleMatch},t[227]??=()=>"加载弹幕")])})}}),Ji="Media Player",vb=Ir({name:Ji,setup(e){const t={size:1,visiblePause:!1};try{Object.assign(t,JSON.parse(localStorage.getItem("player-options")))}catch{}const n=new AbortController;return{aborter:n,playerOptions:t,globalKeydownMap:new Map,sizes:["960*0","960*540","1280*720"],relativeSeeks:[-95,-10,-5,{value:-1/30,slot:"-1帧"},{value:1/30,slot:"1帧"},5,10,85],imageType:"image/png",viewer:null,keybord:new ob(document,n.signal),playList:vr(null),player:vr(null)}},data(){const{sizes:e,playerOptions:t}=this;return{size:e[t.size]??e[1],list:[],file:null,title:""}},watch:{title(e){document.title=(e?e+" - ":"")+Ji}},methods:{options(){const e=this,{sizes:t}=e,n=tl(e.playerOptions);Dt.confirm({title:"设置",width:600,render(){return R("div",null,[R(va,null,[R(Rt,{title:"默认尺寸"},{extra:()=>R(Ps,{type:"button",modelValue:n.size,"onUpdate:modelValue"(r){n.size=r}},()=>Array.from(t,(r,i)=>R(qs,{label:i},()=>r)))}),R(Rt,{title:"页面不可见时暂停"},{extra:()=>R(Z0,{modelValue:n.visiblePause,"onUpdate:modelValue"(r){n.visiblePause=r}})}),R(Rt,{title:"油猴脚本"},{extra:()=>R(kt,{type:"button",onClick(){const r=lb(),i=document.createElement("a");i.href=URL.createObjectURL(new Blob([r],{type:"text/plain"})),i.target="_blank",i.click()}},()=>"GM_fetch")}),R(Rt,{title:"web+player: 协议处理器"},{extra:()=>R(kt,{type:"button",onClick(){const r=new URL(location.pathname,location.href).href;navigator.registerProtocolHandler("web+player",`${r}#.=%s`)}},()=>"注册")})])])},onOk(){localStorage.setItem("player-options",JSON.stringify(e.playerOptions))}})},handleChange(e){this.list=e},async loadVideoAndPlay(e,t){e instanceof Blob?await this.loadVideoFromFile(e):await this.loadVideoFromUrl(e,t),this.player.play()},loadVideoFromUrl(e,t){const n=this,{player:r}=n,{video:i}=r;if(e=String(e),e.startsWith("web+player:")){const u=new URL(e).searchParams;e=u.get("url"),t=u.get("title")}t??="",URL.revokeObjectURL(i.src),i.src=e,n.title=t,n.file=null,on.info("加载: "+t);const{mediaSession:a}=navigator;a!=null&&(a.metadata=new MediaMetadata({title:t}));let o=ib(i,"canplay");return/^https?:/.test(e)&&ua!=null&&(o=o.catch(n.loadVideoBackupGmxhr)),n.canplay=o,o},loadVideoFromFile(e){const t=this;let n=URL.createObjectURL(e),r=(e.name??"").replace(/\.[^.]+$/,"");const i=t.loadVideoFromUrl(n,r);return t.file=e,i},loadVideoBackupGmxhr(e){if(ua==null)return;const{title:t,player:n}=this,r=n.player,i=e?.target??n.video,{src:a,error:o}=i;o!=null&&console.warn(o,o.code,o.message),Dt.confirm({title:"视频加载失败",content:a+"<br>要使用 GM_xmlhttpRequest 吗？",onOk(){ua({url:a,responseType:"blob",onload(u){vm.loadVideoFromUrl(URL.createObjectURL(u.response),t).then(()=>{r.notice("使用 GM_xmlhttpRequest 加载成功",void 0,void 0,"gmxhr")})},onerror({error:u}){r.notice("使用 GM_xmlhttpRequest 加载失败: "+u,void 0,void 0,"gmxhr")},onprogress({loaded:u,total:y,lengthComputable:p}){r.notice(p?`${bo(u)}/${bo(y)}(${(100*u/y).toFixed(2)}%)`:`${bo(u)}/unknow`,0,void 0,"gmxhr")}})}})},prev(){this.playList.prev()},next(){this.playList.next()},handleDanmaku(e){this.player.readDanmaku(e)},relativeSeek(e){this.player.relativeSeek(e)},relativeVolume(e){this.player.relativeVolume(e)},playpause(){this.player.playpause()},captureImage(){const{video:e}=this.player;if(e.videoWidth===0||e.videoHeight===0){on.warning("没有视频");return}nb(e,this.imageType).then(t=>{const{image:n}=this.$refs;URL.revokeObjectURL(n.src),n.src=URL.createObjectURL(t),n.dataset.filename=tb(e.currentTime,"-")+".png",on.info("截图成功")},t=>{throw on.error("截图失败"),t})},saveImage(){const{image:e}=this.$refs,{src:t}=e;t&&rb(t,e.dataset.filename)},showImage(){const e=this,t=new ou(e.$refs.image,{hidden(){t.destroy(),e.viewer=null}});e.viewer=t,t.show()},handlePopstate(e){let{hash:t}=location;if(!t)return;t=t.slice(1);let r=new URLSearchParams(t).get(".")??`web+player:?${t}`;this.$refs.input.currentValue=r,this.loadVideoFromUrl(r)}},mounted(){const e=this,{keybord:t}=e,{signal:n}=e.aborter;si(e.handlePopstate),t.set(" ",null,e.playpause),t.set("ArrowUp",()=>e.relativeVolume(.1)),t.set("ArrowDown",()=>e.relativeVolume(-.1)),t.set("PageUp",e.prev),t.set("PageDown",e.next),t.set("ArrowLeft",null,()=>e.relativeSeek(-5)),t.set("ArrowRight",(a,o)=>{o===1&&e.player.speed(3)},(a,o)=>{if(o>0){e.player.speed(1);return}e.relativeSeek(5)}),window.addEventListener("popstate",e.handlePopstate,{capture:!0,signal:n});let r=!1;document.addEventListener("visibilitychange",a=>{const{visiblePause:o}=e.playerOptions.visiblePause;switch(a.target.visibilityState){case"visible":o&&r&&e.player.play(),r=!1,e.player.seekDanmaku();break;case"hidden":r=!(e.player.video.paused??!0),o&&r&&e.player.pause();break}},{signal:n}),window.addEventListener("beforeunload",a=>{const o=e.player.video.duration;o===o&&a.preventDefault()},{capture:!0,signal:n});const{mediaSession:i}=navigator;i!=null&&(i.setActionHandler("seekbackward",()=>e.relativeSeek(-5)),i.setActionHandler("seekforward",()=>e.relativeSeek(5)),i.setActionHandler("previoustrack",e.prev),i.setActionHandler("nexttrack",e.next),n.addEventListener("abort",a=>{i.setActionHandler("seekbackward",null),i.setActionHandler("seekforward",null),i.setActionHandler("previoustrack",null),i.setActionHandler("nexttrack",null)})),document.title=Ji},beforeUnmount(){this.aborter.abort(),document.title=Ji},render(e,t,n,r,i,a){const o=this,u=o.size.split("*");return[R("div",{class:"container"},[R(jc,{gutter:5},t[297]??=()=>[R(No,{span:12},t[298]??=()=>[R(Uc,{ref:"input",search:!0,enterButton:"提交",onOnSearch:o.loadVideoFromUrl}),R(cb,{style:"margin-top: 6px",ref:"drop",global:!0,accept:"audio/*,video/*",onChange:o.handleChange})]),R(No,{span:12},t[313]??=()=>[R(zo,{padding:0},t[314]??=()=>[R(va,{style:"padding: 0px"},t[315]??=()=>[R(ub,{ref:"playList",list:o.list,onPlay:o.loadVideoAndPlay}),R(Rt,{title:"尺寸"},t[321]??={extra:()=>R(Ps,{type:"button",modelValue:o.size,"onUpdate:modelValue"(y){o.size=y}},t[326]??=()=>Array.from(o.sizes,y=>R(qs,{label:y},()=>y)))}),R(Rt,{title:"快进快退"},t[328]??={extra:()=>R(ba,null,t[329]??=()=>Array.from(o.relativeSeeks,y=>{const{value:p,slot:m}=typeof y=="number"?{value:y,slot:String(y)}:y;return R(kt,{onClick(){o.relativeSeek(p)}},()=>m)}))}),R(bb,{ref:"danmaku",file:o.file,title:o.title,onDanmaku:o.handleDanmaku}),R(Rt,{title:"　"},t[341]??={extra:()=>R(ba,null,()=>[R(kt,{onClick:o.options},()=>"设置"),R(kt,{onClick:o.captureImage},()=>"截图"),R(kt,{onClick:o.saveImage},()=>"保存截图")])})])])])])]),R(Ws,{style:"margin: 10px 0"}),R(hb,{ref:"player",width:+u[0],height:+u[1]}),R(Ws,{style:"margin: 10px 0"}),R(zo,{style:"margin: 10px; width: 234px"},t[356]??=()=>R("img",{ref:"image",style:"width: 100%",onClick:o.showImage}))]}}),wb=Sr(vb);ab("external:tampermonkey:grant").then(e=>{const t=e?.detail;t!=null&&(Wg(t.GM_xmlhttpRequest),Hg(t.GM_fetch));const n=wb.mount("#app");window._vm=n});
