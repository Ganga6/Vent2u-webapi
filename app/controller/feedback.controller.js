const { feedback } = require('../models');
const db = require('../models');
const Feedback = db.feedback;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
	console.log('create: ' + req);
	// Validate request
	if (!1 == 1) {
		console.log('yes no comply');
		res.status(400).send({
			message: 'Content can not be empty!'
		});
		return;
	}

	// Create a Tutorial
	const feedback = {
		uname: req.body.uname,
		description: req.body.description
	};

	// Save Tutorial in the database
	Feedback.create(feedback)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred while creating the Tutorial.'
			});
		});
};

// Retrieve all preference from the database.
exports.findAll = (req, res) => {
	const uname = req.query.uname;
	var condition = uname ? { uname: { [Op.like]: `%${uname}%` } } : null;

	Feedback.findAll({ where: condition })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred while retrieving feedback.'
			});
		});
};

// Delete a preference with the specified id in the request
exports.delete = (req, res) => {
	const feedback = req.params.id;

	feedback
		.destroy({
			where: { id: id }
		})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: 'Feedback was deleted successfully!'
				});
			} else {
				res.send({
					message: `Cannot delete feedback with id=${id}.!`
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: 'Could not delete feedback with id=' + id
			});
		});
};
