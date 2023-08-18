import{b as B,d as F,a as M,T as b,f as U,h as q,x as l,i as a,w as t,m as E,E as P,l as s,$,a1 as n,y as V,t as _}from"./index-241d7cb0.js";import{_ as N}from"./71b8e0fl_cL._AC_SL1500-811e8b6d.js";import{v as R}from"./index-260bc41f.js";import{c as T,a as u,d as D,u as I,b as i,V as O}from"./index.esm-1296c229.js";import{V as j}from"./VContainer-57cdae22.js";import{V as w,a as g}from"./VRow-4219253d.js";/* empty css              */const z={class:"forgerpass"},A={class:"othertitle"},G={class:"bgbox"},H=l("div",{class:"bgbox2"},null,-1),J=l("h1",null,"忘記密碼",-1),K={class:"text-center"},se={__name:"ForgetPass",setup(L){const m=B(),x=F(),h=M(),k=T({account:u().required("帳號必填").min(4,"最少四個字").max(20,"最多20"),email:u().required("信箱必填").test("isEmail","信箱格式錯誤",o=>R.isEmail(o)),password:u().required("密碼必填").min(4,"最少四個字").max(20,"最多20"),passwordConfirm:u().required("密碼必填").min(4,"最少四個字").max(20,"最多20").oneOf([D("password")],"密碼不一致")}),{handleSubmit:C,isSubmitting:S,handleReset:v}=I({validationSchema:k}),d=i("account"),c=i("email"),p=i("password"),f=i("passwordConfirm"),y=C(async o=>{try{await b.post("/users/forget",{account:o.account,email:o.email,password:o.password}),m({text:"修改成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom",rounded:"pill",variant:"tonal"}});const{data:e}=await b.post("/users/login",{account:o.account,password:o.password});h.login({token:e.result.token,account:e.result.account,name:e.result.name,email:e.result.email,cart:e.result.cart,role:e.result.role,like:e.result.like}),m({text:"登入成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom",rounded:"pill",variant:"tonal"}}),v(),x.push("/")}catch(e){m({text:e.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom",rounded:"pill",variant:"tonal"}})}});return(o,e)=>(U(),q("section",z,[l("section",A,[l("div",G,[a(E,{class:"mainimg",src:N,cover:""})]),H]),a(j,null,{default:t(()=>[a(w,null,{default:t(()=>[a(g,{cols:"12",class:"text-center"},{default:t(()=>[J]),_:1}),a(P),a(w,null,{default:t(()=>[a(g,{cols:"6"}),a(g,{cols:"6"},{default:t(()=>[a(O,{disabled:s(S),onSubmit:$(s(y),["prevent"])},{default:t(()=>[a(n,{modelValue:s(d).value.value,"onUpdate:modelValue":e[0]||(e[0]=r=>s(d).value.value=r),label:"帳號:",counter:"","max-length":"20","error-messages":s(d).errorMessage.value},null,8,["modelValue","error-messages"]),a(n,{modelValue:s(p).value.value,"onUpdate:modelValue":e[1]||(e[1]=r=>s(p).value.value=r),label:"密碼:",counter:"","max-length":"20",type:"password","error-messages":s(p).errorMessage.value},null,8,["modelValue","error-messages"]),a(n,{modelValue:s(f).value.value,"onUpdate:modelValue":e[2]||(e[2]=r=>s(f).value.value=r),label:"確認密碼:",counter:"","max-length":"20",type:"password","error-messages":s(f).errorMessage.value},null,8,["modelValue","error-messages"]),a(n,{modelValue:s(c).value.value,"onUpdate:modelValue":e[3]||(e[3]=r=>s(c).value.value=r),label:"確認信箱",type:"email","error-messages":s(c).errorMessage.value},null,8,["modelValue","error-messages"]),l("div",K,[a(V,{type:"submit"},{default:t(()=>[_("創新密碼")]),_:1}),a(V,{onClick:s(v)},{default:t(()=>[_("重製")]),_:1},8,["onClick"])])]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1})]))}};export{se as default};