import HeroRepository = require('./../repository/HeroRepository');
import IHeroBusiness = require('./interfaces/IHeroBusiness');
import IHeroModel = require('./../model/interfaces/IHeroModel');
import HeroModel = require('./../model/HeroModel');
import mongoose = require ('mongoose');
import ObjectId = mongoose.Types.ObjectId;
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
    
    update (_id: ObjectId, item: IHeroModel, callback: (error: any, result: any) => void) {
        this._heroRepository.findOne({name: name}, (err, res) => {
            if(err) callback(err, res);
            
            else {
                    this._heroRepository.update(res._id, item, callback);
                    
                }
        });    
    }
        
    
    
    delete (_id: ObjectId, callback:(error: any, result: any) => void) {
        this._heroRepository.delete(_id, callback);
    }
    
    findById (_id: ObjectId, callback: (error: any, result: IHeroModel) => void) {
        this._heroRepository.findById(_id, callback);
    }
    findOne(item: Object, callback: (error: any, result: IHeroModel) => void) {
        this._heroRepository.findOne(item, callback);
    }
}

// var Hero: IHeroModel = <IHeroModel> { name: 'Hero from Business', power: 'super Power', amountPeopleSaved: 200 };
// var heroRepository = new HeroRepository();
 
// heroRepository.create(Hero, (err, result) => {
//     if(err)
//         console.log('erro ao criar', err);
//     else 
//         console.log('sucesso', result);
// });

// heroRepository.retrieve((err, result) => {
//    if(err)
//         console.log('erro ao get all');
//    else console.log('retrieve', result); 
// });

// heroRepository.findOne({name: Hero.name}, (err, res) => {
//     if(err)
//         console.log('error ao findOne', err);
//     else {
        
//         res.power = 'sayan';
//         heroRepository.update(res._id, res, (erro, sucess) => {
//             if(erro) console.log('erro ao atualizar', erro);
//             else console.log('atualizado', sucess);
              
            
//         });
//     } 
// });





Object.seal(HeroBusiness);
export = HeroBusiness;