module.exports = (sequelize, Sequelize) => {
	const Preference = sequelize.define('perference', {
		pname: {
			type: Sequelize.STRING,
			allowNull: false
		},
		temperature: {
			type: Sequelize.STRING,
			allowNull: false
		},
		humidity: {
			type: Sequelize.STRING,
			allowNull: false
		}
	});

	return Preference;
};
