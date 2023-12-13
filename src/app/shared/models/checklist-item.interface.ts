export interface IChecklistItem {
    id: number;
    label: string;
    value: any;
    selected: boolean;
    normal: boolean;
    disabled?: boolean;
}
