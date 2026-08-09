import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { catchError, of, pipe, switchMap, tap } from 'rxjs';
import { LearningCheckQuestionsService } from './learning-check-questions.service';
import type {
  LearningCheckPhase,
  LearningDomain,
  PreparedQuestion,
  PrepareStatus,
  Seniority,
  WrongAnswerReview,
} from './learning-check.types';
import { MIN_QUESTION_COUNT } from './learning-check.types';

interface LearningCheckState {
  phase: LearningCheckPhase;
  domain: LearningDomain | null;
  seniority: Seniority | null;
  questionCount: number;
  preparedQuestions: PreparedQuestion[];
  sessionQuestions: PreparedQuestion[];
  currentIndex: number;
  selectedOptionIndexes: Array<number | null>;
  prepareStatus: PrepareStatus;
  errorMessage: string;
}

const initialState: LearningCheckState = {
  phase: 'setup',
  domain: null,
  seniority: null,
  questionCount: MIN_QUESTION_COUNT,
  preparedQuestions: [],
  sessionQuestions: [],
  currentIndex: 0,
  selectedOptionIndexes: [],
  prepareStatus: 'idle',
  errorMessage: '',
};

function shuffleCopy<T>(items: T[]): T[] {
  const copy = items.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const left = copy[i];
    const right = copy[j];
    if (left === undefined || right === undefined) {
      continue;
    }
    copy[i] = right;
    copy[j] = left;
  }
  return copy;
}

export const LearningCheckStore = signalStore(
  withState(initialState),
  withComputed(store => ({
    poolSize: computed(() => store.preparedQuestions().length),
    canStart: computed(() => {
      const pool = store.preparedQuestions().length;
      const count = store.questionCount();
      return (
        store.domain() !== null &&
        store.seniority() !== null &&
        store.prepareStatus() === 'ready' &&
        pool >= MIN_QUESTION_COUNT &&
        count >= MIN_QUESTION_COUNT &&
        count <= pool
      );
    }),
    currentQuestion: computed(() => {
      const session = store.sessionQuestions();
      const index = store.currentIndex();
      if (index < 0 || index >= session.length) {
        return null;
      }
      return session[index];
    }),
    progressLabel: computed(() => {
      const total = store.sessionQuestions().length;
      if (total === 0) {
        return '';
      }
      return `${store.currentIndex() + 1} / ${total}`;
    }),
    currentSelection: computed(() => {
      const selections = store.selectedOptionIndexes();
      const index = store.currentIndex();
      if (index < 0 || index >= selections.length) {
        return null;
      }
      return selections[index];
    }),
    scorePercent: computed(() => {
      const session = store.sessionQuestions();
      const selections = store.selectedOptionIndexes();
      if (session.length === 0) {
        return 0;
      }
      let correct = 0;
      for (let i = 0; i < session.length; i++) {
        const question = session[i];
        if (!question) {
          continue;
        }
        if (selections[i] === question.correctIndex) {
          correct += 1;
        }
      }
      return Math.round((correct / session.length) * 100);
    }),
    wrongAnswers: computed((): WrongAnswerReview[] => {
      const session = store.sessionQuestions();
      const selections = store.selectedOptionIndexes();
      const wrong: WrongAnswerReview[] = [];
      for (let i = 0; i < session.length; i++) {
        const selected = selections[i];
        const question = session[i];
        if (selected === null || selected === undefined || !question) {
          continue;
        }
        if (selected === question.correctIndex) {
          continue;
        }
        const selectedAnswer = question.options[selected];
        const correctAnswer = question.options[question.correctIndex];
        if (selectedAnswer === undefined || correctAnswer === undefined) {
          continue;
        }
        wrong.push({
          question: question.question,
          selectedAnswer,
          correctAnswer,
          documentation: question.documentation,
          num: question.num,
          level: question.level,
        });
      }
      return wrong;
    }),
    isLastQuestion: computed(() => {
      const total = store.sessionQuestions().length;
      return total > 0 && store.currentIndex() >= total - 1;
    }),
  })),
  withMethods((store, questionsService = inject(LearningCheckQuestionsService)) => {
    const prepareForSelection = rxMethod<{
      domain: LearningDomain;
      seniority: Seniority;
    }>(
      pipe(
        tap(() =>
          patchState(store, {
            prepareStatus: 'loading',
            errorMessage: '',
            preparedQuestions: [],
          })
        ),
        switchMap(({ domain, seniority }) =>
          questionsService.prepareQuestions(domain, seniority).pipe(
            tap({
              next: prepared => {
                const maxCount = prepared.length;
                const nextCount =
                  maxCount < MIN_QUESTION_COUNT
                    ? MIN_QUESTION_COUNT
                    : Math.min(Math.max(store.questionCount(), MIN_QUESTION_COUNT), maxCount);
                patchState(store, {
                  preparedQuestions: prepared,
                  prepareStatus: prepared.length >= MIN_QUESTION_COUNT ? 'ready' : 'error',
                  questionCount: nextCount,
                  errorMessage:
                    prepared.length >= MIN_QUESTION_COUNT
                      ? ''
                      : 'Not enough questions for the selected level.',
                });
              },
            }),
            catchError(() => {
              patchState(store, {
                prepareStatus: 'error',
                preparedQuestions: [],
                errorMessage: 'Failed to load questions. Please retry.',
              });
              return of([]);
            })
          )
        )
      )
    );

    return {
      selectDomain(domain: LearningDomain): void {
        patchState(store, {
          domain,
          seniority: null,
          preparedQuestions: [],
          prepareStatus: 'idle',
          errorMessage: '',
          phase: 'setup',
          sessionQuestions: [],
          selectedOptionIndexes: [],
          currentIndex: 0,
        });
      },

      selectSeniority(seniority: Seniority): void {
        const domain = store.domain();
        if (!domain) {
          return;
        }
        patchState(store, { seniority });
        prepareForSelection({ domain, seniority });
      },

      retryPrepare(): void {
        const domain = store.domain();
        const seniority = store.seniority();
        if (!domain || !seniority) {
          return;
        }
        prepareForSelection({ domain, seniority });
      },

      setQuestionCount(count: number): void {
        const max = store.preparedQuestions().length;
        if (max < MIN_QUESTION_COUNT) {
          return;
        }
        const clamped = Math.min(Math.max(count, MIN_QUESTION_COUNT), max);
        patchState(store, { questionCount: clamped });
      },

      start(): void {
        if (!store.canStart()) {
          return;
        }
        const count = store.questionCount();
        const session = shuffleCopy(store.preparedQuestions()).slice(0, count);
        patchState(store, {
          phase: 'quiz',
          sessionQuestions: session,
          currentIndex: 0,
          selectedOptionIndexes: session.map(() => null),
        });
      },

      selectOption(optionIndex: number): void {
        if (store.phase() !== 'quiz') {
          return;
        }
        const current = store.currentQuestion();
        if (!current) {
          return;
        }
        if (optionIndex < 0 || optionIndex >= current.options.length) {
          return;
        }
        const selections = [...store.selectedOptionIndexes()];
        selections[store.currentIndex()] = optionIndex;
        patchState(store, { selectedOptionIndexes: selections });
      },

      goNextOrFinish(): void {
        if (store.phase() !== 'quiz') {
          return;
        }
        if (store.currentSelection() === null) {
          return;
        }
        if (store.isLastQuestion()) {
          patchState(store, { phase: 'results' });
          return;
        }
        patchState(store, { currentIndex: store.currentIndex() + 1 });
      },

      resetToSetup(): void {
        patchState(store, {
          ...initialState,
        });
      },
    };
  })
);
