import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Parser } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';

declare function listener(): any;
@Injectable({
  providedIn: 'root',
})
export class TwitterService {
  apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getTimeline(): any {
    return this.http.get<any[]>(this.apiURL + '/user_timeline', {
      responseType: 'json',
    });
    // .pipe(map(data => data));
  }

  getMentions(): any {
    return this.http
      .get<any[]>(this.apiURL + '/mentions_timeline')
      .pipe(map((data) => data));
  }
}
