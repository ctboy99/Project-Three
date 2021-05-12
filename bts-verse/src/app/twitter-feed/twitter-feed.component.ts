import { Component, OnInit } from '@angular/core';
import { TwitterService } from './twitterservice.service';

declare function parser() : any; 
declare function parser() : any;

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
