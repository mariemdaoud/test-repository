const User = require("../models/users");
const Favoris = require("../models/favoris");

// Méthode add favoris video by user 
exports.addFavorisByUser = async(req, res) => {

        // const v = await Favoris.findAll({
        //     include: [{
        //     model: User,
        //     // as: 'users'
        //     }],
        // })
   
    try {
        const FAVORISVIDEO_MODEL = {
            userID: req.body.userID,
            videoID: req.body.videoID
        }

        try {
            const favorisVideo = await Favoris.create(FAVORISVIDEO_MODEL);
            console.log("OK add favoris video by user: ", favorisVideo);
            return res.status(201).json(favorisVideo);
        } catch (error) {
            console.log('ERROR in add favoris video by user:', error);
            return res.status(500).json(error);
        }
    } catch (error) {
        return res.status(400).json("Bad Request");
    }
};

// Méthode find favoris by user
exports.findFavorisByUser = async(req, res) => {
    try {
        const v = await Favoris.findAll({
            include: [{
            model: User,
            // as: 'users'
            }],
        })
      
        console.log("OK get All favoris by favoris: ", v.map(el => el.dataValues));
        return res.status(200).json(v);
    } catch (error) {
        console.log('ERROR in get All favoris by user:', error);
        return res.status(500).json(error);
    }
};