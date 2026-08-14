import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { WaitSpinnerService } from '../../services/wait-spinner/wait-spinner.service';

@Component({
  selector: 'app-wait-spinner',
  templateUrl: './wait-spinner.component.html',
  styleUrl: './wait-spinner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatProgressSpinner],
})
export class WaitSpinnerComponent {
  readonly waitSpinner = inject(WaitSpinnerService);
}
