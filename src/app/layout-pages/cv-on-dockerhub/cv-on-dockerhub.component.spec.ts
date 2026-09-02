import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MatTooltip } from '@angular/material/tooltip';
import { ClipboardService } from 'ngx-clipboard';

import { CvOnDockerhubComponent } from './cv-on-dockerhub.component';

describe('CvOnDockerhubComponent', () => {
  let component: CvOnDockerhubComponent;
  let fixture: ComponentFixture<CvOnDockerhubComponent>;
  let copy: ReturnType<typeof vi.fn>;

  beforeEach(async () => {
    copy = vi.fn(() => true);

    await TestBed.configureTestingModule({
      imports: [CvOnDockerhubComponent],
      providers: [
        {
          provide: ClipboardService,
          useValue: {
            copy,
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CvOnDockerhubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders the heading, Hub link, pull command, run command, and browse URL', () => {
    const content = fixture.nativeElement.textContent;
    const hubLink = fixture.nativeElement.querySelector(
      `a[href="${component.dockerHubUrl}"]`
    );
    const browseLink = fixture.nativeElement.querySelector(
      `a[href="${component.browseUrl}"]`
    );

    expect(content).toContain('CV on Dockerhub');
    expect(content).toContain('docker pull lkovari/lkcv');
    expect(content).toContain('docker run --name lkovari-cv -p 1965:80 lkovari/lkcv');
    expect(content).toContain('http://localhost:1965');
    expect(hubLink).toBeTruthy();
    expect(hubLink?.getAttribute('target')).toBe('_blank');
    expect(browseLink).toBeTruthy();
  });

  it('copies the pull command', () => {
    const copyButton = fixture.nativeElement.querySelector('button');

    copyButton.click();

    expect(copy).toHaveBeenCalledWith('docker pull lkovari/lkcv');
  });

  it('shows a below tooltip explaining that copy does not download the image', () => {
    const tooltip = fixture.debugElement.query(By.directive(MatTooltip)).injector.get(MatTooltip);

    expect(tooltip.message).toBe(component.copyPullTooltip);
    expect(tooltip.position).toBe('below');
    expect(tooltip.message).toContain('It does not download the image');
  });
});
