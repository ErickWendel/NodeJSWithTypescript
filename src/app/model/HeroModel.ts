import BaseModel = require('./base/BaseModel');
class HeroModel extends BaseModel {
    public power: string;
    public amountPeopleSaved: number;
}
Object.seal(HeroModel);
export =  HeroModel;