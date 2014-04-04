// include our Mongoose setup
require('./models/todo');

var express = require('express');
var todos = require('./controllers/todos');
var http = require('http');
var path = require('path');
var engine = require('ejs-locals');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.engine( 'ejs', engine );
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

// Routes
app.get('/', todos.index);
app.post('/create', todos.create);
app.get('/destroy/:id', todos.delete);
app.get('/edit/:id', todos.edit);
app.post('/update/:id', todos.update);

// Run our Node server
var port = app.get('port');
app.listen(port);
console.log('Node server listening on port ' + port);