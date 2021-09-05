const Video = require("../models/videos");
const Tag = require("../models/tags");
const VideosTag = require("../models/videostags");

exports.getVidosByTag = async (req, res) => {

    try {
        const allVideos = []
        // find list des videos by tag
        const  tagID  = req.params.id;
        const allVideosTag = await VideosTag.findAll({
            include: [
               { model: Video,
                 as: 'Video',
                }
            ],
            where: { tagID: tagID }
        });

        allVideosTag.forEach(VideosTag => {
            allVideos.push( VideosTag.Video );    
        });

        console.log("OK get Tag: ", allVideos);
        return res.status(200).json(allVideos);
    } catch (error) {
        console.log('ERROR in find Videos by tag :', error);
        return res.status(500).json(error);
    }

};

// Méthode get all Videos Tag
exports.getAllVideosTags = async (req, res, next) => {
    try {
        const ALL = await VideosTag.findAll(); 
        console.log("OK get All Videos Tag: ", ALL.map(el => el.dataValues));
        return res.status(200).json(ALL);
    } catch (error) {
        console.log('ERROR in get All Videos Tag:', error);
        return res.status(500).json(error);
    }
};


// Méthode  add video by tag
exports.addVideoByTag = async (req, res) => {
    try {
        const VIDEOTag_MODEL = {
            videoID: req.body.videoID,
            tagID: req.body.tagID
        }

        try {
            const videotag = await VideosTag.create(VIDEOTag_MODEL);
            console.log("OK add Video by tag: ", videotag);
            return res.status(201).json(videotag);
        } catch (error) {
            console.log('ERROR in add Video by tag:', error);
            return res.status(500).json(error);
        }
    } catch (error) {
        return res.status(400).json("Bad Request");
    }
};


// Méthode delete video by tag
exports.deleteVideoByTag = async (req, res) => {
    try {
        const allVideos = []
        const tagID =  req.params.id;
        const VideosT = await VideosTag.findAll({ where: { tagID }});
        const vt = await VideosTag.destroy({ where: { tagID: tagID } });
        VideosT.forEach(VideosTag => {
            allVideos.push( {videoID : VideosTag.videoID} );    
        });

        allVideos.forEach(video => {
            Video.destroy({ where: { videoID: video.videoID } });
        });

        console.log("OK delete Video by tag : " );
        return res.status(200).json(allVideos);
    } catch (error) {
        console.log('ERROR in delete Video by tag:', error);
        return res.status(500).json(error);
    }
};


  
