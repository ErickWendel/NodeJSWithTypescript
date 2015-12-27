var DataAccess = require('./../../data_access/DataAccess');

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

var SpartanSchema = (function () {
    function SpartanSchema() {
    }
    Object.defineProperty(SpartanSchema, "schema", {
        get: function () {
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
        },
        enumerable: true,
        configurable: true
    });
    return SpartanSchema;
})();
var schema = mongooseConnection.model('Spartan', SpartanSchema.schema);
module.exports = schema;
