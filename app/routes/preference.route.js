module.exports = (app) => {
	const preferences = require('../controller/preference.controller.js');

	var router = require('express').Router();

	// Create a new Tutorial
	router.post('/', preferences.create);
	// Retrieve a single Tutorial with id
	//router.get("/:preferenceid", preferences.findOne);
	// Delete a Tutorial with id
	router.delete('/:preferenceid', preferences.delete);

	// Retrieve all Tutorials
	router.get('/', preferences.findAll);

	app.use('/api/preferences', router);
};
