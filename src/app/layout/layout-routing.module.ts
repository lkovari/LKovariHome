import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutMeComponent } from "../layout-pages/about-me/about-me.component";
import { AwardsComponent } from "../layout-pages/awards/awards.component";
import { HomeComponent } from "../layout-pages/home/home.component";

import { LayoutComponent } from "./layout.component";

const routes: Routes = [
    {
      path: '', component: LayoutComponent,
      children: [
        {path: 'layout-pages/home', component: HomeComponent },
        {path: 'layout-pages/about-me', component: AboutMeComponent },
        {path: 'layout-pages/awards', component: AwardsComponent }
        // {path: 'page 1', loadChildren: () => import('./menu-item1/menu-item1.module').then(m => m.MenuItem1Module) },
      ]
    }];
  
  @NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class LayoutRoutingModule { }
  