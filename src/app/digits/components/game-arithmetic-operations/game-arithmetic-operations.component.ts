import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IStack } from '../../models/stack.interface';
import { IGameOperation } from '../../models/game-operation.interface';
import { Stack } from '../../models/stack.model';
import { IGameParameters } from '../../models/game-parameters.interface';

@Component({
  selector: 'app-game-arithmetic-operations',
  templateUrl: './game-arithmetic-operations.component.html',
  styleUrls: ['./game-arithmetic-operations.component.scss']
})
export class GameArithmeticOperationsComponent implements OnInit, OnDestroy {
  operators: string[] = new Array<string>( 'pi pi-history', 'fa fa-plus', 'fa fa-minus', 'fa-solid fa-xmark', 'fa fa-div');
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

  onOperandButtonClick(operand: number) {
    console.log(operand);
  }
  onOperatorButtonClick(operator: string) {
    console.log(operator);
  }

  ngOnDestroy(): void {
    this.history!.clear();
    this.history = undefined;
  }
}
