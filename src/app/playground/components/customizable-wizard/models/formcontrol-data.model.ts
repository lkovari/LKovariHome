import { IFormControlData } from "./form-control-data.interface";
import { IFormControlValue } from "./form-control-value.interface";

export class FormControlData<T> implements IFormControlData<T> {
    controlName: string;
    controlValue: IFormControlValue<T>;    
}