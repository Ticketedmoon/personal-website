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

module.exports = "html, body {\n    height: 100%;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation-menu></app-navigation-menu>\n<app-body-context-image></app-body-context-image>\n<app-body-context-about-projects></app-body-context-about-projects>"

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
/* harmony import */ var _components_body_context_image_body_context_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/body-context-image/body-context-image.component */ "./src/app/components/body-context-image/body-context-image.component.ts");
/* harmony import */ var _components_body_context_about_projects_body_context_about_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/body-context-about-projects/body-context-about-projects.component */ "./src/app/components/body-context-about-projects/body-context-about-projects.component.ts");
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
                _components_body_context_image_body_context_image_component__WEBPACK_IMPORTED_MODULE_4__["BodyContextImageComponent"],
                _components_body_context_about_projects_body_context_about_projects_component__WEBPACK_IMPORTED_MODULE_5__["BodyContextAboutProjectsComponent"]
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

/***/ "./src/app/components/body-context-about-projects/body-context-about-projects.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/body-context-about-projects/body-context-about-projects.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-me-section {\n    background-color: whitesmoke;\n    width: 100%;\n    height: 20em;\n\n    text-align: center;\n    position: relative;\n    padding-top:1em;\n\n    font-size: 2em;\n    font-weight: bold;\n    font-family: PoiretOne-Regular, \"Microsoft JhengHei Light\", Arial;\n}"

/***/ }),

/***/ "./src/app/components/body-context-about-projects/body-context-about-projects.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/body-context-about-projects/body-context-about-projects.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-me-section\">\n    <h4> About Me </h4>\n</div>"

/***/ }),

/***/ "./src/app/components/body-context-about-projects/body-context-about-projects.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/body-context-about-projects/body-context-about-projects.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: BodyContextAboutProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyContextAboutProjectsComponent", function() { return BodyContextAboutProjectsComponent; });
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

var BodyContextAboutProjectsComponent = /** @class */ (function () {
    function BodyContextAboutProjectsComponent() {
    }
    BodyContextAboutProjectsComponent.prototype.ngOnInit = function () {
    };
    BodyContextAboutProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-body-context-about-projects',
            template: __webpack_require__(/*! ./body-context-about-projects.component.html */ "./src/app/components/body-context-about-projects/body-context-about-projects.component.html"),
            styles: [__webpack_require__(/*! ./body-context-about-projects.component.css */ "./src/app/components/body-context-about-projects/body-context-about-projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BodyContextAboutProjectsComponent);
    return BodyContextAboutProjectsComponent;
}());



/***/ }),

/***/ "./src/app/components/body-context-image/body-context-image.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/body-context-image/body-context-image.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-context-body {\n    position: relative;\n    line-height: 1.5;\n    display: flex;\n    text-align: center;\n    align-items: center;\n    color: white;\n    height: 45em;\n    padding-bottom: 1em;\n}\n\n.fullscreen-video-wrap {\n    position: absolute;\n    height: 45em;\n\n    left: 0;\n    bottom: 0;\n    right: 0;\n\n    margin-left: auto;\n    margin-right: auto;\n\n}\n\n.video-overlay {\n    position: absolute;\n    width: 100%;\n    height: 45em;\n    background-color: #225470;\n    z-index: 1;\n    opacity: 0.85;\n    top:0;\n    left:0;\n}\n\n.video-overlay-content {\n    text-align: center;\n    position: absolute;\n    white-space: nowrap;\n\n\n    width: 100%;\n    height: 100%;\n\n    z-index: 1;\n    font-size: 4em;\n    font-family: Monaco, \"Lucida Console\", monospace;\n    top: 2em;\n    left: 0;\n    bottom: 0;\n    right: 0;\n\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.text-hobbies {\n    font-size: 0.3em;\n    line-height: 5em;\n}\n\n.gaming-controller-icon {\n    z-index: 5;\n    text-align: center;\n    margin: 0 auto;\n    padding-top: 25em;\n}"

/***/ }),

/***/ "./src/app/components/body-context-image/body-context-image.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/body-context-image/body-context-image.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"image-context-body\">\n    <!-- Video background context-->\n    <div class=\"fullscreen-video-wrap\" [innerHTML]=\"videoTag\"></div>\n\n    <!-- Video Overlay colouring -->\n    <div class=\"video-overlay\"></div>\n\n    <!-- Video Overlay Content -->\n    <div class=\"video-overlay-content\">\n        <h2 class=\"text-common\"> Shane Creedon </h2>\n        <h6 class=\"text-common\"> Software Engineer </h6>\n        <p class=\"text-hobbies\"> Music | Programming | Gaming </p>\n    </div>\n\n    <div class=\"gaming-controller-icon\">\n        <img height=\"128\" src=\"../../assets/images/controller.png\" alt=\"Gaming Controller icon, looks good and holds meaning to me\"/>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/body-context-image/body-context-image.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/body-context-image/body-context-image.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BodyContextImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyContextImageComponent", function() { return BodyContextImageComponent; });
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


var BodyContextImageComponent = /** @class */ (function () {
    function BodyContextImageComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.videoTag = this.getVideoTag();
    }
    BodyContextImageComponent.prototype.ngOnInit = function () { };
    BodyContextImageComponent.prototype.getVideoTag = function () {
        return this.sanitizer.bypassSecurityTrustHtml("<video autoplay muted loop playsinline disableRemotePlayback id=\"video-background\">\n            <source src=\"../../assets/stock-videos/background-animation.mp4\" type=\"video/mp4\">\n        </video>");
    };
    BodyContextImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-body-context-image',
            template: __webpack_require__(/*! ./body-context-image.component.html */ "./src/app/components/body-context-image/body-context-image.component.html"),
            styles: [__webpack_require__(/*! ./body-context-image.component.css */ "./src/app/components/body-context-image/body-context-image.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], BodyContextImageComponent);
    return BodyContextImageComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation-menu/navigation-menu.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/navigation-menu/navigation-menu.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Good Colour\n * background-color: #28587B;\n * Charcoal: #36454f;\n */\n.navigation-menu {\n    background-color: white;\n    position: relative;\n    white-space: nowrap;\n    width: 100%;\n    z-index: 2;\n}\n.navigation-items {\n    text-align: center;\n}\n.navigation-items a {\n    text-decoration: none;\n    color: #36464f;\n}\n.navigation-items li a:hover {\n    color: #28587B;\n}\n.navigation-item {\n    display: inline-block;\n    padding: 1.5em;\n    margin-left: 5em;\n    margin-right: 5em;\n\n    font-size: 1.2em;\n    font-weight: bold;\n    font-family: Calibri, Arial;\n}"

/***/ }),

/***/ "./src/app/components/navigation-menu/navigation-menu.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/navigation-menu/navigation-menu.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navigation-wrapper\">\n    <div class=\"navigation-menu\">\n        <ul class=\"navigation-items\">\n            <li class=\"navigation-item\"><a href=\"#\"> Home </a></li>\n            <li class=\"navigation-item\"><a href=\"#\"> About </a></li>\n            <li class=\"navigation-item\"><a href=\"#\"> Projects </a></li>\n            <li class=\"navigation-item\"><a href=\"#\"> Contact </a></li>\n        </ul>\n    </div>\n</div>"

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

module.exports = __webpack_require__(/*! /home/Shane/Documents/Git/personal-website/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map