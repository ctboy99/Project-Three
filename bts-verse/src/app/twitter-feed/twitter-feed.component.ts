import { Component, OnInit } from '@angular/core';
import { TwitterService } from './twitterservice.service';

declare function parser() : any; 
declare function create() : any;

@Component({
  selector: 'app-twitter-feed',
  templateUrl: './twitter-feed.component.html',
  styleUrls: ['./twitter-feed.component.css']
})
export class TwitterFeedComponent implements OnInit {
  timeline: any;
  constructor(private api: TwitterService) {
   }

  ngOnInit() {
    //create();
    //parser();
    this.getTwitterTimeline();
    
  }

  getTwitterTimeline(): void  {
    //create();
    //parser();
    this.api.getTimeline()
    .subscribe(
      timeline => {
        this.timeline = timeline;
        console.log(this.timeline);
        
      }
    )
  }
}
