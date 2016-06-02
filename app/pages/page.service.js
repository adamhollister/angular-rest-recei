System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var PageService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            // Injectable Decorator
            PageService = (function () {
                // Give the Http methods to new http field
                function PageService(http) {
                    this.http = http;
                    // var storing JSON endpoint
                    this._pagesUrl = 'http://apitesting.wpengine.com/wp-json/wp/v2/pages';
                }
                // getPosts() method
                PageService.prototype.getPages = function () {
                    // return value of .http (populated with Http which we are passing postsUrl as URL to run GET request)
                    return this.http.get(this._pagesUrl)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                PageService.prototype.handleError = function (error) {
                    console.error(error);
                    // return errors
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                PageService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PageService);
                return PageService;
            }());
            exports_1("PageService", PageService);
        }
    }
});
//# sourceMappingURL=page.service.js.map