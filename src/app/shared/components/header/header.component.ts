import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  lastUpdateDate = new Date('05/15/2023 02:43 AM');
  lastUpdateTooltip = 'Angular 16 Signals example (Material and PrimeNG)';
  angularVersion: any;

  constructor() { }

  ngOnInit(): void {
   
  }
}
