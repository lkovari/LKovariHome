import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { IStack } from '../../models/stack.interface';
import { Stack } from '../../models/stack.model';
import { IGameParameters } from '../../models/game-parameters.interface';
import { IGameOperator } from '../../models/game-operator.interface';
import { IGameOperand } from '../../models/game-operand.interface';
import { EvaluateArythmeticOperation } from './evaluate-arythmetic-operation';
import { IGameOperation } from '../../models/game-operation.interface';
import { GameOperation } from '../../models/game.operation.model';

@Component({
  selector: 'app-game-arithmetic-operations',
  templateUrl: './game-arithmetic-operations.component.html',
  styleUrls: ['./game-arithmetic-operations.component.scss'],
})
export class GameArithmeticOperationsComponent implements OnInit, OnDestroy {
  operators: IGameOperator[] = new Array<IGameOperator>(
    { selected: false, caption: '<', operator: '<', icon: 'pi pi-history' },
    { selected: false, caption: '+', operator: '+', icon: 'pi pi-plus' },
    { selected: false, caption: '-', operator: '-', icon: 'pi pi-minus' },
    { selected: false, caption: '*', operator: '*', icon: 'pi pi-times' },
    { selected: false, caption: ':', operator: ':', icon: 'pi pi-times' }
  );
  @Input() gameParameters: IGameParameters;
  @Output() onExpectedResultReached = new EventEmitter<IStack<IGameOperation>>();

  private history: IStack<IGameParameters> | undefined;
  private operationHistory: IStack<IGameOperation> | undefined;

  private selectedOperandA: IGameOperand | null;
  private selectedOperandB: IGameOperand | null;

  private getSelectedOperator(): IGameOperator | undefined {
    return this.operators.find((o) => o.selected);
  }

  private clearSelectionOfOperands() {
    this.gameParameters.operands.forEach((operand) => {
      operand.selected = false;
    });
  }

  private isTheExpectedResultReached(result: number) {
    return this.gameParameters.result === result;
  }

  private addStateToHistory(gameParameters: IGameParameters) {
    this.history!.push(gameParameters);
  }

  private clearSelectionOfOperators() {
    this.operators.forEach((operator) => {
      operator.selected = false;
    });
  }

  private addGameOperationToOperationHistory(operation: IGameOperation) {
    this.operationHistory?.push(operation);
  }

  ngOnInit(): void {
    this.history = new Stack<IGameParameters>();
    this.operationHistory = new Stack<IGameOperation>();
  }

  removeLastOperation(): IGameParameters | undefined {
    return this.history!.pop();
  }

  onOperandButtonClick(operand: IGameOperand) {
    operand.selected = !operand.selected;

    if (!this.selectedOperandA) {
      this.selectedOperandA = operand;
    } else {
      if (this.selectedOperandA.value !== operand.value) {
        if (!this.selectedOperandB) {
          this.selectedOperandB = operand;
        }
      }
    }
    var selectedOperator = this.getSelectedOperator();
    if (this.selectedOperandA && this.selectedOperandB && selectedOperator) {
      let clonedGameParameters =
        EvaluateArythmeticOperation.cloneGameParameters(this.gameParameters);

      var result = EvaluateArythmeticOperation.evaluate(
        this.selectedOperandA.value,
        this.selectedOperandB.value,
        selectedOperator.operator
      );
      
      this.addStateToHistory(clonedGameParameters);

      let gameOperand = new Array<number>(this.selectedOperandA.value, this.selectedOperandB.value);
      let gameOperation = new GameOperation(gameOperand, selectedOperator.operator, result);
      this.addGameOperationToOperationHistory(gameOperation);

      if (this.isTheExpectedResultReached(result)) {
        this.onExpectedResultReached.emit(this.operationHistory);
      }
            
      operand.value = result;
      let operandToDisable = this.gameParameters.operands.find(
        (o) => o.value == this.selectedOperandA!.value
      );
      operandToDisable!.disabled = true;
      this.clearSelectionOfOperators();
      this.clearSelectionOfOperands();
      this.selectedOperandA = null;
      this.selectedOperandB = null;
    }
    console.log(`Value ${operand.value} Selected ${operand.selected}`);
  }

  onOperatorButtonClick(operator: IGameOperator) {
    if (!this.selectedOperandA && operator.operator !== this.operators[0].operator) {
      return;
    }
    operator.selected = !operator.selected;
    if (operator.operator === this.operators[0].operator) {
      if (this.history!.size() > 0) {
        this.gameParameters = this.history!.pop()!;
      } else {
        console.log('History is empty!');
      }
      this.clearSelectionOfOperators();
      this.clearSelectionOfOperands();
    }

    console.log(`Caption ${operator.caption} Selected ${operator.selected}`);
  }

  ngOnDestroy(): void {
    this.history!.clear();
    this.history = undefined;
    this.operationHistory!.clear();
    this.operationHistory = undefined;
  }
}
