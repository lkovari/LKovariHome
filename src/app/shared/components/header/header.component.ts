import { Component, OnInit } from '@angular/core';
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
export class HeaderComponent implements OnInit {
  lastUpdateDate = new Date('12/23/2024 10:47 PM');
  lastUpdateTooltip = 'Global error handling';
  angularVersion!: string;

  constructor(public globalErrorHandlerService: GlobalErrorHandlerService) { }

  ngOnInit(): void {
    this.angularVersion = angular.VERSION.full;
    console.log(`Angular ${this.angularVersion}.`);
  }
}
