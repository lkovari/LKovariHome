import { Component, Input } from '@angular/core';
import { IWizardPage } from '../models/wizard-page.interface';

@Component({
  selector: 'app-wizard-progress',
  templateUrl: './wizard-progress.component.html',
  styleUrl: './wizard-progress.component.scss'
})
export class WizardProgressComponent {
  @Input() wizardProgressStyle: { [clazz: string]: any } | null = null;
  @Input() wizardPages: Array<IWizardPage>;
  @Input() selectedIndex = 0;
}
