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
YoutubeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YoutubeComponent, selectors: [["app-youtube"]], decls: 4, vars: 0, consts: [[1, "widget-title"], [1, "youtube-video-container"], ["src", "https://www.youtube.com/embed?max-results=1&controls=0&showinfo=0&rel=0&listType=user_uploads&list=BANGTANTV", "allowfullscreen", ""]], template: function YoutubeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "YouTube");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "iframe", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\n  background-color: lavender;\n}\n\n.widget-title[_ngcontent-%COMP%] {\n  text-align: left;\n  font-family: \"Verdana\";\n  color: black;\n  font-size: 24px;\n  font-weight: 600;\n  padding: 10px;\n}\n\n.iframe-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  overflow: hidden;\n  \n  padding-top: 56.25%;\n  position: relative;\n}\n.youtube-video-container[_ngcontent-%COMP%]::after {\n  display: block;\n  content: \"\";\n  padding-top: 56.25%;\n}\n.youtube-video-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  border: 0;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlvdXR1YmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5QkFBeUI7QUFDekI7RUFDRSwwQkFBMEI7QUFDNUI7QUFFQSxpQ0FBaUM7QUFDakM7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjtBQUdBLGtDQUFrQztBQUNsQztFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFNBQVM7RUFDVCxZQUFZO0VBQ1osT0FBTztFQUNQLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztBQUNiIiwiZmlsZSI6InlvdXR1YmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNldCBiYWNrZ3JvdW5kIGNvbG9yICovXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGF2ZW5kZXI7XG59XG5cbi8qIEZvcm1hdHRpbmcgZm9yIHdpZGdldCB0aXRsZS4gKi9cbi53aWRnZXQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogXCJWZXJkYW5hXCI7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5cbi8qIEFkanVzdCBmb3JtYXR0aW5nIGZvciBpZnJhbWUuICovXG4uaWZyYW1lLWNvbnRhaW5lciBpZnJhbWUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAvKiAxNjo5IGFzcGVjdCByYXRpbyAqL1xuICBwYWRkaW5nLXRvcDogNTYuMjUlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi55b3V0dWJlLXZpZGVvLWNvbnRhaW5lcjo6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29udGVudDogXCJcIjtcbiAgcGFkZGluZy10b3A6IDU2LjI1JTtcbn1cblxuLnlvdXR1YmUtdmlkZW8tY29udGFpbmVyIGlmcmFtZSB7XG4gIGJvcmRlcjogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"] });


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
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 3, vars: 0, consts: [[1, "header"], ["src", "assets/images/bts-verse-logo.png", "alt", "Logo"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " BTS-VERSE\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\n  background-color: lavender;\n}\n\n.header[_ngcontent-%COMP%] {\n  text-shadow: 3px 3px 7px gray;\n  color: black;\n  font-size: 50px;\n  text-align: left;\n  font-family: \"Verdana\";\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5QkFBeUI7QUFDekI7RUFDRSwwQkFBMEI7QUFDNUI7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCO0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0FBQ2QiLCJmaWxlIjoibmF2LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2V0IGJhY2tncm91bmQgY29sb3IgKi9cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXZlbmRlcjtcbn0gXG5cbi8qIEZvcm1hdHRpbmcgZm9yIGhlYWRlci4gKi9cbi5oZWFkZXIge1xuICB0ZXh0LXNoYWRvdzogM3B4IDNweCA3cHggZ3JheTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDUwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBcIlZlcmRhbmFcIjtcbn1cblxuLyogSWNvbiBpbWFnZSBmb3JtYXR0aW5nLiAqL1xuaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG4iXX0= */"] });


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
        this.extract_html = 'holder';
        this.timestamp = 'holder';
        this.thumbnail = {
            source: 'holder',
            width: 0,
            height: 0,
        };
    }
    ngOnInit() {
        this.wikipediaService.getRequest().subscribe((data) => {
            this.thumbnail = data.thumbnail, this.extract_html = data.extract_html, this.timestamp = data.timestamp;
        });
    }
}
WikipediaComponent.ɵfac = function WikipediaComponent_Factory(t) { return new (t || WikipediaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_wikipedia_data_service__WEBPACK_IMPORTED_MODULE_1__["WikipediaDataService"])); };
WikipediaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WikipediaComponent, selectors: [["app-wikipedia"]], decls: 11, vars: 3, consts: [[1, "widget-title"], [1, "article"], [1, "text-wrap", 3, "src"], [3, "innerHTML"], [1, "timestamp"], ["href", "https://en.wikipedia.org/wiki/BTS"]], template: function WikipediaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "About BTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Retrieved from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Wikipedia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.thumbnail.source, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.extract_html, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" @ ", ctx.timestamp, "");
    } }, styles: ["body[_ngcontent-%COMP%] {\n  background-color: lavender;\n}\n\n.widget-title[_ngcontent-%COMP%] {\n  text-align: left;\n  font-family: \"Verdana\";\n  color: black;\n  font-size: 24px;\n  font-weight: 600;\n  padding: 10px;\n}\n\n.article[_ngcontent-%COMP%] {\n  background-color: white;\n  background: white;\n  color: black;\n  text-align: justify;\n  font-size: 16px;\n  padding: 10px;\n}\n.text-wrap[_ngcontent-%COMP%] {\n  float: right;\n  margin: 5px;\n}\n.timestamp[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpa2lwZWRpYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlCQUF5QjtBQUN6QjtFQUNFLDBCQUEwQjtBQUM1QjtBQUVBLGlDQUFpQztBQUNqQztFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmO0FBRUEsMkNBQTJDO0FBQzNDO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixhQUFhO0FBQ2Y7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCIiwiZmlsZSI6Indpa2lwZWRpYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2V0IGJhY2tncm91bmQgY29sb3IgKi9cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXZlbmRlcjtcbn1cblxuLyogRm9ybWF0dGluZyBmb3Igd2lkZ2V0IHRpdGxlLiAqL1xuLndpZGdldC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBcIlZlcmRhbmFcIjtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi8qIEZvcm1hdHRpbmcgZm9yIGFydGljbGUgZnJvbSBXaWtpcGVkaWEuICovXG4uYXJ0aWNsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi50ZXh0LXdyYXAge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4udGltZXN0YW1wIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuIl19 */"] });


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
/* harmony import */ var _wikipedia_wikipedia_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wikipedia/wikipedia.component */ "BxSk");
/* harmony import */ var _spotify_spotify_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spotify/spotify.component */ "XAYW");
/* harmony import */ var _twitter_feed_twitter_feed_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./twitter-feed/twitter-feed.component */ "rUXO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







