var SpartanRepository = require("./../repository/SpartanRepository");

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

    SpartanBusiness.prototype.update = function (_id, item, callback) {
        var _this = this;
        this._spartanRepository.findById(_id, function (err, res) {
            if (err)
                callback(err, res);
            else
                _this._spartanRepository.update(res._id, item, callback);
        });
    };

    SpartanBusiness.prototype.delete = function (_id, callback) {
        this._spartanRepository.delete(_id, callback);
    };

    SpartanBusiness.prototype.findById = function (_id, callback) {
        this._spartanRepository.findById(_id, callback);
    };
    return SpartanBusiness;
})();
Object.seal(SpartanBusiness);
module.exports = SpartanBusiness;
