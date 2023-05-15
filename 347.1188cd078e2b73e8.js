"use strict";(self.webpackChunkLKovariHome=self.webpackChunkLKovariHome||[]).push([[347],{6347:(F,r,o)=>{o.r(r),o.d(r,{LayoutModule:()=>T});var g=o(4755),s=o(2446),t=o(2223);let d=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-about-me"]],decls:6,vars:0,consts:[[1,"about-me-content"],["fxLayout","column","fxFlexAlign","stretch"],[1,"about-me-screen"],["fxFlexAlign","center",1,"align-about-me"]],template:function(e,c){1&e&&(t.TgZ(0,"div",0)(1,"section",1)(2,"div",2)(3,"div",3)(4,"p"),t._uU(5,"About Me page is not implemented yet!"),t.qZA()()()()())},styles:[".about-me-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#3f51b5;font-size:30px;text-shadow:2px 3px 5px grey;margin:30px 0}.about-me-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] + p[_ngcontent-%COMP%]{color:#3f51b5;font-weight:700;font-size:20px;padding-bottom:20px}.about-me-content[_ngcontent-%COMP%]   .about-me-screen[_ngcontent-%COMP%]   .align-about-me[_ngcontent-%COMP%]{text-align:center}"]}),n})(),p=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-awards"]],decls:6,vars:0,consts:[[1,"awards-content"],["fxLayout","column","fxFlexAlign","stretch"],[1,"awards-screen"],["fxFlexAlign","center",1,"align-awards"]],template:function(e,c){1&e&&(t.TgZ(0,"div",0)(1,"section",1)(2,"div",2)(3,"div",3)(4,"p"),t._uU(5,"Awards page is not implemented yet!"),t.qZA()()()()())},styles:[".awards-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#3f51b5;font-size:30px;text-shadow:2px 3px 5px grey;margin:30px 0}.awards-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] + p[_ngcontent-%COMP%]{color:#3f51b5;font-weight:700;font-size:20px;padding-bottom:20px}.awards-content[_ngcontent-%COMP%]   .awards-screen[_ngcontent-%COMP%]   .align-awards[_ngcontent-%COMP%]{text-align:center}"]}),n})();var v=o(9401);let C=(()=>{class n{constructor(){}ngOnInit(){this.years=(new Date).getFullYear(),console.log(`Angular v${v.q4.full}`)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-home"]],decls:12,vars:1,consts:[[1,"home-content"],["fxLayout","column","fxFlexAlign","stretch"],[1,"home-screen"],["fxFlexAlign","center",1,"align-welcome"],[1,"text-center","text-primary"],[1,"text-warning","text-center"],[1,"copyright_msg","text-center"]],template:function(e,c){1&e&&(t.TgZ(0,"div",0)(1,"section",1)(2,"div",2)(3,"div",3)(4,"p"),t._uU(5,"Welcome to this website"),t.qZA()(),t.TgZ(6,"div",4),t._uU(7,"My solutions, code examples on this website, some cases not exhaustive solutions, only focused on the highlighted technical parts, only for demonstration purposes!"),t.qZA(),t.TgZ(8,"h5",5),t._uU(9,"Currently this page under construction."),t.qZA()()(),t.TgZ(10,"h6",6),t._uU(11),t.qZA()()),2&e&&(t.xp6(11),t.hij("Copyright \xa9 2020-",c.years," All Right Reserver."))},styles:[".home-content[_ngcontent-%COMP%]{vertical-align:middle;padding:.5rem;height:calc(100vh - 102px);width:auto}.home-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#3f51b5;font-size:30px;text-shadow:2px 3px 5px grey;margin:30px 0}.home-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] + p[_ngcontent-%COMP%]{color:#3f51b5;font-weight:700;font-size:20px;padding-bottom:20px}.home-content[_ngcontent-%COMP%]   .home-screen[_ngcontent-%COMP%]   .align-welcome[_ngcontent-%COMP%]{text-align:center}.home-content[_ngcontent-%COMP%]   .copyright_msg[_ngcontent-%COMP%]{color:#000;text-align:center;position:absolute;bottom:1rem;width:100%}"]}),n})();var h=o(2233),y=o(1728),f=o(9560),M=o(9383),l=o(2214),x=o(5829),O=o(6290),P=o(9096),A=o(5049);const w=["sidenav"],b=[{path:"",component:(()=>{class n{constructor(e,c){this.router=e,this.mediaObserver=c}ngOnInit(){"/"===this.router.url&&this.router.navigate(["/layout-pages/home"])}initializeSideNav(){this.mediaObserver.isActive("xs")?this.sidenav.close():this.sidenav.open()}isScreenXs(){return this.mediaObserver.isActive("xs")}ngAfterViewInit(){setTimeout(()=>{this.initializeSideNav()})}onSidenavToggle(){this.sidenav.toggle(),console.log(">>>>>>> sidenav "+this.sidenav.opened)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(s.F0),t.Y36(h.u0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-layout"]],viewQuery:function(e,c){if(1&e&&t.Gf(w,5),2&e){let i;t.iGM(i=t.CRH())&&(c.sidenav=i.first)}},decls:15,vars:2,consts:[[1,"layout-content"],["color","primary",1,"toolbar-style"],["fxShow","true","fxHide.gt-xs",""],["mat-icon-button","",3,"click"],["autosize",""],["role","navigation",1,"mat-elevation-z10",3,"mode","opened"],["sidenav",""],[3,"sidenavClose"]],template:function(e,c){if(1&e){const i=t.EpF();t.TgZ(0,"div",0)(1,"app-layout-content")(2,"mat-toolbar",1)(3,"div",2)(4,"button",3),t.NdJ("click",function(){return c.onSidenavToggle()}),t.TgZ(5,"mat-icon"),t._uU(6,"menu"),t.qZA()()(),t._UZ(7,"app-header"),t.qZA(),t.TgZ(8,"mat-sidenav-container",4)(9,"mat-sidenav",5,6)(11,"app-sidenav-list",7),t.NdJ("sidenavClose",function(){t.CHM(i);const z=t.MAs(10);return t.KtG(z.close())}),t.qZA()(),t.TgZ(12,"mat-sidenav-content")(13,"main"),t._UZ(14,"router-outlet"),t.qZA()()()()()}2&e&&(t.xp6(9),t.Q6J("mode",c.isScreenXs()?"over":"side")("opened",!c.isScreenXs()))},dependencies:[s.lC,y.RK,f.Hw,M.Ye,l.JX,l.TM,l.Rh,x.b8,O.G,P.z,A.k],styles:[".layout-content[_ngcontent-%COMP%]{height:calc(100% - 64px)}.layout-content[_ngcontent-%COMP%]   mat-sidenav-container[_ngcontent-%COMP%], .layout-content[_ngcontent-%COMP%]   mat-sidenav-content[_ngcontent-%COMP%], .layout-content[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]{height:100%}.layout-content[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]{width:250px}.layout-content[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{padding:10px}.layout-content[_ngcontent-%COMP%]   .toolbar-style[_ngcontent-%COMP%]{width:100%}"]}),n})(),children:[{path:"layout-pages/home",component:C},{path:"layout-pages/about-me",component:d},{path:"layout-pages/awards",component:p}]}];let Z=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.ez,s.Bz.forChild(b),s.Bz]}),n})();var m=o(7126),L=o(3342),u=o(9814);let T=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.ez,s.Bz,Z,m.q,u.o9,L.m,m.q,u.o9]}),n})()}}]);