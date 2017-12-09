var express = require("express");
var app     = express();
var path    = require("path");

app.use(express.static(__dirname + '/public'));
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.post('/login',function(req,res){
    console.log("jaha: ", req);
    alert("jaha");
    res.json({"error" : true,"message" : "Login fail."});
});

app.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

app.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/sitemap.html'));
});

app.listen(3000);

console.log("Running at Port 3000");