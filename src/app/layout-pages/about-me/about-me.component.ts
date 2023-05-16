import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  public years: number;
  public fullImagePath: string;
  public fullInsightImagePath: string;
  public fullInsightImagePathHref: string;
  constructor() {
    this.fullImagePath = 'assets/images/lk_cv_pics.png';
    this.fullInsightImagePath = 'assets/images/lk_insightprofilebricks.jpg';
    this.fullInsightImagePathHref = 'assets/bigfiles/LaszloKovari-InsightsDiscoveryPersonalProfile.pdf';
  }

  ngOnInit(): void {
    const date = new Date();
    this.years = date.getFullYear();    
  }

}
