import { Component, Input, OnInit } from '@angular/core';
import { IStageLevel } from '../../models/stage-level.interface';
import { NgStyle } from '@angular/common';
import { ExtendedModule } from '@angular/flex-layout/extended';
import { StageLevelComponent } from '../stage-level/stage-level.component';

@Component({
    selector: 'app-game-stage-levels',
    templateUrl: './game-stage-levels.component.html',
    styleUrls: ['./game-stage-levels.component.scss'],
    imports: [NgStyle, ExtendedModule, StageLevelComponent]
})
export class GameStageLevelsComponent  implements OnInit {
  private readonly MAXSTAGE_LEVELS: number = 5;
  public NO_STAGE_LEVELS: boolean = false;
  @Input() stageLevels: Array<IStageLevel> = new Array<IStageLevel>();

  ngOnInit(): void {
    this.NO_STAGE_LEVELS = !this.stageLevels 
      || (this.stageLevels && this.stageLevels.length != this.MAXSTAGE_LEVELS);
  }  
}
