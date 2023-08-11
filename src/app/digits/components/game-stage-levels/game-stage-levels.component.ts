import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-stage-levels',
  templateUrl: './game-stage-levels.component.html',
  styleUrls: ['./game-stage-levels.component.scss']
})
export class GameStageLevelsComponent  implements OnInit {
  private readonly MAXSTAGE_LEVELS: number = 5;
  public NO_STAGE_LEVELS: boolean = false;
  @Input() stageLevels: Array<number>;

  ngOnInit(): void {
    this.NO_STAGE_LEVELS = !this.stageLevels 
      || (this.stageLevels && this.stageLevels.length != this.MAXSTAGE_LEVELS);

  }  
}
