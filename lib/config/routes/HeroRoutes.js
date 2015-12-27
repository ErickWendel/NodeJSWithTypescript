var express = require("express");
var HeroController = require('./../../controllers/HeroController');

var app = express();

var HeroRoutes = (function () {
    function HeroRoutes() {
        this._heroController = new HeroController();
    }
    Object.defineProperty(HeroRoutes.prototype, "routes", {
        get: function () {
            app.get('/hero', this._heroController.retrieve);
            app.get('/hero', this._heroController.delete);
            app.get('/hero', this._heroController.findById);
            app.get('/hero', this._heroController.findOne);
            app.get('/hero', this._heroController.update);
            app.get('/hero', this._heroController.create);
            return app;
        },
        enumerable: true,
        configurable: true
    });
    return HeroRoutes;
})();
