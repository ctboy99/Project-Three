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
YoutubeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YoutubeComponent, selectors: [["app-youtube"]], decls: 8, vars: 0, consts: [[1, "widget-title"], ["href", "https://www.youtube.com/channel/UCLkAepWjdylmXSltofFvsYQ"], [1, "youtube-video-container"], ["src", "https://www.youtube.com/embed?max-results=1&controls=0&showinfo=0&rel=0&listType=user_uploads&list=BANGTANTV", "allowfullscreen", ""], [1, "timestamp"]], template: function YoutubeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "YouTube");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "iframe", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Updated on \"Holder\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: 3px 3px 10px gray;\n  border-radius: 10px;\n}\n\n.widget-title[_ngcontent-%COMP%] {\n  text-align: left;\n  font-family: \"Verdana\", sans-serif;\n  color: #3a3a3a;\n  font-size: 36px;\n  padding: 10px;\n  text-shadow: 2px 2px 4px silver;\n  text-decoration: none;\n  letter-spacing: 1.5px;\n  font-weight: lighter;\n}\n.widget-title[_ngcontent-%COMP%]:hover {\n  text-shadow: 2px 2px 4px #8878c3;\n}\na[_ngcontent-%COMP%] {\n  text-align: inherit;\n  font-family: inherit;\n  color: inherit;\n  font-size: inherit;\n  padding: inherit;\n  padding-top: inherit;\n  padding-bottom: inherit;\n  text-shadow: inherit;\n  text-decoration: inherit;\n}\na[_ngcontent-%COMP%]:hover {\n  text-shadow: inherit;\n}\n\n.timestamp[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 10px;\n  padding: 10px;\n}\n.youtube-video-container[_ngcontent-%COMP%]::after {\n  display: block;\n  content: \"\";\n  padding-top: 56.25%;\n}\n\n.youtube-video-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  border: 0;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlvdXR1YmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5QkFBeUI7QUFDekI7RUFDRSx1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjtBQUVBLGlDQUFpQztBQUNqQztFQUNFLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsd0JBQXdCO0FBQzFCO0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGFBQWE7QUFDZjtBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7QUFFQSxrQ0FBa0M7QUFDbEM7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7QUFDYiIsImZpbGUiOiJ5b3V0dWJlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTZXQgYmFja2dyb3VuZCBjb2xvciAqL1xuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLyogRm9ybWF0dGluZyBmb3Igd2lkZ2V0IHRpdGxlLiAqL1xuLndpZGdldC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBcIlZlcmRhbmFcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMzYTNhM2E7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHNpbHZlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG4ud2lkZ2V0LXRpdGxlOmhvdmVyIHtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4ICM4ODc4YzM7XG59XG5cbmEge1xuICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgcGFkZGluZzogaW5oZXJpdDtcbiAgcGFkZGluZy10b3A6IGluaGVyaXQ7XG4gIHBhZGRpbmctYm90dG9tOiBpbmhlcml0O1xuICB0ZXh0LXNoYWRvdzogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xufVxuXG5hOmhvdmVyIHtcbiAgdGV4dC1zaGFkb3c6IGluaGVyaXQ7XG59XG5cbi8qIFRpbWVzdGFtcCBmb3JtYXR0aW5nLiAqL1xuLnRpbWVzdGFtcCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi55b3V0dWJlLXZpZGVvLWNvbnRhaW5lcjo6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29udGVudDogXCJcIjtcbiAgcGFkZGluZy10b3A6IDU2LjI1JTtcbn1cblxuLyogQWRqdXN0IGZvcm1hdHRpbmcgZm9yIGlmcmFtZS4gKi9cbi55b3V0dWJlLXZpZGVvLWNvbnRhaW5lciBpZnJhbWUge1xuICBib3JkZXI6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"] });


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
    } }, styles: ["body[_ngcontent-%COMP%] {\n  background-color: lavender;\n}\n\n.header[_ngcontent-%COMP%] {\n  text-shadow: 3px 3px 7px gray;\n  color: black;\n  font-size: 50px;\n  text-align: left;\n  font-family: \"Optima\";\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5QkFBeUI7QUFDekI7RUFDRSwwQkFBMEI7QUFDNUI7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCO0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0FBQ2QiLCJmaWxlIjoibmF2LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2V0IGJhY2tncm91bmQgY29sb3IgKi9cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXZlbmRlcjtcbn0gXG5cbi8qIEZvcm1hdHRpbmcgZm9yIGhlYWRlci4gKi9cbi5oZWFkZXIge1xuICB0ZXh0LXNoYWRvdzogM3B4IDNweCA3cHggZ3JheTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDUwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBcIk9wdGltYVwiO1xufVxuXG4vKiBJY29uIGltYWdlIGZvcm1hdHRpbmcuICovXG5pbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cbiJdfQ== */"] });


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
WikipediaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WikipediaComponent, selectors: [["app-wikipedia"]], decls: 11, vars: 3, consts: [[1, "widget-title"], ["href", "https://en.wikipedia.org/wiki/BTS"], [1, "summary"], [1, "article"], [1, "text-wrap", 3, "src"], [3, "innerHTML"], [1, "timestamp"]], template: function WikipediaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "BTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "blockquote", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "From Wikipedia, the free encyclopedia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.thumbnail.source, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.extract_html, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Retrieved on ", ctx.timestamp, "");
    } }, styles: ["body[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: 3px 3px 10px gray;\n  border-radius: 10px;\n}\n\n.widget-title[_ngcontent-%COMP%] {\n  text-align: left;\n  font-family: \"Verdana\", sans-serif;\n  color: #3a3a3a;\n  font-size: 36px;\n  padding: 10px;\n  text-shadow: 2px 2px 4px silver;\n  text-decoration: none;\n  letter-spacing: 1.5px;\n  font-weight: lighter;\n}\n.widget-title[_ngcontent-%COMP%]:hover {\n  text-shadow: 2px 2px 4px #8878c3;\n}\na[_ngcontent-%COMP%] {\n  text-align: inherit;\n  font-family: inherit;\n  color: inherit;\n  font-size: inherit;\n  padding: inherit;\n  padding-top: inherit;\n  padding-bottom: inherit;\n  text-shadow: inherit;\n  text-decoration: inherit;\n}\na[_ngcontent-%COMP%]:hover {\n  text-shadow: inherit;\n}\n\n.article[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n  text-align: justify;\n  font-size: 16px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.text-wrap[_ngcontent-%COMP%] {\n  float: right;\n  margin: 5px;\n}\n\n.timestamp[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 10px;\n  padding: 10px;\n}\n.summary[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 10px;\n  padding-left: 20px;\n  padding-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpa2lwZWRpYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlCQUF5QjtBQUN6QjtFQUNFLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCO0FBRUEsaUNBQWlDO0FBQ2pDO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtDQUFrQztFQUNsQyxjQUFjO0VBQ2QsZUFBZTtFQUNmLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGdDQUFnQztBQUNsQztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQix3QkFBd0I7QUFDMUI7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUNBLDJDQUEyQztBQUMzQztFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBRUEsK0NBQStDO0FBQy9DO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUVBLDBCQUEwQjtBQUMxQjtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsYUFBYTtBQUNmO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckIiLCJmaWxlIjoid2lraXBlZGlhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTZXQgYmFja2dyb3VuZCBjb2xvciAqL1xuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLyogRm9ybWF0dGluZyBmb3Igd2lkZ2V0IHRpdGxlLiAqL1xuLndpZGdldC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBcIlZlcmRhbmFcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMzYTNhM2E7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHNpbHZlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG4ud2lkZ2V0LXRpdGxlOmhvdmVyIHtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4ICM4ODc4YzM7XG59XG5cbmEge1xuICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgcGFkZGluZzogaW5oZXJpdDtcbiAgcGFkZGluZy10b3A6IGluaGVyaXQ7XG4gIHBhZGRpbmctYm90dG9tOiBpbmhlcml0O1xuICB0ZXh0LXNoYWRvdzogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xufVxuXG5hOmhvdmVyIHtcbiAgdGV4dC1zaGFkb3c6IGluaGVyaXQ7XG59XG4vKiBGb3JtYXR0aW5nIGZvciBhcnRpY2xlIGZyb20gV2lraXBlZGlhLiAqL1xuLmFydGljbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLyogRm9ybWF0dGluZyBmb3IgdGhlIGltYWdlJ3MgdGV4dCB3cmFwcGluZy4gICovXG4udGV4dC13cmFwIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDVweDtcbn1cblxuLyogVGltZXN0YW1wIGZvcm1hdHRpbmcuICovXG4udGltZXN0YW1wIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnN1bW1hcnkge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbiJdfQ== */"] });


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
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _youtube_youtube_component__WEBPACK_IMPORTED_MODULE_2__["YoutubeComponent"], _wikipedia_wikipedia_component__WEBPACK_IMPORTED_MODULE_3__["WikipediaComponent"], _spotify_spotify_component__WEBPACK_IMPORTED_MODULE_4__["SpotifyComponent"], _twitter_feed_twitter_feed_component__WEBPACK_IMPORTED_MODULE_5__["TwitterFeedComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], styles: ["body[_ngcontent-%COMP%] {\n  background-color: lavender;\n  padding: 25px;\n}\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Verdana\";\n}\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Verdana\";\n}\nh4[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Verdana\";\n}\nh5[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Roboto; font-size: 20\" px;\n}\np[_ngcontent-%COMP%] {\n  color: black;\n  text-align: center;\n  font-size: 16px;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.column[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n  padding: 25px;\n}\n\n.row[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n@media screen and (max-width: 600px) {\n  .column[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.widget-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Verdana\";\n  color: black;\n  text-align: center;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLGFBQWE7QUFDZjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVDQUF1QztBQUN6QztBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBRUEsOERBQThEO0FBRTlEO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUEsNERBQTREO0FBQzVEO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixhQUFhO0FBQ2Y7QUFFQSxtQ0FBbUM7QUFDbkM7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7QUFDYjtBQUNBLHVHQUF1RztBQUN2RztFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7QUFFQSxpQ0FBaUM7QUFDakM7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXZlbmRlcjtcbiAgcGFkZGluZzogMjVweDtcbn1cbmgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJWZXJkYW5hXCI7XG59XG5oMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiVmVyZGFuYVwiO1xufVxuaDQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlZlcmRhbmFcIjtcbn1cbmg1IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJSb2JvdG87IGZvbnQtc2l6ZTogMjBcIiBweDtcbn1cbnAge1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4vKiBodHRwczovL3d3dy53M3NjaG9vbHMuY29tL2hvd3RvL2hvd3RvX2Nzc190d29fY29sdW1ucy5hc3AgKi9cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIENyZWF0ZSB0d28gZXF1YWwgY29sdW1ucyB0aGF0IGZsb2F0cyBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cbi5jb2x1bW4ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMjVweDtcbn1cblxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXG4ucm93OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSBtYWtlcyB0aGUgdHdvIGNvbHVtbnMgc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgaW5zdGVhZCBvZiBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb2x1bW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi8qIEZvcm1hdHRpbmcgZm9yIHdpZGdldCB0aXRsZS4gKi9cbi53aWRnZXQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlZlcmRhbmFcIjtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn0iXX0= */"] });


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
SpotifyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpotifyComponent, selectors: [["app-spotify"]], decls: 8, vars: 0, consts: [[1, "widget-title"], ["href", "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX"], [1, "spotify-container"], ["src", "https://open.spotify.com/embed/artist/3Nrfpe0tUJi4K4DXYWgMUX", "frameborder", "0", "allowtransparency", "true", "allow", "encrypted-media"], [1, "timestamp"]], template: function SpotifyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Spotify");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "iframe", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Updated on \"Holder\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: 3px 3px 10px gray;\n  border-radius: 10px;\n}\n\n.widget-title[_ngcontent-%COMP%] {\n  text-align: left;\n  font-family: \"Verdana\", sans-serif;\n  color: #3a3a3a;\n  font-size: 36px;\n  padding: 10px;\n  text-shadow: 2px 2px 4px silver;\n  text-decoration: none;\n  letter-spacing: 1.5px;\n  font-weight: lighter;\n}\n.widget-title[_ngcontent-%COMP%]:hover {\n  text-shadow: 2px 2px 4px #8878c3;\n}\na[_ngcontent-%COMP%] {\n  text-align: inherit;\n  font-family: inherit;\n  color: inherit;\n  font-size: inherit;\n  padding: inherit;\n  padding-top: inherit;\n  padding-bottom: inherit;\n  text-shadow: inherit;\n  text-decoration: inherit;\n  letter-spacing: inherit;\n  font-weight: inherit;\n}\na[_ngcontent-%COMP%]:hover {\n  text-shadow: inherit;\n}\n\n.spotify-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  border: 0;\n  left: 0;\n  height: 300px;\n  position: relative;\n  top: 0;\n  width: 100%;\n}\n\n.timestamp[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 10px;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwb3RpZnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5QkFBeUI7QUFDekI7RUFDRSx1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjtBQUVBLGlDQUFpQztBQUNqQztFQUNFLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUVBLGtDQUFrQztBQUNsQztFQUNFLFNBQVM7RUFDVCxPQUFPO0VBQ1AsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztBQUNiO0FBRUEsMEJBQTBCO0FBQzFCO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0FBQ2YiLCJmaWxlIjoic3BvdGlmeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2V0IGJhY2tncm91bmQgY29sb3IgKi9cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi8qIEZvcm1hdHRpbmcgZm9yIHdpZGdldCB0aXRsZS4gKi9cbi53aWRnZXQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogXCJWZXJkYW5hXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjM2EzYTNhO1xuICBmb250LXNpemU6IDM2cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCBzaWx2ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cblxuLndpZGdldC10aXRsZTpob3ZlciB7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCAjODg3OGMzO1xufVxuXG5hIHtcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIHBhZGRpbmc6IGluaGVyaXQ7XG4gIHBhZGRpbmctdG9wOiBpbmhlcml0O1xuICBwYWRkaW5nLWJvdHRvbTogaW5oZXJpdDtcbiAgdGV4dC1zaGFkb3c6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbiAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xufVxuXG5hOmhvdmVyIHtcbiAgdGV4dC1zaGFkb3c6IGluaGVyaXQ7XG59XG5cbi8qIEFkanVzdCBmb3JtYXR0aW5nIGZvciBpZnJhbWUuICovXG4uc3BvdGlmeS1jb250YWluZXIgaWZyYW1lIHtcbiAgYm9yZGVyOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIFRpbWVzdGFtcCBmb3JtYXR0aW5nLiAqL1xuLnRpbWVzdGFtcCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */"] });


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
TwitterFeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TwitterFeedComponent, selectors: [["app-twitter-feed"]], decls: 9, vars: 0, consts: [[1, "widget-title"], ["href", "https://twitter.com/BTS_twt"], ["href", "https://twitter.com/BTS_twt?ref_src=twsrc%5Etfw", 1, "twitter-timeline"]], template: function TwitterFeedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Tweets by BTS_twt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Tweet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: 3px 3px 10px gray;\n  border-radius: 10px;\n}\n\n.widget-title[_ngcontent-%COMP%] {\n  text-align: left;\n  font-family: \"Verdana\", sans-serif;\n  color: #3a3a3a;\n  font-size: 36px;\n  padding: 10px;\n  text-shadow: 2px 2px 4px silver;\n  text-decoration: none;\n  letter-spacing: 1.5px;\n  font-weight: lighter;\n}\n.widget-title[_ngcontent-%COMP%]:hover {\n  text-shadow: 2px 2px 4px #8878c3;\n}\na[_ngcontent-%COMP%] {\n  text-align: inherit;\n  font-family: inherit;\n  color: inherit;\n  font-size: inherit;\n  padding: inherit;\n  padding-top: inherit;\n  padding-bottom: inherit;\n  text-shadow: inherit;\n  text-decoration: inherit;\n}\na[_ngcontent-%COMP%]:hover {\n  text-shadow: inherit;\n}\nh4[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Verdana\";\n  font-size: 16px;\n}\np[_ngcontent-%COMP%] {\n  color: black;\n  text-align: center;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR3aXR0ZXItZmVlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlCQUF5QjtBQUN6QjtFQUNFLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCO0FBRUEsaUNBQWlDO0FBQ2pDO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtDQUFrQztFQUNsQyxjQUFjO0VBQ2QsZUFBZTtFQUNmLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGdDQUFnQztBQUNsQztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQix3QkFBd0I7QUFDMUI7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakIiLCJmaWxlIjoidHdpdHRlci1mZWVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTZXQgYmFja2dyb3VuZCBjb2xvciAqL1xuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLyogRm9ybWF0dGluZyBmb3Igd2lkZ2V0IHRpdGxlLiAqL1xuLndpZGdldC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBcIlZlcmRhbmFcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMzYTNhM2E7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHNpbHZlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG4ud2lkZ2V0LXRpdGxlOmhvdmVyIHtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4ICM4ODc4YzM7XG59XG5cbmEge1xuICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgcGFkZGluZzogaW5oZXJpdDtcbiAgcGFkZGluZy10b3A6IGluaGVyaXQ7XG4gIHBhZGRpbmctYm90dG9tOiBpbmhlcml0O1xuICB0ZXh0LXNoYWRvdzogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xufVxuXG5hOmhvdmVyIHtcbiAgdGV4dC1zaGFkb3c6IGluaGVyaXQ7XG59XG5cbmg0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJWZXJkYW5hXCI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxucCB7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4iXX0= */"] });


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