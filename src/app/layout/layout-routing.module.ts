import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { LayoutComponent } from "./layout.component";

const routes: Routes = [
    {
      path: '', component: LayoutComponent,
      children: [
        {path: 'home', component: HomeComponent }
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
  