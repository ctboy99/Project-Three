(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rowan/Documents/Academic/Spring2021/SWE/Project-3/bts-verse/bts-verse/src/main.ts */"zUnb");


/***/ }),

/***/ "0ALR":
/*!**********************************************!*\
  !*** ./src/app/youtube/youtube.component.ts ***!
  \**********************************************/
/*! exports provided: YoutubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeComponent", function() { return YoutubeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class YoutubeComponent {
    constructor() { }
    ngOnInit() {
    }
}
YoutubeComponent.ɵfac = function YoutubeComponent_Factory(t) { return new (t || YoutubeComponent)(); };
YoutubeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YoutubeComponent, selectors: [["app-youtube"]], decls: 9, vars: 0, consts: [[1, "widget-title"], ["href", "https://www.youtube.com/user/BANGTANTV", "target", "_blank"], ["src", "assets/images/youtube.png", "alt", "BTS's Youtube", 1, "icon"], [1, "youtube-video-container"], ["src", "https://www.youtube.com/embed?max-results=0&controls=1&showinfo=1&rel=0&listType=user_uploads&list=BANGTANTV", "allowfullscreen", ""], [1, "timestamp"]], template: function YoutubeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " YouTube ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "iframe", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Updated on \"Holder\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: 3px 3px 10px gray;\n  border-radius: 10px;\n}\n\n.widget-title[_ngcontent-%COMP%] {\n  text-align: left;\n  font-family: \"Verdana\", sans-serif;\n  color: #3a3a3a;\n  font-size: 36px;\n  padding: 10px;\n  padding-left: 20px;\n  text-decoration: none;\n  letter-spacing: 1.5px;\n  font-weight: lighter;\n}\n\n.timestamp[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 10px;\n  padding: 10px;\n}\n.youtube-video-container[_ngcontent-%COMP%]::after {\n  display: block;\n  content: \"\";\n  padding-top: 56.25%;\n}\n\n.youtube-video-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  border: 0;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.icon[_ngcontent-%COMP%] {\n  clear: right;\n  float: right;\n  width: 40px;\n  height: 40px;\n  margin: 10px;\n}\n.icon[_ngcontent-%COMP%]:hover {\n  box-shadow: 3px 3px 7px gray;\n  border-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlvdXR1YmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5QkFBeUI7QUFDekI7RUFDRSx1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjtBQUVBLGlDQUFpQztBQUNqQztFQUNFLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCO0FBRUEsMEJBQTBCO0FBQzFCO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0FBQ2Y7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCO0FBRUEsa0NBQWtDO0FBQ2xDO0VBQ0UsU0FBUztFQUNULFlBQVk7RUFDWixPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0FBQ2I7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtBQUNkO0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InlvdXR1YmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNldCBiYWNrZ3JvdW5kIGNvbG9yICovXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTBweCBncmF5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4vKiBGb3JtYXR0aW5nIGZvciB3aWRnZXQgdGl0bGUuICovXG4ud2lkZ2V0LXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1mYW1pbHk6IFwiVmVyZGFuYVwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzNhM2EzYTtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cblxuLyogVGltZXN0YW1wIGZvcm1hdHRpbmcuICovXG4udGltZXN0YW1wIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnlvdXR1YmUtdmlkZW8tY29udGFpbmVyOjphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb250ZW50OiBcIlwiO1xuICBwYWRkaW5nLXRvcDogNTYuMjUlO1xufVxuXG4vKiBBZGp1c3QgZm9ybWF0dGluZyBmb3IgaWZyYW1lLiAqL1xuLnlvdXR1YmUtdmlkZW8tY29udGFpbmVyIGlmcmFtZSB7XG4gIGJvcmRlcjogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIEljb24gZm9ybWF0dGluZyAqL1xuLmljb24ge1xuICBjbGVhcjogcmlnaHQ7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uaWNvbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggN3B4IGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ "2zaP":
/*!********************************************************!*\
  !*** ./src/app/twitter-feed/twitterservice.service.ts ***!
  \********************************************************/
