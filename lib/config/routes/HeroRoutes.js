var express = require("express");
var HeroController = require("./../../controllers/HeroController");

var router = express.Router();
var HeroRoutes = (function () {
    function HeroRoutes() {
        this._heroController = new HeroController();
    }
    Object.defineProperty(HeroRoutes.prototype, "routes", {
        get: function () {
            var controller = this._heroController;
            router.get("/heroes", controller.retrieve);
            router.post("/heroes", controller.create);
            router.put("/heroes/:_id", controller.update);
            router.get("/heroes/:_id", controller.findById);
            router.delete("/heroes/:_id", controller.delete);

            return router;
        },
        enumerable: true,
        configurable: true
    });
    return HeroRoutes;
})();

Object.seal(HeroRoutes);
module.exports = HeroRoutes;
