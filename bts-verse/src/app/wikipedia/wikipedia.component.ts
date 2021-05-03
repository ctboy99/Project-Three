import { Config } from './config';
import { Component, OnInit } from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { WikipediaDataService } from 'src/app/wikipedia-data.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-wikipedia',
  templateUrl: './wikipedia.component.html',
  styleUrls: ['./wikipedia.component.css'],
})

export class WikipediaComponent implements OnInit {
  wikiData: Config;

  constructor(private wikipediaService : WikipediaDataService) {
    this.wikipediaService.getRequest().subscribe((data: Config) => this.wikiData = { ...data });
  }

  ngOnInit() {
    this.wikipediaService.getRequest().subscribe((data: Config) => console.log(this.wikiData = { ...data }));
  }

}