/*! exports provided: TwitterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterService", function() { return TwitterService; });
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/internal/operators/map */ "q3Kh");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class TwitterService {
    constructor(http) {
        this.http = http;
        this.api_url = 'http://localhost:3000';
    }
    getTimeline() {
        return this.http
            .get(this.api_url + '/user_timeline', { responseType: 'json' })
            .pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_0__["map"])(data => data));
    }
    getMentions() {
        return this.http
            .get(this.api_url + '/mentions_timeline')
            .pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_0__["map"])(data => data));
    }
}
TwitterService.ɵfac = function TwitterService_Factory(t) { return new (t || TwitterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TwitterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TwitterService, factory: TwitterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "5hVl":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NavBarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 18, vars: 0, consts: [[1, "header"], ["src", "assets/images/bts-verse-logo.png", "alt", "Logo", 1, "logo"], [1, "icon-bar"], ["href", "https://twitter.com/bts_twt", "target", "_blank"], ["src", "assets/images/twitter.png", "alt", "BTS's Twitter", 1, "icon"], ["href", "https://www.facebook.com/bangtan.official/", "target", "_blank"], ["src", "assets/images/facebook.png", "alt", "BTS's Facebook", 1, "icon"], ["href", "https://www.instagram.com/bts.bighitofficial/", "target", "_blank"], ["src", "assets/images/instagram.png", "alt", "BTS's Instagram", 1, "icon"], ["href", "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX", "target", "_blank"], ["src", "assets/images/spotify.png", "alt", "BTS's Spotify", 1, "icon"], ["href", "http://soundcloud.com/bangtan", "target", "_blank"], ["src", "assets/images/soundcloud.png", "alt", "BTS's SoundCloud", 1, "icon"], ["href", "https://www.youtube.com/user/BANGTANTV", "target", "_blank"], ["src", "assets/images/youtube.png", "alt", "BTS's Youtube", 1, "icon"], ["href", "https://www.tiktok.com/@bts_official_bighit", "target", "_blank"], ["src", "assets/images/tiktok.png", "alt", "BTS's Tiktok", 1, "icon"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " BTS-VERSE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\n  background-color: lavender;\n  padding-top: 25px;\n}\n\n.header[_ngcontent-%COMP%] {\n  color: #252525;\n  font-size: 60px;\n  text-align: left;\n  font-family: \"Verdana\";\n  letter-spacing: 5px;\n  z-index: 9999999;\n  position: sticky;\n  top: 0;\n  background-color: lavender;\n  padding: 5px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  padding: 5px;\n}\n.icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  margin: 10px;\n}\n.icon[_ngcontent-%COMP%]:hover {\n  box-shadow: 3px 3px 7px gray;\n  border-radius: 50px;\n}\n.icon-bar[_ngcontent-%COMP%] {\n  float: right;\n  clear: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5QkFBeUI7QUFDekI7RUFDRSwwQkFBMEI7RUFDMUIsaUJBQWlCO0FBQ25CO0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTiwwQkFBMEI7RUFDMUIsWUFBWTtBQUNkO0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtBQUNkO0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkIiwiZmlsZSI6Im5hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNldCBiYWNrZ3JvdW5kIGNvbG9yICovXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGF2ZW5kZXI7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xufVxuXG4vKiBGb3JtYXR0aW5nIGZvciBoZWFkZXIuICovXG4uaGVhZGVyIHtcbiAgY29sb3I6ICMyNTI1MjU7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1mYW1pbHk6IFwiVmVyZGFuYVwiO1xuICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICB6LWluZGV4OiA5OTk5OTk5O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGxhdmVuZGVyO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi8qIEljb24gaW1hZ2UgZm9ybWF0dGluZy4gKi9cbi5sb2dvIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5pY29uIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uaWNvbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggN3B4IGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbi5pY29uLWJhciB7XG4gIGZsb2F0OiByaWdodDtcbiAgY2xlYXI6IHJpZ2h0O1xufVxuIl19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BxSk":
/*!**************************************************!*\
  !*** ./src/app/wikipedia/wikipedia.component.ts ***!
  \**************************************************/
/*! exports provided: WikipediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikipediaComponent", function() { return WikipediaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_wikipedia_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/wikipedia-data.service */ "SrY8");


class WikipediaComponent {
    constructor(wikipediaService) {
        this.wikipediaService = wikipediaService;
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
        this.wikipediaService.getRequest().subscribe((data) => {
            (this.thumbnail = data.thumbnail),
                (this.extract_html = data.extract_html),
                (this.timestamp = data.timestamp);
        });
    }
}
WikipediaComponent.ɵfac = function WikipediaComponent_Factory(t) { return new (t || WikipediaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_wikipedia_data_service__WEBPACK_IMPORTED_MODULE_1__["WikipediaDataService"])); };
WikipediaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WikipediaComponent, selectors: [["app-wikipedia"]], decls: 13, vars: 3, consts: [[1, "widget-title"], [1, "summary"], [1, "article"], ["alt", "Image of BTS", 1, "text-wrap", 3, "src"], [3, "innerHTML"], [1, "timestamp"], ["href", "https://en.wikipedia.org/wiki/BTS ", "target", "_blank", "title", "BTS's Wikipedia Page"]], template: function WikipediaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " About BTS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "blockquote", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "From Wikipedia, the free encyclopedia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Retrieved from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Wikipedia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.thumbnail.source, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.extract_html, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" on ", ctx.timestamp, "");
    } }, styles: ["body[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: 3px 3px 10px gray;\n  border-radius: 10px;\n}\n\n.widget-title[_ngcontent-%COMP%] {\n  text-align: left;\n  font-family: \"Verdana\", sans-serif;\n  color: #3a3a3a;\n  font-size: 36px;\n  padding: 10px;\n  padding-left: 20px;\n  text-decoration: none;\n  letter-spacing: 1.5px;\n  font-weight: lighter;\n}\n\n.article[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n  text-align: justify;\n  font-size: 16px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.text-wrap[_ngcontent-%COMP%] {\n  float: right;\n  margin: 5px;\n}\n\n.timestamp[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 10px;\n  padding: 10px;\n}\n\n.icon[_ngcontent-%COMP%] {\n  clear: right;\n  float: right;\n  width: 40px;\n  height: 40px;\n  margin: 10px;\n}\n.icon[_ngcontent-%COMP%]:hover {\n  box-shadow: 3px 3px 7px gray;\n  border-radius: 50px;\n}\n.summary[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 10px;\n  padding-left: 20px;\n  padding-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpa2lwZWRpYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlCQUF5QjtBQUN6QjtFQUNFLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCO0FBRUEsaUNBQWlDO0FBQ2pDO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtDQUFrQztFQUNsQyxjQUFjO0VBQ2QsZUFBZTtFQUNmLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7QUFDQSwyQ0FBMkM7QUFDM0M7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUVBLCtDQUErQztBQUMvQztFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGFBQWE7QUFDZjtBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixtQkFBbUI7QUFDckI7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJ3aWtpcGVkaWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNldCBiYWNrZ3JvdW5kIGNvbG9yICovXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTBweCBncmF5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4vKiBGb3JtYXR0aW5nIGZvciB3aWRnZXQgdGl0bGUuICovXG4ud2lkZ2V0LXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1mYW1pbHk6IFwiVmVyZGFuYVwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzNhM2EzYTtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cbi8qIEZvcm1hdHRpbmcgZm9yIGFydGljbGUgZnJvbSBXaWtpcGVkaWEuICovXG4uYXJ0aWNsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4vKiBGb3JtYXR0aW5nIGZvciB0aGUgaW1hZ2UncyB0ZXh0IHdyYXBwaW5nLiAgKi9cbi50ZXh0LXdyYXAge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4vKiBUaW1lc3RhbXAgZm9ybWF0dGluZy4gKi9cbi50aW1lc3RhbXAge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4vKiBJY29uIGZvcm1hdHRpbmcgKi9cbi5pY29uIHtcbiAgY2xlYXI6IHJpZ2h0O1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmljb246aG92ZXIge1xuICBib3gtc2hhZG93OiAzcHggM3B4IDdweCBncmF5O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG5cbi5zdW1tYXJ5IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59Il19 */"] });


