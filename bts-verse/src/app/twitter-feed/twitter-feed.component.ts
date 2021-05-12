import { Component, OnInit } from '@angular/core';
import Tweet from './Tweets';
import { TwitterService } from './twitterservice.service';

declare function parser(): any;
declare function getRecords(name: any): any;
declare var Tweets: Tweet[];
declare var data: any;

@Component({
  selector: 'app-twitter-feed',
  templateUrl: './twitter-feed.component.html',
  styleUrls: ['./twitter-feed.component.css'],
})
export class TwitterFeedComponent implements OnInit {
  data: any;
  timeline: any;
  holder: any;
  constructor(private api: TwitterService) {}

  ngOnInit(): void {
    this.getTwitterTimeline();
  }

  // setTwitterTimeline() : void {
  //   var Tweets = [];
  //   var db1 = new Database();
  //   db1.Connector();
  //   db1.connect();
  //   this.data = db1.getRecords('TwitterData');
  //   for (let i = 0; i < this.data.length; i++) {
  //     var temp = new Tweet();
  //       temp.profile_picture = this.data[i].user.profile_picture,
  //       temp.user_name = this.data[i].user.name,
  //       temp.screen_name = this.data[i].screen_name,
  //       temp.full_text = this.data[i].full_text,
  //       temp.favorites = this.data[i].favorite_count,
  //       temp.retweets = this.data[i].retweet_count,
  //       temp.created_at = this.data[i].created_at,
  //       Tweets.push(temp);
  //       }
  //       this.timeline = Tweets;
  //       console.log(this.timeline);
  //       db1.quit();
  //   }

  getTwitterTimeline(): void {
    // create();
    // parser();
    this.api.getTimeline().subscribe((timeline: any) => {
      this.timeline = timeline;
      console.log(this.timeline);
    });
  }
}
