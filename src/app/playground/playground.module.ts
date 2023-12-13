import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundRoutingModule } from './playground-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PlaygroundLayoutComponent } from './playground-layout/playground-layout.component';
import { NestedExampleComponent } from './components/nested-example/nested-example.component';



@NgModule({
  declarations: [
    PlaygroundLayoutComponent, 
    NestedExampleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
    PlaygroundRoutingModule
  ]
})
export class PlaygroundModule { }
