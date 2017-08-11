import express from "express";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpack from "webpack";
import webpackConfig from "../webpack.config.dev";
import open from "open";
import path from "path";
import bodyParser from "body-parser";

const port = process.env.PORT || 3000;
const app = express(),
      compiler = webpack(webpackConfig);

app.set('view engine', 'ejs')

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}))

app.use(webpackHotMiddleware(compiler, {
    log: console.log
}))

app.use(webpackConfig.output.publicPath, express.static(webpackConfig.context));
require("../src/api/db");

//Fire controllers
  app.get("/", function(req, res, next){
    let filename = path.join(compiler.outputPath,'test.html');
    compiler.outputFileSystem.readFile(filename, function(err, result){
      if (err) {
        return next(err);
      }
      res.set('content-type','text/html');
      res.send(result);
      res.end();
    });
  });

  app.post("/", function(req,res){

  });

  app.delete("/", function(req,res){

  });


app.use('/todolist', require('../src/api/router/todo'));

app.listen(port, (err) => {
  if (err){
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
})

