'use strict';
const mongoose = require('mongoose');
const Schema  = mongoose.Schema;


const Dupla = Schema({
  nombre:String,
  descripcion:String
});

const PointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});

const ExcavacionSchema = Schema({
  // codigo: String,
  // localidad: String,
  // provincia:String,
  
  idExcavacion: String,
  nombre: String,
  puntoGps: PointSchema,
  // fechaInicio: Date,
  // fechaBaja: Date,
  // descripcion: String,
  // motivoBaja: String,
  // director: String,
  // directorId: String,
  // paleontologo: String,
  // colector: String,
  idExploracion: { type: String, ref: 'Exploracion' },
  idArea: { type: String, ref: 'Area' },
  
  idCiudad: { type: Number, ref: 'Ciudad' },
  idProvincia: { type: Number, ref: 'Provincia' },
  idPais: { type: Number, ref: 'Pais' },
  // bochonesEncontrados: [String],
  // fotosExcavacion: [Dupla],
  // videosExcavacion: [String],
  // muestraHome: Boolean,
});

module.exports = mongoose.model('Excavacion', ExcavacionSchema);
