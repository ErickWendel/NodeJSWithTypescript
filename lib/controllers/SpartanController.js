var SpartanBusiness = require("./../app/business/SpartanBusiness");

var SpartanController = (function () {
    function SpartanController() {
    }
    SpartanController.prototype.create = function (req, res) {
        try  {
            var spartan = req.body;
            var spartanBusiness = new SpartanBusiness();
            spartanBusiness.create(spartan, function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send({ "success": "success" });
            });
        } catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    SpartanController.prototype.update = function (req, res) {
        try  {
            var spartan = req.body;
            var _id = req.params._id;
            var spartanBusiness = new SpartanBusiness();
            spartanBusiness.update(_id, spartan, function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send({ "success": "success" });
            });
        } catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    SpartanController.prototype.delete = function (req, res) {
        try  {
            var _id = req.params._id;
            var spartanBusiness = new SpartanBusiness();
            spartanBusiness.delete(_id, function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send({ "success": "success" });
            });
        } catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    SpartanController.prototype.retrieve = function (req, res) {
        try  {
            var spartanBusiness = new SpartanBusiness();
            spartanBusiness.retrieve(function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send(result);
            });
        } catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    SpartanController.prototype.findById = function (req, res) {
        try  {
            var _id = req.params._id;

            var spartanBusiness = new SpartanBusiness();
            spartanBusiness.findById(_id, function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send(result);
            });
        } catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    return SpartanController;
})();
module.exports = SpartanController;
