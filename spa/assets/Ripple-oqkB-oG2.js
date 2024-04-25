import{a as c,c as U,h as p,g as T,R as F,S as Q,d as N,U as H,V as W,Q as X,W as Y}from"./index-D3aQYc6P.js";const G={xs:18,sm:24,md:32,lg:38,xl:46},J={size:String};function Z(e,t=G){return c(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}function ee(e,t){return e!==void 0&&e()||t}function me(e,t){if(e!==void 0){const r=e();if(r!=null)return r.slice()}return t}function C(e,t){return e!==void 0?t.concat(e()):t}function ge(e,t){return e===void 0?t:t!==void 0?t.concat(e()):e()}const O="0 0 24 24",L=e=>e,w=e=>`ionicons ${e}`,D={"mdi-":e=>`mdi ${e}`,"icon-":L,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":w,"ion-ios":w,"ion-logo":w,"iconfont ":L,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},K={o_:"-outlined",r_:"-round",s_:"-sharp"},V={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},te=new RegExp("^("+Object.keys(D).join("|")+")"),ne=new RegExp("^("+Object.keys(K).join("|")+")"),B=new RegExp("^("+Object.keys(V).join("|")+")"),re=/^[Mm]\s?[-+]?\.?\d/,ie=/^img:/,se=/^svguse:/,ae=/^ion-/,oe=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,he=U({name:"QIcon",props:{...J,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:r}}=T(),n=Z(e),s=c(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),u=c(()=>{let a,i=e.name;if(i==="none"||!i)return{none:!0};if(r.iconMapFn!==null){const o=r.iconMapFn(i);if(o!==void 0)if(o.icon!==void 0){if(i=o.icon,i==="none"||!i)return{none:!0}}else return{cls:o.cls,content:o.content!==void 0?o.content:" "}}if(re.test(i)===!0){const[o,d=O]=i.split("|");return{svg:!0,viewBox:d,nodes:o.split("&&").map(y=>{const[m,k,h]=y.split("@@");return p("path",{style:k,d:m,transform:h})})}}if(ie.test(i)===!0)return{img:!0,src:i.substring(4)};if(se.test(i)===!0){const[o,d=O]=i.split("|");return{svguse:!0,src:o.substring(7),viewBox:d}}let g=" ";const f=i.match(te);if(f!==null)a=D[f[1]](i);else if(oe.test(i)===!0)a=i;else if(ae.test(i)===!0)a=`ionicons ion-${r.platform.is.ios===!0?"ios":"md"}${i.substring(3)}`;else if(B.test(i)===!0){a="notranslate material-symbols";const o=i.match(B);o!==null&&(i=i.substring(6),a+=V[o[1]]),g=i}else{a="notranslate material-icons";const o=i.match(ne);o!==null&&(i=i.substring(2),a+=K[o[1]]),g=i}return{cls:a,content:g}});return()=>{const a={class:s.value,style:n.value,"aria-hidden":"true",role:"presentation"};return u.value.none===!0?p(e.tag,a,ee(t.default)):u.value.img===!0?p(e.tag,a,C(t.default,[p("img",{src:u.value.src})])):u.value.svg===!0?p(e.tag,a,C(t.default,[p("svg",{viewBox:u.value.viewBox||"0 0 24 24"},u.value.nodes)])):u.value.svguse===!0?p(e.tag,a,C(t.default,[p("svg",{viewBox:u.value.viewBox},[p("use",{"xlink:href":u.value.src})])])):(u.value.cls!==void 0&&(a.class+=" "+u.value.cls),p(e.tag,a,C(t.default,[u.value.content])))}}});function ue(e){return e.appContext.config.globalProperties.$router!==void 0}function ye(e){return e.isUnmounted===!0||e.isDeactivated===!0}function M(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function P(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function le(e,t){for(const r in t){const n=t[r],s=e[r];if(typeof n=="string"){if(n!==s)return!1}else if(Array.isArray(s)===!1||s.length!==n.length||n.some((u,a)=>u!==s[a]))return!1}return!0}function j(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((r,n)=>r===t[n]):e.length===1&&e[0]===t}function ce(e,t){return Array.isArray(e)===!0?j(e,t):Array.isArray(t)===!0?j(t,e):e===t}function fe(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if(ce(e[r],t[r])===!1)return!1;return!0}const ke={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function xe({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const r=T(),{props:n,proxy:s,emit:u}=r,a=ue(r),i=c(()=>n.disable!==!0&&n.href!==void 0),g=t===!0?c(()=>a===!0&&n.disable!==!0&&i.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):c(()=>a===!0&&i.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),f=c(()=>g.value===!0?E(n.to):null),o=c(()=>f.value!==null),d=c(()=>i.value===!0||o.value===!0),y=c(()=>n.type==="a"||d.value===!0?"a":n.tag||e||"div"),m=c(()=>i.value===!0?{href:n.href,target:n.target}:o.value===!0?{href:f.value.href,target:n.target}:{}),k=c(()=>{if(o.value===!1)return-1;const{matched:l}=f.value,{length:v}=l,x=l[v-1];if(x===void 0)return-1;const $=s.$route.matched;if($.length===0)return-1;const b=$.findIndex(P.bind(null,x));if(b!==-1)return b;const A=M(l[v-2]);return v>1&&M(x)===A&&$[$.length-1].path!==A?$.findIndex(P.bind(null,l[v-2])):b}),h=c(()=>o.value===!0&&k.value!==-1&&le(s.$route.params,f.value.params)),_=c(()=>h.value===!0&&k.value===s.$route.matched.length-1&&fe(s.$route.params,f.value.params)),q=c(()=>o.value===!0?_.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":h.value===!0?` ${n.activeClass}`:"":"");function E(l){try{return s.$router.resolve(l)}catch{}return null}function R(l,{returnRouterError:v,to:x=n.to,replace:$=n.replace}={}){if(n.disable===!0)return l.preventDefault(),Promise.resolve(!1);if(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey||l.button!==void 0&&l.button!==0||n.target==="_blank")return Promise.resolve(!1);l.preventDefault();const b=s.$router[$===!0?"replace":"push"](x);return v===!0?b:b.then(()=>{}).catch(()=>{})}function S(l){if(o.value===!0){const v=x=>R(l,x);u("click",l,v),l.defaultPrevented!==!0&&v()}else u("click",l)}return{hasRouterLink:o,hasHrefLink:i,hasLink:d,linkTag:y,resolvedLink:f,linkIsActive:h,linkIsExactActive:_,linkClass:q,linkAttrs:m,getLink:E,navigateToRouterLink:R,navigateOnClick:S}}function de(e,t){const r=e.style;for(const n in t)r[n]=t[n]}function $e(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=F(e);if(t)return t.$el||t}function ve(e,t=250){let r=!1,n;return function(){return r===!1&&(r=!0,setTimeout(()=>{r=!1},t),n=e.apply(this,arguments)),n}}function z(e,t,r,n){r.modifiers.stop===!0&&X(e);const s=r.modifiers.color;let u=r.modifiers.center;u=u===!0||n===!0;const a=document.createElement("span"),i=document.createElement("span"),g=Y(e),{left:f,top:o,width:d,height:y}=t.getBoundingClientRect(),m=Math.sqrt(d*d+y*y),k=m/2,h=`${(d-m)/2}px`,_=u?h:`${g.left-f-k}px`,q=`${(y-m)/2}px`,E=u?q:`${g.top-o-k}px`;i.className="q-ripple__inner",de(i,{height:`${m}px`,width:`${m}px`,transform:`translate3d(${_},${E},0) scale3d(.2,.2,1)`,opacity:0}),a.className=`q-ripple${s?" text-"+s:""}`,a.setAttribute("dir","ltr"),a.appendChild(i),t.appendChild(a);const R=()=>{a.remove(),clearTimeout(S)};r.abort.push(R);let S=setTimeout(()=>{i.classList.add("q-ripple__inner--enter"),i.style.transform=`translate3d(${h},${q},0) scale3d(1,1,1)`,i.style.opacity=.2,S=setTimeout(()=>{i.classList.remove("q-ripple__inner--enter"),i.classList.add("q-ripple__inner--leave"),i.style.opacity=0,S=setTimeout(()=>{a.remove(),r.abort.splice(r.abort.indexOf(R),1)},275)},250)},50)}function I(e,{modifiers:t,value:r,arg:n}){const s=Object.assign({},e.cfg.ripple,t,r);e.modifiers={early:s.early===!0,stop:s.stop===!0,center:s.center===!0,color:s.color||n,keyCodes:[].concat(s.keyCodes||13)}}const be=Q({name:"ripple",beforeMount(e,t){const r=t.instance.$.appContext.config.globalProperties.$q.config||{};if(r.ripple===!1)return;const n={cfg:r,enabled:t.value!==!1,modifiers:{},abort:[],start(s){n.enabled===!0&&s.qSkipRipple!==!0&&s.type===(n.modifiers.early===!0?"pointerdown":"click")&&z(s,e,n,s.qKeyEvent===!0)},keystart:ve(s=>{n.enabled===!0&&s.qSkipRipple!==!0&&N(s,n.modifiers.keyCodes)===!0&&s.type===`key${n.modifiers.early===!0?"down":"up"}`&&z(s,e,n,!0)},300)};I(n,t),e.__qripple=n,H(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const r=e.__qripple;r!==void 0&&(r.enabled=t.value!==!1,r.enabled===!0&&Object(t.value)===t.value&&I(r,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(r=>{r()}),W(t,"main"),delete e._qripple)}});export{he as Q,be as R,Z as a,ee as b,C as c,ke as d,xe as e,me as f,de as g,ge as h,$e as i,G as j,J as u,ye as v};
