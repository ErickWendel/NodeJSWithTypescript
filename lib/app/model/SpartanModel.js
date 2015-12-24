var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SpartanModel = (function (_super) {
    __extends(SpartanModel, _super);
    function SpartanModel() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(SpartanModel.prototype, "folk", {
        get: function () {
            return this.folk;
        },
        set: function (folk) {
            this.folk;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(SpartanModel.prototype, "amountPeopleKilled", {
        get: function () {
            return this.amountPeopleKilled;
        },
        set: function (amountPeopleKilled) {
            this.amountPeopleKilled = amountPeopleKilled;
        },
        enumerable: true,
        configurable: true
    });
    return SpartanModel;
})(BaseModel);

Object.seal(SpartanModel);
module.exports = SpartanModel;
