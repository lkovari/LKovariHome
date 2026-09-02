import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavListComponent } from './sidenav-list.component';

describe('SidenavListComponent', () => {
  let component: SidenavListComponent;
  let fixture: ComponentFixture<SidenavListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SidenavListComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(SidenavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the CV on Dockerhub menu caption', () => {
    const content = fixture.nativeElement.textContent;

    expect(content).toContain('CV on Dockerhub');
  });

  it('renders the View DICOM menu item under CV on Dockerhub', () => {
    const captionNodes = fixture.nativeElement.querySelectorAll('.nav-caption');
    const captions: string[] = [];
    for (const node of captionNodes) {
      captions.push(String(node.textContent ?? '').trim());
    }
    const dockerIndex = captions.indexOf('CV on Dockerhub');
    const dicomIndex = captions.indexOf('View DICOM');

    expect(dicomIndex).toBe(dockerIndex + 1);
  });

  it('renders the Android Apps menu item under View DICOM', () => {
    const captionNodes = fixture.nativeElement.querySelectorAll('.nav-caption');
    const captions: string[] = [];
    for (const node of captionNodes) {
      captions.push(String(node.textContent ?? '').trim());
    }
    const dicomIndex = captions.indexOf('View DICOM');
    const androidIndex = captions.indexOf('Android Apps');

    expect(androidIndex).toBe(dicomIndex + 1);
  });
});
