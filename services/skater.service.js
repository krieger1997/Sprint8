const db = require("../models");
const Skater = db.skater;

exports.findAll = async () => {
    try {
        return await Skater.findAll();
    } catch (error) {
        console.error(error);
        return ({
            error: error.code || 500,
            message: error.message || 'Some error ocurred while retrieving skaters',
        });
    }
}
exports.findOne = async (id) => {
    try {
        return await Skater.findByPk(id);
    } catch (error) {
        console.error(error);
        return ({
            error: error.code || 500,
            message: error.message || 'Some error ocurred while retrieving skater by id',
        });
    }
}

exports.update = async (nombre, password, anosExperiencia, especialidad) => {
    try {
        return await Skater.update({
            nombre,
            password,
            anosExperiencia,
            especialidad
        }, {
            where: {
                skaterId
            }
        })
    } catch (error) {
        console.error(error);
        return ({
            error: error.code || 500,
            message: error.message || 'Some error ocurred while update skater',
        });
    }
}
exports.delete = async (skaterId) => {
    try {
        return await Skater.destroy({
            where: { skaterId }
        });
    } catch (error) {
        console.error(error);
        return ({
            error: error.code || 500,
            message: error.message || 'Some error ocurred while deleting a skater by id',
        });
    }
}