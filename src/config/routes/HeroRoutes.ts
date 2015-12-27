import express = require("express");
import HeroController = require('./../../controllers/HeroController');

var app = express();

class HeroRoutes {
    private _heroController: HeroController;
    constructor () {
        this._heroController = new HeroController();   
    }
    get routes () {
        app.get('/hero', this._heroController.retrieve);
        app.get('/hero', this._heroController.delete);
        app.get('/hero', this._heroController.findById);
        app.get('/hero', this._heroController.findOne);
        app.get('/hero', this._heroController.update);
        app.get('/hero', this._heroController.create);
        return app;
    }
    
    
}