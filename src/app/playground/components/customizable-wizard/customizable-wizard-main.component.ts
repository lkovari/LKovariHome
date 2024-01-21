import { Component, OnInit } from '@angular/core';
import { IWizardData } from './models/wizard-data.interface';
import { IWizardPage } from './models/wizard-page.interface';
import { PersonComponent } from './component-data-sources/person/person.component';
import { WizardPage } from './models/wizard-page.model';
import { AddressComponent } from './component-data-sources/address/address.component';
import { CompanyComponent } from './component-data-sources/company/company.component';

@Component({
  selector: 'app-customizable-wizard-main',
  templateUrl: './customizable-wizard-main.component.html',
  styleUrl: './customizable-wizard-main.component.scss'
})
export class CustomizableWizardMainComponent implements OnInit {
  githubLogoPath: string;
  wizardPages: Array<IWizardPage> = [ 
    new WizardPage(0, 0, 'Person', 'app-person', PersonComponent, null, '', 1, true, true),
    new WizardPage(1, 1,'Address', 'app-address', AddressComponent, null, '', 2, true, true),
    new WizardPage(2, 2,'Company', 'app-company', CompanyComponent, null, '', -1, true, true)
  ];
  wizardData: IWizardData = { 
    title: 'Customizable Wizard Component Example', 
    description: 'This Wizard create the pre-existing, (and pre-defined) components dynamically on each wizard page. The data model based on the IWizardPage interface (I know the typescript style guid not show capital I as first character of interface name, but this is my bad habit) Each wizard page (IWizardPage) describe the page content for example, component name component ref which dynamically created, rule descriptor (IFormRuleDescriptor) to decide which will be the next page or on the page field the proper values to selected to next page.',
    wizardPages: this.wizardPages
  }

  constructor() {}

  ngOnInit(): void {
    this.githubLogoPath = 'assets/logos/GitHub-Mark-32px.png';
  }

}
