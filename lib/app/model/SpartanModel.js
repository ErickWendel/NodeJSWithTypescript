var SpartanModel = (function () {
    function SpartanModel(spartan) {
        this._spartanModel = spartan;
    }
    Object.defineProperty(SpartanModel.prototype, "folk", {
        get: function () {
            return this._spartanModel.folk;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpartanModel.prototype, "amountPeopleKilled", {
        get: function () {
            return this._spartanModel.amountPeopleKilled;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(SpartanModel.prototype, "name", {
        get: function () {
            return this._spartanModel.name;
        },
        enumerable: true,
        configurable: true
    });
    return SpartanModel;
})();

Object.seal(SpartanModel);
module.exports = SpartanModel;
