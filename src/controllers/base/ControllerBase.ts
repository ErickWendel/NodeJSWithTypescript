import express = require('express');
import IBaseController = require('./../interfaces/base/IBaseController');
class ControllerBase<T > implements IBaseController {
    retrieve: (request: express.Request, response: express.Response) => {
        
    }
    findById: (request: express.Request, response: express.Response) => {
        
    }
    findOne: (request: express.Request, response: express.Response) => {
        
    }
    create: (request: express.Request, response: express.Response) => {
        
    }
    update: (request: express.Request, response: express.Response) => {
        
    }
    delete: (request: express.Request, response: express.Response) => {
        
    }
    
}