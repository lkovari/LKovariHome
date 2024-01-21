import { NgModule } from '@angular/core';
import { PlaygroundRoutingModule } from './playground-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PlaygroundLayoutComponent } from './playground-layout/playground-layout.component';
import { NestedExampleComponent } from './components/nested-example/nested-example.component';
import { CustomizableWizardComponent } from './components/customizable-wizard/customizable-wizard/customizable-wizard.component';
import { CommonModule } from '@angular/common';
import { WizardProgressComponent } from './components/customizable-wizard/wizard-progress/wizard-progress.component';
import { CustomizableWizardMainComponent } from './components/customizable-wizard/customizable-wizard-main.component';
import { PersonComponent } from './components/customizable-wizard/component-data-sources/person/person.component';
import { AddressComponent } from './components/customizable-wizard/component-data-sources/address/address.component';
import { CompanyComponent } from './components/customizable-wizard/component-data-sources/company/company.component';
import { DynamicComponentHostDirective } from './directives/dynamic-component-host.directive';



@NgModule({
  declarations: [
    PlaygroundLayoutComponent, 
    NestedExampleComponent,
    WizardProgressComponent,
    CustomizableWizardComponent,
    CustomizableWizardMainComponent,
    PersonComponent,
    AddressComponent,
    CompanyComponent,
    DynamicComponentHostDirective
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
