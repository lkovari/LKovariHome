import {
  AfterContentChecked,
  Component,
  Input,
  OnDestroy,
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
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-customizable-wizard',
  templateUrl: './customizable-wizard.component.html',
  styleUrl: './customizable-wizard.component.scss',
})
export class CustomizableWizardComponent implements OnInit, AfterContentChecked, OnDestroy {
  @ViewChild(DynamicComponentHostDirective, { static: true })
  dynamicComponentHost!: DynamicComponentHostDirective;
  viewContainerRef: ViewContainerRef = inject(ViewContainerRef);
  @Input() wizardData: IWizardData;
  @Input() componentHeight: { [clazz: string]: any } | null = null;
  currentIndex: number = 0;
  currentWizardPage: IWizardPage;
  isFormValid: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.setupComponentDynamically();
  }

  ngAfterContentChecked(): void {
    this.setupDataToComponent();
    this.setupListeners();
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
    this.createComponent(this.currentWizardPage);
  }

  private setupDataByProperyName(
    form: FormGroup,
    formData: IFormControlData<string | number>[]
  ) {
    formData.forEach((fieldData: IFormControlData<string | number>) => {
      const formControl = form.controls[fieldData.controlName] as FormControl;
      formControl.setValue(fieldData.controlValue['formControlValue']);
    });
  }

  /*
  private setupComponentInputDataByInputName(componentRef: ComponentRef<any>, formData: IFormControlData<string | number>[]) {
    formData.forEach((fieldData: IFormControlData<string | number>) => {
      componentRef.setInput(fieldData.controlName, fieldData.controlValue);
    });
  }
  */

  private createComponent(wizardPage: IWizardPage) {
    this.dynamicComponentHost.viewContainer.clear();
    const componentRef =
      this.dynamicComponentHost.viewContainer.createComponent(
        wizardPage.componentType
      );
    this.wizardData.wizardPages[this.currentIndex].componentRef = componentRef;
    componentRef.hostView.detectChanges();
  }

  private setupDataToComponent() {
    const formGroup = this.wizardData.wizardPages[this.currentIndex].componentRef.instance.getForm();
    this.setupDataByProperyName(formGroup, this.wizardData.wizardPages[this.currentIndex].data);
  }

  private setupListeners() {
    const componentRef = this.wizardData.wizardPages[this.currentIndex].componentRef;
    const formGroup = componentRef.instance.getForm() as FormGroup;
    const unsubscribe = new Subject<void>();
    formGroup.statusChanges
      .pipe(takeUntil(unsubscribe))
      .subscribe((status: FormControlStatus) => {
        this.isFormValid = status === 'VALID';
        this.wizardData.wizardPages[this.currentIndex].lastFormStatus = status;
        this.wizardData.wizardPages[this.currentIndex].unsubscribe =
          unsubscribe;
      });
  }

  ngOnDestroy(): void {
    this.wizardData.wizardPages.forEach((page: IWizardPage) => {
      if (page.unsubscribe) {
        page.unsubscribe.next();
        page.unsubscribe.complete();
      }
    });
  }
}
