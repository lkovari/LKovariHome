import { Component, Input } from '@angular/core';
import { IStageLevel } from '../../models/stage-level.interface';
import { StageCommunicationService } from '../../services/stage-communication.service';
import { NgClass } from '@angular/common';
import { ExtendedModule } from '@angular/flex-layout/extended';

@Component({
    selector: 'app-stage-level',
    templateUrl: './stage-level.component.html',
    styleUrls: ['./stage-level.component.scss'],
    imports: [NgClass, ExtendedModule]
})
export class StageLevelComponent {
  stars: number[] = new Array<number>( 1, 2, 3 ); 
  @Input() stageLevel!: IStageLevel;

  constructor(private stageCommunicationService: StageCommunicationService) {
  }

  stageClick() {
    this.stageCommunicationService.updatePerformedItem(this.stageLevel);
    console.log('Stage Clicked');
  }
}
