import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Parser } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import Tweets from './Tweets';
import * as mydata from "./mydata.json";


@Injectable({
  providedIn: 'root',
})
export class TwitterService {
  default: null;
  tweets: Tweets[] = [];
  apiURL = 'http://bts-verse.s3-website-us-east-1.amazonaws.com/api';
  constructor(private http: HttpClient) {}

  getTimeline(): Tweets[] {
    //console.log(mydata);
    const Data = JSON.parse(JSON.stringify(mydata));
    //console.log(Data);
     return Data.default;
     //.pipe(map(data => data));
  }
  

  getMentions(): any {
    return this.http
      .get<any[]>(this.apiURL + '/mentions_timeline')
      .pipe(map((data) => data));
  }


getJSON(): any {
  return mydata;
}
}