/***/ }),

/***/ "SrY8":
/*!*******************************************!*\
  !*** ./src/app/wikipedia-data.service.ts ***!
  \*******************************************/
/*! exports provided: WikipediaDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikipediaDataService", function() { return WikipediaDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class WikipediaDataService {
    constructor(http) {
        this.http = http;
        this.WIKI_URL = "https://en.wikipedia.org/api/rest_v1/page/summary/BTS";
    }
    getRequest() {
        return this.http.get(this.WIKI_URL, { observe: 'body', responseType: 'json' });
    }
}
WikipediaDataService.ɵfac = function WikipediaDataService_Factory(t) { return new (t || WikipediaDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
WikipediaDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WikipediaDataService, factory: WikipediaDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _youtube_youtube_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./youtube/youtube.component */ "0ALR");
/* harmony import */ var _spotify_spotify_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spotify/spotify.component */ "XAYW");
/* harmony import */ var _wikipedia_wikipedia_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wikipedia/wikipedia.component */ "BxSk");
/* harmony import */ var _twitter_feed_twitter_feed_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./twitter-feed/twitter-feed.component */ "rUXO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







class AppComponent {
    constructor() {
        this.title = 'bts-verse';
        this.loadScript();
    }
    loadScript() {
        // This array contains all the files/CDNs
        const dynamicScripts = [
            'twitter-feed/twitter.js'
        ];
        for (let i = 0; i < dynamicScripts.length; i++) {
            const node = document.createElement('script');
            node.src = dynamicScripts[i];
            node.type = 'text/javascript';
            node.async = true;
            document.getElementsByTagName('head')[0].appendChild(node);
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 13, vars: 0, consts: [[1, "header"], [1, "row"], [1, "column"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-youtube");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-spotify");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-wikipedia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-twitter-feed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _youtube_youtube_component__WEBPACK_IMPORTED_MODULE_2__["YoutubeComponent"], _spotify_spotify_component__WEBPACK_IMPORTED_MODULE_3__["SpotifyComponent"], _wikipedia_wikipedia_component__WEBPACK_IMPORTED_MODULE_4__["WikipediaComponent"], _twitter_feed_twitter_feed_component__WEBPACK_IMPORTED_MODULE_5__["TwitterFeedComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], styles: ["body[_ngcontent-%COMP%] {\n  background-color: lavender;\n  padding: 20px;\n}\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Verdana\";\n}\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Verdana\";\n}\nh4[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Verdana\";\n}\nh5[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Roboto; font-size: 20\" px;\n}\np[_ngcontent-%COMP%] {\n  color: black;\n  text-align: center;\n  font-size: 16px;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.column[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n  padding: 25px;\n}\n\n.row[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n@media screen and (max-width: 600px) {\n  .column[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.widget-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Verdana\";\n  color: black;\n  text-align: center;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLGFBQWE7QUFDZjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVDQUF1QztBQUN6QztBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBRUEsOERBQThEO0FBRTlEO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUEsNERBQTREO0FBQzVEO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixhQUFhO0FBQ2Y7QUFFQSxtQ0FBbUM7QUFDbkM7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7QUFDYjtBQUNBLHVHQUF1RztBQUN2RztFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7QUFFQSxpQ0FBaUM7QUFDakM7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXZlbmRlcjtcbiAgcGFkZGluZzogMjBweDtcbn1cbmgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJWZXJkYW5hXCI7XG59XG5oMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiVmVyZGFuYVwiO1xufVxuaDQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlZlcmRhbmFcIjtcbn1cbmg1IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJSb2JvdG87IGZvbnQtc2l6ZTogMjBcIiBweDtcbn1cbnAge1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4vKiBodHRwczovL3d3dy53M3NjaG9vbHMuY29tL2hvd3RvL2hvd3RvX2Nzc190d29fY29sdW1ucy5hc3AgKi9cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIENyZWF0ZSB0d28gZXF1YWwgY29sdW1ucyB0aGF0IGZsb2F0cyBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cbi5jb2x1bW4ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMjVweDtcbn1cblxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXG4ucm93OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSBtYWtlcyB0aGUgdHdvIGNvbHVtbnMgc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgaW5zdGVhZCBvZiBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb2x1bW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi8qIEZvcm1hdHRpbmcgZm9yIHdpZGdldCB0aXRsZS4gKi9cbi53aWRnZXQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlZlcmRhbmFcIjtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn0iXX0= */"] });


/***/ }),

