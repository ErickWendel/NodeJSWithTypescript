import IRead = require('./base/IRead');
import IWrite = require('./base/IWrite');
import IHeroModel = require('./../../model/interfaces/IHeroModel');

interface IHeroBusiness extends IRead<IHeroModel>, IWrite<IHeroModel> {
    
} 
export = IHeroBusiness;