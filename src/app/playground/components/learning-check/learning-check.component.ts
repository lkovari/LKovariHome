import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { LearningCheckStore } from './learning-check.store';
import {
  MIN_QUESTION_COUNT,
  SENIORITY_LEVELS,
  type LearningDomain,
  type Seniority,
} from './learning-check.types';

@Component({
  selector: 'app-learning-check',
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormField,
    MatLabel,
    MatInput,
    RouterLink,
  ],
  providers: [LearningCheckStore],
  templateUrl: './learning-check.component.html',
  styleUrl: './learning-check.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LearningCheckComponent {
  readonly store = inject(LearningCheckStore);
  readonly seniorityLevels = SENIORITY_LEVELS;
  readonly minQuestionCount = MIN_QUESTION_COUNT;

  selectDomain(domain: LearningDomain): void {
    this.store.selectDomain(domain);
  }

  selectSeniority(level: Seniority): void {
    this.store.selectSeniority(level);
  }

  onQuestionCountChange(raw: number | string): void {
    const value = typeof raw === 'number' ? raw : Number(raw);
    if (Number.isFinite(value)) {
      this.store.setQuestionCount(value);
    }
  }

  domainLabel(domain: LearningDomain | null): string {
    if (domain === 'angular') {
      return 'Angular';
    }
    if (domain === 'dotnet') {
      return '.NET C#';
    }
    return '';
  }
}
