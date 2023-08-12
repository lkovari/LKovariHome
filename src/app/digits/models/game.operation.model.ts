import { IGameOperation } from "./game-operation.interface";

export class GameOperation implements IGameOperation {
    operands: number[];
    operator: string;
    result: number;

    constructor(operands: number[], operator: string, result: number) {
        this.operands = operands;
        this.operator = operator;
        this.result = result;
    }
}