"use strict";
exports.__esModule = true;
var UserController_1 = require("./controllers/UserController");
var TuitController_1 = require("./controllers/TuitController");
var express = require("express");
var mongoose = require("mongoose");
//create a app
var app = express();
//mongoDB
var dbUrl = "mongodb+srv://yongxi:123zhou@tuiter.87xcz.mongodb.net/tuiter?retryWrites=true&w=majority";
mongoose.connect(dbUrl);
app.get("/hello", function (req, res) { return res.send("Hello World!"); });
app.get("/add/:a/:b", function (req, res) {
    return res.send(req.params.a + req.params.b);
});
//heroku
var PORT = 4000;
app.listen(process.env.PORT || PORT);
var userController = new UserController_1["default"](app);
var tuitController = new TuitController_1["default"](app);
