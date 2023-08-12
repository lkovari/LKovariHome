import { IGameParameters } from "./game-parameters.interface";

export class GameParameters implements IGameParameters {
    result: number;
    operands: number[];

    constructor(result: number, operands: number[]) {
        this.result = result;
        this.operands = operands;
    }
}