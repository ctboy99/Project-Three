import { Component, OnInit } from '@angular/core';
import { TwitterService } from './twitterservice.service';

@Component({
  selector: 'app-twitter-feed',
  templateUrl: './twitter-feed.component.html',
  styleUrls: ['./twitter-feed.component.css']
})
export class TwitterFeedComponent implements OnInit {

  timeline: any;
  constructor(private api: TwitterService) { }

  ngOnInit() {
    this.getTwitterTimeline();
  }

  getTwitterTimeline(): void  {
    this.api.getTimeline()
    .subscribe(
      timeline => {
        this.timeline = timeline;
        console.log(this.timeline);
        
      }
    )
  }
}
