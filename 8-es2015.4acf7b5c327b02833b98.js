(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{OFhr:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),o=u("H+bZ");class e{constructor(l,n){this.route=l,this.api=n,this.projectTab="columns"}ngOnInit(){this.route.params.subscribe(l=>{this.api.getOrganization(l.id).subscribe(l=>{this.organization=l}),this.api.getProjects(l.id).subscribe(n=>{this.projects=n,this.projectSelected=this.projects[0],this.api.getColumns(l.id).subscribe(l=>{for(const n of this.projects)n.columns=l.filter(l=>l.project===n.id)})})})}addProject(l){this.api.createProject(this.organization.id,l).subscribe(l=>{l.columns=[],this.projects.push(l)})}addColumn(l){this.api.createColumn(this.projectSelected.id,l).subscribe(l=>{this.projectSelected.columns.push(l)})}deleteColumn(l){confirm("Are you sure you want to delete this column?")&&this.api.deleteColumn(l.id).subscribe(()=>{const n=this.projectSelected.columns.indexOf(l);this.projectSelected.columns.splice(n,1)})}updateColumns(){for(let l of this.projectSelected.columns)this.api.updateColumn(l.id,{name:l.name}).subscribe(n=>{l=n})}}class i{}var c=u("pMnS"),r=u("iInd"),s=u("SVse"),a=u("fNgX"),b=u("Nv++"),p=u("cUpR"),d=u("s7LF");class m{constructor(l){this.formBuilder=l,this.margin=!0,this.button=!0,this.save=new t.m}ngOnInit(){this.form=this.formBuilder.group({name:["",d.v.required]})}onSubmit(){this.save.emit(this.form.controls.name.value),this.form.patchValue({name:""})}}var g=t.ob({encapsulation:2,styles:[],data:{}});function f(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,14,"form",[["class","form-group input-group"],["novalidate",""]],[[2,"mb-0",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var o=!0,e=l.component;return"submit"===n&&(o=!1!==t.Cb(l,2).onSubmit(u)&&o),"reset"===n&&(o=!1!==t.Cb(l,2).onReset()&&o),"ngSubmit"===n&&(o=!1!==e.onSubmit()&&o),o}),null,null)),t.pb(1,16384,null,0,d.A,[],null,null),t.pb(2,540672,null,0,d.i,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Hb(2048,null,d.c,null,[d.i]),t.pb(4,16384,null,0,d.o,[[4,d.c]],null,null),(l()(),t.qb(5,0,null,null,5,"input",[["class","form-control"],["formControlName","name"],["type","text"]],[[8,"placeholder",0],[8,"id",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Cb(l,6)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Cb(l,6).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Cb(l,6)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Cb(l,6)._compositionEnd(u.target.value)&&o),o}),null,null)),t.pb(6,16384,null,0,d.d,[t.B,t.k,[2,d.a]],null,null),t.Hb(1024,null,d.l,(function(l){return[l]}),[d.d]),t.pb(8,671744,null,0,d.h,[[3,d.c],[8,null],[8,null],[6,d.l],[2,d.y]],{name:[0,"name"]},null),t.Hb(2048,null,d.m,null,[d.h]),t.pb(10,16384,null,0,d.n,[[4,d.m]],null,null),(l()(),t.qb(11,0,null,null,3,"div",[["class","input-group-append"]],null,null,null,null,null)),(l()(),t.qb(12,0,null,null,2,"button",[["class","btn btn-primary"]],[[8,"disabled",0]],null,null,null,null)),(l()(),t.qb(13,0,null,null,1,"fa-icon",[["class","ng-fa-icon"],["icon","plus"]],[[8,"innerHTML",1]],null,null,a.b,a.a)),t.pb(14,573440,null,0,b.a,[p.b,b.b],{iconProp:[0,"iconProp"]},null)],(function(l,n){l(n,2,0,n.component.form),l(n,8,0,"name"),l(n,14,0,"plus")}),(function(l,n){var u=n.component;l(n,0,0,!u.margin,t.Cb(n,4).ngClassUntouched,t.Cb(n,4).ngClassTouched,t.Cb(n,4).ngClassPristine,t.Cb(n,4).ngClassDirty,t.Cb(n,4).ngClassValid,t.Cb(n,4).ngClassInvalid,t.Cb(n,4).ngClassPending),l(n,5,0,t.ub(1,"New ",u.name,""),u.name,t.Cb(n,10).ngClassUntouched,t.Cb(n,10).ngClassTouched,t.Cb(n,10).ngClassPristine,t.Cb(n,10).ngClassDirty,t.Cb(n,10).ngClassValid,t.Cb(n,10).ngClassInvalid,t.Cb(n,10).ngClassPending),l(n,12,0,u.form.invalid),l(n,13,0,t.Cb(n,14).renderedIconHTML)}))}var v=t.ob({encapsulation:0,styles:[[""]],data:{}});function h(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,13,"div",[["class","row justify-content-center"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,12,"div",[["class","col-lg-8 mb-3"]],null,null,null,null,null)),(l()(),t.qb(2,0,null,null,11,"div",[["class","card bg-light"]],null,null,null,null,null)),(l()(),t.qb(3,0,null,null,10,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.qb(4,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Kb(5,null,["",""])),(l()(),t.Kb(-1,null,[" created by "])),(l()(),t.qb(7,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Kb(8,null,["",""])),(l()(),t.qb(9,0,null,null,4,"a",[["class","float-right"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.Cb(l,10).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&o),o}),null,null)),t.pb(10,671744,null,0,r.l,[r.k,r.a,s.h],{routerLink:[0,"routerLink"]},null),t.Db(11,2),(l()(),t.qb(12,0,null,null,1,"fa-icon",[["class","ng-fa-icon"],["icon","arrow-circle-right"]],[[8,"innerHTML",1]],null,null,a.b,a.a)),t.pb(13,573440,null,0,b.a,[p.b,b.b],{iconProp:[0,"iconProp"]},null)],(function(l,n){var u=l(n,11,0,"../../../",n.component.organization.id);l(n,10,0,u),l(n,13,0,"arrow-circle-right")}),(function(l,n){var u=n.component;l(n,5,0,u.organization.name),l(n,8,0,u.organization.user.username),l(n,9,0,t.Cb(n,10).target,t.Cb(n,10).href),l(n,12,0,t.Cb(n,13).renderedIconHTML)}))}function C(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,1,"li",[["class","list-group-item"]],[[2,"active",null]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==(l.component.projectSelected=l.context.$implicit)&&t),t}),null,null)),(l()(),t.Kb(1,null,[" "," "]))],null,(function(l,n){l(n,0,0,n.component.projectSelected===n.context.$implicit),l(n,1,0,n.context.$implicit.name)}))}function q(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,2,"ul",[["class","list-group list-group-flush pointer"]],null,null,null,null,null)),(l()(),t.fb(16777216,null,null,1,null,C)),t.pb(2,278528,null,0,s.j,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.component.projects)}),null)}function j(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,10,"div",[["class","form-group input-group"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,5,"input",[["class","form-control"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Cb(l,2)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Cb(l,2).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Cb(l,2)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Cb(l,2)._compositionEnd(u.target.value)&&o),"ngModelChange"===n&&(o=!1!==(l.context.$implicit.name=u)&&o),o}),null,null)),t.pb(2,16384,null,0,d.d,[t.B,t.k,[2,d.a]],null,null),t.Hb(1024,null,d.l,(function(l){return[l]}),[d.d]),t.pb(4,671744,null,0,d.q,[[8,null],[8,null],[8,null],[6,d.l]],{model:[0,"model"]},{update:"ngModelChange"}),t.Hb(2048,null,d.m,null,[d.q]),t.pb(6,16384,null,0,d.n,[[4,d.m]],null,null),(l()(),t.qb(7,0,null,null,3,"div",[["class","input-group-append"]],null,null,null,null,null)),(l()(),t.qb(8,0,null,null,2,"button",[["class","btn btn-secondary"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.deleteColumn(l.context.$implicit)&&t),t}),null,null)),(l()(),t.qb(9,0,null,null,1,"fa-icon",[["class","ng-fa-icon"],["icon","trash"]],[[8,"innerHTML",1]],null,null,a.b,a.a)),t.pb(10,573440,null,0,b.a,[p.b,b.b],{iconProp:[0,"iconProp"]},null)],(function(l,n){l(n,4,0,n.context.$implicit.name),l(n,10,0,"trash")}),(function(l,n){l(n,1,0,t.Cb(n,6).ngClassUntouched,t.Cb(n,6).ngClassTouched,t.Cb(n,6).ngClassPristine,t.Cb(n,6).ngClassDirty,t.Cb(n,6).ngClassValid,t.Cb(n,6).ngClassInvalid,t.Cb(n,6).ngClassPending),l(n,9,0,t.Cb(n,10).renderedIconHTML)}))}function y(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,1,"button",[["class","btn btn-block btn-primary"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.updateColumns()&&t),t}),null,null)),(l()(),t.Kb(-1,null,[" Update "]))],null,null)}function M(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,6,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.fb(16777216,null,null,1,null,j)),t.pb(2,278528,null,0,s.j,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.qb(3,0,null,null,1,"app-form-add",[["name","column"]],null,[[null,"save"]],(function(l,n,u){var t=!0;return"save"===n&&(t=!1!==l.component.addColumn(u)&&t),t}),f,g)),t.pb(4,114688,null,0,m,[d.e],{name:[0,"name"],margin:[1,"margin"]},{save:"save"}),(l()(),t.fb(16777216,null,null,1,null,y)),t.pb(6,16384,null,0,s.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,2,0,u.projectSelected.columns),l(n,4,0,"column",u.projectSelected.columns.length>0),l(n,6,0,u.projectSelected.columns.length)}),null)}function k(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,0,"div",[["class","card-body"]],null,null,null,null,null))],null,null)}function S(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,25,"div",[["class","row justify-content-center"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,8,"div",[["class","col-lg-3 my-3"]],null,null,null,null,null)),(l()(),t.qb(2,0,null,null,7,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.qb(3,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Projects"])),(l()(),t.fb(16777216,null,null,1,null,q)),t.pb(6,16384,null,0,s.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(7,0,null,null,2,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.qb(8,0,null,null,1,"app-form-add",[["name","project"]],null,[[null,"save"]],(function(l,n,u){var t=!0;return"save"===n&&(t=!1!==l.component.addProject(u)&&t),t}),f,g)),t.pb(9,114688,null,0,m,[d.e],{name:[0,"name"],margin:[1,"margin"]},{save:"save"}),(l()(),t.qb(10,0,null,null,15,"div",[["class","col-lg-5 my-3"]],null,null,null,null,null)),(l()(),t.qb(11,0,null,null,14,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.qb(12,0,null,null,9,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t.qb(13,0,null,null,1,"div",[["class","mb-3"]],null,null,null,null,null)),(l()(),t.Kb(14,null,["",""])),(l()(),t.qb(15,0,null,null,6,"ul",[["class","nav nav-tabs card-header-tabs"]],null,null,null,null,null)),(l()(),t.qb(16,0,null,null,2,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),t.qb(17,0,null,null,1,"div",[["class","nav-link pointer"]],[[2,"active",null]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==(l.component.projectTab="columns")&&t),t}),null,null)),(l()(),t.Kb(-1,null,[" Columns "])),(l()(),t.qb(19,0,null,null,2,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),t.qb(20,0,null,null,1,"div",[["class","nav-link pointer"]],[[2,"active",null]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==(l.component.projectTab="options")&&t),t}),null,null)),(l()(),t.Kb(-1,null,[" Options "])),(l()(),t.fb(16777216,null,null,1,null,M)),t.pb(23,16384,null,0,s.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,null,1,null,k)),t.pb(25,16384,null,0,s.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,6,0,u.projects),l(n,9,0,"project",!1),l(n,23,0,"columns"===u.projectTab&&u.projectSelected.columns),l(n,25,0,"options"===u.projectTab)}),(function(l,n){var u=n.component;l(n,14,0,u.projectSelected.name),l(n,17,0,"columns"===u.projectTab),l(n,20,0,"options"===u.projectTab)}))}function I(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,4,"div",[["class","container py-5"]],null,null,null,null,null)),(l()(),t.fb(16777216,null,null,1,null,h)),t.pb(2,16384,null,0,s.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,null,1,null,S)),t.pb(4,16384,null,0,s.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,2,0,u.organization),l(n,4,0,u.projects)}),null)}function T(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,1,"app-settings",[],null,null,null,I,v)),t.pb(1,114688,null,0,e,[r.a,o.a],null,null)],(function(l,n){l(n,1,0)}),null)}var P=t.mb("app-settings",e,T,{},{},[]);class w{}u.d(n,"SettingsModuleNgFactory",(function(){return A}));var A=t.nb(i,[],(function(l){return t.zb([t.Ab(512,t.j,t.Y,[[8,[c.a,P]],[3,t.j],t.v]),t.Ab(4608,s.m,s.l,[t.s,[2,s.v]]),t.Ab(4608,d.x,d.x,[]),t.Ab(4608,d.e,d.e,[]),t.Ab(1073742336,s.b,s.b,[]),t.Ab(1073742336,r.m,r.m,[[2,r.r],[2,r.k]]),t.Ab(1073742336,b.f,b.f,[]),t.Ab(1073742336,d.w,d.w,[]),t.Ab(1073742336,d.j,d.j,[]),t.Ab(1073742336,d.s,d.s,[]),t.Ab(1073742336,w,w,[]),t.Ab(1073742336,i,i,[]),t.Ab(1024,r.i,(function(){return[[{path:"",component:e}]]}),[])])}))},fNgX:function(l,n,u){"use strict";u.d(n,"a",(function(){return o})),u.d(n,"b",(function(){return e}));var t=u("8Y7J"),o=(u("Nv++"),u("SVse"),u("cUpR"),t.ob({encapsulation:2,styles:[],data:{}}));function e(l){return t.Mb(0,[],null,null)}}}]);