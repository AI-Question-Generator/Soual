import{a as ht,b as Ae}from"./chunk-W6ZCIJIZ.js";import{a as yt,b as Ct}from"./chunk-HN5AEYKC.js";import{c as N}from"./chunk-AV5UDCAC.js";import{a as wt,b as Tt}from"./chunk-LHI7ILZ7.js";import{b as mt}from"./chunk-YH2OIU2Z.js";import{b as dt,c as gt,d as bt,e as fe}from"./chunk-D6AD7SN3.js";import{g as et,h as lt,i as st,j as ue,k as pt,n as De}from"./chunk-37HUCSBR.js";import{c as xt,d as Ve,f as he,g as vt}from"./chunk-NEWTQPT2.js";import{$a as pe,$b as Te,$c as it,$d as ct,Bb as b,Cb as l,Db as je,Eb as qe,Fb as me,Fc as Xe,Gb as Qe,Gc as Ye,Ha as we,Hb as v,Hc as X,Ia as $e,Ib as y,Ic as Se,Jb as Ue,Jc as Y,Ka as p,Kb as Ze,Kc as ee,Lb as B,Ld as at,N as ze,O as ae,Ob as W,Oc as te,P as re,Pb as x,Qb as _,Qd as rt,R as le,Rb as A,Rd as j,Sa as Z,Sc as Oe,Sd as V,T,Tc as tt,Ub as Ke,Vb as We,Vd as de,Wb as Ge,Xa as D,Xd as _e,Y as h,Ya as se,Yb as G,Yd as oe,Z as g,Zb as Je,Zc as nt,Zd as M,_ as Pe,_a as He,_b as H,_c as Ee,_d as Be,a as P,ab as K,bb as d,cd as z,da as S,de as ut,ee as _t,fc as ke,fd as ne,fe as ft,gc as Ie,gd as ce,hb as f,hc as F,hd as ie,ia as Ce,jc as k,kb as O,lb as E,mc as L,na as U,nc as Me,pb as r,qb as s,rb as m,rc as I,sb as u,sc as J,ta as Re,vd as ot,wb as R,xb as $,yb as w,zb as C,zd as Le}from"./chunk-4WTJBRVM.js";var kt=`
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
`;var zt=["header"],Pt=["footer"],Rt=["content"],$t=["closeicon"],Ht=["headless"],jt=["container"],qt=["closeButton"],Qt=["*"];function Ut(t,a){t&1&&w(0)}function Zt(t,a){if(t&1&&d(0,Ut,1,0,"ng-container",4),t&2){let e=l(2);r("ngTemplateOutlet",e.headlessTemplate||e._headlessTemplate)}}function Kt(t,a){t&1&&w(0)}function Wt(t,a){if(t&1&&(s(0,"div",9),_(1),m()),t&2){let e=l(3);x(e.cx("title")),r("pBind",e.ptm("title")),p(),A(e.header)}}function Gt(t,a){t&1&&(Pe(),u(0,"svg",12)),t&2&&f("data-pc-section","closeicon")}function Jt(t,a){}function Xt(t,a){t&1&&d(0,Jt,0,0,"ng-template")}function Yt(t,a){if(t&1&&d(0,Gt,1,1,"svg",11)(1,Xt,1,0,null,4),t&2){let e=l(4);r("ngIf",!e.closeIconTemplate&&!e._closeIconTemplate),p(),r("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function en(t,a){if(t&1){let e=C();s(0,"p-button",10),b("onClick",function(i){h(e);let o=l(3);return g(o.close(i))})("keydown.enter",function(i){h(e);let o=l(3);return g(o.close(i))}),d(1,Yt,2,2,"ng-template",null,1,F),m()}if(t&2){let e=l(3);r("pt",e.ptm("pcCloseButton"))("ngClass",e.cx("pcCloseButton"))("buttonProps",e.closeButtonProps)("ariaLabel",e.ariaCloseLabel)("unstyled",e.unstyled()),f("data-pc-group-section","iconcontainer")}}function tn(t,a){t&1&&w(0)}function nn(t,a){t&1&&w(0)}function on(t,a){if(t&1&&(R(0),s(1,"div",5),d(2,nn,1,0,"ng-container",4),m(),$()),t&2){let e=l(3);p(),r("pBind",e.ptm("footer"))("ngClass",e.cx("footer")),f("data-pc-section","footer"),p(),r("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}function an(t,a){if(t&1&&(s(0,"div",5),d(1,Kt,1,0,"ng-container",4)(2,Wt,2,4,"div",6)(3,en,3,6,"p-button",7),m(),s(4,"div",5),qe(5),d(6,tn,1,0,"ng-container",4),m(),d(7,on,3,4,"ng-container",8)),t&2){let e=l(2);r("pBind",e.ptm("header"))("ngClass",e.cx("header")),f("data-pc-section","header"),p(),r("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),p(),r("ngIf",e.header),p(),r("ngIf",e.showCloseIcon&&e.closable),p(),r("pBind",e.ptm("content"))("ngClass",e.cx("content")),f("data-pc-section","content"),p(2),r("ngTemplateOutlet",e.contentTemplate||e._contentTemplate),p(),r("ngIf",e.footerTemplate||e._footerTemplate)}}function rn(t,a){if(t&1){let e=C();s(0,"div",3,0),b("pMotionOnBeforeEnter",function(i){h(e);let o=l();return g(o.onBeforeEnter(i))})("pMotionOnAfterLeave",function(i){h(e);let o=l();return g(o.onAfterLeave(i))})("keydown",function(i){h(e);let o=l();return g(o.onKeyDown(i))}),O(2,Zt,1,1,"ng-container")(3,an,8,11),m()}if(t&2){let e=l();W(e.style),x(e.cn(e.cx("root"),e.styleClass)),r("pBind",e.ptm("root"))("pMotion",e.visible)("pMotionAppear",!0)("pMotionEnterActiveClass",e.$enterAnimation())("pMotionLeaveActiveClass",e.$leaveAnimation())("pMotionOptions",e.computedMotionOptions()),f("data-p",e.dataP)("data-p-open",e.visible),p(2),E(e.headlessTemplate||e._headlessTemplate?2:3)}}var ln=`
${kt}

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
`,sn={mask:({instance:t})=>["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter-active":t.modal},{"p-drawer-full":t.fullScreen()}],root:({instance:t})=>["p-drawer p-component",{"p-drawer-full":t.fullScreen(),"p-drawer-open":t.visible},`p-drawer-${t.position()}`],header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},It=(()=>{class t extends de{name="drawer";style=ln;classes=sn;static \u0275fac=(()=>{let e;return function(i){return(e||(e=U(t)))(i||t)}})();static \u0275prov=ae({token:t,factory:t.\u0275fac})}return t})();var Mt=new le("DRAWER_INSTANCE"),Fe=(()=>{class t extends oe{componentName="Drawer";$pcDrawer=T(Mt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=T(M,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}appendTo=L(void 0);motionOptions=L(void 0);computedMotionOptions=k(()=>P(P({},this.ptm("motion")),this.motionOptions()));blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;closeButtonProps={severity:"secondary",text:!0,rounded:!0};dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible??!1}set visible(e){this._visible=e,this._visible&&!this.modalVisible&&(this.modalVisible=!0)}position=L("left");fullScreen=L(!1);$enterAnimation=k(()=>this.fullScreen()?"p-drawer-enter-full":`p-drawer-enter-${this.position()}`);$leaveAnimation=k(()=>this.fullScreen()?"p-drawer-leave-full":`p-drawer-leave-${this.position()}`);header;maskStyle;closable=!0;onShow=new S;onHide=new S;visibleChange=new S;containerViewChild;closeButtonViewChild;initialized;_visible;_position="left";_fullScreen=!1;modalVisible=!1;container;mask;maskClickListener;documentEscapeListener;animationEndListener;_componentStyle=T(It);onAfterViewInit(){this.initialized=!0}headerTemplate;footerTemplate;contentTemplate;closeIconTemplate;headlessTemplate;$appendTo=k(()=>this.appendTo()||this.config.overlayAppendTo());_headerTemplate;_footerTemplate;_contentTemplate;_closeIconTemplate;_headlessTemplate;templates;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break;case"headless":this._headlessTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}onKeyDown(e){e.code==="Escape"&&this.hide(!1)}show(){this.container?.setAttribute(this.$attrSelector,""),this.autoZIndex&&N.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(e=!0){e&&this.onHide.emit({}),this.modal&&this.disableModality()}close(e){this.hide(),this.visibleChange.emit(!1),e.preventDefault()}enableModality(){let e=this.document.querySelectorAll('[data-p-open="true"]'),n=e.length,i=n==1?String(parseInt(this.container.style.zIndex)-1):String(parseInt(e[n-1].style.zIndex)-1);if(!this.mask){if(this.mask=this.renderer.createElement("div"),this.mask){let o=`z-index: ${i};${this.getMaskStyle()}`;Le(this.mask,"style",o),Le(this.mask,"data-p",this.dataP),Oe(this.mask,this.cx("mask"))}this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",o=>{this.dismissible&&this.close(o)})),this.renderer.appendChild(this.document.body,this.mask),this.blockScroll&&ut()}}getMaskStyle(){return this.maskStyle?Object.entries(this.maskStyle).map(([e,n])=>`${e}: ${n}`).join("; "):""}disableModality(){this.mask&&(!this.$unstyled()&&tt(this.mask,"p-overlay-mask-enter-active"),!this.$unstyled()&&Oe(this.mask,"p-overlay-mask-leave-active"),this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyModal.bind(this)))}destroyModal(){this.unbindMaskClickListener(),this.mask&&this.renderer.removeChild(this.document.body,this.mask),this.blockScroll&&_t(),this.unbindAnimationEndListener(),this.mask=null}onBeforeEnter(e){this.container=e.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener()}onAfterLeave(){this.hide(!1),N.clear(this.container),this.unbindGlobalListeners(),this.modalVisible=!1,this.container=null}appendContainer(){this.$appendTo()&&this.$appendTo()!=="self"&&(this.$appendTo()==="body"?z(this.document.body,this.container):z(this.$appendTo(),this.container))}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(e,"keydown",n=>{n.which==27&&parseInt(this.container?.style.zIndex)===N.get(this.container)&&this.close(n)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}onDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.$appendTo()&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&N.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}get dataP(){return this.cn({"full-screen":this.position()==="full",[this.position()]:this.position(),open:this.visible,modal:this.modal})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=U(t)))(i||t)}})();static \u0275cmp=D({type:t,selectors:[["p-drawer"]],contentQueries:function(n,i,o){if(n&1&&me(o,zt,4)(o,Pt,4)(o,Rt,4)(o,$t,4)(o,Ht,4)(o,j,4),n&2){let c;v(c=y())&&(i.headerTemplate=c.first),v(c=y())&&(i.footerTemplate=c.first),v(c=y())&&(i.contentTemplate=c.first),v(c=y())&&(i.closeIconTemplate=c.first),v(c=y())&&(i.headlessTemplate=c.first),v(c=y())&&(i.templates=c)}},viewQuery:function(n,i){if(n&1&&Qe(jt,5)(qt,5),n&2){let o;v(o=y())&&(i.containerViewChild=o.first),v(o=y())&&(i.closeButtonViewChild=o.first)}},inputs:{appendTo:[1,"appendTo"],motionOptions:[1,"motionOptions"],blockScroll:[2,"blockScroll","blockScroll",I],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",I],baseZIndex:[2,"baseZIndex","baseZIndex",J],modal:[2,"modal","modal",I],closeButtonProps:"closeButtonProps",dismissible:[2,"dismissible","dismissible",I],showCloseIcon:[2,"showCloseIcon","showCloseIcon",I],closeOnEscape:[2,"closeOnEscape","closeOnEscape",I],transitionOptions:"transitionOptions",visible:"visible",position:[1,"position"],fullScreen:[1,"fullScreen"],header:"header",maskStyle:"maskStyle",closable:[2,"closable","closable",I]},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},features:[G([It,{provide:Mt,useExisting:t},{provide:_e,useExisting:t}]),pe([M]),K],ngContentSelectors:Qt,decls:1,vars:1,consts:[["container",""],["icon",""],["role","complementary","pFocusTrap","",3,"pBind","pMotion","pMotionAppear","pMotionEnterActiveClass","pMotionLeaveActiveClass","pMotionOptions","class","style"],["role","complementary","pFocusTrap","",3,"pMotionOnBeforeEnter","pMotionOnAfterLeave","keydown","pBind","pMotion","pMotionAppear","pMotionEnterActiveClass","pMotionLeaveActiveClass","pMotionOptions"],[4,"ngTemplateOutlet"],[3,"pBind","ngClass"],[3,"pBind","class",4,"ngIf"],[3,"pt","ngClass","buttonProps","ariaLabel","unstyled","onClick","keydown.enter",4,"ngIf"],[4,"ngIf"],[3,"pBind"],[3,"onClick","keydown.enter","pt","ngClass","buttonProps","ariaLabel","unstyled"],["data-p-icon","times",4,"ngIf"],["data-p-icon","times"]],template:function(n,i){n&1&&(je(),O(0,rn,4,13,"div",2)),n&2&&E(i.modalVisible?0:-1)},dependencies:[ee,Xe,X,Y,he,dt,V,M,Ct,yt,fe,bt],encapsulation:2,changeDetection:0})}return t})(),St=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=se({type:t});static \u0275inj=re({imports:[Fe,V,V]})}return t})();var Ot=`
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
`;var cn=["pMenuItemContent",""],be=t=>({$implicit:t}),dn=()=>({exact:!1}),un=t=>({item:t});function _n(t,a){t&1&&w(0)}function fn(t,a){if(t&1&&(s(0,"a",6),d(1,_n,1,0,"ng-container",7),m()),t&2){let e=l(2),n=B(4);x(e.cn(e.cx("itemLink"),e.item==null?null:e.item.linkClass)),r("ngStyle",e.item==null?null:e.item.linkStyle)("target",e.item.target)("pBind",e.getPTOptions("itemLink")),f("title",e.item.title)("href",e.item.url||null,$e)("data-automationid",e.item.automationId)("tabindex",-1),p(),r("ngTemplateOutlet",n)("ngTemplateOutletContext",H(11,be,e.item))}}function hn(t,a){t&1&&w(0)}function gn(t,a){if(t&1&&(s(0,"a",8),d(1,hn,1,0,"ng-container",7),m()),t&2){let e=l(2),n=B(4);x(e.cn(e.cx("itemLink"),e.item==null?null:e.item.linkClass)),r("routerLink",e.item.routerLink)("queryParams",e.item.queryParams)("routerLinkActiveOptions",e.item.routerLinkActiveOptions||Je(19,dn))("ngStyle",e.item==null?null:e.item.linkStyle)("target",e.item.target)("fragment",e.item.fragment)("queryParamsHandling",e.item.queryParamsHandling)("preserveFragment",e.item.preserveFragment)("skipLocationChange",e.item.skipLocationChange)("replaceUrl",e.item.replaceUrl)("state",e.item.state)("pBind",e.getPTOptions("itemLink")),f("data-automationid",e.item.automationId)("tabindex",-1)("title",e.item.title),p(),r("ngTemplateOutlet",n)("ngTemplateOutletContext",H(20,be,e.item))}}function bn(t,a){if(t&1&&(R(0),d(1,fn,2,13,"a",4)(2,gn,2,22,"a",5),$()),t&2){let e=l();p(),r("ngIf",!(e.item!=null&&e.item.routerLink)),p(),r("ngIf",e.item==null?null:e.item.routerLink)}}function xn(t,a){}function vn(t,a){t&1&&d(0,xn,0,0,"ng-template")}function yn(t,a){if(t&1&&(R(0),d(1,vn,1,0,null,7),$()),t&2){let e=l();p(),r("ngTemplateOutlet",e.itemTemplate)("ngTemplateOutletContext",H(2,be,e.item))}}function Cn(t,a){if(t&1&&u(0,"span",12),t&2){let e=l(2);x(e.cn(e.cx("itemIcon",H(5,un,e.item)),e.item.iconClass)),r("pBind",e.getPTOptions("itemIcon"))("ngStyle",e.item.iconStyle),f("data-pc-section","itemicon")}}function wn(t,a){if(t&1&&(s(0,"span",13),_(1),m()),t&2){let e=l(2);x(e.cn(e.cx("itemLabel"),e.item.labelClass)),r("ngStyle",e.item.labelStyle)("pBind",e.getPTOptions("itemLabel")),f("data-pc-section","itemlabel"),p(),A(e.item.label)}}function Tn(t,a){if(t&1&&(u(0,"span",14),ke(1,"safeHtml")),t&2){let e=l(2);x(e.cn(e.cx("itemLabel"),e.item.labelClass)),r("ngStyle",e.item.labelStyle)("innerHTML",Ie(1,6,e.item.label),we)("pBind",e.getPTOptions("itemLabel")),f("data-pc-section","itemlabel")}}function kn(t,a){if(t&1&&u(0,"p-badge",15),t&2){let e=l(2);r("styleClass",e.item.badgeStyleClass)("value",e.item.badge)("pt",e.getPTOptions("pcBadge"))("unstyled",e.unstyled())}}function In(t,a){if(t&1&&d(0,Cn,1,7,"span",9)(1,wn,2,6,"span",10)(2,Tn,2,8,"ng-template",null,1,F)(4,kn,1,4,"p-badge",11),t&2){let e=B(3),n=l();r("ngIf",n.item.icon),p(),r("ngIf",n.item.escape!==!1)("ngIfElse",e),p(3),r("ngIf",n.item.badge)}}var Mn=["start"],Sn=["end"],On=["header"],En=["item"],Ln=["submenuheader"],Dn=["list"],Bn=["container"],Lt=(t,a)=>({item:t,id:a});function An(t,a){t&1&&w(0)}function Vn(t,a){if(t&1){let e=C();s(0,"p-motion",5),b("onBeforeEnter",function(i){h(e);let o=l();return g(o.onOverlayBeforeEnter(i))})("onAfterLeave",function(){h(e);let i=l();return g(i.onOverlayAfterLeave())}),d(1,An,1,0,"ng-container",6),m()}if(t&2){let e=l(),n=B(3);r("visible",e.visible)("appear",e.popup)("options",e.computedMotionOptions()),p(),r("ngTemplateOutlet",n)}}function Nn(t,a){t&1&&w(0)}function Fn(t,a){if(t&1&&d(0,Nn,1,0,"ng-container",6),t&2){l();let e=B(3);r("ngTemplateOutlet",e)}}function zn(t,a){t&1&&w(0)}function Pn(t,a){if(t&1&&(s(0,"div",11),d(1,zn,1,0,"ng-container",6),m()),t&2){let e=l(2);x(e.cx("start")),r("pBind",e.ptm("start")),f("data-pc-section","start"),p(),r("ngTemplateOutlet",e.startTemplate??e._startTemplate)}}function Rn(t,a){if(t&1&&u(0,"li",15),t&2){let e=l(4);x(e.cx("separator")),r("pBind",e.ptm("separator")),f("data-pc-section","separator")}}function $n(t,a){if(t&1&&(s(0,"span"),_(1),m()),t&2){let e=l(3).$implicit;p(),A(e.label)}}function Hn(t,a){if(t&1&&(u(0,"span",19),ke(1,"safeHtml")),t&2){let e=l(3).$implicit;r("innerHTML",Ie(1,1,e.label),we)}}function jn(t,a){if(t&1&&(R(0),d(1,$n,2,1,"span",18)(2,Hn,2,3,"ng-template",null,3,F),$()),t&2){let e=B(3),n=l(2).$implicit;p(),r("ngIf",n.escape!==!1)("ngIfElse",e)}}function qn(t,a){t&1&&w(0)}function Qn(t,a){if(t&1&&(s(0,"li",16),d(1,jn,4,2,"ng-container",10)(2,qn,1,0,"ng-container",17),m()),t&2){let e=l(),n=e.$implicit,i=e.index,o=l(3);x(o.cx("submenuLabel")),r("pBind",o.ptm("submenuLabel"))("tooltipOptions",n.tooltipOptions)("pTooltipUnstyled",o.unstyled()),f("data-automationid",n.automationId)("id",o.menuitemId(n,o.id,i))("data-pc-section","submenulabel"),p(),r("ngIf",!o.submenuHeaderTemplate&&!o._submenuHeaderTemplate),p(),r("ngTemplateOutlet",o.submenuHeaderTemplate??o._submenuHeaderTemplate)("ngTemplateOutletContext",H(11,be,n))}}function Un(t,a){if(t&1&&u(0,"li",15),t&2){let e=l(5);x(e.cx("separator")),r("pBind",e.ptm("separator")),f("data-pc-section","separator")}}function Zn(t,a){if(t&1){let e=C();s(0,"li",21),b("onMenuItemClick",function(i){h(e);let o=l(),c=o.$implicit,q=o.index,Q=l().index,ye=l(3);return g(ye.itemClick(i,ye.menuitemId(c,ye.id,Q,q)))}),m()}if(t&2){let e=l(),n=e.$implicit,i=e.index,o=l().index,c=l(3);W(n.style),x(c.cn(c.cx("item",Te(17,Lt,n,c.menuitemId(n,c.id,o,i))),n==null?null:n.styleClass)),r("pBind",c.ptm("item"))("pMenuItemContent",n)("itemTemplate",c.itemTemplate??c._itemTemplate)("idx",i)("menuitemId",c.menuitemId(n,c.id,o,i))("tooltipOptions",n.tooltipOptions)("pTooltipUnstyled",c.unstyled())("unstyled",c.unstyled()),f("aria-label",c.label(n.label))("data-p-focused",c.isItemFocused(c.menuitemId(n,c.id,o,i)))("data-p-disabled",c.disabled(n.disabled))("aria-disabled",c.disabled(n.disabled))("id",c.menuitemId(n,c.id,o,i))}}function Kn(t,a){if(t&1&&d(0,Un,1,4,"li",13)(1,Zn,1,20,"li",20),t&2){let e=a.$implicit,n=l().$implicit;r("ngIf",e.separator&&(e.visible!==!1||n.visible!==!1)),p(),r("ngIf",!e.separator&&e.visible!==!1&&(e.visible!==void 0||n.visible!==!1))}}function Wn(t,a){if(t&1&&d(0,Rn,1,4,"li",13)(1,Qn,3,13,"li",14)(2,Kn,2,2,"ng-template",12),t&2){let e=a.$implicit;r("ngIf",e.separator&&e.visible!==!1),p(),r("ngIf",!e.separator),p(),r("ngForOf",e.items)}}function Gn(t,a){if(t&1&&d(0,Wn,3,3,"ng-template",12),t&2){let e=l(2);r("ngForOf",e.model)}}function Jn(t,a){if(t&1&&u(0,"li",15),t&2){let e=l(4);x(e.cx("separator")),r("pBind",e.ptm("separator")),f("data-pc-section","separator")}}function Xn(t,a){if(t&1){let e=C();s(0,"li",23),b("onMenuItemClick",function(i){h(e);let o=l(),c=o.$implicit,q=o.index,Q=l(3);return g(Q.itemClick(i,Q.menuitemId(c,Q.id,q)))}),m()}if(t&2){let e=l(),n=e.$implicit,i=e.index,o=l(3);x(o.cn(o.cx("item",Te(16,Lt,n,o.menuitemId(n,o.id,i))),n==null?null:n.styleClass)),r("pBind",o.ptm("item"))("pMenuItemContent",n)("itemTemplate",o.itemTemplate??o._itemTemplate)("idx",i)("menuitemId",o.menuitemId(n,o.id,i))("ngStyle",n.style)("tooltipOptions",n.tooltipOptions)("unstyled",o.unstyled())("pTooltipUnstyled",o.unstyled()),f("aria-label",o.label(n.label))("data-p-focused",o.isItemFocused(o.menuitemId(n,o.id,i)))("data-p-disabled",o.disabled(n.disabled))("aria-disabled",o.disabled(n.disabled))("id",o.menuitemId(n,o.id,i))}}function Yn(t,a){if(t&1&&d(0,Jn,1,4,"li",13)(1,Xn,1,19,"li",22),t&2){let e=a.$implicit;r("ngIf",e.separator&&e.visible!==!1),p(),r("ngIf",!e.separator&&e.visible!==!1)}}function ei(t,a){if(t&1&&d(0,Yn,2,2,"ng-template",12),t&2){let e=l(2);r("ngForOf",e.model)}}function ti(t,a){t&1&&w(0)}function ni(t,a){if(t&1&&(s(0,"div",11),d(1,ti,1,0,"ng-container",6),m()),t&2){let e=l(2);x(e.cx("end")),r("pBind",e.ptm("end")),f("data-pc-section","end"),p(),r("ngTemplateOutlet",e.endTemplate??e._endTemplate)}}function ii(t,a){if(t&1){let e=C();s(0,"div",7,1),b("click",function(i){h(e);let o=l();return g(o.onOverlayClick(i))}),d(2,Pn,2,5,"div",8),s(3,"ul",9,2),b("focus",function(i){h(e);let o=l();return g(o.onListFocus(i))})("blur",function(i){h(e);let o=l();return g(o.onListBlur(i))})("keydown",function(i){h(e);let o=l();return g(o.onListKeyDown(i))}),d(5,Gn,1,1,null,10)(6,ei,1,1,null,10),m(),d(7,ni,2,5,"div",8),m()}if(t&2){let e=l();W(e.sx("root")),x(e.cn(e.cx("root"),e.styleClass)),r("ngStyle",e.style)("pBind",e.ptm("root")),f("id",e.id)("data-p",e.dataP),p(2),r("ngIf",e.startTemplate??e._startTemplate),p(),x(e.cx("list")),r("pBind",e.ptm("list")),f("id",e.id+"_list")("tabindex",e.getTabIndexValue())("data-pc-section","menu")("aria-activedescendant",e.activedescendant())("aria-label",e.ariaLabel)("aria-labelledBy",e.ariaLabelledBy),p(2),r("ngIf",e.hasSubMenu()),p(),r("ngIf",!e.hasSubMenu()),p(),r("ngIf",e.endTemplate??e._endTemplate)}}var oi={root:({instance:t})=>({position:t.popup?"absolute":"relative"})},ai={root:({instance:t})=>["p-menu p-component",{"p-menu-overlay":t.popup}],start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:({instance:t,item:a,id:e})=>["p-menu-item",{"p-focus":t.focusedOptionId()&&e===t.focusedOptionId(),"p-disabled":t.disabled(a.disabled)},a.styleClass],itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:({item:t})=>["p-menu-item-icon",t.icon,t.iconClass],itemLabel:"p-menu-item-label"},ge=(()=>{class t extends de{name="menu";style=Ot;classes=ai;inlineStyles=oi;static \u0275fac=(()=>{let e;return function(i){return(e||(e=U(t)))(i||t)}})();static \u0275prov=ae({token:t,factory:t.\u0275fac})}return t})();var Et=new le("MENU_INSTANCE"),Dt=(()=>{class t{platformId;sanitizer;constructor(e,n){this.platformId=e,this.sanitizer=n}transform(e){return!e||!te(this.platformId)?e:this.sanitizer.bypassSecurityTrustHtml(e)}static \u0275fac=function(n){return new(n||t)(Z(Re,16),Z(et,16))};static \u0275pipe=He({name:"safeHtml",type:t,pure:!0})}return t})(),ri=(()=>{class t extends oe{item;itemTemplate;menuitemId=L("");idx=L(0);onMenuItemClick=new S;menu;_componentStyle=T(ge);hostName="Menu";constructor(e){super(),this.menu=e}onItemClick(e,n){this.onMenuItemClick.emit({originalEvent:e,item:n})}getPTOptions(e){return this.menu.getPTOptions(e,this.item,this.idx(),this.menuitemId())}static \u0275fac=function(n){return new(n||t)(Z(ze(()=>xe)))};static \u0275cmp=D({type:t,selectors:[["","pMenuItemContent",""]],inputs:{item:[0,"pMenuItemContent","item"],itemTemplate:"itemTemplate",menuitemId:[1,"menuitemId"],idx:[1,"idx"]},outputs:{onMenuItemClick:"onMenuItemClick"},features:[G([ge]),K],attrs:cn,decls:5,vars:6,consts:[["itemContent",""],["htmlLabel",""],[3,"click","pBind"],[4,"ngIf"],["pRipple","",3,"class","ngStyle","target","pBind",4,"ngIf"],["routerLinkActive","p-menu-item-link-active","pRipple","",3,"routerLink","queryParams","routerLinkActiveOptions","class","ngStyle","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind",4,"ngIf"],["pRipple","",3,"ngStyle","target","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["routerLinkActive","p-menu-item-link-active","pRipple","",3,"routerLink","queryParams","routerLinkActiveOptions","ngStyle","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind"],[3,"class","pBind","ngStyle",4,"ngIf"],[3,"class","ngStyle","pBind",4,"ngIf","ngIfElse"],[3,"styleClass","value","pt","unstyled",4,"ngIf"],[3,"pBind","ngStyle"],[3,"ngStyle","pBind"],[3,"ngStyle","innerHTML","pBind"],[3,"styleClass","value","pt","unstyled"]],template:function(n,i){if(n&1){let o=C();s(0,"div",2),b("click",function(q){return h(o),g(i.onItemClick(q,i.item))}),d(1,bn,3,2,"ng-container",3)(2,yn,2,4,"ng-container",3)(3,In,5,4,"ng-template",null,0,F),m()}n&2&&(x(i.cx("itemContent")),r("pBind",i.getPTOptions("itemContent")),f("data-pc-section","content"),p(),r("ngIf",!i.itemTemplate),p(),r("ngIf",i.itemTemplate))},dependencies:[ee,X,Y,Se,De,ue,pt,ct,Ae,M,Ve,xt,V,Be,Dt],encapsulation:2})}return t})(),xe=(()=>{class t extends oe{overlayService;componentName="Menu";model;popup;style;styleClass;autoZIndex=!0;baseZIndex=0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";ariaLabel;ariaLabelledBy;id;tabindex=0;appendTo=L(void 0);motionOptions=L(void 0);computedMotionOptions=k(()=>P(P({},this.ptm("motion")),this.motionOptions()));onShow=new S;onHide=new S;onBlur=new S;onFocus=new S;listViewChild=Me("list");containerViewChild=Me("container");$appendTo=k(()=>this.appendTo()||this.config.overlayAppendTo());container;scrollHandler;documentClickListener;documentResizeListener;preventDocumentDefault;target;visible;focusedOptionId=k(()=>this.focusedOptionIndex()!==-1?this.focusedOptionIndex():null);focusedOptionIndex=Ce(-1);selectedOptionIndex=Ce(-1);focused=!1;overlayVisible=!1;$pcMenu=T(Et,{optional:!0,skipSelf:!0})??void 0;_componentStyle=T(ge);bindDirectiveInstance=T(M,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}constructor(e){super(),this.overlayService=e,this.id=this.id||at("pn_id_")}getPTOptions(e,n,i,o){return this.ptm(e,{context:{item:n,index:i,focused:this.isItemFocused(o),disabled:this.disabled(n.disabled)}})}toggle(e){this.visible?this.hide():this.show(e),this.preventDocumentDefault=!0}show(e){this.container&&!this.overlayVisible&&(this.container=void 0),this.target=e.currentTarget,this.visible=!0,this.preventDocumentDefault=!0,this.overlayVisible=!0,this.cd.markForCheck()}onInit(){this.popup||this.bindDocumentClickListener()}startTemplate;_startTemplate;endTemplate;_endTemplate;headerTemplate;_headerTemplate;itemTemplate;_itemTemplate;submenuHeaderTemplate;_submenuHeaderTemplate;templates;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;case"submenuheader":this._submenuHeaderTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}getTabIndexValue(){return this.tabindex!==void 0?this.tabindex.toString():null}onOverlayBeforeEnter(e){if(this.container=e.element,this.container){let n=it(this.containerViewChild()?.nativeElement);Ee(this.container,{width:n+"px"}),Ee(this.container,{position:"absolute",top:"0"}),this.appendOverlay(),this.moveOnTop(),this.$attrSelector&&this.container?.setAttribute(this.$attrSelector,""),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),nt(this.container,this.target),ie(this.listViewChild()?.nativeElement),this.onShow.emit({})}}onOverlayAfterLeave(){this.restoreOverlayAppend(),this.onOverlayHide(),this.onHide.emit({})}appendOverlay(){this.$appendTo()&&this.$appendTo()!=="self"&&(this.$appendTo()==="body"?z(this.document.body,this.container):z(this.$appendTo(),this.container))}restoreOverlayAppend(){this.container&&this.$appendTo()!=="self"&&z(this.el.nativeElement,this.container)}moveOnTop(){this.autoZIndex&&N.set("menu",this.container,this.baseZIndex+this.config.zIndex.menu)}hide(){this.visible=!1,this.overlayVisible=!1,this.cd.markForCheck()}onWindowResize(){this.visible&&!ot()&&this.hide()}menuitemId(e,n,i,o){return e?.id??`${n}_${i}${o!==void 0?"_"+o:""}`}isItemFocused(e){return this.focusedOptionId()===e}label(e){return typeof e=="function"?e():e}disabled(e){return typeof e=="function"?e():typeof e>"u"?!1:e}activedescendant(){return this.focused?this.focusedOptionId():void 0}onListFocus(e){this.focused||(this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.onFocus.emit(e))}onListBlur(e){this.focused&&(this.focused=!1,this.changeFocusedOptionIndex(-1),this.selectedOptionIndex.set(-1),this.focusedOptionIndex.set(-1),this.onBlur.emit(e))}onListKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":this.onEnterKey(e);break;case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":case"Tab":this.popup&&(ie(this.target),this.hide()),this.overlayVisible&&this.hide();break;default:break}}onArrowDownKey(e){let n=this.findNextOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(n),e.preventDefault()}onArrowUpKey(e){if(e.altKey&&this.popup)ie(this.target),this.hide(),e.preventDefault();else{let n=this.findPrevOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(n),e.preventDefault()}}onHomeKey(e){this.changeFocusedOptionIndex(0),e.preventDefault()}onEndKey(e){this.changeFocusedOptionIndex(ne(this.containerViewChild()?.nativeElement,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),e.preventDefault()}onEnterKey(e){let n=ce(this.containerViewChild()?.nativeElement,`li[id="${`${this.focusedOptionIndex()}`}"]`),i=n&&(ce(n,'[data-pc-section="itemlink"]')||ce(n,"a,button"));this.popup&&ie(this.target),i?i.click():n&&n.click(),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}findNextOptionIndex(e){let i=[...ne(this.containerViewChild()?.nativeElement,'li[data-pc-section="item"][data-p-disabled="false"]')].findIndex(o=>o.id===e);return i>-1?i+1:0}findPrevOptionIndex(e){let i=[...ne(this.containerViewChild()?.nativeElement,'li[data-pc-section="item"][data-p-disabled="false"]')].findIndex(o=>o.id===e);return i>-1?i-1:0}changeFocusedOptionIndex(e){let n=ne(this.containerViewChild()?.nativeElement,'li[data-pc-section="item"][data-p-disabled="false"]');if(n.length>0){let i=e>=n.length?n.length-1:e<0?0:e;i>-1&&this.focusedOptionIndex.set(n[i].getAttribute("id"))}}itemClick(e,n){let{originalEvent:i,item:o}=e;if(this.focused||(this.focused=!0,this.onFocus.emit()),o.disabled){i.preventDefault();return}!o.url&&!o.routerLink&&i.preventDefault(),o.command&&o.command({originalEvent:i,item:o}),this.popup&&this.hide(),!this.popup&&this.focusedOptionIndex()!==n&&this.focusedOptionIndex.set(n)}onOverlayClick(e){this.popup&&this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.preventDocumentDefault=!0}bindDocumentClickListener(){if(!this.documentClickListener&&te(this.platformId)){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentClickListener=this.renderer.listen(e,"click",n=>{let i=this.containerViewChild()?.nativeElement&&!this.containerViewChild()?.nativeElement.contains(n.target),o=!(this.target&&(this.target===n.target||this.target.contains(n.target)));!this.popup&&i&&o&&this.onListBlur(n),this.preventDocumentDefault&&this.overlayVisible&&i&&o&&(this.hide(),this.preventDocumentDefault=!1)})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){if(!this.documentResizeListener&&te(this.platformId)){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){!this.scrollHandler&&te(this.platformId)&&(this.scrollHandler=new ft(this.target,()=>{this.visible&&this.hide()})),this.scrollHandler?.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&(this.scrollHandler.unbindScrollListener(),this.scrollHandler=null)}onOverlayHide(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.preventDocumentDefault=!1,this.cd.destroyed||(this.target=null),this.container&&(this.autoZIndex&&N.clear(this.container),this.container=void 0)}onDestroy(){this.popup&&(this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&(this.autoZIndex&&N.clear(this.container),this.container=void 0),this.restoreOverlayAppend(),this.onOverlayHide()),this.popup||this.unbindDocumentClickListener()}hasSubMenu(){return this.model?.some(e=>e.items)??!1}isItemHidden(e){return e.separator?e.visible===!1||e.items&&e.items.some(n=>n.visible!==!1):e.visible===!1}get dataP(){return this.cn({popup:this.popup})}static \u0275fac=function(n){return new(n||t)(Z(rt))};static \u0275cmp=D({type:t,selectors:[["p-menu"]],contentQueries:function(n,i,o){if(n&1&&me(o,Mn,4)(o,Sn,4)(o,On,4)(o,En,4)(o,Ln,4)(o,j,4),n&2){let c;v(c=y())&&(i.startTemplate=c.first),v(c=y())&&(i.endTemplate=c.first),v(c=y())&&(i.headerTemplate=c.first),v(c=y())&&(i.itemTemplate=c.first),v(c=y())&&(i.submenuHeaderTemplate=c.first),v(c=y())&&(i.templates=c)}},viewQuery:function(n,i){n&1&&Ue(i.listViewChild,Dn,5)(i.containerViewChild,Bn,5),n&2&&Ze(2)},inputs:{model:"model",popup:[2,"popup","popup",I],style:"style",styleClass:"styleClass",autoZIndex:[2,"autoZIndex","autoZIndex",I],baseZIndex:[2,"baseZIndex","baseZIndex",J],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",id:"id",tabindex:[2,"tabindex","tabindex",J],appendTo:[1,"appendTo"],motionOptions:[1,"motionOptions"]},outputs:{onShow:"onShow",onHide:"onHide",onBlur:"onBlur",onFocus:"onFocus"},features:[G([ge,{provide:Et,useExisting:t},{provide:_e,useExisting:t}]),pe([M]),K],decls:4,vars:1,consts:[["sharedcontent",""],["container",""],["list",""],["htmlSubmenuLabel",""],["name","p-anchored-overlay",3,"visible","appear","options"],["name","p-anchored-overlay",3,"onBeforeEnter","onAfterLeave","visible","appear","options"],[4,"ngTemplateOutlet"],[3,"click","ngStyle","pBind"],[3,"class","pBind",4,"ngIf"],["role","menu",3,"focus","blur","keydown","pBind"],[4,"ngIf"],[3,"pBind"],["ngFor","",3,"ngForOf"],["role","separator",3,"class","pBind",4,"ngIf"],["pTooltip","","role","none",3,"class","pBind","tooltipOptions","pTooltipUnstyled",4,"ngIf"],["role","separator",3,"pBind"],["pTooltip","","role","none",3,"pBind","tooltipOptions","pTooltipUnstyled"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"innerHTML"],["pTooltip","","role","menuitem",3,"class","pBind","pMenuItemContent","itemTemplate","idx","menuitemId","style","tooltipOptions","pTooltipUnstyled","unstyled","onMenuItemClick",4,"ngIf"],["pTooltip","","role","menuitem",3,"onMenuItemClick","pBind","pMenuItemContent","itemTemplate","idx","menuitemId","tooltipOptions","pTooltipUnstyled","unstyled"],["pTooltip","","role","menuitem",3,"class","pBind","pMenuItemContent","itemTemplate","idx","menuitemId","ngStyle","tooltipOptions","unstyled","pTooltipUnstyled","onMenuItemClick",4,"ngIf"],["pTooltip","","role","menuitem",3,"onMenuItemClick","pBind","pMenuItemContent","itemTemplate","idx","menuitemId","ngStyle","tooltipOptions","unstyled","pTooltipUnstyled"]],template:function(n,i){n&1&&(O(0,Vn,2,4,"p-motion",4)(1,Fn,1,1,"ng-container"),d(2,ii,8,21,"ng-template",null,0,F)),n&2&&E(i.popup?0:1)},dependencies:[ee,Ye,X,Y,Se,De,ri,Ae,ht,M,Ve,V,Be,fe,gt,Dt],encapsulation:2,changeDetection:0})}return t})(),Bt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=se({type:t});static \u0275inj=re({imports:[xe,V,V]})}return t})();function pi(t,a){if(t&1){let e=C();s(0,"button",33),b("click",function(i){h(e);let o=B(6);return g(o.toggle(i))}),u(1,"p-avatar",34),s(2,"span",35),_(3),m(),u(4,"i",36),m(),u(5,"p-menu",37,0)}if(t&2){let e=l();p(),r("label",e.initials),p(2),A(e.displayName()),p(2),r("model",e.userMenuItems)("popup",!0)("pt",e.pt)}}function mi(t,a){if(t&1){let e=C();u(0,"p-button",38),s(1,"p-button",39),b("click",function(){h(e);let i=l();return g(i.navigateToLogin())}),m()}}function ci(t,a){t&1&&(s(0,"div",40)(1,"div",41),u(2,"i",42),m(),s(3,"span",43),_(4,"\u0633\u0624\u0627\u0644"),m()())}function di(t,a){if(t&1&&(s(0,"div",16),u(1,"p-avatar",44),s(2,"div",45)(3,"span",46),_(4),m(),s(5,"span",47),_(6),m()()()),t&2){let e,n=l();p(),r("label",n.initials),p(3),A(n.displayName()),p(2),A((e=n.authService.currentUser())==null?null:e.email)}}function ui(t,a){if(t&1){let e=C();s(0,"a",48),b("click",function(){h(e);let i=l();return g(i.menuOpen=!1)}),u(1,"i",49),s(2,"span",20),_(3,"\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A"),m()(),s(4,"a",50),b("click",function(){h(e);let i=l();return g(i.menuOpen=!1)}),u(5,"i",51),s(6,"span",20),_(7,"\u0623\u0633\u0626\u0644\u062A\u064A"),m()()}}function _i(t,a){if(t&1){let e=C();s(0,"p-button",54),b("click",function(){h(e);let i=l(2);return g(i.logout())}),m()}t&2&&r("outlined",!0)}function fi(t,a){if(t&1){let e=C();u(0,"p-button",55),s(1,"p-button",56),b("click",function(){h(e);let i=l(2);return g(i.navigateToLogin())}),m()}}function hi(t,a){if(t&1&&(s(0,"div",52),O(1,_i,1,1,"p-button",53)(2,fi,2,0),m()),t&2){let e=l();p(),E(e.authService.isAuthenticated()?1:2)}}var ve=class t{menuOpen=!1;authService=T(mt);router=T(st);displayName=k(()=>{let a=this.authService.currentUser();if(!a)return"";let e=[a.first_name,a.last_name].filter(Boolean).join(" ").trim();return a.username||e});get initials(){let a=this.authService.currentUser();if(!a)return"";let e=[a.first_name,a.last_name].filter(Boolean).join(" ")||a.username,[n,i]=e.trim().split(/\s+/);return(i?n[0]+i[0]:n[0]??"").toUpperCase()}userMenuItems=[{label:"\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A",icon:"pi pi-user",command:()=>this.goToProfile()},{label:"\u0623\u0633\u0626\u0644\u062A\u064A",icon:"pi pi-list",command:()=>this.goToGenerationRequests()},{separator:!0},{label:"\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C",icon:"pi pi-sign-out",command:()=>this.logout()}];navigateToLogin(){this.menuOpen=!1,this.router.navigate(["/login"])}goToProfile(){this.menuOpen=!1,this.router.navigate(["/user-profile"])}goToGenerationRequests(){this.menuOpen=!1,this.router.navigate(["/generation/requests"])}logout(){this.menuOpen=!1,this.authService.logout().subscribe()}pt={root:"mt-1"};static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["soual-navbar"]],hostAttrs:[1,"block","w-full"],decls:54,vars:5,consts:[["userMenu",""],[1,"container","py-8","flex-between","gap-4"],["routerLink","/",1,"cursor-pointer"],[1,"text-2xl","text-main-600","font-bold"],[1,"hidden","md:flex","items-center","gap-6","lg:gap-8","text-slate-600","font-medium"],["routerLink","/",1,"hover:text-main-600","transition-colors"],["routerLink","/subjects",1,"hover:text-main-600","transition-colors"],["routerLink","/features",1,"hover:text-main-600","transition-colors"],["routerLink","/pricing",1,"hover:text-main-600","transition-colors"],["routerLink","/contact",1,"hover:text-main-600","transition-colors"],[1,"hidden","md:flex","items-center","gap-3"],[1,"md:hidden",3,"click","text"],[1,"pi","pi-bars","text-2xl","text-main-600"],["position","right",3,"visibleChange","visible"],["pTemplate","header"],[1,"h-full","flex","flex-col"],[1,"flex","items-center","gap-3","p-3","mb-2","rounded-2xl","bg-slate-50","border","border-slate-100"],[1,"flex","flex-col","gap-2","pt-3"],["routerLink","/",1,"flex","items-center","gap-4","p-3","rounded-xl","transition-all","duration-200","hover:bg-slate-50","text-slate-600","hover:text-slate-900","group",3,"click"],[1,"pi","pi-home","text-lg","group-hover:scale-110","transition-transform"],[1,"text-lg"],["routerLink","/subjects",1,"flex","items-center","gap-4","p-3","rounded-xl","transition-all","duration-200","hover:bg-slate-50","text-slate-600","hover:text-slate-900","group",3,"click"],[1,"pi","pi-book","text-lg","group-hover:scale-110","transition-transform"],["routerLink","/features",1,"flex","items-center","gap-4","p-3","rounded-xl","transition-all","duration-200","hover:bg-slate-50","text-slate-600","hover:text-slate-900","group",3,"click"],[1,"pi","pi-star","text-lg","group-hover:scale-110","transition-transform"],["routerLink","/pricing",1,"flex","items-center","gap-4","p-3","rounded-xl","transition-all","duration-200","hover:bg-slate-50","text-slate-600","hover:text-slate-900","group",3,"click"],[1,"pi","pi-tag","text-lg","group-hover:scale-110","transition-transform"],["routerLink","/contact",1,"flex","items-center","gap-4","p-3","rounded-xl","transition-all","duration-200","hover:bg-slate-50","text-slate-600","hover:text-slate-900","group",3,"click"],[1,"pi","pi-envelope","text-lg","group-hover:scale-110","transition-transform"],[1,"mt-auto","flex","flex-col","gap-4","px-2"],[1,"text-xs","font-bold","text-slate-400","uppercase","tracking-wider"],["href","#",1,"text-sm","text-slate-500","hover:text-primary","transition-colors"],["pTemplate","footer"],["type","button",1,"flex","items-center","gap-2","py-1","ps-1","pe-3","rounded-full","border","border-slate-200","bg-white","hover:border-main-200","hover:bg-slate-50","transition-all","duration-200","cursor-pointer",3,"click"],["shape","circle",3,"label"],[1,"font-medium","text-slate-700","max-w-40","truncate"],[1,"pi","pi-chevron-down","text-xs","text-slate-400"],["appendTo","body",3,"model","popup","pt"],["label","\u0627\u0628\u062F\u0623 \u0627\u0644\u0622\u0646 \u0645\u062C\u0627\u0646\u0627\u064B","icon","pi pi-bolt"],["label","\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644","outlined","","icon","pi pi-sign-in",3,"click"],[1,"flex","items-center","gap-3"],[1,"w-8","h-8","rounded-lg","bg-primary/10","flex-center","text-primary"],[1,"pi","pi-box","text-xl"],[1,"font-bold","text-xl","text-slate-900"],["size","large","shape","circle",3,"label"],[1,"flex","flex-col","min-w-0"],[1,"font-bold","text-slate-900","truncate"],[1,"text-sm","text-slate-500","truncate"],["routerLink","/user-profile",1,"flex","items-center","gap-4","p-3","rounded-xl","transition-all","duration-200","hover:bg-slate-50","text-slate-600","hover:text-slate-900","group",3,"click"],[1,"pi","pi-user","text-lg","group-hover:scale-110","transition-transform"],["routerLink","/generation/requests",1,"flex","items-center","gap-4","p-3","rounded-xl","transition-all","duration-200","hover:bg-slate-50","text-slate-600","hover:text-slate-900","group",3,"click"],[1,"pi","pi-list","text-lg","group-hover:scale-110","transition-transform"],[1,"flex","flex-col","gap-3","w-full"],["label","\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C","icon","pi pi-sign-out","styleClass","w-full","severity","danger",3,"outlined"],["label","\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C","icon","pi pi-sign-out","styleClass","w-full","severity","danger",3,"click","outlined"],["label","\u0627\u0628\u062F\u0623 \u0627\u0644\u0622\u0646 \u0645\u062C\u0627\u0646\u0627\u064B","icon","pi pi-bolt","styleClass","w-full"],["label","\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644","icon","pi pi-sign-in","styleClass","w-full","severity","secondary","outlined","",3,"click"]],template:function(e,n){e&1&&(s(0,"nav",1)(1,"div",2)(2,"span",3),_(3,"\u0633\u0624\u0627\u0644"),m()(),s(4,"div",4)(5,"a",5),_(6,"\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629"),m(),s(7,"a",6),_(8,"\u0627\u0644\u0645\u0648\u0627\u062F"),m(),s(9,"a",7),_(10,"\u0627\u0644\u0645\u0645\u064A\u0632\u0627\u062A"),m(),s(11,"a",8),_(12,"\u0627\u0644\u0623\u0633\u0639\u0627\u0631"),m(),s(13,"a",9),_(14,"\u0627\u062A\u0635\u0644 \u0628\u0646\u0627"),m()(),s(15,"div",10),O(16,pi,7,5)(17,mi,2,0),m(),s(18,"p-button",11),b("click",function(){return n.menuOpen=!0}),u(19,"i",12),m()(),s(20,"p-drawer",13),Ge("visibleChange",function(o){return We(n.menuOpen,o)||(n.menuOpen=o),o}),d(21,ci,5,0,"ng-template",14),s(22,"div",15),O(23,di,7,3,"div",16),s(24,"div",17)(25,"a",18),b("click",function(){return n.menuOpen=!1}),u(26,"i",19),s(27,"span",20),_(28,"\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629"),m()(),s(29,"a",21),b("click",function(){return n.menuOpen=!1}),u(30,"i",22),s(31,"span",20),_(32,"\u0627\u0644\u0645\u0648\u0627\u062F"),m()(),s(33,"a",23),b("click",function(){return n.menuOpen=!1}),u(34,"i",24),s(35,"span",20),_(36,"\u0627\u0644\u0645\u0645\u064A\u0632\u0627\u062A"),m()(),s(37,"a",25),b("click",function(){return n.menuOpen=!1}),u(38,"i",26),s(39,"span",20),_(40,"\u0627\u0644\u0623\u0633\u0639\u0627\u0631"),m()(),s(41,"a",27),b("click",function(){return n.menuOpen=!1}),u(42,"i",28),s(43,"span",20),_(44,"\u0627\u062A\u0635\u0644 \u0628\u0646\u0627"),m()(),O(45,ui,8,0),m(),s(46,"div",29)(47,"span",30),_(48,"\u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629"),m(),s(49,"a",31),_(50,"\u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629"),m(),s(51,"a",31),_(52,"\u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0623\u062D\u0643\u0627\u0645"),m()()(),d(53,hi,3,1,"ng-template",32),m()),e&2&&(p(16),E(n.authService.isAuthenticated()?16:17),p(2),r("text",!0),p(2),Ke("visible",n.menuOpen),p(3),E(n.authService.isAuthenticated()?23:-1),p(22),E(n.authService.isAuthenticated()?45:-1))},dependencies:[vt,he,j,St,Fe,Tt,wt,Bt,xe,ue],encapsulation:2,changeDetection:0})};var At=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["soual-main-layout"]],hostAttrs:[1,"block","min-h-screen","bg-slate-50"],decls:2,vars:0,template:function(e,n){e&1&&u(0,"soual-navbar")(1,"router-outlet")},dependencies:[ve,lt],encapsulation:2,changeDetection:0})};export{At as MainLayoutComponent};
