import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { IWizardPage } from '../models/wizard-page.interface';
import { ExtendedModule } from '@angular/flex-layout/extended';

@Component({
    selector: 'app-wizard-progress',
    templateUrl: './wizard-progress.component.html',
    styleUrl: './wizard-progress.component.scss',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [ExtendedModule]
})
export class WizardProgressComponent {
  readonly wizardProgressStyle = input<{
    [key: string]: string;
}>({});
  readonly wizardPages = input<Array<IWizardPage>>(new Array<IWizardPage>());
  readonly selectedIndex = input(0);
}
