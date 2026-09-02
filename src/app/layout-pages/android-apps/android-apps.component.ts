import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-android-apps',
  templateUrl: './android-apps.component.html',
  styleUrls: ['./android-apps.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class AndroidAppsComponent {
  readonly developerUrl = 'https://play.google.com/store/apps/dev?id=7897733156879264510';
}
