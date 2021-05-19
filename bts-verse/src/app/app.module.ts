/** @RH_RANTWORKS */
/** Default AngularCLI component file. */

import { WikipediaDataService } from 'src/app/wikipedia-data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwitterFeedComponent } from './twitter-feed/twitter-feed.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WikipediaComponent } from './wikipedia/wikipedia.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { BarchartComponent } from './barchart/barchart.component';

const appRoutes: Routes = [
  {
  path: 'tweets',
  component: TwitterFeedComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TwitterFeedComponent,
    YoutubeComponent,
    NavBarComponent,
    WikipediaComponent,
    SpotifyComponent,
    BarchartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule,
  ],
  providers: [WikipediaDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
