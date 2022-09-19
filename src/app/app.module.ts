import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  // prevent 404 Forbidden error when refresh the page
  // https://stackoverflow.com/questions/35284988/angular-2-404-error-occur-when-i-refresh-through-the-browser
  // providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
