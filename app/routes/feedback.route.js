module.exports = (app) => {
	const feedback = require('../controller/feedback.controller.js');

	var router = require('express').Router();

	// Create a new Feedback
	router.post('/', feedback.create);

	// Delete a Feedback with id
	router.delete('/:id', feedback.delete);

	// Retrieve all Feedbacks
	router.get('/', feedback.findAll);

	app.use('/api/feedback', router);
};
