import { describe, expect, it } from 'vitest';
import { buildShuffledOptions, correctIndexForQuestion, hashString } from './question-hash';
import type { LearningDomain, Seniority } from './learning-check.types';

describe('hashString', () => {
  it('returns the FNV-1a offset basis for an empty string', () => {
    expect(hashString('')).toBe(2166136261);
  });

  it('returns stable unsigned 32-bit values for known keys', () => {
    expect(hashString('angular|Junior|1')).toBe(2545117321);
    expect(hashString('dotnet|Junior|1')).toBe(2863347959);
    expect(hashString('angular|Medior|1')).toBe(3357844512);
    expect(hashString('angular|Junior|2')).toBe(2494784464);
    expect(hashString('angular|Staff|42')).toBe(2940185459);
  });

  it('stays within the unsigned 32-bit range', () => {
    const samples = [
      '',
      'a',
      'angular|Junior|1',
      'dotnet|Staff|999',
      'x'.repeat(256),
    ];
    for (const sample of samples) {
      const value = hashString(sample);
      expect(Number.isInteger(value)).toBe(true);
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThanOrEqual(0xffffffff);
      expect(value).toBe(value >>> 0);
    }
  });

  it('changes when any part of the input changes', () => {
    const base = hashString('angular|Junior|1');
    expect(hashString('dotnet|Junior|1')).not.toBe(base);
    expect(hashString('angular|Medior|1')).not.toBe(base);
    expect(hashString('angular|Junior|2')).not.toBe(base);
    expect(hashString('angular|Junior|10')).not.toBe(base);
  });
});

describe('correctIndexForQuestion', () => {
  it('matches hash(domain|level|num) % optionCount for pinned cases', () => {
    expect(correctIndexForQuestion('angular', 'Junior', 1, 4)).toBe(2545117321 % 4);
    expect(correctIndexForQuestion('dotnet', 'Junior', 1, 4)).toBe(2863347959 % 4);
    expect(correctIndexForQuestion('angular', 'Medior', 1, 4)).toBe(3357844512 % 4);
    expect(correctIndexForQuestion('angular', 'Junior', 2, 4)).toBe(2494784464 % 4);
    expect(correctIndexForQuestion('angular', 'Staff', 42, 4)).toBe(2940185459 % 4);
  });

  it('equals the explicit hash modulo formula', () => {
    const cases: Array<{
      domain: LearningDomain;
      level: Seniority;
      num: number;
      optionCount: number;
    }> = [
      { domain: 'angular', level: 'Junior', num: 1, optionCount: 4 },
      { domain: 'dotnet', level: 'Senior', num: 17, optionCount: 4 },
      { domain: 'angular', level: 'Staff', num: 3, optionCount: 3 },
      { domain: 'dotnet', level: 'Medior', num: 50, optionCount: 5 },
    ];

    for (const item of cases) {
      const key = `${item.domain}|${item.level}|${item.num}`;
      const expected = hashString(key) % item.optionCount;
      expect(
        correctIndexForQuestion(item.domain, item.level, item.num, item.optionCount)
      ).toBe(expected);
    }
  });

  it('is deterministic for identical inputs', () => {
    const first = correctIndexForQuestion('angular', 'Junior', 1, 4);
    const second = correctIndexForQuestion('angular', 'Junior', 1, 4);
    expect(first).toBe(second);
    expect(first).toBe(1);
  });

  it('always returns an index in [0, optionCount)', () => {
    const domains: LearningDomain[] = ['angular', 'dotnet'];
    const levels: Seniority[] = ['Junior', 'Medior', 'Senior', 'Staff'];
    for (const domain of domains) {
      for (const level of levels) {
        for (let num = 1; num <= 20; num++) {
          for (const optionCount of [2, 3, 4, 5]) {
            const index = correctIndexForQuestion(domain, level, num, optionCount);
            expect(index).toBeGreaterThanOrEqual(0);
            expect(index).toBeLessThan(optionCount);
          }
        }
      }
    }
  });

  it('returns 0 when optionCount is zero or negative', () => {
    expect(correctIndexForQuestion('angular', 'Junior', 1, 0)).toBe(0);
    expect(correctIndexForQuestion('angular', 'Junior', 1, -4)).toBe(0);
  });

  it('uses all four slots across a seniority pool', () => {
    const used = new Set<number>();
    for (let num = 1; num <= 50; num++) {
      used.add(correctIndexForQuestion('angular', 'Junior', num, 4));
    }
    expect(used.has(0)).toBe(true);
    expect(used.has(1)).toBe(true);
    expect(used.has(2)).toBe(true);
    expect(used.has(3)).toBe(true);
    expect(used.size).toBe(4);
  });

  it('changes when domain, level, or question number changes', () => {
    const base = correctIndexForQuestion('angular', 'Junior', 1, 4);
    const byDomain = correctIndexForQuestion('dotnet', 'Junior', 1, 4);
    const byLevel = correctIndexForQuestion('angular', 'Medior', 1, 4);
    const byNum = correctIndexForQuestion('angular', 'Junior', 2, 4);

    expect(byDomain).toBe(3);
    expect(byLevel).toBe(0);
    expect(byNum).toBe(0);
    expect(new Set([base, byDomain, byLevel, byNum]).size).toBeGreaterThan(1);
  });
});

describe('buildShuffledOptions correct-answer placement', () => {
  it('places the correct answer at the hash-derived correctIndex', () => {
    const domain: LearningDomain = 'dotnet';
    const level: Seniority = 'Staff';
    const num = 3;
    const expectedIndex = correctIndexForQuestion(domain, level, num, 4);
    const result = buildShuffledOptions(
      'real-answer',
      ['fake-a', 'fake-b', 'fake-c'],
      domain,
      level,
      num
    );

    expect(result.correctIndex).toBe(expectedIndex);
    expect(result.options[result.correctIndex]).toBe('real-answer');
  });

  it('keeps the same correctIndex across repeated builds', () => {
    const first = buildShuffledOptions(
      'real-answer',
      ['fake-a', 'fake-b', 'fake-c'],
      'angular',
      'Junior',
      1
    );
    const second = buildShuffledOptions(
      'real-answer',
      ['fake-a', 'fake-b', 'fake-c'],
      'angular',
      'Junior',
      1
    );

    expect(first.correctIndex).toBe(1);
    expect(first.correctIndex).toBe(second.correctIndex);
    expect(first.options).toEqual(second.options);
  });

  it('includes every fake exactly once around the correct answer', () => {
    const fakes = ['fake-a', 'fake-b', 'fake-c'];
    const result = buildShuffledOptions('real-answer', fakes, 'angular', 'Senior', 7);
    expect(result.options.length).toBe(4);
    expect(result.options.filter(o => o === 'real-answer').length).toBe(1);
    expect(result.options.includes('fake-a')).toBe(true);
    expect(result.options.includes('fake-b')).toBe(true);
    expect(result.options.includes('fake-c')).toBe(true);
  });
});
