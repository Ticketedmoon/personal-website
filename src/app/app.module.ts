import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { BodyContextVideoComponent } from './components/body-context-video/body-context-video.component';
import { BodyContextAboutMeComponent } from './components/body-context-about-me/body-context-about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    BodyContextVideoComponent,
    BodyContextAboutMeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
