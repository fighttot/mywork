import{b as $,d as F,a as I,r as L,c as N,H as i,e as P,f as n,h as p,x as t,i as s,w as c,m as g,X as R,F as T,n as j,k as _,D as k,y as m,t as f,a1 as q,a2 as v,j as b,q as x}from"./index-976020d3.js";import{F as z}from"./FooTer-900d56da.js";import{V as A}from"./VContainer-976e0f1d.js";import{V as D,a as h}from"./VRow-0fa14704.js";/* empty css              */const H=""+new URL("Shoukaku-0b94e00c.jpg",import.meta.url).href,U={class:"likeview"},E={class:"othertitle"},X={class:"bgbox"},G=t("div",{class:"bgbox2"},null,-1),J=t("h1",null,"收藏",-1),K=t("thead",null,[t("tr",null,[t("th",null,"圖片"),t("th",null,"名稱"),t("th",null,"單價"),t("th",null,"上架狀態"),t("th",null,"移除")])],-1),M=t("br",null,null,-1),O={key:0,colspan:"6",class:"text-center"},ot={__name:"LikeView",setup(Q){const d=$(),y=F(),u=I(),r=L([]),C=async o=>{try{const{data:l}=await i.post("users/like",{product:o}),a=r.value.findIndex(e=>e.product._id===o);r.value.splice(a,1),u.like=l.result.length}catch(l){console.log(l),d({text:l.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}},w=N(()=>r.value.length>0&&!r.value.some(o=>!o.product.sell)),V=async o=>{try{const l=r.value.findIndex(e=>e.product._id===o);console.log(l);const{data:a}=await i.post("/users/likeoversing",{product:o});r.value.splice(l,1),u.like=a.result.like,u.cart=a.result.cart}catch(l){d({text:l.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}},B=async(o,l)=>{try{const{data:a}=await i.post("/users/likeover");u.like=0,u.cart=a.result,y.push("/cart")}catch(a){console.log(a),d({text:a.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}};return(async()=>{try{const{data:o}=await i.get("/users/like");r.value.push(...o.result)}catch(o){d({text:o.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})(),(o,l)=>{const a=P("router-link");return n(),p("section",U,[t("section",E,[t("div",X,[s(g,{class:"mainimg",src:H,cover:""})]),G]),s(A,null,{default:c(()=>[s(D,null,{default:c(()=>[s(h,{cols:"12"},{default:c(()=>[J]),_:1}),s(h,{cols:"12"},{default:c(()=>[s(R,null,{default:c(()=>[K,t("tbody",null,[(n(!0),p(T,null,j(r.value,e=>(n(),p("tr",{key:e._id,class:q({"bg-red-lighten-5":!e.product.sell})},[t("td",null,[s(g,{src:e.product.images[0],cover:"","aspect-ratio":"1"},null,8,["src"])]),t("td",{style:v(`color: ${e.product.textColor};`)},[s(a,{to:`/proHome/${e.product._id}`},{default:c(()=>[f(k(e.product.name),1)]),_:2},1032,["to"])],4),t("td",{style:v(`background-color: ${e.product.color};`)},k(e.product.price),5),t("td",null,[e.product.sell?(n(),b(x,{key:0,icon:"mdi-check"})):_("",!0),e.product.sell?_("",!0):(n(),b(x,{key:1,icon:"mdi-close"}))]),t("td",null,[s(m,{color:"primary",variant:"text",icon:"mdi-heart-broken",onClick:S=>C(e.product._id)},null,8,["onClick"]),M,e.product.sell?(n(),b(m,{key:0,color:"primary",variant:"text",icon:"mdi-cart",onClick:S=>V(e.product._id)},null,8,["onClick"])):_("",!0)])],2))),128)),t("tr",null,[r.value.length===0?(n(),p("td",O,"沒有收藏")):_("",!0)])])]),_:1})]),_:1}),s(h,{cols:"12",class:"text-center"},{default:c(()=>[t("p",null,"總收藏:"+k(r.value.length),1)]),_:1}),s(h,{cols:"12",class:"text-center"},{default:c(()=>[s(m,{color:"green",onClick:B,disabled:!w.value},{default:c(()=>[f("全部加入購物車")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1}),s(z)])}}};export{ot as default};
