import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  lastUpdateDate = new Date('05/14/2023 06:10 PM');
  lastUpdateTooltip = 'added Material and PrimeNG menu';
  angularVersion: any;

  constructor() { }

  ngOnInit(): void {
   
  }
}
