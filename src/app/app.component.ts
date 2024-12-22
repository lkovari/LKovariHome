import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [RouterOutlet]
})
export class AppComponent {
  title = 'LKovariHome';
  /*
  @HostListener('contextmenu', ['$event'])
  onRightClick(event) {
    console.log('Right click functionality blocked.');
    event.preventDefault();
  }
  */

}
