import {C as Ct,m as mt,v as vt,F as Ft}from'./chunk-q84bFbDX.js';import {$ as $e$2,Q as Qe$1,m as me,_ as _e,e as et,I as Ie$1,b as bt}from'./chunk-B7COiCS1.js';import {w as wt,K,z}from'./chunk-CbUHgRgf.js';import {d,p as pi,C as Ce$1,G,B as Bi,Q as Qt,$ as $e$1,y as ye$1,A as Ai,a as A,T as Ti,S as St,b as $,I as Ii$1,_ as _$1}from'./chunk-D34p89FJ.js';import {E as Et$1}from'./chunk-DCPbDEwf.js';import {v as v$1}from'./chunk-Chyz4eT1.js';import {a,n as n$1,c,m as m$1,u as u$1}from'./chunk-CIhzwyCH.js';import {w as wE,bc as mD,f as zc,bd as yD,Q as Qc,v,au as Dr,aF as Bo$1,ac as FD,l as ch,ai as Xp,ag as ID,ah as ED,be as b,$ as $t,aA as zt,D as Di,z as zD,G as Gc,aB as cT,B as Bp,h as YE,b as zv,H as Hp,i as iT,K as Kc,aD as dT,j as KE,ak as ly,a3 as Rp,ad as oT,V as Vp,L as ah,aO as ZF,s as ze,U,bf as ks$1,Y as Yp,aS as Q,a2 as Ee,bg as ji,bh as SI,aJ as ie$1,bi as $g,am as M,_ as t$1,bj as Cv,al as SE,bk as t0,bl as ai$1,X as Be,bm as Hg,b7 as gg,bn as _g,af as eh,a as aD,k as hD,x as $o$1,bo as Hn$1,az as Ne,bp as rs$1,bq as Xt,R as ME,S as nu,W as Gi,e as YF,u as mT,ar as ge,y as zu,aH as Pi,br as I,aK as Nt,bs as Oi,bt as xi,bu as mi$1,bv as Ai$1,bw as Wt,bx as bi,by as Si,bz as Ht$1,bA as Ei,bB as di$1,Z as u,a1 as Mr,bC as Bi$1,a5 as i0,a4 as o0,a6 as Gt,aa as Nt$1,bD as sa,ae as OE,aj as Vi,bE as Ag,b4 as Jp,m as mh,bF as mr,bG as _,bH as Sg,b6 as ig,bI as Wt$1,bJ as Nr,bK as He,bL as Nm,bM as ce,bN as W,an as ct,ao as re,bO as Ii,aq as vo$1,aM as at,a8 as Bt,a9 as kt,bP as ta,M as Mu,N as Nu,bQ as wn$1,bR as a0,bS as Dt$1,bT as Ci,bU as Ti$1,bV as Mt,bW as kt$1,bX as zt$1,bY as ve$1,bZ as Fi,ap as ju,o as $p,ab as Op,aN as LD,a_ as sT,as as Zc,at as Vi$1,aT,b_ as fT,T as TD,b$ as rv,c0 as jp,q as Nf}from'./main-ANYPODG4.js';import {E}from'./chunk-Cu87rD5C.js';import {a as ae}from'./chunk-CVuu5wvx.js';import {m}from'./chunk-BTzbiZai.js';var Yn=20,Ht=(()=>{class n{_ngZone=v(Q);_platform=v(d);_renderer=v(mr).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new ie$1;_scrolledCount=0;scrollContainers=new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)));}deregister(t){let e=this.scrollContainers.get(t);e&&(e.unsubscribe(),this.scrollContainers.delete(t));}scrolled(t=Yn){return this._platform.isBrowser?new _(e=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let i=t>0?this._scrolled.pipe(Sg(t)).subscribe(e):this._scrolled.subscribe(e);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0);}}):ig()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,e)=>this.deregister(e)),this._scrolled.complete();}ancestorScrolled(t,e){let i=this.getAncestorScrollContainers(t);return this.scrolled(e).pipe(Hn$1(s=>!s||i.indexOf(s)>-1))}getAncestorScrollContainers(t){let e=[];return this.scrollContainers.forEach((i,s)=>{this._targetContainsElement(s,t)&&e.push(s);}),e}_targetContainsElement(t,e){let i=c(e),s=t.getElementRef().nativeElement;do if(i==s)return  true;while(i=i.parentElement);return  false}static \u0275fac=function(e){return new(e||n)};static \u0275prov=Wt$1({token:n,factory:n.\u0275fac})}return n})(),Et=(()=>{class n{elementRef=v(Dr);scrollDispatcher=v(Ht);ngZone=v(Q);dir=v(m,{optional:true});_scrollElement=this.elementRef.nativeElement;_destroyed=new ie$1;_renderer=v(SI);_cleanupScroll;_elementScrolled=new ie$1;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",t=>this._elementScrolled.next(t))),this.scrollDispatcher.register(this);}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete();}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(t){let e=this.elementRef.nativeElement,i=this.dir&&this.dir.value=="rtl";t.left==null&&(t.left=i?t.end:t.start),t.right==null&&(t.right=i?t.start:t.end),t.bottom!=null&&(t.top=e.scrollHeight-e.clientHeight-t.bottom),i&&Ai()!=A.NORMAL?(t.left!=null&&(t.right=e.scrollWidth-e.clientWidth-t.left),Ai()==A.INVERTED?t.left=t.right:Ai()==A.NEGATED&&(t.left=t.right?-t.right:t.right)):t.right!=null&&(t.left=e.scrollWidth-e.clientWidth-t.right),this._applyScrollToOptions(t);}_applyScrollToOptions(t){let e=this.elementRef.nativeElement;Ti()?e.scrollTo(t):(t.top!=null&&(e.scrollTop=t.top),t.left!=null&&(e.scrollLeft=t.left));}measureScrollOffset(t){let e="left",i="right",s=this.elementRef.nativeElement;if(t=="top")return s.scrollTop;if(t=="bottom")return s.scrollHeight-s.clientHeight-s.scrollTop;let r=this.dir&&this.dir.value=="rtl";return t=="start"?t=r?i:e:t=="end"&&(t=r?e:i),r&&Ai()==A.INVERTED?t==e?s.scrollWidth-s.clientWidth-s.scrollLeft:s.scrollLeft:r&&Ai()==A.NEGATED?t==e?s.scrollLeft+s.scrollWidth-s.clientWidth:-s.scrollLeft:t==e?s.scrollLeft:s.scrollWidth-s.clientWidth-s.scrollLeft}static \u0275fac=function(e){return new(e||n)};static \u0275dir=SE({type:n,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return n})(),Xn=20,jt=(()=>{class n{_platform=v(d);_listeners;_viewportSize=null;_change=new ie$1;_document=v(Bo$1);constructor(){let t=v(Q),e=v(mr).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let i=s=>this._change.next(s);this._listeners=[e.listen("window","resize",i),e.listen("window","orientationchange",i)];}this.change().subscribe(()=>this._viewportSize=null);});}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete();}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:e,height:i}=this.getViewportSize();return {top:t.top,left:t.left,bottom:t.top+i,right:t.left+e,height:i,width:e}}getViewportScrollPosition(){if(!this._platform.isBrowser)return {top:0,left:0};let t=this._document,e=this._getWindow(),i=t.documentElement,s=i.getBoundingClientRect(),r=-s.top||t.body?.scrollTop||e.scrollY||i.scrollTop||0,l=-s.left||t.body?.scrollLeft||e.scrollX||i.scrollLeft||0;return {top:r,left:l}}change(t=Xn){return t>0?this._change.pipe(Sg(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0};}static \u0275fac=function(e){return new(e||n)};static \u0275prov=Wt$1({token:n,factory:n.\u0275fac})}return n})();var ve=["*"],Un=["content"],fn=[[["mat-drawer"],["mat-sidenav"]],[["mat-drawer-content"],["mat-sidenav-content"]],"*"],gn=["mat-drawer, mat-sidenav","mat-drawer-content, mat-sidenav-content","*"];function Gn(n,o){if(n&1){let t=aD();Di(0,"div",1),Yp("click",function(){Mu(t);let i=hD();return Nu(i._onBackdropClicked())}),Gc();}if(n&2){let t=hD();ch("mat-drawer-shown",t._isShowingBackdrop());}}function Kn(n,o){n&1&&(Di(0,"mat-drawer-content"),yD(1,2),Gc());}function $n(n,o){if(n&1){let t=aD();Di(0,"div",1),Yp("click",function(){Mu(t);let i=hD();return Nu(i._onBackdropClicked())}),Gc();}if(n&2){let t=hD();ch("mat-drawer-shown",t._isShowingBackdrop());}}function Qn(n,o){n&1&&(Di(0,"mat-sidenav-content"),yD(1,2),Gc());}var qn=`.mat-drawer-container {
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
`;var Jn=new M("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>false}),Je=new M("MAT_DRAWER_CONTAINER"),ee=(()=>{class n extends Et{_platform=v(d);_changeDetectorRef=v(t0);_element=v(Dr);_ngZone=v(Q);_isInert=false;_container=v(Qe);ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>this._changeDetectorRef.markForCheck());}_drawerToggled(t){t.opened?this._ngZone.runOutsideAngular(()=>{t._animationEnd.pipe(Ag(50),Xt(1)).subscribe(()=>this._updateInert());}):this._updateInert();}_updateInert(){let t=this._container._isShowingBackdrop();if(t!==this._isInert){let e=this._element.nativeElement;this._isInert=t,t?e.setAttribute("inert","true"):e.removeAttribute("inert");}}_shouldBeHidden(){if(this._platform.isBrowser)return  false;let{start:t,end:e}=this._container;return t!=null&&t.mode!=="over"&&t.opened||e!=null&&e.mode!=="over"&&e.opened}static \u0275fac=(()=>{let t;return function(i){return (t||(t=ly(n)))(i||n)}})();static \u0275cmp=wE({type:n,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(e,i){e&2&&(ah("margin-left",i._container._contentMargins.left,"px")("margin-right",i._container._contentMargins.right,"px"),ch("mat-drawer-content-hidden",i._shouldBeHidden()));},features:[oT([{provide:Et,useExisting:n}]),Rp],ngContentSelectors:ve,decls:1,vars:0,template:function(e,i){e&1&&(mD(),yD(0));},encapsulation:2})}return n})(),$e=(()=>{class n{_elementRef=v(Dr);_focusTrapFactory=v($e$1);_focusMonitor=v(Ce$1);_platform=v(d);_ngZone=v(Q);_renderer=v(SI);_interactivityChecker=v(ye$1);_doc=v(Bo$1);_container=v(Je,{optional:true});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=false;_anchor=null;get position(){return this._position}set position(t){t=t==="end"?"end":"start",t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit());}_position="start";get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next();}_mode="over";get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=a(t);}_disableClose=false;get autoFocus(){let t=this._autoFocus;return t??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(t){(t==="true"||t==="false"||t==null)&&(t=a(t)),this._autoFocus=t;}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(a(t));}_opened=$o$1(false);_openedVia=null;_animationStarted=new ie$1;_animationEnd=new ie$1;openedChange=new Be(true);_openedStream=this.openedChange.pipe(Hn$1(t=>t),Ne(()=>{}));openedStart=this._animationStarted.pipe(Hn$1(()=>this.opened),rs$1(void 0));_closedStream=this.openedChange.pipe(Hn$1(t=>!t),Ne(()=>{}));closedStart=this._animationStarted.pipe(Hn$1(()=>!this.opened),rs$1(void 0));_destroyed=new ie$1;onPositionChanged=new Be;_content;_modeChanged=new ie$1;_injector=v(Ee);_changeDetectorRef=v(t0);constructor(){this.openedChange.pipe($g(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program");}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,e=this._elementRef.nativeElement;return [t.listen(e,"keydown",i=>{i.keyCode===27&&!this.disableClose&&!Qt(i)&&this._ngZone.run(()=>{this.close(),i.stopPropagation(),i.preventDefault();});}),t.listen(e,"transitionend",this._handleTransitionEvent),t.listen(e,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened);});}_focusByCssSelector(t,e){let i=this._elementRef.nativeElement.querySelector(t);i&&(this._interactivityChecker.isFocusable(i)||(i.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let s=()=>{r(),l(),i.removeAttribute("tabindex");},r=this._renderer.listen(i,"blur",s),l=this._renderer.listen(i,"mousedown",s);})),i.focus(e));}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case  false:case "dialog":return;case  true:case "first-tabbable":Cv(()=>{!this._focusTrap.focusInitialElement()&&typeof t.focus=="function"&&t.focus();},{injector:this._injector});break;case "first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(t){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null);}_isFocusWithinDrawer(){let t=this._doc.activeElement;return !!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=true,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState());}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete();}open(t){return this.toggle(true,t)}close(){return this.toggle(false)}_closeViaBackdropClick(){return this._setOpen(false,true,"mouse")}toggle(t=!this.opened,e){t&&e&&(this._openedVia=e);let i=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||"program");return t||(this._openedVia=null),i}_setOpen(t,e,i){return t===this.opened?Promise.resolve(t?"open":"close"):(this._opened.set(t),(this._container?._content||this._container?._userContent)?._drawerToggled(this),this._container?._transitionsEnabled?(this._setIsAnimating(true),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next();}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",t),!t&&e&&this._restoreFocus(i),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(s=>{this.openedChange.pipe(Xt(1)).subscribe(r=>s(r?"open":"close"));}))}_setIsAnimating(t){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",t);}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop());}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let e=this._elementRef.nativeElement,i=e.parentNode;t==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),i.insertBefore(this._anchor,e)),i.appendChild(e)):this._anchor&&this._anchor.parentNode.insertBefore(e,this._anchor);}_handleTransitionEvent=t=>{let e=this._elementRef.nativeElement;t.target===e&&this._ngZone.run(()=>{t.type==="transitionend"&&this._setIsAnimating(false),this._animationEnd.next(t);});};static \u0275fac=function(e){return new(e||n)};static \u0275cmp=wE({type:n,selectors:[["mat-drawer"]],viewQuery:function(e,i){if(e&1&&eh(Un,5),e&2){let s;ID(s=ED())&&(i._content=s.first);}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(e,i){e&2&&(Vp("align",null)("tabIndex",i.mode!=="side"?"-1":null),ah("visibility",!i._container&&!i.opened?"hidden":null),ch("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side"));},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:ve,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,i){e&1&&(mD(),Di(0,"div",1,0),yD(2),Gc());},dependencies:[Et],encapsulation:2})}return n})(),Qe=(()=>{class n{_dir=v(m,{optional:true});_element=v(Dr);_ngZone=v(Q);_changeDetectorRef=v(t0);_animationDisabled=Bi();_transitionsEnabled=false;_allDrawers;_drawers=new ai$1;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=a(t);}_autosize=v(Jn);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:a(t);}_backdropOverride=null;backdropClick=new Be;_start=null;_end=null;_left=null;_right=null;_destroyed=new ie$1;_doCheckSubject=new ie$1;_contentMargins={left:null,right:null};_contentMarginChanges=new ie$1;get scrollable(){return this._userContent||this._content}_injector=v(Ee);constructor(){let t=v(d),e=v(jt);this._dir?.change.pipe($g(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins();}),e.change().pipe($g(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=true;},200);});}ngAfterContentInit(){this._allDrawers.changes.pipe(Hg(this._allDrawers),$g(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(e=>!e._container||e._container===this)),this._drawers.notifyOnChanges();}),this._drawers.changes.pipe(Hg(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t);}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck();}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(gg(10),$g(this._destroyed)).subscribe(()=>this.updateContentMargins());});}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete();}open(){this._drawers.forEach(t=>t.open());}close(){this._drawers.forEach(t=>t.close());}updateContentMargins(){let t=0,e=0;if(this._left&&this._left.opened){if(this._left.mode=="side")t+=this._left._getWidth();else if(this._left.mode=="push"){let i=this._left._getWidth();t+=i,e-=i;}}if(this._right&&this._right.opened){if(this._right.mode=="side")e+=this._right._getWidth();else if(this._right.mode=="push"){let i=this._right._getWidth();e+=i,t-=i;}}t=t||null,e=e||null,(t!==this._contentMargins.left||e!==this._contentMargins.right)&&(this._contentMargins={left:t,right:e},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)));}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next());}_watchDrawerToggle(t){t._animationStarted.pipe($g(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck();}),t.mode!=="side"&&t.openedChange.pipe($g(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened));}_watchDrawerPosition(t){t.onPositionChanged.pipe($g(this._drawers.changes)).subscribe(()=>{Cv({read:()=>this._validateDrawers()},{injector:this._injector});});}_watchDrawerMode(t){t._modeChanged.pipe($g(_g(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck();});}_setContainerClass(t){let e=this._element.nativeElement.classList,i="mat-drawer-container-has-open";t?e.add(i):e.remove(i);}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position=="end"?(this._end!=null,this._end=t):(this._start!=null,this._start=t);}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end);}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop();}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick());}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!=="side":this._backdropOverride}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=wE({type:n,selectors:[["mat-drawer-container"]],contentQueries:function(e,i,s){if(e&1&&Xp(s,ee,5)(s,$e,5),e&2){let r;ID(r=ED())&&(i._content=r.first),ID(r=ED())&&(i._allDrawers=r);}},viewQuery:function(e,i){if(e&1&&eh(ee,5),e&2){let s;ID(s=ED())&&(i._userContent=s.first);}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(e,i){e&2&&ch("mat-drawer-container-explicit-backdrop",i._backdropOverride);},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[oT([{provide:Je,useExisting:n}])],ngContentSelectors:gn,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,i){e&1&&(mD(fn),YE(0,Gn,1,2,"div",0),yD(1),yD(2,1),YE(3,Kn,2,0,"mat-drawer-content")),e&2&&(KE(i.hasBackdrop?0:-1),zv(3),KE(i._content?-1:3));},dependencies:[ee],styles:[`.mat-drawer-container {
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
`],encapsulation:2})}return n})(),_n=(()=>{class n extends ee{static \u0275fac=(()=>{let t;return function(i){return (t||(t=ly(n)))(i||n)}})();static \u0275cmp=wE({type:n,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[oT([{provide:Et,useExisting:n},{provide:ee,useExisting:n}]),Rp],ngContentSelectors:ve,decls:1,vars:0,template:function(e,i){e&1&&(mD(),yD(0));},encapsulation:2})}return n})(),to=(()=>{class n extends $e{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(t){this._fixedInViewport=a(t);}_fixedInViewport=false;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(t){this._fixedTopGap=n$1(t);}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(t){this._fixedBottomGap=n$1(t);}_fixedBottomGap=0;static \u0275fac=(()=>{let t;return function(i){return (t||(t=ly(n)))(i||n)}})();static \u0275cmp=wE({type:n,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(e,i){e&2&&(Vp("tabIndex",i.mode!=="side"?"-1":null)("align",null),ah("top",i.fixedInViewport?i.fixedTopGap:null,"px")("bottom",i.fixedInViewport?i.fixedBottomGap:null,"px"),ch("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side")("mat-sidenav-fixed",i.fixedInViewport));},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[oT([{provide:$e,useExisting:n}]),Rp],ngContentSelectors:ve,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,i){e&1&&(mD(),Di(0,"div",1,0),yD(2),Gc());},dependencies:[Et],encapsulation:2})}return n})(),br=(()=>{class n extends Qe{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let t;return function(i){return (t||(t=ly(n)))(i||n)}})();static \u0275cmp=wE({type:n,selectors:[["mat-sidenav-container"]],contentQueries:function(e,i,s){if(e&1&&Xp(s,_n,5)(s,to,5),e&2){let r;ID(r=ED())&&(i._content=r.first),ID(r=ED())&&(i._allDrawers=r);}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(e,i){e&2&&ch("mat-drawer-container-explicit-backdrop",i._backdropOverride);},exportAs:["matSidenavContainer"],features:[oT([{provide:Je,useExisting:n},{provide:Qe,useExisting:n}]),Rp],ngContentSelectors:gn,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,i){e&1&&(mD(fn),YE(0,$n,1,2,"div",0),yD(1),yD(2,1),YE(3,Qn,2,0,"mat-sidenav-content")),e&2&&(KE(i.hasBackdrop?0:-1),zv(3),KE(i._content?-1:3));},dependencies:[_n],styles:[qn],encapsulation:2})}return n})();var eo=["*"],wr=(()=>{class n{constructor(){}static{this.\u0275fac=function(e){return new(e||n)};}static{this.\u0275cmp=wE({type:n,selectors:[["app-layout-content"]],ngContentSelectors:eo,decls:3,vars:0,consts:[["fxLayout","row wrap","fxLayoutAlign","center center",1,"layout-wrapper"],["fxFlex","80%","fxFlex.lt-md","100%",1,"flex-wrapper"]],template:function(e,i){e&1&&(mD(),zc(0,"div",0)(1,"div",1),yD(2),Qc()());},styles:[".layout-wrapper[_ngcontent-%COMP%], .flex-wrapper[_ngcontent-%COMP%]{height:100%}"],changeDetection:1});}}return n})();var io=["*",[["mat-toolbar-row"]]],no=["*","mat-toolbar-row"],oo=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=SE({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),vn=(()=>{class n{_elementRef=v(Dr);_platform=v(d);_document=v(Bo$1);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()));}_checkToolbarMixedModes(){this._toolbarRows.length;}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=wE({type:n,selectors:[["mat-toolbar"]],contentQueries:function(e,i,s){if(e&1&&Xp(s,oo,5),e&2){let r;ID(r=ED())&&(i._toolbarRows=r);}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(e,i){e&2&&(FD(i.color?"mat-"+i.color:""),ch("mat-toolbar-multiple-rows",i._toolbarRows.length>0)("mat-toolbar-single-row",i._toolbarRows.length===0));},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:no,decls:2,vars:0,template:function(e,i){e&1&&(mD(io),yD(0),yD(1,1));},styles:[`.mat-toolbar {
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
`],encapsulation:2})}return n})();var ie=class{_attachedHost=null;attach(o){return this._attachedHost=o,o.attach(this)}detach(){let o=this._attachedHost;o!=null&&(this._attachedHost=null,o.detach());}get isAttached(){return this._attachedHost!=null}setAttachedHost(o){this._attachedHost=o;}},ne=class extends ie{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(o,t,e,i,s,r){super(),this.component=o,this.viewContainerRef=t,this.injector=e,this.projectableNodes=i,this.bindings=s||null,this.directives=r||null;}},be=class extends ie{templateRef;viewContainerRef;context;injector;constructor(o,t,e,i){super(),this.templateRef=o,this.viewContainerRef=t,this.context=e,this.injector=i;}get origin(){return this.templateRef.elementRef}attach(o,t=this.context){return this.context=t,super.attach(o)}detach(){return this.context=void 0,super.detach()}},ti=class extends ie{element;constructor(o){super(),this.element=o instanceof Dr?o.nativeElement:o;}},ei=class{_attachedPortal=null;_disposeFn=null;_isDisposed=false;hasAttached(){return !!this._attachedPortal}attach(o){if(o instanceof ne)return this._attachedPortal=o,this.attachComponentPortal(o);if(o instanceof be)return this._attachedPortal=o,this.attachTemplatePortal(o);if(this.attachDomPortal&&o instanceof ti)return this._attachedPortal=o,this.attachDomPortal(o)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn();}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=true;}setDisposeFn(o){this._disposeFn=o;}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null);}},ye=class extends ei{outletElement;_appRef;_defaultInjector;constructor(o,t,e){super(),this.outletElement=o,this._appRef=t,this._defaultInjector=e;}attachComponentPortal(o){let t;if(o.viewContainerRef){let e=o.injector||o.viewContainerRef.injector,i=e.get(wn$1,null,{optional:true})||void 0;t=o.viewContainerRef.createComponent(o.component,{index:o.viewContainerRef.length,injector:e,ngModuleRef:i,projectableNodes:o.projectableNodes||void 0,bindings:o.bindings||void 0,directives:o.directives||void 0}),this.setDisposeFn(()=>t.destroy());}else {let e=this._appRef,i=o.injector||this._defaultInjector||Ee.NULL,s=i.get(ce,e.injector);t=a0(o.component,{elementInjector:i,environmentInjector:s,projectableNodes:o.projectableNodes||void 0,bindings:o.bindings||void 0,directives:o.directives||void 0}),e.attachView(t.hostView),this.setDisposeFn(()=>{e.viewCount>0&&e.detachView(t.hostView),t.destroy();});}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=o,t}attachTemplatePortal(o){let t=o.viewContainerRef,e=t.createEmbeddedView(o.templateRef,o.context,{injector:o.injector});return e.rootNodes.forEach(i=>this.outletElement.appendChild(i)),e.detectChanges(),this.setDisposeFn(()=>{let i=t.indexOf(e);i!==-1&&t.remove(i);}),this._attachedPortal=o,e}attachDomPortal=o=>{let t=o.element;t.parentNode;let e=this.outletElement.ownerDocument.createComment("dom-portal");t.parentNode.insertBefore(e,t),this.outletElement.appendChild(t),this._attachedPortal=o,super.setDisposeFn(()=>{e.parentNode&&e.parentNode.replaceChild(t,e);});};dispose(){super.dispose(),this.outletElement.remove();}_getComponentRootNode(o){return o.hostView.rootNodes[0]}};var we=class{enable(){}disable(){}attach(){}};function ii(n,o){return o.some(t=>{let e=n.bottom<t.top,i=n.top>t.bottom,s=n.right<t.left,r=n.left>t.right;return e||i||s||r})}function bn(n,o){return o.some(t=>{let e=n.top<t.top,i=n.bottom>t.bottom,s=n.left<t.left,r=n.right>t.right;return e||i||s||r})}function oi(n,o){return new xe(n.get(Ht),n.get(jt),n.get(Q),o)}var xe=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(o,t,e,i){this._scrollDispatcher=o,this._viewportRuler=t,this._ngZone=e,this._config=i;}attach(o){this._overlayRef,this._overlayRef=o;}enable(){if(!this._scrollSubscription){let o=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(o).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:e,height:i}=this._viewportRuler.getViewportSize();ii(t,[{width:e,height:i,bottom:i,right:e,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()));}});}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null);}detach(){this.disable(),this._overlayRef=null;}};var ke=class{positionStrategy;scrollStrategy=new we;panelClass="";hasBackdrop=false;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=false;usePopover;eventPredicate;constructor(o){if(o){let t=Object.keys(o);for(let e of t)o[e]!==void 0&&(this[e]=o[e]);}}};var Ce=class{connectionPair;scrollableViewProperties;constructor(o,t){this.connectionPair=o,this.scrollableViewProperties=t;}};var Cn=(()=>{class n{_attachedOverlays=[];_document=v(Bo$1);_isAttached=false;ngOnDestroy(){this.detach();}add(t){this.remove(t),this._attachedOverlays.push(t);}remove(t){let e=this._attachedOverlays.indexOf(t);e>-1&&this._attachedOverlays.splice(e,1),this._attachedOverlays.length===0&&this.detach();}canReceiveEvent(t,e,i){return i.observers.length<1?false:t.eventPredicate?t.eventPredicate(e):true}static \u0275fac=function(e){return new(e||n)};static \u0275prov=Wt$1({token:n,factory:n.\u0275fac})}return n})(),In=(()=>{class n extends Cn{_ngZone=v(Q);_renderer=v(mr).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener);}),this._isAttached=true);}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=false);}_keydownListener=t=>{let e=this._attachedOverlays;for(let i=e.length-1;i>-1;i--){let s=e[i];if(this.canReceiveEvent(s,t,s._keydownEvents)){this._ngZone.run(()=>s._keydownEvents.next(t));break}}};static \u0275fac=function(e){return new(e||n)};static \u0275prov=Wt$1({token:n,factory:n.\u0275fac})}return n})(),Sn=(()=>{class n extends Cn{_platform=v(d);_ngZone=v(Q);_renderer=v(mr).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=false;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let e=this._document.body,i={capture:true},s=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[s.listen(e,"pointerdown",this._pointerDownListener,i),s.listen(e,"click",this._clickListener,i),s.listen(e,"auxclick",this._clickListener,i),s.listen(e,"contextmenu",this._clickListener,i)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=e.style.cursor,e.style.cursor="pointer",this._cursorStyleIsSet=true),this._isAttached=true;}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=false),this._isAttached=false);}_pointerDownListener=t=>{this._pointerDownEventTarget=_$1(t);};_clickListener=t=>{let e=_$1(t),i=t.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:e;this._pointerDownEventTarget=null;let s=this._attachedOverlays.slice();for(let r=s.length-1;r>-1;r--){let l=s[r],h=l._outsidePointerEvents;if(!(!l.hasAttached()||!this.canReceiveEvent(l,t,h))){if(yn(l.overlayElement,e)||yn(l.overlayElement,i))break;this._ngZone?this._ngZone.run(()=>h.next(t)):h.next(t);}}};static \u0275fac=function(e){return new(e||n)};static \u0275prov=Wt$1({token:n,factory:n.\u0275fac})}return n})();function yn(n,o){let t=typeof ShadowRoot<"u"&&ShadowRoot,e=o;for(;e;){if(e===n)return  true;e=t&&e instanceof ShadowRoot?e.host:e.parentNode;}return  false}var On=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=wE({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(e,i){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return n})(),Mn=(()=>{class n{_platform=v(d);_containerElement;_document=v(Bo$1);_styleLoader=v(v$1);ngOnDestroy(){this._containerElement?.remove();}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t="cdk-overlay-container";if(this._platform.isBrowser||Ii$1()){let i=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let s=0;s<i.length;s++)i[s].remove();}let e=this._document.createElement("div");e.classList.add(t),Ii$1()?e.setAttribute("platform","test"):this._platform.isBrowser||e.setAttribute("platform","server"),this._document.body.appendChild(e),this._containerElement=e;}_loadStyles(){this._styleLoader.load(On);}static \u0275fac=function(e){return new(e||n)};static \u0275prov=Wt$1({token:n,factory:n.\u0275fac})}return n})(),ni=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(o,t,e,i){this._renderer=t,this._ngZone=e,this.element=o.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=t.listen(this.element,"click",i);}detach(){this._ngZone.runOutsideAngular(()=>{let o=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(o,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),o.style.pointerEvents="none",o.classList.remove("cdk-overlay-backdrop-showing");});}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove();}};function si(n){return n&&n.nodeType===1}var Ie=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new ie$1;_attachments=new ie$1;_detachments=new ie$1;_positionStrategy;_scrollStrategy;_locationChanges=W.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=false;_previousHostParent;_keydownEvents=new ie$1;_outsidePointerEvents=new ie$1;_afterNextRenderRef;constructor(o,t,e,i,s,r,l,h,_,p=false,y,j){this._portalOutlet=o,this._host=t,this._pane=e,this._config=i,this._ngZone=s,this._keyboardDispatcher=r,this._document=l,this._location=h,this._outsideClickDispatcher=_,this._animationsDisabled=p,this._injector=y,this._renderer=j,i.scrollStrategy&&(this._scrollStrategy=i.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=i.positionStrategy;}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(o){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(o);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Cv(()=>{this.hasAttached()&&this.updatePosition();},{injector:this._injector}),this._togglePointerEvents(true),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,true),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof t?.onDestroy=="function"&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()));}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(false),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let o=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),o}dispose(){if(this._disposed)return;let o=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,o&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=true;}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply();}updatePositionStrategy(o){o!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=o,this.hasAttached()&&(o.attach(this),this.updatePosition()));}updateSize(o){this._config=t$1(t$1({},this._config),o),this._updateElementSize();}setDirection(o){this._config=u(t$1({},this._config),{direction:o}),this._updateElementDirection();}addPanelClass(o){this._pane&&this._toggleClasses(this._pane,o,true);}removePanelClass(o){this._pane&&this._toggleClasses(this._pane,o,false);}getDirection(){let o=this._config.direction;return o?typeof o=="string"?o:o.value:"ltr"}updateScrollStrategy(o){o!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=o,this.hasAttached()&&(o.attach(this),o.enable()));}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection());}_updateElementSize(){if(!this._pane)return;let o=this._pane.style;o.width=m$1(this._config.width),o.height=m$1(this._config.height),o.minWidth=m$1(this._config.minWidth),o.minHeight=m$1(this._config.minHeight),o.maxWidth=m$1(this._config.maxWidth),o.maxHeight=m$1(this._config.maxHeight);}_togglePointerEvents(o){this._pane.style.pointerEvents=o?"":"none";}_attachHost(){if(!this._host.parentElement){let o=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;si(o)?o.after(this._host):o?.type==="parent"?o.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host);}if(this._config.usePopover)try{this._host.showPopover();}catch(o){}}_attachBackdrop(){let o="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new ni(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t);}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,true),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(o));}):this._backdropRef.element.classList.add(o);}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host);}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach();}_toggleClasses(o,t,e){let i=u$1(t||[]).filter(s=>!!s);i.length&&(e?o.classList.add(...i):o.classList.remove(...i));}_detachContentWhenEmpty(){let o=false;try{this._detachContentAfterRenderRef=Cv(()=>{o=!0,this._detachContent();},{injector:this._injector});}catch(t){if(o)throw t;this._detachContent();}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent();}),this._detachContentMutationObserver.observe(this._pane,{childList:true}));}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,false),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent());}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect();}_disposeScrollStrategy(){let o=this._scrollStrategy;o?.disable(),o?.detach?.();}},wn="cdk-overlay-connected-position-bounding-box",so=/([A-Za-z%]+)$/;function ri(n,o){return new Se(o,n.get(jt),n.get(Bo$1),n.get(d),n.get(Mn))}var Se=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=false;_lastBoundingBoxSize={width:0,height:0};_isPushed=false;_canPush=true;_growAfterOpen=false;_hasFlexibleDimensions=true;_positionLocked=false;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=false;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new ie$1;_resizeSubscription=W.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(o,t,e,i,s){this._viewportRuler=t,this._document=e,this._platform=i,this._overlayContainer=s,this.setOrigin(o);}attach(o){this._overlayRef&&this._overlayRef,this._validatePositions(),o.hostElement.classList.add(wn),this._overlayRef=o,this._boundingBox=o.hostElement,this._pane=o.overlayElement,this._isDisposed=false,this._isInitialRender=true,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=true,this.apply();});}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let o=this._originRect,t=this._overlayRect,e=this._viewportRect,i=this._containerRect,s=[],r;for(let l of this._preferredPositions){let h=this._getOriginPoint(o,i,l),_=this._getOverlayPoint(h,t,l),p=this._getOverlayFit(_,t,e,l);if(p.isCompletelyWithinViewport){this._isPushed=false,this._applyPosition(l,h);return}if(this._canFitWithFlexibleDimensions(p,_,e)){s.push({position:l,origin:h,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(h,l)});continue}(!r||r.overlayFit.visibleArea<p.visibleArea)&&(r={overlayFit:p,overlayPoint:_,originPoint:h,position:l,overlayRect:t});}if(s.length){let l=null,h=-1;for(let _ of s){let p=_.boundingBoxRect.width*_.boundingBoxRect.height*(_.position.weight||1);p>h&&(h=p,l=_);}this._isPushed=false,this._applyPosition(l.position,l.origin);return}if(this._canPush){this._isPushed=true,this._applyPosition(r.position,r.originPoint);return}this._applyPosition(r.position,r.originPoint);}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe();}dispose(){this._isDisposed||(this._boundingBox&&Dt(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(wn),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=true);}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let o=this._lastPosition;o?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(o,this._getOriginPoint(this._originRect,this._containerRect,o))):this.apply();}withScrollableContainers(o){return this._scrollables=o,this}withPositions(o){return this._preferredPositions=o,o.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(o){return this._viewportMargin=o,this}withFlexibleDimensions(o=true){return this._hasFlexibleDimensions=o,this}withGrowAfterOpen(o=true){return this._growAfterOpen=o,this}withPush(o=true){return this._canPush=o,this}withLockedPosition(o=true){return this._positionLocked=o,this}setOrigin(o){return this._origin=o,this}withDefaultOffsetX(o){return this._offsetX=o,this}withDefaultOffsetY(o){return this._offsetY=o,this}withTransformOriginOn(o){return this._transformOriginSelector=o,this}withPopoverLocation(o){return this._popoverLocation=o,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof Dr?this._origin.nativeElement:si(this._origin)?this._origin:null}_getOriginPoint(o,t,e){let i;if(e.originX=="center")i=o.left+o.width/2;else {let r=this._isRtl()?o.right:o.left,l=this._isRtl()?o.left:o.right;i=e.originX=="start"?r:l;}t.left<0&&(i-=t.left);let s;return e.originY=="center"?s=o.top+o.height/2:s=e.originY=="top"?o.top:o.bottom,t.top<0&&(s-=t.top),{x:i,y:s}}_getOverlayPoint(o,t,e){let i;e.overlayX=="center"?i=-t.width/2:e.overlayX==="start"?i=this._isRtl()?-t.width:0:i=this._isRtl()?0:-t.width;let s;return e.overlayY=="center"?s=-t.height/2:s=e.overlayY=="top"?0:-t.height,{x:o.x+i,y:o.y+s}}_getOverlayFit(o,t,e,i){let s=kn(t),{x:r,y:l}=o,h=this._getOffset(i,"x"),_=this._getOffset(i,"y");h&&(r+=h),_&&(l+=_);let p=0-r,y=r+s.width-e.width,j=0-l,$=l+s.height-e.height,et=this._subtractOverflows(s.width,p,y),hi=this._subtractOverflows(s.height,j,$),pi=et*hi;return {visibleArea:pi,isCompletelyWithinViewport:s.width*s.height===pi,fitsInViewportVertically:hi===s.height,fitsInViewportHorizontally:et==s.width}}_canFitWithFlexibleDimensions(o,t,e){if(this._hasFlexibleDimensions){let i=e.bottom-t.y,s=e.right-t.x,r=xn(this._overlayRef.getConfig().minHeight),l=xn(this._overlayRef.getConfig().minWidth),h=o.fitsInViewportVertically||r!=null&&r<=i,_=o.fitsInViewportHorizontally||l!=null&&l<=s;return h&&_}return  false}_pushOverlayOnScreen(o,t,e){if(this._previousPushAmount&&this._positionLocked)return {x:o.x+this._previousPushAmount.x,y:o.y+this._previousPushAmount.y};let i=kn(t),s=this._viewportRect,r=Math.max(o.x+i.width-s.width,0),l=Math.max(o.y+i.height-s.height,0),h=Math.max(s.top-e.top-o.y,0),_=Math.max(s.left-e.left-o.x,0),p=0,y=0;return i.width<=s.width?p=_||-r:p=o.x<this._getViewportMarginStart()?s.left-e.left-o.x:0,i.height<=s.height?y=h||-l:y=o.y<this._getViewportMarginTop()?s.top-e.top-o.y:0,this._previousPushAmount={x:p,y},{x:o.x+p,y:o.y+y}}_applyPosition(o,t){if(this._setTransformOrigin(o),this._setOverlayElementStyles(t,o),this._setBoundingBoxStyles(t,o),o.panelClass&&this._addPanelClasses(o.panelClass),this._positionChanges.observers.length){let e=this._getScrollVisibility();if(o!==this._lastPosition||!this._lastScrollVisibility||!ro(this._lastScrollVisibility,e)){let i=new Ce(o,e);this._positionChanges.next(i);}this._lastScrollVisibility=e;}this._lastPosition=o,this._isInitialRender=false;}_setTransformOrigin(o){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),e,i=o.overlayY;o.overlayX==="center"?e="center":this._isRtl()?e=o.overlayX==="start"?"right":"left":e=o.overlayX==="start"?"left":"right";for(let s=0;s<t.length;s++)t[s].style.transformOrigin=`${e} ${i}`;}_calculateBoundingBoxRect(o,t){let e=this._viewportRect,i=this._isRtl(),s,r,l;if(t.overlayY==="top")r=o.y,s=e.height-r+this._getViewportMarginBottom();else if(t.overlayY==="bottom")l=e.height-o.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),s=e.height-l+this._getViewportMarginTop();else {let $=Math.min(e.bottom-o.y+e.top,o.y),et=this._lastBoundingBoxSize.height;s=$*2,r=o.y-$,s>et&&!this._isInitialRender&&!this._growAfterOpen&&(r=o.y-et/2);}let h=t.overlayX==="start"&&!i||t.overlayX==="end"&&i,_=t.overlayX==="end"&&!i||t.overlayX==="start"&&i,p,y,j;if(_)j=e.width-o.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),p=o.x-this._getViewportMarginStart();else if(h)y=o.x,p=e.right-o.x-this._getViewportMarginEnd();else {let $=Math.min(e.right-o.x+e.left,o.x),et=this._lastBoundingBoxSize.width;p=$*2,y=o.x-$,p>et&&!this._isInitialRender&&!this._growAfterOpen&&(y=o.x-et/2);}return {top:r,left:y,bottom:l,right:j,width:p,height:s}}_setBoundingBoxStyles(o,t){let e=this._calculateBoundingBoxRect(o,t);!this._isInitialRender&&!this._growAfterOpen&&(e.height=Math.min(e.height,this._lastBoundingBoxSize.height),e.width=Math.min(e.width,this._lastBoundingBoxSize.width));let i={};if(this._hasExactPosition())i.top=i.left="0",i.bottom=i.right="auto",i.maxHeight=i.maxWidth="",i.width=i.height="100%";else {let s=this._overlayRef.getConfig().maxHeight,r=this._overlayRef.getConfig().maxWidth;i.width=m$1(e.width),i.height=m$1(e.height),i.top=m$1(e.top)||"auto",i.bottom=m$1(e.bottom)||"auto",i.left=m$1(e.left)||"auto",i.right=m$1(e.right)||"auto",t.overlayX==="center"?i.alignItems="center":i.alignItems=t.overlayX==="end"?"flex-end":"flex-start",t.overlayY==="center"?i.justifyContent="center":i.justifyContent=t.overlayY==="bottom"?"flex-end":"flex-start",s&&(i.maxHeight=m$1(s)),r&&(i.maxWidth=m$1(r));}this._lastBoundingBoxSize=e,Dt(this._boundingBox.style,i);}_resetBoundingBoxStyles(){Dt(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""});}_resetOverlayElementStyles(){Dt(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""});}_setOverlayElementStyles(o,t){let e={},i=this._hasExactPosition(),s=this._hasFlexibleDimensions,r=this._overlayRef.getConfig();if(i){let p=this._viewportRuler.getViewportScrollPosition();Dt(e,this._getExactOverlayY(t,o,p)),Dt(e,this._getExactOverlayX(t,o,p));}else e.position="static";let l="",h=this._getOffset(t,"x"),_=this._getOffset(t,"y");h&&(l+=`translateX(${h}px) `),_&&(l+=`translateY(${_}px)`),e.transform=l.trim(),r.maxHeight&&(i?e.maxHeight=m$1(r.maxHeight):s&&(e.maxHeight="")),r.maxWidth&&(i?e.maxWidth=m$1(r.maxWidth):s&&(e.maxWidth="")),Dt(this._pane.style,e);}_getExactOverlayY(o,t,e){let i={top:"",bottom:""},s=this._getOverlayPoint(t,this._overlayRect,o);if(this._isPushed&&(s=this._pushOverlayOnScreen(s,this._overlayRect,e)),o.overlayY==="bottom"){let r=this._document.documentElement.clientHeight;i.bottom=`${r-(s.y+this._overlayRect.height)}px`;}else i.top=m$1(s.y);return i}_getExactOverlayX(o,t,e){let i={left:"",right:""},s=this._getOverlayPoint(t,this._overlayRect,o);this._isPushed&&(s=this._pushOverlayOnScreen(s,this._overlayRect,e));let r;if(this._isRtl()?r=o.overlayX==="end"?"left":"right":r=o.overlayX==="end"?"right":"left",r==="right"){let l=this._document.documentElement.clientWidth;i.right=`${l-(s.x+this._overlayRect.width)}px`;}else i.left=m$1(s.x);return i}_getScrollVisibility(){let o=this._getOriginRect(),t=this._pane.getBoundingClientRect(),e=this._scrollables.map(i=>i.getElementRef().nativeElement.getBoundingClientRect());return {isOriginClipped:bn(o,e),isOriginOutsideView:ii(o,e),isOverlayClipped:bn(t,e),isOverlayOutsideView:ii(t,e)}}_subtractOverflows(o,...t){return t.reduce((e,i)=>e-Math.max(i,0),o)}_getNarrowedViewportRect(){let o=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,e=this._viewportRuler.getViewportScrollPosition();return {top:e.top+this._getViewportMarginTop(),left:e.left+this._getViewportMarginStart(),right:e.left+o-this._getViewportMarginEnd(),bottom:e.top+t-this._getViewportMarginBottom(),width:o-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return !this._hasFlexibleDimensions||this._isPushed}_getOffset(o,t){return t==="x"?o.offsetX==null?this._offsetX:o.offsetX:o.offsetY==null?this._offsetY:o.offsetY}_validatePositions(){}_addPanelClasses(o){this._pane&&u$1(o).forEach(t=>{t!==""&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t));});}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(o=>{this._pane.classList.remove(o);}),this._appliedPanelClasses=[]);}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let o=this._origin;if(o instanceof Dr)return o.nativeElement.getBoundingClientRect();if(o instanceof Element)return o.getBoundingClientRect();let t=o.width||0,e=o.height||0;return {top:o.y,bottom:o.y+e,left:o.x,right:o.x+t,height:e,width:t}}_getContainerRect(){let o=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",t=this._overlayContainer.getContainerElement();o&&(t.style.display="block");let e=t.getBoundingClientRect();return o&&(t.style.display=""),e}};function Dt(n,o){for(let t in o)o.hasOwnProperty(t)&&(n[t]=o[t]);return n}function xn(n){if(typeof n!="number"&&n!=null){let[o,t]=n.split(so);return !t||t==="px"?parseFloat(o):null}return n||null}function kn(n){return {top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function ro(n,o){return n===o?true:n.isOriginClipped===o.isOriginClipped&&n.isOriginOutsideView===o.isOriginOutsideView&&n.isOverlayClipped===o.isOverlayClipped&&n.isOverlayOutsideView===o.isOverlayOutsideView}var Tn=new M("OVERLAY_DEFAULT_CONFIG");function ai(n,o){n.get(v$1).load(On);let t=n.get(Mn),e=n.get(Bo$1),i=n.get($),s=n.get(Nr),r=n.get(m),l=n.get(SI,null,{optional:true})||n.get(mr).createRenderer(null,null),h=new ke(o),_=n.get(Tn,null,{optional:true})?.usePopover??true;h.direction=h.direction||r.value,"showPopover"in e.body?h.usePopover=o?.usePopover??_:h.usePopover=false;let p=e.createElement("div"),y=e.createElement("div");p.id=i.getId("cdk-overlay-"),p.classList.add("cdk-overlay-pane"),y.appendChild(p),h.usePopover&&(y.setAttribute("popover","manual"),y.classList.add("cdk-overlay-popover"));let j=h.usePopover?h.positionStrategy?.getPopoverInsertionPoint?.():null;return si(j)?j.after(y):j?.type==="parent"?j.element.appendChild(y):t.getContainerElement().appendChild(y),new Ie(new ye(p,s,n),y,p,h,n.get(Q),n.get(In),e,n.get(He),n.get(Sn),o?.disableAnimations??n.get(Nm,null,{optional:true})==="NoopAnimations",n.get(ce),l)}var ao=["tooltip"],lo=20;var co=new M("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let n=v(Ee);return ()=>oi(n,{scrollThrottle:lo})}}),mo=new M("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var En="tooltip-panel",ho={passive:true},po=8,uo=8,_o=24,fo=200,li=(()=>{class n{_elementRef=v(Dr);_ngZone=v(Q);_platform=v(d);_ariaDescriber=v(pi);_focusMonitor=v(Ce$1);_dir=v(m);_injector=v(Ee);_viewContainerRef=v(ji);_mediaMatcher=v(G);_document=v(Bo$1);_renderer=v(SI);_animationsDisabled=Bi();_defaultOptions=v(mo,{optional:true});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=false;_disabled=false;_tooltipClass;_viewInitialized=false;_pointerExitEventsInitialized=false;_tooltipComponent=Dn;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=false;_dirSubscribed=false;get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()));}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=a(t),this._detach(),this._overlayRef=null;}get disabled(){return this._disabled}set disabled(t){let e=a(t);this._disabled!==e&&(this._disabled=e,e?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message));}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=n$1(t);}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=n$1(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay);}_hideDelay;touchGestures="auto";get message(){return this._message}set message(t){let e=this._message;this._message=t!=null?String(t).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(e);}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass);}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new ie$1;_isDestroyed=false;constructor(){let t=this._defaultOptions;t&&(this._showDelay=t.showDelay,this._hideDelay=t.hideDelay,t.position&&(this.position=t.position),t.positionAtOrigin&&(this.positionAtOrigin=t.positionAtOrigin),t.touchGestures&&(this.touchGestures=t.touchGestures),t.tooltipClass&&(this.tooltipClass=t.tooltipClass)),this._viewportMargin=po;}ngAfterViewInit(){this._viewInitialized=true,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe($g(this._destroyed)).subscribe(t=>{t?t==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0));});}ngOnDestroy(){let t=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(e=>e()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=true,this._ariaDescriber.removeDescription(t,this.message,"tooltip"),this._focusMonitor.stopMonitoring(t);}show(t=this.showDelay,e){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let i=this._createOverlay(e);this._detach(),this._portal=this._portal||new ne(this._tooltipComponent,this._viewContainerRef);let s=this._tooltipInstance=i.attach(this._portal).instance;s._triggerElement=this._elementRef.nativeElement,s._mouseLeaveHideDelay=this._hideDelay,s.afterHidden().pipe($g(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),s.show(t);}hide(t=this.hideDelay){let e=this._tooltipInstance;e&&(e.isVisible()?e.hide(t):(e._cancelPendingAnimations(),this._detach()));}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t);}_isTooltipVisible(){return !!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){let r=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&r._origin instanceof Dr)return this._overlayRef;this._detach();}let e=this._injector.get(Ht).getAncestorScrollContainers(this._elementRef),i=`${this._cssClassPrefix}-${En}`,s=ri(this._injector,this.positionAtOrigin?t||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(false).withViewportMargin(this._viewportMargin).withScrollableContainers(e).withPopoverLocation("global");return s.positionChanges.pipe($g(this._destroyed)).subscribe(r=>{this._updateCurrentPositionClass(r.connectionPair),this._tooltipInstance&&r.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0));}),this._overlayRef=ai(this._injector,{direction:this._dir,positionStrategy:s,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,i]:i,scrollStrategy:this._injector.get(co)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe($g(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe($g(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe($g(this._destroyed)).subscribe(r=>{r.preventDefault(),r.stopPropagation(),this._ngZone.run(()=>this.hide(0));}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=true,this._dir.change.pipe($g(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef);})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null;}_updatePosition(t){let e=t.getConfig().positionStrategy,i=this._getOrigin(),s=this._getOverlayPosition();e.withPositions([this._addOffset(t$1(t$1({},i.main),s.main)),this._addOffset(t$1(t$1({},i.fallback),s.fallback))]);}_addOffset(t){let e=uo,i=!this._dir||this._dir.value=="ltr";return t.originY==="top"?t.offsetY=-e:t.originY==="bottom"?t.offsetY=e:t.originX==="start"?t.offsetX=i?-e:e:t.originX==="end"&&(t.offsetX=i?e:-e),t}_getOrigin(){let t=!this._dir||this._dir.value=="ltr",e=this.position,i;e=="above"||e=="below"?i={originX:"center",originY:e=="above"?"top":"bottom"}:e=="before"||e=="left"&&t||e=="right"&&!t?i={originX:"start",originY:"center"}:(e=="after"||e=="right"&&t||e=="left"&&!t)&&(i={originX:"end",originY:"center"});let{x:s,y:r}=this._invertPosition(i.originX,i.originY);return {main:i,fallback:{originX:s,originY:r}}}_getOverlayPosition(){let t=!this._dir||this._dir.value=="ltr",e=this.position,i;e=="above"?i={overlayX:"center",overlayY:"bottom"}:e=="below"?i={overlayX:"center",overlayY:"top"}:e=="before"||e=="left"&&t||e=="right"&&!t?i={overlayX:"end",overlayY:"center"}:(e=="after"||e=="right"&&t||e=="left"&&!t)&&(i={overlayX:"start",overlayY:"center"});let{x:s,y:r}=this._invertPosition(i.overlayX,i.overlayY);return {main:i,fallback:{overlayX:s,overlayY:r}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Cv(()=>{this._tooltipInstance&&this._overlayRef.updatePosition();},{injector:this._injector}));}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t instanceof Set?Array.from(t):t,this._tooltipInstance._markForCheck());}_invertPosition(t,e){return this.position==="above"||this.position==="below"?e==="top"?e="bottom":e==="bottom"&&(e="top"):t==="end"?t="start":t==="start"&&(t="end"),{x:t,y:e}}_updateCurrentPositionClass(t){let{overlayY:e,originX:i,originY:s}=t,r;if(e==="center"?this._dir&&this._dir.value==="rtl"?r=i==="end"?"left":"right":r=i==="start"?"left":"right":r=e==="bottom"&&s==="top"?"above":"below",r!==this._currentPosition){let l=this._overlayRef;if(l){let h=`${this._cssClassPrefix}-${En}-`;l.removePanelClass(h+this._currentPosition),l.addPanelClass(h+r);}this._currentPosition=r;}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",t=>{let e=t.targetTouches?.[0],i=e?{x:e.clientX,y:e.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let s=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,i);},this._defaultOptions?.touchLongPressShowDelay??s);})):this._addListener("mouseenter",t=>{this._setupPointerExitEventsIfNeeded();let e;t.x!==void 0&&t.y!==void 0&&(e=t),this.show(void 0,e);}));}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=true,!this._isTouchPlatform())this._addListener("mouseleave",t=>{let e=t.relatedTarget;(!e||!this._overlayRef?.overlayElement.contains(e))&&this.hide();}),this._addListener("wheel",t=>{if(this._isTooltipVisible()){let e=this._document.elementFromPoint(t.clientX,t.clientY),i=this._elementRef.nativeElement;e!==i&&!i.contains(e)&&this.hide();}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let t=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay);};this._addListener("touchend",t),this._addListener("touchcancel",t);}}}_addListener(t,e){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,t,e,ho));}_isTouchPlatform(){let t=this._defaultOptions?.detectHoverCapability;return typeof t=="function"?!t():this._platform.IOS||this._platform.ANDROID?true:this._platform.isBrowser?!!t&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:false}_disableNativeGesturesIfNecessary(){let t=this.touchGestures;if(t!=="off"){let e=this._elementRef.nativeElement,i=e.style;(t==="on"||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA")&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect="none"),(t==="on"||!e.draggable)&&(i.webkitUserDrag="none"),i.touchAction="none",i.webkitTapHighlightColor="transparent";}}_syncAriaDescription(t){this._ariaDescriptionPending||(this._ariaDescriptionPending=true,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,t,"tooltip"),this._isDestroyed||Cv({write:()=>{this._ariaDescriptionPending=false,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip");}},{injector:this._injector}));}_overlayEventPredicate=t=>t.type==="keydown"?this._isTooltipVisible()&&t.keyCode===27&&!Qt(t):true;static \u0275fac=function(e){return new(e||n)};static \u0275dir=SE({type:n,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(e,i){e&2&&ch("mat-mdc-tooltip-disabled",i.disabled);},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return n})(),Dn=(()=>{class n{_changeDetectorRef=v(t0);_elementRef=v(Dr);_isMultiline=false;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=Bi();_tooltip;_closeOnInteraction=false;_isVisible=false;_onHide=new ie$1;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";show(t){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(true),this._showTimeoutId=void 0;},t);}hide(t){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(false),this._hideTimeoutId=void 0;},t);}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null;}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0);}_markForCheck(){this._changeDetectorRef.markForCheck();}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(false));}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck();}_isTooltipMultiline(){let t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>_o&&t.width>=fo}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation);}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0;}_finalizeAnimation(t){t?this._closeOnInteraction=true:this.isVisible()||this._onHide.next();}_toggleVisibility(t){let e=this._tooltip.nativeElement,i=this._showAnimation,s=this._hideAnimation;if(e.classList.remove(t?s:i),e.classList.add(t?i:s),this._isVisible!==t&&(this._isVisible=t,this._changeDetectorRef.markForCheck()),t&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let r=getComputedStyle(e);(r.getPropertyValue("animation-duration")==="0s"||r.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=true);}t&&this._onShow(),this._animationsDisabled&&(e.classList.add("_mat-animation-noopable"),this._finalizeAnimation(t));}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=wE({type:n,selectors:[["mat-tooltip-component"]],viewQuery:function(e,i){if(e&1&&eh(ao,7),e&2){let s;ID(s=ED())&&(i._tooltip=s.first);}},hostAttrs:["aria-hidden","true"],hostBindings:function(e,i){e&1&&Yp("mouseleave",function(r){return i._handleMouseLeave(r)});},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(e,i){e&1&&(zc(0,"div",1,0),Jp("animationend",function(r){return i._handleAnimationEnd(r)}),zc(2,"div",2),zD(3),Qc()()),e&2&&(FD(i.tooltipClass),ch("mdc-tooltip--multiline",i._isMultiline),zv(3),mh(i.message));},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})}return n})();var go=()=>["/home"],vo=()=>["/error"];function bo(n,o){n&1&&(Di(0,"a",7)(1,"mat-icon",8),zD(2,"warning"),Gc()()),n&2&&Hp("routerLink",iT(1,vo));}var pl=(()=>{class n{constructor(){this.errorNotification=v(b),this.lastUpdateDate=new Date("08/14/2026 11:30 PM"),this.lastUpdateTooltip="Angular 22: standalone, Vitest, FormValueControl/FormCheckboxControl custom widgets, Add Labyrinth, Add Mersenne, Improve Mersenne, Update CV. Add knowledge base, Learning check, fix fake question length, md instead of pdf of knowledge base";}static{this.\u0275fac=function(e){return new(e||n)};}static{this.\u0275cmp=wE({type:n,selectors:[["app-header"]],decls:13,vars:10,consts:[[1,"header-content"],["color","primary",1,"toolbar-align"],[3,"routerLink"],[1,"line-style"],[1,"last-update",3,"matTooltip","matTooltipPosition"],[1,"line-style","angular-version-row"],[3,"compact"],[1,"error-indicator-link",3,"routerLink"],[1,"error-indicator"]],template:function(e,i){e&1&&(Di(0,"div",0)(1,"mat-toolbar",1)(2,"div")(3,"a",2),zD(4,"Home"),Gc(),zD(5," of L.K\u0151v\xE1ri "),Gc(),Di(6,"div",3)(7,"span",4),zD(8),cT(9,"date"),Gc()(),Di(10,"div",5),Bp(11,"app-angular-version",6),YE(12,bo,3,2,"a",7),Gc()()()),e&2&&(zv(3),Hp("routerLink",iT(9,go)),zv(4),Hp("matTooltip",i.lastUpdateTooltip)("matTooltipPosition","right"),zv(),Kc("Last update: ",dT(9,6,i.lastUpdateDate,"MM/dd/yyyy HH:mm")),zv(3),Hp("compact",true),zv(),KE(i.errorNotification.currentErrorEntries().length>0?12:-1));},dependencies:[vn,$t,li,Et$1,E,zt],styles:[".header-content[_ngcontent-%COMP%]{width:100%}.header-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#fff}.header-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .header-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active{color:#d3d3d3}.header-content[_ngcontent-%COMP%]   .toolbar-align[_ngcontent-%COMP%]{display:block;line-height:1.5rem}.header-content[_ngcontent-%COMP%]   .toolbar-align[_ngcontent-%COMP%]   .line-style[_ngcontent-%COMP%]{line-height:.5rem}.header-content[_ngcontent-%COMP%]   .toolbar-align[_ngcontent-%COMP%]   .line-style[_ngcontent-%COMP%]   .last-update[_ngcontent-%COMP%]{color:#ff0;font-size:.6rem;line-height:.5rem}.header-content[_ngcontent-%COMP%]   .toolbar-align[_ngcontent-%COMP%]   .angular-version-row[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.15rem}.header-content[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]{border-radius:.1875rem;width:100%}.header-content[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%]{float:right}.header-content[_ngcontent-%COMP%]   .error-indicator-link[_ngcontent-%COMP%]{display:inline-flex;align-items:center;text-decoration:none;line-height:.5rem}.header-content[_ngcontent-%COMP%]   .error-indicator-link[_ngcontent-%COMP%]:hover   .error-indicator[_ngcontent-%COMP%], .header-content[_ngcontent-%COMP%]   .error-indicator-link[_ngcontent-%COMP%]:active   .error-indicator[_ngcontent-%COMP%]{color:#f66}.header-content[_ngcontent-%COMP%]   .error-indicator[_ngcontent-%COMP%]{color:red;font-size:.75rem;width:.75rem;height:.75rem;line-height:.75rem}"],changeDetection:1});}}return n})();var yo=["*"],wo=`.mdc-list {
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
`,xo=["unscopedContent"],ko=["text"],Co=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],Io=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var So=new M("ListOption"),Oo=(()=>{class n{_elementRef=v(Dr);static \u0275fac=function(e){return new(e||n)};static \u0275dir=SE({type:n,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return n})(),Mo=(()=>{class n{_elementRef=v(Dr);static \u0275fac=function(e){return new(e||n)};static \u0275dir=SE({type:n,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return n})(),To=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=SE({type:n,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return n})(),Pn=(()=>{class n{_listOption=v(So,{optional:true});_isAlignedAtStart(){return !this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||n)};static \u0275dir=SE({type:n,hostVars:4,hostBindings:function(e,i){e&2&&ch("mdc-list-item__start",i._isAlignedAtStart())("mdc-list-item__end",!i._isAlignedAtStart());}})}return n})(),Eo=(()=>{class n extends Pn{static \u0275fac=(()=>{let t;return function(i){return (t||(t=ly(n)))(i||n)}})();static \u0275dir=SE({type:n,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[Rp]})}return n})(),Do=(()=>{class n extends Pn{static \u0275fac=(()=>{let t;return function(i){return (t||(t=ly(n)))(i||n)}})();static \u0275dir=SE({type:n,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[Rp]})}return n})(),Po=new M("MAT_LIST_CONFIG"),ci=(()=>{class n{_isNonInteractive=true;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=a(t);}_disableRipple=false;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(a(t));}_disabled=$o$1(false);_defaultOptions=v(Po,{optional:true});static \u0275fac=function(e){return new(e||n)};static \u0275dir=SE({type:n,hostVars:1,hostBindings:function(e,i){e&2&&Vp("aria-disabled",i.disabled);},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return n})(),Lo=(()=>{class n{_elementRef=v(Dr);_ngZone=v(Q);_listBase=v(ci,{optional:true});_platform=v(d);_hostElement;_isButtonElement;_noopAnimations=Bi();_avatars;_icons;set lines(t){this._explicitLines=n$1(t,null),this._updateItemLines(false);}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=a(t);}_disableRipple=false;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(a(t));}_disabled=$o$1(false);_subscriptions=new W;_rippleRenderer=null;_hasUnscopedTextContent=false;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){v(v$1).load(wt);let t=v(K,{optional:true});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button");}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(true);}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents();}_hasIconOrAvatar(){return !!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new z(this,this._ngZone,this._hostElement,this._platform,v(Ee)),this._rippleRenderer.setupTriggerEvents(this._hostElement);}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(_g(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(false)));});}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),i=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let s=this._titles.length===0&&e===1;i.classList.toggle("mdc-list-item__primary-text",s),i.classList.toggle("mdc-list-item__secondary-text",!s);}else i.classList.remove("mdc-list-item__primary-text"),i.classList.remove("mdc-list-item__secondary-text");}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()));}static \u0275fac=function(e){return new(e||n)};static \u0275dir=SE({type:n,contentQueries:function(e,i,s){if(e&1&&Xp(s,Eo,4)(s,Do,4),e&2){let r;ID(r=ED())&&(i._avatars=r),ID(r=ED())&&(i._icons=r);}},hostVars:4,hostBindings:function(e,i){e&2&&(Vp("aria-disabled",i.disabled)("disabled",i._isButtonElement&&i.disabled||null),ch("mdc-list-item--disabled",i.disabled));},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return n})();var Ln=(()=>{class n extends Lo{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=a(t);}_activated=false;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(i){return (t||(t=ly(n)))(i||n)}})();static \u0275cmp=wE({type:n,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(e,i,s){if(e&1&&Xp(s,Mo,5)(s,Oo,5)(s,To,5),e&2){let r;ID(r=ED())&&(i._lines=r),ID(r=ED())&&(i._titles=r),ID(r=ED())&&(i._meta=r);}},viewQuery:function(e,i){if(e&1&&eh(xo,5)(ko,5),e&2){let s;ID(s=ED())&&(i._unscopedContent=s.first),ID(s=ED())&&(i._itemText=s.first);}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(e,i){e&2&&(Vp("aria-current",i._getAriaCurrent()),ch("mdc-list-item--activated",i.activated)("mdc-list-item--with-leading-avatar",i._avatars.length!==0)("mdc-list-item--with-leading-icon",i._icons.length!==0)("mdc-list-item--with-trailing-meta",i._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",i._hasBothLeadingAndTrailing())("_mat-animation-noopable",i._noopAnimations));},inputs:{activated:"activated"},exportAs:["matListItem"],features:[Rp],ngContentSelectors:Io,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(e,i){e&1&&(mD(Co),yD(0),Di(1,"span",1),yD(2,1),yD(3,2),Di(4,"span",2,0),Yp("cdkObserveContent",function(){return i._updateItemLines(true)}),yD(6,3),Gc()(),yD(7,4),yD(8,5),Bp(9,"div",3));},dependencies:[St],encapsulation:2})}return n})();var Rn=(()=>{class n extends ci{_isNonInteractive=false;static \u0275fac=(()=>{let t;return function(i){return (t||(t=ly(n)))(i||n)}})();static \u0275cmp=wE({type:n,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[oT([{provide:ci,useExisting:n}]),Rp],ngContentSelectors:yo,decls:1,vars:0,template:function(e,i){e&1&&(mD(),yD(0));},styles:[wo],encapsulation:2})}return n})();var An=`
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
`;var Fn=(()=>{class n extends bt{static \u0275fac=(()=>{let t;return function(i){return (t||(t=ly(n)))(i||n)}})();static \u0275cmp=wE({type:n,selectors:[["","data-p-icon","angle-right"]],features:[Rp],decls:1,vars:0,consts:[["d","M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z","fill","currentColor"]],template:function(e,i){e&1&&(ju(),$p(0,"path",0));},encapsulation:2,changeDetection:1})}return n})();var Bn=`
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
`;var Ro={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},Vn=(()=>{class n extends ct{name="tooltip";style=Bn;classes=Ro;static \u0275fac=(()=>{let t;return function(i){return (t||(t=ly(n)))(i||n)}})();static \u0275prov=re({token:n,factory:n.\u0275fac})}return n})();var zn=new M("TOOLTIP_INSTANCE"),Nn=(()=>{class n extends $e$2{zone;viewContainer;componentName="Tooltip";$pcTooltip=v(zn,{optional:true,skipSelf:true})??void 0;tooltipPosition;tooltipEvent="hover";positionStyle;tooltipStyleClass;tooltipZIndex;escape=true;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=true;fitContent=true;hideOnEscape=true;showOnEllipsis=false;content;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this.deactivate();}tooltipOptions;appendTo=YF(void 0);$appendTo=mT(()=>this.appendTo()||this.config.overlayAppendTo());_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:true,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:true,hideOnEscape:true,showOnEllipsis:false,id:me("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;rootPTClasses="";showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;touchStartListener;touchEndListener;documentTouchListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=v(Vn);interactionInProgress=false;ptTooltip=YF();pTooltipPT=YF();pTooltipUnstyled=YF();constructor(t,e){super(),this.zone=t,this.viewContainer=e,zu(()=>{let i=this.ptTooltip()||this.pTooltipPT();i&&this.directivePT.set(i);}),zu(()=>{this.pTooltipUnstyled()&&this.directiveUnstyled.set(this.pTooltipUnstyled());});}onAfterViewInit(){Pi(this.platformId)&&this.zone.runOutsideAngular(()=>{let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener),this.touchStartListener=this.onTouchStart.bind(this),this.touchEndListener=this.onTouchEnd.bind(this),this.el.nativeElement.addEventListener("touchstart",this.touchStartListener,{passive:true}),this.el.nativeElement.addEventListener("touchend",this.touchEndListener,{passive:true})),t==="focus"||t==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let e=this.el.nativeElement.querySelector(".p-component");e||(e=this.getTarget(this.el.nativeElement)),e.addEventListener("focus",this.focusListener),e.addEventListener("blur",this.blurListener);}});}onChanges(t){t.tooltipPosition&&this.setOption({tooltipPosition:t.tooltipPosition.currentValue}),t.tooltipEvent&&this.setOption({tooltipEvent:t.tooltipEvent.currentValue}),t.appendTo&&this.setOption({appendTo:t.appendTo.currentValue}),t.positionStyle&&this.setOption({positionStyle:t.positionStyle.currentValue}),t.tooltipStyleClass&&this.setOption({tooltipStyleClass:t.tooltipStyleClass.currentValue}),t.tooltipZIndex&&this.setOption({tooltipZIndex:t.tooltipZIndex.currentValue}),t.escape&&this.setOption({escape:t.escape.currentValue}),t.showDelay&&this.setOption({showDelay:t.showDelay.currentValue}),t.hideDelay&&this.setOption({hideDelay:t.hideDelay.currentValue}),t.life&&this.setOption({life:t.life.currentValue}),t.positionTop&&this.setOption({positionTop:t.positionTop.currentValue}),t.positionLeft&&this.setOption({positionLeft:t.positionLeft.currentValue}),t.disabled&&this.setOption({disabled:t.disabled.currentValue}),t.content&&(this.setOption({tooltipLabel:t.content.currentValue}),this.active&&(t.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),t.autoHide&&this.setOption({autoHide:t.autoHide.currentValue}),t.showOnEllipsis&&this.setOption({showOnEllipsis:t.showOnEllipsis.currentValue}),t.id&&this.setOption({id:t.id.currentValue}),t.tooltipOptions&&(this._tooltipOptions=t$1(t$1({},this._tooltipOptions),t.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()));}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(t){!this.container&&!this.showTimeout&&this.activate();}onMouseLeave(t){this.isAutoHide()?this.deactivate():!(Dt$1(t.relatedTarget,"p-tooltip")||Dt$1(t.relatedTarget,"p-tooltip-text")||Dt$1(t.relatedTarget,"p-tooltip-arrow"))&&this.deactivate();}onTouchStart(t){!this.container&&!this.showTimeout&&(this.activate(),this.isAutoHide()||this.bindDocumentTouchListener());}onTouchEnd(t){this.isAutoHide()&&this.deactivate();}bindDocumentTouchListener(){this.documentTouchListener||(this.documentTouchListener=this.renderer.listen("document","touchstart",t=>{this.container&&!this.container.contains(t.target)&&!this.el.nativeElement.contains(t.target)&&(this.deactivate(),this.unbindDocumentTouchListener());}));}unbindDocumentTouchListener(){this.documentTouchListener&&(this.documentTouchListener(),this.documentTouchListener=null);}onFocus(t){this.activate();}onBlur(t){this.deactivate();}onInputClick(t){this.deactivate();}hasEllipsis(){let t=this.el.nativeElement;return t.offsetWidth<t.scrollWidth||t.offsetHeight<t.scrollHeight}activate(){if(!this.interactionInProgress){if(this.getOption("showOnEllipsis")&&!this.hasEllipsis())return;if(this.active=true,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show();},this.getOption("showDelay")):this.show(),this.getOption("life")){let t=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide();},t);}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener?.();})),this.interactionInProgress=true;}}deactivate(){this.interactionInProgress=false,this.active=false,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide();},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener();}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=Ci("div",{class:this.cx("root"),"p-bind":this.ptm("root"),"data-pc-section":"root"}),this.container.setAttribute("role","tooltip");let t=Ci("div",{class:this.cx("arrow"),"p-bind":this.ptm("arrow"),"data-pc-section":"arrow"});this.container.appendChild(t),this.tooltipText=Ci("div",{class:this.cx("text"),"p-bind":this.ptm("text"),"data-pc-section":"text"}),this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?Ei(this.container,this.el.nativeElement):Ei(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener());}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let t=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(t,"mouseleave",e=>{this.deactivate();});}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null);}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align();},100):(this.container.style.display="inline-block",this.align()),Ti$1(this.container,250),this.getOption("tooltipZIndex")==="auto"?Ct.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener();}hide(){this.getOption("tooltipZIndex")==="auto"&&Ct.clear(this.container),this.remove();}updateText(){let t=this.getOption("tooltipLabel");if(t&&typeof t.createEmbeddedView=="function"){let e=this.viewContainer.createEmbeddedView(t);e.detectChanges(),e.rootNodes.forEach(i=>this.tooltipText.appendChild(i));}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(t))):this.tooltipText.innerHTML=t;}align(){let t=this.getOption("tooltipPosition"),i={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]}[t]||[];for(let[s,r]of i.entries())if(s===0)r.call(this);else if(this.isOutOfBounds())r.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let t=this.el.nativeElement.getBoundingClientRect(),e=t.left+Mt(),i=t.top+kt$1();return {left:e,top:i}}else return {left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.startsWith("P-")?Ai$1(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let t=this.activeElement,e=Ht$1(t),i=(zt$1(t)-zt$1(this.container))/2;this.alignTooltip(e,i);let s=this.getArrowElement();s.style.top="50%",s.style.right=null,s.style.bottom=null,s.style.left="0";}alignLeft(){this.preAlign("left");let t=this.getArrowElement(),e=Ht$1(this.container),i=(zt$1(this.el.nativeElement)-zt$1(this.container))/2;this.alignTooltip(-e,i),t.style.top="50%",t.style.right="0",t.style.bottom=null,t.style.left=null;}alignTop(){this.preAlign("top");let t=this.getArrowElement(),e=this.getHostOffset(),i=Ht$1(this.container),s=(Ht$1(this.el.nativeElement)-Ht$1(this.container))/2,r=zt$1(this.container);this.alignTooltip(s,-r);let l=e.left-this.getHostOffset().left+i/2;t.style.top=null,t.style.right=null,t.style.bottom="0",t.style.left=l+"px";}getArrowElement(){return Ai$1(this.container,'[data-pc-section="arrow"]')}alignBottom(){this.preAlign("bottom");let t=this.getArrowElement(),e=Ht$1(this.container),i=this.getHostOffset(),s=(Ht$1(this.el.nativeElement)-Ht$1(this.container))/2,r=zt$1(this.el.nativeElement);this.alignTooltip(s,r);let l=i.left-this.getHostOffset().left+e/2;t.style.top="0",t.style.right=null,t.style.bottom=null,t.style.left=l+"px";}alignTooltip(t,e){let i=this.getHostOffset(),s=i.left+t,r=i.top+e;this.container.style.left=s+this.getOption("positionLeft")+"px",this.container.style.top=r+this.getOption("positionTop")+"px";}setOption(t){this._tooltipOptions=t$1(t$1({},this._tooltipOptions),t);}getOption(t){return this._tooltipOptions[t]}getTarget(t){return Dt$1(t,"p-inputwrapper")?Ai$1(t,"input"):t}preAlign(t){this.container.style.left="-999px",this.container.style.top="-999px",this.container.className=this.cn(this.cx("root"),this.ptm("root")?.class,"p-tooltip-"+t,this.getOption("tooltipStyleClass"));}isOutOfBounds(){let t=this.container.getBoundingClientRect(),e=t.top,i=t.left,s=Ht$1(this.container),r=zt$1(this.container),l=ve$1();return i+s>l.width||i<0||e<0||e+r>l.height}onWindowResize(t){this.hide();}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener);});}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null);}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new _e(this.el.nativeElement,()=>{this.container&&this.hide();})),this.scrollHandler.bindScrollListener();}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener();}unbindEvents(){let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener),this.el.nativeElement.removeEventListener("touchstart",this.touchStartListener),this.el.nativeElement.removeEventListener("touchend",this.touchEndListener),this.unbindDocumentTouchListener()),t==="focus"||t==="both"){let e=this.el.nativeElement.querySelector(".p-component");e||(e=this.getTarget(this.el.nativeElement)),e.removeEventListener("focus",this.focusListener),e.removeEventListener("blur",this.blurListener);}this.unbindDocumentResizeListener();}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):Fi(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.unbindDocumentTouchListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null;}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null);}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null);}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout();}onDestroy(){this.unbindEvents(),this.container&&Ct.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener();}static \u0275fac=function(e){return new(e||n)(Mr(Q),Mr(ji))};static \u0275dir=SE({type:n,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",o0],showDelay:[2,"showDelay","showDelay",i0],hideDelay:[2,"hideDelay","hideDelay",i0],life:[2,"life","life",i0],positionTop:[2,"positionTop","positionTop",i0],positionLeft:[2,"positionLeft","positionLeft",i0],autoHide:[2,"autoHide","autoHide",o0],fitContent:[2,"fitContent","fitContent",o0],hideOnEscape:[2,"hideOnEscape","hideOnEscape",o0],showOnEllipsis:[2,"showOnEllipsis","showOnEllipsis",o0],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions",appendTo:[1,"appendTo"],ptTooltip:[1,"ptTooltip"],pTooltipPT:[1,"pTooltipPT"],pTooltipUnstyled:[1,"pTooltipUnstyled"]},features:[oT([Vn,{provide:zn,useExisting:n},{provide:Ie$1,useExisting:n}]),Rp]})}return n})(),di=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=ME({type:n});static \u0275inj=nu({imports:[et,et]})}return n})();var Fo=["sublist"],Bo=n=>({processedItem:n}),Vo=()=>({exact:false}),zo=(n,o)=>({$implicit:n,hasSubmenu:o});function No(n,o){if(n&1&&Bp(0,"li",8),n&2){let t=hD().$implicit,e=hD(2);LD(e.getItemProp(t,"style")),FD(e.cn(e.cx("separator"),e.getItemProp(t,"class"),e.getItemProp(t,"styleClass"))),Hp("pBind",e._ptm("separator")),Vp("id",e.getItemId(t));}}function Ho(n,o){if(n&1&&Bp(0,"span",19),n&2){let t=hD(4),e=t.$implicit,i=t.index,s=hD(2);FD(s.cn(s.cx("itemIcon"),s.getItemProp(e,"icon"),s.getItemProp(e,"iconClass"))),Hp("ngStyle",s.getItemProp(e,"iconStyle"))("pBind",s.getPTOptions(e,i,"itemIcon")),Vp("tabindex",-1);}}function jo(n,o){if(n&1&&(Di(0,"span",19),zD(1),Gc()),n&2){let t=hD(4),e=t.$implicit,i=t.index,s=hD(2);FD(s.cn(s.cx("itemLabel"),s.getItemProp(e,"labelClass"))),Hp("ngStyle",s.getItemProp(e,"labelStyle"))("pBind",s.getPTOptions(e,i,"itemLabel")),zv(),Kc(" ",s.getItemLabel(e)," ");}}function Wo(n,o){if(n&1&&Bp(0,"span",20),n&2){let t=hD(4),e=t.$implicit,i=t.index,s=hD(2);FD(s.cn(s.cx("itemLabel"),s.getItemProp(e,"labelClass"))),Hp("ngStyle",s.getItemProp(e,"labelStyle"))("innerHTML",s.getItemLabel(e),rv)("pBind",s.getPTOptions(e,i,"itemLabel"));}}function Yo(n,o){if(n&1&&(Di(0,"span"),zD(1),Gc()),n&2){let t=hD(4).$implicit,e=hD(2);FD(e.cn(e.cx("itemBadge"),e.getItemProp(t,"badgeStyleClass"))),zv(),mh(e.getItemProp(t,"badge"));}}function Xo(n,o){if(n&1&&(ju(),Bp(0,"svg",23)),n&2){let t=hD(5),e=t.$implicit,i=t.index,s=hD(2);FD(s.cx("submenuIcon")),Hp("pBind",s.getPTOptions(e,i,"submenuIcon")),Vp("aria-hidden",true);}}function Zo(n,o){}function Uo(n,o){n&1&&Op(0,Zo,0,0,"ng-template",24),n&2&&jp("aria-hidden",true);}function Go(n,o){if(n&1&&(Zc(0),Op(1,Xo,1,4,"svg",21)(2,Uo,1,1,null,22),Vi$1()),n&2){let t=hD(6);zv(),Hp("ngIf",!t.tieredMenu.submenuIconTemplate&&!t.tieredMenu._submenuIconTemplate),zv(),Hp("ngTemplateOutlet",t.tieredMenu.submenuIconTemplate||t.tieredMenu._submenuIconTemplate);}}function Ko(n,o){if(n&1&&(Di(0,"a",15),Op(1,Ho,1,5,"span",16)(2,jo,2,5,"span",17)(3,Wo,1,5,"ng-template",null,2,fT)(5,Yo,2,3,"span",18)(6,Go,3,2,"ng-container",11),Gc()),n&2){let t=TD(4),e=hD(3),i=e.$implicit,s=e.index,r=hD(2);FD(r.cn(r.cx("itemLink"),r.getItemProp(i,"linkClass"))),Hp("target",r.getItemProp(i,"target"))("ngStyle",r.getItemProp(i,"linkStyle"))("pBind",r.getPTOptions(i,s,"itemLink")),Vp("href",r.getItemProp(i,"url"),Nf)("data-automationid",r.getItemProp(i,"automationId"))("title",r.getItemProp(i,"title"))("tabindex",-1),zv(),Hp("ngIf",r.getItemProp(i,"icon")),zv(),Hp("ngIf",r.getItemProp(i,"escape"))("ngIfElse",t),zv(3),Hp("ngIf",r.getItemProp(i,"badge")),zv(),Hp("ngIf",r.isItemGroup(i));}}function $o(n,o){if(n&1&&Bp(0,"span",19),n&2){let t=hD(4),e=t.$implicit,i=t.index,s=hD(2);FD(s.cn(s.cx("itemIcon"),s.getItemProp(e,"icon"),s.getItemProp(e,"iconClass"))),Hp("ngStyle",s.getItemProp(e,"iconStyle"))("pBind",s.getPTOptions(e,i,"itemIcon")),Vp("aria-hidden",true)("tabindex",-1);}}function Qo(n,o){if(n&1&&(Di(0,"span",19),zD(1),Gc()),n&2){let t=hD(4),e=t.$implicit,i=t.index,s=hD(2);FD(s.cn(s.cx("itemLabel"),s.getItemProp(e,"labelClass"))),Hp("ngStyle",s.getItemProp(e,"labelStyle"))("pBind",s.getPTOptions(e,i,"itemLabel")),zv(),Kc(" ",s.getItemLabel(e)," ");}}function qo(n,o){if(n&1&&Bp(0,"span",20),n&2){let t=hD(4),e=t.$implicit,i=t.index,s=hD(2);FD(s.cn(s.cx("itemLabel"),s.getItemProp(e,"labelClass"))),Hp("ngStyle",s.getItemProp(e,"labelStyle"))("innerHTML",s.getItemLabel(e),rv)("pBind",s.getPTOptions(e,i,"itemLabel"));}}function Jo(n,o){if(n&1&&(Di(0,"span"),zD(1),Gc()),n&2){let t=hD(4).$implicit,e=hD(2);FD(e.cn(e.cx("itemBadge"),e.getItemProp(t,"badgeStyleClass"))),zv(),mh(e.getItemProp(t,"badge"));}}function ts(n,o){if(n&1&&(ju(),Bp(0,"svg",23)),n&2){let t=hD(5),e=t.$implicit,i=t.index,s=hD(2);FD(s.cx("submenuIcon")),Hp("pBind",s.getPTOptions(e,i,"submenuIcon")),Vp("aria-hidden",true);}}function es(n,o){}function is(n,o){n&1&&Op(0,es,0,0,"ng-template",24),n&2&&jp("aria-hidden",true);}function ns(n,o){if(n&1&&(Zc(0),Op(1,ts,1,4,"svg",21)(2,is,1,1,null,22),Vi$1()),n&2){let t=hD(6);zv(),Hp("ngIf",!t.tieredMenu.submenuIconTemplate&&!t.tieredMenu._submenuIconTemplate),zv(),Hp("ngTemplateOutlet",t.tieredMenu.submenuIconTemplate||t.tieredMenu._submenuIconTemplate);}}function os(n,o){if(n&1&&(Di(0,"a",25),Op(1,$o,1,6,"span",16)(2,Qo,2,5,"span",17)(3,qo,1,5,"ng-template",null,2,fT)(5,Jo,2,3,"span",18)(6,ns,3,2,"ng-container",11),Gc()),n&2){let t=TD(4),e=hD(3),i=e.$implicit,s=e.index,r=hD(2);FD(r.cn(r.cx("itemLink"),r.getItemProp(i,"linkClass"))),Hp("routerLink",r.getItemProp(i,"routerLink"))("queryParams",r.getItemProp(i,"queryParams"))("routerLinkActive","p-tieredmenu-item-link-active")("routerLinkActiveOptions",r.getItemProp(i,"routerLinkActiveOptions")||iT(23,Vo))("target",r.getItemProp(i,"target"))("ngStyle",r.getItemProp(i,"linkStyle"))("fragment",r.getItemProp(i,"fragment"))("queryParamsHandling",r.getItemProp(i,"queryParamsHandling"))("preserveFragment",r.getItemProp(i,"preserveFragment"))("skipLocationChange",r.getItemProp(i,"skipLocationChange"))("replaceUrl",r.getItemProp(i,"replaceUrl"))("state",r.getItemProp(i,"state"))("pBind",r.getPTOptions(i,s,"itemLink")),Vp("data-automationid",r.getItemProp(i,"automationId"))("title",r.getItemProp(i,"title"))("tabindex",-1),zv(),Hp("ngIf",r.getItemProp(i,"icon")),zv(),Hp("ngIf",r.getItemProp(i,"escape"))("ngIfElse",t),zv(3),Hp("ngIf",r.getItemProp(i,"badge")),zv(),Hp("ngIf",r.isItemGroup(i));}}function ss(n,o){if(n&1&&(Zc(0),Op(1,Ko,7,14,"a",13)(2,os,7,24,"a",14),Vi$1()),n&2){let t=hD(2).$implicit,e=hD(2);zv(),Hp("ngIf",!e.getItemProp(t,"routerLink")),zv(),Hp("ngIf",e.getItemProp(t,"routerLink"));}}function rs(n,o){}function as(n,o){n&1&&Op(0,rs,0,0,"ng-template");}function ls(n,o){if(n&1&&(Zc(0),Op(1,as,1,0,null,26),Vi$1()),n&2){let t=hD(2).$implicit,e=hD(2);zv(),Hp("ngTemplateOutlet",e.itemTemplate)("ngTemplateOutletContext",aT(2,zo,t.item,e.getItemProp(t,"items")));}}function cs(n,o){if(n&1){let t=aD();Di(0,"p-tieredmenusub",27),Yp("itemClick",function(i){Mu(t);let s=hD(4);return Nu(s.itemClick.emit(i))})("itemMouseEnter",function(i){Mu(t);let s=hD(4);return Nu(s.onItemMouseEnter(i))}),Gc();}if(n&2){let t=hD(2).$implicit,e=hD(2);Hp("items",t.items)("itemTemplate",e.itemTemplate)("autoDisplay",e.autoDisplay)("menuId",e.menuId)("visible",e.isItemActive(t)&&e.isItemGroup(t))("activeItemPath",e.activeItemPath())("focusedItemId",e.focusedItemId)("ariaLabelledBy",e.getItemId(t))("level",e.level+1)("pt",e.pt())("motionOptions",e.motionOptions)("unstyled",e.unstyled());}}function ds(n,o){if(n&1){let t=aD();Di(0,"li",9,1)(2,"div",10),Yp("click",function(i){Mu(t);let s=hD().$implicit,r=hD(2);return Nu(r.onItemClick(i,s))})("mouseenter",function(i){Mu(t);let s=hD().$implicit,r=hD(2);return Nu(r.onItemMouseEnter({$event:i,processedItem:s}))}),Op(3,ss,3,2,"ng-container",11)(4,ls,2,5,"ng-container",11),Gc(),Op(5,cs,1,12,"p-tieredmenusub",12),Gc();}if(n&2){let t=hD(),e=t.$implicit,i=t.index,s=hD(2);FD(s.cn(s.cx("item",sT(23,Bo,e)),s.getItemProp(e,"styleClass"))),Hp("ngStyle",s.getItemProp(e,"style"))("pBind",s.getPTOptions(e,i,"item"))("pTooltip",s.getItemProp(e,"tooltip"))("tooltipOptions",s.getItemProp(e,"tooltipOptions"))("pTooltipUnstyled",s.unstyled()),Vp("id",s.getItemId(e))("data-p-highlight",s.isItemActive(e))("data-p-focused",s.isItemFocused(e))("data-p-disabled",s.isItemDisabled(e))("aria-label",s.getItemLabel(e))("aria-disabled",s.isItemDisabled(e)||void 0)("aria-haspopup",s.isItemGroup(e)&&!s.getItemProp(e,"to")?"menu":void 0)("aria-expanded",s.isItemGroup(e)?s.isItemActive(e):void 0)("aria-setsize",s.getAriaSetSize())("aria-posinset",s.getAriaPosInset(i)),zv(2),FD(s.cx("itemContent")),Hp("pBind",s.getPTOptions(e,i,"itemContent")),zv(),Hp("ngIf",!s.itemTemplate),zv(),Hp("ngIf",s.itemTemplate),zv(),Hp("ngIf",s.isItemVisible(e)&&s.isItemGroup(e));}}function ms(n,o){if(n&1&&Op(0,No,1,6,"li",6)(1,ds,6,25,"li",7),n&2){let t=o.$implicit,e=hD(2);Hp("ngIf",e.isItemVisible(t)&&e.getItemProp(t,"separator")),zv(),Hp("ngIf",e.isItemVisible(t)&&!e.getItemProp(t,"separator"));}}function hs(n,o){if(n&1){let t=aD();Di(0,"ul",4,0),Yp("keydown",function(i){Mu(t);let s=hD();return Nu(s.menuKeydown.emit(i))})("focus",function(i){Mu(t);let s=hD();return Nu(s.menuFocus.emit(i))})("blur",function(i){Mu(t);let s=hD();return Nu(s.menuBlur.emit(i))})("pMotionOnBeforeEnter",function(i){Mu(t);let s=hD();return Nu(s.onBeforeEnter(i))})("pMotionOnAfterLeave",function(){Mu(t);let i=hD();return Nu(i.onAfterLeave())}),Op(2,ms,2,2,"ng-template",5),Gc();}if(n&2){let t=hD();LD(t.inlineStyles),FD(t.root?t.cx("rootList"):t.cx("submenu")),Hp("id",t.menuId+"_list")("tabindex",t.tabindex)("pBind",t._ptm(t.root?"rootList":"submenu"))("pMotion",t.root?true:t.visible)("pMotionDisabled",t.root)("pMotionAppear",true)("pMotionName","p-anchored-overlay")("pMotionOptions",t.motionOptions),Vp("aria-label",t.ariaLabel)("aria-labelledBy",t.ariaLabelledBy)("aria-activedescendant",t.focusedItemId)("aria-orientation","vertical"),zv(2),Hp("ngForOf",t.items);}}var ps=["submenuicon"],us=["item"],_s=["rootmenu"],fs=["container"];function gs(n,o){if(n&1){let t=aD();Di(0,"div",3,0),Yp("click",function(i){Mu(t);let s=hD();return Nu(s.onOverlayClick(i))})("pMotionOnBeforeEnter",function(i){Mu(t);let s=hD();return Nu(s.onOverlayBeforeEnter(i))})("pMotionOnAfterEnter",function(){Mu(t);let i=hD();return Nu(i.onOverlayAfterEnter())})("pMotionOnAfterLeave",function(){Mu(t);let i=hD();return Nu(i.onOverlayAfterLeave())}),Di(2,"p-tieredMenuSub",4,1),Yp("itemClick",function(i){Mu(t);let s=hD();return Nu(s.onItemClick(i))})("menuFocus",function(i){Mu(t);let s=hD();return Nu(s.onMenuFocus(i))})("menuBlur",function(i){Mu(t);let s=hD();return Nu(s.onMenuBlur(i))})("menuKeydown",function(i){Mu(t);let s=hD();return Nu(s.onKeyDown(i))})("itemMouseEnter",function(i){Mu(t);let s=hD();return Nu(s.onItemMouseEnter(i))}),Gc()();}if(n&2){let t=hD();FD(t.cn(t.cx("root"),t.styleClass)),Hp("id",t.id)("ngStyle",t.style)("pBind",t.ptm("root"))("pMotion",t.visible||!t.popup)("pMotionName","p-anchored-overlay")("pMotionAppear",true)("pMotionDisabled",!t.popup)("pMotionOptions",t.computedMotionOptions()),zv(2),Hp("root",true)("visible",true)("items",t.processedItems)("itemTemplate",t.itemTemplate||t._itemTemplate)("menuId",t.id)("tabindex",t.disabled?-1:t.tabindex)("ariaLabel",t.ariaLabel)("ariaLabelledBy",t.ariaLabelledBy)("baseZIndex",t.baseZIndex)("autoZIndex",t.autoZIndex)("autoDisplay",t.autoDisplay)("popup",t.popup)("focusedItemId",t.focused?t.focusedItemId:void 0)("activeItemPath",t.activeItemPath())("pt",t.pt())("unstyled",t.unstyled())("motionOptions",t.computedMotionOptions());}}var vs={submenu:({instance:n,processedItem:o})=>({display:n.isItemActive(o)?"flex":"none"})},bs={root:({instance:n})=>["p-tieredmenu p-component",{"p-tieredmenu-overlay":n.popup,"p-tieredmenu-mobile":n.queryMatches()}],start:"p-tieredmenu-start",rootList:"p-tieredmenu-root-list",item:({instance:n,processedItem:o})=>["p-tieredmenu-item",{"p-tieredmenu-item-active":n.isItemActive(o),"p-focus":n.isItemFocused(o),"p-disabled":n.isItemDisabled(o)}],itemContent:"p-tieredmenu-item-content",itemLink:"p-tieredmenu-item-link",itemIcon:"p-tieredmenu-item-icon",itemLabel:"p-tieredmenu-item-label",itemBadge:"p-menuitem-badge",submenuIcon:"p-tieredmenu-submenu-icon",submenu:"p-tieredmenu-submenu",separator:"p-tieredmenu-separator",end:"p-tieredmenu-end"},mi=(()=>{class n extends ct{name="tieredmenu";style=An;classes=bs;inlineStyles=vs;static \u0275fac=(()=>{let t;return function(i){return (t||(t=ly(n)))(i||n)}})();static \u0275prov=re({token:n,factory:n.\u0275fac})}return n})();var jn=new M("TIEREDMENU_INSTANCE"),Hn=new M("TIEREDMENUSUB_INSTANCE"),ys=(()=>{class n extends $e$2{el;renderer;tieredMenu;get visible(){return this._visible}set visible(t){this._visible=t,(this._visible||this.root)&&this.render.set(true);}items;itemTemplate;root=false;autoDisplay;autoZIndex=true;baseZIndex=0;popup;menuId;ariaLabel;ariaLabelledBy;level=0;focusedItemId;activeItemPath=YF([]);motionOptions;tabindex=0;inlineStyles;itemClick=new Be;itemMouseEnter=new Be;menuFocus=new Be;menuBlur=new Be;menuKeydown=new Be;sublistViewChild;render=$o$1(false);_componentStyle=v(mi);bindDirectiveInstance=v(Qe$1,{self:true});$pcTieredMenu=v(jn,{optional:true,skipSelf:true})??void 0;$pcTieredMenuSub=v(Hn,{optional:true,skipSelf:true})??void 0;_visible=false;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]));}constructor(t,e,i){super(),this.el=t,this.renderer=e,this.tieredMenu=i;}positionSubmenu(t){Pi(this.tieredMenu.platformId)&&t&&Ii(t,this.level);}getItemProp(t,e,i=null){return t&&t.item?I(t.item[e],i):void 0}getItemId(t){return t.item?.id??`${this.menuId}_${t.key}`}getItemKey(t){return this.getItemId(t)}getItemLabel(t){return this.getItemProp(t,"label")}getAriaSetSize(){return this.items.filter(t=>this.isItemVisible(t)&&!this.getItemProp(t,"separator")).length}getAriaPosInset(t){return t-this.items.slice(0,t).filter(e=>{let i=this.isItemVisible(e),s=i&&this.getItemProp(e,"separator");return !i||s}).length+1}isItemVisible(t){return this.getItemProp(t,"visible")!==false}isItemActive(t){return this.activeItemPath()?this.activeItemPath().some(e=>e.key===t.key):false}isItemDisabled(t){return this.getItemProp(t,"disabled")}isItemFocused(t){return this.focusedItemId===this.getItemId(t)}isItemGroup(t){return ge(t.items)}_ptm(t,e){return this.$pcTieredMenu?this.$pcTieredMenu.ptm(t,e):this.ptm(t,e)}getPTOptions(t,e,i){return this._ptm(i,{context:{item:t.item,index:e,active:this.isItemActive(t),focused:this.isItemFocused(t),disabled:this.isItemDisabled(t)}})}onItemMouseEnter(t){if(this.autoDisplay){let{event:e,processedItem:i}=t;this.itemMouseEnter.emit({originalEvent:e,processedItem:i});}}onItemClick(t,e){this.getItemProp(e,"command",{originalEvent:t,item:e.item}),this.itemClick.emit({originalEvent:t,processedItem:e,isFocus:true});}onBeforeEnter(t){this.positionSubmenu(t.element);}onAfterLeave(){this.render.set(false);}static \u0275fac=function(e){return new(e||n)(Mr(Dr),Mr(SI),Mr(vo$1(()=>Oe)))};static \u0275cmp=wE({type:n,selectors:[["p-tieredMenuSub"],["p-tieredmenusub"]],viewQuery:function(e,i){if(e&1&&eh(Fo,5),e&2){let s;ID(s=ED())&&(i.sublistViewChild=s.first);}},inputs:{visible:"visible",items:"items",itemTemplate:"itemTemplate",root:[2,"root","root",o0],autoDisplay:[2,"autoDisplay","autoDisplay",o0],autoZIndex:[2,"autoZIndex","autoZIndex",o0],baseZIndex:[2,"baseZIndex","baseZIndex",i0],popup:[2,"popup","popup",o0],menuId:"menuId",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",level:[2,"level","level",i0],focusedItemId:"focusedItemId",activeItemPath:[1,"activeItemPath"],motionOptions:"motionOptions",tabindex:[2,"tabindex","tabindex",i0],inlineStyles:"inlineStyles"},outputs:{itemClick:"itemClick",itemMouseEnter:"itemMouseEnter",menuFocus:"menuFocus",menuBlur:"menuBlur",menuKeydown:"menuKeydown"},features:[oT([{provide:Hn,useExisting:vo$1(()=>n)},{provide:Ie$1,useExisting:vo$1(()=>n)}]),OE([Qe$1]),Rp],decls:1,vars:1,consts:[["sublist",""],["listItem",""],["htmlLabel",""],["role","menu",3,"class","id","tabindex","pBind","style","pMotion","pMotionDisabled","pMotionAppear","pMotionName","pMotionOptions"],["role","menu",3,"keydown","focus","blur","pMotionOnBeforeEnter","pMotionOnAfterLeave","id","tabindex","pBind","pMotion","pMotionDisabled","pMotionAppear","pMotionName","pMotionOptions"],["ngFor","",3,"ngForOf"],["role","separator",3,"style","class","pBind",4,"ngIf"],["role","menuitem",3,"ngStyle","class","pBind","pTooltip","tooltipOptions","pTooltipUnstyled",4,"ngIf"],["role","separator",3,"pBind"],["role","menuitem",3,"ngStyle","pBind","pTooltip","tooltipOptions","pTooltipUnstyled"],[3,"click","mouseenter","pBind"],[4,"ngIf"],[3,"items","itemTemplate","autoDisplay","menuId","visible","activeItemPath","focusedItemId","ariaLabelledBy","level","pt","motionOptions","unstyled","itemClick","itemMouseEnter",4,"ngIf"],["pRipple","",3,"target","class","ngStyle","pBind",4,"ngIf"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","class","ngStyle","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind",4,"ngIf"],["pRipple","",3,"target","ngStyle","pBind"],[3,"class","ngStyle","pBind",4,"ngIf"],[3,"class","ngStyle","pBind",4,"ngIf","ngIfElse"],[3,"class",4,"ngIf"],[3,"ngStyle","pBind"],[3,"ngStyle","innerHTML","pBind"],["data-p-icon","angle-right",3,"class","pBind",4,"ngIf"],[4,"ngTemplateOutlet"],["data-p-icon","angle-right",3,"pBind"],[3,"aria-hidden"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","ngStyle","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"itemClick","itemMouseEnter","items","itemTemplate","autoDisplay","menuId","visible","activeItemPath","focusedItemId","ariaLabelledBy","level","pt","motionOptions","unstyled"]],template:function(e,i){e&1&&YE(0,hs,3,17,"ul",3),e&2&&KE(i.render()?0:-1);},dependencies:[n,Gt,at,Bt,kt,Nt$1,sa,$t,ta,Ft,di,Nn,Qe$1,Fn,Gi,et,mt,vt],encapsulation:2,changeDetection:1})}return n})(),Oe=(()=>{class n extends $e$2{overlayService;componentName="TieredMenu";set model(t){this._model=t,this._processedItems=this.createProcessedItems(this._model||[]);}get model(){return this._model}popup;style;styleClass;breakpoint="960px";autoZIndex=true;baseZIndex=0;autoDisplay=true;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";id;ariaLabel;ariaLabelledBy;disabled=false;tabindex=0;appendTo=YF(void 0);motionOptions=YF(void 0);computedMotionOptions=mT(()=>t$1(t$1({},this.ptm("motion")),this.motionOptions()));onShow=new Be;onHide=new Be;rootmenu;containerViewChild;submenuIconTemplate;itemTemplate;templates;$appendTo=mT(()=>this.appendTo()||this.config.overlayAppendTo());render=$o$1(false);container;outsideClickListener;resizeListener;scrollHandler;target;relatedTarget;visible;dirty=false;focused=false;activeItemPath=$o$1([]);number=$o$1(0);focusedItemInfo=$o$1({index:-1,level:0,parentKey:"",item:null});searchValue="";searchTimeout;_processedItems;_model;_componentStyle=v(mi);bindDirectiveInstance=v(Qe$1,{self:true});matchMediaListener;query;queryMatches=$o$1(false);_submenuIconTemplate;_itemTemplate;get visibleItems(){let t=this.activeItemPath().find(e=>e.key===this.focusedItemInfo().parentKey);return t?t.items:this.processedItems}get processedItems(){return (!this._processedItems||!this._processedItems.length)&&(this._processedItems=this.createProcessedItems(this.model||[])),this._processedItems}get focusedItemId(){let t=this.focusedItemInfo();return t.item?.id?t.item.id:t.index!==-1?`${this.id}${ge(t.parentKey)?"_"+t.parentKey:""}_${t.index}`:null}constructor(t){super(),this.overlayService=t,zu(()=>{let e=this.activeItemPath();ge(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener());});}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]));}onInit(){this.bindMatchMediaListener(),this.id=this.id||me("pn_id_");}onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case "submenuicon":this._submenuIconTemplate=t.template;break;case "item":this._itemTemplate=t.template;break;default:this._itemTemplate=t.template;break}});}bindMatchMediaListener(){if(Pi(this.platformId)&&!this.matchMediaListener){let t=window.matchMedia(`(max-width: ${this.breakpoint})`);this.query=t,this.queryMatches.set(t.matches),this.matchMediaListener=()=>{this.queryMatches.set(t.matches);},t.addEventListener("change",this.matchMediaListener);}}unbindMatchMediaListener(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null);}createProcessedItems(t,e=0,i={},s=""){let r=[];return t&&t.forEach((l,h)=>{let _=(s!==""?s+"_":"")+h,p={item:l,index:h,level:e,key:_,parent:i,parentKey:s};p.items=this.createProcessedItems(l.items,e+1,p,_),r.push(p);}),r}getItemProp(t,e){return t?I(t[e]):void 0}getProccessedItemLabel(t){return t?this.getItemLabel(t.item):void 0}getItemLabel(t){return this.getItemProp(t,"label")}isProcessedItemGroup(t){return t&&ge(t.items)}isSelected(t){return this.activeItemPath().some(e=>e.key===t.key)}isValidSelectedItem(t){return this.isValidItem(t)&&this.isSelected(t)}isValidItem(t){return !!t&&!this.isItemDisabled(t.item)&&!this.isItemSeparator(t.item)&&this.isItemVisible(t.item)}isItemDisabled(t){return this.getItemProp(t,"disabled")}isItemVisible(t){return this.getItemProp(t,"visible")!==false}isItemSeparator(t){return this.getItemProp(t,"separator")}isItemMatched(t){return this.isValidItem(t)&&this.getProccessedItemLabel(t).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isProccessedItemGroup(t){return t&&ge(t.items)}onOverlayClick(t){this.popup&&this.overlayService.add({originalEvent:t,target:this.el.nativeElement});}onItemClick(t){let{originalEvent:e,processedItem:i}=t,s=this.isProcessedItemGroup(i),r=Nt(i.parent);if(this.isSelected(i)){let{index:h,key:_,level:p,parentKey:y,item:j}=i;this.activeItemPath.set(this.activeItemPath().filter($=>_!==$.key&&_.startsWith($.key))),this.focusedItemInfo.set({index:h,level:p,parentKey:y,item:j}),this.dirty=true,Oi(this.rootmenu?.sublistViewChild?.nativeElement);}else if(s)this.onItemChange(t);else {let h=r?i:this.activeItemPath().find(_=>_.parentKey==="");this.hide(e),this.changeFocusedItemIndex(e,h?.index??-1),Oi(this.rootmenu?.sublistViewChild?.nativeElement);}}onItemMouseEnter(t){xi()?this.onItemChange({event:t,processedItem:t.processedItem,focus:this.autoDisplay},"hover"):this.dirty&&this.onItemChange(t,"hover");}onKeyDown(t){let e=t.metaKey||t.ctrlKey;switch(t.code){case "ArrowDown":this.onArrowDownKey(t);break;case "ArrowUp":this.onArrowUpKey(t);break;case "ArrowLeft":this.onArrowLeftKey(t);break;case "ArrowRight":this.onArrowRightKey(t);break;case "Home":this.onHomeKey(t);break;case "End":this.onEndKey(t);break;case "Space":this.onSpaceKey(t);break;case "Enter":this.onEnterKey(t);break;case "Escape":this.onEscapeKey(t);break;case "Tab":this.onTabKey(t);break;case "PageDown":case "PageUp":case "Backspace":case "ShiftLeft":case "ShiftRight":break;default:!e&&mi$1(t.key)&&this.searchItems(t,t.key);break}}onArrowDownKey(t){let e=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(t,e),t.preventDefault();}onArrowRightKey(t){let e=this.visibleItems[this.focusedItemInfo().index],i=this.isProccessedItemGroup(e),s=e?.item;i&&(this.onItemChange({originalEvent:t,processedItem:e}),this.focusedItemInfo.set({index:-1,parentKey:e.key,item:s}),this.searchValue="",this.onArrowDownKey(t)),t.preventDefault();}onArrowUpKey(t){if(t.altKey){if(this.focusedItemInfo().index!==-1){let e=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(e)&&this.onItemChange({originalEvent:t,processedItem:e});}this.popup&&this.hide(t,true),t.preventDefault();}else {let e=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(t,e),t.preventDefault();}}onArrowLeftKey(t){let e=this.visibleItems[this.focusedItemInfo().index];if(!e){t.preventDefault();return}let i=this.activeItemPath().find(l=>l.key===e.parentKey);Nt(e.parent)||(this.focusedItemInfo.set({index:-1,parentKey:i?i.parentKey:"",item:e.item}),this.searchValue="",this.onArrowDownKey(t));let r=this.activeItemPath().filter(l=>l.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(r),t.preventDefault();}onHomeKey(t){this.changeFocusedItemIndex(t,this.findFirstItemIndex()),t.preventDefault();}onEndKey(t){this.changeFocusedItemIndex(t,this.findLastItemIndex()),t.preventDefault();}onSpaceKey(t){this.onEnterKey(t);}onEscapeKey(t){this.hide(t,true),this.focusedItemInfo().index=this.findFirstFocusedItemIndex(),t.preventDefault();}onTabKey(t){if(this.focusedItemInfo().index!==-1){let e=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(e)&&this.onItemChange({originalEvent:t,processedItem:e});}this.hide();}onEnterKey(t){if(this.focusedItemInfo().index!==-1){let e=Ai$1(this.rootmenu?.el?.nativeElement,`li[id="${`${this.focusedItemId}`}"]`),i=e&&(Ai$1(e,'[data-pc-section="itemlink"]')||Ai$1(e,"a,button"));if(i?i.click():e&&e.click(),!this.popup){let s=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(s)&&(this.focusedItemInfo().index=this.findFirstFocusedItemIndex());}}t.preventDefault();}onItemChange(t,e){let{processedItem:i,isFocus:s}=t;if(Nt(i))return;let{index:r,key:l,level:h,parentKey:_,items:p,item:y}=i,j=ge(p),$=this.activeItemPath().filter(et=>et.parentKey!==_&&et.parentKey!==l);j&&$.push(i),this.focusedItemInfo.set({index:r,level:h,parentKey:_,item:y}),j&&(this.dirty=true),s&&Oi(this.rootmenu?.sublistViewChild?.nativeElement),!(e==="hover"&&this.queryMatches())&&this.activeItemPath.set($);}onMenuFocus(t){this.focused=true,this.focusedItemInfo().index===-1&&this.popup;}onMenuBlur(t){this.focused=false,this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),this.searchValue="",this.dirty=false;}onOverlayBeforeEnter(t){this.popup&&(this.container=t.element,Wt(this.container,{position:"absolute"}),this.moveOnTop(),this.onShow.emit({}),this.$attrSelector&&this.container?.setAttribute(this.$attrSelector,""),this.appendOverlay(),this.alignOverlay());}onOverlayAfterEnter(){this.popup&&(this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.scrollInView()),Oi(this.rootmenu?.sublistViewChild?.nativeElement);}onOverlayAfterLeave(){this.restoreOverlayAppend(),this.onOverlayHide(),this.render.set(false),this.onHide.emit({});}relativeAlign=false;alignOverlay(){this.container&&this.target&&(this.relativeAlign?bi(this.container,this.target):Si(this.container,this.target),Ht$1(this.target)>Ht$1(this.container)&&(this.container.style.minWidth=Ht$1(this.target)+"px"));}appendOverlay(){this.$appendTo()&&this.$appendTo()!=="self"&&(this.$appendTo()==="body"?Ei(this.document.body,this.container):Ei(this.$appendTo(),this.container));}restoreOverlayAppend(){this.container&&this.$appendTo()!=="self"&&Ei(this.el.nativeElement,this.container);}moveOnTop(){this.autoZIndex&&Ct.set("menu",this.container,this.baseZIndex+this.config.zIndex.menu);}hide(t,e){this.popup&&(this.onHide.emit({}),this.visible=false),this.activeItemPath.set([]),this.focusedItemInfo.set({index:-1,level:0,parentKey:""}),e&&Oi(this.relatedTarget||this.target||this.rootmenu?.sublistViewChild?.nativeElement),this.dirty=false;}toggle(t){this.visible?this.hide(t,true):this.show(t);}show(t,e){this.popup&&(this.visible=true,this.target=this.target||t.currentTarget,this.relatedTarget=t.relatedTarget||null,this.relativeAlign=t?.relativeAlign||null),this.render.set(true),this.focusedItemInfo.set({index:-1,level:0,parentKey:""}),e&&Oi(this.rootmenu?.sublistViewChild?.nativeElement),this.cd.markForCheck();}searchItems(t,e){this.searchValue=(this.searchValue||"")+e;let i=-1,s=false;return this.focusedItemInfo().index!==-1?(i=this.visibleItems.slice(this.focusedItemInfo().index).findIndex(r=>this.isItemMatched(r)),i=i===-1?this.visibleItems.slice(0,this.focusedItemInfo().index).findIndex(r=>this.isItemMatched(r)):i+this.focusedItemInfo().index):i=this.visibleItems.findIndex(r=>this.isItemMatched(r)),i!==-1&&(s=true),i===-1&&this.focusedItemInfo().index===-1&&(i=this.findFirstFocusedItemIndex()),i!==-1&&this.changeFocusedItemIndex(t,i),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null;},500),s}findLastFocusedItemIndex(){let t=this.findSelectedItemIndex();return t<0?this.findLastItemIndex():t}findLastItemIndex(){return di$1(this.visibleItems,t=>this.isValidItem(t))}findPrevItemIndex(t){let e=t>0?di$1(this.visibleItems.slice(0,t),i=>this.isValidItem(i)):-1;return e>-1?e:t}findNextItemIndex(t){let e=t<this.visibleItems.length-1?this.visibleItems.slice(t+1).findIndex(i=>this.isValidItem(i)):-1;return e>-1?e+t+1:t}findFirstFocusedItemIndex(){let t=this.findSelectedItemIndex();return t<0?this.findFirstItemIndex():t}findFirstItemIndex(){return this.visibleItems.findIndex(t=>this.isValidItem(t))}findSelectedItemIndex(){return this.visibleItems.findIndex(t=>this.isValidSelectedItem(t))}changeFocusedItemIndex(t,e){if(this.focusedItemInfo().index!==e){let i=this.focusedItemInfo();this.focusedItemInfo.set(u(t$1({},i),{item:this.visibleItems[e].item,index:e})),this.scrollInView();}}scrollInView(t=-1){let e=t!==-1?`${this.id}_${t}`:this.focusedItemId,i=Ai$1(this.rootmenu?.el?.nativeElement,`li[id="${e}"]`);i&&i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"nearest"});}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new _e(this.target,t=>{this.visible&&this.hide(t,true);})),this.scrollHandler.bindScrollListener();}unbindScrollListener(){this.scrollHandler&&(this.scrollHandler.unbindScrollListener(),this.scrollHandler=null);}bindResizeListener(){Pi(this.platformId)&&(this.resizeListener||(this.resizeListener=this.renderer.listen(this.document.defaultView,"resize",t=>{xi()||this.hide(t,true);})));}bindOutsideClickListener(){Pi(this.platformId)&&(this.outsideClickListener||(this.outsideClickListener=this.renderer.listen(this.document,"click",t=>{let e=this.containerViewChild&&!this.containerViewChild.nativeElement.contains(t.target),i=this.popup?!(this.target&&(this.target===t.target||this.target.contains(t.target))):true;e&&i&&this.hide();})));}unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null);}unbindResizeListener(){this.resizeListener&&(this.resizeListener(),this.resizeListener=null);}onOverlayHide(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.cd.destroyed||(this.target=null),this.container&&this.autoZIndex&&Ct.clear(this.container);}onDestroy(){this.popup&&(this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.restoreOverlayAppend(),this.onOverlayHide()),this.unbindMatchMediaListener();}static \u0275fac=function(e){return new(e||n)(Mr(Bi$1))};static \u0275cmp=wE({type:n,selectors:[["p-tieredMenu"],["p-tieredmenu"],["p-tiered-menu"]],contentQueries:function(e,i,s){if(e&1&&Xp(s,ps,4)(s,us,4)(s,Vi,4),e&2){let r;ID(r=ED())&&(i.submenuIconTemplate=r.first),ID(r=ED())&&(i.itemTemplate=r.first),ID(r=ED())&&(i.templates=r);}},viewQuery:function(e,i){if(e&1&&eh(_s,5)(fs,5),e&2){let s;ID(s=ED())&&(i.rootmenu=s.first),ID(s=ED())&&(i.containerViewChild=s.first);}},inputs:{model:"model",popup:[2,"popup","popup",o0],style:"style",styleClass:"styleClass",breakpoint:"breakpoint",autoZIndex:[2,"autoZIndex","autoZIndex",o0],baseZIndex:[2,"baseZIndex","baseZIndex",i0],autoDisplay:[2,"autoDisplay","autoDisplay",o0],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",id:"id",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",disabled:[2,"disabled","disabled",o0],tabindex:[2,"tabindex","tabindex",i0],appendTo:[1,"appendTo"],motionOptions:[1,"motionOptions"]},outputs:{onShow:"onShow",onHide:"onHide"},features:[oT([mi,{provide:jn,useExisting:n},{provide:Ie$1,useExisting:n}]),OE([Qe$1]),Rp],decls:1,vars:1,consts:[["container",""],["rootmenu",""],[3,"id","class","ngStyle","pBind","pMotion","pMotionName","pMotionAppear","pMotionDisabled","pMotionOptions"],[3,"click","pMotionOnBeforeEnter","pMotionOnAfterEnter","pMotionOnAfterLeave","id","ngStyle","pBind","pMotion","pMotionName","pMotionAppear","pMotionDisabled","pMotionOptions"],[3,"itemClick","menuFocus","menuBlur","menuKeydown","itemMouseEnter","root","visible","items","itemTemplate","menuId","tabindex","ariaLabel","ariaLabelledBy","baseZIndex","autoZIndex","autoDisplay","popup","focusedItemId","activeItemPath","pt","unstyled","motionOptions"]],template:function(e,i){e&1&&YE(0,gs,4,27,"div",2),e&2&&KE(i.render()||!i.popup?0:-1);},dependencies:[Gt,Nt$1,ys,sa,di,Qe$1,Gi,et,mt,vt],encapsulation:2})}return n})(),Wn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=ME({type:n});static \u0275inj=nu({imports:[Oe,Gi,Gi]})}return n})();var xs=()=>["/layout-pages/home"],ks=()=>["fas","home"],Cs=()=>["/layout-pages/about-me"],Is=()=>["fas","person"],Ss=()=>["/layout-pages/awards"],Os=()=>["fas","award"],Ms=()=>["fas","globe"],jc=(()=>{class n{constructor(){this.sidenavClose=ZF(),this.isWidthXs=false,this.menuItems=[],this.destroyRef=v(ze),this.onSidenavClose=()=>{this.isWidthXs&&this.sidenavClose.emit();};let t=v(ae);this.mediaObserverAsObservable=t.asObservable().pipe(U(this.destroyRef)).subscribe(e=>{e[0]?.mqAlias==="xs"?this.isWidthXs=true:this.isWidthXs=false;});}ngOnInit(){this.menuItems=[{label:"Next.JS Aug.2025",icon:"pi pi-th-large",url:"https://nextjs-react-seed-main-app.vercel.app",target:"_blank"},{label:"Angular",styleclass:"side-menu-item-style",icon:"pi pi-box",items:[{label:"Features",icon:"pi pi-box",styleclass:"side-menu-item-style",items:[{label:"Signals",icon:"pi pi-book",styleclass:"side-menu-item-style",routerLink:"/angular-news-pages/angular-news-v16-signals"},{label:"@if @for",icon:"pi pi-book",styleclass:"side-menu-item-style"}]}]},{label:"Playground",icon:"pi pi-bolt",styleclass:"side-menu-item-style",items:[{label:"Acts",icon:"pi pi-bolt",styleclass:"side-menu-item-style",items:[{label:"Material",icon:"pi pi-book",styleclass:"side-menu-item-style",routerLink:"material-examples/components/material-examples-main"},{label:"Nested",icon:"pi pi-book",styleclass:"side-menu-item-style",routerLink:"playground/components/nested-example"},{label:"Wizard",icon:"pi pi-book",styleclass:"side-menu-item-style",routerLink:"playground/components/customizable-wizard"},{label:"Slide Toggle",icon:"pi pi-book",styleclass:"side-menu-item-style",routerLink:"playground/components/slide-toggle-example"},{label:"Labyrinth",icon:"pi pi-book",styleclass:"side-menu-item-style",routerLink:"playground/components/labyrinth-generator"},{label:"Mersenne",icon:"pi pi-book",styleclass:"side-menu-item-style",routerLink:"playground/components/mersenne"},{label:"Learning Check",icon:"pi pi-book",styleclass:"side-menu-item-style",routerLink:"playground/components/learning-check"}]}]},{label:"Numbers",icon:"pi pi-th-large",routerLink:"/digits/digits-game"}];}static{this.\u0275fac=function(e){return new(e||n)};}static{this.\u0275cmp=wE({type:n,selectors:[["app-sidenav-list"]],outputs:{sidenavClose:"sidenavClose"},decls:20,vars:15,consts:[[1,"side-nav-layout"],[1,"mat-side-nav-style"],["mat-list-item","",3,"click","routerLink"],[3,"icon"],[1,"nav-caption"],["mat-list-item","","href","https://lkovari.github.io/KLHome",3,"click"],[1,"bottom-menu-section"],["styleClass","slide-menu-style",3,"model"]],template:function(e,i){e&1&&(Di(0,"div",0)(1,"mat-nav-list",1)(2,"a",2),Yp("click",function(){return i.onSidenavClose()}),Bp(3,"fa-icon",3),Di(4,"span",4),zD(5,"Home"),Gc()(),Di(6,"a",2),Yp("click",function(){return i.onSidenavClose()}),Bp(7,"fa-icon",3),Di(8,"span",4),zD(9,"About Me"),Gc()(),Di(10,"a",2),Yp("click",function(){return i.onSidenavClose()}),Bp(11,"fa-icon",3),Di(12,"span",4),zD(13,"Awards"),Gc()(),Di(14,"a",5),Yp("click",function(){return i.onSidenavClose()}),Bp(15,"fa-icon",3),Di(16,"span",4),zD(17,"Tech Stack & Codes"),Gc()()(),Di(18,"div",6),Bp(19,"p-tieredmenu",7),Gc()()),e&2&&(zv(2),Hp("routerLink",iT(8,xs)),zv(),Hp("icon",iT(9,ks)),zv(3),Hp("routerLink",iT(10,Cs)),zv(),Hp("icon",iT(11,Is)),zv(3),Hp("routerLink",iT(12,Ss)),zv(),Hp("icon",iT(13,Os)),zv(4),Hp("icon",iT(14,Ms)),zv(4),Hp("model",i.menuItems));},dependencies:[Rn,Ln,$t,ks$1,Wn,Oe],styles:[".side-nav-layout[_ngcontent-%COMP%]   .mat-side-nav-style[_ngcontent-%COMP%]   .layout-content[_ngcontent-%COMP%]{height:40rem}.side-nav-layout[_ngcontent-%COMP%]   .mat-side-nav-style[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%] {height:40rem}.side-nav-layout[_ngcontent-%COMP%]   .mat-side-nav-style[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#fff}.side-nav-layout[_ngcontent-%COMP%]   .mat-side-nav-style[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .side-nav-layout[_ngcontent-%COMP%]   .mat-side-nav-style[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active{color:#d3d3d3}.side-nav-layout[_ngcontent-%COMP%]   .mat-side-nav-style[_ngcontent-%COMP%]   .nav-caption[_ngcontent-%COMP%]{display:inline-block;padding-left:.375rem}.side-nav-layout[_ngcontent-%COMP%]   .bottom-menu-section[_ngcontent-%COMP%]{position:fixed}.side-nav-layout[_ngcontent-%COMP%]   .bottom-menu-section[_ngcontent-%COMP%]   p-slidemenu[_ngcontent-%COMP%]  .p-slidemenu ol, .side-nav-layout[_ngcontent-%COMP%]   .bottom-menu-section[_ngcontent-%COMP%]   p-slidemenu[_ngcontent-%COMP%]  .p-slidemenu ul{padding-left:0!important}.side-nav-layout[_ngcontent-%COMP%]   .bottom-menu-section[_ngcontent-%COMP%]   p-slidemenu[_ngcontent-%COMP%]  .p-slidemenu{width:15.5rem;border:none}"],changeDetection:1});}}return n})();
export{_n as _,br as b,jc as j,pl as p,to as t,vn as v,wr as w};