import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter<void>();
  mediaObserverAsObservable: Subscription;
  private isWidthXs = false;
  menuItems: MenuItem[];
  
  constructor(mediaObserver: MediaObserver) {
    // use MediaObserver to detect width changes if it is xs or sm then close the sidenav
    this.mediaObserverAsObservable = mediaObserver.asObservable().subscribe((changes: MediaChange[]) => {
      // option A.
      const currentMediaChange = changes[0];
      if (currentMediaChange.mqAlias === 'xs') {
        this.isWidthXs = true;
      } else {
        this.isWidthXs = false;
      }
    });     
  }

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Angular',
        icon: 'pi pi-box',
        items: [
            {
                label: 'v16 news',
                icon: 'pi pi-box',
                items: [
                    {
                        label: 'Signals',
                        icon: 'pi pi-book',
                        routerLink: '/angular-news-pages/angular-news-v16-signals'
                    },
                    {
                        label: 'Required inputs',
                        icon: 'pi pi-book'
                    },
                    {
                      label: 'DestroyRef',
                      icon: 'pi pi-book'
                    },
                    {
                      label: 'provideServiceWorker',
                      icon: 'pi pi-book'
                    },
                    {
                      label: 'Styles removal opt-in',
                      icon: 'pi pi-book'
                    },
                    {
                      label: 'RxJS interoperability',
                      icon: 'pi pi-book'
                    },
                    {
                      label: 'Hydration enhanced',
                      icon: 'pi pi-book'
                    }
                ]
            },
            {
              label: 'v15 news',
              icon: 'pi pi-box',
              items: [
                  {
                      label: 'Standalone Components API',
                      icon: 'pi pi-book',
                      routerLink: 'angular-news-pages/angular-news-v15-standalone'
                  },
                  {
                      label: 'Create a multi-route application',
                      icon: 'pi pi-book'
                  },
                  {
                      label: 'Directive composition API',
                      icon: 'pi pi-book'
                  },
                  {
                      label: 'NgOptimizedImage',
                      icon: 'pi pi-book'
                  },
                  {
                      label: 'Functional router guards',
                      icon: 'pi pi-book'
                  },
                  {
                      label: 'Router unwraps default imports',
                      icon: 'pi pi-book'
                  },
                  {
                      label: 'Functional router guards',
                      icon: 'pi pi-book'
                  }
              ]
            }
        ]
      },
      {
          label: 'Playground',
          icon: 'pi pi-bolt',
          items: [
              {
                  label: 'Acts',
                  icon: 'pi pi-bolt',
                  items: [
                      {
                          label: 'Act #1',
                          icon: 'pi pi-book'
                      },
                      {
                          label: 'Act #2',
                          icon: 'pi pi-book'
                      }
                  ]
              }
          ]
      },
      {
        label: 'Numbers',
        icon: 'pi pi-th-large',
        routerLink: '/digits/digits-game'
      }              
    ];
  }

  public onSidenavClose = () => {
    if (this.isWidthXs) {
      this.sidenavClose.emit();
    }
  }  
}
