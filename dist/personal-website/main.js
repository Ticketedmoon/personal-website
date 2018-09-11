(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\r\n    height: 100%;\r\n    background-color: #446E86;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation-menu></app-navigation-menu>\r\n<app-body-context-video></app-body-context-video>\r\n<app-body-context-about-me></app-body-context-about-me>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navigation_menu_navigation_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navigation-menu/navigation-menu.component */ "./src/app/components/navigation-menu/navigation-menu.component.ts");
/* harmony import */ var _components_body_context_video_body_context_video_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/body-context-video/body-context-video.component */ "./src/app/components/body-context-video/body-context-video.component.ts");
/* harmony import */ var _components_body_context_about_me_body_context_about_me_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/body-context-about-me/body-context-about-me.component */ "./src/app/components/body-context-about-me/body-context-about-me.component.ts");
/* harmony import */ var _components_body_context_projects_body_context_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/body-context-projects/body-context-projects.component */ "./src/app/components/body-context-projects/body-context-projects.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_navigation_menu_navigation_menu_component__WEBPACK_IMPORTED_MODULE_3__["NavigationMenuComponent"],
                _components_body_context_video_body_context_video_component__WEBPACK_IMPORTED_MODULE_4__["BodyContextVideoComponent"],
                _components_body_context_about_me_body_context_about_me_component__WEBPACK_IMPORTED_MODULE_5__["BodyContextAboutMeComponent"],
                _components_body_context_projects_body_context_projects_component__WEBPACK_IMPORTED_MODULE_6__["BodyContextProjectsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/body-context-about-me/body-context-about-me.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/body-context-about-me/body-context-about-me.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-introduction-section {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-items: center;\r\n    flex-direction: column;\r\n\r\n    background-color: whitesmoke;\r\n    position: relative;\r\n    padding-top:1em;\r\n    text-align:center\r\n}\r\n\r\n.about-images {\r\n    float: left;\r\n    margin-right: 5em;\r\n    vertical-align: middle;\r\n    border-radius: 50%;\r\n}\r\n\r\n.about-sub-section {\r\n    width: 85em;\r\n    padding: 3em;\r\n    text-align: left;\r\n}\r\n\r\n.about-sub-title {\r\n    text-align: center;\r\n    padding: 1em;\r\n    font-size: 2em;\r\n    font-weight: bold;\r\n    font-family: PoiretOne-Regular, \"Microsoft JhengHei Light\", Arial;\r\n}\r\n\r\n.about-sub-section-paragraphs {\r\n    height: 10em;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}"

/***/ }),

/***/ "./src/app/components/body-context-about-me/body-context-about-me.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/body-context-about-me/body-context-about-me.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-introduction-section\">\r\n    <h4 class=\"about-sub-title\"> About Me </h4>\r\n\r\n    <div class=\"about-me about-sub-section\">\r\n        <img width=250 class=\"about-images\" src=\"../../../assets/images/avatar.png\"/>\r\n        <span class=\"about-sub-section-paragraphs\">\r\n            <h6 class=\"about-sub-section-title-context\"> My Hobbies </h6>\r\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n                Aspernatur assumenda commodi dolores ea,\r\n                enim ipsum possimus quidem reiciendis velit voluptate.\r\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n                Aspernatur assumenda commodi dolores ea,\r\n                enim ipsum possimus quidem reiciendis velit voluptate.\r\n        </span>\r\n    </div>\r\n\r\n    <div class=\"about-hobbies about-sub-section\">\r\n        <img width=250 class=\"about-images\" src=\"../../../assets/images/gaming-icon.jpg\"/>\r\n        <span class=\"about-sub-section-paragraphs\">\r\n            <h6 class=\"about-sub-section-title-context\"> My Hobbies </h6>\r\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n                enim ipsum possimus quidem reiciendis velit voluptate\r\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n                Aspernatur assumenda commodi dolores ea,\r\n                enim ipsum possimus quidem reiciendis velit voluptate\r\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n                Aspernatur assumenda commodi dolores ea,\r\n                enim ipsum possimus quidem reiciendis velit voluptate.\r\n        </span>\r\n    </div>\r\n\r\n    <div class=\"about-aspirations about-sub-section\">\r\n        <img width=250 class=\"about-images\" src=\"../../../assets/images/computing-image-mobile-computer.png\"/>\r\n        <span class=\"about-sub-section-paragraphs\">\r\n            <h6 class=\"about-sub-section-title-context\"> My Hobbies </h6>\r\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n                Aspernatur assumenda commodi dolores ea,\r\n                enim ipsum possimus quidem reiciendis velit voluptate.\r\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n                Aspernatur assumenda commodi dolores ea,\r\n                enim ipsum possimus quidem reiciendis velit voluptate.\r\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n                Aspernatur assumenda commodi dolores ea,\r\n                enim ipsum possimus quidem reiciendis velit voluptate.\r\n        </span>\r\n    </div>\r\n</div><hr>"

