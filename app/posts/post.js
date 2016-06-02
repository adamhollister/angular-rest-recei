System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Post;
    return {
        setters:[],
        execute: function() {
            Post = (function () {
                function Post(title, url) {
                    this.title = title;
                    this.url = url;
                }
                return Post;
            }());
            exports_1("Post", Post);
        }
    }
});
//# sourceMappingURL=post.js.map