class AppComponent {
    constructor() {
        this.title = 'bts-verse';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 0, consts: [[1, "row"], [1, "column"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-youtube");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-wikipedia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-spotify");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-twitter-feed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _youtube_youtube_component__WEBPACK_IMPORTED_MODULE_2__["YoutubeComponent"], _wikipedia_wikipedia_component__WEBPACK_IMPORTED_MODULE_3__["WikipediaComponent"], _spotify_spotify_component__WEBPACK_IMPORTED_MODULE_4__["SpotifyComponent"], _twitter_feed_twitter_feed_component__WEBPACK_IMPORTED_MODULE_5__["TwitterFeedComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], styles: ["body[_ngcontent-%COMP%] {\n  background-color: lavender;\n  padding: 30px;\n}\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Verdana\";\n}\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Verdana\";\n}\nh4[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Verdana\";\n}\nh5[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Roboto; font-size: 20\" px;\n}\np[_ngcontent-%COMP%] {\n  color: black;\n  text-align: center;\n  font-size: 16px;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.column[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n  padding: 40px;\n}\n\n.row[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n@media screen and (max-width: 600px) {\n  .column[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.widget-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Verdana\";\n  color: black;\n  text-align: center;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLGFBQWE7QUFDZjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVDQUF1QztBQUN6QztBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBRUEsOERBQThEO0FBRTlEO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUEsNERBQTREO0FBQzVEO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixhQUFhO0FBQ2Y7QUFFQSxtQ0FBbUM7QUFDbkM7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7QUFDYjtBQUNBLHVHQUF1RztBQUN2RztFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7QUFFQSxpQ0FBaUM7QUFDakM7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXZlbmRlcjtcbiAgcGFkZGluZzogMzBweDtcbn1cbmgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJWZXJkYW5hXCI7XG59XG5oMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiVmVyZGFuYVwiO1xufVxuaDQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlZlcmRhbmFcIjtcbn1cbmg1IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJSb2JvdG87IGZvbnQtc2l6ZTogMjBcIiBweDtcbn1cbnAge1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4vKiBodHRwczovL3d3dy53M3NjaG9vbHMuY29tL2hvd3RvL2hvd3RvX2Nzc190d29fY29sdW1ucy5hc3AgKi9cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIENyZWF0ZSB0d28gZXF1YWwgY29sdW1ucyB0aGF0IGZsb2F0cyBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cbi5jb2x1bW4ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogNDBweDtcbn1cblxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXG4ucm93OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSBtYWtlcyB0aGUgdHdvIGNvbHVtbnMgc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgaW5zdGVhZCBvZiBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb2x1bW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi8qIEZvcm1hdHRpbmcgZm9yIHdpZGdldCB0aXRsZS4gKi9cbi53aWRnZXQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlZlcmRhbmFcIjtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn0iXX0= */"] });


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
SpotifyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpotifyComponent, selectors: [["app-spotify"]], decls: 4, vars: 0, consts: [[1, "widget-title"], [1, "spotify-container"], ["src", "https://open.spotify.com/embed/artist/3Nrfpe0tUJi4K4DXYWgMUX", "frameborder", "0", "allowtransparency", "true", "allow", "encrypted-media"]], template: function SpotifyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Spotify Top 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "iframe", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\n  background-color: lavender;\n}\n\n.widget-title[_ngcontent-%COMP%] {\n  text-align: left;\n  font-family: \"Verdana\";\n  color: black;\n  font-size: 24px;\n  font-weight: 600;\n  padding: 10px;\n}\n\n.spotify-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  border: 0;\n  left: 0;\n  height: 300px;\n  position: relative;\n  top: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwb3RpZnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5QkFBeUI7QUFDekI7RUFDRSwwQkFBMEI7QUFDNUI7QUFFQSxpQ0FBaUM7QUFDakM7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjtBQUVBLGtDQUFrQztBQUNsQztFQUNFLFNBQVM7RUFDVCxPQUFPO0VBQ1AsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztBQUNiIiwiZmlsZSI6InNwb3RpZnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNldCBiYWNrZ3JvdW5kIGNvbG9yICovXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGF2ZW5kZXI7XG59XG5cbi8qIEZvcm1hdHRpbmcgZm9yIHdpZGdldCB0aXRsZS4gKi9cbi53aWRnZXQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogXCJWZXJkYW5hXCI7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4vKiBBZGp1c3QgZm9ybWF0dGluZyBmb3IgaWZyYW1lLiAqL1xuLnNwb3RpZnktY29udGFpbmVyIGlmcmFtZSB7XG4gIGJvcmRlcjogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });


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

class TwitterFeedComponent {
    constructor() { }
    ngOnInit() {
    }
}
TwitterFeedComponent.ɵfac = function TwitterFeedComponent_Factory(t) { return new (t || TwitterFeedComponent)(); };
TwitterFeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TwitterFeedComponent, selectors: [["app-twitter-feed"]], decls: 7, vars: 0, consts: [[1, "widget-title"], ["href", "https://twitter.com/BTS_twt?ref_src=twsrc%5Etfw", 1, "twitter-timeline"]], template: function TwitterFeedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Tweets by BTS_twt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Tweet\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    } }, styles: ["body[_ngcontent-%COMP%] {\n    background-color: lavender;\n  }\n\n.widget-title[_ngcontent-%COMP%] {\n  text-align: left;\n  font-family: \"Verdana\";\n  color: black;\n  font-size: 24px;\n  font-weight: 600;\n  padding: 10px;\n}\nh4[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Verdana\";\n  font-size: 16px;\n}\np[_ngcontent-%COMP%] {\n  color: black;\n  text-align: center;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR3aXR0ZXItZmVlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlCQUF5QjtBQUN6QjtJQUNJLDBCQUEwQjtFQUM1QjtBQUVGLGlDQUFpQztBQUNqQztFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQiIsImZpbGUiOiJ0d2l0dGVyLWZlZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNldCBiYWNrZ3JvdW5kIGNvbG9yICovXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXZlbmRlcjtcbiAgfVxuXG4vKiBGb3JtYXR0aW5nIGZvciB3aWRnZXQgdGl0bGUuICovXG4ud2lkZ2V0LXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1mYW1pbHk6IFwiVmVyZGFuYVwiO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaDQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlZlcmRhbmFcIjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5wIHtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbiJdfQ== */"] });


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