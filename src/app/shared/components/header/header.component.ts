import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  lastUpdateDate = new Date('05/15/2023 10:21 PM');
  lastUpdateTooltip = 'added form status';
  angularVersion: any;

  constructor() { }

  ngOnInit(): void {
   
  }
}
