const Sequelize = require('sequelize');

//  Env VARIABLES  déclarer dans le fichier docker-compose.yml
const sequelize = new Sequelize(
    process.env.PGDATABASE,
    process.env.PGUSER,
    process.env.PGPASSWORD,
    {
        host: process.env.PGHOST,
        dialect: 'postgres'
    });

module.exports = sequelize;