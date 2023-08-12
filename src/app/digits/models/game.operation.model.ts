import { ArythmeticOperatorKind } from "./arithmetic-operator-kind.enum";
import { IGameOperation } from "./game-operation.interface";

export class GameOperation implements IGameOperation {
    operands: number[];
    operator: ArythmeticOperatorKind;
    result: number;

    constructor(operands: number[], operator: ArythmeticOperatorKind, result: number) {
        this.operands = operands;
        this.operator = operator;
        this.result = result;
    }
}