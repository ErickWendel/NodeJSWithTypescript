var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var HeroSchema = require("./../dataAccess/schemas/HeroSchema");
var RepositoryBase = require("./base/RepositoryBase");

var HeroRepository = (function (_super) {
    __extends(HeroRepository, _super);
    function HeroRepository() {
        _super.call(this, HeroSchema);
    }
    return HeroRepository;
})(RepositoryBase);

Object.seal(HeroRepository);
module.exports = HeroRepository;
