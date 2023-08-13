import { EvaluateArythmeticOperation } from './components/game-arithmetic-operations/evaluate-arythmetic-operation';
import { DigitsConstants } from './digits-constants';
import { GenerateUniqueNumber } from './generate-unique-number';
import { GameOperand } from './models/game-operand.model';
import { IGameParameters } from './models/game-parameters.interface';
import { GameParameters } from './models/game-parameters.model';

export class GenerateGameParameters {
  private operands: number[];

  private generateNumber(min: number, max: number) {
    return Math.floor(min + Math.random() * (max - min + 1));
  }

  private choiceRandomOperation(): string {
    let randomOperationIndex = this.generateNumber(0, 4);
    let result = DigitsConstants.OPERATOR_ADD;
    switch (randomOperationIndex) {
      case 0: {
        result = DigitsConstants.OPERATOR_ADD;
        break;
      }
      case 1: {
        result = DigitsConstants.OPERATOR_SUB;
        break;
      }
      case 2: {
        result = DigitsConstants.OPERATOR_MUL;
        break;
      }
      case 0: {
        result = DigitsConstants.OPERATOR_DIV;
        break;
      }
    }
    return result;
  }

  private checkExecuteDivision(operand1: number, operand2: number): boolean {
    return operand1 % operand2 === 0;
  }

  private checkExecuteSubstraction(
    operand1: number,
    operand2: number
  ): boolean {
    return operand1 > operand2;
  }

  private removeOperandByIndex(ix: number, defaultIx: number): number {
    let result = defaultIx;
    if (ix < defaultIx) {
        result = defaultIx - 1;
    }
    this.operands.splice(ix, 1);
    return result;
  }

  private calculateResult(operands: number[]): number {
    let remainedOperands = this.operands.length;
    let result = 0;
    let ix = 0;
    let maxCycles = this.generateNumber(3, 5);
    let defaultOperandIndex = Number.MIN_VALUE;
    while (ix < maxCycles && operands.length > 1) {
      let operation = this.choiceRandomOperation();

      let operandIndex = this.generateNumber(0, remainedOperands - 1);
      if (defaultOperandIndex === Number.MIN_VALUE) {
        defaultOperandIndex = this.generateNumber(0, remainedOperands - 1);
      }
      while (defaultOperandIndex === operandIndex) {
        operandIndex = this.generateNumber(0, remainedOperands - 1);
      }

      switch (operation) {
        case DigitsConstants.OPERATOR_ADD: {
          operands[defaultOperandIndex] = EvaluateArythmeticOperation.evaluate(
            operands[defaultOperandIndex],
            operands[operandIndex],
            operation
          );
          defaultOperandIndex = this.removeOperandByIndex(operandIndex, defaultOperandIndex);
          --remainedOperands;
          ++ix;
          break;
        }
        case DigitsConstants.OPERATOR_SUB: {
          if (
            this.checkExecuteSubstraction(
              operands[defaultOperandIndex],
              operands[operandIndex]
            )
          ) {
            operands[defaultOperandIndex] =
              EvaluateArythmeticOperation.evaluate(
                operands[defaultOperandIndex],
                operands[operandIndex],
                operation
              );
              defaultOperandIndex = this.removeOperandByIndex(operandIndex, defaultOperandIndex);
            --remainedOperands;
            ++ix;
          } else {
            continue;
          }
          break;
        }
        case DigitsConstants.OPERATOR_MUL: {
          operands[defaultOperandIndex] = EvaluateArythmeticOperation.evaluate(
            operands[defaultOperandIndex],
            operands[operandIndex],
            operation
          );
          defaultOperandIndex = this.removeOperandByIndex(operandIndex, defaultOperandIndex);
          --remainedOperands;
          ++ix;
          break;
        }
        case DigitsConstants.OPERATOR_DIV: {
          if (
            this.checkExecuteDivision(
              operands[defaultOperandIndex],
              operands[operandIndex]
            )
          ) {
            operands[defaultOperandIndex] =
              EvaluateArythmeticOperation.evaluate(
                operands[defaultOperandIndex],
                operands[operandIndex],
                operation
              );
              defaultOperandIndex = this.removeOperandByIndex(operandIndex, defaultOperandIndex);
            --remainedOperands;
            ++ix;
          } else {
            continue;
          }
          break;
        }
      }
    }
    result = operands[defaultOperandIndex];
    return result;
  }

