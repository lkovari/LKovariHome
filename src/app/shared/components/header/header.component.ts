import { Component, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as angular from '@angular/forms';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { MatTooltip } from '@angular/material/tooltip';
import { MatIcon } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { ErrorNotificationService } from '../../services/error-handler/error-notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [MatToolbar, RouterLink, MatTooltip, DatePipe, MatIcon]
})
export class HeaderComponent implements OnInit {
  protected readonly errorNotification = inject(ErrorNotificationService);
  lastUpdateDate = new Date('06/27/2026 0:25 AM');
  lastUpdateTooltip = 'Upgrade Angular to v22, migrate to standalone, signal input and queries, use inject(), ngClass and ngStyle';
  angularVersion!: string;

  ngOnInit(): void {
    this.angularVersion = angular.VERSION.full;
    console.log(`Angular ${this.angularVersion}.`);
  }
}
