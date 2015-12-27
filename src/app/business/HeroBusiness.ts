import HeroRepository = require('./../repository/HeroRepository');
import IHeroBusiness = require('./interfaces/IHeroBusiness');
import IHeroModel = require('./../model/interfaces/IHeroModel');
class HeroBusiness  implements IHeroBusiness {
    private _heroRepository: HeroRepository;
    
    constructor () {
        this._heroRepository = new HeroRepository();
    }  
        
    create (item: IHeroModel, callback: (error: any, result: any) => void) {
        this._heroRepository.create(item, callback);   
    }
   
    retrieve (callback: (error: any, result: any) => void) {
         this._heroRepository.retrieve(callback);
    }
    
    update (item: IHeroModel, callback: (error: any, result: any) => void) {
        this._heroRepository.update(item, callback);
    }
    
    delete (id: number, callback:(error: any, result: any) => void) {
        this._heroRepository.delete(id, callback);
    }
    
    findById (id: number, callback: (error: any, result: IHeroModel) => void) {
        this._heroRepository.findById(id, callback);
    }
}