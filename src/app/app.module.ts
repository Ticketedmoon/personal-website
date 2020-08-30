import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {NavigationMenuComponent} from './components/navigation-menu/navigation-menu.component';
import {IntroductionImageComponent} from './components/introduction-image/introduction-image.component';
import {AboutMeSectionComponent} from './components/about-me-section/about-me-section.component';
import {FavouriteTechnologiesComponent} from './components/favourite-technologies/favourite-technologies.component';
import {ProjectListingSectionComponent} from './components/project-listing-section/project-listing-section.component';
import {SocialMediaProjectLinksComponent} from './components/social-media-project-links/social-media-project-links.component';
import {WorkExperienceSectionComponent} from './components/work-experience-section/work-experience-section.component';
import {MyProtocolForLifeComponent} from './components/my-protocol-for-life/my-protocol-for-life.component';
import {FooterInformationComponent} from './components/footer-information/footer-information.component';
import {IonicModule} from '@ionic/angular';
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
    declarations: [
        AppComponent,
        NavigationMenuComponent,
        IntroductionImageComponent,
        AboutMeSectionComponent,
        FavouriteTechnologiesComponent,
        ProjectListingSectionComponent,
        SocialMediaProjectLinksComponent,
        WorkExperienceSectionComponent,
        MyProtocolForLifeComponent,
        FooterInformationComponent,
    ],
    imports: [
        BrowserModule,
        IonicModule,
        HttpClientModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
