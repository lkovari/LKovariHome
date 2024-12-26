import { Component, effect, OnDestroy, OnInit } from '@angular/core';
import * as angular from '@angular/forms';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { MatTooltip } from '@angular/material/tooltip';
import { DatePipe } from '@angular/common';
import { GlobalErrorHandlerService } from '../../services/error-handler/global-error-handler.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [MatToolbar, RouterLink, MatTooltip, DatePipe]
})
export class HeaderComponent implements OnInit, OnDestroy {
  lastUpdateDate = new Date('12/26/2024 01:05 PM');
  lastUpdateTooltip = 'Global error handling effect does not works';
  angularVersion!: string;
  showExclamationMark = false;
  private effectRef;

  constructor(private globalErrorHandlerService: GlobalErrorHandlerService) {
    this.effectRef = effect(() => {
      const errors = this.globalErrorHandlerService.getErrorEntries();
      console.log(`Header Errors: ${errors.length}`);
      this.showExclamationMark = errors.length > 0;
    });
  }

  ngOnInit(): void {
    this.angularVersion = angular.VERSION.full;
    console.log(`Angular ${this.angularVersion}.`);
  }

  ngOnDestroy(): void {
    this.effectRef.destroy();
  }
}
