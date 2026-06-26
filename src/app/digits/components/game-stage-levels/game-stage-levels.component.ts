import { Component, OnInit, ChangeDetectionStrategy, input } from '@angular/core';
import { IStageLevel } from '../../models/stage-level.interface';

import { ExtendedModule } from '@angular/flex-layout/extended';
import { StageLevelComponent } from '../stage-level/stage-level.component';

@Component({
    selector: 'app-game-stage-levels',
    templateUrl: './game-stage-levels.component.html',
    styleUrls: ['./game-stage-levels.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [ExtendedModule, StageLevelComponent]
})
export class GameStageLevelsComponent  implements OnInit {
  private readonly MAXSTAGE_LEVELS: number = 5;
  public NO_STAGE_LEVELS: boolean = false;
  readonly stageLevels = input<Array<IStageLevel>>(new Array<IStageLevel>());

  ngOnInit(): void {
    const stageLevels = this.stageLevels();
    this.NO_STAGE_LEVELS = !stageLevels 
      || (stageLevels && stageLevels.length != this.MAXSTAGE_LEVELS);
  }  
}
