import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digits-game',
  templateUrl: './digits-game.component.html',
  styleUrls: ['./digits-game.component.scss']
})
export class DigitsGameComponent implements OnInit {
  currentDate = new Date();
  constructor() {}

  ngOnInit(): void {
  }

}
