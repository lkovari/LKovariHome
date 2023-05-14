import { RouterModule, Routes } from "@angular/router";
import { AngularNewsV15StandaloneComponent } from "../angular-news-pages/angular-news-v15-standalone/angular-news-v15-standalone.component";
import { AngularNewsV16SignalsComponent } from "../angular-news-pages/angular-news-v16-signals/angular-news-v16-signals.component";
import { AngularNewsComponent } from "./angular-news.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

const routes: Routes = [
    {
      path: '', component: AngularNewsComponent,
      children: [
        {path: 'angular-news-pages/angular-news-v16-signals', component: AngularNewsV16SignalsComponent },
        {path: 'angular-news-pages/angular-news-v15-standalone', component: AngularNewsV15StandaloneComponent }
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
  export class AngularNewsRoutingModule { }