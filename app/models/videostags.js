const Sequelize = require('sequelize');
const db = require('../util/database');
const Tag = require('./tags');
const Video = require('./videos');

const VideoTag = db.define('VideosTags', {
    tagID: {
        primaryKey: true,
        type: Sequelize.STRING,
        references: {
            model: Tag,
            key: "tagID"
        }
    },
    videoID: {
        primaryKey: true,
        type: Sequelize.STRING,
        references: {
            model: Video,
            key: "videoID"
        }
    }
});

VideoTag.belongsTo(Video, {as: 'Video', foreignKey: 'videoID'});
VideoTag.belongsTo(Tag, {as: 'Tag', foreignKey: 'tagID'});

module.exports = VideoTag;