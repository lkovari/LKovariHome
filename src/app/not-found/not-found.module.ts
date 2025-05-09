import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { NotFoundRoutingModule } from './not-found-routing.module';



@NgModule({
    imports: [
        CommonModule,
        NotFoundRoutingModule,
        NotFoundComponent
    ],
    exports: [NotFoundComponent]
})
export class NotFoundModule { }
