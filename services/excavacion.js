const Excavacion = require('../models/excavacion');
const servicioArea = require('./area');
const servicioExploracion = require('./exploracion');


crearExcavacion = (req, res) => {
  // crear el area
  return servicioArea.crearArea({ puntos: req.body.areaExcavacion })
  .then(area => {
    // crear la excavacion
    const { puntoGPSExcavacion } = req.body;
    const puntoGPS = {
      type: 'Point',
      coordinates: [puntoGPSExcavacion.lat, puntoGPSExcavacion.lng],
    };
    
    const excavacion = new Excavacion({
      nombre: 'excavacion 1',
      idArea: area._id,
      idCiudad: 14, //Neuquen
      idProvincia: 14, //Neuquen
      idPais: 1, //Argentina
    });
    excavacion.puntoGps = puntoGPS;
    
    // crear la exploracion
    servicioExploracion.crearExploracion({
      puntos: req.body.areaExploracion,
      idExcavacion: excavacion._id,
    })
    .then(exploracion => {
      excavacion._idExploracion = exploracion._idExploracion;
    })
    .catch(err => res.status(500).send({ message: err }));
    
    return excavacion.save()
      .then(excavacion => res.status(200).send({ excavacion }))
      .catch(() => res.status(500).send({ message: 'Error al insertar la excavacion en la Base de Datos'})); 
  })
  .catch(() => res.status(500).send({ message: 'Error al crear el area de la excavacion en la Base de Datos' }));
  
};

module.exports = {
  crearExcavacion,
};
