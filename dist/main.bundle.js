webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_news_component__ = __webpack_require__("../../../../../src/app/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sources_sources_component__ = __webpack_require__("../../../../../src/app/sources/sources.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: 'news', pathMatch: 'full' },
    { path: 'news', component: __WEBPACK_IMPORTED_MODULE_2__news_news_component__["a" /* NewsComponent */] },
    { path: 'sources', component: __WEBPACK_IMPORTED_MODULE_3__sources_sources_component__["a" /* SourcesComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-group {\r\n  margin: 10px 0;\r\n}\r\n\r\n* {\r\n  font-family: \"Helvetica Neue\", Roboto, \"Segoe UI\", Calibri, sans-serif;\r\n}\r\n\r\nlabel {\r\n    display: block;\r\n    margin: 0px;\r\n    color: grey;\r\n    font-size: small;\r\n}\r\n\r\ninput {\r\n  color: #555;\r\n  height: 30px;\r\n  line-height: 15px;\r\n  width: 400px;\r\n  margin-top: 2px;\r\n  border: 0;\r\n  outline: 0;\r\n  background: transparent;\r\n  border-bottom: 1px solid lightgrey;\r\n  transition: border 0.1s linear;\r\n  font-size: large;\r\n}\r\n\r\ninput:focus {\r\n  border-bottom: 1px solid #ff66ff;\r\n}\r\n\r\nbutton {\r\n  position: relative;\r\n\r\n  /* display: block; */\r\n  /* margin: 30px 0; */\r\n  padding: 8px 12px;\r\n\r\n  overflow: hidden;\r\n  font-size: large;\r\n  /* font-weight: 300; */\r\n\r\n  border-width: 0;\r\n  outline: none;\r\n  border-radius: 2px;\r\n  box-shadow: 0 1px 4px rgba(0, 0, 0, .6);\r\n\r\n  background-color: #2ecc71;\r\n  color: #ecf0f1;\r\n\r\n  transition: background-color .3s;\r\n}\r\n\r\nbutton:hover, button:focus {\r\n  cursor: pointer;\r\n  background-color: #27ae60;\r\n}\r\n\r\nbutton > * {\r\n  position: relative;\r\n}\r\n\r\nbutton span {\r\n  display: block;\r\n  padding: 5px 10px;\r\n}\r\n\r\nbutton:before {\r\n  content: \"\";\r\n\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n\r\n  display: block;\r\n  width: 0;\r\n  padding-top: 0;\r\n\r\n  border-radius: 100%;\r\n\r\n  background-color: rgba(236, 240, 241, .3);\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\nbutton:active:before {\r\n  width: 120%;\r\n  padding-top: 120%;\r\n\r\n  transition: width .2s ease-out, padding-top .2s ease-out;\r\n}\r\n\r\n/* Styles, not important */\r\n*, *:before, *:after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbutton.orange {\r\n  background-color: #e67e22;\r\n}\r\n\r\nbutton.orange:hover, button.orange:focus {\r\n  background-color: #d35400;\r\n}\r\n\r\nbutton.red {\r\n  background-color: #e74c3c;\r\n}\r\n\r\nbutton.red:hover, button.red:focus {\r\n  background-color: #c0392b;\r\n}\r\n\r\n.source{\r\n  padding: 10px;\r\n}\r\n\r\n.source a{\r\n  text-decoration: none;\r\n}\r\n\r\n.twitter{\r\n  color: #1DA1F2;\r\n}\r\n\r\n.medium{\r\n  color: #00E56B;\r\n}\r\n\r\n.reddit{\r\n  color: #FF4500;\r\n}\r\n\r\n.rss{\r\n  color: #666666;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sources_sources_component__ = __webpack_require__("../../../../../src/app/sources/sources.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__news_news_component__ = __webpack_require__("../../../../../src/app/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_fontawesome_angular2_fontawesome__ = __webpack_require__("../../../../angular2-fontawesome/angular2-fontawesome.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_fontawesome_angular2_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_fontawesome_angular2_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__sources_sources_component__["a" /* SourcesComponent */],
            __WEBPACK_IMPORTED_MODULE_5__news_news_component__["a" /* NewsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_fontawesome_angular2_fontawesome__["Angular2FontawesomeModule"],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/news/news.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "blockquote.news-item {\r\n  display: inline-block;\r\n  font-family: \"Helvetica Neue\", Roboto, \"Segoe UI\", Calibri, sans-serif;\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  line-height: 16px;\r\n  border-color: #eee #ddd #bbb;\r\n  border-radius: 5px;\r\n  border-style: solid;\r\n  border-width: 1px;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\r\n  margin: 10px 5px;\r\n  padding: 0 16px 16px 16px;\r\n  max-width: 468px;\r\n  width: 468px;\r\n}\r\n\r\nblockquote.news-item p {\r\n  font-size: 16px;\r\n  font-weight: normal;\r\n  line-height: 20px;\r\n}\r\n\r\nblockquote.news-item a {\r\n  color: inherit;\r\n  font-weight: normal;\r\n  text-decoration: none;\r\n  outline: 0 none;\r\n}\r\n\r\nblockquote.news-item .show-content {\r\n  cursor: pointer;\r\n  float:right;\r\n  clear:both;\r\n  color: #6666ff;\r\n}\r\n\r\nblockquote.news-item .news-content {\r\n  border: 1px solid lightgrey;\r\n  border-radius: 3px;\r\n  padding: 10px;\r\n  margin-top: 18px;\r\n  color: #333;\r\n  font-weight: normal;\r\n  text-decoration: none;\r\n  font-size: 11px;\r\n}\r\n\r\nblockquote.news-item a:hover,\r\nblockquote.news-item a:focus {\r\n  text-decoration: underline;\r\n}\r\n\r\nblockquote.news-item .twitter{\r\n  color: #1DA1F2;\r\n}\r\n\r\nblockquote.news-item .medium{\r\n  color: #00E56B;\r\n}\r\n\r\nblockquote.news-item .reddit{\r\n  color: #FF4500;\r\n}\r\n\r\nblockquote.news-item .rss{\r\n  color: #666666;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"refresh()\">refresh</button>\n<!-- <button (click)=\"sortNewsByDate()\">Sort by date</button> -->\n<input placeholder=\"Search news...\" [(ngModel)]=\"searchTerm\" (ngModelChange)=\"search(searchTerm)\"/>\n<div *ngFor=\"let item of news; let i = index\">\n  <pre style=\"display: inline\">#{{i+1}}</pre>\n  <blockquote class=\"news-item\">\n    <p>{{item.title}}</p>\n    <div>\n      <div><fa [name]=\"getIcon(item)\" [size]=\"1\" class=\"{{getIcon(item)}}\"></fa> {{item.source}}</div>\n      <div><a href=\"{{item.url}}\" target=\"_blank\">{{item.dateCreated | date:'medium'}}</a> <a class=\"show-content\" *ngIf=\"item.type!='TWITTER'\" (click)=\"item.show=!item.show\">{{item.show? 'Hide': 'Show'}} content</a></div>\n    </div>\n    <div class=\"news-content\" [hidden]=\"!item.show\"><div [innerHTML]=\"item.content\"></div></div>\n  </blockquote>\n</div>\n<button (click)=\"loadMore()\">Load more news</button>\n"

/***/ }),

/***/ "../../../../../src/app/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var NewsComponent = (function () {
    function NewsComponent(http) {
        this.http = http;
        this.news = [];
        this.searchTerm = "";
        this.page = 1;
        this.reverse = false;
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getNews(this.page).subscribe(function (news) {
            _this.news = _this.news.concat(news);
        });
    };
    NewsComponent.prototype.search = function (term) {
        var _this = this;
        console.log(term);
        this.page = 1;
        this.getNews(this.page, term).subscribe(function (news) {
            _this.news = news;
        });
    };
    NewsComponent.prototype.getNews = function (page, term) {
        console.log('getting news', page, term);
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]();
        params = params.append('page', String(page));
        if (term === undefined)
            term = "";
        return this.http.get('http://localhost:3000/api/news/' + term, { params: params });
    };
    NewsComponent.prototype.refresh = function () {
        var _this = this;
        this.page = 1;
        this.searchTerm = "";
        this.getNews(this.page, this.searchTerm).subscribe(function (news) {
            _this.news = news;
        });
    };
    NewsComponent.prototype.loadMore = function () {
        var _this = this;
        this.page++;
        console.log('loading more, page', this.page);
        this.getNews(this.page, this.searchTerm).subscribe(function (news) {
            _this.news = _this.news.concat(news);
        });
    };
    NewsComponent.prototype.sortNewsByDate = function () {
        var _this = this;
        this.news = this.news.sort(function (a, b) {
            if (_this.reverse) {
                return new Date(a.dateCreated).getTime() - new Date(b.dateCreated).getTime();
            }
            else {
                return new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime();
            }
        });
        this.reverse = !this.reverse;
    };
    NewsComponent.prototype.getIcon = function (item) {
        return item.type.toLowerCase();
    };
    return NewsComponent;
}());
NewsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-news',
        template: __webpack_require__("../../../../../src/app/news/news.component.html"),
        styles: [__webpack_require__("../../../../../src/app/news/news.component.css"), __webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpClient */]) === "function" && _a || Object])
], NewsComponent);

