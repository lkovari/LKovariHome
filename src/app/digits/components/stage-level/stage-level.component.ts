import { Component, ChangeDetectionStrategy, input, inject } from '@angular/core';
import { IStageLevel } from '../../models/stage-level.interface';
import { StageCommunicationService } from '../../services/stage-communication.service';

import { ExtendedModule } from '@angular/flex-layout/extended';

@Component({
    selector: 'app-stage-level',
    templateUrl: './stage-level.component.html',
    styleUrls: ['./stage-level.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [ExtendedModule]
})
export class StageLevelComponent {
  private stageCommunicationService = inject(StageCommunicationService);

  stars: number[] = new Array<number>( 1, 2, 3 ); 
  readonly stageLevel = input.required<IStageLevel>();

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {
  }

  stageClick() {
    this.stageCommunicationService.updatePerformedItem(this.stageLevel());
    console.log('Stage Clicked');
  }
}
