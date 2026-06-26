import {P,s as se,z as z$1}from'./chunk-BfL5RBtO.js';import {$ as $F,m as v,G as Ge$1,x as ve,p as O,am as wo$1,an as Yh,ao as be,D,T as Tr,ap as Ui$1,aq as II,g as gE,ar as zt,K as KE,v as vi$1,P as Pp,F as FD,B as Bc,U as Up,as as YD,at as dh,W as WE,j as jv,z as zc,au as XD,a as Lp,av as uh,q as qE,a2 as GD,Z as Zp,d as dD,aw as jo$1,ax as ym,ay as Pi$1,ae as te,az as _e,aA as oe,y as yE,J as Jl,t as Gi$1,a9 as HF,o as oT,u as Ve,V as Vo$1,aB as Nt,aC as Xe,E as Np,Q as QF,I as ZF,S as Gt,aD as at,a0 as Sp,a3 as bE,O as Op,aE as bD,a1 as ND,a7 as Gp,a8 as Vi$1,a5 as lD,a6 as uD,N as Nt$1,aF as BE,aG as $E,aH as VF,aI as Mr,r as Pt,l as lh,aJ as Wp,aK as Bp,aL as Ki$1,aM as z,aN as Bi$1,aO as Wt,aP as Ht,aQ as zt$1,aR as ve$1,aS as Ei$1,aT as Ke,aU as Dt,aa as ey,X as Bt$1,Y as kt,aV as sD,a4 as zp,ac as M,ad as ct,n as Uu,aW as ZD,ag as oD,aX as a,aY as S,aZ as F,a_ as g,a$ as c,b0 as QD,b1 as $D,b2 as aD,b3 as wi$1,b4 as Oi$1,b5 as Ri$1,ab as EE,af as Ou,c as $c,h as Fp,e as Uc,H as Hp,b as Tu,C as Cu,ai as Wc,aj as qc,b6 as UE,b7 as eh,b8 as Vp,b9 as Ci$1,ba as eT,f as fD,ak as ge,i as Cf,bb as BD}from'./main-NTDHJKEG.js';import {C as Ct,m as mt$1,v as vt,F as Ft}from'./chunk-DPyGwHFv.js';import {$ as $e,Q as Qe,m as me,F as Fe,r as rt,l as lt,I as Ie,b as bt$1,e as et}from'./chunk-CH9qLWG0.js';import {q,E as Et}from'./chunk-B4rV0xfc.js';import'./chunk-hThg6U3w.js';import {C as Ce,p as pe,y as ye}from'./chunk-B-3AjZXW.js';import'./chunk-DqWPQ3qL.js';import'./chunk-UadG5XfY.js';import'./chunk-CkR0omJv.js';var Ge=class{constructor(i=1/0){this.capacity=i,this.itemStorage=[];}peekBy(i){return this.itemStorage[i]}clear(){this.itemStorage.splice(0,this.itemStorage.length);}push(i){if(this.size()===this.capacity)throw Error("Error: The Stack has reached maximum Capacity!");this.itemStorage.push(i);}pop(){return this.itemStorage.pop()}peek(){return this.itemStorage[this.size()-1]}size(){return this.itemStorage.length}};var w=(()=>{class t{static{this.OPERATOR_REV="\xAB";}static{this.OPERATOR_ADD="+";}static{this.OPERATOR_SUB="-";}static{this.OPERATOR_MUL="\xD7";}static{this.OPERATOR_DIV="/";}}return t})();var Ae=class{constructor(i,e,o,n){this.id=i,this.selected=e,this.disabled=o,this.value=n;}};var Le=class{constructor(){this.operands=[];}};var re=class{static evaluate(i,e,o){let n=Number.MIN_VALUE;switch(o){case w.OPERATOR_ADD:{n=i+e;break}case w.OPERATOR_SUB:{n=i>=e?i-e:Number.MIN_VALUE;break}case w.OPERATOR_DIV:{n=i%e==0?i/e:Number.MIN_VALUE;break}case w.OPERATOR_MUL:{n=i*e;break}}return n}static cloneGameParameters(i){let e=new Le;return e.result=i.result,i.operands.forEach(o=>{let n=new Ae(o.id,false,false,-1);Object.assign(n,o),e.operands.push(n);}),e}};var He=class{constructor(i,e,o){this.operands=i,this.operator=e,this.result=o;}};var gn=a("operandButtonAnimationMove",[S("buttonFromA",F({left:"{{ posALeft }}",top:"{{ posATop }}",width:"90px",height:"90px"}),{params:{posALeft:"1025px",posATop:"219px"}}),S("buttonToB",F({left:"{{ posBLeft }}",top:"{{ posBTop }}",width:"90px",height:"90px"}),{params:{posBLeft:"805px",posBTop:"324px"}}),g("* => buttonToB",c("1.5s"))]);var Xn=t=>({"background-color":t}),hn=(t,i)=>i.id;function Kn(t,i){if(t&1){let e=KE();vi$1(0,"button",10),Up("click",function(){let n=Tu(e).$implicit,a=oD();return Cu(a.onOperandButtonClick(n))}),FD(1),Bc();}if(t&2){let e=i.$implicit;Lp("disabled",e.disabled)("ngStyle",QD(4,Xn,e.selected?"rgb(190 209 253 / 59%)":""))("ngClass",!e.disabled&&!e.selected?"operator-content-button":"operator-content-button-disabled"),jv(),zc("",e.value," ");}}function Jn(t,i){if(t&1){let e=KE();vi$1(0,"button",11),Up("click",function(){let n=Tu(e).$implicit,a=oD();return Cu(a.onOperatorButtonClick(n))}),Pp(1,"mat-icon",12),Bc();}if(t&2){let e=i.$implicit,o=i.$index;Lp("ngClass",o===0?"revert-button":"arithmetic-operation-button"),jv(),Lp("svgIcon",$D(e.icon));}}var fn=(()=>{class t{constructor(e,o){this.operandButtonAnimation="",this.githubLogoPath="assets/logos/GitHub-Mark-32px.png",this.operators=new Array({id:0,selected:false,caption:w.OPERATOR_REV,operator:w.OPERATOR_REV,icon:"revert"},{id:1,selected:false,caption:w.OPERATOR_ADD,operator:w.OPERATOR_ADD,icon:"addition"},{id:2,selected:false,caption:w.OPERATOR_SUB,operator:w.OPERATOR_SUB,icon:"substraction"},{id:3,selected:false,caption:w.OPERATOR_MUL,operator:w.OPERATOR_MUL,icon:"multiplication"},{id:4,selected:false,caption:w.OPERATOR_DIV,operator:w.OPERATOR_DIV,icon:"division"}),this.gameParameters=HF.required(),this.expectedResultReached=VF(),this.invalidOperationExecuted=VF(),e.addSvgIcon("revert",o.bypassSecurityTrustResourceUrl("assets/icons/rotate-left-solid.svg")),e.addSvgIcon("addition",o.bypassSecurityTrustResourceUrl("assets/icons/plus-solid.svg")),e.addSvgIcon("substraction",o.bypassSecurityTrustResourceUrl("assets/icons/minus-solid.svg")),e.addSvgIcon("multiplication",o.bypassSecurityTrustResourceUrl("assets/icons/xmark-solid.svg")),e.addSvgIcon("division",o.bypassSecurityTrustResourceUrl("assets/icons/divide-solid.svg"));}getSelectedOperator(){return this.operators.find(e=>e.selected)}clearSelectionOfOperands(){this.gameParameters().operands.forEach(e=>{e.selected=false;});}isTheExpectedResultReached(e){return this.gameParameters().result===e}addStateToHistory(e){this.history.push(e);}clearSelectionOfOperators(){this.operators.forEach(e=>{e.selected=false;});}addGameOperationToOperationHistory(e){this.operationHistory?.push(e);}captureAnimationTriggerStartEvent(e){console.log("Animation trigger start ",e);}captureAnimationTriggerDoneEvent(e){console.log("Animation trigger done ",e);}ngOnInit(){this.history=new Ge,this.operationHistory=new Ge;}revertLastOperation(){this.history.size()>0?this.applyGameParameters(this.history.pop()):console.log("History is empty!"),this.clearSelectionOfOperators(),this.clearSelectionOfOperands(),this.selectedOperandA=null,this.selectedOperandB=null;}applyGameParameters(e){let o=this.gameParameters();o.result=e.result,o.stageIndex=e.stageIndex,e.operands.forEach((n,a)=>{Object.assign(o.operands[a],n);});}enableOfAllOperands(){this.gameParameters().operands.forEach(e=>{e.disabled=false;});}clearHistory(){this.history?.clear();}removeLastOperation(){return this.history.pop()}onOperandButtonClick(e){if(e.selected=!e.selected,!e.selected){if(this.selectedOperandB&&this.selectedOperandB.id===e.id){this.selectedOperandB.selected=false,this.selectedOperandB=null;return}else if(this.selectedOperandA&&this.selectedOperandA.id===e.id){this.selectedOperandA.selected=false,this.selectedOperandA=null;return}}this.selectedOperandA?this.selectedOperandA.id!==e.id&&(this.selectedOperandB||(this.selectedOperandB=e)):this.selectedOperandA=e;let o=this.getSelectedOperator();if(this.selectedOperandA&&this.selectedOperandB&&!o)this.selectedOperandB.selected=false,this.selectedOperandB=null;else if(this.selectedOperandA&&this.selectedOperandB&&o){let n=re.cloneGameParameters(this.gameParameters()),a=re.evaluate(this.selectedOperandA.value,this.selectedOperandB.value,o.operator);if(this.addStateToHistory(n),a===Number.MIN_VALUE)this.invalidOperationExecuted.emit(a);else {let s=new Array(this.selectedOperandA.value,this.selectedOperandB.value),c=new He(s,o.operator,a);this.addGameOperationToOperationHistory(c),this.isTheExpectedResultReached(a)&&this.expectedResultReached.emit(this.operationHistory),e.value=a;let g=this.gameParameters().operands.find($=>$.id==this.selectedOperandA.id);g.disabled=true,this.clearSelectionOfOperators(),this.clearSelectionOfOperands(),this.selectedOperandA=null,this.selectedOperandB=null;}}console.log(`Value ${e.value} Selected ${e.selected}`);}onOperatorButtonClick(e){if(!this.selectedOperandA&&e.operator!==w.OPERATOR_REV){e.selected=false;return}if(e.selected=!e.selected,e.operator===w.OPERATOR_REV){this.revertLastOperation();let o=re.cloneGameParameters(this.gameParameters()),n=new Array;o.operands.forEach(s=>{n.push(s.value);});let a=new He(n,e.operator,this.gameParameters().result);this.addGameOperationToOperationHistory(a);}console.log(`Caption ${e.caption} Selected ${e.selected}`);}ngOnDestroy(){this.history.clear(),this.history=void 0,this.operationHistory.clear(),this.operationHistory=void 0;}static{this.\u0275fac=function(o){return new(o||t)(Tr(q),Tr(Mr))};}static{this.\u0275cmp=gE({type:t,selectors:[["app-game-arithmetic-operations"]],hostVars:1,hostBindings:function(o,n){o&1&&Wp("@operandButtonAnimationMove.start",function(s){return n.captureAnimationTriggerStartEvent(s)})("@operandButtonAnimationMove.done",function(s){return n.captureAnimationTriggerDoneEvent(s)}),o&2&&Bp("@operandButtonAnimationMove",n.operandButtonAnimation);},inputs:{gameParameters:[1,"gameParameters"]},outputs:{expectedResultReached:"expectedResultReached",invalidOperationExecuted:"invalidOperationExecuted"},decls:15,vars:2,consts:[[1,"game-arithmetic-operations-layout"],[1,"usage-instruction"],[1,"expected-result"],[1,"operands-container"],[1,"three-operands"],["type","button",1,"operand",3,"disabled","ngStyle","ngClass"],[1,"operators-container"],["type","button",1,"operator-content",3,"ngClass"],["href","https://github.com/lkovari/LKovariHome/tree/master/src/app/digits/digits-game.component.ts"],["width","16","height","16",3,"src"],["type","button",1,"operand",3,"click","disabled","ngStyle","ngClass"],["type","button",1,"operator-content",3,"click","ngClass"],[1,"operator-content-icon",3,"svgIcon"]],template:function(o,n){o&1&&(vi$1(0,"div",0)(1,"div",1),FD(2,"Use the any combination of number to reach the target:"),Bc(),vi$1(3,"div")(4,"label",2),FD(5),Bc()(),vi$1(6,"div",3)(7,"div",4),WE(8,Kn,2,6,"button",5,hn),Bc()(),vi$1(10,"div",6),WE(11,Jn,2,3,"button",7,hn),Bc(),vi$1(13,"a",8),Pp(14,"img",9),Bc()()),o&2&&(jv(5),lh(n.gameParameters().result),jv(3),qE(n.gameParameters().operands),jv(3),qE(n.operators),jv(3),Lp("src",n.githubLogoPath,Cf));},dependencies:[Nt$1,Ce,ye,pe,Pt,Et],styles:[".game-arithmetic-operations-layout[_ngcontent-%COMP%]{text-align:center}.game-arithmetic-operations-layout[_ngcontent-%COMP%]   .usage-instruction[_ngcontent-%COMP%]{font-size:13px;font-weight:500;line-height:13px;letter-spacing:.02em;padding-bottom:20px;font-family:Arial,Helvetica,sans-serif}.game-arithmetic-operations-layout[_ngcontent-%COMP%]   .expected-result[_ngcontent-%COMP%]{text-align:center;font-size:55px;font-weight:500;padding-bottom:1rem}.game-arithmetic-operations-layout[_ngcontent-%COMP%]   .operands-container[_ngcontent-%COMP%]{font-size:44px;font-weight:500}.game-arithmetic-operations-layout[_ngcontent-%COMP%]   .operands-container[_ngcontent-%COMP%]   .three-operands[_ngcontent-%COMP%]{justify-content:center;display:flex;flex-direction:row;flex-wrap:wrap;width:371px;margin:7px auto}.game-arithmetic-operations-layout[_ngcontent-%COMP%]   .operands-container[_ngcontent-%COMP%]   .three-operands[_ngcontent-%COMP%]   .operand[_ngcontent-%COMP%]{width:90px;height:90px;border:4px dashed blue;border-radius:50%;font-size:26px;font-weight:550;margin:4px 10px;font-family:Courier New,Courier,monospace}.game-arithmetic-operations-layout[_ngcontent-%COMP%]   .operands-container[_ngcontent-%COMP%]   .three-operands[_ngcontent-%COMP%]   .operand[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover{border:4px solid blue}.game-arithmetic-operations-layout[_ngcontent-%COMP%]   .operators-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-content:center;align-items:center}.game-arithmetic-operations-layout[_ngcontent-%COMP%]   .operator-content[_ngcontent-%COMP%]{order:0;flex:0 1 auto;align-self:auto;width:3.55rem;height:3.55rem;border:4px solid #6b6b6b;border-radius:50%;margin:3px;display:flex;justify-content:center;align-items:center;color:#00f}.game-arithmetic-operations-layout[_ngcontent-%COMP%]   .operator-content-button[_ngcontent-%COMP%], .game-arithmetic-operations-layout[_ngcontent-%COMP%]   .operator-content-button-disabled[_ngcontent-%COMP%]{background-color:#fff}.game-arithmetic-operations-layout[_ngcontent-%COMP%]   .operator-content-button[_ngcontent-%COMP%]:hover{background-color:#e6fffa}.game-arithmetic-operations-layout[_ngcontent-%COMP%]   .operator-content-icon[_ngcontent-%COMP%]{width:30px;height:30px;font-weight:500;vertical-align:middle}.game-arithmetic-operations-layout[_ngcontent-%COMP%]   .revert-button[_ngcontent-%COMP%]{background-color:#dbfbdd}.game-arithmetic-operations-layout[_ngcontent-%COMP%]   .revert-button[_ngcontent-%COMP%]:hover{background-color:#aae0ae}.game-arithmetic-operations-layout[_ngcontent-%COMP%]   .arithmetic-operation-button[_ngcontent-%COMP%]{background-color:#d9ecff}.game-arithmetic-operations-layout[_ngcontent-%COMP%]   .arithmetic-operation-button[_ngcontent-%COMP%]:hover{background-color:#aed7ff}"],data:{animation:[gn]},changeDetection:1});}}return t})();var pt=class{constructor(){this.numbers=[];}generateNumber(i,e){let o=Math.floor(i+Math.random()*(e-i+1));for(;this.numbers.indexOf(o)>=0;)o=Math.floor(i+Math.random()*(e-i+1));this.numbers.push(o);}getGeneratedNumbers(){return this.numbers}clearGeneratedNumbers(){this.numbers=[];}};var ut=class{generateNumber(i,e){return Math.floor(i+Math.random()*(e-i+1))}choiceRandomOperation(){let i=this.generateNumber(0,4),e=w.OPERATOR_ADD;switch(i){case 0:{e=w.OPERATOR_ADD;break}case 1:{e=w.OPERATOR_SUB;break}case 2:{e=w.OPERATOR_MUL;break}case 3:{e=w.OPERATOR_DIV;break}}return e}checkExecuteDivision(i,e){return i%e===0}checkExecuteSubstraction(i,e){return i>e}removeOperandByIndex(i,e){let o=e;return i<e&&(o=e-1),this.operands.splice(i,1),o}calculateResult(i){let e=this.operands.length,o=0,n=0,a=this.generateNumber(3,5),s=Number.MIN_VALUE;for(;n<a&&i.length>1;){let c=this.choiceRandomOperation(),g=this.generateNumber(0,e-1);for(s===Number.MIN_VALUE&&(s=this.generateNumber(0,e-1));s===g;)g=this.generateNumber(0,e-1);switch(c){case w.OPERATOR_ADD:{i[s]=re.evaluate(i[s],i[g],c),s=this.removeOperandByIndex(g,s),--e,++n;break}case w.OPERATOR_SUB:{if(this.checkExecuteSubstraction(i[s],i[g]))i[s]=re.evaluate(i[s],i[g],c),s=this.removeOperandByIndex(g,s),--e,++n;else continue;break}case w.OPERATOR_MUL:{i[s]=re.evaluate(i[s],i[g],c),s=this.removeOperandByIndex(g,s),--e,++n;break}case w.OPERATOR_DIV:{if(this.checkExecuteDivision(i[s],i[g]))i[s]=re.evaluate(i[s],i[g],c),s=this.removeOperandByIndex(g,s),--e,++n;else continue;break}}}return o=i[s],o}generateGameParameter(i){let e=new pt;switch(i){case 0:{e.generateNumber(1,5),e.generateNumber(1,5),e.generateNumber(1,5),e.generateNumber(1,5),e.generateNumber(1,5),e.generateNumber(5,10),e.generateNumber(10,25);break}case 1:{e.generateNumber(1,5),e.generateNumber(1,5),e.generateNumber(1,5),e.generateNumber(5,10),e.generateNumber(10,15),e.generateNumber(10,25);break}case 2:{e.generateNumber(1,5),e.generateNumber(1,5),e.generateNumber(5,10),e.generateNumber(5,15),e.generateNumber(10,20),e.generateNumber(10,25);break}case 3:{e.generateNumber(1,5),e.generateNumber(5,10),e.generateNumber(5,15),e.generateNumber(10,15),e.generateNumber(10,20),e.generateNumber(10,25);break}case 4:{e.generateNumber(1,10),e.generateNumber(5,10),e.generateNumber(5,15),e.generateNumber(10,15),e.generateNumber(10,25),e.generateNumber(10,25);break}}let o=e.getGeneratedNumbers();o=o.sort((R,C)=>R-C);let n=new Array(o[0],o[1],o[2],o[3],o[4],o[5]);this.operands=new Array(o[0],o[1],o[2],o[3],o[4],o[5]),e.clearGeneratedNumbers();let a=0,s=0;switch(i){case 0:{a=30,s=100;break}case 1:{a=50,s=150;break}case 2:{a=100,s=200;break}case 3:{a=300,s=400;break}case 4:{a=400,s=550;break}}let c=this.calculateResult(this.operands);for(;a>c||c>s;)this.operands=new Array(o[0],o[1],o[2],o[3],o[4],o[5]),c=this.calculateResult(this.operands);let g=new Le;g.result=c;let $=0;return n.forEach(R=>{let C=new Ae($,false,false,R);g.operands.push(C),++$;}),g}generateStageNumbers(){let i=new Array;for(let e=0;e<5;e++){let o=this.generateGameParameter(e);o.stageIndex=e,i.push(o);}return i=i.sort((e,o)=>e.result-o.result),i}};var je=class{cookieData2Text(){return JSON.stringify(this)}text2CookieData(i){return JSON.parse(i)}};var mt=(()=>{class t{constructor(){this.document=v(jo$1),this.platformId=v(ym),this.documentIsAccessible=Pi$1(this.platformId);}static getCookieRegExp(e){let o=e.replace(/([[\]{}()|=;+?,.*^$\\])/gi,"\\$1");return new RegExp("(?:^"+o+"|;\\s*"+o+")=(.*?)(?:;|$)")}static safeDecodeURIComponent(e){try{return decodeURIComponent(e)}catch(o){return e}}check(e){return this.documentIsAccessible?(e=encodeURIComponent(e),t.getCookieRegExp(e).test(this.document.cookie)):false}get(e){if(this.check(e)){e=encodeURIComponent(e);let n=t.getCookieRegExp(e).exec(this.document.cookie);return n?.[1]?t.safeDecodeURIComponent(n[1]):""}else return ""}getAll(){if(!this.documentIsAccessible)return {};let e={},o=this.document;return o.cookie&&o.cookie!==""&&o.cookie.split(";").forEach(n=>{let[a,s]=n.split("=");e[t.safeDecodeURIComponent(a.replace(/^ /,""))]=t.safeDecodeURIComponent(s);}),e}set(e,o,n,a,s,c,g,$){if(!this.documentIsAccessible)return;if(typeof n=="number"||n instanceof Date||a||s||c||g){let X={expires:n,path:a,domain:s,secure:c,sameSite:g||"Lax",partitioned:$};this.set(e,o,X);return}let R=encodeURIComponent(e)+"="+encodeURIComponent(o)+";",C=n||{};if(C.expires)if(typeof C.expires=="number"){let X=new Date(new Date().getTime()+C.expires*1e3*60*60*24);R+="Expires="+X.toUTCString()+";";}else R+="Expires="+C.expires.toUTCString()+";";C.path&&(R+="Path="+C.path+";"),C.domain&&(R+="Domain="+C.domain+";"),C.secure===false&&C.sameSite==="None"&&(C.secure=true,console.warn(`[ngx-cookie-service] Cookie ${e} was forced with secure flag because sameSite=None.More details : https://github.com/stevermeister/ngx-cookie-service/issues/86#issuecomment-597720130`)),C.secure&&(R+="Secure;"),C.sameSite||(C.sameSite="Lax"),R+="SameSite="+C.sameSite+";",C.partitioned&&(R+="Partitioned;"),this.document.cookie=R;}delete(e,o,n,a,s="Lax"){if(!this.documentIsAccessible)return;let c=new Date("Thu, 01 Jan 1970 00:00:01 GMT");this.set(e,"",{expires:c,path:o,domain:n,secure:a,sameSite:s});}deleteAll(e,o,n,a="Lax"){if(!this.documentIsAccessible)return;let s=this.getAll();for(let c in s)s.hasOwnProperty(c)&&this.delete(c,e,o,n,a);}static{this.\u0275fac=function(o){return new(o||t)};}static{this.\u0275prov=te({token:t,factory:t.\u0275fac,providedIn:"root"});}}return t})();var gt=class{constructor(){this.stages=[];}};var ht=class{constructor(){this.operands=[];}};var Ue=class{};var _n=(()=>{class t extends bt$1{static \u0275fac=(()=>{let e;return function(n){return (e||(e=ey(t)))(n||t)}})();static \u0275cmp=gE({type:t,selectors:[["","data-p-icon","check"]],features:[Np],decls:1,vars:0,consts:[["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(o,n){o&1&&(Ou(),Fp(0,"path",0));},encapsulation:2,changeDetection:1})}return t})();var vn=(()=>{class t extends bt$1{pathId;onInit(){this.pathId="url(#"+me()+")";}static \u0275fac=(()=>{let e;return function(n){return (e||(e=ey(t)))(n||t)}})();static \u0275cmp=gE({type:t,selectors:[["","data-p-icon","exclamation-triangle"]],features:[Np],decls:7,vars:2,consts:[["d","M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z","fill","currentColor"],["d","M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z","fill","currentColor"],["d","M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(o,n){o&1&&(Ou(),$c(0,"g"),Fp(1,"path",0)(2,"path",1)(3,"path",2),Uc(),$c(4,"defs")(5,"clipPath",3),Fp(6,"rect",4),Uc()()),o&2&&(Op("clip-path",n.pathId),jv(5),Hp("id",n.pathId));},encapsulation:2,changeDetection:1})}return t})();var yn=(()=>{class t extends bt$1{pathId;onInit(){this.pathId="url(#"+me()+")";}static \u0275fac=(()=>{let e;return function(n){return (e||(e=ey(t)))(n||t)}})();static \u0275cmp=gE({type:t,selectors:[["","data-p-icon","info-circle"]],features:[Np],decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(o,n){o&1&&(Ou(),$c(0,"g"),Fp(1,"path",0),Uc(),$c(2,"defs")(3,"clipPath",1),Fp(4,"rect",2),Uc()()),o&2&&(Op("clip-path",n.pathId),jv(3),Hp("id",n.pathId));},encapsulation:2,changeDetection:1})}return t})();var Cn=(()=>{class t extends bt$1{pathId;onInit(){this.pathId="url(#"+me()+")";}static \u0275fac=(()=>{let e;return function(n){return (e||(e=ey(t)))(n||t)}})();static \u0275cmp=gE({type:t,selectors:[["","data-p-icon","spinner"]],features:[Np],decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(o,n){o&1&&(Ou(),$c(0,"g"),Fp(1,"path",0),Uc(),$c(2,"defs")(3,"clipPath",1),Fp(4,"rect",2),Uc()()),o&2&&(Op("clip-path",n.pathId),jv(3),Hp("id",n.pathId));},encapsulation:2,changeDetection:1})}return t})();var xn=(()=>{class t extends bt$1{pathId;onInit(){this.pathId="url(#"+me()+")";}static \u0275fac=(()=>{let e;return function(n){return (e||(e=ey(t)))(n||t)}})();static \u0275cmp=gE({type:t,selectors:[["","data-p-icon","times-circle"]],features:[Np],decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(o,n){o&1&&(Ou(),$c(0,"g"),Fp(1,"path",0),Uc(),$c(2,"defs")(3,"clipPath",1),Fp(4,"rect",2),Uc()()),o&2&&(Op("clip-path",n.pathId),jv(3),Hp("id",n.pathId));},encapsulation:2,changeDetection:1})}return t})();var Tn=(()=>{class t extends bt$1{pathId;onInit(){this.pathId="url(#"+me()+")";}static \u0275fac=(()=>{let e;return function(n){return (e||(e=ey(t)))(n||t)}})();static \u0275cmp=gE({type:t,selectors:[["","data-p-icon","window-maximize"]],features:[Np],decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(o,n){o&1&&(Ou(),$c(0,"g"),Fp(1,"path",0),Uc(),$c(2,"defs")(3,"clipPath",1),Fp(4,"rect",2),Uc()()),o&2&&(Op("clip-path",n.pathId),jv(3),Hp("id",n.pathId));},encapsulation:2,changeDetection:1})}return t})();var In=(()=>{class t extends bt$1{pathId;onInit(){this.pathId="url(#"+me()+")";}static \u0275fac=(()=>{let e;return function(n){return (e||(e=ey(t)))(n||t)}})();static \u0275cmp=gE({type:t,selectors:[["","data-p-icon","window-minimize"]],features:[Np],decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(o,n){o&1&&(Ou(),$c(0,"g"),Fp(1,"path",0),Uc(),$c(2,"defs")(3,"clipPath",1),Fp(4,"rect",2),Uc()()),o&2&&(Op("clip-path",n.pathId),jv(3),Hp("id",n.pathId));},encapsulation:2,changeDetection:1})}return t})();var wn=`
    .p-toast {
        width: dt('toast.width');
        white-space: pre-line;
        word-break: break-word;
    }

    .p-toast-message {
        margin: 0 0 1rem 0;
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-toast-message-icon {
        flex-shrink: 0;
        font-size: dt('toast.icon.size');
        width: dt('toast.icon.size');
        height: dt('toast.icon.size');
    }

    .p-toast-message-content {
        display: flex;
        align-items: flex-start;
        padding: dt('toast.content.padding');
        gap: dt('toast.content.gap');
        min-height: 0;
        overflow: hidden;
        transition: padding 250ms ease-in;
    }

    .p-toast-message-text {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        gap: dt('toast.text.gap');
    }

    .p-toast-summary {
        font-weight: dt('toast.summary.font.weight');
        font-size: dt('toast.summary.font.size');
    }

    .p-toast-detail {
        font-weight: dt('toast.detail.font.weight');
        font-size: dt('toast.detail.font.size');
    }

    .p-toast-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        cursor: pointer;
        background: transparent;
        transition:
            background dt('toast.transition.duration'),
            color dt('toast.transition.duration'),
            outline-color dt('toast.transition.duration'),
            box-shadow dt('toast.transition.duration');
        outline-color: transparent;
        color: inherit;
        width: dt('toast.close.button.width');
        height: dt('toast.close.button.height');
        border-radius: dt('toast.close.button.border.radius');
        margin: -25% 0 0 0;
        right: -25%;
        padding: 0;
        border: none;
        user-select: none;
    }

    .p-toast-close-button:dir(rtl) {
        margin: -25% 0 0 auto;
        left: -25%;
        right: auto;
    }

    .p-toast-message-info,
    .p-toast-message-success,
    .p-toast-message-warn,
    .p-toast-message-error,
    .p-toast-message-secondary,
    .p-toast-message-contrast {
        border-width: dt('toast.border.width');
        border-style: solid;
        backdrop-filter: blur(dt('toast.blur'));
        border-radius: dt('toast.border.radius');
    }

    .p-toast-close-icon {
        font-size: dt('toast.close.icon.size');
        width: dt('toast.close.icon.size');
        height: dt('toast.close.icon.size');
    }

    .p-toast-close-button:focus-visible {
        outline-width: dt('focus.ring.width');
        outline-style: dt('focus.ring.style');
        outline-offset: dt('focus.ring.offset');
    }

    .p-toast-message-info {
        background: dt('toast.info.background');
        border-color: dt('toast.info.border.color');
        color: dt('toast.info.color');
        box-shadow: dt('toast.info.shadow');
    }

    .p-toast-message-info .p-toast-detail {
        color: dt('toast.info.detail.color');
    }

    .p-toast-message-info .p-toast-close-button:focus-visible {
        outline-color: dt('toast.info.close.button.focus.ring.color');
        box-shadow: dt('toast.info.close.button.focus.ring.shadow');
    }

    .p-toast-message-info .p-toast-close-button:hover {
        background: dt('toast.info.close.button.hover.background');
    }

    .p-toast-message-success {
        background: dt('toast.success.background');
        border-color: dt('toast.success.border.color');
        color: dt('toast.success.color');
        box-shadow: dt('toast.success.shadow');
    }

    .p-toast-message-success .p-toast-detail {
        color: dt('toast.success.detail.color');
    }

    .p-toast-message-success .p-toast-close-button:focus-visible {
        outline-color: dt('toast.success.close.button.focus.ring.color');
        box-shadow: dt('toast.success.close.button.focus.ring.shadow');
    }

    .p-toast-message-success .p-toast-close-button:hover {
        background: dt('toast.success.close.button.hover.background');
    }

    .p-toast-message-warn {
        background: dt('toast.warn.background');
        border-color: dt('toast.warn.border.color');
        color: dt('toast.warn.color');
        box-shadow: dt('toast.warn.shadow');
    }

    .p-toast-message-warn .p-toast-detail {
        color: dt('toast.warn.detail.color');
    }

    .p-toast-message-warn .p-toast-close-button:focus-visible {
        outline-color: dt('toast.warn.close.button.focus.ring.color');
        box-shadow: dt('toast.warn.close.button.focus.ring.shadow');
    }

    .p-toast-message-warn .p-toast-close-button:hover {
        background: dt('toast.warn.close.button.hover.background');
    }

    .p-toast-message-error {
        background: dt('toast.error.background');
        border-color: dt('toast.error.border.color');
        color: dt('toast.error.color');
        box-shadow: dt('toast.error.shadow');
    }

    .p-toast-message-error .p-toast-detail {
        color: dt('toast.error.detail.color');
    }

    .p-toast-message-error .p-toast-close-button:focus-visible {
        outline-color: dt('toast.error.close.button.focus.ring.color');
        box-shadow: dt('toast.error.close.button.focus.ring.shadow');
    }

    .p-toast-message-error .p-toast-close-button:hover {
        background: dt('toast.error.close.button.hover.background');
    }

    .p-toast-message-secondary {
        background: dt('toast.secondary.background');
        border-color: dt('toast.secondary.border.color');
        color: dt('toast.secondary.color');
        box-shadow: dt('toast.secondary.shadow');
    }

    .p-toast-message-secondary .p-toast-detail {
        color: dt('toast.secondary.detail.color');
    }

    .p-toast-message-secondary .p-toast-close-button:focus-visible {
        outline-color: dt('toast.secondary.close.button.focus.ring.color');
        box-shadow: dt('toast.secondary.close.button.focus.ring.shadow');
    }

    .p-toast-message-secondary .p-toast-close-button:hover {
        background: dt('toast.secondary.close.button.hover.background');
    }

    .p-toast-message-contrast {
        background: dt('toast.contrast.background');
        border-color: dt('toast.contrast.border.color');
        color: dt('toast.contrast.color');
        box-shadow: dt('toast.contrast.shadow');
    }
    
    .p-toast-message-contrast .p-toast-detail {
        color: dt('toast.contrast.detail.color');
    }

    .p-toast-message-contrast .p-toast-close-button:focus-visible {
        outline-color: dt('toast.contrast.close.button.focus.ring.color');
        box-shadow: dt('toast.contrast.close.button.focus.ring.shadow');
    }

    .p-toast-message-contrast .p-toast-close-button:hover {
        background: dt('toast.contrast.close.button.hover.background');
    }

    .p-toast-top-center {
        transform: translateX(-50%);
    }

    .p-toast-bottom-center {
        transform: translateX(-50%);
    }

    .p-toast-center {
        min-width: 20vw;
        transform: translate(-50%, -50%);
    }

    .p-toast-message-enter-active {
        animation: p-animate-toast-enter 300ms ease-out;
    }

    .p-toast-message-leave-active {
        animation: p-animate-toast-leave 250ms ease-in;
    }

    .p-toast-message-leave-to .p-toast-message-content {
        padding-top: 0;
        padding-bottom: 0;
    }

    @keyframes p-animate-toast-enter {
        from {
            opacity: 0;
            transform: scale(0.6);
        }
        to {
            opacity: 1;
            grid-template-rows: 1fr;
        }
    }

     @keyframes p-animate-toast-leave {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
            margin-bottom: 0;
            grid-template-rows: 0fr;
            transform: translateY(-100%) scale(0.6);
        }
    }
`;var no=(t,i)=>({$implicit:t,closeFn:i}),oo=t=>({$implicit:t});function io(t,i){t&1&&Vp(0);}function ao(t,i){if(t&1&&Sp(0,io,1,0,"ng-container",3),t&2){let e=oD();Lp("ngTemplateOutlet",e.headlessTemplate)("ngTemplateOutletContext",ZD(2,no,e.message,e.onCloseIconClick));}}function so(t,i){if(t&1&&Pp(0,"span",4),t&2){let e=oD(3);ND(e.cn(e.cx("messageIcon"),e.message==null?null:e.message.icon)),Lp("pBind",e.ptm("messageIcon"));}}function ro(t,i){if(t&1&&(Ou(),Pp(0,"svg",11)),t&2){let e=oD(4);ND(e.cx("messageIcon")),Lp("pBind",e.ptm("messageIcon")),Op("aria-hidden",true);}}function lo(t,i){if(t&1&&(Ou(),Pp(0,"svg",12)),t&2){let e=oD(4);ND(e.cx("messageIcon")),Lp("pBind",e.ptm("messageIcon")),Op("aria-hidden",true);}}function co(t,i){if(t&1&&(Ou(),Pp(0,"svg",13)),t&2){let e=oD(4);ND(e.cx("messageIcon")),Lp("pBind",e.ptm("messageIcon")),Op("aria-hidden",true);}}function po(t,i){if(t&1&&(Ou(),Pp(0,"svg",14)),t&2){let e=oD(4);ND(e.cx("messageIcon")),Lp("pBind",e.ptm("messageIcon")),Op("aria-hidden",true);}}function uo(t,i){if(t&1&&(Ou(),Pp(0,"svg",12)),t&2){let e=oD(4);ND(e.cx("messageIcon")),Lp("pBind",e.ptm("messageIcon")),Op("aria-hidden",true);}}function mo(t,i){if(t&1&&BE(0,ro,1,4,":svg:svg",7)(1,lo,1,4,":svg:svg",8)(2,co,1,4,":svg:svg",9)(3,po,1,4,":svg:svg",10)(4,uo,1,4,":svg:svg",8),t&2){let e,o=oD(3);$E((e=o.message.severity)==="success"?0:e==="info"?1:e==="error"?2:e==="warn"?3:4);}}function go(t,i){if(t&1&&(Wc(0),BE(1,so,1,3,"span",2)(2,mo,5,1),vi$1(3,"div",6)(4,"div",6),FD(5),Bc(),vi$1(6,"div",6),FD(7),Bc()(),qc()),t&2){let e=oD(2);jv(),$E(e.message.icon?1:2),jv(2),Lp("pBind",e.ptm("messageText"))("ngClass",e.cx("messageText")),Op("data-p",e.dataP),jv(),Lp("pBind",e.ptm("summary"))("ngClass",e.cx("summary")),Op("data-p",e.dataP),jv(),zc(" ",e.message.summary," "),jv(),Lp("pBind",e.ptm("detail"))("ngClass",e.cx("detail")),Op("data-p",e.dataP),jv(),lh(e.message.detail);}}function ho(t,i){t&1&&Vp(0);}function bo(t,i){if(t&1&&Pp(0,"span",4),t&2){let e=oD(4);ND(e.cn(e.cx("closeIcon"),e.message==null?null:e.message.closeIcon)),Lp("pBind",e.ptm("closeIcon"));}}function fo(t,i){if(t&1&&Sp(0,bo,1,3,"span",17),t&2){let e=oD(3);Lp("ngIf",e.message.closeIcon);}}function _o(t,i){if(t&1&&(Ou(),Pp(0,"svg",18)),t&2){let e=oD(3);ND(e.cx("closeIcon")),Lp("pBind",e.ptm("closeIcon")),Op("aria-hidden",true);}}function vo(t,i){if(t&1){let e=KE();vi$1(0,"div")(1,"button",15),Up("click",function(n){Tu(e);let a=oD(2);return Cu(a.onCloseIconClick(n))})("keydown.enter",function(n){Tu(e);let a=oD(2);return Cu(a.onCloseIconClick(n))}),BE(2,fo,1,1,"span",2)(3,_o,1,4,":svg:svg",16),Bc()();}if(t&2){let e=oD(2);jv(),Lp("pBind",e.ptm("closeButton")),Op("class",e.cx("closeButton"))("aria-label",e.closeAriaLabel)("data-p",e.dataP),jv(),$E(e.message.closeIcon?2:3);}}function yo(t,i){if(t&1&&(vi$1(0,"div",4),Sp(1,go,8,12,"ng-container",5)(2,ho,1,0,"ng-container",3),BE(3,vo,4,5,"div"),Bc()),t&2){let e=oD();ND(e.cn(e.cx("messageContent"),e.message==null?null:e.message.contentStyleClass)),Lp("pBind",e.ptm("messageContent")),jv(),Lp("ngIf",!e.template),jv(),Lp("ngTemplateOutlet",e.template)("ngTemplateOutletContext",QD(7,oo,e.message)),jv(),$E((e.message==null?null:e.message.closable)!==false?3:-1);}}var Co=["message"],xo=["headless"];function To(t,i){if(t&1){let e=KE();vi$1(0,"p-toastItem",1),Up("onClose",function(n){Tu(e);let a=oD();return Cu(a.onMessageClose(n))})("onAnimationEnd",function(){Tu(e);let n=oD();return Cu(n.onAnimationEnd())})("onAnimationStart",function(){Tu(e);let n=oD();return Cu(n.onAnimationStart())}),Bc();}if(t&2){let e=i.$implicit,o=i.index,n=oD();Lp("message",e)("index",o)("life",n.life)("clearAll",n.clearAllTrigger())("template",n.template||n._template)("headlessTemplate",n.headlessTemplate||n._headlessTemplate)("pt",n.pt)("unstyled",n.unstyled())("motionOptions",n.computedMotionOptions());}}var Io={root:({instance:t})=>{let{_position:i}=t;return {position:"fixed",top:i==="top-right"||i==="top-left"||i==="top-center"?"20px":i==="center"?"50%":null,right:(i==="top-right"||i==="bottom-right")&&"20px",bottom:(i==="bottom-left"||i==="bottom-right"||i==="bottom-center")&&"20px",left:i==="top-left"||i==="bottom-left"?"20px":i==="center"||i==="top-center"||i==="bottom-center"?"50%":null}}},wo={root:({instance:t})=>["p-toast p-component",`p-toast-${t._position}`],message:({instance:t})=>({"p-toast-message":true,"p-toast-message-info":t.message.severity==="info"||t.message.severity===void 0,"p-toast-message-warn":t.message.severity==="warn","p-toast-message-error":t.message.severity==="error","p-toast-message-success":t.message.severity==="success","p-toast-message-secondary":t.message.severity==="secondary","p-toast-message-contrast":t.message.severity==="contrast"}),messageContent:"p-toast-message-content",messageIcon:({instance:t})=>({"p-toast-message-icon":true,[`pi ${t.message.icon}`]:!!t.message.icon}),messageText:"p-toast-message-text",summary:"p-toast-summary",detail:"p-toast-detail",closeButton:"p-toast-close-button",closeIcon:({instance:t})=>({"p-toast-close-icon":true,[`pi ${t.message.closeIcon}`]:!!t.message.closeIcon})},bt=(()=>{class t extends ct{name="toast";style=wn;classes=wo;inlineStyles=Io;static \u0275fac=(()=>{let e;return function(n){return (e||(e=ey(t)))(n||t)}})();static \u0275prov=te({token:t,factory:t.\u0275fac})}return t})();var Sn=new M("TOAST_INSTANCE"),So=(()=>{class t extends $e{zone;message;index;life;template;headlessTemplate;showTransformOptions;hideTransformOptions;showTransitionOptions;hideTransitionOptions;motionOptions=HF();clearAll=HF(null);onAnimationStart=VF();onAnimationEnd=VF();onBeforeEnter(e){this.onAnimationStart.emit(e.element);}onAfterLeave(e){!this.visible()&&!this.isDestroyed&&(this.onClose.emit({index:this.index,message:this.message}),this.isDestroyed||this.onAnimationEnd.emit(e.element));}onClose=new Ve;_componentStyle=v(bt);timeout;visible=Vo$1(void 0);isDestroyed=false;isClosing=false;constructor(e){super(),this.zone=e,Uu(()=>{this.clearAll()&&this.visible.set(false);});}onAfterViewInit(){this.message?.sticky&&this.visible.set(true),this.initTimeout();}initTimeout(){this.message?.sticky||(this.clearTimeout(),this.zone.runOutsideAngular(()=>{this.visible.set(true),this.timeout=setTimeout(()=>{this.visible.set(false);},this.message?.life||this.life||3e3);}));}clearTimeout(){this.timeout&&(clearTimeout(this.timeout),this.timeout=null);}onMouseEnter(){this.clearTimeout();}onMouseLeave(){this.isClosing||this.initTimeout();}onCloseIconClick=e=>{this.isClosing=true,this.clearTimeout(),this.visible.set(false),e.preventDefault();};get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}onDestroy(){this.isDestroyed=true,this.clearTimeout(),this.visible.set(false);}get dataP(){return this.cn({[this.message?.severity]:this.message?.severity})}static \u0275fac=function(o){return new(o||t)(Tr(z))};static \u0275cmp=gE({type:t,selectors:[["p-toastItem"]],inputs:{message:"message",index:[2,"index","index",ZF],life:[2,"life","life",ZF],template:"template",headlessTemplate:"headlessTemplate",showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",motionOptions:[1,"motionOptions"],clearAll:[1,"clearAll"]},outputs:{onAnimationStart:"onAnimationStart",onAnimationEnd:"onAnimationEnd",onClose:"onClose"},features:[GD([bt]),Np],decls:4,vars:10,consts:[["container",""],["role","alert","aria-live","assertive","aria-atomic","true",3,"pMotionOnBeforeEnter","pMotionOnAfterLeave","mouseenter","mouseleave","pMotion","pMotionAppear","pMotionName","pMotionOptions","pBind"],[3,"pBind","class"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"pBind"],[4,"ngIf"],[3,"pBind","ngClass"],["data-p-icon","check",3,"pBind","class"],["data-p-icon","info-circle",3,"pBind","class"],["data-p-icon","times-circle",3,"pBind","class"],["data-p-icon","exclamation-triangle",3,"pBind","class"],["data-p-icon","check",3,"pBind"],["data-p-icon","info-circle",3,"pBind"],["data-p-icon","times-circle",3,"pBind"],["data-p-icon","exclamation-triangle",3,"pBind"],["type","button","autofocus","",3,"click","keydown.enter","pBind"],["data-p-icon","times",3,"pBind","class"],[3,"pBind","class",4,"ngIf"],["data-p-icon","times",3,"pBind"]],template:function(o,n){o&1&&(vi$1(0,"div",1,0),Up("pMotionOnBeforeEnter",function(s){return n.onBeforeEnter(s)})("pMotionOnAfterLeave",function(s){return n.onAfterLeave(s)})("mouseenter",function(){return n.onMouseEnter()})("mouseleave",function(){return n.onMouseLeave()}),BE(2,ao,1,5,"ng-container")(3,yo,4,9,"div",2),Bc()),o&2&&(ND(n.cn(n.cx("message"),n.message==null?null:n.message.styleClass)),Lp("pMotion",n.visible())("pMotionAppear",true)("pMotionName","p-toast-message")("pMotionOptions",n.motionOptions())("pBind",n.ptm("message")),Op("id",n.message==null?null:n.message.id)("data-p",n.dataP),jv(2),$E(n.headlessTemplate?2:3));},dependencies:[Gt,Pt,Bt$1,kt,_n,vn,yn,P,xn,Gi$1,Qe,mt$1,vt],encapsulation:2})}return t})(),Bt=(()=>{class t extends $e{componentName="Toast";$pcToast=v(Sn,{optional:true,skipSelf:true})??void 0;bindDirectiveInstance=v(Qe,{self:true});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]));}key;autoZIndex=true;baseZIndex=0;life=3e3;styleClass;get position(){return this._position}set position(e){this._position=e,this.cd.markForCheck();}preventOpenDuplicates=false;preventDuplicates=false;showTransformOptions="translateY(100%)";hideTransformOptions="translateY(-100%)";showTransitionOptions="300ms ease-out";hideTransitionOptions="250ms ease-in";motionOptions=HF(void 0);computedMotionOptions=oT(()=>D(D({},this.ptm("motion")),this.motionOptions()));breakpoints;onClose=new Ve;template;headlessTemplate;messageSubscription;clearSubscription;messages;messagesArchieve;_position="top-right";messageService=v(Ui$1);_componentStyle=v(bt);styleElement;id=me("pn_id_");templates;clearAllTrigger=Vo$1(null);constructor(){super();}onInit(){this.messageSubscription=this.messageService.messageObserver.subscribe(e=>{if(e)if(Array.isArray(e)){let o=e.filter(n=>this.canAdd(n));this.add(o);}else this.canAdd(e)&&this.add([e]);}),this.clearSubscription=this.messageService.clearObserver.subscribe(e=>{e?this.key===e&&this.clearAll():this.clearAll(),this.cd.markForCheck();});}clearAll(){this.clearAllTrigger.set({});}_template;_headlessTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case "message":this._template=e.template;break;case "headless":this._headlessTemplate=e.template;break;default:this._template=e.template;break}});}onAfterViewInit(){this.breakpoints&&this.createStyle();}add(e){this.messages=this.messages?[...this.messages,...e]:[...e],this.preventDuplicates&&(this.messagesArchieve=this.messagesArchieve?[...this.messagesArchieve,...e]:[...e]),this.cd.markForCheck();}canAdd(e){let o=this.key===e.key;return o&&this.preventOpenDuplicates&&(o=!this.containsMessage(this.messages,e)),o&&this.preventDuplicates&&(o=!this.containsMessage(this.messagesArchieve,e)),o}containsMessage(e,o){return e?e.find(n=>n.summary===o.summary&&n.detail==o.detail&&n.severity===o.severity)!=null:false}onMessageClose(e){this.messages?.splice(e.index,1),this.onClose.emit({message:e.message}),this.onAnimationEnd(),this.cd.detectChanges();}onAnimationStart(){this.renderer.setAttribute(this.el?.nativeElement,this.id,""),this.autoZIndex&&this.el?.nativeElement.style.zIndex===""&&Ct.set("modal",this.el?.nativeElement,this.baseZIndex||this.config.zIndex.modal);}onAnimationEnd(){this.autoZIndex&&Nt(this.messages)&&Ct.clear(this.el?.nativeElement);}createStyle(){if(!this.styleElement){this.styleElement=this.renderer.createElement("style"),this.styleElement.type="text/css",Xe(this.styleElement,"nonce",this.config?.csp()?.nonce),this.renderer.appendChild(this.document.head,this.styleElement);let e="";for(let o in this.breakpoints){let n="";for(let a in this.breakpoints[o])n+=a+":"+this.breakpoints[o][a]+" !important;";e+=`
                    @media screen and (max-width: ${o}) {
                        .p-toast[${this.id}] {
                           ${n}
                        }
                    }
                `;}this.renderer.setProperty(this.styleElement,"innerHTML",e),Xe(this.styleElement,"nonce",this.config?.csp()?.nonce);}}destroyStyle(){this.styleElement&&(this.renderer.removeChild(this.document.head,this.styleElement),this.styleElement=null);}onDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.el&&this.autoZIndex&&Ct.clear(this.el.nativeElement),this.clearSubscription&&this.clearSubscription.unsubscribe(),this.destroyStyle();}get dataP(){return this.cn({[this.position]:this.position})}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=gE({type:t,selectors:[["p-toast"]],contentQueries:function(o,n,a){if(o&1&&Gp(a,Co,5)(a,xo,5)(a,Vi$1,4),o&2){let s;lD(s=uD())&&(n.template=s.first),lD(s=uD())&&(n.headlessTemplate=s.first),lD(s=uD())&&(n.templates=s);}},hostVars:5,hostBindings:function(o,n){o&2&&(Op("data-p",n.dataP),bD(n.sx("root")),ND(n.cn(n.cx("root"),n.styleClass)));},inputs:{key:"key",autoZIndex:[2,"autoZIndex","autoZIndex",QF],baseZIndex:[2,"baseZIndex","baseZIndex",ZF],life:[2,"life","life",ZF],styleClass:"styleClass",position:"position",preventOpenDuplicates:[2,"preventOpenDuplicates","preventOpenDuplicates",QF],preventDuplicates:[2,"preventDuplicates","preventDuplicates",QF],showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",motionOptions:[1,"motionOptions"],breakpoints:"breakpoints"},outputs:{onClose:"onClose"},features:[GD([bt,{provide:Sn,useExisting:t},{provide:Ie,useExisting:t}]),bE([Qe]),Np],decls:1,vars:1,consts:[[3,"message","index","life","clearAll","template","headlessTemplate","pt","unstyled","motionOptions","onClose","onAnimationEnd","onAnimationStart",4,"ngFor","ngForOf"],[3,"onClose","onAnimationEnd","onAnimationStart","message","index","life","clearAll","template","headlessTemplate","pt","unstyled","motionOptions"]],template:function(o,n){o&1&&Sp(0,To,1,9,"p-toastItem",0),o&2&&Lp("ngForOf",n.messages);},dependencies:[Gt,at,So,Gi$1],encapsulation:2})}return t})(),En=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=yE({type:t});static \u0275inj=Jl({imports:[Bt,Gi$1,Gi$1]})}return t})();var ft=(()=>{class t{constructor(){this.subjectItemUpdate=new oe;}updatePerformedItem(e){this.subjectItemUpdate.next(e);}getUpdatedStageLevel(){return this.subjectItemUpdate.asObservable()}static{this.\u0275fac=function(o){return new(o||t)};}static{this.\u0275prov=te({token:t,factory:t.\u0275fac,providedIn:"root"});}}return t})();var Eo=(t,i)=>({"stage-level-number-unselected":t,"stage-level-number-selected":i});function ko(t,i){if(t&1){let e=KE();vi$1(0,"div",4),Up("click",function(){Tu(e);let n=oD();return Cu(n.stageClick())}),vi$1(1,"span",5),FD(2),Bc()();}if(t&2){let e=oD();jv(2),zc(" ",e.stageLevel().value," ");}}function Mo(t,i){if(t&1&&(Wc(0,2),FD(1),qc()),t&2){let e=oD();jv(),zc(" ",e.stageLevel().value," ");}}function Oo(t,i){t&1&&(vi$1(0,"span",6),Pp(1,"i",7),Bc());}function Po(t,i){if(t&1&&(vi$1(0,"div",3),WE(1,Oo,2,0,"span",6,UE),Bc()),t&2){let e=oD();jv(),qE(e.stars);}}function zo(t,i){t&1&&(vi$1(0,"span",8),Pp(1,"i",7),Bc());}function Bo(t,i){if(t&1){let e=KE();vi$1(0,"div",4),Up("click",function(){Tu(e);let n=oD(2);return Cu(n.stageClick())}),WE(1,zo,2,0,"span",8,UE),Bc();}if(t&2){let e=oD(2);jv(),qE(e.stars);}}function Ao(t,i){t&1&&(vi$1(0,"span",9),Pp(1,"i",10),Bc());}function Lo(t,i){if(t&1&&WE(0,Ao,2,0,"span",9,UE),t&2){let e=oD(2);qE(e.stars);}}function No(t,i){if(t&1&&(vi$1(0,"div",3),BE(1,Bo,3,0,"div")(2,Lo,2,0),Bc()),t&2){let e=oD();jv(),$E(e.stageLevel().completed?1:2);}}var Mn=(()=>{class t{constructor(e){this.stageCommunicationService=e,this.stars=new Array(1,2,3),this.stageLevel=HF.required();}stageClick(){this.stageCommunicationService.updatePerformedItem(this.stageLevel()),console.log("Stage Clicked");}static{this.\u0275fac=function(o){return new(o||t)(Tr(ft))};}static{this.\u0275cmp=gE({type:t,selectors:[["app-stage-level"]],inputs:{stageLevel:[1,"stageLevel"]},decls:7,vars:6,consts:[[1,"stage-level-layout"],[2,"text-align","center",3,"ngClass"],[1,"disable-stage-click"],[2,"display","flex","justify-content","center"],[3,"click"],[1,"stage-level-completed-value","enable-stage-click"],[1,"stage-level-asterisk-selected"],[1,"pi","pi-star-fill",2,"font-size","10px"],[1,"stage-level-asterisk-unselected","stage-level-completed","enable-stage-click"],[1,"stage-level-asterisk-unselected","disable-stage-click"],[1,"pi","pi-star",2,"font-size","10px"]],template:function(o,n){o&1&&(vi$1(0,"div",0)(1,"div",1),BE(2,ko,3,1,"div")(3,Mo,2,1,"ng-container",2),Bc(),vi$1(4,"div"),BE(5,Po,3,0,"div",3)(6,No,3,1,"div",3),Bc()()),o&2&&(jv(),Lp("ngClass",ZD(3,Eo,!n.stageLevel().selected,n.stageLevel().selected)),jv(),$E(n.stageLevel().completed?2:3),jv(3),$E(n.stageLevel().selected?5:6));},dependencies:[Pt,Ce,ye],styles:[".stage-level-layout[_ngcontent-%COMP%]{padding-top:1px}.stage-level-layout[_ngcontent-%COMP%]   .enable-stage-click[_ngcontent-%COMP%]{cursor:pointer;pointer-events:auto}.stage-level-layout[_ngcontent-%COMP%]   .disable-stage-click[_ngcontent-%COMP%]{cursor:default;pointer-events:none}.stage-level-layout[_ngcontent-%COMP%]   .stage-level-font[_ngcontent-%COMP%], .stage-level-layout[_ngcontent-%COMP%]   .stage-level-number-selected[_ngcontent-%COMP%], .stage-level-layout[_ngcontent-%COMP%]   .stage-level-number-unselected[_ngcontent-%COMP%]{font-size:17px}.stage-level-layout[_ngcontent-%COMP%]   .stage-level-number-unselected[_ngcontent-%COMP%]{font-weight:450}.stage-level-layout[_ngcontent-%COMP%]   .stage-level-number-selected[_ngcontent-%COMP%]{font-weight:600}.stage-level-layout[_ngcontent-%COMP%]   .stage-level-asterisk-unselected[_ngcontent-%COMP%]{color:#00f}.stage-level-layout[_ngcontent-%COMP%]   .stage-level-asterisk-selected[_ngcontent-%COMP%]{color:#ec09eb}.stage-level-layout[_ngcontent-%COMP%]   .stage-level-completed[_ngcontent-%COMP%], .stage-level-layout[_ngcontent-%COMP%]   .stage-level-completed-value[_ngcontent-%COMP%]{color:green;opacity:.5}.stage-level-layout[_ngcontent-%COMP%]   .stage-level-completed-value[_ngcontent-%COMP%]{font-weight:500;color:#000}"],changeDetection:1});}}return t})();var Fo=t=>({"border-bottom":t}),Vo=(t,i)=>i.index;function Ro(t,i){t&1&&(vi$1(0,"div")(1,"span",2),FD(2,"No stage levels defined!"),Bc()());}function Go(t,i){if(t&1&&(vi$1(0,"div",3),Pp(1,"app-stage-level",4),Bc()),t&2){let e=i.$implicit;Lp("ngStyle",QD(2,Fo,e.selected?"none":"1px solid #d4d4d4")),jv(),Lp("stageLevel",e);}}function Ho(t,i){if(t&1&&(vi$1(0,"div",1),WE(1,Go,2,4,"div",3,Vo),Bc()),t&2){let e=oD();jv(),qE(e.stageLevels());}}var On=(()=>{class t{constructor(){this.MAXSTAGE_LEVELS=5,this.NO_STAGE_LEVELS=false,this.stageLevels=HF(new Array);}ngOnInit(){let e=this.stageLevels();this.NO_STAGE_LEVELS=!e||e&&e.length!=this.MAXSTAGE_LEVELS;}static{this.\u0275fac=function(o){return new(o||t)};}static{this.\u0275cmp=gE({type:t,selectors:[["app-game-stage-levels"]],inputs:{stageLevels:[1,"stageLevels"]},decls:3,vars:1,consts:[[1,"game-stage-level-layout"],[1,"stage-levels"],[1,"warning-message"],[1,"stage-level",3,"ngStyle"],[3,"stageLevel"]],template:function(o,n){o&1&&(vi$1(0,"div",0),BE(1,Ro,3,0,"div")(2,Ho,3,0,"div",1),Bc()),o&2&&(jv(),$E(n.NO_STAGE_LEVELS?1:2));},dependencies:[Nt$1,Ce,pe,Mn],styles:[".digit-font-settings[_ngcontent-%COMP%], .game-stage-level-layout[_ngcontent-%COMP%]   .warning-message[_ngcontent-%COMP%]{font-size:17px;font-weight:500;line-height:17px;font-family:Courier New,Courier,monospace;letter-spacing:.03em}.digits-border-horizontal[_ngcontent-%COMP%], .game-stage-level-layout[_ngcontent-%COMP%]   .warning-message[_ngcontent-%COMP%]{border-bottom:1px solid #d4d4d4;padding:12px 0}.game-stage-level-layout[_ngcontent-%COMP%]   .warning-message[_ngcontent-%COMP%]{font-weight:500;font-size:17px;text-align:center;color:orange;padding-left:calc(50% - 115px)}.game-stage-level-layout[_ngcontent-%COMP%]   .stage-levels[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center}.game-stage-level-layout[_ngcontent-%COMP%]   .stage-levels[_ngcontent-%COMP%]   .stage-level[_ngcontent-%COMP%]{border:1px solid #d4d4d4;padding:0 10px;order:0;flex:1 1 auto;align-self:auto}"],changeDetection:1});}}return t})();var Pn=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var jo=`
    ${Pn}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,Uo={root:({instance:t})=>{let i=typeof t.value=="function"?t.value():t.value,e=typeof t.size=="function"?t.size():t.size,o=typeof t.badgeSize=="function"?t.badgeSize():t.badgeSize,n=typeof t.severity=="function"?t.severity():t.severity;return ["p-badge p-component",{"p-badge-circle":ge(i)&&String(i).length===1,"p-badge-dot":Nt(i),"p-badge-sm":e==="small"||o==="small","p-badge-lg":e==="large"||o==="large","p-badge-xl":e==="xlarge"||o==="xlarge","p-badge-info":n==="info","p-badge-success":n==="success","p-badge-warn":n==="warn","p-badge-danger":n==="danger","p-badge-secondary":n==="secondary","p-badge-contrast":n==="contrast"}]}},zn=(()=>{class t extends ct{name="badge";style=jo;classes=Uo;static \u0275fac=(()=>{let e;return function(n){return (e||(e=ey(t)))(n||t)}})();static \u0275prov=te({token:t,factory:t.\u0275fac})}return t})();var Bn=new M("BADGE_INSTANCE");var At=(()=>{class t extends $e{componentName="Badge";$pcBadge=v(Bn,{optional:true,skipSelf:true})??void 0;bindDirectiveInstance=v(Qe,{self:true});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]));}styleClass=HF();badgeSize=HF();size=HF();severity=HF();value=HF();badgeDisabled=HF(false,{transform:QF});_componentStyle=v(zn);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static \u0275fac=(()=>{let e;return function(n){return (e||(e=ey(t)))(n||t)}})();static \u0275cmp=gE({type:t,selectors:[["p-badge"]],hostVars:5,hostBindings:function(o,n){o&2&&(Op("data-p",n.dataP),ND(n.cn(n.cx("root"),n.styleClass())),eh("display",n.badgeDisabled()?"none":null));},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[GD([zn,{provide:Bn,useExisting:t},{provide:Ie,useExisting:t}]),bE([Qe]),Np],decls:1,vars:1,template:function(o,n){o&1&&FD(0),o&2&&lh(n.value());},dependencies:[Gt,Gi$1,et],encapsulation:2})}return t})(),An=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=yE({type:t});static \u0275inj=Jl({imports:[At,Gi$1,Gi$1]})}return t})();var Ln=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\xA0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var Zo=["content"],Qo=["loadingicon"],Yo=["icon"],qo=["*"],Vn=(t,i)=>({class:t,pt:i});function Wo(t,i){t&1&&Vp(0);}function Xo(t,i){if(t&1&&Pp(0,"span",7),t&2){let e=oD(3);ND(e.cn(e.cx("loadingIcon"),"pi-spin",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon))),Lp("pBind",e.ptm("loadingIcon")),Op("aria-hidden",true);}}function Ko(t,i){if(t&1&&(Ou(),Pp(0,"svg",8)),t&2){let e=oD(3);ND(e.cn(e.cx("loadingIcon"),e.cx("spinnerIcon"))),Lp("pBind",e.ptm("loadingIcon"))("spin",true),Op("aria-hidden",true);}}function Jo(t,i){if(t&1&&(Wc(0),Sp(1,Xo,1,4,"span",3)(2,Ko,1,5,"svg",6),qc()),t&2){let e=oD(2);jv(),Lp("ngIf",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon)),jv(),Lp("ngIf",!(e.loadingIcon||e.buttonProps!=null&&e.buttonProps.loadingIcon));}}function ei(t,i){}function ti(t,i){if(t&1&&Sp(0,ei,0,0,"ng-template",9),t&2){let e=oD(2);Lp("ngIf",e.loadingIconTemplate||e._loadingIconTemplate);}}function ni(t,i){if(t&1&&(Wc(0),Sp(1,Jo,3,2,"ng-container",2)(2,ti,1,1,null,5),qc()),t&2){let e=oD();jv(),Lp("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),jv(),Lp("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",ZD(3,Vn,e.cx("loadingIcon"),e.ptm("loadingIcon")));}}function oi(t,i){if(t&1&&Pp(0,"span",7),t&2){let e=oD(2);ND(e.cn(e.cx("icon"),e.icon||(e.buttonProps==null?null:e.buttonProps.icon))),Lp("pBind",e.ptm("icon")),Op("data-p",e.dataIconP);}}function ii(t,i){}function ai(t,i){if(t&1&&Sp(0,ii,0,0,"ng-template",9),t&2){let e=oD(2);Lp("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate));}}function si(t,i){if(t&1&&(Wc(0),Sp(1,oi,1,4,"span",3)(2,ai,1,1,null,5),qc()),t&2){let e=oD();jv(),Lp("ngIf",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!e.iconTemplate&&!e._iconTemplate),jv(),Lp("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",ZD(3,Vn,e.cx("icon"),e.ptm("icon")));}}function ri(t,i){if(t&1&&(vi$1(0,"span",7),FD(1),Bc()),t&2){let e=oD();ND(e.cx("label")),Lp("pBind",e.ptm("label")),Op("aria-hidden",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!(e.label||e.buttonProps!=null&&e.buttonProps.label))("data-p",e.dataLabelP),jv(),lh(e.label||(e.buttonProps==null?null:e.buttonProps.label));}}function li(t,i){if(t&1&&Pp(0,"p-badge",10),t&2){let e=oD();Lp("value",e.badge||(e.buttonProps==null?null:e.buttonProps.badge))("severity",e.badgeSeverity||(e.buttonProps==null?null:e.buttonProps.badgeSeverity))("pt",e.ptm("pcBadge"))("unstyled",e.unstyled());}}var di={root:({instance:t})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!t.label&&!t.buttonProps?.label&&!t.badge,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading||t.buttonProps?.loading,"p-button-link":t.link||t.buttonProps?.link,[`p-button-${t.severity||t.buttonProps?.severity}`]:t.severity||t.buttonProps?.severity,"p-button-raised":t.raised||t.buttonProps?.raised,"p-button-rounded":t.rounded||t.buttonProps?.rounded,"p-button-text":t.text||t.variant==="text"||t.buttonProps?.text||t.buttonProps?.variant==="text","p-button-outlined":t.outlined||t.variant==="outlined"||t.buttonProps?.outlined||t.buttonProps?.variant==="outlined","p-button-sm":t.size==="small"||t.buttonProps?.size==="small","p-button-lg":t.size==="large"||t.buttonProps?.size==="large","p-button-plain":t.plain||t.buttonProps?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos||t.buttonProps?.iconPos}`]:t.label||t.buttonProps?.label,"p-button-icon-left":(t.iconPos==="left"||t.buttonProps?.iconPos==="left")&&t.label||t.buttonProps?.label,"p-button-icon-right":(t.iconPos==="right"||t.buttonProps?.iconPos==="right")&&t.label||t.buttonProps?.label,"p-button-icon-top":(t.iconPos==="top"||t.buttonProps?.iconPos==="top")&&t.label||t.buttonProps?.label,"p-button-icon-bottom":(t.iconPos==="bottom"||t.buttonProps?.iconPos==="bottom")&&t.label||t.buttonProps?.label},t.icon,t.buttonProps?.icon],spinnerIcon:({instance:t})=>Object.entries(t.cx("icon")).filter(([,i])=>!!i).reduce((i,[e])=>i+` ${e}`,"p-button-loading-icon"),label:"p-button-label"},Nn=(()=>{class t extends ct{name="button";style=Ln;classes=di;static \u0275fac=(()=>{let e;return function(n){return (e||(e=ey(t)))(n||t)}})();static \u0275prov=te({token:t,factory:t.\u0275fac})}return t})();var Fn=new M("BUTTON_INSTANCE");var Rn=(()=>{class t extends $e{componentName="Button";hostName="";$pcButton=v(Fn,{optional:true,skipSelf:true})??void 0;bindDirectiveInstance=v(Qe,{self:true});_componentStyle=v(Nn);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"));}type="button";badge;disabled;raised=false;rounded=false;text=false;plain=false;outlined=false;link=false;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=false;loadingIcon;severity;buttonProps;fluid=HF(void 0,{transform:QF});onClick=new Ve;onFocus=new Ve;onBlur=new Ve;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=v(se,{optional:true,host:true,skipSelf:true});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case "content":this._contentTemplate=e.template;break;case "icon":this._iconTemplate=e.template;break;case "loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}});}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant==="outlined",text:this.text||this.variant==="text",link:this.link,vertical:(this.iconPos==="top"||this.iconPos==="bottom")&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static \u0275fac=(()=>{let e;return function(n){return (e||(e=ey(t)))(n||t)}})();static \u0275cmp=gE({type:t,selectors:[["p-button"]],contentQueries:function(o,n,a){if(o&1&&Gp(a,Zo,5)(a,Qo,5)(a,Yo,5)(a,Vi$1,4),o&2){let s;lD(s=uD())&&(n.contentTemplate=s.first),lD(s=uD())&&(n.loadingIconTemplate=s.first),lD(s=uD())&&(n.iconTemplate=s.first),lD(s=uD())&&(n.templates=s);}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",QF],raised:[2,"raised","raised",QF],rounded:[2,"rounded","rounded",QF],text:[2,"text","text",QF],plain:[2,"plain","plain",QF],outlined:[2,"outlined","outlined",QF],link:[2,"link","link",QF],tabindex:[2,"tabindex","tabindex",ZF],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",QF],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",QF],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[GD([Nn,{provide:Fn,useExisting:t},{provide:Ie,useExisting:t}]),bE([Qe]),Np],ngContentSelectors:qo,decls:7,vars:17,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt","unstyled",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt","unstyled"]],template:function(o,n){o&1&&(sD(),vi$1(0,"button",0),Up("click",function(s){return n.onClick.emit(s)})("focus",function(s){return n.onFocus.emit(s)})("blur",function(s){return n.onBlur.emit(s)}),aD(1),Sp(2,Wo,1,0,"ng-container",1)(3,ni,3,6,"ng-container",2)(4,si,3,6,"ng-container",2)(5,ri,2,6,"span",3)(6,li,1,4,"p-badge",4),Bc()),o&2&&(ND(n.cn(n.cx("root"),n.styleClass,n.buttonProps==null?null:n.buttonProps.styleClass)),Lp("ngStyle",n.style||(n.buttonProps==null?null:n.buttonProps.style))("disabled",n.disabled||n.loading||(n.buttonProps==null?null:n.buttonProps.disabled))("pAutoFocus",n.autofocus||(n.buttonProps==null?null:n.buttonProps.autofocus))("pBind",n.ptm("root")),Op("type",n.type||(n.buttonProps==null?null:n.buttonProps.type))("aria-label",n.ariaLabel||(n.buttonProps==null?null:n.buttonProps.ariaLabel))("tabindex",n.tabindex||(n.buttonProps==null?null:n.buttonProps.tabindex))("data-p",n.dataP)("data-p-disabled",n.disabled||n.loading||(n.buttonProps==null?null:n.buttonProps.disabled))("data-p-severity",n.severity||(n.buttonProps==null?null:n.buttonProps.severity)),jv(2),Lp("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),jv(),Lp("ngIf",n.loading||(n.buttonProps==null?null:n.buttonProps.loading)),jv(),Lp("ngIf",!(n.loading||n.buttonProps!=null&&n.buttonProps.loading)),jv(),Lp("ngIf",!n.contentTemplate&&!n._contentTemplate&&(n.label||(n.buttonProps==null?null:n.buttonProps.label))),jv(),Lp("ngIf",!n.contentTemplate&&!n._contentTemplate&&(n.badge||(n.buttonProps==null?null:n.buttonProps.badge))));},dependencies:[Gt,Bt$1,kt,Nt$1,Ft,z$1,Cn,An,At,Gi$1,Qe],encapsulation:2})}return t})();var Gn=(()=>{class t extends $e{pFocusTrapDisabled=false;platformId=v(ym);document=v(jo$1);firstHiddenFocusableElement;lastHiddenFocusableElement;onInit(){Pi$1(this.platformId)&&!this.pFocusTrapDisabled&&!this.firstHiddenFocusableElement&&!this.lastHiddenFocusableElement&&this.createHiddenFocusableElements();}onChanges(e){e.pFocusTrapDisabled&&Pi$1(this.platformId)&&(e.pFocusTrapDisabled.currentValue?this.removeHiddenFocusableElements():this.createHiddenFocusableElements());}removeHiddenFocusableElements(){this.firstHiddenFocusableElement&&this.firstHiddenFocusableElement.parentNode&&this.firstHiddenFocusableElement.parentNode.removeChild(this.firstHiddenFocusableElement),this.lastHiddenFocusableElement&&this.lastHiddenFocusableElement.parentNode&&this.lastHiddenFocusableElement.parentNode.removeChild(this.lastHiddenFocusableElement);}getComputedSelector(e){return `:not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])${e??""}`}createHiddenFocusableElements(){let o=n=>Ci$1("span",{class:"p-hidden-accessible p-hidden-focusable",tabindex:"0",role:"presentation","aria-hidden":true,"data-p-hidden-accessible":true,"data-p-hidden-focusable":true,onFocus:n?.bind(this)});this.firstHiddenFocusableElement=o(this.onFirstHiddenElementFocus),this.lastHiddenFocusableElement=o(this.onLastHiddenElementFocus),this.firstHiddenFocusableElement.setAttribute("data-pc-section","firstfocusableelement"),this.lastHiddenFocusableElement.setAttribute("data-pc-section","lastfocusableelement"),this.el.nativeElement.prepend(this.firstHiddenFocusableElement),this.el.nativeElement.append(this.lastHiddenFocusableElement);}onFirstHiddenElementFocus(e){let{currentTarget:o,relatedTarget:n}=e,a=n===this.lastHiddenFocusableElement||!this.el.nativeElement?.contains(n)?wi$1(o.parentElement,":not(.p-hidden-focusable)"):this.lastHiddenFocusableElement;Oi$1(a);}onLastHiddenElementFocus(e){let{currentTarget:o,relatedTarget:n}=e,a=n===this.firstHiddenFocusableElement||!this.el.nativeElement?.contains(n)?Ri$1(o.parentElement,":not(.p-hidden-focusable)"):this.firstHiddenFocusableElement;Oi$1(a);}static \u0275fac=(()=>{let e;return function(n){return (e||(e=ey(t)))(n||t)}})();static \u0275dir=EE({type:t,selectors:[["","pFocusTrap",""]],inputs:{pFocusTrapDisabled:[2,"pFocusTrapDisabled","pFocusTrapDisabled",QF]},features:[Np]})}return t})();var Hn=`
    .p-dialog {
        max-height: 90%;
        transform: scale(1);
        border-radius: dt('dialog.border.radius');
        box-shadow: dt('dialog.shadow');
        background: dt('dialog.background');
        border: 1px solid dt('dialog.border.color');
        color: dt('dialog.color');
        will-change: transform;
    }

    .p-dialog-content {
        overflow-y: auto;
        padding: dt('dialog.content.padding');
        flex-grow: 1;
    }

    .p-dialog-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('dialog.header.padding');
    }

    .p-dialog-title {
        font-weight: dt('dialog.title.font.weight');
        font-size: dt('dialog.title.font.size');
    }

    .p-dialog-footer {
        flex-shrink: 0;
        padding: dt('dialog.footer.padding');
        display: flex;
        justify-content: flex-end;
        gap: dt('dialog.footer.gap');
    }

    .p-dialog-header-actions {
        display: flex;
        align-items: center;
        gap: dt('dialog.header.gap');
    }

    .p-dialog-top .p-dialog,
    .p-dialog-bottom .p-dialog,
    .p-dialog-left .p-dialog,
    .p-dialog-right .p-dialog,
    .p-dialog-topleft .p-dialog,
    .p-dialog-topright .p-dialog,
    .p-dialog-bottomleft .p-dialog,
    .p-dialog-bottomright .p-dialog {
        margin: 1rem;
    }

    .p-dialog-maximized {
        width: 100vw !important;
        height: 100vh !important;
        top: 0px !important;
        left: 0px !important;
        max-height: 100%;
        height: 100%;
        border-radius: 0;
    }

    .p-dialog .p-resizable-handle {
        position: absolute;
        font-size: 0.1px;
        display: block;
        cursor: se-resize;
        width: 12px;
        height: 12px;
        right: 1px;
        bottom: 1px;
    }

    .p-dialog-enter-active {
        animation: p-animate-dialog-enter 300ms cubic-bezier(.19,1,.22,1);
    }

    .p-dialog-leave-active {
        animation: p-animate-dialog-leave 300ms cubic-bezier(.19,1,.22,1);
    }

    @keyframes p-animate-dialog-enter {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-dialog-leave {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`;var ci=["header"],jn=["content"],Un=["footer"],pi=["closeicon"],ui=["maximizeicon"],mi=["minimizeicon"],gi=["headless"],hi=["titlebar"],bi=["*",[["p-footer"]]],fi=["*","p-footer"],_i=t=>({ariaLabelledBy:t});function vi(t,i){t&1&&Vp(0);}function yi(t,i){if(t&1&&(Wc(0),Sp(1,vi,1,0,"ng-container",11),qc()),t&2){let e=oD(3);jv(),Lp("ngTemplateOutlet",e._headlessTemplate||e.headlessTemplate||e.headlessT);}}function Ci(t,i){if(t&1){let e=KE();vi$1(0,"div",16),Up("mousedown",function(n){Tu(e);let a=oD(4);return Cu(a.initResize(n))}),Bc();}if(t&2){let e=oD(4);ND(e.cx("resizeHandle")),eh("z-index",90),Lp("pBind",e.ptm("resizeHandle"));}}function xi(t,i){if(t&1&&(vi$1(0,"span",21),FD(1),Bc()),t&2){let e=oD(5);ND(e.cx("title")),Lp("id",e.ariaLabelledBy)("pBind",e.ptm("title")),jv(),lh(e.header);}}function Ti(t,i){t&1&&Vp(0);}function Ii(t,i){if(t&1&&Pp(0,"span",25),t&2){let e=oD(7);Lp("ngClass",e.maximized?e.minimizeIcon:e.maximizeIcon);}}function wi(t,i){t&1&&(Ou(),Pp(0,"svg",28));}function Si(t,i){t&1&&(Ou(),Pp(0,"svg",29));}function Di(t,i){if(t&1&&(Wc(0),Sp(1,wi,1,0,"svg",26)(2,Si,1,0,"svg",27),qc()),t&2){let e=oD(7);jv(),Lp("ngIf",!e.maximized&&!e._maximizeiconTemplate&&!e.maximizeIconTemplate&&!e.maximizeIconT),jv(),Lp("ngIf",e.maximized&&!e._minimizeiconTemplate&&!e.minimizeIconTemplate&&!e.minimizeIconT);}}function Ei(t,i){}function ki(t,i){t&1&&Sp(0,Ei,0,0,"ng-template");}function Mi(t,i){if(t&1&&(Wc(0),Sp(1,ki,1,0,null,11),qc()),t&2){let e=oD(7);jv(),Lp("ngTemplateOutlet",e._maximizeiconTemplate||e.maximizeIconTemplate||e.maximizeIconT);}}function Oi(t,i){}function Pi(t,i){t&1&&Sp(0,Oi,0,0,"ng-template");}function zi(t,i){if(t&1&&(Wc(0),Sp(1,Pi,1,0,null,11),qc()),t&2){let e=oD(7);jv(),Lp("ngTemplateOutlet",e._minimizeiconTemplate||e.minimizeIconTemplate||e.minimizeIconT);}}function Bi(t,i){if(t&1&&Sp(0,Ii,1,1,"span",23)(1,Di,3,2,"ng-container",24)(2,Mi,2,1,"ng-container",24)(3,zi,2,1,"ng-container",24),t&2){let e=oD(6);Lp("ngIf",e.maximizeIcon&&!e._maximizeiconTemplate&&!e._minimizeiconTemplate),jv(),Lp("ngIf",!e.maximizeIcon&&!(e.maximizeButtonProps!=null&&e.maximizeButtonProps.icon)),jv(),Lp("ngIf",!e.maximized),jv(),Lp("ngIf",e.maximized);}}function Ai(t,i){if(t&1){let e=KE();vi$1(0,"p-button",22),Up("onClick",function(){Tu(e);let n=oD(5);return Cu(n.maximize())})("keydown.enter",function(){Tu(e);let n=oD(5);return Cu(n.maximize())}),Sp(1,Bi,4,4,"ng-template",null,4,eT),Bc();}if(t&2){let e=oD(5);Lp("pt",e.ptm("pcMaximizeButton"))("styleClass",e.cx("pcMaximizeButton"))("ariaLabel",e.maximized?e.minimizeLabel:e.maximizeLabel)("tabindex",e.maximizable?"0":"-1")("buttonProps",e.maximizeButtonProps)("unstyled",e.unstyled()),Op("data-pc-group-section","headericon");}}function Li(t,i){if(t&1&&Pp(0,"span"),t&2){let e=oD(8);ND(e.closeIcon);}}function Ni(t,i){t&1&&(Ou(),Pp(0,"svg",32));}function Fi(t,i){if(t&1&&(Wc(0),Sp(1,Li,1,2,"span",30)(2,Ni,1,0,"svg",31),qc()),t&2){let e=oD(7);jv(),Lp("ngIf",e.closeIcon),jv(),Lp("ngIf",!e.closeIcon);}}function Vi(t,i){}function Ri(t,i){t&1&&Sp(0,Vi,0,0,"ng-template");}function Gi(t,i){if(t&1&&(vi$1(0,"span"),Sp(1,Ri,1,0,null,11),Bc()),t&2){let e=oD(7);jv(),Lp("ngTemplateOutlet",e._closeiconTemplate||e.closeIconTemplate||e.closeIconT);}}function Hi(t,i){if(t&1&&Sp(0,Fi,3,2,"ng-container",24)(1,Gi,2,1,"span",24),t&2){let e=oD(6);Lp("ngIf",!e._closeiconTemplate&&!e.closeIconTemplate&&!e.closeIconT&&!(e.closeButtonProps!=null&&e.closeButtonProps.icon)),jv(),Lp("ngIf",e._closeiconTemplate||e.closeIconTemplate||e.closeIconT);}}function ji(t,i){if(t&1){let e=KE();vi$1(0,"p-button",22),Up("onClick",function(n){Tu(e);let a=oD(5);return Cu(a.close(n))})("keydown.enter",function(n){Tu(e);let a=oD(5);return Cu(a.close(n))}),Sp(1,Hi,2,2,"ng-template",null,4,eT),Bc();}if(t&2){let e=oD(5);Lp("pt",e.ptm("pcCloseButton"))("styleClass",e.cx("pcCloseButton"))("ariaLabel",e.closeAriaLabel)("tabindex",e.closeTabindex)("buttonProps",e.closeButtonProps)("unstyled",e.unstyled()),Op("data-pc-group-section","headericon");}}function Ui(t,i){if(t&1){let e=KE();vi$1(0,"div",16,3),Up("mousedown",function(n){Tu(e);let a=oD(4);return Cu(a.initDrag(n))}),Sp(2,xi,2,5,"span",17)(3,Ti,1,0,"ng-container",18),vi$1(4,"div",19),Sp(5,Ai,3,7,"p-button",20)(6,ji,3,7,"p-button",20),Bc()();}if(t&2){let e=oD(4);ND(e.cx("header")),Lp("pBind",e.ptm("header")),jv(2),Lp("ngIf",!e._headerTemplate&&!e.headerTemplate&&!e.headerT),jv(),Lp("ngTemplateOutlet",e._headerTemplate||e.headerTemplate||e.headerT)("ngTemplateOutletContext",QD(11,_i,e.ariaLabelledBy)),jv(),ND(e.cx("headerActions")),Lp("pBind",e.ptm("headerActions")),jv(),Lp("ngIf",e.maximizable),jv(),Lp("ngIf",e.closable);}}function $i(t,i){t&1&&Vp(0);}function Zi(t,i){t&1&&Vp(0);}function Qi(t,i){if(t&1&&(vi$1(0,"div",19,5),aD(2,1),Sp(3,Zi,1,0,"ng-container",11),Bc()),t&2){let e=oD(4);ND(e.cx("footer")),Lp("pBind",e.ptm("footer")),jv(3),Lp("ngTemplateOutlet",e._footerTemplate||e.footerTemplate||e.footerT);}}function Yi(t,i){if(t&1&&(Sp(0,Ci,1,5,"div",12)(1,Ui,7,13,"div",13),vi$1(2,"div",14,2),aD(4),Sp(5,$i,1,0,"ng-container",11),Bc(),Sp(6,Qi,4,4,"div",15)),t&2){let e=oD(3);Lp("ngIf",e.resizable),jv(),Lp("ngIf",e.showHeader),jv(),ND(e.cn(e.cx("content"),e.contentStyleClass)),Lp("ngStyle",e.contentStyle)("pBind",e.ptm("content")),jv(3),Lp("ngTemplateOutlet",e._contentTemplate||e.contentTemplate||e.contentT),jv(),Lp("ngIf",e._footerTemplate||e.footerTemplate||e.footerT);}}function qi(t,i){if(t&1){let e=KE();vi$1(0,"div",9,0),Up("pMotionOnBeforeEnter",function(n){Tu(e);let a=oD(2);return Cu(a.onBeforeEnter(n))})("pMotionOnAfterEnter",function(n){Tu(e);let a=oD(2);return Cu(a.onAfterEnter(n))})("pMotionOnBeforeLeave",function(n){Tu(e);let a=oD(2);return Cu(a.onBeforeLeave(n))})("pMotionOnAfterLeave",function(n){Tu(e);let a=oD(2);return Cu(a.onAfterLeave(n))}),Sp(2,yi,2,1,"ng-container",10)(3,Yi,7,8,"ng-template",null,1,eT),Bc();}if(t&2){let e=fD(4),o=oD(2);bD(o.sx("root")),ND(o.cn(o.cx("root"),o.styleClass)),Lp("ngStyle",o.style)("pBind",o.ptm("root"))("pFocusTrapDisabled",o.focusTrap===false)("pMotion",o.visible)("pMotionAppear",true)("pMotionName","p-dialog")("pMotionOptions",o.computedMotionOptions()),Op("role",o.role)("aria-labelledby",o.ariaLabelledBy)("aria-modal",true)("data-p",o.dataP),jv(2),Lp("ngIf",o._headlessTemplate||o.headlessTemplate||o.headlessT)("ngIfElse",e);}}function Wi(t,i){if(t&1){let e=KE();vi$1(0,"div",7),Up("pMotionOnAfterLeave",function(){Tu(e);let n=oD();return Cu(n.onMaskAfterLeave())}),BE(1,qi,5,17,"div",8),Bc();}if(t&2){let e=oD();bD(e.sx("mask")),ND(e.cn(e.cx("mask"),e.maskStyleClass)),Lp("ngStyle",e.maskStyle)("pBind",e.ptm("mask"))("pMotion",e.maskVisible)("pMotionAppear",true)("pMotionEnterActiveClass",e.modal?"p-overlay-mask-enter-active":"")("pMotionLeaveActiveClass",e.modal?"p-overlay-mask-leave-active":"")("pMotionOptions",e.computedMaskMotionOptions()),Op("data-p-scrollblocker-active",e.modal||e.blockScroll)("data-p",e.dataP),jv(),$E(e.renderDialog()?1:-1);}}var Xi={mask:({instance:t})=>({position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:t.position==="left"||t.position==="topleft"||t.position==="bottomleft"?"flex-start":t.position==="right"||t.position==="topright"||t.position==="bottomright"?"flex-end":"center",alignItems:t.position==="top"||t.position==="topleft"||t.position==="topright"?"flex-start":t.position==="bottom"||t.position==="bottomleft"||t.position==="bottomright"?"flex-end":"center",pointerEvents:t.modal?"auto":"none"}),root:{display:"flex",flexDirection:"column",pointerEvents:"auto"}},Ki={mask:({instance:t})=>{let e=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(o=>o===t.position);return ["p-dialog-mask",{"p-overlay-mask":t.modal},e?`p-dialog-${e}`:""]},root:({instance:t})=>["p-dialog p-component",{"p-dialog-maximized":t.maximizable&&t.maximized}],header:"p-dialog-header",title:"p-dialog-title",resizeHandle:"p-resizable-handle",headerActions:"p-dialog-header-actions",pcMaximizeButton:"p-dialog-maximize-button",pcCloseButton:"p-dialog-close-button",content:()=>["p-dialog-content"],footer:"p-dialog-footer"},$n=(()=>{class t extends ct{name="dialog";style=Hn;classes=Ki;inlineStyles=Xi;static \u0275fac=(()=>{let e;return function(n){return (e||(e=ey(t)))(n||t)}})();static \u0275prov=te({token:t,factory:t.\u0275fac})}return t})();var Zn=new M("DIALOG_INSTANCE"),Lt=(()=>{class t extends $e{componentName="Dialog";hostName="";$pcDialog=v(Zn,{optional:true,skipSelf:true})??void 0;bindDirectiveInstance=v(Qe,{self:true});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"));}header;draggable=true;resizable=true;contentStyle;contentStyleClass;modal=false;closeOnEscape=true;dismissableMask=false;rtl=false;closable=true;breakpoints;styleClass;maskStyleClass;maskStyle;showHeader=true;blockScroll=false;autoZIndex=true;baseZIndex=0;minX=0;minY=0;focusOnShow=true;maximizable=false;keepInViewport=true;focusTrap=true;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";maskMotionOptions=HF(void 0);computedMaskMotionOptions=oT(()=>D(D({},this.ptm("maskMotion")),this.maskMotionOptions()));motionOptions=HF(void 0);computedMotionOptions=oT(()=>D(D({},this.ptm("motion")),this.motionOptions()));closeIcon;closeAriaLabel;closeTabindex="0";minimizeIcon;maximizeIcon;closeButtonProps={severity:"secondary",variant:"text",rounded:true};maximizeButtonProps={severity:"secondary",variant:"text",rounded:true};get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.maskVisible&&(this.maskVisible=true,this.renderMask.set(true),this.renderDialog.set(true));}get style(){return this._style}set style(e){e&&(this._style=D({},e),this.originalStyle=e);}position;role="dialog";appendTo=HF(void 0);onShow=new Ve;onHide=new Ve;visibleChange=new Ve;onResizeInit=new Ve;onResizeEnd=new Ve;onDragEnd=new Ve;onMaximize=new Ve;headerViewChild;contentViewChild;footerViewChild;headerTemplate;contentTemplate;footerTemplate;closeIconTemplate;maximizeIconTemplate;minimizeIconTemplate;headlessTemplate;_headerTemplate;_contentTemplate;_footerTemplate;_closeiconTemplate;_maximizeiconTemplate;_minimizeiconTemplate;_headlessTemplate;$appendTo=oT(()=>this.appendTo()||this.config.overlayAppendTo());renderMask=Vo$1(false);renderDialog=Vo$1(false);_visible=false;maskVisible;container=Vo$1(null);wrapper;dragging;ariaLabelledBy=this.getAriaLabelledBy();documentDragListener;documentDragEndListener;resizing;documentResizeListener;documentResizeEndListener;documentEscapeListener;maskClickListener;lastPageX;lastPageY;preventVisibleChangePropagation;maximized;preMaximizeContentHeight;preMaximizeContainerWidth;preMaximizeContainerHeight;preMaximizePageX;preMaximizePageY;id=me("pn_id_");_style={};originalStyle;transformOptions="scale(0.7)";styleElement;window;_componentStyle=v($n);headerT;contentT;footerT;closeIconT;maximizeIconT;minimizeIconT;headlessT;zIndexForLayering;get maximizeLabel(){return this.config.getTranslation(Ki$1.ARIA).maximizeLabel}get minimizeLabel(){return this.config.getTranslation(Ki$1.ARIA).minimizeLabel}zone=v(z);overlayService=v(Bi$1);get maskClass(){let o=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(n=>n===this.position);return {"p-dialog-mask":true,"p-overlay-mask":this.modal||this.dismissableMask,[`p-dialog-${o}`]:o}}onInit(){this.breakpoints&&this.createStyle();}templates;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case "header":this.headerT=e.template;break;case "content":this.contentT=e.template;break;case "footer":this.footerT=e.template;break;case "closeicon":this.closeIconT=e.template;break;case "maximizeicon":this.maximizeIconT=e.template;break;case "minimizeicon":this.minimizeIconT=e.template;break;case "headless":this.headlessT=e.template;break;default:this.contentT=e.template;break}});}getAriaLabelledBy(){return this.header!==null?me("pn_id_")+"_header":null}parseDurationToMilliseconds(e){let o=/([\d\.]+)(ms|s)\b/g,n=0,a;for(;(a=o.exec(e))!==null;){let s=parseFloat(a[1]),c=a[2];c==="ms"?n+=s:c==="s"&&(n+=s*1e3);}if(n!==0)return n}_focus(e){if(e){let o=this.parseDurationToMilliseconds(this.transitionOptions),n=Fe.getFocusableElements(e);if(n&&n.length>0)return this.zone.runOutsideAngular(()=>{setTimeout(()=>n[0].focus(),o||5);}),true}return  false}focus(e=this.contentViewChild?.nativeElement){let o=this._focus(e);o||(o=this._focus(this.footerViewChild?.nativeElement),o||(o=this._focus(this.headerViewChild?.nativeElement),o||this._focus(this.contentViewChild?.nativeElement)));}close(e){this.visible=false,this.visibleChange.emit(this.visible),e.preventDefault();}enableModality(){this.closable&&this.dismissableMask&&(this.maskClickListener=this.renderer.listen(this.wrapper,"mousedown",e=>{this.wrapper&&this.wrapper.isSameNode(e.target)&&this.close(e);})),this.modal&&rt();}disableModality(){if(this.wrapper){this.dismissableMask&&this.unbindMaskClickListener();let e=document.querySelectorAll('[data-p-scrollblocker-active="true"]');this.modal&&e&&e.length==1&&lt(),this.cd.destroyed||this.cd.detectChanges();}}maximize(){this.maximized=!this.maximized,!this.modal&&!this.blockScroll&&(this.maximized?rt():lt()),this.onMaximize.emit({maximized:this.maximized});}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null);}moveOnTop(){this.autoZIndex?(Ct.set("modal",this.container(),this.baseZIndex+this.config.zIndex.modal),this.wrapper.style.zIndex=String(parseInt(this.container().style.zIndex,10)-1)):this.zIndexForLayering=Ct.generateZIndex("modal",(this.baseZIndex??0)+this.config.zIndex.modal);}createStyle(){if(Pi$1(this.platformId)&&!this.styleElement&&!this.$unstyled()){this.styleElement=this.renderer.createElement("style"),this.styleElement.type="text/css",Xe(this.styleElement,"nonce",this.config?.csp()?.nonce),this.renderer.appendChild(this.document.head,this.styleElement);let e="";for(let o in this.breakpoints)e+=`
                        @media screen and (max-width: ${o}) {
                            .p-dialog[${this.id}]:not(.p-dialog-maximized) {
                                width: ${this.breakpoints[o]} !important;
                            }
                        }
                    `;this.renderer.setProperty(this.styleElement,"innerHTML",e),Xe(this.styleElement,"nonce",this.config?.csp()?.nonce);}}initDrag(e){e.target.closest("div")?.getAttribute("data-pc-section")!=="headeractions"&&this.draggable&&(this.dragging=true,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container().style.margin="0",this.document.body.setAttribute("data-p-unselectable-text","true"),!this.$unstyled()&&Wt(this.document.body,{"user-select":"none"}));}onDrag(e){if(this.dragging&&this.container()){let o=Ht(this.container()),n=zt$1(this.container()),a=e.pageX-this.lastPageX,s=e.pageY-this.lastPageY,c=this.container().getBoundingClientRect(),g=getComputedStyle(this.container()),$=parseFloat(g.marginLeft),R=parseFloat(g.marginTop),C=c.left+a-$,X=c.top+s-R,Ne=ve$1();this.container().style.position="fixed",this.keepInViewport?(C>=this.minX&&C+o<Ne.width&&(this._style.left=`${C}px`,this.lastPageX=e.pageX,this.container().style.left=`${C}px`),X>=this.minY&&X+n<Ne.height&&(this._style.top=`${X}px`,this.lastPageY=e.pageY,this.container().style.top=`${X}px`)):(this.lastPageX=e.pageX,this.container().style.left=`${C}px`,this.lastPageY=e.pageY,this.container().style.top=`${X}px`),this.overlayService.emitParentDrag(this.container());}}endDrag(e){this.dragging&&(this.dragging=false,this.document.body.removeAttribute("data-p-unselectable-text"),!this.$unstyled()&&(this.document.body.style["user-select"]=""),this.cd.detectChanges(),this.onDragEnd.emit(e));}resetPosition(){this.container().style.position="",this.container().style.left="",this.container().style.top="",this.container().style.margin="";}center(){this.resetPosition();}initResize(e){this.resizable&&(this.resizing=true,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.document.body.setAttribute("data-p-unselectable-text","true"),!this.$unstyled()&&Wt(this.document.body,{"user-select":"none"}),this.onResizeInit.emit(e));}onResize(e){if(this.resizing){let o=e.pageX-this.lastPageX,n=e.pageY-this.lastPageY,a=Ht(this.container()),s=zt$1(this.container()),c=zt$1(this.contentViewChild?.nativeElement),g=a+o,$=s+n,R=this.container().style.minWidth,C=this.container().style.minHeight,X=this.container().getBoundingClientRect(),Ne=ve$1();(!parseInt(this.container().style.top)||!parseInt(this.container().style.left))&&(g+=o,$+=n),(!R||g>parseInt(R))&&X.left+g<Ne.width&&(this._style.width=g+"px",this.container().style.width=this._style.width),(!C||$>parseInt(C))&&X.top+$<Ne.height&&(this.contentViewChild.nativeElement.style.height=c+$-s+"px",this._style.height&&(this._style.height=$+"px",this.container().style.height=this._style.height)),this.lastPageX=e.pageX,this.lastPageY=e.pageY;}}resizeEnd(e){this.resizing&&(this.resizing=false,this.document.body.removeAttribute("data-p-unselectable-text"),!this.$unstyled()&&(this.document.body.style["user-select"]=""),this.onResizeEnd.emit(e));}bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.resizable&&this.bindDocumentResizeListeners(),this.closeOnEscape&&this.closable&&this.bindDocumentEscapeListener();}unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentResizeListeners(),this.unbindDocumentEscapeListener();}bindDocumentDragListener(){this.documentDragListener||this.zone.runOutsideAngular(()=>{this.documentDragListener=this.renderer.listen(this.document.defaultView,"mousemove",this.onDrag.bind(this));});}unbindDocumentDragListener(){this.documentDragListener&&(this.documentDragListener(),this.documentDragListener=null);}bindDocumentDragEndListener(){this.documentDragEndListener||this.zone.runOutsideAngular(()=>{this.documentDragEndListener=this.renderer.listen(this.document.defaultView,"mouseup",this.endDrag.bind(this));});}unbindDocumentDragEndListener(){this.documentDragEndListener&&(this.documentDragEndListener(),this.documentDragEndListener=null);}bindDocumentResizeListeners(){!this.documentResizeListener&&!this.documentResizeEndListener&&this.zone.runOutsideAngular(()=>{this.documentResizeListener=this.renderer.listen(this.document.defaultView,"mousemove",this.onResize.bind(this)),this.documentResizeEndListener=this.renderer.listen(this.document.defaultView,"mouseup",this.resizeEnd.bind(this));});}unbindDocumentResizeListeners(){this.documentResizeListener&&this.documentResizeEndListener&&(this.documentResizeListener(),this.documentResizeEndListener(),this.documentResizeListener=null,this.documentResizeEndListener=null);}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentEscapeListener=this.renderer.listen(e,"keydown",o=>{if(o.key=="Escape"){let n=this.container();if(!n)return;let a=Ct.getCurrent();(parseInt(n.style.zIndex)==a||this.zIndexForLayering==a)&&this.close(o);}});}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null);}appendContainer(){this.$appendTo()!=="self"&&Ei$1(this.document.body,this.wrapper);}restoreAppend(){this.container()&&this.$appendTo()!=="self"&&this.renderer.appendChild(this.el.nativeElement,this.wrapper);}onBeforeEnter(e){this.container.set(e.element),this.wrapper=this.container()?.parentElement,this.$attrSelector&&this.container()?.setAttribute(this.$attrSelector,""),this.appendContainer(),this.moveOnTop(),this.bindGlobalListeners(),this.container()?.setAttribute(this.id,""),this.modal&&this.enableModality();}onAfterEnter(){this.focusOnShow&&this.focus(),this.onShow.emit({});}onBeforeLeave(){this.modal&&(this.maskVisible=false);}onAfterLeave(){this.onContainerDestroy(),this.renderDialog.set(false),this.modal?this.renderMask.set(false):this.maskVisible=false,this.onHide.emit({}),this.cd.markForCheck();}onMaskAfterLeave(){this.renderDialog()||this.renderMask.set(false);}onContainerDestroy(){this.unbindGlobalListeners(),this.dragging=false,this.maximized&&(Ke(this.document.body,"p-overflow-hidden"),this.document.body.style.removeProperty("--scrollbar-width"),this.maximized=false),this.modal&&this.disableModality(),Dt(this.document.body,"p-overflow-hidden")&&Ke(this.document.body,"p-overflow-hidden"),this.container()&&this.autoZIndex&&Ct.clear(this.container()),this.zIndexForLayering&&Ct.revertZIndex(this.zIndexForLayering),this.container.set(null),this.wrapper=null,this._style=this.originalStyle?D({},this.originalStyle):{};}destroyStyle(){this.styleElement&&(this.renderer.removeChild(this.document.head,this.styleElement),this.styleElement=null);}onDestroy(){this.container()&&(this.restoreAppend(),this.onContainerDestroy()),this.destroyStyle();}get dataP(){return this.cn({maximized:this.maximized,modal:this.modal})}static \u0275fac=(()=>{let e;return function(n){return (e||(e=ey(t)))(n||t)}})();static \u0275cmp=gE({type:t,selectors:[["p-dialog"]],contentQueries:function(o,n,a){if(o&1&&Gp(a,ci,4)(a,jn,4)(a,Un,4)(a,pi,4)(a,ui,4)(a,mi,4)(a,gi,4)(a,Vi$1,4),o&2){let s;lD(s=uD())&&(n._headerTemplate=s.first),lD(s=uD())&&(n._contentTemplate=s.first),lD(s=uD())&&(n._footerTemplate=s.first),lD(s=uD())&&(n._closeiconTemplate=s.first),lD(s=uD())&&(n._maximizeiconTemplate=s.first),lD(s=uD())&&(n._minimizeiconTemplate=s.first),lD(s=uD())&&(n._headlessTemplate=s.first),lD(s=uD())&&(n.templates=s);}},viewQuery:function(o,n){if(o&1&&zp(hi,5)(jn,5)(Un,5),o&2){let a;lD(a=uD())&&(n.headerViewChild=a.first),lD(a=uD())&&(n.contentViewChild=a.first),lD(a=uD())&&(n.footerViewChild=a.first);}},inputs:{hostName:"hostName",header:"header",draggable:[2,"draggable","draggable",QF],resizable:[2,"resizable","resizable",QF],contentStyle:"contentStyle",contentStyleClass:"contentStyleClass",modal:[2,"modal","modal",QF],closeOnEscape:[2,"closeOnEscape","closeOnEscape",QF],dismissableMask:[2,"dismissableMask","dismissableMask",QF],rtl:[2,"rtl","rtl",QF],closable:[2,"closable","closable",QF],breakpoints:"breakpoints",styleClass:"styleClass",maskStyleClass:"maskStyleClass",maskStyle:"maskStyle",showHeader:[2,"showHeader","showHeader",QF],blockScroll:[2,"blockScroll","blockScroll",QF],autoZIndex:[2,"autoZIndex","autoZIndex",QF],baseZIndex:[2,"baseZIndex","baseZIndex",ZF],minX:[2,"minX","minX",ZF],minY:[2,"minY","minY",ZF],focusOnShow:[2,"focusOnShow","focusOnShow",QF],maximizable:[2,"maximizable","maximizable",QF],keepInViewport:[2,"keepInViewport","keepInViewport",QF],focusTrap:[2,"focusTrap","focusTrap",QF],transitionOptions:"transitionOptions",maskMotionOptions:[1,"maskMotionOptions"],motionOptions:[1,"motionOptions"],closeIcon:"closeIcon",closeAriaLabel:"closeAriaLabel",closeTabindex:"closeTabindex",minimizeIcon:"minimizeIcon",maximizeIcon:"maximizeIcon",closeButtonProps:"closeButtonProps",maximizeButtonProps:"maximizeButtonProps",visible:"visible",style:"style",position:"position",role:"role",appendTo:[1,"appendTo"],headerTemplate:[0,"content","headerTemplate"],contentTemplate:"contentTemplate",footerTemplate:"footerTemplate",closeIconTemplate:"closeIconTemplate",maximizeIconTemplate:"maximizeIconTemplate",minimizeIconTemplate:"minimizeIconTemplate",headlessTemplate:"headlessTemplate"},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange",onResizeInit:"onResizeInit",onResizeEnd:"onResizeEnd",onDragEnd:"onDragEnd",onMaximize:"onMaximize"},features:[GD([$n,{provide:Zn,useExisting:t},{provide:Ie,useExisting:t}]),bE([Qe]),Np],ngContentSelectors:fi,decls:1,vars:1,consts:[["container",""],["notHeadless",""],["content",""],["titlebar",""],["icon",""],["footer",""],[3,"class","style","ngStyle","pBind","pMotion","pMotionAppear","pMotionEnterActiveClass","pMotionLeaveActiveClass","pMotionOptions"],[3,"pMotionOnAfterLeave","ngStyle","pBind","pMotion","pMotionAppear","pMotionEnterActiveClass","pMotionLeaveActiveClass","pMotionOptions"],["pFocusTrap","",3,"class","style","ngStyle","pBind","pFocusTrapDisabled","pMotion","pMotionAppear","pMotionName","pMotionOptions"],["pFocusTrap","",3,"pMotionOnBeforeEnter","pMotionOnAfterEnter","pMotionOnBeforeLeave","pMotionOnAfterLeave","ngStyle","pBind","pFocusTrapDisabled","pMotion","pMotionAppear","pMotionName","pMotionOptions"],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet"],[3,"class","pBind","z-index","mousedown",4,"ngIf"],[3,"class","pBind","mousedown",4,"ngIf"],[3,"ngStyle","pBind"],[3,"class","pBind",4,"ngIf"],[3,"mousedown","pBind"],[3,"id","class","pBind",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"pBind"],[3,"pt","styleClass","ariaLabel","tabindex","buttonProps","unstyled","onClick","keydown.enter",4,"ngIf"],[3,"id","pBind"],[3,"onClick","keydown.enter","pt","styleClass","ariaLabel","tabindex","buttonProps","unstyled"],[3,"ngClass",4,"ngIf"],[4,"ngIf"],[3,"ngClass"],["data-p-icon","window-maximize",4,"ngIf"],["data-p-icon","window-minimize",4,"ngIf"],["data-p-icon","window-maximize"],["data-p-icon","window-minimize"],[3,"class",4,"ngIf"],["data-p-icon","times",4,"ngIf"],["data-p-icon","times"]],template:function(o,n){o&1&&(sD(bi),BE(0,Wi,2,14,"div",6)),o&2&&$E(n.renderMask()?0:-1);},dependencies:[Gt,Pt,Bt$1,kt,Nt$1,Rn,Gn,P,Tn,In,Gi$1,Qe,mt$1,vt],encapsulation:2})}return t})(),Qn=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=yE({type:t});static \u0275inj=Jl({imports:[Lt,Gi$1,Gi$1]})}return t})();var Yn=new M("WindowToken",typeof window<"u"&&window.document?{providedIn:"root",factory:()=>window}:{providedIn:"root",factory:()=>{}});var qn=(()=>{class t{constructor(e,o,n){this.ngZone=e,this.document=o,this.window=n,this.copySubject=new oe,this.copyResponse$=this.copySubject.asObservable(),this.config={};}configure(e){this.config=e;}copy(e){if(!this.isSupported||!e)return this.pushCopyResponse({isSuccess:false,content:e});let o=this.copyFromContent(e);return o?this.pushCopyResponse({content:e,isSuccess:o}):this.pushCopyResponse({isSuccess:false,content:e})}get isSupported(){return !!this.document.queryCommandSupported&&!!this.document.queryCommandSupported("copy")&&!!this.window}isTargetValid(e){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){if(e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');return  true}throw new Error("Target should be input or textarea")}copyFromInputElement(e,o=true){try{this.selectTarget(e);let n=this.copyText();return this.clearSelection(o?e:void 0,this.window),n&&this.isCopySuccessInIE11()}catch(n){return  false}}isCopySuccessInIE11(){let e=this.window.clipboardData;return !(e&&e.getData&&!e.getData("Text"))}copyFromContent(e,o=this.document.body){if(this.tempTextArea&&!o.contains(this.tempTextArea)&&this.destroy(this.tempTextArea.parentElement||void 0),!this.tempTextArea){this.tempTextArea=this.createTempTextArea(this.document,this.window);try{o.appendChild(this.tempTextArea);}catch(a){throw new Error("Container should be a Dom element")}}this.tempTextArea.value=e;let n=this.copyFromInputElement(this.tempTextArea,false);return this.config.cleanUpAfterCopy&&this.destroy(this.tempTextArea.parentElement||void 0),n}destroy(e=this.document.body){this.tempTextArea&&(e.removeChild(this.tempTextArea),this.tempTextArea=void 0);}selectTarget(e){return e.select(),e.setSelectionRange(0,e.value.length),e.value.length}copyText(){return this.document.execCommand("copy")}clearSelection(e,o){e&&e.focus(),o.getSelection()?.removeAllRanges();}createTempTextArea(e,o){let n=e.documentElement.getAttribute("dir")==="rtl",a;a=e.createElement("textarea"),a.style.fontSize="12pt",a.style.border="0",a.style.padding="0",a.style.margin="0",a.style.position="absolute",a.style[n?"right":"left"]="-9999px";let s=o.pageYOffset||e.documentElement.scrollTop;return a.style.top=s+"px",a.setAttribute("readonly",""),a}pushCopyResponse(e){this.copySubject.observers.length>0&&this.ngZone.run(()=>{this.copySubject.next(e);});}pushCopyReponse(e){this.pushCopyResponse(e);}}return t.\u0275fac=function(e){return new(e||t)(_e(z),_e(jo$1),_e(Yn,8))},t.\u0275prov=te({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var Wn=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=yE({type:t}),t.\u0275inj=Jl({imports:[Gt]}),t})();var ta=["arithmeticOperations"];function na(t,i){if(t&1&&(vi$1(0,"li",13),FD(1),Bc()),t&2){let e=i.$implicit;jv(),zc(" ",e," ");}}function oa(t,i){if(t&1&&(vi$1(0,"li",13),FD(1),Bc()),t&2){let e=i.$implicit;jv(),zc(" ",e," ");}}var ld=(()=>{class t{constructor(e,o,n,a,s){this.messageService=e,this.cookieService=o,this.clipboardService=n,this.numbersFirestoreService=a,this.stageCommunicationService=s,this.arithmeticComponent=$F.required("arithmeticOperations"),this.COOKIE_LK_DIGITS="CookieLKNumbers",this.generateGameParameters=new ut,this.currentDate=new Date,this.stageLevels=[],this.gameParameters=[],this.stageIndex=0,this.firestorePuzzleDataItems=[],this.todayPuzzleDataItems=[],this.splashVisible=false,this.gameCompletedModalMessages=[],this.gameCompletedModalVisible=false,this.allGameCompletedModalMessage=[],this.allGameCompletedModalVisible=false,this.splashWidth="80vw",this.destroyRef=v(Ge$1),this.injector=v(ve),this.defaultGameParameters={result:0,operands:[],stageIndex:0},this.updateStageLevel=this.stageCommunicationService.getUpdatedStageLevel().pipe(O(this.destroyRef)).subscribe({next:c=>{console.log("StageLevel updated "+c.index);},error:c=>console.error("StageLevel updated "+c),complete:()=>console.info("StageLevel updated Complete")});}initializeStageLevels(){this.stageLevels=new Array({selected:true,index:0,value:96,completed:false,summary:""},{selected:false,index:1,value:161,completed:false,summary:""},{selected:false,index:2,value:275,completed:false,summary:""},{selected:false,index:3,value:355,completed:false,summary:""},{selected:false,index:4,value:404,completed:false,summary:""});}stageToCompleted(){this.stageLevels[this.stageIndex].completed=true,this.stageLevels[this.stageIndex].selected=false;}formatOperations(e){let o=`Completed! Executed Operations:
`,n=e.size()-1;for(;n>=0;){let a=e.peekBy(n);o+=n+1+". "+a?.operands[0]+" "+a?.operator+" "+a?.operands[1]+" = "+a?.result+`
`,--n;}return o}createSummaryOfTHeOperations(e,o){let n=this.stageLevels[e].value+" -> ";for(this.gameCompletedModalMessages=[];o.size()>0;){let a=o.pop();this.gameCompletedModalMessages.push(a?.operands[0]+" "+a.operator+" "+a?.operands[1]+" = "+a?.result),n+=""+a?.operator;}return n+=`
`,n}showSuccessMessage(e){this.messageService.add({severity:"success",summary:"Congratulation!",detail:e});}showErrorMessage(e){this.messageService.add({severity:"error",summary:"Error!",detail:e});}setupStages(){let e=0;this.gameParameters.forEach(o=>{this.stageLevels[e].value=o.result,++e;});}storeGameStateToCookie(){let e=new je;e.storeDate=new Date,e.stageIndex=this.stageIndex,e.stageLevels=this.stageLevels,e.completed=this.allGameCompleted()&&this.stageIndex===this.stageLevels.length-1,e.gameParameters=this.gameParameters;let o=e.cookieData2Text(),n=new Date;n.setHours(23,59,59,999),this.cookieService.set(this.COOKIE_LK_DIGITS,o,n);}restoreGameStateFromCookie(){let e=this.cookieService.get(this.COOKIE_LK_DIGITS),o;return !e||e==""?(console.log("INFO: Unable to retrieve the Game State"),o=null):(o=new je,o=o.text2CookieData(e)),o}mapPuzzleDataToGameParameters(e){e.stages.forEach(o=>{let n=this.gameParameters.find(a=>a.stageIndex===o.stageIndex);if(n){n.result=o.expectedValue;let a=0;n.operands.forEach(c=>{c.value=o.operands[a],a++;}),this.initializeStageLevels();let s=this.stageLevels.find(c=>c.index===o.stageIndex);s&&s.value==o.expectedValue;}});}mapGameParametersToPuzzleData(e){let o=new gt;return o.day=new Date,o.day.setHours(23,59,59,999),e.forEach(n=>{let a=new ht;a.stageIndex=n.stageIndex,a.expectedValue=n.result;let s=new Array;n.operands.forEach(c=>{s.push(c.value);}),a.operands=s,o.stages.push(a);}),o}isDateSame(e,o){return e.getFullYear()===o.getFullYear()&&e.getMonth()===o.getMonth()&&e.getDate()===o.getDate()}normalizeLocaleTag(e){return e.trim().toLowerCase()}findExistingPuzzleDocForLocale(e,o){if(e.length===0)return;let n=this.normalizeLocaleTag(o),a=e.find(c=>this.normalizeLocaleTag(c.locale)===n);if(a)return a;let s=n.split("-")[0]??n;return e.find(c=>{let g=this.normalizeLocaleTag(c.locale).split("-");return g.length===1&&g[0]===s})}loadFirestorePuzzleItemsOnce(){return wo$1(this.injector,()=>Yh(this.numbersFirestoreService.getAll().get().pipe(be(e=>e.docs.map(o=>{let n=o.data();return {id:o.id,locale:n.locale,data:n.data}})))))}updatePuzzleDataInDb(e){this.firestorePuzzleData.data=JSON.stringify(e),this.numbersFirestoreService.update(this.firestorePuzzleData.id,{data:this.firestorePuzzleData.data}).then(()=>console.log("INFO: The Game Data was updated successfully in DB!")).catch(o=>console.log(o));}createPuzzleDataInDb(e){this.numbersFirestoreService.create(e).then(()=>{console.log("INFO: The Puzzle Data was created successfully in DB!");});}upsertGameDataInDb(e){this.loadFirestorePuzzleItemsOnce().then(o=>{this.firestorePuzzleDataItems=o;let n=this.findExistingPuzzleDocForLocale(o,navigator.language);if(n)this.firestorePuzzleData=n,this.updatePuzzleDataInDb(e);else {let a=new Ue;a.locale=navigator.language,a.data=JSON.stringify(e),this.createPuzzleDataInDb(a);}}).catch(o=>console.log(o));}allGameCompleted(){let e=true;return this.stageLevels.forEach(o=>{e=e&&o.completed;}),e}collectAllOperations(){let e=this.allGameCompleted()&&this.stageIndex===this.stageLevels.length-1;if(e){let o=`Genius!
`;this.allGameCompletedModalMessage=[],this.stageLevels.forEach(n=>{o+=n.summary,this.allGameCompletedModalMessage.push(n.summary);}),this.clipboardService.copy(o),this.storeGameStateToCookie(),this.allGameCompletedModalVisible=true;}return e}generateNewGameAndStore(){this.gameParameters=this.generateGameParameters.generateStageNumbers(),this.storeGameStateToCookie(),this.setupStages();let e=this.mapGameParametersToPuzzleData(this.gameParameters);this.upsertGameDataInDb(e);}ngOnInit(){console.log(`Browser locale: ${navigator.language}`),this.initializeStageLevels();let e=this.restoreGameStateFromCookie();if(e){console.log("INFO: Game state restored from cookie");let o=new Date(e.storeDate);if(this.isDateSame(o,new Date))this.stageIndex=e.stageIndex,this.stageLevels=e.stageLevels,this.gameParameters=e.gameParameters,this.setupStages(),e.completed?this.collectAllOperations()&&console.log("INFO: All Games completed show completed modal"):(console.log("INFO: All Games incomplete show splash"),this.splashVisible=true);else {this.gameParameters=this.generateGameParameters.generateStageNumbers(),this.storeGameStateToCookie(),this.setupStages();let n=this.mapGameParametersToPuzzleData(this.gameParameters);console.log("INFO: Date mismatch which restored from cookie "+n),this.upsertGameDataInDb(n);}}else {console.log("INFO: No game state in cookie, try to get if from DB."),this.gameParameters=this.generateGameParameters.generateStageNumbers();let o=navigator.language;wo$1(this.injector,()=>{this.numbersFirestoreService.getAll().snapshotChanges().pipe(be(n=>n.map(a=>D({id:a.payload.doc.id},a.payload.doc.data())))).subscribe(n=>{this.firestorePuzzleDataItems=n;let a=this.findExistingPuzzleDocForLocale(n,o);if(a){this.firestorePuzzleData=a,this.todayPuzzleData=JSON.parse(this.firestorePuzzleData.data),console.log("INFO: Game Data retrieved from DB.");let s=new Date,c=new Date(this.todayPuzzleData.day);if(this.todayPuzzleData.day&&this.isDateSame(c,s))console.log("INFO: Game Data day date is matched, apply Game data"),this.mapPuzzleDataToGameParameters(this.todayPuzzleData),this.storeGameStateToCookie(),this.setupStages();else {console.log("INFO: Game Data day of date is Not matched, generate new game parameters"),this.gameParameters=this.generateGameParameters.generateStageNumbers(),this.storeGameStateToCookie(),this.setupStages();let g=this.mapGameParametersToPuzzleData(this.gameParameters);this.upsertGameDataInDb(g);}}else {console.log("INFO: Game Data not found in the DB. by locale"),this.gameParameters=this.generateGameParameters.generateStageNumbers(),this.storeGameStateToCookie(),this.setupStages();let s=this.mapGameParametersToPuzzleData(this.gameParameters),c=new Ue;c.locale=navigator.language,c.data=JSON.stringify(s),this.createPuzzleDataInDb(c);}});});}}ngOnDestroy(){this.updateStageLevel.unsubscribe();}expectedResultReached(e){let o=this.formatOperations(e),n=this.createSummaryOfTHeOperations(this.stageIndex,e);this.stageLevels[this.stageIndex].summary=n,this.clipboardService.copy(o),this.showSuccessMessage("You are reach the expected result!"),this.stageToCompleted(),this.reachedValue=this.gameParameters[this.stageIndex].result,this.gameCompletedModalVisible=true;}hideGameCompletedDialog(){this.collectAllOperations()||(this.stageIndex++,this.stageLevels[this.stageIndex].selected=true),this.storeGameStateToCookie(),this.arithmeticComponent().clearHistory();}invalidOperationExecuted(e){this.showErrorMessage("Invalid Operation Executed!"),this.arithmeticComponent().revertLastOperation(),console.log(e);}onDeleteCookie(){this.cookieService.deleteAll(),console.log("INFO: All cookies deleted");}onUpdatePuzzleData(){this.generateNewGameAndStore();}static{this.\u0275fac=function(o){return new(o||t)(Tr(Ui$1),Tr(mt),Tr(qn),Tr(II),Tr(ft))};}static{this.\u0275cmp=gE({type:t,selectors:[["app-digits-game"]],viewQuery:function(o,n){o&1&&Zp(n.arithmeticComponent,ta,5),o&2&&dD();},features:[GD([Ui$1,mt])],decls:31,vars:14,consts:[["arithmeticOperations",""],[1,"digits-game-layout"],["position","top-center","closable","true"],[1,"digits-game-title"],["href","https://www.nytimes.com/games/digits",1,"anchor-underline-off"],[1,"title-bar"],[1,"title-bar-name",3,"click"],[1,"title-bar-date",3,"click"],[1,"tool-bar"],[3,"stageLevels"],[3,"expectedResultReached","invalidOperationExecuted","gameParameters"],["id","splashscreen","header","Welcome to the Numbers Puzzle Game",3,"visibleChange","visible","modal"],["id","gameCompleted","header","Game Completed",3,"visibleChange","onHide","visible","modal"],[1,"li-no-bullet"],["id","allGamesCompleted","header","All Game Completed Genius!",3,"visibleChange","visible","modal","closable"]],template:function(o,n){if(o&1){let a=KE();vi$1(0,"div",1),Pp(1,"p-toast",2),vi$1(2,"div",3),FD(3," This is a daily numbers puzzle, similar to the "),vi$1(4,"a",4),FD(5,"NY Times Digits"),Bc(),FD(6,", which unfortunately discontinued at August 8, 2023 "),Bc(),vi$1(7,"div",5)(8,"div",6),Up("click",function(){return n.onDeleteCookie()}),FD(9," Numbers "),Bc(),vi$1(10,"div",7),Up("click",function(){return n.onUpdatePuzzleData()}),FD(11),YD(12,"date"),Bc()(),vi$1(13,"div",8),Pp(14,"app-game-stage-levels",9),Bc(),vi$1(15,"div")(16,"app-game-arithmetic-operations",10,0),Up("expectedResultReached",function(c){return n.expectedResultReached(c)})("invalidOperationExecuted",function(c){return n.invalidOperationExecuted(c)}),Bc()()(),vi$1(18,"p-dialog",11),dh("visibleChange",function(c){return Tu(a),BD(n.splashVisible,c)||(n.splashVisible=c),Cu(c)}),vi$1(19,"p"),FD(20,"It can improves your arithmetic combination ability."),Bc()(),vi$1(21,"p-dialog",12),dh("visibleChange",function(c){return Tu(a),BD(n.gameCompletedModalVisible,c)||(n.gameCompletedModalVisible=c),Cu(c)}),Up("onHide",function(){return n.hideGameCompletedDialog()}),vi$1(22,"div"),FD(23),WE(24,na,2,1,"li",13,UE),Bc()(),vi$1(26,"p-dialog",14),dh("visibleChange",function(c){return Tu(a),BD(n.allGameCompletedModalVisible,c)||(n.allGameCompletedModalVisible=c),Cu(c)}),vi$1(27,"div"),FD(28," Congratulation! Your Solutions: "),WE(29,oa,2,1,"li",13,UE),Bc()();}o&2&&(jv(11),zc(" ",XD(12,11,n.currentDate,"MM/dd/yyyy")," "),jv(3),Lp("stageLevels",n.stageLevels),jv(2),Lp("gameParameters",n.gameParameters[n.stageIndex]??n.defaultGameParameters),jv(2),uh("visible",n.splashVisible),Lp("modal",true),jv(3),uh("visible",n.gameCompletedModalVisible),Lp("modal",true),jv(2),zc(" Target ",n.reachedValue,". Your solution: "),jv(),qE(n.gameCompletedModalMessages),jv(2),uh("visible",n.allGameCompletedModalVisible),Lp("modal",true)("closable",false),jv(3),qE(n.allGameCompletedModalMessage));},dependencies:[En,Bt,On,fn,Qn,Lt,Wn,zt],styles:[".digit-font-settings[_ngcontent-%COMP%], .digits-game-layout[_ngcontent-%COMP%]   .warning-message[_ngcontent-%COMP%], .digits-game-layout[_ngcontent-%COMP%]   .tool-bar[_ngcontent-%COMP%]{font-size:17px;font-weight:500;line-height:17px;font-family:Courier New,Courier,monospace;letter-spacing:.03em}.digits-border-horizontal[_ngcontent-%COMP%], .digits-game-layout[_ngcontent-%COMP%]   .digits-game-title[_ngcontent-%COMP%], .digits-game-layout[_ngcontent-%COMP%]   .warning-message[_ngcontent-%COMP%]{border-bottom:1px solid #d4d4d4;padding:12px 0}.digits-game-layout[_ngcontent-%COMP%]{height:98vh;width:50vw;position:absolute;inset:0;margin:auto;background:#ebf9fd40;border:1px solid lightgray}.digits-game-layout[_ngcontent-%COMP%]   .digits-game-title[_ngcontent-%COMP%]{text-align:center}.digits-game-layout[_ngcontent-%COMP%]   .anchor-underline-off[_ngcontent-%COMP%]{text-decoration:none}.digits-game-layout[_ngcontent-%COMP%]   .warning-message[_ngcontent-%COMP%]{font-weight:500;font-size:17px;text-align:center;color:orange}.digits-game-layout[_ngcontent-%COMP%]   .title-bar[_ngcontent-%COMP%]{padding:6px 0;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-around;align-content:stretch;align-items:center;font-size:28px;font-weight:300;font-family:Arial,Helvetica,sans-serif}.digits-game-layout[_ngcontent-%COMP%]   .title-bar[_ngcontent-%COMP%]   .title-bar-name[_ngcontent-%COMP%], .digits-game-layout[_ngcontent-%COMP%]   .title-bar[_ngcontent-%COMP%]   .title-bar-date[_ngcontent-%COMP%]{order:0;flex:0 1 auto;align-self:auto;cursor:default}.digits-game-layout[_ngcontent-%COMP%]   .tool-bar[_ngcontent-%COMP%]{height:52px}@media only screen and (max-width:600px){.digits-game-layout[_ngcontent-%COMP%]{height:90vh;width:99vw}.digits-game-layout[_ngcontent-%COMP%]     .p-dialog{width:80vw}}@media only screen and (min-width:601px){  .p-dialog{width:20vw}.digits-game-layout[_ngcontent-%COMP%]{position:absolute;inset:0;margin:auto}}@media only screen and (max-width:600px){  .p-dialog{width:80vw}}  .p-dialog{border:2px solid;border-radius:25px;border-color:#00bfff}  .p-dialog .p-dialog-header{background-color:#f0f8ff;background-image:none;border-top-right-radius:25px;border-top-left-radius:25px}  .p-dialog .p-dialog-content:last-of-type{background-color:#f0f8ff;background-image:none;border-bottom-right-radius:25px;border-bottom-left-radius:25px}  li.li-no-bullet{list-style-position:revert;list-style-image:initial;list-style-type:decimal-leading-zero}"],changeDetection:1});}}return t})();
export{ld as DigitsGameComponent};