import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AngularNewsV16SignalsComponent } from "./angular-news-v16-signals.component";

const routes: Routes = [
    { path: '', component: AngularNewsV16SignalsComponent }
  ];
  
  @NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class AngularNewsV16SignalsRoutingModule { }