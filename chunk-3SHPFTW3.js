import{a as ot,b as at,c as ut,d as st,e as lt}from"./chunk-HW6SDNFJ.js";import{p as Je,t as it}from"./chunk-GMU32VZY.js";import{a as Ae,c as Pe,d as _e,e as ue,f as Le,g as Oe,l as Ue,m as ze,p as $e,s as qe,t as Ge,v as je,w as se}from"./chunk-SNDXKHB7.js";import"./chunk-HMVJPL5V.js";import{a as Ye,b as rt,c as de}from"./chunk-UW6MESG3.js";import{A as Re,B as xe,E as ce,F as We,G as F,H as Xe,M as Ze,P as et,Q as tt,R as nt,x as ke,z as Fe}from"./chunk-HIBKBCWW.js";import{I as He,T as le,W as Qe,X as pe,c as Ke}from"./chunk-3SHUQVYD.js";import{A as be,c as oe,e as Ee,f as ae,g as Ve,k as X}from"./chunk-F7PW33JK.js";import"./chunk-4O3FVBGX.js";import{$b as H,Ab as te,Bb as C,Ec as ne,Fa as D,Fc as Te,Nb as j,Qc as E,Rc as ie,Tb as s,Ub as c,Uc as x,Vb as l,Wb as I,Zb as Me,_b as K,bc as $,cb as De,cd as v,dd as re,ea as Ce,eb as h,fa as J,ga as U,gc as B,ia as Y,ic as p,jb as q,ka as S,lc as Z,mc as Be,nc as Q,oc as W,pb as ee,qa as b,ra as _,sa as A,ta as we,va as Se,vb as G,wb as z,wc as N,xb as L,xc as f,yc as Ne,za as P,zb as M}from"./chunk-22LSXPAQ.js";import{a as Ie,b as ve}from"./chunk-KT3CPUTC.js";var me=(()=>{class i extends We{modelValue=P(void 0);$filled=E(()=>Ke(this.modelValue()));writeModelValue(e){this.modelValue.set(e)}static \u0275fac=(()=>{let e;return function(t){return(e||(e=D(i)))(t||i)}})();static \u0275dir=L({type:i,features:[M]})}return i})();var pt=(()=>{class i extends me{required=x(void 0,{transform:v});invalid=x(void 0,{transform:v});disabled=x(void 0,{transform:v});name=x();_disabled=P(!1);$disabled=E(()=>this.disabled()||this._disabled());onModelChange=()=>{};onModelTouched=()=>{};writeDisabledState(e){this._disabled.set(e)}writeControlValue(e,n){}writeValue(e){this.writeControlValue(e,this.writeModelValue.bind(this))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.writeDisabledState(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(t){return(e||(e=D(i)))(t||i)}})();static \u0275dir=L({type:i,inputs:{required:[1,"required"],invalid:[1,"invalid"],disabled:[1,"disabled"],name:[1,"name"]},features:[M]})}return i})();var ct=(()=>{class i extends pt{pcFluid=S(de,{optional:!0,host:!0,skipSelf:!0});fluid=x(void 0,{transform:v});variant=x();size=x();inputSize=x();pattern=x();min=x();max=x();step=x();minlength=x();maxlength=x();$variant=E(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=(()=>{let e;return function(t){return(e||(e=D(i)))(t||i)}})();static \u0275dir=L({type:i,inputs:{fluid:[1,"fluid"],variant:[1,"variant"],size:[1,"size"],inputSize:[1,"inputSize"],pattern:[1,"pattern"],min:[1,"min"],max:[1,"max"],step:[1,"step"],minlength:[1,"minlength"],maxlength:[1,"maxlength"]},features:[M]})}return i})();var vt=["data-p-icon","angle-up"],dt=(()=>{class i extends Ze{static \u0275fac=(()=>{let e;return function(t){return(e||(e=D(i)))(t||i)}})();static \u0275cmp=G({type:i,selectors:[["","data-p-icon","angle-up"]],features:[M],attrs:vt,decls:1,vars:0,consts:[["d","M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z","fill","currentColor"]],template:function(n,t){n&1&&(A(),Me(0,"path",0))},encapsulation:2})}return i})();var mt=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`;var wt=`
    ${mt}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,St={root:({instance:i})=>["p-inputtext p-component",{"p-filled":i.$filled(),"p-inputtext-sm":i.pSize==="small","p-inputtext-lg":i.pSize==="large","p-invalid":i.invalid(),"p-variant-filled":i.$variant()==="filled","p-inputtext-fluid":i.hasFluid}]},ft=(()=>{class i extends le{name="inputtext";style=wt;classes=St;static \u0275fac=(()=>{let e;return function(t){return(e||(e=D(i)))(t||i)}})();static \u0275prov=J({token:i,factory:i.\u0275fac})}return i})();var ht=new Y("INPUTTEXT_INSTANCE"),gt=(()=>{class i extends me{hostName="";ptInputText=x();bindDirectiveInstance=S(F,{self:!0});$pcInputText=S(ht,{optional:!0,skipSelf:!0})??void 0;ngControl=S(ue,{optional:!0,self:!0});pcFluid=S(de,{optional:!0,host:!0,skipSelf:!0});pSize;variant=x();fluid=x(void 0,{transform:v});invalid=x(void 0,{transform:v});$variant=E(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=S(ft);constructor(){super(),ie(()=>{this.ptInputText()&&this.directivePT.set(this.ptInputText())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=function(n){return new(n||i)};static \u0275dir=L({type:i,selectors:[["","pInputText",""]],hostVars:2,hostBindings:function(n,t){n&1&&B("input",function(o){return t.onInput(o)}),n&2&&N(t.cx("root"))},inputs:{hostName:"hostName",ptInputText:[1,"ptInputText"],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},features:[ne([ft,{provide:ht,useExisting:i},{provide:ce,useExisting:i}]),te([F]),M]})}return i})();var bt=`
    .p-inputnumber {
        display: inline-flex;
        position: relative;
    }

    .p-inputnumber-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
        cursor: pointer;
        background: dt('inputnumber.button.background');
        color: dt('inputnumber.button.color');
        width: dt('inputnumber.button.width');
        transition:
            background dt('inputnumber.transition.duration'),
            color dt('inputnumber.transition.duration'),
            border-color dt('inputnumber.transition.duration'),
            outline-color dt('inputnumber.transition.duration');
    }

    .p-inputnumber-button:disabled {
        cursor: auto;
    }

    .p-inputnumber-button:not(:disabled):hover {
        background: dt('inputnumber.button.hover.background');
        color: dt('inputnumber.button.hover.color');
    }

    .p-inputnumber-button:not(:disabled):active {
        background: dt('inputnumber.button.active.background');
        color: dt('inputnumber.button.active.color');
    }

    .p-inputnumber-stacked .p-inputnumber-button {
        position: relative;
        flex: 1 1 auto;
        border: 0 none;
    }

    .p-inputnumber-stacked .p-inputnumber-button-group {
        display: flex;
        flex-direction: column;
        position: absolute;
        inset-block-start: 1px;
        inset-inline-end: 1px;
        height: calc(100% - 2px);
        z-index: 1;
    }

    .p-inputnumber-stacked .p-inputnumber-increment-button {
        padding: 0;
        border-start-end-radius: calc(dt('inputnumber.button.border.radius') - 1px);
    }

    .p-inputnumber-stacked .p-inputnumber-decrement-button {
        padding: 0;
        border-end-end-radius: calc(dt('inputnumber.button.border.radius') - 1px);
    }

    .p-inputnumber-stacked .p-inputnumber-input {
        padding-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));
    }

    .p-inputnumber-horizontal .p-inputnumber-button {
        border: 1px solid dt('inputnumber.button.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-button:hover {
        border-color: dt('inputnumber.button.hover.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-button:active {
        border-color: dt('inputnumber.button.active.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-increment-button {
        order: 3;
        border-start-end-radius: dt('inputnumber.button.border.radius');
        border-end-end-radius: dt('inputnumber.button.border.radius');
        border-inline-start: 0 none;
    }

    .p-inputnumber-horizontal .p-inputnumber-input {
        order: 2;
        border-radius: 0;
    }

    .p-inputnumber-horizontal .p-inputnumber-decrement-button {
        order: 1;
        border-start-start-radius: dt('inputnumber.button.border.radius');
        border-end-start-radius: dt('inputnumber.button.border.radius');
        border-inline-end: 0 none;
    }

    .p-floatlabel:has(.p-inputnumber-horizontal) label {
        margin-inline-start: dt('inputnumber.button.width');
    }

    .p-inputnumber-vertical {
        flex-direction: column;
    }

    .p-inputnumber-vertical .p-inputnumber-button {
        border: 1px solid dt('inputnumber.button.border.color');
        padding: dt('inputnumber.button.vertical.padding');
    }

    .p-inputnumber-vertical .p-inputnumber-button:hover {
        border-color: dt('inputnumber.button.hover.border.color');
    }

    .p-inputnumber-vertical .p-inputnumber-button:active {
        border-color: dt('inputnumber.button.active.border.color');
    }

    .p-inputnumber-vertical .p-inputnumber-increment-button {
        order: 1;
        border-start-start-radius: dt('inputnumber.button.border.radius');
        border-start-end-radius: dt('inputnumber.button.border.radius');
        width: 100%;
        border-block-end: 0 none;
    }

    .p-inputnumber-vertical .p-inputnumber-input {
        order: 2;
        border-radius: 0;
        text-align: center;
    }

    .p-inputnumber-vertical .p-inputnumber-decrement-button {
        order: 3;
        border-end-start-radius: dt('inputnumber.button.border.radius');
        border-end-end-radius: dt('inputnumber.button.border.radius');
        width: 100%;
        border-block-start: 0 none;
    }

    .p-inputnumber-input {
        flex: 1 1 auto;
    }

    .p-inputnumber-fluid {
        width: 100%;
    }

    .p-inputnumber-fluid .p-inputnumber-input {
        width: 1%;
    }

    .p-inputnumber-fluid.p-inputnumber-vertical .p-inputnumber-input {
        width: 100%;
    }

    .p-inputnumber:has(.p-inputtext-sm) .p-inputnumber-button .p-icon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
    }

    .p-inputnumber:has(.p-inputtext-lg) .p-inputnumber-button .p-icon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
    }

    .p-inputnumber-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        cursor: pointer;
        inset-inline-end: dt('form.field.padding.x');
        color: dt('form.field.icon.color');
    }

    .p-inputnumber:has(.p-inputnumber-clear-icon) .p-inputnumber-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-inputnumber-stacked .p-inputnumber-clear-icon {
        inset-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));
    }

    .p-inputnumber-stacked:has(.p-inputnumber-clear-icon) .p-inputnumber-input {
        padding-inline-end: calc(dt('inputnumber.button.width') + (dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-inputnumber-horizontal .p-inputnumber-clear-icon {
        inset-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));
    }
`;var Dt=["clearicon"],Mt=["incrementbuttonicon"],Bt=["decrementbuttonicon"],Nt=["input"];function Tt(i,u){if(i&1){let e=$();A(),c(0,"svg",7),B("click",function(){b(e);let t=p(2);return _(t.clear())}),l()}if(i&2){let e=p(2);N(e.cx("clearIcon")),s("pBind",e.ptm("clearIcon"))}}function Et(i,u){}function Vt(i,u){i&1&&C(0,Et,0,0,"ng-template")}function kt(i,u){if(i&1){let e=$();c(0,"span",8),B("click",function(){b(e);let t=p(2);return _(t.clear())}),C(1,Vt,1,0,null,9),l()}if(i&2){let e=p(2);N(e.cx("clearIcon")),s("pBind",e.ptm("clearIcon")),h(),s("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function Ft(i,u){if(i&1&&(K(0),C(1,Tt,1,3,"svg",5)(2,kt,2,4,"span",6),H()),i&2){let e=p();h(),s("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),h(),s("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function Rt(i,u){if(i&1&&I(0,"span",13),i&2){let e=p(2);s("pBind",e.ptm("incrementButtonIcon"))("ngClass",e.incrementButtonIcon)}}function At(i,u){if(i&1&&(A(),I(0,"svg",15)),i&2){let e=p(3);s("pBind",e.ptm("incrementButtonIcon"))}}function Pt(i,u){}function Lt(i,u){i&1&&C(0,Pt,0,0,"ng-template")}function Ot(i,u){if(i&1&&(K(0),C(1,At,1,1,"svg",14)(2,Lt,1,0,null,9),H()),i&2){let e=p(2);h(),s("ngIf",!e.incrementButtonIconTemplate&&!e._incrementButtonIconTemplate),h(),s("ngTemplateOutlet",e.incrementButtonIconTemplate||e._incrementButtonIconTemplate)}}function Ut(i,u){if(i&1&&I(0,"span",13),i&2){let e=p(2);s("pBind",e.ptm("decrementButtonIcon"))("ngClass",e.decrementButtonIcon)}}function zt(i,u){if(i&1&&(A(),I(0,"svg",17)),i&2){let e=p(3);s("pBind",e.ptm("decrementButtonIcon"))}}function $t(i,u){}function qt(i,u){i&1&&C(0,$t,0,0,"ng-template")}function Gt(i,u){if(i&1&&(K(0),C(1,zt,1,1,"svg",16)(2,qt,1,0,null,9),H()),i&2){let e=p(2);h(),s("ngIf",!e.decrementButtonIconTemplate&&!e._decrementButtonIconTemplate),h(),s("ngTemplateOutlet",e.decrementButtonIconTemplate||e._decrementButtonIconTemplate)}}function jt(i,u){if(i&1){let e=$();c(0,"span",10)(1,"button",11),B("mousedown",function(t){b(e);let r=p();return _(r.onUpButtonMouseDown(t))})("mouseup",function(){b(e);let t=p();return _(t.onUpButtonMouseUp())})("mouseleave",function(){b(e);let t=p();return _(t.onUpButtonMouseLeave())})("keydown",function(t){b(e);let r=p();return _(r.onUpButtonKeyDown(t))})("keyup",function(){b(e);let t=p();return _(t.onUpButtonKeyUp())}),C(2,Rt,1,2,"span",12)(3,Ot,3,2,"ng-container",2),l(),c(4,"button",11),B("mousedown",function(t){b(e);let r=p();return _(r.onDownButtonMouseDown(t))})("mouseup",function(){b(e);let t=p();return _(t.onDownButtonMouseUp())})("mouseleave",function(){b(e);let t=p();return _(t.onDownButtonMouseLeave())})("keydown",function(t){b(e);let r=p();return _(r.onDownButtonKeyDown(t))})("keyup",function(){b(e);let t=p();return _(t.onDownButtonKeyUp())}),C(5,Ut,1,2,"span",12)(6,Gt,3,2,"ng-container",2),l()()}if(i&2){let e=p();N(e.cx("buttonGroup")),s("pBind",e.ptm("buttonGroup")),h(),N(e.cn(e.cx("incrementButton"),e.incrementButtonClass)),s("pBind",e.ptm("incrementButton")),j("disabled",e.$disabled()?"":void 0)("aria-hidden",!0),h(),s("ngIf",e.incrementButtonIcon),h(),s("ngIf",!e.incrementButtonIcon),h(),N(e.cn(e.cx("decrementButton"),e.decrementButtonClass)),s("pBind",e.ptm("decrementButton")),j("disabled",e.$disabled()?"":void 0)("aria-hidden",!0),h(),s("ngIf",e.decrementButtonIcon),h(),s("ngIf",!e.decrementButtonIcon)}}function Kt(i,u){if(i&1&&I(0,"span",13),i&2){let e=p(2);s("pBind",e.ptm("incrementButtonIcon"))("ngClass",e.incrementButtonIcon)}}function Ht(i,u){if(i&1&&(A(),I(0,"svg",15)),i&2){let e=p(3);s("pBind",e.ptm("incrementButtonIcon"))}}function Qt(i,u){}function Wt(i,u){i&1&&C(0,Qt,0,0,"ng-template")}function Xt(i,u){if(i&1&&(K(0),C(1,Ht,1,1,"svg",14)(2,Wt,1,0,null,9),H()),i&2){let e=p(2);h(),s("ngIf",!e.incrementButtonIconTemplate&&!e._incrementButtonIconTemplate),h(),s("ngTemplateOutlet",e.incrementButtonIconTemplate||e._incrementButtonIconTemplate)}}function Zt(i,u){if(i&1){let e=$();c(0,"button",11),B("mousedown",function(t){b(e);let r=p();return _(r.onUpButtonMouseDown(t))})("mouseup",function(){b(e);let t=p();return _(t.onUpButtonMouseUp())})("mouseleave",function(){b(e);let t=p();return _(t.onUpButtonMouseLeave())})("keydown",function(t){b(e);let r=p();return _(r.onUpButtonKeyDown(t))})("keyup",function(){b(e);let t=p();return _(t.onUpButtonKeyUp())}),C(1,Kt,1,2,"span",12)(2,Xt,3,2,"ng-container",2),l()}if(i&2){let e=p();N(e.cn(e.cx("incrementButton"),e.incrementButtonClass)),s("pBind",e.ptm("incrementButton")),j("disabled",e.$disabled()?"":void 0)("aria-hidden",!0),h(),s("ngIf",e.incrementButtonIcon),h(),s("ngIf",!e.incrementButtonIcon)}}function Jt(i,u){if(i&1&&I(0,"span",13),i&2){let e=p(2);s("pBind",e.ptm("decrementButtonIcon"))("ngClass",e.decrementButtonIcon)}}function Yt(i,u){if(i&1&&(A(),I(0,"svg",17)),i&2){let e=p(3);s("pBind",e.ptm("decrementButtonIcon"))}}function en(i,u){}function tn(i,u){i&1&&C(0,en,0,0,"ng-template")}function nn(i,u){if(i&1&&(K(0),C(1,Yt,1,1,"svg",16)(2,tn,1,0,null,9),H()),i&2){let e=p(2);h(),s("ngIf",!e.decrementButtonIconTemplate&&!e._decrementButtonIconTemplate),h(),s("ngTemplateOutlet",e.decrementButtonIconTemplate||e._decrementButtonIconTemplate)}}function rn(i,u){if(i&1){let e=$();c(0,"button",11),B("mousedown",function(t){b(e);let r=p();return _(r.onDownButtonMouseDown(t))})("mouseup",function(){b(e);let t=p();return _(t.onDownButtonMouseUp())})("mouseleave",function(){b(e);let t=p();return _(t.onDownButtonMouseLeave())})("keydown",function(t){b(e);let r=p();return _(r.onDownButtonKeyDown(t))})("keyup",function(){b(e);let t=p();return _(t.onDownButtonKeyUp())}),C(1,Jt,1,2,"span",12)(2,nn,3,2,"ng-container",2),l()}if(i&2){let e=p();N(e.cn(e.cx("decrementButton"),e.decrementButtonClass)),s("pBind",e.ptm("decrementButton")),j("disabled",e.$disabled()?"":void 0)("aria-hidden",!0),h(),s("ngIf",e.decrementButtonIcon),h(),s("ngIf",!e.decrementButtonIcon)}}var on=`
    ${bt}

    /* For PrimeNG */
    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext {
        border-color: dt('inputtext.invalid.border.color');
    }

    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext:enabled:focus,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext:enabled:focus,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
    }

    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext::placeholder,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext::placeholder,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,an={root:({instance:i})=>["p-inputnumber p-component p-inputwrapper",{"p-inputwrapper-filled":i.$filled()||i.allowEmpty===!1,"p-inputwrapper-focus":i.focused,"p-inputnumber-stacked":i.showButtons&&i.buttonLayout==="stacked","p-inputnumber-horizontal":i.showButtons&&i.buttonLayout==="horizontal","p-inputnumber-vertical":i.showButtons&&i.buttonLayout==="vertical","p-inputnumber-fluid":i.hasFluid,"p-invalid":i.invalid()}],pcInputText:"p-inputnumber-input",buttonGroup:"p-inputnumber-button-group",incrementButton:({instance:i})=>["p-inputnumber-button p-inputnumber-increment-button",{"p-disabled":i.showButtons&&i.max()!=null&&i.maxlength()}],decrementButton:({instance:i})=>["p-inputnumber-button p-inputnumber-decrement-button",{"p-disabled":i.showButtons&&i.min()!=null&&i.minlength()}],clearIcon:"p-inputnumber-clear-icon"},_t=(()=>{class i extends le{name="inputnumber";style=on;classes=an;static \u0275fac=(()=>{let e;return function(t){return(e||(e=D(i)))(t||i)}})();static \u0275prov=J({token:i,factory:i.\u0275fac})}return i})();var xt=new Y("INPUTNUMBER_INSTANCE"),un={provide:Ae,useExisting:Ce(()=>fe),multi:!0},fe=(()=>{class i extends ct{injector;$pcInputNumber=S(xt,{optional:!0,skipSelf:!0})??void 0;_componentStyle=S(_t);bindDirectiveInstance=S(F,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}showButtons=!1;format=!0;buttonLayout="stacked";inputId;styleClass;placeholder;tabindex;title;ariaLabelledBy;ariaDescribedBy;ariaLabel;ariaRequired;autocomplete;incrementButtonClass;decrementButtonClass;incrementButtonIcon;decrementButtonIcon;readonly;allowEmpty=!0;locale;localeMatcher;mode="decimal";currency;currencyDisplay;useGrouping=!0;minFractionDigits;maxFractionDigits;prefix;suffix;inputStyle;inputStyleClass;showClear=!1;autofocus;onInput=new q;onFocus=new q;onBlur=new q;onKeyDown=new q;onClear=new q;clearIconTemplate;incrementButtonIconTemplate;decrementButtonIconTemplate;templates;input;_clearIconTemplate;_incrementButtonIconTemplate;_decrementButtonIconTemplate;value;focused;initialized;groupChar="";prefixChar="";suffixChar="";isSpecialChar;timer;lastValue;_numeral;numberFormat;_decimal;_decimalChar="";_group;_minusSign;_currency;_prefix;_suffix;_index;ngControl=null;constructor(e){super(),this.injector=e}onChanges(e){["locale","localeMatcher","mode","currency","currencyDisplay","useGrouping","minFractionDigits","maxFractionDigits","prefix","suffix"].some(t=>!!e[t])&&this.updateConstructParser()}onInit(){this.ngControl=this.injector.get(ue,null,{optional:!0}),this.constructParser(),this.initialized=!0}onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"clearicon":this._clearIconTemplate=e.template;break;case"incrementbuttonicon":this._incrementButtonIconTemplate=e.template;break;case"decrementbuttonicon":this._decrementButtonIconTemplate=e.template;break}})}getOptions(){let e=(o,a,d)=>{if(!(o==null||isNaN(o)||!isFinite(o)))return Math.max(a,Math.min(d,Math.floor(o)))},n=e(this.minFractionDigits,0,20),t=e(this.maxFractionDigits,0,100),r=n!=null&&t!=null&&n>t?t:n;return{localeMatcher:this.localeMatcher,style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:this.useGrouping,minimumFractionDigits:r,maximumFractionDigits:t}}constructParser(){let e=this.getOptions(),n=Object.fromEntries(Object.entries(e).filter(([o,a])=>a!==void 0));this.numberFormat=new Intl.NumberFormat(this.locale,n);let t=[...new Intl.NumberFormat(this.locale,{useGrouping:!1}).format(9876543210)].reverse(),r=new Map(t.map((o,a)=>[o,a]));this._numeral=new RegExp(`[${t.join("")}]`,"g"),this._group=this.getGroupingExpression(),this._minusSign=this.getMinusSignExpression(),this._currency=this.getCurrencyExpression(),this._decimal=this.getDecimalExpression(),this._decimalChar=this.getDecimalChar(),this._suffix=this.getSuffixExpression(),this._prefix=this.getPrefixExpression(),this._index=o=>r.get(o)}updateConstructParser(){this.initialized&&this.constructParser()}escapeRegExp(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}getDecimalExpression(){let e=this.getDecimalChar();return new RegExp(`[${e}]`,"g")}getDecimalChar(){return new Intl.NumberFormat(this.locale,ve(Ie({},this.getOptions()),{useGrouping:!1})).format(1.1).replace(this._currency,"").trim().replace(this._numeral,"")}getGroupingExpression(){let e=new Intl.NumberFormat(this.locale,{useGrouping:!0});return this.groupChar=e.format(1e6).trim().replace(this._numeral,"").charAt(0),new RegExp(`[${this.groupChar}]`,"g")}getMinusSignExpression(){let e=new Intl.NumberFormat(this.locale,{useGrouping:!1});return new RegExp(`[${e.format(-1).trim().replace(this._numeral,"")}]`,"g")}getCurrencyExpression(){if(this.currency){let e=new Intl.NumberFormat(this.locale,{style:"currency",currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});return new RegExp(`[${e.format(1).replace(/\s/g,"").replace(this._numeral,"").replace(this._group,"")}]`,"g")}return new RegExp("[]","g")}getPrefixExpression(){if(this.prefix)this.prefixChar=this.prefix;else{let e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay});this.prefixChar=e.format(1).split("1")[0]}return new RegExp(`${this.escapeRegExp(this.prefixChar||"")}`,"g")}getSuffixExpression(){if(this.suffix)this.suffixChar=this.suffix;else{let e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});this.suffixChar=e.format(1).split("1")[1]}return new RegExp(`${this.escapeRegExp(this.suffixChar||"")}`,"g")}formatValue(e){if(e!=null){if(e==="-")return e;if(this.format){let t=new Intl.NumberFormat(this.locale,this.getOptions()).format(e);return this.prefix&&e!=this.prefix&&(t=this.prefix+t),this.suffix&&e!=this.suffix&&(t=t+this.suffix),t}return e.toString()}return""}parseValue(e){let n=this._suffix?new RegExp(this._suffix,""):/(?:)/,t=this._prefix?new RegExp(this._prefix,""):/(?:)/,r=this._currency?new RegExp(this._currency,""):/(?:)/,o=e.replace(n,"").replace(t,"").trim().replace(/\s/g,"").replace(r,"").replace(this._group,"").replace(this._minusSign,"-").replace(this._decimal,".").replace(this._numeral,this._index);if(o){if(o==="-")return o;let a=+o;return isNaN(a)?null:a}return null}repeat(e,n,t){if(this.readonly)return;let r=n||500;this.clearTimer(),this.timer=setTimeout(()=>{this.repeat(e,40,t)},r),this.spin(e,t)}spin(e,n){let t=(this.step()??1)*n,r=this.parseValue(this.input?.nativeElement.value)||0,o=this.validateValue(r+t),a=this.maxlength();a&&a<this.formatValue(o).length||(this.updateInput(o,null,"spin",null),this.updateModel(e,o),this.handleOnInput(e,r,o))}clear(){this.value=null,this.onModelChange(this.value),this.onClear.emit()}onUpButtonMouseDown(e){if(e.button===2){this.clearTimer();return}this.$disabled()||(this.input?.nativeElement.focus(),this.repeat(e,null,1),e.preventDefault())}onUpButtonMouseUp(){this.$disabled()||this.clearTimer()}onUpButtonMouseLeave(){this.$disabled()||this.clearTimer()}onUpButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,1)}onUpButtonKeyUp(){this.$disabled()||this.clearTimer()}onDownButtonMouseDown(e){if(e.button===2){this.clearTimer();return}this.$disabled()||(this.input?.nativeElement.focus(),this.repeat(e,null,-1),e.preventDefault())}onDownButtonMouseUp(){this.$disabled()||this.clearTimer()}onDownButtonMouseLeave(){this.$disabled()||this.clearTimer()}onDownButtonKeyUp(){this.$disabled()||this.clearTimer()}onDownButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,-1)}onUserInput(e){this.readonly||(this.isSpecialChar&&(e.target.value=this.lastValue),this.isSpecialChar=!1)}onInputKeyDown(e){if(this.readonly)return;if(this.lastValue=e.target.value,e.shiftKey||e.altKey){this.isSpecialChar=!0;return}let n=e.target.selectionStart,t=e.target.selectionEnd,r=e.target.value,o=null;switch(e.altKey&&e.preventDefault(),e.key){case"ArrowUp":this.spin(e,1),e.preventDefault();break;case"ArrowDown":this.spin(e,-1),e.preventDefault();break;case"ArrowLeft":for(let a=n;a<=r.length;a++){let d=a===0?0:a-1;if(this.isNumeralChar(r.charAt(d))){this.input.nativeElement.setSelectionRange(a,a);break}}break;case"ArrowRight":for(let a=t;a>=0;a--)if(this.isNumeralChar(r.charAt(a))){this.input.nativeElement.setSelectionRange(a,a);break}break;case"Tab":case"Enter":o=this.validateValue(this.parseValue(this.input.nativeElement.value)),this.input.nativeElement.value=this.formatValue(o),this.input.nativeElement.setAttribute("aria-valuenow",o),this.updateModel(e,o);break;case"Backspace":{if(e.preventDefault(),n===t){if(n==1&&this.prefix||n==r.length&&this.suffix)break;let a=r.charAt(n-1),{decimalCharIndex:d,decimalCharIndexWithoutPrefix:g}=this.getDecimalCharIndexes(r);if(this.isNumeralChar(a)){let m=this.getDecimalLength(r);if(this._group.test(a))this._group.lastIndex=0,o=r.slice(0,n-2)+r.slice(n-1);else if(this._decimal.test(a))this._decimal.lastIndex=0,m?this.input?.nativeElement.setSelectionRange(n-1,n-1):o=r.slice(0,n-1)+r.slice(n);else if(d>0&&n>d){let w=this.isDecimalMode()&&(this.minFractionDigits||0)<m?"":"0";o=r.slice(0,n-1)+w+r.slice(n)}else g===1?(o=r.slice(0,n-1)+"0"+r.slice(n),o=this.parseValue(o)>0?o:""):o=r.slice(0,n-1)+r.slice(n)}else this.mode==="currency"&&this._currency&&a.search(this._currency)!=-1&&(o=r.slice(1));this.updateValue(e,o,null,"delete-single")}else o=this.deleteRange(r,n,t),this.updateValue(e,o,null,"delete-range");break}case"Delete":if(e.preventDefault(),n===t){if(n==0&&this.prefix||n==r.length-1&&this.suffix)break;let a=r.charAt(n),{decimalCharIndex:d,decimalCharIndexWithoutPrefix:g}=this.getDecimalCharIndexes(r);if(this.isNumeralChar(a)){let m=this.getDecimalLength(r);if(this._group.test(a))this._group.lastIndex=0,o=r.slice(0,n)+r.slice(n+2);else if(this._decimal.test(a))this._decimal.lastIndex=0,m?this.input?.nativeElement.setSelectionRange(n+1,n+1):o=r.slice(0,n)+r.slice(n+1);else if(d>0&&n>d){let w=this.isDecimalMode()&&(this.minFractionDigits||0)<m?"":"0";o=r.slice(0,n)+w+r.slice(n+1)}else g===1?(o=r.slice(0,n)+"0"+r.slice(n+1),o=this.parseValue(o)>0?o:""):o=r.slice(0,n)+r.slice(n+1)}this.updateValue(e,o,null,"delete-back-single")}else o=this.deleteRange(r,n,t),this.updateValue(e,o,null,"delete-range");break;case"Home":this.min()&&(this.updateModel(e,this.min()),e.preventDefault());break;case"End":this.max()&&(this.updateModel(e,this.max()),e.preventDefault());break;default:break}this.onKeyDown.emit(e)}onInputKeyPress(e){if(this.readonly)return;let n=e.which||e.keyCode,t=String.fromCharCode(n),r=this.isDecimalSign(t),o=this.isMinusSign(t);n!=13&&e.preventDefault(),!r&&e.code==="NumpadDecimal"&&(r=!0,t=this._decimalChar,n=t.charCodeAt(0));let{value:a,selectionStart:d,selectionEnd:g}=this.input.nativeElement,m=this.parseValue(a+t),w=m!=null?m.toString():"",R=a.substring(d,g),y=this.parseValue(R),V=y!=null?y.toString():"";if(d!==g&&V.length>0){this.insert(e,t,{isDecimalSign:r,isMinusSign:o});return}let T=this.maxlength();T&&w.length>T||(48<=n&&n<=57||o||r)&&this.insert(e,t,{isDecimalSign:r,isMinusSign:o})}onPaste(e){if(!this.$disabled()&&!this.readonly){e.preventDefault();let n=(e.clipboardData||this.document.defaultView.clipboardData).getData("Text");if(this.inputId==="integeronly"&&/[^\d-]/.test(n))return;if(n){this.maxlength()&&(n=n.toString().substring(0,this.maxlength()));let t=this.parseValue(n);t!=null&&this.insert(e,t.toString())}}}allowMinusSign(){let e=this.min();return e==null||e<0}isMinusSign(e){return this._minusSign.test(e)||e==="-"?(this._minusSign.lastIndex=0,!0):!1}isDecimalSign(e){return this._decimal.test(e)?(this._decimal.lastIndex=0,!0):!1}isDecimalMode(){return this.mode==="decimal"}getDecimalCharIndexes(e){let n=e.search(this._decimal);this._decimal.lastIndex=0;let r=e.replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,"").search(this._decimal);return this._decimal.lastIndex=0,{decimalCharIndex:n,decimalCharIndexWithoutPrefix:r}}getCharIndexes(e){let n=e.search(this._decimal);this._decimal.lastIndex=0;let t=e.search(this._minusSign);this._minusSign.lastIndex=0;let r=e.search(this._suffix);this._suffix.lastIndex=0;let o=e.search(this._currency);return this._currency.lastIndex=0,{decimalCharIndex:n,minusCharIndex:t,suffixCharIndex:r,currencyCharIndex:o}}insert(e,n,t={isDecimalSign:!1,isMinusSign:!1}){let r=n.search(this._minusSign);if(this._minusSign.lastIndex=0,!this.allowMinusSign()&&r!==-1)return;let o=this.input?.nativeElement.selectionStart,a=this.input?.nativeElement.selectionEnd,d=this.input?.nativeElement.value.trim(),{decimalCharIndex:g,minusCharIndex:m,suffixCharIndex:w,currencyCharIndex:R}=this.getCharIndexes(d),y;if(t.isMinusSign)o===0&&(y=d,(m===-1||a!==0)&&(y=this.insertText(d,n,0,a)),this.updateValue(e,y,n,"insert"));else if(t.isDecimalSign)g>0&&o===g?this.updateValue(e,d,n,"insert"):g>o&&g<a?(y=this.insertText(d,n,o,a),this.updateValue(e,y,n,"insert")):g===-1&&this.maxFractionDigits&&(y=this.insertText(d,n,o,a),this.updateValue(e,y,n,"insert"));else{let V=this.numberFormat.resolvedOptions().maximumFractionDigits,T=o!==a?"range-insert":"insert";if(g>0&&o>g){if(o+n.length-(g+1)<=V){let k=R>=o?R-1:w>=o?w:d.length;y=d.slice(0,o)+n+d.slice(o+n.length,k)+d.slice(k),this.updateValue(e,y,n,T)}}else y=this.insertText(d,n,o,a),this.updateValue(e,y,n,T)}}insertText(e,n,t,r){if((n==="."?n:n.split(".")).length===2){let a=e.slice(t,r).search(this._decimal);return this._decimal.lastIndex=0,a>0?e.slice(0,t)+this.formatValue(n)+e.slice(r):e||this.formatValue(n)}else return r-t===e.length?this.formatValue(n):t===0?n+e.slice(r):r===e.length?e.slice(0,t)+n:e.slice(0,t)+n+e.slice(r)}deleteRange(e,n,t){let r;return t-n===e.length?r="":n===0?r=e.slice(t):t===e.length?r=e.slice(0,n):r=e.slice(0,n)+e.slice(t),r}initCursor(){let e=this.input?.nativeElement.selectionStart,n=this.input?.nativeElement.selectionEnd,t=this.input?.nativeElement.value,r=t.length,o=null,a=(this.prefixChar||"").length;t=t.replace(this._prefix,""),(e===n||e!==0||n<a)&&(e-=a);let d=t.charAt(e);if(this.isNumeralChar(d))return e+a;let g=e-1;for(;g>=0;)if(d=t.charAt(g),this.isNumeralChar(d)){o=g+a;break}else g--;if(o!==null)this.input?.nativeElement.setSelectionRange(o+1,o+1);else{for(g=e;g<r;)if(d=t.charAt(g),this.isNumeralChar(d)){o=g+a;break}else g++;o!==null&&this.input?.nativeElement.setSelectionRange(o,o)}return o||0}onInputClick(){let e=this.input?.nativeElement.value;!this.readonly&&e!==He()&&this.initCursor()}isNumeralChar(e){return e.length===1&&(this._numeral.test(e)||this._decimal.test(e)||this._group.test(e)||this._minusSign.test(e))?(this.resetRegex(),!0):!1}resetRegex(){this._numeral.lastIndex=0,this._decimal.lastIndex=0,this._group.lastIndex=0,this._minusSign.lastIndex=0}updateValue(e,n,t,r){let o=this.input?.nativeElement.value,a=null;n!=null&&(a=this.parseValue(n),a=!a&&!this.allowEmpty?0:a,this.updateInput(a,t,r,n),this.handleOnInput(e,o,a))}handleOnInput(e,n,t){this.isValueChanged(n,t)&&(this.input.nativeElement.value=this.formatValue(t),this.input?.nativeElement.setAttribute("aria-valuenow",t),this.updateModel(e,t),this.onInput.emit({originalEvent:e,value:t,formattedValue:n}))}isValueChanged(e,n){if(n===null&&e!==null)return!0;if(n!=null){let t=typeof e=="string"?this.parseValue(e):e;return n!==t}return!1}validateValue(e){if(e==="-"||e==null)return null;let n=this.min(),t=this.max();return n!=null&&e<n?this.min():t!=null&&e>t?t:e}updateInput(e,n,t,r){n=n||"";let o=this.input?.nativeElement.value,a=this.formatValue(e),d=o.length;if(a!==r&&(a=this.concatValues(a,r)),d===0){this.input.nativeElement.value=a,this.input.nativeElement.setSelectionRange(0,0);let m=this.initCursor()+n.length;this.input.nativeElement.setSelectionRange(m,m)}else{let g=this.input.nativeElement.selectionStart,m=this.input.nativeElement.selectionEnd,w=this.maxlength();if(w&&a.length>w&&(a=a.slice(0,w),g=Math.min(g,w),m=Math.min(m,w)),w&&w<a.length)return;this.input.nativeElement.value=a;let R=a.length;if(t==="range-insert"){let y=this.parseValue((o||"").slice(0,g)),T=(y!==null?y.toString():"").split("").join(`(${this.groupChar})?`),k=new RegExp(T,"g");k.test(a);let It=n.split("").join(`(${this.groupChar})?`),ye=new RegExp(It,"g");ye.test(a.slice(k.lastIndex)),m=k.lastIndex+ye.lastIndex,this.input.nativeElement.setSelectionRange(m,m)}else if(R===d)t==="insert"||t==="delete-back-single"?this.input.nativeElement.setSelectionRange(m+1,m+1):t==="delete-single"?this.input.nativeElement.setSelectionRange(m-1,m-1):(t==="delete-range"||t==="spin")&&this.input.nativeElement.setSelectionRange(m,m);else if(t==="delete-back-single"){let y=o.charAt(m-1),V=o.charAt(m),T=d-R,k=this._group.test(V);k&&T===1?m+=1:!k&&this.isNumeralChar(y)&&(m+=-1*T+1),this._group.lastIndex=0,this.input.nativeElement.setSelectionRange(m,m)}else if(o==="-"&&t==="insert"){this.input.nativeElement.setSelectionRange(0,0);let V=this.initCursor()+n.length+1;this.input.nativeElement.setSelectionRange(V,V)}else m=m+(R-d),this.input.nativeElement.setSelectionRange(m,m)}this.input.nativeElement.setAttribute("aria-valuenow",e)}concatValues(e,n){if(e&&n){let t=n.search(this._decimal);return this._decimal.lastIndex=0,this.suffixChar?t!==-1?e.replace(this.suffixChar,"").split(this._decimal)[0]+n.replace(this.suffixChar,"").slice(t)+this.suffixChar:e:t!==-1?e.split(this._decimal)[0]+n.slice(t):e}return e}getDecimalLength(e){if(e){let n=e.split(this._decimal);if(n.length===2)return n[1].replace(this._suffix,"").trim().replace(/\s/g,"").replace(this._currency,"").length}return 0}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1;let n=this.validateValue(this.parseValue(this.input.nativeElement.value)),t=n?.toString();this.input.nativeElement.value=this.formatValue(t),this.input.nativeElement.setAttribute("aria-valuenow",t),this.updateModel(e,n),this.onModelTouched(),this.onBlur.emit(e)}formattedValue(){let e=!this.value&&!this.allowEmpty?0:this.value;return this.formatValue(e)}updateModel(e,n){let t=this.ngControl?.control?.updateOn==="blur";this.value!==n?(this.value=n,t&&this.focused||this.onModelChange(n)):t&&this.onModelChange(n)}writeControlValue(e,n){this.value=e&&Number(e),n(e),this.cd.markForCheck()}clearTimer(){this.timer&&clearInterval(this.timer)}static \u0275fac=function(n){return new(n||i)(ee(we))};static \u0275cmp=G({type:i,selectors:[["p-inputNumber"],["p-inputnumber"],["p-input-number"]],contentQueries:function(n,t,r){if(n&1&&(Z(r,Dt,4),Z(r,Mt,4),Z(r,Bt,4),Z(r,Qe,4)),n&2){let o;Q(o=W())&&(t.clearIconTemplate=o.first),Q(o=W())&&(t.incrementButtonIconTemplate=o.first),Q(o=W())&&(t.decrementButtonIconTemplate=o.first),Q(o=W())&&(t.templates=o)}},viewQuery:function(n,t){if(n&1&&Be(Nt,5),n&2){let r;Q(r=W())&&(t.input=r.first)}},hostVars:2,hostBindings:function(n,t){n&2&&N(t.cn(t.cx("root"),t.styleClass))},inputs:{showButtons:[2,"showButtons","showButtons",v],format:[2,"format","format",v],buttonLayout:"buttonLayout",inputId:"inputId",styleClass:"styleClass",placeholder:"placeholder",tabindex:[2,"tabindex","tabindex",re],title:"title",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",ariaLabel:"ariaLabel",ariaRequired:[2,"ariaRequired","ariaRequired",v],autocomplete:"autocomplete",incrementButtonClass:"incrementButtonClass",decrementButtonClass:"decrementButtonClass",incrementButtonIcon:"incrementButtonIcon",decrementButtonIcon:"decrementButtonIcon",readonly:[2,"readonly","readonly",v],allowEmpty:[2,"allowEmpty","allowEmpty",v],locale:"locale",localeMatcher:"localeMatcher",mode:"mode",currency:"currency",currencyDisplay:"currencyDisplay",useGrouping:[2,"useGrouping","useGrouping",v],minFractionDigits:[2,"minFractionDigits","minFractionDigits",e=>re(e,void 0)],maxFractionDigits:[2,"maxFractionDigits","maxFractionDigits",e=>re(e,void 0)],prefix:"prefix",suffix:"suffix",inputStyle:"inputStyle",inputStyleClass:"inputStyleClass",showClear:[2,"showClear","showClear",v],autofocus:[2,"autofocus","autofocus",v]},outputs:{onInput:"onInput",onFocus:"onFocus",onBlur:"onBlur",onKeyDown:"onKeyDown",onClear:"onClear"},features:[ne([un,_t,{provide:xt,useExisting:i},{provide:ce,useExisting:i}]),te([F]),M],decls:6,vars:36,consts:[["input",""],["pInputText","","role","spinbutton","inputmode","decimal",3,"input","keydown","keypress","paste","click","focus","blur","value","ngStyle","variant","invalid","pSize","pt","pAutoFocus","fluid"],[4,"ngIf"],[3,"pBind","class",4,"ngIf"],["type","button","tabindex","-1",3,"pBind","class","mousedown","mouseup","mouseleave","keydown","keyup",4,"ngIf"],["data-p-icon","times",3,"pBind","class","click",4,"ngIf"],[3,"pBind","class","click",4,"ngIf"],["data-p-icon","times",3,"click","pBind"],[3,"click","pBind"],[4,"ngTemplateOutlet"],[3,"pBind"],["type","button","tabindex","-1",3,"mousedown","mouseup","mouseleave","keydown","keyup","pBind"],[3,"pBind","ngClass",4,"ngIf"],[3,"pBind","ngClass"],["data-p-icon","angle-up",3,"pBind",4,"ngIf"],["data-p-icon","angle-up",3,"pBind"],["data-p-icon","angle-down",3,"pBind",4,"ngIf"],["data-p-icon","angle-down",3,"pBind"]],template:function(n,t){if(n&1){let r=$();c(0,"input",1,0),B("input",function(a){return b(r),_(t.onUserInput(a))})("keydown",function(a){return b(r),_(t.onInputKeyDown(a))})("keypress",function(a){return b(r),_(t.onInputKeyPress(a))})("paste",function(a){return b(r),_(t.onPaste(a))})("click",function(){return b(r),_(t.onInputClick())})("focus",function(a){return b(r),_(t.onInputFocus(a))})("blur",function(a){return b(r),_(t.onInputBlur(a))}),l(),C(2,Ft,3,2,"ng-container",2)(3,jt,7,17,"span",3)(4,Zt,3,7,"button",4)(5,rn,3,7,"button",4)}n&2&&(N(t.cn(t.cx("pcInputText"),t.inputStyleClass)),s("value",t.formattedValue())("ngStyle",t.inputStyle)("variant",t.$variant())("invalid",t.invalid())("pSize",t.size())("pt",t.ptm("pcInputText"))("pAutoFocus",t.autofocus)("fluid",t.hasFluid),j("id",t.inputId)("aria-valuemin",t.min())("aria-valuemax",t.max())("aria-valuenow",t.value)("placeholder",t.placeholder)("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledBy)("aria-describedby",t.ariaDescribedBy)("title",t.title)("size",t.inputSize())("name",t.name())("autocomplete",t.autocomplete)("maxlength",t.maxlength())("minlength",t.minlength())("tabindex",t.tabindex)("aria-required",t.ariaRequired)("min",t.min())("max",t.max())("step",t.step()??1)("required",t.required()?"":void 0)("readonly",t.readonly?"":void 0)("disabled",t.$disabled()?"":void 0),h(2),s("ngIf",t.buttonLayout!="vertical"&&t.showClear&&t.value),h(),s("ngIf",t.showButtons&&t.buttonLayout==="stacked"),h(),s("ngIf",t.showButtons&&t.buttonLayout!=="stacked"),h(),s("ngIf",t.showButtons&&t.buttonLayout!=="stacked"))},dependencies:[X,oe,Ee,Ve,ae,gt,rt,Ye,dt,Je,pe,Xe,F],encapsulation:2,changeDetection:0})}return i})(),he=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=z({type:i});static \u0275inj=U({imports:[fe,pe,pe]})}return i})();var ln=()=>({"padding-right":"1rem"}),ge=(()=>{let u=class u{constructor(n){this.formBuilder=n,this.form=this.formBuilder.group({quantity:this.formBuilder.control(0,[_e.required]),payment:this.formBuilder.control(0,[_e.required]),writeoff:this.formBuilder.control(0,[]),amount:this.formBuilder.control({value:0,disabled:!0})}),this.statusText="VALID",this.quantitySignal=P(0),this.paymentSignal=P(0),this.writeoffSignal=P(0),this.amountSignal=E(()=>this.paymentSignal()*this.quantitySignal()-this.writeoffSignal()),this.destroyRef=S(Se),ie(()=>{this.form.controls.amount.setValue(this.amountSignal()),console.log(`The current Amount is: ${this.amountSignal()}`)},{allowSignalWrites:!0})}ngOnInit(){this.githubLogoPath="assets/logos/GitHub-Mark-32px.png",this.form.valueChanges.pipe(xe(this.destroyRef)).subscribe(n=>{this.quantitySignal.set(n.quantity),this.paymentSignal.set(n.payment),this.writeoffSignal.set(n.writeoff),console.log(n)}),this.form.statusChanges.pipe(xe(this.destroyRef)).subscribe(n=>{this.statusText=n})}onSubmit(n){console.log("onSubmit ",n.value)}};u.\u0275fac=function(t){return new(t||u)(ee(Ge))},u.\u0275cmp=G({type:u,selectors:[["app-angular-news-v16-signals"]],decls:91,vars:6,consts:[[1,"angular-signals-layout"],["fxLayout","column","fxFlexAlign","stretch"],[1,"home-screen"],["fxFlexAlign","center",1,"align-title"],["href","https://angular.io/guide/update-to-version-16"],["href","https://angular.io/guide/signals"],["href","https://github.com/lkovari/LKovariHome/tree/master/src/app/angular-news-pages/angular-news-v16-signals/angular-news-v16-signals.component.ts"],["width","16","height","16",3,"src"],[1,"brush:","typescript"],["href","https://primeng.org/installation"],["href","https://material.angular.io/components/categories"],["novalidate","","autocomplete","off",3,"ngSubmit","formGroup"],["id","validTitleLabel",3,"ngStyle"],["id","validLabel",3,"ngClass"],[1,"example-area"],[1,"primeng-layout"],[1,"primeng-container","form-group"],["id","quantityLabel","for","quantityInput"],[1,"text-danger"],["id","quantityInput","type","number","formControlName","quantity",1,"input-style"],["id","paymentLabel","for","paymentInput"],["id","paymentInput","type","number","formControlName","payment",1,"input-style"],["id","writeoffLabel","for","writeoffInput"],["id","writeoffInput","type","number","formControlName","writeoff",1,"input-style"],["id","amountLabel","for","amountInput"],["id","amountInput","type","number","formControlName","amount",1,"input-style"],[1,"material-layout"],[1,"material-container"],["id","quantityLabelM","for","quantityInputM"],["matInput","","id","quantityInputM","type","number","formControlName","quantity"],["id","paymentLabelM","for","paymentInputM"],["matInput","","id","paymentInputM","type","number","formControlName","payment"],["id","writeoffLabelM","for","writeoffInputM"],["matInput","","id","writeoffInputM","type","number","formControlName","writeoff"],["id","amountLabelM","for","amountInputM"],["matInput","","id","amountInputM","type","number","formControlName","amount"]],template:function(t,r){t&1&&(c(0,"div",0)(1,"section",1)(2,"div",2)(3,"div",3)(4,"h1")(5,"a",4),f(6,"Angular v16"),l(),f(7," one of new features is the "),c(8,"a",5),f(9,"Signals"),l()()()()(),f(10," There is a following example, simple arithmetic calculations with "),c(11,"a",5),f(12,"Signals"),l(),c(13,"p"),f(14," Signals can contain any value, from simple primitives to complex data structures. Signals may be either writable or read-only. "),l(),c(15,"p"),f(16," Here is the arithmetic operation, amount = payment * quantity - write-off. "),l(),c(17,"p"),f(18," When one of the values (payment, quantity, write-off) is changed then automatically calculate the amount, like as computed. Listening to the value changes of the form, "),c(19,"i"),f(20,'"this.form.valueChanges.subscribe((value) =>"'),l(),f(21," and set each value to it's own signal variable, for example "),c(22,"i"),f(23,'"this.quantitySignal.set(value.quantity!);"'),l()(),c(24,"p"),f(25," Only one form was built, so every value change will affects the amounts on both UI. components "),l(),c(26,"a",6),I(27,"img",7),l(),f(28," The Code: "),c(29,"pre",8)(30,"i"),f(31,`
    quantitySignal = signal(0);
    paymentSignal = signal(0);
    writeoffSignal = signal(0);
    amountSignal: Signal<number> = computed(() => 
        (this.paymentSignal() 
        * this.quantitySignal()) 
        - this.writeoffSignal());        
    `),l()(),c(32,"P"),f(33,"On the left side you can see four numeric input fields with "),c(34,"a",9),f(35,"PrimeNG"),l(),f(36," UI., and on the right side can see the same input fields with "),c(37,"a",10),f(38,"Material"),l(),f(39," UI. components."),l(),c(40,"form",11),B("ngSubmit",function(){return r.onSubmit(r.form)}),c(41,"div")(42,"label",12),f(43,"Form Status"),l(),c(44,"label",13),f(45),l()(),c(46,"div",14)(47,"div",15)(48,"label"),f(49,"With PrimeNg UI Component"),l(),c(50,"div",16)(51,"div")(52,"label",17),f(53,"Quantity"),c(54,"span",18),f(55,"*"),l()(),I(56,"p-inputNumber",19),l(),c(57,"div")(58,"label",20),f(59,"Payment"),c(60,"span",18),f(61,"*"),l()(),I(62,"p-inputNumber",21),l(),c(63,"div")(64,"label",22),f(65,"Write-off"),l(),I(66,"p-inputNumber",23),l(),c(67,"div")(68,"label",24),f(69,"Amount"),l(),I(70,"p-inputNumber",25),l()()(),c(71,"div",26)(72,"label"),f(73,"With Material UI Component"),l(),c(74,"div",27)(75,"mat-form-field")(76,"mat-label",28),f(77,"Quantity"),l(),I(78,"input",29),l(),c(79,"mat-form-field")(80,"mat-label",30),f(81,"Payment"),l(),I(82,"input",31),l(),c(83,"mat-form-field")(84,"mat-label",32),f(85,"Write-off"),l(),I(86,"input",33),l(),c(87,"mat-form-field")(88,"mat-label",34),f(89,"Amount"),l(),I(90,"input",35),l()()()()()()),t&2&&(h(27),s("src",r.githubLogoPath,De),h(13),s("formGroup",r.form),h(2),s("ngStyle",Te(5,ln)),h(2),s("ngClass",r.form.valid?"text-success":"text-danger"),h(),Ne(r.statusText))},dependencies:[nt,et,tt,je,Ue,Pe,ze,Le,Oe,se,$e,qe,ae,Re,ke,Fe,oe,he,fe,at,ot,st],styles:[".angular-signals-layout[_ngcontent-%COMP%]   .sub-layout[_ngcontent-%COMP%], .angular-signals-layout[_ngcontent-%COMP%]   .example-area[_ngcontent-%COMP%]   .material-layout[_ngcontent-%COMP%], .angular-signals-layout[_ngcontent-%COMP%]   .example-area[_ngcontent-%COMP%]   .primeng-layout[_ngcontent-%COMP%]{height:20rem;padding:1rem}.angular-signals-layout[_ngcontent-%COMP%]   .example-area[_ngcontent-%COMP%]   .primeng-layout[_ngcontent-%COMP%]{float:left;padding-bottom:22rem}.angular-signals-layout[_ngcontent-%COMP%]   .example-area[_ngcontent-%COMP%]   .primeng-layout[_ngcontent-%COMP%]   .primeng-container[_ngcontent-%COMP%]{border:solid 1px blue;border-radius:3px;padding:1rem}.angular-signals-layout[_ngcontent-%COMP%]   .example-area[_ngcontent-%COMP%]   .material-layout[_ngcontent-%COMP%]{float:left}.angular-signals-layout[_ngcontent-%COMP%]   .example-area[_ngcontent-%COMP%]   .material-layout[_ngcontent-%COMP%]   .material-container[_ngcontent-%COMP%]{display:grid;border:solid 1px blue;border-radius:3px;padding:1rem}.angular-signals-layout[_ngcontent-%COMP%]   .input-style[_ngcontent-%COMP%]{padding:.3rem}.angular-signals-layout[_ngcontent-%COMP%]   .align-title[_ngcontent-%COMP%]{text-align:center}"]});let i=u;return i})();var pn=[{path:"",component:ge}],yt=(()=>{let u=class u{};u.\u0275fac=function(t){return new(t||u)},u.\u0275mod=z({type:u}),u.\u0275inj=U({imports:[X,be.forChild(pn),be]});let i=u;return i})();var zi=(()=>{let u=class u{};u.\u0275fac=function(t){return new(t||u)},u.\u0275mod=z({type:u}),u.\u0275inj=U({imports:[X,se,it,ut,lt,he,yt,ge]});let i=u;return i})();export{zi as AngularNewsV16SignalsModule};
