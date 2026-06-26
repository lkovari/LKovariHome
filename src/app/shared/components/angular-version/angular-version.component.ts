import { ChangeDetectionStrategy, Component, input, VERSION } from '@angular/core';

@Component({
  selector: 'app-angular-version',
  templateUrl: './angular-version.component.html',
  styleUrls: ['./angular-version.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class AngularVersionComponent {
  compact = input(false);
  readonly angularVersion = VERSION.full;
}
