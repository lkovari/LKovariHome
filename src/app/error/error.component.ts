import { Component, computed, ChangeDetectionStrategy, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorNotificationService } from '../shared/services/error-handler/error-notification.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-error',
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './error.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './error.component.scss'
})
export class ErrorComponent {
  private errorNotification = inject(ErrorNotificationService);

  errorEntries = computed(() => this.errorNotification.currentErrorEntries());

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}
}
