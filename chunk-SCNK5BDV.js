import{a as wt,b as Ct}from"./chunk-CZ55ROIC.js";import{a as Nt}from"./chunk-CKCJZ2MX.js";import{a as _t,b as xt,c as Bt}from"./chunk-IRTMA3EV.js";import"./chunk-7SDLT3ER.js";import"./chunk-QW4DLXK7.js";import{$a as L,$d as $,Ab as P,Cb as C,Db as g,Eb as V,Fb as R,Gb as ut,Hb as bt,Ib as u,Jb as b,Ka as l,Kd as gt,N as I,O as M,Oc as tt,Pc as z,R as E,Rb as p,Rd as yt,Sb as Y,T as s,Tc as H,Ub as pt,Xa as _,Xd as Tt,Y as S,Yd as it,Z as A,_ as G,_b as O,ab as j,bb as J,bd as et,be as K,ce as Q,de as v,ed as vt,ee as q,fe as at,ge as Dt,hb as B,ia as F,ka as rt,kb as D,lb as w,ld as ht,mc as f,md as mt,na as T,nd as N,ob as ct,pa as lt,pb as dt,pc as y,qb as c,rb as h,sb as d,tb as m,tc as Z,td as nt,wc as x,wd as k,xc as ft,zb as X}from"./chunk-6VNHD5IR.js";var kt=`
    .p-tabs {
        display: flex;
        flex-direction: column;
    }

    .p-tablist {
        display: flex;
        position: relative;
        overflow: hidden;
        background: dt('tabs.tablist.background');
    }

    .p-tablist-viewport {
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        overscroll-behavior: contain auto;
    }

    .p-tablist-viewport::-webkit-scrollbar {
        display: none;
    }

    .p-tablist-tab-list {
        position: relative;
        display: flex;
        border-style: solid;
        border-color: dt('tabs.tablist.border.color');
        border-width: dt('tabs.tablist.border.width');
    }

    .p-tablist-content {
        flex-grow: 1;
    }

    .p-tablist-nav-button {
        all: unset;
        position: absolute !important;
        flex-shrink: 0;
        inset-block-start: 0;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: dt('tabs.nav.button.background');
        color: dt('tabs.nav.button.color');
        width: dt('tabs.nav.button.width');
        transition:
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        box-shadow: dt('tabs.nav.button.shadow');
        outline-color: transparent;
        cursor: pointer;
    }

    .p-tablist-nav-button:focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.nav.button.focus.ring.shadow');
        outline: dt('tabs.nav.button.focus.ring.width') dt('tabs.nav.button.focus.ring.style') dt('tabs.nav.button.focus.ring.color');
        outline-offset: dt('tabs.nav.button.focus.ring.offset');
    }

    .p-tablist-nav-button:hover {
        color: dt('tabs.nav.button.hover.color');
    }

    .p-tablist-prev-button {
        inset-inline-start: 0;
    }

    .p-tablist-next-button {
        inset-inline-end: 0;
    }

    .p-tablist-prev-button:dir(rtl),
    .p-tablist-next-button:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-tab {
        flex-shrink: 0;
        cursor: pointer;
        user-select: none;
        position: relative;
        border-style: solid;
        white-space: nowrap;
        gap: dt('tabs.tab.gap');
        background: dt('tabs.tab.background');
        border-width: dt('tabs.tab.border.width');
        border-color: dt('tabs.tab.border.color');
        color: dt('tabs.tab.color');
        padding: dt('tabs.tab.padding');
        font-weight: dt('tabs.tab.font.weight');
        transition:
            background dt('tabs.transition.duration'),
            border-color dt('tabs.transition.duration'),
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        margin: dt('tabs.tab.margin');
        outline-color: transparent;
    }

    .p-tab:not(.p-disabled):focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.tab.focus.ring.shadow');
        outline: dt('tabs.tab.focus.ring.width') dt('tabs.tab.focus.ring.style') dt('tabs.tab.focus.ring.color');
        outline-offset: dt('tabs.tab.focus.ring.offset');
    }

    .p-tab:not(.p-tab-active):not(.p-disabled):hover {
        background: dt('tabs.tab.hover.background');
        border-color: dt('tabs.tab.hover.border.color');
        color: dt('tabs.tab.hover.color');
    }

    .p-tab-active {
        background: dt('tabs.tab.active.background');
        border-color: dt('tabs.tab.active.border.color');
        color: dt('tabs.tab.active.color');
    }

    .p-tabpanels {
        background: dt('tabs.tabpanel.background');
        color: dt('tabs.tabpanel.color');
        padding: dt('tabs.tabpanel.padding');
        outline: 0 none;
    }

    .p-tabpanel:focus-visible {
        box-shadow: dt('tabs.tabpanel.focus.ring.shadow');
        outline: dt('tabs.tabpanel.focus.ring.width') dt('tabs.tabpanel.focus.ring.style') dt('tabs.tabpanel.focus.ring.color');
        outline-offset: dt('tabs.tabpanel.focus.ring.offset');
    }

    .p-tablist-active-bar {
        z-index: 1;
        display: block;
        position: absolute;
        inset-block-end: dt('tabs.active.bar.bottom');
        height: dt('tabs.active.bar.height');
        background: dt('tabs.active.bar.background');
        transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
    }
`;var ot=["*"],Rt=["previcon"],Ot=["nexticon"],zt=["content"],Ht=["prevButton"],$t=["nextButton"],Kt=["inkbar"],Qt=["tabs"];function qt(n,r){n&1&&X(0)}function Wt(n,r){if(n&1&&J(0,qt,1,0,"ng-container",11),n&2){let t=g(2);c("ngTemplateOutlet",t.prevIconTemplate||t._prevIconTemplate)}}function Ut(n,r){n&1&&(G(),m(0,"svg",10))}function Gt(n,r){if(n&1){let t=P();h(0,"button",9,3),C("click",function(){S(t);let e=g();return A(e.onPrevButtonClick())}),D(2,Wt,1,1,"ng-container")(3,Ut,1,0,":svg:svg",10),d()}if(n&2){let t=g();p(t.cx("prevButton")),c("pBind",t.ptm("prevButton")),B("aria-label",t.prevButtonAriaLabel)("tabindex",t.tabindex())("data-pc-group-section","navigator"),l(2),w(t.prevIconTemplate||t._prevIconTemplate?2:3)}}function Jt(n,r){n&1&&X(0)}function Xt(n,r){if(n&1&&J(0,Jt,1,0,"ng-container",11),n&2){let t=g(2);c("ngTemplateOutlet",t.nextIconTemplate||t._nextIconTemplate)}}function Yt(n,r){n&1&&(G(),m(0,"svg",12))}function Zt(n,r){if(n&1){let t=P();h(0,"button",9,4),C("click",function(){S(t);let e=g();return A(e.onNextButtonClick())}),D(2,Xt,1,1,"ng-container")(3,Yt,1,0,":svg:svg",12),d()}if(n&2){let t=g();p(t.cx("nextButton")),c("pBind",t.ptm("nextButton")),B("aria-label",t.nextButtonAriaLabel)("tabindex",t.tabindex())("data-pc-group-section","navigator"),l(2),w(t.nextIconTemplate||t._nextIconTemplate?2:3)}}var te={root:({instance:n})=>["p-tabs p-component",{"p-tabs-scrollable":n.scrollable()}]},It=(()=>{class n extends ${name="tabs";style=kt;classes=te;static \u0275fac=(()=>{let t;return function(e){return(t||(t=T(n)))(e||n)}})();static \u0275prov=M({token:n,factory:n.\u0275fac})}return n})();var Mt=new E("TABS_INSTANCE"),W=(()=>{class n extends Q{componentName="Tabs";$pcTabs=s(Mt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=s(v,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value=Z(void 0);scrollable=y(!1,{transform:x});lazy=y(!1,{transform:x});selectOnFocus=y(!1,{transform:x});showNavigators=y(!0,{transform:x});tabindex=y(0,{transform:ft});id=F(yt("pn_id_"));_componentStyle=s(It);updateValue(t){this.value.update(()=>t)}static \u0275fac=(()=>{let t;return function(e){return(t||(t=T(n)))(e||n)}})();static \u0275cmp=_({type:n,selectors:[["p-tabs"]],hostVars:3,hostBindings:function(i,e){i&2&&(B("id",e.id()),p(e.cx("root")))},inputs:{value:[1,"value"],scrollable:[1,"scrollable"],lazy:[1,"lazy"],selectOnFocus:[1,"selectOnFocus"],showNavigators:[1,"showNavigators"],tabindex:[1,"tabindex"]},outputs:{value:"valueChange"},features:[O([It,{provide:Mt,useExisting:n},{provide:K,useExisting:n}]),L([v]),j],ngContentSelectors:ot,decls:1,vars:0,template:function(i,e){i&1&&(V(),R(0))},dependencies:[z,q],encapsulation:2,changeDetection:0})}return n})(),ee={root:({instance:n})=>["p-tab",{"p-tab-active":n.active(),"p-disabled":n.disabled()}]},Et=(()=>{class n extends ${name="tab";classes=ee;static \u0275fac=(()=>{let t;return function(e){return(t||(t=T(n)))(e||n)}})();static \u0275prov=M({token:n,factory:n.\u0275fac})}return n})();var ne={root:"p-tablist",content:"p-tablist-content p-tablist-viewport",tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},St=(()=>{class n extends ${name="tablist";classes=ne;static \u0275fac=(()=>{let t;return function(e){return(t||(t=T(n)))(e||n)}})();static \u0275prov=M({token:n,factory:n.\u0275fac})}return n})();var At=new E("TABLIST_INSTANCE"),st=(()=>{class n extends Q{componentName="TabList";$pcTabList=s(At,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=s(v,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}prevIconTemplate;nextIconTemplate;templates;content;prevButton;nextButton;inkbar;tabs;pcTabs=s(I(()=>W));isPrevButtonEnabled=F(!1);isNextButtonEnabled=F(!1);resizeObserver;showNavigators=f(()=>this.pcTabs.showNavigators());tabindex=f(()=>this.pcTabs.tabindex());scrollable=f(()=>this.pcTabs.scrollable());_componentStyle=s(St);constructor(){super(),rt(()=>{this.pcTabs.value(),H(this.platformId)&&setTimeout(()=>{this.updateInkBar()})})}get prevButtonAriaLabel(){return this.config?.translation?.aria?.previous}get nextButtonAriaLabel(){return this.config?.translation?.aria?.next}onAfterViewInit(){this.showNavigators()&&H(this.platformId)&&(this.updateButtonState(),this.bindResizeObserver())}_prevIconTemplate;_nextIconTemplate;onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"previcon":this._prevIconTemplate=t.template;break;case"nexticon":this._nextIconTemplate=t.template;break}})}onDestroy(){this.unbindResizeObserver()}onScroll(t){this.showNavigators()&&this.updateButtonState(),t.preventDefault()}onPrevButtonClick(){let t=this.content.nativeElement,i=k(t),e=Math.abs(t.scrollLeft)-i,a=e<=0?0:e;t.scrollLeft=et(t)?-1*a:a}onNextButtonClick(){let t=this.content.nativeElement,i=k(t)-this.getVisibleButtonWidths(),e=t.scrollLeft+i,a=t.scrollWidth-i,o=e>=a?a:e;t.scrollLeft=et(t)?-1*o:o}updateButtonState(){let t=this.content?.nativeElement,i=this.el?.nativeElement,{scrollWidth:e,offsetWidth:a}=t,o=Math.abs(t.scrollLeft),U=k(t);this.isPrevButtonEnabled.set(o!==0),this.isNextButtonEnabled.set(i.offsetWidth>=a&&Math.abs(o-e+U)>1)}updateInkBar(){let t=this.content?.nativeElement,i=this.inkbar?.nativeElement,e=this.tabs?.nativeElement,a=ht(t,'[data-pc-name="tab"][data-p-active="true"]');i&&(i.style.width=vt(a)+"px",i.style.left=nt(a).left-nt(e).left+"px")}getVisibleButtonWidths(){let t=this.prevButton?.nativeElement,i=this.nextButton?.nativeElement;return[t,i].reduce((e,a)=>a?e+k(a):e,0)}bindResizeObserver(){this.resizeObserver=new ResizeObserver(()=>this.updateButtonState()),this.resizeObserver.observe(this.el.nativeElement)}unbindResizeObserver(){this.resizeObserver&&(this.resizeObserver.unobserve(this.el.nativeElement),this.resizeObserver=null)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=_({type:n,selectors:[["p-tablist"]],contentQueries:function(i,e,a){if(i&1&&ut(a,Rt,4)(a,Ot,4)(a,Tt,4),i&2){let o;u(o=b())&&(e.prevIconTemplate=o.first),u(o=b())&&(e.nextIconTemplate=o.first),u(o=b())&&(e.templates=o)}},viewQuery:function(i,e){if(i&1&&bt(zt,5)(Ht,5)($t,5)(Kt,5)(Qt,5),i&2){let a;u(a=b())&&(e.content=a.first),u(a=b())&&(e.prevButton=a.first),u(a=b())&&(e.nextButton=a.first),u(a=b())&&(e.inkbar=a.first),u(a=b())&&(e.tabs=a.first)}},hostVars:2,hostBindings:function(i,e){i&2&&p(e.cx("root"))},features:[O([St,{provide:At,useExisting:n},{provide:K,useExisting:n}]),L([v]),j],ngContentSelectors:ot,decls:9,vars:11,consts:[["content",""],["tabs",""],["inkbar",""],["prevButton",""],["nextButton",""],["type","button","pRipple","",3,"pBind","class"],[3,"scroll","pBind"],["role","tablist",3,"pBind"],["role","presentation",3,"pBind"],["type","button","pRipple","",3,"click","pBind"],["data-p-icon","chevron-left"],[4,"ngTemplateOutlet"],["data-p-icon","chevron-right"]],template:function(i,e){if(i&1){let a=P();V(),D(0,Gt,4,7,"button",5),h(1,"div",6,0),C("scroll",function(U){return S(a),A(e.onScroll(U))}),h(3,"div",7,1),R(5),m(6,"span",8,2),d()(),D(8,Zt,4,7,"button",5)}i&2&&(w(e.showNavigators()&&e.isPrevButtonEnabled()?0:-1),l(),p(e.cx("content")),c("pBind",e.ptm("content")),l(2),p(e.cx("tabList")),c("pBind",e.ptm("tabList")),l(3),p(e.cx("activeBar")),c("pBind",e.ptm("activeBar")),l(2),w(e.showNavigators()&&e.isNextButtonEnabled()?8:-1))},dependencies:[z,tt,wt,Ct,Dt,at,it,q,v],encapsulation:2,changeDetection:0})}return n})(),Ft=new E("TAB_INSTANCE"),Lt=(()=>{class n extends Q{componentName="Tab";$pcTab=s(Ft,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=s(v,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value=Z();disabled=y(!1,{transform:x});pcTabs=s(I(()=>W));pcTabList=s(I(()=>st));el=s(lt);_componentStyle=s(Et);ripple=f(()=>this.config.ripple());id=f(()=>`${this.pcTabs.id()}_tab_${this.value()}`);ariaControls=f(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);active=f(()=>gt(this.pcTabs.value(),this.value()));tabindex=f(()=>this.disabled()?-1:this.active()?this.pcTabs.tabindex():-1);mutationObserver;onFocus(t){this.disabled()||this.pcTabs.selectOnFocus()&&this.changeActiveValue()}onClick(t){this.disabled()||this.changeActiveValue()}onKeyDown(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break;default:break}t.stopPropagation()}onAfterViewInit(){this.bindMutationObserver()}onArrowRightKey(t){let i=this.findNextTab(t.currentTarget);i?this.changeFocusedTab(t,i):this.onHomeKey(t),t.preventDefault()}onArrowLeftKey(t){let i=this.findPrevTab(t.currentTarget);i?this.changeFocusedTab(t,i):this.onEndKey(t),t.preventDefault()}onHomeKey(t){let i=this.findFirstTab();this.changeFocusedTab(t,i),t.preventDefault()}onEndKey(t){let i=this.findLastTab();this.changeFocusedTab(t,i),t.preventDefault()}onPageDownKey(t){this.scrollInView(this.findLastTab()),t.preventDefault()}onPageUpKey(t){this.scrollInView(this.findFirstTab()),t.preventDefault()}onEnterKey(t){this.disabled()||this.changeActiveValue(),t.preventDefault()}findNextTab(t,i=!1){let e=i?t:t.nextElementSibling;return e?N(e,"data-p-disabled")||N(e,"data-pc-section")==="activebar"?this.findNextTab(e):e:null}findPrevTab(t,i=!1){let e=i?t:t.previousElementSibling;return e?N(e,"data-p-disabled")||N(e,"data-pc-section")==="activebar"?this.findPrevTab(e):e:null}findFirstTab(){return this.findNextTab(this.pcTabList?.tabs?.nativeElement?.firstElementChild,!0)}findLastTab(){return this.findPrevTab(this.pcTabList?.tabs?.nativeElement?.lastElementChild,!0)}changeActiveValue(){this.pcTabs.updateValue(this.value())}changeFocusedTab(t,i){mt(i),this.scrollInView(i)}scrollInView(t){t?.scrollIntoView?.({block:"nearest"})}bindMutationObserver(){H(this.platformId)&&(this.mutationObserver=new MutationObserver(t=>{t.forEach(()=>{this.active()&&this.pcTabList?.updateInkBar()})}),this.mutationObserver.observe(this.el.nativeElement,{childList:!0,characterData:!0,subtree:!0}))}unbindMutationObserver(){this.mutationObserver?.disconnect()}onDestroy(){this.mutationObserver&&this.unbindMutationObserver()}static \u0275fac=(()=>{let t;return function(e){return(t||(t=T(n)))(e||n)}})();static \u0275cmp=_({type:n,selectors:[["p-tab"]],hostVars:10,hostBindings:function(i,e){i&1&&C("focus",function(o){return e.onFocus(o)})("click",function(o){return e.onClick(o)})("keydown",function(o){return e.onKeyDown(o)}),i&2&&(B("id",e.id())("aria-controls",e.ariaControls())("role","tab")("aria-selected",e.active())("aria-disabled",e.disabled())("data-p-disabled",e.disabled())("data-p-active",e.active())("tabindex",e.tabindex()),p(e.cx("root")))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[O([Et,{provide:Ft,useExisting:n},{provide:K,useExisting:n}]),L([at,v]),j],ngContentSelectors:ot,decls:1,vars:0,template:function(i,e){i&1&&(V(),R(0))},dependencies:[z,it,q],encapsulation:2,changeDetection:0})}return n})();var jt=[{slug:"arabic",name:"\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629"},{slug:"mathematics",name:"\u0627\u0644\u0631\u064A\u0627\u0636\u064A\u0627\u062A"},{slug:"chemistry",name:"\u0627\u0644\u0643\u064A\u0645\u064A\u0627\u0621"},{slug:"physics",name:"\u0627\u0644\u0641\u064A\u0632\u064A\u0627\u0621"},{slug:"biology",name:"\u0627\u0644\u0623\u062D\u064A\u0627\u0621"}];var ie=(n,r)=>r.slug;function ae(n,r){if(n&1&&(h(0,"p-tab",4),m(1,"i",5),Y(2),d()),n&2){let t=r.$implicit;c("value",t.slug)("disabled",!0),l(2),pt(" ",t.name," ")}}var Pt=class n{subjects=jt;router=s(xt);static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["soual-subjects-shell"]],hostAttrs:[1,"block"],decls:9,vars:0,consts:[[1,"flex","flex-col","h-full","container"],["value","english",1,"mt-3"],["value","english","routerLink","/subjects/english"],[1,"pi","pi-language","me-2"],["pTooltip","\u0647\u0630\u0647 \u0627\u0644\u0645\u0627\u062F\u0629 \u0642\u064A\u062F \u0627\u0644\u0625\u0639\u062F\u0627\u062F \u062D\u0627\u0644\u064A\u0627\u064B\u060C \u0633\u062A\u0643\u0648\u0646 \u0645\u062A\u0627\u062D\u0629 \u0642\u0631\u064A\u0628\u0627\u064B \u0628\u0625\u0630\u0646 \u0627\u0644\u0644\u0647","tooltipPosition","top",3,"value","disabled"],[1,"pi","pi-lock","me-2"]],template:function(t,i){t&1&&(h(0,"div",0)(1,"p-tabs",1)(2,"p-tablist")(3,"p-tab",2),m(4,"i",3),Y(5," \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629 "),d(),ct(6,ae,3,3,"p-tab",4,ie),d()(),m(8,"router-outlet"),d()),t&2&&(l(6),dt(i.subjects))},dependencies:[_t,Bt,W,st,Lt,Nt],encapsulation:2,changeDetection:0})};export{Pt as SubjectsShellComponent};
