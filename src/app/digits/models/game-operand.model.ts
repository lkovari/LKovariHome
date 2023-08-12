import { IGameOperand } from "./game-operand.interface";

export class GameOperand implements IGameOperand {
    selected: boolean;
    value: number;
    constructor(selected: boolean, value: number) {
        this.selected = selected;
        this.value = value;
    }
}