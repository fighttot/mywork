import{_ as W}from"./71b8e0fl_cL._AC_SL1500-811e8b6d.js";import{I as U,J as G,K as J,L as K,M as Q,u as Z,r as N,N as ee,O as B,P as te,c as I,Q as se,R as ae,S as oe,i as g,m as C,b as re,o as ie,T as ce,U as ne,e as le,f as T,h as A,x as s,w as v,l as F,W as de,F as X,n as Y,j as D}from"./index-7b3d898f.js";import{p as pe}from"./parallax-41e53d5b.js";import{g as q}from"./index-4db78ffb.js";import{S as ue}from"./ScrollTrigger-c3252e56.js";import{e as he,c as H,P as fe,A as me,S as we,a as ge}from"./effect-init-e3e5c697.js";import{V as be,a as xe}from"./VRow-759ad6d2.js";/* empty css              */function _e(f){return Math.floor(Math.abs(f))*Math.sign(f)}const ye=U({scale:{type:[Number,String],default:.5},...G()},"VParallax"),ve=J()({name:"VParallax",props:ye(),setup(f,a){let{slots:P}=a;const{intersectionRef:d,isIntersecting:b}=K(),{resizeRef:z,contentRect:M}=Q(),{height:k}=Z(),t=N();ee(()=>{var c;d.value=z.value=(c=t.value)==null?void 0:c.$el});let e;B(b,c=>{c?(e=oe(d.value),e=e===document.scrollingElement?document:e,e.addEventListener("scroll",o,{passive:!0}),o()):e.removeEventListener("scroll",o)}),te(()=>{e==null||e.removeEventListener("scroll",o)}),B(k,o),B(()=>{var c;return(c=M.value)==null?void 0:c.height},o);const i=I(()=>1-se(+f.scale));let r=-1;function o(){b.value&&(cancelAnimationFrame(r),r=requestAnimationFrame(()=>{var E;const c=((E=t.value)==null?void 0:E.$el).querySelector(".v-img__img");if(!c)return;const n=e instanceof Document?document.documentElement.clientHeight:e.clientHeight,S=e instanceof Document?window.scrollY:e.scrollTop,u=d.value.getBoundingClientRect().top+S,p=M.value.height,L=u+(p-n)/2,x=_e((S-L)*i.value),l=Math.max(1,(i.value*(n-p)+p)/p);c.style.setProperty("transform",`translateY(${x}px) scale(${l})`)}))}return ae(()=>g(C,{class:["v-parallax",{"v-parallax--active":b.value},f.class],style:f.style,ref:t,cover:!0,onLoadstart:o,onLoad:o},P)),{}}}),Se=""+new URL("littorio004-b9b931e0.jpg",import.meta.url).href,$e=""+new URL("aqa-798f44e5.png",import.meta.url).href;function Pe(f){let{swiper:a,extendParams:P,on:d}=f;P({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const b=(t,e,i)=>{let r=i?t.querySelector(".swiper-slide-shadow-left"):t.querySelector(".swiper-slide-shadow-top"),o=i?t.querySelector(".swiper-slide-shadow-right"):t.querySelector(".swiper-slide-shadow-bottom");r||(r=H("div",`swiper-slide-shadow-cube swiper-slide-shadow-${i?"left":"top"}`.split(" ")),t.append(r)),o||(o=H("div",`swiper-slide-shadow-cube swiper-slide-shadow-${i?"right":"bottom"}`.split(" ")),t.append(o)),r&&(r.style.opacity=Math.max(-e,0)),o&&(o.style.opacity=Math.max(e,0))};he({effect:"cube",swiper:a,on:d,setTranslate:()=>{const{el:t,wrapperEl:e,slides:i,width:r,height:o,rtlTranslate:c,size:n,browser:S}=a,u=a.params.cubeEffect,p=a.isHorizontal(),L=a.virtual&&a.params.virtual.enabled;let x=0,l;u.shadow&&(p?(l=a.wrapperEl.querySelector(".swiper-cube-shadow"),l||(l=H("div","swiper-cube-shadow"),a.wrapperEl.append(l)),l.style.height=`${r}px`):(l=t.querySelector(".swiper-cube-shadow"),l||(l=H("div","swiper-cube-shadow"),t.append(l))));for(let _=0;_<i.length;_+=1){const $=i[_];let h=_;L&&(h=parseInt($.getAttribute("data-swiper-slide-index"),10));let m=h*90,y=Math.floor(m/360);c&&(m=-m,y=Math.floor(-m/360));const V=Math.max(Math.min($.progress,1),-1);let w=0,O=0,R=0;h%4===0?(w=-y*4*n,R=0):(h-1)%4===0?(w=0,R=-y*4*n):(h-2)%4===0?(w=n+y*4*n,R=n):(h-3)%4===0&&(w=-n,R=3*n+n*4*y),c&&(w=-w),p||(O=w,w=0);const j=`rotateX(${p?0:-m}deg) rotateY(${p?m:0}deg) translate3d(${w}px, ${O}px, ${R}px)`;V<=1&&V>-1&&(x=h*90+V*90,c&&(x=-h*90-V*90)),$.style.transform=j,u.slideShadows&&b($,V,p)}if(e.style.transformOrigin=`50% 50% -${n/2}px`,e.style["-webkit-transform-origin"]=`50% 50% -${n/2}px`,u.shadow)if(p)l.style.transform=`translate3d(0px, ${r/2+u.shadowOffset}px, ${-r/2}px) rotateX(90deg) rotateZ(0deg) scale(${u.shadowScale})`;else{const _=Math.abs(x)-Math.floor(Math.abs(x)/90)*90,$=1.5-(Math.sin(_*2*Math.PI/360)/2+Math.cos(_*2*Math.PI/360)/2),h=u.shadowScale,m=u.shadowScale/$,y=u.shadowOffset;l.style.transform=`scale3d(${h}, 1, ${m}) translate3d(0px, ${o/2+y}px, ${-o/2/m}px) rotateX(-90deg)`}const E=(S.isSafari||S.isWebView)&&S.needPerspectiveFix?-n/2:0;e.style.transform=`translate3d(0px,0,${E}px) rotateX(${a.isHorizontal()?0:x}deg) rotateY(${a.isHorizontal()?-x:0}deg)`,e.style.setProperty("--swiper-cube-translate-z",`${E}px`)},setTransition:t=>{const{el:e,slides:i}=a;if(i.forEach(r=>{r.style.transitionDuration=`${t}ms`,r.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(o=>{o.style.transitionDuration=`${t}ms`})}),a.params.cubeEffect.shadow&&!a.isHorizontal()){const r=e.querySelector(".swiper-cube-shadow");r&&(r.style.transitionDuration=`${t}ms`)}},recreateShadows:()=>{const t=a.isHorizontal();a.slides.forEach(e=>{const i=Math.max(Math.min(e.progress,1),-1);b(e,i,t)})},getEffectParams:()=>a.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}const Me={class:"homeview"},ke={class:"bgbox"},Ee=s("div",{class:"show"}," 文案等待決定 ",-1),Ve={class:"scene"},Re={class:"imgbox","data-depth":"0.5"},Te=s("div",{class:"bgbox2"},null,-1),qe={class:"section01"},ze=s("div",{class:"text-center photo3title"},[s("p",null,"NEW products")],-1),He={class:"four"},Ce={class:"text"},Le={class:"section02"},Be=s("div",{class:"d-flex flex-column fill-height justify-center align-center text-white"},[s("h1",{class:"text-h4 font-weight-thin mb-4"}," Vuetify "),s("h4",{class:"subheading"}," Build your application today! ")],-1),Ae=s("div",{class:"hottitle"},[s("h1",null,[s("pre",null,"現  正  熱  銷")])],-1),Ie={class:"section03"},Oe={class:"eightwidth"},Fe=["src"],Xe=de('<div class="d-flex flex-column justify-center align-center cubetext"><span class="cubetextanimate">主</span><span class="cubetextanimate1">打</span><span class="cubetextanimate2">商</span><span class="cubetextanimate3">品</span><span class="cubetextanimate4">喲</span><span class="cubetextanimate5">!</span></div>',1),Ye=s("section",{class:"homefooter"},null,-1),Qe={__name:"HomeView",setup(f){const a=[Pe,fe,me],P=re(),d=N([]),b=I(()=>d.value.slice(-3)),z=I(()=>d.value.slice(d.value.length-7,d.value.length-3));return q.registerPlugin(ue),ie(async()=>{try{const t=await ce.get("/products");d.value.push(...t.data.result)}catch(t){console.log(t),P({text:t.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom",rounded:"pill",variant:"tonal"}})}await ne(),q.from(".photo3",{scrollTrigger:{trigger:".four",start:"top 60%",end:"bottom center"},stagger:{each:.5,from:"start",ease:"back.in(5)"},y:100,opacity:0,duration:1,ease:"back"}),q.from(".photo3title",{scrollTrigger:{trigger:".four",start:"top 90%",end:"bottom center"},y:-100,opacity:0,duration:.5,ease:"back.in(5)"}),q.from(".hottitle",{scrollTrigger:{trigger:".hottitle",start:"top 40%",end:"bottom center"},y:-100,opacity:0,duration:.5,ease:"back.in(5)"}),q.timeline({defaults:{duration:.5,ease:"power1.inOut"},repeat:-1}).to(".cubetextanimate",{opacity:0}).to(".cubetextanimate",{opacity:1}).to(".cubetextanimate1",{opacity:0}).to(".cubetextanimate1",{opacity:1}).to(".cubetextanimate2",{opacity:0}).to(".cubetextanimate2",{opacity:1}).to(".cubetextanimate3",{opacity:0}).to(".cubetextanimate3",{opacity:1}).to(".cubetextanimate4",{opacity:0}).to(".cubetextanimate4",{opacity:1}).to(".cubetextanimate5",{opacity:0}).to(".cubetextanimate5",{opacity:1});const k=document.querySelector(".scene");new pe(k,{scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,limitX:100,limitY:100})}),(M,k)=>{const t=le("RouterLink");return T(),A("section",Me,[s("div",ke,[Ee,s("div",Ve,[s("div",Re,[g(C,{src:W,cover:""})])])]),Te,s("section",qe,[ze,s("div",He,[g(be,null,{default:v(()=>[(T(!0),A(X,null,Y(b.value,e=>(T(),D(xe,{cols:"12",md:"4",class:"d-flex align-center photo3",key:e._id},{default:v(()=>[g(t,{to:/proHome/+e._id,class:"toroup"},{default:v(()=>[s("div",Ce,[g(C,{class:"textimg",src:e.images[0],cover:""},null,8,["src"])])]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})])]),s("section",Le,[g(ve,{src:Se},{default:v(()=>[Be]),_:1})]),Ae,s("section",Ie,[s("div",Oe,[g(F(we),{effect:"cube",grabCursor:!0,cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94},speed:1e3,pagination:!0,modules:a,class:"mySwiper"},{default:v(()=>[(T(!0),A(X,null,Y(z.value,e=>(T(),D(F(ge),{key:e._id},{default:v(()=>[g(t,{to:/proHome/+e._id},{default:v(()=>[s("img",{style:{"object-fit":"cover",height:"100%",width:"100%"},src:e.images[0]},null,8,Fe)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1}),g(C,{src:$e,class:"photo"}),Xe])]),Ye])}}};export{Qe as default};
