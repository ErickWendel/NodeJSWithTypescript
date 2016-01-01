import ISpartanModel = require("./interfaces/SpartanModel");

class SpartanModel {
   private _spartanModel: ISpartanModel;
   
   constructor(spartan: ISpartanModel) {
       this._spartanModel = spartan;
   }
    get folk (): string {
        return this._spartanModel.folk; 
    }
    get amountPeopleKilled (): number {
        return this._spartanModel.amountPeopleKilled;
    }
    
    get name (): string {
        return this._spartanModel.name;
    }
    
}

Object.seal(SpartanModel);
export = SpartanModel;