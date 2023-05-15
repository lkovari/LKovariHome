import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { AngularNewsV16SignalsComponent } from "./angular-news-v16-signals.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    { path: '', component: AngularNewsV16SignalsComponent }
  ];
  
  @NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ]
  })
  export class AngularNewsV16SignalsRoutingModule { }