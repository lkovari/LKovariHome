import { Component, OnInit, ViewChild } from '@angular/core';
import { IStageLevel } from './models/stage-level.interface';
import { IGameParameters } from './models/game-parameters.interface';
import { IGameOperand } from './models/game-operand.interface';
import { IStack } from './models/stack.interface';
import { IGameOperation } from './models/game-operation.interface';
import { MessageService } from 'primeng/api';
import { GameArithmeticOperationsComponent } from './components/game-arithmetic-operations/game-arithmetic-operations.component';

@Component({
  selector: 'app-digits-game',
  templateUrl: './digits-game.component.html',
  styleUrls: ['./digits-game.component.scss'],
  providers: [MessageService]
})
export class DigitsGameComponent implements OnInit {
  @ViewChild('arithmeticOperations', { static: true }) arithmeticComponent: GameArithmeticOperationsComponent;

  currentDate = new Date();

  stageLevels: IStageLevel[] = [];
  gameParameters: IGameParameters[] = [];
  stageIndex: number = 0;

  constructor(private messageService: MessageService) {}

  private initializeStageLevels() {
    this.stageLevels = new Array<IStageLevel>( 
      { selected: true, index: 0, value: 96, completed: false },
      { selected: false, index: 1, value: 161, completed: false },
      { selected: false, index: 2, value: 275, completed: false },
      { selected: false, index: 3, value: 355, completed: false },
      { selected: false, index: 4, value: 404, completed: false });
  }
  
  private generateRandomGameParameters(): IGameParameters[] {
    return new Array<IGameParameters>( 
      { result: 96, operands: new Array<IGameOperand>( 
        { selected: false, disabled: false, value: 1 },
        { selected: false, disabled: false,value: 2 },
        { selected: false, disabled: false,value: 3 },
        { selected: false, disabled: false,value: 5 },
        { selected: false, disabled: false,value: 10 },
        { selected: false, disabled: false,value: 25 }
      ) },
      { result: 161, operands: new Array<IGameOperand>( 
        { selected: false, disabled: false, value: 2 },
        { selected: false, disabled: false,value: 5 },
        { selected: false, disabled: false,value: 9 },
        { selected: false, disabled: false,value: 10 },
        { selected: false, disabled: false,value: 11 },
        { selected: false, disabled: false,value: 25 }
      ) },
      { result: 275, operands: new Array<IGameOperand>( 
        { selected: false, disabled: false, value: 3 },
        { selected: false, disabled: false,value: 5 },
        { selected: false, disabled: false,value: 8 },
        { selected: false, disabled: false,value: 15 },
        { selected: false, disabled: false,value: 20 },
        { selected: false, disabled: false,value: 25 }
      ) },
      { result: 355, operands: new Array<IGameOperand>( 
        { selected: false, disabled: false, value: 3 },
        { selected: false, disabled: false,value: 5 },
        { selected: false, disabled: false,value: 8 },
        { selected: false, disabled: false,value: 9 },
        { selected: false, disabled: false,value: 15 },
        { selected: false, disabled: false,value: 20 }
      ) },
      { result: 404, operands: new Array<IGameOperand>( 
        { selected: false, disabled: false, value: 9 },
        { selected: false, disabled: false,value: 11 },
        { selected: false, disabled: false,value: 19 },
        { selected: false, disabled: false,value: 20 },
        { selected: false, disabled: false,value: 23 },
        { selected: false, disabled: false,value: 25 }
      ) }                        
    );
  }

  private stageToCompleted(lastPage: boolean) {
    this.stageLevels[this.stageIndex].completed = true;
    this.stageLevels[this.stageIndex].selected = false;
    if (!lastPage) {
      this.stageIndex++;
      this.stageLevels[this.stageIndex].selected = true;
    }
  }

  private initializeGameParameters() {
    this.gameParameters = this.generateRandomGameParameters();
  }

  private formatOperations(executedOperations: IStack<IGameOperation>): string {
    let result = "";
    while (executedOperations.size() > 0) {
      const gameOperation = executedOperations.pop();
      result += gameOperation?.operands[0] + ' ' + gameOperation?.operator + ' ' + gameOperation?.operands[1] + ' = ' + gameOperation?.result + "; ";
    }
    return result;
  }

  private showSuccessMessage(message: string) {
    this.messageService.add({ severity: 'success', summary: 'Congratulation!', detail: message });    
  }  

  private showErrorMessage(message: string) {
    this.messageService.add({ severity: 'error', summary: 'Error!', detail: message });    
  }  

  ngOnInit(): void {
    this.initializeStageLevels();
    this.initializeGameParameters();
  }

  onExpectedResultReached(executedOperations: IStack<IGameOperation>) {
    const executedOperationsAsText = this.formatOperations(executedOperations);
    this.showSuccessMessage('You are reach the expected result!');
    alert(executedOperationsAsText);
    this.stageToCompleted(this.stageIndex === 4);
  }

  onInvalidOperationExecuted(value: number) {
    this.showErrorMessage('Invalid Operation Executed!');
    this.arithmeticComponent.revertLastOperation();
    this.arithmeticComponent.enableOfAllOperands();
    console.log(value);
  }
}
