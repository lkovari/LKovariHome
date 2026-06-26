import {s as se,r as rn$1,e as et,a as re,o as on$1}from'./chunk-oWflEyZS.js';import {g as gh,w as w7}from'./chunk-Bvt9HczV.js';import {B as Bn,m as me,T as Tn,j as jn,k as kn,X as Xe,t as tn$1,x as xn,R as Rn,f as fn,c as cn,e as m,F}from'./chunk-C3gbriqm.js';import {b as bp,T as Ts,t as ti,bn as Gi,J as Jl,av as Vo,az as fT,I as v,ag as Pe,ay as Wu,w as wr,C as CE,ai as au,aj as ou,v as vi,q as qD,W as Wc,$ as $p,Z as Zp,O as OI,G as Gv,B as Bp,ar as tT,j as gh$1,P as PI,R as $e,b8 as R$1,aF as D,bT as Ni,V as Ie,bU as su,bV as uu,aI as Sp,a3 as c0,a1 as l0,ao as Ap,aM as LD,H as Hp,a8 as eT,a9 as M,by as RE,X as Xp,y as yD,a as vD,aa as Jp,bW as Vi,aw as XF,aH as cy,a7 as NE,b0 as ct$1,aG as Z,bX as Lu,U as Up,bY as zc,bZ as Qc,ac as fD,i as iD,k as Cu,l as wu,ae as mo,b5 as ge$1,m as wf}from'./main-NHTAVI6F.js';import {z,P,s as se$1}from'./chunk-1eeLAFYD.js';import {t as to,M as Mt$1,D as Dl,F as Fl,I as It$1,h as hl,p as pl,i as ie,J as Je,C as Ce,l as la,Q}from'./chunk-DhE9JFOC.js';var fe=(()=>{class i extends Q{modelValue=Vo(void 0);$filled=fT(()=>ge$1(this.modelValue()));writeModelValue(e){this.modelValue.set(e);}static \u0275fac=(()=>{let e;return function(t){return (e||(e=cy(i)))(t||i)}})();static \u0275dir=NE({type:i,features:[Sp]})}return i})();var ct=(()=>{class i extends fe{required=XF(void 0,{transform:c0});invalid=XF(void 0,{transform:c0});disabled=XF(void 0,{transform:c0});name=XF();_disabled=Vo(false);$disabled=fT(()=>this.disabled()||this._disabled());onModelChange=()=>{};onModelTouched=()=>{};writeDisabledState(e){this._disabled.set(e);}writeControlValue(e,n){}writeValue(e){this.writeControlValue(e,this.writeModelValue.bind(this));}registerOnChange(e){this.onModelChange=e;}registerOnTouched(e){this.onModelTouched=e;}setDisabledState(e){this.writeDisabledState(e),this.cd.markForCheck();}static \u0275fac=(()=>{let e;return function(t){return (e||(e=cy(i)))(t||i)}})();static \u0275dir=NE({type:i,inputs:{required:[1,"required"],invalid:[1,"invalid"],disabled:[1,"disabled"],name:[1,"name"]},features:[Sp]})}return i})();var mt=(()=>{class i extends ct{pcFluid=v(se$1,{optional:true,host:true,skipSelf:true});fluid=XF(void 0,{transform:c0});variant=XF();size=XF();inputSize=XF();pattern=XF();min=XF();max=XF();step=XF();minlength=XF();maxlength=XF();$variant=fT(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=(()=>{let e;return function(t){return (e||(e=cy(i)))(t||i)}})();static \u0275dir=NE({type:i,inputs:{fluid:[1,"fluid"],variant:[1,"variant"],size:[1,"size"],inputSize:[1,"inputSize"],pattern:[1,"pattern"],min:[1,"min"],max:[1,"max"],step:[1,"step"],minlength:[1,"minlength"],maxlength:[1,"maxlength"]},features:[Sp]})}return i})();var ft=(()=>{class i extends la{static \u0275fac=(()=>{let e;return function(t){return (e||(e=cy(i)))(t||i)}})();static \u0275cmp=CE({type:i,selectors:[["","data-p-icon","angle-up"]],features:[Sp],decls:1,vars:0,consts:[["d","M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z","fill","currentColor"]],template:function(n,t){n&1&&(Lu(),Up(0,"path",0));},encapsulation:2,changeDetection:1})}return i})();var ht=`
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
`;var St=`
    ${ht}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,Mt={root:({instance:i})=>["p-inputtext p-component",{"p-filled":i.$filled(),"p-inputtext-sm":i.pSize==="small","p-inputtext-lg":i.pSize==="large","p-invalid":i.invalid(),"p-variant-filled":i.$variant()==="filled","p-inputtext-fluid":i.hasFluid}]},gt=(()=>{class i extends ct$1{name="inputtext";style=St;classes=Mt;static \u0275fac=(()=>{let e;return function(t){return (e||(e=cy(i)))(t||i)}})();static \u0275prov=Z({token:i,factory:i.\u0275fac})}return i})();var bt=new M("INPUTTEXT_INSTANCE"),_t=(()=>{class i extends fe{componentName="InputText";hostName="";ptInputText=XF();pInputTextPT=XF();pInputTextUnstyled=XF();bindDirectiveInstance=v(ie,{self:true});$pcInputText=v(bt,{optional:true,skipSelf:true})??void 0;ngControl=v(m,{optional:true,self:true});pcFluid=v(se$1,{optional:true,host:true,skipSelf:true});pSize;variant=XF();fluid=XF(void 0,{transform:c0});invalid=XF(void 0,{transform:c0});$variant=fT(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=v(gt);constructor(){super(),Wu(()=>{let e=this.ptInputText()||this.pInputTextPT();e&&this.directivePT.set(e);}),Wu(()=>{this.pInputTextUnstyled()&&this.directiveUnstyled.set(this.pInputTextUnstyled());});}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges();}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"));}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value);}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value);}get hasFluid(){return this.fluid()??!!this.pcFluid}get dataP(){return this.cn({invalid:this.invalid(),fluid:this.hasFluid,filled:this.$variant()==="filled",[this.pSize]:this.pSize})}static \u0275fac=function(n){return new(n||i)};static \u0275dir=NE({type:i,selectors:[["","pInputText",""]],hostVars:3,hostBindings:function(n,t){n&1&&Zp("input",function(){return t.onInput()}),n&2&&(Hp("data-p",t.dataP),LD(t.cx("root")));},inputs:{hostName:"hostName",ptInputText:[1,"ptInputText"],pInputTextPT:[1,"pInputTextPT"],pInputTextUnstyled:[1,"pInputTextUnstyled"],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},features:[eT([gt,{provide:bt,useExisting:i},{provide:Ce,useExisting:i}]),RE([ie]),Sp]})}return i})();var xt=`
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
`;var Dt=["clearicon"],Bt=["incrementbuttonicon"],Nt=["decrementbuttonicon"],Tt=["input"];function Et(i,g){if(i&1){let e=iD();Lu(),vi(0,"svg",7),Zp("click",function(){Cu(e);let t=fD(2);return wu(t.clear())}),Wc();}if(i&2){let e=fD(2);LD(e.cx("clearIcon")),Bp("pBind",e.ptm("clearIcon"));}}function Vt(i,g){}function kt(i,g){i&1&&Ap(0,Vt,0,0,"ng-template");}function Ft(i,g){if(i&1){let e=iD();vi(0,"span",8),Zp("click",function(){Cu(e);let t=fD(2);return wu(t.clear())}),Ap(1,kt,1,0,null,9),Wc();}if(i&2){let e=fD(2);LD(e.cx("clearIcon")),Bp("pBind",e.ptm("clearIcon")),Gv(),Bp("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate);}}function Pt(i,g){if(i&1&&(zc(0),Ap(1,Et,1,3,"svg",5)(2,Ft,2,4,"span",6),Qc()),i&2){let e=fD();Gv(),Bp("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),Gv(),Bp("ngIf",e.clearIconTemplate||e._clearIconTemplate);}}function Rt(i,g){if(i&1&&$p(0,"span",13),i&2){let e=fD(2);Bp("pBind",e.ptm("incrementButtonIcon"))("ngClass",e.incrementButtonIcon);}}function At(i,g){if(i&1&&(Lu(),$p(0,"svg",15)),i&2){let e=fD(3);Bp("pBind",e.ptm("incrementButtonIcon"));}}function Lt(i,g){}function Ut(i,g){i&1&&Ap(0,Lt,0,0,"ng-template");}function Ot(i,g){if(i&1&&(zc(0),Ap(1,At,1,1,"svg",14)(2,Ut,1,0,null,9),Qc()),i&2){let e=fD(2);Gv(),Bp("ngIf",!e.incrementButtonIconTemplate&&!e._incrementButtonIconTemplate),Gv(),Bp("ngTemplateOutlet",e.incrementButtonIconTemplate||e._incrementButtonIconTemplate);}}function zt(i,g){if(i&1&&$p(0,"span",13),i&2){let e=fD(2);Bp("pBind",e.ptm("decrementButtonIcon"))("ngClass",e.decrementButtonIcon);}}function $t(i,g){if(i&1&&(Lu(),$p(0,"svg",17)),i&2){let e=fD(3);Bp("pBind",e.ptm("decrementButtonIcon"));}}function qt(i,g){}function Gt(i,g){i&1&&Ap(0,qt,0,0,"ng-template");}function jt(i,g){if(i&1&&(zc(0),Ap(1,$t,1,1,"svg",16)(2,Gt,1,0,null,9),Qc()),i&2){let e=fD(2);Gv(),Bp("ngIf",!e.decrementButtonIconTemplate&&!e._decrementButtonIconTemplate),Gv(),Bp("ngTemplateOutlet",e.decrementButtonIconTemplate||e._decrementButtonIconTemplate);}}function Kt(i,g){if(i&1){let e=iD();vi(0,"span",10)(1,"button",11),Zp("mousedown",function(t){Cu(e);let r=fD();return wu(r.onUpButtonMouseDown(t))})("mouseup",function(){Cu(e);let t=fD();return wu(t.onUpButtonMouseUp())})("mouseleave",function(){Cu(e);let t=fD();return wu(t.onUpButtonMouseLeave())})("keydown",function(t){Cu(e);let r=fD();return wu(r.onUpButtonKeyDown(t))})("keyup",function(){Cu(e);let t=fD();return wu(t.onUpButtonKeyUp())}),Ap(2,Rt,1,2,"span",12)(3,Ot,3,2,"ng-container",2),Wc(),vi(4,"button",11),Zp("mousedown",function(t){Cu(e);let r=fD();return wu(r.onDownButtonMouseDown(t))})("mouseup",function(){Cu(e);let t=fD();return wu(t.onDownButtonMouseUp())})("mouseleave",function(){Cu(e);let t=fD();return wu(t.onDownButtonMouseLeave())})("keydown",function(t){Cu(e);let r=fD();return wu(r.onDownButtonKeyDown(t))})("keyup",function(){Cu(e);let t=fD();return wu(t.onDownButtonKeyUp())}),Ap(5,zt,1,2,"span",12)(6,jt,3,2,"ng-container",2),Wc()();}if(i&2){let e=fD();LD(e.cx("buttonGroup")),Bp("pBind",e.ptm("buttonGroup")),Hp("data-p",e.dataP),Gv(),LD(e.cn(e.cx("incrementButton"),e.incrementButtonClass)),Bp("pBind",e.ptm("incrementButton")),Hp("disabled",e.$disabled()?"":void 0)("aria-hidden",true)("data-p",e.dataP),Gv(),Bp("ngIf",e.incrementButtonIcon),Gv(),Bp("ngIf",!e.incrementButtonIcon),Gv(),LD(e.cn(e.cx("decrementButton"),e.decrementButtonClass)),Bp("pBind",e.ptm("decrementButton")),Hp("disabled",e.$disabled()?"":void 0)("aria-hidden",true)("data-p",e.dataP),Gv(),Bp("ngIf",e.decrementButtonIcon),Gv(),Bp("ngIf",!e.decrementButtonIcon);}}function Ht(i,g){if(i&1&&$p(0,"span",13),i&2){let e=fD(2);Bp("pBind",e.ptm("incrementButtonIcon"))("ngClass",e.incrementButtonIcon);}}function Qt(i,g){if(i&1&&(Lu(),$p(0,"svg",15)),i&2){let e=fD(3);Bp("pBind",e.ptm("incrementButtonIcon"));}}function Wt(i,g){}function Xt(i,g){i&1&&Ap(0,Wt,0,0,"ng-template");}function Zt(i,g){if(i&1&&(zc(0),Ap(1,Qt,1,1,"svg",14)(2,Xt,1,0,null,9),Qc()),i&2){let e=fD(2);Gv(),Bp("ngIf",!e.incrementButtonIconTemplate&&!e._incrementButtonIconTemplate),Gv(),Bp("ngTemplateOutlet",e.incrementButtonIconTemplate||e._incrementButtonIconTemplate);}}function Jt(i,g){if(i&1){let e=iD();vi(0,"button",11),Zp("mousedown",function(t){Cu(e);let r=fD();return wu(r.onUpButtonMouseDown(t))})("mouseup",function(){Cu(e);let t=fD();return wu(t.onUpButtonMouseUp())})("mouseleave",function(){Cu(e);let t=fD();return wu(t.onUpButtonMouseLeave())})("keydown",function(t){Cu(e);let r=fD();return wu(r.onUpButtonKeyDown(t))})("keyup",function(){Cu(e);let t=fD();return wu(t.onUpButtonKeyUp())}),Ap(1,Ht,1,2,"span",12)(2,Zt,3,2,"ng-container",2),Wc();}if(i&2){let e=fD();LD(e.cn(e.cx("incrementButton"),e.incrementButtonClass)),Bp("pBind",e.ptm("incrementButton")),Hp("disabled",e.$disabled()?"":void 0)("aria-hidden",true)("data-p",e.dataP),Gv(),Bp("ngIf",e.incrementButtonIcon),Gv(),Bp("ngIf",!e.incrementButtonIcon);}}function Yt(i,g){if(i&1&&$p(0,"span",13),i&2){let e=fD(2);Bp("pBind",e.ptm("decrementButtonIcon"))("ngClass",e.decrementButtonIcon);}}function en(i,g){if(i&1&&(Lu(),$p(0,"svg",17)),i&2){let e=fD(3);Bp("pBind",e.ptm("decrementButtonIcon"));}}function tn(i,g){}function nn(i,g){i&1&&Ap(0,tn,0,0,"ng-template");}function rn(i,g){if(i&1&&(zc(0),Ap(1,en,1,1,"svg",16)(2,nn,1,0,null,9),Qc()),i&2){let e=fD(2);Gv(),Bp("ngIf",!e.decrementButtonIconTemplate&&!e._decrementButtonIconTemplate),Gv(),Bp("ngTemplateOutlet",e.decrementButtonIconTemplate||e._decrementButtonIconTemplate);}}function on(i,g){if(i&1){let e=iD();vi(0,"button",11),Zp("mousedown",function(t){Cu(e);let r=fD();return wu(r.onDownButtonMouseDown(t))})("mouseup",function(){Cu(e);let t=fD();return wu(t.onDownButtonMouseUp())})("mouseleave",function(){Cu(e);let t=fD();return wu(t.onDownButtonMouseLeave())})("keydown",function(t){Cu(e);let r=fD();return wu(r.onDownButtonKeyDown(t))})("keyup",function(){Cu(e);let t=fD();return wu(t.onDownButtonKeyUp())}),Ap(1,Yt,1,2,"span",12)(2,rn,3,2,"ng-container",2),Wc();}if(i&2){let e=fD();LD(e.cn(e.cx("decrementButton"),e.decrementButtonClass)),Bp("pBind",e.ptm("decrementButton")),Hp("disabled",e.$disabled()?"":void 0)("aria-hidden",true)("data-p",e.dataP),Gv(),Bp("ngIf",e.decrementButtonIcon),Gv(),Bp("ngIf",!e.decrementButtonIcon);}}var an=`
    ${xt}

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
`,un={root:({instance:i})=>["p-inputnumber p-component p-inputwrapper",{"p-inputwrapper-filled":i.$filled()||i.allowEmpty===false,"p-inputwrapper-focus":i.focused,"p-inputnumber-stacked":i.showButtons&&i.buttonLayout==="stacked","p-inputnumber-horizontal":i.showButtons&&i.buttonLayout==="horizontal","p-inputnumber-vertical":i.showButtons&&i.buttonLayout==="vertical","p-inputnumber-fluid":i.hasFluid,"p-invalid":i.invalid()}],pcInputText:"p-inputnumber-input",buttonGroup:"p-inputnumber-button-group",incrementButton:({instance:i})=>["p-inputnumber-button p-inputnumber-increment-button",{"p-disabled":i.showButtons&&i.max()!=null&&i.maxlength()}],decrementButton:({instance:i})=>["p-inputnumber-button p-inputnumber-decrement-button",{"p-disabled":i.showButtons&&i.min()!=null&&i.minlength()}],clearIcon:"p-inputnumber-clear-icon"},yt=(()=>{class i extends ct$1{name="inputnumber";style=an;classes=un;static \u0275fac=(()=>{let e;return function(t){return (e||(e=cy(i)))(t||i)}})();static \u0275prov=Z({token:i,factory:i.\u0275fac})}return i})();var It=new M("INPUTNUMBER_INSTANCE"),sn={provide:F,useExisting:mo(()=>he),multi:true},he=(()=>{class i extends mt{injector;componentName="InputNumber";$pcInputNumber=v(It,{optional:true,skipSelf:true})??void 0;_componentStyle=v(yt);bindDirectiveInstance=v(ie,{self:true});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]));}showButtons=false;format=true;buttonLayout="stacked";inputId;styleClass;placeholder;tabindex;title;ariaLabelledBy;ariaDescribedBy;ariaLabel;ariaRequired;autocomplete;incrementButtonClass;decrementButtonClass;incrementButtonIcon;decrementButtonIcon;readonly;allowEmpty=true;locale;localeMatcher;mode="decimal";currency;currencyDisplay;useGrouping=true;minFractionDigits;maxFractionDigits;prefix;suffix;inputStyle;inputStyleClass;showClear=false;autofocus;onInput=new $e;onFocus=new $e;onBlur=new $e;onKeyDown=new $e;onClear=new $e;clearIconTemplate;incrementButtonIconTemplate;decrementButtonIconTemplate;templates;input;_clearIconTemplate;_incrementButtonIconTemplate;_decrementButtonIconTemplate;value;focused;initialized;groupChar="";prefixChar="";suffixChar="";isSpecialChar;timer;lastValue;_numeral;numberFormat;_decimal;_decimalChar="";_group;_minusSign;_currency;_prefix;_suffix;_index;ngControl=null;constructor(e){super(),this.injector=e;}onChanges(e){["locale","localeMatcher","mode","currency","currencyDisplay","useGrouping","minFractionDigits","maxFractionDigits","prefix","suffix"].some(t=>!!e[t])&&this.updateConstructParser();}onInit(){this.ngControl=this.injector.get(m,null,{optional:true}),this.constructParser(),this.initialized=true;}onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case "clearicon":this._clearIconTemplate=e.template;break;case "incrementbuttonicon":this._incrementButtonIconTemplate=e.template;break;case "decrementbuttonicon":this._decrementButtonIconTemplate=e.template;break}});}getOptions(){let e=(o,a,c)=>{if(!(o==null||isNaN(o)||!isFinite(o)))return Math.max(a,Math.min(c,Math.floor(o)))},n=e(this.minFractionDigits,0,20),t=e(this.maxFractionDigits,0,100),r=n!=null&&t!=null&&n>t?t:n;return {localeMatcher:this.localeMatcher,style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:this.useGrouping,minimumFractionDigits:r,maximumFractionDigits:t}}constructParser(){let e=this.getOptions(),n=Object.fromEntries(Object.entries(e).filter(([o,a])=>a!==void 0));this.numberFormat=new Intl.NumberFormat(this.locale,n);let t=[...new Intl.NumberFormat(this.locale,{useGrouping:false}).format(9876543210)].reverse(),r=new Map(t.map((o,a)=>[o,a]));this._numeral=new RegExp(`[${t.join("")}]`,"g"),this._group=this.getGroupingExpression(),this._minusSign=this.getMinusSignExpression(),this._currency=this.getCurrencyExpression(),this._decimal=this.getDecimalExpression(),this._decimalChar=this.getDecimalChar(),this._suffix=this.getSuffixExpression(),this._prefix=this.getPrefixExpression(),this._index=o=>r.get(o);}updateConstructParser(){this.initialized&&this.constructParser();}escapeRegExp(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}getDecimalExpression(){let e=this.getDecimalChar();return new RegExp(`[${e}]`,"g")}getDecimalChar(){return new Intl.NumberFormat(this.locale,R$1(D({},this.getOptions()),{useGrouping:false})).format(1.1).replace(this._currency,"").trim().replace(this._numeral,"")}getGroupingExpression(){let e=new Intl.NumberFormat(this.locale,{useGrouping:true});return this.groupChar=e.format(1e6).trim().replace(this._numeral,"").charAt(0),new RegExp(`[${this.groupChar}]`,"g")}getMinusSignExpression(){let e=new Intl.NumberFormat(this.locale,{useGrouping:false});return new RegExp(`[${e.format(-1).trim().replace(this._numeral,"")}]`,"g")}getCurrencyExpression(){if(this.currency){let e=new Intl.NumberFormat(this.locale,{style:"currency",currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});return new RegExp(`[${e.format(1).replace(/\s/g,"").replace(this._numeral,"").replace(this._group,"")}]`,"g")}return new RegExp("[]","g")}getPrefixExpression(){if(this.prefix)this.prefixChar=this.prefix;else {let e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay});this.prefixChar=e.format(1).split("1")[0];}return new RegExp(`${this.escapeRegExp(this.prefixChar||"")}`,"g")}getSuffixExpression(){if(this.suffix)this.suffixChar=this.suffix;else {let e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});this.suffixChar=e.format(1).split("1")[1];}return new RegExp(`${this.escapeRegExp(this.suffixChar||"")}`,"g")}formatValue(e){if(e!=null){if(e==="-")return e;if(this.format){let t=new Intl.NumberFormat(this.locale,this.getOptions()).format(e);return this.prefix&&e!=this.prefix&&(t=this.prefix+t),this.suffix&&e!=this.suffix&&(t=t+this.suffix),t}return e.toString()}return ""}parseValue(e){let n=this._suffix?new RegExp(this._suffix,""):/(?:)/,t=this._prefix?new RegExp(this._prefix,""):/(?:)/,r=this._currency?new RegExp(this._currency,""):/(?:)/,o=e.replace(n,"").replace(t,"").trim().replace(/\s/g,"").replace(r,"").replace(this._group,"").replace(this._minusSign,"-").replace(this._decimal,".").replace(this._numeral,this._index);if(o){if(o==="-")return o;let a=+o;return isNaN(a)?null:a}return null}repeat(e,n,t){if(this.readonly)return;let r=n||500;this.clearTimer(),this.timer=setTimeout(()=>{this.repeat(e,40,t);},r),this.spin(e,t);}spin(e,n){let t=(this.step()??1)*n,r=this.parseValue(this.input?.nativeElement.value)||0,o=this.validateValue(r+t),a=this.maxlength();a&&a<this.formatValue(o).length||(this.updateInput(o,null,"spin",null),this.updateModel(e,o),this.handleOnInput(e,r,o));}clear(){this.value=null,this.onModelChange(this.value),this.onClear.emit();}onUpButtonMouseDown(e){if(e.button===2){this.clearTimer();return}this.$disabled()||(this.input?.nativeElement.focus(),this.repeat(e,null,1),e.preventDefault());}onUpButtonMouseUp(){this.$disabled()||this.clearTimer();}onUpButtonMouseLeave(){this.$disabled()||this.clearTimer();}onUpButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,1);}onUpButtonKeyUp(){this.$disabled()||this.clearTimer();}onDownButtonMouseDown(e){if(e.button===2){this.clearTimer();return}this.$disabled()||(this.input?.nativeElement.focus(),this.repeat(e,null,-1),e.preventDefault());}onDownButtonMouseUp(){this.$disabled()||this.clearTimer();}onDownButtonMouseLeave(){this.$disabled()||this.clearTimer();}onDownButtonKeyUp(){this.$disabled()||this.clearTimer();}onDownButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,-1);}onUserInput(e){this.readonly||(this.isSpecialChar&&(e.target.value=this.lastValue),this.isSpecialChar=false);}onInputKeyDown(e){if(this.readonly)return;if(this.lastValue=e.target.value,e.shiftKey||e.altKey){this.isSpecialChar=true;return}let n=e.target.selectionStart,t=e.target.selectionEnd,r=e.target.value,o=null;switch(e.altKey&&e.preventDefault(),e.key){case "ArrowUp":this.spin(e,1),e.preventDefault();break;case "ArrowDown":this.spin(e,-1),e.preventDefault();break;case "ArrowLeft":for(let a=n;a<=r.length;a++){let c=a===0?0:a-1;if(this.isNumeralChar(r.charAt(c))){this.input.nativeElement.setSelectionRange(a,a);break}}break;case "ArrowRight":for(let a=t;a>=0;a--)if(this.isNumeralChar(r.charAt(a))){this.input.nativeElement.setSelectionRange(a,a);break}break;case "Tab":case "Enter":o=this.validateValue(this.parseValue(this.input.nativeElement.value)),this.input.nativeElement.value=this.formatValue(o),this.input.nativeElement.setAttribute("aria-valuenow",o),this.updateModel(e,o);break;case "Backspace":{if(e.preventDefault(),n===t){if(n==1&&this.prefix||n==r.length&&this.suffix)break;let a=r.charAt(n-1),{decimalCharIndex:c,decimalCharIndexWithoutPrefix:h}=this.getDecimalCharIndexes(r);if(this.isNumeralChar(a)){let m=this.getDecimalLength(r);if(this._group.test(a))this._group.lastIndex=0,o=r.slice(0,n-2)+r.slice(n-1);else if(this._decimal.test(a))this._decimal.lastIndex=0,m?this.input?.nativeElement.setSelectionRange(n-1,n-1):o=r.slice(0,n-1)+r.slice(n);else if(c>0&&n>c){let w=this.isDecimalMode()&&(this.minFractionDigits||0)<m?"":"0";o=r.slice(0,n-1)+w+r.slice(n);}else h===1?(o=r.slice(0,n-1)+"0"+r.slice(n),o=this.parseValue(o)>0?o:""):o=r.slice(0,n-1)+r.slice(n);}else this.mode==="currency"&&this._currency&&a.search(this._currency)!=-1&&(o=r.slice(1));this.updateValue(e,o,null,"delete-single");}else o=this.deleteRange(r,n,t),this.updateValue(e,o,null,"delete-range");break}case "Delete":if(e.preventDefault(),n===t){if(n==0&&this.prefix||n==r.length-1&&this.suffix)break;let a=r.charAt(n),{decimalCharIndex:c,decimalCharIndexWithoutPrefix:h}=this.getDecimalCharIndexes(r);if(this.isNumeralChar(a)){let m=this.getDecimalLength(r);if(this._group.test(a))this._group.lastIndex=0,o=r.slice(0,n)+r.slice(n+2);else if(this._decimal.test(a))this._decimal.lastIndex=0,m?this.input?.nativeElement.setSelectionRange(n+1,n+1):o=r.slice(0,n)+r.slice(n+1);else if(c>0&&n>c){let w=this.isDecimalMode()&&(this.minFractionDigits||0)<m?"":"0";o=r.slice(0,n)+w+r.slice(n+1);}else h===1?(o=r.slice(0,n)+"0"+r.slice(n+1),o=this.parseValue(o)>0?o:""):o=r.slice(0,n)+r.slice(n+1);}this.updateValue(e,o,null,"delete-back-single");}else o=this.deleteRange(r,n,t),this.updateValue(e,o,null,"delete-range");break;case "Home":this.min()&&(this.updateModel(e,this.min()),e.preventDefault());break;case "End":this.max()&&(this.updateModel(e,this.max()),e.preventDefault());break;}this.onKeyDown.emit(e);}onInputKeyPress(e){if(this.readonly)return;let n=e.which||e.keyCode,t=String.fromCharCode(n),r=this.isDecimalSign(t),o=this.isMinusSign(t);n!=13&&e.preventDefault(),!r&&e.code==="NumpadDecimal"&&(r=true,t=this._decimalChar,n=t.charCodeAt(0));let{value:a,selectionStart:c,selectionEnd:h}=this.input.nativeElement,m=this.parseValue(a+t),w=m!=null?m.toString():"",L=a.substring(c,h),y=this.parseValue(L),k=y!=null?y.toString():"";if(c!==h&&k.length>0){this.insert(e,t,{isDecimalSign:r,isMinusSign:o});return}let T=this.maxlength();T&&w.length>T||(48<=n&&n<=57||o||r)&&this.insert(e,t,{isDecimalSign:r,isMinusSign:o});}onPaste(e){if(!this.$disabled()&&!this.readonly){e.preventDefault();let n=(e.clipboardData||this.document.defaultView.clipboardData).getData("Text");if(this.inputId==="integeronly"&&/[^\d-]/.test(n))return;if(n){this.maxlength()&&(n=n.toString().substring(0,this.maxlength()));let t=this.parseValue(n);t!=null&&this.insert(e,t.toString());}}}allowMinusSign(){let e=this.min();return e==null||e<0}isMinusSign(e){return this._minusSign.test(e)||e==="-"?(this._minusSign.lastIndex=0,true):false}isDecimalSign(e){return this._decimal.test(e)?(this._decimal.lastIndex=0,true):false}isDecimalMode(){return this.mode==="decimal"}getDecimalCharIndexes(e){let n=e.search(this._decimal);this._decimal.lastIndex=0;let r=e.replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,"").search(this._decimal);return this._decimal.lastIndex=0,{decimalCharIndex:n,decimalCharIndexWithoutPrefix:r}}getCharIndexes(e){let n=e.search(this._decimal);this._decimal.lastIndex=0;let t=e.search(this._minusSign);this._minusSign.lastIndex=0;let r=e.search(this._suffix);this._suffix.lastIndex=0;let o=e.search(this._currency);return this._currency.lastIndex=0,{decimalCharIndex:n,minusCharIndex:t,suffixCharIndex:r,currencyCharIndex:o}}insert(e,n,t={isDecimalSign:false,isMinusSign:false}){let r=n.search(this._minusSign);if(this._minusSign.lastIndex=0,!this.allowMinusSign()&&r!==-1)return;let o=this.input?.nativeElement.selectionStart,a=this.input?.nativeElement.selectionEnd,c=this.input?.nativeElement.value.trim(),{decimalCharIndex:h,minusCharIndex:m,suffixCharIndex:w,currencyCharIndex:L}=this.getCharIndexes(c),y;if(t.isMinusSign)o===0&&(y=c,(m===-1||a!==0)&&(y=this.insertText(c,n,0,a)),this.updateValue(e,y,n,"insert"));else if(t.isDecimalSign)h>0&&o===h?this.updateValue(e,c,n,"insert"):h>o&&h<a?(y=this.insertText(c,n,o,a),this.updateValue(e,y,n,"insert")):h===-1&&this.maxFractionDigits&&(y=this.insertText(c,n,o,a),this.updateValue(e,y,n,"insert"));else {let k=this.numberFormat.resolvedOptions().maximumFractionDigits,T=o!==a?"range-insert":"insert";if(h>0&&o>h){if(o+n.length-(h+1)<=k){let F=L>=o?L-1:w>=o?w:c.length;y=c.slice(0,o)+n+c.slice(o+n.length,F)+c.slice(F),this.updateValue(e,y,n,T);}}else y=this.insertText(c,n,o,a),this.updateValue(e,y,n,T);}}insertText(e,n,t,r){if((n==="."?n:n.split(".")).length===2){let a=e.slice(t,r).search(this._decimal);return this._decimal.lastIndex=0,a>0?e.slice(0,t)+this.formatValue(n)+e.slice(r):e||this.formatValue(n)}else return r-t===e.length?this.formatValue(n):t===0?n+e.slice(r):r===e.length?e.slice(0,t)+n:e.slice(0,t)+n+e.slice(r)}deleteRange(e,n,t){let r;return t-n===e.length?r="":n===0?r=e.slice(t):t===e.length?r=e.slice(0,n):r=e.slice(0,n)+e.slice(t),r}initCursor(){let e=this.input?.nativeElement.selectionStart,n=this.input?.nativeElement.selectionEnd,t=this.input?.nativeElement.value,r=t.length,o=null,a=(this.prefixChar||"").length;t=t.replace(this._prefix,""),(e===n||e!==0||n<a)&&(e-=a);let c=t.charAt(e);if(this.isNumeralChar(c))return e+a;let h=e-1;for(;h>=0;)if(c=t.charAt(h),this.isNumeralChar(c)){o=h+a;break}else h--;if(o!==null)this.input?.nativeElement.setSelectionRange(o+1,o+1);else {for(h=e;h<r;)if(c=t.charAt(h),this.isNumeralChar(c)){o=h+a;break}else h++;o!==null&&this.input?.nativeElement.setSelectionRange(o,o);}return o||0}onInputClick(){let e=this.input?.nativeElement.value;!this.readonly&&e!==Ni()&&this.initCursor();}isNumeralChar(e){return e.length===1&&(this._numeral.test(e)||this._decimal.test(e)||this._group.test(e)||this._minusSign.test(e))?(this.resetRegex(),true):false}resetRegex(){this._numeral.lastIndex=0,this._decimal.lastIndex=0,this._group.lastIndex=0,this._minusSign.lastIndex=0;}updateValue(e,n,t,r){let o=this.input?.nativeElement.value,a=null;n!=null&&(a=this.parseValue(n),a=!a&&!this.allowEmpty?0:a,this.updateInput(a,t,r,n),this.handleOnInput(e,o,a));}handleOnInput(e,n,t){this.isValueChanged(n,t)&&(this.input.nativeElement.value=this.formatValue(t),this.input?.nativeElement.setAttribute("aria-valuenow",t),this.updateModel(e,t),this.onInput.emit({originalEvent:e,value:t,formattedValue:n}));}isValueChanged(e,n){if(n===null&&e!==null)return  true;if(n!=null){let t=typeof e=="string"?this.parseValue(e):e;return n!==t}return  false}validateValue(e){if(e==="-"||e==null)return null;let n=this.min(),t=this.max();return n!=null&&e<n?this.min():t!=null&&e>t?t:e}updateInput(e,n,t,r){n=n||"";let o=this.input?.nativeElement.value,a=this.formatValue(e),c=o.length;if(a!==r&&(a=this.concatValues(a,r)),c===0){this.input.nativeElement.value=a,this.input.nativeElement.setSelectionRange(0,0);let m=this.initCursor()+n.length;this.input.nativeElement.setSelectionRange(m,m);}else {let h=this.input.nativeElement.selectionStart,m=this.input.nativeElement.selectionEnd,w=this.maxlength();if(w&&a.length>w&&(a=a.slice(0,w),h=Math.min(h,w),m=Math.min(m,w)),w&&w<a.length)return;this.input.nativeElement.value=a;let L=a.length;if(t==="range-insert"){let y=this.parseValue((o||"").slice(0,h)),T=(y!==null?y.toString():"").split("").join(`(${this.groupChar})?`),F=new RegExp(T,"g");F.test(a);let Ct=n.split("").join(`(${this.groupChar})?`),Ie=new RegExp(Ct,"g");Ie.test(a.slice(F.lastIndex)),m=F.lastIndex+Ie.lastIndex,this.input.nativeElement.setSelectionRange(m,m);}else if(L===c)t==="insert"||t==="delete-back-single"?this.input.nativeElement.setSelectionRange(m+1,m+1):t==="delete-single"?this.input.nativeElement.setSelectionRange(m-1,m-1):(t==="delete-range"||t==="spin")&&this.input.nativeElement.setSelectionRange(m,m);else if(t==="delete-back-single"){let y=o.charAt(m-1),k=o.charAt(m),T=c-L,F=this._group.test(k);F&&T===1?m+=1:!F&&this.isNumeralChar(y)&&(m+=-1*T+1),this._group.lastIndex=0,this.input.nativeElement.setSelectionRange(m,m);}else if(o==="-"&&t==="insert"){this.input.nativeElement.setSelectionRange(0,0);let k=this.initCursor()+n.length+1;this.input.nativeElement.setSelectionRange(k,k);}else m=m+(L-c),this.input.nativeElement.setSelectionRange(m,m);}this.input.nativeElement.setAttribute("aria-valuenow",e);}concatValues(e,n){if(e&&n){let t=n.search(this._decimal);return this._decimal.lastIndex=0,this.suffixChar?t!==-1?e.replace(this.suffixChar,"").split(this._decimal)[0]+n.replace(this.suffixChar,"").slice(t)+this.suffixChar:e:t!==-1?e.split(this._decimal)[0]+n.slice(t):e}return e}getDecimalLength(e){if(e){let n=e.split(this._decimal);if(n.length===2)return n[1].replace(this._suffix,"").trim().replace(/\s/g,"").replace(this._currency,"").length}return 0}onInputFocus(e){this.focused=true,this.onFocus.emit(e);}onInputBlur(e){this.focused=false;let n=this.validateValue(this.parseValue(this.input.nativeElement.value)),t=n?.toString();this.input.nativeElement.value=this.formatValue(t),this.input.nativeElement.setAttribute("aria-valuenow",t),this.updateModel(e,n),this.onModelTouched(),this.onBlur.emit(e);}formattedValue(){let e=!this.value&&!this.allowEmpty?0:this.value;return this.formatValue(e)}updateModel(e,n){let t=this.ngControl?.control?.updateOn==="blur";this.value!==n?(this.value=n,t&&this.focused||this.onModelChange(n)):t&&this.onModelChange(n);}writeControlValue(e,n){this.value=e&&Number(e),n(e),this.cd.markForCheck();}clearTimer(){this.timer&&clearInterval(this.timer);}get dataP(){return this.cn({invalid:this.invalid(),disabled:this.$disabled(),focus:this.focused,fluid:this.hasFluid,filled:this.$variant()==="filled",empty:!this.$filled(),[this.size()]:this.size(),[this.buttonLayout]:this.showButtons&&this.buttonLayout})}static \u0275fac=function(n){return new(n||i)(wr(Ie))};static \u0275cmp=CE({type:i,selectors:[["p-inputNumber"],["p-inputnumber"],["p-input-number"]],contentQueries:function(n,t,r){if(n&1&&Jp(r,Dt,4)(r,Bt,4)(r,Nt,4)(r,Vi,4),n&2){let o;yD(o=vD())&&(t.clearIconTemplate=o.first),yD(o=vD())&&(t.incrementButtonIconTemplate=o.first),yD(o=vD())&&(t.decrementButtonIconTemplate=o.first),yD(o=vD())&&(t.templates=o);}},viewQuery:function(n,t){if(n&1&&Xp(Tt,5),n&2){let r;yD(r=vD())&&(t.input=r.first);}},hostVars:3,hostBindings:function(n,t){n&2&&(Hp("data-p",t.dataP),LD(t.cn(t.cx("root"),t.styleClass)));},inputs:{showButtons:[2,"showButtons","showButtons",c0],format:[2,"format","format",c0],buttonLayout:"buttonLayout",inputId:"inputId",styleClass:"styleClass",placeholder:"placeholder",tabindex:[2,"tabindex","tabindex",l0],title:"title",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",ariaLabel:"ariaLabel",ariaRequired:[2,"ariaRequired","ariaRequired",c0],autocomplete:"autocomplete",incrementButtonClass:"incrementButtonClass",decrementButtonClass:"decrementButtonClass",incrementButtonIcon:"incrementButtonIcon",decrementButtonIcon:"decrementButtonIcon",readonly:[2,"readonly","readonly",c0],allowEmpty:[2,"allowEmpty","allowEmpty",c0],locale:"locale",localeMatcher:"localeMatcher",mode:"mode",currency:"currency",currencyDisplay:"currencyDisplay",useGrouping:[2,"useGrouping","useGrouping",c0],minFractionDigits:[2,"minFractionDigits","minFractionDigits",e=>l0(e,void 0)],maxFractionDigits:[2,"maxFractionDigits","maxFractionDigits",e=>l0(e,void 0)],prefix:"prefix",suffix:"suffix",inputStyle:"inputStyle",inputStyleClass:"inputStyleClass",showClear:[2,"showClear","showClear",c0],autofocus:[2,"autofocus","autofocus",c0]},outputs:{onInput:"onInput",onFocus:"onFocus",onBlur:"onBlur",onKeyDown:"onKeyDown",onClear:"onClear"},features:[eT([sn,yt,{provide:It,useExisting:i},{provide:Ce,useExisting:i}]),RE([ie]),Sp],decls:6,vars:38,consts:[["input",""],["pInputText","","role","spinbutton","inputmode","decimal",3,"input","keydown","keypress","paste","click","focus","blur","value","ngStyle","variant","invalid","pSize","pt","unstyled","pAutoFocus","fluid"],[4,"ngIf"],[3,"pBind","class",4,"ngIf"],["type","button","tabindex","-1",3,"pBind","class","mousedown","mouseup","mouseleave","keydown","keyup",4,"ngIf"],["data-p-icon","times",3,"pBind","class","click",4,"ngIf"],[3,"pBind","class","click",4,"ngIf"],["data-p-icon","times",3,"click","pBind"],[3,"click","pBind"],[4,"ngTemplateOutlet"],[3,"pBind"],["type","button","tabindex","-1",3,"mousedown","mouseup","mouseleave","keydown","keyup","pBind"],[3,"pBind","ngClass",4,"ngIf"],[3,"pBind","ngClass"],["data-p-icon","angle-up",3,"pBind",4,"ngIf"],["data-p-icon","angle-up",3,"pBind"],["data-p-icon","angle-down",3,"pBind",4,"ngIf"],["data-p-icon","angle-down",3,"pBind"]],template:function(n,t){n&1&&(vi(0,"input",1,0),Zp("input",function(o){return t.onUserInput(o)})("keydown",function(o){return t.onInputKeyDown(o)})("keypress",function(o){return t.onInputKeyPress(o)})("paste",function(o){return t.onPaste(o)})("click",function(){return t.onInputClick()})("focus",function(o){return t.onInputFocus(o)})("blur",function(o){return t.onInputBlur(o)}),Wc(),Ap(2,Pt,3,2,"ng-container",2)(3,Kt,7,20,"span",3)(4,Jt,3,8,"button",4)(5,on,3,8,"button",4)),n&2&&(LD(t.cn(t.cx("pcInputText"),t.inputStyleClass)),Bp("value",t.formattedValue())("ngStyle",t.inputStyle)("variant",t.$variant())("invalid",t.invalid())("pSize",t.size())("pt",t.ptm("pcInputText"))("unstyled",t.unstyled())("pAutoFocus",t.autofocus)("fluid",t.hasFluid),Hp("id",t.inputId)("aria-valuemin",t.min())("aria-valuemax",t.max())("aria-valuenow",t.value)("placeholder",t.placeholder)("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledBy)("aria-describedby",t.ariaDescribedBy)("title",t.title)("size",t.inputSize())("name",t.name())("autocomplete",t.autocomplete)("maxlength",t.maxlength())("minlength",t.minlength())("tabindex",t.tabindex)("aria-required",t.ariaRequired)("min",t.min())("max",t.max())("step",t.step()??1)("required",t.required()?"":void 0)("readonly",t.readonly?"":void 0)("disabled",t.$disabled()?"":void 0)("data-p",t.dataP),Gv(2),Bp("ngIf",t.buttonLayout!="vertical"&&t.showClear&&t.value),Gv(),Bp("ngIf",t.showButtons&&t.buttonLayout==="stacked"),Gv(),Bp("ngIf",t.showButtons&&t.buttonLayout!=="stacked"),Gv(),Bp("ngIf",t.showButtons&&t.buttonLayout!=="stacked"));},dependencies:[ti,ou,su,uu,au,_t,z,P,ft,w7,Gi,Je,ie],encapsulation:2})}return i})(),ge=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=bp({type:i});static \u0275inj=Ts({imports:[he,Gi,Gi]})}return i})();var pn=()=>({"padding-right":"1rem"}),be=(()=>{class i{constructor(e){this.formBuilder=e,this.form=this.formBuilder.group({quantity:this.formBuilder.control(0,[me.required]),payment:this.formBuilder.control(0,[me.required]),writeoff:this.formBuilder.control(0,[]),amount:this.formBuilder.control({value:0,disabled:true})}),this.statusText="VALID",this.quantitySignal=Vo(0),this.paymentSignal=Vo(0),this.writeoffSignal=Vo(0),this.amountSignal=fT(()=>this.paymentSignal()*this.quantitySignal()-this.writeoffSignal()),this.destroyRef=v(Pe),Wu(()=>{this.form.controls.amount.setValue(this.amountSignal()),console.log(`The current Amount is: ${this.amountSignal()}`);},{});}ngOnInit(){this.githubLogoPath="assets/logos/GitHub-Mark-32px.png",this.form.valueChanges.pipe(to(this.destroyRef)).subscribe(e=>{this.quantitySignal.set(e.quantity),this.paymentSignal.set(e.payment),this.writeoffSignal.set(e.writeoff),console.log(e);}),this.form.statusChanges.pipe(to(this.destroyRef)).subscribe(e=>{this.statusText=e;});}onSubmit(e){console.log("onSubmit ",e.value);}static{this.\u0275fac=function(n){return new(n||i)(wr(Tn))};}static{this.\u0275cmp=CE({type:i,selectors:[["app-angular-news-v16-signals"]],decls:91,vars:6,consts:[[1,"angular-signals-layout"],["fxLayout","column","fxFlexAlign","stretch"],[1,"home-screen"],["fxFlexAlign","center",1,"align-title"],["href","https://angular.io/guide/update-to-version-16"],["href","https://angular.io/guide/signals"],["href","https://github.com/lkovari/LKovariHome/tree/master/src/app/angular-news-pages/angular-news-v16-signals/angular-news-v16-signals.component.ts"],["width","16","height","16",3,"src"],[1,"brush:","typescript"],["href","https://primeng.org/installation"],["href","https://material.angular.io/components/categories"],["novalidate","","autocomplete","off",3,"ngSubmit","formGroup"],["id","validTitleLabel",3,"ngStyle"],["id","validLabel",3,"ngClass"],[1,"example-area"],[1,"primeng-layout"],[1,"primeng-container","form-group"],["id","quantityLabel","for","quantityInput"],[1,"text-danger"],["id","quantityInput","type","number","formControlName","quantity",1,"input-style"],["id","paymentLabel","for","paymentInput"],["id","paymentInput","type","number","formControlName","payment",1,"input-style"],["id","writeoffLabel","for","writeoffInput"],["id","writeoffInput","type","number","formControlName","writeoff",1,"input-style"],["id","amountLabel","for","amountInput"],["id","amountInput","type","number","formControlName","amount",1,"input-style"],[1,"material-layout"],[1,"material-container"],["id","quantityLabelM","for","quantityInputM"],["matInput","","id","quantityInputM","type","number","formControlName","quantity"],["id","paymentLabelM","for","paymentInputM"],["matInput","","id","paymentInputM","type","number","formControlName","payment"],["id","writeoffLabelM","for","writeoffInputM"],["matInput","","id","writeoffInputM","type","number","formControlName","writeoff"],["id","amountLabelM","for","amountInputM"],["matInput","","id","amountInputM","type","number","formControlName","amount"]],template:function(n,t){n&1&&(vi(0,"div",0)(1,"section",1)(2,"div",2)(3,"div",3)(4,"h1")(5,"a",4),qD(6,"Angular v16"),Wc(),qD(7," one of new features is the "),vi(8,"a",5),qD(9,"Signals"),Wc()()()()(),qD(10," There is a following example, simple arithmetic calculations with "),vi(11,"a",5),qD(12,"Signals"),Wc(),vi(13,"p"),qD(14," Signals can contain any value, from simple primitives to complex data structures. Signals may be either writable or read-only. "),Wc(),vi(15,"p"),qD(16," Here is the arithmetic operation, amount = payment * quantity - write-off. "),Wc(),vi(17,"p"),qD(18," When one of the values (payment, quantity, write-off) is changed then automatically calculate the amount, like as computed. Listening to the value changes of the form, "),vi(19,"i"),qD(20,'"this.form.valueChanges.subscribe((value) =>"'),Wc(),qD(21," and set each value to it's own signal variable, for example "),vi(22,"i"),qD(23,'"this.quantitySignal.set(value.quantity!);"'),Wc()(),vi(24,"p"),qD(25," Only one form was built, so every value change will affects the amounts on both UI. components "),Wc(),vi(26,"a",6),$p(27,"img",7),Wc(),qD(28," The Code: "),vi(29,"pre",8)(30,"i"),qD(31,`
    quantitySignal = signal(0);
    paymentSignal = signal(0);
    writeoffSignal = signal(0);
    amountSignal: Signal<number> = computed(() => 
        (this.paymentSignal() 
        * this.quantitySignal()) 
        - this.writeoffSignal());        
    `),Wc()(),vi(32,"P"),qD(33,"On the left side you can see four numeric input fields with "),vi(34,"a",9),qD(35,"PrimeNG"),Wc(),qD(36," UI., and on the right side can see the same input fields with "),vi(37,"a",10),qD(38,"Material"),Wc(),qD(39," UI. components."),Wc(),vi(40,"form",11),Zp("ngSubmit",function(){return t.onSubmit(t.form)}),vi(41,"div")(42,"label",12),qD(43,"Form Status"),Wc(),vi(44,"label",13),qD(45),Wc()(),vi(46,"div",14)(47,"div",15)(48,"label"),qD(49,"With PrimeNg UI Component"),Wc(),vi(50,"div",16)(51,"div")(52,"label",17),qD(53,"Quantity"),vi(54,"span",18),qD(55,"*"),Wc()(),$p(56,"p-inputNumber",19),OI(),Wc(),vi(57,"div")(58,"label",20),qD(59,"Payment"),vi(60,"span",18),qD(61,"*"),Wc()(),$p(62,"p-inputNumber",21),OI(),Wc(),vi(63,"div")(64,"label",22),qD(65,"Write-off"),Wc(),$p(66,"p-inputNumber",23),OI(),Wc(),vi(67,"div")(68,"label",24),qD(69,"Amount"),Wc(),$p(70,"p-inputNumber",25),OI(),Wc()()(),vi(71,"div",26)(72,"label"),qD(73,"With Material UI Component"),Wc(),vi(74,"div",27)(75,"mat-form-field")(76,"mat-label",28),qD(77,"Quantity"),Wc(),$p(78,"input",29),OI(),Wc(),vi(79,"mat-form-field")(80,"mat-label",30),qD(81,"Payment"),Wc(),$p(82,"input",31),OI(),Wc(),vi(83,"mat-form-field")(84,"mat-label",32),qD(85,"Write-off"),Wc(),$p(86,"input",33),OI(),Wc(),vi(87,"mat-form-field")(88,"mat-label",34),qD(89,"Amount"),Wc(),$p(90,"input",35),OI(),Wc()()()()()()),n&2&&(Gv(27),Bp("src",t.githubLogoPath,wf),Gv(13),Bp("formGroup",t.form),Gv(2),Bp("ngStyle",tT(5,pn)),Gv(2),Bp("ngClass",t.form.valid?"text-success":"text-danger"),Gv(),gh$1(t.statusText),Gv(11),PI(),Gv(6),PI(),Gv(4),PI(),Gv(4),PI(),Gv(8),PI(),Gv(4),PI(),Gv(4),PI(),Gv(4),PI());},dependencies:[Mt$1,Dl,Fl,jn,kn,Xe,tn$1,xn,Rn,Bn,fn,cn,au,It$1,hl,pl,ou,ge,he,et,re,on$1],styles:[".angular-signals-layout[_ngcontent-%COMP%]   .sub-layout[_ngcontent-%COMP%], .angular-signals-layout[_ngcontent-%COMP%]   .example-area[_ngcontent-%COMP%]   .material-layout[_ngcontent-%COMP%], .angular-signals-layout[_ngcontent-%COMP%]   .example-area[_ngcontent-%COMP%]   .primeng-layout[_ngcontent-%COMP%]{height:20rem;padding:1rem}.angular-signals-layout[_ngcontent-%COMP%]   .example-area[_ngcontent-%COMP%]   .primeng-layout[_ngcontent-%COMP%]{float:left;padding-bottom:22rem}.angular-signals-layout[_ngcontent-%COMP%]   .example-area[_ngcontent-%COMP%]   .primeng-layout[_ngcontent-%COMP%]   .primeng-container[_ngcontent-%COMP%]{border:solid 1px blue;border-radius:3px;padding:1rem}.angular-signals-layout[_ngcontent-%COMP%]   .example-area[_ngcontent-%COMP%]   .material-layout[_ngcontent-%COMP%]{float:left}.angular-signals-layout[_ngcontent-%COMP%]   .example-area[_ngcontent-%COMP%]   .material-layout[_ngcontent-%COMP%]   .material-container[_ngcontent-%COMP%]{display:grid;border:solid 1px blue;border-radius:3px;padding:1rem}.angular-signals-layout[_ngcontent-%COMP%]   .input-style[_ngcontent-%COMP%]{padding:.3rem}.angular-signals-layout[_ngcontent-%COMP%]   .align-title[_ngcontent-%COMP%]{text-align:center}"],changeDetection:1});}}return i})();var dn=[{path:"",component:be}],vt=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)};}static{this.\u0275mod=bp({type:i});}static{this.\u0275inj=Ts({imports:[ti,Jl.forChild(dn),Jl]});}}return i})();var qi=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)};}static{this.\u0275mod=bp({type:i});}static{this.\u0275inj=Ts({imports:[ti,Bn,gh,se,rn$1,ge,vt,be]});}}return i})();export{qi as AngularNewsV16SignalsModule};