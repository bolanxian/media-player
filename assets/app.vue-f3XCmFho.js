import{createElementBlock as ae,openBlock as U,normalizeStyle as je,normalizeClass as G,nextTick as It,createBlock as lt,createVNode as j,withCtx as Re,withDirectives as St,createBaseVNode as ie,mergeProps as Li,withModifiers as Ze,renderSlot as Te,vShow as Pt,Transition as Xt,Teleport as jr,getCurrentInstance as et,Fragment as un,createCommentVNode as Ee,toDisplayString as wt,withKeys as Ut,createTextVNode as gn,h as Xe,resolveComponent as xt,resolveDynamicComponent as fu,resolveDirective as mu,renderList as pi,TransitionGroup as yu,createApp as Hr,off as At,on as We,getPropDesc as Gt,bindCall as Tt,call as Ma,bind as Na,nextTick$1 as Au,doc as Qt,noop as wa,$string as Pa,fromEntries as Fl,fetch as _l,isPlainObject as gu,$array as Va,gmxhr as zr,defineComponent as zn,shallowRef as bn,onMounted as bu,watch as $l,empty as ji,onBeforeUnmount as Wl,shallowReactive as xa,$number as vu,onLoad as wu,download as Hi,captureVideoToImage as xu,formatTime as Eu,waitEvent as Ao,setTitle as go,formatSize as Ui}from"./index-rsrg-PKL.js";const He=typeof window<"u",tt=(e,t)=>{const n=e.__vccOpts||e;for(const[l,o]of t)n[l]=o;return n},bo="ivu-icon",Cu={name:"Icon",props:{type:{type:String,default:""},size:[Number,String],color:String,custom:{type:String,default:""}},computed:{classes(){return[`${bo}`,{[`${bo}-${this.type}`]:this.type!=="",[`${this.custom}`]:this.custom!==""}]},styles(){let e={};return this.size&&(e["font-size"]=`${this.size}px`),this.color&&(e.color=this.color),e}}};function ku(e,t,n,l,o,i){return U(),ae("i",{class:G(i.classes),style:je(i.styles)},null,6)}const Kt=tt(Cu,[["render",ku]]);function Ke(e,t){for(let n=0;n<t.length;n++)if(e===t[n])return!0;return!1}let Qi;function Bu(e){if(He&&Qi===void 0){const t=document.createElement("div");t.style.width="100%",t.style.height="200px";const n=document.createElement("div"),l=n.style;l.position="absolute",l.top=0,l.left=0,l.pointerEvents="none",l.visibility="hidden",l.width="200px",l.height="150px",l.overflow="hidden",n.appendChild(t),document.body.appendChild(n);const o=t.offsetWidth;n.style.overflow="scroll";let i=t.offsetWidth;o===i&&(i=n.clientWidth),document.body.removeChild(n),Qi=o-i}return Qi}const Su=/([\:\-\_]+(.))/g,Iu=/^moz([A-Z])/;function Tu(e){return e.replace(Su,function(t,n,l,o){return o?l.toUpperCase():l}).replace(Iu,"Moz$1")}function jl(e,t){if(He){if(!e||!t)return null;t=Tu(t),t==="float"&&(t="cssFloat");try{const n=document.defaultView.getComputedStyle(e,"");return e.style[t]||n?n[t]:null}catch{return e.style[t]}}}function Lu(e){return{"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regExp","[object Undefined]":"undefined","[object Null]":"null","[object Object]":"object"}[Object.prototype.toString.call(e)]}function ki(e){const t=Lu(e);let n;if(t==="array")n=[];else if(t==="object")n={};else return e;if(t==="array")for(let l=0;l<e.length;l++)n.push(ki(e[l]));else if(t==="object")for(let l in e)n[l]=ki(e[l]);return n}function Bi(e,t,n){typeof t=="string"?n=[t]:n=t;let l=e.$parent,o=l.$options.name;for(;l&&(!o||n.indexOf(o)<0);)l=l.$parent,l&&(o=l.$options.name);return l}function Du(){if(!He)return;const e=t=>({media:t,matches:!1,on(){},off(){}});window.matchMedia=window.matchMedia||e}async function Ou(e,t="unnamed"){if(!He)return Promise.reject();try{const l=await(await fetch(e)).blob();if(!l)return Promise.reject();const o=URL.createObjectURL(l),i=document.createElement("a");return i.setAttribute("href",o),i.setAttribute("download",t),i.click(),URL.revokeObjectURL(o),Promise.resolve()}catch(n){return Promise.reject(n)}}function Ra(e=32){const t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",n=t.length;let l="";for(let o=0;o<e;o++)l+=t.charAt(Math.floor(Math.random()*n));return l}const qa={props:{to:{type:[Object,String]},replace:{type:Boolean,default:!1},target:{type:String,validator(e){return Ke(e,["_blank","_self","_parent","_top"])},default:"_self"},append:{type:Boolean,required:!1,default:!1}},computed:{linkUrl(){if(typeof this.to!=="string")return null;if(this.to.includes("//"))return this.to;const t=this.$router;if(t){const n=this.$route,l=t.resolve(this.to,n,this.append);return l?l.href:this.to}return this.to}},methods:{handleOpenTo(){if(!He)return;const e=this.$router;let t=this.to;if(e){const n=this.$route,l=e.resolve(this.to,n,this.append);t=l?l.href:this.to}typeof this.to!="string"&&window.open(t)},handleClick(e=!1){const t=this.$router;He&&(e?this.handleOpenTo():t?typeof this.to=="string"&&this.to.includes("//")?window.location.href=this.to:this.replace?this.$router.replace(this.to,()=>{}):this.$router.push(this.to,()=>{}):window.location.href=this.to)},handleCheckClick(e,t=!1){if(this.to){if(this.target==="_blank")return this.handleOpenTo(),!1;e.preventDefault(),this.handleClick(t)}}}};var Kn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Di(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hi={exports:{}};/**!
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
 */var zu=hi.exports,vo;function Mu(){return vo||(vo=1,function(e,t){(function(n,l){e.exports=l()})(zu,function(){var n=typeof window<"u"&&typeof document<"u"&&typeof navigator<"u",l=function(){for(var b=["Edge","Trident","Firefox"],B=0;B<b.length;B+=1)if(n&&navigator.userAgent.indexOf(b[B])>=0)return 1;return 0}();function o(b){var B=!1;return function(){B||(B=!0,window.Promise.resolve().then(function(){B=!1,b()}))}}function i(b){var B=!1;return function(){B||(B=!0,setTimeout(function(){B=!1,b()},l))}}var d=n&&window.Promise,g=d?o:i;function v(b){var B={};return b&&B.toString.call(b)==="[object Function]"}function p(b,B){if(b.nodeType!==1)return[];var I=b.ownerDocument.defaultView,L=I.getComputedStyle(b,null);return B?L[B]:L}function m(b){return b.nodeName==="HTML"?b:b.parentNode||b.host}function x(b){if(!b)return document.body;switch(b.nodeName){case"HTML":case"BODY":return b.ownerDocument.body;case"#document":return b.body}var B=p(b),I=B.overflow,L=B.overflowX,$=B.overflowY;return/(auto|scroll|overlay)/.test(I+$+L)?b:x(m(b))}function y(b){return b&&b.referenceNode?b.referenceNode:b}var k=n&&!!(window.MSInputMethodContext&&document.documentMode),S=n&&/MSIE 10/.test(navigator.userAgent);function A(b){return b===11?k:b===10?S:k||S}function T(b){if(!b)return document.documentElement;for(var B=A(10)?document.body:null,I=b.offsetParent||null;I===B&&b.nextElementSibling;)I=(b=b.nextElementSibling).offsetParent;var L=I&&I.nodeName;return!L||L==="BODY"||L==="HTML"?b?b.ownerDocument.documentElement:document.documentElement:["TH","TD","TABLE"].indexOf(I.nodeName)!==-1&&p(I,"position")==="static"?T(I):I}function V(b){var B=b.nodeName;return B==="BODY"?!1:B==="HTML"||T(b.firstElementChild)===b}function O(b){return b.parentNode!==null?O(b.parentNode):b}function q(b,B){if(!b||!b.nodeType||!B||!B.nodeType)return document.documentElement;var I=b.compareDocumentPosition(B)&Node.DOCUMENT_POSITION_FOLLOWING,L=I?b:B,$=I?B:b,_=document.createRange();_.setStart(L,0),_.setEnd($,0);var Q=_.commonAncestorContainer;if(b!==Q&&B!==Q||L.contains($))return V(Q)?Q:T(Q);var ee=O(b);return ee.host?q(ee.host,B):q(b,O(B).host)}function R(b){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"top",I=B==="top"?"scrollTop":"scrollLeft",L=b.nodeName;if(L==="BODY"||L==="HTML"){var $=b.ownerDocument.documentElement,_=b.ownerDocument.scrollingElement||$;return _[I]}return b[I]}function F(b,B){var I=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,L=R(B,"top"),$=R(B,"left"),_=I?-1:1;return b.top+=L*_,b.bottom+=L*_,b.left+=$*_,b.right+=$*_,b}function C(b,B){var I=B==="x"?"Left":"Top",L=I==="Left"?"Right":"Bottom";return parseFloat(b["border"+I+"Width"])+parseFloat(b["border"+L+"Width"])}function N(b,B,I,L){return Math.max(B["offset"+b],B["scroll"+b],I["client"+b],I["offset"+b],I["scroll"+b],A(10)?parseInt(I["offset"+b])+parseInt(L["margin"+(b==="Height"?"Top":"Left")])+parseInt(L["margin"+(b==="Height"?"Bottom":"Right")]):0)}function z(b){var B=b.body,I=b.documentElement,L=A(10)&&getComputedStyle(I);return{height:N("Height",B,I,L),width:N("Width",B,I,L)}}var X=function(b,B){if(!(b instanceof B))throw new TypeError("Cannot call a class as a function")},H=function(){function b(B,I){for(var L=0;L<I.length;L++){var $=I[L];$.enumerable=$.enumerable||!1,$.configurable=!0,"value"in $&&($.writable=!0),Object.defineProperty(B,$.key,$)}}return function(B,I,L){return I&&b(B.prototype,I),L&&b(B,L),B}}(),oe=function(b,B,I){return B in b?Object.defineProperty(b,B,{value:I,enumerable:!0,configurable:!0,writable:!0}):b[B]=I,b},ye=Object.assign||function(b){for(var B=1;B<arguments.length;B++){var I=arguments[B];for(var L in I)Object.prototype.hasOwnProperty.call(I,L)&&(b[L]=I[L])}return b};function pe(b){return ye({},b,{right:b.left+b.width,bottom:b.top+b.height})}function se(b){var B={};try{if(A(10)){B=b.getBoundingClientRect();var I=R(b,"top"),L=R(b,"left");B.top+=I,B.left+=L,B.bottom+=I,B.right+=L}else B=b.getBoundingClientRect()}catch{}var $={left:B.left,top:B.top,width:B.right-B.left,height:B.bottom-B.top},_=b.nodeName==="HTML"?z(b.ownerDocument):{},Q=_.width||b.clientWidth||$.width,ee=_.height||b.clientHeight||$.height,le=b.offsetWidth-Q,me=b.offsetHeight-ee;if(le||me){var ve=p(b);le-=C(ve,"x"),me-=C(ve,"y"),$.width-=le,$.height-=me}return pe($)}function J(b,B){var I=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,L=A(10),$=B.nodeName==="HTML",_=se(b),Q=se(B),ee=x(b),le=p(B),me=parseFloat(le.borderTopWidth),ve=parseFloat(le.borderLeftWidth);I&&$&&(Q.top=Math.max(Q.top,0),Q.left=Math.max(Q.left,0));var he=pe({top:_.top-Q.top-me,left:_.left-Q.left-ve,width:_.width,height:_.height});if(he.marginTop=0,he.marginLeft=0,!L&&$){var Ie=parseFloat(le.marginTop),ke=parseFloat(le.marginLeft);he.top-=me-Ie,he.bottom-=me-Ie,he.left-=ve-ke,he.right-=ve-ke,he.marginTop=Ie,he.marginLeft=ke}return(L&&!I?B.contains(ee):B===ee&&ee.nodeName!=="BODY")&&(he=F(he,B)),he}function te(b){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,I=b.ownerDocument.documentElement,L=J(b,I),$=Math.max(I.clientWidth,window.innerWidth||0),_=Math.max(I.clientHeight,window.innerHeight||0),Q=B?0:R(I),ee=B?0:R(I,"left"),le={top:Q-L.top+L.marginTop,left:ee-L.left+L.marginLeft,width:$,height:_};return pe(le)}function Z(b){var B=b.nodeName;if(B==="BODY"||B==="HTML")return!1;if(p(b,"position")==="fixed")return!0;var I=m(b);return I?Z(I):!1}function Y(b){if(!b||!b.parentElement||A())return document.documentElement;for(var B=b.parentElement;B&&p(B,"transform")==="none";)B=B.parentElement;return B||document.documentElement}function W(b,B,I,L){var $=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1,_={top:0,left:0},Q=$?Y(b):q(b,y(B));if(L==="viewport")_=te(Q,$);else{var ee=void 0;L==="scrollParent"?(ee=x(m(B)),ee.nodeName==="BODY"&&(ee=b.ownerDocument.documentElement)):L==="window"?ee=b.ownerDocument.documentElement:ee=L;var le=J(ee,Q,$);if(ee.nodeName==="HTML"&&!Z(Q)){var me=z(b.ownerDocument),ve=me.height,he=me.width;_.top+=le.top-le.marginTop,_.bottom=ve+le.top,_.left+=le.left-le.marginLeft,_.right=he+le.left}else _=le}I=I||0;var Ie=typeof I=="number";return _.left+=Ie?I:I.left||0,_.top+=Ie?I:I.top||0,_.right-=Ie?I:I.right||0,_.bottom-=Ie?I:I.bottom||0,_}function ge(b){var B=b.width,I=b.height;return B*I}function Se(b,B,I,L,$){var _=arguments.length>5&&arguments[5]!==void 0?arguments[5]:0;if(b.indexOf("auto")===-1)return b;var Q=W(I,L,_,$),ee={top:{width:Q.width,height:B.top-Q.top},right:{width:Q.right-B.right,height:Q.height},bottom:{width:Q.width,height:Q.bottom-B.bottom},left:{width:B.left-Q.left,height:Q.height}},le=Object.keys(ee).map(function(Ie){return ye({key:Ie},ee[Ie],{area:ge(ee[Ie])})}).sort(function(Ie,ke){return ke.area-Ie.area}),me=le.filter(function(Ie){var ke=Ie.width,we=Ie.height;return ke>=I.clientWidth&&we>=I.clientHeight}),ve=me.length>0?me[0].key:le[0].key,he=b.split("-")[1];return ve+(he?"-"+he:"")}function De(b,B,I){var L=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,$=L?Y(B):q(B,y(I));return J(I,$,L)}function Me(b){var B=b.ownerDocument.defaultView,I=B.getComputedStyle(b),L=parseFloat(I.marginTop||0)+parseFloat(I.marginBottom||0),$=parseFloat(I.marginLeft||0)+parseFloat(I.marginRight||0),_={width:b.offsetWidth+$,height:b.offsetHeight+L};return _}function Ne(b){var B={left:"right",right:"left",bottom:"top",top:"bottom"};return b.replace(/left|right|bottom|top/g,function(I){return B[I]})}function qe(b,B,I){I=I.split("-")[0];var L=Me(b),$={width:L.width,height:L.height},_=["right","left"].indexOf(I)!==-1,Q=_?"top":"left",ee=_?"left":"top",le=_?"height":"width",me=_?"width":"height";return $[Q]=B[Q]+B[le]/2-L[le]/2,I===ee?$[ee]=B[ee]-L[me]:$[ee]=B[Ne(ee)],$}function Ve(b,B){return Array.prototype.find?b.find(B):b.filter(B)[0]}function ze(b,B,I){if(Array.prototype.findIndex)return b.findIndex(function($){return $[B]===I});var L=Ve(b,function($){return $[B]===I});return b.indexOf(L)}function Ae(b,B,I){var L=I===void 0?b:b.slice(0,ze(b,"name",I));return L.forEach(function($){$.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var _=$.function||$.fn;$.enabled&&v(_)&&(B.offsets.popper=pe(B.offsets.popper),B.offsets.reference=pe(B.offsets.reference),B=_(B,$))}),B}function _e(){if(!this.state.isDestroyed){var b={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};b.offsets.reference=De(this.state,this.popper,this.reference,this.options.positionFixed),b.placement=Se(this.options.placement,b.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),b.originalPlacement=b.placement,b.positionFixed=this.options.positionFixed,b.offsets.popper=qe(this.popper,b.offsets.reference,b.placement),b.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",b=Ae(this.modifiers,b),this.state.isCreated?this.options.onUpdate(b):(this.state.isCreated=!0,this.options.onCreate(b))}}function K(b,B){return b.some(function(I){var L=I.name,$=I.enabled;return $&&L===B})}function be(b){for(var B=[!1,"ms","Webkit","Moz","O"],I=b.charAt(0).toUpperCase()+b.slice(1),L=0;L<B.length;L++){var $=B[L],_=$?""+$+I:b;if(typeof document.body.style[_]<"u")return _}return null}function Le(){return this.state.isDestroyed=!0,K(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[be("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function nt(b){var B=b.ownerDocument;return B?B.defaultView:window}function gt(b,B,I,L){var $=b.nodeName==="BODY",_=$?b.ownerDocument.defaultView:b;_.addEventListener(B,I,{passive:!0}),$||gt(x(_.parentNode),B,I,L),L.push(_)}function Lt(b,B,I,L){I.updateBound=L,nt(b).addEventListener("resize",I.updateBound,{passive:!0});var $=x(b);return gt($,"scroll",I.updateBound,I.scrollParents),I.scrollElement=$,I.eventsEnabled=!0,I}function Jt(){this.state.eventsEnabled||(this.state=Lt(this.reference,this.options,this.state,this.scheduleUpdate))}function ft(b,B){return nt(b).removeEventListener("resize",B.updateBound),B.scrollParents.forEach(function(I){I.removeEventListener("scroll",B.updateBound)}),B.updateBound=null,B.scrollParents=[],B.scrollElement=null,B.eventsEnabled=!1,B}function Fe(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=ft(this.reference,this.state))}function ht(b){return b!==""&&!isNaN(parseFloat(b))&&isFinite(b)}function Dt(b,B){Object.keys(B).forEach(function(I){var L="";["width","height","top","right","bottom","left"].indexOf(I)!==-1&&ht(B[I])&&(L="px"),b.style[I]=B[I]+L})}function mt(b,B){Object.keys(B).forEach(function(I){var L=B[I];L!==!1?b.setAttribute(I,B[I]):b.removeAttribute(I)})}function Ct(b){return Dt(b.instance.popper,b.styles),mt(b.instance.popper,b.attributes),b.arrowElement&&Object.keys(b.arrowStyles).length&&Dt(b.arrowElement,b.arrowStyles),b}function qt(b,B,I,L,$){var _=De($,B,b,I.positionFixed),Q=Se(I.placement,_,B,b,I.modifiers.flip.boundariesElement,I.modifiers.flip.padding);return B.setAttribute("x-placement",Q),Dt(B,{position:I.positionFixed?"fixed":"absolute"}),I}function wn(b,B){var I=b.offsets,L=I.popper,$=I.reference,_=Math.round,Q=Math.floor,ee=function(zt){return zt},le=_($.width),me=_(L.width),ve=["left","right"].indexOf(b.placement)!==-1,he=b.placement.indexOf("-")!==-1,Ie=le%2===me%2,ke=le%2===1&&me%2===1,we=B?ve||he||Ie?_:Q:ee,Je=B?_:ee;return{left:we(ke&&!he&&B?L.left-1:L.left),top:Je(L.top),bottom:Je(L.bottom),right:we(L.right)}}var tn=n&&/Firefox/i.test(navigator.userAgent);function xn(b,B){var I=B.x,L=B.y,$=b.offsets.popper,_=Ve(b.instance.modifiers,function(rn){return rn.name==="applyStyle"}).gpuAcceleration;_!==void 0&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var Q=_!==void 0?_:B.gpuAcceleration,ee=T(b.instance.popper),le=se(ee),me={position:$.position},ve=wn(b,window.devicePixelRatio<2||!tn),he=I==="bottom"?"top":"bottom",Ie=L==="right"?"left":"right",ke=be("transform"),we=void 0,Je=void 0;if(he==="bottom"?ee.nodeName==="HTML"?Je=-ee.clientHeight+ve.bottom:Je=-le.height+ve.bottom:Je=ve.top,Ie==="right"?ee.nodeName==="HTML"?we=-ee.clientWidth+ve.right:we=-le.width+ve.right:we=ve.left,Q&&ke)me[ke]="translate3d("+we+"px, "+Je+"px, 0)",me[he]=0,me[Ie]=0,me.willChange="transform";else{var Wt=he==="bottom"?-1:1,zt=Ie==="right"?-1:1;me[he]=Je*Wt,me[Ie]=we*zt,me.willChange=he+", "+Ie}var bt={"x-placement":b.placement};return b.attributes=ye({},bt,b.attributes),b.styles=ye({},me,b.styles),b.arrowStyles=ye({},b.offsets.arrow,b.arrowStyles),b}function En(b,B,I){var L=Ve(b,function(ee){var le=ee.name;return le===B}),$=!!L&&b.some(function(ee){return ee.name===I&&ee.enabled&&ee.order<L.order});if(!$){var _="`"+B+"`",Q="`"+I+"`";console.warn(Q+" modifier is required by "+_+" modifier in order to work, be sure to include it before "+_+"!")}return $}function Pn(b,B){var I;if(!En(b.instance.modifiers,"arrow","keepTogether"))return b;var L=B.element;if(typeof L=="string"){if(L=b.instance.popper.querySelector(L),!L)return b}else if(!b.instance.popper.contains(L))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),b;var $=b.placement.split("-")[0],_=b.offsets,Q=_.popper,ee=_.reference,le=["left","right"].indexOf($)!==-1,me=le?"height":"width",ve=le?"Top":"Left",he=ve.toLowerCase(),Ie=le?"left":"top",ke=le?"bottom":"right",we=Me(L)[me];ee[ke]-we<Q[he]&&(b.offsets.popper[he]-=Q[he]-(ee[ke]-we)),ee[he]+we>Q[ke]&&(b.offsets.popper[he]+=ee[he]+we-Q[ke]),b.offsets.popper=pe(b.offsets.popper);var Je=ee[he]+ee[me]/2-we/2,Wt=p(b.instance.popper),zt=parseFloat(Wt["margin"+ve]),bt=parseFloat(Wt["border"+ve+"Width"]),rn=Je-b.offsets.popper[he]-zt-bt;return rn=Math.max(Math.min(Q[me]-we,rn),0),b.arrowElement=L,b.offsets.arrow=(I={},oe(I,he,Math.round(rn)),oe(I,Ie,""),I),b}function rt(b){return b==="end"?"start":b==="start"?"end":b}var kt=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],Ot=kt.slice(3);function P(b){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,I=Ot.indexOf(b),L=Ot.slice(I+1).concat(Ot.slice(0,I));return B?L.reverse():L}var Ft={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function nn(b,B){if(K(b.instance.modifiers,"inner")||b.flipped&&b.placement===b.originalPlacement)return b;var I=W(b.instance.popper,b.instance.reference,B.padding,B.boundariesElement,b.positionFixed),L=b.placement.split("-")[0],$=Ne(L),_=b.placement.split("-")[1]||"",Q=[];switch(B.behavior){case Ft.FLIP:Q=[L,$];break;case Ft.CLOCKWISE:Q=P(L);break;case Ft.COUNTERCLOCKWISE:Q=P(L,!0);break;default:Q=B.behavior}return Q.forEach(function(ee,le){if(L!==ee||Q.length===le+1)return b;L=b.placement.split("-")[0],$=Ne(L);var me=b.offsets.popper,ve=b.offsets.reference,he=Math.floor,Ie=L==="left"&&he(me.right)>he(ve.left)||L==="right"&&he(me.left)<he(ve.right)||L==="top"&&he(me.bottom)>he(ve.top)||L==="bottom"&&he(me.top)<he(ve.bottom),ke=he(me.left)<he(I.left),we=he(me.right)>he(I.right),Je=he(me.top)<he(I.top),Wt=he(me.bottom)>he(I.bottom),zt=L==="left"&&ke||L==="right"&&we||L==="top"&&Je||L==="bottom"&&Wt,bt=["top","bottom"].indexOf(L)!==-1,rn=!!B.flipVariations&&(bt&&_==="start"&&ke||bt&&_==="end"&&we||!bt&&_==="start"&&Je||!bt&&_==="end"&&Wt),kn=!!B.flipVariationsByContent&&(bt&&_==="start"&&we||bt&&_==="end"&&ke||!bt&&_==="start"&&Wt||!bt&&_==="end"&&Je),sr=rn||kn;(Ie||zt||sr)&&(b.flipped=!0,(Ie||zt)&&(L=Q[le+1]),sr&&(_=rt(_)),b.placement=L+(_?"-"+_:""),b.offsets.popper=ye({},b.offsets.popper,qe(b.instance.popper,b.offsets.reference,b.placement)),b=Ae(b.instance.modifiers,b,"flip"))}),b}function Vn(b){var B=b.offsets,I=B.popper,L=B.reference,$=b.placement.split("-")[0],_=Math.floor,Q=["top","bottom"].indexOf($)!==-1,ee=Q?"right":"bottom",le=Q?"left":"top",me=Q?"width":"height";return I[ee]<_(L[le])&&(b.offsets.popper[le]=_(L[le])-I[me]),I[le]>_(L[ee])&&(b.offsets.popper[le]=_(L[ee])),b}function Pe(b,B,I,L){var $=b.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),_=+$[1],Q=$[2];if(!_)return b;if(Q.indexOf("%")===0){var ee=void 0;switch(Q){case"%p":ee=I;break;case"%":case"%r":default:ee=L}var le=pe(ee);return le[B]/100*_}else if(Q==="vh"||Q==="vw"){var me=void 0;return Q==="vh"?me=Math.max(document.documentElement.clientHeight,window.innerHeight||0):me=Math.max(document.documentElement.clientWidth,window.innerWidth||0),me/100*_}else return _}function ar(b,B,I,L){var $=[0,0],_=["right","left"].indexOf(L)!==-1,Q=b.split(/(\+|\-)/).map(function(ve){return ve.trim()}),ee=Q.indexOf(Ve(Q,function(ve){return ve.search(/,|\s/)!==-1}));Q[ee]&&Q[ee].indexOf(",")===-1&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var le=/\s*,\s*|\s+/,me=ee!==-1?[Q.slice(0,ee).concat([Q[ee].split(le)[0]]),[Q[ee].split(le)[1]].concat(Q.slice(ee+1))]:[Q];return me=me.map(function(ve,he){var Ie=(he===1?!_:_)?"height":"width",ke=!1;return ve.reduce(function(we,Je){return we[we.length-1]===""&&["+","-"].indexOf(Je)!==-1?(we[we.length-1]=Je,ke=!0,we):ke?(we[we.length-1]+=Je,ke=!1,we):we.concat(Je)},[]).map(function(we){return Pe(we,Ie,B,I)})}),me.forEach(function(ve,he){ve.forEach(function(Ie,ke){ht(Ie)&&($[he]+=Ie*(ve[ke-1]==="-"?-1:1))})}),$}function or(b,B){var I=B.offset,L=b.placement,$=b.offsets,_=$.popper,Q=$.reference,ee=L.split("-")[0],le=void 0;return ht(+I)?le=[+I,0]:le=ar(I,_,Q,ee),ee==="left"?(_.top+=le[0],_.left-=le[1]):ee==="right"?(_.top+=le[0],_.left+=le[1]):ee==="top"?(_.left+=le[0],_.top-=le[1]):ee==="bottom"&&(_.left+=le[0],_.top+=le[1]),b.popper=_,b}function lr(b,B){var I=B.boundariesElement||T(b.instance.popper);b.instance.reference===I&&(I=T(I));var L=be("transform"),$=b.instance.popper.style,_=$.top,Q=$.left,ee=$[L];$.top="",$.left="",$[L]="";var le=W(b.instance.popper,b.instance.reference,B.padding,I,b.positionFixed);$.top=_,$.left=Q,$[L]=ee,B.boundaries=le;var me=B.priority,ve=b.offsets.popper,he={primary:function(ke){var we=ve[ke];return ve[ke]<le[ke]&&!B.escapeWithReference&&(we=Math.max(ve[ke],le[ke])),oe({},ke,we)},secondary:function(ke){var we=ke==="right"?"left":"top",Je=ve[we];return ve[ke]>le[ke]&&!B.escapeWithReference&&(Je=Math.min(ve[we],le[ke]-(ke==="right"?ve.width:ve.height))),oe({},we,Je)}};return me.forEach(function(Ie){var ke=["left","top"].indexOf(Ie)!==-1?"primary":"secondary";ve=ye({},ve,he[ke](Ie))}),b.offsets.popper=ve,b}function Qr(b){var B=b.placement,I=B.split("-")[0],L=B.split("-")[1];if(L){var $=b.offsets,_=$.reference,Q=$.popper,ee=["bottom","top"].indexOf(I)!==-1,le=ee?"left":"top",me=ee?"width":"height",ve={start:oe({},le,_[le]),end:oe({},le,_[le]+_[me]-Q[me])};b.offsets.popper=ye({},Q,ve[L])}return b}function Yr(b){if(!En(b.instance.modifiers,"hide","preventOverflow"))return b;var B=b.offsets.reference,I=Ve(b.instance.modifiers,function(L){return L.name==="preventOverflow"}).boundaries;if(B.bottom<I.top||B.left>I.right||B.top>I.bottom||B.right<I.left){if(b.hide===!0)return b;b.hide=!0,b.attributes["x-out-of-boundaries"]=""}else{if(b.hide===!1)return b;b.hide=!1,b.attributes["x-out-of-boundaries"]=!1}return b}function Mi(b){var B=b.placement,I=B.split("-")[0],L=b.offsets,$=L.popper,_=L.reference,Q=["left","right"].indexOf(I)!==-1,ee=["top","left"].indexOf(I)===-1;return $[Q?"left":"top"]=_[I]-(ee?$[Q?"width":"height"]:0),b.placement=Ne(B),b.offsets.popper=pe($),b}var Rn={shift:{order:100,enabled:!0,fn:Qr},offset:{order:200,enabled:!0,fn:or,offset:0},preventOverflow:{order:300,enabled:!0,fn:lr,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:Vn},arrow:{order:500,enabled:!0,fn:Pn,element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:nn,behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:Mi},hide:{order:800,enabled:!0,fn:Yr},computeStyle:{order:850,enabled:!0,fn:xn,gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:Ct,onLoad:qt,gpuAcceleration:void 0}},Kr={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:Rn},Cn=function(){function b(B,I){var L=this,$=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};X(this,b),this.scheduleUpdate=function(){return requestAnimationFrame(L.update)},this.update=g(this.update.bind(this)),this.options=ye({},b.Defaults,$),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=B&&B.jquery?B[0]:B,this.popper=I&&I.jquery?I[0]:I,this.options.modifiers={},Object.keys(ye({},b.Defaults.modifiers,$.modifiers)).forEach(function(Q){L.options.modifiers[Q]=ye({},b.Defaults.modifiers[Q]||{},$.modifiers?$.modifiers[Q]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(Q){return ye({name:Q},L.options.modifiers[Q])}).sort(function(Q,ee){return Q.order-ee.order}),this.modifiers.forEach(function(Q){Q.enabled&&v(Q.onLoad)&&Q.onLoad(L.reference,L.popper,L.options,Q,L.state)}),this.update();var _=this.options.eventsEnabled;_&&this.enableEventListeners(),this.state.eventsEnabled=_}return H(b,[{key:"update",value:function(){return _e.call(this)}},{key:"destroy",value:function(){return Le.call(this)}},{key:"enableEventListeners",value:function(){return Jt.call(this)}},{key:"disableEventListeners",value:function(){return Fe.call(this)}}]),b}();return Cn.Utils=(typeof window<"u"?window:Kn).PopperUtils,Cn.placements=kt,Cn.Defaults=Kr,Cn})}(hi)),hi.exports}var Nu=Mu();const Hl=Di(Nu);let Mn=0,fi=0;function ir(){Mn++}function Pu(){fi++}const Vu={name:"Drop",emits:["mouseenter","mouseleave","click"],props:{placement:{type:String,default:"bottom-start"},className:{type:String},transfer:{type:Boolean},eventsEnabled:{type:Boolean,default:!1},visible:{type:Boolean},classes:{type:Object,default:()=>{}},styles:{type:Object,default:()=>{}},transitionName:{type:String,default:"transition-drop"},boundariesElement:{default:"window"}},data(){return{popper:null,width:"",popperStatus:!1,tIndex:this.handleGetIndex()}},computed:{mergedStyle(){let e={};return this.width&&(e.minWidth=`${this.width}px`),this.transfer&&(e["z-index"]=1060+this.tIndex),Object.assign({},this.styles,e)},mergedClass(){return Object.assign({},this.classes,{[this.className]:this.className})}},methods:{update(){It(()=>{this.popper?(this.popper.update(),this.popperStatus=!0):this.popper=new Hl(this.$parent.$refs.reference,this.$refs.drop,{eventsEnabled:this.eventsEnabled,placement:this.placement,modifiers:{computeStyle:{gpuAcceleration:!1},preventOverflow:{boundariesElement:this.boundariesElement}},onCreate:()=>{this.resetTransformOrigin(),It(this.popper.update())},onUpdate:()=>{this.resetTransformOrigin()}}),this.$parent.$options.name==="iSelect"&&(this.width=parseInt(jl(this.$parent.$el,"width"))),this.tIndex=this.handleGetIndex()})},destroy(){this.popper&&setTimeout(()=>{this.popper&&!this.popperStatus&&(this.popper.popper.style.display="none",this.popper.destroy(),this.popper=null),this.popperStatus=!1},300)},resetTransformOrigin(){if(!this.popper)return;let e=this.popper.popper.getAttribute("x-placement"),t=e.split("-")[0],n=e.split("-")[1];e==="left"||e==="right"||(this.popper.popper.style.transformOrigin=t==="bottom"||t!=="top"&&n==="start"?"center top":"center bottom")},handleGetIndex(){return ir(),Mn},handleMouseenter(e){this.$emit("mouseenter",e)},handleMouseleave(e){this.$emit("mouseleave",e)},handleOnUpdatePopper(){this.update()},handleOnDestroyPopper(){this.destroy()},handleClick(e){this.$emit("click",e)}},beforeUnmount(){this.popper&&(this.popper.destroy(),this.popper=null)}};function Ru(e,t,n,l,o,i){return U(),lt(jr,{to:"body",disabled:!n.transfer},[j(Xt,{name:n.transitionName},{default:Re(()=>[St(ie("div",Li({class:["ivu-select-dropdown",i.mergedClass],ref:"drop",style:i.mergedStyle},e.$attrs,{onMouseenter:t[0]||(t[0]=(...d)=>i.handleMouseenter&&i.handleMouseenter(...d)),onMouseleave:t[1]||(t[1]=(...d)=>i.handleMouseleave&&i.handleMouseleave(...d)),onClick:t[2]||(t[2]=Ze((...d)=>i.handleClick&&i.handleClick(...d),["stop"]))}),[Te(e.$slots,"default")],16),[[Pt,n.visible]])]),_:3},8,["name"])],8,["disabled"])}const qu=tt(Vu,[["render",Ru]]);function Fu(e){He&&typeof window.viewuiplus<"u"&&("langs"in viewuiplus||(viewuiplus.langs={}),viewuiplus.langs[e.i.locale]=e)}const Ul={i:{locale:"zh-CN",select:{placeholder:"请选择",noMatch:"无匹配数据",loading:"加载中"},table:{noDataText:"暂无数据",noFilteredDataText:"暂无筛选结果",confirmFilter:"筛选",resetFilter:"重置",clearFilter:"全部",sumText:"合计"},datepicker:{selectDate:"选择日期",selectTime:"选择时间",startTime:"开始时间",endTime:"结束时间",clear:"清空",ok:"确定",datePanelLabel:"[yyyy年] [m月]",month:"月",month1:"1 月",month2:"2 月",month3:"3 月",month4:"4 月",month5:"5 月",month6:"6 月",month7:"7 月",month8:"8 月",month9:"9 月",month10:"10 月",month11:"11 月",month12:"12 月",year:"年",weekStartDay:"0",weeks:{sun:"日",mon:"一",tue:"二",wed:"三",thu:"四",fri:"五",sat:"六"},months:{m1:"1月",m2:"2月",m3:"3月",m4:"4月",m5:"5月",m6:"6月",m7:"7月",m8:"8月",m9:"9月",m10:"10月",m11:"11月",m12:"12月"}},transfer:{titles:{source:"源列表",target:"目的列表"},filterPlaceholder:"请输入搜索内容",notFoundText:"列表为空"},modal:{okText:"确定",cancelText:"取消"},poptip:{okText:"确定",cancelText:"取消"},page:{prev:"上一页",next:"下一页",total:"共",item:"条",items:"条",prev5:"向前 5 页",next5:"向后 5 页",page:"条/页",goto:"跳至",p:"页"},rate:{star:"星",stars:"星"},time:{before:"前",after:"后",just:"刚刚",seconds:"秒",minutes:"分钟",hours:"小时",days:"天"},tree:{emptyText:"暂无数据"},image:{zoomIn:"放大",zoomOut:"缩小",rotateLeft:"左旋转",rotateRight:"右旋转",fail:"失败",preview:"预览"}}};Fu(Ul);const _u=/(%|)\{([0-9a-zA-Z_]+)\}/g;function $u(){function e(n,l){return Object.prototype.hasOwnProperty.call(n,l)}function t(n,...l){return l.length===1&&typeof l[0]=="object"&&(l=l[0]),(!l||!l.hasOwnProperty)&&(l={}),n===void 0?"":n.replace(_u,(o,i,d,g)=>{let v;return n[g-1]==="{"&&n[g+o.length]==="}"?d:(v=e(l,d)?l[d]:null,v??"")})}return t}const Wu=$u();let ju=Ul,Hu=function(){if(Reflect.has(this,"$t"))return this.$t(...arguments)};const Uu=function(e,t){let n=Hu.apply(this,arguments);if(n!=null)return n;const l=e.split(".");let o=ju;for(let i=0,d=l.length;i<d;i++){const g=l[i];if(n=o[g],i===d-1)return Wu(n,t);if(!n)return"";o=n}return""},Fa={methods:{t(...e){return Uu.apply(this,e)}}},Qu={data(){return{globalConfig:{}}},created(){const e=et();this.globalConfig=e.appContext.config.globalProperties.$VIEWUI}},Nn={inject:{FormInstance:{default:""},FormItemInstance:{default:null}},computed:{itemDisabled(){let e=this.disabled;return!e&&this.FormInstance&&(e=this.FormInstance.disabled),e?!0:null}},methods:{handleFormItemChange(e,t){this.FormItemInstance&&(e==="blur"?this.FormItemInstance.formBlur(t):e==="change"&&this.FormItemInstance.formChange(t))}}},Yu=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important
`,Ku=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];let Yi={},Zt;function Xu(e,t=!1){if(!He)return;const n=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(t&&Yi[n])return Yi[n];const l=window.getComputedStyle(e),o=l.getPropertyValue("box-sizing")||l.getPropertyValue("-moz-box-sizing")||l.getPropertyValue("-webkit-box-sizing"),i=parseFloat(l.getPropertyValue("padding-bottom"))+parseFloat(l.getPropertyValue("padding-top")),d=parseFloat(l.getPropertyValue("border-bottom-width"))+parseFloat(l.getPropertyValue("border-top-width")),v={sizingStyle:Ku.map(p=>`${p}:${l.getPropertyValue(p)}`).join(";"),paddingSize:i,borderSize:d,boxSizing:o};return t&&n&&(Yi[n]=v),v}function Gu(e,t=null,n=null,l=!1){He&&!Zt&&(Zt=document.createElement("textarea"),document.body.appendChild(Zt)),e.getAttribute("wrap")?Zt.setAttribute("wrap",e.getAttribute("wrap")):Zt.removeAttribute("wrap");let{paddingSize:o,borderSize:i,boxSizing:d,sizingStyle:g}=Xu(e,l);Zt.setAttribute("style",`${g};${Yu}`),Zt.value=e.value||e.placeholder||"";let v=Number.MIN_SAFE_INTEGER,p=Number.MAX_SAFE_INTEGER,m=Zt.scrollHeight,x;if(d==="border-box"?m=m+i:d==="content-box"&&(m=m-o),t!==null||n!==null){Zt.value=" ";let y=Zt.scrollHeight-o;t!==null&&(v=y*t,d==="border-box"&&(v=v+o+i),m=Math.max(v,m)),n!==null&&(p=y*n,d==="border-box"&&(p=p+o+i),x=m>p?"":"hidden",m=Math.min(p,m))}return n||(x="hidden"),{height:`${m}px`,minHeight:`${v}px`,maxHeight:`${p}px`,overflowY:x}}const ut="ivu-input",Ju={name:"Input",mixins:[Nn],emits:["on-enter","on-search","on-keydown","on-keypress","on-keyup","on-click","on-focus","on-blur","on-change","on-input-change","on-clear","update:modelValue"],props:{type:{validator(e){return Ke(e,["text","textarea","password","url","email","date","number","tel"])},default:"text"},modelValue:{type:[String,Number],default:""},size:{validator(e){return Ke(e,["small","large","default"])},default(){const e=et().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.size===""?"default":e.$VIEWUI.size}},placeholder:{type:String,default:""},maxlength:{type:[String,Number]},disabled:{type:Boolean,default:!1},icon:String,autosize:{type:[Boolean,Object],default:!1},rows:{type:Number,default:2},readonly:{type:Boolean,default:!1},name:{type:String},number:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},spellcheck:{type:Boolean,default:!1},autocomplete:{type:String,default:"off"},clearable:{type:Boolean,default:!1},elementId:{type:String},wrap:{validator(e){return Ke(e,["hard","soft"])},default:"soft"},prefix:{type:String,default:""},suffix:{type:String,default:""},search:{type:Boolean,default:!1},enterButton:{type:[Boolean,String],default:!1},showWordLimit:{type:Boolean,default:!1},password:{type:Boolean,default:!1},border:{type:Boolean,default:!0}},data(){return{currentValue:this.modelValue,prefixCls:ut,slotReady:!1,textareaStyles:{},isOnComposition:!1,showPassword:!1,clearableIconOffset:0}},computed:{currentType(){let e=this.type;return e==="password"&&this.password&&this.showPassword&&(e="text"),e},prepend(){let e=!1;return this.type!=="textarea"&&(e=this.$slots.prepend!==void 0),e},append(){let e=!1;return this.type!=="textarea"&&(e=this.$slots.append!==void 0),e},showPrefix(){let e=!1;return this.type!=="textarea"&&(e=this.prefix!==""||this.$slots.prefix!==void 0),e},showSuffix(){let e=!1;return this.type!=="textarea"&&(e=this.suffix!==""||this.$slots.suffix!==void 0),e},wrapClasses(){return[`${ut}-wrapper`,{[`${ut}-wrapper-${this.size}`]:!!this.size,[`${ut}-type-${this.type}`]:this.type,[`${ut}-group`]:this.prepend||this.append||this.search&&this.enterButton,[`${ut}-group-${this.size}`]:(this.prepend||this.append||this.search&&this.enterButton)&&!!this.size,[`${ut}-group-with-prepend`]:this.prepend,[`${ut}-group-with-append`]:this.append||this.search&&this.enterButton,[`${ut}-hide-icon`]:this.append,[`${ut}-with-search`]:this.search&&this.enterButton,[`${ut}-wrapper-disabled`]:this.itemDisabled}]},inputClasses(){return[`${ut}`,{[`${ut}-${this.size}`]:!!this.size,[`${ut}-disabled`]:this.itemDisabled,[`${ut}-no-border`]:!this.border,[`${ut}-with-prefix`]:this.showPrefix,[`${ut}-with-suffix`]:this.showSuffix||this.search&&this.enterButton===!1}]},textareaClasses(){return[`${ut}`,{[`${ut}-disabled`]:this.itemDisabled,[`${ut}-no-border`]:!this.border}]},upperLimit(){return this.maxlength},textLength(){return typeof this.modelValue=="number"?String(this.modelValue).length:(this.modelValue||"").length},clearableStyles(){const e={};let t=this.clearableIconOffset;return t&&(e.transform=`translateX(-${t}px)`),e}},methods:{handleEnter(e){this.$emit("on-enter",e),this.search&&this.$emit("on-search",this.currentValue)},handleKeydown(e){this.$emit("on-keydown",e)},handleKeypress(e){this.$emit("on-keypress",e)},handleKeyup(e){this.$emit("on-keyup",e)},handleIconClick(e){this.$emit("on-click",e)},handleFocus(e){this.$emit("on-focus",e)},handleBlur(e){this.$emit("on-blur",e),Bi(this,["DatePicker","TimePicker","Cascader","Search"])||this.handleFormItemChange("blur",this.currentValue)},handleComposition(e){e.type==="compositionstart"&&(this.isOnComposition=!0),e.type==="compositionend"&&(this.isOnComposition=!1,this.handleInput(e))},handleInput(e){if(this.isOnComposition)return;let t=e.target.value;this.number&&t!==""&&(t=Number.isNaN(Number(t))?t:Number(t)),this.$emit("update:modelValue",t),this.setCurrentValue(t),this.$emit("on-change",e)},handleChange(e){this.$emit("on-input-change",e)},setCurrentValue(e){e!==this.currentValue&&(It(()=>{this.resizeTextarea()}),this.currentValue=e,Bi(this,["DatePicker","TimePicker","Cascader","Search"])||this.handleFormItemChange("change",e))},resizeTextarea(){const e=this.autosize;if(!e||this.type!=="textarea")return!1;const t=e.minRows,n=e.maxRows;this.textareaStyles=Gu(this.$refs.textarea,t,n)},focus(e){const t=this.type==="textarea"?this.$refs.textarea:this.$refs.input;t.focus(e);const{cursor:n}=e||{};if(n){const l=t.value.length;switch(n){case"start":t.setSelectionRange(0,0);break;case"end":t.setSelectionRange(l,l);break;default:t.setSelectionRange(0,l)}}},blur(){this.type==="textarea"?this.$refs.textarea.blur():this.$refs.input.blur()},handleClear(){const e={target:{value:""}};this.$emit("update:modelValue",""),this.setCurrentValue(""),this.$emit("on-change",e),this.$emit("on-clear")},handleSearch(){if(this.itemDisabled)return!1;this.$refs.input.focus(),this.$emit("on-search",this.currentValue)},handleToggleShowPassword(){if(this.itemDisabled)return!1;this.showPassword=!this.showPassword,this.focus();const e=this.currentValue.length;setTimeout(()=>{this.$refs.input.setSelectionRange(e,e)},0)},handleCalcIconOffset(){const e=this.$el.querySelectorAll(".ivu-input-group-append")[0];e?this.clearableIconOffset=e.offsetWidth:this.clearableIconOffset=0}},watch:{modelValue(e){this.setCurrentValue(e)},type(){It(this.handleCalcIconOffset)}},mounted(){this.slotReady=!0,this.resizeTextarea(),this.handleCalcIconOffset()},updated(){It(this.handleCalcIconOffset)}},Zu={key:4,class:"ivu-input-suffix"},ec={key:5,class:"ivu-input-word-count"},tc={key:0,class:"ivu-icon ivu-icon-ios-eye-outline"},nc={key:1,class:"ivu-icon ivu-icon-ios-eye-off-outline"},rc=["id","autocomplete","spellcheck","type","placeholder","disabled","maxlength","readonly","name","value","number","autofocus"],ic={key:0,class:"ivu-icon ivu-icon-ios-search"},ac={key:9,class:"ivu-input-prefix"},oc=["id","wrap","autocomplete","spellcheck","placeholder","disabled","rows","maxlength","readonly","name","value","autofocus"],lc={key:0,class:"ivu-input-word-count"};function sc(e,t,n,l,o,i){return U(),ae("div",{class:G(i.wrapClasses)},[n.type!=="textarea"?(U(),ae(un,{key:0},[i.prepend?St((U(),ae("div",{key:0,class:G([o.prefixCls+"-group-prepend"])},[Te(e.$slots,"prepend")],2)),[[Pt,o.slotReady]]):Ee("",!0),n.clearable&&o.currentValue&&!e.itemDisabled?(U(),ae("i",{key:1,class:G(["ivu-icon",["ivu-icon-ios-close-circle",o.prefixCls+"-icon",o.prefixCls+"-icon-clear",o.prefixCls+"-icon-normal"]]),onClick:t[0]||(t[0]=(...d)=>i.handleClear&&i.handleClear(...d)),style:je(i.clearableStyles)},null,6)):n.icon?(U(),ae("i",{key:2,class:G(["ivu-icon",["ivu-icon-"+n.icon,o.prefixCls+"-icon",o.prefixCls+"-icon-normal"]]),onClick:t[1]||(t[1]=(...d)=>i.handleIconClick&&i.handleIconClick(...d))},null,2)):n.search&&n.enterButton===!1?(U(),ae("i",{key:3,class:G(["ivu-icon ivu-icon-ios-search",[o.prefixCls+"-icon",o.prefixCls+"-icon-normal",o.prefixCls+"-search-icon"]]),onClick:t[2]||(t[2]=(...d)=>i.handleSearch&&i.handleSearch(...d))},null,2)):i.showSuffix?(U(),ae("span",Zu,[Te(e.$slots,"suffix",{},()=>[n.suffix?(U(),ae("i",{key:0,class:G(["ivu-icon",["ivu-icon-"+n.suffix]])},null,2)):Ee("",!0)])])):n.showWordLimit?(U(),ae("span",ec,wt(i.textLength)+"/"+wt(i.upperLimit),1)):n.password?(U(),ae("span",{key:6,class:"ivu-input-suffix",onClick:t[3]||(t[3]=(...d)=>i.handleToggleShowPassword&&i.handleToggleShowPassword(...d))},[o.showPassword?(U(),ae("i",tc)):(U(),ae("i",nc))])):Ee("",!0),j(Xt,{name:"fade"},{default:Re(()=>[n.icon?Ee("",!0):(U(),ae("i",{key:0,class:G(["ivu-icon ivu-icon-ios-loading ivu-load-loop",[o.prefixCls+"-icon",o.prefixCls+"-icon-validate"]])},null,2))]),_:1}),ie("input",{id:n.elementId,autocomplete:n.autocomplete,spellcheck:n.spellcheck,ref:"input",type:i.currentType,class:G(i.inputClasses),placeholder:n.placeholder,disabled:e.itemDisabled,maxlength:n.maxlength,readonly:n.readonly,name:n.name,value:o.currentValue,number:n.number,autofocus:n.autofocus,onKeyup:[t[4]||(t[4]=Ut((...d)=>i.handleEnter&&i.handleEnter(...d),["enter"])),t[5]||(t[5]=(...d)=>i.handleKeyup&&i.handleKeyup(...d))],onKeypress:t[6]||(t[6]=(...d)=>i.handleKeypress&&i.handleKeypress(...d)),onKeydown:t[7]||(t[7]=(...d)=>i.handleKeydown&&i.handleKeydown(...d)),onFocus:t[8]||(t[8]=(...d)=>i.handleFocus&&i.handleFocus(...d)),onBlur:t[9]||(t[9]=(...d)=>i.handleBlur&&i.handleBlur(...d)),onCompositionstart:t[10]||(t[10]=(...d)=>i.handleComposition&&i.handleComposition(...d)),onCompositionupdate:t[11]||(t[11]=(...d)=>i.handleComposition&&i.handleComposition(...d)),onCompositionend:t[12]||(t[12]=(...d)=>i.handleComposition&&i.handleComposition(...d)),onInput:t[13]||(t[13]=(...d)=>i.handleInput&&i.handleInput(...d)),onChange:t[14]||(t[14]=(...d)=>i.handleChange&&i.handleChange(...d))},null,42,rc),i.append?St((U(),ae("div",{key:7,class:G([o.prefixCls+"-group-append"])},[Te(e.$slots,"append")],2)),[[Pt,o.slotReady]]):n.search&&n.enterButton?(U(),ae("div",{key:8,class:G([o.prefixCls+"-group-append",o.prefixCls+"-search"]),onClick:t[15]||(t[15]=(...d)=>i.handleSearch&&i.handleSearch(...d))},[n.enterButton===!0?(U(),ae("i",ic)):(U(),ae(un,{key:1},[gn(wt(n.enterButton),1)],64))],2)):i.showPrefix?(U(),ae("span",ac,[Te(e.$slots,"prefix",{},()=>[n.prefix?(U(),ae("i",{key:0,class:G(["ivu-icon",["ivu-icon-"+n.prefix]])},null,2)):Ee("",!0)])])):Ee("",!0)],64)):(U(),ae(un,{key:1},[ie("textarea",{id:n.elementId,wrap:n.wrap,autocomplete:n.autocomplete,spellcheck:n.spellcheck,ref:"textarea",class:G(i.textareaClasses),style:je(o.textareaStyles),placeholder:n.placeholder,disabled:e.itemDisabled,rows:n.rows,maxlength:n.maxlength,readonly:n.readonly,name:n.name,value:o.currentValue,autofocus:n.autofocus,onKeyup:[t[16]||(t[16]=Ut((...d)=>i.handleEnter&&i.handleEnter(...d),["enter"])),t[17]||(t[17]=(...d)=>i.handleKeyup&&i.handleKeyup(...d))],onKeypress:t[18]||(t[18]=(...d)=>i.handleKeypress&&i.handleKeypress(...d)),onKeydown:t[19]||(t[19]=(...d)=>i.handleKeydown&&i.handleKeydown(...d)),onFocus:t[20]||(t[20]=(...d)=>i.handleFocus&&i.handleFocus(...d)),onBlur:t[21]||(t[21]=(...d)=>i.handleBlur&&i.handleBlur(...d)),onCompositionstart:t[22]||(t[22]=(...d)=>i.handleComposition&&i.handleComposition(...d)),onCompositionupdate:t[23]||(t[23]=(...d)=>i.handleComposition&&i.handleComposition(...d)),onCompositionend:t[24]||(t[24]=(...d)=>i.handleComposition&&i.handleComposition(...d)),onInput:t[25]||(t[25]=(...d)=>i.handleInput&&i.handleInput(...d))},"            ",46,oc),n.showWordLimit?(U(),ae("span",lc,wt(i.textLength)+"/"+wt(i.upperLimit),1)):Ee("",!0)],64))],2)}const Ql=tt(Ju,[["render",sc]]),dc={emits:["on-popper-show","on-popper-hide","created","update:modelValue"],props:{eventsEnabled:{type:Boolean,default:!1},placement:{type:String,default:"bottom"},boundariesPadding:{type:Number,default:5},reference:Object,popper:Object,offset:{default:0},modelValue:{type:Boolean,default:!1},transition:String,options:{type:Object,default(){return{modifiers:{computeStyle:{gpuAcceleration:!1},preventOverflow:{boundariesElement:"window"}}}}}},data(){return{visible:this.modelValue}},watch:{modelValue:{immediate:!0,handler(e){this.visible=e,this.$emit("update:modelValue",e)}},visible(e){e?(this.handleIndexIncrease&&this.handleIndexIncrease(),this.updatePopper(),this.$emit("on-popper-show")):this.$emit("on-popper-hide"),this.$emit("update:modelValue",e)}},methods:{createPopper(){if(!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.placement))return;const e=this.options,t=this.popper||this.$refs.popper,n=this.reference||this.$refs.reference;!t||!n||(this.popperJS&&this.popperJS.hasOwnProperty("destroy")&&this.popperJS.destroy(),e.eventsEnabled=this.eventsEnabled,e.placement=this.placement,e.modifiers.offset||(e.modifiers.offset={}),e.modifiers.offset.offset=this.offset,e.onCreate=()=>{It(this.updatePopper),this.$emit("created",this)},this.popperJS=new Hl(n,t,e))},updatePopper(){this.popperJS?this.popperJS.update():this.createPopper()},doDestroy(){this.visible||(this.popperJS.destroy(),this.popperJS=null)}},updated(){It(()=>this.updatePopper())},beforeUnmount(){this.popperJS&&this.popperJS.destroy()}},jn="ivu-tooltip",uc={name:"Tooltip",mixins:[dc],props:{placement:{validator(e){return Ke(e,["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"])},default:"bottom"},content:{type:[String,Number],default:""},delay:{type:Number,default:100},disabled:{type:Boolean,default:!1},controlled:{type:Boolean,default:!1},always:{type:Boolean,default:!1},transfer:{type:Boolean,default(){const e=et().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.transfer===""?!1:e.$VIEWUI.transfer}},theme:{validator(e){return Ke(e,["dark","light"])},default:"dark"},maxWidth:{type:[String,Number]},transferClassName:{type:String}},data(){return{prefixCls:jn,tIndex:this.handleGetIndex()}},computed:{innerStyles(){const e={};return this.maxWidth&&(e["max-width"]=`${this.maxWidth}px`),e},innerClasses(){return[`${jn}-inner`,{[`${jn}-inner-with-width`]:!!this.maxWidth}]},dropStyles(){let e={};return this.transfer&&(e["z-index"]=1060+this.tIndex),e},dropdownCls(){return[`${jn}-popper`,`${jn}-${this.theme}`,{[jn+"-transfer"]:this.transfer,[this.transferClassName]:this.transferClassName}]}},watch:{content(){this.updatePopper()}},methods:{handleShowPopper(){this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{this.visible=!0},this.delay),this.tIndex=this.handleGetIndex()},handleClosePopper(){this.timeout&&(clearTimeout(this.timeout),this.controlled||(this.timeout=setTimeout(()=>{this.visible=!1},100)))},handleGetIndex(){return ir(),Mn}},mounted(){this.always&&this.updatePopper()}};function cc(e,t,n,l,o,i){return U(),ae("div",{class:G([o.prefixCls]),onMouseenter:t[2]||(t[2]=(...d)=>i.handleShowPopper&&i.handleShowPopper(...d)),onMouseleave:t[3]||(t[3]=(...d)=>i.handleClosePopper&&i.handleClosePopper(...d))},[ie("div",{class:G([o.prefixCls+"-rel"]),ref:"reference"},[Te(e.$slots,"default")],2),(U(),lt(jr,{to:"body",disabled:!n.transfer},[j(Xt,{name:"fade"},{default:Re(()=>[St(ie("div",{ref:"popper",class:G(i.dropdownCls),style:je(i.dropStyles),onMouseenter:t[0]||(t[0]=(...d)=>i.handleShowPopper&&i.handleShowPopper(...d)),onMouseleave:t[1]||(t[1]=(...d)=>i.handleClosePopper&&i.handleClosePopper(...d))},[ie("div",{class:G([o.prefixCls+"-content"])},[ie("div",{class:G([o.prefixCls+"-arrow"])},null,2),ie("div",{class:G(i.innerClasses),style:je(i.innerStyles)},[Te(e.$slots,"content",{},()=>[gn(wt(n.content),1)])],6)],2)],38),[[Pt,!n.disabled&&(e.visible||n.always)]])]),_:3})],8,["disabled"]))],34)}const pc=tt(uc,[["render",cc]]),mn="ivu-btn",yt={name:"Button",mixins:[qa,Nn],components:{Icon:Kt},emits:["click"],props:{type:{validator(e){return Ke(e,["default","primary","dashed","text","info","success","warning","error"])},default:"default"},shape:{validator(e){return Ke(e,["circle","circle-outline"])}},size:{validator(e){return Ke(e,["small","large","default"])},default(){const e=et().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.size===""?"default":e.$VIEWUI.size}},loading:Boolean,disabled:Boolean,htmlType:{default:"button",validator(e){return Ke(e,["button","submit","reset"])}},icon:{type:String,default:""},customIcon:{type:String,default:""},long:{type:Boolean,default:!1},ghost:{type:Boolean,default:!1}},computed:{showSlot(){return!!this.$slots.default},classes(){return[`${mn}`,`${mn}-${this.type}`,{[`${mn}-long`]:this.long,[`${mn}-${this.shape}`]:!!this.shape,[`${mn}-${this.size}`]:this.size!=="default",[`${mn}-loading`]:this.loading!=null&&this.loading,[`${mn}-icon-only`]:!this.showSlot&&(!!this.icon||!!this.customIcon||this.loading),[`${mn}-ghost`]:this.ghost}]},isHrefPattern(){const{to:e}=this;return!!e},tagName(){const{isHrefPattern:e}=this;return e?"a":"button"},tagProps(){const{isHrefPattern:e}=this;if(e){const{linkUrl:t,target:n}=this;return{href:t,target:n}}else{const{htmlType:t}=this;return{type:t}}}},methods:{handleClickLink(e){this.$emit("click",e);const t=e.ctrlKey||e.metaKey;this.handleCheckClick(e,t)}},render(){let e;this.tagName==="button"?e="button":this.tagName==="a"&&(e="a");let t=[];return this.loading&&t.push(Xe(Kt,{class:"ivu-load-loop",type:"ios-loading"})),(this.icon||this.customIcon)&&!this.loading&&t.push(Xe(Kt,{type:this.icon,custom:this.customIcon})),this.$slots.default&&t.push(Xe("span",{ref:"slot"},this.$slots.default())),Xe(e,{class:this.classes,disabled:this.itemDisabled,onClick:this.handleClickLink,...this.tagProps},t)}},ni="ivu-btn-group",hc={name:"ButtonGroup",props:{size:{validator(e){return Ke(e,["small","large","default"])},default(){const e=et().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.size===""?"default":e.$VIEWUI.size}},shape:{validator(e){return Ke(e,["circle","circle-outline"])}},vertical:{type:Boolean,default:!1}},computed:{classes(){return[`${ni}`,{[`${ni}-${this.size}`]:!!this.size,[`${ni}-${this.shape}`]:!!this.shape,[`${ni}-vertical`]:this.vertical}]}}};function fc(e,t,n,l,o,i){return U(),ae("div",{class:G(i.classes)},[Te(e.$slots,"default")],2)}const Vr=tt(hc,[["render",fc]]),Lr="ivu-radio-group";let mc=0;const yc=Date.now(),Ac=()=>`ivuRadioGroup_${yc}_${mc++}`,gc={name:"RadioGroup",mixins:[Nn],emits:["update:modelValue","on-change"],provide(){return{RadioGroupInstance:this}},props:{modelValue:{type:[String,Number],default:""},size:{validator(e){return Ke(e,["small","large","default"])},default(){const e=et().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.size===""?"default":e.$VIEWUI.size}},type:{validator(e){return Ke(e,["button"])}},vertical:{type:Boolean,default:!1},name:{type:String,default:Ac},buttonStyle:{validator(e){return Ke(e,["default","solid"])},default:"default"}},data(){return{currentValue:this.modelValue,children:[]}},computed:{classes(){return[`${Lr}`,{[`${Lr}-${this.size}`]:!!this.size,[`ivu-radio-${this.size}`]:!!this.size,[`${Lr}-${this.type}`]:!!this.type,[`${Lr}-button-${this.buttonStyle}`]:this.type==="button"&&this.buttonStyle!=="default",[`${Lr}-vertical`]:this.vertical}]}},methods:{change(e){this.currentValue=e.value,this.$emit("update:modelValue",e.value),this.$emit("on-change",e.value),this.handleFormItemChange("change",e.value)}},watch:{modelValue(){this.currentValue!==this.modelValue&&(this.currentValue=this.modelValue)}}},bc=["name"];function vc(e,t,n,l,o,i){return U(),ae("div",{class:G(i.classes),name:n.name},[Te(e.$slots,"default")],10,bc)}const wo=tt(gc,[["render",vc]]),Mt="ivu-radio",wc={name:"Radio",mixins:[Nn],emits:["update:modelValue","on-change"],inject:{RadioGroupInstance:{default:null}},props:{modelValue:{type:[String,Number,Boolean],default:!1},trueValue:{type:[String,Number,Boolean],default:!0},falseValue:{type:[String,Number,Boolean],default:!1},label:{type:[String,Number]},disabled:{type:Boolean,default:!1},size:{validator(e){return Ke(e,["small","large","default"])},default(){const e=et().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.size===""?"default":e.$VIEWUI.size}},name:{type:String},border:{type:Boolean,default:!1}},data(){return{groupName:this.name,parent:this.RadioGroupInstance,focusWrapper:!1,focusInner:!1}},computed:{wrapClasses(){return[`${Mt}-wrapper`,{[`${Mt}-group-item`]:this.group,[`${Mt}-wrapper-checked`]:this.currentValue,[`${Mt}-wrapper-disabled`]:this.itemDisabled,[`${Mt}-${this.size}`]:!!this.size,[`${Mt}-focus`]:this.focusWrapper,[`${Mt}-border`]:this.border}]},radioClasses(){return[`${Mt}`,{[`${Mt}-checked`]:this.currentValue,[`${Mt}-disabled`]:this.itemDisabled}]},innerClasses(){return[`${Mt}-inner`,{[`${Mt}-focus`]:this.focusInner}]},inputClasses(){return`${Mt}-input`},currentValue(){return this.RadioGroupInstance?this.RadioGroupInstance.currentValue===this.label:this.modelValue===this.trueValue},group(){return!!this.RadioGroupInstance}},mounted(){this.parent&&(this.name&&this.name!==this.parent.name?console.warn&&console.warn("[View UI] Name does not match Radio Group name."):this.groupName=this.parent.name)},methods:{change(e){if(this.itemDisabled)return!1;const n=e.target.checked?this.trueValue:this.falseValue;this.$emit("update:modelValue",n),this.group?this.label!==void 0&&this.parent.change({value:this.label,checked:this.modelValue}):(this.$emit("on-change",n),this.handleFormItemChange("change",n))},onBlur(){this.focusWrapper=!1,this.focusInner=!1},onFocus(){this.group&&this.parent.type==="button"?this.focusWrapper=!0:this.focusInner=!0}},watch:{modelValue(e){if(!(e===this.trueValue||e===this.falseValue))throw"Value should be trueValue or falseValue."}}},xc=["disabled","checked","name"];function Ec(e,t,n,l,o,i){return U(),ae("label",{class:G(i.wrapClasses)},[ie("span",{class:G(i.radioClasses)},[ie("span",{class:G(i.innerClasses)},null,2),ie("input",{type:"radio",class:G(i.inputClasses),disabled:e.itemDisabled,checked:i.currentValue,name:o.groupName,onChange:t[0]||(t[0]=(...d)=>i.change&&i.change(...d)),onFocus:t[1]||(t[1]=(...d)=>i.onFocus&&i.onFocus(...d)),onBlur:t[2]||(t[2]=(...d)=>i.onBlur&&i.onBlur(...d))},null,42,xc)],2),Te(e.$slots,"default",{},()=>[gn(wt(n.label),1)])],2)}const xo=tt(wc,[["render",Ec]]);var mi={exports:{}},Cc=mi.exports,Eo;function kc(){return Eo||(Eo=1,function(e,t){(function(n,l){e.exports=l()})(Cc,function(){var n=1e3,l=6e4,o=36e5,i="millisecond",d="second",g="minute",v="hour",p="day",m="week",x="month",y="quarter",k="year",S="date",A="Invalid Date",T=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,V=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,O={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(se){var J=["th","st","nd","rd"],te=se%100;return"["+se+(J[(te-20)%10]||J[te]||J[0])+"]"}},q=function(se,J,te){var Z=String(se);return!Z||Z.length>=J?se:""+Array(J+1-Z.length).join(te)+se},R={s:q,z:function(se){var J=-se.utcOffset(),te=Math.abs(J),Z=Math.floor(te/60),Y=te%60;return(J<=0?"+":"-")+q(Z,2,"0")+":"+q(Y,2,"0")},m:function se(J,te){if(J.date()<te.date())return-se(te,J);var Z=12*(te.year()-J.year())+(te.month()-J.month()),Y=J.clone().add(Z,x),W=te-Y<0,ge=J.clone().add(Z+(W?-1:1),x);return+(-(Z+(te-Y)/(W?Y-ge:ge-Y))||0)},a:function(se){return se<0?Math.ceil(se)||0:Math.floor(se)},p:function(se){return{M:x,y:k,w:m,d:p,D:S,h:v,m:g,s:d,ms:i,Q:y}[se]||String(se||"").toLowerCase().replace(/s$/,"")},u:function(se){return se===void 0}},F="en",C={};C[F]=O;var N="$isDayjsObject",z=function(se){return se instanceof ye||!(!se||!se[N])},X=function se(J,te,Z){var Y;if(!J)return F;if(typeof J=="string"){var W=J.toLowerCase();C[W]&&(Y=W),te&&(C[W]=te,Y=W);var ge=J.split("-");if(!Y&&ge.length>1)return se(ge[0])}else{var Se=J.name;C[Se]=J,Y=Se}return!Z&&Y&&(F=Y),Y||!Z&&F},H=function(se,J){if(z(se))return se.clone();var te=typeof J=="object"?J:{};return te.date=se,te.args=arguments,new ye(te)},oe=R;oe.l=X,oe.i=z,oe.w=function(se,J){return H(se,{locale:J.$L,utc:J.$u,x:J.$x,$offset:J.$offset})};var ye=function(){function se(te){this.$L=X(te.locale,null,!0),this.parse(te),this.$x=this.$x||te.x||{},this[N]=!0}var J=se.prototype;return J.parse=function(te){this.$d=function(Z){var Y=Z.date,W=Z.utc;if(Y===null)return new Date(NaN);if(oe.u(Y))return new Date;if(Y instanceof Date)return new Date(Y);if(typeof Y=="string"&&!/Z$/i.test(Y)){var ge=Y.match(T);if(ge){var Se=ge[2]-1||0,De=(ge[7]||"0").substring(0,3);return W?new Date(Date.UTC(ge[1],Se,ge[3]||1,ge[4]||0,ge[5]||0,ge[6]||0,De)):new Date(ge[1],Se,ge[3]||1,ge[4]||0,ge[5]||0,ge[6]||0,De)}}return new Date(Y)}(te),this.init()},J.init=function(){var te=this.$d;this.$y=te.getFullYear(),this.$M=te.getMonth(),this.$D=te.getDate(),this.$W=te.getDay(),this.$H=te.getHours(),this.$m=te.getMinutes(),this.$s=te.getSeconds(),this.$ms=te.getMilliseconds()},J.$utils=function(){return oe},J.isValid=function(){return this.$d.toString()!==A},J.isSame=function(te,Z){var Y=H(te);return this.startOf(Z)<=Y&&Y<=this.endOf(Z)},J.isAfter=function(te,Z){return H(te)<this.startOf(Z)},J.isBefore=function(te,Z){return this.endOf(Z)<H(te)},J.$g=function(te,Z,Y){return oe.u(te)?this[Z]:this.set(Y,te)},J.unix=function(){return Math.floor(this.valueOf()/1e3)},J.valueOf=function(){return this.$d.getTime()},J.startOf=function(te,Z){var Y=this,W=!!oe.u(Z)||Z,ge=oe.p(te),Se=function(_e,K){var be=oe.w(Y.$u?Date.UTC(Y.$y,K,_e):new Date(Y.$y,K,_e),Y);return W?be:be.endOf(p)},De=function(_e,K){return oe.w(Y.toDate()[_e].apply(Y.toDate("s"),(W?[0,0,0,0]:[23,59,59,999]).slice(K)),Y)},Me=this.$W,Ne=this.$M,qe=this.$D,Ve="set"+(this.$u?"UTC":"");switch(ge){case k:return W?Se(1,0):Se(31,11);case x:return W?Se(1,Ne):Se(0,Ne+1);case m:var ze=this.$locale().weekStart||0,Ae=(Me<ze?Me+7:Me)-ze;return Se(W?qe-Ae:qe+(6-Ae),Ne);case p:case S:return De(Ve+"Hours",0);case v:return De(Ve+"Minutes",1);case g:return De(Ve+"Seconds",2);case d:return De(Ve+"Milliseconds",3);default:return this.clone()}},J.endOf=function(te){return this.startOf(te,!1)},J.$set=function(te,Z){var Y,W=oe.p(te),ge="set"+(this.$u?"UTC":""),Se=(Y={},Y[p]=ge+"Date",Y[S]=ge+"Date",Y[x]=ge+"Month",Y[k]=ge+"FullYear",Y[v]=ge+"Hours",Y[g]=ge+"Minutes",Y[d]=ge+"Seconds",Y[i]=ge+"Milliseconds",Y)[W],De=W===p?this.$D+(Z-this.$W):Z;if(W===x||W===k){var Me=this.clone().set(S,1);Me.$d[Se](De),Me.init(),this.$d=Me.set(S,Math.min(this.$D,Me.daysInMonth())).$d}else Se&&this.$d[Se](De);return this.init(),this},J.set=function(te,Z){return this.clone().$set(te,Z)},J.get=function(te){return this[oe.p(te)]()},J.add=function(te,Z){var Y,W=this;te=Number(te);var ge=oe.p(Z),Se=function(Ne){var qe=H(W);return oe.w(qe.date(qe.date()+Math.round(Ne*te)),W)};if(ge===x)return this.set(x,this.$M+te);if(ge===k)return this.set(k,this.$y+te);if(ge===p)return Se(1);if(ge===m)return Se(7);var De=(Y={},Y[g]=l,Y[v]=o,Y[d]=n,Y)[ge]||1,Me=this.$d.getTime()+te*De;return oe.w(Me,this)},J.subtract=function(te,Z){return this.add(-1*te,Z)},J.format=function(te){var Z=this,Y=this.$locale();if(!this.isValid())return Y.invalidDate||A;var W=te||"YYYY-MM-DDTHH:mm:ssZ",ge=oe.z(this),Se=this.$H,De=this.$m,Me=this.$M,Ne=Y.weekdays,qe=Y.months,Ve=Y.meridiem,ze=function(K,be,Le,nt){return K&&(K[be]||K(Z,W))||Le[be].slice(0,nt)},Ae=function(K){return oe.s(Se%12||12,K,"0")},_e=Ve||function(K,be,Le){var nt=K<12?"AM":"PM";return Le?nt.toLowerCase():nt};return W.replace(V,function(K,be){return be||function(Le){switch(Le){case"YY":return String(Z.$y).slice(-2);case"YYYY":return oe.s(Z.$y,4,"0");case"M":return Me+1;case"MM":return oe.s(Me+1,2,"0");case"MMM":return ze(Y.monthsShort,Me,qe,3);case"MMMM":return ze(qe,Me);case"D":return Z.$D;case"DD":return oe.s(Z.$D,2,"0");case"d":return String(Z.$W);case"dd":return ze(Y.weekdaysMin,Z.$W,Ne,2);case"ddd":return ze(Y.weekdaysShort,Z.$W,Ne,3);case"dddd":return Ne[Z.$W];case"H":return String(Se);case"HH":return oe.s(Se,2,"0");case"h":return Ae(1);case"hh":return Ae(2);case"a":return _e(Se,De,!0);case"A":return _e(Se,De,!1);case"m":return String(De);case"mm":return oe.s(De,2,"0");case"s":return String(Z.$s);case"ss":return oe.s(Z.$s,2,"0");case"SSS":return oe.s(Z.$ms,3,"0");case"Z":return ge}return null}(K)||ge.replace(":","")})},J.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},J.diff=function(te,Z,Y){var W,ge=this,Se=oe.p(Z),De=H(te),Me=(De.utcOffset()-this.utcOffset())*l,Ne=this-De,qe=function(){return oe.m(ge,De)};switch(Se){case k:W=qe()/12;break;case x:W=qe();break;case y:W=qe()/3;break;case m:W=(Ne-Me)/6048e5;break;case p:W=(Ne-Me)/864e5;break;case v:W=Ne/o;break;case g:W=Ne/l;break;case d:W=Ne/n;break;default:W=Ne}return Y?W:oe.a(W)},J.daysInMonth=function(){return this.endOf(x).$D},J.$locale=function(){return C[this.$L]},J.locale=function(te,Z){if(!te)return this.$L;var Y=this.clone(),W=X(te,Z,!0);return W&&(Y.$L=W),Y},J.clone=function(){return oe.w(this.$d,this)},J.toDate=function(){return new Date(this.valueOf())},J.toJSON=function(){return this.isValid()?this.toISOString():null},J.toISOString=function(){return this.$d.toISOString()},J.toString=function(){return this.$d.toUTCString()},se}(),pe=ye.prototype;return H.prototype=pe,[["$ms",i],["$s",d],["$m",g],["$H",v],["$W",p],["$M",x],["$y",k],["$D",S]].forEach(function(se){pe[se[1]]=function(J){return this.$g(J,se[0],se[1])}}),H.extend=function(se,J){return se.$i||(se(J,ye,H),se.$i=!0),H},H.locale=X,H.isDayjs=z,H.unix=function(se){return H(1e3*se)},H.en=C[F],H.Ls=C,H.p={},H})}(mi)),mi.exports}kc();const on="ivu-col";function Bc(e){return typeof e=="number"?`${e} ${e} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?`0 0 ${e}`:e}const Sc={name:"iCol",inject:["RowInstance"],props:{span:[Number,String],order:[Number,String],offset:[Number,String],push:[Number,String],pull:[Number,String],className:String,xs:[Number,Object],sm:[Number,Object],md:[Number,Object],lg:[Number,Object],xl:[Number,Object],xxl:[Number,Object],flex:{type:[Number,String],default:""}},computed:{gutter(){return this.RowInstance.gutter},classes(){let e=[`${on}`,{[`${on}-span-${this.span}`]:this.span,[`${on}-order-${this.order}`]:this.order,[`${on}-offset-${this.offset}`]:this.offset,[`${on}-push-${this.push}`]:this.push,[`${on}-pull-${this.pull}`]:this.pull,[`${this.className}`]:!!this.className}];return["xs","sm","md","lg","xl","xxl"].forEach(t=>{if(typeof this[t]=="number")e.push(`${on}-span-${t}-${this[t]}`);else if(typeof this[t]=="object"){let n=this[t];Object.keys(n).forEach(l=>{e.push(l!=="span"?`${on}-${t}-${l}-${n[l]}`:`${on}-span-${t}-${n[l]}`)})}}),e},styles(){let e={};return this.gutter!==0&&(e={paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}),this.flex&&(e.flex=Bc(this.flex)),e}}};function Ic(e,t,n,l,o,i){return U(),ae("div",{class:G(i.classes),style:je(i.styles)},[Te(e.$slots,"default")],6)}const Ea=tt(Sc,[["render",Ic]]),Sn="ivu-row",Tc={name:"Row",provide(){return{RowInstance:this}},props:{type:{validator(e){return Ke(e,["flex"])}},align:{validator(e){return Ke(e,["top","middle","bottom"])}},justify:{validator(e){return Ke(e,["start","end","center","space-around","space-between"])}},gutter:{type:Number,default:0},className:String,wrap:{type:Boolean,default:!0}},computed:{classes(){return[`${Sn}`,{[`${Sn}-${this.type}`]:!!this.type,[`${Sn}-${this.type}-${this.align}`]:!!this.align&&this.type,[`${Sn}-${this.type}-${this.justify}`]:!!this.justify&&this.type,[`${Sn}-${this.align}`]:!!this.align,[`${Sn}-${this.justify}`]:!!this.justify,[`${this.className}`]:!!this.className,[`${Sn}-no-wrap`]:!this.wrap}]},styles(){let e={};return this.gutter!==0&&(e={marginLeft:this.gutter/-2+"px",marginRight:this.gutter/-2+"px"}),e}}};function Lc(e,t,n,l,o,i){return U(),ae("div",{class:G(i.classes),style:je(i.styles)},[Te(e.$slots,"default")],6)}const Yl=tt(Tc,[["render",Lc]]),In="ivu-card",Co=16,Dc={name:"Card",mixins:[qa],components:{Icon:Kt},props:{bordered:{type:Boolean,default:!0},disHover:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1},padding:{type:Number,default:Co},title:{type:String},icon:{type:String}},data(){return{showHead:!0,showExtra:!0}},computed:{classes(){return[`${In}`,{[`${In}-bordered`]:this.bordered&&!this.shadow,[`${In}-dis-hover`]:this.disHover||this.shadow,[`${In}-shadow`]:this.shadow}]},headClasses(){return`${In}-head`},extraClasses(){return`${In}-extra`},bodyClasses(){return`${In}-body`},bodyStyles(){return this.padding!==Co?{padding:`${this.padding}px`}:""},isHrefPattern(){const{to:e}=this;return!!e},tagName(){const{isHrefPattern:e}=this;return e?"a":"div"},tagProps(){const{isHrefPattern:e}=this;if(e){const{linkUrl:t,target:n}=this;return{href:t,target:n}}else return{}}},methods:{handleClickLink(e){if(!this.isHrefPattern)return;const t=e.ctrlKey||e.metaKey;this.handleCheckClick(e,t)}},mounted(){this.showHead=this.title||this.$slots.title!==void 0,this.showExtra=this.$slots.extra!==void 0}},Oc={key:0};function zc(e,t,n,l,o,i){const d=xt("Icon");return U(),lt(fu(i.tagName),Li({class:i.classes},i.tagProps,{onClick:i.handleClickLink}),{default:Re(()=>[o.showHead?(U(),ae("div",{key:0,class:G(i.headClasses)},[Te(e.$slots,"title",{},()=>[n.title?(U(),ae("p",Oc,[n.icon?(U(),lt(d,{key:0,type:n.icon},null,8,["type"])):Ee("",!0),ie("span",null,wt(n.title),1)])):Ee("",!0)])],2)):Ee("",!0),o.showExtra?(U(),ae("div",{key:1,class:G(i.extraClasses)},[Te(e.$slots,"extra")],2)):Ee("",!0),ie("div",{class:G(i.bodyClasses),style:je(i.bodyStyles)},[Te(e.$slots,"default")],6)]),_:3},16,["class","onClick"])}const Ca=tt(Dc,[["render",zc]]),Mc={beforeMount(e,t,n){function l(o){if(e.contains(o.target))return!1;t.value(o)}e.__vueClickOutside__=l,He&&document.addEventListener("click",l)},unmounted(e,t){He&&document.removeEventListener("click",e.__vueClickOutside__),delete e.__vueClickOutside__}},Nc={name:"CellItem",props:{title:{type:String,default:""},label:{type:String,default:""},extra:{type:String,default:""}}},Pc={class:"ivu-cell-item"},Vc={class:"ivu-cell-icon"},Rc={class:"ivu-cell-main"},qc={class:"ivu-cell-title"},Fc={class:"ivu-cell-label"},_c={class:"ivu-cell-footer"},$c={class:"ivu-cell-extra"};function Wc(e,t,n,l,o,i){return U(),ae("div",Pc,[ie("div",Vc,[Te(e.$slots,"icon")]),ie("div",Rc,[ie("div",qc,[Te(e.$slots,"default",{},()=>[gn(wt(n.title),1)])]),ie("div",Fc,[Te(e.$slots,"label",{},()=>[gn(wt(n.label),1)])])]),ie("div",_c,[ie("span",$c,[Te(e.$slots,"extra",{},()=>[gn(wt(n.extra),1)])])])])}const jc=tt(Nc,[["render",Wc]]),Dr="ivu-cell",Hc={name:"Cell",inject:["CellGroupInstance"],mixins:[qa,Qu],components:{CellItem:jc,Icon:Kt},props:{name:{type:[String,Number]},title:{type:String,default:""},label:{type:String,default:""},extra:{type:String,default:""},disabled:{type:Boolean,default:!1},selected:{type:Boolean,default:!1}},data(){return{prefixCls:Dr}},computed:{classes(){return[`${Dr}`,{[`${Dr}-disabled`]:this.disabled,[`${Dr}-selected`]:this.selected,[`${Dr}-with-link`]:this.to}]},arrowType(){const e=this.globalConfig;let t="ios-arrow-forward";return e&&(e.cell.customArrow?t="":e.cell.arrow&&(t=e.cell.arrow)),t},customArrowType(){const e=this.globalConfig;let t="";return e&&e.cell.customArrow&&(t=e.cell.customArrow),t},arrowSize(){const e=this.globalConfig;let t="";return e&&e.cell.arrowSize&&(t=e.cell.arrowSize),t}},methods:{handleClickItem(e,t){this.CellGroupInstance.handleClick(this.name),this.handleCheckClick(e,t)}}},Uc=["href","target"],Qc={key:2,class:"ivu-cell-arrow"};function Yc(e,t,n,l,o,i){const d=xt("CellItem"),g=xt("Icon");return U(),ae("div",{class:G(i.classes)},[e.to?(U(),ae("a",{key:0,href:e.linkUrl,target:e.target,class:"ivu-cell-link",onClick:[t[0]||(t[0]=Ze(v=>i.handleClickItem(v,!1),["exact"])),t[1]||(t[1]=Ze(v=>i.handleClickItem(v,!0),["ctrl"])),t[2]||(t[2]=Ze(v=>i.handleClickItem(v,!0),["meta"]))]},[j(d,{title:n.title,label:n.label,extra:n.extra},{icon:Re(()=>[Te(e.$slots,"icon")]),default:Re(()=>[Te(e.$slots,"default")]),extra:Re(()=>[Te(e.$slots,"extra")]),label:Re(()=>[Te(e.$slots,"label")]),_:3},8,["title","label","extra"])],8,Uc)):(U(),ae("div",{key:1,class:"ivu-cell-link",onClick:t[3]||(t[3]=(...v)=>i.handleClickItem&&i.handleClickItem(...v))},[j(d,{title:n.title,label:n.label,extra:n.extra},{icon:Re(()=>[Te(e.$slots,"icon")]),default:Re(()=>[Te(e.$slots,"default")]),extra:Re(()=>[Te(e.$slots,"extra")]),label:Re(()=>[Te(e.$slots,"label")]),_:3},8,["title","label","extra"])])),e.to?(U(),ae("div",Qc,[Te(e.$slots,"arrow",{},()=>[j(g,{type:i.arrowType,custom:i.customArrowType,size:i.arrowSize},null,8,["type","custom","size"])])])):Ee("",!0)],2)}const Nt=tt(Hc,[["render",Yc]]),Kc={name:"CellGroup",emits:["on-click"],provide(){return{CellGroupInstance:this}},methods:{handleClick(e){this.$emit("on-click",e)}}},Xc={class:"ivu-cell-group"};function Gc(e,t,n,l,o,i){return U(),ae("div",Xc,[Te(e.$slots,"default")])}const Si=tt(Kc,[["render",Gc]]),ri="ivu-dropdown",Jc={name:"Dropdown",directives:{clickOutside:Mc},components:{Drop:qu},emits:["on-visible-change","on-clickoutside","on-click","on-hover-click","on-haschild-click"],props:{trigger:{validator(e){return Ke(e,["click","hover","custom","contextMenu"])},default:"hover"},placement:{validator(e){return Ke(e,["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"])},default:"bottom"},visible:{type:Boolean,default:!1},transfer:{type:Boolean,default(){const e=et().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.transfer===""?!1:e.$VIEWUI.transfer}},transferClassName:{type:String},stopPropagation:{type:Boolean,default:!1},capture:{type:Boolean,default(){const e=et().appContext.config.globalProperties;return e.$VIEWUI?e.$VIEWUI.capture:!0}},eventsEnabled:{type:Boolean,default:!1},boundariesElement:{default:"window"}},computed:{transition(){return["bottom-start","bottom","bottom-end"].indexOf(this.placement)>-1?"slide-up":"fade"},dropdownCls(){return{[ri+"-transfer"]:this.transfer,[this.transferClassName]:this.transferClassName}},relClasses(){return[`${ri}-rel`,{[`${ri}-rel-user-select-none`]:this.trigger==="contextMenu"}]}},data(){return{prefixCls:ri,currentVisible:this.visible,timeout:null}},watch:{visible(e){this.currentVisible=e},currentVisible(e){e?this.$refs.drop.update():this.$refs.drop.destroy(),this.$emit("on-visible-change",e)}},methods:{handleClick(){if(this.trigger==="custom"||this.trigger!=="click")return!1;this.hasParent()||(this.currentVisible=!this.currentVisible)},handleRightClick(){if(this.trigger==="custom"||this.trigger!=="contextMenu")return!1;this.currentVisible=!this.currentVisible},handleMouseenter(){if(this.trigger==="custom"||this.trigger!=="hover")return!1;this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{this.currentVisible=!0},250)},handleMouseleave(){if(this.trigger==="custom"||this.trigger!=="hover")return!1;this.timeout&&(clearTimeout(this.timeout),this.timeout=setTimeout(()=>{this.currentVisible=!1},150))},onClickoutside(e){this.handleClose(),this.handleRightClose(),this.currentVisible&&this.$emit("on-clickoutside",e)},handleClose(){if(this.trigger==="custom"||this.trigger!=="click")return!1;this.currentVisible=!1},handleRightClose(){if(this.trigger==="custom"||this.trigger!=="contextMenu")return!1;this.currentVisible=!1},hasParent(){const e=Bi(this,"Dropdown");return e||!1},handleHaschildClick(){It(()=>{if(this.trigger==="custom")return!1;this.currentVisible=!0});const e=this.hasParent();e&&e.handleHaschildClick()},handleItemClick(e){if(this.stopPropagation)return;const t=this.hasParent();t?t.handleItemClick(e):this.$emit("on-click",e)},handleHoverClick(){const e=this.hasParent();e?(It(()=>{if(this.trigger==="custom")return!1;this.currentVisible=!1}),e.handleHoverClick()):It(()=>{if(this.trigger==="custom")return!1;this.currentVisible=!1})}}};function Zc(e,t,n,l,o,i){const d=xt("Drop"),g=mu("click-outside");return St((U(),ae("div",{class:G([o.prefixCls]),onMouseenter:t[2]||(t[2]=(...v)=>i.handleMouseenter&&i.handleMouseenter(...v)),onMouseleave:t[3]||(t[3]=(...v)=>i.handleMouseleave&&i.handleMouseleave(...v))},[ie("div",{class:G(i.relClasses),ref:"reference",onClick:t[0]||(t[0]=(...v)=>i.handleClick&&i.handleClick(...v)),onContextmenu:t[1]||(t[1]=Ze((...v)=>i.handleRightClick&&i.handleRightClick(...v),["prevent"]))},[Te(e.$slots,"default")],34),j(d,{ref:"drop",visible:o.currentVisible,classes:i.dropdownCls,placement:n.placement,eventsEnabled:n.eventsEnabled,boundariesElement:n.boundariesElement,transfer:n.transfer,"transition-name":"transition-drop",onMouseenter:i.handleMouseenter,onMouseleave:i.handleMouseleave},{default:Re(()=>[Te(e.$slots,"list")]),_:3},8,["visible","classes","placement","eventsEnabled","boundariesElement","transfer","onMouseenter","onMouseleave"])],34)),[[g,i.onClickoutside]])}const ep=tt(Jc,[["render",Zc]]);var tp={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};np(tp);function np(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}const rp={name:"RenderCell",props:{render:Function},render(){return this.render(Xe)}},ip={components:{RenderCell:rp},props:{prefixCls:{type:String,default:""},duration:{type:Number,default:1.5},type:{type:String},content:{type:String,default:""},withIcon:Boolean,render:{type:Function},hasTitle:Boolean,styles:{type:Object,default:function(){return{right:"50%"}}},closable:{type:Boolean,default:!1},className:{type:String},name:{type:String,required:!0},onClose:{type:Function},transitionName:{type:String},background:{type:Boolean,default:!1},msgType:{type:String}},data(){return{withDesc:!1}},computed:{baseClass(){return`${this.prefixCls}-notice`},renderFunc(){return this.render||function(){}},classes(){return[this.baseClass,{[`${this.className}`]:!!this.className,[`${this.baseClass}-closable`]:this.closable,[`${this.baseClass}-with-desc`]:this.withDesc,[`${this.baseClass}-with-background`]:this.background}]},contentClasses(){return[`${this.baseClass}-content`,this.render!==void 0?`${this.baseClass}-content-with-render`:""]},messageContentClasses(){return[`${this.baseClass}-content`,{[`${this.baseClass}-content-${this.msgType}`]:this.msgType,[`${this.baseClass}-content-background`]:this.background}]},contentWithIcon(){return[this.withIcon?`${this.prefixCls}-content-with-icon`:"",!this.hasTitle&&this.withIcon?`${this.prefixCls}-content-with-render-notitle`:""]},messageClasses(){return[`${this.baseClass}-content`,this.render!==void 0?`${this.baseClass}-content-with-render`:""]}},methods:{clearCloseTimer(){this.closeTimer&&(clearTimeout(this.closeTimer),this.closeTimer=null)},close(){this.clearCloseTimer(),this.onClose(),this.$parent.$parent.close(this.name)},handleEnter(e){this.type==="message"&&(e.style.height=e.scrollHeight+"px")},handleLeave(e){this.type==="message"&&He&&document.getElementsByClassName("ivu-message-notice").length!==1&&(e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0)}},mounted(){if(this.handleEnter(this.$el),this.clearCloseTimer(),this.duration!==0&&(this.closeTimer=setTimeout(()=>{this.close()},this.duration*1e3)),this.prefixCls==="ivu-notice"){let e=this.$refs.content.querySelectorAll(`.${this.prefixCls}-desc`)[0];this.withDesc=this.render?!0:e?e.innerHTML!=="":!1}},beforeUnmount(){this.handleLeave(this.$el),this.clearCloseTimer()}},ap=["innerHTML"],op=["innerHTML"];function lp(e,t,n,l,o,i){const d=xt("render-cell");return U(),ae("div",{class:G(i.classes),style:je(n.styles)},[n.type==="notice"?(U(),ae(un,{key:0},[ie("div",{class:G(i.contentClasses),ref:"content",innerHTML:n.content},null,10,ap),ie("div",{class:G(i.contentWithIcon)},[j(d,{render:i.renderFunc},null,8,["render"])],2),n.closable?(U(),ae("a",{key:0,class:G([i.baseClass+"-close"]),onClick:t[0]||(t[0]=(...g)=>i.close&&i.close(...g))},t[2]||(t[2]=[ie("i",{class:"ivu-icon ivu-icon-ios-close"},null,-1)]),2)):Ee("",!0)],64)):Ee("",!0),n.type==="message"?(U(),ae("div",{key:1,class:G(i.messageContentClasses),ref:"content"},[ie("div",{class:G([i.baseClass+"-content-text"]),innerHTML:n.content},null,10,op),ie("div",{class:G([i.baseClass+"-content-text"])},[j(d,{render:i.renderFunc},null,8,["render"])],2),n.closable?(U(),ae("a",{key:0,class:G([i.baseClass+"-close"]),onClick:t[1]||(t[1]=(...g)=>i.close&&i.close(...g))},t[3]||(t[3]=[ie("i",{class:"ivu-icon ivu-icon-ios-close"},null,-1)]),2)):Ee("",!0)],2)):Ee("",!0)],6)}const sp=tt(ip,[["render",lp]]),dp="ivu-notification";let up=0;const cp=Date.now();function pp(){return"ivuNotification_"+cp+"_"+up++}const hp={components:{Notice:sp},props:{prefixCls:{type:String,default:dp},styles:{type:Object,default:function(){return{top:"65px",left:"50%"}}},content:{type:String},className:{type:String},transitionName:{type:String}},data(){return{notices:[],tIndex:this.handleGetIndex()}},computed:{classes(){return[`${this.prefixCls}`,{[`${this.className}`]:!!this.className}]},wrapStyles(){let e=Object.assign({},this.styles);return e["z-index"]=1010+this.tIndex,e}},methods:{add(e){const t=e.name||pp();let n=Object.assign({styles:{right:"50%"},content:"",duration:1.5,closable:!1,name:t},e);this.notices.push(n),this.tIndex=this.handleGetIndex()},close(e){const t=this.notices;for(let n=0;n<t.length;n++)if(t[n].name===e){this.notices.splice(n,1);break}},closeAll(){this.notices=[]},handleGetIndex(){return ir(),Mn}}};function fp(e,t,n,l,o,i){const d=xt("Notice");return U(),ae("div",{class:G(i.classes),style:je(i.wrapStyles)},[j(yu,{name:n.transitionName,appear:""},{default:Re(()=>[(U(!0),ae(un,null,pi(o.notices,g=>(U(),lt(d,{key:g.name,"prefix-cls":n.prefixCls,styles:g.styles,type:g.type,content:g.content,duration:g.duration,render:g.render,"has-title":g.hasTitle,withIcon:g.withIcon,closable:g.closable,name:g.name,"transition-name":g.transitionName,background:g.background,"msg-type":g.msgType,"on-close":g.onClose},null,8,["prefix-cls","styles","type","content","duration","render","has-title","withIcon","closable","name","transition-name","background","msg-type","on-close"]))),128))]),_:1},8,["name"])],6)}const ka=tt(hp,[["render",fp]]);ka.newInstance=e=>{if(!He)return;const t=e||{};let n=null;const l=Hr({render(){return Xe(ka,Object.assign({ref:"notification"},t))},created(){n=et()}}),o=document.createElement("div");document.body.appendChild(o),l.mount(o);const i=n.refs.notification;return{notice(d){i.add(d)},remove(d){i.close(d)},component:i,destroy(d){i.closeAll(),He&&setTimeout(function(){document.body.removeChild(document.getElementsByClassName(d)[0])},500)}}};const Ba="ivu-message",ko="ivu-icon",Bo="ivu_message_key_",Zn={top:24,duration:1.5,background:!1};let yi,So=1;const mp={info:"ios-information-circle",success:"ios-checkmark-circle",warning:"ios-alert",error:"ios-close-circle",loading:"ios-loading"},Kl="move-up";function Xl(){return yi=yi||ka.newInstance({prefixCls:Ba,styles:{top:`${Zn.top}px`},transitionName:Kl}),yi}function yp(e="",t=Zn.duration,n,l=function(){},o=!1,i=function(){},d=Zn.background){const g=mp[n],v=n==="loading"?" ivu-load-loop":"";let p=Xl();return p.notice({name:`${Bo}${So}`,duration:t,styles:{},transitionName:Kl,content:`
            <div class="${Ba}-custom-content ${Ba}-${n}">
                <i class="${ko} ${ko}-${g} ${v}"></i>
                <span>${e}</span>
            </div>
        `,render:i,onClose:l,closable:o,type:"message",msgType:n,background:d}),function(){let m=So++;return function(){p.remove(`${Bo}${m}`)}}()}const en={name:"Message",info(e){return this.message("info",e)},success(e){return this.message("success",e)},warning(e){return this.message("warning",e)},error(e){return this.message("error",e)},loading(e){return this.message("loading",e)},message(e,t){return typeof t=="string"&&(t={content:t}),yp(t.content,t.duration,e,t.onClose,t.closable,t.render,t.background)},config(e){(e.top||e.top===0)&&(Zn.top=e.top),(e.duration||e.duration===0)&&(Zn.duration=e.duration),e.background&&(Zn.background=e.background)},destroy(){let e=Xl();yi=null,e.destroy("ivu-message")}};function Ap(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Mr={exports:{}},gp=Mr.exports,Io;function bp(){return Io||(Io=1,function(e,t){(function(n,l){e.exports=l(Ap,t,e)})(gp,function(n,l,o){var i=function(d,g,v,p,m,x){function y(R){var F,C,N,z,X,H,oe=R<0;if(R=Math.abs(R).toFixed(A.decimals),R+="",F=R.split("."),C=F[0],N=F.length>1?A.options.decimal+F[1]:"",A.options.useGrouping){for(z="",X=0,H=C.length;X<H;++X)X!==0&&X%3===0&&(z=A.options.separator+z),z=C[H-X-1]+z;C=z}return A.options.numerals.length&&(C=C.replace(/[0-9]/g,function(ye){return A.options.numerals[+ye]}),N=N.replace(/[0-9]/g,function(ye){return A.options.numerals[+ye]})),(oe?"-":"")+A.options.prefix+C+N+A.options.suffix}function k(R,F,C,N){return C*(-Math.pow(2,-10*R/N)+1)*1024/1023+F}function S(R){return typeof R=="number"&&!isNaN(R)}var A=this;if(A.version=function(){return"1.9.3"},A.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:k,formattingFn:y,prefix:"",suffix:"",numerals:[]},x&&typeof x=="object")for(var T in A.options)x.hasOwnProperty(T)&&x[T]!==null&&(A.options[T]=x[T]);A.options.separator===""?A.options.useGrouping=!1:A.options.separator=""+A.options.separator;for(var V=0,O=["webkit","moz","ms","o"],q=0;q<O.length&&!window.requestAnimationFrame;++q)window.requestAnimationFrame=window[O[q]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[O[q]+"CancelAnimationFrame"]||window[O[q]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(R,F){var C=new Date().getTime(),N=Math.max(0,16-(C-V)),z=window.setTimeout(function(){R(C+N)},N);return V=C+N,z}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(R){clearTimeout(R)}),A.initialize=function(){return!!A.initialized||(A.error="",A.d=typeof d=="string"?document.getElementById(d):d,A.d?(A.startVal=Number(g),A.endVal=Number(v),S(A.startVal)&&S(A.endVal)?(A.decimals=Math.max(0,p||0),A.dec=Math.pow(10,A.decimals),A.duration=1e3*Number(m)||2e3,A.countDown=A.startVal>A.endVal,A.frameVal=A.startVal,A.initialized=!0,!0):(A.error="[CountUp] startVal ("+g+") or endVal ("+v+") is not a number",!1)):(A.error="[CountUp] target is null or undefined",!1))},A.printValue=function(R){var F=A.options.formattingFn(R);A.d.tagName==="INPUT"?this.d.value=F:A.d.tagName==="text"||A.d.tagName==="tspan"?this.d.textContent=F:this.d.innerHTML=F},A.count=function(R){A.startTime||(A.startTime=R),A.timestamp=R;var F=R-A.startTime;A.remaining=A.duration-F,A.options.useEasing?A.countDown?A.frameVal=A.startVal-A.options.easingFn(F,0,A.startVal-A.endVal,A.duration):A.frameVal=A.options.easingFn(F,A.startVal,A.endVal-A.startVal,A.duration):A.countDown?A.frameVal=A.startVal-(A.startVal-A.endVal)*(F/A.duration):A.frameVal=A.startVal+(A.endVal-A.startVal)*(F/A.duration),A.countDown?A.frameVal=A.frameVal<A.endVal?A.endVal:A.frameVal:A.frameVal=A.frameVal>A.endVal?A.endVal:A.frameVal,A.frameVal=Math.round(A.frameVal*A.dec)/A.dec,A.printValue(A.frameVal),F<A.duration?A.rAF=requestAnimationFrame(A.count):A.callback&&A.callback()},A.start=function(R){A.initialize()&&(A.callback=R,A.rAF=requestAnimationFrame(A.count))},A.pauseResume=function(){A.paused?(A.paused=!1,delete A.startTime,A.duration=A.remaining,A.startVal=A.frameVal,requestAnimationFrame(A.count)):(A.paused=!0,cancelAnimationFrame(A.rAF))},A.reset=function(){A.paused=!1,delete A.startTime,A.initialized=!1,A.initialize()&&(cancelAnimationFrame(A.rAF),A.printValue(A.startVal))},A.update=function(R){if(A.initialize()){if(R=Number(R),!S(R))return void(A.error="[CountUp] update() - new endVal is not a number: "+R);A.error="",R!==A.frameVal&&(cancelAnimationFrame(A.rAF),A.paused=!1,delete A.startTime,A.startVal=A.frameVal,A.endVal=R,A.countDown=A.startVal>A.endVal,A.rAF=requestAnimationFrame(A.count))}},A.initialize()&&A.printValue(A.startVal)};return i})}(Mr,Mr.exports)),Mr.exports}bp();function Gl(e,t){for(var n=[],l=0,o=e.length;l<o;l++)n.push(e[l].substr(0,t));return n}var vp=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],wp=["January","February","March","April","May","June","July","August","September","October","November","December"];Gl(wp,3);Gl(vp,3);var Ki,To;function xp(){if(To)return Ki;To=1;var e=1e3*60*60*24;function t(i,d){return new Date(i,d+1,0).getDate()}function n(i,d,g){return d===0&&g>50?i-1:d===11&&g<10?i+1:i}function l(i,d,g,v){d>11&&(d=0,i++);var p=new Date(i,d,g);v&&p.setDate(p.getDate()+4-(p.getDay()||7));var m=v?p.getFullYear():i,x=new Date(m,0,1),y=1+Math.round((p-x)/e);v||(y+=x.getDay());var k=Math.ceil(y/7);if(!v){var S=new Date(i,d,g),A=new Date(i+1,0,1),T=A.getDay();S.getTime()>=A.getTime()-e*T&&(k=1)}return k}function o(i,d,g){for(var v=this.lang||"en",p=this.onlyDays,m=typeof this.weekStart>"u"?1:this.weekStart,x=m===1,y=[],k=new Date(i,d,1),S=k.getDay()||(x?7:0),A=m-S,T=l(i,d,1,x),V=t(i,d),O=t(i,d-1),q,R,F,C=n(i,d,T),N={month:d,year:i,daysInMonth:V},z=0;z<7;z++){F=A;for(var X=0;X<8;X++){z>0&&X>0&&A++,A>V||A<1?(R=A>V?A-V:O+A,q=A>V?d+1:d-1):(R=A,q=d);var H=function(){return X===0?"weekLabel":z===0?"dayLabel":A<1?"prevMonth":A>V?"nextMonth":"monthDay"}(),oe=F!==A&&z>0,ye={desc:oe?R:T,week:T,type:H,format:x?"ISO 8601":"US",date:oe?new Date(Date.UTC(i,q,R)):!1,year:C,index:y.length};g&&(typeof g=="function"?ye=g.call(N,ye,v):g.forEach(function(pe){ye=pe.call(N,ye,v)})),p&&oe?y.push(ye):p||y.push(ye)}z>0&&(T=l(i,q,R+1,x)),C=n(i,d,T)}return N.cells=y,N}return Ki=function(i){return o.bind(i)},Ki}var Xi,Lo;function Ep(){return Lo||(Lo=1,Xi={weekPlaceholder:"",columnNames:{en:{0:"w",1:"monday",2:"tuesday",3:"wednesday",4:"thursday",5:"friday",6:"saturday",7:"sunday"},sv:{0:"v",1:"måndag",2:"tisdag",3:"onsdag",4:"torsdag",5:"fredag",6:"lördag",7:"söndag"},pt:{0:"s",1:"segunda",2:"terça",3:"quarta",4:"quinta",5:"sexta",6:"sábado",7:"domingo"}},monthNames:{en:["January","February","March","April","May","June","July","August","September","October","November","December"],sv:["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"],pt:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]},classes:{dayLabel:"day-of-week",weekLabel:"week-number",prevMonth:"inactive",nextMonth:"inactive",monthDay:"day-in-month"}}),Xi}var Gi,Do;function Cp(){if(Do)return Gi;Do=1;var e=Ep();function t(o){return o==null?!1:o.constructor===Array||o.constructor===Object}function n(o,i){for(var d in o)i[d]?t(o[d])&&n(o[d],i[d]):i[d]=o[d]}function l(o,i){var d=[e.classes[o.type]];return o.class?o.class=(typeof o.class=="string"?[o.class]:o.class).concat(d):o.class=d,o.type.indexOf("Label")>0&&(o.index==0&&e.weekPlaceholder?o.desc=e.weekPlaceholder:o.index<8?o.desc=e.columnNames[i][o.index]:o.index%8==0&&(o.desc=o.week)),o.date&&(o.monthName=e.monthNames[i][o.date.getMonth()]),this.monthName||(this.monthName=e.monthNames[i][this.month]),this.labels||(this.labels={monthNames:e.monthNames[i],columnNames:e.columnNames[i],classes:e.classes}),o}return l.setLabels=function(o){n(o,e)},Gi=l,Gi}var Ji,Oo;function kp(){return Oo||(Oo=1,Ji={Generator:xp(),addLabels:Cp()}),Ji}kp();const _a={props:{lockScroll:{type:Boolean,default:!0}},methods:{checkScrollBar(){if(!He)return;let e=window.innerWidth;if(!e){const t=document.documentElement.getBoundingClientRect();e=t.right-Math.abs(t.left)}this.bodyIsOverflowing=document.body.clientWidth<e,this.bodyIsOverflowing&&(this.scrollBarWidth=Bu())},checkMaskInVisible(){let e=He?document.getElementsByClassName("ivu-modal-mask")||[]:[];return Array.from(e).every(t=>t.style.display==="none"||t.classList.contains("fade-leave-to"))},setScrollBar(){He&&this.bodyIsOverflowing&&this.scrollBarWidth!==void 0&&(document.body.style.paddingRight=`${this.scrollBarWidth}px`)},resetScrollBar(){He&&(document.body.style.paddingRight="")},addScrollEffect(){this.lockScroll&&(this.checkScrollBar(),this.setScrollBar(),He&&(document.body.style.overflow="hidden"))},removeScrollEffect(){this.lockScroll&&He&&this.checkMaskInVisible()&&(document.body.style.overflow="",this.resetScrollBar())}}},Et="ivu-drawer",Bp={name:"Drawer",mixins:[_a],components:{Icon:Kt},emits:["on-close","on-resize-width","on-visible-change","update:modelValue","on-drag"],provide(){return{DrawerInstance:this}},props:{modelValue:{type:Boolean,default:!1},title:{type:String},width:{type:[Number,String],default:256},height:{type:[Number,String],default:256},closable:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},mask:{type:Boolean,default:!0},maskStyle:{type:Object},styles:{type:Object},scrollable:{type:Boolean,default:!1},placement:{validator(e){return Ke(e,["left","right","top","bottom"])},default:"right"},zIndex:{type:Number,default:1e3},transfer:{type:Boolean,default(){const e=et().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.transfer===""?!0:e.$VIEWUI.transfer}},className:{type:String},inner:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},beforeClose:Function},data(){return{prefixCls:Et,visible:this.modelValue,wrapShow:!1,showHead:!0,canMove:!1,dragWidth:this.width,dragHeight:this.height,wrapperWidth:this.width,wrapperHeight:this.height,wrapperLeft:0,minWidth:256,minHeight:256,id:Ra(6),tableList:[],sliderList:[]}},computed:{wrapClasses(){return[`${Et}-wrap`,{[`${Et}-hidden`]:!this.wrapShow,[`${this.className}`]:!!this.className,[`${Et}-no-mask`]:!this.mask,[`${Et}-wrap-inner`]:this.inner,[`${Et}-wrap-dragging`]:this.canMove}]},wrapStyles(){return{zIndex:this.zIndex}},mainStyles(){let e={};if(this.placement==="left"||this.placement==="right"){const t=parseInt(this.dragWidth),n={width:t<=100?`${t}%`:`${t}px`};Object.assign(e,n)}else{const t=parseInt(this.dragHeight),n={height:t<=100?`${t}%`:`${t}px`};Object.assign(e,n)}return e},contentClasses(){return[`${Et}-content`,{[`${Et}-content-no-mask`]:!this.mask}]},classes(){return[`${Et}`,`${Et}-${this.placement}`,{[`${Et}-no-header`]:!this.showHead,[`${Et}-inner`]:this.inner}]},maskClasses(){return[`${Et}-mask`,{[`${Et}-mask-inner`]:this.inner}]},transitionName(){return this.placement==="left"||this.placement==="right"?`move-${this.placement}`:this.placement==="top"?"move-up":"move-down"}},methods:{close(){if(!this.beforeClose)return this.handleClose();const e=this.beforeClose();e&&e.then?e.then(()=>{this.handleClose()}):this.handleClose()},handleClose(){this.visible=!1,this.$emit("update:modelValue",!1),this.$emit("on-close")},handleMask(){this.maskClosable&&this.mask&&this.close()},handleWrapClick(e){const t=e.target.getAttribute("class");t&&t.indexOf(`${Et}-wrap`)>-1&&this.handleMask()},handleMousemove(e){if(!this.canMove||!this.draggable)return;this.handleSetWrapperWidth();const t=e.pageX-this.wrapperLeft;let n=this.placement==="right"?this.wrapperWidth-t:t;n=Math.max(n,parseFloat(this.minWidth)),e.atMin=n===parseFloat(this.minWidth),n<=100&&(n=n/this.wrapperWidth*100),this.dragWidth=n,this.$emit("on-resize-width",parseInt(this.dragWidth)),this.$emit("on-drag","dragging",parseInt(this.dragWidth))},handleSetWrapperWidth(){const{width:e,left:t}=this.$refs.drawer.getBoundingClientRect();this.wrapperWidth=e,this.wrapperLeft=t},handleMouseup(){this.draggable&&(this.canMove=!1,this.$emit("on-drag","end"))},handleTriggerMousedown(){this.canMove=!0,window.getSelection().removeAllRanges(),this.$emit("on-drag","start")},addDrawer(){const e=this.$root;e.drawerList||(e.drawerList=[]),e.drawerList.push({id:this.id,drawer:this})},removeDrawer(){const e=this.$root;if(!e.drawerList)return;const t=e.drawerList.findIndex(n=>n.id===this.id);e.drawerList.splice(t,1)}},mounted(){this.visible&&(this.wrapShow=!0);let e=!0;this.$slots.header===void 0&&!this.title&&(e=!1),this.showHead=e,this.addDrawer(),We(document,"mousemove",this.handleMousemove),We(document,"mouseup",this.handleMouseup),this.handleSetWrapperWidth()},beforeUnmount(){this.removeDrawer(),At(document,"mousemove",this.handleMousemove),At(document,"mouseup",this.handleMouseup),this.removeScrollEffect()},watch:{modelValue(e){this.visible=e},visible(e){e===!1?this.timer=setTimeout(()=>{this.wrapShow=!1,this.$root.drawerList.map(o=>o.drawer).filter(o=>o.id!==this.id).some(o=>o.visible&&!o.scrollable)||this.removeScrollEffect()},300):(this.timer&&clearTimeout(this.timer),this.wrapShow=!0,this.scrollable||this.addScrollEffect()),this.tableList.forEach(t=>{t.table.handleOnVisibleChange(e)}),this.sliderList.forEach(t=>{t.slider.handleOnVisibleChange(e)}),this.$emit("on-visible-change",e)},scrollable(e){e?this.removeScrollEffect():this.addScrollEffect()},title(e){this.$slots.header===void 0&&(this.showHead=!!e)},width(e){this.dragWidth=e},height(e){this.dragHeight=e}}},Sp={ref:"drawer"};function Ip(e,t,n,l,o,i){const d=xt("Icon");return U(),lt(jr,{to:"body",disabled:!n.transfer},[ie("div",Sp,[j(Xt,{name:"fade"},{default:Re(()=>[n.mask?St((U(),ae("div",{key:0,class:G(i.maskClasses),style:je(n.maskStyle),onClick:t[0]||(t[0]=(...g)=>i.handleMask&&i.handleMask(...g))},null,6)),[[Pt,o.visible]]):Ee("",!0)]),_:1}),ie("div",{class:G(i.wrapClasses),style:je(i.wrapStyles),onClick:t[3]||(t[3]=(...g)=>i.handleWrapClick&&i.handleWrapClick(...g))},[j(Xt,{name:i.transitionName},{default:Re(()=>[St(ie("div",{class:G(i.classes),style:je(i.mainStyles)},[ie("div",{class:G(i.contentClasses),ref:"content"},[n.closable?(U(),ae("a",{key:0,class:"ivu-drawer-close",onClick:t[1]||(t[1]=(...g)=>i.close&&i.close(...g))},[Te(e.$slots,"close",{},()=>[j(d,{type:"ios-close"})])])):Ee("",!0),o.showHead?(U(),ae("div",{key:1,class:G([o.prefixCls+"-header"])},[Te(e.$slots,"header",{},()=>[ie("div",{class:G([o.prefixCls+"-header-inner"])},wt(n.title),3)])],2)):Ee("",!0),ie("div",{class:G([o.prefixCls+"-body"]),style:je(n.styles)},[Te(e.$slots,"default")],6)],2),n.draggable&&(n.placement==="left"||n.placement==="right")?(U(),ae("div",{key:0,class:G(["ivu-drawer-drag","ivu-drawer-drag-"+n.placement]),onMousedown:t[2]||(t[2]=(...g)=>i.handleTriggerMousedown&&i.handleTriggerMousedown(...g))},[Te(e.$slots,"trigger",{},()=>[t[4]||(t[4]=ie("div",{class:"ivu-drawer-drag-move-trigger"},[ie("div",{class:"ivu-drawer-drag-move-trigger-point"},[ie("i"),ie("i"),ie("i"),ie("i"),ie("i")])],-1))])],34)):Ee("",!0)],6),[[Pt,o.visible]])]),_:3},8,["name"])],6)],512)],8,["disabled"])}const Tp=tt(Bp,[["render",Ip]]);var Zi={exports:{}},zo;function Jl(){if(zo)return Zi.exports;zo=1;var e=Zi.exports={};return e.forEach=function(t,n){for(var l=0;l<t.length;l++){var o=n(t[l]);if(o)return o}},Zi.exports}var ea,Mo;function Lp(){return Mo||(Mo=1,ea=function(e){var t=e.stateHandler.getState;function n(d){var g=t(d);return g&&!!g.isDetectable}function l(d){t(d).isDetectable=!0}function o(d){return!!t(d).busy}function i(d,g){t(d).busy=!!g}return{isDetectable:n,markAsDetectable:l,isBusy:o,markBusy:i}}),ea}var ta,No;function Dp(){return No||(No=1,ta=function(e){var t={};function n(d){var g=e.get(d);return g===void 0?[]:t[g]||[]}function l(d,g){var v=e.get(d);t[v]||(t[v]=[]),t[v].push(g)}function o(d,g){for(var v=n(d),p=0,m=v.length;p<m;++p)if(v[p]===g){v.splice(p,1);break}}function i(d){var g=n(d);g&&(g.length=0)}return{get:n,add:l,removeListener:o,removeAllListeners:i}}),ta}var na,Po;function Op(){return Po||(Po=1,na=function(){var e=1;function t(){return e++}return{generate:t}}),na}var ra,Vo;function zp(){return Vo||(Vo=1,ra=function(e){var t=e.idGenerator,n=e.stateHandler.getState;function l(i){var d=n(i);return d&&d.id!==void 0?d.id:null}function o(i){var d=n(i);if(!d)throw new Error("setId required the element to have a resize detection state.");var g=t.generate();return d.id=g,g}return{get:l,set:o}}),ra}var ia,Ro;function Mp(){return Ro||(Ro=1,ia=function(e){function t(){}var n={log:t,warn:t,error:t};if(!e&&window.console){var l=function(o,i){o[i]=function(){var g=console[i];if(g.apply)g.apply(console,arguments);else for(var v=0;v<arguments.length;v++)g(arguments[v])}};l(n,"log"),l(n,"warn"),l(n,"error")}return n}),ia}var aa={exports:{}},qo;function Zl(){if(qo)return aa.exports;qo=1;var e=aa.exports={};return e.isIE=function(t){function n(){var o=navigator.userAgent.toLowerCase();return o.indexOf("msie")!==-1||o.indexOf("trident")!==-1||o.indexOf(" edge/")!==-1}if(!n())return!1;if(!t)return!0;var l=function(){var o,i=3,d=document.createElement("div"),g=d.getElementsByTagName("i");do d.innerHTML="<!--[if gt IE "+ ++i+"]><i></i><![endif]-->";while(g[0]);return i>4?i:o}();return t===l},e.isLegacyOpera=function(){return!!window.opera},aa.exports}var oa={exports:{}},Fo;function Np(){if(Fo)return oa.exports;Fo=1;var e=oa.exports={};e.getOption=t;function t(n,l,o){var i=n[l];return i==null&&o!==void 0?o:i}return oa.exports}var la,_o;function Pp(){if(_o)return la;_o=1;var e=Np();la=function(l){l=l||{};var o=l.reporter,i=e.getOption(l,"async",!0),d=e.getOption(l,"auto",!0);d&&!i&&(o&&o.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."),i=!0);var g=t(),v,p=!1;function m(T,V){!p&&d&&i&&g.size()===0&&k(),g.add(T,V)}function x(){for(p=!0;g.size();){var T=g;g=t(),T.process()}p=!1}function y(T){p||(T===void 0&&(T=i),v&&(S(v),v=null),T?k():x())}function k(){v=A(x)}function S(T){var V=clearTimeout;return V(T)}function A(T){var V=function(O){return setTimeout(O,0)};return V(T)}return{add:m,force:y}};function t(){var n={},l=0,o=0,i=0;function d(p,m){m||(m=p,p=0),p>o?o=p:p<i&&(i=p),n[p]||(n[p]=[]),n[p].push(m),l++}function g(){for(var p=i;p<=o;p++)for(var m=n[p],x=0;x<m.length;x++){var y=m[x];y()}}function v(){return l}return{add:d,process:g,size:v}}return la}var sa,$o;function Vp(){if($o)return sa;$o=1;var e="_erd";function t(o){return o[e]={},n(o)}function n(o){return o[e]}function l(o){delete o[e]}return sa={initState:t,getState:n,cleanState:l},sa}var da,Wo;function Rp(){if(Wo)return da;Wo=1;var e=Zl();return da=function(t){t=t||{};var n=t.reporter,l=t.batchProcessor,o=t.stateHandler.getState;if(!n)throw new Error("Missing required dependency: reporter.");function i(m,x){function y(){x(m)}if(e.isIE(8))o(m).object={proxy:y},m.attachEvent("onresize",y);else{var k=v(m);if(!k)throw new Error("Element is not detectable by this strategy.");k.contentDocument.defaultView.addEventListener("resize",y)}}function d(m){var x=t.important?" !important; ":"; ";return(m.join(x)+x).trim()}function g(m,x,y){y||(y=x,x=m,m=null),m=m||{},m.debug;function k(S,A){var T=d(["display: block","position: absolute","top: 0","left: 0","width: 100%","height: 100%","border: none","padding: 0","margin: 0","opacity: 0","z-index: -1000","pointer-events: none"]),V=!1,O=window.getComputedStyle(S),q=S.offsetWidth,R=S.offsetHeight;o(S).startSize={width:q,height:R};function F(){function C(){if(O.position==="static"){S.style.setProperty("position","relative",m.important?"important":"");var X=function(H,oe,ye,pe){function se(te){return te.replace(/[^-\d\.]/g,"")}var J=ye[pe];J!=="auto"&&se(J)!=="0"&&(H.warn("An element that is positioned static has style."+pe+"="+J+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+pe+" will be set to 0. Element: ",oe),oe.style.setProperty(pe,"0",m.important?"important":""))};X(n,S,O,"top"),X(n,S,O,"right"),X(n,S,O,"bottom"),X(n,S,O,"left")}}function N(){V||C();function X(oe,ye){if(!oe.contentDocument){var pe=o(oe);pe.checkForObjectDocumentTimeoutId&&window.clearTimeout(pe.checkForObjectDocumentTimeoutId),pe.checkForObjectDocumentTimeoutId=setTimeout(function(){pe.checkForObjectDocumentTimeoutId=0,X(oe,ye)},100);return}ye(oe.contentDocument)}var H=this;X(H,function(ye){A(S)})}O.position!==""&&(C(),V=!0);var z=document.createElement("object");z.style.cssText=T,z.tabIndex=-1,z.type="text/html",z.setAttribute("aria-hidden","true"),z.onload=N,e.isIE()||(z.data="about:blank"),o(S)&&(S.appendChild(z),o(S).object=z,e.isIE()&&(z.data="about:blank"))}l?l.add(F):F()}e.isIE(8)?y(x):k(x,y)}function v(m){return o(m).object}function p(m){if(o(m)){var x=v(m);x&&(e.isIE(8)?m.detachEvent("onresize",x.proxy):m.removeChild(x),o(m).checkForObjectDocumentTimeoutId&&window.clearTimeout(o(m).checkForObjectDocumentTimeoutId),delete o(m).object)}}return{makeDetectable:g,addListener:i,uninstall:p}},da}var ua,jo;function qp(){if(jo)return ua;jo=1;var e=Jl().forEach;return ua=function(t){t=t||{};var n=t.reporter,l=t.batchProcessor,o=t.stateHandler.getState;t.stateHandler.hasState;var i=t.idHandler;if(!l)throw new Error("Missing required dependency: batchProcessor");if(!n)throw new Error("Missing required dependency: reporter.");var d=x(),g="erd_scroll_detection_scrollbar_style",v="erd_scroll_detection_container";function p(F){y(F,g,v)}p(window.document);function m(F){var C=t.important?" !important; ":"; ";return(F.join(C)+C).trim()}function x(){var F=500,C=500,N=document.createElement("div");N.style.cssText=m(["position: absolute","width: "+F*2+"px","height: "+C*2+"px","visibility: hidden","margin: 0","padding: 0"]);var z=document.createElement("div");z.style.cssText=m(["position: absolute","width: "+F+"px","height: "+C+"px","overflow: scroll","visibility: none","top: "+-500*3+"px","left: "+-500*3+"px","visibility: hidden","margin: 0","padding: 0"]),z.appendChild(N),document.body.insertBefore(z,document.body.firstChild);var X=F-z.clientWidth,H=C-z.clientHeight;return document.body.removeChild(z),{width:X,height:H}}function y(F,C,N){function z(ye,pe){pe=pe||function(J){F.head.appendChild(J)};var se=F.createElement("style");return se.innerHTML=ye,se.id=C,pe(se),se}if(!F.getElementById(C)){var X=N+"_animation",H=N+"_animation_active",oe=`/* Created by the element-resize-detector library. */
`;oe+="."+N+" > div::-webkit-scrollbar { "+m(["display: none"])+` }

`,oe+="."+H+" { "+m(["-webkit-animation-duration: 0.1s","animation-duration: 0.1s","-webkit-animation-name: "+X,"animation-name: "+X])+` }
`,oe+="@-webkit-keyframes "+X+` { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }
`,oe+="@keyframes "+X+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }",z(oe)}}function k(F){F.className+=" "+v+"_animation_active"}function S(F,C,N){if(F.addEventListener)F.addEventListener(C,N);else if(F.attachEvent)F.attachEvent("on"+C,N);else return n.error("[scroll] Don't know how to add event listeners.")}function A(F,C,N){if(F.removeEventListener)F.removeEventListener(C,N);else if(F.detachEvent)F.detachEvent("on"+C,N);else return n.error("[scroll] Don't know how to remove event listeners.")}function T(F){return o(F).container.childNodes[0].childNodes[0].childNodes[0]}function V(F){return o(F).container.childNodes[0].childNodes[0].childNodes[1]}function O(F,C){var N=o(F).listeners;if(!N.push)throw new Error("Cannot add listener to an element that is not detectable.");o(F).listeners.push(C)}function q(F,C,N){N||(N=C,C=F,F=null),F=F||{};function z(){if(F.debug){var K=Array.prototype.slice.call(arguments);if(K.unshift(i.get(C),"Scroll: "),n.log.apply)n.log.apply(null,K);else for(var be=0;be<K.length;be++)n.log(K[be])}}function X(K){function be(Le){var nt=Le.getRootNode&&Le.getRootNode().contains(Le);return Le===Le.ownerDocument.body||Le.ownerDocument.body.contains(Le)||nt}return!be(K)||window.getComputedStyle(K)===null}function H(K){var be=o(K).container.childNodes[0],Le=window.getComputedStyle(be);return!Le.width||Le.width.indexOf("px")===-1}function oe(){var K=window.getComputedStyle(C),be={};return be.position=K.position,be.width=C.offsetWidth,be.height=C.offsetHeight,be.top=K.top,be.right=K.right,be.bottom=K.bottom,be.left=K.left,be.widthCSS=K.width,be.heightCSS=K.height,be}function ye(){var K=oe();o(C).startSize={width:K.width,height:K.height},z("Element start size",o(C).startSize)}function pe(){o(C).listeners=[]}function se(){if(z("storeStyle invoked."),!o(C)){z("Aborting because element has been uninstalled");return}var K=oe();o(C).style=K}function J(K,be,Le){o(K).lastWidth=be,o(K).lastHeight=Le}function te(K){return T(K).childNodes[0]}function Z(){return 2*d.width+1}function Y(){return 2*d.height+1}function W(K){return K+10+Z()}function ge(K){return K+10+Y()}function Se(K){return K*2+Z()}function De(K){return K*2+Y()}function Me(K,be,Le){var nt=T(K),gt=V(K),Lt=W(be),Jt=ge(Le),ft=Se(be),Fe=De(Le);nt.scrollLeft=Lt,nt.scrollTop=Jt,gt.scrollLeft=ft,gt.scrollTop=Fe}function Ne(){var K=o(C).container;if(!K){K=document.createElement("div"),K.className=v,K.style.cssText=m(["visibility: hidden","display: inline","width: 0px","height: 0px","z-index: -1","overflow: hidden","margin: 0","padding: 0"]),o(C).container=K,k(K),C.appendChild(K);var be=function(){o(C).onRendered&&o(C).onRendered()};S(K,"animationstart",be),o(C).onAnimationStart=be}return K}function qe(){function K(){var rt=o(C).style;if(rt.position==="static"){C.style.setProperty("position","relative",F.important?"important":"");var kt=function(Ot,P,Ft,nn){function Vn(ar){return ar.replace(/[^-\d\.]/g,"")}var Pe=Ft[nn];Pe!=="auto"&&Vn(Pe)!=="0"&&(Ot.warn("An element that is positioned static has style."+nn+"="+Pe+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+nn+" will be set to 0. Element: ",P),P.style[nn]=0)};kt(n,C,rt,"top"),kt(n,C,rt,"right"),kt(n,C,rt,"bottom"),kt(n,C,rt,"left")}}function be(rt,kt,Ot,P){return rt=rt?rt+"px":"0",kt=kt?kt+"px":"0",Ot=Ot?Ot+"px":"0",P=P?P+"px":"0",["left: "+rt,"top: "+kt,"right: "+P,"bottom: "+Ot]}if(z("Injecting elements"),!o(C)){z("Aborting because element has been uninstalled");return}K();var Le=o(C).container;Le||(Le=Ne());var nt=d.width,gt=d.height,Lt=m(["position: absolute","flex: none","overflow: hidden","z-index: -1","visibility: hidden","width: 100%","height: 100%","left: 0px","top: 0px"]),Jt=m(["position: absolute","flex: none","overflow: hidden","z-index: -1","visibility: hidden"].concat(be(-(1+nt),-(1+gt),-gt,-nt))),ft=m(["position: absolute","flex: none","overflow: scroll","z-index: -1","visibility: hidden","width: 100%","height: 100%"]),Fe=m(["position: absolute","flex: none","overflow: scroll","z-index: -1","visibility: hidden","width: 100%","height: 100%"]),ht=m(["position: absolute","left: 0","top: 0"]),Dt=m(["position: absolute","width: 200%","height: 200%"]),mt=document.createElement("div"),Ct=document.createElement("div"),qt=document.createElement("div"),wn=document.createElement("div"),tn=document.createElement("div"),xn=document.createElement("div");mt.dir="ltr",mt.style.cssText=Lt,mt.className=v,Ct.className=v,Ct.style.cssText=Jt,qt.style.cssText=ft,wn.style.cssText=ht,tn.style.cssText=Fe,xn.style.cssText=Dt,qt.appendChild(wn),tn.appendChild(xn),Ct.appendChild(qt),Ct.appendChild(tn),mt.appendChild(Ct),Le.appendChild(mt);function En(){var rt=o(C);rt&&rt.onExpand?rt.onExpand():z("Aborting expand scroll handler: element has been uninstalled")}function Pn(){var rt=o(C);rt&&rt.onShrink?rt.onShrink():z("Aborting shrink scroll handler: element has been uninstalled")}S(qt,"scroll",En),S(tn,"scroll",Pn),o(C).onExpandScroll=En,o(C).onShrinkScroll=Pn}function Ve(){function K(ft,Fe,ht){var Dt=te(ft),mt=W(Fe),Ct=ge(ht);Dt.style.setProperty("width",mt+"px",F.important?"important":""),Dt.style.setProperty("height",Ct+"px",F.important?"important":"")}function be(ft){var Fe=C.offsetWidth,ht=C.offsetHeight,Dt=Fe!==o(C).lastWidth||ht!==o(C).lastHeight;z("Storing current size",Fe,ht),J(C,Fe,ht),l.add(0,function(){if(Dt){if(!o(C)){z("Aborting because element has been uninstalled");return}if(!Le()){z("Aborting because element container has not been initialized");return}if(F.debug){var Ct=C.offsetWidth,qt=C.offsetHeight;(Ct!==Fe||qt!==ht)&&n.warn(i.get(C),"Scroll: Size changed before updating detector elements.")}K(C,Fe,ht)}}),l.add(1,function(){if(!o(C)){z("Aborting because element has been uninstalled");return}if(!Le()){z("Aborting because element container has not been initialized");return}Me(C,Fe,ht)}),Dt&&ft&&l.add(2,function(){if(!o(C)){z("Aborting because element has been uninstalled");return}if(!Le()){z("Aborting because element container has not been initialized");return}ft()})}function Le(){return!!o(C).container}function nt(){function ft(){return o(C).lastNotifiedWidth===void 0}z("notifyListenersIfNeeded invoked");var Fe=o(C);if(ft()&&Fe.lastWidth===Fe.startSize.width&&Fe.lastHeight===Fe.startSize.height)return z("Not notifying: Size is the same as the start size, and there has been no notification yet.");if(Fe.lastWidth===Fe.lastNotifiedWidth&&Fe.lastHeight===Fe.lastNotifiedHeight)return z("Not notifying: Size already notified");z("Current size not notified, notifying..."),Fe.lastNotifiedWidth=Fe.lastWidth,Fe.lastNotifiedHeight=Fe.lastHeight,e(o(C).listeners,function(ht){ht(C)})}function gt(){if(z("startanimation triggered."),H(C)){z("Ignoring since element is still unrendered...");return}z("Element rendered.");var ft=T(C),Fe=V(C);(ft.scrollLeft===0||ft.scrollTop===0||Fe.scrollLeft===0||Fe.scrollTop===0)&&(z("Scrollbars out of sync. Updating detector elements..."),be(nt))}function Lt(){if(z("Scroll detected."),H(C)){z("Scroll event fired while unrendered. Ignoring...");return}be(nt)}if(z("registerListenersAndPositionElements invoked."),!o(C)){z("Aborting because element has been uninstalled");return}o(C).onRendered=gt,o(C).onExpand=Lt,o(C).onShrink=Lt;var Jt=o(C).style;K(C,Jt.width,Jt.height)}function ze(){if(z("finalizeDomMutation invoked."),!o(C)){z("Aborting because element has been uninstalled");return}var K=o(C).style;J(C,K.width,K.height),Me(C,K.width,K.height)}function Ae(){N(C)}function _e(){z("Installing..."),pe(),ye(),l.add(0,se),l.add(1,qe),l.add(2,Ve),l.add(3,ze),l.add(4,Ae)}z("Making detectable..."),X(C)?(z("Element is detached"),Ne(),z("Waiting until element is attached..."),o(C).onRendered=function(){z("Element is now attached"),_e()}):_e()}function R(F){var C=o(F);C&&(C.onExpandScroll&&A(T(F),"scroll",C.onExpandScroll),C.onShrinkScroll&&A(V(F),"scroll",C.onShrinkScroll),C.onAnimationStart&&A(C.container,"animationstart",C.onAnimationStart),C.container&&F.removeChild(C.container))}return{makeDetectable:q,addListener:O,uninstall:R,initDocument:p}},ua}var ca,Ho;function Fp(){if(Ho)return ca;Ho=1;var e=Jl().forEach,t=Lp(),n=Dp(),l=Op(),o=zp(),i=Mp(),d=Zl(),g=Pp(),v=Vp(),p=Rp(),m=qp();function x(A){return Array.isArray(A)||A.length!==void 0}function y(A){if(Array.isArray(A))return A;var T=[];return e(A,function(V){T.push(V)}),T}function k(A){return A&&A.nodeType===1}ca=function(A){A=A||{};var T;if(A.idHandler)T={get:function(Z){return A.idHandler.get(Z,!0)},set:A.idHandler.set};else{var V=l(),O=o({idGenerator:V,stateHandler:v});T=O}var q=A.reporter;if(!q){var R=q===!1;q=i(R)}var F=S(A,"batchProcessor",g({reporter:q})),C={};C.callOnAdd=!!S(A,"callOnAdd",!0),C.debug=!!S(A,"debug",!1);var N=n(T),z=t({stateHandler:v}),X,H=S(A,"strategy","object"),oe=S(A,"important",!1),ye={reporter:q,batchProcessor:F,stateHandler:v,idHandler:T,important:oe};if(H==="scroll"&&(d.isLegacyOpera()?(q.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."),H="object"):d.isIE(9)&&(q.warn("Scroll strategy is not supported on IE9. Changing to object strategy."),H="object")),H==="scroll")X=m(ye);else if(H==="object")X=p(ye);else throw new Error("Invalid strategy name: "+H);var pe={};function se(Z,Y,W){function ge(Ve){var ze=N.get(Ve);e(ze,function(_e){_e(Ve)})}function Se(Ve,ze,Ae){N.add(ze,Ae),Ve&&Ae(ze)}if(W||(W=Y,Y=Z,Z={}),!Y)throw new Error("At least one element required.");if(!W)throw new Error("Listener required.");if(k(Y))Y=[Y];else if(x(Y))Y=y(Y);else return q.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");var De=0,Me=S(Z,"callOnAdd",C.callOnAdd),Ne=S(Z,"onReady",function(){}),qe=S(Z,"debug",C.debug);e(Y,function(ze){v.getState(ze)||(v.initState(ze),T.set(ze));var Ae=T.get(ze);if(qe&&q.log("Attaching listener to element",Ae,ze),!z.isDetectable(ze)){if(qe&&q.log(Ae,"Not detectable."),z.isBusy(ze)){qe&&q.log(Ae,"System busy making it detectable"),Se(Me,ze,W),pe[Ae]=pe[Ae]||[],pe[Ae].push(function(){De++,De===Y.length&&Ne()});return}return qe&&q.log(Ae,"Making detectable..."),z.markBusy(ze,!0),X.makeDetectable({debug:qe,important:oe},ze,function(K){if(qe&&q.log(Ae,"onElementDetectable"),v.getState(K)){z.markAsDetectable(K),z.markBusy(K,!1),X.addListener(K,ge),Se(Me,K,W);var be=v.getState(K);if(be&&be.startSize){var Le=K.offsetWidth,nt=K.offsetHeight;(be.startSize.width!==Le||be.startSize.height!==nt)&&ge(K)}pe[Ae]&&e(pe[Ae],function(gt){gt()})}else qe&&q.log(Ae,"Element uninstalled before being detectable.");delete pe[Ae],De++,De===Y.length&&Ne()})}qe&&q.log(Ae,"Already detecable, adding listener."),Se(Me,ze,W),De++}),De===Y.length&&Ne()}function J(Z){if(!Z)return q.error("At least one element is required.");if(k(Z))Z=[Z];else if(x(Z))Z=y(Z);else return q.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");e(Z,function(Y){N.removeAllListeners(Y),X.uninstall(Y),v.cleanState(Y)})}function te(Z){X.initDocument&&X.initDocument(Z)}return{listenTo:se,removeListener:N.removeListener,removeAllListeners:N.removeAllListeners,uninstall:J,initDocument:te}};function S(A,T,V){var O=A[T];return O==null&&V!==void 0?V:O}return ca}var _p=Fp();const $p=Di(_p);var pa,Uo;function Wp(){if(Uo)return pa;Uo=1;var e="Expected a function",t=NaN,n="[object Symbol]",l=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,d=/^0o[0-7]+$/i,g=parseInt,v=typeof Kn=="object"&&Kn&&Kn.Object===Object&&Kn,p=typeof self=="object"&&self&&self.Object===Object&&self,m=v||p||Function("return this")(),x=Object.prototype,y=x.toString,k=Math.max,S=Math.min,A=function(){return m.Date.now()};function T(C,N,z){var X,H,oe,ye,pe,se,J=0,te=!1,Z=!1,Y=!0;if(typeof C!="function")throw new TypeError(e);N=F(N)||0,O(z)&&(te=!!z.leading,Z="maxWait"in z,oe=Z?k(F(z.maxWait)||0,N):oe,Y="trailing"in z?!!z.trailing:Y);function W(Ae){var _e=X,K=H;return X=H=void 0,J=Ae,ye=C.apply(K,_e),ye}function ge(Ae){return J=Ae,pe=setTimeout(Me,N),te?W(Ae):ye}function Se(Ae){var _e=Ae-se,K=Ae-J,be=N-_e;return Z?S(be,oe-K):be}function De(Ae){var _e=Ae-se,K=Ae-J;return se===void 0||_e>=N||_e<0||Z&&K>=oe}function Me(){var Ae=A();if(De(Ae))return Ne(Ae);pe=setTimeout(Me,Se(Ae))}function Ne(Ae){return pe=void 0,Y&&X?W(Ae):(X=H=void 0,ye)}function qe(){pe!==void 0&&clearTimeout(pe),J=0,X=se=H=pe=void 0}function Ve(){return pe===void 0?ye:Ne(A())}function ze(){var Ae=A(),_e=De(Ae);if(X=arguments,H=this,se=Ae,_e){if(pe===void 0)return ge(se);if(Z)return pe=setTimeout(Me,N),W(se)}return pe===void 0&&(pe=setTimeout(Me,N)),ye}return ze.cancel=qe,ze.flush=Ve,ze}function V(C,N,z){var X=!0,H=!0;if(typeof C!="function")throw new TypeError(e);return O(z)&&(X="leading"in z?!!z.leading:X,H="trailing"in z?!!z.trailing:H),T(C,N,{leading:X,maxWait:N,trailing:H})}function O(C){var N=typeof C;return!!C&&(N=="object"||N=="function")}function q(C){return!!C&&typeof C=="object"}function R(C){return typeof C=="symbol"||q(C)&&y.call(C)==n}function F(C){if(typeof C=="number")return C;if(R(C))return t;if(O(C)){var N=typeof C.valueOf=="function"?C.valueOf():C;C=O(N)?N+"":N}if(typeof C!="string")return C===0?C:+C;C=C.replace(l,"");var z=i.test(C);return z||d.test(C)?g(C.slice(2),z?2:8):o.test(C)?t:+C}return pa=V,pa}var jp=Wp();const Hp=Di(jp),Hn={ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40},yn="ivu-spin",Up={name:"Spin",mixins:[_a],props:{size:{validator(e){return Ke(e,["small","large","default"])},default(){const e=et().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.size===""?"default":e.$VIEWUI.size}},fix:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},show:{type:Boolean,default:!0}},data(){return{showText:!1,visible:!1}},computed:{classes(){return[`${yn}`,{[`${yn}-${this.size}`]:!!this.size,[`${yn}-fix`]:this.fix,[`${yn}-show-text`]:this.showText,[`${yn}-fullscreen`]:this.fullscreen}]},mainClasses(){return`${yn}-main`},dotClasses(){return`${yn}-dot`},textClasses(){return`${yn}-text`},fullscreenVisible(){return this.fullscreen?this.visible:!0}},watch:{visible(e){e?this.addScrollEffect():this.removeScrollEffect()}},mounted(){this.showText=!!this.$slots.default&&this.$slots.default().some(e=>e.children&&e.children.length)}};function Qp(e,t,n,l,o,i){return U(),lt(Xt,{name:"fade"},{default:Re(()=>[i.fullscreenVisible&&n.show?(U(),ae("div",{key:0,class:G(i.classes)},[ie("div",{class:G(i.mainClasses)},[ie("span",{class:G(i.dotClasses)},null,2),ie("div",{class:G(i.textClasses)},[Te(e.$slots,"default")],2)],2)],2)):Ee("",!0)]),_:3})}const Dn=tt(Up,[["render",Qp]]),Yp={name:"ImagePreview",mixins:[Fa],components:{Icon:Kt,Spin:Dn,Row:Yl,Col:Ea},inheritAttrs:!1,emits:["update:modelValue","on-close","on-switch"],props:{modelValue:{type:Boolean,default:!1},transfer:{type:Boolean,default(){const e=et().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.transfer===""?!1:e.$VIEWUI.transfer}},maskClosable:{type:Boolean,default:!0},previewList:{type:Array,default(){return[]}},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},toolbar:{type:Array,default(){const e=et().appContext.config.globalProperties;return!e.$VIEWUI||!e.$VIEWUI.image||e.$VIEWUI.image.toolbar===""?["zoomIn","zoomOut","original","rotateLeft","rotateRight","download"]:e.$VIEWUI.image.toolbar}}},data(){return{currentIndex:0,scale:1,degree:0,translate:{x:0,y:0},startX:0,startY:0,transition:!0,original:!1,prevOverflow:"",status:"loading",zIndex:1e3,maskIndex:this.getMaskIndex(),downloading:!1}},computed:{imgClasses(){return["ivu-image-preview-image",{"ivu-image-preview-grabbing":!this.transition,"ivu-image-preview-hidden":this.status==="failed","ivu-image-preview-transition":this.transition,"ivu-image-preview-limit":!this.original}]},imageStyle(){let e=this.translate.x/this.scale,t=this.translate.y/this.scale;const n=this.degree%360;return[90,-270].includes(n)&&([e,t]=[t,-e]),[180,-180].includes(n)&&([e,t]=[-e,-t]),[270,-90].includes(n)&&([e,t]=[-t,e]),{transform:`
                        scale(${this.scale})
                        rotate(${this.degree}deg)
                        translate(${e}px, ${t}px)
                    `}},maskStyle(){return{zIndex:this.maskIndex+this.zIndex}},leftClasses(){return["ivu-image-preview-arrow-left",{"ivu-image-preview-arrow-disabled":this.hasLeftSwitchEnd}]},rightClasses(){return["ivu-image-preview-arrow-right",{"ivu-image-preview-arrow-disabled":this.hasRightSwitchEnd}]},hasRightSwitchEnd(){const{currentIndex:e,infinite:t,previewList:n}=this,l=n.length;return t?!1:e>=l-1},hasLeftSwitchEnd(){const{currentIndex:e,infinite:t}=this;return t?!1:e===0},currentSrc(){return this.previewList[this.currentIndex]},failLang(){return this.t("i.image.fail")}},methods:{resetStyle(){this.scale=1,this.degree=0,this.translate.x=0,this.translate.y=0},handleClose(){this.$emit("update:modelValue",!1),this.$emit("on-close")},handleClickMask(){this.maskClosable&&this.handleClose()},handleSwitch(e){e?this.currentIndex+1===this.previewList.length?this.infinite&&(this.resetStyle(),this.currentIndex=0):(this.resetStyle(),this.currentIndex+=1):this.currentIndex===0?this.infinite&&(this.resetStyle(),this.currentIndex=this.previewList.length-1):(this.resetStyle(),this.currentIndex-=1),this.$emit("on-switch",{currentIndex:this.currentIndex})},handleOperation(e){e==="zoomIn"&&this.scale<6&&(this.scale+=.25),e==="zoomOut"&&this.scale>.25&&(this.scale-=.25),e==="rotateLeft"&&(this.degree-=90),e==="rotateRight"&&(this.degree+=90),e==="original"&&(this.original=!this.original,this.transition=!1,this.resetStyle(),setTimeout(()=>{this.transition=!0},0)),e==="download"&&(this.downloading=!0,Ou(this.previewList[this.currentIndex]).then(()=>{this.downloading=!1}).catch(()=>{this.downloading=!1}))},handleKeydown(e){if(!this.modelValue)return;const{keyCode:t}=e;t===Hn.LEFT&&this.handleSwitch(!1),t===Hn.RIGHT&&this.handleSwitch(!0),t===Hn.UP&&this.handleOperation("zoomIn"),t===Hn.DOWN&&this.handleOperation("zoomOut"),t===Hn.SPACE&&(e.preventDefault(),this.original=!this.original)},handleKeyup(e){if(!this.modelValue)return;const{keyCode:t}=e;t===Hn.ESC&&this.handleClose()},handleWheel(e){if(!this.modelValue)return;const{deltaY:t}=e;this.handleOperation(t<0?"zoomIn":"zoomOut")},handleMousedown(e){const{pageX:t,pageY:n,which:l}=e;l===1&&(this.startX=t,this.startY=n,this.transition=!1,We(document,"mousemove",this.handleMousemove),We(document,"mouseup",this.handleMouseup))},handleMousemove:Hp(function(e){e.stopPropagation();const{pageX:t,pageY:n}=e;this.translate.x+=t-this.startX,this.translate.y+=n-this.startY,this.startX=t,this.startY=n}),handleMouseup(){this.transition=!0,At(document,"mousemove",this.handleMousemove),At(document,"mouseup",this.handleMouseup)},getBodyOverflow(){return He?document.body.style.overflow:""},setBodyOverflow(e){He&&(document.body.style.overflow=e)},handleImageLoad(){this.status="loaded"},handleImageError(){this.status="failed"},getMaskIndex(){return ir(),Mn}},watch:{modelValue(e){e?(this.currentIndex=this.initialIndex,this.resetStyle(),this.original=!1,this.prevOverflow=this.getBodyOverflow(),this.setBodyOverflow("hidden"),this.maskIndex=this.getMaskIndex()):this.setBodyOverflow(this.prevOverflow)},currentIndex(){this.status="loading"}},mounted(){We(document,"keydown",this.handleKeydown),We(document,"keyup",this.handleKeyup),We(document,"wheel",this.handleWheel)},beforeUnmount(){At(document,"keydown",this.handleKeydown),At(document,"keyup",this.handleKeyup),At(document,"wheel",this.handleWheel)}},Kp={key:1,class:"ivu-image-preview-fail"},Xp=["src"],Gp={class:"ivu-image-preview-operations-item ivu-image-preview-operations-wait ivu-anim-loop",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"7816",width:"200",height:"200"};function Jp(e,t,n,l,o,i){const d=xt("Spin"),g=xt("Col"),v=xt("Row"),p=xt("Icon");return U(),lt(jr,{to:"body",disabled:!n.transfer},[j(Xt,{name:"fade"},{default:Re(()=>[n.modelValue?(U(),ae("div",{key:0,class:"ivu-image-preview-mask",style:je(i.maskStyle)},null,4)):Ee("",!0)]),_:1}),j(Xt,{name:"fade"},{default:Re(()=>[n.modelValue?(U(),ae("div",{key:0,class:"ivu-image-preview-wrap",style:je(i.maskStyle)},[ie("div",Li({class:"ivu-image-preview"},e.$attrs,{onClick:t[14]||(t[14]=Ze((...m)=>i.handleClickMask&&i.handleClickMask(...m),["stop"]))}),[o.status==="loading"?(U(),lt(d,{key:0,size:"large",class:"ivu-image-preview-loading"})):o.status==="failed"?(U(),ae("div",Kp,[ie("span",null,wt(i.failLang),1)])):Ee("",!0),(U(),ae("img",{class:G(i.imgClasses),style:je(i.imageStyle),src:i.currentSrc,key:o.currentIndex.toString(),onClick:t[0]||(t[0]=Ze(()=>{},["stop"])),onMousedown:t[1]||(t[1]=Ze((...m)=>i.handleMousedown&&i.handleMousedown(...m),["stop","prevent"])),onLoad:t[2]||(t[2]=(...m)=>i.handleImageLoad&&i.handleImageLoad(...m)),onError:t[3]||(t[3]=(...m)=>i.handleImageError&&i.handleImageError(...m))},null,46,Xp)),n.toolbar&&n.toolbar.length>0?(U(),lt(v,{key:2,"class-name":"ivu-image-preview-operations",wrap:!1,onClick:t[11]||(t[11]=Ze(()=>{},["stop"]))},{default:Re(()=>[n.toolbar.indexOf("zoomIn")>-1?(U(),lt(g,{key:0,flex:"1",order:n.toolbar.indexOf("zoomIn")+1},{default:Re(()=>[(U(),ae("svg",{class:"ivu-image-preview-operations-item",onClick:t[4]||(t[4]=Ze(m=>i.handleOperation("zoomIn"),["stop"])),viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"7197",width:"200",height:"200"},t[15]||(t[15]=[ie("path",{d:"M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z","p-id":"7198",fill:"#ffffff"},null,-1),ie("path",{d:"M921 867L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z","p-id":"7199",fill:"#ffffff"},null,-1)])))]),_:1},8,["order"])):Ee("",!0),n.toolbar.indexOf("zoomOut")>-1?(U(),lt(g,{key:1,flex:"1",order:n.toolbar.indexOf("zoomOut")+1},{default:Re(()=>[(U(),ae("svg",{class:"ivu-image-preview-operations-item",onClick:t[5]||(t[5]=Ze(m=>i.handleOperation("zoomOut"),["stop"])),viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"7412",width:"200",height:"200"},t[16]||(t[16]=[ie("path",{d:"M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z","p-id":"7413",fill:"#ffffff"},null,-1),ie("path",{d:"M921 867L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z","p-id":"7414",fill:"#ffffff"},null,-1)])))]),_:1},8,["order"])):Ee("",!0),n.toolbar.indexOf("original")>-1?(U(),lt(g,{key:2,flex:"1",order:n.toolbar.indexOf("original")+1},{default:Re(()=>[St((U(),ae("svg",{class:"ivu-image-preview-operations-item",onClick:t[6]||(t[6]=Ze(m=>i.handleOperation("original"),["stop"])),viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"26672",width:"200",height:"200"},t[17]||(t[17]=[ie("path",{d:"M358.058667 128H156.970667A28.970667 28.970667 0 0 0 128 157.013333v202.837334c0 7.978667 6.528 14.506667 14.506667 14.506666h43.434666a14.506667 14.506667 0 0 0 14.506667-14.506666V200.448h157.610667a14.506667 14.506667 0 0 0 14.506666-14.506667V142.506667a14.506667 14.506667 0 0 0-14.506666-14.506667zM881.493333 649.642667h-43.434666a14.506667 14.506667 0 0 0-14.506667 14.506666v159.402667h-157.610667a14.506667 14.506667 0 0 0-14.506666 14.506667v43.434666c0 7.978667 6.570667 14.506667 14.506666 14.506667h201.088c16 0 28.970667-12.928 28.970667-29.013333v-202.837334a14.506667 14.506667 0 0 0-14.506667-14.506666zM358.058667 823.552H200.448v-159.402667a14.506667 14.506667 0 0 0-14.506667-14.506666H142.506667a14.506667 14.506667 0 0 0-14.506667 14.506666v202.88c0 16 12.970667 28.970667 29.013333 28.970667h201.045334a14.506667 14.506667 0 0 0 14.506666-14.506667v-43.434666a14.506667 14.506667 0 0 0-14.506666-14.506667zM866.986667 128h-201.088a14.506667 14.506667 0 0 0-14.506667 14.506667v43.434666c0 7.978667 6.570667 14.506667 14.506667 14.506667h157.610666v159.402667c0 7.978667 6.528 14.506667 14.506667 14.506666h43.434667a14.506667 14.506667 0 0 0 14.506666-14.506666V156.970667A28.928 28.928 0 0 0 866.986667 128z","p-id":"26673",fill:"#ffffff"},null,-1)]),512)),[[Pt,!this.original]]),St((U(),ae("svg",{class:"ivu-image-preview-operations-item",onClick:t[7]||(t[7]=Ze(m=>i.handleOperation("original"),["stop"])),viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1976",width:"200",height:"200"},t[18]||(t[18]=[ie("path",{d:"M864 128H160c-19.2 0-32 12.8-32 32v704c0 19.2 12.8 32 32 32h704c19.2 0 32-12.8 32-32V160c0-19.2-12.8-32-32-32z m-32 704H192V192h640v640z","p-id":"1977",fill:"#ffffff"},null,-1),ie("path",{d:"M320 384v288c0 19.2 12.8 32 32 32s32-12.8 32-32V352c0-19.2-12.8-32-32-32h-32c-19.2 0-32 12.8-32 32s12.8 32 32 32zM640 384v288c0 19.2 12.8 32 32 32s32-12.8 32-32V352c0-19.2-12.8-32-32-32h-32c-19.2 0-32 12.8-32 32s12.8 32 32 32z","p-id":"1978",fill:"#ffffff"},null,-1),ie("path",{d:"M512 384m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z","p-id":"1979",fill:"#ffffff"},null,-1),ie("path",{d:"M512 640m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z","p-id":"1980",fill:"#ffffff"},null,-1)]),512)),[[Pt,this.original]])]),_:1},8,["order"])):Ee("",!0),n.toolbar.indexOf("rotateLeft")>-1?(U(),lt(g,{key:3,flex:"1",order:n.toolbar.indexOf("rotateLeft")+1},{default:Re(()=>[(U(),ae("svg",{class:"ivu-image-preview-operations-item",onClick:t[8]||(t[8]=Ze(m=>i.handleOperation("rotateLeft"),["stop"])),viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"13308",width:"200",height:"200"},t[19]||(t[19]=[ie("path",{d:"M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32z m-44 402H188V494h440v326z m191.3-491.5c-78.8-100.7-196-153.6-314.6-154.2l-0.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7 0.4 12.6-6.1v-63.9c12.9 0.1 25.9 0.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8 11 40.7 14 82.7 8.9 124.8-0.7 5.4-1.4 10.8-2.4 16.1h74.9c14.8-103.6-11.3-213-81-302.3z","p-id":"13309",fill:"#ffffff"},null,-1)])))]),_:1},8,["order"])):Ee("",!0),n.toolbar.indexOf("rotateRight")>-1?(U(),lt(g,{key:4,flex:"1",order:n.toolbar.indexOf("rotateRight")+1},{default:Re(()=>[(U(),ae("svg",{class:"ivu-image-preview-operations-item",onClick:t[9]||(t[9]=Ze(m=>i.handleOperation("rotateRight"),["stop"])),viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"13521",width:"200",height:"200"},t[20]||(t[20]=[ie("path",{d:"M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-0.4-12.6 6.1l-0.2 64c-118.6 0.5-235.8 53.4-314.6 154.2-69.6 89.2-95.7 198.6-81.1 302.4h74.9c-0.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8zM880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32z m-44 402H396V494h440v326z","p-id":"13522",fill:"#ffffff"},null,-1)])))]),_:1},8,["order"])):Ee("",!0),n.toolbar.indexOf("download")>-1?(U(),lt(g,{key:5,flex:"1",order:n.toolbar.indexOf("download")+1},{default:Re(()=>[St((U(),ae("svg",{class:"ivu-image-preview-operations-item",onClick:t[10]||(t[10]=Ze(m=>i.handleOperation("download"),["stop"])),viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"8825",width:"200",height:"200"},t[21]||(t[21]=[ie("path",{d:"M505.7 621c3.2 4.1 9.4 4.1 12.6 0l112-141.7c4.1-5.2 0.4-12.9-6.3-12.9h-72.1V120c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v346.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8z","p-id":"8826",fill:"#ffffff"},null,-1),ie("path",{d:"M903 516h-64c-4.4 0-8 3.6-8 8v300c0 4.4-3.6 8-8 8H199c-4.4 0-8-3.6-8-8V524c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v372c0 8.8 7.2 16 16 16h768c8.8 0 16-7.2 16-16V524c0-4.4-3.6-8-8-8z","p-id":"8827",fill:"#ffffff"},null,-1)]),512)),[[Pt,!o.downloading]]),St((U(),ae("svg",Gp,t[22]||(t[22]=[ie("path",{d:"M512 64c247.2 0 448 200.8 448 448h-64c0-212-172-384-384-384V64z m0 832c-212 0-384-172-384-384H64c0 247.2 200.8 448 448 448v-64z","p-id":"7817",fill:"#ffffff"},null,-1)]),512)),[[Pt,o.downloading]])]),_:1},8,["order"])):Ee("",!0)]),_:1})):Ee("",!0),n.previewList.length>1?(U(),lt(p,{key:3,class:G(i.leftClasses),type:"ios-arrow-back",onClick:t[12]||(t[12]=Ze(m=>i.handleSwitch(!1),["stop"]))},null,8,["class"])):Ee("",!0),n.previewList.length>1?(U(),lt(p,{key:4,class:G(i.rightClasses),type:"ios-arrow-forward",onClick:t[13]||(t[13]=Ze(m=>i.handleSwitch(!0),["stop"]))},null,8,["class"])):Ee("",!0),j(p,{class:"ivu-image-preview-arrow-close",type:"md-close",onClick:Ze(i.handleClose,["stop"])},null,8,["onClick"])],16)],4)):Ee("",!0)]),_:1})],8,["disabled"])}const Ii=tt(Yp,[["render",Jp]]);Ii.newInstance=e=>{if(!He)return;const t=e||{};let n=null;const l=Hr({data(){return Object.assign({},t,{visible:!1,previewList:[],initialIndex:0,toolbar:["zoomIn","zoomOut","original","rotateLeft","rotateRight","download"],infinite:!0,maskClosable:!0,transfer:!0})},render(){return Xe(Ii,Object.assign({},t,{ref:"imagePreview",modelValue:this.visible,previewList:this.previewList,initialIndex:this.initialIndex,toolbar:this.toolbar,infinite:this.infinite,maskClosable:this.maskClosable,transfer:this.transfer,"onOn-close":this.close}))},methods:{close(){this.visible=!1,setTimeout(()=>{this.destroy(),this.onRemove()},300)},destroy(){l.unmount(),document.body.removeChild(o)},onRemove(){}},created(){n=et()}}),o=document.createElement("div");document.body.appendChild(o),l.mount(o);const i=n.refs.imagePreview;return{show(d){Object.keys(d).forEach(g=>{i.$parent[g]=d[g]}),i.$parent.visible=!0},component:i}};let Ai;function Zp(){return Ai=Ai||Ii.newInstance(),Ai}Ii.show=function(e={}){const t=Zp();e.onRemove=function(){Ai=null},t.show(e)};const vt="ivu-input-number",ii="ivu-icon";function ai(e,t){let n,l,o;try{n=e.toString().split(".")[1].length}catch{n=0}try{l=t.toString().split(".")[1].length}catch{l=0}return o=Math.pow(10,Math.max(n,l)),(Math.round(e*o)+Math.round(t*o))/o}const eh={name:"InputNumber",mixins:[Nn],emits:["on-change","on-focus","on-blur","update:modelValue"],props:{max:{type:Number,default:1/0},min:{type:Number,default:-1/0},step:{type:Number,default:1},activeChange:{type:Boolean,default:!0},modelValue:{type:Number,default:1},size:{validator(e){return Ke(e,["small","large","default"])},default(){const e=et().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.size===""?"default":e.$VIEWUI.size}},disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},editable:{type:Boolean,default:!0},name:{type:String},precision:{type:Number},elementId:{type:String},formatter:{type:Function},parser:{type:Function},placeholder:{type:String,default:""},controlsOutside:{type:Boolean,default:!1}},data(){return{focused:!1,upDisabled:!1,downDisabled:!1,currentValue:this.modelValue}},computed:{wrapClasses(){return[`${vt}`,{[`${vt}-${this.size}`]:!!this.size,[`${vt}-disabled`]:this.itemDisabled,[`${vt}-focused`]:this.focused,[`${vt}-controls-outside`]:this.controlsOutside}]},handlerClasses(){return`${vt}-handler-wrap`},upClasses(){return[`${vt}-handler`,`${vt}-handler-up`,{[`${vt}-handler-up-disabled`]:this.upDisabled}]},innerUpClasses(){return`${vt}-handler-up-inner ${ii} ${ii}-ios-arrow-up`},downClasses(){return[`${vt}-handler`,`${vt}-handler-down`,{[`${vt}-handler-down-disabled`]:this.downDisabled}]},innerDownClasses(){return`${vt}-handler-down-inner ${ii} ${ii}-ios-arrow-down`},inputWrapClasses(){return`${vt}-input-wrap`},inputClasses(){return`${vt}-input`},precisionValue(){return this.currentValue?this.precision?this.currentValue.toFixed(this.precision):this.currentValue:this.currentValue},formatterValue(){return this.formatter&&this.precisionValue!==null?this.formatter(this.precisionValue):this.precisionValue}},methods:{preventDefault(e){e.preventDefault()},up(e){const t=Number(e.target.value);if(this.upDisabled&&isNaN(t))return!1;this.changeStep("up",e)},down(e){const t=Number(e.target.value);if(this.downDisabled&&isNaN(t))return!1;this.changeStep("down",e)},changeStep(e,t){if(this.itemDisabled||this.readonly)return!1;const n=Number(t.target.value);let l=Number(this.currentValue);const o=Number(this.step);if(isNaN(l))return!1;if(!isNaN(n)){if(e==="up")if(ai(n,o)<=this.max)l=n;else return!1;else if(e==="down")if(ai(n,-o)>=this.min)l=n;else return!1}e==="up"?l=ai(l,o):e==="down"&&(l=ai(l,-o)),this.setValue(l)},setValue(e){e&&!isNaN(this.precision)&&(e=Number(Number(e).toFixed(this.precision)));const{min:t,max:n}=this;e!==null&&(e>n?e=n:e<t&&(e=t)),It(()=>{this.currentValue=e,this.$emit("update:modelValue",e),this.$emit("on-change",e),this.handleFormItemChange("change",e)})},focus(e){this.focused=!0,this.$emit("on-focus",e)},blur(){this.focused=!1,this.$emit("on-blur"),Bi(this,["DatePicker","TimePicker","Cascader","Search"])||this.handleFormItemChange("blur",this.currentValue)},keyDown(e){e.keyCode===38?(e.preventDefault(),this.up(e)):e.keyCode===40&&(e.preventDefault(),this.down(e))},change(e){if(e.type==="change"&&this.activeChange||e.type==="input"&&!this.activeChange)return;let t=e.target.value.trim();if(this.parser&&(t=this.parser(t)),t.length===0){this.setValue(null);return}e.type==="input"&&t.match(/^\-?\.?$|\.$/)||(t=Number(t),isNaN(t)?e.target.value=this.currentValue:(this.currentValue=t,this.setValue(t)))},changeVal(e){if(e=Number(e),isNaN(e))this.upDisabled=!0,this.downDisabled=!0;else{const t=this.step;this.upDisabled=e+t>this.max,this.downDisabled=e-t<this.min}}},mounted(){this.changeVal(this.currentValue)},watch:{modelValue(e){this.currentValue=e},currentValue(e){this.changeVal(e)},min(){this.changeVal(this.currentValue)},max(){this.changeVal(this.currentValue)}}},th=["id","disabled","autofocus","readonly","name","value","placeholder"];function nh(e,t,n,l,o,i){return U(),ae("div",{class:G(i.wrapClasses)},[n.controlsOutside?Ee("",!0):(U(),ae("div",{key:0,class:G(i.handlerClasses)},[ie("a",{onClick:t[1]||(t[1]=(...d)=>i.up&&i.up(...d)),class:G(i.upClasses)},[ie("span",{class:G(i.innerUpClasses),onClick:t[0]||(t[0]=(...d)=>i.preventDefault&&i.preventDefault(...d))},null,2)],2),ie("a",{onClick:t[3]||(t[3]=(...d)=>i.down&&i.down(...d)),class:G(i.downClasses)},[ie("span",{class:G(i.innerDownClasses),onClick:t[2]||(t[2]=(...d)=>i.preventDefault&&i.preventDefault(...d))},null,2)],2)],2)),n.controlsOutside?(U(),ae("div",{key:1,class:G(["ivu-input-number-controls-outside-btn ivu-input-number-controls-outside-down",{"ivu-input-number-controls-outside-btn-disabled":o.downDisabled}]),onClick:t[4]||(t[4]=(...d)=>i.down&&i.down(...d))},t[12]||(t[12]=[ie("i",{class:"ivu-icon ivu-icon-ios-remove"},null,-1)]),2)):Ee("",!0),n.controlsOutside?(U(),ae("div",{key:2,class:G(["ivu-input-number-controls-outside-btn ivu-input-number-controls-outside-up",{"ivu-input-number-controls-outside-btn-disabled":o.upDisabled}]),onClick:t[5]||(t[5]=(...d)=>i.up&&i.up(...d))},t[13]||(t[13]=[ie("i",{class:"ivu-icon ivu-icon-ios-add"},null,-1)]),2)):Ee("",!0),ie("div",{class:G(i.inputWrapClasses)},[ie("input",{id:n.elementId,class:G(i.inputClasses),disabled:e.itemDisabled,autocomplete:"off",spellcheck:"false",autofocus:n.autofocus,onFocus:t[6]||(t[6]=(...d)=>i.focus&&i.focus(...d)),onBlur:t[7]||(t[7]=(...d)=>i.blur&&i.blur(...d)),onKeydown:t[8]||(t[8]=Ze((...d)=>i.keyDown&&i.keyDown(...d),["stop"])),onInput:t[9]||(t[9]=(...d)=>i.change&&i.change(...d)),onMouseup:t[10]||(t[10]=(...d)=>i.preventDefault&&i.preventDefault(...d)),onChange:t[11]||(t[11]=(...d)=>i.change&&i.change(...d)),readonly:n.readonly||!n.editable,name:n.name,value:i.formatterValue,placeholder:n.placeholder},null,42,th)],2)],2)}const rh=tt(eh,[["render",nh]]);function es(){return ir(),Mn}let Qo=es();Dn.newInstance=e=>{if(!He)return;const t=e||{};let n=null;const l=Hr({data(){return Object.assign({},t,{})},render(){let d="";return this.render?d=Xe(Dn,{fix:!0,fullscreen:!0,ref:"spin"},[this.render(Xe)]):d=Xe(Dn,{size:"large",fix:!0,fullscreen:!0,ref:"spin"}),Xe("div",{class:"ivu-spin-fullscreen ivu-spin-fullscreen-wrapper",style:{"z-index":2010+Qo}},[d])},created(){n=et()}}),o=document.createElement("div");document.body.appendChild(o),l.mount(o);const i=n.refs.spin;return{show(){It(()=>{n.refs.spin.visible=!0,Qo=es()})},remove(d){n.refs.spin.visible=!1,setTimeout(function(){l.unmount(),document.body.removeChild(o),d()},500)},component:i}};let Rr;function ts(e=void 0){return Rr=Rr||Dn.newInstance({render:e}),Rr}function ih(e){const t="render"in e?e.render:void 0;ts(t).show(e)}Dn.show=function(e={}){return ih(e)};Dn.hide=function(){if(!Rr)return!1;ts().remove(()=>{Rr=null})};const oi="ivu-loading-bar",ah={name:"LoadingBar",props:{color:{type:String,default:"primary"},failedColor:{type:String,default:"error"},height:{type:Number,default:2}},data(){return{percent:0,status:"success",show:!1}},computed:{classes(){return`${oi}`},innerClasses(){return[`${oi}-inner`,{[`${oi}-inner-color-primary`]:this.color==="primary"&&this.status==="success",[`${oi}-inner-failed-color-error`]:this.failedColor==="error"&&this.status==="error"}]},outerStyles(){return{height:`${this.height}px`}},styles(){let e={width:`${this.percent}%`,height:`${this.height}px`};return this.color!=="primary"&&this.status==="success"&&(e.backgroundColor=this.color),this.failedColor!=="error"&&this.status==="error"&&(e.backgroundColor=this.failedColor),e}}};function oh(e,t,n,l,o,i){return U(),lt(Xt,{name:"fade"},{default:Re(()=>[St(ie("div",{class:G(i.classes),style:je(i.outerStyles)},[ie("div",{class:G(i.innerClasses),style:je(i.styles)},null,6)],6),[[Pt,o.show]])]),_:1})}const Yo=tt(ah,[["render",oh]]);Yo.newInstance=e=>{if(!He)return;const t=e||{};let n=null;const l=Hr({data(){return t},render(){return Xe(Yo,Object.assign({ref:"loadingBar"},t))},created(){n=et()}}),o=document.createElement("div");document.body.appendChild(o),l.mount(o);const i=n.refs.loadingBar;return{update(d){"percent"in d&&(i.percent=d.percent),d.status&&(i.status=d.status),"show"in d&&(i.show=d.show)},component:i,destroy(){l.unmount(),document.body.removeChild(o)}}};const Bt="ivu-modal",Ko={x:null,y:null,dragX:null,dragY:null,dragging:!1,rect:null},lh={inheritAttrs:!1,name:"Modal",mixins:[Fa,_a],components:{Icon:Kt,iButton:yt},emits:["on-cancel","on-ok","on-hidden","on-visible-change","update:modelValue"],provide(){return{ModalInstance:this}},props:{modelValue:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},maskClosable:{type:Boolean,default(){const e=et().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.modal.maskClosable===""?!0:e.$VIEWUI.modal.maskClosable}},title:{type:String},width:{type:[Number,String],default:520},okText:{type:String},cancelText:{type:String},loading:{type:Boolean,default:!1},styles:{type:Object,default(){return{}}},className:{type:String},footerHide:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},transitionNames:{type:Array,default(){return["ease","fade"]}},transfer:{type:Boolean,default(){const e=et().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.transfer===""?!0:e.$VIEWUI.transfer}},fullscreen:{type:Boolean,default:!1},mask:{type:Boolean,default:!0},draggable:{type:Boolean,default:!1},sticky:{type:Boolean,default:!1},stickyDistance:{type:Number,default:10},resetDragPosition:{type:Boolean,default:!1},zIndex:{type:Number,default:1e3},beforeClose:Function,render:Function},data(){return{prefixCls:Bt,wrapShow:!1,showHead:!0,buttonLoading:!1,visible:this.modelValue,dragData:ki(Ko),modalIndex:this.handleGetModalIndex(),isMouseTriggerIn:!1,id:Ra(6),tableList:[],sliderList:[]}},computed:{wrapClasses(){return[`${Bt}-wrap`,{[`${Bt}-hidden`]:!this.wrapShow,[`${this.className}`]:!!this.className,[`${Bt}-no-mask`]:!this.showMask}]},wrapStyles(){return{zIndex:this.modalIndex+this.zIndex}},maskClasses(){return`${Bt}-mask`},classes(){return[`${Bt}`,{[`${Bt}-fullscreen`]:this.fullscreen,[`${Bt}-fullscreen-no-header`]:this.fullscreen&&!this.showHead,[`${Bt}-fullscreen-no-footer`]:this.fullscreen&&this.footerHide}]},contentClasses(){return[`${Bt}-content`,{[`${Bt}-content-no-mask`]:!this.showMask,[`${Bt}-content-drag`]:this.draggable&&!this.fullscreen,[`${Bt}-content-dragging`]:this.draggable&&this.dragData.dragging}]},mainStyles(){let e={};const t=parseInt(this.width),n=this.dragData.x!==null?{top:0}:{width:t<=100?`${t}%`:`${t}px`},l=this.styles?this.styles:{};return Object.assign(e,n,l),e},contentStyles(){let e={};if(this.draggable&&!this.fullscreen){const t=this.styles.top?parseFloat(this.styles.top):0,n=this.styles.left?parseFloat(this.styles.left):0;this.dragData.x!==null&&(e.left=`${this.dragData.x-n}px`),this.dragData.y!==null&&(e.top=`${this.dragData.y}px`),this.dragData.y!==null&&(e.top=`${this.dragData.y-t}px`);const l=parseInt(this.width),o={width:l<=100?`${l}%`:`${l}px`};Object.assign(e,o)}return e},localeOkText(){return this.okText===void 0?this.t("i.modal.okText"):this.okText},localeCancelText(){return this.cancelText===void 0?this.t("i.modal.cancelText"):this.cancelText},showMask(){return this.mask}},methods:{close(){if(!this.beforeClose)return this.handleClose();const e=this.beforeClose();e&&e.then?e.then(()=>{this.handleClose()}):this.handleClose()},handleClose(){this.visible=!1,this.$emit("update:modelValue",!1),this.$emit("on-cancel")},handleMask(){this.maskClosable&&this.showMask&&this.close()},handleWrapClick(e){if(this.isMouseTriggerIn){this.isMouseTriggerIn=!1;return}const t=e.target.getAttribute("class");t&&t.indexOf(`${Bt}-wrap`)>-1&&this.handleMask()},handleMousedown(){this.isMouseTriggerIn=!0},cancel(){this.close()},ok(){this.loading?this.buttonLoading=!0:(this.visible=!1,this.$emit("update:modelValue",!1)),this.$emit("on-ok")},EscClose(e){if(this.visible&&this.closable&&e.keyCode===27){const n=this.$root.modalList.map(l=>l.modal).filter(l=>l.$data.visible&&l.$props.closable).sort((l,o)=>l.$data.modalIndex<o.$data.modalIndex?1:-1)[0];setTimeout(()=>{n.close()},0)}},animationFinish(){this.$emit("on-hidden")},handleMoveStart(e){if(!this.draggable||this.fullscreen)return!1;const n=this.$refs.content.getBoundingClientRect();this.dragData.rect=n,this.dragData.x=n.x||n.left,this.dragData.y=n.y||n.top;const l={x:e.clientX,y:e.clientY};this.dragData.dragX=l.x,this.dragData.dragY=l.y,this.dragData.dragging=!0,We(window,"mousemove",this.handleMoveMove),We(window,"mouseup",this.handleMoveEnd)},handleMoveMove(e){if(!this.dragData.dragging||this.fullscreen)return!1;const t={x:e.clientX,y:e.clientY},n={x:t.x-this.dragData.dragX,y:t.y-this.dragData.dragY};if(He&&this.sticky){const l=document.documentElement.clientWidth,o=document.documentElement.clientHeight;this.dragData.x+n.x<=this.stickyDistance&&n.x<0?this.dragData.x=0:this.dragData.x+this.dragData.rect.width-l>-this.stickyDistance&&n.x>0?this.dragData.x=l-this.dragData.rect.width:this.dragData.x+=n.x,this.dragData.y+n.y<=this.stickyDistance&&n.y<0?this.dragData.y=0:this.dragData.y+this.dragData.rect.height-o>-this.stickyDistance&&n.y>0?this.dragData.y=o-this.dragData.rect.height:this.dragData.y+=n.y}else this.dragData.x+=n.x,this.dragData.y+=n.y;this.dragData.dragX=t.x,this.dragData.dragY=t.y},handleMoveEnd(){this.dragData.dragging=!1,At(window,"mousemove",this.handleMoveMove),At(window,"mouseup",this.handleMoveEnd)},handleGetModalIndex(){return ir(),Mn},handleClickModal(){if(this.draggable){if(fi!==this.lastVisibleIndex){this.lastVisibleIndex=fi;return}this.modalIndex=this.handleGetModalIndex()}},addModal(){const e=this.$root;e.modalList||(e.modalList=[]),e.modalList.push({id:this.id,modal:this})},removeModal(){const e=this.$root;if(!e.modalList)return;const t=e.modalList.findIndex(n=>n.id===this.id);e.modalList.splice(t,1)}},watch:{modelValue(e){this.visible=e},visible(e){e===!1?(this.buttonLoading=!1,this.timer=setTimeout(()=>{this.wrapShow=!1,this.removeScrollEffect()},300)):(this.lastVisible!==e&&(this.modalIndex=this.handleGetModalIndex(),Pu()),this.timer&&clearTimeout(this.timer),this.wrapShow=!0,this.scrollable||this.addScrollEffect()),this.tableList.forEach(t=>{t.table.handleOnVisibleChange(e)}),this.sliderList.forEach(t=>{t.slider.handleOnVisibleChange(e)}),this.$emit("on-visible-change",e),this.lastVisible=e,this.lastVisibleIndex=fi,e&&this.resetDragPosition&&(this.dragData=ki(Ko))},loading(e){e||(this.buttonLoading=!1)},scrollable(e){e?this.removeScrollEffect():this.addScrollEffect()},title(e){this.$slots.header===void 0&&(this.showHead=!!e)}},mounted(){this.visible&&(this.wrapShow=!0);let e=!0;this.$slots.header===void 0&&!this.title&&(e=!1),this.showHead=e,this.addModal(),He&&document.addEventListener("keydown",this.EscClose)},beforeUnmount(){this.removeModal(),He&&document.removeEventListener("keydown",this.EscClose),this.removeScrollEffect()}};function sh(e,t,n,l,o,i){const d=xt("Icon"),g=xt("i-button");return U(),lt(jr,{to:"body",disabled:!n.transfer},[j(Xt,{name:n.transitionNames[1]},{default:Re(()=>[i.showMask?St((U(),ae("div",{key:0,class:G(i.maskClasses),style:je(i.wrapStyles),onClick:t[0]||(t[0]=(...v)=>i.handleMask&&i.handleMask(...v))},null,6)),[[Pt,o.visible]]):Ee("",!0)]),_:1},8,["name"]),ie("div",{class:G(i.wrapClasses),style:je(i.wrapStyles),onClick:t[5]||(t[5]=(...v)=>i.handleWrapClick&&i.handleWrapClick(...v))},[j(Xt,{name:n.transitionNames[0],onAfterLeave:i.animationFinish},{default:Re(()=>[St(ie("div",Li(e.$attrs,{class:i.classes,style:i.mainStyles,onMousedown:t[4]||(t[4]=(...v)=>i.handleMousedown&&i.handleMousedown(...v))}),[ie("div",{class:G(i.contentClasses),ref:"content",style:je(i.contentStyles),onClick:t[3]||(t[3]=(...v)=>i.handleClickModal&&i.handleClickModal(...v))},[n.closable?(U(),ae("a",{key:0,class:G([o.prefixCls+"-close"]),onClick:t[1]||(t[1]=(...v)=>i.close&&i.close(...v))},[Te(e.$slots,"close",{},()=>[j(d,{type:"ios-close"})])],2)):Ee("",!0),o.showHead?(U(),ae("div",{key:1,class:G([o.prefixCls+"-header"]),onMousedown:t[2]||(t[2]=(...v)=>i.handleMoveStart&&i.handleMoveStart(...v))},[Te(e.$slots,"header",{},()=>[ie("div",{class:G([o.prefixCls+"-header-inner"])},wt(n.title),3)])],34)):Ee("",!0),ie("div",{class:G([o.prefixCls+"-body"])},[Te(e.$slots,"default")],2),n.footerHide?Ee("",!0):(U(),ae("div",{key:2,class:G([o.prefixCls+"-footer"])},[Te(e.$slots,"footer",{},()=>[j(g,{type:"text",onClick:i.cancel},{default:Re(()=>[gn(wt(i.localeCancelText),1)]),_:1},8,["onClick"]),j(g,{type:"primary",loading:o.buttonLoading,onClick:i.ok},{default:Re(()=>[gn(wt(i.localeOkText),1)]),_:1},8,["loading","onClick"])])],2))],6)],16),[[Pt,o.visible]])]),_:3},8,["name","onAfterLeave"])],6)],8,["disabled"])}const Rt=tt(lh,[["render",sh]]),ln="ivu-modal-confirm";Rt.newInstance=e=>{if(!He)return;const t=e||{},n=document.createElement("div");document.body.appendChild(n);let l=null;const o=Hr({mixins:[Fa],data(){return Object.assign({},t,{visible:!1,width:416,title:"",body:"",iconType:"",iconName:"",okText:void 0,cancelText:void 0,showCancel:!1,loading:!1,buttonLoading:!1,scrollable:!1,closable:!1,closing:!1})},render(){let d=[];this.showCancel&&d.push(Xe(yt,{type:"text",onClick:this.cancel},()=>this.localeCancelText)),d.push(Xe(yt,{type:"primary",loading:this.buttonLoading,onClick:this.ok},()=>this.localeOkText));let g;this.render?g=Xe("div",{class:`${ln}-body ${ln}-body-render`},[this.render(Xe)]):g=Xe("div",{class:`${ln}-body`},[Xe("div",{innerHTML:this.body})]);let v;return this.title&&(v=Xe("div",{class:`${ln}-head`},[Xe("div",{class:this.iconTypeCls},[Xe("i",{class:this.iconNameCls})]),Xe("div",{class:`${ln}-head-title`,innerHTML:this.title})])),Xe(Rt,Object.assign({},t,{width:this.width,scrollable:this.scrollable,closable:this.closable,ref:"modal"},{modelValue:this.visible,"onUpdate:modelValue":p=>this.visible=p,"onOn-cancel":this.cancel}),()=>Xe("div",{class:ln},[v,g,Xe("div",{class:`${ln}-footer`},d)]))},computed:{iconTypeCls(){return[`${ln}-head-icon`,`${ln}-head-icon-${this.iconType}`]},iconNameCls(){return["ivu-icon",`ivu-icon-${this.iconName}`]},localeOkText(){return this.okText?this.okText:this.t("i.modal.okText")},localeCancelText(){return this.cancelText?this.cancelText:this.t("i.modal.cancelText")}},methods:{cancel(){this.closing||(this.$refs.modal.visible=!1,this.buttonLoading=!1,this.onCancel(),this.remove())},ok(){this.closing||(this.loading?this.buttonLoading=!0:(this.$refs.modal.visible=!1,this.remove()),this.onOk())},remove(){this.closing=!0,setTimeout(()=>{this.closing=!1,this.destroy()},300)},destroy(){o.unmount(),document.body.removeChild(n),this.onRemove()},onOk(){},onCancel(){},onRemove(){}},created(){l=et()}});o.mount(n);const i=l.refs.modal;return{show(d){switch(i.$parent.showCancel=d.showCancel,i.$parent.iconType=d.icon,d.icon){case"info":i.$parent.iconName="ios-information-circle";break;case"success":i.$parent.iconName="ios-checkmark-circle";break;case"warning":i.$parent.iconName="ios-alert";break;case"error":i.$parent.iconName="ios-close-circle";break;case"confirm":i.$parent.iconName="ios-help-circle";break}"width"in d&&(i.$parent.width=d.width),"closable"in d&&(i.$parent.closable=d.closable),"title"in d&&(i.$parent.title=d.title),"content"in d&&(i.$parent.body=d.content),"okText"in d&&(i.$parent.okText=d.okText),"cancelText"in d&&(i.$parent.cancelText=d.cancelText),"onCancel"in d&&(i.$parent.onCancel=d.onCancel),"onOk"in d&&(i.$parent.onOk=d.onOk),"loading"in d&&(i.$parent.loading=d.loading),"scrollable"in d&&(i.$parent.scrollable=d.scrollable),i.$parent.onRemove=d.onRemove,i.visible=!0},remove(){i.visible=!1,i.$parent.buttonLoading=!1,i.$parent.remove()},component:i}};let qr;function ns(e=void 0,t=!0){return qr=qr||Rt.newInstance({closable:!1,maskClosable:!1,footerHide:!0,render:e,lockScroll:t}),qr}function Ur(e){const t="render"in e?e.render:void 0,n="lockScroll"in e?e.lockScroll:!0;let l=ns(t,n);e.onRemove=function(){qr=null},l.show(e)}Rt.info=function(e={}){return e.icon="info",e.showCancel=!1,Ur(e)};Rt.success=function(e={}){return e.icon="success",e.showCancel=!1,Ur(e)};Rt.warning=function(e={}){return e.icon="warning",e.showCancel=!1,Ur(e)};Rt.error=function(e={}){return e.icon="error",e.showCancel=!1,Ur(e)};Rt.confirm=function(e={}){return e.icon="confirm",e.showCancel=!0,Ur(e)};Rt.remove=function(){if(!qr)return!1;ns().remove()};var gi={exports:{}};/*! @preserve
 * numeral.js
 * version : 2.0.6
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */var dh=gi.exports,Xo;function uh(){return Xo||(Xo=1,function(e){(function(t,n){e.exports?e.exports=n():t.numeral=n()})(dh,function(){var t,n,l="2.0.6",o={},i={},d={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},g={currentLocale:d.currentLocale,zeroFormat:d.zeroFormat,nullFormat:d.nullFormat,defaultFormat:d.defaultFormat,scalePercentBy100:d.scalePercentBy100};function v(p,m){this._input=p,this._value=m}return t=function(p){var m,x,y,k;if(t.isNumeral(p))m=p.value();else if(p===0||typeof p>"u")m=0;else if(p===null||n.isNaN(p))m=null;else if(typeof p=="string")if(g.zeroFormat&&p===g.zeroFormat)m=0;else if(g.nullFormat&&p===g.nullFormat||!p.replace(/[^0-9]+/g,"").length)m=null;else{for(x in o)if(k=typeof o[x].regexps.unformat=="function"?o[x].regexps.unformat():o[x].regexps.unformat,k&&p.match(k)){y=o[x].unformat;break}y=y||t._.stringToNumber,m=y(p)}else m=Number(p)||null;return new v(p,m)},t.version=l,t.isNumeral=function(p){return p instanceof v},t._=n={numberToFormat:function(p,m,x){var y=i[t.options.currentLocale],k=!1,S=!1,A=0,T="",V=1e12,O=1e9,q=1e6,R=1e3,F="",C=!1,N,z,X,H,oe,ye,pe;if(p=p||0,z=Math.abs(p),t._.includes(m,"(")?(k=!0,m=m.replace(/[\(|\)]/g,"")):(t._.includes(m,"+")||t._.includes(m,"-"))&&(oe=t._.includes(m,"+")?m.indexOf("+"):p<0?m.indexOf("-"):-1,m=m.replace(/[\+|\-]/g,"")),t._.includes(m,"a")&&(N=m.match(/a(k|m|b|t)?/),N=N?N[1]:!1,t._.includes(m," a")&&(T=" "),m=m.replace(new RegExp(T+"a[kmbt]?"),""),z>=V&&!N||N==="t"?(T+=y.abbreviations.trillion,p=p/V):z<V&&z>=O&&!N||N==="b"?(T+=y.abbreviations.billion,p=p/O):z<O&&z>=q&&!N||N==="m"?(T+=y.abbreviations.million,p=p/q):(z<q&&z>=R&&!N||N==="k")&&(T+=y.abbreviations.thousand,p=p/R)),t._.includes(m,"[.]")&&(S=!0,m=m.replace("[.]",".")),X=p.toString().split(".")[0],H=m.split(".")[1],ye=m.indexOf(","),A=(m.split(".")[0].split(",")[0].match(/0/g)||[]).length,H?(t._.includes(H,"[")?(H=H.replace("]",""),H=H.split("["),F=t._.toFixed(p,H[0].length+H[1].length,x,H[1].length)):F=t._.toFixed(p,H.length,x),X=F.split(".")[0],t._.includes(F,".")?F=y.delimiters.decimal+F.split(".")[1]:F="",S&&Number(F.slice(1))===0&&(F="")):X=t._.toFixed(p,0,x),T&&!N&&Number(X)>=1e3&&T!==y.abbreviations.trillion)switch(X=String(Number(X)/1e3),T){case y.abbreviations.thousand:T=y.abbreviations.million;break;case y.abbreviations.million:T=y.abbreviations.billion;break;case y.abbreviations.billion:T=y.abbreviations.trillion;break}if(t._.includes(X,"-")&&(X=X.slice(1),C=!0),X.length<A)for(var se=A-X.length;se>0;se--)X="0"+X;return ye>-1&&(X=X.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+y.delimiters.thousands)),m.indexOf(".")===0&&(X=""),pe=X+F+(T||""),k?pe=(k&&C?"(":"")+pe+(k&&C?")":""):oe>=0?pe=oe===0?(C?"-":"+")+pe:pe+(C?"-":"+"):C&&(pe="-"+pe),pe},stringToNumber:function(p){var m=i[g.currentLocale],x=p,y={thousand:3,million:6,billion:9,trillion:12},k,S,A;if(g.zeroFormat&&p===g.zeroFormat)S=0;else if(g.nullFormat&&p===g.nullFormat||!p.replace(/[^0-9]+/g,"").length)S=null;else{S=1,m.delimiters.decimal!=="."&&(p=p.replace(/\./g,"").replace(m.delimiters.decimal,"."));for(k in y)if(A=new RegExp("[^a-zA-Z]"+m.abbreviations[k]+"(?:\\)|(\\"+m.currency.symbol+")?(?:\\))?)?$"),x.match(A)){S*=Math.pow(10,y[k]);break}S*=(p.split("-").length+Math.min(p.split("(").length-1,p.split(")").length-1))%2?1:-1,p=p.replace(/[^0-9\.]+/g,""),S*=Number(p)}return S},isNaN:function(p){return typeof p=="number"&&isNaN(p)},includes:function(p,m){return p.indexOf(m)!==-1},insert:function(p,m,x){return p.slice(0,x)+m+p.slice(x)},reduce:function(p,m){if(this===null)throw new TypeError("Array.prototype.reduce called on null or undefined");if(typeof m!="function")throw new TypeError(m+" is not a function");var x=Object(p),y=x.length>>>0,k=0,S;if(arguments.length===3)S=arguments[2];else{for(;k<y&&!(k in x);)k++;if(k>=y)throw new TypeError("Reduce of empty array with no initial value");S=x[k++]}for(;k<y;k++)k in x&&(S=m(S,x[k],k,x));return S},multiplier:function(p){var m=p.toString().split(".");return m.length<2?1:Math.pow(10,m[1].length)},correctionFactor:function(){var p=Array.prototype.slice.call(arguments);return p.reduce(function(m,x){var y=n.multiplier(x);return m>y?m:y},1)},toFixed:function(p,m,x,y){var k=p.toString().split("."),S=m-(y||0),A,T,V,O;return k.length===2?A=Math.min(Math.max(k[1].length,S),m):A=S,V=Math.pow(10,A),O=(x(p+"e+"+A)/V).toFixed(A),y>m-A&&(T=new RegExp("\\.?0{1,"+(y-(m-A))+"}$"),O=O.replace(T,"")),O}},t.options=g,t.formats=o,t.locales=i,t.locale=function(p){return p&&(g.currentLocale=p.toLowerCase()),g.currentLocale},t.localeData=function(p){if(!p)return i[g.currentLocale];if(p=p.toLowerCase(),!i[p])throw new Error("Unknown locale : "+p);return i[p]},t.reset=function(){for(var p in d)g[p]=d[p]},t.zeroFormat=function(p){g.zeroFormat=typeof p=="string"?p:null},t.nullFormat=function(p){g.nullFormat=typeof p=="string"?p:null},t.defaultFormat=function(p){g.defaultFormat=typeof p=="string"?p:"0.0"},t.register=function(p,m,x){if(m=m.toLowerCase(),this[p+"s"][m])throw new TypeError(m+" "+p+" already registered.");return this[p+"s"][m]=x,x},t.validate=function(p,m){var x,y,k,S,A,T,V,O;if(typeof p!="string"&&(p+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",p)),p=p.trim(),p.match(/^\d+$/))return!0;if(p==="")return!1;try{V=t.localeData(m)}catch{V=t.localeData(t.locale())}return k=V.currency.symbol,A=V.abbreviations,x=V.delimiters.decimal,V.delimiters.thousands==="."?y="\\.":y=V.delimiters.thousands,O=p.match(/^[^\d]+/),O!==null&&(p=p.substr(1),O[0]!==k)||(O=p.match(/[^\d]+$/),O!==null&&(p=p.slice(0,-1),O[0]!==A.thousand&&O[0]!==A.million&&O[0]!==A.billion&&O[0]!==A.trillion))?!1:(T=new RegExp(y+"{2}"),p.match(/[^\d.,]/g)?!1:(S=p.split(x),S.length>2?!1:S.length<2?!!S[0].match(/^\d+.*\d$/)&&!S[0].match(T):S[0].length===1?!!S[0].match(/^\d+$/)&&!S[0].match(T)&&!!S[1].match(/^\d+$/):!!S[0].match(/^\d+.*\d$/)&&!S[0].match(T)&&!!S[1].match(/^\d+$/)))},t.fn=v.prototype={clone:function(){return t(this)},format:function(p,m){var x=this._value,y=p||g.defaultFormat,k,S,A;if(m=m||Math.round,x===0&&g.zeroFormat!==null)S=g.zeroFormat;else if(x===null&&g.nullFormat!==null)S=g.nullFormat;else{for(k in o)if(y.match(o[k].regexps.format)){A=o[k].format;break}A=A||t._.numberToFormat,S=A(x,y,m)}return S},value:function(){return this._value},input:function(){return this._input},set:function(p){return this._value=Number(p),this},add:function(p){var m=n.correctionFactor.call(null,this._value,p);function x(y,k,S,A){return y+Math.round(m*k)}return this._value=n.reduce([this._value,p],x,0)/m,this},subtract:function(p){var m=n.correctionFactor.call(null,this._value,p);function x(y,k,S,A){return y-Math.round(m*k)}return this._value=n.reduce([p],x,Math.round(this._value*m))/m,this},multiply:function(p){function m(x,y,k,S){var A=n.correctionFactor(x,y);return Math.round(x*A)*Math.round(y*A)/Math.round(A*A)}return this._value=n.reduce([this._value,p],m,1),this},divide:function(p){function m(x,y,k,S){var A=n.correctionFactor(x,y);return Math.round(x*A)/Math.round(y*A)}return this._value=n.reduce([this._value,p],m),this},difference:function(p){return Math.abs(t(this._value).subtract(p).value())}},t.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(p){var m=p%10;return~~(p%100/10)===1?"th":m===1?"st":m===2?"nd":m===3?"rd":"th"},currency:{symbol:"$"}}),function(){t.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(p,m,x){var y=t._.includes(m," BPS")?" ":"",k;return p=p*1e4,m=m.replace(/\s?BPS/,""),k=t._.numberToFormat(p,m,x),t._.includes(k,")")?(k=k.split(""),k.splice(-1,0,y+"BPS"),k=k.join("")):k=k+y+"BPS",k},unformat:function(p){return+(t._.stringToNumber(p)*1e-4).toFixed(15)}})}(),function(){var p={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]},m={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},x=p.suffixes.concat(m.suffixes.filter(function(k){return p.suffixes.indexOf(k)<0})),y=x.join("|");y="("+y.replace("B","B(?!PS)")+")",t.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(y)},format:function(k,S,A){var T,V=t._.includes(S,"ib")?m:p,O=t._.includes(S," b")||t._.includes(S," ib")?" ":"",q,R,F;for(S=S.replace(/\s?i?b/,""),q=0;q<=V.suffixes.length;q++)if(R=Math.pow(V.base,q),F=Math.pow(V.base,q+1),k===null||k===0||k>=R&&k<F){O+=V.suffixes[q],R>0&&(k=k/R);break}return T=t._.numberToFormat(k,S,A),T+O},unformat:function(k){var S=t._.stringToNumber(k),A,T;if(S){for(A=p.suffixes.length-1;A>=0;A--){if(t._.includes(k,p.suffixes[A])){T=Math.pow(p.base,A);break}if(t._.includes(k,m.suffixes[A])){T=Math.pow(m.base,A);break}}S*=T||1}return S}})}(),function(){t.register("format","currency",{regexps:{format:/(\$)/},format:function(p,m,x){var y=t.locales[t.options.currentLocale],k={before:m.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:m.match(/([\+|\-|\)|\s|\$]*)$/)[0]},S,A,T;for(m=m.replace(/\s?\$\s?/,""),S=t._.numberToFormat(p,m,x),p>=0?(k.before=k.before.replace(/[\-\(]/,""),k.after=k.after.replace(/[\-\)]/,"")):p<0&&!t._.includes(k.before,"-")&&!t._.includes(k.before,"(")&&(k.before="-"+k.before),T=0;T<k.before.length;T++)switch(A=k.before[T],A){case"$":S=t._.insert(S,y.currency.symbol,T);break;case" ":S=t._.insert(S," ",T+y.currency.symbol.length-1);break}for(T=k.after.length-1;T>=0;T--)switch(A=k.after[T],A){case"$":S=T===k.after.length-1?S+y.currency.symbol:t._.insert(S,y.currency.symbol,-(k.after.length-(1+T)));break;case" ":S=T===k.after.length-1?S+" ":t._.insert(S," ",-(k.after.length-(1+T)+y.currency.symbol.length-1));break}return S}})}(),function(){t.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(p,m,x){var y,k=typeof p=="number"&&!t._.isNaN(p)?p.toExponential():"0e+0",S=k.split("e");return m=m.replace(/e[\+|\-]{1}0/,""),y=t._.numberToFormat(Number(S[0]),m,x),y+"e"+S[1]},unformat:function(p){var m=t._.includes(p,"e+")?p.split("e+"):p.split("e-"),x=Number(m[0]),y=Number(m[1]);y=t._.includes(p,"e-")?y*=-1:y;function k(S,A,T,V){var O=t._.correctionFactor(S,A),q=S*O*(A*O)/(O*O);return q}return t._.reduce([x,Math.pow(10,y)],k,1)}})}(),function(){t.register("format","ordinal",{regexps:{format:/(o)/},format:function(p,m,x){var y=t.locales[t.options.currentLocale],k,S=t._.includes(m," o")?" ":"";return m=m.replace(/\s?o/,""),S+=y.ordinal(p),k=t._.numberToFormat(p,m,x),k+S}})}(),function(){t.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(p,m,x){var y=t._.includes(m," %")?" ":"",k;return t.options.scalePercentBy100&&(p=p*100),m=m.replace(/\s?\%/,""),k=t._.numberToFormat(p,m,x),t._.includes(k,")")?(k=k.split(""),k.splice(-1,0,y+"%"),k=k.join("")):k=k+y+"%",k},unformat:function(p){var m=t._.stringToNumber(p);return t.options.scalePercentBy100?m*.01:m}})}(),function(){t.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(p,m,x){var y=Math.floor(p/60/60),k=Math.floor((p-y*60*60)/60),S=Math.round(p-y*60*60-k*60);return y+":"+(k<10?"0"+k:k)+":"+(S<10?"0"+S:S)},unformat:function(p){var m=p.split(":"),x=0;return m.length===3?(x=x+Number(m[0])*60*60,x=x+Number(m[1])*60,x=x+Number(m[2])):m.length===2&&(x=x+Number(m[0])*60,x=x+Number(m[1])),Number(x)}})}(),t})}(gi)),gi.exports}uh();Du();const ch={name:"SliderMarker",props:{mark:{type:[String,Object]}},render(){let e=typeof this.mark=="string"?this.mark:[this.mark.label];return Xe("div",{class:"ivu-slider-marks-item",style:this.mark.style||{}},e)}},sn="ivu-slider",ph={name:"Slider",mixins:[Nn],emits:["update:modelValue","on-input","on-change"],components:{InputNumber:rh,Tooltip:pc,SliderMarker:ch},inject:{ModalInstance:{default:null},DrawerInstance:{default:null}},props:{min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},range:{type:Boolean,default:!1},modelValue:{type:[Number,Array],default:0},disabled:{type:Boolean,default:!1},showInput:{type:Boolean,default:!1},inputSize:{type:String,default:"default",validator(e){return Ke(e,["small","large","default"])}},showStops:{type:Boolean,default:!1},tipFormat:{type:Function,default(e){return e}},showTip:{type:String,default:"hover",validator(e){return Ke(e,["hover","always","never"])}},name:{type:String},activeChange:{type:Boolean,default:!0},marks:{type:Object}},data(){let e=this.checkLimits(Array.isArray(this.modelValue)?this.modelValue:[this.modelValue]);return this.range&&this.modelValue===null&&(e=[0,0]),{prefixCls:sn,currentValue:e,dragging:!1,pointerDown:"",startX:0,currentX:0,startPos:0,oldValue:[...e],valueIndex:{min:0,max:1},sliderWidth:0,isValueNull:!1,id:Ra(6)}},watch:{modelValue(e){e===null&&(this.isValueNull=!0),e=this.checkLimits(Array.isArray(e)?e:[e]),!this.dragging&&(e[0]!==this.currentValue[0]||e[1]!==this.currentValue[1])&&(this.isValueNull&&this.range?this.currentValue=[0,0]:this.currentValue=e)},exportValue(e){It(()=>{this.$refs.minTooltip.updatePopper(),this.range&&this.$refs.maxTooltip.updatePopper()});const t=this.range?e:e[0];this.isValueNull?(this.isValueNull=!1,this.$emit("update:modelValue",null)):this.$emit("update:modelValue",t),this.$emit("on-input",t)}},computed:{classes(){return[`${sn}`,{[`${sn}-input`]:this.showInput&&!this.range,[`${sn}-range`]:this.range,[`${sn}-disabled`]:this.itemDisabled}]},minButtonClasses(){return[`${sn}-button`,{[`${sn}-button-dragging`]:this.pointerDown==="min"}]},maxButtonClasses(){return[`${sn}-button`,{[`${sn}-button-dragging`]:this.pointerDown==="max"}]},exportValue(){const e=(String(this.step).split(".")[1]||"").length;return this.currentValue.map(t=>Number(t.toFixed(e)))},minPosition(){return(this.currentValue[0]-this.min)/this.valueRange*100},maxPosition:function(){return(this.currentValue[1]-this.min)/this.valueRange*100},barStyle(){const e={width:(this.currentValue[0]-this.min)/this.valueRange*100+"%"};return this.range&&(e.left=(this.currentValue[0]-this.min)/this.valueRange*100+"%",e.width=(this.currentValue[1]-this.currentValue[0])/this.valueRange*100+"%"),e},stops(){let e=this.valueRange/this.step,t=[],n=100*this.step/this.valueRange;for(let l=1;l<e;l++)t.push(l*n);return t},markList(){return this.marks?Object.keys(this.marks).map(parseFloat).sort((t,n)=>t-n).filter(t=>t<=this.max&&t>=this.min).map(t=>({point:t,position:(t-this.min)*100/(this.max-this.min),mark:this.marks[t]})):[]},tipDisabled(){return this.tipFormat(this.currentValue[0])===null||this.showTip==="never"},valueRange(){return this.max-this.min},firstPosition(){return this.currentValue[0]},secondPosition(){return this.currentValue[1]}},methods:{getPointerX(e){return e.type.indexOf("touch")!==-1?e.touches[0].clientX:e.clientX},checkLimits([e,t]){return e=Math.max(this.min,e),e=Math.min(this.max,e),t=Math.max(this.min,e,t),t=Math.min(this.max,t),[e,t]},getCurrentValue(e,t){if(this.itemDisabled)return;const n=this.valueIndex[t];if(!(typeof n>"u"))return this.currentValue[n]},onKeyLeft(e,t){const n=this.getCurrentValue(e,t);Number.isFinite(n)&&this.changeButtonPosition(n-this.step,t)},onKeyRight(e,t){const n=this.getCurrentValue(e,t);Number.isFinite(n)&&this.changeButtonPosition(n+this.step,t)},onPointerDown(e,t){this.itemDisabled||(e.preventDefault(),this.pointerDown=t,this.onPointerDragStart(e),We(window,"mousemove",this.onPointerDrag),We(window,"touchmove",this.onPointerDrag),We(window,"mouseup",this.onPointerDragEnd),We(window,"touchend",this.onPointerDragEnd))},onPointerDragStart(e){this.dragging=!1,this.startX=this.getPointerX(e),this.startPos=this[`${this.pointerDown}Position`]*this.valueRange/100+this.min},onPointerDrag(e){this.dragging=!0,this.$refs[`${this.pointerDown}Tooltip`].visible=!0,this.currentX=this.getPointerX(e);const t=(this.currentX-this.startX)/this.sliderWidth*this.valueRange;this.changeButtonPosition(this.startPos+t)},onPointerDragEnd(){this.dragging&&(this.dragging=!1,this.$refs[`${this.pointerDown}Tooltip`].visible=!1,this.emitChange()),this.pointerDown="",At(window,"mousemove",this.onPointerDrag),At(window,"touchmove",this.onPointerDrag),At(window,"mouseup",this.onPointerDragEnd),At(window,"touchend",this.onPointerDragEnd)},changeButtonPosition(e,t){const n=t||this.pointerDown,l=n==="min"?0:1;n==="min"?e=this.checkLimits([e,this.max])[0]:e=this.checkLimits([this.min,e])[1];const o=this.handleDecimal(e,this.step),i=this.currentValue;i[l]=e-o,this.range&&(n==="min"&&i[0]>i[1]&&(i[1]=i[0]),n==="max"&&i[0]>i[1]&&(i[0]=i[1])),this.currentValue=[...i],this.dragging||this.currentValue[l]!==this.oldValue[l]&&(this.emitChange(),this.oldValue[l]=this.currentValue[l])},handleDecimal(e,t){if(t<1){let n=t.toString(),l=1,o;try{o=n.split(".")[1].length}catch{o=0}return l=Math.pow(10,o),e*l%(t*l)/l}else return e%t},emitChange(){const e=this.range?this.exportValue:this.exportValue[0];this.$emit("on-change",e),this.handleFormItemChange("change",e)},sliderClick(e){if(this.itemDisabled)return;const t=this.getPointerX(e),n=this.$refs.slider.getBoundingClientRect().left;let l=(t-n)/this.sliderWidth*this.valueRange+this.min,o=l/this.valueRange*100;!this.range||o<=this.minPosition?this.changeButtonPosition(l,"min"):o>=this.maxPosition?this.changeButtonPosition(l,"max"):this.changeButtonPosition(l,l-this.firstPosition<=this.secondPosition-l?"min":"max")},handleInputChange(e){this.currentValue=[e===0?0:e||this.min,this.currentValue[1]],this.emitChange()},handleFocus(e){this.$refs[`${e}Tooltip`].handleShowPopper()},handleBlur(e){this.$refs[`${e}Tooltip`].handleClosePopper()},handleSetSliderWidth(){this.sliderWidth=parseInt(jl(this.$refs.slider,"width"),10)},handleOnVisibleChange(e){e&&this.showTip==="always"&&(this.$refs.minTooltip.doDestroy(),this.range&&this.$refs.maxTooltip.doDestroy(),It(()=>{this.$refs.minTooltip.updatePopper(),this.range&&this.$refs.maxTooltip.updatePopper()}))},addSlider(e){const t=this[e];t&&(t.sliderList||(t.sliderList=[]),t.sliderList.push({id:this.id,slider:this}))},removeSlider(e){const t=this[e];if(!t||!t.sliderList)return;const n=t.sliderList.findIndex(l=>l.id===this.id);t.sliderList.splice(n,1)}},mounted(){this.addSlider("ModalInstance"),this.addSlider("DrawerInstance"),this.observer=$p(),this.observer.listenTo(this.$refs.slider,this.handleSetSliderWidth)},beforeUnmount(){this.removeSlider("ModalInstance"),this.removeSlider("DrawerInstance"),this.observer.removeListener(this.$refs.slider,this.handleSetSliderWidth)}},hh=["name","value"],fh={class:"ivu-slider-marks"};function mh(e,t,n,l,o,i){const d=xt("Input-number"),g=xt("SliderMarker"),v=xt("Tooltip");return U(),ae("div",{class:G(i.classes)},[!n.range&&n.showInput?(U(),lt(d,{key:0,min:n.min,size:n.inputSize,max:n.max,step:n.step,modelValue:i.exportValue[0],disabled:e.itemDisabled,"active-change":n.activeChange,onOnChange:i.handleInputChange},null,8,["min","size","max","step","modelValue","disabled","active-change","onOnChange"])):Ee("",!0),ie("div",{class:G([o.prefixCls+"-wrap"]),ref:"slider",onClick:t[19]||(t[19]=Ze((...p)=>i.sliderClick&&i.sliderClick(...p),["self"]))},[ie("input",{type:"hidden",name:n.name,value:i.exportValue},null,8,hh),ie("div",{class:G([o.prefixCls+"-bar"]),style:je(i.barStyle),onClick:t[0]||(t[0]=Ze((...p)=>i.sliderClick&&i.sliderClick(...p),["self"]))},null,6),n.showStops?(U(!0),ae(un,{key:0},pi(i.stops,p=>(U(),ae("div",{class:G([o.prefixCls+"-stop"]),key:p,style:je({left:p+"%"}),onClick:t[1]||(t[1]=Ze((...m)=>i.sliderClick&&i.sliderClick(...m),["self"]))},null,6))),128)):Ee("",!0),i.markList.length>0?(U(),ae(un,{key:1},[(U(!0),ae(un,null,pi(i.markList,(p,m)=>(U(),ae("div",{key:m,class:G([o.prefixCls+"-stop"]),style:je({left:p.position+"%"}),onClick:t[2]||(t[2]=Ze((...x)=>i.sliderClick&&i.sliderClick(...x),["self"]))},null,6))),128)),ie("div",fh,[(U(!0),ae(un,null,pi(i.markList,(p,m)=>(U(),lt(g,{key:m,mark:p.mark,style:je({left:p.position+"%"}),onClick:i.sliderClick},null,8,["mark","style","onClick"]))),128))])],64)):Ee("",!0),ie("div",{class:G([o.prefixCls+"-button-wrap"]),style:je({left:i.minPosition+"%"}),onTouchstart:t[9]||(t[9]=p=>i.onPointerDown(p,"min")),onMousedown:t[10]||(t[10]=p=>i.onPointerDown(p,"min"))},[j(v,{controlled:o.pointerDown==="min",placement:"top",content:n.tipFormat(i.exportValue[0]),disabled:i.tipDisabled,always:n.showTip==="always",ref:"minTooltip"},{default:Re(()=>[ie("div",{class:G(i.minButtonClasses),tabindex:"0",onFocus:t[3]||(t[3]=p=>i.handleFocus("min")),onBlur:t[4]||(t[4]=p=>i.handleBlur("min")),onKeydown:[t[5]||(t[5]=Ut(p=>i.onKeyLeft(p,"min"),["left"])),t[6]||(t[6]=Ut(p=>i.onKeyLeft(p,"min"),["down"])),t[7]||(t[7]=Ut(p=>i.onKeyRight(p,"min"),["right"])),t[8]||(t[8]=Ut(p=>i.onKeyRight(p,"min"),["up"]))]},null,34)]),_:1},8,["controlled","content","disabled","always"])],38),n.range?(U(),ae("div",{key:2,class:G([o.prefixCls+"-button-wrap"]),style:je({left:i.maxPosition+"%"}),onTouchstart:t[17]||(t[17]=p=>i.onPointerDown(p,"max")),onMousedown:t[18]||(t[18]=p=>i.onPointerDown(p,"max"))},[j(v,{controlled:o.pointerDown==="max",placement:"top",content:n.tipFormat(i.exportValue[1]),disabled:i.tipDisabled,always:n.showTip==="always",ref:"maxTooltip"},{default:Re(()=>[ie("div",{class:G(i.maxButtonClasses),tabindex:"0",onFocus:t[11]||(t[11]=p=>i.handleFocus("max")),onBlur:t[12]||(t[12]=p=>i.handleBlur("max")),onKeydown:[t[13]||(t[13]=Ut(p=>i.onKeyLeft(p,"max"),["left"])),t[14]||(t[14]=Ut(p=>i.onKeyLeft(p,"max"),["down"])),t[15]||(t[15]=Ut(p=>i.onKeyRight(p,"max"),["right"])),t[16]||(t[16]=Ut(p=>i.onKeyRight(p,"max"),["up"]))]},null,34)]),_:1},8,["controlled","content","disabled","always"])],38)):Ee("",!0)],2)],2)}const yh=tt(ph,[["render",mh]]),Un="ivu-switch",Ah={name:"iSwitch",mixins:[Nn],emits:["update:modelValue","on-change"],props:{modelValue:{type:[String,Number,Boolean],default:!1},trueValue:{type:[String,Number,Boolean],default:!0},falseValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:!1},size:{validator(e){return Ke(e,["large","small","default"])},default(){const e=et().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.size===""?"default":e.$VIEWUI.size}},name:{type:String},loading:{type:Boolean,default:!1},trueColor:{type:String},falseColor:{type:String},beforeChange:Function},data(){return{currentValue:this.modelValue}},computed:{wrapClasses(){return[`${Un}`,{[`${Un}-checked`]:this.currentValue===this.trueValue,[`${Un}-disabled`]:this.itemDisabled,[`${Un}-${this.size}`]:!!this.size,[`${Un}-loading`]:this.loading}]},wrapStyles(){let e={};return this.trueColor&&this.currentValue===this.trueValue?(e["border-color"]=this.trueColor,e["background-color"]=this.trueColor):this.falseColor&&this.currentValue===this.falseValue&&(e["border-color"]=this.falseColor,e["background-color"]=this.falseColor),e},innerClasses(){return`${Un}-inner`}},methods:{handleToggle(){const e=this.currentValue===this.trueValue?this.falseValue:this.trueValue;this.currentValue=e,this.$emit("update:modelValue",e),this.$emit("on-change",e),this.handleFormItemChange("change",e)},toggle(e){if(e.preventDefault(),this.itemDisabled||this.loading)return!1;if(!this.beforeChange)return this.handleToggle();const t=this.beforeChange();t&&t.then?t.then(()=>{this.handleToggle()}):this.handleToggle()}},watch:{modelValue(e){if(e!==this.trueValue&&e!==this.falseValue&&e!==null)throw"Value should be trueValue or falseValue.";this.currentValue=e}}},gh=["name","value"];function bh(e,t,n,l,o,i){return U(),ae("span",{tabindex:"0",class:G(i.wrapClasses),style:je(i.wrapStyles),onClick:t[0]||(t[0]=(...d)=>i.toggle&&i.toggle(...d)),onKeydown:t[1]||(t[1]=Ut((...d)=>i.toggle&&i.toggle(...d),["space"]))},[ie("input",{type:"hidden",name:n.name,value:o.currentValue},null,8,gh),ie("span",{class:G(i.innerClasses)},[o.currentValue===n.trueValue?Te(e.$slots,"open",{key:0}):Ee("",!0),o.currentValue===n.falseValue?Te(e.$slots,"close",{key:1}):Ee("",!0)],2)],38)}const Go=tt(Ah,[["render",bh]]);/*!
 * Viewer.js v1.11.7
 * https://fengyuanchen.github.io/viewerjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2024-11-24T04:32:19.116Z
 */function vh(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Jo(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,rs(l.key),l)}}function wh(e,t,n){return t&&Jo(e.prototype,t),n&&Jo(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function xh(e,t,n){return(t=rs(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Zo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,l)}return n}function $a(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zo(Object(n),!0).forEach(function(l){xh(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zo(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}function Eh(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var l=n.call(e,t);if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function rs(e){var t=Eh(e,"string");return typeof t=="symbol"?t:t+""}function Sa(e){"@babel/helpers - typeof";return Sa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Sa(e)}var el={backdrop:!0,button:!0,navbar:!0,title:!0,toolbar:!0,className:"",container:"body",filter:null,fullscreen:!0,inheritedAttributes:["crossOrigin","decoding","isMap","loading","referrerPolicy","sizes","srcset","useMap"],initialCoverage:.9,initialViewIndex:0,inline:!1,interval:5e3,keyboard:!0,focus:!0,loading:!0,loop:!0,minWidth:200,minHeight:100,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,slideOnTouch:!0,toggleOnDblclick:!0,tooltip:!0,transition:!0,zIndex:2015,zIndexInline:0,zoomRatio:.1,minZoomRatio:.01,maxZoomRatio:100,url:"src",ready:null,show:null,shown:null,hide:null,hidden:null,view:null,viewed:null,move:null,moved:null,rotate:null,rotated:null,scale:null,scaled:null,zoom:null,zoomed:null,play:null,stop:null},Ch='<div class="viewer-container" tabindex="-1" touch-action="none"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><div class="viewer-toolbar"></div><div class="viewer-navbar"><ul class="viewer-list" role="navigation"></ul></div></div><div class="viewer-tooltip" role="alert" aria-hidden="true"></div><div class="viewer-button" data-viewer-action="mix" role="button"></div><div class="viewer-player"></div></div>',Oi=typeof window<"u"&&typeof window.document<"u",cn=Oi?window:{},er=Oi&&cn.document.documentElement?"ontouchstart"in cn.document.documentElement:!1,Wa=Oi?"PointerEvent"in cn:!1,Oe="viewer",bi="move",is="switch",Nr="zoom",li="".concat(Oe,"-active"),kh="".concat(Oe,"-close"),vi="".concat(Oe,"-fade"),Ia="".concat(Oe,"-fixed"),Bh="".concat(Oe,"-fullscreen"),tl="".concat(Oe,"-fullscreen-exit"),Ln="".concat(Oe,"-hide"),Sh="".concat(Oe,"-hide-md-down"),Ih="".concat(Oe,"-hide-sm-down"),Th="".concat(Oe,"-hide-xs-down"),_t="".concat(Oe,"-in"),Fr="".concat(Oe,"-invisible"),tr="".concat(Oe,"-loading"),Lh="".concat(Oe,"-move"),nl="".concat(Oe,"-open"),Qn="".concat(Oe,"-show"),ot="".concat(Oe,"-transition"),nr="click",Ta="dblclick",rl="dragstart",il="focusin",al="keydown",$t="load",On="error",Dh=er?"touchend touchcancel":"mouseup",Oh=er?"touchmove":"mousemove",zh=er?"touchstart":"mousedown",ol=Wa?"pointerdown":zh,ll=Wa?"pointermove":Oh,sl=Wa?"pointerup pointercancel":Dh,dl="resize",Ht="transitionend",ul="wheel",cl="ready",pl="show",hl="shown",fl="hide",ml="hidden",yl="view",_r="viewed",Al="move",gl="moved",bl="rotate",vl="rotated",wl="scale",xl="scaled",El="zoom",Cl="zoomed",kl="play",Bl="stop",Ti="".concat(Oe,"Action"),ja=/\s\s*/,si=["zoom-in","zoom-out","one-to-one","reset","prev","play","next","rotate-left","rotate-right","flip-horizontal","flip-vertical"];function $r(e){return typeof e=="string"}var Mh=Number.isNaN||cn.isNaN;function it(e){return typeof e=="number"&&!Mh(e)}function Xn(e){return typeof e>"u"}function rr(e){return Sa(e)==="object"&&e!==null}var Nh=Object.prototype.hasOwnProperty;function Gn(e){if(!rr(e))return!1;try{var t=e.constructor,n=t.prototype;return t&&n&&Nh.call(n,"isPrototypeOf")}catch{return!1}}function Qe(e){return typeof e=="function"}function Ge(e,t){if(e&&Qe(t))if(Array.isArray(e)||it(e.length)){var n=e.length,l;for(l=0;l<n&&t.call(e,e[l],l,e)!==!1;l+=1);}else rr(e)&&Object.keys(e).forEach(function(o){t.call(e,e[o],o,e)});return e}var Vt=Object.assign||function(t){for(var n=arguments.length,l=new Array(n>1?n-1:0),o=1;o<n;o++)l[o-1]=arguments[o];return rr(t)&&l.length>0&&l.forEach(function(i){rr(i)&&Object.keys(i).forEach(function(d){t[d]=i[d]})}),t},Ph=/^(?:width|height|left|top|marginLeft|marginTop)$/;function Yt(e,t){var n=e.style;Ge(t,function(l,o){Ph.test(o)&&it(l)&&(l+="px"),n[o]=l})}function Vh(e){return $r(e)?e.replace(/&(?!amp;|quot;|#39;|lt;|gt;)/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):e}function Yn(e,t){return!e||!t?!1:e.classList?e.classList.contains(t):e.className.indexOf(t)>-1}function Ce(e,t){if(!(!e||!t)){if(it(e.length)){Ge(e,function(l){Ce(l,t)});return}if(e.classList){e.classList.add(t);return}var n=e.className.trim();n?n.indexOf(t)<0&&(e.className="".concat(n," ").concat(t)):e.className=t}}function $e(e,t){if(!(!e||!t)){if(it(e.length)){Ge(e,function(n){$e(n,t)});return}if(e.classList){e.classList.remove(t);return}e.className.indexOf(t)>=0&&(e.className=e.className.replace(t,""))}}function Wr(e,t,n){if(t){if(it(e.length)){Ge(e,function(l){Wr(l,t,n)});return}n?Ce(e,t):$e(e,t)}}var Rh=/([a-z\d])([A-Z])/g;function Ha(e){return e.replace(Rh,"$1-$2").toLowerCase()}function Jn(e,t){return rr(e[t])?e[t]:e.dataset?e.dataset[t]:e.getAttribute("data-".concat(Ha(t)))}function La(e,t,n){rr(n)?e[t]=n:e.dataset?e.dataset[t]=n:e.setAttribute("data-".concat(Ha(t)),n)}var as=function(){var e=!1;if(Oi){var t=!1,n=function(){},l=Object.defineProperty({},"once",{get:function(){return e=!0,t},set:function(i){t=i}});cn.addEventListener("test",n,l),cn.removeEventListener("test",n,l)}return e}();function Ye(e,t,n){var l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},o=n;t.trim().split(ja).forEach(function(i){if(!as){var d=e.listeners;d&&d[i]&&d[i][n]&&(o=d[i][n],delete d[i][n],Object.keys(d[i]).length===0&&delete d[i],Object.keys(d).length===0&&delete e.listeners)}e.removeEventListener(i,o,l)})}function Be(e,t,n){var l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},o=n;t.trim().split(ja).forEach(function(i){if(l.once&&!as){var d=e.listeners,g=d===void 0?{}:d;o=function(){delete g[i][n],e.removeEventListener(i,o,l);for(var p=arguments.length,m=new Array(p),x=0;x<p;x++)m[x]=arguments[x];n.apply(e,m)},g[i]||(g[i]={}),g[i][n]&&e.removeEventListener(i,g[i][n],l),g[i][n]=o,e.listeners=g}e.addEventListener(i,o,l)})}function dt(e,t,n,l){var o;return Qe(Event)&&Qe(CustomEvent)?o=new CustomEvent(t,$a({bubbles:!0,cancelable:!0,detail:n},l)):(o=document.createEvent("CustomEvent"),o.initCustomEvent(t,!0,!0,n)),e.dispatchEvent(o)}function qh(e){var t=e.getBoundingClientRect();return{left:t.left+(window.pageXOffset-document.documentElement.clientLeft),top:t.top+(window.pageYOffset-document.documentElement.clientTop)}}function wi(e){var t=e.rotate,n=e.scaleX,l=e.scaleY,o=e.translateX,i=e.translateY,d=[];it(o)&&o!==0&&d.push("translateX(".concat(o,"px)")),it(i)&&i!==0&&d.push("translateY(".concat(i,"px)")),it(t)&&t!==0&&d.push("rotate(".concat(t,"deg)")),it(n)&&n!==1&&d.push("scaleX(".concat(n,")")),it(l)&&l!==1&&d.push("scaleY(".concat(l,")"));var g=d.length?d.join(" "):"none";return{WebkitTransform:g,msTransform:g,transform:g}}function Fh(e){return $r(e)?decodeURIComponent(e.replace(/^.*\//,"").replace(/[?&#].*$/,"")):""}var ha=cn.navigator&&/Version\/\d+(\.\d+)+?\s+Safari/i.test(cn.navigator.userAgent);function os(e,t,n){var l=document.createElement("img");if(e.naturalWidth&&!ha)return n(e.naturalWidth,e.naturalHeight),l;var o=document.body||document.documentElement;return l.onload=function(){n(l.width,l.height),ha||o.removeChild(l)},Ge(t.inheritedAttributes,function(i){var d=e.getAttribute(i);d!==null&&l.setAttribute(i,d)}),l.src=e.src,ha||(l.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",o.appendChild(l)),l}function di(e){switch(e){case 2:return Th;case 3:return Ih;case 4:return Sh;default:return""}}function _h(e){var t=$a({},e),n=[];return Ge(e,function(l,o){delete t[o],Ge(t,function(i){var d=Math.abs(l.startX-i.startX),g=Math.abs(l.startY-i.startY),v=Math.abs(l.endX-i.endX),p=Math.abs(l.endY-i.endY),m=Math.sqrt(d*d+g*g),x=Math.sqrt(v*v+p*p),y=(x-m)/m;n.push(y)})}),n.sort(function(l,o){return Math.abs(l)<Math.abs(o)}),n[0]}function ui(e,t){var n=e.pageX,l=e.pageY,o={endX:n,endY:l};return t?o:$a({timeStamp:Date.now(),startX:n,startY:l},o)}function $h(e){var t=0,n=0,l=0;return Ge(e,function(o){var i=o.startX,d=o.startY;t+=i,n+=d,l+=1}),t/=l,n/=l,{pageX:t,pageY:n}}var Wh={render:function(){this.initContainer(),this.initViewer(),this.initList(),this.renderViewer()},initBody:function(){var t=this.element.ownerDocument,n=t.body||t.documentElement;this.body=n,this.scrollbarWidth=window.innerWidth-t.documentElement.clientWidth,this.initialBodyPaddingRight=n.style.paddingRight,this.initialBodyComputedPaddingRight=window.getComputedStyle(n).paddingRight},initContainer:function(){this.containerData={width:window.innerWidth,height:window.innerHeight}},initViewer:function(){var t=this.options,n=this.parent,l;t.inline&&(l={width:Math.max(n.offsetWidth,t.minWidth),height:Math.max(n.offsetHeight,t.minHeight)},this.parentData=l),(this.fulled||!l)&&(l=this.containerData),this.viewerData=Vt({},l)},renderViewer:function(){this.options.inline&&!this.fulled&&Yt(this.viewer,this.viewerData)},initList:function(){var t=this,n=this.element,l=this.options,o=this.list,i=[];o.innerHTML="",Ge(this.images,function(d,g){var v=d.src,p=d.alt||Fh(v),m=t.getImageURL(d);if(v||m){var x=document.createElement("li"),y=document.createElement("img");Ge(l.inheritedAttributes,function(k){var S=d.getAttribute(k);S!==null&&y.setAttribute(k,S)}),l.navbar&&(y.src=v||m),y.alt=p,y.setAttribute("data-original-url",m||v),x.setAttribute("data-index",g),x.setAttribute("data-viewer-action","view"),x.setAttribute("role","button"),l.keyboard&&x.setAttribute("tabindex",0),x.appendChild(y),o.appendChild(x),i.push(x)}}),this.items=i,Ge(i,function(d){var g=d.firstElementChild,v,p;La(g,"filled",!0),l.loading&&Ce(d,tr),Be(g,$t,v=function(x){Ye(g,On,p),l.loading&&$e(d,tr),t.loadImage(x)},{once:!0}),Be(g,On,p=function(){Ye(g,$t,v),l.loading&&$e(d,tr)},{once:!0})}),l.transition&&Be(n,_r,function(){Ce(o,ot)},{once:!0})},renderList:function(){var t=this.index,n=this.items[t];if(n){var l=n.nextElementSibling,o=parseInt(window.getComputedStyle(l||n).marginLeft,10),i=n.offsetWidth,d=i+o;Yt(this.list,Vt({width:d*this.length-o},wi({translateX:(this.viewerData.width-i)/2-d*t})))}},resetList:function(){var t=this.list;t.innerHTML="",$e(t,ot),Yt(t,wi({translateX:0}))},initImage:function(t){var n=this,l=this.options,o=this.image,i=this.viewerData,d=this.footer.offsetHeight,g=i.width,v=Math.max(i.height-d,d),p=this.imageData||{},m;this.imageInitializing={abort:function(){m.onload=null}},m=os(o,l,function(x,y){var k=x/y,S=Math.max(0,Math.min(1,l.initialCoverage)),A=g,T=v;n.imageInitializing=!1,v*k>g?T=g/k:A=v*k,S=it(S)?S:.9,A=Math.min(A*S,x),T=Math.min(T*S,y);var V=(g-A)/2,O=(v-T)/2,q={left:V,top:O,x:V,y:O,width:A,height:T,oldRatio:1,ratio:A/x,aspectRatio:k,naturalWidth:x,naturalHeight:y},R=Vt({},q);l.rotatable&&(q.rotate=p.rotate||0,R.rotate=0),l.scalable&&(q.scaleX=p.scaleX||1,q.scaleY=p.scaleY||1,R.scaleX=1,R.scaleY=1),n.imageData=q,n.initialImageData=R,t&&t()})},renderImage:function(t){var n=this,l=this.image,o=this.imageData;if(Yt(l,Vt({width:o.width,height:o.height,marginLeft:o.x,marginTop:o.y},wi(o))),t)if((this.viewing||this.moving||this.rotating||this.scaling||this.zooming)&&this.options.transition&&Yn(l,ot)){var i=function(){n.imageRendering=!1,t()};this.imageRendering={abort:function(){Ye(l,Ht,i)}},Be(l,Ht,i,{once:!0})}else t()},resetImage:function(){var t=this.image;t&&(this.viewing&&this.viewing.abort(),t.parentNode.removeChild(t),this.image=null,this.title.innerHTML="")}},jh={bind:function(){var t=this.options,n=this.viewer,l=this.canvas,o=this.element.ownerDocument;Be(n,nr,this.onClick=this.click.bind(this)),Be(n,rl,this.onDragStart=this.dragstart.bind(this)),Be(l,ol,this.onPointerDown=this.pointerdown.bind(this)),Be(o,ll,this.onPointerMove=this.pointermove.bind(this)),Be(o,sl,this.onPointerUp=this.pointerup.bind(this)),Be(o,al,this.onKeyDown=this.keydown.bind(this)),Be(window,dl,this.onResize=this.resize.bind(this)),t.zoomable&&t.zoomOnWheel&&Be(n,ul,this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),t.toggleOnDblclick&&Be(l,Ta,this.onDblclick=this.dblclick.bind(this))},unbind:function(){var t=this.options,n=this.viewer,l=this.canvas,o=this.element.ownerDocument;Ye(n,nr,this.onClick),Ye(n,rl,this.onDragStart),Ye(l,ol,this.onPointerDown),Ye(o,ll,this.onPointerMove),Ye(o,sl,this.onPointerUp),Ye(o,al,this.onKeyDown),Ye(window,dl,this.onResize),t.zoomable&&t.zoomOnWheel&&Ye(n,ul,this.onWheel,{passive:!1,capture:!0}),t.toggleOnDblclick&&Ye(l,Ta,this.onDblclick)}},Hh={click:function(t){var n=this.options,l=this.imageData,o=t.target,i=Jn(o,Ti);switch(!i&&o.localName==="img"&&o.parentElement.localName==="li"&&(o=o.parentElement,i=Jn(o,Ti)),er&&t.isTrusted&&o===this.canvas&&clearTimeout(this.clickCanvasTimeout),i){case"mix":this.played?this.stop():n.inline?this.fulled?this.exit():this.full():this.hide();break;case"hide":this.pointerMoved||this.hide();break;case"view":this.view(Jn(o,"index"));break;case"zoom-in":this.zoom(.1,!0);break;case"zoom-out":this.zoom(-.1,!0);break;case"one-to-one":this.toggle();break;case"reset":this.reset();break;case"prev":this.prev(n.loop);break;case"play":this.play(n.fullscreen);break;case"next":this.next(n.loop);break;case"rotate-left":this.rotate(-90);break;case"rotate-right":this.rotate(90);break;case"flip-horizontal":this.scaleX(-l.scaleX||-1);break;case"flip-vertical":this.scaleY(-l.scaleY||-1);break;default:this.played&&this.stop()}},dblclick:function(t){t.preventDefault(),this.viewed&&t.target===this.image&&(er&&t.isTrusted&&clearTimeout(this.doubleClickImageTimeout),this.toggle(t.isTrusted?t:t.detail&&t.detail.originalEvent))},load:function(){var t=this;this.timeout&&(clearTimeout(this.timeout),this.timeout=!1);var n=this.element,l=this.options,o=this.image,i=this.index,d=this.viewerData;$e(o,Fr),l.loading&&$e(this.canvas,tr),o.style.cssText="height:0;"+"margin-left:".concat(d.width/2,"px;")+"margin-top:".concat(d.height/2,"px;")+"max-width:none!important;position:relative;width:0;",this.initImage(function(){Wr(o,Lh,l.movable),Wr(o,ot,l.transition),t.renderImage(function(){t.viewed=!0,t.viewing=!1,Qe(l.viewed)&&Be(n,_r,l.viewed,{once:!0}),dt(n,_r,{originalImage:t.images[i],index:i,image:o},{cancelable:!1})})})},loadImage:function(t){var n=t.target,l=n.parentNode,o=l.offsetWidth||30,i=l.offsetHeight||50,d=!!Jn(n,"filled");os(n,this.options,function(g,v){var p=g/v,m=o,x=i;i*p>o?d?m=i*p:x=o/p:d?x=o/p:m=i*p,Yt(n,Vt({width:m,height:x},wi({translateX:(o-m)/2,translateY:(i-x)/2})))})},keydown:function(t){var n=this.options;if(n.keyboard){var l=t.keyCode||t.which||t.charCode;switch(l){case 13:this.viewer.contains(t.target)&&this.click(t);break}if(this.fulled)switch(l){case 27:this.played?this.stop():n.inline?this.fulled&&this.exit():this.hide();break;case 32:this.played&&this.stop();break;case 37:this.played&&this.playing?this.playing.prev():this.prev(n.loop);break;case 38:t.preventDefault(),this.zoom(n.zoomRatio,!0);break;case 39:this.played&&this.playing?this.playing.next():this.next(n.loop);break;case 40:t.preventDefault(),this.zoom(-n.zoomRatio,!0);break;case 48:case 49:t.ctrlKey&&(t.preventDefault(),this.toggle());break}}},dragstart:function(t){t.target.localName==="img"&&t.preventDefault()},pointerdown:function(t){var n=this.options,l=this.pointers,o=t.buttons,i=t.button;if(this.pointerMoved=!1,!(!this.viewed||this.showing||this.viewing||this.hiding||(t.type==="mousedown"||t.type==="pointerdown"&&t.pointerType==="mouse")&&(it(o)&&o!==1||it(i)&&i!==0||t.ctrlKey))){t.preventDefault(),t.changedTouches?Ge(t.changedTouches,function(g){l[g.identifier]=ui(g)}):l[t.pointerId||0]=ui(t);var d=n.movable?bi:!1;n.zoomOnTouch&&n.zoomable&&Object.keys(l).length>1?d=Nr:n.slideOnTouch&&(t.pointerType==="touch"||t.type==="touchstart")&&this.isSwitchable()&&(d=is),n.transition&&(d===bi||d===Nr)&&$e(this.image,ot),this.action=d}},pointermove:function(t){var n=this.pointers,l=this.action;!this.viewed||!l||(t.preventDefault(),t.changedTouches?Ge(t.changedTouches,function(o){Vt(n[o.identifier]||{},ui(o,!0))}):Vt(n[t.pointerId||0]||{},ui(t,!0)),this.change(t))},pointerup:function(t){var n=this,l=this.options,o=this.action,i=this.pointers,d;t.changedTouches?Ge(t.changedTouches,function(g){d=i[g.identifier],delete i[g.identifier]}):(d=i[t.pointerId||0],delete i[t.pointerId||0]),o&&(t.preventDefault(),l.transition&&(o===bi||o===Nr)&&Ce(this.image,ot),this.action=!1,er&&o!==Nr&&d&&Date.now()-d.timeStamp<500&&(clearTimeout(this.clickCanvasTimeout),clearTimeout(this.doubleClickImageTimeout),l.toggleOnDblclick&&this.viewed&&t.target===this.image?this.imageClicked?(this.imageClicked=!1,this.doubleClickImageTimeout=setTimeout(function(){dt(n.image,Ta,{originalEvent:t})},50)):(this.imageClicked=!0,this.doubleClickImageTimeout=setTimeout(function(){n.imageClicked=!1},500)):(this.imageClicked=!1,l.backdrop&&l.backdrop!=="static"&&t.target===this.canvas&&(this.clickCanvasTimeout=setTimeout(function(){dt(n.canvas,nr,{originalEvent:t})},50)))))},resize:function(){var t=this;if(!(!this.isShown||this.hiding)&&(this.fulled&&(this.close(),this.initBody(),this.open()),this.initContainer(),this.initViewer(),this.renderViewer(),this.renderList(),this.viewed&&this.initImage(function(){t.renderImage()}),this.played)){if(this.options.fullscreen&&this.fulled&&!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement)){this.stop();return}Ge(this.player.getElementsByTagName("img"),function(n){Be(n,$t,t.loadImage.bind(t),{once:!0}),dt(n,$t)})}},wheel:function(t){var n=this;if(this.viewed&&(t.preventDefault(),!this.wheeling)){this.wheeling=!0,setTimeout(function(){n.wheeling=!1},50);var l=Number(this.options.zoomRatio)||.1,o=1;t.deltaY?o=t.deltaY>0?1:-1:t.wheelDelta?o=-t.wheelDelta/120:t.detail&&(o=t.detail>0?1:-1),this.zoom(-o*l,!0,null,t)}}},Uh={show:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=this.element,l=this.options;if(l.inline||this.showing||this.isShown||this.showing)return this;if(!this.ready)return this.build(),this.ready&&this.show(t),this;if(Qe(l.show)&&Be(n,pl,l.show,{once:!0}),dt(n,pl)===!1||!this.ready)return this;this.hiding&&this.transitioning.abort(),this.showing=!0,this.open();var o=this.viewer;if($e(o,Ln),o.setAttribute("role","dialog"),o.setAttribute("aria-labelledby",this.title.id),o.setAttribute("aria-modal",!0),o.removeAttribute("aria-hidden"),l.transition&&!t){var i=this.shown.bind(this);this.transitioning={abort:function(){Ye(o,Ht,i),$e(o,_t)}},Ce(o,ot),o.initialOffsetWidth=o.offsetWidth,Be(o,Ht,i,{once:!0}),Ce(o,_t)}else Ce(o,_t),this.shown();return this},hide:function(){var t=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,l=this.element,o=this.options;if(o.inline||this.hiding||!(this.isShown||this.showing))return this;if(Qe(o.hide)&&Be(l,fl,o.hide,{once:!0}),dt(l,fl)===!1)return this;this.showing&&this.transitioning.abort(),this.hiding=!0,this.played?this.stop():this.viewing&&this.viewing.abort();var i=this.viewer,d=this.image,g=function(){$e(i,_t),t.hidden()};if(o.transition&&!n){var v=function(x){x&&x.target===i&&(Ye(i,Ht,v),t.hidden())},p=function(){Yn(i,ot)?(Be(i,Ht,v),$e(i,_t)):g()};this.transitioning={abort:function(){t.viewed&&Yn(d,ot)?Ye(d,Ht,p):Yn(i,ot)&&Ye(i,Ht,v)}},this.viewed&&Yn(d,ot)?(Be(d,Ht,p,{once:!0}),this.zoomTo(0,!1,null,null,!0)):p()}else g();return this},view:function(){var t=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.initialViewIndex;if(n=Number(n)||0,this.hiding||this.played||n<0||n>=this.length||this.viewed&&n===this.index)return this;if(!this.isShown)return this.index=n,this.show();this.viewing&&this.viewing.abort();var l=this.element,o=this.options,i=this.title,d=this.canvas,g=this.items[n],v=g.querySelector("img"),p=Jn(v,"originalUrl"),m=v.getAttribute("alt"),x=document.createElement("img");if(Ge(o.inheritedAttributes,function(T){var V=v.getAttribute(T);V!==null&&x.setAttribute(T,V)}),x.src=p,x.alt=m,Qe(o.view)&&Be(l,yl,o.view,{once:!0}),dt(l,yl,{originalImage:this.images[n],index:n,image:x})===!1||!this.isShown||this.hiding||this.played)return this;var y=this.items[this.index];y&&($e(y,li),y.removeAttribute("aria-selected")),Ce(g,li),g.setAttribute("aria-selected",!0),o.focus&&g.focus(),this.image=x,this.viewed=!1,this.index=n,this.imageData={},Ce(x,Fr),o.loading&&Ce(d,tr),d.innerHTML="",d.appendChild(x),this.renderList(),i.innerHTML="";var k=function(){var V=t.imageData,O=Array.isArray(o.title)?o.title[1]:o.title;i.innerHTML=Vh(Qe(O)?O.call(t,x,V):"".concat(m," (").concat(V.naturalWidth," × ").concat(V.naturalHeight,")"))},S,A;return Be(l,_r,k,{once:!0}),this.viewing={abort:function(){Ye(l,_r,k),x.complete?t.imageRendering?t.imageRendering.abort():t.imageInitializing&&t.imageInitializing.abort():(x.src="",Ye(x,$t,S),t.timeout&&clearTimeout(t.timeout))}},x.complete?this.load():(Be(x,$t,S=function(){Ye(x,On,A),t.load()},{once:!0}),Be(x,On,A=function(){Ye(x,$t,S),t.timeout&&(clearTimeout(t.timeout),t.timeout=!1),$e(x,Fr),o.loading&&$e(t.canvas,tr)},{once:!0}),this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(function(){$e(x,Fr),t.timeout=!1},1e3)),this},prev:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=this.index-1;return n<0&&(n=t?this.length-1:0),this.view(n),this},next:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=this.length-1,l=this.index+1;return l>n&&(l=t?0:n),this.view(l),this},move:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,l=this.imageData;return this.moveTo(Xn(t)?t:l.x+Number(t),Xn(n)?n:l.y+Number(n)),this},moveTo:function(t){var n=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,i=this.element,d=this.options,g=this.imageData;if(t=Number(t),l=Number(l),this.viewed&&!this.played&&d.movable){var v=g.x,p=g.y,m=!1;if(it(t)?m=!0:t=v,it(l)?m=!0:l=p,m){if(Qe(d.move)&&Be(i,Al,d.move,{once:!0}),dt(i,Al,{x:t,y:l,oldX:v,oldY:p,originalEvent:o})===!1)return this;g.x=t,g.y=l,g.left=t,g.top=l,this.moving=!0,this.renderImage(function(){n.moving=!1,Qe(d.moved)&&Be(i,gl,d.moved,{once:!0}),dt(i,gl,{x:t,y:l,oldX:v,oldY:p,originalEvent:o},{cancelable:!1})})}}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t)),this},rotateTo:function(t){var n=this,l=this.element,o=this.options,i=this.imageData;if(t=Number(t),it(t)&&this.viewed&&!this.played&&o.rotatable){var d=i.rotate;if(Qe(o.rotate)&&Be(l,bl,o.rotate,{once:!0}),dt(l,bl,{degree:t,oldDegree:d})===!1)return this;i.rotate=t,this.rotating=!0,this.renderImage(function(){n.rotating=!1,Qe(o.rotated)&&Be(l,vl,o.rotated,{once:!0}),dt(l,vl,{degree:t,oldDegree:d},{cancelable:!1})})}return this},scaleX:function(t){return this.scale(t,this.imageData.scaleY),this},scaleY:function(t){return this.scale(this.imageData.scaleX,t),this},scale:function(t){var n=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,o=this.element,i=this.options,d=this.imageData;if(t=Number(t),l=Number(l),this.viewed&&!this.played&&i.scalable){var g=d.scaleX,v=d.scaleY,p=!1;if(it(t)?p=!0:t=g,it(l)?p=!0:l=v,p){if(Qe(i.scale)&&Be(o,wl,i.scale,{once:!0}),dt(o,wl,{scaleX:t,scaleY:l,oldScaleX:g,oldScaleY:v})===!1)return this;d.scaleX=t,d.scaleY=l,this.scaling=!0,this.renderImage(function(){n.scaling=!1,Qe(i.scaled)&&Be(o,xl,i.scaled,{once:!0}),dt(o,xl,{scaleX:t,scaleY:l,oldScaleX:g,oldScaleY:v},{cancelable:!1})})}}return this},zoom:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,i=this.imageData;return t=Number(t),t<0?t=1/(1-t):t=1+t,this.zoomTo(i.width*t/i.naturalWidth,n,l,o),this},zoomTo:function(t){var n=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,d=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1,g=this.element,v=this.options,p=this.pointers,m=this.imageData,x=m.x,y=m.y,k=m.width,S=m.height,A=m.naturalWidth,T=m.naturalHeight;if(t=Math.max(0,t),it(t)&&this.viewed&&!this.played&&(d||v.zoomable)){if(!d){var V=Math.max(.01,v.minZoomRatio),O=Math.min(100,v.maxZoomRatio);t=Math.min(Math.max(t,V),O)}if(i)switch(i.type){case"wheel":v.zoomRatio>=.055&&t>.95&&t<1.05&&(t=1);break;case"pointermove":case"touchmove":case"mousemove":t>.99&&t<1.01&&(t=1);break}var q=A*t,R=T*t,F=q-k,C=R-S,N=m.ratio;if(Qe(v.zoom)&&Be(g,El,v.zoom,{once:!0}),dt(g,El,{ratio:t,oldRatio:N,originalEvent:i})===!1)return this;if(this.zooming=!0,i){var z=qh(this.viewer),X=p&&Object.keys(p).length>0?$h(p):{pageX:i.pageX,pageY:i.pageY};m.x-=F*((X.pageX-z.left-x)/k),m.y-=C*((X.pageY-z.top-y)/S)}else Gn(o)&&it(o.x)&&it(o.y)?(m.x-=F*((o.x-x)/k),m.y-=C*((o.y-y)/S)):(m.x-=F/2,m.y-=C/2);m.left=m.x,m.top=m.y,m.width=q,m.height=R,m.oldRatio=N,m.ratio=t,this.renderImage(function(){n.zooming=!1,Qe(v.zoomed)&&Be(g,Cl,v.zoomed,{once:!0}),dt(g,Cl,{ratio:t,oldRatio:N,originalEvent:i},{cancelable:!1})}),l&&this.tooltip()}return this},play:function(){var t=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(!this.isShown||this.played)return this;var l=this.element,o=this.options;if(Qe(o.play)&&Be(l,kl,o.play,{once:!0}),dt(l,kl)===!1)return this;var i=this.player,d=this.loadImage.bind(this),g=[],v=0,p=0;if(this.played=!0,this.onLoadWhenPlay=d,n&&this.requestFullscreen(n),Ce(i,Qn),Ge(this.items,function(y,k){var S=y.querySelector("img"),A=document.createElement("img");A.src=Jn(S,"originalUrl"),A.alt=S.getAttribute("alt"),A.referrerPolicy=S.referrerPolicy,v+=1,Ce(A,vi),Wr(A,ot,o.transition),Yn(y,li)&&(Ce(A,_t),p=k),g.push(A),Be(A,$t,d,{once:!0}),i.appendChild(A)}),it(o.interval)&&o.interval>0){var m=function(){clearTimeout(t.playing.timeout),$e(g[p],_t),p-=1,p=p>=0?p:v-1,Ce(g[p],_t),t.playing.timeout=setTimeout(m,o.interval)},x=function(){clearTimeout(t.playing.timeout),$e(g[p],_t),p+=1,p=p<v?p:0,Ce(g[p],_t),t.playing.timeout=setTimeout(x,o.interval)};v>1&&(this.playing={prev:m,next:x,timeout:setTimeout(x,o.interval)})}return this},stop:function(){var t=this;if(!this.played)return this;var n=this.element,l=this.options;if(Qe(l.stop)&&Be(n,Bl,l.stop,{once:!0}),dt(n,Bl)===!1)return this;var o=this.player;return clearTimeout(this.playing.timeout),this.playing=!1,this.played=!1,Ge(o.getElementsByTagName("img"),function(i){Ye(i,$t,t.onLoadWhenPlay)}),$e(o,Qn),o.innerHTML="",this.exitFullscreen(),this},full:function(){var t=this,n=this.options,l=this.viewer,o=this.image,i=this.list;return!this.isShown||this.played||this.fulled||!n.inline?this:(this.fulled=!0,this.open(),Ce(this.button,tl),n.transition&&($e(i,ot),this.viewed&&$e(o,ot)),Ce(l,Ia),l.setAttribute("role","dialog"),l.setAttribute("aria-labelledby",this.title.id),l.setAttribute("aria-modal",!0),l.removeAttribute("style"),Yt(l,{zIndex:n.zIndex}),n.focus&&this.enforceFocus(),this.initContainer(),this.viewerData=Vt({},this.containerData),this.renderList(),this.viewed&&this.initImage(function(){t.renderImage(function(){n.transition&&setTimeout(function(){Ce(o,ot),Ce(i,ot)},0)})}),this)},exit:function(){var t=this,n=this.options,l=this.viewer,o=this.image,i=this.list;return!this.isShown||this.played||!this.fulled||!n.inline?this:(this.fulled=!1,this.close(),$e(this.button,tl),n.transition&&($e(i,ot),this.viewed&&$e(o,ot)),n.focus&&this.clearEnforceFocus(),l.removeAttribute("role"),l.removeAttribute("aria-labelledby"),l.removeAttribute("aria-modal"),$e(l,Ia),Yt(l,{zIndex:n.zIndexInline}),this.viewerData=Vt({},this.parentData),this.renderViewer(),this.renderList(),this.viewed&&this.initImage(function(){t.renderImage(function(){n.transition&&setTimeout(function(){Ce(o,ot),Ce(i,ot)},0)})}),this)},tooltip:function(){var t=this,n=this.options,l=this.tooltipBox,o=this.imageData;return!this.viewed||this.played||!n.tooltip?this:(l.textContent="".concat(Math.round(o.ratio*100),"%"),this.tooltipping?clearTimeout(this.tooltipping):n.transition?(this.fading&&dt(l,Ht),Ce(l,Qn),Ce(l,vi),Ce(l,ot),l.removeAttribute("aria-hidden"),l.initialOffsetWidth=l.offsetWidth,Ce(l,_t)):(Ce(l,Qn),l.removeAttribute("aria-hidden")),this.tooltipping=setTimeout(function(){n.transition?(Be(l,Ht,function(){$e(l,Qn),$e(l,vi),$e(l,ot),l.setAttribute("aria-hidden",!0),t.fading=!1},{once:!0}),$e(l,_t),t.fading=!0):($e(l,Qn),l.setAttribute("aria-hidden",!0)),t.tooltipping=!1},1e3),this)},toggle:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return this.imageData.ratio===1?this.zoomTo(this.imageData.oldRatio,!0,null,t):this.zoomTo(1,!0,null,t),this},reset:function(){return this.viewed&&!this.played&&(this.imageData=Vt({},this.initialImageData),this.renderImage()),this},update:function(){var t=this,n=this.element,l=this.options,o=this.isImg;if(o&&!n.parentNode)return this.destroy();var i=[];if(Ge(o?[n]:n.querySelectorAll("img"),function(p){Qe(l.filter)?l.filter.call(t,p)&&i.push(p):t.getImageURL(p)&&i.push(p)}),!i.length)return this;if(this.images=i,this.length=i.length,this.ready){var d=[];if(Ge(this.items,function(p,m){var x=p.querySelector("img"),y=i[m];y&&x?(y.src!==x.src||y.alt!==x.alt)&&d.push(m):d.push(m)}),Yt(this.list,{width:"auto"}),this.initList(),this.isShown)if(this.length){if(this.viewed){var g=d.indexOf(this.index);if(g>=0)this.viewed=!1,this.view(Math.max(Math.min(this.index-g,this.length-1),0));else{var v=this.items[this.index];Ce(v,li),v.setAttribute("aria-selected",!0)}}}else this.image=null,this.viewed=!1,this.index=0,this.imageData={},this.canvas.innerHTML="",this.title.innerHTML=""}else this.build();return this},destroy:function(){var t=this.element,n=this.options;return t[Oe]?(this.destroyed=!0,this.ready?(this.played&&this.stop(),n.inline?(this.fulled&&this.exit(),this.unbind()):this.isShown?(this.viewing&&(this.imageRendering?this.imageRendering.abort():this.imageInitializing&&this.imageInitializing.abort()),this.hiding&&this.transitioning.abort(),this.hidden()):this.showing&&(this.transitioning.abort(),this.hidden()),this.ready=!1,this.viewer.parentNode.removeChild(this.viewer)):n.inline&&(this.delaying?this.delaying.abort():this.initializing&&this.initializing.abort()),n.inline||Ye(t,nr,this.onStart),t[Oe]=void 0,this):this}},Qh={getImageURL:function(t){var n=this.options.url;return $r(n)?n=t.getAttribute(n):Qe(n)?n=n.call(this,t):n="",n},enforceFocus:function(){var t=this;this.clearEnforceFocus(),Be(document,il,this.onFocusin=function(n){var l=t.viewer,o=n.target;if(!(o===document||o===l||l.contains(o))){for(;o;){if(o.getAttribute("tabindex")!==null||o.getAttribute("aria-modal")==="true")return;o=o.parentElement}l.focus()}})},clearEnforceFocus:function(){this.onFocusin&&(Ye(document,il,this.onFocusin),this.onFocusin=null)},open:function(){var t=this.body;Ce(t,nl),this.scrollbarWidth>0&&(t.style.paddingRight="".concat(this.scrollbarWidth+(parseFloat(this.initialBodyComputedPaddingRight)||0),"px"))},close:function(){var t=this.body;$e(t,nl),this.scrollbarWidth>0&&(t.style.paddingRight=this.initialBodyPaddingRight)},shown:function(){var t=this.element,n=this.options,l=this.viewer;this.fulled=!0,this.isShown=!0,this.render(),this.bind(),this.showing=!1,n.focus&&(l.focus(),this.enforceFocus()),Qe(n.shown)&&Be(t,hl,n.shown,{once:!0}),dt(t,hl)!==!1&&this.ready&&this.isShown&&!this.hiding&&this.view(this.index)},hidden:function(){var t=this.element,n=this.options,l=this.viewer;n.fucus&&this.clearEnforceFocus(),this.close(),this.unbind(),Ce(l,Ln),l.removeAttribute("role"),l.removeAttribute("aria-labelledby"),l.removeAttribute("aria-modal"),l.setAttribute("aria-hidden",!0),this.resetList(),this.resetImage(),this.fulled=!1,this.viewed=!1,this.isShown=!1,this.hiding=!1,this.destroyed||(Qe(n.hidden)&&Be(t,ml,n.hidden,{once:!0}),dt(t,ml,null,{cancelable:!1}))},requestFullscreen:function(t){var n=this.element.ownerDocument;if(this.fulled&&!(n.fullscreenElement||n.webkitFullscreenElement||n.mozFullScreenElement||n.msFullscreenElement)){var l=n.documentElement;l.requestFullscreen?Gn(t)?l.requestFullscreen(t):l.requestFullscreen():l.webkitRequestFullscreen?l.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):l.mozRequestFullScreen?l.mozRequestFullScreen():l.msRequestFullscreen&&l.msRequestFullscreen()}},exitFullscreen:function(){var t=this.element.ownerDocument;this.fulled&&(t.fullscreenElement||t.webkitFullscreenElement||t.mozFullScreenElement||t.msFullscreenElement)&&(t.exitFullscreen?t.exitFullscreen():t.webkitExitFullscreen?t.webkitExitFullscreen():t.mozCancelFullScreen?t.mozCancelFullScreen():t.msExitFullscreen&&t.msExitFullscreen())},change:function(t){var n=this.options,l=this.pointers,o=l[Object.keys(l)[0]];if(o){var i=o.endX-o.startX,d=o.endY-o.startY;switch(this.action){case bi:(i!==0||d!==0)&&(this.pointerMoved=!0,this.move(i,d,t));break;case Nr:this.zoom(_h(l),!1,null,t);break;case is:{this.action="switched";var g=Math.abs(i);g>1&&g>Math.abs(d)&&(this.pointers={},i>1?this.prev(n.loop):i<-1&&this.next(n.loop));break}}Ge(l,function(v){v.startX=v.endX,v.startY=v.endY})}},isSwitchable:function(){var t=this.imageData,n=this.viewerData;return this.length>1&&t.x>=0&&t.y>=0&&t.width<=n.width&&t.height<=n.height}},Yh=cn.Viewer,Kh=function(e){return function(){return e+=1,e}}(-1),ls=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(vh(this,e),!t||t.nodeType!==1)throw new Error("The first argument is required and must be an element.");this.element=t,this.options=Vt({},el,Gn(n)&&n),this.action=!1,this.fading=!1,this.fulled=!1,this.hiding=!1,this.imageClicked=!1,this.imageData={},this.index=this.options.initialViewIndex,this.isImg=!1,this.isShown=!1,this.length=0,this.moving=!1,this.played=!1,this.playing=!1,this.pointers={},this.ready=!1,this.rotating=!1,this.scaling=!1,this.showing=!1,this.timeout=!1,this.tooltipping=!1,this.viewed=!1,this.viewing=!1,this.wheeling=!1,this.zooming=!1,this.pointerMoved=!1,this.id=Kh(),this.init()}return wh(e,[{key:"init",value:function(){var n=this,l=this.element,o=this.options;if(!l[Oe]){l[Oe]=this,o.focus&&!o.keyboard&&(o.focus=!1);var i=l.localName==="img",d=[];if(Ge(i?[l]:l.querySelectorAll("img"),function(p){Qe(o.filter)?o.filter.call(n,p)&&d.push(p):n.getImageURL(p)&&d.push(p)}),this.isImg=i,this.length=d.length,this.images=d,this.initBody(),Xn(document.createElement(Oe).style.transition)&&(o.transition=!1),o.inline){var g=0,v=function(){if(g+=1,g===n.length){var m;n.initializing=!1,n.delaying={abort:function(){clearTimeout(m)}},m=setTimeout(function(){n.delaying=!1,n.build()},0)}};this.initializing={abort:function(){Ge(d,function(m){m.complete||(Ye(m,$t,v),Ye(m,On,v))})}},Ge(d,function(p){if(p.complete)v();else{var m,x;Be(p,$t,m=function(){Ye(p,On,x),v()},{once:!0}),Be(p,On,x=function(){Ye(p,$t,m),v()},{once:!0})}})}else Be(l,nr,this.onStart=function(p){var m=p.target;m.localName==="img"&&(!Qe(o.filter)||o.filter.call(n,m))&&n.view(n.images.indexOf(m))})}}},{key:"build",value:function(){if(!this.ready){var n=this.element,l=this.options,o=n.parentNode,i=document.createElement("div");i.innerHTML=Ch;var d=i.querySelector(".".concat(Oe,"-container")),g=d.querySelector(".".concat(Oe,"-title")),v=d.querySelector(".".concat(Oe,"-toolbar")),p=d.querySelector(".".concat(Oe,"-navbar")),m=d.querySelector(".".concat(Oe,"-button")),x=d.querySelector(".".concat(Oe,"-canvas"));if(this.parent=o,this.viewer=d,this.title=g,this.toolbar=v,this.navbar=p,this.button=m,this.canvas=x,this.footer=d.querySelector(".".concat(Oe,"-footer")),this.tooltipBox=d.querySelector(".".concat(Oe,"-tooltip")),this.player=d.querySelector(".".concat(Oe,"-player")),this.list=d.querySelector(".".concat(Oe,"-list")),d.id="".concat(Oe).concat(this.id),g.id="".concat(Oe,"Title").concat(this.id),Ce(g,l.title?di(Array.isArray(l.title)?l.title[0]:l.title):Ln),Ce(p,l.navbar?di(l.navbar):Ln),Wr(m,Ln,!l.button),l.keyboard&&m.setAttribute("tabindex",0),l.backdrop&&(Ce(d,"".concat(Oe,"-backdrop")),!l.inline&&l.backdrop!=="static"&&La(x,Ti,"hide")),$r(l.className)&&l.className&&l.className.split(ja).forEach(function(q){Ce(d,q)}),l.toolbar){var y=document.createElement("ul"),k=Gn(l.toolbar),S=si.slice(0,3),A=si.slice(7,9),T=si.slice(9);k||Ce(v,di(l.toolbar)),Ge(k?l.toolbar:si,function(q,R){var F=k&&Gn(q),C=k?Ha(R):q,N=F&&!Xn(q.show)?q.show:q;if(!(!N||!l.zoomable&&S.indexOf(C)!==-1||!l.rotatable&&A.indexOf(C)!==-1||!l.scalable&&T.indexOf(C)!==-1)){var z=F&&!Xn(q.size)?q.size:q,X=F&&!Xn(q.click)?q.click:q,H=document.createElement("li");l.keyboard&&H.setAttribute("tabindex",0),H.setAttribute("role","button"),Ce(H,"".concat(Oe,"-").concat(C)),Qe(X)||La(H,Ti,C),it(N)&&Ce(H,di(N)),["small","large"].indexOf(z)!==-1?Ce(H,"".concat(Oe,"-").concat(z)):C==="play"&&Ce(H,"".concat(Oe,"-large")),Qe(X)&&Be(H,nr,X),y.appendChild(H)}}),v.appendChild(y)}else Ce(v,Ln);if(!l.rotatable){var V=v.querySelectorAll('li[class*="rotate"]');Ce(V,Fr),Ge(V,function(q){v.appendChild(q)})}if(l.inline)Ce(m,Bh),Yt(d,{zIndex:l.zIndexInline}),window.getComputedStyle(o).position==="static"&&Yt(o,{position:"relative"}),o.insertBefore(d,n.nextSibling);else{Ce(m,kh),Ce(d,Ia),Ce(d,vi),Ce(d,Ln),Yt(d,{zIndex:l.zIndex});var O=l.container;$r(O)&&(O=n.ownerDocument.querySelector(O)),O||(O=this.body),O.appendChild(d)}if(l.inline&&(this.render(),this.bind(),this.isShown=!0),this.ready=!0,Qe(l.ready)&&Be(n,cl,l.ready,{once:!0}),dt(n,cl)===!1){this.ready=!1;return}this.ready&&l.inline&&this.view(this.index)}}}],[{key:"noConflict",value:function(){return window.Viewer=Yh,e}},{key:"setDefaults",value:function(n){Vt(el,Gn(n)&&n)}}])}();Vt(ls.prototype,Wh,jh,Hh,Uh,Qh);const ss=AbortController,ds=ss.prototype,Xh=ds.abort,Gh=Gt(ds,"signal").get,us=()=>{const e=new ss;return{abort:Na(Xh,e),signal:Ma(Gh,e)}},Ua=AbortSignal.prototype,Sl=Ua.throwIfAborted,cs=Tt(Gt(Ua,"aborted").get),ps=Tt(Gt(Ua,"reason").get);Sl!=null&&Tt(Sl);const Jh={once:!0},Zh=(e,t,n=Jh)=>{if(typeof t!="function")throw new TypeError("onAbort: Argument 2 is not callable.");const l=()=>{let o;try{o=ps(e)}catch(i){o=i}t(o)};cs(e)?Au(l):We(e,"abort",l,n)};class ef{#r;#n=new Map;#e=new Map;#t=new Map;#i=t=>{const{target:n}=t;if(n!=null){const i=n.tagName;if(i==="INPUT"||i==="TEXTAREA"||n.isContentEditable)return}const{key:l}=t,o=this.#e.get(l);if(o!=null){const i=this.#n;t.repeat||i.set(l,-1);const d=(i.get(l)??-1)+1;i.set(l,d),t.preventDefault(),t.stopPropagation(),o(t,d);return}};#a=t=>{const{key:n}=t,l=this.#n,o=l.get(n);if(l.delete(n),o==null)return;const i=this.#t.get(n);i!=null&&(t.preventDefault(),t.stopPropagation(),i(t,o))};constructor(t=Qt,n){this.#r=t;const l={capture:!0,signal:n};We(t,"keydown",this.#i,l),We(t,"keyup",this.#a,l)}set(t,n,l){n==null&&l==null?(this.#e.delete(t),this.#t.delete(t)):(this.#e.set(t,n??wa),this.#t.set(t,l??wa))}}const{slice:Il,startsWith:Tl}=Pa,hs=history,Qa=History.prototype,tf=PopStateEvent.prototype,fs=e=>t=>{Ma(e,hs,t,"",t!=null?`#?${new URLSearchParams(t)}`:"#")},nf=Na(Gt(Qa,"state").get,hs),rf=Tt(Gt(tf,"state").get),Ll=fs(Qa.pushState),Da=fs(Qa.replaceState),af=(e=location.hash)=>{let t,n;if(Tl(e,"#!"))n=new URL(decodeURIComponent(Il(e,2))).searchParams;else if(Tl(e,"#")){n=new URLSearchParams(Il(e,1));let l=n.get(".");l!=null&&(n=new URL(l).searchParams)}return n!=null&&(t=Fl(n),Da(t)),t};/*!
 * hash-wasm (https://www.npmjs.com/package/hash-wasm)
 * (c) Dani Biro
 * @license MIT
 */function xi(e,t,n,l){function o(i){return i instanceof n?i:new n(function(d){d(i)})}return new(n||(n=Promise))(function(i,d){function g(m){try{p(l.next(m))}catch(x){d(x)}}function v(m){try{p(l.throw(m))}catch(x){d(x)}}function p(m){m.done?i(m.value):o(m.value).then(g,v)}p((l=l.apply(e,[])).next())})}class at{constructor(){this.mutex=Promise.resolve()}lock(){let t=()=>{};return this.mutex=this.mutex.then(()=>new Promise(t)),new Promise(n=>{t=n})}dispatch(t){return xi(this,void 0,void 0,function*(){const n=yield this.lock();try{return yield Promise.resolve(t())}finally{n()}})}}var fa;function of(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global}const Oa=of(),ma=(fa=Oa.Buffer)!==null&&fa!==void 0?fa:null,lf=Oa.TextEncoder?new Oa.TextEncoder:null;function ms(e,t){return(e&15)+(e>>6|e>>3&8)<<4|(t&15)+(t>>6|t>>3&8)}function sf(e,t){const n=t.length>>1;for(let l=0;l<n;l++){const o=l<<1;e[l]=ms(t.charCodeAt(o),t.charCodeAt(o+1))}}function df(e,t){if(e.length!==t.length*2)return!1;for(let n=0;n<t.length;n++){const l=n<<1;if(t[n]!==ms(e.charCodeAt(l),e.charCodeAt(l+1)))return!1}return!0}const Dl=87,Ol=48;function zl(e,t,n){let l=0;for(let o=0;o<n;o++){let i=t[o]>>>4;e[l++]=i>9?i+Dl:i+Ol,i=t[o]&15,e[l++]=i>9?i+Dl:i+Ol}return String.fromCharCode.apply(null,e)}const Ml=ma!==null?e=>{if(typeof e=="string"){const t=ma.from(e,"utf8");return new Uint8Array(t.buffer,t.byteOffset,t.length)}if(ma.isBuffer(e))return new Uint8Array(e.buffer,e.byteOffset,e.length);if(ArrayBuffer.isView(e))return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);throw new Error("Invalid data type!")}:e=>{if(typeof e=="string")return lf.encode(e);if(ArrayBuffer.isView(e))return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);throw new Error("Invalid data type!")},Nl="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Pr=new Uint8Array(256);for(let e=0;e<Nl.length;e++)Pr[Nl.charCodeAt(e)]=e;function uf(e){let t=Math.floor(e.length*.75);const n=e.length;return e[n-1]==="="&&(t-=1,e[n-2]==="="&&(t-=1)),t}function cf(e){const t=uf(e),n=e.length,l=new Uint8Array(t);let o=0;for(let i=0;i<n;i+=4){const d=Pr[e.charCodeAt(i)],g=Pr[e.charCodeAt(i+1)],v=Pr[e.charCodeAt(i+2)],p=Pr[e.charCodeAt(i+3)];l[o]=d<<2|g>>4,o+=1,l[o]=(g&15)<<4|v>>2,o+=1,l[o]=(v&3)<<6|p&63,o+=1}return l}const ci=16*1024,Or=4,pf=new at,ya=new Map;function hf(e,t){return xi(this,void 0,void 0,function*(){let n=null,l=null,o=!1;if(typeof WebAssembly>"u")throw new Error("WebAssembly is not supported in this environment!");const i=(C,N=0)=>{l.set(C,N)},d=()=>l,g=()=>n.exports,v=C=>{n.exports.Hash_SetMemorySize(C);const N=n.exports.Hash_GetBuffer(),z=n.exports.memory.buffer;l=new Uint8Array(z,N,C)},p=()=>new DataView(n.exports.memory.buffer).getUint32(n.exports.STATE_SIZE,!0),m=pf.dispatch(()=>xi(this,void 0,void 0,function*(){if(!ya.has(e.name)){const N=cf(e.data),z=WebAssembly.compile(N);ya.set(e.name,z)}const C=yield ya.get(e.name);n=yield WebAssembly.instantiate(C,{})})),x=()=>xi(this,void 0,void 0,function*(){n||(yield m);const C=n.exports.Hash_GetBuffer(),N=n.exports.memory.buffer;l=new Uint8Array(N,C,ci)}),y=(C=null)=>{o=!0,n.exports.Hash_Init(C)},k=C=>{let N=0;for(;N<C.length;){const z=C.subarray(N,N+ci);N+=z.length,l.set(z),n.exports.Hash_Update(z.length)}},S=C=>{if(!o)throw new Error("update() called before init()");const N=Ml(C);k(N)},A=new Uint8Array(t*2),T=(C,N=null)=>{if(!o)throw new Error("digest() called before init()");return o=!1,n.exports.Hash_Final(N),C==="binary"?l.slice(0,t):zl(A,l,t)},V=()=>{if(!o)throw new Error("save() can only be called after init() and before digest()");const C=n.exports.Hash_GetState(),N=p(),z=n.exports.memory.buffer,X=new Uint8Array(z,C,N),H=new Uint8Array(Or+N);return sf(H,e.hash),H.set(X,Or),H},O=C=>{if(!(C instanceof Uint8Array))throw new Error("load() expects an Uint8Array generated by save()");const N=n.exports.Hash_GetState(),z=p(),X=Or+z,H=n.exports.memory.buffer;if(C.length!==X)throw new Error(`Bad state length (expected ${X} bytes, got ${C.length})`);if(!df(e.hash,C.subarray(0,Or)))throw new Error("This state was written by an incompatible hash implementation");const oe=C.subarray(Or);new Uint8Array(H,N,z).set(oe),o=!0},q=C=>typeof C=="string"?C.length<ci/4:C.byteLength<ci;let R=q;switch(e.name){case"argon2":case"scrypt":R=()=>!0;break;case"blake2b":case"blake2s":R=(C,N)=>N<=512&&q(C);break;case"blake3":R=(C,N)=>N===0&&q(C);break;case"xxhash64":case"xxhash3":case"xxhash128":case"crc64":R=()=>!1;break}const F=(C,N=null,z=null)=>{if(!R(C,N))return y(N),S(C),T("hex",z);const X=Ml(C);return l.set(X),n.exports.Hash_Calculate(X.length,N,z),zl(A,l,t)};return yield x(),{getMemory:d,writeMemory:i,getExports:g,setMemorySize:v,init:y,update:S,digest:T,save:V,load:O,calculate:F,hashLength:t}})}new at;new at;new at;new at;new at;new at;new at;var ff="md5",mf="AGFzbQEAAAABEgRgAAF/YAAAYAF/AGACf38BfwMIBwABAgMBAAIFBAEBAgIGDgJ/AUGgigULfwBBgAgLB3AIBm1lbW9yeQIADkhhc2hfR2V0QnVmZmVyAAAJSGFzaF9Jbml0AAELSGFzaF9VcGRhdGUAAgpIYXNoX0ZpbmFsAAQNSGFzaF9HZXRTdGF0ZQAFDkhhc2hfQ2FsY3VsYXRlAAYKU1RBVEVfU0laRQMBCoMaBwUAQYAJCy0AQQBC/rnrxemOlZkQNwKQiQFBAEKBxpS6lvHq5m83AoiJAUEAQgA3AoCJAQu+BQEHf0EAQQAoAoCJASIBIABqQf////8BcSICNgKAiQFBAEEAKAKEiQEgAiABSWogAEEddmo2AoSJAQJAAkACQAJAAkACQCABQT9xIgMNAEGACSEEDAELIABBwAAgA2siBUkNASAFQQNxIQZBACEBAkAgA0E/c0EDSQ0AIANBgIkBaiEEIAVB/ABxIQdBACEBA0AgBCABaiICQRhqIAFBgAlqLQAAOgAAIAJBGWogAUGBCWotAAA6AAAgAkEaaiABQYIJai0AADoAACACQRtqIAFBgwlqLQAAOgAAIAcgAUEEaiIBRw0ACwsCQCAGRQ0AIANBmIkBaiECA0AgAiABaiABQYAJai0AADoAACABQQFqIQEgBkF/aiIGDQALC0GYiQFBwAAQAxogACAFayEAIAVBgAlqIQQLIABBwABPDQEgACECDAILIABFDQIgAEEDcSEGQQAhAQJAIABBBEkNACADQYCJAWohBCAAQXxxIQBBACEBA0AgBCABaiICQRhqIAFBgAlqLQAAOgAAIAJBGWogAUGBCWotAAA6AAAgAkEaaiABQYIJai0AADoAACACQRtqIAFBgwlqLQAAOgAAIAAgAUEEaiIBRw0ACwsgBkUNAiADQZiJAWohAgNAIAIgAWogAUGACWotAAA6AAAgAUEBaiEBIAZBf2oiBg0ADAMLCyAAQT9xIQIgBCAAQUBxEAMhBAsgAkUNACACQQNxIQZBACEBAkAgAkEESQ0AIAJBPHEhAEEAIQEDQCABQZiJAWogBCABaiICLQAAOgAAIAFBmYkBaiACQQFqLQAAOgAAIAFBmokBaiACQQJqLQAAOgAAIAFBm4kBaiACQQNqLQAAOgAAIAAgAUEEaiIBRw0ACwsgBkUNAANAIAFBmIkBaiAEIAFqLQAAOgAAIAFBAWohASAGQX9qIgYNAAsLC4cQARl/QQAoApSJASECQQAoApCJASEDQQAoAoyJASEEQQAoAoiJASEFA0AgACgCCCIGIAAoAhgiByAAKAIoIgggACgCOCIJIAAoAjwiCiAAKAIMIgsgACgCHCIMIAAoAiwiDSAMIAsgCiANIAkgCCAHIAMgBmogAiAAKAIEIg5qIAUgBCACIANzcSACc2ogACgCACIPakH4yKq7fWpBB3cgBGoiECAEIANzcSADc2pB1u6exn5qQQx3IBBqIhEgECAEc3EgBHNqQdvhgaECakERdyARaiISaiAAKAIUIhMgEWogACgCECIUIBBqIAQgC2ogEiARIBBzcSAQc2pB7p33jXxqQRZ3IBJqIhAgEiARc3EgEXNqQa+f8Kt/akEHdyAQaiIRIBAgEnNxIBJzakGqjJ+8BGpBDHcgEWoiEiARIBBzcSAQc2pBk4zBwXpqQRF3IBJqIhVqIAAoAiQiFiASaiAAKAIgIhcgEWogDCAQaiAVIBIgEXNxIBFzakGBqppqakEWdyAVaiIQIBUgEnNxIBJzakHYsYLMBmpBB3cgEGoiESAQIBVzcSAVc2pBr++T2nhqQQx3IBFqIhIgESAQc3EgEHNqQbG3fWpBEXcgEmoiFWogACgCNCIYIBJqIAAoAjAiGSARaiANIBBqIBUgEiARc3EgEXNqQb6v88p4akEWdyAVaiIQIBUgEnNxIBJzakGiosDcBmpBB3cgEGoiESAQIBVzcSAVc2pBk+PhbGpBDHcgEWoiFSARIBBzcSAQc2pBjofls3pqQRF3IBVqIhJqIAcgFWogDiARaiAKIBBqIBIgFSARc3EgEXNqQaGQ0M0EakEWdyASaiIQIBJzIBVxIBJzakHiyviwf2pBBXcgEGoiESAQcyAScSAQc2pBwOaCgnxqQQl3IBFqIhIgEXMgEHEgEXNqQdG0+bICakEOdyASaiIVaiAIIBJqIBMgEWogDyAQaiAVIBJzIBFxIBJzakGqj9vNfmpBFHcgFWoiECAVcyAScSAVc2pB3aC8sX1qQQV3IBBqIhEgEHMgFXEgEHNqQdOokBJqQQl3IBFqIhIgEXMgEHEgEXNqQYHNh8V9akEOdyASaiIVaiAJIBJqIBYgEWogFCAQaiAVIBJzIBFxIBJzakHI98++fmpBFHcgFWoiECAVcyAScSAVc2pB5puHjwJqQQV3IBBqIhEgEHMgFXEgEHNqQdaP3Jl8akEJdyARaiISIBFzIBBxIBFzakGHm9Smf2pBDncgEmoiFWogBiASaiAYIBFqIBcgEGogFSAScyARcSASc2pB7anoqgRqQRR3IBVqIhAgFXMgEnEgFXNqQYXSj896akEFdyAQaiIRIBBzIBVxIBBzakH4x75nakEJdyARaiISIBFzIBBxIBFzakHZhby7BmpBDncgEmoiFWogFyASaiATIBFqIBkgEGogFSAScyARcSASc2pBipmp6XhqQRR3IBVqIhAgFXMiFSASc2pBwvJoakEEdyAQaiIRIBVzakGB7ce7eGpBC3cgEWoiEiARcyIaIBBzakGiwvXsBmpBEHcgEmoiFWogFCASaiAOIBFqIAkgEGogFSAac2pBjPCUb2pBF3cgFWoiECAVcyIVIBJzakHE1PulempBBHcgEGoiESAVc2pBqZ/73gRqQQt3IBFqIhIgEXMiCSAQc2pB4JbttX9qQRB3IBJqIhVqIA8gEmogGCARaiAIIBBqIBUgCXNqQfD4/vV7akEXdyAVaiIQIBVzIhUgEnNqQcb97cQCakEEdyAQaiIRIBVzakH6z4TVfmpBC3cgEWoiEiARcyIIIBBzakGF4bynfWpBEHcgEmoiFWogGSASaiAWIBFqIAcgEGogFSAIc2pBhbqgJGpBF3cgFWoiESAVcyIQIBJzakG5oNPOfWpBBHcgEWoiEiAQc2pB5bPutn5qQQt3IBJqIhUgEnMiByARc2pB+PmJ/QFqQRB3IBVqIhBqIAwgFWogDyASaiAGIBFqIBAgB3NqQeWssaV8akEXdyAQaiIRIBVBf3NyIBBzakHExKShf2pBBncgEWoiEiAQQX9zciARc2pBl/+rmQRqQQp3IBJqIhAgEUF/c3IgEnNqQafH0Nx6akEPdyAQaiIVaiALIBBqIBkgEmogEyARaiAVIBJBf3NyIBBzakG5wM5kakEVdyAVaiIRIBBBf3NyIBVzakHDs+2qBmpBBncgEWoiECAVQX9zciARc2pBkpmz+HhqQQp3IBBqIhIgEUF/c3IgEHNqQf3ov39qQQ93IBJqIhVqIAogEmogFyAQaiAOIBFqIBUgEEF/c3IgEnNqQdG7kax4akEVdyAVaiIQIBJBf3NyIBVzakHP/KH9BmpBBncgEGoiESAVQX9zciAQc2pB4M2zcWpBCncgEWoiEiAQQX9zciARc2pBlIaFmHpqQQ93IBJqIhVqIA0gEmogFCARaiAYIBBqIBUgEUF/c3IgEnNqQaGjoPAEakEVdyAVaiIQIBJBf3NyIBVzakGC/c26f2pBBncgEGoiESAVQX9zciAQc2pBteTr6XtqQQp3IBFqIhIgEEF/c3IgEXNqQbul39YCakEPdyASaiIVIARqIBYgEGogFSARQX9zciASc2pBkaeb3H5qQRV3aiEEIBUgA2ohAyASIAJqIQIgESAFaiEFIABBwABqIQAgAUFAaiIBDQALQQAgAjYClIkBQQAgAzYCkIkBQQAgBDYCjIkBQQAgBTYCiIkBIAALyAMBBX9BACgCgIkBQT9xIgBBmIkBakGAAToAACAAQQFqIQECQAJAAkACQCAAQT9zIgJBB0sNACACRQ0BIAFBmIkBakEAOgAAIAJBAUYNASAAQZqJAWpBADoAACACQQJGDQEgAEGbiQFqQQA6AAAgAkEDRg0BIABBnIkBakEAOgAAIAJBBEYNASAAQZ2JAWpBADoAACACQQVGDQEgAEGeiQFqQQA6AAAgAkEGRg0BIABBn4kBakEAOgAADAELIAJBCEYNAkE2IABrIgMhBAJAIAJBA3EiAEUNAEEAIABrIQRBACEAA0AgAEHPiQFqQQA6AAAgBCAAQX9qIgBHDQALIAMgAGohBAsgA0EDSQ0CDAELQZiJAUHAABADGkEAIQFBNyEECyABQYCJAWohAEF/IQIDQCAAIARqQRVqQQA2AAAgAEF8aiEAIAQgAkEEaiICRw0ACwtBAEEAKAKEiQE2AtSJAUEAQQAoAoCJASIAQRV2OgDTiQFBACAAQQ12OgDSiQFBACAAQQV2OgDRiQFBACAAQQN0IgA6ANCJAUEAIAA2AoCJAUGYiQFBwAAQAxpBAEEAKQKIiQE3A4AJQQBBACkCkIkBNwOICQsGAEGAiQELMwBBAEL+uevF6Y6VmRA3ApCJAUEAQoHGlLqW8ermbzcCiIkBQQBCADcCgIkBIAAQAhAECwsLAQBBgAgLBJgAAAA=",yf="e6508e4b",Af={name:ff,data:mf,hash:yf};new at;function gf(){return hf(Af,16).then(e=>{e.init();const t={init:()=>(e.init(),t),update:n=>(e.update(n),t),digest:n=>e.digest(n),save:()=>e.save(),load:n=>(e.load(n),t),blockSize:64,digestSize:16};return t})}new at;new at;new at;new at;new at;new at;new at;new at;new at;new at;new at;new at;new at;new at;let Pl,Vl;class bf extends TransformStream{static{Pl=class{static{Vl=(t,n)=>{t.#t=n}}#n;#e=null;#t=null;constructor(t){this.#n=t}async start(t){this.#e=await this.#n}transform(t,n){this.#e.update(t),n.enqueue(t)}flush(t){this.#t.#r=this.#e.digest("hex")}}}#r=null;get result(){return this.#r}constructor(t){const n=new Pl(t);super(n),Vl(n,this)}}const vf=()=>new bf(gf());let ys="api.dandanplay.net",As=`https://${ys}/`;const wf=[ys,"cas.dandanplay.net"],xf=Object.freeze({__proto__:null,tvseries:"TV动画",tvspecial:"TV特别",ova:"OVA",movie:"电影",musicvideo:"MV",web:"Web",other:"其他",jpmovie:"日本电影",jpdrama:"日本电视剧",unknown:"未知"}),gs=async(e,t,n={})=>{e=new URL(e,As).href,t!=null&&(n.method??="POST",gu(t)?(n.headers=new Headers(n.headers),n.headers.set("content-type","application/json"),n.body=JSON.stringify(t)):n.body=t),n.credentials??="omit";const l=new Request(e,n);l.headers.has("accept")||l.headers.set("accept","application/json");const o=await _l(l),{status:i}=o;if(!(i>=200&&i<300))throw new TypeError(`Request failed with status code ${i}`);let d;const g=o.headers.get("content-type"),v="application/json";if((g===v||g?.startsWith(v))&&(d=await o.json(),d.errorMessage))throw new TypeError("DandanPlay API Error: "+d.errorMessage,{cause:d});return{request:l,response:o,data:d}};async function Ef(e,t){let n=t?.size??0,l="00000000000000000000000000000000";if(t!=null)try{const i=vf();await t.slice(0,16*1024*1024).stream().pipeThrough(i).pipeTo(new WritableStream),l=i.result}catch(i){console.warn("MD5 Error: ",i)}return(await gs("api/v2/match",{fileName:e,fileHash:l,fileSize:n,matchMode:"hashAndFileName"})).data}const bs=(e,t=!0)=>`${As}api/v2/comment/${e}${t?"?withRelated=true":""}`;async function Cf(e,t=!0){const n=bs(e,t);return(await gs(n)).data.comments}const kf=`
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
`,{fromCharCode:An}=String,{from:Bf}=Array,{toLowerCase:Sf}=Pa,{join:If}=Va,Tf=()=>{const{href:e,hostname:t}=new URL(location.pathname,location.href);return`// ==UserScript==
// @name dispatch-GM_fetch
// @namespace ${e}
// @version 0.1
// @description dispatch GM_fetch and GM_xmlhttpRequest
// @author ${t}
// @match  ${e}
// @run-at document-start
// @grant GM_xmlhttpRequest
// @grant GM_fetch
${If(Bf(wf,n=>`// @connect ${n}`),`
`)}
// @connect *
// ==/UserScript==
'use strict';
${kf}
var GM_fetch
const { Reflect: { apply }, dispatchEvent: _emit } = unsafeWindow
const e = new CustomEvent('external:tampermonkey:grant', { detail: { GM_xmlhttpRequest, GM_fetch } })
unsafeWindow.addEventListener('load', () => { apply(_emit, unsafeWindow, [e]) }, { once: !0, capture: !0 })
`},za=`${An(84)}${An(117)}${An(99)}${An(97)}${An(111)}`,Lf=async()=>{const{href:e,hostname:t}=new URL(location.pathname,location.href),{finalUrl:n}=await new Promise((l,o)=>{zr({url:`https://www.${Sf(za)}.${An(102)}${An(117)}${An(110)}/favicon.ico`,onload(i){l(i)},onerror:o})});return`// ==UserScript==
// @name ${za}-Redirector
// @namespace ${e}
// @version 0.1
// @description try to take over the world!
// @author ${t}
// @match ${new URL("/",n)}play/*/
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
  const hasPartName = /^\\u5B8C\\u7ED3/.test(doc.querySelectorAll('.show_top>.l>.t>a')[1]?.textContent)
  const xpath = doc.createExpression('concat("[",./*/*/text(),"]",./*/text())', null)
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
`},{min:Df,max:Of}=Math,vs=HTMLElement.prototype,zi=HTMLMediaElement.prototype,Ya=TimeRanges.prototype,Aa=Tt(CSSStyleDeclaration.prototype.setProperty),zf=vs.getBoundingClientRect,Mf=Tt(Gt(vs,"style").get),ws=Gt(zi,"currentTime"),Nf=Tt(ws.get),Pf=Tt(ws.set),Vf=Tt(Gt(zi,"duration").get),Rf=Tt(Gt(zi,"buffered").get),qf=Tt(Gt(zi,"played").get),Ff=Tt(Gt(Ya,"length").get),_f=Tt(Ya.start),$f=Tt(Ya.end),vn="ivu-loading-bar",Wf=`${vn} ${vn}--player`,jf=`${vn}-inner ${vn}-inner--pointer`,Hf=`${vn}-inner ${vn}-inner-color--buffered`,Uf=`${vn}-inner ${vn}-inner-color-primary`;function*Rl(e,t,n,l){let o=0,i=Ff(e);for(;o<i;o++){const d=_f(e,o)/t,g=$f(e,o)/t-d;yield j("div",{class:n,key:`${l}-${o}`,style:`left:${d}%;width:${g}%`})}}const Qf=zn({props:{video:{type:HTMLVideoElement}},setup(e){const t=et();let n,l=null,o=!1,i=0,d,g;const v=bn(ji),p=bn(ji),m=C=>{i=Vf(n)/100,Aa(R,"display",i>0?"":"none")},x=C=>{d=Rf(n),v.value=null},y=C=>{g=qf(n),p.value=null,o||Aa(R,"left",`${Nf(n)/i}%`)},k=C=>{m(),x(),y()};bu(()=>$l(()=>e.video,C=>{if(n=C,l?.(),n==null){l=null,i=0,v.value=p.value=ji,d=g=void 0;return}let N=us();({abort:l}=N),We(n,"loadstart",k,N),We(n,"durationchange",m,N),We(n,"loadedmetadata",x,N),We(n,"progress",x,N),We(n,"seeking",y,N),We(n,"timeupdate",y,N),k()},{immediate:!0}));let S,A,T;const V=C=>{i>0&&(o=!0,We(Qt,"mousemove",O),We(Qt,"mouseup",q),{x:S,width:A}=Ma(zf,t.vnode.el),O(C))},O=C=>{T=Df(Of((C.clientX-S)/A,0),1)*100,Aa(R,"left",`${T}%`)},q=C=>{o=!1,At(Qt,"mousemove",O),At(Qt,"mouseup",q),O(C),Pf(n,T*i)};Wl(()=>l?.());let R,F;return()=>j("div",{class:Wf,onMousedown:V},[F??=j("div",{class:jf,key:"pointer",ref(C){R=Mf(C)}}),...v.value??=[...Rl(d,i,Hf,"buffered")],...p.value??=[...Rl(g,i,Uf,"played")]])}}),{isArray:Yf}=Array,Kf=zn({emits:{dragover:null,drop:null},methods:{handle(e){this.$emit(e.type,e)}},beforeMount(){We(Qt,"dragover",this.handle),We(Qt,"drop",this.handle)},beforeUnmount(){At(Qt,"dragover",this.handle),At(Qt,"drop",this.handle)},render(){return Ee("global")}}),Xf=zn({name:"DropFile",emits:{change(e){return Yf(e)}},props:{accept:{type:String,default:""},global:{type:Boolean,default:!1},reason:{type:String,default:""},multiple:{type:Boolean,default:!0},paste:{type:Boolean,default:!1}},setup(e,t){return{textarea:bn(null),file:bn(null)}},methods:{handleClick(e){this.file.click(),e.target.blur(),e.preventDefault(),e.stopPropagation()},handleChange(e){const t=this.file.files;t?.length>0&&this.$emit("change",Array.from(t))},handleDragover(e){e.preventDefault(),e.stopPropagation()},handleDrop(e){const{target:t}=e;if(this.global&&!this.$el.contains(t)&&e.type!=="paste"){const l=t.tagName;if(l==="INPUT"||l==="TEXTAREA"||t.isContentEditable)return}e.preventDefault(),e.stopPropagation();const n=(e.dataTransfer??e.clipboardData).files;n.length>0&&this.$emit("change",Array.from(n))}},render(){const e=this,t=e.$slots.default;return j("div",{class:"ivu-upload ivu-upload-drag",onDragover:e.handleDragover,onDrop:e.handleDrop},[e.global?j(Kf,{onDragover:e.handleDragover,onDrop:e.handleDrop}):null,j("input",{ref:"file",type:"file",accept:e.accept,multiple:e.multiple,onChange:e.handleChange}),j("textarea",{ref:"textarea",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",border:"0 none",resize:"none",cursor:"pointer",opacity:"0"},onCopy:e.handleDragover,onPaste:e.handleDrop,onClick:e.handleClick}),t!=null?t():[j("div",{class:"ivu-card-head",style:"text-align: left"},[j("p",null,[j(Kt,{type:"ios-folder-open",size:20}),`单击或拖动${e.reason}文件到此${e.global?"页面":"处"}`])]),j("div",{class:"ivu-card-body"},e.$slots.body?.())]])}}),Gf=zn({name:"PlayList",emits:["play"],props:{list:{type:Array,required:!0},name:{type:String,default:"播放列表"}},data(){return{isDrawerOpen:!1,index:0}},watch:{list(e,t){e!==t&&this.reset()}},computed:{title(){const{name:e,index:t,list:n}=this;return`${e}[${n.length===0?"0/0":`${t+1}/${n.length}`}]`}},methods:{set(e){this.isDrawerOpen=!1,this.index=e,this.current()},reset(){this.index=0,this.current()},prev(){--this.index<0&&(this.index=(this.list.length||1)-1),this.current()},current(){const e=this.list[this.index];e!=null&&this.$emit("play",e)},next(){++this.index>=this.list.length&&(this.index=0),this.current()},delete(e){const t=this,n=t.index;t.list.splice(e,1),n>=t.list.length?t.prev():n===e&&t.current()},openDrawer(){this.isDrawerOpen=!0},setDrawer(e){this.isDrawerOpen=e}},render(e,t){const n=this,{title:l}=n;return j(Nt,{title:l},t[64]??={extra:()=>[j(Vr,null,t[66]??=()=>[j(yt,{onClick:n.openDrawer},()=>"详细信息"),j(yt,{onClick:n.prev},()=>"上一个"),j(yt,{onClick:n.next},()=>"下一个")]),j(Tp,{title:l,width:384,modelValue:n.isDrawerOpen,"onUpdate:modelValue":n.setDrawer},t[75]??=()=>[j(Si,{onOnClick:n.set,style:"padding: 0px"},t[78]??=()=>Array.from(n.list,(o,i)=>j(Nt,{title:o.name,name:i,selected:n.index===i},{extra:()=>j(yt,{onClick(d){d.stopPropagation(),n.delete(i)}},()=>j(Kt,{type:"md-close"}))})))])]})}});var ga={exports:{}},ql;function Jf(){return ql||(ql=1,function(e,t){(function(n,l){e.exports=l()})(self,()=>(()=>{var n={916:(d,g,v)=>{var p=v(471);d.exports=function(m){var x,y="",k=(m=m||{}).video,S=m.options,A=p.$escape,T=m.tran,V=m.icons,O=m.index,q=p.$each;return m.$value,m.$index,y+=`<div class="dplayer-mask"></div>
<div class="dplayer-video-wrap">
    `,x=v(568)(k),y+=x,y+=`
    `,S.logo&&(y+=`
    <div class="dplayer-logo">
        <img src="`,y+=A(S.logo),y+=`">
    </div>
    `),y+=`
    <div class="dplayer-danmaku"`,S.danmaku&&S.danmaku.bottom&&(y+=' style="margin-bottom:',y+=A(S.danmaku.bottom),y+='"'),y+=`>
        <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>
    </div>
    <div class="dplayer-subtitle"></div>
    <div class="dplayer-bezel">
        <span class="dplayer-bezel-icon"></span>
        `,S.danmaku&&(y+=`
        <span class="dplayer-danloading">`,y+=A(T("danmaku-loading")),y+=`</span>
        `),y+=`
        <span class="diplayer-loading-icon">`,y+=V.loading,y+=`</span>
    </div>
</div>
<div class="dplayer-controller-mask"></div>
<div class="dplayer-controller">
    <div class="dplayer-icons dplayer-comment-box">
        <button class="dplayer-icon dplayer-comment-setting-icon" data-balloon="`,y+=A(T("setting")),y+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,y+=V.pallette,y+=`</span>
        </button>
        <div class="dplayer-comment-setting-box">
            <div class="dplayer-comment-setting-color">
                <div class="dplayer-comment-setting-title">`,y+=A(T("set-danmaku-color")),y+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,y+=A(O),y+=`" value="#fff" checked>
                    <span style="background: #fff;"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,y+=A(O),y+=`" value="#e54256">
                    <span style="background: #e54256"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,y+=A(O),y+=`" value="#ffe133">
                    <span style="background: #ffe133"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,y+=A(O),y+=`" value="#64DD17">
                    <span style="background: #64DD17"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,y+=A(O),y+=`" value="#39ccff">
                    <span style="background: #39ccff"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,y+=A(O),y+=`" value="#D500F9">
                    <span style="background: #D500F9"></span>
                </label>
            </div>
            <div class="dplayer-comment-setting-type">
                <div class="dplayer-comment-setting-title">`,y+=A(T("set-danmaku-type")),y+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,y+=A(O),y+=`" value="1">
                    <span>`,y+=A(T("top")),y+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,y+=A(O),y+=`" value="0" checked>
                    <span>`,y+=A(T("rolling")),y+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,y+=A(O),y+=`" value="2">
                    <span>`,y+=A(T("bottom")),y+=`</span>
                </label>
            </div>
        </div>
        <input class="dplayer-comment-input" type="text" placeholder="`,y+=A(T("input-danmaku-enter")),y+=`" maxlength="30">
        <button class="dplayer-icon dplayer-send-icon" data-balloon="`,y+=A(T("send")),y+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,y+=V.send,y+=`</span>
        </button>
    </div>
    <div class="dplayer-icons dplayer-icons-left">
        <button class="dplayer-icon dplayer-play-icon">
            <span class="dplayer-icon-content">`,y+=V.play,y+=`</span>
        </button>
        <div class="dplayer-volume">
            <button class="dplayer-icon dplayer-volume-icon">
                <span class="dplayer-icon-content">`,y+=V.volumeDown,y+=`</span>
            </button>
            <div class="dplayer-volume-bar-wrap" data-balloon-pos="up">
                <div class="dplayer-volume-bar">
                    <div class="dplayer-volume-bar-inner" style="background: `,y+=A(S.theme),y+=`;">
                        <span class="dplayer-thumb" style="background: `,y+=A(S.theme),y+=`"></span>
                    </div>
                </div>
            </div>
        </div>
        <span class="dplayer-time">
            <span class="dplayer-ptime">0:00</span> /
            <span class="dplayer-dtime">0:00</span>
        </span>
        `,S.live&&(y+=`
        <span class="dplayer-live-badge"><span class="dplayer-live-dot" style="background: `,y+=A(S.theme),y+=';"></span>',y+=A(T("live")),y+=`</span>
        `),y+=`
    </div>
    <div class="dplayer-icons dplayer-icons-right">
        `,S.video.quality&&(y+=`
        <div class="dplayer-quality">
            <button class="dplayer-icon dplayer-quality-icon">`,y+=A(S.video.quality[S.video.defaultQuality].name),y+=`</button>
            <div class="dplayer-quality-mask">
                <div class="dplayer-quality-list">
                `,q(S.video.quality,function(R,F){y+=`
                    <div class="dplayer-quality-item" data-index="`,y+=A(F),y+='">',y+=A(R.name),y+=`</div>
                `}),y+=`
                </div>
            </div>
        </div>
        `),y+=`
        `,S.screenshot&&(y+=`
        <div class="dplayer-icon dplayer-camera-icon" data-balloon="`,y+=A(T("screenshot")),y+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,y+=V.camera,y+=`</span>
        </div>
        `),y+=`
        `,S.airplay&&(y+=`
        <div class="dplayer-icon dplayer-airplay-icon" data-balloon="`,y+=A(T("airplay")),y+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,y+=V.airplay,y+=`</span>
        </div>
        `),y+=`
        `,S.chromecast&&(y+=`
        <div class="dplayer-icon dplayer-chromecast-icon" data-balloon="`,y+=A(T("chromecast")),y+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,y+=V.chromecast,y+=`</span>
        </div>
        `),y+=`
        <div class="dplayer-comment">
            <button class="dplayer-icon dplayer-comment-icon" data-balloon="`,y+=A(T("send-danmaku")),y+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,y+=V.comment,y+=`</span>
            </button>
        </div>
        `,S.subtitle&&(y+=`
        `,typeof S.subtitle.url=="string"?(y+=`
        <div class="dplayer-subtitle-btn">
            <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="`,y+=A(T("hide-subs")),y+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,y+=V.subtitle,y+=`</span>
            </button>
        </div>
        `):(y+=`
        <div class="dplayer-subtitles">
            <button class="dplayer-icon dplayer-subtitles-icon" data-balloon="`,y+=A(T("subtitle")),y+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,y+=V.subtitle,y+=`</span>
            </button>
            <div class="dplayer-subtitles-box">
                <div class="dplayer-subtitles-panel">
                    `,q(S.subtitle.url,function(R,F){y+=`
                        <div class="dplayer-subtitles-item" data-subtitle="`,y+=A(R.url),y+=`">
                            <!-- if lang, show tran(lang). if lang and name, show name + (tran(lang)). if name, show name. off option use lang for translation. -->
                            <span class="dplayer-label">`,y+=A(R.lang?R.name?R.name+" ("+T(R.lang)+")":T(R.lang):R.name),y+=`</span>
                        </div>
                    `}),y+=`
                </div>
            </div>
        </div>
        `),y+=`
        `),y+=`
        <div class="dplayer-setting">
            <button class="dplayer-icon dplayer-setting-icon" data-balloon="`,y+=A(T("setting")),y+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,y+=V.setting,y+=`</span>
            </button>
            <div class="dplayer-setting-box">
                <div class="dplayer-setting-origin-panel">
                    <div class="dplayer-setting-item dplayer-setting-speed">
                        <span class="dplayer-label">`,y+=A(T("speed")),y+=`</span>
                        <div class="dplayer-toggle">`,y+=V.right,y+=`</div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-loop">
                        <span class="dplayer-label">`,y+=A(T("loop")),y+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">
                            <label for="dplayer-toggle"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-showdan">
                        <span class="dplayer-label">`,y+=A(T("show-danmaku")),y+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">
                            <label for="dplayer-toggle-dan"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danunlimit">
                        <span class="dplayer-label">`,y+=A(T("unlimited-danmaku")),y+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-danunlimit-setting-input" type="checkbox" name="dplayer-toggle-danunlimit">
                            <label for="dplayer-toggle-danunlimit"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danmaku">
                        <span class="dplayer-label">`,y+=A(T("opacity-danmaku")),y+=`</span>
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
                    `,q(S.playbackSpeed,function(R,F){y+=`
                        <div class="dplayer-setting-speed-item" data-speed="`,y+=A(R),y+=`">
                            <span class="dplayer-label">`,y+=A(R===1?T("normal"):R),y+=`</span>
                        </div>
                    `}),y+=`
                </div>
            </div>
        </div>
        <div class="dplayer-full">
            <button class="dplayer-icon dplayer-full-in-icon" data-balloon="`,y+=A(T("web-fullscreen")),y+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,y+=V.fullWeb,y+=`</span>
            </button>
            <button class="dplayer-icon dplayer-full-icon" data-balloon="`,y+=A(T("fullscreen")),y+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,y+=V.full,y+=`</span>
            </button>
        </div>
    </div>
    <div class="dplayer-bar-wrap">
        <div class="dplayer-bar-time hidden">00:00</div>
        <div class="dplayer-bar-preview"></div>
        <div class="dplayer-bar">
            <div class="dplayer-loaded" style="width: 0;"></div>
            <div class="dplayer-played" style="width: 0; background: `,y+=A(S.theme),y+=`">
                <span class="dplayer-thumb" style="background: `,y+=A(S.theme),y+=`"></span>
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
    `,S.danmaku&&(y+=`
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
    `),y+=`
</div>
<div class="dplayer-menu">
    `,q(S.contextmenu,function(R,F){y+=`
        <div class="dplayer-menu-item">
            <a`,R.link&&(y+=' target="_blank"'),y+=' href="',y+=A(R.link||"javascript:void(0);"),y+='">',R.key&&(y+=" ",y+=A(T(R.key))),R.text&&(y+=" ",y+=A(R.text)),y+=`</a>
        </div>
    `}),y+=`
</div>
<div class="dplayer-notice-list"></div>
<button class="dplayer-mobile-play">
    `,y+=V.play,y+=`
</button>`}},568:(d,g,v)=>{var p=v(471);d.exports=function(m){var x="",y=(m=m||{}).enableSubtitle,k=m.subtitle,S=m.current,A=m.airplay,T=m.pic,V=p.$escape,O=m.screenshot,q=m.preload,R=m.url;return y=k&&k.type==="webvtt",x+=`
<video
    class="dplayer-video `,S&&(x+="dplayer-video-current"),x+=`"
    webkit-playsinline
    `,A&&(x+=' x-webkit-airplay="allow" '),x+=`
    playsinline
    `,T&&(x+='poster="',x+=V(T),x+='"'),x+=`
    `,(O||y)&&(x+='crossorigin="anonymous"'),x+=`
    `,q&&(x+='preload="',x+=V(q),x+='"'),x+=`
    `,A?x+=`
    nosrc
    `:R&&(x+=`
    src="`,x+=V(R),x+=`"
    `),x+=`
    >
    `,A&&(x+=`
    <source src="`,x+=V(R),x+=`">
    `),x+=`
    `,y&&(x+=`
    <track class="dplayer-subtrack" kind="metadata" default src="`,x+=V(typeof k.url=="string"?k.url:k.url[k.index].url),x+=`"></track>
    `),x+`
</video>`}},49:(d,g,v)=>{v.d(g,{Z:()=>k});var p=v(415),m=v.n(p),x=v(352),y=v.n(x)()(m());y.push([d.id,`:root {
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
`],sourceRoot:""}]);const k=y},685:(d,g,v)=>{v.d(g,{Z:()=>q});var p=v(415),m=v.n(p),x=v(352),y=v.n(x),k=v(49),S=v(80),A=v.n(S),T=new URL(v(831),v.b),V=y()(m());V.i(k.Z);var O=A()(T);V.push([d.id,`@keyframes my-face {
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
  background: url(`+O+`) repeat-x bottom;
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
}`],sourceRoot:""}]);const q=V},856:d=>{var g=[];function v(x){for(var y=-1,k=0;k<g.length;k++)if(g[k].identifier===x){y=k;break}return y}function p(x,y){for(var k={},S=[],A=0;A<x.length;A++){var T=x[A],V=y.base?T[0]+y.base:T[0],O=k[V]||0,q="".concat(V," ").concat(O);k[V]=O+1;var R=v(q),F={css:T[1],media:T[2],sourceMap:T[3],supports:T[4],layer:T[5]};if(R!==-1)g[R].references++,g[R].updater(F);else{var C=m(F,y);y.byIndex=A,g.splice(A,0,{identifier:q,updater:C,references:1})}S.push(q)}return S}function m(x,y){var k=y.domAPI(y);return k.update(x),function(S){if(S){if(S.css===x.css&&S.media===x.media&&S.sourceMap===x.sourceMap&&S.supports===x.supports&&S.layer===x.layer)return;k.update(x=S)}else k.remove()}}d.exports=function(x,y){var k=p(x=x||[],y=y||{});return function(S){S=S||[];for(var A=0;A<k.length;A++){var T=v(k[A]);g[T].references--}for(var V=p(S,y),O=0;O<k.length;O++){var q=v(k[O]);g[q].references===0&&(g[q].updater(),g.splice(q,1))}k=V}}},370:d=>{var g={};d.exports=function(v,p){var m=function(x){if(g[x]===void 0){var y=document.querySelector(x);if(window.HTMLIFrameElement&&y instanceof window.HTMLIFrameElement)try{y=y.contentDocument.head}catch{y=null}g[x]=y}return g[x]}(v);if(!m)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");m.appendChild(p)}},278:d=>{d.exports=function(g){var v=document.createElement("style");return g.setAttributes(v,g.attributes),g.insert(v,g.options),v}},458:(d,g,v)=>{d.exports=function(p){var m=v.nc;m&&p.setAttribute("nonce",m)}},470:d=>{d.exports=function(g){var v=g.insertStyleElement(g);return{update:function(p){(function(m,x,y){var k="";y.supports&&(k+="@supports (".concat(y.supports,") {")),y.media&&(k+="@media ".concat(y.media," {"));var S=y.layer!==void 0;S&&(k+="@layer".concat(y.layer.length>0?" ".concat(y.layer):""," {")),k+=y.css,S&&(k+="}"),y.media&&(k+="}"),y.supports&&(k+="}");var A=y.sourceMap;A&&typeof btoa<"u"&&(k+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),x.styleTagTransform(k,m,x.options)})(v,g,p)},remove:function(){(function(p){if(p.parentNode===null)return!1;p.parentNode.removeChild(p)})(v)}}}},488:d=>{d.exports=function(g,v){if(v.styleSheet)v.styleSheet.cssText=g;else{for(;v.firstChild;)v.removeChild(v.firstChild);v.appendChild(document.createTextNode(g))}}},251:d=>{d.exports='<svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg"><path d="M288 90v96c0 20-16 36-36 36h-10c-16 0-16-24 0-24h10c7 0 12-5 12-12V90c0-7-5-12-12-12H36c-7 0-12 5-12 12v96c0 7 5 12 12 12h10c16 0 16 24 0 24H36c-20 0-36-16-36-36V90c0-20 16-36 36-36h216c20 0 36 16 36 36zm-120 62l48 68c14 20 1 38-20 38H92c-21 0-34-18-20-38l48-68c13-18 35-18 48 0z"></path></svg>'},113:d=>{d.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"></path></svg>'},193:d=>{d.exports='<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="chromecast" class="svg-inline--fa fa-chromecast fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M447.8,64H64c-23.6,0-42.7,19.1-42.7,42.7v63.9H64v-63.9h383.8v298.6H298.6V448H448c23.6,0,42.7-19.1,42.7-42.7V106.7 C490.7,83.1,471.4,64,447.8,64z M21.3,383.6L21.3,383.6l0,63.9h63.9C85.2,412.2,56.6,383.6,21.3,383.6L21.3,383.6z M21.3,298.6V341 c58.9,0,106.6,48.1,106.6,107h42.7C170.7,365.6,103.7,298.7,21.3,298.6z M213.4,448h42.7c-0.5-129.5-105.3-234.3-234.8-234.6l0,42.4 C127.3,255.6,213.3,342,213.4,448z"></path></svg>'},338:d=>{d.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"></path></svg>'},807:d=>{d.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"></path></svg>'},300:d=>{d.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"></path></svg>'},574:d=>{d.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"></path></svg>'},182:d=>{d.exports='<svg version="1.1" viewBox="0 0 22 22"><svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg>'},965:d=>{d.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z"></path></svg>'},74:d=>{d.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>'},730:d=>{d.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>'},428:d=>{d.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>'},254:d=>{d.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"></path></svg>'},934:d=>{d.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 28"><path d="M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"></path></svg>'},410:d=>{d.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>'},644:d=>{d.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>'},324:d=>{d.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>'},437:d=>{d.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z"></path></svg>'},897:(d,g,v)=>{var p=typeof self<"u"?self:typeof window<"u"?window:v.g!==void 0?v.g:{},m=Object.create(p),x=/["&'<>]/;function y(k){return typeof k!="string"&&(k=k==null?"":typeof k=="function"?y(k.call(k)):JSON.stringify(k)),k}m.$escape=function(k){return function(S){var A=""+S,T=x.exec(A);if(!T)return S;var V="",O=void 0,q=void 0,R=void 0;for(O=T.index,q=0;O<A.length;O++){switch(A.charCodeAt(O)){case 34:R="&#34;";break;case 38:R="&#38;";break;case 39:R="&#39;";break;case 60:R="&#60;";break;case 62:R="&#62;";break;default:continue}q!==O&&(V+=A.substring(q,O)),q=O+1,V+=R}return q!==O?V+A.substring(q,O):V}(y(k))},m.$each=function(k,S){if(Array.isArray(k))for(var A=0,T=k.length;A<T;A++)S(k[A],A);else for(var V in k)S(k[V],V)},d.exports=m},471:(d,g,v)=>{d.exports=v(897)},352:d=>{d.exports=function(g){var v=[];return v.toString=function(){return this.map(function(p){var m="",x=p[5]!==void 0;return p[4]&&(m+="@supports (".concat(p[4],") {")),p[2]&&(m+="@media ".concat(p[2]," {")),x&&(m+="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {")),m+=g(p),x&&(m+="}"),p[2]&&(m+="}"),p[4]&&(m+="}"),m}).join("")},v.i=function(p,m,x,y,k){typeof p=="string"&&(p=[[null,p,void 0]]);var S={};if(x)for(var A=0;A<this.length;A++){var T=this[A][0];T!=null&&(S[T]=!0)}for(var V=0;V<p.length;V++){var O=[].concat(p[V]);x&&S[O[0]]||(k!==void 0&&(O[5]===void 0||(O[1]="@layer".concat(O[5].length>0?" ".concat(O[5]):""," {").concat(O[1],"}")),O[5]=k),m&&(O[2]&&(O[1]="@media ".concat(O[2]," {").concat(O[1],"}")),O[2]=m),y&&(O[4]?(O[1]="@supports (".concat(O[4],") {").concat(O[1],"}"),O[4]=y):O[4]="".concat(y)),v.push(O))}},v}},80:d=>{d.exports=function(g,v){return v||(v={}),g&&(g=String(g.__esModule?g.default:g),/^['"].*['"]$/.test(g)&&(g=g.slice(1,-1)),v.hash&&(g+=v.hash),/["'() \t\n]|(%20)/.test(g)||v.needQuotes?'"'.concat(g.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):g)}},415:d=>{d.exports=function(g){var v=g[1],p=g[3];if(!p)return v;if(typeof btoa=="function"){var m=btoa(unescape(encodeURIComponent(JSON.stringify(p)))),x="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(m),y="/*# ".concat(x," */");return[v].concat([y]).join(`
`)}return[v].join(`
`)}},937:d=>{function g(v){return g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},g(v)}d.exports=(typeof self>"u"?"undefined":g(self))=="object"?self.FormData:window.FormData},831:d=>{d.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg=="}},l={};function o(d){var g=l[d];if(g!==void 0)return g.exports;var v=l[d]={id:d,exports:{}};return n[d](v,v.exports,o),v.exports}o.m=n,o.n=d=>{var g=d&&d.__esModule?()=>d.default:()=>d;return o.d(g,{a:g}),g},o.d=(d,g)=>{for(var v in g)o.o(g,v)&&!o.o(d,v)&&Object.defineProperty(d,v,{enumerable:!0,get:g[v]})},o.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),o.o=(d,g)=>Object.prototype.hasOwnProperty.call(d,g),o.b=document.baseURI||self.location.href,o.nc=void 0;var i={};return(()=>{o.d(i,{default:()=>hu});var d=o(856),g=o.n(d),v=o(470),p=o.n(v),m=o(370),x=o.n(m),y=o(458),k=o.n(y),S=o(278),A=o.n(S),T=o(488),V=o.n(T),O=o(685),q={};q.styleTagTransform=V(),q.setAttributes=k(),q.insert=x().bind(null,"head"),q.domAPI=p(),q.insertStyleElement=A(),g()(O.Z,q),O.Z&&O.Z.locals&&O.Z.locals;function R(a){return R=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},R(a)}function F(a,s){this.name="AggregateError",this.errors=a,this.message=s||""}F.prototype=Error.prototype;function C(a){return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},C(a)}var N=setTimeout;function z(a){return!!(a&&a.length!==void 0)}function X(){}function H(a){if(!(this instanceof H))throw new TypeError("Promises must be constructed via new");if(typeof a!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],te(a,this)}function oe(a,s){for(;a._state===3;)a=a._value;a._state!==0?(a._handled=!0,H._immediateFn(function(){var h=a._state===1?s.onFulfilled:s.onRejected;if(h!==null){var r;try{r=h(a._value)}catch(u){return void pe(s.promise,u)}ye(s.promise,r)}else(a._state===1?ye:pe)(s.promise,a._value)})):a._deferreds.push(s)}function ye(a,s){try{if(s===a)throw new TypeError("A promise cannot be resolved with itself.");if(s&&(C(s)==="object"||typeof s=="function")){var h=s.then;if(s instanceof H)return a._state=3,a._value=s,void se(a);if(typeof h=="function")return void te((r=h,u=s,function(){r.apply(u,arguments)}),a)}a._state=1,a._value=s,se(a)}catch(c){pe(a,c)}var r,u}function pe(a,s){a._state=2,a._value=s,se(a)}function se(a){a._state===2&&a._deferreds.length===0&&H._immediateFn(function(){a._handled||H._unhandledRejectionFn(a._value)});for(var s=0,h=a._deferreds.length;s<h;s++)oe(a,a._deferreds[s]);a._deferreds=null}function J(a,s,h){this.onFulfilled=typeof a=="function"?a:null,this.onRejected=typeof s=="function"?s:null,this.promise=h}function te(a,s){var h=!1;try{a(function(r){h||(h=!0,ye(s,r))},function(r){h||(h=!0,pe(s,r))})}catch(r){if(h)return;h=!0,pe(s,r)}}H.prototype.catch=function(a){return this.then(null,a)},H.prototype.then=function(a,s){var h=new this.constructor(X);return oe(this,new J(a,s,h)),h},H.prototype.finally=function(a){var s=this.constructor;return this.then(function(h){return s.resolve(a()).then(function(){return h})},function(h){return s.resolve(a()).then(function(){return s.reject(h)})})},H.all=function(a){return new H(function(s,h){if(!z(a))return h(new TypeError("Promise.all accepts an array"));var r=Array.prototype.slice.call(a);if(r.length===0)return s([]);var u=r.length;function c(w,E){try{if(E&&(C(E)==="object"||typeof E=="function")){var D=E.then;if(typeof D=="function")return void D.call(E,function(M){c(w,M)},h)}r[w]=E,--u==0&&s(r)}catch(M){h(M)}}for(var f=0;f<r.length;f++)c(f,r[f])})},H.any=function(a){var s=this;return new s(function(h,r){if(!a||a.length===void 0)return r(new TypeError("Promise.any accepts an array"));var u=Array.prototype.slice.call(a);if(u.length===0)return r();for(var c=[],f=0;f<u.length;f++)try{s.resolve(u[f]).then(h).catch(function(w){c.push(w),c.length===u.length&&r(new F(c,"All promises were rejected"))})}catch(w){r(w)}})},H.allSettled=function(a){return new this(function(s,h){if(!a||a.length===void 0)return h(new TypeError(R(a)+" "+a+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var r=Array.prototype.slice.call(a);if(r.length===0)return s([]);var u=r.length;function c(w,E){if(E&&(R(E)==="object"||typeof E=="function")){var D=E.then;if(typeof D=="function")return void D.call(E,function(M){c(w,M)},function(M){r[w]={status:"rejected",reason:M},--u==0&&s(r)})}r[w]={status:"fulfilled",value:E},--u==0&&s(r)}for(var f=0;f<r.length;f++)c(f,r[f])})},H.resolve=function(a){return a&&C(a)==="object"&&a.constructor===H?a:new H(function(s){s(a)})},H.reject=function(a){return new H(function(s,h){h(a)})},H.race=function(a){return new H(function(s,h){if(!z(a))return h(new TypeError("Promise.race accepts an array"));for(var r=0,u=a.length;r<u;r++)H.resolve(a[r]).then(s,h)})},H._immediateFn=typeof setImmediate=="function"&&function(a){setImmediate(a)}||function(a){N(a,0)},H._unhandledRejectionFn=function(a){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",a)};const Z=H;var Y=/mobile/i.test(window.navigator.userAgent);const W={secondToTime:function(a){if((a=a||0)===0||a===1/0||a.toString()==="NaN")return"00:00";var s=Math.floor(a/3600),h=Math.floor((a-3600*s)/60),r=Math.floor(a-3600*s-60*h);return(s>0?[s,h,r]:[h,r]).map(function(u){return u<10?"0"+u:""+u}).join(":")},getElementViewLeft:function(a){var s=a.offsetLeft,h=a.offsetParent,r=document.body.scrollLeft+document.documentElement.scrollLeft;if(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)for(;h!==null&&h!==a;)s+=h.offsetLeft,h=h.offsetParent;else for(;h!==null;)s+=h.offsetLeft,h=h.offsetParent;return s-r},getBoundingClientRectViewLeft:function(a){var s=window.scrollY||window.pageYOffset||document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0);if(a.getBoundingClientRect){if(typeof this.getBoundingClientRectViewLeft.offset!="number"){var h=document.createElement("div");h.style.cssText="position:absolute;top:0;left:0;",document.body.appendChild(h),this.getBoundingClientRectViewLeft.offset=-h.getBoundingClientRect().top-s,document.body.removeChild(h),h=null}var r=a.getBoundingClientRect(),u=this.getBoundingClientRectViewLeft.offset;return r.left+u}return this.getElementViewLeft(a)},getScrollPosition:function(){return{left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}},setScrollPosition:function(a){var s=a.left,h=s===void 0?0:s,r=a.top,u=r===void 0?0:r;this.isFirefox?(document.documentElement.scrollLeft=h,document.documentElement.scrollTop=u):window.scrollTo(h,u)},isMobile:Y,isFirefox:/firefox/i.test(window.navigator.userAgent),isChrome:/chrome/i.test(window.navigator.userAgent),isSafari:/safari/i.test(window.navigator.userAgent),storage:{set:function(a,s){localStorage.setItem(a,s)},get:function(a){return localStorage.getItem(a)}},nameMap:{dragStart:Y?"touchstart":"mousedown",dragMove:Y?"touchmove":"mousemove",dragEnd:Y?"touchend":"mouseup"},color2Number:function(a){return a[0]==="#"&&(a=a.substr(1)),a.length===3&&(a="".concat(a[0]).concat(a[0]).concat(a[1]).concat(a[1]).concat(a[2]).concat(a[2])),parseInt(a,16)+0&16777215},number2Color:function(a){return"#"+("00000"+a.toString(16)).slice(-6)},number2Type:function(a){switch(a){case 0:default:return"right";case 1:return"top";case 2:return"bottom"}}};function ge(a,s){return function(){return a.apply(s,arguments)}}function Se(a){return Se=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Se(a)}var De,Me=Object.prototype.toString,Ne=Object.getPrototypeOf,qe=(De=Object.create(null),function(a){var s=Me.call(a);return De[s]||(De[s]=s.slice(8,-1).toLowerCase())}),Ve=function(a){return a=a.toLowerCase(),function(s){return qe(s)===a}},ze=function(a){return function(s){return Se(s)===a}},Ae=Array.isArray,_e=ze("undefined"),K=Ve("ArrayBuffer"),be=ze("string"),Le=ze("function"),nt=ze("number"),gt=function(a){return a!==null&&Se(a)==="object"},Lt=function(a){if(qe(a)!=="object")return!1;var s=Ne(a);return!(s!==null&&s!==Object.prototype&&Object.getPrototypeOf(s)!==null||Symbol.toStringTag in a||Symbol.iterator in a)},Jt=Ve("Date"),ft=Ve("File"),Fe=Ve("Blob"),ht=Ve("FileList"),Dt=Ve("URLSearchParams");function mt(a,s){var h,r,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},c=u.allOwnKeys,f=c!==void 0&&c;if(a!=null)if(Se(a)!=="object"&&(a=[a]),Ae(a))for(h=0,r=a.length;h<r;h++)s.call(null,a[h],h,a);else{var w,E=f?Object.getOwnPropertyNames(a):Object.keys(a),D=E.length;for(h=0;h<D;h++)w=E[h],s.call(null,a[w],w,a)}}function Ct(a,s){s=s.toLowerCase();for(var h,r=Object.keys(a),u=r.length;u-- >0;)if(s===(h=r[u]).toLowerCase())return h;return null}var qt,wn,tn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Kn,xn=function(a){return!_e(a)&&a!==tn},En=(qt=typeof Uint8Array<"u"&&Ne(Uint8Array),function(a){return qt&&a instanceof qt}),Pn=Ve("HTMLFormElement"),rt=(wn=Object.prototype.hasOwnProperty,function(a,s){return wn.call(a,s)}),kt=Ve("RegExp"),Ot=function(a,s){var h=Object.getOwnPropertyDescriptors(a),r={};mt(h,function(u,c){s(u,c,a)!==!1&&(r[c]=u)}),Object.defineProperties(a,r)};const P={isArray:Ae,isArrayBuffer:K,isBuffer:function(a){return a!==null&&!_e(a)&&a.constructor!==null&&!_e(a.constructor)&&Le(a.constructor.isBuffer)&&a.constructor.isBuffer(a)},isFormData:function(a){var s="[object FormData]";return a&&(typeof FormData=="function"&&a instanceof FormData||Me.call(a)===s||Le(a.toString)&&a.toString()===s)},isArrayBufferView:function(a){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(a):a&&a.buffer&&K(a.buffer)},isString:be,isNumber:nt,isBoolean:function(a){return a===!0||a===!1},isObject:gt,isPlainObject:Lt,isUndefined:_e,isDate:Jt,isFile:ft,isBlob:Fe,isRegExp:kt,isFunction:Le,isStream:function(a){return gt(a)&&Le(a.pipe)},isURLSearchParams:Dt,isTypedArray:En,isFileList:ht,forEach:mt,merge:function a(){for(var s=xn(this)&&this||{},h=s.caseless,r={},u=function(w,E){var D=h&&Ct(r,E)||E;Lt(r[D])&&Lt(w)?r[D]=a(r[D],w):Lt(w)?r[D]=a({},w):Ae(w)?r[D]=w.slice():r[D]=w},c=0,f=arguments.length;c<f;c++)arguments[c]&&mt(arguments[c],u);return r},extend:function(a,s,h){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},u=r.allOwnKeys;return mt(s,function(c,f){h&&Le(c)?a[f]=ge(c,h):a[f]=c},{allOwnKeys:u}),a},trim:function(a){return a.trim?a.trim():a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},stripBOM:function(a){return a.charCodeAt(0)===65279&&(a=a.slice(1)),a},inherits:function(a,s,h,r){a.prototype=Object.create(s.prototype,r),a.prototype.constructor=a,Object.defineProperty(a,"super",{value:s.prototype}),h&&Object.assign(a.prototype,h)},toFlatObject:function(a,s,h,r){var u,c,f,w={};if(s=s||{},a==null)return s;do{for(c=(u=Object.getOwnPropertyNames(a)).length;c-- >0;)f=u[c],r&&!r(f,a,s)||w[f]||(s[f]=a[f],w[f]=!0);a=h!==!1&&Ne(a)}while(a&&(!h||h(a,s))&&a!==Object.prototype);return s},kindOf:qe,kindOfTest:Ve,endsWith:function(a,s,h){a=String(a),(h===void 0||h>a.length)&&(h=a.length),h-=s.length;var r=a.indexOf(s,h);return r!==-1&&r===h},toArray:function(a){if(!a)return null;if(Ae(a))return a;var s=a.length;if(!nt(s))return null;for(var h=new Array(s);s-- >0;)h[s]=a[s];return h},forEachEntry:function(a,s){for(var h,r=(a&&a[Symbol.iterator]).call(a);(h=r.next())&&!h.done;){var u=h.value;s.call(a,u[0],u[1])}},matchAll:function(a,s){for(var h,r=[];(h=a.exec(s))!==null;)r.push(h);return r},isHTMLForm:Pn,hasOwnProperty:rt,hasOwnProp:rt,reduceDescriptors:Ot,freezeMethods:function(a){Ot(a,function(s,h){if(Le(a)&&["arguments","caller","callee"].indexOf(h)!==-1)return!1;var r=a[h];Le(r)&&(s.enumerable=!1,"writable"in s?s.writable=!1:s.set||(s.set=function(){throw Error("Can not rewrite read-only method '"+h+"'")}))})},toObjectSet:function(a,s){var h={},r=function(u){u.forEach(function(c){h[c]=!0})};return Ae(a)?r(a):r(String(a).split(s)),h},toCamelCase:function(a){return a.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(s,h,r){return h.toUpperCase()+r})},noop:function(){},toFiniteNumber:function(a,s){return a=+a,Number.isFinite(a)?a:s},findKey:Ct,global:tn,isContextDefined:xn,toJSONObject:function(a){var s=new Array(10);return function h(r,u){if(gt(r)){if(s.indexOf(r)>=0)return;if(!("toJSON"in r)){s[u]=r;var c=Ae(r)?[]:{};return mt(r,function(f,w){var E=h(f,u+1);!_e(E)&&(c[w]=E)}),s[u]=void 0,c}}return r}(a,0)}};function Ft(a,s,h,r,u){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=a,this.name="AxiosError",s&&(this.code=s),h&&(this.config=h),r&&(this.request=r),u&&(this.response=u)}P.inherits(Ft,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:P.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var nn=Ft.prototype,Vn={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(function(a){Vn[a]={value:a}}),Object.defineProperties(Ft,Vn),Object.defineProperty(nn,"isAxiosError",{value:!0}),Ft.from=function(a,s,h,r,u,c){var f=Object.create(nn);return P.toFlatObject(a,f,function(w){return w!==Error.prototype},function(w){return w!=="isAxiosError"}),Ft.call(f,a.message,s,h,r,u),f.cause=a,f.name=a.name,c&&Object.assign(f,c),f};const Pe=Ft,ar=o(937);function or(a){return or=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},or(a)}function lr(a){return P.isPlainObject(a)||P.isArray(a)}function Qr(a){return P.endsWith(a,"[]")?a.slice(0,-2):a}function Yr(a,s,h){return a?a.concat(s).map(function(r,u){return r=Qr(r),!h&&u?"["+r+"]":r}).join(h?".":""):s}var Mi=P.toFlatObject(P,{},null,function(a){return/^is[A-Z]/.test(a)});const Rn=function(a,s,h){if(!P.isObject(a))throw new TypeError("target must be an object");s=s||new(ar||FormData);var r,u=(h=P.toFlatObject(h,{metaTokens:!0,dots:!1,indexes:!1},!1,function(ce,ue){return!P.isUndefined(ue[ce])})).metaTokens,c=h.visitor||M,f=h.dots,w=h.indexes,E=(h.Blob||typeof Blob<"u"&&Blob)&&(r=s)&&P.isFunction(r.append)&&r[Symbol.toStringTag]==="FormData"&&r[Symbol.iterator];if(!P.isFunction(c))throw new TypeError("visitor must be a function");function D(ce){if(ce===null)return"";if(P.isDate(ce))return ce.toISOString();if(!E&&P.isBlob(ce))throw new Pe("Blob is not supported. Use a Buffer instead.");return P.isArrayBuffer(ce)||P.isTypedArray(ce)?E&&typeof Blob=="function"?new Blob([ce]):Buffer.from(ce):ce}function M(ce,ue,re){var fe=ce;if(ce&&!re&&or(ce)==="object"){if(P.endsWith(ue,"{}"))ue=u?ue:ue.slice(0,-2),ce=JSON.stringify(ce);else if(P.isArray(ce)&&function(xe){return P.isArray(xe)&&!xe.some(lr)}(ce)||P.isFileList(ce)||P.endsWith(ue,"[]")&&(fe=P.toArray(ce)))return ue=Qr(ue),fe.forEach(function(xe,pt){!P.isUndefined(xe)&&xe!==null&&s.append(w===!0?Yr([ue],pt,f):w===null?ue:ue+"[]",D(xe))}),!1}return!!lr(ce)||(s.append(Yr(re,ue,f),D(ce)),!1)}var ne=[],de=Object.assign(Mi,{defaultVisitor:M,convertValue:D,isVisitable:lr});if(!P.isObject(a))throw new TypeError("data must be an object");return function ce(ue,re){if(!P.isUndefined(ue)){if(ne.indexOf(ue)!==-1)throw Error("Circular reference detected in "+re.join("."));ne.push(ue),P.forEach(ue,function(fe,xe){(!(P.isUndefined(fe)||fe===null)&&c.call(s,fe,P.isString(xe)?xe.trim():xe,re,de))===!0&&ce(fe,re?re.concat(xe):[xe])}),ne.pop()}}(a),s};function Kr(a){var s={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(a).replace(/[!'()~]|%20|%00/g,function(h){return s[h]})}function Cn(a,s){this._pairs=[],a&&Rn(a,this,s)}var b=Cn.prototype;b.append=function(a,s){this._pairs.push([a,s])},b.toString=function(a){var s=a?function(h){return a.call(this,h,Kr)}:Kr;return this._pairs.map(function(h){return s(h[0])+"="+s(h[1])},"").join("&")};const B=Cn;function I(a){return encodeURIComponent(a).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function L(a,s,h){if(!s)return a;var r,u=h&&h.encode||I,c=h&&h.serialize;if(r=c?c(s,h):P.isURLSearchParams(s)?s.toString():new B(s,h).toString(u)){var f=a.indexOf("#");f!==-1&&(a=a.slice(0,f)),a+=(a.indexOf("?")===-1?"?":"&")+r}return a}function $(a){return $=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},$(a)}function _(a,s){for(var h=0;h<s.length;h++){var r=s[h];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,(u=function(c,f){if($(c)!=="object"||c===null)return c;var w=c[Symbol.toPrimitive];if(w!==void 0){var E=w.call(c,"string");if($(E)!=="object")return E;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(r.key),$(u)==="symbol"?u:String(u)),r)}var u}var Q=function(){function a(){(function(r,u){if(!(r instanceof u))throw new TypeError("Cannot call a class as a function")})(this,a),this.handlers=[]}var s,h;return s=a,h=[{key:"use",value:function(r,u,c){return this.handlers.push({fulfilled:r,rejected:u,synchronous:!!c&&c.synchronous,runWhen:c?c.runWhen:null}),this.handlers.length-1}},{key:"eject",value:function(r){this.handlers[r]&&(this.handlers[r]=null)}},{key:"clear",value:function(){this.handlers&&(this.handlers=[])}},{key:"forEach",value:function(r){P.forEach(this.handlers,function(u){u!==null&&r(u)})}}],h&&_(s.prototype,h),Object.defineProperty(s,"prototype",{writable:!1}),a}();const ee=Q,le={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},me=typeof URLSearchParams<"u"?URLSearchParams:B,ve=FormData;var he,Ie=(typeof navigator>"u"||(he=navigator.product)!=="ReactNative"&&he!=="NativeScript"&&he!=="NS")&&typeof window<"u"&&typeof document<"u",ke=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function";const we={classes:{URLSearchParams:me,FormData:ve,Blob},isStandardBrowserEnv:Ie,isStandardBrowserWebWorkerEnv:ke,protocols:["http","https","file","blob","url","data"]},Je=function(a){function s(r,u,c,f){var w=r[f++],E=Number.isFinite(+w),D=f>=r.length;return w=!w&&P.isArray(c)?c.length:w,D?(P.hasOwnProp(c,w)?c[w]=[c[w],u]:c[w]=u,!E):(c[w]&&P.isObject(c[w])||(c[w]=[]),s(r,u,c[w],f)&&P.isArray(c[w])&&(c[w]=function(M){var ne,de,ce={},ue=Object.keys(M),re=ue.length;for(ne=0;ne<re;ne++)ce[de=ue[ne]]=M[de];return ce}(c[w])),!E)}if(P.isFormData(a)&&P.isFunction(a.entries)){var h={};return P.forEachEntry(a,function(r,u){s(function(c){return P.matchAll(/\w+|\[(\w*)]/g,c).map(function(f){return f[0]==="[]"?"":f[1]||f[0]})}(r),u,h,0)}),h}return null};var Wt={"Content-Type":void 0},zt={transitional:le,adapter:["xhr","http"],transformRequest:[function(a,s){var h,r=s.getContentType()||"",u=r.indexOf("application/json")>-1,c=P.isObject(a);if(c&&P.isHTMLForm(a)&&(a=new FormData(a)),P.isFormData(a))return u&&u?JSON.stringify(Je(a)):a;if(P.isArrayBuffer(a)||P.isBuffer(a)||P.isStream(a)||P.isFile(a)||P.isBlob(a))return a;if(P.isArrayBufferView(a))return a.buffer;if(P.isURLSearchParams(a))return s.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),a.toString();if(c){if(r.indexOf("application/x-www-form-urlencoded")>-1)return function(w,E){return Rn(w,new we.classes.URLSearchParams,Object.assign({visitor:function(D,M,ne,de){return we.isNode&&P.isBuffer(D)?(this.append(M,D.toString("base64")),!1):de.defaultVisitor.apply(this,arguments)}},E))}(a,this.formSerializer).toString();if((h=P.isFileList(a))||r.indexOf("multipart/form-data")>-1){var f=this.env&&this.env.FormData;return Rn(h?{"files[]":a}:a,f&&new f,this.formSerializer)}}return c||u?(s.setContentType("application/json",!1),function(w,E,D){if(P.isString(w))try{return(0,JSON.parse)(w),P.trim(w)}catch(M){if(M.name!=="SyntaxError")throw M}return(0,JSON.stringify)(w)}(a)):a}],transformResponse:[function(a){var s=this.transitional||zt.transitional,h=s&&s.forcedJSONParsing,r=this.responseType==="json";if(a&&P.isString(a)&&(h&&!this.responseType||r)){var u=!(s&&s.silentJSONParsing)&&r;try{return JSON.parse(a)}catch(c){if(u)throw c.name==="SyntaxError"?Pe.from(c,Pe.ERR_BAD_RESPONSE,this,null,this.response):c}}return a}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:we.classes.FormData,Blob:we.classes.Blob},validateStatus:function(a){return a>=200&&a<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};P.forEach(["delete","get","head"],function(a){zt.headers[a]={}}),P.forEach(["post","put","patch"],function(a){zt.headers[a]=P.merge(Wt)});const bt=zt;var rn=P.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);function kn(a){return kn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},kn(a)}function sr(a,s){(s==null||s>a.length)&&(s=a.length);for(var h=0,r=new Array(s);h<s;h++)r[h]=a[h];return r}function Ka(a,s){for(var h=0;h<s.length;h++){var r=s[h];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,(u=function(c,f){if(kn(c)!=="object"||c===null)return c;var w=c[Symbol.toPrimitive];if(w!==void 0){var E=w.call(c,"string");if(kn(E)!=="object")return E;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(r.key),kn(u)==="symbol"?u:String(u)),r)}var u}var Xa=Symbol("internals");function dr(a){return a&&String(a).trim().toLowerCase()}function Xr(a){return a===!1||a==null?a:P.isArray(a)?a.map(Xr):String(a)}function Ga(a,s,h,r){return P.isFunction(r)?r.call(this,s,h):P.isString(s)?P.isString(r)?s.indexOf(r)!==-1:P.isRegExp(r)?r.test(s):void 0:void 0}var Gr=function(a,s){function h(f){(function(w,E){if(!(w instanceof E))throw new TypeError("Cannot call a class as a function")})(this,h),f&&this.set(f)}var r,u,c;return r=h,u=[{key:"set",value:function(f,w,E){var D=this;function M(xe,pt,st){var Ue=dr(pt);if(!Ue)throw new Error("header name must be a non-empty string");var fn=P.findKey(D,Ue);(!fn||D[fn]===void 0||st===!0||st===void 0&&D[fn]!==!1)&&(D[fn||pt]=Xr(xe))}var ne,de,ce,ue,re,fe=function(xe,pt){return P.forEach(xe,function(st,Ue){return M(st,Ue,pt)})};return P.isPlainObject(f)||f instanceof this.constructor?fe(f,w):P.isString(f)&&(f=f.trim())&&!/^[-_a-zA-Z]+$/.test(f.trim())?fe((re={},(ne=f)&&ne.split(`
`).forEach(function(xe){ue=xe.indexOf(":"),de=xe.substring(0,ue).trim().toLowerCase(),ce=xe.substring(ue+1).trim(),!de||re[de]&&rn[de]||(de==="set-cookie"?re[de]?re[de].push(ce):re[de]=[ce]:re[de]=re[de]?re[de]+", "+ce:ce)}),re),w):f!=null&&M(w,f,E),this}},{key:"get",value:function(f,w){if(f=dr(f)){var E=P.findKey(this,f);if(E){var D=this[E];if(!w)return D;if(w===!0)return function(M){for(var ne,de=Object.create(null),ce=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;ne=ce.exec(M);)de[ne[1]]=ne[2];return de}(D);if(P.isFunction(w))return w.call(this,D,E);if(P.isRegExp(w))return w.exec(D);throw new TypeError("parser must be boolean|regexp|function")}}}},{key:"has",value:function(f,w){if(f=dr(f)){var E=P.findKey(this,f);return!(!E||w&&!Ga(0,this[E],E,w))}return!1}},{key:"delete",value:function(f,w){var E=this,D=!1;function M(ne){if(ne=dr(ne)){var de=P.findKey(E,ne);!de||w&&!Ga(0,E[de],de,w)||(delete E[de],D=!0)}}return P.isArray(f)?f.forEach(M):M(f),D}},{key:"clear",value:function(){return Object.keys(this).forEach(this.delete.bind(this))}},{key:"normalize",value:function(f){var w=this,E={};return P.forEach(this,function(D,M){var ne=P.findKey(E,M);if(ne)return w[ne]=Xr(D),void delete w[M];var de=f?function(ce){return ce.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,function(ue,re,fe){return re.toUpperCase()+fe})}(M):String(M).trim();de!==M&&delete w[M],w[de]=Xr(D),E[de]=!0}),this}},{key:"concat",value:function(){for(var f,w=arguments.length,E=new Array(w),D=0;D<w;D++)E[D]=arguments[D];return(f=this.constructor).concat.apply(f,[this].concat(E))}},{key:"toJSON",value:function(f){var w=Object.create(null);return P.forEach(this,function(E,D){E!=null&&E!==!1&&(w[D]=f&&P.isArray(E)?E.join(", "):E)}),w}},{key:Symbol.iterator,value:function(){return Object.entries(this.toJSON())[Symbol.iterator]()}},{key:"toString",value:function(){return Object.entries(this.toJSON()).map(function(f){var w,E,D=(E=2,function(M){if(Array.isArray(M))return M}(w=f)||function(M,ne){var de=M==null?null:typeof Symbol<"u"&&M[Symbol.iterator]||M["@@iterator"];if(de!=null){var ce,ue,re,fe,xe=[],pt=!0,st=!1;try{if(re=(de=de.call(M)).next,ne===0){if(Object(de)!==de)return;pt=!1}else for(;!(pt=(ce=re.call(de)).done)&&(xe.push(ce.value),xe.length!==ne);pt=!0);}catch(Ue){st=!0,ue=Ue}finally{try{if(!pt&&de.return!=null&&(fe=de.return(),Object(fe)!==fe))return}finally{if(st)throw ue}}return xe}}(w,E)||function(M,ne){if(M){if(typeof M=="string")return sr(M,ne);var de=Object.prototype.toString.call(M).slice(8,-1);return de==="Object"&&M.constructor&&(de=M.constructor.name),de==="Map"||de==="Set"?Array.from(M):de==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(de)?sr(M,ne):void 0}}(w,E)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}());return D[0]+": "+D[1]}).join(`
`)}},{key:Symbol.toStringTag,get:function(){return"AxiosHeaders"}}],c=[{key:"from",value:function(f){return f instanceof this?f:new this(f)}},{key:"concat",value:function(f){for(var w=new this(f),E=arguments.length,D=new Array(E>1?E-1:0),M=1;M<E;M++)D[M-1]=arguments[M];return D.forEach(function(ne){return w.set(ne)}),w}},{key:"accessor",value:function(f){var w=(this[Xa]=this[Xa]={accessors:{}}).accessors,E=this.prototype;function D(M){var ne=dr(M);w[ne]||(function(de,ce){var ue=P.toCamelCase(" "+ce);["get","set","has"].forEach(function(re){Object.defineProperty(de,re+ue,{value:function(fe,xe,pt){return this[re].call(this,ce,fe,xe,pt)},configurable:!0})})}(E,M),w[ne]=!0)}return P.isArray(f)?f.forEach(D):D(f),this}}],u&&Ka(r.prototype,u),c&&Ka(r,c),Object.defineProperty(r,"prototype",{writable:!1}),h}();Gr.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),P.freezeMethods(Gr.prototype),P.freezeMethods(Gr);const an=Gr;function Ni(a,s){var h=this||bt,r=s||h,u=an.from(r.headers),c=r.data;return P.forEach(a,function(f){c=f.call(h,c,u.normalize(),s?s.status:void 0)}),u.normalize(),c}function Ja(a){return!(!a||!a.__CANCEL__)}function Za(a,s,h){Pe.call(this,a??"canceled",Pe.ERR_CANCELED,s,h),this.name="CanceledError"}P.inherits(Za,Pe,{__CANCEL__:!0});const Jr=Za,Es=we.isStandardBrowserEnv?{write:function(a,s,h,r,u,c){var f=[];f.push(a+"="+encodeURIComponent(s)),P.isNumber(h)&&f.push("expires="+new Date(h).toGMTString()),P.isString(r)&&f.push("path="+r),P.isString(u)&&f.push("domain="+u),c===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(a){var s=document.cookie.match(new RegExp("(^|;\\s*)("+a+")=([^;]*)"));return s?decodeURIComponent(s[3]):null},remove:function(a){this.write(a,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function eo(a,s){return a&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(s)?function(h,r){return r?h.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):h}(a,s):s}const Cs=we.isStandardBrowserEnv?function(){var a,s=/(msie|trident)/i.test(navigator.userAgent),h=document.createElement("a");function r(u){var c=u;return s&&(h.setAttribute("href",c),c=h.href),h.setAttribute("href",c),{href:h.href,protocol:h.protocol?h.protocol.replace(/:$/,""):"",host:h.host,search:h.search?h.search.replace(/^\?/,""):"",hash:h.hash?h.hash.replace(/^#/,""):"",hostname:h.hostname,port:h.port,pathname:h.pathname.charAt(0)==="/"?h.pathname:"/"+h.pathname}}return a=r(window.location.href),function(u){var c=P.isString(u)?r(u):u;return c.protocol===a.protocol&&c.host===a.host}}():function(){return!0};function to(a,s){var h=0,r=function(u,c){u=u||10;var f,w=new Array(u),E=new Array(u),D=0,M=0;return c=c!==void 0?c:1e3,function(ne){var de=Date.now(),ce=E[M];f||(f=de),w[D]=ne,E[D]=de;for(var ue=M,re=0;ue!==D;)re+=w[ue++],ue%=u;if((D=(D+1)%u)===M&&(M=(M+1)%u),!(de-f<c)){var fe=ce&&de-ce;return fe?Math.round(1e3*re/fe):void 0}}}(50,250);return function(u){var c=u.loaded,f=u.lengthComputable?u.total:void 0,w=c-h,E=r(w);h=c;var D={loaded:c,total:f,progress:f?c/f:void 0,bytes:w,rate:E||void 0,estimated:E&&f&&c<=f?(f-c)/E:void 0,event:u};D[s?"download":"upload"]=!0,a(D)}}var Pi={http:null,xhr:typeof XMLHttpRequest<"u"&&function(a){return new Promise(function(s,h){var r,u=a.data,c=an.from(a.headers).normalize(),f=a.responseType;function w(){a.cancelToken&&a.cancelToken.unsubscribe(r),a.signal&&a.signal.removeEventListener("abort",r)}P.isFormData(u)&&(we.isStandardBrowserEnv||we.isStandardBrowserWebWorkerEnv)&&c.setContentType(!1);var E=new XMLHttpRequest;if(a.auth){var D=a.auth.username||"",M=a.auth.password?unescape(encodeURIComponent(a.auth.password)):"";c.set("Authorization","Basic "+btoa(D+":"+M))}var ne=eo(a.baseURL,a.url);function de(){if(E){var fe=an.from("getAllResponseHeaders"in E&&E.getAllResponseHeaders());(function(xe,pt,st){var Ue=st.config.validateStatus;st.status&&Ue&&!Ue(st.status)?pt(new Pe("Request failed with status code "+st.status,[Pe.ERR_BAD_REQUEST,Pe.ERR_BAD_RESPONSE][Math.floor(st.status/100)-4],st.config,st.request,st)):xe(st)})(function(xe){s(xe),w()},function(xe){h(xe),w()},{data:f&&f!=="text"&&f!=="json"?E.response:E.responseText,status:E.status,statusText:E.statusText,headers:fe,config:a,request:E}),E=null}}if(E.open(a.method.toUpperCase(),L(ne,a.params,a.paramsSerializer),!0),E.timeout=a.timeout,"onloadend"in E?E.onloadend=de:E.onreadystatechange=function(){E&&E.readyState===4&&(E.status!==0||E.responseURL&&E.responseURL.indexOf("file:")===0)&&setTimeout(de)},E.onabort=function(){E&&(h(new Pe("Request aborted",Pe.ECONNABORTED,a,E)),E=null)},E.onerror=function(){h(new Pe("Network Error",Pe.ERR_NETWORK,a,E)),E=null},E.ontimeout=function(){var fe=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded",xe=a.transitional||le;a.timeoutErrorMessage&&(fe=a.timeoutErrorMessage),h(new Pe(fe,xe.clarifyTimeoutError?Pe.ETIMEDOUT:Pe.ECONNABORTED,a,E)),E=null},we.isStandardBrowserEnv){var ce=(a.withCredentials||Cs(ne))&&a.xsrfCookieName&&Es.read(a.xsrfCookieName);ce&&c.set(a.xsrfHeaderName,ce)}u===void 0&&c.setContentType(null),"setRequestHeader"in E&&P.forEach(c.toJSON(),function(fe,xe){E.setRequestHeader(xe,fe)}),P.isUndefined(a.withCredentials)||(E.withCredentials=!!a.withCredentials),f&&f!=="json"&&(E.responseType=a.responseType),typeof a.onDownloadProgress=="function"&&E.addEventListener("progress",to(a.onDownloadProgress,!0)),typeof a.onUploadProgress=="function"&&E.upload&&E.upload.addEventListener("progress",to(a.onUploadProgress)),(a.cancelToken||a.signal)&&(r=function(fe){E&&(h(!fe||fe.type?new Jr(null,a,E):fe),E.abort(),E=null)},a.cancelToken&&a.cancelToken.subscribe(r),a.signal&&(a.signal.aborted?r():a.signal.addEventListener("abort",r)));var ue,re=(ue=/^([-+\w]{1,25})(:?\/\/|:)/.exec(ne))&&ue[1]||"";re&&we.protocols.indexOf(re)===-1?h(new Pe("Unsupported protocol "+re+":",Pe.ERR_BAD_REQUEST,a)):E.send(u||null)})}};P.forEach(Pi,function(a,s){if(a){try{Object.defineProperty(a,"name",{value:s})}catch{}Object.defineProperty(a,"adapterName",{value:s})}});function Vi(a){if(a.cancelToken&&a.cancelToken.throwIfRequested(),a.signal&&a.signal.aborted)throw new Jr(null,a)}function no(a){return Vi(a),a.headers=an.from(a.headers),a.data=Ni.call(a,a.transformRequest),["post","put","patch"].indexOf(a.method)!==-1&&a.headers.setContentType("application/x-www-form-urlencoded",!1),function(s){for(var h,r,u=(s=P.isArray(s)?s:[s]).length,c=0;c<u&&(h=s[c],!(r=P.isString(h)?Pi[h.toLowerCase()]:h));c++);if(!r)throw r===!1?new Pe("Adapter ".concat(h," is not supported by the environment"),"ERR_NOT_SUPPORT"):new Error(P.hasOwnProp(Pi,h)?"Adapter '".concat(h,"' is not available in the build"):"Unknown adapter '".concat(h,"'"));if(!P.isFunction(r))throw new TypeError("adapter is not a function");return r}(a.adapter||bt.adapter)(a).then(function(s){return Vi(a),s.data=Ni.call(a,a.transformResponse,s),s.headers=an.from(s.headers),s},function(s){return Ja(s)||(Vi(a),s&&s.response&&(s.response.data=Ni.call(a,a.transformResponse,s.response),s.response.headers=an.from(s.response.headers))),Promise.reject(s)})}var ro=function(a){return a instanceof an?a.toJSON():a};function qn(a,s){s=s||{};var h={};function r(D,M,ne){return P.isPlainObject(D)&&P.isPlainObject(M)?P.merge.call({caseless:ne},D,M):P.isPlainObject(M)?P.merge({},M):P.isArray(M)?M.slice():M}function u(D,M,ne){return P.isUndefined(M)?P.isUndefined(D)?void 0:r(void 0,D,ne):r(D,M,ne)}function c(D,M){if(!P.isUndefined(M))return r(void 0,M)}function f(D,M){return P.isUndefined(M)?P.isUndefined(D)?void 0:r(void 0,D):r(void 0,M)}function w(D,M,ne){return ne in s?r(D,M):ne in a?r(void 0,D):void 0}var E={url:c,method:c,data:c,baseURL:f,transformRequest:f,transformResponse:f,paramsSerializer:f,timeout:f,timeoutMessage:f,withCredentials:f,adapter:f,responseType:f,xsrfCookieName:f,xsrfHeaderName:f,onUploadProgress:f,onDownloadProgress:f,decompress:f,maxContentLength:f,maxBodyLength:f,beforeRedirect:f,transport:f,httpAgent:f,httpsAgent:f,cancelToken:f,socketPath:f,responseEncoding:f,validateStatus:w,headers:function(D,M){return u(ro(D),ro(M),!0)}};return P.forEach(Object.keys(a).concat(Object.keys(s)),function(D){var M=E[D]||u,ne=M(a[D],s[D],D);P.isUndefined(ne)&&M!==w||(h[D]=ne)}),h}function Zr(a){return Zr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Zr(a)}var Ri={};["object","boolean","number","function","string","symbol"].forEach(function(a,s){Ri[a]=function(h){return Zr(h)===a||"a"+(s<1?"n ":" ")+a}});var io={};Ri.transitional=function(a,s,h){function r(u,c){return"[Axios v1.2.3] Transitional option '"+u+"'"+c+(h?". "+h:"")}return function(u,c,f){if(a===!1)throw new Pe(r(c," has been removed"+(s?" in "+s:"")),Pe.ERR_DEPRECATED);return s&&!io[c]&&(io[c]=!0,console.warn(r(c," has been deprecated since v"+s+" and will be removed in the near future"))),!a||a(u,c,f)}};const qi={assertOptions:function(a,s,h){if(Zr(a)!=="object")throw new Pe("options must be an object",Pe.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(a),u=r.length;u-- >0;){var c=r[u],f=s[c];if(f){var w=a[c],E=w===void 0||f(w,c,a);if(E!==!0)throw new Pe("option "+c+" must be "+E,Pe.ERR_BAD_OPTION_VALUE)}else if(h!==!0)throw new Pe("Unknown option "+c,Pe.ERR_BAD_OPTION)}},validators:Ri};function ur(a){return ur=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},ur(a)}function ks(a,s){for(var h=0;h<s.length;h++){var r=s[h];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,(u=function(c,f){if(ur(c)!=="object"||c===null)return c;var w=c[Symbol.toPrimitive];if(w!==void 0){var E=w.call(c,"string");if(ur(E)!=="object")return E;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(r.key),ur(u)==="symbol"?u:String(u)),r)}var u}var pn=qi.validators,ei=function(){function a(r){(function(u,c){if(!(u instanceof c))throw new TypeError("Cannot call a class as a function")})(this,a),this.defaults=r,this.interceptors={request:new ee,response:new ee}}var s,h;return s=a,(h=[{key:"request",value:function(r,u){typeof r=="string"?(u=u||{}).url=r:u=r||{};var c,f=u=qn(this.defaults,u),w=f.transitional,E=f.paramsSerializer,D=f.headers;w!==void 0&&qi.assertOptions(w,{silentJSONParsing:pn.transitional(pn.boolean),forcedJSONParsing:pn.transitional(pn.boolean),clarifyTimeoutError:pn.transitional(pn.boolean)},!1),E!==void 0&&qi.assertOptions(E,{encode:pn.function,serialize:pn.function},!0),u.method=(u.method||this.defaults.method||"get").toLowerCase(),(c=D&&P.merge(D.common,D[u.method]))&&P.forEach(["delete","get","head","post","put","patch","common"],function(Ue){delete D[Ue]}),u.headers=an.concat(c,D);var M=[],ne=!0;this.interceptors.request.forEach(function(Ue){typeof Ue.runWhen=="function"&&Ue.runWhen(u)===!1||(ne=ne&&Ue.synchronous,M.unshift(Ue.fulfilled,Ue.rejected))});var de,ce=[];this.interceptors.response.forEach(function(Ue){ce.push(Ue.fulfilled,Ue.rejected)});var ue,re=0;if(!ne){var fe=[no.bind(this),void 0];for(fe.unshift.apply(fe,M),fe.push.apply(fe,ce),ue=fe.length,de=Promise.resolve(u);re<ue;)de=de.then(fe[re++],fe[re++]);return de}ue=M.length;var xe=u;for(re=0;re<ue;){var pt=M[re++],st=M[re++];try{xe=pt(xe)}catch(Ue){st.call(this,Ue);break}}try{de=no.call(this,xe)}catch(Ue){return Promise.reject(Ue)}for(re=0,ue=ce.length;re<ue;)de=de.then(ce[re++],ce[re++]);return de}},{key:"getUri",value:function(r){return L(eo((r=qn(this.defaults,r)).baseURL,r.url),r.params,r.paramsSerializer)}}])&&ks(s.prototype,h),Object.defineProperty(s,"prototype",{writable:!1}),a}();P.forEach(["delete","get","head","options"],function(a){ei.prototype[a]=function(s,h){return this.request(qn(h||{},{method:a,url:s,data:(h||{}).data}))}}),P.forEach(["post","put","patch"],function(a){function s(h){return function(r,u,c){return this.request(qn(c||{},{method:a,headers:h?{"Content-Type":"multipart/form-data"}:{},url:r,data:u}))}}ei.prototype[a]=s(),ei.prototype[a+"Form"]=s(!0)});const ti=ei;function cr(a){return cr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},cr(a)}function ao(a,s){for(var h=0;h<s.length;h++){var r=s[h];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,(u=function(c,f){if(cr(c)!=="object"||c===null)return c;var w=c[Symbol.toPrimitive];if(w!==void 0){var E=w.call(c,"string");if(cr(E)!=="object")return E;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(r.key),cr(u)==="symbol"?u:String(u)),r)}var u}var Bs=function(){function a(u){if(function(w,E){if(!(w instanceof E))throw new TypeError("Cannot call a class as a function")}(this,a),typeof u!="function")throw new TypeError("executor must be a function.");var c;this.promise=new Promise(function(w){c=w});var f=this;this.promise.then(function(w){if(f._listeners){for(var E=f._listeners.length;E-- >0;)f._listeners[E](w);f._listeners=null}}),this.promise.then=function(w){var E,D=new Promise(function(M){f.subscribe(M),E=M}).then(w);return D.cancel=function(){f.unsubscribe(E)},D},u(function(w,E,D){f.reason||(f.reason=new Jr(w,E,D),c(f.reason))})}var s,h,r;return s=a,h=[{key:"throwIfRequested",value:function(){if(this.reason)throw this.reason}},{key:"subscribe",value:function(u){this.reason?u(this.reason):this._listeners?this._listeners.push(u):this._listeners=[u]}},{key:"unsubscribe",value:function(u){if(this._listeners){var c=this._listeners.indexOf(u);c!==-1&&this._listeners.splice(c,1)}}}],r=[{key:"source",value:function(){var u;return{token:new a(function(c){u=c}),cancel:u}}}],h&&ao(s.prototype,h),r&&ao(s,r),Object.defineProperty(s,"prototype",{writable:!1}),a}();const Ss=Bs;function oo(a,s){(s==null||s>a.length)&&(s=a.length);for(var h=0,r=new Array(s);h<s;h++)r[h]=a[h];return r}var Fi={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Fi).forEach(function(a){var s,h,r=(h=2,function(f){if(Array.isArray(f))return f}(s=a)||function(f,w){var E=f==null?null:typeof Symbol<"u"&&f[Symbol.iterator]||f["@@iterator"];if(E!=null){var D,M,ne,de,ce=[],ue=!0,re=!1;try{if(ne=(E=E.call(f)).next,w===0){if(Object(E)!==E)return;ue=!1}else for(;!(ue=(D=ne.call(E)).done)&&(ce.push(D.value),ce.length!==w);ue=!0);}catch(fe){re=!0,M=fe}finally{try{if(!ue&&E.return!=null&&(de=E.return(),Object(de)!==de))return}finally{if(re)throw M}}return ce}}(s,h)||function(f,w){if(f){if(typeof f=="string")return oo(f,w);var E=Object.prototype.toString.call(f).slice(8,-1);return E==="Object"&&f.constructor&&(E=f.constructor.name),E==="Map"||E==="Set"?Array.from(f):E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E)?oo(f,w):void 0}}(s,h)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),u=r[0],c=r[1];Fi[c]=u});const Is=Fi;var ct=function a(s){var h=new ti(s),r=ge(ti.prototype.request,h);return P.extend(r,ti.prototype,h,{allOwnKeys:!0}),P.extend(r,h,null,{allOwnKeys:!0}),r.create=function(u){return a(qn(s,u))},r}(bt);ct.Axios=ti,ct.CanceledError=Jr,ct.CancelToken=Ss,ct.isCancel=Ja,ct.VERSION="1.2.3",ct.toFormData=Rn,ct.AxiosError=Pe,ct.Cancel=ct.CanceledError,ct.all=function(a){return Promise.all(a)},ct.spread=function(a){return function(s){return a.apply(null,s)}},ct.isAxiosError=function(a){return P.isObject(a)&&a.isAxiosError===!0},ct.mergeConfig=qn,ct.AxiosHeaders=an,ct.formToJSON=function(a){return Je(P.isHTMLForm(a)?new FormData(a):a)},ct.HttpStatusCode=Is,ct.default=ct;const lo=ct,Ts={send:function(a){lo.post(a.url,a.data).then(function(s){var h=s.data;h&&h.code===0?a.success&&a.success(h):a.error&&a.error(h&&h.msg)}).catch(function(s){console.error(s),a.error&&a.error()})},read:function(a){lo.get(a.url).then(function(s){var h=s.data;h&&h.code===0?a.success&&a.success(h.data.map(function(r){return{time:r[0],type:r[1],color:r[2],author:r[3],text:r[4]}})):a.error&&a.error(h&&h.msg)}).catch(function(s){console.error(s),a.error&&a.error()})}};function _i(a){return _i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},_i(a)}function Ls(a){var s=this;this.lang=a,this.fallbackLang=this.lang.includes("-")?this.lang.split("-")[0]:this.lang,this.tran=function(h){return h=h.toLowerCase(),Fn[s.lang]&&Fn[s.lang][h]?Fn[s.lang][h]:Fn[s.fallbackLang]&&Fn[s.fallbackLang][h]?Fn[s.fallbackLang][h]:$i[h]?$i[h]:h}}var $i={"danmaku-loading":"Danmaku is loading",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Input danmaku, hit Enter","about-author":"About author","dplayer-feedback":"DPlayer feedback","about-dplayer":"About DPlayer",loop:"Loop",speed:"Speed","opacity-danmaku":"Opacity for danmaku",normal:"Normal","please-input-danmaku":"Please input danmaku content!","set-danmaku-color":"Set danmaku color","set-danmaku-type":"Set danmaku type","show-danmaku":"Show danmaku","video-failed":"Video load failed","danmaku-failed":"Danmaku load failed","danmaku-send-failed":"Danmaku send failed","switching-quality":"Switching to %q quality","switched-quality":"Switched to %q quality",ff:"FF %s s",rew:"REW %s s","unlimited-danmaku":"Unlimited danmaku","send-danmaku":"Send danmaku",setting:"Setting",fullscreen:"Full screen","web-fullscreen":"Web full screen",send:"Send",screenshot:"Screenshot",airplay:"AirPlay",chromecast:"ChromeCast",subtitle:"Subtitle",off:"Off","show-subs":"Show subtitle","hide-subs":"Hide subtitle",volume:"Volume",live:"Live","video-info":"Video info"},Fn={en:$i,"zh-cn":{"danmaku-loading":"弹幕加载中",top:"顶部",bottom:"底部",rolling:"滚动","input-danmaku-enter":"输入弹幕，回车发送","about-author":"关于作者","dplayer-feedback":"播放器意见反馈","about-dplayer":"关于 DPlayer 播放器",loop:"洗脑循环",speed:"速度","opacity-danmaku":"弹幕透明度",normal:"正常","please-input-danmaku":"要输入弹幕内容啊喂！","set-danmaku-color":"设置弹幕颜色","set-danmaku-type":"设置弹幕类型","show-danmaku":"显示弹幕","video-failed":"视频加载失败","danmaku-failed":"弹幕加载失败","danmaku-send-failed":"弹幕发送失败","switching-quality":"正在切换至 %q 画质","switched-quality":"已经切换至 %q 画质",ff:"快进 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"海量弹幕","send-danmaku":"发送弹幕",setting:"设置",fullscreen:"全屏","web-fullscreen":"页面全屏",send:"发送",screenshot:"截图",airplay:"无线投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"关闭","show-subs":"显示字幕","hide-subs":"隐藏字幕",volume:"音量",live:"直播","video-info":"视频统计信息"},"zh-tw":{"danmaku-loading":"彈幕載入中",top:"頂部",bottom:"底部",rolling:"滾動","input-danmaku-enter":"輸入彈幕，Enter 發送","about-author":"關於作者","dplayer-feedback":"播放器意見回饋","about-dplayer":"關於 DPlayer 播放器",loop:"循環播放",speed:"速度","opacity-danmaku":"彈幕透明度",normal:"正常","please-input-danmaku":"請輸入彈幕內容啊！","set-danmaku-color":"設定彈幕顏色","set-danmaku-type":"設定彈幕類型","show-danmaku":"顯示彈幕","video-failed":"影片載入失敗","danmaku-failed":"彈幕載入失敗","danmaku-send-failed":"彈幕發送失敗","switching-quality":"正在切換至 %q 畫質","switched-quality":"已經切換至 %q 畫質",ff:"快進 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"巨量彈幕","send-danmaku":"發送彈幕",setting:"設定",fullscreen:"全螢幕","web-fullscreen":"頁面全螢幕",send:"發送",screenshot:"截圖",airplay:"無線投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"關閉","show-subs":"顯示字幕","hide-subs":"隱藏字幕",volume:"音量",live:"直播","video-info":"影片統計訊息"},"ko-kr":{"danmaku-loading":"Danmaku를 불러오는 중입니다.",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Danmaku를 입력하고 Enter를 누르세요.","about-author":"만든이","dplayer-feedback":"피드백 보내기","about-dplayer":"DPlayer 정보",loop:"반복",speed:"배속","opacity-danmaku":"Danmaku 불투명도",normal:"표준","please-input-danmaku":"Danmaku를 입력하세요!","set-danmaku-color":"Danmaku 색상","set-danmaku-type":"Danmaku 설정","show-danmaku":"Danmaku 표시","video-failed":"비디오를 불러오지 못했습니다.","danmaku-failed":"Danmaku를 불러오지 못했습니다.","danmaku-send-failed":"Danmaku 전송에 실패했습니다.","Switching to":"","Switched to":"","switching-quality":"전환 %q 화질","switched-quality":"전환 됨 %q 화질",ff:"앞으로 %s 초",rew:"뒤로 %s 초","unlimited-danmaku":"끝없는 Danmaku","send-danmaku":"Danmaku 보내기",setting:"설정",fullscreen:"전체 화면","web-fullscreen":"웹 내 전체화면",send:"보내기",screenshot:"화면 캡쳐",airplay:"에어플레이",chromecast:"ChromeCast",subtitle:"부제",off:"끄다","show-subs":"자막 보이기","hide-subs":"자막 숨기기",Volume:"볼륨",live:"생방송","video-info":"비디오 정보"},de:{"danmaku-loading":"Danmaku lädt...",top:"Oben",bottom:"Unten",rolling:"Rollend","input-danmaku-enter":"Drücke Enter nach dem Einfügen vom Danmaku","about-author":"Über den Autor","dplayer-feedback":"DPlayer Feedback","about-dplayer":"Über DPlayer",loop:"Wiederholen",speed:"Geschwindigkeit","opacity-danmaku":"Transparenz für Danmaku",normal:"Normal","please-input-danmaku":"Bitte Danmaku Inhalt eingeben!","set-danmaku-color":"Danmaku Farbe festlegen","set-danmaku-type":"Danmaku Typ festlegen","show-danmaku":"Zeige Danmaku","video-failed":"Das Video konnte nicht geladen werden","danmaku-failed":"Danmaku konnte nicht geladen werden","danmaku-send-failed":"Das senden von Danmaku ist fehgeschlagen","switching-quality":"Wechsle zur %q Qualität","switched-quality":"Zur %q Qualität gewechselt",ff:"%s s Vorwärts",rew:"%s s Zurück","unlimited-danmaku":"Unlimitiertes Danmaku","send-danmaku":"Sende Danmaku",setting:"Einstellungen",fullscreen:"Vollbild","web-fullscreen":"Browser Vollbild",send:"Senden",screenshot:"Screenshot",airplay:"AirPlay","show-subs":"Zeige Untertitel",chromecast:"ChromeCast",subtitle:"Untertitel",off:"Schließung","hide-subs":"Verstecke Untertitel",volume:"Lautstärke",live:"Live","video-info":"Video Info"}},Ds=o(730),Os=o.n(Ds),zs=o(74),Ms=o.n(zs),Ns=o(437),Ps=o.n(Ns),Vs=o(644),Rs=o.n(Vs),qs=o(324),Fs=o.n(qs),_s=o(574),$s=o.n(_s),Ws=o(300),js=o.n(Ws),Hs=o(934),Us=o.n(Hs),Qs=o(428),Ys=o.n(Qs),Ks=o(807),Xs=o.n(Ks),Gs=o(338),Js=o.n(Gs),Zs=o(254),ed=o.n(Zs),td=o(965),nd=o.n(td),rd=o(113),id=o.n(rd),ad=o(251),od=o.n(ad),ld=o(410),sd=o.n(ld),dd=o(182),ud=o.n(dd),cd=o(193),pd=o.n(cd);const jt={play:Os(),pause:Ms(),volumeUp:Ps(),volumeDown:Rs(),volumeOff:Fs(),full:$s(),fullWeb:js(),setting:Us(),right:Ys(),comment:Xs(),commentOff:Js(),send:ed(),pallette:nd(),camera:id(),subtitle:sd(),loading:ud(),airplay:od(),chromecast:pd()};var hd=o(916),fd=o.n(hd);function pr(a){return pr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},pr(a)}function so(a,s){for(var h=0;h<s.length;h++){var r=s[h];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,(u=function(c,f){if(pr(c)!=="object"||c===null)return c;var w=c[Symbol.toPrimitive];if(w!==void 0){var E=w.call(c,"string");if(pr(E)!=="object")return E;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(r.key),pr(u)==="symbol"?u:String(u)),r)}var u}var md=function(){function a(u){(function(c,f){if(!(c instanceof f))throw new TypeError("Cannot call a class as a function")})(this,a),this.container=u.container,this.options=u.options,this.index=u.index,this.tran=u.tran,this.init()}var s,h,r;return s=a,r=[{key:"NewNotice",value:function(u,c,f){var w=document.createElement("div");return w.classList.add("dplayer-notice"),w.style.opacity=c,w.innerText=u,f&&(w.id="dplayer-notice-".concat(f)),w}}],(h=[{key:"init",value:function(){this.container.innerHTML=fd()({options:this.options,index:this.index,tran:this.tran,icons:jt,mobile:W.isMobile,video:{current:!0,pic:this.options.video.pic,screenshot:this.options.screenshot,airplay:!(!W.isSafari||W.isChrome)&&this.options.airplay,chromecast:this.options.chromecast,preload:this.options.preload,url:this.options.video.url,subtitle:this.options.subtitle}}),this.volumeBar=this.container.querySelector(".dplayer-volume-bar-inner"),this.volumeBarWrap=this.container.querySelector(".dplayer-volume-bar"),this.volumeBarWrapWrap=this.container.querySelector(".dplayer-volume-bar-wrap"),this.volumeButton=this.container.querySelector(".dplayer-volume"),this.volumeButtonIcon=this.container.querySelector(".dplayer-volume-icon"),this.volumeIcon=this.container.querySelector(".dplayer-volume-icon .dplayer-icon-content"),this.playedBar=this.container.querySelector(".dplayer-played"),this.loadedBar=this.container.querySelector(".dplayer-loaded"),this.playedBarWrap=this.container.querySelector(".dplayer-bar-wrap"),this.playedBarTime=this.container.querySelector(".dplayer-bar-time"),this.danmaku=this.container.querySelector(".dplayer-danmaku"),this.danmakuLoading=this.container.querySelector(".dplayer-danloading"),this.video=this.container.querySelector(".dplayer-video-current"),this.bezel=this.container.querySelector(".dplayer-bezel-icon"),this.playButton=this.container.querySelector(".dplayer-play-icon"),this.mobilePlayButton=this.container.querySelector(".dplayer-mobile-play"),this.videoWrap=this.container.querySelector(".dplayer-video-wrap"),this.controllerMask=this.container.querySelector(".dplayer-controller-mask"),this.ptime=this.container.querySelector(".dplayer-ptime"),this.settingButton=this.container.querySelector(".dplayer-setting-icon"),this.settingBox=this.container.querySelector(".dplayer-setting-box"),this.mask=this.container.querySelector(".dplayer-mask"),this.loop=this.container.querySelector(".dplayer-setting-loop"),this.loopToggle=this.container.querySelector(".dplayer-setting-loop .dplayer-toggle-setting-input"),this.showDanmaku=this.container.querySelector(".dplayer-setting-showdan"),this.showDanmakuToggle=this.container.querySelector(".dplayer-showdan-setting-input"),this.unlimitDanmaku=this.container.querySelector(".dplayer-setting-danunlimit"),this.unlimitDanmakuToggle=this.container.querySelector(".dplayer-danunlimit-setting-input"),this.speed=this.container.querySelector(".dplayer-setting-speed"),this.speedItem=this.container.querySelectorAll(".dplayer-setting-speed-item"),this.danmakuOpacityBar=this.container.querySelector(".dplayer-danmaku-bar-inner"),this.danmakuOpacityBarWrap=this.container.querySelector(".dplayer-danmaku-bar"),this.danmakuOpacityBarWrapWrap=this.container.querySelector(".dplayer-danmaku-bar-wrap"),this.danmakuOpacityBox=this.container.querySelector(".dplayer-setting-danmaku"),this.dtime=this.container.querySelector(".dplayer-dtime"),this.controller=this.container.querySelector(".dplayer-controller"),this.commentInput=this.container.querySelector(".dplayer-comment-input"),this.commentButton=this.container.querySelector(".dplayer-comment-icon"),this.commentSettingBox=this.container.querySelector(".dplayer-comment-setting-box"),this.commentSettingButton=this.container.querySelector(".dplayer-comment-setting-icon"),this.commentSettingFill=this.container.querySelector(".dplayer-comment-setting-icon path"),this.commentSendButton=this.container.querySelector(".dplayer-send-icon"),this.commentSendFill=this.container.querySelector(".dplayer-send-icon path"),this.commentColorSettingBox=this.container.querySelector(".dplayer-comment-setting-color"),this.browserFullButton=this.container.querySelector(".dplayer-full-icon"),this.webFullButton=this.container.querySelector(".dplayer-full-in-icon"),this.menu=this.container.querySelector(".dplayer-menu"),this.menuItem=this.container.querySelectorAll(".dplayer-menu-item"),this.qualityList=this.container.querySelector(".dplayer-quality-list"),this.camareButton=this.container.querySelector(".dplayer-camera-icon"),this.airplayButton=this.container.querySelector(".dplayer-airplay-icon"),this.chromecastButton=this.container.querySelector(".dplayer-chromecast-icon"),this.subtitleButton=this.container.querySelector(".dplayer-subtitle-icon"),this.subtitleButtonInner=this.container.querySelector(".dplayer-subtitle-icon .dplayer-icon-content"),this.subtitlesButton=this.container.querySelector(".dplayer-subtitles-icon"),this.subtitlesBox=this.container.querySelector(".dplayer-subtitles-box"),this.subtitlesItem=this.container.querySelectorAll(".dplayer-subtitles-item"),this.subtitle=this.container.querySelector(".dplayer-subtitle"),this.subtrack=this.container.querySelector(".dplayer-subtrack"),this.qualityButton=this.container.querySelector(".dplayer-quality-icon"),this.barPreview=this.container.querySelector(".dplayer-bar-preview"),this.barWrap=this.container.querySelector(".dplayer-bar-wrap"),this.noticeList=this.container.querySelector(".dplayer-notice-list"),this.infoPanel=this.container.querySelector(".dplayer-info-panel"),this.infoPanelClose=this.container.querySelector(".dplayer-info-panel-close"),this.infoVersion=this.container.querySelector(".dplayer-info-panel-item-version .dplayer-info-panel-item-data"),this.infoFPS=this.container.querySelector(".dplayer-info-panel-item-fps .dplayer-info-panel-item-data"),this.infoType=this.container.querySelector(".dplayer-info-panel-item-type .dplayer-info-panel-item-data"),this.infoUrl=this.container.querySelector(".dplayer-info-panel-item-url .dplayer-info-panel-item-data"),this.infoResolution=this.container.querySelector(".dplayer-info-panel-item-resolution .dplayer-info-panel-item-data"),this.infoDuration=this.container.querySelector(".dplayer-info-panel-item-duration .dplayer-info-panel-item-data"),this.infoDanmakuId=this.container.querySelector(".dplayer-info-panel-item-danmaku-id .dplayer-info-panel-item-data"),this.infoDanmakuApi=this.container.querySelector(".dplayer-info-panel-item-danmaku-api .dplayer-info-panel-item-data"),this.infoDanmakuAmount=this.container.querySelector(".dplayer-info-panel-item-danmaku-amount .dplayer-info-panel-item-data")}}])&&so(s.prototype,h),r&&so(s,r),Object.defineProperty(s,"prototype",{writable:!1}),a}();const uo=md;function _n(a){return _n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},_n(a)}function yd(a,s){for(var h=0;h<s.length;h++){var r=s[h];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,(u=function(c,f){if(_n(c)!=="object"||c===null)return c;var w=c[Symbol.toPrimitive];if(w!==void 0){var E=w.call(c,"string");if(_n(E)!=="object")return E;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(r.key),_n(u)==="symbol"?u:String(u)),r)}var u}var Ad=function(){function a(r){(function(u,c){if(!(u instanceof c))throw new TypeError("Cannot call a class as a function")})(this,a),this.options=r,this.player=this.options.player,this.container=this.options.container,this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.dan=[],this.showing=!0,this._opacity=this.options.opacity,this.events=this.options.events,this.unlimited=this.options.unlimited,this._measure(""),this.load()}var s,h;return s=a,h=[{key:"load",value:function(){var r,u=this;r=this.options.api.maximum?"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id,"&max=").concat(this.options.api.maximum):"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id);var c=(this.options.api.addition||[]).slice(0);c.push(r),this.events&&this.events.trigger("danmaku_load_start",c),this._readAllEndpoints(c,function(f){u.dan=[].concat.apply([],f).sort(function(w,E){return w.time-E.time}),window.requestAnimationFrame(function(){u.frame()}),u.options.callback(),u.events&&u.events.trigger("danmaku_load_end")})}},{key:"reload",value:function(r){this.options.api=r,this.dan=[],this.clear(),this.load()}},{key:"_readAllEndpoints",value:function(r,u){for(var c=this,f=[],w=0,E=function(M){c.options.apiBackend.read({url:r[M],success:function(ne){f[M]=ne,++w===r.length&&u(f)},error:function(ne){c.options.error(ne||c.options.tran("danmaku-failed")),f[M]=[],++w===r.length&&u(f)}})},D=0;D<r.length;++D)E(D)}},{key:"send",value:function(r,u){var c=this,f={token:this.options.api.token,id:this.options.api.id,author:this.options.api.user,time:this.options.time(),text:r.text,color:r.color,type:r.type};this.options.apiBackend.send({url:this.options.api.address+"v3/",data:f,success:u,error:function(E){c.options.error(E||c.options.tran("danmaku-failed"))}}),this.dan.splice(this.danIndex,0,f),this.danIndex++;var w={text:this.htmlEncode(f.text),color:f.color,type:f.type,border:"2px solid ".concat(this.options.borderColor)};this.draw(w),this.events&&this.events.trigger("danmaku_send",f)}},{key:"frame",value:function(){var r=this;if(this.dan.length&&!this.paused&&this.showing){for(var u=this.dan[this.danIndex],c=[];u&&this.options.time()>parseFloat(u.time);)c.push(u),u=this.dan[++this.danIndex];this.draw(c)}window.requestAnimationFrame(function(){r.frame()})}},{key:"opacity",value:function(r){if(r!==void 0){for(var u=this.container.getElementsByClassName("dplayer-danmaku-item"),c=0;c<u.length;c++)u[c].style.opacity=r;this._opacity=r,this.events&&this.events.trigger("danmaku_opacity",this._opacity)}return this._opacity}},{key:"draw",value:function(r){var u=this;if(this.showing){var c=this.options.height,f=this.container.offsetWidth,w=this.container.offsetHeight,E=parseInt(w/c),D=function(re){var fe=re.offsetWidth||parseInt(re.style.width),xe=re.getBoundingClientRect().right||u.container.getBoundingClientRect().right+fe;return u.container.getBoundingClientRect().right-xe},M=function(re){return(f+re)/5},ne=function(re,fe,xe){for(var pt=f/M(xe),st=function(Bn){var Wn=u.danTunnel[fe][Bn+""];if(!Wn||!Wn.length)return u.danTunnel[fe][Bn+""]=[re],re.addEventListener("animationend",function(){u.danTunnel[fe][Bn+""].splice(0,1)}),{v:Bn%E};if(fe!=="right")return"continue";for(var Tr=0;Tr<Wn.length;Tr++){var yo=D(Wn[Tr])-10;if(yo<=f-pt*M(parseInt(Wn[Tr].style.width))||yo<=0)break;if(Tr===Wn.length-1)return u.danTunnel[fe][Bn+""].push(re),re.addEventListener("animationend",function(){u.danTunnel[fe][Bn+""].splice(0,1)}),{v:Bn%E}}},Ue=0;u.unlimited||Ue<E;Ue++){var fn=st(Ue);if(fn!=="continue"&&_n(fn)==="object")return fn.v}return-1};Object.prototype.toString.call(r)!=="[object Array]"&&(r=[r]);for(var de=document.createDocumentFragment(),ce=function(){r[ue].type=W.number2Type(r[ue].type),r[ue].color||(r[ue].color=16777215);var re=document.createElement("div");re.classList.add("dplayer-danmaku-item"),re.classList.add("dplayer-danmaku-".concat(r[ue].type)),r[ue].border?re.innerHTML='<span style="border:'.concat(r[ue].border,'">').concat(r[ue].text,"</span>"):re.innerHTML=r[ue].text,re.style.opacity=u._opacity,re.style.color=W.number2Color(r[ue].color),re.addEventListener("animationend",function(){u.container.removeChild(re)});var fe,xe=u._measure(r[ue].text);switch(r[ue].type){case"right":(fe=ne(re,r[ue].type,xe))>=0&&(re.style.width=xe+1+"px",re.style.top=c*fe+"px",re.style.transform="translateX(-".concat(f,"px)"));break;case"top":(fe=ne(re,r[ue].type))>=0&&(re.style.top=c*fe+"px");break;case"bottom":(fe=ne(re,r[ue].type))>=0&&(re.style.bottom=c*fe+"px");break;default:console.error("Can't handled danmaku type: ".concat(r[ue].type))}fe>=0&&(re.classList.add("dplayer-danmaku-move"),re.style.animationDuration=u._danAnimation(r[ue].type),de.appendChild(re))},ue=0;ue<r.length;ue++)ce();return this.container.appendChild(de),de}}},{key:"play",value:function(){this.paused=!1}},{key:"pause",value:function(){this.paused=!0}},{key:"_measure",value:function(r){if(!this.context){var u=getComputedStyle(this.container.getElementsByClassName("dplayer-danmaku-item")[0],null);this.context=document.createElement("canvas").getContext("2d"),this.context.font=u.getPropertyValue("font")}return this.context.measureText(r).width}},{key:"seek",value:function(){this.clear();for(var r=0;r<this.dan.length;r++){if(this.dan[r].time>=this.options.time()){this.danIndex=r;break}this.danIndex=this.dan.length}}},{key:"clear",value:function(){this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.options.container.innerHTML="",this.events&&this.events.trigger("danmaku_clear")}},{key:"htmlEncode",value:function(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2f;")}},{key:"resize",value:function(){for(var r=this.container.offsetWidth,u=this.container.getElementsByClassName("dplayer-danmaku-item"),c=0;c<u.length;c++)u[c].style.transform="translateX(-".concat(r,"px)")}},{key:"hide",value:function(){this.showing=!1,this.pause(),this.clear(),this.events&&this.events.trigger("danmaku_hide")}},{key:"show",value:function(){this.seek(),this.showing=!0,this.play(),this.events&&this.events.trigger("danmaku_show")}},{key:"unlimit",value:function(r){this.unlimited=r}},{key:"speed",value:function(r){this.options.api.speedRate=r}},{key:"_danAnimation",value:function(r){var u=this.options.api.speedRate||1,c=!!this.player.fullScreen.isFullScreen();return{top:"".concat((c?6:4)/u,"s"),right:"".concat((c?8:5)/u,"s"),bottom:"".concat((c?6:4)/u,"s")}[r]}}],h&&yd(s.prototype,h),Object.defineProperty(s,"prototype",{writable:!1}),a}();const gd=Ad;function hr(a){return hr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},hr(a)}function bd(a,s){for(var h=0;h<s.length;h++){var r=s[h];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,(u=function(c,f){if(hr(c)!=="object"||c===null)return c;var w=c[Symbol.toPrimitive];if(w!==void 0){var E=w.call(c,"string");if(hr(E)!=="object")return E;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(r.key),hr(u)==="symbol"?u:String(u)),r)}var u}const vd=function(){function a(){(function(r,u){if(!(r instanceof u))throw new TypeError("Cannot call a class as a function")})(this,a),this.events={},this.videoEvents=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","mozaudioavailable","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],this.playerEvents=["screenshot","thumbnails_show","thumbnails_hide","danmaku_show","danmaku_hide","danmaku_clear","danmaku_loaded","danmaku_send","danmaku_opacity","contextmenu_show","contextmenu_hide","notice_show","notice_hide","quality_start","quality_end","destroy","resize","fullscreen","fullscreen_cancel","webfullscreen","webfullscreen_cancel","subtitle_show","subtitle_hide","subtitle_change"]}var s,h;return s=a,(h=[{key:"on",value:function(r,u){this.type(r)&&typeof u=="function"&&(this.events[r]||(this.events[r]=[]),this.events[r].push(u))}},{key:"trigger",value:function(r,u){if(this.events[r]&&this.events[r].length)for(var c=0;c<this.events[r].length;c++)this.events[r][c](u)}},{key:"type",value:function(r){return this.playerEvents.indexOf(r)!==-1?"player":this.videoEvents.indexOf(r)!==-1?"video":(console.error("Unknown event name: ".concat(r)),null)}}])&&bd(s.prototype,h),Object.defineProperty(s,"prototype",{writable:!1}),a}();function fr(a){return fr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},fr(a)}function wd(a,s){for(var h=0;h<s.length;h++){var r=s[h];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,(u=function(c,f){if(fr(c)!=="object"||c===null)return c;var w=c[Symbol.toPrimitive];if(w!==void 0){var E=w.call(c,"string");if(fr(E)!=="object")return E;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(r.key),fr(u)==="symbol"?u:String(u)),r)}var u}var xd=function(){function a(r){var u=this;(function(c,f){if(!(c instanceof f))throw new TypeError("Cannot call a class as a function")})(this,a),this.player=r,this.lastScrollPosition={left:0,top:0},this.player.events.on("webfullscreen",function(){u.player.resize()}),this.player.events.on("webfullscreen_cancel",function(){u.player.resize(),W.setScrollPosition(u.lastScrollPosition)}),this.fullscreenchange=function(){u.player.resize(),u.isFullScreen("browser")?u.player.events.trigger("fullscreen"):(W.setScrollPosition(u.lastScrollPosition),u.player.events.trigger("fullscreen_cancel"))},this.docfullscreenchange=function(){var c=document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;c&&c!==u.player.container||(u.player.resize(),c?u.player.events.trigger("fullscreen"):(W.setScrollPosition(u.lastScrollPosition),u.player.events.trigger("fullscreen_cancel")))},/Firefox/.test(navigator.userAgent)?(document.addEventListener("mozfullscreenchange",this.docfullscreenchange),document.addEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.addEventListener("fullscreenchange",this.fullscreenchange),this.player.container.addEventListener("webkitfullscreenchange",this.fullscreenchange),document.addEventListener("msfullscreenchange",this.docfullscreenchange),document.addEventListener("MSFullscreenChange",this.docfullscreenchange))}var s,h;return s=a,h=[{key:"isFullScreen",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(r){case"browser":return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;case"web":return this.player.container.classList.contains("dplayer-fulled")}}},{key:"request",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser",u=r==="browser"?"web":"browser",c=this.isFullScreen(u);switch(c||(this.lastScrollPosition=W.getScrollPosition()),r){case"browser":this.player.container.requestFullscreen?this.player.container.requestFullscreen():this.player.container.mozRequestFullScreen?this.player.container.mozRequestFullScreen():this.player.container.webkitRequestFullscreen?this.player.container.webkitRequestFullscreen():this.player.video.webkitEnterFullscreen?this.player.video.webkitEnterFullscreen():this.player.video.webkitEnterFullScreen?this.player.video.webkitEnterFullScreen():this.player.container.msRequestFullscreen&&this.player.container.msRequestFullscreen();break;case"web":this.player.container.classList.add("dplayer-fulled"),document.body.classList.add("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen")}c&&this.cancel(u)}},{key:"cancel",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(r){case"browser":document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.webkitCancelFullscreen?document.webkitCancelFullscreen():document.msCancelFullScreen?document.msCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen();break;case"web":this.player.container.classList.remove("dplayer-fulled"),document.body.classList.remove("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen_cancel")}}},{key:"toggle",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";this.isFullScreen(r)?this.cancel(r):this.request(r)}},{key:"destroy",value:function(){/Firefox/.test(navigator.userAgent)?(document.removeEventListener("mozfullscreenchange",this.docfullscreenchange),document.removeEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.removeEventListener("fullscreenchange",this.fullscreenchange),this.player.container.removeEventListener("webkitfullscreenchange",this.fullscreenchange),document.removeEventListener("msfullscreenchange",this.docfullscreenchange),document.removeEventListener("MSFullscreenChange",this.docfullscreenchange))}}],h&&wd(s.prototype,h),Object.defineProperty(s,"prototype",{writable:!1}),a}();const Ed=xd;function mr(a){return mr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},mr(a)}function Cd(a,s){for(var h=0;h<s.length;h++){var r=s[h];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,(u=function(c,f){if(mr(c)!=="object"||c===null)return c;var w=c[Symbol.toPrimitive];if(w!==void 0){var E=w.call(c,"string");if(mr(E)!=="object")return E;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(r.key),mr(u)==="symbol"?u:String(u)),r)}var u}var kd=function(){function a(r){(function(u,c){if(!(u instanceof c))throw new TypeError("Cannot call a class as a function")})(this,a),this.storageName={opacity:"dplayer-danmaku-opacity",volume:"dplayer-volume",unlimited:"dplayer-danmaku-unlimited",danmaku:"dplayer-danmaku-show",subtitle:"dplayer-subtitle-show"},this.default={opacity:.7,volume:r.options.hasOwnProperty("volume")?r.options.volume:.7,unlimited:(r.options.danmaku&&r.options.danmaku.unlimited?1:0)||0,danmaku:1,subtitle:1},this.data={},this.init()}var s,h;return s=a,(h=[{key:"init",value:function(){for(var r in this.storageName){var u=this.storageName[r];this.data[r]=parseFloat(W.storage.get(u)||this.default[r])}}},{key:"get",value:function(r){return this.data[r]}},{key:"set",value:function(r,u){this.data[r]=u,W.storage.set(this.storageName[r],u)}}])&&Cd(s.prototype,h),Object.defineProperty(s,"prototype",{writable:!1}),a}();const Bd=kd;function yr(a){return yr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},yr(a)}function Sd(a,s){for(var h=0;h<s.length;h++){var r=s[h];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,(u=function(c,f){if(yr(c)!=="object"||c===null)return c;var w=c[Symbol.toPrimitive];if(w!==void 0){var E=w.call(c,"string");if(yr(E)!=="object")return E;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(r.key),yr(u)==="symbol"?u:String(u)),r)}var u}var Id=function(){function a(r,u,c,f){(function(w,E){if(!(w instanceof E))throw new TypeError("Cannot call a class as a function")})(this,a),this.container=r,this.video=u,this.options=c,this.events=f,this.init()}var s,h;return s=a,h=[{key:"init",value:function(){var r=this;if(this.container.style.fontSize=this.options.fontSize,this.container.style.bottom=this.options.bottom,this.container.style.color=this.options.color,this.video.textTracks&&this.video.textTracks[0]){var u=this.video.textTracks[0];u.oncuechange=function(){var c=u.activeCues[u.activeCues.length-1];if(r.container.innerHTML="",c){var f=document.createElement("div");f.appendChild(c.getCueAsHTML());var w=f.innerHTML.split(/\r?\n/).map(function(E){return"<p>".concat(E,"</p>")}).join("");r.container.innerHTML=w}r.events.trigger("subtitle_change")}}}},{key:"show",value:function(){this.container.classList.remove("dplayer-subtitle-hide"),this.events.trigger("subtitle_show")}},{key:"hide",value:function(){this.container.classList.add("dplayer-subtitle-hide"),this.events.trigger("subtitle_hide")}},{key:"toggle",value:function(){this.container.classList.contains("dplayer-subtitle-hide")?this.show():this.hide()}}],h&&Sd(s.prototype,h),Object.defineProperty(s,"prototype",{writable:!1}),a}();const Td=Id;function Ar(a){return Ar=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Ar(a)}function Ld(a,s){for(var h=0;h<s.length;h++){var r=s[h];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,(u=function(c,f){if(Ar(c)!=="object"||c===null)return c;var w=c[Symbol.toPrimitive];if(w!==void 0){var E=w.call(c,"string");if(Ar(E)!=="object")return E;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(r.key),Ar(u)==="symbol"?u:String(u)),r)}var u}var Dd=function(){function a(r){var u=this;(function(E,D){if(!(E instanceof D))throw new TypeError("Cannot call a class as a function")})(this,a),this.player=r,this.player.template.mask.addEventListener("click",function(){u.hide()}),this.player.template.subtitlesButton.addEventListener("click",function(){u.adaptiveHeight(),u.show()});for(var c=this.player.template.subtitlesItem.length-1,f=function(E){u.player.template.subtitlesItem[E].addEventListener("click",function(){u.hide(),u.player.options.subtitle.index!==E&&(u.player.template.subtitle.innerHTML="<p></p>",u.player.template.subtrack.src=u.player.template.subtitlesItem[E].dataset.subtitle,u.player.options.subtitle.index=E,u.player.template.subtitle.classList.contains("dplayer-subtitle-hide")&&u.subContainerShow())})},w=0;w<c;w++)f(w);this.player.template.subtitlesItem[c].addEventListener("click",function(){u.hide(),u.player.options.subtitle.index!==c&&(u.player.template.subtitle.innerHTML="<p></p>",u.player.template.subtrack.src="",u.player.options.subtitle.index=c,u.subContainerHide())})}var s,h;return s=a,(h=[{key:"subContainerShow",value:function(){this.player.template.subtitle.classList.remove("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_show")}},{key:"subContainerHide",value:function(){this.player.template.subtitle.classList.add("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_hide")}},{key:"hide",value:function(){this.player.template.subtitlesBox.classList.remove("dplayer-subtitles-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.subtitlesBox.classList.add("dplayer-subtitles-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}},{key:"adaptiveHeight",value:function(){var r=30*this.player.template.subtitlesItem.length+14,u=.8*this.player.template.videoWrap.offsetHeight;r>=u-50?(this.player.template.subtitlesBox.style.bottom="8px",this.player.template.subtitlesBox.style["max-height"]=u-8+"px"):(this.player.template.subtitlesBox.style.bottom="50px",this.player.template.subtitlesBox.style["max-height"]=u-50+"px")}}])&&Ld(s.prototype,h),Object.defineProperty(s,"prototype",{writable:!1}),a}();const Od=Dd;function gr(a){return gr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},gr(a)}function zd(a,s){for(var h=0;h<s.length;h++){var r=s[h];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,(u=function(c,f){if(gr(c)!=="object"||c===null)return c;var w=c[Symbol.toPrimitive];if(w!==void 0){var E=w.call(c,"string");if(gr(E)!=="object")return E;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(r.key),gr(u)==="symbol"?u:String(u)),r)}var u}var Md=function(){function a(r){(function(u,c){if(!(u instanceof c))throw new TypeError("Cannot call a class as a function")})(this,a),this.elements={},this.elements.volume=r.volumeBar,this.elements.played=r.playedBar,this.elements.loaded=r.loadedBar,this.elements.danmaku=r.danmakuOpacityBar}var s,h;return s=a,(h=[{key:"set",value:function(r,u,c){u=Math.max(u,0),u=Math.min(u,1),this.elements[r].style[c]=100*u+"%"}},{key:"get",value:function(r){return parseFloat(this.elements[r].style.width)/100}}])&&zd(s.prototype,h),Object.defineProperty(s,"prototype",{writable:!1}),a}();const Nd=Md;function br(a){return br=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},br(a)}function Pd(a,s){for(var h=0;h<s.length;h++){var r=s[h];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,(u=function(c,f){if(br(c)!=="object"||c===null)return c;var w=c[Symbol.toPrimitive];if(w!==void 0){var E=w.call(c,"string");if(br(E)!=="object")return E;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(r.key),br(u)==="symbol"?u:String(u)),r)}var u}var Vd=function(){function a(r){(function(u,c){if(!(u instanceof c))throw new TypeError("Cannot call a class as a function")})(this,a),this.player=r,window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(u){window.setTimeout(u,1e3/60)},this.types=["loading","info","fps"],this.init()}var s,h;return s=a,(h=[{key:"init",value:function(){var r=this;this.types.map(function(u){return u!=="fps"&&r["init".concat(u,"Checker")](),u})}},{key:"initloadingChecker",value:function(){var r=this,u=0,c=0,f=!1;this.loadingChecker=setInterval(function(){r.enableloadingChecker&&(c=r.player.video.currentTime,f||c!==u||r.player.video.paused||(r.player.container.classList.add("dplayer-loading"),f=!0),f&&c>u&&!r.player.video.paused&&(r.player.container.classList.remove("dplayer-loading"),f=!1),u=c)},100)}},{key:"initfpsChecker",value:function(){var r=this;window.requestAnimationFrame(function(){if(r.enablefpsChecker)if(r.initfpsChecker(),r.fpsStart){r.fpsIndex++;var u=new Date;u-r.fpsStart>1e3&&(r.player.infoPanel.fps(r.fpsIndex/(u-r.fpsStart)*1e3),r.fpsStart=new Date,r.fpsIndex=0)}else r.fpsStart=new Date,r.fpsIndex=0;else r.fpsStart=0,r.fpsIndex=0})}},{key:"initinfoChecker",value:function(){var r=this;this.infoChecker=setInterval(function(){r.enableinfoChecker&&r.player.infoPanel.update()},1e3)}},{key:"enable",value:function(r){this["enable".concat(r,"Checker")]=!0,r==="fps"&&this.initfpsChecker()}},{key:"disable",value:function(r){this["enable".concat(r,"Checker")]=!1}},{key:"destroy",value:function(){var r=this;this.types.map(function(u){return r["enable".concat(u,"Checker")]=!1,r["".concat(u,"Checker")]&&clearInterval(r["".concat(u,"Checker")]),u})}}])&&Pd(s.prototype,h),Object.defineProperty(s,"prototype",{writable:!1}),a}();const Rd=Vd;function vr(a){return vr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},vr(a)}function qd(a,s){for(var h=0;h<s.length;h++){var r=s[h];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,(u=function(c,f){if(vr(c)!=="object"||c===null)return c;var w=c[Symbol.toPrimitive];if(w!==void 0){var E=w.call(c,"string");if(vr(E)!=="object")return E;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(r.key),vr(u)==="symbol"?u:String(u)),r)}var u}const Fd=function(){function a(r){var u=this;(function(c,f){if(!(c instanceof f))throw new TypeError("Cannot call a class as a function")})(this,a),this.container=r,this.container.addEventListener("animationend",function(){u.container.classList.remove("dplayer-bezel-transition")})}var s,h;return s=a,(h=[{key:"switch",value:function(r){this.container.innerHTML=r,this.container.classList.add("dplayer-bezel-transition")}}])&&qd(s.prototype,h),Object.defineProperty(s,"prototype",{writable:!1}),a}();function wr(a){return wr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},wr(a)}function _d(a,s){for(var h=0;h<s.length;h++){var r=s[h];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,(u=function(c,f){if(wr(c)!=="object"||c===null)return c;var w=c[Symbol.toPrimitive];if(w!==void 0){var E=w.call(c,"string");if(wr(E)!=="object")return E;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(r.key),wr(u)==="symbol"?u:String(u)),r)}var u}var $d=function(){function a(r){(function(u,c){if(!(u instanceof c))throw new TypeError("Cannot call a class as a function")})(this,a),this.container=r.container,this.barWidth=r.barWidth,this.container.style.backgroundImage="url('".concat(r.url,"')"),this.events=r.events}var s,h;return s=a,(h=[{key:"resize",value:function(r,u,c){this.container.style.width="".concat(r,"px"),this.container.style.height="".concat(u,"px"),this.container.style.top="".concat(2-u,"px"),this.barWidth=c}},{key:"show",value:function(){this.container.style.display="block",this.events&&this.events.trigger("thumbnails_show")}},{key:"move",value:function(r){this.container.style.backgroundPosition="-".concat(160*(Math.ceil(r/this.barWidth*100)-1),"px 0"),this.container.style.left="".concat(Math.min(Math.max(r-this.container.offsetWidth/2,-10),this.barWidth-150),"px")}},{key:"hide",value:function(){this.container.style.display="none",this.events&&this.events.trigger("thumbnails_hide")}}])&&_d(s.prototype,h),Object.defineProperty(s,"prototype",{writable:!1}),a}();const Wd=$d;function xr(a){return xr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},xr(a)}function jd(a,s){for(var h=0;h<s.length;h++){var r=s[h];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,(u=function(c,f){if(xr(c)!=="object"||c===null)return c;var w=c[Symbol.toPrimitive];if(w!==void 0){var E=w.call(c,"string");if(xr(E)!=="object")return E;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(r.key),xr(u)==="symbol"?u:String(u)),r)}var u}var hn,co=!0,Wi=!1,Hd=function(){function a(r){(function(u,c){if(!(u instanceof c))throw new TypeError("Cannot call a class as a function")})(this,a),this.player=r,this.autoHideTimer=0,W.isMobile||(this.setAutoHideHandler=this.setAutoHide.bind(this),this.player.container.addEventListener("mousemove",this.setAutoHideHandler),this.player.container.addEventListener("click",this.setAutoHideHandler),this.player.on("play",this.setAutoHideHandler),this.player.on("pause",this.setAutoHideHandler)),this.initPlayButton(),this.initThumbnails(),this.initPlayedBar(),this.initFullButton(),this.initQualityButton(),this.initScreenshotButton(),this.player.options.subtitle&&typeof this.player.options.subtitle.url=="string"&&this.initSubtitleButton(),this.initHighlights(),this.initAirplayButton(),this.initChromecastButton(),W.isMobile||this.initVolumeButton()}var s,h;return s=a,(h=[{key:"initPlayButton",value:function(){var r=this;this.player.template.playButton.addEventListener("click",function(){r.player.toggle()}),this.player.template.mobilePlayButton.addEventListener("click",function(){r.player.toggle()}),W.isMobile?(this.player.template.videoWrap.addEventListener("click",function(){r.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){r.toggle()})):this.player.options.preventClickToggle||(this.player.template.videoWrap.addEventListener("click",function(){r.player.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){r.player.toggle()}))}},{key:"initHighlights",value:function(){var r=this;this.player.on("durationchange",function(){if(r.player.video.duration!==1&&r.player.video.duration!==1/0&&r.player.options.highlight){var u=r.player.template.playedBarWrap.querySelectorAll(".dplayer-highlight");[].slice.call(u,0).forEach(function(w){r.player.template.playedBarWrap.removeChild(w)});for(var c=0;c<r.player.options.highlight.length;c++)if(r.player.options.highlight[c].text&&r.player.options.highlight[c].time){var f=document.createElement("div");f.classList.add("dplayer-highlight"),f.style.left=r.player.options.highlight[c].time/r.player.video.duration*100+"%",f.innerHTML='<span class="dplayer-highlight-text">'+r.player.options.highlight[c].text+"</span>",r.player.template.playedBarWrap.insertBefore(f,r.player.template.playedBarTime)}}})}},{key:"initThumbnails",value:function(){var r=this;this.player.options.video.thumbnails&&(this.thumbnails=new Wd({container:this.player.template.barPreview,barWidth:this.player.template.barWrap.offsetWidth,url:this.player.options.video.thumbnails,events:this.player.events}),this.player.on("loadedmetadata",function(){r.thumbnails.resize(160,r.player.video.videoHeight/r.player.video.videoWidth*160,r.player.template.barWrap.offsetWidth)}))}},{key:"initPlayedBar",value:function(){var r=this,u=function(f){var w=((f.clientX||f.changedTouches[0].clientX)-W.getBoundingClientRectViewLeft(r.player.template.playedBarWrap))/r.player.template.playedBarWrap.clientWidth;w=Math.max(w,0),w=Math.min(w,1),r.player.bar.set("played",w,"width"),r.player.template.ptime.innerHTML=W.secondToTime(w*r.player.video.duration)},c=function f(w){document.removeEventListener(W.nameMap.dragEnd,f),document.removeEventListener(W.nameMap.dragMove,u);var E=((w.clientX||w.changedTouches[0].clientX)-W.getBoundingClientRectViewLeft(r.player.template.playedBarWrap))/r.player.template.playedBarWrap.clientWidth;E=Math.max(E,0),E=Math.min(E,1),r.player.bar.set("played",E,"width"),r.player.seek(r.player.bar.get("played")*r.player.video.duration),r.player.timer.enable("progress")};this.player.template.playedBarWrap.addEventListener(W.nameMap.dragStart,function(){r.player.timer.disable("progress"),document.addEventListener(W.nameMap.dragMove,u),document.addEventListener(W.nameMap.dragEnd,c)}),this.player.template.playedBarWrap.addEventListener(W.nameMap.dragMove,function(f){if(r.player.video.duration){var w=r.player.template.playedBarWrap.getBoundingClientRect().left,E=(f.clientX||f.changedTouches[0].clientX)-w;if(E<0||E>r.player.template.playedBarWrap.offsetWidth)return;var D=r.player.video.duration*(E/r.player.template.playedBarWrap.offsetWidth);W.isMobile&&r.thumbnails&&r.thumbnails.show(),r.thumbnails&&r.thumbnails.move(E),r.player.template.playedBarTime.style.left="".concat(E-(D>=3600?25:20),"px"),r.player.template.playedBarTime.innerText=W.secondToTime(D),r.player.template.playedBarTime.classList.remove("hidden")}}),this.player.template.playedBarWrap.addEventListener(W.nameMap.dragEnd,function(){W.isMobile&&r.thumbnails&&r.thumbnails.hide()}),W.isMobile||(this.player.template.playedBarWrap.addEventListener("mouseenter",function(){r.player.video.duration&&(r.thumbnails&&r.thumbnails.show(),r.player.template.playedBarTime.classList.remove("hidden"))}),this.player.template.playedBarWrap.addEventListener("mouseleave",function(){r.player.video.duration&&(r.thumbnails&&r.thumbnails.hide(),r.player.template.playedBarTime.classList.add("hidden"))}))}},{key:"initFullButton",value:function(){var r=this;this.player.template.browserFullButton.addEventListener("click",function(){r.player.fullScreen.toggle("browser")}),this.player.template.webFullButton.addEventListener("click",function(){r.player.fullScreen.toggle("web")})}},{key:"initVolumeButton",value:function(){var r=this,u=function(f){var w=f||window.event,E=((w.clientX||w.changedTouches[0].clientX)-W.getBoundingClientRectViewLeft(r.player.template.volumeBarWrap)-5.5)/35;r.player.volume(E)},c=function f(){document.removeEventListener(W.nameMap.dragEnd,f),document.removeEventListener(W.nameMap.dragMove,u),r.player.template.volumeButton.classList.remove("dplayer-volume-active")};this.player.template.volumeBarWrapWrap.addEventListener("click",function(f){var w=f||window.event,E=((w.clientX||w.changedTouches[0].clientX)-W.getBoundingClientRectViewLeft(r.player.template.volumeBarWrap)-5.5)/35;r.player.volume(E)}),this.player.template.volumeBarWrapWrap.addEventListener(W.nameMap.dragStart,function(){document.addEventListener(W.nameMap.dragMove,u),document.addEventListener(W.nameMap.dragEnd,c),r.player.template.volumeButton.classList.add("dplayer-volume-active")}),this.player.template.volumeButtonIcon.addEventListener("click",function(){r.player.video.muted?(r.player.video.muted=!1,r.player.switchVolumeIcon(),r.player.bar.set("volume",r.player.volume(),"width")):(r.player.video.muted=!0,r.player.template.volumeIcon.innerHTML=jt.volumeOff,r.player.bar.set("volume",0,"width"))})}},{key:"initQualityButton",value:function(){var r=this;this.player.options.video.quality&&this.player.template.qualityList.addEventListener("click",function(u){u.target.classList.contains("dplayer-quality-item")&&r.player.switchQuality(u.target.dataset.index)})}},{key:"initScreenshotButton",value:function(){var r=this;this.player.options.screenshot&&this.player.template.camareButton.addEventListener("click",function(){var u,c=document.createElement("canvas");c.width=r.player.video.videoWidth,c.height=r.player.video.videoHeight,c.getContext("2d").drawImage(r.player.video,0,0,c.width,c.height),c.toBlob(function(f){u=URL.createObjectURL(f);var w=document.createElement("a");w.href=u,w.download="DPlayer.png",w.style.display="none",document.body.appendChild(w),w.click(),document.body.removeChild(w),URL.revokeObjectURL(u),r.player.events.trigger("screenshot",u)})})}},{key:"initAirplayButton",value:function(){this.player.options.airplay&&(window.WebKitPlaybackTargetAvailabilityEvent?this.player.video.addEventListener("webkitplaybacktargetavailabilitychanged",function(r){r.availability==="available"?this.template.airplayButton.disable=!1:this.template.airplayButton.disable=!0,this.template.airplayButton.addEventListener("click",function(){this.video.webkitShowPlaybackTargetPicker()}.bind(this))}.bind(this.player)):this.player.template.airplayButton.style.display="none")}},{key:"initChromecast",value:function(){var r=window.document.createElement("script");r.setAttribute("type","text/javascript"),r.setAttribute("src","https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"),window.document.body.appendChild(r),window.__onGCastApiAvailable=function(u){if(u){var c=new(hn=window.chrome.cast).SessionRequest(hn.media.DEFAULT_MEDIA_RECEIVER_APP_ID),f=new hn.ApiConfig(c,function(){},function(w){w===hn.ReceiverAvailability.AVAILABLE&&console.log("chromecast: ",w)});hn.initialize(f,function(){})}}}},{key:"initChromecastButton",value:function(){var r=this;if(this.player.options.chromecast){co&&(co=!1,this.initChromecast());var u=function(f,w){r.currentMedia=w},c=function(f){console.error("Error launching media",f)};this.player.template.chromecastButton.addEventListener("click",function(){Wi?(Wi=!1,r.currentMedia.stop(),r.session.stop(),r.initChromecast()):(Wi=!0,hn.requestSession(function(f){var w,E,D;r.session=f,w=r.player.options.video.url,E=new hn.media.MediaInfo(w),D=new hn.media.LoadRequest(E),r.session?r.session.loadMedia(D,u.bind(r,"loadMedia"),c).play():window.open(w)},function(f){f.code==="cancel"?r.session=void 0:console.error("Error selecting a cast device",f)}))})}}},{key:"initSubtitleButton",value:function(){var r=this;this.player.events.on("subtitle_show",function(){r.player.template.subtitleButton.dataset.balloon=r.player.tran("hide-subs"),r.player.template.subtitleButtonInner.style.opacity="",r.player.user.set("subtitle",1)}),this.player.events.on("subtitle_hide",function(){r.player.template.subtitleButton.dataset.balloon=r.player.tran("show-subs"),r.player.template.subtitleButtonInner.style.opacity="0.4",r.player.user.set("subtitle",0)}),this.player.template.subtitleButton.addEventListener("click",function(){r.player.subtitle.toggle()})}},{key:"setAutoHide",value:function(){var r=this;this.show(),clearTimeout(this.autoHideTimer),this.autoHideTimer=setTimeout(function(){!r.player.video.played.length||r.player.paused||r.disableAutoHide||r.hide()},3e3)}},{key:"show",value:function(){this.player.container.classList.remove("dplayer-hide-controller")}},{key:"hide",value:function(){this.player.container.classList.add("dplayer-hide-controller"),this.player.setting.hide(),this.player.comment&&this.player.comment.hide()}},{key:"isShow",value:function(){return!this.player.container.classList.contains("dplayer-hide-controller")}},{key:"toggle",value:function(){this.isShow()?this.hide():this.show()}},{key:"destroy",value:function(){W.isMobile||(this.player.container.removeEventListener("mousemove",this.setAutoHideHandler),this.player.container.removeEventListener("click",this.setAutoHideHandler)),clearTimeout(this.autoHideTimer)}}])&&jd(s.prototype,h),Object.defineProperty(s,"prototype",{writable:!1}),a}();const Ud=Hd;function Er(a){return Er=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Er(a)}function Qd(a,s){for(var h=0;h<s.length;h++){var r=s[h];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,(u=function(c,f){if(Er(c)!=="object"||c===null)return c;var w=c[Symbol.toPrimitive];if(w!==void 0){var E=w.call(c,"string");if(Er(E)!=="object")return E;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(r.key),Er(u)==="symbol"?u:String(u)),r)}var u}var Yd=function(){function a(r){var u=this;(function(D,M){if(!(D instanceof M))throw new TypeError("Cannot call a class as a function")})(this,a),this.player=r,this.player.template.mask.addEventListener("click",function(){u.hide()}),this.player.template.settingButton.addEventListener("click",function(){u.show()}),this.loop=this.player.options.loop,this.player.template.loopToggle.checked=this.loop,this.player.template.loop.addEventListener("click",function(){u.player.template.loopToggle.checked=!u.player.template.loopToggle.checked,u.player.template.loopToggle.checked?u.loop=!0:u.loop=!1,u.hide()}),this.showDanmaku=this.player.user.get("danmaku"),this.showDanmaku||this.player.danmaku&&this.player.danmaku.hide(),this.player.template.showDanmakuToggle.checked=this.showDanmaku,this.player.template.showDanmaku.addEventListener("click",function(){u.player.template.showDanmakuToggle.checked=!u.player.template.showDanmakuToggle.checked,u.player.template.showDanmakuToggle.checked?(u.showDanmaku=!0,u.player.danmaku.show()):(u.showDanmaku=!1,u.player.danmaku.hide()),u.player.user.set("danmaku",u.showDanmaku?1:0),u.hide()}),this.unlimitDanmaku=this.player.user.get("unlimited"),this.player.template.unlimitDanmakuToggle.checked=this.unlimitDanmaku,this.player.template.unlimitDanmaku.addEventListener("click",function(){u.player.template.unlimitDanmakuToggle.checked=!u.player.template.unlimitDanmakuToggle.checked,u.player.template.unlimitDanmakuToggle.checked?(u.unlimitDanmaku=!0,u.player.danmaku.unlimit(!0)):(u.unlimitDanmaku=!1,u.player.danmaku.unlimit(!1)),u.player.user.set("unlimited",u.unlimitDanmaku?1:0),u.hide()}),this.player.template.speed.addEventListener("click",function(){u.player.template.settingBox.classList.add("dplayer-setting-box-narrow"),u.player.template.settingBox.classList.add("dplayer-setting-box-speed")});for(var c=function(D){u.player.template.speedItem[D].addEventListener("click",function(){u.player.speed(u.player.template.speedItem[D].dataset.speed),u.hide()})},f=0;f<this.player.template.speedItem.length;f++)c(f);if(this.player.danmaku){this.player.on("danmaku_opacity",function(D){u.player.bar.set("danmaku",D,"width"),u.player.user.set("opacity",D)}),this.player.danmaku.opacity(this.player.user.get("opacity"));var w=function(D){var M=D||window.event,ne=((M.clientX||M.changedTouches[0].clientX)-W.getBoundingClientRectViewLeft(u.player.template.danmakuOpacityBarWrap))/130;ne=Math.max(ne,0),ne=Math.min(ne,1),u.player.danmaku.opacity(ne)},E=function D(){document.removeEventListener(W.nameMap.dragEnd,D),document.removeEventListener(W.nameMap.dragMove,w),u.player.template.danmakuOpacityBox.classList.remove("dplayer-setting-danmaku-active")};this.player.template.danmakuOpacityBarWrapWrap.addEventListener("click",function(D){var M=D||window.event,ne=((M.clientX||M.changedTouches[0].clientX)-W.getBoundingClientRectViewLeft(u.player.template.danmakuOpacityBarWrap))/130;ne=Math.max(ne,0),ne=Math.min(ne,1),u.player.danmaku.opacity(ne)}),this.player.template.danmakuOpacityBarWrapWrap.addEventListener(W.nameMap.dragStart,function(){document.addEventListener(W.nameMap.dragMove,w),document.addEventListener(W.nameMap.dragEnd,E),u.player.template.danmakuOpacityBox.classList.add("dplayer-setting-danmaku-active")})}}var s,h;return s=a,(h=[{key:"hide",value:function(){var r=this;this.player.template.settingBox.classList.remove("dplayer-setting-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),setTimeout(function(){r.player.template.settingBox.classList.remove("dplayer-setting-box-narrow"),r.player.template.settingBox.classList.remove("dplayer-setting-box-speed")},300),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.settingBox.classList.add("dplayer-setting-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}}])&&Qd(s.prototype,h),Object.defineProperty(s,"prototype",{writable:!1}),a}();const Kd=Yd;function Cr(a){return Cr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Cr(a)}function Xd(a,s){for(var h=0;h<s.length;h++){var r=s[h];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,(u=function(c,f){if(Cr(c)!=="object"||c===null)return c;var w=c[Symbol.toPrimitive];if(w!==void 0){var E=w.call(c,"string");if(Cr(E)!=="object")return E;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(r.key),Cr(u)==="symbol"?u:String(u)),r)}var u}var Gd=function(){function a(r){var u=this;(function(c,f){if(!(c instanceof f))throw new TypeError("Cannot call a class as a function")})(this,a),this.player=r,this.player.template.mask.addEventListener("click",function(){u.hide()}),this.player.template.commentButton.addEventListener("click",function(){u.show()}),this.player.template.commentSettingButton.addEventListener("click",function(){u.toggleSetting()}),this.player.template.commentColorSettingBox.addEventListener("click",function(){if(u.player.template.commentColorSettingBox.querySelector("input:checked+span")){var c=u.player.template.commentColorSettingBox.querySelector("input:checked").value;u.player.template.commentSettingFill.style.fill=c,u.player.template.commentInput.style.color=c,u.player.template.commentSendFill.style.fill=c}}),this.player.template.commentInput.addEventListener("click",function(){u.hideSetting()}),this.player.template.commentInput.addEventListener("keydown",function(c){(c||window.event).keyCode===13&&u.send()}),this.player.template.commentSendButton.addEventListener("click",function(){u.send()})}var s,h;return s=a,(h=[{key:"show",value:function(){this.player.controller.disableAutoHide=!0,this.player.template.controller.classList.add("dplayer-controller-comment"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.container.classList.add("dplayer-show-controller"),this.player.template.commentInput.focus()}},{key:"hide",value:function(){this.player.template.controller.classList.remove("dplayer-controller-comment"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.container.classList.remove("dplayer-show-controller"),this.player.controller.disableAutoHide=!1,this.hideSetting()}},{key:"showSetting",value:function(){this.player.template.commentSettingBox.classList.add("dplayer-comment-setting-open")}},{key:"hideSetting",value:function(){this.player.template.commentSettingBox.classList.remove("dplayer-comment-setting-open")}},{key:"toggleSetting",value:function(){this.player.template.commentSettingBox.classList.contains("dplayer-comment-setting-open")?this.hideSetting():this.showSetting()}},{key:"send",value:function(){var r=this;this.player.template.commentInput.blur(),this.player.template.commentInput.value.replace(/^\s+|\s+$/g,"")?this.player.danmaku.send({text:this.player.template.commentInput.value,color:W.color2Number(this.player.container.querySelector(".dplayer-comment-setting-color input:checked").value),type:parseInt(this.player.container.querySelector(".dplayer-comment-setting-type input:checked").value)},function(){r.player.template.commentInput.value="",r.hide()}):this.player.notice(this.player.tran("please-input-danmaku"))}}])&&Xd(s.prototype,h),Object.defineProperty(s,"prototype",{writable:!1}),a}();const Jd=Gd;function kr(a){return kr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},kr(a)}function Zd(a,s){for(var h=0;h<s.length;h++){var r=s[h];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,(u=function(c,f){if(kr(c)!=="object"||c===null)return c;var w=c[Symbol.toPrimitive];if(w!==void 0){var E=w.call(c,"string");if(kr(E)!=="object")return E;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(r.key),kr(u)==="symbol"?u:String(u)),r)}var u}var eu=function(){function a(r){(function(u,c){if(!(u instanceof c))throw new TypeError("Cannot call a class as a function")})(this,a),this.player=r,this.doHotKeyHandler=this.doHotKey.bind(this),this.cancelFullScreenHandler=this.cancelFullScreen.bind(this),this.player.options.hotkey&&document.addEventListener("keydown",this.doHotKeyHandler),document.addEventListener("keydown",this.cancelFullScreenHandler)}var s,h;return s=a,(h=[{key:"doHotKey",value:function(r){if(this.player.focus){var u=document.activeElement.tagName.toUpperCase(),c=document.activeElement.getAttribute("contenteditable");if(u!=="INPUT"&&u!=="TEXTAREA"&&c!==""&&c!=="true"){var f,w=r||window.event;switch(w.keyCode){case 32:w.preventDefault(),this.player.toggle();break;case 37:if(w.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime-5),this.player.controller.setAutoHide();break;case 39:if(w.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime+5),this.player.controller.setAutoHide();break;case 38:w.preventDefault(),f=this.player.volume()+.1,this.player.volume(f);break;case 40:w.preventDefault(),f=this.player.volume()-.1,this.player.volume(f)}}}}},{key:"cancelFullScreen",value:function(r){(r||window.event).keyCode===27&&this.player.fullScreen.isFullScreen("web")&&this.player.fullScreen.cancel("web")}},{key:"destroy",value:function(){this.player.options.hotkey&&document.removeEventListener("keydown",this.doHotKeyHandler),document.removeEventListener("keydown",this.cancelFullScreenHandler)}}])&&Zd(s.prototype,h),Object.defineProperty(s,"prototype",{writable:!1}),a}();const tu=eu;function Br(a){return Br=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Br(a)}function nu(a,s){for(var h=0;h<s.length;h++){var r=s[h];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,(u=function(c,f){if(Br(c)!=="object"||c===null)return c;var w=c[Symbol.toPrimitive];if(w!==void 0){var E=w.call(c,"string");if(Br(E)!=="object")return E;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(r.key),Br(u)==="symbol"?u:String(u)),r)}var u}var ru=function(){function a(r){var u=this;(function(c,f){if(!(c instanceof f))throw new TypeError("Cannot call a class as a function")})(this,a),this.player=r,this.shown=!1,Array.prototype.slice.call(this.player.template.menuItem).forEach(function(c,f){u.player.options.contextmenu[f].click&&c.addEventListener("click",function(){u.player.options.contextmenu[f].click(u.player),u.hide()})}),this.contextmenuHandler=function(c){if(u.shown)u.hide();else{var f=c||window.event;f.preventDefault();var w=u.player.container.getBoundingClientRect();u.show(f.clientX-w.left,f.clientY-w.top),u.player.template.mask.addEventListener("click",function(){u.hide()})}},this.player.container.addEventListener("contextmenu",this.contextmenuHandler)}var s,h;return s=a,(h=[{key:"show",value:function(r,u){this.player.template.menu.classList.add("dplayer-menu-show");var c=this.player.container.getBoundingClientRect();r+this.player.template.menu.offsetWidth>=c.width?(this.player.template.menu.style.right=c.width-r+"px",this.player.template.menu.style.left="initial"):(this.player.template.menu.style.left=r+"px",this.player.template.menu.style.right="initial"),u+this.player.template.menu.offsetHeight>=c.height?(this.player.template.menu.style.bottom=c.height-u+"px",this.player.template.menu.style.top="initial"):(this.player.template.menu.style.top=u+"px",this.player.template.menu.style.bottom="initial"),this.player.template.mask.classList.add("dplayer-mask-show"),this.shown=!0,this.player.events.trigger("contextmenu_show")}},{key:"hide",value:function(){this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.template.menu.classList.remove("dplayer-menu-show"),this.shown=!1,this.player.events.trigger("contextmenu_hide")}},{key:"destroy",value:function(){this.player.container.removeEventListener("contextmenu",this.contextmenuHandler)}}])&&nu(s.prototype,h),Object.defineProperty(s,"prototype",{writable:!1}),a}();const iu=ru;function Sr(a){return Sr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Sr(a)}function au(a,s){for(var h=0;h<s.length;h++){var r=s[h];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,(u=function(c,f){if(Sr(c)!=="object"||c===null)return c;var w=c[Symbol.toPrimitive];if(w!==void 0){var E=w.call(c,"string");if(Sr(E)!=="object")return E;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(r.key),Sr(u)==="symbol"?u:String(u)),r)}var u}var ou=function(){function a(r){var u=this;(function(c,f){if(!(c instanceof f))throw new TypeError("Cannot call a class as a function")})(this,a),this.container=r.template.infoPanel,this.template=r.template,this.video=r.video,this.player=r,this.template.infoPanelClose.addEventListener("click",function(){u.hide()})}var s,h;return s=a,(h=[{key:"show",value:function(){this.beginTime=Date.now(),this.update(),this.player.timer.enable("info"),this.player.timer.enable("fps"),this.container.classList.remove("dplayer-info-panel-hide")}},{key:"hide",value:function(){this.player.timer.disable("info"),this.player.timer.disable("fps"),this.container.classList.add("dplayer-info-panel-hide")}},{key:"triggle",value:function(){this.container.classList.contains("dplayer-info-panel-hide")?this.show():this.hide()}},{key:"update",value:function(){this.template.infoVersion.innerHTML="v".concat("1.27.1"," ").concat("v1.27.0-12-g4f61091"),this.template.infoType.innerHTML=this.player.type,this.template.infoUrl.innerHTML=this.player.options.video.url,this.template.infoResolution.innerHTML="".concat(this.player.video.videoWidth," x ").concat(this.player.video.videoHeight),this.template.infoDuration.innerHTML=this.player.video.duration,this.player.options.danmaku&&(this.template.infoDanmakuId.innerHTML=this.player.options.danmaku.id,this.template.infoDanmakuApi.innerHTML=this.player.options.danmaku.api,this.template.infoDanmakuAmount.innerHTML=this.player.danmaku.dan.length)}},{key:"fps",value:function(r){this.template.infoFPS.innerHTML="".concat(r.toFixed(1))}}])&&au(s.prototype,h),Object.defineProperty(s,"prototype",{writable:!1}),a}();const lu=ou;var su=o(568),du=o.n(su);function Ir(a){return Ir=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Ir(a)}function po(a,s){var h=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);s&&(r=r.filter(function(u){return Object.getOwnPropertyDescriptor(a,u).enumerable})),h.push.apply(h,r)}return h}function uu(a,s,h){return(s=fo(s))in a?Object.defineProperty(a,s,{value:h,enumerable:!0,configurable:!0,writable:!0}):a[s]=h,a}function ho(a,s){for(var h=0;h<s.length;h++){var r=s[h];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,fo(r.key),r)}}function fo(a){var s=function(h,r){if(Ir(h)!=="object"||h===null)return h;var u=h[Symbol.toPrimitive];if(u!==void 0){var c=u.call(h,"string");if(Ir(c)!=="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(h)}(a);return Ir(s)==="symbol"?s:String(s)}var mo=0,$n=[],cu=function(){function a(u){var c=this;(function(f,w){if(!(f instanceof w))throw new TypeError("Cannot call a class as a function")})(this,a),this.options=function(f){var w={container:f.element||document.getElementsByClassName("dplayer")[0],live:!1,autoplay:!1,theme:"#b7daff",loop:!1,lang:(navigator.language||navigator.browserLanguage).toLowerCase(),screenshot:!1,airplay:!0,chromecast:!1,hotkey:!0,preload:"metadata",volume:.7,playbackSpeed:[.5,.75,1,1.25,1.5,2],apiBackend:Ts,video:{},contextmenu:[],mutex:!0,pluginOptions:{hls:{},flv:{},dash:{},webtorrent:{}},preventClickToggle:!1};for(var E in w)w.hasOwnProperty(E)&&!f.hasOwnProperty(E)&&(f[E]=w[E]);return f.video&&!f.video.type&&(f.video.type="auto"),_i(f.danmaku)==="object"&&f.danmaku&&!f.danmaku.user&&(f.danmaku.user="DIYgod"),f.subtitle&&(!f.subtitle.type&&(f.subtitle.type="webvtt"),!f.subtitle.fontSize&&(f.subtitle.fontSize="20px"),!f.subtitle.bottom&&(f.subtitle.bottom="40px"),!f.subtitle.color&&(f.subtitle.color="#fff")),f.video.quality&&(f.video.url=f.video.quality[f.video.defaultQuality].url),f.lang&&(f.lang=f.lang.toLowerCase()),f.contextmenu=f.contextmenu.concat([{key:"video-info",click:function(D){D.infoPanel.triggle()}},{key:"about-author",link:"https://diygod.me"},{text:"DPlayer v".concat("1.27.1"),link:"https://github.com/MoePlayer/DPlayer"}]),f}(function(f){for(var w=1;w<arguments.length;w++){var E=arguments[w]!=null?arguments[w]:{};w%2?po(Object(E),!0).forEach(function(D){uu(f,D,E[D])}):Object.getOwnPropertyDescriptors?Object.defineProperties(f,Object.getOwnPropertyDescriptors(E)):po(Object(E)).forEach(function(D){Object.defineProperty(f,D,Object.getOwnPropertyDescriptor(E,D))})}return f}({preload:u.video.type==="webtorrent"?"none":"metadata"},u)),this.options.video.quality&&(this.qualityIndex=this.options.video.defaultQuality,this.quality=this.options.video.quality[this.options.video.defaultQuality]),this.tran=new Ls(this.options.lang).tran,this.events=new vd,this.user=new Bd(this),this.container=this.options.container,this.noticeList={},this.container.classList.add("dplayer"),this.options.danmaku||this.container.classList.add("dplayer-no-danmaku"),this.options.live?this.container.classList.add("dplayer-live"):this.container.classList.remove("dplayer-live"),W.isMobile&&this.container.classList.add("dplayer-mobile"),this.arrow=this.container.offsetWidth<=500,this.arrow&&this.container.classList.add("dplayer-arrow"),this.options.subtitle&&Array.isArray(this.options.subtitle.url)&&(this.options.subtitle.url.push({subtitle:"",lang:"off"}),this.options.subtitle.defaultSubtitle&&(typeof this.options.subtitle.defaultSubtitle=="string"?this.options.subtitle.index=this.options.subtitle.url.findIndex(function(f){return f.lang===c.options.subtitle.defaultSubtitle||f.name===c.options.subtitle.defaultSubtitle}):typeof this.options.subtitle.defaultSubtitle=="number"&&(this.options.subtitle.index=this.options.subtitle.defaultSubtitle)),(this.options.subtitle.index===-1||!this.options.subtitle.index||this.options.subtitle.index>this.options.subtitle.url.length-1)&&(this.options.subtitle.index=this.options.subtitle.url.findIndex(function(f){return f.lang===c.options.lang})),this.options.subtitle.index===-1&&(this.options.subtitle.index=this.options.subtitle.url.length-1)),this.template=new uo({container:this.container,options:this.options,index:mo,tran:this.tran}),this.video=this.template.video,this.bar=new Nd(this.template),this.bezel=new Fd(this.template.bezel),this.fullScreen=new Ed(this),this.controller=new Ud(this),this.options.danmaku&&(this.danmaku=new gd({player:this,container:this.template.danmaku,opacity:this.user.get("opacity"),callback:function(){setTimeout(function(){c.template.danmakuLoading.style.display="none",c.options.autoplay&&c.play()},0)},error:function(f){c.notice(f)},apiBackend:this.options.apiBackend,borderColor:this.options.theme,height:this.arrow?24:30,time:function(){return c.video.currentTime},unlimited:this.user.get("unlimited"),api:{id:this.options.danmaku.id,address:this.options.danmaku.api,token:this.options.danmaku.token,maximum:this.options.danmaku.maximum,addition:this.options.danmaku.addition,user:this.options.danmaku.user,speedRate:this.options.danmaku.speedRate},events:this.events,tran:function(f){return c.tran(f)}}),this.comment=new Jd(this)),this.setting=new Kd(this),this.plugins={},this.docClickFun=function(){c.focus=!1},this.containerClickFun=function(){c.focus=!0},document.addEventListener("click",this.docClickFun,!0),this.container.addEventListener("click",this.containerClickFun,!0),this.paused=!0,this.timer=new Rd(this),this.hotkey=new tu(this),this.contextmenu=new iu(this),this.initVideo(this.video,this.quality&&this.quality.type||this.options.video.type),this.infoPanel=new lu(this),!this.danmaku&&this.options.autoplay&&this.play(),mo++,$n.push(this)}var s,h,r;return s=a,h=[{key:"seek",value:function(u){u=Math.max(u,0),this.video.duration&&(u=Math.min(u,this.video.duration)),this.video.currentTime<u?this.notice("".concat(this.tran("ff").replace("%s",(u-this.video.currentTime).toFixed(0)))):this.video.currentTime>u&&this.notice("".concat(this.tran("rew").replace("%s",(this.video.currentTime-u).toFixed(0)))),this.video.currentTime=u,this.danmaku&&this.danmaku.seek(),this.bar.set("played",u/this.video.duration,"width"),this.template.ptime.innerHTML=W.secondToTime(u)}},{key:"play",value:function(u){var c=this;if(this.paused=!1,this.video.paused&&!W.isMobile&&this.bezel.switch(jt.play),this.template.playButton.innerHTML=jt.pause,this.template.mobilePlayButton.innerHTML=jt.pause,u||Z.resolve(this.video.play()).catch(function(){c.pause()}).then(function(){}),this.timer.enable("loading"),this.container.classList.remove("dplayer-paused"),this.container.classList.add("dplayer-playing"),this.danmaku&&this.danmaku.play(),this.options.mutex)for(var f=0;f<$n.length;f++)this!==$n[f]&&$n[f].pause()}},{key:"pause",value:function(u){this.paused=!0,this.container.classList.remove("dplayer-loading"),this.video.paused||W.isMobile||this.bezel.switch(jt.pause),this.template.playButton.innerHTML=jt.play,this.template.mobilePlayButton.innerHTML=jt.play,u||this.video.pause(),this.timer.disable("loading"),this.container.classList.remove("dplayer-playing"),this.container.classList.add("dplayer-paused"),this.danmaku&&this.danmaku.pause()}},{key:"switchVolumeIcon",value:function(){this.volume()>=.95?this.template.volumeIcon.innerHTML=jt.volumeUp:this.volume()>0?this.template.volumeIcon.innerHTML=jt.volumeDown:this.template.volumeIcon.innerHTML=jt.volumeOff}},{key:"volume",value:function(u,c,f){if(u=parseFloat(u),!isNaN(u)){u=Math.max(u,0),u=Math.min(u,1),this.bar.set("volume",u,"width");var w="".concat((100*u).toFixed(0),"%");this.template.volumeBarWrapWrap.dataset.balloon=w,c||this.user.set("volume",u),f||this.notice("".concat(this.tran("volume")," ").concat((100*u).toFixed(0),"%"),void 0,void 0,"volume"),this.video.volume=u,this.video.muted&&(this.video.muted=!1),this.switchVolumeIcon()}return this.video.volume}},{key:"toggle",value:function(){this.video.paused?this.play():this.pause()}},{key:"on",value:function(u,c){this.events.on(u,c)}},{key:"switchVideo",value:function(u,c){this.pause(),this.video.poster=u.pic?u.pic:"",this.video.src=u.url,this.initMSE(this.video,u.type||"auto"),c&&(this.template.danmakuLoading.style.display="block",this.bar.set("played",0,"width"),this.bar.set("loaded",0,"width"),this.template.ptime.innerHTML="00:00",this.template.danmaku.innerHTML="",this.danmaku&&this.danmaku.reload({id:c.id,address:c.api,token:c.token,maximum:c.maximum,addition:c.addition,user:c.user}))}},{key:"initMSE",value:function(u,c){var f=this;if(this.type=c,this.options.video.customType&&this.options.video.customType[c])Object.prototype.toString.call(this.options.video.customType[c])==="[object Function]"?this.options.video.customType[c](this.video,this):console.error("Illegal customType: ".concat(c));else switch(this.type==="auto"&&(/m3u8(#|\?|$)/i.exec(u.src)?this.type="hls":/.flv(#|\?|$)/i.exec(u.src)?this.type="flv":/.mpd(#|\?|$)/i.exec(u.src)?this.type="dash":this.type="normal"),this.type==="hls"&&(u.canPlayType("application/x-mpegURL")||u.canPlayType("application/vnd.apple.mpegURL"))&&(this.type="normal"),this.type){case"hls":if(window.Hls)if(window.Hls.isSupported()){var w=this.options.pluginOptions.hls,E=new window.Hls(w);this.plugins.hls=E,E.loadSource(u.src),E.attachMedia(u),this.events.on("destroy",function(){E.destroy(),delete f.plugins.hls})}else this.notice("Error: Hls is not supported.");else this.notice("Error: Can't find Hls.");break;case"flv":if(window.flvjs)if(window.flvjs.isSupported()){var D=window.flvjs.createPlayer(Object.assign(this.options.pluginOptions.flv.mediaDataSource||{},{type:"flv",url:u.src}),this.options.pluginOptions.flv.config);this.plugins.flvjs=D,D.attachMediaElement(u),D.load(),this.events.on("destroy",function(){D.unload(),D.detachMediaElement(),D.destroy(),delete f.plugins.flvjs})}else this.notice("Error: flvjs is not supported.");else this.notice("Error: Can't find flvjs.");break;case"dash":if(window.dashjs){var M=window.dashjs.MediaPlayer().create().initialize(u,u.src,!1),ne=this.options.pluginOptions.dash;M.updateSettings(ne),this.plugins.dash=M,this.events.on("destroy",function(){window.dashjs.MediaPlayer().reset(),delete f.plugins.dash})}else this.notice("Error: Can't find dashjs.");break;case"webtorrent":if(window.WebTorrent)if(window.WebTorrent.WEBRTC_SUPPORT){this.container.classList.add("dplayer-loading");var de=this.options.pluginOptions.webtorrent,ce=new window.WebTorrent(de);this.plugins.webtorrent=ce;var ue=u.src;u.src="",u.preload="metadata",u.addEventListener("durationchange",function(){return f.container.classList.remove("dplayer-loading")},{once:!0}),ce.add(ue,function(re){re.files.find(function(fe){return fe.name.endsWith(".mp4")}).renderTo(f.video,{autoplay:f.options.autoplay,controls:!1})}),this.events.on("destroy",function(){ce.remove(ue),ce.destroy(),delete f.plugins.webtorrent})}else this.notice("Error: Webtorrent is not supported.");else this.notice("Error: Can't find Webtorrent.")}}},{key:"initVideo",value:function(u,c){var f=this;this.initMSE(u,c),this.on("durationchange",function(){u.duration!==1&&u.duration!==1/0&&(f.template.dtime.innerHTML=W.secondToTime(u.duration))}),this.on("progress",function(){var D=u.buffered.length?u.buffered.end(u.buffered.length-1)/u.duration:0;f.bar.set("loaded",D,"width")}),this.on("error",function(){f.video.error&&f.tran&&f.notice&&f.type!=="webtorrent"&&f.notice(f.tran("video-failed"))}),this.on("ended",function(){f.bar.set("played",1,"width"),f.setting.loop?(f.seek(0),f.play()):f.pause(),f.danmaku&&(f.danmaku.danIndex=0)}),this.on("play",function(){f.paused&&f.play(!0)}),this.on("pause",function(){f.paused||f.pause(!0)}),this.on("timeupdate",function(){f.bar.set("played",f.video.currentTime/f.video.duration,"width");var D=W.secondToTime(f.video.currentTime);f.template.ptime.innerHTML!==D&&(f.template.ptime.innerHTML=D)});for(var w=function(D){u.addEventListener(f.events.videoEvents[D],function(M){f.events.trigger(f.events.videoEvents[D],M)})},E=0;E<this.events.videoEvents.length;E++)w(E);this.volume(this.user.get("volume"),!0,!0),this.options.subtitle&&(this.subtitle=new Td(this.template.subtitle,this.video,this.options.subtitle,this.events),Array.isArray(this.options.subtitle.url)&&(this.subtitles=new Od(this)),this.user.get("subtitle")||this.subtitle.hide())}},{key:"switchQuality",value:function(u){var c=this;if(u=typeof u=="string"?parseInt(u):u,this.qualityIndex!==u&&!this.switchingQuality){this.prevIndex=this.qualityIndex,this.qualityIndex=u,this.switchingQuality=!0,this.quality=this.options.video.quality[u],this.template.qualityButton.innerHTML=this.quality.name;var f=this.video.paused;this.video.pause();var w=du()({current:!1,pic:null,screenshot:this.options.screenshot,preload:"auto",url:this.quality.url,subtitle:this.options.subtitle}),E=new DOMParser().parseFromString(w,"text/html").body.firstChild;this.template.videoWrap.insertBefore(E,this.template.videoWrap.getElementsByTagName("div")[0]),this.prevVideo=this.video,this.video=E,this.initVideo(this.video,this.quality.type||this.options.video.type),this.seek(this.prevVideo.currentTime),this.notice("".concat(this.tran("switching-quality").replace("%q",this.quality.name)),-1,void 0,"switch-quality"),this.events.trigger("quality_start",this.quality),this.on("canplay",function(){if(c.prevVideo){if(c.video.currentTime!==c.prevVideo.currentTime)return void c.seek(c.prevVideo.currentTime);c.template.videoWrap.removeChild(c.prevVideo),c.video.classList.add("dplayer-video-current"),f||c.video.play(),c.prevVideo=null,c.notice("".concat(c.tran("switched-quality").replace("%q",c.quality.name)),void 0,void 0,"switch-quality"),c.switchingQuality=!1,c.events.trigger("quality_end")}}),this.on("error",function(){c.video.error&&c.prevVideo&&(c.template.videoWrap.removeChild(c.video),c.video=c.prevVideo,f||c.video.play(),c.qualityIndex=c.prevIndex,c.quality=c.options.video.quality[c.qualityIndex],c.noticeTime=setTimeout(function(){c.template.notice.style.opacity=0,c.events.trigger("notice_hide")},3e3),c.prevVideo=null,c.switchingQuality=!1)})}}},{key:"notice",value:function(u){var c,f,w,E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2e3,D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.8,M=arguments.length>3?arguments[3]:void 0;if(M&&((c=document.getElementById("dplayer-notice-".concat(M)))&&(c.innerHTML=u),this.noticeList[M]&&(clearTimeout(this.noticeList[M]),this.noticeList[M]=null)),!c){var ne=uo.NewNotice(u,D,M);this.template.noticeList.appendChild(ne),c=ne}this.events.trigger("notice_show",c),E>0&&(this.noticeList[M]=setTimeout((f=c,w=this,function(){f.addEventListener("animationend",function(){w.template.noticeList.removeChild(f)}),f.classList.add("remove-notice"),w.events.trigger("notice_hide"),w.noticeList[M]=null}),E))}},{key:"resize",value:function(){this.danmaku&&this.danmaku.resize(),this.controller.thumbnails&&this.controller.thumbnails.resize(160,this.video.videoHeight/this.video.videoWidth*160,this.template.barWrap.offsetWidth),this.events.trigger("resize")}},{key:"speed",value:function(u){this.video.playbackRate=u}},{key:"destroy",value:function(){$n.splice($n.indexOf(this),1),this.pause(),document.removeEventListener("click",this.docClickFun,!0),this.container.removeEventListener("click",this.containerClickFun,!0),this.fullScreen.destroy(),this.hotkey.destroy(),this.contextmenu.destroy(),this.controller.destroy(),this.timer.destroy(),this.video.src="",this.container.innerHTML="",this.events.trigger("destroy")}}],r=[{key:"version",get:function(){return"1.27.1"}}],h&&ho(s.prototype,h),r&&ho(s,r),Object.defineProperty(s,"prototype",{writable:!1}),a}();const pu=cu;console.log(`
`.concat(" %c DPlayer v","1.27.1"," ").concat("v1.27.0-12-g4f61091"," %c https://dplayer.diygod.dev ",`
`,`
`),"color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;");const hu=pu})(),i.default})())}(ga)),ga.exports}var Zf=Jf();const em=Di(Zf),{sort:tm}=Va,nm=(e,t)=>e.time-t.time,rm=zn({props:{width:{type:Number,default:()=>960},height:{type:Number,default:()=>540}},setup(e,t){return{player:bn(null)}},computed:{video(){return this.player?.video??null}},methods:{setVideo(e){this.video.src=e},readDanmaku(e){const{danmaku:t}=this.player;t.dan=tm(e,nm),t.seek()},seekDanmaku(){this.player.danmaku.seek()},play(){this.player.play()},pause(){this.player.pause()},playpause(){this.player.toggle()},volume(e){return this.player.volume(e)},relativeVolume(e){return this.player.volume(this.video.volume+e)},relativeSeek(e){this.player.seek(this.video.currentTime+e)},speed(e,t){const{player:n,video:l}=this;e=+e,l.playbackRate=e,n.notice(`${e} 倍速播放中`,t,void 0,"speed")}},mounted(){const e=this,{container:t}=e.$refs,n=e.player=new em({container:t,volume:1,hotkey:!1,screenshot:!1,video:{},danmaku:{api:"api/",id:"0"},apiBackend:{send(l){l.error()},read(l){l.success([])}}});e.video.volume=1,e.video.crossOrigin=null,n.danmaku.opacity(.35)},beforeUnmount(){this.player.destroy(),this.player=null},render(){const e=this,{$slots:t,width:n,height:l}=e;return j("div",{class:"player-container player-force-show-controls player-hide-layers",style:{"--dplayer-width":n===0?"100%":n+"px","--dplayer-height":l+"px"}},[j("div",{ref:"container",class:"dplayer"}),t.default?.()])}}),{isArray:ba}=Array;function*im(e,t=0){const n={__proto__:null,1:"right",5:"top",4:"bottom"};for(const l of e){let o=l.p.split(",");yield{time:+o[0]+t,type:n[parseInt(o[1])]??0,color:parseInt(o[2]),author:o[3],text:l.m}}}function*am(e,t){const n=/^\[([^\[\]]+)\]/;for(const l of e){const o=String(l.author).match(n);t(o?.[1],l)&&(yield l)}}function*om(e,t=3.5){const{trunc:n}=Math,l=[];for(const o of e){const i=n(o.time);(l[i]??=[]).push(o)}for(const o of l)if(o!=null)if(o.length<t)yield*o;else{let i=0,d=n(o.length/t)||1;for(;i<o.length;i+=d)yield o[i]}}const lm=e=>{let t=e.title||(e.file?.name??"").replace(/\.[^.]+$/,"");const n=xa({name:t,list:e.list,index:e.index,loading:!1}),l=async()=>{try{n.loading=!0;const d=await Ef(n.name,e.file);ba(d.matches)&&(e.list=n.list=d.matches),n.index=d.isMatched?0:-1}catch(d){throw en.error(d.message),d}finally{n.loading=!1}};let o,i;Rt.confirm({title:"将视频关联到弹幕库",width:600,loading:!0,closable:!0,render(){return j(Ca,{padding:0,"dis-hover":!0},{title:()=>j(Ql,{modelValue:n.name,"onUpdate:modelValue"(d){n.name=d}},{append:()=>j(yt,{type:"primary",loading:n.loading,onClick:l},()=>"获取")}),default:()=>j("div",{class:"ivu-scroll-wrapper",style:"touch-action: none; height: 60vh"},[j("div",{class:"ivu-scroll-container",style:"height: 100%"},[j("div",{class:"ivu-scroll-content"},[j(Si,{onOnClick(d){n.index=d}},()=>[j(Nt,{name:-2,selected:n.index===-2},{default:()=>j("div",{class:"ivu-input-wrapper ivu-input-wrapper-default ivu-input-type",style:"width: 300px"},[j("input",{ref(d){o=d},type:"text",class:"ivu-input ivu-input-default",placeholder:"手动载入弹幕",onPaste(d){n.index=-2}})]),extra:()=>j("div",{class:"ivu-input-wrapper ivu-input-wrapper-default ivu-input-type",style:"width: 100px"},[j("input",{ref(d){i=d},type:"text",class:"ivu-input ivu-input-default",placeholder:"offset"})])}),Array.from(n.list,(d,g)=>j(Nt,{name:g,title:`[${xf[d.type]??d.type}]${d.animeTitle}`,label:d.episodeTitle,selected:g===n.index},{extra:()=>j("a",{href:bs(d.episodeId),target:"_blank"},["详细"])}))])])])])})},async onOk(){try{const{index:d}=n;let g;if(d===-2){const v=JSON.parse(o.value);ba(v)?g=v:ba(v.comments)&&(g=v.comments)}else if(d>=0){const v=n.list[d];v!=null&&(g=await Cf(v.episodeId))}if(g==null){en.warning("未选中");return}e.index=d,e.loadDanmaku(g,+i.value||0)}catch(d){throw en.error("弹幕加载失败"),d}finally{Rt.remove()}}})},sm=zn({name:"ddplay-api",props:{file:{type:Blob},title:{type:String,default:""}},setup(e){const t=et(),n=t.proxy;$l(()=>[e.file,e.title],(o,i)=>{n.list=[],n.index=-1,n.$emit("danmaku",n.danmaku=[]),l.value=""});const l=bn("");return{list:[],index:-1,danmaku:[],platforms:l}},methods:{loadDanmaku(e,t=0){const n=this,l={"!":0};let o=im(e,t);o=am(o,(g,v)=>(g??="!",g==="Gamer"&&(g="#"+g),l[g]=+(l[g]??0)+1,g[0]!=="#")),o=om(o);const i=Array.from(o),d=Object.entries(l).sort((g,v)=>v[1]-g[1]).map(([g,v])=>`${g}[${v}]`).join(",");n.platforms=`(${d})`,n.$emit("danmaku",n.danmaku=i),en.success(`加载了 ${i.length} 条弹幕 ${n.platforms}`)},handleMatch(){if(typeof _l!="function"){en.error("缺少 GM_xmlhttpRequest");return}this.title||this.file!=null||en.warning("未选择文件"),lm(this)}},render(e,t){const n=this;return j(Nt,{title:`弹弹Play API[${n.danmaku.length}] ${n.platforms}`},t[226]??={extra:()=>j(Vr,null,t[227]??=()=>[j(yt,{onClick:n.handleMatch},t[228]??=()=>"加载弹幕")])})}}),{toFixed:dm}=vu,{startsWith:um}=Pa,{from:Ei}=Array,{findIndex:xs}=Va,{mediaSession:Ci}=navigator;let dn=wa;typeof MediaSession=="function"&&(dn=Na(MediaSession.prototype.setActionHandler,Ci));const Tn=Ei(function*(e){for(;e<100;e+=1)yield e;for(;e<300;e+=5)yield e;for(;e<=500;e+=10)yield e}(50),e=>e/100),cm=Fl(function*(){for(const e of[.5,.75,1,2,3,4,5])yield[xs(Tn,t=>t===e),`${e}×`]}()),va="Media Player",fm=zn({name:va,setup(e){const t={size:1,visiblePause:!1};try{Object.assign(t,JSON.parse(localStorage.getItem("player-options")))}catch{}const{abort:n,signal:l}=us();return Wl(n),{signal:l,playerOptions:t,sizes:["960*0","960*540","1280*720"],relativeSeeks:[-95,-10,-5,{value:-1/30,slot:"-1帧"},{value:1/30,slot:"1帧"},5,10,85],imageType:"image/png",viewer:null,keyboard:new ef(Qt,l),playList:bn(null),player:bn(null)}},data(){const{sizes:e,playerOptions:t}=this;return{size:e[t.size]??e[1],list:[],file:null,title:null,preservesPitch:!0,speedIndex:xs(Tn,n=>n===1)}},watch:{title:{handler(e){e?(go(`${e} - ${va}`),Ci!=null&&(Ci.metadata=new MediaMetadata({title:e})),setTimeout(en.message,0,"info","加载: "+e)):go(va)},immediate:!0,flush:"sync"},preservesPitch(e){this.player.video.preservesPitch=e},speedIndex(e){this.player.video.playbackRate=Tn[e]}},methods:{options(){const e=this,{sizes:t}=e,n=xa(e.playerOptions),l=xa({loading:!1,error:!1});Rt.confirm({title:"设置",width:600,render(){return j("div",null,[j(Si,null,()=>[j(Nt,{title:"默认尺寸"},{extra:()=>j(wo,{type:"button",modelValue:n.size,"onUpdate:modelValue"(o){n.size=o}},()=>Ei(t,(o,i)=>j(xo,{label:i},()=>o)))}),j(Nt,{title:"页面不可见时暂停"},{extra:()=>j(Go,{modelValue:n.visiblePause,"onUpdate:modelValue"(o){n.visiblePause=o}})}),j(Nt,{title:"油猴脚本"},{extra:()=>j(Vr,null,()=>[zr==null?null:j(yt,{type:l.error?"error":"default",loading:l.loading,async onClick(){try{l.loading=!0,l.error=!1;const o=await Lf(),i=URL.createObjectURL(new Blob([o],{type:"text/plain"}));Hi(i)}catch(o){throw l.error=!0,o}finally{l.loading=!1}}},()=>za),j(yt,{onClick(){const o=Tf(),i=URL.createObjectURL(new Blob([o],{type:"text/plain"}));Hi(i)}},()=>"GM_fetch")])}),j(Nt,{title:"web+player: 协议处理器"},{extra:()=>j(yt,{type:"button",onClick(){const o=new URL(location.pathname,location.href).href;navigator.registerProtocolHandler("web+player",`${o}#!%s`)}},()=>"注册")})])])},onOk(){localStorage.setItem("player-options",JSON.stringify(e.playerOptions))}})},handleChange(e){this.list=e},async loadVideoAndPlay(e,t){e instanceof Blob?await this.loadVideoFromFile(e):await this.loadVideoFromUrl(e,t),this.player.play()},$_loadVideo(e){const t=this,{player:n}=t,{video:l}=n;return URL.revokeObjectURL(l.src),l.src=e,t.player.video.playbackRate=Tn[t.speedIndex],Ao(l,"canplay")},loadVideoFromUrl(e,t){const n=this;if(um(e,"web+player:")){const i=new URL(e).searchParams;e=i.get("url"),t=i.get("title")}e=String(e),t??="";let l=n.$_loadVideo(e,t);return Ll({title:t,url:e}),n.title=t,n.file=null,/^https?:/.test(e)&&zr!=null&&(l=l.catch(n.loadVideoBackupGmxhr)),n.canplay=l,l},loadVideoFromFile(e){const t=this;let n=URL.createObjectURL(e),l=(e.name??"").replace(/\.[^.]+$/,"");const o=t.$_loadVideo(n,l),i={title:l};return(t.file==null?Ll:Da)(i),t.title=l,t.file=e,t.canplay=o,o},loadVideoBackupGmxhr(e){if(zr==null)return;const{title:t,player:n}=this,l=n.player,o=e?.target??n.video,{src:i,error:d}=o;d!=null&&console.warn(d,d.code,d.message),Rt.confirm({title:"视频加载失败",content:i+"<br>要使用 GM_xmlhttpRequest 吗？",onOk(){zr({url:i,responseType:"blob",onload(g){vm.$_loadVideo(URL.createObjectURL(g.response),t).then(()=>{l.notice("使用 GM_xmlhttpRequest 加载成功",void 0,void 0,"gmxhr")})},onerror({error:g}){l.notice("使用 GM_xmlhttpRequest 加载失败: "+g,void 0,void 0,"gmxhr")},onprogress({loaded:g,total:v,lengthComputable:p}){l.notice(p?`${Ui(g)}/${Ui(v)}(${dm(100*g/v,2)}%)`:`${Ui(g)}/unknow`,0,void 0,"gmxhr")}})}})},prev(){this.playList.prev()},next(){this.playList.next()},handleDanmaku(e){this.player.readDanmaku(e)},relativeSeek(e){this.player.relativeSeek(e)},relativeVolume(e){this.player.relativeVolume(e)},playpause(){this.player.playpause()},async retry(){const{video:e}=this.player;if(e==null)return;const{src:t,currentTime:n,paused:l}=e;setTimeout(()=>{e.src=t},0),await Ao(e,"loadedmetadata"),e.currentTime=n,l||e.play()},captureImage(){const{video:e}=this.player;if(e.videoWidth===0||e.videoHeight===0){en.warning("没有视频");return}xu(e,this.imageType).then(t=>{const{image:n}=this.$refs;URL.revokeObjectURL(n.src),n.src=URL.createObjectURL(t),n.dataset.filename=Eu(e.currentTime,"-")+".png",en.info("截图成功")},t=>{throw en.error("截图失败"),t})},saveImage(){const{image:e}=this.$refs,{src:t}=e;t&&Hi(t,e.dataset.filename)},showImage(){const e=this,t=new ls(e.$refs.image,{hidden(){t.destroy(),e.viewer=null}});e.viewer=t,t.show()}},mounted(){const e=this,{signal:t}=e,n=d=>{let g=d!=null?rf(d):nf();try{g==null&&(g=af())}finally{if(g==null){e.title="";return}const{title:v,url:p}=g;p!=null?(e.$refs.input.currentValue=p,e.$_loadVideo(p,v),e.title=v):(Da(null),e.title="")}};wu(()=>{We(window,"popstate",n,{capture:!0,signal:t}),n()});const{keyboard:l}=e;let o=1;l.set(" ",null,e.playpause),l.set("ArrowUp",()=>e.relativeVolume(.1)),l.set("ArrowDown",()=>e.relativeVolume(-.1)),l.set("PageUp",e.prev),l.set("PageDown",e.next),l.set("ArrowLeft",null,()=>e.relativeSeek(-5)),l.set("ArrowRight",(d,g)=>{g===1&&({playbackRate:o}=e.player.video,e.player.speed(3,0))},(d,g)=>{if(g>0){e.player.speed(o,1);return}e.relativeSeek(5)});let i=!1;We(Qt,"visibilitychange",d=>{const{visiblePause:g}=e.playerOptions;switch(d.target.visibilityState){case"visible":g&&i&&e.player.play(),i=!1,e.player.seekDanmaku();break;case"hidden":i=!(e.player.video.paused??!0),g&&i&&e.player.pause();break}},{signal:t}),We(window,"beforeunload",d=>{const g=e.player.video.duration;g===g&&d.preventDefault()},{capture:!0,signal:t}),Ci!=null&&(dn("seekbackward",()=>e.relativeSeek(-5)),dn("seekforward",()=>e.relativeSeek(5)),dn("previoustrack",e.prev),dn("nexttrack",e.next),Zh(t,d=>{dn("seekbackward",null),dn("seekforward",null),dn("previoustrack",null),dn("nexttrack",null)}))},beforeUnmount(){this.title=null},render(e,t,n,l,o,i){const d=this,g=d.size.split("*");return[j("div",{class:"container",style:"margin:5px auto"},[j(Yl,{gutter:6},t[387]??=()=>[j(Ea,{span:12},t[388]??=()=>[j(Ql,{ref:"input",search:!0,enterButton:"提交",onOnSearch:d.loadVideoFromUrl}),j(Xf,{style:"margin-top:6px",ref:"drop",global:!0,accept:"audio/*,video/*",onChange:d.handleChange})]),j(Ea,{span:12},t[403]??=()=>[j(Ca,{padding:0},t[404]??=()=>[j(Si,{style:"padding:0px"},t[405]??=()=>[j(Nt,{title:"　"},t[406]??={extra:()=>j(Vr,null,t[407]??=()=>[j(yt,{onClick:d.retry},()=>"重试"),j(yt,{onClick:d.options},()=>"设置"),j(yt,{onClick:d.captureImage},()=>"截图"),j(yt,{onClick:d.saveImage},()=>"保存截图")])}),j(Gf,{ref:"playList",list:d.list,onPlay:d.loadVideoAndPlay}),j(Nt,{title:"尺寸"},t[419]??={extra:()=>j(wo,{type:"button",modelValue:d.size,"onUpdate:modelValue":t[423]??=v=>{d.size=v}},t[424]??=()=>Ei(d.sizes,v=>j(xo,{label:v},()=>v)))}),j(Nt,{title:"快进快退"},t[426]??={extra:()=>j(Vr,null,t[427]??=()=>Ei(d.relativeSeeks,v=>{const{value:p,slot:m}=typeof v=="number"?{value:v,slot:String(v)}:v;return j(yt,{onClick(){d.relativeSeek(p)}},()=>m)}))}),j(Nt,null,t[432]??={default:()=>[j(ep,t[434]??={placement:"top",transfer:!0},t[436]??={default:()=>[j(Kt,{type:"ios-arrow-up"}),`速度: ${Tn[d.speedIndex]}×`],list:()=>[j("ul",{class:"ivu-dropdown-menu"},[j("li",{class:"ivu-dropdown-item",style:"margin-top:20px"},[j(yh,{style:"width:650px;margin-left:50px;margin-right:50px",min:0,max:Tn.length-1,step:1,marks:cm,tipFormat:t[447]??=v=>`${Tn[v]}×`,modelValue:d.speedIndex,"onUpdate:modelValue":t[449]??=v=>{d.speedIndex=v}})])])]})],extra:()=>[j(Go,{title:"保持音高",size:"large",modelValue:d.preservesPitch,"onUpdate:modelValue":t[461]??=v=>{d.preservesPitch=v}})]}),j(sm,{ref:"danmaku",file:d.file,title:d.title,onDanmaku:d.handleDanmaku})])])])])]),j(rm,{ref:"player",width:+g[0],height:+g[1]},t[477]??=()=>j(Qf,{video:d.player?.video,style:t[478]??={position:"relative",bottom:"unset"}})),j("div",{class:"container",style:"margin:5px auto 240px"},[j(Ca,{style:"width:274px"},t[483]??=()=>j("img",{ref:"image",style:"width:100%",onClick:d.showImage}))])]}});export{fm as App};
