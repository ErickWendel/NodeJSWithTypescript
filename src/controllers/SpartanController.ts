import express = require('express');
import SpartanBusiness = require('./../app/business/SpartanBusiness');
import IBaseController = require('./interfaces/base/IBaseController');
import ISpartanModel = require('./../app/model/interfaces/ISpartanModel');



class SpartanController implements IBaseController <SpartanBusiness> {
    
    create(req: express.Request, res: express.Response): void {
            try {
                                   
                var spartan: ISpartanModel = <ISpartanModel>req.body;
                var spartanBusiness = new SpartanBusiness();
                spartanBusiness.create(spartan, (error, result) => {
                    if(error) res.send({"error": "error"});
                    else res.send({"success": "success"});
                });
            }
            catch (e)  {
                console.log(e);
            }
    }
    update(req: express.Request, res: express.Response): void {
        try {
             var spartan: ISpartanModel = <ISpartanModel>req.body;
             var _id: string = req.params._id;
             var spartanBusiness = new SpartanBusiness();
                spartanBusiness.update(_id, spartan, (error, result) => {
                    if(error) res.send({"error": "error"});
                    else res.send({"success": "success"});
                });   
            }
            catch (e)  {
                console.log(e);
            }
    }
    delete(req: express.Request, res: express.Response): void {
        try {
                
             var _id: string = req.params._id;
             var spartanBusiness = new SpartanBusiness();
                spartanBusiness.delete(_id, (error, result) => {
                    if(error) res.send({"error": "error"});
                    else res.send({"success": "success"});
                });   
            }
            catch (e)  {
                console.log(e);
            }
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {
              
             var spartanBusiness = new SpartanBusiness();
                spartanBusiness.retrieve((error, result) => {
                    if(error) res.send({"error": "error"});
                    else res.send(result);
                });   
            }
            catch (e)  {
                console.log(e);
            }
    }
    findById(req: express.Request, res: express.Response): void {
        try {
             
             var _id: string = req.params._id;

             var spartanBusiness = new SpartanBusiness();
                spartanBusiness.findById(_id, (error, result) => {
                    if(error) res.send({"error": "error"});
                    else res.send(result);
                });   
            }
            catch (e)  {
                console.log(e);
            }
    }
    findOne(req: express.Request, res: express.Response): void {
        try {
             var item: ISpartanModel = <ISpartanModel>req.body;
             var spartanBusiness = new SpartanBusiness();
                spartanBusiness.findOne(item, (error, result) => {
                    if(error) res.send({"error": "error"});
                    else res.send(result);
                });  
            }
            catch (e)  {
                console.log(e);
            }
    }
        
}
export = SpartanController;    