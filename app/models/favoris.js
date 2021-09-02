const Sequelize = require('sequelize');
const db = require('../util/database');
const favoris = require('./favoris');
const User = require('./users');
const Video = require('./videos')

const Favoris = db.define('VideosTags', {
    id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
    date: {
        // primaryKey: true,
        type: Sequelize.DATE,
        references: {
            model: Video,
            key: "videoID"
        }
    }
});

Favoris.belongsTo(User, { foreignKey: 'id' });
Favoris.belongsTo(Video, { foreignKey: 'videoID' });

module.exports = Favoris;