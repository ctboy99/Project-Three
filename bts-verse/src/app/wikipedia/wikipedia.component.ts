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
  title: string;
  extract_html: string;
  timestamp: string;

  constructor(private wikipediaService : WikipediaDataService) {
    this.title = 'holder';
    this.extract_html = 'holder';
    this.timestamp = 'holder';
  }

  ngOnInit() {
    this.wikipediaService.getRequest().subscribe((data: Config) => {
    this.title = data.title, this.extract_html = data.extract_html, this.timestamp = data.timestamp});
  }

}
