import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularNewsRoutingModule } from './angular-news-routing.module';
import { AngularNewsComponent } from './angular-news.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AngularNewsComponent],
  exports: [

  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularNewsRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
  ],
})
export class AngularNewsModule {}
