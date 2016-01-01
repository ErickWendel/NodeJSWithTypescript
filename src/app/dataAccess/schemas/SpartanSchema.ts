import DataAccess = require("./../../dataAccess/DataAccess");
import ISpartanModel = require("./../../model/interfaces/SpartanModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class SpartanSchema {
    
    static get schema() {
        var schema = new mongoose.Schema({
           name: {
               type: String,
               required: true
           },
           folk: {
               type: String,
               required: true
           },
           amountPeopleKilled: {
               type: Number,
               required: true
           } 
        });
        
        return schema;
    }
}
var schema = mongooseConnection.model<ISpartanModel>("Spartan", SpartanSchema.schema);
export = schema;
