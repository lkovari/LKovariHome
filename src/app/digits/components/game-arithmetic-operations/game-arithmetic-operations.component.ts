import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IStack } from '../../models/stack.interface';
import { IGameOperation } from '../../models/game-operation.interface';
import { Stack } from '../../models/stack.model';
import { IGameParameters } from '../../models/game-parameters.interface';
import { IGameOperator } from '../../models/game-operator.interface';
import { IGameOperand } from '../../models/game-operand.interface';
import { GameOperation } from '../../models/game.operation.model';
import { EvaluateArythmeticOperation } from './evaluate-arythmetic-operation';

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

  private history: IStack<IGameOperation> | undefined;

  private selectedOperandA: IGameOperand | null;
  private selectedOperandB: IGameOperand | null;

  /*
  private getSelectedOperand(): IGameOperand | undefined {
    return this.gameParameters.operands.find((o) => o.selected);
  }
  */

  private getSelectedOperator(): IGameOperator | undefined {
    return this.operators.find((o) => o.selected);
  }

  private clearSelectionOfOperands() {
    this.gameParameters.operands.forEach(operand => {
      operand.selected = false;
    });
  }

  private clearSelectionOfOperators() {
    this.operators.forEach(operator => {
      operator.selected = false;
    });
  }
  
  ngOnInit(): void {
    this.history = new Stack<IGameOperation>();
  }

  addOperation(gameOperation: IGameOperation) {
    this.history!.push(gameOperation);
  }

  removeLastOperation(): IGameOperation | undefined {
    return this.history!.pop();
  }

  onOperandButtonClick(operand: IGameOperand) {
    operand.selected = !operand.selected;

    if (!this.selectedOperandA) {
      this.selectedOperandA = operand;
    } else {
      if (!this.selectedOperandB) {
        this.selectedOperandB = operand;
      }
    }
    var selectedOperator = this.getSelectedOperator();
    if (this.selectedOperandA && this.selectedOperandB && selectedOperator) {
      var operands = new Array<number>(this.selectedOperandA.value, this.selectedOperandB.value);
      var result = EvaluateArythmeticOperation.evaluate(this.selectedOperandA.value, this.selectedOperandB.value, selectedOperator.operator);
      var gameOperator = new GameOperation(
        operands, selectedOperator.operator, result);
      this.history?.push(gameOperator);
      operand.value = result;
      let operandToDisable = this.gameParameters.operands.find(o => o.value == this.selectedOperandA!.value);
      operandToDisable!.disabled = true;
      this.clearSelectionOfOperators();
      this.clearSelectionOfOperands();
      this.selectedOperandA = null;
      this.selectedOperandB = null;
    }
    console.log(`Value ${operand.value} Selected ${operand.selected}`);
  }

  onOperatorButtonClick(operator: IGameOperator) {
    operator.selected = !operator.selected;
    console.log(`Caption ${operator.caption} Selected ${operator.selected}`);
  }

  ngOnDestroy(): void {
    this.history!.clear();
    this.history = undefined;
  }
}
