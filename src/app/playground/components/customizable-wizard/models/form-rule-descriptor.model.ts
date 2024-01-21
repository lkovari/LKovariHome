import { IFormControlValue } from "./form-control-value.interface";
import { IFormRuleDescriptor } from "./form-rule-descriptor.interface";

export class FormRuleDescripto<T> implements IFormRuleDescriptor<T> {
    controlName: string;
    controlValue: IFormControlValue<T>;    
}