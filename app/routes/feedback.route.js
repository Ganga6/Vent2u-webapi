module.exports = (app) => {
	const feedback = require('../controller/feedback.controller.js');

	var router = require('express').Router();

	// Create a new Tutorial
	router.post('/', feedback.create);
	// Retrieve a single Tutorial with id
	//router.get("/:preferenceid", preferences.findOne);
	// Delete a Tutorial with id
	router.delete('/:id', feedback.delete);

	// Retrieve all Tutorials
	router.get('/', feedback.findAll);

	app.use('/api/feedback', router);
};
