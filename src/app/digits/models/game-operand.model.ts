import { IGameOperand } from "./game-operand.interface";

export class GameOperand implements IGameOperand {
    selected: boolean;
    disabled: boolean;
    value: number;
    constructor(selected: boolean, disbaled: boolean, value: number) {
        this.selected = selected;
        this.disabled = disbaled;
        this.value = value;
    }
}