    /// <reference path="../typings/tsd.d.ts" />

    import Mongoose = require('Mongoose');
    import Constants = require('./../../config/constants/Constants');
    class DataAccess {
        public static db: any;
        public  static dbConnection: any;
        constructor () {
            dbConnection  = Mongoose.connection;
            dbConnection.once('open', () => {
                console.log('Conectado.');
            });
           db = Mongoose.connect(Constants.DB_CONNECTION_STRING);
        }
       
        
           
    }
    //test
    new DataAccess();
    export = DataAccess;