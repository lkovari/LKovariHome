import { IChecklistItem } from './checklist-item.interface';

export class ChecklistItem implements IChecklistItem {
    id: number;
    label: string;
    value: any;
    selected: boolean;
    normal: boolean;
    disabled?: boolean;
}
