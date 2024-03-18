import { Component, OnInit } from '@angular/core';
import * as angular from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  lastUpdateDate = new Date('03/18/2024 10:46 PM');
  lastUpdateTooltip = 'lint and reddit search wrap';
  angularVersion: any;

  constructor() { }

  ngOnInit(): void {
    this.angularVersion = angular.VERSION.full;
    console.log(`Angular ${this.angularVersion}.`);
  }
}
