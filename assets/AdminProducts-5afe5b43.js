import{J as ye,a7 as he,a8 as Be,a9 as Ie,L as ke,aa as Ce,ab as we,ac as Se,c as ee,S as Pe,ad as Fe,ae as oe,af as me,j as t,B as j,ag as _e,ah as Re,r as u,ai as Ue,O as Ae,U as Me,P as W,Q as Te,aj as De,ak as Ee,F as le,w as fe,al as Ne,am as $e,an as ze,ao as He,X as ue,ap as qe,aq as Ge,R as Le,b as Oe,I as te,e as ge,o as S,f as ie,i as re,l as s,z as $,V as de,G as pe,x as A,a3 as G,ar as je,A as Ve,$ as be,k as L,m as Z,h as n,a1 as Ke,C as Je,a0 as Qe,E as Xe,D as Ye,a2 as We,p as Ze,as as ea,s as aa}from"./index-655797e9.js";import{_ as ta}from"./71b8e0fl_cL._AC_SL1500-811e8b6d.js";import{c as la,a as O,e as oa,f as ra,u as na,b as M,V as sa}from"./index.esm-1aa735d5.js";import{F as ua}from"./FooTer-09f732b6.js";import{V as ia}from"./VContainer-f2982a49.js";import{V as xe,a as ce}from"./VRow-73063c78.js";import{V as da,a as ca}from"./VToolbar-1cfc2ad5.js";/* empty css              */const va=ye({...he(),...Be(Ie(),["inline"])},"VCheckbox"),ma=ke()({name:"VCheckbox",inheritAttrs:!1,props:va(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,y){let{attrs:g,slots:B}=y;const i=Ce(e,"modelValue"),{isFocused:c,focus:k,blur:K}=we(e),T=Se(),z=ee(()=>e.id||`checkbox-${T}`);return Pe(()=>{const[_,F]=Fe(g),[C,h]=oe.filterProps(e),[D,E]=me.filterProps(e);return t(oe,j({class:["v-checkbox",e.class]},_,C,{modelValue:i.value,"onUpdate:modelValue":N=>i.value=N,id:z.value,focused:c.value,style:e.style}),{...B,default:N=>{let{id:R,messagesId:J,isDisabled:H,isReadonly:Q}=N;return t(me,j(D,{id:R.value,"aria-describedby":J.value,disabled:H.value,readonly:Q.value},F,{modelValue:i.value,"onUpdate:modelValue":X=>i.value=X,onFocus:k,onBlur:K}),B)}})}),{}}});const fa=ye({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...he(),..._e()},"VTextarea"),ga=ke()({name:"VTextarea",directives:{Intersect:Re},inheritAttrs:!1,props:fa(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,y){let{attrs:g,emit:B,slots:i}=y;const c=Ce(e,"modelValue"),{isFocused:k,focus:K,blur:T}=we(e),z=ee(()=>typeof e.counterValue=="function"?e.counterValue(c.value):(c.value||"").toString().length),_=ee(()=>{if(g.maxlength)return g.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function F(r,f){var d,V;!e.autofocus||!r||(V=(d=f[0].target)==null?void 0:d.focus)==null||V.call(d)}const C=u(),h=u(),D=Ue(""),E=u(),N=ee(()=>e.persistentPlaceholder||k.value||e.active);function R(){var r;E.value!==document.activeElement&&((r=E.value)==null||r.focus()),k.value||K()}function J(r){R(),B("click:control",r)}function H(r){B("mousedown:control",r)}function Q(r){r.stopPropagation(),R(),ue(()=>{c.value="",qe(e["onClick:clear"],r)})}function X(r){var d;const f=r.target;if(c.value=f.value,(d=e.modelModifiers)!=null&&d.trim){const V=[f.selectionStart,f.selectionEnd];ue(()=>{f.selectionStart=V[0],f.selectionEnd=V[1]})}}const w=u(),q=u(+e.rows),Y=ee(()=>["plain","underlined"].includes(e.variant));Ae(()=>{e.autoGrow||(q.value=+e.rows)});function P(){e.autoGrow&&ue(()=>{if(!w.value||!h.value)return;const r=getComputedStyle(w.value),f=getComputedStyle(h.value.$el),d=parseFloat(r.getPropertyValue("--v-field-padding-top"))+parseFloat(r.getPropertyValue("--v-input-padding-top"))+parseFloat(r.getPropertyValue("--v-field-padding-bottom")),V=w.value.scrollHeight,I=parseFloat(r.lineHeight),U=Math.max(parseFloat(e.rows)*I+d,parseFloat(f.getPropertyValue("--v-input-control-height"))),v=parseFloat(e.maxRows)*I+d||1/0,m=Le(V??0,U,v);q.value=Math.floor((m-d)/I),D.value=Ge(m)})}Me(P),W(c,P),W(()=>e.rows,P),W(()=>e.maxRows,P),W(()=>e.density,P);let p;return W(w,r=>{r?(p=new ResizeObserver(P),p.observe(w.value)):p==null||p.disconnect()}),Te(()=>{p==null||p.disconnect()}),Pe(()=>{const r=!!(i.counter||e.counter||e.counterValue),f=!!(r||i.details),[d,V]=Fe(g),[{modelValue:I,...U}]=oe.filterProps(e),[v]=De(e);return t(oe,j({ref:C,modelValue:c.value,"onUpdate:modelValue":m=>c.value=m,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--plain-underlined":Y.value},e.class],style:e.style},d,U,{centerAffix:q.value===1&&!Y.value,focused:k.value}),{...i,default:m=>{let{isDisabled:b,isDirty:ae,isReadonly:ne,isValid:l}=m;return t(Ee,j({ref:h,style:{"--v-textarea-control-height":D.value},onClick:J,onMousedown:H,"onClick:clear":Q,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},v,{active:N.value||ae.value,centerAffix:q.value===1&&!Y.value,dirty:ae.value||e.dirty,disabled:b.value,focused:k.value,error:l.value===!1}),{...i,default:a=>{let{props:{class:x,...se}}=a;return t(le,null,[e.prefix&&t("span",{class:"v-text-field__prefix"},[e.prefix]),fe(t("textarea",j({ref:E,class:x,value:c.value,onInput:X,autofocus:e.autofocus,readonly:ne.value,disabled:b.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:R,onBlur:T},se,V),null),[[Ne("intersect"),{handler:F},null,{once:!0}]]),e.autoGrow&&fe(t("textarea",{class:[x,"v-textarea__sizer"],"onUpdate:modelValue":o=>c.value=o,ref:w,readonly:!0,"aria-hidden":"true"},null),[[$e,c.value]]),e.suffix&&t("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:f?m=>{var b;return t(le,null,[(b=i.details)==null?void 0:b.call(i,m),r&&t(le,null,[t("span",null,null),t(ze,{active:e.persistentCounter||k.value,value:z.value,max:_.value},i.counter)])])}:void 0})}),He({},C,h,E)}}),pa={class:"backadminP"},Va={class:"backtop"},ba={class:"bgbox"},xa=re("div",{class:"bgbox2"},null,-1),ya=re("h1",{class:"text-center"},"商品管理",-1),ha={key:2,class:"text-center"},_a={__name:"AdminProducts",setup(e){const y=u([]),g=Oe(),B=u(5),i=u([{key:"name",order:"asc"}]),c=u(1),k=u([]),K=[{title:"圖片",align:"center",sortable:!1,key:"images"},{title:"名稱",align:"center",sortable:!0,key:"name"},{title:"製造商",align:"center",sortable:!0,key:"manufacturers"},{title:"分類",align:"center",sortable:!0,key:"category"},{title:"價錢",align:"center",sortable:!0,key:"price"},{title:"主題色",align:"center",sortable:!1,key:"color"},{title:"文字主題色",align:"center",sortable:!1,key:"textColor"},{title:"上架",align:"center",sortable:!0,key:"sell"},{title:"喜歡",align:"center",sortable:!0,key:"totle"},{title:"售出數",align:"center",sortable:!0,key:"sellTotle"},{title:"編輯",align:"center",sortable:!1,key:"edit"}],T=u(!1),z=u(0),_=u(""),F=async()=>{var l,a;T.value=!0;try{const{data:x}=await te.get("./products/all",{params:{page:c.value,itemsPerPage:B.value,sortBy:((l=i.value[0])==null?void 0:l.key)||"_id",sortOrder:((a=i.value[0])==null?void 0:a.order)||"asc",search:_.value}});k.value.splice(0,k.value.length,...x.result.data),z.value=x.result.count}catch(x){g({text:x.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom",rounded:"pill",variant:"tonal"}})}T.value=!1};F();const C=u(!1),h=u(""),D=()=>{c.value=1,F()},E=l=>{h.value=l._id,P.value.value=l.name,p.value.value=l.price,r.value.value=l.description,f.value.value=l.category,d.value.value=l.manufacturers,I.value.value=l.color,U.value.value=l.textColor,V.value.value=l.sell,y.value=l.images,C.value=!0},N=()=>{h.value=""},R=()=>{if(C.value=!1,Y(),y.value=u([]),m.value.length>0)for(let l=0;l<m.value.length*2;l++)b.value.deleteFileRecord(m.value[l]),b.value.deleteFileRecord(v.value[l]);for(let l=0;l<v.value.length*2;l++)b.value.deleteFileRecord(v.value[l])},J=()=>{if(q(),m.value.length>0)for(let l=0;l<m.value.length*2;l++)b.value.deleteFileRecord(m.value[l]),b.value.deleteFileRecord(v.value[l]);for(let l=0;l<v.value.length*2;l++)b.value.deleteFileRecord(v.value[l])},H=["MIMEYOI","ALTER","好微笑","DAIKI"],Q=la({name:O().required("缺少名稱"),price:oa().required("缺少價格").min(0,"價格錯誤").typeError("沒有價格"),description:O().required("缺少說明"),category:O().required("缺少分類"),manufacturers:O().required("缺少製造商").test("製造商錯誤",l=>H.includes(l)),sell:ra(),color:O().required("需要主題色"),textColor:O().required("需要文字主題色")}),{handleSubmit:X,isSubmitting:w,handleReset:q,resetForm:Y}=na({validationSchema:Q,initialValues:{name:"",price:0,description:"",category:"",manufacturers:"",color:"",textColor:"",sell:!1}}),P=M("name"),p=M("price"),r=M("description"),f=M("category"),d=M("manufacturers"),V=M("sell"),I=M("color"),U=M("textColor"),v=u([]),m=u([]),b=u(null),ae=async()=>{try{await te.post("/products/lineAll/"),g({text:"推送成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom",rounded:"pill",variant:"tonal"}})}catch(l){g({text:l.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom",rounded:"pill",variant:"tonal"}})}},ne=X(async l=>{if(h.value.length===0&&v.value.length===0)return g({text:"沒有圖片",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom",rounded:"pill",variant:"tonal"}});try{const a=new FormData;a.append("name",l.name),a.append("price",l.price),a.append("description",l.description),a.append("category",l.category),a.append("manufacturers",l.manufacturers),a.append("sell",l.sell),a.append("color",l.color),a.append("textColor",l.textColor);for(let x=0;x<v.value.length;x++)v.value.length>0&&a.append("images",v.value[x].file);h.value.length>0?(await te.patch("/products/"+h.value,a),g({text:"修改成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom",rounded:"pill",variant:"tonal"}})):(await te.post("/products",a),g({text:"新增成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom",rounded:"pill",variant:"tonal"}})),R(),F()}catch(a){g({text:a.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom",rounded:"pill",variant:"tonal"}})}});return(l,a)=>{const x=ge("VDataTableServer"),se=ge("VueFileAgent");return S(),ie("section",pa,[re("section",Va,[re("div",ba,[t(de,{class:"mainimg",src:ta,cover:""})]),xa]),t(ia,null,{default:s(()=>[t(xe,null,{default:s(()=>[t(ce,{cols:"12"},{default:s(()=>[ya]),_:1}),t(pe),t(ce,{cols:"12"},{default:s(()=>[t(x,{"items-per-page":B.value,"onUpdate:itemsPerPage":[a[2]||(a[2]=o=>B.value=o),F],"sort-by":i.value,"onUpdate:sortBy":[a[3]||(a[3]=o=>i.value=o),F],page:c.value,"onUpdate:page":[a[4]||(a[4]=o=>c.value=o),F],items:k.value,headers:K,loading:T.value,"items-length":z.value,hover:"",search:_.value},{top:s(()=>[t(da,{flat:""},{default:s(()=>[t(ca,null,{default:s(()=>[A("我的商品")]),_:1}),t(G,{label:"搜尋","append-icon":"mdi-magnify",modelValue:_.value,"onUpdate:modelValue":a[0]||(a[0]=o=>_.value=o),"onClick:append":D,onKeydown:je(D,["enter"])},null,8,["modelValue","onKeydown"]),t(pe,{class:"mx-4",inset:"",vertical:""}),t(Ve),t(be,{modelValue:C.value,"onUpdate:modelValue":a[1]||(a[1]=o=>C.value=o),"max-width":"500px"},{activator:s(({props:o})=>[t($,j({dark:"",class:"mb-2"},o,{onClick:N}),{default:s(()=>[A(" 新增商品 ")]),_:2},1040)]),_:1},8,["modelValue"])]),_:1})]),"item.images":s(({item:o})=>[(S(),L(de,{src:o.raw.images[0],key:l.i,cover:"","aspect-ratio":"16/9"},null,8,["src"]))]),"item.sell":s(({item:o})=>[o.raw.sell?(S(),L(aa,{key:0,icon:"mdi-check"})):Z("",!0)]),"item.edit":s(({item:o})=>[t($,{icon:"mdi-pencil",onClick:ve=>E(o.raw),variant:"text"},null,8,["onClick"])]),_:2},1032,["items-per-page","sort-by","page","items","loading","items-length","search"])]),_:1})]),_:1}),t(be,{persistent:"",modelValue:C.value,"onUpdate:modelValue":a[16]||(a[16]=o=>C.value=o),width:"800px",scrollable:""},{default:s(()=>[t(sa,{disabled:n(w),onSubmit:Ke(n(ne),["prevent"])},{default:s(()=>[t(Je,{style:{height:"80vh"}},{default:s(()=>[t(Qe,null,{default:s(()=>[A(Xe(h.value.length>0?"編輯商品":"新增商品"),1)]),_:1}),t(Ye,null,{default:s(()=>[t(G,{label:"名稱",modelValue:n(P).value.value,"onUpdate:modelValue":a[5]||(a[5]=o=>n(P).value.value=o),"error-messages":n(P).errorMessage.value},null,8,["modelValue","error-messages"]),t(G,{label:"價格",modelValue:n(p).value.value,"onUpdate:modelValue":a[6]||(a[6]=o=>n(p).value.value=o),modelModifiers:{number:!0},"error-messages":n(p).errorMessage.value,type:"number",min:"0"},null,8,["modelValue","error-messages"]),t(G,{label:"分類",modelValue:n(f).value.value,"onUpdate:modelValue":a[7]||(a[7]=o=>n(f).value.value=o),"error-messages":n(f).errorMessage.value},null,8,["modelValue","error-messages"]),t(We,{items:H,label:"製造商",modelValue:n(d).value.value,"onUpdate:modelValue":a[8]||(a[8]=o=>n(d).value.value=o),"error-messages":n(d).errorMessage.value},null,8,["modelValue","error-messages"]),t(G,{label:"主題色",modelValue:n(I).value.value,"onUpdate:modelValue":a[9]||(a[9]=o=>n(I).value.value=o),"error-messages":n(I).errorMessage.value},null,8,["modelValue","error-messages"]),t(G,{label:"文字主題色",modelValue:n(U).value.value,"onUpdate:modelValue":a[10]||(a[10]=o=>n(U).value.value=o),"error-messages":n(U).errorMessage.value},null,8,["modelValue","error-messages"]),t(ga,{label:"說明",modelValue:n(r).value.value,"onUpdate:modelValue":a[11]||(a[11]=o=>n(r).value.value=o),"error-messages":n(r).errorMessage.value},null,8,["modelValue","error-messages"]),t(ma,{label:"上架",modelValue:n(V).value.value,"onUpdate:modelValue":a[12]||(a[12]=o=>n(V).value.value=o)},null,8,["modelValue"]),!y.value.length>0?(S(),L(se,{key:0,modelValue:v.value,"onUpdate:modelValue":a[13]||(a[13]=o=>v.value=o),"raw-model-value":m.value,"onUpdate:rawModelValue":a[14]||(a[14]=o=>m.value=o),"max-files":6,"max-size":"5MB",accept:"image/jpg,image/jpeg,image/png",multiple:!0,"error-text":{type:"檔案格式錯誤",size:"檔案太大"},"help-text":"選擇檔案或拖曳至此",deletable:"",ref_key:"fileAgent",ref:b},null,8,["modelValue","raw-model-value"])):Z("",!0),y.value.length>0?(S(),L(xe,{key:1},{default:s(()=>[(S(!0),ie(le,null,Ze(y.value,(o,ve)=>(S(),L(ce,{key:ve,cover:"","aspect-ratio":"16/9"},{default:s(()=>[t(de,{src:o},null,8,["src"])]),_:2},1024))),128))]),_:1})):Z("",!0),!v.value.length>0&&!y.value.length>0?(S(),ie("p",ha,"需要圖片")):Z("",!0),y.value.length>0?(S(),L($,{key:3,onClick:a[15]||(a[15]=o=>y.value=[])},{default:s(()=>[A("重新上傳圖片")]),_:1})):Z("",!0)]),_:1}),t(ea,null,{default:s(()=>[t(Ve,null,{default:s(()=>[t($,{color:"red",onClick:R,loading:n(w)},{default:s(()=>[A("取消")]),_:1},8,["loading"]),t($,{color:"primary",onClick:J,loading:n(w)},{default:s(()=>[A("重製")]),_:1},8,["loading"]),t($,{color:"green",type:"submit",loading:n(w)},{default:s(()=>[A("送出")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1},8,["modelValue"])]),_:1}),t($,{onClick:ae},{default:s(()=>[A("推送最新商品")]),_:1}),t(ua)])}}};export{_a as default};