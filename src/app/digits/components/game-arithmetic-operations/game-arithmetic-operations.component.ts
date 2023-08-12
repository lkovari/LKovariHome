import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IStack } from '../../models/stack.interface';
import { IGameOperation } from '../../models/game-operation.interface';
import { Stack } from '../../models/stack.model';
import { IGameParameters } from '../../models/game-parameters.interface';
import { IGameOperator } from '../../models/game-operator.interface';
import { IGameOperand } from '../../models/game-operand.interface';

@Component({
  selector: 'app-game-arithmetic-operations',
  templateUrl: './game-arithmetic-operations.component.html',
  styleUrls: ['./game-arithmetic-operations.component.scss']
})
export class GameArithmeticOperationsComponent implements OnInit, OnDestroy {
  operators: IGameOperator[] = new Array<IGameOperator>( 
    { selected: false, caption: '<', operand: '<', icon: 'pi pi-history' },
    { selected: false, caption: '+', operand: '+', icon: 'pi pi-plus' },
    { selected: false, caption: '-', operand: '-', icon: 'pi pi-minus' },
    { selected: false, caption: '*', operand: '*', icon: 'pi pi-times' },
    { selected: false, caption: ':', operand: ':', icon: 'pi pi-times' },
  );
  @Input() gameParameters: IGameParameters;

  private history: IStack<IGameOperation> | undefined;

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
