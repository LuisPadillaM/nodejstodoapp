import path from "path";


module.exports = function(app, compiler){

  app.get("/", function(req, res, next){
    var filename = path.join(compiler.outputPath,'test.html');
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

};
