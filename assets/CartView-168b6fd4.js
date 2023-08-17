import{b as z,d as A,a as E,r as x,c as T,H as w,o as G,e as J,f as u,h as k,x as t,i as l,w as s,F as I,m as N,X as K,n as O,k as m,D as f,y as i,t as c,Y as Q,B as W,Z as ee,l as r,_ as te,j as y,$ as P,a0 as ae,a1 as le}from"./index-3a082bb1.js";import{c as oe,a as S,u as se,b as B,V as re}from"./index.esm-5d422f84.js";import{F as ne}from"./FooTer-aad8fc6f.js";import{p as ue}from"./parallax-d8efa8a2.js";import{V as de}from"./VContainer-4ae9f498.js";import{V as ie,a as $}from"./VRow-fdee8500.js";/* empty css              */const ce=""+new URL("Zuikaku-ba2da2b0.jpg",import.meta.url).href,pe={class:"cardview"},me={class:"othertitle"},ve={class:"bgbox"},fe={class:"scene"},ye={class:"imgbox","data-depth":"-0.5"},_e=t("div",{class:"bgbox2"},null,-1),he=t("h1",null,"購物車",-1),be=t("thead",null,[t("tr",null,[t("th",null,"圖片"),t("th",null,"名稱"),t("th",null,"單價"),t("th",null,"數量"),t("th",null,"小記"),t("th",null,"操作")])],-1),ke={key:0,colspan:"6",class:"text-center"},qe={__name:"CartView",setup(ge){const _=z(),R=A(),q=E(),n=x([]),v=x(!1),d=x(!0),F=["萊爾富","7-11","全家"],X=["貨到付款現金","貨到付款刷卡"],g=async(o,a)=>{try{const{data:p}=await w.post("users/cart",{product:o,quantity:a}),e=n.value.findIndex(b=>b.product._id===o);n.value[e].quantity+=a,n.value[e].quantity<=0&&n.value.splice(e,1),q.cart=p.result}catch(p){console.log(p),_({text:p.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom",rounded:"pill",variant:"tonal"}})}},D=T(()=>n.value.length>0&&!n.value.some(o=>!o.product.sell)),j=T(()=>n.value.reduce((o,a)=>o+a.quantity*a.product.price,0));(async()=>{try{const{data:o}=await w.get("/users/cart");n.value.push(...o.result)}catch(o){_({text:o.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom",rounded:"pill",variant:"tonal"}})}})();const H=oe({seventhome:S().required("缺少製造商").test("地址錯誤",o=>F.includes(o)),paypoint:S().required("缺少店址"),payway:S().required("缺少付款方式")}),{handleSubmit:L,isSubmitting:Y,handleReset:U}=se({validationSchema:H}),V=B("seventhome"),C=B("paypoint"),h=B("payway"),Z=()=>{h.value.value?d.value=!1:_({text:"請填寫付款方式",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom",rounded:"pill",variant:"tonal"}})},M=L(async o=>{try{await w.post("/orders",{seventhome:o.seventhome+o.paypoint,paywat:o.payway}),q.cart=0,R.push("/orders"),v.value=!1,d.value=!0,U()}catch(a){_({text:a.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom",rounded:"pill",variant:"tonal"}})}});return G(()=>{const o=document.querySelector(".scene");new ue(o,{scalarX:10,frictionX:.1,limitX:100,limitY:0})}),(o,a)=>{const p=J("router-link");return u(),k(I,null,[t("section",pe,[t("section",me,[t("div",ve,[t("div",fe,[t("div",ye,[l(N,{class:"mainimg",src:ce,cover:""})])])]),_e]),l(de,null,{default:s(()=>[l(ie,null,{default:s(()=>[l($,{cols:"12"},{default:s(()=>[he]),_:1}),l($,{cols:"12",class:"cartheight"},{default:s(()=>[l(K,null,{default:s(()=>[be,t("tbody",null,[(u(!0),k(I,null,O(n.value,e=>(u(),k("tr",{key:e._id,class:le({"bg-red-lighten-5":!e.product.sell})},[t("td",null,[l(N,{src:e.product.images[0],cover:"","aspect-ratio":"1"},null,8,["src"])]),t("td",null,[l(p,{to:`/proHome/${e.product._id}`},{default:s(()=>[c(f(e.product.name),1)]),_:2},1032,["to"])]),t("td",null,f(e.product.price),1),t("td",null,[l(i,{color:"primary",variant:"text",icon:"mdi-minus",onClick:b=>g(e.product._id,-1)},null,8,["onClick"]),c(" "+f(e.quantity)+" ",1),l(i,{color:"primary",variant:"text",icon:"mdi-plus",onClick:b=>g(e.product._id,1)},null,8,["onClick"])]),t("td",null,f(e.quantity*e.product.price),1),t("td",null,[l(i,{color:"red",variant:"text",icon:"mdi-delete",onClick:b=>g(e.product._id,e.quantity*-1)},null,8,["onClick"])])],2))),128)),t("tr",null,[n.value.length===0?(u(),k("td",ke,"沒有商品")):m("",!0)])])]),_:1})]),_:1}),l($,{cols:"12",class:"text-center"},{default:s(()=>[t("p",null,"總金額:"+f(j.value),1),l(i,{onClick:a[0]||(a[0]=e=>v.value=!0),color:"secondary"},{default:s(()=>[c("結帳")]),_:1})]),_:1})]),_:1}),l(Q,{modelValue:v.value,"onUpdate:modelValue":a[6]||(a[6]=e=>v.value=e),width:"400px",persistent:""},{default:s(()=>[l(W,{class:"text-center"},{default:s(()=>[l(ee,null,{default:s(()=>[c("結帳資訊")]),_:1}),l(re,{disabled:r(Y),onSubmit:te(r(M),["prevent"])},{default:s(()=>[d.value?m("",!0):(u(),y(P,{key:0,items:F,label:"便利商店貨到付款",modelValue:r(V).value.value,"onUpdate:modelValue":a[1]||(a[1]=e=>r(V).value.value=e),"error-messages":r(V).errorMessage.value},null,8,["modelValue","error-messages"])),d.value?(u(),y(P,{key:1,label:"付款方式?",modelValue:r(h).value.value,"onUpdate:modelValue":a[2]||(a[2]=e=>r(h).value.value=e),"error-messages":r(h).errorMessage.value,items:X},null,8,["modelValue","error-messages"])):m("",!0),d.value?m("",!0):(u(),y(ae,{key:2,label:"哪一家店?",modelValue:r(C).value.value,"onUpdate:modelValue":a[3]||(a[3]=e=>r(C).value.value=e),"error-messages":r(C).errorMessage.value},null,8,["modelValue","error-messages"])),d.value?m("",!0):(u(),y(i,{key:3,onClick:a[4]||(a[4]=e=>d.value=!0)},{default:s(()=>[c("上一步")]),_:1})),d.value?(u(),y(i,{key:4,onClick:Z},{default:s(()=>[c("下一步")]),_:1})):m("",!0),l(i,{color:"green",onClick:r(M),disabled:!D.value},{default:s(()=>[c("結帳")]),_:1},8,["onClick","disabled"]),l(i,{onClick:a[5]||(a[5]=e=>(v.value=!1,r(U)()))},{default:s(()=>[c("取消")]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),l(ne)],64)}}};export{qe as default};
