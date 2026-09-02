import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  inject,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { catchError, forkJoin, map, of } from 'rxjs';
import { DICOM_IMAGE_CATALOG } from './dicom-image-catalog';
import { DicomImage, parseDicom } from './dicom-parser';
import { paintRgba, windowToRgba } from './dicom-window';

export interface DicomThumbnail {
  id: string;
  label: string;
  image: DicomImage;
  rgba: Uint8ClampedArray;
}

@Component({
  selector: 'app-view-dicom',
  templateUrl: './view-dicom.component.html',
  styleUrls: ['./view-dicom.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [MatButtonModule],
})
export class ViewDicomComponent implements OnInit, AfterViewChecked {
  private readonly http = inject(HttpClient);
  private readonly destroyRef = inject(DestroyRef);
  private paintedKey = '';

  @ViewChild('viewerCanvas') viewerCanvas: ElementRef<HTMLCanvasElement> | undefined;
  @ViewChildren('thumbCanvas') thumbCanvases = new QueryList<ElementRef<HTMLCanvasElement>>();

  thumbnails: DicomThumbnail[] = [];
  selected: DicomThumbnail | undefined;
  loading = true;
  error = '';

  ngOnInit(): void {
    forkJoin(
      DICOM_IMAGE_CATALOG.map(entry =>
        this.http.get(entry.url, { responseType: 'arraybuffer' }).pipe(
          map(buffer => {
            const image = parseDicom(buffer);
            const parts = [image.modality, image.seriesDescription].filter(part => Boolean(part));
            return {
              id: entry.id,
              label: parts.join(' · ') || entry.id,
              image,
              rgba: windowToRgba(image),
            };
          }),
          catchError(() => of(undefined))
        )
      )
    )
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(results => {
        const loaded: DicomThumbnail[] = [];
        for (const item of results) {
          if (item) {
            loaded.push(item);
          }
        }
        this.thumbnails = loaded;
        this.loading = false;
        if (loaded.length === 0) {
          this.error = 'Unable to load DICOM images.';
        }
      });
  }

  ngAfterViewChecked(): void {
    const key = this.selected ? `view:${this.selected.id}` : `grid:${this.thumbnails.length}`;
    if (key === this.paintedKey) {
      return;
    }
    if (this.selected && this.viewerCanvas) {
      paintRgba(
        this.viewerCanvas.nativeElement,
        this.selected.image.columns,
        this.selected.image.rows,
        this.selected.rgba
      );
      this.paintedKey = key;
      return;
    }
    if (!this.selected && this.thumbCanvases.length === this.thumbnails.length && this.thumbnails.length > 0) {
      this.thumbCanvases.forEach((ref, index) => {
        const thumb = this.thumbnails[index];
        if (thumb) {
          paintRgba(ref.nativeElement, thumb.image.columns, thumb.image.rows, thumb.rgba);
        }
      });
      this.paintedKey = key;
    }
  }

  select(thumb: DicomThumbnail): void {
    this.selected = thumb;
    this.paintedKey = '';
  }

  clearSelection(): void {
    this.selected = undefined;
    this.paintedKey = '';
  }
}
