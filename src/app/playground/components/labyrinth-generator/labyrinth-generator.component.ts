import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  computed,
  inject,
  signal,
} from '@angular/core';
import { forkJoin } from 'rxjs';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { DialogModule } from 'primeng/dialog';
import { SlideToggleComponent } from '../../../shared/components/slide-toggle/slide-toggle.component';
import { LabyrinthCanvasComponent } from './labyrinth-canvas/labyrinth-canvas.component';

@Component({
  selector: 'app-labyrinth-generator',
  imports: [
    LabyrinthCanvasComponent,
    DialogModule,
    MatIconButton,
    MatIcon,
    SlideToggleComponent,
  ],
  templateUrl: './labyrinth-generator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './labyrinth-generator.component.scss',
})
export class LabyrinthGeneratorComponent implements OnInit {
  private readonly http = inject(HttpClient);

  readonly pageTitle = "Labirynth generator algorythm by L.Kővári '91";
  readonly subTitle = "Based on my own created algorythm";

  readonly docsVisible = signal(false);
  readonly docsLoading = signal(true);
  readonly hungarianSelected = signal(false);
  readonly showPascalSource = signal(false);
  readonly docEn = signal('');
  readonly docHu = signal('');
  readonly docPas = signal('');

  readonly activeDoc = computed(() => {
    if (this.showPascalSource()) {
      return this.docPas();
    }
    return this.hungarianSelected() ? this.docHu() : this.docEn();
  });

  readonly docsDialogHeader = computed(() => {
    if (this.showPascalSource()) {
      return 'LABYR.PAS (1991)';
    }
    return this.hungarianSelected()
      ? 'Labirintus-generátor dokumentáció'
      : 'Labyrinth Generator Documentation';
  });

  ngOnInit(): void {
    forkJoin({
      en: this.http.get('assets/bigfiles/lab-en.md', { responseType: 'text' }),
      hu: this.http.get('assets/bigfiles/lab-hu.md', { responseType: 'text' }),
      pas: this.http.get('assets/bigfiles/labyr.pas', { responseType: 'text' }),
    }).subscribe({
      next: ({ en, hu, pas }) => {
        this.docEn.set(en);
        this.docHu.set(hu);
        this.docPas.set(pas);
        this.docsLoading.set(false);
      },
      error: () => {
        this.docEn.set('Failed to load documentation.');
        this.docHu.set('A dokumentáció betöltése sikertelen.');
        this.docPas.set('Failed to load Pascal source.');
        this.docsLoading.set(false);
      },
    });
  }

  openDocs(): void {
    this.docsVisible.set(true);
  }
}
