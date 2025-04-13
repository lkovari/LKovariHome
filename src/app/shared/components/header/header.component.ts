import { Component, OnDestroy, OnInit } from '@angular/core';
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
  lastUpdateDate = new Date('04/13/2025 10:25 AM');
  lastUpdateTooltip = 'About me page UI optimization';
  angularVersion!: string;
  showExclamationMark = false;
  errorEntries: ErrorEntry[] = [];
  private errorSubscription!: Subscription;

  constructor(private errorNotification: ErrorNotificationService) {
    this.errorSubscription = this.errorNotification.currentErrorEntries$.subscribe((errors: ErrorEntry[]) => {
      this.errorEntries = errors;
      this.showExclamationMark = this.errorEntries.length > 0;
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
