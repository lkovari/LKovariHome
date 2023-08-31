import { IPuzzleDataStage } from "./puzzle-data-stage.interface";

export interface IPuzzleData {
    id?: string;
    day: Date;
    locale: string;
    stages: IPuzzleDataStage[];
}