import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WaitSpinnerComponent } from './shared/components/wait-spinner/wait-spinner.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [RouterOutlet, WaitSpinnerComponent]
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

