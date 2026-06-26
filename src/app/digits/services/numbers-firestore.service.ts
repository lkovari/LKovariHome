import { Injectable, inject } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { FirestorePuzzleData } from '../models/firestore-puzzle-data.model';

@Injectable({
  providedIn: 'root'
})
export class NumbersFirestoreService {
  private db = inject(AngularFirestore);

  private dbPath = '/puzzledata';
  puzzleDataRef: AngularFirestoreCollection<FirestorePuzzleData>;

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);
  
  constructor() {
    this.puzzleDataRef = this.db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<FirestorePuzzleData> {
    return this.puzzleDataRef;
  }

  create(puzzleData: FirestorePuzzleData): any {
    return this.puzzleDataRef.add({ ...puzzleData });
  }

  update(id: string, data: any): Promise<void> {
    return this.puzzleDataRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.puzzleDataRef.doc(id).delete();
  }

}
