import{I as X,J as Y,K as W,L as G,M as J,u as K,r as N,N as Q,O as C,P as Z,c as O,Q as ee,R as te,S as se,i as x,l as q,b as ae,T as oe,f as R,h as H,y as c,w as z,m as F,F as I,p as D,j}from"./index-1be14933.js";import{e as re,c as k,P as ie,A as le,S as ne,a as ce}from"./effect-init-ef81a420.js";import{V as de,a as ue}from"./VRow-a3c634ac.js";/* empty css              */function pe(f){return Math.floor(Math.abs(f))*Math.sign(f)}const he=X({scale:{type:[Number,String],default:.5},...Y()},"VParallax"),fe=W()({name:"VParallax",props:he(),setup(f,s){let{slots:P}=s;const{intersectionRef:d,isIntersecting:v}=G(),{resizeRef:L,contentRect:w}=J(),{height:A}=K(),t=N();Q(()=>{var i;d.value=L.value=(i=t.value)==null?void 0:i.$el});let e;C(v,i=>{i?(e=se(d.value),e=e===document.scrollingElement?document:e,e.addEventListener("scroll",a,{passive:!0}),a()):e.removeEventListener("scroll",a)}),Z(()=>{e==null||e.removeEventListener("scroll",a)}),C(A,a),C(()=>{var i;return(i=w.value)==null?void 0:i.height},a);const r=O(()=>1-ee(+f.scale));let o=-1;function a(){v.value&&(cancelAnimationFrame(o),o=requestAnimationFrame(()=>{var M;const i=((M=t.value)==null?void 0:M.$el).querySelector(".v-img__img");if(!i)return;const l=e instanceof Document?document.documentElement.clientHeight:e.clientHeight,S=e instanceof Document?window.scrollY:e.scrollTop,p=d.value.getBoundingClientRect().top+S,u=w.value.height,B=p+(u-l)/2,b=pe((S-B)*r.value),n=Math.max(1,(r.value*(l-u)+u)/u);i.style.setProperty("transform",`translateY(${b}px) scale(${n})`)}))}return te(()=>x(q,{class:["v-parallax",{"v-parallax--active":v.value},f.class],style:f.style,ref:t,cover:!0,onLoadstart:a,onLoad:a},P)),{}}}),we=""+new URL("71b8e0fl_cL._AC_SL1500-69da0696.jpg",import.meta.url).href,me=""+new URL("littorio004-b9b931e0.jpg",import.meta.url).href,ge=""+new URL("aqa-798f44e5.png",import.meta.url).href;function ve(f){let{swiper:s,extendParams:P,on:d}=f;P({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const v=(t,e,r)=>{let o=r?t.querySelector(".swiper-slide-shadow-left"):t.querySelector(".swiper-slide-shadow-top"),a=r?t.querySelector(".swiper-slide-shadow-right"):t.querySelector(".swiper-slide-shadow-bottom");o||(o=k("div",`swiper-slide-shadow-cube swiper-slide-shadow-${r?"left":"top"}`.split(" ")),t.append(o)),a||(a=k("div",`swiper-slide-shadow-cube swiper-slide-shadow-${r?"right":"bottom"}`.split(" ")),t.append(a)),o&&(o.style.opacity=Math.max(-e,0)),a&&(a.style.opacity=Math.max(e,0))};re({effect:"cube",swiper:s,on:d,setTranslate:()=>{const{el:t,wrapperEl:e,slides:r,width:o,height:a,rtlTranslate:i,size:l,browser:S}=s,p=s.params.cubeEffect,u=s.isHorizontal(),B=s.virtual&&s.params.virtual.enabled;let b=0,n;p.shadow&&(u?(n=s.wrapperEl.querySelector(".swiper-cube-shadow"),n||(n=k("div","swiper-cube-shadow"),s.wrapperEl.append(n)),n.style.height=`${o}px`):(n=t.querySelector(".swiper-cube-shadow"),n||(n=k("div","swiper-cube-shadow"),t.append(n))));for(let y=0;y<r.length;y+=1){const $=r[y];let h=y;B&&(h=parseInt($.getAttribute("data-swiper-slide-index"),10));let m=h*90,_=Math.floor(m/360);i&&(m=-m,_=Math.floor(-m/360));const E=Math.max(Math.min($.progress,1),-1);let g=0,T=0,V=0;h%4===0?(g=-_*4*l,V=0):(h-1)%4===0?(g=0,V=-_*4*l):(h-2)%4===0?(g=l+_*4*l,V=l):(h-3)%4===0&&(g=-l,V=3*l+l*4*_),i&&(g=-g),u||(T=g,g=0);const U=`rotateX(${u?0:-m}deg) rotateY(${u?m:0}deg) translate3d(${g}px, ${T}px, ${V}px)`;E<=1&&E>-1&&(b=h*90+E*90,i&&(b=-h*90-E*90)),$.style.transform=U,p.slideShadows&&v($,E,u)}if(e.style.transformOrigin=`50% 50% -${l/2}px`,e.style["-webkit-transform-origin"]=`50% 50% -${l/2}px`,p.shadow)if(u)n.style.transform=`translate3d(0px, ${o/2+p.shadowOffset}px, ${-o/2}px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`;else{const y=Math.abs(b)-Math.floor(Math.abs(b)/90)*90,$=1.5-(Math.sin(y*2*Math.PI/360)/2+Math.cos(y*2*Math.PI/360)/2),h=p.shadowScale,m=p.shadowScale/$,_=p.shadowOffset;n.style.transform=`scale3d(${h}, 1, ${m}) translate3d(0px, ${a/2+_}px, ${-a/2/m}px) rotateX(-90deg)`}const M=(S.isSafari||S.isWebView)&&S.needPerspectiveFix?-l/2:0;e.style.transform=`translate3d(0px,0,${M}px) rotateX(${s.isHorizontal()?0:b}deg) rotateY(${s.isHorizontal()?-b:0}deg)`,e.style.setProperty("--swiper-cube-translate-z",`${M}px`)},setTransition:t=>{const{el:e,slides:r}=s;if(r.forEach(o=>{o.style.transitionDuration=`${t}ms`,o.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(a=>{a.style.transitionDuration=`${t}ms`})}),s.params.cubeEffect.shadow&&!s.isHorizontal()){const o=e.querySelector(".swiper-cube-shadow");o&&(o.style.transitionDuration=`${t}ms`)}},recreateShadows:()=>{const t=s.isHorizontal();s.slides.forEach(e=>{const r=Math.max(Math.min(e.progress,1),-1);v(e,r,t)})},getEffectParams:()=>s.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}const be={class:"bgbox"},ye=c("div",{class:"show"}," 文案等待決定 ",-1),_e=c("div",{class:"bgbox2"},null,-1),xe={id:"section01"},Se={class:"four"},$e={id:"section02"},Pe=c("div",{class:"d-flex flex-column fill-height justify-center align-center text-white"},[c("h1",{class:"text-h4 font-weight-thin mb-4"}," Vuetify "),c("h4",{class:"subheading"}," Build your application today! ")],-1),Me={id:"section03"},Ee={class:"eightwidth"},Ve=["src"],Re=c("section",{id:"footer"},null,-1),Ae={__name:"HomeView",setup(f){const s=[ve,ie,le],P=ae(),d=N([]),v=O(()=>d.value.slice(-3)),L=O(()=>d.value.slice(d.value.length-7,d.value.length-3));return(async()=>{try{const w=await oe.get("/products");d.value.push(...w.data.result)}catch(w){console.log(w),P({text:w.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})(),(w,A)=>(R(),H(I,null,[c("div",be,[ye,x(q,{class:"mainimg",src:we,cover:""})]),_e,c("section",xe,[c("div",Se,[x(de,null,{default:z(()=>[(R(!0),H(I,null,D(v.value,t=>(R(),j(ue,{cols:"12",md:"4",class:"d-flex align-center text",key:t._id},{default:z(()=>[x(q,{class:"textimg",src:t.images[0],cover:""},null,8,["src"])]),_:2},1024))),128))]),_:1})])]),c("section",$e,[x(fe,{src:me},{default:z(()=>[Pe]),_:1})]),c("section",Me,[c("div",Ee,[x(F(ne),{effect:"cube",grabCursor:!0,cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94},autoplay:{delay:3500,disableOnInteraction:!1},pagination:!0,modules:s,class:"mySwiper"},{default:z(()=>[(R(!0),H(I,null,D(L.value,t=>(R(),j(F(ce),{key:t._id},{default:z(()=>[c("img",{style:{"object-fit":"cover",height:"100%",width:"100%"},src:t.images[0]},null,8,Ve)]),_:2},1024))),128))]),_:1}),x(q,{src:ge,class:"photo"})])]),Re],64))}};export{Ae as default};
