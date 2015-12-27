var HeroModel = (function () {
    function HeroModel(heroModel) {
        this._heroModel = heroModel;
    }
    return HeroModel;
})();
Object.seal(HeroModel);
module.exports = HeroModel;
