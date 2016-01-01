/// <reference path="../../../typings/tsd.d.ts" />
var HeroRepository = require("./../repository/HeroRepository");

var HeroBusiness = (function () {
    function HeroBusiness() {
        this._heroRepository = new HeroRepository();
    }
    HeroBusiness.prototype.create = function (item, callback) {
        this._heroRepository.create(item, callback);
    };

    HeroBusiness.prototype.retrieve = function (callback) {
        this._heroRepository.retrieve(callback);
    };

    HeroBusiness.prototype.update = function (_id, item, callback) {
        var _this = this;
        this._heroRepository.findById(_id, function (err, res) {
            if (err)
                callback(err, res);
            else
                _this._heroRepository.update(res._id, item, callback);
        });
    };

    HeroBusiness.prototype.delete = function (_id, callback) {
        this._heroRepository.delete(_id, callback);
    };

    HeroBusiness.prototype.findById = function (_id, callback) {
        this._heroRepository.findById(_id, callback);
    };
    HeroBusiness.prototype.findOne = function (item, callback) {
        this._heroRepository.findOne(item, callback);
    };
    return HeroBusiness;
})();

// var Hero: IHeroModel = <IHeroModel> { name: "Hero from Business", power: "super Power", amountPeopleSaved: 200 };
// var heroRepository = new HeroRepository();
// heroRepository.create(Hero, (err, result) => {
//     if(err)
//         console.log("erro ao criar", err);
//     else
//         console.log("sucesso", result);
// });
// heroRepository.retrieve((err, result) => {
//    if(err)
//         console.log("erro ao get all");
//    else console.log("retrieve", result);
// });
// heroRepository.findOne({name: Hero.name}, (err, res) => {
//     if(err)
//         console.log("error ao findOne", err);
//     else {
//         res.power = "sayan";
//         heroRepository.update(res._id, res, (erro, sucess) => {
//             if(erro) console.log("erro ao atualizar", erro);
//             else console.log("atualizado", sucess);
//         });
//     }
// });
Object.seal(HeroBusiness);
module.exports = HeroBusiness;
