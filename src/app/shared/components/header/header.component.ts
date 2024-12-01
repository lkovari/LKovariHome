import { Component, OnInit } from '@angular/core';
import * as angular from '@angular/forms';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: false
})
export class HeaderComponent implements OnInit {
  lastUpdateDate = new Date('12/01/2024 3:43 PM');
  lastUpdateTooltip = 'Replace LinkedIn profile url';
  angularVersion!: string;

  constructor() { }

  ngOnInit(): void {
    this.angularVersion = angular.VERSION.full;
    console.log(`Angular ${this.angularVersion}.`);
  }
}
