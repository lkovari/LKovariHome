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
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    MaterialExamplesMainComponent,
    MaterialExamplesLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AngularNewsRoutingModule,
    MaterialModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    SharedModule,    
    MaterialExamplesRoutingModule
  ]
})
export class MaterialExamplesModule { }
