import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { IStack } from '../../models/stack.interface';
import { Stack } from '../../models/stack.model';
import { IGameParameters } from '../../models/game-parameters.interface';
import { IGameOperator } from '../../models/game-operator.interface';
import { IGameOperand } from '../../models/game-operand.interface';
import { EvaluateArythmeticOperation } from './evaluate-arythmetic-operation';
import { IGameOperation } from '../../models/game-operation.interface';
import { GameOperation } from '../../models/game.operation.model';
import { DigitsConstants } from '../../digits-constants';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { operandButtonAnimation } from './operand-button-animation';

@Component({
  host: {
    '[@operandButtonAnimationMove]': 'operandButtonAnimation',
    '(@operandButtonAnimationMove.start)': 'captureAnimationTriggerStartEvent($event)',
    '(@operandButtonAnimationMove.done)': 'captureAnimationTriggerDoneEvent($event)',
  },
  selector: 'app-game-arithmetic-operations',
  templateUrl: './game-arithmetic-operations.component.html',
  styleUrls: ['./game-arithmetic-operations.component.scss'],
  animations: [ operandButtonAnimation ],
})
export class GameArithmeticOperationsComponent implements OnInit, OnDestroy {
  githubLogoPath = 'assets/logos/GitHub-Mark-32px.png';
  operators: IGameOperator[] = new Array<IGameOperator>(
    {
      selected: false,
      caption: DigitsConstants.OPERATOR_REV,
      operator: DigitsConstants.OPERATOR_REV,
      icon: 'revert',
    },
    {
      selected: false,
      caption: DigitsConstants.OPERATOR_ADD,
      operator: DigitsConstants.OPERATOR_ADD,
      icon: 'addition',
    },
    {
      selected: false,
      caption: DigitsConstants.OPERATOR_SUB,
      operator: DigitsConstants.OPERATOR_SUB,
      icon: 'substraction',
    },
    {
      selected: false,
      caption: DigitsConstants.OPERATOR_MUL,
      operator: DigitsConstants.OPERATOR_MUL,
      icon: 'multiplication',
    },
    {
      selected: false,
      caption: DigitsConstants.OPERATOR_DIV,
      operator: DigitsConstants.OPERATOR_DIV,
      icon: 'division',
    }
  );

  @Input() gameParameters: IGameParameters;
  @Output() onExpectedResultReached = new EventEmitter<IStack<IGameOperation>>();
  @Output() onInvalidOperationExecuted = new EventEmitter<number>();
  
  private history: IStack<IGameParameters> | undefined;
  private operationHistory: IStack<IGameOperation> | undefined;

  private selectedOperandA: IGameOperand | null;
  private selectedOperandB: IGameOperand | null;
  public selectedOperandRectA = new DOMRect(915, 219.3125, 90, 90);
  public selectedOperandRectB = new DOMRect(1025, 324.3125, 90, 90);

  private _buttonFromALeft: string;
  get buttonFromALeft(): string {
    this._buttonFromALeft = '' + this.selectedOperandRectA.x + 'px';
    return this._buttonFromALeft;
  }

  private _buttonFromATop: string;
  get buttonFromATop(): string {
    this._buttonFromATop = '' + Math.round(this.selectedOperandRectA.y) +'px';
    return this._buttonFromATop;
  }

  private _buttonToBLeft: string;
  get buttonToBLeft(): string {
    this._buttonToBLeft = '' + this.selectedOperandRectB.x + 'px';
    return this._buttonToBLeft;
  }

  private _buttonToBTop: string;
  get buttonToBTop(): string {
    this._buttonToBTop = '' + Math.round(this.selectedOperandRectB.y) + 'px';
    return this._buttonToBTop;
  }

