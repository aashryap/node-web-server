var express = require("express");

var app = express();

// app.get("/", function(req, res){
//     res.send("hello world");
// })


var middleware = {
    requireAuthentication : function(req, res, next){
        console.log("private route hit");
        next();
    },
    logger : function(req, res, next){
        console.log(req.method + req.originalUrl +" "+ new Date().toString());
        next();
    }
}

 app.use(middleware.logger); //application level middleware

app.get("/about", middleware.requireAuthentication, function(req, res){ //route level middleware
    res.send("About us");
})

app.use(express.static(__dirname+"/public"));

//console.log(__dirname);


app.listen(4000);