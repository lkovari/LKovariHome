import { IChecklistItem } from './checklist-item.interface';

export class ChecklistItem implements IChecklistItem {
    id!: number;
    label: string = '';
    value?: null;
    selected: boolean = false;
    normal: boolean = false;
    disabled?: boolean = false;
}
