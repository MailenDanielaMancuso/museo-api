const Excavacion = require('../models/excavacion');
const servicioArea = require('./area');

crearExcavacion = (req, res) => {
  return servicioArea.crearArea({ puntos: req.body.areaExcavacion })
  .then(area => {
    const excavacion = new Excavacion();

    const { puntoGPSExcavacion } = req.body;
    const puntoGPS = {
      type: 'Point',
      coordinates: [puntoGPSExcavacion.lat, puntoGPSExcavacion.lng],
    };
    excavacion.puntoGps = puntoGPS;

    // idExploracion: {type: Number, ref: 'Exploracion'}, areaExploracion
    excavacion.nombre = 'excavacion 1';
    excavacion.idArea = area._id;
    excavacion.idCiudad = 14; //Neuquen
    excavacion.idProvincia = 14; //Neuquen
    excavacion.idPais = 1; //Argentina
  
    return excavacion.save()
      .then(excavacion => res.status(200).send({ excavacion }))
      .catch(err => res.status(500).send({ message: `Error al excavacion area en la Base de Datos: ${err}`})); 
  })
  .catch(err => res.status(500).send({ message: err }));
  
};

removeExcavacion = (req, res) => {
    return res.status(200).send({ result: 'Excavacion eliminada' });
    // const { areaId } = req.params;
    // Area.remove({ '_id': areaId }, (err, value) => {
    //     if (err) return res.status(500).send(`Error al intentar eliminar area: ${areaId}`);
    //     if (value.result.n > 0) return res.status(200).send();
    //     return res.status(400).send('Bar Request');
    //     });
};

module.exports = {
  crearExcavacion,
  // removeExcavacion,
};
