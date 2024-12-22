import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { Router, RouterOutlet } from '@angular/router';
import { LayoutContentComponent } from '../shared/components/layout-content/layout-content.component';
import { MatToolbar } from '@angular/material/toolbar';
import { ExtendedModule } from '@angular/flex-layout/extended';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { HeaderComponent } from '../shared/components/header/header.component';
import { SidenavListComponent } from '../shared/components/sidenav-list/sidenav-list.component';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    imports: [LayoutContentComponent, MatToolbar, ExtendedModule, MatIconButton, MatIcon, HeaderComponent, MatSidenavContainer, MatSidenav, SidenavListComponent, MatSidenavContent, RouterOutlet]
})
export class LayoutComponent implements OnInit, AfterViewInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  
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