import { FormArray, ValidationErrors, AbstractControl } from '@angular/forms';

export class ChecklistValidators {
    static oneItemCheckRequiredValidator(c: AbstractControl): ValidationErrors | null {
        if (c instanceof FormArray) {
            for (let ix = 0; ix < c.length; ix++) {
                const formRef = c.at(ix);
                const selectedFormControl = formRef.get('selected');
                if (selectedFormControl?.dirty && selectedFormControl.value) {
                    return null;
                }
            }
            return { invalidForm: { valid: false, message: `One row selection is required.` } };
        }

        const items = c.value;
        if (!Array.isArray(items)) {
            return null;
        }
        if (items.some((item) => item?.selected)) {
            return null;
        }
        return { invalidForm: { valid: false, message: `One row selection is required.` } };
    }
}
