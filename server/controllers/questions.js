var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

module.exports = {
	index: function(req, res) {
		Question.find()
		.populate('_user')
		.exec( function(err, data) {
			if(err) {
				res.status(500).send(err);
			} else {
				res.json(data);
			}
		});
	},
	create: function(req, res) {
		var qstn = new Question(req.body);
		qstn.save(function(err) {
			if(err) {
				res.status(500).send(err);
			} else {
				res.json(qstn);
			}
		});
	},
	show: function(req, res) {
		Question.findOne({_id:req.params.id})
		.populate([
			{
				path: "_user",
				model: "User"
			},
			{
				path: "_answers",
				model: "Answer",
				populate: {
					path: "_user",
					model: "User"
				}
			}])
		.exec( function(err, data) {
			if(err) {
				res.status(500).send(err);
			} else {
				res.json(data);
			}
		});
	},
	update: function(req, res) {
		Question.findOne({_id:req.params.id}, function(err, question) {
			var ans = new Answer(req.body);
			question._answers.push(ans);
			ans.save( function(err) {
				question.save( function(err)  {
					if(err) {
						res.status(500).send(err);
					} else {
						res.json(ans);
					}
				});
			});
		});
	}
}