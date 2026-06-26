import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FlexModule } from '@angular/flex-layout/flex';
import * as angular from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./home.component.scss'],
    imports: [FlexModule],
})
export class HomeComponent implements OnInit {
  public years!: number
  constructor() { }

  ngOnInit(): void {
    const date = new Date();
    this.years = date.getFullYear();
    console.log(`Angular v${angular.VERSION.full}`);
  }

}
