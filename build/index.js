/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../typings/tsd.d.ts" />
var express = require("express");
var app = express();
var port = parseInt(process.env.PORT, 10) || 5000;
app.set("port", port);
app.get("/", function (request, response) {
    response.send("Hello World!");
});
app.listen(port, function () {
    console.log("Node app is running at localhost:" + port);
    ;
});
//# sourceMappingURL=index.js.map