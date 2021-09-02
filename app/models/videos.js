const Sequelize = require('sequelize');
const db = require('../util/database');

// Définir table VIDEOS
const Video = db.define('videos', {
	videoID: {
		type: Sequelize.STRING,
		allowNull: false,
		primaryKey: true
	},
	nom: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	},
	description: {
		type: Sequelize.STRING,
	},
	url: {
		type: Sequelize.STRING,
		allowNull: false
	}
});

Video.hasMany(favoris, {as: 'favoris', foreignKey: 'videoID'});

module.exports = Video;