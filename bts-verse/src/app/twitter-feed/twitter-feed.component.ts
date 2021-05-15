import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import Tweets  from './Tweets';
import { TwitterService } from './twitterservice.service';
import * as mydata from './mydata.json';

declare var require: any
declare function parser(): any;
declare function getRecords(name: any): any;
//declare var Tweets: Tweets[];
@Component({
  selector: 'app-twitter-feed',
  templateUrl: './twitter-feed.component.html',
  styleUrls: ['./twitter-feed.component.css'],
})
export class TwitterFeedComponent implements OnInit {
  data: any;
  timeline: any;
  holder: any;
  destroy$: Subject<boolean> = new Subject<boolean>();
  //public tweetList: Tweet[] = mydata;


  constructor(private api: TwitterService) {}

  ngOnInit(): void {
    //parser();
    this.getTwitterTimeline();
    //console.log(mydata);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
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
    //this.api.getTimeline().subscribe((timeline: any) => {
      this.timeline = this.api.getTimeline();
      console.log(this.timeline);
    //});
  }
}
