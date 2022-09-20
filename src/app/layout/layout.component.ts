import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  private SCREEN_WIDTH_LIMIT = 600;
  mediaObserverAsObservable: Subscription;

  constructor(public router: Router, mediaObserver: MediaObserver) { 
    // use MediaObserver to detect width changes if it is xs or sm then close the sidenav
    this.mediaObserverAsObservable = mediaObserver.asObservable().subscribe((changes: MediaChange[]) => {
      // option A.
      const currentMediaChange = changes[0];
      if (currentMediaChange.mqAlias === 'xs') {
        if (this.sidenav) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
          console.log('>>>>>>> sidenav opened');
        }
      } else {
        if (this.sidenav) {
          this.sidenav.mode = 'side';
          this.sidenav.open();
          console.log('>>>>>>> sidenav closed');
        }
      }
      // this.sidenav.toggle();
    }); 
  }

  ngOnInit(): void {
    // navigate to home
    if (this.router.url === '/') {
      this.router.navigate(['/layout-pages/home']);
    } 
  }
  
  private initializeSideNav() {
    if (window.innerWidth < this.SCREEN_WIDTH_LIMIT) {
      this.sidenav.mode = 'over';
      this.sidenav.close();
    } else {
      this.sidenav.mode = 'side';
      this.sidenav.open();
    }
    
  }
  
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initializeSideNav();
    });
  }  

  onSidenavToggle() {
    this.sidenav.toggle();
    console.log('>>>>>>> sidenav ' + this.sidenav.opened);
  }
}
