var RepositoryBase = (function () {
    function RepositoryBase(schemaModel) {
        this._model = schemaModel;
    }
    RepositoryBase.prototype.create = function (item, callback) {
        this._model.create(item, function (erro, success) {
            return callback(erro, success);
        });
    };

    RepositoryBase.prototype.retrieve = function (callback) {
    };

    RepositoryBase.prototype.update = function (item, callback) {
    };

    RepositoryBase.prototype.delete = function (id, callback) {
    };

    RepositoryBase.prototype.findById = function (id, callback) {
    };
    return RepositoryBase;
})();

module.exports = RepositoryBase;
