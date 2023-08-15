import{_ as w}from"./71b8e0fl_cL._AC_SL1500-811e8b6d.js";import{b as C,r as V,H as g,f as e,h as s,x as l,i as u,w as o,F as c,m as x,t as h,X as m,n as f,D as n,y as r,k as b}from"./index-ae1eb014.js";import{V as D}from"./VContainer-cfb8dd00.js";import{V as S,a as _}from"./VRow-2b1c7ed1.js";/* empty css              */const L={class:"backtop"},B={class:"bgbox"},I=l("div",{class:"bgbox2"},null,-1),q=l("h1",null,"訂單管理",-1),N=l("thead",null,[l("tr",null,[l("th",null,"ID"),l("th",null,"建立日期"),l("th",null,"使用者"),l("th",null,"金額"),l("th",null,"商品"),l("th",null,"狀態"),l("th",null,"付款方式"),l("th",null,"地址"),l("th",null,"修改日期"),l("th",null,"編輯")])],-1),$=l("thead",null,[l("tr",null,[l("th",null,"ID"),l("th",null,"建立日期"),l("th",null,"使用者"),l("th",null,"金額"),l("th",null,"商品"),l("th",null,"狀態"),l("th",null,"付款方式"),l("th",null,"地址"),l("th",null,"修改日期"),l("th",null,"編輯")])],-1),F=l("td",null," 已完成無法編輯 ",-1),P=l("thead",null,[l("tr",null,[l("th",null,"ID"),l("th",null,"建立日期"),l("th",null,"使用者"),l("th",null,"金額"),l("th",null,"商品"),l("th",null,"狀態"),l("th",null,"付款方式"),l("th",null,"地址"),l("th",null,"修改日期"),l("th",null,"編輯")])],-1),T=l("td",null," 已取消無法編輯 ",-1),j={__name:"OrdersView",setup(A){const y=C(),d=V([]),p=async(i,k)=>{try{const t=await g.post("/orders/editorder",{id:i,check:k}),a=d.value.findIndex(v=>v._id===i);d.value[a].ok=t.data.result.ok,d.value[a].changedate=t.data.result.changedate}catch(t){console.log(t),y({text:t.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}};return(async()=>{try{const{data:i}=await g.get("/orders/all");d.value.push(...i.result.map(k=>(k.total=k.cart.reduce((t,a)=>t+a.product.price*a.quantity,0),k))),console.log(d.value.length)}catch(i){y({text:i.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})(),(i,k)=>(e(),s(c,null,[l("section",L,[l("div",B,[u(x,{class:"mainimg",src:w,cover:""})]),I]),u(D,null,{default:o(()=>[u(S,null,{default:o(()=>[u(_,{cols:"12"},{default:o(()=>[q]),_:1}),u(_,{cols:"12"},{default:o(()=>[h("處理中的訂單")]),_:1}),u(_,{cols:"12"},{default:o(()=>[u(m,null,{default:o(()=>[N,l("tbody",null,[(e(!0),s(c,null,f(d.value,t=>(e(),s("tr",{key:t._id},[t.ok!=="訂單已完成"&&t.ok!=="訂單已取消"?(e(),s(c,{key:0},[l("td",null,n(t._id),1),l("td",null,n(new Date(t.date).toLocaleString()),1),l("td",null,n(t.user.account),1),l("td",null,n(t.total),1),l("td",null,[l("ul",null,[(e(!0),s(c,null,f(t.cart,a=>(e(),s("li",{key:a._id},n(a.product.name)+"*"+n(a.quantity),1))),128))])]),l("td",null,n(t.ok),1),l("td",null,n(t.paywat),1),l("td",null,n(t.seventhome),1),l("td",null,n(new Date(t.changedate).toLocaleString()),1),l("td",null,[u(r,{onClick:a=>p(t._id,2),disabled:t.ok!=="訂單確認中"},{default:o(()=>[h(" 成立訂單")]),_:2},1032,["onClick","disabled"]),u(r,{onClick:a=>p(t._id,3),disabled:!(t.ok==="訂單已成立"||t.ok==="結單無法取消")},{default:o(()=>[h(" 完成訂單 ")]),_:2},1032,["onClick","disabled"]),u(r,{onClick:a=>p(t._id,6),disabled:t.ok!=="取消確認中"},{default:o(()=>[h(" 結單無法取消 ")]),_:2},1032,["onClick","disabled"]),u(r,{onClick:a=>p(t._id,4),disabled:t.ok==="訂單已完成"||t.ok==="訂單已取消"||t.ok==="結單無法取消"},{default:o(()=>[h("取消訂單 ")]),_:2},1032,["onClick","disabled"])])],64)):b("",!0)]))),128))])]),_:1})]),_:1}),u(_,{cols:"12"},{default:o(()=>[h("完成的訂單")]),_:1}),u(_,{cols:"12"},{default:o(()=>[u(m,null,{default:o(()=>[$,l("tbody",null,[(e(!0),s(c,null,f(d.value,t=>(e(),s("tr",{key:t._id},[t.ok==="訂單已完成"?(e(),s(c,{key:0},[l("td",null,n(t._id),1),l("td",null,n(new Date(t.date).toLocaleString()),1),l("td",null,n(t.user.account),1),l("td",null,n(t.total),1),l("td",null,[l("ul",null,[(e(!0),s(c,null,f(t.cart,a=>(e(),s("li",{key:a._id},n(a.product.name)+"*"+n(a.quantity),1))),128))])]),l("td",null,n(t.ok),1),l("td",null,n(t.paywat),1),l("td",null,n(t.seventhome),1),l("td",null,n(new Date(t.changedate).toLocaleString()),1),F],64)):b("",!0)]))),128))])]),_:1})]),_:1}),u(_,{cols:"12"},{default:o(()=>[h("取消的訂單")]),_:1}),u(_,{cols:"12"},{default:o(()=>[u(m,null,{default:o(()=>[P,l("tbody",null,[(e(!0),s(c,null,f(d.value,t=>(e(),s("tr",{key:t._id},[t.ok==="訂單已取消"?(e(),s(c,{key:0},[l("td",null,n(t._id),1),l("td",null,n(new Date(t.date).toLocaleString()),1),l("td",null,n(t.user.account),1),l("td",null,n(t.total),1),l("td",null,[l("ul",null,[(e(!0),s(c,null,f(t.cart,a=>(e(),s("li",{key:a._id},n(a.product.name)+"*"+n(a.quantity),1))),128))])]),l("td",null,n(t.ok),1),l("td",null,n(t.paywat),1),l("td",null,n(t.seventhome),1),l("td",null,n(new Date(t.changedate).toLocaleString()),1),T],64)):b("",!0)]))),128))])]),_:1})]),_:1})]),_:1})]),_:1})],64))}};export{j as default};