/***/ }),

/***/ "./src/app/components/body-context-about-me/body-context-about-me.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/body-context-about-me/body-context-about-me.component.ts ***!
  \*************************************************************************************/
/*! exports provided: BodyContextAboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyContextAboutMeComponent", function() { return BodyContextAboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BodyContextAboutMeComponent = /** @class */ (function () {
    function BodyContextAboutMeComponent() {
    }
    BodyContextAboutMeComponent.prototype.ngOnInit = function () {
    };
    BodyContextAboutMeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-body-context-about-me',
            template: __webpack_require__(/*! ./body-context-about-me.component.html */ "./src/app/components/body-context-about-me/body-context-about-me.component.html"),
            styles: [__webpack_require__(/*! ./body-context-about-me.component.css */ "./src/app/components/body-context-about-me/body-context-about-me.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BodyContextAboutMeComponent);
    return BodyContextAboutMeComponent;
}());



/***/ }),

/***/ "./src/app/components/body-context-projects/body-context-projects.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/body-context-projects/body-context-projects.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/body-context-projects/body-context-projects.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/body-context-projects/body-context-projects.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  body-context-projects works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/body-context-projects/body-context-projects.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/body-context-projects/body-context-projects.component.ts ***!
  \*************************************************************************************/
/*! exports provided: BodyContextProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyContextProjectsComponent", function() { return BodyContextProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BodyContextProjectsComponent = /** @class */ (function () {
    function BodyContextProjectsComponent() {
    }
    BodyContextProjectsComponent.prototype.ngOnInit = function () {
    };
    BodyContextProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-body-context-projects',
            template: __webpack_require__(/*! ./body-context-projects.component.html */ "./src/app/components/body-context-projects/body-context-projects.component.html"),
            styles: [__webpack_require__(/*! ./body-context-projects.component.css */ "./src/app/components/body-context-projects/body-context-projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BodyContextProjectsComponent);
    return BodyContextProjectsComponent;
}());



/***/ }),

/***/ "./src/app/components/body-context-video/body-context-video.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/body-context-video/body-context-video.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-context-body {\r\n    position: relative;\r\n    line-height: 1.5;\r\n    display: flex;\r\n    text-align: center;\r\n    align-items: center;\r\n    color: white;\r\n    height: 45em;\r\n    padding-bottom: 1em;\r\n}\r\n\r\n.fullscreen-video-wrap {\r\n    position: absolute;\r\n    height: 45em;\r\n\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n\r\n}\r\n\r\n.video-overlay {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 45em;\r\n    background-color: #225470;\r\n    z-index: 1;\r\n    opacity: 0.85;\r\n    top:0;\r\n    left:0;\r\n}\r\n\r\n.video-overlay-content {\r\n    text-align: center;\r\n    position: absolute;\r\n    white-space: nowrap;\r\n\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    z-index: 1;\r\n    font-size: 4em;\r\n    font-family: Monaco, \"Lucida Console\", monospace;\r\n    top: 2em;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.text-hobbies {\r\n    font-size: 0.3em;\r\n    line-height: 5em;\r\n}\r\n\r\n.gaming-controller-icon {\r\n    z-index: 5;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    padding-top: 25em;\r\n    opacity: 0.7;\r\n}\r\n\r\n.gaming-controller-icon img {\r\n    border-radius: 50%\r\n}"

/***/ }),

