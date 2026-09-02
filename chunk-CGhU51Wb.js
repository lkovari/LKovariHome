import {C as Ct,m as mt$1,v as vt,F as Ft$1}from'./chunk-CM5qZkcR.js';import {E as Et}from'./chunk-CT7e90qE.js';import {$ as $e$1,Q as Qe$1,m as me,_ as _e$1,e as et,I as Ie,b as bt}from'./chunk-DghAUK9h.js';import {N as NE,bm as ID,Q as Qc,bn as ED,Z as Zc,v,aH as Cr,bo as l,aR as $o,ar as HD,n as lh,au as eh,R as TD,S as CD,bp as b,d as $t$1,aM as zt,T as Ti$1,Y as YD,z as zc,aN as pT,$ as $p,X as XE,a as Yv,B as Bp,g as uT,J as Jc,aP as mT,i as eD,aw as fy,ai as kp,as as lT,H as Hp,a8 as ch,aZ as KF,A as Qe,O as U,bq as ks,K as Kp,br as m$1,b1 as Q,bs as r0,bt as R,C as ci,ac as $e,aU as ie,ah as Ee,bu as qg,bv as Ug,bh as vg,bw as Mv,bx as Ag,ay as M,P as th,u as uD,y as yD,by as RI,U as Uo,bz as Hn$1,G as Ne$1,bA as os,bB as tn$1,a9 as SE,aa as ru,ab as Gi$1,j as JF,a0 as DT,ae as D,aF as ge$1,a1 as Qu,aT as Pi$1,bC as I,aV as Nt,bD as Oi$1,bE as xi$1,bF as mi,bG as Ai$1,bH as Wt$1,bI as bi,bJ as Si$1,bK as Ht,bL as Ei$1,bM as di,ad as R$1,ag as _r,bN as Bi,ak as a0,aj as s0,al as Gt,ap as Nt$1,bO as sa,at as FE,av as Vi$1,bP as Og,ax as RE,bQ as W,az as ct,aA as re,bR as Ii$1,aE as Eo,aX as at,an as Bt,ao as kt,bS as ta,b as Nu,_ as _u,bT as Dt,bU as Ci$1,bV as Ti$2,bW as Mt,bX as kt$1,bY as zt$1,bZ as ve$1,b_ as Fi$1,b$ as Vi$2,aB as ju,p as Up,aq as Lp,aY as jD,b9 as dT,aC as Yc,aD as Hi$1,b2 as fT,c0 as yT,c as bD,c1 as sv,m as yh,c2 as Vp,s as _f}from'./main-7GTDUYX4.js';import {E}from'./chunk-CjEGudYm.js';import {a as ae}from'./chunk-OGlj7OxS.js';import {O as Oe,c as ce,j}from'./chunk-DguVphBR.js';import {w as wt,K,z}from'./chunk-BBU6qpUA.js';import {P as Pe,A as Ae,p as pe,F as Ft,m as mt}from'./chunk-DdScu8Do.js';import {v as v$1}from'./chunk-C1DN3tw2.js';import {m,n as n$1}from'./chunk-ATZy-SlV.js';var $t=["*"],zi=["content"],yi=[[["mat-drawer"],["mat-sidenav"]],[["mat-drawer-content"],["mat-sidenav-content"]],"*"],wi=["mat-drawer, mat-sidenav","mat-drawer-content, mat-sidenav-content","*"];function Ri(n,m){if(n&1){let t=uD();Ti$1(0,"div",1),Kp("click",function(){Nu(t);let i=yD();return _u(i._onBackdropClicked())}),zc();}if(n&2){let t=yD();lh("mat-drawer-shown",t._isShowingBackdrop());}}function Vi(n,m){n&1&&(Ti$1(0,"mat-drawer-content"),ED(1,2),zc());}function Ni(n,m){if(n&1){let t=uD();Ti$1(0,"div",1),Kp("click",function(){Nu(t);let i=yD();return _u(i._onBackdropClicked())}),zc();}if(n&2){let t=yD();lh("mat-drawer-shown",t._isShowingBackdrop());}}function Hi(n,m){n&1&&(Ti$1(0,"mat-sidenav-content"),ED(1,2),zc());}var ji=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var Qi=new M("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>false}),ge=new M("MAT_DRAWER_CONTAINER"),Pt=(()=>{class n extends ce{_platform=v(l);_changeDetectorRef=v(r0);_element=v(Cr);_ngZone=v(Q);_isInert=false;_container=v(_e);ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>this._changeDetectorRef.markForCheck());}_drawerToggled(t){t.opened?this._ngZone.runOutsideAngular(()=>{t._animationEnd.pipe(Og(50),tn$1(1)).subscribe(()=>this._updateInert());}):this._updateInert();}_updateInert(){let t=this._container._isShowingBackdrop();if(t!==this._isInert){let e=this._element.nativeElement;this._isInert=t,t?e.setAttribute("inert","true"):e.removeAttribute("inert");}}_shouldBeHidden(){if(this._platform.isBrowser)return  false;let{start:t,end:e}=this._container;return t!=null&&t.mode!=="over"&&t.opened||e!=null&&e.mode!=="over"&&e.opened}static \u0275fac=(()=>{let t;return function(i){return (t||(t=fy(n)))(i||n)}})();static \u0275cmp=NE({type:n,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(e,i){e&2&&(ch("margin-left",i._container._contentMargins.left,"px")("margin-right",i._container._contentMargins.right,"px"),lh("mat-drawer-content-hidden",i._shouldBeHidden()));},features:[lT([{provide:ce,useExisting:n}]),kp],ngContentSelectors:$t,decls:1,vars:0,template:function(e,i){e&1&&(ID(),ED(0));},encapsulation:2})}return n})(),ue=(()=>{class n{_elementRef=v(Cr);_focusTrapFactory=v(Pe);_focusMonitor=v(Ae);_platform=v(l);_ngZone=v(Q);_renderer=v(RI);_interactivityChecker=v(pe);_doc=v($o);_container=v(ge,{optional:true});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=false;_anchor=null;get position(){return this._position}set position(t){t=t==="end"?"end":"start",t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit());}_position="start";get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next();}_mode="over";get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=m(t);}_disableClose=false;get autoFocus(){let t=this._autoFocus;return t??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(t){(t==="true"||t==="false"||t==null)&&(t=m(t)),this._autoFocus=t;}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(m(t));}_opened=Uo(false);_openedVia=null;_animationStarted=new ie;_animationEnd=new ie;openedChange=new $e(true);_openedStream=this.openedChange.pipe(Hn$1(t=>t),Ne$1(()=>{}));openedStart=this._animationStarted.pipe(Hn$1(()=>this.opened),os(void 0));_closedStream=this.openedChange.pipe(Hn$1(t=>!t),Ne$1(()=>{}));closedStart=this._animationStarted.pipe(Hn$1(()=>!this.opened),os(void 0));_destroyed=new ie;onPositionChanged=new $e;_content;_modeChanged=new ie;_injector=v(Ee);_changeDetectorRef=v(r0);constructor(){this.openedChange.pipe(qg(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program");}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,e=this._elementRef.nativeElement;return [t.listen(e,"keydown",i=>{i.keyCode===27&&!this.disableClose&&!Ft(i)&&this._ngZone.run(()=>{this.close(),i.stopPropagation(),i.preventDefault();});}),t.listen(e,"transitionend",this._handleTransitionEvent),t.listen(e,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened);});}_focusByCssSelector(t,e){let i=this._elementRef.nativeElement.querySelector(t);i&&(this._interactivityChecker.isFocusable(i)||(i.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let o=()=>{r(),k(),i.removeAttribute("tabindex");},r=this._renderer.listen(i,"blur",o),k=this._renderer.listen(i,"mousedown",o);})),i.focus(e));}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case  false:case "dialog":return;case  true:case "first-tabbable":Mv(()=>{!this._focusTrap.focusInitialElement()&&typeof t.focus=="function"&&t.focus();},{injector:this._injector});break;case "first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(t){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null);}_isFocusWithinDrawer(){let t=this._doc.activeElement;return !!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=true,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState());}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete();}open(t){return this.toggle(true,t)}close(){return this.toggle(false)}_closeViaBackdropClick(){return this._setOpen(false,true,"mouse")}toggle(t=!this.opened,e){t&&e&&(this._openedVia=e);let i=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||"program");return t||(this._openedVia=null),i}_setOpen(t,e,i){return t===this.opened?Promise.resolve(t?"open":"close"):(this._opened.set(t),(this._container?._content||this._container?._userContent)?._drawerToggled(this),this._container?._transitionsEnabled?(this._setIsAnimating(true),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next();}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",t),!t&&e&&this._restoreFocus(i),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(tn$1(1)).subscribe(r=>o(r?"open":"close"));}))}_setIsAnimating(t){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",t);}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop());}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let e=this._elementRef.nativeElement,i=e.parentNode;t==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),i.insertBefore(this._anchor,e)),i.appendChild(e)):this._anchor&&this._anchor.parentNode.insertBefore(e,this._anchor);}_handleTransitionEvent=t=>{let e=this._elementRef.nativeElement;t.target===e&&this._ngZone.run(()=>{t.type==="transitionend"&&this._setIsAnimating(false),this._animationEnd.next(t);});};static \u0275fac=function(e){return new(e||n)};static \u0275cmp=NE({type:n,selectors:[["mat-drawer"]],viewQuery:function(e,i){if(e&1&&th(zi,5),e&2){let o;TD(o=CD())&&(i._content=o.first);}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(e,i){e&2&&(Hp("align",null)("tabIndex",i.mode!=="side"?"-1":null),ch("visibility",!i._container&&!i.opened?"hidden":null),lh("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side"));},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:$t,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,i){e&1&&(ID(),Ti$1(0,"div",1,0),ED(2),zc());},dependencies:[ce],encapsulation:2})}return n})(),_e=(()=>{class n{_dir=v(m$1,{optional:true});_element=v(Cr);_ngZone=v(Q);_changeDetectorRef=v(r0);_animationDisabled=R();_transitionsEnabled=false;_allDrawers;_drawers=new ci;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=m(t);}_autosize=v(Qi);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:m(t);}_backdropOverride=null;backdropClick=new $e;_start=null;_end=null;_left=null;_right=null;_destroyed=new ie;_doCheckSubject=new ie;_contentMargins={left:null,right:null};_contentMarginChanges=new ie;get scrollable(){return this._userContent||this._content}_injector=v(Ee);constructor(){let t=v(l),e=v(j);this._dir?.change.pipe(qg(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins();}),e.change().pipe(qg(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=true;},200);});}ngAfterContentInit(){this._allDrawers.changes.pipe(Ug(this._allDrawers),qg(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(e=>!e._container||e._container===this)),this._drawers.notifyOnChanges();}),this._drawers.changes.pipe(Ug(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t);}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck();}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(vg(10),qg(this._destroyed)).subscribe(()=>this.updateContentMargins());});}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete();}open(){this._drawers.forEach(t=>t.open());}close(){this._drawers.forEach(t=>t.close());}updateContentMargins(){let t=0,e=0;if(this._left&&this._left.opened){if(this._left.mode=="side")t+=this._left._getWidth();else if(this._left.mode=="push"){let i=this._left._getWidth();t+=i,e-=i;}}if(this._right&&this._right.opened){if(this._right.mode=="side")e+=this._right._getWidth();else if(this._right.mode=="push"){let i=this._right._getWidth();e+=i,t-=i;}}t=t||null,e=e||null,(t!==this._contentMargins.left||e!==this._contentMargins.right)&&(this._contentMargins={left:t,right:e},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)));}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next());}_watchDrawerToggle(t){t._animationStarted.pipe(qg(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck();}),t.mode!=="side"&&t.openedChange.pipe(qg(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened));}_watchDrawerPosition(t){t.onPositionChanged.pipe(qg(this._drawers.changes)).subscribe(()=>{Mv({read:()=>this._validateDrawers()},{injector:this._injector});});}_watchDrawerMode(t){t._modeChanged.pipe(qg(Ag(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck();});}_setContainerClass(t){let e=this._element.nativeElement.classList,i="mat-drawer-container-has-open";t?e.add(i):e.remove(i);}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position=="end"?(this._end!=null,this._end=t):(this._start!=null,this._start=t);}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end);}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop();}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick());}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!=="side":this._backdropOverride}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=NE({type:n,selectors:[["mat-drawer-container"]],contentQueries:function(e,i,o){if(e&1&&eh(o,Pt,5)(o,ue,5),e&2){let r;TD(r=CD())&&(i._content=r.first),TD(r=CD())&&(i._allDrawers=r);}},viewQuery:function(e,i){if(e&1&&th(Pt,5),e&2){let o;TD(o=CD())&&(i._userContent=o.first);}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(e,i){e&2&&lh("mat-drawer-container-explicit-backdrop",i._backdropOverride);},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[lT([{provide:ge,useExisting:n}])],ngContentSelectors:wi,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,i){e&1&&(ID(yi),XE(0,Ri,1,2,"div",0),ED(1),ED(2,1),XE(3,Vi,2,0,"mat-drawer-content")),e&2&&(eD(i.hasBackdrop?0:-1),Yv(3),eD(i._content?-1:3));},dependencies:[Pt],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2})}return n})(),xi=(()=>{class n extends Pt{static \u0275fac=(()=>{let t;return function(i){return (t||(t=fy(n)))(i||n)}})();static \u0275cmp=NE({type:n,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[lT([{provide:ce,useExisting:n},{provide:Pt,useExisting:n}]),kp],ngContentSelectors:$t,decls:1,vars:0,template:function(e,i){e&1&&(ID(),ED(0));},encapsulation:2})}return n})(),Ki=(()=>{class n extends ue{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(t){this._fixedInViewport=m(t);}_fixedInViewport=false;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(t){this._fixedTopGap=n$1(t);}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(t){this._fixedBottomGap=n$1(t);}_fixedBottomGap=0;static \u0275fac=(()=>{let t;return function(i){return (t||(t=fy(n)))(i||n)}})();static \u0275cmp=NE({type:n,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(e,i){e&2&&(Hp("tabIndex",i.mode!=="side"?"-1":null)("align",null),ch("top",i.fixedInViewport?i.fixedTopGap:null,"px")("bottom",i.fixedInViewport?i.fixedBottomGap:null,"px"),lh("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side")("mat-sidenav-fixed",i.fixedInViewport));},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[lT([{provide:ue,useExisting:n}]),kp],ngContentSelectors:$t,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,i){e&1&&(ID(),Ti$1(0,"div",1,0),ED(2),zc());},dependencies:[ce],encapsulation:2})}return n})(),Fo=(()=>{class n extends _e{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let t;return function(i){return (t||(t=fy(n)))(i||n)}})();static \u0275cmp=NE({type:n,selectors:[["mat-sidenav-container"]],contentQueries:function(e,i,o){if(e&1&&eh(o,xi,5)(o,Ki,5),e&2){let r;TD(r=CD())&&(i._content=r.first),TD(r=CD())&&(i._allDrawers=r);}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(e,i){e&2&&lh("mat-drawer-container-explicit-backdrop",i._backdropOverride);},exportAs:["matSidenavContainer"],features:[lT([{provide:ge,useExisting:n},{provide:_e,useExisting:n}]),kp],ngContentSelectors:wi,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,i){e&1&&(ID(yi),XE(0,Ni,1,2,"div",0),ED(1),ED(2,1),XE(3,Hi,2,0,"mat-sidenav-content")),e&2&&(eD(i.hasBackdrop?0:-1),Yv(3),eD(i._content?-1:3));},dependencies:[xi],styles:[ji],encapsulation:2})}return n})();var Zi=["*"],zo=(()=>{class n{constructor(){}static{this.\u0275fac=function(e){return new(e||n)};}static{this.\u0275cmp=NE({type:n,selectors:[["app-layout-content"]],ngContentSelectors:Zi,decls:3,vars:0,consts:[["fxLayout","row wrap","fxLayoutAlign","center center",1,"layout-wrapper"],["fxFlex","80%","fxFlex.lt-md","100%",1,"flex-wrapper"]],template:function(e,i){e&1&&(ID(),Qc(0,"div",0)(1,"div",1),ED(2),Zc()());},styles:[".layout-wrapper[_ngcontent-%COMP%], .flex-wrapper[_ngcontent-%COMP%]{height:100%}"],changeDetection:1});}}return n})();var Ui=["*",[["mat-toolbar-row"]]],$i=["*","mat-toolbar-row"],Wi=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=RE({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),ki=(()=>{class n{_elementRef=v(Cr);_platform=v(l);_document=v($o);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()));}_checkToolbarMixedModes(){this._toolbarRows.length;}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=NE({type:n,selectors:[["mat-toolbar"]],contentQueries:function(e,i,o){if(e&1&&eh(o,Wi,5),e&2){let r;TD(r=CD())&&(i._toolbarRows=r);}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(e,i){e&2&&(HD(i.color?"mat-"+i.color:""),lh("mat-toolbar-multiple-rows",i._toolbarRows.length>0)("mat-toolbar-single-row",i._toolbarRows.length===0));},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:$i,decls:2,vars:0,template:function(e,i){e&1&&(ID(Ui),ED(0),ED(1,1));},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2})}return n})();var qi=()=>["/home"],Gi=()=>["/error"];function Xi(n,m){n&1&&(Ti$1(0,"a",7)(1,"mat-icon",8),YD(2,"warning"),zc()()),n&2&&Bp("routerLink",uT(1,Gi));}var or=(()=>{class n{constructor(){this.errorNotification=v(b),this.lastUpdateDate=new Date("09/02/2026 11:16 PM"),this.lastUpdateTooltip="Angular 22: standalone, Vitest, FormValueControl/FormCheckboxControl custom widgets, Add Labyrinth, Add Mersenne, Improve Mersenne, Update CV. Add knowledge base, Learning check, fix fake question length, md instead of pdf of knowledge base, md to firestore, check via MX rec, readers count, dicom, cv on dockerhub, android apps";}static{this.\u0275fac=function(e){return new(e||n)};}static{this.\u0275cmp=NE({type:n,selectors:[["app-header"]],decls:13,vars:10,consts:[[1,"header-content"],["color","primary",1,"toolbar-align"],[3,"routerLink"],[1,"line-style"],[1,"last-update",3,"matTooltip","matTooltipPosition"],[1,"line-style","angular-version-row"],[3,"compact"],[1,"error-indicator-link",3,"routerLink"],[1,"error-indicator"]],template:function(e,i){e&1&&(Ti$1(0,"div",0)(1,"mat-toolbar",1)(2,"div")(3,"a",2),YD(4,"Home"),zc(),YD(5," of L.K\u0151v\xE1ri "),zc(),Ti$1(6,"div",3)(7,"span",4),YD(8),pT(9,"date"),zc()(),Ti$1(10,"div",5),$p(11,"app-angular-version",6),XE(12,Xi,3,2,"a",7),zc()()()),e&2&&(Yv(3),Bp("routerLink",uT(9,qi)),Yv(4),Bp("matTooltip",i.lastUpdateTooltip)("matTooltipPosition","right"),Yv(),Jc("Last update: ",mT(9,6,i.lastUpdateDate,"MM/dd/yyyy HH:mm")),Yv(3),Bp("compact",true),Yv(),eD(i.errorNotification.currentErrorEntries().length>0?12:-1));},dependencies:[ki,$t$1,Oe,Et,E,zt],styles:[".header-content[_ngcontent-%COMP%]{width:100%}.header-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#fff}.header-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .header-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active{color:#d3d3d3}.header-content[_ngcontent-%COMP%]   .toolbar-align[_ngcontent-%COMP%]{display:block;line-height:1.5rem}.header-content[_ngcontent-%COMP%]   .toolbar-align[_ngcontent-%COMP%]   .line-style[_ngcontent-%COMP%]{line-height:.5rem}.header-content[_ngcontent-%COMP%]   .toolbar-align[_ngcontent-%COMP%]   .line-style[_ngcontent-%COMP%]   .last-update[_ngcontent-%COMP%]{color:#ff0;font-size:.6rem;line-height:.5rem}.header-content[_ngcontent-%COMP%]   .toolbar-align[_ngcontent-%COMP%]   .angular-version-row[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.15rem}.header-content[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]{border-radius:.1875rem;width:100%}.header-content[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%]{float:right}.header-content[_ngcontent-%COMP%]   .error-indicator-link[_ngcontent-%COMP%]{display:inline-flex;align-items:center;text-decoration:none;line-height:.5rem}.header-content[_ngcontent-%COMP%]   .error-indicator-link[_ngcontent-%COMP%]:hover   .error-indicator[_ngcontent-%COMP%], .header-content[_ngcontent-%COMP%]   .error-indicator-link[_ngcontent-%COMP%]:active   .error-indicator[_ngcontent-%COMP%]{color:#f66}.header-content[_ngcontent-%COMP%]   .error-indicator[_ngcontent-%COMP%]{color:red;font-size:.75rem;width:.75rem;height:.75rem;line-height:.75rem}"],changeDetection:1});}}return n})();var Yi=["*"],Ji=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,tn=["unscopedContent"],en=["text"],nn=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],on=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var rn=new M("ListOption"),an=(()=>{class n{_elementRef=v(Cr);static \u0275fac=function(e){return new(e||n)};static \u0275dir=RE({type:n,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return n})(),sn=(()=>{class n{_elementRef=v(Cr);static \u0275fac=function(e){return new(e||n)};static \u0275dir=RE({type:n,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return n})(),ln=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=RE({type:n,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return n})(),Ii=(()=>{class n{_listOption=v(rn,{optional:true});_isAlignedAtStart(){return !this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||n)};static \u0275dir=RE({type:n,hostVars:4,hostBindings:function(e,i){e&2&&lh("mdc-list-item__start",i._isAlignedAtStart())("mdc-list-item__end",!i._isAlignedAtStart());}})}return n})(),cn=(()=>{class n extends Ii{static \u0275fac=(()=>{let t;return function(i){return (t||(t=fy(n)))(i||n)}})();static \u0275dir=RE({type:n,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[kp]})}return n})(),dn=(()=>{class n extends Ii{static \u0275fac=(()=>{let t;return function(i){return (t||(t=fy(n)))(i||n)}})();static \u0275dir=RE({type:n,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[kp]})}return n})(),mn=new M("MAT_LIST_CONFIG"),fe=(()=>{class n{_isNonInteractive=true;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=m(t);}_disableRipple=false;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(m(t));}_disabled=Uo(false);_defaultOptions=v(mn,{optional:true});static \u0275fac=function(e){return new(e||n)};static \u0275dir=RE({type:n,hostVars:1,hostBindings:function(e,i){e&2&&Hp("aria-disabled",i.disabled);},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return n})(),pn=(()=>{class n{_elementRef=v(Cr);_ngZone=v(Q);_listBase=v(fe,{optional:true});_platform=v(l);_hostElement;_isButtonElement;_noopAnimations=R();_avatars;_icons;set lines(t){this._explicitLines=n$1(t,null),this._updateItemLines(false);}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=m(t);}_disableRipple=false;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(m(t));}_disabled=Uo(false);_subscriptions=new W;_rippleRenderer=null;_hasUnscopedTextContent=false;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){v(v$1).load(wt);let t=v(K,{optional:true});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button");}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(true);}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents();}_hasIconOrAvatar(){return !!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new z(this,this._ngZone,this._hostElement,this._platform,v(Ee)),this._rippleRenderer.setupTriggerEvents(this._hostElement);}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Ag(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(false)));});}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),i=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&e===1;i.classList.toggle("mdc-list-item__primary-text",o),i.classList.toggle("mdc-list-item__secondary-text",!o);}else i.classList.remove("mdc-list-item__primary-text"),i.classList.remove("mdc-list-item__secondary-text");}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()));}static \u0275fac=function(e){return new(e||n)};static \u0275dir=RE({type:n,contentQueries:function(e,i,o){if(e&1&&eh(o,cn,4)(o,dn,4),e&2){let r;TD(r=CD())&&(i._avatars=r),TD(r=CD())&&(i._icons=r);}},hostVars:4,hostBindings:function(e,i){e&2&&(Hp("aria-disabled",i.disabled)("disabled",i._isButtonElement&&i.disabled||null),lh("mdc-list-item--disabled",i.disabled));},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return n})();var Ci=(()=>{class n extends pn{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=m(t);}_activated=false;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(i){return (t||(t=fy(n)))(i||n)}})();static \u0275cmp=NE({type:n,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(e,i,o){if(e&1&&eh(o,sn,5)(o,an,5)(o,ln,5),e&2){let r;TD(r=CD())&&(i._lines=r),TD(r=CD())&&(i._titles=r),TD(r=CD())&&(i._meta=r);}},viewQuery:function(e,i){if(e&1&&th(tn,5)(en,5),e&2){let o;TD(o=CD())&&(i._unscopedContent=o.first),TD(o=CD())&&(i._itemText=o.first);}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(e,i){e&2&&(Hp("aria-current",i._getAriaCurrent()),lh("mdc-list-item--activated",i.activated)("mdc-list-item--with-leading-avatar",i._avatars.length!==0)("mdc-list-item--with-leading-icon",i._icons.length!==0)("mdc-list-item--with-trailing-meta",i._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",i._hasBothLeadingAndTrailing())("_mat-animation-noopable",i._noopAnimations));},inputs:{activated:"activated"},exportAs:["matListItem"],features:[kp],ngContentSelectors:on,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(e,i){e&1&&(ID(nn),ED(0),Ti$1(1,"span",1),ED(2,1),ED(3,2),Ti$1(4,"span",2,0),Kp("cdkObserveContent",function(){return i._updateItemLines(true)}),ED(6,3),zc()(),ED(7,4),ED(8,5),$p(9,"div",3));},dependencies:[mt],encapsulation:2})}return n})();var Mi=(()=>{class n extends fe{_isNonInteractive=false;static \u0275fac=(()=>{let t;return function(i){return (t||(t=fy(n)))(i||n)}})();static \u0275cmp=NE({type:n,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[lT([{provide:fe,useExisting:n}]),kp],ngContentSelectors:Yi,decls:1,vars:0,template:function(e,i){e&1&&(ID(),ED(0));},styles:[Ji],encapsulation:2})}return n})();var Ti=`
    .p-tieredmenu {
        background: dt('tieredmenu.background');
        color: dt('tieredmenu.color');
        border: 1px solid dt('tieredmenu.border.color');
        border-radius: dt('tieredmenu.border.radius');
        min-width: 12.5rem;
    }
    

    .p-tieredmenu-root-list,
    .p-tieredmenu-submenu {
        margin: 0;
        padding: dt('tieredmenu.list.padding');
        list-style: none;
        outline: 0 none;
        display: flex;
        flex-direction: column;
        gap: dt('tieredmenu.list.gap');
    }

    .p-tieredmenu-submenu {
        position: absolute;
        min-width: 100%;
        z-index: 1;
        background: dt('tieredmenu.background');
        color: dt('tieredmenu.color');
        border: 1px solid dt('tieredmenu.border.color');
        border-radius: dt('tieredmenu.border.radius');
        box-shadow: dt('tieredmenu.shadow');
    }

    .p-tieredmenu-item {
        position: relative;
    }

    .p-tieredmenu-item-content {
        transition:
            background dt('tieredmenu.transition.duration'),
            color dt('tieredmenu.transition.duration');
        border-radius: dt('tieredmenu.item.border.radius');
        color: dt('tieredmenu.item.color');
    }

    .p-tieredmenu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('tieredmenu.item.padding');
        gap: dt('tieredmenu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-tieredmenu-item-label {
        line-height: 1;
    }

    .p-tieredmenu-item-icon {
        color: dt('tieredmenu.item.icon.color');
    }

    .p-tieredmenu-submenu-icon {
        color: dt('tieredmenu.submenu.icon.color');
        margin-left: auto;
        font-size: dt('tieredmenu.submenu.icon.size');
        width: dt('tieredmenu.submenu.icon.size');
        height: dt('tieredmenu.submenu.icon.size');
    }

    .p-tieredmenu-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-tieredmenu-item.p-focus > .p-tieredmenu-item-content {
        color: dt('tieredmenu.item.focus.color');
        background: dt('tieredmenu.item.focus.background');
    }

    .p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-item-icon {
        color: dt('tieredmenu.item.icon.focus.color');
    }

    .p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
        color: dt('tieredmenu.submenu.icon.focus.color');
    }

    .p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover {
        color: dt('tieredmenu.item.focus.color');
        background: dt('tieredmenu.item.focus.background');
    }

    .p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-item-icon {
        color: dt('tieredmenu.item.icon.focus.color');
    }

    .p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-submenu-icon {
        color: dt('tieredmenu.submenu.icon.focus.color');
    }

    .p-tieredmenu-item-active > .p-tieredmenu-item-content {
        color: dt('tieredmenu.item.active.color');
        background: dt('tieredmenu.item.active.background');
    }

    .p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-item-icon {
        color: dt('tieredmenu.item.icon.active.color');
    }

    .p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
        color: dt('tieredmenu.submenu.icon.active.color');
    }

    .p-tieredmenu-separator {
        border-block-start: 1px solid dt('tieredmenu.separator.border.color');
    }

    .p-tieredmenu-overlay {
        box-shadow: dt('tieredmenu.shadow');
        will-change: transform;
    }

    .p-tieredmenu-mobile .p-tieredmenu-submenu {
        position: static;
        box-shadow: none;
        border: 0 none;
        padding-inline-start: dt('tieredmenu.submenu.mobile.indent');
        padding-inline-end: 0;
    }

    .p-tieredmenu-mobile .p-tieredmenu-submenu:dir(rtl) {
        padding-inline-start: 0;
        padding-inline-end: dt('tieredmenu.submenu.mobile.indent');
    }

    .p-tieredmenu-mobile .p-tieredmenu-submenu-icon {
        transition: transform 0.2s;
        transform: rotate(90deg);
    }

    .p-tieredmenu-mobile .p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
        transform: rotate(-90deg);
    }
