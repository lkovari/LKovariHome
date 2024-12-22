import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularNewsRoutingModule } from './angular-news-routing.module';
import { AngularNewsComponent } from './angular-news.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    exports: [],
    imports: [
    CommonModule,
    RouterModule,
    AngularNewsRoutingModule,
    FlexLayoutModule,
    SharedModule,
    AngularNewsComponent,
],
})
export class AngularNewsModule {}
