    /// <reference path="../typings/tsd.d.ts" />

    import express = require("express");
    import Middlewares = require("./config/middlewares/base/MiddlewaresBase");
    
    var app = express();
    var port = parseInt(process.env.PORT, 10) || 5000;
    app.set("port", port);
    app.use(Middlewares.configuration);
    
    app.listen(port, () => {
        console.log("Node app is running at localhost:" + port);
       
    });
