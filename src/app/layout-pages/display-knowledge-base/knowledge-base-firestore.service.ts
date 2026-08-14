import { Injectable } from '@angular/core';
import { getApps, initializeApp } from 'firebase/app';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
  serverTimestamp,
} from 'firebase/firestore';
import { environment } from '../../../environments/environment';

const APP_NAME = 'knowledgebase';

export interface KnowledgeBaseDocument {
  markdown: string;
  locale: string;
}

@Injectable()
export class KnowledgeBaseFirestoreService {
  private readonly firestore = getFirestore(this.createApp());

  async getKnowledgeBase(id: string): Promise<KnowledgeBaseDocument | null> {
    const snapshot = await getDoc(doc(this.firestore, 'knowledgeBases', id));
    if (!snapshot.exists()) {
      return null;
    }

    const data = snapshot.data();
    const markdown = data['markdown'];
    const locale = data['locale'];
    if (typeof markdown !== 'string' || markdown.length === 0) {
      return null;
    }

    return {
      markdown,
      locale: typeof locale === 'string' && locale.length > 0 ? locale : 'en',
    };
  }

  async logAccess(params: {
    email: string;
    locale: string;
    knowledgeBaseId: string;
  }): Promise<void> {
    await addDoc(collection(this.firestore, 'accessLogs'), {
      email: params.email,
      locale: params.locale,
      knowledgeBaseId: params.knowledgeBaseId,
      viewedAt: serverTimestamp(),
    });
  }

  private createApp() {
    const existing = getApps().find(app => app.name === APP_NAME);
    if (existing) {
      return existing;
    }

    return initializeApp(environment.firebaseKnowledgeBase, APP_NAME);
  }
}
