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
        decls: 10,
        vars: 0,
        consts: [[1, "widget-title"], ["href", "https://www.youtube.com/channel/UCLkAepWjdylmXSltofFvsYQ", "title", "BTS's YouTube Page"], [1, "arrow"], [1, "youtube-video-container"], ["src", "https://www.youtube.com/embed?max-results=1&controls=0&showinfo=0&rel=0&listType=user_uploads&list=BANGTANTV", "allowfullscreen", ""], [1, "timestamp"]],
        template: function YoutubeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "YouTube ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "var", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u2197");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "iframe", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Updated on \"Holder\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["body[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: 3px 3px 10px gray;\n  border-radius: 10px;\n}\n\n.widget-title[_ngcontent-%COMP%] {\n  text-align: left;\n  font-family: \"Verdana\", sans-serif;\n  color: #3a3a3a;\n  font-size: 36px;\n  padding: 10px;\n  padding-left: 20px;\n  text-decoration: none;\n  letter-spacing: 1.5px;\n  font-weight: lighter;\n}\n\n.timestamp[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 10px;\n  padding: 10px;\n}\n.youtube-video-container[_ngcontent-%COMP%]::after {\n  display: block;\n  content: \"\";\n  padding-top: 56.25%;\n}\n\n.youtube-video-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  border: 0;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  clear: right;\n  float: right;\n  padding-right: 10px;\n  text-shadow: 2px 2px 4px silver;\n  text-decoration: none;\n  font-family: \"Verdana\", sans-serif;\n  color: #3a3a3a;\n}\n.arrow[_ngcontent-%COMP%]:hover {\n  text-shadow: 2px 2px 4px #8878c3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlvdXR1YmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5QkFBeUI7QUFDekI7RUFDRSx1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjtBQUVBLGlDQUFpQztBQUNqQztFQUNFLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCO0FBRUEsMEJBQTBCO0FBQzFCO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0FBQ2Y7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCO0FBRUEsa0NBQWtDO0FBQ2xDO0VBQ0UsU0FBUztFQUNULFlBQVk7RUFDWixPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0FBQ2I7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiwrQkFBK0I7RUFDL0IscUJBQXFCO0VBQ3JCLGtDQUFrQztFQUNsQyxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEMiLCJmaWxlIjoieW91dHViZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2V0IGJhY2tncm91bmQgY29sb3IgKi9cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi8qIEZvcm1hdHRpbmcgZm9yIHdpZGdldCB0aXRsZS4gKi9cbi53aWRnZXQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogXCJWZXJkYW5hXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjM2EzYTNhO1xuICBmb250LXNpemU6IDM2cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG4vKiBUaW1lc3RhbXAgZm9ybWF0dGluZy4gKi9cbi50aW1lc3RhbXAge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ueW91dHViZS12aWRlby1jb250YWluZXI6OmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBhZGRpbmctdG9wOiA1Ni4yNSU7XG59XG5cbi8qIEFkanVzdCBmb3JtYXR0aW5nIGZvciBpZnJhbWUuICovXG4ueW91dHViZS12aWRlby1jb250YWluZXIgaWZyYW1lIHtcbiAgYm9yZGVyOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLyogQXJyb3cgZm9ybWF0dGluZyAqL1xuLmFycm93IHtcbiAgY2xlYXI6IHJpZ2h0O1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCBzaWx2ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFwiVmVyZGFuYVwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzNhM2EzYTtcbn1cblxuLmFycm93OmhvdmVyIHtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4ICM4ODc4YzM7XG59Il19 */"]
      });
      /***/
    },

    /***/
    "2zaP":
    /*!********************************************************!*\
      !*** ./src/app/twitter-feed/twitterservice.service.ts ***!
      \********************************************************/

    /*! exports provided: TwitterService */

    /***/
    function zaP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TwitterService", function () {
        return TwitterService;
      });
      /* harmony import */


      var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/internal/operators/map */
      "q3Kh");
      /* harmony import */


      var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var TwitterService = /*#__PURE__*/function () {
        function TwitterService(http) {
          _classCallCheck(this, TwitterService);

          this.http = http;
          this.api_url = 'http://localhost:3000';
        }

        _createClass(TwitterService, [{
          key: "getTimeline",
          value: function getTimeline() {
            return this.http.get(this.api_url + '/user_timeline', {
              responseType: 'json'
            }).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getMentions",
          value: function getMentions() {
            return this.http.get(this.api_url + '/mentions_timeline').pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
              return data;
            }));
          }
        }]);

        return TwitterService;
      }();

      TwitterService.ɵfac = function TwitterService_Factory(t) {
        return new (t || TwitterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      TwitterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: TwitterService,
        factory: TwitterService.ɵfac,
        providedIn: 'root'
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
        decls: 16,
        vars: 0,
        consts: [[1, "header"], ["src", "assets/images/bts-verse-logo.png", "alt", "Logo", 1, "logo"], [1, "icon-bar"], ["href", "https://twitter.com/bts_twt"], ["src", "assets/images/twitter.png", "alt", "BTS's Twitter", 1, "icon"], ["href", "https://www.facebook.com/bangtan.official/"], ["src", "assets/images/facebook.png", "alt", "BTS's Facebook", 1, "icon"], ["href", "https://www.instagram.com/bts.bighitofficial/"], ["src", "assets/images/instagram.png", "alt", "BTS's Instagram", 1, "icon"], ["href", "http://soundcloud.com/bangtan"], ["src", "assets/images/soundcloud.png", "alt", "BTS's SoundCloud", 1, "icon"], ["href", "https://www.youtube.com/user/BANGTANTV"], ["src", "assets/images/youtube.png", "alt", "BTS's Youtube", 1, "icon"], ["href", "https://www.tiktok.com/@bts_official_bighit"], ["src", "assets/images/tiktok.png", "alt", "BTS's Tiktok", 1, "icon"]],
        template: function NavBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " BTS-VERSE ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["body[_ngcontent-%COMP%] {\n  background-color: lavender;\n}\n\n.header[_ngcontent-%COMP%] {\n  color: #252525;\n  font-size: 60px;\n  text-align: left;\n  font-family: \"Verdana\";\n  letter-spacing: 5px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  padding: 5px;\n}\n.icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  margin: 10px;\n}\n.icon[_ngcontent-%COMP%]:hover {\n  box-shadow: 3px 3px 7px gray;\n  border-radius: 50px;\n}\n.icon-bar[_ngcontent-%COMP%] {\n  float: right;\n  clear: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5QkFBeUI7QUFDekI7RUFDRSwwQkFBMEI7QUFDNUI7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCO0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtBQUNkO0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkIiwiZmlsZSI6Im5hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNldCBiYWNrZ3JvdW5kIGNvbG9yICovXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGF2ZW5kZXI7XG59XG5cbi8qIEZvcm1hdHRpbmcgZm9yIGhlYWRlci4gKi9cbi5oZWFkZXIge1xuICBjb2xvcjogIzI1MjUyNTtcbiAgZm9udC1zaXplOiA2MHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogXCJWZXJkYW5hXCI7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG59XG5cbi8qIEljb24gaW1hZ2UgZm9ybWF0dGluZy4gKi9cbi5sb2dvIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5pY29uIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uaWNvbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggN3B4IGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbi5pY29uLWJhciB7XG4gIGZsb2F0OiByaWdodDtcbiAgY2xlYXI6IHJpZ2h0O1xufVxuIl19 */"]
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
          /** Default values are set to errors in case the HTTP request is unsuccessful. */

          this.extract_html = "error - unable to retrieve data";
          this.timestamp = "error - unable to retrieve data";
          this.thumbnail = {
            source: "error - unable to retrieve data",
            width: 0,
            height: 0
          };
        }

        _createClass(WikipediaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            /** Get the request from the wikipedia service and assign data to the Config interface for parsing. */
            this.wikipediaService.getRequest().subscribe(function (data) {
              _this.thumbnail = data.thumbnail, _this.extract_html = data.extract_html, _this.timestamp = data.timestamp;
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
        decls: 13,
        vars: 3,
        consts: [[1, "widget-title"], ["href", "https://en.wikipedia.org/wiki/BTS", "title", "BTS's Wikipedia Page"], [1, "arrow"], [1, "summary"], [1, "article"], ["alt", "Image of BTS", 1, "text-wrap", 3, "src"], [3, "innerHTML"], [1, "timestamp"]],
        template: function WikipediaComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " About BTS ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "var", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u2197");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "blockquote", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "From Wikipedia, the free encyclopedia");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.thumbnail.source, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.extract_html, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Retrieved on ", ctx.timestamp, "");
          }
        },
        styles: ["body[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: 3px 3px 10px gray;\n  border-radius: 10px;\n}\n\n.widget-title[_ngcontent-%COMP%] {\n  text-align: left;\n  font-family: \"Verdana\", sans-serif;\n  color: #3a3a3a;\n  font-size: 36px;\n  padding: 10px;\n  padding-left: 20px;\n  text-decoration: none;\n  letter-spacing: 1.5px;\n  font-weight: lighter;\n}\na[_ngcontent-%COMP%] {\n  text-align: inherit;\n  font-family: inherit;\n  color: inherit;\n  font-size: inherit;\n  padding: inherit;\n  padding-top: inherit;\n  padding-bottom: inherit;\n  text-shadow: inherit;\n  text-decoration: inherit;\n}\na[_ngcontent-%COMP%]:hover {\n  text-shadow: inherit;\n}\n\n.article[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n  text-align: justify;\n  font-size: 16px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.text-wrap[_ngcontent-%COMP%] {\n  float: right;\n  margin: 5px;\n}\n\n.timestamp[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 10px;\n  padding: 10px;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  clear: right;\n  float: right;\n  padding-right: 10px;\n  text-shadow: 2px 2px 4px silver;\n  text-decoration: none;\n  font-family: \"Verdana\", sans-serif;\n  color: #3a3a3a;\n}\n.arrow[_ngcontent-%COMP%]:hover {\n  text-shadow: 2px 2px 4px #8878c3;\n}\n.summary[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 10px;\n  padding-left: 20px;\n  padding-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpa2lwZWRpYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlCQUF5QjtBQUN6QjtFQUNFLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCO0FBRUEsaUNBQWlDO0FBQ2pDO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtDQUFrQztFQUNsQyxjQUFjO0VBQ2QsZUFBZTtFQUNmLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsd0JBQXdCO0FBQzFCO0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFDQSwyQ0FBMkM7QUFDM0M7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUVBLCtDQUErQztBQUMvQztFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGFBQWE7QUFDZjtBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQixxQkFBcUI7RUFDckIsa0NBQWtDO0VBQ2xDLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGdDQUFnQztBQUNsQztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6Indpa2lwZWRpYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2V0IGJhY2tncm91bmQgY29sb3IgKi9cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi8qIEZvcm1hdHRpbmcgZm9yIHdpZGdldCB0aXRsZS4gKi9cbi53aWRnZXQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogXCJWZXJkYW5hXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjM2EzYTNhO1xuICBmb250LXNpemU6IDM2cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG5hIHtcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIHBhZGRpbmc6IGluaGVyaXQ7XG4gIHBhZGRpbmctdG9wOiBpbmhlcml0O1xuICBwYWRkaW5nLWJvdHRvbTogaW5oZXJpdDtcbiAgdGV4dC1zaGFkb3c6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbn1cblxuYTpob3ZlciB7XG4gIHRleHQtc2hhZG93OiBpbmhlcml0O1xufVxuLyogRm9ybWF0dGluZyBmb3IgYXJ0aWNsZSBmcm9tIFdpa2lwZWRpYS4gKi9cbi5hcnRpY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi8qIEZvcm1hdHRpbmcgZm9yIHRoZSBpbWFnZSdzIHRleHQgd3JhcHBpbmcuICAqL1xuLnRleHQtd3JhcCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi8qIFRpbWVzdGFtcCBmb3JtYXR0aW5nLiAqL1xuLnRpbWVzdGFtcCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi8qIEFycm93IGZvcm1hdHRpbmcgKi9cbi5hcnJvdyB7XG4gIGNsZWFyOiByaWdodDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggc2lsdmVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBcIlZlcmRhbmFcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMzYTNhM2E7XG59XG5cbi5hcnJvdzpob3ZlciB7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCAjODg3OGMzO1xufVxuXG4uc3VtbWFyeSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuIl19 */"]
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


      var _spotify_spotify_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./spotify/spotify.component */
      "XAYW");
      /* harmony import */


      var _wikipedia_wikipedia_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./wikipedia/wikipedia.component */
      "BxSk");
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-spotify");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-wikipedia");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-twitter-feed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _youtube_youtube_component__WEBPACK_IMPORTED_MODULE_2__["YoutubeComponent"], _spotify_spotify_component__WEBPACK_IMPORTED_MODULE_3__["SpotifyComponent"], _wikipedia_wikipedia_component__WEBPACK_IMPORTED_MODULE_4__["WikipediaComponent"], _twitter_feed_twitter_feed_component__WEBPACK_IMPORTED_MODULE_5__["TwitterFeedComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]],
        styles: ["body[_ngcontent-%COMP%] {\n  background-color: lavender;\n  padding: 25px;\n}\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Verdana\";\n}\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Verdana\";\n}\nh4[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Verdana\";\n}\nh5[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Roboto; font-size: 20\" px;\n}\np[_ngcontent-%COMP%] {\n  color: black;\n  text-align: center;\n  font-size: 16px;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.column[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n  padding: 25px;\n}\n\n.row[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n@media screen and (max-width: 600px) {\n  .column[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.widget-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Verdana\";\n  color: black;\n  text-align: center;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLGFBQWE7QUFDZjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVDQUF1QztBQUN6QztBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBRUEsOERBQThEO0FBRTlEO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUEsNERBQTREO0FBQzVEO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixhQUFhO0FBQ2Y7QUFFQSxtQ0FBbUM7QUFDbkM7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7QUFDYjtBQUNBLHVHQUF1RztBQUN2RztFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7QUFFQSxpQ0FBaUM7QUFDakM7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXZlbmRlcjtcbiAgcGFkZGluZzogMjVweDtcbn1cbmgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJWZXJkYW5hXCI7XG59XG5oMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiVmVyZGFuYVwiO1xufVxuaDQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlZlcmRhbmFcIjtcbn1cbmg1IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJSb2JvdG87IGZvbnQtc2l6ZTogMjBcIiBweDtcbn1cbnAge1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4vKiBodHRwczovL3d3dy53M3NjaG9vbHMuY29tL2hvd3RvL2hvd3RvX2Nzc190d29fY29sdW1ucy5hc3AgKi9cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIENyZWF0ZSB0d28gZXF1YWwgY29sdW1ucyB0aGF0IGZsb2F0cyBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cbi5jb2x1bW4ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMjVweDtcbn1cblxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXG4ucm93OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSBtYWtlcyB0aGUgdHdvIGNvbHVtbnMgc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgaW5zdGVhZCBvZiBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb2x1bW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi8qIEZvcm1hdHRpbmcgZm9yIHdpZGdldCB0aXRsZS4gKi9cbi53aWRnZXQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlZlcmRhbmFcIjtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn0iXX0= */"]
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
        decls: 10,
        vars: 0,
        consts: [[1, "widget-title"], ["href", "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX", "title", "BTS's Spotify Page"], [1, "arrow"], [1, "spotify-container"], ["src", "https://open.spotify.com/embed/artist/3Nrfpe0tUJi4K4DXYWgMUX", "frameborder", "0", "allowtransparency", "true", "allow", "encrypted-media"], [1, "timestamp"]],
        template: function SpotifyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Spotify ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "var", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u2197");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "iframe", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Updated on \"Holder\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["body[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: 3px 3px 10px gray;\n  border-radius: 10px;\n}\n\n.widget-title[_ngcontent-%COMP%] {\n  text-align: left;\n  font-family: \"Verdana\", sans-serif;\n  color: #3a3a3a;\n  font-size: 36px;\n  padding: 10px;\n  padding-left: 20px;\n  text-decoration: none;\n  letter-spacing: 1.5px;\n  font-weight: lighter;\n}\n\n.spotify-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  border: 0;\n  left: 0;\n  height: 300px;\n  position: relative;\n  top: 0;\n  width: 100%;\n}\n\n.timestamp[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 10px;\n  padding: 10px;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  clear: right;\n  float: right;\n  padding-right: 10px;\n  text-shadow: 2px 2px 4px silver;\n  text-decoration: none;\n  font-family: \"Verdana\", sans-serif;\n  color: #3a3a3a;\n}\n.arrow[_ngcontent-%COMP%]:hover {\n  text-shadow: 2px 2px 4px #8878c3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwb3RpZnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5QkFBeUI7QUFDekI7RUFDRSx1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjtBQUVBLGlDQUFpQztBQUNqQztFQUNFLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCO0FBRUEsa0NBQWtDO0FBQ2xDO0VBQ0UsU0FBUztFQUNULE9BQU87RUFDUCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0FBQ2I7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGFBQWE7QUFDZjtBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQixxQkFBcUI7RUFDckIsa0NBQWtDO0VBQ2xDLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGdDQUFnQztBQUNsQyIsImZpbGUiOiJzcG90aWZ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTZXQgYmFja2dyb3VuZCBjb2xvciAqL1xuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLyogRm9ybWF0dGluZyBmb3Igd2lkZ2V0IHRpdGxlLiAqL1xuLndpZGdldC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBcIlZlcmRhbmFcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMzYTNhM2E7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5cbi8qIEFkanVzdCBmb3JtYXR0aW5nIGZvciBpZnJhbWUuICovXG4uc3BvdGlmeS1jb250YWluZXIgaWZyYW1lIHtcbiAgYm9yZGVyOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIFRpbWVzdGFtcCBmb3JtYXR0aW5nLiAqL1xuLnRpbWVzdGFtcCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi8qIEFycm93IGZvcm1hdHRpbmcgKi9cbi5hcnJvdyB7XG4gIGNsZWFyOiByaWdodDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggc2lsdmVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBcIlZlcmRhbmFcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMzYTNhM2E7XG59XG5cbi5hcnJvdzpob3ZlciB7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCAjODg3OGMzO1xufSJdfQ== */"]
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

      var appRoutes = [{
        path: 'tweets',
        component: _twitter_feed_twitter_feed_component__WEBPACK_IMPORTED_MODULE_5__["TwitterFeedComponent"]
      }, {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      }];

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
      /* harmony import */


      var _twitterservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./twitterservice.service */
      "2zaP");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function TwitterFeedComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TwitterFeedComponent_div_11_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var tweets_r3 = ctx.$implicit;
          var i_r4 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Tweet ", i_r4 + 1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", tweets_r3.user.profile_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tweets_r3.user.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("@", tweets_r3.user.screen_name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Tweeted: ", tweets_r3.full_text, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tweets_r3.favorite_count);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tweets_r3.retweet_count, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Created at: ", tweets_r3.created_at, "");
        }
      }

      function TwitterFeedComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TwitterFeedComponent_div_11_ng_container_2_Template, 22, 8, "ng-container", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.timeline.data);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Last Retrieved: ", ctx_r1.timeline.resp.headers.date, "");
        }
      }

      var TwitterFeedComponent = /*#__PURE__*/function () {
        function TwitterFeedComponent(api) {
          _classCallCheck(this, TwitterFeedComponent);

          this.api = api;
        }

        _createClass(TwitterFeedComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //create();
            //parser();
            this.getTwitterTimeline();
          }
        }, {
          key: "getTwitterTimeline",
          value: function getTwitterTimeline() {
            var _this2 = this;

            //create();
            //parser();
            this.api.getTimeline().subscribe(function (timeline) {
              _this2.timeline = timeline;
              console.log(_this2.timeline);
            });
          }
        }]);

        return TwitterFeedComponent;
      }();

      TwitterFeedComponent.ɵfac = function TwitterFeedComponent_Factory(t) {
        return new (t || TwitterFeedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_twitterservice_service__WEBPACK_IMPORTED_MODULE_1__["TwitterService"]));
      };

      TwitterFeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TwitterFeedComponent,
        selectors: [["app-twitter-feed"]],
        decls: 12,
        vars: 2,
        consts: [[1, "widget-title"], ["href", "https://twitter.com/BTS_twt", "title", "BTS's Twitter Page"], [1, "arrow"], ["href", "https://twitter.com/BTS_twt?ref_src=twsrc%5Etfw", 1, "twitter-timeline"], [4, "ngIf"], [1, "card-container"], [4, "ngFor", "ngForOf"], [1, "timestamp"], [1, "card"], [1, "center"], [3, "src"], ["src", "./assets/images/Likes.png", "width", "35", "height", "35"], ["src", "./assets/images/Retweets.jpg", "width", "30", "height", "30"]],
        template: function TwitterFeedComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Twitter ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "var", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u2197");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Tweets by @BTS_twt and @BTS_bighit:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TwitterFeedComponent_div_10_Template, 2, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TwitterFeedComponent_div_11_Template, 5, 2, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", undefined === ctx.timeline);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", undefined !== ctx.timeline);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        styles: ["body[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: 3px 3px 10px gray;\n  border-radius: 10px;\n}\n\n.widget-title[_ngcontent-%COMP%] {\n  text-align: left;\n  font-family: \"Verdana\", sans-serif;\n  color: #3a3a3a;\n  font-size: 36px;\n  padding: 10px;\n  padding-left: 20px;\n  text-decoration: none;\n  letter-spacing: 1.5px;\n  font-weight: lighter;\n}\nh4[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Verdana\";\n  font-size: 16px;\n}\np[_ngcontent-%COMP%] {\n  color: black;\n  text-align: center;\n  font-size: 16px;\n}\n.center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.timestamp[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 10px;\n  padding: 10px;\n}\n.card[_ngcontent-%COMP%] {\n  margin: 30px;\n  border: 5px dotted #e6e6fa;\n  display: flex;\n  flex-direction: column;\n}\nimg[_ngcontent-%COMP%] {\n  border-radius: 50%\n}\n.card-container[_ngcontent-%COMP%] {\n  width: auto;\n  height: 1000px;\n  overflow-y: scroll;\n  background-color: #e6e6fa;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  clear: right;\n  float: right;\n  padding-right: 10px;\n  text-shadow: 2px 2px 4px silver;\n  text-decoration: none;\n  font-family: \"Verdana\", sans-serif;\n  color: #3a3a3a;\n}\n.arrow[_ngcontent-%COMP%]:hover {\n  text-shadow: 2px 2px 4px #8878c3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR3aXR0ZXItZmVlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlCQUF5QjtBQUN6QjtFQUNFLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCO0FBRUEsaUNBQWlDO0FBQ2pDO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtDQUFrQztFQUNsQyxjQUFjO0VBQ2QsZUFBZTtFQUNmLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGFBQWE7QUFDZjtBQUVBO0VBQ0UsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRTtBQUNGO0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiwrQkFBK0I7RUFDL0IscUJBQXFCO0VBQ3JCLGtDQUFrQztFQUNsQyxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEMiLCJmaWxlIjoidHdpdHRlci1mZWVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTZXQgYmFja2dyb3VuZCBjb2xvciAqL1xuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLyogRm9ybWF0dGluZyBmb3Igd2lkZ2V0IHRpdGxlLiAqL1xuLndpZGdldC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBcIlZlcmRhbmFcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMzYTNhM2E7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5cbmg0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJWZXJkYW5hXCI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxucCB7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRpbWVzdGFtcCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jYXJkIHtcbiAgbWFyZ2luOiAzMHB4O1xuICBib3JkZXI6IDVweCBkb3R0ZWQgI2U2ZTZmYTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlXG59XG5cbi5jYXJkLWNvbnRhaW5lciB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDEwMDBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmZhO1xufVxuXG4vKiBBcnJvdyBmb3JtYXR0aW5nICovXG4uYXJyb3cge1xuICBjbGVhcjogcmlnaHQ7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHNpbHZlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LWZhbWlseTogXCJWZXJkYW5hXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjM2EzYTNhO1xufVxuXG4uYXJyb3c6aG92ZXIge1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggIzg4NzhjMztcbn0iXX0= */"]
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