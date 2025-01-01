import { Component, OnInit } from '@angular/core';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { SlideToggleOrientationType } from '../../models/slide-toggle.types';
import { RouterLink } from '@angular/router';
import { ErrorNotificationService } from 'src/app/shared/services/error-handler/error-notification.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-slide-toggle-example',
  imports: [JsonPipe, ReactiveFormsModule, SlideToggleComponent, RouterLink],
  templateUrl: './slide-toggle-example.component.html',
  styleUrl: './slide-toggle-example.component.scss'
})
export class SlideToggleExampleComponent implements OnInit {
  // strict @ViewChild('modernSlideToggle') modernSlideToggle: SlideToggleComponent;
  githubLogoPath!: string;
  defaultValue: boolean = true;
  orientationHorizontal: SlideToggleOrientationType = 'horizontal';
  orientationVertical: SlideToggleOrientationType = 'vertical';
  defaultOrientation: 'horizontal' | 'vertical' = 'horizontal';
  defaultSpin: boolean = false;
  options: string[] = [this.orientationHorizontal, this.orientationVertical];
  toggleForm: FormGroup = new FormGroup({
    toggle: new FormControl(this.defaultValue),
    orientation: new FormControl(this.defaultOrientation),
    spin: new FormControl(this.defaultSpin)
  });
  errorMessage: string | null = null;

  constructor(private errorNotification: ErrorNotificationService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.githubLogoPath = 'assets/logos/GitHub-Mark-32px.png';
    this.toggleForm.controls['orientation']!.valueChanges.subscribe((value: 'horizontal' | 'vertical') => {
      this.defaultOrientation = value;
    });
  }

  generateError(): void {
    throw new Error('Global Exception Handler Test');
  }

  generateHttpError() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/non-existent-endpoint').subscribe({
      next: (response) => console.log('Response:', response),
      error: (err) => {
        setTimeout(() => { throw err; });
      },
    });
  }

  resetError(): void {
    this.errorNotification.resetErrors();
  }
}
