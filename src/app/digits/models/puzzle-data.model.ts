import { IPuzzleDataStage } from "./puzzle-data-stage.interface";
import { IPuzzleData } from "./puzzle-data.interface";

export class PuzzleData implements IPuzzleData {
    day: Date;
    location: string;
    stages: IPuzzleDataStage[] = [];
}