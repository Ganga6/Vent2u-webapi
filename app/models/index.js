const Sequelize = require('sequelize');
const sequelize = new Sequelize('vent2u', 'root', 'root', {
	host: 'localhost',
	dialect: 'mysql',
	port: 3307
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.preferences = require('./preferences.model.js')(sequelize, Sequelize);
db.feedback = require('./feedback.model.js')(sequelize, Sequelize);
module.exports = db;
