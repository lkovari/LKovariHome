export interface IChecklistItem {
    id: number;
    label: string;
    value?: null;
    selected: boolean;
    normal: boolean;
    disabled?: boolean;
}
