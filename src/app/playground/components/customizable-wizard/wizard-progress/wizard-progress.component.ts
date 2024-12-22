import { Component, Input } from '@angular/core';
import { IWizardPage } from '../models/wizard-page.interface';
import { NgStyle, NgClass } from '@angular/common';
import { ExtendedModule } from '@angular/flex-layout/extended';

@Component({
    selector: 'app-wizard-progress',
    templateUrl: './wizard-progress.component.html',
    styleUrl: './wizard-progress.component.scss',
    imports: [NgStyle, ExtendedModule, NgClass]
})
export class WizardProgressComponent {
  @Input() wizardProgressStyle: { [key: string]: string } = {};
  @Input() wizardPages: Array<IWizardPage> = new Array<IWizardPage>();
  @Input() selectedIndex = 0;
}
