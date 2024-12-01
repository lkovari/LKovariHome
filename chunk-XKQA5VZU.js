import{B as q,E as U,F as W,G,M as P,Q as X,b as Q,d as R,f as B,g as V,h as Y}from"./chunk-53C27RLS.js";import{S as T,a as K,h as j,n as b}from"./chunk-DE4ZGVMT.js";import"./chunk-S35HUXPS.js";import{Ea as c,Fa as f,Na as O,Oa as m,P as h,Va as S,Wa as L,X as w,Xa as n,Y as _,Ya as t,Za as l,bb as I,eb as x,ec as C,hc as F,lb as A,mb as k,nb as E,oc as D,pc as N,qb as z,rb as a,sa as g,sb as H,sc as p,tb as v,ua as s,va as M}from"./chunk-7W7GFG2S.js";import"./chunk-KT3CPUTC.js";var ie=["sidenav"],$=(()=>{class e{constructor(i,o){this.router=i,this.mediaObserver=o}ngOnInit(){this.router.url==="/"&&this.router.navigate(["/layout-pages/home"])}initializeSideNav(){this.mediaObserver.isActive("xs")?this.sidenav.close():this.sidenav.open()}isScreenXs(){return this.mediaObserver.isActive("xs")}ngAfterViewInit(){setTimeout(()=>{this.initializeSideNav()})}onSidenavToggle(){this.sidenav.toggle(),console.log(">>>>>>> sidenav "+this.sidenav.opened)}static{this.\u0275fac=function(o){return new(o||e)(M(N),M(K))}}static{this.\u0275cmp=c({type:e,selectors:[["app-layout"]],viewQuery:function(o,r){if(o&1&&A(ie,5),o&2){let d;k(d=E())&&(r.sidenav=d.first)}},standalone:!1,decls:15,vars:2,consts:[["sidenav",""],[1,"layout-content"],["color","primary",1,"toolbar-style"],["fxShow","true","fxHide.gt-xs",""],["mat-icon-button","",3,"click"],["role","navigation",1,"mat-elevation-z10",3,"mode","opened"],[3,"sidenavClose"],[1,"ommit-overflow"]],template:function(o,r){if(o&1){let d=I();n(0,"div",1)(1,"app-layout-content")(2,"mat-toolbar",2)(3,"div",3)(4,"button",4),x("click",function(){return w(d),_(r.onSidenavToggle())}),n(5,"mat-icon"),a(6,"menu"),t()()(),l(7,"app-header"),t(),n(8,"mat-sidenav-container")(9,"mat-sidenav",5,0)(11,"app-sidenav-list",6),x("sidenavClose",function(){w(d);let oe=z(10);return _(oe.close())}),t()(),n(12,"mat-sidenav-content",7)(13,"main"),l(14,"router-outlet"),t()()()()()}o&2&&(s(9),m("mode",r.isScreenXs()?"over":"side")("opened",!r.isScreenXs()))},dependencies:[D,Q,T,R,V,Y,B,j,U,W,G],styles:[".layout-content[_ngcontent-%COMP%]{height:calc(100% - 64px)}.layout-content[_ngcontent-%COMP%]   mat-sidenav-container[_ngcontent-%COMP%], .layout-content[_ngcontent-%COMP%]   mat-sidenav-content[_ngcontent-%COMP%], .layout-content[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]{height:100%}.layout-content[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]{width:250px}.layout-content[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{padding:10px}.layout-content[_ngcontent-%COMP%]   .toolbar-style[_ngcontent-%COMP%]{width:100%}.layout-content[_ngcontent-%COMP%]   .ommit-overflow[_ngcontent-%COMP%]{overflow:hidden}"]})}}return e})();var Z=(()=>{class e{constructor(){this.fullImagePath="assets/images/lk_cv_pics.png",this.fullInsightImagePath="assets/images/lk_insightprofilebricks.jpg",this.fullInsightImagePathHref="assets/bigfiles/LaszloKovari-InsightsDiscoveryPersonalProfile.pdf"}ngOnInit(){let i=new Date;this.years=i.getFullYear()}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-about-me"]],standalone:!1,decls:34,vars:3,consts:[[1,"about-me-content"],["fxLayout","column","fxFlexAlign","stretch"],[1,"about-me-screen"],["fxFlexAlign","center",1,"align-about-me"],["alt","fullImagePath",1,"img-responsive",3,"src"],["href","assets/bigfiles/LaszloKovari-InsightsDiscoveryPersonalProfile.pdf"],["alt","fullInsightImagePath",1,"img-responsive-right","handpointer-off",3,"src"],[1,"txt"],["href","https://www.google.hu/maps/place/Borsod-Aba\xFAj-Zempl\xE9n/@48.1084905,19.9695768,8z/data=!3m1!4b1!4m5!3m4!1s0x473f5715770e6fd5:0x100c4290c1e1050!8m2!3d48.2939401!4d20.6934113"],["href","https://en.wikipedia.org/wiki/List_of_7400_series_integrated_circuits","target","_self"],[1,"text-center","text-primary"],[1,"align-lk"],["href","assets/bigfiles/lk-cv-e.pdf"],[1,"text-left","lk-cv"],[1,"text-left"],["href","https://www.linkedin.com/in/lkovari/","target","_self",1,"text-left"],["src","assets/images/btn_viewmy_160x33.gif","alt","View L\xE1szl\xF3 K\u0151v\xE1ri's profile on LinkedIn","border","0","height","33","width","160"],[1,"align-proh"],[1,"text-right","prohibit-msg"],[1,"text-right","copyright-msg"]],template:function(o,r){o&1&&(n(0,"div",0)(1,"section",1)(2,"div",2)(3,"div",3)(4,"p"),a(5,"About Me"),t()(),n(6,"div"),l(7,"img",4),n(8,"a",5),l(9,"img",6),t(),n(10,"p",7),a(11,"I grew up next to the northeastern hills of Hungary, a small border town in "),n(12,"a",8),a(13,"county Borsod-Abauj-Zemplen."),t(),a(14," My original profession was not the software development, but after I'm finished the secondary school I corrected this mistake. :-) I was interested in the microelectronic circuit like how the radio, digital clock works, So I learned microelectronics in an industrial school. My favourite theme was the digital technics. At those times I dealt with to build of basic electronic circuits with discrete "),n(15,"a",9),a(16,"74xx integral circuits"),t(),a(17,". I also planned a wiring diagram and PCB. of a digital quartz clock, (wiring diagram and PCB.)\xA0\xA0developed the circuit of the clock timing for a quartz based oscillator dividing the frequency\xA01Mhz to\xA0the base 1Hz (time base) which was the input\xA0of the counting circuit. Later my interest\xA0turned to the computer sciences, first I was interested in the hardware, later I turned to the software development.\xA0"),t(),n(18,"div",10),a(19,"My solutions, code examples on this page, some cases not exhaustive solutions, only focused on the highlighted technical parts, only for demonstration purposes!"),t()(),n(20,"div",11)(21,"a",12)(22,"label",13),a(23,"L\xE1szl\xF3 K\u0151v\xE1ri"),t()(),n(24,"label",14),a(25,"Budapest Hungary"),t(),n(26,"a",15),l(27,"img",16),t()(),n(28,"div",17)(29,"label",18),a(30,"Business or other usage or reproduction in whole or in part without permission of the owner is prohibited!"),t(),l(31,"br"),n(32,"label",19),a(33),t()()()()()),o&2&&(s(7),m("src",r.fullImagePath,g),s(2),m("src",r.fullInsightImagePath,g),s(24),v("Copyright \xA9 2020-",r.years," by L\xE1szl\xF3 K\u0151v\xE1ri"))},styles:[".about-me-content[_ngcontent-%COMP%]{width:100%;overflow-y:scroll;padding:.5rem;height:calc(100vh - 86px)}.about-me-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#3f51b5;font-size:20px;text-shadow:2px 3px 5px grey;margin:30px 0}.about-me-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] + p[_ngcontent-%COMP%]{color:#3f51b5;font-weight:700;font-size:20px;padding-bottom:20px}.about-me-content[_ngcontent-%COMP%]   .about-me-screen[_ngcontent-%COMP%]   .align-about-me[_ngcontent-%COMP%]{text-align:center}.about-me-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]{font-weight:700}.about-me-content[_ngcontent-%COMP%]   .img-responsive[_ngcontent-%COMP%]{width:auto;height:auto;float:left;margin-right:2rem;border-radius:50%;shape-outside:circle()}.about-me-content[_ngcontent-%COMP%]   .align-lk[_ngcontent-%COMP%]{padding-top:4rem}.about-me-content[_ngcontent-%COMP%]   .align-proh[_ngcontent-%COMP%]{padding-top:8rem}.about-me-content[_ngcontent-%COMP%]   .img-responsive-right[_ngcontent-%COMP%]{width:auto;height:auto;float:right;margin-left:3rem;border-radius:25%;shape-outside:circle()}.about-me-content[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%]{line-height:150%;text-align:justify;margin:9% 2% 2%;text-indent:2em}.about-me-content[_ngcontent-%COMP%]   .my-cv[_ngcontent-%COMP%]{color:#000;font-style:italic}.about-me-content[_ngcontent-%COMP%]   .prohibit-msg[_ngcontent-%COMP%]{color:red}.about-me-content[_ngcontent-%COMP%]   .copyright_msg[_ngcontent-%COMP%]{color:#000;text-align:center;position:absolute;bottom:1rem;width:100%}.about-me-content[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%]{float:left;clear:left}.about-me-content[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%]{float:right;clear:right}.about-me-content[_ngcontent-%COMP%]   .handpointer-off[_ngcontent-%COMP%]{cursor:default}"]})}}return e})();var ae=(e,y)=>y.id;function re(e,y){if(e&1&&(n(0,"p",8),a(1),t(),n(2,"li"),l(3,"img",9),t()),e&2){let i=y.$implicit;s(),H(i.alt),s(2),m("ngSrc",i.fileName)("width",i.width)("height",i.height)("alt",i.alt)("priority",i.id===1),O("loading",i.id!==1?"lazy":"eager")}}var J=(()=>{class e{constructor(){this.imageDescriptors=[{id:1,fileName:"assets/images/2022Q2LeaderboardWinnerGT50.png",width:434,height:640,alt:"Leaderboard winner Q2 of 2022"},{id:2,fileName:"assets/images/2021Q4CaughtAtYourBest.png",width:791,height:916,alt:"Caught at your best Q4 2021"},{id:3,fileName:"assets/images/2018CertificateOfRecognition20years.png",width:800,height:583,alt:"20 years of service"},{id:4,fileName:"assets/images/2016Q4CaughtAtYourBest.png",width:1280,height:983,alt:"Caught at your best Q4 2016"},{id:5,fileName:"assets/images/2015Q4CaughtAtYourBest.png",width:1280,height:913,alt:"Caught at your best Q4 2015"},{id:6,fileName:"assets/images/icagile-cert2014.png",width:800,height:583,alt:"IcAgile course Certificate"},{id:7,fileName:"assets/images/AmkaiStockOptions1050A.png",width:1199,height:913,alt:"Stock Option Series A"},{id:8,fileName:"assets/images/2022Q2HippaCertificate.png",width:1328,height:590,alt:"HIPPA. Certificate 2022 Q2"}]}ngOnInit(){let i=new Date;this.years=i.getFullYear(),this.githubLogoPath="assets/logos/GitHub-Mark-32px.png"}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-awards"]],decls:16,vars:1,consts:[[1,"awards-content"],[1,"awards-screen"],[1,"align-awards","text-primary"],[1,"label-title"],[1,"text-primary"],["href","https://github.com/lkovari/LKovariHome/blob/master/src/app/layout-pages/awards/awards.component.ts",1,"spacer"],["width","16","height","16","alt","githubLogoPath",3,"src"],[1,"image-content"],[1,"text-primary","label-title"],["ngSrcset","200w, 400w, 600w, 800w, 1000w, 1200w, 1600w, 2000w, 3000w",1,"img-responsive",3,"ngSrc","width","height","alt","priority"]],template:function(o,r){o&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"h4",3),a(4,"Awards..."),t()(),n(5,"div")(6,"p")(7,"span",4)(8,"a",5),l(9,"img",6),t(),a(10,"Technical notes:"),t(),a(11," NgOptimizedImage directive usage example"),t()(),n(12,"div",7)(13,"ul"),S(14,re,4,7,null,null,ae),t()()()()),o&2&&(s(9),m("src",r.githubLogoPath,g),s(5),L(r.imageDescriptors))},dependencies:[F],styles:[".awards-content[_ngcontent-%COMP%]{padding:.5rem}.awards-content[_ngcontent-%COMP%]   .awards-screen[_ngcontent-%COMP%]   .align-awards[_ngcontent-%COMP%]{text-align:center}.awards-content[_ngcontent-%COMP%]   .image-content[_ngcontent-%COMP%]{margin:.2rem}.awards-content[_ngcontent-%COMP%]   .img-responsive[_ngcontent-%COMP%]{display:block;width:100%;height:100%;float:left;border:1px solid blue;border-radius:10px}.awards-content[_ngcontent-%COMP%]   .label-title[_ngcontent-%COMP%]{font-weight:700;font-style:italic}.awards-content[_ngcontent-%COMP%]   .image-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{max-height:calc(100vh - 177px);overflow-y:auto;padding:0;margin:0;list-style-type:none}"]})}}return e})();var ee=(()=>{class e{constructor(){}ngOnInit(){let i=new Date;this.years=i.getFullYear(),console.log(`Angular v${q.full}`)}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-home"]],standalone:!1,decls:15,vars:1,consts:[[1,"home-content"],["fxLayout","column","fxFlexAlign","stretch"],[1,"home-screen"],["fxFlexAlign","center",1,"align-welcome"],[1,"text-center","text-primary"],[1,"text-warning","text-center"],[1,"pre-wrapper"],[1,"copyright_msg","text-center"]],template:function(o,r){o&1&&(n(0,"div",0)(1,"section",1)(2,"div",2)(3,"div",3)(4,"p"),a(5,"Welcome to this website"),t()(),n(6,"div",4),a(7,"My solutions, code examples on this website, some cases not exhaustive solutions, only focused on the highlighted technical parts, only for demonstration purposes!"),t(),n(8,"h5",5),a(9,"Currently this page under construction, nowadays migrate the components to standalone."),t(),n(10,"div",6)(11,"pre"),a(12,`          kovarilaszlo@Mac LKovariHome % npm outdated                            
          Package                           Current  Wanted  Latest  Location                                       Depended by
          @fortawesome/angular-fontawesome   0.15.0  0.15.0   1.0.0  node_modules/@fortawesome/angular-fontawesome  LKovariHome
          @types/jasmine                      5.1.4   5.1.5   5.1.5  node_modules/@types/jasmine                    LKovariHome
          @typescript-eslint/eslint-plugin   7.13.0  7.13.0  8.16.0  node_modules/@typescript-eslint/eslint-plugin  LKovariHome
          @typescript-eslint/parser          7.13.0  7.13.0  8.16.0  node_modules/@typescript-eslint/parser         LKovariHome
          eslint                             9.15.0  9.16.0  9.16.0  node_modules/eslint                            LKovariHome
          jasmine-core                        5.1.2   5.1.2   5.4.0  node_modules/jasmine-core                      LKovariHome
          ngx-cookie-service                 18.0.0  18.0.0  19.0.0  node_modules/ngx-cookie-service                LKovariHome
          typescript                          5.6.3   5.6.3   5.7.2  node_modules/typescript                        LKovariHome
          kovarilaszlo@Mac LKovariHome % ng update                               
          Using package manager: npm
          Collecting installed dependencies...
          Found 48 dependencies.
          We analyzed your package.json and everything seems to be in order. Good work!
        `),t()()()(),n(13,"h6",7),a(14),t()()),o&2&&(s(14),v("Copyright \xA9 2020-",r.years," All Right Reserver."))},styles:[".home-content[_ngcontent-%COMP%]{vertical-align:middle;padding:.5rem;height:calc(100vh - 102px);width:auto}.home-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#3f51b5;font-size:30px;text-shadow:2px 3px 5px grey;margin:30px 0}.home-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] + p[_ngcontent-%COMP%]{color:#3f51b5;font-weight:700;font-size:20px;padding-bottom:20px}.home-content[_ngcontent-%COMP%]   .home-screen[_ngcontent-%COMP%]   .align-welcome[_ngcontent-%COMP%]{text-align:center}.home-content[_ngcontent-%COMP%]   .copyright_msg[_ngcontent-%COMP%]{color:#000;text-align:center;position:absolute;bottom:1rem;width:100%}.home-content[_ngcontent-%COMP%]   .pre-wrapper[_ngcontent-%COMP%]{max-width:100%;overflow-x:auto;overflow-y:hidden;background-color:#f9f9f9;border:1px solid #ddd;padding:1rem}.home-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{margin:0;white-space:pre;word-wrap:normal;font-family:monospace;font-size:14px}"]})}}return e})();var se=[{path:"",component:$,children:[{path:"layout-pages/home",component:ee},{path:"layout-pages/about-me",component:Z},{path:"layout-pages/awards",component:J}]}],te=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275mod=f({type:e})}static{this.\u0275inj=h({imports:[C,p.forChild(se),p]})}}return e})();var Ye=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275mod=f({type:e})}static{this.\u0275inj=h({imports:[C,p,te,P,b,X,P,b]})}}return e})();export{Ye as LayoutModule};
