import BaseModel = require('./base/BaseModel');

class SpartanModel extends BaseModel {
    public folk: string;
    public amountPeopleKilled: number;
}

Object.seal(SpartanModel);
export = SpartanModel;