import{b as L,V as I}from"./VToolbar-41112841.js";import{J as w,r as x,ai as B,c as u,R,P,U as _,Q as E,au as M,L as C,aa as U,av as $,aw as z,ax as H,ay as T,S as N,j as h,B as k,O as F,az as Y,z as D,aA as J,K,aB as O,aC as X,aD as j,aE as q,aF as G,aG as Q,aH as W,aI as Z,aJ as ee,aK as ae,aL as te,aM as le,aN as oe,w as se,v as ne,s as re}from"./index-ddf786aa.js";const ue=w({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function ie(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:r}=n;let c=0;const o=x(null),a=B(0),v=B(0),i=B(0),g=B(!1),f=B(!1),l=u(()=>Number(e.scrollThreshold)),S=u(()=>R((l.value-a.value)/l.value||0)),d=()=>{const s=o.value;!s||r&&!r.value||(c=a.value,a.value="window"in s?s.pageYOffset:s.scrollTop,f.value=a.value<c,i.value=Math.abs(a.value-l.value))};return P(f,()=>{v.value=v.value||a.value}),P(g,()=>{v.value=0}),_(()=>{P(()=>e.scrollTarget,s=>{var b;const m=s?document.querySelector(s):window;m&&m!==o.value&&((b=o.value)==null||b.removeEventListener("scroll",d),o.value=m,o.value.addEventListener("scroll",d,{passive:!0}))},{immediate:!0})}),E(()=>{var s;(s=o.value)==null||s.removeEventListener("scroll",d)}),r&&P(r,d,{immediate:!0}),{scrollThreshold:l,currentScroll:a,currentThreshold:i,isScrollActive:g,scrollRatio:S,isScrollingUp:f,savedScroll:v}}const ce=w({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...L(),...M(),...ue(),height:{type:[Number,String],default:64}},"VAppBar"),fe=C()({name:"VAppBar",props:ce(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:r}=n;const c=x(),o=U(e,"modelValue"),a=u(()=>{var V;const t=new Set(((V=e.scrollBehavior)==null?void 0:V.split(" "))??[]);return{hide:t.has("hide"),inverted:t.has("inverted"),collapse:t.has("collapse"),elevate:t.has("elevate"),fadeImage:t.has("fade-image")}}),v=u(()=>{const t=a.value;return t.hide||t.inverted||t.collapse||t.elevate||t.fadeImage||!o.value}),{currentScroll:i,scrollThreshold:g,isScrollingUp:f,scrollRatio:l}=ie(e,{canScroll:v}),S=u(()=>e.collapse||a.value.collapse&&(a.value.inverted?l.value>0:l.value===0)),d=u(()=>e.flat||a.value.elevate&&(a.value.inverted?i.value>0:i.value===0)),s=u(()=>a.value.fadeImage?a.value.inverted?1-l.value:l.value:void 0),m=u(()=>{var p,A;if(a.value.hide&&a.value.inverted)return 0;const t=((p=c.value)==null?void 0:p.contentHeight)??0,V=((A=c.value)==null?void 0:A.extensionHeight)??0;return t+V});$(u(()=>!!e.scrollBehavior),()=>{F(()=>{a.value.hide?a.value.inverted?o.value=i.value>g.value:o.value=f.value||i.value<g.value:o.value=!0})});const{ssrBootStyles:b}=z(),{layoutItemStyles:y}=H({id:e.name,order:u(()=>parseInt(e.order,10)),position:T(e,"location"),layoutSize:m,elementSize:B(void 0),active:o,absolute:T(e,"absolute")});return N(()=>{const[t]=I.filterProps(e);return h(I,k({ref:c,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...y.value,"--v-toolbar-image-opacity":s.value,height:void 0,...b.value},e.style]},t,{collapse:S.value,flat:d.value}),r)}),{}}}),ve=w({...Y({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),be=C()({name:"VAppBarNavIcon",props:ve(),setup(e,n){let{slots:r}=n;return N(()=>h(D,k(e,{class:["v-app-bar-nav-icon"]}),r)),{}}});const de=w({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:J,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...K(),...O({location:"top end"}),...X(),...j(),...q(),...G({transition:"scale-rotate-transition"})},"VBadge"),he=C()({name:"VBadge",inheritAttrs:!1,props:de(),setup(e,n){const{backgroundColorClasses:r,backgroundColorStyles:c}=Q(T(e,"color")),{roundedClasses:o}=W(e),{t:a}=Z(),{textColorClasses:v,textColorStyles:i}=ee(T(e,"textColor")),{themeClasses:g}=ae(),{locationStyles:f}=te(e,!0,l=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(l)?+(e.offsetY??0):["left","right"].includes(l)?+(e.offsetX??0):0));return N(()=>{const l=Number(e.content),S=!e.max||isNaN(l)?e.content:l<=+e.max?l:`${e.max}+`,[d,s]=le(n.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return h(e.tag,k({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},s,{style:e.style}),{default:()=>{var m,b;return[h("div",{class:"v-badge__wrapper"},[(b=(m=n.slots).default)==null?void 0:b.call(m),h(oe,{transition:e.transition},{default:()=>{var y,t;return[se(h("span",k({class:["v-badge__badge",g.value,r.value,o.value,v.value],style:[c.value,i.value,e.inline?{}:f.value],"aria-atomic":"true","aria-label":a(e.label,l),"aria-live":"polite",role:"status"},d),[e.dot?void 0:n.slots.badge?(t=(y=n.slots).badge)==null?void 0:t.call(y):e.icon?h(re,{icon:e.icon},null):S]),[[ne,e.modelValue]])]}})])]}})}),{}}}),Se=""+new URL("gawr-gura-gura-a143a6e4.gif",import.meta.url).href;export{fe as V,Se as _,he as a,be as b};
