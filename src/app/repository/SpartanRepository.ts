import SpartanModel = require("./../model/SpartanModel");
import ISpartanModel = require("./../model/interfaces/SpartanModel");
import SpartanSchema = require("./../dataAccess/schemas/SpartanSchema");
import RepositoryBase = require("./base/RepositoryBase");

class SpartanRepository  extends RepositoryBase<ISpartanModel> {
    constructor () {
        super(SpartanSchema);
    }
    
} 

Object.seal(SpartanRepository);
export = SpartanRepository;