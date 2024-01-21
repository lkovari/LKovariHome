import { IWizardData } from "./wizard-data.interface";
import { IWizardPage } from "./wizard-page.interface";


export class WizardData implements IWizardData {
    title: string;
    description: string;
    wizardPages: Array<IWizardPage>;
}