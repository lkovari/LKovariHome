import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialExamplesMainComponent } from './components/material-examples-main/material-examples-main.component';
import { MaterialExamplesLayoutComponent } from './material-examples-layout/material-examples-layout.component';

const routes: Routes = [
  {
  path: '', component: MaterialExamplesLayoutComponent,
  children: [
    { path: 'material-examples/components/material-examples-main', component: MaterialExamplesMainComponent }
  ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialExamplesRoutingModule { }
