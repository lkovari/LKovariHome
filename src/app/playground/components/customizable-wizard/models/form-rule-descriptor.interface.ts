import { IFormControlValue } from "./form-control-value.interface";

export interface IFormRuleDescriptor<T> {
    controlName: string;
    controlValue: IFormControlValue<T>;
}