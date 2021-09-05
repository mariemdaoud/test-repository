const Video = require("../models/videos");
const VideosTag = require("../models/videostags");

/**
 * CRUD CONTROLLERS
 */

// Méthode get add video
exports.addVideo = async (req, res, next) => {
    try {
        const VIDEO_MODEL = {
            videoID: req.body.videoID,
            nom: req.body.nom,
            description: req.body.description,
            url: req.body.url
        }

        try {
            const video = await Video.create(VIDEO_MODEL);
            console.log("OK add Video: ", video);
            return res.status(201).json(video);
        } catch (error) {
            console.log('ERROR in add Video:', error);
            return res.status(500).json(error);
        }
    } catch (error) {
        return res.status(400).json("Bad Request");
    }
};

// Méthode get all Videos avec pagination 
exports.getAllVideos = async (req, res, next) => {
    try {
        const pageAsNumber = Number.parseInt(req.query.page);
        const sizeAsNumber = Number.parseInt(req.query.size);
  
        let page = 0;
        if(!Number.isNaN(pageAsNumber) && pageAsNumber > 0){
        page = pageAsNumber;
        }
  
        let size = 10;
        if(!Number.isNaN(sizeAsNumber) && !(sizeAsNumber > 10) && !(sizeAsNumber < 1)){
        size = sizeAsNumber;
        }
  
        const videosWithCount = await Video.findAndCountAll({
        limit: size,
        offset: page * size
        });
        return res.send({
                    content: videosWithCount.rows,
                    totalPages: Math.ceil(videosWithCount.count / Number.parseInt(size))
               });
    } catch (error) {
        console.log('ERROR in get All Videos:', error);
        return res.status(500).json(error);
    }
};

// Méthode get video
exports.getVideo = async (req, res, next) => {
    console.log(req)
    try {
        const v = await Video.findByPk(req.params.id);
        console.log("OK get Video: ", v.dataValues);
        return res.status(200).json(v);
    } catch (error) {
        console.log('ERROR in get Video:', error);
        return res.status(500).json(error);
    }
};

// Méthode update video
exports.updateVideo = async (req, res, next) => {
    try {
        const VIDEO_MODEL = {
            nom: req.body.nom,
            description: req.body.description,
            url: req.body.url
        }

        try {
            const v = await Video.update(VIDEO_MODEL, { where: { videoID: req.params.id } });
            console.log("OK update Video : ", v);
            return res.status(200).json(v);
        } catch (error) {
            console.log('ERROR in update Video: ' , error);
            return res.status(500).json(error);
        }
    } catch (error) {
        return res.status(400).json("Bad Request");
    }
};

// Méthode delete video
exports.deleteVideo = async (req, res, next) => {
    try {
        const v = await Video.destroy({ where: { videoID: req.params.id } });
        console.log("OK delete Video : ", );
        return res.status(200).json(v);
    } catch (error) {
        console.log('ERROR in delete Video:', error);
        return res.status(500).json(error);
    }
};