var _a;
//# sourceMappingURL=news.component.js.map

/***/ }),

/***/ "../../../../../src/app/source.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Source; });
var Source = (function () {
    function Source(name, type, abbr, twitter, medium, reddit, rss) {
        this.name = name;
        this.type = type;
        this.abbr = abbr;
        this.twitter = twitter;
        this.medium = medium;
        this.reddit = reddit;
        this.rss = rss;
    }
    return Source;
}());

//# sourceMappingURL=source.js.map

/***/ }),

/***/ "../../../../../src/app/sources/sources.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sources/sources.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  sources works!\n</p>\n<div>\n\n  <form (ngSubmit)=\"addSource()\">\n    <pre>{{model | json}}</pre>\n      <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"source.name\" required>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"abbr\">Abbreviation</label>\n        <input type=\"text\" class=\"form-control\" name=\"abbr\" [(ngModel)]=\"source.abbr\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"type\">Type</label>\n        <input type=\"text\" class=\"form-control\" name=\"type\" [(ngModel)]=\"source.type\" required>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"twitter\">Twitter Handle</label>\n        <input type=\"text\" class=\"form-control\" name=\"twitter\" [(ngModel)]=\"source.twitter\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"medium\">Medium Handle</label>\n        <input type=\"text\" class=\"form-control\" name=\"medium\" [(ngModel)]=\"source.medium\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"reddit\">Reddit Handle</label>\n        <input type=\"text\" class=\"form-control\" name=\"reddit\" [(ngModel)]=\"source.reddit\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"rss\">RSS URL</label>\n        <input type=\"text\" class=\"form-control\" name=\"rss\" [(ngModel)]=\"source.rss\">\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n\n    </form>\n</div>\n\n<div *ngFor=\"let item of sources; let i = index\" class=\"source\">\n\n  <div style=\"margin-bottom:5px;\"><pre style=\"display:inline; font-size:12px;\">#{{i+1}}</pre> <strong>{{item.name}}</strong> ({{item.type}})</div>\n  <div>\n    <a [hidden]=\"!item.twitter\" target=\"_blank\" href=\"http://twitter.com/{{item.twitter}}\"><fa [name]=\"'twitter'\" [size]=\"1\" class=\"twitter\"></fa></a>\n    <a [hidden]=\"!item.reddit\" target=\"_blank\" href=\"https://www.reddit.com/r/{{item.reddit}}\"><fa [name]=\"'reddit'\" [size]=\"1\" class=\"reddit\"></fa></a>\n    <a [hidden]=\"!item.medium\" target=\"_blank\" href=\"http://medium.com/{{item.medium}}\"><fa [name]=\"'medium'\" [size]=\"1\" class=\"medium\"></fa></a>\n    <a [hidden]=\"!item.rss\" target=\"_blank\" href=\"{{item.rss}}\"><fa [name]=\"'rss'\" [size]=\"1\" class=\"rss\"></fa></a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/sources/sources.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__source__ = __webpack_require__("../../../../../src/app/source.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SourcesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var SourcesComponent = (function () {
    function SourcesComponent(http) {
        this.http = http;
    }
    SourcesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.source = new __WEBPACK_IMPORTED_MODULE_2__source__["a" /* Source */]();
        this.getSources().subscribe(function (sources) { return _this.sources = sources; });
    };
    SourcesComponent.prototype.getSources = function () {
        return this.http.get('http://localhost:3000/api/source');
    };
    SourcesComponent.prototype.addSource = function () {
        var _this = this;
        this.source.name = this.source.name.trim();
        if (!this.source.name) {
            return;
        }
        this.http.post('http://localhost:3000/api/source', this.source, httpOptions).subscribe(function (source) {
            _this.sources.push(source);
        });
        this.source = new __WEBPACK_IMPORTED_MODULE_2__source__["a" /* Source */]();
    };
    SourcesComponent.prototype.getIcon = function (item) {
        return item.type.toLowerCase();
    };
    return SourcesComponent;
}());
SourcesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sources',
        template: __webpack_require__("../../../../../src/app/sources/sources.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sources/sources.component.css"), __webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpClient */]) === "function" && _a || Object])
], SourcesComponent);

var _a;
//# sourceMappingURL=sources.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map