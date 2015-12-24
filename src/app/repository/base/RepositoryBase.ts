import IRead = require('./../interfaces/IRead');
import IWrite = require('./../interfaces/IWrite');
class BusinessBase<T> implements IRead<T>, IWrite<T>{
    
    create (item:T) {
        
    }
    
    retrieve () {
        
        return null;
    }
    
    update (item:T) {
        return null;
    }
    delete (id:number) {
        
    }
    findById (id:number) {
        return null;
    }
    
}

export = BusinessBase;