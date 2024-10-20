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
      id: 0,
      selected: false,
      caption: DigitsConstants.OPERATOR_REV,
      operator: DigitsConstants.OPERATOR_REV,
      icon: 'revert',
    },
    {
      id: 1,
      selected: false,
      caption: DigitsConstants.OPERATOR_ADD,
      operator: DigitsConstants.OPERATOR_ADD,
      icon: 'addition',
    },
    {
      id: 2,
      selected: false,
      caption: DigitsConstants.OPERATOR_SUB,
      operator: DigitsConstants.OPERATOR_SUB,
      icon: 'substraction',
    },
    {
      id: 3,
      selected: false,
      caption: DigitsConstants.OPERATOR_MUL,
      operator: DigitsConstants.OPERATOR_MUL,
      icon: 'multiplication',
    },
    {
      id: 4,
      selected: false,
      caption: DigitsConstants.OPERATOR_DIV,
      operator: DigitsConstants.OPERATOR_DIV,
      icon: 'division',
    }
  );

  @Input() gameParameters!: IGameParameters;
  @Output() expectedResultReached = new EventEmitter<IStack<IGameOperation>>();
  @Output() invalidOperationExecuted = new EventEmitter<number>();
  
  private history: IStack<IGameParameters> | undefined;
  private operationHistory: IStack<IGameOperation> | undefined;

  private selectedOperandA!: IGameOperand | null;
  private selectedOperandB!: IGameOperand | null;

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

  onOperandButtonClick(operand: IGameOperand) {
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
    } else {
      if (this.selectedOperandA.id !== operand.id) {
        if (!this.selectedOperandB) {
          this.selectedOperandB = operand;
        }
      }
    }
    var selectedOperator = this.getSelectedOperator();
    if (this.selectedOperandA && this.selectedOperandB && !selectedOperator) {
      this.selectedOperandB.selected = false;
      this.selectedOperandB = null;
    }else if (this.selectedOperandA && this.selectedOperandB && selectedOperator) {
      const clonedGameParameters =
        EvaluateArythmeticOperation.cloneGameParameters(this.gameParameters);

      const result = EvaluateArythmeticOperation.evaluate(
        this.selectedOperandA.value,
        this.selectedOperandB.value,
        selectedOperator.operator
      );

      this.addStateToHistory(clonedGameParameters);

      if (result === Number.MIN_VALUE) {
        this.invalidOperationExecuted.emit(result);
      } else {
        const gameOperand = new Array<number>(
          this.selectedOperandA.value,
          this.selectedOperandB.value
        );
        const gameOperation = new GameOperation(
          gameOperand,
          selectedOperator.operator,
          result
        );
        this.addGameOperationToOperationHistory(gameOperation);

        if (this.isTheExpectedResultReached(result)) {
          this.expectedResultReached.emit(this.operationHistory);
        }

        operand.value = result;
        const operandToDisable = this.gameParameters.operands.find(
          (o) => o.id == this.selectedOperandA!.id
        );
        operandToDisable!.disabled = true;
        this.clearSelectionOfOperators();
        this.clearSelectionOfOperands();
        this.selectedOperandA = null;
        this.selectedOperandB = null;
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
      const clonedGameParameters = EvaluateArythmeticOperation.cloneGameParameters(this.gameParameters);
      const operands = new Array<number>();
      clonedGameParameters.operands.forEach((op) =>{
        operands.push(op.value);
      });
      const gameOperation = new GameOperation(
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
