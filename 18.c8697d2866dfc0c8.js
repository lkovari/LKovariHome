"use strict";(self.webpackChunkLKovariHome=self.webpackChunkLKovariHome||[]).push([[18],{6018:(ue,y,s)=>{s.r(y),s.d(y,{PlaygroundModule:()=>ae});var d=s(2236),e=s(9212),k=s(1462),x=s(2296),w=s(617),Z=s(1274),g=s(2651),f=s(7509),A=s(74),z=s(7812),M=s(9011);const I=["sidenav"];let P=(()=>{class r{constructor(t,o){this.router=t,this.mediaObserver=o}ngOnInit(){"/"===this.router.url&&this.router.navigate(["/layout-pages/home"])}initializeSideNav(){this.mediaObserver.isActive("xs")?this.sidenav.close():this.sidenav.open()}isScreenXs(){return this.mediaObserver.isActive("xs")}ngAfterViewInit(){setTimeout(()=>{this.initializeSideNav()})}onSidenavToggle(){this.sidenav.toggle(),console.log(">>>>>>> sidenav "+this.sidenav.opened)}static#e=this.\u0275fac=function(o){return new(o||r)(e.Y36(d.F0),e.Y36(k.u0))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-playground-layout"]],viewQuery:function(o,n){if(1&o&&e.Gf(I,5),2&o){let a;e.iGM(a=e.CRH())&&(n.sidenav=a.first)}},decls:15,vars:2,consts:[[1,"layout-content"],["color","primary",1,"toolbar-style"],["fxShow","true","fxHide.gt-xs",""],["mat-icon-button","",3,"click"],["autosize",""],["role","navigation",1,"mat-elevation-z10",3,"mode","opened"],["sidenav",""],[3,"sidenavClose"]],template:function(o,n){if(1&o){const a=e.EpF();e.TgZ(0,"div",0)(1,"app-layout-content")(2,"mat-toolbar",1)(3,"div",2)(4,"button",3),e.NdJ("click",function(){return n.onSidenavToggle()}),e.TgZ(5,"mat-icon"),e._uU(6,"menu"),e.qZA()()(),e._UZ(7,"app-header"),e.qZA(),e.TgZ(8,"mat-sidenav-container",4)(9,"mat-sidenav",5,6)(11,"app-sidenav-list",7),e.NdJ("sidenavClose",function(){e.CHM(a);const C=e.MAs(10);return e.KtG(C.close())}),e.qZA()(),e.TgZ(12,"mat-sidenav-content")(13,"main"),e._UZ(14,"router-outlet"),e.qZA()()()()()}2&o&&(e.xp6(9),e.Q6J("mode",n.isScreenXs()?"over":"side")("opened",!n.isScreenXs()))},dependencies:[d.lC,x.RK,w.Hw,Z.Ye,g.JX,g.TM,g.Rh,f.b8,A.G,z.z,M.k],styles:[".layout-content[_ngcontent-%COMP%]{height:calc(100% - 64px)}.layout-content[_ngcontent-%COMP%]   mat-sidenav-container[_ngcontent-%COMP%], .layout-content[_ngcontent-%COMP%]   mat-sidenav-content[_ngcontent-%COMP%], .layout-content[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]{height:100%}.layout-content[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]{width:250px}.layout-content[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{padding:10px}.layout-content[_ngcontent-%COMP%]   .toolbar-style[_ngcontent-%COMP%]{width:100%}"]})}return r})();var i=s(6223),m=function(r){return r[r.SINGLE=0]="SINGLE",r[r.MULTI=1]="MULTI",r}(m||{}),_=s(9621);class u{static oneItemCheckRequiredValidator(l){const t=l;let o=0;for(;o<t.length;o++){let a=t.at(o).get("selected");if(a&&a?.dirty&&a.value)return null}return{invalidForm:{valid:!1,message:"One row selection is required."}}}}var h=s(6814);const F=r=>({"checklist-item-selected":r}),T=r=>({"checklist-item-disabled":r}),N=r=>({"checklist-item-highlight":r});function O(r,l){if(1&r){const t=e.EpF();e.TgZ(0,"li",3),e.NdJ("click",function(){const a=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.onChecklistItemClick(a))}),e.TgZ(1,"div",4),e.NdJ("mouseenter",function(){const a=e.CHM(t).$index,c=e.oxw();return e.KtG(c.hoverIndex=a)})("mouseleave",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.hoverIndex=null)}),e.TgZ(2,"div",5),e._uU(3),e.qZA(),e._UZ(4,"input",6),e.qZA()()}if(2&r){const t=l.$implicit,o=l.$index,n=e.oxw();e.s9C("tabIndex",o),e.s9C("id","lilabel"+o),e.Q6J("ngClass",e.VKq(9,F,n.needToShowNormalItems(n.selectNormal,t))),e.xp6(1),e.s9C("id","label"+o),e.Q6J("ngClass",e.VKq(11,T,n.disabled||t.value.disabled))("ngClass",e.VKq(13,N,n.hoverIndex===o))("formGroupName",o),e.xp6(2),e.hij(" ",t.value.label," "),e.xp6(1),e.s9C("id","itemCheckBox"+o)}}function L(r,l){if(1&r&&(e.TgZ(0,"span",7),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.hij(" ",null==t.getCheckListFormArray().errors?null:t.getCheckListFormArray().errors.invalidForm.message," ")}}const U={provide:i.JU,useExisting:(0,e.Gpc)(()=>v),multi:!0};let v=(()=>{class r{set checklistItems(t){this._values=t,this._values.forEach(o=>{this.addChecklistItem(o)})}get checkListItems(){return this._values}set selectionMode(t){this._selectionMode=t,this.getCheckListFormArray()&&this.clearSelection()}get selectionMode(){return this._selectionMode}set selectNormal(t){this._selectNormal=t}get selectNormal(){return this._selectNormal}constructor(t){this.formGroupDirective=t,this.formBuilder=(0,e.f3M)(i.qu),this.showErrorInside=!1,this.disabled=!1,this._selectNormal=!1,this.required=!1,this.onClick=new e.vpe,this.isDisabled=!1,this.onModelChange=()=>{},this.onModelTouched=()=>{}}ngOnInit(){this.mainForm||this.createInternalNestedForm(),this.parentForm=this.formGroupDirective.control,console.log("!=> Get the parent form with: this.parentForm = this.formGroupDirective.control as FormGroup;"),this.getCheckListFormArray().controls.length<1&&this._values.forEach(t=>{this.addChecklistItem(t)}),this.mainForm.statusChanges.subscribe(t=>{console.log("mainForm status ",t)}),this.getCheckListFormArray().statusChanges.subscribe(t=>{console.log("CheckListFormArray Status "+t)}),this.getCheckListFormArray().valueChanges.subscribe(t=>{console.log("CheckListFormArray Value "+t)})}ngOnChanges(t){if(t.elementRef&&t.elementRef.currentValue&&this.formGroupDirective.control){this.parentForm=this.formGroupDirective.control,console.log("!=> Get the parent form with: this.parentForm = this.formGroupDirective.control as FormGroup;");let o=this.elementRef.nativeElement.getAttribute("formGroupName");console.log("!=> Get the nested formGroup of the parent form with: let formGroupName = this.elementRef.nativeElement.getAttribute('formGroupName');"),this.parentForm.setControl(o,this.mainForm.controls.checkListFormArray),console.log("!=> Set the parent form formGroup field (which is nested) with: this.parentForm.setControl(formGroupName, this.mainForm.controls['checkListFormArray']);")}}ngAfterViewInit(){this.setupValidatorsDinamically()}createInternalNestedForm(){this.mainForm=this.formBuilder.group({checkListFormArray:this.formBuilder.array([],[u.oneItemCheckRequiredValidator])})}hasNormalValue(t){let o=!1;return t instanceof i.cw&&(o=!!t.get("normal")),o}getNormalValue(t){let o=!1;if(t instanceof i.cw){const n=t;o=n.get("normal")&&n.get("normal")?.value}return o}needToShowNormalItems(t,o){return!(!t||!this.hasNormalValue(o))&&this.getNormalValue(o)}clearSelection(){this.getCheckListFormArray().controls.forEach(t=>{t.get("selected")?.patchValue(!1)}),this.onModelChange(this.getCheckListFormArray().value),this.onModelTouched()}createChecklistItem(t){const o=this.formBuilder.group({id:[-1,[i.kI.required]],label:["",[i.kI.required]],value:[void 0],selected:this.formBuilder.control({value:!1,disabled:this.disabled}),normal:[!1]});return t&&o.setValue({id:t.id,label:t.label,value:t.value,selected:t.selected,normal:t.normal}),o}addChecklistItem(t){this.mainForm||this.createInternalNestedForm(),this.getCheckListFormArray().push(this.createChecklistItem(t))}trackById(t,o){return o.value.id}onChecklistItemClick(t){this.selectListItem(t),this.onClick.emit(this.mainForm.controls.checkListFormArray)}writeValue(t){this.getCheckListFormArray()?.patchValue(t),this._values=t}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t}unselectOtherItems(t){this.getCheckListFormArray().controls.forEach(o=>{const n=o;n.value.id!==t.value.id&&n.get("selected")?.value&&n.get("selected")?.patchValue(!1)}),this.onModelTouched(),this.onModelChange(this.getCheckListFormArray().value)}setupValidatorsDinamically(){this.required?this.getCheckListFormArray().hasValidator(u.oneItemCheckRequiredValidator)||this.getCheckListFormArray().addValidators(u.oneItemCheckRequiredValidator):this.getCheckListFormArray().hasValidator(u.oneItemCheckRequiredValidator)&&this.getCheckListFormArray().removeValidators(u.oneItemCheckRequiredValidator),this.getCheckListFormArray().updateValueAndValidity()}setAllItemsSelection(t){this.getCheckListFormArray().controls.forEach(o=>{const n=o;n.get("selected")?.patchValue(t),n.markAsTouched(),n.markAsDirty()}),this.onModelTouched(),this.onModelChange(this.getCheckListFormArray().value)}setAllNormalItemsSelection(t){this.getCheckListFormArray()&&(this.getCheckListFormArray().controls.forEach(o=>{const n=o;if(t){const a=n.get("normal")?.value;a&&n.get("selected")?.patchValue(a)}else n.get("normal")?.value&&n.get("selected")?.patchValue(!1);n.markAsTouched(),n.markAsDirty()}),this.onModelTouched(),this.onModelChange(this.getCheckListFormArray().value))}selectListItem(t){if(!t)return;const o=t;if(o){const n=o.get("selected")?.value;this._selectionMode===m.MULTI?o.get("selected")?.patchValue(!n):(o.get("selected")?.patchValue(!n),this.unselectOtherItems(o)),o.get("selected")?.markAsTouched(),o.get("selected")?.markAsDirty(),this.onModelTouched(),this.onModelChange(this.getCheckListFormArray().value),o.updateValueAndValidity()}}getCheckListFormArray(){return this.mainForm.get("checkListFormArray")}getSelectedItems(){let t=new Array;return this.getCheckListFormArray().controls.forEach(o=>{const n=o;n.get("selected")?.value&&t.push(n.value)}),t}unselectAllItems(){this.setAllItemsSelection(!1)}selectAllItems(){this.setAllItemsSelection(!0)}selectAllNormal(){this.setAllNormalItemsSelection(!0)}unselectAllNormal(){this.setAllNormalItemsSelection(!1)}static#e=this.\u0275fac=function(o){return new(o||r)(e.Y36(i.sg))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-checklist"]],inputs:{elementRef:"elementRef",showErrorInside:"showErrorInside",checklistItems:"checklistItems",selectionMode:"selectionMode",style:"style",styleClass:"styleClass",listStyle:"listStyle",listStyleClass:"listStyleClass",disabled:"disabled",selectNormal:"selectNormal",required:"required"},outputs:{onClick:"onClick"},features:[e._Bn([U]),e.TTD],decls:5,vars:2,consts:[[1,"checklist-layout",3,"formGroup"],["formArrayName","checkListFormArray",2,"list-style-type","none","min-width","17rem","max-width","50rem"],["class","show-invalid-feedback"],[3,"ngClass","tabIndex","id","click"],[1,"checklist-item-container",3,"id","ngClass","formGroupName","mouseenter","mouseleave"],[1,"checklist-label-item"],["type","checkbox","formControlName","selected",1,"checklist-checkmark-item",3,"id"],[1,"show-invalid-feedback"],[3,"ngClass","tabIndex","id"]],template:function(o,n){1&o&&(e.TgZ(0,"form",0)(1,"ul",1),e.SjG(2,O,5,15,"li",8,n.trackById),e.YNc(4,L,2,1,"span",2),e.qZA()()),2&o&&(e.Q6J("formGroup",n.mainForm),e.xp6(2),e.wJu(n.getCheckListFormArray().controls),e.xp6(2),e.um2(4,n.showErrorInside&&n.getCheckListFormArray().hasError("required")&&n.getCheckListFormArray().errors.invalidForm?4:-1))},dependencies:[h.mk,i._Y,i.Wl,i.JJ,i.JL,i.sg,i.u,i.x0,i.CE],styles:[".checklist-layout[_ngcontent-%COMP%]{border:solid blue 1px;border-radius:8px;cursor:pointer;padding:1rem}.checklist-layout[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{margin:0;padding:0}.checklist-layout[_ngcontent-%COMP%]   .checklist-item-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:center;align-content:flex-start;font-size:15px;line-height:1.8rem}.checklist-layout[_ngcontent-%COMP%]   .checklist-item-container[_ngcontent-%COMP%]   .checklist-label-item[_ngcontent-%COMP%]{order:0;flex-grow:1;flex-shrink:1;flex-basis:auto;align-self:center;width:95%}.checklist-layout[_ngcontent-%COMP%]   .checklist-item-container[_ngcontent-%COMP%]   .checklist-checkmark-item[_ngcontent-%COMP%]{order:0;flex-grow:0;flex-shrink:1;flex-basis:auto;align-self:center;width:5%}.checklist-layout[_ngcontent-%COMP%]   .checklist-item-highlight[_ngcontent-%COMP%]{display:flex;align-items:flex-start;background-color:#d9edf7;color:#00f;border:1px solid var(--primary-color)}.checklist-layout[_ngcontent-%COMP%]   .checklist-item-selected[_ngcontent-%COMP%]{background-color:#b4f0b4}.checklist-layout[_ngcontent-%COMP%]   .show-invalid-feedback[_ngcontent-%COMP%]{display:block;width:100%;margin-top:.25rem;font-size:80%;color:#dc3545}.checklist-layout[_ngcontent-%COMP%]   .checklist-item-disabled[_ngcontent-%COMP%]{opacity:.4}.checklist-layout[_ngcontent-%COMP%]   .checkbox-item[_ngcontent-%COMP%]{flex-grow:.8;flex-shrink:1;flex-basis:content;align-self:center}"]})}return r})();const q=["checkListRef"],G=["checkListGroup"];function S(r,l){if(1&r&&(e.TgZ(0,"span",28),e._uU(1),e.qZA()),2&r){const t=e.oxw();let o;e.xp6(1),e.hij(" ",null==(o=t.exampleForm.get("checkList"))||null==o.errors?null:o.errors.invalidForm.message," ")}}let V=(()=>{class r{constructor(){this.formBuilder=(0,e.f3M)(i.qu),this.checklistItems=[{id:1,label:"Alistair McIntyre as bone breaker",selected:!1,value:null,normal:!1},{id:2,label:"Erika Gusbakothy as brain miner",selected:!1,value:null,normal:!1},{id:3,label:"Laszlo Kovari as a software developer",selected:!1,value:null,normal:!0},{id:4,label:"Bor New as a milk machine",selected:!1,value:null,normal:!1},{id:5,label:"Zodekap Edenwer as a dilettant",selected:!1,value:null,normal:!1},{id:6,label:"Vanadis 10 faimous knife steel material",selected:!1,value:null,normal:!0},{id:7,label:"Vanadis 10 This is a list item, where the label's text is longer than what used in the most common cases. This is the demonstration of how the test fit into two rows, and how aligned the icon.",selected:!1,value:null,normal:!1},{id:8,label:"M390 is the best knife steel material",selected:!1,value:null,normal:!0}],this.selectNormal=!1,this.selectionMode=m.SINGLE,this.MULTISELECT=m.MULTI,this.SINGLESELECT=m.SINGLE}ngOnInit(){this.exampleForm=this.formBuilder.group({selectionMode:this.formBuilder.control({value:m.SINGLE,disabled:!1}),selectNormal:this.formBuilder.control({value:!1,disabled:!1}),checkList:this.formBuilder.control([i.kI.required])}),this.githubLogoPath="assets/logos/GitHub-Mark-32px.png",this.exampleForm.get("selectionMode")?.valueChanges.subscribe(t=>{this.selectionMode=t,this.exampleForm.get("selectNormal")?.patchValue(!1)}),this.exampleForm.get("selectNormal")?.valueChanges.subscribe(t=>{this.selectNormal=t}),this.exampleForm.statusChanges.subscribe(t=>{console.log("ExampleForm statusChanges "+t)}),this.exampleForm.get("checkList")?.statusChanges.subscribe(t=>{console.log("checkList component statusChanges "+t),console.log("checkList Errors ",this.exampleForm.get("checkList")?.errors)})}onSubmit(t){console.log(t)}showCheckedItems(){return this.checkListGroup.getSelectedItems()}onSelectAll(){this.checkListGroup.selectAllItems()}onUnselectAll(){this.checkListGroup.unselectAllItems(),this.selectNormal=!1}extractSelectionMode(t){return t.value}onClick(t){console.log(t.value)}static#e=this.\u0275fac=function(o){return new(o||r)};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-nested-example"]],viewQuery:function(o,n){if(1&o&&(e.Gf(q,7,e.SBq),e.Gf(G,7)),2&o){let a;e.iGM(a=e.CRH())&&(n.checkListReference=a.first),e.iGM(a=e.CRH())&&(n.checkListGroup=a.first)}},decls:63,vars:17,consts:[[1,"nested-layout"],[1,"sub-topic"],[1,"top-gap"],[1,"text-primary"],["href","https://github.com/lkovari/LKovariHome/tree/master/src/app/playground/components/nested-example",1,"horizontal-gap-left","horizontal-gap-right"],["width","16","height","16",3,"src"],["href","https://github.com/lkovari/LKovariHome/tree/master/src/app/shared/components/checklist",1,"horizontal-gap-left","horizontal-gap-right"],[1,"text-warning"],["href","https://github.com/lkovari/LKovariHome/tree/master/src/app/shared/components/checklist/checklist-validators.ts",1,"horizontal-gap-left","horizontal-gap-right"],["novalidate","","autocomplete","off",1,"sub-topic",3,"formGroup","ngSubmit"],[1,"horizontal-gap-right"],["for","multiselect",1,"form-check-inline"],["id","multiselect","type","radio","formControlName","selectionMode",1,"form-check-input","horizontal-gap-left",3,"value"],["for","singleselect",1,"form-check-inline"],["id","singleselect","type","radio","formControlName","selectionMode",1,"form-check-input","horizontal-gap-left","horizontal-gap-right",3,"value"],[1,""],["for","withDebounceChb horizontal-gap-right"],["id","selectNormal","type","checkbox","formControlName","selectNormal",1,"horizontal-gap-left"],[1,"horizontal-gap-left"],[1,"form-group","row","mb-2"],["formGroupName","checkList",3,"checklistItems","elementRef","selectionMode","selectNormal","required","onClick"],["checkListGroup","","checkListRef",""],["class","show-invalid-feedback"],[1,"buttons-area"],["type","button",1,"btn","btn-primary",3,"disabled","click"],["type","button",1,"btn","btn-primary","horizontal-gap-left",3,"click"],[1,"sub-topic","text-primary"],[1,"text-secondary"],[1,"show-invalid-feedback"]],template:function(o,n){if(1&o&&(e.TgZ(0,"div",0)(1,"div"),e._uU(2," This page is a "),e.TgZ(3,"b"),e._uU(4,"playground"),e.qZA(),e._uU(5,", I show on this page Angular v2+ source code snippets, what I learned at last or just which interested in, for me. "),e.qZA(),e.TgZ(6,"div",1)(7,"b"),e._uU(8,"Act #2"),e.qZA(),e.TgZ(9,"div",2)(10,"label",3)(11,"a",4),e._UZ(12,"img",5),e.qZA(),e._uU(13," Example of a reactive CheckListComponent, where one list item is a form (FormGroup) and where the list is a FormArray. "),e.qZA()()(),e.TgZ(14,"div",1)(15,"label")(16,"b"),e._uU(17,"The "),e.TgZ(18,"a",6),e._UZ(19,"img",5),e.qZA(),e._uU(20," app-checklist Component is "),e.qZA(),e.TgZ(21,"span",7),e._uU(22,"UNDER CONSTRUCTION!"),e.qZA()(),e.TgZ(23,"p"),e._uU(24," (In the future I will implement to use this checklist component as the Yes-no questions sheet, the normal answers will pass and the component will validate the user answers based on the predefined normal values.) "),e.qZA(),e.TgZ(25,"p"),e._uU(26," Current Validation rule(s): "),e.TgZ(27,"a",8),e._UZ(28,"img",5),e._uU(29," one item selection is required! "),e.qZA()(),e.TgZ(30,"form",9),e.NdJ("ngSubmit",function(){return n.onSubmit(n.exampleForm)}),e.TgZ(31,"div")(32,"label",10),e._uU(33,"Selection mode"),e.qZA(),e.TgZ(34,"label",11),e._UZ(35,"input",12),e._uU(36,"Multiple "),e.qZA(),e.TgZ(37,"label",13),e._UZ(38,"input",14),e._uU(39,"Single "),e.qZA(),e._uU(40),e.qZA(),e.TgZ(41,"div",15)(42,"label",16),e._uU(43,"Highlight items which marked Normal = true"),e.qZA(),e._UZ(44,"input",17),e.TgZ(45,"label",18),e._uU(46,"(3rd. 6th. 8th. items)"),e.qZA()(),e.TgZ(47,"div",19)(48,"app-checklist",20,21),e.NdJ("onClick",function(c){return n.onClick(c)}),e.qZA(),e.YNc(51,S,2,1,"span",22),e.qZA()(),e.TgZ(52,"div",23)(53,"button",24),e.NdJ("click",function(){return n.onSelectAll()}),e._uU(54,"Select All"),e.qZA(),e.TgZ(55,"button",25),e.NdJ("click",function(){return n.onUnselectAll()}),e._uU(56,"Unselect All"),e.qZA()(),e.TgZ(57,"div")(58,"label",26),e._uU(59,"Selected "),e.TgZ(60,"span",27),e._uU(61),e.ALo(62,"json"),e.qZA()()()()()),2&o){let a;e.xp6(12),e.Q6J("src",n.githubLogoPath,e.LSH),e.xp6(7),e.Q6J("src",n.githubLogoPath,e.LSH),e.xp6(9),e.Q6J("src",n.githubLogoPath,e.LSH),e.xp6(2),e.Q6J("formGroup",n.exampleForm),e.xp6(5),e.Q6J("value",n.MULTISELECT),e.xp6(3),e.Q6J("value",n.SINGLESELECT),e.xp6(2),e.hij("(Single: SelectionMode.SINGLE: ",n.SINGLESELECT,") "),e.xp6(8),e.Q6J("checklistItems",n.checklistItems)("elementRef",n.checkListReference)("selectionMode",n.selectionMode)("selectNormal",n.selectNormal)("required",!0),e.xp6(3),e.um2(51,null!=(a=n.exampleForm.get("checkList"))&&a.dirty&&null!=(a=n.exampleForm.get("checkList"))&&a.hasError("required")&&null!=(a=n.exampleForm.get("checkList"))&&a.errors.invalidForm?51:-1),e.xp6(2),e.Q6J("disabled",n.selectionMode===n.SINGLESELECT),e.xp6(8),e.Oqu(e.lcZ(62,15,n.showCheckedItems()))}},dependencies:[i._Y,i.Fj,i.Wl,i._,i.JJ,i.JL,i.sg,i.u,i.x0,_.V,v,h.Ts],styles:[".nested-layout[_ngcontent-%COMP%]   .sub-topic[_ngcontent-%COMP%]{padding:1Rem}.nested-layout[_ngcontent-%COMP%]   .horizontal-gap-right[_ngcontent-%COMP%]{padding-right:.5rem}.nested-layout[_ngcontent-%COMP%]   .horizontal-gap-left[_ngcontent-%COMP%]{padding-left:.5rem}.nested-layout[_ngcontent-%COMP%]   .top-gap[_ngcontent-%COMP%]{padding-top:1Rem}.nested-layout[_ngcontent-%COMP%]   .custom-text-style[_ngcontent-%COMP%]{width:100%;resize:none}.nested-layout[_ngcontent-%COMP%]   .show-invalid-feedback[_ngcontent-%COMP%]{display:block;width:100%;margin-top:.25rem;font-size:80%;color:#dc3545}"]})}return r})(),E=(()=>{class r{constructor(){this.formBuilder=(0,e.f3M)(i.qu)}ngOnInit(){this.personForm=this.formBuilder.group({name:["",i.kI.required],age:[""],phone:["",i.kI.required]})}getForm(){return this.personForm}static#e=this.\u0275fac=function(o){return new(o||r)};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-person"]],inputs:{index:"index",lastPageIndex:"lastPageIndex"},decls:18,vars:1,consts:[[1,"person-layout"],[1,"form-group",3,"formGroup"],[1,"form-control-gap"],["for","name"],[1,"text-danger"],["type","text","id","name","formControlName","name",1,"form-control"],["for","age"],["type","number","id","age","formControlName","age",1,"form-control"],["for","phone"],["type","text","id","phone","formControlName","phone",1,"form-control"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"form",1)(2,"div",2)(3,"label",3),e._uU(4,"Name:"),e.TgZ(5,"span",4),e._uU(6,"*"),e.qZA()(),e._UZ(7,"input",5),e.qZA(),e.TgZ(8,"div",2)(9,"label",6),e._uU(10,"Age:"),e.qZA(),e._UZ(11,"input",7),e.qZA(),e.TgZ(12,"div",2)(13,"label",8),e._uU(14,"Phone:"),e.TgZ(15,"span",4),e._uU(16,"*"),e.qZA()(),e._UZ(17,"input",9),e.qZA()()()),2&o&&(e.xp6(1),e.Q6J("formGroup",n.personForm))},dependencies:[i._Y,i.Fj,i.wV,i.JJ,i.JL,i.sg,i.u],styles:[".person-layout[_ngcontent-%COMP%]{margin:2rem}.person-layout[_ngcontent-%COMP%]   .form-control-gap[_ngcontent-%COMP%]{margin:.5rem 0}"]})}return r})();class p{constructor(l,t,o,n,a,c,C="",se,le,ce,me,de){this.lastFormStatus="INVALID",this.index=l,this.order=t,this.title=o,this.componentName=n,this.componentType=a,this.componentRef=c,this.description=C,this.nextIndex=se,this.nextPageRuleDescriptor=de,this.allowBackPage=le,this.allowNextPage=ce,this.data=me}}let D=(()=>{class r{constructor(){this.formBuilder=(0,e.f3M)(i.qu)}ngOnInit(){this.addressForm=this.formBuilder.group({street:["",i.kI.required],city:["",i.kI.required],state:["",i.kI.required],zip:["",[i.kI.required,i.kI.pattern("[0-9]{5}")]]})}getForm(){return this.addressForm}static#e=this.\u0275fac=function(o){return new(o||r)};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-address"]],inputs:{index:"index",lastPageIndex:"lastPageIndex"},decls:26,vars:1,consts:[[1,"address-layout"],[1,"form-group",3,"formGroup"],[1,"form-control-gap"],["for","street"],[1,"text-danger"],["type","text","id","street","formControlName","street",1,"form-control"],["for","city"],["type","text","id","city","formControlName","city",1,"form-control"],["for","state"],["type","text","id","state","formControlName","state",1,"form-control"],["for","zip"],["type","text","id","zip","formControlName","zip",1,"form-control"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"form",1)(2,"div",2)(3,"label",3),e._uU(4,"Street:"),e.TgZ(5,"span",4),e._uU(6,"*"),e.qZA()(),e._UZ(7,"input",5),e.qZA(),e.TgZ(8,"div",2)(9,"label",6),e._uU(10,"City:"),e.TgZ(11,"span",4),e._uU(12,"*"),e.qZA()(),e._UZ(13,"input",7),e.qZA(),e.TgZ(14,"div",2)(15,"label",8),e._uU(16,"State:"),e.TgZ(17,"span",4),e._uU(18,"*"),e.qZA()(),e._UZ(19,"input",9),e.qZA(),e.TgZ(20,"div",2)(21,"label",10),e._uU(22,"Zip:"),e.TgZ(23,"span",4),e._uU(24,"*"),e.qZA()(),e._UZ(25,"input",11),e.qZA()()()),2&o&&(e.xp6(1),e.Q6J("formGroup",n.addressForm))},dependencies:[i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],styles:[".address-layout[_ngcontent-%COMP%]{margin:2rem}.address-layout[_ngcontent-%COMP%]   .form-control-gap[_ngcontent-%COMP%]{margin:.5rem 0}"]})}return r})(),J=(()=>{class r{constructor(){this.formBuilder=(0,e.f3M)(i.qu)}ngOnInit(){this.companyForm=this.formBuilder.group({name:["",i.kI.required],phone:["",i.kI.required],description:[""]})}getForm(){return this.companyForm}static#e=this.\u0275fac=function(o){return new(o||r)};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-company"]],inputs:{index:"index",lastPageIndex:"lastPageIndex"},decls:18,vars:1,consts:[[1,"company-layout"],[1,"form-group",3,"formGroup"],[1,"form-control-gap"],["for","name"],[1,"text-danger"],["type","text","id","name","formControlName","name",1,"form-control"],["for","phone"],["type","text","id","phone","formControlName","phone",1,"form-control"],["for","description"],["type","text","id","description","formControlName","description",1,"form-control"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"form",1)(2,"div",2)(3,"label",3),e._uU(4,"Company Name:"),e.TgZ(5,"span",4),e._uU(6,"*"),e.qZA()(),e._UZ(7,"input",5),e.qZA(),e.TgZ(8,"div",2)(9,"label",6),e._uU(10,"Phone:"),e.TgZ(11,"span",4),e._uU(12,"*"),e.qZA()(),e._UZ(13,"input",7),e.qZA(),e.TgZ(14,"div",2)(15,"label",8),e._uU(16,"Description:"),e.qZA(),e._UZ(17,"input",9),e.qZA()()()),2&o&&(e.xp6(1),e.Q6J("formGroup",n.companyForm))},dependencies:[i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],styles:[".company-layout[_ngcontent-%COMP%]{margin:2rem}.company-layout[_ngcontent-%COMP%]   .form-control-gap[_ngcontent-%COMP%]{margin:.5rem 0}"]})}return r})(),R=(()=>{class r{constructor(){this.formBuilder=(0,e.f3M)(i.qu)}ngOnInit(){this.miscellaneousForm=this.formBuilder.group({occupation:[""],religion:[""],hobbie:[""]})}getForm(){return this.miscellaneousForm}static#e=this.\u0275fac=function(o){return new(o||r)};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-miscellaneous"]],inputs:{index:"index",lastPageIndex:"lastPageIndex"},decls:14,vars:1,consts:[[1,"miscellaneous-layout"],[1,"form-group",3,"formGroup"],[1,"form-control-gap"],["for","occupation"],["type","text","id","occupation","formControlName","occupation",1,"form-control"],["for","religion"],["type","text","id","religion","formControlName","religion",1,"form-control"],["for","hobbie"],["type","text","id","hobbie","formControlName","hobbie",1,"form-control"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"form",1)(2,"div",2)(3,"label",3),e._uU(4,"Occupation:"),e.qZA(),e._UZ(5,"input",4),e.qZA(),e.TgZ(6,"div",2)(7,"label",5),e._uU(8,"Religion:"),e.qZA(),e._UZ(9,"input",6),e.qZA(),e.TgZ(10,"div",2)(11,"label",7),e._uU(12,"Hobbie:"),e.qZA(),e._UZ(13,"input",8),e.qZA()()()),2&o&&(e.xp6(1),e.Q6J("formGroup",n.miscellaneousForm))},dependencies:[i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],styles:[".miscellaneous-layout[_ngcontent-%COMP%]{margin:2rem}.miscellaneous-layout[_ngcontent-%COMP%]   .form-control-gap[_ngcontent-%COMP%]{margin:.5rem 0}"]})}return r})(),b=(()=>{class r{constructor(t){this.viewContainer=t}static#e=this.\u0275fac=function(o){return new(o||r)(e.Y36(e.s_b))};static#t=this.\u0275dir=e.lG2({type:r,selectors:[["","dynamicComponentHost",""]]})}return r})();var H=s(8645),B=s(9773);const Q=(r,l)=>l.index;function W(r,l){if(1&r&&(e.TgZ(0,"div",2),e._uU(1),e.qZA()),2&r){const t=l.$implicit,o=l.$index,n=e.oxw();e.Q6J("ngClass",o===n.selectedIndex?"select-title":"deselect-title"),e.xp6(1),e.hij(" ",t.title," ")}}let j=(()=>{class r{constructor(){this.selectedIndex=0}static#e=this.\u0275fac=function(o){return new(o||r)};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-wizard-progress"]],inputs:{wizardPages:"wizardPages",selectedIndex:"selectedIndex"},decls:4,vars:0,consts:[[1,"wizard-progress-layout"],[1,"wizard-progress-content","d-flex","flex-row","justify-content-around"],[3,"ngClass"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"div",1),e.SjG(2,W,2,2,"div",2,Q),e.qZA()()),2&o&&(e.xp6(2),e.wJu(n.wizardPages))},dependencies:[h.mk,f.oO],styles:[".wizard-progress-layout[_ngcontent-%COMP%]{margin:2rem;height:3rem;background-color:#e0f1fc;border:var(--bs-border-width) solid darkgray;border-radius:var(--bs-border-radius)}.wizard-progress-layout[_ngcontent-%COMP%]   .wizard-progress-content[_ngcontent-%COMP%]{margin:.8rem}.wizard-progress-layout[_ngcontent-%COMP%]   .wizard-progress-content[_ngcontent-%COMP%]   .select-title[_ngcontent-%COMP%]{color:#00f;font-weight:700}.wizard-progress-layout[_ngcontent-%COMP%]   .wizard-progress-content[_ngcontent-%COMP%]   .deselect-title[_ngcontent-%COMP%]{color:#000;font-weight:400}"]})}return r})();function K(r,l){}function Y(r,l){if(1&r){const t=e.EpF();e.TgZ(0,"button",8),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.nextClicked())}),e._uU(1,"Next "),e.qZA()}if(2&r){const t=e.oxw();e.Q6J("disabled",t.currentIndex>=t.wizardData.wizardPages.length-1||!t.isFormValid)}}function X(r,l){if(1&r){const t=e.EpF();e.TgZ(0,"button",8),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.saveClicked())}),e._uU(1,"Save "),e.qZA()}if(2&r){const t=e.oxw();e.Q6J("disabled",!t.isFormValid)}}let $=(()=>{class r{constructor(){this.viewContainerRef=(0,e.f3M)(e.s_b),this.componentHeight=null,this.currentIndex=0,this.isFormValid=!1}ngOnInit(){this.setupComponentDynamically()}ngAfterContentChecked(){this.setupDataToComponent(),this.setupListeners()}backClicked(){this.currentIndex--,this.setupComponentDynamically()}nextClicked(){this.currentIndex++,this.setupComponentDynamically()}saveClicked(){this.wizardData.wizardPages.forEach(t=>{console.log(`Component : ${t.componentName}.`),console.log(JSON.stringify(t.componentRef.instance.getForm().value))}),console.log("Saved")}setupComponentDynamically(){this.currentWizardPage=this.wizardData.wizardPages[this.currentIndex],this.createComponent(this.currentWizardPage)}setupDataByProperyName(t,o){o.forEach(n=>{t.controls[n.controlName].setValue(n.controlValue.formControlValue)})}createComponent(t){this.dynamicComponentHost.viewContainer.clear();const o=this.dynamicComponentHost.viewContainer.createComponent(t.componentType);this.wizardData.wizardPages[this.currentIndex].componentRef=o,o.hostView.detectChanges()}setupDataToComponent(){const t=this.wizardData.wizardPages[this.currentIndex].componentRef.instance.getForm();this.setupDataByProperyName(t,this.wizardData.wizardPages[this.currentIndex].data)}setupListeners(){const o=this.wizardData.wizardPages[this.currentIndex].componentRef.instance.getForm(),n=new H.x;o.statusChanges.pipe((0,B.R)(n)).subscribe(a=>{this.isFormValid="VALID"===a,this.wizardData.wizardPages[this.currentIndex].lastFormStatus=a,this.wizardData.wizardPages[this.currentIndex].unsubscribe=n})}ngOnDestroy(){this.wizardData.wizardPages.forEach(t=>{t.unsubscribe&&(t.unsubscribe.next(),t.unsubscribe.complete())})}static#e=this.\u0275fac=function(o){return new(o||r)};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-customizable-wizard"]],viewQuery:function(o,n){if(1&o&&e.Gf(b,7),2&o){let a;e.iGM(a=e.CRH())&&(n.dynamicComponentHost=a.first)}},inputs:{wizardData:"wizardData",componentHeight:"componentHeight"},decls:16,vars:7,consts:[[1,"wizard-layout"],[1,"title-style"],[1,"description-style"],[3,"wizardPages","selectedIndex"],[1,"layout-content",3,"ngStyle"],["dynamicComponentHost",""],[1,"footer-style"],[1,"d-flex","flex-row","justify-content-around"],[1,"btn","btn-primary",3,"disabled","click"],["class","btn btn-primary",3,"disabled"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"form")(2,"div",1),e._uU(3),e.qZA(),e.TgZ(4,"div",2),e._uU(5),e.qZA(),e.TgZ(6,"div"),e._UZ(7,"app-wizard-progress",3),e.qZA(),e.TgZ(8,"div",4),e.YNc(9,K,0,0,"ng-template",5),e.qZA(),e.TgZ(10,"div",6)(11,"div",7)(12,"button",8),e.NdJ("click",function(){return n.backClicked()}),e._uU(13," Back "),e.qZA(),e.YNc(14,Y,2,1,"button",9)(15,X,2,1),e.qZA()()()()),2&o&&(e.xp6(3),e.Oqu(n.wizardData.title),e.xp6(2),e.Oqu(n.wizardData.description),e.xp6(2),e.Q6J("wizardPages",n.wizardData.wizardPages)("selectedIndex",n.currentIndex),e.xp6(1),e.Q6J("ngStyle",n.componentHeight),e.xp6(4),e.Q6J("disabled",n.currentIndex<=0),e.xp6(2),e.um2(14,n.currentIndex<n.wizardData.wizardPages.length-1?14:15))},dependencies:[h.PC,i._Y,i.JL,i.F,f.Zl,j,b],styles:[".wizard-layout[_ngcontent-%COMP%]{display:flex;flex-direction:column;border:solid 1px gray}.wizard-layout[_ngcontent-%COMP%]   .sub-topic[_ngcontent-%COMP%]{padding:1Rem}.wizard-layout[_ngcontent-%COMP%]   .horizontal-gap-right[_ngcontent-%COMP%]{padding-right:.5rem}.wizard-layout[_ngcontent-%COMP%]   .horizontal-gap-left[_ngcontent-%COMP%]{padding-left:.5rem}.wizard-layout[_ngcontent-%COMP%]   .title-style[_ngcontent-%COMP%]{margin:1rem;height:1rem;text-align:center;font-weight:600}.wizard-layout[_ngcontent-%COMP%]   .description-style[_ngcontent-%COMP%]{margin:1rem 2rem;color:#a9a9a9}.wizard-layout[_ngcontent-%COMP%]   .layout-content[_ngcontent-%COMP%]{height:50%}.wizard-layout[_ngcontent-%COMP%]   .footer-style[_ngcontent-%COMP%]{height:3rem}"]})}return r})();const ee=()=>({height:"16.5rem"}),te=[{path:"",component:P,children:[{path:"playground/components/nested-example",component:V},{path:"playground/components/customizable-wizard",component:(()=>{class r{constructor(){this.personFormData=[{controlName:"name",controlValue:{formControlValue:"Jogn Doe"}},{controlName:"age",controlValue:{formControlValue:58}},{controlName:"phone",controlValue:{formControlValue:"9173754729"}}],this.addressFormData=[{controlName:"street",controlValue:{formControlValue:"#7 Elm street"}},{controlName:"city",controlValue:{formControlValue:"Alpharetta"}},{controlName:"state",controlValue:{formControlValue:"Georgia"}},{controlName:"zip",controlValue:{formControlValue:"91737"}}],this.companyFormData=[{controlName:"name",controlValue:{formControlValue:"SISFirst Inc."}},{controlName:"phone",controlValue:{formControlValue:"9172345678"}},{controlName:"description",controlValue:{formControlValue:"Surgical Software Company"}}],this.miscellaneousFormData=[{controlName:"occupation",controlValue:{formControlValue:"Software developer"}},{controlName:"religion",controlValue:{formControlValue:""}},{controlName:"hobbie",controlValue:{formControlValue:"Drumming"}}],this.wizardPages=[new p(0,0,"Person","app-person",E,null,"",1,!0,!0,this.personFormData),new p(1,1,"Address","app-address",D,null,"",2,!0,!0,this.addressFormData),new p(2,2,"Company","app-company",J,null,"",-1,!0,!0,this.companyFormData),new p(3,4,"Miscellaneous","app-miscellaneous",R,null,"",-1,!0,!0,this.miscellaneousFormData)],this.wizardData={title:"Customizable Wizard Component Example",description:"This Wizard create the pre-existing, (and pre-defined) components dynamically on each wizard page. The data model based on the IWizardPage interface (I know the typescript style guid not show capital I as first character of interface name, but this is my bad habit) Each wizard page (IWizardPage) describe the page content for example, component name component ref which dynamically created, rule descriptor (IFormRuleDescriptor) to decide which will be the next page or on the page field the proper values to selected to next page.",wizardPages:this.wizardPages}}ngOnInit(){this.githubLogoPath="assets/logos/GitHub-Mark-32px.png"}static#e=this.\u0275fac=function(o){return new(o||r)};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-customizable-wizard-main"]],decls:20,vars:4,consts:[[1,"wizard-main-layout"],[1,"sub-topic"],[1,"top-gap"],[1,"text-primary"],["href","https://github.com/lkovari/LKovariHome/tree/master/src/app/playground/components/customizable-wizard",1,"horizontal-gap-left","horizontal-gap-right"],["width","16","height","16",3,"src"],[1,"sub-topic","under-construction"],[1,"sub-topic","text-secondary"],[3,"wizardData","componentHeight"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"div"),e._uU(2," This page is a "),e.TgZ(3,"b"),e._uU(4,"playground"),e.qZA(),e._uU(5,", I show on this page Angular v2+ source code snippets, what I learned at last or just which interested in, for me. "),e.qZA(),e.TgZ(6,"div",1)(7,"b"),e._uU(8,"Act #3"),e.qZA(),e.TgZ(9,"div",2)(10,"label",3)(11,"a",4),e._UZ(12,"img",5),e.qZA(),e._uU(13," Example of a Customizable Wizard component which get a data model (IWizardData) and contains the wizard pages in an array where each item is an IWizardPage. Also contains a pre-existing components' name and for each wizard step create the component dynamically and show that. The created components's data based on the IFormControlData where can describe the formControlName and the value. "),e.qZA()()(),e.TgZ(14,"div",6),e._uU(15," This component is under construction! Not an exhaustive solution just focused to the current context. "),e.qZA(),e.TgZ(16,"div",7),e._uU(17," TODO: include dynamic component into container validation mechanism, implement RuleDescriptor, pass data into dynamic components, persist data from dynamic components, optional controlling step back & next. "),e.qZA(),e.TgZ(18,"div"),e._UZ(19,"app-customizable-wizard",8),e.qZA()()),2&o&&(e.xp6(12),e.Q6J("src",n.githubLogoPath,e.LSH),e.xp6(7),e.Q6J("wizardData",n.wizardData)("componentHeight",e.DdM(3,ee)))},dependencies:[_.V,$],styles:[".wizard-main-layout[_ngcontent-%COMP%]   .sub-topic[_ngcontent-%COMP%]{padding:1Rem}.wizard-main-layout[_ngcontent-%COMP%]   .horizontal-gap-right[_ngcontent-%COMP%]{padding-right:.5rem}.wizard-main-layout[_ngcontent-%COMP%]   .horizontal-gap-left[_ngcontent-%COMP%]{padding-left:.5rem}.wizard-main-layout[_ngcontent-%COMP%]   .under-construction[_ngcontent-%COMP%]{padding:1rem 0;font-weight:800;color:coral;text-transform:uppercase}"]})}return r})()}]}];let oe=(()=>{class r{static#e=this.\u0275fac=function(o){return new(o||r)};static#t=this.\u0275mod=e.oAB({type:r});static#o=this.\u0275inj=e.cJS({imports:[d.Bz.forChild(te),d.Bz]})}return r})();var ne=s(2930),re=s(685),ie=s(1447);let ae=(()=>{class r{static#e=this.\u0275fac=function(o){return new(o||r)};static#t=this.\u0275mod=e.oAB({type:r});static#o=this.\u0275inj=e.cJS({imports:[h.ez,i.u5,i.UX,d.Bz,re.q,ie.o9,ne.m,oe]})}return r})()}}]);