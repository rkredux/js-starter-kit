var express = require("express");
var path = require("path")
var open = require("open");
var PORT = 5000;
var app = express();

//listen to the home route
app.get("/", function(req, res){
  console.log(__dirname);
  console.log(path.join(__dirname, "../src/index.html"))
  res.send(path.join(__dirname, '../src/index.html'))
})

//listen on the port
app.listen(PORT, function(err){
  if(err){
    console.log(err);
  } else{
    open ('http://localhost:' + PORT)
  }
})
