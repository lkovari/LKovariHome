import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LabyrinthCanvasComponent } from './labyrinth-canvas.component';

describe('LabyrinthCanvasComponent', () => {
  let component: LabyrinthCanvasComponent;
  let fixture: ComponentFixture<LabyrinthCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabyrinthCanvasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LabyrinthCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with generate label', () => {
    expect(component.generateLabel()).toBe('Generate');
  });
});
