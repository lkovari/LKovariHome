import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigitsGameComponent } from './digits-game.component';
import { DigitsRoutingModule } from './digits-routing.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    DigitsGameComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DigitsRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class DigitsModule { }
