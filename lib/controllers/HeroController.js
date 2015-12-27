var HeroBusiness = require('./../app/business/HeroBusiness');

var HeroController = (function () {
    function HeroController() {
        this._heroBusiness = new HeroBusiness();
    }
    HeroController.prototype.create = function (req, res) {
    };
    HeroController.prototype.update = function (req, res) {
    };
    HeroController.prototype.delete = function (req, res) {
    };
    HeroController.prototype.retrieve = function (req, res) {
    };
    HeroController.prototype.findById = function (req, res) {
    };
    HeroController.prototype.findOne = function (req, res) {
    };
    return HeroController;
})();
