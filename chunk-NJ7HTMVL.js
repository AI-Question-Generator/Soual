import{$a as S,$d as N,Bb as I,Ka as v,O as y,P as g,Pc as w,Qb as E,R as k,Rb as M,Rd as F,T as r,Xa as a,Ya as b,Yd as d,_ as C,_b as D,a as p,ab as s,b as m,be as B,ce as T,de as c,hb as l,he as P,na as o,ub as u,vb as f,wb as h}from"./chunk-6VNHD5IR.js";var R=`
    .p-skeleton {
        display: block;
        overflow: hidden;
        background: dt('skeleton.background');
        border-radius: dt('skeleton.border.radius');
    }

    .p-skeleton::after {
        content: '';
        animation: p-skeleton-animation 1.2s infinite;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-100%);
        z-index: 1;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0), dt('skeleton.animation.background'), rgba(255, 255, 255, 0));
    }

    [dir='rtl'] .p-skeleton::after {
        animation-name: p-skeleton-animation-rtl;
    }

    .p-skeleton-circle {
        border-radius: 50%;
    }

    .p-skeleton-animation-none::after {
        animation: none;
    }

    @keyframes p-skeleton-animation {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(100%);
        }
    }

    @keyframes p-skeleton-animation-rtl {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(-100%);
        }
    }
`;var x={root:{position:"relative"}},A={root:({instance:e})=>["p-skeleton p-component",{"p-skeleton-circle":e.shape==="circle","p-skeleton-animation-none":e.animation==="none"}]},V=(()=>{class e extends N{name="skeleton";style=R;classes=A;inlineStyles=x;static \u0275fac=(()=>{let t;return function(n){return(t||(t=o(e)))(n||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var z=new k("SKELETON_INSTANCE"),H=(()=>{class e extends T{componentName="Skeleton";$pcSkeleton=r(z,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=r(c,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;shape="rectangle";animation="wave";borderRadius;size;width="100%";height="1rem";_componentStyle=r(V);get containerStyle(){let t=this._componentStyle?.inlineStyles.root,i;return this.$unstyled()||(this.size?i=m(p({},t),{width:this.size,height:this.size,borderRadius:this.borderRadius}):i=m(p({},t),{width:this.width,height:this.height,borderRadius:this.borderRadius})),i}get dataP(){return this.cn({[this.shape]:this.shape})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=o(e)))(n||e)}})();static \u0275cmp=a({type:e,selectors:[["p-skeleton"]],hostVars:6,hostBindings:function(i,n){i&2&&(l("aria-hidden",!0)("data-p",n.dataP),E(n.containerStyle),M(n.cn(n.cx("root"),n.styleClass)))},inputs:{styleClass:"styleClass",shape:"shape",animation:"animation",borderRadius:"borderRadius",size:"size",width:"width",height:"height"},features:[D([V,{provide:z,useExisting:e},{provide:B,useExisting:e}]),S([c]),s],decls:0,vars:0,template:function(i,n){},dependencies:[w,d],encapsulation:2,changeDetection:0})}return e})(),ne=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=b({type:e});static \u0275inj=g({imports:[H,d,d]})}return e})();var X=["data-p-icon","plus"],se=(()=>{class e extends P{pathId;onInit(){this.pathId="url(#"+F()+")"}static \u0275fac=(()=>{let t;return function(n){return(t||(t=o(e)))(n||e)}})();static \u0275cmp=a({type:e,selectors:[["","data-p-icon","plus"]],features:[s],attrs:X,decls:5,vars:2,consts:[["d","M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(C(),u(0,"g"),h(1,"path",0),f(),u(2,"defs")(3,"clipPath",1),h(4,"rect",2),f()()),i&2&&(l("clip-path",n.pathId),v(3),I("id",n.pathId))},encapsulation:2})}return e})();export{se as a,H as b,ne as c};
