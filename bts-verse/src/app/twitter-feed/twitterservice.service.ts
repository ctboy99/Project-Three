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
/** @AW_RANTWORKS */
/* Twitter Service to get the results of the JSON data. */
export class TwitterService {
  default: null;
  tweets: Tweets[] = [];
  constructor(private http: HttpClient) {}

/* Function to get the JSON and map to an array of Tweet objects. */
  getTimeline(): Tweets[] {
    //console.log(mydata);
    const Data = JSON.parse(JSON.stringify(mydata));
    //console.log(Data);
     return Data.default;
     //.pipe(map(data => data));
  }
  
/* Function to get the general JSON data. */
  getJSON(): any {
  return mydata;
  }
}
