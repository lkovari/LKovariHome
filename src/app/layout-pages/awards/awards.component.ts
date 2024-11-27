import { Component, OnInit } from '@angular/core';
import { ImageDescriptor } from './models/image-descriptor.interface';
import { NgOptimizedImage } from '@angular/common';

@Component({
    imports: [NgOptimizedImage],
    selector: 'app-awards',
    templateUrl: './awards.component.html',
    styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {
  githubLogoPath!: string;
  public years!: number;
  imageDescriptors: ImageDescriptor[] = [
    { id : 1, fileName: 'assets/images/2022Q2LeaderboardWinnerGT50.png', width: 434, height: 640, alt: 'Leaderboard winner Q2 of 2022' },
    { id : 2, fileName: 'assets/images/2021Q4CaughtAtYourBest.png', width: 791, height: 916, alt: 'Caught at your best Q4 2021' },
    { id : 3, fileName: 'assets/images/2018CertificateOfRecognition20years.png', width: 800, height: 583, alt: '20 years of service' },
    { id : 4, fileName: 'assets/images/2016Q4CaughtAtYourBest.png', width: 1280, height: 983, alt: 'Caught at your best Q4 2016' },
    { id : 5, fileName: 'assets/images/2015Q4CaughtAtYourBest.png', width: 1280, height: 913, alt: 'Caught at your best Q4 2015' },
    { id : 6, fileName: 'assets/images/icagile-cert2014.png', width: 800, height: 583, alt: 'IcAgile course Certificate' },
    { id : 7, fileName: 'assets/images/AmkaiStockOptions1050A.png', width: 1199, height: 913, alt: 'Stock Option Series A' },
    { id : 8, fileName: 'assets/images/2022Q2HippaCertificate.png', width: 1328, height: 590, alt: 'HIPPA. Certificate 2022 Q2' }
  ]

  constructor() { }
  
  ngOnInit() {
    const date = new Date();
    this.years = date.getFullYear();
    this.githubLogoPath = 'assets/logos/GitHub-Mark-32px.png';
    }
   }
