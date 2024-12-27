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
  lastUpdateDate = new Date('12/27/2024 10:43 AM');
  lastUpdateTooltip = 'Global error handling effect does not works';
  angularVersion!: string;
  showExclamationMark = false;
  private _effectRef;

  constructor(private globalErrorHandlerService: GlobalErrorHandlerService) {
    this._effectRef = effect(() => {
      this.showExclamationMark = this.globalErrorHandlerService.hasErrorOccurred();
      this.globalErrorHandlerService.hasErrorOccurred.set(false);
      console.log(`Header Error signal: ${this.showExclamationMark}`);
    });
  }

  ngOnInit(): void {
    this.angularVersion = angular.VERSION.full;
    console.log(`Angular ${this.angularVersion}.`);
  }

  ngOnDestroy(): void {
    if (this._effectRef) {
      this._effectRef.destroy();
    }
  }
}
