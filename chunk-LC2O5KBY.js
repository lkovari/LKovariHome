import{a as A,b,c as x,e as j}from"./chunk-HC7ZV5RW.js";import{e as V,f as I,g as D,i as Q}from"./chunk-6BM3S7FA.js";import{b as z}from"./chunk-X4IG2B66.js";import{H as T,J as E,L as R}from"./chunk-NFPEMT6L.js";import{g as N,h as P,k as u}from"./chunk-56GJ7L2W.js";import{Kb as h,Tb as r,Ub as a,Vb as d,Zb as C,ac as c,ca as p,gb as g,hb as m,hc as M,ic as w,jc as _,jd as S,mc as y,nc as O,ra as s,sa as l,tb as v,ub as f}from"./chunk-MP4GGJGU.js";var L=["sidenav"],k=(()=>{class e{constructor(n,t){this.router=n,this.mediaObserver=t}ngOnInit(){this.router.url==="/"&&this.router.navigate(["/layout-pages/home"])}initializeSideNav(){this.mediaObserver.isActive("xs")?this.sidenav.close():this.sidenav.open()}isScreenXs(){return this.mediaObserver.isActive("xs")}ngAfterViewInit(){setTimeout(()=>{this.initializeSideNav()})}onSidenavToggle(){this.sidenav.toggle(),console.log(">>>>>>> sidenav "+this.sidenav.opened)}static{this.\u0275fac=function(t){return new(t||e)(m(P),m(T))}}static{this.\u0275cmp=v({type:e,selectors:[["app-angular-news"]],viewQuery:function(t,i){if(t&1&&M(L,5),t&2){let o;w(o=_())&&(i.sidenav=o.first)}},decls:15,vars:2,consts:[["sidenav",""],[1,"layout-content"],["color","primary",1,"toolbar-style"],["fxShow","true","fxHide.gt-xs",""],["mat-icon-button","",3,"click"],["autosize",""],["role","navigation",1,"mat-elevation-z10",3,"mode","opened"],[3,"sidenavClose"]],template:function(t,i){if(t&1){let o=C();r(0,"div",1)(1,"app-layout-content")(2,"mat-toolbar",2)(3,"div",3)(4,"button",4),c("click",function(){return s(o),l(i.onSidenavToggle())}),r(5,"mat-icon"),O(6,"menu"),a()()(),d(7,"app-header"),a(),r(8,"mat-sidenav-container",5)(9,"mat-sidenav",6,0)(11,"app-sidenav-list",7),c("sidenavClose",function(){s(o);let X=y(10);return l(X.close())}),a()(),r(12,"mat-sidenav-content")(13,"main"),d(14,"router-outlet"),a()()()()()}t&2&&(g(9),h("mode",i.isScreenXs()?"over":"side")("opened",!i.isScreenXs()))},dependencies:[V,I,R,E,j,z,D,x,b,Q,A,N],styles:[".layout-content[_ngcontent-%COMP%]{height:calc(100% - 64px)}.layout-content[_ngcontent-%COMP%]   mat-sidenav-container[_ngcontent-%COMP%], .layout-content[_ngcontent-%COMP%]   mat-sidenav-content[_ngcontent-%COMP%], .layout-content[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]{height:100%}.layout-content[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]{width:250px}.layout-content[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{padding:10px}.layout-content[_ngcontent-%COMP%]   .toolbar-style[_ngcontent-%COMP%]{width:100%}"]})}}return e})();var q=[{path:"",component:k,children:[{path:"angular-news-pages/angular-news-v16-signals",loadChildren:()=>import("./chunk-5Z65XKP2.js").then(e=>e.AngularNewsV16SignalsModule)},{path:"angular-news-pages/angular-news-v15-standalone",loadChildren:()=>import("./chunk-SDBD5HWM.js").then(e=>e.AngularNewsV15StandaloneModule)}]}],se=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=f({type:e})}static{this.\u0275inj=p({imports:[S,u.forChild(q),u]})}}return e})();export{k as a,se as b};
