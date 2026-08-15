import { Injectable } from '@angular/core';
import { getApps, initializeApp } from 'firebase/app';
import {
  doc,
  getDoc,
  getFirestore,
  increment,
  serverTimestamp,
  setDoc,
  writeBatch,
} from 'firebase/firestore';
import { environment } from '../../../environments/environment';
import { accessLogDocumentId, visitorDocumentId } from './access-log-ids';

const APP_NAME = 'knowledgebase';

export interface KnowledgeBaseDocument {
  markdown: string;
  locale: string;
}

export interface KnowledgeBaseVisitorCounts {
  angular: number;
  dotnet: number;
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

  async getUniqueVisitorCounts(): Promise<KnowledgeBaseVisitorCounts> {
    const [angularSnap, dotnetSnap] = await Promise.all([
      getDoc(doc(this.firestore, 'kbStats', 'angular')),
      getDoc(doc(this.firestore, 'kbStats', 'dotnet')),
    ]);

    return {
      angular: readUniqueVisitorCount(angularSnap.data()),
      dotnet: readUniqueVisitorCount(dotnetSnap.data()),
    };
  }

  async logAccess(params: {
    email: string;
    locale: string;
    knowledgeBaseId: string;
  }): Promise<void> {
    const email = params.email.trim().toLowerCase();
    const logId = await accessLogDocumentId(
      email,
      params.locale,
      params.knowledgeBaseId,
    );
    const visitorId = await visitorDocumentId(email, params.knowledgeBaseId);
    const logRef = doc(this.firestore, 'accessLogs', logId);
    const visitorRef = doc(
      this.firestore,
      'kbStats',
      params.knowledgeBaseId,
      'visitors',
      visitorId,
    );
    const statRef = doc(this.firestore, 'kbStats', params.knowledgeBaseId);

    await setDoc(
      logRef,
      {
        email,
        locale: params.locale,
        knowledgeBaseId: params.knowledgeBaseId,
        viewedAt: serverTimestamp(),
      },
      { merge: true },
    );

    const batch = writeBatch(this.firestore);
    batch.set(visitorRef, { seen: true });
    batch.set(statRef, { uniqueVisitorCount: increment(1) }, { merge: true });
    try {
      await batch.commit();
    } catch {
      return;
    }
  }

  private createApp() {
    const existing = getApps().find(app => app.name === APP_NAME);
    if (existing) {
      return existing;
    }

    return initializeApp(environment.firebaseKnowledgeBase, APP_NAME);
  }
}

function readUniqueVisitorCount(data: object | undefined): number {
  if (!data) {
    return 0;
  }
  const value = Reflect.get(data, 'uniqueVisitorCount');
  if (typeof value === 'number' && Number.isInteger(value) && value >= 0) {
    return value;
  }
  return 0;
}
