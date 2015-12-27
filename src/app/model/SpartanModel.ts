import ISpartanModel = require('./interfaces/ISpartanModel');

class SpartanModel {
   private _spartanModel: ISpartanModel;
   
   constructor(spartan: ISpartanModel) {
       this._spartanModel = spartan;
   }
    
}

Object.seal(SpartanModel);
export = SpartanModel;