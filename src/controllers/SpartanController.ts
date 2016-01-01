import express = require("express");
import SpartanBusiness = require("./../app/business/SpartanBusiness");
import IBaseController = require("./interfaces/base/BaseController");
import ISpartanModel = require("./../app/model/interfaces/SpartanModel");



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
                res.send({"error": "error in your request"});
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
                res.send({"error": "error in your request"});
                
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
                res.send({"error": "error in your request"});
                
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
                res.send({"error": "error in your request"});
                
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
                res.send({"error": "error in your request"});
                
            }
    }
    
        
}
export = SpartanController;    