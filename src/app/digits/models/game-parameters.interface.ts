import { IGameOperand } from "./game-operand.interface";

export interface IGameParameters {
    result: number;
    stageIndex: number;
    operands: IGameOperand[];
}