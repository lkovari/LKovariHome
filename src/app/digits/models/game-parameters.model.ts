import { IGameOperand } from "./game-operand.interface";
import { IGameParameters } from "./game-parameters.interface";

export class GameParameters implements IGameParameters {
    result: number;
    operands: IGameOperand[] = [];
}