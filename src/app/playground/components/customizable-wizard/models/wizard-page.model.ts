import { Type } from '@angular/core';
import { IWizardPage } from './wizard-page.interface';
import { IPageRuleDescriptor } from './page-rule-descriptor.interface';
import { IFormControlData } from './form-control-data.interface';

export class WizardPage implements IWizardPage {
  index: number;
  order: number;
  title: string;
  componentName: string;
  componentType: Type<any>;
  componentRef?: any;
  description: string;
  nextIndex: number;
  nextPageRuleDescriptor?: IPageRuleDescriptor;
  allowBackPage: boolean;
  allowNextPage: boolean;
  data: IFormControlData<string | number>[]

  constructor(
    index: number,
    order: number,
    title: string,
    componentName: string,
    componentType: Type<any>,
    componentRef: any,
    description: string = '',
    nextIndex: number,
    allowBackPage: boolean,
    allowNextPage: boolean,
    data: IFormControlData<string | number>[],
    nextPageRuleDescriptor?: IPageRuleDescriptor
  ) {
    this.index = index;
    this.order = order;
    this.title = title;
    this.componentName = componentName;
    this.componentType = componentType;
    this.componentRef = componentRef;
    this.description = description;
    this.nextIndex = nextIndex;
    this.nextPageRuleDescriptor = nextPageRuleDescriptor;
    this.allowBackPage = allowBackPage;
    this.allowNextPage = allowNextPage;
    this.data = data;
  }
}
