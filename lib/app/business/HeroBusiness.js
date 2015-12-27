var HeroRepository = require('./../repository/HeroRepository');

var HeroBusiness = (function () {
    function HeroBusiness() {
        this._heroRepository = new HeroRepository();
    }
    HeroBusiness.prototype.create = function (item, callback) {
        this._heroRepository.create(item, callback);
    };

    HeroBusiness.prototype.retrieve = function (callback) {
        this._heroRepository.retrieve(callback);
    };

    HeroBusiness.prototype.update = function (item, callback) {
        this._heroRepository.update(item, callback);
    };

    HeroBusiness.prototype.delete = function (id, callback) {
        this._heroRepository.delete(id, callback);
    };

    HeroBusiness.prototype.findById = function (id, callback) {
        this._heroRepository.findById(id, callback);
    };
    return HeroBusiness;
})();
