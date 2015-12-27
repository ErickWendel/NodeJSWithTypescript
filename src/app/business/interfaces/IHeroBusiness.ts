
import IBaseBusiness = require('./base/IBaseBusiness');
import IHeroModel = require('./../../model/interfaces/IHeroModel');

interface IHeroBusiness extends IBaseBusiness<IHeroModel> {
    
} 
export = IHeroBusiness;