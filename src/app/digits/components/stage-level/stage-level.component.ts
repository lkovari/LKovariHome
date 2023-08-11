import { Component, Input } from '@angular/core';
import { IStageLevel } from '../../models/stage-level.interface';

@Component({
  selector: 'app-stage-level',
  templateUrl: './stage-level.component.html',
  styleUrls: ['./stage-level.component.scss']
})
export class StageLevelComponent {
  stars: number[] = new Array<number>( 1, 2, 3 ); 
  @Input() stageLevel: IStageLevel;
}