/***/ "XAYW":
/*!**********************************************!*\
  !*** ./src/app/spotify/spotify.component.ts ***!
  \**********************************************/
/*! exports provided: SpotifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotifyComponent", function() { return SpotifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SpotifyComponent {
    constructor() { }
    ngOnInit() {
    }
}
SpotifyComponent.ɵfac = function SpotifyComponent_Factory(t) { return new (t || SpotifyComponent)(); };
SpotifyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpotifyComponent, selectors: [["app-spotify"]], decls: 9, vars: 0, consts: [[1, "widget-title"], ["href", "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX", "target", "_blank"], ["src", "assets/images/spotify.png", "alt", "BTS's Spotify", 1, "icon"], [1, "spotify-container"], ["src", "https://open.spotify.com/embed/artist/3Nrfpe0tUJi4K4DXYWgMUX", "frameborder", "0", "allowtransparency", "true", "allow", "encrypted-media"], [1, "timestamp"]], template: function SpotifyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Spotify ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "iframe", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Updated on \"Holder\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: 3px 3px 10px gray;\n  border-radius: 10px;\n}\n\n.widget-title[_ngcontent-%COMP%] {\n  text-align: left;\n  font-family: \"Verdana\", sans-serif;\n  color: #3a3a3a;\n  font-size: 36px;\n  padding: 10px;\n  padding-left: 20px;\n  text-decoration: none;\n  letter-spacing: 1.5px;\n  font-weight: lighter;\n}\n\n.spotify-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  border: 0;\n  left: 0;\n  height: 300px;\n  position: relative;\n  top: 0;\n  width: 100%;\n}\n\n.timestamp[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 10px;\n  padding: 10px;\n}\n\n.icon[_ngcontent-%COMP%] {\n  clear: right;\n  float: right;\n  width: 40px;\n  height: 40px;\n  margin: 10px;\n}\n.icon[_ngcontent-%COMP%]:hover {\n  box-shadow: 3px 3px 7px gray;\n  border-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwb3RpZnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5QkFBeUI7QUFDekI7RUFDRSx1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjtBQUVBLGlDQUFpQztBQUNqQztFQUNFLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCO0FBRUEsa0NBQWtDO0FBQ2xDO0VBQ0UsU0FBUztFQUNULE9BQU87RUFDUCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0FBQ2I7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGFBQWE7QUFDZjtBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3BvdGlmeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2V0IGJhY2tncm91bmQgY29sb3IgKi9cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi8qIEZvcm1hdHRpbmcgZm9yIHdpZGdldCB0aXRsZS4gKi9cbi53aWRnZXQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogXCJWZXJkYW5hXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjM2EzYTNhO1xuICBmb250LXNpemU6IDM2cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG4vKiBBZGp1c3QgZm9ybWF0dGluZyBmb3IgaWZyYW1lLiAqL1xuLnNwb3RpZnktY29udGFpbmVyIGlmcmFtZSB7XG4gIGJvcmRlcjogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBUaW1lc3RhbXAgZm9ybWF0dGluZy4gKi9cbi50aW1lc3RhbXAge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4vKiBJY29uIGZvcm1hdHRpbmcgKi9cbi5pY29uIHtcbiAgY2xlYXI6IHJpZ2h0O1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmljb246aG92ZXIge1xuICBib3gtc2hhZG93OiAzcHggM3B4IDdweCBncmF5O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var src_app_wikipedia_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/wikipedia-data.service */ "SrY8");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _twitter_feed_twitter_feed_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./twitter-feed/twitter-feed.component */ "rUXO");
/* harmony import */ var _youtube_youtube_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./youtube/youtube.component */ "0ALR");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _wikipedia_wikipedia_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wikipedia/wikipedia.component */ "BxSk");
/* harmony import */ var _spotify_spotify_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./spotify/spotify.component */ "XAYW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











