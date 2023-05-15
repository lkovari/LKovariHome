import { RouterModule, Routes } from "@angular/router";
import { AngularNewsV15StandaloneComponent } from "./angular-news-v15-standalone.component";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

const routes: Routes = [
    { path: '', component: AngularNewsV15StandaloneComponent }
  ];
  
  @NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
export class AngularNewsV15StandaloneRoutingModule {}