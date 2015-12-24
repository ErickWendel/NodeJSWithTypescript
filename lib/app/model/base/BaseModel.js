var BaseModel = (function () {
    function BaseModel() {
    }
    Object.defineProperty(BaseModel.prototype, "id", {
        get: function () {
            return this.id;
        },
        set: function (id) {
            this.id = id;
        },
        enumerable: true,
        configurable: true
    });
    return BaseModel;
})();

module.exports = BaseModel;
