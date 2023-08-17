const service = require("../services/skater.service");

exports.findAll = async (req, res) => {
  const result = await service.findAll();
  if (result.code !== undefined) {
    res.status(result.code).json({ message: result.message });
  }
  // const skaters = result.filter(skater=>skater.skaterId!=1);
  const skaters = result;

  console.log("SKATERS:", skaters)


  res.render('list', {
    skaters: skaters
  })

};

exports.findOne = async (req, res) => {
  if (!req.params.id) {
    res.status(400).json({ message: 'Content can`t be empty' });
  }
  const id = req.params.id;
  if (id != 1) {
    const result = await service.findOne(id);
    if (!result) {
      return res.status(404).send({ message: "Skater not found" });
    }
  } else {
    return res.status(404).send({ message: "Skater not found" });
  }
  if (result?.code !== undefined) {
    return res.status(result.code).json({ message: result.message });
  }
  return res.status(200).json(result);
}


exports.update = async (req, res) => {
  if (!req.body) {
    res.status(400).json({ message: 'Content can`t be empty' });
  }
  const { skaterId, nombre, password, anosExperiencia, especialidad } = req.body;
  const result = service.update(skaterId, nombre, password, anosExperiencia, especialidad);
  if (result.code !== undefined) {
    res.status(result.code).json({ message: result.message });
  }
  res.status(200).json(result);
}

exports.delete = async (req, res) => {
  if (!req.params.id) {
    res.status(400).json({ message: 'Content can`t be empty' });
  }
  const id = req.params.id;
  const result = await service.delete(id);
  if (result.code !== undefined) {
    res.status(result.code).json({ message: result.message });
  }
  res.status(200).json(result);
}