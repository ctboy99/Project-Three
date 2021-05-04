import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';

 @Injectable({
   providedIn: 'root'
 })
export class TwitterService {

  api_url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}


    getTimeline(){
      console.log("hello");
      return this.http
      .get<any[]>(this.api_url + '/user_timeline', {responseType: 'json'})
      .pipe(map(data => data));

    }
   

   getMentions(){
     return this.http
      .get<any[]>(this.api_url + '/mentions_timeline')
      .pipe(map(data => data));
   }
  }
