import { IGameOperand } from "./game-operand.interface";

export class GameOperand implements IGameOperand {
    id: number;
    selected: boolean;
    disabled: boolean;
    value: number;
    constructor(id: number, selected: boolean, disbaled: boolean, value: number) {
        this.id = id;
        this.selected = selected;
        this.disabled = disbaled;
        this.value = value;
    }
}