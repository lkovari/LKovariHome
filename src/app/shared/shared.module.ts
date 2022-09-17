import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
import { LayoutContentComponent } from './components/layout-content/layout-content.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [ HeaderComponent, SidenavListComponent, LayoutContentComponent ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    SidenavListComponent,
    MaterialModule,
    FlexLayoutModule,
    LayoutContentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ]
})
export class SharedModule { }
