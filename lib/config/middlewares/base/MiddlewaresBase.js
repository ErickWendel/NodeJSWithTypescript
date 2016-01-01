var express = require("express");
var bodyParser = require("body-parser");

var MethodOverride = require("./../MethodOverride");
var BaseRoutes = require("./../../routes/base/BaseRoutes");

var MiddlewaresBase = (function () {
    function MiddlewaresBase() {
    }
    Object.defineProperty(MiddlewaresBase, "configuration", {
        get: function () {
            var app = express();
            app.use(bodyParser.json());
            app.use(MethodOverride.configuration());
            app.use(new BaseRoutes().routes);

            return app;
        },
        enumerable: true,
        configurable: true
    });
    return MiddlewaresBase;
})();
Object.seal(MiddlewaresBase);
module.exports = MiddlewaresBase;
