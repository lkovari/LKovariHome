import { IWizardPage } from "./wizard-page.interface";

export interface IWizardData {
    title: string;
    description: string;
    wizardPages: Array<IWizardPage>;
}