`;var Li=(()=>{class n extends bt{static \u0275fac=(()=>{let t;return function(i){return (t||(t=fy(n)))(i||n)}})();static \u0275cmp=NE({type:n,selectors:[["","data-p-icon","angle-right"]],features:[kp],decls:1,vars:0,consts:[["d","M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z","fill","currentColor"]],template:function(e,i){e&1&&(ju(),Up(0,"path",0));},encapsulation:2,changeDetection:1})}return n})();var Oi=`
    .p-tooltip {
        position: absolute;
        display: none;
        max-width: dt('tooltip.max.width');
    }

    .p-tooltip-right,
    .p-tooltip-left {
        padding: 0 dt('tooltip.gutter');
    }

    .p-tooltip-top,
    .p-tooltip-bottom {
        padding: dt('tooltip.gutter') 0;
    }

    .p-tooltip-text {
        white-space: pre-line;
        word-break: break-word;
        background: dt('tooltip.background');
        color: dt('tooltip.color');
        padding: dt('tooltip.padding');
        box-shadow: dt('tooltip.shadow');
        border-radius: dt('tooltip.border.radius');
    }

    .p-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }

    .p-tooltip-right .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter') 0;
        border-right-color: dt('tooltip.background');
    }

    .p-tooltip-left .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') 0 dt('tooltip.gutter') dt('tooltip.gutter');
        border-left-color: dt('tooltip.background');
    }

    .p-tooltip-top .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') 0 dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }

    .p-tooltip-bottom .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: 0 dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }
