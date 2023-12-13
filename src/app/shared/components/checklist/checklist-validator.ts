import { FormArray, ValidationErrors, AbstractControl } from '@angular/forms';

export class ChecklistValidators {
    /**
     * 
     * @param c: FormControl 
     * @returns ValidationErrors 
     */
    static oneItemCheckRequiredValidator(c: AbstractControl): ValidationErrors | null {
        const listItems = <FormArray>c;
        let ix = 0;
        for (ix; ix < listItems.length; ix++) {
            const formRef = listItems.at(ix);
            let selectedFormControl = formRef.get('selected');
            if (selectedFormControl && selectedFormControl?.dirty && selectedFormControl.value) {
                return null;
            }
        }
        return { invalidForm: { valid: false, message: `One row selection is required.` } };
    }
}
  