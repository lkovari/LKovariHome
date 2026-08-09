import type { LearningDomain, Seniority } from './learning-check.types';

export function hashString(input: string): number {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

export function correctIndexForQuestion(
  domain: LearningDomain,
  level: Seniority,
  num: number,
  optionCount: number
): number {
  if (optionCount <= 0) {
    return 0;
  }
  const key = `${domain}|${level}|${num}`;
  return hashString(key) % optionCount;
}

export function buildShuffledOptions(
  correctAnswer: string,
  fakeAnswers: string[],
  domain: LearningDomain,
  level: Seniority,
  num: number
): { options: string[]; correctIndex: number } {
  const optionCount = fakeAnswers.length + 1;
  const correctIndex = correctIndexForQuestion(domain, level, num, optionCount);
  const options: string[] = [];
  const orderedFakes = fakeAnswers.slice();
  let seed = hashString(`${domain}|${level}|${num}|fakes`);
  for (let i = orderedFakes.length - 1; i > 0; i--) {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    const j = seed % (i + 1);
    const left = orderedFakes[i];
    const right = orderedFakes[j];
    if (left === undefined || right === undefined) {
      continue;
    }
    orderedFakes[i] = right;
    orderedFakes[j] = left;
  }
  let fakeCursor = 0;
  for (let i = 0; i < optionCount; i++) {
    if (i === correctIndex) {
      options.push(correctAnswer);
    } else {
      const fake = orderedFakes[fakeCursor];
      if (fake === undefined) {
        options.push('');
      } else {
        options.push(fake);
      }
      fakeCursor += 1;
    }
  }
  return { options, correctIndex };
}
