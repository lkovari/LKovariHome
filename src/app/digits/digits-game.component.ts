import { Component, OnInit } from '@angular/core';
import { IStageLevel } from './models/stage-level.interface';
import { IGameParameters } from './models/game-parameters.interface';
import { IGameOperand } from './models/game-operand.interface';
import { IStack } from './models/stack.interface';
import { IGameOperation } from './models/game-operation.interface';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-digits-game',
  templateUrl: './digits-game.component.html',
  styleUrls: ['./digits-game.component.scss'],
  providers: [MessageService]
})
export class DigitsGameComponent implements OnInit {
  currentDate = new Date();

  stageLevels: IStageLevel[] = [];
  gameParameters: IGameParameters[] = [];
  stageIndex: number = 0;

  constructor(private messageService: MessageService) {}

  private initializeStageLevels() {
    this.stageLevels = new Array<IStageLevel>( 
      { selected: false, index: 0, value: 150, completed: true },
      { selected: false, index: 1, value: 250, completed: true },
      { selected: true, index: 2, value: 350, completed: false },
      { selected: false, index: 3, value: 450, completed: false },
      { selected: false, index: 4, value: 550, completed: false });
  }
  
  private generateRandomGameParameters(): IGameParameters[] {
    return new Array<IGameParameters>( 
      { result: 161, operands: new Array<IGameOperand>( 
        { selected: false, disabled: false, value: 2 },
        { selected: false, disabled: false,value: 5 },
        { selected: false, disabled: false,value: 9 },
        { selected: false, disabled: false,value: 10 },
        { selected: false, disabled: false,value: 11 },
        { selected: false, disabled: false,value: 25 }
      ) }
    );
  }

  private initializeGameParameters() {
    this.gameParameters = this.generateRandomGameParameters();
  }

  private formatOperations(executedOperations: IStack<IGameOperation>): string {
    let result = "Executed Operations: ";
    while (executedOperations.size() > 0) {
      const gameOperation = executedOperations.pop();
      result += gameOperation?.operands[0] + ' ' + gameOperation?.operator + ' ' + gameOperation?.operands[1] + ' = ' + gameOperation?.result + "; ";
    }
    return result;
  }

  private showSuccessMessage(message: string) {
    this.messageService.add({ sticky: true, severity: 'success', summary: 'Success', detail: message });    
  }  

  ngOnInit(): void {
    this.initializeStageLevels();
    this.initializeGameParameters();
  }

  onExpectedResultReached(executedOperations: IStack<IGameOperation>) {
    const executedOperationsAsText = this.formatOperations(executedOperations);
    this.showSuccessMessage(executedOperationsAsText);
  }

}
