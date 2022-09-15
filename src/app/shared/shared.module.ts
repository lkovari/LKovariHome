import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
import { LayoutContentComponent } from './components/layout-content/layout-content.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ HeaderComponent, SidenavListComponent, LayoutContentComponent ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    SidenavListComponent,
    LayoutContentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ]
})
export class SharedModule { }
