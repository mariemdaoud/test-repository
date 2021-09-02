const User = require("../models/users");
const jwt = require("jsonwebtoken");
// const bcrypt = require('bcrypt');

// fonction pour vérifier  password 
// function checkPassword(pw) {
//     return bcrypt.compareSync(pw, this.password);
// }

// Méthode login
exports.login = async (req, res, next) => {

    const {  username, password } = req.body;

    const userWithUsername = await User.findOne({ where: { username } }).catch(
        (err) => {
        console.log("Error: ", err);
        }
    );

    if (!userWithUsername)
        return res
        .status(400)
        .json({ message: "Username ou password incorrect !" });

//    const validPassword = await checkPassword(password);
    

    if (userWithUsername.password !== password ) //|| !validPassword
        return res
        .status(400)
        .json({ message: "Username ou password incorrect !" });

    const jwtToken = jwt.sign(
        { id: userWithUsername.id, username: userWithUsername.username },
        "secret"
    );

    res.json({ message: "Bienvenue !", token: jwtToken });
};
