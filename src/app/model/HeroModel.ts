import IHeroModel = require("./interfaces/HeroModel");

class HeroModel {
   
   private _heroModel: IHeroModel;
   
   constructor(heroModel: IHeroModel) {
       this._heroModel = heroModel;
   }
   get name (): string {
       return this._heroModel.name;
   }
   
   get power (): string {
       return this._heroModel.power;
   }
   
   get amountPeopleSaved (): number {
       return this._heroModel.amountPeopleSaved;
   }
   
    
}
Object.seal(HeroModel);
export =  HeroModel;