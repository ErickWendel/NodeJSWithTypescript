import methodOverride = require("method-override");
import express = require("express");
class MethodOverride {
    
   static configuration () : any {
        var app = express();
        app.use(methodOverride("X-HTTP-Method"));          
        app.use(methodOverride("X-HTTP-Method-Override")); 
        app.use(methodOverride("X-Method-Override"));      
        app.use(methodOverride("_method"));
        return app;
    }
}


Object.seal(MethodOverride);
export = MethodOverride;
