import type { LearningDomain, PreparedQuestion, Seniority } from './learning-check.types';
import { buildShuffledOptions } from './question-hash';

const LEVEL_RE = /^## (Junior|Medior|Senior|Staff)\s*$/;
const QUESTION_RE = /^### Kérdés (\d+):\s*(.+)$/;
const ANSWER_RE = /^\*\*Válasz:\*\*\s*$/;
const DOC_RE = /^\*\*Dokumentáció:\*\*\s*(.+)$/;
const FAKE_RE = /^\*\*Hamis válasz (\d+):\*\*\s*$/;

export interface ParsedRealQuestion {
  level: Seniority;
  num: number;
  title: string;
  answer: string;
  documentation: string;
}

export interface ParsedFakeQuestion {
  level: Seniority;
  num: number;
  title: string;
  fakes: string[];
}

type BodyMode = 'none' | 'answer' | 'fake' | 'skip';

function isSeniority(value: string): value is Seniority {
  return value === 'Junior' || value === 'Medior' || value === 'Senior' || value === 'Staff';
}

function flushBody(lines: string[]): string {
  return lines.join('\n').trim();
}

function readCapture(match: RegExpExecArray, index: number): string {
  const value = match[index];
  if (value === undefined) {
    return '';
  }
  return value;
}

export function parseRealQuestions(markdown: string): ParsedRealQuestion[] {
  const lines = markdown.split(/\r?\n/);
  const results: ParsedRealQuestion[] = [];
  let currentLevel: Seniority | null = null;
  let current: ParsedRealQuestion | null = null;
  let mode: BodyMode = 'none';
  let bodyLines: string[] = [];

  const closeCurrent = () => {
    if (!current) {
      return;
    }
    if (mode === 'answer') {
      current.answer = flushBody(bodyLines);
    }
    results.push(current);
    current = null;
    mode = 'none';
    bodyLines = [];
  };

  for (const line of lines) {
    const levelMatch = LEVEL_RE.exec(line);
    if (levelMatch) {
      const levelName = readCapture(levelMatch, 1);
      if (isSeniority(levelName)) {
        closeCurrent();
        currentLevel = levelName;
        continue;
      }
    }

    const questionMatch = QUESTION_RE.exec(line);
    if (questionMatch && currentLevel) {
      closeCurrent();
      current = {
        level: currentLevel,
        num: Number(readCapture(questionMatch, 1)),
        title: readCapture(questionMatch, 2).trim(),
        answer: '',
        documentation: '',
      };
      mode = 'none';
      bodyLines = [];
      continue;
    }

    if (!current) {
      continue;
    }

    if (ANSWER_RE.test(line)) {
      mode = 'answer';
      bodyLines = [];
      continue;
    }

    const docMatch = DOC_RE.exec(line);
    if (docMatch) {
      if (mode === 'answer') {
        current.answer = flushBody(bodyLines);
      }
      current.documentation = readCapture(docMatch, 1).trim();
      mode = 'skip';
      bodyLines = [];
      continue;
    }

    if (mode === 'answer') {
      bodyLines.push(line);
    }
  }

  closeCurrent();
  return results;
}

export function parseFakeQuestions(markdown: string): ParsedFakeQuestion[] {
  const lines = markdown.split(/\r?\n/);
  const results: ParsedFakeQuestion[] = [];
  let currentLevel: Seniority | null = null;
  let current: ParsedFakeQuestion | null = null;
  let mode: BodyMode = 'none';
  let bodyLines: string[] = [];

  const closeFakeBody = () => {
    if (!current || mode !== 'fake') {
      return;
    }
    const text = flushBody(bodyLines);
    if (text.length > 0) {
      current.fakes.push(text);
    }
    bodyLines = [];
  };

  const closeCurrent = () => {
    closeFakeBody();
    if (current) {
      results.push(current);
    }
    current = null;
    mode = 'none';
    bodyLines = [];
  };

  for (const line of lines) {
    const levelMatch = LEVEL_RE.exec(line);
    if (levelMatch) {
      const levelName = readCapture(levelMatch, 1);
      if (isSeniority(levelName)) {
        closeCurrent();
        currentLevel = levelName;
        continue;
      }
    }

    const questionMatch = QUESTION_RE.exec(line);
    if (questionMatch && currentLevel) {
      closeCurrent();
      current = {
        level: currentLevel,
        num: Number(readCapture(questionMatch, 1)),
        title: readCapture(questionMatch, 2).trim(),
        fakes: [],
      };
      mode = 'none';
      bodyLines = [];
      continue;
    }

    if (!current) {
      continue;
    }

    if (FAKE_RE.test(line)) {
      closeFakeBody();
      mode = 'fake';
      bodyLines = [];
      continue;
    }

    if (mode === 'fake') {
      bodyLines.push(line);
    }
  }

  closeCurrent();
  return results;
}

export function mergePreparedQuestions(
  domain: LearningDomain,
  level: Seniority,
  realMarkdown: string,
  fakeMarkdown: string
): PreparedQuestion[] {
  const reals = parseRealQuestions(realMarkdown).filter(q => q.level === level);
  const fakes = parseFakeQuestions(fakeMarkdown).filter(q => q.level === level);
  const fakeByNum = new Map(fakes.map(f => [f.num, f]));
  const prepared: PreparedQuestion[] = [];

  for (const real of reals) {
    const fake = fakeByNum.get(real.num);
    if (!fake || fake.fakes.length < 3 || real.answer.length === 0) {
      continue;
    }
    if (fake.title !== real.title) {
      continue;
    }
    const built = buildShuffledOptions(
      real.answer,
      fake.fakes.slice(0, 3),
      domain,
      level,
      real.num
    );
    prepared.push({
      level: real.level,
      num: real.num,
      question: real.title,
      options: built.options,
      correctIndex: built.correctIndex,
      documentation: real.documentation,
    });
  }

  return prepared;
}
