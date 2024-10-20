import { Component, Input } from '@angular/core';
import { IWizardPage } from '../models/wizard-page.interface';

@Component({
  selector: 'app-wizard-progress',
  templateUrl: './wizard-progress.component.html',
  styleUrl: './wizard-progress.component.scss'
})
export class WizardProgressComponent {
  @Input() wizardProgressStyle: { [key: string]: string } = {};
  @Input() wizardPages: Array<IWizardPage> = new Array<IWizardPage>();
  @Input() selectedIndex = 0;
}
