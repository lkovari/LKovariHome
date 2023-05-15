import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material/material.module';



@NgModule({
  declarations: [
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MaterialModule   
  ]
})
export class AboutMeModule { }
