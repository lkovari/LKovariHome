import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { IWizardData } from '../models/wizard-data.interface';
import { IWizardPage } from '../models/wizard-page.interface';
import { DynamicComponentHostDirective } from 'src/app/playground/directives/dynamic-component-host.directive';
import { IFormControlData } from '../models/form-control-data.interface';
import { FormControl, FormControlStatus, FormGroup } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-customizable-wizard',
  templateUrl: './customizable-wizard.component.html',
  styleUrl: './customizable-wizard.component.scss',
})
export class CustomizableWizardComponent implements OnInit, AfterViewInit {
  @ViewChild(DynamicComponentHostDirective, { static: true })
  dynamicComponentHost!: DynamicComponentHostDirective;

  viewContainerRef: ViewContainerRef = inject(ViewContainerRef);

  @Input() wizardData: IWizardData;
  @Input() componentContainerStyle: { [key: string]: string } = {};
  @Input() wizardProgressStyle: { [key: string]: string } = {};
  @Input() wizardDescriptionStyle: { [key: string]: string } = {};
  @Input() wizardTitleStyle: { [key: string]: string } = {};
  @Input() wizardFooterStyle: { [key: string]: string } = {};
  @Input() wizardBackButtonStyle: { [key: string]: string } = {};
  @Input() wizardNextButtonStyle: { [key: string]: string } = {};
  @Input() wizardSaveButtonStyle: { [key: string]: string } = {};

  currentIndex: number = 0;
  currentWizardPage: IWizardPage;
  isFormValid: boolean = false;

  constructor() {}

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
    if (this.wizardData.wizardPages[this.currentIndex].formData) {
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
    if (this.wizardData.wizardPages[this.currentIndex].formData) {
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
    this.currentWizardPage = this.wizardData.wizardPages[this.currentIndex];
    this.createComponent(this.currentWizardPage);
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
      ].componentRef.instance.getForm();
    this.wizardData.wizardPages[this.currentIndex].formData = formGroup.value;
  }

  private restoreTheFormDatafROMWizardModel() {
    const formGroup =
      this.wizardData.wizardPages[
        this.currentIndex
      ].componentRef.instance.getForm();
    formGroup.setValue(this.wizardData.wizardPages[this.currentIndex].formData);
  }

  /* This is the way to set @Input of the dynamic component
      componentRef.setInput(formControlName, formControlValue);
  */

  private createComponent(wizardPage: IWizardPage) {
    this.dynamicComponentHost.viewContainer.clear();
    const componentRef =
      this.dynamicComponentHost.viewContainer.createComponent(
        wizardPage.componentType
      );
    this.wizardData.wizardPages[this.currentIndex].componentRef = componentRef;
    this.wizardData.wizardPages[this.currentIndex].destroyRef = componentRef.instance.destroyRef;
    componentRef.hostView.detectChanges();
  }

  private setupInitialDataToComponent() {
    const formGroup =
      this.wizardData.wizardPages[
        this.currentIndex
      ].componentRef.instance.getForm();
    this.setupDataByProperyName(
      formGroup,
      this.wizardData.wizardPages[this.currentIndex].initialData
    );
  }

  private setupListeners() {
    const componentRef =
      this.wizardData.wizardPages[this.currentIndex].componentRef;
    const formGroup = componentRef.instance.getForm() as FormGroup;
    formGroup.statusChanges
      .pipe(takeUntilDestroyed(this.wizardData.wizardPages[this.currentIndex].destroyRef))
      .subscribe((status: FormControlStatus) => {
        this.isFormValid = status === 'VALID';
        this.wizardData.wizardPages[this.currentIndex].lastFormStatus = status;
      });
  }
}
