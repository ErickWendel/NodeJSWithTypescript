import BaseRepository = require('./base/RepositoryBase');
import SpartanModel = require('./../model/SpartanModel');

class SpartanRepository extends BaseRepository<SpartanModel> {
    
} 


Object.seal(SpartanModel);
export = SpartanModel;