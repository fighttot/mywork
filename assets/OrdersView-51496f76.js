import{b,r as g,H as h,f as c,j as y,w as s,i as r,W as V,x as t,h as d,n as _,F as p,D as n,y as w,t as x}from"./index-045adae1.js";import{V as v}from"./VContainer-953a3727.js";import{a as k,V as B}from"./VRow-76dcefdf.js";/* empty css              */const C=t("h1",null,"訂單",-1),D=t("thead",null,[t("tr",null,[t("th",null,"ID"),t("th",null,"日期"),t("th",null,"金額"),t("th",null,"商品"),t("th",null,"狀態"),t("th",null,"修改日期"),t("th",null,"地址"),t("th",null,"付費方式"),t("th",null,"取消")])],-1),S=t("td",null,"貨到付款",-1),P={__name:"OrdersView",setup(L){const i=b(),u=g([]),m=async(l,o)=>{try{const a=await h.post("/orders/edituseorder",{id:l,check:o}),e=u.value.findIndex(f=>f._id===l);u.value[e].ok=a.data.result.ok,u.value[e].changedate=a.data.result.changedate}catch(a){console.log(a),i({text:a.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}};return(async()=>{try{const{data:l}=await h.get("/orders");u.value.push(...l.result.map(o=>(o.total=o.cart.reduce((a,e)=>a+e.product.price*e.quantity,0),o)))}catch(l){console.log(l),i({text:l.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})(),(l,o)=>(c(),y(v,null,{default:s(()=>[r(B,null,{default:s(()=>[r(k,{cols:"12"},{default:s(()=>[C]),_:1}),r(k,{cols:"12"},{default:s(()=>[r(V,null,{default:s(()=>[D,t("tbody",null,[(c(!0),d(p,null,_(u.value,a=>(c(),d("tr",{key:a._id},[t("td",null,n(a._id),1),t("td",null,n(new Date(a.date).toLocaleString()),1),t("td",null,n(a.total),1),t("td",null,[t("ul",null,[(c(!0),d(p,null,_(a.cart,e=>(c(),d("li",{key:e._id},n(e.product.name)+"*"+n(e.quantity),1))),128))])]),t("td",null,n(a.ok),1),t("td",null,n(new Date(a.changedate).toLocaleString()),1),t("td",null,n(a.seventhome),1),S,t("td",null,[r(w,{onClick:e=>m(a._id,5),disabled:a.ok==="取消確認中"||a.ok==="訂單已完成"||a.ok==="訂單已取消"},{default:s(()=>[x("取消訂單 ")]),_:2},1032,["onClick","disabled"])])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{P as default};
