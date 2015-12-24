import BaseModel = require('./base/BaseModel');

class SpartanModel extends BaseModel {
    private folk: string;
    private amountPeopleKilled: number;
    
    get folk(): string { 
        return this.folk;
    }
    
    set folk (folk: string) {
        this.folk;
    }
    get amountPeopleKilled(): number {
        return this.amountPeopleKilled;
    }
    set amountPeopleKilled(amountPeopleKilled: number){
        this.amountPeopleKilled = amountPeopleKilled;
    }
    
}

Object.seal(SpartanModel);
export = SpartanModel;