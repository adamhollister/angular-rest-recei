System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Page;
    return {
        setters:[],
        execute: function() {
            Page = (function () {
                function Page(title, url) {
                    this.title = title;
                    this.url = url;
                }
                return Page;
            }());
            exports_1("Page", Page);
        }
    }
});
//# sourceMappingURL=page.js.map