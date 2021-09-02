const Sequelize = require('sequelize');
const db = require('../util/database');
const favoris = require('./favoris');

// Définir table USERS
const User = db.define('users', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	username: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false
	}
});

User.hasMany(favoris, {as: 'favoris', foreignKey: 'id'});

module.exports = User;