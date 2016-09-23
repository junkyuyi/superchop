var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');

module.exports = {
	update: function(req, res) {
		Answer.findOne({_id:req.params.id}, function(err, answer) {
			answer._likes.push(req.body._id);
			answer.save( function(err) {
				answer.save( function(err)  {
					if(err) {
						res.status(500).send(err);
					} else {
						res.json(answer);
					}
				});
			});
		});
	}
}