/***/ "./src/app/components/body-context-video/body-context-video.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/body-context-video/body-context-video.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"image-context-body\">\r\n    <!-- Video background context-->\r\n    <div class=\"fullscreen-video-wrap\" [innerHTML]=\"videoTag\"></div>\r\n\r\n    <!-- Video Overlay colouring -->\r\n    <div class=\"video-overlay\"></div>\r\n\r\n    <!-- Video Overlay Content -->\r\n    <div class=\"video-overlay-content\">\r\n        <h2 class=\"text-common\"> Shane Creedon </h2>\r\n        <h6 class=\"text-common\"> Software Engineer </h6>\r\n        <p class=\"text-hobbies\"> Music | Programming | Gaming </p>\r\n    </div>\r\n\r\n    <div class=\"gaming-controller-icon\">\r\n        <img height=\"200\" src=\"../../../assets/images/pictureOfMe.png\" alt=\"Gaming Controller icon, looks good and holds meaning to me\"/>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/body-context-video/body-context-video.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/body-context-video/body-context-video.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BodyContextVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyContextVideoComponent", function() { return BodyContextVideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BodyContextVideoComponent = /** @class */ (function () {
    function BodyContextVideoComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.videoTag = this.getVideoTag();
    }
    BodyContextVideoComponent.prototype.ngOnInit = function () { };
    BodyContextVideoComponent.prototype.getVideoTag = function () {
        return this.sanitizer.bypassSecurityTrustHtml("<video autoplay muted loop playsinline disableRemotePlayback id=\"video-background\">\n            <source src=\"../../../assets/stock-videos/buckle-animation.mp4\" type=\"video/mp4\">\n        </video>");
    };
    BodyContextVideoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-body-context-video',
            template: __webpack_require__(/*! ./body-context-video.component.html */ "./src/app/components/body-context-video/body-context-video.component.html"),
            styles: [__webpack_require__(/*! ./body-context-video.component.css */ "./src/app/components/body-context-video/body-context-video.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], BodyContextVideoComponent);
    return BodyContextVideoComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation-menu/navigation-menu.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/navigation-menu/navigation-menu.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Good Colour\r\n * background-color: #28587B;\r\n * Charcoal: #36454f;\r\n */\r\n.navigation-menu {\r\n    position: fixed;\r\n    background-color: white;\r\n    white-space: nowrap;\r\n    width: 100%;\r\n    z-index: 100;\r\n    box-shadow: 0 0 30px #000;\r\n}\r\n.navigation-items {\r\n    text-align: center;\r\n}\r\n.navigation-items a {\r\n    text-decoration: none;\r\n    color: #36464f;\r\n}\r\n.navigation-items li a:hover {\r\n    color: deepskyblue;\r\n}\r\n.navigation-item {\r\n    display: inline-block;\r\n    padding: 1.5em;\r\n    margin-left: 5em;\r\n    margin-right: 5em;\r\n\r\n    font-size: 1.2em;\r\n    font-weight: bold;\r\n    font-family: Calibri, Arial;\r\n}"

/***/ }),

/***/ "./src/app/components/navigation-menu/navigation-menu.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/navigation-menu/navigation-menu.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navigation-wrapper\">\r\n    <div class=\"navigation-menu\">\r\n        <ul class=\"navigation-items\">\r\n            <li class=\"navigation-item\"><a href=\"#\"> Home </a></li>\r\n            <li class=\"navigation-item\"><a href=\"#\"> About </a></li>\r\n            <li class=\"navigation-item\"><a href=\"#\"> Projects </a></li>\r\n            <li class=\"navigation-item\"><a href=\"#\"> Contact </a></li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/navigation-menu/navigation-menu.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/navigation-menu/navigation-menu.component.ts ***!
  \*************************************************************************/
/*! exports provided: NavigationMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationMenuComponent", function() { return NavigationMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationMenuComponent = /** @class */ (function () {
    function NavigationMenuComponent() {
    }
    NavigationMenuComponent.prototype.ngOnInit = function () {
    };
    NavigationMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation-menu',
            template: __webpack_require__(/*! ./navigation-menu.component.html */ "./src/app/components/navigation-menu/navigation-menu.component.html"),
            styles: [__webpack_require__(/*! ./navigation-menu.component.css */ "./src/app/components/navigation-menu/navigation-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationMenuComponent);
    return NavigationMenuComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Shane Creedon\Documents\Github Projects\personal-website\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map