const appRoutes = [
    {
        path: 'tweets',
        component: _twitter_feed_twitter_feed_component__WEBPACK_IMPORTED_MODULE_5__["TwitterFeedComponent"]
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
    }
];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [src_app_wikipedia_data_service__WEBPACK_IMPORTED_MODULE_0__["WikipediaDataService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _twitter_feed_twitter_feed_component__WEBPACK_IMPORTED_MODULE_5__["TwitterFeedComponent"],
        _youtube_youtube_component__WEBPACK_IMPORTED_MODULE_6__["YoutubeComponent"],
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavBarComponent"],
        _wikipedia_wikipedia_component__WEBPACK_IMPORTED_MODULE_8__["WikipediaComponent"],
        _spotify_spotify_component__WEBPACK_IMPORTED_MODULE_9__["SpotifyComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "rUXO":
/*!********************************************************!*\
  !*** ./src/app/twitter-feed/twitter-feed.component.ts ***!
  \********************************************************/
/*! exports provided: TwitterFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterFeedComponent", function() { return TwitterFeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _twitterservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./twitterservice.service */ "2zaP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function TwitterFeedComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TwitterFeedComponent_div_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const tweets_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Tweet ", i_r4 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", tweets_r3.user.profile_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tweets_r3.user.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("@", tweets_r3.user.screen_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Tweeted: ", tweets_r3.full_text, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", tweets_r3.favorite_count, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tweets_r3.retweet_count, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Created at: ", tweets_r3.created_at, "");
} }
function TwitterFeedComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TwitterFeedComponent_div_10_ng_container_2_Template, 21, 8, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.timeline.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Last Retrieved: ", ctx_r1.timeline.resp.headers.date, " ");
} }
class TwitterFeedComponent {
    constructor(api) {
        this.api = api;
    }
    ngOnInit() {
        //create();
        //parser();
        this.getTwitterTimeline();
    }
    getTwitterTimeline() {
        //create();
        //parser();
        this.api.getTimeline()
            .subscribe(timeline => {
            this.timeline = timeline;
            console.log(this.timeline);
        });
    }
}
TwitterFeedComponent.ɵfac = function TwitterFeedComponent_Factory(t) { return new (t || TwitterFeedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_twitterservice_service__WEBPACK_IMPORTED_MODULE_1__["TwitterService"])); };
TwitterFeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TwitterFeedComponent, selectors: [["app-twitter-feed"]], decls: 11, vars: 2, consts: [[1, "widget-title"], ["href", "https://twitter.com/bts_twt", "target", "_blank"], ["src", "assets/images/twitter.png", "alt", "BTS's Twitter", 1, "icon"], ["href", "https://twitter.com/BTS_twt?ref_src=twsrc%5Etfw", "target", "_blank", 1, "twitter-timeline"], [4, "ngIf"], [1, "card-container"], [4, "ngFor", "ngForOf"], [1, "timestamp"], [1, "card"], [1, "center"], [3, "src"], ["src", "./assets/images/Likes.png", "width", "35", "height", "35"], ["src", "./assets/images/Retweets.jpg", "width", "30", "height", "30"]], template: function TwitterFeedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Twitter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Tweets by @BTS_twt and @BTS_bighit: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TwitterFeedComponent_div_9_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TwitterFeedComponent_div_10_Template, 5, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", undefined === ctx.timeline);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", undefined !== ctx.timeline);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["body[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: 3px 3px 10px gray;\n  border-radius: 10px;\n}\n\n.widget-title[_ngcontent-%COMP%] {\n  text-align: left;\n  font-family: \"Verdana\", sans-serif;\n  color: #3a3a3a;\n  font-size: 36px;\n  padding: 10px;\n  padding-left: 20px;\n  text-decoration: none;\n  letter-spacing: 1.5px;\n  font-weight: lighter;\n}\nh4[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Verdana\";\n  font-size: 16px;\n}\np[_ngcontent-%COMP%] {\n  color: black;\n  text-align: center;\n  font-size: 16px;\n}\n.center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.timestamp[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 10px;\n  padding: 10px;\n}\n.card[_ngcontent-%COMP%] {\n  margin: 30px;\n  border: 5px dotted #e6e6fa;\n  display: flex;\n  flex-direction: column;\n}\nimg[_ngcontent-%COMP%] {\n  border-radius: 50%\n}\n.card-container[_ngcontent-%COMP%] {\n  width: auto;\n  height: 1000px;\n  overflow-y: scroll;\n  background-color: #e6e6fa;\n}\n\n.icon[_ngcontent-%COMP%] {\n  clear: right;\n  float: right;\n  width: 40px;\n  height: 40px;\n  margin: 10px;\n}\n.icon[_ngcontent-%COMP%]:hover {\n  box-shadow: 3px 3px 7px gray;\n  border-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR3aXR0ZXItZmVlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlCQUF5QjtBQUN6QjtFQUNFLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCO0FBRUEsaUNBQWlDO0FBQ2pDO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtDQUFrQztFQUNsQyxjQUFjO0VBQ2QsZUFBZTtFQUNmLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGFBQWE7QUFDZjtBQUVBO0VBQ0UsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRTtBQUNGO0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtBQUNkO0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InR3aXR0ZXItZmVlZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2V0IGJhY2tncm91bmQgY29sb3IgKi9cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi8qIEZvcm1hdHRpbmcgZm9yIHdpZGdldCB0aXRsZS4gKi9cbi53aWRnZXQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogXCJWZXJkYW5hXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjM2EzYTNhO1xuICBmb250LXNpemU6IDM2cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG5oNCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiVmVyZGFuYVwiO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbnAge1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50aW1lc3RhbXAge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY2FyZCB7XG4gIG1hcmdpbjogMzBweDtcbiAgYm9yZGVyOiA1cHggZG90dGVkICNlNmU2ZmE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJVxufVxuXG4uY2FyZC1jb250YWluZXIge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAxMDAwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZmYTtcbn1cblxuLyogSWNvbiBmb3JtYXR0aW5nICovXG4uaWNvbiB7XG4gIGNsZWFyOiByaWdodDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5pY29uOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogM3B4IDNweCA3cHggZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn0iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map