const express = require('express');

// Importer les packages
const sequelize = require('./util/database');
const User = require('./models/users');
const Video = require('./models/videos');
const Tag = require('./models/tags');
const VideoTag = require('./models/videostags');
const Favoris = require('./models/favoris');

// Initialiser l'Application avec express
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Définir correctement Headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Définir les routes
app.use('/users', require('./routes/users')); // users crud
app.use('/videos', require('./routes/videos')); // videos crud
app.use('/tags', require('./routes/tags')); // tags crud
app.use('/videoByTag', require('./routes/videostags')); // videoByTag method 
app.use('/favoris', require('./routes/favoris')); // favoris method 
app.use('/register', require('./routes/register')); // register
app.use('/login', require('./routes/login')); // login
app.use('/logout', require('./routes/logout')); // logout 


(async () =>{
    try{
        await sequelize.sync(
            // Reset database every time
            {force: false}
        );
        // Définition dans docker.compose.yml
        app.listen(process.env.EXTERNAL_PORT);
    } catch (error){
        console.log(error);
    }    
})()

