import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { BodyContextImageComponent } from './body-context-image/body-context-image.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    BodyContextImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
