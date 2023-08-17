import { Component, OnInit, ViewChild } from '@angular/core';
import { IStageLevel } from './models/stage-level.interface';
import { IGameParameters } from './models/game-parameters.interface';
import { IStack } from './models/stack.interface';
import { IGameOperation } from './models/game-operation.interface';
import { MessageService } from 'primeng/api';
import { GameArithmeticOperationsComponent } from './components/game-arithmetic-operations/game-arithmetic-operations.component';
import { GenerateGameParameters } from './generate-game-parameters';
import { CookieData } from './models/cookie-data.model';
import { ICookieData } from './models/cookie-data.interface';
import { CookieService } from 'ngx-cookie-service';
import { ClipboardService } from 'ngx-clipboard';

/*
  Known bugs:
  
  ToDo
  - share copy to clipboard does not works.

  Optional
  - consider the lodash deep copy usage or use the JSON.parse(JSON.stringify(data)) to clone object
*/
@Component({
  selector: 'app-digits-game',
  templateUrl: './digits-game.component.html',
  styleUrls: ['./digits-game.component.scss'],
  providers: [MessageService, CookieService],
})
export class DigitsGameComponent implements OnInit {
  @ViewChild('arithmeticOperations', { static: true }) arithmeticComponent: GameArithmeticOperationsComponent;
  readonly COOKIE_LK_DIGITS = 'CookieLKNumbers';
  private generateGameParameters: GenerateGameParameters;
  currentDate = new Date();

  stageLevels: IStageLevel[] = [];
  gameParameters: IGameParameters[] = [];
  stageIndex: number = 0;
  cookieData: ICookieData;

  constructor(private messageService: MessageService,
    private cookieService: CookieService,
    private clipboardService: ClipboardService) {}

  private initializeStageLevels() {
    this.stageLevels = new Array<IStageLevel>(
      { selected: true, index: 0, value: 96, completed: false, summary: "" },
      { selected: false, index: 1, value: 161, completed: false, summary: ""  },
      { selected: false, index: 2, value: 275, completed: false, summary: ""  },
      { selected: false, index: 3, value: 355, completed: false, summary: ""  },
      { selected: false, index: 4, value: 404, completed: false, summary: ""  }
    );
  }

  private stageToCompleted() {
    this.stageLevels[this.stageIndex].completed = true;
    this.stageLevels[this.stageIndex].selected = false;
  }

  private formatOperations(executedOperations: IStack<IGameOperation>): string {
    let result = 'Completed! Executed Operations:\n';
    let ix = executedOperations.size() - 1;
    while (ix >= 0) {
      const gameOperation = executedOperations.peekBy(ix);
      result +=
        (ix + 1) +
        '. ' +
        gameOperation?.operands[0] +
        ' ' +
        gameOperation?.operator +
        ' ' +
        gameOperation?.operands[1] +
        ' = ' +
        gameOperation?.result +
        '\n';
      --ix;
    }
    return result;
  }

  private createSummaryOfTHeOperations(stageIndex: number, executedOperations: IStack<IGameOperation>): string {
    let result = this.stageLevels[stageIndex].value + ' -> '
    while (executedOperations.size() > 0) {
      const gameOperation = executedOperations.pop();
      result += '' + gameOperation?.operator;
    }
    result += '\n';
    return result;
  }

  private showSuccessMessage(message: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Congratulation!',
      detail: message,
    });
  }

  private showErrorMessage(message: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error!',
      detail: message,
    });
  }

  private setupStages() {
    let ix = 0;
    this.gameParameters.forEach((gp) => {
      this.stageLevels[ix].value = gp.result;
      ++ix;
    });
  }

  private storeGameState() {
    let cookieData = new CookieData();
    let currentDate = new Date();
    cookieData.storeDate = currentDate.toLocaleDateString();
    cookieData.stageIndex = this.stageIndex;
    cookieData.stageLevels = this.stageLevels;
    cookieData.gameParameters = this.gameParameters;
    let cookieDataAsText = cookieData.cookieData2Text();
    let expires = new Date();
    expires.setHours(23,59,59,999); // midnight
    this.cookieService.set(this.COOKIE_LK_DIGITS, cookieDataAsText, expires);
  }

  private restoreGameState(): ICookieData | null {
    let cookie = this.cookieService.get(this.COOKIE_LK_DIGITS);
    let cookieData: CookieData | null;
    if (!cookie || cookie == "") {
      console.log("Unable to retrieve the Game State");
      cookieData = null;
    } else {
      cookieData = new CookieData();
      cookieData = cookieData.text2CookieData(cookie);
    }
    return cookieData;
  }

  ngOnInit(): void {
    alert(
      `This "Numbers" game is a prototype only!
        -currently no known bugs, I open for any feedback!`
    );
    this.initializeStageLevels();
    this.generateGameParameters = new GenerateGameParameters();
    this.gameParameters = this.generateGameParameters.generateStageNumbers();
    this.setupStages();

    let gameState = this.restoreGameState();
    if (!gameState) {
      this.storeGameState();
    } else {
      this.stageIndex = gameState.stageIndex;
      this.stageLevels = gameState.stageLevels;
      this.gameParameters = gameState.gameParameters;
    }
  }

  onExpectedResultReached(executedOperations: IStack<IGameOperation>) {
    const executedOperationsAsText = this.formatOperations(executedOperations);
    const stageSummary = this.createSummaryOfTHeOperations(this.stageIndex, executedOperations);
    this.stageLevels[this.stageIndex].summary = stageSummary;
    this.showSuccessMessage('You are reach the expected result!');
    alert(executedOperationsAsText);
    this.clipboardService.copy(executedOperationsAsText);
    this.stageToCompleted();
    let isItTheLastPage = this.stageIndex === this.stageLevels.length - 1;
    if (isItTheLastPage) {
      let allStageSummary = "Genius!\n";
      this.stageLevels.forEach(stage => {
        allStageSummary += stage.summary;
      });
      this.clipboardService.copy(allStageSummary);
      alert(allStageSummary);
    }
    if (!isItTheLastPage) {
      this.stageIndex++;
      this.stageLevels[this.stageIndex].selected = true;
    }
    this.storeGameState();
    this.arithmeticComponent.clearHistory();
  }

  onInvalidOperationExecuted(value: number) {
    this.showErrorMessage('Invalid Operation Executed!');
    this.arithmeticComponent.revertLastOperation();
    console.log(value);
  }

  onDeleteCookie() {
    this.cookieService.deleteAll();
  }
}
