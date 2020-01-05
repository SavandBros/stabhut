(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Y5kk:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),e=u("s7LF"),i=u("H+bZ");class r{constructor(l,n){this.api=l,this.formBuilder=n,this.errors={}}ngOnInit(){this.form=this.formBuilder.group({name:["",e.v.required]})}submit(){this.loading=!0,this.api.createOrganization(this.form.get("name").value).subscribe(l=>{this.loading=!1,this.organization=l,this.api.createProject(l.id,"Default").subscribe(l=>{this.api.createChat({project:l.id,content:"I just created this awesome organization!"}).subscribe(),this.api.createTask({project:l.id,content:"Setup this organization"}).subscribe(),this.api.createColumn({project:l.id,order:0,name:"Ready"}).subscribe(l=>{this.api.createCard({column:l.id,content:"Hey, I'm a sample card here. Do whatever you want with me."}).subscribe()}),this.api.createColumn({project:l.id,order:1,name:"In Progress"}).subscribe(),this.api.createColumn({project:l.id,order:2,name:"Needs Review"}).subscribe(),this.api.createColumn({project:l.id,order:3,name:"Done"}).subscribe()})},l=>{this.loading=!1,this.errors=l.error})}}class o{}var a=u("pMnS"),s=u("SVse"),b=u("iInd"),c=t.ob({encapsulation:0,styles:[[""]],data:{}});function d(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,1,"div",[["class","card-header text-center"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Create an Organization"]))],null,null)}function g(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,1,"div",[["class","text-danger"]],null,null,null,null,null)),(l()(),t.Kb(1,null,["",""]))],null,(function(l,n){l(n,1,0,n.component.errors.name[0])}))}function p(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,16,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var e=!0,i=l.component;return"submit"===n&&(e=!1!==t.Cb(l,2).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.Cb(l,2).onReset()&&e),"ngSubmit"===n&&(e=!1!==i.submit()&&e),e}),null,null)),t.pb(1,16384,null,0,e.A,[],null,null),t.pb(2,540672,null,0,e.i,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Hb(2048,null,e.c,null,[e.i]),t.pb(4,16384,null,0,e.o,[[4,e.c]],null,null),(l()(),t.qb(5,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.qb(6,0,null,null,5,"input",[["class","form-control"],["formControlName","name"],["placeholder","Name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.Cb(l,7)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Cb(l,7).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Cb(l,7)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Cb(l,7)._compositionEnd(u.target.value)&&e),e}),null,null)),t.pb(7,16384,null,0,e.d,[t.B,t.k,[2,e.a]],null,null),t.Hb(1024,null,e.l,(function(l){return[l]}),[e.d]),t.pb(9,671744,null,0,e.h,[[3,e.c],[8,null],[8,null],[6,e.l],[2,e.y]],{name:[0,"name"]},null),t.Hb(2048,null,e.m,null,[e.h]),t.pb(11,16384,null,0,e.n,[[4,e.m]],null,null),(l()(),t.fb(16777216,null,null,1,null,g)),t.pb(13,16384,null,0,s.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(14,0,null,null,2,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),t.qb(15,0,null,null,1,"button",[["class","btn btn-success btn-block"]],[[8,"disabled",0]],null,null,null,null)),(l()(),t.Kb(-1,null,["Submit"]))],(function(l,n){var u=n.component;l(n,2,0,u.form),l(n,9,0,"name"),l(n,13,0,u.errors.name)}),(function(l,n){var u=n.component;l(n,0,0,t.Cb(n,4).ngClassUntouched,t.Cb(n,4).ngClassTouched,t.Cb(n,4).ngClassPristine,t.Cb(n,4).ngClassDirty,t.Cb(n,4).ngClassValid,t.Cb(n,4).ngClassInvalid,t.Cb(n,4).ngClassPending),l(n,6,0,t.Cb(n,11).ngClassUntouched,t.Cb(n,11).ngClassTouched,t.Cb(n,11).ngClassPristine,t.Cb(n,11).ngClassDirty,t.Cb(n,11).ngClassValid,t.Cb(n,11).ngClassInvalid,t.Cb(n,11).ngClassPending),l(n,15,0,u.loading||u.form.invalid)}))}function m(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,2,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.fb(16777216,null,null,1,null,p)),t.pb(2,16384,null,0,s.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,n.component.form)}),null)}function f(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,8,"div",[["class","card-body text-center"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"div",[["class","text-success"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Successfully created organization."])),(l()(),t.qb(3,0,null,null,1,"p",[["class","small"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Click on the button below to view it."])),(l()(),t.qb(5,0,null,null,3,"a",[["class","btn btn-info"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Cb(l,6).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.pb(6,671744,null,0,b.l,[b.k,b.a,s.h],{routerLink:[0,"routerLink"]},null),t.Db(7,2),(l()(),t.Kb(8,null,["",""]))],(function(l,n){var u=l(n,7,0,"../../",n.component.organization.id);l(n,6,0,u)}),(function(l,n){var u=n.component;l(n,5,0,t.Cb(n,6).target,t.Cb(n,6).href),l(n,8,0,u.organization.name)}))}function h(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,9,"div",[["class","container py-5"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,8,"div",[["class","row justify-content-center"]],null,null,null,null,null)),(l()(),t.qb(2,0,null,null,7,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),t.qb(3,0,null,null,6,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.fb(16777216,null,null,1,null,d)),t.pb(5,16384,null,0,s.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,null,1,null,m)),t.pb(7,16384,null,0,s.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,null,1,null,f)),t.pb(9,16384,null,0,s.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,5,0,!u.organization),l(n,7,0,!u.organization),l(n,9,0,u.organization)}),null)}function C(l){return t.Mb(0,[(l()(),t.qb(0,0,null,null,1,"app-new",[],null,null,null,h,c)),t.pb(1,114688,null,0,r,[i.a,e.e],null,null)],(function(l,n){l(n,1,0)}),null)}var v=t.mb("app-new",r,C,{},{},[]),k=u("Nv++");u.d(n,"NewModuleNgFactory",(function(){return y}));var y=t.nb(o,[],(function(l){return t.zb([t.Ab(512,t.j,t.Y,[[8,[a.a,v]],[3,t.j],t.v]),t.Ab(4608,s.m,s.l,[t.s,[2,s.y]]),t.Ab(4608,e.e,e.e,[]),t.Ab(4608,e.x,e.x,[]),t.Ab(1073742336,s.b,s.b,[]),t.Ab(1073742336,e.w,e.w,[]),t.Ab(1073742336,e.s,e.s,[]),t.Ab(1073742336,b.m,b.m,[[2,b.r],[2,b.k]]),t.Ab(1073742336,k.f,k.f,[]),t.Ab(1073742336,o,o,[]),t.Ab(1024,b.i,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);