const db = require("../models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const path = require("path");
// const fs = require('fs');

const Skater = db.skater;

exports.signUp = async (nombre, password, anosExperiencia, especialidad, foto, email) => {
  try {
    const allowedExtensions = ['.png', '.jpg', 'jpeg'];
    const extensionName = path.extname(foto.name);
    if (!allowedExtensions.includes(extensionName)) {
      return ({
        code: 422,
        message: error.message || 'Invalid file type.',
      });
    }

    
    const salt = await bcryptjs.genSalt(+process.env.SALT);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const skater = await Skater.create({
      nombre,
      password: hashedPassword,
      anosExperiencia,
      especialidad,
      email,
      foto: '',// se guarda como vacio en primera instancia, antes de generar la ID
      estado:false
    });
    // console.log(skater)
    const _path = `${__dirname}/../public/images/${skater.skaterId}${extensionName}`;
    foto.mv(_path, (error) => {
      if (error) {
        console.log(error)
        return ({
          code: error.code || 500,
          message: error.message || 'Some error ocurred while creating skater (file error).',
        });
      }
      skater.foto = _path;
      skater.save();

    });
    return 'Skater created successfully';

  } catch (err) {
    console.error( err);
    return ({
      code: err.code || 500,
      message: err.message || 'Some error ocurred while creating skater.',
    });
  }
}

exports.singIn = async (nombre, password) => {

  try {
    const foundSkater = await Skater.findOne({ where: { nombre } });
    console.log(foundSkater);



    if (!foundSkater) {
      return ({
        code: 400,
        message: 'User not found',
      });
    }

    const correctPassword = await bcryptjs.compare(password, foundSkater.password);
    if (!correctPassword) {
      return ({
        code: 400,
        message: 'wrong password',
      });
    }
    const payload = { user: { id: foundSkater.id } };
    const token = jwt.sign(
      payload,
      process.env.SECRET,
      {
        expiresIn: 3600000
      }
    );
    return token;
  } catch (err) {
    console.error(err);
    return ({
      code: err.code || 500,
      message: err.message || 'Something went wrong while logging in',
    });
  }
}