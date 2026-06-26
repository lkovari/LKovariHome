import {z as zt,i as ie,Y as Yi}from'./chunk-CNYDFhcZ.js';import {E as En,B as Bt,y as yt,Y as Yt}from'./chunk-CwAXH_dj.js';import {$,C as Ce,B as Bi}from'./chunk-Dhlwm71V.js';import {E as Et}from'./chunk-D2j3FATm.js';import {v as v$1}from'./chunk-D18Rs3Mn.js';import {v,bg as xt,aE as oe,bh as ng,bi as og,bj as ig,bk as Gr,au as be,D as DE,bl as Ut,I as Ii,U as UD,a as Uc,V as Vp,ax as vh,Q as Qp,x as kI,z as zE,q as qv,az as yh,E as LI,j as jp,c as QE,bm as zF,M as Be$1,ag as ME,_ as YF,a7 as JD,ah as M,ac as Kp,aa as gD,ab as mD,ap as yr,aO as z,bn as NI,S as ve,bo as _h,$ as KF,bp as Dv,aX as fD,b3 as pD,s as sh,F as Fp,a9 as Jp,Y as YE,aw as nT,u as uD,K as KE,bq as oT,al as mo,be as zD,l as bf,h as hh,d as Qc}from'./main-OV2GK3BV.js';import {L,T as Tn,Z as Ze,O as On,J as Jt,j as jn,o as on,F}from'./chunk-BpeQO4I0.js';import'./chunk-Dex2fIp-.js';import'./chunk-B-yluwaB.js';var Te=["*"],De=(()=>{class a{labelPosition="after";static \u0275fac=function(t){return new(t||a)};static \u0275cmp=DE({type:a,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,i){t&2&&sh("mdc-form-field--align-end",i.labelPosition==="before");},inputs:{labelPosition:"labelPosition"},ngContentSelectors:Te,decls:1,vars:0,template:function(t,i){t&1&&(fD(),pD(0));},styles:[`.mat-internal-form-field {
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
`],encapsulation:2})}return a})();var Ge=["input"],ze=["formField"],qe=["*"],E=class{source;value;constructor(u,e){this.source=u,this.value=e;}},Ae={provide:F,useExisting:mo(()=>A),multi:true},Pe=new M("MatRadioGroup"),Be=new M("mat-radio-default-options",{providedIn:"root",factory:()=>({color:"accent",disabledInteractive:false})}),A=(()=>{class a{_changeDetector=v(zF);_value=null;_name=v($).getId("mat-radio-group-");_selected=null;_isInitialized=false;_labelPosition="after";_disabled=false;_required=false;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new Be$1;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames();}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e==="before"?"before":"after",this._markRadiosForCheck();}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton());}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=true);}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton();}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck();}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck();}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck();}_disabledInteractive=false;ngAfterContentInit(){this._isInitialized=true,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null);});}ngOnDestroy(){this._buttonChanges?.unsubscribe();}_touch(){this.onTouched&&this.onTouched();}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck();});}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(t=>{t.checked=this.value===t.value,t.checked&&(this._selected=t);}));}_emitChangeEvent(){this._isInitialized&&this.change.emit(new E(this._selected,this._value));}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck());}writeValue(e){this.value=e,this._changeDetector.markForCheck();}registerOnChange(e){this._controlValueAccessorChangeFn=e;}registerOnTouched(e){this.onTouched=e;}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck();}static \u0275fac=function(t){return new(t||a)};static \u0275dir=ME({type:a,selectors:[["mat-radio-group"]],contentQueries:function(t,i,c){if(t&1&&Kp(c,B,5),t&2){let l;gD(l=mD())&&(i._radios=l);}},hostAttrs:["role","radiogroup",1,"mat-mdc-radio-group"],inputs:{color:"color",name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:[2,"disabled","disabled",YF],required:[2,"required","required",YF],disabledInteractive:[2,"disabledInteractive","disabledInteractive",YF]},outputs:{change:"change"},exportAs:["matRadioGroup"],features:[JD([Ae,{provide:Pe,useExisting:a}])]})}return a})(),B=(()=>{class a{_elementRef=v(yr);_changeDetector=v(zF);_focusMonitor=v(Ce);_radioDispatcher=v(Bt);_defaultOptions=v(Be,{optional:true});_ngZone=v(z);_renderer=v(NI);_uniqueId=v($).getId("mat-radio-");_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=false;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck());}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)));}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e;}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e);}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e;}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||"accent"}set color(e){this._color=e;}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e;}_disabledInteractive;change=new Be$1;radioGroup;get inputId(){return `${this.id||this._uniqueId}-input`}_checked=false;_disabled=false;_required=false;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=Bi();_injector=v(ve);constructor(){v(v$1).load(yt);let e=v(Pe,{optional:true}),t=v(new _h("tabindex"),{optional:true});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??false,t&&(this.tabIndex=KF(t,0));}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e);}_markForCheck(){this._changeDetector.markForCheck();}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=false);});}ngDoCheck(){this._updateTabIndex();}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,true).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch();}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,"click",this._onInputClick);});}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener();}_emitChangeEvent(){this.change.emit(new E(this,this._value));}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=true,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent());}}_onTouchTargetClick(e){this._onInputInteraction(e),(!this.disabled||this.disabledInteractive)&&this._inputElement?.nativeElement.focus();}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck());}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault();};_updateTabIndex(){let e=this.radioGroup,t;if(!e||!e.selected||this.disabled?t=this.tabIndex:t=e.selected===this?this.tabIndex:-1,t!==this._previousTabIndex){let i=this._inputElement?.nativeElement;i&&(i.setAttribute("tabindex",t+""),this._previousTabIndex=t,Dv(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===i&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===i&&this._inputElement.nativeElement.blur());});},{injector:this._injector}));}}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=DE({type:a,selectors:[["mat-radio-button"]],viewQuery:function(t,i){if(t&1&&Jp(Ge,5)(ze,7,yr),t&2){let c;gD(c=mD())&&(i._inputElement=c.first),gD(c=mD())&&(i._rippleTrigger=c.first);}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:19,hostBindings:function(t,i){t&1&&Qp("focus",function(){return i._inputElement.nativeElement.focus()}),t&2&&(Fp("id",i.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),sh("mat-primary",i.color==="primary")("mat-accent",i.color==="accent")("mat-warn",i.color==="warn")("mat-mdc-radio-checked",i.checked)("mat-mdc-radio-disabled",i.disabled)("mat-mdc-radio-disabled-interactive",i.disabledInteractive)("_mat-animation-noopable",i._noopAnimations));},inputs:{id:"id",name:"name",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],disableRipple:[2,"disableRipple","disableRipple",YF],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:KF(e)],checked:[2,"checked","checked",YF],value:"value",labelPosition:"labelPosition",disabled:[2,"disabled","disabled",YF],required:[2,"required","required",YF],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",YF]},outputs:{change:"change"},exportAs:["matRadioButton"],ngContentSelectors:qe,decls:13,vars:17,consts:[["formField",""],["input",""],["mat-internal-form-field","",3,"labelPosition"],[1,"mdc-radio"],["aria-hidden","true",1,"mat-mdc-radio-touch-target",3,"click"],["type","radio","aria-invalid","false",1,"mdc-radio__native-control",3,"change","id","checked","disabled","required"],["aria-hidden","true",1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","","aria-hidden","true",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mdc-label",3,"for"]],template:function(t,i){t&1&&(fD(),Ii(0,"div",2,0)(2,"div",3)(3,"div",4),Qp("click",function(l){return i._onTouchTargetClick(l)}),Uc(),Ii(4,"input",5,1),Qp("change",function(l){return i._onInputInteraction(l)}),Uc(),Ii(6,"div",6),Vp(7,"div",7)(8,"div",8),Uc(),Ii(9,"div",9),Vp(10,"div",10),Uc()(),Ii(11,"label",11),pD(12),Uc()()),t&2&&(jp("labelPosition",i.labelPosition),qv(2),sh("mdc-radio--disabled",i.disabled),qv(2),jp("id",i.inputId)("checked",i.checked)("disabled",i.disabled&&!i.disabledInteractive)("required",i.required),Fp("name",i.name)("value",i.value)("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledby)("aria-describedby",i.ariaDescribedby)("aria-disabled",i.disabled&&i.disabledInteractive?"true":null),qv(5),jp("matRippleTrigger",i._rippleTrigger.nativeElement)("matRippleDisabled",i._isRippleDisabled())("matRippleCentered",true),qv(2),jp("for",i.inputId));},dependencies:[Yt,De],styles:[`.mat-mdc-radio-button {
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
`],encapsulation:2})}return a})();var Oe=(a,u)=>u.data.id;function je(a,u){if(a&1&&(Ii(0,"div")(1,"a",15),UD(2),Uc(),UD(3),Ii(4,"div",16),Vp(5,"img",17),Uc()()),a&2){let e=uD(2).$implicit,t=uD(2);qv(),jp("href",e.data.url,bf),qv(),hh(e.data.url),qv(),Qc(" ",t.data(e)," "),qv(2),jp("src",e.data.thumbnail,bf);}}function Ve(a,u){if(a&1&&(Ii(0,"div")(1,"a",15),UD(2),Uc(),Ii(3,"div",16)(4,"video",18),Vp(5,"source",19),Uc()()()),a&2){let e=uD(2).$implicit;qv(),jp("href",e.data.url,bf),qv(),hh(e.data.url),qv(3),jp("src",e.data.media.reddit_video.fallback_url);}}function Le(a,u){if(a&1&&(Ii(0,"div"),zE(1,je,6,4,"div")(2,Ve,6,3,"div"),Uc()),a&2){let e=uD().$implicit,t=uD(2);qv(),QE((t.findImage()||t.findBoth())&&!e.data.is_video?1:(t.findVideo()||t.findBoth())&&e.data.is_video?2:-1);}}function Ue(a,u){if(a&1&&zE(0,Le,3,1,"div"),a&2){let e=u.$implicit;QE(e.data.thumbnail!=="default"&&e.data.thumbnail!=="self"?0:-1);}}function $e(a,u){if(a&1&&(Ii(0,"div",11)(1,"div",12)(2,"div",13),UD(3,"The Results see below"),Uc()(),Ii(4,"div",14),YE(5,Ue,1,1,null,null,Oe),nT(7,"async"),Uc()()),a&2){let e=uD();qv(5),KE(oT(7,0,e.results$));}}var St=(()=>{class a{constructor(){this.httpClient=v(xt),this.searchSubject$=new oe,this.results$=ng([]),this.searchString="",this.searchMode="Both",this.showSearchContentFormControl=new L(this.searchMode);}ngOnInit(){this.results$=this.searchSubject$.pipe(og(300),ig(),Gr(e=>this.queryAPI(e)));}queryAPI(e){return console.log("queryAPI",e),this.httpClient.get(`https://www.reddit.com/r/aww/search.json?q=${e}`).pipe(be(t=>t.data.children))}ngModelChange(e){console.log("input changed",e),this.searchSubject$.next(e);}findBoth(){return this.showSearchContentFormControl.value==="Both"}findVideo(){return this.showSearchContentFormControl.value==="Video"}findImage(){return this.showSearchContentFormControl.value==="Image"}data(e){console.log("data",e);}static{this.\u0275fac=function(t){return new(t||a)};}static{this.\u0275cmp=DE({type:a,selectors:[["app-material-examples-main"]],decls:22,vars:3,consts:[[1,"title-layout"],[1,"text-warning"],[1,"d-flex","align-items-center","flex-wrap"],[1,"d-flex","align-items-center","flex-wrap","search-field-style"],["matInput","","id","searchString",3,"ngModelChange","ngModel"],["color","primary","labelPosition","after",1,"align-radio-group",3,"formControl"],["value","Both"],["value","Image"],["value","Video"],[1,"align-trashcan"],["mat-fab","","color","primary",3,"click"],[1,"result-area"],[1,"result-area-title"],[1,"result-area-title-text"],[1,"d-flex","align-content-around","flex-wrap"],[2,"padding-left","20px",3,"href"],[2,"padding-left","20px"],["alt","data","width","auto","height","auto",3,"src"],["width","320","height","200","controls",""],[3,"src"]],template:function(t,i){t&1&&(Ii(0,"div",0)(1,"div",1),UD(2,"It not belongs strictly the Material topic, but interesting, Simple wrap an API. for example Wrap https://www.reddit.com/r/aww/search.json?q="),Uc()(),Vp(3,"hr"),Ii(4,"div",2)(5,"div",3)(6,"mat-form-field")(7,"mat-label"),UD(8,"Search on reddit.com"),Uc(),Ii(9,"input",4),vh("ngModelChange",function(l){return zD(i.searchString,l)||(i.searchString=l),l}),Qp("ngModelChange",function(l){return i.ngModelChange(l)}),Uc(),kI(),Uc(),Ii(10,"mat-radio-group",5)(11,"mat-radio-button",6),UD(12,"Both"),Uc(),Ii(13,"mat-radio-button",7),UD(14,"Image"),Uc(),Ii(15,"mat-radio-button",8),UD(16,"Video"),Uc()(),kI(),Uc(),Ii(17,"div",9)(18,"button",10),Qp("click",function(){return i.searchString="",i.showSearchContentFormControl.setValue("Both"),i.searchSubject$.next("")}),Ii(19,"mat-icon"),UD(20,"delete"),Uc()()()(),zE(21,$e,8,2,"div",11)),t&2&&(qv(9),yh("ngModel",i.searchString),LI(),qv(),jp("formControl",i.showSearchContentFormControl),LI(),qv(11),QE(i.searchString?21:-1));},dependencies:[zt,ie,Yi,Tn,Ze,On,Jt,A,jn,on,B,En,Et,Ut],styles:[".title-layout[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;font-size:large}.result-area[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:20px;border:1px solid #0cdfaa;border-radius:15px;height:100%;padding:.5rem}.result-area-title[_ngcontent-%COMP%]{margin:10px}.result-area-title-text[_ngcontent-%COMP%]{font-size:large;font-weight:700}.search-field-style[_ngcontent-%COMP%]{width:29rem;padding-top:.5rem}.align-radio-group[_ngcontent-%COMP%]{margin-top:-18px}.align-trashcan[_ngcontent-%COMP%]{margin-top:-10px}"],changeDetection:1});}}return a})();
export{St as MaterialExamplesMainComponent};