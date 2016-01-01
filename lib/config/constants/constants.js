var Constants = (function () {
    function Constants() {
    }
    Constants.DB_CONNECTION_STRING = "mongodb://localhost/warriors";
    return Constants;
})();
Object.seal(Constants);
module.exports = Constants;
