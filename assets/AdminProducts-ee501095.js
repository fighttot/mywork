import{I as ye,a0 as he,a1 as Be,a2 as Ie,K as ke,a3 as Ce,a4 as we,a5 as Re,c as le,R as Pe,a6 as Fe,a7 as ne,a8 as ve,i as l,A as K,a9 as Ue,aa as _e,r as u,ab as Me,N as Ae,o as Te,O as ee,P as De,ac as Ee,ad as Ne,F as Q,ae as me,af as $e,ag as He,ah as ze,ai as qe,U as ue,aj as Ge,ak as Oe,Q as je,b as Le,H as ie,e as fe,f as S,h as re,x as se,w as s,m as de,E as ge,t as N,$ as G,al as Ke,z as pe,am as Ve,y as O,n as xe,j,k as ae,l as n,Z as Qe,B as Ye,an as Ze,D as Je,C as We,ao as Xe,ap as ea,q as aa}from"./index-da9aff5c.js";import{_ as la}from"./71b8e0fl_cL._AC_SL1500-811e8b6d.js";import{c as ta,a as L,e as oa,f as ra,u as na,b as M,V as sa}from"./index.esm-da51ea31.js";import{V as ua}from"./VContainer-c055d4bd.js";import{V as be,a as ce}from"./VRow-e2368bcf.js";import{V as ia,a as da}from"./VToolbar-faae21c7.js";/* empty css              */const ca=ye({...he(),...Be(Ie(),["inline"])},"VCheckbox"),va=ke()({name:"VCheckbox",inheritAttrs:!1,props:ca(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,x){let{attrs:h,slots:B}=x;const i=Ce(e,"modelValue"),{isFocused:c,focus:k,blur:Y}=we(e),A=Re(),$=le(()=>e.id||`checkbox-${A}`);return Pe(()=>{const[R,F]=Fe(h),[C,b]=ne.filterProps(e),[T,D]=ve.filterProps(e);return l(ne,K({class:["v-checkbox",e.class]},R,C,{modelValue:i.value,"onUpdate:modelValue":E=>i.value=E,id:$.value,focused:c.value,style:e.style}),{...B,default:E=>{let{id:U,messagesId:Z,isDisabled:H,isReadonly:J}=E;return l(ve,K(T,{id:U.value,"aria-describedby":Z.value,disabled:H.value,readonly:J.value},F,{modelValue:i.value,"onUpdate:modelValue":W=>i.value=W,onFocus:k,onBlur:Y}),B)}})}),{}}});const ma=ye({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...he(),...Ue()},"VTextarea"),fa=ke()({name:"VTextarea",directives:{Intersect:_e},inheritAttrs:!1,props:ma(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,x){let{attrs:h,emit:B,slots:i}=x;const c=Ce(e,"modelValue"),{isFocused:k,focus:Y,blur:A}=we(e),$=le(()=>typeof e.counterValue=="function"?e.counterValue(c.value):(c.value||"").toString().length),R=le(()=>{if(h.maxlength)return h.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function F(r,f){var d,p;!e.autofocus||!r||(p=(d=f[0].target)==null?void 0:d.focus)==null||p.call(d)}const C=u(),b=u(),T=Me(""),D=u(),E=le(()=>e.persistentPlaceholder||k.value||e.active);function U(){var r;D.value!==document.activeElement&&((r=D.value)==null||r.focus()),k.value||Y()}function Z(r){U(),B("click:control",r)}function H(r){B("mousedown:control",r)}function J(r){r.stopPropagation(),U(),ue(()=>{c.value="",Ge(e["onClick:clear"],r)})}function W(r){var d;const f=r.target;if(c.value=f.value,(d=e.modelModifiers)!=null&&d.trim){const p=[f.selectionStart,f.selectionEnd];ue(()=>{f.selectionStart=p[0],f.selectionEnd=p[1]})}}const w=u(),z=u(+e.rows),X=le(()=>["plain","underlined"].includes(e.variant));Ae(()=>{e.autoGrow||(z.value=+e.rows)});function P(){e.autoGrow&&ue(()=>{if(!w.value||!b.value)return;const r=getComputedStyle(w.value),f=getComputedStyle(b.value.$el),d=parseFloat(r.getPropertyValue("--v-field-padding-top"))+parseFloat(r.getPropertyValue("--v-input-padding-top"))+parseFloat(r.getPropertyValue("--v-field-padding-bottom")),p=w.value.scrollHeight,I=parseFloat(r.lineHeight),_=Math.max(parseFloat(e.rows)*I+d,parseFloat(f.getPropertyValue("--v-input-control-height"))),v=parseFloat(e.maxRows)*I+d||1/0,m=je(p??0,_,v);z.value=Math.floor((m-d)/I),T.value=Oe(m)})}Te(P),ee(c,P),ee(()=>e.rows,P),ee(()=>e.maxRows,P),ee(()=>e.density,P);let g;return ee(w,r=>{r?(g=new ResizeObserver(P),g.observe(w.value)):g==null||g.disconnect()}),De(()=>{g==null||g.disconnect()}),Pe(()=>{const r=!!(i.counter||e.counter||e.counterValue),f=!!(r||i.details),[d,p]=Fe(h),[{modelValue:I,..._}]=ne.filterProps(e),[v]=Ee(e);return l(ne,K({ref:C,modelValue:c.value,"onUpdate:modelValue":m=>c.value=m,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--plain-underlined":X.value},e.class],style:e.style},d,_,{centerAffix:z.value===1&&!X.value,focused:k.value}),{...i,default:m=>{let{isDisabled:V,isDirty:te,isReadonly:t,isValid:a}=m;return l(Ne,K({ref:b,style:{"--v-textarea-control-height":T.value},onClick:Z,onMousedown:H,"onClick:clear":J,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},v,{active:E.value||te.value,centerAffix:z.value===1&&!X.value,dirty:te.value||e.dirty,disabled:V.value,focused:k.value,error:a.value===!1}),{...i,default:y=>{let{props:{class:oe,...o}}=y;return l(Q,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),me(l("textarea",K({ref:D,class:oe,value:c.value,onInput:W,autofocus:e.autofocus,readonly:t.value,disabled:V.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:U,onBlur:A},o,p),null),[[$e("intersect"),{handler:F},null,{once:!0}]]),e.autoGrow&&me(l("textarea",{class:[oe,"v-textarea__sizer"],"onUpdate:modelValue":q=>c.value=q,ref:w,readonly:!0,"aria-hidden":"true"},null),[[He,c.value]]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:f?m=>{var V;return l(Q,null,[(V=i.details)==null?void 0:V.call(i,m),r&&l(Q,null,[l("span",null,null),l(ze,{active:e.persistentCounter||k.value,value:$.value,max:R.value},i.counter)])])}:void 0})}),qe({},C,b,D)}}),ga={class:"othertitle"},pa={class:"bgbox"},Va=se("div",{class:"bgbox2"},null,-1),xa=se("h1",{class:"text-center"},"商品管理",-1),ba={key:2,class:"text-center"},Sa={__name:"AdminProducts",setup(e){const x=u([]),h=Le(),B=u(5),i=u([{key:"name",order:"asc"}]),c=u(1),k=u([]),Y=[{title:"圖片",align:"center",sortable:!1,key:"images"},{title:"名稱",align:"center",sortable:!0,key:"name"},{title:"製造商",align:"center",sortable:!0,key:"manufacturers"},{title:"分類",align:"center",sortable:!0,key:"category"},{title:"價錢",align:"center",sortable:!0,key:"price"},{title:"主題色",align:"center",sortable:!1,key:"color"},{title:"文字主題色",align:"center",sortable:!1,key:"textColor"},{title:"上架",align:"center",sortable:!0,key:"sell"},{title:"喜歡",align:"center",sortable:!0,key:"totle"},{title:"售出數",align:"center",sortable:!0,key:"sellTotle"},{title:"編輯",align:"center",sortable:!1,key:"edit"}],A=u(!1),$=u(0),R=u(""),F=async()=>{var t,a;A.value=!0;try{const{data:y}=await ie.get("./products/all",{params:{page:c.value,itemsPerPage:B.value,sortBy:((t=i.value[0])==null?void 0:t.key)||"_id",sortOrder:((a=i.value[0])==null?void 0:a.order)||"asc",search:R.value}});k.value.splice(0,k.value.length,...y.result.data),$.value=y.result.count}catch(y){h({text:y.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}A.value=!1};F();const C=u(!1),b=u(""),T=()=>{c.value=1,F()},D=t=>{b.value=t._id,P.value.value=t.name,g.value.value=t.price,r.value.value=t.description,f.value.value=t.category,d.value.value=t.manufacturers,I.value.value=t.color,_.value.value=t.textColor,p.value.value=t.sell,x.value=t.images,C.value=!0},E=()=>{b.value=""},U=()=>{if(C.value=!1,X(),x.value=u([]),m.value.length>0)for(let t=0;t<m.value.length*2;t++)V.value.deleteFileRecord(m.value[t]),V.value.deleteFileRecord(v.value[t]);for(let t=0;t<v.value.length*2;t++)V.value.deleteFileRecord(v.value[t])},Z=()=>{if(z(),m.value.length>0)for(let t=0;t<m.value.length*2;t++)V.value.deleteFileRecord(m.value[t]),V.value.deleteFileRecord(v.value[t]);for(let t=0;t<v.value.length*2;t++)V.value.deleteFileRecord(v.value[t])},H=["MIMEYOI","ALTER","好微笑","壽屋"],J=ta({name:L().required("缺少名稱"),price:oa().required("缺少價格").min(0,"價格錯誤").typeError("沒有價格"),description:L().required("缺少說明"),category:L().required("缺少分類"),manufacturers:L().required("缺少製造商").test("製造商錯誤",t=>H.includes(t)),sell:ra(),color:L().required("需要主題色"),textColor:L().required("需要文字主題色")}),{handleSubmit:W,isSubmitting:w,handleReset:z,resetForm:X}=na({validationSchema:J,initialValues:{name:"",price:0,description:"",category:"",manufacturers:"",color:"",textColor:"",sell:!1}}),P=M("name"),g=M("price"),r=M("description"),f=M("category"),d=M("manufacturers"),p=M("sell"),I=M("color"),_=M("textColor"),v=u([]),m=u([]),V=u(null),te=W(async t=>{if(b.value.length===0&&v.value.length===0)return h({text:"沒有圖片",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}});try{const a=new FormData;a.append("name",t.name),a.append("price",t.price),a.append("description",t.description),a.append("category",t.category),a.append("manufacturers",t.manufacturers),a.append("sell",t.sell),a.append("color",t.color),a.append("textColor",t.textColor);for(let y=0;y<v.value.length;y++)v.value.length>0&&a.append("images",v.value[y].file);b.value.length>0?(await ie.patch("/products/"+b.value,a),h({text:"修改成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}})):(await ie.post("/products",a),h({text:"新增成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}})),U(),F()}catch(a){h({text:a.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}});return(t,a)=>{const y=fe("VDataTableServer"),oe=fe("VueFileAgent");return S(),re(Q,null,[se("section",ga,[se("div",pa,[l(de,{class:"mainimg",src:la,cover:""})]),Va]),l(ua,null,{default:s(()=>[l(be,null,{default:s(()=>[l(ce,{cols:"12"},{default:s(()=>[xa]),_:1}),l(ge),l(ce,{cols:"12"},{default:s(()=>[l(y,{"items-per-page":B.value,"onUpdate:itemsPerPage":[a[2]||(a[2]=o=>B.value=o),F],"sort-by":i.value,"onUpdate:sortBy":[a[3]||(a[3]=o=>i.value=o),F],page:c.value,"onUpdate:page":[a[4]||(a[4]=o=>c.value=o),F],items:k.value,headers:Y,loading:A.value,"items-length":$.value,hover:"",search:R.value},{top:s(()=>[l(ia,{flat:""},{default:s(()=>[l(da,null,{default:s(()=>[N("我的商品")]),_:1}),l(G,{label:"搜尋","append-icon":"mdi-magnify",modelValue:R.value,"onUpdate:modelValue":a[0]||(a[0]=o=>R.value=o),"onClick:append":T,onKeydown:Ke(T,["enter"])},null,8,["modelValue","onKeydown"]),l(ge,{class:"mx-4",inset:"",vertical:""}),l(pe),l(Ve,{modelValue:C.value,"onUpdate:modelValue":a[1]||(a[1]=o=>C.value=o),"max-width":"500px"},{activator:s(({props:o})=>[l(O,K({color:"primary",dark:"",class:"mb-2"},o,{onClick:E}),{default:s(()=>[N(" 新增商品 ")]),_:2},1040)]),_:1},8,["modelValue"])]),_:1})]),"item.images":s(({item:o})=>[(S(!0),re(Q,null,xe(o.raw.images,(q,Se)=>(S(),j(de,{src:q,key:Se,cover:"","aspect-ratio":"16/9"},null,8,["src"]))),128))]),"item.sell":s(({item:o})=>[o.raw.sell?(S(),j(aa,{key:0,icon:"mdi-check"})):ae("",!0)]),"item.edit":s(({item:o})=>[l(O,{icon:"mdi-pencil",onClick:q=>D(o.raw),variant:"text"},null,8,["onClick"])]),_:2},1032,["items-per-page","sort-by","page","items","loading","items-length","search"])]),_:1})]),_:1}),l(Ve,{persistent:"",modelValue:C.value,"onUpdate:modelValue":a[16]||(a[16]=o=>C.value=o),width:"800px",scrollable:""},{default:s(()=>[l(sa,{disabled:n(w),onSubmit:Qe(n(te),["prevent"])},{default:s(()=>[l(Ye,{style:{height:"80vh"}},{default:s(()=>[l(Ze,null,{default:s(()=>[N(Je(b.value.length>0?"編輯商品":"新增商品"),1)]),_:1}),l(We,null,{default:s(()=>[l(G,{label:"名稱",modelValue:n(P).value.value,"onUpdate:modelValue":a[5]||(a[5]=o=>n(P).value.value=o),"error-messages":n(P).errorMessage.value},null,8,["modelValue","error-messages"]),l(G,{label:"價格",modelValue:n(g).value.value,"onUpdate:modelValue":a[6]||(a[6]=o=>n(g).value.value=o),modelModifiers:{number:!0},"error-messages":n(g).errorMessage.value,type:"number",min:"0"},null,8,["modelValue","error-messages"]),l(G,{label:"分類",modelValue:n(f).value.value,"onUpdate:modelValue":a[7]||(a[7]=o=>n(f).value.value=o),"error-messages":n(f).errorMessage.value},null,8,["modelValue","error-messages"]),l(Xe,{items:H,label:"製造商",modelValue:n(d).value.value,"onUpdate:modelValue":a[8]||(a[8]=o=>n(d).value.value=o),"error-messages":n(d).errorMessage.value},null,8,["modelValue","error-messages"]),l(G,{label:"主題色",modelValue:n(I).value.value,"onUpdate:modelValue":a[9]||(a[9]=o=>n(I).value.value=o),"error-messages":n(I).errorMessage.value},null,8,["modelValue","error-messages"]),l(G,{label:"文字主題色",modelValue:n(_).value.value,"onUpdate:modelValue":a[10]||(a[10]=o=>n(_).value.value=o),"error-messages":n(_).errorMessage.value},null,8,["modelValue","error-messages"]),l(fa,{label:"說明",modelValue:n(r).value.value,"onUpdate:modelValue":a[11]||(a[11]=o=>n(r).value.value=o),"error-messages":n(r).errorMessage.value},null,8,["modelValue","error-messages"]),l(va,{label:"上架",modelValue:n(p).value.value,"onUpdate:modelValue":a[12]||(a[12]=o=>n(p).value.value=o)},null,8,["modelValue"]),!x.value.length>0?(S(),j(oe,{key:0,modelValue:v.value,"onUpdate:modelValue":a[13]||(a[13]=o=>v.value=o),"raw-model-value":m.value,"onUpdate:rawModelValue":a[14]||(a[14]=o=>m.value=o),"max-files":6,"max-size":"5MB",accept:"image/jpg,image/jpeg,image/png",multiple:!0,"error-text":{type:"檔案格式錯誤",size:"檔案太大"},"help-text":"選擇檔案或拖曳至此",deletable:"",ref_key:"fileAgent",ref:V},null,8,["modelValue","raw-model-value"])):ae("",!0),x.value.length>0?(S(),j(be,{key:1},{default:s(()=>[(S(!0),re(Q,null,xe(x.value,(o,q)=>(S(),j(ce,{key:q,cover:"","aspect-ratio":"16/9"},{default:s(()=>[l(de,{src:o},null,8,["src"])]),_:2},1024))),128))]),_:1})):ae("",!0),!v.value.length>0&&!x.value.length>0?(S(),re("p",ba,"需要圖片")):ae("",!0),x.value.length>0?(S(),j(O,{key:3,onClick:a[15]||(a[15]=o=>x.value=[])},{default:s(()=>[N("重新上傳圖片")]),_:1})):ae("",!0)]),_:1}),l(ea,null,{default:s(()=>[l(pe,null,{default:s(()=>[l(O,{color:"red",onClick:U,loading:n(w)},{default:s(()=>[N("取消")]),_:1},8,["loading"]),l(O,{color:"primary",onClick:Z,loading:n(w)},{default:s(()=>[N("重製")]),_:1},8,["loading"]),l(O,{color:"green",type:"submit",loading:n(w)},{default:s(()=>[N("送出")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1},8,["modelValue"])]),_:1})],64)}}};export{Sa as default};