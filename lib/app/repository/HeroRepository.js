var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var HeroSchema = require('./../data_access/schemas/HeroSchema');

var RepositoryBase = require('./base/RepositoryBase');

var HeroRepository = (function (_super) {
    __extends(HeroRepository, _super);
    function HeroRepository() {
        _super.call(this, HeroSchema);
    }
    return HeroRepository;
})(RepositoryBase);

new HeroRepository().create({ name: "test3", amountPeopleSaved: 2, power: "test" }, function (e, r) {
    console.log('e', e);
    console.log('r', r);
});

Object.seal(HeroRepository);
module.exports = HeroRepository;
