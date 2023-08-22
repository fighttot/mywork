import{g as G}from"./index-4db78ffb.js";import{b as N,d as j,a as U,W as B,o as b,f as q,j as e,l as t,G as E,h as a,a1 as L,a3 as g,i as l,z as m,x as u,r as P,U as O,k as M,m as $,F as A}from"./index-351e7491.js";import{c as T,a as f,u as W,b as h,V as z,d as H}from"./index.esm-8721e903.js";import{V as F,a as V}from"./VRow-f0a9df4a.js";import{V as D}from"./VContainer-34e2f640.js";import{v as I}from"./index-7e70188e.js";/* empty css              */const J={class:"logincom"},K=l("h1",null,"登入",-1),Q={class:"text-center"},X={__name:"LoginView",setup(R){const d=N(),n=j(),r=U(),k=T({account:f().required("帳號必填").min(4,"最少四個字").max(20,"最多20"),password:f().required("密碼必填").min(4,"最少四個字").max(20,"最多20")}),{handleSubmit:x,isSubmitting:S,handleReset:w}=W({validationSchema:k}),p=h("account"),v=h("password"),y=x(async _=>{try{const{data:o}=await B.post("/users/login",{account:_.account,password:_.password});r.login({token:o.result.token,account:o.result.account,name:o.result.name,email:o.result.email,cart:o.result.cart,role:o.result.role,like:o.result.like,image:o.result.image}),d({text:"登入成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom",rounded:"pill",variant:"tonal"}}),w(),n.push("/")}catch(o){d({text:o.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom",rounded:"pill",variant:"tonal"}})}});return(_,o)=>(b(),q("section",J,[e(D,null,{default:t(()=>[e(F,{class:"text-center tableheight"},{default:t(()=>[e(V,{cols:"12"},{default:t(()=>[K]),_:1}),e(E),e(V,{cols:"12",style:{padding:"250px 10px 30px 10px"}},{default:t(()=>[e(z,{disabled:a(S),onSubmit:L(a(y),["prevent"])},{default:t(()=>[e(g,{label:"帳號:",counter:"",maxlength:"20",modelValue:a(p).value.value,"onUpdate:modelValue":o[0]||(o[0]=C=>a(p).value.value=C),"error-messages":a(p).errorMessage.value},null,8,["modelValue","error-messages"]),e(g,{label:"密碼:",counter:"",maxlength:"20",type:"password",modelValue:a(v).value.value,"onUpdate:modelValue":o[1]||(o[1]=C=>a(v).value.value=C),"error-messages":a(v).errorMessage.value},null,8,["modelValue","error-messages"]),l("div",Q,[e(m,{type:"submit"},{default:t(()=>[u("登入")]),_:1}),e(m,{onClick:a(w)},{default:t(()=>[u("重製")]),_:1},8,["onClick"])])]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1})]),_:1})]))}},Y={class:"regicom"},Z=l("h1",null,"註冊",-1),ee={class:"text-center"},ae={__name:"RegisterView",setup(R){const d=N(),n=j(),r=U(),k=T({account:f().required("帳號必填").min(4,"最少四個字").max(20,"最多20"),email:f().required().test("isEmail","信箱格式錯誤",i=>I.isEmail(i)),password:f().required("密碼必填").min(4,"最少四個字").max(20,"最多20"),passwordConfirm:f().required("密碼必填").min(4,"最少四個字").max(20,"最多20").oneOf([H("password")],"密碼不一致"),name:f().required("暱稱必填").max(10,"最多10")}),{handleSubmit:x,isSubmitting:S,handleReset:w}=W({validationSchema:k}),p=h("account"),v=h("email"),y=h("password"),_=h("passwordConfirm"),o=h("name"),C=x(async i=>{try{await B.post("/users",{account:i.account,email:i.email,name:i.name,password:i.password}),d({text:"註冊成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom",rounded:"pill",variant:"tonal"}});const{data:s}=await B.post("/users/login",{account:i.account,password:i.password});r.login({token:s.result.token,account:s.result.account,name:s.result.name,email:s.result.email,cart:s.result.cart,role:s.result.role,like:s.result.like}),d({text:"登入成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom",rounded:"pill",variant:"tonal"}}),w(),n.push("/")}catch(s){d({text:s.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom",rounded:"pill",variant:"tonal"}})}});return(i,s)=>(b(),q("section",Y,[e(D,null,{default:t(()=>[e(F,null,{default:t(()=>[e(V,{cols:"12",class:"text-center"},{default:t(()=>[Z]),_:1}),e(E),e(V,{cols:"12",style:{padding:"200px 10px 30px 10px"}},{default:t(()=>[e(z,{disabled:a(S),onSubmit:L(a(C),["prevent"])},{default:t(()=>[e(g,{modelValue:a(p).value.value,"onUpdate:modelValue":s[0]||(s[0]=c=>a(p).value.value=c),label:"帳號:",counter:"","max-length":"20","error-messages":a(p).errorMessage.value},null,8,["modelValue","error-messages"]),e(g,{modelValue:a(y).value.value,"onUpdate:modelValue":s[1]||(s[1]=c=>a(y).value.value=c),label:"密碼:",counter:"","max-length":"20",type:"password","error-messages":a(y).errorMessage.value},null,8,["modelValue","error-messages"]),e(g,{modelValue:a(_).value.value,"onUpdate:modelValue":s[2]||(s[2]=c=>a(_).value.value=c),label:"確認密碼:",counter:"","max-length":"20",type:"password","error-messages":a(_).errorMessage.value},null,8,["modelValue","error-messages"]),e(g,{modelValue:a(v).value.value,"onUpdate:modelValue":s[3]||(s[3]=c=>a(v).value.value=c),label:"信箱(不得重複):",type:"email","error-messages":a(v).errorMessage.value},null,8,["modelValue","error-messages"]),e(g,{modelValue:a(o).value.value,"onUpdate:modelValue":s[4]||(s[4]=c=>a(o).value.value=c),label:"暱稱(不得重複):",counter:"","max-length":"10","error-messages":a(o).errorMessage.value},null,8,["modelValue","error-messages"]),l("div",ee,[e(m,{type:"submit"},{default:t(()=>[u("註冊")]),_:1}),e(m,{onClick:a(w)},{default:t(()=>[u("重製")]),_:1},8,["onClick"])])]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1})]),_:1})]))}},se={class:"lidcover d-flex align-center justify-center flex-column"},le=l("br",null,null,-1),oe=l("br",null,null,-1),te=l("br",null,null,-1),re=l("br",null,null,-1),ne=l("br",null,null,-1),ue=l("br",null,null,-1),ie=l("br",null,null,-1),ce=l("br",null,null,-1),de=l("br",null,null,-1),me=l("br",null,null,-1),pe=l("br",null,null,-1),ve=l("br",null,null,-1),_e={class:"inthislogon"},be={class:"shadowa"},ge={class:"shadowb"},Ce={__name:"LoginRrgister",setup(R){const d=U(),n=P(null),r=P(""),k=Math.floor(Math.random()*2)+1,x=()=>{n.value&&(r.value?(n.value.play(),r.value=!r.value):(n.value.reversed(!n.value.reversed()),r.value=!r.value))};return O(()=>{n.value=G.to(".lidcover",{x:"50vw",duration:1,ease:"linear",paused:!0}),n.value&&(k===1?(n.value.play(),r.value=!1):(n.value.reversed(!n.value.reversed()),r.value=!0)),d.loding=!1}),(S,w)=>(b(),q(A,null,[l("div",se,[r.value?(b(),M(m,{key:0,onClick:x,class:"bt1"},{default:t(()=>[u("歡"),le,oe,u("迎"),te,re,u("加"),ne,ue,u("入")]),_:1})):$("",!0),r.value?$("",!0):(b(),M(m,{key:1,onClick:x,class:"bt2"},{default:t(()=>[u("歡"),ie,ce,u("迎"),de,me,u("回"),pe,ve,u("來")]),_:1})),r.value?(b(),M(m,{key:2,icon:"mdi-home",class:"bt1home",to:"/"})):$("",!0),r.value?$("",!0):(b(),M(m,{key:3,icon:"mdi-home",class:"bt2home",to:"/"}))]),l("section",_e,[e(F,{class:"mainwindow d-flex align-center justify-center"},{default:t(()=>[e(V,{cols:"6"},{default:t(()=>[l("div",be,[e(X,{class:"wida"})])]),_:1}),e(V,{cols:"6"},{default:t(()=>[l("div",ge,[e(ae,{class:"widb"})])]),_:1})]),_:1})])],64))}};export{Ce as default};
