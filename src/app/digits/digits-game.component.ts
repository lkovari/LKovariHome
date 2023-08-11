import { Component, OnInit } from '@angular/core';
import { IStageLevel } from './models/stage-level.interface';

@Component({
  selector: 'app-digits-game',
  templateUrl: './digits-game.component.html',
  styleUrls: ['./digits-game.component.scss']
})
export class DigitsGameComponent implements OnInit {
  currentDate = new Date();

  stageLevels: IStageLevel[] = [];

  constructor() {}

  private initializeStadeLevels() {
    this.stageLevels = new Array<IStageLevel>( 
      { selected: true, index: 0, value: 150, completed: false },
      { selected: false, index: 1, value: 250, completed: false },
      { selected: false, index: 2, value: 350, completed: false },
      { selected: false, index: 3, value: 450, completed: false },
      { selected: false, index: 4, value: 550, completed: false });
  }
  
  ngOnInit(): void {
    this.initializeStadeLevels();
  }

}
