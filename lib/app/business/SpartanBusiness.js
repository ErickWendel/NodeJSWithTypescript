var SpartanRepository = require('./../repository/SpartanRepository');

var SpartanBusiness = (function () {
    function SpartanBusiness() {
        this._spartanRepository = new SpartanRepository();
    }
    SpartanBusiness.prototype.create = function (item, callback) {
        this._spartanRepository.create(item, callback);
    };

    SpartanBusiness.prototype.retrieve = function (callback) {
        this._spartanRepository.retrieve(callback);
    };

    SpartanBusiness.prototype.update = function (item, callback) {
        this._spartanRepository.update(item, callback);
    };

    SpartanBusiness.prototype.delete = function (id, callback) {
        this._spartanRepository.delete(id, callback);
    };

    SpartanBusiness.prototype.findById = function (id, callback) {
        this._spartanRepository.findById(id, callback);
    };
    return SpartanBusiness;
})();
