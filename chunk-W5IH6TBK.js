import{v as C,w as h}from"./chunk-RUIV5TK6.js";import{a as S}from"./chunk-UF5A6XQN.js";import{Fa as d,Ka as p,Ua as m,Ub as x,Wa as E,Xa as f,Ya as i,Za as t,_a as _,hb as g,sb as n,tb as v,ub as u,va as l,wa as c}from"./chunk-BCU4HE6M.js";import"./chunk-KT3CPUTC.js";var y=(e,o)=>o.timestamp;function T(e,o){e&1&&(i(0,"div"),n(1,"No errors logged."),t())}function F(e,o){if(e&1&&(i(0,"li")(1,"strong"),n(2,"Error:"),t(),n(3),_(4,"br"),i(5,"strong"),n(6,"Stack:"),t(),i(7,"pre"),n(8),t()()),e&2){let r=o.$implicit;l(3),u(" ",r.message,""),l(5),v(r.stack)}}function b(e,o){e&1&&(i(0,"li"),n(1,"No errors logged."),t())}function M(e,o){if(e&1&&(i(0,"ul"),E(1,F,9,2,"li",null,y,!1,b,2,0,"li"),t()),e&2){let r=g();l(),f(r.errorEntries)}}var $=(()=>{class e{constructor(r){this.globalErrorHandlerService=r,this.errorEntries=[],this.effectRef=x(()=>{this.errorEntries=this.globalErrorHandlerService.getErrorEntries(),console.log(`Errors: ${this.errorEntries.length}`)})}ngOnDestroy(){this.effectRef.destroy()}static{this.\u0275fac=function(a){return new(a||e)(c(S))}}static{this.\u0275cmp=d({type:e,selectors:[["app-error"]],decls:5,vars:2,template:function(a,s){a&1&&(i(0,"div")(1,"h2"),n(2,"Error Log"),t(),p(3,T,2,0,"div")(4,M,4,1,"ul"),t()),a&2&&(l(3),m(s.errorEntries.length===0?3:-1),l(),m(s.errorEntries.length>0?4:-1))},dependencies:[C,h],encapsulation:2})}}return e})();export{$ as ErrorComponent};
