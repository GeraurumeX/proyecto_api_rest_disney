require('dotenv').config();


module.exports = {
    //Configuración BD
    username: process.env.DB_USERNAME  || "root",
    password: process.env.DB_PASSWORD  || null,
    database: process.env.DB_DATABASE  || "database_disney_api",
    host: process.env.DB_HOST  || "127.0.0.1",
    dialect: process.env.DB_DIALECT  || "mysql",


    //Configurar Seeds
    seederStorage: "sequelize",
    seederStorageTableName: "seeds", 


    //Configurar Migrations
    migrationStorage: "sequelize",
    migrationStorageTableName: "migrations",



}