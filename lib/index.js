/// <reference path="../typings/tsd.d.ts" />
var express = require("express");
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var BaseRoutes = require('./config/routes/base/BaseRoutes');

var app = express();
var port = parseInt(process.env.PORT, 10) || 5000;

//    app.set("port", port);
app.use(methodOverride('X-HTTP-Method')); // Microsoft
app.use(methodOverride('X-HTTP-Method-Override')); // Google/GData
app.use(methodOverride('X-Method-Override')); // IBM
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(new BaseRoutes().routes);

app.listen(port, function () {
    console.log("Node app is running at localhost:" + port);
});
