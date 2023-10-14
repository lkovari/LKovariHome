import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialExamplesRoutingModule } from './material-examples-routing.module';
import { MaterialExamplesMainComponent } from './components/material-examples-main/material-examples-main.component';
import { MaterialExamplesLayoutComponent } from './material-examples-layout/material-examples-layout.component';
import { AngularNewsRoutingModule } from '../angular-news/angular-news-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MaterialExamplesMainComponent,
    MaterialExamplesLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularNewsRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,    
    MaterialExamplesRoutingModule
  ]
})
export class MaterialExamplesModule { }
