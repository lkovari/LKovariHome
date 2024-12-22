import { NgModule } from '@angular/core';
import { AngularNewsV16SignalsComponent } from './angular-news-v16-signals.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { AngularNewsV16SignalsRoutingModule } from './angular-news-v16-signals-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
    imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    InputNumberModule,
    AngularNewsV16SignalsRoutingModule,
    AngularNewsV16SignalsComponent
]
})
export class AngularNewsV16SignalsModule { }
