import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaygroundLayoutComponent } from './playground-layout/playground-layout.component';
import { NestedExampleComponent } from './components/nested-example/nested-example.component';
import { CustomizableWizardMainComponent } from './components/customizable-wizard/customizable-wizard-main.component';

const routes: Routes = [
  {
  path: '', component: PlaygroundLayoutComponent,
  children: [
    { path: 'playground/components/nested-example', component: NestedExampleComponent },
    { path: 'playground/components/customizable-wizard', component: CustomizableWizardMainComponent }
  ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaygroundRoutingModule { }
