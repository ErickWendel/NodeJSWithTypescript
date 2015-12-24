/// <reference path="../typings/tsd.d.ts" />
var Mongoose = require('Mongoose');
var Constants = require('./../../config/constants/Constants');
var DataAccess = (function () {
    function DataAccess() {
        dbConnection = Mongoose.connection;
        dbConnection.once('open', function () {
            console.log('Conectado.');
        });
        db = Mongoose.connect(Constants.DB_CONNECTION_STRING);
    }
    return DataAccess;
})();

//test
new DataAccess();
module.exports = DataAccess;
