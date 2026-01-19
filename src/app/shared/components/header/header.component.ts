import { Component, effect, OnDestroy, OnInit } from '@angular/core';
import * as angular from '@angular/forms';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { MatTooltip } from '@angular/material/tooltip';
import { DatePipe } from '@angular/common';
import { ErrorEntry } from '../../models/error-entry.interface';
import { Subscription } from 'rxjs/internal/Subscription';
import { ErrorNotificationService } from '../../services/error-handler/error-notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [MatToolbar, RouterLink, MatTooltip, DatePipe]
})
export class HeaderComponent implements OnInit, OnDestroy {
  lastUpdateDate = new Date('01/19/2026 11:16 PM');
  lastUpdateTooltip = 'Update CV.';
  angularVersion!: string;
  showExclamationMark = false;
  errorEntries: ErrorEntry[] = [];
  private errorSubscription!: Subscription;

  constructor(private errorNotification: ErrorNotificationService) {
    effect(() => {
      const errors = this.errorNotification.currentErrorEntries();
      this.errorEntries = errors;
      this.showExclamationMark = errors.length > 0;
    });
  }

  ngOnInit(): void {
    this.angularVersion = angular.VERSION.full;
    console.log(`Angular ${this.angularVersion}.`);
  }

  ngOnDestroy(): void {
    if (this.errorSubscription) {
      this.errorSubscription.unsubscribe();
    }
  }
}
