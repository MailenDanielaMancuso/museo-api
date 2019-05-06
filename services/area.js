const Area = require('../models/area');


crearArea = areaData => {
  const coordinates = [];
  areaData.puntos.forEach(punto => {
    coordinates.push([punto.lat, punto.lng]);
  });
  coordinates.push([areaData.puntos[0].lat, areaData.puntos[0].lng])
  const locacion = {
    type: 'Polygon',
    coordinates: [coordinates],
  };

  const area = new Area({
    nombre: 'excavacion 1',
    idCiudad: 14, // Neuquen
    idProvincia: 14, // Neuquen
    idPais: 1, //Argetina
    locacion,
  });

  return area.save();
};

recuperarArea = (req, res) => {
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

modificarArea = (req, res) => {
  return res.status(200).send({ result: 'update an area' });
    // const { areaId } = req.params;
    // Area.update({ _id: areaId }, req.body, (err, value) => {
    //     if (err) return res.status(500).send(`Error al intentar modificar el area: ${areaId}`);
    //     if (value.n > 0) return res.status(200).send();
    //     return res.status(400).send('Bad Request');
    //     });
};

eliminarArea = (req, res) => {
    return res.status(200).send({ result: 'area eliminada' });
    // const { areaId } = req.params;
    // Area.remove({ '_id': areaId }, (err, value) => {
    //     if (err) return res.status(500).send(`Error al intentar eliminar area: ${areaId}`);
    //     if (value.result.n > 0) return res.status(200).send();
    //     return res.status(400).send('Bar Request');
    //     });
};

module.exports = {
  // recuperarArea,
  crearArea,
  // modificarArea,
  // eliminarArea,
};
