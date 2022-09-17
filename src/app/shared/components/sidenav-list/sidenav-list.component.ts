import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  mediaObserverAsObservable: Subscription;
  private isWidthXs = false;

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
  }

  public onSidenavClose = () => {
    if (this.isWidthXs) {
      this.sidenavClose.emit();
    }
  }  
}
