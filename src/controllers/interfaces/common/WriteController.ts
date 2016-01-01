import express = require("express");
interface WriteController {
    create: express.RequestHandler;
    update: express.RequestHandler;
    delete: express.RequestHandler;
    
}

export = WriteController;