import express = require("express");
interface ReadController {
    retrieve: express.RequestHandler;
    findById: express.RequestHandler;
    findOne: express.RequestHandler;
    
}
export = ReadController;