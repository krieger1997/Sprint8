require("dotenv").config()
const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.DIALECT,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.skater = require("./skater.model")(sequelize, Sequelize);

(async ()=>{
  try {
    await sequelize.sync({force:true});
    await  db.skater.create({// siempre quedara con id 1
      email:'admin@js.cl',
      nombre:'admin',
      password:'$2a$10$g9HOu3HC53QYaih1lzqsmuYn3dvcQp5O./brK/AKV9UxeiCG79.le',//admin
      anosExperiencia:99,
      especialidad:'ADMIN',
      foto:'',
      estado:true
    });
    console.log("Tablas creadas! con force")
  } catch (error) {
    console.error("Error al crear tablas");
  } 


})();

module.exports = db;