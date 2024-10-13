"use strict";(self.webpackChunkrecipe_book=self.webpackChunkrecipe_book||[]).push([[423],{423:(I,d,p)=>{p.r(d),p.d(d,{ShoppingListModule:()=>L});var o=p(285),m=p(561),t=p(2025),a=p(1600),l=p(6814);function g(e,u){if(1&e){const i=t.EpF();t.TgZ(0,"a",2),t.NdJ("click",function(){const r=t.CHM(i).index,c=t.oxw();return t.KtG(c.onEditItem(r))}),t._uU(1),t.qZA()}if(2&e){const i=u.$implicit;t.xp6(1),t.AsE(" ",i.name," (",i.amount,") ")}}let h=(()=>{class e{constructor(i){this._shoppingListService=i}ngOnInit(){this.ingredients=this._shoppingListService.getIngredients(),this._ingSubjectChanged=this._shoppingListService.ingredientsChanged.subscribe(i=>{this.ingredients=i})}onEditItem(i){this._shoppingListService.startedEditing.next(i)}ngOnDestroy(){this._ingSubjectChanged.unsubscribe()}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(a._))};static#i=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-shopping-list-view"]],decls:2,vars:1,consts:[[1,"list-group"],["class","list-group-item","style","cursor: pointer",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",2,"cursor","pointer",3,"click"]],template:function(n,s){1&n&&(t.TgZ(0,"ul",0),t.YNc(1,g,2,2,"a",1),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngForOf",s.ingredients))},dependencies:[l.sg]})}return e})();var f=p(8507);const b=["form"];function _(e,u){if(1&e){const i=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){t.CHM(i);const s=t.oxw();return t.KtG(s.onDelete())}),t._uU(1," Delete "),t.qZA()}}let v=(()=>{class e{constructor(i){this._shoppingListService=i,this.editMode=!1}ngOnInit(){this.subcription=this._shoppingListService.startedEditing.subscribe(i=>{this.editedItemIndex=i,this.editMode=!0,this.editedItem=this._shoppingListService.getIngredient(i),this.shoppingListForm.setValue({name:this.editedItem.name,amount:this.editedItem.amount})})}onSubmit(i){const n=i.value,s=new f.o(n.name,n.amount);this.editMode?this._shoppingListService.updateIngredient(this.editedItemIndex,s):this._shoppingListService.addIngredient(s),this.editMode=!1,i.reset()}onClear(){this.shoppingListForm.reset(),this.editMode=!1}onDelete(){this._shoppingListService.removeIngredient(this.editedItemIndex),this.onClear()}ngOnDestroy(){this.subcription.unsubscribe()}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(a._))};static#i=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-shopping-list-edit"]],viewQuery:function(n,s){if(1&n&&t.Gf(b,5),2&n){let r;t.iGM(r=t.CRH())&&(s.shoppingListForm=r.first)}},decls:21,vars:3,consts:[[1,"row"],[1,"col-xs-12"],[3,"ngSubmit"],["form","ngForm"],[1,"col-sm-5","form-group"],["for","name"],["type","text","name","name","id","name","ngModel","","required","",1,"form-control"],[1,"col-sm-2","form-group"],["for","amount"],["type","number","name","amount","id","amount","ngModel","","required","","pattern","^[1-9]+[0-9]*$",1,"form-control"],[1,"btn-toolbar"],["type","submit",1,"btn","btn-success",3,"disabled"],["class","btn btn-danger","type","button",3,"click",4,"ngIf"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(n,s){if(1&n){const r=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"form",2,3),t.NdJ("ngSubmit",function(){t.CHM(r);const Z=t.MAs(3);return t.KtG(s.onSubmit(Z))}),t.TgZ(4,"div",0)(5,"div",4)(6,"label",5),t._uU(7,"Name"),t.qZA(),t._UZ(8,"input",6),t.qZA(),t.TgZ(9,"div",7)(10,"label",8),t._uU(11,"Amount"),t.qZA(),t._UZ(12,"input",9),t.qZA()(),t.TgZ(13,"div",0)(14,"div",1)(15,"div",10)(16,"button",11),t._uU(17),t.qZA(),t.YNc(18,_,2,0,"button",12),t.TgZ(19,"button",13),t.NdJ("click",function(){return s.onClear()}),t._uU(20," Clear "),t.qZA()()()()()()()}if(2&n){const r=t.MAs(3);t.xp6(16),t.Q6J("disabled",!r.valid),t.xp6(1),t.hij(" ",s.editMode?"Update":"Add"," "),t.xp6(1),t.Q6J("ngIf",s.editMode)}},dependencies:[o._Y,o.Fj,o.wV,o.JJ,o.JL,o.Q7,o.c5,o.On,o.F,l.O5]})}return e})(),S=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#i=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-shopping-list"]],decls:5,vars:0,consts:[[1,"row"],[1,"col-xs-10"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"app-shopping-list-edit")(3,"hr")(4,"app-shopping-list-view"),t.qZA()())},dependencies:[h,v]})}return e})();var C=p(6208);let L=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#i=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[o.u5,C.m,m.Bz.forChild([{path:"",component:S}])]})}return e})()}}]);