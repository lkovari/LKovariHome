import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { SidenavListComponent } from '../shared/components/sidenav-list/sidenav-list.component';
import { LayoutContentComponent } from '../shared/components/layout-content/layout-content.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    LayoutRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HeaderComponent,
    SidenavListComponent,
    MaterialModule,
    FlexLayoutModule,
    LayoutContentComponent
  ]  
})
export class LayoutModule { }
