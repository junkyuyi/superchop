var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 2,
		unique: true
	}
}, 
{
	timestamps: true
});

// UserSchema.pre('save', function(done){
// 	// add 'pre' stuff here
// 	done();
// });

UserSchema.plugin(uniqueValidator);

var User = mongoose.model('User', UserSchema);