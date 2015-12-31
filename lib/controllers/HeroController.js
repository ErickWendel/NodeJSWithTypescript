var HeroBusiness = require('./../app/business/HeroBusiness');

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
        }
    };
    HeroController.prototype.update = function (req, res) {
        try  {
            var hero = req.body;
            var _id = req.body.id;
            var heroBusiness = new HeroBusiness();
            heroBusiness.update(_id, hero, function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send({ "success": "success" });
            });
        } catch (e) {
            console.log(e);
        }
    };
    HeroController.prototype.delete = function (req, res) {
        try  {
            var _id = req.body.id;
            var heroBusiness = new HeroBusiness();
            heroBusiness.delete(_id, function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send({ "success": "success" });
            });
        } catch (e) {
            console.log(e);
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
        }
    };
    HeroController.prototype.findById = function (req, res) {
        try  {
            var _id = req.body.id;
            var heroBusiness = new HeroBusiness();
            heroBusiness.findById(_id, function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send({ "success": "success" });
            });
        } catch (e) {
            console.log(e);
        }
    };
    HeroController.prototype.findOne = function (req, res) {
        try  {
            var name = req.body;
            var heroBusiness = new HeroBusiness();
            heroBusiness.findOne({ 'name': name }, function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send(result);
            });
        } catch (e) {
            console.log(e);
        }
    };
    return HeroController;
})();
module.exports = HeroController;
