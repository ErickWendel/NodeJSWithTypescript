var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BaseRepository = require('./base/RepositoryBase');

var HeroRepository = (function (_super) {
    __extends(HeroRepository, _super);
    function HeroRepository() {
        _super.apply(this, arguments);
    }
    return HeroRepository;
})(BaseRepository);

Object.seal(HeroRepository);
module.exports = HeroRepository;
