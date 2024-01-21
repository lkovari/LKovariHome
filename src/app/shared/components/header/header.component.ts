import { Component, OnInit } from '@angular/core';
import * as angular from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  lastUpdateDate = new Date('01/21/2024 06:55 PM');
  lastUpdateTooltip = 'Wizard component with dynamic component creation';
  angularVersion: any;

  constructor() { }

  ngOnInit(): void {
    this.angularVersion = angular.VERSION.full;
    console.log(`Angular ${this.angularVersion}.`);
  }
}
