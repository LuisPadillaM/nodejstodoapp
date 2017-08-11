let mongoose = require('mongoose');
let Todo = require('../model/Todo');

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
  // Todo.findById(req.params.id).remove(function(err, data){
  //   if(err) throw err;
  //   res.json(data);
  // })
  Todo.findByIdAndRemove(req.params.id, function(err){
    if(err) throw err;
    return res.json({ success: true });
  })
};

exports.update = function(req, res){
	// Todo.findById(req.params.id,function (err, todo) {

  //     if (err) throw err;

  //     req.todo = todo;

  //     for(let prop in req.body)
  //     {
  //       req.todo[prop] = req.body[prop];
  //     }

  //     req.todo.save(function(err) {

  //       if (err)
  //         throw err;

  //       return res.json({ success: true });

  //     });

	// });
  Todo.findByIdAndUpdate(req.params.id, req.body, function(err, todo){
    if(err) throw err;
    console.log(todo);
    return res.json({ success: true });
  })
};
