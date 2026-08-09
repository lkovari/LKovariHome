import { describe, expect, it } from 'vitest';
import { mergePreparedQuestions, parseFakeQuestions, parseRealQuestions } from './question-md.parser';

const REAL_FIXTURE = `## Tartalomjegyzék

ignore me

## Junior

### Kérdés 1: Sample junior question?

**Válasz:**  
This is the real junior answer.

**Dokumentáció:** https://example.com/junior-1

### Kérdés 2: Second junior?

**Válasz:**

Second real answer body.

**Dokumentáció:** https://example.com/junior-2

## Medior

### Kérdés 1: Medior only?

**Válasz:**  
Medior answer.

**Dokumentáció:** https://example.com/medior-1
`;

const FAKE_FIXTURE = `## Junior

### Kérdés 1: Sample junior question?

**Hamis válasz 1:**  
Fake one for junior 1.

**Hamis válasz 2:**  
Fake two for junior 1.

**Hamis válasz 3:**  
Fake three for junior 1.

### Kérdés 2: Second junior?

**Hamis válasz 1:**  
Fake A.

**Hamis válasz 2:**  
Fake B.

**Hamis válasz 3:**  
Fake C.

## Medior

### Kérdés 1: Medior only?

**Hamis válasz 1:**  
Medior fake 1.

**Hamis válasz 2:**  
Medior fake 2.

**Hamis válasz 3:**  
Medior fake 3.
`;

describe('question-md.parser', () => {
  it('parses real questions by seniority and ignores non-level headings', () => {
    const parsed = parseRealQuestions(REAL_FIXTURE);
    expect(parsed.length).toBe(3);
    const first = parsed[0];
    const second = parsed[1];
    const third = parsed[2];
    expect(first).toEqual({
      level: 'Junior',
      num: 1,
      title: 'Sample junior question?',
      answer: 'This is the real junior answer.',
      documentation: 'https://example.com/junior-1',
    });
    expect(second?.answer).toBe('Second real answer body.');
    expect(third?.level).toBe('Medior');
  });

  it('parses exactly three fake answers per question', () => {
    const parsed = parseFakeQuestions(FAKE_FIXTURE);
    expect(parsed.length).toBe(3);
    expect(parsed[0]?.fakes).toEqual([
      'Fake one for junior 1.',
      'Fake two for junior 1.',
      'Fake three for junior 1.',
    ]);
  });

  it('merges real and fake questions for a selected level', () => {
    const prepared = mergePreparedQuestions('angular', 'Junior', REAL_FIXTURE, FAKE_FIXTURE);
    expect(prepared.length).toBe(2);
    const first = prepared[0];
    expect(first?.question).toBe('Sample junior question?');
    expect(first?.options.length).toBe(4);
    if (first) {
      expect(first.options[first.correctIndex]).toBe('This is the real junior answer.');
    }
    expect(first?.documentation).toBe('https://example.com/junior-1');
  });

  it('skips questions when titles do not match', () => {
    const mismatchedFake = FAKE_FIXTURE.replace(
      'Sample junior question?',
      'Different title?'
    );
    const prepared = mergePreparedQuestions('dotnet', 'Junior', REAL_FIXTURE, mismatchedFake);
    expect(prepared.length).toBe(1);
    expect(prepared[0]?.num).toBe(2);
  });
});
