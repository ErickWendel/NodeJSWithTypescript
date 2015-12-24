import BaseModel = require('./base/BaseModel');

class SpartanModel extends BaseModel {
    public folk: string;
    public amountPeopleKilled: number;
    
    get folk() : string { 
        return this.folk;
    }
    
    set folk (folk: string): void {
        this.folk = folk;
    }
}

Object.seal(SpartanModel);
export = SpartanModel;