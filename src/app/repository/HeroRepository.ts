import HeroModel = require('./../model/HeroModel');
import IHeroModel = require('./../model/interfaces/IHeroModel');
import HeroSchema = require('./../data_access/schemas/HeroSchema');
import RepositoryBase = require('./base/RepositoryBase');

class HeroRepository  extends RepositoryBase<IHeroModel> {
    constructor () {
        super(HeroSchema);
    }    
} 

Object.seal(HeroRepository);
export = HeroRepository;