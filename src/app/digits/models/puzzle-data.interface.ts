import { IPuzzleDataStage } from "./puzzle-data-stage.interface";

export interface IPuzzleData {
    day: Date;
    location: string;
    stages: IPuzzleDataStage[];
}