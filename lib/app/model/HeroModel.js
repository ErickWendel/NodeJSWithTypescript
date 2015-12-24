var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var HeroModel = (function (_super) {
    __extends(HeroModel, _super);
    function HeroModel() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(HeroModel.prototype, "power", {
        get: function () {
            return this.power;
        },
        set: function (power) {
            this.power = power;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(HeroModel.prototype, "amountPeopleSaved", {
        get: function () {
            return this.amountPeopleSaved;
        },
        set: function (amountPeopleSaved) {
            this.amountPeopleSaved = amountPeopleSaved;
        },
        enumerable: true,
        configurable: true
    });
    return HeroModel;
})(BaseModel);
Object.seal(HeroModel);
module.exports = HeroModel;
