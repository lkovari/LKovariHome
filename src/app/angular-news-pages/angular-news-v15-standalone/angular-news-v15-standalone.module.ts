import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { AngularNewsV15StandaloneRoutingModule } from './angular-news-v15-standalone-routing.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    AngularNewsV15StandaloneRoutingModule
]
})
export class AngularNewsV15StandaloneModule { }
