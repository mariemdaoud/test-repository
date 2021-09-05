const Sequelize = require('sequelize');
const db = require('../util/database');
const User = require('./users');
const Video = require('./videos')

// Définir table favoris
const Favoris = db.define('favoris', {
    favorisId: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
    date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW 
    }
});

Favoris.belongsTo(User, { foreignKey: 'userID' });
Favoris.belongsTo(Video, { foreignKey: 'videoID' });

module.exports = Favoris;