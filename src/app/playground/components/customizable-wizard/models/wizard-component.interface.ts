import { FormGroup } from "@angular/forms";

export interface IWizardComponent {
    getForm(): FormGroup;
    setIx(v: number): void;
    setLastItemIx(v: number): void;
    setDefaultValues(): void;
}