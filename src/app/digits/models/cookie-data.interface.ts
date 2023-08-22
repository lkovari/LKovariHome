import { IGameParameters } from "./game-parameters.interface";
import { IStageLevel } from "./stage-level.interface";

export interface ICookieData {
    storeDate: Date;
    stageIndex: number;
    stageLevels: IStageLevel[];
    gameParameters: IGameParameters[];
}