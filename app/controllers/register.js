const User = require("../models/users");
// const bcrypt = require('bcrypt');

// fonction pour vérifier  email est valide
function isValidEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

exports.register = async (req, res) => {

    const { username, email, password } = req.body;
    // const hashedPassword = await bcrypt.hash(password, 10);
    // console.log("hashedPassword",hashedPassword)

    const alreadyExistsUser = await User.findOne({ where: { username } }).catch(
        (err) => {
          console.log("Error: ", err);
        }
      );
    
      if (alreadyExistsUser) {
        return res.status(409).json({ message: "User avec le username existe déjà !" });
      }

      if (!isValidEmail(email)) {
        return res.status(409).json({ message: "Email n'est pas correct! "});
      }
    
      const newUser = new User({ username, email, password });
      const savedUser = await newUser.save().catch((err) => {
        console.log("Error: ", err);
        res.status(500).json({ error: "On ne peut pas register user pour le moment !" });
      });
    
      if (savedUser) res.json({ message: "Merci pour registering" });
};
