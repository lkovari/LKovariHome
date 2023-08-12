import { IGameOperand } from "../../models/game-operand.interface";
import { GameOperand } from "../../models/game-operand.model";
import { IGameParameters } from "../../models/game-parameters.interface";
import { GameParameters } from "../../models/game-parameters.model";

export class EvaluateArythmeticOperation {
    /**
     * 
     * @param operandA number 
     * @param operandB number
     * @param operator string
     * @returns number
     */
    public static evaluate(operandA: number, operandB: number, operator: string): number {
        var result = Number.MIN_VALUE;
        switch (operator) {
            case '+': {
                result = operandA + operandB;
                break;
            }
            case '-': {
                result = (operandA >= operandB ) ? operandA - operandB : Number.MIN_VALUE;
                break;
            }
            case '/': {
                result = ((operandA % operandB) == 0) ? operandA / operandB : Number.MIN_VALUE;
                break;
            }
            case '*': {
                result = operandA * operandB;
                break;
            }
        }
        return result;
    }

    public static cloneGameParameters(gameParameters: IGameParameters): IGameParameters {
        let clonedGameParameters = new GameParameters();
        clonedGameParameters.result = gameParameters.result;        
        gameParameters.operands.forEach((o: IGameOperand) => {
            let clonedGameOperands = new GameOperand(false, false, -1);
            Object.assign(clonedGameOperands, o);
            clonedGameParameters.operands.push(clonedGameOperands);
        });
        return clonedGameParameters;
    }
}