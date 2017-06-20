let mongoose = require('mongoose');
let Todo = require('../model/todo');

exports.get = function(req, res){
  Todo.find({}, function(err, data){
    if(err) throw err;
    res.json(data);
  });
};

exports.getOne = function(req, res){
  Todo.findById(req.params.id, function(err, data){
    if(err) throw err;
    res.json(data);
  });
};

exports.post =  function(req, res){
  let todoItem = new Todo(req.body);
  todoItem.save(function(err, data){
    if(err) throw err;
    res.json(data);
  });
};

exports.delete = function(req, res){
  Todo.findById(req.params.id).remove(function(err, data){
    if(err) throw err;
    res.json(data);
  })
};

exports.update = function(req, res){
	Todo.findById(req.params.id,function (err, data) {
    if (!data){
       res.json({ success: false });
    } else {
      // req.reviews = data;
      //   // modelHelper.updateByRole.reviews(helper.decodeToken(helper.getToken(req)).role, req.body);
      // for(var p in req.body)
      // {
      //   req.reviews[p] = req.body[p];
      // }
      // req.reviews.save(function(err) {
      //   if (err){
      //     return res.json({ success: false });
      //   } else{
      //     return res.json({ success: true });
      //   }
      // });
    }
	});
};
