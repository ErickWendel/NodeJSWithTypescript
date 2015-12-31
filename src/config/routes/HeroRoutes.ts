import express = require("express");
import HeroController = require('./../../controllers/HeroController');

var router = express.Router();
class HeroRoutes {
    private _heroController: HeroController;
    constructor () {
        this._heroController = new HeroController();   
    }
    get routes () {
        router.get('/heroes', new HeroController().retrieve);
        router.post('/heroes', new HeroController().create);
        router.put('/heroes', this._heroController.update);
        router.get('/heroes/_:id', this._heroController.findById);
        router.delete('/heroes/_:id', this._heroController.delete);
        router.get('/heroes', this._heroController.findOne);
        return router;
    }
    
    
}

Object.seal(HeroRoutes);
export = HeroRoutes;