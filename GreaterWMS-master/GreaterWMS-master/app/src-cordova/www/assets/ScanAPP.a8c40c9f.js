import{as as ye,ar as M,t as Ee,aH as Ce,an as U,aI as j,al as ee,s as Y,ac as Z,ao as X,a5 as we,j as _e,a0 as ze,r as S,a2 as Ae,c,aM as Te,I as Ne,H as Oe,n as fe,h as E,x as Ie,$ as x,g as Re,aN as te,aO as ae,_ as Pe,az as De,J as Me,aP as Le,w as Be,o as qe,L as Fe,aA as Ue,M as ke,O as xe,R as L,Y as ne,aQ as Ge,f as T,Q as He,m as oe,aB as $e,aC as ie}from"./index.048c29eb.js";import{Q as le}from"./QResizeObserver.23380926.js";import{Q as Qe}from"./QScrollObserver.724d0a97.js";import{g as re,s as se}from"./touch.70a9dd44.js";import{c as Ve}from"./selection.22c9b5e9.js";import{b as k}from"./format.a33550d6.js";import{Q as je}from"./QPage.47179b81.js";import{u as Ye}from"./use-quasar.07b2ea2e.js";import{a as Xe}from"./index.2885cb15.js";import{u as Je}from"./vue-i18n.runtime.esm-bundler.48d65e27.js";function J(e,l,r){const v=Z(e);let t,n=v.left-l.event.x,i=v.top-l.event.y,a=Math.abs(n),f=Math.abs(i);const d=l.direction;d.horizontal===!0&&d.vertical!==!0?t=n<0?"left":"right":d.horizontal!==!0&&d.vertical===!0?t=i<0?"up":"down":d.up===!0&&i<0?(t="up",a>f&&(d.left===!0&&n<0?t="left":d.right===!0&&n>0&&(t="right"))):d.down===!0&&i>0?(t="down",a>f&&(d.left===!0&&n<0?t="left":d.right===!0&&n>0&&(t="right"))):d.left===!0&&n<0?(t="left",a<f&&(d.up===!0&&i<0?t="up":d.down===!0&&i>0&&(t="down"))):d.right===!0&&n>0&&(t="right",a<f&&(d.up===!0&&i<0?t="up":d.down===!0&&i>0&&(t="down")));let y=!1;if(t===void 0&&r===!1){if(l.event.isFirst===!0||l.event.lastDir===void 0)return{};t=l.event.lastDir,y=!0,t==="left"||t==="right"?(v.left-=n,a=0,n=0):(v.top-=i,f=0,i=0)}return{synthetic:y,payload:{evt:e,touch:l.event.mouse!==!0,mouse:l.event.mouse===!0,position:v,direction:t,isFirst:l.event.isFirst,isFinal:r===!0,duration:Date.now()-l.event.time,distance:{x:a,y:f},offset:{x:n,y:i},delta:{x:v.left-l.event.lastX,y:v.top-l.event.lastY}}}}let Ke=0;var ce=ye({name:"touch-pan",beforeMount(e,{value:l,modifiers:r}){if(r.mouse!==!0&&M.has.touch!==!0)return;function v(n,i){r.mouse===!0&&i===!0?we(n):(r.stop===!0&&Y(n),r.prevent===!0&&ee(n))}const t={uid:"qvtp_"+Ke++,handler:l,modifiers:r,direction:re(r),noop:Ee,mouseStart(n){se(n,t)&&Ce(n)&&(U(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(n,!0))},touchStart(n){if(se(n,t)){const i=n.target;U(t,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","passiveCapture"],[i,"touchend","end","passiveCapture"]]),t.start(n)}},start(n,i){if(M.is.firefox===!0&&j(e,!0),t.lastEvt=n,i===!0||r.stop===!0){if(t.direction.all!==!0&&(i!==!0||t.modifiers.mouseAllDir!==!0)){const d=n.type.indexOf("mouse")>-1?new MouseEvent(n.type,n):new TouchEvent(n.type,n);n.defaultPrevented===!0&&ee(d),n.cancelBubble===!0&&Y(d),Object.assign(d,{qKeyEvent:n.qKeyEvent,qClickOutside:n.qClickOutside,qAnchorHandled:n.qAnchorHandled,qClonedBy:n.qClonedBy===void 0?[t.uid]:n.qClonedBy.concat(t.uid)}),t.initialEvent={target:n.target,event:d}}Y(n)}const{left:a,top:f}=Z(n);t.event={x:a,y:f,time:Date.now(),mouse:i===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:a,lastY:f}},move(n){if(t.event===void 0)return;const i=Z(n),a=i.left-t.event.x,f=i.top-t.event.y;if(a===0&&f===0)return;t.lastEvt=n;const d=t.event.mouse===!0,y=()=>{v(n,d),r.preserveCursor!==!0&&(document.documentElement.style.cursor="grabbing"),d===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Ve(),t.styleCleanup=p=>{if(t.styleCleanup=void 0,r.preserveCursor!==!0&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),d===!0){const C=()=>{document.body.classList.remove("no-pointer-events--children")};p!==void 0?setTimeout(()=>{C(),p()},50):C()}else p!==void 0&&p()}};if(t.event.detected===!0){t.event.isFirst!==!0&&v(n,t.event.mouse);const{payload:p,synthetic:C}=J(n,t,!1);p!==void 0&&(t.handler(p)===!1?t.end(n):(t.styleCleanup===void 0&&t.event.isFirst===!0&&y(),t.event.lastX=p.position.left,t.event.lastY=p.position.top,t.event.lastDir=C===!0?void 0:p.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||d===!0&&t.modifiers.mouseAllDir===!0){y(),t.event.detected=!0,t.move(n);return}const b=Math.abs(a),g=Math.abs(f);b!==g&&(t.direction.horizontal===!0&&b>g||t.direction.vertical===!0&&b<g||t.direction.up===!0&&b<g&&f<0||t.direction.down===!0&&b<g&&f>0||t.direction.left===!0&&b>g&&a<0||t.direction.right===!0&&b>g&&a>0?(t.event.detected=!0,t.move(n)):t.end(n,!0))},end(n,i){if(t.event!==void 0){if(X(t,"temp"),M.is.firefox===!0&&j(e,!1),i===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(J(n===void 0?t.lastEvt:n,t).payload);const{payload:a}=J(n===void 0?t.lastEvt:n,t,!0),f=()=>{t.handler(a)};t.styleCleanup!==void 0?t.styleCleanup(f):f()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};e.__qtouchpan=t,r.mouse===!0&&U(t,"main",[[e,"mousedown","mouseStart",`passive${r.mouseCapture===!0?"Capture":""}`]]),M.has.touch===!0&&U(t,"main",[[e,"touchstart","touchStart",`passive${r.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,l){const r=e.__qtouchpan;r!==void 0&&(l.oldValue!==l.value&&(typeof value!="function"&&r.end(),r.handler=l.value),r.direction=re(l.modifiers))},beforeUnmount(e){const l=e.__qtouchpan;l!==void 0&&(l.event!==void 0&&l.end(),X(l,"main"),X(l,"temp"),M.is.firefox===!0&&j(e,!1),l.styleCleanup!==void 0&&l.styleCleanup(),delete e.__qtouchpan)}});const ue=["vertical","horizontal"],K={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},de={prevent:!0,mouse:!0,mouseAllDir:!0},ve=e=>e>=250?50:Math.ceil(e/5);var Ze=_e({name:"QScrollArea",props:{...ze,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:l,emit:r}){const v=S(!1),t=S(!1),n=S(!1),i={vertical:S(0),horizontal:S(0)},a={vertical:{ref:S(null),position:S(0),size:S(0)},horizontal:{ref:S(null),position:S(0),size:S(0)}},{proxy:f}=Re(),d=Ae(e,f.$q);let y,b;const g=S(null),p=c(()=>"q-scrollarea"+(d.value===!0?" q-scrollarea--dark":""));a.vertical.percentage=c(()=>{const o=a.vertical.size.value-i.vertical.value;if(o<=0)return 0;const u=k(a.vertical.position.value/o,0,1);return Math.round(u*1e4)/1e4}),a.vertical.thumbHidden=c(()=>(e.visible===null?n.value:e.visible)!==!0&&v.value===!1&&t.value===!1||a.vertical.size.value<=i.vertical.value+1),a.vertical.thumbStart=c(()=>a.vertical.percentage.value*(i.vertical.value-a.vertical.thumbSize.value)),a.vertical.thumbSize=c(()=>Math.round(k(i.vertical.value*i.vertical.value/a.vertical.size.value,ve(i.vertical.value),i.vertical.value))),a.vertical.style=c(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${a.vertical.thumbStart.value}px`,height:`${a.vertical.thumbSize.value}px`})),a.vertical.thumbClass=c(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.vertical.barClass=c(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),a.horizontal.percentage=c(()=>{const o=a.horizontal.size.value-i.horizontal.value;if(o<=0)return 0;const u=k(a.horizontal.position.value/o,0,1);return Math.round(u*1e4)/1e4}),a.horizontal.thumbHidden=c(()=>(e.visible===null?n.value:e.visible)!==!0&&v.value===!1&&t.value===!1||a.horizontal.size.value<=i.horizontal.value+1),a.horizontal.thumbStart=c(()=>a.horizontal.percentage.value*(i.horizontal.value-a.horizontal.thumbSize.value)),a.horizontal.thumbSize=c(()=>Math.round(k(i.horizontal.value*i.horizontal.value/a.horizontal.size.value,ve(i.horizontal.value),i.horizontal.value))),a.horizontal.style=c(()=>({...e.thumbStyle,...e.horizontalThumbStyle,left:`${a.horizontal.thumbStart.value}px`,width:`${a.horizontal.thumbSize.value}px`})),a.horizontal.thumbClass=c(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.horizontal.barClass=c(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const C=c(()=>a.vertical.thumbHidden.value===!0&&a.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),G=[[ce,o=>{P(o,"vertical")},void 0,{vertical:!0,...de}]],B=[[ce,o=>{P(o,"horizontal")},void 0,{horizontal:!0,...de}]];function N(){const o={};return ue.forEach(u=>{const h=a[u];o[u+"Position"]=h.position.value,o[u+"Percentage"]=h.percentage.value,o[u+"Size"]=h.size.value,o[u+"ContainerSize"]=i[u].value}),o}const O=Te(()=>{const o=N();o.ref=f,r("scroll",o)},0);function I(o,u,h){if(ue.includes(o)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(o==="vertical"?ae:te)(g.value,u,h)}function R({height:o,width:u}){let h=!1;i.vertical.value!==o&&(i.vertical.value=o,h=!0),i.horizontal.value!==u&&(i.horizontal.value=u,h=!0),h===!0&&_()}function H({position:o}){let u=!1;a.vertical.position.value!==o.top&&(a.vertical.position.value=o.top,u=!0),a.horizontal.position.value!==o.left&&(a.horizontal.position.value=o.left,u=!0),u===!0&&_()}function q({height:o,width:u}){a.horizontal.size.value!==u&&(a.horizontal.size.value=u,_()),a.vertical.size.value!==o&&(a.vertical.size.value=o,_())}function P(o,u){const h=a[u];if(o.isFirst===!0){if(h.thumbHidden.value===!0)return;b=h.position.value,t.value=!0}else if(t.value!==!0)return;o.isFinal===!0&&(t.value=!1);const s=K[u],m=i[u].value,pe=(h.size.value-m)/(m-h.thumbSize.value),be=o.distance[s.dist],Se=b+(o.direction===s.dir?1:-1)*be*pe;F(Se,u)}function D(o,u){const h=a[u];if(h.thumbHidden.value!==!0){const s=o[K[u].offset];if(s<h.thumbStart.value||s>h.thumbStart.value+h.thumbSize.value){const m=s-h.thumbSize.value/2;F(m/i[u].value*h.size.value,u)}h.ref.value!==null&&h.ref.value.dispatchEvent(new MouseEvent(o.type,o))}}function $(o){D(o,"vertical")}function w(o){D(o,"horizontal")}function _(){v.value===!0?clearTimeout(y):v.value=!0,y=setTimeout(()=>{v.value=!1},e.delay),e.onScroll!==void 0&&O()}function F(o,u){g.value[K[u].scroll]=o}function Q(){n.value=!0}function V(){n.value=!1}let A=null;return Ne(()=>{A={top:a.vertical.position.value,left:a.horizontal.position.value}}),Oe(()=>{if(A===null)return;const o=g.value;o!==null&&(te(o,A.left),ae(o,A.top))}),fe(O.cancel),Object.assign(f,{getScrollTarget:()=>g.value,getScroll:N,getScrollPosition:()=>({top:a.vertical.position.value,left:a.horizontal.position.value}),getScrollPercentage:()=>({top:a.vertical.percentage.value,left:a.horizontal.percentage.value}),setScrollPosition:I,setScrollPercentage(o,u,h){I(o,u*(a[o].size.value-i[o].value),h)}}),()=>E("div",{class:p.value,onMouseenter:Q,onMouseleave:V},[E("div",{ref:g,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[E("div",{class:"q-scrollarea__content absolute",style:C.value},Ie(l.default,[E(le,{debounce:0,onResize:q})])),E(Qe,{axis:"both",onScroll:H})]),E(le,{debounce:0,onResize:R}),E("div",{class:a.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:$}),E("div",{class:a.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:w}),x(E("div",{ref:a.vertical.ref,class:a.vertical.thumbClass.value,style:a.vertical.style.value,"aria-hidden":"true"}),G),x(E("div",{ref:a.horizontal.ref,class:a.horizontal.thumbClass.value,style:a.horizontal.style.value,"aria-hidden":"true"}),B)])}}),me="false",W={initialize:function(){this.bindEvents()},bindEvents:function(){document.addEventListener("deviceready",this.onDeviceReady,!1)},onDeviceReady:function(){W.receivedEvent("deviceready"),console.log(0,window.Media),he(),We()},onPause:function(){console.log("Paused"),et()},onResume:function(){console.log("Resumed"),he()},receivedEvent:function(e){console.log("Received Event: "+e)}};function We(){z("com.symbol.datawedge.api.GET_VERSION_INFO","")}function z(e,l){console.log("Sending Command: "+e+", "+JSON.stringify(l));var r={};r[e]=l,r.SEND_RESULT=me,window.plugins.intentShim.sendBroadcast({action:"com.symbol.datawedge.api.ACTION",extras:r},function(){},function(){})}function he(){window.plugins.intentShim.registerBroadcastReceiver({filterActions:["com.zebra.cordovademo.ACTION","com.symbol.datawedge.api.RESULT_ACTION"],filterCategories:["android.intent.category.DEFAULT"]},function(e){if(console.log("Received Intent: "+JSON.stringify(e.extras)),e.extras.hasOwnProperty("RESULT_INFO")){var l=e.extras.RESULT+" ("+e.extras.COMMAND.substring(e.extras.COMMAND.lastIndexOf(".")+1,e.extras.COMMAND.length)+")";ot(l.toLowerCase())}if(e.extras.hasOwnProperty("com.symbol.datawedge.api.RESULT_GET_VERSION_INFO")){var r=e.extras["com.symbol.datawedge.api.RESULT_GET_VERSION_INFO"];console.log("Version Info: "+JSON.stringify(r));var v=r.DATAWEDGE;v=v.padStart(5,"0"),console.log("Datawedge version: "+v),v>="006.3"&&tt(),v>="006.4"&&at(),v>="006.5"&&nt()}else if(e.extras.hasOwnProperty("com.symbol.datawedge.api.RESULT_ENUMERATE_SCANNERS")){var t=e.extras["com.symbol.datawedge.api.RESULT_ENUMERATE_SCANNERS"];it(t)}else if(e.extras.hasOwnProperty("com.symbol.datawedge.api.RESULT_GET_ACTIVE_PROFILE")){var n=e.extras["com.symbol.datawedge.api.RESULT_GET_ACTIVE_PROFILE"];lt(n)}else e.extras.hasOwnProperty("RESULT_INFO")||rt(e,new Date().toLocaleString())})}function et(){window.plugins.intentShim.unregisterBroadcastReceiver()}function tt(){console.log("Datawedge 6.3 APIs are available"),z("com.symbol.datawedge.api.CREATE_PROFILE","ZebraCordovaDemo"),z("com.symbol.datawedge.api.GET_ACTIVE_PROFILE",""),z("com.symbol.datawedge.api.ENUMERATE_SCANNERS","")}function at(){console.log("Datawedge 6.4 APIs are available");var e={PROFILE_NAME:"wms",PROFILE_ENABLED:"true",CONFIG_MODE:"UPDATE",PLUGIN_CONFIG:{PLUGIN_NAME:"BARCODE",RESET_CONFIG:"true",PARAM_LIST:{}},APP_LIST:[{PACKAGE_NAME:"org.greaterwms.app",ACTIVITY_LIST:["*"]}]};z("com.symbol.datawedge.api.SET_CONFIG",e);var l={PROFILE_NAME:"wms",PROFILE_ENABLED:"true",CONFIG_MODE:"UPDATE",PLUGIN_CONFIG:{PLUGIN_NAME:"INTENT",RESET_CONFIG:"true",PARAM_LIST:{intent_output_enabled:"true",intent_action:"com.zebra.cordovademo.ACTION",intent_delivery:"2"}}};z("com.symbol.datawedge.api.SET_CONFIG",l),setTimeout(function(){z("com.symbol.datawedge.api.GET_ACTIVE_PROFILE","")},1e3)}function nt(){console.log("Datawedge 6.5 APIs are available"),me="true"}function ot(e){console.log("commandReceived:",e)}function it(e){for(var l="",r=0;r<e.length;r++)console.log("Scanner found: name= "+e[r].SCANNER_NAME+", id="+e[r].SCANNER_INDEX+", connected="+e[r].SCANNER_CONNECTION_STATE),l+=e[r].SCANNER_NAME,r<e.length-1&&(l+=", ");console.log("enumerateScanners:",l)}function lt(e){console.log("activeProfile:",e)}function rt(e,l){var r=e.extras["com.symbol.datawedge.data_string"];console.log("scaned Data:"+r),document.getElementById("scannedBarcodes").value="",document.getElementById("scannedBarcodes").value=r,document.getElementById("scannedBarcodes").dispatchEvent(new Event("input"))}function st(){document.addEventListener("deviceready",ge,!1)}function ge(){window.addEventListener("getcodedata",ct,!1)}function ct(e){document.getElementById("scannedBarcodes").value="",document.getElementById("scannedBarcodes").value=e.data,document.getElementById("scannedBarcodes").dispatchEvent(new Event("input"))}const ut=De({name:"ScanAPP",data(){return{wholewidth:this.screenwidth-20+"px",wholeheight:this.screenheight-165+"px",handlewidth:this.screenwidth-22+"px",handleheight:this.screenheight-225+"px"}},setup(){const e=Me(),l=Le(),r=Ye(),v=S(""),{t}=Je(),n=c({get:()=>e.state.fabchange.fab1}),i=c({get:()=>e.state.fabchange.fab2}),a=c({get:()=>e.state.fabchange.fab3}),f=c({get:()=>e.state.fabchange.fab4}),d=c({get:()=>e.state.linkchange.oldlink}),y=c({get:()=>e.state.linkchange.newlink}),b=c({get:()=>e.state.screenchange.screenwidth,set:s=>{e.commit("screenchange/screenwidthChanged",s)}}),g=c({get:()=>e.state.screenchange.screenheight,set:s=>{e.commit("screenchange/screenheightChanged",s)}}),p=c({get:()=>e.state.screenchange.screenscroll,set:s=>{e.commit("screenchange/screenScrollChanged",s)}}),C=c({get:()=>e.state.loginauth.authin}),G=c({get:()=>e.state.loginauth.login_name}),B=c({get:()=>e.state.loginauth.operator}),N=c({get:()=>e.state.settings.openid}),O=c({get:()=>e.state.langchange.lang}),I=c({get:()=>e.state.settings.server}),R=c({get:()=>e.state.scanchanged.scandata,set:s=>{e.commit("scanchanged/ScanChanged",s)}}),H=c({get:()=>e.state.scanchanged.datadetail,set:s=>{e.commit("scanchanged/ScanDataChanged",s)}}),q=c({get:()=>e.state.scanchanged.asndata,set:s=>{e.commit("scanchanged/ASNDataChanged",s)}}),P=c({get:()=>e.state.scanchanged.dndata,set:s=>{e.commit("scanchanged/DNDataChanged",s)}}),D=c({get:()=>e.state.scanchanged.bindata,set:s=>{e.commit("scanchanged/BinDataChanged",s)}}),$=c({get:()=>e.state.scanchanged.tablelist,set:s=>{e.commit("scanchanged/TableDataChanged",s)}}),w=c({get:()=>e.state.scanchanged.scanmode,set:s=>{e.commit("scanchanged/ScanModeChanged",s)}}),_=c({get:()=>e.state.scanchanged.bar_scanned,set:s=>{e.commit("scanchanged/BarScannedChanged",s)}}),F=c({get:()=>e.state.scanchanged.apiurl,set:s=>{e.commit("scanchanged/ApiUrlChanged",s)}}),Q=c({get:()=>e.state.scanchanged.apiurlnext,set:s=>{e.commit("scanchanged/ApiUrlNextChanged",s)}}),V=c({get:()=>e.state.scanchanged.apiurlprevious,set:s=>{e.commit("scanchanged/ApiUrlPreviousChanged",s)}});function A(s){p.value=s.verticalPercentage}function o(s){Xe.get(I.value+"scanner/list/"+s+"/",{headers:{"Content-Type":'application/json, charset="utf-8"',token:N.value,language:O.value,operator:B.value}}).then(m=>{m.data.detail?r.notify({type:"negative",message:t("notice.mobile_scan.notice2")}):(R.value=m.data.code,w.value=m.data.mode,_.value=m.data.request_time,w.value==="ASN"?(q.value=m.data.code,l.push({name:"asndetail"})):w.value==="DN"?P.value=m.data.code:w.value==="GOODS"?R.value=m.data.code:w.value==="BINSET"&&(D.value=m.data.code))}).catch(m=>{r.notify({type:"negative",message:t("notice.mobile_scan.notice3")})})}function u(){cordova.plugins.barcodeScanner.scan(function(s){v.value=s.text,navigator.vibrate(100)},function(s){navigator.vibrate(100)},{preferFrontCamera:!1,showFlipCameraButton:!0,showTorchButton:!0,disableSuccessBeep:!1})}function h(){let s=r.screen.width,m=r.screen.height;b.value=s,g.value=m}return Be(v,(s,m)=>{s!==m&&(C.value==="0"?r.notify({type:"negative",message:t("notice.mobile_userlogin.notice9")}):o(s))}),qe(()=>{h(),window.device&&(window.device.manufacturer==="Zebra Technologies"?W.initialize():window.device.manufacturer==="SEUIC"&&st())}),fe(()=>{window.device.manufacturer==="Zebra Technologies"?window.removeEventListener("deviceready",W.onDeviceReady,!1):window.device.manufacturer==="SEUIC"&&window.removeEventListener("deviceready",ge,!1)}),{t,fab1:n,fab2:i,fab3:a,fab4:f,oldlink:d,newlink:y,screenwidth:b,screenheight:g,screenscroll:p,onScroll:A,authin:C,login_name:G,openid:N,operator:B,lang:O,baseurl:I,apiurl:F,apiurlnext:Q,apiurlprevious:V,scandata:R,datadetail:H,tablelist:$,asndata:q,dndata:P,bindata:D,scanmode:w,bar_scanned:_,bar_check:v,thumbStyle:{right:"4px",borderRadius:"5px",backgroundColor:"#027be3",width:"5px",opacity:.75},barStyle:{right:"2px",borderRadius:"9px",backgroundColor:"#027be3",width:"9px",opacity:.2},StartScan(){window.device?u():r.notify({type:"negative",message:t("notice.mobile_scan.notice4")})},BackButton(){l.push({name:d.value})}}}});function dt(e,l,r,v,t,n){const i=Fe("router-view");return x((ke(),xe(je,{class:"flex flex-top"},{default:L(()=>[ne("div",{style:ie({width:e.wholewidth,height:e.wholeheight,marginTop:"10px",marginLeft:"10px"})},[x(ne("input",{id:"scannedBarcodes","onUpdate:modelValue":l[0]||(l[0]=a=>e.bar_check=a),type:"text",style:{display:"none"}},null,512),[[Ge,e.bar_check]]),T($e,{dense:"",outlined:"",square:"",readonly:"",disable:"",debounce:"500",modelValue:e.scandata,"onUpdate:modelValue":l[1]||(l[1]=a=>e.scandata=a),label:e.$t("scan.scan")},{append:L(()=>[T(He,{name:"search"})]),after:L(()=>[T(oe,{round:"",dense:"",flat:"",icon:"border_horizontal",onClick:e.StartScan},null,8,["onClick"])]),before:L(()=>[T(oe,{round:"",dense:"",flat:"",icon:"keyboard_return",onClick:e.BackButton},null,8,["onClick"])]),_:1},8,["modelValue","label"]),T(Ze,{onScroll:e.onScroll,delay:500,"thumb-style":e.thumbStyle,"bar-style":e.barStyle,style:ie({maxWidth:e.handlewidth,width:e.handlewidth,height:e.handleheight,marginTop:"10px"})},{default:L(()=>[T(i)]),_:1},8,["onScroll","thumb-style","bar-style","style"])],4)]),_:1},512)),[[Ue,!e.fab1&&!e.fab2&&!e.fab3&&!e.fab4]])}var Ct=Pe(ut,[["render",dt]]);export{Ct as default};
