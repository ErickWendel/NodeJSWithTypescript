import express = require('express');
interface IWriteController {
    create: express.RequestHandler;
    update: express.RequestHandler;
    delete: express.RequestHandler;
    
}

export = IWriteController;