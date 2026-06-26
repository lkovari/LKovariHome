import { Component, computed, ChangeDetectionStrategy } from '@angular/core';
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
  errorEntries = computed(() => this.errorNotification.currentErrorEntries());

  constructor(private errorNotification: ErrorNotificationService) {}
}
