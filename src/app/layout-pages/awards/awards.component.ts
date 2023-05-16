import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {
  githubLogoPath: string;
  public years: number;

  constructor() { }

  ngOnInit() {
    const date = new Date();
    this.years = date.getFullYear();
    this.githubLogoPath = 'assets/logos/GitHub-Mark-32px.png';
  }

}
