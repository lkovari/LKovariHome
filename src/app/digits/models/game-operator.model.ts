import { IGameOperator } from "./game-operator.interface";

export class GameOperator implements IGameOperator {
    selected: boolean;
    caption: string;
    operand: string;
    icon: string;

    constructor(selected: boolean, caption: string, operand: string, icon: string) {
        this.selected = selected;
        this.caption = caption;
        this.operand = operand;
        this.icon = icon;
    }
}