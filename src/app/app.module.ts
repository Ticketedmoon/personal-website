import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { IntroductionImageComponent } from './components/introduction-image/introduction-image.component';
import { AboutMeSectionComponent } from './components/about-me-section/about-me-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    IntroductionImageComponent,
    AboutMeSectionComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
