import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { MatTooltip } from '@angular/material/tooltip';
import { MatIcon } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { ErrorNotificationService } from '../../services/error-handler/error-notification.service';
import { AngularVersionComponent } from '../angular-version/angular-version.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [MatToolbar, RouterLink, MatTooltip, DatePipe, MatIcon, AngularVersionComponent]
})
export class HeaderComponent {
  protected readonly errorNotification = inject(ErrorNotificationService);
  lastUpdateDate = new Date('08/18/2026 11:15 PM');
  lastUpdateTooltip = 'Angular 22: standalone, Vitest, FormValueControl/FormCheckboxControl custom widgets, Add Labyrinth, Add Mersenne, Improve Mersenne, Update CV. Add knowledge base, Learning check, fix fake question length, md instead of pdf of knowledge base, md to firestore, check via MX rec, readers count';
}
