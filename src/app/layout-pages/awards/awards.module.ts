import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwardsComponent } from './awards.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { AwardsRoutingModule } from './awards-routing.module';



@NgModule({
  declarations: [ AwardsComponent ],
  exports: [ AwardsComponent ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MaterialModule,
    AwardsRoutingModule        
  ]
})
export class AwardsModule { }
