import { Component, OnInit } from '@angular/core';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { SlideToggleOrientation } from '../../models/slide-toggle.types';

@Component({
  selector: 'app-slide-toggle-example',
  standalone: true,
  imports: [JsonPipe, ReactiveFormsModule, SlideToggleComponent],
  templateUrl: './slide-toggle-example.component.html',
  styleUrl: './slide-toggle-example.component.scss'
})
export class SlideToggleExampleComponent implements OnInit {
  githubLogoPath: string;
  defaultValue: boolean = true;
  orientationHorizontal: SlideToggleOrientation = 'horizontal';
  orientationVertical: SlideToggleOrientation = 'vertical';
  defaultOrientation: 'horizontal' | 'vertical' = 'horizontal';
  options: string[] = [this.orientationHorizontal, this.orientationVertical];
  toggleForm: FormGroup = new FormGroup({
    toggle: new FormControl(this.defaultValue),
    orientation: new FormControl(this.defaultOrientation) 
  });
  ngOnInit(): void {
    this.githubLogoPath = 'assets/logos/GitHub-Mark-32px.png';
    this.toggleForm.controls['orientation'].valueChanges.subscribe((value: 'horizontal' | 'vertical') => {
      this.defaultOrientation = value;
    });
  }

  valueChanged(value: boolean) {
    console.log('Value changed ', value);
  }
}
