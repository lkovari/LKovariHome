import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playground-layout',
  templateUrl: './playground-layout.component.html',
  styleUrl: './playground-layout.component.scss'
})
export class PlaygroundLayoutComponent implements OnInit, AfterViewInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  
  constructor(public router: Router, public mediaObserver: MediaObserver) {}

  ngOnInit(): void {
    // navigate to home
    if (this.router.url === '/') {
      this.router.navigate(['/layout-pages/home']);
    } 
  }
    
  private initializeSideNav() {
    if (this.mediaObserver.isActive('xs')) {
      this.sidenav.close();
    } else {
      this.sidenav.open();
    }
  }
 
  isScreenXs(): boolean {
    return this.mediaObserver.isActive('xs');
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
