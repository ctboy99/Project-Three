/** @AW_RANTWORKS */

import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import Tweets from 'src/app/twitter-feed/Tweets';
import { TwitterService } from '../twitter-feed/twitterservice.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css'],
})

/* Create a class that configures the barchart and sets the data to it. */
export class BarchartComponent implements OnInit {
  tweetList: Tweets[] = [];
  url = 'http://localhost:3000/twitter/api';
  Dates: any[] = [];
  Favorites: any[] = [];
  Retweets: any[] = [];
  barchart: Chart[] = [];
  results: Tweets[] = [];
  result: Tweets = new Tweets();
/* Declare the Chart Options and respective datapoints for the barchart. */
  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
       {
           display: true,
           ticks: {
             fontSize: 8
           }
       }
      ],
      yAxes: [
        {
            display: true,
            ticks: {
              fontSize: 8
            }
        }
      ]
   }
  };
  barChartLabels: Label[] = this.Dates;
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: this.Favorites, label: 'Favorites', stack: 'a' },
    { data: this.Retweets, label: 'Retweets', stack: 'a' },
  ];

  barChartColors: Color[] = [
    { backgroundColor: 'blue' },
    { backgroundColor: 'goldenrod' },
  ];

  constructor(private http: HttpClient, private api: TwitterService) {}
/* Function on initialization of the component to get and parse the data from the JSON. */
  ngOnInit(): void {
    this.results = this.api.getTimeline();
    // console.log(this.results.default.created_at);
    this.results.forEach((result) => {
      this.Dates.push(result.created_at.substring(0, 10));
      this.Favorites.push(result.favorites);
      this.Retweets.push(result.retweets);
    });
    this.Dates = this.Dates.reverse();
    this.Favorites = this.Favorites.reverse();
    this.Retweets = this.Retweets.reverse();
  }
 
}
