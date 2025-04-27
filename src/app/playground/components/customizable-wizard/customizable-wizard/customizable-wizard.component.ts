import {
  AfterViewInit,
  Component,
  EnvironmentInjector,
  createComponent,
  Input,
  OnInit,
  ViewContainerRef,
  inject,
  viewChild
} from '@angular/core';
import { IWizardData } from '../models/wizard-data.interface';
import { IWizardPage } from '../models/wizard-page.interface';
import { DynamicComponentHostDirective } from 'src/app/playground/directives/dynamic-component-host.directive';
import { IFormControlData } from '../models/form-control-data.interface';
import { FormControl, FormControlStatus, FormGroup, FormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgStyle } from '@angular/common';
import { ExtendedModule } from '@angular/flex-layout/extended';
import { WizardProgressComponent } from '../wizard-progress/wizard-progress.component';
import { DynamicComponentHostDirective as DynamicComponentHostDirective_1 } from '../../../directives/dynamic-component-host.directive';

@Component({
  selector: 'app-customizable-wizard',
  templateUrl: './customizable-wizard.component.html',
  styleUrl: './customizable-wizard.component.scss',
  imports: [FormsModule, NgStyle, ExtendedModule, WizardProgressComponent, DynamicComponentHostDirective_1]
})
export class CustomizableWizardComponent implements OnInit, AfterViewInit {
  dynamicComponentHost = viewChild(DynamicComponentHostDirective);
  private environmentInjector = inject(EnvironmentInjector);

  viewContainerRef: ViewContainerRef = inject(ViewContainerRef);

  @Input() wizardData!: IWizardData;
  @Input() componentContainerStyle: { [key: string]: string } = {};
  @Input() wizardProgressStyle: { [key: string]: string } = {};
  @Input() wizardDescriptionStyle: { [key: string]: string } = {};
  @Input() wizardTitleStyle: { [key: string]: string } = {};
  @Input() wizardFooterStyle: { [key: string]: string } = {};
  @Input() wizardBackButtonStyle: { [key: string]: string } = {};
  @Input() wizardNextButtonStyle: { [key: string]: string } = {};
  @Input() wizardSaveButtonStyle: { [key: string]: string } = {};

  currentIndex: number = 0;
  currentWizardPage!: IWizardPage
  isFormValid: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.setupComponentDynamically();
  }

  ngAfterViewInit(): void {
    this.setupListeners();
    setTimeout(() => {
      this.setupInitialDataToComponent();
    }, 1);
  }

  backClicked() {
    this.currentIndex--;
    this.setupComponentDynamically();
    this.setupListeners();
    if (this.wizardData.wizardPages[this.currentIndex]!.formData) {
      this.restoreTheFormDatafROMWizardModel();
    } else {
      this.setupInitialDataToComponent();
    }
  }

  nextClicked() {
    this.storeTheFormDataToWizardModel();
    this.currentIndex++;
    this.setupComponentDynamically();
    this.setupListeners();
    if (this.wizardData.wizardPages[this.currentIndex]!.formData) {
      this.restoreTheFormDatafROMWizardModel();
    } else {
      this.setupInitialDataToComponent();
    }
  }

  saveClicked() {
    let formData: string = 'FORMDATA\r';
    this.wizardData.wizardPages.forEach((page: IWizardPage) => {
      formData += `\rComponent : ${page.componentName}.\r`;
      formData += JSON.stringify(page.componentRef.instance.getForm().value);
    });
    alert(formData);
  }

  private setupComponentDynamically() {
    this.currentWizardPage = this.wizardData.wizardPages[this.currentIndex]!;
    this.createComponentDynamically(this.currentWizardPage);
  }

  private setupDataByProperyName(
    form: FormGroup,
    formData: IFormControlData<string | number>[]
  ) {
    formData.forEach((fieldData: IFormControlData<string | number>) => {
      const formControl = form.controls[fieldData.controlName] as FormControl;
      formControl.setValue(fieldData.controlValue);
    });
  }

  private storeTheFormDataToWizardModel() {
    const formGroup =
      this.wizardData.wizardPages[
        this.currentIndex
      ]!.componentRef.instance.getForm();
    this.wizardData.wizardPages[this.currentIndex]!.formData = formGroup.value;
  }

  private restoreTheFormDatafROMWizardModel() {
    const formGroup =
      this.wizardData.wizardPages[
        this.currentIndex
      ]!.componentRef.instance.getForm();
    formGroup.setValue(this.wizardData.wizardPages[this.currentIndex]!.formData);
  }

  /* This is the way to set @Input of the dynamic component
      componentRef.setInput(formControlName, formControlValue);
  */

  private createComponentDynamically(wizardPage: IWizardPage) {
    const host = this.dynamicComponentHost();
    if (!host) throw new Error('Dynamic host not available');

    host.viewContainer.clear();

    const componentRef = createComponent(wizardPage.componentType, {
      environmentInjector: this.environmentInjector,
    });

    host.viewContainer.insert(componentRef.hostView);

    wizardPage.componentRef = componentRef;
    wizardPage.destroyRef = (componentRef.instance as any).destroyRef;
    componentRef.hostView.detectChanges();
  }

  private setupInitialDataToComponent() {
    const page = this.wizardData.wizardPages[this.currentIndex];
    if (!page?.componentRef?.instance) {
      console.warn('Component not ready yet.');
      return;
    }
    const formGroup =
      this.wizardData.wizardPages[
        this.currentIndex
      ]!.componentRef.instance.getForm();
    this.setupDataByProperyName(
      formGroup,
      this.wizardData.wizardPages[this.currentIndex]!.initialData
    );
  }

  private setupListeners() {
    const componentRef =
      this.wizardData.wizardPages[this.currentIndex]!.componentRef;
    const formGroup = componentRef.instance.getForm() as FormGroup;
    formGroup.statusChanges
      .pipe(takeUntilDestroyed(this.wizardData.wizardPages[this.currentIndex]!.destroyRef))
      .subscribe((status: FormControlStatus) => {
        this.isFormValid = status === 'VALID';
        this.wizardData.wizardPages[this.currentIndex]!.lastFormStatus = status;
      });
  }
}
