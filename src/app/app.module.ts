import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { IntroductionImageComponent } from './components/introduction-image/introduction-image.component';
import { AboutMeSectionComponent } from './components/about-me-section/about-me-section.component';
import { FavouriteTechnologiesComponent } from './components/favourite-technologies/favourite-technologies.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    IntroductionImageComponent,
    AboutMeSectionComponent,
    FavouriteTechnologiesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
