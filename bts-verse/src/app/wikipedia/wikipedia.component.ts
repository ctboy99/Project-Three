import { Config } from "./config";
import { Component, OnInit } from "@angular/core";
import { WikipediaDataService } from "src/app/wikipedia-data.service";

@Component({
  selector: "app-wikipedia",
  templateUrl: "./wikipedia.component.html",
  styleUrls: ["./wikipedia.component.css"],
})
export class WikipediaComponent implements OnInit {
  extract_html: string;
  timestamp: string;
  thumbnail: {
    source: string;
    width: number;
    height: number;
  };

  constructor(private wikipediaService: WikipediaDataService) {
    /** Default values are set to errors in case the HTTP request is unsuccessful. */
    this.extract_html = "error - unable to retrieve data";
    this.timestamp = "error - unable to retrieve data";
    this.thumbnail = {
      source: "error - unable to retrieve data",
      width: 0,
      height: 0,
    };
  }

  ngOnInit() {
    /** Get the request from the wikipedia service and assign data to the Config interface for parsing. */
    this.wikipediaService.getRequest().subscribe((data: Config) => {
      (this.thumbnail = data.thumbnail),
        (this.extract_html = data.extract_html),
        (this.timestamp = data.timestamp);
    });
  }
}
