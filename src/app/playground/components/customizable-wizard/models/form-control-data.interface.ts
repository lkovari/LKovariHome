import { IFormControlValue } from "./form-control-value.interface";

export interface IFormControlData<T> {
    controlName: string;
    controlValue: IFormControlValue<T>;  // TODO replace with simple type <T>  
}