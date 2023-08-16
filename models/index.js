require("dotenv").config()
const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.DIALECT,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.actor = require("./skater.model")(sequelize, Sequelize);

module.exports = db;