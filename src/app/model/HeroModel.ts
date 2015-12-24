import BaseModel = require('./base/BaseModel');
class HeroModel extends BaseModel {
    private power: string;
    private amountPeopleSaved: number;
    
    get power () {
        return this.power
    }
    set power (power: string) {
        this.power = power;
    }
    
    get amountPeopleSaved() {
        return this.amountPeopleSaved;
    }
    set amountPeopleSaved(amountPeopleSaved: number) {
        this.amountPeopleSaved = amountPeopleSaved;
    }
    
}
Object.seal(HeroModel);
export =  HeroModel;