import{b as U,d as M,a as F,W as V,U as q,o as P,f as R,i as o,j as a,l as t,V as h,G as E,h as s,a1 as N,a3 as u,z as w,x as n}from"./index-1ebf75c3.js";import{_ as $}from"./71b8e0fl_cL._AC_SL1500-811e8b6d.js";import{v as T}from"./index-ed57672a.js";import{c as j,a as i,d as z,u as D,b as d,V as G}from"./index.esm-473b5ea5.js";import{V as I}from"./VContainer-4d3e7cbb.js";import{V as x,a as _}from"./VRow-ae3655a7.js";/* empty css              */const L=""+new URL("rikka-takanashi-takanashi-rikka-3cd7aadd.gif",import.meta.url).href,O={class:"forgerpass"},W={class:"othertitle"},A={class:"bgbox"},H=o("div",{class:"bgbox2"},null,-1),J=o("h1",null,"忘記密碼",-1),K=o("p",null,[n("再"),o("br"),n("想"),o("br"),n("想"),o("br"),n("?")],-1),Q={class:"shadow"},X={class:"shadowbox"},Y={class:"text-center"},ne={__name:"ForgetPass",setup(Z){const m=U(),k=M(),b=F(),C=j({account:i().required("帳號必填").min(4,"最少四個字").max(20,"最多20"),email:i().required("信箱必填").test("isEmail","信箱格式錯誤",r=>T.isEmail(r)),password:i().required("密碼必填").min(4,"最少四個字").max(20,"最多20"),passwordConfirm:i().required("密碼必填").min(4,"最少四個字").max(20,"最多20").oneOf([z("password")],"密碼不一致")}),{handleSubmit:S,isSubmitting:y,handleReset:v}=D({validationSchema:C}),c=d("account"),p=d("email"),f=d("password"),g=d("passwordConfirm"),B=S(async r=>{try{await V.post("/users/forget",{account:r.account,email:r.email,password:r.password}),m({text:"修改成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom",rounded:"pill",variant:"tonal"}});const{data:e}=await V.post("/users/login",{account:r.account,password:r.password});b.login({token:e.result.token,account:e.result.account,name:e.result.name,email:e.result.email,cart:e.result.cart,role:e.result.role,like:e.result.like,image:e.result.image}),m({text:"登入成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom",rounded:"pill",variant:"tonal"}}),v(),k.push("/")}catch(e){m({text:e.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom",rounded:"pill",variant:"tonal"}})}});return q(()=>{b.loding=!1}),(r,e)=>(P(),R("section",O,[o("section",W,[o("div",A,[a(h,{class:"mainimg",src:$,cover:""})]),H]),a(I,null,{default:t(()=>[a(x,null,{default:t(()=>[a(_,{cols:"12",class:"text-center"},{default:t(()=>[J]),_:1}),a(E),a(x,null,{default:t(()=>[a(_,{cols:"6"},{default:t(()=>[a(h,{src:L,style:{height:"500px"}},{default:t(()=>[K]),_:1})]),_:1}),a(_,{cols:"6"},{default:t(()=>[o("div",Q,[o("div",X,[a(G,{disabled:s(y),onSubmit:N(s(B),["prevent"])},{default:t(()=>[a(u,{modelValue:s(c).value.value,"onUpdate:modelValue":e[0]||(e[0]=l=>s(c).value.value=l),label:"帳號:",counter:"","max-length":"20","error-messages":s(c).errorMessage.value},null,8,["modelValue","error-messages"]),a(u,{modelValue:s(f).value.value,"onUpdate:modelValue":e[1]||(e[1]=l=>s(f).value.value=l),label:"密碼:",counter:"","max-length":"20",type:"password","error-messages":s(f).errorMessage.value},null,8,["modelValue","error-messages"]),a(u,{modelValue:s(g).value.value,"onUpdate:modelValue":e[2]||(e[2]=l=>s(g).value.value=l),label:"確認密碼:",counter:"","max-length":"20",type:"password","error-messages":s(g).errorMessage.value},null,8,["modelValue","error-messages"]),a(u,{modelValue:s(p).value.value,"onUpdate:modelValue":e[3]||(e[3]=l=>s(p).value.value=l),label:"確認信箱",type:"email","error-messages":s(p).errorMessage.value},null,8,["modelValue","error-messages"]),o("div",Y,[a(w,{type:"submit"},{default:t(()=>[n("創新密碼")]),_:1}),a(w,{onClick:s(v)},{default:t(()=>[n("重製")]),_:1},8,["onClick"])])]),_:1},8,["disabled","onSubmit"])])])]),_:1})]),_:1})]),_:1})]),_:1})]))}};export{ne as default};