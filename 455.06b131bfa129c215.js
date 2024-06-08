"use strict";(self.webpackChunkLKovariHome=self.webpackChunkLKovariHome||[]).push([[455],{334:(M,v,a)=>{a.d(v,{D:()=>d});var o=a(4438);let d=(()=>{class s extends o.WLR{constructor(h){super(),this.elementRef=h}ngAfterViewInit(){const h=this.elementRef.nativeElement;"loading"in HTMLImageElement.prototype?(h.setAttribute("loading","lazy"),console.log('>>> Attribute loading="lazy" is set to img element src="'+h.src+'"')):console.log(">>> loading lazy is NOT supported!")}static#e=this.\u0275fac=function(f){return new(f||s)(o.rXU(o.aKT))};static#t=this.\u0275dir=o.FsC({type:s,selectors:[["img",3,"noLazy",""]],features:[o.Vt3]})}return s})()},9631:(M,v,a)=>{a.d(v,{fg:()=>I,fS:()=>S});var o=a(4085),d=a(6860),s=a(4438),b=a(983),h=a(1413);const f=(0,d.BQ)({passive:!0});let A=(()=>{class n{constructor(e,t){this._platform=e,this._ngZone=t,this._monitoredElements=new Map}monitor(e){if(!this._platform.isBrowser)return b.w;const t=(0,o.i8)(e),i=this._monitoredElements.get(t);if(i)return i.subject;const r=new h.B,l="cdk-text-field-autofilled",c=u=>{"cdk-text-field-autofill-start"!==u.animationName||t.classList.contains(l)?"cdk-text-field-autofill-end"===u.animationName&&t.classList.contains(l)&&(t.classList.remove(l),this._ngZone.run(()=>r.next({target:u.target,isAutofilled:!1}))):(t.classList.add(l),this._ngZone.run(()=>r.next({target:u.target,isAutofilled:!0})))};return this._ngZone.runOutsideAngular(()=>{t.addEventListener("animationstart",c,f),t.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(t,{subject:r,unlisten:()=>{t.removeEventListener("animationstart",c,f)}}),r}stopMonitoring(e){const t=(0,o.i8)(e),i=this._monitoredElements.get(t);i&&(i.unlisten(),i.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static#e=this.\u0275fac=function(t){return new(t||n)(s.KVO(d.OD),s.KVO(s.SKi))};static#t=this.\u0275prov=s.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),w=(()=>{class n{static#e=this.\u0275fac=function(t){return new(t||n)};static#t=this.\u0275mod=s.$C({type:n});static#i=this.\u0275inj=s.G2t({})}return n})();var _=a(9417),g=a(6600),p=a(2102);const H=new s.nKC("MAT_INPUT_VALUE_ACCESSOR"),R=["button","checkbox","file","hidden","image","radio","range","reset","submit"];let T=0,I=(()=>{class n{get disabled(){return this._disabled}set disabled(e){this._disabled=(0,o.he)(e),this.focused&&(this.focused=!1,this.stateChanges.next())}get id(){return this._id}set id(e){this._id=e||this._uid}get required(){return this._required??this.ngControl?.control?.hasValidator(_.k0.required)??!1}set required(e){this._required=(0,o.he)(e)}get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&(0,d.MU)().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}get value(){return this._inputValueAccessor.value}set value(e){e!==this.value&&(this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=(0,o.he)(e)}get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}constructor(e,t,i,r,l,c,u,F,L,E){this._elementRef=e,this._platform=t,this.ngControl=i,this._autofillMonitor=F,this._formField=E,this._uid="mat-input-"+T++,this.focused=!1,this.stateChanges=new h.B,this.controlType="mat-input",this.autofilled=!1,this._disabled=!1,this._type="text",this._readonly=!1,this._neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(x=>(0,d.MU)().has(x)),this._iOSKeyupListener=x=>{const m=x.target;!m.value&&0===m.selectionStart&&0===m.selectionEnd&&(m.setSelectionRange(1,1),m.setSelectionRange(0,0))};const y=this._elementRef.nativeElement,C=y.nodeName.toLowerCase();this._inputValueAccessor=u||y,this._previousNativeValue=this.value,this.id=this.id,t.IOS&&L.runOutsideAngular(()=>{e.nativeElement.addEventListener("keyup",this._iOSKeyupListener)}),this._errorStateTracker=new g.X0(c,i,l,r,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect="select"===C,this._isTextarea="textarea"===C,this._isInFormField=!!E,this._isNativeSelect&&(this.controlType=y.multiple?"mat-native-select-multiple":"mat-native-select")}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._platform.IOS&&this._elementRef.nativeElement.removeEventListener("keyup",this._iOSKeyupListener)}ngDoCheck(){this.ngControl&&(this.updateErrorState(),null!==this.ngControl.disabled&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){e!==this.focused&&(this.focused=e,this.stateChanges.next())}_onInput(){}_dirtyCheckNativeValue(){const e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){const e=this._getPlaceholder();if(e!==this._previousPlaceholder){const t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){R.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!(this._isNeverEmpty()||this._elementRef.nativeElement.value||this._isBadInput()||this.autofilled)}get shouldLabelFloat(){if(this._isNativeSelect){const e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}return this.focused||!this.empty}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){const e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}static#e=this.\u0275fac=function(t){return new(t||n)(s.rXU(s.aKT),s.rXU(d.OD),s.rXU(_.vO,10),s.rXU(_.cV,8),s.rXU(_.j4,8),s.rXU(g.es),s.rXU(H,10),s.rXU(A),s.rXU(s.SKi),s.rXU(p.xb,8))};static#t=this.\u0275dir=s.FsC({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:18,hostBindings:function(t,i){1&t&&s.bIt("focus",function(){return i._focusChanged(!0)})("blur",function(){return i._focusChanged(!1)})("input",function(){return i._onInput()}),2&t&&(s.Mr5("id",i.id)("disabled",i.disabled)("required",i.required),s.BMQ("name",i.name||null)("readonly",i.readonly&&!i._isNativeSelect||null)("aria-invalid",i.empty&&i.required?null:i.errorState)("aria-required",i.required)("id",i.id),s.AVh("mat-input-server",i._isServer)("mat-mdc-form-field-textarea-control",i._isInFormField&&i._isTextarea)("mat-mdc-form-field-input-control",i._isInFormField)("mdc-text-field__input",i._isInFormField)("mat-mdc-native-select-inline",i._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly"},exportAs:["matInput"],standalone:!0,features:[s.Jv_([{provide:p.qT,useExisting:n}]),s.OA$]})}return n})(),S=(()=>{class n{static#e=this.\u0275fac=function(t){return new(t||n)};static#t=this.\u0275mod=s.$C({type:n});static#i=this.\u0275inj=s.G2t({imports:[g.yE,p.RG,p.RG,w,g.yE]})}return n})()}}]);