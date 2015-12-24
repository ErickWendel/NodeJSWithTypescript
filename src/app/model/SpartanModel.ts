import BaseModel = require('./base/BaseModel');

class SpartanModel extends BaseModel {
    private folk: string;
    private amountPeopleKilled: number;
    
    get folk() : string { 
        return this.folk;
    }
    
    set folk (folk: string):void {
        this.folk = folk;
    }
}

Object.seal(SpartanModel);
export = SpartanModel;