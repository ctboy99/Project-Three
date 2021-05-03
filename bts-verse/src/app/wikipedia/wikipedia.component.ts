import { Config } from './config';
import { Component, OnInit } from '@angular/core';
import { WikipediaDataService } from 'src/app/wikipedia-data.service'

@Component({
  selector: 'app-wikipedia',
  templateUrl: './wikipedia.component.html',
  styleUrls: ['./wikipedia.component.css'],
})

export class WikipediaComponent implements OnInit {
  extract_html: string;
  timestamp: string;
  thumbnail: {
    source: string;
    width: number;
  height: number;
  };


  constructor(private wikipediaService : WikipediaDataService) {
    this.extract_html = 'holder';
    this.timestamp = 'holder';
    this.thumbnail = {
      source: 'holder',
      width: 0,
      height: 0,
    }
  }

  ngOnInit() {
    this.wikipediaService.getRequest().subscribe((data: Config) => {
    this.thumbnail = data.thumbnail, this.extract_html = data.extract_html, this.timestamp = data.timestamp});
  }

}
