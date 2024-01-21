import { IFormControlValue } from "./form-control-value.interface";

export class FormControlValue<T> implements IFormControlValue<T> {
    formControlValue: T;

    constructor(controlValue: T) {
        this.formControlValue = controlValue;
    }
}