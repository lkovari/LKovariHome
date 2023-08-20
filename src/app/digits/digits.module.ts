import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigitsGameComponent } from './digits-game.component';
import { DigitsRoutingModule } from './digits-routing.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GameStageLevelsComponent } from './components/game-stage-levels/game-stage-levels.component';
import { StageLevelComponent } from './components/stage-level/stage-level.component';
import { GameArithmeticOperationsComponent } from './components/game-arithmetic-operations/game-arithmetic-operations.component';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MatIconModule } from '@angular/material/icon';
import { ClipboardModule } from 'ngx-clipboard';
import { environment } from 'src/environments/environment';
import { provideFirebaseApp, initializeApp, getApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
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
    ToastModule,
    MessagesModule,
    DigitsRoutingModule,
    FlexLayoutModule,
    MatIconModule,
    ClipboardModule,
    provideFirebaseApp(() => initializeApp(environment.firebasePuzzleData)),
    provideFirestore(() => getFirestore(getApp()))
  ]
})
export class DigitsModule { }
