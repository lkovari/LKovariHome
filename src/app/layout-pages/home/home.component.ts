import { Component, OnInit } from '@angular/core';
import * as angular from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
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
