import { Component, inject, OnInit } from '@angular/core';
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
  imports: [MatToolbar, RouterLink, MatTooltip, DatePipe, MatIcon]
})
export class HeaderComponent implements OnInit {
  protected readonly errorNotification = inject(ErrorNotificationService);
  lastUpdateDate = new Date('06/26/2026 09:40 PM');
  lastUpdateTooltip = 'Upgrade Angular to v20';
  angularVersion!: string;

  ngOnInit(): void {
    this.angularVersion = angular.VERSION.full;
    console.log(`Angular ${this.angularVersion}.`);
  }
}
