import express = require("express");
import bodyParser = require("body-parser");

import MethodOverride = require("./../MethodOverride");
import BaseRoutes = require("./../../routes/base/BaseRoutes"); 


class MiddlewaresBase {
    
    static get configuration () {
         var app = express();
         app.use(bodyParser.json());
         app.use(MethodOverride.configuration());
         app.use(new BaseRoutes().routes);
         
         return app;
    }    
}
Object.seal(MiddlewaresBase);
export = MiddlewaresBase;