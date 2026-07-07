import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { LabyrinthGeneratorComponent } from './labyrinth-generator.component';

describe('LabyrinthGeneratorComponent', () => {
  let component: LabyrinthGeneratorComponent;
  let fixture: ComponentFixture<LabyrinthGeneratorComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabyrinthGeneratorComponent],
    }).compileComponents();

    httpMock = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(LabyrinthGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const enReq = httpMock.expectOne('assets/bigfiles/lab-en.md');
    const huReq = httpMock.expectOne('assets/bigfiles/lab-hu.md');
    const pasReq = httpMock.expectOne('assets/bigfiles/labyr.pas');
    enReq.flush('# English doc');
    huReq.flush('# Hungarian doc');
    pasReq.flush('program Labyr;');
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load documentation and Pascal source on init', () => {
    expect(component.docEn()).toBe('# English doc');
    expect(component.docHu()).toBe('# Hungarian doc');
    expect(component.docPas()).toBe('program Labyr;');
    expect(component.docsLoading()).toBe(false);
  });

  it('should default to English documentation', () => {
    expect(component.activeDoc()).toBe('# English doc');
  });

  it('should show Pascal source when toggled', () => {
    component.showPascalSource.set(true);
    expect(component.activeDoc()).toBe('program Labyr;');
    expect(component.docsDialogHeader()).toBe('LABYR.PAS (1991)');
  });
});
