import{_ as l}from"./71b8e0fl_cL._AC_SL1500-811e8b6d.js";import{g as t}from"./index-4db78ffb.js";import{p as m}from"./parallax-41e53d5b.js";import{o as u,e as _,f as h,h as p,x as o,i as s,w as a,m as c,F as f,t as i}from"./index-7b3d898f.js";const v=""+new URL("shamain-ad7b49b7.png",import.meta.url).href,x={class:"ManufacturersView"},b={class:"othertitle"},g={class:"bgbox"},k={class:"scene"},w={class:"imgbox","data-depth":"-0.5"},M=o("div",{class:"bgbox2"},null,-1),y={class:"bocheigh"},V={class:"Mautext Mbox1"},L={class:"Mautext Mbox2"},Y={class:"Mautext Mbox3"},H={class:"Mautext Mbox4"},S=o("div",{class:"introduce"},null,-1),W=o("section",{class:"Manfooter"},null,-1),q={__name:"ManufacturersView",setup(X){return t.set(".bocheigh",{perspective:300}),u(()=>{t.timeline({defaults:{duration:1,ease:"power1.inOut(5)"},repeat:-1}).to(".shamiko",{y:-100}).to(".shamiko",{y:0});const n=document.querySelector(".shamiko");n.addEventListener("mouseover",d=>{window.innerWidth>1300?t.to(".shamiko",{x:-200,scale:1.3,duration:1,ease:"circ"}):t.to(".shamiko",{scale:1.3,duration:1,ease:"circ"}),t.to(".introduce",{opacity:1,rotationX:30,rotationY:190,duration:2,transformOrigin:"0% 50% -100",ease:"back",stagger:.1})}),n.addEventListener("mouseout",d=>{t.to(".shamiko",{x:0,scale:1,duration:1,ease:"circ"}),t.to(".introduce",{opacity:0,duration:2,ease:"back",rotationY:0})});const e=document.querySelector(".scene");new m(e,{scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,limitX:100,limitY:100})}),(r,n)=>{const e=_("RouterLink");return h(),p(f,null,[o("section",x,[o("section",b,[o("div",g,[o("div",k,[o("div",w,[s(c,{class:"mainimg",src:l,cover:""})])])]),M]),o("section",y,[o("div",V,[o("div",null,[s(e,{to:"/proHome/mimeyoi"},{default:a(()=>[i(" > more")]),_:1})])]),o("div",L,[o("div",null,[s(e,{to:"/proHome/alter"},{default:a(()=>[i(" > more")]),_:1})])]),o("div",Y,[o("div",null,[s(e,{to:"/proHome/daiki"},{default:a(()=>[i(" > more")]),_:1})])]),o("div",H,[o("div",null,[s(e,{to:"/proHome/goodsmile"},{default:a(()=>[i(" > more")]),_:1})])]),s(c,{src:v,class:"shamiko"},{default:a(()=>[S]),_:1})])]),W],64)}}};export{q as default};