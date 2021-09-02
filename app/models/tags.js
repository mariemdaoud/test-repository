const Sequelize = require('sequelize');
const db = require('../util/database');

// Définir table TAGS
const Tag = db.define('tags', {
	tagID: {
		type: Sequelize.STRING,
		allowNull: false,
		primaryKey: true
	},
	value: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	}
});

module.exports = Tag;