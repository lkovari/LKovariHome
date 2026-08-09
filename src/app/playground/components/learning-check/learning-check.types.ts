export type LearningDomain = 'angular' | 'dotnet';

export type Seniority = 'Junior' | 'Medior' | 'Senior' | 'Staff';

export type LearningCheckPhase = 'setup' | 'quiz' | 'results';

export type PrepareStatus = 'idle' | 'loading' | 'ready' | 'error';

export interface PreparedQuestion {
  level: Seniority;
  num: number;
  question: string;
  options: string[];
  correctIndex: number;
  documentation: string;
}

export interface WrongAnswerReview {
  question: string;
  selectedAnswer: string;
  correctAnswer: string;
  documentation: string;
  num: number;
  level: Seniority;
}

export const SENIORITY_LEVELS: Seniority[] = ['Junior', 'Medior', 'Senior', 'Staff'];

export const MIN_QUESTION_COUNT = 10;
