import{I as ye,a4 as he,a5 as Be,a6 as Ie,K as ke,a7 as Ce,a8 as we,a9 as Se,c as ee,R as Pe,aa as Fe,ab as oe,ac as me,i as l,A as K,ad as Re,ae as _e,r as u,af as Ue,N as Ae,o as Me,O as W,P as Te,ag as De,ah as Ee,F as ae,ai as fe,aj as Ne,ak as $e,al as He,am as qe,U as ue,an as ze,ao as Ge,Q as Oe,b as je,H as te,e as ge,f as S,h as ie,x as re,w as s,y as $,m as de,E as pe,t as A,a0 as G,ap as Ke,z as Ve,Y as be,j as O,k as X,l as n,_ as Le,B as Ye,Z as Qe,D as Ze,C as Je,$ as We,n as Xe,aq as ea,q as aa}from"./index-3a082bb1.js";import{_ as la}from"./71b8e0fl_cL._AC_SL1500-811e8b6d.js";import{c as ta,a as j,e as oa,f as ra,u as na,b as M,V as sa}from"./index.esm-5d422f84.js";import{F as ua}from"./FooTer-aad8fc6f.js";import{V as ia}from"./VContainer-4ae9f498.js";import{V as xe,a as ce}from"./VRow-fdee8500.js";import{V as da,a as ca}from"./VToolbar-7d5353fb.js";/* empty css              */const va=ye({...he(),...Be(Ie(),["inline"])},"VCheckbox"),ma=ke()({name:"VCheckbox",inheritAttrs:!1,props:va(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,y){let{attrs:g,slots:B}=y;const i=Ce(e,"modelValue"),{isFocused:c,focus:k,blur:L}=we(e),T=Se(),H=ee(()=>e.id||`checkbox-${T}`);return Pe(()=>{const[R,F]=Fe(g),[C,h]=oe.filterProps(e),[D,E]=me.filterProps(e);return l(oe,K({class:["v-checkbox",e.class]},R,C,{modelValue:i.value,"onUpdate:modelValue":N=>i.value=N,id:H.value,focused:c.value,style:e.style}),{...B,default:N=>{let{id:_,messagesId:Y,isDisabled:q,isReadonly:Q}=N;return l(me,K(D,{id:_.value,"aria-describedby":Y.value,disabled:q.value,readonly:Q.value},F,{modelValue:i.value,"onUpdate:modelValue":Z=>i.value=Z,onFocus:k,onBlur:L}),B)}})}),{}}});const fa=ye({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...he(),...Re()},"VTextarea"),ga=ke()({name:"VTextarea",directives:{Intersect:_e},inheritAttrs:!1,props:fa(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,y){let{attrs:g,emit:B,slots:i}=y;const c=Ce(e,"modelValue"),{isFocused:k,focus:L,blur:T}=we(e),H=ee(()=>typeof e.counterValue=="function"?e.counterValue(c.value):(c.value||"").toString().length),R=ee(()=>{if(g.maxlength)return g.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function F(r,f){var d,V;!e.autofocus||!r||(V=(d=f[0].target)==null?void 0:d.focus)==null||V.call(d)}const C=u(),h=u(),D=Ue(""),E=u(),N=ee(()=>e.persistentPlaceholder||k.value||e.active);function _(){var r;E.value!==document.activeElement&&((r=E.value)==null||r.focus()),k.value||L()}function Y(r){_(),B("click:control",r)}function q(r){B("mousedown:control",r)}function Q(r){r.stopPropagation(),_(),ue(()=>{c.value="",ze(e["onClick:clear"],r)})}function Z(r){var d;const f=r.target;if(c.value=f.value,(d=e.modelModifiers)!=null&&d.trim){const V=[f.selectionStart,f.selectionEnd];ue(()=>{f.selectionStart=V[0],f.selectionEnd=V[1]})}}const w=u(),z=u(+e.rows),J=ee(()=>["plain","underlined"].includes(e.variant));Ae(()=>{e.autoGrow||(z.value=+e.rows)});function P(){e.autoGrow&&ue(()=>{if(!w.value||!h.value)return;const r=getComputedStyle(w.value),f=getComputedStyle(h.value.$el),d=parseFloat(r.getPropertyValue("--v-field-padding-top"))+parseFloat(r.getPropertyValue("--v-input-padding-top"))+parseFloat(r.getPropertyValue("--v-field-padding-bottom")),V=w.value.scrollHeight,I=parseFloat(r.lineHeight),U=Math.max(parseFloat(e.rows)*I+d,parseFloat(f.getPropertyValue("--v-input-control-height"))),v=parseFloat(e.maxRows)*I+d||1/0,m=Oe(V??0,U,v);z.value=Math.floor((m-d)/I),D.value=Ge(m)})}Me(P),W(c,P),W(()=>e.rows,P),W(()=>e.maxRows,P),W(()=>e.density,P);let p;return W(w,r=>{r?(p=new ResizeObserver(P),p.observe(w.value)):p==null||p.disconnect()}),Te(()=>{p==null||p.disconnect()}),Pe(()=>{const r=!!(i.counter||e.counter||e.counterValue),f=!!(r||i.details),[d,V]=Fe(g),[{modelValue:I,...U}]=oe.filterProps(e),[v]=De(e);return l(oe,K({ref:C,modelValue:c.value,"onUpdate:modelValue":m=>c.value=m,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--plain-underlined":J.value},e.class],style:e.style},d,U,{centerAffix:z.value===1&&!J.value,focused:k.value}),{...i,default:m=>{let{isDisabled:b,isDirty:le,isReadonly:ne,isValid:t}=m;return l(Ee,K({ref:h,style:{"--v-textarea-control-height":D.value},onClick:Y,onMousedown:q,"onClick:clear":Q,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},v,{active:N.value||le.value,centerAffix:z.value===1&&!J.value,dirty:le.value||e.dirty,disabled:b.value,focused:k.value,error:t.value===!1}),{...i,default:a=>{let{props:{class:x,...se}}=a;return l(ae,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),fe(l("textarea",K({ref:E,class:x,value:c.value,onInput:Z,autofocus:e.autofocus,readonly:ne.value,disabled:b.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:_,onBlur:T},se,V),null),[[Ne("intersect"),{handler:F},null,{once:!0}]]),e.autoGrow&&fe(l("textarea",{class:[x,"v-textarea__sizer"],"onUpdate:modelValue":o=>c.value=o,ref:w,readonly:!0,"aria-hidden":"true"},null),[[$e,c.value]]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:f?m=>{var b;return l(ae,null,[(b=i.details)==null?void 0:b.call(i,m),r&&l(ae,null,[l("span",null,null),l(He,{active:e.persistentCounter||k.value,value:H.value,max:R.value},i.counter)])])}:void 0})}),qe({},C,h,E)}}),pa={class:"backtop"},Va={class:"bgbox"},ba=re("div",{class:"bgbox2"},null,-1),xa=re("h1",{class:"text-center"},"商品管理",-1),ya={key:2,class:"text-center"},Sa={__name:"AdminProducts",setup(e){const y=u([]),g=je(),B=u(5),i=u([{key:"name",order:"asc"}]),c=u(1),k=u([]),L=[{title:"圖片",align:"center",sortable:!1,key:"images"},{title:"名稱",align:"center",sortable:!0,key:"name"},{title:"製造商",align:"center",sortable:!0,key:"manufacturers"},{title:"分類",align:"center",sortable:!0,key:"category"},{title:"價錢",align:"center",sortable:!0,key:"price"},{title:"主題色",align:"center",sortable:!1,key:"color"},{title:"文字主題色",align:"center",sortable:!1,key:"textColor"},{title:"上架",align:"center",sortable:!0,key:"sell"},{title:"喜歡",align:"center",sortable:!0,key:"totle"},{title:"售出數",align:"center",sortable:!0,key:"sellTotle"},{title:"編輯",align:"center",sortable:!1,key:"edit"}],T=u(!1),H=u(0),R=u(""),F=async()=>{var t,a;T.value=!0;try{const{data:x}=await te.get("./products/all",{params:{page:c.value,itemsPerPage:B.value,sortBy:((t=i.value[0])==null?void 0:t.key)||"_id",sortOrder:((a=i.value[0])==null?void 0:a.order)||"asc",search:R.value}});k.value.splice(0,k.value.length,...x.result.data),H.value=x.result.count}catch(x){g({text:x.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom",rounded:"pill",variant:"tonal"}})}T.value=!1};F();const C=u(!1),h=u(""),D=()=>{c.value=1,F()},E=t=>{h.value=t._id,P.value.value=t.name,p.value.value=t.price,r.value.value=t.description,f.value.value=t.category,d.value.value=t.manufacturers,I.value.value=t.color,U.value.value=t.textColor,V.value.value=t.sell,y.value=t.images,C.value=!0},N=()=>{h.value=""},_=()=>{if(C.value=!1,J(),y.value=u([]),m.value.length>0)for(let t=0;t<m.value.length*2;t++)b.value.deleteFileRecord(m.value[t]),b.value.deleteFileRecord(v.value[t]);for(let t=0;t<v.value.length*2;t++)b.value.deleteFileRecord(v.value[t])},Y=()=>{if(z(),m.value.length>0)for(let t=0;t<m.value.length*2;t++)b.value.deleteFileRecord(m.value[t]),b.value.deleteFileRecord(v.value[t]);for(let t=0;t<v.value.length*2;t++)b.value.deleteFileRecord(v.value[t])},q=["MIMEYOI","ALTER","好微笑","DAIKI"],Q=ta({name:j().required("缺少名稱"),price:oa().required("缺少價格").min(0,"價格錯誤").typeError("沒有價格"),description:j().required("缺少說明"),category:j().required("缺少分類"),manufacturers:j().required("缺少製造商").test("製造商錯誤",t=>q.includes(t)),sell:ra(),color:j().required("需要主題色"),textColor:j().required("需要文字主題色")}),{handleSubmit:Z,isSubmitting:w,handleReset:z,resetForm:J}=na({validationSchema:Q,initialValues:{name:"",price:0,description:"",category:"",manufacturers:"",color:"",textColor:"",sell:!1}}),P=M("name"),p=M("price"),r=M("description"),f=M("category"),d=M("manufacturers"),V=M("sell"),I=M("color"),U=M("textColor"),v=u([]),m=u([]),b=u(null),le=async()=>{try{await te.post("/products/lineAll/"),g({text:"推送成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom",rounded:"pill",variant:"tonal"}})}catch(t){g({text:t.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom",rounded:"pill",variant:"tonal"}})}},ne=Z(async t=>{if(h.value.length===0&&v.value.length===0)return g({text:"沒有圖片",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom",rounded:"pill",variant:"tonal"}});try{const a=new FormData;a.append("name",t.name),a.append("price",t.price),a.append("description",t.description),a.append("category",t.category),a.append("manufacturers",t.manufacturers),a.append("sell",t.sell),a.append("color",t.color),a.append("textColor",t.textColor);for(let x=0;x<v.value.length;x++)v.value.length>0&&a.append("images",v.value[x].file);h.value.length>0?(await te.patch("/products/"+h.value,a),g({text:"修改成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom",rounded:"pill",variant:"tonal"}})):(await te.post("/products",a),g({text:"新增成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom",rounded:"pill",variant:"tonal"}})),_(),F()}catch(a){g({text:a.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom",rounded:"pill",variant:"tonal"}})}});return(t,a)=>{const x=ge("VDataTableServer"),se=ge("VueFileAgent");return S(),ie(ae,null,[re("section",pa,[re("div",Va,[l(de,{class:"mainimg",src:la,cover:""})]),ba]),l(ia,null,{default:s(()=>[l(xe,null,{default:s(()=>[l(ce,{cols:"12"},{default:s(()=>[xa]),_:1}),l(pe),l(ce,{cols:"12"},{default:s(()=>[l(x,{"items-per-page":B.value,"onUpdate:itemsPerPage":[a[2]||(a[2]=o=>B.value=o),F],"sort-by":i.value,"onUpdate:sortBy":[a[3]||(a[3]=o=>i.value=o),F],page:c.value,"onUpdate:page":[a[4]||(a[4]=o=>c.value=o),F],items:k.value,headers:L,loading:T.value,"items-length":H.value,hover:"",search:R.value},{top:s(()=>[l(da,{flat:""},{default:s(()=>[l(ca,null,{default:s(()=>[A("我的商品")]),_:1}),l(G,{label:"搜尋","append-icon":"mdi-magnify",modelValue:R.value,"onUpdate:modelValue":a[0]||(a[0]=o=>R.value=o),"onClick:append":D,onKeydown:Ke(D,["enter"])},null,8,["modelValue","onKeydown"]),l(pe,{class:"mx-4",inset:"",vertical:""}),l(Ve),l(be,{modelValue:C.value,"onUpdate:modelValue":a[1]||(a[1]=o=>C.value=o),"max-width":"500px"},{activator:s(({props:o})=>[l($,K({color:"primary",dark:"",class:"mb-2"},o,{onClick:N}),{default:s(()=>[A(" 新增商品 ")]),_:2},1040)]),_:1},8,["modelValue"])]),_:1})]),"item.images":s(({item:o})=>[(S(),O(de,{src:o.raw.images[0],key:t.i,cover:"","aspect-ratio":"16/9"},null,8,["src"]))]),"item.sell":s(({item:o})=>[o.raw.sell?(S(),O(aa,{key:0,icon:"mdi-check"})):X("",!0)]),"item.edit":s(({item:o})=>[l($,{icon:"mdi-pencil",onClick:ve=>E(o.raw),variant:"text"},null,8,["onClick"])]),_:2},1032,["items-per-page","sort-by","page","items","loading","items-length","search"])]),_:1})]),_:1}),l(be,{persistent:"",modelValue:C.value,"onUpdate:modelValue":a[16]||(a[16]=o=>C.value=o),width:"800px",scrollable:""},{default:s(()=>[l(sa,{disabled:n(w),onSubmit:Le(n(ne),["prevent"])},{default:s(()=>[l(Ye,{style:{height:"80vh"}},{default:s(()=>[l(Qe,null,{default:s(()=>[A(Ze(h.value.length>0?"編輯商品":"新增商品"),1)]),_:1}),l(Je,null,{default:s(()=>[l(G,{label:"名稱",modelValue:n(P).value.value,"onUpdate:modelValue":a[5]||(a[5]=o=>n(P).value.value=o),"error-messages":n(P).errorMessage.value},null,8,["modelValue","error-messages"]),l(G,{label:"價格",modelValue:n(p).value.value,"onUpdate:modelValue":a[6]||(a[6]=o=>n(p).value.value=o),modelModifiers:{number:!0},"error-messages":n(p).errorMessage.value,type:"number",min:"0"},null,8,["modelValue","error-messages"]),l(G,{label:"分類",modelValue:n(f).value.value,"onUpdate:modelValue":a[7]||(a[7]=o=>n(f).value.value=o),"error-messages":n(f).errorMessage.value},null,8,["modelValue","error-messages"]),l(We,{items:q,label:"製造商",modelValue:n(d).value.value,"onUpdate:modelValue":a[8]||(a[8]=o=>n(d).value.value=o),"error-messages":n(d).errorMessage.value},null,8,["modelValue","error-messages"]),l(G,{label:"主題色",modelValue:n(I).value.value,"onUpdate:modelValue":a[9]||(a[9]=o=>n(I).value.value=o),"error-messages":n(I).errorMessage.value},null,8,["modelValue","error-messages"]),l(G,{label:"文字主題色",modelValue:n(U).value.value,"onUpdate:modelValue":a[10]||(a[10]=o=>n(U).value.value=o),"error-messages":n(U).errorMessage.value},null,8,["modelValue","error-messages"]),l(ga,{label:"說明",modelValue:n(r).value.value,"onUpdate:modelValue":a[11]||(a[11]=o=>n(r).value.value=o),"error-messages":n(r).errorMessage.value},null,8,["modelValue","error-messages"]),l(ma,{label:"上架",modelValue:n(V).value.value,"onUpdate:modelValue":a[12]||(a[12]=o=>n(V).value.value=o)},null,8,["modelValue"]),!y.value.length>0?(S(),O(se,{key:0,modelValue:v.value,"onUpdate:modelValue":a[13]||(a[13]=o=>v.value=o),"raw-model-value":m.value,"onUpdate:rawModelValue":a[14]||(a[14]=o=>m.value=o),"max-files":6,"max-size":"5MB",accept:"image/jpg,image/jpeg,image/png",multiple:!0,"error-text":{type:"檔案格式錯誤",size:"檔案太大"},"help-text":"選擇檔案或拖曳至此",deletable:"",ref_key:"fileAgent",ref:b},null,8,["modelValue","raw-model-value"])):X("",!0),y.value.length>0?(S(),O(xe,{key:1},{default:s(()=>[(S(!0),ie(ae,null,Xe(y.value,(o,ve)=>(S(),O(ce,{key:ve,cover:"","aspect-ratio":"16/9"},{default:s(()=>[l(de,{src:o},null,8,["src"])]),_:2},1024))),128))]),_:1})):X("",!0),!v.value.length>0&&!y.value.length>0?(S(),ie("p",ya,"需要圖片")):X("",!0),y.value.length>0?(S(),O($,{key:3,onClick:a[15]||(a[15]=o=>y.value=[])},{default:s(()=>[A("重新上傳圖片")]),_:1})):X("",!0)]),_:1}),l(ea,null,{default:s(()=>[l(Ve,null,{default:s(()=>[l($,{color:"red",onClick:_,loading:n(w)},{default:s(()=>[A("取消")]),_:1},8,["loading"]),l($,{color:"primary",onClick:Y,loading:n(w)},{default:s(()=>[A("重製")]),_:1},8,["loading"]),l($,{color:"green",type:"submit",loading:n(w)},{default:s(()=>[A("送出")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1},8,["modelValue"])]),_:1}),l($,{onClick:le},{default:s(()=>[A("推送最新商品")]),_:1}),l(ua)],64)}}};export{Sa as default};
