import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';
import type { LearningDomain, PreparedQuestion, Seniority } from './learning-check.types';
import { mergePreparedQuestions } from './question-md.parser';

const ASSET_PATHS: Record<
  LearningDomain,
  { real: string; fake: string }
> = {
  angular: {
    real: 'assets/bigfiles/frontend-interview-questions-w-answers.md',
    fake: 'assets/bigfiles/frontend-fake.md',
  },
  dotnet: {
    real: 'assets/bigfiles/backend-interview-questions-w-answers.md',
    fake: 'assets/bigfiles/backend-fake.md',
  },
};

@Injectable({ providedIn: 'root' })
export class LearningCheckQuestionsService {
  private readonly http = inject(HttpClient);

  prepareQuestions(
    domain: LearningDomain,
    level: Seniority
  ): Observable<PreparedQuestion[]> {
    const paths = ASSET_PATHS[domain];
    return forkJoin({
      real: this.http.get(paths.real, { responseType: 'text' }),
      fake: this.http.get(paths.fake, { responseType: 'text' }),
    }).pipe(
      map(({ real, fake }) => mergePreparedQuestions(domain, level, real, fake))
    );
  }
}
