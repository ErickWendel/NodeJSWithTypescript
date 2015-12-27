import HeroModel = require('./../model/HeroModel');

import IHeroModel = require('./../model/interfaces/IHeroModel');
import HeroSchema = require('./../data_access/schemas/HeroSchema');

import RepositoryBase = require('./base/RepositoryBase');

class HeroRepository  extends RepositoryBase<IHeroModel> {
    constructor () {
        super(HeroSchema);
    }
    
} 

new HeroRepository().create(<IHeroModel> { name: "test3", amountPeopleSaved: 2, power: "test"},
     (e,r ) =>
{ console.log('e', e); console.log('r', r)});

Object.seal(HeroRepository);
export = HeroRepository;