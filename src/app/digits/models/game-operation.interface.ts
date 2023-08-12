import { ArythmeticOperatorKind } from "./arithmetic-operator-kind.enum";

export interface IGameOperation {
    operands: number[];
    operator: ArythmeticOperatorKind;
    result: number;
}