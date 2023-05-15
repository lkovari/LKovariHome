import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularNewsV16SignalsComponent } from './angular-news-v16-signals.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [AngularNewsV16SignalsComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
  ]
})
export class AngularNewsV16SignalsModule { }
