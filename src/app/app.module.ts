import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { BodyContextImageComponent } from './body-context-image/body-context-image.component';
import { BodyContextAboutProjectsComponent } from './body-context-about-projects/body-context-about-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    BodyContextImageComponent,
    BodyContextAboutProjectsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
