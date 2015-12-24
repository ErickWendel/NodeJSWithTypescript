var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BaseRepository = require('./base/RepositoryBase');
var SpartanModel = require('./../model/SpartanModel');

var SpartanRepository = (function (_super) {
    __extends(SpartanRepository, _super);
    function SpartanRepository() {
        _super.apply(this, arguments);
    }
    return SpartanRepository;
})(BaseRepository);

Object.seal(SpartanModel);
module.exports = SpartanModel;
