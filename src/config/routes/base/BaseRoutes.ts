import express = require('express');
import HeroRoutes = require('./../HeroRoutes');
var app = express();
class BaseRoutes {
    
    get routes() {
        app.use('/', new HeroRoutes().routes);
        
        return app;
    }
}
export = BaseRoutes;