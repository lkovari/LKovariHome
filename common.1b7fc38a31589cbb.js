"use strict";(self.webpackChunkLKovariHome=self.webpackChunkLKovariHome||[]).push([[592],{2132:(g,u,r)=>{r.d(u,{q:()=>o});var s=r(1180),t=r(2223),p=r(7594);let o=(()=>{class l extends p.s{}return(0,s.Z)(l,"\u0275fac",function(){let d;return function(n){return(d||(d=t.n5z(l)))(n||l)}}()),(0,s.Z)(l,"\u0275cmp",t.Xpm({type:l,selectors:[["TimesIcon"]],standalone:!0,features:[t.qOj,t.jDz],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(h,n){1&h&&(t.O4$(),t.TgZ(0,"svg",0),t._UZ(1,"path",1),t.qZA()),2&h&&(t.Tol(n.getClassNames()),t.uIk("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})),l})()},568:(g,u,r)=>{r.d(u,{H:()=>d,T:()=>h});var s=r(1180),t=r(2223),p=r(4755),o=r(880),l=r(387);let d=(()=>{class n{constructor(e,i,m,c,f,a){(0,s.Z)(this,"document",void 0),(0,s.Z)(this,"platformId",void 0),(0,s.Z)(this,"renderer",void 0),(0,s.Z)(this,"el",void 0),(0,s.Z)(this,"zone",void 0),(0,s.Z)(this,"config",void 0),(0,s.Z)(this,"animationListener",void 0),(0,s.Z)(this,"mouseDownListener",void 0),(0,s.Z)(this,"timeout",void 0),this.document=e,this.platformId=i,this.renderer=m,this.el=c,this.zone=f,this.config=a}ngAfterViewInit(){(0,p.NF)(this.platformId)&&this.config&&this.config.ripple&&this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))})}onMouseDown(e){let i=this.getInk();if(!i||"none"===this.document.defaultView.getComputedStyle(i,null).display)return;if(o.p.removeClass(i,"p-ink-active"),!o.p.getHeight(i)&&!o.p.getWidth(i)){let a=Math.max(o.p.getOuterWidth(this.el.nativeElement),o.p.getOuterHeight(this.el.nativeElement));i.style.height=a+"px",i.style.width=a+"px"}let m=o.p.getOffset(this.el.nativeElement),c=e.pageX-m.left+this.document.body.scrollTop-o.p.getWidth(i)/2,f=e.pageY-m.top+this.document.body.scrollLeft-o.p.getHeight(i)/2;this.renderer.setStyle(i,"top",f+"px"),this.renderer.setStyle(i,"left",c+"px"),o.p.addClass(i,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&o.p.removeClass(a,"p-ink-active")},401)}getInk(){const e=this.el.nativeElement.children;for(let i=0;i<e.length;i++)if("string"==typeof e[i].className&&-1!==e[i].className.indexOf("p-ink"))return e[i];return null}resetInk(){let e=this.getInk();e&&o.p.removeClass(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),o.p.removeClass(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener(),this.animationListener(),this.mouseDownListener=null,this.animationListener=null,o.p.removeElement(e))}ngOnDestroy(){this.config&&this.config.ripple&&this.remove()}}return(0,s.Z)(n,"\u0275fac",function(e){return new(e||n)(t.Y36(p.K0),t.Y36(t.Lbi),t.Y36(t.Qsj),t.Y36(t.SBq),t.Y36(t.R0b),t.Y36(l.b4,8))}),(0,s.Z)(n,"\u0275dir",t.lG2({type:n,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple","p-element"]})),n})(),h=(()=>{class n{}return(0,s.Z)(n,"\u0275fac",function(e){return new(e||n)}),(0,s.Z)(n,"\u0275mod",t.oAB({type:n})),(0,s.Z)(n,"\u0275inj",t.cJS({imports:[p.ez]})),n})()}}]);