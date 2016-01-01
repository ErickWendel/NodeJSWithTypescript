import DataAccess = require("./../../dataAccess/DataAccess");
import IHeroModel = require("./../../model/interfaces/HeroModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class HeroSchema {
   
  static get schema () {
       var schema =  mongoose.Schema({
           name : {
               type: String,
               required: true
           },
           power: {
               type: String,
               required: true
           },
           amountPeopleSaved: {
               type: Number,
               required: true
           }
       });
       
       return schema;
   }
   
}
var schema = mongooseConnection.model<IHeroModel>("Heroes", HeroSchema.schema);
export = schema;