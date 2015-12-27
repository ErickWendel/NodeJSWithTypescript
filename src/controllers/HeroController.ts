
import express = require('express');
import HeroBusiness = require('./../app/business/HeroBusiness');
import IBaseController = require('./interfaces/base/IBaseController');
class HeroController implements IBaseController <HeroBusiness> {
    private _heroBusiness = new HeroBusiness();
    
    create(req: express.Request, res: express.Response): void {
            
    }
    update(req: express.Request, res: express.Response): void {
        
    }
    delete(req: express.Request, res: express.Response): void {
        
    }
    retrieve(req: express.Request, res: express.Response): void {
        
    }
    findById(req: express.Request, res: express.Response): void {
        
    }
    findOne(req: express.Request, res: express.Response): void {
        
    }
        
}