import { IPuzzleDataStage } from "./puzzle-data-stage.interface";
import { IPuzzleData } from "./puzzle-data.interface";

export class PuzzleData implements IPuzzleData {
    id?: string;
    day: Date;
    locale: string;
    stages: IPuzzleDataStage[] = [];
}