import { Type } from "@angular/core";
import { IPageRuleDescriptor } from "./page-rule-descriptor.interface";
import { IFormControlData } from "./form-control-data.interface";
import { FormControlStatus } from "@angular/forms";
import { Subject } from "rxjs";

export interface IWizardPage {
    index: number;
    order: number;
    title: string;
    componentName: string;
    componentType: Type<any>;
    componentRef?: any;
    description?: string;
    nextIndex: number;
    nextPageRuleDescriptor?: IPageRuleDescriptor
    allowBackPage: boolean;
    allowNextPage: boolean;
    data: IFormControlData<string | number>[];
    lastFormStatus: FormControlStatus;
    unsubscribe: Subject<void>;
}