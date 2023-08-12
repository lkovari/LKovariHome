import { Component, OnInit } from '@angular/core';
import { IStageLevel } from './models/stage-level.interface';
import { IGameParameters } from './models/game-parameters.interface';

@Component({
  selector: 'app-digits-game',
  templateUrl: './digits-game.component.html',
  styleUrls: ['./digits-game.component.scss']
})
export class DigitsGameComponent implements OnInit {
  currentDate = new Date();

  stageLevels: IStageLevel[] = [];
  gameParameters: IGameParameters[] = [];
  stageIndex: number = 0;

  constructor() {}

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
      { result: 161, operands: new Array<number>( 2, 5, 9, 10, 11, 25) } 
    ) ;
  }

  private initializeGameParameters() {
    this.gameParameters = this.generateRandomGameParameters();
  }

  ngOnInit(): void {
    this.initializeStageLevels();
    this.initializeGameParameters();
  }

}
