const service = require("../services/auth.service");

exports.signUp = async (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: 'El contenido no puede ir vacío' });
  }
  const { nombre, password, anosExperiencia, especialidad, email } = req.body;
  if (!req.files) {
    return res.status(400).send("No se encontraron archivos");
  }
  const foto = req.files.foto;
  
  const result = await service.signUp(nombre, password, anosExperiencia, especialidad, foto, email);

  if (result?.code !== undefined) {
    return res.status(result.code).send({
      message: result.message || 'Some error ocurred!',
    })
  }
  res.status(201).send(result);
}
exports.singIn = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: 'Content can`t be empty' });
  }
  const { nombre, password } = req.body;

  const result = await service.singIn(nombre, password);
  console.log(result);
  if (result?.code !== undefined) {
    console.log(result.message )
    return res.status(result.code).send({
      message: 'Some error ocurred!',
    })
  }
  return res.status(200).json({ token:result });

}