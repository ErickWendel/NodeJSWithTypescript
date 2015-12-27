import SpartanRepository = require('./../repository/SpartanRepository');
import ISpartanBusiness = require('./interfaces/ISpartanBusiness');
import ISpartanModel = require('./../model/interfaces/ISpartanModel');
import mongoose = require('mongoose');
import ObjectId = mongoose.Types.ObjectId;

class SpartanBusiness  implements ISpartanBusiness {
    private _spartanRepository: SpartanRepository;
    
    constructor () {
        this._spartanRepository = new SpartanRepository();
    }  
        
    create (item: ISpartanModel, callback: (error: any, result: any) => void) {
        this._spartanRepository.create(item, callback);   
    }
   
    retrieve (callback: (error: any, result: any) => void) {
         this._spartanRepository.retrieve(callback);
    }
    
    update (_id: ObjectId, item: ISpartanModel, callback: (error: any, result: any) => void) {
        this._spartanRepository.findOne({name: name}, (err, res) => {
            if(err) callback(err, res);
            
            else {
                    this._spartanRepository.update(res._id, item, callback);
                    
                }
        });    
    }
    
    delete (_id: ObjectId, callback:(error: any, result: any) => void) {
        this._spartanRepository.delete(_id, callback);
    }
    
    findById (_id: ObjectId, callback: (error: any, result: ISpartanModel) => void) {
        this._spartanRepository.findById(_id, callback);
    }
    findOne (item: Object, callback: (error: any, result: ISpartanModel) => void ) {
        this._spartanRepository.findOne(item, callback);
    }
}
Object.seal(SpartanBusiness);
export = SpartanBusiness;