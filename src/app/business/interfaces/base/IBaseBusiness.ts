import IReadBusiness = require('./../common/IRead');
import IWriteBusiness = require('./../common/IWrite'); 
interface IBaseBusiness<T> extends IReadBusiness<T>, IWriteBusiness<T> {
    
}
export = IBaseBusiness;