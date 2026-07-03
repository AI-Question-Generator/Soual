import{a as Bt,b as Ht}from"./chunk-J4AH3Z3C.js";import{b as L}from"./chunk-3Y2HV5ZE.js";import{b as It,c as Lt,d as Ft,e as At,f as Ie}from"./chunk-OTXX5YKA.js";import{b as ct,d as wt,e as Ct,f as we,g as Et,j as je}from"./chunk-W5SPVV47.js";import"./chunk-E2IIHVZW.js";import"./chunk-PEZJA3HC.js";import{a as Ot,b as Mt,c as Ce,e as St,f as Ze,h as Ee,i as Dt}from"./chunk-4YVALNX4.js";import{a as kt}from"./chunk-OYNGJH5P.js";import{$ as A,$b as k,$c as G,Ab as ye,Bb as it,Cb as T,Cd as se,Da as Ae,Db as w,Dc as N,Ea as Je,Eb as nt,Ed as le,Fb as ot,Fd as U,Ga as d,Gb as $,Gc as fe,Gd as F,Hc as ze,Hd as pe,J as Qe,Jb as ce,Jc as ut,K as ee,Kb as v,L as q,Lb as h,Mb as j,N as te,Nc as mt,Oa as Q,Oc as ht,P as y,Pb as rt,Pc as ft,Qa as Xe,Qb as at,Rb as st,Rc as _t,Sb as X,Sc as Re,Ta as z,Tb as lt,Tc as M,U as _,Ua as W,Ub as oe,V as g,Va as ve,Vb as Be,W as We,Wa as Ye,Wc as V,Xa as xe,Xb as He,Xc as re,Y as Ke,Ya as R,Yb as Ne,Yc as gt,Za as u,Zb as Y,Zc as _e,_c as K,a as S,aa as Ge,bd as bt,cc as E,db as f,dc as Ve,dd as vt,ea as De,fd as J,ga as Fe,gb as B,hb as H,hc as x,ic as D,id as xt,ja as P,kb as a,lb as p,ld as yt,mb as c,md as $e,nb as m,pa as be,rb as ie,sb as ne,tb as I,ub as C,uc as pt,ud as Te,vc as dt,wb as b,wc as ue,wd as Tt,xb as s,xc as Pe,xd as ae,yb as et,yc as me,yd as Z,zb as tt,zc as he}from"./chunk-UAMFQ5KV.js";var Nt=(()=>{class t extends U{pFocusTrapDisabled=!1;platformId=y(be);document=y(Ke);firstHiddenFocusableElement;lastHiddenFocusableElement;onInit(){N(this.platformId)&&!this.pFocusTrapDisabled&&!this.firstHiddenFocusableElement&&!this.lastHiddenFocusableElement&&this.createHiddenFocusableElements()}onChanges(e){e.pFocusTrapDisabled&&N(this.platformId)&&(e.pFocusTrapDisabled.currentValue?this.removeHiddenFocusableElements():this.createHiddenFocusableElements())}removeHiddenFocusableElements(){this.firstHiddenFocusableElement&&this.firstHiddenFocusableElement.parentNode&&this.firstHiddenFocusableElement.parentNode.removeChild(this.firstHiddenFocusableElement),this.lastHiddenFocusableElement&&this.lastHiddenFocusableElement.parentNode&&this.lastHiddenFocusableElement.parentNode.removeChild(this.lastHiddenFocusableElement)}getComputedSelector(e){return`:not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])${e??""}`}createHiddenFocusableElements(){let i=n=>re("span",{class:"p-hidden-accessible p-hidden-focusable",tabindex:"0",role:"presentation","aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0,onFocus:n?.bind(this)});this.firstHiddenFocusableElement=i(this.onFirstHiddenElementFocus),this.lastHiddenFocusableElement=i(this.onLastHiddenElementFocus),this.firstHiddenFocusableElement.setAttribute("data-pc-section","firstfocusableelement"),this.lastHiddenFocusableElement.setAttribute("data-pc-section","lastfocusableelement"),this.el.nativeElement.prepend(this.firstHiddenFocusableElement),this.el.nativeElement.append(this.lastHiddenFocusableElement)}onFirstHiddenElementFocus(e){let{currentTarget:i,relatedTarget:n}=e,o=n===this.lastHiddenFocusableElement||!this.el.nativeElement?.contains(n)?bt(i.parentElement,":not(.p-hidden-focusable)"):this.lastHiddenFocusableElement;G(o)}onLastHiddenElementFocus(e){let{currentTarget:i,relatedTarget:n}=e,o=n===this.firstHiddenFocusableElement||!this.el.nativeElement?.contains(n)?vt(i.parentElement,":not(.p-hidden-focusable)"):this.firstHiddenFocusableElement;G(o)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=P(t)))(n||t)}})();static \u0275dir=ve({type:t,selectors:[["","pFocusTrap",""]],inputs:{pFocusTrapDisabled:[2,"pFocusTrapDisabled","pFocusTrapDisabled",x]},features:[R]})}return t})(),Vt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=W({type:t});static \u0275inj=q({})}return t})();var Pt=`
    .p-drawer {
        display: flex;
        flex-direction: column;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
        transition: transform 0.3s;
        background: dt('drawer.background');
        color: dt('drawer.color');
        border-style: solid;
        border-color: dt('drawer.border.color');
        box-shadow: dt('drawer.shadow');
    }

    .p-drawer-content {
        overflow-y: auto;
        flex-grow: 1;
        padding: dt('drawer.content.padding');
    }

    .p-drawer-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('drawer.header.padding');
    }

    .p-drawer-footer {
        padding: dt('drawer.footer.padding');
    }

    .p-drawer-title {
        font-weight: dt('drawer.title.font.weight');
        font-size: dt('drawer.title.font.size');
    }

    .p-drawer-full .p-drawer {
        transition: none;
        transform: none;
        width: 100vw !important;
        height: 100vh !important;
        max-height: 100%;
        top: 0px !important;
        left: 0px !important;
        border-width: 1px;
    }

    .p-drawer-left .p-drawer-enter-active {
        animation: p-animate-drawer-enter-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-left .p-drawer-leave-active {
        animation: p-animate-drawer-leave-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-right .p-drawer-enter-active {
        animation: p-animate-drawer-enter-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-right .p-drawer-leave-active {
        animation: p-animate-drawer-leave-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-top .p-drawer-enter-active {
        animation: p-animate-drawer-enter-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-top .p-drawer-leave-active {
        animation: p-animate-drawer-leave-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-bottom .p-drawer-enter-active {
        animation: p-animate-drawer-enter-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-bottom .p-drawer-leave-active {
        animation: p-animate-drawer-leave-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-full .p-drawer-enter-active {
        animation: p-animate-drawer-enter-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-full .p-drawer-leave-active {
        animation: p-animate-drawer-leave-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    
    .p-drawer-left .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-end-width: 1px;
    }

    .p-drawer-right .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-start-width: 1px;
    }

    .p-drawer-top .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-end-width: 1px;
    }

    .p-drawer-bottom .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-start-width: 1px;
    }

    .p-drawer-left .p-drawer-content,
    .p-drawer-right .p-drawer-content,
    .p-drawer-top .p-drawer-content,
    .p-drawer-bottom .p-drawer-content {
        width: 100%;
        height: 100%;
    }

    .p-drawer-open {
        display: flex;
    }

    .p-drawer-mask:dir(rtl) {
        flex-direction: row-reverse;
    }

    @keyframes p-animate-drawer-enter-left {
        from {
            transform: translate3d(-100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-left {
        to {
            transform: translate3d(-100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-right {
        from {
            transform: translate3d(100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-right {
        to {
            transform: translate3d(100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-top {
        from {
            transform: translate3d(0px, -100%, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-top {
        to {
            transform: translate3d(0px, -100%, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-bottom {
        from {
            transform: translate3d(0px, 100%, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-bottom {
        to {
            transform: translate3d(0px, 100%, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-full {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-drawer-leave-full {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`;var ni=["header"],oi=["footer"],ri=["content"],ai=["closeicon"],si=["headless"],li=["container"],pi=["closeButton"],di=["*"];function ci(t,r){t&1&&I(0)}function ui(t,r){if(t&1&&u(0,ci,1,0,"ng-container",4),t&2){let e=s(2);a("ngTemplateOutlet",e.headlessTemplate||e._headlessTemplate)}}function mi(t,r){t&1&&I(0)}function hi(t,r){if(t&1&&(p(0,"div",9),h(1),c()),t&2){let e=s(3);v(e.cx("title")),a("pBind",e.ptm("title")),d(),j(e.header)}}function fi(t,r){t&1&&(We(),m(0,"svg",12)),t&2&&f("data-pc-section","closeicon")}function _i(t,r){}function gi(t,r){t&1&&u(0,_i,0,0,"ng-template")}function bi(t,r){if(t&1&&u(0,fi,1,1,"svg",11)(1,gi,1,0,null,4),t&2){let e=s(4);a("ngIf",!e.closeIconTemplate&&!e._closeIconTemplate),d(),a("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function vi(t,r){if(t&1){let e=C();p(0,"p-button",10),b("onClick",function(n){_(e);let o=s(3);return g(o.close(n))})("keydown.enter",function(n){_(e);let o=s(3);return g(o.close(n))}),u(1,bi,2,2,"ng-template",null,1,Y),c()}if(t&2){let e=s(3);a("pt",e.ptm("pcCloseButton"))("ngClass",e.cx("pcCloseButton"))("buttonProps",e.closeButtonProps)("ariaLabel",e.ariaCloseLabel)("unstyled",e.unstyled()),f("data-pc-group-section","iconcontainer")}}function xi(t,r){t&1&&I(0)}function yi(t,r){t&1&&I(0)}function Ti(t,r){if(t&1&&(ie(0),p(1,"div",5),u(2,yi,1,0,"ng-container",4),c(),ne()),t&2){let e=s(3);d(),a("pBind",e.ptm("footer"))("ngClass",e.cx("footer")),f("data-pc-section","footer"),d(),a("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}function wi(t,r){if(t&1&&(p(0,"div",5),u(1,mi,1,0,"ng-container",4)(2,hi,2,4,"div",6)(3,vi,3,6,"p-button",7),c(),p(4,"div",5),tt(5),u(6,xi,1,0,"ng-container",4),c(),u(7,Ti,3,4,"ng-container",8)),t&2){let e=s(2);a("pBind",e.ptm("header"))("ngClass",e.cx("header")),f("data-pc-section","header"),d(),a("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),d(),a("ngIf",e.header),d(),a("ngIf",e.showCloseIcon&&e.closable),d(),a("pBind",e.ptm("content"))("ngClass",e.cx("content")),f("data-pc-section","content"),d(2),a("ngTemplateOutlet",e.contentTemplate||e._contentTemplate),d(),a("ngIf",e.footerTemplate||e._footerTemplate)}}function Ci(t,r){if(t&1){let e=C();p(0,"div",3,0),b("pMotionOnBeforeEnter",function(n){_(e);let o=s();return g(o.onBeforeEnter(n))})("pMotionOnAfterLeave",function(n){_(e);let o=s();return g(o.onAfterLeave(n))})("keydown",function(n){_(e);let o=s();return g(o.onKeyDown(n))}),B(2,ui,1,1,"ng-container")(3,wi,8,11),c()}if(t&2){let e=s();ce(e.style),v(e.cn(e.cx("root"),e.styleClass)),a("pBind",e.ptm("root"))("pMotion",e.visible)("pMotionAppear",!0)("pMotionEnterActiveClass",e.$enterAnimation())("pMotionLeaveActiveClass",e.$leaveAnimation())("pMotionOptions",e.computedMotionOptions()),f("data-p",e.dataP)("data-p-open",e.visible),d(2),H(e.headlessTemplate||e._headlessTemplate?2:3)}}var Ei=`
${Pt}

/** For PrimeNG **/
.p-drawer {
    position: fixed;
}

.p-drawer-left {
    top: 0;
    left: 0;
    width: 20rem;
    height: 100%;
    border-inline-end-width: 1px;
}

.p-drawer-right {
    top: 0;
    right: 0;
    width: 20rem;
    height: 100%;
    border-inline-start-width: 1px;
}

.p-drawer-top {
    top: 0;
    left: 0;
    width: 100%;
    height: 10rem;
    border-block-end-width: 1px;
}

.p-drawer-bottom {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10rem;
    border-block-start-width: 1px;
}

.p-drawer-full {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    -webkit-transition: none;
    transition: none;
}

/* Animations */
.p-drawer-enter-left {
    animation: p-animate-drawer-enter-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-leave-left {
    animation: p-animate-drawer-leave-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-enter-right {
    animation: p-animate-drawer-enter-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-leave-right {
    animation: p-animate-drawer-leave-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-enter-top {
    animation: p-animate-drawer-enter-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-leave-top {
    animation: p-animate-drawer-leave-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-enter-bottom {
    animation: p-animate-drawer-enter-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-leave-bottom {
    animation: p-animate-drawer-leave-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-enter-full {
    animation: p-animate-drawer-enter-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-leave-full {
    animation: p-animate-drawer-leave-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}
`,Ii={mask:({instance:t})=>["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter-active":t.modal},{"p-drawer-full":t.fullScreen()}],root:({instance:t})=>["p-drawer p-component",{"p-drawer-full":t.fullScreen(),"p-drawer-open":t.visible},`p-drawer-${t.position()}`],header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},zt=(()=>{class t extends se{name="drawer";style=Ei;classes=Ii;static \u0275fac=(()=>{let e;return function(n){return(e||(e=P(t)))(n||t)}})();static \u0275prov=ee({token:t,factory:t.\u0275fac})}return t})();var Rt=new te("DRAWER_INSTANCE"),Ue=(()=>{class t extends U{componentName="Drawer";$pcDrawer=y(Rt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=y(F,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}appendTo=E(void 0);motionOptions=E(void 0);computedMotionOptions=k(()=>S(S({},this.ptm("motion")),this.motionOptions()));blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;closeButtonProps={severity:"secondary",text:!0,rounded:!0};dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible??!1}set visible(e){this._visible=e,this._visible&&!this.modalVisible&&(this.modalVisible=!0)}position=E("left");fullScreen=E(!1);$enterAnimation=k(()=>this.fullScreen()?"p-drawer-enter-full":`p-drawer-enter-${this.position()}`);$leaveAnimation=k(()=>this.fullScreen()?"p-drawer-leave-full":`p-drawer-leave-${this.position()}`);header;maskStyle;closable=!0;onShow=new A;onHide=new A;visibleChange=new A;containerViewChild;closeButtonViewChild;initialized;_visible;_position="left";_fullScreen=!1;modalVisible=!1;container;mask;maskClickListener;documentEscapeListener;animationEndListener;_componentStyle=y(zt);onAfterViewInit(){this.initialized=!0}headerTemplate;footerTemplate;contentTemplate;closeIconTemplate;headlessTemplate;$appendTo=k(()=>this.appendTo()||this.config.overlayAppendTo());_headerTemplate;_footerTemplate;_contentTemplate;_closeIconTemplate;_headlessTemplate;templates;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break;case"headless":this._headlessTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}onKeyDown(e){e.code==="Escape"&&this.hide(!1)}show(){this.container?.setAttribute(this.$attrSelector,""),this.autoZIndex&&L.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(e=!0){e&&this.onHide.emit({}),this.modal&&this.disableModality()}close(e){this.hide(),this.visibleChange.emit(!1),e.preventDefault()}enableModality(){let e=this.document.querySelectorAll('[data-p-open="true"]'),i=e.length,n=i==1?String(parseInt(this.container.style.zIndex)-1):String(parseInt(e[i-1].style.zIndex)-1);if(!this.mask){if(this.mask=this.renderer.createElement("div"),this.mask){let o=`z-index: ${n};${this.getMaskStyle()}`;$e(this.mask,"style",o),$e(this.mask,"data-p",this.dataP),ze(this.mask,this.cx("mask"))}this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",o=>{this.dismissible&&this.close(o)})),this.renderer.appendChild(this.document.body,this.mask),this.blockScroll&&Ot()}}getMaskStyle(){return this.maskStyle?Object.entries(this.maskStyle).map(([e,i])=>`${e}: ${i}`).join("; "):""}disableModality(){this.mask&&(!this.$unstyled()&&ut(this.mask,"p-overlay-mask-enter-active"),!this.$unstyled()&&ze(this.mask,"p-overlay-mask-leave-active"),this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyModal.bind(this)))}destroyModal(){this.unbindMaskClickListener(),this.mask&&this.renderer.removeChild(this.document.body,this.mask),this.blockScroll&&Mt(),this.unbindAnimationEndListener(),this.mask=null}onBeforeEnter(e){this.container=e.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener()}onAfterLeave(){this.hide(!1),L.clear(this.container),this.unbindGlobalListeners(),this.modalVisible=!1,this.container=null}appendContainer(){this.$appendTo()&&this.$appendTo()!=="self"&&(this.$appendTo()==="body"?V(this.document.body,this.container):V(this.$appendTo(),this.container))}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(e,"keydown",i=>{i.which==27&&parseInt(this.container?.style.zIndex)===L.get(this.container)&&this.close(i)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}onDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.$appendTo()&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&L.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}get dataP(){return this.cn({"full-screen":this.position()==="full",[this.position()]:this.position(),open:this.visible,modal:this.modal})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=P(t)))(n||t)}})();static \u0275cmp=z({type:t,selectors:[["p-drawer"]],contentQueries:function(i,n,o){if(i&1&&ye(o,ni,4)(o,oi,4)(o,ri,4)(o,ai,4)(o,si,4)(o,ae,4),i&2){let l;T(l=w())&&(n.headerTemplate=l.first),T(l=w())&&(n.footerTemplate=l.first),T(l=w())&&(n.contentTemplate=l.first),T(l=w())&&(n.closeIconTemplate=l.first),T(l=w())&&(n.headlessTemplate=l.first),T(l=w())&&(n.templates=l)}},viewQuery:function(i,n){if(i&1&&it(li,5)(pi,5),i&2){let o;T(o=w())&&(n.containerViewChild=o.first),T(o=w())&&(n.closeButtonViewChild=o.first)}},inputs:{appendTo:[1,"appendTo"],motionOptions:[1,"motionOptions"],blockScroll:[2,"blockScroll","blockScroll",x],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",x],baseZIndex:[2,"baseZIndex","baseZIndex",D],modal:[2,"modal","modal",x],closeButtonProps:"closeButtonProps",dismissible:[2,"dismissible","dismissible",x],showCloseIcon:[2,"showCloseIcon","showCloseIcon",x],closeOnEscape:[2,"closeOnEscape","closeOnEscape",x],transitionOptions:"transitionOptions",visible:"visible",position:[1,"position"],fullScreen:[1,"fullScreen"],header:"header",maskStyle:"maskStyle",closable:[2,"closable","closable",x]},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},features:[X([zt,{provide:Rt,useExisting:t},{provide:le,useExisting:t}]),xe([F]),R],ngContentSelectors:di,decls:1,vars:1,consts:[["container",""],["icon",""],["role","complementary","pFocusTrap","",3,"pBind","pMotion","pMotionAppear","pMotionEnterActiveClass","pMotionLeaveActiveClass","pMotionOptions","class","style"],["role","complementary","pFocusTrap","",3,"pMotionOnBeforeEnter","pMotionOnAfterLeave","keydown","pBind","pMotion","pMotionAppear","pMotionEnterActiveClass","pMotionLeaveActiveClass","pMotionOptions"],[4,"ngTemplateOutlet"],[3,"pBind","ngClass"],[3,"pBind","class",4,"ngIf"],[3,"pt","ngClass","buttonProps","ariaLabel","unstyled","onClick","keydown.enter",4,"ngIf"],[4,"ngIf"],[3,"pBind"],[3,"onClick","keydown.enter","pt","ngClass","buttonProps","ariaLabel","unstyled"],["data-p-icon","times",4,"ngIf"],["data-p-icon","times"]],template:function(i,n){i&1&&(et(),B(0,Ci,4,13,"div",2)),i&2&&H(n.modalVisible?0:-1)},dependencies:[he,pt,ue,me,Ee,Lt,Z,F,Vt,Nt,Ie,At],encapsulation:2,changeDetection:0})}return t})(),$t=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=W({type:t});static \u0275inj=q({imports:[Ue,Z,Z]})}return t})();var jt=`
    .p-tooltip {
        position: absolute;
        display: none;
        max-width: dt('tooltip.max.width');
    }

    .p-tooltip-right,
    .p-tooltip-left {
        padding: 0 dt('tooltip.gutter');
    }

    .p-tooltip-top,
    .p-tooltip-bottom {
        padding: dt('tooltip.gutter') 0;
    }

    .p-tooltip-text {
        white-space: pre-line;
        word-break: break-word;
        background: dt('tooltip.background');
        color: dt('tooltip.color');
        padding: dt('tooltip.padding');
        box-shadow: dt('tooltip.shadow');
        border-radius: dt('tooltip.border.radius');
    }

    .p-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }

    .p-tooltip-right .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter') 0;
        border-right-color: dt('tooltip.background');
    }

    .p-tooltip-left .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') 0 dt('tooltip.gutter') dt('tooltip.gutter');
        border-left-color: dt('tooltip.background');
    }

    .p-tooltip-top .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') 0 dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }

    .p-tooltip-bottom .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: 0 dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }
`;var Li={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},Zt=(()=>{class t extends se{name="tooltip";style=jt;classes=Li;static \u0275fac=(()=>{let e;return function(n){return(e||(e=P(t)))(n||t)}})();static \u0275prov=ee({token:t,factory:t.\u0275fac})}return t})();var Ut=new te("TOOLTIP_INSTANCE"),qt=(()=>{class t extends U{zone;viewContainer;componentName="Tooltip";$pcTooltip=y(Ut,{optional:!0,skipSelf:!0})??void 0;tooltipPosition;tooltipEvent="hover";positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;showOnEllipsis=!1;content;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this.deactivate()}tooltipOptions;appendTo=E(void 0);$appendTo=k(()=>this.appendTo()||this.config.overlayAppendTo());_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,showOnEllipsis:!1,id:Te("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;rootPTClasses="";showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;touchStartListener;touchEndListener;documentTouchListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=y(Zt);interactionInProgress=!1;ptTooltip=E();pTooltipPT=E();pTooltipUnstyled=E();constructor(e,i){super(),this.zone=e,this.viewContainer=i,Fe(()=>{let n=this.ptTooltip()||this.pTooltipPT();n&&this.directivePT.set(n)}),Fe(()=>{this.pTooltipUnstyled()&&this.directiveUnstyled.set(this.pTooltipUnstyled())})}onAfterViewInit(){N(this.platformId)&&this.zone.runOutsideAngular(()=>{let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener),this.touchStartListener=this.onTouchStart.bind(this),this.touchEndListener=this.onTouchEnd.bind(this),this.el.nativeElement.addEventListener("touchstart",this.touchStartListener,{passive:!0}),this.el.nativeElement.addEventListener("touchend",this.touchEndListener,{passive:!0})),e==="focus"||e==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let i=this.el.nativeElement.querySelector(".p-component");i||(i=this.getTarget(this.el.nativeElement)),i.addEventListener("focus",this.focusListener),i.addEventListener("blur",this.blurListener)}})}onChanges(e){e.tooltipPosition&&this.setOption({tooltipPosition:e.tooltipPosition.currentValue}),e.tooltipEvent&&this.setOption({tooltipEvent:e.tooltipEvent.currentValue}),e.appendTo&&this.setOption({appendTo:e.appendTo.currentValue}),e.positionStyle&&this.setOption({positionStyle:e.positionStyle.currentValue}),e.tooltipStyleClass&&this.setOption({tooltipStyleClass:e.tooltipStyleClass.currentValue}),e.tooltipZIndex&&this.setOption({tooltipZIndex:e.tooltipZIndex.currentValue}),e.escape&&this.setOption({escape:e.escape.currentValue}),e.showDelay&&this.setOption({showDelay:e.showDelay.currentValue}),e.hideDelay&&this.setOption({hideDelay:e.hideDelay.currentValue}),e.life&&this.setOption({life:e.life.currentValue}),e.positionTop&&this.setOption({positionTop:e.positionTop.currentValue}),e.positionLeft&&this.setOption({positionLeft:e.positionLeft.currentValue}),e.disabled&&this.setOption({disabled:e.disabled.currentValue}),e.content&&(this.setOption({tooltipLabel:e.content.currentValue}),this.active&&(e.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),e.autoHide&&this.setOption({autoHide:e.autoHide.currentValue}),e.showOnEllipsis&&this.setOption({showOnEllipsis:e.showOnEllipsis.currentValue}),e.id&&this.setOption({id:e.id.currentValue}),e.tooltipOptions&&(this._tooltipOptions=S(S({},this._tooltipOptions),e.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(e){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(e){this.isAutoHide()?this.deactivate():!(fe(e.relatedTarget,"p-tooltip")||fe(e.relatedTarget,"p-tooltip-text")||fe(e.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onTouchStart(e){!this.container&&!this.showTimeout&&(this.activate(),this.isAutoHide()||this.bindDocumentTouchListener())}onTouchEnd(e){this.isAutoHide()&&this.deactivate()}bindDocumentTouchListener(){this.documentTouchListener||(this.documentTouchListener=this.renderer.listen("document","touchstart",e=>{this.container&&!this.container.contains(e.target)&&!this.el.nativeElement.contains(e.target)&&(this.deactivate(),this.unbindDocumentTouchListener())}))}unbindDocumentTouchListener(){this.documentTouchListener&&(this.documentTouchListener(),this.documentTouchListener=null)}onFocus(e){this.activate()}onBlur(e){this.deactivate()}onInputClick(e){this.deactivate()}hasEllipsis(){let e=this.el.nativeElement;return e.offsetWidth<e.scrollWidth||e.offsetHeight<e.scrollHeight}activate(){if(!this.interactionInProgress){if(this.getOption("showOnEllipsis")&&!this.hasEllipsis())return;if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let e=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},e)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener?.()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=re("div",{class:this.cx("root"),"p-bind":this.ptm("root"),"data-pc-section":"root"}),this.container.setAttribute("role","tooltip");let e=re("div",{class:this.cx("arrow"),"p-bind":this.ptm("arrow"),"data-pc-section":"arrow"});this.container.appendChild(e),this.tooltipText=re("div",{class:this.cx("text"),"p-bind":this.ptm("text"),"data-pc-section":"text"}),this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?V(this.container,this.el.nativeElement):V(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let e=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(e,"mouseleave",i=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),gt(this.container,250),this.getOption("tooltipZIndex")==="auto"?L.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&L.clear(this.container),this.remove()}updateText(){let e=this.getOption("tooltipLabel");if(e&&typeof e.createEmbeddedView=="function"){let i=this.viewContainer.createEmbeddedView(e);i.detectChanges(),i.rootNodes.forEach(n=>this.tooltipText.appendChild(n))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(e))):this.tooltipText.innerHTML=e}align(){let e=this.getOption("tooltipPosition"),n={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]}[e]||[];for(let[o,l]of n.entries())if(o===0)l.call(this);else if(this.isOutOfBounds())l.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let e=this.el.nativeElement.getBoundingClientRect(),i=e.left+ht(),n=e.top+ft();return{left:i,top:n}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.startsWith("P-")?K(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let e=this.activeElement,i=M(e),n=(J(e)-J(this.container))/2;this.alignTooltip(i,n);let o=this.getArrowElement();o.style.top="50%",o.style.right=null,o.style.bottom=null,o.style.left="0"}alignLeft(){this.preAlign("left");let e=this.getArrowElement(),i=M(this.container),n=(J(this.el.nativeElement)-J(this.container))/2;this.alignTooltip(-i,n),e.style.top="50%",e.style.right="0",e.style.bottom=null,e.style.left=null}alignTop(){this.preAlign("top");let e=this.getArrowElement(),i=this.getHostOffset(),n=M(this.container),o=(M(this.el.nativeElement)-M(this.container))/2,l=J(this.container);this.alignTooltip(o,-l);let O=i.left-this.getHostOffset().left+n/2;e.style.top=null,e.style.right=null,e.style.bottom="0",e.style.left=O+"px"}getArrowElement(){return K(this.container,'[data-pc-section="arrow"]')}alignBottom(){this.preAlign("bottom");let e=this.getArrowElement(),i=M(this.container),n=this.getHostOffset(),o=(M(this.el.nativeElement)-M(this.container))/2,l=J(this.el.nativeElement);this.alignTooltip(o,l);let O=n.left-this.getHostOffset().left+i/2;e.style.top="0",e.style.right=null,e.style.bottom=null,e.style.left=O+"px"}alignTooltip(e,i){let n=this.getHostOffset(),o=n.left+e,l=n.top+i;this.container.style.left=o+this.getOption("positionLeft")+"px",this.container.style.top=l+this.getOption("positionTop")+"px"}setOption(e){this._tooltipOptions=S(S({},this._tooltipOptions),e)}getOption(e){return this._tooltipOptions[e]}getTarget(e){return fe(e,"p-inputwrapper")?K(e,"input"):e}preAlign(e){this.container.style.left="-999px",this.container.style.top="-999px",this.container.className=this.cn(this.cx("root"),this.ptm("root")?.class,"p-tooltip-"+e,this.getOption("tooltipStyleClass"))}isOutOfBounds(){let e=this.container.getBoundingClientRect(),i=e.top,n=e.left,o=M(this.container),l=J(this.container),O=mt();return n+o>O.width||n<0||i<0||i+l>O.height}onWindowResize(e){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Ce(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener),this.el.nativeElement.removeEventListener("touchstart",this.touchStartListener),this.el.nativeElement.removeEventListener("touchend",this.touchEndListener),this.unbindDocumentTouchListener()),e==="focus"||e==="both"){let i=this.el.nativeElement.querySelector(".p-component");i||(i=this.getTarget(this.el.nativeElement)),i.removeEventListener("focus",this.focusListener),i.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):yt(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.unbindDocumentTouchListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}onDestroy(){this.unbindEvents(),this.container&&L.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(i){return new(i||t)(Q(Ge),Q(Xe))};static \u0275dir=ve({type:t,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",x],showDelay:[2,"showDelay","showDelay",D],hideDelay:[2,"hideDelay","hideDelay",D],life:[2,"life","life",D],positionTop:[2,"positionTop","positionTop",D],positionLeft:[2,"positionLeft","positionLeft",D],autoHide:[2,"autoHide","autoHide",x],fitContent:[2,"fitContent","fitContent",x],hideOnEscape:[2,"hideOnEscape","hideOnEscape",x],showOnEllipsis:[2,"showOnEllipsis","showOnEllipsis",x],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions",appendTo:[1,"appendTo"],ptTooltip:[1,"ptTooltip"],pTooltipPT:[1,"pTooltipPT"],pTooltipUnstyled:[1,"pTooltipUnstyled"]},features:[X([Zt,{provide:Ut,useExisting:t},{provide:le,useExisting:t}]),R]})}return t})(),qe=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=W({type:t});static \u0275inj=q({imports:[pe,pe]})}return t})();var Qt=`
    .p-menu {
        background: dt('menu.background');
        color: dt('menu.color');
        border: 1px solid dt('menu.border.color');
        border-radius: dt('menu.border.radius');
        min-width: 12.5rem;
    }

    .p-menu-list {
        margin: 0;
        padding: dt('menu.list.padding');
        outline: 0 none;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: dt('menu.list.gap');
    }

    .p-menu-item-content {
        transition:
            background dt('menu.transition.duration'),
            color dt('menu.transition.duration');
        border-radius: dt('menu.item.border.radius');
        color: dt('menu.item.color');
        overflow: hidden;
    }

    .p-menu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menu.item.padding');
        gap: dt('menu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menu-item-label {
        line-height: 1;
    }

    .p-menu-item-icon {
        color: dt('menu.item.icon.color');
    }

    .p-menu-item.p-focus .p-menu-item-content {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item.p-focus .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-overlay {
        box-shadow: dt('menu.shadow');
    }

    .p-menu-submenu-label {
        background: dt('menu.submenu.label.background');
        padding: dt('menu.submenu.label.padding');
        color: dt('menu.submenu.label.color');
        font-weight: dt('menu.submenu.label.font.weight');
    }

    .p-menu-separator {
        border-block-start: 1px solid dt('menu.separator.border.color');
    }
`;var Si=["pMenuItemContent",""],Le=t=>({$implicit:t}),Di=()=>({exact:!1}),Fi=t=>({item:t});function Ai(t,r){t&1&&I(0)}function Bi(t,r){if(t&1&&(p(0,"a",6),u(1,Ai,1,0,"ng-container",7),c()),t&2){let e=s(2),i=$(4);v(e.cn(e.cx("itemLink"),e.item==null?null:e.item.linkClass)),a("ngStyle",e.item==null?null:e.item.linkStyle)("target",e.item.target)("pBind",e.getPTOptions("itemLink")),f("title",e.item.title)("href",e.item.url||null,Je)("data-automationid",e.item.automationId)("tabindex",-1),d(),a("ngTemplateOutlet",i)("ngTemplateOutletContext",oe(11,Le,e.item))}}function Hi(t,r){t&1&&I(0)}function Ni(t,r){if(t&1&&(p(0,"a",8),u(1,Hi,1,0,"ng-container",7),c()),t&2){let e=s(2),i=$(4);v(e.cn(e.cx("itemLink"),e.item==null?null:e.item.linkClass)),a("routerLink",e.item.routerLink)("queryParams",e.item.queryParams)("routerLinkActiveOptions",e.item.routerLinkActiveOptions||lt(19,Di))("ngStyle",e.item==null?null:e.item.linkStyle)("target",e.item.target)("fragment",e.item.fragment)("queryParamsHandling",e.item.queryParamsHandling)("preserveFragment",e.item.preserveFragment)("skipLocationChange",e.item.skipLocationChange)("replaceUrl",e.item.replaceUrl)("state",e.item.state)("pBind",e.getPTOptions("itemLink")),f("data-automationid",e.item.automationId)("tabindex",-1)("title",e.item.title),d(),a("ngTemplateOutlet",i)("ngTemplateOutletContext",oe(20,Le,e.item))}}function Vi(t,r){if(t&1&&(ie(0),u(1,Bi,2,13,"a",4)(2,Ni,2,22,"a",5),ne()),t&2){let e=s();d(),a("ngIf",!(e.item!=null&&e.item.routerLink)),d(),a("ngIf",e.item==null?null:e.item.routerLink)}}function Pi(t,r){}function zi(t,r){t&1&&u(0,Pi,0,0,"ng-template")}function Ri(t,r){if(t&1&&(ie(0),u(1,zi,1,0,null,7),ne()),t&2){let e=s();d(),a("ngTemplateOutlet",e.itemTemplate)("ngTemplateOutletContext",oe(2,Le,e.item))}}function $i(t,r){if(t&1&&m(0,"span",12),t&2){let e=s(2);v(e.cn(e.cx("itemIcon",oe(5,Fi,e.item)),e.item.iconClass)),a("pBind",e.getPTOptions("itemIcon"))("ngStyle",e.item.iconStyle),f("data-pc-section","itemicon")}}function ji(t,r){if(t&1&&(p(0,"span",13),h(1),c()),t&2){let e=s(2);v(e.cn(e.cx("itemLabel"),e.item.labelClass)),a("ngStyle",e.item.labelStyle)("pBind",e.getPTOptions("itemLabel")),f("data-pc-section","itemlabel"),d(),j(e.item.label)}}function Zi(t,r){if(t&1&&(m(0,"span",14),He(1,"safeHtml")),t&2){let e=s(2);v(e.cn(e.cx("itemLabel"),e.item.labelClass)),a("ngStyle",e.item.labelStyle)("innerHTML",Ne(1,6,e.item.label),Ae)("pBind",e.getPTOptions("itemLabel")),f("data-pc-section","itemlabel")}}function Ui(t,r){if(t&1&&m(0,"p-badge",15),t&2){let e=s(2);a("styleClass",e.item.badgeStyleClass)("value",e.item.badge)("pt",e.getPTOptions("pcBadge"))("unstyled",e.unstyled())}}function qi(t,r){if(t&1&&u(0,$i,1,7,"span",9)(1,ji,2,6,"span",10)(2,Zi,2,8,"ng-template",null,1,Y)(4,Ui,1,4,"p-badge",11),t&2){let e=$(3),i=s();a("ngIf",i.item.icon),d(),a("ngIf",i.item.escape!==!1)("ngIfElse",e),d(3),a("ngIf",i.item.badge)}}var Qi=["start"],Wi=["end"],Ki=["header"],Gi=["item"],Ji=["submenuheader"],Xi=["list"],Yi=["container"],Kt=(t,r)=>({item:t,id:r});function en(t,r){t&1&&I(0)}function tn(t,r){if(t&1){let e=C();p(0,"p-motion",5),b("onBeforeEnter",function(n){_(e);let o=s();return g(o.onOverlayBeforeEnter(n))})("onAfterLeave",function(){_(e);let n=s();return g(n.onOverlayAfterLeave())}),u(1,en,1,0,"ng-container",6),c()}if(t&2){let e=s(),i=$(3);a("visible",e.visible)("appear",e.popup)("options",e.computedMotionOptions()),d(),a("ngTemplateOutlet",i)}}function nn(t,r){t&1&&I(0)}function on(t,r){if(t&1&&u(0,nn,1,0,"ng-container",6),t&2){s();let e=$(3);a("ngTemplateOutlet",e)}}function rn(t,r){t&1&&I(0)}function an(t,r){if(t&1&&(p(0,"div",11),u(1,rn,1,0,"ng-container",6),c()),t&2){let e=s(2);v(e.cx("start")),a("pBind",e.ptm("start")),f("data-pc-section","start"),d(),a("ngTemplateOutlet",e.startTemplate??e._startTemplate)}}function sn(t,r){if(t&1&&m(0,"li",15),t&2){let e=s(4);v(e.cx("separator")),a("pBind",e.ptm("separator")),f("data-pc-section","separator")}}function ln(t,r){if(t&1&&(p(0,"span"),h(1),c()),t&2){let e=s(3).$implicit;d(),j(e.label)}}function pn(t,r){if(t&1&&(m(0,"span",19),He(1,"safeHtml")),t&2){let e=s(3).$implicit;a("innerHTML",Ne(1,1,e.label),Ae)}}function dn(t,r){if(t&1&&(ie(0),u(1,ln,2,1,"span",18)(2,pn,2,3,"ng-template",null,3,Y),ne()),t&2){let e=$(3),i=s(2).$implicit;d(),a("ngIf",i.escape!==!1)("ngIfElse",e)}}function cn(t,r){t&1&&I(0)}function un(t,r){if(t&1&&(p(0,"li",16),u(1,dn,4,2,"ng-container",10)(2,cn,1,0,"ng-container",17),c()),t&2){let e=s(),i=e.$implicit,n=e.index,o=s(3);v(o.cx("submenuLabel")),a("pBind",o.ptm("submenuLabel"))("tooltipOptions",i.tooltipOptions)("pTooltipUnstyled",o.unstyled()),f("data-automationid",i.automationId)("id",o.menuitemId(i,o.id,n))("data-pc-section","submenulabel"),d(),a("ngIf",!o.submenuHeaderTemplate&&!o._submenuHeaderTemplate),d(),a("ngTemplateOutlet",o.submenuHeaderTemplate??o._submenuHeaderTemplate)("ngTemplateOutletContext",oe(11,Le,i))}}function mn(t,r){if(t&1&&m(0,"li",15),t&2){let e=s(5);v(e.cx("separator")),a("pBind",e.ptm("separator")),f("data-pc-section","separator")}}function hn(t,r){if(t&1){let e=C();p(0,"li",21),b("onMenuItemClick",function(n){_(e);let o=s(),l=o.$implicit,O=o.index,de=s().index,Se=s(3);return g(Se.itemClick(n,Se.menuitemId(l,Se.id,de,O)))}),c()}if(t&2){let e=s(),i=e.$implicit,n=e.index,o=s().index,l=s(3);ce(i.style),v(l.cn(l.cx("item",Be(17,Kt,i,l.menuitemId(i,l.id,o,n))),i==null?null:i.styleClass)),a("pBind",l.ptm("item"))("pMenuItemContent",i)("itemTemplate",l.itemTemplate??l._itemTemplate)("idx",n)("menuitemId",l.menuitemId(i,l.id,o,n))("tooltipOptions",i.tooltipOptions)("pTooltipUnstyled",l.unstyled())("unstyled",l.unstyled()),f("aria-label",l.label(i.label))("data-p-focused",l.isItemFocused(l.menuitemId(i,l.id,o,n)))("data-p-disabled",l.disabled(i.disabled))("aria-disabled",l.disabled(i.disabled))("id",l.menuitemId(i,l.id,o,n))}}function fn(t,r){if(t&1&&u(0,mn,1,4,"li",13)(1,hn,1,20,"li",20),t&2){let e=r.$implicit,i=s().$implicit;a("ngIf",e.separator&&(e.visible!==!1||i.visible!==!1)),d(),a("ngIf",!e.separator&&e.visible!==!1&&(e.visible!==void 0||i.visible!==!1))}}function _n(t,r){if(t&1&&u(0,sn,1,4,"li",13)(1,un,3,13,"li",14)(2,fn,2,2,"ng-template",12),t&2){let e=r.$implicit;a("ngIf",e.separator&&e.visible!==!1),d(),a("ngIf",!e.separator),d(),a("ngForOf",e.items)}}function gn(t,r){if(t&1&&u(0,_n,3,3,"ng-template",12),t&2){let e=s(2);a("ngForOf",e.model)}}function bn(t,r){if(t&1&&m(0,"li",15),t&2){let e=s(4);v(e.cx("separator")),a("pBind",e.ptm("separator")),f("data-pc-section","separator")}}function vn(t,r){if(t&1){let e=C();p(0,"li",23),b("onMenuItemClick",function(n){_(e);let o=s(),l=o.$implicit,O=o.index,de=s(3);return g(de.itemClick(n,de.menuitemId(l,de.id,O)))}),c()}if(t&2){let e=s(),i=e.$implicit,n=e.index,o=s(3);v(o.cn(o.cx("item",Be(16,Kt,i,o.menuitemId(i,o.id,n))),i==null?null:i.styleClass)),a("pBind",o.ptm("item"))("pMenuItemContent",i)("itemTemplate",o.itemTemplate??o._itemTemplate)("idx",n)("menuitemId",o.menuitemId(i,o.id,n))("ngStyle",i.style)("tooltipOptions",i.tooltipOptions)("unstyled",o.unstyled())("pTooltipUnstyled",o.unstyled()),f("aria-label",o.label(i.label))("data-p-focused",o.isItemFocused(o.menuitemId(i,o.id,n)))("data-p-disabled",o.disabled(i.disabled))("aria-disabled",o.disabled(i.disabled))("id",o.menuitemId(i,o.id,n))}}function xn(t,r){if(t&1&&u(0,bn,1,4,"li",13)(1,vn,1,19,"li",22),t&2){let e=r.$implicit;a("ngIf",e.separator&&e.visible!==!1),d(),a("ngIf",!e.separator&&e.visible!==!1)}}function yn(t,r){if(t&1&&u(0,xn,2,2,"ng-template",12),t&2){let e=s(2);a("ngForOf",e.model)}}function Tn(t,r){t&1&&I(0)}function wn(t,r){if(t&1&&(p(0,"div",11),u(1,Tn,1,0,"ng-container",6),c()),t&2){let e=s(2);v(e.cx("end")),a("pBind",e.ptm("end")),f("data-pc-section","end"),d(),a("ngTemplateOutlet",e.endTemplate??e._endTemplate)}}function Cn(t,r){if(t&1){let e=C();p(0,"div",7,1),b("click",function(n){_(e);let o=s();return g(o.onOverlayClick(n))}),u(2,an,2,5,"div",8),p(3,"ul",9,2),b("focus",function(n){_(e);let o=s();return g(o.onListFocus(n))})("blur",function(n){_(e);let o=s();return g(o.onListBlur(n))})("keydown",function(n){_(e);let o=s();return g(o.onListKeyDown(n))}),u(5,gn,1,1,null,10)(6,yn,1,1,null,10),c(),u(7,wn,2,5,"div",8),c()}if(t&2){let e=s();ce(e.sx("root")),v(e.cn(e.cx("root"),e.styleClass)),a("ngStyle",e.style)("pBind",e.ptm("root")),f("id",e.id)("data-p",e.dataP),d(2),a("ngIf",e.startTemplate??e._startTemplate),d(),v(e.cx("list")),a("pBind",e.ptm("list")),f("id",e.id+"_list")("tabindex",e.getTabIndexValue())("data-pc-section","menu")("aria-activedescendant",e.activedescendant())("aria-label",e.ariaLabel)("aria-labelledBy",e.ariaLabelledBy),d(2),a("ngIf",e.hasSubMenu()),d(),a("ngIf",!e.hasSubMenu()),d(),a("ngIf",e.endTemplate??e._endTemplate)}}var En={root:({instance:t})=>({position:t.popup?"absolute":"relative"})},In={root:({instance:t})=>["p-menu p-component",{"p-menu-overlay":t.popup}],start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:({instance:t,item:r,id:e})=>["p-menu-item",{"p-focus":t.focusedOptionId()&&e===t.focusedOptionId(),"p-disabled":t.disabled(r.disabled)},r.styleClass],itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:({item:t})=>["p-menu-item-icon",t.icon,t.iconClass],itemLabel:"p-menu-item-label"},ke=(()=>{class t extends se{name="menu";style=Qt;classes=In;inlineStyles=En;static \u0275fac=(()=>{let e;return function(n){return(e||(e=P(t)))(n||t)}})();static \u0275prov=ee({token:t,factory:t.\u0275fac})}return t})();var Wt=new te("MENU_INSTANCE"),Gt=(()=>{class t{platformId;sanitizer;constructor(e,i){this.platformId=e,this.sanitizer=i}transform(e){return!e||!N(this.platformId)?e:this.sanitizer.bypassSecurityTrustHtml(e)}static \u0275fac=function(i){return new(i||t)(Q(be,16),Q(ct,16))};static \u0275pipe=Ye({name:"safeHtml",type:t,pure:!0})}return t})(),kn=(()=>{class t extends U{item;itemTemplate;menuitemId=E("");idx=E(0);onMenuItemClick=new A;menu;_componentStyle=y(ke);hostName="Menu";constructor(e){super(),this.menu=e}onItemClick(e,i){this.onMenuItemClick.emit({originalEvent:e,item:i})}getPTOptions(e){return this.menu.getPTOptions(e,this.item,this.idx(),this.menuitemId())}static \u0275fac=function(i){return new(i||t)(Q(Qe(()=>Oe)))};static \u0275cmp=z({type:t,selectors:[["","pMenuItemContent",""]],inputs:{item:[0,"pMenuItemContent","item"],itemTemplate:"itemTemplate",menuitemId:[1,"menuitemId"],idx:[1,"idx"]},outputs:{onMenuItemClick:"onMenuItemClick"},features:[X([ke]),R],attrs:Si,decls:5,vars:6,consts:[["itemContent",""],["htmlLabel",""],[3,"click","pBind"],[4,"ngIf"],["pRipple","",3,"class","ngStyle","target","pBind",4,"ngIf"],["routerLinkActive","p-menu-item-link-active","pRipple","",3,"routerLink","queryParams","routerLinkActiveOptions","class","ngStyle","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind",4,"ngIf"],["pRipple","",3,"ngStyle","target","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["routerLinkActive","p-menu-item-link-active","pRipple","",3,"routerLink","queryParams","routerLinkActiveOptions","ngStyle","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind"],[3,"class","pBind","ngStyle",4,"ngIf"],[3,"class","ngStyle","pBind",4,"ngIf","ngIfElse"],[3,"styleClass","value","pt","unstyled",4,"ngIf"],[3,"pBind","ngStyle"],[3,"ngStyle","pBind"],[3,"ngStyle","innerHTML","pBind"],[3,"styleClass","value","pt","unstyled"]],template:function(i,n){if(i&1){let o=C();p(0,"div",2),b("click",function(O){return _(o),g(n.onItemClick(O,n.item))}),u(1,Vi,3,2,"ng-container",3)(2,Ri,2,4,"ng-container",3)(3,qi,5,4,"ng-template",null,0,Y),c()}i&2&&(v(n.cx("itemContent")),a("pBind",n.getPTOptions("itemContent")),f("data-pc-section","content"),d(),a("ngIf",!n.itemTemplate),d(),a("ngIf",n.itemTemplate))},dependencies:[he,ue,me,Pe,je,we,Et,kt,qe,F,Ze,St,Z,pe,Gt],encapsulation:2})}return t})(),Oe=(()=>{class t extends U{overlayService;componentName="Menu";model;popup;style;styleClass;autoZIndex=!0;baseZIndex=0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";ariaLabel;ariaLabelledBy;id;tabindex=0;appendTo=E(void 0);motionOptions=E(void 0);computedMotionOptions=k(()=>S(S({},this.ptm("motion")),this.motionOptions()));onShow=new A;onHide=new A;onBlur=new A;onFocus=new A;listViewChild=Ve("list");containerViewChild=Ve("container");$appendTo=k(()=>this.appendTo()||this.config.overlayAppendTo());container;scrollHandler;documentClickListener;documentResizeListener;preventDocumentDefault;target;visible;focusedOptionId=k(()=>this.focusedOptionIndex()!==-1?this.focusedOptionIndex():null);focusedOptionIndex=De(-1);selectedOptionIndex=De(-1);focused=!1;overlayVisible=!1;$pcMenu=y(Wt,{optional:!0,skipSelf:!0})??void 0;_componentStyle=y(ke);bindDirectiveInstance=y(F,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}constructor(e){super(),this.overlayService=e,this.id=this.id||Te("pn_id_")}getPTOptions(e,i,n,o){return this.ptm(e,{context:{item:i,index:n,focused:this.isItemFocused(o),disabled:this.disabled(i.disabled)}})}toggle(e){this.visible?this.hide():this.show(e),this.preventDocumentDefault=!0}show(e){this.container&&!this.overlayVisible&&(this.container=void 0),this.target=e.currentTarget,this.visible=!0,this.preventDocumentDefault=!0,this.overlayVisible=!0,this.cd.markForCheck()}onInit(){this.popup||this.bindDocumentClickListener()}startTemplate;_startTemplate;endTemplate;_endTemplate;headerTemplate;_headerTemplate;itemTemplate;_itemTemplate;submenuHeaderTemplate;_submenuHeaderTemplate;templates;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;case"submenuheader":this._submenuHeaderTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}getTabIndexValue(){return this.tabindex!==void 0?this.tabindex.toString():null}onOverlayBeforeEnter(e){if(this.container=e.element,this.container){let i=M(this.containerViewChild()?.nativeElement);Re(this.container,{width:i+"px"}),Re(this.container,{position:"absolute",top:"0"}),this.appendOverlay(),this.moveOnTop(),this.$attrSelector&&this.container?.setAttribute(this.$attrSelector,""),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),_t(this.container,this.target),G(this.listViewChild()?.nativeElement),this.onShow.emit({})}}onOverlayAfterLeave(){this.restoreOverlayAppend(),this.onOverlayHide(),this.onHide.emit({})}appendOverlay(){this.$appendTo()&&this.$appendTo()!=="self"&&(this.$appendTo()==="body"?V(this.document.body,this.container):V(this.$appendTo(),this.container))}restoreOverlayAppend(){this.container&&this.$appendTo()!=="self"&&V(this.el.nativeElement,this.container)}moveOnTop(){this.autoZIndex&&L.set("menu",this.container,this.baseZIndex+this.config.zIndex.menu)}hide(){this.visible=!1,this.overlayVisible=!1,this.cd.markForCheck()}onWindowResize(){this.visible&&!xt()&&this.hide()}menuitemId(e,i,n,o){return e?.id??`${i}_${n}${o!==void 0?"_"+o:""}`}isItemFocused(e){return this.focusedOptionId()===e}label(e){return typeof e=="function"?e():e}disabled(e){return typeof e=="function"?e():typeof e>"u"?!1:e}activedescendant(){return this.focused?this.focusedOptionId():void 0}onListFocus(e){this.focused||(this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.onFocus.emit(e))}onListBlur(e){this.focused&&(this.focused=!1,this.changeFocusedOptionIndex(-1),this.selectedOptionIndex.set(-1),this.focusedOptionIndex.set(-1),this.onBlur.emit(e))}onListKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":this.onEnterKey(e);break;case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":case"Tab":this.popup&&(G(this.target),this.hide()),this.overlayVisible&&this.hide();break;default:break}}onArrowDownKey(e){let i=this.findNextOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(i),e.preventDefault()}onArrowUpKey(e){if(e.altKey&&this.popup)G(this.target),this.hide(),e.preventDefault();else{let i=this.findPrevOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(i),e.preventDefault()}}onHomeKey(e){this.changeFocusedOptionIndex(0),e.preventDefault()}onEndKey(e){this.changeFocusedOptionIndex(_e(this.containerViewChild()?.nativeElement,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),e.preventDefault()}onEnterKey(e){let i=K(this.containerViewChild()?.nativeElement,`li[id="${`${this.focusedOptionIndex()}`}"]`),n=i&&(K(i,'[data-pc-section="itemlink"]')||K(i,"a,button"));this.popup&&G(this.target),n?n.click():i&&i.click(),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}findNextOptionIndex(e){let n=[..._e(this.containerViewChild()?.nativeElement,'li[data-pc-section="item"][data-p-disabled="false"]')].findIndex(o=>o.id===e);return n>-1?n+1:0}findPrevOptionIndex(e){let n=[..._e(this.containerViewChild()?.nativeElement,'li[data-pc-section="item"][data-p-disabled="false"]')].findIndex(o=>o.id===e);return n>-1?n-1:0}changeFocusedOptionIndex(e){let i=_e(this.containerViewChild()?.nativeElement,'li[data-pc-section="item"][data-p-disabled="false"]');if(i.length>0){let n=e>=i.length?i.length-1:e<0?0:e;n>-1&&this.focusedOptionIndex.set(i[n].getAttribute("id"))}}itemClick(e,i){let{originalEvent:n,item:o}=e;if(this.focused||(this.focused=!0,this.onFocus.emit()),o.disabled){n.preventDefault();return}!o.url&&!o.routerLink&&n.preventDefault(),o.command&&o.command({originalEvent:n,item:o}),this.popup&&this.hide(),!this.popup&&this.focusedOptionIndex()!==i&&this.focusedOptionIndex.set(i)}onOverlayClick(e){this.popup&&this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.preventDocumentDefault=!0}bindDocumentClickListener(){if(!this.documentClickListener&&N(this.platformId)){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentClickListener=this.renderer.listen(e,"click",i=>{let n=this.containerViewChild()?.nativeElement&&!this.containerViewChild()?.nativeElement.contains(i.target),o=!(this.target&&(this.target===i.target||this.target.contains(i.target)));!this.popup&&n&&o&&this.onListBlur(i),this.preventDocumentDefault&&this.overlayVisible&&n&&o&&(this.hide(),this.preventDocumentDefault=!1)})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){if(!this.documentResizeListener&&N(this.platformId)){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){!this.scrollHandler&&N(this.platformId)&&(this.scrollHandler=new Ce(this.target,()=>{this.visible&&this.hide()})),this.scrollHandler?.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&(this.scrollHandler.unbindScrollListener(),this.scrollHandler=null)}onOverlayHide(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.preventDocumentDefault=!1,this.cd.destroyed||(this.target=null),this.container&&(this.autoZIndex&&L.clear(this.container),this.container=void 0)}onDestroy(){this.popup&&(this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&(this.autoZIndex&&L.clear(this.container),this.container=void 0),this.restoreOverlayAppend(),this.onOverlayHide()),this.popup||this.unbindDocumentClickListener()}hasSubMenu(){return this.model?.some(e=>e.items)??!1}isItemHidden(e){return e.separator?e.visible===!1||e.items&&e.items.some(i=>i.visible!==!1):e.visible===!1}get dataP(){return this.cn({popup:this.popup})}static \u0275fac=function(i){return new(i||t)(Q(Tt))};static \u0275cmp=z({type:t,selectors:[["p-menu"]],contentQueries:function(i,n,o){if(i&1&&ye(o,Qi,4)(o,Wi,4)(o,Ki,4)(o,Gi,4)(o,Ji,4)(o,ae,4),i&2){let l;T(l=w())&&(n.startTemplate=l.first),T(l=w())&&(n.endTemplate=l.first),T(l=w())&&(n.headerTemplate=l.first),T(l=w())&&(n.itemTemplate=l.first),T(l=w())&&(n.submenuHeaderTemplate=l.first),T(l=w())&&(n.templates=l)}},viewQuery:function(i,n){i&1&&nt(n.listViewChild,Xi,5)(n.containerViewChild,Yi,5),i&2&&ot(2)},inputs:{model:"model",popup:[2,"popup","popup",x],style:"style",styleClass:"styleClass",autoZIndex:[2,"autoZIndex","autoZIndex",x],baseZIndex:[2,"baseZIndex","baseZIndex",D],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",id:"id",tabindex:[2,"tabindex","tabindex",D],appendTo:[1,"appendTo"],motionOptions:[1,"motionOptions"]},outputs:{onShow:"onShow",onHide:"onHide",onBlur:"onBlur",onFocus:"onFocus"},features:[X([ke,{provide:Wt,useExisting:t},{provide:le,useExisting:t}]),xe([F]),R],decls:4,vars:1,consts:[["sharedcontent",""],["container",""],["list",""],["htmlSubmenuLabel",""],["name","p-anchored-overlay",3,"visible","appear","options"],["name","p-anchored-overlay",3,"onBeforeEnter","onAfterLeave","visible","appear","options"],[4,"ngTemplateOutlet"],[3,"click","ngStyle","pBind"],[3,"class","pBind",4,"ngIf"],["role","menu",3,"focus","blur","keydown","pBind"],[4,"ngIf"],[3,"pBind"],["ngFor","",3,"ngForOf"],["role","separator",3,"class","pBind",4,"ngIf"],["pTooltip","","role","none",3,"class","pBind","tooltipOptions","pTooltipUnstyled",4,"ngIf"],["role","separator",3,"pBind"],["pTooltip","","role","none",3,"pBind","tooltipOptions","pTooltipUnstyled"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"innerHTML"],["pTooltip","","role","menuitem",3,"class","pBind","pMenuItemContent","itemTemplate","idx","menuitemId","style","tooltipOptions","pTooltipUnstyled","unstyled","onMenuItemClick",4,"ngIf"],["pTooltip","","role","menuitem",3,"onMenuItemClick","pBind","pMenuItemContent","itemTemplate","idx","menuitemId","tooltipOptions","pTooltipUnstyled","unstyled"],["pTooltip","","role","menuitem",3,"class","pBind","pMenuItemContent","itemTemplate","idx","menuitemId","ngStyle","tooltipOptions","unstyled","pTooltipUnstyled","onMenuItemClick",4,"ngIf"],["pTooltip","","role","menuitem",3,"onMenuItemClick","pBind","pMenuItemContent","itemTemplate","idx","menuitemId","ngStyle","tooltipOptions","unstyled","pTooltipUnstyled"]],template:function(i,n){i&1&&(B(0,tn,2,4,"p-motion",4)(1,on,1,1,"ng-container"),u(2,Cn,8,21,"ng-template",null,0,Y)),i&2&&H(n.popup?0:1)},dependencies:[he,dt,ue,me,Pe,je,kn,qe,qt,F,Ze,Z,pe,Ie,Ft,Gt],encapsulation:2,changeDetection:0})}return t})(),Jt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=W({type:t});static \u0275inj=q({imports:[Oe,Z,Z]})}return t})();function Mn(t,r){if(t&1){let e=C();p(0,"button",34),b("click",function(n){_(e);let o=$(6);return g(o.toggle(n))}),m(1,"p-avatar",35),p(2,"span",36),h(3),c(),m(4,"i",37),c(),m(5,"p-menu",38,0)}if(t&2){let e=s();d(),a("label",e.initials),d(2),j(e.displayName()),d(2),a("model",e.userMenuItems)("popup",!0)}}function Sn(t,r){if(t&1){let e=C();m(0,"p-button",39),p(1,"p-button",40),b("click",function(){_(e);let n=s();return g(n.navigateToLogin())}),c()}}function Dn(t,r){t&1&&(p(0,"div",41)(1,"div",42),m(2,"i",43),c(),p(3,"span",44),h(4,"\u0633\u0624\u0627\u0644"),c()())}function Fn(t,r){if(t&1&&(p(0,"div",16),m(1,"p-avatar",45),p(2,"div",46)(3,"span",47),h(4),c(),p(5,"span",48),h(6),c()()()),t&2){let e,i=s();d(),a("label",i.initials),d(3),j(i.displayName()),d(2),j((e=i.authService.currentUser())==null?null:e.email)}}function An(t,r){if(t&1){let e=C();p(0,"a",49),b("click",function(){_(e);let n=s();return g(n.menuOpen=!1)}),m(1,"i",50),p(2,"span",20),h(3,"\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A"),c()()}}function Bn(t,r){if(t&1){let e=C();p(0,"p-button",53),b("click",function(){_(e);let n=s(2);return g(n.logout())}),c()}t&2&&a("outlined",!0)}function Hn(t,r){if(t&1){let e=C();m(0,"p-button",54),p(1,"p-button",55),b("click",function(){_(e);let n=s(2);return g(n.navigateToLogin())}),c()}}function Nn(t,r){if(t&1&&(p(0,"div",51),B(1,Bn,1,1,"p-button",52)(2,Hn,2,0),c()),t&2){let e=s();d(),H(e.authService.isAuthenticated()?1:2)}}var Me=class t{menuOpen=!1;authService=y(It);router=y(Ct);displayName=k(()=>{let r=this.authService.currentUser();if(!r)return"";let e=[r.first_name,r.last_name].filter(Boolean).join(" ").trim();return r.username||e});get initials(){let r=this.authService.currentUser();if(!r)return"";let e=[r.first_name,r.last_name].filter(Boolean).join(" ")||r.username,[i,n]=e.trim().split(/\s+/);return(n?i[0]+n[0]:i[0]??"").toUpperCase()}userMenuItems=[{label:"\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A",icon:"pi pi-user",command:()=>this.goToProfile()},{separator:!0},{label:"\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C",icon:"pi pi-sign-out",command:()=>this.logout()}];navigateToLogin(){this.menuOpen=!1,this.router.navigate(["/login"])}goToProfile(){this.menuOpen=!1,this.router.navigate(["/user-profile"])}logout(){this.menuOpen=!1,this.authService.logout().subscribe()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=z({type:t,selectors:[["soual-navbar"]],hostAttrs:[1,"block","w-full"],decls:54,vars:5,consts:[["userMenu",""],[1,"container","py-8","flex-between","gap-4"],["routerLink","/",1,"cursor-pointer"],[1,"text-2xl","text-main-600","font-bold"],[1,"hidden","md:flex","items-center","gap-6","lg:gap-8","text-slate-600","font-medium"],["routerLink","/",1,"hover:text-main-600","transition-colors"],["routerLink","/subjects",1,"hover:text-main-600","transition-colors"],["routerLink","/features",1,"hover:text-main-600","transition-colors"],["routerLink","/pricing",1,"hover:text-main-600","transition-colors"],["routerLink","/contact",1,"hover:text-main-600","transition-colors"],[1,"hidden","md:flex","items-center","gap-3"],[1,"md:hidden",3,"click","text"],[1,"pi","pi-bars","text-2xl","text-main-600"],["position","right",3,"visibleChange","visible"],["pTemplate","header"],[1,"h-full","flex","flex-col"],[1,"flex","items-center","gap-3","p-3","mb-2","rounded-2xl","bg-slate-50","border","border-slate-100"],[1,"flex","flex-col","gap-2","pt-3"],["routerLink","/",1,"flex","items-center","gap-4","p-3","rounded-xl","transition-all","duration-200","hover:bg-slate-50","text-slate-600","hover:text-slate-900","group",3,"click"],[1,"pi","pi-home","text-lg","group-hover:scale-110","transition-transform"],[1,"text-lg"],["routerLink","/subjects",1,"flex","items-center","gap-4","p-3","rounded-xl","transition-all","duration-200","hover:bg-slate-50","text-slate-600","hover:text-slate-900","group",3,"click"],[1,"pi","pi-book","text-lg","group-hover:scale-110","transition-transform"],["routerLink","/features",1,"flex","items-center","gap-4","p-3","rounded-xl","transition-all","duration-200","hover:bg-slate-50","text-slate-600","hover:text-slate-900","group",3,"click"],[1,"pi","pi-star","text-lg","group-hover:scale-110","transition-transform"],["routerLink","/pricing",1,"flex","items-center","gap-4","p-3","rounded-xl","transition-all","duration-200","hover:bg-slate-50","text-slate-600","hover:text-slate-900","group",3,"click"],[1,"pi","pi-tag","text-lg","group-hover:scale-110","transition-transform"],["routerLink","/contact",1,"flex","items-center","gap-4","p-3","rounded-xl","transition-all","duration-200","hover:bg-slate-50","text-slate-600","hover:text-slate-900","group",3,"click"],[1,"pi","pi-envelope","text-lg","group-hover:scale-110","transition-transform"],["routerLink","/user-profile",1,"flex","items-center","gap-4","p-3","rounded-xl","transition-all","duration-200","hover:bg-slate-50","text-slate-600","hover:text-slate-900","group"],[1,"mt-auto","flex","flex-col","gap-4","px-2"],[1,"text-xs","font-bold","text-slate-400","uppercase","tracking-wider"],["href","#",1,"text-sm","text-slate-500","hover:text-primary","transition-colors"],["pTemplate","footer"],["type","button",1,"flex","items-center","gap-2","py-1","ps-1","pe-3","rounded-full","border","border-slate-200","bg-white","hover:border-main-200","hover:bg-slate-50","transition-all","duration-200","cursor-pointer",3,"click"],["shape","circle",3,"label"],[1,"font-medium","text-slate-700","max-w-40","truncate"],[1,"pi","pi-chevron-down","text-xs","text-slate-400"],["appendTo","body",3,"model","popup"],["label","\u0627\u0628\u062F\u0623 \u0627\u0644\u0622\u0646 \u0645\u062C\u0627\u0646\u0627\u064B","icon","pi pi-bolt"],["label","\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644","outlined","","icon","pi pi-sign-in",3,"click"],[1,"flex","items-center","gap-3"],[1,"w-8","h-8","rounded-lg","bg-primary/10","flex-center","text-primary"],[1,"pi","pi-box","text-xl"],[1,"font-bold","text-xl","text-slate-900"],["size","large","shape","circle",3,"label"],[1,"flex","flex-col","min-w-0"],[1,"font-bold","text-slate-900","truncate"],[1,"text-sm","text-slate-500","truncate"],["routerLink","/user-profile",1,"flex","items-center","gap-4","p-3","rounded-xl","transition-all","duration-200","hover:bg-slate-50","text-slate-600","hover:text-slate-900","group",3,"click"],[1,"pi","pi-user","text-lg","group-hover:scale-110","transition-transform"],[1,"flex","flex-col","gap-3","w-full"],["label","\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C","icon","pi pi-sign-out","styleClass","w-full","severity","danger",3,"outlined"],["label","\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C","icon","pi pi-sign-out","styleClass","w-full","severity","danger",3,"click","outlined"],["label","\u0627\u0628\u062F\u0623 \u0627\u0644\u0622\u0646 \u0645\u062C\u0627\u0646\u0627\u064B","icon","pi pi-bolt","styleClass","w-full"],["label","\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644","icon","pi pi-sign-in","styleClass","w-full","severity","secondary","outlined","",3,"click"]],template:function(e,i){e&1&&(p(0,"nav",1)(1,"div",2)(2,"span",3),h(3,"\u0633\u0624\u0627\u0644"),c()(),p(4,"div",4)(5,"a",5),h(6,"\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629"),c(),p(7,"a",6),h(8,"\u0627\u0644\u0645\u0648\u0627\u062F"),c(),p(9,"a",7),h(10,"\u0627\u0644\u0645\u0645\u064A\u0632\u0627\u062A"),c(),p(11,"a",8),h(12,"\u0627\u0644\u0623\u0633\u0639\u0627\u0631"),c(),p(13,"a",9),h(14,"\u0627\u062A\u0635\u0644 \u0628\u0646\u0627"),c()(),p(15,"div",10),B(16,Mn,7,4)(17,Sn,2,0),c(),p(18,"p-button",11),b("click",function(){return i.menuOpen=!0}),m(19,"i",12),c()(),p(20,"p-drawer",13),st("visibleChange",function(o){return at(i.menuOpen,o)||(i.menuOpen=o),o}),u(21,Dn,5,0,"ng-template",14),p(22,"div",15),B(23,Fn,7,3,"div",16),p(24,"div",17)(25,"a",18),b("click",function(){return i.menuOpen=!1}),m(26,"i",19),p(27,"span",20),h(28,"\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629"),c()(),p(29,"a",21),b("click",function(){return i.menuOpen=!1}),m(30,"i",22),p(31,"span",20),h(32,"\u0627\u0644\u0645\u0648\u0627\u062F"),c()(),p(33,"a",23),b("click",function(){return i.menuOpen=!1}),m(34,"i",24),p(35,"span",20),h(36,"\u0627\u0644\u0645\u0645\u064A\u0632\u0627\u062A"),c()(),p(37,"a",25),b("click",function(){return i.menuOpen=!1}),m(38,"i",26),p(39,"span",20),h(40,"\u0627\u0644\u0623\u0633\u0639\u0627\u0631"),c()(),p(41,"a",27),b("click",function(){return i.menuOpen=!1}),m(42,"i",28),p(43,"span",20),h(44,"\u0627\u062A\u0635\u0644 \u0628\u0646\u0627"),c()(),B(45,An,4,0,"a",29),c(),p(46,"div",30)(47,"span",31),h(48,"\u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629"),c(),p(49,"a",32),h(50,"\u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629"),c(),p(51,"a",32),h(52,"\u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0623\u062D\u0643\u0627\u0645"),c()()(),u(53,Nn,3,1,"ng-template",33),c()),e&2&&(d(16),H(i.authService.isAuthenticated()?16:17),d(2),a("text",!0),d(2),rt("visible",i.menuOpen),d(3),H(i.authService.isAuthenticated()?23:-1),d(22),H(i.authService.isAuthenticated()?45:-1))},dependencies:[Dt,Ee,ae,$t,Ue,Ht,Bt,Jt,Oe,we],encapsulation:2,changeDetection:0})};var Xt=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=z({type:t,selectors:[["soual-main-layout"]],hostAttrs:[1,"block","min-h-screen"],decls:2,vars:0,template:function(e,i){e&1&&m(0,"soual-navbar")(1,"router-outlet")},dependencies:[Me,wt],encapsulation:2,changeDetection:0})};export{Xt as MainLayoutComponent};
