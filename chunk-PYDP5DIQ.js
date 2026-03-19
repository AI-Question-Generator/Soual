import{a as Ue,b as Ye,g as B,h as ee,i as et}from"./chunk-LEMNYVEU.js";import{$ as s,$a as qe,Aa as Le,Ab as J,B as N,Ba as Pe,Ea as P,Eb as Re,F as H,Fa as Be,Ga as w,H as _e,Hb as Ge,I as u,Ia as q,Ib as We,Ka as y,L as f,La as He,Lb as Ze,M as G,Mb as X,N as Ee,Na as Y,Nb as V,O as Ce,P as W,Pa as Oe,Q as v,Qb as Ke,Ra as $e,S as T,Sa as ze,Sb as Je,T as ue,Ta as me,Tb as Xe,U as de,V as O,Vb as j,W as $,X as c,Y as r,Z as l,Za as pe,_ as p,a as se,aa as d,ba as x,ca as ye,da as Se,ea as z,fa as D,gb as ce,ha as b,hb as Ve,ia as h,ib as fe,ja as ke,jb as je,ka as Ae,la as Fe,lb as Qe,ma as Te,na as S,oa as k,q as be,qa as De,r as Q,ra as Z,rb as he,s as ge,sa as Ie,t as _,ta as L,u as E,ua as i,v as C,va as I,w as ve,wa as F,x as we,xa as U,y as R,ya as Me,za as Ne,zb as K}from"./chunk-WGCWW7QM.js";var tt=(()=>{class t extends X{pFocusTrapDisabled=!1;platformId=_(_e);document=_(we);firstHiddenFocusableElement;lastHiddenFocusableElement;onInit(){me(this.platformId)&&!this.pFocusTrapDisabled&&!this.firstHiddenFocusableElement&&!this.lastHiddenFocusableElement&&this.createHiddenFocusableElements()}onChanges(e){e.pFocusTrapDisabled&&me(this.platformId)&&(e.pFocusTrapDisabled.currentValue?this.removeHiddenFocusableElements():this.createHiddenFocusableElements())}removeHiddenFocusableElements(){this.firstHiddenFocusableElement&&this.firstHiddenFocusableElement.parentNode&&this.firstHiddenFocusableElement.parentNode.removeChild(this.firstHiddenFocusableElement),this.lastHiddenFocusableElement&&this.lastHiddenFocusableElement.parentNode&&this.lastHiddenFocusableElement.parentNode.removeChild(this.lastHiddenFocusableElement)}getComputedSelector(e){return`:not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])${e??""}`}createHiddenFocusableElements(){let n=a=>Ve("span",{class:"p-hidden-accessible p-hidden-focusable",tabindex:"0",role:"presentation","aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0,onFocus:a?.bind(this)});this.firstHiddenFocusableElement=n(this.onFirstHiddenElementFocus),this.lastHiddenFocusableElement=n(this.onLastHiddenElementFocus),this.firstHiddenFocusableElement.setAttribute("data-pc-section","firstfocusableelement"),this.lastHiddenFocusableElement.setAttribute("data-pc-section","lastfocusableelement"),this.el.nativeElement.prepend(this.firstHiddenFocusableElement),this.el.nativeElement.append(this.lastHiddenFocusableElement)}onFirstHiddenElementFocus(e){let{currentTarget:n,relatedTarget:a}=e,m=a===this.lastHiddenFocusableElement||!this.el.nativeElement?.contains(a)?je(n.parentElement,":not(.p-hidden-focusable)"):this.lastHiddenFocusableElement;fe(m)}onLastHiddenElementFocus(e){let{currentTarget:n,relatedTarget:a}=e,m=a===this.firstHiddenFocusableElement||!this.el.nativeElement?.contains(a)?Qe(n.parentElement,":not(.p-hidden-focusable)"):this.firstHiddenFocusableElement;fe(m)}static \u0275fac=(()=>{let e;return function(a){return(e||(e=H(t)))(a||t)}})();static \u0275dir=Ee({type:t,selectors:[["","pFocusTrap",""]],inputs:{pFocusTrapDisabled:[2,"pFocusTrapDisabled","pFocusTrapDisabled",y]},features:[W]})}return t})(),nt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=Q({})}return t})();var it=`
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
`;var dt=["header"],mt=["footer"],pt=["content"],ct=["closeicon"],ft=["headless"],ht=["container"],xt=["closeButton"],bt=["*"];function gt(t,o){t&1&&z(0)}function vt(t,o){if(t&1&&v(0,gt,1,0,"ng-container",4),t&2){let e=h(2);c("ngTemplateOutlet",e.headlessTemplate||e._headlessTemplate)}}function wt(t,o){t&1&&z(0)}function _t(t,o){if(t&1&&(r(0,"div",9),i(1),l()),t&2){let e=h(3);L(e.cx("title")),c("pBind",e.ptm("title")),u(),I(e.header)}}function Et(t,o){t&1&&(ve(),p(0,"svg",12)),t&2&&T("data-pc-section","closeicon")}function Ct(t,o){}function yt(t,o){t&1&&v(0,Ct,0,0,"ng-template")}function St(t,o){if(t&1&&v(0,Et,1,1,"svg",11)(1,yt,1,0,null,4),t&2){let e=h(4);c("ngIf",!e.closeIconTemplate&&!e._closeIconTemplate),u(),c("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function kt(t,o){if(t&1){let e=D();r(0,"p-button",10),b("onClick",function(a){E(e);let m=h(3);return C(m.close(a))})("keydown.enter",function(a){E(e);let m=h(3);return C(m.close(a))}),v(1,St,2,2,"ng-template",null,1,Be),l()}if(t&2){let e=h(3);c("pt",e.ptm("pcCloseButton"))("ngClass",e.cx("pcCloseButton"))("buttonProps",e.closeButtonProps)("ariaLabel",e.ariaCloseLabel)("unstyled",e.unstyled()),T("data-pc-group-section","iconcontainer")}}function At(t,o){t&1&&z(0)}function Ft(t,o){t&1&&z(0)}function Tt(t,o){if(t&1&&(ye(0),r(1,"div",5),v(2,Ft,1,0,"ng-container",4),l(),Se()),t&2){let e=h(3);u(),c("pBind",e.ptm("footer"))("ngClass",e.cx("footer")),T("data-pc-section","footer"),u(),c("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}function Dt(t,o){if(t&1&&(r(0,"div",5),v(1,wt,1,0,"ng-container",4)(2,_t,2,4,"div",6)(3,kt,3,6,"p-button",7),l(),r(4,"div",5),Ae(5),v(6,At,1,0,"ng-container",4),l(),v(7,Tt,3,4,"ng-container",8)),t&2){let e=h(2);c("pBind",e.ptm("header"))("ngClass",e.cx("header")),T("data-pc-section","header"),u(),c("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),u(),c("ngIf",e.header),u(),c("ngIf",e.showCloseIcon&&e.closable),u(),c("pBind",e.ptm("content"))("ngClass",e.cx("content")),T("data-pc-section","content"),u(2),c("ngTemplateOutlet",e.contentTemplate||e._contentTemplate),u(),c("ngIf",e.footerTemplate||e._footerTemplate)}}function It(t,o){if(t&1){let e=D();r(0,"div",3,0),b("pMotionOnBeforeEnter",function(a){E(e);let m=h();return C(m.onBeforeEnter(a))})("pMotionOnAfterLeave",function(a){E(e);let m=h();return C(m.onAfterLeave(a))})("keydown",function(a){E(e);let m=h();return C(m.onKeyDown(a))}),ue(2,vt,1,1,"ng-container")(3,Dt,8,11),l()}if(t&2){let e=h();Ie(e.style),L(e.cn(e.cx("root"),e.styleClass)),c("pBind",e.ptm("root"))("pMotion",e.visible)("pMotionAppear",!0)("pMotionEnterActiveClass",e.$enterAnimation())("pMotionLeaveActiveClass",e.$leaveAnimation())("pMotionOptions",e.computedMotionOptions()),T("data-p",e.dataP)("data-p-open",e.visible),u(2),de(e.headlessTemplate||e._headlessTemplate?2:3)}}var Mt=`
${it}

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
`,Nt={mask:({instance:t})=>["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter-active":t.modal},{"p-drawer-full":t.fullScreen()}],root:({instance:t})=>["p-drawer p-component",{"p-drawer-full":t.fullScreen(),"p-drawer-open":t.visible},`p-drawer-${t.position()}`],header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},ot=(()=>{class t extends Re{name="drawer";style=Mt;classes=Nt;static \u0275fac=(()=>{let e;return function(a){return(e||(e=H(t)))(a||t)}})();static \u0275prov=be({token:t,factory:t.\u0275fac})}return t})();var rt=new ge("DRAWER_INSTANCE"),xe=(()=>{class t extends X{componentName="Drawer";$pcDrawer=_(rt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=_(V,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}appendTo=q(void 0);motionOptions=q(void 0);computedMotionOptions=w(()=>se(se({},this.ptm("motion")),this.motionOptions()));blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;closeButtonProps={severity:"secondary",text:!0,rounded:!0};dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible??!1}set visible(e){this._visible=e,this._visible&&!this.modalVisible&&(this.modalVisible=!0)}position=q("left");fullScreen=q(!1);$enterAnimation=w(()=>this.fullScreen()?"p-drawer-enter-full":`p-drawer-enter-${this.position()}`);$leaveAnimation=w(()=>this.fullScreen()?"p-drawer-leave-full":`p-drawer-leave-${this.position()}`);header;maskStyle;closable=!0;onShow=new R;onHide=new R;visibleChange=new R;containerViewChild;closeButtonViewChild;initialized;_visible;_position="left";_fullScreen=!1;modalVisible=!1;container;mask;maskClickListener;documentEscapeListener;animationEndListener;_componentStyle=_(ot);onAfterViewInit(){this.initialized=!0}headerTemplate;footerTemplate;contentTemplate;closeIconTemplate;headlessTemplate;$appendTo=w(()=>this.appendTo()||this.config.overlayAppendTo());_headerTemplate;_footerTemplate;_contentTemplate;_closeIconTemplate;_headlessTemplate;templates;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break;case"headless":this._headlessTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}onKeyDown(e){e.code==="Escape"&&this.hide(!1)}show(){this.container?.setAttribute(this.$attrSelector,""),this.autoZIndex&&j.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(e=!0){e&&this.onHide.emit({}),this.modal&&this.disableModality()}close(e){this.hide(),this.visibleChange.emit(!1),e.preventDefault()}enableModality(){let e=this.document.querySelectorAll('[data-p-open="true"]'),n=e.length,a=n==1?String(parseInt(this.container.style.zIndex)-1):String(parseInt(e[n-1].style.zIndex)-1);if(!this.mask){if(this.mask=this.renderer.createElement("div"),this.mask){let m=`z-index: ${a};${this.getMaskStyle()}`;he(this.mask,"style",m),he(this.mask,"data-p",this.dataP),pe(this.mask,this.cx("mask"))}this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",m=>{this.dismissible&&this.close(m)})),this.renderer.appendChild(this.document.body,this.mask),this.blockScroll&&Ue()}}getMaskStyle(){return this.maskStyle?Object.entries(this.maskStyle).map(([e,n])=>`${e}: ${n}`).join("; "):""}disableModality(){this.mask&&(!this.$unstyled()&&qe(this.mask,"p-overlay-mask-enter-active"),!this.$unstyled()&&pe(this.mask,"p-overlay-mask-leave-active"),this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyModal.bind(this)))}destroyModal(){this.unbindMaskClickListener(),this.mask&&this.renderer.removeChild(this.document.body,this.mask),this.blockScroll&&Ye(),this.unbindAnimationEndListener(),this.mask=null}onBeforeEnter(e){this.container=e.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener()}onAfterLeave(){this.hide(!1),j.clear(this.container),this.unbindGlobalListeners(),this.modalVisible=!1,this.container=null}appendContainer(){this.$appendTo()&&this.$appendTo()!=="self"&&(this.$appendTo()==="body"?ce(this.document.body,this.container):ce(this.$appendTo(),this.container))}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(e,"keydown",n=>{n.which==27&&parseInt(this.container?.style.zIndex)===j.get(this.container)&&this.close(n)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}onDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.$appendTo()&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&j.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}get dataP(){return this.cn({"full-screen":this.position()==="full",[this.position()]:this.position(),open:this.visible,modal:this.modal})}static \u0275fac=(()=>{let e;return function(a){return(e||(e=H(t)))(a||t)}})();static \u0275cmp=f({type:t,selectors:[["p-drawer"]],contentQueries:function(n,a,m){if(n&1&&Fe(m,dt,4)(m,mt,4)(m,pt,4)(m,ct,4)(m,ft,4)(m,K,4),n&2){let g;S(g=k())&&(a.headerTemplate=g.first),S(g=k())&&(a.footerTemplate=g.first),S(g=k())&&(a.contentTemplate=g.first),S(g=k())&&(a.closeIconTemplate=g.first),S(g=k())&&(a.headlessTemplate=g.first),S(g=k())&&(a.templates=g)}},viewQuery:function(n,a){if(n&1&&Te(ht,5)(xt,5),n&2){let m;S(m=k())&&(a.containerViewChild=m.first),S(m=k())&&(a.closeButtonViewChild=m.first)}},inputs:{appendTo:[1,"appendTo"],motionOptions:[1,"motionOptions"],blockScroll:[2,"blockScroll","blockScroll",y],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",y],baseZIndex:[2,"baseZIndex","baseZIndex",He],modal:[2,"modal","modal",y],closeButtonProps:"closeButtonProps",dismissible:[2,"dismissible","dismissible",y],showCloseIcon:[2,"showCloseIcon","showCloseIcon",y],closeOnEscape:[2,"closeOnEscape","closeOnEscape",y],transitionOptions:"transitionOptions",visible:"visible",position:[1,"position"],fullScreen:[1,"fullScreen"],header:"header",maskStyle:"maskStyle",closable:[2,"closable","closable",y]},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},features:[Pe([ot,{provide:rt,useExisting:t},{provide:Ze,useExisting:t}]),Ce([V]),W],ngContentSelectors:bt,decls:1,vars:1,consts:[["container",""],["icon",""],["role","complementary","pFocusTrap","",3,"pBind","pMotion","pMotionAppear","pMotionEnterActiveClass","pMotionLeaveActiveClass","pMotionOptions","class","style"],["role","complementary","pFocusTrap","",3,"pMotionOnBeforeEnter","pMotionOnAfterLeave","keydown","pBind","pMotion","pMotionAppear","pMotionEnterActiveClass","pMotionLeaveActiveClass","pMotionOptions"],[4,"ngTemplateOutlet"],[3,"pBind","ngClass"],[3,"pBind","class",4,"ngIf"],[3,"pt","ngClass","buttonProps","ariaLabel","unstyled","onClick","keydown.enter",4,"ngIf"],[4,"ngIf"],[3,"pBind"],[3,"onClick","keydown.enter","pt","ngClass","buttonProps","ariaLabel","unstyled"],["data-p-icon","times",4,"ngIf"],["data-p-icon","times"]],template:function(n,a){n&1&&(ke(),ue(0,It,4,13,"div",2)),n&2&&de(a.modalVisible?0:-1)},dependencies:[ze,Y,Oe,$e,B,Ke,J,V,nt,tt,Xe,Je],encapsulation:2,changeDetection:0})}return t})(),at=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=Q({imports:[xe,J,J]})}return t})();function Bt(t,o){t&1&&(r(0,"div",30)(1,"div",31),p(2,"i",32),l(),r(3,"span",33),i(4,"\u0633\u0624\u0627\u0644"),l()())}function Ht(t,o){if(t&1){let e=D();r(0,"div",34),p(1,"p-button",35),r(2,"p-button",36),b("click",function(){E(e);let a=h();return C(a.navigateToLogin())}),l()()}}var te=class t{menuOpen=!1;authService=_(et);router=_(Ge);navigateToLogin(){this.menuOpen=!1,this.router.navigate(["/login"])}logout(){this.menuOpen=!1,this.authService.logout()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=f({type:t,selectors:[["soual-navbar"]],hostAttrs:[1,"block","w-full"],decls:46,vars:2,consts:[[1,"container","py-8","flex-between","gap-4"],["routerLink","/",1,"cursor-pointer"],[1,"text-2xl","text-main-600","font-bold"],[1,"hidden","md:flex","items-center","gap-6","lg:gap-8","text-slate-600","font-medium"],["routerLink","/",1,"hover:text-main-600","transition-colors"],["routerLink","/features",1,"hover:text-main-600","transition-colors"],["routerLink","/pricing",1,"hover:text-main-600","transition-colors"],["routerLink","/contact",1,"hover:text-main-600","transition-colors"],[1,"hidden","md:flex","items-center","gap-3"],["label","\u0627\u0628\u062F\u0623 \u0627\u0644\u0622\u0646 \u0645\u062C\u0627\u0646\u0627\u064B","icon","pi pi-bolt"],["label","\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644","outlined","","icon","pi pi-sign-in",3,"click"],[1,"md:hidden",3,"click","text"],[1,"pi","pi-bars","text-2xl","text-main-600"],["position","right",3,"visibleChange","visible"],["pTemplate","header"],[1,"h-full","flex","flex-col"],[1,"flex","flex-col","gap-2","pt-3"],["routerLink","/",1,"flex","items-center","gap-4","p-3","rounded-xl","transition-all","duration-200","hover:bg-slate-50","text-slate-600","hover:text-slate-900","group",3,"click"],[1,"pi","pi-home","text-lg","group-hover:scale-110","transition-transform"],[1,"text-lg"],["routerLink","/features",1,"flex","items-center","gap-4","p-3","rounded-xl","transition-all","duration-200","hover:bg-slate-50","text-slate-600","hover:text-slate-900","group",3,"click"],[1,"pi","pi-star","text-lg","group-hover:scale-110","transition-transform"],["routerLink","/pricing",1,"flex","items-center","gap-4","p-3","rounded-xl","transition-all","duration-200","hover:bg-slate-50","text-slate-600","hover:text-slate-900","group",3,"click"],[1,"pi","pi-tag","text-lg","group-hover:scale-110","transition-transform"],["routerLink","/contact",1,"flex","items-center","gap-4","p-3","rounded-xl","transition-all","duration-200","hover:bg-slate-50","text-slate-600","hover:text-slate-900","group",3,"click"],[1,"pi","pi-envelope","text-lg","group-hover:scale-110","transition-transform"],[1,"mt-auto","flex","flex-col","gap-4","px-2"],[1,"text-xs","font-bold","text-slate-400","uppercase","tracking-wider"],["href","#",1,"text-sm","text-slate-500","hover:text-primary","transition-colors"],["pTemplate","footer"],[1,"flex","items-center","gap-3"],[1,"w-8","h-8","rounded-lg","bg-primary/10","flex-center","text-primary"],[1,"pi","pi-box","text-xl"],[1,"font-bold","text-xl","text-slate-900"],[1,"flex","flex-col","gap-3","w-full"],["label","\u0627\u0628\u062F\u0623 \u0627\u0644\u0622\u0646 \u0645\u062C\u0627\u0646\u0627\u064B","icon","pi pi-bolt","styleClass","w-full !py-3"],["label","\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644","icon","pi pi-sign-in","styleClass","w-full !py-3 !bg-slate-50 !text-slate-700 !border-slate-200 hover:!bg-slate-100","outlined","",3,"click"]],template:function(e,n){e&1&&(r(0,"nav",0)(1,"div",1)(2,"span",2),i(3,"\u0633\u0624\u0627\u0644"),l()(),r(4,"div",3)(5,"a",4),i(6,"\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629"),l(),r(7,"a",5),i(8,"\u0627\u0644\u0645\u0645\u064A\u0632\u0627\u062A"),l(),r(9,"a",6),i(10,"\u0627\u0644\u0623\u0633\u0639\u0627\u0631"),l(),r(11,"a",7),i(12,"\u0627\u062A\u0635\u0644 \u0628\u0646\u0627"),l()(),r(13,"div",8),p(14,"p-button",9),r(15,"p-button",10),b("click",function(){return n.navigateToLogin()}),l()(),r(16,"p-button",11),b("click",function(){return n.menuOpen=!0}),p(17,"i",12),l()(),r(18,"p-drawer",13),Le("visibleChange",function(m){return Ne(n.menuOpen,m)||(n.menuOpen=m),m}),v(19,Bt,5,0,"ng-template",14),r(20,"div",15)(21,"div",16)(22,"a",17),b("click",function(){return n.menuOpen=!1}),p(23,"i",18),r(24,"span",19),i(25,"\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629"),l()(),r(26,"a",20),b("click",function(){return n.menuOpen=!1}),p(27,"i",21),r(28,"span",19),i(29,"\u0627\u0644\u0645\u0645\u064A\u0632\u0627\u062A"),l()(),r(30,"a",22),b("click",function(){return n.menuOpen=!1}),p(31,"i",23),r(32,"span",19),i(33,"\u0627\u0644\u0623\u0633\u0639\u0627\u0631"),l()(),r(34,"a",24),b("click",function(){return n.menuOpen=!1}),p(35,"i",25),r(36,"span",19),i(37,"\u0627\u062A\u0635\u0644 \u0628\u0646\u0627"),l()()(),r(38,"div",26)(39,"span",27),i(40,"\u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629"),l(),r(41,"a",28),i(42,"\u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629"),l(),r(43,"a",28),i(44,"\u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0623\u062D\u0643\u0627\u0645"),l()()(),v(45,Ht,3,0,"ng-template",29),l()),e&2&&(u(16),c("text",!0),u(2),Me("visible",n.menuOpen))},dependencies:[ee,B,K,at,xe,We],encapsulation:2,changeDetection:0})};var ne=class t{totalSeconds=N(600);timerId;minutesTimer=w(()=>Math.floor(this.totalSeconds()/60));secondsTimer=w(()=>String(this.totalSeconds()%60).padStart(2,"0"));constructor(){this.timerId=setInterval(()=>{this.totalSeconds.update(o=>o<=0?(clearInterval(this.timerId),0):o-1)},1e3)}ngOnDestroy(){this.timerId&&clearInterval(this.timerId)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=f({type:t,selectors:[["soual-hero-preview-physics"]],hostAttrs:[1,"relative","sm:absolute","sm:top-20","lg:top-28","sm:right-1","z-30","animate-float"],decls:28,vars:2,consts:[[1,"min-w-72","bg-main-600","text-white","rounded-2xl","p-5","transition-all","duration-300","sm:-rotate-1","sm:hover:rotate-0","box-shadow"],[1,"flex","items-center","justify-between","mb-4"],[1,"flex","items-center","gap-2"],[1,"w-9","h-9","rounded-md","bg-white/5","flex-center","border","border-white/20"],[1,"pi","pi-bolt","text-sm"],[1,"font-bold","text-sm"],[1,"text-xs","text-main-100"],[1,"text-xs","bg-main-700/50","px-2","py-1","rounded-md","border","border-main-400/30","font-mono"],[1,"space-y-4"],[1,"bg-main-700/40","rounded-xl","p-3","border","border-main-400/20","text-center"],[1,"font-mono","text-sm","tracking-widest","text-white/90","font-bold"],[1,"text-sm","leading-relaxed","font-medium"],[1,"grid","grid-cols-2","gap-2"],["type","button",1,"px-3","py-2.5","rounded-xl","bg-white/10","hover:bg-white/20","text-xs","border","border-white/10","transition-all","duration-200"],["type","button",1,"relative","px-3","py-2.5","rounded-xl","bg-white","text-main-700","text-xs","font-bold","shadow-lg","transform","active:scale-95","transition-all"],[1,"pi","pi-check-circle","absolute","-top-1","-left-1","text-white","bg-main-800","rounded-full","text-[10px]"]],template:function(e,n){e&1&&(s(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),x(4,"i",4),d(),s(5,"div")(6,"h4",5),i(7,"\u0627\u0644\u0641\u064A\u0632\u064A\u0627\u0621"),d(),s(8,"span",6),i(9,"\u0627\u0644\u0641\u0635\u0644 \u0627\u0644\u0623\u0648\u0644: \u0627\u0644\u062A\u064A\u0627\u0631 \u0627\u0644\u0643\u0647\u0631\u0628\u064A"),d()()(),s(10,"div",7),i(11),d()(),s(12,"div",8)(13,"div",9)(14,"span",10),i(15,"P = I\xB2 \xD7 R"),d()(),s(16,"p",11),i(17," \u0625\u0630\u0627 \u0643\u0627\u0646\u062A \u0627\u0644\u0642\u062F\u0631\u0629 \u0627\u0644\u0645\u0633\u062A\u0647\u0644\u0643\u0629 \u0641\u064A \u0645\u0642\u0627\u0648\u0645\u0629 (10\u03A9) \u0647\u064A (40W)\u060C \u0641\u0625\u0646 \u0634\u062F\u0629 \u0627\u0644\u062A\u064A\u0627\u0631 \u0627\u0644\u0645\u0627\u0631 \u0641\u064A\u0647\u0627 \u062A\u0633\u0627\u0648\u064A: "),d(),s(18,"div",12)(19,"button",13),i(20," 4A "),d(),s(21,"button",14),i(22," 2A "),x(23,"i",15),d(),s(24,"button",13),i(25," 0.5A "),d(),s(26,"button",13),i(27," 20A "),d()()()()),e&2&&(u(11),U(" ",n.minutesTimer(),":",n.secondsTimer()," "))},styles:[".box-shadow[_ngcontent-%COMP%]{box-shadow:0 20px 40px #1e40af4d}"],changeDetection:0})};var ie=class t{totalQuestions=20;duration=1e5;loadingProgress=N(0);questionsGenerated=w(()=>{let o=this.loadingProgress()/100*this.totalQuestions;return Math.min(Math.floor(o),this.totalQuestions)});isComplete=w(()=>this.loadingProgress()===100);intervalId;ngOnInit(){this.startSimulation()}ngOnDestroy(){this.clearTimer()}startSimulation(){let e=this.duration/100;this.intervalId=setInterval(()=>{this.loadingProgress.update(n=>n>=100?(this.clearTimer(),100):n+1)},e)}clearTimer(){this.intervalId&&clearInterval(this.intervalId)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=f({type:t,selectors:[["soual-hero-preview-ai-generator"]],hostAttrs:[1,"relative","sm:absolute","sm:top-10","lg:top-18","sm:left-0","z-20","animate-float-slow"],decls:40,vars:16,consts:[[1,"min-w-64","bg-white","card-shadow","rounded-2xl","p-4","border","border-slate-100","transition-all","duration-300","sm:rotate-2","sm:hover:rotate-0","space-y-4"],[1,"flex","items-center","gap-2"],[1,"w-9","h-9","rounded-lg","flex-center","bg-secondary-400","text-white","shadow-lg","shadow-secondary-500/30"],[1,"pi","pi-sparkles","text-sm"],[1,"font-bold","text-sm","text-slate-800"],[1,"text-[10px]","text-slate-500"],[1,"bg-linear-to-br","from-slate-50","to-slate-100","rounded-xl","p-3","border","border-dashed","border-slate-300"],[1,"pi","pi-file-pdf","text-red-500","text-lg"],[1,"flex-1"],[1,"text-xs","font-semibold","text-slate-700"],[1,"pi","pi-check-circle","text-green-500"],[1,"space-y-2"],[1,"flex","items-center","justify-between","text-xs"],[1,"text-slate-700"],[1,"font-bold","text-main-600","bg-main-50","px-2","py-0.5","rounded"],[1,"text-slate-500"],[1,"bg-main-50","rounded-xl","p-3","border","border-main-100"],[1,"flex","items-center","justify-between","mb-2"],[1,"text-xs","font-semibold","text-main-700"],[1,"text-xs","font-bold","text-main-600"],[1,"w-full","h-1.5","bg-main-100","rounded-full","overflow-hidden"],[1,"h-full","bg-linear-to-r","from-main-500","to-main-400","rounded-full","transition-[width]","duration-150","ease-linear"],[1,"text-[10px]","text-main-600","mt-2","text-center","transition-colors"],[1,"pi","text-[8px]","me-1"]],template:function(e,n){e&1&&(s(0,"div",0)(1,"div",1)(2,"span",2),x(3,"i",3),d(),s(4,"div")(5,"h4",4),i(6,"\u062A\u0648\u0644\u064A\u062F \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A"),d(),s(7,"span",5),i(8,"\u0645\u0646 \u0645\u0644\u0641 PDF"),d()()(),s(9,"div",6)(10,"div",1),x(11,"i",7),s(12,"div",8)(13,"p",9),i(14,"\u0627\u0644\u0641\u0635\u0644_\u0627\u0644\u0623\u0648\u0644_\u0641\u064A\u0632\u064A\u0627\u0621.pdf"),d(),s(15,"p",5),i(16,"2.4 MB"),d()(),x(17,"i",10),d()(),s(18,"div",11)(19,"div",12)(20,"span",13),i(21,"\u0639\u062F\u062F \u0627\u0644\u0623\u0633\u0626\u0644\u0629"),d(),s(22,"span",14),i(23,"20 \u0633\u0624\u0627\u0644"),d()(),s(24,"div",12)(25,"span",13),i(26,"\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0635\u0639\u0648\u0628\u0629"),d(),s(27,"span",15),i(28,"\u0645\u062A\u0648\u0633\u0637"),d()()(),s(29,"div",16)(30,"div",17)(31,"span",18),i(32),d(),s(33,"span",19),i(34),d()(),s(35,"div",20),x(36,"div",21),d(),s(37,"p",22),x(38,"i",23),i(39),d()()()),e&2&&(u(32),F(" ",n.isComplete()?"\u062A\u0645 \u0627\u0644\u0627\u0643\u062A\u0645\u0627\u0644":"\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u0648\u0644\u064A\u062F..."," "),u(2),F(" ",n.loadingProgress(),"% "),u(2),De("width",n.loadingProgress(),"%"),Z("animate-pulse",!n.isComplete()),u(),Z("text-green-600",n.isComplete()),u(),Z("pi-spin",!n.isComplete())("pi-spinner",!n.isComplete())("pi-check",n.isComplete()),u(),U(" \u062A\u0645 \u062A\u0648\u0644\u064A\u062F ",n.questionsGenerated()," \u0645\u0646 ",n.totalQuestions," \u0633\u0624\u0627\u0644 "))},encapsulation:2,changeDetection:0})};var oe=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=f({type:t,selectors:[["soual-hero-previews"]],decls:3,vars:0,consts:[[1,"flex","flex-col","gap-4","sm:block","sm:relative","w-full","max-w-150","mx-auto","sm:h-125","lg:h-137.5"]],template:function(e,n){e&1&&(r(0,"div",0),p(1,"soual-hero-preview-ai-generator")(2,"soual-hero-preview-physics"),l())},dependencies:[ne,ie],encapsulation:2,changeDetection:0})};var re=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=f({type:t,selectors:[["soual-hero"]],decls:35,vars:0,consts:[[1,"absolute","inset-0","bg-grid-u-mask","pointer-events-none"],[1,"container","relative","py-8","lg:py-10","z-10"],[1,"grid","lg:grid-cols-2","gap-8","items-center"],[1,"flex","flex-col","gap-6","text-center","lg:text-right"],[1,"flex-center","flex-wrap","gap-2"],[1,"inline-flex","items-center","gap-2","px-3","py-2","rounded-full","bg-main-500","text-white","text-xs","font-semibold","shadow-lg","shadow-main-500/25"],[1,"pi","pi-sparkles","text-2.5"],[1,"inline-flex","items-center","gap-2","px-3","py-2","rounded-full","bg-white","text-slate-700","text-xs","font-medium","border","border-slate-200","shadow-sm"],[1,"pi","pi-verified","text-secondary-500","text-2.5"],[1,"text-4xl","lg:text-5xl","font-extrabold","text-slate-900","leading-tight"],[1,"text-main-600"],[1,"text-lg","text-slate-600","leading-relaxed"],[1,"sm:mx-auto","flex","items-center","gap-2","sm:gap-4"],["label","\u0627\u0628\u062F\u0623 \u0627\u0644\u0622\u0646 \u0645\u062C\u0627\u0646\u0627\u064B","icon","pi pi-bolt","styleClass","!py-3 w-full sm:w-auto",1,"w-full","sm:w-auto","flex-1","sm:flex-none"],["label","\u0634\u0627\u0647\u062F \u0643\u064A\u0641 \u062A\u0639\u0645\u0644 ","icon","pi pi-external-link","outlined","","styleClass","!py-3 w-full sm:w-auto",1,"w-full","sm:w-auto","flex-1","sm:flex-none","bg-white"],[1,"flex-center","flex-wrap","gap-4","pt-4","mt-2","border-t","border-slate-200/80"],[1,"flex","items-center","gap-2","text-sm","text-slate-600"],[1,"pi","pi-check-circle","text-secondary-500"],[1,"relative","flex","justify-center"]],template:function(e,n){e&1&&(p(0,"div",0),r(1,"section",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"span",5),p(6,"i",6),i(7," \u064A\u0639\u0645\u0644 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A "),l(),r(8,"span",7),p(9,"i",8),i(10," \u0645\u062A\u0648\u0627\u0641\u0642 \u0645\u0639 \u0645\u0646\u0647\u062C \u0627\u0644\u062B\u0627\u0646\u0648\u064A\u0629 \u0627\u0644\u0639\u0627\u0645\u0629 "),l()(),r(11,"h1",9),i(12," \u062D\u0648\u0651\u0644 \u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u064A \u0625\u0644\u0649 "),r(13,"span",10),i(14,"\u0623\u0633\u0626\u0644\u0629 \u0630\u0643\u064A\u0629 \u0648\u062A\u0641\u0627\u0639\u0644\u064A\u0629"),l()(),r(15,"p",11),i(16," \u0633\u0624\u0627\u0644 \u064A\u0633\u0627\u0639\u062F \u0627\u0644\u0645\u0639\u0644\u0645\u064A\u0646 \u0639\u0644\u0649 \u0625\u0646\u0634\u0627\u0621 \u0628\u0646\u0648\u0643 \u0623\u0633\u0626\u0644\u0629 \u0648\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A \u062A\u0641\u0627\u0639\u0644\u064A\u0629\u060C \u0648\u064A\u0633\u0627\u0639\u062F \u0627\u0644\u0637\u0644\u0627\u0628 \u0639\u0644\u0649 \u0627\u0644\u062A\u062F\u0631\u064A\u0628 \u0648\u0627\u0644\u0641\u0647\u0645 \u0645\u0646 \u062E\u0644\u0627\u0644 \u062A\u062C\u0631\u0628\u0629 \u062A\u0639\u0644\u064A\u0645\u064A\u0629 \u0648\u0627\u0636\u062D\u0629\u060C \u0633\u0631\u064A\u0639\u0629\u060C \u0648\u0645\u0635\u0645\u0645\u0629 \u0644\u0644\u0645\u0646\u0647\u062C \u0627\u0644\u0639\u0631\u0628\u064A. "),l(),r(17,"div",12),p(18,"p-button",13)(19,"p-button",14),l(),r(20,"div",15)(21,"div",16),p(22,"i",17),r(23,"span"),i(24,"\u0645\u0635\u0645\u0645 \u062E\u0635\u064A\u0635\u064B\u0627 \u0644\u0644\u0645\u0639\u0644\u0645\u064A\u0646 \u0648\u0627\u0644\u0637\u0644\u0627\u0628"),l()(),r(25,"div",16),p(26,"i",17),r(27,"span"),i(28,"\u062A\u0648\u0644\u064A\u062F \u0623\u0633\u0626\u0644\u0629 \u0645\u0646 PDF"),l()(),r(29,"div",16),p(30,"i",17),r(31,"span"),i(32,"\u0645\u0633\u062A\u0648\u064A\u0627\u062A \u0635\u0639\u0648\u0628\u0629 \u0645\u062A\u0639\u062F\u062F\u0629"),l()()()(),r(33,"div",18),p(34,"soual-hero-previews"),l()()())},dependencies:[ee,B,oe],encapsulation:2,changeDetection:0})};var lt=(t,o)=>o.title;function Ot(t,o){if(t&1&&(s(0,"div",12),x(1,"div",15),s(2,"div",16)(3,"div",17),x(4,"i"),d(),s(5,"span",18),i(6),d()(),s(7,"h3",19),i(8),d(),s(9,"p",20),i(10),d(),s(11,"div",21)(12,"span"),i(13,"\u0627\u0642\u0631\u0623 \u0627\u0644\u0645\u0632\u064A\u062F"),d(),x(14,"i",22),d()()),t&2){let e=o.$implicit,n=o.$index;u(4),L(`pi text-2xl ${e.icon}`),u(2),F("0",n+1),u(2),I(e.title),u(2),I(e.description)}}function $t(t,o){if(t&1&&(s(0,"div",14)(1,"div",23),x(2,"i"),d(),s(3,"div")(4,"h4",24),i(5),d(),s(6,"p",25),i(7),d()()()),t&2){let e=o.$implicit;u(2),L(`pi text-slate-400 ${e.icon}`),u(3),I(e.title),u(2),I(e.description)}}var ae=class t{features=[{icon:"pi-microchip-ai",iconBg:"bg-main-50",title:"\u062A\u0648\u0644\u064A\u062F \u0623\u0633\u0626\u0644\u0629 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A",description:"\u0627\u0631\u0641\u0639 \u0645\u0644\u0641 PDF \u0623\u0648 \u0623\u062F\u062E\u0644 \u0646\u0635 \u0627\u0644\u062F\u0631\u0633\u060C \u0648\u0633\u064A\u0642\u0648\u0645 \u0627\u0644\u0646\u0638\u0627\u0645 \u0628\u0625\u0646\u0634\u0627\u0621 \u0623\u0633\u0626\u0644\u0629 \u0645\u062A\u0646\u0648\u0639\u0629 \u0645\u062A\u0648\u0627\u0641\u0642\u0629 \u0645\u0639 \u0645\u0646\u0647\u062C \u0627\u0644\u062B\u0627\u0646\u0648\u064A\u0629 \u0627\u0644\u0639\u0627\u0645\u0629 \u0627\u0644\u0645\u0635\u0631\u064A\u0629 \u0645\u0639 \u062A\u062D\u062F\u064A\u062F \u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0635\u0639\u0648\u0628\u0629."},{icon:"pi-database",iconBg:"bg-main-50",title:"\u0628\u0646\u0643 \u0623\u0633\u0626\u0644\u0629 \u0645\u0646\u0638\u0645 \u0648\u0642\u0627\u0628\u0644 \u0644\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645",description:"\u0623\u0646\u0634\u0626 \u0645\u0643\u062A\u0628\u0629 \u0623\u0633\u0626\u0644\u062A\u0643 \u0627\u0644\u062E\u0627\u0635\u0629\u060C \u0635\u0646\u0651\u0641\u0647\u0627 \u062D\u0633\u0628 \u0627\u0644\u0645\u0627\u062F\u0629 \u0648\u0627\u0644\u0648\u062D\u062F\u0629 \u0648\u0627\u0644\u0645\u0633\u062A\u0648\u0649\u060C \u0648\u0627\u0633\u062A\u062E\u062F\u0645\u0647\u0627 \u0641\u064A \u0625\u0639\u062F\u0627\u062F \u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A \u062C\u062F\u064A\u062F\u0629 \u0628\u0633\u0647\u0648\u0644\u0629."},{icon:"pi-stopwatch",iconBg:"bg-main-50",title:"\u0625\u0646\u0634\u0627\u0621 \u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A \u0645\u0648\u0642\u0648\u062A\u0629",description:"\u0643\u0648\u0651\u0646 \u0627\u062E\u062A\u0628\u0627\u0631\u064B\u0627 \u0628\u0648\u0642\u062A \u0645\u062D\u062F\u062F\u060C \u0627\u062E\u062A\u0631 \u0646\u0648\u0639 \u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0648\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0635\u0639\u0648\u0628\u0629\u060C \u0648\u0634\u0627\u0631\u0643 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631 \u0645\u0639 \u0627\u0644\u0637\u0644\u0627\u0628 \u0628\u0634\u0643\u0644 \u0645\u0628\u0627\u0634\u0631."},{icon:"pi-book",iconBg:"bg-slate-100",title:"\u0645\u0635\u0645\u0645 \u0644\u0645\u0646\u0647\u062C \u0627\u0644\u062B\u0627\u0646\u0648\u064A\u0629 \u0627\u0644\u0639\u0627\u0645\u0629 \u0627\u0644\u0645\u0635\u0631\u064A\u0629",description:"\u0645\u0646\u0635\u0629 \u0645\u0648\u062C\u0647\u0629 \u062E\u0635\u064A\u0635\u064B\u0627 \u0644\u062F\u0639\u0645 \u0645\u0639\u0644\u0645\u064A \u0648\u0637\u0644\u0627\u0628 \u0627\u0644\u062B\u0627\u0646\u0648\u064A\u0629 \u0627\u0644\u0639\u0627\u0645\u0629 \u0641\u064A \u0645\u0635\u0631\u060C \u0645\u0639 \u0645\u0631\u0627\u0639\u0627\u0629 \u0637\u0628\u064A\u0639\u0629 \u0627\u0644\u0627\u0645\u062A\u062D\u0627\u0646\u0627\u062A \u0648\u0646\u0645\u0637 \u0627\u0644\u0623\u0633\u0626\u0644\u0629."},{icon:"pi-chart-bar",iconBg:"bg-slate-100",title:"\u062A\u0642\u0627\u0631\u064A\u0631 \u0648\u062A\u062D\u0644\u064A\u0644\u0627\u062A \u0648\u0627\u0636\u062D\u0629",description:"\u062A\u0627\u0628\u0639 \u0623\u062F\u0627\u0621 \u0627\u0644\u0637\u0644\u0627\u0628 \u0628\u0633\u0647\u0648\u0644\u0629 \u0645\u0646 \u062E\u0644\u0627\u0644 \u062A\u0642\u0627\u0631\u064A\u0631 \u0645\u0628\u0633\u0637\u0629 \u062A\u0633\u0627\u0639\u062F\u0643 \u0639\u0644\u0649 \u062A\u062D\u062F\u064A\u062F \u0646\u0642\u0627\u0637 \u0627\u0644\u0642\u0648\u0629 \u0648\u0627\u0644\u0627\u062D\u062A\u064A\u0627\u062C \u0625\u0644\u0649 \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629."},{icon:"pi-mobile",iconBg:"bg-slate-100",title:"\u0645\u062A\u0648\u0627\u0641\u0642 \u0645\u0639 \u062C\u0645\u064A\u0639 \u0627\u0644\u0623\u062C\u0647\u0632\u0629",description:"\u0627\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0645\u0646\u0635\u0629 \u0628\u0643\u0641\u0627\u0621\u0629 \u0645\u0646 \u0627\u0644\u062D\u0627\u0633\u0648\u0628 \u0623\u0648 \u0627\u0644\u0647\u0627\u062A\u0641 \u062F\u0648\u0646 \u0627\u0644\u062A\u0623\u062B\u064A\u0631 \u0639\u0644\u0649 \u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0623\u0648 \u0627\u0644\u0623\u062F\u0627\u0621."}];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=f({type:t,selectors:[["soual-features"]],hostAttrs:[1,"block"],decls:21,vars:0,consts:[[1,"py-16","lg:py-22"],[1,"container"],[1,"max-w-3xl","mx-auto","space-y-6","mb-16","lg:mb-20","text-center"],[1,"inline-flex","items-center","gap-2","px-3","py-1","bg-slate-100","rounded-full","border","border-slate-200"],[1,"w-2","h-2","rounded-full","bg-main-600"],[1,"text-xs","font-medium","text-slate-700","tracking-wide"],[1,"text-4xl","lg:text-5xl","font-bold","text-slate-900","leading-tight"],[1,"relative","inline-block","mt-2"],[1,"relative","z-10","text-main-700"],[1,"max-[481px]:hidden","absolute","bottom-2","inset-x-0","h-3","bg-main-100","opacity-50"],[1,"text-xl","text-slate-500","leading-relaxed","font-light","max-w-2xl","mx-auto"],[1,"grid","lg:grid-cols-3","gap-8","mb-8"],[1,"group","overflow-hidden","relative","h-full","border","border-slate-200","rounded-xl","p-8","transition-all","duration-300","hover:border-main-200","hover:shadow-xl","hover:shadow-slate-200/40"],[1,"grid","md:grid-cols-3","gap-6"],[1,"bg-slate-50","rounded-xl","p-5","border","border-slate-100","flex","items-start","gap-4","hover:bg-white","hover:border-slate-200","hover:shadow-sm","transition-all","duration-200"],[1,"absolute","top-0","inset-x-0","h-1","bg-main-600","transform","scale-x-0","group-hover:scale-x-100","transition-transform","duration-300","origin-left"],[1,"mb-6","flex","justify-between","items-start"],[1,"w-14","h-14","rounded-lg","bg-slate-50","border","border-slate-100","flex-center","text-main-700","group-hover:bg-main-50","group-hover:border-main-100","transition-colors","duration-300"],[1,"text-xs","font-mono","text-slate-400","opacity-0","group-hover:opacity-100","transition-opacity","duration-300"],[1,"text-xl","font-bold","text-slate-900","mb-3"],[1,"text-slate-500","leading-relaxed"],[1,"mt-6","flex","items-center","text-main-700","text-sm","font-medium","opacity-0","cursor-pointer","transform","translate-y-2","group-hover:opacity-100","group-hover:translate-y-0","transition-all","duration-300"],[1,"pi","pi-arrow-left","text-xs","mr-2"],[1,"shrink-0","mt-1"],[1,"font-bold","text-slate-800","text-sm","mb-1"],[1,"text-slate-500","text-sm","leading-relaxed"]],template:function(e,n){e&1&&(s(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),x(4,"span",4),s(5,"span",5),i(6,"\u0642\u062F\u0631\u0627\u062A \u0627\u0644\u0645\u0646\u0635\u0629"),d()(),s(7,"h2",6),i(8," \u0643\u0644 \u0645\u0627 \u064A\u062D\u062A\u0627\u062C\u0647 \u0645\u0639\u0644\u0645 \u0627\u0644\u062B\u0627\u0646\u0648\u064A\u0629 \u0627\u0644\u0639\u0627\u0645\u0629 "),s(9,"span",7)(10,"span",8),i(11,"\u0644\u0625\u0639\u062F\u0627\u062F \u0623\u0633\u0626\u0644\u0629 \u062F\u0642\u064A\u0642\u0629 \u0648\u0633\u0631\u064A\u0639\u0629"),d(),x(12,"span",9),d()(),s(13,"p",10),i(14," \u0623\u0646\u0634\u0626 \u0623\u0633\u0626\u0644\u0629 \u0648\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A \u0645\u062A\u0648\u0627\u0641\u0642\u0629 \u0645\u0639 \u0645\u0646\u0647\u062C \u0627\u0644\u062B\u0627\u0646\u0648\u064A\u0629 \u0627\u0644\u0639\u0627\u0645\u0629 \u0627\u0644\u0645\u0635\u0631\u064A\u0629\u060C \u0648\u0646\u0638\u0651\u0645 \u0628\u0646\u0643 \u0623\u0633\u0626\u0644\u062A\u0643 \u0628\u0633\u0647\u0648\u0644\u0629\u060C \u0645\u0639 \u062A\u062D\u0643\u0645 \u0643\u0627\u0645\u0644 \u0641\u064A \u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0635\u0639\u0648\u0628\u0629 \u0648\u0646\u0648\u0639 \u0627\u0644\u0633\u0624\u0627\u0644. "),d()(),s(15,"div",11),O(16,Ot,15,5,"div",12,lt),d(),s(18,"div",13),O(19,$t,8,4,"div",14,lt),d()()()),e&2&&(u(16),$(n.features.slice(0,3)),u(3),$(n.features.slice(3,6)))},encapsulation:2,changeDetection:0})};var zt=(t,o)=>({"border-main-200 bg-main-50/30":t,"border-slate-200 hover:border-slate-300":o}),qt=(t,o)=>({"text-main-700":t,"text-slate-800":o}),Vt=(t,o)=>({"bg-main-100 text-main-600 rotate-180":t,"bg-slate-100 text-slate-500":o}),jt=(t,o)=>({"grid-rows-[1fr] opacity-100":t,"grid-rows-[0fr] opacity-0":o}),Qt=(t,o)=>({"border-main-100":t,"pt-4":o}),Rt=(t,o)=>o.question;function Gt(t,o){if(t&1){let e=D();r(0,"div",9)(1,"button",14),b("click",function(){let a=E(e).$index,m=h();return C(m.toggle(a))}),r(2,"span",15),i(3),l(),r(4,"span",16),p(5,"i",17),l()(),r(6,"div",18)(7,"div",19)(8,"div",20),i(9),l()()()()}if(t&2){let e=o.$implicit,n=o.$index,a=h();c("ngClass",P(7,zt,a.openIndex()===n,a.openIndex()!==n)),u(2),c("ngClass",P(10,qt,a.openIndex()===n,a.openIndex()!==n)),u(),F(" ",e.question," "),u(),c("ngClass",P(13,Vt,a.openIndex()===n,a.openIndex()!==n)),u(2),c("ngClass",P(16,jt,a.openIndex()===n,a.openIndex()!==n)),u(2),c("ngClass",P(19,Qt,a.openIndex()===n,a.openIndex()===n)),u(),F(" ",e.answer," ")}}var le=class t{openIndex=N(0);faqs=[{question:"\u0643\u064A\u0641 \u064A\u0642\u0648\u0645 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0628\u062A\u0648\u0644\u064A\u062F \u0627\u0644\u0623\u0633\u0626\u0644\u0629\u061F",answer:"\u064A\u0642\u0648\u0645 \u0627\u0644\u0646\u0638\u0627\u0645 \u0628\u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0646\u0635 \u0623\u0648 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0645\u0631\u0641\u0642 (PDF) \u0648\u0641\u0647\u0645 \u0627\u0644\u0633\u064A\u0627\u0642 \u0648\u0627\u0644\u0645\u0641\u0627\u0647\u064A\u0645 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629\u060C \u062B\u0645 \u064A\u0642\u0648\u0645 \u0628\u0635\u064A\u0627\u063A\u0629 \u0623\u0633\u0626\u0644\u0629 \u062F\u0642\u064A\u0642\u0629 \u0628\u0646\u0627\u0621\u064B \u0639\u0644\u0649 \u0627\u0644\u0645\u0639\u0627\u064A\u064A\u0631 \u0627\u0644\u062A\u0631\u0628\u0648\u064A\u0629\u060C \u0645\u0639 \u062A\u0648\u0641\u064A\u0631 \u0627\u0644\u0625\u062C\u0627\u0628\u0627\u062A \u0627\u0644\u0635\u062D\u064A\u062D\u0629 \u0648\u0627\u0644\u062A\u0641\u0633\u064A\u0631\u0627\u062A."},{question:"\u0647\u0644 \u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0645\u062A\u0648\u0627\u0641\u0642\u0629 \u0645\u0639 \u0627\u0644\u0645\u0646\u0627\u0647\u062C \u0627\u0644\u062F\u0631\u0627\u0633\u064A\u0629\u061F",answer:"\u0646\u0639\u0645\u060C \u062A\u0645 \u062A\u062F\u0631\u064A\u0628 \u0646\u0645\u0627\u0630\u062C\u0646\u0627 \u0645\u0639 \u0645\u0631\u0627\u0639\u0627\u0629 \u0627\u0644\u0645\u0646\u0627\u0647\u062C \u0627\u0644\u062F\u0631\u0627\u0633\u064A\u0629 \u0641\u064A \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629\u060C \u0648\u064A\u0645\u0643\u0646\u0643 \u062A\u062E\u0635\u064A\u0635 \u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0635\u0639\u0648\u0628\u0629 \u0648\u0646\u0648\u0639 \u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0644\u062A\u0646\u0627\u0633\u0628 \u0627\u0644\u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u064A\u0629 \u0627\u0644\u0645\u0633\u062A\u0647\u062F\u0641\u0629."},{question:"\u0647\u0644 \u064A\u0645\u0643\u0646\u0646\u064A \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0628\u0639\u062F \u062A\u0648\u0644\u064A\u062F\u0647\u0627\u061F",answer:"\u0628\u0627\u0644\u062A\u0623\u0643\u064A\u062F. \u064A\u0645\u0643\u0646\u0643 \u0645\u0631\u0627\u062C\u0639\u0629 \u062C\u0645\u064A\u0639 \u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0645\u0648\u0644\u062F\u0629\u060C \u0648\u062A\u0639\u062F\u064A\u0644 \u0646\u0635 \u0627\u0644\u0633\u0624\u0627\u0644\u060C \u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A\u060C \u0623\u0648 \u0627\u0644\u0625\u062C\u0627\u0628\u0629 \u0627\u0644\u0635\u062D\u064A\u062D\u0629 \u0642\u0628\u0644 \u062D\u0641\u0638\u0647\u0627 \u0641\u064A \u0628\u0646\u0643 \u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0623\u0648 \u0627\u0633\u062A\u062E\u062F\u0627\u0645\u0647\u0627 \u0641\u064A \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A."},{question:"\u0645\u0627 \u0647\u064A \u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u062A\u064A \u064A\u0645\u0643\u0646 \u0625\u0646\u0634\u0627\u0624\u0647\u0627\u061F",answer:"\u064A\u062F\u0639\u0645 \u0627\u0644\u0646\u0638\u0627\u0645 \u062D\u0627\u0644\u064A\u0627\u064B \u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0627\u062E\u062A\u064A\u0627\u0631 \u0645\u0646 \u0645\u062A\u0639\u062F\u062F\u060C \u0627\u0644\u0635\u0648\u0627\u0628 \u0648\u0627\u0644\u062E\u0637\u0623\u060C \u0648\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0645\u0642\u0627\u0644\u064A\u0629 \u0627\u0644\u0642\u0635\u064A\u0631\u0629. \u0648\u0646\u0639\u0645\u0644 \u0639\u0644\u0649 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0632\u064A\u062F \u0645\u0646 \u0627\u0644\u0623\u0646\u0648\u0627\u0639 \u0642\u0631\u064A\u0628\u0627\u064B."},{question:"\u0647\u0644 \u064A\u0645\u0643\u0646 \u0644\u0644\u0637\u0644\u0627\u0628 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0645\u0646\u0635\u0629 \u0645\u0628\u0627\u0634\u0631\u0629\u061F",answer:"\u0646\u0639\u0645\u060C \u064A\u0645\u0643\u0646 \u0644\u0644\u0645\u0639\u0644\u0645\u064A\u0646 \u0645\u0634\u0627\u0631\u0643\u0629 \u0631\u0648\u0627\u0628\u0637 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A \u0645\u0639 \u0627\u0644\u0637\u0644\u0627\u0628\u060C \u0648\u064A\u0645\u0643\u0646 \u0644\u0644\u0637\u0644\u0627\u0628 \u0627\u0644\u062F\u062E\u0648\u0644 \u0644\u062D\u0644 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u062A\u063A\u0630\u064A\u0629 \u0631\u0627\u062C\u0639\u0629 \u0641\u0648\u0631\u064A\u0629 (\u062D\u0633\u0628 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631)."}];toggle(o){this.openIndex.update(e=>e===o?null:o)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=f({type:t,selectors:[["soual-faq"]],hostAttrs:[1,"block"],decls:21,vars:0,consts:[[1,"py-16"],[1,"container","max-w-4xl","mx-auto"],[1,"text-center","mb-12","lg:mb-16"],[1,"inline-flex","items-center","gap-2","px-3","py-1","bg-slate-100","rounded-full","mb-6","border","border-slate-200"],[1,"w-2","h-2","rounded-full","bg-main-500"],[1,"text-xs","font-medium","text-slate","tracking-wide"],[1,"text-3xl","lg:text-4xl","font-bold","text-slate-900","mb-4","tracking-tight"],[1,"text-lg","text-slate-500","font-light"],[1,"space-y-4"],[1,"border","rounded-xl","transition-all","duration-300","overflow-hidden",3,"ngClass"],[1,"mt-12","text-center"],[1,"text-slate-500","mb-4"],["type","button",1,"inline-flex","cursor-pointer","items-center","gap-2","text-main-600","font-bold","hover:text-main-700","hover:underline","transition-all"],[1,"pi","pi-arrow-left","text-xs"],["type","button",1,"w-full","flex-between","p-5","text-right","bg-transparent","focus:outline-hidden",3,"click"],[1,"font-bold","text-lg","transition-colors",3,"ngClass"],[1,"flex-center","cursor-pointer","w-8","h-8","rounded-full","transition-all","duration-300",3,"ngClass"],[1,"pi","pi-chevron-down","text-xs"],[1,"grid","transition-all","duration-300","ease-in-out",3,"ngClass"],[1,"overflow-hidden"],[1,"p-5","pt-0","text-slate-600","leading-relaxed","border-t","border-transparent",3,"ngClass"]],template:function(e,n){e&1&&(r(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),p(4,"span",4),r(5,"span",5),i(6,"\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629 \u0648\u0627\u0644\u062F\u0639\u0645"),l()(),r(7,"h2",6),i(8," \u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629 "),l(),r(9,"p",7),i(10," \u0625\u062C\u0627\u0628\u0627\u062A \u0639\u0644\u0649 \u0623\u0643\u062B\u0631 \u0627\u0644\u0627\u0633\u062A\u0641\u0633\u0627\u0631\u0627\u062A \u0634\u064A\u0648\u0639\u0627\u064B \u062D\u0648\u0644 \u0645\u0646\u0635\u0629 \u0633\u0624\u0627\u0644 "),l()(),r(11,"div",8),O(12,Gt,10,22,"div",9,Rt),l(),r(14,"div",10)(15,"p",11),i(16,"\u0644\u0645 \u062A\u062C\u062F \u0625\u062C\u0627\u0628\u0629 \u0644\u0633\u0624\u0627\u0644\u0643\u061F"),l(),r(17,"button",12)(18,"span"),i(19,"\u062A\u0648\u0627\u0635\u0644 \u0645\u0639 \u0641\u0631\u064A\u0642 \u0627\u0644\u062F\u0639\u0645"),l(),p(20,"i",13),l()()()()),e&2&&(u(12),$(n.faqs))},dependencies:[Y],encapsulation:2,changeDetection:0})};var st=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=f({type:t,selectors:[["soual-home"]],hostAttrs:[1,"block"],decls:5,vars:0,template:function(e,n){e&1&&(p(0,"soual-navbar"),r(1,"main"),p(2,"soual-hero")(3,"soual-features")(4,"soual-faq"),l())},dependencies:[te,re,ae,le],encapsulation:2,changeDetection:0})};export{st as HomeComponent};
