var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
	login: function(req, res) {
		User.findOne({name:req.body.name}, function(err, user) {
			if(err) {
				res.status(500).send(err);
			} else if ( !user ) {
				var usr = new User(req.body);
				usr.save( function(err) {
					if (err) {
						res.status(500).send(err);
					} else {
						res.json(usr);
					}
				});
			} else {
				res.json(user);
			}
		});
	}
}