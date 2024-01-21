import { AfterViewInit, Component, Input, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { IWizardData } from '../models/wizard-data.interface';
import { IWizardPage } from '../models/wizard-page.interface';
import { DynamicComponentHostDirective } from 'src/app/playground/directives/dynamic-component-host.directive';

@Component({
  selector: 'app-customizable-wizard',
  templateUrl: './customizable-wizard.component.html',
  styleUrl: './customizable-wizard.component.scss'
})
export class CustomizableWizardComponent implements AfterViewInit {
  @ViewChild(DynamicComponentHostDirective, { static: true }) dynamicComponentHost!: DynamicComponentHostDirective;
  viewContainerRef: ViewContainerRef = inject(ViewContainerRef);
  @Input() wizardData: IWizardData;
  @Input() componentHeight: { [clazz: string]: any} | null = null;
  currentIndex: number = 0;
  currentWizardPage: IWizardPage;

  constructor() {}
  ngAfterViewInit(): void {
    this.setupComponentDynamically();
  }

  backClicked() {
    this.currentIndex--;
    this.setupComponentDynamically();
  }

  nextClicked() {
    this.currentIndex++;
    this.setupComponentDynamically();
  }

  private setupComponentDynamically() {
    this.currentWizardPage = this.wizardData.wizardPages[this.currentIndex];
    this.componentToComponentRef(this.currentWizardPage);
  }

  private componentToComponentRef(wizardPage: IWizardPage) {
    this.dynamicComponentHost.viewContainer.clear();
      const componentRef = this.dynamicComponentHost.viewContainer.createComponent(wizardPage.componentType);
      componentRef.hostView.detectChanges();
      wizardPage.componentRef = componentRef;
  }
}
