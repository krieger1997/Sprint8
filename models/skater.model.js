module.exports = (sequelize, Sequelize) => {
    const Skater = sequelize.define("skater",{
        skaterId: { 
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        anosExperiencia: {
            type: Sequelize.STRING,
            allowNull: false,
            field:'anos_experiencia'
        },
        especialidad: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        foto: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        estado:{
            type: Sequelize.BOOLEAN,
            allowNull:false
        }
    },{
        timestamps:false
    })
    return Skater;
}