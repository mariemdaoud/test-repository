// const jwt = require("jsonwebtoken");

exports.logout = async (req, res) => {
    console.log("*****************************************************")
    res.cookie('jwt', '', { maxAge: 1 });
    // res.redirect('/');
    res.json({ message: "Au revoir !"});
};