import{B as X,E as $,F as G,G as W,M as O,P as Z,b as V,d as K,f as Y,g as q,h as U}from"./chunk-XJUC3IOP.js";import{P as R,a as j,h as B,n as P}from"./chunk-TP4L6TM2.js";import"./chunk-XSSXK7EZ.js";import{$ as _,Ja as S,Ka as g,P as v,Sa as I,Ta as A,U as m,Ua as n,V as C,Va as e,Wa as c,_ as M,_a as E,bb as b,bc as y,ec as Q,ib as k,jb as z,kb as L,lb as F,lc as T,mb as a,mc as H,nb as D,ob as w,pc as u,qa as h,sa as l,ta as x,tb as N}from"./chunk-GL4F5EIA.js";import"./chunk-RDYEX3OW.js";var rt=["sidenav"],J=(()=>{let t=class t{constructor(r,i){this.router=r,this.mediaObserver=i}ngOnInit(){this.router.url==="/"&&this.router.navigate(["/layout-pages/home"])}initializeSideNav(){this.mediaObserver.isActive("xs")?this.sidenav.close():this.sidenav.open()}isScreenXs(){return this.mediaObserver.isActive("xs")}ngAfterViewInit(){setTimeout(()=>{this.initializeSideNav()})}onSidenavToggle(){this.sidenav.toggle(),console.log(">>>>>>> sidenav "+this.sidenav.opened)}};t.\u0275fac=function(i){return new(i||t)(x(H),x(j))},t.\u0275cmp=m({type:t,selectors:[["app-layout"]],viewQuery:function(i,s){if(i&1&&k(rt,5),i&2){let p;z(p=L())&&(s.sidenav=p.first)}},decls:15,vars:2,consts:[["sidenav",""],[1,"layout-content"],["color","primary",1,"toolbar-style"],["fxShow","true","fxHide.gt-xs",""],["mat-icon-button","",3,"click"],["role","navigation",1,"mat-elevation-z10",3,"mode","opened"],[3,"sidenavClose"],[1,"ommit-overflow"]],template:function(i,s){if(i&1){let p=E();n(0,"div",1)(1,"app-layout-content")(2,"mat-toolbar",2)(3,"div",3)(4,"button",4),b("click",function(){return M(p),_(s.onSidenavToggle())}),n(5,"mat-icon"),a(6,"menu"),e()()(),c(7,"app-header"),e(),n(8,"mat-sidenav-container")(9,"mat-sidenav",5,0)(11,"app-sidenav-list",6),b("sidenavClose",function(){M(p);let at=F(10);return _(at.close())}),e()(),n(12,"mat-sidenav-content",7)(13,"main"),c(14,"router-outlet"),e()()()()()}i&2&&(l(9),g("mode",s.isScreenXs()?"over":"side")("opened",!s.isScreenXs()))},dependencies:[T,V,R,K,q,U,Y,B,$,G,W],styles:[".layout-content[_ngcontent-%COMP%]{height:calc(100% - 64px)}.layout-content[_ngcontent-%COMP%]   mat-sidenav-container[_ngcontent-%COMP%], .layout-content[_ngcontent-%COMP%]   mat-sidenav-content[_ngcontent-%COMP%], .layout-content[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]{height:100%}.layout-content[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]{width:250px}.layout-content[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{padding:10px}.layout-content[_ngcontent-%COMP%]   .toolbar-style[_ngcontent-%COMP%]{width:100%}.layout-content[_ngcontent-%COMP%]   .ommit-overflow[_ngcontent-%COMP%]{overflow:hidden}"]});let o=t;return o})();var tt=(()=>{let t=class t{constructor(){this.fullImagePath="assets/images/lk_cv_pics.png",this.fullInsightImagePath="assets/images/lk_insightprofilebricks.jpg",this.fullInsightImagePathHref="assets/bigfiles/LaszloKovari-InsightsDiscoveryPersonalProfile.pdf"}ngOnInit(){let r=new Date;this.years=r.getFullYear()}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=m({type:t,selectors:[["app-about-me"]],decls:34,vars:3,consts:[[1,"about-me-content"],["fxLayout","column","fxFlexAlign","stretch"],[1,"about-me-screen"],["fxFlexAlign","center",1,"align-about-me"],["alt","fullImagePath",1,"img-responsive",3,"src"],["href","assets/bigfiles/LaszloKovari-InsightsDiscoveryPersonalProfile.pdf"],["alt","fullInsightImagePath",1,"img-responsive-right","handpointer-off",3,"src"],[1,"txt"],["href","https://www.google.hu/maps/place/Borsod-Aba\xFAj-Zempl\xE9n/@48.1084905,19.9695768,8z/data=!3m1!4b1!4m5!3m4!1s0x473f5715770e6fd5:0x100c4290c1e1050!8m2!3d48.2939401!4d20.6934113"],["href","https://en.wikipedia.org/wiki/List_of_7400_series_integrated_circuits","target","_self"],[1,"text-center","text-primary"],[1,"align-lk"],["href","assets/bigfiles/lk-cv-e.pdf"],[1,"text-left","lk-cv"],[1,"text-left"],["href","https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile","target","_self",1,"text-left"],["src","assets/images/btn_viewmy_160x33.gif","alt","View L\xE1szl\xF3 K\u0151v\xE1ri's profile on LinkedIn","border","0","height","33","width","160"],[1,"align-proh"],[1,"text-right","prohibit-msg"],[1,"text-right","copyright-msg"]],template:function(i,s){i&1&&(n(0,"div",0)(1,"section",1)(2,"div",2)(3,"div",3)(4,"p"),a(5,"About Me"),e()(),n(6,"div"),c(7,"img",4),n(8,"a",5),c(9,"img",6),e(),n(10,"p",7),a(11,"I grew up next to the northeastern hills of Hungary, a small border town in "),n(12,"a",8),a(13,"county Borsod-Abauj-Zemplen."),e(),a(14," My original profession was not the software development, but after I'm finished the secondary school I corrected this mistake. :-) I was interested in the microelectronic circuit like how the radio, digital clock works, So I learned microelectronics in an industrial school. My favourite theme was the digital technics. At those times I dealt with to build of basic electronic circuits with discrete "),n(15,"a",9),a(16,"74xx integral circuits"),e(),a(17,". I also planned a wiring diagram and PCB. of a digital quartz clock, (wiring diagram and PCB.)\xA0\xA0developed the circuit of the clock timing for a quartz based oscillator dividing the frequency\xA01Mhz to\xA0the base 1Hz (time base) which was the input\xA0of the counting circuit. Later my interest\xA0turned to the computer sciences, first I was interested in the hardware, later I turned to the software development.\xA0"),e(),n(18,"div",10),a(19,"My solutions, code examples on this page, some cases not exhaustive solutions, only focused on the highlighted technical parts, only for demonstration purposes!"),e()(),n(20,"div",11)(21,"a",12)(22,"label",13),a(23,"L\xE1szl\xF3 K\u0151v\xE1ri"),e()(),n(24,"label",14),a(25,"Budapest Hungary"),e(),n(26,"a",15),c(27,"img",16),e()(),n(28,"div",17)(29,"label",18),a(30,"Business or other usage or reproduction in whole or in part without permission of the owner is prohibited!"),e(),c(31,"br"),n(32,"label",19),a(33),e()()()()()),i&2&&(l(7),g("src",s.fullImagePath,h),l(2),g("src",s.fullInsightImagePath,h),l(24),w("Copyright \xA9 2020-",s.years," by L\xE1szl\xF3 K\u0151v\xE1ri"))},styles:[".about-me-content[_ngcontent-%COMP%]{width:100%;overflow-y:scroll;padding:.5rem;height:calc(100vh - 86px)}.about-me-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#3f51b5;font-size:20px;text-shadow:2px 3px 5px grey;margin:30px 0}.about-me-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] + p[_ngcontent-%COMP%]{color:#3f51b5;font-weight:700;font-size:20px;padding-bottom:20px}.about-me-content[_ngcontent-%COMP%]   .about-me-screen[_ngcontent-%COMP%]   .align-about-me[_ngcontent-%COMP%]{text-align:center}.about-me-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]{font-weight:700}.about-me-content[_ngcontent-%COMP%]   .img-responsive[_ngcontent-%COMP%]{width:auto;height:auto;float:left;margin-right:2rem;border-radius:50%;shape-outside:circle()}.about-me-content[_ngcontent-%COMP%]   .align-lk[_ngcontent-%COMP%]{padding-top:4rem}.about-me-content[_ngcontent-%COMP%]   .align-proh[_ngcontent-%COMP%]{padding-top:8rem}.about-me-content[_ngcontent-%COMP%]   .img-responsive-right[_ngcontent-%COMP%]{width:auto;height:auto;float:right;margin-left:3rem;border-radius:25%;shape-outside:circle()}.about-me-content[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%]{line-height:150%;text-align:justify;margin:9% 2% 2%;text-indent:2em}.about-me-content[_ngcontent-%COMP%]   .my-cv[_ngcontent-%COMP%]{color:#000;font-style:italic}.about-me-content[_ngcontent-%COMP%]   .prohibit-msg[_ngcontent-%COMP%]{color:red}.about-me-content[_ngcontent-%COMP%]   .copyright_msg[_ngcontent-%COMP%]{color:#000;text-align:center;position:absolute;bottom:1rem;width:100%}.about-me-content[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%]{float:left;clear:left}.about-me-content[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%]{float:right;clear:right}.about-me-content[_ngcontent-%COMP%]   .handpointer-off[_ngcontent-%COMP%]{cursor:default}"]});let o=t;return o})();var st=(o,t)=>t.id;function lt(o,t){if(o&1&&(n(0,"p",8),a(1),e(),n(2,"li"),c(3,"img",9),e()),o&2){let d=t.$implicit;l(),D(d.alt),l(2),g("ngSrc",d.fileName)("width",d.width)("height",d.height)("alt",d.alt)("priority",d.id===1),S("loading",d.id!==1?"lazy":"eager")}}var et=(()=>{let t=class t{constructor(){this.imageDescriptors=[{id:1,fileName:"assets/images/2022Q2LeaderboardWinnerGT50.png",width:434,height:640,alt:"Leaderboard winner Q2 of 2022"},{id:2,fileName:"assets/images/2021Q4CaughtAtYourBest.png",width:791,height:916,alt:"Caught at your best Q4 2021"},{id:3,fileName:"assets/images/2018CertificateOfRecognition20years.png",width:800,height:583,alt:"20 years of service"},{id:4,fileName:"assets/images/2016Q4CaughtAtYourBest.png",width:1280,height:983,alt:"Caught at your best Q4 2016"},{id:5,fileName:"assets/images/2015Q4CaughtAtYourBest.png",width:1280,height:913,alt:"Caught at your best Q4 2015"},{id:6,fileName:"assets/images/icagile-cert2014.png",width:800,height:583,alt:"IcAgile course Certificate"},{id:7,fileName:"assets/images/AmkaiStockOptions1050A.png",width:1199,height:913,alt:"Stock Option Series A"},{id:8,fileName:"assets/images/2022Q2HippaCertificate.png",width:1328,height:590,alt:"HIPPA. Certificate 2022 Q2"}]}ngOnInit(){let r=new Date;this.years=r.getFullYear(),this.githubLogoPath="assets/logos/GitHub-Mark-32px.png"}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=m({type:t,selectors:[["app-awards"]],standalone:!0,features:[N],decls:16,vars:1,consts:[[1,"awards-content"],[1,"awards-screen"],[1,"align-awards","text-primary"],[1,"label-title"],[1,"text-primary"],["href","https://github.com/lkovari/LKovariHome/blob/master/src/app/layout-pages/awards/awards.component.ts",1,"spacer"],["width","16","height","16","alt","githubLogoPath",3,"src"],[1,"image-content"],[1,"text-primary","label-title"],["ngSrcset","200w, 400w, 600w, 800w, 1000w, 1200w, 1600w, 2000w, 3000w",1,"img-responsive",3,"ngSrc","width","height","alt","priority"]],template:function(i,s){i&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"h4",3),a(4,"Awards..."),e()(),n(5,"div")(6,"p")(7,"span",4)(8,"a",5),c(9,"img",6),e(),a(10,"Technical notes:"),e(),a(11," NgOptimizedImage directive usage example"),e()(),n(12,"div",7)(13,"ul"),I(14,lt,4,7,null,null,st),e()()()()),i&2&&(l(9),g("src",s.githubLogoPath,h),l(5),A(s.imageDescriptors))},dependencies:[Q],styles:[".awards-content[_ngcontent-%COMP%]{padding:.5rem}.awards-content[_ngcontent-%COMP%]   .awards-screen[_ngcontent-%COMP%]   .align-awards[_ngcontent-%COMP%]{text-align:center}.awards-content[_ngcontent-%COMP%]   .image-content[_ngcontent-%COMP%]{margin:.2rem}.awards-content[_ngcontent-%COMP%]   .img-responsive[_ngcontent-%COMP%]{display:block;width:100%;height:100%;float:left;border:1px solid blue;border-radius:10px}.awards-content[_ngcontent-%COMP%]   .label-title[_ngcontent-%COMP%]{font-weight:700;font-style:italic}.awards-content[_ngcontent-%COMP%]   .image-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{max-height:calc(100vh - 177px);overflow-y:auto;padding:0;margin:0;list-style-type:none}"]});let o=t;return o})();var nt=(()=>{let t=class t{constructor(){}ngOnInit(){let r=new Date;this.years=r.getFullYear(),console.log(`Angular v${X.full}`)}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=m({type:t,selectors:[["app-home"]],decls:12,vars:1,consts:[[1,"home-content"],["fxLayout","column","fxFlexAlign","stretch"],[1,"home-screen"],["fxFlexAlign","center",1,"align-welcome"],[1,"text-center","text-primary"],[1,"text-warning","text-center"],[1,"copyright_msg","text-center"]],template:function(i,s){i&1&&(n(0,"div",0)(1,"section",1)(2,"div",2)(3,"div",3)(4,"p"),a(5,"Welcome to this website"),e()(),n(6,"div",4),a(7,"My solutions, code examples on this website, some cases not exhaustive solutions, only focused on the highlighted technical parts, only for demonstration purposes!"),e(),n(8,"h5",5),a(9,"Currently this page under construction."),e()()(),n(10,"h6",6),a(11),e()()),i&2&&(l(11),w("Copyright \xA9 2020-",s.years," All Right Reserver."))},styles:[".home-content[_ngcontent-%COMP%]{vertical-align:middle;padding:.5rem;height:calc(100vh - 102px);width:auto}.home-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#3f51b5;font-size:30px;text-shadow:2px 3px 5px grey;margin:30px 0}.home-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] + p[_ngcontent-%COMP%]{color:#3f51b5;font-weight:700;font-size:20px;padding-bottom:20px}.home-content[_ngcontent-%COMP%]   .home-screen[_ngcontent-%COMP%]   .align-welcome[_ngcontent-%COMP%]{text-align:center}.home-content[_ngcontent-%COMP%]   .copyright_msg[_ngcontent-%COMP%]{color:#000;text-align:center;position:absolute;bottom:1rem;width:100%}"]});let o=t;return o})();var ct=[{path:"",component:J,children:[{path:"layout-pages/home",component:nt},{path:"layout-pages/about-me",component:tt},{path:"layout-pages/awards",component:et}]}],it=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=C({type:t}),t.\u0275inj=v({imports:[y,u.forChild(ct),u]});let o=t;return o})();var Ut=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=C({type:t}),t.\u0275inj=v({imports:[y,u,it,O,P,Z,O,P]});let o=t;return o})();export{Ut as LayoutModule};
