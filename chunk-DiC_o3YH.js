import {r as rn,e as et,a as re,o as on}from'./chunk-oWflEyZS.js';import {s as se}from'./chunk-YJH0XeHH.js';import {Z as Zn,g as gh,h as hf,L as Ln,$ as $s,j as j6,n as nn,v as v8,m as me,f as fn,P as P7,U as Ut,a as U4,F as Fe,u as u3,k as k2,N as N8,s as sf}from'./chunk-Bvt9HczV.js';import {j as jn,B as Bn,L,X as Xe,x as xn,Q as Qt,a as an,F}from'./chunk-C3gbriqm.js';import {b as bp,T as Ts,t as ti,J as Jl,n as ie,p as pg,o as kg,L as Lg,r as io,S as Se,w as wr,s as Ls,C as CE,u as du,v as vi,q as qD,W as Wc,$ as $p,x as yh,Z as Zp,O as OI,A as ZE,G as Gv,D as mh,P as PI,B as Bp,F as YE,h as he,z as zi,i as iD,X as Xp,y as yD,a as vD,I as v,K as vr,N as i0,Q as G$1,_ as _I,R as $e,V as Ie,a0 as Nh,a1 as l0,a2 as Tv,a3 as c0,a4 as hD,a5 as gD,a6 as ah,H as Hp,a7 as NE,a8 as eT,a9 as M,aa as Jp,f as JE,ab as oT,ac as fD,g as XE,ad as sT,ae as mo,af as ZD,k as Cu,E as ED,l as wu,m as wf,j as gh$1,Y as Yc}from'./main-NHTAVI6F.js';import {R as Rr,$ as $l,K as Ke,L as Lr,W as Wr,I as It$1,m as ml,b as bn}from'./chunk-DhE9JFOC.js';var _t=["*"],lt=(()=>{class a{labelPosition="after";static \u0275fac=function(t){return new(t||a)};static \u0275cmp=CE({type:a,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,i){t&2&&ah("mdc-form-field--align-end",i.labelPosition==="before");},inputs:{labelPosition:"labelPosition"},ngContentSelectors:_t,decls:1,vars:0,template:function(t,i){t&1&&(hD(),gD(0));},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})}return a})();var ht=["input"],bt=["formField"],ft=["*"],z=class{source;value;constructor(_,e){this.source=_,this.value=e;}},vt={provide:F,useExisting:mo(()=>X),multi:true},st=new M("MatRadioGroup"),gt=new M("mat-radio-default-options",{providedIn:"root",factory:()=>({color:"accent",disabledInteractive:false})}),X=(()=>{class a{_changeDetector=v(i0);_value=null;_name=v(u3).getId("mat-radio-group-");_selected=null;_isInitialized=false;_labelPosition="after";_disabled=false;_required=false;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new $e;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames();}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e==="before"?"before":"after",this._markRadiosForCheck();}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton());}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=true);}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton();}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck();}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck();}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck();}_disabledInteractive=false;ngAfterContentInit(){this._isInitialized=true,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null);});}ngOnDestroy(){this._buttonChanges?.unsubscribe();}_touch(){this.onTouched&&this.onTouched();}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck();});}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(t=>{t.checked=this.value===t.value,t.checked&&(this._selected=t);}));}_emitChangeEvent(){this._isInitialized&&this.change.emit(new z(this._selected,this._value));}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck());}writeValue(e){this.value=e,this._changeDetector.markForCheck();}registerOnChange(e){this._controlValueAccessorChangeFn=e;}registerOnTouched(e){this.onTouched=e;}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck();}static \u0275fac=function(t){return new(t||a)};static \u0275dir=NE({type:a,selectors:[["mat-radio-group"]],contentQueries:function(t,i,d){if(t&1&&Jp(d,G,5),t&2){let l;yD(l=vD())&&(i._radios=l);}},hostAttrs:["role","radiogroup",1,"mat-mdc-radio-group"],inputs:{color:"color",name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:[2,"disabled","disabled",c0],required:[2,"required","required",c0],disabledInteractive:[2,"disabledInteractive","disabledInteractive",c0]},outputs:{change:"change"},exportAs:["matRadioGroup"],features:[eT([vt,{provide:st,useExisting:a}])]})}return a})(),G=(()=>{class a{_elementRef=v(vr);_changeDetector=v(i0);_focusMonitor=v(U4);_radioDispatcher=v(Fe);_defaultOptions=v(gt,{optional:true});_ngZone=v(G$1);_renderer=v(_I);_uniqueId=v(u3).getId("mat-radio-");_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=false;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck());}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)));}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e;}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e);}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e;}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||"accent"}set color(e){this._color=e;}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e;}_disabledInteractive;change=new $e;radioGroup;get inputId(){return `${this.id||this._uniqueId}-input`}_checked=false;_disabled=false;_required=false;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=k2();_injector=v(Ie);constructor(){v(bn).load(N8);let e=v(st,{optional:true}),t=v(new Nh("tabindex"),{optional:true});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??false,t&&(this.tabIndex=l0(t,0));}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e);}_markForCheck(){this._changeDetector.markForCheck();}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=false);});}ngDoCheck(){this._updateTabIndex();}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,true).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch();}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,"click",this._onInputClick);});}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener();}_emitChangeEvent(){this.change.emit(new z(this,this._value));}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=true,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent());}}_onTouchTargetClick(e){this._onInputInteraction(e),(!this.disabled||this.disabledInteractive)&&this._inputElement?.nativeElement.focus();}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck());}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault();};_updateTabIndex(){let e=this.radioGroup,t;if(!e||!e.selected||this.disabled?t=this.tabIndex:t=e.selected===this?this.tabIndex:-1,t!==this._previousTabIndex){let i=this._inputElement?.nativeElement;i&&(i.setAttribute("tabindex",t+""),this._previousTabIndex=t,Tv(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===i&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===i&&this._inputElement.nativeElement.blur());});},{injector:this._injector}));}}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=CE({type:a,selectors:[["mat-radio-button"]],viewQuery:function(t,i){if(t&1&&Xp(ht,5)(bt,7,vr),t&2){let d;yD(d=vD())&&(i._inputElement=d.first),yD(d=vD())&&(i._rippleTrigger=d.first);}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:19,hostBindings:function(t,i){t&1&&Zp("focus",function(){return i._inputElement.nativeElement.focus()}),t&2&&(Hp("id",i.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),ah("mat-primary",i.color==="primary")("mat-accent",i.color==="accent")("mat-warn",i.color==="warn")("mat-mdc-radio-checked",i.checked)("mat-mdc-radio-disabled",i.disabled)("mat-mdc-radio-disabled-interactive",i.disabledInteractive)("_mat-animation-noopable",i._noopAnimations));},inputs:{id:"id",name:"name",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],disableRipple:[2,"disableRipple","disableRipple",c0],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:l0(e)],checked:[2,"checked","checked",c0],value:"value",labelPosition:"labelPosition",disabled:[2,"disabled","disabled",c0],required:[2,"required","required",c0],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",c0]},outputs:{change:"change"},exportAs:["matRadioButton"],ngContentSelectors:ft,decls:13,vars:17,consts:[["formField",""],["input",""],["mat-internal-form-field","",3,"labelPosition"],[1,"mdc-radio"],["aria-hidden","true",1,"mat-mdc-radio-touch-target",3,"click"],["type","radio","aria-invalid","false",1,"mdc-radio__native-control",3,"change","id","checked","disabled","required"],["aria-hidden","true",1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","","aria-hidden","true",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mdc-label",3,"for"]],template:function(t,i){t&1&&(hD(),vi(0,"div",2,0)(2,"div",3)(3,"div",4),Zp("click",function(l){return i._onTouchTargetClick(l)}),Wc(),vi(4,"input",5,1),Zp("change",function(l){return i._onInputInteraction(l)}),Wc(),vi(6,"div",6),$p(7,"div",7)(8,"div",8),Wc(),vi(9,"div",9),$p(10,"div",10),Wc()(),vi(11,"label",11),gD(12),Wc()()),t&2&&(Bp("labelPosition",i.labelPosition),Gv(2),ah("mdc-radio--disabled",i.disabled),Gv(2),Bp("id",i.inputId)("checked",i.checked)("disabled",i.disabled&&!i.disabledInteractive)("required",i.required),Hp("name",i.name)("value",i.value)("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledby)("aria-describedby",i.ariaDescribedby)("aria-disabled",i.disabled&&i.disabledInteractive?"true":null),Gv(5),Bp("matRippleTrigger",i._rippleTrigger.nativeElement)("matRippleDisabled",i._isRippleDisabled())("matRippleCentered",true),Gv(2),Bp("for",i.inputId));},dependencies:[sf,lt],styles:[`.mat-mdc-radio-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-radio-button .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  cursor: pointer;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {
  opacity: 0.04;
  transform: scale(1);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-hover-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-pressed-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-radio-button .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-radio-button .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-radio-button .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:focus + .mdc-radio__background::before {
  transform: scale(1);
  opacity: 0.12;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {
  pointer-events: auto;
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-radio-button label {
  cursor: pointer;
}
.mat-mdc-radio-button label:empty {
  display: none;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {
  background-color: var(--mat-radio-checked-ripple-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {
  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mat-internal-form-field {
  color: var(--mat-radio-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-radio-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-radio-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-radio-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-radio-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-radio-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-radio-button .mdc-radio--disabled + label {
  color: var(--mat-radio-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-radio-button .mat-radio-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
}
.mat-mdc-radio-button .mat-radio-ripple > .mat-ripple-element {
  opacity: 0.14;
}
.mat-mdc-radio-button .mat-radio-ripple::before {
  border-radius: 50%;
}
.mat-mdc-radio-button .mdc-radio > .mdc-radio__native-control:focus:enabled:not(:checked) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-focus-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-radio-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-radio-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-radio-touch-target-size, 48px);
  width: var(--mat-radio-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-radio-touch-target-display, block);
}
[dir=rtl] .mat-mdc-radio-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})}return a})(),mt=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=bp({type:a});static \u0275inj=Ts({imports:[hf,G,Ke]})}return a})();var yt=(a,_)=>_.data.id;function Ct(a,_){if(a&1&&(vi(0,"div")(1,"a",15),qD(2),Wc(),qD(3),vi(4,"div",16),$p(5,"img",17),Wc()()),a&2){let e=fD(2).$implicit,t=fD(2);Gv(),Bp("href",e.data.url,wf),Gv(),gh$1(e.data.url),Gv(),Yc(" ",t.data(e)," "),Gv(2),Bp("src",e.data.thumbnail,wf);}}function kt(a,_){if(a&1&&(vi(0,"div")(1,"a",15),qD(2),Wc(),vi(3,"div",16)(4,"video",18),$p(5,"source",19),Wc()()()),a&2){let e=fD(2).$implicit;Gv(),Bp("href",e.data.url,wf),Gv(),gh$1(e.data.url),Gv(3),Bp("src",e.data.media.reddit_video.fallback_url);}}function Mt(a,_){if(a&1&&(vi(0,"div"),ZE(1,Ct,6,4,"div")(2,kt,6,3,"div"),Wc()),a&2){let e=fD().$implicit,t=fD(2);Gv(),YE((t.findImage()||t.findBoth())&&!e.data.is_video?1:(t.findVideo()||t.findBoth())&&e.data.is_video?2:-1);}}function xt(a,_){if(a&1&&ZE(0,Mt,3,1,"div"),a&2){let e=_.$implicit;YE(e.data.thumbnail!=="default"&&e.data.thumbnail!=="self"?0:-1);}}function It(a,_){if(a&1&&(vi(0,"div",11)(1,"div",12)(2,"div",13),qD(3,"The Results see below"),Wc()(),vi(4,"div",14),JE(5,xt,1,1,null,null,yt),oT(7,"async"),Wc()()),a&2){let e=fD();Gv(5),XE(sT(7,0,e.results$));}}var A=(()=>{class a{constructor(e){this.httpClient=e,this.searchSubject$=new ie,this.results$=pg([]),this.searchString="",this.searchMode="Both",this.showSearchContentFormControl=new L(this.searchMode);}ngOnInit(){this.results$=this.searchSubject$.pipe(kg(300),Lg(),io(e=>this.queryAPI(e)));}queryAPI(e){return console.log("queryAPI",e),this.httpClient.get(`https://www.reddit.com/r/aww/search.json?q=${e}`).pipe(Se(t=>t.data.children))}ngModelChange(e){console.log("input changed",e),this.searchSubject$.next(e);}findBoth(){return this.showSearchContentFormControl.value==="Both"}findVideo(){return this.showSearchContentFormControl.value==="Video"}findImage(){return this.showSearchContentFormControl.value==="Image"}data(e){console.log("data",e);}static{this.\u0275fac=function(t){return new(t||a)(wr(Ls))};}static{this.\u0275cmp=CE({type:a,selectors:[["app-material-examples-main"]],decls:22,vars:3,consts:[[1,"title-layout"],[1,"text-warning"],[1,"d-flex","align-items-center","flex-wrap"],[1,"d-flex","align-items-center","flex-wrap","search-field-style"],["matInput","","id","searchString",3,"ngModelChange","ngModel"],["color","primary","labelPosition","after",1,"align-radio-group",3,"formControl"],["value","Both"],["value","Image"],["value","Video"],[1,"align-trashcan"],["mat-fab","","color","primary",3,"click"],[1,"result-area"],[1,"result-area-title"],[1,"result-area-title-text"],[1,"d-flex","align-content-around","flex-wrap"],[2,"padding-left","20px",3,"href"],[2,"padding-left","20px"],["alt","data","width","auto","height","auto",3,"src"],["width","320","height","200","controls",""],[3,"src"]],template:function(t,i){t&1&&(vi(0,"div",0)(1,"div",1),qD(2,"It not belongs strictly the Material topic, but interesting, Simple wrap an API. for example Wrap https://www.reddit.com/r/aww/search.json?q="),Wc()(),$p(3,"hr"),vi(4,"div",2)(5,"div",3)(6,"mat-form-field")(7,"mat-label"),qD(8,"Search on reddit.com"),Wc(),vi(9,"input",4),yh("ngModelChange",function(l){return ZD(i.searchString,l)||(i.searchString=l),l}),Zp("ngModelChange",function(l){return i.ngModelChange(l)}),Wc(),OI(),Wc(),vi(10,"mat-radio-group",5)(11,"mat-radio-button",6),qD(12,"Both"),Wc(),vi(13,"mat-radio-button",7),qD(14,"Image"),Wc(),vi(15,"mat-radio-button",8),qD(16,"Video"),Wc()(),OI(),Wc(),vi(17,"div",9)(18,"button",10),Zp("click",function(){return i.searchString="",i.showSearchContentFormControl.setValue("Both"),i.searchSubject$.next("")}),vi(19,"mat-icon"),qD(20,"delete"),Wc()()()(),ZE(21,It,8,2,"div",11)),t&2&&(Gv(9),mh("ngModel",i.searchString),PI(),Gv(),Bp("formControl",i.showSearchContentFormControl),PI(),Gv(11),YE(i.searchString?21:-1));},dependencies:[et,re,on,jn,Xe,xn,Qt,X,Bn,an,G,Ln,Lr,du],styles:[".title-layout[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;font-size:large}.result-area[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:20px;border:1px solid #0cdfaa;border-radius:15px;height:100%;padding:.5rem}.result-area-title[_ngcontent-%COMP%]{margin:10px}.result-area-title-text[_ngcontent-%COMP%]{font-size:large;font-weight:700}.search-field-style[_ngcontent-%COMP%]{width:29rem;padding-top:.5rem}.align-radio-group[_ngcontent-%COMP%]{margin-top:-18px}.align-trashcan[_ngcontent-%COMP%]{margin-top:-10px}"],changeDetection:1});}}return a})();var Et=["sidenav"],q=(()=>{class a{constructor(e,t){this.router=e,this.mediaObserver=t;}ngOnInit(){this.router.url==="/"&&this.router.navigate(["/layout-pages/home"]);}initializeSideNav(){this.mediaObserver.isActive("xs")?this.sidenav.close():this.sidenav.open();}isScreenXs(){return this.mediaObserver.isActive("xs")}ngAfterViewInit(){setTimeout(()=>{this.initializeSideNav();});}onSidenavToggle(){this.sidenav.toggle(),console.log(">>>>>>> sidenav "+this.sidenav.opened);}static{this.\u0275fac=function(t){return new(t||a)(wr(he),wr(Wr))};}static{this.\u0275cmp=CE({type:a,selectors:[["app-material-examples-layout"]],viewQuery:function(t,i){if(t&1&&Xp(Et,5),t&2){let d;yD(d=vD())&&(i.sidenav=d.first);}},decls:15,vars:2,consts:[["sidenav",""],[1,"layout-content"],["color","primary",1,"toolbar-style"],["fxShow","true","fxHide.gt-xs",""],["mat-icon-button","",3,"click"],["autosize",""],["role","navigation",1,"mat-elevation-z10",3,"mode","opened"],[3,"sidenavClose"]],template:function(t,i){if(t&1){let d=iD();vi(0,"div",1)(1,"app-layout-content")(2,"mat-toolbar",2)(3,"div",3)(4,"button",4),Zp("click",function(){return i.onSidenavToggle()}),vi(5,"mat-icon"),qD(6,"menu"),Wc()()(),$p(7,"app-header"),Wc(),vi(8,"mat-sidenav-container",5)(9,"mat-sidenav",6,0)(11,"app-sidenav-list",7),Zp("sidenavClose",function(){Cu(d);let pt=ED(10);return wu(pt.close())}),Wc()(),vi(12,"mat-sidenav-content")(13,"main"),$p(14,"router-outlet"),Wc()()()()();}t&2&&(Gv(9),Bp("mode",i.isScreenXs()?"over":"side")("opened",!i.isScreenXs()));},dependencies:[$s,j6,It$1,ml,nn,Lr,v8,me,fn,P7,Ut,zi],styles:[".layout-content[_ngcontent-%COMP%]{height:calc(100% - 64px)}.layout-content[_ngcontent-%COMP%]   mat-sidenav-container[_ngcontent-%COMP%], .layout-content[_ngcontent-%COMP%]   mat-sidenav-content[_ngcontent-%COMP%], .layout-content[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]{height:100%}.layout-content[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]{width:250px}.layout-content[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{padding:10px}.layout-content[_ngcontent-%COMP%]   .toolbar-style[_ngcontent-%COMP%]{width:100%}"],changeDetection:1});}}return a})();var wt=[{path:"",component:q,children:[{path:"material-examples/components/material-examples-main",component:A}]}],ut=(()=>{class a{static{this.\u0275fac=function(t){return new(t||a)};}static{this.\u0275mod=bp({type:a});}static{this.\u0275inj=Ts({imports:[Jl.forChild(wt),Jl]});}}return a})();var Bi=(()=>{class a{static{this.\u0275fac=function(t){return new(t||a)};}static{this.\u0275mod=bp({type:a});}static{this.\u0275inj=Ts({imports:[ti,Jl,jn,Bn,se,rn,Zn,mt,Rr,$l,gh,ut,A,q]});}}return a})();
export{Bi as MaterialExamplesModule};