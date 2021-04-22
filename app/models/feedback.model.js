module.exports = (sequelize, Sequelize) => {
	const Feedback = sequelize.define('feedback', {
		uname: {
			type: Sequelize.STRING,
			allowNull: false
		},
		description: {
			type: Sequelize.STRING,
			allowNull: false
		}
	});

	return Feedback;
};
