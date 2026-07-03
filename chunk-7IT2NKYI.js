import{a as Ae}from"./chunk-MF4F5DLO.js";import{c as Ne,d as Ee,e as Se,f as Fe,g as Le}from"./chunk-W5SPVV47.js";import"./chunk-PEZJA3HC.js";import{a as le,b as je}from"./chunk-OYNGJH5P.js";import{$b as d,$c as Be,Ab as he,Bb as ye,Cb as p,Cd as U,Db as f,Dc as Q,Ed as W,Fd as G,Ga as c,Gd as m,H as Y,Hd as Z,Id as J,J as L,K as A,Kb as v,Lb as Te,N as j,Nb as xe,P as s,Qc as re,Sb as H,Ta as b,Tc as De,U as R,Ub as _e,V as O,W as x,Xa as P,Ya as g,Z as ee,Za as ne,_c as we,ad as S,cc as D,db as M,ea as _,ec as oe,ed as se,ga as te,gb as k,gd as F,hb as N,hc as I,ib as me,ic as Ce,ja as u,jb as ge,kb as l,la as ve,lb as h,mb as y,n as pe,nb as B,qb as V,rd as Ie,tb as ie,ub as z,ud as Me,v as fe,wb as E,xb as C,xd as ke,yb as q,yc as ae,yd as ce,zb as $,zc as K}from"./chunk-UAMFQ5KV.js";function Re(t,a){let i=!a?.manualCleanup?a?.injector?.get(ee)??s(ee):null,n=Ge(a?.equal),o;a?.requireSync?o=_({kind:0},{equal:n}):o=_({kind:1,value:a?.initialValue},{equal:n});let r,w=t.subscribe({next:T=>o.set({kind:1,value:T}),error:T=>{o.set({kind:2,error:T}),r?.()},complete:()=>{r?.()}});if(a?.requireSync&&o().kind===0)throw new Y(601,!1);return r=i?.onDestroy(w.unsubscribe.bind(w)),d(()=>{let T=o();switch(T.kind){case 1:return T.value;case 2:throw T.error;case 0:throw new Y(601,!1)}},{equal:a?.equal})}function Ge(t=Object.is){return(a,e)=>a.kind===1&&e.kind===1&&t(a.value,e.value)}var Oe=`
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
`;var Ze=["data-p-icon","chevron-left"],Pe=(()=>{class t extends J{static \u0275fac=(()=>{let e;return function(n){return(e||(e=u(t)))(n||t)}})();static \u0275cmp=b({type:t,selectors:[["","data-p-icon","chevron-left"]],features:[g],attrs:Ze,decls:1,vars:0,consts:[["d","M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z","fill","currentColor"]],template:function(i,n){i&1&&(x(),V(0,"path",0))},encapsulation:2})}return t})();var Je=["data-p-icon","chevron-right"],Ve=(()=>{class t extends J{static \u0275fac=(()=>{let e;return function(n){return(e||(e=u(t)))(n||t)}})();static \u0275cmp=b({type:t,selectors:[["","data-p-icon","chevron-right"]],features:[g],attrs:Je,decls:1,vars:0,consts:[["d","M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z","fill","currentColor"]],template:function(i,n){i&1&&(x(),V(0,"path",0))},encapsulation:2})}return t})();var ue=["*"],Xe=["previcon"],Ye=["nexticon"],et=["content"],tt=["prevButton"],nt=["nextButton"],it=["inkbar"],ot=["tabs"];function at(t,a){t&1&&ie(0)}function rt(t,a){if(t&1&&ne(0,at,1,0,"ng-container",11),t&2){let e=C(2);l("ngTemplateOutlet",e.prevIconTemplate||e._prevIconTemplate)}}function st(t,a){t&1&&(x(),B(0,"svg",10))}function ct(t,a){if(t&1){let e=z();h(0,"button",9,3),E("click",function(){R(e);let n=C();return O(n.onPrevButtonClick())}),k(2,rt,1,1,"ng-container")(3,st,1,0,":svg:svg",10),y()}if(t&2){let e=C();v(e.cx("prevButton")),l("pBind",e.ptm("prevButton")),M("aria-label",e.prevButtonAriaLabel)("tabindex",e.tabindex())("data-pc-group-section","navigator"),c(2),N(e.prevIconTemplate||e._prevIconTemplate?2:3)}}function lt(t,a){t&1&&ie(0)}function dt(t,a){if(t&1&&ne(0,lt,1,0,"ng-container",11),t&2){let e=C(2);l("ngTemplateOutlet",e.nextIconTemplate||e._nextIconTemplate)}}function ut(t,a){t&1&&(x(),B(0,"svg",12))}function bt(t,a){if(t&1){let e=z();h(0,"button",9,4),E("click",function(){R(e);let n=C();return O(n.onNextButtonClick())}),k(2,dt,1,1,"ng-container")(3,ut,1,0,":svg:svg",12),y()}if(t&2){let e=C();v(e.cx("nextButton")),l("pBind",e.ptm("nextButton")),M("aria-label",e.nextButtonAriaLabel)("tabindex",e.tabindex())("data-pc-group-section","navigator"),c(2),N(e.nextIconTemplate||e._nextIconTemplate?2:3)}}var pt={root:({instance:t})=>["p-tabs p-component",{"p-tabs-scrollable":t.scrollable()}]},ze=(()=>{class t extends U{name="tabs";style=Oe;classes=pt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=u(t)))(n||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var qe=new j("TABS_INSTANCE"),X=(()=>{class t extends G{componentName="Tabs";$pcTabs=s(qe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=s(m,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value=oe(void 0);scrollable=D(!1,{transform:I});lazy=D(!1,{transform:I});selectOnFocus=D(!1,{transform:I});showNavigators=D(!0,{transform:I});tabindex=D(0,{transform:Ce});id=_(Me("pn_id_"));_componentStyle=s(ze);updateValue(e){this.value.update(()=>e)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=u(t)))(n||t)}})();static \u0275cmp=b({type:t,selectors:[["p-tabs"]],hostVars:3,hostBindings:function(i,n){i&2&&(M("id",n.id()),v(n.cx("root")))},inputs:{value:[1,"value"],scrollable:[1,"scrollable"],lazy:[1,"lazy"],selectOnFocus:[1,"selectOnFocus"],showNavigators:[1,"showNavigators"],tabindex:[1,"tabindex"]},outputs:{value:"valueChange"},features:[H([ze,{provide:qe,useExisting:t},{provide:W,useExisting:t}]),P([m]),g],ngContentSelectors:ue,decls:1,vars:0,template:function(i,n){i&1&&(q(),$(0))},dependencies:[K,Z],encapsulation:2,changeDetection:0})}return t})(),ft={root:({instance:t})=>["p-tab",{"p-tab-active":t.active(),"p-disabled":t.disabled()}]},$e=(()=>{class t extends U{name="tab";classes=ft;static \u0275fac=(()=>{let e;return function(n){return(e||(e=u(t)))(n||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var vt={root:"p-tablist",content:"p-tablist-content p-tablist-viewport",tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},He=(()=>{class t extends U{name="tablist";classes=vt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=u(t)))(n||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var Ke=new j("TABLIST_INSTANCE"),be=(()=>{class t extends G{componentName="TabList";$pcTabList=s(Ke,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=s(m,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}prevIconTemplate;nextIconTemplate;templates;content;prevButton;nextButton;inkbar;tabs;pcTabs=s(L(()=>X));isPrevButtonEnabled=_(!1);isNextButtonEnabled=_(!1);resizeObserver;showNavigators=d(()=>this.pcTabs.showNavigators());tabindex=d(()=>this.pcTabs.tabindex());scrollable=d(()=>this.pcTabs.scrollable());_componentStyle=s(He);constructor(){super(),te(()=>{this.pcTabs.value(),Q(this.platformId)&&setTimeout(()=>{this.updateInkBar()})})}get prevButtonAriaLabel(){return this.config?.translation?.aria?.previous}get nextButtonAriaLabel(){return this.config?.translation?.aria?.next}onAfterViewInit(){this.showNavigators()&&Q(this.platformId)&&(this.updateButtonState(),this.bindResizeObserver())}_prevIconTemplate;_nextIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"previcon":this._prevIconTemplate=e.template;break;case"nexticon":this._nextIconTemplate=e.template;break}})}onDestroy(){this.unbindResizeObserver()}onScroll(e){this.showNavigators()&&this.updateButtonState(),e.preventDefault()}onPrevButtonClick(){let e=this.content.nativeElement,i=F(e),n=Math.abs(e.scrollLeft)-i,o=n<=0?0:n;e.scrollLeft=re(e)?-1*o:o}onNextButtonClick(){let e=this.content.nativeElement,i=F(e)-this.getVisibleButtonWidths(),n=e.scrollLeft+i,o=e.scrollWidth-i,r=n>=o?o:n;e.scrollLeft=re(e)?-1*r:r}updateButtonState(){let e=this.content?.nativeElement,i=this.el?.nativeElement,{scrollWidth:n,offsetWidth:o}=e,r=Math.abs(e.scrollLeft),w=F(e);this.isPrevButtonEnabled.set(r!==0),this.isNextButtonEnabled.set(i.offsetWidth>=o&&Math.abs(r-n+w)>1)}updateInkBar(){let e=this.content?.nativeElement,i=this.inkbar?.nativeElement,n=this.tabs?.nativeElement,o=we(e,'[data-pc-name="tab"][data-p-active="true"]');i&&(i.style.width=De(o)+"px",i.style.left=se(o).left-se(n).left+"px")}getVisibleButtonWidths(){let e=this.prevButton?.nativeElement,i=this.nextButton?.nativeElement;return[e,i].reduce((n,o)=>o?n+F(o):n,0)}bindResizeObserver(){this.resizeObserver=new ResizeObserver(()=>this.updateButtonState()),this.resizeObserver.observe(this.el.nativeElement)}unbindResizeObserver(){this.resizeObserver&&(this.resizeObserver.unobserve(this.el.nativeElement),this.resizeObserver=null)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=b({type:t,selectors:[["p-tablist"]],contentQueries:function(i,n,o){if(i&1&&he(o,Xe,4)(o,Ye,4)(o,ke,4),i&2){let r;p(r=f())&&(n.prevIconTemplate=r.first),p(r=f())&&(n.nextIconTemplate=r.first),p(r=f())&&(n.templates=r)}},viewQuery:function(i,n){if(i&1&&ye(et,5)(tt,5)(nt,5)(it,5)(ot,5),i&2){let o;p(o=f())&&(n.content=o.first),p(o=f())&&(n.prevButton=o.first),p(o=f())&&(n.nextButton=o.first),p(o=f())&&(n.inkbar=o.first),p(o=f())&&(n.tabs=o.first)}},hostVars:2,hostBindings:function(i,n){i&2&&v(n.cx("root"))},features:[H([He,{provide:Ke,useExisting:t},{provide:W,useExisting:t}]),P([m]),g],ngContentSelectors:ue,decls:9,vars:11,consts:[["content",""],["tabs",""],["inkbar",""],["prevButton",""],["nextButton",""],["type","button","pRipple","",3,"pBind","class"],[3,"scroll","pBind"],["role","tablist",3,"pBind"],["role","presentation",3,"pBind"],["type","button","pRipple","",3,"click","pBind"],["data-p-icon","chevron-left"],[4,"ngTemplateOutlet"],["data-p-icon","chevron-right"]],template:function(i,n){if(i&1){let o=z();q(),k(0,ct,4,7,"button",5),h(1,"div",6,0),E("scroll",function(w){return R(o),O(n.onScroll(w))}),h(3,"div",7,1),$(5),B(6,"span",8,2),y()(),k(8,bt,4,7,"button",5)}i&2&&(N(n.showNavigators()&&n.isPrevButtonEnabled()?0:-1),c(),v(n.cx("content")),l("pBind",n.ptm("content")),c(2),v(n.cx("tabList")),l("pBind",n.ptm("tabList")),c(3),v(n.cx("activeBar")),l("pBind",n.ptm("activeBar")),c(2),N(n.showNavigators()&&n.isNextButtonEnabled()?8:-1))},dependencies:[K,ae,Pe,Ve,je,le,ce,Z,m],encapsulation:2,changeDetection:0})}return t})(),Qe=new j("TAB_INSTANCE"),Ue=(()=>{class t extends G{componentName="Tab";$pcTab=s(Qe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=s(m,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value=oe();disabled=D(!1,{transform:I});pcTabs=s(L(()=>X));pcTabList=s(L(()=>be));el=s(ve);_componentStyle=s($e);ripple=d(()=>this.config.ripple());id=d(()=>`${this.pcTabs.id()}_tab_${this.value()}`);ariaControls=d(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);active=d(()=>Ie(this.pcTabs.value(),this.value()));tabindex=d(()=>this.disabled()?-1:this.active()?this.pcTabs.tabindex():-1);mutationObserver;onFocus(e){this.disabled()||this.pcTabs.selectOnFocus()&&this.changeActiveValue()}onClick(e){this.disabled()||this.changeActiveValue()}onKeyDown(e){switch(e.code){case"ArrowRight":this.onArrowRightKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break;default:break}e.stopPropagation()}onAfterViewInit(){this.bindMutationObserver()}onArrowRightKey(e){let i=this.findNextTab(e.currentTarget);i?this.changeFocusedTab(e,i):this.onHomeKey(e),e.preventDefault()}onArrowLeftKey(e){let i=this.findPrevTab(e.currentTarget);i?this.changeFocusedTab(e,i):this.onEndKey(e),e.preventDefault()}onHomeKey(e){let i=this.findFirstTab();this.changeFocusedTab(e,i),e.preventDefault()}onEndKey(e){let i=this.findLastTab();this.changeFocusedTab(e,i),e.preventDefault()}onPageDownKey(e){this.scrollInView(this.findLastTab()),e.preventDefault()}onPageUpKey(e){this.scrollInView(this.findFirstTab()),e.preventDefault()}onEnterKey(e){this.disabled()||this.changeActiveValue(),e.preventDefault()}findNextTab(e,i=!1){let n=i?e:e.nextElementSibling;return n?S(n,"data-p-disabled")||S(n,"data-pc-section")==="activebar"?this.findNextTab(n):n:null}findPrevTab(e,i=!1){let n=i?e:e.previousElementSibling;return n?S(n,"data-p-disabled")||S(n,"data-pc-section")==="activebar"?this.findPrevTab(n):n:null}findFirstTab(){return this.findNextTab(this.pcTabList?.tabs?.nativeElement?.firstElementChild,!0)}findLastTab(){return this.findPrevTab(this.pcTabList?.tabs?.nativeElement?.lastElementChild,!0)}changeActiveValue(){this.pcTabs.updateValue(this.value())}changeFocusedTab(e,i){Be(i),this.scrollInView(i)}scrollInView(e){e?.scrollIntoView?.({block:"nearest"})}bindMutationObserver(){Q(this.platformId)&&(this.mutationObserver=new MutationObserver(e=>{e.forEach(()=>{this.active()&&this.pcTabList?.updateInkBar()})}),this.mutationObserver.observe(this.el.nativeElement,{childList:!0,characterData:!0,subtree:!0}))}unbindMutationObserver(){this.mutationObserver?.disconnect()}onDestroy(){this.mutationObserver&&this.unbindMutationObserver()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=u(t)))(n||t)}})();static \u0275cmp=b({type:t,selectors:[["p-tab"]],hostVars:10,hostBindings:function(i,n){i&1&&E("focus",function(r){return n.onFocus(r)})("click",function(r){return n.onClick(r)})("keydown",function(r){return n.onKeyDown(r)}),i&2&&(M("id",n.id())("aria-controls",n.ariaControls())("role","tab")("aria-selected",n.active())("aria-disabled",n.disabled())("data-p-disabled",n.disabled())("data-p-active",n.active())("tabindex",n.tabindex()),v(n.cx("root")))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[H([$e,{provide:Qe,useExisting:t},{provide:W,useExisting:t}]),P([le,m]),g],ngContentSelectors:ue,decls:1,vars:0,template:function(i,n){i&1&&(q(),$(0))},dependencies:[K,ce,Z],encapsulation:2,changeDetection:0})}return t})();var mt=t=>["/subjects",t],gt=(t,a)=>a.slug;function ht(t,a){if(t&1&&(h(0,"p-tab",2),Te(1),y()),t&2){let e=a.$implicit;l("value",e.slug)("routerLink",_e(3,mt,e.slug)),c(),xe(" ",e.name," ")}}var We=class t{subjects=Ae;router=s(Se);activeSlug=Re(this.router.events.pipe(fe(a=>a instanceof Ne),pe(()=>this.slugFromUrl())),{initialValue:this.slugFromUrl()});slugFromUrl(){return this.router.url.split("?")[0].split("/").filter(Boolean).at(-1)??"english"}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=b({type:t,selectors:[["soual-subjects-shell"]],hostAttrs:[1,"block"],decls:6,vars:1,consts:[[1,"flex","flex-col","h-full","container"],[1,"mt-3",3,"value"],["routerLinkActive","",3,"value","routerLink"]],template:function(e,i){e&1&&(h(0,"div",0)(1,"p-tabs",1)(2,"p-tablist"),me(3,ht,2,5,"p-tab",2,gt),y()(),B(5,"router-outlet"),y()),e&2&&(c(),l("value",i.activeSlug()),c(2),ge(i.subjects))},dependencies:[Ee,Fe,Le,X,be,Ue],encapsulation:2,changeDetection:0})};export{We as SubjectsShellComponent};
