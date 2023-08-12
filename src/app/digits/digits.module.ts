import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigitsGameComponent } from './digits-game.component';
import { DigitsRoutingModule } from './digits-routing.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GameStageLevelsComponent } from './components/game-stage-levels/game-stage-levels.component';
import { StageLevelComponent } from './components/stage-level/stage-level.component';
import { GameArithmeticOperationsComponent } from './components/game-arithmetic-operations/game-arithmetic-operations.component';


@NgModule({
  declarations: [
    DigitsGameComponent,
    GameStageLevelsComponent,
    StageLevelComponent,
    GameArithmeticOperationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DigitsRoutingModule,
    FlexLayoutModule
  ]
})
export class DigitsModule { }
