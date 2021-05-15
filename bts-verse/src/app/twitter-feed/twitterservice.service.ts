import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Parser } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import Tweet from './Tweets';
import * as mydata from "./mydata.json";

declare function listener(): any;
@Injectable({
  providedIn: 'root',
})
export class TwitterService {
  tweets: Tweet[] = [];
  apiURL = './mydata.json';
  constructor(private http: HttpClient) {}

  getTimeline(): any {
    //console.log(mydata);
     return mydata.default
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
