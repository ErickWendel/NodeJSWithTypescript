import IRead = require('./../interfaces/base/IRead');
import IWrite = require('./../interfaces/base/IWrite');
import IHeroModel = require('./../../model/interfaces/IHeroModel');

import mongoose = require('mongoose');
import ObjectId = mongoose.Types.ObjectId;

class RepositoryBase<T extends mongoose.Document> implements IRead<T>, IWrite<T> {
    
    private _model: mongoose.Model<mongoose.Document>;
    
    constructor (schemaModel: mongoose.Model<mongoose.Document>) {
        this._model = schemaModel;
    }
    
    create (item: T, callback: (error: any, result: any) => void) {
        this._model.create(item, callback);
        
    }
    
    retrieve (callback: (error: any, result: any) => void) {
         this._model.find({}, callback)
    }
    
    update (_id: ObjectId, item: T, callback: (error: any, result: any) => void) {
            this._model.update({_id: _id}, item, callback);
            
    }
        
    delete (_id: ObjectId, callback:(error: any, result: any) => void) {
        this._model.remove({_id: _id}, (err) => callback(err, null));
       
    }
    
    findById (_id: ObjectId, callback: (error: any, result: T) => void) {
        this._model.findById( _id.toString(), callback);
    }
    
    findOne(item: Object, callback: (error: any, result: T) => void) {
        this._model.findOne(item, callback);
    }
    
}

export = RepositoryBase;