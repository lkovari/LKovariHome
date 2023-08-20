import { IPuzzleDataStage } from "./puzzle-data-stage.interface";

export class PuzzleDataStage implements IPuzzleDataStage {
    stageIndex: number;
    expectedValue: number;
    operands: number[] = [];
}