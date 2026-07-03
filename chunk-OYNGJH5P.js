import{Cd as I,Dc as g,Fd as L,Hc as k,Jc as r,K as p,L as d,P as o,Sb as v,Tc as b,Ua as m,Va as f,Ya as y,aa as c,cd as a,ed as D,fd as w,ga as u,gd as l,ja as h,kd as A}from"./chunk-UAMFQ5KV.js";var M=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var N=`
    ${M}

    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,$={root:"p-ink"},x=(()=>{class i extends I{name="ripple";style=N;classes=$;static \u0275fac=(()=>{let e;return function(s){return(e||(e=h(i)))(s||i)}})();static \u0275prov=p({token:i,factory:i.\u0275fac})}return i})();var W=(()=>{class i extends L{componentName="Ripple";zone=o(c);_componentStyle=o(x);animationListener;mouseDownListener;timeout;constructor(){super(),u(()=>{g(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(e){let t=this.getInk();if(!t||this.document.defaultView?.getComputedStyle(t,null).display==="none")return;if(!this.$unstyled()&&r(t,"p-ink-active"),t.setAttribute("data-p-ink-active","false"),!a(t)&&!l(t)){let n=Math.max(b(this.el.nativeElement),w(this.el.nativeElement));t.style.height=n+"px",t.style.width=n+"px"}let s=D(this.el.nativeElement),E=e.pageX-s.left+this.document.body.scrollTop-l(t)/2,F=e.pageY-s.top+this.document.body.scrollLeft-a(t)/2;this.renderer.setStyle(t,"top",F+"px"),this.renderer.setStyle(t,"left",E+"px"),!this.$unstyled()&&k(t,"p-ink-active"),t.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(()=>{let n=this.getInk();n&&(!this.$unstyled()&&r(n,"p-ink-active"),n.setAttribute("data-p-ink-active","false"))},401)}getInk(){let e=this.el.nativeElement.children;for(let t=0;t<e.length;t++)if(typeof e[t].className=="string"&&e[t].className.indexOf("p-ink")!==-1)return e[t];return null}resetInk(){let e=this.getInk();e&&(!this.$unstyled()&&r(e,"p-ink-active"),e.setAttribute("data-p-ink-active","false"))}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&r(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"data-p-ink","true"),this.renderer.setAttribute(e,"data-p-ink-active","false"),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,A(e))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[v([x]),y]})}return i})(),G=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=m({type:i});static \u0275inj=d({})}return i})();export{W as a,G as b};
