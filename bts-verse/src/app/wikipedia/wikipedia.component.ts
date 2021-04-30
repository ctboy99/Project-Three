import { Component, OnInit } from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
declare var wikipedia: any;

@Component({
  selector: 'app-wikipedia',
  templateUrl: './wikipedia.component.html',
  styleUrls: ['./wikipedia.component.css'],
})
export class WikipediaComponent implements OnInit {

  constructor() {
    imports : [ BrowserModule, HttpClientModule ]
  }

  ngOnInit(): void {
  }

}
