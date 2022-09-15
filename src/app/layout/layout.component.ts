import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  private SCREEN_WIDTH_LIMIT = 992;

  constructor(public router: Router) { 
  }

  ngOnInit(): void {
    if (this.router.url === '/') {
      this.router.navigate(['/home']);
    }    
  }

  private initializeSideNav() {
    if (window.innerWidth < this.SCREEN_WIDTH_LIMIT) {
      this.sidenav.close();
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initializeSideNav();
    });
  }  
}
