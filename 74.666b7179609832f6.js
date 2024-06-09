"use strict";(self.webpackChunkLKovariHome=self.webpackChunkLKovariHome||[]).push([[74],{8074:(le,v,r)=>{r.r(v),r.d(v,{MaterialExamplesModule:()=>ce});var h=r(177),m=r(3331),F=r(1342),E=r(6924),G=r(1413),I=r(6354),T=r(152),B=r(3294),O=r(5558),s=r(9417),e=r(3953),P=r(1626),_=r(8834),p=r(9213),f=r(9631),k=r(2102),S=r(7645),j=r(5024),u=r(6600);const z=["input"],D=["formField"],w=["*"];let y=0;class C{constructor(c,t){this.source=c,this.value=t}}const A={provide:s.kq,useExisting:(0,e.Rfq)(()=>M),multi:!0},x=new e.nKC("MatRadioGroup"),$=new e.nKC("mat-radio-default-options",{providedIn:"root",factory:function L(){return{color:"accent"}}});let M=(()=>{class o{get name(){return this._name}set name(t){this._name=t,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(t){this._labelPosition="before"===t?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(t){this._value!==t&&(this._value=t,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(t){this._selected=t,this.value=t?t.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._markRadiosForCheck()}get required(){return this._required}set required(t){this._required=t,this._markRadiosForCheck()}constructor(t){this._changeDetector=t,this._value=null,this._name="mat-radio-group-"+y++,this._selected=null,this._isInitialized=!1,this._labelPosition="after",this._disabled=!1,this._required=!1,this._controlValueAccessorChangeFn=()=>{},this.onTouched=()=>{},this.change=new e.bkB}ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(t=>t===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(t=>{t.name=this.name,t._markForCheck()})}_updateSelectedRadioFromValue(){this._radios&&(null===this._selected||this._selected.value!==this._value)&&(this._selected=null,this._radios.forEach(i=>{i.checked=this.value===i.value,i.checked&&(this._selected=i)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new C(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(t=>t._markForCheck())}writeValue(t){this.value=t,this._changeDetector.markForCheck()}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this.disabled=t,this._changeDetector.markForCheck()}static#e=this.\u0275fac=function(i){return new(i||o)(e.rXU(e.gRc))};static#t=this.\u0275dir=e.FsC({type:o,selectors:[["mat-radio-group"]],contentQueries:function(i,a,d){if(1&i&&e.wni(d,b,5),2&i){let n;e.mGM(n=e.lsd())&&(a._radios=n)}},hostAttrs:["role","radiogroup",1,"mat-mdc-radio-group"],inputs:{color:"color",name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:[2,"disabled","disabled",e.L39],required:[2,"required","required",e.L39]},outputs:{change:"change"},exportAs:["matRadioGroup"],standalone:!0,features:[e.Jv_([A,{provide:x,useExisting:o}]),e.GFd]})}return o})(),b=(()=>{class o{get checked(){return this._checked}set checked(t){this._checked!==t&&(this._checked=t,t&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!t&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),t&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(t){this._value!==t&&(this._value=t,null!==this.radioGroup&&(this.checked||(this.checked=this.radioGroup.value===t),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(t){this._labelPosition=t}get disabled(){return this._disabled||null!==this.radioGroup&&this.radioGroup.disabled}set disabled(t){this._setDisabled(t)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(t){this._required=t}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._providerOverride&&this._providerOverride.color||"accent"}set color(t){this._color=t}get inputId(){return`${this.id||this._uniqueId}-input`}constructor(t,i,a,d,n,l,se,R){this._elementRef=i,this._changeDetector=a,this._focusMonitor=d,this._radioDispatcher=n,this._providerOverride=se,this._uniqueId="mat-radio-"+ ++y,this.id=this._uniqueId,this.disableRipple=!1,this.tabIndex=0,this.change=new e.bkB,this._checked=!1,this._value=null,this._removeUniqueSelectionListener=()=>{},this._injector=(0,e.WQX)(e.zZn),this.radioGroup=t,this._noopAnimations="NoopAnimations"===l,R&&(this.tabIndex=(0,e.Udg)(R,0))}focus(t,i){i?this._focusMonitor.focusVia(this._inputElement,i,t):this._inputElement.nativeElement.focus(t)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((t,i)=>{t!==this.id&&i===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{!t&&this.radioGroup&&this.radioGroup._touch()})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new C(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputClick(t){t.stopPropagation()}_onInputInteraction(t){if(t.stopPropagation(),!this.checked&&!this.disabled){const i=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),i&&this.radioGroup._emitChangeEvent())}}_onTouchTargetClick(t){this._onInputInteraction(t),this.disabled||this._inputElement.nativeElement.focus()}_setDisabled(t){this._disabled!==t&&(this._disabled=t,this._changeDetector.markForCheck())}_updateTabIndex(){const t=this.radioGroup;let i;if(i=t&&t.selected&&!this.disabled?t.selected===this?this.tabIndex:-1:this.tabIndex,i!==this._previousTabIndex){const a=this._inputElement?.nativeElement;a&&(a.setAttribute("tabindex",i+""),this._previousTabIndex=i,(0,e.mal)(()=>{queueMicrotask(()=>{t&&t.selected&&t.selected!==this&&document.activeElement===a&&(t.selected?._inputElement.nativeElement.focus(),document.activeElement===a&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static#e=this.\u0275fac=function(i){return new(i||o)(e.rXU(x,8),e.rXU(e.aKT),e.rXU(e.gRc),e.rXU(S.FN),e.rXU(j.zP),e.rXU(e.bc$,8),e.rXU($,8),e.kS0("tabindex"))};static#t=this.\u0275cmp=e.VBU({type:o,selectors:[["mat-radio-button"]],viewQuery:function(i,a){if(1&i&&(e.GBs(z,5),e.GBs(D,7,e.aKT)),2&i){let d;e.mGM(d=e.lsd())&&(a._inputElement=d.first),e.mGM(d=e.lsd())&&(a._rippleTrigger=d.first)}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:15,hostBindings:function(i,a){1&i&&e.bIt("focus",function(){return a._inputElement.nativeElement.focus()}),2&i&&(e.BMQ("id",a.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),e.AVh("mat-primary","primary"===a.color)("mat-accent","accent"===a.color)("mat-warn","warn"===a.color)("mat-mdc-radio-checked",a.checked)("_mat-animation-noopable",a._noopAnimations))},inputs:{id:"id",name:"name",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],disableRipple:[2,"disableRipple","disableRipple",e.L39],tabIndex:[2,"tabIndex","tabIndex",t=>null==t?0:(0,e.Udg)(t)],checked:[2,"checked","checked",e.L39],value:"value",labelPosition:"labelPosition",disabled:[2,"disabled","disabled",e.L39],required:[2,"required","required",e.L39],color:"color"},outputs:{change:"change"},exportAs:["matRadioButton"],standalone:!0,features:[e.GFd,e.aNF],ngContentSelectors:w,decls:13,vars:16,consts:[["formField",""],["input",""],["mat-internal-form-field","",3,"labelPosition"],[1,"mdc-radio"],[1,"mat-mdc-radio-touch-target",3,"click"],["type","radio",1,"mdc-radio__native-control",3,"change","id","checked","disabled","required"],[1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","",1,"mat-radio-ripple","mat-mdc-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mdc-label",3,"for"]],template:function(i,a){if(1&i){const d=e.RV6();e.NAR(),e.j41(0,"div",2,0)(2,"div",3)(3,"div",4),e.bIt("click",function(l){return e.eBV(d),e.Njj(a._onTouchTargetClick(l))}),e.k0s(),e.j41(4,"input",5,1),e.bIt("change",function(l){return e.eBV(d),e.Njj(a._onInputInteraction(l))}),e.k0s(),e.j41(6,"div",6),e.nrm(7,"div",7)(8,"div",8),e.k0s(),e.j41(9,"div",9),e.nrm(10,"div",10),e.k0s()(),e.j41(11,"label",11),e.SdG(12),e.k0s()()}2&i&&(e.Y8G("labelPosition",a.labelPosition),e.R7$(2),e.AVh("mdc-radio--disabled",a.disabled),e.R7$(2),e.Y8G("id",a.inputId)("checked",a.checked)("disabled",a.disabled)("required",a.required),e.BMQ("name",a.name)("value",a.value)("aria-label",a.ariaLabel)("aria-labelledby",a.ariaLabelledby)("aria-describedby",a.ariaDescribedby),e.R7$(5),e.Y8G("matRippleTrigger",a._rippleTrigger.nativeElement)("matRippleDisabled",a._isRippleDisabled())("matRippleCentered",!0),e.R7$(2),e.Y8G("for",a.inputId))},dependencies:[u.r6,u.tO],styles:['.mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color}.mdc-radio[hidden]{display:none}.mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-radio--touch .mdc-radio__native-control{top:calc((40px - 48px) / 2);right:calc((40px - 48px) / 2);left:calc((40px - 48px) / 2);width:48px;height:48px}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}@media screen and (forced-colors: active){.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring{border-color:CanvasText}}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring::after,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring::after,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring::after{border-color:CanvasText}}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-radio-button .mdc-radio{padding:calc((var(--mdc-radio-state-layer-size) - 20px) / 2)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-disabled-selected-icon-color)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{opacity:var(--mdc-radio-disabled-selected-icon-opacity)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{opacity:var(--mdc-radio-disabled-selected-icon-opacity)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{opacity:var(--mdc-radio-disabled-unselected-icon-opacity)}.mat-mdc-radio-button .mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-focus-icon-color)}.mat-mdc-radio-button .mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-focus-icon-color)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-hover-icon-color)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-hover-icon-color)}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-icon-color)}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-icon-color)}.mat-mdc-radio-button .mdc-radio:not(:disabled):active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-pressed-icon-color)}.mat-mdc-radio-button .mdc-radio:not(:disabled):active .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-pressed-icon-color)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-hover-icon-color)}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-icon-color)}.mat-mdc-radio-button .mdc-radio:not(:disabled):active .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-pressed-icon-color)}.mat-mdc-radio-button .mdc-radio .mdc-radio__background::before{top:calc(-1 * (var(--mdc-radio-state-layer-size) - 20px) / 2);left:calc(-1 * (var(--mdc-radio-state-layer-size) - 20px) / 2);width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size)}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control{top:calc((var(--mdc-radio-state-layer-size) - var(--mdc-radio-state-layer-size)) / 2);right:calc((var(--mdc-radio-state-layer-size) - var(--mdc-radio-state-layer-size)) / 2);left:calc((var(--mdc-radio-state-layer-size) - var(--mdc-radio-state-layer-size)) / 2);width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size)}.mat-mdc-radio-button .mdc-radio .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled]):not(:focus)~.mdc-radio__background::before{opacity:.04;transform:scale(1)}.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before{background-color:var(--mat-radio-checked-ripple-color)}.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element{background-color:var(--mat-radio-checked-ripple-color)}.mat-mdc-radio-button .mat-internal-form-field{color:var(--mat-radio-label-text-color);font-family:var(--mat-radio-label-text-font);line-height:var(--mat-radio-label-text-line-height);font-size:var(--mat-radio-label-text-size);letter-spacing:var(--mat-radio-label-text-tracking);font-weight:var(--mat-radio-label-text-weight)}.mat-mdc-radio-button .mdc-radio--disabled+label{color:var(--mat-radio-disabled-label-color)}.mat-mdc-radio-button .mat-radio-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:50%}.mat-mdc-radio-button .mat-radio-ripple .mat-ripple-element{opacity:.14}.mat-mdc-radio-button .mat-radio-ripple::before{border-radius:50%}.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:focus:enabled:not(:checked)~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-focus-icon-color, black)}.mat-mdc-radio-button.cdk-focused .mat-mdc-focus-indicator::before{content:""}.mat-mdc-radio-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%);display:var(--mat-radio-touch-target-display)}[dir=rtl] .mat-mdc-radio-touch-target{left:0;right:50%;transform:translate(50%, -50%)}'],encapsulation:2,changeDetection:0})}return o})(),V=(()=>{class o{static#e=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275mod=e.$C({type:o});static#i=this.\u0275inj=e.G2t({imports:[u.yE,h.MD,u.pZ,b,u.yE]})}return o})();var U=r(334);const X=(o,c)=>c.data.id;function N(o,c){if(1&o&&(e.j41(0,"div")(1,"a",15),e.EFF(2),e.k0s(),e.EFF(3),e.j41(4,"div",16),e.nrm(5,"img",17),e.k0s()()),2&o){const t=e.XpG(2).$implicit,i=e.XpG(2);e.R7$(),e.Y8G("href",t.data.url,e.B4B),e.R7$(),e.JRh(t.data.url),e.R7$(),e.SpI(" ",i.data(t)," "),e.R7$(2),e.Y8G("src",t.data.thumbnail,e.B4B)}}function Y(o,c){if(1&o&&(e.j41(0,"div")(1,"a",15),e.EFF(2),e.k0s(),e.j41(3,"div",16)(4,"video",18),e.nrm(5,"source",19),e.k0s()()()),2&o){const t=e.XpG(2).$implicit;e.R7$(),e.Y8G("href",t.data.url,e.B4B),e.R7$(),e.JRh(t.data.url),e.R7$(3),e.Y8G("src",t.data.media.reddit_video.fallback_url,e.B4B)}}function Q(o,c){if(1&o&&(e.j41(0,"div"),e.DNE(1,N,6,4,"div")(2,Y,6,3,"div"),e.k0s()),2&o){const t=e.XpG().$implicit,i=e.XpG(2);e.R7$(),e.vxM(!i.findImage()&&!i.findBoth()||t.data.is_video?(i.findVideo()||i.findBoth())&&t.data.is_video?2:-1:1)}}function H(o,c){if(1&o&&e.DNE(0,Q,3,1,"div"),2&o){const t=c.$implicit;e.vxM("default"!==t.data.thumbnail&&"self"!==t.data.thumbnail?0:-1)}}function J(o,c){if(1&o&&(e.j41(0,"div",11)(1,"div",12)(2,"div",13),e.EFF(3,"The Results see below"),e.k0s()(),e.j41(4,"div",14),e.Z7z(5,H,1,1,null,null,X),e.nI1(7,"async"),e.k0s()()),2&o){const t=e.XpG();e.R7$(5),e.Dyx(e.bMT(7,0,t.results$))}}let K=(()=>{class o{constructor(t){this.httpClient=t,this.searchSubject$=new G.B,this.searchMode="Both",this.showSearchContentFormControl=new s.MJ(this.searchMode)}ngOnInit(){this.results$=this.searchSubject$.pipe((0,T.B)(300),(0,B.F)(),(0,O.n)(t=>this.queryAPI(t)))}queryAPI(t){return console.log("queryAPI",t),this.httpClient.get(`https://www.reddit.com/r/aww/search.json?q=${t}`).pipe((0,I.T)(i=>i.data.children))}ngModelChange(t){console.log("input changed",t),this.searchSubject$.next(t)}findBoth(){return"Both"===this.showSearchContentFormControl.value}findVideo(){return"Video"===this.showSearchContentFormControl.value}findImage(){return"Image"===this.showSearchContentFormControl.value}data(t){console.log("data",t)}static#e=this.\u0275fac=function(i){return new(i||o)(e.rXU(P.Qq))};static#t=this.\u0275cmp=e.VBU({type:o,selectors:[["app-material-examples-main"]],decls:22,vars:3,consts:[[1,"title-layout"],[1,"text-warning"],[1,"d-flex","align-items-center","flex-wrap"],[1,"d-flex","align-items-center","flex-wrap","search-field-style"],["matInput","","id","searchString",3,"ngModelChange","ngModel"],["color","primary","labelPosition","after",1,"align-radio-group",3,"formControl"],["value","Both"],["value","Image"],["value","Video"],[1,"align-trashcan"],["mat-fab","","color","primary",3,"click"],[1,"result-area"],[1,"result-area-title"],[1,"result-area-title-text"],[1,"d-flex","align-content-around","flex-wrap"],[2,"padding-left","20px",3,"href"],[2,"padding-left","20px"],["alt","","width","auto","height","auto",3,"src"],["width","320","height","200","controls",""],[3,"src"]],template:function(i,a){1&i&&(e.j41(0,"div",0)(1,"div",1),e.EFF(2,"It not belongs strictly the Material topic, but interesting, Simple wrap an API. for example Wrap https://www.reddit.com/r/aww/search.json?q="),e.k0s()(),e.nrm(3,"hr"),e.j41(4,"div",2)(5,"div",3)(6,"mat-form-field")(7,"mat-label"),e.EFF(8,"Search on reddit.com"),e.k0s(),e.j41(9,"input",4),e.mxI("ngModelChange",function(n){return e.DH7(a.searchString,n)||(a.searchString=n),n}),e.bIt("ngModelChange",function(n){return a.ngModelChange(n)}),e.k0s()(),e.j41(10,"mat-radio-group",5)(11,"mat-radio-button",6),e.EFF(12,"Both"),e.k0s(),e.j41(13,"mat-radio-button",7),e.EFF(14,"Image"),e.k0s(),e.j41(15,"mat-radio-button",8),e.EFF(16,"Video"),e.k0s()()(),e.j41(17,"div",9)(18,"button",10),e.bIt("click",function(){return a.searchString="",a.showSearchContentFormControl.setValue("Both"),a.searchSubject$.next("")}),e.j41(19,"mat-icon"),e.EFF(20,"delete"),e.k0s()()()(),e.DNE(21,J,8,2,"div",11)),2&i&&(e.R7$(9),e.R50("ngModel",a.searchString),e.R7$(),e.Y8G("formControl",a.showSearchContentFormControl),e.R7$(11),e.vxM(a.searchString?21:-1))},dependencies:[s.me,s.BC,s.vS,s.l_,_.Sr,p.An,f.fg,k.rl,k.nJ,M,b,U.D,h.Jj],styles:[".title-layout[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;font-size:large}.result-area[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:20px;border:1px solid #0cdfaa;border-radius:15px;height:100%;padding:.5rem}.result-area-title[_ngcontent-%COMP%]{margin:10px}.result-area-title-text[_ngcontent-%COMP%]{font-size:large;font-weight:700}.search-field-style[_ngcontent-%COMP%]{width:29rem;padding-top:.5rem}.align-radio-group[_ngcontent-%COMP%]{margin-top:-18px}.align-trashcan[_ngcontent-%COMP%]{margin-top:-10px}"]})}return o})();var q=r(9340),Z=r(5911),g=r(882),W=r(6038),ee=r(9381),te=r(2469),ie=r(9319);const oe=["sidenav"],ae=[{path:"",component:(()=>{class o{constructor(t,i){this.router=t,this.mediaObserver=i}ngOnInit(){"/"===this.router.url&&this.router.navigate(["/layout-pages/home"])}initializeSideNav(){this.mediaObserver.isActive("xs")?this.sidenav.close():this.sidenav.open()}isScreenXs(){return this.mediaObserver.isActive("xs")}ngAfterViewInit(){setTimeout(()=>{this.initializeSideNav()})}onSidenavToggle(){this.sidenav.toggle(),console.log(">>>>>>> sidenav "+this.sidenav.opened)}static#e=this.\u0275fac=function(i){return new(i||o)(e.rXU(m.Ix),e.rXU(q.nJ))};static#t=this.\u0275cmp=e.VBU({type:o,selectors:[["app-material-examples-layout"]],viewQuery:function(i,a){if(1&i&&e.GBs(oe,5),2&i){let d;e.mGM(d=e.lsd())&&(a.sidenav=d.first)}},decls:15,vars:2,consts:[["sidenav",""],[1,"layout-content"],["color","primary",1,"toolbar-style"],["fxShow","true","fxHide.gt-xs",""],["mat-icon-button","",3,"click"],["autosize",""],["role","navigation",1,"mat-elevation-z10",3,"mode","opened"],[3,"sidenavClose"]],template:function(i,a){if(1&i){const d=e.RV6();e.j41(0,"div",1)(1,"app-layout-content")(2,"mat-toolbar",2)(3,"div",3)(4,"button",4),e.bIt("click",function(){return e.eBV(d),e.Njj(a.onSidenavToggle())}),e.j41(5,"mat-icon"),e.EFF(6,"menu"),e.k0s()()(),e.nrm(7,"app-header"),e.k0s(),e.j41(8,"mat-sidenav-container",5)(9,"mat-sidenav",6,0)(11,"app-sidenav-list",7),e.bIt("sidenavClose",function(){e.eBV(d);const l=e.sdS(10);return e.Njj(l.close())}),e.k0s()(),e.j41(12,"mat-sidenav-content")(13,"main"),e.nrm(14,"router-outlet"),e.k0s()()()()()}2&i&&(e.R7$(9),e.Y8G("mode",a.isScreenXs()?"over":"side")("opened",!a.isScreenXs()))},dependencies:[m.n3,_.iY,p.An,Z.KQ,g.LG,g.US,g.El,W.Om,ee.l,te.E,ie.T],styles:[".layout-content[_ngcontent-%COMP%]{height:calc(100% - 64px)}.layout-content[_ngcontent-%COMP%]   mat-sidenav-container[_ngcontent-%COMP%], .layout-content[_ngcontent-%COMP%]   mat-sidenav-content[_ngcontent-%COMP%], .layout-content[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]{height:100%}.layout-content[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]{width:250px}.layout-content[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{padding:10px}.layout-content[_ngcontent-%COMP%]   .toolbar-style[_ngcontent-%COMP%]{width:100%}"]})}return o})(),children:[{path:"material-examples/components/material-examples-main",component:K}]}];let re=(()=>{class o{static#e=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275mod=e.$C({type:o});static#i=this.\u0275inj=e.G2t({imports:[m.iI.forChild(ae),m.iI]})}return o})();var de=r(9443),ne=r(3498);let ce=(()=>{class o{static#e=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275mod=e.$C({type:o});static#i=this.\u0275inj=e.G2t({imports:[h.MD,m.iI,s.YN,s.X1,de.I,F.G,f.fS,_.Hl,V,p.m_,E.YF,ne.G,re]})}return o})()}}]);