const Tag = require("../models/tags");

/**
 * CRUD CONTROLLERS
 */

// Méthode get add tag
exports.addTag = async (req, res, next) => {
    try {
        const TAG_MODEL = {
            tagID: req.body.tagID,
            value: req.body.value
        }

        try {
            const tag = await Tag.create(TAG_MODEL);
            console.log("OK add Tag: ", tag);
            return res.status(201).json(tag);
        } catch (error) {
            console.log('ERROR in add Tag:', error);
            return res.status(500).json(error);
        }
    } catch (error) {
        return res.status(400).json("Bad Request");
    }
};

// Méthode get all tags
exports.getAllTags = async (req, res, next) => {
    try {
        const ALL = await Tag.findAll(); 
        console.log("OK get All Tags: ", ALL.map(el => el.dataValues));
        return res.status(200).json(ALL);
    } catch (error) {
        console.log('ERROR in get All Tags:', error);
        return res.status(500).json(error);
    }
};

// Méthode get tag
exports.getTag = async (req, res, next) => {
    try {
        const t = await Tag.findByPk(req.params.id);
        console.log("OK get Tag: ", t.dataValues);
        return res.status(200).json(t);
    } catch (error) {
        console.log('ERROR in get Tag:', error);
        return res.status(500).json(error);
    }
};

// Méthode update tag
exports.updateTag = async (req, res, next) => {
    try {
        const TAG_MODEL = {
            value: req.body.value
        }

        try {
            const t = await Tag.update(TAG_MODEL, { where: { tagID: req.params.id } });
            console.log("OK update Tag : ", t);
            return res.status(200).json(t);
        } catch (error) {
            console.log('ERROR in update Tag: ' , error);
            return res.status(500).json(error);
        }
    } catch (error) {
        return res.status(400).json("Bad Request");
    }
};

// Méthode delete tag
exports.deleteTag = async (req, res, next) => {
    try {
        const t = await Tag.destroy({ where: { tagID: req.params.id } });
        console.log("OK delete Tag : ", );
        return res.status(200).json(t);
    } catch (error) {
        console.log('ERROR in delete Tag:', error);
        return res.status(500).json(error);
    }
};
