var express = require("express");
var SpartanController = require("./../../controllers/SpartanController");

var router = express.Router();
var SpartanRoutes = (function () {
    function SpartanRoutes() {
        this._spartanController = new SpartanController();
    }
    Object.defineProperty(SpartanRoutes.prototype, "routes", {
        get: function () {
            var controller = this._spartanController;
            router.get("/spartans", controller.retrieve);
            router.post("/spartans", controller.create);
            router.put("/spartans/:_id", controller.update);
            router.get("/spartans/:_id", controller.findById);
            router.delete("/spartans/:_id", controller.delete);

            return router;
        },
        enumerable: true,
        configurable: true
    });
    return SpartanRoutes;
})();

Object.seal(SpartanRoutes);
module.exports = SpartanRoutes;
