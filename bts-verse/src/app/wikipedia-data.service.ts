/** @RH_RANTWORKS */

import { Config } from './wikipedia/config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WikipediaDataService {
  /** Service class to provide the wikipedia data for the wikipedia component. */

  private WIKI_URL = 'https://en.wikipedia.org/api/rest_v1/page/summary/BTS'; // Wikipedia URL

  constructor(private http: HttpClient)
  // Creates wikipedia service with HttpClient requirement.
  {}

  public getRequest(): any {
    /** Returns an object as Config object from the HTTP request to WIKI_URL */
    return this.http.get<Config>(this.WIKI_URL, {observe: 'body', responseType: 'json'});
  }

}


