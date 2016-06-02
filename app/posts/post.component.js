System.register(['angular2/core', './post.service'], function(exports_1, context_1) {
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
    var core_1, post_service_1;
    var PostComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            }],
        execute: function() {
            PostComponent = (function () {
                // Dependancy Injection
                // Give this Component the _postService field now given the methods
                // from the PostService service class
                function PostComponent(_postService) {
                    this._postService = _postService;
                }
                // Called after AppComponent is initialised
                // get posts at this hook
                PostComponent.prototype.ngOnInit = function () {
                    this.getPost();
                };
                // Get single post
                PostComponent.prototype.getPost = function () {
                    var _this = this;
                    // Run the getPosts method on this
                    // TODO - find out more about .subscribe
                    // post => this.posts = post
                    // this.posts - array from PostService
                    this._postService.getPosts().subscribe(function (post) { return _this.posts = post; }, function (error) { return _this.errorMessage = error; });
                };
                PostComponent = __decorate([
                    core_1.Component({
                        selector: 'posts',
                        templateUrl: '/app/posts/templates/post.template.html',
                        providers: [post_service_1.PostService]
                    }), 
                    __metadata('design:paramtypes', [post_service_1.PostService])
                ], PostComponent);
                return PostComponent;
            }());
            exports_1("PostComponent", PostComponent);
        }
    }
});
//# sourceMappingURL=post.component.js.map