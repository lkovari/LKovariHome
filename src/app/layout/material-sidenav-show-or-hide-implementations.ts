/*
------------------- Option A
<div class="layout-content">
    <app-layout-content>
        <mat-toolbar class="toolbar-style" color="primary">
            <div fxShow="true" fxHide.gt-xs>
                <button mat-icon-button (click)="onSidenavToggle()">
                    <mat-icon>menu</mat-icon>
                </button>
            </div>
            <app-header></app-header>
        </mat-toolbar>
        <mat-sidenav-container autosize>
            <mat-sidenav #sidenav role="navigation" mode='side' opened="true">
                <app-sidenav-list (sidenavClose)="sidenav.close()"></app-sidenav-list>
            </mat-sidenav>
            <mat-sidenav-content>
                <main>
                    <router-outlet></router-outlet>
                </main>
            </mat-sidenav-content>
        </mat-sidenav-container>
    </app-layout-content>
</div>



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

------------------- Option B
<div class="layout-content">
    <app-layout-content>
        <mat-toolbar class="toolbar-style" color="primary">
            <div fxShow="true" fxHide.gt-xs>
                <button mat-icon-button (click)="onSidenavToggle()">
                    <mat-icon>menu</mat-icon>
                </button>
            </div>
            <app-header></app-header>
        </mat-toolbar>
        <mat-sidenav-container autosize>
            <mat-sidenav #sidenav role="navigation" class="mat-elevation-z10"
                [mode]="isScreenSmall ? 'over' : 'side'" 
                [opened]="isScreenSmall ? false : true">
                <app-sidenav-list (sidenavClose)="sidenav.close()"></app-sidenav-list>
            </mat-sidenav>
            <mat-sidenav-content>
                <main>
                    <router-outlet></router-outlet>
                </main>
            </mat-sidenav-content>
        </mat-sidenav-container>
    </app-layout-content>
</div>



import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

const SMALL_WIDTH_BREAKPOINT = 600;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  private SCREEN_WIDTH_LIMIT = 600;
  mediaObserverAsObservable: Subscription;
  public isScreenSmall = false;
  
  constructor(public router: Router, private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    // navigate to home
    if (this.router.url === '/') {
      this.router.navigate(['/layout-pages/home']);
    } 
    this.breakpointObserver
      .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      });
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

------------------- Option c Simplest way
<div class="layout-content">
    <app-layout-content>
        <mat-toolbar class="toolbar-style" color="primary">
            <div fxShow="true" fxHide.gt-xs>
                <button mat-icon-button (click)="onSidenavToggle()">
                    <mat-icon>menu</mat-icon>
                </button>
            </div>
            <app-header></app-header>
        </mat-toolbar>
        <mat-sidenav-container autosize>
            <mat-sidenav #sidenav role="navigation" class="mat-elevation-z10"
                [mode]="isScreenXs() ? 'over' : 'side'" 
                [opened]="!isScreenXs()">
                <app-sidenav-list (sidenavClose)="sidenav.close()"></app-sidenav-list>
            </mat-sidenav>
            <mat-sidenav-content>
                <main>
                    <router-outlet></router-outlet>
                </main>
            </mat-sidenav-content>
        </mat-sidenav-container>
    </app-layout-content>
</div>



import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
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
*/
