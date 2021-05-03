(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/rowan/Documents/Academic/Spring2021/SWE/Project-3/bts-verse/bts-verse/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0ALR":
    /*!**********************************************!*\
      !*** ./src/app/youtube/youtube.component.ts ***!
      \**********************************************/

    /*! exports provided: YoutubeComponent */

    /***/
    function ALR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "YoutubeComponent", function () {
        return YoutubeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var YoutubeComponent = /*#__PURE__*/function () {
        function YoutubeComponent() {
          _classCallCheck(this, YoutubeComponent);
        }

        _createClass(YoutubeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return YoutubeComponent;
      }();

      YoutubeComponent.ɵfac = function YoutubeComponent_Factory(t) {
        return new (t || YoutubeComponent)();
      };

      YoutubeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: YoutubeComponent,
        selectors: [["app-youtube"]],
        decls: 3,
        vars: 0,
        consts: [[1, "widget-title"], ["width", "550", "height", "380", "src", "https://www.youtube.com/embed?max-results=1&controls=0&showinfo=0&rel=0&listType=user_uploads&list=BANGTANTV", "allowfullscreen", ""]],
        template: function YoutubeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "YouTube");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "iframe", 1);
          }
        },
        styles: ["body[_ngcontent-%COMP%] {\n  background-color: lavender;\n}\n\n.widget-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Verdana\";\n  color: black;\n  text-align: center;\n  font-size: 24px;\n}\n\niframe[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  border: 0;\n}\n.youtube-video-container[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n.youtube-video-container[_ngcontent-%COMP%]::after {\n  display: block;\n  content: \"\";\n  padding-top: 56.25%;\n}\n.youtube-video-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlvdXR1YmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5QkFBeUI7QUFDekI7RUFDRSwwQkFBMEI7QUFDNUI7QUFFQSxpQ0FBaUM7QUFDakM7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUVBLGtDQUFrQztBQUNsQztFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsU0FBUztBQUNYO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0FBQ2QiLCJmaWxlIjoieW91dHViZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2V0IGJhY2tncm91bmQgY29sb3IgKi9cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXZlbmRlcjtcbn1cblxuLyogRm9ybWF0dGluZyBmb3Igd2lkZ2V0IHRpdGxlLiAqL1xuLndpZGdldC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiVmVyZGFuYVwiO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4vKiBBZGp1c3QgZm9ybWF0dGluZyBmb3IgaWZyYW1lLiAqL1xuaWZyYW1lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXI6IDA7XG59XG5cbi55b3V0dWJlLXZpZGVvLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi55b3V0dWJlLXZpZGVvLWNvbnRhaW5lcjo6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29udGVudDogXCJcIjtcbiAgcGFkZGluZy10b3A6IDU2LjI1JTtcbn1cblxuLnlvdXR1YmUtdmlkZW8tY29udGFpbmVyIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "5hVl":
    /*!**********************************************!*\
      !*** ./src/app/nav-bar/nav-bar.component.ts ***!
      \**********************************************/

    /*! exports provided: NavBarComponent */

    /***/
    function hVl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
        return NavBarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NavBarComponent = /*#__PURE__*/function () {
        function NavBarComponent() {
          _classCallCheck(this, NavBarComponent);
        }

        _createClass(NavBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NavBarComponent;
      }();

      NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
        return new (t || NavBarComponent)();
      };

      NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavBarComponent,
        selectors: [["app-nav-bar"]],
        decls: 3,
        vars: 0,
        consts: [[1, "header"], ["src", "assets/images/bts-verse-logo.png", "alt", "Logo"]],
        template: function NavBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " BTS-VERSE\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["body[_ngcontent-%COMP%] {\n  background-color: lavender;\n}\n\n.header[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-shadow: 3px 3px 7px gray;\n  color: black;\n  font-size: 50px;\n  text-align: left;\n  font-family: \"Verdana\";\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5QkFBeUI7QUFDekI7RUFDRSwwQkFBMEI7QUFDNUI7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4QjtBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtBQUNkIiwiZmlsZSI6Im5hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNldCBiYWNrZ3JvdW5kIGNvbG9yICovXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGF2ZW5kZXI7XG59IFxuXG4vKiBGb3JtYXR0aW5nIGZvciBoZWFkZXIuICovXG4uaGVhZGVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggN3B4IGdyYXk7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogXCJWZXJkYW5hXCI7XG59XG5cbi8qIEljb24gaW1hZ2UgZm9ybWF0dGluZy4gKi9cbmltZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcGFkZGluZzogNXB4O1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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

      /***/
    },

    /***/
    "BxSk":
    /*!**************************************************!*\
      !*** ./src/app/wikipedia/wikipedia.component.ts ***!
      \**************************************************/

    /*! exports provided: WikipediaComponent */

    /***/
    function BxSk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WikipediaComponent", function () {
        return WikipediaComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_wikipedia_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/wikipedia-data.service */
      "SrY8");

      var WikipediaComponent = /*#__PURE__*/function () {
        function WikipediaComponent(wikipediaService) {
          _classCallCheck(this, WikipediaComponent);

          this.wikipediaService = wikipediaService;
          this.title = 'holder';
          this.extract_html = 'holder';
          this.timestamp = 'holder';
        }

        _createClass(WikipediaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.wikipediaService.getRequest().subscribe(function (data) {
              _this.title = data.title, _this.extract_html = data.extract_html, _this.timestamp = data.timestamp;
            });
          }
        }]);

        return WikipediaComponent;
      }();

      WikipediaComponent.ɵfac = function WikipediaComponent_Factory(t) {
        return new (t || WikipediaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_wikipedia_data_service__WEBPACK_IMPORTED_MODULE_1__["WikipediaDataService"]));
      };

      WikipediaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WikipediaComponent,
        selectors: [["app-wikipedia"]],
        decls: 8,
        vars: 3,
        consts: [[1, "widget-title"], [1, "article"], [3, "innerHTML"], [1, "timestamp"]],
        template: function WikipediaComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Who Are BTS?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.extract_html, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.timestamp);
          }
        },
        styles: ["body[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.widget-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Verdana\";\n  color: black;\n  font-size: 24px;\n}\n\n.article[_ngcontent-%COMP%] {\n  background-color: white;\n  background: white;\n  color: black;\n  text-align: left;\n  font-size: 16px;\n}\n.timestamp[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpa2lwZWRpYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlCQUF5QjtBQUN6QjtFQUNFLHVCQUF1QjtBQUN6QjtBQUVBLGlDQUFpQztBQUNqQztFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFFQSwyQ0FBMkM7QUFDM0M7RUFDRSx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakIiLCJmaWxlIjoid2lraXBlZGlhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTZXQgYmFja2dyb3VuZCBjb2xvciAqL1xuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4vKiBGb3JtYXR0aW5nIGZvciB3aWRnZXQgdGl0bGUuICovXG4ud2lkZ2V0LXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJWZXJkYW5hXCI7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4vKiBGb3JtYXR0aW5nIGZvciBhcnRpY2xlIGZyb20gV2lraXBlZGlhLiAqL1xuLmFydGljbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4udGltZXN0YW1wIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuIl19 */"]
      });
      /***/
    },

    /***/
    "SrY8":
    /*!*******************************************!*\
      !*** ./src/app/wikipedia-data.service.ts ***!
      \*******************************************/

    /*! exports provided: WikipediaDataService */

    /***/
    function SrY8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WikipediaDataService", function () {
        return WikipediaDataService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var WikipediaDataService = /*#__PURE__*/function () {
        function WikipediaDataService(http) {
          _classCallCheck(this, WikipediaDataService);

          this.http = http;
          this.WIKI_URL = "https://en.wikipedia.org/api/rest_v1/page/summary/BTS";
        }

        _createClass(WikipediaDataService, [{
          key: "getRequest",
          value: function getRequest() {
            return this.http.get(this.WIKI_URL, {
              observe: 'body',
              responseType: 'json'
            });
          }
        }]);

        return WikipediaDataService;
      }();

      WikipediaDataService.ɵfac = function WikipediaDataService_Factory(t) {
        return new (t || WikipediaDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      WikipediaDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: WikipediaDataService,
        factory: WikipediaDataService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./nav-bar/nav-bar.component */
      "5hVl");
      /* harmony import */


      var _youtube_youtube_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./youtube/youtube.component */
      "0ALR");
      /* harmony import */


      var _wikipedia_wikipedia_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./wikipedia/wikipedia.component */
      "BxSk");
      /* harmony import */


      var _spotify_spotify_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./spotify/spotify.component */
      "XAYW");
      /* harmony import */


      var _twitter_feed_twitter_feed_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./twitter-feed/twitter-feed.component */
      "rUXO");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'bts-verse';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 12,
        vars: 0,
        consts: [[1, "row"], [1, "column"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }
        },
        directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _youtube_youtube_component__WEBPACK_IMPORTED_MODULE_2__["YoutubeComponent"], _wikipedia_wikipedia_component__WEBPACK_IMPORTED_MODULE_3__["WikipediaComponent"], _spotify_spotify_component__WEBPACK_IMPORTED_MODULE_4__["SpotifyComponent"], _twitter_feed_twitter_feed_component__WEBPACK_IMPORTED_MODULE_5__["TwitterFeedComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]],
        styles: ["body[_ngcontent-%COMP%] {\n  background-color: lavender;\n  padding: 20px;\n}\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Verdana\";\n}\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Verdana\";\n}\nh4[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Verdana\";\n}\nh5[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Roboto; font-size: 20\" px;\n}\np[_ngcontent-%COMP%] {\n  color: black;\n  text-align: center;\n  font-size: 16px;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.column[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n  padding: 10px;\n}\n\n.row[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n@media screen and (max-width: 600px) {\n  .column[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.widget-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Verdana\";\n  color: black;\n  text-align: center;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLGFBQWE7QUFDZjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVDQUF1QztBQUN6QztBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBRUEsOERBQThEO0FBRTlEO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUEsNERBQTREO0FBQzVEO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixhQUFhO0FBQ2Y7QUFFQSxtQ0FBbUM7QUFDbkM7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7QUFDYjtBQUNBLHVHQUF1RztBQUN2RztFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7QUFFQSxpQ0FBaUM7QUFDakM7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXZlbmRlcjtcbiAgcGFkZGluZzogMjBweDtcbn1cbmgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJWZXJkYW5hXCI7XG59XG5oMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiVmVyZGFuYVwiO1xufVxuaDQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlZlcmRhbmFcIjtcbn1cbmg1IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJSb2JvdG87IGZvbnQtc2l6ZTogMjBcIiBweDtcbn1cbnAge1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4vKiBodHRwczovL3d3dy53M3NjaG9vbHMuY29tL2hvd3RvL2hvd3RvX2Nzc190d29fY29sdW1ucy5hc3AgKi9cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIENyZWF0ZSB0d28gZXF1YWwgY29sdW1ucyB0aGF0IGZsb2F0cyBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cbi5jb2x1bW4ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXG4ucm93OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSBtYWtlcyB0aGUgdHdvIGNvbHVtbnMgc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgaW5zdGVhZCBvZiBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb2x1bW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi8qIEZvcm1hdHRpbmcgZm9yIHdpZGdldCB0aXRsZS4gKi9cbi53aWRnZXQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlZlcmRhbmFcIjtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "XAYW":
    /*!**********************************************!*\
      !*** ./src/app/spotify/spotify.component.ts ***!
      \**********************************************/

    /*! exports provided: SpotifyComponent */

    /***/
    function XAYW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpotifyComponent", function () {
        return SpotifyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SpotifyComponent = /*#__PURE__*/function () {
        function SpotifyComponent() {
          _classCallCheck(this, SpotifyComponent);
        }

        _createClass(SpotifyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SpotifyComponent;
      }();

      SpotifyComponent.ɵfac = function SpotifyComponent_Factory(t) {
        return new (t || SpotifyComponent)();
      };

      SpotifyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SpotifyComponent,
        selectors: [["app-spotify"]],
        decls: 4,
        vars: 0,
        consts: [[1, "widget-title"], ["src", "https://open.spotify.com/embed/artist/3Nrfpe0tUJi4K4DXYWgMUX", "width", "550", "height", "390", "frameborder", "0", "allowtransparency", "true", "allow", "encrypted-media"]],
        template: function SpotifyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Spotify Top 10");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "iframe", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["body[_ngcontent-%COMP%] {\n  background-color: lavender;\n}\n\n.widget-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Verdana\";\n  color: black;\n  font-size: 24px;\n}\n\niframe[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  border: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwb3RpZnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5QkFBeUI7QUFDekI7RUFDRSwwQkFBMEI7QUFDNUI7QUFFQSxpQ0FBaUM7QUFDakM7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBRUEsa0NBQWtDO0FBQ2xDO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxTQUFTO0FBQ1giLCJmaWxlIjoic3BvdGlmeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2V0IGJhY2tncm91bmQgY29sb3IgKi9cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXZlbmRlcjtcbn1cblxuLyogRm9ybWF0dGluZyBmb3Igd2lkZ2V0IHRpdGxlLiAqL1xuLndpZGdldC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiVmVyZGFuYVwiO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLyogQWRqdXN0IGZvcm1hdHRpbmcgZm9yIGlmcmFtZS4gKi9cbmlmcmFtZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyOiAwO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var src_app_wikipedia_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/wikipedia-data.service */
      "SrY8");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _twitter_feed_twitter_feed_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./twitter-feed/twitter-feed.component */
      "rUXO");
      /* harmony import */


      var _youtube_youtube_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./youtube/youtube.component */
      "0ALR");
      /* harmony import */


      var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./nav-bar/nav-bar.component */
      "5hVl");
      /* harmony import */


      var _wikipedia_wikipedia_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./wikipedia/wikipedia.component */
      "BxSk");
      /* harmony import */


      var _spotify_spotify_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./spotify/spotify.component */
      "XAYW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        providers: [src_app_wikipedia_data_service__WEBPACK_IMPORTED_MODULE_0__["WikipediaDataService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _twitter_feed_twitter_feed_component__WEBPACK_IMPORTED_MODULE_5__["TwitterFeedComponent"], _youtube_youtube_component__WEBPACK_IMPORTED_MODULE_6__["YoutubeComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavBarComponent"], _wikipedia_wikipedia_component__WEBPACK_IMPORTED_MODULE_8__["WikipediaComponent"], _spotify_spotify_component__WEBPACK_IMPORTED_MODULE_9__["SpotifyComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "rUXO":
    /*!********************************************************!*\
      !*** ./src/app/twitter-feed/twitter-feed.component.ts ***!
      \********************************************************/

    /*! exports provided: TwitterFeedComponent */

    /***/
    function rUXO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TwitterFeedComponent", function () {
        return TwitterFeedComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TwitterFeedComponent = /*#__PURE__*/function () {
        function TwitterFeedComponent() {
          _classCallCheck(this, TwitterFeedComponent);
        }

        _createClass(TwitterFeedComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TwitterFeedComponent;
      }();

      TwitterFeedComponent.ɵfac = function TwitterFeedComponent_Factory(t) {
        return new (t || TwitterFeedComponent)();
      };

      TwitterFeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TwitterFeedComponent,
        selectors: [["app-twitter-feed"]],
        decls: 7,
        vars: 0,
        consts: [[1, "widget-title"], ["href", "https://twitter.com/BTS_twt?ref_src=twsrc%5Etfw", 1, "twitter-timeline"]],
        template: function TwitterFeedComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }
        },
        styles: ["body[_ngcontent-%COMP%] {\n    background-color: lavender;\n  }\n\n.widget-title[_ngcontent-%COMP%] {\n    text-align: center;\n    font-family: \"Verdana\";\n    color: black;\n    font-size: 24px;\n  }\nh4[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Verdana\";\n}\np[_ngcontent-%COMP%] {\n  color: black;\n  text-align: center;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR3aXR0ZXItZmVlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlCQUF5QjtBQUN6QjtJQUNJLDBCQUEwQjtFQUM1QjtBQUVGLGlDQUFpQztBQUNqQztJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGVBQWU7RUFDakI7QUFFRjtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQiIsImZpbGUiOiJ0d2l0dGVyLWZlZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNldCBiYWNrZ3JvdW5kIGNvbG9yICovXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXZlbmRlcjtcbiAgfVxuXG4vKiBGb3JtYXR0aW5nIGZvciB3aWRnZXQgdGl0bGUuICovXG4ud2lkZ2V0LXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IFwiVmVyZGFuYVwiO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cblxuaDQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlZlcmRhbmFcIjtcbn1cblxucCB7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map