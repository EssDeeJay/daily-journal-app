var mongoose = require('mongoose');
var password = encodeURIComponent("Shre@21595");
var uri = "mongodb+srv://shreyank:"+ password +"@cluster0-nlrdk.mongodb.net/todoapp?retryWrites=true&w=majority";
var localUri = "mongodb://localhost/todo-api";
mongoose.set('debug', true);
mongoose.connect(uri, { useNewUrlParser: true });

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");
