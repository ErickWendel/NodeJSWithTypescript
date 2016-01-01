/// <reference path="../../../typings/tsd.d.ts" />
import HeroRepository = require("./../repository/HeroRepository");
import IHeroBusiness = require("./interfaces/HeroBusiness");
import IHeroModel = require("./../model/interfaces/HeroModel");
import HeroModel = require("./../model/HeroModel");


class HeroBusiness  implements HeroBusiness {
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
    
    update (_id: string, item: IHeroModel, callback: (error: any, result: any) => void) {
        
        this._heroRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);
            
            else 
                this._heroRepository.update(res._id, item, callback);
               
        });    
    }
    
    delete (_id: string, callback:(error: any, result: any) => void) {
        this._heroRepository.delete(_id , callback);
    }
    
    findById (_id: string, callback: (error: any, result: IHeroModel) => void) {
        this._heroRepository.findById(_id, callback);
    }
    findOne(item: Object, callback: (error: any, result: IHeroModel) => void) {
        this._heroRepository.findOne(item, callback);
    }
}

// var Hero: IHeroModel = <IHeroModel> { name: "Hero from Business", power: "super Power", amountPeopleSaved: 200 };
// var heroRepository = new HeroRepository();
 
// heroRepository.create(Hero, (err, result) => {
//     if(err)
//         console.log("erro ao criar", err);
//     else 
//         console.log("sucesso", result);
// });

// heroRepository.retrieve((err, result) => {
//    if(err)
//         console.log("erro ao get all");
//    else console.log("retrieve", result); 
// });

// heroRepository.findOne({name: Hero.name}, (err, res) => {
//     if(err)
//         console.log("error ao findOne", err);
//     else {
        
//         res.power = "sayan";
//         heroRepository.update(res._id, res, (erro, sucess) => {
//             if(erro) console.log("erro ao atualizar", erro);
//             else console.log("atualizado", sucess);
              
            
//         });
//     } 
// });





Object.seal(HeroBusiness);
export = HeroBusiness;