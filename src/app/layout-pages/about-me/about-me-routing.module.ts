import { NgModule } from '@angular/core';
import { AboutMeComponent } from './about-me.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: AboutMeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AboutMeRoutingModule { }
