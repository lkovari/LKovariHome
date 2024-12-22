import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialExamplesRoutingModule } from './material-examples-routing.module';
import { MaterialExamplesMainComponent } from './components/material-examples-main/material-examples-main.component';
import { MaterialExamplesLayoutComponent } from './material-examples-layout/material-examples-layout.component';
import { AngularNewsRoutingModule } from '../angular-news/angular-news-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
    imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AngularNewsRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule,
    FlexLayoutModule,
    SharedModule,
    MaterialExamplesRoutingModule,
    MaterialExamplesMainComponent,
    MaterialExamplesLayoutComponent
]
})
export class MaterialExamplesModule { }
