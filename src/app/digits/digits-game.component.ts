import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
import { Subscription, map } from 'rxjs';
import { NumbersFirestoreService } from './services/numbers-firestore.service';
import { IFirestorePuzzleData } from './models/firestore-puzzle-data.interface';
import { IPuzzleDataStage } from './models/puzzle-data-stage.interface';
import { PuzzleData } from './models/puzzle-data.model';
import { PuzzleDataStage } from './models/puzzle-data-stage.model';
import { FirestorePuzzleData } from './models/firestore-puzzle-data.model';
import { StageCommunicationService } from './services/stage-communication.service';

/*
  Known bugs:
  
  ToDo
  - share copy to clipboard does not works.
  - tight in generateNewGameAndStore() to the proper place
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
export class DigitsGameComponent implements OnInit, OnDestroy {
  @ViewChild('arithmeticOperations', { static: true }) arithmeticComponent: GameArithmeticOperationsComponent;
  readonly COOKIE_LK_DIGITS = 'CookieLKNumbers';
  private generateGameParameters = new GenerateGameParameters();
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
  gameCompletedModalMessages: string[] = [];
  gameCompletedModalVisible = false;
  allGameCompletedModalMessage: string[] = [];
  allGameCompletedModalVisible = false;
  splashWidth = '80vw';
  updateStageLevel: Subscription;

  constructor(private messageService: MessageService,
    private cookieService: CookieService,
    private clipboardService: ClipboardService,
    private numbersFirestoreService: NumbersFirestoreService,
    private stageCommunicationService: StageCommunicationService) {
      this.updateStageLevel = this.stageCommunicationService.getUpdatedStageLevel().subscribe({
        next: (v) => {
          console.log('StageLevel updated ' + v.index);
        },
        error: (e) => console.error('StageLevel updated ' + e),
        complete: () => console.info('StageLevel updated Complete') 
      });
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
    this.gameCompletedModalMessages = [];
    while (executedOperations.size() > 0) {
      const gameOperation = executedOperations.pop();
      this.gameCompletedModalMessages.push(gameOperation?.operands[0] +' '+ gameOperation!.operator + ' ' + gameOperation?.operands[1] + ' = ' + gameOperation?.result);
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
    cookieData.completed = this.allGameCompleted() && this.stageIndex === this.stageLevels.length - 1;
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
      console.log("INFO: Unable to retrieve the Game State");
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
    .then(() => console.log('INFO: The Game Data was updated successfully in DB!'))
    .catch(err => console.log(err));   
  }

  private createPuzzleDataInDb(firestorePuzzleData: IFirestorePuzzleData) {
    this.numbersFirestoreService.create(firestorePuzzleData)
    .then(() => {
      console.log('INFO: The Puzzle Data was created successfully in DB!')
    });
  }

  private currentLocaleAlreadyStoredInDb(): boolean {
    let currentLocale = navigator.language;
    const foundItem =  this.firestorePuzzleDataItems.find(pd => {
      return pd.locale === currentLocale;
    });
    return foundItem !== undefined;
  }

  private upsertGameDataInDb(puzzleData: IPuzzleData) {
    if (this.currentLocaleAlreadyStoredInDb()) {
      this.updatePuzzleDataInDb(puzzleData);
    } else {
      const firestorePuzzleData = new FirestorePuzzleData();
      firestorePuzzleData.locale = navigator.language;
      firestorePuzzleData.data = JSON.stringify(puzzleData);                  
      this.createPuzzleDataInDb(firestorePuzzleData);
    }    
  }

  private allGameCompleted(): boolean {
    let allLevelsCompleted = true;
    this.stageLevels.forEach((stageLevel: IStageLevel) => {
      allLevelsCompleted = allLevelsCompleted  && stageLevel.completed;
    });
    return allLevelsCompleted;
  }

  private collectAllOperations(): boolean {
    let isItTheLastPage = this.allGameCompleted() && this.stageIndex === this.stageLevels.length - 1;
    if (isItTheLastPage) {
      let allStageSummary = "Genius!\n";
      this.allGameCompletedModalMessage = [];
      this.stageLevels.forEach(stage => {
        allStageSummary += stage.summary;
        this.allGameCompletedModalMessage.push(stage.summary);
      });
      this.clipboardService.copy(allStageSummary);
      this.storeGameStateToCookie();
      this.allGameCompletedModalVisible = true;
    }
    return isItTheLastPage;
  }

  // TODO tight in generateNewGameAndStore() to the proper place
  private generateNewGameAndStore() {
    this.gameParameters = this.generateGameParameters.generateStageNumbers();
    this.storeGameStateToCookie();
    this.setupStages();
    let puzzleData = this.mapGameParametersToPuzzleData(this.gameParameters);
    this.upsertGameDataInDb(puzzleData);    
  }

  ngOnInit(): void {
    console.log(`Browser locale: ${navigator.language}`);
    this.initializeStageLevels();
    let gameState = this.restoreGameStateFromCookie();
    if (gameState) {
      console.log("INFO: Game state restored from cookie");
      const cookieDate = new Date(gameState!.storeDate);
      if (this.isDateSame(cookieDate, new Date())) {
        this.stageIndex = gameState.stageIndex;
        this.stageLevels = gameState.stageLevels;
        this.gameParameters = gameState.gameParameters;
        this.setupStages();
        if (gameState.completed) {
          const isItTheLastPage = this.collectAllOperations();
          if (isItTheLastPage) {
            console.log("INFO: All Games completed show completed modal");
          }   
        } else {
          console.log("INFO: All Games incomplete show splash");
          // this.loadGameDataFromDB();
          this.splashVisible = true;
        }  
      } else {
        this.gameParameters = this.generateGameParameters.generateStageNumbers();
        this.storeGameStateToCookie();
        this.setupStages();
         let puzzleData = this.mapGameParametersToPuzzleData(this.gameParameters);
         console.log("INFO: Date mismatch which restored from cookie " + puzzleData);
        // TODO check first in the DB!
        this.upsertGameDataInDb(puzzleData);
      }
    } else {
      console.log("INFO: No game state in cookie, try to get if from DB.");
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
        let localizedPuzzleData = data.find(pd => {
          return pd.locale === locale;
        });
        if (localizedPuzzleData) {
          this.firestorePuzzleData = localizedPuzzleData!;
          this.todayPuzzleData = JSON.parse(this.firestorePuzzleData.data);
          console.log("INFO: Game Data retrieved from DB.");
          const today = new Date();
          const storedDay = new Date(this.todayPuzzleData.day);
          if (this.todayPuzzleData.day && this.isDateSame(storedDay, today)) {
            console.log("INFO: Game Data day date is matched, apply Game data");
            this.mapPuzzleDataToGameParameters(this.todayPuzzleData);
            this.storeGameStateToCookie();
            this.setupStages();
          } else {
            console.log("INFO: Game Data day of date is Not matched, generate new game parameters");
            this.gameParameters = this.generateGameParameters.generateStageNumbers();
            this.storeGameStateToCookie();
            this.setupStages();
            let puzzleData = this.mapGameParametersToPuzzleData(this.gameParameters);
            this.upsertGameDataInDb(puzzleData);
          }
        } else {
          console.log("INFO: Game Data not found in the DB. by locale");
          this.gameParameters = this.generateGameParameters.generateStageNumbers();
          this.storeGameStateToCookie();
          this.setupStages();
          let puzzleData = this.mapGameParametersToPuzzleData(this.gameParameters);
          const firestorePuzzleData = new FirestorePuzzleData();
          firestorePuzzleData.locale = navigator.language;
          firestorePuzzleData.data = JSON.stringify(puzzleData);          
          this.createPuzzleDataInDb(firestorePuzzleData);
        }
      });      
    }    
  }

  ngOnDestroy(): void {
    this.updateStageLevel.unsubscribe();
  }

  onExpectedResultReached(executedOperations: IStack<IGameOperation>) {
    const executedOperationsAsText = this.formatOperations(executedOperations);
    const stageSummary = this.createSummaryOfTHeOperations(this.stageIndex, executedOperations);
    this.stageLevels[this.stageIndex].summary = stageSummary;
    this.clipboardService.copy(executedOperationsAsText);
    this.showSuccessMessage('You are reach the expected result!');
    this.stageToCompleted();
    this.gameCompletedModalVisible = true;

    const isItTheLastPage = this.collectAllOperations();
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
    this.generateNewGameAndStore();
  }
}
