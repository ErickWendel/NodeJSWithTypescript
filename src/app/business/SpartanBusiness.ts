import SpartanRepository = require('./../repository/SpartanRepository');
import ISpartanBusiness = require('./interfaces/ISpartanBusiness');
import ISpartanModel = require('./../model/interfaces/ISpartanModel');
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
    
    update (item: ISpartanModel, callback: (error: any, result: any) => void) {
        this._spartanRepository.update(item, callback);
    }
    
    delete (id: number, callback:(error: any, result: any) => void) {
        this._spartanRepository.delete(id, callback);
    }
    
    findById (id: number, callback: (error: any, result: ISpartanModel) => void) {
        this._spartanRepository.findById(id, callback);
    }
}