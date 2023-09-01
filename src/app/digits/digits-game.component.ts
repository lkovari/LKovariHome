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
import { IPuzzleData } from './models/puzzle-data.interface';
import { map } from 'rxjs';
import { NumbersFirestoreService } from './services/numbers-firestore.service';
import { IFirestorePuzzleData } from './models/firestore-puzzle-data.interface';
import { IPuzzleDataStage } from './models/puzzle-data-stage.interface';
import { PuzzleData } from './models/puzzle-data.model';
import { PuzzleDataStage } from './models/puzzle-data-stage.model';

/*
  Known bugs:
  
  ToDo
  - share copy to clipboard does not works.
  - issue with @angular/fire is: https://stackoverflow.com/questions/74868274/issue-with-importing-angularfirestoremodule-this-type-parameter-might-need-an currently in use the version "^16.0.0-canary.4172abd"

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
  firestorePuzzleDataItems: IFirestorePuzzleData[];
  firestorePuzzleData: IFirestorePuzzleData;
  todayPuzzleData: IPuzzleData;
  todayPuzzleDataItems: IPuzzleData[] = [];
  splashVisible = false;
  gameCompletedVisible = false;
  splashMessage = `This "Numbers" game is a prototype only! No known bugs, except for Origin trial controlled feature not enabled: 'interest-cohort'`;
  gameCompletedMessage = ``;
  allGameCompletedMessage = ``;
  allGameCompletedVisible = false;

  constructor(private messageService: MessageService,
    private cookieService: CookieService,
    private clipboardService: ClipboardService,
    private numbersFirestoreService: NumbersFirestoreService) {
    }

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

  private storeGameStateToCookie() {
    let cookieData = new CookieData();
    cookieData.storeDate = new Date();
    cookieData.stageIndex = this.stageIndex;
    cookieData.stageLevels = this.stageLevels;
    cookieData.completed = this.stageIndex === this.stageLevels.length - 1;
    cookieData.gameParameters = this.gameParameters;
    let cookieDataAsText = cookieData.cookieData2Text();
    let expires = new Date();
    expires.setHours(23,59,59,999); // midnight
    this.cookieService.set(this.COOKIE_LK_DIGITS, cookieDataAsText, expires);
  }

  private restoreGameStateFromCookie(): ICookieData | null {
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
  
  private mapPuzzleDataToGameParameters(puzzleData: IPuzzleData) {
    puzzleData.stages.forEach((puzzleDataStage: IPuzzleDataStage) => {
      let gameParameters = this.gameParameters.find((param: IGameParameters) => {
          return param.stageIndex === puzzleDataStage.stageIndex;
      });
      if (gameParameters) {
        gameParameters.result = puzzleDataStage.expectedValue;
        let ix = 0;
        gameParameters.operands.forEach(operand => {
          operand.value = puzzleDataStage.operands[ix];
          ix++;
        });
        // stages
        this.initializeStageLevels();
        let stageLevel = this.stageLevels.find(level =>{
          return level.index === puzzleDataStage.stageIndex;
        });
        if (stageLevel) {
          stageLevel.value == puzzleDataStage.expectedValue;
        }
      }
    });
  }

  private mapGameParametersToPuzzleData(gameParameterValues: IGameParameters[]): IPuzzleData {
    let puzzleData = new PuzzleData();
    puzzleData.day = new Date();
    puzzleData.day.setHours(23,59,59,999); // midnight
    
    gameParameterValues.forEach(gameParameters => {
      let puzzleDataStage = new PuzzleDataStage();
      puzzleDataStage.stageIndex = gameParameters.stageIndex;
      puzzleDataStage.expectedValue = gameParameters.result;
      let operandValues = new Array<number>();
      gameParameters.operands.forEach(gameOperand => {
        operandValues.push(gameOperand.value)
      });
      puzzleDataStage.operands = operandValues,
      puzzleData.stages.push(puzzleDataStage);
    });
    return puzzleData;
  }
  
  private isDateSame(dateA: Date, dateB: Date): boolean {
    return dateA.getFullYear() === dateB.getFullYear() && dateA.getMonth() === dateB.getMonth()
    && dateA.getDate() === dateB.getDate();
  }

  private updatePuzzleDataInDb(puzzleData: IPuzzleData) {
    this.firestorePuzzleData.data = JSON.stringify(puzzleData);
    this.numbersFirestoreService.update(this.firestorePuzzleData.id!, { data: this.firestorePuzzleData.data })
    .then(() => console.log('The Puzzle Data was updated successfully!'))
    .catch(err => console.log(err));   
  }

  ngOnInit(): void {
    this.initializeStageLevels();
    /*
    alert(
      `This "Numbers" game is a prototype only!
        -no known bugs, except for Origin trial controlled feature not enabled: 'interest-cohort'`
    );
    */
    let gameState = this.restoreGameStateFromCookie();
    if (gameState) {
      const cookieDate = new Date(gameState!.storeDate);
      if (this.isDateSame(cookieDate, new Date())) {
        this.stageIndex = gameState.stageIndex;
        this.stageLevels = gameState.stageLevels;
        this.gameParameters = gameState.gameParameters;
        this.setupStages();
        if (gameState.completed) {
          let isItTheLastPage = this.stageIndex === this.stageLevels.length - 1;
          if (isItTheLastPage) {
            let allStageSummary = "Genius!\n";
            this.stageLevels.forEach(stage => {
              allStageSummary += stage.summary;
            });
            this.clipboardService.copy(allStageSummary);
            //alert(allStageSummary);       
            this.allGameCompletedMessage = allStageSummary;
            this.allGameCompletedVisible = true;
            //return;
          }   
        } else {
          this.splashVisible = true;
        }  
        console.log("Game state restored from cookie");
      } else {
        this.generateGameParameters = new GenerateGameParameters();
        this.gameParameters = this.generateGameParameters.generateStageNumbers();
        this.storeGameStateToCookie();
        this.setupStages();
         let puzzleData = this.mapGameParametersToPuzzleData(this.gameParameters);
         console.log("Date mismatch which restored from cookie " + puzzleData);
        // TODO store puzzleData to DB.
        this.updatePuzzleDataInDb(puzzleData);
      }
    } else {
      console.log("No game state in cookie");
      this.generateGameParameters = new GenerateGameParameters();
      this.gameParameters = this.generateGameParameters.generateStageNumbers();
      let locale = navigator.language;
      this.numbersFirestoreService.getAll().snapshotChanges().pipe(
        map(changes =>
          changes.map(c =>
            ({ id: c.payload.doc.id, ...c.payload.doc.data() })
          )
        )
      ).subscribe(data => {
        this.firestorePuzzleDataItems = data;
        let localizedPuzzleData = data.filter(pd => {
          return pd.locale === locale;
        });
        this.firestorePuzzleData = localizedPuzzleData[0];
        this.todayPuzzleData = JSON.parse(this.firestorePuzzleData.data);
        console.log("Puzzle Data retrieved from DB");
        const today = new Date();
        const storedDay = new Date(this.todayPuzzleData.day);
        if (this.todayPuzzleData.day && this.isDateSame(storedDay, today)) {
          console.log("Puzzle Data day date is matched, restore puzzle data to Game Parameters");
          this.mapPuzzleDataToGameParameters(this.todayPuzzleData);
          this.storeGameStateToCookie();
          this.setupStages();
        } else {
          console.log("Puzzle Data day date is Not matched, generate new game parameters");
          this.generateGameParameters = new GenerateGameParameters();
          this.gameParameters = this.generateGameParameters.generateStageNumbers();
          this.storeGameStateToCookie();
          this.setupStages();
          let puzzleData = this.mapGameParametersToPuzzleData(this.gameParameters);
          console.log(JSON.stringify(puzzleData));
          // TODO Store puzzle data to db. 
          this.updatePuzzleDataInDb(puzzleData);
        }
      });      
    }    
  }


  onExpectedResultReached(executedOperations: IStack<IGameOperation>) {
    const executedOperationsAsText = this.formatOperations(executedOperations);
    const stageSummary = this.createSummaryOfTHeOperations(this.stageIndex, executedOperations);
    this.stageLevels[this.stageIndex].summary = stageSummary;
    this.clipboardService.copy(executedOperationsAsText);
    this.showSuccessMessage('You are reach the expected result!');
    //alert(executedOperationsAsText);
    this.gameCompletedMessage = executedOperationsAsText;
    this.gameCompletedVisible = true;
    this.stageToCompleted();
    let isItTheLastPage = this.stageIndex === this.stageLevels.length - 1;
    if (isItTheLastPage) {
      let allStageSummary = "Genius!\n";
      this.stageLevels.forEach(stage => {
        allStageSummary += stage.summary;
      });
      this.clipboardService.copy(allStageSummary);
      // alert(allStageSummary);
      this.allGameCompletedMessage = allStageSummary;
      this.allGameCompletedVisible = true;
    }
    if (!isItTheLastPage) {
      this.stageIndex++;
      this.stageLevels[this.stageIndex].selected = true;
    }
    this.storeGameStateToCookie();
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

  onUpdatePuzzleData() {
    console.log("Will update puzzle data");
  }
}
