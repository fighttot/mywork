import{_ as X}from"./71b8e0fl_cL._AC_SL1500-811e8b6d.js";import{I as Y,J as K,K as G,L as J,M as Q,u as Z,r as W,N as ee,O as B,P as te,c as O,Q as se,R as ae,S as oe,i as g,m as q,b as re,o as ie,T as le,U as ne,e as ce,f as z,h as I,x as r,w as S,l as F,F as A,W as de,n as N,j}from"./index-ae1eb014.js";import{g as H}from"./index-4db78ffb.js";import{S as ue}from"./ScrollTrigger-c3252e56.js";import{e as pe,c as T,P as fe,A as he,S as me,a as we}from"./effect-init-93642b26.js";import{V as ge,a as be}from"./VRow-2b1c7ed1.js";/* empty css              */function xe(h){return Math.floor(Math.abs(h))*Math.sign(h)}const ye=Y({scale:{type:[Number,String],default:.5},...K()},"VParallax"),_e=G()({name:"VParallax",props:ye(),setup(h,s){let{slots:M}=s;const{intersectionRef:d,isIntersecting:b}=J(),{resizeRef:C,contentRect:E}=Q(),{height:x}=Z(),t=W();ee(()=>{var l;d.value=C.value=(l=t.value)==null?void 0:l.$el});let e;B(b,l=>{l?(e=oe(d.value),e=e===document.scrollingElement?document:e,e.addEventListener("scroll",a,{passive:!0}),a()):e.removeEventListener("scroll",a)}),te(()=>{e==null||e.removeEventListener("scroll",a)}),B(x,a),B(()=>{var l;return(l=E.value)==null?void 0:l.height},a);const i=O(()=>1-se(+h.scale));let o=-1;function a(){b.value&&(cancelAnimationFrame(o),o=requestAnimationFrame(()=>{var k;const l=((k=t.value)==null?void 0:k.$el).querySelector(".v-img__img");if(!l)return;const n=e instanceof Document?document.documentElement.clientHeight:e.clientHeight,$=e instanceof Document?window.scrollY:e.scrollTop,p=d.value.getBoundingClientRect().top+$,u=E.value.height,L=p+(u-n)/2,y=xe(($-L)*i.value),c=Math.max(1,(i.value*(n-u)+u)/u);l.style.setProperty("transform",`translateY(${y}px) scale(${c})`)}))}return ae(()=>g(q,{class:["v-parallax",{"v-parallax--active":b.value},h.class],style:h.style,ref:t,cover:!0,onLoadstart:a,onLoad:a},M)),{}}}),ve=""+new URL("littorio004-b9b931e0.jpg",import.meta.url).href,Se=""+new URL("aqa-798f44e5.png",import.meta.url).href;function $e(h){let{swiper:s,extendParams:M,on:d}=h;M({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const b=(t,e,i)=>{let o=i?t.querySelector(".swiper-slide-shadow-left"):t.querySelector(".swiper-slide-shadow-top"),a=i?t.querySelector(".swiper-slide-shadow-right"):t.querySelector(".swiper-slide-shadow-bottom");o||(o=T("div",`swiper-slide-shadow-cube swiper-slide-shadow-${i?"left":"top"}`.split(" ")),t.append(o)),a||(a=T("div",`swiper-slide-shadow-cube swiper-slide-shadow-${i?"right":"bottom"}`.split(" ")),t.append(a)),o&&(o.style.opacity=Math.max(-e,0)),a&&(a.style.opacity=Math.max(e,0))};pe({effect:"cube",swiper:s,on:d,setTranslate:()=>{const{el:t,wrapperEl:e,slides:i,width:o,height:a,rtlTranslate:l,size:n,browser:$}=s,p=s.params.cubeEffect,u=s.isHorizontal(),L=s.virtual&&s.params.virtual.enabled;let y=0,c;p.shadow&&(u?(c=s.wrapperEl.querySelector(".swiper-cube-shadow"),c||(c=T("div","swiper-cube-shadow"),s.wrapperEl.append(c)),c.style.height=`${o}px`):(c=t.querySelector(".swiper-cube-shadow"),c||(c=T("div","swiper-cube-shadow"),t.append(c))));for(let _=0;_<i.length;_+=1){const P=i[_];let f=_;L&&(f=parseInt(P.getAttribute("data-swiper-slide-index"),10));let m=f*90,v=Math.floor(m/360);l&&(m=-m,v=Math.floor(-m/360));const V=Math.max(Math.min(P.progress,1),-1);let w=0,D=0,R=0;f%4===0?(w=-v*4*n,R=0):(f-1)%4===0?(w=0,R=-v*4*n):(f-2)%4===0?(w=n+v*4*n,R=n):(f-3)%4===0&&(w=-n,R=3*n+n*4*v),l&&(w=-w),u||(D=w,w=0);const U=`rotateX(${u?0:-m}deg) rotateY(${u?m:0}deg) translate3d(${w}px, ${D}px, ${R}px)`;V<=1&&V>-1&&(y=f*90+V*90,l&&(y=-f*90-V*90)),P.style.transform=U,p.slideShadows&&b(P,V,u)}if(e.style.transformOrigin=`50% 50% -${n/2}px`,e.style["-webkit-transform-origin"]=`50% 50% -${n/2}px`,p.shadow)if(u)c.style.transform=`translate3d(0px, ${o/2+p.shadowOffset}px, ${-o/2}px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`;else{const _=Math.abs(y)-Math.floor(Math.abs(y)/90)*90,P=1.5-(Math.sin(_*2*Math.PI/360)/2+Math.cos(_*2*Math.PI/360)/2),f=p.shadowScale,m=p.shadowScale/P,v=p.shadowOffset;c.style.transform=`scale3d(${f}, 1, ${m}) translate3d(0px, ${a/2+v}px, ${-a/2/m}px) rotateX(-90deg)`}const k=($.isSafari||$.isWebView)&&$.needPerspectiveFix?-n/2:0;e.style.transform=`translate3d(0px,0,${k}px) rotateX(${s.isHorizontal()?0:y}deg) rotateY(${s.isHorizontal()?-y:0}deg)`,e.style.setProperty("--swiper-cube-translate-z",`${k}px`)},setTransition:t=>{const{el:e,slides:i}=s;if(i.forEach(o=>{o.style.transitionDuration=`${t}ms`,o.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(a=>{a.style.transitionDuration=`${t}ms`})}),s.params.cubeEffect.shadow&&!s.isHorizontal()){const o=e.querySelector(".swiper-cube-shadow");o&&(o.style.transitionDuration=`${t}ms`)}},recreateShadows:()=>{const t=s.isHorizontal();s.slides.forEach(e=>{const i=Math.max(Math.min(e.progress,1),-1);b(e,i,t)})},getEffectParams:()=>s.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}const Pe={class:"bgbox"},Me=r("div",{class:"show"}," 文案等待決定 ",-1),Ee=r("div",{class:"bgbox2"},null,-1),ke={class:"section01"},Ve=r("div",{class:"text-center photo3title"},[r("p",null,"NEW PICK")],-1),Re={class:"four"},ze={class:"text"},Ce={class:"section02"},He=r("div",{class:"d-flex flex-column fill-height justify-center align-center text-white"},[r("h1",{class:"text-h4 font-weight-thin mb-4"}," Vuetify "),r("h4",{class:"subheading"}," Build your application today! ")],-1),Te={class:"section03"},qe={class:"eightwidth"},Le=["src"],Be=de('<div class="d-flex flex-column justify-center align-center cubetext"><span class="cubetextanimate">主</span><span class="cubetextanimate">打</span><span class="cubetextanimate">商</span><span class="cubetextanimate">品</span><span class="cubetextanimate">喲</span><span class="cubetextanimate">!</span></div>',1),Ie=r("section",{class:"homefooter"},null,-1),Ue={__name:"HomeView",setup(h){const s=[$e,fe,he],M=re(),d=W([]),b=O(()=>d.value.slice(-3)),C=O(()=>d.value.slice(d.value.length-7,d.value.length-3));return H.registerPlugin(ue),ie(async()=>{try{const x=await le.get("/products");d.value.push(...x.data.result)}catch(x){console.log(x),M({text:x.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}await ne(),H.from(".photo3",{scrollTrigger:{trigger:".four",start:"top 60%",end:"bottom center"},stagger:{each:.5,from:"start",ease:"back.in(5)"},y:100,opacity:0,duration:1,ease:"back"}),H.from(".photo3title",{scrollTrigger:{trigger:".four",start:"top 70%",end:"bottom center"},y:-100,opacity:0,duration:.5,ease:"back.in(5)"}),H.timeline({repeat:-1,repeatDelay:1,yoyo:!0}).from(".cubetextanimate",{opacity:1,duration:1,yoyo:!0,ease:"none",stagger:1}).to(".cubetextanimate",{opacity:0,duration:1,yoyo:!0,ease:"none",stagger:1},1)}),(E,x)=>{const t=ce("RouterLink");return z(),I(A,null,[r("div",Pe,[Me,g(q,{class:"mainimg",src:X,cover:""})]),Ee,r("section",ke,[Ve,r("div",Re,[g(ge,null,{default:S(()=>[(z(!0),I(A,null,N(b.value,e=>(z(),j(be,{cols:"12",md:"4",class:"d-flex align-center photo3",key:e._id},{default:S(()=>[g(t,{to:/proHome/+e._id,class:"toroup"},{default:S(()=>[r("div",ze,[g(q,{class:"textimg",src:e.images[0],cover:""},null,8,["src"])])]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})])]),r("section",Ce,[g(_e,{src:ve},{default:S(()=>[He]),_:1})]),r("section",Te,[r("div",qe,[g(F(me),{effect:"cube",grabCursor:!0,cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94},speed:1e3,pagination:!0,modules:s,class:"mySwiper"},{default:S(()=>[(z(!0),I(A,null,N(C.value,e=>(z(),j(F(we),{key:e._id},{default:S(()=>[g(t,{to:/proHome/+e._id},{default:S(()=>[r("img",{style:{"object-fit":"cover",height:"100%",width:"100%"},src:e.images[0]},null,8,Le)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1}),g(q,{src:Se,class:"photo"}),Be])]),Ie],64)}}};export{Ue as default};
