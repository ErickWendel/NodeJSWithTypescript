var HeroModel = (function () {
    function HeroModel(heroModel) {
        this._heroModel = heroModel;
    }
    Object.defineProperty(HeroModel.prototype, "name", {
        get: function () {
            return this._heroModel.name;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(HeroModel.prototype, "power", {
        get: function () {
            return this._heroModel.power;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(HeroModel.prototype, "amountPeopleSaved", {
        get: function () {
            return this._heroModel.amountPeopleSaved;
        },
        enumerable: true,
        configurable: true
    });
    return HeroModel;
})();
Object.seal(HeroModel);
module.exports = HeroModel;
