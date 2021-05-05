import { Config } from './wikipedia/config';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class WikipediaDataService {

  private WIKI_URL = "https://en.wikipedia.org/api/rest_v1/page/summary/BTS";

  constructor(
    private http: HttpClient,
  ) {}

  public getRequest() {
    return this.http.get<Config>(this.WIKI_URL, {observe: 'body', responseType: 'json'});
  }

}


