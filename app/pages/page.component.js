System.register(['angular2/core', './page.service'], function(exports_1, context_1) {
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
    var core_1, page_service_1;
    var PageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (page_service_1_1) {
                page_service_1 = page_service_1_1;
            }],
        execute: function() {
            PageComponent = (function () {
                // Dependancy Injection
                // Give this Component the _postService field now given the methods
                // from the PostService service class
                function PageComponent(_pageService) {
                    this._pageService = _pageService;
                }
                // Called after AppComponent is initialised
                // get posts at this hook
                PageComponent.prototype.ngOnInit = function () {
                    this.getPage();
                };
                // Get single post
                PageComponent.prototype.getPage = function () {
                    var _this = this;
                    // Run the getPosts method on this
                    // TODO - find out more about .subscribe
                    // post => this.posts = post
                    // this.posts - array from PostService
                    this._pageService.getPages().subscribe(function (page) { return _this.pages = page; }, function (error) { return _this.errorMessage = error; });
                };
                PageComponent = __decorate([
                    core_1.Component({
                        selector: 'pages',
                        templateUrl: '/app/pages/templates/page.template.html',
                        providers: [page_service_1.PageService]
                    }), 
                    __metadata('design:paramtypes', [page_service_1.PageService])
                ], PageComponent);
                return PageComponent;
            }());
            exports_1("PageComponent", PageComponent);
        }
    }
});
//# sourceMappingURL=page.component.js.map