import { IStageLevel } from "./stage-level.interface";

export class StageLevel implements IStageLevel {
    selected: boolean;
    index: number;
    value: number;
    completed: boolean;
    summary: string;

    constructor(selected: boolean, index: number, value: number, completed: boolean, summary: string) {
        this.selected = selected;
        this.index = index;
        this.value = value;
        this.completed = completed;
        this,this.summary = summary;
    }    
}