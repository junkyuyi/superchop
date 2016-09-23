var mongoose = require('mongoose');

var AnswerSchema = new mongoose.Schema({
	answer: {
		type: String,
		required: true,
		minlength: 5
	},
	detail: {
		type: String
	},
	_user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	_likes: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}]
}, 
{
	timestamps: true
});

var Answer = mongoose.model('Answer', AnswerSchema);