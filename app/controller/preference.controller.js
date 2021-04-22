const { preferences } = require('../models');
const db = require('../models');
const Preference = db.preferences;
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
	const preference = {
		pname: req.body.pname,
		temperature: req.body.temperature,
		humidity: req.body.humidity
	};

	// Save Tutorial in the database
	Preference.create(preference)
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
	const pname = req.query.pname;
	var condition = pname ? { pname: { [Op.like]: `%${pname}%` } } : null;

	preferences
		.findAll({ where: condition })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred while retrieving preferences.'
			});
		});
};

// Delete a preference with the specified id in the request
exports.delete = (req, res) => {
	const preferences = req.params.id;

	preferences
		.destroy({
			where: { id: id }
		})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: 'preference was deleted successfully!'
				});
			} else {
				res.send({
					message: `Cannot delete preference with id=${id}.!`
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: 'Could not delete preference with id=' + id
			});
		});
};
