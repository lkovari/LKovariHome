import { Component, OnInit } from '@angular/core';
import { IWizardData } from './models/wizard-data.interface';
import { IWizardPage } from './models/wizard-page.interface';
import { PersonComponent } from './component-data-sources/person/person.component';
import { WizardPage } from './models/wizard-page.model';
import { AddressComponent } from './component-data-sources/address/address.component';
import { CompanyComponent } from './component-data-sources/company/company.component';
import { IFormControlData } from './models/form-control-data.interface';
import { MiscellaneousComponent } from './component-data-sources/miscellaneous/miscellaneous.component';

@Component({
    selector: 'app-customizable-wizard-main',
    templateUrl: './customizable-wizard-main.component.html',
    styleUrl: './customizable-wizard-main.component.scss',
    standalone: false
})
export class CustomizableWizardMainComponent implements OnInit {
  githubLogoPath!: string;

  personFormData: IFormControlData<string | number>[] = [
    {
      controlName: 'name',
      controlValue: 'John Doe',
    },
    {
      controlName: 'age',
      controlValue: 58,
    }
  ];

  addressFormData: IFormControlData<string | number>[] = [
    {
      controlName: 'street',
      controlValue: '#7 Elm street',
    },
    {
      controlName: 'city',
      controlValue: 'Alpharetta',
    },
    {
      controlName: 'state',
      controlValue: 'Georgia',
    },
    /*,
    {
      controlName: 'zip',
      controlValue: { formControlValue: '91737' },
    },
    */
  ];

  companyFormData: IFormControlData<string | number>[] = [
    {
      controlName: 'name',
      controlValue: 'EKLSoftTrade Llc.',
    },
    {
      controlName: 'phone',
      controlValue: '9172345678',
    },
    {
      controlName: 'description',
      controlValue: 'Software developer & trading company',
    },
  ];

  miscellaneousFormData: IFormControlData<string | number>[] = [
    {
      controlName: 'occupation',
      controlValue: 'Software developer',
    },
    {
      controlName: 'religion',
      controlValue: '',
    },
    {
      controlName: 'hobbie',
      controlValue: 'Drumming',
    },
  ];

  wizardPages: Array<IWizardPage> = [
    new WizardPage(
      0,
      0,
      'Person',
      'app-person',
      PersonComponent,
      null,
      '',
      1,
      true,
      true,
      this.personFormData
    ),
    new WizardPage(
      1,
      1,
      'Address',
      'app-address',
      AddressComponent,
      null,
      '',
      2,
      true,
      true,
      this.addressFormData
    ),
    new WizardPage(
      2,
      2,
      'Company',
      'app-company',
      CompanyComponent,
      null,
      '',
      -1,
      true,
      true,
      this.companyFormData
    ),
    new WizardPage(
      3,
      4,
      'Miscellaneous',
      'app-miscellaneous',
      MiscellaneousComponent,
      null,
      '',
      -1,
      true,
      true,
      this.miscellaneousFormData
    ),
  ];
  wizardData: IWizardData = {
    title: 'Customizable Wizard Component Example',
    description:
      'This Wizard create the pre-existing, (and pre-defined) components dynamically on each wizard page. The data model based on the IWizardPage interface (I know the typescript style guid not show capital I as first character of interface name, but this is my bad habit) Each wizard page (IWizardPage) describe the page content for example, component name component ref which dynamically created, rule descriptor (IFormRuleDescriptor) to decide which will be the next page or on the page field the proper values to selected to next page.',
    wizardPages: this.wizardPages,
  };

  constructor() {}

  ngOnInit(): void {
    this.githubLogoPath = 'assets/logos/GitHub-Mark-32px.png';
  }
}
