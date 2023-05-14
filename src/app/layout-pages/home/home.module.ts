import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MaterialModule,
    HomeRoutingModule   
  ]
})
export class HomeModule { }