`;var hn={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},Ei=(()=>{class n extends ct{name="tooltip";style=Oi;classes=hn;static \u0275fac=(()=>{let t;return function(i){return (t||(t=fy(n)))(i||n)}})();static \u0275prov=re({token:n,factory:n.\u0275fac})}return n})();var Si=new M("TOOLTIP_INSTANCE"),Di=(()=>{class n extends $e$1{zone;viewContainer;componentName="Tooltip";$pcTooltip=v(Si,{optional:true,skipSelf:true})??void 0;tooltipPosition;tooltipEvent="hover";positionStyle;tooltipStyleClass;tooltipZIndex;escape=true;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=true;fitContent=true;hideOnEscape=true;showOnEllipsis=false;content;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this.deactivate();}tooltipOptions;appendTo=JF(void 0);$appendTo=DT(()=>this.appendTo()||this.config.overlayAppendTo());_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:true,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:true,hideOnEscape:true,showOnEllipsis:false,id:me("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;rootPTClasses="";showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;touchStartListener;touchEndListener;documentTouchListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=v(Ei);interactionInProgress=false;ptTooltip=JF();pTooltipPT=JF();pTooltipUnstyled=JF();constructor(t,e){super(),this.zone=t,this.viewContainer=e,Qu(()=>{let i=this.ptTooltip()||this.pTooltipPT();i&&this.directivePT.set(i);}),Qu(()=>{this.pTooltipUnstyled()&&this.directiveUnstyled.set(this.pTooltipUnstyled());});}onAfterViewInit(){Pi$1(this.platformId)&&this.zone.runOutsideAngular(()=>{let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener),this.touchStartListener=this.onTouchStart.bind(this),this.touchEndListener=this.onTouchEnd.bind(this),this.el.nativeElement.addEventListener("touchstart",this.touchStartListener,{passive:true}),this.el.nativeElement.addEventListener("touchend",this.touchEndListener,{passive:true})),t==="focus"||t==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let e=this.el.nativeElement.querySelector(".p-component");e||(e=this.getTarget(this.el.nativeElement)),e.addEventListener("focus",this.focusListener),e.addEventListener("blur",this.blurListener);}});}onChanges(t){t.tooltipPosition&&this.setOption({tooltipPosition:t.tooltipPosition.currentValue}),t.tooltipEvent&&this.setOption({tooltipEvent:t.tooltipEvent.currentValue}),t.appendTo&&this.setOption({appendTo:t.appendTo.currentValue}),t.positionStyle&&this.setOption({positionStyle:t.positionStyle.currentValue}),t.tooltipStyleClass&&this.setOption({tooltipStyleClass:t.tooltipStyleClass.currentValue}),t.tooltipZIndex&&this.setOption({tooltipZIndex:t.tooltipZIndex.currentValue}),t.escape&&this.setOption({escape:t.escape.currentValue}),t.showDelay&&this.setOption({showDelay:t.showDelay.currentValue}),t.hideDelay&&this.setOption({hideDelay:t.hideDelay.currentValue}),t.life&&this.setOption({life:t.life.currentValue}),t.positionTop&&this.setOption({positionTop:t.positionTop.currentValue}),t.positionLeft&&this.setOption({positionLeft:t.positionLeft.currentValue}),t.disabled&&this.setOption({disabled:t.disabled.currentValue}),t.content&&(this.setOption({tooltipLabel:t.content.currentValue}),this.active&&(t.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),t.autoHide&&this.setOption({autoHide:t.autoHide.currentValue}),t.showOnEllipsis&&this.setOption({showOnEllipsis:t.showOnEllipsis.currentValue}),t.id&&this.setOption({id:t.id.currentValue}),t.tooltipOptions&&(this._tooltipOptions=D(D({},this._tooltipOptions),t.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()));}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(t){!this.container&&!this.showTimeout&&this.activate();}onMouseLeave(t){this.isAutoHide()?this.deactivate():!(Dt(t.relatedTarget,"p-tooltip")||Dt(t.relatedTarget,"p-tooltip-text")||Dt(t.relatedTarget,"p-tooltip-arrow"))&&this.deactivate();}onTouchStart(t){!this.container&&!this.showTimeout&&(this.activate(),this.isAutoHide()||this.bindDocumentTouchListener());}onTouchEnd(t){this.isAutoHide()&&this.deactivate();}bindDocumentTouchListener(){this.documentTouchListener||(this.documentTouchListener=this.renderer.listen("document","touchstart",t=>{this.container&&!this.container.contains(t.target)&&!this.el.nativeElement.contains(t.target)&&(this.deactivate(),this.unbindDocumentTouchListener());}));}unbindDocumentTouchListener(){this.documentTouchListener&&(this.documentTouchListener(),this.documentTouchListener=null);}onFocus(t){this.activate();}onBlur(t){this.deactivate();}onInputClick(t){this.deactivate();}hasEllipsis(){let t=this.el.nativeElement;return t.offsetWidth<t.scrollWidth||t.offsetHeight<t.scrollHeight}activate(){if(!this.interactionInProgress){if(this.getOption("showOnEllipsis")&&!this.hasEllipsis())return;if(this.active=true,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show();},this.getOption("showDelay")):this.show(),this.getOption("life")){let t=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide();},t);}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener?.();})),this.interactionInProgress=true;}}deactivate(){this.interactionInProgress=false,this.active=false,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide();},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener();}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=Ci$1("div",{class:this.cx("root"),"p-bind":this.ptm("root"),"data-pc-section":"root"}),this.container.setAttribute("role","tooltip");let t=Ci$1("div",{class:this.cx("arrow"),"p-bind":this.ptm("arrow"),"data-pc-section":"arrow"});this.container.appendChild(t),this.tooltipText=Ci$1("div",{class:this.cx("text"),"p-bind":this.ptm("text"),"data-pc-section":"text"}),this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?Ei$1(this.container,this.el.nativeElement):Ei$1(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener());}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let t=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(t,"mouseleave",e=>{this.deactivate();});}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null);}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align();},100):(this.container.style.display="inline-block",this.align()),Ti$2(this.container,250),this.getOption("tooltipZIndex")==="auto"?Ct.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener();}hide(){this.getOption("tooltipZIndex")==="auto"&&Ct.clear(this.container),this.remove();}updateText(){let t=this.getOption("tooltipLabel");if(t&&typeof t.createEmbeddedView=="function"){let e=this.viewContainer.createEmbeddedView(t);e.detectChanges(),e.rootNodes.forEach(i=>this.tooltipText.appendChild(i));}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(t))):this.tooltipText.innerHTML=t;}align(){let t=this.getOption("tooltipPosition"),i={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]}[t]||[];for(let[o,r]of i.entries())if(o===0)r.call(this);else if(this.isOutOfBounds())r.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let t=this.el.nativeElement.getBoundingClientRect(),e=t.left+Mt(),i=t.top+kt$1();return {left:e,top:i}}else return {left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.startsWith("P-")?Ai$1(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let t=this.activeElement,e=Ht(t),i=(zt$1(t)-zt$1(this.container))/2;this.alignTooltip(e,i);let o=this.getArrowElement();o.style.top="50%",o.style.right=null,o.style.bottom=null,o.style.left="0";}alignLeft(){this.preAlign("left");let t=this.getArrowElement(),e=Ht(this.container),i=(zt$1(this.el.nativeElement)-zt$1(this.container))/2;this.alignTooltip(-e,i),t.style.top="50%",t.style.right="0",t.style.bottom=null,t.style.left=null;}alignTop(){this.preAlign("top");let t=this.getArrowElement(),e=this.getHostOffset(),i=Ht(this.container),o=(Ht(this.el.nativeElement)-Ht(this.container))/2,r=zt$1(this.container);this.alignTooltip(o,-r);let k=e.left-this.getHostOffset().left+i/2;t.style.top=null,t.style.right=null,t.style.bottom="0",t.style.left=k+"px";}getArrowElement(){return Ai$1(this.container,'[data-pc-section="arrow"]')}alignBottom(){this.preAlign("bottom");let t=this.getArrowElement(),e=Ht(this.container),i=this.getHostOffset(),o=(Ht(this.el.nativeElement)-Ht(this.container))/2,r=zt$1(this.el.nativeElement);this.alignTooltip(o,r);let k=i.left-this.getHostOffset().left+e/2;t.style.top="0",t.style.right=null,t.style.bottom=null,t.style.left=k+"px";}alignTooltip(t,e){let i=this.getHostOffset(),o=i.left+t,r=i.top+e;this.container.style.left=o+this.getOption("positionLeft")+"px",this.container.style.top=r+this.getOption("positionTop")+"px";}setOption(t){this._tooltipOptions=D(D({},this._tooltipOptions),t);}getOption(t){return this._tooltipOptions[t]}getTarget(t){return Dt(t,"p-inputwrapper")?Ai$1(t,"input"):t}preAlign(t){this.container.style.left="-999px",this.container.style.top="-999px",this.container.className=this.cn(this.cx("root"),this.ptm("root")?.class,"p-tooltip-"+t,this.getOption("tooltipStyleClass"));}isOutOfBounds(){let t=this.container.getBoundingClientRect(),e=t.top,i=t.left,o=Ht(this.container),r=zt$1(this.container),k=ve$1();return i+o>k.width||i<0||e<0||e+r>k.height}onWindowResize(t){this.hide();}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener);});}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null);}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new _e$1(this.el.nativeElement,()=>{this.container&&this.hide();})),this.scrollHandler.bindScrollListener();}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener();}unbindEvents(){let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener),this.el.nativeElement.removeEventListener("touchstart",this.touchStartListener),this.el.nativeElement.removeEventListener("touchend",this.touchEndListener),this.unbindDocumentTouchListener()),t==="focus"||t==="both"){let e=this.el.nativeElement.querySelector(".p-component");e||(e=this.getTarget(this.el.nativeElement)),e.removeEventListener("focus",this.focusListener),e.removeEventListener("blur",this.blurListener);}this.unbindDocumentResizeListener();}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):Fi$1(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.unbindDocumentTouchListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null;}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null);}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null);}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout();}onDestroy(){this.unbindEvents(),this.container&&Ct.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener();}static \u0275fac=function(e){return new(e||n)(_r(Q),_r(Vi$2))};static \u0275dir=RE({type:n,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",s0],showDelay:[2,"showDelay","showDelay",a0],hideDelay:[2,"hideDelay","hideDelay",a0],life:[2,"life","life",a0],positionTop:[2,"positionTop","positionTop",a0],positionLeft:[2,"positionLeft","positionLeft",a0],autoHide:[2,"autoHide","autoHide",s0],fitContent:[2,"fitContent","fitContent",s0],hideOnEscape:[2,"hideOnEscape","hideOnEscape",s0],showOnEllipsis:[2,"showOnEllipsis","showOnEllipsis",s0],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions",appendTo:[1,"appendTo"],ptTooltip:[1,"ptTooltip"],pTooltipPT:[1,"pTooltipPT"],pTooltipUnstyled:[1,"pTooltipUnstyled"]},features:[lT([Ei,{provide:Si,useExisting:n},{provide:Ie,useExisting:n}]),kp]})}return n})(),be=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=SE({type:n});static \u0275inj=ru({imports:[et,et]})}return n})();var _n=["sublist"],gn=n=>({processedItem:n}),fn=()=>({exact:false}),bn=(n,m)=>({$implicit:n,hasSubmenu:m});function vn(n,m){if(n&1&&$p(0,"li",8),n&2){let t=yD().$implicit,e=yD(2);jD(e.getItemProp(t,"style")),HD(e.cn(e.cx("separator"),e.getItemProp(t,"class"),e.getItemProp(t,"styleClass"))),Bp("pBind",e._ptm("separator")),Hp("id",e.getItemId(t));}}function xn(n,m){if(n&1&&$p(0,"span",19),n&2){let t=yD(4),e=t.$implicit,i=t.index,o=yD(2);HD(o.cn(o.cx("itemIcon"),o.getItemProp(e,"icon"),o.getItemProp(e,"iconClass"))),Bp("ngStyle",o.getItemProp(e,"iconStyle"))("pBind",o.getPTOptions(e,i,"itemIcon")),Hp("tabindex",-1);}}function yn(n,m){if(n&1&&(Ti$1(0,"span",19),YD(1),zc()),n&2){let t=yD(4),e=t.$implicit,i=t.index,o=yD(2);HD(o.cn(o.cx("itemLabel"),o.getItemProp(e,"labelClass"))),Bp("ngStyle",o.getItemProp(e,"labelStyle"))("pBind",o.getPTOptions(e,i,"itemLabel")),Yv(),Jc(" ",o.getItemLabel(e)," ");}}function wn(n,m){if(n&1&&$p(0,"span",20),n&2){let t=yD(4),e=t.$implicit,i=t.index,o=yD(2);HD(o.cn(o.cx("itemLabel"),o.getItemProp(e,"labelClass"))),Bp("ngStyle",o.getItemProp(e,"labelStyle"))("innerHTML",o.getItemLabel(e),sv)("pBind",o.getPTOptions(e,i,"itemLabel"));}}function kn(n,m){if(n&1&&(Ti$1(0,"span"),YD(1),zc()),n&2){let t=yD(4).$implicit,e=yD(2);HD(e.cn(e.cx("itemBadge"),e.getItemProp(t,"badgeStyleClass"))),Yv(),yh(e.getItemProp(t,"badge"));}}function In(n,m){if(n&1&&(ju(),$p(0,"svg",23)),n&2){let t=yD(5),e=t.$implicit,i=t.index,o=yD(2);HD(o.cx("submenuIcon")),Bp("pBind",o.getPTOptions(e,i,"submenuIcon")),Hp("aria-hidden",true);}}function Cn(n,m){}function Mn(n,m){n&1&&Lp(0,Cn,0,0,"ng-template",24),n&2&&Vp("aria-hidden",true);}function Tn(n,m){if(n&1&&(Yc(0),Lp(1,In,1,4,"svg",21)(2,Mn,1,1,null,22),Hi$1()),n&2){let t=yD(6);Yv(),Bp("ngIf",!t.tieredMenu.submenuIconTemplate&&!t.tieredMenu._submenuIconTemplate),Yv(),Bp("ngTemplateOutlet",t.tieredMenu.submenuIconTemplate||t.tieredMenu._submenuIconTemplate);}}function Ln(n,m){if(n&1&&(Ti$1(0,"a",15),Lp(1,xn,1,5,"span",16)(2,yn,2,5,"span",17)(3,wn,1,5,"ng-template",null,2,yT)(5,kn,2,3,"span",18)(6,Tn,3,2,"ng-container",11),zc()),n&2){let t=bD(4),e=yD(3),i=e.$implicit,o=e.index,r=yD(2);HD(r.cn(r.cx("itemLink"),r.getItemProp(i,"linkClass"))),Bp("target",r.getItemProp(i,"target"))("ngStyle",r.getItemProp(i,"linkStyle"))("pBind",r.getPTOptions(i,o,"itemLink")),Hp("href",r.getItemProp(i,"url"),_f)("data-automationid",r.getItemProp(i,"automationId"))("title",r.getItemProp(i,"title"))("tabindex",-1),Yv(),Bp("ngIf",r.getItemProp(i,"icon")),Yv(),Bp("ngIf",r.getItemProp(i,"escape"))("ngIfElse",t),Yv(3),Bp("ngIf",r.getItemProp(i,"badge")),Yv(),Bp("ngIf",r.isItemGroup(i));}}function On(n,m){if(n&1&&$p(0,"span",19),n&2){let t=yD(4),e=t.$implicit,i=t.index,o=yD(2);HD(o.cn(o.cx("itemIcon"),o.getItemProp(e,"icon"),o.getItemProp(e,"iconClass"))),Bp("ngStyle",o.getItemProp(e,"iconStyle"))("pBind",o.getPTOptions(e,i,"itemIcon")),Hp("aria-hidden",true)("tabindex",-1);}}function En(n,m){if(n&1&&(Ti$1(0,"span",19),YD(1),zc()),n&2){let t=yD(4),e=t.$implicit,i=t.index,o=yD(2);HD(o.cn(o.cx("itemLabel"),o.getItemProp(e,"labelClass"))),Bp("ngStyle",o.getItemProp(e,"labelStyle"))("pBind",o.getPTOptions(e,i,"itemLabel")),Yv(),Jc(" ",o.getItemLabel(e)," ");}}function Sn(n,m){if(n&1&&$p(0,"span",20),n&2){let t=yD(4),e=t.$implicit,i=t.index,o=yD(2);HD(o.cn(o.cx("itemLabel"),o.getItemProp(e,"labelClass"))),Bp("ngStyle",o.getItemProp(e,"labelStyle"))("innerHTML",o.getItemLabel(e),sv)("pBind",o.getPTOptions(e,i,"itemLabel"));}}function Dn(n,m){if(n&1&&(Ti$1(0,"span"),YD(1),zc()),n&2){let t=yD(4).$implicit,e=yD(2);HD(e.cn(e.cx("itemBadge"),e.getItemProp(t,"badgeStyleClass"))),Yv(),yh(e.getItemProp(t,"badge"));}}function Pn(n,m){if(n&1&&(ju(),$p(0,"svg",23)),n&2){let t=yD(5),e=t.$implicit,i=t.index,o=yD(2);HD(o.cx("submenuIcon")),Bp("pBind",o.getPTOptions(e,i,"submenuIcon")),Hp("aria-hidden",true);}}function An(n,m){}function Fn(n,m){n&1&&Lp(0,An,0,0,"ng-template",24),n&2&&Vp("aria-hidden",true);}function Bn(n,m){if(n&1&&(Yc(0),Lp(1,Pn,1,4,"svg",21)(2,Fn,1,1,null,22),Hi$1()),n&2){let t=yD(6);Yv(),Bp("ngIf",!t.tieredMenu.submenuIconTemplate&&!t.tieredMenu._submenuIconTemplate),Yv(),Bp("ngTemplateOutlet",t.tieredMenu.submenuIconTemplate||t.tieredMenu._submenuIconTemplate);}}function zn(n,m){if(n&1&&(Ti$1(0,"a",25),Lp(1,On,1,6,"span",16)(2,En,2,5,"span",17)(3,Sn,1,5,"ng-template",null,2,yT)(5,Dn,2,3,"span",18)(6,Bn,3,2,"ng-container",11),zc()),n&2){let t=bD(4),e=yD(3),i=e.$implicit,o=e.index,r=yD(2);HD(r.cn(r.cx("itemLink"),r.getItemProp(i,"linkClass"))),Bp("routerLink",r.getItemProp(i,"routerLink"))("queryParams",r.getItemProp(i,"queryParams"))("routerLinkActive","p-tieredmenu-item-link-active")("routerLinkActiveOptions",r.getItemProp(i,"routerLinkActiveOptions")||uT(23,fn))("target",r.getItemProp(i,"target"))("ngStyle",r.getItemProp(i,"linkStyle"))("fragment",r.getItemProp(i,"fragment"))("queryParamsHandling",r.getItemProp(i,"queryParamsHandling"))("preserveFragment",r.getItemProp(i,"preserveFragment"))("skipLocationChange",r.getItemProp(i,"skipLocationChange"))("replaceUrl",r.getItemProp(i,"replaceUrl"))("state",r.getItemProp(i,"state"))("pBind",r.getPTOptions(i,o,"itemLink")),Hp("data-automationid",r.getItemProp(i,"automationId"))("title",r.getItemProp(i,"title"))("tabindex",-1),Yv(),Bp("ngIf",r.getItemProp(i,"icon")),Yv(),Bp("ngIf",r.getItemProp(i,"escape"))("ngIfElse",t),Yv(3),Bp("ngIf",r.getItemProp(i,"badge")),Yv(),Bp("ngIf",r.isItemGroup(i));}}function Rn(n,m){if(n&1&&(Yc(0),Lp(1,Ln,7,14,"a",13)(2,zn,7,24,"a",14),Hi$1()),n&2){let t=yD(2).$implicit,e=yD(2);Yv(),Bp("ngIf",!e.getItemProp(t,"routerLink")),Yv(),Bp("ngIf",e.getItemProp(t,"routerLink"));}}function Vn(n,m){}function Nn(n,m){n&1&&Lp(0,Vn,0,0,"ng-template");}function Hn(n,m){if(n&1&&(Yc(0),Lp(1,Nn,1,0,null,26),Hi$1()),n&2){let t=yD(2).$implicit,e=yD(2);Yv(),Bp("ngTemplateOutlet",e.itemTemplate)("ngTemplateOutletContext",fT(2,bn,t.item,e.getItemProp(t,"items")));}}function jn(n,m){if(n&1){let t=uD();Ti$1(0,"p-tieredmenusub",27),Kp("itemClick",function(i){Nu(t);let o=yD(4);return _u(o.itemClick.emit(i))})("itemMouseEnter",function(i){Nu(t);let o=yD(4);return _u(o.onItemMouseEnter(i))}),zc();}if(n&2){let t=yD(2).$implicit,e=yD(2);Bp("items",t.items)("itemTemplate",e.itemTemplate)("autoDisplay",e.autoDisplay)("menuId",e.menuId)("visible",e.isItemActive(t)&&e.isItemGroup(t))("activeItemPath",e.activeItemPath())("focusedItemId",e.focusedItemId)("ariaLabelledBy",e.getItemId(t))("level",e.level+1)("pt",e.pt())("motionOptions",e.motionOptions)("unstyled",e.unstyled());}}function Qn(n,m){if(n&1){let t=uD();Ti$1(0,"li",9,1)(2,"div",10),Kp("click",function(i){Nu(t);let o=yD().$implicit,r=yD(2);return _u(r.onItemClick(i,o))})("mouseenter",function(i){Nu(t);let o=yD().$implicit,r=yD(2);return _u(r.onItemMouseEnter({$event:i,processedItem:o}))}),Lp(3,Rn,3,2,"ng-container",11)(4,Hn,2,5,"ng-container",11),zc(),Lp(5,jn,1,12,"p-tieredmenusub",12),zc();}if(n&2){let t=yD(),e=t.$implicit,i=t.index,o=yD(2);HD(o.cn(o.cx("item",dT(23,gn,e)),o.getItemProp(e,"styleClass"))),Bp("ngStyle",o.getItemProp(e,"style"))("pBind",o.getPTOptions(e,i,"item"))("pTooltip",o.getItemProp(e,"tooltip"))("tooltipOptions",o.getItemProp(e,"tooltipOptions"))("pTooltipUnstyled",o.unstyled()),Hp("id",o.getItemId(e))("data-p-highlight",o.isItemActive(e))("data-p-focused",o.isItemFocused(e))("data-p-disabled",o.isItemDisabled(e))("aria-label",o.getItemLabel(e))("aria-disabled",o.isItemDisabled(e)||void 0)("aria-haspopup",o.isItemGroup(e)&&!o.getItemProp(e,"to")?"menu":void 0)("aria-expanded",o.isItemGroup(e)?o.isItemActive(e):void 0)("aria-setsize",o.getAriaSetSize())("aria-posinset",o.getAriaPosInset(i)),Yv(2),HD(o.cx("itemContent")),Bp("pBind",o.getPTOptions(e,i,"itemContent")),Yv(),Bp("ngIf",!o.itemTemplate),Yv(),Bp("ngIf",o.itemTemplate),Yv(),Bp("ngIf",o.isItemVisible(e)&&o.isItemGroup(e));}}function Kn(n,m){if(n&1&&Lp(0,vn,1,6,"li",6)(1,Qn,6,25,"li",7),n&2){let t=m.$implicit,e=yD(2);Bp("ngIf",e.isItemVisible(t)&&e.getItemProp(t,"separator")),Yv(),Bp("ngIf",e.isItemVisible(t)&&!e.getItemProp(t,"separator"));}}function Zn(n,m){if(n&1){let t=uD();Ti$1(0,"ul",4,0),Kp("keydown",function(i){Nu(t);let o=yD();return _u(o.menuKeydown.emit(i))})("focus",function(i){Nu(t);let o=yD();return _u(o.menuFocus.emit(i))})("blur",function(i){Nu(t);let o=yD();return _u(o.menuBlur.emit(i))})("pMotionOnBeforeEnter",function(i){Nu(t);let o=yD();return _u(o.onBeforeEnter(i))})("pMotionOnAfterLeave",function(){Nu(t);let i=yD();return _u(i.onAfterLeave())}),Lp(2,Kn,2,2,"ng-template",5),zc();}if(n&2){let t=yD();jD(t.inlineStyles),HD(t.root?t.cx("rootList"):t.cx("submenu")),Bp("id",t.menuId+"_list")("tabindex",t.tabindex)("pBind",t._ptm(t.root?"rootList":"submenu"))("pMotion",t.root?true:t.visible)("pMotionDisabled",t.root)("pMotionAppear",true)("pMotionName","p-anchored-overlay")("pMotionOptions",t.motionOptions),Hp("aria-label",t.ariaLabel)("aria-labelledBy",t.ariaLabelledBy)("aria-activedescendant",t.focusedItemId)("aria-orientation","vertical"),Yv(2),Bp("ngForOf",t.items);}}var Un=["submenuicon"],$n=["item"],Wn=["rootmenu"],qn=["container"];function Gn(n,m){if(n&1){let t=uD();Ti$1(0,"div",3,0),Kp("click",function(i){Nu(t);let o=yD();return _u(o.onOverlayClick(i))})("pMotionOnBeforeEnter",function(i){Nu(t);let o=yD();return _u(o.onOverlayBeforeEnter(i))})("pMotionOnAfterEnter",function(){Nu(t);let i=yD();return _u(i.onOverlayAfterEnter())})("pMotionOnAfterLeave",function(){Nu(t);let i=yD();return _u(i.onOverlayAfterLeave())}),Ti$1(2,"p-tieredMenuSub",4,1),Kp("itemClick",function(i){Nu(t);let o=yD();return _u(o.onItemClick(i))})("menuFocus",function(i){Nu(t);let o=yD();return _u(o.onMenuFocus(i))})("menuBlur",function(i){Nu(t);let o=yD();return _u(o.onMenuBlur(i))})("menuKeydown",function(i){Nu(t);let o=yD();return _u(o.onKeyDown(i))})("itemMouseEnter",function(i){Nu(t);let o=yD();return _u(o.onItemMouseEnter(i))}),zc()();}if(n&2){let t=yD();HD(t.cn(t.cx("root"),t.styleClass)),Bp("id",t.id)("ngStyle",t.style)("pBind",t.ptm("root"))("pMotion",t.visible||!t.popup)("pMotionName","p-anchored-overlay")("pMotionAppear",true)("pMotionDisabled",!t.popup)("pMotionOptions",t.computedMotionOptions()),Yv(2),Bp("root",true)("visible",true)("items",t.processedItems)("itemTemplate",t.itemTemplate||t._itemTemplate)("menuId",t.id)("tabindex",t.disabled?-1:t.tabindex)("ariaLabel",t.ariaLabel)("ariaLabelledBy",t.ariaLabelledBy)("baseZIndex",t.baseZIndex)("autoZIndex",t.autoZIndex)("autoDisplay",t.autoDisplay)("popup",t.popup)("focusedItemId",t.focused?t.focusedItemId:void 0)("activeItemPath",t.activeItemPath())("pt",t.pt())("unstyled",t.unstyled())("motionOptions",t.computedMotionOptions());}}var Xn={submenu:({instance:n,processedItem:m})=>({display:n.isItemActive(m)?"flex":"none"})},Yn={root:({instance:n})=>["p-tieredmenu p-component",{"p-tieredmenu-overlay":n.popup,"p-tieredmenu-mobile":n.queryMatches()}],start:"p-tieredmenu-start",rootList:"p-tieredmenu-root-list",item:({instance:n,processedItem:m})=>["p-tieredmenu-item",{"p-tieredmenu-item-active":n.isItemActive(m),"p-focus":n.isItemFocused(m),"p-disabled":n.isItemDisabled(m)}],itemContent:"p-tieredmenu-item-content",itemLink:"p-tieredmenu-item-link",itemIcon:"p-tieredmenu-item-icon",itemLabel:"p-tieredmenu-item-label",itemBadge:"p-menuitem-badge",submenuIcon:"p-tieredmenu-submenu-icon",submenu:"p-tieredmenu-submenu",separator:"p-tieredmenu-separator",end:"p-tieredmenu-end"},ve=(()=>{class n extends ct{name="tieredmenu";style=Ti;classes=Yn;inlineStyles=Xn;static \u0275fac=(()=>{let t;return function(i){return (t||(t=fy(n)))(i||n)}})();static \u0275prov=re({token:n,factory:n.\u0275fac})}return n})();var Ai=new M("TIEREDMENU_INSTANCE"),Pi=new M("TIEREDMENUSUB_INSTANCE"),Jn=(()=>{class n extends $e$1{el;renderer;tieredMenu;get visible(){return this._visible}set visible(t){this._visible=t,(this._visible||this.root)&&this.render.set(true);}items;itemTemplate;root=false;autoDisplay;autoZIndex=true;baseZIndex=0;popup;menuId;ariaLabel;ariaLabelledBy;level=0;focusedItemId;activeItemPath=JF([]);motionOptions;tabindex=0;inlineStyles;itemClick=new $e;itemMouseEnter=new $e;menuFocus=new $e;menuBlur=new $e;menuKeydown=new $e;sublistViewChild;render=Uo(false);_componentStyle=v(ve);bindDirectiveInstance=v(Qe$1,{self:true});$pcTieredMenu=v(Ai,{optional:true,skipSelf:true})??void 0;$pcTieredMenuSub=v(Pi,{optional:true,skipSelf:true})??void 0;_visible=false;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]));}constructor(t,e,i){super(),this.el=t,this.renderer=e,this.tieredMenu=i;}positionSubmenu(t){Pi$1(this.tieredMenu.platformId)&&t&&Ii$1(t,this.level);}getItemProp(t,e,i=null){return t&&t.item?I(t.item[e],i):void 0}getItemId(t){return t.item?.id??`${this.menuId}_${t.key}`}getItemKey(t){return this.getItemId(t)}getItemLabel(t){return this.getItemProp(t,"label")}getAriaSetSize(){return this.items.filter(t=>this.isItemVisible(t)&&!this.getItemProp(t,"separator")).length}getAriaPosInset(t){return t-this.items.slice(0,t).filter(e=>{let i=this.isItemVisible(e),o=i&&this.getItemProp(e,"separator");return !i||o}).length+1}isItemVisible(t){return this.getItemProp(t,"visible")!==false}isItemActive(t){return this.activeItemPath()?this.activeItemPath().some(e=>e.key===t.key):false}isItemDisabled(t){return this.getItemProp(t,"disabled")}isItemFocused(t){return this.focusedItemId===this.getItemId(t)}isItemGroup(t){return ge$1(t.items)}_ptm(t,e){return this.$pcTieredMenu?this.$pcTieredMenu.ptm(t,e):this.ptm(t,e)}getPTOptions(t,e,i){return this._ptm(i,{context:{item:t.item,index:e,active:this.isItemActive(t),focused:this.isItemFocused(t),disabled:this.isItemDisabled(t)}})}onItemMouseEnter(t){if(this.autoDisplay){let{event:e,processedItem:i}=t;this.itemMouseEnter.emit({originalEvent:e,processedItem:i});}}onItemClick(t,e){this.getItemProp(e,"command",{originalEvent:t,item:e.item}),this.itemClick.emit({originalEvent:t,processedItem:e,isFocus:true});}onBeforeEnter(t){this.positionSubmenu(t.element);}onAfterLeave(){this.render.set(false);}static \u0275fac=function(e){return new(e||n)(_r(Cr),_r(RI),_r(Eo(()=>Wt)))};static \u0275cmp=NE({type:n,selectors:[["p-tieredMenuSub"],["p-tieredmenusub"]],viewQuery:function(e,i){if(e&1&&th(_n,5),e&2){let o;TD(o=CD())&&(i.sublistViewChild=o.first);}},inputs:{visible:"visible",items:"items",itemTemplate:"itemTemplate",root:[2,"root","root",s0],autoDisplay:[2,"autoDisplay","autoDisplay",s0],autoZIndex:[2,"autoZIndex","autoZIndex",s0],baseZIndex:[2,"baseZIndex","baseZIndex",a0],popup:[2,"popup","popup",s0],menuId:"menuId",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",level:[2,"level","level",a0],focusedItemId:"focusedItemId",activeItemPath:[1,"activeItemPath"],motionOptions:"motionOptions",tabindex:[2,"tabindex","tabindex",a0],inlineStyles:"inlineStyles"},outputs:{itemClick:"itemClick",itemMouseEnter:"itemMouseEnter",menuFocus:"menuFocus",menuBlur:"menuBlur",menuKeydown:"menuKeydown"},features:[lT([{provide:Pi,useExisting:Eo(()=>n)},{provide:Ie,useExisting:Eo(()=>n)}]),FE([Qe$1]),kp],decls:1,vars:1,consts:[["sublist",""],["listItem",""],["htmlLabel",""],["role","menu",3,"class","id","tabindex","pBind","style","pMotion","pMotionDisabled","pMotionAppear","pMotionName","pMotionOptions"],["role","menu",3,"keydown","focus","blur","pMotionOnBeforeEnter","pMotionOnAfterLeave","id","tabindex","pBind","pMotion","pMotionDisabled","pMotionAppear","pMotionName","pMotionOptions"],["ngFor","",3,"ngForOf"],["role","separator",3,"style","class","pBind",4,"ngIf"],["role","menuitem",3,"ngStyle","class","pBind","pTooltip","tooltipOptions","pTooltipUnstyled",4,"ngIf"],["role","separator",3,"pBind"],["role","menuitem",3,"ngStyle","pBind","pTooltip","tooltipOptions","pTooltipUnstyled"],[3,"click","mouseenter","pBind"],[4,"ngIf"],[3,"items","itemTemplate","autoDisplay","menuId","visible","activeItemPath","focusedItemId","ariaLabelledBy","level","pt","motionOptions","unstyled","itemClick","itemMouseEnter",4,"ngIf"],["pRipple","",3,"target","class","ngStyle","pBind",4,"ngIf"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","class","ngStyle","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind",4,"ngIf"],["pRipple","",3,"target","ngStyle","pBind"],[3,"class","ngStyle","pBind",4,"ngIf"],[3,"class","ngStyle","pBind",4,"ngIf","ngIfElse"],[3,"class",4,"ngIf"],[3,"ngStyle","pBind"],[3,"ngStyle","innerHTML","pBind"],["data-p-icon","angle-right",3,"class","pBind",4,"ngIf"],[4,"ngTemplateOutlet"],["data-p-icon","angle-right",3,"pBind"],[3,"aria-hidden"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","ngStyle","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"itemClick","itemMouseEnter","items","itemTemplate","autoDisplay","menuId","visible","activeItemPath","focusedItemId","ariaLabelledBy","level","pt","motionOptions","unstyled"]],template:function(e,i){e&1&&XE(0,Zn,3,17,"ul",3),e&2&&eD(i.render()?0:-1);},dependencies:[n,Gt,at,Bt,kt,Nt$1,sa,$t$1,ta,Ft$1,be,Di,Qe$1,Li,Gi$1,et,mt$1,vt],encapsulation:2,changeDetection:1})}return n})(),Wt=(()=>{class n extends $e$1{overlayService;componentName="TieredMenu";set model(t){this._model=t,this._processedItems=this.createProcessedItems(this._model||[]);}get model(){return this._model}popup;style;styleClass;breakpoint="960px";autoZIndex=true;baseZIndex=0;autoDisplay=true;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";id;ariaLabel;ariaLabelledBy;disabled=false;tabindex=0;appendTo=JF(void 0);motionOptions=JF(void 0);computedMotionOptions=DT(()=>D(D({},this.ptm("motion")),this.motionOptions()));onShow=new $e;onHide=new $e;rootmenu;containerViewChild;submenuIconTemplate;itemTemplate;templates;$appendTo=DT(()=>this.appendTo()||this.config.overlayAppendTo());render=Uo(false);container;outsideClickListener;resizeListener;scrollHandler;target;relatedTarget;visible;dirty=false;focused=false;activeItemPath=Uo([]);number=Uo(0);focusedItemInfo=Uo({index:-1,level:0,parentKey:"",item:null});searchValue="";searchTimeout;_processedItems;_model;_componentStyle=v(ve);bindDirectiveInstance=v(Qe$1,{self:true});matchMediaListener;query;queryMatches=Uo(false);_submenuIconTemplate;_itemTemplate;get visibleItems(){let t=this.activeItemPath().find(e=>e.key===this.focusedItemInfo().parentKey);return t?t.items:this.processedItems}get processedItems(){return (!this._processedItems||!this._processedItems.length)&&(this._processedItems=this.createProcessedItems(this.model||[])),this._processedItems}get focusedItemId(){let t=this.focusedItemInfo();return t.item?.id?t.item.id:t.index!==-1?`${this.id}${ge$1(t.parentKey)?"_"+t.parentKey:""}_${t.index}`:null}constructor(t){super(),this.overlayService=t,Qu(()=>{let e=this.activeItemPath();ge$1(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener());});}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]));}onInit(){this.bindMatchMediaListener(),this.id=this.id||me("pn_id_");}onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case "submenuicon":this._submenuIconTemplate=t.template;break;case "item":this._itemTemplate=t.template;break;default:this._itemTemplate=t.template;break}});}bindMatchMediaListener(){if(Pi$1(this.platformId)&&!this.matchMediaListener){let t=window.matchMedia(`(max-width: ${this.breakpoint})`);this.query=t,this.queryMatches.set(t.matches),this.matchMediaListener=()=>{this.queryMatches.set(t.matches);},t.addEventListener("change",this.matchMediaListener);}}unbindMatchMediaListener(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null);}createProcessedItems(t,e=0,i={},o=""){let r=[];return t&&t.forEach((k,G)=>{let Q=(o!==""?o+"_":"")+G,rt={item:k,index:G,level:e,key:Q,parent:i,parentKey:o};rt.items=this.createProcessedItems(k.items,e+1,rt,Q),r.push(rt);}),r}getItemProp(t,e){return t?I(t[e]):void 0}getProccessedItemLabel(t){return t?this.getItemLabel(t.item):void 0}getItemLabel(t){return this.getItemProp(t,"label")}isProcessedItemGroup(t){return t&&ge$1(t.items)}isSelected(t){return this.activeItemPath().some(e=>e.key===t.key)}isValidSelectedItem(t){return this.isValidItem(t)&&this.isSelected(t)}isValidItem(t){return !!t&&!this.isItemDisabled(t.item)&&!this.isItemSeparator(t.item)&&this.isItemVisible(t.item)}isItemDisabled(t){return this.getItemProp(t,"disabled")}isItemVisible(t){return this.getItemProp(t,"visible")!==false}isItemSeparator(t){return this.getItemProp(t,"separator")}isItemMatched(t){return this.isValidItem(t)&&this.getProccessedItemLabel(t).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isProccessedItemGroup(t){return t&&ge$1(t.items)}onOverlayClick(t){this.popup&&this.overlayService.add({originalEvent:t,target:this.el.nativeElement});}onItemClick(t){let{originalEvent:e,processedItem:i}=t,o=this.isProcessedItemGroup(i),r=Nt(i.parent);if(this.isSelected(i)){let{index:G,key:Q,level:rt,parentKey:qt,item:At}=i;this.activeItemPath.set(this.activeItemPath().filter(ft=>Q!==ft.key&&Q.startsWith(ft.key))),this.focusedItemInfo.set({index:G,level:rt,parentKey:qt,item:At}),this.dirty=true,Oi$1(this.rootmenu?.sublistViewChild?.nativeElement);}else if(o)this.onItemChange(t);else {let G=r?i:this.activeItemPath().find(Q=>Q.parentKey==="");this.hide(e),this.changeFocusedItemIndex(e,G?.index??-1),Oi$1(this.rootmenu?.sublistViewChild?.nativeElement);}}onItemMouseEnter(t){xi$1()?this.onItemChange({event:t,processedItem:t.processedItem,focus:this.autoDisplay},"hover"):this.dirty&&this.onItemChange(t,"hover");}onKeyDown(t){let e=t.metaKey||t.ctrlKey;switch(t.code){case "ArrowDown":this.onArrowDownKey(t);break;case "ArrowUp":this.onArrowUpKey(t);break;case "ArrowLeft":this.onArrowLeftKey(t);break;case "ArrowRight":this.onArrowRightKey(t);break;case "Home":this.onHomeKey(t);break;case "End":this.onEndKey(t);break;case "Space":this.onSpaceKey(t);break;case "Enter":this.onEnterKey(t);break;case "Escape":this.onEscapeKey(t);break;case "Tab":this.onTabKey(t);break;case "PageDown":case "PageUp":case "Backspace":case "ShiftLeft":case "ShiftRight":break;default:!e&&mi(t.key)&&this.searchItems(t,t.key);break}}onArrowDownKey(t){let e=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(t,e),t.preventDefault();}onArrowRightKey(t){let e=this.visibleItems[this.focusedItemInfo().index],i=this.isProccessedItemGroup(e),o=e?.item;i&&(this.onItemChange({originalEvent:t,processedItem:e}),this.focusedItemInfo.set({index:-1,parentKey:e.key,item:o}),this.searchValue="",this.onArrowDownKey(t)),t.preventDefault();}onArrowUpKey(t){if(t.altKey){if(this.focusedItemInfo().index!==-1){let e=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(e)&&this.onItemChange({originalEvent:t,processedItem:e});}this.popup&&this.hide(t,true),t.preventDefault();}else {let e=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(t,e),t.preventDefault();}}onArrowLeftKey(t){let e=this.visibleItems[this.focusedItemInfo().index];if(!e){t.preventDefault();return}let i=this.activeItemPath().find(k=>k.key===e.parentKey);Nt(e.parent)||(this.focusedItemInfo.set({index:-1,parentKey:i?i.parentKey:"",item:e.item}),this.searchValue="",this.onArrowDownKey(t));let r=this.activeItemPath().filter(k=>k.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(r),t.preventDefault();}onHomeKey(t){this.changeFocusedItemIndex(t,this.findFirstItemIndex()),t.preventDefault();}onEndKey(t){this.changeFocusedItemIndex(t,this.findLastItemIndex()),t.preventDefault();}onSpaceKey(t){this.onEnterKey(t);}onEscapeKey(t){this.hide(t,true),this.focusedItemInfo().index=this.findFirstFocusedItemIndex(),t.preventDefault();}onTabKey(t){if(this.focusedItemInfo().index!==-1){let e=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(e)&&this.onItemChange({originalEvent:t,processedItem:e});}this.hide();}onEnterKey(t){if(this.focusedItemInfo().index!==-1){let e=Ai$1(this.rootmenu?.el?.nativeElement,`li[id="${`${this.focusedItemId}`}"]`),i=e&&(Ai$1(e,'[data-pc-section="itemlink"]')||Ai$1(e,"a,button"));if(i?i.click():e&&e.click(),!this.popup){let o=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(o)&&(this.focusedItemInfo().index=this.findFirstFocusedItemIndex());}}t.preventDefault();}onItemChange(t,e){let{processedItem:i,isFocus:o}=t;if(Nt(i))return;let{index:r,key:k,level:G,parentKey:Q,items:rt,item:qt}=i,At=ge$1(rt),ft=this.activeItemPath().filter(xe=>xe.parentKey!==Q&&xe.parentKey!==k);At&&ft.push(i),this.focusedItemInfo.set({index:r,level:G,parentKey:Q,item:qt}),At&&(this.dirty=true),o&&Oi$1(this.rootmenu?.sublistViewChild?.nativeElement),!(e==="hover"&&this.queryMatches())&&this.activeItemPath.set(ft);}onMenuFocus(t){this.focused=true,this.focusedItemInfo().index===-1&&this.popup;}onMenuBlur(t){this.focused=false,this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),this.searchValue="",this.dirty=false;}onOverlayBeforeEnter(t){this.popup&&(this.container=t.element,Wt$1(this.container,{position:"absolute"}),this.moveOnTop(),this.onShow.emit({}),this.$attrSelector&&this.container?.setAttribute(this.$attrSelector,""),this.appendOverlay(),this.alignOverlay());}onOverlayAfterEnter(){this.popup&&(this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.scrollInView()),Oi$1(this.rootmenu?.sublistViewChild?.nativeElement);}onOverlayAfterLeave(){this.restoreOverlayAppend(),this.onOverlayHide(),this.render.set(false),this.onHide.emit({});}relativeAlign=false;alignOverlay(){this.container&&this.target&&(this.relativeAlign?bi(this.container,this.target):Si$1(this.container,this.target),Ht(this.target)>Ht(this.container)&&(this.container.style.minWidth=Ht(this.target)+"px"));}appendOverlay(){this.$appendTo()&&this.$appendTo()!=="self"&&(this.$appendTo()==="body"?Ei$1(this.document.body,this.container):Ei$1(this.$appendTo(),this.container));}restoreOverlayAppend(){this.container&&this.$appendTo()!=="self"&&Ei$1(this.el.nativeElement,this.container);}moveOnTop(){this.autoZIndex&&Ct.set("menu",this.container,this.baseZIndex+this.config.zIndex.menu);}hide(t,e){this.popup&&(this.onHide.emit({}),this.visible=false),this.activeItemPath.set([]),this.focusedItemInfo.set({index:-1,level:0,parentKey:""}),e&&Oi$1(this.relatedTarget||this.target||this.rootmenu?.sublistViewChild?.nativeElement),this.dirty=false;}toggle(t){this.visible?this.hide(t,true):this.show(t);}show(t,e){this.popup&&(this.visible=true,this.target=this.target||t.currentTarget,this.relatedTarget=t.relatedTarget||null,this.relativeAlign=t?.relativeAlign||null),this.render.set(true),this.focusedItemInfo.set({index:-1,level:0,parentKey:""}),e&&Oi$1(this.rootmenu?.sublistViewChild?.nativeElement),this.cd.markForCheck();}searchItems(t,e){this.searchValue=(this.searchValue||"")+e;let i=-1,o=false;return this.focusedItemInfo().index!==-1?(i=this.visibleItems.slice(this.focusedItemInfo().index).findIndex(r=>this.isItemMatched(r)),i=i===-1?this.visibleItems.slice(0,this.focusedItemInfo().index).findIndex(r=>this.isItemMatched(r)):i+this.focusedItemInfo().index):i=this.visibleItems.findIndex(r=>this.isItemMatched(r)),i!==-1&&(o=true),i===-1&&this.focusedItemInfo().index===-1&&(i=this.findFirstFocusedItemIndex()),i!==-1&&this.changeFocusedItemIndex(t,i),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null;},500),o}findLastFocusedItemIndex(){let t=this.findSelectedItemIndex();return t<0?this.findLastItemIndex():t}findLastItemIndex(){return di(this.visibleItems,t=>this.isValidItem(t))}findPrevItemIndex(t){let e=t>0?di(this.visibleItems.slice(0,t),i=>this.isValidItem(i)):-1;return e>-1?e:t}findNextItemIndex(t){let e=t<this.visibleItems.length-1?this.visibleItems.slice(t+1).findIndex(i=>this.isValidItem(i)):-1;return e>-1?e+t+1:t}findFirstFocusedItemIndex(){let t=this.findSelectedItemIndex();return t<0?this.findFirstItemIndex():t}findFirstItemIndex(){return this.visibleItems.findIndex(t=>this.isValidItem(t))}findSelectedItemIndex(){return this.visibleItems.findIndex(t=>this.isValidSelectedItem(t))}changeFocusedItemIndex(t,e){if(this.focusedItemInfo().index!==e){let i=this.focusedItemInfo();this.focusedItemInfo.set(R$1(D({},i),{item:this.visibleItems[e].item,index:e})),this.scrollInView();}}scrollInView(t=-1){let e=t!==-1?`${this.id}_${t}`:this.focusedItemId,i=Ai$1(this.rootmenu?.el?.nativeElement,`li[id="${e}"]`);i&&i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"nearest"});}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new _e$1(this.target,t=>{this.visible&&this.hide(t,true);})),this.scrollHandler.bindScrollListener();}unbindScrollListener(){this.scrollHandler&&(this.scrollHandler.unbindScrollListener(),this.scrollHandler=null);}bindResizeListener(){Pi$1(this.platformId)&&(this.resizeListener||(this.resizeListener=this.renderer.listen(this.document.defaultView,"resize",t=>{xi$1()||this.hide(t,true);})));}bindOutsideClickListener(){Pi$1(this.platformId)&&(this.outsideClickListener||(this.outsideClickListener=this.renderer.listen(this.document,"click",t=>{let e=this.containerViewChild&&!this.containerViewChild.nativeElement.contains(t.target),i=this.popup?!(this.target&&(this.target===t.target||this.target.contains(t.target))):true;e&&i&&this.hide();})));}unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null);}unbindResizeListener(){this.resizeListener&&(this.resizeListener(),this.resizeListener=null);}onOverlayHide(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.cd.destroyed||(this.target=null),this.container&&this.autoZIndex&&Ct.clear(this.container);}onDestroy(){this.popup&&(this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.restoreOverlayAppend(),this.onOverlayHide()),this.unbindMatchMediaListener();}static \u0275fac=function(e){return new(e||n)(_r(Bi))};static \u0275cmp=NE({type:n,selectors:[["p-tieredMenu"],["p-tieredmenu"],["p-tiered-menu"]],contentQueries:function(e,i,o){if(e&1&&eh(o,Un,4)(o,$n,4)(o,Vi$1,4),e&2){let r;TD(r=CD())&&(i.submenuIconTemplate=r.first),TD(r=CD())&&(i.itemTemplate=r.first),TD(r=CD())&&(i.templates=r);}},viewQuery:function(e,i){if(e&1&&th(Wn,5)(qn,5),e&2){let o;TD(o=CD())&&(i.rootmenu=o.first),TD(o=CD())&&(i.containerViewChild=o.first);}},inputs:{model:"model",popup:[2,"popup","popup",s0],style:"style",styleClass:"styleClass",breakpoint:"breakpoint",autoZIndex:[2,"autoZIndex","autoZIndex",s0],baseZIndex:[2,"baseZIndex","baseZIndex",a0],autoDisplay:[2,"autoDisplay","autoDisplay",s0],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",id:"id",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",disabled:[2,"disabled","disabled",s0],tabindex:[2,"tabindex","tabindex",a0],appendTo:[1,"appendTo"],motionOptions:[1,"motionOptions"]},outputs:{onShow:"onShow",onHide:"onHide"},features:[lT([ve,{provide:Ai,useExisting:n},{provide:Ie,useExisting:n}]),FE([Qe$1]),kp],decls:1,vars:1,consts:[["container",""],["rootmenu",""],[3,"id","class","ngStyle","pBind","pMotion","pMotionName","pMotionAppear","pMotionDisabled","pMotionOptions"],[3,"click","pMotionOnBeforeEnter","pMotionOnAfterEnter","pMotionOnAfterLeave","id","ngStyle","pBind","pMotion","pMotionName","pMotionAppear","pMotionDisabled","pMotionOptions"],[3,"itemClick","menuFocus","menuBlur","menuKeydown","itemMouseEnter","root","visible","items","itemTemplate","menuId","tabindex","ariaLabel","ariaLabelledBy","baseZIndex","autoZIndex","autoDisplay","popup","focusedItemId","activeItemPath","pt","unstyled","motionOptions"]],template:function(e,i){e&1&&XE(0,Gn,4,27,"div",2),e&2&&eD(i.render()||!i.popup?0:-1);},dependencies:[Gt,Nt$1,Jn,sa,be,Qe$1,Gi$1,et,mt$1,vt],encapsulation:2})}return n})(),Fi=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=SE({type:n});static \u0275inj=ru({imports:[Wt,Gi$1,Gi$1]})}return n})();var eo=()=>["/layout-pages/home"],io=()=>["fas","home"],no=()=>["/layout-pages/about-me"],oo=()=>["fas","person"],ro=()=>["/layout-pages/awards"],ao=()=>["fas","award"],so=()=>["/layout-pages/cv-on-dockerhub"],lo=()=>["fab","docker"],co=()=>["/layout-pages/view-dicom"],mo=()=>["fas","x-ray"],po=()=>["/layout-pages/android-apps"],ho=()=>["fab","android"],uo=()=>["fas","globe"],Aa=(()=>{class n{constructor(){this.sidenavClose=KF(),this.isWidthXs=false,this.menuItems=[],this.destroyRef=v(Qe),this.onSidenavClose=()=>{this.isWidthXs&&this.sidenavClose.emit();};let t=v(ae);this.mediaObserverAsObservable=t.asObservable().pipe(U(this.destroyRef)).subscribe(e=>{e[0]?.mqAlias==="xs"?this.isWidthXs=true:this.isWidthXs=false;});}ngOnInit(){this.menuItems=[{label:"Next.JS Aug.2025",icon:"pi pi-th-large",url:"https://nextjs-react-seed-main-app.vercel.app",target:"_blank"},{label:"Angular",styleclass:"side-menu-item-style",icon:"pi pi-box",items:[{label:"Features",icon:"pi pi-box",styleclass:"side-menu-item-style",items:[{label:"Signals",icon:"pi pi-book",styleclass:"side-menu-item-style",routerLink:"/angular-news-pages/angular-news-v16-signals"},{label:"@if @for",icon:"pi pi-book",styleclass:"side-menu-item-style"}]}]},{label:"Playground",icon:"pi pi-bolt",styleclass:"side-menu-item-style",items:[{label:"Acts",icon:"pi pi-bolt",styleclass:"side-menu-item-style",items:[{label:"Material",icon:"pi pi-book",styleclass:"side-menu-item-style",routerLink:"material-examples/components/material-examples-main"},{label:"Nested",icon:"pi pi-book",styleclass:"side-menu-item-style",routerLink:"playground/components/nested-example"},{label:"Wizard",icon:"pi pi-book",styleclass:"side-menu-item-style",routerLink:"playground/components/customizable-wizard"},{label:"Slide Toggle",icon:"pi pi-book",styleclass:"side-menu-item-style",routerLink:"playground/components/slide-toggle-example"},{label:"Labyrinth",icon:"pi pi-book",styleclass:"side-menu-item-style",routerLink:"playground/components/labyrinth-generator"},{label:"Mersenne",icon:"pi pi-book",styleclass:"side-menu-item-style",routerLink:"playground/components/mersenne"},{label:"Learning Check",icon:"pi pi-book",styleclass:"side-menu-item-style",routerLink:"playground/components/learning-check"}]}]},{label:"Numbers",icon:"pi pi-th-large",routerLink:"/digits/digits-game"}];}static{this.\u0275fac=function(e){return new(e||n)};}static{this.\u0275cmp=NE({type:n,selectors:[["app-sidenav-list"]],outputs:{sidenavClose:"sidenavClose"},decls:32,vars:27,consts:[[1,"side-nav-layout"],[1,"mat-side-nav-style"],["mat-list-item","",3,"click","routerLink"],[3,"icon"],[1,"nav-caption"],["mat-list-item","","href","https://lkovari.github.io/KLHome",3,"click"],[1,"bottom-menu-section"],["styleClass","slide-menu-style",3,"model"]],template:function(e,i){e&1&&(Ti$1(0,"div",0)(1,"mat-nav-list",1)(2,"a",2),Kp("click",function(){return i.onSidenavClose()}),$p(3,"fa-icon",3),Ti$1(4,"span",4),YD(5,"Home"),zc()(),Ti$1(6,"a",2),Kp("click",function(){return i.onSidenavClose()}),$p(7,"fa-icon",3),Ti$1(8,"span",4),YD(9,"About Me"),zc()(),Ti$1(10,"a",2),Kp("click",function(){return i.onSidenavClose()}),$p(11,"fa-icon",3),Ti$1(12,"span",4),YD(13,"Awards"),zc()(),Ti$1(14,"a",2),Kp("click",function(){return i.onSidenavClose()}),$p(15,"fa-icon",3),Ti$1(16,"span",4),YD(17,"CV on Dockerhub"),zc()(),Ti$1(18,"a",2),Kp("click",function(){return i.onSidenavClose()}),$p(19,"fa-icon",3),Ti$1(20,"span",4),YD(21,"View DICOM"),zc()(),Ti$1(22,"a",2),Kp("click",function(){return i.onSidenavClose()}),$p(23,"fa-icon",3),Ti$1(24,"span",4),YD(25,"Android Apps"),zc()(),Ti$1(26,"a",5),Kp("click",function(){return i.onSidenavClose()}),$p(27,"fa-icon",3),Ti$1(28,"span",4),YD(29,"Tech Stack & Codes"),zc()()(),Ti$1(30,"div",6),$p(31,"p-tieredmenu",7),zc()()),e&2&&(Yv(2),Bp("routerLink",uT(14,eo)),Yv(),Bp("icon",uT(15,io)),Yv(3),Bp("routerLink",uT(16,no)),Yv(),Bp("icon",uT(17,oo)),Yv(3),Bp("routerLink",uT(18,ro)),Yv(),Bp("icon",uT(19,ao)),Yv(3),Bp("routerLink",uT(20,so)),Yv(),Bp("icon",uT(21,lo)),Yv(3),Bp("routerLink",uT(22,co)),Yv(),Bp("icon",uT(23,mo)),Yv(3),Bp("routerLink",uT(24,po)),Yv(),Bp("icon",uT(25,ho)),Yv(4),Bp("icon",uT(26,uo)),Yv(4),Bp("model",i.menuItems));},dependencies:[Mi,Ci,$t$1,ks,Fi,Wt],styles:[".side-nav-layout[_ngcontent-%COMP%]   .mat-side-nav-style[_ngcontent-%COMP%]   .layout-content[_ngcontent-%COMP%]{height:40rem}.side-nav-layout[_ngcontent-%COMP%]   .mat-side-nav-style[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%] {height:40rem}.side-nav-layout[_ngcontent-%COMP%]   .mat-side-nav-style[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#fff}.side-nav-layout[_ngcontent-%COMP%]   .mat-side-nav-style[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .side-nav-layout[_ngcontent-%COMP%]   .mat-side-nav-style[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active{color:#d3d3d3}.side-nav-layout[_ngcontent-%COMP%]   .mat-side-nav-style[_ngcontent-%COMP%]   .nav-caption[_ngcontent-%COMP%]{display:inline-block;padding-left:.375rem}.side-nav-layout[_ngcontent-%COMP%]   .bottom-menu-section[_ngcontent-%COMP%]{position:fixed}.side-nav-layout[_ngcontent-%COMP%]   .bottom-menu-section[_ngcontent-%COMP%]   p-slidemenu[_ngcontent-%COMP%]  .p-slidemenu ol, .side-nav-layout[_ngcontent-%COMP%]   .bottom-menu-section[_ngcontent-%COMP%]   p-slidemenu[_ngcontent-%COMP%]  .p-slidemenu ul{padding-left:0!important}.side-nav-layout[_ngcontent-%COMP%]   .bottom-menu-section[_ngcontent-%COMP%]   p-slidemenu[_ngcontent-%COMP%]  .p-slidemenu{width:15.5rem;border:none}"],changeDetection:1});}}return n})();
export{Aa as A,Fo as F,Ki as K,ki as k,or as o,xi as x,zo as z};