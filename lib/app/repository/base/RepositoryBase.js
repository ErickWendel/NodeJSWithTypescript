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
        this._model.remove({ _id: _id }, function (err) {
            return callback(err, null);
        });
    };

    RepositoryBase.prototype.findById = function (_id, callback) {
        this._model.findById(_id.toString(), callback);
    };

    RepositoryBase.prototype.findOne = function (item, callback) {
        this._model.findOne(item, callback);
    };
    return RepositoryBase;
})();

module.exports = RepositoryBase;