  buttonMoveDirection = 'buttonFromA';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('revert',  sanitizer.bypassSecurityTrustResourceUrl('assets/icons/rotate-left-solid.svg'));
    iconRegistry.addSvgIcon('addition',  sanitizer.bypassSecurityTrustResourceUrl('assets/icons/plus-solid.svg'));
    iconRegistry.addSvgIcon('substraction',  sanitizer.bypassSecurityTrustResourceUrl('assets/icons/minus-solid.svg'));
    iconRegistry.addSvgIcon('multiplication',  sanitizer.bypassSecurityTrustResourceUrl('assets/icons/xmark-solid.svg'));
    iconRegistry.addSvgIcon('division',  sanitizer.bypassSecurityTrustResourceUrl('assets/icons/divide-solid.svg'));
  }
  private getSelectedOperator(): IGameOperator | undefined {
    return this.operators.find((o) => o.selected);
  }

  private clearSelectionOfOperands() {
    this.gameParameters.operands.forEach((operand) => {
      operand.selected = false;
    });
  }

  private isTheExpectedResultReached(result: number) {
    return this.gameParameters.result === result;
  }

  private addStateToHistory(gameParameters: IGameParameters) {
    this.history!.push(gameParameters);
  }

  private clearSelectionOfOperators() {
    this.operators.forEach((operator) => {
      operator.selected = false;
    });
  }

  private addGameOperationToOperationHistory(operation: IGameOperation) {
    this.operationHistory?.push(operation);
  }

  captureAnimationTriggerStartEvent(event: AnimationEvent) {
    console.log('Animation trigger start ', event);
  }

  captureAnimationTriggerDoneEvent(event: AnimationEvent) {
    console.log('Animation trigger done ', event);
  }
  
  ngOnInit(): void {
    this.history = new Stack<IGameParameters>();
    this.operationHistory = new Stack<IGameOperation>();
  }

  public revertLastOperation() {
    if (this.history!.size() > 0) {
      this.gameParameters = this.history!.pop()!;
    } else {
      console.log('History is empty!');
    }
    this.clearSelectionOfOperators();
    this.clearSelectionOfOperands();
    this.selectedOperandA = null;
    this.selectedOperandB = null;
    this.buttonMoveDirection = "buttonFromA";
  }

  public enableOfAllOperands() {
    this.gameParameters.operands.forEach((operand) => {
      operand.disabled = false;
    });
  }

  public clearHistory() {
    this.history?.clear();
  }

  removeLastOperation(): IGameParameters | undefined {
    return this.history!.pop();
  }

  onOperandButtonClick(eventTarget: any, operand: IGameOperand) {
    operand.selected = !operand.selected;
    if (!operand.selected) {
      if (this.selectedOperandB && this.selectedOperandB.id === operand.id) {
        this.selectedOperandB.selected = false;
        this.selectedOperandB = null;
        return;
      } else if (this.selectedOperandA && this.selectedOperandA.id === operand.id) {
        this.selectedOperandA.selected = false;
        this.selectedOperandA = null;
        return;
      }
    }
    if (!this.selectedOperandA) {
      this.selectedOperandA = operand;
      this.buttonMoveDirection = "buttonFromA";
      this.selectedOperandRectA = eventTarget.getBoundingClientRect();
      console.log('Operand A ' +  JSON.stringify(this.selectedOperandRectA));
    } else {
      if (this.selectedOperandA.id !== operand.id) {
        if (!this.selectedOperandB) {
          this.selectedOperandB = operand;
          this.selectedOperandRectB = eventTarget.getBoundingClientRect();
          this.buttonMoveDirection = "buttonToB";
          console.log('Operand B ' + JSON.stringify(this.selectedOperandRectB));
        }
      }
    }
    var selectedOperator = this.getSelectedOperator();
    if (this.selectedOperandA && this.selectedOperandB && !selectedOperator) {
      this.selectedOperandB.selected = false;
      this.selectedOperandB = null;
      this.buttonMoveDirection = "buttonFromA";
    }else if (this.selectedOperandA && this.selectedOperandB && selectedOperator) {
      let clonedGameParameters =
        EvaluateArythmeticOperation.cloneGameParameters(this.gameParameters);

      let result = EvaluateArythmeticOperation.evaluate(
        this.selectedOperandA.value,
        this.selectedOperandB.value,
        selectedOperator.operator
      );

      this.addStateToHistory(clonedGameParameters);

      if (result === Number.MIN_VALUE) {
        this.onInvalidOperationExecuted.emit(result);
      } else {
        let gameOperand = new Array<number>(
          this.selectedOperandA.value,
          this.selectedOperandB.value
        );
        let gameOperation = new GameOperation(
          gameOperand,
          selectedOperator.operator,
          result
        );
        this.addGameOperationToOperationHistory(gameOperation);

        if (this.isTheExpectedResultReached(result)) {
          this.onExpectedResultReached.emit(this.operationHistory);
        }

        operand.value = result;
        let operandToDisable = this.gameParameters.operands.find(
          (o) => o.id == this.selectedOperandA!.id
        );
        operandToDisable!.disabled = true;
        this.clearSelectionOfOperators();
        this.clearSelectionOfOperands();
        this.selectedOperandA = null;
        this.selectedOperandB = null;
        this.buttonMoveDirection = "buttonFromA";
      }
    }

    console.log(`Value ${operand.value} Selected ${operand.selected}`);
  }

  onOperatorButtonClick(operator: IGameOperator) {
    if (!this.selectedOperandA && operator.operator !== DigitsConstants.OPERATOR_REV) {
      operator.selected = false;
      return;
    }
    operator.selected = !operator.selected;
    if (operator.operator === DigitsConstants.OPERATOR_REV) {
      this.revertLastOperation();
      let clonedGameParameters = EvaluateArythmeticOperation.cloneGameParameters(this.gameParameters);
      let operands = new Array<number>();
      clonedGameParameters.operands.forEach((op) =>{
        operands.push(op.value);
      });
      let gameOperation = new GameOperation(
        operands,
        operator.operator,
        this.gameParameters.result
      );
      this.addGameOperationToOperationHistory(gameOperation);      
    }

    console.log(`Caption ${operator.caption} Selected ${operator.selected}`);
  }

  ngOnDestroy(): void {
    this.history!.clear();
    this.history = undefined;
    this.operationHistory!.clear();
    this.operationHistory = undefined;
  }
}
