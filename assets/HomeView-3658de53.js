import{_ as Z}from"./71b8e0fl_cL._AC_SL1500-811e8b6d.js";import{J as G,K as J,L as K,M as Q,N as ee,u as te,r as W,O as se,P as B,Q as oe,c as A,R as ae,S as re,T as ie,j as l,V as P,a as ne,b as ce,U as le,W as de,X as pe,e as ue,o as q,f as I,i as o,l as y,h as j,Y as D,Z as U,F as X,p as Y,k as F}from"./index-b483b80e.js";import{p as me}from"./parallax-d5961838.js";import{g as u}from"./index-4db78ffb.js";import{e as fe,c as C,S as he,P as ge,A as we,a as be,b as xe}from"./effect-init-19acedcf.js";import{V as ye,a as _e}from"./VRow-0e334d67.js";/* empty css              */function ve(w){return Math.floor(Math.abs(w))*Math.sign(w)}const Se=G({scale:{type:[Number,String],default:.5},...J()},"VParallax"),$e=K()({name:"VParallax",props:Se(),setup(w,r){let{slots:E}=r;const{intersectionRef:v,isIntersecting:m}=Q(),{resizeRef:z,contentRect:M}=ee(),{height:T}=te(),a=W();se(()=>{var t;v.value=z.value=(t=a.value)==null?void 0:t.$el});let e;B(m,t=>{t?(e=ie(v.value),e=e===document.scrollingElement?document:e,e.addEventListener("scroll",s,{passive:!0}),s()):e.removeEventListener("scroll",s)}),oe(()=>{e==null||e.removeEventListener("scroll",s)}),B(T,s),B(()=>{var t;return(t=M.value)==null?void 0:t.height},s);const n=A(()=>1-ae(+w.scale));let i=-1;function s(){m.value&&(cancelAnimationFrame(i),i=requestAnimationFrame(()=>{var L;const t=((L=a.value)==null?void 0:L.$el).querySelector(".v-img__img");if(!t)return;const c=e instanceof Document?document.documentElement.clientHeight:e.clientHeight,d=e instanceof Document?window.scrollY:e.scrollTop,h=v.value.getBoundingClientRect().top+d,f=M.value.height,H=h+(f-c)/2,_=ve((d-H)*n.value),p=Math.max(1,(n.value*(c-f)+f)/f);t.style.setProperty("transform",`translateY(${_}px) scale(${p})`)}))}return re(()=>l(P,{class:["v-parallax",{"v-parallax--active":m.value},w.class],style:w.style,ref:a,cover:!0,onLoadstart:s,onLoad:s},E)),{}}}),Pe=""+new URL("littorio004-b9b931e0.jpg",import.meta.url).href,Me=""+new URL("watame-dance-2c6976d2.gif",import.meta.url).href,Te=""+new URL("takane-lui-hololive-ba5a9428.gif",import.meta.url).href,ke=""+new URL("hololive-beaa6ef6.gif",import.meta.url).href,Ee=""+new URL("aqa-798f44e5.png",import.meta.url).href;function Le(w){let{swiper:r,extendParams:E,on:v}=w;E({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const m=(a,e,n)=>{let i=n?a.querySelector(".swiper-slide-shadow-left"):a.querySelector(".swiper-slide-shadow-top"),s=n?a.querySelector(".swiper-slide-shadow-right"):a.querySelector(".swiper-slide-shadow-bottom");i||(i=C("div",`swiper-slide-shadow-cube swiper-slide-shadow-${n?"left":"top"}`.split(" ")),a.append(i)),s||(s=C("div",`swiper-slide-shadow-cube swiper-slide-shadow-${n?"right":"bottom"}`.split(" ")),a.append(s)),i&&(i.style.opacity=Math.max(-e,0)),s&&(s.style.opacity=Math.max(e,0))};fe({effect:"cube",swiper:r,on:v,setTranslate:()=>{const{el:a,wrapperEl:e,slides:n,width:i,height:s,rtlTranslate:t,size:c,browser:d}=r,h=r.params.cubeEffect,f=r.isHorizontal(),H=r.virtual&&r.params.virtual.enabled;let _=0,p;h.shadow&&(f?(p=r.wrapperEl.querySelector(".swiper-cube-shadow"),p||(p=C("div","swiper-cube-shadow"),r.wrapperEl.append(p)),p.style.height=`${i}px`):(p=a.querySelector(".swiper-cube-shadow"),p||(p=C("div","swiper-cube-shadow"),a.append(p))));for(let S=0;S<n.length;S+=1){const k=n[S];let g=S;H&&(g=parseInt(k.getAttribute("data-swiper-slide-index"),10));let b=g*90,$=Math.floor(b/360);t&&(b=-b,$=Math.floor(-b/360));const V=Math.max(Math.min(k.progress,1),-1);let x=0,O=0,R=0;g%4===0?(x=-$*4*c,R=0):(g-1)%4===0?(x=0,R=-$*4*c):(g-2)%4===0?(x=c+$*4*c,R=c):(g-3)%4===0&&(x=-c,R=3*c+c*4*$),t&&(x=-x),f||(O=x,x=0);const N=`rotateX(${f?0:-b}deg) rotateY(${f?b:0}deg) translate3d(${x}px, ${O}px, ${R}px)`;V<=1&&V>-1&&(_=g*90+V*90,t&&(_=-g*90-V*90)),k.style.transform=N,h.slideShadows&&m(k,V,f)}if(e.style.transformOrigin=`50% 50% -${c/2}px`,e.style["-webkit-transform-origin"]=`50% 50% -${c/2}px`,h.shadow)if(f)p.style.transform=`translate3d(0px, ${i/2+h.shadowOffset}px, ${-i/2}px) rotateX(90deg) rotateZ(0deg) scale(${h.shadowScale})`;else{const S=Math.abs(_)-Math.floor(Math.abs(_)/90)*90,k=1.5-(Math.sin(S*2*Math.PI/360)/2+Math.cos(S*2*Math.PI/360)/2),g=h.shadowScale,b=h.shadowScale/k,$=h.shadowOffset;p.style.transform=`scale3d(${g}, 1, ${b}) translate3d(0px, ${s/2+$}px, ${-s/2/b}px) rotateX(-90deg)`}const L=(d.isSafari||d.isWebView)&&d.needPerspectiveFix?-c/2:0;e.style.transform=`translate3d(0px,0,${L}px) rotateX(${r.isHorizontal()?0:_}deg) rotateY(${r.isHorizontal()?-_:0}deg)`,e.style.setProperty("--swiper-cube-translate-z",`${L}px`)},setTransition:a=>{const{el:e,slides:n}=r;if(n.forEach(i=>{i.style.transitionDuration=`${a}ms`,i.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(s=>{s.style.transitionDuration=`${a}ms`})}),r.params.cubeEffect.shadow&&!r.isHorizontal()){const i=e.querySelector(".swiper-cube-shadow");i&&(i.style.transitionDuration=`${a}ms`)}},recreateShadows:()=>{const a=r.isHorizontal();r.slides.forEach(e=>{const n=Math.max(Math.min(e.progress,1),-1);m(e,n,a)})},getEffectParams:()=>r.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}const Ve={class:"homeview"},Re={class:"bgbox"},qe=o("div",{class:"show"}," 文案等待決定 ",-1),ze={class:"scene"},Ce={class:"imgbox","data-depth":"-0.5"},He={class:"d-flex align-center justify-center fill-height"},Be=o("div",{class:"bgbox2"},null,-1),Ie={class:"section01"},We=o("div",{class:"text-center photo3title"},[o("p",null,"NEW products")],-1),Ae={class:"four"},Oe={class:"text"},je={class:"d-flex align-center justify-center fill-height"},Ue={class:"section02"},Xe=o("div",{class:"d-flex flex-column fill-height justify-center align-center text-white"},[o("h1",{class:"text-h4 font-weight-thin mb-4"}," Vuetify "),o("h4",{class:"subheading"}," Build your application today! ")],-1),Ye=o("div",{class:"hottitle"},[o("h1",null,[o("pre",null,"現  正  熱  銷")])],-1),Fe={class:"section03"},De=D('<div class="d-flex flex-column justify-center align-center cubetexttwo"><span class="cubetextanimate">►</span><span class="cubetextanimate1">可</span><span class="cubetextanimate2">旋</span><span class="cubetextanimate3">轉</span></div>',1),Ne={class:"eightwidth"},Ze=["src"],Ge=D('<div class="d-flex flex-column justify-center align-center cubetextone"><span class="cubetextanimate">主</span><span class="cubetextanimate1">打</span><span class="cubetextanimate2">商</span><span class="cubetextanimate3">品</span><span class="cubetextanimate4">喲</span><span class="cubetextanimate5">!</span></div>',1),Je=o("section",{class:"homefooter"},null,-1),rt={__name:"HomeView",setup(w){const r=ne(),E=[Le,ge,we],v=ce(),m=W([]),z=A(()=>m.value.slice(-3)),M=A(()=>m.value.slice(m.value.length-7,m.value.length-3)),T=W(0),a=()=>{T.value++,T.value>=M.value.length+1&&(console.log(T.value),e())},e=()=>{const n=window.innerWidth;n>1400?(u.from(".imggif.three",{scrollTrigger:{trigger:".section03",start:"bottom top",end:"bottom center"},x:100,opacity:0,duration:3}),u.from(".imggif.one",{scrollTrigger:{trigger:".section03",start:"bottom top",end:"bottom center"},x:-100,opacity:0,duration:3})):n>700?(u.from(".imggif.three",{scrollTrigger:{trigger:".section03",start:"top 35%",end:"bottom center"},x:100,opacity:0,duration:3}),u.from(".imggif.one",{scrollTrigger:{trigger:".section03",start:"top 35%",end:"bottom center"},x:-100,opacity:0,duration:3})):(u.from(".imggif.three",{scrollTrigger:{trigger:".section03",start:"top 60%",end:"bottom center"},x:100,opacity:0,duration:2}),u.from(".imggif.one",{scrollTrigger:{trigger:".section03",start:"top 60%",end:"bottom center"},x:-100,opacity:0,duration:2}))};return u.registerPlugin(he),le(async()=>{try{const d=await de.get("/products");m.value.push(...d.data.result)}catch(d){console.log(d),v({text:d.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom",rounded:"pill",variant:"tonal"}})}r.loding=!1,await pe(),window.innerWidth>1200?u.from(".imggif.two",{scrollTrigger:{trigger:".section03",start:"top 10%",end:"bottom center"},y:100,opacity:0,duration:2}):u.from(".imggif.two",{scrollTrigger:{trigger:".section03",start:"top 50%",end:"bottom center"},y:100,opacity:0,duration:2}),u.from(".photo3",{scrollTrigger:{trigger:".four",start:"top 80%",end:"bottom center"},stagger:{each:.5,from:"start",ease:"back.in(5)"},y:100,opacity:0,duration:1,ease:"back"}),u.from(".photo3title",{scrollTrigger:{trigger:".four",start:"top 90%",end:"bottom center"},y:-100,opacity:0,duration:.5,ease:"back.in(5)"}),u.from(".hottitle",{scrollTrigger:{trigger:".hottitle",start:"top 40%",end:"bottom center"},y:-100,opacity:0,duration:.5,ease:"back.in(5)"}),u.timeline({defaults:{duration:.5,ease:"power1.inOut"},repeat:-1}).to(".cubetextanimate",{opacity:0}).to(".cubetextanimate",{opacity:1}).to(".cubetextanimate1",{opacity:0}).to(".cubetextanimate1",{opacity:1}).to(".cubetextanimate2",{opacity:0}).to(".cubetextanimate2",{opacity:1}).to(".cubetextanimate3",{opacity:0}).to(".cubetextanimate3",{opacity:1}).to(".cubetextanimate4",{opacity:0}).to(".cubetextanimate4",{opacity:1}).to(".cubetextanimate5",{opacity:0}).to(".cubetextanimate5",{opacity:1});const s=document.querySelector(".scene"),t=document.querySelector(".bgbox"),c=new me(s,{scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,limitX:100,limitY:110});c.disable(),t.addEventListener("mouseover",d=>{c.enable()}),t.addEventListener("mouseout",d=>{c.disable()})}),(n,i)=>{const s=ue("RouterLink");return q(),I("section",Ve,[o("div",Re,[qe,o("div",ze,[o("div",Ce,[l(P,{src:Z,cover:""},{placeholder:y(()=>[o("div",He,[l(U,{color:"grey-lighten-4",indeterminate:""})])]),_:1})])])]),Be,o("section",Ie,[We,o("div",Ae,[l(ye,null,{default:y(()=>[(q(!0),I(X,null,Y(z.value,t=>(q(),F(_e,{cols:"12",md:"4",class:"d-flex align-center photo3",key:t._id},{default:y(()=>[l(s,{to:/proHome/+t._id,class:"toroup"},{default:y(()=>[o("div",Oe,[l(P,{class:"textimg",src:t.images[0],cover:""},{placeholder:y(()=>[o("div",je,[l(U,{color:"grey-lighten-4",indeterminate:""})])]),_:2},1032,["src"])])]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})])]),o("section",Ue,[l($e,{src:Pe},{default:y(()=>[Xe]),_:1})]),Ye,o("section",Fe,[l(P,{src:Me,class:"imggif one",cover:""}),l(P,{src:Te,class:"imggif two",cover:""}),l(P,{src:ke,class:"imggif three"}),De,o("div",Ne,[l(j(be),{effect:"cube",grabCursor:!0,cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94},speed:1e3,pagination:!0,modules:E,class:"mySwiper"},{default:y(()=>[(q(!0),I(X,null,Y(M.value,t=>(q(),F(j(xe),{key:t._id},{default:y(()=>[l(s,{to:/proHome/+t._id},{default:y(()=>[o("img",{style:{"object-fit":"cover",height:"100%",width:"100%"},src:t.images[0],onLoad:a},null,40,Ze)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1}),l(P,{src:Ee,class:"photo",onLoad:a}),Ge])]),Je])}}};export{rt as default};
