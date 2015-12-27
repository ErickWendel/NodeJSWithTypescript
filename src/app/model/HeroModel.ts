import IHeroModel = require('./interfaces/IHeroModel');

class HeroModel {
   
   private _heroModel: IHeroModel;
   
   constructor(heroModel: IHeroModel) {
       this._heroModel = heroModel;
   }
    
}
Object.seal(HeroModel);
export =  HeroModel;