/// <reference path="../../../../typings/tsd.d.ts" />
var mongoose = require("mongoose");

var RepositoryBase = (function () {
    function RepositoryBase(schemaModel) {
        this._model = schemaModel;
    }
    RepositoryBase.prototype.create = function (item, callback) {
        this._model.create(item, callback);
    };

    RepositoryBase.prototype.retrieve = function (callback) {
        this._model.find({}, callback);
    };

    RepositoryBase.prototype.update = function (_id, item, callback) {
        this._model.update({ _id: _id }, item, callback);
    };

    RepositoryBase.prototype.delete = function (_id, callback) {
        this._model.remove({ _id: this.toObjectId(_id) }, function (err) {
            return callback(err, null);
        });
    };

    RepositoryBase.prototype.findById = function (_id, callback) {
        this._model.findById(_id, callback);
    };

    RepositoryBase.prototype.toObjectId = function (_id) {
        return mongoose.Types.ObjectId.createFromHexString(_id);
    };
    return RepositoryBase;
})();

module.exports = RepositoryBase;
