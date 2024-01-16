var ki=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var Xt=(e,t,n)=>(ki(e,t,"read from private field"),n?n.call(e):t.get(e)),Mn=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},On=(e,t,n,o)=>(ki(e,t,"write to private field"),o?o.call(e,n):t.set(e,n),n);import{createElementBlock as Y,normalizeClass as G,normalizeStyle as Le,openBlock as q,getCurrentInstance as De,nextTick as ya,Fragment as Vn,withDirectives as ot,vShow as lt,renderSlot as de,createCommentVNode as le,toDisplayString as je,createVNode as z,withCtx as fe,Transition as Ct,createBaseVNode as Z,withKeys as dr,createTextVNode as Pt,h as ve,resolveComponent as nt,createBlock as Ne,mergeProps as Er,resolveDynamicComponent as kd,withModifiers as Re,TransitionGroup as Bd,renderList as Sd,createApp as Xn,Teleport as Cr,getPropDesc as ct,bindCall as He,bind as kr,call as Br,nextTick$1 as Id,on as Ve,doc as st,noop as cr,fromEntries as Td,$string as Sr,isPlainObject as Ld,fetch as To,$array as Lo,gmxhr as Rn,defineComponent as Ut,shallowRef as Mt,onMounted as Dd,watch as Do,onBeforeUnmount as zo,empty as Xa,off as ka,shallowReactive as pr,setTitle as Bi,download as Ga,waitEvent as Si,captureVideoToImage as zd,formatTime as Md,onLoad as Od,formatSize as Za,$number as _d}from"./index-82f0de60.js";const me=typeof window<"u",xt=function(){return me&&document.addEventListener?function(e,t,n,o=!1){e&&t&&n&&e.addEventListener(t,n,o)}:function(e,t,n){e&&t&&n&&e.attachEvent("on"+t,n)}}(),Et=function(){return me&&document.removeEventListener?function(e,t,n,o=!1){e&&t&&e.removeEventListener(t,n,o)}:function(e,t,n){e&&t&&e.detachEvent("on"+t,n)}}(),_e=(e,t)=>{const n=e.__vccOpts||e;for(const[o,s]of t)n[o]=s;return n},Ii="ivu-icon",Nd={name:"Icon",props:{type:{type:String,default:""},size:[Number,String],color:String,custom:{type:String,default:""}},computed:{classes(){return[`${Ii}`,{[`${Ii}-${this.type}`]:this.type!=="",[`${this.custom}`]:this.custom!==""}]},styles(){let e={};return this.size&&(e["font-size"]=`${this.size}px`),this.color&&(e.color=this.color),e}}};function Fd(e,t,n,o,s,d){return q(),Y("i",{class:G(d.classes),style:Le(d.styles)},null,6)}const At=_e(Nd,[["render",Fd]]);function Te(e,t){for(let n=0;n<t.length;n++)if(e===t[n])return!0;return!1}let Ja;function Rd(e){if(me&&(e||Ja===void 0)){const t=document.createElement("div");t.style.width="100%",t.style.height="200px";const n=document.createElement("div"),o=n.style;o.position="absolute",o.top=0,o.left=0,o.pointerEvents="none",o.visibility="hidden",o.width="200px",o.height="150px",o.overflow="hidden",n.appendChild(t),document.body.appendChild(n);const s=t.offsetWidth;n.style.overflow="scroll";let d=t.offsetWidth;s===d&&(d=n.clientWidth),document.body.removeChild(n),Ja=s-d}return Ja}function qd(e){return{"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regExp","[object Undefined]":"undefined","[object Null]":"null","[object Object]":"object"}[Object.prototype.toString.call(e)]}function Ba(e){const t=qd(e);let n;if(t==="array")n=[];else if(t==="object")n={};else return e;if(t==="array")for(let o=0;o<e.length;o++)n.push(Ba(e[o]));else if(t==="object")for(let o in e)n[o]=Ba(e[o]);return n}function Ti(e,t,n){typeof t=="string"?n=[t]:n=t;let o=e.$parent,s=o.$options.name;for(;o&&(!s||n.indexOf(s)<0);)o=o.$parent,o&&(s=o.$options.name);return o}function Pd(){if(!me)return;const e=t=>({media:t,matches:!1,on(){},off(){}});window.matchMedia=window.matchMedia||e}async function Vd(e,t="unnamed"){if(!me)return Promise.reject();try{const o=await(await fetch(e)).blob();if(!o)return Promise.reject();const s=URL.createObjectURL(o),d=document.createElement("a");return d.setAttribute("href",s),d.setAttribute("download",t),d.click(),URL.revokeObjectURL(s),Promise.resolve()}catch(n){return Promise.reject(n)}}function Mo(e=32){const t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",n=t.length;let o="";for(let s=0;s<e;s++)o+=t.charAt(Math.floor(Math.random()*n));return o}const Ir={props:{to:{type:[Object,String]},replace:{type:Boolean,default:!1},target:{type:String,validator(e){return Te(e,["_blank","_self","_parent","_top"])},default:"_self"},append:{type:Boolean,required:!1,default:!1}},computed:{linkUrl(){if(typeof this.to!=="string")return null;if(this.to.includes("//"))return this.to;const t=this.$router;if(t){const n=this.$route,o=t.resolve(this.to,n,this.append);return o?o.href:this.to}return this.to}},methods:{handleOpenTo(){if(!me)return;const e=this.$router;let t=this.to;if(e){const n=this.$route,o=e.resolve(this.to,n,this.append);t=o?o.href:this.to}typeof this.to!="string"&&window.open(t)},handleClick(e=!1){const t=this.$router;me&&(e?this.handleOpenTo():t?typeof this.to=="string"&&this.to.includes("//")?window.location.href=this.to:this.replace?this.$router.replace(this.to,()=>{}):this.$router.push(this.to,()=>{}):window.location.href=this.to)},handleCheckClick(e,t=!1){if(this.to){if(this.target==="_blank")return this.handleOpenTo(),!1;e.preventDefault(),this.handleClick(t)}}}};var zt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Oo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}let Gn=0,Aa=0;function za(){Gn++}function $d(){Aa++}function Ud(e){me&&typeof window.viewuiplus<"u"&&("langs"in viewuiplus||(viewuiplus.langs={}),viewuiplus.langs[e.i.locale]=e)}const _o={i:{locale:"zh-CN",select:{placeholder:"请选择",noMatch:"无匹配数据",loading:"加载中"},table:{noDataText:"暂无数据",noFilteredDataText:"暂无筛选结果",confirmFilter:"筛选",resetFilter:"重置",clearFilter:"全部",sumText:"合计"},datepicker:{selectDate:"选择日期",selectTime:"选择时间",startTime:"开始时间",endTime:"结束时间",clear:"清空",ok:"确定",datePanelLabel:"[yyyy年] [m月]",month:"月",month1:"1 月",month2:"2 月",month3:"3 月",month4:"4 月",month5:"5 月",month6:"6 月",month7:"7 月",month8:"8 月",month9:"9 月",month10:"10 月",month11:"11 月",month12:"12 月",year:"年",weekStartDay:"0",weeks:{sun:"日",mon:"一",tue:"二",wed:"三",thu:"四",fri:"五",sat:"六"},months:{m1:"1月",m2:"2月",m3:"3月",m4:"4月",m5:"5月",m6:"6月",m7:"7月",m8:"8月",m9:"9月",m10:"10月",m11:"11月",m12:"12月"}},transfer:{titles:{source:"源列表",target:"目的列表"},filterPlaceholder:"请输入搜索内容",notFoundText:"列表为空"},modal:{okText:"确定",cancelText:"取消"},poptip:{okText:"确定",cancelText:"取消"},page:{prev:"上一页",next:"下一页",total:"共",item:"条",items:"条",prev5:"向前 5 页",next5:"向后 5 页",page:"条/页",goto:"跳至",p:"页"},rate:{star:"星",stars:"星"},time:{before:"前",after:"后",just:"刚刚",seconds:"秒",minutes:"分钟",hours:"小时",days:"天"},tree:{emptyText:"暂无数据"},image:{zoomIn:"放大",zoomOut:"缩小",rotateLeft:"左旋转",rotateRight:"右旋转",fail:"失败",preview:"预览"}}};Ud(_o);const jd=/(%|)\{([0-9a-zA-Z_]+)\}/g;function Wd(){function e(n,o){return Object.prototype.hasOwnProperty.call(n,o)}function t(n,...o){return o.length===1&&typeof o[0]=="object"&&(o=o[0]),(!o||!o.hasOwnProperty)&&(o={}),n===void 0?"":n.replace(jd,(s,d,p,y)=>{let w;return n[y-1]==="{"&&n[y+s.length]==="}"?p:(w=e(o,p)?o[p]:null,w??"")})}return t}const Qd=Wd();let Hd=_o,Yd=function(){if(Reflect.has(this,"$t"))return this.$t(...arguments)};const Kd=function(e,t){let n=Yd.apply(this,arguments);if(n!=null)return n;const o=e.split(".");let s=Hd;for(let d=0,p=o.length;d<p;d++){const y=o[d];if(n=s[y],d===p-1)return Qd(n,t);if(!n)return"";s=n}return""},Tr={methods:{t(...e){return Kd.apply(this,e)}}},Xd={data(){return{globalConfig:{}}},created(){const e=De();this.globalConfig=e.appContext.config.globalProperties.$VIEWUI}},Zn={inject:{FormInstance:{default:""},FormItemInstance:{default:null}},computed:{itemDisabled(){let e=this.disabled;return!e&&this.FormInstance&&(e=this.FormInstance.disabled),e?!0:null}},methods:{handleFormItemChange(e,t){this.FormItemInstance&&(e==="blur"?this.FormItemInstance.formBlur(t):e==="change"&&this.FormItemInstance.formChange(t))}}},Gd=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important
`,Zd=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];let er={},ft;function Jd(e,t=!1){if(!me)return;const n=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(t&&er[n])return er[n];const o=window.getComputedStyle(e),s=o.getPropertyValue("box-sizing")||o.getPropertyValue("-moz-box-sizing")||o.getPropertyValue("-webkit-box-sizing"),d=parseFloat(o.getPropertyValue("padding-bottom"))+parseFloat(o.getPropertyValue("padding-top")),p=parseFloat(o.getPropertyValue("border-bottom-width"))+parseFloat(o.getPropertyValue("border-top-width")),w={sizingStyle:Zd.map(m=>`${m}:${o.getPropertyValue(m)}`).join(";"),paddingSize:d,borderSize:p,boxSizing:s};return t&&n&&(er[n]=w),w}function ec(e,t=null,n=null,o=!1){me&&!ft&&(ft=document.createElement("textarea"),document.body.appendChild(ft)),e.getAttribute("wrap")?ft.setAttribute("wrap",e.getAttribute("wrap")):ft.removeAttribute("wrap");let{paddingSize:s,borderSize:d,boxSizing:p,sizingStyle:y}=Jd(e,o);ft.setAttribute("style",`${y};${Gd}`),ft.value=e.value||e.placeholder||"";let w=Number.MIN_SAFE_INTEGER,m=Number.MAX_SAFE_INTEGER,A=ft.scrollHeight,x;if(p==="border-box"?A=A+d:p==="content-box"&&(A=A-s),t!==null||n!==null){ft.value=" ";let f=ft.scrollHeight-s;t!==null&&(w=f*t,p==="border-box"&&(w=w+s+d),A=Math.max(w,A)),n!==null&&(m=f*n,p==="border-box"&&(m=m+s+d),x=A>m?"":"hidden",A=Math.min(m,A))}return n||(x="hidden"),{height:`${A}px`,minHeight:`${w}px`,maxHeight:`${m}px`,overflowY:x}}const Ie="ivu-input",tc={name:"Input",mixins:[Zn],emits:["on-enter","on-search","on-keydown","on-keypress","on-keyup","on-click","on-focus","on-blur","on-change","on-input-change","on-clear","update:modelValue"],props:{type:{validator(e){return Te(e,["text","textarea","password","url","email","date","number","tel"])},default:"text"},modelValue:{type:[String,Number],default:""},size:{validator(e){return Te(e,["small","large","default"])},default(){const e=De().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.size===""?"default":e.$VIEWUI.size}},placeholder:{type:String,default:""},maxlength:{type:[String,Number]},disabled:{type:Boolean,default:!1},icon:String,autosize:{type:[Boolean,Object],default:!1},rows:{type:Number,default:2},readonly:{type:Boolean,default:!1},name:{type:String},number:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},spellcheck:{type:Boolean,default:!1},autocomplete:{type:String,default:"off"},clearable:{type:Boolean,default:!1},elementId:{type:String},wrap:{validator(e){return Te(e,["hard","soft"])},default:"soft"},prefix:{type:String,default:""},suffix:{type:String,default:""},search:{type:Boolean,default:!1},enterButton:{type:[Boolean,String],default:!1},showWordLimit:{type:Boolean,default:!1},password:{type:Boolean,default:!1},border:{type:Boolean,default:!0}},data(){return{currentValue:this.modelValue,prefixCls:Ie,slotReady:!1,textareaStyles:{},isOnComposition:!1,showPassword:!1,clearableIconOffset:0}},computed:{currentType(){let e=this.type;return e==="password"&&this.password&&this.showPassword&&(e="text"),e},prepend(){let e=!1;return this.type!=="textarea"&&(e=this.$slots.prepend!==void 0),e},append(){let e=!1;return this.type!=="textarea"&&(e=this.$slots.append!==void 0),e},showPrefix(){let e=!1;return this.type!=="textarea"&&(e=this.prefix!==""||this.$slots.prefix!==void 0),e},showSuffix(){let e=!1;return this.type!=="textarea"&&(e=this.suffix!==""||this.$slots.suffix!==void 0),e},wrapClasses(){return[`${Ie}-wrapper`,{[`${Ie}-wrapper-${this.size}`]:!!this.size,[`${Ie}-type-${this.type}`]:this.type,[`${Ie}-group`]:this.prepend||this.append||this.search&&this.enterButton,[`${Ie}-group-${this.size}`]:(this.prepend||this.append||this.search&&this.enterButton)&&!!this.size,[`${Ie}-group-with-prepend`]:this.prepend,[`${Ie}-group-with-append`]:this.append||this.search&&this.enterButton,[`${Ie}-hide-icon`]:this.append,[`${Ie}-with-search`]:this.search&&this.enterButton,[`${Ie}-wrapper-disabled`]:this.itemDisabled}]},inputClasses(){return[`${Ie}`,{[`${Ie}-${this.size}`]:!!this.size,[`${Ie}-disabled`]:this.itemDisabled,[`${Ie}-no-border`]:!this.border,[`${Ie}-with-prefix`]:this.showPrefix,[`${Ie}-with-suffix`]:this.showSuffix||this.search&&this.enterButton===!1}]},textareaClasses(){return[`${Ie}`,{[`${Ie}-disabled`]:this.itemDisabled,[`${Ie}-no-border`]:!this.border}]},upperLimit(){return this.maxlength},textLength(){return typeof this.modelValue=="number"?String(this.modelValue).length:(this.modelValue||"").length},clearableStyles(){const e={};let t=this.clearableIconOffset;return t&&(e.transform=`translateX(-${t}px)`),e}},methods:{handleEnter(e){this.$emit("on-enter",e),this.search&&this.$emit("on-search",this.currentValue)},handleKeydown(e){this.$emit("on-keydown",e)},handleKeypress(e){this.$emit("on-keypress",e)},handleKeyup(e){this.$emit("on-keyup",e)},handleIconClick(e){this.$emit("on-click",e)},handleFocus(e){this.$emit("on-focus",e)},handleBlur(e){this.$emit("on-blur",e),Ti(this,["DatePicker","TimePicker","Cascader","Search"])||this.handleFormItemChange("blur",this.currentValue)},handleComposition(e){e.type==="compositionstart"&&(this.isOnComposition=!0),e.type==="compositionend"&&(this.isOnComposition=!1,this.handleInput(e))},handleInput(e){if(this.isOnComposition)return;let t=e.target.value;this.number&&t!==""&&(t=Number.isNaN(Number(t))?t:Number(t)),this.$emit("update:modelValue",t),this.setCurrentValue(t),this.$emit("on-change",e)},handleChange(e){this.$emit("on-input-change",e)},setCurrentValue(e){e!==this.currentValue&&(ya(()=>{this.resizeTextarea()}),this.currentValue=e,Ti(this,["DatePicker","TimePicker","Cascader","Search"])||this.handleFormItemChange("change",e))},resizeTextarea(){const e=this.autosize;if(!e||this.type!=="textarea")return!1;const t=e.minRows,n=e.maxRows;this.textareaStyles=ec(this.$refs.textarea,t,n)},focus(e){const t=this.type==="textarea"?this.$refs.textarea:this.$refs.input;t.focus(e);const{cursor:n}=e||{};if(n){const o=t.value.length;switch(n){case"start":t.setSelectionRange(0,0);break;case"end":t.setSelectionRange(o,o);break;default:t.setSelectionRange(0,o)}}},blur(){this.type==="textarea"?this.$refs.textarea.blur():this.$refs.input.blur()},handleClear(){const e={target:{value:""}};this.$emit("update:modelValue",""),this.setCurrentValue(""),this.$emit("on-change",e),this.$emit("on-clear")},handleSearch(){if(this.itemDisabled)return!1;this.$refs.input.focus(),this.$emit("on-search",this.currentValue)},handleToggleShowPassword(){if(this.itemDisabled)return!1;this.showPassword=!this.showPassword,this.focus();const e=this.currentValue.length;setTimeout(()=>{this.$refs.input.setSelectionRange(e,e)},0)},handleCalcIconOffset(){const e=this.$el.querySelectorAll(".ivu-input-group-append")[0];e?this.clearableIconOffset=e.offsetWidth:this.clearableIconOffset=0}},watch:{modelValue(e){this.setCurrentValue(e)},type(){ya(this.handleCalcIconOffset)}},mounted(){this.slotReady=!0,this.resizeTextarea(),this.handleCalcIconOffset()},updated(){ya(this.handleCalcIconOffset)}},nc={key:4,class:"ivu-input-suffix"},ac={key:5,class:"ivu-input-word-count"},rc={key:0,class:"ivu-icon ivu-icon-ios-eye-outline"},ic={key:1,class:"ivu-icon ivu-icon-ios-eye-off-outline"},oc=["id","autocomplete","spellcheck","type","placeholder","disabled","maxlength","readonly","name","value","number","autofocus"],lc={key:0,class:"ivu-icon ivu-icon-ios-search"},sc={key:9,class:"ivu-input-prefix"},dc=["id","wrap","autocomplete","spellcheck","placeholder","disabled","rows","maxlength","readonly","name","value","autofocus"],cc={key:0,class:"ivu-input-word-count"};function pc(e,t,n,o,s,d){return q(),Y("div",{class:G(d.wrapClasses)},[n.type!=="textarea"?(q(),Y(Vn,{key:0},[d.prepend?ot((q(),Y("div",{key:0,class:G([s.prefixCls+"-group-prepend"])},[de(e.$slots,"prepend")],2)),[[lt,s.slotReady]]):le("",!0),n.clearable&&s.currentValue&&!e.itemDisabled?(q(),Y("i",{key:1,class:G(["ivu-icon",["ivu-icon-ios-close-circle",s.prefixCls+"-icon",s.prefixCls+"-icon-clear",s.prefixCls+"-icon-normal"]]),onClick:t[0]||(t[0]=(...p)=>d.handleClear&&d.handleClear(...p)),style:Le(d.clearableStyles)},null,6)):n.icon?(q(),Y("i",{key:2,class:G(["ivu-icon",["ivu-icon-"+n.icon,s.prefixCls+"-icon",s.prefixCls+"-icon-normal"]]),onClick:t[1]||(t[1]=(...p)=>d.handleIconClick&&d.handleIconClick(...p))},null,2)):n.search&&n.enterButton===!1?(q(),Y("i",{key:3,class:G(["ivu-icon ivu-icon-ios-search",[s.prefixCls+"-icon",s.prefixCls+"-icon-normal",s.prefixCls+"-search-icon"]]),onClick:t[2]||(t[2]=(...p)=>d.handleSearch&&d.handleSearch(...p))},null,2)):d.showSuffix?(q(),Y("span",nc,[de(e.$slots,"suffix",{},()=>[n.suffix?(q(),Y("i",{key:0,class:G(["ivu-icon",["ivu-icon-"+n.suffix]])},null,2)):le("",!0)])])):n.showWordLimit?(q(),Y("span",ac,je(d.textLength)+"/"+je(d.upperLimit),1)):n.password?(q(),Y("span",{key:6,class:"ivu-input-suffix",onClick:t[3]||(t[3]=(...p)=>d.handleToggleShowPassword&&d.handleToggleShowPassword(...p))},[s.showPassword?(q(),Y("i",rc)):(q(),Y("i",ic))])):le("",!0),z(Ct,{name:"fade"},{default:fe(()=>[n.icon?le("",!0):(q(),Y("i",{key:0,class:G(["ivu-icon ivu-icon-ios-loading ivu-load-loop",[s.prefixCls+"-icon",s.prefixCls+"-icon-validate"]])},null,2))]),_:1}),Z("input",{id:n.elementId,autocomplete:n.autocomplete,spellcheck:n.spellcheck,ref:"input",type:d.currentType,class:G(d.inputClasses),placeholder:n.placeholder,disabled:e.itemDisabled,maxlength:n.maxlength,readonly:n.readonly,name:n.name,value:s.currentValue,number:n.number,autofocus:n.autofocus,onKeyup:[t[4]||(t[4]=dr((...p)=>d.handleEnter&&d.handleEnter(...p),["enter"])),t[5]||(t[5]=(...p)=>d.handleKeyup&&d.handleKeyup(...p))],onKeypress:t[6]||(t[6]=(...p)=>d.handleKeypress&&d.handleKeypress(...p)),onKeydown:t[7]||(t[7]=(...p)=>d.handleKeydown&&d.handleKeydown(...p)),onFocus:t[8]||(t[8]=(...p)=>d.handleFocus&&d.handleFocus(...p)),onBlur:t[9]||(t[9]=(...p)=>d.handleBlur&&d.handleBlur(...p)),onCompositionstart:t[10]||(t[10]=(...p)=>d.handleComposition&&d.handleComposition(...p)),onCompositionupdate:t[11]||(t[11]=(...p)=>d.handleComposition&&d.handleComposition(...p)),onCompositionend:t[12]||(t[12]=(...p)=>d.handleComposition&&d.handleComposition(...p)),onInput:t[13]||(t[13]=(...p)=>d.handleInput&&d.handleInput(...p)),onChange:t[14]||(t[14]=(...p)=>d.handleChange&&d.handleChange(...p))},null,42,oc),d.append?ot((q(),Y("div",{key:7,class:G([s.prefixCls+"-group-append"])},[de(e.$slots,"append")],2)),[[lt,s.slotReady]]):n.search&&n.enterButton?(q(),Y("div",{key:8,class:G([s.prefixCls+"-group-append",s.prefixCls+"-search"]),onClick:t[15]||(t[15]=(...p)=>d.handleSearch&&d.handleSearch(...p))},[n.enterButton===!0?(q(),Y("i",lc)):(q(),Y(Vn,{key:1},[Pt(je(n.enterButton),1)],64))],2)):d.showPrefix?(q(),Y("span",sc,[de(e.$slots,"prefix",{},()=>[n.prefix?(q(),Y("i",{key:0,class:G(["ivu-icon",["ivu-icon-"+n.prefix]])},null,2)):le("",!0)])])):le("",!0)],64)):(q(),Y(Vn,{key:1},[Z("textarea",{id:n.elementId,wrap:n.wrap,autocomplete:n.autocomplete,spellcheck:n.spellcheck,ref:"textarea",class:G(d.textareaClasses),style:Le(s.textareaStyles),placeholder:n.placeholder,disabled:e.itemDisabled,rows:n.rows,maxlength:n.maxlength,readonly:n.readonly,name:n.name,value:s.currentValue,autofocus:n.autofocus,onKeyup:[t[16]||(t[16]=dr((...p)=>d.handleEnter&&d.handleEnter(...p),["enter"])),t[17]||(t[17]=(...p)=>d.handleKeyup&&d.handleKeyup(...p))],onKeypress:t[18]||(t[18]=(...p)=>d.handleKeypress&&d.handleKeypress(...p)),onKeydown:t[19]||(t[19]=(...p)=>d.handleKeydown&&d.handleKeydown(...p)),onFocus:t[20]||(t[20]=(...p)=>d.handleFocus&&d.handleFocus(...p)),onBlur:t[21]||(t[21]=(...p)=>d.handleBlur&&d.handleBlur(...p)),onCompositionstart:t[22]||(t[22]=(...p)=>d.handleComposition&&d.handleComposition(...p)),onCompositionupdate:t[23]||(t[23]=(...p)=>d.handleComposition&&d.handleComposition(...p)),onCompositionend:t[24]||(t[24]=(...p)=>d.handleComposition&&d.handleComposition(...p)),onInput:t[25]||(t[25]=(...p)=>d.handleInput&&d.handleInput(...p))},`
            `,46,dc),n.showWordLimit?(q(),Y("span",cc,je(d.textLength)+"/"+je(d.upperLimit),1)):le("",!0)],64))],2)}const No=_e(tc,[["render",pc]]),Tt="ivu-btn",qe={name:"Button",mixins:[Ir,Zn],components:{Icon:At},emits:["click"],props:{type:{validator(e){return Te(e,["default","primary","dashed","text","info","success","warning","error"])},default:"default"},shape:{validator(e){return Te(e,["circle","circle-outline"])}},size:{validator(e){return Te(e,["small","large","default"])},default(){const e=De().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.size===""?"default":e.$VIEWUI.size}},loading:Boolean,disabled:Boolean,htmlType:{default:"button",validator(e){return Te(e,["button","submit","reset"])}},icon:{type:String,default:""},customIcon:{type:String,default:""},long:{type:Boolean,default:!1},ghost:{type:Boolean,default:!1}},computed:{showSlot(){return!!this.$slots.default},classes(){return[`${Tt}`,`${Tt}-${this.type}`,{[`${Tt}-long`]:this.long,[`${Tt}-${this.shape}`]:!!this.shape,[`${Tt}-${this.size}`]:this.size!=="default",[`${Tt}-loading`]:this.loading!=null&&this.loading,[`${Tt}-icon-only`]:!this.showSlot&&(!!this.icon||!!this.customIcon||this.loading),[`${Tt}-ghost`]:this.ghost}]},isHrefPattern(){const{to:e}=this;return!!e},tagName(){const{isHrefPattern:e}=this;return e?"a":"button"},tagProps(){const{isHrefPattern:e}=this;if(e){const{linkUrl:t,target:n}=this;return{href:t,target:n}}else{const{htmlType:t}=this;return{type:t}}}},methods:{handleClickLink(e){this.$emit("click",e);const t=e.ctrlKey||e.metaKey;this.handleCheckClick(e,t)}},render(){let e;this.tagName==="button"?e="button":this.tagName==="a"&&(e="a");let t=[];return this.loading&&t.push(ve(At,{class:"ivu-load-loop",type:"ios-loading"})),(this.icon||this.customIcon)&&!this.loading&&t.push(ve(At,{type:this.icon,custom:this.customIcon})),this.$slots.default&&t.push(ve("span",{ref:"slot"},this.$slots.default())),ve(e,{class:this.classes,disabled:this.itemDisabled,onClick:this.handleClickLink,...this.tagProps},t)}},da="ivu-btn-group",uc={name:"ButtonGroup",props:{size:{validator(e){return Te(e,["small","large","default"])},default(){const e=De().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.size===""?"default":e.$VIEWUI.size}},shape:{validator(e){return Te(e,["circle","circle-outline"])}},vertical:{type:Boolean,default:!1}},computed:{classes(){return[`${da}`,{[`${da}-${this.size}`]:!!this.size,[`${da}-${this.shape}`]:!!this.shape,[`${da}-vertical`]:this.vertical}]}}};function hc(e,t,n,o,s,d){return q(),Y("div",{class:G(d.classes)},[de(e.$slots,"default")],2)}const $n=_e(uc,[["render",hc]]),_n="ivu-radio-group";let fc=0;const mc=Date.now(),yc=()=>`ivuRadioGroup_${mc}_${fc++}`,Ac={name:"RadioGroup",mixins:[Zn],emits:["update:modelValue","on-change"],provide(){return{RadioGroupInstance:this}},props:{modelValue:{type:[String,Number],default:""},size:{validator(e){return Te(e,["small","large","default"])},default(){const e=De().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.size===""?"default":e.$VIEWUI.size}},type:{validator(e){return Te(e,["button"])}},vertical:{type:Boolean,default:!1},name:{type:String,default:yc},buttonStyle:{validator(e){return Te(e,["default","solid"])},default:"default"}},data(){return{currentValue:this.modelValue,children:[]}},computed:{classes(){return[`${_n}`,{[`${_n}-${this.size}`]:!!this.size,[`ivu-radio-${this.size}`]:!!this.size,[`${_n}-${this.type}`]:!!this.type,[`${_n}-button-${this.buttonStyle}`]:this.type==="button"&&this.buttonStyle!=="default",[`${_n}-vertical`]:this.vertical}]}},methods:{change(e){this.currentValue=e.value,this.$emit("update:modelValue",e.value),this.$emit("on-change",e.value),this.handleFormItemChange("change",e.value)}},watch:{modelValue(){this.currentValue!==this.modelValue&&(this.currentValue=this.modelValue)}}},gc=["name"];function bc(e,t,n,o,s,d){return q(),Y("div",{class:G(d.classes),name:n.name},[de(e.$slots,"default")],10,gc)}const Li=_e(Ac,[["render",bc]]),Ke="ivu-radio",vc={name:"Radio",mixins:[Zn],emits:["update:modelValue","on-change"],inject:{RadioGroupInstance:{default:null}},props:{modelValue:{type:[String,Number,Boolean],default:!1},trueValue:{type:[String,Number,Boolean],default:!0},falseValue:{type:[String,Number,Boolean],default:!1},label:{type:[String,Number]},disabled:{type:Boolean,default:!1},size:{validator(e){return Te(e,["small","large","default"])},default(){const e=De().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.size===""?"default":e.$VIEWUI.size}},name:{type:String},border:{type:Boolean,default:!1}},data(){return{groupName:this.name,parent:this.RadioGroupInstance,focusWrapper:!1,focusInner:!1}},computed:{wrapClasses(){return[`${Ke}-wrapper`,{[`${Ke}-group-item`]:this.group,[`${Ke}-wrapper-checked`]:this.currentValue,[`${Ke}-wrapper-disabled`]:this.itemDisabled,[`${Ke}-${this.size}`]:!!this.size,[`${Ke}-focus`]:this.focusWrapper,[`${Ke}-border`]:this.border}]},radioClasses(){return[`${Ke}`,{[`${Ke}-checked`]:this.currentValue,[`${Ke}-disabled`]:this.itemDisabled}]},innerClasses(){return[`${Ke}-inner`,{[`${Ke}-focus`]:this.focusInner}]},inputClasses(){return`${Ke}-input`},currentValue(){return this.RadioGroupInstance?this.RadioGroupInstance.currentValue===this.label:this.modelValue===this.trueValue},group(){return!!this.RadioGroupInstance}},mounted(){this.parent&&(this.name&&this.name!==this.parent.name?console.warn&&console.warn("[View UI] Name does not match Radio Group name."):this.groupName=this.parent.name)},methods:{change(e){if(this.itemDisabled)return!1;const n=e.target.checked?this.trueValue:this.falseValue;this.$emit("update:modelValue",n),this.group?this.label!==void 0&&this.parent.change({value:this.label,checked:this.modelValue}):(this.$emit("on-change",n),this.handleFormItemChange("change",n))},onBlur(){this.focusWrapper=!1,this.focusInner=!1},onFocus(){this.group&&this.parent.type==="button"?this.focusWrapper=!0:this.focusInner=!0}},watch:{modelValue(e){if(!(e===this.trueValue||e===this.falseValue))throw"Value should be trueValue or falseValue."}}},wc=["disabled","checked","name"];function xc(e,t,n,o,s,d){return q(),Y("label",{class:G(d.wrapClasses)},[Z("span",{class:G(d.radioClasses)},[Z("span",{class:G(d.innerClasses)},null,2),Z("input",{type:"radio",class:G(d.inputClasses),disabled:e.itemDisabled,checked:d.currentValue,name:s.groupName,onChange:t[0]||(t[0]=(...p)=>d.change&&d.change(...p)),onFocus:t[1]||(t[1]=(...p)=>d.onFocus&&d.onFocus(...p)),onBlur:t[2]||(t[2]=(...p)=>d.onBlur&&d.onBlur(...p))},null,42,wc)],2),de(e.$slots,"default",{},()=>[Pt(je(n.label),1)])],2)}const Di=_e(vc,[["render",xc]]);var Ec={exports:{}};(function(e,t){(function(n,o){e.exports=o()})(zt,function(){var n=1e3,o=6e4,s=36e5,d="millisecond",p="second",y="minute",w="hour",m="day",A="week",x="month",f="quarter",E="year",C="date",g="Invalid Date",B=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,M=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,L={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(J){var j=["th","st","nd","rd"],$=J%100;return"["+J+(j[($-20)%10]||j[$]||j[0])+"]"}},_=function(J,j,$){var ee=String(J);return!ee||ee.length>=j?J:""+Array(j+1-ee.length).join($)+J},D={s:_,z:function(J){var j=-J.utcOffset(),$=Math.abs(j),ee=Math.floor($/60),W=$%60;return(j<=0?"+":"-")+_(ee,2,"0")+":"+_(W,2,"0")},m:function J(j,$){if(j.date()<$.date())return-J($,j);var ee=12*($.year()-j.year())+($.month()-j.month()),W=j.clone().add(ee,x),re=$-W<0,O=j.clone().add(ee+(re?-1:1),x);return+(-(ee+($-W)/(re?W-O:O-W))||0)},a:function(J){return J<0?Math.ceil(J)||0:Math.floor(J)},p:function(J){return{M:x,y:E,w:A,d:m,D:C,h:w,m:y,s:p,ms:d,Q:f}[J]||String(J||"").toLowerCase().replace(/s$/,"")},u:function(J){return J===void 0}},H="en",I={};I[H]=L;var N=function(J){return J instanceof $e},ne=function J(j,$,ee){var W;if(!j)return H;if(typeof j=="string"){var re=j.toLowerCase();I[re]&&(W=re),$&&(I[re]=$,W=re);var O=j.split("-");if(!W&&O.length>1)return J(O[0])}else{var pe=j.name;I[pe]=j,W=pe}return!ee&&W&&(H=W),W||!ee&&H},K=function(J,j){if(N(J))return J.clone();var $=typeof j=="object"?j:{};return $.date=J,$.args=arguments,new $e($)},F=D;F.l=ne,F.i=N,F.w=function(J,j){return K(J,{locale:j.$L,utc:j.$u,x:j.$x,$offset:j.$offset})};var $e=function(){function J($){this.$L=ne($.locale,null,!0),this.parse($)}var j=J.prototype;return j.parse=function($){this.$d=function(ee){var W=ee.date,re=ee.utc;if(W===null)return new Date(NaN);if(F.u(W))return new Date;if(W instanceof Date)return new Date(W);if(typeof W=="string"&&!/Z$/i.test(W)){var O=W.match(B);if(O){var pe=O[2]-1||0,ye=(O[7]||"0").substring(0,3);return re?new Date(Date.UTC(O[1],pe,O[3]||1,O[4]||0,O[5]||0,O[6]||0,ye)):new Date(O[1],pe,O[3]||1,O[4]||0,O[5]||0,O[6]||0,ye)}}return new Date(W)}($),this.$x=$.x||{},this.init()},j.init=function(){var $=this.$d;this.$y=$.getFullYear(),this.$M=$.getMonth(),this.$D=$.getDate(),this.$W=$.getDay(),this.$H=$.getHours(),this.$m=$.getMinutes(),this.$s=$.getSeconds(),this.$ms=$.getMilliseconds()},j.$utils=function(){return F},j.isValid=function(){return this.$d.toString()!==g},j.isSame=function($,ee){var W=K($);return this.startOf(ee)<=W&&W<=this.endOf(ee)},j.isAfter=function($,ee){return K($)<this.startOf(ee)},j.isBefore=function($,ee){return this.endOf(ee)<K($)},j.$g=function($,ee,W){return F.u($)?this[ee]:this.set(W,$)},j.unix=function(){return Math.floor(this.valueOf()/1e3)},j.valueOf=function(){return this.$d.getTime()},j.startOf=function($,ee){var W=this,re=!!F.u(ee)||ee,O=F.p($),pe=function(We,Se){var at=F.w(W.$u?Date.UTC(W.$y,Se,We):new Date(W.$y,Se,We),W);return re?at:at.endOf(m)},ye=function(We,Se){return F.w(W.toDate()[We].apply(W.toDate("s"),(re?[0,0,0,0]:[23,59,59,999]).slice(Se)),W)},Ee=this.$W,ze=this.$M,Pe=this.$D,pt="set"+(this.$u?"UTC":"");switch(O){case E:return re?pe(1,0):pe(31,11);case x:return re?pe(1,ze):pe(0,ze+1);case A:var Fe=this.$locale().weekStart||0,ut=(Ee<Fe?Ee+7:Ee)-Fe;return pe(re?Pe-ut:Pe+(6-ut),ze);case m:case C:return ye(pt+"Hours",0);case w:return ye(pt+"Minutes",1);case y:return ye(pt+"Seconds",2);case p:return ye(pt+"Milliseconds",3);default:return this.clone()}},j.endOf=function($){return this.startOf($,!1)},j.$set=function($,ee){var W,re=F.p($),O="set"+(this.$u?"UTC":""),pe=(W={},W[m]=O+"Date",W[C]=O+"Date",W[x]=O+"Month",W[E]=O+"FullYear",W[w]=O+"Hours",W[y]=O+"Minutes",W[p]=O+"Seconds",W[d]=O+"Milliseconds",W)[re],ye=re===m?this.$D+(ee-this.$W):ee;if(re===x||re===E){var Ee=this.clone().set(C,1);Ee.$d[pe](ye),Ee.init(),this.$d=Ee.set(C,Math.min(this.$D,Ee.daysInMonth())).$d}else pe&&this.$d[pe](ye);return this.init(),this},j.set=function($,ee){return this.clone().$set($,ee)},j.get=function($){return this[F.p($)]()},j.add=function($,ee){var W,re=this;$=Number($);var O=F.p(ee),pe=function(ze){var Pe=K(re);return F.w(Pe.date(Pe.date()+Math.round(ze*$)),re)};if(O===x)return this.set(x,this.$M+$);if(O===E)return this.set(E,this.$y+$);if(O===m)return pe(1);if(O===A)return pe(7);var ye=(W={},W[y]=o,W[w]=s,W[p]=n,W)[O]||1,Ee=this.$d.getTime()+$*ye;return F.w(Ee,this)},j.subtract=function($,ee){return this.add(-1*$,ee)},j.format=function($){var ee=this,W=this.$locale();if(!this.isValid())return W.invalidDate||g;var re=$||"YYYY-MM-DDTHH:mm:ssZ",O=F.z(this),pe=this.$H,ye=this.$m,Ee=this.$M,ze=W.weekdays,Pe=W.months,pt=W.meridiem,Fe=function(Se,at,_t,Ze){return Se&&(Se[at]||Se(ee,re))||_t[at].slice(0,Ze)},ut=function(Se){return F.s(pe%12||12,Se,"0")},We=pt||function(Se,at,_t){var Ze=Se<12?"AM":"PM";return _t?Ze.toLowerCase():Ze};return re.replace(M,function(Se,at){return at||function(_t){switch(_t){case"YY":return String(ee.$y).slice(-2);case"YYYY":return F.s(ee.$y,4,"0");case"M":return Ee+1;case"MM":return F.s(Ee+1,2,"0");case"MMM":return Fe(W.monthsShort,Ee,Pe,3);case"MMMM":return Fe(Pe,Ee);case"D":return ee.$D;case"DD":return F.s(ee.$D,2,"0");case"d":return String(ee.$W);case"dd":return Fe(W.weekdaysMin,ee.$W,ze,2);case"ddd":return Fe(W.weekdaysShort,ee.$W,ze,3);case"dddd":return ze[ee.$W];case"H":return String(pe);case"HH":return F.s(pe,2,"0");case"h":return ut(1);case"hh":return ut(2);case"a":return We(pe,ye,!0);case"A":return We(pe,ye,!1);case"m":return String(ye);case"mm":return F.s(ye,2,"0");case"s":return String(ee.$s);case"ss":return F.s(ee.$s,2,"0");case"SSS":return F.s(ee.$ms,3,"0");case"Z":return O}return null}(Se)||O.replace(":","")})},j.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},j.diff=function($,ee,W){var re,O=this,pe=F.p(ee),ye=K($),Ee=(ye.utcOffset()-this.utcOffset())*o,ze=this-ye,Pe=function(){return F.m(O,ye)};switch(pe){case E:re=Pe()/12;break;case x:re=Pe();break;case f:re=Pe()/3;break;case A:re=(ze-Ee)/6048e5;break;case m:re=(ze-Ee)/864e5;break;case w:re=ze/s;break;case y:re=ze/o;break;case p:re=ze/n;break;default:re=ze}return W?re:F.a(re)},j.daysInMonth=function(){return this.endOf(x).$D},j.$locale=function(){return I[this.$L]},j.locale=function($,ee){if(!$)return this.$L;var W=this.clone(),re=ne($,ee,!0);return re&&(W.$L=re),W},j.clone=function(){return F.w(this.$d,this)},j.toDate=function(){return new Date(this.valueOf())},j.toJSON=function(){return this.isValid()?this.toISOString():null},j.toISOString=function(){return this.$d.toISOString()},j.toString=function(){return this.$d.toUTCString()},J}(),Ye=$e.prototype;return K.prototype=Ye,[["$ms",d],["$s",p],["$m",y],["$H",w],["$W",m],["$M",x],["$y",E],["$D",C]].forEach(function(J){Ye[J[1]]=function(j){return this.$g(j,J[0],J[1])}}),K.extend=function(J,j){return J.$i||(J(j,$e,K),J.$i=!0),K},K.locale=ne,K.isDayjs=N,K.unix=function(J){return K(1e3*J)},K.en=I[H],K.Ls=I,K.p={},K})})(Ec);const bt="ivu-col";function Cc(e){return typeof e=="number"?`${e} ${e} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?`0 0 ${e}`:e}const kc={name:"iCol",inject:["RowInstance"],props:{span:[Number,String],order:[Number,String],offset:[Number,String],push:[Number,String],pull:[Number,String],className:String,xs:[Number,Object],sm:[Number,Object],md:[Number,Object],lg:[Number,Object],xl:[Number,Object],xxl:[Number,Object],flex:{type:[Number,String],default:""}},computed:{gutter(){return this.RowInstance.gutter},classes(){let e=[`${bt}`,{[`${bt}-span-${this.span}`]:this.span,[`${bt}-order-${this.order}`]:this.order,[`${bt}-offset-${this.offset}`]:this.offset,[`${bt}-push-${this.push}`]:this.push,[`${bt}-pull-${this.pull}`]:this.pull,[`${this.className}`]:!!this.className}];return["xs","sm","md","lg","xl","xxl"].forEach(t=>{if(typeof this[t]=="number")e.push(`${bt}-span-${t}-${this[t]}`);else if(typeof this[t]=="object"){let n=this[t];Object.keys(n).forEach(o=>{e.push(o!=="span"?`${bt}-${t}-${o}-${n[o]}`:`${bt}-span-${t}-${n[o]}`)})}}),e},styles(){let e={};return this.gutter!==0&&(e={paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}),this.flex&&(e.flex=Cc(this.flex)),e}}};function Bc(e,t,n,o,s,d){return q(),Y("div",{class:G(d.classes),style:Le(d.styles)},[de(e.$slots,"default")],6)}const ur=_e(kc,[["render",Bc]]),Ft="ivu-row",Sc={name:"Row",provide(){return{RowInstance:this}},props:{type:{validator(e){return Te(e,["flex"])}},align:{validator(e){return Te(e,["top","middle","bottom"])}},justify:{validator(e){return Te(e,["start","end","center","space-around","space-between"])}},gutter:{type:Number,default:0},className:String,wrap:{type:Boolean,default:!0}},computed:{classes(){return[`${Ft}`,{[`${Ft}-${this.type}`]:!!this.type,[`${Ft}-${this.type}-${this.align}`]:!!this.align&&this.type,[`${Ft}-${this.type}-${this.justify}`]:!!this.justify&&this.type,[`${Ft}-${this.align}`]:!!this.align,[`${Ft}-${this.justify}`]:!!this.justify,[`${this.className}`]:!!this.className,[`${Ft}-no-wrap`]:!this.wrap}]},styles(){let e={};return this.gutter!==0&&(e={marginLeft:this.gutter/-2+"px",marginRight:this.gutter/-2+"px"}),e}}};function Ic(e,t,n,o,s,d){return q(),Y("div",{class:G(d.classes),style:Le(d.styles)},[de(e.$slots,"default")],6)}const Fo=_e(Sc,[["render",Ic]]),Rt="ivu-card",zi=16,Tc={name:"Card",mixins:[Ir],components:{Icon:At},props:{bordered:{type:Boolean,default:!0},disHover:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1},padding:{type:Number,default:zi},title:{type:String},icon:{type:String}},data(){return{showHead:!0,showExtra:!0}},computed:{classes(){return[`${Rt}`,{[`${Rt}-bordered`]:this.bordered&&!this.shadow,[`${Rt}-dis-hover`]:this.disHover||this.shadow,[`${Rt}-shadow`]:this.shadow}]},headClasses(){return`${Rt}-head`},extraClasses(){return`${Rt}-extra`},bodyClasses(){return`${Rt}-body`},bodyStyles(){return this.padding!==zi?{padding:`${this.padding}px`}:""},isHrefPattern(){const{to:e}=this;return!!e},tagName(){const{isHrefPattern:e}=this;return e?"a":"div"},tagProps(){const{isHrefPattern:e}=this;if(e){const{linkUrl:t,target:n}=this;return{href:t,target:n}}else return{}}},methods:{handleClickLink(e){if(!this.isHrefPattern)return;const t=e.ctrlKey||e.metaKey;this.handleCheckClick(e,t)}},mounted(){this.showHead=this.title||this.$slots.title!==void 0,this.showExtra=this.$slots.extra!==void 0}},Lc={key:0};function Dc(e,t,n,o,s,d){const p=nt("Icon");return q(),Ne(kd(d.tagName),Er({class:d.classes},d.tagProps,{onClick:d.handleClickLink}),{default:fe(()=>[s.showHead?(q(),Y("div",{key:0,class:G(d.headClasses)},[de(e.$slots,"title",{},()=>[n.title?(q(),Y("p",Lc,[n.icon?(q(),Ne(p,{key:0,type:n.icon},null,8,["type"])):le("",!0),Z("span",null,je(n.title),1)])):le("",!0)])],2)):le("",!0),s.showExtra?(q(),Y("div",{key:1,class:G(d.extraClasses)},[de(e.$slots,"extra")],2)):le("",!0),Z("div",{class:G(d.bodyClasses),style:Le(d.bodyStyles)},[de(e.$slots,"default")],6)]),_:3},16,["class","onClick"])}const hr=_e(Tc,[["render",Dc]]),zc={name:"CellItem",props:{title:{type:String,default:""},label:{type:String,default:""},extra:{type:String,default:""}}},Mc={class:"ivu-cell-item"},Oc={class:"ivu-cell-icon"},_c={class:"ivu-cell-main"},Nc={class:"ivu-cell-title"},Fc={class:"ivu-cell-label"},Rc={class:"ivu-cell-footer"},qc={class:"ivu-cell-extra"};function Pc(e,t,n,o,s,d){return q(),Y("div",Mc,[Z("div",Oc,[de(e.$slots,"icon")]),Z("div",_c,[Z("div",Nc,[de(e.$slots,"default",{},()=>[Pt(je(n.title),1)])]),Z("div",Fc,[de(e.$slots,"label",{},()=>[Pt(je(n.label),1)])])]),Z("div",Rc,[Z("span",qc,[de(e.$slots,"extra",{},()=>[Pt(je(n.extra),1)])])])])}const Vc=_e(zc,[["render",Pc]]),Nn="ivu-cell",$c={name:"Cell",inject:["CellGroupInstance"],mixins:[Ir,Xd],components:{CellItem:Vc,Icon:At},props:{name:{type:[String,Number]},title:{type:String,default:""},label:{type:String,default:""},extra:{type:String,default:""},disabled:{type:Boolean,default:!1},selected:{type:Boolean,default:!1}},data(){return{prefixCls:Nn}},computed:{classes(){return[`${Nn}`,{[`${Nn}-disabled`]:this.disabled,[`${Nn}-selected`]:this.selected,[`${Nn}-with-link`]:this.to}]},arrowType(){const e=this.globalConfig;let t="ios-arrow-forward";return e&&(e.cell.customArrow?t="":e.cell.arrow&&(t=e.cell.arrow)),t},customArrowType(){const e=this.globalConfig;let t="";return e&&e.cell.customArrow&&(t=e.cell.customArrow),t},arrowSize(){const e=this.globalConfig;let t="";return e&&e.cell.arrowSize&&(t=e.cell.arrowSize),t}},methods:{handleClickItem(e,t){this.CellGroupInstance.handleClick(this.name),this.handleCheckClick(e,t)}}},Uc=["href","target"],jc={key:2,class:"ivu-cell-arrow"};function Wc(e,t,n,o,s,d){const p=nt("CellItem"),y=nt("Icon");return q(),Y("div",{class:G(d.classes)},[e.to?(q(),Y("a",{key:0,href:e.linkUrl,target:e.target,class:"ivu-cell-link",onClick:[t[0]||(t[0]=Re(w=>d.handleClickItem(w,!1),["exact"])),t[1]||(t[1]=Re(w=>d.handleClickItem(w,!0),["ctrl"])),t[2]||(t[2]=Re(w=>d.handleClickItem(w,!0),["meta"]))]},[z(p,{title:n.title,label:n.label,extra:n.extra},{icon:fe(()=>[de(e.$slots,"icon")]),default:fe(()=>[de(e.$slots,"default")]),extra:fe(()=>[de(e.$slots,"extra")]),label:fe(()=>[de(e.$slots,"label")]),_:3},8,["title","label","extra"])],8,Uc)):(q(),Y("div",{key:1,class:"ivu-cell-link",onClick:t[3]||(t[3]=(...w)=>d.handleClickItem&&d.handleClickItem(...w))},[z(p,{title:n.title,label:n.label,extra:n.extra},{icon:fe(()=>[de(e.$slots,"icon")]),default:fe(()=>[de(e.$slots,"default")]),extra:fe(()=>[de(e.$slots,"extra")]),label:fe(()=>[de(e.$slots,"label")]),_:3},8,["title","label","extra"])])),e.to?(q(),Y("div",jc,[de(e.$slots,"arrow",{},()=>[z(y,{type:d.arrowType,custom:d.customArrowType,size:d.arrowSize},null,8,["type","custom","size"])])])):le("",!0)],2)}const et=_e($c,[["render",Wc]]),Qc={name:"CellGroup",emits:["on-click"],provide(){return{CellGroupInstance:this}},methods:{handleClick(e){this.$emit("on-click",e)}}},Hc={class:"ivu-cell-group"};function Yc(e,t,n,o,s,d){return q(),Y("div",Hc,[de(e.$slots,"default")])}const Sa=_e(Qc,[["render",Yc]]);var Kc={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};Xc(Kc);function Xc(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}const Gc={name:"RenderCell",props:{render:Function},render(){return this.render(ve)}},Zc={components:{RenderCell:Gc},props:{prefixCls:{type:String,default:""},duration:{type:Number,default:1.5},type:{type:String},content:{type:String,default:""},withIcon:Boolean,render:{type:Function},hasTitle:Boolean,styles:{type:Object,default:function(){return{right:"50%"}}},closable:{type:Boolean,default:!1},className:{type:String},name:{type:String,required:!0},onClose:{type:Function},transitionName:{type:String},background:{type:Boolean,default:!1},msgType:{type:String}},data(){return{withDesc:!1}},computed:{baseClass(){return`${this.prefixCls}-notice`},renderFunc(){return this.render||function(){}},classes(){return[this.baseClass,{[`${this.className}`]:!!this.className,[`${this.baseClass}-closable`]:this.closable,[`${this.baseClass}-with-desc`]:this.withDesc,[`${this.baseClass}-with-background`]:this.background}]},contentClasses(){return[`${this.baseClass}-content`,this.render!==void 0?`${this.baseClass}-content-with-render`:""]},messageContentClasses(){return[`${this.baseClass}-content`,{[`${this.baseClass}-content-${this.msgType}`]:this.msgType,[`${this.baseClass}-content-background`]:this.background}]},contentWithIcon(){return[this.withIcon?`${this.prefixCls}-content-with-icon`:"",!this.hasTitle&&this.withIcon?`${this.prefixCls}-content-with-render-notitle`:""]},messageClasses(){return[`${this.baseClass}-content`,this.render!==void 0?`${this.baseClass}-content-with-render`:""]}},methods:{clearCloseTimer(){this.closeTimer&&(clearTimeout(this.closeTimer),this.closeTimer=null)},close(){this.clearCloseTimer(),this.onClose(),this.$parent.$parent.close(this.name)},handleEnter(e){this.type==="message"&&(e.style.height=e.scrollHeight+"px")},handleLeave(e){this.type==="message"&&me&&document.getElementsByClassName("ivu-message-notice").length!==1&&(e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0)}},mounted(){if(this.handleEnter(this.$el),this.clearCloseTimer(),this.duration!==0&&(this.closeTimer=setTimeout(()=>{this.close()},this.duration*1e3)),this.prefixCls==="ivu-notice"){let e=this.$refs.content.querySelectorAll(`.${this.prefixCls}-desc`)[0];this.withDesc=this.render?!0:e?e.innerHTML!=="":!1}},beforeUnmount(){this.handleLeave(this.$el),this.clearCloseTimer()}},Jc=["innerHTML"],ep=Z("i",{class:"ivu-icon ivu-icon-ios-close"},null,-1),tp=[ep],np=["innerHTML"],ap=Z("i",{class:"ivu-icon ivu-icon-ios-close"},null,-1),rp=[ap];function ip(e,t,n,o,s,d){const p=nt("render-cell");return q(),Y("div",{class:G(d.classes),style:Le(n.styles)},[n.type==="notice"?(q(),Y(Vn,{key:0},[Z("div",{class:G(d.contentClasses),ref:"content",innerHTML:n.content},null,10,Jc),Z("div",{class:G(d.contentWithIcon)},[z(p,{render:d.renderFunc},null,8,["render"])],2),n.closable?(q(),Y("a",{key:0,class:G([d.baseClass+"-close"]),onClick:t[0]||(t[0]=(...y)=>d.close&&d.close(...y))},tp,2)):le("",!0)],64)):le("",!0),n.type==="message"?(q(),Y("div",{key:1,class:G(d.messageContentClasses),ref:"content"},[Z("div",{class:G([d.baseClass+"-content-text"]),innerHTML:n.content},null,10,np),Z("div",{class:G([d.baseClass+"-content-text"])},[z(p,{render:d.renderFunc},null,8,["render"])],2),n.closable?(q(),Y("a",{key:0,class:G([d.baseClass+"-close"]),onClick:t[1]||(t[1]=(...y)=>d.close&&d.close(...y))},rp,2)):le("",!0)],2)):le("",!0)],6)}const op=_e(Zc,[["render",ip]]),lp="ivu-notification";let sp=0;const dp=Date.now();function cp(){return"ivuNotification_"+dp+"_"+sp++}const pp={components:{Notice:op},props:{prefixCls:{type:String,default:lp},styles:{type:Object,default:function(){return{top:"65px",left:"50%"}}},content:{type:String},className:{type:String},transitionName:{type:String}},data(){return{notices:[],tIndex:this.handleGetIndex()}},computed:{classes(){return[`${this.prefixCls}`,{[`${this.className}`]:!!this.className}]},wrapStyles(){let e=Object.assign({},this.styles);return e["z-index"]=1010+this.tIndex,e}},methods:{add(e){const t=e.name||cp();let n=Object.assign({styles:{right:"50%"},content:"",duration:1.5,closable:!1,name:t},e);this.notices.push(n),this.tIndex=this.handleGetIndex()},close(e){const t=this.notices;for(let n=0;n<t.length;n++)if(t[n].name===e){this.notices.splice(n,1);break}},closeAll(){this.notices=[]},handleGetIndex(){return za(),Gn}}};function up(e,t,n,o,s,d){const p=nt("Notice");return q(),Y("div",{class:G(d.classes),style:Le(d.wrapStyles)},[z(Bd,{name:n.transitionName,appear:""},{default:fe(()=>[(q(!0),Y(Vn,null,Sd(s.notices,y=>(q(),Ne(p,{key:y.name,"prefix-cls":n.prefixCls,styles:y.styles,type:y.type,content:y.content,duration:y.duration,render:y.render,"has-title":y.hasTitle,withIcon:y.withIcon,closable:y.closable,name:y.name,"transition-name":y.transitionName,background:y.background,"msg-type":y.msgType,"on-close":y.onClose},null,8,["prefix-cls","styles","type","content","duration","render","has-title","withIcon","closable","name","transition-name","background","msg-type","on-close"]))),128))]),_:1},8,["name"])],6)}const fr=_e(pp,[["render",up]]);fr.newInstance=e=>{if(!me)return;const t=e||{};let n=null;const o=Xn({render(){return ve(fr,Object.assign({ref:"notification"},t))},created(){n=De()}}),s=document.createElement("div");document.body.appendChild(s),o.mount(s);const d=n.refs.notification;return{notice(p){d.add(p)},remove(p){d.close(p)},component:d,destroy(p){d.closeAll(),me&&setTimeout(function(){document.body.removeChild(document.getElementsByClassName(p)[0])},500)}}};const mr="ivu-message",Mi="ivu-icon",Oi="ivu_message_key_",an={top:24,duration:1.5,background:!1};let ga,_i=1;const hp={info:"ios-information-circle",success:"ios-checkmark-circle",warning:"ios-alert",error:"ios-close-circle",loading:"ios-loading"},Ro="move-up";function qo(){return ga=ga||fr.newInstance({prefixCls:mr,styles:{top:`${an.top}px`},transitionName:Ro}),ga}function fp(e="",t=an.duration,n,o=function(){},s=!1,d=function(){},p=an.background){const y=hp[n],w=n==="loading"?" ivu-load-loop":"";let m=qo();return m.notice({name:`${Oi}${_i}`,duration:t,styles:{},transitionName:Ro,content:`
            <div class="${mr}-custom-content ${mr}-${n}">
                <i class="${Mi} ${Mi}-${y} ${w}"></i>
                <span>${e}</span>
            </div>
        `,render:d,onClose:o,closable:s,type:"message",msgType:n,background:p}),function(){let A=_i++;return function(){m.remove(`${Oi}${A}`)}}()}const yt={name:"Message",info(e){return this.message("info",e)},success(e){return this.message("success",e)},warning(e){return this.message("warning",e)},error(e){return this.message("error",e)},loading(e){return this.message("loading",e)},message(e,t){return typeof t=="string"&&(t={content:t}),fp(t.content,t.duration,e,t.onClose,t.closable,t.render,t.background)},config(e){(e.top||e.top===0)&&(an.top=e.top),(e.duration||e.duration===0)&&(an.duration=e.duration),e.background&&(an.background=e.background)},destroy(){let e=qo();ga=null,e.destroy("ivu-message")}};function mp(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ia={exports:{}};Ia.exports;(function(e,t){(function(n,o){e.exports=o(mp,t,e)})(zt,function(n,o,s){var d=function(p,y,w,m,A,x){function f(D){var H,I,N,ne,K,F,$e=D<0;if(D=Math.abs(D).toFixed(g.decimals),D+="",H=D.split("."),I=H[0],N=H.length>1?g.options.decimal+H[1]:"",g.options.useGrouping){for(ne="",K=0,F=I.length;K<F;++K)K!==0&&K%3===0&&(ne=g.options.separator+ne),ne=I[F-K-1]+ne;I=ne}return g.options.numerals.length&&(I=I.replace(/[0-9]/g,function(Ye){return g.options.numerals[+Ye]}),N=N.replace(/[0-9]/g,function(Ye){return g.options.numerals[+Ye]})),($e?"-":"")+g.options.prefix+I+N+g.options.suffix}function E(D,H,I,N){return I*(-Math.pow(2,-10*D/N)+1)*1024/1023+H}function C(D){return typeof D=="number"&&!isNaN(D)}var g=this;if(g.version=function(){return"1.9.3"},g.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:E,formattingFn:f,prefix:"",suffix:"",numerals:[]},x&&typeof x=="object")for(var B in g.options)x.hasOwnProperty(B)&&x[B]!==null&&(g.options[B]=x[B]);g.options.separator===""?g.options.useGrouping=!1:g.options.separator=""+g.options.separator;for(var M=0,L=["webkit","moz","ms","o"],_=0;_<L.length&&!window.requestAnimationFrame;++_)window.requestAnimationFrame=window[L[_]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[L[_]+"CancelAnimationFrame"]||window[L[_]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(D,H){var I=new Date().getTime(),N=Math.max(0,16-(I-M)),ne=window.setTimeout(function(){D(I+N)},N);return M=I+N,ne}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(D){clearTimeout(D)}),g.initialize=function(){return!!g.initialized||(g.error="",g.d=typeof p=="string"?document.getElementById(p):p,g.d?(g.startVal=Number(y),g.endVal=Number(w),C(g.startVal)&&C(g.endVal)?(g.decimals=Math.max(0,m||0),g.dec=Math.pow(10,g.decimals),g.duration=1e3*Number(A)||2e3,g.countDown=g.startVal>g.endVal,g.frameVal=g.startVal,g.initialized=!0,!0):(g.error="[CountUp] startVal ("+y+") or endVal ("+w+") is not a number",!1)):(g.error="[CountUp] target is null or undefined",!1))},g.printValue=function(D){var H=g.options.formattingFn(D);g.d.tagName==="INPUT"?this.d.value=H:g.d.tagName==="text"||g.d.tagName==="tspan"?this.d.textContent=H:this.d.innerHTML=H},g.count=function(D){g.startTime||(g.startTime=D),g.timestamp=D;var H=D-g.startTime;g.remaining=g.duration-H,g.options.useEasing?g.countDown?g.frameVal=g.startVal-g.options.easingFn(H,0,g.startVal-g.endVal,g.duration):g.frameVal=g.options.easingFn(H,g.startVal,g.endVal-g.startVal,g.duration):g.countDown?g.frameVal=g.startVal-(g.startVal-g.endVal)*(H/g.duration):g.frameVal=g.startVal+(g.endVal-g.startVal)*(H/g.duration),g.countDown?g.frameVal=g.frameVal<g.endVal?g.endVal:g.frameVal:g.frameVal=g.frameVal>g.endVal?g.endVal:g.frameVal,g.frameVal=Math.round(g.frameVal*g.dec)/g.dec,g.printValue(g.frameVal),H<g.duration?g.rAF=requestAnimationFrame(g.count):g.callback&&g.callback()},g.start=function(D){g.initialize()&&(g.callback=D,g.rAF=requestAnimationFrame(g.count))},g.pauseResume=function(){g.paused?(g.paused=!1,delete g.startTime,g.duration=g.remaining,g.startVal=g.frameVal,requestAnimationFrame(g.count)):(g.paused=!0,cancelAnimationFrame(g.rAF))},g.reset=function(){g.paused=!1,delete g.startTime,g.initialized=!1,g.initialize()&&(cancelAnimationFrame(g.rAF),g.printValue(g.startVal))},g.update=function(D){if(g.initialize()){if(D=Number(D),!C(D))return void(g.error="[CountUp] update() - new endVal is not a number: "+D);g.error="",D!==g.frameVal&&(cancelAnimationFrame(g.rAF),g.paused=!1,delete g.startTime,g.startVal=g.frameVal,g.endVal=D,g.countDown=g.startVal>g.endVal,g.rAF=requestAnimationFrame(g.count))}},g.initialize()&&g.printValue(g.startVal)};return d})})(Ia,Ia.exports);Ia.exports;function Po(e,t){for(var n=[],o=0,s=e.length;o<s;o++)n.push(e[o].substr(0,t));return n}var yp=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Ap=["January","February","March","April","May","June","July","August","September","October","November","December"];Po(Ap,3);Po(yp,3);var gp={weekPlaceholder:"",columnNames:{en:{0:"w",1:"monday",2:"tuesday",3:"wednesday",4:"thursday",5:"friday",6:"saturday",7:"sunday"},sv:{0:"v",1:"måndag",2:"tisdag",3:"onsdag",4:"torsdag",5:"fredag",6:"lördag",7:"söndag"},pt:{0:"s",1:"segunda",2:"terça",3:"quarta",4:"quinta",5:"sexta",6:"sábado",7:"domingo"}},monthNames:{en:["January","February","March","April","May","June","July","August","September","October","November","December"],sv:["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"],pt:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]},classes:{dayLabel:"day-of-week",weekLabel:"week-number",prevMonth:"inactive",nextMonth:"inactive",monthDay:"day-in-month"}},mt=gp;function bp(e){return e==null?!1:e.constructor===Array||e.constructor===Object}function Vo(e,t){for(var n in e)t[n]?bp(e[n])&&Vo(e[n],t[n]):t[n]=e[n]}function vp(e,t){var n=[mt.classes[e.type]];return e.class?e.class=(typeof e.class=="string"?[e.class]:e.class).concat(n):e.class=n,e.type.indexOf("Label")>0&&(e.index==0&&mt.weekPlaceholder?e.desc=mt.weekPlaceholder:e.index<8?e.desc=mt.columnNames[t][e.index]:e.index%8==0&&(e.desc=e.week)),e.date&&(e.monthName=mt.monthNames[t][e.date.getMonth()]),this.monthName||(this.monthName=mt.monthNames[t][this.month]),this.labels||(this.labels={monthNames:mt.monthNames[t],columnNames:mt.columnNames[t],classes:mt.classes}),e}vp.setLabels=function(e){Vo(e,mt)};const Lr={props:{lockScroll:{type:Boolean,default:!0}},methods:{checkScrollBar(){if(!me)return;let e=window.innerWidth;if(!e){const t=document.documentElement.getBoundingClientRect();e=t.right-Math.abs(t.left)}this.bodyIsOverflowing=document.body.clientWidth<e,this.bodyIsOverflowing&&(this.scrollBarWidth=Rd())},checkMaskInVisible(){let e=me?document.getElementsByClassName("ivu-modal-mask")||[]:[];return Array.from(e).every(t=>t.style.display==="none"||t.classList.contains("fade-leave-to"))},setScrollBar(){me&&this.bodyIsOverflowing&&this.scrollBarWidth!==void 0&&(document.body.style.paddingRight=`${this.scrollBarWidth}px`)},resetScrollBar(){me&&(document.body.style.paddingRight="")},addScrollEffect(){this.lockScroll&&(this.checkScrollBar(),this.setScrollBar(),me&&(document.body.style.overflow="hidden"))},removeScrollEffect(){this.lockScroll&&me&&this.checkMaskInVisible()&&(document.body.style.overflow="",this.resetScrollBar())}}},Ue="ivu-drawer",wp={name:"Drawer",mixins:[Lr],components:{Icon:At},emits:["on-close","on-resize-width","on-visible-change","update:modelValue","on-drag"],provide(){return{DrawerInstance:this}},props:{modelValue:{type:Boolean,default:!1},title:{type:String},width:{type:[Number,String],default:256},height:{type:[Number,String],default:256},closable:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},mask:{type:Boolean,default:!0},maskStyle:{type:Object},styles:{type:Object},scrollable:{type:Boolean,default:!1},placement:{validator(e){return Te(e,["left","right","top","bottom"])},default:"right"},zIndex:{type:Number,default:1e3},transfer:{type:Boolean,default(){const e=De().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.transfer===""?!0:e.$VIEWUI.transfer}},className:{type:String},inner:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},beforeClose:Function},data(){return{prefixCls:Ue,visible:this.modelValue,wrapShow:!1,showHead:!0,canMove:!1,dragWidth:this.width,dragHeight:this.height,wrapperWidth:this.width,wrapperHeight:this.height,wrapperLeft:0,minWidth:256,minHeight:256,id:Mo(6),tableList:[],sliderList:[]}},computed:{wrapClasses(){return[`${Ue}-wrap`,{[`${Ue}-hidden`]:!this.wrapShow,[`${this.className}`]:!!this.className,[`${Ue}-no-mask`]:!this.mask,[`${Ue}-wrap-inner`]:this.inner,[`${Ue}-wrap-dragging`]:this.canMove}]},mainStyles(){let e={};if(this.placement==="left"||this.placement==="right"){const t=parseInt(this.dragWidth),n={width:t<=100?`${t}%`:`${t}px`};Object.assign(e,n)}else{const t=parseInt(this.dragHeight),n={height:t<=100?`${t}%`:`${t}px`};Object.assign(e,n)}return e},contentClasses(){return[`${Ue}-content`,{[`${Ue}-content-no-mask`]:!this.mask}]},classes(){return[`${Ue}`,`${Ue}-${this.placement}`,{[`${Ue}-no-header`]:!this.showHead,[`${Ue}-inner`]:this.inner}]},maskClasses(){return[`${Ue}-mask`,{[`${Ue}-mask-inner`]:this.inner}]},transitionName(){return this.placement==="left"||this.placement==="right"?`move-${this.placement}`:this.placement==="top"?"move-up":"move-down"}},methods:{close(){if(!this.beforeClose)return this.handleClose();const e=this.beforeClose();e&&e.then?e.then(()=>{this.handleClose()}):this.handleClose()},handleClose(){this.visible=!1,this.$emit("update:modelValue",!1),this.$emit("on-close")},handleMask(){this.maskClosable&&this.mask&&this.close()},handleWrapClick(e){const t=e.target.getAttribute("class");t&&t.indexOf(`${Ue}-wrap`)>-1&&this.handleMask()},handleMousemove(e){if(!this.canMove||!this.draggable)return;this.handleSetWrapperWidth();const t=e.pageX-this.wrapperLeft;let n=this.placement==="right"?this.wrapperWidth-t:t;n=Math.max(n,parseFloat(this.minWidth)),e.atMin=n===parseFloat(this.minWidth),n<=100&&(n=n/this.wrapperWidth*100),this.dragWidth=n,this.$emit("on-resize-width",parseInt(this.dragWidth)),this.$emit("on-drag","dragging",parseInt(this.dragWidth))},handleSetWrapperWidth(){const{width:e,left:t}=this.$refs.drawer.getBoundingClientRect();this.wrapperWidth=e,this.wrapperLeft=t},handleMouseup(){this.draggable&&(this.canMove=!1,this.$emit("on-drag","end"))},handleTriggerMousedown(){this.canMove=!0,window.getSelection().removeAllRanges(),this.$emit("on-drag","start")},addDrawer(){const e=this.$root;e.drawerList||(e.drawerList=[]),e.drawerList.push({id:this.id,drawer:this})},removeDrawer(){const e=this.$root;if(!e.drawerList)return;const t=e.drawerList.findIndex(n=>n.id===this.id);e.drawerList.splice(t,1)}},mounted(){this.visible&&(this.wrapShow=!0);let e=!0;this.$slots.header===void 0&&!this.title&&(e=!1),this.showHead=e,this.addDrawer(),xt(document,"mousemove",this.handleMousemove),xt(document,"mouseup",this.handleMouseup),this.handleSetWrapperWidth()},beforeUnmount(){this.removeDrawer(),Et(document,"mousemove",this.handleMousemove),Et(document,"mouseup",this.handleMouseup),this.removeScrollEffect()},watch:{modelValue(e){this.visible=e},visible(e){e===!1?this.timer=setTimeout(()=>{this.wrapShow=!1,this.$root.drawerList.map(s=>s.drawer).filter(s=>s.id!==this.id).some(s=>s.visible&&!s.scrollable)||this.removeScrollEffect()},300):(this.timer&&clearTimeout(this.timer),this.wrapShow=!0,this.scrollable||this.addScrollEffect()),this.tableList.forEach(t=>{t.table.handleOnVisibleChange(e)}),this.sliderList.forEach(t=>{t.slider.handleOnVisibleChange(e)}),this.$emit("on-visible-change",e)},scrollable(e){e?this.removeScrollEffect():this.addScrollEffect()},title(e){this.$slots.header===void 0&&(this.showHead=!!e)},width(e){this.dragWidth=e},height(e){this.dragHeight=e}}},xp={ref:"drawer"},Ep=Z("div",{class:"ivu-drawer-drag-move-trigger"},[Z("div",{class:"ivu-drawer-drag-move-trigger-point"},[Z("i"),Z("i"),Z("i"),Z("i"),Z("i")])],-1);function Cp(e,t,n,o,s,d){const p=nt("Icon");return q(),Ne(Cr,{to:"body",disabled:!n.transfer},[Z("div",xp,[z(Ct,{name:"fade"},{default:fe(()=>[n.mask?ot((q(),Y("div",{key:0,class:G(d.maskClasses),style:Le(n.maskStyle),onClick:t[0]||(t[0]=(...y)=>d.handleMask&&d.handleMask(...y))},null,6)),[[lt,s.visible]]):le("",!0)]),_:1}),Z("div",{class:G(d.wrapClasses),onClick:t[3]||(t[3]=(...y)=>d.handleWrapClick&&d.handleWrapClick(...y))},[z(Ct,{name:d.transitionName},{default:fe(()=>[ot(Z("div",{class:G(d.classes),style:Le(d.mainStyles)},[Z("div",{class:G(d.contentClasses),ref:"content"},[n.closable?(q(),Y("a",{key:0,class:"ivu-drawer-close",onClick:t[1]||(t[1]=(...y)=>d.close&&d.close(...y))},[de(e.$slots,"close",{},()=>[z(p,{type:"ios-close"})])])):le("",!0),s.showHead?(q(),Y("div",{key:1,class:G([s.prefixCls+"-header"])},[de(e.$slots,"header",{},()=>[Z("div",{class:G([s.prefixCls+"-header-inner"])},je(n.title),3)])],2)):le("",!0),Z("div",{class:G([s.prefixCls+"-body"]),style:Le(n.styles)},[de(e.$slots,"default")],6)],2),n.draggable&&(n.placement==="left"||n.placement==="right")?(q(),Y("div",{key:0,class:G(["ivu-drawer-drag","ivu-drawer-drag-"+n.placement]),onMousedown:t[2]||(t[2]=(...y)=>d.handleTriggerMousedown&&d.handleTriggerMousedown(...y))},[de(e.$slots,"trigger",{},()=>[Ep])],34)):le("",!0)],6),[[lt,s.visible]])]),_:3},8,["name"])],2)],512)],8,["disabled"])}const kp=_e(wp,[["render",Cp]]);var $o={exports:{}},Bp=$o.exports={};Bp.forEach=function(e,t){for(var n=0;n<e.length;n++){var o=t(e[n]);if(o)return o}};var Uo=$o.exports,jo={};jo.isIE=function(e){function t(){var o=navigator.userAgent.toLowerCase();return o.indexOf("msie")!==-1||o.indexOf("trident")!==-1||o.indexOf(" edge/")!==-1}if(!t())return!1;if(!e)return!0;var n=function(){var o,s=3,d=document.createElement("div"),p=d.getElementsByTagName("i");do d.innerHTML="<!--[if gt IE "+ ++s+"]><i></i><![endif]-->";while(p[0]);return s>4?s:o}();return e===n};jo.isLegacyOpera=function(){return!!window.opera};var Sp={};Sp.getOption=Ip;function Ip(e,t,n){var o=e[t];return o==null&&n!==void 0?n:o}Uo.forEach;Uo.forEach;var Wo="Expected a function",Ni=0/0,Tp="[object Symbol]",Lp=/^\s+|\s+$/g,Dp=/^[-+]0x[0-9a-f]+$/i,zp=/^0b[01]+$/i,Mp=/^0o[0-7]+$/i,Op=parseInt,_p=typeof zt=="object"&&zt&&zt.Object===Object&&zt,Np=typeof self=="object"&&self&&self.Object===Object&&self,Fp=_p||Np||Function("return this")(),Rp=Object.prototype,qp=Rp.toString,Pp=Math.max,Vp=Math.min,tr=function(){return Fp.Date.now()};function $p(e,t,n){var o,s,d,p,y,w,m=0,A=!1,x=!1,f=!0;if(typeof e!="function")throw new TypeError(Wo);t=Fi(t)||0,Ta(n)&&(A=!!n.leading,x="maxWait"in n,d=x?Pp(Fi(n.maxWait)||0,t):d,f="trailing"in n?!!n.trailing:f);function E(I){var N=o,ne=s;return o=s=void 0,m=I,p=e.apply(ne,N),p}function C(I){return m=I,y=setTimeout(M,t),A?E(I):p}function g(I){var N=I-w,ne=I-m,K=t-N;return x?Vp(K,d-ne):K}function B(I){var N=I-w,ne=I-m;return w===void 0||N>=t||N<0||x&&ne>=d}function M(){var I=tr();if(B(I))return L(I);y=setTimeout(M,g(I))}function L(I){return y=void 0,f&&o?E(I):(o=s=void 0,p)}function _(){y!==void 0&&clearTimeout(y),m=0,o=w=s=y=void 0}function D(){return y===void 0?p:L(tr())}function H(){var I=tr(),N=B(I);if(o=arguments,s=this,w=I,N){if(y===void 0)return C(w);if(x)return y=setTimeout(M,t),E(w)}return y===void 0&&(y=setTimeout(M,t)),p}return H.cancel=_,H.flush=D,H}function Up(e,t,n){var o=!0,s=!0;if(typeof e!="function")throw new TypeError(Wo);return Ta(n)&&(o="leading"in n?!!n.leading:o,s="trailing"in n?!!n.trailing:s),$p(e,t,{leading:o,maxWait:t,trailing:s})}function Ta(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function jp(e){return!!e&&typeof e=="object"}function Wp(e){return typeof e=="symbol"||jp(e)&&qp.call(e)==Tp}function Fi(e){if(typeof e=="number")return e;if(Wp(e))return Ni;if(Ta(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Ta(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Lp,"");var n=zp.test(e);return n||Mp.test(e)?Op(e.slice(2),n?2:8):Dp.test(e)?Ni:+e}var Qp=Up;const Hp=Oo(Qp),te={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent(e){const{keyCode:t}=e;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=te.F1&&t<=te.F12)return!1;switch(t){case te.ALT:case te.CAPS_LOCK:case te.CONTEXT_MENU:case te.CTRL:case te.DOWN:case te.END:case te.ESC:case te.HOME:case te.INSERT:case te.LEFT:case te.MAC_FF_META:case te.META:case te.NUMLOCK:case te.NUM_CENTER:case te.PAGE_DOWN:case te.PAGE_UP:case te.PAUSE:case te.PRINT_SCREEN:case te.RIGHT:case te.SHIFT:case te.UP:case te.WIN_KEY:case te.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey(e){if(e>=te.ZERO&&e<=te.NINE||e>=te.NUM_ZERO&&e<=te.NUM_MULTIPLY||e>=te.A&&e<=te.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&e===0)return!0;switch(e){case te.SPACE:case te.QUESTION_MARK:case te.NUM_PLUS:case te.NUM_MINUS:case te.NUM_PERIOD:case te.NUM_DIVISION:case te.SEMICOLON:case te.DASH:case te.EQUALS:case te.COMMA:case te.PERIOD:case te.SLASH:case te.APOSTROPHE:case te.SINGLE_QUOTE:case te.OPEN_SQUARE_BRACKET:case te.BACKSLASH:case te.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}},Lt="ivu-spin",Yp={name:"Spin",mixins:[Lr],props:{size:{validator(e){return Te(e,["small","large","default"])},default(){const e=De().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.size===""?"default":e.$VIEWUI.size}},fix:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},show:{type:Boolean,default:!0}},data(){return{showText:!1,visible:!1}},computed:{classes(){return[`${Lt}`,{[`${Lt}-${this.size}`]:!!this.size,[`${Lt}-fix`]:this.fix,[`${Lt}-show-text`]:this.showText,[`${Lt}-fullscreen`]:this.fullscreen}]},mainClasses(){return`${Lt}-main`},dotClasses(){return`${Lt}-dot`},textClasses(){return`${Lt}-text`},fullscreenVisible(){return this.fullscreen?this.visible:!0}},watch:{visible(e){e?this.addScrollEffect():this.removeScrollEffect()}},mounted(){this.showText=!!this.$slots.default&&this.$slots.default().some(e=>e.children&&e.children.length)}};function Kp(e,t,n,o,s,d){return q(),Ne(Ct,{name:"fade"},{default:fe(()=>[d.fullscreenVisible&&n.show?(q(),Y("div",{key:0,class:G(d.classes)},[Z("div",{class:G(d.mainClasses)},[Z("span",{class:G(d.dotClasses)},null,2),Z("div",{class:G(d.textClasses)},[de(e.$slots,"default")],2)],2)],2)):le("",!0)]),_:3})}const Vt=_e(Yp,[["render",Kp]]),Xp={name:"ImagePreview",mixins:[Tr],components:{Icon:At,Spin:Vt,Row:Fo,Col:ur},inheritAttrs:!1,emits:["update:modelValue","on-close","on-switch"],props:{modelValue:{type:Boolean,default:!1},transfer:{type:Boolean,default(){const e=De().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.transfer===""?!1:e.$VIEWUI.transfer}},maskClosable:{type:Boolean,default:!0},previewList:{type:Array,default(){return[]}},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},toolbar:{type:Array,default(){const e=De().appContext.config.globalProperties;return!e.$VIEWUI||!e.$VIEWUI.image||e.$VIEWUI.image.toolbar===""?["zoomIn","zoomOut","original","rotateLeft","rotateRight","download"]:e.$VIEWUI.image.toolbar}}},data(){return{currentIndex:0,scale:1,degree:0,translate:{x:0,y:0},startX:0,startY:0,transition:!0,original:!1,prevOverflow:"",status:"loading",zIndex:1e3,maskIndex:this.getMaskIndex(),downloading:!1}},computed:{imgClasses(){return["ivu-image-preview-image",{"ivu-image-preview-grabbing":!this.transition,"ivu-image-preview-hidden":this.status==="failed","ivu-image-preview-transition":this.transition,"ivu-image-preview-limit":!this.original}]},imageStyle(){let e=this.translate.x/this.scale,t=this.translate.y/this.scale;const n=this.degree%360;return[90,-270].includes(n)&&([e,t]=[t,-e]),[180,-180].includes(n)&&([e,t]=[-e,-t]),[270,-90].includes(n)&&([e,t]=[-t,e]),{transform:`
                        scale(${this.scale})
                        rotate(${this.degree}deg)
                        translate(${e}px, ${t}px)
                    `}},maskStyle(){return{zIndex:this.maskIndex+this.zIndex}},leftClasses(){return["ivu-image-preview-arrow-left",{"ivu-image-preview-arrow-disabled":this.hasLeftSwitchEnd}]},rightClasses(){return["ivu-image-preview-arrow-right",{"ivu-image-preview-arrow-disabled":this.hasRightSwitchEnd}]},hasRightSwitchEnd(){const{currentIndex:e,infinite:t,previewList:n}=this,o=n.length;return t?!1:e>=o-1},hasLeftSwitchEnd(){const{currentIndex:e,infinite:t}=this;return t?!1:e===0},currentSrc(){return this.previewList[this.currentIndex]},failLang(){return this.t("i.image.fail")}},methods:{resetStyle(){this.scale=1,this.degree=0,this.translate.x=0,this.translate.y=0},handleClose(){this.$emit("update:modelValue",!1),this.$emit("on-close")},handleClickMask(){this.maskClosable&&this.handleClose()},handleSwitch(e){e?this.currentIndex+1===this.previewList.length?this.infinite&&(this.resetStyle(),this.currentIndex=0):(this.resetStyle(),this.currentIndex+=1):this.currentIndex===0?this.infinite&&(this.resetStyle(),this.currentIndex=this.previewList.length-1):(this.resetStyle(),this.currentIndex-=1),this.$emit("on-switch",{currentIndex:this.currentIndex})},handleOperation(e){e==="zoomIn"&&this.scale<6&&(this.scale+=.25),e==="zoomOut"&&this.scale>.25&&(this.scale-=.25),e==="rotateLeft"&&(this.degree-=90),e==="rotateRight"&&(this.degree+=90),e==="original"&&(this.original=!this.original,this.transition=!1,this.resetStyle(),setTimeout(()=>{this.transition=!0},0)),e==="download"&&(this.downloading=!0,Vd(this.previewList[this.currentIndex]).then(()=>{this.downloading=!1}).catch(()=>{this.downloading=!1}))},handleKeydown(e){if(!this.modelValue)return;const{keyCode:t}=e;t===te.LEFT&&this.handleSwitch(!1),t===te.RIGHT&&this.handleSwitch(!0),t===te.UP&&this.handleOperation("zoomIn"),t===te.DOWN&&this.handleOperation("zoomOut"),t===te.SPACE&&(e.preventDefault(),this.original=!this.original)},handleKeyup(e){if(!this.modelValue)return;const{keyCode:t}=e;t===te.ESC&&this.handleClose()},handleWheel(e){if(!this.modelValue)return;const{deltaY:t}=e;this.handleOperation(t<0?"zoomIn":"zoomOut")},handleMousedown(e){const{pageX:t,pageY:n,which:o}=e;o===1&&(this.startX=t,this.startY=n,this.transition=!1,xt(document,"mousemove",this.handleMousemove),xt(document,"mouseup",this.handleMouseup))},handleMousemove:Hp(function(e){e.stopPropagation();const{pageX:t,pageY:n}=e;this.translate.x+=t-this.startX,this.translate.y+=n-this.startY,this.startX=t,this.startY=n}),handleMouseup(){this.transition=!0,Et(document,"mousemove",this.handleMousemove),Et(document,"mouseup",this.handleMouseup)},getBodyOverflow(){return me?document.body.style.overflow:""},setBodyOverflow(e){me&&(document.body.style.overflow=e)},handleImageLoad(){this.status="loaded"},handleImageError(){this.status="failed"},getMaskIndex(){return za(),Gn}},watch:{modelValue(e){e?(this.currentIndex=this.initialIndex,this.resetStyle(),this.original=!1,this.prevOverflow=this.getBodyOverflow(),this.setBodyOverflow("hidden"),this.maskIndex=this.getMaskIndex()):this.setBodyOverflow(this.prevOverflow)},currentIndex(){this.status="loading"}},mounted(){xt(document,"keydown",this.handleKeydown),xt(document,"keyup",this.handleKeyup),xt(document,"wheel",this.handleWheel)},beforeUnmount(){Et(document,"keydown",this.handleKeydown),Et(document,"keyup",this.handleKeyup),Et(document,"wheel",this.handleWheel)}},Gp={key:1,class:"ivu-image-preview-fail"},Zp=["src"],Jp=Z("path",{d:"M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z","p-id":"7198",fill:"#ffffff"},null,-1),eu=Z("path",{d:"M921 867L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z","p-id":"7199",fill:"#ffffff"},null,-1),tu=[Jp,eu],nu=Z("path",{d:"M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z","p-id":"7413",fill:"#ffffff"},null,-1),au=Z("path",{d:"M921 867L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z","p-id":"7414",fill:"#ffffff"},null,-1),ru=[nu,au],iu=Z("path",{d:"M358.058667 128H156.970667A28.970667 28.970667 0 0 0 128 157.013333v202.837334c0 7.978667 6.528 14.506667 14.506667 14.506666h43.434666a14.506667 14.506667 0 0 0 14.506667-14.506666V200.448h157.610667a14.506667 14.506667 0 0 0 14.506666-14.506667V142.506667a14.506667 14.506667 0 0 0-14.506666-14.506667zM881.493333 649.642667h-43.434666a14.506667 14.506667 0 0 0-14.506667 14.506666v159.402667h-157.610667a14.506667 14.506667 0 0 0-14.506666 14.506667v43.434666c0 7.978667 6.570667 14.506667 14.506666 14.506667h201.088c16 0 28.970667-12.928 28.970667-29.013333v-202.837334a14.506667 14.506667 0 0 0-14.506667-14.506666zM358.058667 823.552H200.448v-159.402667a14.506667 14.506667 0 0 0-14.506667-14.506666H142.506667a14.506667 14.506667 0 0 0-14.506667 14.506666v202.88c0 16 12.970667 28.970667 29.013333 28.970667h201.045334a14.506667 14.506667 0 0 0 14.506666-14.506667v-43.434666a14.506667 14.506667 0 0 0-14.506666-14.506667zM866.986667 128h-201.088a14.506667 14.506667 0 0 0-14.506667 14.506667v43.434666c0 7.978667 6.570667 14.506667 14.506667 14.506667h157.610666v159.402667c0 7.978667 6.528 14.506667 14.506667 14.506666h43.434667a14.506667 14.506667 0 0 0 14.506666-14.506666V156.970667A28.928 28.928 0 0 0 866.986667 128z","p-id":"26673",fill:"#ffffff"},null,-1),ou=[iu],lu=Z("path",{d:"M864 128H160c-19.2 0-32 12.8-32 32v704c0 19.2 12.8 32 32 32h704c19.2 0 32-12.8 32-32V160c0-19.2-12.8-32-32-32z m-32 704H192V192h640v640z","p-id":"1977",fill:"#ffffff"},null,-1),su=Z("path",{d:"M320 384v288c0 19.2 12.8 32 32 32s32-12.8 32-32V352c0-19.2-12.8-32-32-32h-32c-19.2 0-32 12.8-32 32s12.8 32 32 32zM640 384v288c0 19.2 12.8 32 32 32s32-12.8 32-32V352c0-19.2-12.8-32-32-32h-32c-19.2 0-32 12.8-32 32s12.8 32 32 32z","p-id":"1978",fill:"#ffffff"},null,-1),du=Z("path",{d:"M512 384m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z","p-id":"1979",fill:"#ffffff"},null,-1),cu=Z("path",{d:"M512 640m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z","p-id":"1980",fill:"#ffffff"},null,-1),pu=[lu,su,du,cu],uu=Z("path",{d:"M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32z m-44 402H188V494h440v326z m191.3-491.5c-78.8-100.7-196-153.6-314.6-154.2l-0.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7 0.4 12.6-6.1v-63.9c12.9 0.1 25.9 0.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8 11 40.7 14 82.7 8.9 124.8-0.7 5.4-1.4 10.8-2.4 16.1h74.9c14.8-103.6-11.3-213-81-302.3z","p-id":"13309",fill:"#ffffff"},null,-1),hu=[uu],fu=Z("path",{d:"M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-0.4-12.6 6.1l-0.2 64c-118.6 0.5-235.8 53.4-314.6 154.2-69.6 89.2-95.7 198.6-81.1 302.4h74.9c-0.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8zM880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32z m-44 402H396V494h440v326z","p-id":"13522",fill:"#ffffff"},null,-1),mu=[fu],yu=Z("path",{d:"M505.7 621c3.2 4.1 9.4 4.1 12.6 0l112-141.7c4.1-5.2 0.4-12.9-6.3-12.9h-72.1V120c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v346.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8z","p-id":"8826",fill:"#ffffff"},null,-1),Au=Z("path",{d:"M903 516h-64c-4.4 0-8 3.6-8 8v300c0 4.4-3.6 8-8 8H199c-4.4 0-8-3.6-8-8V524c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v372c0 8.8 7.2 16 16 16h768c8.8 0 16-7.2 16-16V524c0-4.4-3.6-8-8-8z","p-id":"8827",fill:"#ffffff"},null,-1),gu=[yu,Au],bu={class:"ivu-image-preview-operations-item ivu-image-preview-operations-wait ivu-anim-loop",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"7816",width:"200",height:"200"},vu=Z("path",{d:"M512 64c247.2 0 448 200.8 448 448h-64c0-212-172-384-384-384V64z m0 832c-212 0-384-172-384-384H64c0 247.2 200.8 448 448 448v-64z","p-id":"7817",fill:"#ffffff"},null,-1),wu=[vu];function xu(e,t,n,o,s,d){const p=nt("Spin"),y=nt("Col"),w=nt("Row"),m=nt("Icon");return q(),Ne(Cr,{to:"body",disabled:!n.transfer},[z(Ct,{name:"fade"},{default:fe(()=>[n.modelValue?(q(),Y("div",{key:0,class:"ivu-image-preview-mask",style:Le(d.maskStyle)},null,4)):le("",!0)]),_:1}),z(Ct,{name:"fade"},{default:fe(()=>[n.modelValue?(q(),Y("div",{key:0,class:"ivu-image-preview-wrap",style:Le(d.maskStyle)},[Z("div",Er({class:"ivu-image-preview"},e.$attrs,{onClick:t[14]||(t[14]=Re((...A)=>d.handleClickMask&&d.handleClickMask(...A),["stop"]))}),[s.status==="loading"?(q(),Ne(p,{key:0,size:"large",class:"ivu-image-preview-loading"})):s.status==="failed"?(q(),Y("div",Gp,[Z("span",null,je(d.failLang),1)])):le("",!0),(q(),Y("img",{class:G(d.imgClasses),style:Le(d.imageStyle),src:d.currentSrc,key:s.currentIndex.toString(),onClick:t[0]||(t[0]=Re(()=>{},["stop"])),onMousedown:t[1]||(t[1]=Re((...A)=>d.handleMousedown&&d.handleMousedown(...A),["stop","prevent"])),onLoad:t[2]||(t[2]=(...A)=>d.handleImageLoad&&d.handleImageLoad(...A)),onError:t[3]||(t[3]=(...A)=>d.handleImageError&&d.handleImageError(...A))},null,46,Zp)),n.toolbar&&n.toolbar.length>0?(q(),Ne(w,{key:2,"class-name":"ivu-image-preview-operations",wrap:!1,onClick:t[11]||(t[11]=Re(()=>{},["stop"]))},{default:fe(()=>[n.toolbar.indexOf("zoomIn")>-1?(q(),Ne(y,{key:0,flex:"1",order:n.toolbar.indexOf("zoomIn")+1},{default:fe(()=>[(q(),Y("svg",{class:"ivu-image-preview-operations-item",onClick:t[4]||(t[4]=Re(A=>d.handleOperation("zoomIn"),["stop"])),viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"7197",width:"200",height:"200"},tu))]),_:1},8,["order"])):le("",!0),n.toolbar.indexOf("zoomOut")>-1?(q(),Ne(y,{key:1,flex:"1",order:n.toolbar.indexOf("zoomOut")+1},{default:fe(()=>[(q(),Y("svg",{class:"ivu-image-preview-operations-item",onClick:t[5]||(t[5]=Re(A=>d.handleOperation("zoomOut"),["stop"])),viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"7412",width:"200",height:"200"},ru))]),_:1},8,["order"])):le("",!0),n.toolbar.indexOf("original")>-1?(q(),Ne(y,{key:2,flex:"1",order:n.toolbar.indexOf("original")+1},{default:fe(()=>[ot((q(),Y("svg",{class:"ivu-image-preview-operations-item",onClick:t[6]||(t[6]=Re(A=>d.handleOperation("original"),["stop"])),viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"26672",width:"200",height:"200"},ou,512)),[[lt,!this.original]]),ot((q(),Y("svg",{class:"ivu-image-preview-operations-item",onClick:t[7]||(t[7]=Re(A=>d.handleOperation("original"),["stop"])),viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1976",width:"200",height:"200"},pu,512)),[[lt,this.original]])]),_:1},8,["order"])):le("",!0),n.toolbar.indexOf("rotateLeft")>-1?(q(),Ne(y,{key:3,flex:"1",order:n.toolbar.indexOf("rotateLeft")+1},{default:fe(()=>[(q(),Y("svg",{class:"ivu-image-preview-operations-item",onClick:t[8]||(t[8]=Re(A=>d.handleOperation("rotateLeft"),["stop"])),viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"13308",width:"200",height:"200"},hu))]),_:1},8,["order"])):le("",!0),n.toolbar.indexOf("rotateRight")>-1?(q(),Ne(y,{key:4,flex:"1",order:n.toolbar.indexOf("rotateRight")+1},{default:fe(()=>[(q(),Y("svg",{class:"ivu-image-preview-operations-item",onClick:t[9]||(t[9]=Re(A=>d.handleOperation("rotateRight"),["stop"])),viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"13521",width:"200",height:"200"},mu))]),_:1},8,["order"])):le("",!0),n.toolbar.indexOf("download")>-1?(q(),Ne(y,{key:5,flex:"1",order:n.toolbar.indexOf("download")+1},{default:fe(()=>[ot((q(),Y("svg",{class:"ivu-image-preview-operations-item",onClick:t[10]||(t[10]=Re(A=>d.handleOperation("download"),["stop"])),viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"8825",width:"200",height:"200"},gu,512)),[[lt,!s.downloading]]),ot((q(),Y("svg",bu,wu,512)),[[lt,s.downloading]])]),_:1},8,["order"])):le("",!0)]),_:1})):le("",!0),n.previewList.length>1?(q(),Ne(m,{key:3,class:G(d.leftClasses),type:"ios-arrow-back",onClick:t[12]||(t[12]=Re(A=>d.handleSwitch(!1),["stop"]))},null,8,["class"])):le("",!0),n.previewList.length>1?(q(),Ne(m,{key:4,class:G(d.rightClasses),type:"ios-arrow-forward",onClick:t[13]||(t[13]=Re(A=>d.handleSwitch(!0),["stop"]))},null,8,["class"])):le("",!0),z(m,{class:"ivu-image-preview-arrow-close",type:"md-close",onClick:Re(d.handleClose,["stop"])},null,8,["onClick"])],16)],4)):le("",!0)]),_:1})],8,["disabled"])}const La=_e(Xp,[["render",xu]]);La.newInstance=e=>{if(!me)return;const t=e||{};let n=null;const o=Xn({data(){return Object.assign({},t,{visible:!1,previewList:[],initialIndex:0,toolbar:["zoomIn","zoomOut","original","rotateLeft","rotateRight","download"],infinite:!0,maskClosable:!0,transfer:!0})},render(){return ve(La,Object.assign({},t,{ref:"imagePreview",modelValue:this.visible,previewList:this.previewList,initialIndex:this.initialIndex,toolbar:this.toolbar,infinite:this.infinite,maskClosable:this.maskClosable,transfer:this.transfer,"onOn-close":this.close}))},methods:{close(){this.visible=!1,setTimeout(()=>{this.destroy(),this.onRemove()},300)},destroy(){o.unmount(),document.body.removeChild(s)},onRemove(){}},created(){n=De()}}),s=document.createElement("div");document.body.appendChild(s),o.mount(s);const d=n.refs.imagePreview;return{show(p){Object.keys(p).forEach(y=>{d.$parent[y]=p[y]}),d.$parent.visible=!0},component:d}};let ba;function Eu(){return ba=ba||La.newInstance(),ba}La.show=function(e={}){const t=Eu();e.onRemove=function(){ba=null},t.show(e)};function Qo(){return za(),Gn}let Ri=Qo();Vt.newInstance=e=>{if(!me)return;const t=e||{};let n=null;const o=Xn({data(){return Object.assign({},t,{})},render(){let p="";return this.render?p=ve(Vt,{fix:!0,fullscreen:!0,ref:"spin"},[this.render(ve)]):p=ve(Vt,{size:"large",fix:!0,fullscreen:!0,ref:"spin"}),ve("div",{class:"ivu-spin-fullscreen ivu-spin-fullscreen-wrapper",style:{"z-index":2010+Ri}},[p])},created(){n=De()}}),s=document.createElement("div");document.body.appendChild(s),o.mount(s);const d=n.refs.spin;return{show(){ya(()=>{n.refs.spin.visible=!0,Ri=Qo()})},remove(p){d.visible=!1,setTimeout(function(){o.unmount(),document.body.removeChild(s),p()},500)},component:d}};let Un;function Ho(e=void 0){return Un=Un||Vt.newInstance({render:e}),Un}function Cu(e){const t="render"in e?e.render:void 0;Ho(t).show(e)}Vt.show=function(e={}){return Cu(e)};Vt.hide=function(){if(!Un)return!1;Ho().remove(()=>{Un=null})};const ca="ivu-loading-bar",ku={name:"LoadingBar",props:{color:{type:String,default:"primary"},failedColor:{type:String,default:"error"},height:{type:Number,default:2}},data(){return{percent:0,status:"success",show:!1}},computed:{classes(){return`${ca}`},innerClasses(){return[`${ca}-inner`,{[`${ca}-inner-color-primary`]:this.color==="primary"&&this.status==="success",[`${ca}-inner-failed-color-error`]:this.failedColor==="error"&&this.status==="error"}]},outerStyles(){return{height:`${this.height}px`}},styles(){let e={width:`${this.percent}%`,height:`${this.height}px`};return this.color!=="primary"&&this.status==="success"&&(e.backgroundColor=this.color),this.failedColor!=="error"&&this.status==="error"&&(e.backgroundColor=this.failedColor),e}}};function Bu(e,t,n,o,s,d){return q(),Ne(Ct,{name:"fade"},{default:fe(()=>[ot(Z("div",{class:G(d.classes),style:Le(d.outerStyles)},[Z("div",{class:G(d.innerClasses),style:Le(d.styles)},null,6)],6),[[lt,s.show]])]),_:1})}const qi=_e(ku,[["render",Bu]]);qi.newInstance=e=>{if(!me)return;const t=e||{};let n=null;const o=Xn({data(){return t},render(){return ve(qi,Object.assign({ref:"loadingBar"},t))},created(){n=De()}}),s=document.createElement("div");document.body.appendChild(s),o.mount(s);const d=n.refs.loadingBar;return{update(p){"percent"in p&&(d.percent=p.percent),p.status&&(d.status=p.status),"show"in p&&(d.show=p.show)},component:d,destroy(){o.unmount(),document.body.removeChild(s)}}};const Qe="ivu-modal",Pi={x:null,y:null,dragX:null,dragY:null,dragging:!1,rect:null},Su={inheritAttrs:!1,name:"Modal",mixins:[Tr,Lr],components:{Icon:At,iButton:qe},emits:["on-cancel","on-ok","on-hidden","on-visible-change","update:modelValue"],provide(){return{ModalInstance:this}},props:{modelValue:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},maskClosable:{type:Boolean,default(){const e=De().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.modal.maskClosable===""?!0:e.$VIEWUI.modal.maskClosable}},title:{type:String},width:{type:[Number,String],default:520},okText:{type:String},cancelText:{type:String},loading:{type:Boolean,default:!1},styles:{type:Object,default(){return{}}},className:{type:String},footerHide:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},transitionNames:{type:Array,default(){return["ease","fade"]}},transfer:{type:Boolean,default(){const e=De().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.transfer===""?!0:e.$VIEWUI.transfer}},fullscreen:{type:Boolean,default:!1},mask:{type:Boolean,default:!0},draggable:{type:Boolean,default:!1},sticky:{type:Boolean,default:!1},stickyDistance:{type:Number,default:10},resetDragPosition:{type:Boolean,default:!1},zIndex:{type:Number,default:1e3},beforeClose:Function,render:Function},data(){return{prefixCls:Qe,wrapShow:!1,showHead:!0,buttonLoading:!1,visible:this.modelValue,dragData:Ba(Pi),modalIndex:this.handleGetModalIndex(),isMouseTriggerIn:!1,id:Mo(6),tableList:[],sliderList:[]}},computed:{wrapClasses(){return[`${Qe}-wrap`,{[`${Qe}-hidden`]:!this.wrapShow,[`${this.className}`]:!!this.className,[`${Qe}-no-mask`]:!this.showMask}]},wrapStyles(){return{zIndex:this.modalIndex+this.zIndex}},maskClasses(){return`${Qe}-mask`},classes(){return[`${Qe}`,{[`${Qe}-fullscreen`]:this.fullscreen,[`${Qe}-fullscreen-no-header`]:this.fullscreen&&!this.showHead,[`${Qe}-fullscreen-no-footer`]:this.fullscreen&&this.footerHide}]},contentClasses(){return[`${Qe}-content`,{[`${Qe}-content-no-mask`]:!this.showMask,[`${Qe}-content-drag`]:this.draggable&&!this.fullscreen,[`${Qe}-content-dragging`]:this.draggable&&this.dragData.dragging}]},mainStyles(){let e={};const t=parseInt(this.width),n=this.dragData.x!==null?{top:0}:{width:t<=100?`${t}%`:`${t}px`},o=this.styles?this.styles:{};return Object.assign(e,n,o),e},contentStyles(){let e={};if(this.draggable&&!this.fullscreen){const t=this.styles.top?parseFloat(this.styles.top):0,n=this.styles.left?parseFloat(this.styles.left):0;this.dragData.x!==null&&(e.left=`${this.dragData.x-n}px`),this.dragData.y!==null&&(e.top=`${this.dragData.y}px`),this.dragData.y!==null&&(e.top=`${this.dragData.y-t}px`);const o=parseInt(this.width),s={width:o<=100?`${o}%`:`${o}px`};Object.assign(e,s)}return e},localeOkText(){return this.okText===void 0?this.t("i.modal.okText"):this.okText},localeCancelText(){return this.cancelText===void 0?this.t("i.modal.cancelText"):this.cancelText},showMask(){return this.mask}},methods:{close(){if(!this.beforeClose)return this.handleClose();const e=this.beforeClose();e&&e.then?e.then(()=>{this.handleClose()}):this.handleClose()},handleClose(){this.visible=!1,this.$emit("update:modelValue",!1),this.$emit("on-cancel")},handleMask(){this.maskClosable&&this.showMask&&this.close()},handleWrapClick(e){if(this.isMouseTriggerIn){this.isMouseTriggerIn=!1;return}const t=e.target.getAttribute("class");t&&t.indexOf(`${Qe}-wrap`)>-1&&this.handleMask()},handleMousedown(){this.isMouseTriggerIn=!0},cancel(){this.close()},ok(){this.loading?this.buttonLoading=!0:(this.visible=!1,this.$emit("update:modelValue",!1)),this.$emit("on-ok")},EscClose(e){if(this.visible&&this.closable&&e.keyCode===27){const n=this.$root.modalList.map(o=>o.modal).filter(o=>o.$data.visible&&o.$props.closable).sort((o,s)=>o.$data.modalIndex<s.$data.modalIndex?1:-1)[0];setTimeout(()=>{n.close()},0)}},animationFinish(){this.$emit("on-hidden")},handleMoveStart(e){if(!this.draggable||this.fullscreen)return!1;const n=this.$refs.content.getBoundingClientRect();this.dragData.rect=n,this.dragData.x=n.x||n.left,this.dragData.y=n.y||n.top;const o={x:e.clientX,y:e.clientY};this.dragData.dragX=o.x,this.dragData.dragY=o.y,this.dragData.dragging=!0,xt(window,"mousemove",this.handleMoveMove),xt(window,"mouseup",this.handleMoveEnd)},handleMoveMove(e){if(!this.dragData.dragging||this.fullscreen)return!1;const t={x:e.clientX,y:e.clientY},n={x:t.x-this.dragData.dragX,y:t.y-this.dragData.dragY};if(me&&this.sticky){const o=document.documentElement.clientWidth,s=document.documentElement.clientHeight;this.dragData.x+n.x<=this.stickyDistance&&n.x<0?this.dragData.x=0:this.dragData.x+this.dragData.rect.width-o>-this.stickyDistance&&n.x>0?this.dragData.x=o-this.dragData.rect.width:this.dragData.x+=n.x,this.dragData.y+n.y<=this.stickyDistance&&n.y<0?this.dragData.y=0:this.dragData.y+this.dragData.rect.height-s>-this.stickyDistance&&n.y>0?this.dragData.y=s-this.dragData.rect.height:this.dragData.y+=n.y}else this.dragData.x+=n.x,this.dragData.y+=n.y;this.dragData.dragX=t.x,this.dragData.dragY=t.y},handleMoveEnd(){this.dragData.dragging=!1,Et(window,"mousemove",this.handleMoveMove),Et(window,"mouseup",this.handleMoveEnd)},handleGetModalIndex(){return za(),Gn},handleClickModal(){if(this.draggable){if(Aa!==this.lastVisibleIndex){this.lastVisibleIndex=Aa;return}this.modalIndex=this.handleGetModalIndex()}},addModal(){const e=this.$root;e.modalList||(e.modalList=[]),e.modalList.push({id:this.id,modal:this})},removeModal(){const e=this.$root;if(!e.modalList)return;const t=e.modalList.findIndex(n=>n.id===this.id);e.modalList.splice(t,1)}},watch:{modelValue(e){this.visible=e},visible(e){e===!1?(this.buttonLoading=!1,this.timer=setTimeout(()=>{this.wrapShow=!1,this.removeScrollEffect()},300)):(this.lastVisible!==e&&(this.modalIndex=this.handleGetModalIndex(),$d()),this.timer&&clearTimeout(this.timer),this.wrapShow=!0,this.scrollable||this.addScrollEffect()),this.tableList.forEach(t=>{t.table.handleOnVisibleChange(e)}),this.sliderList.forEach(t=>{t.slider.handleOnVisibleChange(e)}),this.$emit("on-visible-change",e),this.lastVisible=e,this.lastVisibleIndex=Aa,e&&this.resetDragPosition&&(this.dragData=Ba(Pi))},loading(e){e||(this.buttonLoading=!1)},scrollable(e){e?this.removeScrollEffect():this.addScrollEffect()},title(e){this.$slots.header===void 0&&(this.showHead=!!e)}},mounted(){this.visible&&(this.wrapShow=!0);let e=!0;this.$slots.header===void 0&&!this.title&&(e=!1),this.showHead=e,this.addModal(),me&&document.addEventListener("keydown",this.EscClose)},beforeUnmount(){this.removeModal(),me&&document.removeEventListener("keydown",this.EscClose),this.removeScrollEffect()}};function Iu(e,t,n,o,s,d){const p=nt("Icon"),y=nt("i-button");return q(),Ne(Cr,{to:"body",disabled:!n.transfer},[z(Ct,{name:n.transitionNames[1]},{default:fe(()=>[d.showMask?ot((q(),Y("div",{key:0,class:G(d.maskClasses),style:Le(d.wrapStyles),onClick:t[0]||(t[0]=(...w)=>d.handleMask&&d.handleMask(...w))},null,6)),[[lt,s.visible]]):le("",!0)]),_:1},8,["name"]),Z("div",{class:G(d.wrapClasses),style:Le(d.wrapStyles),onClick:t[5]||(t[5]=(...w)=>d.handleWrapClick&&d.handleWrapClick(...w))},[z(Ct,{name:n.transitionNames[0],onAfterLeave:d.animationFinish},{default:fe(()=>[ot(Z("div",Er(e.$attrs,{class:d.classes,style:d.mainStyles,onMousedown:t[4]||(t[4]=(...w)=>d.handleMousedown&&d.handleMousedown(...w))}),[Z("div",{class:G(d.contentClasses),ref:"content",style:Le(d.contentStyles),onClick:t[3]||(t[3]=(...w)=>d.handleClickModal&&d.handleClickModal(...w))},[n.closable?(q(),Y("a",{key:0,class:G([s.prefixCls+"-close"]),onClick:t[1]||(t[1]=(...w)=>d.close&&d.close(...w))},[de(e.$slots,"close",{},()=>[z(p,{type:"ios-close"})])],2)):le("",!0),s.showHead?(q(),Y("div",{key:1,class:G([s.prefixCls+"-header"]),onMousedown:t[2]||(t[2]=(...w)=>d.handleMoveStart&&d.handleMoveStart(...w))},[de(e.$slots,"header",{},()=>[Z("div",{class:G([s.prefixCls+"-header-inner"])},je(n.title),3)])],34)):le("",!0),Z("div",{class:G([s.prefixCls+"-body"])},[de(e.$slots,"default")],2),n.footerHide?le("",!0):(q(),Y("div",{key:2,class:G([s.prefixCls+"-footer"])},[de(e.$slots,"footer",{},()=>[z(y,{type:"text",onClick:d.cancel},{default:fe(()=>[Pt(je(d.localeCancelText),1)]),_:1},8,["onClick"]),z(y,{type:"primary",loading:s.buttonLoading,onClick:d.ok},{default:fe(()=>[Pt(je(d.localeOkText),1)]),_:1},8,["loading","onClick"])])],2))],6)],16),[[lt,s.visible]])]),_:3},8,["name","onAfterLeave"])],6)],8,["disabled"])}const Ge=_e(Su,[["render",Iu]]),vt="ivu-modal-confirm";Ge.newInstance=e=>{if(!me)return;const t=e||{},n=document.createElement("div");document.body.appendChild(n);let o=null;const s=Xn({mixins:[Tr],data(){return Object.assign({},t,{visible:!1,width:416,title:"",body:"",iconType:"",iconName:"",okText:void 0,cancelText:void 0,showCancel:!1,loading:!1,buttonLoading:!1,scrollable:!1,closable:!1,closing:!1})},render(){let p=[];this.showCancel&&p.push(ve(qe,{type:"text",onClick:this.cancel},()=>this.localeCancelText)),p.push(ve(qe,{type:"primary",loading:this.buttonLoading,onClick:this.ok},()=>this.localeOkText));let y;this.render?y=ve("div",{class:`${vt}-body ${vt}-body-render`},[this.render(ve)]):y=ve("div",{class:`${vt}-body`},[ve("div",{innerHTML:this.body})]);let w;return this.title&&(w=ve("div",{class:`${vt}-head`},[ve("div",{class:this.iconTypeCls},[ve("i",{class:this.iconNameCls})]),ve("div",{class:`${vt}-head-title`,innerHTML:this.title})])),ve(Ge,Object.assign({},t,{width:this.width,scrollable:this.scrollable,closable:this.closable,ref:"modal"},{modelValue:this.visible,"onUpdate:modelValue":m=>this.visible=m,"onOn-cancel":this.cancel}),()=>ve("div",{class:vt},[w,y,ve("div",{class:`${vt}-footer`},p)]))},computed:{iconTypeCls(){return[`${vt}-head-icon`,`${vt}-head-icon-${this.iconType}`]},iconNameCls(){return["ivu-icon",`ivu-icon-${this.iconName}`]},localeOkText(){return this.okText?this.okText:this.t("i.modal.okText")},localeCancelText(){return this.cancelText?this.cancelText:this.t("i.modal.cancelText")}},methods:{cancel(){this.closing||(this.$refs.modal.visible=!1,this.buttonLoading=!1,this.onCancel(),this.remove())},ok(){this.closing||(this.loading?this.buttonLoading=!0:(this.$refs.modal.visible=!1,this.remove()),this.onOk())},remove(){this.closing=!0,setTimeout(()=>{this.closing=!1,this.destroy()},300)},destroy(){s.unmount(),document.body.removeChild(n),this.onRemove()},onOk(){},onCancel(){},onRemove(){}},created(){o=De()}});s.mount(n);const d=o.refs.modal;return{show(p){switch(d.$parent.showCancel=p.showCancel,d.$parent.iconType=p.icon,p.icon){case"info":d.$parent.iconName="ios-information-circle";break;case"success":d.$parent.iconName="ios-checkmark-circle";break;case"warning":d.$parent.iconName="ios-alert";break;case"error":d.$parent.iconName="ios-close-circle";break;case"confirm":d.$parent.iconName="ios-help-circle";break}"width"in p&&(d.$parent.width=p.width),"closable"in p&&(d.$parent.closable=p.closable),"title"in p&&(d.$parent.title=p.title),"content"in p&&(d.$parent.body=p.content),"okText"in p&&(d.$parent.okText=p.okText),"cancelText"in p&&(d.$parent.cancelText=p.cancelText),"onCancel"in p&&(d.$parent.onCancel=p.onCancel),"onOk"in p&&(d.$parent.onOk=p.onOk),"loading"in p&&(d.$parent.loading=p.loading),"scrollable"in p&&(d.$parent.scrollable=p.scrollable),d.$parent.onRemove=p.onRemove,d.visible=!0},remove(){d.visible=!1,d.$parent.buttonLoading=!1,d.$parent.remove()},component:d}};let jn;function Yo(e=void 0,t=!0){return jn=jn||Ge.newInstance({closable:!1,maskClosable:!1,footerHide:!0,render:e,lockScroll:t}),jn}function Jn(e){const t="render"in e?e.render:void 0,n="lockScroll"in e?e.lockScroll:!0;let o=Yo(t,n);e.onRemove=function(){jn=null},o.show(e)}Ge.info=function(e={}){return e.icon="info",e.showCancel=!1,Jn(e)};Ge.success=function(e={}){return e.icon="success",e.showCancel=!1,Jn(e)};Ge.warning=function(e={}){return e.icon="warning",e.showCancel=!1,Jn(e)};Ge.error=function(e={}){return e.icon="error",e.showCancel=!1,Jn(e)};Ge.confirm=function(e={}){return e.icon="confirm",e.showCancel=!0,Jn(e)};Ge.remove=function(){if(!jn)return!1;Yo().remove()};var Tu={exports:{}};/*! @preserve
 * numeral.js
 * version : 2.0.6
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */(function(e){(function(t,n){e.exports?e.exports=n():t.numeral=n()})(zt,function(){var t,n,o="2.0.6",s={},d={},p={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},y={currentLocale:p.currentLocale,zeroFormat:p.zeroFormat,nullFormat:p.nullFormat,defaultFormat:p.defaultFormat,scalePercentBy100:p.scalePercentBy100};function w(m,A){this._input=m,this._value=A}return t=function(m){var A,x,f,E;if(t.isNumeral(m))A=m.value();else if(m===0||typeof m>"u")A=0;else if(m===null||n.isNaN(m))A=null;else if(typeof m=="string")if(y.zeroFormat&&m===y.zeroFormat)A=0;else if(y.nullFormat&&m===y.nullFormat||!m.replace(/[^0-9]+/g,"").length)A=null;else{for(x in s)if(E=typeof s[x].regexps.unformat=="function"?s[x].regexps.unformat():s[x].regexps.unformat,E&&m.match(E)){f=s[x].unformat;break}f=f||t._.stringToNumber,A=f(m)}else A=Number(m)||null;return new w(m,A)},t.version=o,t.isNumeral=function(m){return m instanceof w},t._=n={numberToFormat:function(m,A,x){var f=d[t.options.currentLocale],E=!1,C=!1,g=0,B="",M=1e12,L=1e9,_=1e6,D=1e3,H="",I=!1,N,ne,K,F,$e,Ye,J;if(m=m||0,ne=Math.abs(m),t._.includes(A,"(")?(E=!0,A=A.replace(/[\(|\)]/g,"")):(t._.includes(A,"+")||t._.includes(A,"-"))&&($e=t._.includes(A,"+")?A.indexOf("+"):m<0?A.indexOf("-"):-1,A=A.replace(/[\+|\-]/g,"")),t._.includes(A,"a")&&(N=A.match(/a(k|m|b|t)?/),N=N?N[1]:!1,t._.includes(A," a")&&(B=" "),A=A.replace(new RegExp(B+"a[kmbt]?"),""),ne>=M&&!N||N==="t"?(B+=f.abbreviations.trillion,m=m/M):ne<M&&ne>=L&&!N||N==="b"?(B+=f.abbreviations.billion,m=m/L):ne<L&&ne>=_&&!N||N==="m"?(B+=f.abbreviations.million,m=m/_):(ne<_&&ne>=D&&!N||N==="k")&&(B+=f.abbreviations.thousand,m=m/D)),t._.includes(A,"[.]")&&(C=!0,A=A.replace("[.]",".")),K=m.toString().split(".")[0],F=A.split(".")[1],Ye=A.indexOf(","),g=(A.split(".")[0].split(",")[0].match(/0/g)||[]).length,F?(t._.includes(F,"[")?(F=F.replace("]",""),F=F.split("["),H=t._.toFixed(m,F[0].length+F[1].length,x,F[1].length)):H=t._.toFixed(m,F.length,x),K=H.split(".")[0],t._.includes(H,".")?H=f.delimiters.decimal+H.split(".")[1]:H="",C&&Number(H.slice(1))===0&&(H="")):K=t._.toFixed(m,0,x),B&&!N&&Number(K)>=1e3&&B!==f.abbreviations.trillion)switch(K=String(Number(K)/1e3),B){case f.abbreviations.thousand:B=f.abbreviations.million;break;case f.abbreviations.million:B=f.abbreviations.billion;break;case f.abbreviations.billion:B=f.abbreviations.trillion;break}if(t._.includes(K,"-")&&(K=K.slice(1),I=!0),K.length<g)for(var j=g-K.length;j>0;j--)K="0"+K;return Ye>-1&&(K=K.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+f.delimiters.thousands)),A.indexOf(".")===0&&(K=""),J=K+H+(B||""),E?J=(E&&I?"(":"")+J+(E&&I?")":""):$e>=0?J=$e===0?(I?"-":"+")+J:J+(I?"-":"+"):I&&(J="-"+J),J},stringToNumber:function(m){var A=d[y.currentLocale],x=m,f={thousand:3,million:6,billion:9,trillion:12},E,C,g;if(y.zeroFormat&&m===y.zeroFormat)C=0;else if(y.nullFormat&&m===y.nullFormat||!m.replace(/[^0-9]+/g,"").length)C=null;else{C=1,A.delimiters.decimal!=="."&&(m=m.replace(/\./g,"").replace(A.delimiters.decimal,"."));for(E in f)if(g=new RegExp("[^a-zA-Z]"+A.abbreviations[E]+"(?:\\)|(\\"+A.currency.symbol+")?(?:\\))?)?$"),x.match(g)){C*=Math.pow(10,f[E]);break}C*=(m.split("-").length+Math.min(m.split("(").length-1,m.split(")").length-1))%2?1:-1,m=m.replace(/[^0-9\.]+/g,""),C*=Number(m)}return C},isNaN:function(m){return typeof m=="number"&&isNaN(m)},includes:function(m,A){return m.indexOf(A)!==-1},insert:function(m,A,x){return m.slice(0,x)+A+m.slice(x)},reduce:function(m,A){if(this===null)throw new TypeError("Array.prototype.reduce called on null or undefined");if(typeof A!="function")throw new TypeError(A+" is not a function");var x=Object(m),f=x.length>>>0,E=0,C;if(arguments.length===3)C=arguments[2];else{for(;E<f&&!(E in x);)E++;if(E>=f)throw new TypeError("Reduce of empty array with no initial value");C=x[E++]}for(;E<f;E++)E in x&&(C=A(C,x[E],E,x));return C},multiplier:function(m){var A=m.toString().split(".");return A.length<2?1:Math.pow(10,A[1].length)},correctionFactor:function(){var m=Array.prototype.slice.call(arguments);return m.reduce(function(A,x){var f=n.multiplier(x);return A>f?A:f},1)},toFixed:function(m,A,x,f){var E=m.toString().split("."),C=A-(f||0),g,B,M,L;return E.length===2?g=Math.min(Math.max(E[1].length,C),A):g=C,M=Math.pow(10,g),L=(x(m+"e+"+g)/M).toFixed(g),f>A-g&&(B=new RegExp("\\.?0{1,"+(f-(A-g))+"}$"),L=L.replace(B,"")),L}},t.options=y,t.formats=s,t.locales=d,t.locale=function(m){return m&&(y.currentLocale=m.toLowerCase()),y.currentLocale},t.localeData=function(m){if(!m)return d[y.currentLocale];if(m=m.toLowerCase(),!d[m])throw new Error("Unknown locale : "+m);return d[m]},t.reset=function(){for(var m in p)y[m]=p[m]},t.zeroFormat=function(m){y.zeroFormat=typeof m=="string"?m:null},t.nullFormat=function(m){y.nullFormat=typeof m=="string"?m:null},t.defaultFormat=function(m){y.defaultFormat=typeof m=="string"?m:"0.0"},t.register=function(m,A,x){if(A=A.toLowerCase(),this[m+"s"][A])throw new TypeError(A+" "+m+" already registered.");return this[m+"s"][A]=x,x},t.validate=function(m,A){var x,f,E,C,g,B,M,L;if(typeof m!="string"&&(m+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",m)),m=m.trim(),m.match(/^\d+$/))return!0;if(m==="")return!1;try{M=t.localeData(A)}catch{M=t.localeData(t.locale())}return E=M.currency.symbol,g=M.abbreviations,x=M.delimiters.decimal,M.delimiters.thousands==="."?f="\\.":f=M.delimiters.thousands,L=m.match(/^[^\d]+/),L!==null&&(m=m.substr(1),L[0]!==E)||(L=m.match(/[^\d]+$/),L!==null&&(m=m.slice(0,-1),L[0]!==g.thousand&&L[0]!==g.million&&L[0]!==g.billion&&L[0]!==g.trillion))?!1:(B=new RegExp(f+"{2}"),m.match(/[^\d.,]/g)?!1:(C=m.split(x),C.length>2?!1:C.length<2?!!C[0].match(/^\d+.*\d$/)&&!C[0].match(B):C[0].length===1?!!C[0].match(/^\d+$/)&&!C[0].match(B)&&!!C[1].match(/^\d+$/):!!C[0].match(/^\d+.*\d$/)&&!C[0].match(B)&&!!C[1].match(/^\d+$/)))},t.fn=w.prototype={clone:function(){return t(this)},format:function(m,A){var x=this._value,f=m||y.defaultFormat,E,C,g;if(A=A||Math.round,x===0&&y.zeroFormat!==null)C=y.zeroFormat;else if(x===null&&y.nullFormat!==null)C=y.nullFormat;else{for(E in s)if(f.match(s[E].regexps.format)){g=s[E].format;break}g=g||t._.numberToFormat,C=g(x,f,A)}return C},value:function(){return this._value},input:function(){return this._input},set:function(m){return this._value=Number(m),this},add:function(m){var A=n.correctionFactor.call(null,this._value,m);function x(f,E,C,g){return f+Math.round(A*E)}return this._value=n.reduce([this._value,m],x,0)/A,this},subtract:function(m){var A=n.correctionFactor.call(null,this._value,m);function x(f,E,C,g){return f-Math.round(A*E)}return this._value=n.reduce([m],x,Math.round(this._value*A))/A,this},multiply:function(m){function A(x,f,E,C){var g=n.correctionFactor(x,f);return Math.round(x*g)*Math.round(f*g)/Math.round(g*g)}return this._value=n.reduce([this._value,m],A,1),this},divide:function(m){function A(x,f,E,C){var g=n.correctionFactor(x,f);return Math.round(x*g)/Math.round(f*g)}return this._value=n.reduce([this._value,m],A),this},difference:function(m){return Math.abs(t(this._value).subtract(m).value())}},t.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(m){var A=m%10;return~~(m%100/10)===1?"th":A===1?"st":A===2?"nd":A===3?"rd":"th"},currency:{symbol:"$"}}),function(){t.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(m,A,x){var f=t._.includes(A," BPS")?" ":"",E;return m=m*1e4,A=A.replace(/\s?BPS/,""),E=t._.numberToFormat(m,A,x),t._.includes(E,")")?(E=E.split(""),E.splice(-1,0,f+"BPS"),E=E.join("")):E=E+f+"BPS",E},unformat:function(m){return+(t._.stringToNumber(m)*1e-4).toFixed(15)}})}(),function(){var m={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]},A={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},x=m.suffixes.concat(A.suffixes.filter(function(E){return m.suffixes.indexOf(E)<0})),f=x.join("|");f="("+f.replace("B","B(?!PS)")+")",t.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(f)},format:function(E,C,g){var B,M=t._.includes(C,"ib")?A:m,L=t._.includes(C," b")||t._.includes(C," ib")?" ":"",_,D,H;for(C=C.replace(/\s?i?b/,""),_=0;_<=M.suffixes.length;_++)if(D=Math.pow(M.base,_),H=Math.pow(M.base,_+1),E===null||E===0||E>=D&&E<H){L+=M.suffixes[_],D>0&&(E=E/D);break}return B=t._.numberToFormat(E,C,g),B+L},unformat:function(E){var C=t._.stringToNumber(E),g,B;if(C){for(g=m.suffixes.length-1;g>=0;g--){if(t._.includes(E,m.suffixes[g])){B=Math.pow(m.base,g);break}if(t._.includes(E,A.suffixes[g])){B=Math.pow(A.base,g);break}}C*=B||1}return C}})}(),function(){t.register("format","currency",{regexps:{format:/(\$)/},format:function(m,A,x){var f=t.locales[t.options.currentLocale],E={before:A.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:A.match(/([\+|\-|\)|\s|\$]*)$/)[0]},C,g,B;for(A=A.replace(/\s?\$\s?/,""),C=t._.numberToFormat(m,A,x),m>=0?(E.before=E.before.replace(/[\-\(]/,""),E.after=E.after.replace(/[\-\)]/,"")):m<0&&!t._.includes(E.before,"-")&&!t._.includes(E.before,"(")&&(E.before="-"+E.before),B=0;B<E.before.length;B++)switch(g=E.before[B],g){case"$":C=t._.insert(C,f.currency.symbol,B);break;case" ":C=t._.insert(C," ",B+f.currency.symbol.length-1);break}for(B=E.after.length-1;B>=0;B--)switch(g=E.after[B],g){case"$":C=B===E.after.length-1?C+f.currency.symbol:t._.insert(C,f.currency.symbol,-(E.after.length-(1+B)));break;case" ":C=B===E.after.length-1?C+" ":t._.insert(C," ",-(E.after.length-(1+B)+f.currency.symbol.length-1));break}return C}})}(),function(){t.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(m,A,x){var f,E=typeof m=="number"&&!t._.isNaN(m)?m.toExponential():"0e+0",C=E.split("e");return A=A.replace(/e[\+|\-]{1}0/,""),f=t._.numberToFormat(Number(C[0]),A,x),f+"e"+C[1]},unformat:function(m){var A=t._.includes(m,"e+")?m.split("e+"):m.split("e-"),x=Number(A[0]),f=Number(A[1]);f=t._.includes(m,"e-")?f*=-1:f;function E(C,g,B,M){var L=t._.correctionFactor(C,g),_=C*L*(g*L)/(L*L);return _}return t._.reduce([x,Math.pow(10,f)],E,1)}})}(),function(){t.register("format","ordinal",{regexps:{format:/(o)/},format:function(m,A,x){var f=t.locales[t.options.currentLocale],E,C=t._.includes(A," o")?" ":"";return A=A.replace(/\s?o/,""),C+=f.ordinal(m),E=t._.numberToFormat(m,A,x),E+C}})}(),function(){t.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(m,A,x){var f=t._.includes(A," %")?" ":"",E;return t.options.scalePercentBy100&&(m=m*100),A=A.replace(/\s?\%/,""),E=t._.numberToFormat(m,A,x),t._.includes(E,")")?(E=E.split(""),E.splice(-1,0,f+"%"),E=E.join("")):E=E+f+"%",E},unformat:function(m){var A=t._.stringToNumber(m);return t.options.scalePercentBy100?A*.01:A}})}(),function(){t.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(m,A,x){var f=Math.floor(m/60/60),E=Math.floor((m-f*60*60)/60),C=Math.round(m-f*60*60-E*60);return f+":"+(E<10?"0"+E:E)+":"+(C<10?"0"+C:C)},unformat:function(m){var A=m.split(":"),x=0;return A.length===3?(x=x+Number(A[0])*60*60,x=x+Number(A[1])*60,x=x+Number(A[2])):A.length===2&&(x=x+Number(A[0])*60,x=x+Number(A[1])),Number(x)}})}(),t})})(Tu);Pd();const Gt="ivu-switch",Lu={name:"iSwitch",mixins:[Zn],emits:["update:modelValue","on-change"],props:{modelValue:{type:[String,Number,Boolean],default:!1},trueValue:{type:[String,Number,Boolean],default:!0},falseValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:!1},size:{validator(e){return Te(e,["large","small","default"])},default(){const e=De().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.size===""?"default":e.$VIEWUI.size}},name:{type:String},loading:{type:Boolean,default:!1},trueColor:{type:String},falseColor:{type:String},beforeChange:Function},data(){return{currentValue:this.modelValue}},computed:{wrapClasses(){return[`${Gt}`,{[`${Gt}-checked`]:this.currentValue===this.trueValue,[`${Gt}-disabled`]:this.itemDisabled,[`${Gt}-${this.size}`]:!!this.size,[`${Gt}-loading`]:this.loading}]},wrapStyles(){let e={};return this.trueColor&&this.currentValue===this.trueValue?(e["border-color"]=this.trueColor,e["background-color"]=this.trueColor):this.falseColor&&this.currentValue===this.falseValue&&(e["border-color"]=this.falseColor,e["background-color"]=this.falseColor),e},innerClasses(){return`${Gt}-inner`}},methods:{handleToggle(){const e=this.currentValue===this.trueValue?this.falseValue:this.trueValue;this.currentValue=e,this.$emit("update:modelValue",e),this.$emit("on-change",e),this.handleFormItemChange("change",e)},toggle(e){if(e.preventDefault(),this.itemDisabled||this.loading)return!1;if(!this.beforeChange)return this.handleToggle();const t=this.beforeChange();t&&t.then?t.then(()=>{this.handleToggle()}):this.handleToggle()}},watch:{modelValue(e){if(e!==this.trueValue&&e!==this.falseValue&&e!==null)throw"Value should be trueValue or falseValue.";this.currentValue=e}}},Du=["name","value"];function zu(e,t,n,o,s,d){return q(),Y("span",{tabindex:"0",class:G(d.wrapClasses),style:Le(d.wrapStyles),onClick:t[0]||(t[0]=(...p)=>d.toggle&&d.toggle(...p)),onKeydown:t[1]||(t[1]=dr((...p)=>d.toggle&&d.toggle(...p),["space"]))},[Z("input",{type:"hidden",name:n.name,value:s.currentValue},null,8,Du),Z("span",{class:G(d.innerClasses)},[s.currentValue===n.trueValue?de(e.$slots,"open",{key:0}):le("",!0),s.currentValue===n.falseValue?de(e.$slots,"close",{key:1}):le("",!0)],2)],38)}const Mu=_e(Lu,[["render",zu]]);/*!
 * Viewer.js v1.11.5
 * https://fengyuanchen.github.io/viewerjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2023-08-26T07:33:16.755Z
 */function Vi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,o)}return n}function Dr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vi(Object(n),!0).forEach(function(o){Nu(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vi(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function yr(e){"@babel/helpers - typeof";return yr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yr(e)}function Ou(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function $i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,Ko(o.key),o)}}function _u(e,t,n){return t&&$i(e.prototype,t),n&&$i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Nu(e,t,n){return t=Ko(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Fu(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ko(e){var t=Fu(e,"string");return typeof t=="symbol"?t:String(t)}var Ui={backdrop:!0,button:!0,navbar:!0,title:!0,toolbar:!0,className:"",container:"body",filter:null,fullscreen:!0,inheritedAttributes:["crossOrigin","decoding","isMap","loading","referrerPolicy","sizes","srcset","useMap"],initialCoverage:.9,initialViewIndex:0,inline:!1,interval:5e3,keyboard:!0,focus:!0,loading:!0,loop:!0,minWidth:200,minHeight:100,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,slideOnTouch:!0,toggleOnDblclick:!0,tooltip:!0,transition:!0,zIndex:2015,zIndexInline:0,zoomRatio:.1,minZoomRatio:.01,maxZoomRatio:100,url:"src",ready:null,show:null,shown:null,hide:null,hidden:null,view:null,viewed:null,move:null,moved:null,rotate:null,rotated:null,scale:null,scaled:null,zoom:null,zoomed:null,play:null,stop:null},Ru='<div class="viewer-container" tabindex="-1" touch-action="none"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><div class="viewer-toolbar"></div><div class="viewer-navbar"><ul class="viewer-list" role="navigation"></ul></div></div><div class="viewer-tooltip" role="alert" aria-hidden="true"></div><div class="viewer-button" data-viewer-action="mix" role="button"></div><div class="viewer-player"></div></div>',Ma=typeof window<"u"&&typeof window.document<"u",kt=Ma?window:{},rn=Ma&&kt.document.documentElement?"ontouchstart"in kt.document.documentElement:!1,zr=Ma?"PointerEvent"in kt:!1,se="viewer",va="move",Xo="switch",qn="zoom",pa="".concat(se,"-active"),qu="".concat(se,"-close"),wa="".concat(se,"-fade"),Ar="".concat(se,"-fixed"),Pu="".concat(se,"-fullscreen"),ji="".concat(se,"-fullscreen-exit"),qt="".concat(se,"-hide"),Vu="".concat(se,"-hide-md-down"),$u="".concat(se,"-hide-sm-down"),Uu="".concat(se,"-hide-xs-down"),Je="".concat(se,"-in"),Wn="".concat(se,"-invisible"),on="".concat(se,"-loading"),ju="".concat(se,"-move"),Wi="".concat(se,"-open"),Zt="".concat(se,"-show"),Ce="".concat(se,"-transition"),ln="click",gr="dblclick",Qi="dragstart",Hi="focusin",Yi="keydown",tt="load",$t="error",Wu=rn?"touchend touchcancel":"mouseup",Qu=rn?"touchmove":"mousemove",Hu=rn?"touchstart":"mousedown",Ki=zr?"pointerdown":Hu,Xi=zr?"pointermove":Qu,Gi=zr?"pointerup pointercancel":Wu,Zi="resize",it="transitionend",Ji="wheel",eo="ready",to="show",no="shown",ao="hide",ro="hidden",io="view",Qn="viewed",oo="move",lo="moved",so="rotate",co="rotated",po="scale",uo="scaled",ho="zoom",fo="zoomed",mo="play",yo="stop",Da="".concat(se,"Action"),Mr=/\s\s*/,ua=["zoom-in","zoom-out","one-to-one","reset","prev","play","next","rotate-left","rotate-right","flip-horizontal","flip-vertical"];function Hn(e){return typeof e=="string"}var Yu=Number.isNaN||kt.isNaN;function we(e){return typeof e=="number"&&!Yu(e)}function en(e){return typeof e>"u"}function sn(e){return yr(e)==="object"&&e!==null}var Ku=Object.prototype.hasOwnProperty;function tn(e){if(!sn(e))return!1;try{var t=e.constructor,n=t.prototype;return t&&n&&Ku.call(n,"isPrototypeOf")}catch{return!1}}function Ae(e){return typeof e=="function"}function be(e,t){if(e&&Ae(t))if(Array.isArray(e)||we(e.length)){var n=e.length,o;for(o=0;o<n&&t.call(e,e[o],o,e)!==!1;o+=1);}else sn(e)&&Object.keys(e).forEach(function(s){t.call(e,e[s],s,e)});return e}var Xe=Object.assign||function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),s=1;s<n;s++)o[s-1]=arguments[s];return sn(t)&&o.length>0&&o.forEach(function(d){sn(d)&&Object.keys(d).forEach(function(p){t[p]=d[p]})}),t},Xu=/^(?:width|height|left|top|marginLeft|marginTop)$/;function dt(e,t){var n=e.style;be(t,function(o,s){Xu.test(s)&&we(o)&&(o+="px"),n[s]=o})}function Gu(e){return Hn(e)?e.replace(/&(?!amp;|quot;|#39;|lt;|gt;)/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):e}function Jt(e,t){return!e||!t?!1:e.classList?e.classList.contains(t):e.className.indexOf(t)>-1}function ie(e,t){if(!(!e||!t)){if(we(e.length)){be(e,function(o){ie(o,t)});return}if(e.classList){e.classList.add(t);return}var n=e.className.trim();n?n.indexOf(t)<0&&(e.className="".concat(n," ").concat(t)):e.className=t}}function ce(e,t){if(!(!e||!t)){if(we(e.length)){be(e,function(n){ce(n,t)});return}if(e.classList){e.classList.remove(t);return}e.className.indexOf(t)>=0&&(e.className=e.className.replace(t,""))}}function Yn(e,t,n){if(t){if(we(e.length)){be(e,function(o){Yn(o,t,n)});return}n?ie(e,t):ce(e,t)}}var Zu=/([a-z\d])([A-Z])/g;function Or(e){return e.replace(Zu,"$1-$2").toLowerCase()}function nn(e,t){return sn(e[t])?e[t]:e.dataset?e.dataset[t]:e.getAttribute("data-".concat(Or(t)))}function br(e,t,n){sn(n)?e[t]=n:e.dataset?e.dataset[t]=n:e.setAttribute("data-".concat(Or(t)),n)}var Go=function(){var e=!1;if(Ma){var t=!1,n=function(){},o=Object.defineProperty({},"once",{get:function(){return e=!0,t},set:function(d){t=d}});kt.addEventListener("test",n,o),kt.removeEventListener("test",n,o)}return e}();function ge(e,t,n){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},s=n;t.trim().split(Mr).forEach(function(d){if(!Go){var p=e.listeners;p&&p[d]&&p[d][n]&&(s=p[d][n],delete p[d][n],Object.keys(p[d]).length===0&&delete p[d],Object.keys(p).length===0&&delete e.listeners)}e.removeEventListener(d,s,o)})}function oe(e,t,n){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},s=n;t.trim().split(Mr).forEach(function(d){if(o.once&&!Go){var p=e.listeners,y=p===void 0?{}:p;s=function(){delete y[d][n],e.removeEventListener(d,s,o);for(var m=arguments.length,A=new Array(m),x=0;x<m;x++)A[x]=arguments[x];n.apply(e,A)},y[d]||(y[d]={}),y[d][n]&&e.removeEventListener(d,y[d][n],o),y[d][n]=s,e.listeners=y}e.addEventListener(d,s,o)})}function Be(e,t,n,o){var s;return Ae(Event)&&Ae(CustomEvent)?s=new CustomEvent(t,Dr({bubbles:!0,cancelable:!0,detail:n},o)):(s=document.createEvent("CustomEvent"),s.initCustomEvent(t,!0,!0,n)),e.dispatchEvent(s)}function Ju(e){var t=e.getBoundingClientRect();return{left:t.left+(window.pageXOffset-document.documentElement.clientLeft),top:t.top+(window.pageYOffset-document.documentElement.clientTop)}}function xa(e){var t=e.rotate,n=e.scaleX,o=e.scaleY,s=e.translateX,d=e.translateY,p=[];we(s)&&s!==0&&p.push("translateX(".concat(s,"px)")),we(d)&&d!==0&&p.push("translateY(".concat(d,"px)")),we(t)&&t!==0&&p.push("rotate(".concat(t,"deg)")),we(n)&&n!==1&&p.push("scaleX(".concat(n,")")),we(o)&&o!==1&&p.push("scaleY(".concat(o,")"));var y=p.length?p.join(" "):"none";return{WebkitTransform:y,msTransform:y,transform:y}}function eh(e){return Hn(e)?decodeURIComponent(e.replace(/^.*\//,"").replace(/[?&#].*$/,"")):""}var nr=kt.navigator&&/Version\/\d+(\.\d+)+?\s+Safari/i.test(kt.navigator.userAgent);function Zo(e,t,n){var o=document.createElement("img");if(e.naturalWidth&&!nr)return n(e.naturalWidth,e.naturalHeight),o;var s=document.body||document.documentElement;return o.onload=function(){n(o.width,o.height),nr||s.removeChild(o)},be(t.inheritedAttributes,function(d){var p=e.getAttribute(d);p!==null&&o.setAttribute(d,p)}),o.src=e.src,nr||(o.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",s.appendChild(o)),o}function ha(e){switch(e){case 2:return Uu;case 3:return $u;case 4:return Vu;default:return""}}function th(e){var t=Dr({},e),n=[];return be(e,function(o,s){delete t[s],be(t,function(d){var p=Math.abs(o.startX-d.startX),y=Math.abs(o.startY-d.startY),w=Math.abs(o.endX-d.endX),m=Math.abs(o.endY-d.endY),A=Math.sqrt(p*p+y*y),x=Math.sqrt(w*w+m*m),f=(x-A)/A;n.push(f)})}),n.sort(function(o,s){return Math.abs(o)<Math.abs(s)}),n[0]}function fa(e,t){var n=e.pageX,o=e.pageY,s={endX:n,endY:o};return t?s:Dr({timeStamp:Date.now(),startX:n,startY:o},s)}function nh(e){var t=0,n=0,o=0;return be(e,function(s){var d=s.startX,p=s.startY;t+=d,n+=p,o+=1}),t/=o,n/=o,{pageX:t,pageY:n}}var ah={render:function(){this.initContainer(),this.initViewer(),this.initList(),this.renderViewer()},initBody:function(){var t=this.element.ownerDocument,n=t.body||t.documentElement;this.body=n,this.scrollbarWidth=window.innerWidth-t.documentElement.clientWidth,this.initialBodyPaddingRight=n.style.paddingRight,this.initialBodyComputedPaddingRight=window.getComputedStyle(n).paddingRight},initContainer:function(){this.containerData={width:window.innerWidth,height:window.innerHeight}},initViewer:function(){var t=this.options,n=this.parent,o;t.inline&&(o={width:Math.max(n.offsetWidth,t.minWidth),height:Math.max(n.offsetHeight,t.minHeight)},this.parentData=o),(this.fulled||!o)&&(o=this.containerData),this.viewerData=Xe({},o)},renderViewer:function(){this.options.inline&&!this.fulled&&dt(this.viewer,this.viewerData)},initList:function(){var t=this,n=this.element,o=this.options,s=this.list,d=[];s.innerHTML="",be(this.images,function(p,y){var w=p.src,m=p.alt||eh(w),A=t.getImageURL(p);if(w||A){var x=document.createElement("li"),f=document.createElement("img");be(o.inheritedAttributes,function(E){var C=p.getAttribute(E);C!==null&&f.setAttribute(E,C)}),o.navbar&&(f.src=w||A),f.alt=m,f.setAttribute("data-original-url",A||w),x.setAttribute("data-index",y),x.setAttribute("data-viewer-action","view"),x.setAttribute("role","button"),o.keyboard&&x.setAttribute("tabindex",0),x.appendChild(f),s.appendChild(x),d.push(x)}}),this.items=d,be(d,function(p){var y=p.firstElementChild,w,m;br(y,"filled",!0),o.loading&&ie(p,on),oe(y,tt,w=function(x){ge(y,$t,m),o.loading&&ce(p,on),t.loadImage(x)},{once:!0}),oe(y,$t,m=function(){ge(y,tt,w),o.loading&&ce(p,on)},{once:!0})}),o.transition&&oe(n,Qn,function(){ie(s,Ce)},{once:!0})},renderList:function(){var t=this.index,n=this.items[t];if(n){var o=n.nextElementSibling,s=parseInt(window.getComputedStyle(o||n).marginLeft,10),d=n.offsetWidth,p=d+s;dt(this.list,Xe({width:p*this.length-s},xa({translateX:(this.viewerData.width-d)/2-p*t})))}},resetList:function(){var t=this.list;t.innerHTML="",ce(t,Ce),dt(t,xa({translateX:0}))},initImage:function(t){var n=this,o=this.options,s=this.image,d=this.viewerData,p=this.footer.offsetHeight,y=d.width,w=Math.max(d.height-p,p),m=this.imageData||{},A;this.imageInitializing={abort:function(){A.onload=null}},A=Zo(s,o,function(x,f){var E=x/f,C=Math.max(0,Math.min(1,o.initialCoverage)),g=y,B=w;n.imageInitializing=!1,w*E>y?B=y/E:g=w*E,C=we(C)?C:.9,g=Math.min(g*C,x),B=Math.min(B*C,f);var M=(y-g)/2,L=(w-B)/2,_={left:M,top:L,x:M,y:L,width:g,height:B,oldRatio:1,ratio:g/x,aspectRatio:E,naturalWidth:x,naturalHeight:f},D=Xe({},_);o.rotatable&&(_.rotate=m.rotate||0,D.rotate=0),o.scalable&&(_.scaleX=m.scaleX||1,_.scaleY=m.scaleY||1,D.scaleX=1,D.scaleY=1),n.imageData=_,n.initialImageData=D,t&&t()})},renderImage:function(t){var n=this,o=this.image,s=this.imageData;if(dt(o,Xe({width:s.width,height:s.height,marginLeft:s.x,marginTop:s.y},xa(s))),t)if((this.viewing||this.moving||this.rotating||this.scaling||this.zooming)&&this.options.transition&&Jt(o,Ce)){var d=function(){n.imageRendering=!1,t()};this.imageRendering={abort:function(){ge(o,it,d)}},oe(o,it,d,{once:!0})}else t()},resetImage:function(){var t=this.image;t&&(this.viewing&&this.viewing.abort(),t.parentNode.removeChild(t),this.image=null,this.title.innerHTML="")}},rh={bind:function(){var t=this.options,n=this.viewer,o=this.canvas,s=this.element.ownerDocument;oe(n,ln,this.onClick=this.click.bind(this)),oe(n,Qi,this.onDragStart=this.dragstart.bind(this)),oe(o,Ki,this.onPointerDown=this.pointerdown.bind(this)),oe(s,Xi,this.onPointerMove=this.pointermove.bind(this)),oe(s,Gi,this.onPointerUp=this.pointerup.bind(this)),oe(s,Yi,this.onKeyDown=this.keydown.bind(this)),oe(window,Zi,this.onResize=this.resize.bind(this)),t.zoomable&&t.zoomOnWheel&&oe(n,Ji,this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),t.toggleOnDblclick&&oe(o,gr,this.onDblclick=this.dblclick.bind(this))},unbind:function(){var t=this.options,n=this.viewer,o=this.canvas,s=this.element.ownerDocument;ge(n,ln,this.onClick),ge(n,Qi,this.onDragStart),ge(o,Ki,this.onPointerDown),ge(s,Xi,this.onPointerMove),ge(s,Gi,this.onPointerUp),ge(s,Yi,this.onKeyDown),ge(window,Zi,this.onResize),t.zoomable&&t.zoomOnWheel&&ge(n,Ji,this.onWheel,{passive:!1,capture:!0}),t.toggleOnDblclick&&ge(o,gr,this.onDblclick)}},ih={click:function(t){var n=this.options,o=this.imageData,s=t.target,d=nn(s,Da);switch(!d&&s.localName==="img"&&s.parentElement.localName==="li"&&(s=s.parentElement,d=nn(s,Da)),rn&&t.isTrusted&&s===this.canvas&&clearTimeout(this.clickCanvasTimeout),d){case"mix":this.played?this.stop():n.inline?this.fulled?this.exit():this.full():this.hide();break;case"hide":this.pointerMoved||this.hide();break;case"view":this.view(nn(s,"index"));break;case"zoom-in":this.zoom(.1,!0);break;case"zoom-out":this.zoom(-.1,!0);break;case"one-to-one":this.toggle();break;case"reset":this.reset();break;case"prev":this.prev(n.loop);break;case"play":this.play(n.fullscreen);break;case"next":this.next(n.loop);break;case"rotate-left":this.rotate(-90);break;case"rotate-right":this.rotate(90);break;case"flip-horizontal":this.scaleX(-o.scaleX||-1);break;case"flip-vertical":this.scaleY(-o.scaleY||-1);break;default:this.played&&this.stop()}},dblclick:function(t){t.preventDefault(),this.viewed&&t.target===this.image&&(rn&&t.isTrusted&&clearTimeout(this.doubleClickImageTimeout),this.toggle(t.isTrusted?t:t.detail&&t.detail.originalEvent))},load:function(){var t=this;this.timeout&&(clearTimeout(this.timeout),this.timeout=!1);var n=this.element,o=this.options,s=this.image,d=this.index,p=this.viewerData;ce(s,Wn),o.loading&&ce(this.canvas,on),s.style.cssText="height:0;"+"margin-left:".concat(p.width/2,"px;")+"margin-top:".concat(p.height/2,"px;")+"max-width:none!important;position:relative;width:0;",this.initImage(function(){Yn(s,ju,o.movable),Yn(s,Ce,o.transition),t.renderImage(function(){t.viewed=!0,t.viewing=!1,Ae(o.viewed)&&oe(n,Qn,o.viewed,{once:!0}),Be(n,Qn,{originalImage:t.images[d],index:d,image:s},{cancelable:!1})})})},loadImage:function(t){var n=t.target,o=n.parentNode,s=o.offsetWidth||30,d=o.offsetHeight||50,p=!!nn(n,"filled");Zo(n,this.options,function(y,w){var m=y/w,A=s,x=d;d*m>s?p?A=d*m:x=s/m:p?x=s/m:A=d*m,dt(n,Xe({width:A,height:x},xa({translateX:(s-A)/2,translateY:(d-x)/2})))})},keydown:function(t){var n=this.options;if(n.keyboard){var o=t.keyCode||t.which||t.charCode;switch(o){case 13:this.viewer.contains(t.target)&&this.click(t);break}if(this.fulled)switch(o){case 27:this.played?this.stop():n.inline?this.fulled&&this.exit():this.hide();break;case 32:this.played&&this.stop();break;case 37:this.played&&this.playing?this.playing.prev():this.prev(n.loop);break;case 38:t.preventDefault(),this.zoom(n.zoomRatio,!0);break;case 39:this.played&&this.playing?this.playing.next():this.next(n.loop);break;case 40:t.preventDefault(),this.zoom(-n.zoomRatio,!0);break;case 48:case 49:t.ctrlKey&&(t.preventDefault(),this.toggle());break}}},dragstart:function(t){t.target.localName==="img"&&t.preventDefault()},pointerdown:function(t){var n=this.options,o=this.pointers,s=t.buttons,d=t.button;if(this.pointerMoved=!1,!(!this.viewed||this.showing||this.viewing||this.hiding||(t.type==="mousedown"||t.type==="pointerdown"&&t.pointerType==="mouse")&&(we(s)&&s!==1||we(d)&&d!==0||t.ctrlKey))){t.preventDefault(),t.changedTouches?be(t.changedTouches,function(y){o[y.identifier]=fa(y)}):o[t.pointerId||0]=fa(t);var p=n.movable?va:!1;n.zoomOnTouch&&n.zoomable&&Object.keys(o).length>1?p=qn:n.slideOnTouch&&(t.pointerType==="touch"||t.type==="touchstart")&&this.isSwitchable()&&(p=Xo),n.transition&&(p===va||p===qn)&&ce(this.image,Ce),this.action=p}},pointermove:function(t){var n=this.pointers,o=this.action;!this.viewed||!o||(t.preventDefault(),t.changedTouches?be(t.changedTouches,function(s){Xe(n[s.identifier]||{},fa(s,!0))}):Xe(n[t.pointerId||0]||{},fa(t,!0)),this.change(t))},pointerup:function(t){var n=this,o=this.options,s=this.action,d=this.pointers,p;t.changedTouches?be(t.changedTouches,function(y){p=d[y.identifier],delete d[y.identifier]}):(p=d[t.pointerId||0],delete d[t.pointerId||0]),s&&(t.preventDefault(),o.transition&&(s===va||s===qn)&&ie(this.image,Ce),this.action=!1,rn&&s!==qn&&p&&Date.now()-p.timeStamp<500&&(clearTimeout(this.clickCanvasTimeout),clearTimeout(this.doubleClickImageTimeout),o.toggleOnDblclick&&this.viewed&&t.target===this.image?this.imageClicked?(this.imageClicked=!1,this.doubleClickImageTimeout=setTimeout(function(){Be(n.image,gr,{originalEvent:t})},50)):(this.imageClicked=!0,this.doubleClickImageTimeout=setTimeout(function(){n.imageClicked=!1},500)):(this.imageClicked=!1,o.backdrop&&o.backdrop!=="static"&&t.target===this.canvas&&(this.clickCanvasTimeout=setTimeout(function(){Be(n.canvas,ln,{originalEvent:t})},50)))))},resize:function(){var t=this;if(!(!this.isShown||this.hiding)&&(this.fulled&&(this.close(),this.initBody(),this.open()),this.initContainer(),this.initViewer(),this.renderViewer(),this.renderList(),this.viewed&&this.initImage(function(){t.renderImage()}),this.played)){if(this.options.fullscreen&&this.fulled&&!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement)){this.stop();return}be(this.player.getElementsByTagName("img"),function(n){oe(n,tt,t.loadImage.bind(t),{once:!0}),Be(n,tt)})}},wheel:function(t){var n=this;if(this.viewed&&(t.preventDefault(),!this.wheeling)){this.wheeling=!0,setTimeout(function(){n.wheeling=!1},50);var o=Number(this.options.zoomRatio)||.1,s=1;t.deltaY?s=t.deltaY>0?1:-1:t.wheelDelta?s=-t.wheelDelta/120:t.detail&&(s=t.detail>0?1:-1),this.zoom(-s*o,!0,null,t)}}},oh={show:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=this.element,o=this.options;if(o.inline||this.showing||this.isShown||this.showing)return this;if(!this.ready)return this.build(),this.ready&&this.show(t),this;if(Ae(o.show)&&oe(n,to,o.show,{once:!0}),Be(n,to)===!1||!this.ready)return this;this.hiding&&this.transitioning.abort(),this.showing=!0,this.open();var s=this.viewer;if(ce(s,qt),s.setAttribute("role","dialog"),s.setAttribute("aria-labelledby",this.title.id),s.setAttribute("aria-modal",!0),s.removeAttribute("aria-hidden"),o.transition&&!t){var d=this.shown.bind(this);this.transitioning={abort:function(){ge(s,it,d),ce(s,Je)}},ie(s,Ce),s.initialOffsetWidth=s.offsetWidth,oe(s,it,d,{once:!0}),ie(s,Je)}else ie(s,Je),this.shown();return this},hide:function(){var t=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,o=this.element,s=this.options;if(s.inline||this.hiding||!(this.isShown||this.showing))return this;if(Ae(s.hide)&&oe(o,ao,s.hide,{once:!0}),Be(o,ao)===!1)return this;this.showing&&this.transitioning.abort(),this.hiding=!0,this.played?this.stop():this.viewing&&this.viewing.abort();var d=this.viewer,p=this.image,y=function(){ce(d,Je),t.hidden()};if(s.transition&&!n){var w=function A(x){x&&x.target===d&&(ge(d,it,A),t.hidden())},m=function(){Jt(d,Ce)?(oe(d,it,w),ce(d,Je)):y()};this.transitioning={abort:function(){t.viewed&&Jt(p,Ce)?ge(p,it,m):Jt(d,Ce)&&ge(d,it,w)}},this.viewed&&Jt(p,Ce)?(oe(p,it,m,{once:!0}),this.zoomTo(0,!1,null,null,!0)):m()}else y();return this},view:function(){var t=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.initialViewIndex;if(n=Number(n)||0,this.hiding||this.played||n<0||n>=this.length||this.viewed&&n===this.index)return this;if(!this.isShown)return this.index=n,this.show();this.viewing&&this.viewing.abort();var o=this.element,s=this.options,d=this.title,p=this.canvas,y=this.items[n],w=y.querySelector("img"),m=nn(w,"originalUrl"),A=w.getAttribute("alt"),x=document.createElement("img");if(be(s.inheritedAttributes,function(B){var M=w.getAttribute(B);M!==null&&x.setAttribute(B,M)}),x.src=m,x.alt=A,Ae(s.view)&&oe(o,io,s.view,{once:!0}),Be(o,io,{originalImage:this.images[n],index:n,image:x})===!1||!this.isShown||this.hiding||this.played)return this;var f=this.items[this.index];f&&(ce(f,pa),f.removeAttribute("aria-selected")),ie(y,pa),y.setAttribute("aria-selected",!0),s.focus&&y.focus(),this.image=x,this.viewed=!1,this.index=n,this.imageData={},ie(x,Wn),s.loading&&ie(p,on),p.innerHTML="",p.appendChild(x),this.renderList(),d.innerHTML="";var E=function(){var M=t.imageData,L=Array.isArray(s.title)?s.title[1]:s.title;d.innerHTML=Gu(Ae(L)?L.call(t,x,M):"".concat(A," (").concat(M.naturalWidth," × ").concat(M.naturalHeight,")"))},C,g;return oe(o,Qn,E,{once:!0}),this.viewing={abort:function(){ge(o,Qn,E),x.complete?t.imageRendering?t.imageRendering.abort():t.imageInitializing&&t.imageInitializing.abort():(x.src="",ge(x,tt,C),t.timeout&&clearTimeout(t.timeout))}},x.complete?this.load():(oe(x,tt,C=function(){ge(x,$t,g),t.load()},{once:!0}),oe(x,$t,g=function(){ge(x,tt,C),t.timeout&&(clearTimeout(t.timeout),t.timeout=!1),ce(x,Wn),s.loading&&ce(t.canvas,on)},{once:!0}),this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(function(){ce(x,Wn),t.timeout=!1},1e3)),this},prev:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=this.index-1;return n<0&&(n=t?this.length-1:0),this.view(n),this},next:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=this.length-1,o=this.index+1;return o>n&&(o=t?0:n),this.view(o),this},move:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,o=this.imageData;return this.moveTo(en(t)?t:o.x+Number(t),en(n)?n:o.y+Number(n)),this},moveTo:function(t){var n=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,d=this.element,p=this.options,y=this.imageData;if(t=Number(t),o=Number(o),this.viewed&&!this.played&&p.movable){var w=y.x,m=y.y,A=!1;if(we(t)?A=!0:t=w,we(o)?A=!0:o=m,A){if(Ae(p.move)&&oe(d,oo,p.move,{once:!0}),Be(d,oo,{x:t,y:o,oldX:w,oldY:m,originalEvent:s})===!1)return this;y.x=t,y.y=o,y.left=t,y.top=o,this.moving=!0,this.renderImage(function(){n.moving=!1,Ae(p.moved)&&oe(d,lo,p.moved,{once:!0}),Be(d,lo,{x:t,y:o,oldX:w,oldY:m,originalEvent:s},{cancelable:!1})})}}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t)),this},rotateTo:function(t){var n=this,o=this.element,s=this.options,d=this.imageData;if(t=Number(t),we(t)&&this.viewed&&!this.played&&s.rotatable){var p=d.rotate;if(Ae(s.rotate)&&oe(o,so,s.rotate,{once:!0}),Be(o,so,{degree:t,oldDegree:p})===!1)return this;d.rotate=t,this.rotating=!0,this.renderImage(function(){n.rotating=!1,Ae(s.rotated)&&oe(o,co,s.rotated,{once:!0}),Be(o,co,{degree:t,oldDegree:p},{cancelable:!1})})}return this},scaleX:function(t){return this.scale(t,this.imageData.scaleY),this},scaleY:function(t){return this.scale(this.imageData.scaleX,t),this},scale:function(t){var n=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,s=this.element,d=this.options,p=this.imageData;if(t=Number(t),o=Number(o),this.viewed&&!this.played&&d.scalable){var y=p.scaleX,w=p.scaleY,m=!1;if(we(t)?m=!0:t=y,we(o)?m=!0:o=w,m){if(Ae(d.scale)&&oe(s,po,d.scale,{once:!0}),Be(s,po,{scaleX:t,scaleY:o,oldScaleX:y,oldScaleY:w})===!1)return this;p.scaleX=t,p.scaleY=o,this.scaling=!0,this.renderImage(function(){n.scaling=!1,Ae(d.scaled)&&oe(s,uo,d.scaled,{once:!0}),Be(s,uo,{scaleX:t,scaleY:o,oldScaleX:y,oldScaleY:w},{cancelable:!1})})}}return this},zoom:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,d=this.imageData;return t=Number(t),t<0?t=1/(1-t):t=1+t,this.zoomTo(d.width*t/d.naturalWidth,n,o,s),this},zoomTo:function(t){var n=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,p=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1,y=this.element,w=this.options,m=this.pointers,A=this.imageData,x=A.x,f=A.y,E=A.width,C=A.height,g=A.naturalWidth,B=A.naturalHeight;if(t=Math.max(0,t),we(t)&&this.viewed&&!this.played&&(p||w.zoomable)){if(!p){var M=Math.max(.01,w.minZoomRatio),L=Math.min(100,w.maxZoomRatio);t=Math.min(Math.max(t,M),L)}if(d)switch(d.type){case"wheel":w.zoomRatio>=.055&&t>.95&&t<1.05&&(t=1);break;case"pointermove":case"touchmove":case"mousemove":t>.99&&t<1.01&&(t=1);break}var _=g*t,D=B*t,H=_-E,I=D-C,N=A.ratio;if(Ae(w.zoom)&&oe(y,ho,w.zoom,{once:!0}),Be(y,ho,{ratio:t,oldRatio:N,originalEvent:d})===!1)return this;if(this.zooming=!0,d){var ne=Ju(this.viewer),K=m&&Object.keys(m).length>0?nh(m):{pageX:d.pageX,pageY:d.pageY};A.x-=H*((K.pageX-ne.left-x)/E),A.y-=I*((K.pageY-ne.top-f)/C)}else tn(s)&&we(s.x)&&we(s.y)?(A.x-=H*((s.x-x)/E),A.y-=I*((s.y-f)/C)):(A.x-=H/2,A.y-=I/2);A.left=A.x,A.top=A.y,A.width=_,A.height=D,A.oldRatio=N,A.ratio=t,this.renderImage(function(){n.zooming=!1,Ae(w.zoomed)&&oe(y,fo,w.zoomed,{once:!0}),Be(y,fo,{ratio:t,oldRatio:N,originalEvent:d},{cancelable:!1})}),o&&this.tooltip()}return this},play:function(){var t=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(!this.isShown||this.played)return this;var o=this.element,s=this.options;if(Ae(s.play)&&oe(o,mo,s.play,{once:!0}),Be(o,mo)===!1)return this;var d=this.player,p=this.loadImage.bind(this),y=[],w=0,m=0;if(this.played=!0,this.onLoadWhenPlay=p,n&&this.requestFullscreen(n),ie(d,Zt),be(this.items,function(f,E){var C=f.querySelector("img"),g=document.createElement("img");g.src=nn(C,"originalUrl"),g.alt=C.getAttribute("alt"),g.referrerPolicy=C.referrerPolicy,w+=1,ie(g,wa),Yn(g,Ce,s.transition),Jt(f,pa)&&(ie(g,Je),m=E),y.push(g),oe(g,tt,p,{once:!0}),d.appendChild(g)}),we(s.interval)&&s.interval>0){var A=function f(){clearTimeout(t.playing.timeout),ce(y[m],Je),m-=1,m=m>=0?m:w-1,ie(y[m],Je),t.playing.timeout=setTimeout(f,s.interval)},x=function f(){clearTimeout(t.playing.timeout),ce(y[m],Je),m+=1,m=m<w?m:0,ie(y[m],Je),t.playing.timeout=setTimeout(f,s.interval)};w>1&&(this.playing={prev:A,next:x,timeout:setTimeout(x,s.interval)})}return this},stop:function(){var t=this;if(!this.played)return this;var n=this.element,o=this.options;if(Ae(o.stop)&&oe(n,yo,o.stop,{once:!0}),Be(n,yo)===!1)return this;var s=this.player;return clearTimeout(this.playing.timeout),this.playing=!1,this.played=!1,be(s.getElementsByTagName("img"),function(d){ge(d,tt,t.onLoadWhenPlay)}),ce(s,Zt),s.innerHTML="",this.exitFullscreen(),this},full:function(){var t=this,n=this.options,o=this.viewer,s=this.image,d=this.list;return!this.isShown||this.played||this.fulled||!n.inline?this:(this.fulled=!0,this.open(),ie(this.button,ji),n.transition&&(ce(d,Ce),this.viewed&&ce(s,Ce)),ie(o,Ar),o.setAttribute("role","dialog"),o.setAttribute("aria-labelledby",this.title.id),o.setAttribute("aria-modal",!0),o.removeAttribute("style"),dt(o,{zIndex:n.zIndex}),n.focus&&this.enforceFocus(),this.initContainer(),this.viewerData=Xe({},this.containerData),this.renderList(),this.viewed&&this.initImage(function(){t.renderImage(function(){n.transition&&setTimeout(function(){ie(s,Ce),ie(d,Ce)},0)})}),this)},exit:function(){var t=this,n=this.options,o=this.viewer,s=this.image,d=this.list;return!this.isShown||this.played||!this.fulled||!n.inline?this:(this.fulled=!1,this.close(),ce(this.button,ji),n.transition&&(ce(d,Ce),this.viewed&&ce(s,Ce)),n.focus&&this.clearEnforceFocus(),o.removeAttribute("role"),o.removeAttribute("aria-labelledby"),o.removeAttribute("aria-modal"),ce(o,Ar),dt(o,{zIndex:n.zIndexInline}),this.viewerData=Xe({},this.parentData),this.renderViewer(),this.renderList(),this.viewed&&this.initImage(function(){t.renderImage(function(){n.transition&&setTimeout(function(){ie(s,Ce),ie(d,Ce)},0)})}),this)},tooltip:function(){var t=this,n=this.options,o=this.tooltipBox,s=this.imageData;return!this.viewed||this.played||!n.tooltip?this:(o.textContent="".concat(Math.round(s.ratio*100),"%"),this.tooltipping?clearTimeout(this.tooltipping):n.transition?(this.fading&&Be(o,it),ie(o,Zt),ie(o,wa),ie(o,Ce),o.removeAttribute("aria-hidden"),o.initialOffsetWidth=o.offsetWidth,ie(o,Je)):(ie(o,Zt),o.removeAttribute("aria-hidden")),this.tooltipping=setTimeout(function(){n.transition?(oe(o,it,function(){ce(o,Zt),ce(o,wa),ce(o,Ce),o.setAttribute("aria-hidden",!0),t.fading=!1},{once:!0}),ce(o,Je),t.fading=!0):(ce(o,Zt),o.setAttribute("aria-hidden",!0)),t.tooltipping=!1},1e3),this)},toggle:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return this.imageData.ratio===1?this.zoomTo(this.imageData.oldRatio,!0,null,t):this.zoomTo(1,!0,null,t),this},reset:function(){return this.viewed&&!this.played&&(this.imageData=Xe({},this.initialImageData),this.renderImage()),this},update:function(){var t=this,n=this.element,o=this.options,s=this.isImg;if(s&&!n.parentNode)return this.destroy();var d=[];if(be(s?[n]:n.querySelectorAll("img"),function(m){Ae(o.filter)?o.filter.call(t,m)&&d.push(m):t.getImageURL(m)&&d.push(m)}),!d.length)return this;if(this.images=d,this.length=d.length,this.ready){var p=[];if(be(this.items,function(m,A){var x=m.querySelector("img"),f=d[A];f&&x?(f.src!==x.src||f.alt!==x.alt)&&p.push(A):p.push(A)}),dt(this.list,{width:"auto"}),this.initList(),this.isShown)if(this.length){if(this.viewed){var y=p.indexOf(this.index);if(y>=0)this.viewed=!1,this.view(Math.max(Math.min(this.index-y,this.length-1),0));else{var w=this.items[this.index];ie(w,pa),w.setAttribute("aria-selected",!0)}}}else this.image=null,this.viewed=!1,this.index=0,this.imageData={},this.canvas.innerHTML="",this.title.innerHTML=""}else this.build();return this},destroy:function(){var t=this.element,n=this.options;return t[se]?(this.destroyed=!0,this.ready?(this.played&&this.stop(),n.inline?(this.fulled&&this.exit(),this.unbind()):this.isShown?(this.viewing&&(this.imageRendering?this.imageRendering.abort():this.imageInitializing&&this.imageInitializing.abort()),this.hiding&&this.transitioning.abort(),this.hidden()):this.showing&&(this.transitioning.abort(),this.hidden()),this.ready=!1,this.viewer.parentNode.removeChild(this.viewer)):n.inline&&(this.delaying?this.delaying.abort():this.initializing&&this.initializing.abort()),n.inline||ge(t,ln,this.onStart),t[se]=void 0,this):this}},lh={getImageURL:function(t){var n=this.options.url;return Hn(n)?n=t.getAttribute(n):Ae(n)?n=n.call(this,t):n="",n},enforceFocus:function(){var t=this;this.clearEnforceFocus(),oe(document,Hi,this.onFocusin=function(n){var o=t.viewer,s=n.target;if(!(s===document||s===o||o.contains(s))){for(;s;){if(s.getAttribute("tabindex")!==null||s.getAttribute("aria-modal")==="true")return;s=s.parentElement}o.focus()}})},clearEnforceFocus:function(){this.onFocusin&&(ge(document,Hi,this.onFocusin),this.onFocusin=null)},open:function(){var t=this.body;ie(t,Wi),this.scrollbarWidth>0&&(t.style.paddingRight="".concat(this.scrollbarWidth+(parseFloat(this.initialBodyComputedPaddingRight)||0),"px"))},close:function(){var t=this.body;ce(t,Wi),this.scrollbarWidth>0&&(t.style.paddingRight=this.initialBodyPaddingRight)},shown:function(){var t=this.element,n=this.options,o=this.viewer;this.fulled=!0,this.isShown=!0,this.render(),this.bind(),this.showing=!1,n.focus&&(o.focus(),this.enforceFocus()),Ae(n.shown)&&oe(t,no,n.shown,{once:!0}),Be(t,no)!==!1&&this.ready&&this.isShown&&!this.hiding&&this.view(this.index)},hidden:function(){var t=this.element,n=this.options,o=this.viewer;n.fucus&&this.clearEnforceFocus(),this.close(),this.unbind(),ie(o,qt),o.removeAttribute("role"),o.removeAttribute("aria-labelledby"),o.removeAttribute("aria-modal"),o.setAttribute("aria-hidden",!0),this.resetList(),this.resetImage(),this.fulled=!1,this.viewed=!1,this.isShown=!1,this.hiding=!1,this.destroyed||(Ae(n.hidden)&&oe(t,ro,n.hidden,{once:!0}),Be(t,ro,null,{cancelable:!1}))},requestFullscreen:function(t){var n=this.element.ownerDocument;if(this.fulled&&!(n.fullscreenElement||n.webkitFullscreenElement||n.mozFullScreenElement||n.msFullscreenElement)){var o=n.documentElement;o.requestFullscreen?tn(t)?o.requestFullscreen(t):o.requestFullscreen():o.webkitRequestFullscreen?o.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):o.mozRequestFullScreen?o.mozRequestFullScreen():o.msRequestFullscreen&&o.msRequestFullscreen()}},exitFullscreen:function(){var t=this.element.ownerDocument;this.fulled&&(t.fullscreenElement||t.webkitFullscreenElement||t.mozFullScreenElement||t.msFullscreenElement)&&(t.exitFullscreen?t.exitFullscreen():t.webkitExitFullscreen?t.webkitExitFullscreen():t.mozCancelFullScreen?t.mozCancelFullScreen():t.msExitFullscreen&&t.msExitFullscreen())},change:function(t){var n=this.options,o=this.pointers,s=o[Object.keys(o)[0]];if(s){var d=s.endX-s.startX,p=s.endY-s.startY;switch(this.action){case va:(d!==0||p!==0)&&(this.pointerMoved=!0,this.move(d,p,t));break;case qn:this.zoom(th(o),!1,null,t);break;case Xo:{this.action="switched";var y=Math.abs(d);y>1&&y>Math.abs(p)&&(this.pointers={},d>1?this.prev(n.loop):d<-1&&this.next(n.loop));break}}be(o,function(w){w.startX=w.endX,w.startY=w.endY})}},isSwitchable:function(){var t=this.imageData,n=this.viewerData;return this.length>1&&t.x>=0&&t.y>=0&&t.width<=n.width&&t.height<=n.height}},sh=kt.Viewer,dh=function(e){return function(){return e+=1,e}}(-1),Jo=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Ou(this,e),!t||t.nodeType!==1)throw new Error("The first argument is required and must be an element.");this.element=t,this.options=Xe({},Ui,tn(n)&&n),this.action=!1,this.fading=!1,this.fulled=!1,this.hiding=!1,this.imageClicked=!1,this.imageData={},this.index=this.options.initialViewIndex,this.isImg=!1,this.isShown=!1,this.length=0,this.moving=!1,this.played=!1,this.playing=!1,this.pointers={},this.ready=!1,this.rotating=!1,this.scaling=!1,this.showing=!1,this.timeout=!1,this.tooltipping=!1,this.viewed=!1,this.viewing=!1,this.wheeling=!1,this.zooming=!1,this.pointerMoved=!1,this.id=dh(),this.init()}return _u(e,[{key:"init",value:function(){var n=this,o=this.element,s=this.options;if(!o[se]){o[se]=this,s.focus&&!s.keyboard&&(s.focus=!1);var d=o.localName==="img",p=[];if(be(d?[o]:o.querySelectorAll("img"),function(m){Ae(s.filter)?s.filter.call(n,m)&&p.push(m):n.getImageURL(m)&&p.push(m)}),this.isImg=d,this.length=p.length,this.images=p,this.initBody(),en(document.createElement(se).style.transition)&&(s.transition=!1),s.inline){var y=0,w=function(){if(y+=1,y===n.length){var A;n.initializing=!1,n.delaying={abort:function(){clearTimeout(A)}},A=setTimeout(function(){n.delaying=!1,n.build()},0)}};this.initializing={abort:function(){be(p,function(A){A.complete||(ge(A,tt,w),ge(A,$t,w))})}},be(p,function(m){if(m.complete)w();else{var A,x;oe(m,tt,A=function(){ge(m,$t,x),w()},{once:!0}),oe(m,$t,x=function(){ge(m,tt,A),w()},{once:!0})}})}else oe(o,ln,this.onStart=function(m){var A=m.target;A.localName==="img"&&(!Ae(s.filter)||s.filter.call(n,A))&&n.view(n.images.indexOf(A))})}}},{key:"build",value:function(){if(!this.ready){var n=this.element,o=this.options,s=n.parentNode,d=document.createElement("div");d.innerHTML=Ru;var p=d.querySelector(".".concat(se,"-container")),y=p.querySelector(".".concat(se,"-title")),w=p.querySelector(".".concat(se,"-toolbar")),m=p.querySelector(".".concat(se,"-navbar")),A=p.querySelector(".".concat(se,"-button")),x=p.querySelector(".".concat(se,"-canvas"));if(this.parent=s,this.viewer=p,this.title=y,this.toolbar=w,this.navbar=m,this.button=A,this.canvas=x,this.footer=p.querySelector(".".concat(se,"-footer")),this.tooltipBox=p.querySelector(".".concat(se,"-tooltip")),this.player=p.querySelector(".".concat(se,"-player")),this.list=p.querySelector(".".concat(se,"-list")),p.id="".concat(se).concat(this.id),y.id="".concat(se,"Title").concat(this.id),ie(y,o.title?ha(Array.isArray(o.title)?o.title[0]:o.title):qt),ie(m,o.navbar?ha(o.navbar):qt),Yn(A,qt,!o.button),o.keyboard&&A.setAttribute("tabindex",0),o.backdrop&&(ie(p,"".concat(se,"-backdrop")),!o.inline&&o.backdrop!=="static"&&br(x,Da,"hide")),Hn(o.className)&&o.className&&o.className.split(Mr).forEach(function(_){ie(p,_)}),o.toolbar){var f=document.createElement("ul"),E=tn(o.toolbar),C=ua.slice(0,3),g=ua.slice(7,9),B=ua.slice(9);E||ie(w,ha(o.toolbar)),be(E?o.toolbar:ua,function(_,D){var H=E&&tn(_),I=E?Or(D):_,N=H&&!en(_.show)?_.show:_;if(!(!N||!o.zoomable&&C.indexOf(I)!==-1||!o.rotatable&&g.indexOf(I)!==-1||!o.scalable&&B.indexOf(I)!==-1)){var ne=H&&!en(_.size)?_.size:_,K=H&&!en(_.click)?_.click:_,F=document.createElement("li");o.keyboard&&F.setAttribute("tabindex",0),F.setAttribute("role","button"),ie(F,"".concat(se,"-").concat(I)),Ae(K)||br(F,Da,I),we(N)&&ie(F,ha(N)),["small","large"].indexOf(ne)!==-1?ie(F,"".concat(se,"-").concat(ne)):I==="play"&&ie(F,"".concat(se,"-large")),Ae(K)&&oe(F,ln,K),f.appendChild(F)}}),w.appendChild(f)}else ie(w,qt);if(!o.rotatable){var M=w.querySelectorAll('li[class*="rotate"]');ie(M,Wn),be(M,function(_){w.appendChild(_)})}if(o.inline)ie(A,Pu),dt(p,{zIndex:o.zIndexInline}),window.getComputedStyle(s).position==="static"&&dt(s,{position:"relative"}),s.insertBefore(p,n.nextSibling);else{ie(A,qu),ie(p,Ar),ie(p,wa),ie(p,qt),dt(p,{zIndex:o.zIndex});var L=o.container;Hn(L)&&(L=n.ownerDocument.querySelector(L)),L||(L=this.body),L.appendChild(p)}if(o.inline&&(this.render(),this.bind(),this.isShown=!0),this.ready=!0,Ae(o.ready)&&oe(n,eo,o.ready,{once:!0}),Be(n,eo)===!1){this.ready=!1;return}this.ready&&o.inline&&this.view(this.index)}}}],[{key:"noConflict",value:function(){return window.Viewer=sh,e}},{key:"setDefaults",value:function(n){Xe(Ui,tn(n)&&n)}}]),e}();Xe(Jo.prototype,ah,rh,ih,oh,lh);const el=AbortController,tl=el.prototype,ch=tl.abort,ph=ct(tl,"signal").get,nl=()=>{const e=new el;return{abort:kr(ch,e),signal:Br(ph,e)}},_r=AbortSignal.prototype,Ao=_r.throwIfAborted,al=He(ct(_r,"aborted").get),rl=He(ct(_r,"reason").get);Ao!=null&&He(Ao);const uh={once:!0},hh=(e,t,n=uh)=>{if(typeof t!="function")throw new TypeError("onAbort: Argument 2 is not callable.");const o=()=>{let s;try{s=rl(e)}catch(d){s=d}t(s)};al(e)?Id(o):Ve(e,"abort",o,n)};class fh{#a;#n=new Map;#e=new Map;#t=new Map;#r=t=>{const{target:n}=t;if(n!=null){const d=n.tagName;if(d==="INPUT"||d==="TEXTAREA"||n.isContentEditable)return}const{key:o}=t,s=this.#e.get(o);if(s!=null){const d=this.#n;t.repeat||d.set(o,-1);const p=(d.get(o)??-1)+1;d.set(o,p),t.preventDefault(),t.stopPropagation(),s(t,p);return}};#i=t=>{const{key:n}=t,o=this.#n,s=o.get(n);if(o.delete(n),s==null)return;const d=this.#t.get(n);d!=null&&(t.preventDefault(),t.stopPropagation(),d(t,s))};constructor(t=st,n){this.#a=t;const o={capture:!0,signal:n};Ve(t,"keydown",this.#r,o),Ve(t,"keyup",this.#i,o)}set(t,n,o){n==null&&o==null?(this.#e.delete(t),this.#t.delete(t)):(this.#e.set(t,n??cr),this.#t.set(t,o??cr))}}const{slice:go,startsWith:bo}=Sr,il=history,Nr=History.prototype,mh=PopStateEvent.prototype,ol=e=>t=>{Br(e,il,t,"",t!=null?`#?${new URLSearchParams(t)}`:"#")},yh=kr(ct(Nr,"state").get,il),Ah=He(ct(mh,"state").get),vo=ol(Nr.pushState),vr=ol(Nr.replaceState),gh=(e=location.hash)=>{let t,n;if(bo(e,"#!"))n=new URL(decodeURIComponent(go(e,2))).searchParams;else if(bo(e,"#")){n=new URLSearchParams(go(e,1));let o=n.get(".");o!=null&&(n=new URL(o).searchParams)}return n!=null&&(t=Td(n),vr(t)),t};/*!
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
***************************************************************************** */function Ea(e,t,n,o){function s(d){return d instanceof n?d:new n(function(p){p(d)})}return new(n||(n=Promise))(function(d,p){function y(A){try{m(o.next(A))}catch(x){p(x)}}function w(A){try{m(o.throw(A))}catch(x){p(x)}}function m(A){A.done?d(A.value):s(A.value).then(y,w)}m((o=o.apply(e,t||[])).next())})}class xe{constructor(){this.mutex=Promise.resolve()}lock(){let t=()=>{};return this.mutex=this.mutex.then(()=>new Promise(t)),new Promise(n=>{t=n})}dispatch(t){return Ea(this,void 0,void 0,function*(){const n=yield this.lock();try{return yield Promise.resolve(t())}finally{n()}})}}var ar;function bh(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global}const wr=bh(),rr=(ar=wr.Buffer)!==null&&ar!==void 0?ar:null,vh=wr.TextEncoder?new wr.TextEncoder:null;function ll(e,t){return(e&15)+(e>>6|e>>3&8)<<4|(t&15)+(t>>6|t>>3&8)}function wh(e,t){const n=t.length>>1;for(let o=0;o<n;o++){const s=o<<1;e[o]=ll(t.charCodeAt(s),t.charCodeAt(s+1))}}function xh(e,t){if(e.length!==t.length*2)return!1;for(let n=0;n<t.length;n++){const o=n<<1;if(t[n]!==ll(e.charCodeAt(o),e.charCodeAt(o+1)))return!1}return!0}const wo="a".charCodeAt(0)-10,xo="0".charCodeAt(0);function Eo(e,t,n){let o=0;for(let s=0;s<n;s++){let d=t[s]>>>4;e[o++]=d>9?d+wo:d+xo,d=t[s]&15,e[o++]=d>9?d+wo:d+xo}return String.fromCharCode.apply(null,e)}const Co=rr!==null?e=>{if(typeof e=="string"){const t=rr.from(e,"utf8");return new Uint8Array(t.buffer,t.byteOffset,t.length)}if(rr.isBuffer(e))return new Uint8Array(e.buffer,e.byteOffset,e.length);if(ArrayBuffer.isView(e))return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);throw new Error("Invalid data type!")}:e=>{if(typeof e=="string")return vh.encode(e);if(ArrayBuffer.isView(e))return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);throw new Error("Invalid data type!")},ko="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Pn=new Uint8Array(256);for(let e=0;e<ko.length;e++)Pn[ko.charCodeAt(e)]=e;function Eh(e){let t=Math.floor(e.length*.75);const n=e.length;return e[n-1]==="="&&(t-=1,e[n-2]==="="&&(t-=1)),t}function Ch(e){const t=Eh(e),n=e.length,o=new Uint8Array(t);let s=0;for(let d=0;d<n;d+=4){const p=Pn[e.charCodeAt(d)],y=Pn[e.charCodeAt(d+1)],w=Pn[e.charCodeAt(d+2)],m=Pn[e.charCodeAt(d+3)];o[s]=p<<2|y>>4,s+=1,o[s]=(y&15)<<4|w>>2,s+=1,o[s]=(w&3)<<6|m&63,s+=1}return o}const ma=16*1024,Fn=4,kh=new xe,ir=new Map;function Bh(e,t){return Ea(this,void 0,void 0,function*(){let n=null,o=null,s=!1;if(typeof WebAssembly>"u")throw new Error("WebAssembly is not supported in this environment!");const d=(I,N=0)=>{o.set(I,N)},p=()=>o,y=()=>n.exports,w=I=>{n.exports.Hash_SetMemorySize(I);const N=n.exports.Hash_GetBuffer(),ne=n.exports.memory.buffer;o=new Uint8Array(ne,N,I)},m=()=>new DataView(n.exports.memory.buffer).getUint32(n.exports.STATE_SIZE,!0),A=kh.dispatch(()=>Ea(this,void 0,void 0,function*(){if(!ir.has(e.name)){const N=Ch(e.data),ne=WebAssembly.compile(N);ir.set(e.name,ne)}const I=yield ir.get(e.name);n=yield WebAssembly.instantiate(I,{})})),x=()=>Ea(this,void 0,void 0,function*(){n||(yield A);const I=n.exports.Hash_GetBuffer(),N=n.exports.memory.buffer;o=new Uint8Array(N,I,ma)}),f=(I=null)=>{s=!0,n.exports.Hash_Init(I)},E=I=>{let N=0;for(;N<I.length;){const ne=I.subarray(N,N+ma);N+=ne.length,o.set(ne),n.exports.Hash_Update(ne.length)}},C=I=>{if(!s)throw new Error("update() called before init()");const N=Co(I);E(N)},g=new Uint8Array(t*2),B=(I,N=null)=>{if(!s)throw new Error("digest() called before init()");return s=!1,n.exports.Hash_Final(N),I==="binary"?o.slice(0,t):Eo(g,o,t)},M=()=>{if(!s)throw new Error("save() can only be called after init() and before digest()");const I=n.exports.Hash_GetState(),N=m(),ne=n.exports.memory.buffer,K=new Uint8Array(ne,I,N),F=new Uint8Array(Fn+N);return wh(F,e.hash),F.set(K,Fn),F},L=I=>{if(!(I instanceof Uint8Array))throw new Error("load() expects an Uint8Array generated by save()");const N=n.exports.Hash_GetState(),ne=m(),K=Fn+ne,F=n.exports.memory.buffer;if(I.length!==K)throw new Error(`Bad state length (expected ${K} bytes, got ${I.length})`);if(!xh(e.hash,I.subarray(0,Fn)))throw new Error("This state was written by an incompatible hash implementation");const $e=I.subarray(Fn);new Uint8Array(F,N,ne).set($e),s=!0},_=I=>typeof I=="string"?I.length<ma/4:I.byteLength<ma;let D=_;switch(e.name){case"argon2":case"scrypt":D=()=>!0;break;case"blake2b":case"blake2s":D=(I,N)=>N<=512&&_(I);break;case"blake3":D=(I,N)=>N===0&&_(I);break;case"xxhash64":case"xxhash3":case"xxhash128":D=()=>!1;break}const H=(I,N=null,ne=null)=>{if(!D(I,N))return f(N),C(I),B("hex",ne);const K=Co(I);return o.set(K),n.exports.Hash_Calculate(K.length,N,ne),Eo(g,o,t)};return yield x(),{getMemory:p,writeMemory:d,getExports:y,setMemorySize:w,init:f,update:C,digest:B,save:M,load:L,calculate:H,hashLength:t}})}new xe;new xe;new xe;new xe;new xe;new xe;new xe;var Sh="md5",Ih="AGFzbQEAAAABEgRgAAF/YAAAYAF/AGACf38BfwMIBwABAgMBAAIEBQFwAQEBBQQBAQICBg4CfwFBoIoFC38AQYAICwdwCAZtZW1vcnkCAA5IYXNoX0dldEJ1ZmZlcgAACUhhc2hfSW5pdAABC0hhc2hfVXBkYXRlAAIKSGFzaF9GaW5hbAAEDUhhc2hfR2V0U3RhdGUABQ5IYXNoX0NhbGN1bGF0ZQAGClNUQVRFX1NJWkUDAQqzFgcFAEGACQstAEEAQv6568XpjpWZEDcCkIkBQQBCgcaUupbx6uZvNwKIiQFBAEIANwKAiQEL6AIBA39BAEEAKAKAiQEiASAAakH/////AXEiAjYCgIkBQQAoAoSJASEDAkAgAiABTw0AQQAgA0EBaiIDNgKEiQELQQAgAyAAQR12ajYChIkBAkACQAJAAkACQAJAIAFBP3EiAw0AQYAJIQIMAQtBwAAgA2siAiAASw0BIANBGGohA0EAIQEDQCADIAFqQYCJAWogAUGACWotAAA6AAAgAyABQQFqIgFqQdgARw0AC0GYiQFBwAAQAxogACACayEAIAJBgAlqIQILIABBwABPDQEgACEDDAILIABFDQJBACEBIANBmIkBakEALQCACToAACAAQQFGDQIgA0GZiQFqIQMgAEF/aiECA0AgAyABaiABQYEJai0AADoAACACIAFBAWoiAUcNAAwDCwsgAEE/cSEDIAIgAEFAcRADIQILIANFDQBBACEBA0AgAUGYiQFqIAIgAWotAAA6AAAgAyABQQFqIgFHDQALCwu0EAEZf0EAKAKUiQEhAkEAKAKQiQEhA0EAKAKMiQEhBEEAKAKIiQEhBQNAIABBCGooAgAiBiAAQRhqKAIAIgcgAEEoaigCACIIIABBOGooAgAiCSAAQTxqKAIAIgogAEEMaigCACILIABBHGooAgAiDCAAQSxqKAIAIg0gDCALIAogDSAJIAggByADIAZqIAIgAEEEaigCACIOaiAFIAQgAiADc3EgAnNqIAAoAgAiD2pB+Miqu31qQQd3IARqIhAgBCADc3EgA3NqQdbunsZ+akEMdyAQaiIRIBAgBHNxIARzakHb4YGhAmpBEXcgEWoiEmogAEEUaigCACITIBFqIABBEGooAgAiFCAQaiAEIAtqIBIgESAQc3EgEHNqQe6d9418akEWdyASaiIQIBIgEXNxIBFzakGvn/Crf2pBB3cgEGoiESAQIBJzcSASc2pBqoyfvARqQQx3IBFqIhIgESAQc3EgEHNqQZOMwcF6akERdyASaiIVaiAAQSRqKAIAIhYgEmogAEEgaigCACIXIBFqIAwgEGogFSASIBFzcSARc2pBgaqaampBFncgFWoiECAVIBJzcSASc2pB2LGCzAZqQQd3IBBqIhEgECAVc3EgFXNqQa/vk9p4akEMdyARaiISIBEgEHNxIBBzakGxt31qQRF3IBJqIhVqIABBNGooAgAiGCASaiAAQTBqKAIAIhkgEWogDSAQaiAVIBIgEXNxIBFzakG+r/PKeGpBFncgFWoiECAVIBJzcSASc2pBoqLA3AZqQQd3IBBqIhEgECAVc3EgFXNqQZPj4WxqQQx3IBFqIhUgESAQc3EgEHNqQY6H5bN6akERdyAVaiISaiAHIBVqIA4gEWogCiAQaiASIBUgEXNxIBFzakGhkNDNBGpBFncgEmoiECAScyAVcSASc2pB4sr4sH9qQQV3IBBqIhEgEHMgEnEgEHNqQcDmgoJ8akEJdyARaiISIBFzIBBxIBFzakHRtPmyAmpBDncgEmoiFWogCCASaiATIBFqIA8gEGogFSAScyARcSASc2pBqo/bzX5qQRR3IBVqIhAgFXMgEnEgFXNqQd2gvLF9akEFdyAQaiIRIBBzIBVxIBBzakHTqJASakEJdyARaiISIBFzIBBxIBFzakGBzYfFfWpBDncgEmoiFWogCSASaiAWIBFqIBQgEGogFSAScyARcSASc2pByPfPvn5qQRR3IBVqIhAgFXMgEnEgFXNqQeabh48CakEFdyAQaiIRIBBzIBVxIBBzakHWj9yZfGpBCXcgEWoiEiARcyAQcSARc2pBh5vUpn9qQQ53IBJqIhVqIAYgEmogGCARaiAXIBBqIBUgEnMgEXEgEnNqQe2p6KoEakEUdyAVaiIQIBVzIBJxIBVzakGF0o/PempBBXcgEGoiESAQcyAVcSAQc2pB+Me+Z2pBCXcgEWoiEiARcyAQcSARc2pB2YW8uwZqQQ53IBJqIhVqIBcgEmogEyARaiAZIBBqIBUgEnMgEXEgEnNqQYqZqel4akEUdyAVaiIQIBVzIhUgEnNqQcLyaGpBBHcgEGoiESAVc2pBge3Hu3hqQQt3IBFqIhIgEXMiGiAQc2pBosL17AZqQRB3IBJqIhVqIBQgEmogDiARaiAJIBBqIBUgGnNqQYzwlG9qQRd3IBVqIhAgFXMiFSASc2pBxNT7pXpqQQR3IBBqIhEgFXNqQamf+94EakELdyARaiISIBFzIgkgEHNqQeCW7bV/akEQdyASaiIVaiAPIBJqIBggEWogCCAQaiAVIAlzakHw+P71e2pBF3cgFWoiECAVcyIVIBJzakHG/e3EAmpBBHcgEGoiESAVc2pB+s+E1X5qQQt3IBFqIhIgEXMiCCAQc2pBheG8p31qQRB3IBJqIhVqIBkgEmogFiARaiAHIBBqIBUgCHNqQYW6oCRqQRd3IBVqIhEgFXMiECASc2pBuaDTzn1qQQR3IBFqIhIgEHNqQeWz7rZ+akELdyASaiIVIBJzIgcgEXNqQfj5if0BakEQdyAVaiIQaiAMIBVqIA8gEmogBiARaiAQIAdzakHlrLGlfGpBF3cgEGoiESAVQX9zciAQc2pBxMSkoX9qQQZ3IBFqIhIgEEF/c3IgEXNqQZf/q5kEakEKdyASaiIQIBFBf3NyIBJzakGnx9DcempBD3cgEGoiFWogCyAQaiAZIBJqIBMgEWogFSASQX9zciAQc2pBucDOZGpBFXcgFWoiESAQQX9zciAVc2pBw7PtqgZqQQZ3IBFqIhAgFUF/c3IgEXNqQZKZs/h4akEKdyAQaiISIBFBf3NyIBBzakH96L9/akEPdyASaiIVaiAKIBJqIBcgEGogDiARaiAVIBBBf3NyIBJzakHRu5GseGpBFXcgFWoiECASQX9zciAVc2pBz/yh/QZqQQZ3IBBqIhEgFUF/c3IgEHNqQeDNs3FqQQp3IBFqIhIgEEF/c3IgEXNqQZSGhZh6akEPdyASaiIVaiANIBJqIBQgEWogGCAQaiAVIBFBf3NyIBJzakGho6DwBGpBFXcgFWoiECASQX9zciAVc2pBgv3Nun9qQQZ3IBBqIhEgFUF/c3IgEHNqQbXk6+l7akEKdyARaiISIBBBf3NyIBFzakG7pd/WAmpBD3cgEmoiFSAEaiAWIBBqIBUgEUF/c3IgEnNqQZGnm9x+akEVd2ohBCAVIANqIQMgEiACaiECIBEgBWohBSAAQcAAaiEAIAFBQGoiAQ0AC0EAIAI2ApSJAUEAIAM2ApCJAUEAIAQ2AoyJAUEAIAU2AoiJASAAC6ECAQN/QQAoAoCJASIAQT9xIgFBmIkBakGAAToAAAJAAkACQCABQT9zIgJBB0sNAAJAIAJFDQAgAUGZiQFqIQADQCAAQQA6AAAgAEEBaiEAIAJBf2oiAg0ACwtBwAAhAkGYiQFBwAAQAxpBACEADAELIAJBCEYNASABQQFqIQALIABBj4kBaiEBA0AgASACakEAOgAAIAJBd2ohACACQX9qIQIgAEEASg0AC0EAKAKAiQEhAAtBACAAQRV2OgDTiQFBACAAQQ12OgDSiQFBACAAQQV2OgDRiQFBACAAQQN0IgI6ANCJAUEAIAI2AoCJAUEAQQAoAoSJATYC1IkBQZiJAUHAABADGkEAQQApAoiJATcDgAlBAEEAKQKQiQE3A4gJCwYAQYCJAQszAEEAQv6568XpjpWZEDcCkIkBQQBCgcaUupbx6uZvNwKIiQFBAEIANwKAiQEgABACEAQLCwsBAEGACAsEmAAAAA==",Th="9b0fac7d",Lh={name:Sh,data:Ih,hash:Th};new xe;function Dh(){return Bh(Lh,16).then(e=>{e.init();const t={init:()=>(e.init(),t),update:n=>(e.update(n),t),digest:n=>e.digest(n),save:()=>e.save(),load:n=>(e.load(n),t),blockSize:64,digestSize:16};return t})}new xe;new xe;new xe;new xe;new xe;new xe;new xe;new xe;new xe;new xe;new xe;new xe;new xe;new xe;let Bo,So;var n,o,s,d,Kn;class zh extends TransformStream{constructor(n){const o=new Bo(n);super(o);Mn(this,Kn,null);So(o,this)}get result(){return Xt(this,Kn)}}Kn=new WeakMap,Bo=(d=class{constructor(p){Mn(this,n,void 0);Mn(this,o,null);Mn(this,s,null);On(this,n,p)}async start(p){On(this,o,await Xt(this,n))}transform(p,y){Xt(this,o).update(p),y.enqueue(p)}flush(p){On(Xt(this,s),Kn,Xt(this,o).digest("hex"))}},n=new WeakMap,o=new WeakMap,s=new WeakMap,So=(p,y)=>{On(p,s,y)},d);const Mh=()=>new zh(Dh());let sl="api.dandanplay.net",dl=`https://${sl}/`;const Oh=[sl,"cas.dandanplay.net"],_h=Object.freeze({__proto__:null,tvseries:"TV动画",tvspecial:"TV特别",ova:"OVA",movie:"电影",musicvideo:"MV",web:"Web",other:"其他",jpmovie:"日本电影",jpdrama:"日本电视剧",unknown:"未知"}),cl=async(e,t,n={})=>{e=new URL(e,dl).href,t!=null&&(n.method??="POST",Ld(t)?(n.headers=new Headers(n.headers),n.headers.set("content-type","application/json"),n.body=JSON.stringify(t)):n.body=t),n.credentials??="omit";const o=new Request(e,n);o.headers.has("accept")||o.headers.set("accept","application/json");const s=await To(o),{status:d}=s;if(!(d>=200&&d<300))throw new TypeError(`Request failed with status code ${d}`);let p;const y=s.headers.get("content-type"),w="application/json";if((y===w||y?.startsWith(w))&&(p=await s.json(),p.errorMessage))throw new TypeError("DandanPlay API Error: "+p.errorMessage,{cause:p});return{request:o,response:s,data:p}};async function Nh(e,t){let n=t?.size??0,o="00000000000000000000000000000000";if(t!=null)try{const d=Mh();await t.slice(0,16*1024*1024).stream().pipeThrough(d).pipeTo(new WritableStream),o=d.result}catch(d){console.warn("MD5 Error: ",d)}return(await cl("api/v2/match",{fileName:e,fileHash:o,fileSize:n,matchMode:"hashAndFileName"})).data}const pl=(e,t=!0)=>`${dl}api/v2/comment/${e}${t?"?withRelated=true":""}`;async function Fh(e,t=!0){const n=pl(e,t);return(await cl(n)).data.comments}const Rh=`
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
`,{fromCharCode:Dt}=String,{from:qh}=Array,{toLowerCase:Ph}=Sr,{join:Vh}=Lo,$h=()=>{const{href:e,hostname:t}=new URL(location.pathname,location.href);return`// ==UserScript==
// @name dispatch-GM_fetch
// @namespace ${e}
// @version 0.1
// @description dispatch GM_fetch and GM_xmlhttpRequest
// @author ${t}
// @match  ${e}
// @run-at document-start
// @grant GM_xmlhttpRequest
// @grant GM_fetch
${Vh(qh(Oh,n=>`// @connect ${n}`),`
`)}
// @connect *
// ==/UserScript==
'use strict';
${Rh}
var GM_fetch
const { Reflect: { apply }, dispatchEvent: _emit } = unsafeWindow
const e = new CustomEvent('external:tampermonkey:grant', { detail: { GM_xmlhttpRequest, GM_fetch } })
unsafeWindow.addEventListener('load', () => { apply(_emit, unsafeWindow, [e]) }, { once: !0, capture: !0 })
`},xr=`${Dt(84)}${Dt(117)}${Dt(99)}${Dt(97)}${Dt(111)}`,Uh=async()=>{const{href:e,hostname:t}=new URL(location.pathname,location.href),{finalUrl:n}=await new Promise((o,s)=>{Rn({url:`https://www.${Ph(xr)}.${Dt(102)}${Dt(117)}${Dt(110)}/favicon.ico`,onload(d){o(d)},onerror:s})});return`// ==UserScript==
// @name ${xr}-Redirector
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
`},{min:jh,max:Wh}=Math,ul=HTMLElement.prototype,Oa=HTMLMediaElement.prototype,Fr=TimeRanges.prototype,or=He(CSSStyleDeclaration.prototype.setProperty),Qh=ul.getBoundingClientRect,Hh=He(ct(ul,"style").get),hl=ct(Oa,"currentTime"),Yh=He(hl.get),Kh=He(hl.set),Xh=He(ct(Oa,"duration").get),Gh=He(ct(Oa,"buffered").get),Zh=He(ct(Oa,"played").get),Jh=He(ct(Fr,"length").get),ef=He(Fr.start),tf=He(Fr.end),Ot="ivu-loading-bar",nf=`${Ot} ${Ot}--player`,af=`${Ot}-inner ${Ot}-inner--pointer`,rf=`${Ot}-inner ${Ot}-inner-color--buffered`,of=`${Ot}-inner ${Ot}-inner-color-primary`;function*Io(e,t,n,o){let s=0,d=Jh(e);for(;s<d;s++){const p=ef(e,s)/t,y=tf(e,s)/t-p;yield z("div",{class:n,key:`${o}-${s}`,style:`left:${p}%;width:${y}%`})}}const lf=Ut({props:{video:{type:HTMLVideoElement}},setup(e){const t=De();let n,o=null,s=!1,d=0,p,y;const w=Mt(Xa),m=Mt(Xa),A=I=>{d=Xh(n)/100,or(D,"display",d>0?"":"none")},x=I=>{p=Gh(n),w.value=null},f=I=>{y=Zh(n),m.value=null,s||or(D,"left",`${Yh(n)/d}%`)},E=I=>{A(),x(),f()};Dd(()=>Do(()=>e.video,I=>{if(n=I,o?.(),n==null){o=null,d=0,w.value=m.value=Xa,p=y=void 0;return}let N=nl();({abort:o}=N),Ve(n,"loadstart",E,N),Ve(n,"durationchange",A,N),Ve(n,"loadedmetadata",x,N),Ve(n,"progress",x,N),Ve(n,"seeking",f,N),Ve(n,"timeupdate",f,N),E()},{immediate:!0}));let C,g,B;const M=I=>{d>0&&(s=!0,Ve(st,"mousemove",L),Ve(st,"mouseup",_),{x:C,width:g}=Br(Qh,t.vnode.el),L(I))},L=I=>{B=jh(Wh((I.clientX-C)/g,0),1)*100,or(D,"left",`${B}%`)},_=I=>{s=!1,ka(st,"mousemove",L),ka(st,"mouseup",_),L(I),Kh(n,B*d)};zo(()=>o?.());let D,H;return()=>z("div",{class:nf,onMousedown:M},[H??=z("div",{class:af,key:"pointer",ref(I){D=Hh(I)}}),...w.value??=[...Io(p,d,rf,"buffered")],...m.value??=[...Io(y,d,of,"played")]])}}),{isArray:sf}=Array,df=Ut({emits:{dragover:null,drop:null},methods:{handle(e){this.$emit(e.type,e)}},beforeMount(){Ve(st,"dragover",this.handle),Ve(st,"drop",this.handle)},beforeUnmount(){ka(st,"dragover",this.handle),ka(st,"drop",this.handle)},render(){return le("global")}}),cf=Ut({name:"DropFile",emits:{change(e){return sf(e)}},props:{accept:{type:String,default:""},global:{type:Boolean,default:!1},reason:{type:String,default:""},multiple:{type:Boolean,default:!0},paste:{type:Boolean,default:!1}},setup(e,t){return{textarea:Mt(null),file:Mt(null)}},methods:{handleClick(e){this.file.click(),e.target.blur(),e.preventDefault(),e.stopPropagation()},handleChange(e){const t=this.file.files;t?.length>0&&this.$emit("change",Array.from(t))},handleDragover(e){e.preventDefault(),e.stopPropagation()},handleDrop(e){const{target:t}=e;if(this.global&&!this.$el.contains(t)&&e.type!=="paste"){const o=t.tagName;if(o==="INPUT"||o==="TEXTAREA"||t.isContentEditable)return}e.preventDefault(),e.stopPropagation();const n=(e.dataTransfer??e.clipboardData).files;n.length>0&&this.$emit("change",Array.from(n))}},render(){const e=this,t=e.$slots.default;return z("div",{class:"ivu-upload ivu-upload-drag",onDragover:e.handleDragover,onDrop:e.handleDrop},[e.global?z(df,{onDragover:e.handleDragover,onDrop:e.handleDrop}):null,z("input",{ref:"file",type:"file",accept:e.accept,multiple:e.multiple,onChange:e.handleChange}),z("textarea",{ref:"textarea",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",border:"0 none",resize:"none",cursor:"pointer",opacity:"0"},onCopy:e.handleDragover,onPaste:e.handleDrop,onClick:e.handleClick}),t!=null?t():[z("div",{class:"ivu-card-head",style:"text-align: left"},[z("p",null,[z(At,{type:"ios-folder-open",size:20}),`单击或拖动${e.reason}文件到此${e.global?"页面":"处"}`])]),z("div",{class:"ivu-card-body"},e.$slots.body?.())]])}}),pf=Ut({name:"PlayList",emits:["play"],props:{list:{type:Array,required:!0},name:{type:String,default:"播放列表"}},data(){return{isDrawerOpen:!1,index:0}},watch:{list(e,t){e!==t&&this.reset()}},computed:{title(){const{name:e,index:t,list:n}=this;return`${e}[${n.length===0?"0/0":`${t+1}/${n.length}`}]`}},methods:{set(e){this.isDrawerOpen=!1,this.index=e,this.current()},reset(){this.index=0,this.current()},prev(){--this.index<0&&(this.index=(this.list.length||1)-1),this.current()},current(){const e=this.list[this.index];e!=null&&this.$emit("play",e)},next(){++this.index>=this.list.length&&(this.index=0),this.current()},delete(e){const t=this,n=t.index;t.list.splice(e,1),n>=t.list.length?t.prev():n===e&&t.current()},openDrawer(){this.isDrawerOpen=!0},setDrawer(e){this.isDrawerOpen=e}},render(e,t){const n=this,{title:o}=n;return z(et,{title:o},t[64]??={extra:()=>[z($n,null,t[66]??=()=>[z(qe,{onClick:n.openDrawer},()=>"详细信息"),z(qe,{onClick:n.prev},()=>"上一个"),z(qe,{onClick:n.next},()=>"下一个")]),z(kp,{title:o,width:384,modelValue:n.isDrawerOpen,"onUpdate:modelValue":n.setDrawer},t[75]??=()=>[z(Sa,{onOnClick:n.set,style:"padding: 0px"},t[78]??=()=>Array.from(n.list,(s,d)=>z(et,{title:s.name,name:d,selected:n.index===d},{extra:()=>z(qe,{onClick(p){p.stopPropagation(),n.delete(d)}},()=>z(At,{type:"md-close"}))})))])]})}});var fl={exports:{}};(function(e,t){(function(n,o){e.exports=o()})(self,()=>(()=>{var n={916:(p,y,w)=>{var m=w(471);p.exports=function(A){var x,f="",E=(A=A||{}).video,C=A.options,g=m.$escape,B=A.tran,M=A.icons,L=A.index,_=m.$each;return A.$value,A.$index,f+=`<div class="dplayer-mask"></div>
<div class="dplayer-video-wrap">
    `,x=w(568)(E),f+=x,f+=`
    `,C.logo&&(f+=`
    <div class="dplayer-logo">
        <img src="`,f+=g(C.logo),f+=`">
    </div>
    `),f+=`
    <div class="dplayer-danmaku"`,C.danmaku&&C.danmaku.bottom&&(f+=' style="margin-bottom:',f+=g(C.danmaku.bottom),f+='"'),f+=`>
        <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>
    </div>
    <div class="dplayer-subtitle"></div>
    <div class="dplayer-bezel">
        <span class="dplayer-bezel-icon"></span>
        `,C.danmaku&&(f+=`
        <span class="dplayer-danloading">`,f+=g(B("danmaku-loading")),f+=`</span>
        `),f+=`
        <span class="diplayer-loading-icon">`,f+=M.loading,f+=`</span>
    </div>
</div>
<div class="dplayer-controller-mask"></div>
<div class="dplayer-controller">
    <div class="dplayer-icons dplayer-comment-box">
        <button class="dplayer-icon dplayer-comment-setting-icon" data-balloon="`,f+=g(B("setting")),f+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,f+=M.pallette,f+=`</span>
        </button>
        <div class="dplayer-comment-setting-box">
            <div class="dplayer-comment-setting-color">
                <div class="dplayer-comment-setting-title">`,f+=g(B("set-danmaku-color")),f+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,f+=g(L),f+=`" value="#fff" checked>
                    <span style="background: #fff;"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,f+=g(L),f+=`" value="#e54256">
                    <span style="background: #e54256"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,f+=g(L),f+=`" value="#ffe133">
                    <span style="background: #ffe133"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,f+=g(L),f+=`" value="#64DD17">
                    <span style="background: #64DD17"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,f+=g(L),f+=`" value="#39ccff">
                    <span style="background: #39ccff"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,f+=g(L),f+=`" value="#D500F9">
                    <span style="background: #D500F9"></span>
                </label>
            </div>
            <div class="dplayer-comment-setting-type">
                <div class="dplayer-comment-setting-title">`,f+=g(B("set-danmaku-type")),f+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,f+=g(L),f+=`" value="1">
                    <span>`,f+=g(B("top")),f+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,f+=g(L),f+=`" value="0" checked>
                    <span>`,f+=g(B("rolling")),f+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,f+=g(L),f+=`" value="2">
                    <span>`,f+=g(B("bottom")),f+=`</span>
                </label>
            </div>
        </div>
        <input class="dplayer-comment-input" type="text" placeholder="`,f+=g(B("input-danmaku-enter")),f+=`" maxlength="30">
        <button class="dplayer-icon dplayer-send-icon" data-balloon="`,f+=g(B("send")),f+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,f+=M.send,f+=`</span>
        </button>
    </div>
    <div class="dplayer-icons dplayer-icons-left">
        <button class="dplayer-icon dplayer-play-icon">
            <span class="dplayer-icon-content">`,f+=M.play,f+=`</span>
        </button>
        <div class="dplayer-volume">
            <button class="dplayer-icon dplayer-volume-icon">
                <span class="dplayer-icon-content">`,f+=M.volumeDown,f+=`</span>
            </button>
            <div class="dplayer-volume-bar-wrap" data-balloon-pos="up">
                <div class="dplayer-volume-bar">
                    <div class="dplayer-volume-bar-inner" style="background: `,f+=g(C.theme),f+=`;">
                        <span class="dplayer-thumb" style="background: `,f+=g(C.theme),f+=`"></span>
                    </div>
                </div>
            </div>
        </div>
        <span class="dplayer-time">
            <span class="dplayer-ptime">0:00</span> /
            <span class="dplayer-dtime">0:00</span>
        </span>
        `,C.live&&(f+=`
        <span class="dplayer-live-badge"><span class="dplayer-live-dot" style="background: `,f+=g(C.theme),f+=';"></span>',f+=g(B("live")),f+=`</span>
        `),f+=`
    </div>
    <div class="dplayer-icons dplayer-icons-right">
        `,C.video.quality&&(f+=`
        <div class="dplayer-quality">
            <button class="dplayer-icon dplayer-quality-icon">`,f+=g(C.video.quality[C.video.defaultQuality].name),f+=`</button>
            <div class="dplayer-quality-mask">
                <div class="dplayer-quality-list">
                `,_(C.video.quality,function(D,H){f+=`
                    <div class="dplayer-quality-item" data-index="`,f+=g(H),f+='">',f+=g(D.name),f+=`</div>
                `}),f+=`
                </div>
            </div>
        </div>
        `),f+=`
        `,C.screenshot&&(f+=`
        <div class="dplayer-icon dplayer-camera-icon" data-balloon="`,f+=g(B("screenshot")),f+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,f+=M.camera,f+=`</span>
        </div>
        `),f+=`
        `,C.airplay&&(f+=`
        <div class="dplayer-icon dplayer-airplay-icon" data-balloon="`,f+=g(B("airplay")),f+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,f+=M.airplay,f+=`</span>
        </div>
        `),f+=`
        `,C.chromecast&&(f+=`
        <div class="dplayer-icon dplayer-chromecast-icon" data-balloon="`,f+=g(B("chromecast")),f+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,f+=M.chromecast,f+=`</span>
        </div>
        `),f+=`
        <div class="dplayer-comment">
            <button class="dplayer-icon dplayer-comment-icon" data-balloon="`,f+=g(B("send-danmaku")),f+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,f+=M.comment,f+=`</span>
            </button>
        </div>
        `,C.subtitle&&(f+=`
        `,typeof C.subtitle.url=="string"?(f+=`
        <div class="dplayer-subtitle-btn">
            <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="`,f+=g(B("hide-subs")),f+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,f+=M.subtitle,f+=`</span>
            </button>
        </div>
        `):(f+=`
        <div class="dplayer-subtitles">
            <button class="dplayer-icon dplayer-subtitles-icon" data-balloon="`,f+=g(B("subtitle")),f+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,f+=M.subtitle,f+=`</span>
            </button>
            <div class="dplayer-subtitles-box">
                <div class="dplayer-subtitles-panel">
                    `,_(C.subtitle.url,function(D,H){f+=`
                        <div class="dplayer-subtitles-item" data-subtitle="`,f+=g(D.url),f+=`">
                            <!-- if lang, show tran(lang). if lang and name, show name + (tran(lang)). if name, show name. off option use lang for translation. -->
                            <span class="dplayer-label">`,f+=g(D.lang?D.name?D.name+" ("+B(D.lang)+")":B(D.lang):D.name),f+=`</span>
                        </div>
                    `}),f+=`
                </div>
            </div>
        </div>
        `),f+=`
        `),f+=`
        <div class="dplayer-setting">
            <button class="dplayer-icon dplayer-setting-icon" data-balloon="`,f+=g(B("setting")),f+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,f+=M.setting,f+=`</span>
            </button>
            <div class="dplayer-setting-box">
                <div class="dplayer-setting-origin-panel">
                    <div class="dplayer-setting-item dplayer-setting-speed">
                        <span class="dplayer-label">`,f+=g(B("speed")),f+=`</span>
                        <div class="dplayer-toggle">`,f+=M.right,f+=`</div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-loop">
                        <span class="dplayer-label">`,f+=g(B("loop")),f+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">
                            <label for="dplayer-toggle"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-showdan">
                        <span class="dplayer-label">`,f+=g(B("show-danmaku")),f+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">
                            <label for="dplayer-toggle-dan"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danunlimit">
                        <span class="dplayer-label">`,f+=g(B("unlimited-danmaku")),f+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-danunlimit-setting-input" type="checkbox" name="dplayer-toggle-danunlimit">
                            <label for="dplayer-toggle-danunlimit"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danmaku">
                        <span class="dplayer-label">`,f+=g(B("opacity-danmaku")),f+=`</span>
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
                    `,_(C.playbackSpeed,function(D,H){f+=`
                        <div class="dplayer-setting-speed-item" data-speed="`,f+=g(D),f+=`">
                            <span class="dplayer-label">`,f+=g(D===1?B("normal"):D),f+=`</span>
                        </div>
                    `}),f+=`
                </div>
            </div>
        </div>
        <div class="dplayer-full">
            <button class="dplayer-icon dplayer-full-in-icon" data-balloon="`,f+=g(B("web-fullscreen")),f+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,f+=M.fullWeb,f+=`</span>
            </button>
            <button class="dplayer-icon dplayer-full-icon" data-balloon="`,f+=g(B("fullscreen")),f+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,f+=M.full,f+=`</span>
            </button>
        </div>
    </div>
    <div class="dplayer-bar-wrap">
        <div class="dplayer-bar-time hidden">00:00</div>
        <div class="dplayer-bar-preview"></div>
        <div class="dplayer-bar">
            <div class="dplayer-loaded" style="width: 0;"></div>
            <div class="dplayer-played" style="width: 0; background: `,f+=g(C.theme),f+=`">
                <span class="dplayer-thumb" style="background: `,f+=g(C.theme),f+=`"></span>
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
    `,C.danmaku&&(f+=`
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
    `),f+=`
</div>
<div class="dplayer-menu">
    `,_(C.contextmenu,function(D,H){f+=`
        <div class="dplayer-menu-item">
            <a`,D.link&&(f+=' target="_blank"'),f+=' href="',f+=g(D.link||"javascript:void(0);"),f+='">',D.key&&(f+=" ",f+=g(B(D.key))),D.text&&(f+=" ",f+=g(D.text)),f+=`</a>
        </div>
    `}),f+=`
</div>
<div class="dplayer-notice-list"></div>
<button class="dplayer-mobile-play">
    `,f+=M.play,f+=`
</button>`}},568:(p,y,w)=>{var m=w(471);p.exports=function(A){var x="",f=(A=A||{}).enableSubtitle,E=A.subtitle,C=A.current,g=A.airplay,B=A.pic,M=m.$escape,L=A.screenshot,_=A.preload,D=A.url;return f=E&&E.type==="webvtt",x+=`
<video
    class="dplayer-video `,C&&(x+="dplayer-video-current"),x+=`"
    webkit-playsinline
    `,g&&(x+=' x-webkit-airplay="allow" '),x+=`
    playsinline
    `,B&&(x+='poster="',x+=M(B),x+='"'),x+=`
    `,(L||f)&&(x+='crossorigin="anonymous"'),x+=`
    `,_&&(x+='preload="',x+=M(_),x+='"'),x+=`
    `,g?x+=`
    nosrc
    `:D&&(x+=`
    src="`,x+=M(D),x+=`"
    `),x+=`
    >
    `,g&&(x+=`
    <source src="`,x+=M(D),x+=`">
    `),x+=`
    `,f&&(x+=`
    <track class="dplayer-subtrack" kind="metadata" default src="`,x+=M(typeof E.url=="string"?E.url:E.url[E.index].url),x+=`"></track>
    `),x+`
</video>`}},49:(p,y,w)=>{w.d(y,{Z:()=>E});var m=w(415),A=w.n(m),x=w(352),f=w.n(x)()(A());f.push([p.id,`:root {
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
`],sourceRoot:""}]);const E=f},685:(p,y,w)=>{w.d(y,{Z:()=>_});var m=w(415),A=w.n(m),x=w(352),f=w.n(x),E=w(49),C=w(80),g=w.n(C),B=new URL(w(831),w.b),M=f()(A());M.i(E.Z);var L=g()(B);M.push([p.id,`@keyframes my-face {
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
  background: url(`+L+`) repeat-x bottom;
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
}`],sourceRoot:""}]);const _=M},856:p=>{var y=[];function w(x){for(var f=-1,E=0;E<y.length;E++)if(y[E].identifier===x){f=E;break}return f}function m(x,f){for(var E={},C=[],g=0;g<x.length;g++){var B=x[g],M=f.base?B[0]+f.base:B[0],L=E[M]||0,_="".concat(M," ").concat(L);E[M]=L+1;var D=w(_),H={css:B[1],media:B[2],sourceMap:B[3],supports:B[4],layer:B[5]};if(D!==-1)y[D].references++,y[D].updater(H);else{var I=A(H,f);f.byIndex=g,y.splice(g,0,{identifier:_,updater:I,references:1})}C.push(_)}return C}function A(x,f){var E=f.domAPI(f);return E.update(x),function(C){if(C){if(C.css===x.css&&C.media===x.media&&C.sourceMap===x.sourceMap&&C.supports===x.supports&&C.layer===x.layer)return;E.update(x=C)}else E.remove()}}p.exports=function(x,f){var E=m(x=x||[],f=f||{});return function(C){C=C||[];for(var g=0;g<E.length;g++){var B=w(E[g]);y[B].references--}for(var M=m(C,f),L=0;L<E.length;L++){var _=w(E[L]);y[_].references===0&&(y[_].updater(),y.splice(_,1))}E=M}}},370:p=>{var y={};p.exports=function(w,m){var A=function(x){if(y[x]===void 0){var f=document.querySelector(x);if(window.HTMLIFrameElement&&f instanceof window.HTMLIFrameElement)try{f=f.contentDocument.head}catch{f=null}y[x]=f}return y[x]}(w);if(!A)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");A.appendChild(m)}},278:p=>{p.exports=function(y){var w=document.createElement("style");return y.setAttributes(w,y.attributes),y.insert(w,y.options),w}},458:(p,y,w)=>{p.exports=function(m){var A=w.nc;A&&m.setAttribute("nonce",A)}},470:p=>{p.exports=function(y){var w=y.insertStyleElement(y);return{update:function(m){(function(A,x,f){var E="";f.supports&&(E+="@supports (".concat(f.supports,") {")),f.media&&(E+="@media ".concat(f.media," {"));var C=f.layer!==void 0;C&&(E+="@layer".concat(f.layer.length>0?" ".concat(f.layer):""," {")),E+=f.css,C&&(E+="}"),f.media&&(E+="}"),f.supports&&(E+="}");var g=f.sourceMap;g&&typeof btoa<"u"&&(E+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(g))))," */")),x.styleTagTransform(E,A,x.options)})(w,y,m)},remove:function(){(function(m){if(m.parentNode===null)return!1;m.parentNode.removeChild(m)})(w)}}}},488:p=>{p.exports=function(y,w){if(w.styleSheet)w.styleSheet.cssText=y;else{for(;w.firstChild;)w.removeChild(w.firstChild);w.appendChild(document.createTextNode(y))}}},251:p=>{p.exports='<svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg"><path d="M288 90v96c0 20-16 36-36 36h-10c-16 0-16-24 0-24h10c7 0 12-5 12-12V90c0-7-5-12-12-12H36c-7 0-12 5-12 12v96c0 7 5 12 12 12h10c16 0 16 24 0 24H36c-20 0-36-16-36-36V90c0-20 16-36 36-36h216c20 0 36 16 36 36zm-120 62l48 68c14 20 1 38-20 38H92c-21 0-34-18-20-38l48-68c13-18 35-18 48 0z"></path></svg>'},113:p=>{p.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"></path></svg>'},193:p=>{p.exports='<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="chromecast" class="svg-inline--fa fa-chromecast fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M447.8,64H64c-23.6,0-42.7,19.1-42.7,42.7v63.9H64v-63.9h383.8v298.6H298.6V448H448c23.6,0,42.7-19.1,42.7-42.7V106.7 C490.7,83.1,471.4,64,447.8,64z M21.3,383.6L21.3,383.6l0,63.9h63.9C85.2,412.2,56.6,383.6,21.3,383.6L21.3,383.6z M21.3,298.6V341 c58.9,0,106.6,48.1,106.6,107h42.7C170.7,365.6,103.7,298.7,21.3,298.6z M213.4,448h42.7c-0.5-129.5-105.3-234.3-234.8-234.6l0,42.4 C127.3,255.6,213.3,342,213.4,448z"></path></svg>'},338:p=>{p.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"></path></svg>'},807:p=>{p.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"></path></svg>'},300:p=>{p.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"></path></svg>'},574:p=>{p.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"></path></svg>'},182:p=>{p.exports='<svg version="1.1" viewBox="0 0 22 22"><svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg>'},965:p=>{p.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z"></path></svg>'},74:p=>{p.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>'},730:p=>{p.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>'},428:p=>{p.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>'},254:p=>{p.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"></path></svg>'},934:p=>{p.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 28"><path d="M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"></path></svg>'},410:p=>{p.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>'},644:p=>{p.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>'},324:p=>{p.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>'},437:p=>{p.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z"></path></svg>'},897:(p,y,w)=>{var m=typeof self<"u"?self:typeof window<"u"?window:w.g!==void 0?w.g:{},A=Object.create(m),x=/["&'<>]/;function f(E){return typeof E!="string"&&(E=E==null?"":typeof E=="function"?f(E.call(E)):JSON.stringify(E)),E}A.$escape=function(E){return function(C){var g=""+C,B=x.exec(g);if(!B)return C;var M="",L=void 0,_=void 0,D=void 0;for(L=B.index,_=0;L<g.length;L++){switch(g.charCodeAt(L)){case 34:D="&#34;";break;case 38:D="&#38;";break;case 39:D="&#39;";break;case 60:D="&#60;";break;case 62:D="&#62;";break;default:continue}_!==L&&(M+=g.substring(_,L)),_=L+1,M+=D}return _!==L?M+g.substring(_,L):M}(f(E))},A.$each=function(E,C){if(Array.isArray(E))for(var g=0,B=E.length;g<B;g++)C(E[g],g);else for(var M in E)C(E[M],M)},p.exports=A},471:(p,y,w)=>{p.exports=w(897)},352:p=>{p.exports=function(y){var w=[];return w.toString=function(){return this.map(function(m){var A="",x=m[5]!==void 0;return m[4]&&(A+="@supports (".concat(m[4],") {")),m[2]&&(A+="@media ".concat(m[2]," {")),x&&(A+="@layer".concat(m[5].length>0?" ".concat(m[5]):""," {")),A+=y(m),x&&(A+="}"),m[2]&&(A+="}"),m[4]&&(A+="}"),A}).join("")},w.i=function(m,A,x,f,E){typeof m=="string"&&(m=[[null,m,void 0]]);var C={};if(x)for(var g=0;g<this.length;g++){var B=this[g][0];B!=null&&(C[B]=!0)}for(var M=0;M<m.length;M++){var L=[].concat(m[M]);x&&C[L[0]]||(E!==void 0&&(L[5]===void 0||(L[1]="@layer".concat(L[5].length>0?" ".concat(L[5]):""," {").concat(L[1],"}")),L[5]=E),A&&(L[2]&&(L[1]="@media ".concat(L[2]," {").concat(L[1],"}")),L[2]=A),f&&(L[4]?(L[1]="@supports (".concat(L[4],") {").concat(L[1],"}"),L[4]=f):L[4]="".concat(f)),w.push(L))}},w}},80:p=>{p.exports=function(y,w){return w||(w={}),y&&(y=String(y.__esModule?y.default:y),/^['"].*['"]$/.test(y)&&(y=y.slice(1,-1)),w.hash&&(y+=w.hash),/["'() \t\n]|(%20)/.test(y)||w.needQuotes?'"'.concat(y.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):y)}},415:p=>{p.exports=function(y){var w=y[1],m=y[3];if(!m)return w;if(typeof btoa=="function"){var A=btoa(unescape(encodeURIComponent(JSON.stringify(m)))),x="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(A),f="/*# ".concat(x," */");return[w].concat([f]).join(`
`)}return[w].join(`
`)}},937:p=>{function y(w){return y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},y(w)}p.exports=(typeof self>"u"?"undefined":y(self))=="object"?self.FormData:window.FormData},831:p=>{p.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg=="}},o={};function s(p){var y=o[p];if(y!==void 0)return y.exports;var w=o[p]={id:p,exports:{}};return n[p](w,w.exports,s),w.exports}s.m=n,s.n=p=>{var y=p&&p.__esModule?()=>p.default:()=>p;return s.d(y,{a:y}),y},s.d=(p,y)=>{for(var w in y)s.o(y,w)&&!s.o(p,w)&&Object.defineProperty(p,w,{enumerable:!0,get:y[w]})},s.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),s.o=(p,y)=>Object.prototype.hasOwnProperty.call(p,y),s.b=document.baseURI||self.location.href,s.nc=void 0;var d={};return(()=>{s.d(d,{default:()=>Cd});var p=s(856),y=s.n(p),w=s(470),m=s.n(w),A=s(370),x=s.n(A),f=s(458),E=s.n(f),C=s(278),g=s.n(C),B=s(488),M=s.n(B),L=s(685),_={};_.styleTagTransform=M(),_.setAttributes=E(),_.insert=x().bind(null,"head"),_.domAPI=m(),_.insertStyleElement=g(),y()(L.Z,_),L.Z&&L.Z.locals&&L.Z.locals;function D(r){return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},D(r)}function H(r,i){this.name="AggregateError",this.errors=r,this.message=i||""}H.prototype=Error.prototype;function I(r){return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},I(r)}var N=setTimeout;function ne(r){return!!(r&&r.length!==void 0)}function K(){}function F(r){if(!(this instanceof F))throw new TypeError("Promises must be constructed via new");if(typeof r!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],ee(r,this)}function $e(r,i){for(;r._state===3;)r=r._value;r._state!==0?(r._handled=!0,F._immediateFn(function(){var u=r._state===1?i.onFulfilled:i.onRejected;if(u!==null){var a;try{a=u(r._value)}catch(l){return void J(i.promise,l)}Ye(i.promise,a)}else(r._state===1?Ye:J)(i.promise,r._value)})):r._deferreds.push(i)}function Ye(r,i){try{if(i===r)throw new TypeError("A promise cannot be resolved with itself.");if(i&&(I(i)==="object"||typeof i=="function")){var u=i.then;if(i instanceof F)return r._state=3,r._value=i,void j(r);if(typeof u=="function")return void ee((a=u,l=i,function(){a.apply(l,arguments)}),r)}r._state=1,r._value=i,j(r)}catch(c){J(r,c)}var a,l}function J(r,i){r._state=2,r._value=i,j(r)}function j(r){r._state===2&&r._deferreds.length===0&&F._immediateFn(function(){r._handled||F._unhandledRejectionFn(r._value)});for(var i=0,u=r._deferreds.length;i<u;i++)$e(r,r._deferreds[i]);r._deferreds=null}function $(r,i,u){this.onFulfilled=typeof r=="function"?r:null,this.onRejected=typeof i=="function"?i:null,this.promise=u}function ee(r,i){var u=!1;try{r(function(a){u||(u=!0,Ye(i,a))},function(a){u||(u=!0,J(i,a))})}catch(a){if(u)return;u=!0,J(i,a)}}F.prototype.catch=function(r){return this.then(null,r)},F.prototype.then=function(r,i){var u=new this.constructor(K);return $e(this,new $(r,i,u)),u},F.prototype.finally=function(r){var i=this.constructor;return this.then(function(u){return i.resolve(r()).then(function(){return u})},function(u){return i.resolve(r()).then(function(){return i.reject(u)})})},F.all=function(r){return new F(function(i,u){if(!ne(r))return u(new TypeError("Promise.all accepts an array"));var a=Array.prototype.slice.call(r);if(a.length===0)return i([]);var l=a.length;function c(b,v){try{if(v&&(I(v)==="object"||typeof v=="function")){var k=v.then;if(typeof k=="function")return void k.call(v,function(S){c(b,S)},u)}a[b]=v,--l==0&&i(a)}catch(S){u(S)}}for(var h=0;h<a.length;h++)c(h,a[h])})},F.any=function(r){var i=this;return new i(function(u,a){if(!r||r.length===void 0)return a(new TypeError("Promise.any accepts an array"));var l=Array.prototype.slice.call(r);if(l.length===0)return a();for(var c=[],h=0;h<l.length;h++)try{i.resolve(l[h]).then(u).catch(function(b){c.push(b),c.length===l.length&&a(new H(c,"All promises were rejected"))})}catch(b){a(b)}})},F.allSettled=function(r){return new this(function(i,u){if(!r||r.length===void 0)return u(new TypeError(D(r)+" "+r+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var a=Array.prototype.slice.call(r);if(a.length===0)return i([]);var l=a.length;function c(b,v){if(v&&(D(v)==="object"||typeof v=="function")){var k=v.then;if(typeof k=="function")return void k.call(v,function(S){c(b,S)},function(S){a[b]={status:"rejected",reason:S},--l==0&&i(a)})}a[b]={status:"fulfilled",value:v},--l==0&&i(a)}for(var h=0;h<a.length;h++)c(h,a[h])})},F.resolve=function(r){return r&&I(r)==="object"&&r.constructor===F?r:new F(function(i){i(r)})},F.reject=function(r){return new F(function(i,u){u(r)})},F.race=function(r){return new F(function(i,u){if(!ne(r))return u(new TypeError("Promise.race accepts an array"));for(var a=0,l=r.length;a<l;a++)F.resolve(r[a]).then(i,u)})},F._immediateFn=typeof setImmediate=="function"&&function(r){setImmediate(r)}||function(r){N(r,0)},F._unhandledRejectionFn=function(r){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",r)};const W=F;var re=/mobile/i.test(window.navigator.userAgent);const O={secondToTime:function(r){if((r=r||0)===0||r===1/0||r.toString()==="NaN")return"00:00";var i=Math.floor(r/3600),u=Math.floor((r-3600*i)/60),a=Math.floor(r-3600*i-60*u);return(i>0?[i,u,a]:[u,a]).map(function(l){return l<10?"0"+l:""+l}).join(":")},getElementViewLeft:function(r){var i=r.offsetLeft,u=r.offsetParent,a=document.body.scrollLeft+document.documentElement.scrollLeft;if(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)for(;u!==null&&u!==r;)i+=u.offsetLeft,u=u.offsetParent;else for(;u!==null;)i+=u.offsetLeft,u=u.offsetParent;return i-a},getBoundingClientRectViewLeft:function(r){var i=window.scrollY||window.pageYOffset||document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0);if(r.getBoundingClientRect){if(typeof this.getBoundingClientRectViewLeft.offset!="number"){var u=document.createElement("div");u.style.cssText="position:absolute;top:0;left:0;",document.body.appendChild(u),this.getBoundingClientRectViewLeft.offset=-u.getBoundingClientRect().top-i,document.body.removeChild(u),u=null}var a=r.getBoundingClientRect(),l=this.getBoundingClientRectViewLeft.offset;return a.left+l}return this.getElementViewLeft(r)},getScrollPosition:function(){return{left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}},setScrollPosition:function(r){var i=r.left,u=i===void 0?0:i,a=r.top,l=a===void 0?0:a;this.isFirefox?(document.documentElement.scrollLeft=u,document.documentElement.scrollTop=l):window.scrollTo(u,l)},isMobile:re,isFirefox:/firefox/i.test(window.navigator.userAgent),isChrome:/chrome/i.test(window.navigator.userAgent),isSafari:/safari/i.test(window.navigator.userAgent),storage:{set:function(r,i){localStorage.setItem(r,i)},get:function(r){return localStorage.getItem(r)}},nameMap:{dragStart:re?"touchstart":"mousedown",dragMove:re?"touchmove":"mousemove",dragEnd:re?"touchend":"mouseup"},color2Number:function(r){return r[0]==="#"&&(r=r.substr(1)),r.length===3&&(r="".concat(r[0]).concat(r[0]).concat(r[1]).concat(r[1]).concat(r[2]).concat(r[2])),parseInt(r,16)+0&16777215},number2Color:function(r){return"#"+("00000"+r.toString(16)).slice(-6)},number2Type:function(r){switch(r){case 0:default:return"right";case 1:return"top";case 2:return"bottom"}}};function pe(r,i){return function(){return r.apply(i,arguments)}}function ye(r){return ye=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},ye(r)}var Ee,ze=Object.prototype.toString,Pe=Object.getPrototypeOf,pt=(Ee=Object.create(null),function(r){var i=ze.call(r);return Ee[i]||(Ee[i]=i.slice(8,-1).toLowerCase())}),Fe=function(r){return r=r.toLowerCase(),function(i){return pt(i)===r}},ut=function(r){return function(i){return ye(i)===r}},We=Array.isArray,Se=ut("undefined"),at=Fe("ArrayBuffer"),_t=ut("string"),Ze=ut("function"),Rr=ut("number"),_a=function(r){return r!==null&&ye(r)==="object"},ea=function(r){if(pt(r)!=="object")return!1;var i=Pe(r);return!(i!==null&&i!==Object.prototype&&Object.getPrototypeOf(i)!==null||Symbol.toStringTag in r||Symbol.iterator in r)},ml=Fe("Date"),yl=Fe("File"),Al=Fe("Blob"),gl=Fe("FileList"),bl=Fe("URLSearchParams");function dn(r,i){var u,a,l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},c=l.allOwnKeys,h=c!==void 0&&c;if(r!=null)if(ye(r)!=="object"&&(r=[r]),We(r))for(u=0,a=r.length;u<a;u++)i.call(null,r[u],u,r);else{var b,v=h?Object.getOwnPropertyNames(r):Object.keys(r),k=v.length;for(u=0;u<k;u++)b=v[u],i.call(null,r[b],b,r)}}function qr(r,i){i=i.toLowerCase();for(var u,a=Object.keys(r),l=a.length;l-- >0;)if(i===(u=a[l]).toLowerCase())return u;return null}var Na,Pr,Vr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:zt,$r=function(r){return!Se(r)&&r!==Vr},vl=(Na=typeof Uint8Array<"u"&&Pe(Uint8Array),function(r){return Na&&r instanceof Na}),wl=Fe("HTMLFormElement"),Ur=(Pr=Object.prototype.hasOwnProperty,function(r,i){return Pr.call(r,i)}),xl=Fe("RegExp"),jr=function(r,i){var u=Object.getOwnPropertyDescriptors(r),a={};dn(u,function(l,c){i(l,c,r)!==!1&&(a[c]=l)}),Object.defineProperties(r,a)};const T={isArray:We,isArrayBuffer:at,isBuffer:function(r){return r!==null&&!Se(r)&&r.constructor!==null&&!Se(r.constructor)&&Ze(r.constructor.isBuffer)&&r.constructor.isBuffer(r)},isFormData:function(r){var i="[object FormData]";return r&&(typeof FormData=="function"&&r instanceof FormData||ze.call(r)===i||Ze(r.toString)&&r.toString()===i)},isArrayBufferView:function(r){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(r):r&&r.buffer&&at(r.buffer)},isString:_t,isNumber:Rr,isBoolean:function(r){return r===!0||r===!1},isObject:_a,isPlainObject:ea,isUndefined:Se,isDate:ml,isFile:yl,isBlob:Al,isRegExp:xl,isFunction:Ze,isStream:function(r){return _a(r)&&Ze(r.pipe)},isURLSearchParams:bl,isTypedArray:vl,isFileList:gl,forEach:dn,merge:function r(){for(var i=$r(this)&&this||{},u=i.caseless,a={},l=function(b,v){var k=u&&qr(a,v)||v;ea(a[k])&&ea(b)?a[k]=r(a[k],b):ea(b)?a[k]=r({},b):We(b)?a[k]=b.slice():a[k]=b},c=0,h=arguments.length;c<h;c++)arguments[c]&&dn(arguments[c],l);return a},extend:function(r,i,u){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},l=a.allOwnKeys;return dn(i,function(c,h){u&&Ze(c)?r[h]=pe(c,u):r[h]=c},{allOwnKeys:l}),r},trim:function(r){return r.trim?r.trim():r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},stripBOM:function(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r},inherits:function(r,i,u,a){r.prototype=Object.create(i.prototype,a),r.prototype.constructor=r,Object.defineProperty(r,"super",{value:i.prototype}),u&&Object.assign(r.prototype,u)},toFlatObject:function(r,i,u,a){var l,c,h,b={};if(i=i||{},r==null)return i;do{for(c=(l=Object.getOwnPropertyNames(r)).length;c-- >0;)h=l[c],a&&!a(h,r,i)||b[h]||(i[h]=r[h],b[h]=!0);r=u!==!1&&Pe(r)}while(r&&(!u||u(r,i))&&r!==Object.prototype);return i},kindOf:pt,kindOfTest:Fe,endsWith:function(r,i,u){r=String(r),(u===void 0||u>r.length)&&(u=r.length),u-=i.length;var a=r.indexOf(i,u);return a!==-1&&a===u},toArray:function(r){if(!r)return null;if(We(r))return r;var i=r.length;if(!Rr(i))return null;for(var u=new Array(i);i-- >0;)u[i]=r[i];return u},forEachEntry:function(r,i){for(var u,a=(r&&r[Symbol.iterator]).call(r);(u=a.next())&&!u.done;){var l=u.value;i.call(r,l[0],l[1])}},matchAll:function(r,i){for(var u,a=[];(u=r.exec(i))!==null;)a.push(u);return a},isHTMLForm:wl,hasOwnProperty:Ur,hasOwnProp:Ur,reduceDescriptors:jr,freezeMethods:function(r){jr(r,function(i,u){if(Ze(r)&&["arguments","caller","callee"].indexOf(u)!==-1)return!1;var a=r[u];Ze(a)&&(i.enumerable=!1,"writable"in i?i.writable=!1:i.set||(i.set=function(){throw Error("Can not rewrite read-only method '"+u+"'")}))})},toObjectSet:function(r,i){var u={},a=function(l){l.forEach(function(c){u[c]=!0})};return We(r)?a(r):a(String(r).split(i)),u},toCamelCase:function(r){return r.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(i,u,a){return u.toUpperCase()+a})},noop:function(){},toFiniteNumber:function(r,i){return r=+r,Number.isFinite(r)?r:i},findKey:qr,global:Vr,isContextDefined:$r,toJSONObject:function(r){var i=new Array(10);return function u(a,l){if(_a(a)){if(i.indexOf(a)>=0)return;if(!("toJSON"in a)){i[l]=a;var c=We(a)?[]:{};return dn(a,function(h,b){var v=u(h,l+1);!Se(v)&&(c[b]=v)}),i[l]=void 0,c}}return a}(r,0)}};function jt(r,i,u,a,l){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=r,this.name="AxiosError",i&&(this.code=i),u&&(this.config=u),a&&(this.request=a),l&&(this.response=l)}T.inherits(jt,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:T.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Wr=jt.prototype,Qr={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(function(r){Qr[r]={value:r}}),Object.defineProperties(jt,Qr),Object.defineProperty(Wr,"isAxiosError",{value:!0}),jt.from=function(r,i,u,a,l,c){var h=Object.create(Wr);return T.toFlatObject(r,h,function(b){return b!==Error.prototype},function(b){return b!=="isAxiosError"}),jt.call(h,r.message,i,u,a,l),h.cause=r,h.name=r.name,c&&Object.assign(h,c),h};const ue=jt,El=s(937);function Fa(r){return Fa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Fa(r)}function Ra(r){return T.isPlainObject(r)||T.isArray(r)}function Hr(r){return T.endsWith(r,"[]")?r.slice(0,-2):r}function Yr(r,i,u){return r?r.concat(i).map(function(a,l){return a=Hr(a),!u&&l?"["+a+"]":a}).join(u?".":""):i}var Cl=T.toFlatObject(T,{},null,function(r){return/^is[A-Z]/.test(r)});const ta=function(r,i,u){if(!T.isObject(r))throw new TypeError("target must be an object");i=i||new(El||FormData);var a,l=(u=T.toFlatObject(u,{metaTokens:!0,dots:!1,indexes:!1},!1,function(Q,U){return!T.isUndefined(U[Q])})).metaTokens,c=u.visitor||S,h=u.dots,b=u.indexes,v=(u.Blob||typeof Blob<"u"&&Blob)&&(a=i)&&T.isFunction(a.append)&&a[Symbol.toStringTag]==="FormData"&&a[Symbol.iterator];if(!T.isFunction(c))throw new TypeError("visitor must be a function");function k(Q){if(Q===null)return"";if(T.isDate(Q))return Q.toISOString();if(!v&&T.isBlob(Q))throw new ue("Blob is not supported. Use a Buffer instead.");return T.isArrayBuffer(Q)||T.isTypedArray(Q)?v&&typeof Blob=="function"?new Blob([Q]):Buffer.from(Q):Q}function S(Q,U,P){var X=Q;if(Q&&!P&&Fa(Q)==="object"){if(T.endsWith(U,"{}"))U=l?U:U.slice(0,-2),Q=JSON.stringify(Q);else if(T.isArray(Q)&&function(ae){return T.isArray(ae)&&!ae.some(Ra)}(Q)||T.isFileList(Q)||T.endsWith(U,"[]")&&(X=T.toArray(Q)))return U=Hr(U),X.forEach(function(ae,Oe){!T.isUndefined(ae)&&ae!==null&&i.append(b===!0?Yr([U],Oe,h):b===null?U:U+"[]",k(ae))}),!1}return!!Ra(Q)||(i.append(Yr(P,U,h),k(Q)),!1)}var R=[],V=Object.assign(Cl,{defaultVisitor:S,convertValue:k,isVisitable:Ra});if(!T.isObject(r))throw new TypeError("data must be an object");return function Q(U,P){if(!T.isUndefined(U)){if(R.indexOf(U)!==-1)throw Error("Circular reference detected in "+P.join("."));R.push(U),T.forEach(U,function(X,ae){(!(T.isUndefined(X)||X===null)&&c.call(i,X,T.isString(ae)?ae.trim():ae,P,V))===!0&&Q(X,P?P.concat(ae):[ae])}),R.pop()}}(r),i};function Kr(r){var i={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g,function(u){return i[u]})}function Xr(r,i){this._pairs=[],r&&ta(r,this,i)}var Gr=Xr.prototype;Gr.append=function(r,i){this._pairs.push([r,i])},Gr.toString=function(r){var i=r?function(u){return r.call(this,u,Kr)}:Kr;return this._pairs.map(function(u){return i(u[0])+"="+i(u[1])},"").join("&")};const Zr=Xr;function kl(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Jr(r,i,u){if(!i)return r;var a,l=u&&u.encode||kl,c=u&&u.serialize;if(a=c?c(i,u):T.isURLSearchParams(i)?i.toString():new Zr(i,u).toString(l)){var h=r.indexOf("#");h!==-1&&(r=r.slice(0,h)),r+=(r.indexOf("?")===-1?"?":"&")+a}return r}function cn(r){return cn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},cn(r)}function Bl(r,i){for(var u=0;u<i.length;u++){var a=i[u];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,(l=function(c,h){if(cn(c)!=="object"||c===null)return c;var b=c[Symbol.toPrimitive];if(b!==void 0){var v=b.call(c,"string");if(cn(v)!=="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),cn(l)==="symbol"?l:String(l)),a)}var l}var Sl=function(){function r(){(function(a,l){if(!(a instanceof l))throw new TypeError("Cannot call a class as a function")})(this,r),this.handlers=[]}var i,u;return i=r,u=[{key:"use",value:function(a,l,c){return this.handlers.push({fulfilled:a,rejected:l,synchronous:!!c&&c.synchronous,runWhen:c?c.runWhen:null}),this.handlers.length-1}},{key:"eject",value:function(a){this.handlers[a]&&(this.handlers[a]=null)}},{key:"clear",value:function(){this.handlers&&(this.handlers=[])}},{key:"forEach",value:function(a){T.forEach(this.handlers,function(l){l!==null&&a(l)})}}],u&&Bl(i.prototype,u),Object.defineProperty(i,"prototype",{writable:!1}),r}();const ei=Sl,ti={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Il=typeof URLSearchParams<"u"?URLSearchParams:Zr,Tl=FormData;var qa,Ll=(typeof navigator>"u"||(qa=navigator.product)!=="ReactNative"&&qa!=="NativeScript"&&qa!=="NS")&&typeof window<"u"&&typeof document<"u",Dl=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function";const ht={isBrowser:!0,classes:{URLSearchParams:Il,FormData:Tl,Blob},isStandardBrowserEnv:Ll,isStandardBrowserWebWorkerEnv:Dl,protocols:["http","https","file","blob","url","data"]},ni=function(r){function i(a,l,c,h){var b=a[h++],v=Number.isFinite(+b),k=h>=a.length;return b=!b&&T.isArray(c)?c.length:b,k?(T.hasOwnProp(c,b)?c[b]=[c[b],l]:c[b]=l,!v):(c[b]&&T.isObject(c[b])||(c[b]=[]),i(a,l,c[b],h)&&T.isArray(c[b])&&(c[b]=function(S){var R,V,Q={},U=Object.keys(S),P=U.length;for(R=0;R<P;R++)Q[V=U[R]]=S[V];return Q}(c[b])),!v)}if(T.isFormData(r)&&T.isFunction(r.entries)){var u={};return T.forEachEntry(r,function(a,l){i(function(c){return T.matchAll(/\w+|\[(\w*)]/g,c).map(function(h){return h[0]==="[]"?"":h[1]||h[0]})}(a),l,u,0)}),u}return null};var zl={"Content-Type":void 0},na={transitional:ti,adapter:["xhr","http"],transformRequest:[function(r,i){var u,a=i.getContentType()||"",l=a.indexOf("application/json")>-1,c=T.isObject(r);if(c&&T.isHTMLForm(r)&&(r=new FormData(r)),T.isFormData(r))return l&&l?JSON.stringify(ni(r)):r;if(T.isArrayBuffer(r)||T.isBuffer(r)||T.isStream(r)||T.isFile(r)||T.isBlob(r))return r;if(T.isArrayBufferView(r))return r.buffer;if(T.isURLSearchParams(r))return i.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();if(c){if(a.indexOf("application/x-www-form-urlencoded")>-1)return function(b,v){return ta(b,new ht.classes.URLSearchParams,Object.assign({visitor:function(k,S,R,V){return ht.isNode&&T.isBuffer(k)?(this.append(S,k.toString("base64")),!1):V.defaultVisitor.apply(this,arguments)}},v))}(r,this.formSerializer).toString();if((u=T.isFileList(r))||a.indexOf("multipart/form-data")>-1){var h=this.env&&this.env.FormData;return ta(u?{"files[]":r}:r,h&&new h,this.formSerializer)}}return c||l?(i.setContentType("application/json",!1),function(b,v,k){if(T.isString(b))try{return(0,JSON.parse)(b),T.trim(b)}catch(S){if(S.name!=="SyntaxError")throw S}return(0,JSON.stringify)(b)}(r)):r}],transformResponse:[function(r){var i=this.transitional||na.transitional,u=i&&i.forcedJSONParsing,a=this.responseType==="json";if(r&&T.isString(r)&&(u&&!this.responseType||a)){var l=!(i&&i.silentJSONParsing)&&a;try{return JSON.parse(r)}catch(c){if(l)throw c.name==="SyntaxError"?ue.from(c,ue.ERR_BAD_RESPONSE,this,null,this.response):c}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ht.classes.FormData,Blob:ht.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};T.forEach(["delete","get","head"],function(r){na.headers[r]={}}),T.forEach(["post","put","patch"],function(r){na.headers[r]=T.merge(zl)});const Pa=na;var Ml=T.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);function pn(r){return pn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},pn(r)}function ai(r,i){(i==null||i>r.length)&&(i=r.length);for(var u=0,a=new Array(i);u<i;u++)a[u]=r[u];return a}function ri(r,i){for(var u=0;u<i.length;u++){var a=i[u];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,(l=function(c,h){if(pn(c)!=="object"||c===null)return c;var b=c[Symbol.toPrimitive];if(b!==void 0){var v=b.call(c,"string");if(pn(v)!=="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),pn(l)==="symbol"?l:String(l)),a)}var l}var ii=Symbol("internals");function un(r){return r&&String(r).trim().toLowerCase()}function aa(r){return r===!1||r==null?r:T.isArray(r)?r.map(aa):String(r)}function oi(r,i,u,a){return T.isFunction(a)?a.call(this,i,u):T.isString(i)?T.isString(a)?i.indexOf(a)!==-1:T.isRegExp(a)?a.test(i):void 0:void 0}var ra=function(r,i){function u(h){(function(b,v){if(!(b instanceof v))throw new TypeError("Cannot call a class as a function")})(this,u),h&&this.set(h)}var a,l,c;return a=u,l=[{key:"set",value:function(h,b,v){var k=this;function S(ae,Oe,ke){var he=un(Oe);if(!he)throw new Error("header name must be a non-empty string");var It=T.findKey(k,he);(!It||k[It]===void 0||ke===!0||ke===void 0&&k[It]!==!1)&&(k[It||Oe]=aa(ae))}var R,V,Q,U,P,X=function(ae,Oe){return T.forEach(ae,function(ke,he){return S(ke,he,Oe)})};return T.isPlainObject(h)||h instanceof this.constructor?X(h,b):T.isString(h)&&(h=h.trim())&&!/^[-_a-zA-Z]+$/.test(h.trim())?X((P={},(R=h)&&R.split(`
`).forEach(function(ae){U=ae.indexOf(":"),V=ae.substring(0,U).trim().toLowerCase(),Q=ae.substring(U+1).trim(),!V||P[V]&&Ml[V]||(V==="set-cookie"?P[V]?P[V].push(Q):P[V]=[Q]:P[V]=P[V]?P[V]+", "+Q:Q)}),P),b):h!=null&&S(b,h,v),this}},{key:"get",value:function(h,b){if(h=un(h)){var v=T.findKey(this,h);if(v){var k=this[v];if(!b)return k;if(b===!0)return function(S){for(var R,V=Object.create(null),Q=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;R=Q.exec(S);)V[R[1]]=R[2];return V}(k);if(T.isFunction(b))return b.call(this,k,v);if(T.isRegExp(b))return b.exec(k);throw new TypeError("parser must be boolean|regexp|function")}}}},{key:"has",value:function(h,b){if(h=un(h)){var v=T.findKey(this,h);return!(!v||b&&!oi(0,this[v],v,b))}return!1}},{key:"delete",value:function(h,b){var v=this,k=!1;function S(R){if(R=un(R)){var V=T.findKey(v,R);!V||b&&!oi(0,v[V],V,b)||(delete v[V],k=!0)}}return T.isArray(h)?h.forEach(S):S(h),k}},{key:"clear",value:function(){return Object.keys(this).forEach(this.delete.bind(this))}},{key:"normalize",value:function(h){var b=this,v={};return T.forEach(this,function(k,S){var R=T.findKey(v,S);if(R)return b[R]=aa(k),void delete b[S];var V=h?function(Q){return Q.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,function(U,P,X){return P.toUpperCase()+X})}(S):String(S).trim();V!==S&&delete b[S],b[V]=aa(k),v[V]=!0}),this}},{key:"concat",value:function(){for(var h,b=arguments.length,v=new Array(b),k=0;k<b;k++)v[k]=arguments[k];return(h=this.constructor).concat.apply(h,[this].concat(v))}},{key:"toJSON",value:function(h){var b=Object.create(null);return T.forEach(this,function(v,k){v!=null&&v!==!1&&(b[k]=h&&T.isArray(v)?v.join(", "):v)}),b}},{key:Symbol.iterator,value:function(){return Object.entries(this.toJSON())[Symbol.iterator]()}},{key:"toString",value:function(){return Object.entries(this.toJSON()).map(function(h){var b,v,k=(v=2,function(S){if(Array.isArray(S))return S}(b=h)||function(S,R){var V=S==null?null:typeof Symbol<"u"&&S[Symbol.iterator]||S["@@iterator"];if(V!=null){var Q,U,P,X,ae=[],Oe=!0,ke=!1;try{if(P=(V=V.call(S)).next,R===0){if(Object(V)!==V)return;Oe=!1}else for(;!(Oe=(Q=P.call(V)).done)&&(ae.push(Q.value),ae.length!==R);Oe=!0);}catch(he){ke=!0,U=he}finally{try{if(!Oe&&V.return!=null&&(X=V.return(),Object(X)!==X))return}finally{if(ke)throw U}}return ae}}(b,v)||function(S,R){if(S){if(typeof S=="string")return ai(S,R);var V=Object.prototype.toString.call(S).slice(8,-1);return V==="Object"&&S.constructor&&(V=S.constructor.name),V==="Map"||V==="Set"?Array.from(S):V==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(V)?ai(S,R):void 0}}(b,v)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}());return k[0]+": "+k[1]}).join(`
`)}},{key:Symbol.toStringTag,get:function(){return"AxiosHeaders"}}],c=[{key:"from",value:function(h){return h instanceof this?h:new this(h)}},{key:"concat",value:function(h){for(var b=new this(h),v=arguments.length,k=new Array(v>1?v-1:0),S=1;S<v;S++)k[S-1]=arguments[S];return k.forEach(function(R){return b.set(R)}),b}},{key:"accessor",value:function(h){var b=(this[ii]=this[ii]={accessors:{}}).accessors,v=this.prototype;function k(S){var R=un(S);b[R]||(function(V,Q){var U=T.toCamelCase(" "+Q);["get","set","has"].forEach(function(P){Object.defineProperty(V,P+U,{value:function(X,ae,Oe){return this[P].call(this,Q,X,ae,Oe)},configurable:!0})})}(v,S),b[R]=!0)}return T.isArray(h)?h.forEach(k):k(h),this}}],l&&ri(a.prototype,l),c&&ri(a,c),Object.defineProperty(a,"prototype",{writable:!1}),u}();ra.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),T.freezeMethods(ra.prototype),T.freezeMethods(ra);const gt=ra;function Va(r,i){var u=this||Pa,a=i||u,l=gt.from(a.headers),c=a.data;return T.forEach(r,function(h){c=h.call(u,c,l.normalize(),i?i.status:void 0)}),l.normalize(),c}function li(r){return!(!r||!r.__CANCEL__)}function si(r,i,u){ue.call(this,r??"canceled",ue.ERR_CANCELED,i,u),this.name="CanceledError"}T.inherits(si,ue,{__CANCEL__:!0});const ia=si,Ol=ht.isStandardBrowserEnv?{write:function(r,i,u,a,l,c){var h=[];h.push(r+"="+encodeURIComponent(i)),T.isNumber(u)&&h.push("expires="+new Date(u).toGMTString()),T.isString(a)&&h.push("path="+a),T.isString(l)&&h.push("domain="+l),c===!0&&h.push("secure"),document.cookie=h.join("; ")},read:function(r){var i=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function di(r,i){return r&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(i)?function(u,a){return a?u.replace(/\/+$/,"")+"/"+a.replace(/^\/+/,""):u}(r,i):i}const _l=ht.isStandardBrowserEnv?function(){var r,i=/(msie|trident)/i.test(navigator.userAgent),u=document.createElement("a");function a(l){var c=l;return i&&(u.setAttribute("href",c),c=u.href),u.setAttribute("href",c),{href:u.href,protocol:u.protocol?u.protocol.replace(/:$/,""):"",host:u.host,search:u.search?u.search.replace(/^\?/,""):"",hash:u.hash?u.hash.replace(/^#/,""):"",hostname:u.hostname,port:u.port,pathname:u.pathname.charAt(0)==="/"?u.pathname:"/"+u.pathname}}return r=a(window.location.href),function(l){var c=T.isString(l)?a(l):l;return c.protocol===r.protocol&&c.host===r.host}}():function(){return!0};function ci(r,i){var u=0,a=function(l,c){l=l||10;var h,b=new Array(l),v=new Array(l),k=0,S=0;return c=c!==void 0?c:1e3,function(R){var V=Date.now(),Q=v[S];h||(h=V),b[k]=R,v[k]=V;for(var U=S,P=0;U!==k;)P+=b[U++],U%=l;if((k=(k+1)%l)===S&&(S=(S+1)%l),!(V-h<c)){var X=Q&&V-Q;return X?Math.round(1e3*P/X):void 0}}}(50,250);return function(l){var c=l.loaded,h=l.lengthComputable?l.total:void 0,b=c-u,v=a(b);u=c;var k={loaded:c,total:h,progress:h?c/h:void 0,bytes:b,rate:v||void 0,estimated:v&&h&&c<=h?(h-c)/v:void 0,event:l};k[i?"download":"upload"]=!0,r(k)}}var $a={http:null,xhr:typeof XMLHttpRequest<"u"&&function(r){return new Promise(function(i,u){var a,l=r.data,c=gt.from(r.headers).normalize(),h=r.responseType;function b(){r.cancelToken&&r.cancelToken.unsubscribe(a),r.signal&&r.signal.removeEventListener("abort",a)}T.isFormData(l)&&(ht.isStandardBrowserEnv||ht.isStandardBrowserWebWorkerEnv)&&c.setContentType(!1);var v=new XMLHttpRequest;if(r.auth){var k=r.auth.username||"",S=r.auth.password?unescape(encodeURIComponent(r.auth.password)):"";c.set("Authorization","Basic "+btoa(k+":"+S))}var R=di(r.baseURL,r.url);function V(){if(v){var X=gt.from("getAllResponseHeaders"in v&&v.getAllResponseHeaders());(function(ae,Oe,ke){var he=ke.config.validateStatus;ke.status&&he&&!he(ke.status)?Oe(new ue("Request failed with status code "+ke.status,[ue.ERR_BAD_REQUEST,ue.ERR_BAD_RESPONSE][Math.floor(ke.status/100)-4],ke.config,ke.request,ke)):ae(ke)})(function(ae){i(ae),b()},function(ae){u(ae),b()},{data:h&&h!=="text"&&h!=="json"?v.response:v.responseText,status:v.status,statusText:v.statusText,headers:X,config:r,request:v}),v=null}}if(v.open(r.method.toUpperCase(),Jr(R,r.params,r.paramsSerializer),!0),v.timeout=r.timeout,"onloadend"in v?v.onloadend=V:v.onreadystatechange=function(){v&&v.readyState===4&&(v.status!==0||v.responseURL&&v.responseURL.indexOf("file:")===0)&&setTimeout(V)},v.onabort=function(){v&&(u(new ue("Request aborted",ue.ECONNABORTED,r,v)),v=null)},v.onerror=function(){u(new ue("Network Error",ue.ERR_NETWORK,r,v)),v=null},v.ontimeout=function(){var X=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded",ae=r.transitional||ti;r.timeoutErrorMessage&&(X=r.timeoutErrorMessage),u(new ue(X,ae.clarifyTimeoutError?ue.ETIMEDOUT:ue.ECONNABORTED,r,v)),v=null},ht.isStandardBrowserEnv){var Q=(r.withCredentials||_l(R))&&r.xsrfCookieName&&Ol.read(r.xsrfCookieName);Q&&c.set(r.xsrfHeaderName,Q)}l===void 0&&c.setContentType(null),"setRequestHeader"in v&&T.forEach(c.toJSON(),function(X,ae){v.setRequestHeader(ae,X)}),T.isUndefined(r.withCredentials)||(v.withCredentials=!!r.withCredentials),h&&h!=="json"&&(v.responseType=r.responseType),typeof r.onDownloadProgress=="function"&&v.addEventListener("progress",ci(r.onDownloadProgress,!0)),typeof r.onUploadProgress=="function"&&v.upload&&v.upload.addEventListener("progress",ci(r.onUploadProgress)),(r.cancelToken||r.signal)&&(a=function(X){v&&(u(!X||X.type?new ia(null,r,v):X),v.abort(),v=null)},r.cancelToken&&r.cancelToken.subscribe(a),r.signal&&(r.signal.aborted?a():r.signal.addEventListener("abort",a)));var U,P=(U=/^([-+\w]{1,25})(:?\/\/|:)/.exec(R))&&U[1]||"";P&&ht.protocols.indexOf(P)===-1?u(new ue("Unsupported protocol "+P+":",ue.ERR_BAD_REQUEST,r)):v.send(l||null)})}};T.forEach($a,function(r,i){if(r){try{Object.defineProperty(r,"name",{value:i})}catch{}Object.defineProperty(r,"adapterName",{value:i})}});function Ua(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new ia(null,r)}function pi(r){return Ua(r),r.headers=gt.from(r.headers),r.data=Va.call(r,r.transformRequest),["post","put","patch"].indexOf(r.method)!==-1&&r.headers.setContentType("application/x-www-form-urlencoded",!1),function(i){for(var u,a,l=(i=T.isArray(i)?i:[i]).length,c=0;c<l&&(u=i[c],!(a=T.isString(u)?$a[u.toLowerCase()]:u));c++);if(!a)throw a===!1?new ue("Adapter ".concat(u," is not supported by the environment"),"ERR_NOT_SUPPORT"):new Error(T.hasOwnProp($a,u)?"Adapter '".concat(u,"' is not available in the build"):"Unknown adapter '".concat(u,"'"));if(!T.isFunction(a))throw new TypeError("adapter is not a function");return a}(r.adapter||Pa.adapter)(r).then(function(i){return Ua(r),i.data=Va.call(r,r.transformResponse,i),i.headers=gt.from(i.headers),i},function(i){return li(i)||(Ua(r),i&&i.response&&(i.response.data=Va.call(r,r.transformResponse,i.response),i.response.headers=gt.from(i.response.headers))),Promise.reject(i)})}var ui=function(r){return r instanceof gt?r.toJSON():r};function Wt(r,i){i=i||{};var u={};function a(k,S,R){return T.isPlainObject(k)&&T.isPlainObject(S)?T.merge.call({caseless:R},k,S):T.isPlainObject(S)?T.merge({},S):T.isArray(S)?S.slice():S}function l(k,S,R){return T.isUndefined(S)?T.isUndefined(k)?void 0:a(void 0,k,R):a(k,S,R)}function c(k,S){if(!T.isUndefined(S))return a(void 0,S)}function h(k,S){return T.isUndefined(S)?T.isUndefined(k)?void 0:a(void 0,k):a(void 0,S)}function b(k,S,R){return R in i?a(k,S):R in r?a(void 0,k):void 0}var v={url:c,method:c,data:c,baseURL:h,transformRequest:h,transformResponse:h,paramsSerializer:h,timeout:h,timeoutMessage:h,withCredentials:h,adapter:h,responseType:h,xsrfCookieName:h,xsrfHeaderName:h,onUploadProgress:h,onDownloadProgress:h,decompress:h,maxContentLength:h,maxBodyLength:h,beforeRedirect:h,transport:h,httpAgent:h,httpsAgent:h,cancelToken:h,socketPath:h,responseEncoding:h,validateStatus:b,headers:function(k,S){return l(ui(k),ui(S),!0)}};return T.forEach(Object.keys(r).concat(Object.keys(i)),function(k){var S=v[k]||l,R=S(r[k],i[k],k);T.isUndefined(R)&&S!==b||(u[k]=R)}),u}function oa(r){return oa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},oa(r)}var ja={};["object","boolean","number","function","string","symbol"].forEach(function(r,i){ja[r]=function(u){return oa(u)===r||"a"+(i<1?"n ":" ")+r}});var hi={};ja.transitional=function(r,i,u){function a(l,c){return"[Axios v1.2.3] Transitional option '"+l+"'"+c+(u?". "+u:"")}return function(l,c,h){if(r===!1)throw new ue(a(c," has been removed"+(i?" in "+i:"")),ue.ERR_DEPRECATED);return i&&!hi[c]&&(hi[c]=!0,console.warn(a(c," has been deprecated since v"+i+" and will be removed in the near future"))),!r||r(l,c,h)}};const Wa={assertOptions:function(r,i,u){if(oa(r)!=="object")throw new ue("options must be an object",ue.ERR_BAD_OPTION_VALUE);for(var a=Object.keys(r),l=a.length;l-- >0;){var c=a[l],h=i[c];if(h){var b=r[c],v=b===void 0||h(b,c,r);if(v!==!0)throw new ue("option "+c+" must be "+v,ue.ERR_BAD_OPTION_VALUE)}else if(u!==!0)throw new ue("Unknown option "+c,ue.ERR_BAD_OPTION)}},validators:ja};function hn(r){return hn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},hn(r)}function Nl(r,i){for(var u=0;u<i.length;u++){var a=i[u];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,(l=function(c,h){if(hn(c)!=="object"||c===null)return c;var b=c[Symbol.toPrimitive];if(b!==void 0){var v=b.call(c,"string");if(hn(v)!=="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),hn(l)==="symbol"?l:String(l)),a)}var l}var Bt=Wa.validators,la=function(){function r(a){(function(l,c){if(!(l instanceof c))throw new TypeError("Cannot call a class as a function")})(this,r),this.defaults=a,this.interceptors={request:new ei,response:new ei}}var i,u;return i=r,(u=[{key:"request",value:function(a,l){typeof a=="string"?(l=l||{}).url=a:l=a||{};var c,h=l=Wt(this.defaults,l),b=h.transitional,v=h.paramsSerializer,k=h.headers;b!==void 0&&Wa.assertOptions(b,{silentJSONParsing:Bt.transitional(Bt.boolean),forcedJSONParsing:Bt.transitional(Bt.boolean),clarifyTimeoutError:Bt.transitional(Bt.boolean)},!1),v!==void 0&&Wa.assertOptions(v,{encode:Bt.function,serialize:Bt.function},!0),l.method=(l.method||this.defaults.method||"get").toLowerCase(),(c=k&&T.merge(k.common,k[l.method]))&&T.forEach(["delete","get","head","post","put","patch","common"],function(he){delete k[he]}),l.headers=gt.concat(c,k);var S=[],R=!0;this.interceptors.request.forEach(function(he){typeof he.runWhen=="function"&&he.runWhen(l)===!1||(R=R&&he.synchronous,S.unshift(he.fulfilled,he.rejected))});var V,Q=[];this.interceptors.response.forEach(function(he){Q.push(he.fulfilled,he.rejected)});var U,P=0;if(!R){var X=[pi.bind(this),void 0];for(X.unshift.apply(X,S),X.push.apply(X,Q),U=X.length,V=Promise.resolve(l);P<U;)V=V.then(X[P++],X[P++]);return V}U=S.length;var ae=l;for(P=0;P<U;){var Oe=S[P++],ke=S[P++];try{ae=Oe(ae)}catch(he){ke.call(this,he);break}}try{V=pi.call(this,ae)}catch(he){return Promise.reject(he)}for(P=0,U=Q.length;P<U;)V=V.then(Q[P++],Q[P++]);return V}},{key:"getUri",value:function(a){return Jr(di((a=Wt(this.defaults,a)).baseURL,a.url),a.params,a.paramsSerializer)}}])&&Nl(i.prototype,u),Object.defineProperty(i,"prototype",{writable:!1}),r}();T.forEach(["delete","get","head","options"],function(r){la.prototype[r]=function(i,u){return this.request(Wt(u||{},{method:r,url:i,data:(u||{}).data}))}}),T.forEach(["post","put","patch"],function(r){function i(u){return function(a,l,c){return this.request(Wt(c||{},{method:r,headers:u?{"Content-Type":"multipart/form-data"}:{},url:a,data:l}))}}la.prototype[r]=i(),la.prototype[r+"Form"]=i(!0)});const sa=la;function fn(r){return fn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},fn(r)}function fi(r,i){for(var u=0;u<i.length;u++){var a=i[u];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,(l=function(c,h){if(fn(c)!=="object"||c===null)return c;var b=c[Symbol.toPrimitive];if(b!==void 0){var v=b.call(c,"string");if(fn(v)!=="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),fn(l)==="symbol"?l:String(l)),a)}var l}var Fl=function(){function r(l){if(function(b,v){if(!(b instanceof v))throw new TypeError("Cannot call a class as a function")}(this,r),typeof l!="function")throw new TypeError("executor must be a function.");var c;this.promise=new Promise(function(b){c=b});var h=this;this.promise.then(function(b){if(h._listeners){for(var v=h._listeners.length;v-- >0;)h._listeners[v](b);h._listeners=null}}),this.promise.then=function(b){var v,k=new Promise(function(S){h.subscribe(S),v=S}).then(b);return k.cancel=function(){h.unsubscribe(v)},k},l(function(b,v,k){h.reason||(h.reason=new ia(b,v,k),c(h.reason))})}var i,u,a;return i=r,u=[{key:"throwIfRequested",value:function(){if(this.reason)throw this.reason}},{key:"subscribe",value:function(l){this.reason?l(this.reason):this._listeners?this._listeners.push(l):this._listeners=[l]}},{key:"unsubscribe",value:function(l){if(this._listeners){var c=this._listeners.indexOf(l);c!==-1&&this._listeners.splice(c,1)}}}],a=[{key:"source",value:function(){var l;return{token:new r(function(c){l=c}),cancel:l}}}],u&&fi(i.prototype,u),a&&fi(i,a),Object.defineProperty(i,"prototype",{writable:!1}),r}();const Rl=Fl;function mi(r,i){(i==null||i>r.length)&&(i=r.length);for(var u=0,a=new Array(i);u<i;u++)a[u]=r[u];return a}var Qa={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Qa).forEach(function(r){var i,u,a=(u=2,function(h){if(Array.isArray(h))return h}(i=r)||function(h,b){var v=h==null?null:typeof Symbol<"u"&&h[Symbol.iterator]||h["@@iterator"];if(v!=null){var k,S,R,V,Q=[],U=!0,P=!1;try{if(R=(v=v.call(h)).next,b===0){if(Object(v)!==v)return;U=!1}else for(;!(U=(k=R.call(v)).done)&&(Q.push(k.value),Q.length!==b);U=!0);}catch(X){P=!0,S=X}finally{try{if(!U&&v.return!=null&&(V=v.return(),Object(V)!==V))return}finally{if(P)throw S}}return Q}}(i,u)||function(h,b){if(h){if(typeof h=="string")return mi(h,b);var v=Object.prototype.toString.call(h).slice(8,-1);return v==="Object"&&h.constructor&&(v=h.constructor.name),v==="Map"||v==="Set"?Array.from(h):v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v)?mi(h,b):void 0}}(i,u)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),l=a[0],c=a[1];Qa[c]=l});const ql=Qa;var Me=function r(i){var u=new sa(i),a=pe(sa.prototype.request,u);return T.extend(a,sa.prototype,u,{allOwnKeys:!0}),T.extend(a,u,null,{allOwnKeys:!0}),a.create=function(l){return r(Wt(i,l))},a}(Pa);Me.Axios=sa,Me.CanceledError=ia,Me.CancelToken=Rl,Me.isCancel=li,Me.VERSION="1.2.3",Me.toFormData=ta,Me.AxiosError=ue,Me.Cancel=Me.CanceledError,Me.all=function(r){return Promise.all(r)},Me.spread=function(r){return function(i){return r.apply(null,i)}},Me.isAxiosError=function(r){return T.isObject(r)&&r.isAxiosError===!0},Me.mergeConfig=Wt,Me.AxiosHeaders=gt,Me.formToJSON=function(r){return ni(T.isHTMLForm(r)?new FormData(r):r)},Me.HttpStatusCode=ql,Me.default=Me;const yi=Me,Pl={send:function(r){yi.post(r.url,r.data).then(function(i){var u=i.data;u&&u.code===0?r.success&&r.success(u):r.error&&r.error(u&&u.msg)}).catch(function(i){console.error(i),r.error&&r.error()})},read:function(r){yi.get(r.url).then(function(i){var u=i.data;u&&u.code===0?r.success&&r.success(u.data.map(function(a){return{time:a[0],type:a[1],color:a[2],author:a[3],text:a[4]}})):r.error&&r.error(u&&u.msg)}).catch(function(i){console.error(i),r.error&&r.error()})}};function Ha(r){return Ha=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Ha(r)}function Vl(r){var i=this;this.lang=r,this.fallbackLang=this.lang.includes("-")?this.lang.split("-")[0]:this.lang,this.tran=function(u){return u=u.toLowerCase(),Qt[i.lang]&&Qt[i.lang][u]?Qt[i.lang][u]:Qt[i.fallbackLang]&&Qt[i.fallbackLang][u]?Qt[i.fallbackLang][u]:Ya[u]?Ya[u]:u}}var Ya={"danmaku-loading":"Danmaku is loading",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Input danmaku, hit Enter","about-author":"About author","dplayer-feedback":"DPlayer feedback","about-dplayer":"About DPlayer",loop:"Loop",speed:"Speed","opacity-danmaku":"Opacity for danmaku",normal:"Normal","please-input-danmaku":"Please input danmaku content!","set-danmaku-color":"Set danmaku color","set-danmaku-type":"Set danmaku type","show-danmaku":"Show danmaku","video-failed":"Video load failed","danmaku-failed":"Danmaku load failed","danmaku-send-failed":"Danmaku send failed","switching-quality":"Switching to %q quality","switched-quality":"Switched to %q quality",ff:"FF %s s",rew:"REW %s s","unlimited-danmaku":"Unlimited danmaku","send-danmaku":"Send danmaku",setting:"Setting",fullscreen:"Full screen","web-fullscreen":"Web full screen",send:"Send",screenshot:"Screenshot",airplay:"AirPlay",chromecast:"ChromeCast",subtitle:"Subtitle",off:"Off","show-subs":"Show subtitle","hide-subs":"Hide subtitle",volume:"Volume",live:"Live","video-info":"Video info"},Qt={en:Ya,"zh-cn":{"danmaku-loading":"弹幕加载中",top:"顶部",bottom:"底部",rolling:"滚动","input-danmaku-enter":"输入弹幕，回车发送","about-author":"关于作者","dplayer-feedback":"播放器意见反馈","about-dplayer":"关于 DPlayer 播放器",loop:"洗脑循环",speed:"速度","opacity-danmaku":"弹幕透明度",normal:"正常","please-input-danmaku":"要输入弹幕内容啊喂！","set-danmaku-color":"设置弹幕颜色","set-danmaku-type":"设置弹幕类型","show-danmaku":"显示弹幕","video-failed":"视频加载失败","danmaku-failed":"弹幕加载失败","danmaku-send-failed":"弹幕发送失败","switching-quality":"正在切换至 %q 画质","switched-quality":"已经切换至 %q 画质",ff:"快进 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"海量弹幕","send-danmaku":"发送弹幕",setting:"设置",fullscreen:"全屏","web-fullscreen":"页面全屏",send:"发送",screenshot:"截图",airplay:"无线投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"关闭","show-subs":"显示字幕","hide-subs":"隐藏字幕",volume:"音量",live:"直播","video-info":"视频统计信息"},"zh-tw":{"danmaku-loading":"彈幕載入中",top:"頂部",bottom:"底部",rolling:"滾動","input-danmaku-enter":"輸入彈幕，Enter 發送","about-author":"關於作者","dplayer-feedback":"播放器意見回饋","about-dplayer":"關於 DPlayer 播放器",loop:"循環播放",speed:"速度","opacity-danmaku":"彈幕透明度",normal:"正常","please-input-danmaku":"請輸入彈幕內容啊！","set-danmaku-color":"設定彈幕顏色","set-danmaku-type":"設定彈幕類型","show-danmaku":"顯示彈幕","video-failed":"影片載入失敗","danmaku-failed":"彈幕載入失敗","danmaku-send-failed":"彈幕發送失敗","switching-quality":"正在切換至 %q 畫質","switched-quality":"已經切換至 %q 畫質",ff:"快進 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"巨量彈幕","send-danmaku":"發送彈幕",setting:"設定",fullscreen:"全螢幕","web-fullscreen":"頁面全螢幕",send:"發送",screenshot:"截圖",airplay:"無線投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"關閉","show-subs":"顯示字幕","hide-subs":"隱藏字幕",volume:"音量",live:"直播","video-info":"影片統計訊息"},"ko-kr":{"danmaku-loading":"Danmaku를 불러오는 중입니다.",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Danmaku를 입력하고 Enter를 누르세요.","about-author":"만든이","dplayer-feedback":"피드백 보내기","about-dplayer":"DPlayer 정보",loop:"반복",speed:"배속","opacity-danmaku":"Danmaku 불투명도",normal:"표준","please-input-danmaku":"Danmaku를 입력하세요!","set-danmaku-color":"Danmaku 색상","set-danmaku-type":"Danmaku 설정","show-danmaku":"Danmaku 표시","video-failed":"비디오를 불러오지 못했습니다.","danmaku-failed":"Danmaku를 불러오지 못했습니다.","danmaku-send-failed":"Danmaku 전송에 실패했습니다.","Switching to":"","Switched to":"","switching-quality":"전환 %q 화질","switched-quality":"전환 됨 %q 화질",ff:"앞으로 %s 초",rew:"뒤로 %s 초","unlimited-danmaku":"끝없는 Danmaku","send-danmaku":"Danmaku 보내기",setting:"설정",fullscreen:"전체 화면","web-fullscreen":"웹 내 전체화면",send:"보내기",screenshot:"화면 캡쳐",airplay:"에어플레이",chromecast:"ChromeCast",subtitle:"부제",off:"끄다","show-subs":"자막 보이기","hide-subs":"자막 숨기기",Volume:"볼륨",live:"생방송","video-info":"비디오 정보"},de:{"danmaku-loading":"Danmaku lädt...",top:"Oben",bottom:"Unten",rolling:"Rollend","input-danmaku-enter":"Drücke Enter nach dem Einfügen vom Danmaku","about-author":"Über den Autor","dplayer-feedback":"DPlayer Feedback","about-dplayer":"Über DPlayer",loop:"Wiederholen",speed:"Geschwindigkeit","opacity-danmaku":"Transparenz für Danmaku",normal:"Normal","please-input-danmaku":"Bitte Danmaku Inhalt eingeben!","set-danmaku-color":"Danmaku Farbe festlegen","set-danmaku-type":"Danmaku Typ festlegen","show-danmaku":"Zeige Danmaku","video-failed":"Das Video konnte nicht geladen werden","danmaku-failed":"Danmaku konnte nicht geladen werden","danmaku-send-failed":"Das senden von Danmaku ist fehgeschlagen","switching-quality":"Wechsle zur %q Qualität","switched-quality":"Zur %q Qualität gewechselt",ff:"%s s Vorwärts",rew:"%s s Zurück","unlimited-danmaku":"Unlimitiertes Danmaku","send-danmaku":"Sende Danmaku",setting:"Einstellungen",fullscreen:"Vollbild","web-fullscreen":"Browser Vollbild",send:"Senden",screenshot:"Screenshot",airplay:"AirPlay","show-subs":"Zeige Untertitel",chromecast:"ChromeCast",subtitle:"Untertitel",off:"Schließung","hide-subs":"Verstecke Untertitel",volume:"Lautstärke",live:"Live","video-info":"Video Info"}},$l=s(730),Ul=s.n($l),jl=s(74),Wl=s.n(jl),Ql=s(437),Hl=s.n(Ql),Yl=s(644),Kl=s.n(Yl),Xl=s(324),Gl=s.n(Xl),Zl=s(574),Jl=s.n(Zl),es=s(300),ts=s.n(es),ns=s(934),as=s.n(ns),rs=s(428),is=s.n(rs),os=s(807),ls=s.n(os),ss=s(338),ds=s.n(ss),cs=s(254),ps=s.n(cs),us=s(965),hs=s.n(us),fs=s(113),ms=s.n(fs),ys=s(251),As=s.n(ys),gs=s(410),bs=s.n(gs),vs=s(182),ws=s.n(vs),xs=s(193),Es=s.n(xs);const rt={play:Ul(),pause:Wl(),volumeUp:Hl(),volumeDown:Kl(),volumeOff:Gl(),full:Jl(),fullWeb:ts(),setting:as(),right:is(),comment:ls(),commentOff:ds(),send:ps(),pallette:hs(),camera:ms(),subtitle:bs(),loading:ws(),airplay:As(),chromecast:Es()};var Cs=s(916),ks=s.n(Cs);function mn(r){return mn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},mn(r)}function Ai(r,i){for(var u=0;u<i.length;u++){var a=i[u];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,(l=function(c,h){if(mn(c)!=="object"||c===null)return c;var b=c[Symbol.toPrimitive];if(b!==void 0){var v=b.call(c,"string");if(mn(v)!=="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),mn(l)==="symbol"?l:String(l)),a)}var l}var Bs=function(){function r(l){(function(c,h){if(!(c instanceof h))throw new TypeError("Cannot call a class as a function")})(this,r),this.container=l.container,this.options=l.options,this.index=l.index,this.tran=l.tran,this.init()}var i,u,a;return i=r,a=[{key:"NewNotice",value:function(l,c,h){var b=document.createElement("div");return b.classList.add("dplayer-notice"),b.style.opacity=c,b.innerText=l,h&&(b.id="dplayer-notice-".concat(h)),b}}],(u=[{key:"init",value:function(){this.container.innerHTML=ks()({options:this.options,index:this.index,tran:this.tran,icons:rt,mobile:O.isMobile,video:{current:!0,pic:this.options.video.pic,screenshot:this.options.screenshot,airplay:!(!O.isSafari||O.isChrome)&&this.options.airplay,chromecast:this.options.chromecast,preload:this.options.preload,url:this.options.video.url,subtitle:this.options.subtitle}}),this.volumeBar=this.container.querySelector(".dplayer-volume-bar-inner"),this.volumeBarWrap=this.container.querySelector(".dplayer-volume-bar"),this.volumeBarWrapWrap=this.container.querySelector(".dplayer-volume-bar-wrap"),this.volumeButton=this.container.querySelector(".dplayer-volume"),this.volumeButtonIcon=this.container.querySelector(".dplayer-volume-icon"),this.volumeIcon=this.container.querySelector(".dplayer-volume-icon .dplayer-icon-content"),this.playedBar=this.container.querySelector(".dplayer-played"),this.loadedBar=this.container.querySelector(".dplayer-loaded"),this.playedBarWrap=this.container.querySelector(".dplayer-bar-wrap"),this.playedBarTime=this.container.querySelector(".dplayer-bar-time"),this.danmaku=this.container.querySelector(".dplayer-danmaku"),this.danmakuLoading=this.container.querySelector(".dplayer-danloading"),this.video=this.container.querySelector(".dplayer-video-current"),this.bezel=this.container.querySelector(".dplayer-bezel-icon"),this.playButton=this.container.querySelector(".dplayer-play-icon"),this.mobilePlayButton=this.container.querySelector(".dplayer-mobile-play"),this.videoWrap=this.container.querySelector(".dplayer-video-wrap"),this.controllerMask=this.container.querySelector(".dplayer-controller-mask"),this.ptime=this.container.querySelector(".dplayer-ptime"),this.settingButton=this.container.querySelector(".dplayer-setting-icon"),this.settingBox=this.container.querySelector(".dplayer-setting-box"),this.mask=this.container.querySelector(".dplayer-mask"),this.loop=this.container.querySelector(".dplayer-setting-loop"),this.loopToggle=this.container.querySelector(".dplayer-setting-loop .dplayer-toggle-setting-input"),this.showDanmaku=this.container.querySelector(".dplayer-setting-showdan"),this.showDanmakuToggle=this.container.querySelector(".dplayer-showdan-setting-input"),this.unlimitDanmaku=this.container.querySelector(".dplayer-setting-danunlimit"),this.unlimitDanmakuToggle=this.container.querySelector(".dplayer-danunlimit-setting-input"),this.speed=this.container.querySelector(".dplayer-setting-speed"),this.speedItem=this.container.querySelectorAll(".dplayer-setting-speed-item"),this.danmakuOpacityBar=this.container.querySelector(".dplayer-danmaku-bar-inner"),this.danmakuOpacityBarWrap=this.container.querySelector(".dplayer-danmaku-bar"),this.danmakuOpacityBarWrapWrap=this.container.querySelector(".dplayer-danmaku-bar-wrap"),this.danmakuOpacityBox=this.container.querySelector(".dplayer-setting-danmaku"),this.dtime=this.container.querySelector(".dplayer-dtime"),this.controller=this.container.querySelector(".dplayer-controller"),this.commentInput=this.container.querySelector(".dplayer-comment-input"),this.commentButton=this.container.querySelector(".dplayer-comment-icon"),this.commentSettingBox=this.container.querySelector(".dplayer-comment-setting-box"),this.commentSettingButton=this.container.querySelector(".dplayer-comment-setting-icon"),this.commentSettingFill=this.container.querySelector(".dplayer-comment-setting-icon path"),this.commentSendButton=this.container.querySelector(".dplayer-send-icon"),this.commentSendFill=this.container.querySelector(".dplayer-send-icon path"),this.commentColorSettingBox=this.container.querySelector(".dplayer-comment-setting-color"),this.browserFullButton=this.container.querySelector(".dplayer-full-icon"),this.webFullButton=this.container.querySelector(".dplayer-full-in-icon"),this.menu=this.container.querySelector(".dplayer-menu"),this.menuItem=this.container.querySelectorAll(".dplayer-menu-item"),this.qualityList=this.container.querySelector(".dplayer-quality-list"),this.camareButton=this.container.querySelector(".dplayer-camera-icon"),this.airplayButton=this.container.querySelector(".dplayer-airplay-icon"),this.chromecastButton=this.container.querySelector(".dplayer-chromecast-icon"),this.subtitleButton=this.container.querySelector(".dplayer-subtitle-icon"),this.subtitleButtonInner=this.container.querySelector(".dplayer-subtitle-icon .dplayer-icon-content"),this.subtitlesButton=this.container.querySelector(".dplayer-subtitles-icon"),this.subtitlesBox=this.container.querySelector(".dplayer-subtitles-box"),this.subtitlesItem=this.container.querySelectorAll(".dplayer-subtitles-item"),this.subtitle=this.container.querySelector(".dplayer-subtitle"),this.subtrack=this.container.querySelector(".dplayer-subtrack"),this.qualityButton=this.container.querySelector(".dplayer-quality-icon"),this.barPreview=this.container.querySelector(".dplayer-bar-preview"),this.barWrap=this.container.querySelector(".dplayer-bar-wrap"),this.noticeList=this.container.querySelector(".dplayer-notice-list"),this.infoPanel=this.container.querySelector(".dplayer-info-panel"),this.infoPanelClose=this.container.querySelector(".dplayer-info-panel-close"),this.infoVersion=this.container.querySelector(".dplayer-info-panel-item-version .dplayer-info-panel-item-data"),this.infoFPS=this.container.querySelector(".dplayer-info-panel-item-fps .dplayer-info-panel-item-data"),this.infoType=this.container.querySelector(".dplayer-info-panel-item-type .dplayer-info-panel-item-data"),this.infoUrl=this.container.querySelector(".dplayer-info-panel-item-url .dplayer-info-panel-item-data"),this.infoResolution=this.container.querySelector(".dplayer-info-panel-item-resolution .dplayer-info-panel-item-data"),this.infoDuration=this.container.querySelector(".dplayer-info-panel-item-duration .dplayer-info-panel-item-data"),this.infoDanmakuId=this.container.querySelector(".dplayer-info-panel-item-danmaku-id .dplayer-info-panel-item-data"),this.infoDanmakuApi=this.container.querySelector(".dplayer-info-panel-item-danmaku-api .dplayer-info-panel-item-data"),this.infoDanmakuAmount=this.container.querySelector(".dplayer-info-panel-item-danmaku-amount .dplayer-info-panel-item-data")}}])&&Ai(i.prototype,u),a&&Ai(i,a),Object.defineProperty(i,"prototype",{writable:!1}),r}();const gi=Bs;function Ht(r){return Ht=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Ht(r)}function Ss(r,i){for(var u=0;u<i.length;u++){var a=i[u];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,(l=function(c,h){if(Ht(c)!=="object"||c===null)return c;var b=c[Symbol.toPrimitive];if(b!==void 0){var v=b.call(c,"string");if(Ht(v)!=="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),Ht(l)==="symbol"?l:String(l)),a)}var l}var Is=function(){function r(a){(function(l,c){if(!(l instanceof c))throw new TypeError("Cannot call a class as a function")})(this,r),this.options=a,this.player=this.options.player,this.container=this.options.container,this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.dan=[],this.showing=!0,this._opacity=this.options.opacity,this.events=this.options.events,this.unlimited=this.options.unlimited,this._measure(""),this.load()}var i,u;return i=r,u=[{key:"load",value:function(){var a,l=this;a=this.options.api.maximum?"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id,"&max=").concat(this.options.api.maximum):"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id);var c=(this.options.api.addition||[]).slice(0);c.push(a),this.events&&this.events.trigger("danmaku_load_start",c),this._readAllEndpoints(c,function(h){l.dan=[].concat.apply([],h).sort(function(b,v){return b.time-v.time}),window.requestAnimationFrame(function(){l.frame()}),l.options.callback(),l.events&&l.events.trigger("danmaku_load_end")})}},{key:"reload",value:function(a){this.options.api=a,this.dan=[],this.clear(),this.load()}},{key:"_readAllEndpoints",value:function(a,l){for(var c=this,h=[],b=0,v=function(S){c.options.apiBackend.read({url:a[S],success:function(R){h[S]=R,++b===a.length&&l(h)},error:function(R){c.options.error(R||c.options.tran("danmaku-failed")),h[S]=[],++b===a.length&&l(h)}})},k=0;k<a.length;++k)v(k)}},{key:"send",value:function(a,l){var c=this,h={token:this.options.api.token,id:this.options.api.id,author:this.options.api.user,time:this.options.time(),text:a.text,color:a.color,type:a.type};this.options.apiBackend.send({url:this.options.api.address+"v3/",data:h,success:l,error:function(v){c.options.error(v||c.options.tran("danmaku-failed"))}}),this.dan.splice(this.danIndex,0,h),this.danIndex++;var b={text:this.htmlEncode(h.text),color:h.color,type:h.type,border:"2px solid ".concat(this.options.borderColor)};this.draw(b),this.events&&this.events.trigger("danmaku_send",h)}},{key:"frame",value:function(){var a=this;if(this.dan.length&&!this.paused&&this.showing){for(var l=this.dan[this.danIndex],c=[];l&&this.options.time()>parseFloat(l.time);)c.push(l),l=this.dan[++this.danIndex];this.draw(c)}window.requestAnimationFrame(function(){a.frame()})}},{key:"opacity",value:function(a){if(a!==void 0){for(var l=this.container.getElementsByClassName("dplayer-danmaku-item"),c=0;c<l.length;c++)l[c].style.opacity=a;this._opacity=a,this.events&&this.events.trigger("danmaku_opacity",this._opacity)}return this._opacity}},{key:"draw",value:function(a){var l=this;if(this.showing){var c=this.options.height,h=this.container.offsetWidth,b=this.container.offsetHeight,v=parseInt(b/c),k=function(P){var X=P.offsetWidth||parseInt(P.style.width),ae=P.getBoundingClientRect().right||l.container.getBoundingClientRect().right+X;return l.container.getBoundingClientRect().right-ae},S=function(P){return(h+P)/5},R=function(P,X,ae){for(var Oe=h/S(ae),ke=function(Nt){var Kt=l.danTunnel[X][Nt+""];if(!Kt||!Kt.length)return l.danTunnel[X][Nt+""]=[P],P.addEventListener("animationend",function(){l.danTunnel[X][Nt+""].splice(0,1)}),{v:Nt%v};if(X!=="right")return"continue";for(var zn=0;zn<Kt.length;zn++){var Ci=k(Kt[zn])-10;if(Ci<=h-Oe*S(parseInt(Kt[zn].style.width))||Ci<=0)break;if(zn===Kt.length-1)return l.danTunnel[X][Nt+""].push(P),P.addEventListener("animationend",function(){l.danTunnel[X][Nt+""].splice(0,1)}),{v:Nt%v}}},he=0;l.unlimited||he<v;he++){var It=ke(he);if(It!=="continue"&&Ht(It)==="object")return It.v}return-1};Object.prototype.toString.call(a)!=="[object Array]"&&(a=[a]);for(var V=document.createDocumentFragment(),Q=function(){a[U].type=O.number2Type(a[U].type),a[U].color||(a[U].color=16777215);var P=document.createElement("div");P.classList.add("dplayer-danmaku-item"),P.classList.add("dplayer-danmaku-".concat(a[U].type)),a[U].border?P.innerHTML='<span style="border:'.concat(a[U].border,'">').concat(a[U].text,"</span>"):P.innerHTML=a[U].text,P.style.opacity=l._opacity,P.style.color=O.number2Color(a[U].color),P.addEventListener("animationend",function(){l.container.removeChild(P)});var X,ae=l._measure(a[U].text);switch(a[U].type){case"right":(X=R(P,a[U].type,ae))>=0&&(P.style.width=ae+1+"px",P.style.top=c*X+"px",P.style.transform="translateX(-".concat(h,"px)"));break;case"top":(X=R(P,a[U].type))>=0&&(P.style.top=c*X+"px");break;case"bottom":(X=R(P,a[U].type))>=0&&(P.style.bottom=c*X+"px");break;default:console.error("Can't handled danmaku type: ".concat(a[U].type))}X>=0&&(P.classList.add("dplayer-danmaku-move"),P.style.animationDuration=l._danAnimation(a[U].type),V.appendChild(P))},U=0;U<a.length;U++)Q();return this.container.appendChild(V),V}}},{key:"play",value:function(){this.paused=!1}},{key:"pause",value:function(){this.paused=!0}},{key:"_measure",value:function(a){if(!this.context){var l=getComputedStyle(this.container.getElementsByClassName("dplayer-danmaku-item")[0],null);this.context=document.createElement("canvas").getContext("2d"),this.context.font=l.getPropertyValue("font")}return this.context.measureText(a).width}},{key:"seek",value:function(){this.clear();for(var a=0;a<this.dan.length;a++){if(this.dan[a].time>=this.options.time()){this.danIndex=a;break}this.danIndex=this.dan.length}}},{key:"clear",value:function(){this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.options.container.innerHTML="",this.events&&this.events.trigger("danmaku_clear")}},{key:"htmlEncode",value:function(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2f;")}},{key:"resize",value:function(){for(var a=this.container.offsetWidth,l=this.container.getElementsByClassName("dplayer-danmaku-item"),c=0;c<l.length;c++)l[c].style.transform="translateX(-".concat(a,"px)")}},{key:"hide",value:function(){this.showing=!1,this.pause(),this.clear(),this.events&&this.events.trigger("danmaku_hide")}},{key:"show",value:function(){this.seek(),this.showing=!0,this.play(),this.events&&this.events.trigger("danmaku_show")}},{key:"unlimit",value:function(a){this.unlimited=a}},{key:"speed",value:function(a){this.options.api.speedRate=a}},{key:"_danAnimation",value:function(a){var l=this.options.api.speedRate||1,c=!!this.player.fullScreen.isFullScreen();return{top:"".concat((c?6:4)/l,"s"),right:"".concat((c?8:5)/l,"s"),bottom:"".concat((c?6:4)/l,"s")}[a]}}],u&&Ss(i.prototype,u),Object.defineProperty(i,"prototype",{writable:!1}),r}();const Ts=Is;function yn(r){return yn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},yn(r)}function Ls(r,i){for(var u=0;u<i.length;u++){var a=i[u];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,(l=function(c,h){if(yn(c)!=="object"||c===null)return c;var b=c[Symbol.toPrimitive];if(b!==void 0){var v=b.call(c,"string");if(yn(v)!=="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),yn(l)==="symbol"?l:String(l)),a)}var l}const Ds=function(){function r(){(function(a,l){if(!(a instanceof l))throw new TypeError("Cannot call a class as a function")})(this,r),this.events={},this.videoEvents=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","mozaudioavailable","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],this.playerEvents=["screenshot","thumbnails_show","thumbnails_hide","danmaku_show","danmaku_hide","danmaku_clear","danmaku_loaded","danmaku_send","danmaku_opacity","contextmenu_show","contextmenu_hide","notice_show","notice_hide","quality_start","quality_end","destroy","resize","fullscreen","fullscreen_cancel","webfullscreen","webfullscreen_cancel","subtitle_show","subtitle_hide","subtitle_change"]}var i,u;return i=r,(u=[{key:"on",value:function(a,l){this.type(a)&&typeof l=="function"&&(this.events[a]||(this.events[a]=[]),this.events[a].push(l))}},{key:"trigger",value:function(a,l){if(this.events[a]&&this.events[a].length)for(var c=0;c<this.events[a].length;c++)this.events[a][c](l)}},{key:"type",value:function(a){return this.playerEvents.indexOf(a)!==-1?"player":this.videoEvents.indexOf(a)!==-1?"video":(console.error("Unknown event name: ".concat(a)),null)}}])&&Ls(i.prototype,u),Object.defineProperty(i,"prototype",{writable:!1}),r}();function An(r){return An=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},An(r)}function zs(r,i){for(var u=0;u<i.length;u++){var a=i[u];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,(l=function(c,h){if(An(c)!=="object"||c===null)return c;var b=c[Symbol.toPrimitive];if(b!==void 0){var v=b.call(c,"string");if(An(v)!=="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),An(l)==="symbol"?l:String(l)),a)}var l}var Ms=function(){function r(a){var l=this;(function(c,h){if(!(c instanceof h))throw new TypeError("Cannot call a class as a function")})(this,r),this.player=a,this.lastScrollPosition={left:0,top:0},this.player.events.on("webfullscreen",function(){l.player.resize()}),this.player.events.on("webfullscreen_cancel",function(){l.player.resize(),O.setScrollPosition(l.lastScrollPosition)}),this.fullscreenchange=function(){l.player.resize(),l.isFullScreen("browser")?l.player.events.trigger("fullscreen"):(O.setScrollPosition(l.lastScrollPosition),l.player.events.trigger("fullscreen_cancel"))},this.docfullscreenchange=function(){var c=document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;c&&c!==l.player.container||(l.player.resize(),c?l.player.events.trigger("fullscreen"):(O.setScrollPosition(l.lastScrollPosition),l.player.events.trigger("fullscreen_cancel")))},/Firefox/.test(navigator.userAgent)?(document.addEventListener("mozfullscreenchange",this.docfullscreenchange),document.addEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.addEventListener("fullscreenchange",this.fullscreenchange),this.player.container.addEventListener("webkitfullscreenchange",this.fullscreenchange),document.addEventListener("msfullscreenchange",this.docfullscreenchange),document.addEventListener("MSFullscreenChange",this.docfullscreenchange))}var i,u;return i=r,u=[{key:"isFullScreen",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(a){case"browser":return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;case"web":return this.player.container.classList.contains("dplayer-fulled")}}},{key:"request",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser",l=a==="browser"?"web":"browser",c=this.isFullScreen(l);switch(c||(this.lastScrollPosition=O.getScrollPosition()),a){case"browser":this.player.container.requestFullscreen?this.player.container.requestFullscreen():this.player.container.mozRequestFullScreen?this.player.container.mozRequestFullScreen():this.player.container.webkitRequestFullscreen?this.player.container.webkitRequestFullscreen():this.player.video.webkitEnterFullscreen?this.player.video.webkitEnterFullscreen():this.player.video.webkitEnterFullScreen?this.player.video.webkitEnterFullScreen():this.player.container.msRequestFullscreen&&this.player.container.msRequestFullscreen();break;case"web":this.player.container.classList.add("dplayer-fulled"),document.body.classList.add("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen")}c&&this.cancel(l)}},{key:"cancel",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(a){case"browser":document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.webkitCancelFullscreen?document.webkitCancelFullscreen():document.msCancelFullScreen?document.msCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen();break;case"web":this.player.container.classList.remove("dplayer-fulled"),document.body.classList.remove("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen_cancel")}}},{key:"toggle",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";this.isFullScreen(a)?this.cancel(a):this.request(a)}},{key:"destroy",value:function(){/Firefox/.test(navigator.userAgent)?(document.removeEventListener("mozfullscreenchange",this.docfullscreenchange),document.removeEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.removeEventListener("fullscreenchange",this.fullscreenchange),this.player.container.removeEventListener("webkitfullscreenchange",this.fullscreenchange),document.removeEventListener("msfullscreenchange",this.docfullscreenchange),document.removeEventListener("MSFullscreenChange",this.docfullscreenchange))}}],u&&zs(i.prototype,u),Object.defineProperty(i,"prototype",{writable:!1}),r}();const Os=Ms;function gn(r){return gn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},gn(r)}function _s(r,i){for(var u=0;u<i.length;u++){var a=i[u];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,(l=function(c,h){if(gn(c)!=="object"||c===null)return c;var b=c[Symbol.toPrimitive];if(b!==void 0){var v=b.call(c,"string");if(gn(v)!=="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),gn(l)==="symbol"?l:String(l)),a)}var l}var Ns=function(){function r(a){(function(l,c){if(!(l instanceof c))throw new TypeError("Cannot call a class as a function")})(this,r),this.storageName={opacity:"dplayer-danmaku-opacity",volume:"dplayer-volume",unlimited:"dplayer-danmaku-unlimited",danmaku:"dplayer-danmaku-show",subtitle:"dplayer-subtitle-show"},this.default={opacity:.7,volume:a.options.hasOwnProperty("volume")?a.options.volume:.7,unlimited:(a.options.danmaku&&a.options.danmaku.unlimited?1:0)||0,danmaku:1,subtitle:1},this.data={},this.init()}var i,u;return i=r,(u=[{key:"init",value:function(){for(var a in this.storageName){var l=this.storageName[a];this.data[a]=parseFloat(O.storage.get(l)||this.default[a])}}},{key:"get",value:function(a){return this.data[a]}},{key:"set",value:function(a,l){this.data[a]=l,O.storage.set(this.storageName[a],l)}}])&&_s(i.prototype,u),Object.defineProperty(i,"prototype",{writable:!1}),r}();const Fs=Ns;function bn(r){return bn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},bn(r)}function Rs(r,i){for(var u=0;u<i.length;u++){var a=i[u];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,(l=function(c,h){if(bn(c)!=="object"||c===null)return c;var b=c[Symbol.toPrimitive];if(b!==void 0){var v=b.call(c,"string");if(bn(v)!=="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),bn(l)==="symbol"?l:String(l)),a)}var l}var qs=function(){function r(a,l,c,h){(function(b,v){if(!(b instanceof v))throw new TypeError("Cannot call a class as a function")})(this,r),this.container=a,this.video=l,this.options=c,this.events=h,this.init()}var i,u;return i=r,u=[{key:"init",value:function(){var a=this;if(this.container.style.fontSize=this.options.fontSize,this.container.style.bottom=this.options.bottom,this.container.style.color=this.options.color,this.video.textTracks&&this.video.textTracks[0]){var l=this.video.textTracks[0];l.oncuechange=function(){var c=l.activeCues[l.activeCues.length-1];if(a.container.innerHTML="",c){var h=document.createElement("div");h.appendChild(c.getCueAsHTML());var b=h.innerHTML.split(/\r?\n/).map(function(v){return"<p>".concat(v,"</p>")}).join("");a.container.innerHTML=b}a.events.trigger("subtitle_change")}}}},{key:"show",value:function(){this.container.classList.remove("dplayer-subtitle-hide"),this.events.trigger("subtitle_show")}},{key:"hide",value:function(){this.container.classList.add("dplayer-subtitle-hide"),this.events.trigger("subtitle_hide")}},{key:"toggle",value:function(){this.container.classList.contains("dplayer-subtitle-hide")?this.show():this.hide()}}],u&&Rs(i.prototype,u),Object.defineProperty(i,"prototype",{writable:!1}),r}();const Ps=qs;function vn(r){return vn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},vn(r)}function Vs(r,i){for(var u=0;u<i.length;u++){var a=i[u];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,(l=function(c,h){if(vn(c)!=="object"||c===null)return c;var b=c[Symbol.toPrimitive];if(b!==void 0){var v=b.call(c,"string");if(vn(v)!=="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),vn(l)==="symbol"?l:String(l)),a)}var l}var $s=function(){function r(a){var l=this;(function(v,k){if(!(v instanceof k))throw new TypeError("Cannot call a class as a function")})(this,r),this.player=a,this.player.template.mask.addEventListener("click",function(){l.hide()}),this.player.template.subtitlesButton.addEventListener("click",function(){l.adaptiveHeight(),l.show()});for(var c=this.player.template.subtitlesItem.length-1,h=function(v){l.player.template.subtitlesItem[v].addEventListener("click",function(){l.hide(),l.player.options.subtitle.index!==v&&(l.player.template.subtitle.innerHTML="<p></p>",l.player.template.subtrack.src=l.player.template.subtitlesItem[v].dataset.subtitle,l.player.options.subtitle.index=v,l.player.template.subtitle.classList.contains("dplayer-subtitle-hide")&&l.subContainerShow())})},b=0;b<c;b++)h(b);this.player.template.subtitlesItem[c].addEventListener("click",function(){l.hide(),l.player.options.subtitle.index!==c&&(l.player.template.subtitle.innerHTML="<p></p>",l.player.template.subtrack.src="",l.player.options.subtitle.index=c,l.subContainerHide())})}var i,u;return i=r,(u=[{key:"subContainerShow",value:function(){this.player.template.subtitle.classList.remove("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_show")}},{key:"subContainerHide",value:function(){this.player.template.subtitle.classList.add("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_hide")}},{key:"hide",value:function(){this.player.template.subtitlesBox.classList.remove("dplayer-subtitles-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.subtitlesBox.classList.add("dplayer-subtitles-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}},{key:"adaptiveHeight",value:function(){var a=30*this.player.template.subtitlesItem.length+14,l=.8*this.player.template.videoWrap.offsetHeight;a>=l-50?(this.player.template.subtitlesBox.style.bottom="8px",this.player.template.subtitlesBox.style["max-height"]=l-8+"px"):(this.player.template.subtitlesBox.style.bottom="50px",this.player.template.subtitlesBox.style["max-height"]=l-50+"px")}}])&&Vs(i.prototype,u),Object.defineProperty(i,"prototype",{writable:!1}),r}();const Us=$s;function wn(r){return wn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},wn(r)}function js(r,i){for(var u=0;u<i.length;u++){var a=i[u];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,(l=function(c,h){if(wn(c)!=="object"||c===null)return c;var b=c[Symbol.toPrimitive];if(b!==void 0){var v=b.call(c,"string");if(wn(v)!=="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),wn(l)==="symbol"?l:String(l)),a)}var l}var Ws=function(){function r(a){(function(l,c){if(!(l instanceof c))throw new TypeError("Cannot call a class as a function")})(this,r),this.elements={},this.elements.volume=a.volumeBar,this.elements.played=a.playedBar,this.elements.loaded=a.loadedBar,this.elements.danmaku=a.danmakuOpacityBar}var i,u;return i=r,(u=[{key:"set",value:function(a,l,c){l=Math.max(l,0),l=Math.min(l,1),this.elements[a].style[c]=100*l+"%"}},{key:"get",value:function(a){return parseFloat(this.elements[a].style.width)/100}}])&&js(i.prototype,u),Object.defineProperty(i,"prototype",{writable:!1}),r}();const Qs=Ws;function xn(r){return xn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},xn(r)}function Hs(r,i){for(var u=0;u<i.length;u++){var a=i[u];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,(l=function(c,h){if(xn(c)!=="object"||c===null)return c;var b=c[Symbol.toPrimitive];if(b!==void 0){var v=b.call(c,"string");if(xn(v)!=="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),xn(l)==="symbol"?l:String(l)),a)}var l}var Ys=function(){function r(a){(function(l,c){if(!(l instanceof c))throw new TypeError("Cannot call a class as a function")})(this,r),this.player=a,window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(l){window.setTimeout(l,1e3/60)},this.types=["loading","info","fps"],this.init()}var i,u;return i=r,(u=[{key:"init",value:function(){var a=this;this.types.map(function(l){return l!=="fps"&&a["init".concat(l,"Checker")](),l})}},{key:"initloadingChecker",value:function(){var a=this,l=0,c=0,h=!1;this.loadingChecker=setInterval(function(){a.enableloadingChecker&&(c=a.player.video.currentTime,h||c!==l||a.player.video.paused||(a.player.container.classList.add("dplayer-loading"),h=!0),h&&c>l&&!a.player.video.paused&&(a.player.container.classList.remove("dplayer-loading"),h=!1),l=c)},100)}},{key:"initfpsChecker",value:function(){var a=this;window.requestAnimationFrame(function(){if(a.enablefpsChecker)if(a.initfpsChecker(),a.fpsStart){a.fpsIndex++;var l=new Date;l-a.fpsStart>1e3&&(a.player.infoPanel.fps(a.fpsIndex/(l-a.fpsStart)*1e3),a.fpsStart=new Date,a.fpsIndex=0)}else a.fpsStart=new Date,a.fpsIndex=0;else a.fpsStart=0,a.fpsIndex=0})}},{key:"initinfoChecker",value:function(){var a=this;this.infoChecker=setInterval(function(){a.enableinfoChecker&&a.player.infoPanel.update()},1e3)}},{key:"enable",value:function(a){this["enable".concat(a,"Checker")]=!0,a==="fps"&&this.initfpsChecker()}},{key:"disable",value:function(a){this["enable".concat(a,"Checker")]=!1}},{key:"destroy",value:function(){var a=this;this.types.map(function(l){return a["enable".concat(l,"Checker")]=!1,a["".concat(l,"Checker")]&&clearInterval(a["".concat(l,"Checker")]),l})}}])&&Hs(i.prototype,u),Object.defineProperty(i,"prototype",{writable:!1}),r}();const Ks=Ys;function En(r){return En=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},En(r)}function Xs(r,i){for(var u=0;u<i.length;u++){var a=i[u];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,(l=function(c,h){if(En(c)!=="object"||c===null)return c;var b=c[Symbol.toPrimitive];if(b!==void 0){var v=b.call(c,"string");if(En(v)!=="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),En(l)==="symbol"?l:String(l)),a)}var l}const Gs=function(){function r(a){var l=this;(function(c,h){if(!(c instanceof h))throw new TypeError("Cannot call a class as a function")})(this,r),this.container=a,this.container.addEventListener("animationend",function(){l.container.classList.remove("dplayer-bezel-transition")})}var i,u;return i=r,(u=[{key:"switch",value:function(a){this.container.innerHTML=a,this.container.classList.add("dplayer-bezel-transition")}}])&&Xs(i.prototype,u),Object.defineProperty(i,"prototype",{writable:!1}),r}();function Cn(r){return Cn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Cn(r)}function Zs(r,i){for(var u=0;u<i.length;u++){var a=i[u];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,(l=function(c,h){if(Cn(c)!=="object"||c===null)return c;var b=c[Symbol.toPrimitive];if(b!==void 0){var v=b.call(c,"string");if(Cn(v)!=="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),Cn(l)==="symbol"?l:String(l)),a)}var l}var Js=function(){function r(a){(function(l,c){if(!(l instanceof c))throw new TypeError("Cannot call a class as a function")})(this,r),this.container=a.container,this.barWidth=a.barWidth,this.container.style.backgroundImage="url('".concat(a.url,"')"),this.events=a.events}var i,u;return i=r,(u=[{key:"resize",value:function(a,l,c){this.container.style.width="".concat(a,"px"),this.container.style.height="".concat(l,"px"),this.container.style.top="".concat(2-l,"px"),this.barWidth=c}},{key:"show",value:function(){this.container.style.display="block",this.events&&this.events.trigger("thumbnails_show")}},{key:"move",value:function(a){this.container.style.backgroundPosition="-".concat(160*(Math.ceil(a/this.barWidth*100)-1),"px 0"),this.container.style.left="".concat(Math.min(Math.max(a-this.container.offsetWidth/2,-10),this.barWidth-150),"px")}},{key:"hide",value:function(){this.container.style.display="none",this.events&&this.events.trigger("thumbnails_hide")}}])&&Zs(i.prototype,u),Object.defineProperty(i,"prototype",{writable:!1}),r}();const ed=Js;function kn(r){return kn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},kn(r)}function td(r,i){for(var u=0;u<i.length;u++){var a=i[u];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,(l=function(c,h){if(kn(c)!=="object"||c===null)return c;var b=c[Symbol.toPrimitive];if(b!==void 0){var v=b.call(c,"string");if(kn(v)!=="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),kn(l)==="symbol"?l:String(l)),a)}var l}var St,bi=!0,Ka=!1,nd=function(){function r(a){(function(l,c){if(!(l instanceof c))throw new TypeError("Cannot call a class as a function")})(this,r),this.player=a,this.autoHideTimer=0,O.isMobile||(this.setAutoHideHandler=this.setAutoHide.bind(this),this.player.container.addEventListener("mousemove",this.setAutoHideHandler),this.player.container.addEventListener("click",this.setAutoHideHandler),this.player.on("play",this.setAutoHideHandler),this.player.on("pause",this.setAutoHideHandler)),this.initPlayButton(),this.initThumbnails(),this.initPlayedBar(),this.initFullButton(),this.initQualityButton(),this.initScreenshotButton(),this.player.options.subtitle&&typeof this.player.options.subtitle.url=="string"&&this.initSubtitleButton(),this.initHighlights(),this.initAirplayButton(),this.initChromecastButton(),O.isMobile||this.initVolumeButton()}var i,u;return i=r,(u=[{key:"initPlayButton",value:function(){var a=this;this.player.template.playButton.addEventListener("click",function(){a.player.toggle()}),this.player.template.mobilePlayButton.addEventListener("click",function(){a.player.toggle()}),O.isMobile?(this.player.template.videoWrap.addEventListener("click",function(){a.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){a.toggle()})):this.player.options.preventClickToggle||(this.player.template.videoWrap.addEventListener("click",function(){a.player.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){a.player.toggle()}))}},{key:"initHighlights",value:function(){var a=this;this.player.on("durationchange",function(){if(a.player.video.duration!==1&&a.player.video.duration!==1/0&&a.player.options.highlight){var l=a.player.template.playedBarWrap.querySelectorAll(".dplayer-highlight");[].slice.call(l,0).forEach(function(b){a.player.template.playedBarWrap.removeChild(b)});for(var c=0;c<a.player.options.highlight.length;c++)if(a.player.options.highlight[c].text&&a.player.options.highlight[c].time){var h=document.createElement("div");h.classList.add("dplayer-highlight"),h.style.left=a.player.options.highlight[c].time/a.player.video.duration*100+"%",h.innerHTML='<span class="dplayer-highlight-text">'+a.player.options.highlight[c].text+"</span>",a.player.template.playedBarWrap.insertBefore(h,a.player.template.playedBarTime)}}})}},{key:"initThumbnails",value:function(){var a=this;this.player.options.video.thumbnails&&(this.thumbnails=new ed({container:this.player.template.barPreview,barWidth:this.player.template.barWrap.offsetWidth,url:this.player.options.video.thumbnails,events:this.player.events}),this.player.on("loadedmetadata",function(){a.thumbnails.resize(160,a.player.video.videoHeight/a.player.video.videoWidth*160,a.player.template.barWrap.offsetWidth)}))}},{key:"initPlayedBar",value:function(){var a=this,l=function(h){var b=((h.clientX||h.changedTouches[0].clientX)-O.getBoundingClientRectViewLeft(a.player.template.playedBarWrap))/a.player.template.playedBarWrap.clientWidth;b=Math.max(b,0),b=Math.min(b,1),a.player.bar.set("played",b,"width"),a.player.template.ptime.innerHTML=O.secondToTime(b*a.player.video.duration)},c=function h(b){document.removeEventListener(O.nameMap.dragEnd,h),document.removeEventListener(O.nameMap.dragMove,l);var v=((b.clientX||b.changedTouches[0].clientX)-O.getBoundingClientRectViewLeft(a.player.template.playedBarWrap))/a.player.template.playedBarWrap.clientWidth;v=Math.max(v,0),v=Math.min(v,1),a.player.bar.set("played",v,"width"),a.player.seek(a.player.bar.get("played")*a.player.video.duration),a.player.timer.enable("progress")};this.player.template.playedBarWrap.addEventListener(O.nameMap.dragStart,function(){a.player.timer.disable("progress"),document.addEventListener(O.nameMap.dragMove,l),document.addEventListener(O.nameMap.dragEnd,c)}),this.player.template.playedBarWrap.addEventListener(O.nameMap.dragMove,function(h){if(a.player.video.duration){var b=a.player.template.playedBarWrap.getBoundingClientRect().left,v=(h.clientX||h.changedTouches[0].clientX)-b;if(v<0||v>a.player.template.playedBarWrap.offsetWidth)return;var k=a.player.video.duration*(v/a.player.template.playedBarWrap.offsetWidth);O.isMobile&&a.thumbnails&&a.thumbnails.show(),a.thumbnails&&a.thumbnails.move(v),a.player.template.playedBarTime.style.left="".concat(v-(k>=3600?25:20),"px"),a.player.template.playedBarTime.innerText=O.secondToTime(k),a.player.template.playedBarTime.classList.remove("hidden")}}),this.player.template.playedBarWrap.addEventListener(O.nameMap.dragEnd,function(){O.isMobile&&a.thumbnails&&a.thumbnails.hide()}),O.isMobile||(this.player.template.playedBarWrap.addEventListener("mouseenter",function(){a.player.video.duration&&(a.thumbnails&&a.thumbnails.show(),a.player.template.playedBarTime.classList.remove("hidden"))}),this.player.template.playedBarWrap.addEventListener("mouseleave",function(){a.player.video.duration&&(a.thumbnails&&a.thumbnails.hide(),a.player.template.playedBarTime.classList.add("hidden"))}))}},{key:"initFullButton",value:function(){var a=this;this.player.template.browserFullButton.addEventListener("click",function(){a.player.fullScreen.toggle("browser")}),this.player.template.webFullButton.addEventListener("click",function(){a.player.fullScreen.toggle("web")})}},{key:"initVolumeButton",value:function(){var a=this,l=function(h){var b=h||window.event,v=((b.clientX||b.changedTouches[0].clientX)-O.getBoundingClientRectViewLeft(a.player.template.volumeBarWrap)-5.5)/35;a.player.volume(v)},c=function h(){document.removeEventListener(O.nameMap.dragEnd,h),document.removeEventListener(O.nameMap.dragMove,l),a.player.template.volumeButton.classList.remove("dplayer-volume-active")};this.player.template.volumeBarWrapWrap.addEventListener("click",function(h){var b=h||window.event,v=((b.clientX||b.changedTouches[0].clientX)-O.getBoundingClientRectViewLeft(a.player.template.volumeBarWrap)-5.5)/35;a.player.volume(v)}),this.player.template.volumeBarWrapWrap.addEventListener(O.nameMap.dragStart,function(){document.addEventListener(O.nameMap.dragMove,l),document.addEventListener(O.nameMap.dragEnd,c),a.player.template.volumeButton.classList.add("dplayer-volume-active")}),this.player.template.volumeButtonIcon.addEventListener("click",function(){a.player.video.muted?(a.player.video.muted=!1,a.player.switchVolumeIcon(),a.player.bar.set("volume",a.player.volume(),"width")):(a.player.video.muted=!0,a.player.template.volumeIcon.innerHTML=rt.volumeOff,a.player.bar.set("volume",0,"width"))})}},{key:"initQualityButton",value:function(){var a=this;this.player.options.video.quality&&this.player.template.qualityList.addEventListener("click",function(l){l.target.classList.contains("dplayer-quality-item")&&a.player.switchQuality(l.target.dataset.index)})}},{key:"initScreenshotButton",value:function(){var a=this;this.player.options.screenshot&&this.player.template.camareButton.addEventListener("click",function(){var l,c=document.createElement("canvas");c.width=a.player.video.videoWidth,c.height=a.player.video.videoHeight,c.getContext("2d").drawImage(a.player.video,0,0,c.width,c.height),c.toBlob(function(h){l=URL.createObjectURL(h);var b=document.createElement("a");b.href=l,b.download="DPlayer.png",b.style.display="none",document.body.appendChild(b),b.click(),document.body.removeChild(b),URL.revokeObjectURL(l),a.player.events.trigger("screenshot",l)})})}},{key:"initAirplayButton",value:function(){this.player.options.airplay&&(window.WebKitPlaybackTargetAvailabilityEvent?this.player.video.addEventListener("webkitplaybacktargetavailabilitychanged",function(a){a.availability==="available"?this.template.airplayButton.disable=!1:this.template.airplayButton.disable=!0,this.template.airplayButton.addEventListener("click",function(){this.video.webkitShowPlaybackTargetPicker()}.bind(this))}.bind(this.player)):this.player.template.airplayButton.style.display="none")}},{key:"initChromecast",value:function(){var a=window.document.createElement("script");a.setAttribute("type","text/javascript"),a.setAttribute("src","https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"),window.document.body.appendChild(a),window.__onGCastApiAvailable=function(l){if(l){var c=new(St=window.chrome.cast).SessionRequest(St.media.DEFAULT_MEDIA_RECEIVER_APP_ID),h=new St.ApiConfig(c,function(){},function(b){b===St.ReceiverAvailability.AVAILABLE&&console.log("chromecast: ",b)});St.initialize(h,function(){})}}}},{key:"initChromecastButton",value:function(){var a=this;if(this.player.options.chromecast){bi&&(bi=!1,this.initChromecast());var l=function(h,b){a.currentMedia=b},c=function(h){console.error("Error launching media",h)};this.player.template.chromecastButton.addEventListener("click",function(){Ka?(Ka=!1,a.currentMedia.stop(),a.session.stop(),a.initChromecast()):(Ka=!0,St.requestSession(function(h){var b,v,k;a.session=h,b=a.player.options.video.url,v=new St.media.MediaInfo(b),k=new St.media.LoadRequest(v),a.session?a.session.loadMedia(k,l.bind(a,"loadMedia"),c).play():window.open(b)},function(h){h.code==="cancel"?a.session=void 0:console.error("Error selecting a cast device",h)}))})}}},{key:"initSubtitleButton",value:function(){var a=this;this.player.events.on("subtitle_show",function(){a.player.template.subtitleButton.dataset.balloon=a.player.tran("hide-subs"),a.player.template.subtitleButtonInner.style.opacity="",a.player.user.set("subtitle",1)}),this.player.events.on("subtitle_hide",function(){a.player.template.subtitleButton.dataset.balloon=a.player.tran("show-subs"),a.player.template.subtitleButtonInner.style.opacity="0.4",a.player.user.set("subtitle",0)}),this.player.template.subtitleButton.addEventListener("click",function(){a.player.subtitle.toggle()})}},{key:"setAutoHide",value:function(){var a=this;this.show(),clearTimeout(this.autoHideTimer),this.autoHideTimer=setTimeout(function(){!a.player.video.played.length||a.player.paused||a.disableAutoHide||a.hide()},3e3)}},{key:"show",value:function(){this.player.container.classList.remove("dplayer-hide-controller")}},{key:"hide",value:function(){this.player.container.classList.add("dplayer-hide-controller"),this.player.setting.hide(),this.player.comment&&this.player.comment.hide()}},{key:"isShow",value:function(){return!this.player.container.classList.contains("dplayer-hide-controller")}},{key:"toggle",value:function(){this.isShow()?this.hide():this.show()}},{key:"destroy",value:function(){O.isMobile||(this.player.container.removeEventListener("mousemove",this.setAutoHideHandler),this.player.container.removeEventListener("click",this.setAutoHideHandler)),clearTimeout(this.autoHideTimer)}}])&&td(i.prototype,u),Object.defineProperty(i,"prototype",{writable:!1}),r}();const ad=nd;function Bn(r){return Bn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Bn(r)}function rd(r,i){for(var u=0;u<i.length;u++){var a=i[u];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,(l=function(c,h){if(Bn(c)!=="object"||c===null)return c;var b=c[Symbol.toPrimitive];if(b!==void 0){var v=b.call(c,"string");if(Bn(v)!=="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),Bn(l)==="symbol"?l:String(l)),a)}var l}var id=function(){function r(a){var l=this;(function(k,S){if(!(k instanceof S))throw new TypeError("Cannot call a class as a function")})(this,r),this.player=a,this.player.template.mask.addEventListener("click",function(){l.hide()}),this.player.template.settingButton.addEventListener("click",function(){l.show()}),this.loop=this.player.options.loop,this.player.template.loopToggle.checked=this.loop,this.player.template.loop.addEventListener("click",function(){l.player.template.loopToggle.checked=!l.player.template.loopToggle.checked,l.player.template.loopToggle.checked?l.loop=!0:l.loop=!1,l.hide()}),this.showDanmaku=this.player.user.get("danmaku"),this.showDanmaku||this.player.danmaku&&this.player.danmaku.hide(),this.player.template.showDanmakuToggle.checked=this.showDanmaku,this.player.template.showDanmaku.addEventListener("click",function(){l.player.template.showDanmakuToggle.checked=!l.player.template.showDanmakuToggle.checked,l.player.template.showDanmakuToggle.checked?(l.showDanmaku=!0,l.player.danmaku.show()):(l.showDanmaku=!1,l.player.danmaku.hide()),l.player.user.set("danmaku",l.showDanmaku?1:0),l.hide()}),this.unlimitDanmaku=this.player.user.get("unlimited"),this.player.template.unlimitDanmakuToggle.checked=this.unlimitDanmaku,this.player.template.unlimitDanmaku.addEventListener("click",function(){l.player.template.unlimitDanmakuToggle.checked=!l.player.template.unlimitDanmakuToggle.checked,l.player.template.unlimitDanmakuToggle.checked?(l.unlimitDanmaku=!0,l.player.danmaku.unlimit(!0)):(l.unlimitDanmaku=!1,l.player.danmaku.unlimit(!1)),l.player.user.set("unlimited",l.unlimitDanmaku?1:0),l.hide()}),this.player.template.speed.addEventListener("click",function(){l.player.template.settingBox.classList.add("dplayer-setting-box-narrow"),l.player.template.settingBox.classList.add("dplayer-setting-box-speed")});for(var c=function(k){l.player.template.speedItem[k].addEventListener("click",function(){l.player.speed(l.player.template.speedItem[k].dataset.speed),l.hide()})},h=0;h<this.player.template.speedItem.length;h++)c(h);if(this.player.danmaku){this.player.on("danmaku_opacity",function(k){l.player.bar.set("danmaku",k,"width"),l.player.user.set("opacity",k)}),this.player.danmaku.opacity(this.player.user.get("opacity"));var b=function(k){var S=k||window.event,R=((S.clientX||S.changedTouches[0].clientX)-O.getBoundingClientRectViewLeft(l.player.template.danmakuOpacityBarWrap))/130;R=Math.max(R,0),R=Math.min(R,1),l.player.danmaku.opacity(R)},v=function k(){document.removeEventListener(O.nameMap.dragEnd,k),document.removeEventListener(O.nameMap.dragMove,b),l.player.template.danmakuOpacityBox.classList.remove("dplayer-setting-danmaku-active")};this.player.template.danmakuOpacityBarWrapWrap.addEventListener("click",function(k){var S=k||window.event,R=((S.clientX||S.changedTouches[0].clientX)-O.getBoundingClientRectViewLeft(l.player.template.danmakuOpacityBarWrap))/130;R=Math.max(R,0),R=Math.min(R,1),l.player.danmaku.opacity(R)}),this.player.template.danmakuOpacityBarWrapWrap.addEventListener(O.nameMap.dragStart,function(){document.addEventListener(O.nameMap.dragMove,b),document.addEventListener(O.nameMap.dragEnd,v),l.player.template.danmakuOpacityBox.classList.add("dplayer-setting-danmaku-active")})}}var i,u;return i=r,(u=[{key:"hide",value:function(){var a=this;this.player.template.settingBox.classList.remove("dplayer-setting-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),setTimeout(function(){a.player.template.settingBox.classList.remove("dplayer-setting-box-narrow"),a.player.template.settingBox.classList.remove("dplayer-setting-box-speed")},300),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.settingBox.classList.add("dplayer-setting-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}}])&&rd(i.prototype,u),Object.defineProperty(i,"prototype",{writable:!1}),r}();const od=id;function Sn(r){return Sn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Sn(r)}function ld(r,i){for(var u=0;u<i.length;u++){var a=i[u];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,(l=function(c,h){if(Sn(c)!=="object"||c===null)return c;var b=c[Symbol.toPrimitive];if(b!==void 0){var v=b.call(c,"string");if(Sn(v)!=="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),Sn(l)==="symbol"?l:String(l)),a)}var l}var sd=function(){function r(a){var l=this;(function(c,h){if(!(c instanceof h))throw new TypeError("Cannot call a class as a function")})(this,r),this.player=a,this.player.template.mask.addEventListener("click",function(){l.hide()}),this.player.template.commentButton.addEventListener("click",function(){l.show()}),this.player.template.commentSettingButton.addEventListener("click",function(){l.toggleSetting()}),this.player.template.commentColorSettingBox.addEventListener("click",function(){if(l.player.template.commentColorSettingBox.querySelector("input:checked+span")){var c=l.player.template.commentColorSettingBox.querySelector("input:checked").value;l.player.template.commentSettingFill.style.fill=c,l.player.template.commentInput.style.color=c,l.player.template.commentSendFill.style.fill=c}}),this.player.template.commentInput.addEventListener("click",function(){l.hideSetting()}),this.player.template.commentInput.addEventListener("keydown",function(c){(c||window.event).keyCode===13&&l.send()}),this.player.template.commentSendButton.addEventListener("click",function(){l.send()})}var i,u;return i=r,(u=[{key:"show",value:function(){this.player.controller.disableAutoHide=!0,this.player.template.controller.classList.add("dplayer-controller-comment"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.container.classList.add("dplayer-show-controller"),this.player.template.commentInput.focus()}},{key:"hide",value:function(){this.player.template.controller.classList.remove("dplayer-controller-comment"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.container.classList.remove("dplayer-show-controller"),this.player.controller.disableAutoHide=!1,this.hideSetting()}},{key:"showSetting",value:function(){this.player.template.commentSettingBox.classList.add("dplayer-comment-setting-open")}},{key:"hideSetting",value:function(){this.player.template.commentSettingBox.classList.remove("dplayer-comment-setting-open")}},{key:"toggleSetting",value:function(){this.player.template.commentSettingBox.classList.contains("dplayer-comment-setting-open")?this.hideSetting():this.showSetting()}},{key:"send",value:function(){var a=this;this.player.template.commentInput.blur(),this.player.template.commentInput.value.replace(/^\s+|\s+$/g,"")?this.player.danmaku.send({text:this.player.template.commentInput.value,color:O.color2Number(this.player.container.querySelector(".dplayer-comment-setting-color input:checked").value),type:parseInt(this.player.container.querySelector(".dplayer-comment-setting-type input:checked").value)},function(){a.player.template.commentInput.value="",a.hide()}):this.player.notice(this.player.tran("please-input-danmaku"))}}])&&ld(i.prototype,u),Object.defineProperty(i,"prototype",{writable:!1}),r}();const dd=sd;function In(r){return In=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},In(r)}function cd(r,i){for(var u=0;u<i.length;u++){var a=i[u];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,(l=function(c,h){if(In(c)!=="object"||c===null)return c;var b=c[Symbol.toPrimitive];if(b!==void 0){var v=b.call(c,"string");if(In(v)!=="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),In(l)==="symbol"?l:String(l)),a)}var l}var pd=function(){function r(a){(function(l,c){if(!(l instanceof c))throw new TypeError("Cannot call a class as a function")})(this,r),this.player=a,this.doHotKeyHandler=this.doHotKey.bind(this),this.cancelFullScreenHandler=this.cancelFullScreen.bind(this),this.player.options.hotkey&&document.addEventListener("keydown",this.doHotKeyHandler),document.addEventListener("keydown",this.cancelFullScreenHandler)}var i,u;return i=r,(u=[{key:"doHotKey",value:function(a){if(this.player.focus){var l=document.activeElement.tagName.toUpperCase(),c=document.activeElement.getAttribute("contenteditable");if(l!=="INPUT"&&l!=="TEXTAREA"&&c!==""&&c!=="true"){var h,b=a||window.event;switch(b.keyCode){case 32:b.preventDefault(),this.player.toggle();break;case 37:if(b.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime-5),this.player.controller.setAutoHide();break;case 39:if(b.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime+5),this.player.controller.setAutoHide();break;case 38:b.preventDefault(),h=this.player.volume()+.1,this.player.volume(h);break;case 40:b.preventDefault(),h=this.player.volume()-.1,this.player.volume(h)}}}}},{key:"cancelFullScreen",value:function(a){(a||window.event).keyCode===27&&this.player.fullScreen.isFullScreen("web")&&this.player.fullScreen.cancel("web")}},{key:"destroy",value:function(){this.player.options.hotkey&&document.removeEventListener("keydown",this.doHotKeyHandler),document.removeEventListener("keydown",this.cancelFullScreenHandler)}}])&&cd(i.prototype,u),Object.defineProperty(i,"prototype",{writable:!1}),r}();const ud=pd;function Tn(r){return Tn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Tn(r)}function hd(r,i){for(var u=0;u<i.length;u++){var a=i[u];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,(l=function(c,h){if(Tn(c)!=="object"||c===null)return c;var b=c[Symbol.toPrimitive];if(b!==void 0){var v=b.call(c,"string");if(Tn(v)!=="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),Tn(l)==="symbol"?l:String(l)),a)}var l}var fd=function(){function r(a){var l=this;(function(c,h){if(!(c instanceof h))throw new TypeError("Cannot call a class as a function")})(this,r),this.player=a,this.shown=!1,Array.prototype.slice.call(this.player.template.menuItem).forEach(function(c,h){l.player.options.contextmenu[h].click&&c.addEventListener("click",function(){l.player.options.contextmenu[h].click(l.player),l.hide()})}),this.contextmenuHandler=function(c){if(l.shown)l.hide();else{var h=c||window.event;h.preventDefault();var b=l.player.container.getBoundingClientRect();l.show(h.clientX-b.left,h.clientY-b.top),l.player.template.mask.addEventListener("click",function(){l.hide()})}},this.player.container.addEventListener("contextmenu",this.contextmenuHandler)}var i,u;return i=r,(u=[{key:"show",value:function(a,l){this.player.template.menu.classList.add("dplayer-menu-show");var c=this.player.container.getBoundingClientRect();a+this.player.template.menu.offsetWidth>=c.width?(this.player.template.menu.style.right=c.width-a+"px",this.player.template.menu.style.left="initial"):(this.player.template.menu.style.left=a+"px",this.player.template.menu.style.right="initial"),l+this.player.template.menu.offsetHeight>=c.height?(this.player.template.menu.style.bottom=c.height-l+"px",this.player.template.menu.style.top="initial"):(this.player.template.menu.style.top=l+"px",this.player.template.menu.style.bottom="initial"),this.player.template.mask.classList.add("dplayer-mask-show"),this.shown=!0,this.player.events.trigger("contextmenu_show")}},{key:"hide",value:function(){this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.template.menu.classList.remove("dplayer-menu-show"),this.shown=!1,this.player.events.trigger("contextmenu_hide")}},{key:"destroy",value:function(){this.player.container.removeEventListener("contextmenu",this.contextmenuHandler)}}])&&hd(i.prototype,u),Object.defineProperty(i,"prototype",{writable:!1}),r}();const md=fd;function Ln(r){return Ln=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Ln(r)}function yd(r,i){for(var u=0;u<i.length;u++){var a=i[u];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,(l=function(c,h){if(Ln(c)!=="object"||c===null)return c;var b=c[Symbol.toPrimitive];if(b!==void 0){var v=b.call(c,"string");if(Ln(v)!=="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(a.key),Ln(l)==="symbol"?l:String(l)),a)}var l}var Ad=function(){function r(a){var l=this;(function(c,h){if(!(c instanceof h))throw new TypeError("Cannot call a class as a function")})(this,r),this.container=a.template.infoPanel,this.template=a.template,this.video=a.video,this.player=a,this.template.infoPanelClose.addEventListener("click",function(){l.hide()})}var i,u;return i=r,(u=[{key:"show",value:function(){this.beginTime=Date.now(),this.update(),this.player.timer.enable("info"),this.player.timer.enable("fps"),this.container.classList.remove("dplayer-info-panel-hide")}},{key:"hide",value:function(){this.player.timer.disable("info"),this.player.timer.disable("fps"),this.container.classList.add("dplayer-info-panel-hide")}},{key:"triggle",value:function(){this.container.classList.contains("dplayer-info-panel-hide")?this.show():this.hide()}},{key:"update",value:function(){this.template.infoVersion.innerHTML="v".concat("1.27.1"," ").concat("v1.27.0-12-g4f61091"),this.template.infoType.innerHTML=this.player.type,this.template.infoUrl.innerHTML=this.player.options.video.url,this.template.infoResolution.innerHTML="".concat(this.player.video.videoWidth," x ").concat(this.player.video.videoHeight),this.template.infoDuration.innerHTML=this.player.video.duration,this.player.options.danmaku&&(this.template.infoDanmakuId.innerHTML=this.player.options.danmaku.id,this.template.infoDanmakuApi.innerHTML=this.player.options.danmaku.api,this.template.infoDanmakuAmount.innerHTML=this.player.danmaku.dan.length)}},{key:"fps",value:function(a){this.template.infoFPS.innerHTML="".concat(a.toFixed(1))}}])&&yd(i.prototype,u),Object.defineProperty(i,"prototype",{writable:!1}),r}();const gd=Ad;var bd=s(568),vd=s.n(bd);function Dn(r){return Dn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Dn(r)}function vi(r,i){var u=Object.keys(r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);i&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(r,l).enumerable})),u.push.apply(u,a)}return u}function wd(r,i,u){return(i=xi(i))in r?Object.defineProperty(r,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[i]=u,r}function wi(r,i){for(var u=0;u<i.length;u++){var a=i[u];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,xi(a.key),a)}}function xi(r){var i=function(u,a){if(Dn(u)!=="object"||u===null)return u;var l=u[Symbol.toPrimitive];if(l!==void 0){var c=l.call(u,"string");if(Dn(c)!=="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(u)}(r);return Dn(i)==="symbol"?i:String(i)}var Ei=0,Yt=[],xd=function(){function r(l){var c=this;(function(h,b){if(!(h instanceof b))throw new TypeError("Cannot call a class as a function")})(this,r),this.options=function(h){var b={container:h.element||document.getElementsByClassName("dplayer")[0],live:!1,autoplay:!1,theme:"#b7daff",loop:!1,lang:(navigator.language||navigator.browserLanguage).toLowerCase(),screenshot:!1,airplay:!0,chromecast:!1,hotkey:!0,preload:"metadata",volume:.7,playbackSpeed:[.5,.75,1,1.25,1.5,2],apiBackend:Pl,video:{},contextmenu:[],mutex:!0,pluginOptions:{hls:{},flv:{},dash:{},webtorrent:{}},preventClickToggle:!1};for(var v in b)b.hasOwnProperty(v)&&!h.hasOwnProperty(v)&&(h[v]=b[v]);return h.video&&!h.video.type&&(h.video.type="auto"),Ha(h.danmaku)==="object"&&h.danmaku&&!h.danmaku.user&&(h.danmaku.user="DIYgod"),h.subtitle&&(!h.subtitle.type&&(h.subtitle.type="webvtt"),!h.subtitle.fontSize&&(h.subtitle.fontSize="20px"),!h.subtitle.bottom&&(h.subtitle.bottom="40px"),!h.subtitle.color&&(h.subtitle.color="#fff")),h.video.quality&&(h.video.url=h.video.quality[h.video.defaultQuality].url),h.lang&&(h.lang=h.lang.toLowerCase()),h.contextmenu=h.contextmenu.concat([{key:"video-info",click:function(k){k.infoPanel.triggle()}},{key:"about-author",link:"https://diygod.me"},{text:"DPlayer v".concat("1.27.1"),link:"https://github.com/MoePlayer/DPlayer"}]),h}(function(h){for(var b=1;b<arguments.length;b++){var v=arguments[b]!=null?arguments[b]:{};b%2?vi(Object(v),!0).forEach(function(k){wd(h,k,v[k])}):Object.getOwnPropertyDescriptors?Object.defineProperties(h,Object.getOwnPropertyDescriptors(v)):vi(Object(v)).forEach(function(k){Object.defineProperty(h,k,Object.getOwnPropertyDescriptor(v,k))})}return h}({preload:l.video.type==="webtorrent"?"none":"metadata"},l)),this.options.video.quality&&(this.qualityIndex=this.options.video.defaultQuality,this.quality=this.options.video.quality[this.options.video.defaultQuality]),this.tran=new Vl(this.options.lang).tran,this.events=new Ds,this.user=new Fs(this),this.container=this.options.container,this.noticeList={},this.container.classList.add("dplayer"),this.options.danmaku||this.container.classList.add("dplayer-no-danmaku"),this.options.live?this.container.classList.add("dplayer-live"):this.container.classList.remove("dplayer-live"),O.isMobile&&this.container.classList.add("dplayer-mobile"),this.arrow=this.container.offsetWidth<=500,this.arrow&&this.container.classList.add("dplayer-arrow"),this.options.subtitle&&Array.isArray(this.options.subtitle.url)&&(this.options.subtitle.url.push({subtitle:"",lang:"off"}),this.options.subtitle.defaultSubtitle&&(typeof this.options.subtitle.defaultSubtitle=="string"?this.options.subtitle.index=this.options.subtitle.url.findIndex(function(h){return h.lang===c.options.subtitle.defaultSubtitle||h.name===c.options.subtitle.defaultSubtitle}):typeof this.options.subtitle.defaultSubtitle=="number"&&(this.options.subtitle.index=this.options.subtitle.defaultSubtitle)),(this.options.subtitle.index===-1||!this.options.subtitle.index||this.options.subtitle.index>this.options.subtitle.url.length-1)&&(this.options.subtitle.index=this.options.subtitle.url.findIndex(function(h){return h.lang===c.options.lang})),this.options.subtitle.index===-1&&(this.options.subtitle.index=this.options.subtitle.url.length-1)),this.template=new gi({container:this.container,options:this.options,index:Ei,tran:this.tran}),this.video=this.template.video,this.bar=new Qs(this.template),this.bezel=new Gs(this.template.bezel),this.fullScreen=new Os(this),this.controller=new ad(this),this.options.danmaku&&(this.danmaku=new Ts({player:this,container:this.template.danmaku,opacity:this.user.get("opacity"),callback:function(){setTimeout(function(){c.template.danmakuLoading.style.display="none",c.options.autoplay&&c.play()},0)},error:function(h){c.notice(h)},apiBackend:this.options.apiBackend,borderColor:this.options.theme,height:this.arrow?24:30,time:function(){return c.video.currentTime},unlimited:this.user.get("unlimited"),api:{id:this.options.danmaku.id,address:this.options.danmaku.api,token:this.options.danmaku.token,maximum:this.options.danmaku.maximum,addition:this.options.danmaku.addition,user:this.options.danmaku.user,speedRate:this.options.danmaku.speedRate},events:this.events,tran:function(h){return c.tran(h)}}),this.comment=new dd(this)),this.setting=new od(this),this.plugins={},this.docClickFun=function(){c.focus=!1},this.containerClickFun=function(){c.focus=!0},document.addEventListener("click",this.docClickFun,!0),this.container.addEventListener("click",this.containerClickFun,!0),this.paused=!0,this.timer=new Ks(this),this.hotkey=new ud(this),this.contextmenu=new md(this),this.initVideo(this.video,this.quality&&this.quality.type||this.options.video.type),this.infoPanel=new gd(this),!this.danmaku&&this.options.autoplay&&this.play(),Ei++,Yt.push(this)}var i,u,a;return i=r,u=[{key:"seek",value:function(l){l=Math.max(l,0),this.video.duration&&(l=Math.min(l,this.video.duration)),this.video.currentTime<l?this.notice("".concat(this.tran("ff").replace("%s",(l-this.video.currentTime).toFixed(0)))):this.video.currentTime>l&&this.notice("".concat(this.tran("rew").replace("%s",(this.video.currentTime-l).toFixed(0)))),this.video.currentTime=l,this.danmaku&&this.danmaku.seek(),this.bar.set("played",l/this.video.duration,"width"),this.template.ptime.innerHTML=O.secondToTime(l)}},{key:"play",value:function(l){var c=this;if(this.paused=!1,this.video.paused&&!O.isMobile&&this.bezel.switch(rt.play),this.template.playButton.innerHTML=rt.pause,this.template.mobilePlayButton.innerHTML=rt.pause,l||W.resolve(this.video.play()).catch(function(){c.pause()}).then(function(){}),this.timer.enable("loading"),this.container.classList.remove("dplayer-paused"),this.container.classList.add("dplayer-playing"),this.danmaku&&this.danmaku.play(),this.options.mutex)for(var h=0;h<Yt.length;h++)this!==Yt[h]&&Yt[h].pause()}},{key:"pause",value:function(l){this.paused=!0,this.container.classList.remove("dplayer-loading"),this.video.paused||O.isMobile||this.bezel.switch(rt.pause),this.template.playButton.innerHTML=rt.play,this.template.mobilePlayButton.innerHTML=rt.play,l||this.video.pause(),this.timer.disable("loading"),this.container.classList.remove("dplayer-playing"),this.container.classList.add("dplayer-paused"),this.danmaku&&this.danmaku.pause()}},{key:"switchVolumeIcon",value:function(){this.volume()>=.95?this.template.volumeIcon.innerHTML=rt.volumeUp:this.volume()>0?this.template.volumeIcon.innerHTML=rt.volumeDown:this.template.volumeIcon.innerHTML=rt.volumeOff}},{key:"volume",value:function(l,c,h){if(l=parseFloat(l),!isNaN(l)){l=Math.max(l,0),l=Math.min(l,1),this.bar.set("volume",l,"width");var b="".concat((100*l).toFixed(0),"%");this.template.volumeBarWrapWrap.dataset.balloon=b,c||this.user.set("volume",l),h||this.notice("".concat(this.tran("volume")," ").concat((100*l).toFixed(0),"%"),void 0,void 0,"volume"),this.video.volume=l,this.video.muted&&(this.video.muted=!1),this.switchVolumeIcon()}return this.video.volume}},{key:"toggle",value:function(){this.video.paused?this.play():this.pause()}},{key:"on",value:function(l,c){this.events.on(l,c)}},{key:"switchVideo",value:function(l,c){this.pause(),this.video.poster=l.pic?l.pic:"",this.video.src=l.url,this.initMSE(this.video,l.type||"auto"),c&&(this.template.danmakuLoading.style.display="block",this.bar.set("played",0,"width"),this.bar.set("loaded",0,"width"),this.template.ptime.innerHTML="00:00",this.template.danmaku.innerHTML="",this.danmaku&&this.danmaku.reload({id:c.id,address:c.api,token:c.token,maximum:c.maximum,addition:c.addition,user:c.user}))}},{key:"initMSE",value:function(l,c){var h=this;if(this.type=c,this.options.video.customType&&this.options.video.customType[c])Object.prototype.toString.call(this.options.video.customType[c])==="[object Function]"?this.options.video.customType[c](this.video,this):console.error("Illegal customType: ".concat(c));else switch(this.type==="auto"&&(/m3u8(#|\?|$)/i.exec(l.src)?this.type="hls":/.flv(#|\?|$)/i.exec(l.src)?this.type="flv":/.mpd(#|\?|$)/i.exec(l.src)?this.type="dash":this.type="normal"),this.type==="hls"&&(l.canPlayType("application/x-mpegURL")||l.canPlayType("application/vnd.apple.mpegURL"))&&(this.type="normal"),this.type){case"hls":if(window.Hls)if(window.Hls.isSupported()){var b=this.options.pluginOptions.hls,v=new window.Hls(b);this.plugins.hls=v,v.loadSource(l.src),v.attachMedia(l),this.events.on("destroy",function(){v.destroy(),delete h.plugins.hls})}else this.notice("Error: Hls is not supported.");else this.notice("Error: Can't find Hls.");break;case"flv":if(window.flvjs)if(window.flvjs.isSupported()){var k=window.flvjs.createPlayer(Object.assign(this.options.pluginOptions.flv.mediaDataSource||{},{type:"flv",url:l.src}),this.options.pluginOptions.flv.config);this.plugins.flvjs=k,k.attachMediaElement(l),k.load(),this.events.on("destroy",function(){k.unload(),k.detachMediaElement(),k.destroy(),delete h.plugins.flvjs})}else this.notice("Error: flvjs is not supported.");else this.notice("Error: Can't find flvjs.");break;case"dash":if(window.dashjs){var S=window.dashjs.MediaPlayer().create().initialize(l,l.src,!1),R=this.options.pluginOptions.dash;S.updateSettings(R),this.plugins.dash=S,this.events.on("destroy",function(){window.dashjs.MediaPlayer().reset(),delete h.plugins.dash})}else this.notice("Error: Can't find dashjs.");break;case"webtorrent":if(window.WebTorrent)if(window.WebTorrent.WEBRTC_SUPPORT){this.container.classList.add("dplayer-loading");var V=this.options.pluginOptions.webtorrent,Q=new window.WebTorrent(V);this.plugins.webtorrent=Q;var U=l.src;l.src="",l.preload="metadata",l.addEventListener("durationchange",function(){return h.container.classList.remove("dplayer-loading")},{once:!0}),Q.add(U,function(P){P.files.find(function(X){return X.name.endsWith(".mp4")}).renderTo(h.video,{autoplay:h.options.autoplay,controls:!1})}),this.events.on("destroy",function(){Q.remove(U),Q.destroy(),delete h.plugins.webtorrent})}else this.notice("Error: Webtorrent is not supported.");else this.notice("Error: Can't find Webtorrent.")}}},{key:"initVideo",value:function(l,c){var h=this;this.initMSE(l,c),this.on("durationchange",function(){l.duration!==1&&l.duration!==1/0&&(h.template.dtime.innerHTML=O.secondToTime(l.duration))}),this.on("progress",function(){var k=l.buffered.length?l.buffered.end(l.buffered.length-1)/l.duration:0;h.bar.set("loaded",k,"width")}),this.on("error",function(){h.video.error&&h.tran&&h.notice&&h.type!=="webtorrent"&&h.notice(h.tran("video-failed"))}),this.on("ended",function(){h.bar.set("played",1,"width"),h.setting.loop?(h.seek(0),h.play()):h.pause(),h.danmaku&&(h.danmaku.danIndex=0)}),this.on("play",function(){h.paused&&h.play(!0)}),this.on("pause",function(){h.paused||h.pause(!0)}),this.on("timeupdate",function(){h.bar.set("played",h.video.currentTime/h.video.duration,"width");var k=O.secondToTime(h.video.currentTime);h.template.ptime.innerHTML!==k&&(h.template.ptime.innerHTML=k)});for(var b=function(k){l.addEventListener(h.events.videoEvents[k],function(S){h.events.trigger(h.events.videoEvents[k],S)})},v=0;v<this.events.videoEvents.length;v++)b(v);this.volume(this.user.get("volume"),!0,!0),this.options.subtitle&&(this.subtitle=new Ps(this.template.subtitle,this.video,this.options.subtitle,this.events),Array.isArray(this.options.subtitle.url)&&(this.subtitles=new Us(this)),this.user.get("subtitle")||this.subtitle.hide())}},{key:"switchQuality",value:function(l){var c=this;if(l=typeof l=="string"?parseInt(l):l,this.qualityIndex!==l&&!this.switchingQuality){this.prevIndex=this.qualityIndex,this.qualityIndex=l,this.switchingQuality=!0,this.quality=this.options.video.quality[l],this.template.qualityButton.innerHTML=this.quality.name;var h=this.video.paused;this.video.pause();var b=vd()({current:!1,pic:null,screenshot:this.options.screenshot,preload:"auto",url:this.quality.url,subtitle:this.options.subtitle}),v=new DOMParser().parseFromString(b,"text/html").body.firstChild;this.template.videoWrap.insertBefore(v,this.template.videoWrap.getElementsByTagName("div")[0]),this.prevVideo=this.video,this.video=v,this.initVideo(this.video,this.quality.type||this.options.video.type),this.seek(this.prevVideo.currentTime),this.notice("".concat(this.tran("switching-quality").replace("%q",this.quality.name)),-1,void 0,"switch-quality"),this.events.trigger("quality_start",this.quality),this.on("canplay",function(){if(c.prevVideo){if(c.video.currentTime!==c.prevVideo.currentTime)return void c.seek(c.prevVideo.currentTime);c.template.videoWrap.removeChild(c.prevVideo),c.video.classList.add("dplayer-video-current"),h||c.video.play(),c.prevVideo=null,c.notice("".concat(c.tran("switched-quality").replace("%q",c.quality.name)),void 0,void 0,"switch-quality"),c.switchingQuality=!1,c.events.trigger("quality_end")}}),this.on("error",function(){c.video.error&&c.prevVideo&&(c.template.videoWrap.removeChild(c.video),c.video=c.prevVideo,h||c.video.play(),c.qualityIndex=c.prevIndex,c.quality=c.options.video.quality[c.qualityIndex],c.noticeTime=setTimeout(function(){c.template.notice.style.opacity=0,c.events.trigger("notice_hide")},3e3),c.prevVideo=null,c.switchingQuality=!1)})}}},{key:"notice",value:function(l){var c,h,b,v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2e3,k=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.8,S=arguments.length>3?arguments[3]:void 0;if(S&&((c=document.getElementById("dplayer-notice-".concat(S)))&&(c.innerHTML=l),this.noticeList[S]&&(clearTimeout(this.noticeList[S]),this.noticeList[S]=null)),!c){var R=gi.NewNotice(l,k,S);this.template.noticeList.appendChild(R),c=R}this.events.trigger("notice_show",c),v>0&&(this.noticeList[S]=setTimeout((h=c,b=this,function(){h.addEventListener("animationend",function(){b.template.noticeList.removeChild(h)}),h.classList.add("remove-notice"),b.events.trigger("notice_hide"),b.noticeList[S]=null}),v))}},{key:"resize",value:function(){this.danmaku&&this.danmaku.resize(),this.controller.thumbnails&&this.controller.thumbnails.resize(160,this.video.videoHeight/this.video.videoWidth*160,this.template.barWrap.offsetWidth),this.events.trigger("resize")}},{key:"speed",value:function(l){this.video.playbackRate=l}},{key:"destroy",value:function(){Yt.splice(Yt.indexOf(this),1),this.pause(),document.removeEventListener("click",this.docClickFun,!0),this.container.removeEventListener("click",this.containerClickFun,!0),this.fullScreen.destroy(),this.hotkey.destroy(),this.contextmenu.destroy(),this.controller.destroy(),this.timer.destroy(),this.video.src="",this.container.innerHTML="",this.events.trigger("destroy")}}],a=[{key:"version",get:function(){return"1.27.1"}}],u&&wi(i.prototype,u),a&&wi(i,a),Object.defineProperty(i,"prototype",{writable:!1}),r}();const Ed=xd;console.log(`
`.concat(" %c DPlayer v","1.27.1"," ").concat("v1.27.0-12-g4f61091"," %c https://dplayer.diygod.dev ",`
`,`
`),"color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;");const Cd=Ed})(),d.default})())})(fl);var uf=fl.exports;const hf=Oo(uf),{sort:ff}=Lo,mf=(e,t)=>e.time-t.time,yf=Ut({props:{width:{type:Number,default:()=>960},height:{type:Number,default:()=>540}},setup(e,t){return{player:Mt(null)}},computed:{video(){return this.player?.video??null}},methods:{setVideo(e){this.video.src=e},readDanmaku(e){const{danmaku:t}=this.player;t.dan=ff(e,mf),t.seek()},seekDanmaku(){this.player.danmaku.seek()},play(){this.player.play()},pause(){this.player.pause()},playpause(){this.player.toggle()},volume(e){return this.player.volume(e)},relativeVolume(e){return this.player.volume(this.video.volume+e)},relativeSeek(e){this.player.seek(this.video.currentTime+e)},speed(e,t){const{player:n,video:o}=this;e=+e,o.playbackRate=e,n.notice(`${e} 倍速播放中`,t,void 0,"speed")}},mounted(){const e=this,{container:t}=e.$refs,n=e.player=new hf({container:t,volume:1,hotkey:!1,screenshot:!1,video:{},danmaku:{api:"api/",id:"0"},apiBackend:{send(o){o.error()},read(o){o.success([])}}});e.video.volume=1,e.video.crossOrigin=null,n.danmaku.opacity(.35)},beforeUnmount(){this.player.destroy(),this.player=null},render(){const e=this,{$slots:t,width:n,height:o}=e;return z("div",{class:"player-container player-force-show-controls player-hide-layers",style:{"--dplayer-width":n===0?"100%":n+"px","--dplayer-height":o+"px"}},[z("div",{ref:"container",class:"dplayer"}),t.default?.()])}}),{isArray:lr}=Array;function*Af(e,t=0){const n={__proto__:null,1:"right",5:"top",4:"bottom"};for(const o of e){let s=o.p.split(",");yield{time:+s[0]+t,type:n[parseInt(s[1])]??0,color:parseInt(s[2]),author:s[3],text:o.m}}}function*gf(e,t){const n=/^\[([^\[\]]+)\]/;for(const o of e){const s=String(o.author).match(n);t(s?.[1],o)&&(yield o)}}function*bf(e,t=3.5){const{trunc:n}=Math,o=[];for(const s of e){const d=n(s.time);(o[d]??=[]).push(s)}for(const s of o)if(s!=null)if(s.length<t)yield*s;else{let d=0,p=n(s.length/t)||1;for(;d<s.length;d+=p)yield s[d]}}const vf=e=>{let t=e.title||(e.file?.name??"").replace(/\.[^.]+$/,"");const n=pr({name:t,list:e.list,index:e.index,loading:!1}),o=async()=>{try{n.loading=!0;const p=await Nh(n.name,e.file);lr(p.matches)&&(e.list=n.list=p.matches),n.index=p.isMatched?0:-1}catch(p){throw yt.error(p.message),p}finally{n.loading=!1}};let s,d;Ge.confirm({title:"将视频关联到弹幕库",width:600,loading:!0,closable:!0,render(){return z(hr,{padding:0,"dis-hover":!0},{title:()=>z(No,{modelValue:n.name,"onUpdate:modelValue"(p){n.name=p}},{append:()=>z(qe,{type:"primary",loading:n.loading,onClick:o},()=>"获取")}),default:()=>z("div",{class:"ivu-scroll-wrapper",style:"touch-action: none; height: 60vh"},[z("div",{class:"ivu-scroll-container",style:"height: 100%"},[z("div",{class:"ivu-scroll-content"},[z(Sa,{onOnClick(p){n.index=p}},()=>[z(et,{name:-2,selected:n.index===-2},{default:()=>z("div",{class:"ivu-input-wrapper ivu-input-wrapper-default ivu-input-type",style:"width: 300px"},[z("input",{ref(p){s=p},type:"text",class:"ivu-input ivu-input-default",placeholder:"手动载入弹幕",onPaste(p){n.index=-2}})]),extra:()=>z("div",{class:"ivu-input-wrapper ivu-input-wrapper-default ivu-input-type",style:"width: 100px"},[z("input",{ref(p){d=p},type:"text",class:"ivu-input ivu-input-default",placeholder:"offset"})])}),Array.from(n.list,(p,y)=>z(et,{name:y,title:`[${_h[p.type]??p.type}]${p.animeTitle}`,label:p.episodeTitle,selected:y===n.index},{extra:()=>z("a",{href:pl(p.episodeId),target:"_blank"},["详细"])}))])])])])})},async onOk(){try{const{index:p}=n;let y;if(p===-2){const w=JSON.parse(s.value);lr(w)?y=w:lr(w.comments)&&(y=w.comments)}else if(p>=0){const w=n.list[p];w!=null&&(y=await Fh(w.episodeId))}if(y==null){yt.warning("未选中");return}e.index=p,e.loadDanmaku(y,+d.value||0)}catch(p){throw yt.error("弹幕加载失败"),p}finally{Ge.remove()}}})},wf=Ut({name:"ddplay-api",props:{file:{type:Blob},title:{type:String,default:""}},setup(e){const t=De(),n=t.proxy;Do(()=>[e.file,e.title],(s,d)=>{n.list=[],n.index=-1,n.$emit("danmaku",n.danmaku=[]),o.value=""});const o=Mt("");return{list:[],index:-1,danmaku:[],platforms:o}},methods:{loadDanmaku(e,t=0){const n=this,o={"!":0};let s=Af(e,t);s=gf(s,(y,w)=>(y??="!",y==="Gamer"&&(y="#"+y),o[y]=+(o[y]??0)+1,y[0]!=="#")),s=bf(s);const d=Array.from(s),p=Object.entries(o).sort((y,w)=>w[1]-y[1]).map(([y,w])=>`${y}[${w}]`).join(",");n.platforms=`(${p})`,n.$emit("danmaku",n.danmaku=d),yt.success(`加载了 ${d.length} 条弹幕 ${n.platforms}`)},handleMatch(){if(typeof To!="function"){yt.error("缺少 GM_xmlhttpRequest");return}this.title||this.file!=null||yt.warning("未选择文件"),vf(this)}},render(e,t){const n=this;return z(et,{title:`弹弹Play API[${n.danmaku.length}] ${n.platforms}`},t[226]??={extra:()=>z($n,null,t[227]??=()=>[z(qe,{onClick:n.handleMatch},t[228]??=()=>"加载弹幕")])})}}),{toFixed:xf}=_d,{startsWith:Ef}=Sr,{mediaSession:Ca}=navigator;let wt=cr;typeof MediaSession=="function"&&(wt=kr(MediaSession.prototype.setActionHandler,Ca));const sr="Media Player",Sf=Ut({name:sr,setup(e){const t={size:1,visiblePause:!1};try{Object.assign(t,JSON.parse(localStorage.getItem("player-options")))}catch{}const{abort:n,signal:o}=nl();return zo(n),{signal:o,playerOptions:t,sizes:["960*0","960*540","1280*720"],relativeSeeks:[-95,-10,-5,{value:-1/30,slot:"-1帧"},{value:1/30,slot:"1帧"},5,10,85],imageType:"image/png",viewer:null,keyboard:new fh(st,o),playList:Mt(null),player:Mt(null)}},data(){const{sizes:e,playerOptions:t}=this;return{size:e[t.size]??e[1],list:[],file:null,title:null}},watch:{title:{handler(e){e?(Bi(`${e} - ${sr}`),Ca!=null&&(Ca.metadata=new MediaMetadata({title:e})),setTimeout(yt.message,0,"info","加载: "+e)):Bi(sr)},immediate:!0,flush:"sync"}},methods:{options(){const e=this,{sizes:t}=e,n=pr(e.playerOptions),o=pr({loading:!1,error:!1});Ge.confirm({title:"设置",width:600,render(){return z("div",null,[z(Sa,null,()=>[z(et,{title:"默认尺寸"},{extra:()=>z(Li,{type:"button",modelValue:n.size,"onUpdate:modelValue"(s){n.size=s}},()=>Array.from(t,(s,d)=>z(Di,{label:d},()=>s)))}),z(et,{title:"页面不可见时暂停"},{extra:()=>z(Mu,{modelValue:n.visiblePause,"onUpdate:modelValue"(s){n.visiblePause=s}})}),z(et,{title:"油猴脚本"},{extra:()=>z($n,null,()=>[Rn==null?null:z(qe,{type:o.error?"error":"default",loading:o.loading,async onClick(){try{o.loading=!0,o.error=!1;const s=await Uh(),d=URL.createObjectURL(new Blob([s],{type:"text/plain"}));Ga(d)}catch(s){throw o.error=!0,s}finally{o.loading=!1}}},()=>xr),z(qe,{onClick(){const s=$h(),d=URL.createObjectURL(new Blob([s],{type:"text/plain"}));Ga(d)}},()=>"GM_fetch")])}),z(et,{title:"web+player: 协议处理器"},{extra:()=>z(qe,{type:"button",onClick(){const s=new URL(location.pathname,location.href).href;navigator.registerProtocolHandler("web+player",`${s}#!%s`)}},()=>"注册")})])])},onOk(){localStorage.setItem("player-options",JSON.stringify(e.playerOptions))}})},handleChange(e){this.list=e},async loadVideoAndPlay(e,t){e instanceof Blob?await this.loadVideoFromFile(e):await this.loadVideoFromUrl(e,t),this.player.play()},$_loadVideo(e){const t=this,{player:n}=t,{video:o}=n;return URL.revokeObjectURL(o.src),o.src=e,Si(o,"canplay")},loadVideoFromUrl(e,t){const n=this;if(Ef(e,"web+player:")){const d=new URL(e).searchParams;e=d.get("url"),t=d.get("title")}e=String(e),t??="";let o=n.$_loadVideo(e,t);return vo({title:t,url:e}),n.title=t,n.file=null,/^https?:/.test(e)&&Rn!=null&&(o=o.catch(n.loadVideoBackupGmxhr)),n.canplay=o,o},loadVideoFromFile(e){const t=this;let n=URL.createObjectURL(e),o=(e.name??"").replace(/\.[^.]+$/,"");const s=t.$_loadVideo(n,o),d={title:o};return(t.file==null?vo:vr)(d),t.title=o,t.file=e,t.canplay=s,s},loadVideoBackupGmxhr(e){if(Rn==null)return;const{title:t,player:n}=this,o=n.player,s=e?.target??n.video,{src:d,error:p}=s;p!=null&&console.warn(p,p.code,p.message),Ge.confirm({title:"视频加载失败",content:d+"<br>要使用 GM_xmlhttpRequest 吗？",onOk(){Rn({url:d,responseType:"blob",onload(y){vm.$_loadVideo(URL.createObjectURL(y.response),t).then(()=>{o.notice("使用 GM_xmlhttpRequest 加载成功",void 0,void 0,"gmxhr")})},onerror({error:y}){o.notice("使用 GM_xmlhttpRequest 加载失败: "+y,void 0,void 0,"gmxhr")},onprogress({loaded:y,total:w,lengthComputable:m}){o.notice(m?`${Za(y)}/${Za(w)}(${xf(100*y/w,2)}%)`:`${Za(y)}/unknow`,0,void 0,"gmxhr")}})}})},prev(){this.playList.prev()},next(){this.playList.next()},handleDanmaku(e){this.player.readDanmaku(e)},relativeSeek(e){this.player.relativeSeek(e)},relativeVolume(e){this.player.relativeVolume(e)},playpause(){this.player.playpause()},async retry(){const{video:e}=this.player;if(e==null)return;const{src:t,currentTime:n,paused:o}=e;setTimeout(()=>{e.src=t},0),await Si(e,"loadedmetadata"),e.currentTime=n,o||e.play()},captureImage(){const{video:e}=this.player;if(e.videoWidth===0||e.videoHeight===0){yt.warning("没有视频");return}zd(e,this.imageType).then(t=>{const{image:n}=this.$refs;URL.revokeObjectURL(n.src),n.src=URL.createObjectURL(t),n.dataset.filename=Md(e.currentTime,"-")+".png",yt.info("截图成功")},t=>{throw yt.error("截图失败"),t})},saveImage(){const{image:e}=this.$refs,{src:t}=e;t&&Ga(t,e.dataset.filename)},showImage(){const e=this,t=new Jo(e.$refs.image,{hidden(){t.destroy(),e.viewer=null}});e.viewer=t,t.show()}},mounted(){const e=this,{signal:t}=e,n=p=>{let y=p!=null?Ah(p):yh();try{y==null&&(y=gh())}finally{if(y==null){e.title="";return}const{title:w,url:m}=y;m!=null?(e.$refs.input.currentValue=m,e.$_loadVideo(m,w),e.title=w):(vr(null),e.title="")}};Od(()=>{Ve(window,"popstate",n,{capture:!0,signal:t}),n()});const{keyboard:o}=e;let s=1;o.set(" ",null,e.playpause),o.set("ArrowUp",()=>e.relativeVolume(.1)),o.set("ArrowDown",()=>e.relativeVolume(-.1)),o.set("PageUp",e.prev),o.set("PageDown",e.next),o.set("ArrowLeft",null,()=>e.relativeSeek(-5)),o.set("ArrowRight",(p,y)=>{y===1&&({playbackRate:s}=e.player.video,e.player.speed(3,0))},(p,y)=>{if(y>0){e.player.speed(s,1);return}e.relativeSeek(5)});let d=!1;Ve(st,"visibilitychange",p=>{const{visiblePause:y}=e.playerOptions;switch(p.target.visibilityState){case"visible":y&&d&&e.player.play(),d=!1,e.player.seekDanmaku();break;case"hidden":d=!(e.player.video.paused??!0),y&&d&&e.player.pause();break}},{signal:t}),Ve(window,"beforeunload",p=>{const y=e.player.video.duration;y===y&&p.preventDefault()},{capture:!0,signal:t}),Ca!=null&&(wt("seekbackward",()=>e.relativeSeek(-5)),wt("seekforward",()=>e.relativeSeek(5)),wt("previoustrack",e.prev),wt("nexttrack",e.next),hh(t,p=>{wt("seekbackward",null),wt("seekforward",null),wt("previoustrack",null),wt("nexttrack",null)}))},beforeUnmount(){this.title=null},render(e,t,n,o,s,d){const p=this,y=p.size.split("*");return[z("div",{class:"container",style:"margin:5px auto"},[z(Fo,{gutter:6},t[367]??=()=>[z(ur,{span:12},t[368]??=()=>[z(No,{ref:"input",search:!0,enterButton:"提交",onOnSearch:p.loadVideoFromUrl}),z(cf,{style:"margin-top:6px",ref:"drop",global:!0,accept:"audio/*,video/*",onChange:p.handleChange})]),z(ur,{span:12},t[383]??=()=>[z(hr,{padding:0},t[384]??=()=>[z(Sa,{style:"padding:0px"},t[385]??=()=>[z(et,{title:"　"},t[386]??={extra:()=>z($n,null,t[387]??=()=>[z(qe,{onClick:p.retry},()=>"重试"),z(qe,{onClick:p.options},()=>"设置"),z(qe,{onClick:p.captureImage},()=>"截图"),z(qe,{onClick:p.saveImage},()=>"保存截图")])}),z(pf,{ref:"playList",list:p.list,onPlay:p.loadVideoAndPlay}),z(et,{title:"尺寸"},t[399]??={extra:()=>z(Li,{type:"button",modelValue:p.size,"onUpdate:modelValue"(w){p.size=w}},t[404]??=()=>Array.from(p.sizes,w=>z(Di,{label:w},()=>w)))}),z(et,{title:"快进快退"},t[406]??={extra:()=>z($n,null,t[407]??=()=>Array.from(p.relativeSeeks,w=>{const{value:m,slot:A}=typeof w=="number"?{value:w,slot:String(w)}:w;return z(qe,{onClick(){p.relativeSeek(m)}},()=>A)}))}),z(wf,{ref:"danmaku",file:p.file,title:p.title,onDanmaku:p.handleDanmaku})])])])])]),z(yf,{ref:"player",width:+y[0],height:+y[1]},t[424]??=()=>z(lf,{video:p.player?.video,style:{position:"relative",bottom:"unset"}})),z("div",{class:"container",style:"margin:5px auto 24px"},[z(hr,{style:"width:274px"},t[430]??=()=>z("img",{ref:"image",style:"width:100%",onClick:p.showImage}))])]}});export{Sf as App};
