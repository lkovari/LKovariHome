import { IGameOperator } from "./game-operator.interface";

export class GameOperator implements IGameOperator {
    selected: boolean;
    caption: string;
    operator: string;
    icon: string;

    constructor(selected: boolean, caption: string, operator: string, icon: string) {
        this.selected = selected;
        this.caption = caption;
        this.operator = operator;
        this.icon = icon;
    }
}