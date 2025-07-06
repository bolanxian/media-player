import{createElementBlock as Z,openBlock as $,normalizeStyle as Ie,normalizeClass as Q,getCurrentInstance as Xe,Fragment as Kt,withDirectives as Xt,createCommentVNode as ge,createVNode as V,createBaseVNode as G,renderSlot as Ae,toDisplayString as He,withCtx as Me,Transition as wn,withKeys as Tt,createTextVNode as zt,nextTick as Ct,vShow as dn,createBlock as Gt,Teleport as Oa,h as Ue,resolveComponent as kt,mergeProps as Do,resolveDynamicComponent as Zl,withModifiers as sn,renderList as wa,TransitionGroup as es,createApp as Lo,off as Et,on as De,resolveDirective as ts,call as Pr,bind as zo,getOwnPropertyDescriptor as Nt,bindCall as dt,nextTick$1 as ns,doc as Dt,noop as hi,$string as Vr,fromEntries as No,fetch as Oo,isPlainObject as as,$array as Fr,gmxhr as Yn,defineComponent as xn,onMounted as rs,watch as Mo,empty as er,shallowRef as pn,onBeforeUnmount as Ro,shallowReactive as Ir,onLoad as is,mediaSession as tr,download as nr,captureVideoToImage as os,formatTime as ls,waitEvent as fi,setTitle as Ai,canHover as ss,setActionHandler as an,formatSize as ar,$number as ds}from"./index-oGk0_lIO.js";const Fe=typeof window<"u",je=(e,t)=>{const n=e.__vccOpts||e;for(const[a,i]of t)n[a]=i;return n},mi="ivu-icon",ps={name:"Icon",props:{type:{type:String,default:""},size:[Number,String],color:String,custom:{type:String,default:""}},computed:{classes(){return[`${mi}`,{[`${mi}-${this.type}`]:this.type!=="",[`${this.custom}`]:this.custom!==""}]},styles(){let e={};return this.size&&(e["font-size"]=`${this.size}px`),this.color&&(e.color=this.color),e}}};function cs(e,t,n,a,i,o){return $(),Z("i",{class:Q(o.classes),style:Ie(o.styles)},null,6)}const _t=je(ps,[["render",cs]]);function Te(e,t){for(let n=0;n<t.length;n++)if(e===t[n])return!0;return!1}let rr;function us(e){if(Fe&&rr===void 0){const t=document.createElement("div");t.style.width="100%",t.style.height="200px";const n=document.createElement("div"),a=n.style;a.position="absolute",a.top=0,a.left=0,a.pointerEvents="none",a.visibility="hidden",a.width="200px",a.height="150px",a.overflow="hidden",n.appendChild(t),document.body.appendChild(n);const i=t.offsetWidth;n.style.overflow="scroll";let o=t.offsetWidth;i===o&&(o=n.clientWidth),document.body.removeChild(n),rr=i-o}return rr}const hs=/([\:\-\_]+(.))/g,fs=/^moz([A-Z])/;function As(e){return e.replace(hs,function(t,n,a,i){return i?a.toUpperCase():a}).replace(fs,"Moz$1")}function ms(e,t){if(Fe){if(!e||!t)return null;t=As(t),t==="float"&&(t="cssFloat");try{const n=document.defaultView.getComputedStyle(e,"");return e.style[t]||n?n[t]:null}catch{return e.style[t]}}}function ys(e){return{"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regExp","[object Undefined]":"undefined","[object Null]":"null","[object Object]":"object"}[Object.prototype.toString.call(e)]}function La(e){const t=ys(e);let n;if(t==="array")n=[];else if(t==="object")n={};else return e;if(t==="array")for(let a=0;a<e.length;a++)n.push(La(e[a]));else if(t==="object")for(let a in e)n[a]=La(e[a]);return n}function Sr(e,t,n){typeof t=="string"?n=[t]:n=t;let a=e.$parent,i=a.$options.name;for(;a&&(!i||n.indexOf(i)<0);)a=a.$parent,a&&(i=a.$options.name);return a}function Wr(e=32){const t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",n=t.length;let a="";for(let i=0;i<e;i++)a+=t.charAt(Math.floor(Math.random()*n));return a}const _r={props:{to:{type:[Object,String]},replace:{type:Boolean,default:!1},target:{type:String,validator(e){return Te(e,["_blank","_self","_parent","_top"])},default:"_self"},append:{type:Boolean,required:!1,default:!1}},computed:{linkUrl(){if(typeof this.to!=="string")return null;if(this.to.includes("//"))return this.to;const t=this.$router;if(t){const n=this.$route,a=t.resolve(this.to,n,this.append);return a?a.href:this.to}return this.to}},methods:{handleOpenTo(){if(!Fe)return;const e=this.$router;let t=this.to;if(e){const n=this.$route,a=e.resolve(this.to,n,this.append);t=a?a.href:this.to}typeof this.to!="string"&&window.open(t)},handleClick(e=!1){const t=this.$router;Fe&&(e?this.handleOpenTo():t?typeof this.to=="string"&&this.to.includes("//")?window.location.href=this.to:this.replace?this.$router.replace(this.to,()=>{}):this.$router.push(this.to,()=>{}):window.location.href=this.to)},handleCheckClick(e,t=!1){if(this.to){if(this.target==="_blank")return this.handleOpenTo(),!1;e.preventDefault(),this.handleClick(t)}}}};var gs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Qr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xa={exports:{}};/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */var bs=xa.exports,yi;function vs(){return yi||(yi=1,function(e,t){(function(n,a){e.exports=a()})(bs,function(){var n=typeof window<"u"&&typeof document<"u"&&typeof navigator<"u",a=function(){for(var A=["Edge","Trident","Firefox"],x=0;x<A.length;x+=1)if(n&&navigator.userAgent.indexOf(A[x])>=0)return 1;return 0}();function i(A){var x=!1;return function(){x||(x=!0,window.Promise.resolve().then(function(){x=!1,A()}))}}function o(A){var x=!1;return function(){x||(x=!0,setTimeout(function(){x=!1,A()},a))}}var l=n&&window.Promise,f=l?i:o;function p(A){var x={};return A&&x.toString.call(A)==="[object Function]"}function m(A,x){if(A.nodeType!==1)return[];var B=A.ownerDocument.defaultView,D=B.getComputedStyle(A,null);return x?D[x]:D}function y(A){return A.nodeName==="HTML"?A:A.parentNode||A.host}function g(A){if(!A)return document.body;switch(A.nodeName){case"HTML":case"BODY":return A.ownerDocument.body;case"#document":return A.body}var x=m(A),B=x.overflow,D=x.overflowX,q=x.overflowY;return/(auto|scroll|overlay)/.test(B+q+D)?A:g(y(A))}function d(A){return A&&A.referenceNode?A.referenceNode:A}var C=n&&!!(window.MSInputMethodContext&&document.documentMode),k=n&&/MSIE 10/.test(navigator.userAgent);function b(A){return A===11?C:A===10?k:C||k}function E(A){if(!A)return document.documentElement;for(var x=b(10)?document.body:null,B=A.offsetParent||null;B===x&&A.nextElementSibling;)B=(A=A.nextElementSibling).offsetParent;var D=B&&B.nodeName;return!D||D==="BODY"||D==="HTML"?A?A.ownerDocument.documentElement:document.documentElement:["TH","TD","TABLE"].indexOf(B.nodeName)!==-1&&m(B,"position")==="static"?E(B):B}function N(A){var x=A.nodeName;return x==="BODY"?!1:x==="HTML"||E(A.firstElementChild)===A}function T(A){return A.parentNode!==null?T(A.parentNode):A}function I(A,x){if(!A||!A.nodeType||!x||!x.nodeType)return document.documentElement;var B=A.compareDocumentPosition(x)&Node.DOCUMENT_POSITION_FOLLOWING,D=B?A:x,q=B?x:A,R=document.createRange();R.setStart(D,0),R.setEnd(q,0);var W=R.commonAncestorContainer;if(A!==W&&x!==W||D.contains(q))return N(W)?W:E(W);var j=T(A);return j.host?I(j.host,x):I(A,T(x).host)}function L(A){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"top",B=x==="top"?"scrollTop":"scrollLeft",D=A.nodeName;if(D==="BODY"||D==="HTML"){var q=A.ownerDocument.documentElement,R=A.ownerDocument.scrollingElement||q;return R[B]}return A[B]}function P(A,x){var B=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,D=L(x,"top"),q=L(x,"left"),R=B?-1:1;return A.top+=D*R,A.bottom+=D*R,A.left+=q*R,A.right+=q*R,A}function S(A,x){var B=x==="x"?"Left":"Top",D=B==="Left"?"Right":"Bottom";return parseFloat(A["border"+B+"Width"])+parseFloat(A["border"+D+"Width"])}function F(A,x,B,D){return Math.max(x["offset"+A],x["scroll"+A],B["client"+A],B["offset"+A],B["scroll"+A],b(10)?parseInt(B["offset"+A])+parseInt(D["margin"+(A==="Height"?"Top":"Left")])+parseInt(D["margin"+(A==="Height"?"Bottom":"Right")]):0)}function O(A){var x=A.body,B=A.documentElement,D=b(10)&&getComputedStyle(B);return{height:F("Height",x,B,D),width:F("Width",x,B,D)}}var H=function(A,x){if(!(A instanceof x))throw new TypeError("Cannot call a class as a function")},ae=function(){function A(x,B){for(var D=0;D<B.length;D++){var q=B[D];q.enumerable=q.enumerable||!1,q.configurable=!0,"value"in q&&(q.writable=!0),Object.defineProperty(x,q.key,q)}}return function(x,B,D){return B&&A(x.prototype,B),D&&A(x,D),x}}(),le=function(A,x,B){return x in A?Object.defineProperty(A,x,{value:B,enumerable:!0,configurable:!0,writable:!0}):A[x]=B,A},Y=Object.assign||function(A){for(var x=1;x<arguments.length;x++){var B=arguments[x];for(var D in B)Object.prototype.hasOwnProperty.call(B,D)&&(A[D]=B[D])}return A};function z(A){return Y({},A,{right:A.left+A.width,bottom:A.top+A.height})}function ee(A){var x={};try{if(b(10)){x=A.getBoundingClientRect();var B=L(A,"top"),D=L(A,"left");x.top+=B,x.left+=D,x.bottom+=B,x.right+=D}else x=A.getBoundingClientRect()}catch{}var q={left:x.left,top:x.top,width:x.right-x.left,height:x.bottom-x.top},R=A.nodeName==="HTML"?O(A.ownerDocument):{},W=R.width||A.clientWidth||q.width,j=R.height||A.clientHeight||q.height,K=A.offsetWidth-W,ne=A.offsetHeight-j;if(K||ne){var re=m(A);K-=S(re,"x"),ne-=S(re,"y"),q.width-=K,q.height-=ne}return z(q)}function ie(A,x){var B=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,D=b(10),q=x.nodeName==="HTML",R=ee(A),W=ee(x),j=g(A),K=m(x),ne=parseFloat(K.borderTopWidth),re=parseFloat(K.borderLeftWidth);B&&q&&(W.top=Math.max(W.top,0),W.left=Math.max(W.left,0));var te=z({top:R.top-W.top-ne,left:R.left-W.left-re,width:R.width,height:R.height});if(te.marginTop=0,te.marginLeft=0,!D&&q){var ue=parseFloat(K.marginTop),de=parseFloat(K.marginLeft);te.top-=ne-ue,te.bottom-=ne-ue,te.left-=re-de,te.right-=re-de,te.marginTop=ue,te.marginLeft=de}return(D&&!B?x.contains(j):x===j&&j.nodeName!=="BODY")&&(te=P(te,x)),te}function xe(A){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,B=A.ownerDocument.documentElement,D=ie(A,B),q=Math.max(B.clientWidth,window.innerWidth||0),R=Math.max(B.clientHeight,window.innerHeight||0),W=x?0:L(B),j=x?0:L(B,"left"),K={top:W-D.top+D.marginTop,left:j-D.left+D.marginLeft,width:q,height:R};return z(K)}function se(A){var x=A.nodeName;if(x==="BODY"||x==="HTML")return!1;if(m(A,"position")==="fixed")return!0;var B=y(A);return B?se(B):!1}function U(A){if(!A||!A.parentElement||b())return document.documentElement;for(var x=A.parentElement;x&&m(x,"transform")==="none";)x=x.parentElement;return x||document.documentElement}function ye(A,x,B,D){var q=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1,R={top:0,left:0},W=q?U(A):I(A,d(x));if(D==="viewport")R=xe(W,q);else{var j=void 0;D==="scrollParent"?(j=g(y(x)),j.nodeName==="BODY"&&(j=A.ownerDocument.documentElement)):D==="window"?j=A.ownerDocument.documentElement:j=D;var K=ie(j,W,q);if(j.nodeName==="HTML"&&!se(W)){var ne=O(A.ownerDocument),re=ne.height,te=ne.width;R.top+=K.top-K.marginTop,R.bottom=re+K.top,R.left+=K.left-K.marginLeft,R.right=te+K.left}else R=K}B=B||0;var ue=typeof B=="number";return R.left+=ue?B:B.left||0,R.top+=ue?B:B.top||0,R.right-=ue?B:B.right||0,R.bottom-=ue?B:B.bottom||0,R}function $e(A){var x=A.width,B=A.height;return x*B}function rt(A,x,B,D,q){var R=arguments.length>5&&arguments[5]!==void 0?arguments[5]:0;if(A.indexOf("auto")===-1)return A;var W=ye(B,D,R,q),j={top:{width:W.width,height:x.top-W.top},right:{width:W.right-x.right,height:W.height},bottom:{width:W.width,height:W.bottom-x.bottom},left:{width:x.left-W.left,height:W.height}},K=Object.keys(j).map(function(ue){return Y({key:ue},j[ue],{area:$e(j[ue])})}).sort(function(ue,de){return de.area-ue.area}),ne=K.filter(function(ue){var de=ue.width,he=ue.height;return de>=B.clientWidth&&he>=B.clientHeight}),re=ne.length>0?ne[0].key:K[0].key,te=A.split("-")[1];return re+(te?"-"+te:"")}function tt(A,x,B){var D=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,q=D?U(x):I(x,d(B));return ie(B,q,D)}function Bt(A){var x=A.ownerDocument.defaultView,B=x.getComputedStyle(A),D=parseFloat(B.marginTop||0)+parseFloat(B.marginBottom||0),q=parseFloat(B.marginLeft||0)+parseFloat(B.marginRight||0),R={width:A.offsetWidth+q,height:A.offsetHeight+D};return R}function nt(A){var x={left:"right",right:"left",bottom:"top",top:"bottom"};return A.replace(/left|right|bottom|top/g,function(B){return x[B]})}function _e(A,x,B){B=B.split("-")[0];var D=Bt(A),q={width:D.width,height:D.height},R=["right","left"].indexOf(B)!==-1,W=R?"top":"left",j=R?"left":"top",K=R?"height":"width",ne=R?"width":"height";return q[W]=x[W]+x[K]/2-D[K]/2,B===j?q[j]=x[j]-D[ne]:q[j]=x[nt(j)],q}function Ze(A,x){return Array.prototype.find?A.find(x):A.filter(x)[0]}function qe(A,x,B){if(Array.prototype.findIndex)return A.findIndex(function(q){return q[x]===B});var D=Ze(A,function(q){return q[x]===B});return A.indexOf(D)}function Le(A,x,B){var D=B===void 0?A:A.slice(0,qe(A,"name",B));return D.forEach(function(q){q.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var R=q.function||q.fn;q.enabled&&p(R)&&(x.offsets.popper=z(x.offsets.popper),x.offsets.reference=z(x.offsets.reference),x=R(x,q))}),x}function Ot(){if(!this.state.isDestroyed){var A={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};A.offsets.reference=tt(this.state,this.popper,this.reference,this.options.positionFixed),A.placement=rt(this.options.placement,A.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),A.originalPlacement=A.placement,A.positionFixed=this.options.positionFixed,A.offsets.popper=_e(this.popper,A.offsets.reference,A.placement),A.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",A=Le(this.modifiers,A),this.state.isCreated?this.options.onUpdate(A):(this.state.isCreated=!0,this.options.onCreate(A))}}function X(A,x){return A.some(function(B){var D=B.name,q=B.enabled;return q&&D===x})}function ce(A){for(var x=[!1,"ms","Webkit","Moz","O"],B=A.charAt(0).toUpperCase()+A.slice(1),D=0;D<x.length;D++){var q=x[D],R=q?""+q+B:A;if(typeof document.body.style[R]<"u")return R}return null}function Ce(){return this.state.isDestroyed=!0,X(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[ce("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function Ge(A){var x=A.ownerDocument;return x?x.defaultView:window}function it(A,x,B,D){var q=A.nodeName==="BODY",R=q?A.ownerDocument.defaultView:A;R.addEventListener(x,B,{passive:!0}),q||it(g(R.parentNode),x,B,D),D.push(R)}function Mt(A,x,B,D){B.updateBound=D,Ge(A).addEventListener("resize",B.updateBound,{passive:!0});var q=g(A);return it(q,"scroll",B.updateBound,B.scrollParents),B.scrollElement=q,B.eventsEnabled=!0,B}function Rt(){this.state.eventsEnabled||(this.state=Mt(this.reference,this.options,this.state,this.scheduleUpdate))}function Je(A,x){return Ge(A).removeEventListener("resize",x.updateBound),x.scrollParents.forEach(function(B){B.removeEventListener("scroll",x.updateBound)}),x.updateBound=null,x.scrollParents=[],x.scrollElement=null,x.eventsEnabled=!1,x}function be(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=Je(this.reference,this.state))}function Ye(A){return A!==""&&!isNaN(parseFloat(A))&&isFinite(A)}function pt(A,x){Object.keys(x).forEach(function(B){var D="";["width","height","top","right","bottom","left"].indexOf(B)!==-1&&Ye(x[B])&&(D="px"),A.style[B]=x[B]+D})}function ct(A,x){Object.keys(x).forEach(function(B){var D=x[B];D!==!1?A.setAttribute(B,x[B]):A.removeAttribute(B)})}function ut(A){return pt(A.instance.popper,A.styles),ct(A.instance.popper,A.attributes),A.arrowElement&&Object.keys(A.arrowStyles).length&&pt(A.arrowElement,A.arrowStyles),A}function qt(A,x,B,D,q){var R=tt(q,x,A,B.positionFixed),W=rt(B.placement,R,x,A,B.modifiers.flip.boundariesElement,B.modifiers.flip.padding);return x.setAttribute("x-placement",W),pt(x,{position:B.positionFixed?"fixed":"absolute"}),B}function Cn(A,x){var B=A.offsets,D=B.popper,q=B.reference,R=Math.round,W=Math.floor,j=function(Pt){return Pt},K=R(q.width),ne=R(D.width),re=["left","right"].indexOf(A.placement)!==-1,te=A.placement.indexOf("-")!==-1,ue=K%2===ne%2,de=K%2===1&&ne%2===1,he=x?re||te||ue?R:W:j,ze=x?R:j;return{left:he(de&&!te&&x?D.left-1:D.left),top:ze(D.top),bottom:ze(D.bottom),right:he(D.right)}}var Zt=n&&/Firefox/i.test(navigator.userAgent);function kn(A,x){var B=x.x,D=x.y,q=A.offsets.popper,R=Ze(A.instance.modifiers,function(Qt){return Qt.name==="applyStyle"}).gpuAcceleration;R!==void 0&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var W=R!==void 0?R:x.gpuAcceleration,j=E(A.instance.popper),K=ee(j),ne={position:q.position},re=Cn(A,window.devicePixelRatio<2||!Zt),te=B==="bottom"?"top":"bottom",ue=D==="right"?"left":"right",de=ce("transform"),he=void 0,ze=void 0;if(te==="bottom"?j.nodeName==="HTML"?ze=-j.clientHeight+re.bottom:ze=-K.height+re.bottom:ze=re.top,ue==="right"?j.nodeName==="HTML"?he=-j.clientWidth+re.right:he=-K.width+re.right:he=re.left,W&&de)ne[de]="translate3d("+he+"px, "+ze+"px, 0)",ne[te]=0,ne[ue]=0,ne.willChange="transform";else{var It=te==="bottom"?-1:1,Pt=ue==="right"?-1:1;ne[te]=ze*It,ne[ue]=he*Pt,ne.willChange=te+", "+ue}var lt={"x-placement":A.placement};return A.attributes=Y({},lt,A.attributes),A.styles=Y({},ne,A.styles),A.arrowStyles=Y({},A.offsets.arrow,A.arrowStyles),A}function un(A,x,B){var D=Ze(A,function(j){var K=j.name;return K===x}),q=!!D&&A.some(function(j){return j.name===B&&j.enabled&&j.order<D.order});if(!q){var R="`"+x+"`",W="`"+B+"`";console.warn(W+" modifier is required by "+R+" modifier in order to work, be sure to include it before "+R+"!")}return q}function Bn(A,x){var B;if(!un(A.instance.modifiers,"arrow","keepTogether"))return A;var D=x.element;if(typeof D=="string"){if(D=A.instance.popper.querySelector(D),!D)return A}else if(!A.instance.popper.contains(D))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),A;var q=A.placement.split("-")[0],R=A.offsets,W=R.popper,j=R.reference,K=["left","right"].indexOf(q)!==-1,ne=K?"height":"width",re=K?"Top":"Left",te=re.toLowerCase(),ue=K?"left":"top",de=K?"bottom":"right",he=Bt(D)[ne];j[de]-he<W[te]&&(A.offsets.popper[te]-=W[te]-(j[de]-he)),j[te]+he>W[de]&&(A.offsets.popper[te]+=j[te]+he-W[de]),A.offsets.popper=z(A.offsets.popper);var ze=j[te]+j[ne]/2-he/2,It=m(A.instance.popper),Pt=parseFloat(It["margin"+re]),lt=parseFloat(It["border"+re+"Width"]),Qt=ze-A.offsets.popper[te]-Pt-lt;return Qt=Math.max(Math.min(W[ne]-he,Qt),0),A.arrowElement=D,A.offsets.arrow=(B={},le(B,te,Math.round(Qt)),le(B,ue,""),B),A}function Pe(A){return A==="end"?"start":A==="start"?"end":A}var ot=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],gt=ot.slice(3);function bt(A){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,B=gt.indexOf(A),D=gt.slice(B+1).concat(gt.slice(0,B));return x?D.reverse():D}var hn={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function en(A,x){if(X(A.instance.modifiers,"inner")||A.flipped&&A.placement===A.originalPlacement)return A;var B=ye(A.instance.popper,A.instance.reference,x.padding,x.boundariesElement,A.positionFixed),D=A.placement.split("-")[0],q=nt(D),R=A.placement.split("-")[1]||"",W=[];switch(x.behavior){case hn.FLIP:W=[D,q];break;case hn.CLOCKWISE:W=bt(D);break;case hn.COUNTERCLOCKWISE:W=bt(D,!0);break;default:W=x.behavior}return W.forEach(function(j,K){if(D!==j||W.length===K+1)return A;D=A.placement.split("-")[0],q=nt(D);var ne=A.offsets.popper,re=A.offsets.reference,te=Math.floor,ue=D==="left"&&te(ne.right)>te(re.left)||D==="right"&&te(ne.left)<te(re.right)||D==="top"&&te(ne.bottom)>te(re.top)||D==="bottom"&&te(ne.top)<te(re.bottom),de=te(ne.left)<te(B.left),he=te(ne.right)>te(B.right),ze=te(ne.top)<te(B.top),It=te(ne.bottom)>te(B.bottom),Pt=D==="left"&&de||D==="right"&&he||D==="top"&&ze||D==="bottom"&&It,lt=["top","bottom"].indexOf(D)!==-1,Qt=!!x.flipVariations&&(lt&&R==="start"&&de||lt&&R==="end"&&he||!lt&&R==="start"&&ze||!lt&&R==="end"&&It),Ua=!!x.flipVariationsByContent&&(lt&&R==="start"&&he||lt&&R==="end"&&de||!lt&&R==="start"&&It||!lt&&R==="end"&&ze),oa=Qt||Ua;(ue||Pt||oa)&&(A.flipped=!0,(ue||Pt)&&(D=W[K+1]),oa&&(R=Pe(R)),A.placement=D+(R?"-"+R:""),A.offsets.popper=Y({},A.offsets.popper,_e(A.instance.popper,A.offsets.reference,A.placement)),A=Le(A.instance.modifiers,A,"flip"))}),A}function _n(A){var x=A.offsets,B=x.popper,D=x.reference,q=A.placement.split("-")[0],R=Math.floor,W=["top","bottom"].indexOf(q)!==-1,j=W?"right":"bottom",K=W?"left":"top",ne=W?"width":"height";return B[j]<R(D[K])&&(A.offsets.popper[K]=R(D[K])-B[ne]),B[K]>R(D[j])&&(A.offsets.popper[K]=R(D[j])),A}function fn(A,x,B,D){var q=A.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),R=+q[1],W=q[2];if(!R)return A;if(W.indexOf("%")===0){var j=void 0;switch(W){case"%p":j=B;break;case"%":case"%r":default:j=D}var K=z(j);return K[x]/100*R}else if(W==="vh"||W==="vw"){var ne=void 0;return W==="vh"?ne=Math.max(document.documentElement.clientHeight,window.innerHeight||0):ne=Math.max(document.documentElement.clientWidth,window.innerWidth||0),ne/100*R}else return R}function Qn(A,x,B,D){var q=[0,0],R=["right","left"].indexOf(D)!==-1,W=A.split(/(\+|\-)/).map(function(re){return re.trim()}),j=W.indexOf(Ze(W,function(re){return re.search(/,|\s/)!==-1}));W[j]&&W[j].indexOf(",")===-1&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var K=/\s*,\s*|\s+/,ne=j!==-1?[W.slice(0,j).concat([W[j].split(K)[0]]),[W[j].split(K)[1]].concat(W.slice(j+1))]:[W];return ne=ne.map(function(re,te){var ue=(te===1?!R:R)?"height":"width",de=!1;return re.reduce(function(he,ze){return he[he.length-1]===""&&["+","-"].indexOf(ze)!==-1?(he[he.length-1]=ze,de=!0,he):de?(he[he.length-1]+=ze,de=!1,he):he.concat(ze)},[]).map(function(he){return fn(he,ue,x,B)})}),ne.forEach(function(re,te){re.forEach(function(ue,de){Ye(ue)&&(q[te]+=ue*(re[de-1]==="-"?-1:1))})}),q}function Pa(A,x){var B=x.offset,D=A.placement,q=A.offsets,R=q.popper,W=q.reference,j=D.split("-")[0],K=void 0;return Ye(+B)?K=[+B,0]:K=Qn(B,R,W,j),j==="left"?(R.top+=K[0],R.left-=K[1]):j==="right"?(R.top+=K[0],R.left+=K[1]):j==="top"?(R.left+=K[0],R.top-=K[1]):j==="bottom"&&(R.left+=K[0],R.top+=K[1]),A.popper=R,A}function Va(A,x){var B=x.boundariesElement||E(A.instance.popper);A.instance.reference===B&&(B=E(B));var D=ce("transform"),q=A.instance.popper.style,R=q.top,W=q.left,j=q[D];q.top="",q.left="",q[D]="";var K=ye(A.instance.popper,A.instance.reference,x.padding,B,A.positionFixed);q.top=R,q.left=W,q[D]=j,x.boundaries=K;var ne=x.priority,re=A.offsets.popper,te={primary:function(de){var he=re[de];return re[de]<K[de]&&!x.escapeWithReference&&(he=Math.max(re[de],K[de])),le({},de,he)},secondary:function(de){var he=de==="right"?"left":"top",ze=re[he];return re[de]>K[de]&&!x.escapeWithReference&&(ze=Math.min(re[he],K[de]-(de==="right"?re.width:re.height))),le({},he,ze)}};return ne.forEach(function(ue){var de=["left","top"].indexOf(ue)!==-1?"primary":"secondary";re=Y({},re,te[de](ue))}),A.offsets.popper=re,A}function Fa(A){var x=A.placement,B=x.split("-")[0],D=x.split("-")[1];if(D){var q=A.offsets,R=q.reference,W=q.popper,j=["bottom","top"].indexOf(B)!==-1,K=j?"left":"top",ne=j?"width":"height",re={start:le({},K,R[K]),end:le({},K,R[K]+R[ne]-W[ne])};A.offsets.popper=Y({},W,re[D])}return A}function Wa(A){if(!un(A.instance.modifiers,"hide","preventOverflow"))return A;var x=A.offsets.reference,B=Ze(A.instance.modifiers,function(D){return D.name==="preventOverflow"}).boundaries;if(x.bottom<B.top||x.left>B.right||x.top>B.bottom||x.right<B.left){if(A.hide===!0)return A;A.hide=!0,A.attributes["x-out-of-boundaries"]=""}else{if(A.hide===!1)return A;A.hide=!1,A.attributes["x-out-of-boundaries"]=!1}return A}function ht(A){var x=A.placement,B=x.split("-")[0],D=A.offsets,q=D.popper,R=D.reference,W=["left","right"].indexOf(B)!==-1,j=["top","left"].indexOf(B)===-1;return q[W?"left":"top"]=R[B]-(j?q[W?"width":"height"]:0),A.placement=nt(x),A.offsets.popper=z(q),A}var _a={shift:{order:100,enabled:!0,fn:Fa},offset:{order:200,enabled:!0,fn:Pa,offset:0},preventOverflow:{order:300,enabled:!0,fn:Va,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:_n},arrow:{order:500,enabled:!0,fn:Bn,element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:en,behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:ht},hide:{order:800,enabled:!0,fn:Wa},computeStyle:{order:850,enabled:!0,fn:kn,gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:ut,onLoad:qt,gpuAcceleration:void 0}},Qa={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:_a},An=function(){function A(x,B){var D=this,q=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};H(this,A),this.scheduleUpdate=function(){return requestAnimationFrame(D.update)},this.update=f(this.update.bind(this)),this.options=Y({},A.Defaults,q),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=x&&x.jquery?x[0]:x,this.popper=B&&B.jquery?B[0]:B,this.options.modifiers={},Object.keys(Y({},A.Defaults.modifiers,q.modifiers)).forEach(function(W){D.options.modifiers[W]=Y({},A.Defaults.modifiers[W]||{},q.modifiers?q.modifiers[W]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(W){return Y({name:W},D.options.modifiers[W])}).sort(function(W,j){return W.order-j.order}),this.modifiers.forEach(function(W){W.enabled&&p(W.onLoad)&&W.onLoad(D.reference,D.popper,D.options,W,D.state)}),this.update();var R=this.options.eventsEnabled;R&&this.enableEventListeners(),this.state.eventsEnabled=R}return ae(A,[{key:"update",value:function(){return Ot.call(this)}},{key:"destroy",value:function(){return Ce.call(this)}},{key:"enableEventListeners",value:function(){return Rt.call(this)}},{key:"disableEventListeners",value:function(){return be.call(this)}}]),A}();return An.Utils=(typeof window<"u"?window:gs).PopperUtils,An.placements=ot,An.Defaults=Qa,An})}(xa)),xa.exports}var ws=vs();const xs=Qr(ws);let ra=0,Ea=0;function Ma(){ra++}function Es(){Ea++}function Cs(e){Fe&&typeof window.viewuiplus<"u"&&("langs"in viewuiplus||(viewuiplus.langs={}),viewuiplus.langs[e.i.locale]=e)}const qo={i:{locale:"zh-CN",select:{placeholder:"请选择",noMatch:"无匹配数据",loading:"加载中"},table:{noDataText:"暂无数据",noFilteredDataText:"暂无筛选结果",confirmFilter:"筛选",resetFilter:"重置",clearFilter:"全部",sumText:"合计"},datepicker:{selectDate:"选择日期",selectTime:"选择时间",startTime:"开始时间",endTime:"结束时间",clear:"清空",ok:"确定",datePanelLabel:"[yyyy年] [m月]",month:"月",month1:"1 月",month2:"2 月",month3:"3 月",month4:"4 月",month5:"5 月",month6:"6 月",month7:"7 月",month8:"8 月",month9:"9 月",month10:"10 月",month11:"11 月",month12:"12 月",year:"年",weekStartDay:"0",weeks:{sun:"日",mon:"一",tue:"二",wed:"三",thu:"四",fri:"五",sat:"六"},months:{m1:"1月",m2:"2月",m3:"3月",m4:"4月",m5:"5月",m6:"6月",m7:"7月",m8:"8月",m9:"9月",m10:"10月",m11:"11月",m12:"12月"}},transfer:{titles:{source:"源列表",target:"目的列表"},filterPlaceholder:"请输入搜索内容",notFoundText:"列表为空"},modal:{okText:"确定",cancelText:"取消"},poptip:{okText:"确定",cancelText:"取消"},page:{prev:"上一页",next:"下一页",total:"共",item:"条",items:"条",prev5:"向前 5 页",next5:"向后 5 页",page:"条/页",goto:"跳至",p:"页"},rate:{star:"星",stars:"星"},time:{before:"前",after:"后",just:"刚刚",seconds:"秒",minutes:"分钟",hours:"小时",days:"天"},tree:{emptyText:"暂无数据"},image:{zoomIn:"放大",zoomOut:"缩小",rotateLeft:"左旋转",rotateRight:"右旋转",fail:"失败",preview:"预览"}}};Cs(qo);const ks=/(%|)\{([0-9a-zA-Z_]+)\}/g;function Bs(){function e(n,a){return Object.prototype.hasOwnProperty.call(n,a)}function t(n,...a){return a.length===1&&typeof a[0]=="object"&&(a=a[0]),(!a||!a.hasOwnProperty)&&(a={}),n===void 0?"":n.replace(ks,(i,o,l,f)=>{let p;return n[f-1]==="{"&&n[f+i.length]==="}"?l:(p=e(a,l)?a[l]:null,p??"")})}return t}const Is=Bs();let Ss=qo,Ts=function(){if(Reflect.has(this,"$t"))return this.$t(...arguments)};const Ds=function(e,t){let n=Ts.apply(this,arguments);if(n!=null)return n;const a=e.split(".");let i=Ss;for(let o=0,l=a.length;o<l;o++){const f=a[o];if(n=i[f],o===l-1)return Is(n,t);if(!n)return"";i=n}return""},Ur={methods:{t(...e){return Ds.apply(this,e)}}},Ls={data(){return{globalConfig:{}}},created(){const e=Xe();this.globalConfig=e.appContext.config.globalProperties.$VIEWUI}},En={inject:{FormInstance:{default:""},FormItemInstance:{default:null}},computed:{itemDisabled(){let e=this.disabled;return!e&&this.FormInstance&&(e=this.FormInstance.disabled),e?!0:null}},methods:{handleFormItemChange(e,t){this.FormItemInstance&&(e==="blur"?this.FormItemInstance.formBlur(t):e==="change"&&this.FormItemInstance.formChange(t))}}},zs=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important
`,Ns=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];let ir={},Ft;function Os(e,t=!1){if(!Fe)return;const n=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(t&&ir[n])return ir[n];const a=window.getComputedStyle(e),i=a.getPropertyValue("box-sizing")||a.getPropertyValue("-moz-box-sizing")||a.getPropertyValue("-webkit-box-sizing"),o=parseFloat(a.getPropertyValue("padding-bottom"))+parseFloat(a.getPropertyValue("padding-top")),l=parseFloat(a.getPropertyValue("border-bottom-width"))+parseFloat(a.getPropertyValue("border-top-width")),p={sizingStyle:Ns.map(m=>`${m}:${a.getPropertyValue(m)}`).join(";"),paddingSize:o,borderSize:l,boxSizing:i};return t&&n&&(ir[n]=p),p}function Ms(e,t=null,n=null,a=!1){Fe&&!Ft&&(Ft=document.createElement("textarea"),document.body.appendChild(Ft)),e.getAttribute("wrap")?Ft.setAttribute("wrap",e.getAttribute("wrap")):Ft.removeAttribute("wrap");let{paddingSize:i,borderSize:o,boxSizing:l,sizingStyle:f}=Os(e,a);Ft.setAttribute("style",`${f};${zs}`),Ft.value=e.value||e.placeholder||"";let p=Number.MIN_SAFE_INTEGER,m=Number.MAX_SAFE_INTEGER,y=Ft.scrollHeight,g;if(l==="border-box"?y=y+o:l==="content-box"&&(y=y-i),t!==null||n!==null){Ft.value=" ";let d=Ft.scrollHeight-i;t!==null&&(p=d*t,l==="border-box"&&(p=p+i+o),y=Math.max(p,y)),n!==null&&(m=d*n,l==="border-box"&&(m=m+i+o),g=y>m?"":"hidden",y=Math.min(m,y))}return n||(g="hidden"),{height:`${y}px`,minHeight:`${p}px`,maxHeight:`${m}px`,overflowY:g}}const Qe="ivu-input",Rs={name:"Input",mixins:[En],emits:["on-enter","on-search","on-keydown","on-keypress","on-keyup","on-click","on-focus","on-blur","on-change","on-input-change","on-clear","update:modelValue"],props:{type:{validator(e){return Te(e,["text","textarea","password","url","email","date","number","tel"])},default:"text"},modelValue:{type:[String,Number],default:""},size:{validator(e){return Te(e,["small","large","default"])},default(){const e=Xe().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.size===""?"default":e.$VIEWUI.size}},placeholder:{type:String,default:""},maxlength:{type:[String,Number]},disabled:{type:Boolean,default:!1},icon:String,autosize:{type:[Boolean,Object],default:!1},rows:{type:Number,default:2},readonly:{type:Boolean,default:!1},name:{type:String},number:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},spellcheck:{type:Boolean,default:!1},autocomplete:{type:String,default:"off"},clearable:{type:Boolean,default:!1},elementId:{type:String},wrap:{validator(e){return Te(e,["hard","soft"])},default:"soft"},prefix:{type:String,default:""},suffix:{type:String,default:""},search:{type:Boolean,default:!1},enterButton:{type:[Boolean,String],default:!1},showWordLimit:{type:Boolean,default:!1},password:{type:Boolean,default:!1},border:{type:Boolean,default:!0}},data(){return{currentValue:this.modelValue,prefixCls:Qe,slotReady:!1,textareaStyles:{},isOnComposition:!1,showPassword:!1,clearableIconOffset:0}},computed:{currentType(){let e=this.type;return e==="password"&&this.password&&this.showPassword&&(e="text"),e},prepend(){let e=!1;return this.type!=="textarea"&&(e=this.$slots.prepend!==void 0),e},append(){let e=!1;return this.type!=="textarea"&&(e=this.$slots.append!==void 0),e},showPrefix(){let e=!1;return this.type!=="textarea"&&(e=this.prefix!==""||this.$slots.prefix!==void 0),e},showSuffix(){let e=!1;return this.type!=="textarea"&&(e=this.suffix!==""||this.$slots.suffix!==void 0),e},wrapClasses(){return[`${Qe}-wrapper`,{[`${Qe}-wrapper-${this.size}`]:!!this.size,[`${Qe}-type-${this.type}`]:this.type,[`${Qe}-group`]:this.prepend||this.append||this.search&&this.enterButton,[`${Qe}-group-${this.size}`]:(this.prepend||this.append||this.search&&this.enterButton)&&!!this.size,[`${Qe}-group-with-prepend`]:this.prepend,[`${Qe}-group-with-append`]:this.append||this.search&&this.enterButton,[`${Qe}-hide-icon`]:this.append,[`${Qe}-with-search`]:this.search&&this.enterButton,[`${Qe}-wrapper-disabled`]:this.itemDisabled}]},inputClasses(){return[`${Qe}`,{[`${Qe}-${this.size}`]:!!this.size,[`${Qe}-disabled`]:this.itemDisabled,[`${Qe}-no-border`]:!this.border,[`${Qe}-with-prefix`]:this.showPrefix,[`${Qe}-with-suffix`]:this.showSuffix||this.search&&this.enterButton===!1}]},textareaClasses(){return[`${Qe}`,{[`${Qe}-disabled`]:this.itemDisabled,[`${Qe}-no-border`]:!this.border}]},upperLimit(){return this.maxlength},textLength(){return typeof this.modelValue=="number"?String(this.modelValue).length:(this.modelValue||"").length},clearableStyles(){const e={};let t=this.clearableIconOffset;return t&&(e.transform=`translateX(-${t}px)`),e}},methods:{handleEnter(e){this.$emit("on-enter",e),this.search&&this.$emit("on-search",this.currentValue)},handleKeydown(e){this.$emit("on-keydown",e)},handleKeypress(e){this.$emit("on-keypress",e)},handleKeyup(e){this.$emit("on-keyup",e)},handleIconClick(e){this.$emit("on-click",e)},handleFocus(e){this.$emit("on-focus",e)},handleBlur(e){this.$emit("on-blur",e),Sr(this,["DatePicker","TimePicker","Cascader","Search"])||this.handleFormItemChange("blur",this.currentValue)},handleComposition(e){e.type==="compositionstart"&&(this.isOnComposition=!0),e.type==="compositionend"&&(this.isOnComposition=!1,this.handleInput(e))},handleInput(e){if(this.isOnComposition)return;let t=e.target.value;this.number&&t!==""&&(t=Number.isNaN(Number(t))?t:Number(t)),this.$emit("update:modelValue",t),this.setCurrentValue(t),this.$emit("on-change",e)},handleChange(e){this.$emit("on-input-change",e)},setCurrentValue(e){e!==this.currentValue&&(Ct(()=>{this.resizeTextarea()}),this.currentValue=e,Sr(this,["DatePicker","TimePicker","Cascader","Search"])||this.handleFormItemChange("change",e))},resizeTextarea(){const e=this.autosize;if(!e||this.type!=="textarea")return!1;const t=e.minRows,n=e.maxRows;this.textareaStyles=Ms(this.$refs.textarea,t,n)},focus(e){const t=this.type==="textarea"?this.$refs.textarea:this.$refs.input;t.focus(e);const{cursor:n}=e||{};if(n){const a=t.value.length;switch(n){case"start":t.setSelectionRange(0,0);break;case"end":t.setSelectionRange(a,a);break;default:t.setSelectionRange(0,a)}}},blur(){this.type==="textarea"?this.$refs.textarea.blur():this.$refs.input.blur()},handleClear(){const e={target:{value:""}};this.$emit("update:modelValue",""),this.setCurrentValue(""),this.$emit("on-change",e),this.$emit("on-clear")},handleSearch(){if(this.itemDisabled)return!1;this.$refs.input.focus(),this.$emit("on-search",this.currentValue)},handleToggleShowPassword(){if(this.itemDisabled)return!1;this.showPassword=!this.showPassword,this.focus();const e=this.currentValue.length;setTimeout(()=>{this.$refs.input.setSelectionRange(e,e)},0)},handleCalcIconOffset(){const e=this.$el.querySelectorAll(".ivu-input-group-append")[0];e?this.clearableIconOffset=e.offsetWidth:this.clearableIconOffset=0}},watch:{modelValue(e){this.setCurrentValue(e)},type(){Ct(this.handleCalcIconOffset)}},mounted(){this.slotReady=!0,this.resizeTextarea(),this.handleCalcIconOffset()},updated(){Ct(this.handleCalcIconOffset)}},qs={key:4,class:"ivu-input-suffix"},Ps={key:5,class:"ivu-input-word-count"},Vs={key:0,class:"ivu-icon ivu-icon-ios-eye-outline"},Fs={key:1,class:"ivu-icon ivu-icon-ios-eye-off-outline"},Ws=["id","autocomplete","spellcheck","type","placeholder","disabled","maxlength","readonly","name","value","number","autofocus"],_s={key:0,class:"ivu-icon ivu-icon-ios-search"},Qs={key:9,class:"ivu-input-prefix"},Us=["id","wrap","autocomplete","spellcheck","placeholder","disabled","rows","maxlength","readonly","name","value","autofocus"],Hs={key:0,class:"ivu-input-word-count"};function js(e,t,n,a,i,o){return $(),Z("div",{class:Q(o.wrapClasses)},[n.type!=="textarea"?($(),Z(Kt,{key:0},[o.prepend?Xt(($(),Z("div",{key:0,class:Q([i.prefixCls+"-group-prepend"])},[Ae(e.$slots,"prepend")],2)),[[dn,i.slotReady]]):ge("",!0),n.clearable&&i.currentValue&&!e.itemDisabled?($(),Z("i",{key:1,class:Q(["ivu-icon",["ivu-icon-ios-close-circle",i.prefixCls+"-icon",i.prefixCls+"-icon-clear",i.prefixCls+"-icon-normal"]]),onClick:t[0]||(t[0]=(...l)=>o.handleClear&&o.handleClear(...l)),style:Ie(o.clearableStyles)},null,6)):n.icon?($(),Z("i",{key:2,class:Q(["ivu-icon",["ivu-icon-"+n.icon,i.prefixCls+"-icon",i.prefixCls+"-icon-normal"]]),onClick:t[1]||(t[1]=(...l)=>o.handleIconClick&&o.handleIconClick(...l))},null,2)):n.search&&n.enterButton===!1?($(),Z("i",{key:3,class:Q(["ivu-icon ivu-icon-ios-search",[i.prefixCls+"-icon",i.prefixCls+"-icon-normal",i.prefixCls+"-search-icon"]]),onClick:t[2]||(t[2]=(...l)=>o.handleSearch&&o.handleSearch(...l))},null,2)):o.showSuffix?($(),Z("span",qs,[Ae(e.$slots,"suffix",{},()=>[n.suffix?($(),Z("i",{key:0,class:Q(["ivu-icon",["ivu-icon-"+n.suffix]])},null,2)):ge("",!0)])])):n.showWordLimit?($(),Z("span",Ps,He(o.textLength)+"/"+He(o.upperLimit),1)):n.password?($(),Z("span",{key:6,class:"ivu-input-suffix",onClick:t[3]||(t[3]=(...l)=>o.handleToggleShowPassword&&o.handleToggleShowPassword(...l))},[i.showPassword?($(),Z("i",Vs)):($(),Z("i",Fs))])):ge("",!0),V(wn,{name:"fade"},{default:Me(()=>[n.icon?ge("",!0):($(),Z("i",{key:0,class:Q(["ivu-icon ivu-icon-ios-loading ivu-load-loop",[i.prefixCls+"-icon",i.prefixCls+"-icon-validate"]])},null,2))]),_:1}),G("input",{id:n.elementId,autocomplete:n.autocomplete,spellcheck:n.spellcheck,ref:"input",type:o.currentType,class:Q(o.inputClasses),placeholder:n.placeholder,disabled:e.itemDisabled,maxlength:n.maxlength,readonly:n.readonly,name:n.name,value:i.currentValue,number:n.number,autofocus:n.autofocus,onKeyup:[t[4]||(t[4]=Tt((...l)=>o.handleEnter&&o.handleEnter(...l),["enter"])),t[5]||(t[5]=(...l)=>o.handleKeyup&&o.handleKeyup(...l))],onKeypress:t[6]||(t[6]=(...l)=>o.handleKeypress&&o.handleKeypress(...l)),onKeydown:t[7]||(t[7]=(...l)=>o.handleKeydown&&o.handleKeydown(...l)),onFocus:t[8]||(t[8]=(...l)=>o.handleFocus&&o.handleFocus(...l)),onBlur:t[9]||(t[9]=(...l)=>o.handleBlur&&o.handleBlur(...l)),onCompositionstart:t[10]||(t[10]=(...l)=>o.handleComposition&&o.handleComposition(...l)),onCompositionupdate:t[11]||(t[11]=(...l)=>o.handleComposition&&o.handleComposition(...l)),onCompositionend:t[12]||(t[12]=(...l)=>o.handleComposition&&o.handleComposition(...l)),onInput:t[13]||(t[13]=(...l)=>o.handleInput&&o.handleInput(...l)),onChange:t[14]||(t[14]=(...l)=>o.handleChange&&o.handleChange(...l))},null,42,Ws),o.append?Xt(($(),Z("div",{key:7,class:Q([i.prefixCls+"-group-append"])},[Ae(e.$slots,"append")],2)),[[dn,i.slotReady]]):n.search&&n.enterButton?($(),Z("div",{key:8,class:Q([i.prefixCls+"-group-append",i.prefixCls+"-search"]),onClick:t[15]||(t[15]=(...l)=>o.handleSearch&&o.handleSearch(...l))},[n.enterButton===!0?($(),Z("i",_s)):($(),Z(Kt,{key:1},[zt(He(n.enterButton),1)],64))],2)):o.showPrefix?($(),Z("span",Qs,[Ae(e.$slots,"prefix",{},()=>[n.prefix?($(),Z("i",{key:0,class:Q(["ivu-icon",["ivu-icon-"+n.prefix]])},null,2)):ge("",!0)])])):ge("",!0)],64)):($(),Z(Kt,{key:1},[G("textarea",{id:n.elementId,wrap:n.wrap,autocomplete:n.autocomplete,spellcheck:n.spellcheck,ref:"textarea",class:Q(o.textareaClasses),style:Ie(i.textareaStyles),placeholder:n.placeholder,disabled:e.itemDisabled,rows:n.rows,maxlength:n.maxlength,readonly:n.readonly,name:n.name,value:i.currentValue,autofocus:n.autofocus,onKeyup:[t[16]||(t[16]=Tt((...l)=>o.handleEnter&&o.handleEnter(...l),["enter"])),t[17]||(t[17]=(...l)=>o.handleKeyup&&o.handleKeyup(...l))],onKeypress:t[18]||(t[18]=(...l)=>o.handleKeypress&&o.handleKeypress(...l)),onKeydown:t[19]||(t[19]=(...l)=>o.handleKeydown&&o.handleKeydown(...l)),onFocus:t[20]||(t[20]=(...l)=>o.handleFocus&&o.handleFocus(...l)),onBlur:t[21]||(t[21]=(...l)=>o.handleBlur&&o.handleBlur(...l)),onCompositionstart:t[22]||(t[22]=(...l)=>o.handleComposition&&o.handleComposition(...l)),onCompositionupdate:t[23]||(t[23]=(...l)=>o.handleComposition&&o.handleComposition(...l)),onCompositionend:t[24]||(t[24]=(...l)=>o.handleComposition&&o.handleComposition(...l)),onInput:t[25]||(t[25]=(...l)=>o.handleInput&&o.handleInput(...l))},"            ",46,Us),n.showWordLimit?($(),Z("span",Hs,He(o.textLength)+"/"+He(o.upperLimit),1)):ge("",!0)],64))],2)}const Po=je(Rs,[["render",js]]),Vo={emits:["on-popper-show","on-popper-hide","created","update:modelValue"],props:{eventsEnabled:{type:Boolean,default:!1},placement:{type:String,default:"bottom"},boundariesPadding:{type:Number,default:5},reference:Object,popper:Object,offset:{default:0},modelValue:{type:Boolean,default:!1},transition:String,options:{type:Object,default(){return{modifiers:{computeStyle:{gpuAcceleration:!1},preventOverflow:{boundariesElement:"window"}}}}}},data(){return{visible:this.modelValue}},watch:{modelValue:{immediate:!0,handler(e){this.visible=e,this.$emit("update:modelValue",e)}},visible(e){e?(this.handleIndexIncrease&&this.handleIndexIncrease(),this.updatePopper(),this.$emit("on-popper-show")):this.$emit("on-popper-hide"),this.$emit("update:modelValue",e)}},methods:{createPopper(){if(!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.placement))return;const e=this.options,t=this.popper||this.$refs.popper,n=this.reference||this.$refs.reference;!t||!n||(this.popperJS&&this.popperJS.hasOwnProperty("destroy")&&this.popperJS.destroy(),e.eventsEnabled=this.eventsEnabled,e.placement=this.placement,e.modifiers.offset||(e.modifiers.offset={}),e.modifiers.offset.offset=this.offset,e.onCreate=()=>{Ct(this.updatePopper),this.$emit("created",this)},this.popperJS=new xs(n,t,e))},updatePopper(){this.popperJS?this.popperJS.update():this.createPopper()},doDestroy(){this.visible||(this.popperJS.destroy(),this.popperJS=null)}},updated(){Ct(()=>this.updatePopper())},beforeUnmount(){this.popperJS&&this.popperJS.destroy()}},Dn="ivu-tooltip",$s={name:"Tooltip",mixins:[Vo],props:{placement:{validator(e){return Te(e,["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"])},default:"bottom"},content:{type:[String,Number],default:""},delay:{type:Number,default:100},disabled:{type:Boolean,default:!1},controlled:{type:Boolean,default:!1},always:{type:Boolean,default:!1},transfer:{type:Boolean,default(){const e=Xe().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.transfer===""?!1:e.$VIEWUI.transfer}},theme:{validator(e){return Te(e,["dark","light"])},default:"dark"},maxWidth:{type:[String,Number]},transferClassName:{type:String}},data(){return{prefixCls:Dn,tIndex:this.handleGetIndex()}},computed:{innerStyles(){const e={};return this.maxWidth&&(e["max-width"]=`${this.maxWidth}px`),e},innerClasses(){return[`${Dn}-inner`,{[`${Dn}-inner-with-width`]:!!this.maxWidth}]},dropStyles(){let e={};return this.transfer&&(e["z-index"]=1060+this.tIndex),e},dropdownCls(){return[`${Dn}-popper`,`${Dn}-${this.theme}`,{[Dn+"-transfer"]:this.transfer,[this.transferClassName]:this.transferClassName}]}},watch:{content(){this.updatePopper()}},methods:{handleShowPopper(){this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{this.visible=!0},this.delay),this.tIndex=this.handleGetIndex()},handleClosePopper(){this.timeout&&(clearTimeout(this.timeout),this.controlled||(this.timeout=setTimeout(()=>{this.visible=!1},100)))},handleGetIndex(){return Ma(),ra}},mounted(){this.always&&this.updatePopper()}};function Ys(e,t,n,a,i,o){return $(),Z("div",{class:Q([i.prefixCls]),onMouseenter:t[2]||(t[2]=(...l)=>o.handleShowPopper&&o.handleShowPopper(...l)),onMouseleave:t[3]||(t[3]=(...l)=>o.handleClosePopper&&o.handleClosePopper(...l))},[G("div",{class:Q([i.prefixCls+"-rel"]),ref:"reference"},[Ae(e.$slots,"default")],2),($(),Gt(Oa,{to:"body",disabled:!n.transfer},[V(wn,{name:"fade"},{default:Me(()=>[Xt(G("div",{ref:"popper",class:Q(o.dropdownCls),style:Ie(o.dropStyles),onMouseenter:t[0]||(t[0]=(...l)=>o.handleShowPopper&&o.handleShowPopper(...l)),onMouseleave:t[1]||(t[1]=(...l)=>o.handleClosePopper&&o.handleClosePopper(...l))},[G("div",{class:Q([i.prefixCls+"-content"])},[G("div",{class:Q([i.prefixCls+"-arrow"])},null,2),G("div",{class:Q(o.innerClasses),style:Ie(o.innerStyles)},[Ae(e.$slots,"content",{},()=>[zt(He(n.content),1)])],6)],2)],38),[[dn,!n.disabled&&(e.visible||n.always)]])]),_:3})],8,["disabled"]))],34)}const Ks=je($s,[["render",Ys]]),rn="ivu-btn",Ke={name:"Button",mixins:[_r,En],components:{Icon:_t},emits:["click"],props:{type:{validator(e){return Te(e,["default","primary","dashed","text","info","success","warning","error"])},default:"default"},shape:{validator(e){return Te(e,["circle","circle-outline"])}},size:{validator(e){return Te(e,["small","large","default"])},default(){const e=Xe().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.size===""?"default":e.$VIEWUI.size}},loading:Boolean,disabled:Boolean,htmlType:{default:"button",validator(e){return Te(e,["button","submit","reset"])}},icon:{type:String,default:""},customIcon:{type:String,default:""},long:{type:Boolean,default:!1},ghost:{type:Boolean,default:!1}},computed:{showSlot(){return!!this.$slots.default},classes(){return[`${rn}`,`${rn}-${this.type}`,{[`${rn}-long`]:this.long,[`${rn}-${this.shape}`]:!!this.shape,[`${rn}-${this.size}`]:this.size!=="default",[`${rn}-loading`]:this.loading!=null&&this.loading,[`${rn}-icon-only`]:!this.showSlot&&(!!this.icon||!!this.customIcon||this.loading),[`${rn}-ghost`]:this.ghost}]},isHrefPattern(){const{to:e}=this;return!!e},tagName(){const{isHrefPattern:e}=this;return e?"a":"button"},tagProps(){const{isHrefPattern:e}=this;if(e){const{linkUrl:t,target:n}=this;return{href:t,target:n}}else{const{htmlType:t}=this;return{type:t}}}},methods:{handleClickLink(e){this.$emit("click",e);const t=e.ctrlKey||e.metaKey;this.handleCheckClick(e,t)}},render(){let e;this.tagName==="button"?e="button":this.tagName==="a"&&(e="a");let t=[];return this.loading&&t.push(Ue(_t,{class:"ivu-load-loop",type:"ios-loading"})),(this.icon||this.customIcon)&&!this.loading&&t.push(Ue(_t,{type:this.icon,custom:this.customIcon})),this.$slots.default&&t.push(Ue("span",{ref:"slot"},this.$slots.default())),Ue(e,{class:this.classes,disabled:this.itemDisabled,onClick:this.handleClickLink,...this.tagProps},t)}},ha="ivu-btn-group",Xs={name:"ButtonGroup",props:{size:{validator(e){return Te(e,["small","large","default"])},default(){const e=Xe().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.size===""?"default":e.$VIEWUI.size}},shape:{validator(e){return Te(e,["circle","circle-outline"])}},vertical:{type:Boolean,default:!1}},computed:{classes(){return[`${ha}`,{[`${ha}-${this.size}`]:!!this.size,[`${ha}-${this.shape}`]:!!this.shape,[`${ha}-vertical`]:this.vertical}]}}};function Gs(e,t,n,a,i,o){return $(),Z("div",{class:Q(o.classes)},[Ae(e.$slots,"default")],2)}const Jn=je(Xs,[["render",Gs]]),Hn="ivu-radio-group";let Js=0;const Zs=Date.now(),ed=()=>`ivuRadioGroup_${Zs}_${Js++}`,td={name:"RadioGroup",mixins:[En],emits:["update:modelValue","on-change"],provide(){return{RadioGroupInstance:this}},props:{modelValue:{type:[String,Number],default:""},size:{validator(e){return Te(e,["small","large","default"])},default(){const e=Xe().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.size===""?"default":e.$VIEWUI.size}},type:{validator(e){return Te(e,["button"])}},vertical:{type:Boolean,default:!1},name:{type:String,default:ed},buttonStyle:{validator(e){return Te(e,["default","solid"])},default:"default"}},data(){return{currentValue:this.modelValue,children:[]}},computed:{classes(){return[`${Hn}`,{[`${Hn}-${this.size}`]:!!this.size,[`ivu-radio-${this.size}`]:!!this.size,[`${Hn}-${this.type}`]:!!this.type,[`${Hn}-button-${this.buttonStyle}`]:this.type==="button"&&this.buttonStyle!=="default",[`${Hn}-vertical`]:this.vertical}]}},methods:{change(e){this.currentValue=e.value,this.$emit("update:modelValue",e.value),this.$emit("on-change",e.value),this.handleFormItemChange("change",e.value)}},watch:{modelValue(){this.currentValue!==this.modelValue&&(this.currentValue=this.modelValue)}}},nd=["name"];function ad(e,t,n,a,i,o){return $(),Z("div",{class:Q(o.classes),name:n.name},[Ae(e.$slots,"default")],10,nd)}const gi=je(td,[["render",ad]]),ft="ivu-radio",rd={name:"Radio",mixins:[En],emits:["update:modelValue","on-change"],inject:{RadioGroupInstance:{default:null}},props:{modelValue:{type:[String,Number,Boolean],default:!1},trueValue:{type:[String,Number,Boolean],default:!0},falseValue:{type:[String,Number,Boolean],default:!1},label:{type:[String,Number]},disabled:{type:Boolean,default:!1},size:{validator(e){return Te(e,["small","large","default"])},default(){const e=Xe().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.size===""?"default":e.$VIEWUI.size}},name:{type:String},border:{type:Boolean,default:!1}},data(){return{groupName:this.name,parent:this.RadioGroupInstance,focusWrapper:!1,focusInner:!1}},computed:{wrapClasses(){return[`${ft}-wrapper`,{[`${ft}-group-item`]:this.group,[`${ft}-wrapper-checked`]:this.currentValue,[`${ft}-wrapper-disabled`]:this.itemDisabled,[`${ft}-${this.size}`]:!!this.size,[`${ft}-focus`]:this.focusWrapper,[`${ft}-border`]:this.border}]},radioClasses(){return[`${ft}`,{[`${ft}-checked`]:this.currentValue,[`${ft}-disabled`]:this.itemDisabled}]},innerClasses(){return[`${ft}-inner`,{[`${ft}-focus`]:this.focusInner}]},inputClasses(){return`${ft}-input`},currentValue(){return this.RadioGroupInstance?this.RadioGroupInstance.currentValue===this.label:this.modelValue===this.trueValue},group(){return!!this.RadioGroupInstance}},mounted(){this.parent&&(this.name&&this.name!==this.parent.name?console.warn&&console.warn("[View UI] Name does not match Radio Group name."):this.groupName=this.parent.name)},methods:{change(e){if(this.itemDisabled)return!1;const n=e.target.checked?this.trueValue:this.falseValue;this.$emit("update:modelValue",n),this.group?this.label!==void 0&&this.parent.change({value:this.label,checked:this.modelValue}):(this.$emit("on-change",n),this.handleFormItemChange("change",n))},onBlur(){this.focusWrapper=!1,this.focusInner=!1},onFocus(){this.group&&this.parent.type==="button"?this.focusWrapper=!0:this.focusInner=!0}},watch:{modelValue(e){if(!(e===this.trueValue||e===this.falseValue))throw"Value should be trueValue or falseValue."}}},id=["disabled","checked","name"];function od(e,t,n,a,i,o){return $(),Z("label",{class:Q(o.wrapClasses)},[G("span",{class:Q(o.radioClasses)},[G("span",{class:Q(o.innerClasses)},null,2),G("input",{type:"radio",class:Q(o.inputClasses),disabled:e.itemDisabled,checked:o.currentValue,name:i.groupName,onChange:t[0]||(t[0]=(...l)=>o.change&&o.change(...l)),onFocus:t[1]||(t[1]=(...l)=>o.onFocus&&o.onFocus(...l)),onBlur:t[2]||(t[2]=(...l)=>o.onBlur&&o.onBlur(...l))},null,42,id)],2),Ae(e.$slots,"default",{},()=>[zt(He(n.label),1)])],2)}const bi=je(rd,[["render",od]]),jt="ivu-col";function ld(e){return typeof e=="number"?`${e} ${e} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?`0 0 ${e}`:e}const sd={name:"iCol",inject:["RowInstance"],props:{span:[Number,String],order:[Number,String],offset:[Number,String],push:[Number,String],pull:[Number,String],className:String,xs:[Number,Object],sm:[Number,Object],md:[Number,Object],lg:[Number,Object],xl:[Number,Object],xxl:[Number,Object],flex:{type:[Number,String],default:""}},computed:{gutter(){return this.RowInstance.gutter},classes(){let e=[`${jt}`,{[`${jt}-span-${this.span}`]:this.span,[`${jt}-order-${this.order}`]:this.order,[`${jt}-offset-${this.offset}`]:this.offset,[`${jt}-push-${this.push}`]:this.push,[`${jt}-pull-${this.pull}`]:this.pull,[`${this.className}`]:!!this.className}];return["xs","sm","md","lg","xl","xxl"].forEach(t=>{if(typeof this[t]=="number")e.push(`${jt}-span-${t}-${this[t]}`);else if(typeof this[t]=="object"){let n=this[t];Object.keys(n).forEach(a=>{e.push(a!=="span"?`${jt}-${t}-${a}-${n[a]}`:`${jt}-span-${t}-${n[a]}`)})}}),e},styles(){let e={};return this.gutter!==0&&(e={paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}),this.flex&&(e.flex=ld(this.flex)),e}}};function dd(e,t,n,a,i,o){return $(),Z("div",{class:Q(o.classes),style:Ie(o.styles)},[Ae(e.$slots,"default")],6)}const vi=je(sd,[["render",dd]]),yn="ivu-row",pd={name:"Row",provide(){return{RowInstance:this}},props:{type:{validator(e){return Te(e,["flex"])}},align:{validator(e){return Te(e,["top","middle","bottom"])}},justify:{validator(e){return Te(e,["start","end","center","space-around","space-between"])}},gutter:{type:Number,default:0},className:String,wrap:{type:Boolean,default:!0}},computed:{classes(){return[`${yn}`,{[`${yn}-${this.type}`]:!!this.type,[`${yn}-${this.type}-${this.align}`]:!!this.align&&this.type,[`${yn}-${this.type}-${this.justify}`]:!!this.justify&&this.type,[`${yn}-${this.align}`]:!!this.align,[`${yn}-${this.justify}`]:!!this.justify,[`${this.className}`]:!!this.className,[`${yn}-no-wrap`]:!this.wrap}]},styles(){let e={};return this.gutter!==0&&(e={marginLeft:this.gutter/-2+"px",marginRight:this.gutter/-2+"px"}),e}}};function cd(e,t,n,a,i,o){return $(),Z("div",{class:Q(o.classes),style:Ie(o.styles)},[Ae(e.$slots,"default")],6)}const ud=je(pd,[["render",cd]]),gn="ivu-card",wi=16,hd={name:"Card",mixins:[_r],components:{Icon:_t},props:{bordered:{type:Boolean,default:!0},disHover:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1},padding:{type:Number,default:wi},title:{type:String},icon:{type:String}},data(){return{showHead:!0,showExtra:!0}},computed:{classes(){return[`${gn}`,{[`${gn}-bordered`]:this.bordered&&!this.shadow,[`${gn}-dis-hover`]:this.disHover||this.shadow,[`${gn}-shadow`]:this.shadow}]},headClasses(){return`${gn}-head`},extraClasses(){return`${gn}-extra`},bodyClasses(){return`${gn}-body`},bodyStyles(){return this.padding!==wi?{padding:`${this.padding}px`}:""},isHrefPattern(){const{to:e}=this;return!!e},tagName(){const{isHrefPattern:e}=this;return e?"a":"div"},tagProps(){const{isHrefPattern:e}=this;if(e){const{linkUrl:t,target:n}=this;return{href:t,target:n}}else return{}}},methods:{handleClickLink(e){if(!this.isHrefPattern)return;const t=e.ctrlKey||e.metaKey;this.handleCheckClick(e,t)}},mounted(){this.showHead=this.title||this.$slots.title!==void 0,this.showExtra=this.$slots.extra!==void 0}},fd={key:0};function Ad(e,t,n,a,i,o){const l=kt("Icon");return $(),Gt(Zl(o.tagName),Do({class:o.classes},o.tagProps,{onClick:o.handleClickLink}),{default:Me(()=>[i.showHead?($(),Z("div",{key:0,class:Q(o.headClasses)},[Ae(e.$slots,"title",{},()=>[n.title?($(),Z("p",fd,[n.icon?($(),Gt(l,{key:0,type:n.icon},null,8,["type"])):ge("",!0),G("span",null,He(n.title),1)])):ge("",!0)])],2)):ge("",!0),i.showExtra?($(),Z("div",{key:1,class:Q(o.extraClasses)},[Ae(e.$slots,"extra")],2)):ge("",!0),G("div",{class:Q(o.bodyClasses),style:Ie(o.bodyStyles)},[Ae(e.$slots,"default")],6)]),_:3},16,["class","onClick"])}const Tr=je(hd,[["render",Ad]]),md={beforeMount(e,t,n){function a(i){if(e.contains(i.target))return!1;t.value(i)}e.__vueClickOutside__=a,Fe&&document.addEventListener("click",a)},unmounted(e,t){Fe&&document.removeEventListener("click",e.__vueClickOutside__),delete e.__vueClickOutside__}},yd={name:"CellItem",props:{title:{type:String,default:""},label:{type:String,default:""},extra:{type:String,default:""}}},gd={class:"ivu-cell-item"},bd={class:"ivu-cell-icon"},vd={class:"ivu-cell-main"},wd={class:"ivu-cell-title"},xd={class:"ivu-cell-label"},Ed={class:"ivu-cell-footer"},Cd={class:"ivu-cell-extra"};function kd(e,t,n,a,i,o){return $(),Z("div",gd,[G("div",bd,[Ae(e.$slots,"icon")]),G("div",vd,[G("div",wd,[Ae(e.$slots,"default",{},()=>[zt(He(n.title),1)])]),G("div",xd,[Ae(e.$slots,"label",{},()=>[zt(He(n.label),1)])])]),G("div",Ed,[G("span",Cd,[Ae(e.$slots,"extra",{},()=>[zt(He(n.extra),1)])])])])}const Bd=je(yd,[["render",kd]]),jn="ivu-cell",Id={name:"Cell",inject:["CellGroupInstance"],mixins:[_r,Ls],components:{CellItem:Bd,Icon:_t},props:{name:{type:[String,Number]},title:{type:String,default:""},label:{type:String,default:""},extra:{type:String,default:""},disabled:{type:Boolean,default:!1},selected:{type:Boolean,default:!1}},data(){return{prefixCls:jn}},computed:{classes(){return[`${jn}`,{[`${jn}-disabled`]:this.disabled,[`${jn}-selected`]:this.selected,[`${jn}-with-link`]:this.to}]},arrowType(){const e=this.globalConfig;let t="ios-arrow-forward";return e&&(e.cell.customArrow?t="":e.cell.arrow&&(t=e.cell.arrow)),t},customArrowType(){const e=this.globalConfig;let t="";return e&&e.cell.customArrow&&(t=e.cell.customArrow),t},arrowSize(){const e=this.globalConfig;let t="";return e&&e.cell.arrowSize&&(t=e.cell.arrowSize),t}},methods:{handleClickItem(e,t){this.CellGroupInstance.handleClick(this.name),this.handleCheckClick(e,t)}}},Sd=["href","target"],Td={key:2,class:"ivu-cell-arrow"};function Dd(e,t,n,a,i,o){const l=kt("CellItem"),f=kt("Icon");return $(),Z("div",{class:Q(o.classes)},[e.to?($(),Z("a",{key:0,href:e.linkUrl,target:e.target,class:"ivu-cell-link",onClick:[t[0]||(t[0]=sn(p=>o.handleClickItem(p,!1),["exact"])),t[1]||(t[1]=sn(p=>o.handleClickItem(p,!0),["ctrl"])),t[2]||(t[2]=sn(p=>o.handleClickItem(p,!0),["meta"]))]},[V(l,{title:n.title,label:n.label,extra:n.extra},{icon:Me(()=>[Ae(e.$slots,"icon")]),default:Me(()=>[Ae(e.$slots,"default")]),extra:Me(()=>[Ae(e.$slots,"extra")]),label:Me(()=>[Ae(e.$slots,"label")]),_:3},8,["title","label","extra"])],8,Sd)):($(),Z("div",{key:1,class:"ivu-cell-link",onClick:t[3]||(t[3]=(...p)=>o.handleClickItem&&o.handleClickItem(...p))},[V(l,{title:n.title,label:n.label,extra:n.extra},{icon:Me(()=>[Ae(e.$slots,"icon")]),default:Me(()=>[Ae(e.$slots,"default")]),extra:Me(()=>[Ae(e.$slots,"extra")]),label:Me(()=>[Ae(e.$slots,"label")]),_:3},8,["title","label","extra"])])),e.to?($(),Z("div",Td,[Ae(e.$slots,"arrow",{},()=>[V(f,{type:o.arrowType,custom:o.customArrowType,size:o.arrowSize},null,8,["type","custom","size"])])])):ge("",!0)],2)}const At=je(Id,[["render",Dd]]),Ld={name:"CellGroup",emits:["on-click"],provide(){return{CellGroupInstance:this}},methods:{handleClick(e){this.$emit("on-click",e)}}},zd={class:"ivu-cell-group"};function Nd(e,t,n,a,i,o){return $(),Z("div",zd,[Ae(e.$slots,"default")])}const za=je(Ld,[["render",Nd]]),Od={name:"RenderCell",props:{render:Function},render(){return this.render(Ue)}},Md={components:{RenderCell:Od},props:{prefixCls:{type:String,default:""},duration:{type:Number,default:1.5},type:{type:String},content:{type:String,default:""},withIcon:Boolean,render:{type:Function},hasTitle:Boolean,styles:{type:Object,default:function(){return{right:"50%"}}},closable:{type:Boolean,default:!1},className:{type:String},name:{type:String,required:!0},onClose:{type:Function},transitionName:{type:String},background:{type:Boolean,default:!1},msgType:{type:String}},data(){return{withDesc:!1}},computed:{baseClass(){return`${this.prefixCls}-notice`},renderFunc(){return this.render||function(){}},classes(){return[this.baseClass,{[`${this.className}`]:!!this.className,[`${this.baseClass}-closable`]:this.closable,[`${this.baseClass}-with-desc`]:this.withDesc,[`${this.baseClass}-with-background`]:this.background}]},contentClasses(){return[`${this.baseClass}-content`,this.render!==void 0?`${this.baseClass}-content-with-render`:""]},messageContentClasses(){return[`${this.baseClass}-content`,{[`${this.baseClass}-content-${this.msgType}`]:this.msgType,[`${this.baseClass}-content-background`]:this.background}]},contentWithIcon(){return[this.withIcon?`${this.prefixCls}-content-with-icon`:"",!this.hasTitle&&this.withIcon?`${this.prefixCls}-content-with-render-notitle`:""]},messageClasses(){return[`${this.baseClass}-content`,this.render!==void 0?`${this.baseClass}-content-with-render`:""]}},methods:{clearCloseTimer(){this.closeTimer&&(clearTimeout(this.closeTimer),this.closeTimer=null)},close(){this.clearCloseTimer(),this.onClose(),this.$parent.$parent.close(this.name)},handleEnter(e){this.type==="message"&&(e.style.height=e.scrollHeight+"px")},handleLeave(e){this.type==="message"&&Fe&&document.getElementsByClassName("ivu-message-notice").length!==1&&(e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0)}},mounted(){if(this.handleEnter(this.$el),this.clearCloseTimer(),this.duration!==0&&(this.closeTimer=setTimeout(()=>{this.close()},this.duration*1e3)),this.prefixCls==="ivu-notice"){let e=this.$refs.content.querySelectorAll(`.${this.prefixCls}-desc`)[0];this.withDesc=this.render?!0:e?e.innerHTML!=="":!1}},beforeUnmount(){this.handleLeave(this.$el),this.clearCloseTimer()}},Rd=["innerHTML"],qd=["innerHTML"];function Pd(e,t,n,a,i,o){const l=kt("render-cell");return $(),Z("div",{class:Q(o.classes),style:Ie(n.styles)},[n.type==="notice"?($(),Z(Kt,{key:0},[G("div",{class:Q(o.contentClasses),ref:"content",innerHTML:n.content},null,10,Rd),G("div",{class:Q(o.contentWithIcon)},[V(l,{render:o.renderFunc},null,8,["render"])],2),n.closable?($(),Z("a",{key:0,class:Q([o.baseClass+"-close"]),onClick:t[0]||(t[0]=(...f)=>o.close&&o.close(...f))},t[2]||(t[2]=[G("i",{class:"ivu-icon ivu-icon-ios-close"},null,-1)]),2)):ge("",!0)],64)):ge("",!0),n.type==="message"?($(),Z("div",{key:1,class:Q(o.messageContentClasses),ref:"content"},[G("div",{class:Q([o.baseClass+"-content-text"]),innerHTML:n.content},null,10,qd),G("div",{class:Q([o.baseClass+"-content-text"])},[V(l,{render:o.renderFunc},null,8,["render"])],2),n.closable?($(),Z("a",{key:0,class:Q([o.baseClass+"-close"]),onClick:t[1]||(t[1]=(...f)=>o.close&&o.close(...f))},t[3]||(t[3]=[G("i",{class:"ivu-icon ivu-icon-ios-close"},null,-1)]),2)):ge("",!0)],2)):ge("",!0)],6)}const Vd=je(Md,[["render",Pd]]),Fd="ivu-notification";let Wd=0;const _d=Date.now();function Qd(){return"ivuNotification_"+_d+"_"+Wd++}const Ud={components:{Notice:Vd},props:{prefixCls:{type:String,default:Fd},styles:{type:Object,default:function(){return{top:"65px",left:"50%"}}},content:{type:String},className:{type:String},transitionName:{type:String}},data(){return{notices:[],tIndex:this.handleGetIndex()}},computed:{classes(){return[`${this.prefixCls}`,{[`${this.className}`]:!!this.className}]},wrapStyles(){let e=Object.assign({},this.styles);return e["z-index"]=1010+this.tIndex,e}},methods:{add(e){const t=e.name||Qd();let n=Object.assign({styles:{right:"50%"},content:"",duration:1.5,closable:!1,name:t},e);this.notices.push(n),this.tIndex=this.handleGetIndex()},close(e){const t=this.notices;for(let n=0;n<t.length;n++)if(t[n].name===e){this.notices.splice(n,1);break}},closeAll(){this.notices=[]},handleGetIndex(){return Ma(),ra}}};function Hd(e,t,n,a,i,o){const l=kt("Notice");return $(),Z("div",{class:Q(o.classes),style:Ie(o.wrapStyles)},[V(es,{name:n.transitionName,appear:""},{default:Me(()=>[($(!0),Z(Kt,null,wa(i.notices,f=>($(),Gt(l,{key:f.name,"prefix-cls":n.prefixCls,styles:f.styles,type:f.type,content:f.content,duration:f.duration,render:f.render,"has-title":f.hasTitle,withIcon:f.withIcon,closable:f.closable,name:f.name,"transition-name":f.transitionName,background:f.background,"msg-type":f.msgType,"on-close":f.onClose},null,8,["prefix-cls","styles","type","content","duration","render","has-title","withIcon","closable","name","transition-name","background","msg-type","on-close"]))),128))]),_:1},8,["name"])],6)}const Dr=je(Ud,[["render",Hd]]);Dr.newInstance=e=>{if(!Fe)return;const t=e||{};let n=null;const a=Lo({render(){return Ue(Dr,Object.assign({ref:"notification"},t))},created(){n=Xe()}}),i=document.createElement("div");document.body.appendChild(i),a.mount(i);const o=n.refs.notification;return{notice(l){Ct(()=>{n.refs.notification.add(l)})},remove(l){Ct(()=>{n.refs.notification.close(l)})},component:o,destroy(l){Fe&&setTimeout(function(){n.refs.notification.closeAll();const f=document.querySelectorAll(`.${l}`)[0];i&&f&&i.removeChild(f)},500)}}};const Lr="ivu-message",xi="ivu-icon",Ei="ivu_message_key_",qn={top:24,duration:1.5,background:!1};let Ca,Ci=1;const jd={info:"ios-information-circle",success:"ios-checkmark-circle",warning:"ios-alert",error:"ios-close-circle",loading:"ios-loading"},Fo="move-up";function Wo(){return Ca=Ca||Dr.newInstance({prefixCls:Lr,styles:{top:`${qn.top}px`},transitionName:Fo}),Ca}function $d(e="",t=qn.duration,n,a=function(){},i=!1,o=function(){},l=qn.background){const f=jd[n],p=n==="loading"?" ivu-load-loop":"";let m=Wo();return m.notice({name:`${Ei}${Ci}`,duration:t,styles:{},transitionName:Fo,content:`
            <div class="${Lr}-custom-content ${Lr}-${n}">
                <i class="${xi} ${xi}-${f} ${p}"></i>
                <span>${e}</span>
            </div>
        `,render:o,onClose:a,closable:i,type:"message",msgType:n,background:l}),function(){let y=Ci++;return function(){m.remove(`${Ei}${y}`)}}()}const Wt={name:"Message",info(e){return this.message("info",e)},success(e){return this.message("success",e)},warning(e){return this.message("warning",e)},error(e){return this.message("error",e)},loading(e){return this.message("loading",e)},message(e,t){return typeof t=="string"&&(t={content:t}),$d(t.content,t.duration,e,t.onClose,t.closable,t.render,t.background)},config(e){(e.top||e.top===0)&&(qn.top=e.top),(e.duration||e.duration===0)&&(qn.duration=e.duration),e.background&&(qn.background=e.background)},destroy(){let e=Wo();Ca=null,e.destroy("ivu-message")}},_o={props:{lockScroll:{type:Boolean,default:!0}},methods:{checkScrollBar(){if(!Fe)return;let e=window.innerWidth;if(!e){const t=document.documentElement.getBoundingClientRect();e=t.right-Math.abs(t.left)}this.bodyIsOverflowing=document.body.clientWidth<e,this.bodyIsOverflowing&&(this.scrollBarWidth=us())},checkMaskInVisible(){let e=Fe?document.getElementsByClassName("ivu-modal-mask")||[]:[];return Array.from(e).every(t=>t.style.display==="none"||t.classList.contains("fade-leave-to"))},setScrollBar(){Fe&&this.bodyIsOverflowing&&this.scrollBarWidth!==void 0&&(document.body.style.paddingRight=`${this.scrollBarWidth}px`)},resetScrollBar(){Fe&&(document.body.style.paddingRight="")},addScrollEffect(){this.lockScroll&&(this.checkScrollBar(),this.setScrollBar(),Fe&&(document.body.style.overflow="hidden"))},removeScrollEffect(){this.lockScroll&&Fe&&this.checkMaskInVisible()&&(document.body.style.overflow="",this.resetScrollBar())}}},at="ivu-drawer",Yd={name:"Drawer",mixins:[_o],components:{Icon:_t},emits:["on-close","on-resize-width","on-visible-change","update:modelValue","on-drag"],provide(){return{DrawerInstance:this}},props:{modelValue:{type:Boolean,default:!1},title:{type:String},width:{type:[Number,String],default:256},height:{type:[Number,String],default:256},closable:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},mask:{type:Boolean,default:!0},maskStyle:{type:Object},styles:{type:Object},scrollable:{type:Boolean,default:!1},placement:{validator(e){return Te(e,["left","right","top","bottom"])},default:"right"},zIndex:{type:Number,default:1e3},transfer:{type:Boolean,default(){const e=Xe().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.transfer===""?!0:e.$VIEWUI.transfer}},className:{type:String},inner:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},beforeClose:Function},data(){return{prefixCls:at,visible:this.modelValue,wrapShow:!1,showHead:!0,canMove:!1,dragWidth:this.width,dragHeight:this.height,wrapperWidth:this.width,wrapperHeight:this.height,wrapperLeft:0,minWidth:256,minHeight:256,id:Wr(6),tableList:[],sliderList:[]}},computed:{wrapClasses(){return[`${at}-wrap`,{[`${at}-hidden`]:!this.wrapShow,[`${this.className}`]:!!this.className,[`${at}-no-mask`]:!this.mask,[`${at}-wrap-inner`]:this.inner,[`${at}-wrap-dragging`]:this.canMove}]},wrapStyles(){return{zIndex:this.zIndex}},mainStyles(){let e={};if(this.placement==="left"||this.placement==="right"){const t=parseInt(this.dragWidth),n={width:t<=100?`${t}%`:`${t}px`};Object.assign(e,n)}else{const t=parseInt(this.dragHeight),n={height:t<=100?`${t}%`:`${t}px`};Object.assign(e,n)}return e},contentClasses(){return[`${at}-content`,{[`${at}-content-no-mask`]:!this.mask}]},classes(){return[`${at}`,`${at}-${this.placement}`,{[`${at}-no-header`]:!this.showHead,[`${at}-inner`]:this.inner}]},maskClasses(){return[`${at}-mask`,{[`${at}-mask-inner`]:this.inner}]},transitionName(){return this.placement==="left"||this.placement==="right"?`move-${this.placement}`:this.placement==="top"?"move-up":"move-down"}},methods:{close(){if(!this.beforeClose)return this.handleClose();const e=this.beforeClose();e&&e.then?e.then(()=>{this.handleClose()}):this.handleClose()},handleClose(){this.visible=!1,this.$emit("update:modelValue",!1),this.$emit("on-close")},handleMask(){this.maskClosable&&this.mask&&this.close()},handleWrapClick(e){const t=e.target.getAttribute("class");t&&t.indexOf(`${at}-wrap`)>-1&&this.handleMask()},handleMousemove(e){if(!this.canMove||!this.draggable)return;this.handleSetWrapperWidth();const t=e.pageX-this.wrapperLeft;let n=this.placement==="right"?this.wrapperWidth-t:t;n=Math.max(n,parseFloat(this.minWidth)),e.atMin=n===parseFloat(this.minWidth),n<=100&&(n=n/this.wrapperWidth*100),this.dragWidth=n,this.$emit("on-resize-width",parseInt(this.dragWidth)),this.$emit("on-drag","dragging",parseInt(this.dragWidth))},handleSetWrapperWidth(){const{width:e,left:t}=this.$refs.drawer.getBoundingClientRect();this.wrapperWidth=e,this.wrapperLeft=t},handleMouseup(){this.draggable&&(this.canMove=!1,this.$emit("on-drag","end"))},handleTriggerMousedown(){this.canMove=!0,window.getSelection().removeAllRanges(),this.$emit("on-drag","start")},addDrawer(){const e=this.$root;e.drawerList||(e.drawerList=[]),e.drawerList.push({id:this.id,drawer:this})},removeDrawer(){const e=this.$root;if(!e.drawerList)return;const t=e.drawerList.findIndex(n=>n.id===this.id);e.drawerList.splice(t,1)}},mounted(){this.visible&&(this.wrapShow=!0);let e=!0;this.$slots.header===void 0&&!this.title&&(e=!1),this.showHead=e,this.addDrawer(),De(document,"mousemove",this.handleMousemove),De(document,"mouseup",this.handleMouseup),this.handleSetWrapperWidth()},beforeUnmount(){this.removeDrawer(),Et(document,"mousemove",this.handleMousemove),Et(document,"mouseup",this.handleMouseup),this.removeScrollEffect()},watch:{modelValue(e){this.visible=e},visible(e){e===!1?this.timer=setTimeout(()=>{this.wrapShow=!1,this.$root.drawerList.map(i=>i.drawer).filter(i=>i.id!==this.id).some(i=>i.visible&&!i.scrollable)||this.removeScrollEffect()},300):(this.timer&&clearTimeout(this.timer),this.wrapShow=!0,this.scrollable||this.addScrollEffect()),this.tableList.forEach(t=>{t.table.handleOnVisibleChange(e)}),this.sliderList.forEach(t=>{t.slider.handleOnVisibleChange(e)}),this.$emit("on-visible-change",e)},scrollable(e){e?this.removeScrollEffect():this.addScrollEffect()},title(e){this.$slots.header===void 0&&(this.showHead=!!e)},width(e){this.dragWidth=e},height(e){this.dragHeight=e}}},Kd={ref:"drawer"};function Xd(e,t,n,a,i,o){const l=kt("Icon");return $(),Gt(Oa,{to:"body",disabled:!n.transfer},[G("div",Kd,[V(wn,{name:"fade"},{default:Me(()=>[n.mask?Xt(($(),Z("div",{key:0,class:Q(o.maskClasses),style:Ie(n.maskStyle),onClick:t[0]||(t[0]=(...f)=>o.handleMask&&o.handleMask(...f))},null,6)),[[dn,i.visible]]):ge("",!0)]),_:1}),G("div",{class:Q(o.wrapClasses),style:Ie(o.wrapStyles),onClick:t[3]||(t[3]=(...f)=>o.handleWrapClick&&o.handleWrapClick(...f))},[V(wn,{name:o.transitionName},{default:Me(()=>[Xt(G("div",{class:Q(o.classes),style:Ie(o.mainStyles)},[G("div",{class:Q(o.contentClasses),ref:"content"},[n.closable?($(),Z("a",{key:0,class:"ivu-drawer-close",onClick:t[1]||(t[1]=(...f)=>o.close&&o.close(...f))},[Ae(e.$slots,"close",{},()=>[V(l,{type:"ios-close"})])])):ge("",!0),i.showHead?($(),Z("div",{key:1,class:Q([i.prefixCls+"-header"])},[Ae(e.$slots,"header",{},()=>[G("div",{class:Q([i.prefixCls+"-header-inner"])},He(n.title),3)])],2)):ge("",!0),G("div",{class:Q([i.prefixCls+"-body"]),style:Ie(n.styles)},[Ae(e.$slots,"default")],6)],2),n.draggable&&(n.placement==="left"||n.placement==="right")?($(),Z("div",{key:0,class:Q(["ivu-drawer-drag","ivu-drawer-drag-"+n.placement]),onMousedown:t[2]||(t[2]=(...f)=>o.handleTriggerMousedown&&o.handleTriggerMousedown(...f))},[Ae(e.$slots,"trigger",{},()=>[t[4]||(t[4]=G("div",{class:"ivu-drawer-drag-move-trigger"},[G("div",{class:"ivu-drawer-drag-move-trigger-point"},[G("i"),G("i"),G("i"),G("i"),G("i")])],-1))])],34)):ge("",!0)],6),[[dn,i.visible]])]),_:3},8,["name"])],6)],512)],8,["disabled"])}const Gd=je(Yd,[["render",Xd]]);var or={exports:{}},ki;function Qo(){if(ki)return or.exports;ki=1;var e=or.exports={};return e.forEach=function(t,n){for(var a=0;a<t.length;a++){var i=n(t[a]);if(i)return i}},or.exports}var lr,Bi;function Jd(){return Bi||(Bi=1,lr=function(e){var t=e.stateHandler.getState;function n(l){var f=t(l);return f&&!!f.isDetectable}function a(l){t(l).isDetectable=!0}function i(l){return!!t(l).busy}function o(l,f){t(l).busy=!!f}return{isDetectable:n,markAsDetectable:a,isBusy:i,markBusy:o}}),lr}var sr,Ii;function Zd(){return Ii||(Ii=1,sr=function(e){var t={};function n(l){var f=e.get(l);return f===void 0?[]:t[f]||[]}function a(l,f){var p=e.get(l);t[p]||(t[p]=[]),t[p].push(f)}function i(l,f){for(var p=n(l),m=0,y=p.length;m<y;++m)if(p[m]===f){p.splice(m,1);break}}function o(l){var f=n(l);f&&(f.length=0)}return{get:n,add:a,removeListener:i,removeAllListeners:o}}),sr}var dr,Si;function ep(){return Si||(Si=1,dr=function(){var e=1;function t(){return e++}return{generate:t}}),dr}var pr,Ti;function tp(){return Ti||(Ti=1,pr=function(e){var t=e.idGenerator,n=e.stateHandler.getState;function a(o){var l=n(o);return l&&l.id!==void 0?l.id:null}function i(o){var l=n(o);if(!l)throw new Error("setId required the element to have a resize detection state.");var f=t.generate();return l.id=f,f}return{get:a,set:i}}),pr}var cr,Di;function np(){return Di||(Di=1,cr=function(e){function t(){}var n={log:t,warn:t,error:t};if(!e&&window.console){var a=function(i,o){i[o]=function(){var f=console[o];if(f.apply)f.apply(console,arguments);else for(var p=0;p<arguments.length;p++)f(arguments[p])}};a(n,"log"),a(n,"warn"),a(n,"error")}return n}),cr}var ur={exports:{}},Li;function Uo(){if(Li)return ur.exports;Li=1;var e=ur.exports={};return e.isIE=function(t){function n(){var i=navigator.userAgent.toLowerCase();return i.indexOf("msie")!==-1||i.indexOf("trident")!==-1||i.indexOf(" edge/")!==-1}if(!n())return!1;if(!t)return!0;var a=function(){var i,o=3,l=document.createElement("div"),f=l.getElementsByTagName("i");do l.innerHTML="<!--[if gt IE "+ ++o+"]><i></i><![endif]-->";while(f[0]);return o>4?o:i}();return t===a},e.isLegacyOpera=function(){return!!window.opera},ur.exports}var hr={exports:{}},zi;function ap(){if(zi)return hr.exports;zi=1;var e=hr.exports={};e.getOption=t;function t(n,a,i){var o=n[a];return o==null&&i!==void 0?i:o}return hr.exports}var fr,Ni;function rp(){if(Ni)return fr;Ni=1;var e=ap();fr=function(a){a=a||{};var i=a.reporter,o=e.getOption(a,"async",!0),l=e.getOption(a,"auto",!0);l&&!o&&(i&&i.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."),o=!0);var f=t(),p,m=!1;function y(E,N){!m&&l&&o&&f.size()===0&&C(),f.add(E,N)}function g(){for(m=!0;f.size();){var E=f;f=t(),E.process()}m=!1}function d(E){m||(E===void 0&&(E=o),p&&(k(p),p=null),E?C():g())}function C(){p=b(g)}function k(E){var N=clearTimeout;return N(E)}function b(E){var N=function(T){return setTimeout(T,0)};return N(E)}return{add:y,force:d}};function t(){var n={},a=0,i=0,o=0;function l(m,y){y||(y=m,m=0),m>i?i=m:m<o&&(o=m),n[m]||(n[m]=[]),n[m].push(y),a++}function f(){for(var m=o;m<=i;m++)for(var y=n[m],g=0;g<y.length;g++){var d=y[g];d()}}function p(){return a}return{add:l,process:f,size:p}}return fr}var Ar,Oi;function ip(){if(Oi)return Ar;Oi=1;var e="_erd";function t(i){return i[e]={},n(i)}function n(i){return i[e]}function a(i){delete i[e]}return Ar={initState:t,getState:n,cleanState:a},Ar}var mr,Mi;function op(){if(Mi)return mr;Mi=1;var e=Uo();return mr=function(t){t=t||{};var n=t.reporter,a=t.batchProcessor,i=t.stateHandler.getState;if(!n)throw new Error("Missing required dependency: reporter.");function o(y,g){function d(){g(y)}if(e.isIE(8))i(y).object={proxy:d},y.attachEvent("onresize",d);else{var C=p(y);if(!C)throw new Error("Element is not detectable by this strategy.");C.contentDocument.defaultView.addEventListener("resize",d)}}function l(y){var g=t.important?" !important; ":"; ";return(y.join(g)+g).trim()}function f(y,g,d){d||(d=g,g=y,y=null),y=y||{};function C(k,b){var E=l(["display: block","position: absolute","top: 0","left: 0","width: 100%","height: 100%","border: none","padding: 0","margin: 0","opacity: 0","z-index: -1000","pointer-events: none"]),N=!1,T=window.getComputedStyle(k),I=k.offsetWidth,L=k.offsetHeight;i(k).startSize={width:I,height:L};function P(){function S(){if(T.position==="static"){k.style.setProperty("position","relative",y.important?"important":"");var H=function(ae,le,Y,z){function ee(xe){return xe.replace(/[^-\d\.]/g,"")}var ie=Y[z];ie!=="auto"&&ee(ie)!=="0"&&(ae.warn("An element that is positioned static has style."+z+"="+ie+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+z+" will be set to 0. Element: ",le),le.style.setProperty(z,"0",y.important?"important":""))};H(n,k,T,"top"),H(n,k,T,"right"),H(n,k,T,"bottom"),H(n,k,T,"left")}}function F(){N||S();function H(le,Y){if(!le.contentDocument){var z=i(le);z.checkForObjectDocumentTimeoutId&&window.clearTimeout(z.checkForObjectDocumentTimeoutId),z.checkForObjectDocumentTimeoutId=setTimeout(function(){z.checkForObjectDocumentTimeoutId=0,H(le,Y)},100);return}Y(le.contentDocument)}var ae=this;H(ae,function(Y){b(k)})}T.position!==""&&(S(),N=!0);var O=document.createElement("object");O.style.cssText=E,O.tabIndex=-1,O.type="text/html",O.setAttribute("aria-hidden","true"),O.onload=F,e.isIE()||(O.data="about:blank"),i(k)&&(k.appendChild(O),i(k).object=O,e.isIE()&&(O.data="about:blank"))}a?a.add(P):P()}e.isIE(8)?d(g):C(g,d)}function p(y){return i(y).object}function m(y){if(i(y)){var g=p(y);g&&(e.isIE(8)?y.detachEvent("onresize",g.proxy):y.removeChild(g),i(y).checkForObjectDocumentTimeoutId&&window.clearTimeout(i(y).checkForObjectDocumentTimeoutId),delete i(y).object)}}return{makeDetectable:f,addListener:o,uninstall:m}},mr}var yr,Ri;function lp(){if(Ri)return yr;Ri=1;var e=Qo().forEach;return yr=function(t){t=t||{};var n=t.reporter,a=t.batchProcessor,i=t.stateHandler.getState,o=t.idHandler;if(!a)throw new Error("Missing required dependency: batchProcessor");if(!n)throw new Error("Missing required dependency: reporter.");var l=g(),f="erd_scroll_detection_scrollbar_style",p="erd_scroll_detection_container";function m(P){d(P,f,p)}m(window.document);function y(P){var S=t.important?" !important; ":"; ";return(P.join(S)+S).trim()}function g(){var P=500,S=500,F=document.createElement("div");F.style.cssText=y(["position: absolute","width: "+P*2+"px","height: "+S*2+"px","visibility: hidden","margin: 0","padding: 0"]);var O=document.createElement("div");O.style.cssText=y(["position: absolute","width: "+P+"px","height: "+S+"px","overflow: scroll","visibility: none","top: "+-P*3+"px","left: "+-S*3+"px","visibility: hidden","margin: 0","padding: 0"]),O.appendChild(F),document.body.insertBefore(O,document.body.firstChild);var H=P-O.clientWidth,ae=S-O.clientHeight;return document.body.removeChild(O),{width:H,height:ae}}function d(P,S,F){function O(Y,z){z=z||function(ie){P.head.appendChild(ie)};var ee=P.createElement("style");return ee.innerHTML=Y,ee.id=S,z(ee),ee}if(!P.getElementById(S)){var H=F+"_animation",ae=F+"_animation_active",le=`/* Created by the element-resize-detector library. */
`;le+="."+F+" > div::-webkit-scrollbar { "+y(["display: none"])+` }

`,le+="."+ae+" { "+y(["-webkit-animation-duration: 0.1s","animation-duration: 0.1s","-webkit-animation-name: "+H,"animation-name: "+H])+` }
`,le+="@-webkit-keyframes "+H+` { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }
`,le+="@keyframes "+H+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }",O(le)}}function C(P){P.className+=" "+p+"_animation_active"}function k(P,S,F){if(P.addEventListener)P.addEventListener(S,F);else if(P.attachEvent)P.attachEvent("on"+S,F);else return n.error("[scroll] Don't know how to add event listeners.")}function b(P,S,F){if(P.removeEventListener)P.removeEventListener(S,F);else if(P.detachEvent)P.detachEvent("on"+S,F);else return n.error("[scroll] Don't know how to remove event listeners.")}function E(P){return i(P).container.childNodes[0].childNodes[0].childNodes[0]}function N(P){return i(P).container.childNodes[0].childNodes[0].childNodes[1]}function T(P,S){var F=i(P).listeners;if(!F.push)throw new Error("Cannot add listener to an element that is not detectable.");i(P).listeners.push(S)}function I(P,S,F){F||(F=S,S=P,P=null),P=P||{};function O(){if(P.debug){var X=Array.prototype.slice.call(arguments);if(X.unshift(o.get(S),"Scroll: "),n.log.apply)n.log.apply(null,X);else for(var ce=0;ce<X.length;ce++)n.log(X[ce])}}function H(X){function ce(Ce){var Ge=Ce.getRootNode&&Ce.getRootNode().contains(Ce);return Ce===Ce.ownerDocument.body||Ce.ownerDocument.body.contains(Ce)||Ge}return!ce(X)||window.getComputedStyle(X)===null}function ae(X){var ce=i(X).container.childNodes[0],Ce=window.getComputedStyle(ce);return!Ce.width||Ce.width.indexOf("px")===-1}function le(){var X=window.getComputedStyle(S),ce={};return ce.position=X.position,ce.width=S.offsetWidth,ce.height=S.offsetHeight,ce.top=X.top,ce.right=X.right,ce.bottom=X.bottom,ce.left=X.left,ce.widthCSS=X.width,ce.heightCSS=X.height,ce}function Y(){var X=le();i(S).startSize={width:X.width,height:X.height},O("Element start size",i(S).startSize)}function z(){i(S).listeners=[]}function ee(){if(O("storeStyle invoked."),!i(S)){O("Aborting because element has been uninstalled");return}var X=le();i(S).style=X}function ie(X,ce,Ce){i(X).lastWidth=ce,i(X).lastHeight=Ce}function xe(X){return E(X).childNodes[0]}function se(){return 2*l.width+1}function U(){return 2*l.height+1}function ye(X){return X+10+se()}function $e(X){return X+10+U()}function rt(X){return X*2+se()}function tt(X){return X*2+U()}function Bt(X,ce,Ce){var Ge=E(X),it=N(X),Mt=ye(ce),Rt=$e(Ce),Je=rt(ce),be=tt(Ce);Ge.scrollLeft=Mt,Ge.scrollTop=Rt,it.scrollLeft=Je,it.scrollTop=be}function nt(){var X=i(S).container;if(!X){X=document.createElement("div"),X.className=p,X.style.cssText=y(["visibility: hidden","display: inline","width: 0px","height: 0px","z-index: -1","overflow: hidden","margin: 0","padding: 0"]),i(S).container=X,C(X),S.appendChild(X);var ce=function(){i(S).onRendered&&i(S).onRendered()};k(X,"animationstart",ce),i(S).onAnimationStart=ce}return X}function _e(){function X(){var Pe=i(S).style;if(Pe.position==="static"){S.style.setProperty("position","relative",P.important?"important":"");var ot=function(gt,bt,hn,en){function _n(Qn){return Qn.replace(/[^-\d\.]/g,"")}var fn=hn[en];fn!=="auto"&&_n(fn)!=="0"&&(gt.warn("An element that is positioned static has style."+en+"="+fn+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+en+" will be set to 0. Element: ",bt),bt.style[en]=0)};ot(n,S,Pe,"top"),ot(n,S,Pe,"right"),ot(n,S,Pe,"bottom"),ot(n,S,Pe,"left")}}function ce(Pe,ot,gt,bt){return Pe=Pe?Pe+"px":"0",ot=ot?ot+"px":"0",gt=gt?gt+"px":"0",bt=bt?bt+"px":"0",["left: "+Pe,"top: "+ot,"right: "+bt,"bottom: "+gt]}if(O("Injecting elements"),!i(S)){O("Aborting because element has been uninstalled");return}X();var Ce=i(S).container;Ce||(Ce=nt());var Ge=l.width,it=l.height,Mt=y(["position: absolute","flex: none","overflow: hidden","z-index: -1","visibility: hidden","width: 100%","height: 100%","left: 0px","top: 0px"]),Rt=y(["position: absolute","flex: none","overflow: hidden","z-index: -1","visibility: hidden"].concat(ce(-(1+Ge),-(1+it),-it,-Ge))),Je=y(["position: absolute","flex: none","overflow: scroll","z-index: -1","visibility: hidden","width: 100%","height: 100%"]),be=y(["position: absolute","flex: none","overflow: scroll","z-index: -1","visibility: hidden","width: 100%","height: 100%"]),Ye=y(["position: absolute","left: 0","top: 0"]),pt=y(["position: absolute","width: 200%","height: 200%"]),ct=document.createElement("div"),ut=document.createElement("div"),qt=document.createElement("div"),Cn=document.createElement("div"),Zt=document.createElement("div"),kn=document.createElement("div");ct.dir="ltr",ct.style.cssText=Mt,ct.className=p,ut.className=p,ut.style.cssText=Rt,qt.style.cssText=Je,Cn.style.cssText=Ye,Zt.style.cssText=be,kn.style.cssText=pt,qt.appendChild(Cn),Zt.appendChild(kn),ut.appendChild(qt),ut.appendChild(Zt),ct.appendChild(ut),Ce.appendChild(ct);function un(){var Pe=i(S);Pe&&Pe.onExpand?Pe.onExpand():O("Aborting expand scroll handler: element has been uninstalled")}function Bn(){var Pe=i(S);Pe&&Pe.onShrink?Pe.onShrink():O("Aborting shrink scroll handler: element has been uninstalled")}k(qt,"scroll",un),k(Zt,"scroll",Bn),i(S).onExpandScroll=un,i(S).onShrinkScroll=Bn}function Ze(){function X(Je,be,Ye){var pt=xe(Je),ct=ye(be),ut=$e(Ye);pt.style.setProperty("width",ct+"px",P.important?"important":""),pt.style.setProperty("height",ut+"px",P.important?"important":"")}function ce(Je){var be=S.offsetWidth,Ye=S.offsetHeight,pt=be!==i(S).lastWidth||Ye!==i(S).lastHeight;O("Storing current size",be,Ye),ie(S,be,Ye),a.add(0,function(){if(pt){if(!i(S)){O("Aborting because element has been uninstalled");return}if(!Ce()){O("Aborting because element container has not been initialized");return}if(P.debug){var ut=S.offsetWidth,qt=S.offsetHeight;(ut!==be||qt!==Ye)&&n.warn(o.get(S),"Scroll: Size changed before updating detector elements.")}X(S,be,Ye)}}),a.add(1,function(){if(!i(S)){O("Aborting because element has been uninstalled");return}if(!Ce()){O("Aborting because element container has not been initialized");return}Bt(S,be,Ye)}),pt&&Je&&a.add(2,function(){if(!i(S)){O("Aborting because element has been uninstalled");return}if(!Ce()){O("Aborting because element container has not been initialized");return}Je()})}function Ce(){return!!i(S).container}function Ge(){function Je(){return i(S).lastNotifiedWidth===void 0}O("notifyListenersIfNeeded invoked");var be=i(S);if(Je()&&be.lastWidth===be.startSize.width&&be.lastHeight===be.startSize.height)return O("Not notifying: Size is the same as the start size, and there has been no notification yet.");if(be.lastWidth===be.lastNotifiedWidth&&be.lastHeight===be.lastNotifiedHeight)return O("Not notifying: Size already notified");O("Current size not notified, notifying..."),be.lastNotifiedWidth=be.lastWidth,be.lastNotifiedHeight=be.lastHeight,e(i(S).listeners,function(Ye){Ye(S)})}function it(){if(O("startanimation triggered."),ae(S)){O("Ignoring since element is still unrendered...");return}O("Element rendered.");var Je=E(S),be=N(S);(Je.scrollLeft===0||Je.scrollTop===0||be.scrollLeft===0||be.scrollTop===0)&&(O("Scrollbars out of sync. Updating detector elements..."),ce(Ge))}function Mt(){if(O("Scroll detected."),ae(S)){O("Scroll event fired while unrendered. Ignoring...");return}ce(Ge)}if(O("registerListenersAndPositionElements invoked."),!i(S)){O("Aborting because element has been uninstalled");return}i(S).onRendered=it,i(S).onExpand=Mt,i(S).onShrink=Mt;var Rt=i(S).style;X(S,Rt.width,Rt.height)}function qe(){if(O("finalizeDomMutation invoked."),!i(S)){O("Aborting because element has been uninstalled");return}var X=i(S).style;ie(S,X.width,X.height),Bt(S,X.width,X.height)}function Le(){F(S)}function Ot(){O("Installing..."),z(),Y(),a.add(0,ee),a.add(1,_e),a.add(2,Ze),a.add(3,qe),a.add(4,Le)}O("Making detectable..."),H(S)?(O("Element is detached"),nt(),O("Waiting until element is attached..."),i(S).onRendered=function(){O("Element is now attached"),Ot()}):Ot()}function L(P){var S=i(P);S&&(S.onExpandScroll&&b(E(P),"scroll",S.onExpandScroll),S.onShrinkScroll&&b(N(P),"scroll",S.onShrinkScroll),S.onAnimationStart&&b(S.container,"animationstart",S.onAnimationStart),S.container&&P.removeChild(S.container))}return{makeDetectable:I,addListener:T,uninstall:L,initDocument:m}},yr}var gr,qi;function sp(){if(qi)return gr;qi=1;var e=Qo().forEach,t=Jd(),n=Zd(),a=ep(),i=tp(),o=np(),l=Uo(),f=rp(),p=ip(),m=op(),y=lp();function g(b){return Array.isArray(b)||b.length!==void 0}function d(b){if(Array.isArray(b))return b;var E=[];return e(b,function(N){E.push(N)}),E}function C(b){return b&&b.nodeType===1}gr=function(b){b=b||{};var E;if(b.idHandler)E={get:function(se){return b.idHandler.get(se,!0)},set:b.idHandler.set};else{var N=a(),T=i({idGenerator:N,stateHandler:p});E=T}var I=b.reporter;if(!I){var L=I===!1;I=o(L)}var P=k(b,"batchProcessor",f({reporter:I})),S={};S.callOnAdd=!!k(b,"callOnAdd",!0),S.debug=!!k(b,"debug",!1);var F=n(E),O=t({stateHandler:p}),H,ae=k(b,"strategy","object"),le=k(b,"important",!1),Y={reporter:I,batchProcessor:P,stateHandler:p,idHandler:E,important:le};if(ae==="scroll"&&(l.isLegacyOpera()?(I.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."),ae="object"):l.isIE(9)&&(I.warn("Scroll strategy is not supported on IE9. Changing to object strategy."),ae="object")),ae==="scroll")H=y(Y);else if(ae==="object")H=m(Y);else throw new Error("Invalid strategy name: "+ae);var z={};function ee(se,U,ye){function $e(Ze){var qe=F.get(Ze);e(qe,function(Ot){Ot(Ze)})}function rt(Ze,qe,Le){F.add(qe,Le),Ze&&Le(qe)}if(ye||(ye=U,U=se,se={}),!U)throw new Error("At least one element required.");if(!ye)throw new Error("Listener required.");if(C(U))U=[U];else if(g(U))U=d(U);else return I.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");var tt=0,Bt=k(se,"callOnAdd",S.callOnAdd),nt=k(se,"onReady",function(){}),_e=k(se,"debug",S.debug);e(U,function(qe){p.getState(qe)||(p.initState(qe),E.set(qe));var Le=E.get(qe);if(_e&&I.log("Attaching listener to element",Le,qe),!O.isDetectable(qe)){if(_e&&I.log(Le,"Not detectable."),O.isBusy(qe)){_e&&I.log(Le,"System busy making it detectable"),rt(Bt,qe,ye),z[Le]=z[Le]||[],z[Le].push(function(){tt++,tt===U.length&&nt()});return}return _e&&I.log(Le,"Making detectable..."),O.markBusy(qe,!0),H.makeDetectable({debug:_e,important:le},qe,function(X){if(_e&&I.log(Le,"onElementDetectable"),p.getState(X)){O.markAsDetectable(X),O.markBusy(X,!1),H.addListener(X,$e),rt(Bt,X,ye);var ce=p.getState(X);if(ce&&ce.startSize){var Ce=X.offsetWidth,Ge=X.offsetHeight;(ce.startSize.width!==Ce||ce.startSize.height!==Ge)&&$e(X)}z[Le]&&e(z[Le],function(it){it()})}else _e&&I.log(Le,"Element uninstalled before being detectable.");delete z[Le],tt++,tt===U.length&&nt()})}_e&&I.log(Le,"Already detecable, adding listener."),rt(Bt,qe,ye),tt++}),tt===U.length&&nt()}function ie(se){if(!se)return I.error("At least one element is required.");if(C(se))se=[se];else if(g(se))se=d(se);else return I.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");e(se,function(U){F.removeAllListeners(U),H.uninstall(U),p.cleanState(U)})}function xe(se){H.initDocument&&H.initDocument(se)}return{listenTo:ee,removeListener:F.removeListener,removeAllListeners:F.removeAllListeners,uninstall:ie,initDocument:xe}};function k(b,E,N){var T=b[E];return T==null&&N!==void 0?N:T}return gr}var dp=sp();const pp=Qr(dp),et="ivu-input-number",fa="ivu-icon";function Aa(e,t){let n,a,i;try{n=e.toString().split(".")[1].length}catch{n=0}try{a=t.toString().split(".")[1].length}catch{a=0}return i=Math.pow(10,Math.max(n,a)),(Math.round(e*i)+Math.round(t*i))/i}const cp={name:"InputNumber",mixins:[En],emits:["on-change","on-focus","on-blur","update:modelValue"],props:{max:{type:Number,default:1/0},min:{type:Number,default:-1/0},step:{type:Number,default:1},activeChange:{type:Boolean,default:!0},modelValue:{type:Number,default:1},size:{validator(e){return Te(e,["small","large","default"])},default(){const e=Xe().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.size===""?"default":e.$VIEWUI.size}},disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},editable:{type:Boolean,default:!0},name:{type:String},precision:{type:Number},elementId:{type:String},formatter:{type:Function},parser:{type:Function},placeholder:{type:String,default:""},controlsOutside:{type:Boolean,default:!1}},data(){return{focused:!1,upDisabled:!1,downDisabled:!1,currentValue:this.modelValue}},computed:{wrapClasses(){return[`${et}`,{[`${et}-${this.size}`]:!!this.size,[`${et}-disabled`]:this.itemDisabled,[`${et}-focused`]:this.focused,[`${et}-controls-outside`]:this.controlsOutside}]},handlerClasses(){return`${et}-handler-wrap`},upClasses(){return[`${et}-handler`,`${et}-handler-up`,{[`${et}-handler-up-disabled`]:this.upDisabled}]},innerUpClasses(){return`${et}-handler-up-inner ${fa} ${fa}-ios-arrow-up`},downClasses(){return[`${et}-handler`,`${et}-handler-down`,{[`${et}-handler-down-disabled`]:this.downDisabled}]},innerDownClasses(){return`${et}-handler-down-inner ${fa} ${fa}-ios-arrow-down`},inputWrapClasses(){return`${et}-input-wrap`},inputClasses(){return`${et}-input`},precisionValue(){return this.currentValue?this.precision?this.currentValue.toFixed(this.precision):this.currentValue:this.currentValue},formatterValue(){return this.formatter&&this.precisionValue!==null?this.formatter(this.precisionValue):this.precisionValue}},methods:{preventDefault(e){e.preventDefault()},up(e){const t=Number(e.target.value);if(this.upDisabled&&isNaN(t))return!1;this.changeStep("up",e)},down(e){const t=Number(e.target.value);if(this.downDisabled&&isNaN(t))return!1;this.changeStep("down",e)},changeStep(e,t){if(this.itemDisabled||this.readonly)return!1;const n=Number(t.target.value);let a=Number(this.currentValue);const i=Number(this.step);if(isNaN(a))return!1;if(!isNaN(n)){if(e==="up")if(Aa(n,i)<=this.max)a=n;else return!1;else if(e==="down")if(Aa(n,-i)>=this.min)a=n;else return!1}e==="up"?a=Aa(a,i):e==="down"&&(a=Aa(a,-i)),this.setValue(a)},setValue(e){e&&!isNaN(this.precision)&&(e=Number(Number(e).toFixed(this.precision)));const{min:t,max:n}=this;e!==null&&(e>n?e=n:e<t&&(e=t)),Ct(()=>{this.currentValue=e,this.$emit("update:modelValue",e),this.$emit("on-change",e),this.handleFormItemChange("change",e)})},focus(e){this.focused=!0,this.$emit("on-focus",e)},blur(){this.focused=!1,this.$emit("on-blur"),Sr(this,["DatePicker","TimePicker","Cascader","Search"])||this.handleFormItemChange("blur",this.currentValue)},keyDown(e){e.keyCode===38?(e.preventDefault(),this.up(e)):e.keyCode===40&&(e.preventDefault(),this.down(e))},change(e){if(e.type==="change"&&this.activeChange||e.type==="input"&&!this.activeChange)return;let t=e.target.value.trim();if(this.parser&&(t=this.parser(t)),t.length===0){this.setValue(null);return}e.type==="input"&&t.match(/^\-?\.?$|\.$/)||(t=Number(t),isNaN(t)?e.target.value=this.currentValue:(this.currentValue=t,this.setValue(t)))},changeVal(e){if(e=Number(e),isNaN(e))this.upDisabled=!0,this.downDisabled=!0;else{const t=this.step;this.upDisabled=e+t>this.max,this.downDisabled=e-t<this.min}}},mounted(){this.changeVal(this.currentValue)},watch:{modelValue(e){this.currentValue=e},currentValue(e){this.changeVal(e)},min(){this.changeVal(this.currentValue)},max(){this.changeVal(this.currentValue)}}},up=["id","disabled","autofocus","readonly","name","value","placeholder"];function hp(e,t,n,a,i,o){return $(),Z("div",{class:Q(o.wrapClasses)},[n.controlsOutside?ge("",!0):($(),Z("div",{key:0,class:Q(o.handlerClasses)},[G("a",{onClick:t[1]||(t[1]=(...l)=>o.up&&o.up(...l)),class:Q(o.upClasses)},[G("span",{class:Q(o.innerUpClasses),onClick:t[0]||(t[0]=(...l)=>o.preventDefault&&o.preventDefault(...l))},null,2)],2),G("a",{onClick:t[3]||(t[3]=(...l)=>o.down&&o.down(...l)),class:Q(o.downClasses)},[G("span",{class:Q(o.innerDownClasses),onClick:t[2]||(t[2]=(...l)=>o.preventDefault&&o.preventDefault(...l))},null,2)],2)],2)),n.controlsOutside?($(),Z("div",{key:1,class:Q(["ivu-input-number-controls-outside-btn ivu-input-number-controls-outside-down",{"ivu-input-number-controls-outside-btn-disabled":i.downDisabled}]),onClick:t[4]||(t[4]=(...l)=>o.down&&o.down(...l))},t[12]||(t[12]=[G("i",{class:"ivu-icon ivu-icon-ios-remove"},null,-1)]),2)):ge("",!0),n.controlsOutside?($(),Z("div",{key:2,class:Q(["ivu-input-number-controls-outside-btn ivu-input-number-controls-outside-up",{"ivu-input-number-controls-outside-btn-disabled":i.upDisabled}]),onClick:t[5]||(t[5]=(...l)=>o.up&&o.up(...l))},t[13]||(t[13]=[G("i",{class:"ivu-icon ivu-icon-ios-add"},null,-1)]),2)):ge("",!0),G("div",{class:Q(o.inputWrapClasses)},[G("input",{id:n.elementId,class:Q(o.inputClasses),disabled:e.itemDisabled,autocomplete:"off",spellcheck:"false",autofocus:n.autofocus,onFocus:t[6]||(t[6]=(...l)=>o.focus&&o.focus(...l)),onBlur:t[7]||(t[7]=(...l)=>o.blur&&o.blur(...l)),onKeydown:t[8]||(t[8]=sn((...l)=>o.keyDown&&o.keyDown(...l),["stop"])),onInput:t[9]||(t[9]=(...l)=>o.change&&o.change(...l)),onMouseup:t[10]||(t[10]=(...l)=>o.preventDefault&&o.preventDefault(...l)),onChange:t[11]||(t[11]=(...l)=>o.change&&o.change(...l)),readonly:n.readonly||!n.editable,name:n.name,value:o.formatterValue,placeholder:n.placeholder},null,42,up)],2)],2)}const fp=je(cp,[["render",hp]]),st="ivu-modal",Pi={x:null,y:null,dragX:null,dragY:null,dragging:!1,rect:null},Ap={inheritAttrs:!1,name:"Modal",mixins:[Ur,_o],components:{Icon:_t,iButton:Ke},emits:["on-cancel","on-ok","on-hidden","on-visible-change","update:modelValue"],provide(){return{ModalInstance:this}},props:{modelValue:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},maskClosable:{type:Boolean,default(){const e=Xe().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.modal.maskClosable===""?!0:e.$VIEWUI.modal.maskClosable}},title:{type:String},width:{type:[Number,String],default:520},okText:{type:String},cancelText:{type:String},loading:{type:Boolean,default:!1},styles:{type:Object,default(){return{}}},className:{type:String},footerHide:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},transitionNames:{type:Array,default(){return["ease","fade"]}},transfer:{type:Boolean,default(){const e=Xe().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.transfer===""?!0:e.$VIEWUI.transfer}},fullscreen:{type:Boolean,default:!1},mask:{type:Boolean,default:!0},draggable:{type:Boolean,default:!1},sticky:{type:Boolean,default:!1},stickyDistance:{type:Number,default:10},resetDragPosition:{type:Boolean,default:!1},zIndex:{type:Number,default:1e3},beforeClose:Function,render:Function},data(){return{prefixCls:st,wrapShow:!1,showHead:!0,buttonLoading:!1,visible:this.modelValue,dragData:La(Pi),modalIndex:this.handleGetModalIndex(),isMouseTriggerIn:!1,id:Wr(6),tableList:[],sliderList:[]}},computed:{wrapClasses(){return[`${st}-wrap`,{[`${st}-hidden`]:!this.wrapShow,[`${this.className}`]:!!this.className,[`${st}-no-mask`]:!this.showMask}]},wrapStyles(){return{zIndex:this.modalIndex+this.zIndex}},maskClasses(){return`${st}-mask`},classes(){return[`${st}`,{[`${st}-fullscreen`]:this.fullscreen,[`${st}-fullscreen-no-header`]:this.fullscreen&&!this.showHead,[`${st}-fullscreen-no-footer`]:this.fullscreen&&this.footerHide}]},contentClasses(){return[`${st}-content`,{[`${st}-content-no-mask`]:!this.showMask,[`${st}-content-drag`]:this.draggable&&!this.fullscreen,[`${st}-content-dragging`]:this.draggable&&this.dragData.dragging}]},mainStyles(){let e={};const t=parseInt(this.width),n=this.dragData.x!==null?{top:0}:{width:t<=100?`${t}%`:`${t}px`},a=this.styles?this.styles:{};return Object.assign(e,n,a),e},contentStyles(){let e={};if(this.draggable&&!this.fullscreen){const t=this.styles.top?parseFloat(this.styles.top):0,n=this.styles.left?parseFloat(this.styles.left):0;this.dragData.x!==null&&(e.left=`${this.dragData.x-n}px`),this.dragData.y!==null&&(e.top=`${this.dragData.y}px`),this.dragData.y!==null&&(e.top=`${this.dragData.y-t}px`);const a=parseInt(this.width),i={width:a<=100?`${a}%`:`${a}px`};Object.assign(e,i)}return e},localeOkText(){return this.okText===void 0?this.t("i.modal.okText"):this.okText},localeCancelText(){return this.cancelText===void 0?this.t("i.modal.cancelText"):this.cancelText},showMask(){return this.mask}},methods:{close(){if(!this.beforeClose)return this.handleClose();const e=this.beforeClose();e&&e.then?e.then(()=>{this.handleClose()}):this.handleClose()},handleClose(){this.visible=!1,this.$emit("update:modelValue",!1),this.$emit("on-cancel")},handleMask(){this.maskClosable&&this.showMask&&this.close()},handleWrapClick(e){if(this.isMouseTriggerIn){this.isMouseTriggerIn=!1;return}const t=e.target.getAttribute("class");t&&t.indexOf(`${st}-wrap`)>-1&&this.handleMask()},handleMousedown(){this.isMouseTriggerIn=!0},cancel(){this.close()},ok(){this.loading?this.buttonLoading=!0:(this.visible=!1,this.$emit("update:modelValue",!1)),this.$emit("on-ok")},EscClose(e){if(this.visible&&this.closable&&e.keyCode===27){const n=this.$root.modalList.map(a=>a.modal).filter(a=>a.$data.visible&&a.$props.closable).sort((a,i)=>a.$data.modalIndex<i.$data.modalIndex?1:-1)[0];setTimeout(()=>{n.close()},0)}},animationFinish(){this.$emit("on-hidden")},handleMoveStart(e){if(!this.draggable||this.fullscreen)return!1;const n=this.$refs.content.getBoundingClientRect();this.dragData.rect=n,this.dragData.x=n.x||n.left,this.dragData.y=n.y||n.top;const a={x:e.clientX,y:e.clientY};this.dragData.dragX=a.x,this.dragData.dragY=a.y,this.dragData.dragging=!0,De(window,"mousemove",this.handleMoveMove),De(window,"mouseup",this.handleMoveEnd)},handleMoveMove(e){if(!this.dragData.dragging||this.fullscreen)return!1;const t={x:e.clientX,y:e.clientY},n={x:t.x-this.dragData.dragX,y:t.y-this.dragData.dragY};if(Fe&&this.sticky){const a=document.documentElement.clientWidth,i=document.documentElement.clientHeight;this.dragData.x+n.x<=this.stickyDistance&&n.x<0?this.dragData.x=0:this.dragData.x+this.dragData.rect.width-a>-this.stickyDistance&&n.x>0?this.dragData.x=a-this.dragData.rect.width:this.dragData.x+=n.x,this.dragData.y+n.y<=this.stickyDistance&&n.y<0?this.dragData.y=0:this.dragData.y+this.dragData.rect.height-i>-this.stickyDistance&&n.y>0?this.dragData.y=i-this.dragData.rect.height:this.dragData.y+=n.y}else this.dragData.x+=n.x,this.dragData.y+=n.y;this.dragData.dragX=t.x,this.dragData.dragY=t.y},handleMoveEnd(){this.dragData.dragging=!1,Et(window,"mousemove",this.handleMoveMove),Et(window,"mouseup",this.handleMoveEnd)},handleGetModalIndex(){return Ma(),ra},handleClickModal(){if(this.draggable){if(Ea!==this.lastVisibleIndex){this.lastVisibleIndex=Ea;return}this.modalIndex=this.handleGetModalIndex()}},addModal(){const e=this.$root;e.modalList||(e.modalList=[]),e.modalList.push({id:this.id,modal:this})},removeModal(){const e=this.$root;if(!e.modalList)return;const t=e.modalList.findIndex(n=>n.id===this.id);e.modalList.splice(t,1)}},watch:{modelValue(e){this.visible=e},visible(e){e===!1?(this.buttonLoading=!1,this.timer=setTimeout(()=>{this.wrapShow=!1,this.removeScrollEffect()},300)):(this.lastVisible!==e&&(this.modalIndex=this.handleGetModalIndex(),Es()),this.timer&&clearTimeout(this.timer),this.wrapShow=!0,this.scrollable||this.addScrollEffect()),this.tableList.forEach(t=>{t.table.handleOnVisibleChange(e)}),this.sliderList.forEach(t=>{t.slider.handleOnVisibleChange(e)}),this.$emit("on-visible-change",e),this.lastVisible=e,this.lastVisibleIndex=Ea,e&&this.resetDragPosition&&(this.dragData=La(Pi))},loading(e){e||(this.buttonLoading=!1)},scrollable(e){e?this.removeScrollEffect():this.addScrollEffect()},title(e){this.$slots.header===void 0&&(this.showHead=!!e)}},mounted(){this.visible&&(this.wrapShow=!0);let e=!0;this.$slots.header===void 0&&!this.title&&(e=!1),this.showHead=e,this.addModal(),Fe&&document.addEventListener("keydown",this.EscClose)},beforeUnmount(){this.removeModal(),Fe&&document.removeEventListener("keydown",this.EscClose),this.removeScrollEffect()}};function mp(e,t,n,a,i,o){const l=kt("Icon"),f=kt("i-button");return $(),Gt(Oa,{to:"body",disabled:!n.transfer},[V(wn,{name:n.transitionNames[1]},{default:Me(()=>[o.showMask?Xt(($(),Z("div",{key:0,class:Q(o.maskClasses),style:Ie(o.wrapStyles),onClick:t[0]||(t[0]=(...p)=>o.handleMask&&o.handleMask(...p))},null,6)),[[dn,i.visible]]):ge("",!0)]),_:1},8,["name"]),G("div",{class:Q(o.wrapClasses),style:Ie(o.wrapStyles),onClick:t[5]||(t[5]=(...p)=>o.handleWrapClick&&o.handleWrapClick(...p))},[V(wn,{name:n.transitionNames[0],onAfterLeave:o.animationFinish},{default:Me(()=>[Xt(G("div",Do(e.$attrs,{class:o.classes,style:o.mainStyles,onMousedown:t[4]||(t[4]=(...p)=>o.handleMousedown&&o.handleMousedown(...p))}),[G("div",{class:Q(o.contentClasses),ref:"content",style:Ie(o.contentStyles),onClick:t[3]||(t[3]=(...p)=>o.handleClickModal&&o.handleClickModal(...p))},[n.closable?($(),Z("a",{key:0,class:Q([i.prefixCls+"-close"]),onClick:t[1]||(t[1]=(...p)=>o.close&&o.close(...p))},[Ae(e.$slots,"close",{},()=>[V(l,{type:"ios-close"})])],2)):ge("",!0),i.showHead?($(),Z("div",{key:1,class:Q([i.prefixCls+"-header"]),onMousedown:t[2]||(t[2]=(...p)=>o.handleMoveStart&&o.handleMoveStart(...p))},[Ae(e.$slots,"header",{},()=>[G("div",{class:Q([i.prefixCls+"-header-inner"])},He(n.title),3)])],34)):ge("",!0),G("div",{class:Q([i.prefixCls+"-body"])},[Ae(e.$slots,"default")],2),n.footerHide?ge("",!0):($(),Z("div",{key:2,class:Q([i.prefixCls+"-footer"])},[Ae(e.$slots,"footer",{},()=>[V(f,{type:"text",onClick:o.cancel},{default:Me(()=>[zt(He(o.localeCancelText),1)]),_:1},8,["onClick"]),V(f,{type:"primary",loading:i.buttonLoading,onClick:o.ok},{default:Me(()=>[zt(He(o.localeOkText),1)]),_:1},8,["loading","onClick"])])],2))],6)],16),[[dn,i.visible]])]),_:3},8,["name","onAfterLeave"])],6)],8,["disabled"])}const yt=je(Ap,[["render",mp]]),$t="ivu-modal-confirm";yt.newInstance=e=>{if(!Fe)return;const t=e||{},n=document.createElement("div");document.body.appendChild(n);let a=null;const i=Lo({mixins:[Ur],data(){return Object.assign({},t,{visible:!1,width:416,title:"",body:"",iconType:"",iconName:"",okText:void 0,cancelText:void 0,showCancel:!1,loading:!1,buttonLoading:!1,scrollable:!1,closable:!1,closing:!1})},render(){let l=[];this.showCancel&&l.push(Ue(Ke,{type:"text",onClick:this.cancel},()=>this.localeCancelText)),l.push(Ue(Ke,{type:"primary",loading:this.buttonLoading,onClick:this.ok},()=>this.localeOkText));let f;this.render?f=Ue("div",{class:`${$t}-body ${$t}-body-render`},[this.render(Ue)]):f=Ue("div",{class:`${$t}-body`},[Ue("div",{innerHTML:this.body})]);let p;return this.title&&(p=Ue("div",{class:`${$t}-head`},[Ue("div",{class:this.iconTypeCls},[Ue("i",{class:this.iconNameCls})]),Ue("div",{class:`${$t}-head-title`,innerHTML:this.title})])),Ue(yt,Object.assign({},t,{width:this.width,scrollable:this.scrollable,closable:this.closable,ref:"modal"},{modelValue:this.visible,"onUpdate:modelValue":m=>this.visible=m,"onOn-cancel":this.cancel}),()=>Ue("div",{class:$t},[p,f,Ue("div",{class:`${$t}-footer`},l)]))},computed:{iconTypeCls(){return[`${$t}-head-icon`,`${$t}-head-icon-${this.iconType}`]},iconNameCls(){return["ivu-icon",`ivu-icon-${this.iconName}`]},localeOkText(){return this.okText?this.okText:this.t("i.modal.okText")},localeCancelText(){return this.cancelText?this.cancelText:this.t("i.modal.cancelText")}},methods:{cancel(){this.closing||(this.$refs.modal.visible=!1,this.buttonLoading=!1,this.onCancel(),this.remove())},ok(){this.closing||(this.loading?this.buttonLoading=!0:(this.$refs.modal.visible=!1,this.remove()),this.onOk())},remove(){this.closing=!0,setTimeout(()=>{this.closing=!1,this.destroy()},300)},destroy(){i.unmount(),document.body.removeChild(n),this.onRemove()},onOk(){},onCancel(){},onRemove(){}},created(){a=Xe()}});i.mount(n);const o=a.refs.modal;return{show(l){Ct(()=>{const f=a.refs.modal;switch(f.$parent.showCancel=l.showCancel,f.$parent.iconType=l.icon,l.icon){case"info":f.$parent.iconName="ios-information-circle";break;case"success":f.$parent.iconName="ios-checkmark-circle";break;case"warning":f.$parent.iconName="ios-alert";break;case"error":f.$parent.iconName="ios-close-circle";break;case"confirm":f.$parent.iconName="ios-help-circle";break}"width"in l&&(f.$parent.width=l.width),"closable"in l&&(f.$parent.closable=l.closable),"title"in l&&(f.$parent.title=l.title),"content"in l&&(f.$parent.body=l.content),"okText"in l&&(f.$parent.okText=l.okText),"cancelText"in l&&(f.$parent.cancelText=l.cancelText),"onCancel"in l&&(f.$parent.onCancel=l.onCancel),"onOk"in l&&(f.$parent.onOk=l.onOk),"loading"in l&&(f.$parent.loading=l.loading),"scrollable"in l&&(f.$parent.scrollable=l.scrollable),f.$parent.onRemove=l.onRemove,f.visible=!0})},remove(){o.visible=!1,o.$parent.buttonLoading=!1,o.$parent.remove()},component:o}};let Zn;function Ho(e=void 0,t=!0){return Zn=Zn||yt.newInstance({closable:!1,maskClosable:!1,footerHide:!0,render:e,lockScroll:t}),Zn}function ia(e){const t="render"in e?e.render:void 0,n="lockScroll"in e?e.lockScroll:!0;let a=Ho(t,n);e.onRemove=function(){Zn=null},a.show(e)}yt.info=function(e={}){return e.icon="info",e.showCancel=!1,ia(e)};yt.success=function(e={}){return e.icon="success",e.showCancel=!1,ia(e)};yt.warning=function(e={}){return e.icon="warning",e.showCancel=!1,ia(e)};yt.error=function(e={}){return e.icon="error",e.showCancel=!1,ia(e)};yt.confirm=function(e={}){return e.icon="confirm",e.showCancel=!0,ia(e)};yt.remove=function(){if(!Zn)return!1;Ho().remove()};const on="ivu-poptip",yp={name:"Poptip",mixins:[Vo,Ur],emits:["on-ok","on-cancel"],directives:{clickOutside:md},components:{iButton:Ke},props:{trigger:{validator(e){return Te(e,["click","focus","hover"])},default:"click"},placement:{validator(e){return Te(e,["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"])},default:"top"},title:{type:[String,Number]},content:{type:[String,Number],default:""},width:{type:[String,Number]},confirm:{type:Boolean,default:!1},okText:{type:String},cancelText:{type:String},transfer:{type:Boolean,default(){const e=Xe().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.transfer===""?!1:e.$VIEWUI.transfer}},popperClass:{type:String},wordWrap:{type:Boolean,default:!1},padding:{type:String},disabled:{type:Boolean,default:!1},capture:{type:Boolean,default(){const e=Xe().appContext.config.globalProperties;return e.$VIEWUI?e.$VIEWUI.capture:!1}},transferClassName:{type:String}},data(){return{prefixCls:on,showTitle:!0,isInput:!1,disableCloseUnderTransfer:!1,tIndex:this.handleGetIndex()}},computed:{classes(){return[`${on}`,{[`${on}-confirm`]:this.confirm}]},popperClasses(){return[`${on}-popper`,{[`${on}-confirm`]:this.transfer&&this.confirm,[`${this.popperClass}`]:!!this.popperClass,[on+"-transfer"]:this.transfer,[this.transferClassName]:this.transferClassName}]},styles(){let e={};return this.width&&(e.width=`${this.width}px`),this.transfer&&(e["z-index"]=1060+this.tIndex),e},localeOkText(){return this.okText===void 0?this.t("i.poptip.okText"):this.okText},localeCancelText(){return this.cancelText===void 0?this.t("i.poptip.cancelText"):this.cancelText},contentClasses(){return[`${on}-body-content`,{[`${on}-body-content-word-wrap`]:this.wordWrap}]},contentPaddingStyle(){const e={};return this.padding!==""&&(e.padding=this.padding),e}},methods:{handleClick(){if(!this.disabled){if(this.confirm)return this.visible=!this.visible,!0;if(this.trigger!=="click")return!1;this.visible=!this.visible}},handleTransferClick(){this.transfer&&(this.disableCloseUnderTransfer=!0)},handleClose(){if(this.disableCloseUnderTransfer)return this.disableCloseUnderTransfer=!1,!1;if(this.confirm)return this.visible=!1,!0;if(this.trigger!=="click")return!1;this.visible=!1},handleFocus(e=!0){if(!this.disabled){if(this.trigger!=="focus"||this.confirm||this.isInput&&!e)return!1;this.visible=!0}},handleBlur(e=!0){if(this.trigger!=="focus"||this.confirm||this.isInput&&!e)return!1;this.visible=!1},handleMouseenter(){if(!this.disabled){if(this.trigger!=="hover"||this.confirm)return!1;this.enterTimer&&clearTimeout(this.enterTimer),this.enterTimer=setTimeout(()=>{this.visible=!0},100)}},handleMouseleave(){if(this.trigger!=="hover"||this.confirm)return!1;this.enterTimer&&(clearTimeout(this.enterTimer),this.enterTimer=setTimeout(()=>{this.visible=!1},100))},cancel(){this.visible=!1,this.$emit("on-cancel")},ok(){this.visible=!1,this.$emit("on-ok")},getInputChildren(){const e=this.$refs.reference.querySelectorAll("input"),t=this.$refs.reference.querySelectorAll("textarea");let n=null;return e.length?n=e[0]:t.length&&(n=t[0]),n},handleGetIndex(){return Ma(),ra},handleIndexIncrease(){this.tIndex=this.handleGetIndex()}},mounted(){this.confirm||(this.showTitle=this.$slots.title!==void 0||this.title),this.trigger==="focus"&&Ct(()=>{const e=this.getInputChildren();e&&(this.isInput=!0,e.addEventListener("focus",this.handleFocus,!1),e.addEventListener("blur",this.handleBlur,!1))})},beforeUnmount(){const e=this.getInputChildren();e&&(e.removeEventListener("focus",this.handleFocus,!1),e.removeEventListener("blur",this.handleBlur,!1))}};function gp(e,t,n,a,i,o){const l=kt("i-button"),f=ts("click-outside");return Xt(($(),Z("div",{class:Q(o.classes),onMouseenter:t[6]||(t[6]=(...p)=>o.handleMouseenter&&o.handleMouseenter(...p)),onMouseleave:t[7]||(t[7]=(...p)=>o.handleMouseleave&&o.handleMouseleave(...p))},[G("div",{class:Q([i.prefixCls+"-rel"]),ref:"reference",onClick:t[0]||(t[0]=(...p)=>o.handleClick&&o.handleClick(...p)),onMousedown:t[1]||(t[1]=p=>o.handleFocus(!1)),onMouseup:t[2]||(t[2]=p=>o.handleBlur(!1))},[Ae(e.$slots,"default")],34),($(),Gt(Oa,{to:"body",disabled:!n.transfer},[V(wn,{name:"fade"},{default:Me(()=>[Xt(G("div",{class:Q(o.popperClasses),style:Ie(o.styles),ref:"popper",onClick:t[3]||(t[3]=(...p)=>o.handleTransferClick&&o.handleTransferClick(...p)),onMouseenter:t[4]||(t[4]=(...p)=>o.handleMouseenter&&o.handleMouseenter(...p)),onMouseleave:t[5]||(t[5]=(...p)=>o.handleMouseleave&&o.handleMouseleave(...p))},[G("div",{class:Q([i.prefixCls+"-content"])},[G("div",{class:Q([i.prefixCls+"-arrow"])},null,2),n.confirm?($(),Z("div",{key:0,class:Q([i.prefixCls+"-inner"])},[G("div",{class:Q([i.prefixCls+"-body"])},[t[8]||(t[8]=G("i",{class:"ivu-icon ivu-icon-ios-help-circle"},null,-1)),G("div",{class:Q([i.prefixCls+"-body-message"])},[Ae(e.$slots,"title",{},()=>[zt(He(n.title),1)])],2)],2),G("div",{class:Q([i.prefixCls+"-footer"])},[V(l,{type:"text",size:"small",onClick:o.cancel},{default:Me(()=>[zt(He(o.localeCancelText),1)]),_:1},8,["onClick"]),V(l,{type:"primary",size:"small",onClick:o.ok},{default:Me(()=>[zt(He(o.localeOkText),1)]),_:1},8,["onClick"])],2)],2)):ge("",!0),n.confirm?ge("",!0):($(),Z("div",{key:1,class:Q([i.prefixCls+"-inner"])},[i.showTitle?($(),Z("div",{key:0,class:Q([i.prefixCls+"-title"]),style:Ie(o.contentPaddingStyle),ref:"title"},[Ae(e.$slots,"title",{},()=>[G("div",{class:Q([i.prefixCls+"-title-inner"])},He(n.title),3)])],6)):ge("",!0),G("div",{class:Q([i.prefixCls+"-body"]),style:Ie(o.contentPaddingStyle)},[G("div",{class:Q(o.contentClasses)},[Ae(e.$slots,"content",{},()=>[G("div",{class:Q([i.prefixCls+"-body-content-inner"])},He(n.content),3)])],2)],6)],2))],2)],38),[[dn,e.visible]])]),_:3})],8,["disabled"]))],34)),[[f,o.handleClose]])}const bp=je(yp,[["render",gp]]),vp={name:"SliderMarker",props:{mark:{type:[String,Object]}},render(){let e=typeof this.mark=="string"?this.mark:[this.mark.label];return Ue("div",{class:"ivu-slider-marks-item",style:this.mark.style||{}},e)}},Yt="ivu-slider",wp={name:"Slider",mixins:[En],emits:["update:modelValue","on-input","on-change"],components:{InputNumber:fp,Tooltip:Ks,SliderMarker:vp},inject:{ModalInstance:{default:null},DrawerInstance:{default:null}},props:{min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},range:{type:Boolean,default:!1},modelValue:{type:[Number,Array],default:0},disabled:{type:Boolean,default:!1},showInput:{type:Boolean,default:!1},inputSize:{type:String,default:"default",validator(e){return Te(e,["small","large","default"])}},showStops:{type:Boolean,default:!1},tipFormat:{type:Function,default(e){return e}},showTip:{type:String,default:"hover",validator(e){return Te(e,["hover","always","never"])}},name:{type:String},activeChange:{type:Boolean,default:!0},marks:{type:Object}},data(){let e=this.checkLimits(Array.isArray(this.modelValue)?this.modelValue:[this.modelValue]);return this.range&&this.modelValue===null&&(e=[0,0]),{prefixCls:Yt,currentValue:e,dragging:!1,pointerDown:"",startX:0,currentX:0,startPos:0,oldValue:[...e],valueIndex:{min:0,max:1},sliderWidth:0,isValueNull:!1,id:Wr(6)}},watch:{modelValue(e){e===null&&(this.isValueNull=!0),e=this.checkLimits(Array.isArray(e)?e:[e]),!this.dragging&&(e[0]!==this.currentValue[0]||e[1]!==this.currentValue[1])&&(this.isValueNull&&this.range?this.currentValue=[0,0]:this.currentValue=e)},exportValue(e){Ct(()=>{this.$refs.minTooltip.updatePopper(),this.range&&this.$refs.maxTooltip.updatePopper()});const t=this.range?e:e[0];this.isValueNull?(this.isValueNull=!1,this.$emit("update:modelValue",null)):this.$emit("update:modelValue",t),this.$emit("on-input",t)}},computed:{classes(){return[`${Yt}`,{[`${Yt}-input`]:this.showInput&&!this.range,[`${Yt}-range`]:this.range,[`${Yt}-disabled`]:this.itemDisabled}]},minButtonClasses(){return[`${Yt}-button`,{[`${Yt}-button-dragging`]:this.pointerDown==="min"}]},maxButtonClasses(){return[`${Yt}-button`,{[`${Yt}-button-dragging`]:this.pointerDown==="max"}]},exportValue(){const e=(String(this.step).split(".")[1]||"").length;return this.currentValue.map(t=>Number(t.toFixed(e)))},minPosition(){return(this.currentValue[0]-this.min)/this.valueRange*100},maxPosition:function(){return(this.currentValue[1]-this.min)/this.valueRange*100},barStyle(){const e={width:(this.currentValue[0]-this.min)/this.valueRange*100+"%"};return this.range&&(e.left=(this.currentValue[0]-this.min)/this.valueRange*100+"%",e.width=(this.currentValue[1]-this.currentValue[0])/this.valueRange*100+"%"),e},stops(){let e=this.valueRange/this.step,t=[],n=100*this.step/this.valueRange;for(let a=1;a<e;a++)t.push(a*n);return t},markList(){return this.marks?Object.keys(this.marks).map(parseFloat).sort((t,n)=>t-n).filter(t=>t<=this.max&&t>=this.min).map(t=>({point:t,position:(t-this.min)*100/(this.max-this.min),mark:this.marks[t]})):[]},tipDisabled(){return this.tipFormat(this.currentValue[0])===null||this.showTip==="never"},valueRange(){return this.max-this.min},firstPosition(){return this.currentValue[0]},secondPosition(){return this.currentValue[1]}},methods:{getPointerX(e){return e.type.indexOf("touch")!==-1?e.touches[0].clientX:e.clientX},checkLimits([e,t]){return e=Math.max(this.min,e),e=Math.min(this.max,e),t=Math.max(this.min,e,t),t=Math.min(this.max,t),[e,t]},getCurrentValue(e,t){if(this.itemDisabled)return;const n=this.valueIndex[t];if(!(typeof n>"u"))return this.currentValue[n]},onKeyLeft(e,t){const n=this.getCurrentValue(e,t);Number.isFinite(n)&&this.changeButtonPosition(n-this.step,t)},onKeyRight(e,t){const n=this.getCurrentValue(e,t);Number.isFinite(n)&&this.changeButtonPosition(n+this.step,t)},onPointerDown(e,t){this.itemDisabled||(e.preventDefault(),this.pointerDown=t,this.onPointerDragStart(e),De(window,"mousemove",this.onPointerDrag),De(window,"touchmove",this.onPointerDrag),De(window,"mouseup",this.onPointerDragEnd),De(window,"touchend",this.onPointerDragEnd))},onPointerDragStart(e){this.dragging=!1,this.startX=this.getPointerX(e),this.startPos=this[`${this.pointerDown}Position`]*this.valueRange/100+this.min},onPointerDrag(e){this.dragging=!0,this.$refs[`${this.pointerDown}Tooltip`].visible=!0,this.currentX=this.getPointerX(e);const t=(this.currentX-this.startX)/this.sliderWidth*this.valueRange;this.changeButtonPosition(this.startPos+t)},onPointerDragEnd(){this.dragging&&(this.dragging=!1,this.$refs[`${this.pointerDown}Tooltip`].visible=!1,this.emitChange()),this.pointerDown="",Et(window,"mousemove",this.onPointerDrag),Et(window,"touchmove",this.onPointerDrag),Et(window,"mouseup",this.onPointerDragEnd),Et(window,"touchend",this.onPointerDragEnd)},changeButtonPosition(e,t){const n=t||this.pointerDown,a=n==="min"?0:1;n==="min"?e=this.checkLimits([e,this.max])[0]:e=this.checkLimits([this.min,e])[1];const i=this.handleDecimal(e,this.step),o=this.currentValue;o[a]=e-i,this.range&&(n==="min"&&o[0]>o[1]&&(o[1]=o[0]),n==="max"&&o[0]>o[1]&&(o[0]=o[1])),this.currentValue=[...o],this.dragging||this.currentValue[a]!==this.oldValue[a]&&(this.emitChange(),this.oldValue[a]=this.currentValue[a])},handleDecimal(e,t){if(t<1){let n=t.toString(),a=1,i;try{i=n.split(".")[1].length}catch{i=0}return a=Math.pow(10,i),e*a%(t*a)/a}else return e%t},emitChange(){const e=this.range?this.exportValue:this.exportValue[0];this.$emit("on-change",e),this.handleFormItemChange("change",e)},sliderClick(e){if(this.itemDisabled)return;const t=this.getPointerX(e),n=this.$refs.slider.getBoundingClientRect().left;let a=(t-n)/this.sliderWidth*this.valueRange+this.min,i=a/this.valueRange*100;!this.range||i<=this.minPosition?this.changeButtonPosition(a,"min"):i>=this.maxPosition?this.changeButtonPosition(a,"max"):this.changeButtonPosition(a,a-this.firstPosition<=this.secondPosition-a?"min":"max")},handleInputChange(e){this.currentValue=[e===0?0:e||this.min,this.currentValue[1]],this.emitChange()},handleFocus(e){this.$refs[`${e}Tooltip`].handleShowPopper()},handleBlur(e){this.$refs[`${e}Tooltip`].handleClosePopper()},handleSetSliderWidth(){this.sliderWidth=parseInt(ms(this.$refs.slider,"width"),10)},handleOnVisibleChange(e){e&&this.showTip==="always"&&(this.$refs.minTooltip.doDestroy(),this.range&&this.$refs.maxTooltip.doDestroy(),Ct(()=>{this.$refs.minTooltip.updatePopper(),this.range&&this.$refs.maxTooltip.updatePopper()}))},addSlider(e){const t=this[e];t&&(t.sliderList||(t.sliderList=[]),t.sliderList.push({id:this.id,slider:this}))},removeSlider(e){const t=this[e];if(!t||!t.sliderList)return;const n=t.sliderList.findIndex(a=>a.id===this.id);t.sliderList.splice(n,1)}},mounted(){this.addSlider("ModalInstance"),this.addSlider("DrawerInstance"),this.observer=pp(),this.observer.listenTo(this.$refs.slider,this.handleSetSliderWidth)},beforeUnmount(){this.removeSlider("ModalInstance"),this.removeSlider("DrawerInstance"),this.observer.removeListener(this.$refs.slider,this.handleSetSliderWidth)}},xp=["name","value"],Ep={class:"ivu-slider-marks"};function Cp(e,t,n,a,i,o){const l=kt("Input-number"),f=kt("SliderMarker"),p=kt("Tooltip");return $(),Z("div",{class:Q(o.classes)},[!n.range&&n.showInput?($(),Gt(l,{key:0,min:n.min,size:n.inputSize,max:n.max,step:n.step,modelValue:o.exportValue[0],disabled:e.itemDisabled,"active-change":n.activeChange,onOnChange:o.handleInputChange},null,8,["min","size","max","step","modelValue","disabled","active-change","onOnChange"])):ge("",!0),G("div",{class:Q([i.prefixCls+"-wrap"]),ref:"slider",onClick:t[19]||(t[19]=sn((...m)=>o.sliderClick&&o.sliderClick(...m),["self"]))},[G("input",{type:"hidden",name:n.name,value:o.exportValue},null,8,xp),G("div",{class:Q([i.prefixCls+"-bar"]),style:Ie(o.barStyle),onClick:t[0]||(t[0]=sn((...m)=>o.sliderClick&&o.sliderClick(...m),["self"]))},null,6),n.showStops?($(!0),Z(Kt,{key:0},wa(o.stops,m=>($(),Z("div",{class:Q([i.prefixCls+"-stop"]),key:m,style:Ie({left:m+"%"}),onClick:t[1]||(t[1]=sn((...y)=>o.sliderClick&&o.sliderClick(...y),["self"]))},null,6))),128)):ge("",!0),o.markList.length>0?($(),Z(Kt,{key:1},[($(!0),Z(Kt,null,wa(o.markList,(m,y)=>($(),Z("div",{key:y,class:Q([i.prefixCls+"-stop"]),style:Ie({left:m.position+"%"}),onClick:t[2]||(t[2]=sn((...g)=>o.sliderClick&&o.sliderClick(...g),["self"]))},null,6))),128)),G("div",Ep,[($(!0),Z(Kt,null,wa(o.markList,(m,y)=>($(),Gt(f,{key:y,mark:m.mark,style:Ie({left:m.position+"%"}),onClick:o.sliderClick},null,8,["mark","style","onClick"]))),128))])],64)):ge("",!0),G("div",{class:Q([i.prefixCls+"-button-wrap"]),style:Ie({left:o.minPosition+"%"}),onTouchstart:t[9]||(t[9]=m=>o.onPointerDown(m,"min")),onMousedown:t[10]||(t[10]=m=>o.onPointerDown(m,"min"))},[V(p,{controlled:i.pointerDown==="min",placement:"top",content:n.tipFormat(o.exportValue[0]),disabled:o.tipDisabled,always:n.showTip==="always",ref:"minTooltip"},{default:Me(()=>[G("div",{class:Q(o.minButtonClasses),tabindex:"0",onFocus:t[3]||(t[3]=m=>o.handleFocus("min")),onBlur:t[4]||(t[4]=m=>o.handleBlur("min")),onKeydown:[t[5]||(t[5]=Tt(m=>o.onKeyLeft(m,"min"),["left"])),t[6]||(t[6]=Tt(m=>o.onKeyLeft(m,"min"),["down"])),t[7]||(t[7]=Tt(m=>o.onKeyRight(m,"min"),["right"])),t[8]||(t[8]=Tt(m=>o.onKeyRight(m,"min"),["up"]))]},null,34)]),_:1},8,["controlled","content","disabled","always"])],38),n.range?($(),Z("div",{key:2,class:Q([i.prefixCls+"-button-wrap"]),style:Ie({left:o.maxPosition+"%"}),onTouchstart:t[17]||(t[17]=m=>o.onPointerDown(m,"max")),onMousedown:t[18]||(t[18]=m=>o.onPointerDown(m,"max"))},[V(p,{controlled:i.pointerDown==="max",placement:"top",content:n.tipFormat(o.exportValue[1]),disabled:o.tipDisabled,always:n.showTip==="always",ref:"maxTooltip"},{default:Me(()=>[G("div",{class:Q(o.maxButtonClasses),tabindex:"0",onFocus:t[11]||(t[11]=m=>o.handleFocus("max")),onBlur:t[12]||(t[12]=m=>o.handleBlur("max")),onKeydown:[t[13]||(t[13]=Tt(m=>o.onKeyLeft(m,"max"),["left"])),t[14]||(t[14]=Tt(m=>o.onKeyLeft(m,"max"),["down"])),t[15]||(t[15]=Tt(m=>o.onKeyRight(m,"max"),["right"])),t[16]||(t[16]=Tt(m=>o.onKeyRight(m,"max"),["up"]))]},null,34)]),_:1},8,["controlled","content","disabled","always"])],38)):ge("",!0)],2)],2)}const kp=je(wp,[["render",Cp]]),Ln="ivu-switch",Bp={name:"iSwitch",mixins:[En],emits:["update:modelValue","on-change"],props:{modelValue:{type:[String,Number,Boolean],default:!1},trueValue:{type:[String,Number,Boolean],default:!0},falseValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:!1},size:{validator(e){return Te(e,["large","small","default"])},default(){const e=Xe().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.size===""?"default":e.$VIEWUI.size}},name:{type:String},loading:{type:Boolean,default:!1},trueColor:{type:String},falseColor:{type:String},beforeChange:Function},data(){return{currentValue:this.modelValue}},computed:{wrapClasses(){return[`${Ln}`,{[`${Ln}-checked`]:this.currentValue===this.trueValue,[`${Ln}-disabled`]:this.itemDisabled,[`${Ln}-${this.size}`]:!!this.size,[`${Ln}-loading`]:this.loading}]},wrapStyles(){let e={};return this.trueColor&&this.currentValue===this.trueValue?(e["border-color"]=this.trueColor,e["background-color"]=this.trueColor):this.falseColor&&this.currentValue===this.falseValue&&(e["border-color"]=this.falseColor,e["background-color"]=this.falseColor),e},innerClasses(){return`${Ln}-inner`}},methods:{handleToggle(){const e=this.currentValue===this.trueValue?this.falseValue:this.trueValue;this.currentValue=e,this.$emit("update:modelValue",e),this.$emit("on-change",e),this.handleFormItemChange("change",e)},toggle(e){if(e.preventDefault(),this.itemDisabled||this.loading)return!1;if(!this.beforeChange)return this.handleToggle();const t=this.beforeChange();t&&t.then?t.then(()=>{this.handleToggle()}):this.handleToggle()}},watch:{modelValue(e){if(e!==this.trueValue&&e!==this.falseValue&&e!==null)throw"Value should be trueValue or falseValue.";this.currentValue=e}}},Ip=["name","value"];function Sp(e,t,n,a,i,o){return $(),Z("span",{tabindex:"0",class:Q(o.wrapClasses),style:Ie(o.wrapStyles),onClick:t[0]||(t[0]=(...l)=>o.toggle&&o.toggle(...l)),onKeydown:t[1]||(t[1]=Tt((...l)=>o.toggle&&o.toggle(...l),["space"]))},[G("input",{type:"hidden",name:n.name,value:i.currentValue},null,8,Ip),G("span",{class:Q(o.innerClasses)},[i.currentValue===n.trueValue?Ae(e.$slots,"open",{key:0}):ge("",!0),i.currentValue===n.falseValue?Ae(e.$slots,"close",{key:1}):ge("",!0)],2)],38)}const Vi=je(Bp,[["render",Sp]]);/*!
 * Viewer.js v1.11.7
 * https://fengyuanchen.github.io/viewerjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2024-11-24T04:32:19.116Z
 */function Tp(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Fi(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,jo(a.key),a)}}function Dp(e,t,n){return t&&Fi(e.prototype,t),n&&Fi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Lp(e,t,n){return(t=jo(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,a)}return n}function Hr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wi(Object(n),!0).forEach(function(a){Lp(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wi(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function zp(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function jo(e){var t=zp(e,"string");return typeof t=="symbol"?t:t+""}function zr(e){"@babel/helpers - typeof";return zr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zr(e)}var _i={backdrop:!0,button:!0,navbar:!0,title:!0,toolbar:!0,className:"",container:"body",filter:null,fullscreen:!0,inheritedAttributes:["crossOrigin","decoding","isMap","loading","referrerPolicy","sizes","srcset","useMap"],initialCoverage:.9,initialViewIndex:0,inline:!1,interval:5e3,keyboard:!0,focus:!0,loading:!0,loop:!0,minWidth:200,minHeight:100,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,slideOnTouch:!0,toggleOnDblclick:!0,tooltip:!0,transition:!0,zIndex:2015,zIndexInline:0,zoomRatio:.1,minZoomRatio:.01,maxZoomRatio:100,url:"src",ready:null,show:null,shown:null,hide:null,hidden:null,view:null,viewed:null,move:null,moved:null,rotate:null,rotated:null,scale:null,scaled:null,zoom:null,zoomed:null,play:null,stop:null},Np='<div class="viewer-container" tabindex="-1" touch-action="none"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><div class="viewer-toolbar"></div><div class="viewer-navbar"><ul class="viewer-list" role="navigation"></ul></div></div><div class="viewer-tooltip" role="alert" aria-hidden="true"></div><div class="viewer-button" data-viewer-action="mix" role="button"></div><div class="viewer-player"></div></div>',Ra=typeof window<"u"&&typeof window.document<"u",Jt=Ra?window:{},Pn=Ra&&Jt.document.documentElement?"ontouchstart"in Jt.document.documentElement:!1,jr=Ra?"PointerEvent"in Jt:!1,me="viewer",ka="move",$o="switch",Kn="zoom",ma="".concat(me,"-active"),Op="".concat(me,"-close"),Ba="".concat(me,"-fade"),Nr="".concat(me,"-fixed"),Mp="".concat(me,"-fullscreen"),Qi="".concat(me,"-fullscreen-exit"),bn="".concat(me,"-hide"),Rp="".concat(me,"-hide-md-down"),qp="".concat(me,"-hide-sm-down"),Pp="".concat(me,"-hide-xs-down"),wt="".concat(me,"-in"),ea="".concat(me,"-invisible"),Vn="".concat(me,"-loading"),Vp="".concat(me,"-move"),Ui="".concat(me,"-open"),zn="".concat(me,"-show"),Ve="".concat(me,"-transition"),Fn="click",Or="dblclick",Hi="dragstart",ji="focusin",$i="keydown",xt="load",vn="error",Fp=Pn?"touchend touchcancel":"mouseup",Wp=Pn?"touchmove":"mousemove",_p=Pn?"touchstart":"mousedown",Yi=jr?"pointerdown":_p,Ki=jr?"pointermove":Wp,Xi=jr?"pointerup pointercancel":Fp,Gi="resize",St="transitionend",Ji="wheel",Zi="ready",eo="show",to="shown",no="hide",ao="hidden",ro="view",ta="viewed",io="move",oo="moved",lo="rotate",so="rotated",po="scale",co="scaled",uo="zoom",ho="zoomed",fo="play",Ao="stop",Na="".concat(me,"Action"),$r=/\s\s*/,ya=["zoom-in","zoom-out","one-to-one","reset","prev","play","next","rotate-left","rotate-right","flip-horizontal","flip-vertical"];function na(e){return typeof e=="string"}var Qp=Number.isNaN||Jt.isNaN;function Oe(e){return typeof e=="number"&&!Qp(e)}function On(e){return typeof e>"u"}function Wn(e){return zr(e)==="object"&&e!==null}var Up=Object.prototype.hasOwnProperty;function Mn(e){if(!Wn(e))return!1;try{var t=e.constructor,n=t.prototype;return t&&n&&Up.call(n,"isPrototypeOf")}catch{return!1}}function ke(e){return typeof e=="function"}function Se(e,t){if(e&&ke(t))if(Array.isArray(e)||Oe(e.length)){var n=e.length,a;for(a=0;a<n&&t.call(e,e[a],a,e)!==!1;a+=1);}else Wn(e)&&Object.keys(e).forEach(function(i){t.call(e,e[i],i,e)});return e}var mt=Object.assign||function(t){for(var n=arguments.length,a=new Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];return Wn(t)&&a.length>0&&a.forEach(function(o){Wn(o)&&Object.keys(o).forEach(function(l){t[l]=o[l]})}),t},Hp=/^(?:width|height|left|top|marginLeft|marginTop)$/;function Lt(e,t){var n=e.style;Se(t,function(a,i){Hp.test(i)&&Oe(a)&&(a+="px"),n[i]=a})}function jp(e){return na(e)?e.replace(/&(?!amp;|quot;|#39;|lt;|gt;)/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):e}function Nn(e,t){return!e||!t?!1:e.classList?e.classList.contains(t):e.className.indexOf(t)>-1}function oe(e,t){if(!(!e||!t)){if(Oe(e.length)){Se(e,function(a){oe(a,t)});return}if(e.classList){e.classList.add(t);return}var n=e.className.trim();n?n.indexOf(t)<0&&(e.className="".concat(n," ").concat(t)):e.className=t}}function we(e,t){if(!(!e||!t)){if(Oe(e.length)){Se(e,function(n){we(n,t)});return}if(e.classList){e.classList.remove(t);return}e.className.indexOf(t)>=0&&(e.className=e.className.replace(t,""))}}function aa(e,t,n){if(t){if(Oe(e.length)){Se(e,function(a){aa(a,t,n)});return}n?oe(e,t):we(e,t)}}var $p=/([a-z\d])([A-Z])/g;function Yr(e){return e.replace($p,"$1-$2").toLowerCase()}function Rn(e,t){return Wn(e[t])?e[t]:e.dataset?e.dataset[t]:e.getAttribute("data-".concat(Yr(t)))}function Mr(e,t,n){Wn(n)?e[t]=n:e.dataset?e.dataset[t]=n:e.setAttribute("data-".concat(Yr(t)),n)}var Yo=function(){var e=!1;if(Ra){var t=!1,n=function(){},a=Object.defineProperty({},"once",{get:function(){return e=!0,t},set:function(o){t=o}});Jt.addEventListener("test",n,a),Jt.removeEventListener("test",n,a)}return e}();function Be(e,t,n){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},i=n;t.trim().split($r).forEach(function(o){if(!Yo){var l=e.listeners;l&&l[o]&&l[o][n]&&(i=l[o][n],delete l[o][n],Object.keys(l[o]).length===0&&delete l[o],Object.keys(l).length===0&&delete e.listeners)}e.removeEventListener(o,i,a)})}function pe(e,t,n){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},i=n;t.trim().split($r).forEach(function(o){if(a.once&&!Yo){var l=e.listeners,f=l===void 0?{}:l;i=function(){delete f[o][n],e.removeEventListener(o,i,a);for(var m=arguments.length,y=new Array(m),g=0;g<m;g++)y[g]=arguments[g];n.apply(e,y)},f[o]||(f[o]={}),f[o][n]&&e.removeEventListener(o,f[o][n],a),f[o][n]=i,e.listeners=f}e.addEventListener(o,i,a)})}function We(e,t,n,a){var i;return ke(Event)&&ke(CustomEvent)?i=new CustomEvent(t,Hr({bubbles:!0,cancelable:!0,detail:n},a)):(i=document.createEvent("CustomEvent"),i.initCustomEvent(t,!0,!0,n)),e.dispatchEvent(i)}function Yp(e){var t=e.getBoundingClientRect();return{left:t.left+(window.pageXOffset-document.documentElement.clientLeft),top:t.top+(window.pageYOffset-document.documentElement.clientTop)}}function Ia(e){var t=e.rotate,n=e.scaleX,a=e.scaleY,i=e.translateX,o=e.translateY,l=[];Oe(i)&&i!==0&&l.push("translateX(".concat(i,"px)")),Oe(o)&&o!==0&&l.push("translateY(".concat(o,"px)")),Oe(t)&&t!==0&&l.push("rotate(".concat(t,"deg)")),Oe(n)&&n!==1&&l.push("scaleX(".concat(n,")")),Oe(a)&&a!==1&&l.push("scaleY(".concat(a,")"));var f=l.length?l.join(" "):"none";return{WebkitTransform:f,msTransform:f,transform:f}}function Kp(e){return na(e)?decodeURIComponent(e.replace(/^.*\//,"").replace(/[?&#].*$/,"")):""}var br=Jt.navigator&&/Version\/\d+(\.\d+)+?\s+Safari/i.test(Jt.navigator.userAgent);function Ko(e,t,n){var a=document.createElement("img");if(e.naturalWidth&&!br)return n(e.naturalWidth,e.naturalHeight),a;var i=document.body||document.documentElement;return a.onload=function(){n(a.width,a.height),br||i.removeChild(a)},Se(t.inheritedAttributes,function(o){var l=e.getAttribute(o);l!==null&&a.setAttribute(o,l)}),a.src=e.src,br||(a.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",i.appendChild(a)),a}function ga(e){switch(e){case 2:return Pp;case 3:return qp;case 4:return Rp;default:return""}}function Xp(e){var t=Hr({},e),n=[];return Se(e,function(a,i){delete t[i],Se(t,function(o){var l=Math.abs(a.startX-o.startX),f=Math.abs(a.startY-o.startY),p=Math.abs(a.endX-o.endX),m=Math.abs(a.endY-o.endY),y=Math.sqrt(l*l+f*f),g=Math.sqrt(p*p+m*m),d=(g-y)/y;n.push(d)})}),n.sort(function(a,i){return Math.abs(a)<Math.abs(i)}),n[0]}function ba(e,t){var n=e.pageX,a=e.pageY,i={endX:n,endY:a};return t?i:Hr({timeStamp:Date.now(),startX:n,startY:a},i)}function Gp(e){var t=0,n=0,a=0;return Se(e,function(i){var o=i.startX,l=i.startY;t+=o,n+=l,a+=1}),t/=a,n/=a,{pageX:t,pageY:n}}var Jp={render:function(){this.initContainer(),this.initViewer(),this.initList(),this.renderViewer()},initBody:function(){var t=this.element.ownerDocument,n=t.body||t.documentElement;this.body=n,this.scrollbarWidth=window.innerWidth-t.documentElement.clientWidth,this.initialBodyPaddingRight=n.style.paddingRight,this.initialBodyComputedPaddingRight=window.getComputedStyle(n).paddingRight},initContainer:function(){this.containerData={width:window.innerWidth,height:window.innerHeight}},initViewer:function(){var t=this.options,n=this.parent,a;t.inline&&(a={width:Math.max(n.offsetWidth,t.minWidth),height:Math.max(n.offsetHeight,t.minHeight)},this.parentData=a),(this.fulled||!a)&&(a=this.containerData),this.viewerData=mt({},a)},renderViewer:function(){this.options.inline&&!this.fulled&&Lt(this.viewer,this.viewerData)},initList:function(){var t=this,n=this.element,a=this.options,i=this.list,o=[];i.innerHTML="",Se(this.images,function(l,f){var p=l.src,m=l.alt||Kp(p),y=t.getImageURL(l);if(p||y){var g=document.createElement("li"),d=document.createElement("img");Se(a.inheritedAttributes,function(C){var k=l.getAttribute(C);k!==null&&d.setAttribute(C,k)}),a.navbar&&(d.src=p||y),d.alt=m,d.setAttribute("data-original-url",y||p),g.setAttribute("data-index",f),g.setAttribute("data-viewer-action","view"),g.setAttribute("role","button"),a.keyboard&&g.setAttribute("tabindex",0),g.appendChild(d),i.appendChild(g),o.push(g)}}),this.items=o,Se(o,function(l){var f=l.firstElementChild,p,m;Mr(f,"filled",!0),a.loading&&oe(l,Vn),pe(f,xt,p=function(g){Be(f,vn,m),a.loading&&we(l,Vn),t.loadImage(g)},{once:!0}),pe(f,vn,m=function(){Be(f,xt,p),a.loading&&we(l,Vn)},{once:!0})}),a.transition&&pe(n,ta,function(){oe(i,Ve)},{once:!0})},renderList:function(){var t=this.index,n=this.items[t];if(n){var a=n.nextElementSibling,i=parseInt(window.getComputedStyle(a||n).marginLeft,10),o=n.offsetWidth,l=o+i;Lt(this.list,mt({width:l*this.length-i},Ia({translateX:(this.viewerData.width-o)/2-l*t})))}},resetList:function(){var t=this.list;t.innerHTML="",we(t,Ve),Lt(t,Ia({translateX:0}))},initImage:function(t){var n=this,a=this.options,i=this.image,o=this.viewerData,l=this.footer.offsetHeight,f=o.width,p=Math.max(o.height-l,l),m=this.imageData||{},y;this.imageInitializing={abort:function(){y.onload=null}},y=Ko(i,a,function(g,d){var C=g/d,k=Math.max(0,Math.min(1,a.initialCoverage)),b=f,E=p;n.imageInitializing=!1,p*C>f?E=f/C:b=p*C,k=Oe(k)?k:.9,b=Math.min(b*k,g),E=Math.min(E*k,d);var N=(f-b)/2,T=(p-E)/2,I={left:N,top:T,x:N,y:T,width:b,height:E,oldRatio:1,ratio:b/g,aspectRatio:C,naturalWidth:g,naturalHeight:d},L=mt({},I);a.rotatable&&(I.rotate=m.rotate||0,L.rotate=0),a.scalable&&(I.scaleX=m.scaleX||1,I.scaleY=m.scaleY||1,L.scaleX=1,L.scaleY=1),n.imageData=I,n.initialImageData=L,t&&t()})},renderImage:function(t){var n=this,a=this.image,i=this.imageData;if(Lt(a,mt({width:i.width,height:i.height,marginLeft:i.x,marginTop:i.y},Ia(i))),t)if((this.viewing||this.moving||this.rotating||this.scaling||this.zooming)&&this.options.transition&&Nn(a,Ve)){var o=function(){n.imageRendering=!1,t()};this.imageRendering={abort:function(){Be(a,St,o)}},pe(a,St,o,{once:!0})}else t()},resetImage:function(){var t=this.image;t&&(this.viewing&&this.viewing.abort(),t.parentNode.removeChild(t),this.image=null,this.title.innerHTML="")}},Zp={bind:function(){var t=this.options,n=this.viewer,a=this.canvas,i=this.element.ownerDocument;pe(n,Fn,this.onClick=this.click.bind(this)),pe(n,Hi,this.onDragStart=this.dragstart.bind(this)),pe(a,Yi,this.onPointerDown=this.pointerdown.bind(this)),pe(i,Ki,this.onPointerMove=this.pointermove.bind(this)),pe(i,Xi,this.onPointerUp=this.pointerup.bind(this)),pe(i,$i,this.onKeyDown=this.keydown.bind(this)),pe(window,Gi,this.onResize=this.resize.bind(this)),t.zoomable&&t.zoomOnWheel&&pe(n,Ji,this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),t.toggleOnDblclick&&pe(a,Or,this.onDblclick=this.dblclick.bind(this))},unbind:function(){var t=this.options,n=this.viewer,a=this.canvas,i=this.element.ownerDocument;Be(n,Fn,this.onClick),Be(n,Hi,this.onDragStart),Be(a,Yi,this.onPointerDown),Be(i,Ki,this.onPointerMove),Be(i,Xi,this.onPointerUp),Be(i,$i,this.onKeyDown),Be(window,Gi,this.onResize),t.zoomable&&t.zoomOnWheel&&Be(n,Ji,this.onWheel,{passive:!1,capture:!0}),t.toggleOnDblclick&&Be(a,Or,this.onDblclick)}},ec={click:function(t){var n=this.options,a=this.imageData,i=t.target,o=Rn(i,Na);switch(!o&&i.localName==="img"&&i.parentElement.localName==="li"&&(i=i.parentElement,o=Rn(i,Na)),Pn&&t.isTrusted&&i===this.canvas&&clearTimeout(this.clickCanvasTimeout),o){case"mix":this.played?this.stop():n.inline?this.fulled?this.exit():this.full():this.hide();break;case"hide":this.pointerMoved||this.hide();break;case"view":this.view(Rn(i,"index"));break;case"zoom-in":this.zoom(.1,!0);break;case"zoom-out":this.zoom(-.1,!0);break;case"one-to-one":this.toggle();break;case"reset":this.reset();break;case"prev":this.prev(n.loop);break;case"play":this.play(n.fullscreen);break;case"next":this.next(n.loop);break;case"rotate-left":this.rotate(-90);break;case"rotate-right":this.rotate(90);break;case"flip-horizontal":this.scaleX(-a.scaleX||-1);break;case"flip-vertical":this.scaleY(-a.scaleY||-1);break;default:this.played&&this.stop()}},dblclick:function(t){t.preventDefault(),this.viewed&&t.target===this.image&&(Pn&&t.isTrusted&&clearTimeout(this.doubleClickImageTimeout),this.toggle(t.isTrusted?t:t.detail&&t.detail.originalEvent))},load:function(){var t=this;this.timeout&&(clearTimeout(this.timeout),this.timeout=!1);var n=this.element,a=this.options,i=this.image,o=this.index,l=this.viewerData;we(i,ea),a.loading&&we(this.canvas,Vn),i.style.cssText="height:0;"+"margin-left:".concat(l.width/2,"px;")+"margin-top:".concat(l.height/2,"px;")+"max-width:none!important;position:relative;width:0;",this.initImage(function(){aa(i,Vp,a.movable),aa(i,Ve,a.transition),t.renderImage(function(){t.viewed=!0,t.viewing=!1,ke(a.viewed)&&pe(n,ta,a.viewed,{once:!0}),We(n,ta,{originalImage:t.images[o],index:o,image:i},{cancelable:!1})})})},loadImage:function(t){var n=t.target,a=n.parentNode,i=a.offsetWidth||30,o=a.offsetHeight||50,l=!!Rn(n,"filled");Ko(n,this.options,function(f,p){var m=f/p,y=i,g=o;o*m>i?l?y=o*m:g=i/m:l?g=i/m:y=o*m,Lt(n,mt({width:y,height:g},Ia({translateX:(i-y)/2,translateY:(o-g)/2})))})},keydown:function(t){var n=this.options;if(n.keyboard){var a=t.keyCode||t.which||t.charCode;switch(a){case 13:this.viewer.contains(t.target)&&this.click(t);break}if(this.fulled)switch(a){case 27:this.played?this.stop():n.inline?this.fulled&&this.exit():this.hide();break;case 32:this.played&&this.stop();break;case 37:this.played&&this.playing?this.playing.prev():this.prev(n.loop);break;case 38:t.preventDefault(),this.zoom(n.zoomRatio,!0);break;case 39:this.played&&this.playing?this.playing.next():this.next(n.loop);break;case 40:t.preventDefault(),this.zoom(-n.zoomRatio,!0);break;case 48:case 49:t.ctrlKey&&(t.preventDefault(),this.toggle());break}}},dragstart:function(t){t.target.localName==="img"&&t.preventDefault()},pointerdown:function(t){var n=this.options,a=this.pointers,i=t.buttons,o=t.button;if(this.pointerMoved=!1,!(!this.viewed||this.showing||this.viewing||this.hiding||(t.type==="mousedown"||t.type==="pointerdown"&&t.pointerType==="mouse")&&(Oe(i)&&i!==1||Oe(o)&&o!==0||t.ctrlKey))){t.preventDefault(),t.changedTouches?Se(t.changedTouches,function(f){a[f.identifier]=ba(f)}):a[t.pointerId||0]=ba(t);var l=n.movable?ka:!1;n.zoomOnTouch&&n.zoomable&&Object.keys(a).length>1?l=Kn:n.slideOnTouch&&(t.pointerType==="touch"||t.type==="touchstart")&&this.isSwitchable()&&(l=$o),n.transition&&(l===ka||l===Kn)&&we(this.image,Ve),this.action=l}},pointermove:function(t){var n=this.pointers,a=this.action;!this.viewed||!a||(t.preventDefault(),t.changedTouches?Se(t.changedTouches,function(i){mt(n[i.identifier]||{},ba(i,!0))}):mt(n[t.pointerId||0]||{},ba(t,!0)),this.change(t))},pointerup:function(t){var n=this,a=this.options,i=this.action,o=this.pointers,l;t.changedTouches?Se(t.changedTouches,function(f){l=o[f.identifier],delete o[f.identifier]}):(l=o[t.pointerId||0],delete o[t.pointerId||0]),i&&(t.preventDefault(),a.transition&&(i===ka||i===Kn)&&oe(this.image,Ve),this.action=!1,Pn&&i!==Kn&&l&&Date.now()-l.timeStamp<500&&(clearTimeout(this.clickCanvasTimeout),clearTimeout(this.doubleClickImageTimeout),a.toggleOnDblclick&&this.viewed&&t.target===this.image?this.imageClicked?(this.imageClicked=!1,this.doubleClickImageTimeout=setTimeout(function(){We(n.image,Or,{originalEvent:t})},50)):(this.imageClicked=!0,this.doubleClickImageTimeout=setTimeout(function(){n.imageClicked=!1},500)):(this.imageClicked=!1,a.backdrop&&a.backdrop!=="static"&&t.target===this.canvas&&(this.clickCanvasTimeout=setTimeout(function(){We(n.canvas,Fn,{originalEvent:t})},50)))))},resize:function(){var t=this;if(!(!this.isShown||this.hiding)&&(this.fulled&&(this.close(),this.initBody(),this.open()),this.initContainer(),this.initViewer(),this.renderViewer(),this.renderList(),this.viewed&&this.initImage(function(){t.renderImage()}),this.played)){if(this.options.fullscreen&&this.fulled&&!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement)){this.stop();return}Se(this.player.getElementsByTagName("img"),function(n){pe(n,xt,t.loadImage.bind(t),{once:!0}),We(n,xt)})}},wheel:function(t){var n=this;if(this.viewed&&(t.preventDefault(),!this.wheeling)){this.wheeling=!0,setTimeout(function(){n.wheeling=!1},50);var a=Number(this.options.zoomRatio)||.1,i=1;t.deltaY?i=t.deltaY>0?1:-1:t.wheelDelta?i=-t.wheelDelta/120:t.detail&&(i=t.detail>0?1:-1),this.zoom(-i*a,!0,null,t)}}},tc={show:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=this.element,a=this.options;if(a.inline||this.showing||this.isShown||this.showing)return this;if(!this.ready)return this.build(),this.ready&&this.show(t),this;if(ke(a.show)&&pe(n,eo,a.show,{once:!0}),We(n,eo)===!1||!this.ready)return this;this.hiding&&this.transitioning.abort(),this.showing=!0,this.open();var i=this.viewer;if(we(i,bn),i.setAttribute("role","dialog"),i.setAttribute("aria-labelledby",this.title.id),i.setAttribute("aria-modal",!0),i.removeAttribute("aria-hidden"),a.transition&&!t){var o=this.shown.bind(this);this.transitioning={abort:function(){Be(i,St,o),we(i,wt)}},oe(i,Ve),i.initialOffsetWidth=i.offsetWidth,pe(i,St,o,{once:!0}),oe(i,wt)}else oe(i,wt),this.shown();return this},hide:function(){var t=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,a=this.element,i=this.options;if(i.inline||this.hiding||!(this.isShown||this.showing))return this;if(ke(i.hide)&&pe(a,no,i.hide,{once:!0}),We(a,no)===!1)return this;this.showing&&this.transitioning.abort(),this.hiding=!0,this.played?this.stop():this.viewing&&this.viewing.abort();var o=this.viewer,l=this.image,f=function(){we(o,wt),t.hidden()};if(i.transition&&!n){var p=function(g){g&&g.target===o&&(Be(o,St,p),t.hidden())},m=function(){Nn(o,Ve)?(pe(o,St,p),we(o,wt)):f()};this.transitioning={abort:function(){t.viewed&&Nn(l,Ve)?Be(l,St,m):Nn(o,Ve)&&Be(o,St,p)}},this.viewed&&Nn(l,Ve)?(pe(l,St,m,{once:!0}),this.zoomTo(0,!1,null,null,!0)):m()}else f();return this},view:function(){var t=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.initialViewIndex;if(n=Number(n)||0,this.hiding||this.played||n<0||n>=this.length||this.viewed&&n===this.index)return this;if(!this.isShown)return this.index=n,this.show();this.viewing&&this.viewing.abort();var a=this.element,i=this.options,o=this.title,l=this.canvas,f=this.items[n],p=f.querySelector("img"),m=Rn(p,"originalUrl"),y=p.getAttribute("alt"),g=document.createElement("img");if(Se(i.inheritedAttributes,function(E){var N=p.getAttribute(E);N!==null&&g.setAttribute(E,N)}),g.src=m,g.alt=y,ke(i.view)&&pe(a,ro,i.view,{once:!0}),We(a,ro,{originalImage:this.images[n],index:n,image:g})===!1||!this.isShown||this.hiding||this.played)return this;var d=this.items[this.index];d&&(we(d,ma),d.removeAttribute("aria-selected")),oe(f,ma),f.setAttribute("aria-selected",!0),i.focus&&f.focus(),this.image=g,this.viewed=!1,this.index=n,this.imageData={},oe(g,ea),i.loading&&oe(l,Vn),l.innerHTML="",l.appendChild(g),this.renderList(),o.innerHTML="";var C=function(){var N=t.imageData,T=Array.isArray(i.title)?i.title[1]:i.title;o.innerHTML=jp(ke(T)?T.call(t,g,N):"".concat(y," (").concat(N.naturalWidth," × ").concat(N.naturalHeight,")"))},k,b;return pe(a,ta,C,{once:!0}),this.viewing={abort:function(){Be(a,ta,C),g.complete?t.imageRendering?t.imageRendering.abort():t.imageInitializing&&t.imageInitializing.abort():(g.src="",Be(g,xt,k),t.timeout&&clearTimeout(t.timeout))}},g.complete?this.load():(pe(g,xt,k=function(){Be(g,vn,b),t.load()},{once:!0}),pe(g,vn,b=function(){Be(g,xt,k),t.timeout&&(clearTimeout(t.timeout),t.timeout=!1),we(g,ea),i.loading&&we(t.canvas,Vn)},{once:!0}),this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(function(){we(g,ea),t.timeout=!1},1e3)),this},prev:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=this.index-1;return n<0&&(n=t?this.length-1:0),this.view(n),this},next:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=this.length-1,a=this.index+1;return a>n&&(a=t?0:n),this.view(a),this},move:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,a=this.imageData;return this.moveTo(On(t)?t:a.x+Number(t),On(n)?n:a.y+Number(n)),this},moveTo:function(t){var n=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,o=this.element,l=this.options,f=this.imageData;if(t=Number(t),a=Number(a),this.viewed&&!this.played&&l.movable){var p=f.x,m=f.y,y=!1;if(Oe(t)?y=!0:t=p,Oe(a)?y=!0:a=m,y){if(ke(l.move)&&pe(o,io,l.move,{once:!0}),We(o,io,{x:t,y:a,oldX:p,oldY:m,originalEvent:i})===!1)return this;f.x=t,f.y=a,f.left=t,f.top=a,this.moving=!0,this.renderImage(function(){n.moving=!1,ke(l.moved)&&pe(o,oo,l.moved,{once:!0}),We(o,oo,{x:t,y:a,oldX:p,oldY:m,originalEvent:i},{cancelable:!1})})}}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t)),this},rotateTo:function(t){var n=this,a=this.element,i=this.options,o=this.imageData;if(t=Number(t),Oe(t)&&this.viewed&&!this.played&&i.rotatable){var l=o.rotate;if(ke(i.rotate)&&pe(a,lo,i.rotate,{once:!0}),We(a,lo,{degree:t,oldDegree:l})===!1)return this;o.rotate=t,this.rotating=!0,this.renderImage(function(){n.rotating=!1,ke(i.rotated)&&pe(a,so,i.rotated,{once:!0}),We(a,so,{degree:t,oldDegree:l},{cancelable:!1})})}return this},scaleX:function(t){return this.scale(t,this.imageData.scaleY),this},scaleY:function(t){return this.scale(this.imageData.scaleX,t),this},scale:function(t){var n=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,i=this.element,o=this.options,l=this.imageData;if(t=Number(t),a=Number(a),this.viewed&&!this.played&&o.scalable){var f=l.scaleX,p=l.scaleY,m=!1;if(Oe(t)?m=!0:t=f,Oe(a)?m=!0:a=p,m){if(ke(o.scale)&&pe(i,po,o.scale,{once:!0}),We(i,po,{scaleX:t,scaleY:a,oldScaleX:f,oldScaleY:p})===!1)return this;l.scaleX=t,l.scaleY=a,this.scaling=!0,this.renderImage(function(){n.scaling=!1,ke(o.scaled)&&pe(i,co,o.scaled,{once:!0}),We(i,co,{scaleX:t,scaleY:a,oldScaleX:f,oldScaleY:p},{cancelable:!1})})}}return this},zoom:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,o=this.imageData;return t=Number(t),t<0?t=1/(1-t):t=1+t,this.zoomTo(o.width*t/o.naturalWidth,n,a,i),this},zoomTo:function(t){var n=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1,f=this.element,p=this.options,m=this.pointers,y=this.imageData,g=y.x,d=y.y,C=y.width,k=y.height,b=y.naturalWidth,E=y.naturalHeight;if(t=Math.max(0,t),Oe(t)&&this.viewed&&!this.played&&(l||p.zoomable)){if(!l){var N=Math.max(.01,p.minZoomRatio),T=Math.min(100,p.maxZoomRatio);t=Math.min(Math.max(t,N),T)}if(o)switch(o.type){case"wheel":p.zoomRatio>=.055&&t>.95&&t<1.05&&(t=1);break;case"pointermove":case"touchmove":case"mousemove":t>.99&&t<1.01&&(t=1);break}var I=b*t,L=E*t,P=I-C,S=L-k,F=y.ratio;if(ke(p.zoom)&&pe(f,uo,p.zoom,{once:!0}),We(f,uo,{ratio:t,oldRatio:F,originalEvent:o})===!1)return this;if(this.zooming=!0,o){var O=Yp(this.viewer),H=m&&Object.keys(m).length>0?Gp(m):{pageX:o.pageX,pageY:o.pageY};y.x-=P*((H.pageX-O.left-g)/C),y.y-=S*((H.pageY-O.top-d)/k)}else Mn(i)&&Oe(i.x)&&Oe(i.y)?(y.x-=P*((i.x-g)/C),y.y-=S*((i.y-d)/k)):(y.x-=P/2,y.y-=S/2);y.left=y.x,y.top=y.y,y.width=I,y.height=L,y.oldRatio=F,y.ratio=t,this.renderImage(function(){n.zooming=!1,ke(p.zoomed)&&pe(f,ho,p.zoomed,{once:!0}),We(f,ho,{ratio:t,oldRatio:F,originalEvent:o},{cancelable:!1})}),a&&this.tooltip()}return this},play:function(){var t=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(!this.isShown||this.played)return this;var a=this.element,i=this.options;if(ke(i.play)&&pe(a,fo,i.play,{once:!0}),We(a,fo)===!1)return this;var o=this.player,l=this.loadImage.bind(this),f=[],p=0,m=0;if(this.played=!0,this.onLoadWhenPlay=l,n&&this.requestFullscreen(n),oe(o,zn),Se(this.items,function(d,C){var k=d.querySelector("img"),b=document.createElement("img");b.src=Rn(k,"originalUrl"),b.alt=k.getAttribute("alt"),b.referrerPolicy=k.referrerPolicy,p+=1,oe(b,Ba),aa(b,Ve,i.transition),Nn(d,ma)&&(oe(b,wt),m=C),f.push(b),pe(b,xt,l,{once:!0}),o.appendChild(b)}),Oe(i.interval)&&i.interval>0){var y=function(){clearTimeout(t.playing.timeout),we(f[m],wt),m-=1,m=m>=0?m:p-1,oe(f[m],wt),t.playing.timeout=setTimeout(y,i.interval)},g=function(){clearTimeout(t.playing.timeout),we(f[m],wt),m+=1,m=m<p?m:0,oe(f[m],wt),t.playing.timeout=setTimeout(g,i.interval)};p>1&&(this.playing={prev:y,next:g,timeout:setTimeout(g,i.interval)})}return this},stop:function(){var t=this;if(!this.played)return this;var n=this.element,a=this.options;if(ke(a.stop)&&pe(n,Ao,a.stop,{once:!0}),We(n,Ao)===!1)return this;var i=this.player;return clearTimeout(this.playing.timeout),this.playing=!1,this.played=!1,Se(i.getElementsByTagName("img"),function(o){Be(o,xt,t.onLoadWhenPlay)}),we(i,zn),i.innerHTML="",this.exitFullscreen(),this},full:function(){var t=this,n=this.options,a=this.viewer,i=this.image,o=this.list;return!this.isShown||this.played||this.fulled||!n.inline?this:(this.fulled=!0,this.open(),oe(this.button,Qi),n.transition&&(we(o,Ve),this.viewed&&we(i,Ve)),oe(a,Nr),a.setAttribute("role","dialog"),a.setAttribute("aria-labelledby",this.title.id),a.setAttribute("aria-modal",!0),a.removeAttribute("style"),Lt(a,{zIndex:n.zIndex}),n.focus&&this.enforceFocus(),this.initContainer(),this.viewerData=mt({},this.containerData),this.renderList(),this.viewed&&this.initImage(function(){t.renderImage(function(){n.transition&&setTimeout(function(){oe(i,Ve),oe(o,Ve)},0)})}),this)},exit:function(){var t=this,n=this.options,a=this.viewer,i=this.image,o=this.list;return!this.isShown||this.played||!this.fulled||!n.inline?this:(this.fulled=!1,this.close(),we(this.button,Qi),n.transition&&(we(o,Ve),this.viewed&&we(i,Ve)),n.focus&&this.clearEnforceFocus(),a.removeAttribute("role"),a.removeAttribute("aria-labelledby"),a.removeAttribute("aria-modal"),we(a,Nr),Lt(a,{zIndex:n.zIndexInline}),this.viewerData=mt({},this.parentData),this.renderViewer(),this.renderList(),this.viewed&&this.initImage(function(){t.renderImage(function(){n.transition&&setTimeout(function(){oe(i,Ve),oe(o,Ve)},0)})}),this)},tooltip:function(){var t=this,n=this.options,a=this.tooltipBox,i=this.imageData;return!this.viewed||this.played||!n.tooltip?this:(a.textContent="".concat(Math.round(i.ratio*100),"%"),this.tooltipping?clearTimeout(this.tooltipping):n.transition?(this.fading&&We(a,St),oe(a,zn),oe(a,Ba),oe(a,Ve),a.removeAttribute("aria-hidden"),a.initialOffsetWidth=a.offsetWidth,oe(a,wt)):(oe(a,zn),a.removeAttribute("aria-hidden")),this.tooltipping=setTimeout(function(){n.transition?(pe(a,St,function(){we(a,zn),we(a,Ba),we(a,Ve),a.setAttribute("aria-hidden",!0),t.fading=!1},{once:!0}),we(a,wt),t.fading=!0):(we(a,zn),a.setAttribute("aria-hidden",!0)),t.tooltipping=!1},1e3),this)},toggle:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return this.imageData.ratio===1?this.zoomTo(this.imageData.oldRatio,!0,null,t):this.zoomTo(1,!0,null,t),this},reset:function(){return this.viewed&&!this.played&&(this.imageData=mt({},this.initialImageData),this.renderImage()),this},update:function(){var t=this,n=this.element,a=this.options,i=this.isImg;if(i&&!n.parentNode)return this.destroy();var o=[];if(Se(i?[n]:n.querySelectorAll("img"),function(m){ke(a.filter)?a.filter.call(t,m)&&o.push(m):t.getImageURL(m)&&o.push(m)}),!o.length)return this;if(this.images=o,this.length=o.length,this.ready){var l=[];if(Se(this.items,function(m,y){var g=m.querySelector("img"),d=o[y];d&&g?(d.src!==g.src||d.alt!==g.alt)&&l.push(y):l.push(y)}),Lt(this.list,{width:"auto"}),this.initList(),this.isShown)if(this.length){if(this.viewed){var f=l.indexOf(this.index);if(f>=0)this.viewed=!1,this.view(Math.max(Math.min(this.index-f,this.length-1),0));else{var p=this.items[this.index];oe(p,ma),p.setAttribute("aria-selected",!0)}}}else this.image=null,this.viewed=!1,this.index=0,this.imageData={},this.canvas.innerHTML="",this.title.innerHTML=""}else this.build();return this},destroy:function(){var t=this.element,n=this.options;return t[me]?(this.destroyed=!0,this.ready?(this.played&&this.stop(),n.inline?(this.fulled&&this.exit(),this.unbind()):this.isShown?(this.viewing&&(this.imageRendering?this.imageRendering.abort():this.imageInitializing&&this.imageInitializing.abort()),this.hiding&&this.transitioning.abort(),this.hidden()):this.showing&&(this.transitioning.abort(),this.hidden()),this.ready=!1,this.viewer.parentNode.removeChild(this.viewer)):n.inline&&(this.delaying?this.delaying.abort():this.initializing&&this.initializing.abort()),n.inline||Be(t,Fn,this.onStart),t[me]=void 0,this):this}},nc={getImageURL:function(t){var n=this.options.url;return na(n)?n=t.getAttribute(n):ke(n)?n=n.call(this,t):n="",n},enforceFocus:function(){var t=this;this.clearEnforceFocus(),pe(document,ji,this.onFocusin=function(n){var a=t.viewer,i=n.target;if(!(i===document||i===a||a.contains(i))){for(;i;){if(i.getAttribute("tabindex")!==null||i.getAttribute("aria-modal")==="true")return;i=i.parentElement}a.focus()}})},clearEnforceFocus:function(){this.onFocusin&&(Be(document,ji,this.onFocusin),this.onFocusin=null)},open:function(){var t=this.body;oe(t,Ui),this.scrollbarWidth>0&&(t.style.paddingRight="".concat(this.scrollbarWidth+(parseFloat(this.initialBodyComputedPaddingRight)||0),"px"))},close:function(){var t=this.body;we(t,Ui),this.scrollbarWidth>0&&(t.style.paddingRight=this.initialBodyPaddingRight)},shown:function(){var t=this.element,n=this.options,a=this.viewer;this.fulled=!0,this.isShown=!0,this.render(),this.bind(),this.showing=!1,n.focus&&(a.focus(),this.enforceFocus()),ke(n.shown)&&pe(t,to,n.shown,{once:!0}),We(t,to)!==!1&&this.ready&&this.isShown&&!this.hiding&&this.view(this.index)},hidden:function(){var t=this.element,n=this.options,a=this.viewer;n.fucus&&this.clearEnforceFocus(),this.close(),this.unbind(),oe(a,bn),a.removeAttribute("role"),a.removeAttribute("aria-labelledby"),a.removeAttribute("aria-modal"),a.setAttribute("aria-hidden",!0),this.resetList(),this.resetImage(),this.fulled=!1,this.viewed=!1,this.isShown=!1,this.hiding=!1,this.destroyed||(ke(n.hidden)&&pe(t,ao,n.hidden,{once:!0}),We(t,ao,null,{cancelable:!1}))},requestFullscreen:function(t){var n=this.element.ownerDocument;if(this.fulled&&!(n.fullscreenElement||n.webkitFullscreenElement||n.mozFullScreenElement||n.msFullscreenElement)){var a=n.documentElement;a.requestFullscreen?Mn(t)?a.requestFullscreen(t):a.requestFullscreen():a.webkitRequestFullscreen?a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):a.mozRequestFullScreen?a.mozRequestFullScreen():a.msRequestFullscreen&&a.msRequestFullscreen()}},exitFullscreen:function(){var t=this.element.ownerDocument;this.fulled&&(t.fullscreenElement||t.webkitFullscreenElement||t.mozFullScreenElement||t.msFullscreenElement)&&(t.exitFullscreen?t.exitFullscreen():t.webkitExitFullscreen?t.webkitExitFullscreen():t.mozCancelFullScreen?t.mozCancelFullScreen():t.msExitFullscreen&&t.msExitFullscreen())},change:function(t){var n=this.options,a=this.pointers,i=a[Object.keys(a)[0]];if(i){var o=i.endX-i.startX,l=i.endY-i.startY;switch(this.action){case ka:(o!==0||l!==0)&&(this.pointerMoved=!0,this.move(o,l,t));break;case Kn:this.zoom(Xp(a),!1,null,t);break;case $o:{this.action="switched";var f=Math.abs(o);f>1&&f>Math.abs(l)&&(this.pointers={},o>1?this.prev(n.loop):o<-1&&this.next(n.loop));break}}Se(a,function(p){p.startX=p.endX,p.startY=p.endY})}},isSwitchable:function(){var t=this.imageData,n=this.viewerData;return this.length>1&&t.x>=0&&t.y>=0&&t.width<=n.width&&t.height<=n.height}},ac=Jt.Viewer,rc=function(e){return function(){return e+=1,e}}(-1),Xo=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Tp(this,e),!t||t.nodeType!==1)throw new Error("The first argument is required and must be an element.");this.element=t,this.options=mt({},_i,Mn(n)&&n),this.action=!1,this.fading=!1,this.fulled=!1,this.hiding=!1,this.imageClicked=!1,this.imageData={},this.index=this.options.initialViewIndex,this.isImg=!1,this.isShown=!1,this.length=0,this.moving=!1,this.played=!1,this.playing=!1,this.pointers={},this.ready=!1,this.rotating=!1,this.scaling=!1,this.showing=!1,this.timeout=!1,this.tooltipping=!1,this.viewed=!1,this.viewing=!1,this.wheeling=!1,this.zooming=!1,this.pointerMoved=!1,this.id=rc(),this.init()}return Dp(e,[{key:"init",value:function(){var n=this,a=this.element,i=this.options;if(!a[me]){a[me]=this,i.focus&&!i.keyboard&&(i.focus=!1);var o=a.localName==="img",l=[];if(Se(o?[a]:a.querySelectorAll("img"),function(m){ke(i.filter)?i.filter.call(n,m)&&l.push(m):n.getImageURL(m)&&l.push(m)}),this.isImg=o,this.length=l.length,this.images=l,this.initBody(),On(document.createElement(me).style.transition)&&(i.transition=!1),i.inline){var f=0,p=function(){if(f+=1,f===n.length){var y;n.initializing=!1,n.delaying={abort:function(){clearTimeout(y)}},y=setTimeout(function(){n.delaying=!1,n.build()},0)}};this.initializing={abort:function(){Se(l,function(y){y.complete||(Be(y,xt,p),Be(y,vn,p))})}},Se(l,function(m){if(m.complete)p();else{var y,g;pe(m,xt,y=function(){Be(m,vn,g),p()},{once:!0}),pe(m,vn,g=function(){Be(m,xt,y),p()},{once:!0})}})}else pe(a,Fn,this.onStart=function(m){var y=m.target;y.localName==="img"&&(!ke(i.filter)||i.filter.call(n,y))&&n.view(n.images.indexOf(y))})}}},{key:"build",value:function(){if(!this.ready){var n=this.element,a=this.options,i=n.parentNode,o=document.createElement("div");o.innerHTML=Np;var l=o.querySelector(".".concat(me,"-container")),f=l.querySelector(".".concat(me,"-title")),p=l.querySelector(".".concat(me,"-toolbar")),m=l.querySelector(".".concat(me,"-navbar")),y=l.querySelector(".".concat(me,"-button")),g=l.querySelector(".".concat(me,"-canvas"));if(this.parent=i,this.viewer=l,this.title=f,this.toolbar=p,this.navbar=m,this.button=y,this.canvas=g,this.footer=l.querySelector(".".concat(me,"-footer")),this.tooltipBox=l.querySelector(".".concat(me,"-tooltip")),this.player=l.querySelector(".".concat(me,"-player")),this.list=l.querySelector(".".concat(me,"-list")),l.id="".concat(me).concat(this.id),f.id="".concat(me,"Title").concat(this.id),oe(f,a.title?ga(Array.isArray(a.title)?a.title[0]:a.title):bn),oe(m,a.navbar?ga(a.navbar):bn),aa(y,bn,!a.button),a.keyboard&&y.setAttribute("tabindex",0),a.backdrop&&(oe(l,"".concat(me,"-backdrop")),!a.inline&&a.backdrop!=="static"&&Mr(g,Na,"hide")),na(a.className)&&a.className&&a.className.split($r).forEach(function(I){oe(l,I)}),a.toolbar){var d=document.createElement("ul"),C=Mn(a.toolbar),k=ya.slice(0,3),b=ya.slice(7,9),E=ya.slice(9);C||oe(p,ga(a.toolbar)),Se(C?a.toolbar:ya,function(I,L){var P=C&&Mn(I),S=C?Yr(L):I,F=P&&!On(I.show)?I.show:I;if(!(!F||!a.zoomable&&k.indexOf(S)!==-1||!a.rotatable&&b.indexOf(S)!==-1||!a.scalable&&E.indexOf(S)!==-1)){var O=P&&!On(I.size)?I.size:I,H=P&&!On(I.click)?I.click:I,ae=document.createElement("li");a.keyboard&&ae.setAttribute("tabindex",0),ae.setAttribute("role","button"),oe(ae,"".concat(me,"-").concat(S)),ke(H)||Mr(ae,Na,S),Oe(F)&&oe(ae,ga(F)),["small","large"].indexOf(O)!==-1?oe(ae,"".concat(me,"-").concat(O)):S==="play"&&oe(ae,"".concat(me,"-large")),ke(H)&&pe(ae,Fn,H),d.appendChild(ae)}}),p.appendChild(d)}else oe(p,bn);if(!a.rotatable){var N=p.querySelectorAll('li[class*="rotate"]');oe(N,ea),Se(N,function(I){p.appendChild(I)})}if(a.inline)oe(y,Mp),Lt(l,{zIndex:a.zIndexInline}),window.getComputedStyle(i).position==="static"&&Lt(i,{position:"relative"}),i.insertBefore(l,n.nextSibling);else{oe(y,Op),oe(l,Nr),oe(l,Ba),oe(l,bn),Lt(l,{zIndex:a.zIndex});var T=a.container;na(T)&&(T=n.ownerDocument.querySelector(T)),T||(T=this.body),T.appendChild(l)}if(a.inline&&(this.render(),this.bind(),this.isShown=!0),this.ready=!0,ke(a.ready)&&pe(n,Zi,a.ready,{once:!0}),We(n,Zi)===!1){this.ready=!1;return}this.ready&&a.inline&&this.view(this.index)}}}],[{key:"noConflict",value:function(){return window.Viewer=ac,e}},{key:"setDefaults",value:function(n){mt(_i,Mn(n)&&n)}}])}();mt(Xo.prototype,Jp,Zp,ec,tc,nc);const Go=AbortController,Jo=Go.prototype,ic=Jo.abort,oc=Nt(Jo,"signal").get,Zo=()=>{const e=new Go;return{abort:zo(ic,e),signal:Pr(oc,e)}},Kr=AbortSignal.prototype,mo=Kr.throwIfAborted,el=dt(Nt(Kr,"aborted").get),tl=dt(Nt(Kr,"reason").get);mo!=null&&dt(mo);const lc={once:!0},sc=(e,t,n=lc)=>{if(typeof t!="function")throw new TypeError("onAbort: Argument 2 is not callable.");const a=()=>{let i;try{i=tl(e)}catch(o){i=o}t(i)};el(e)?ns(a):De(e,"abort",a,n)};class dc{#a;#n=new Map;#e=new Map;#t=new Map;#r=t=>{const{target:n}=t;if(n!=null){const o=n.tagName;if(o==="INPUT"||o==="TEXTAREA"||n.isContentEditable)return}const{key:a}=t,i=this.#e.get(a);if(i!=null){const o=this.#n;t.repeat||o.set(a,-1);const l=(o.get(a)??-1)+1;o.set(a,l),t.preventDefault(),t.stopPropagation(),i(t,l);return}};#i=t=>{const{key:n}=t,a=this.#n,i=a.get(n);if(a.delete(n),i==null)return;const o=this.#t.get(n);o!=null&&(t.preventDefault(),t.stopPropagation(),o(t,i))};constructor(t=Dt,n){this.#a=t;const a={capture:!0,signal:n};De(t,"keydown",this.#r,a),De(t,"keyup",this.#i,a)}set(t,n,a){n==null&&a==null?(this.#e.delete(t),this.#t.delete(t)):(this.#e.set(t,n??hi),this.#t.set(t,a??hi))}}const{slice:yo,startsWith:go}=Vr,nl=history,Xr=History.prototype,pc=PopStateEvent.prototype,al=e=>t=>{Pr(e,nl,t,"",t!=null?`#?${new URLSearchParams(t)}`:"#")},cc=zo(Nt(Xr,"state").get,nl),uc=dt(Nt(pc,"state").get),bo=al(Xr.pushState),Rr=al(Xr.replaceState),hc=(e=location.hash)=>{let t,n;if(go(e,"#!"))n=new URL(decodeURIComponent(yo(e,2))).searchParams;else if(go(e,"#")){n=new URLSearchParams(yo(e,1));let a=n.get(".");a!=null&&(n=new URL(a).searchParams)}return n!=null&&(t=No(n),Rr(t)),t};/*!
 * hash-wasm (https://www.npmjs.com/package/hash-wasm)
 * (c) Dani Biro
 * @license MIT
 */function Sa(e,t,n,a){function i(o){return o instanceof n?o:new n(function(l){l(o)})}return new(n||(n=Promise))(function(o,l){function f(y){try{m(a.next(y))}catch(g){l(g)}}function p(y){try{m(a.throw(y))}catch(g){l(g)}}function m(y){y.done?o(y.value):i(y.value).then(f,p)}m((a=a.apply(e,[])).next())})}class Re{constructor(){this.mutex=Promise.resolve()}lock(){let t=()=>{};return this.mutex=this.mutex.then(()=>new Promise(t)),new Promise(n=>{t=n})}dispatch(t){return Sa(this,void 0,void 0,function*(){const n=yield this.lock();try{return yield Promise.resolve(t())}finally{n()}})}}var vr;function fc(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global}const qr=fc(),wr=(vr=qr.Buffer)!==null&&vr!==void 0?vr:null,Ac=qr.TextEncoder?new qr.TextEncoder:null;function rl(e,t){return(e&15)+(e>>6|e>>3&8)<<4|(t&15)+(t>>6|t>>3&8)}function mc(e,t){const n=t.length>>1;for(let a=0;a<n;a++){const i=a<<1;e[a]=rl(t.charCodeAt(i),t.charCodeAt(i+1))}}function yc(e,t){if(e.length!==t.length*2)return!1;for(let n=0;n<t.length;n++){const a=n<<1;if(t[n]!==rl(e.charCodeAt(a),e.charCodeAt(a+1)))return!1}return!0}const vo=87,wo=48;function xo(e,t,n){let a=0;for(let i=0;i<n;i++){let o=t[i]>>>4;e[a++]=o>9?o+vo:o+wo,o=t[i]&15,e[a++]=o>9?o+vo:o+wo}return String.fromCharCode.apply(null,e)}const Eo=wr!==null?e=>{if(typeof e=="string"){const t=wr.from(e,"utf8");return new Uint8Array(t.buffer,t.byteOffset,t.length)}if(wr.isBuffer(e))return new Uint8Array(e.buffer,e.byteOffset,e.length);if(ArrayBuffer.isView(e))return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);throw new Error("Invalid data type!")}:e=>{if(typeof e=="string")return Ac.encode(e);if(ArrayBuffer.isView(e))return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);throw new Error("Invalid data type!")},Co="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Xn=new Uint8Array(256);for(let e=0;e<Co.length;e++)Xn[Co.charCodeAt(e)]=e;function gc(e){let t=Math.floor(e.length*.75);const n=e.length;return e[n-1]==="="&&(t-=1,e[n-2]==="="&&(t-=1)),t}function bc(e){const t=gc(e),n=e.length,a=new Uint8Array(t);let i=0;for(let o=0;o<n;o+=4){const l=Xn[e.charCodeAt(o)],f=Xn[e.charCodeAt(o+1)],p=Xn[e.charCodeAt(o+2)],m=Xn[e.charCodeAt(o+3)];a[i]=l<<2|f>>4,i+=1,a[i]=(f&15)<<4|p>>2,i+=1,a[i]=(p&3)<<6|m&63,i+=1}return a}const va=16*1024,$n=4,vc=new Re,xr=new Map;function wc(e,t){return Sa(this,void 0,void 0,function*(){let n=null,a=null,i=!1;if(typeof WebAssembly>"u")throw new Error("WebAssembly is not supported in this environment!");const o=(S,F=0)=>{a.set(S,F)},l=()=>a,f=()=>n.exports,p=S=>{n.exports.Hash_SetMemorySize(S);const F=n.exports.Hash_GetBuffer(),O=n.exports.memory.buffer;a=new Uint8Array(O,F,S)},m=()=>new DataView(n.exports.memory.buffer).getUint32(n.exports.STATE_SIZE,!0),y=vc.dispatch(()=>Sa(this,void 0,void 0,function*(){if(!xr.has(e.name)){const F=bc(e.data),O=WebAssembly.compile(F);xr.set(e.name,O)}const S=yield xr.get(e.name);n=yield WebAssembly.instantiate(S,{})})),g=()=>Sa(this,void 0,void 0,function*(){n||(yield y);const S=n.exports.Hash_GetBuffer(),F=n.exports.memory.buffer;a=new Uint8Array(F,S,va)}),d=(S=null)=>{i=!0,n.exports.Hash_Init(S)},C=S=>{let F=0;for(;F<S.length;){const O=S.subarray(F,F+va);F+=O.length,a.set(O),n.exports.Hash_Update(O.length)}},k=S=>{if(!i)throw new Error("update() called before init()");const F=Eo(S);C(F)},b=new Uint8Array(t*2),E=(S,F=null)=>{if(!i)throw new Error("digest() called before init()");return i=!1,n.exports.Hash_Final(F),S==="binary"?a.slice(0,t):xo(b,a,t)},N=()=>{if(!i)throw new Error("save() can only be called after init() and before digest()");const S=n.exports.Hash_GetState(),F=m(),O=n.exports.memory.buffer,H=new Uint8Array(O,S,F),ae=new Uint8Array($n+F);return mc(ae,e.hash),ae.set(H,$n),ae},T=S=>{if(!(S instanceof Uint8Array))throw new Error("load() expects an Uint8Array generated by save()");const F=n.exports.Hash_GetState(),O=m(),H=$n+O,ae=n.exports.memory.buffer;if(S.length!==H)throw new Error(`Bad state length (expected ${H} bytes, got ${S.length})`);if(!yc(e.hash,S.subarray(0,$n)))throw new Error("This state was written by an incompatible hash implementation");const le=S.subarray($n);new Uint8Array(ae,F,O).set(le),i=!0},I=S=>typeof S=="string"?S.length<va/4:S.byteLength<va;let L=I;switch(e.name){case"argon2":case"scrypt":L=()=>!0;break;case"blake2b":case"blake2s":L=(S,F)=>F<=512&&I(S);break;case"blake3":L=(S,F)=>F===0&&I(S);break;case"xxhash64":case"xxhash3":case"xxhash128":case"crc64":L=()=>!1;break}const P=(S,F=null,O=null)=>{if(!L(S,F))return d(F),k(S),E("hex",O);const H=Eo(S);return a.set(H),n.exports.Hash_Calculate(H.length,F,O),xo(b,a,t)};return yield g(),{getMemory:l,writeMemory:o,getExports:f,setMemorySize:p,init:d,update:k,digest:E,save:N,load:T,calculate:P,hashLength:t}})}new Re;new Re;new Re;new Re;new Re;new Re;new Re;var xc="md5",Ec="AGFzbQEAAAABEgRgAAF/YAAAYAF/AGACf38BfwMIBwABAgMBAAIFBAEBAgIGDgJ/AUGgigULfwBBgAgLB3AIBm1lbW9yeQIADkhhc2hfR2V0QnVmZmVyAAAJSGFzaF9Jbml0AAELSGFzaF9VcGRhdGUAAgpIYXNoX0ZpbmFsAAQNSGFzaF9HZXRTdGF0ZQAFDkhhc2hfQ2FsY3VsYXRlAAYKU1RBVEVfU0laRQMBCoMaBwUAQYAJCy0AQQBC/rnrxemOlZkQNwKQiQFBAEKBxpS6lvHq5m83AoiJAUEAQgA3AoCJAQu+BQEHf0EAQQAoAoCJASIBIABqQf////8BcSICNgKAiQFBAEEAKAKEiQEgAiABSWogAEEddmo2AoSJAQJAAkACQAJAAkACQCABQT9xIgMNAEGACSEEDAELIABBwAAgA2siBUkNASAFQQNxIQZBACEBAkAgA0E/c0EDSQ0AIANBgIkBaiEEIAVB/ABxIQdBACEBA0AgBCABaiICQRhqIAFBgAlqLQAAOgAAIAJBGWogAUGBCWotAAA6AAAgAkEaaiABQYIJai0AADoAACACQRtqIAFBgwlqLQAAOgAAIAcgAUEEaiIBRw0ACwsCQCAGRQ0AIANBmIkBaiECA0AgAiABaiABQYAJai0AADoAACABQQFqIQEgBkF/aiIGDQALC0GYiQFBwAAQAxogACAFayEAIAVBgAlqIQQLIABBwABPDQEgACECDAILIABFDQIgAEEDcSEGQQAhAQJAIABBBEkNACADQYCJAWohBCAAQXxxIQBBACEBA0AgBCABaiICQRhqIAFBgAlqLQAAOgAAIAJBGWogAUGBCWotAAA6AAAgAkEaaiABQYIJai0AADoAACACQRtqIAFBgwlqLQAAOgAAIAAgAUEEaiIBRw0ACwsgBkUNAiADQZiJAWohAgNAIAIgAWogAUGACWotAAA6AAAgAUEBaiEBIAZBf2oiBg0ADAMLCyAAQT9xIQIgBCAAQUBxEAMhBAsgAkUNACACQQNxIQZBACEBAkAgAkEESQ0AIAJBPHEhAEEAIQEDQCABQZiJAWogBCABaiICLQAAOgAAIAFBmYkBaiACQQFqLQAAOgAAIAFBmokBaiACQQJqLQAAOgAAIAFBm4kBaiACQQNqLQAAOgAAIAAgAUEEaiIBRw0ACwsgBkUNAANAIAFBmIkBaiAEIAFqLQAAOgAAIAFBAWohASAGQX9qIgYNAAsLC4cQARl/QQAoApSJASECQQAoApCJASEDQQAoAoyJASEEQQAoAoiJASEFA0AgACgCCCIGIAAoAhgiByAAKAIoIgggACgCOCIJIAAoAjwiCiAAKAIMIgsgACgCHCIMIAAoAiwiDSAMIAsgCiANIAkgCCAHIAMgBmogAiAAKAIEIg5qIAUgBCACIANzcSACc2ogACgCACIPakH4yKq7fWpBB3cgBGoiECAEIANzcSADc2pB1u6exn5qQQx3IBBqIhEgECAEc3EgBHNqQdvhgaECakERdyARaiISaiAAKAIUIhMgEWogACgCECIUIBBqIAQgC2ogEiARIBBzcSAQc2pB7p33jXxqQRZ3IBJqIhAgEiARc3EgEXNqQa+f8Kt/akEHdyAQaiIRIBAgEnNxIBJzakGqjJ+8BGpBDHcgEWoiEiARIBBzcSAQc2pBk4zBwXpqQRF3IBJqIhVqIAAoAiQiFiASaiAAKAIgIhcgEWogDCAQaiAVIBIgEXNxIBFzakGBqppqakEWdyAVaiIQIBUgEnNxIBJzakHYsYLMBmpBB3cgEGoiESAQIBVzcSAVc2pBr++T2nhqQQx3IBFqIhIgESAQc3EgEHNqQbG3fWpBEXcgEmoiFWogACgCNCIYIBJqIAAoAjAiGSARaiANIBBqIBUgEiARc3EgEXNqQb6v88p4akEWdyAVaiIQIBUgEnNxIBJzakGiosDcBmpBB3cgEGoiESAQIBVzcSAVc2pBk+PhbGpBDHcgEWoiFSARIBBzcSAQc2pBjofls3pqQRF3IBVqIhJqIAcgFWogDiARaiAKIBBqIBIgFSARc3EgEXNqQaGQ0M0EakEWdyASaiIQIBJzIBVxIBJzakHiyviwf2pBBXcgEGoiESAQcyAScSAQc2pBwOaCgnxqQQl3IBFqIhIgEXMgEHEgEXNqQdG0+bICakEOdyASaiIVaiAIIBJqIBMgEWogDyAQaiAVIBJzIBFxIBJzakGqj9vNfmpBFHcgFWoiECAVcyAScSAVc2pB3aC8sX1qQQV3IBBqIhEgEHMgFXEgEHNqQdOokBJqQQl3IBFqIhIgEXMgEHEgEXNqQYHNh8V9akEOdyASaiIVaiAJIBJqIBYgEWogFCAQaiAVIBJzIBFxIBJzakHI98++fmpBFHcgFWoiECAVcyAScSAVc2pB5puHjwJqQQV3IBBqIhEgEHMgFXEgEHNqQdaP3Jl8akEJdyARaiISIBFzIBBxIBFzakGHm9Smf2pBDncgEmoiFWogBiASaiAYIBFqIBcgEGogFSAScyARcSASc2pB7anoqgRqQRR3IBVqIhAgFXMgEnEgFXNqQYXSj896akEFdyAQaiIRIBBzIBVxIBBzakH4x75nakEJdyARaiISIBFzIBBxIBFzakHZhby7BmpBDncgEmoiFWogFyASaiATIBFqIBkgEGogFSAScyARcSASc2pBipmp6XhqQRR3IBVqIhAgFXMiFSASc2pBwvJoakEEdyAQaiIRIBVzakGB7ce7eGpBC3cgEWoiEiARcyIaIBBzakGiwvXsBmpBEHcgEmoiFWogFCASaiAOIBFqIAkgEGogFSAac2pBjPCUb2pBF3cgFWoiECAVcyIVIBJzakHE1PulempBBHcgEGoiESAVc2pBqZ/73gRqQQt3IBFqIhIgEXMiCSAQc2pB4JbttX9qQRB3IBJqIhVqIA8gEmogGCARaiAIIBBqIBUgCXNqQfD4/vV7akEXdyAVaiIQIBVzIhUgEnNqQcb97cQCakEEdyAQaiIRIBVzakH6z4TVfmpBC3cgEWoiEiARcyIIIBBzakGF4bynfWpBEHcgEmoiFWogGSASaiAWIBFqIAcgEGogFSAIc2pBhbqgJGpBF3cgFWoiESAVcyIQIBJzakG5oNPOfWpBBHcgEWoiEiAQc2pB5bPutn5qQQt3IBJqIhUgEnMiByARc2pB+PmJ/QFqQRB3IBVqIhBqIAwgFWogDyASaiAGIBFqIBAgB3NqQeWssaV8akEXdyAQaiIRIBVBf3NyIBBzakHExKShf2pBBncgEWoiEiAQQX9zciARc2pBl/+rmQRqQQp3IBJqIhAgEUF/c3IgEnNqQafH0Nx6akEPdyAQaiIVaiALIBBqIBkgEmogEyARaiAVIBJBf3NyIBBzakG5wM5kakEVdyAVaiIRIBBBf3NyIBVzakHDs+2qBmpBBncgEWoiECAVQX9zciARc2pBkpmz+HhqQQp3IBBqIhIgEUF/c3IgEHNqQf3ov39qQQ93IBJqIhVqIAogEmogFyAQaiAOIBFqIBUgEEF/c3IgEnNqQdG7kax4akEVdyAVaiIQIBJBf3NyIBVzakHP/KH9BmpBBncgEGoiESAVQX9zciAQc2pB4M2zcWpBCncgEWoiEiAQQX9zciARc2pBlIaFmHpqQQ93IBJqIhVqIA0gEmogFCARaiAYIBBqIBUgEUF/c3IgEnNqQaGjoPAEakEVdyAVaiIQIBJBf3NyIBVzakGC/c26f2pBBncgEGoiESAVQX9zciAQc2pBteTr6XtqQQp3IBFqIhIgEEF/c3IgEXNqQbul39YCakEPdyASaiIVIARqIBYgEGogFSARQX9zciASc2pBkaeb3H5qQRV3aiEEIBUgA2ohAyASIAJqIQIgESAFaiEFIABBwABqIQAgAUFAaiIBDQALQQAgAjYClIkBQQAgAzYCkIkBQQAgBDYCjIkBQQAgBTYCiIkBIAALyAMBBX9BACgCgIkBQT9xIgBBmIkBakGAAToAACAAQQFqIQECQAJAAkACQCAAQT9zIgJBB0sNACACRQ0BIAFBmIkBakEAOgAAIAJBAUYNASAAQZqJAWpBADoAACACQQJGDQEgAEGbiQFqQQA6AAAgAkEDRg0BIABBnIkBakEAOgAAIAJBBEYNASAAQZ2JAWpBADoAACACQQVGDQEgAEGeiQFqQQA6AAAgAkEGRg0BIABBn4kBakEAOgAADAELIAJBCEYNAkE2IABrIgMhBAJAIAJBA3EiAEUNAEEAIABrIQRBACEAA0AgAEHPiQFqQQA6AAAgBCAAQX9qIgBHDQALIAMgAGohBAsgA0EDSQ0CDAELQZiJAUHAABADGkEAIQFBNyEECyABQYCJAWohAEF/IQIDQCAAIARqQRVqQQA2AAAgAEF8aiEAIAQgAkEEaiICRw0ACwtBAEEAKAKEiQE2AtSJAUEAQQAoAoCJASIAQRV2OgDTiQFBACAAQQ12OgDSiQFBACAAQQV2OgDRiQFBACAAQQN0IgA6ANCJAUEAIAA2AoCJAUGYiQFBwAAQAxpBAEEAKQKIiQE3A4AJQQBBACkCkIkBNwOICQsGAEGAiQELMwBBAEL+uevF6Y6VmRA3ApCJAUEAQoHGlLqW8ermbzcCiIkBQQBCADcCgIkBIAAQAhAECwsLAQBBgAgLBJgAAAA=",Cc="e6508e4b",kc={name:xc,data:Ec,hash:Cc};new Re;function Bc(){return wc(kc,16).then(e=>{e.init();const t={init:()=>(e.init(),t),update:n=>(e.update(n),t),digest:n=>e.digest(n),save:()=>e.save(),load:n=>(e.load(n),t),blockSize:64,digestSize:16};return t})}new Re;new Re;new Re;new Re;new Re;new Re;new Re;new Re;new Re;new Re;new Re;new Re;new Re;new Re;let ko,Bo;class Ic extends TransformStream{static{ko=class{static{Bo=(t,n)=>{t.#t=n}}#n;#e=null;#t=null;constructor(t){this.#n=t}async start(t){this.#e=await this.#n}transform(t,n){this.#e.update(t),n.enqueue(t)}flush(t){this.#t.#a=this.#e.digest("hex")}}}#a=null;get result(){return this.#a}constructor(t){const n=new ko(t);super(n),Bo(n,this)}}const Sc=()=>new Ic(Bc());let il="api.dandanplay.net",ol=`https://${il}/`;const Tc=[il,"cas.dandanplay.net"],Dc=Object.freeze({__proto__:null,tvseries:"TV动画",tvspecial:"TV特别",ova:"OVA",movie:"电影",musicvideo:"MV",web:"Web",other:"其他",jpmovie:"日本电影",jpdrama:"日本电视剧",unknown:"未知"}),ll=async(e,t,n={})=>{e=new URL(e,ol).href,t!=null&&(n.method??="POST",as(t)?(n.headers=new Headers(n.headers),n.headers.set("content-type","application/json"),n.body=JSON.stringify(t)):n.body=t),n.credentials??="omit";const a=new Request(e,n);a.headers.has("accept")||a.headers.set("accept","application/json");const i=await Oo(a),{status:o}=i;if(!(o>=200&&o<300))throw new TypeError(`Request failed with status code ${o}`);let l;const f=i.headers.get("content-type"),p="application/json";if((f===p||f?.startsWith(p))&&(l=await i.json(),l.errorMessage))throw new TypeError("DandanPlay API Error: "+l.errorMessage,{cause:l});return{request:a,response:i,data:l}};async function Lc(e,t){let n=t?.size??0,a="00000000000000000000000000000000";if(t!=null)try{const o=Sc();await t.slice(0,16*1024*1024).stream().pipeThrough(o).pipeTo(new WritableStream),a=o.result}catch(o){console.warn("MD5 Error: ",o)}return(await ll("api/v2/match",{fileName:e,fileHash:a,fileSize:n,matchMode:"hashAndFileName"})).data}const sl=(e,t=!0)=>`${ol}api/v2/comment/${e}${t?"?withRelated=true":""}`;async function zc(e,t=!0){const n=sl(e,t);return(await ll(n)).data.comments}const Nc=`
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
  const evtProto = EventTarget.prototype
  const signalProto = AbortSignal.prototype, { throwIfAborted: _throwIf } = signalProto

  const bindCall = apply(_bind, _bind, [_call])
  const on = bindCall(evtProto.addEventListener), _options = { once: true }
  const getAborted = bindCall(getProp(signalProto, 'aborted').get)
  const getReason = bindCall(getProp(signalProto, 'reason').get)
  const throwIfAborted = _throwIf != null ? bindCall(_throwIf) : (signal) => {
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
`,{fromCharCode:ln}=String,{from:Oc}=Array,{toLowerCase:Io}=Vr,{join:Mc}=Fr,Rc=()=>{const{href:e,hostname:t}=new URL(location.pathname,location.href);return`// ==UserScript==
// @name dispatch-GM_fetch
// @namespace ${e}
// @version 0.1
// @description dispatch GM_fetch and GM_xmlhttpRequest
// @author ${t}
// @match  ${e}
// @run-at document-start
// @grant GM_xmlhttpRequest
// @grant GM_fetch
${Mc(Oc(Tc,n=>`// @connect ${n}`),`
`)}
// @connect *
// ==/UserScript==
'use strict';
${Nc}
var GM_fetch
const { Reflect: { apply }, dispatchEvent: _emit } = unsafeWindow
const e = new CustomEvent('external:tampermonkey:grant', { detail: { GM_xmlhttpRequest, GM_fetch } })
unsafeWindow.addEventListener('load', () => { apply(_emit, unsafeWindow, [e]) }, { once: !0, capture: !0 })
`},Ta=`${ln(84)}${ln(117)}${ln(99)}${ln(97)}${ln(111)}`,qc=async()=>{const{href:e,hostname:t}=new URL(location.pathname,location.href),{finalUrl:n}=await new Promise((a,i)=>{Yn({url:`https://www.${Io(Ta)}.${ln(102)}${ln(117)}${ln(110)}/favicon.ico`,onload(o){a(o)},onerror:i})});return`// ==UserScript==
// @name ${Ta}-Redirector
// @namespace ${e}
// @version 0.1
// @description try to take over the world!
// @author ${t}
// @match ${new URL("/",n)}play/*/
// @include /^https?:\\/\\/www\\.${Io(Ta)}[^/]*?\\/play\\/h\\d+\\/$/
// @run-at document-start
// ==/UserScript==
!(async function () {
  'use strict';
  const doc = document, { apply } = Reflect, { STRING_TYPE } = XPathResult
  const { addEventListener: _on, removeEventListener: _off } = EventTarget.prototype
  const once = (target, type) => new Promise(ok => { apply(_on, target, [type, ok, { once: true }]) })
  const tick0_5 = cb => setTimeout(cb, 500), raf = requestAnimationFrame
  const wait = (cb, tick = raf) => new Promise((ok, reject, next, _) => {
    (next = () => { try { _ = cb(); _ === void 0 ? tick(next) : ok(_) } catch (e) { reject(e) } })()
  })

  const createUrl = (title, url) => \`web+player:?\${new URLSearchParams({ title, url })}\`

  await once(doc, 'DOMContentLoaded')
  const el = await wait(() => doc.querySelector('#video_part #part_lists a[pid]') ?? void 0, tick0_5)
  const title = doc.evaluate('//h1[contains(@class,"show_title")]/text()', doc, null, STRING_TYPE, null).stringValue
  const hasPartName = !0
  const xpath = doc.createExpression('concat("[",./*/span/text(),"]",./*/em/text())', null)
  const lists = el.closest('#part_lists').cloneNode(true)
  for (const el of lists.querySelectorAll('a[pid]')) {
    let m = el.getAttribute('pid')?.match(/(^|&)file=([^&]*)(&|$)/i)
    if (m != null) {
      let result = hasPartName ? xpath.evaluate(el, STRING_TYPE, null) : null
      el.href = createUrl(hasPartName ? \`\${title} \${result.stringValue}\` : title, unescape(m[2]))
    }
  }
  const part = el.closest('#video_part')
  part.append(lists)
  part.style.display = ''
  console.log(title, el, lists)
})();
`},{min:Pc,max:Vc}=Math,dl=HTMLElement.prototype,qa=HTMLMediaElement.prototype,Gr=TimeRanges.prototype,Er=dt(CSSStyleDeclaration.prototype.setProperty),Fc=dl.getBoundingClientRect,Wc=dt(Nt(dl,"style").get),pl=Nt(qa,"currentTime"),_c=dt(pl.get),Qc=dt(pl.set),Uc=dt(Nt(qa,"duration").get),Hc=dt(Nt(qa,"buffered").get),jc=dt(Nt(qa,"played").get),$c=dt(Nt(Gr,"length").get),Yc=dt(Gr.start),Kc=dt(Gr.end),cn="ivu-loading-bar",Xc=`${cn} ${cn}--player`,Gc=`${cn}-inner ${cn}-inner--pointer`,Jc=`${cn}-inner ${cn}-inner-color--buffered`,Zc=`${cn}-inner ${cn}-inner-color-primary`;function*So(e,t,n,a){let i=0,o=$c(e);for(;i<o;i++){const l=Yc(e,i)/t,f=Kc(e,i)/t-l;yield V("div",{class:n,key:`${a}-${i}`,style:`left:${l}%;width:${f}%`})}}const eu=xn({props:{video:{type:HTMLVideoElement}},setup(e,{emit:t}){const n=Xe();let a,i=null,o=!1,l=0,f,p;const m=pn(er),y=pn(er),g=O=>{l=Uc(a)/100,Er(S,"display",l>0?"":"none")},d=O=>{f=Hc(a),m.value=null},C=O=>{p=jc(a),y.value=null,o||Er(S,"left",`${_c(a)/l}%`)},k=O=>{t("ratechange",O)},b=O=>{g(),d(),C(),k(O)};rs(()=>Mo(()=>e.video,O=>{if(a=O,i?.(),a==null){i=null,l=0,m.value=y.value=er,f=p=void 0;return}let H=Zo();({abort:i}=H),De(a,"loadstart",b,H),De(a,"durationchange",g,H),De(a,"loadedmetadata",d,H),De(a,"progress",d,H),De(a,"seeking",C,H),De(a,"timeupdate",C,H),De(a,"ratechange",k,H),b(null)},{immediate:!0}));let E,N,T;const I=O=>{l>0&&(o=!0,De(Dt,"mousemove",L),De(Dt,"mouseup",P),{x:E,width:N}=Pr(Fc,n.vnode.el),L(O))},L=O=>{T=Pc(Vc((O.clientX-E)/N,0),1)*100,Er(S,"left",`${T}%`)},P=O=>{o=!1,Et(Dt,"mousemove",L),Et(Dt,"mouseup",P),L(O),Qc(a,T*l)};Ro(()=>i?.());let S,F;return()=>V("div",{class:Xc,onMousedown:I},[F??=V("div",{class:Gc,key:"pointer",ref(O){S=Wc(O)}}),...m.value??=[...So(f,l,Jc,"buffered")],...y.value??=[...So(p,l,Zc,"played")]])}}),{isArray:tu}=Array,nu=xn({emits:{dragover:null,drop:null},methods:{handle(e){this.$emit(e.type,e)}},beforeMount(){De(Dt,"dragover",this.handle),De(Dt,"drop",this.handle)},beforeUnmount(){Et(Dt,"dragover",this.handle),Et(Dt,"drop",this.handle)},render(){return ge("global")}}),au=xn({name:"DropFile",emits:{change(e){return tu(e)}},props:{accept:{type:String,default:""},global:{type:Boolean,default:!1},reason:{type:String,default:""},multiple:{type:Boolean,default:!0},paste:{type:Boolean,default:!1}},setup(e,t){return{textarea:pn(null),file:pn(null)}},methods:{handleClick(e){this.file.click(),e.target.blur(),e.preventDefault(),e.stopPropagation()},handleChange(e){const t=this.file.files;t?.length>0&&this.$emit("change",Array.from(t))},handleDragover(e){e.preventDefault(),e.stopPropagation()},handleDrop(e){const{target:t}=e;if(this.global&&!this.$el.contains(t)&&e.type!=="paste"){const a=t.tagName;if(a==="INPUT"||a==="TEXTAREA"||t.isContentEditable)return}e.preventDefault(),e.stopPropagation();const n=(e.dataTransfer??e.clipboardData).files;n.length>0&&this.$emit("change",Array.from(n))}},render(){const e=this,t=e.$slots.default;return V("div",{class:"ivu-upload ivu-upload-drag",onDragover:e.handleDragover,onDrop:e.handleDrop},[e.global?V(nu,{onDragover:e.handleDragover,onDrop:e.handleDrop}):null,V("input",{ref:"file",type:"file",accept:e.accept,multiple:e.multiple,onChange:e.handleChange}),V("textarea",{ref:"textarea",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",border:"0 none",resize:"none",cursor:"pointer",opacity:"0"},onCopy:e.handleDragover,onPaste:e.handleDrop,onClick:e.handleClick}),t!=null?t():[V("div",{class:"ivu-card-head",style:"text-align: left"},[V("p",null,[V(_t,{type:"ios-folder-open",size:20}),`单击或拖动${e.reason}文件到此${e.global?"页面":"处"}`])]),V("div",{class:"ivu-card-body"},e.$slots.body?.())]])}}),ru=xn({name:"PlayList",emits:["play"],props:{list:{type:Array,required:!0},name:{type:String,default:"播放列表"}},data(){return{isDrawerOpen:!1,index:0}},watch:{list(e,t){e!==t&&this.reset()}},computed:{title(){const{name:e,index:t,list:n}=this;return`${e}[${n.length===0?"0/0":`${t+1}/${n.length}`}]`}},methods:{set(e){this.isDrawerOpen=!1,this.index=e,this.current()},reset(){this.index=0,this.current()},prev(){--this.index<0&&(this.index=(this.list.length||1)-1),this.current()},current(){const e=this.list[this.index];e!=null&&this.$emit("play",e)},next(){++this.index>=this.list.length&&(this.index=0),this.current()},delete(e){const t=this,n=t.index;t.list.splice(e,1),n>=t.list.length?t.prev():n===e&&t.current()},openDrawer(){this.isDrawerOpen=!0},setDrawer(e){this.isDrawerOpen=e}},render(e,t){const n=this,{title:a}=n;return V(At,{title:a},t[64]??={extra:()=>[V(Jn,null,t[66]??=()=>[V(Ke,{onClick:n.openDrawer},()=>"详细信息"),V(Ke,{onClick:n.prev},()=>"上一个"),V(Ke,{onClick:n.next},()=>"下一个")]),V(Gd,{title:a,width:384,modelValue:n.isDrawerOpen,"onUpdate:modelValue":n.setDrawer},t[75]??=()=>[V(za,{onOnClick:n.set,style:"padding: 0px"},t[78]??=()=>Array.from(n.list,(i,o)=>V(At,{title:i.name,name:o,selected:n.index===o},{extra:()=>V(Ke,{onClick(l){l.stopPropagation(),n.delete(o)}},()=>V(_t,{type:"md-close"}))})))])]})}});var Cr={exports:{}},To;function iu(){return To||(To=1,function(e,t){(function(n,a){e.exports=a()})(self,()=>(()=>{var n={1916:(l,f,p)=>{var m=p(6877);l.exports=function(y){var g,d="",C=(y=y||{}).video,k=y.options,b=m.$escape,E=y.tran,N=y.icons,T=y.index,I=m.$each;return d+=`<div class="dplayer-mask"></div>
<div class="dplayer-video-wrap">
    `,g=p(1568)(C),d+=g,d+=`
    `,k.logo&&(d+=`
    <div class="dplayer-logo">
        <img src="`,d+=b(k.logo),d+=`">
    </div>
    `),d+=`
    <div class="dplayer-danmaku"`,k.danmaku&&k.danmaku.bottm&&(d+=' style="margin-bottom:',d+=b(k.danmaku.bottm),d+='"'),d+=`>
        <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>
    </div>
    <div class="dplayer-subtitle"></div>
    <div class="dplayer-bezel">
        <span class="dplayer-bezel-icon"></span>
        `,k.danmaku&&(d+=`
        <span class="dplayer-danloading">`,d+=b(E("danmaku-loading")),d+=`</span>
        `),d+=`
        <span class="diplayer-loading-icon">`,d+=N.loading,d+=`</span>
    </div>
</div>
<div class="dplayer-controller-mask"></div>
<div class="dplayer-controller">
    <div class="dplayer-icons dplayer-comment-box">
        <button class="dplayer-icon dplayer-comment-setting-icon" data-balloon="`,d+=b(E("setting")),d+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,d+=N.pallette,d+=`</span>
        </button>
        <div class="dplayer-comment-setting-box">
            <div class="dplayer-comment-setting-color">
                <div class="dplayer-comment-setting-title">`,d+=b(E("set-danmaku-color")),d+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,d+=b(T),d+=`" value="#fff" checked>
                    <span style="background: #fff;"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,d+=b(T),d+=`" value="#e54256">
                    <span style="background: #e54256"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,d+=b(T),d+=`" value="#ffe133">
                    <span style="background: #ffe133"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,d+=b(T),d+=`" value="#64DD17">
                    <span style="background: #64DD17"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,d+=b(T),d+=`" value="#39ccff">
                    <span style="background: #39ccff"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,d+=b(T),d+=`" value="#D500F9">
                    <span style="background: #D500F9"></span>
                </label>
            </div>
            <div class="dplayer-comment-setting-type">
                <div class="dplayer-comment-setting-title">`,d+=b(E("set-danmaku-type")),d+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,d+=b(T),d+=`" value="1">
                    <span>`,d+=b(E("top")),d+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,d+=b(T),d+=`" value="0" checked>
                    <span>`,d+=b(E("rolling")),d+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,d+=b(T),d+=`" value="2">
                    <span>`,d+=b(E("bottom")),d+=`</span>
                </label>
            </div>
        </div>
        <input class="dplayer-comment-input" type="text" placeholder="`,d+=b(E("input-danmaku-enter")),d+=`" maxlength="30">
        <button class="dplayer-icon dplayer-send-icon" data-balloon="`,d+=b(E("send")),d+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,d+=N.send,d+=`</span>
        </button>
    </div>
    <div class="dplayer-icons dplayer-icons-left">
        <button class="dplayer-icon dplayer-play-icon">
            <span class="dplayer-icon-content">`,d+=N.play,d+=`</span>
        </button>
        <div class="dplayer-volume">
            <button class="dplayer-icon dplayer-volume-icon">
                <span class="dplayer-icon-content">`,d+=N.volumeDown,d+=`</span>
            </button>
            <div class="dplayer-volume-bar-wrap" data-balloon-pos="up">
                <div class="dplayer-volume-bar">
                    <div class="dplayer-volume-bar-inner" style="background: `,d+=b(k.theme),d+=`;">
                        <span class="dplayer-thumb" style="background: `,d+=b(k.theme),d+=`"></span>
                    </div>
                </div>
            </div>
        </div>
        <span class="dplayer-time">
            <span class="dplayer-ptime">0:00</span> /
            <span class="dplayer-dtime">0:00</span>
        </span>
        `,k.live&&(d+=`
        <span class="dplayer-live-badge"><span class="dplayer-live-dot" style="background: `,d+=b(k.theme),d+=';"></span>',d+=b(E("live")),d+=`</span>
        `),d+=`
    </div>
    <div class="dplayer-icons dplayer-icons-right">
        `,k.video.quality&&(d+=`
        <div class="dplayer-quality">
            <button class="dplayer-icon dplayer-quality-icon">`,d+=b(k.video.quality[k.video.defaultQuality].name),d+=`</button>
            <div class="dplayer-quality-mask">
                <div class="dplayer-quality-list">
                `,I(k.video.quality,function(L,P){d+=`
                    <div class="dplayer-quality-item" data-index="`,d+=b(P),d+='">',d+=b(L.name),d+=`</div>
                `}),d+=`
                </div>
            </div>
        </div>
        `),d+=`
        `,k.screenshot&&(d+=`
        <div class="dplayer-icon dplayer-camera-icon" data-balloon="`,d+=b(E("screenshot")),d+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,d+=N.camera,d+=`</span>
        </div>
        `),d+=`
        `,k.airplay&&(d+=`
        <div class="dplayer-icon dplayer-airplay-icon" data-balloon="`,d+=b(E("airplay")),d+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,d+=N.airplay,d+=`</span>
        </div>
        `),d+=`
        `,k.chromecast&&(d+=`
        <div class="dplayer-icon dplayer-chromecast-icon" data-balloon="`,d+=b(E("chromecast")),d+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,d+=N.chromecast,d+=`</span>
        </div>
        `),d+=`
        <div class="dplayer-comment">
            <button class="dplayer-icon dplayer-comment-icon" data-balloon="`,d+=b(E("send-danmaku")),d+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,d+=N.comment,d+=`</span>
            </button>
        </div>
        `,k.subtitle&&(d+=`
        `,typeof k.subtitle.url=="string"?(d+=`
        <div class="dplayer-subtitle-btn">
            <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="`,d+=b(E("hide-subs")),d+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,d+=N.subtitle,d+=`</span>
            </button>
        </div>
        `):(d+=`
        <div class="dplayer-subtitles">
            <button class="dplayer-icon dplayer-subtitles-icon" data-balloon="`,d+=b(E("subtitle")),d+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,d+=N.subtitle,d+=`</span>
            </button>
            <div class="dplayer-subtitles-box">
                <div class="dplayer-subtitles-panel">
                    `,I(k.subtitle.url,function(L,P){d+=`
                        <div class="dplayer-subtitles-item" data-subtitle="`,d+=b(L.url),d+=`">
                            <!-- if lang, show tran(lang). if lang and name, show name + (tran(lang)). if name, show name. off option use lang for translation. -->
                            <span class="dplayer-label">`,d+=b(L.lang?L.name?L.name+" ("+E(L.lang)+")":E(L.lang):L.name),d+=`</span>
                        </div>
                    `}),d+=`
                </div>
            </div>
        </div>
        `),d+=`
        `),d+=`
        <div class="dplayer-setting">
            <button class="dplayer-icon dplayer-setting-icon" data-balloon="`,d+=b(E("setting")),d+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,d+=N.setting,d+=`</span>
            </button>
            <div class="dplayer-setting-box">
                <div class="dplayer-setting-origin-panel">
                    <div class="dplayer-setting-item dplayer-setting-speed">
                        <span class="dplayer-label">`,d+=b(E("speed")),d+=`</span>
                        <div class="dplayer-toggle">`,d+=N.right,d+=`</div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-loop">
                        <span class="dplayer-label">`,d+=b(E("loop")),d+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">
                            <label for="dplayer-toggle"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-showdan">
                        <span class="dplayer-label">`,d+=b(E("show-danmaku")),d+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">
                            <label for="dplayer-toggle-dan"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danunlimit">
                        <span class="dplayer-label">`,d+=b(E("unlimited-danmaku")),d+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-danunlimit-setting-input" type="checkbox" name="dplayer-toggle-danunlimit">
                            <label for="dplayer-toggle-danunlimit"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danmaku">
                        <span class="dplayer-label">`,d+=b(E("opacity-danmaku")),d+=`</span>
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
                    `,I(k.playbackSpeed,function(L,P){d+=`
                        <div class="dplayer-setting-speed-item" data-speed="`,d+=b(L),d+=`">
                            <span class="dplayer-label">`,d+=b(L===1?E("normal"):L),d+=`</span>
                        </div>
                    `}),d+=`
                </div>
            </div>
        </div>
        <div class="dplayer-full">
            <button class="dplayer-icon dplayer-full-in-icon" data-balloon="`,d+=b(E("web-fullscreen")),d+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,d+=N.fullWeb,d+=`</span>
            </button>
            <button class="dplayer-icon dplayer-full-icon" data-balloon="`,d+=b(E("fullscreen")),d+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,d+=N.full,d+=`</span>
            </button>
        </div>
    </div>
    <div class="dplayer-bar-wrap">
        <div class="dplayer-bar-time hidden">00:00</div>
        <div class="dplayer-bar-preview"></div>
        <div class="dplayer-bar">
            <div class="dplayer-loaded" style="width: 0;"></div>
            <div class="dplayer-played" style="width: 0; background: `,d+=b(k.theme),d+=`">
                <span class="dplayer-thumb" style="background: `,d+=b(k.theme),d+=`"></span>
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
    `,k.danmaku&&(d+=`
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
    `),d+=`
</div>
<div class="dplayer-menu">
    `,I(k.contextmenu,function(L,P){d+=`
        <div class="dplayer-menu-item">
            <a`,L.link&&(d+=' target="_blank"'),d+=' href="',d+=b(L.link||"javascript:void(0);"),d+='">',L.key&&(d+=" ",d+=b(E(L.key))),L.text&&(d+=" ",d+=b(L.text)),d+=`</a>
        </div>
    `}),d+=`
</div>
<div class="dplayer-notice-list"></div>
<button class="dplayer-mobile-play">
    `,d+=N.play,d+=`
</button>`}},1568:(l,f,p)=>{var m=p(6877);l.exports=function(y){var g="",d=(y=y||{}).enableSubtitle,C=y.subtitle,k=y.current,b=y.airplay,E=y.pic,N=m.$escape,T=y.screenshot,I=y.preload,L=y.url;return d=C&&C.type==="webvtt",g+=`
<video
    class="dplayer-video `,k&&(g+="dplayer-video-current"),g+=`"
    webkit-playsinline
    `,b&&(g+=' x-webkit-airplay="allow" '),g+=`
    playsinline
    `,E&&(g+='poster="',g+=N(E),g+='"'),g+=`
    `,(T||d)&&(g+='crossorigin="anonymous"'),g+=`
    `,I&&(g+='preload="',g+=N(I),g+='"'),g+=`
    `,b?g+=`
    nosrc
    `:L&&(g+=`
    src="`,g+=N(L),g+=`"
    `),g+=`
    >
    `,b&&(g+=`
    <source src="`,g+=N(L),g+=`">
    `),g+=`
    `,d&&(g+=`
    <track class="dplayer-subtrack" kind="metadata" default src="`,g+=N(typeof C.url=="string"?C.url:C.url[C.index].url),g+=`"></track>
    `),g+`
</video>`}},3399:(l,f,p)=>{p.d(f,{Z:()=>C});var m=p(8955),y=p.n(m),g=p(8160),d=p.n(g)()(y());d.push([l.id,`:root {
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
    border-radius: 2px;
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
`,"",{version:3,sources:["webpack://./node_modules/.pnpm/balloon-css@1.2.0/node_modules/balloon-css/balloon.css"],names:[],mappings:"AAAA;EACE,4BAA4B;EAC5B,uCAAuC;EACvC,0BAA0B;EAC1B,yBAAyB;EACzB,mBAAmB,EAAE;;AAEvB;EACE,iBAAiB,EAAE;;AAErB;EACE,kBAAkB;EAClB,eAAe,EAAE;EACjB;IACE,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,cAAc;IACd,wIAAwI;IACxI,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,eAAmC;IAAnC,mCAAmC;IACnC,kCAAgC;IAAhC,gCAAgC;IAChC,kBAAkB;IAClB,WAAgC;IAAhC,gCAAgC;IAChC,kBAA2C;IAA3C,2CAA2C;IAC3C,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,WAAW,EAAE;EACf;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,wCAAsC;IAAtC,sCAAsC;IACtC,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,WAAW;IACX,kBAAkB;IAClB,WAAW,EAAE;EACf;IACE,UAAU;IACV,oBAAoB,EAAE;EACxB;IACE,qJAAqJ,EAAE;EACzJ;IACE,gBAAgB,EAAE;EACpB;IACE,qBAAqB;IACrB,sBAAsB,EAAE;EAC1B;IACE,gBAAgB,EAAE;EACpB;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,OAAO,EAAE;EACX;IACE,SAAS,EAAE;EACb;IACE,QAAQ,EAAE;EACZ;IACE,UAAU,EAAE;EACd;IACE,0BAA0B,EAAE;EAC9B;IACE,0BAA0B,EAAE;EAC9B;IACE,YAAY;IACZ,qBAAqB;IACrB,4BAA4C;IAA5C,4CAA4C,EAAE;EAChD;IACE,mBAAmB,EAAE;EACvB;IACE,SAAS;IACT,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,SAAS;IACT,uCAAuD;IAAvD,uDAAuD,EAAE;EAC3D;IACE,gBAAgB,EAAE;EACpB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,2CAAyC;IAAzC,yCAAyC,EAAE;EAC7C;IACE,SAAS;IACT,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,WAAW;IACX,QAAQ;IACR,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,kBAAkB,EAAE;EACtB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,yCAAuC;IAAvC,uCAAuC,EAAE;EAC3C;IACE,UAAU;IACV,QAAQ;IACR,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,iBAAiB,EAAE;EACrB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,0CAAwC;IAAxC,wCAAwC,EAAE;EAC5C;IACE,mBAAmB,EAAE;EACvB;IACE,WAAW,EAAE;EACf;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;IACd;MACE;QACE,WAAW,EAAE,EAAE;EACrB;IACE,WAAW,EAAE",sourcesContent:[`:root {
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
`],sourceRoot:""}]);const C=d},3150:(l,f,p)=>{p.d(f,{Z:()=>I});var m=p(8955),y=p.n(m),g=p(8160),d=p.n(g),C=p(3399),k=p(8431),b=p.n(k),E=new URL(p(7831),p.b),N=d()(y());N.i(C.Z);var T=b()(E);N.push([l.id,`@-webkit-keyframes my-face {
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
  -webkit-animation-play-state: running;
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
  -webkit-animation-play-state: paused;
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
  -webkit-animation: bezel-hide 0.5s linear;
          animation: bezel-hide 0.5s linear;
}
@-webkit-keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
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
  -webkit-animation: my-face 5s infinite ease-in-out;
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
  -webkit-animation: diplayer-loading-dot-fade 0.8s ease infinite;
          animation: diplayer-loading-dot-fade 0.8s ease infinite;
  opacity: 0;
  transform-origin: 4px 4px;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {
  -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {
  -webkit-animation-delay: 0.4s;
          animation-delay: 0.4s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {
  -webkit-animation-delay: 0.5s;
          animation-delay: 0.5s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {
  -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {
  -webkit-animation-delay: 0.7s;
          animation-delay: 0.7s;
}
@-webkit-keyframes diplayer-loading-dot-fade {
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
  background: url(`+T+`) repeat-x bottom;
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
  -webkit-animation: my-face 5s infinite ease-in-out;
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
  width: -webkit-fit-content;
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
  -webkit-animation-name: 'danmaku';
          animation-name: 'danmaku';
  -webkit-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-play-state: paused;
          animation-play-state: paused;
}
@-webkit-keyframes danmaku {
  from {
    transform: translateX(100%);
  }
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
  -webkit-animation-name: 'danmaku-center';
          animation-name: 'danmaku-center';
  -webkit-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-play-state: paused;
          animation-play-state: paused;
}
@-webkit-keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
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
  -webkit-animation: showNotice 0.3s ease 1 forwards;
          animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  -webkit-animation: removeNotice 0.3s ease 1 forwards;
          animation: removeNotice 0.3s ease 1 forwards;
}
@-webkit-keyframes showNotice {
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
@-webkit-keyframes removeNotice {
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
`,"",{version:3,sources:["webpack://./src/css/global.less","webpack://./src/css/index.less","webpack://./src/css/player.less","webpack://./src/css/balloon.less","webpack://./src/css/bezel.less","webpack://./src/css/video.less","webpack://./src/css/controller.less","webpack://./src/css/danmaku.less","webpack://./src/css/logo.less","webpack://./src/css/menu.less","webpack://./src/css/notice.less","webpack://./src/css/subtitle.less","webpack://./src/css/info-panel.less"],names:[],mappings:"AAAA;EACI;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;;IAEI,uCAAA;ECEN;AACF;ADzJA;EACI;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;;IAEI,uCAAA;ECEN;AACF;ACzJA;EACI,kBAAA;EACA,gBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,cAAA;AD2JJ;AC/JA;EAOQ,uBAAA;AD2JR;AClKA;EAWQ,WAAA;EACA,YAAA;AD0JR;ACtKA;;EAgBY,UAAA;AD0JZ;ACtJI;EACI,WAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,UAAA;EACA,0BAAA;ADwJR;ACpJI;;;EAKY,aAAA;ADoJhB;ACzJI;EAUQ,aAAA;ADkJZ;AC5JI;EAcQ,aAAA;ADiJZ;AC7II;EAEQ,aAAA;AD8IZ;AChJI;EAKQ,aAAA;AD8IZ;ACnJI;EAQQ,aAAA;AD8IZ;ACtJI;EAWQ,aAAA;AD8IZ;AC3IQ;EAEQ,aAAA;AD4IhB;ACvII;EAEQ,eAAA;ADwIZ;AC1II;EAKQ,cAAA;ADwIZ;ACpII;EAEQ,qCAAA;UAAA,6BAAA;ADqIZ;AClIQ;EAAA;IAEQ,UAAA;EDoId;ECtIM;IAKQ,UAAA;EDoId;ECjIU;IAEQ,UAAA;EDkIlB;ECpIU;IAKQ,UAAA;EDkIlB;AACF;AC7HI;EAEQ,cAAA;AD8HZ;AC1HI;;;;EAIQ,oCAAA;UAAA,4BAAA;AD4HZ;ACxHI;EACI,YAAA;AD0HR;AC3HI;EAIQ,UAAA;EACA,2BAAA;AD0HZ;AC/HI;EAQQ,UAAA;EACA,2BAAA;AD0HZ;ACvHI;EAEQ,UAAA;ADwHZ;AC1HI;EAKQ,UAAA;ADwHZ;ACrHI;EAKI,sBAAA;EACA,uBAAA;ADuHR;AC7HI;EACI,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;ADyHR;ACrHI;;;;;EAOY,aAAA;ADqHhB;AC5HI;EAUY,gBAAA;EACA,qBAAA;ADqHhB;AChII;EAgBQ,aAAA;ADmHZ;AChHQ;EAEQ,aAAA;ADiHhB;ACtII;EA0BQ,cAAA;AD+GZ;ACzGA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;AD2GJ;AElSA;EACI,aAAA;AFoSJ;AEjSA;EACI,oBAAA;EACA,iCAAA;AFmSJ;AEhSA;EACI,gBAAA;AFkSJ;AG9SA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;EACA,oBAAA;AHgTJ;AGxTA;EAUQ,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AHiTR;AGhTQ;EACI,yCAAA;UAAA,iCAAA;AHkTZ;AGhTQ;EACI;IACI,UAAA;IACA,mBAAA;EHkTd;EGhTU;IACI,UAAA;IACA,mBAAA;EHkTd;AACF;AG1TQ;EACI;IACI,UAAA;IACA,mBAAA;EHkTd;EGhTU;IACI,UAAA;IACA,mBAAA;EHkTd;AACF;AGnVA;EAqCQ,kBAAA;EACA,QAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,kDAAA;UAAA,0CAAA;AHiTR;AG7VA;EA+CQ,aAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,oBAAA;AHiTR;AGvWA;EAwDY,aAAA;AHkTZ;AG1WA;EA2DY,+DAAA;UAAA,uDAAA;EACA,UAAA;EACA,yBAAA;AHkTZ;AI/WC;EDgEmB,6BAAA;UAAA,qBAAA;AHkTpB;AIlXC;EDgEmB,6BAAA;UAAA,qBAAA;AHqTpB;AIrXC;EDgEmB,6BAAA;UAAA,qBAAA;AHwTpB;AIxXC;EDgEmB,6BAAA;UAAA,qBAAA;AH2TpB;AI3XC;EDgEmB,6BAAA;UAAA,qBAAA;AH8TpB;AI9XC;EDgEmB,6BAAA;UAAA,qBAAA;AHiUpB;AIjYC;EDgEmB,6BAAA;UAAA,qBAAA;AHoUpB;AGhUQ;EACI;IACI,YAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,4BAAA;EHkUd;AACF;AG9UQ;EACI;IACI,YAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,4BAAA;EHkUd;AACF;AKlZA;EACI,mEAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,yBAAA;ALoZJ;AKjZA;EACI,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,yBAAA;ALmZJ;AKlZI;EAEQ,aAAA;ALmZZ;AKrZI;EAKQ,cAAA;ALmZZ;AKjaA;EAkBQ,cAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,wBAAA;EACA,WAAA;ALkZR;AKjZQ;EAEQ,mBAAA;ALkZhB;AKpZQ;EAKQ,cAAA;EACA,UAAA;EACA,2BAAA;EACA,QAAA;EACA,WAAA;ALkZhB;AKnbA;EAqCY,WAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,2BAAA;EACA,gCAAA;ALiZZ;AKhZY;EAEQ,cAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AKxcA;EA2DgB,aAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,2BAAA;ALgZhB;AKrdA;EAyEY,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,aAAA;EACA,6BAAA;AL+YZ;AK5dA;EAgFY,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,oBAAA;AL+YZ;AKneA;EA0FY,kBAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;EACA,oCAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AL4YZ;AK7ZY;EACI,UAAA;AL+ZhB;AKvfA;EA2GY,kBAAA;EACA,WAAA;EACA,WAAA;EACA,oCAAA;EACA,eAAA;AL+YZ;AK9fA;EAiHgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,oCAAA;EACA,WAAA;EACA,yBAAA;EACA,kBAAA;ALgZhB;AKxgBA;EA2HgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;ALgZhB;AKhhBA;EAkIoB,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALiZpB;AK7hBA;EAkJQ,YAAA;EACA,kBAAA;EACA,SAAA;AL8YR;AK7YQ;EACI,aAAA;EACA,kBAAA;EACA,gCAAA;EACA,UAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;AL+YZ;AKxZQ;EAWQ,YAAA;ALgZhB;AK3ZQ;EAcQ,kBAAA;EACA,OAAA;EACA,MAAA;ALgZhB;AKhaQ;EAmBQ,kBAAA;EACA,QAAA;EACA,MAAA;ALgZhB;AKraQ;EAwBQ,kBAAA;EACA,iCAAA;EACA,YAAA;EACA,OAAA;EACA,uCAAA;EACA,kBAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;EACA,gCAAA;EACA,mBAAA;ALgZhB;AK/YgB;EACI,mBAAA;ALiZpB;AKrbQ;EAuCY,aAAA;ALiZpB;AKxbQ;EA0CY,eAAA;ALiZpB;AK3bQ;EA6CY,eAAA;EACA,WAAA;EACA,iBAAA;ALiZpB;AKhcQ;EAkDY,YAAA;ALiZpB;AKncQ;EAoDgB,kBAAA;ALkZxB;AK/YwB;EAEQ,0BAAA;ALgZhC;AK7YwB;EAEQ,0BAAA;AL8YhC;AK5cQ;EAmEgB,UAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;EACA,eAAA;EACA,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,eAAA;AL4YxB;AKzdQ;EAgFgB,mBAAA;EACA,cAAA;AL4YxB;AK7dQ;EAqFY,YAAA;AL2YpB;AKheQ;EAuFgB,YAAA;EACA,YAAA;EACA,qBAAA;AL4YxB;AKreQ;EA4FgB,WAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;AL4YxB;AK3YwB;EACI,kDAAA;UAAA,0CAAA;AL6Y5B;AKhfQ;EAyGQ,aAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,YAAA;EACA,sBAAA;EACA,WAAA;EACA,WAAA;AL0YhB;AKzYgB;EACI,WAAA;EACA,YAAA;AL2YpB;AK7YgB;EACI,WAAA;EACA,YAAA;AL2YpB;AKzYgB;EACI,aAAA;AL2YpB;AKvYQ;EAEQ,YAAA;ALwYhB;AKrYQ;EACI,WAAA;ALuYZ;AKxYQ;EAGQ,YAAA;ALwYhB;AKpqBA;;EAiSY,iBAAA;EACA,WAAA;EACA,uCAAA;EACA,sBAAA;EACA,eAAA;EACA,eAAA;ALuYZ;AK7qBA;EAySY,qBAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,kBAAA;ALuYZ;AKtrBA;EAkTY,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EACA,sBAAA;EACA,qBAAA;ALuYZ;AKjsBA;EA4TgB,gCAAA;EACA,YAAA;ALwYhB;AKtYY;EAEQ,UAAA;ALuYpB;AKpYY;EACI,WAAA;EACA,WAAA;EACA,iBAAA;EACA,eAAA;ALsYhB;AKpYY;EACI,qBAAA;ALsYhB;AKpYY;EACI,kBAAA;ALsYhB;AKpYY;EACI,WAAA;ALsYhB;AKvtBA;EAqVY,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,YAAA;ALqYZ;AKpYY;EAEQ,WAAA;ALqYpB;AKvYY;EAKQ,mBAAA;ALqYpB;AKlYY;EAEQ,WAAA;ALmYpB;AKrYY;EAKQ,mBAAA;ALmYpB;AKzuBA;EA0WgB,qBAAA;EACA,qBAAA;EACA,sBAAA;EACA,YAAA;ALkYhB;AK/uBA;EA+WoB,kBAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;ALmYpB;AKvvBA;EAsXwB,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;ALoYxB;AK/vBA;EA6X4B,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALqY5B;AK5wBA;EA8YY,qBAAA;EACA,YAAA;ALiYZ;AKhxBA;EAkZY,qBAAA;EACA,YAAA;ALiYZ;AKpxBA;EAqZgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,0BAAA;EAAA,uBAAA;EAAA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,cAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,cAAA;ALmYpB;AKjYgB;EACI,mBAAA;ALmYpB;AKzyBA;EA0agB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALkYhB;AKjYgB;EACI,0CAAA;ALmYpB;AKnzBA;EAqbY,qBAAA;EACA,YAAA;ALiYZ;AKvzBA;EAwbgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,aAAA;ALmYpB;AKlYoB;EACI,cAAA;ALoYxB;AKjYgB;EACI,mBAAA;ALmYpB;AKjYgB;EACI,WAAA;EACA,kBAAA;ALmYpB;AKjYgB;EAEQ,aAAA;ALkYxB;AKpYgB;EAKQ,cAAA;ALkYxB;AKv1BA;;EA2dgB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALgYhB;AK/XgB;;EACI,0CAAA;ALkYpB;AKn2BA;EAqegB,cAAA;ALiYhB;AKt2BA;EAueoB,eAAA;EACA,eAAA;ALkYpB;AKhYgB;EAEQ,aAAA;ALiYxB;AKnYgB;EAKQ,qBAAA;ALiYxB;AK9XgB;EAEQ,aAAA;AL+XxB;AKjYgB;EAKQ,qBAAA;AL+XxB;AKt3BA;EA2foB,eAAA;EACA,sBAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;AL8XpB;AK93BA;EAkgBwB,kBAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;AL+XxB;AKt4BA;EAygB4B,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;ALgY5B;AK/4BA;EAihBgC,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,gBAAA;ALiYhC;AK55BA;EAmiBY,qBAAA;EACA,YAAA;EACA,kBAAA;AL4XZ;AK3XY;EAEQ,cAAA;AL4XpB;AKp6BA;EA4iBgB,kBAAA;EACA,UAAA;EACA,UAAA;EACA,aAAA;AL2XhB;AK16BA;EAmjBY,kBAAA;EACA,qBAAA;EACA,YAAA;EACA,UAAA;AL0XZ;AKzXY;EAEQ,cAAA;AL0XpB;AK5XY;EAKQ,cAAA;AL0XpB;AKt7BA;EAgkBgB,aAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,oBAAA;ALyXhB;AK97BA;EAwkBgB,aAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;ALyXhB;AK18BA;EAolBgB,YAAA;EACA,sBAAA;EACA,eAAA;EACA,iBAAA;ALyXhB;AKxXgB;EACI,0CAAA;AL0XpB;AKn9BA;EA8lBY,qBAAA;EACA,YAAA;ALwXZ;AKv9BA;EAkmBY,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,mBAAA;ALwXZ;AK99BA;EAymBY,WAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;ALwXZ;AKx+BA;EAknBgB,aAAA;EACA,YAAA;EACA,aAAA;ALyXhB;AK7+BA;EAunBgB,qBAAA;EACA,kBAAA;EACA,iCAAA;EACA,yBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,sBAAA;EACA,eAAA;EACA,4BAAA;ALyXhB;AKz/BA;EAmoBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,mBAAA;EACA,4BAAA;ALyXhB;AKpgCA;EA8oBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,OAAA;EACA,MAAA;EACA,mBAAA;EACA,gBAAA;EACA,4BAAA;EACA,wCAAA;EACA,YAAA;EACA,WAAA;ALyXhB;AKjhCA;EA2pBgB,sCAAA;ALyXhB;AKphCA;EA8pBgB,WAAA;EACA,oCAAA;ALyXhB;AKxhCA;EAkqBgB,UAAA;ALyXhB;AKnXA;EACI,aAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EAEA,SAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;ALoXJ;AMpjCA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;ANsjCJ;AM7jCA;EASQ,qBAAA;EACA,oBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,eAAA;EACA,mBAAA;EACA,iDAAA;ANujCR;AMtjCQ;EACI,kBAAA;EACA,kBAAA;ANwjCZ;AMzkCA;EAqBQ,kBAAA;EACA,QAAA;EACA,2BAAA;ANujCR;AMtjCQ;EACI,sBAAA;EACA,iCAAA;UAAA,yBAAA;EACA,yCAAA;UAAA,iCAAA;EACA,oCAAA;UAAA,4BAAA;ANwjCZ;AMrjCI;EACI;IACI,2BAAA;ENujCV;AACF;AM1jCI;EACI;IACI,2BAAA;ENujCV;AACF;AMzlCA;;EAsCQ,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;ANujCR;AMtjCQ;;EACI,uBAAA;EACA,wCAAA;UAAA,gCAAA;EACA,yCAAA;UAAA,iCAAA;EACA,oCAAA;UAAA,4BAAA;ANyjCZ;AMtjCI;EACI;IACI,mBAAA;ENwjCV;EMtjCM;IACI,mBAAA;ENwjCV;AACF;AM9jCI;EACI;IACI,mBAAA;ENwjCV;EMtjCM;IACI,mBAAA;ENwjCV;AACF;AO/mCA;EACI,oBAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,gBAAA;APinCJ;AOvnCA;EAQQ,eAAA;EACA,gBAAA;EACA,gBAAA;APknCR;AQ5nCA;EACI,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,kCAAA;EACA,cAAA;EACA,gBAAA;EACA,UAAA;EACA,aAAA;AR8nCJ;AQ7nCI;EACI,cAAA;AR+nCR;AQzoCA;EAaQ,YAAA;EACA,sBAAA;EACA,eAAA;AR+nCR;AQ9nCQ;EACI,0CAAA;ARgoCZ;AQjpCA;EAqBY,eAAA;EACA,iBAAA;EACA,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,WAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AR+nCZ;AQ9nCY;EACI,qBAAA;ARgoChB;ASjqCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;ATmqCJ;AStqCA;EAMQ,kBAAA;EACA,iCAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,cAAA;EACA,oBAAA;EACA,kDAAA;UAAA,0CAAA;ATmqCR;AShrCA;EAiBQ,oDAAA;UAAA,4CAAA;ATkqCR;AS9pCA;EACI;IACI,UAAA;IACA,YAAA;IACA,aAAA;ETgqCN;ES9pCE;IACI,iBAAA;IACA,eAAA;IACA,eAAA;ETgqCN;AACF;AS1qCA;EACI;IACI,UAAA;IACA,YAAA;IACA,aAAA;ETgqCN;ES9pCE;IACI,iBAAA;IACA,eAAA;IACA,eAAA;ETgqCN;AACF;AS7pCA;EACI;IACI,iBAAA;IACA,eAAA;IACA,eAAA;ET+pCN;ES7pCE;IACI,eAAA;ET+pCN;ES7pCE;IACI,YAAA;IACA,iBAAA;ET+pCN;ES7pCE;IACI,UAAA;IACA,aAAA;IACA,YAAA;ET+pCN;AACF;AShrCA;EACI;IACI,iBAAA;IACA,eAAA;IACA,eAAA;ET+pCN;ES7pCE;IACI,eAAA;ET+pCN;ES7pCE;IACI,YAAA;IACA,iBAAA;ET+pCN;ES7pCE;IACI,UAAA;IACA,aAAA;IACA,YAAA;ET+pCN;AACF;AUltCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;EACA,QAAA;EACA,kBAAA;EACA,WAAA;EACA,iDAAA;EACA,eAAA;AVotCJ;AUntCI;EACI,aAAA;AVqtCR;AI/tCA;EACI,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,UAAA;EACA,aAAA;AJiuCJ;AIhuCI;EACI,cAAA;AJkuCR;AI9tCA;EACI,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AJguCJ;AIruCA;EAOQ,WAAA;EACA,YAAA;EACA,aAAA;AJiuCR;AI1uCA;EAYQ,cAAA;AJiuCR;AI7uCA;EAeQ,aAAA;AJiuCR;AW7vCA;EACI,kBAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;EACA,iCAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AX+vCJ;AW7vCI;EACI,aAAA;AX+vCR;AW3wCA;EAgBQ,eAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;AX8vCR;AW1vCQ;EACI,qBAAA;EACA,sBAAA;EACA,iBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AX4vCZ;AWzxCA;EAkCQ,YAAA;EACA,iBAAA;EACA,kBAAA;AX0vCR;AW9xCA;EAwCQ,YAAA;AXyvCR",sourcesContent:[`@keyframes my-face {
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
}`,`.dplayer-controller-mask {
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
`,`.dplayer-subtitle {
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
}`],sourceRoot:""}]);const I=N},9624:l=>{var f=[];function p(g){for(var d=-1,C=0;C<f.length;C++)if(f[C].identifier===g){d=C;break}return d}function m(g,d){for(var C={},k=[],b=0;b<g.length;b++){var E=g[b],N=d.base?E[0]+d.base:E[0],T=C[N]||0,I="".concat(N," ").concat(T);C[N]=T+1;var L=p(I),P={css:E[1],media:E[2],sourceMap:E[3],supports:E[4],layer:E[5]};if(L!==-1)f[L].references++,f[L].updater(P);else{var S=y(P,d);d.byIndex=b,f.splice(b,0,{identifier:I,updater:S,references:1})}k.push(I)}return k}function y(g,d){var C=d.domAPI(d);return C.update(g),function(k){if(k){if(k.css===g.css&&k.media===g.media&&k.sourceMap===g.sourceMap&&k.supports===g.supports&&k.layer===g.layer)return;C.update(g=k)}else C.remove()}}l.exports=function(g,d){var C=m(g=g||[],d=d||{});return function(k){k=k||[];for(var b=0;b<C.length;b++){var E=p(C[b]);f[E].references--}for(var N=m(k,d),T=0;T<C.length;T++){var I=p(C[T]);f[I].references===0&&(f[I].updater(),f.splice(I,1))}C=N}}},6892:l=>{var f={};l.exports=function(p,m){var y=function(g){if(f[g]===void 0){var d=document.querySelector(g);if(window.HTMLIFrameElement&&d instanceof window.HTMLIFrameElement)try{d=d.contentDocument.head}catch{d=null}f[g]=d}return f[g]}(p);if(!y)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");y.appendChild(m)}},2716:l=>{l.exports=function(f){var p=document.createElement("style");return f.setAttributes(p,f.attributes),f.insert(p,f.options),p}},6359:(l,f,p)=>{l.exports=function(m){var y=p.nc;y&&m.setAttribute("nonce",y)}},6990:l=>{l.exports=function(f){var p=f.insertStyleElement(f);return{update:function(m){(function(y,g,d){var C="";d.supports&&(C+="@supports (".concat(d.supports,") {")),d.media&&(C+="@media ".concat(d.media," {"));var k=d.layer!==void 0;k&&(C+="@layer".concat(d.layer.length>0?" ".concat(d.layer):""," {")),C+=d.css,k&&(C+="}"),d.media&&(C+="}"),d.supports&&(C+="}");var b=d.sourceMap;b&&typeof btoa<"u"&&(C+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(b))))," */")),g.styleTagTransform(C,y,g.options)})(p,f,m)},remove:function(){(function(m){if(m.parentNode===null)return!1;m.parentNode.removeChild(m)})(p)}}}},230:l=>{l.exports=function(f,p){if(p.styleSheet)p.styleSheet.cssText=f;else{for(;p.firstChild;)p.removeChild(p.firstChild);p.appendChild(document.createTextNode(f))}}},6251:l=>{l.exports='<svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg"><path d="M288 90v96c0 20-16 36-36 36h-10c-16 0-16-24 0-24h10c7 0 12-5 12-12V90c0-7-5-12-12-12H36c-7 0-12 5-12 12v96c0 7 5 12 12 12h10c16 0 16 24 0 24H36c-20 0-36-16-36-36V90c0-20 16-36 36-36h216c20 0 36 16 36 36zm-120 62l48 68c14 20 1 38-20 38H92c-21 0-34-18-20-38l48-68c13-18 35-18 48 0z"></path></svg>'},8113:l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"></path></svg>'},3193:l=>{l.exports='<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="chromecast" class="svg-inline--fa fa-chromecast fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M447.8,64H64c-23.6,0-42.7,19.1-42.7,42.7v63.9H64v-63.9h383.8v298.6H298.6V448H448c23.6,0,42.7-19.1,42.7-42.7V106.7 C490.7,83.1,471.4,64,447.8,64z M21.3,383.6L21.3,383.6l0,63.9h63.9C85.2,412.2,56.6,383.6,21.3,383.6L21.3,383.6z M21.3,298.6V341 c58.9,0,106.6,48.1,106.6,107h42.7C170.7,365.6,103.7,298.7,21.3,298.6z M213.4,448h42.7c-0.5-129.5-105.3-234.3-234.8-234.6l0,42.4 C127.3,255.6,213.3,342,213.4,448z"></path></svg>'},338:l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"></path></svg>'},2807:l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"></path></svg>'},1415:l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"></path></svg>'},4574:l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"></path></svg>'},4182:l=>{l.exports='<svg version="1.1" viewBox="0 0 22 22"><svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg>'},1965:l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z"></path></svg>'},6074:l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>'},730:l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>'},1428:l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>'},2254:l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"></path></svg>'},5934:l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 28"><path d="M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"></path></svg>'},8410:l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>'},2644:l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>'},1324:l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>'},4437:l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z"></path></svg>'},9959:(l,f,p)=>{var m=typeof self<"u"?self:typeof window<"u"?window:p.g!==void 0?p.g:{},y=Object.create(m),g=/["&'<>]/;function d(C){return typeof C!="string"&&(C=C==null?"":typeof C=="function"?d(C.call(C)):JSON.stringify(C)),C}y.$escape=function(C){return function(k){var b=""+k,E=g.exec(b);if(!E)return k;var N="",T=void 0,I=void 0,L=void 0;for(T=E.index,I=0;T<b.length;T++){switch(b.charCodeAt(T)){case 34:L="&#34;";break;case 38:L="&#38;";break;case 39:L="&#39;";break;case 60:L="&#60;";break;case 62:L="&#62;";break;default:continue}I!==T&&(N+=b.substring(I,T)),I=T+1,N+=L}return I!==T?N+b.substring(I,T):N}(d(C))},y.$each=function(C,k){if(Array.isArray(C))for(var b=0,E=C.length;b<E;b++)k(C[b],b);else for(var N in C)k(C[N],N)},l.exports=y},6877:(l,f,p)=>{l.exports=p(9959)},6208:(l,f,p)=>{l.exports=p(4568)},8170:(l,f,p)=>{var m=p(7201),y=p(9095),g=p(8416),d=p(6374),C=p(5967),k=p(5032),b=p(1224),E=p(4033),N=p(1766),T=p(8832),I=p(8699);l.exports=function(L){return new Promise(function(P,S){var F,O=L.data,H=L.headers,ae=L.responseType;function le(){L.cancelToken&&L.cancelToken.unsubscribe(F),L.signal&&L.signal.removeEventListener("abort",F)}m.isFormData(O)&&m.isStandardBrowserEnv()&&delete H["Content-Type"];var Y=new XMLHttpRequest;if(L.auth){var z=L.auth.username||"",ee=L.auth.password?unescape(encodeURIComponent(L.auth.password)):"";H.Authorization="Basic "+btoa(z+":"+ee)}var ie=C(L.baseURL,L.url);function xe(){if(Y){var ye="getAllResponseHeaders"in Y?k(Y.getAllResponseHeaders()):null,$e={data:ae&&ae!=="text"&&ae!=="json"?Y.response:Y.responseText,status:Y.status,statusText:Y.statusText,headers:ye,config:L,request:Y};y(function(rt){P(rt),le()},function(rt){S(rt),le()},$e),Y=null}}if(Y.open(L.method.toUpperCase(),d(ie,L.params,L.paramsSerializer),!0),Y.timeout=L.timeout,"onloadend"in Y?Y.onloadend=xe:Y.onreadystatechange=function(){Y&&Y.readyState===4&&(Y.status!==0||Y.responseURL&&Y.responseURL.indexOf("file:")===0)&&setTimeout(xe)},Y.onabort=function(){Y&&(S(new N("Request aborted",N.ECONNABORTED,L,Y)),Y=null)},Y.onerror=function(){S(new N("Network Error",N.ERR_NETWORK,L,Y,Y)),Y=null},Y.ontimeout=function(){var ye=L.timeout?"timeout of "+L.timeout+"ms exceeded":"timeout exceeded",$e=L.transitional||E;L.timeoutErrorMessage&&(ye=L.timeoutErrorMessage),S(new N(ye,$e.clarifyTimeoutError?N.ETIMEDOUT:N.ECONNABORTED,L,Y)),Y=null},m.isStandardBrowserEnv()){var se=(L.withCredentials||b(ie))&&L.xsrfCookieName?g.read(L.xsrfCookieName):void 0;se&&(H[L.xsrfHeaderName]=se)}"setRequestHeader"in Y&&m.forEach(H,function(ye,$e){O===void 0&&$e.toLowerCase()==="content-type"?delete H[$e]:Y.setRequestHeader($e,ye)}),m.isUndefined(L.withCredentials)||(Y.withCredentials=!!L.withCredentials),ae&&ae!=="json"&&(Y.responseType=L.responseType),typeof L.onDownloadProgress=="function"&&Y.addEventListener("progress",L.onDownloadProgress),typeof L.onUploadProgress=="function"&&Y.upload&&Y.upload.addEventListener("progress",L.onUploadProgress),(L.cancelToken||L.signal)&&(F=function(ye){Y&&(S(!ye||ye&&ye.type?new T:ye),Y.abort(),Y=null)},L.cancelToken&&L.cancelToken.subscribe(F),L.signal&&(L.signal.aborted?F():L.signal.addEventListener("abort",F))),O||(O=null);var U=I(ie);U&&["http","https","file"].indexOf(U)===-1?S(new N("Unsupported protocol "+U+":",N.ERR_BAD_REQUEST,L)):Y.send(O)})}},4568:(l,f,p)=>{var m=p(7201),y=p(5305),g=p(2275),d=p(9834),C=function k(b){var E=new g(b),N=y(g.prototype.request,E);return m.extend(N,g.prototype,E),m.extend(N,E),N.create=function(T){return k(d(b,T))},N}(p(6339));C.Axios=g,C.CanceledError=p(8832),C.CancelToken=p(5027),C.isCancel=p(1893),C.VERSION=p(4316).version,C.toFormData=p(6615),C.AxiosError=p(1766),C.Cancel=C.CanceledError,C.all=function(k){return Promise.all(k)},C.spread=p(3282),C.isAxiosError=p(3319),l.exports=C,l.exports.default=C},5027:(l,f,p)=>{var m=p(8832);function y(g){if(typeof g!="function")throw new TypeError("executor must be a function.");var d;this.promise=new Promise(function(k){d=k});var C=this;this.promise.then(function(k){if(C._listeners){var b,E=C._listeners.length;for(b=0;b<E;b++)C._listeners[b](k);C._listeners=null}}),this.promise.then=function(k){var b,E=new Promise(function(N){C.subscribe(N),b=N}).then(k);return E.cancel=function(){C.unsubscribe(b)},E},g(function(k){C.reason||(C.reason=new m(k),d(C.reason))})}y.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},y.prototype.subscribe=function(g){this.reason?g(this.reason):this._listeners?this._listeners.push(g):this._listeners=[g]},y.prototype.unsubscribe=function(g){if(this._listeners){var d=this._listeners.indexOf(g);d!==-1&&this._listeners.splice(d,1)}},y.source=function(){var g;return{token:new y(function(d){g=d}),cancel:g}},l.exports=y},8832:(l,f,p)=>{var m=p(1766);function y(g){m.call(this,g??"canceled",m.ERR_CANCELED),this.name="CanceledError"}p(7201).inherits(y,m,{__CANCEL__:!0}),l.exports=y},1893:l=>{l.exports=function(f){return!(!f||!f.__CANCEL__)}},2275:(l,f,p)=>{var m=p(7201),y=p(6374),g=p(6808),d=p(7313),C=p(9834),k=p(5967),b=p(9712),E=b.validators;function N(T){this.defaults=T,this.interceptors={request:new g,response:new g}}N.prototype.request=function(T,I){typeof T=="string"?(I=I||{}).url=T:I=T||{},(I=C(this.defaults,I)).method?I.method=I.method.toLowerCase():this.defaults.method?I.method=this.defaults.method.toLowerCase():I.method="get";var L=I.transitional;L!==void 0&&b.assertOptions(L,{silentJSONParsing:E.transitional(E.boolean),forcedJSONParsing:E.transitional(E.boolean),clarifyTimeoutError:E.transitional(E.boolean)},!1);var P=[],S=!0;this.interceptors.request.forEach(function(z){typeof z.runWhen=="function"&&z.runWhen(I)===!1||(S=S&&z.synchronous,P.unshift(z.fulfilled,z.rejected))});var F,O=[];if(this.interceptors.response.forEach(function(z){O.push(z.fulfilled,z.rejected)}),!S){var H=[d,void 0];for(Array.prototype.unshift.apply(H,P),H=H.concat(O),F=Promise.resolve(I);H.length;)F=F.then(H.shift(),H.shift());return F}for(var ae=I;P.length;){var le=P.shift(),Y=P.shift();try{ae=le(ae)}catch(z){Y(z);break}}try{F=d(ae)}catch(z){return Promise.reject(z)}for(;O.length;)F=F.then(O.shift(),O.shift());return F},N.prototype.getUri=function(T){T=C(this.defaults,T);var I=k(T.baseURL,T.url);return y(I,T.params,T.paramsSerializer)},m.forEach(["delete","get","head","options"],function(T){N.prototype[T]=function(I,L){return this.request(C(L||{},{method:T,url:I,data:(L||{}).data}))}}),m.forEach(["post","put","patch"],function(T){function I(L){return function(P,S,F){return this.request(C(F||{},{method:T,headers:L?{"Content-Type":"multipart/form-data"}:{},url:P,data:S}))}}N.prototype[T]=I(),N.prototype[T+"Form"]=I(!0)}),l.exports=N},1766:(l,f,p)=>{var m=p(7201);function y(C,k,b,E,N){Error.call(this),this.message=C,this.name="AxiosError",k&&(this.code=k),b&&(this.config=b),E&&(this.request=E),N&&(this.response=N)}m.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var g=y.prototype,d={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(C){d[C]={value:C}}),Object.defineProperties(y,d),Object.defineProperty(g,"isAxiosError",{value:!0}),y.from=function(C,k,b,E,N,T){var I=Object.create(g);return m.toFlatObject(C,I,function(L){return L!==Error.prototype}),y.call(I,C.message,k,b,E,N),I.name=C.name,T&&Object.assign(I,T),I},l.exports=y},6808:(l,f,p)=>{var m=p(7201);function y(){this.handlers=[]}y.prototype.use=function(g,d,C){return this.handlers.push({fulfilled:g,rejected:d,synchronous:!!C&&C.synchronous,runWhen:C?C.runWhen:null}),this.handlers.length-1},y.prototype.eject=function(g){this.handlers[g]&&(this.handlers[g]=null)},y.prototype.forEach=function(g){m.forEach(this.handlers,function(d){d!==null&&g(d)})},l.exports=y},5967:(l,f,p)=>{var m=p(724),y=p(4669);l.exports=function(g,d){return g&&!m(d)?y(g,d):d}},7313:(l,f,p)=>{var m=p(7201),y=p(6431),g=p(1893),d=p(6339),C=p(8832);function k(b){if(b.cancelToken&&b.cancelToken.throwIfRequested(),b.signal&&b.signal.aborted)throw new C}l.exports=function(b){return k(b),b.headers=b.headers||{},b.data=y.call(b,b.data,b.headers,b.transformRequest),b.headers=m.merge(b.headers.common||{},b.headers[b.method]||{},b.headers),m.forEach(["delete","get","head","post","put","patch","common"],function(E){delete b.headers[E]}),(b.adapter||d.adapter)(b).then(function(E){return k(b),E.data=y.call(b,E.data,E.headers,b.transformResponse),E},function(E){return g(E)||(k(b),E&&E.response&&(E.response.data=y.call(b,E.response.data,E.response.headers,b.transformResponse))),Promise.reject(E)})}},9834:(l,f,p)=>{var m=p(7201);l.exports=function(y,g){g=g||{};var d={};function C(I,L){return m.isPlainObject(I)&&m.isPlainObject(L)?m.merge(I,L):m.isPlainObject(L)?m.merge({},L):m.isArray(L)?L.slice():L}function k(I){return m.isUndefined(g[I])?m.isUndefined(y[I])?void 0:C(void 0,y[I]):C(y[I],g[I])}function b(I){if(!m.isUndefined(g[I]))return C(void 0,g[I])}function E(I){return m.isUndefined(g[I])?m.isUndefined(y[I])?void 0:C(void 0,y[I]):C(void 0,g[I])}function N(I){return I in g?C(y[I],g[I]):I in y?C(void 0,y[I]):void 0}var T={url:b,method:b,data:b,baseURL:E,transformRequest:E,transformResponse:E,paramsSerializer:E,timeout:E,timeoutMessage:E,withCredentials:E,adapter:E,responseType:E,xsrfCookieName:E,xsrfHeaderName:E,onUploadProgress:E,onDownloadProgress:E,decompress:E,maxContentLength:E,maxBodyLength:E,beforeRedirect:E,transport:E,httpAgent:E,httpsAgent:E,cancelToken:E,socketPath:E,responseEncoding:E,validateStatus:N};return m.forEach(Object.keys(y).concat(Object.keys(g)),function(I){var L=T[I]||k,P=L(I);m.isUndefined(P)&&L!==N||(d[I]=P)}),d}},9095:(l,f,p)=>{var m=p(1766);l.exports=function(y,g,d){var C=d.config.validateStatus;d.status&&C&&!C(d.status)?g(new m("Request failed with status code "+d.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(d.status/100)-4],d.config,d.request,d)):y(d)}},6431:(l,f,p)=>{var m=p(7201),y=p(6339);l.exports=function(g,d,C){var k=this||y;return m.forEach(C,function(b){g=b.call(k,g,d)}),g}},6339:(l,f,p)=>{var m=p(7201),y=p(5227),g=p(1766),d=p(4033),C=p(6615),k={"Content-Type":"application/x-www-form-urlencoded"};function b(T,I){!m.isUndefined(T)&&m.isUndefined(T["Content-Type"])&&(T["Content-Type"]=I)}var E,N={transitional:d,adapter:((typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(E=p(8170)),E),transformRequest:[function(T,I){if(y(I,"Accept"),y(I,"Content-Type"),m.isFormData(T)||m.isArrayBuffer(T)||m.isBuffer(T)||m.isStream(T)||m.isFile(T)||m.isBlob(T))return T;if(m.isArrayBufferView(T))return T.buffer;if(m.isURLSearchParams(T))return b(I,"application/x-www-form-urlencoded;charset=utf-8"),T.toString();var L,P=m.isObject(T),S=I&&I["Content-Type"];if((L=m.isFileList(T))||P&&S==="multipart/form-data"){var F=this.env&&this.env.FormData;return C(L?{"files[]":T}:T,F&&new F)}return P||S==="application/json"?(b(I,"application/json"),function(O,H,ae){if(m.isString(O))try{return(0,JSON.parse)(O),m.trim(O)}catch(le){if(le.name!=="SyntaxError")throw le}return(0,JSON.stringify)(O)}(T)):T}],transformResponse:[function(T){var I=this.transitional||N.transitional,L=I&&I.silentJSONParsing,P=I&&I.forcedJSONParsing,S=!L&&this.responseType==="json";if(S||P&&m.isString(T)&&T.length)try{return JSON.parse(T)}catch(F){if(S)throw F.name==="SyntaxError"?g.from(F,g.ERR_BAD_RESPONSE,this,null,this.response):F}return T}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:p(3997)},validateStatus:function(T){return T>=200&&T<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};m.forEach(["delete","get","head"],function(T){N.headers[T]={}}),m.forEach(["post","put","patch"],function(T){N.headers[T]=m.merge(k)}),l.exports=N},4033:l=>{l.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},4316:l=>{l.exports={version:"0.27.2"}},5305:l=>{l.exports=function(f,p){return function(){for(var m=new Array(arguments.length),y=0;y<m.length;y++)m[y]=arguments[y];return f.apply(p,m)}}},6374:(l,f,p)=>{var m=p(7201);function y(g){return encodeURIComponent(g).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}l.exports=function(g,d,C){if(!d)return g;var k;if(C)k=C(d);else if(m.isURLSearchParams(d))k=d.toString();else{var b=[];m.forEach(d,function(N,T){N!=null&&(m.isArray(N)?T+="[]":N=[N],m.forEach(N,function(I){m.isDate(I)?I=I.toISOString():m.isObject(I)&&(I=JSON.stringify(I)),b.push(y(T)+"="+y(I))}))}),k=b.join("&")}if(k){var E=g.indexOf("#");E!==-1&&(g=g.slice(0,E)),g+=(g.indexOf("?")===-1?"?":"&")+k}return g}},4669:l=>{l.exports=function(f,p){return p?f.replace(/\/+$/,"")+"/"+p.replace(/^\/+/,""):f}},8416:(l,f,p)=>{var m=p(7201);l.exports=m.isStandardBrowserEnv()?{write:function(y,g,d,C,k,b){var E=[];E.push(y+"="+encodeURIComponent(g)),m.isNumber(d)&&E.push("expires="+new Date(d).toGMTString()),m.isString(C)&&E.push("path="+C),m.isString(k)&&E.push("domain="+k),b===!0&&E.push("secure"),document.cookie=E.join("; ")},read:function(y){var g=document.cookie.match(new RegExp("(^|;\\s*)("+y+")=([^;]*)"));return g?decodeURIComponent(g[3]):null},remove:function(y){this.write(y,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},724:l=>{l.exports=function(f){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(f)}},3319:(l,f,p)=>{var m=p(7201);l.exports=function(y){return m.isObject(y)&&y.isAxiosError===!0}},1224:(l,f,p)=>{var m=p(7201);l.exports=m.isStandardBrowserEnv()?function(){var y,g=/(msie|trident)/i.test(navigator.userAgent),d=document.createElement("a");function C(k){var b=k;return g&&(d.setAttribute("href",b),b=d.href),d.setAttribute("href",b),{href:d.href,protocol:d.protocol?d.protocol.replace(/:$/,""):"",host:d.host,search:d.search?d.search.replace(/^\?/,""):"",hash:d.hash?d.hash.replace(/^#/,""):"",hostname:d.hostname,port:d.port,pathname:d.pathname.charAt(0)==="/"?d.pathname:"/"+d.pathname}}return y=C(window.location.href),function(k){var b=m.isString(k)?C(k):k;return b.protocol===y.protocol&&b.host===y.host}}():function(){return!0}},5227:(l,f,p)=>{var m=p(7201);l.exports=function(y,g){m.forEach(y,function(d,C){C!==g&&C.toUpperCase()===g.toUpperCase()&&(y[g]=d,delete y[C])})}},3997:l=>{l.exports=null},5032:(l,f,p)=>{var m=p(7201),y=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];l.exports=function(g){var d,C,k,b={};return g&&m.forEach(g.split(`
`),function(E){if(k=E.indexOf(":"),d=m.trim(E.substr(0,k)).toLowerCase(),C=m.trim(E.substr(k+1)),d){if(b[d]&&y.indexOf(d)>=0)return;b[d]=d==="set-cookie"?(b[d]?b[d]:[]).concat([C]):b[d]?b[d]+", "+C:C}}),b}},8699:l=>{l.exports=function(f){var p=/^([-+\w]{1,25})(:?\/\/|:)/.exec(f);return p&&p[1]||""}},3282:l=>{l.exports=function(f){return function(p){return f.apply(null,p)}}},6615:(l,f,p)=>{function m(g){return m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},m(g)}var y=p(7201);l.exports=function(g,d){d=d||new FormData;var C=[];function k(b){return b===null?"":y.isDate(b)?b.toISOString():y.isArrayBuffer(b)||y.isTypedArray(b)?typeof Blob=="function"?new Blob([b]):Buffer.from(b):b}return function b(E,N){if(y.isPlainObject(E)||y.isArray(E)){if(C.indexOf(E)!==-1)throw Error("Circular reference detected in "+N);C.push(E),y.forEach(E,function(T,I){if(!y.isUndefined(T)){var L,P=N?N+"."+I:I;if(T&&!N&&m(T)==="object"){if(y.endsWith(I,"{}"))T=JSON.stringify(T);else if(y.endsWith(I,"[]")&&(L=y.toArray(T)))return void L.forEach(function(S){!y.isUndefined(S)&&d.append(P,k(S))})}b(T,P)}}),C.pop()}else d.append(N,k(E))}(g),d}},9712:(l,f,p)=>{function m(k){return m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},m(k)}var y=p(4316).version,g=p(1766),d={};["object","boolean","number","function","string","symbol"].forEach(function(k,b){d[k]=function(E){return m(E)===k||"a"+(b<1?"n ":" ")+k}});var C={};d.transitional=function(k,b,E){function N(T,I){return"[Axios v"+y+"] Transitional option '"+T+"'"+I+(E?". "+E:"")}return function(T,I,L){if(k===!1)throw new g(N(I," has been removed"+(b?" in "+b:"")),g.ERR_DEPRECATED);return b&&!C[I]&&(C[I]=!0,console.warn(N(I," has been deprecated since v"+b+" and will be removed in the near future"))),!k||k(T,I,L)}},l.exports={assertOptions:function(k,b,E){if(m(k)!=="object")throw new g("options must be an object",g.ERR_BAD_OPTION_VALUE);for(var N=Object.keys(k),T=N.length;T-- >0;){var I=N[T],L=b[I];if(L){var P=k[I],S=P===void 0||L(P,I,k);if(S!==!0)throw new g("option "+I+" must be "+S,g.ERR_BAD_OPTION_VALUE)}else if(E!==!0)throw new g("Unknown option "+I,g.ERR_BAD_OPTION)}},validators:d}},7201:(l,f,p)=>{function m(z){return m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(ee){return typeof ee}:function(ee){return ee&&typeof Symbol=="function"&&ee.constructor===Symbol&&ee!==Symbol.prototype?"symbol":typeof ee},m(z)}var y,g=p(5305),d=Object.prototype.toString,C=(y=Object.create(null),function(z){var ee=d.call(z);return y[ee]||(y[ee]=ee.slice(8,-1).toLowerCase())});function k(z){return z=z.toLowerCase(),function(ee){return C(ee)===z}}function b(z){return Array.isArray(z)}function E(z){return z===void 0}var N=k("ArrayBuffer");function T(z){return z!==null&&m(z)==="object"}function I(z){if(C(z)!=="object")return!1;var ee=Object.getPrototypeOf(z);return ee===null||ee===Object.prototype}var L=k("Date"),P=k("File"),S=k("Blob"),F=k("FileList");function O(z){return d.call(z)==="[object Function]"}var H=k("URLSearchParams");function ae(z,ee){if(z!=null)if(m(z)!=="object"&&(z=[z]),b(z))for(var ie=0,xe=z.length;ie<xe;ie++)ee.call(null,z[ie],ie,z);else for(var se in z)Object.prototype.hasOwnProperty.call(z,se)&&ee.call(null,z[se],se,z)}var le,Y=(le=typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array),function(z){return le&&z instanceof le});l.exports={isArray:b,isArrayBuffer:N,isBuffer:function(z){return z!==null&&!E(z)&&z.constructor!==null&&!E(z.constructor)&&typeof z.constructor.isBuffer=="function"&&z.constructor.isBuffer(z)},isFormData:function(z){var ee="[object FormData]";return z&&(typeof FormData=="function"&&z instanceof FormData||d.call(z)===ee||O(z.toString)&&z.toString()===ee)},isArrayBufferView:function(z){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(z):z&&z.buffer&&N(z.buffer)},isString:function(z){return typeof z=="string"},isNumber:function(z){return typeof z=="number"},isObject:T,isPlainObject:I,isUndefined:E,isDate:L,isFile:P,isBlob:S,isFunction:O,isStream:function(z){return T(z)&&O(z.pipe)},isURLSearchParams:H,isStandardBrowserEnv:function(){return(typeof navigator>"u"||navigator.product!=="ReactNative"&&navigator.product!=="NativeScript"&&navigator.product!=="NS")&&typeof window<"u"&&typeof document<"u"},forEach:ae,merge:function z(){var ee={};function ie(U,ye){I(ee[ye])&&I(U)?ee[ye]=z(ee[ye],U):I(U)?ee[ye]=z({},U):b(U)?ee[ye]=U.slice():ee[ye]=U}for(var xe=0,se=arguments.length;xe<se;xe++)ae(arguments[xe],ie);return ee},extend:function(z,ee,ie){return ae(ee,function(xe,se){z[se]=ie&&typeof xe=="function"?g(xe,ie):xe}),z},trim:function(z){return z.trim?z.trim():z.replace(/^\s+|\s+$/g,"")},stripBOM:function(z){return z.charCodeAt(0)===65279&&(z=z.slice(1)),z},inherits:function(z,ee,ie,xe){z.prototype=Object.create(ee.prototype,xe),z.prototype.constructor=z,ie&&Object.assign(z.prototype,ie)},toFlatObject:function(z,ee,ie){var xe,se,U,ye={};ee=ee||{};do{for(se=(xe=Object.getOwnPropertyNames(z)).length;se-- >0;)ye[U=xe[se]]||(ee[U]=z[U],ye[U]=!0);z=Object.getPrototypeOf(z)}while(z&&(!ie||ie(z,ee))&&z!==Object.prototype);return ee},kindOf:C,kindOfTest:k,endsWith:function(z,ee,ie){z=String(z),(ie===void 0||ie>z.length)&&(ie=z.length),ie-=ee.length;var xe=z.indexOf(ee,ie);return xe!==-1&&xe===ie},toArray:function(z){if(!z)return null;var ee=z.length;if(E(ee))return null;for(var ie=new Array(ee);ee-- >0;)ie[ee]=z[ee];return ie},isTypedArray:Y,isFileList:F}},8160:l=>{l.exports=function(f){var p=[];return p.toString=function(){return this.map(function(m){var y="",g=m[5]!==void 0;return m[4]&&(y+="@supports (".concat(m[4],") {")),m[2]&&(y+="@media ".concat(m[2]," {")),g&&(y+="@layer".concat(m[5].length>0?" ".concat(m[5]):""," {")),y+=f(m),g&&(y+="}"),m[2]&&(y+="}"),m[4]&&(y+="}"),y}).join("")},p.i=function(m,y,g,d,C){typeof m=="string"&&(m=[[null,m,void 0]]);var k={};if(g)for(var b=0;b<this.length;b++){var E=this[b][0];E!=null&&(k[E]=!0)}for(var N=0;N<m.length;N++){var T=[].concat(m[N]);g&&k[T[0]]||(C!==void 0&&(T[5]===void 0||(T[1]="@layer".concat(T[5].length>0?" ".concat(T[5]):""," {").concat(T[1],"}")),T[5]=C),y&&(T[2]&&(T[1]="@media ".concat(T[2]," {").concat(T[1],"}")),T[2]=y),d&&(T[4]?(T[1]="@supports (".concat(T[4],") {").concat(T[1],"}"),T[4]=d):T[4]="".concat(d)),p.push(T))}},p}},8431:l=>{l.exports=function(f,p){return p||(p={}),f&&(f=String(f.__esModule?f.default:f),/^['"].*['"]$/.test(f)&&(f=f.slice(1,-1)),p.hash&&(f+=p.hash),/["'() \t\n]|(%20)/.test(f)||p.needQuotes?'"'.concat(f.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):f)}},8955:l=>{l.exports=function(f){var p=f[1],m=f[3];if(!m)return p;if(typeof btoa=="function"){var y=btoa(unescape(encodeURIComponent(JSON.stringify(m)))),g="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(y),d="/*# ".concat(g," */"),C=m.sources.map(function(k){return"/*# sourceURL=".concat(m.sourceRoot||"").concat(k," */")});return[p].concat(C).concat([d]).join(`
`)}return[p].join(`
`)}},7831:l=>{l.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg=="}},a={};function i(l){var f=a[l];if(f!==void 0)return f.exports;var p=a[l]={id:l,exports:{}};return n[l](p,p.exports,i),p.exports}i.m=n,i.n=l=>{var f=l&&l.__esModule?()=>l.default:()=>l;return i.d(f,{a:f}),f},i.d=(l,f)=>{for(var p in f)i.o(f,p)&&!i.o(l,p)&&Object.defineProperty(l,p,{enumerable:!0,get:f[p]})},i.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),i.o=(l,f)=>Object.prototype.hasOwnProperty.call(l,f),i.b=document.baseURI||self.location.href,i.nc=void 0;var o={};return(()=>{i.d(o,{default:()=>Gl});var l=i(9624),f=i.n(l),p=i(6990),m=i.n(p),y=i(6892),g=i.n(y),d=i(6359),C=i.n(d),k=i(2716),b=i.n(k),E=i(230),N=i.n(E),T=i(3150),I={};I.styleTagTransform=N(),I.setAttributes=C(),I.insert=g().bind(null,"head"),I.domAPI=m(),I.insertStyleElement=b(),f()(T.Z,I);function L(u){return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(h){return typeof h}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},L(u)}function P(u){return P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(h){return typeof h}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},P(u)}var S=setTimeout;function F(u){return!!(u&&u.length!==void 0)}function O(){}function H(u){if(!(this instanceof H))throw new TypeError("Promises must be constructed via new");if(typeof u!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],ie(u,this)}function ae(u,h){for(;u._state===3;)u=u._value;u._state!==0?(u._handled=!0,H._immediateFn(function(){var c=u._state===1?h.onFulfilled:h.onRejected;if(c!==null){var r;try{r=c(u._value)}catch(s){return void Y(h.promise,s)}le(h.promise,r)}else(u._state===1?le:Y)(h.promise,u._value)})):u._deferreds.push(h)}function le(u,h){try{if(h===u)throw new TypeError("A promise cannot be resolved with itself.");if(h&&(P(h)==="object"||typeof h=="function")){var c=h.then;if(h instanceof H)return u._state=3,u._value=h,void z(u);if(typeof c=="function")return void ie((r=c,s=h,function(){r.apply(s,arguments)}),u)}u._state=1,u._value=h,z(u)}catch(v){Y(u,v)}var r,s}function Y(u,h){u._state=2,u._value=h,z(u)}function z(u){u._state===2&&u._deferreds.length===0&&H._immediateFn(function(){u._handled||H._unhandledRejectionFn(u._value)});for(var h=0,c=u._deferreds.length;h<c;h++)ae(u,u._deferreds[h]);u._deferreds=null}function ee(u,h,c){this.onFulfilled=typeof u=="function"?u:null,this.onRejected=typeof h=="function"?h:null,this.promise=c}function ie(u,h){var c=!1;try{u(function(r){c||(c=!0,le(h,r))},function(r){c||(c=!0,Y(h,r))})}catch(r){if(c)return;c=!0,Y(h,r)}}H.prototype.catch=function(u){return this.then(null,u)},H.prototype.then=function(u,h){var c=new this.constructor(O);return ae(this,new ee(u,h,c)),c},H.prototype.finally=function(u){var h=this.constructor;return this.then(function(c){return h.resolve(u()).then(function(){return c})},function(c){return h.resolve(u()).then(function(){return h.reject(c)})})},H.all=function(u){return new H(function(h,c){if(!F(u))return c(new TypeError("Promise.all accepts an array"));var r=Array.prototype.slice.call(u);if(r.length===0)return h([]);var s=r.length;function v(M,_){try{if(_&&(P(_)==="object"||typeof _=="function")){var J=_.then;if(typeof J=="function")return void J.call(_,function(ve){v(M,ve)},c)}r[M]=_,--s==0&&h(r)}catch(ve){c(ve)}}for(var w=0;w<r.length;w++)v(w,r[w])})},H.allSettled=function(u){return new this(function(h,c){if(!u||u.length===void 0)return c(new TypeError(L(u)+" "+u+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var r=Array.prototype.slice.call(u);if(r.length===0)return h([]);var s=r.length;function v(M,_){if(_&&(L(_)==="object"||typeof _=="function")){var J=_.then;if(typeof J=="function")return void J.call(_,function(ve){v(M,ve)},function(ve){r[M]={status:"rejected",reason:ve},--s==0&&h(r)})}r[M]={status:"fulfilled",value:_},--s==0&&h(r)}for(var w=0;w<r.length;w++)v(w,r[w])})},H.resolve=function(u){return u&&P(u)==="object"&&u.constructor===H?u:new H(function(h){h(u)})},H.reject=function(u){return new H(function(h,c){c(u)})},H.race=function(u){return new H(function(h,c){if(!F(u))return c(new TypeError("Promise.race accepts an array"));for(var r=0,s=u.length;r<s;r++)H.resolve(u[r]).then(h,c)})},H._immediateFn=typeof setImmediate=="function"&&function(u){setImmediate(u)}||function(u){S(u,0)},H._unhandledRejectionFn=function(u){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",u)};const xe=H;var se=/mobile/i.test(window.navigator.userAgent);const U={secondToTime:function(u){if((u=u||0)===0||u===1/0||u.toString()==="NaN")return"00:00";var h=Math.floor(u/3600),c=Math.floor((u-3600*h)/60),r=Math.floor(u-3600*h-60*c);return(h>0?[h,c,r]:[c,r]).map(function(s){return s<10?"0"+s:""+s}).join(":")},getElementViewLeft:function(u){var h=u.offsetLeft,c=u.offsetParent,r=document.body.scrollLeft+document.documentElement.scrollLeft;if(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)for(;c!==null&&c!==u;)h+=c.offsetLeft,c=c.offsetParent;else for(;c!==null;)h+=c.offsetLeft,c=c.offsetParent;return h-r},getBoundingClientRectViewLeft:function(u){var h=window.scrollY||window.pageYOffset||document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0);if(u.getBoundingClientRect){if(typeof this.getBoundingClientRectViewLeft.offset!="number"){var c=document.createElement("div");c.style.cssText="position:absolute;top:0;left:0;",document.body.appendChild(c),this.getBoundingClientRectViewLeft.offset=-c.getBoundingClientRect().top-h,document.body.removeChild(c),c=null}var r=u.getBoundingClientRect(),s=this.getBoundingClientRectViewLeft.offset;return r.left+s}return this.getElementViewLeft(u)},getScrollPosition:function(){return{left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}},setScrollPosition:function(u){var h=u.left,c=h===void 0?0:h,r=u.top,s=r===void 0?0:r;this.isFirefox?(document.documentElement.scrollLeft=c,document.documentElement.scrollTop=s):window.scrollTo(c,s)},isMobile:se,isFirefox:/firefox/i.test(window.navigator.userAgent),isChrome:/chrome/i.test(window.navigator.userAgent),isSafari:/safari/i.test(window.navigator.userAgent),storage:{set:function(u,h){localStorage.setItem(u,h)},get:function(u){return localStorage.getItem(u)}},nameMap:{dragStart:se?"touchstart":"mousedown",dragMove:se?"touchmove":"mousemove",dragEnd:se?"touchend":"mouseup"},color2Number:function(u){return u[0]==="#"&&(u=u.substr(1)),u.length===3&&(u="".concat(u[0]).concat(u[0]).concat(u[1]).concat(u[1]).concat(u[2]).concat(u[2])),parseInt(u,16)+0&16777215},number2Color:function(u){return"#"+("00000"+u.toString(16)).slice(-6)},number2Type:function(u){switch(u){case 0:default:return"right";case 1:return"top";case 2:return"bottom"}}};var ye=i(6208),$e=i.n(ye);const rt={send:function(u){$e().post(u.url,u.data).then(function(h){var c=h.data;c&&c.code===0?u.success&&u.success(c):u.error&&u.error(c&&c.msg)}).catch(function(h){console.error(h),u.error&&u.error()})},read:function(u){$e().get(u.url).then(function(h){var c=h.data;c&&c.code===0?u.success&&u.success(c.data.map(function(r){return{time:r[0],type:r[1],color:r[2],author:r[3],text:r[4]}})):u.error&&u.error(c&&c.msg)}).catch(function(h){console.error(h),u.error&&u.error()})}};function tt(u){return tt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(h){return typeof h}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},tt(u)}function Bt(u){var h=this;this.lang=u,this.fallbackLang=this.lang.includes("-")?this.lang.split("-")[0]:this.lang,this.tran=function(c){return c=c.toLowerCase(),_e[h.lang]&&_e[h.lang][c]?_e[h.lang][c]:_e[h.fallbackLang]&&_e[h.fallbackLang][c]?_e[h.fallbackLang][c]:nt[c]?nt[c]:c}}var nt={"danmaku-loading":"Danmaku is loading",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Input danmaku, hit Enter","about-author":"About author","dplayer-feedback":"DPlayer feedback","about-dplayer":"About DPlayer",loop:"Loop",speed:"Speed","opacity-danmaku":"Opacity for danmaku",normal:"Normal","please-input-danmaku":"Please input danmaku content!","set-danmaku-color":"Set danmaku color","set-danmaku-type":"Set danmaku type","show-danmaku":"Show danmaku","video-failed":"Video load failed","danmaku-failed":"Danmaku load failed","danmaku-send-failed":"Danmaku send failed","switching-quality":"Switching to %q quality","switched-quality":"Switched to %q quality",ff:"FF %s s",rew:"REW %s s","unlimited-danmaku":"Unlimited danmaku","send-danmaku":"Send danmaku",setting:"Setting",fullscreen:"Full screen","web-fullscreen":"Web full screen",send:"Send",screenshot:"Screenshot",airplay:"AirPlay",chromecast:"ChromeCast",subtitle:"Subtitle",off:"Off","show-subs":"Show subtitle","hide-subs":"Hide subtitle",volume:"Volume",live:"Live","video-info":"Video info"},_e={en:nt,"zh-cn":{"danmaku-loading":"弹幕加载中",top:"顶部",bottom:"底部",rolling:"滚动","input-danmaku-enter":"输入弹幕，回车发送","about-author":"关于作者","dplayer-feedback":"播放器意见反馈","about-dplayer":"关于 DPlayer 播放器",loop:"洗脑循环",speed:"速度","opacity-danmaku":"弹幕透明度",normal:"正常","please-input-danmaku":"要输入弹幕内容啊喂！","set-danmaku-color":"设置弹幕颜色","set-danmaku-type":"设置弹幕类型","show-danmaku":"显示弹幕","video-failed":"视频加载失败","danmaku-failed":"弹幕加载失败","danmaku-send-failed":"弹幕发送失败","switching-quality":"正在切换至 %q 画质","switched-quality":"已经切换至 %q 画质",ff:"快进 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"海量弹幕","send-danmaku":"发送弹幕",setting:"设置",fullscreen:"全屏","web-fullscreen":"页面全屏",send:"发送",screenshot:"截图",airplay:"无线投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"关闭","show-subs":"显示字幕","hide-subs":"隐藏字幕",volume:"音量",live:"直播","video-info":"视频统计信息"},"zh-tw":{"danmaku-loading":"彈幕載入中",top:"頂部",bottom:"底部",rolling:"滾動","input-danmaku-enter":"輸入彈幕，Enter 發送","about-author":"關於作者","dplayer-feedback":"播放器意見回饋","about-dplayer":"關於 DPlayer 播放器",loop:"循環播放",speed:"速度","opacity-danmaku":"彈幕透明度",normal:"正常","please-input-danmaku":"請輸入彈幕內容啊！","set-danmaku-color":"設定彈幕顏色","set-danmaku-type":"設定彈幕類型","show-danmaku":"顯示彈幕","video-failed":"影片載入失敗","danmaku-failed":"彈幕載入失敗","danmaku-send-failed":"彈幕發送失敗","switching-quality":"正在切換至 %q 畫質","switched-quality":"已經切換至 %q 畫質",ff:"快進 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"巨量彈幕","send-danmaku":"發送彈幕",setting:"設定",fullscreen:"全螢幕","web-fullscreen":"頁面全螢幕",send:"發送",screenshot:"截圖",airplay:"無線投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"關閉","show-subs":"顯示字幕","hide-subs":"隱藏字幕",volume:"音量",live:"直播","video-info":"影片統計訊息"},"ko-kr":{"danmaku-loading":"Danmaku를 불러오는 중입니다.",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Danmaku를 입력하고 Enter를 누르세요.","about-author":"만든이","dplayer-feedback":"피드백 보내기","about-dplayer":"DPlayer 정보",loop:"반복",speed:"배속","opacity-danmaku":"Danmaku 불투명도",normal:"표준","please-input-danmaku":"Danmaku를 입력하세요!","set-danmaku-color":"Danmaku 색상","set-danmaku-type":"Danmaku 설정","show-danmaku":"Danmaku 표시","video-failed":"비디오를 불러오지 못했습니다.","danmaku-failed":"Danmaku를 불러오지 못했습니다.","danmaku-send-failed":"Danmaku 전송에 실패했습니다.","Switching to":"","Switched to":"","switching-quality":"전환 %q 화질","switched-quality":"전환 됨 %q 화질",ff:"앞으로 %s 초",rew:"뒤로 %s 초","unlimited-danmaku":"끝없는 Danmaku","send-danmaku":"Danmaku 보내기",setting:"설정",fullscreen:"전체 화면","web-fullscreen":"웹 내 전체화면",send:"보내기",screenshot:"화면 캡쳐",airplay:"에어플레이",chromecast:"ChromeCast",subtitle:"부제",off:"끄다","show-subs":"자막 보이기","hide-subs":"자막 숨기기",Volume:"볼륨",live:"생방송","video-info":"비디오 정보"},de:{"danmaku-loading":"Danmaku lädt...",top:"Oben",bottom:"Unten",rolling:"Rollend","input-danmaku-enter":"Drücke Enter nach dem Einfügen vom Danmaku","about-author":"Über den Autor","dplayer-feedback":"DPlayer Feedback","about-dplayer":"Über DPlayer",loop:"Wiederholen",speed:"Geschwindigkeit","opacity-danmaku":"Transparenz für Danmaku",normal:"Normal","please-input-danmaku":"Bitte Danmaku Inhalt eingeben!","set-danmaku-color":"Danmaku Farbe festlegen","set-danmaku-type":"Danmaku Typ festlegen","show-danmaku":"Zeige Danmaku","video-failed":"Das Video konnte nicht geladen werden","danmaku-failed":"Danmaku konnte nicht geladen werden","danmaku-send-failed":"Das senden von Danmaku ist fehgeschlagen","switching-quality":"Wechsle zur %q Qualität","switched-quality":"Zur %q Qualität gewechselt",ff:"%s s Vorwärts",rew:"%s s Zurück","unlimited-danmaku":"Unlimitiertes Danmaku","send-danmaku":"Sende Danmaku",setting:"Einstellungen",fullscreen:"Vollbild","web-fullscreen":"Browser Vollbild",send:"Senden",screenshot:"Screenshot",airplay:"AirPlay","show-subs":"Zeige Untertitel",chromecast:"ChromeCast",subtitle:"Untertitel",off:"Schließung","hide-subs":"Verstecke Untertitel",volume:"Lautstärke",live:"Live","video-info":"Video Info"}},Ze=i(730),qe=i.n(Ze),Le=i(6074),Ot=i.n(Le),X=i(4437),ce=i.n(X),Ce=i(2644),Ge=i.n(Ce),it=i(1324),Mt=i.n(it),Rt=i(4574),Je=i.n(Rt),be=i(1415),Ye=i.n(be),pt=i(5934),ct=i.n(pt),ut=i(1428),qt=i.n(ut),Cn=i(2807),Zt=i.n(Cn),kn=i(338),un=i.n(kn),Bn=i(2254),Pe=i.n(Bn),ot=i(1965),gt=i.n(ot),bt=i(8113),hn=i.n(bt),en=i(6251),_n=i.n(en),fn=i(8410),Qn=i.n(fn),Pa=i(4182),Va=i.n(Pa),Fa=i(3193),Wa=i.n(Fa);const ht={play:qe(),pause:Ot(),volumeUp:ce(),volumeDown:Ge(),volumeOff:Mt(),full:Je(),fullWeb:Ye(),setting:ct(),right:qt(),comment:Zt(),commentOff:un(),send:Pe(),pallette:gt(),camera:hn(),subtitle:Qn(),loading:Va(),airplay:_n(),chromecast:Wa()};var _a=i(1916),Qa=i.n(_a);function An(u,h){for(var c=0;c<h.length;c++){var r=h[c];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(u,r.key,r)}}var A=function(){function u(s){(function(v,w){if(!(v instanceof w))throw new TypeError("Cannot call a class as a function")})(this,u),this.container=s.container,this.options=s.options,this.index=s.index,this.tran=s.tran,this.init()}var h,c,r;return h=u,r=[{key:"NewNotice",value:function(s,v){var w=document.createElement("div");return w.classList.add("dplayer-notice"),w.style.opacity=v,w.innerText=s,w}}],(c=[{key:"init",value:function(){this.container.innerHTML=Qa()({options:this.options,index:this.index,tran:this.tran,icons:ht,mobile:U.isMobile,video:{current:!0,pic:this.options.video.pic,screenshot:this.options.screenshot,airplay:!(!U.isSafari||U.isChrome)&&this.options.airplay,chromecast:this.options.chromecast,preload:this.options.preload,url:this.options.video.url,subtitle:this.options.subtitle}}),this.volumeBar=this.container.querySelector(".dplayer-volume-bar-inner"),this.volumeBarWrap=this.container.querySelector(".dplayer-volume-bar"),this.volumeBarWrapWrap=this.container.querySelector(".dplayer-volume-bar-wrap"),this.volumeButton=this.container.querySelector(".dplayer-volume"),this.volumeButtonIcon=this.container.querySelector(".dplayer-volume-icon"),this.volumeIcon=this.container.querySelector(".dplayer-volume-icon .dplayer-icon-content"),this.playedBar=this.container.querySelector(".dplayer-played"),this.loadedBar=this.container.querySelector(".dplayer-loaded"),this.playedBarWrap=this.container.querySelector(".dplayer-bar-wrap"),this.playedBarTime=this.container.querySelector(".dplayer-bar-time"),this.danmaku=this.container.querySelector(".dplayer-danmaku"),this.danmakuLoading=this.container.querySelector(".dplayer-danloading"),this.video=this.container.querySelector(".dplayer-video-current"),this.bezel=this.container.querySelector(".dplayer-bezel-icon"),this.playButton=this.container.querySelector(".dplayer-play-icon"),this.mobilePlayButton=this.container.querySelector(".dplayer-mobile-play"),this.videoWrap=this.container.querySelector(".dplayer-video-wrap"),this.controllerMask=this.container.querySelector(".dplayer-controller-mask"),this.ptime=this.container.querySelector(".dplayer-ptime"),this.settingButton=this.container.querySelector(".dplayer-setting-icon"),this.settingBox=this.container.querySelector(".dplayer-setting-box"),this.mask=this.container.querySelector(".dplayer-mask"),this.loop=this.container.querySelector(".dplayer-setting-loop"),this.loopToggle=this.container.querySelector(".dplayer-setting-loop .dplayer-toggle-setting-input"),this.showDanmaku=this.container.querySelector(".dplayer-setting-showdan"),this.showDanmakuToggle=this.container.querySelector(".dplayer-showdan-setting-input"),this.unlimitDanmaku=this.container.querySelector(".dplayer-setting-danunlimit"),this.unlimitDanmakuToggle=this.container.querySelector(".dplayer-danunlimit-setting-input"),this.speed=this.container.querySelector(".dplayer-setting-speed"),this.speedItem=this.container.querySelectorAll(".dplayer-setting-speed-item"),this.danmakuOpacityBar=this.container.querySelector(".dplayer-danmaku-bar-inner"),this.danmakuOpacityBarWrap=this.container.querySelector(".dplayer-danmaku-bar"),this.danmakuOpacityBarWrapWrap=this.container.querySelector(".dplayer-danmaku-bar-wrap"),this.danmakuOpacityBox=this.container.querySelector(".dplayer-setting-danmaku"),this.dtime=this.container.querySelector(".dplayer-dtime"),this.controller=this.container.querySelector(".dplayer-controller"),this.commentInput=this.container.querySelector(".dplayer-comment-input"),this.commentButton=this.container.querySelector(".dplayer-comment-icon"),this.commentSettingBox=this.container.querySelector(".dplayer-comment-setting-box"),this.commentSettingButton=this.container.querySelector(".dplayer-comment-setting-icon"),this.commentSettingFill=this.container.querySelector(".dplayer-comment-setting-icon path"),this.commentSendButton=this.container.querySelector(".dplayer-send-icon"),this.commentSendFill=this.container.querySelector(".dplayer-send-icon path"),this.commentColorSettingBox=this.container.querySelector(".dplayer-comment-setting-color"),this.browserFullButton=this.container.querySelector(".dplayer-full-icon"),this.webFullButton=this.container.querySelector(".dplayer-full-in-icon"),this.menu=this.container.querySelector(".dplayer-menu"),this.menuItem=this.container.querySelectorAll(".dplayer-menu-item"),this.qualityList=this.container.querySelector(".dplayer-quality-list"),this.camareButton=this.container.querySelector(".dplayer-camera-icon"),this.airplayButton=this.container.querySelector(".dplayer-airplay-icon"),this.chromecastButton=this.container.querySelector(".dplayer-chromecast-icon"),this.subtitleButton=this.container.querySelector(".dplayer-subtitle-icon"),this.subtitleButtonInner=this.container.querySelector(".dplayer-subtitle-icon .dplayer-icon-content"),this.subtitlesButton=this.container.querySelector(".dplayer-subtitles-icon"),this.subtitlesBox=this.container.querySelector(".dplayer-subtitles-box"),this.subtitlesItem=this.container.querySelectorAll(".dplayer-subtitles-item"),this.subtitle=this.container.querySelector(".dplayer-subtitle"),this.subtrack=this.container.querySelector(".dplayer-subtrack"),this.qualityButton=this.container.querySelector(".dplayer-quality-icon"),this.barPreview=this.container.querySelector(".dplayer-bar-preview"),this.barWrap=this.container.querySelector(".dplayer-bar-wrap"),this.noticeList=this.container.querySelector(".dplayer-notice-list"),this.infoPanel=this.container.querySelector(".dplayer-info-panel"),this.infoPanelClose=this.container.querySelector(".dplayer-info-panel-close"),this.infoVersion=this.container.querySelector(".dplayer-info-panel-item-version .dplayer-info-panel-item-data"),this.infoFPS=this.container.querySelector(".dplayer-info-panel-item-fps .dplayer-info-panel-item-data"),this.infoType=this.container.querySelector(".dplayer-info-panel-item-type .dplayer-info-panel-item-data"),this.infoUrl=this.container.querySelector(".dplayer-info-panel-item-url .dplayer-info-panel-item-data"),this.infoResolution=this.container.querySelector(".dplayer-info-panel-item-resolution .dplayer-info-panel-item-data"),this.infoDuration=this.container.querySelector(".dplayer-info-panel-item-duration .dplayer-info-panel-item-data"),this.infoDanmakuId=this.container.querySelector(".dplayer-info-panel-item-danmaku-id .dplayer-info-panel-item-data"),this.infoDanmakuApi=this.container.querySelector(".dplayer-info-panel-item-danmaku-api .dplayer-info-panel-item-data"),this.infoDanmakuAmount=this.container.querySelector(".dplayer-info-panel-item-danmaku-amount .dplayer-info-panel-item-data")}}])&&An(h.prototype,c),r&&An(h,r),Object.defineProperty(h,"prototype",{writable:!1}),u}();const x=A;function B(u){return B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(h){return typeof h}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},B(u)}function D(u,h){for(var c=0;c<h.length;c++){var r=h[c];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(u,r.key,r)}}var q=function(){function u(r){(function(s,v){if(!(s instanceof v))throw new TypeError("Cannot call a class as a function")})(this,u),this.options=r,this.player=this.options.player,this.container=this.options.container,this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.dan=[],this.showing=!0,this._opacity=this.options.opacity,this.events=this.options.events,this.unlimited=this.options.unlimited,this._measure(""),this.load()}var h,c;return h=u,c=[{key:"load",value:function(){var r,s=this;r=this.options.api.maximum?"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id,"&max=").concat(this.options.api.maximum):"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id);var v=(this.options.api.addition||[]).slice(0);v.push(r),this.events&&this.events.trigger("danmaku_load_start",v),this._readAllEndpoints(v,function(w){s.dan=[].concat.apply([],w).sort(function(M,_){return M.time-_.time}),window.requestAnimationFrame(function(){s.frame()}),s.options.callback(),s.events&&s.events.trigger("danmaku_load_end")})}},{key:"reload",value:function(r){this.options.api=r,this.dan=[],this.clear(),this.load()}},{key:"_readAllEndpoints",value:function(r,s){for(var v=this,w=[],M=0,_=function(ve){v.options.apiBackend.read({url:r[ve],success:function(Ne){w[ve]=Ne,++M===r.length&&s(w)},error:function(Ne){v.options.error(Ne||v.options.tran("danmaku-failed")),w[ve]=[],++M===r.length&&s(w)}})},J=0;J<r.length;++J)_(J)}},{key:"send",value:function(r,s){var v=this,w={token:this.options.api.token,id:this.options.api.id,author:this.options.api.user,time:this.options.time(),text:r.text,color:r.color,type:r.type};this.options.apiBackend.send({url:this.options.api.address+"v3/",data:w,success:s,error:function(_){v.options.error(_||v.options.tran("danmaku-failed"))}}),this.dan.splice(this.danIndex,0,w),this.danIndex++;var M={text:this.htmlEncode(w.text),color:w.color,type:w.type,border:"2px solid ".concat(this.options.borderColor)};this.draw(M),this.events&&this.events.trigger("danmaku_send",w)}},{key:"frame",value:function(){var r=this;if(this.dan.length&&!this.paused&&this.showing){for(var s=this.dan[this.danIndex],v=[];s&&this.options.time()>parseFloat(s.time);)v.push(s),s=this.dan[++this.danIndex];this.draw(v)}window.requestAnimationFrame(function(){r.frame()})}},{key:"opacity",value:function(r){if(r!==void 0){for(var s=this.container.getElementsByClassName("dplayer-danmaku-item"),v=0;v<s.length;v++)s[v].style.opacity=r;this._opacity=r,this.events&&this.events.trigger("danmaku_opacity",this._opacity)}return this._opacity}},{key:"draw",value:function(r){var s=this;if(this.showing){var v=this.options.height,w=this.container.offsetWidth,M=this.container.offsetHeight,_=parseInt(M/v),J=function(fe){var Ee=fe.offsetWidth||parseInt(fe.style.width),Sn=fe.getBoundingClientRect().right||s.container.getBoundingClientRect().right+Ee;return s.container.getBoundingClientRect().right-Sn},ve=function(fe){return(w+fe)/5},Ne=function(fe,Ee,Sn){for(var Ht=w/ve(Sn),Jl=function(mn){var Tn=s.danTunnel[Ee][mn+""];if(!Tn||!Tn.length)return s.danTunnel[Ee][mn+""]=[fe],fe.addEventListener("animationend",function(){s.danTunnel[Ee][mn+""].splice(0,1)}),{v:mn%_};if(Ee!=="right")return"continue";for(var Un=0;Un<Tn.length;Un++){var ui=J(Tn[Un])-10;if(ui<=w-Ht*ve(parseInt(Tn[Un].style.width))||ui<=0)break;if(Un===Tn.length-1)return s.danTunnel[Ee][mn+""].push(fe),fe.addEventListener("animationend",function(){s.danTunnel[Ee][mn+""].splice(0,1)}),{v:mn%_}}},Ja=0;s.unlimited||Ja<_;Ja++){var Za=Jl(Ja);if(Za!=="continue"&&B(Za)==="object")return Za.v}return-1};Object.prototype.toString.call(r)!=="[object Array]"&&(r=[r]);for(var Vt=document.createDocumentFragment(),vt=function(fe){r[fe].type=U.number2Type(r[fe].type),r[fe].color||(r[fe].color=16777215);var Ee=document.createElement("div");Ee.classList.add("dplayer-danmaku-item"),Ee.classList.add("dplayer-danmaku-".concat(r[fe].type)),r[fe].border?Ee.innerHTML='<span style="border:'.concat(r[fe].border,'">').concat(r[fe].text,"</span>"):Ee.innerHTML=r[fe].text,Ee.style.opacity=s._opacity,Ee.style.color=U.number2Color(r[fe].color),Ee.addEventListener("animationend",function(){s.container.removeChild(Ee)});var Sn=s._measure(r[fe].text),Ht=void 0;switch(r[fe].type){case"right":(Ht=Ne(Ee,r[fe].type,Sn))>=0&&(Ee.style.width=Sn+1+"px",Ee.style.top=v*Ht+"px",Ee.style.transform="translateX(-".concat(w,"px)"));break;case"top":(Ht=Ne(Ee,r[fe].type))>=0&&(Ee.style.top=v*Ht+"px");break;case"bottom":(Ht=Ne(Ee,r[fe].type))>=0&&(Ee.style.bottom=v*Ht+"px");break;default:console.error("Can't handled danmaku type: ".concat(r[fe].type))}Ht>=0&&(Ee.classList.add("dplayer-danmaku-move"),Ee.style.animationDuration=s._danAnimation(r[fe].type),Vt.appendChild(Ee))},nn=0;nn<r.length;nn++)vt(nn);return this.container.appendChild(Vt),Vt}}},{key:"play",value:function(){this.paused=!1}},{key:"pause",value:function(){this.paused=!0}},{key:"_measure",value:function(r){if(!this.context){var s=getComputedStyle(this.container.getElementsByClassName("dplayer-danmaku-item")[0],null);this.context=document.createElement("canvas").getContext("2d"),this.context.font=s.getPropertyValue("font")}return this.context.measureText(r).width}},{key:"seek",value:function(){this.clear();for(var r=0;r<this.dan.length;r++){if(this.dan[r].time>=this.options.time()){this.danIndex=r;break}this.danIndex=this.dan.length}}},{key:"clear",value:function(){this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.options.container.innerHTML="",this.events&&this.events.trigger("danmaku_clear")}},{key:"htmlEncode",value:function(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2f;")}},{key:"resize",value:function(){for(var r=this.container.offsetWidth,s=this.container.getElementsByClassName("dplayer-danmaku-item"),v=0;v<s.length;v++)s[v].style.transform="translateX(-".concat(r,"px)")}},{key:"hide",value:function(){this.showing=!1,this.pause(),this.clear(),this.events&&this.events.trigger("danmaku_hide")}},{key:"show",value:function(){this.seek(),this.showing=!0,this.play(),this.events&&this.events.trigger("danmaku_show")}},{key:"unlimit",value:function(r){this.unlimited=r}},{key:"speed",value:function(r){this.options.api.speedRate=r}},{key:"_danAnimation",value:function(r){var s=this.options.api.speedRate||1,v=!!this.player.fullScreen.isFullScreen();return{top:"".concat((v?6:4)/s,"s"),right:"".concat((v?8:5)/s,"s"),bottom:"".concat((v?6:4)/s,"s")}[r]}}],c&&D(h.prototype,c),Object.defineProperty(h,"prototype",{writable:!1}),u}();const R=q;function W(u,h){for(var c=0;c<h.length;c++){var r=h[c];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(u,r.key,r)}}const j=function(){function u(){(function(r,s){if(!(r instanceof s))throw new TypeError("Cannot call a class as a function")})(this,u),this.events={},this.videoEvents=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","mozaudioavailable","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],this.playerEvents=["screenshot","thumbnails_show","thumbnails_hide","danmaku_show","danmaku_hide","danmaku_clear","danmaku_loaded","danmaku_send","danmaku_opacity","contextmenu_show","contextmenu_hide","notice_show","notice_hide","quality_start","quality_end","destroy","resize","fullscreen","fullscreen_cancel","webfullscreen","webfullscreen_cancel","subtitle_show","subtitle_hide","subtitle_change"]}var h,c;return h=u,(c=[{key:"on",value:function(r,s){this.type(r)&&typeof s=="function"&&(this.events[r]||(this.events[r]=[]),this.events[r].push(s))}},{key:"trigger",value:function(r,s){if(this.events[r]&&this.events[r].length)for(var v=0;v<this.events[r].length;v++)this.events[r][v](s)}},{key:"type",value:function(r){return this.playerEvents.indexOf(r)!==-1?"player":this.videoEvents.indexOf(r)!==-1?"video":(console.error("Unknown event name: ".concat(r)),null)}}])&&W(h.prototype,c),Object.defineProperty(h,"prototype",{writable:!1}),u}();function K(u,h){for(var c=0;c<h.length;c++){var r=h[c];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(u,r.key,r)}}var ne=function(){function u(r){var s=this;(function(v,w){if(!(v instanceof w))throw new TypeError("Cannot call a class as a function")})(this,u),this.player=r,this.lastScrollPosition={left:0,top:0},this.player.events.on("webfullscreen",function(){s.player.resize()}),this.player.events.on("webfullscreen_cancel",function(){s.player.resize(),U.setScrollPosition(s.lastScrollPosition)}),this.fullscreenchange=function(){s.player.resize(),s.isFullScreen("browser")?s.player.events.trigger("fullscreen"):(U.setScrollPosition(s.lastScrollPosition),s.player.events.trigger("fullscreen_cancel"))},this.docfullscreenchange=function(){var v=document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;v&&v!==s.player.container||(s.player.resize(),v?s.player.events.trigger("fullscreen"):(U.setScrollPosition(s.lastScrollPosition),s.player.events.trigger("fullscreen_cancel")))},/Firefox/.test(navigator.userAgent)?(document.addEventListener("mozfullscreenchange",this.docfullscreenchange),document.addEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.addEventListener("fullscreenchange",this.fullscreenchange),this.player.container.addEventListener("webkitfullscreenchange",this.fullscreenchange),document.addEventListener("msfullscreenchange",this.docfullscreenchange),document.addEventListener("MSFullscreenChange",this.docfullscreenchange))}var h,c;return h=u,c=[{key:"isFullScreen",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(r){case"browser":return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;case"web":return this.player.container.classList.contains("dplayer-fulled")}}},{key:"request",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser",s=r==="browser"?"web":"browser",v=this.isFullScreen(s);switch(v||(this.lastScrollPosition=U.getScrollPosition()),r){case"browser":this.player.container.requestFullscreen?this.player.container.requestFullscreen():this.player.container.mozRequestFullScreen?this.player.container.mozRequestFullScreen():this.player.container.webkitRequestFullscreen?this.player.container.webkitRequestFullscreen():this.player.video.webkitEnterFullscreen?this.player.video.webkitEnterFullscreen():this.player.video.webkitEnterFullScreen?this.player.video.webkitEnterFullScreen():this.player.container.msRequestFullscreen&&this.player.container.msRequestFullscreen();break;case"web":this.player.container.classList.add("dplayer-fulled"),document.body.classList.add("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen")}v&&this.cancel(s)}},{key:"cancel",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(r){case"browser":document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.webkitCancelFullscreen?document.webkitCancelFullscreen():document.msCancelFullScreen?document.msCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen();break;case"web":this.player.container.classList.remove("dplayer-fulled"),document.body.classList.remove("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen_cancel")}}},{key:"toggle",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";this.isFullScreen(r)?this.cancel(r):this.request(r)}},{key:"destroy",value:function(){/Firefox/.test(navigator.userAgent)?(document.removeEventListener("mozfullscreenchange",this.docfullscreenchange),document.removeEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.removeEventListener("fullscreenchange",this.fullscreenchange),this.player.container.removeEventListener("webkitfullscreenchange",this.fullscreenchange),document.removeEventListener("msfullscreenchange",this.docfullscreenchange),document.removeEventListener("MSFullscreenChange",this.docfullscreenchange))}}],c&&K(h.prototype,c),Object.defineProperty(h,"prototype",{writable:!1}),u}();const re=ne;function te(u,h){for(var c=0;c<h.length;c++){var r=h[c];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(u,r.key,r)}}var ue=function(){function u(r){(function(s,v){if(!(s instanceof v))throw new TypeError("Cannot call a class as a function")})(this,u),this.storageName={opacity:"dplayer-danmaku-opacity",volume:"dplayer-volume",unlimited:"dplayer-danmaku-unlimited",danmaku:"dplayer-danmaku-show",subtitle:"dplayer-subtitle-show"},this.default={opacity:.7,volume:r.options.hasOwnProperty("volume")?r.options.volume:.7,unlimited:(r.options.danmaku&&r.options.danmaku.unlimited?1:0)||0,danmaku:1,subtitle:1},this.data={},this.init()}var h,c;return h=u,(c=[{key:"init",value:function(){for(var r in this.storageName){var s=this.storageName[r];this.data[r]=parseFloat(U.storage.get(s)||this.default[r])}}},{key:"get",value:function(r){return this.data[r]}},{key:"set",value:function(r,s){this.data[r]=s,U.storage.set(this.storageName[r],s)}}])&&te(h.prototype,c),Object.defineProperty(h,"prototype",{writable:!1}),u}();const de=ue;function he(u,h){for(var c=0;c<h.length;c++){var r=h[c];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(u,r.key,r)}}var ze=function(){function u(r,s,v,w){(function(M,_){if(!(M instanceof _))throw new TypeError("Cannot call a class as a function")})(this,u),this.container=r,this.video=s,this.options=v,this.events=w,this.init()}var h,c;return h=u,c=[{key:"init",value:function(){var r=this;if(this.container.style.fontSize=this.options.fontSize,this.container.style.bottom=this.options.bottom,this.container.style.color=this.options.color,this.video.textTracks&&this.video.textTracks[0]){var s=this.video.textTracks[0];s.oncuechange=function(){var v=s.activeCues[s.activeCues.length-1];if(r.container.innerHTML="",v){var w=document.createElement("div");w.appendChild(v.getCueAsHTML());var M=w.innerHTML.split(/\r?\n/).map(function(_){return"<p>".concat(_,"</p>")}).join("");r.container.innerHTML=M}r.events.trigger("subtitle_change")}}}},{key:"show",value:function(){this.container.classList.remove("dplayer-subtitle-hide"),this.events.trigger("subtitle_show")}},{key:"hide",value:function(){this.container.classList.add("dplayer-subtitle-hide"),this.events.trigger("subtitle_hide")}},{key:"toggle",value:function(){this.container.classList.contains("dplayer-subtitle-hide")?this.show():this.hide()}}],c&&he(h.prototype,c),Object.defineProperty(h,"prototype",{writable:!1}),u}();const It=ze;function Pt(u,h){for(var c=0;c<h.length;c++){var r=h[c];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(u,r.key,r)}}var lt=function(){function u(r){var s=this;(function(_,J){if(!(_ instanceof J))throw new TypeError("Cannot call a class as a function")})(this,u),this.player=r,this.player.template.mask.addEventListener("click",function(){s.hide()}),this.player.template.subtitlesButton.addEventListener("click",function(){s.adaptiveHeight(),s.show()});for(var v=this.player.template.subtitlesItem.length-1,w=function(_){s.player.template.subtitlesItem[_].addEventListener("click",function(){s.hide(),s.player.options.subtitle.index!==_&&(s.player.template.subtitle.innerHTML="<p></p>",s.player.template.subtrack.src=s.player.template.subtitlesItem[_].dataset.subtitle,s.player.options.subtitle.index=_,s.player.template.subtitle.classList.contains("dplayer-subtitle-hide")&&s.subContainerShow())})},M=0;M<v;M++)w(M);this.player.template.subtitlesItem[v].addEventListener("click",function(){s.hide(),s.player.options.subtitle.index!==v&&(s.player.template.subtitle.innerHTML="<p></p>",s.player.template.subtrack.src="",s.player.options.subtitle.index=v,s.subContainerHide())})}var h,c;return h=u,(c=[{key:"subContainerShow",value:function(){this.player.template.subtitle.classList.remove("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_show")}},{key:"subContainerHide",value:function(){this.player.template.subtitle.classList.add("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_hide")}},{key:"hide",value:function(){this.player.template.subtitlesBox.classList.remove("dplayer-subtitles-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.subtitlesBox.classList.add("dplayer-subtitles-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}},{key:"adaptiveHeight",value:function(){var r=30*this.player.template.subtitlesItem.length+14,s=.8*this.player.template.videoWrap.offsetHeight;r>=s-50?(this.player.template.subtitlesBox.style.bottom="8px",this.player.template.subtitlesBox.style["max-height"]=s-8+"px"):(this.player.template.subtitlesBox.style.bottom="50px",this.player.template.subtitlesBox.style["max-height"]=s-50+"px")}}])&&Pt(h.prototype,c),Object.defineProperty(h,"prototype",{writable:!1}),u}();const Qt=lt;function Ua(u,h){for(var c=0;c<h.length;c++){var r=h[c];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(u,r.key,r)}}var oa=function(){function u(r){(function(s,v){if(!(s instanceof v))throw new TypeError("Cannot call a class as a function")})(this,u),this.elements={},this.elements.volume=r.volumeBar,this.elements.played=r.playedBar,this.elements.loaded=r.loadedBar,this.elements.danmaku=r.danmakuOpacityBar}var h,c;return h=u,(c=[{key:"set",value:function(r,s,v){s=Math.max(s,0),s=Math.min(s,1),this.elements[r].style[v]=100*s+"%"}},{key:"get",value:function(r){return parseFloat(this.elements[r].style.width)/100}}])&&Ua(h.prototype,c),Object.defineProperty(h,"prototype",{writable:!1}),u}();const ul=oa;function hl(u,h){for(var c=0;c<h.length;c++){var r=h[c];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(u,r.key,r)}}var fl=function(){function u(r){(function(s,v){if(!(s instanceof v))throw new TypeError("Cannot call a class as a function")})(this,u),this.player=r,window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(s){window.setTimeout(s,1e3/60)},this.types=["loading","info","fps"],this.init()}var h,c;return h=u,(c=[{key:"init",value:function(){var r=this;this.types.map(function(s){return s!=="fps"&&r["init".concat(s,"Checker")](),s})}},{key:"initloadingChecker",value:function(){var r=this,s=0,v=0,w=!1;this.loadingChecker=setInterval(function(){r.enableloadingChecker&&(v=r.player.video.currentTime,w||v!==s||r.player.video.paused||(r.player.container.classList.add("dplayer-loading"),w=!0),w&&v>s&&!r.player.video.paused&&(r.player.container.classList.remove("dplayer-loading"),w=!1),s=v)},100)}},{key:"initfpsChecker",value:function(){var r=this;window.requestAnimationFrame(function(){if(r.enablefpsChecker)if(r.initfpsChecker(),r.fpsStart){r.fpsIndex++;var s=new Date;s-r.fpsStart>1e3&&(r.player.infoPanel.fps(r.fpsIndex/(s-r.fpsStart)*1e3),r.fpsStart=new Date,r.fpsIndex=0)}else r.fpsStart=new Date,r.fpsIndex=0;else r.fpsStart=0,r.fpsIndex=0})}},{key:"initinfoChecker",value:function(){var r=this;this.infoChecker=setInterval(function(){r.enableinfoChecker&&r.player.infoPanel.update()},1e3)}},{key:"enable",value:function(r){this["enable".concat(r,"Checker")]=!0,r==="fps"&&this.initfpsChecker()}},{key:"disable",value:function(r){this["enable".concat(r,"Checker")]=!1}},{key:"destroy",value:function(){var r=this;this.types.map(function(s){return r["enable".concat(s,"Checker")]=!1,r["".concat(s,"Checker")]&&clearInterval(r["".concat(s,"Checker")]),s})}}])&&hl(h.prototype,c),Object.defineProperty(h,"prototype",{writable:!1}),u}();const Al=fl;function ml(u,h){for(var c=0;c<h.length;c++){var r=h[c];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(u,r.key,r)}}const yl=function(){function u(r){var s=this;(function(v,w){if(!(v instanceof w))throw new TypeError("Cannot call a class as a function")})(this,u),this.container=r,this.container.addEventListener("animationend",function(){s.container.classList.remove("dplayer-bezel-transition")})}var h,c;return h=u,(c=[{key:"switch",value:function(r){this.container.innerHTML=r,this.container.classList.add("dplayer-bezel-transition")}}])&&ml(h.prototype,c),Object.defineProperty(h,"prototype",{writable:!1}),u}();function gl(u,h){for(var c=0;c<h.length;c++){var r=h[c];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(u,r.key,r)}}var bl=function(){function u(r){(function(s,v){if(!(s instanceof v))throw new TypeError("Cannot call a class as a function")})(this,u),this.container=r.container,this.barWidth=r.barWidth,this.container.style.backgroundImage="url('".concat(r.url,"')"),this.events=r.events}var h,c;return h=u,(c=[{key:"resize",value:function(r,s,v){this.container.style.width="".concat(r,"px"),this.container.style.height="".concat(s,"px"),this.container.style.top="".concat(2-s,"px"),this.barWidth=v}},{key:"show",value:function(){this.container.style.display="block",this.events&&this.events.trigger("thumbnails_show")}},{key:"move",value:function(r){this.container.style.backgroundPosition="-".concat(160*(Math.ceil(r/this.barWidth*100)-1),"px 0"),this.container.style.left="".concat(Math.min(Math.max(r-this.container.offsetWidth/2,-10),this.barWidth-150),"px")}},{key:"hide",value:function(){this.container.style.display="none",this.events&&this.events.trigger("thumbnails_hide")}}])&&gl(h.prototype,c),Object.defineProperty(h,"prototype",{writable:!1}),u}();const vl=bl;var Ha=function(u,h){return Ha=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,r){c.__proto__=r}||function(c,r){for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(c[s]=r[s])},Ha(u,h)};function la(u,h){if(typeof h!="function"&&h!==null)throw new TypeError("Class extends value "+String(h)+" is not a constructor or null");function c(){this.constructor=u}Ha(u,h),u.prototype=h===null?Object.create(h):(c.prototype=h.prototype,new c)}function ja(u){var h=typeof Symbol=="function"&&Symbol.iterator,c=h&&u[h],r=0;if(c)return c.call(u);if(u&&typeof u.length=="number")return{next:function(){return u&&r>=u.length&&(u=void 0),{value:u&&u[r++],done:!u}}};throw new TypeError(h?"Object is not iterable.":"Symbol.iterator is not defined.")}function sa(u,h){var c=typeof Symbol=="function"&&u[Symbol.iterator];if(!c)return u;var r,s,v=c.call(u),w=[];try{for(;!(r=v.next()).done;)w.push(r.value)}catch(M){s={error:M}}finally{try{r&&!r.done&&(c=v.return)&&c.call(v)}finally{if(s)throw s.error}}return w}function da(u,h,c){if(arguments.length===2)for(var r,s=0,v=h.length;s<v;s++)!r&&s in h||(r||(r=Array.prototype.slice.call(h,0,s)),r[s]=h[s]);return u.concat(r||Array.prototype.slice.call(h))}function Ut(u){return typeof u=="function"}function Jr(u){var h=u(function(c){Error.call(c),c.stack=new Error().stack});return h.prototype=Object.create(Error.prototype),h.prototype.constructor=h,h}var $a=Jr(function(u){return function(h){u(this),this.message=h?h.length+` errors occurred during unsubscription:
`+h.map(function(c,r){return r+1+") "+c.toString()}).join(""):"",this.name="UnsubscriptionError",this.errors=h}});function Ya(u,h){if(u){var c=u.indexOf(h);0<=c&&u.splice(c,1)}}var pa=function(){function u(c){this.initialTeardown=c,this.closed=!1,this._parentage=null,this._finalizers=null}var h;return u.prototype.unsubscribe=function(){var c,r,s,v,w;if(!this.closed){this.closed=!0;var M=this._parentage;if(M)if(this._parentage=null,Array.isArray(M))try{for(var _=ja(M),J=_.next();!J.done;J=_.next())J.value.remove(this)}catch(fe){c={error:fe}}finally{try{J&&!J.done&&(r=_.return)&&r.call(_)}finally{if(c)throw c.error}}else M.remove(this);var ve=this.initialTeardown;if(Ut(ve))try{ve()}catch(fe){w=fe instanceof $a?fe.errors:[fe]}var Ne=this._finalizers;if(Ne){this._finalizers=null;try{for(var Vt=ja(Ne),vt=Vt.next();!vt.done;vt=Vt.next()){var nn=vt.value;try{ti(nn)}catch(fe){w=w??[],fe instanceof $a?w=da(da([],sa(w)),sa(fe.errors)):w.push(fe)}}}catch(fe){s={error:fe}}finally{try{vt&&!vt.done&&(v=Vt.return)&&v.call(Vt)}finally{if(s)throw s.error}}}if(w)throw new $a(w)}},u.prototype.add=function(c){var r;if(c&&c!==this)if(this.closed)ti(c);else{if(c instanceof u){if(c.closed||c._hasParent(this))return;c._addParent(this)}(this._finalizers=(r=this._finalizers)!==null&&r!==void 0?r:[]).push(c)}},u.prototype._hasParent=function(c){var r=this._parentage;return r===c||Array.isArray(r)&&r.includes(c)},u.prototype._addParent=function(c){var r=this._parentage;this._parentage=Array.isArray(r)?(r.push(c),r):r?[r,c]:c},u.prototype._removeParent=function(c){var r=this._parentage;r===c?this._parentage=null:Array.isArray(r)&&Ya(r,c)},u.prototype.remove=function(c){var r=this._finalizers;r&&Ya(r,c),c instanceof u&&c._removeParent(this)},u.EMPTY=((h=new u).closed=!0,h),u}(),Zr=pa.EMPTY;function ei(u){return u instanceof pa||u&&"closed"in u&&Ut(u.remove)&&Ut(u.add)&&Ut(u.unsubscribe)}function ti(u){Ut(u)?u():u.unsubscribe()}var wl=void 0,Ka={setTimeout:function(u){function h(c,r){return u.apply(this,arguments)}return h.toString=function(){return u.toString()},h}(function(u,h){for(var c=[],r=2;r<arguments.length;r++)c[r-2]=arguments[r];var s=Ka.delegate;return s?.setTimeout?s.setTimeout.apply(s,da([u,h],sa(c))):setTimeout.apply(void 0,da([u,h],sa(c)))}),clearTimeout:function(u){function h(c){return u.apply(this,arguments)}return h.toString=function(){return u.toString()},h}(function(u){var h=Ka.delegate;return(h?.clearTimeout||clearTimeout)(u)}),delegate:void 0};function ni(){}function ca(u){u()}var ai=function(u){function h(c){var r=u.call(this)||this;return r.isStopped=!1,c?(r.destination=c,ei(c)&&c.add(r)):r.destination=El,r}return la(h,u),h.create=function(c,r,s){return new Xa(c,r,s)},h.prototype.next=function(c){this.isStopped?void 0:this._next(c)},h.prototype.error=function(c){this.isStopped?void 0:(this.isStopped=!0,this._error(c))},h.prototype.complete=function(){this.isStopped?void 0:(this.isStopped=!0,this._complete())},h.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,u.prototype.unsubscribe.call(this),this.destination=null)},h.prototype._next=function(c){this.destination.next(c)},h.prototype._error=function(c){try{this.destination.error(c)}finally{this.unsubscribe()}},h.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},h}(pa),xl=function(){function u(h){this.partialObserver=h}return u.prototype.next=function(h){var c=this.partialObserver;if(c.next)try{c.next(h)}catch(r){ua(r)}},u.prototype.error=function(h){var c=this.partialObserver;if(c.error)try{c.error(h)}catch(r){ua(r)}else ua(h)},u.prototype.complete=function(){var h=this.partialObserver;if(h.complete)try{h.complete()}catch(c){ua(c)}},u}(),Xa=function(u){function h(c,r,s){var v,w=u.call(this)||this;return Ut(c)||!c?v={next:c??void 0,error:r??void 0,complete:s??void 0}:v=c,w.destination=new xl(v),w}return la(h,u),h}(ai);function ua(u){(function(h){Ka.setTimeout(function(){throw h})})(u)}function vu(u,h){}var El={closed:!0,next:ni,error:function(u){throw u},complete:ni},Cl=typeof Symbol=="function"&&Symbol.observable||"@@observable";function kl(u){return u}function Bl(u){return u.length===0?kl:u.length===1?u[0]:function(h){return u.reduce(function(c,r){return r(c)},h)}}var ri=function(){function u(h){h&&(this._subscribe=h)}return u.prototype.lift=function(h){var c=new u;return c.source=this,c.operator=h,c},u.prototype.subscribe=function(h,c,r){var s,v=this,w=(s=h)&&s instanceof ai||function(M){return M&&Ut(M.next)&&Ut(M.error)&&Ut(M.complete)}(s)&&ei(s)?h:new Xa(h,c,r);return ca(function(){var M=v,_=M.operator,J=M.source;w.add(_?_.call(w,J):J?v._subscribe(w):v._trySubscribe(w))}),w},u.prototype._trySubscribe=function(h){try{return this._subscribe(h)}catch(c){h.error(c)}},u.prototype.forEach=function(h,c){var r=this;return new(c=ii(c))(function(s,v){var w=new Xa({next:function(M){try{h(M)}catch(_){v(_),w.unsubscribe()}},error:v,complete:s});r.subscribe(w)})},u.prototype._subscribe=function(h){var c;return(c=this.source)===null||c===void 0?void 0:c.subscribe(h)},u.prototype[Cl]=function(){return this},u.prototype.pipe=function(){for(var h=[],c=0;c<arguments.length;c++)h[c]=arguments[c];return Bl(h)(this)},u.prototype.toPromise=function(h){var c=this;return new(h=ii(h))(function(r,s){var v;c.subscribe(function(w){return v=w},function(w){return s(w)},function(){return r(v)})})},u.create=function(h){return new u(h)},u}();function ii(u){var h;return(h=u??wl)!==null&&h!==void 0?h:Promise}var tn,Il=Jr(function(u){return function(){u(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),oi=function(u){function h(){var c=u.call(this)||this;return c.closed=!1,c.currentObservers=null,c.observers=[],c.isStopped=!1,c.hasError=!1,c.thrownError=null,c}return la(h,u),h.prototype.lift=function(c){var r=new li(this,this);return r.operator=c,r},h.prototype._throwIfClosed=function(){if(this.closed)throw new Il},h.prototype.next=function(c){var r=this;ca(function(){var s,v;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var w=ja(r.currentObservers),M=w.next();!M.done;M=w.next())M.value.next(c)}catch(_){s={error:_}}finally{try{M&&!M.done&&(v=w.return)&&v.call(w)}finally{if(s)throw s.error}}}})},h.prototype.error=function(c){var r=this;ca(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=c;for(var s=r.observers;s.length;)s.shift().error(c)}})},h.prototype.complete=function(){var c=this;ca(function(){if(c._throwIfClosed(),!c.isStopped){c.isStopped=!0;for(var r=c.observers;r.length;)r.shift().complete()}})},h.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(h.prototype,"observed",{get:function(){var c;return((c=this.observers)===null||c===void 0?void 0:c.length)>0},enumerable:!1,configurable:!0}),h.prototype._trySubscribe=function(c){return this._throwIfClosed(),u.prototype._trySubscribe.call(this,c)},h.prototype._subscribe=function(c){return this._throwIfClosed(),this._checkFinalizedStatuses(c),this._innerSubscribe(c)},h.prototype._innerSubscribe=function(c){var r=this,s=this,v=s.hasError,w=s.isStopped,M=s.observers;return v||w?Zr:(this.currentObservers=null,M.push(c),new pa(function(){r.currentObservers=null,Ya(M,c)}))},h.prototype._checkFinalizedStatuses=function(c){var r=this,s=r.hasError,v=r.thrownError,w=r.isStopped;s?c.error(v):w&&c.complete()},h.prototype.asObservable=function(){var c=new ri;return c.source=this,c},h.create=function(c,r){return new li(c,r)},h}(ri),li=function(u){function h(c,r){var s=u.call(this)||this;return s.destination=c,s.source=r,s}return la(h,u),h.prototype.next=function(c){var r,s;(s=(r=this.destination)===null||r===void 0?void 0:r.next)===null||s===void 0||s.call(r,c)},h.prototype.error=function(c){var r,s;(s=(r=this.destination)===null||r===void 0?void 0:r.error)===null||s===void 0||s.call(r,c)},h.prototype.complete=function(){var c,r;(r=(c=this.destination)===null||c===void 0?void 0:c.complete)===null||r===void 0||r.call(c)},h.prototype._subscribe=function(c){var r,s;return(s=(r=this.source)===null||r===void 0?void 0:r.subscribe(c))!==null&&s!==void 0?s:Zr},h}(oi);function Sl(u,h){for(var c=0;c<h.length;c++){var r=h[c];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(u,r.key,r)}}var si=!0,Ga=!1,Tl=function(){function u(r){(function(s,v){if(!(s instanceof v))throw new TypeError("Cannot call a class as a function")})(this,u),this.player=r,this.autoHideTimer=0,U.isMobile||(this.setAutoHideHandler=this.setAutoHide.bind(this),this.player.container.addEventListener("mousemove",this.setAutoHideHandler),this.player.container.addEventListener("click",this.setAutoHideHandler),this.player.on("play",this.setAutoHideHandler),this.player.on("pause",this.setAutoHideHandler)),this.initPlayButton(),this.initThumbnails(),this.initPlayedBar(),this.initFullButton(),this.initQualityButton(),this.initScreenshotButton(),this.player.options.subtitle&&typeof this.player.options.subtitle.url=="string"&&this.initSubtitleButton(),this.initHighlights(),this.initAirplayButton(),this.initChromecastButton(),U.isMobile||this.initVolumeButton()}var h,c;return h=u,(c=[{key:"initPlayButton",value:function(){var r=this;this.player.template.playButton.addEventListener("click",function(){r.player.toggle()}),this.player.template.mobilePlayButton.addEventListener("click",function(){r.player.toggle()}),U.isMobile?(this.player.template.videoWrap.addEventListener("click",function(){r.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){r.toggle()})):this.player.options.preventClickToggle||(this.player.template.videoWrap.addEventListener("click",function(){r.player.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){r.player.toggle()}))}},{key:"initHighlights",value:function(){var r=this;this.player.on("durationchange",function(){if(r.player.video.duration!==1&&r.player.video.duration!==1/0&&r.player.options.highlight){var s=r.player.template.playedBarWrap.querySelectorAll(".dplayer-highlight");[].slice.call(s,0).forEach(function(M){r.player.template.playedBarWrap.removeChild(M)});for(var v=0;v<r.player.options.highlight.length;v++)if(r.player.options.highlight[v].text&&r.player.options.highlight[v].time){var w=document.createElement("div");w.classList.add("dplayer-highlight"),w.style.left=r.player.options.highlight[v].time/r.player.video.duration*100+"%",w.innerHTML='<span class="dplayer-highlight-text">'+r.player.options.highlight[v].text+"</span>",r.player.template.playedBarWrap.insertBefore(w,r.player.template.playedBarTime)}}})}},{key:"initThumbnails",value:function(){var r=this;this.player.options.video.thumbnails&&(this.thumbnails=new vl({container:this.player.template.barPreview,barWidth:this.player.template.barWrap.offsetWidth,url:this.player.options.video.thumbnails,events:this.player.events}),this.player.on("loadedmetadata",function(){r.thumbnails.resize(160,r.player.video.videoHeight/r.player.video.videoWidth*160,r.player.template.barWrap.offsetWidth)}))}},{key:"initPlayedBar",value:function(){var r=this,s=function(w){var M=((w.clientX||w.changedTouches[0].clientX)-U.getBoundingClientRectViewLeft(r.player.template.playedBarWrap))/r.player.template.playedBarWrap.clientWidth;M=Math.max(M,0),M=Math.min(M,1),r.player.bar.set("played",M,"width"),r.player.template.ptime.innerHTML=U.secondToTime(M*r.player.video.duration)},v=function w(M){document.removeEventListener(U.nameMap.dragEnd,w),document.removeEventListener(U.nameMap.dragMove,s);var _=((M.clientX||M.changedTouches[0].clientX)-U.getBoundingClientRectViewLeft(r.player.template.playedBarWrap))/r.player.template.playedBarWrap.clientWidth;_=Math.max(_,0),_=Math.min(_,1),r.player.bar.set("played",_,"width"),r.player.seek(r.player.bar.get("played")*r.player.video.duration),r.player.timer.enable("progress")};this.player.template.playedBarWrap.addEventListener(U.nameMap.dragStart,function(){r.player.timer.disable("progress"),document.addEventListener(U.nameMap.dragMove,s),document.addEventListener(U.nameMap.dragEnd,v)}),this.player.template.playedBarWrap.addEventListener(U.nameMap.dragMove,function(w){if(r.player.video.duration){var M=r.player.template.playedBarWrap.getBoundingClientRect().left,_=(w.clientX||w.changedTouches[0].clientX)-M;if(_<0||_>r.player.template.playedBarWrap.offsetWidth)return;var J=r.player.video.duration*(_/r.player.template.playedBarWrap.offsetWidth);U.isMobile&&r.thumbnails&&r.thumbnails.show(),r.thumbnails&&r.thumbnails.move(_),r.player.template.playedBarTime.style.left="".concat(_-(J>=3600?25:20),"px"),r.player.template.playedBarTime.innerText=U.secondToTime(J),r.player.template.playedBarTime.classList.remove("hidden")}}),this.player.template.playedBarWrap.addEventListener(U.nameMap.dragEnd,function(){U.isMobile&&r.thumbnails&&r.thumbnails.hide()}),U.isMobile||(this.player.template.playedBarWrap.addEventListener("mouseenter",function(){r.player.video.duration&&(r.thumbnails&&r.thumbnails.show(),r.player.template.playedBarTime.classList.remove("hidden"))}),this.player.template.playedBarWrap.addEventListener("mouseleave",function(){r.player.video.duration&&(r.thumbnails&&r.thumbnails.hide(),r.player.template.playedBarTime.classList.add("hidden"))}))}},{key:"initFullButton",value:function(){var r=this;this.player.template.browserFullButton.addEventListener("click",function(){r.player.fullScreen.toggle("browser")}),this.player.template.webFullButton.addEventListener("click",function(){r.player.fullScreen.toggle("web")})}},{key:"initVolumeButton",value:function(){var r=this,s=function(w){var M=w||window.event,_=((M.clientX||M.changedTouches[0].clientX)-U.getBoundingClientRectViewLeft(r.player.template.volumeBarWrap)-5.5)/35;r.player.volume(_)},v=function w(){document.removeEventListener(U.nameMap.dragEnd,w),document.removeEventListener(U.nameMap.dragMove,s),r.player.template.volumeButton.classList.remove("dplayer-volume-active")};this.player.template.volumeBarWrapWrap.addEventListener("click",function(w){var M=w||window.event,_=((M.clientX||M.changedTouches[0].clientX)-U.getBoundingClientRectViewLeft(r.player.template.volumeBarWrap)-5.5)/35;r.player.volume(_)}),this.player.template.volumeBarWrapWrap.addEventListener(U.nameMap.dragStart,function(){document.addEventListener(U.nameMap.dragMove,s),document.addEventListener(U.nameMap.dragEnd,v),r.player.template.volumeButton.classList.add("dplayer-volume-active")}),this.player.template.volumeButtonIcon.addEventListener("click",function(){r.player.video.muted?(r.player.video.muted=!1,r.player.switchVolumeIcon(),r.player.bar.set("volume",r.player.volume(),"width")):(r.player.video.muted=!0,r.player.template.volumeIcon.innerHTML=ht.volumeOff,r.player.bar.set("volume",0,"width"))})}},{key:"initQualityButton",value:function(){var r=this;this.player.options.video.quality&&this.player.template.qualityList.addEventListener("click",function(s){s.target.classList.contains("dplayer-quality-item")&&r.player.switchQuality(s.target.dataset.index)})}},{key:"initScreenshotButton",value:function(){var r=this;this.player.options.screenshot&&this.player.template.camareButton.addEventListener("click",function(){var s,v=document.createElement("canvas");v.width=r.player.video.videoWidth,v.height=r.player.video.videoHeight,v.getContext("2d").drawImage(r.player.video,0,0,v.width,v.height),v.toBlob(function(w){s=URL.createObjectURL(w);var M=document.createElement("a");M.href=s,M.download="DPlayer.png",M.style.display="none",document.body.appendChild(M),M.click(),document.body.removeChild(M),URL.revokeObjectURL(s),r.player.events.trigger("screenshot",s)})})}},{key:"initAirplayButton",value:function(){this.player.options.airplay&&(window.WebKitPlaybackTargetAvailabilityEvent?this.player.video.addEventListener("webkitplaybacktargetavailabilitychanged",function(r){r.availability==="available"?this.template.airplayButton.disable=!1:this.template.airplayButton.disable=!0,this.template.airplayButton.addEventListener("click",function(){this.video.webkitShowPlaybackTargetPicker()}.bind(this))}.bind(this.player)):this.player.template.airplayButton.style.display="none")}},{key:"initChromecast",value:function(){var r=window.document.createElement("script");r.setAttribute("type","text/javascript"),r.setAttribute("src","https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"),window.document.body.appendChild(r),window.__onGCastApiAvailable=function(s){if(s){var v=new(tn=window.chrome.cast).SessionRequest(tn.media.DEFAULT_MEDIA_RECEIVER_APP_ID),w=new tn.ApiConfig(v,function(){},function(M){M===tn.ReceiverAvailability.AVAILABLE&&console.log("chromecast: ",M)});tn.initialize(w,function(){})}}}},{key:"initChromecastButton",value:function(){var r=this;if(this.player.options.chromecast){si&&(si=!1,this.initChromecast());var s=function(w,M){r.currentMedia=M},v=function(w){console.error("Error launching media",w)};this.player.template.chromecastButton.addEventListener("click",function(){var w;Ga?(Ga=!1,r.currentMedia.stop(),r.session.stop(),r.initChromecast()):(Ga=!0,w=new oi,tn.requestSession(function(M){var _,J,ve;r.session=M,w.next("CONNECTED"),_=r.player.options.video.url,J=new tn.media.MediaInfo(_),ve=new tn.media.LoadRequest(J),r.session?r.session.loadMedia(ve,s.bind(r,"loadMedia"),v).play():window.open(_)},function(M){M.code==="cancel"?(r.session=void 0,w.next("CANCEL")):console.error("Error selecting a cast device",M)}))})}}},{key:"initSubtitleButton",value:function(){var r=this;this.player.events.on("subtitle_show",function(){r.player.template.subtitleButton.dataset.balloon=r.player.tran("hide-subs"),r.player.template.subtitleButtonInner.style.opacity="",r.player.user.set("subtitle",1)}),this.player.events.on("subtitle_hide",function(){r.player.template.subtitleButton.dataset.balloon=r.player.tran("show-subs"),r.player.template.subtitleButtonInner.style.opacity="0.4",r.player.user.set("subtitle",0)}),this.player.template.subtitleButton.addEventListener("click",function(){r.player.subtitle.toggle()})}},{key:"setAutoHide",value:function(){var r=this;this.show(),clearTimeout(this.autoHideTimer),this.autoHideTimer=setTimeout(function(){!r.player.video.played.length||r.player.paused||r.disableAutoHide||r.hide()},3e3)}},{key:"show",value:function(){this.player.container.classList.remove("dplayer-hide-controller")}},{key:"hide",value:function(){this.player.container.classList.add("dplayer-hide-controller"),this.player.setting.hide(),this.player.comment&&this.player.comment.hide()}},{key:"isShow",value:function(){return!this.player.container.classList.contains("dplayer-hide-controller")}},{key:"toggle",value:function(){this.isShow()?this.hide():this.show()}},{key:"destroy",value:function(){U.isMobile||(this.player.container.removeEventListener("mousemove",this.setAutoHideHandler),this.player.container.removeEventListener("click",this.setAutoHideHandler)),clearTimeout(this.autoHideTimer)}}])&&Sl(h.prototype,c),Object.defineProperty(h,"prototype",{writable:!1}),u}();const Dl=Tl;function Ll(u,h){for(var c=0;c<h.length;c++){var r=h[c];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(u,r.key,r)}}var zl=function(){function u(r){var s=this;(function(J,ve){if(!(J instanceof ve))throw new TypeError("Cannot call a class as a function")})(this,u),this.player=r,this.player.template.mask.addEventListener("click",function(){s.hide()}),this.player.template.settingButton.addEventListener("click",function(){s.show()}),this.loop=this.player.options.loop,this.player.template.loopToggle.checked=this.loop,this.player.template.loop.addEventListener("click",function(){s.player.template.loopToggle.checked=!s.player.template.loopToggle.checked,s.player.template.loopToggle.checked?s.loop=!0:s.loop=!1,s.hide()}),this.showDanmaku=this.player.user.get("danmaku"),this.showDanmaku||this.player.danmaku&&this.player.danmaku.hide(),this.player.template.showDanmakuToggle.checked=this.showDanmaku,this.player.template.showDanmaku.addEventListener("click",function(){s.player.template.showDanmakuToggle.checked=!s.player.template.showDanmakuToggle.checked,s.player.template.showDanmakuToggle.checked?(s.showDanmaku=!0,s.player.danmaku.show()):(s.showDanmaku=!1,s.player.danmaku.hide()),s.player.user.set("danmaku",s.showDanmaku?1:0),s.hide()}),this.unlimitDanmaku=this.player.user.get("unlimited"),this.player.template.unlimitDanmakuToggle.checked=this.unlimitDanmaku,this.player.template.unlimitDanmaku.addEventListener("click",function(){s.player.template.unlimitDanmakuToggle.checked=!s.player.template.unlimitDanmakuToggle.checked,s.player.template.unlimitDanmakuToggle.checked?(s.unlimitDanmaku=!0,s.player.danmaku.unlimit(!0)):(s.unlimitDanmaku=!1,s.player.danmaku.unlimit(!1)),s.player.user.set("unlimited",s.unlimitDanmaku?1:0),s.hide()}),this.player.template.speed.addEventListener("click",function(){s.player.template.settingBox.classList.add("dplayer-setting-box-narrow"),s.player.template.settingBox.classList.add("dplayer-setting-box-speed")});for(var v=function(J){s.player.template.speedItem[J].addEventListener("click",function(){s.player.speed(s.player.template.speedItem[J].dataset.speed),s.hide()})},w=0;w<this.player.template.speedItem.length;w++)v(w);if(this.player.danmaku){this.player.on("danmaku_opacity",function(J){s.player.bar.set("danmaku",J,"width"),s.player.user.set("opacity",J)}),this.player.danmaku.opacity(this.player.user.get("opacity"));var M=function(J){var ve=J||window.event,Ne=((ve.clientX||ve.changedTouches[0].clientX)-U.getBoundingClientRectViewLeft(s.player.template.danmakuOpacityBarWrap))/130;Ne=Math.max(Ne,0),Ne=Math.min(Ne,1),s.player.danmaku.opacity(Ne)},_=function J(){document.removeEventListener(U.nameMap.dragEnd,J),document.removeEventListener(U.nameMap.dragMove,M),s.player.template.danmakuOpacityBox.classList.remove("dplayer-setting-danmaku-active")};this.player.template.danmakuOpacityBarWrapWrap.addEventListener("click",function(J){var ve=J||window.event,Ne=((ve.clientX||ve.changedTouches[0].clientX)-U.getBoundingClientRectViewLeft(s.player.template.danmakuOpacityBarWrap))/130;Ne=Math.max(Ne,0),Ne=Math.min(Ne,1),s.player.danmaku.opacity(Ne)}),this.player.template.danmakuOpacityBarWrapWrap.addEventListener(U.nameMap.dragStart,function(){document.addEventListener(U.nameMap.dragMove,M),document.addEventListener(U.nameMap.dragEnd,_),s.player.template.danmakuOpacityBox.classList.add("dplayer-setting-danmaku-active")})}}var h,c;return h=u,(c=[{key:"hide",value:function(){var r=this;this.player.template.settingBox.classList.remove("dplayer-setting-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),setTimeout(function(){r.player.template.settingBox.classList.remove("dplayer-setting-box-narrow"),r.player.template.settingBox.classList.remove("dplayer-setting-box-speed")},300),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.settingBox.classList.add("dplayer-setting-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}}])&&Ll(h.prototype,c),Object.defineProperty(h,"prototype",{writable:!1}),u}();const Nl=zl;function Ol(u,h){for(var c=0;c<h.length;c++){var r=h[c];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(u,r.key,r)}}var Ml=function(){function u(r){var s=this;(function(v,w){if(!(v instanceof w))throw new TypeError("Cannot call a class as a function")})(this,u),this.player=r,this.player.template.mask.addEventListener("click",function(){s.hide()}),this.player.template.commentButton.addEventListener("click",function(){s.show()}),this.player.template.commentSettingButton.addEventListener("click",function(){s.toggleSetting()}),this.player.template.commentColorSettingBox.addEventListener("click",function(){if(s.player.template.commentColorSettingBox.querySelector("input:checked+span")){var v=s.player.template.commentColorSettingBox.querySelector("input:checked").value;s.player.template.commentSettingFill.style.fill=v,s.player.template.commentInput.style.color=v,s.player.template.commentSendFill.style.fill=v}}),this.player.template.commentInput.addEventListener("click",function(){s.hideSetting()}),this.player.template.commentInput.addEventListener("keydown",function(v){(v||window.event).keyCode===13&&s.send()}),this.player.template.commentSendButton.addEventListener("click",function(){s.send()})}var h,c;return h=u,(c=[{key:"show",value:function(){this.player.controller.disableAutoHide=!0,this.player.template.controller.classList.add("dplayer-controller-comment"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.container.classList.add("dplayer-show-controller"),this.player.template.commentInput.focus()}},{key:"hide",value:function(){this.player.template.controller.classList.remove("dplayer-controller-comment"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.container.classList.remove("dplayer-show-controller"),this.player.controller.disableAutoHide=!1,this.hideSetting()}},{key:"showSetting",value:function(){this.player.template.commentSettingBox.classList.add("dplayer-comment-setting-open")}},{key:"hideSetting",value:function(){this.player.template.commentSettingBox.classList.remove("dplayer-comment-setting-open")}},{key:"toggleSetting",value:function(){this.player.template.commentSettingBox.classList.contains("dplayer-comment-setting-open")?this.hideSetting():this.showSetting()}},{key:"send",value:function(){var r=this;this.player.template.commentInput.blur(),this.player.template.commentInput.value.replace(/^\s+|\s+$/g,"")?this.player.danmaku.send({text:this.player.template.commentInput.value,color:U.color2Number(this.player.container.querySelector(".dplayer-comment-setting-color input:checked").value),type:parseInt(this.player.container.querySelector(".dplayer-comment-setting-type input:checked").value)},function(){r.player.template.commentInput.value="",r.hide()}):this.player.notice(this.player.tran("please-input-danmaku"))}}])&&Ol(h.prototype,c),Object.defineProperty(h,"prototype",{writable:!1}),u}();const Rl=Ml;function ql(u,h){for(var c=0;c<h.length;c++){var r=h[c];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(u,r.key,r)}}var Pl=function(){function u(r){(function(s,v){if(!(s instanceof v))throw new TypeError("Cannot call a class as a function")})(this,u),this.player=r,this.doHotKeyHandler=this.doHotKey.bind(this),this.cancelFullScreenHandler=this.cancelFullScreen.bind(this),this.player.options.hotkey&&document.addEventListener("keydown",this.doHotKeyHandler),document.addEventListener("keydown",this.cancelFullScreenHandler)}var h,c;return h=u,(c=[{key:"doHotKey",value:function(r){if(this.player.focus){var s=document.activeElement.tagName.toUpperCase(),v=document.activeElement.getAttribute("contenteditable");if(s!=="INPUT"&&s!=="TEXTAREA"&&v!==""&&v!=="true"){var w,M=r||window.event;switch(M.keyCode){case 32:M.preventDefault(),this.player.toggle();break;case 37:if(M.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime-5),this.player.controller.setAutoHide();break;case 39:if(M.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime+5),this.player.controller.setAutoHide();break;case 38:M.preventDefault(),w=this.player.volume()+.1,this.player.volume(w);break;case 40:M.preventDefault(),w=this.player.volume()-.1,this.player.volume(w)}}}}},{key:"cancelFullScreen",value:function(r){(r||window.event).keyCode===27&&this.player.fullScreen.isFullScreen("web")&&this.player.fullScreen.cancel("web")}},{key:"destroy",value:function(){this.player.options.hotkey&&document.removeEventListener("keydown",this.doHotKeyHandler),document.removeEventListener("keydown",this.cancelFullScreenHandler)}}])&&ql(h.prototype,c),Object.defineProperty(h,"prototype",{writable:!1}),u}();const Vl=Pl;function Fl(u,h){for(var c=0;c<h.length;c++){var r=h[c];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(u,r.key,r)}}var Wl=function(){function u(r){var s=this;(function(v,w){if(!(v instanceof w))throw new TypeError("Cannot call a class as a function")})(this,u),this.player=r,this.shown=!1,Array.prototype.slice.call(this.player.template.menuItem).forEach(function(v,w){s.player.options.contextmenu[w].click&&v.addEventListener("click",function(){s.player.options.contextmenu[w].click(s.player),s.hide()})}),this.contextmenuHandler=function(v){if(s.shown)s.hide();else{var w=v||window.event;w.preventDefault();var M=s.player.container.getBoundingClientRect();s.show(w.clientX-M.left,w.clientY-M.top),s.player.template.mask.addEventListener("click",function(){s.hide()})}},this.player.container.addEventListener("contextmenu",this.contextmenuHandler)}var h,c;return h=u,(c=[{key:"show",value:function(r,s){this.player.template.menu.classList.add("dplayer-menu-show");var v=this.player.container.getBoundingClientRect();r+this.player.template.menu.offsetWidth>=v.width?(this.player.template.menu.style.right=v.width-r+"px",this.player.template.menu.style.left="initial"):(this.player.template.menu.style.left=r+"px",this.player.template.menu.style.right="initial"),s+this.player.template.menu.offsetHeight>=v.height?(this.player.template.menu.style.bottom=v.height-s+"px",this.player.template.menu.style.top="initial"):(this.player.template.menu.style.top=s+"px",this.player.template.menu.style.bottom="initial"),this.player.template.mask.classList.add("dplayer-mask-show"),this.shown=!0,this.player.events.trigger("contextmenu_show")}},{key:"hide",value:function(){this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.template.menu.classList.remove("dplayer-menu-show"),this.shown=!1,this.player.events.trigger("contextmenu_hide")}},{key:"destroy",value:function(){this.player.container.removeEventListener("contextmenu",this.contextmenuHandler)}}])&&Fl(h.prototype,c),Object.defineProperty(h,"prototype",{writable:!1}),u}();const _l=Wl;function Ql(u,h){for(var c=0;c<h.length;c++){var r=h[c];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(u,r.key,r)}}var Ul=function(){function u(r){var s=this;(function(v,w){if(!(v instanceof w))throw new TypeError("Cannot call a class as a function")})(this,u),this.container=r.template.infoPanel,this.template=r.template,this.video=r.video,this.player=r,this.template.infoPanelClose.addEventListener("click",function(){s.hide()})}var h,c;return h=u,(c=[{key:"show",value:function(){this.beginTime=Date.now(),this.update(),this.player.timer.enable("info"),this.player.timer.enable("fps"),this.container.classList.remove("dplayer-info-panel-hide")}},{key:"hide",value:function(){this.player.timer.disable("info"),this.player.timer.disable("fps"),this.container.classList.add("dplayer-info-panel-hide")}},{key:"triggle",value:function(){this.container.classList.contains("dplayer-info-panel-hide")?this.show():this.hide()}},{key:"update",value:function(){this.template.infoVersion.innerHTML="v".concat("1.27.0"," ").concat("a0424ca"),this.template.infoType.innerHTML=this.player.type,this.template.infoUrl.innerHTML=this.player.options.video.url,this.template.infoResolution.innerHTML="".concat(this.player.video.videoWidth," x ").concat(this.player.video.videoHeight),this.template.infoDuration.innerHTML=this.player.video.duration,this.player.options.danmaku&&(this.template.infoDanmakuId.innerHTML=this.player.options.danmaku.id,this.template.infoDanmakuApi.innerHTML=this.player.options.danmaku.api,this.template.infoDanmakuAmount.innerHTML=this.player.danmaku.dan.length)}},{key:"fps",value:function(r){this.template.infoFPS.innerHTML="".concat(r.toFixed(1))}}])&&Ql(h.prototype,c),Object.defineProperty(h,"prototype",{writable:!1}),u}();const Hl=Ul;var jl=i(1568),$l=i.n(jl);function di(u,h){var c=Object.keys(u);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(u);h&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(u,s).enumerable})),c.push.apply(c,r)}return c}function Yl(u,h,c){return h in u?Object.defineProperty(u,h,{value:c,enumerable:!0,configurable:!0,writable:!0}):u[h]=c,u}function pi(u,h){for(var c=0;c<h.length;c++){var r=h[c];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(u,r.key,r)}}var ci=0,In=[],Kl=function(){function u(s){var v=this;(function(w,M){if(!(w instanceof M))throw new TypeError("Cannot call a class as a function")})(this,u),this.options=function(w){var M={container:w.element||document.getElementsByClassName("dplayer")[0],live:!1,autoplay:!1,theme:"#b7daff",loop:!1,lang:(navigator.language||navigator.browserLanguage).toLowerCase(),screenshot:!1,airplay:!0,chromecast:!1,hotkey:!0,preload:"metadata",volume:.7,playbackSpeed:[.5,.75,1,1.25,1.5,2],apiBackend:rt,video:{},contextmenu:[],mutex:!0,pluginOptions:{hls:{},flv:{},dash:{},webtorrent:{}},preventClickToggle:!1};for(var _ in M)M.hasOwnProperty(_)&&!w.hasOwnProperty(_)&&(w[_]=M[_]);return w.video&&!w.video.type&&(w.video.type="auto"),tt(w.danmaku)==="object"&&w.danmaku&&!w.danmaku.user&&(w.danmaku.user="DIYgod"),w.subtitle&&(!w.subtitle.type&&(w.subtitle.type="webvtt"),!w.subtitle.fontSize&&(w.subtitle.fontSize="20px"),!w.subtitle.bottom&&(w.subtitle.bottom="40px"),!w.subtitle.color&&(w.subtitle.color="#fff")),w.video.quality&&(w.video.url=w.video.quality[w.video.defaultQuality].url),w.lang&&(w.lang=w.lang.toLowerCase()),w.contextmenu=w.contextmenu.concat([{key:"video-info",click:function(J){J.infoPanel.triggle()}},{key:"about-author",link:"https://diygod.me"},{text:"DPlayer v".concat("1.27.0"),link:"https://github.com/MoePlayer/DPlayer"}]),w}(function(w){for(var M=1;M<arguments.length;M++){var _=arguments[M]!=null?arguments[M]:{};M%2?di(Object(_),!0).forEach(function(J){Yl(w,J,_[J])}):Object.getOwnPropertyDescriptors?Object.defineProperties(w,Object.getOwnPropertyDescriptors(_)):di(Object(_)).forEach(function(J){Object.defineProperty(w,J,Object.getOwnPropertyDescriptor(_,J))})}return w}({preload:s.video.type==="webtorrent"?"none":"metadata"},s)),this.options.video.quality&&(this.qualityIndex=this.options.video.defaultQuality,this.quality=this.options.video.quality[this.options.video.defaultQuality]),this.tran=new Bt(this.options.lang).tran,this.events=new j,this.user=new de(this),this.container=this.options.container,this.container.classList.add("dplayer"),this.options.danmaku||this.container.classList.add("dplayer-no-danmaku"),this.options.live?this.container.classList.add("dplayer-live"):this.container.classList.remove("dplayer-live"),U.isMobile&&this.container.classList.add("dplayer-mobile"),this.arrow=this.container.offsetWidth<=500,this.arrow&&this.container.classList.add("dplayer-arrow"),this.options.subtitle&&Array.isArray(this.options.subtitle.url)&&(this.options.subtitle.url.push({subtitle:"",lang:"off"}),this.options.subtitle.defaultSubtitle&&(typeof this.options.subtitle.defaultSubtitle=="string"?this.options.subtitle.index=this.options.subtitle.url.findIndex(function(w){return w.lang===v.options.subtitle.defaultSubtitle||w.name===v.options.subtitle.defaultSubtitle}):typeof this.options.subtitle.defaultSubtitle=="number"&&(this.options.subtitle.index=this.options.subtitle.defaultSubtitle)),(this.options.subtitle.index===-1||!this.options.subtitle.index||this.options.subtitle.index>this.options.subtitle.url.length-1)&&(this.options.subtitle.index=this.options.subtitle.url.findIndex(function(w){return w.lang===v.options.lang})),this.options.subtitle.index===-1&&(this.options.subtitle.index=this.options.subtitle.url.length-1)),this.template=new x({container:this.container,options:this.options,index:ci,tran:this.tran}),this.video=this.template.video,this.bar=new ul(this.template),this.bezel=new yl(this.template.bezel),this.fullScreen=new re(this),this.controller=new Dl(this),this.options.danmaku&&(this.danmaku=new R({player:this,container:this.template.danmaku,opacity:this.user.get("opacity"),callback:function(){setTimeout(function(){v.template.danmakuLoading.style.display="none",v.options.autoplay&&v.play()},0)},error:function(w){v.notice(w)},apiBackend:this.options.apiBackend,borderColor:this.options.theme,height:this.arrow?24:30,time:function(){return v.video.currentTime},unlimited:this.user.get("unlimited"),api:{id:this.options.danmaku.id,address:this.options.danmaku.api,token:this.options.danmaku.token,maximum:this.options.danmaku.maximum,addition:this.options.danmaku.addition,user:this.options.danmaku.user,speedRate:this.options.danmaku.speedRate},events:this.events,tran:function(w){return v.tran(w)}}),this.comment=new Rl(this)),this.setting=new Nl(this),this.plugins={},this.docClickFun=function(){v.focus=!1},this.containerClickFun=function(){v.focus=!0},document.addEventListener("click",this.docClickFun,!0),this.container.addEventListener("click",this.containerClickFun,!0),this.paused=!0,this.timer=new Al(this),this.hotkey=new Vl(this),this.contextmenu=new _l(this),this.initVideo(this.video,this.quality&&this.quality.type||this.options.video.type),this.infoPanel=new Hl(this),!this.danmaku&&this.options.autoplay&&this.play(),ci++,In.push(this)}var h,c,r;return h=u,c=[{key:"seek",value:function(s){s=Math.max(s,0),this.video.duration&&(s=Math.min(s,this.video.duration)),this.video.currentTime<s?this.notice("".concat(this.tran("ff").replace("%s",(s-this.video.currentTime).toFixed(0)))):this.video.currentTime>s&&this.notice("".concat(this.tran("rew").replace("%s",(this.video.currentTime-s).toFixed(0)))),this.video.currentTime=s,this.danmaku&&this.danmaku.seek(),this.bar.set("played",s/this.video.duration,"width"),this.template.ptime.innerHTML=U.secondToTime(s)}},{key:"play",value:function(s){var v=this;if(this.paused=!1,this.video.paused&&!U.isMobile&&this.bezel.switch(ht.play),this.template.playButton.innerHTML=ht.pause,this.template.mobilePlayButton.innerHTML=ht.pause,s||xe.resolve(this.video.play()).catch(function(){v.pause()}).then(function(){}),this.timer.enable("loading"),this.container.classList.remove("dplayer-paused"),this.container.classList.add("dplayer-playing"),this.danmaku&&this.danmaku.play(),this.options.mutex)for(var w=0;w<In.length;w++)this!==In[w]&&In[w].pause()}},{key:"pause",value:function(s){this.paused=!0,this.container.classList.remove("dplayer-loading"),this.video.paused||U.isMobile||this.bezel.switch(ht.pause),this.template.playButton.innerHTML=ht.play,this.template.mobilePlayButton.innerHTML=ht.play,s||this.video.pause(),this.timer.disable("loading"),this.container.classList.remove("dplayer-playing"),this.container.classList.add("dplayer-paused"),this.danmaku&&this.danmaku.pause()}},{key:"switchVolumeIcon",value:function(){this.volume()>=.95?this.template.volumeIcon.innerHTML=ht.volumeUp:this.volume()>0?this.template.volumeIcon.innerHTML=ht.volumeDown:this.template.volumeIcon.innerHTML=ht.volumeOff}},{key:"volume",value:function(s,v,w){if(s=parseFloat(s),!isNaN(s)){s=Math.max(s,0),s=Math.min(s,1),this.bar.set("volume",s,"width");var M="".concat((100*s).toFixed(0),"%");this.template.volumeBarWrapWrap.dataset.balloon=M,v||this.user.set("volume",s),w||this.notice("".concat(this.tran("volume")," ").concat((100*s).toFixed(0),"%")),this.video.volume=s,this.video.muted&&(this.video.muted=!1),this.switchVolumeIcon()}return this.video.volume}},{key:"toggle",value:function(){this.video.paused?this.play():this.pause()}},{key:"on",value:function(s,v){this.events.on(s,v)}},{key:"switchVideo",value:function(s,v){this.pause(),this.video.poster=s.pic?s.pic:"",this.video.src=s.url,this.initMSE(this.video,s.type||"auto"),v&&(this.template.danmakuLoading.style.display="block",this.bar.set("played",0,"width"),this.bar.set("loaded",0,"width"),this.template.ptime.innerHTML="00:00",this.template.danmaku.innerHTML="",this.danmaku&&this.danmaku.reload({id:v.id,address:v.api,token:v.token,maximum:v.maximum,addition:v.addition,user:v.user}))}},{key:"initMSE",value:function(s,v){var w=this;if(this.type=v,this.options.video.customType&&this.options.video.customType[v])Object.prototype.toString.call(this.options.video.customType[v])==="[object Function]"?this.options.video.customType[v](this.video,this):console.error("Illegal customType: ".concat(v));else switch(this.type==="auto"&&(/m3u8(#|\?|$)/i.exec(s.src)?this.type="hls":/.flv(#|\?|$)/i.exec(s.src)?this.type="flv":/.mpd(#|\?|$)/i.exec(s.src)?this.type="dash":this.type="normal"),this.type==="hls"&&(s.canPlayType("application/x-mpegURL")||s.canPlayType("application/vnd.apple.mpegURL"))&&(this.type="normal"),this.type){case"hls":if(window.Hls)if(window.Hls.isSupported()){var M=this.options.pluginOptions.hls,_=new window.Hls(M);this.plugins.hls=_,_.loadSource(s.src),_.attachMedia(s),this.events.on("destroy",function(){_.destroy(),delete w.plugins.hls})}else this.notice("Error: Hls is not supported.");else this.notice("Error: Can't find Hls.");break;case"flv":if(window.flvjs)if(window.flvjs.isSupported()){var J=window.flvjs.createPlayer(Object.assign(this.options.pluginOptions.flv.mediaDataSource||{},{type:"flv",url:s.src}),this.options.pluginOptions.flv.config);this.plugins.flvjs=J,J.attachMediaElement(s),J.load(),this.events.on("destroy",function(){J.unload(),J.detachMediaElement(),J.destroy(),delete w.plugins.flvjs})}else this.notice("Error: flvjs is not supported.");else this.notice("Error: Can't find flvjs.");break;case"dash":if(window.dashjs){var ve=window.dashjs.MediaPlayer().create().initialize(s,s.src,!1),Ne=this.options.pluginOptions.dash;ve.updateSettings(Ne),this.plugins.dash=ve,this.events.on("destroy",function(){window.dashjs.MediaPlayer().reset(),delete w.plugins.dash})}else this.notice("Error: Can't find dashjs.");break;case"webtorrent":if(window.WebTorrent)if(window.WebTorrent.WEBRTC_SUPPORT){this.container.classList.add("dplayer-loading");var Vt=this.options.pluginOptions.webtorrent,vt=new window.WebTorrent(Vt);this.plugins.webtorrent=vt;var nn=s.src;s.src="",s.preload="metadata",s.addEventListener("durationchange",function(){return w.container.classList.remove("dplayer-loading")},{once:!0}),vt.add(nn,function(fe){fe.files.find(function(Ee){return Ee.name.endsWith(".mp4")}).renderTo(w.video,{autoplay:w.options.autoplay,controls:!1})}),this.events.on("destroy",function(){vt.remove(nn),vt.destroy(),delete w.plugins.webtorrent})}else this.notice("Error: Webtorrent is not supported.");else this.notice("Error: Can't find Webtorrent.")}}},{key:"initVideo",value:function(s,v){var w=this;this.initMSE(s,v),this.on("durationchange",function(){s.duration!==1&&s.duration!==1/0&&(w.template.dtime.innerHTML=U.secondToTime(s.duration))}),this.on("progress",function(){var J=s.buffered.length?s.buffered.end(s.buffered.length-1)/s.duration:0;w.bar.set("loaded",J,"width")}),this.on("error",function(){w.video.error&&w.tran&&w.notice&&w.type!=="webtorrent"&&w.notice(w.tran("video-failed"),-1)}),this.on("ended",function(){w.bar.set("played",1,"width"),w.setting.loop?(w.seek(0),w.play()):w.pause(),w.danmaku&&(w.danmaku.danIndex=0)}),this.on("play",function(){w.paused&&w.play(!0)}),this.on("pause",function(){w.paused||w.pause(!0)}),this.on("timeupdate",function(){w.bar.set("played",w.video.currentTime/w.video.duration,"width");var J=U.secondToTime(w.video.currentTime);w.template.ptime.innerHTML!==J&&(w.template.ptime.innerHTML=J)});for(var M=function(J){s.addEventListener(w.events.videoEvents[J],function(){w.events.trigger(w.events.videoEvents[J])})},_=0;_<this.events.videoEvents.length;_++)M(_);this.volume(this.user.get("volume"),!0,!0),this.options.subtitle&&(this.subtitle=new It(this.template.subtitle,this.video,this.options.subtitle,this.events),Array.isArray(this.options.subtitle.url)&&(this.subtitles=new Qt(this)),this.user.get("subtitle")||this.subtitle.hide())}},{key:"switchQuality",value:function(s){var v=this;if(s=typeof s=="string"?parseInt(s):s,this.qualityIndex!==s&&!this.switchingQuality){this.prevIndex=this.qualityIndex,this.qualityIndex=s,this.switchingQuality=!0,this.quality=this.options.video.quality[s],this.template.qualityButton.innerHTML=this.quality.name;var w=this.video.paused;this.video.pause();var M=$l()({current:!1,pic:null,screenshot:this.options.screenshot,preload:"auto",url:this.quality.url,subtitle:this.options.subtitle}),_=new DOMParser().parseFromString(M,"text/html").body.firstChild;this.template.videoWrap.insertBefore(_,this.template.videoWrap.getElementsByTagName("div")[0]),this.prevVideo=this.video,this.video=_,this.initVideo(this.video,this.quality.type||this.options.video.type),this.seek(this.prevVideo.currentTime),this.notice("".concat(this.tran("switching-quality").replace("%q",this.quality.name)),-1),this.events.trigger("quality_start",this.quality),this.on("canplay",function(){if(v.prevVideo){if(v.video.currentTime!==v.prevVideo.currentTime)return void v.seek(v.prevVideo.currentTime);v.template.videoWrap.removeChild(v.prevVideo),v.video.classList.add("dplayer-video-current"),w||v.video.play(),v.prevVideo=null,v.notice("".concat(v.tran("switched-quality").replace("%q",v.quality.name))),v.switchingQuality=!1,v.events.trigger("quality_end")}}),this.on("error",function(){v.video.error&&v.prevVideo&&(v.template.videoWrap.removeChild(v.video),v.video=v.prevVideo,w||v.video.play(),v.qualityIndex=v.prevIndex,v.quality=v.options.video.quality[v.qualityIndex],v.noticeTime=setTimeout(function(){v.template.notice.style.opacity=0,v.events.trigger("notice_hide")},3e3),v.prevVideo=null,v.switchingQuality=!1)})}}},{key:"notice",value:function(s){var v,w,M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2e3,_=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.8,J=x.NewNotice(s,_);this.template.noticeList.appendChild(J),this.events.trigger("notice_show",J),M>0&&setTimeout((v=J,w=this,function(){v.addEventListener("animationend",function(){w.template.noticeList.removeChild(v)}),v.classList.add("remove-notice"),w.events.trigger("notice_hide")}),M)}},{key:"resize",value:function(){this.danmaku&&this.danmaku.resize(),this.controller.thumbnails&&this.controller.thumbnails.resize(160,this.video.videoHeight/this.video.videoWidth*160,this.template.barWrap.offsetWidth),this.events.trigger("resize")}},{key:"speed",value:function(s){this.video.playbackRate=s}},{key:"destroy",value:function(){In.splice(In.indexOf(this),1),this.pause(),document.removeEventListener("click",this.docClickFun,!0),this.container.removeEventListener("click",this.containerClickFun,!0),this.fullScreen.destroy(),this.hotkey.destroy(),this.contextmenu.destroy(),this.controller.destroy(),this.timer.destroy(),this.video.src="",this.container.innerHTML="",this.events.trigger("destroy")}}],r=[{key:"version",get:function(){return"1.27.0"}}],c&&pi(h.prototype,c),r&&pi(h,r),Object.defineProperty(h,"prototype",{writable:!1}),u}();const Xl=Kl;console.log(`
`.concat(" %c DPlayer v","1.27.0"," ").concat("a0424ca"," %c https://dplayer.diygod.dev ",`
`,`
`),"color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;");const Gl=Xl})(),o.default})())}(Cr)),Cr.exports}var ou=iu();const lu=Qr(ou),{sort:su}=Fr,du=(e,t)=>e.time-t.time,pu=xn({props:{width:{type:Number,default:()=>960},height:{type:Number,default:()=>540}},setup(e,t){return{player:pn(null)}},computed:{video(){return this.player?.video??null}},methods:{setVideo(e){this.video.src=e},readDanmaku(e){const{danmaku:t}=this.player;t.dan=su(e,du),t.seek()},seekDanmaku(){this.player.danmaku.seek()},play(){this.player.play()},pause(){this.player.pause()},playpause(){this.player.toggle()},volume(e){return this.player.volume(e)},relativeVolume(e){return this.player.volume(this.video.volume+e)},relativeSeek(e){this.player.seek(this.video.currentTime+e)}},mounted(){const e=this,{container:t}=e.$refs,n=e.player=new lu({container:t,volume:1,hotkey:!1,screenshot:!1,video:{},danmaku:{api:"api/",id:"0"},apiBackend:{send(a){a.error()},read(a){a.success([])}}});e.video.volume=1,e.video.crossOrigin=null,n.danmaku.opacity(.35)},beforeUnmount(){this.player.destroy(),this.player=null},render(){const e=this,{$slots:t,width:n,height:a}=e;return V("div",{class:"player-container player-force-show-controls player-hide-layers",style:{"--dplayer-width":n===0?"100%":n+"px","--dplayer-height":a+"px"}},[V("div",{ref:"container",class:"dplayer"}),t.default?.()])}}),{isArray:kr}=Array;function*cu(e,t=0){const n={__proto__:null,1:"right",5:"top",4:"bottom"};for(const a of e){let i=a.p.split(",");yield{time:+i[0]+t,type:n[parseInt(i[1])]??0,color:parseInt(i[2]),author:i[3],text:a.m}}}function*uu(e,t){const n=/^\[([^\[\]]+)\]/;for(const a of e){const i=String(a.author).match(n);t(i?.[1],a)&&(yield a)}}function*hu(e,t=3.5){const{trunc:n}=Math,a=[];for(const i of e){const o=n(i.time);(a[o]??=[]).push(i)}for(const i of a)if(i!=null)if(i.length<t)yield*i;else{let o=0,l=n(i.length/t)||1;for(;o<i.length;o+=l)yield i[o]}}const fu=e=>{let t=e.title||(e.file?.name??"").replace(/\.[^.]+$/,"");const n=Ir({name:t,list:e.list,index:e.index,loading:!1}),a=async()=>{try{n.loading=!0;const l=await Lc(n.name,e.file);kr(l.matches)&&(e.list=n.list=l.matches),n.index=l.isMatched?0:-1}catch(l){throw Wt.error(l.message),l}finally{n.loading=!1}};let i,o;yt.confirm({title:"将视频关联到弹幕库",width:600,loading:!0,closable:!0,render(){return V(Tr,{padding:0,"dis-hover":!0},{title:()=>V(Po,{modelValue:n.name,"onUpdate:modelValue"(l){n.name=l}},{append:()=>V(Ke,{type:"primary",loading:n.loading,onClick:a},()=>"获取")}),default:()=>V("div",{class:"ivu-scroll-wrapper",style:"touch-action: none; height: 60vh"},[V("div",{class:"ivu-scroll-container",style:"height: 100%"},[V("div",{class:"ivu-scroll-content"},[V(za,{onOnClick(l){n.index=l}},()=>[V(At,{name:-2,selected:n.index===-2},{default:()=>V("div",{class:"ivu-input-wrapper ivu-input-wrapper-default ivu-input-type",style:"width: 300px"},[V("input",{ref(l){i=l},type:"text",class:"ivu-input ivu-input-default",placeholder:"手动载入弹幕",onPaste(l){n.index=-2}})]),extra:()=>V("div",{class:"ivu-input-wrapper ivu-input-wrapper-default ivu-input-type",style:"width: 100px"},[V("input",{ref(l){o=l},type:"text",class:"ivu-input ivu-input-default",placeholder:"offset"})])}),Array.from(n.list,(l,f)=>V(At,{name:f,title:`[${Dc[l.type]??l.type}]${l.animeTitle}`,label:l.episodeTitle,selected:f===n.index},{extra:()=>V("a",{href:sl(l.episodeId),target:"_blank"},["详细"])}))])])])])})},async onOk(){try{const{index:l}=n;let f;if(l===-2){const p=JSON.parse(i.value);kr(p)?f=p:kr(p.comments)&&(f=p.comments)}else if(l>=0){const p=n.list[l];p!=null&&(f=await zc(p.episodeId))}if(f==null){Wt.warning("未选中");return}e.index=l,e.loadDanmaku(f,+o.value||0)}catch(l){throw Wt.error("弹幕加载失败"),l}finally{yt.remove()}}})},Au=xn({name:"ddplay-api",props:{file:{type:Blob},title:{type:String,default:""}},setup(e){const t=Xe(),n=t.proxy;Mo(()=>[e.file,e.title],(i,o)=>{n.list=[],n.index=-1,n.$emit("danmaku",n.danmaku=[]),a.value=""});const a=pn("");return{list:[],index:-1,danmaku:[],platforms:a}},methods:{loadDanmaku(e,t=0){const n=this,a={"!":0};let i=cu(e,t);i=uu(i,(f,p)=>(f??="!",f==="Gamer"&&(f="#"+f),a[f]=+(a[f]??0)+1,f[0]!=="#")),i=hu(i);const o=Array.from(i),l=Object.entries(a).sort((f,p)=>p[1]-f[1]).map(([f,p])=>`${f}[${p}]`).join(",");n.platforms=`(${l})`,n.$emit("danmaku",n.danmaku=o),Wt.success(`加载了 ${o.length} 条弹幕 ${n.platforms}`)},handleMatch(){if(typeof Oo!="function"){Wt.error("缺少 GM_xmlhttpRequest");return}this.title||this.file!=null||Wt.warning("未选择文件"),fu(this)}},render(e,t){const n=this;return V(At,{title:`弹弹Play API[${n.danmaku.length}] ${n.platforms}`},t[226]??={extra:()=>V(Jn,null,t[227]??=()=>[V(Ke,{onClick:n.handleMatch},t[228]??=()=>"加载弹幕")])})}}),Br="Media Player",{toFixed:mu}=ds,{startsWith:yu}=Vr,{from:Da}=Array,{findIndex:cl}=Fr,gu=ss?"hover":"click",Gn=Da(function*(e){for(;e<100;e+=1)yield e;for(;e<300;e+=5)yield e;for(;e<=500;e+=10)yield e}(50),e=>e/100),bu=No(function*(){for(const e of[.5,.75,1,2,3,4,5])yield[cl(Gn,t=>t===e),`${e}×`]}()),xu=xn({name:Br,setup(e){const t={size:1,visiblePause:!1};try{Object.assign(t,JSON.parse(localStorage.getItem("player-options")))}catch{}const{abort:n,signal:a}=Zo();return Ro(n),{signal:a,playerOptions:t,sizes:["960*0","960*540","1280*720"],relativeSeeks:[-95,-10,-5,{value:-1/30,slot:"-1帧"},{value:1/30,slot:"1帧"},5,10,85],imageType:"image/png",viewer:null,keyboard:new dc(Dt,a),playList:pn(null),player:pn(null)}},data(){const{sizes:e,playerOptions:t}=this;return{extra:!1,size:e[t.size]??e[1],list:[],file:null,title:null,preservesPitch:!0,speedIndex:cl(Gn,n=>n===1),playbackRate:1}},watch:{title:{handler(e){e?(Ai(`${e} - ${Br}`),tr!=null&&(tr.metadata=new MediaMetadata({title:e})),setTimeout(Wt.message,0,"info","加载: "+e)):Ai(Br)},immediate:!0,flush:"sync"},preservesPitch(e){this.player.video.preservesPitch=e},speedIndex(e){this.player.video.playbackRate=+Gn[e]}},methods:{options(){const e=this,{sizes:t}=e,n=Ir(e.playerOptions),a=Ir({loading:!1,error:!1});yt.confirm({title:"设置",width:600,render(){return V("div",null,[V(za,null,()=>[V(At,{title:"默认尺寸"},{extra:()=>V(gi,{type:"button",modelValue:n.size,"onUpdate:modelValue"(i){n.size=i}},()=>Da(t,(i,o)=>V(bi,{label:o},()=>i)))}),V(At,{title:"页面不可见时暂停"},{extra:()=>V(Vi,{modelValue:n.visiblePause,"onUpdate:modelValue"(i){n.visiblePause=i}})}),V(At,{title:"油猴脚本"},{extra:()=>V(Jn,null,()=>[Yn==null?null:V(Ke,{type:a.error?"error":"default",loading:a.loading,async onClick(){try{a.loading=!0,a.error=!1;const i=await qc(),o=URL.createObjectURL(new Blob([i],{type:"text/plain"}));nr(o)}catch(i){throw a.error=!0,i}finally{a.loading=!1}}},()=>Ta),V(Ke,{onClick(){const i=Rc(),o=URL.createObjectURL(new Blob([i],{type:"text/plain"}));nr(o)}},()=>"GM_fetch")])}),V(At,{title:"web+player: 协议处理器"},{extra:()=>V(Ke,{type:"button",onClick(){const i=new URL(location.pathname,location.href).href;navigator.registerProtocolHandler("web+player",`${i}#!%s`)}},()=>"注册")})])])},onOk(){localStorage.setItem("player-options",JSON.stringify(e.playerOptions))}})},handleChange(e){this.list=e},async loadVideoAndPlay(e,t){e instanceof Blob?await this.loadVideoFromFile(e):await this.loadVideoFromUrl(e,t),this.player.play()},$_loadVideo(e){const t=this,{player:n}=t,{video:a}=n;return URL.revokeObjectURL(a.src),a.src=e,t.player.video.playbackRate=+t.playbackRate,fi(a,"canplay")},loadVideoFromUrl(e,t){const n=this;if(yu(e,"web+player:")){const o=new URL(e).searchParams;e=o.get("url"),t=o.get("title")}e=String(e),t??="";let a=n.$_loadVideo(e,t);return bo({title:t,url:e}),n.title=t,n.file=null,/^https?:/.test(e)&&Yn!=null&&(a=a.catch(n.loadVideoBackupGmxhr)),n.canplay=a,a},loadVideoFromFile(e){const t=this;let n=URL.createObjectURL(e),a=(e.name??"").replace(/\.[^.]+$/,"");const i=t.$_loadVideo(n,a),o={title:a};return(t.file==null?bo:Rr)(o),t.title=a,t.file=e,t.canplay=i,i},loadVideoBackupGmxhr(e){if(Yn==null)return;const{title:t,player:n}=this,a=n.player,i=e?.target??n.video,{src:o,error:l}=i;l!=null&&console.warn(l,l.code,l.message),yt.confirm({title:"视频加载失败",content:o+"<br>要使用 GM_xmlhttpRequest 吗？",onOk(){Yn({url:o,responseType:"blob",onload(f){vm.$_loadVideo(URL.createObjectURL(f.response),t).then(()=>{a.notice("使用 GM_xmlhttpRequest 加载成功",void 0,void 0,"gmxhr")})},onerror({error:f}){a.notice("使用 GM_xmlhttpRequest 加载失败: "+f,void 0,void 0,"gmxhr")},onprogress({loaded:f,total:p,lengthComputable:m}){a.notice(m?`${ar(f)}/${ar(p)}(${mu(100*f/p,2)}%)`:`${ar(f)}/unknow`,0,void 0,"gmxhr")}})}})},prev(){this.playList.prev()},next(){this.playList.next()},handleDanmaku(e){this.player.readDanmaku(e)},handleRateChange(e){this.playbackRate=this.player.video.playbackRate},relativeSeek(e){this.player.relativeSeek(e)},relativeVolume(e){this.player.relativeVolume(e)},playpause(){this.player.playpause()},async retry(){const{video:e}=this.player;if(e==null)return;const{src:t,currentTime:n,paused:a}=e;setTimeout(()=>{e.src=t},0),await fi(e,"loadedmetadata"),e.currentTime=n,a||e.play()},captureImage(){const{video:e}=this.player;if(e.videoWidth===0||e.videoHeight===0){Wt.warning("没有视频");return}os(e,this.imageType).then(t=>{const{image:n}=this.$refs;URL.revokeObjectURL(n.src),n.src=URL.createObjectURL(t),n.dataset.filename=ls(e.currentTime,"-")+".png",Wt.info("截图成功")},t=>{throw Wt.error("截图失败"),t})},saveImage(){const{image:e}=this.$refs,{src:t}=e;t&&nr(t,e.dataset.filename)},showImage(){const e=this,t=new Xo(e.$refs.image,{hidden(){t.destroy(),e.viewer=null}});e.viewer=t,t.show()}},mounted(){const e=this,{signal:t}=e,n=l=>{let f=l!=null?uc(l):cc();try{f==null&&(f=hc())}finally{if(f==null){e.title="";return}const{title:p,url:m}=f;m!=null?(e.$refs.input.currentValue=m,e.$_loadVideo(m,p),e.title=p):(Rr(null),e.title="")}};is(()=>{De(window,"popstate",n,{capture:!0,signal:t}),n()});const{keyboard:a}=e;let i=1;a.set(" ",null,e.playpause),a.set("ArrowUp",()=>e.relativeVolume(.1)),a.set("ArrowDown",()=>e.relativeVolume(-.1)),a.set("PageUp",e.prev),a.set("PageDown",e.next),a.set("ArrowLeft",null,()=>e.relativeSeek(-5)),a.set("ArrowRight",(l,f)=>{f===1&&(i=e.player.video.playbackRate,e.player.video.playbackRate=3)},(l,f)=>{if(f>0){e.player.video.playbackRate=+i;return}e.relativeSeek(5)});let o=!1;De(Dt,"visibilitychange",l=>{const{visiblePause:f}=e.playerOptions;switch(l.target.visibilityState){case"visible":f&&o&&e.player.play(),o=!1,e.player.seekDanmaku();break;case"hidden":o=!(e.player.video.paused??!0),f&&o&&e.player.pause();break}},{signal:t}),De(window,"beforeunload",l=>{const f=e.player.video.duration;f===f&&l.preventDefault()},{capture:!0,signal:t}),tr!=null&&(an("seekbackward",()=>e.relativeSeek(-5)),an("seekforward",()=>e.relativeSeek(5)),an("previoustrack",e.prev),an("nexttrack",e.next),sc(t,l=>{an("seekbackward",null),an("seekforward",null),an("previoustrack",null),an("nexttrack",null)}))},beforeUnmount(){this.title=null},render(e,t,n,a,i,o){const l=this,f=l.size.split("*");return[V("div",{class:"container",style:"margin:5px auto"},[V(ud,{gutter:6},t[389]??=()=>[V(vi,{span:12},t[390]??=()=>[V(Po,{ref:"input",search:!0,enterButton:"提交",onOnSearch:l.loadVideoFromUrl}),V(au,{style:"margin-top:6px",ref:"drop",global:!0,accept:"audio/*,video/*",onChange:l.handleChange})]),V(vi,{span:12},t[405]??=()=>[V(Tr,{padding:0},t[406]??=()=>[V(za,{style:"padding:0px"},t[407]??=()=>[V(At,{title:"　"},t[408]??={extra:()=>V(Jn,null,t[409]??=()=>[V(Ke,{onClick:l.retry},()=>"重试"),V(Ke,{onClick:l.options},()=>"设置"),V(Ke,{onClick:l.captureImage},()=>"截图"),V(Ke,{onClick:l.saveImage},()=>"保存截图")])}),V(ru,{ref:"playList",list:l.list,onPlay:l.loadVideoAndPlay}),V(At,{title:"尺寸"},t[421]??={extra:()=>V(gi,{type:"button",modelValue:l.size,"onUpdate:modelValue":t[425]??=p=>{l.size=p}},t[426]??=()=>Da(l.sizes,p=>V(bi,{label:p},()=>p)))}),V(At,{title:"快进快退"},t[428]??={extra:()=>V(Jn,null,t[429]??=()=>Da(l.relativeSeeks,p=>{const{value:m,slot:y}=typeof p=="number"?{value:p,slot:String(p)}:p;return V(Ke,{onClick(){l.relativeSeek(m)}},()=>y)}))}),V(At,null,t[434]??={default:()=>[V(bp,t[436]??={trigger:gu,placement:"top",transfer:!0},t[438]??={default:()=>[V(_t,{type:"ios-arrow-up"}),"速度"],content:()=>[V(kp,{style:"width:650px;margin:50px 50px 30px",min:0,max:Gn.length-1,step:1,marks:bu,tipFormat:t[446]??=p=>`${Gn[p]}×`,modelValue:l.speedIndex,"onUpdate:modelValue":t[448]??=p=>{l.speedIndex=p}})]}),`: ${l.playbackRate}×`],extra:()=>[V(Vi,{title:"保持音高",size:"large",modelValue:l.preservesPitch,"onUpdate:modelValue":t[459]??=p=>{l.preservesPitch=p}})]}),l.extra?V(Au,{ref:"danmaku",file:l.file,title:l.title,onDanmaku:l.handleDanmaku}):null])])])])]),V(pu,{ref:"player",width:+f[0],height:+f[1]},t[475]??=()=>V(eu,{video:l.player?.video,onRatechange:l.handleRateChange,style:t[478]??={position:"relative",bottom:"unset"}})),V("div",{class:"container",style:"margin:5px auto 240px"},[V(Tr,{style:"width:274px"},t[483]??=()=>V("img",{ref:"image",style:"width:100%",onClick:l.showImage}))])]}});export{xu as App};
