import {v as v$1,a8 as Ee,bm as le,cO as Sr,bo as l0,bJ as qt,N as NE}from'./main-SJXK2ORQ.js';var i=new WeakMap,v=(()=>{class e{_appRef;_injector=v$1(Ee);_environmentInjector=v$1(le);load(o){let n=this._appRef=this._appRef||this._injector.get(Sr),t=i.get(n);t||(t={loaders:new Set,refs:[]},i.set(n,t),n.onDestroy(()=>{i.get(n)?.refs.forEach(m=>m.destroy()),i.delete(n);})),t.loaders.has(o)||(t.loaders.add(o),t.refs.push(l0(o,{environmentInjector:this._environmentInjector})));}static \u0275fac=function(n){return new(n||e)};static \u0275prov=qt({token:e,factory:e.\u0275fac})}return e})();var H=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=NE({type:e,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(n,t){},styles:[`.cdk-visually-hidden {
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