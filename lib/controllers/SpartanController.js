var SpartanBusiness = require('./../app/business/SpartanBusiness');

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
        }
    };
    SpartanController.prototype.update = function (req, res) {
        try  {
            var spartan = req.body;
            var _id = req.body.id;
            var spartanBusiness = new SpartanBusiness();
            spartanBusiness.update(_id, spartan, function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send({ "success": "success" });
            });
        } catch (e) {
            console.log(e);
        }
    };
    SpartanController.prototype.delete = function (req, res) {
        try  {
            var _id = req.body.id;
            var spartanBusiness = new SpartanBusiness();
            spartanBusiness.delete(_id, function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send({ "success": "success" });
            });
        } catch (e) {
            console.log(e);
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
        }
    };
    SpartanController.prototype.findById = function (req, res) {
        try  {
            var _id = req.body.id;
            var spartanBusiness = new SpartanBusiness();
            spartanBusiness.findById(_id, function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send({ "success": "success" });
            });
        } catch (e) {
            console.log(e);
        }
    };
    SpartanController.prototype.findOne = function (req, res) {
        try  {
            var name = req.body;
            var spartanBusiness = new SpartanBusiness();
            spartanBusiness.findOne({ 'name': name }, function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send(result);
            });
        } catch (e) {
            console.log(e);
        }
    };
    return SpartanController;
})();
module.exports = SpartanController;
