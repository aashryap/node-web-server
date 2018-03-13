var express = require("express");
var PORT = process.env.PORT || 4000;
var app = express();
var middleware = require("./middleware.js");

// app.get("/", function(req, res){
//     res.send("hello world");
// })


 app.use(middleware.logger); //application level middleware

app.get("/about", middleware.requireAuthentication, function(req, res){ //route level middleware
    res.send("About us");
})

app.use(express.static(__dirname+"/public"));

//console.log(__dirname);


app.listen(PORT);