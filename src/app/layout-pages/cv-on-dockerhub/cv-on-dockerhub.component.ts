import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { ClipboardModule, ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-cv-on-dockerhub',
  templateUrl: './cv-on-dockerhub.component.html',
  styleUrls: ['./cv-on-dockerhub.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [MatButtonModule, MatTooltip, ClipboardModule],
})
export class CvOnDockerhubComponent {
  private clipboardService = inject(ClipboardService);

  readonly dockerHubUrl = 'https://hub.docker.com/repository/docker/lkovari/lkcv/general';
  readonly pullCommand = 'docker pull lkovari/lkcv';
  readonly runCommand = 'docker run --name lkovari-cv -p 1965:80 lkovari/lkcv';
  readonly browseUrl = 'http://localhost:1965';
  readonly imageName = 'lkovari/lkcv:latest';
  readonly copyPullTooltip =
    'It does not download the image. After you click it, paste into a terminal (Docker must be installed) to pull lkovari/lkcv from Docker Hub.';

  copyPullCommand(): void {
    this.clipboardService.copy(this.pullCommand);
  }
}
