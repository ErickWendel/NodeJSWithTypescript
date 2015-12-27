
import express = require('express');
import SpartanBusiness = require('./../app/business/SpartanBusiness');
import IBaseController = require('./interfaces/base/IBaseController');

class SpartanController implements IBaseController <SpartanBusiness> {
    private _spartanBusiness = new SpartanBusiness();
    
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
export = SpartanController;