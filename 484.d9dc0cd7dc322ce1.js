"use strict";(self.webpackChunkLKovariHome=self.webpackChunkLKovariHome||[]).push([[484],{1484:(x,r,t)=>{t.r(r),t.d(r,{AngularNewsModule:()=>S});var u=t(4755),l=t(2446),g=t(7126),c=t(9814),n=t(2223),v=t(2233),m=t(1728),h=t(430),C=t(9383),d=t(2214),p=t(5829),A=t(6290),f=t(9096),y=t(5049);const M=["sidenav"],N=[{path:"",component:(()=>{class e{constructor(o,s){this.router=o,this.mediaObserver=s}ngOnInit(){"/"===this.router.url&&this.router.navigate(["/layout-pages/home"])}initializeSideNav(){this.mediaObserver.isActive("xs")?this.sidenav.close():this.sidenav.open()}isScreenXs(){return this.mediaObserver.isActive("xs")}ngAfterViewInit(){setTimeout(()=>{this.initializeSideNav()})}onSidenavToggle(){this.sidenav.toggle(),console.log(">>>>>>> sidenav "+this.sidenav.opened)}}return e.\u0275fac=function(o){return new(o||e)(n.Y36(l.F0),n.Y36(v.u0))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-angular-news"]],viewQuery:function(o,s){if(1&o&&n.Gf(M,5),2&o){let i;n.iGM(i=n.CRH())&&(s.sidenav=i.first)}},decls:15,vars:2,consts:[[1,"layout-content"],["color","primary",1,"toolbar-style"],["fxShow","true","fxHide.gt-xs",""],["mat-icon-button","",3,"click"],["autosize",""],["role","navigation",1,"mat-elevation-z10",3,"mode","opened"],["sidenav",""],[3,"sidenavClose"]],template:function(o,s){if(1&o){const i=n.EpF();n.TgZ(0,"div",0)(1,"app-layout-content")(2,"mat-toolbar",1)(3,"div",2)(4,"button",3),n.NdJ("click",function(){return s.onSidenavToggle()}),n.TgZ(5,"mat-icon"),n._uU(6,"menu"),n.qZA()()(),n._UZ(7,"app-header"),n.qZA(),n.TgZ(8,"mat-sidenav-container",4)(9,"mat-sidenav",5,6)(11,"app-sidenav-list",7),n.NdJ("sidenavClose",function(){n.CHM(i);const w=n.MAs(10);return n.KtG(w.close())}),n.qZA()(),n.TgZ(12,"mat-sidenav-content")(13,"main"),n._UZ(14,"router-outlet"),n.qZA()()()()()}2&o&&(n.xp6(9),n.Q6J("mode",s.isScreenXs()?"over":"side")("opened",!s.isScreenXs()))},dependencies:[l.lC,m.RK,h.Hw,C.Ye,d.JX,d.TM,d.Rh,p.b8,A.G,f.z,y.k],styles:[".layout-content[_ngcontent-%COMP%]{height:calc(100% - 64px)}.layout-content[_ngcontent-%COMP%]   mat-sidenav-container[_ngcontent-%COMP%], .layout-content[_ngcontent-%COMP%]   mat-sidenav-content[_ngcontent-%COMP%], .layout-content[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]{height:100%}.layout-content[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]{width:250px}.layout-content[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{padding:10px}.layout-content[_ngcontent-%COMP%]   .toolbar-style[_ngcontent-%COMP%]{width:100%}"]}),e})(),children:[{path:"angular-news-pages/angular-news-v16-signals",loadChildren:()=>Promise.all([t.e(592),t.e(354)]).then(t.bind(t,1354)).then(e=>e.AngularNewsV16SignalsModule)},{path:"angular-news-pages/angular-news-v15-standalone",loadChildren:()=>t.e(190).then(t.bind(t,4190)).then(e=>e.AngularNewsV15StandaloneModule)}]}];let O=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[u.ez,l.Bz.forChild(N),l.Bz]}),e})();var P=t(3342);let S=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[u.ez,l.Bz,O,g.q,c.o9,P.m]}),e})()}}]);