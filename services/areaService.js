const Area = require('../models/area');


createArea = (req, res) => {
  const { nombre, idCiudad, idProvincia, idPais, locacion } = req.body;
  const area = new Area();
  area.nombre = nombre;
  area.idCiudad = idCiudad;
  area.idProvincia = idProvincia;
  area.idPais = idPais;
  area.locacion = locacion;

  return area.save((err, nuevaArea) => {
      if(err) res.status(500).send({message:`Error al insertar area en la Base de Datos: ${err}`});
      res.status(200).send({ area: nuevaArea});
  });
};

getAreaById = (req, res) => {
    result = {
      type: 'Polygon',
      coordinates: [[
        [-35.603500,-58.381500],
        [-35.603600,-67.603700],
        [-34.603700,-58.381300 ],
        [-36.603500,-56.381500],
      ]]
    };
    return res.status(200).send({ result });
    // const { areaId } = req.params;
    // Area.findById(areaId, (err, area) => {
    //     if (err) return res.status(500).send(`Error al intentar recuperar el area: ${areaId}`);
    //     if (!area) return res.status(404).send({message: 'El area buscada no existe'});
    //     return res.status(200).send({ area });
    // })
};

updateArea = (req, res) => {
    return res.status(200).send({ result: 'update an area' });
    // const { areaId } = req.params;
    // Area.update({ _id: areaId }, req.body, (err, value) => {
    //     if (err) return res.status(500).send(`Error al intentar modificar el area: ${areaId}`);
    //     if (value.n > 0) return res.status(200).send();
    //     return res.status(400).send('Bad Request');
    //     });
};

removeArea = (req, res) => {
    return res.status(200).send({ result: 'delete an area' });
    // const { areaId } = req.params;
    // Area.remove({ '_id': areaId }, (err, value) => {
    //     if (err) return res.status(500).send(`Error al intentar eliminar area: ${areaId}`);
    //     if (value.result.n > 0) return res.status(200).send();
    //     return res.status(400).send('Bar Request');
    //     });
};

module.exports = {
  getAreaById,
  createArea,
  updateArea,
  removeArea,
};
