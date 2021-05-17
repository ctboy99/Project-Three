import { Component, OnInit } from '@angular/core';  
import { Chart } from 'chart.js';  
import { HttpClient } from '@angular/common/http';  
import  Tweets  from 'src/app/twitter-feed/Tweets';  
import { TwitterService } from '../twitter-feed/twitterservice.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ChartsModule } from 'ng2-charts'; 

@Component({  
  selector: 'app-barchart',  
  templateUrl: './barchart.component.html',  
  styleUrls: ['./barchart.component.css']  
})  
export class BarchartComponent implements OnInit {  
  tweetList: Tweets[] = [];  
  url = 'http://localhost:3000/twitter/api';  
  Dates : any[] = []; 
  Favorites : any[] = [];  
  Retweets : any[] = [];
  barchart : Chart[] = [];  
  results : Tweets[] = [];
  result : Tweets = new Tweets;
  //ctx = document.getElementById("canvas").getContext('2d');


  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = this.Dates;
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: this.Favorites, label: 'Favorites' },
    { data: this.Retweets, label: 'Retweets'}
  ];

  constructor(private http: HttpClient, private api: TwitterService) { }  

  ngOnInit() {  
      this.results = (this.api.getTimeline());
      //console.log(this.results.default.created_at);
      this.results.forEach(result => {
        this.Dates.push(result.created_at);
        this.Favorites.push(result.favorites);  
        this.Retweets.push(result.retweets);
      })
  
      console.log(this.Dates);
  }
    //  created = {
    //     type: 'bar',  
    //     data: {  
    //       labels: this.Dates,
    //       datasets: [  
    //         {  
    //           data: this.Favorites,  
    //           //borderColor: '#3cba9f',  
    //           backgroundColor: [  
    //             "#3cb371",  
    //             "#0000FF",  
    //             "#9966FF",  
    //             "#4C4CFF",  
    //             "#00FFFF",  
    //             "#f990a7",  
    //             "#aad2ed",  
    //             "#FF00FF",  
    //             "Blue",  
    //             "Red",  
    //             "Blue"  
    //           ],  
    //           //fill: true 
    //         }  
    //       ]  
    //     },  
    //     options: {  
    //       legend: {  
    //         display: false  
    //       },  
    //       scales: {  
    //         xAxes: [{  
    //           display: true  
    //         }],  
    //         yAxes: [{  
    //           display: true  
    //         }],  
    //       }  
    //     },
    //   }; 
      
      

    
    }
    



  