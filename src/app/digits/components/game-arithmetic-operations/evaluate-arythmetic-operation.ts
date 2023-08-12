export class EvaluateArythmeticOperation {
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
}