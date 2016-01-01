import express = require("express");
import HeroRoutes = require("./../HeroRoutes");
import SpartanRoutes = require("./../SpartanRoutes");
var app = express();
class BaseRoutes {
    
    get routes() {
        app.use("/", new HeroRoutes().routes);
        app.use("/", new SpartanRoutes().routes);
        return app;
    }
}
export = BaseRoutes;