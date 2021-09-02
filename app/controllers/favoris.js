const User = require("../models/users");
const Favoris = require("../models/favoris");

// Méthode find favoris by user
exports.findFavorisByUser = async(req, res) => {
    try {
        const v = await Favoris.findAll({
            include: [{
            model: User,
            as: 'users'
            }],
        })
      
        console.log("OK get All favoris by favoris: ", v.map(el => el.dataValues));
        return res.status(200).json(v);
    } catch (error) {
        console.log('ERROR in get All favoris by user:', error);
        return res.status(500).json(error);
    }
};