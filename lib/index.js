/// <reference path="../typings/tsd.d.ts" />
var express = require("express");
var bodyParser = require('body-parser');
var BaseRoutes = require('./config/routes/base/BaseRoutes');

var app = express();
var port = parseInt(process.env.PORT, 10) || 5000;
app.set("port", port);

app.get("/", function (request, response) {
    response.send("Hello World!");
});
app.use(bodyParser.json());
app.use(new BaseRoutes().routes);

app.listen(port, function () {
    console.log("Node app is running at localhost:" + port);
});
