var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('fredpost',['fredpost']);
var bodyParser = require("body-parser");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

// Initial get request to the database that returns all the data and transfer it to scope variable
app.get('/fredpost', function(req, res){
	db.fredpost.find(function(err, docs){
		res.json(docs);
	});
});

// Inserting a new post in the database
app.post('/fredpost', function(req, res) {
	db.fredpost.insert(req.body,function(err, doc){
		res.json(doc);
	});
});

// Update the upvote entry of a post when the upvote thumbs for a post ins clicked
app.put('/fredpost/:id', function(req, res){
	var id = req.params.id;
	db.fredpost.findAndModify({query : {_id: mongojs.ObjectId(id)},
		update : {$set: {upvotes: req.body.upvotes}},
		new: true}, function(err, doc){
			res.json(doc);
		});
});

app.listen(3000);
console.log("Server is running on port 3000");