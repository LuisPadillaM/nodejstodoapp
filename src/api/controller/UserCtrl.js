let mongoose = require('mongoose');
let User = require('../model/User');

exports.get = function(req, res){
  User.find({}, function(err, data){
    if(err) throw err;
    res.json(data);
  });
};

exports.getOne = function(req, res){
  User.findById(req.params.id, function(err, data){
    if(err) throw err;
    res.json(data);
  });
};

exports.post =  function(req, res){
  let user= new User(req.body);
  user.save(function(err, data){
    if(err) throw err;
    res.json(data);
  });
};

exports.delete = function(req, res){
  User.findById(req.params.id).remove(function(err, data){
    if(err) throw err;
    res.json(data);
  })
};

exports.update = function(req, res){
	User.findById(req.params.id,function (err, user) {

      if (err) throw err;

      req.user = user;

      for(let prop in req.body)
      {
        req.user[prop] = req.body[prop];
      }

      req.user.save(function(err) {

        if (err)
          throw err;

        return res.json({ success: true });

      });

	});
};
