import { Component, DestroyRef, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { MatNavList, MatListItem } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { TieredMenuModule } from 'primeng/tieredmenu';


@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss'],
  imports: [MatNavList, MatListItem, RouterLink, FaIconComponent, TieredMenuModule]
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter<void>();
  mediaObserverAsObservable: Subscription;
  private isWidthXs = false;
  menuItems: MenuItem[] = [];
  destroyRef: DestroyRef = inject(DestroyRef);

  constructor(mediaObserver: MediaObserver) {
    // use MediaObserver to detect width changes if it is xs or sm then close the sidenav
    this.mediaObserverAsObservable = mediaObserver.asObservable()
      .pipe(takeUntilDestroyed(this.destroyRef)).subscribe((changes: MediaChange[]) => {
        // option A.
        const currentMediaChange = changes[0];
        if (currentMediaChange?.mqAlias === 'xs') {
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
        styleclass: 'side-menu-item-style',
        icon: 'pi pi-box',
        items: [
          {
            label: 'Features',
            icon: 'pi pi-box',
            styleclass: 'side-menu-item-style',
            items: [
              {
                label: 'Signals',
                icon: 'pi pi-book',
                styleclass: 'side-menu-item-style',
                routerLink: '/angular-news-pages/angular-news-v16-signals'
              },
              {
                label: '@if @for',
                icon: 'pi pi-book',
                styleclass: 'side-menu-item-style',
              }
            ]
          }
        ]
      },
      {
        label: 'Playground',
        icon: 'pi pi-bolt',
        styleclass: 'side-menu-item-style',
        items: [
          {
            label: 'Acts',
            icon: 'pi pi-bolt',
            styleclass: 'side-menu-item-style',
            items: [
              {
                label: 'Material',
                icon: 'pi pi-book',
                styleclass: 'side-menu-item-style',
                routerLink: 'material-examples/components/material-examples-main'
              },
              {
                label: 'Nested',
                icon: 'pi pi-book',
                styleclass: 'side-menu-item-style',
                routerLink: 'playground/components/nested-example'
              },
              {
                label: 'Wizard',
                icon: 'pi pi-book',
                styleclass: 'side-menu-item-style',
                routerLink: 'playground/components/customizable-wizard'
              },
              {
                label: 'Slide Toggle',
                icon: 'pi pi-book',
                styleclass: 'side-menu-item-style',
                routerLink: 'playground/components/slide-toggle-example'
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
