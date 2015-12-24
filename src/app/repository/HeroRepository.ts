import BaseRepository = require('./base/RepositoryBase');
import HeroModel = require('./../model/HeroModel');

class HeroRepository extends BaseRepository<HeroModel> {
    
} 

Object.seal(HeroRepository);
export = HeroRepository;