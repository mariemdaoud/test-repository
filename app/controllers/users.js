const User = require("../models/users");

/**
 * CRUD CONTROLLERS
 */

// Méthode get all users
exports.getAllUsers = async (req, res, next) => {
    try {
        const ALL = await User.findAll(); 
        console.log("OK get All Users: ", ALL.map(el => el.dataValues));
        return res.status(200).json(ALL);
    } catch (error) {
        console.log('ERROR in get All Users:', error);
        return res.status(500).json(error);
    }
};

// Méthode get user
exports.getUser = async (req, res, next) => {
    try {
        const u = await User.findByPk(req.params.id);
        console.log("OK get User: ", u.dataValues);
        return res.status(200).json(u);
    } catch (error) {
        console.log('ERROR in get User:', error);
        return res.status(500).json(error);
    }
};

// Méthode update user
exports.updateUser = async (req, res, next) => {
    try {
        const USER_MODEL = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }

        try {
            const u = await User.update(USER_MODEL, { where: { username: req.params.username } });
            console.log("OK update User : ", u);
            return res.status(200).json(u);
        } catch (error) {
            console.log('ERROR in update User: ' , error);
            return res.status(500).json(error);
        }
    } catch (error) {
        return res.status(400).json("Bad Request");
    }
};

// Méthode delete user
exports.deleteUser = async (req, res, next) => {
    try {
        const u = await User.destroy({ where: { id: req.params.id } });
        console.log("OK delete User : ", );
        return res.status(200).json(u);
    } catch (error) {
        console.log('ERROR in delete User:', error);
        return res.status(500).json(error);
    }
};
