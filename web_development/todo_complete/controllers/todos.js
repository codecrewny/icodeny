var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');

// Index action
exports.index = function(req, res){
  Todo.find().
  sort('updated-at').
  exec(function (err, todos, count) {
    res.render('index', {
      title: "My Todos",
      todos: todos
    });
  });
};

// Create action and redirect to home after we save the file
exports.create = function(req, res) {
  new Todo({
    content: req.body.content,
    updated_at: Date.now()
  }).save( function( err, todo, count) {
    res.redirect('/');
  });
};


//Destroy action
exports.delete = function(req, res) {
  Todo.findById(req.params.id, function(err, todo) {
    todo.remove(function(err, todo) {
      res.redirect('/');
    });  
  });
};

// Edit action
exports.edit = function(req, res) {
  Todo.find().
  sort('updated-at').
  exec(function(err, todos) {
    res.render('edit', {
      title: 'Edit Todo',
      todos: todos,
      current: req.params.id
    });
  });
};

exports.update = function (req, res ){
  Todo.findById( req.params.id, function ( err, todo ){
    todo.content    = req.body.content;
    todo.updated_at = Date.now();
    todo.save( function (err, todo, count){
      res.redirect( '/' );
    });
  });
};