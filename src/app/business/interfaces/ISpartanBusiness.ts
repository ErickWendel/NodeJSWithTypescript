import IRead = require('./base/IRead');
import IWrite = require('./base/IWrite');
import ISpartanModel = require('./../../model/interfaces/ISpartanModel');

interface ISpartanBusiness extends IRead<ISpartanModel>, IWrite<ISpartanModel> {
    
} 
export = ISpartanBusiness;