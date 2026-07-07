import { ChangeDetectionStrategy, Component, input } from '@angular/core';

type MigrationStatus = 'complete' | 'in-progress' | 'pending';

interface MigrationTrack {
  name: string;
  status: MigrationStatus;
  note: string;
}

interface V22Codemod {
  pkg: string;
  name: string;
  changes: string;
}

@Component({
  selector: 'app-home-upgrade-panel',
  templateUrl: './home-upgrade-panel.component.html',
  styleUrl: './home-upgrade-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeUpgradePanelComponent {
  completedOfficialMigrations = input.required<MigrationTrack[]>();
  openOfficialMigrations = input.required<MigrationTrack[]>();
  projectTracks = input.required<MigrationTrack[]>();
  v22Codemods = input.required<V22Codemod[]>();

  statusLabel(status: MigrationStatus): string {
    switch (status) {
      case 'complete':
        return 'Complete';
      case 'in-progress':
        return 'In progress';
      case 'pending':
        return 'Pending';
    }
  }
}
