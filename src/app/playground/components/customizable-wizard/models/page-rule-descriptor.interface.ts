import { IFormRuleDescriptor } from "./form-rule-descriptor.interface";

export interface IPageRuleDescriptor {
    stringRuleDescriptors: IFormRuleDescriptor<string>[];
    booleanRuleDescriptors: IFormRuleDescriptor<boolean>[];
    numberRuleDescriptors: IFormRuleDescriptor<number>[];
    nextPageId: number;
}