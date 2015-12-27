import IRead = require('./../interfaces/base/IRead');
import IWrite = require('./../interfaces/base/IWrite');
import IHeroModel = require('./../../model/interfaces/IHeroModel');
import mongoose = require('mongoose');

class RepositoryBase<T> implements IRead<T>, IWrite<T> {
    
    private _model: mongoose.Model<mongoose.Document>;
    
    constructor (schemaModel: mongoose.Model<mongoose.Document>) {
        this._model = schemaModel;
    }
    
    
    create (item: T, callback: (error: any, result: any) => void) {
        this._model.create(item, (erro, success) => callback(erro, success));
    }
    
    
    retrieve (callback: (error: any, result: any) => void) {
         
    }
    
    update (item: T, callback: (error: any, result: any) => void) {
        
    }
    
    delete (id: number, callback:(error: any, result: any) => void) {
        
    }
    
    findById (id: number, callback: (error: any, result: T) => void) {
    
    }
    
}

export = RepositoryBase;