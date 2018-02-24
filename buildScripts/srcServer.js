import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
import config from "../webpack-config-dev";

const PORT = 5000;
const app = express();
const compiler = webpack(config);

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));


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
