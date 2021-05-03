import { WikipediaDataService } from 'src/app/wikipedia-data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwitterFeedComponent } from './twitter-feed/twitter-feed.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WikipediaComponent } from './wikipedia/wikipedia.component';
import { SpotifyComponent } from './spotify/spotify.component';

@NgModule({
  declarations: [
    AppComponent,
    TwitterFeedComponent,
    YoutubeComponent,
    NavBarComponent,
    WikipediaComponent,
    SpotifyComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [WikipediaDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
