import{K as N,R as P,i as t,A as S,u as D,c as y,a as z,b as H,d as F,r as M,e as U,f as a,h as p,x as B,j as r,w as e,k as s,F as m,l,V as w,m as $,n as j,p as x,q as b,s as L,t as u,v as q,z as f,y as c,H as E,D as K}from"./index-856a1c81.js";import{V as G}from"./VNavigationDrawer-64a0a469.js";import{V as I,a as g,b as J}from"./VBadge-7a126e78.js";import{V as O}from"./VMain-a5832922.js";import{V as Q}from"./VContainer-df1bf70b.js";import{m as W,a as X}from"./VToolbar-128ef877.js";/* empty css              */const Y=N()({name:"VAppBarTitle",props:W(),setup(_,k){let{slots:i}=k;return P(()=>t(X,S(_,{class:"v-app-bar-title"}),i)),{}}}),Z={id:"prolaout"},ee=B("span",null,"遊客",-1),ie={__name:"ProductLayout",setup(_){const{mobile:k}=D(),i=y(()=>k.value),o=z(),h=H(),C=F(),V=M(!1),A=y(()=>[{to:"/loginRrgister",text:"加入我們",icon:"mdi-account-plus",show:!o.isLogin},{to:"/cart",text:"購物車",icon:"mdi-cart",show:o.isLogin},{to:"/like",text:"收藏",icon:"mdi-heart",show:o.isLogin},{to:"/orders",text:"訂單",icon:"mdi-format-list-numbered",show:o.isLogin},{to:"/proHome",text:"商品一覽",icon:"mdi-tag",show:!0},{to:"/manufacturers",text:"廠商介紹",icon:"mdi-package-variant",show:!0},{to:"/admin",text:"管理",icon:"mdi-cog",show:o.isLogin&&o.isAdmin},{to:"/",text:"回首頁",icon:"mdi-home",show:!0}]),T=async()=>{try{await E.delete("/users/logout"),o.lougot(),h({text:"登出成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom",rounded:"pill",variant:"tonal"}}),C.push("/loginRrgister")}catch(v){h({text:v.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom",rounded:"pill",variant:"tonal"}})}};return(v,d)=>{const R=U("RouterView");return a(),p(m,null,[B("section",Z,[i.value?(a(),r(G,{key:0,modelValue:V.value,"onUpdate:modelValue":d[0]||(d[0]=n=>V.value=n),location:"right",temporary:""},{default:e(()=>[t(q,{nav:""},{default:e(()=>[l(o).isLogin?(a(),r(w,{key:0,color:"brown",size:"large"},{default:e(()=>[t($,{src:l(o).avatar},null,8,["src"])]),_:1})):s("",!0),l(o).isLogin?s("",!0):(a(),r(w,{key:1,color:"brown",size:"large"},{default:e(()=>[ee]),_:1})),(a(!0),p(m,null,j(A.value,n=>(a(),p(m,{key:n.to},[n.show?(a(),r(x,{key:0,to:n.to},{prepend:e(()=>[t(b,{icon:n.icon},null,8,["icon"])]),append:e(()=>[n.to==="/cart"?(a(),r(g,{key:0,color:"success",content:l(o).cart,inline:""},null,8,["content"])):s("",!0),n.to==="/like"?(a(),r(g,{key:1,color:"success",content:l(o).like,inline:""},null,8,["content"])):s("",!0)]),default:e(()=>[t(L,null,{default:e(()=>[u(K(n.text),1)]),_:2},1024)]),_:2},1032,["to"])):s("",!0)],64))),128)),l(o).isLogin?(a(),r(x,{key:2,onClick:T},{prepend:e(()=>[t(b,{icon:"mdi-logout"})]),default:e(()=>[t(L,null,{default:e(()=>[u("登出")]),_:1})]),_:1})):s("",!0)]),_:1})]),_:1},8,["modelValue"])):s("",!0),t(I,{elevation:0,class:"appbar","scroll-behavior":"hide","scroll-threshold":"30"},{default:e(()=>[t(Q,{class:"d-flex align-center"},{default:e(()=>[t(f),t(c,{to:"/",active:!1},{default:e(()=>[t(Y,null,{default:e(()=>[u("型影不離")]),_:1})]),_:1}),i.value?s("",!0):(a(),p(m,{key:0},[t(c,{variant:"text",active:!1,to:"/manufacturers","prepend-icon":"mdi-package-variant"},{default:e(()=>[u("廠商介紹")]),_:1}),t(c,{variant:"text",active:!1,to:"/proHome","prepend-icon":"mdi-tag"},{default:e(()=>[u("商品一覽")]),_:1}),t(f),l(o).isLogin?(a(),r(c,{key:0,variant:"text",active:!1,to:"/like","prepend-icon":"mdi-heart"},{default:e(()=>[t(g,{content:l(o).like,floating:""},null,8,["content"])]),_:1})):s("",!0),l(o).isLogin?(a(),r(c,{key:1,variant:"text",active:!1,to:"/cart","prepend-icon":"mdi-cart"},{default:e(()=>[t(g,{content:l(o).cart,floating:""},null,8,["content"])]),_:1})):s("",!0),t(f)],64)),i.value?(a(),r(f,{key:1})):s("",!0),i.value?(a(),r(J,{key:2,onClick:d[1]||(d[1]=n=>V.value=!0)})):s("",!0)]),_:1})]),_:1})]),t(O,null,{default:e(()=>[(a(),r(R,{key:v.$route.path}))]),_:1})],64)}}};export{ie as default};
