import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { LearningCheckQuestionsService } from './learning-check-questions.service';
import { LearningCheckStore } from './learning-check.store';
import type { PreparedQuestion } from './learning-check.types';

function makeQuestion(num: number, correctIndex = 0): PreparedQuestion {
  return {
    level: 'Junior',
    num,
    question: `Question ${num}?`,
    options: ['correct', 'a', 'b', 'c'],
    correctIndex,
    documentation: `https://example.com/${num}`,
  };
}

describe('LearningCheckStore', () => {
  let store: InstanceType<typeof LearningCheckStore>;
  let prepareSpy: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    const pool = Array.from({ length: 12 }, (_, i) => makeQuestion(i + 1));
    prepareSpy = vi.fn().mockReturnValue(of(pool));

    TestBed.configureTestingModule({
      providers: [
        LearningCheckStore,
        {
          provide: LearningCheckQuestionsService,
          useValue: { prepareQuestions: prepareSpy },
        },
      ],
    });

    store = TestBed.inject(LearningCheckStore);
  });

  it('enables canStart after successful prepare with enough questions', () => {
    expect(store.canStart()).toBe(false);
    store.selectDomain('angular');
    store.selectSeniority('Junior');
    expect(prepareSpy).toHaveBeenCalledWith('angular', 'Junior');
    expect(store.prepareStatus()).toBe('ready');
    expect(store.poolSize()).toBe(12);
    expect(store.canStart()).toBe(true);
  });

  it('start creates a session with the selected question count', () => {
    store.selectDomain('dotnet');
    store.selectSeniority('Junior');
    store.setQuestionCount(10);
    store.start();
    expect(store.phase()).toBe('quiz');
    expect(store.sessionQuestions().length).toBe(10);
    expect(store.progressLabel()).toBe('1 / 10');
  });

  it('finish yields expected percent and wrong answers', () => {
    store.selectDomain('angular');
    store.selectSeniority('Junior');
    store.setQuestionCount(10);
    store.start();

    for (let i = 0; i < 10; i++) {
      const question = store.currentQuestion();
      expect(question).not.toBeNull();
      if (!question) {
        return;
      }
      const pick = i < 7 ? question.correctIndex : (question.correctIndex + 1) % 4;
      store.selectOption(pick);
      store.goNextOrFinish();
    }

    expect(store.phase()).toBe('results');
    expect(store.scorePercent()).toBe(70);
    expect(store.wrongAnswers().length).toBe(3);
  });

  it('sets error status when loading fails', () => {
    prepareSpy.mockReturnValue(throwError(() => new Error('network')));
    store.selectDomain('angular');
    store.selectSeniority('Junior');
    expect(store.prepareStatus()).toBe('error');
    expect(store.canStart()).toBe(false);
    expect(store.errorMessage().length).toBeGreaterThan(0);
  });
});
