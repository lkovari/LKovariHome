import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { IWizardData } from '../models/wizard-data.interface';
import { IWizardPage } from '../models/wizard-page.interface';
import { DynamicComponentHostDirective } from 'src/app/playground/directives/dynamic-component-host.directive';
import { IFormControlData } from '../models/form-control-data.interface';
import { FormControl, FormControlStatus, FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-customizable-wizard',
  templateUrl: './customizable-wizard.component.html',
  styleUrl: './customizable-wizard.component.scss',
})
export class CustomizableWizardComponent implements AfterViewInit, OnDestroy {
  @ViewChild(DynamicComponentHostDirective, { static: true })
  dynamicComponentHost!: DynamicComponentHostDirective;
  viewContainerRef: ViewContainerRef = inject(ViewContainerRef);
  @Input() wizardData: IWizardData;
  @Input() componentHeight: { [clazz: string]: any } | null = null;
  currentIndex: number = 0;
  currentWizardPage: IWizardPage;
  isFormValid: boolean = false;

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

  saveClicked() {
    this.wizardData.wizardPages.forEach((page: IWizardPage) => {
      console.log(`Component : ${page.componentName}.`);  
      console.log(JSON.stringify(page.componentRef.instance.getForm().value));
    });
    console.log('Saved');
  }

  private setupComponentDynamically() {
    this.currentWizardPage = this.wizardData.wizardPages[this.currentIndex];
    this.componentToComponentRef(this.currentWizardPage);
  }

  private setupDataByProperyName(
    formData: IFormControlData<string | number>[],
    form: FormGroup
  ) {
    formData.forEach((fieldData: IFormControlData<string | number>) => {
      const formControl = form.controls[fieldData.controlName] as FormControl;
      formControl.setValue(fieldData.controlValue['formControlValue']);
    });
  }

  private componentToComponentRef(wizardPage: IWizardPage) {
    this.dynamicComponentHost.viewContainer.clear();
    const componentRef =
      this.dynamicComponentHost.viewContainer.createComponent(
        wizardPage.componentType
      );
    this.wizardData.wizardPages[this.currentIndex].componentRef = componentRef;
    componentRef.hostView.detectChanges();
    const formGroup = componentRef.instance.getForm() as FormGroup;
    const unsubscribe = new Subject<void>();
    formGroup.statusChanges.pipe(
      takeUntil(unsubscribe)
    ).subscribe((status: FormControlStatus) => {
      this.isFormValid = status === 'VALID';
      this.wizardData.wizardPages[this.currentIndex].lastFormStatus = status;
      this.wizardData.wizardPages[this.currentIndex].unsubscribe = unsubscribe;
    });
    this.setupDataByProperyName(wizardPage.data, formGroup);
    wizardPage.componentRef = componentRef;
  }

  ngOnDestroy(): void {
    this.wizardData.wizardPages.forEach((page: IWizardPage) => {
      page.unsubscribe.next();
      page.unsubscribe.complete();
    });
  }
}
