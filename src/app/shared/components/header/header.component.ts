import { Component, OnInit } from '@angular/core';
import * as angular from '@angular/forms';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: false
})
export class HeaderComponent implements OnInit {
  lastUpdateDate = new Date('11/26/2024 10:21 PM');
  lastUpdateTooltip = 'Upgrade to Angular v19.0.1';
  angularVersion!: string;

  constructor() { }

  ngOnInit(): void {
    this.angularVersion = angular.VERSION.full;
    console.log(`Angular ${this.angularVersion}.`);
  }
}
