import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { FirestorePuzzleData } from '../models/firestore-puzzle-data.model';

@Injectable({
  providedIn: 'root'
})
export class NumbersFirestoreService {
  private dbPath = '/puzzledata';
  puzzleDataRef: AngularFirestoreCollection<FirestorePuzzleData>;
  
  constructor(private db: AngularFirestore) {
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
