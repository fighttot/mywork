import{_ as W}from"./71b8e0fl_cL._AC_SL1500-811e8b6d.js";import{K as Z,L as G,M as K,N as Q,O as J,u as ee,r as N,P as te,Q as B,R as se,c as I,S as ae,T as oe,U as re,k as p,V as C,a as ie,b as ne,o as ce,W as le,X as de,e as ue,f as q,h as A,j as a,l as b,i as X,Y as pe,Z as Y,F as j,q as F,m as D}from"./index-64fb1acc.js";import{p as he}from"./parallax-8465c74c.js";import{g as R}from"./index-4db78ffb.js";import{S as fe}from"./ScrollTrigger-c3252e56.js";import{e as me,c as z,P as ge,A as we,S as be,a as xe}from"./effect-init-6ba70dd8.js";import{V as _e,a as ye}from"./VRow-040ada0a.js";/* empty css              */function ve(m){return Math.floor(Math.abs(m))*Math.sign(m)}const Se=Z({scale:{type:[Number,String],default:.5},...G()},"VParallax"),$e=K()({name:"VParallax",props:Se(),setup(m,r){let{slots:P}=r;const{intersectionRef:_,isIntersecting:d}=Q(),{resizeRef:L,contentRect:M}=J(),{height:T}=ee(),o=N();te(()=>{var n;_.value=L.value=(n=o.value)==null?void 0:n.$el});let e;B(d,n=>{n?(e=re(_.value),e=e===document.scrollingElement?document:e,e.addEventListener("scroll",i,{passive:!0}),i()):e.removeEventListener("scroll",i)}),se(()=>{e==null||e.removeEventListener("scroll",i)}),B(T,i),B(()=>{var n;return(n=M.value)==null?void 0:n.height},i);const t=I(()=>1-ae(+m.scale));let s=-1;function i(){d.value&&(cancelAnimationFrame(s),s=requestAnimationFrame(()=>{var E;const n=((E=o.value)==null?void 0:E.$el).querySelector(".v-img__img");if(!n)return;const c=e instanceof Document?document.documentElement.clientHeight:e.clientHeight,S=e instanceof Document?window.scrollY:e.scrollTop,h=_.value.getBoundingClientRect().top+S,u=M.value.height,H=h+(u-c)/2,x=ve((S-H)*t.value),l=Math.max(1,(t.value*(c-u)+u)/u);n.style.setProperty("transform",`translateY(${x}px) scale(${l})`)}))}return oe(()=>p(C,{class:["v-parallax",{"v-parallax--active":d.value},m.class],style:m.style,ref:o,cover:!0,onLoadstart:i,onLoad:i},P)),{}}}),Pe=""+new URL("littorio004-b9b931e0.jpg",import.meta.url).href,Me=""+new URL("aqa-798f44e5.png",import.meta.url).href;function Ee(m){let{swiper:r,extendParams:P,on:_}=m;P({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const d=(o,e,t)=>{let s=t?o.querySelector(".swiper-slide-shadow-left"):o.querySelector(".swiper-slide-shadow-top"),i=t?o.querySelector(".swiper-slide-shadow-right"):o.querySelector(".swiper-slide-shadow-bottom");s||(s=z("div",`swiper-slide-shadow-cube swiper-slide-shadow-${t?"left":"top"}`.split(" ")),o.append(s)),i||(i=z("div",`swiper-slide-shadow-cube swiper-slide-shadow-${t?"right":"bottom"}`.split(" ")),o.append(i)),s&&(s.style.opacity=Math.max(-e,0)),i&&(i.style.opacity=Math.max(e,0))};me({effect:"cube",swiper:r,on:_,setTranslate:()=>{const{el:o,wrapperEl:e,slides:t,width:s,height:i,rtlTranslate:n,size:c,browser:S}=r,h=r.params.cubeEffect,u=r.isHorizontal(),H=r.virtual&&r.params.virtual.enabled;let x=0,l;h.shadow&&(u?(l=r.wrapperEl.querySelector(".swiper-cube-shadow"),l||(l=z("div","swiper-cube-shadow"),r.wrapperEl.append(l)),l.style.height=`${s}px`):(l=o.querySelector(".swiper-cube-shadow"),l||(l=z("div","swiper-cube-shadow"),o.append(l))));for(let y=0;y<t.length;y+=1){const $=t[y];let f=y;H&&(f=parseInt($.getAttribute("data-swiper-slide-index"),10));let g=f*90,v=Math.floor(g/360);n&&(g=-g,v=Math.floor(-g/360));const k=Math.max(Math.min($.progress,1),-1);let w=0,O=0,V=0;f%4===0?(w=-v*4*c,V=0):(f-1)%4===0?(w=0,V=-v*4*c):(f-2)%4===0?(w=c+v*4*c,V=c):(f-3)%4===0&&(w=-c,V=3*c+c*4*v),n&&(w=-w),u||(O=w,w=0);const U=`rotateX(${u?0:-g}deg) rotateY(${u?g:0}deg) translate3d(${w}px, ${O}px, ${V}px)`;k<=1&&k>-1&&(x=f*90+k*90,n&&(x=-f*90-k*90)),$.style.transform=U,h.slideShadows&&d($,k,u)}if(e.style.transformOrigin=`50% 50% -${c/2}px`,e.style["-webkit-transform-origin"]=`50% 50% -${c/2}px`,h.shadow)if(u)l.style.transform=`translate3d(0px, ${s/2+h.shadowOffset}px, ${-s/2}px) rotateX(90deg) rotateZ(0deg) scale(${h.shadowScale})`;else{const y=Math.abs(x)-Math.floor(Math.abs(x)/90)*90,$=1.5-(Math.sin(y*2*Math.PI/360)/2+Math.cos(y*2*Math.PI/360)/2),f=h.shadowScale,g=h.shadowScale/$,v=h.shadowOffset;l.style.transform=`scale3d(${f}, 1, ${g}) translate3d(0px, ${i/2+v}px, ${-i/2/g}px) rotateX(-90deg)`}const E=(S.isSafari||S.isWebView)&&S.needPerspectiveFix?-c/2:0;e.style.transform=`translate3d(0px,0,${E}px) rotateX(${r.isHorizontal()?0:x}deg) rotateY(${r.isHorizontal()?-x:0}deg)`,e.style.setProperty("--swiper-cube-translate-z",`${E}px`)},setTransition:o=>{const{el:e,slides:t}=r;if(t.forEach(s=>{s.style.transitionDuration=`${o}ms`,s.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(i=>{i.style.transitionDuration=`${o}ms`})}),r.params.cubeEffect.shadow&&!r.isHorizontal()){const s=e.querySelector(".swiper-cube-shadow");s&&(s.style.transitionDuration=`${o}ms`)}},recreateShadows:()=>{const o=r.isHorizontal();r.slides.forEach(e=>{const t=Math.max(Math.min(e.progress,1),-1);d(e,t,o)})},getEffectParams:()=>r.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}const ke={class:"homeview"},Ve={class:"bgbox"},qe=a("div",{class:"show"}," 文案等待決定 ",-1),Re={class:"scene"},Le={class:"imgbox","data-depth":"-0.5"},Te={class:"d-flex align-center justify-center fill-height"},ze=a("div",{class:"bgbox2"},null,-1),Ce={class:"section01"},He=a("div",{class:"text-center photo3title"},[a("p",null,"NEW products")],-1),Be={class:"four"},Ae={class:"text"},Ie={class:"d-flex align-center justify-center fill-height"},Oe={class:"section02"},Xe=a("div",{class:"d-flex flex-column fill-height justify-center align-center text-white"},[a("h1",{class:"text-h4 font-weight-thin mb-4"}," Vuetify "),a("h4",{class:"subheading"}," Build your application today! ")],-1),Ye=a("div",{class:"hottitle"},[a("h1",null,[a("pre",null,"現  正  熱  銷")])],-1),je={class:"section03"},Fe={class:"eightwidth"},De=["src"],Ne=pe('<div class="d-flex flex-column justify-center align-center cubetext"><span class="cubetextanimate">主</span><span class="cubetextanimate1">打</span><span class="cubetextanimate2">商</span><span class="cubetextanimate3">品</span><span class="cubetextanimate4">喲</span><span class="cubetextanimate5">!</span></div>',1),Ue=a("section",{class:"homefooter"},null,-1),st={__name:"HomeView",setup(m){const r=ie(),P=[Ee,ge,we],_=ne(),d=N([]),L=I(()=>d.value.slice(-3)),M=I(()=>d.value.slice(d.value.length-7,d.value.length-3));return R.registerPlugin(fe),ce(async()=>{try{const s=await le.get("/products");d.value.push(...s.data.result)}catch(s){console.log(s),_({text:s.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom",rounded:"pill",variant:"tonal"}})}r.loding=!1,await de(),R.from(".photo3",{scrollTrigger:{trigger:".four",start:"top 60%",end:"bottom center"},stagger:{each:.5,from:"start",ease:"back.in(5)"},y:100,opacity:0,duration:1,ease:"back"}),R.from(".photo3title",{scrollTrigger:{trigger:".four",start:"top 90%",end:"bottom center"},y:-100,opacity:0,duration:.5,ease:"back.in(5)"}),R.from(".hottitle",{scrollTrigger:{trigger:".hottitle",start:"top 40%",end:"bottom center"},y:-100,opacity:0,duration:.5,ease:"back.in(5)"}),R.timeline({defaults:{duration:.5,ease:"power1.inOut"},repeat:-1}).to(".cubetextanimate",{opacity:0}).to(".cubetextanimate",{opacity:1}).to(".cubetextanimate1",{opacity:0}).to(".cubetextanimate1",{opacity:1}).to(".cubetextanimate2",{opacity:0}).to(".cubetextanimate2",{opacity:1}).to(".cubetextanimate3",{opacity:0}).to(".cubetextanimate3",{opacity:1}).to(".cubetextanimate4",{opacity:0}).to(".cubetextanimate4",{opacity:1}).to(".cubetextanimate5",{opacity:0}).to(".cubetextanimate5",{opacity:1});const o=document.querySelector(".scene"),e=document.querySelector(".bgbox"),t=new he(o,{scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,limitX:100,limitY:110});t.disable(),e.addEventListener("mouseover",s=>{t.enable()}),e.addEventListener("mouseout",s=>{t.disable()})}),(T,o)=>{const e=ue("RouterLink");return q(),A("section",ke,[a("div",Ve,[qe,a("div",Re,[a("div",Le,[p(C,{src:W,cover:""},{placeholder:b(()=>[a("div",Te,[p(Y,{color:"grey-lighten-4",indeterminate:""})])]),_:1})])])]),ze,a("section",Ce,[He,a("div",Be,[p(_e,null,{default:b(()=>[(q(!0),A(j,null,F(L.value,t=>(q(),D(ye,{cols:"12",md:"4",class:"d-flex align-center photo3",key:t._id},{default:b(()=>[p(e,{to:/proHome/+t._id,class:"toroup"},{default:b(()=>[a("div",Ae,[p(C,{class:"textimg",src:t.images[0],cover:""},{placeholder:b(()=>[a("div",Ie,[p(Y,{color:"grey-lighten-4",indeterminate:""})])]),_:2},1032,["src"])])]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})])]),a("section",Oe,[p($e,{src:Pe},{default:b(()=>[Xe]),_:1})]),Ye,a("section",je,[a("div",Fe,[p(X(be),{effect:"cube",grabCursor:!0,cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94},speed:1e3,pagination:!0,modules:P,class:"mySwiper"},{default:b(()=>[(q(!0),A(j,null,F(M.value,t=>(q(),D(X(xe),{key:t._id},{default:b(()=>[p(e,{to:/proHome/+t._id},{default:b(()=>[a("img",{style:{"object-fit":"cover",height:"100%",width:"100%"},src:t.images[0]},null,8,De)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1}),p(C,{src:Me,class:"photo"}),Ne])]),Ue])}}};export{st as default};