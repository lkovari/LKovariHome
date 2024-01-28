import { IFormControlData } from "./form-control-data.interface";
export class FormControlData<T> implements IFormControlData<T> {
    controlName: string;
    controlValue: T;    
}