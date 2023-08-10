import { RouterModule, Routes } from "@angular/router";
import { AngularNewsComponent } from "./angular-news.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

const routes: Routes = [
    {
      path: '', component: AngularNewsComponent,
      children: [
        { path: 'angular-news-pages/angular-news-v16-signals', 
        loadChildren: () => 
        import('../angular-news-pages/angular-news-v16-signals/angular-news-v16-signals.module')
        .then(m => m.AngularNewsV16SignalsModule) },
        { path: 'angular-news-pages/angular-news-v15-standalone', 
        loadChildren: () => 
        import('../angular-news-pages/angular-news-v15-standalone/angular-news-v15-standalone.module')
        .then(m => m.AngularNewsV15StandaloneModule) },
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