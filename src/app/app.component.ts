import { Component, ErrorHandler } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalErrorHandlerService } from './shared/services/error-handler/global-error-handler.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandlerService }],
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

