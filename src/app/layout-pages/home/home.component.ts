import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FlexModule } from '@angular/flex-layout/flex';
import { AngularVersionComponent } from '../../shared/components/angular-version/angular-version.component';

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
    selector: 'app-home',
    templateUrl: './home.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./home.component.scss'],
    imports: [FlexModule, AngularVersionComponent],
})
export class HomeComponent implements OnInit {
  public years!: number;

  readonly officialAngularMigrations: MigrationTrack[] = [
    {
      name: 'Standalone',
      status: 'complete',
      note: 'bootstrapApplication, lazy loadComponent routes; zero NgModule files.',
    },
    {
      name: 'Control flow syntax',
      status: 'complete',
      note: 'Templates use @if / @for; no *ngIf or *ngFor.',
    },
    {
      name: 'Lazy-loaded routes',
      status: 'complete',
      note: 'All feature entry points use loadComponent in app.routes.ts.',
    },
    {
      name: 'Outputs (output())',
      status: 'complete',
      note: 'Event emitters use output(); no @Output() decorators.',
    },
    {
      name: 'Signal queries',
      status: 'complete',
      note: 'viewChild() and viewChild.required() replace @ViewChild.',
    },
    {
      name: 'RouterTestingModule removal',
      status: 'complete',
      note: 'Specs use provideRouter and standalone imports.',
    },
    {
      name: 'CommonModule removal',
      status: 'complete',
      note: 'Standalone component imports only; no NgModules remain.',
    },
    {
      name: 'NgStyle → style bindings',
      status: 'complete',
      note: 'No ngStyle or NgStyle in application source.',
    },
    {
      name: 'NgClass → class bindings',
      status: 'complete',
      note: '[ngClass] converted to [class.xxx] in digits, wizard, and v16-signals.',
    },
    {
      name: 'Signal inputs (input())',
      status: 'complete',
      note: 'All custom form widgets use FormValueControl / FormCheckboxControl with model() signals.',
    },
    {
      name: 'inject() function',
      status: 'complete',
      note: 'Migration applied; remaining empty constructors are backwards-compat stubs.',
    },
    {
      name: 'Self-closing tags',
      status: 'complete',
      note: 'All component templates migrated. index.html uses <app-root></app-root> — plain HTML bootstrap, not an Angular template.',
    },
    {
      name: 'Cleanup unused imports',
      status: 'complete',
      note: 'Verified via ng generate @angular/core:cleanup-unused-imports — no unused imports found.',
    },
  ];

  readonly projectTracks: MigrationTrack[] = [
    {
      name: 'Angular 14 → 22',
      status: 'complete',
      note: 'On 22.0.4 with the @angular/build:application builder.',
    },
    {
      name: 'v21 → v22 codemods',
      status: 'complete',
      note: 'Applied via pnpm run migrate:angular-v22.',
    },
    {
      name: 'Karma / Jasmine → Vitest',
      status: 'complete',
      note: '@angular/build:unit-test with Vitest 4 and jsdom.',
    },
    {
      name: '@angular/flex-layout',
      status: 'pending',
      note: 'Still used for responsive layout; replace with modern CSS when feasible.',
    },
    {
      name: '@angular/fire compat API',
      status: 'pending',
      note: 'Digits game uses compat Firestore; migrate to modular Firebase API.',
    },
    {
      name: 'PrimeNG @primeng/themes',
      status: 'pending',
      note: 'Package deprecated in favour of @primeuix/themes.',
    },
  ];

  readonly v22Codemods: V22Codemod[] = [
    { pkg: '@angular/core', name: 'change-detection-eager', changes: 'Eager change detection on components' },
    { pkg: '@angular/core', name: 'http-xhr-backend', changes: 'HTTP tests use provideHttpClient(withXhr())' },
    { pkg: '@angular/core', name: 'strict-templates-default', changes: 'strictTemplates enabled in tsconfig.json' },
    { pkg: '@angular/core', name: 'can-match-snapshot-required', changes: 'Route guard and canMatch API updates' },
    { pkg: '@angular/core', name: 'incremental-hydration', changes: 'SSR and hydration-related updates' },
    { pkg: '@angular/core', name: 'strict-safe-navigation-narrow', changes: 'Template strictness for safe navigation' },
    { pkg: '@angular/core', name: 'model-output', changes: 'model() input and output API updates' },
    { pkg: '@angular/core', name: 'safe-optional-chaining', changes: 'Template optional-chaining strictness' },
    { pkg: '@angular/cli', name: 'add-istanbul-instrumenter', changes: 'Coverage dependency alignment' },
    { pkg: '@angular/cli', name: 'update-workspace-config', changes: 'angular.json and tsconfig workspace updates' },
  ];

  readonly completedOfficialMigrations = this.officialAngularMigrations.filter((track) => track.status === 'complete');
  readonly openOfficialMigrations = this.officialAngularMigrations.filter((track) => track.status !== 'complete');
  readonly completedProjectTracks = this.projectTracks.filter((track) => track.status === 'complete');
  readonly openProjectTracks = this.projectTracks.filter((track) => track.status !== 'complete');

  ngOnInit(): void {
    this.years = new Date().getFullYear();
  }

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
