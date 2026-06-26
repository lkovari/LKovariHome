import { AfterViewInit, Component, OnInit, ChangeDetectionStrategy, viewChild, inject } from '@angular/core';
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
    selector: 'app-angular-news',
    templateUrl: './angular-news.component.html',
    styleUrls: ['./angular-news.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [LayoutContentComponent, MatToolbar, ExtendedModule, MatIconButton, MatIcon, HeaderComponent, MatSidenavContainer, MatSidenav, SidenavListComponent, MatSidenavContent, RouterOutlet]
})
export class AngularNewsComponent implements OnInit, AfterViewInit {
  router = inject(Router);
  mediaObserver = inject(MediaObserver);

  readonly sidenav = viewChild.required<MatSidenav>('sidenav');

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);
  
  constructor() {}

  ngOnInit(): void {
    // navigate to home
    if (this.router.url === '/') {
      this.router.navigate(['/layout-pages/home']);
    } 
  }
    
  private initializeSideNav() {
    if (this.mediaObserver.isActive('xs')) {
      this.sidenav().close();
    } else {
      this.sidenav().open();
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
    this.sidenav().toggle();
    console.log('>>>>>>> sidenav ' + this.sidenav().opened);
  }
}
