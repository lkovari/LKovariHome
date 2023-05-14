import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularNewsV16SignalsComponent } from './angular-news-pages/angular-news-v16-signals/angular-news-v16-signals.component';
import { AngularNewsV15StandaloneComponent } from './angular-news-pages/angular-news-v15-standalone/angular-news-v15-standalone.component';


@NgModule({
  declarations: [
    AppComponent,
    AngularNewsV16SignalsComponent,
    AngularNewsV15StandaloneComponent
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
