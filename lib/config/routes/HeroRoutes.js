var express = require("express");
var HeroController = require('./../../controllers/HeroController');

var router = express.Router();
var HeroRoutes = (function () {
    function HeroRoutes() {
        this._heroController = new HeroController();
    }
    Object.defineProperty(HeroRoutes.prototype, "routes", {
        get: function () {
            router.get('/heroes', new HeroController().retrieve);
            router.post('/heroes', new HeroController().create);
            router.put('/heroes', this._heroController.update);
            router.get('/heroes/_:id', this._heroController.findById);
            router.delete('/heroes/_:id', this._heroController.delete);
            router.get('/heroes', this._heroController.findOne);
            return router;
        },
        enumerable: true,
        configurable: true
    });
    return HeroRoutes;
})();

Object.seal(HeroRoutes);
module.exports = HeroRoutes;
