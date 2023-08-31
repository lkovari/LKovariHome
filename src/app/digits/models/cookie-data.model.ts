import { ICookieData } from "./cookie-data.interface";
import { IGameParameters } from "./game-parameters.interface";
import { IStageLevel } from "./stage-level.interface";

export class CookieData implements ICookieData {
    storeDate: Date;
    stageIndex: number;
    stageLevels: IStageLevel[];
    completed: boolean;
    gameParameters: IGameParameters[];


    public cookieData2Text(): string {
        return JSON.stringify(this);
    }

    public text2CookieData(v: string): CookieData {
        return JSON.parse(v);
    }
}