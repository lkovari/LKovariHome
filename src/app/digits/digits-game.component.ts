import { Component } from '@angular/core';

@Component({
  selector: 'app-digits-game',
  templateUrl: './digits-game.component.html',
  styleUrls: ['./digits-game.component.scss']
})
export class DigitsGameComponent {
  currentDate = new Date();
  constructor() {}

  ngOnInit(): void {
  }

}
