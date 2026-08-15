import { describe, expect, it } from 'vitest';
import {
  accessLogDocumentId,
  nextUniqueVisitorCount,
  visitorDocumentId,
} from './access-log-ids';

describe('accessLogDocumentId', () => {
  it('returns a stable 64-character hex id for the same triple', async () => {
    const first = await accessLogDocumentId('a@b.com', 'en-US', 'angular');
    const second = await accessLogDocumentId('a@b.com', 'en-US', 'angular');
    expect(first).toBe(second);
    expect(first).toMatch(/^[a-f0-9]{64}$/);
  });

  it('changes when locale or knowledgeBaseId changes', async () => {
    const base = await accessLogDocumentId('a@b.com', 'en-US', 'angular');
    const otherLocale = await accessLogDocumentId('a@b.com', 'hu', 'angular');
    const otherKb = await accessLogDocumentId('a@b.com', 'en-US', 'dotnet');
    expect(otherLocale).not.toBe(base);
    expect(otherKb).not.toBe(base);
  });
});

describe('visitorDocumentId', () => {
  it('is the same for one email and knowledge base regardless of locale', async () => {
    const fromEn = await visitorDocumentId('a@b.com', 'angular');
    const fromHu = await visitorDocumentId('a@b.com', 'angular');
    expect(fromEn).toBe(fromHu);
    expect(fromEn).toMatch(/^[a-f0-9]{64}$/);
  });

  it('differs from the access-log id so locale rows stay separate', async () => {
    const visitorId = await visitorDocumentId('a@b.com', 'angular');
    const logId = await accessLogDocumentId('a@b.com', 'en-US', 'angular');
    expect(visitorId).not.toBe(logId);
  });
});

describe('nextUniqueVisitorCount', () => {
  it('increments when the visitor has not been seen', () => {
    expect(nextUniqueVisitorCount(0, false)).toBe(1);
    expect(nextUniqueVisitorCount(12, false)).toBe(13);
  });

  it('keeps the current count when the visitor was already seen', () => {
    expect(nextUniqueVisitorCount(12, true)).toBe(12);
  });

  it('treats a missing count as zero', () => {
    expect(nextUniqueVisitorCount(undefined, false)).toBe(1);
    expect(nextUniqueVisitorCount(undefined, true)).toBe(0);
  });
});
