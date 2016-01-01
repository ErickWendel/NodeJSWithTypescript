var HeroBusiness = require("./../app/business/HeroBusiness");

var HeroController = (function () {
    function HeroController() {
    }
    HeroController.prototype.create = function (req, res) {
        try  {
            var hero = req.body;
            var heroBusiness = new HeroBusiness();
            heroBusiness.create(hero, function (error, result) {
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
    HeroController.prototype.update = function (req, res) {
        try  {
            var hero = req.body;
            var _id = req.params._id;
            var heroBusiness = new HeroBusiness();
            heroBusiness.update(_id, hero, function (error, result) {
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
    HeroController.prototype.delete = function (req, res) {
        try  {
            var _id = req.params._id;
            var heroBusiness = new HeroBusiness();
            heroBusiness.delete(_id, function (error, result) {
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
    HeroController.prototype.retrieve = function (req, res) {
        try  {
            var heroBusiness = new HeroBusiness();
            heroBusiness.retrieve(function (error, result) {
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
    HeroController.prototype.findById = function (req, res) {
        try  {
            var _id = req.params._id;
            var heroBusiness = new HeroBusiness();
            heroBusiness.findById(_id, function (error, result) {
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
    return HeroController;
})();
module.exports = HeroController;
