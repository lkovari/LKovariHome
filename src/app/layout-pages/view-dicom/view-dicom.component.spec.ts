import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpTestingController } from '@angular/common/http/testing';

import { ViewDicomComponent } from './view-dicom.component';
import { DICOM_IMAGE_CATALOG } from './dicom-image-catalog';
import { buildExplicitLeDicom } from './dicom-test-helpers';

describe('ViewDicomComponent', () => {
  let fixture: ComponentFixture<ViewDicomComponent>;
  let httpMock: HttpTestingController;
  let dicomBuffer: ArrayBuffer;

  let originalGetContext: HTMLCanvasElement['getContext'];

  function flushCatalog(): void {
    for (const entry of DICOM_IMAGE_CATALOG) {
      httpMock.expectOne(entry.url).flush(dicomBuffer);
    }
    fixture.detectChanges();
  }

  beforeEach(async () => {
    dicomBuffer = buildExplicitLeDicom({
      rows: 2,
      columns: 2,
      samples: Int16Array.from([0, 50, 100, 150]),
      modality: 'CT',
      seriesDescription: 'Scout',
      windowCenter: '50',
      windowWidth: '100',
    });

    originalGetContext = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = () => null;

    await TestBed.configureTestingModule({
      imports: [ViewDicomComponent],
    }).compileComponents();

    httpMock = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(ViewDicomComponent);
    fixture.detectChanges();
  });

  afterEach(() => {
    HTMLCanvasElement.prototype.getContext = originalGetContext;
    httpMock.verify();
  });

  it('renders a thumbnail for each catalog image', () => {
    flushCatalog();

    const thumbs = fixture.nativeElement.querySelectorAll('button.dicom-thumb');
    expect(thumbs).toHaveLength(10);
    expect(fixture.nativeElement.textContent).toContain('CT · Scout');
  });

  it('opens a selected image in the outlet viewer and returns to thumbnails with Back', () => {
    flushCatalog();

    fixture.nativeElement.querySelector('button.dicom-thumb').click();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('button.dicom-thumb')).toHaveLength(0);
    expect(fixture.nativeElement.querySelector('canvas.dicom-viewer')).toBeTruthy();
    const back = fixture.nativeElement.querySelector('button.dicom-back');
    expect(back?.textContent).toContain('Back');

    back.click();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('button.dicom-thumb')).toHaveLength(10);
    expect(fixture.nativeElement.querySelector('canvas.dicom-viewer')).toBeFalsy();
  });
});
