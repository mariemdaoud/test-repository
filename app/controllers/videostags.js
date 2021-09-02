const Video = require("../models/videos");
const Tag = require("../models/tags");
const VideosTag = require("../models/videostags");

exports.getVidosByTag = async (req, res) => {

    try {
        // const allVideos = []
        // find list des videos by tag
        const  tagID  = req.params.tagID;
        const allVideosTag = await VideosTag.findAll({
            include: [
               { model: Tag, where: { tagID: tagID }}
            ]
        });

        // allVideosTag.map(el => allVideos.push( await Video.findOne({ where: { videoID : el.videoID  } })        
        // ));

        console.log("OK get Tag: ", allVideosTag);
        return res.status(200).json(allVideosTag);
    } catch (error) {
        console.log('ERROR in find Videos by tag :', error);
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
        const VideosTag = await VideosTag.findAll({ where: { tagID }});
        const vt = await VideosTag.destroy({ where: { tagID: req.params.id } });

        console.log("OK delete Video by tag : ", );
        return res.status(200).json(vt);
    } catch (error) {
        console.log('ERROR in delete Video by tag:', error);
        return res.status(500).json(error);
    }
};


  
