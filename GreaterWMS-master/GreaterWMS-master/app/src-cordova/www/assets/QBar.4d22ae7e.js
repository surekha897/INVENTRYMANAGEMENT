import{h as m,j as T,y as ne,aa as oe,z as se,r as q,c as f,ab as le,ac as re,ad as ie,A as ue,ae as ce,w as x,n as E,as as D,ar as H,aj as de,al as fe,g as B,k as L,a9 as ve,a4 as he,a6 as me}from"./index.7290785d.js";import{u as ge,v as A,a as pe,p as Q,b as ye,c as be,r as j,s as Te,d as Se}from"./ClosePopup.069d23e6.js";import{c as M}from"./selection.f620b8d5.js";const we=m("div",{class:"q-space"});var Ce=T({name:"QSpace",setup(){return()=>we}}),qe=T({name:"QTooltip",inheritAttrs:!1,props:{...ge,...ne,...oe,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:A},self:{type:String,default:"top middle",validator:A},offset:{type:Array,default:()=>[14,14],validator:pe},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...se],setup(e,{slots:g,emit:v,attrs:l}){let o,r;const p=B(),{proxy:{$q:n}}=p,i=q(null),u=q(!1),$=f(()=>Q(e.anchor,n.lang.rtl)),W=f(()=>Q(e.self,n.lang.rtl)),N=f(()=>e.persistent!==!0),{registerTick:R,removeTick:_}=le(),{registerTimeout:h}=re(),{transition:z,transitionStyle:I}=ie(e,u),{localScrollTarget:S,changeScrollEvent:U,unconfigureScrollTarget:V}=ye(e,O),{anchorEl:a,canShow:F,anchorEvents:c}=be({showing:u,configureAnchorEl:ee}),{show:G,hide:y}=ue({showing:u,canShow:F,handleShow:K,handleHide:X,hideOnRouteChange:N,processOnMount:!0});Object.assign(c,{delayShow:Y,delayHide:Z});const{showPortal:w,hidePortal:P,renderPortal:J}=ce(p,i,ae);if(n.platform.is.mobile===!0){const t={anchorEl:a,innerRef:i,onClickOutside(s){return y(s),s.target.classList.contains("q-dialog__backdrop")&&ve(s),!0}},b=f(()=>e.modelValue===null&&e.persistent!==!0&&u.value===!0);x(b,s=>{(s===!0?Se:j)(t)}),E(()=>{j(t)})}function K(t){w(),R(()=>{r=new MutationObserver(()=>d()),r.observe(i.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),d(),O()}),o===void 0&&(o=x(()=>n.screen.width+"|"+n.screen.height+"|"+e.self+"|"+e.anchor+"|"+n.lang.rtl,d)),h(()=>{w(!0),v("show",t)},e.transitionDuration)}function X(t){_(),P(),k(),h(()=>{P(!0),v("hide",t)},e.transitionDuration)}function k(){r!==void 0&&(r.disconnect(),r=void 0),o!==void 0&&(o(),o=void 0),V(),D(c,"tooltipTemp")}function d(){const t=i.value;a.value===null||!t||Te({el:t,offset:e.offset,anchorEl:a.value,anchorOrigin:$.value,selfOrigin:W.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Y(t){if(n.platform.is.mobile===!0){M(),document.body.classList.add("non-selectable");const b=a.value,s=["touchmove","touchcancel","touchend","click"].map(C=>[b,C,"delayHide","passiveCapture"]);H(c,"tooltipTemp",s)}h(()=>{G(t)},e.delay)}function Z(t){n.platform.is.mobile===!0&&(D(c,"tooltipTemp"),M(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),h(()=>{y(t)},e.hideDelay)}function ee(){if(e.noParentEvent===!0||a.value===null)return;const t=n.platform.is.mobile===!0?[[a.value,"touchstart","delayShow","passive"]]:[[a.value,"mouseenter","delayShow","passive"],[a.value,"mouseleave","delayHide","passive"]];H(c,"anchor",t)}function O(){if(a.value!==null||e.scrollTarget!==void 0){S.value=de(a.value,e.scrollTarget);const t=e.noParentEvent===!0?d:y;U(S.value,t)}}function te(){return u.value===!0?m("div",{...l,ref:i,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",l.class],style:[l.style,I.value],role:"complementary"},L(g.default)):null}function ae(){return m(fe,{name:z.value,appear:!0},te)}return E(k),Object.assign(p.proxy,{updatePosition:d}),J}}),xe=T({name:"QBar",props:{...he,dense:Boolean},setup(e,{slots:g}){const{proxy:{$q:v}}=B(),l=me(e,v),o=f(()=>`q-bar row no-wrap items-center q-bar--${e.dense===!0?"dense":"standard"}  q-bar--${l.value===!0?"dark":"light"}`);return()=>m("div",{class:o.value,role:"toolbar"},L(g.default))}});export{xe as Q,Ce as a,qe as b};
