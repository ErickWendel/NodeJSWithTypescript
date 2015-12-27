var SpartanBusiness = require('./../app/business/SpartanBusiness');

var SpartanController = (function () {
    function SpartanController() {
        this._spartanBusiness = new SpartanBusiness();
    }
    SpartanController.prototype.create = function (req, res) {
    };
    SpartanController.prototype.update = function (req, res) {
    };
    SpartanController.prototype.delete = function (req, res) {
    };
    SpartanController.prototype.retrieve = function (req, res) {
    };
    SpartanController.prototype.findById = function (req, res) {
    };
    SpartanController.prototype.findOne = function (req, res) {
    };
    return SpartanController;
})();
module.exports = SpartanController;