  private generateGameParameter(stageIndex: number): IGameParameters {
    let generateUniqueNumber = new GenerateUniqueNumber();
    switch (stageIndex) {
      case 0: {
        generateUniqueNumber.generateNumber(1, 5);
        generateUniqueNumber.generateNumber(1, 5);
        generateUniqueNumber.generateNumber(1, 5);
        generateUniqueNumber.generateNumber(1, 5);
        generateUniqueNumber.generateNumber(1, 5);
        generateUniqueNumber.generateNumber(5, 10);
        generateUniqueNumber.generateNumber(10, 25);
        break;
      }
      case 1: {
        generateUniqueNumber.generateNumber(1, 5);
        generateUniqueNumber.generateNumber(1, 5);
        generateUniqueNumber.generateNumber(1, 5);
        generateUniqueNumber.generateNumber(5, 10);
        generateUniqueNumber.generateNumber(10, 15);
        generateUniqueNumber.generateNumber(10, 25);
        break;
      }
      case 2: {
        generateUniqueNumber.generateNumber(1, 5);
        generateUniqueNumber.generateNumber(1, 5);
        generateUniqueNumber.generateNumber(5, 10);
        generateUniqueNumber.generateNumber(5, 15);
        generateUniqueNumber.generateNumber(10, 20);
        generateUniqueNumber.generateNumber(10, 25);
        break;
      }
      case 3: {
        generateUniqueNumber.generateNumber(1, 5);
        generateUniqueNumber.generateNumber(5, 10);
        generateUniqueNumber.generateNumber(5, 15);
        generateUniqueNumber.generateNumber(10, 15);
        generateUniqueNumber.generateNumber(10, 20);
        generateUniqueNumber.generateNumber(10, 25);
        break;
      }
      case 4: {
        generateUniqueNumber.generateNumber(1, 10);
        generateUniqueNumber.generateNumber(5, 10);
        generateUniqueNumber.generateNumber(5, 15);
        generateUniqueNumber.generateNumber(10, 15);
        generateUniqueNumber.generateNumber(10, 25);
        generateUniqueNumber.generateNumber(10, 25);
        break;
      }
    }
    let generatedNumbers = generateUniqueNumber.getGeneratedNumbers();
    generatedNumbers = generatedNumbers.sort((a: number, b: number) =>{
        return a - b;
    });
    let originalOperands = new Array<number>(
        generatedNumbers[0],
        generatedNumbers[1],
        generatedNumbers[2],
        generatedNumbers[3],
        generatedNumbers[4],
        generatedNumbers[5]
    );
    this.operands = new Array<number>(
        generatedNumbers[0],
        generatedNumbers[1],
        generatedNumbers[2],
        generatedNumbers[3],
        generatedNumbers[4],
        generatedNumbers[5]
    );
    generateUniqueNumber.clearGeneratedNumbers();

    let stageResult = this.calculateResult(this.operands);
    let result = new GameParameters();
    result.result = stageResult;
    originalOperands.forEach(op => {
        let gameOperand = new GameOperand(false, false, op);
        result.operands.push(gameOperand);
    });
    return result;
  }

  public generateStageNumbers(): Array<IGameParameters> {
    let result = new Array<IGameParameters>();
    for (let ix = 0; ix < 5; ix++) {
      let gameParameter = this.generateGameParameter(ix);
      result.push(gameParameter);
    }
    result = result.sort((a: IGameParameters, b: IGameParameters) => {
      return a.result - b.result;
    });    
    return result;
  }
}
