import { Injectable } from '@angular/core';
import { IStageLevel } from '../models/stage-level.interface';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StageCommunicationService {
  private subjectItemUpdate = new Subject<IStageLevel>();

  constructor() { }

  updatePerformedItem(value: IStageLevel) {
    this.subjectItemUpdate.next(value);
  }

  getUpdatedStageLevel(): Observable<IStageLevel> {
    return this.subjectItemUpdate.asObservable();
  }
}
