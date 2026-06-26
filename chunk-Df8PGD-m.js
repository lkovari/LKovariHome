import {v as v$1,E as ve,b$ as ae,bY as Cr,c3 as KF,bD as Ut,y as yE}from'./main-URKMETEB.js';var i=new WeakMap,v=(()=>{class e{_appRef;_injector=v$1(ve);_environmentInjector=v$1(ae);load(o){let n=this._appRef=this._appRef||this._injector.get(Cr),t=i.get(n);t||(t={loaders:new Set,refs:[]},i.set(n,t),n.onDestroy(()=>{i.get(n)?.refs.forEach(m=>m.destroy()),i.delete(n);})),t.loaders.has(o)||(t.loaders.add(o),t.refs.push(KF(o,{environmentInjector:this._environmentInjector})));}static \u0275fac=function(n){return new(n||e)};static \u0275prov=Ut({token:e,factory:e.\u0275fac})}return e})();var H=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=yE({type:e,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(n,t){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return e})(),r;function g(){if(r===void 0&&(r=null,typeof window<"u")){let e=window;e.trustedTypes!==void 0&&(r=e.trustedTypes.createPolicy("angular#components",{createHTML:u=>u}));}return r}function L(e){return g()?.createHTML(e)||e}export{H,L,v};