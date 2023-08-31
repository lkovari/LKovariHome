import { IFirestorePuzzleData } from "./firestore-puzzle-data.interface";

export class FirestorePuzzleData implements IFirestorePuzzleData {
    id?: string;
    locale: string;
    data: string;    
}