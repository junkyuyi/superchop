var users 		= require("../controllers/users.js"),
	questions 	= require("../controllers/questions.js"),
	answers 	= require("../controllers/answers.js");

module.exports = function(app) {

	/* login */
	app.post('/login', users.login);

	/* questions */
	app.get('/questions', questions.index);
	app.post('/questions', questions.create);
	app.get('/questions/:id', questions.show);
	app.post('/questions/:id', questions.update);

	/* answers */
	app.post('/answers/:id', answers.update);
}