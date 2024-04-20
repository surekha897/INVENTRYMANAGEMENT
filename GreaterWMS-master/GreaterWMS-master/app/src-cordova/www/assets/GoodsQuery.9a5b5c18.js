import{Q as i}from"./QItemLabel.4c6d5a0a.js";import{Q as L,b as o,a as u}from"./QList.b9c40f0f.js";import{_ as P,az as R,J as j,aP as z,r as J,c as l,w as N,o as X,M as E,O as F,R as e,f as a,S as s,U as d,X as g}from"./index.f33d3375.js";import{u as H}from"./use-quasar.9dcc7043.js";import{u as K}from"./vue-i18n.runtime.esm-bundler.284a7e26.js";import{a as W}from"./index.2732f8ae.js";const Y=R({name:"GoodsQuery",data(){return{}},setup(){const t=j();z();const _=H(),h=J(0),{t:f}=K(),v=l({get:()=>t.state.fabchange.fab1}),b=l({get:()=>t.state.fabchange.fab2}),O=l({get:()=>t.state.fabchange.fab3}),A=l({get:()=>t.state.fabchange.fab4}),w=l({get:()=>t.state.screenchange.screenscroll}),G=l({get:()=>t.state.loginauth.authin}),I=l({get:()=>t.state.loginauth.login_name}),$=l({get:()=>t.state.loginauth.operator}),C=l({get:()=>t.state.settings.openid}),S=l({get:()=>t.state.langchange.lang}),D=l({get:()=>t.state.settings.server}),r=l({get:()=>t.state.scanchanged.scandata,set:n=>{t.commit("scanchanged/ScanChanged",n)}}),Q=l({get:()=>t.state.scanchanged.datadetail,set:n=>{t.commit("scanchanged/ScanDataChanged",n)}}),T=l({get:()=>t.state.scanchanged.asndata,set:n=>{t.commit("scanchanged/ASNDataChanged",n)}}),U=l({get:()=>t.state.scanchanged.dndata,set:n=>{t.commit("scanchanged/DNDataChanged",n)}}),k=l({get:()=>t.state.scanchanged.bindata,set:n=>{t.commit("scanchanged/BinDataChanged",n)}}),B=l({get:()=>t.state.scanchanged.tablelist,set:n=>{t.commit("scanchanged/TableDataChanged",n)}}),p=l({get:()=>t.state.scanchanged.scanmode,set:n=>{t.commit("scanchanged/ScanModeChanged",n)}}),y=l({get:()=>t.state.scanchanged.bar_scanned}),m=l({get:()=>t.state.scanchanged.apiurl,set:n=>{t.commit("scanchanged/ApiUrlChanged",n)}}),M=l({get:()=>t.state.scanchanged.apiurlnext,set:n=>{t.commit("scanchanged/ApiUrlNextChanged",n)}}),q=l({get:()=>t.state.scanchanged.apiurlprevious,set:n=>{t.commit("scanchanged/ApiUrlPreviousChanged",n)}});function V(n){m.value=D.value+"goods/?goods_code="+n,W.get(m.value,{headers:{"Content-Type":'application/json, charset="utf-8"',token:C.value,language:S.value,operator:$.value}}).then(c=>{c.data.detail?_.notify({type:"negative",message:f("notice.mobile_scan.notice1")}):Q.value=c.data.results[0]}).catch(c=>{_.notify({type:"negative",message:f("notice.mobile_scan.notice3")})})}return N(y,(n,c)=>{p.value==="GOODS"&&V(r.value)}),N(w,(n,c)=>{}),X(()=>{p.value==="GOODS"&&V(r.value)}),{t:f,fab1:v,fab2:b,fab3:O,fab4:A,screenscroll:w,authin:G,login_name:I,openid:C,operator:$,lang:S,requestauth:h,baseurl:D,apiurl:m,apiurlnext:M,apiurlprevious:q,scandata:r,datadetail:Q,tablelist:B,asndata:T,dndata:U,bindata:k,scanmode:p,bar_scanned:y}}});function Z(t,_,h,f,v,b){return E(),F(L,{bordered:"",padding:""},{default:e(()=>[a(u,null,{default:e(()=>[a(o,null,{default:e(()=>[a(i,null,{default:e(()=>[s(d(t.datadetail.goods_code),1)]),_:1}),a(i,{caption:""},{default:e(()=>[s(d(t.datadetail.goods_desc),1)]),_:1})]),_:1}),a(o,{side:"",top:""},{default:e(()=>[a(i,{caption:""},{default:e(()=>[s(d(t.datadetail.update_time),1)]),_:1})]),_:1})]),_:1}),a(g,{spaced:""}),a(u,null,{default:e(()=>[a(o,null,{default:e(()=>[s(d(t.$t("goods.view_goodslist.goods_supplier")),1)]),_:1}),a(o,{side:""},{default:e(()=>[a(i,{caption:""},{default:e(()=>[s(d(t.datadetail.goods_supplier),1)]),_:1})]),_:1})]),_:1}),a(g,{spaced:"",inset:"item"}),a(u,null,{default:e(()=>[a(o,null,{default:e(()=>[s(d(t.$t("goods.view_goodslist.goods_weight")),1)]),_:1}),a(o,{side:""},{default:e(()=>[a(i,{caption:""},{default:e(()=>[s(d(t.datadetail.goods_weight),1)]),_:1})]),_:1})]),_:1}),a(g,{spaced:"",inset:"item"}),a(u,null,{default:e(()=>[a(o,null,{default:e(()=>[s(d(t.$t("goods.view_goodslist.goods_w")),1)]),_:1}),a(o,{side:""},{default:e(()=>[a(i,{caption:""},{default:e(()=>[s(d(t.datadetail.goods_w),1)]),_:1})]),_:1})]),_:1}),a(g,{spaced:"",inset:"item"}),a(u,null,{default:e(()=>[a(o,null,{default:e(()=>[s(d(t.$t("goods.view_goodslist.goods_d")),1)]),_:1}),a(o,{side:""},{default:e(()=>[a(i,{caption:""},{default:e(()=>[s(d(t.datadetail.goods_d),1)]),_:1})]),_:1})]),_:1}),a(g,{spaced:"",inset:"item"}),a(u,null,{default:e(()=>[a(o,null,{default:e(()=>[s(d(t.$t("goods.view_goodslist.goods_h")),1)]),_:1}),a(o,{side:""},{default:e(()=>[a(i,{caption:""},{default:e(()=>[s(d(t.datadetail.goods_h),1)]),_:1})]),_:1})]),_:1}),a(g,{spaced:"",inset:"item"}),a(u,null,{default:e(()=>[a(o,null,{default:e(()=>[s(d(t.$t("goods.view_goodslist.unit_volume")),1)]),_:1}),a(o,{side:""},{default:e(()=>[a(i,{caption:""},{default:e(()=>[s(d(t.datadetail.unit_volume),1)]),_:1})]),_:1})]),_:1}),a(g,{spaced:"",inset:"item"}),a(u,null,{default:e(()=>[a(o,null,{default:e(()=>[s(d(t.$t("goods.view_goodslist.goods_unit")),1)]),_:1}),a(o,{side:""},{default:e(()=>[a(i,{caption:""},{default:e(()=>[s(d(t.datadetail.goods_unit),1)]),_:1})]),_:1})]),_:1}),a(g,{spaced:"",inset:"item"}),a(u,null,{default:e(()=>[a(o,null,{default:e(()=>[s(d(t.$t("goods.view_goodslist.goods_class")),1)]),_:1}),a(o,{side:""},{default:e(()=>[a(i,{caption:""},{default:e(()=>[s(d(t.datadetail.goods_class),1)]),_:1})]),_:1})]),_:1}),a(g,{spaced:"",inset:"item"}),a(u,null,{default:e(()=>[a(o,null,{default:e(()=>[s(d(t.$t("goods.view_goodslist.goods_brand")),1)]),_:1}),a(o,{side:""},{default:e(()=>[a(i,{caption:""},{default:e(()=>[s(d(t.datadetail.goods_brand),1)]),_:1})]),_:1})]),_:1}),a(g,{spaced:"",inset:"item"}),a(u,null,{default:e(()=>[a(o,null,{default:e(()=>[s(d(t.$t("goods.view_goodslist.goods_color")),1)]),_:1}),a(o,{side:""},{default:e(()=>[a(i,{caption:""},{default:e(()=>[s(d(t.datadetail.goods_color),1)]),_:1})]),_:1})]),_:1}),a(g,{spaced:"",inset:"item"}),a(u,null,{default:e(()=>[a(o,null,{default:e(()=>[s(d(t.$t("goods.view_goodslist.goods_shape")),1)]),_:1}),a(o,{side:""},{default:e(()=>[a(i,{caption:""},{default:e(()=>[s(d(t.datadetail.goods_shape),1)]),_:1})]),_:1})]),_:1}),a(g,{spaced:"",inset:"item"}),a(u,null,{default:e(()=>[a(o,null,{default:e(()=>[s(d(t.$t("goods.view_goodslist.goods_specs")),1)]),_:1}),a(o,{side:""},{default:e(()=>[a(i,{caption:""},{default:e(()=>[s(d(t.datadetail.goods_specs),1)]),_:1})]),_:1})]),_:1}),a(g,{spaced:"",inset:"item"}),a(u,null,{default:e(()=>[a(o,null,{default:e(()=>[s(d(t.$t("goods.view_goodslist.goods_origin")),1)]),_:1}),a(o,{side:""},{default:e(()=>[a(i,{caption:""},{default:e(()=>[s(d(t.datadetail.goods_origin),1)]),_:1})]),_:1})]),_:1}),a(g,{spaced:"",inset:"item"}),a(u,null,{default:e(()=>[a(o,null,{default:e(()=>[s(d(t.$t("goods.view_goodslist.goods_cost")),1)]),_:1}),a(o,{side:""},{default:e(()=>[a(i,{caption:""},{default:e(()=>[s(d(t.datadetail.goods_cost),1)]),_:1})]),_:1})]),_:1}),a(g,{spaced:"",inset:"item"}),a(u,null,{default:e(()=>[a(o,null,{default:e(()=>[s(d(t.$t("goods.view_goodslist.goods_price")),1)]),_:1}),a(o,{side:""},{default:e(()=>[a(i,{caption:""},{default:e(()=>[s(d(t.datadetail.goods_price),1)]),_:1})]),_:1})]),_:1})]),_:1})}var oa=P(Y,[["render",Z]]);export{oa as default};
