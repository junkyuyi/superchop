var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
	question: {
		type: String,
		required: true,
		minlength: 10
	},
	description: {
		type: String
	},
	_user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	_answers: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Answer'
	}]
}, 
{
	timestamps: true
});

var Question = mongoose.model('Question', QuestionSchema);